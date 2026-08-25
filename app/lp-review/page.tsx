import type { ReactNode } from "react";
import "./review.css";

const issues = [
  ["01", "情報は多いが、参加理由になっていない", "素材は揃っていても、『なぜ自分が今行くのか』へつながりにくい。", "散らばる情報"],
  ["02", "抽象語が多く、体験が見えにくい", "専門語の理解が先になり、現地で過ごす一日の手触りが後ろへ回る。", "霧の中の言葉"],
  ["03", "KIBOTCHAの強さが埋もれていた", "会場案内として扱われ、旧校舎から未来へ続く物語が伝わりきらない。", "埋もれた場所"],
  ["04", "登壇者が“履歴書”になっていた", "経歴は分かっても、会うことで何を得られるかが見えにくい。", "肩書きの束"],
  ["05", "DAOが早く出すぎていた", "必要性を感じる前に仕組みを説明し、初めての人との距離が生まれる。", "早すぎる答え"],
  ["06", "チケットが“料金表”に見えていた", "価格比較が先に立ち、どこまで体験したいかという選び方が隠れる。", "迷う分かれ道"],
] as const;

const comparisons = [
  ["ターゲット", "主催者が伝えたい情報を並べる", "誰に来てほしいかを先に定める", "『自分のための場だ』と判断できる。"],
  ["いのち、始まる。", "美しいが抽象的な言葉", "出会う・食べる・植える・始めるへ具体化", "言葉を現地で起きる行動へ翻訳。"],
  ["リジェネラティブ", "概念や専門用語から説明", "違和感→可能性→名称の順で伝える", "必要性を感じてから言葉を知れる。"],
  ["タイムテーブル", "時刻とプログラムの一覧", "一日を通じて得られる体験価値", "予定ではなく、自分が過ごす時間になる。"],
  ["KIBOTCHA", "イベントが開かれる会場", "震災から再生し続ける開催理由そのもの", "場所の物語が参加する意味になる。"],
  ["防災", "災害への設備と備蓄", "何もない日に育てる人と場所の関係", "恐怖ではなく希望から備えへ向かう。"],
  ["登壇者", "肩書き・経歴・実績", "この人に会うと何を得られるか", "権威の提示から出会いの価値へ。"],
  ["DAO", "新しい仕組みとして説明", "関わりたい人が次へ進むための手段", "仕組みではなく未来が目的になる。"],
  ["チケット", "種類と価格を一度に比較", "どこまで体験したいかで段階化", "選択負荷を減らし、自分で選べる。"],
] as const;

const journey = ["なんとなく気になる", "それ、自分も感じていた", "別の未来があるんだ", "それがリジェネラティブか", "東松島で始まっている", "行ってみたい", "会ってみたい", "体験してみたい", "自分にもできるかも", "申し込もう"];

const lenses = [
  ["01", "マーケティング戦略", "誰に、なぜ今、なぜここなのか。CTAまで心理が進んでいるかを見る。", "『イベントがあります』ではなく『なぜ今、自分が参加するのか』から逆算。"],
  ["02", "DRM／コピーライティング", "顧客認知、USP、Reason Why、社会的証明、CTA、顧客の声。", "登壇者の経歴ではなく『この人に会うと何を得られるか』を先に。"],
  ["03", "行動経済学", "損失回避、フレーミング、アンカリング、選択負荷、ナッジ。", "多くの価格比較から『どこまで体験したいか』という選び方へ。"],
  ["04", "認知科学・認知心理学", "認知負荷、初頭効果、情報ギャップ、プライミング、理解しやすさ。", "必要性を感じる→知りたくなる→説明する、の順番へ。"],
  ["05", "社会心理学", "社会的証明、権威、一体性、好意、コミュニティ、アイデンティティ。", "BBQを『顔の分かる人を増やす時間』として意味づけ。"],
  ["06", "動機づけ・自己決定", "自律性、有能感、関係性、自己効力感、希望。", "『行動すべき』ではなく『自分なら何を始められるだろう』へ。"],
  ["07", "本能・基礎欲求", "安全、所属、自律、成長、貢献、人生の意味。特に安心とつながり。", "恐怖ではなく『未来に支え合える人と出会っておこう』と設計。"],
  ["08", "物語・ナラティブ", "情報を、記憶に残る意味の流れへ変える。", "震災→旧校舎→再生→人が集う→未来の防災拠点へ。"],
  ["09", "UX／CRO", "視覚階層、選択肢、CTA、図解、スマホでの読みやすさ。", "1セクション1メッセージで、理解と行動を迷わせない。"],
] as const;

