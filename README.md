# 論文ライブラリ｜肝オープンオルガノイド・MASH・ABM

肝疾患（MASLD/MASH・肝オルガノイド・エージェントベースモデル）の論文を1本ずつ読み込み、次の内容をまとめた静的サイトです。

- 要旨の和訳
- 背景
- 成果
- limitation
- 自分の研究との接続
- 用語
- 図
- アニメーション

## 開き方

- **ローカル**：`index.html` をダブルクリックで開きます（`file://` のままで動きます）
- **GitHub Pages**：リポジトリのルートをそのまま公開します

ビルドは不要です。
外部への通信は Google Fonts、被引用数（OpenAlex）、新着検索（PubMed）だけで、オフラインでも本文は表示されます。

## 論文を追加する

[ADDING.md](ADDING.md) を参照してください。
要約すると、`papers/NN.js` を1ファイル追加し、`index.html` の一覧に1行足して、`node scripts/check.mjs` を実行します。

## 構成

| パス | 役割 |
|---|---|
| `index.html` | CSS・HTML・スクリプト読み込み一覧 |
| `js/core.js` | テーマ・アイコン・手法の定義、論文の登録API `LP` |
| `js/cinema.js` | アニメーション再生エンジン（CinemaKit）と共通部品 `GLYPH` |
| `js/catinfo.js` | 用語カテゴリ |
| `papers/NN.js` | 論文1本ぶんのデータ |
| `js/app.js` | 描画・検索・フィルタ・各ビュー |
| `scripts/check.mjs` | データ検証（GitHub Actions でも実行） |

## 端末内データ

次のデータはブラウザの localStorage（`liverPapers_userData_v1`）に保存されます。

- 既読
- お気に入り
- メモ
- 研究ボードのチェック
