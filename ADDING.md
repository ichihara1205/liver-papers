# 論文の追加・更新手順

論文1本は **`papers/NN.js` の1ファイル** にまとまっています。
追加するときに触るのは次の2か所だけです。

1. `papers/NN.js` を1ファイル追加する
2. `index.html` の論文一覧に1行追加する

## 1. ファイルを作る

`papers/_template.js` を次の番号でコピーします（例：49本目なら `papers/49.js`）。

```sh
cp papers/_template.js papers/49.js
```

ファイルの中の `"00"` をすべて `"49"` に置き換えます。
対象は `LP.paper` の `id`、`LP.icons`、`LP.methods`、`LP.cinema` の4か所と、SVG・アニメの中の id（`hep00` など）です。

ファイルは4つのブロックでできています。

| ブロック | 中身 | 表示される場所 |
|---|---|---|
| `LP.paper({...})` | 本文データ（タイトル・要旨・背景・成果・限界・接続・用語・struct・図） | カード本体と詳細 |
| `LP.icons("49",[...])` | 登場要素イラスト（`ic` は `js/core.js` の `ICONS` のキー） | 詳細の「登場要素」 |
| `LP.methods("49",[...])` | 使用手法（`js/core.js` の `METHOD_LABELS` のキー。総説は `[]`） | 詳細の「使用手法」と手法フィルタ |
| `LP.cinema("49",{svg,build})` | アニメーション | 詳細の「アニメーション」 |

4つとも必須です。
どれかが欠けると `scripts/check.mjs` がエラーを出します（過去に「手法フィルタで一覧から消える」「表示が落ちる」原因になった欠けです）。

### 主なフィールドの約束

- `id`：ファイル名と同じ番号の文字列（`"49"`）
- `primary`：主テーマの記号1文字。`tags` はテーマ記号の配列。どちらも A〜I のどれかです
  - A 培養系・モデル構築 ／ B 線維化メカニズム(HSC) ／ C 免疫・炎症(KC/MΦ)
  - D 脂肪化・脂質/代謝 ／ E LSEC・血管・zonation ／ F 数理・in silico(ABM)
  - G オミクス・空間解析 ／ H 治療・創薬標的/再生 ／ I 共培養
- `year`：数値（`2026`）
- `added`：収録日（`"2026-10-06"`）
- `achievements` ・ `limitations` ・ `connection`：配列です。1項目でも `["…"]` と書きます
- `struct` の `steatosis` ・ `inflammation` ・ `fibrosis`：`○` `△` `×` `—` のどれかで始めます
- `figure` ・ `method_figure`：`viewBox='0 0 640 232'` の SVG 文字列です
  - 色は `var(--ink)` `var(--paper)` `var(--B)` などの CSS 変数を使います
  - marker の id は `f49` ・ `m49` のように論文ごとに変えます
- 新しい用語のカテゴリ（用語ビューの分類）は `js/catinfo.js` に1行足します
  - 足さなくても動きますが、その用語は「その他」に入ります

## 2. 一覧に1行足す

`index.html` の `<!-- ===== 論文データ … ===== -->` の直下（先頭）に1行追加します。
新しい番号ほど上に置きます。

```html
<!-- ===== 論文データ：1本＝papers/NN.js の1ファイル。新しい論文はこの直下（先頭）に1行追加する ===== -->
<script src="papers/49.js"></script>
<script src="papers/48.js"></script>
...
```

## 3. 検証する

```sh
node scripts/check.mjs
```

追加の依存パッケージは不要で、Node 18 以上で動きます。次のものを検出します。

- **エラー（終了コード1）**
  - 必須フィールドの欠けや型の違い
  - ID・DOI の重複
  - `primary` ・ `tags` のテーマ記号の誤り
  - `LP.icons` ・ `LP.methods` ・ `LP.cinema` の欠け
  - アイコン名・手法名の誤り
  - ファイル名と id の不一致
  - 一覧への書き忘れ
- **警告**
  - vol や図の欠け
  - 用語カテゴリ未登録の用語
  - 一覧の並び順

`node scripts/check.mjs --strict` を使うと、警告もエラーとして扱います。

push と PR のたびに GitHub Actions（`.github/workflows/check.yml`）でも同じチェックが走ります。

最後に `index.html` をダブルクリックで開いて表示を確認します。
`file://` のままで動きます（fetch を使わず `<script src>` で読む構成のため）。

## 既存の論文を直す

`papers/NN.js` を直接編集して `node scripts/check.mjs` を実行します。
アニメの部品（`GLYPH`）と再生エンジンは `js/cinema.js` にあり、全論文で共通です。

## 自動追記タスク（Cowork など）向けのメモ

以前は `index.html` の `PAPERS` 配列の `INSERT_NEW_ENTRIES_HERE` の直後に追記する方式でしたが、この方式は廃止しました。
タスクの手順（SKILL.md など）は次の内容に置き換えてください。

1. `papers/_template.js` を参考に `papers/<次の番号>.js` を作る
   - 中身は `LP.paper` / `LP.icons` / `LP.methods` / `LP.cinema` の4ブロック
2. `index.html` の論文一覧の先頭に `<script src="papers/<番号>.js"></script>` を1行追加する
3. `node scripts/check.mjs` がエラーなしで終わることを確認してからコミットする

## ファイル構成

```
index.html           画面（CSS・HTML）とスクリプトの読み込み一覧
js/core.js           テーマ・アイコン・手法の定義、登録API（LP）
js/cinema.js         アニメの再生エンジンと共通の絵の部品（GLYPH）
js/catinfo.js        用語カテゴリと詳しい解説
papers/NN.js         論文1本ぶん（本文・アイコン・手法・アニメ）
papers/_template.js  雛形（読み込まれない）
js/app.js            描画・検索・フィルタ・各ビュー
scripts/check.mjs    データ検証
```