const summary = [
  ["LPの主語", "主催者", "参加者", "◌"], ["KIBOTCHA", "会場", "開催理由そのもの", "⌂"],
  ["防災", "設備と備蓄", "設備＋関係性", "⌁"], ["登壇者", "経歴", "会う価値", "◉"],
  ["植樹", "13:00の予定", "土地に関わる体験", "♧"], ["BBQ", "食事オプション", "顔の分かる人を増やす時間", "◎"],
  ["チケット", "料金表", "体験の深さ", "▤"], ["CTA", "申込ボタン", "心理導線の自然な到着点", "→"],
] as const;

function Label({ children }: { children: ReactNode }) { return <p className="review-label">{children}</p>; }
function Flow({ after = false }: { after?: boolean }) {
  const items = after ? ["今の違和感", "なぜ今", "なぜ東松島", "何を体験する", "誰に会う", "何が残る", "参加する"] : ["イベント情報", "プログラム", "登壇者", "会場", "DAO", "チケット", "申込"];
  return <div className={`flow ${after ? "after" : ""}`}>{items.map((item, i) => <span key={item}>{item}{i < items.length - 1 && <i>→</i>}</span>)}</div>;
}
function HeroDiagram() { return <div className="hero-diagram" role="img" aria-label="点在する情報が一本の参加導線へ再編集される図"><div className="scatter"><span>登壇者</span><span>会場</span><span>DAO</span><span>チケット</span><span>植樹</span></div><b>→</b><div className="path"><i/><i/><i/><i/><strong>参加する</strong></div></div>; }
function CompareCard({ item, index }: { item: typeof comparisons[number]; index: number }) { return <article className="compare-card"><header><span>{String(index + 1).padStart(2, "0")}</span><h3>{item[0]}</h3></header><div className="compare-body"><div><small>BEFORE</small><p>{item[1]}</p></div><i>→</i><div><small>AFTER</small><p>{item[2]}</p></div></div><footer><small>再編集の狙い</small><p>{item[3]}</p></footer></article>; }

