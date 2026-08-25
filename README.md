# Japan リジェンサミット 2026 LP

「いのち、始まる。」をテーマにしたデモ版ランディングページです。モバイルファースト、SEO/OGP、動画フォールバック、FAQ、固定CTAに対応しています。

## 起動

```bash
npm install
npm run dev
```

本番ビルドは `npm run build` です。

## 本番化する際の差し替え箇所

- `public/videos/hero-kibotcha.mp4`: 5〜10秒のHeroループ動画
- `public/images/hero-fallback.jpg`: Hero動画が再生されない場合の静止画
- `components/SummitPage.tsx`: 本文、開催概要、CTAリンク、会場マップ
- `data/siteContent.ts`: 体験、タイムライン、登壇者、FAQ
- `app/layout.tsx`: SEO、OGP、SNSシェア情報
- `public/og.png`: LP専用SNSシェア画像

現在のCTAはページ内のチケットセクションへ移動します。正式な販売URLが決まり次第、各CTAの `href` を置き換えてください。

## 仮素材

- Hero: CSSによる風景フォールバック
- KIBOTCHA写真: テクスチャ型プレースホルダー
- 体験写真・登壇者写真: 色面プレースホルダー
- 会場マップ: CSSによるデモ図解

## 次の改善

1. 現地の本番写真、登壇者写真、Hero動画への交換
2. 正式なタイムテーブル・料金・チケットURLの反映
3. KIBOTCHA公式会場図に基づく体験マップの精密化
4. 公開前の固有名詞、災害情報、登壇情報の最終校正
