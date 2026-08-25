import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan リジェンサミット 2026｜いのち、始まる。",
  description: "2026年9月26日、宮城県東松島市KIBOTCHAで開催。人と地球が、ともに豊かになっていく未来を体験する1日。",
  keywords: ["リジェネラティブ", "東松島", "KIBOTCHA", "防災", "サミット"],
  openGraph: { title: "Japan リジェンサミット 2026｜いのち、始まる。", description: "あなたが生き生きするほど、地球も豊かになる。", type: "website", locale: "ja_JP", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Japan リジェンサミット 2026" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