export default function LpReviewPage() {
  return <main className="review-page">
    <header className="review-nav"><a href="/">JAPAN REGEN SUMMIT 2026</a><span>LP CASE STUDY</span></header>
    <section className="review-hero"><div className="review-wrap hero-grid"><div><Label>LP IMPROVEMENT · BEFORE / AFTER</Label><h1>Japan リジェンサミット2026<br/><em>LP改善 Before / After</em></h1><p className="hero-copy">「イベントを説明するLP」から<br/>「参加したくなるLP」へ</p><p>旧LPを否定するためではありません。そこに揃っていた良い素材を、参加者の心理に沿う順番へ再編集した記録です。</p></div><HeroDiagram/></div></section>

    <section className="review-section"><div className="review-wrap"><Label>01 · THE CONCLUSION</Label><h2>変えたのは、情報ではなく、<br/>価値が届くまでの順番。</h2><div className="headline-compare"><article><small>BEFORE</small><h3>イベント情報を<br/>説明するLP</h3></article><b>→</b><article><small>AFTER</small><h3>参加理由を<br/>育てるLP</h3></article></div><div className="flow-pair"><Flow/><Flow after/></div></div></section>

    <section className="review-section muted"><div className="review-wrap"><Label>02 · WHY IT WAS HARD TO ACT</Label><h2>旧LPの価値が、<br/>申込みにつながりにくかった理由。</h2><p className="lead">素材が弱かったのではありません。情報が「参加者の問い」に答える順番で並んでいなかったため、価値が途中で埋もれていました。</p><div className="issue-grid">{issues.map(item => <article key={item[0]}><header><span>{item[0]}</span><i>{item[3]}</i></header><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></div></section>

    <section className="review-section"><div className="review-wrap"><Label>03 · VALUE TRANSLATION</Label><h2>同じ素材を、<br/>参加者に届く価値へ翻訳する。</h2><div className="translation"><span>素材</span><i>情報を削るのではなく<br/>意味と順番を再編集</i><strong>参加理由</strong></div><div className="compare-list">{comparisons.map((item, index) => <CompareCard item={item} index={index} key={item[0]}/>)}</div></div></section>

    <section className="review-section journey"><div className="review-wrap"><Label>04 · PARTICIPANT JOURNEY</Label><h2>理解して終わるのではなく、<br/>参加へ向かう心の動きをつくる。</h2><div className="journey-grid">{journey.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}</div><p className="journey-note">点だった情報がつながり、最後に「自分も関わってみたい」という意思へ育っていく。</p></div></section>

    <section className="review-section infra"><div className="review-wrap"><Label>05 · THE NEW CORE CONCEPT</Label><h2>防災は、設備だけじゃない。<br/><em>関係性も、インフラです。</em></h2><div className="concept"><article><span>▣</span><small>従来の防災</small><h3>設備というインフラ</h3><ul><li>水</li><li>食料</li><li>電気</li><li>避難場所</li></ul></article><b>＋</b><article><span>◎</span><small>今回加えた視点</small><h3>関係性というインフラ</h3><ul><li>知っている場所</li><li>顔のわかる人</li><li>助けてと言える関係</li><li>支え合える仲間</li></ul></article></div><blockquote>何も起きていない日に、未来に支え合える人と出会っておこう。</blockquote></div></section>

    <section className="review-section muted"><div className="review-wrap"><Label>06 · AT A GLANCE</Label><h2>最終的に変えたこと。</h2><div className="summary-grid">{summary.map(item => <article key={item[0]}><span>{item[3]}</span><div><small>{item[0]}</small><p><del>{item[1]}</del><i>→</i><strong>{item[2]}</strong></p></div></article>)}</div></div></section>

    <section className="review-section evidence"><div className="review-wrap"><Label>07 · NOT A MATTER OF TASTE</Label><h2>今回の改善は、<br/>「コピーの好み」で決めていない。</h2><p className="lead">感覚だけで文章を変えたのではなく、複数の学問領域とマーケティング実務から、参加者の意思決定がどこで止まるのかを分解しました。</p><div className="ycs"><div><small>MARKETING DIAGNOSIS</small><h3>AI YCS（辛口）とは</h3><p>10年以上のマーケティング実践から蓄積された実務知・セミナー・診断思想をベースに設計された、マーケティング診断AIです。</p><strong>600名超の経営者コミュニティで実際に活用され、<br/>多くの事業利益につながってきた実務知が息づいています。</strong><p>数多くの経営者の汗と涙の結晶。コピーライティングAIではありません。</p></div><div className="ycs-mark"><span>AI</span><b>YCS</b><small>辛口</small></div></div><div className="lens-grid">{lenses.map(item => <article key={item[0]}><header><span>{item[0]}</span><h3>{item[1]}</h3></header><p>{item[2]}</p><blockquote>{item[3]}</blockquote></article>)}</div></div></section>

    <section className="review-section white"><div className="review-wrap"><Label>08 · WHITE MARKETING</Label><h2>一番上にあるのは、<br/>人を操作しないという原則。</h2><div className="white-grid"><article><small>やらないこと</small><ul><li>恐怖を煽る</li><li>嘘の限定性</li><li>過剰な危機感や誇張</li><li>不安を利用したクロージング</li><li>参加しない人を責める</li></ul></article><article><small>やること</small><ul><li>分かりやすくする</li><li>自分ごととして理解できるようにする</li><li>判断材料を整理する</li><li>本当の価値と希望を具体化する</li><li>選ぶ自由を残す</li></ul></article></div><div className="knowledge"><div>{["実務マーケティング", "コピー", "行動経済学", "認知科学", "社会心理", "自己決定", "基礎欲求", "ナラティブ", "UX / CRO"].map(item => <span key={item}>{item}</span>)}</div><aside><small>JAPAN REGEN SUMMIT LP</small><strong>ホワイト<br/>マーケティング</strong><i>価値と信頼で引き寄せる</i></aside></div><blockquote className="principle">学問を使う目的は、人を動かすことではなく、<br/><strong>本当に価値のあるものを、正しく伝わる形にすること。</strong></blockquote></div></section>

    <section className="review-section team"><div className="review-wrap"><Label>09 · FOR THE TEAM</Label><h2>これは、旧LPの否定ではない。<br/>価値の翻訳です。</h2><p>次も「主催者が言いたい順番」ではなく、「参加者が参加したくなる順番」から考える。</p><blockquote>最終判断基準は、<br/><strong>「そういう未来なら、自分も関わってみたい」</strong><br/>と思えるか。</blockquote><div className="sprout"><i/><i/><span/></div><a href="/">完成したLPを見る <span>→</span></a></div></section>
  </main>;
}
