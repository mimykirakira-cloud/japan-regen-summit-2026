import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the summit landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Japan リジェンサミット 2026/);
  assert.match(html, /いのち、始まる。/);
  assert.match(html, /experience-dialogue\.mp4/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("server-renders the LP review case study", async () => {
  const response = await render("/lp-review");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /LP改善 Before \/ After/);
  assert.match(html, /600名超の経営者コミュニティ/);
  assert.match(html, /ホワイト/);
  assert.match(html, /マーケティング/);
  assert.doesNotMatch(html, /横山/);
});

test("keeps the case-study content and styling maintainable", async () => {
  const [page, css, readme] = await Promise.all([
    readFile(new URL("../app/lp-review/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/lp-review/review.css", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);
  assert.match(page, /const comparisons/);
  assert.match(page, /const lenses/);
  assert.match(css, /@media\(max-width:560px\)/);
  assert.match(readme, /LP改善 Before \/ After解説ページ/);
});
