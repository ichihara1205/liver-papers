#!/usr/bin/env node
/* ============================================================
   scripts/check.mjs — 論文データの検証
   使い方：  node scripts/check.mjs          （エラーがあれば終了コード1）
             node scripts/check.mjs --strict （警告もエラー扱い）
   依存パッケージなし（Node 18 以上）。GitHub Actions でも push / PR ごとに実行する。

   index.html の <script src> 一覧どおりに js/core.js → js/cinema.js → js/catinfo.js →
   papers/NN.js を Node の vm で読み込み、LP.paper / LP.icons / LP.methods / LP.cinema の
   登録内容を調べる。
   ============================================================ */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const STRICT = process.argv.includes("--strict");

const errors = [];   // {file, msg}
const warnings = [];
const papers = [];   // {file, p, icons, methods, cinema}
const err = (file, msg) => errors.push({ file, msg });
const warn = (file, msg) => warnings.push({ file, msg });

/* ---------- 1. index.html の読み込み一覧 ---------- */
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script\s+src="([^"]+)"\s*><\/script>/g)].map(m => m[1]);
const CORE = ["js/core.js", "js/cinema.js", "js/catinfo.js"];
CORE.forEach((f, i) => {
  if (scripts[i] !== f) err("index.html", `${i + 1}番目の <script src> は "${f}" である必要があります（現在: "${scripts[i] || "なし"}"）`);
});
if (scripts[scripts.length - 1] !== "js/app.js") err("index.html", `最後の <script src> は "js/app.js" である必要があります`);
const listed = scripts.filter(s => /^papers\//.test(s));
const PAPER_FILE = /^papers\/(\d{2,3})\.js$/;
listed.forEach(s => {
  if (!PAPER_FILE.test(s)) err("index.html", `"${s}" は papers/NN.js の形式ではありません`);
  else if (!fs.existsSync(path.join(ROOT, s))) err("index.html", `"${s}" が一覧にありますがファイルがありません`);
});
const dupListed = listed.filter((s, i) => listed.indexOf(s) !== i);
dupListed.forEach(s => err("index.html", `"${s}" が一覧に2回あります`));
const onDisk = fs.readdirSync(path.join(ROOT, "papers")).filter(f => f.endsWith(".js") && !f.startsWith("_")).map(f => "papers/" + f);
onDisk.filter(f => !listed.includes(f)).forEach(f => err(f, `index.html の論文一覧に <script src="${f}"></script> がありません`));
const listedIds = listed.map(s => (s.match(PAPER_FILE) || [])[1]).filter(Boolean);
for (let i = 1; i < listedIds.length; i++) {
  if (Number(listedIds[i]) > Number(listedIds[i - 1])) {
    warn("index.html", `論文一覧は新しい番号が上（降順）の約束です：papers/${listedIds[i]}.js が papers/${listedIds[i - 1]}.js より下にあります`);
    break;
  }
}

/* ---------- 2. vm で読み込み ---------- */
const ctx = vm.createContext({ console: { log() {}, warn() {}, error() {} } });
const load = f => {
  const code = fs.readFileSync(path.join(ROOT, f), "utf8");
  try { vm.runInContext(code, ctx, { filename: f }); return true; }
  catch (e) { err(f, `読み込みエラー：${e.message}`); return false; }
};
for (const f of CORE) if (!load(f)) { report(); process.exit(1); }
// LP の呼び出しをファイル単位で記録する
vm.runInContext(`
  var __calls=[]; var __cur=null;
  ["paper","icons","methods","cinema"].forEach(function(k){
    var orig=LP[k];
    LP[k]=function(){ __calls.push({file:__cur, kind:k, args:[].slice.call(arguments)}); return orig.apply(LP,arguments); };
  });`, ctx);
for (const f of listed.filter(s => PAPER_FILE.test(s) && fs.existsSync(path.join(ROOT, s)))) {
  vm.runInContext(`__cur=${JSON.stringify(f)}`, ctx);
  load(f);
}
// 雛形は文法だけ確認（一覧には載せない）
const tpl = path.join(ROOT, "papers/_template.js");
if (fs.existsSync(tpl)) {
  try { new vm.Script(fs.readFileSync(tpl, "utf8"), { filename: "papers/_template.js" }); }
  catch (e) { err("papers/_template.js", `文法エラー：${e.message}`); }
}
const G = vm.runInContext(`({calls:__calls, THEMES, ICONS, METHOD_LABELS, CATINFO})`, ctx);
const { calls, THEMES, ICONS, METHOD_LABELS, CATINFO } = G;

/* ---------- 3. ファイル単位：LP 呼び出しの過不足と ID の一致 ---------- */
const byFile = new Map();
for (const c of calls) {
  if (!byFile.has(c.file)) byFile.set(c.file, { paper: [], icons: [], methods: [], cinema: [] });
  byFile.get(c.file)[c.kind].push(c.args);
}
const KIND_LABEL = { paper: "LP.paper（本文データ）", icons: "LP.icons（登場要素イラスト）", methods: "LP.methods（使用手法）", cinema: "LP.cinema（アニメーション）" };
for (const f of listed.filter(s => PAPER_FILE.test(s) && fs.existsSync(path.join(ROOT, s)))) {
  const fid = f.match(PAPER_FILE)[1];
  const c = byFile.get(f) || { paper: [], icons: [], methods: [], cinema: [] };
  for (const k of Object.keys(KIND_LABEL)) {
    if (c[k].length === 0) err(f, `${KIND_LABEL[k]} がありません`);
    if (c[k].length > 1) err(f, `${KIND_LABEL[k]} が ${c[k].length} 回呼ばれています（1回だけにしてください）`);
  }
  const p = c.paper[0] && c.paper[0][0];
  if (p && String(p.id) !== fid) err(f, `id "${p.id}" がファイル名（${fid}）と一致しません`);
  for (const k of ["icons", "methods", "cinema"]) {
    const a = c[k][0];
    if (a && String(a[0]) !== fid) err(f, `${KIND_LABEL[k]} の id "${a[0]}" がファイル名（${fid}）と一致しません`);
  }
  if (p) papers.push({ file: f, p, icons: c.icons[0] && c.icons[0][1], methods: c.methods[0] && c.methods[0][1], cinema: c.cinema[0] && c.cinema[0][1] });
}

/* ---------- 4. 論文ごとの中身 ---------- */
const isStr = v => typeof v === "string" && v.trim() !== "";
const isArr = v => Array.isArray(v);
const FLAGS = ["○", "△", "×", "—"];
const REQUIRED_STR = ["title", "authors", "journal", "doi", "url", "approach", "background"];
const seenId = new Map(), seenDoi = new Map();
const noCat = [];

for (const { file: f, p, icons, methods, cinema } of papers) {
  // ID・DOI の重複
  if (!/^\d{2,3}$/.test(String(p.id))) err(f, `id "${p.id}" は "07" や "48" のような2桁以上の数字の文字列にしてください`);
  if (seenId.has(p.id)) err(f, `id "${p.id}" が ${seenId.get(p.id)} と重複しています`); else seenId.set(p.id, f);
  if (isStr(p.doi)) {
    const d = p.doi.trim().toLowerCase();
    if (seenDoi.has(d)) err(f, `DOI "${p.doi}" が ${seenDoi.get(d)} と重複しています`); else seenDoi.set(d, f);
    if (!/^10\.\d{4,9}\/\S+$/.test(p.doi.trim())) warn(f, `DOI "${p.doi}" の形式が "10.xxxx/..." ではありません`);
  }
  // 必須フィールド
  for (const k of REQUIRED_STR) if (!isStr(p[k])) err(f, `${k} がありません（空でない文字列が必要）`);
  if (!isStr(p.abstract_ja) && !isStr(p.abstract)) err(f, `abstract_ja がありません`);
  if (!Number.isInteger(p.year) || p.year < 1900 || p.year > 2100) err(f, `year は 2025 のような数値にしてください（現在: ${JSON.stringify(p.year)}）`);
  if (!isStr(p.vol)) warn(f, `vol（巻号ページ）がありません`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.added || "")) err(f, `added（収録日）は "2026-09-20" の形式にしてください（現在: ${JSON.stringify(p.added)}）`);
  if (isStr(p.url) && !/^https?:\/\//.test(p.url)) err(f, `url が http(s):// で始まっていません`);
  for (const k of ["achievements", "limitations", "connection"]) {
    if (!isArr(p[k])) err(f, `${k} は配列 ["…","…"] にしてください（現在: ${typeof p[k]}）`);
    else if (!p[k].length) err(f, `${k} が空です`);
    else if (p[k].some(x => !isStr(x))) err(f, `${k} に空または文字列でない要素があります`);
  }
  // テーマ記号
  if (!THEMES[p.primary]) err(f, `primary "${p.primary}" はテーマ記号（${Object.keys(THEMES).join("")} のいずれか1文字）ではありません`);
  if (!isArr(p.tags)) err(f, `tags は配列 ["A","D"] にしてください`);
  else p.tags.filter(t => !THEMES[t]).forEach(t => err(f, `tags の "${t}" はテーマ記号（${Object.keys(THEMES).join("")}）ではありません`));
  // 用語集
  if (!isArr(p.glossary)) err(f, `glossary は配列にしてください`);
  else p.glossary.forEach((g, i) => {
    if (!g || !isStr(g.term)) err(f, `glossary[${i}] に term がありません`);
    else {
      if (!isStr(g.desc)) warn(f, `glossary「${g.term}」に desc がありません`);
      if (!CATINFO[g.term.toLowerCase()]) noCat.push({ f, term: g.term });
    }
  });
  // 研究ボード用の構造化データ
  const s = p.struct;
  if (!s || typeof s !== "object") err(f, `struct がありません`);
  else {
    if (!isStr(s.model)) warn(f, `struct.model がありません`);
    for (const k of ["cells", "triggers", "readout", "params", "todos"]) if (s[k] != null && !isArr(s[k])) err(f, `struct.${k} は配列にしてください`);
    for (const k of ["cells", "triggers", "readout"]) if (s[k] == null) warn(f, `struct.${k} がありません`);
    for (const k of ["steatosis", "inflammation", "fibrosis"]) {
      if (s[k] == null) warn(f, `struct.${k} がありません`);
      else if (!FLAGS.includes(String(s[k])[0])) err(f, `struct.${k} "${s[k]}" は ${FLAGS.join(" ")} のいずれかで始めてください（例 "△(探索)" は可）`);
    }
    if (!isStr(s.ignite)) warn(f, `struct.ignite（線維化点火のカギ）がありません`);
    (s.params || []).forEach((x, i) => { if (!x || !isStr(x.name)) err(f, `struct.params[${i}] に name がありません`); });
  }
  // 図
  for (const k of ["figure", "method_figure"]) {
    if (p[k] == null) { warn(f, `${k}（${k === "figure" ? "概念図" : "Method図"}）がありません`); continue; }
    if (!isStr(p[k]) || !/^\s*<svg[\s>]/.test(p[k]) || !/<\/svg>\s*$/.test(p[k])) err(f, `${k} は <svg ...>…</svg> の文字列にしてください`);
    else if (!/viewBox=/.test(p[k])) warn(f, `${k} に viewBox がありません（拡大表示や縮小がずれます）`);
  }
  // アイコン
  if (icons !== undefined) {
    if (!isArr(icons) || !icons.length) err(f, `LP.icons は1件以上の配列にしてください`);
    else icons.forEach((o, i) => {
      if (!o || !ICONS[o.ic]) err(f, `LP.icons[${i}] の ic "${o && o.ic}" は ICONS にありません（使えるもの: ${Object.keys(ICONS).join(", ")}）`);
      if (!o || !isStr(o.cap)) err(f, `LP.icons[${i}] に cap（説明文）がありません`);
    });
  }
  // 手法
  if (methods !== undefined) {
    if (!isArr(methods)) err(f, `LP.methods は配列にしてください（総説は []）`);
    else {
      methods.filter(k => !METHOD_LABELS[k]).forEach(k => err(f, `LP.methods の "${k}" は METHOD_LABELS にありません（使えるもの: ${Object.keys(METHOD_LABELS).join(", ")}）`));
      methods.filter((k, i) => methods.indexOf(k) !== i).forEach(k => warn(f, `LP.methods に "${k}" が重複しています`));
      const review = /総説|review/i.test([s && s.model, p.approach, JSON.stringify(p.methods || "")].join(" "));
      if (!methods.length && !review) warn(f, `LP.methods が空です（総説以外は手法フィルタで一覧から消えます）`);
    }
  }
  // アニメーション
  if (cinema !== undefined) {
    if (!cinema || !isStr(cinema.svg)) err(f, `LP.cinema に svg（絵の文字列）がありません`);
    if (!cinema || typeof cinema.build !== "function") err(f, `LP.cinema に build(K) 関数がありません`);
  }
}

/* ---------- 5. 用語カテゴリ（情報のみ） ---------- */
if (noCat.length) {
  const by = new Map();
  noCat.forEach(({ f, term }) => { if (!by.has(f)) by.set(f, []); by.get(f).push(term); });
  by.forEach((terms, f) => warn(f, `js/catinfo.js に用語カテゴリがない用語（「その他」に分類されます）：${terms.join(", ")}`));
}

/* ---------- 6. 結果 ---------- */
function report() {
  const group = list => {
    const m = new Map();
    list.forEach(({ file, msg }) => { if (!m.has(file)) m.set(file, []); m.get(file).push(msg); });
    return m;
  };
  if (errors.length) {
    console.log(`\n✖ エラー ${errors.length} 件`);
    group(errors).forEach((msgs, f) => { console.log(`  ${f}`); msgs.forEach(m => console.log(`    ✖ ${m}`)); });
  }
  if (warnings.length) {
    console.log(`\n⚠ 警告 ${warnings.length} 件`);
    group(warnings).forEach((msgs, f) => { console.log(`  ${f}`); msgs.forEach(m => console.log(`    ⚠ ${m}`)); });
  }
  console.log(`\n論文 ${papers.length} 本を確認しました。` + (errors.length ? "" : " エラーはありません。"));
}
report();
process.exit(errors.length || (STRICT && warnings.length) ? 1 : 0);
