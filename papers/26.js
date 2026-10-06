/* ============================================================
   №26 · Nature Metabolism 2026 · Kang SWS, Brown LA, Miller CB, ..., Porat-Shliom N†（Cell Biology and Imaging Section, NCI, Nationa…
   PLIN5 S155リン酸化がmito-LDカップリングを制御し肝脂質フラックス・steatosisを決定——新手法scPhenomics+空間プロテオミクスで単一細胞脂質代謝を解析
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    "id": "26",
    "title": "PLIN5 S155リン酸化がmito-LDカップリングを制御し肝脂質フラックス・steatosisを決定——新手法scPhenomics+空間プロテオミクスで単一細胞脂質代謝を解析",
    "authors": "Kang SWS, Brown LA, Miller CB, Barrows KM, Golino JL, Liu H, ..., Porat-Shliom N†（Cell Biology and Imaging Sections, NCI, National Cancer Institute, NIH, Bethesda, USA）",
    "journal": "Nature Metabolism",
    "year": 2026,
    "vol": "8(3):587–603",
    "doi": "10.1038/s42255-026-01476-1",
    "url": "https://www.nature.com/articles/s42255-026-01476-1",
    "primary": "D",
    "tags": ["D", "G"],
    "approach": "in vivo（絶食 vs 西洋食WDマウス）＋ scPhenomics（単一細胞組織イメージング）＋ 空間プロテオミクス（PP/PCゾーン分取肝細胞のTMT質量分析）＋ PLIN5 S155変異体（S155A/S155E）AAV過剰発現",
    "added": "2026-06-14",
    "abstract_ja": "脂肪肝疾患（steatotic liver disease）は一般的だが、肝細胞が食事性脂肪酸サージにどう対処するかの機序は不明であった。本研究は新手法scPhenomics（単一細胞組織イメージング）と空間プロテオミクスを用い、絶食・西洋食（WD）マウスにおける脂質処理の細胞内ダイナミクスを網羅的にマッピングした。絶食時にはミトコンドリア-脂質滴（mito-LD）コンタクトが増加してPLIN5（ペリリピン5）が上昇するが、短期（4週）のWD投与ではコンタクトが稀になることを発見した。PLIN5過剰発現はリン酸化依存的にコンタクト形成を制御し、非リン酸化型S155A変異体はコンタクト増加・LD拡大を促進し、リン酸化模倣型S155E変異体はコンタクト減少・小型LDをもたらした。WDマウスでのS155A過剰発現は脂肪毒性（lipotoxicity）を軽減した。栄養ストレス時に脂質をLDへのトリグリセリド貯蔵へとチャンネリングする適応的なオルガネラ間相互作用プログラムが存在し、肥満誘導型食餌で減弱することを示した。",
    "background": "MASLDにおける脂肪肝の成立には「細胞レベルでの脂質過剰への適応と破綻」が鍵となるが、ミトコンドリアと脂質滴（LD）の動的相互作用をin situで解析する手法が欠如していた。PLIN5はmito-LDテザリングの媒介因子として知られていたが、肝でのリン酸化依存的なコンタクト制御とその機能はin vivoでは不明だった。単一細胞レベルでミトコンドリアとLDの形態・配置（オルガネラトポロジー）を捉える手法（scPhenomics）の開発自体も本論文の成果の一つである。",
    "achievements": ["新手法**scPhenomics**（単一細胞組織イメージング）と空間プロテオミクスを確立し、ミトコンドリアとLDの形態特徴（面積・密度・球形度など）を門脈周囲-中心静脈軸に沿って単一細胞レベルで定量化した。空間プロテオミクスはFACSでゾーン分取した肝細胞のTMT質量分析で行った。", "**mito-LDコンタクトが食餌で大きく変化**すること（絶食↑ vs 短期WD↓、長期WDでは再び増加）をin vivoで可視化した。", "**PLIN5 S155リン酸化**がmito-LDカップリングのオン・オフスイッチとして機能することを変異体実験で証明した（S155A→コンタクト↑・LD拡大／S155E→コンタクト↓・小型LD）。", "WDマウスでのPLIN5 **S155A過剰発現が脂質過酸化（MDA）などの酸化ストレスを軽減**し、PLIN5リン酸化状態が治療標的となりうることを示した。"],
    "limitations": ["ヒト肝では健常ドナー生検12例での相関解析にとどまり、同等機序の直接証明は今後の課題。", "S155のリン酸化を担うキナーゼ（既報ではPKA）の関与は本研究では検証されていない。mito-LD間の脂肪酸輸送の方向もin vivoでは測定できていない。", "scPhenomicsはスナップショットであり、mito-LDコンタクトの動態解析には生細胞ライブイメージングとの組み合わせが必要。", "長期WDではmito-LDコンタクトが増加し、むしろ病態進行に寄与しうる可能性が示唆されており、S155A型の長期的影響は未検証。"],
    "connection": ["4細胞MPSのsteatosisフェーズ（高FFA培地）でPLIN5-mito-LDカップリングが崩れてlipotoxicityが進行する経路をABMルールに追加できる。S155リン酸化上流キナーゼ（PKA等）が脂肪化→KC炎症活性化スイッチ候補。#24（生体ドナーatlas）の早期steatosisミトコンドリアプログラムと統合的に解釈可能。"],
    "glossary": [{"term": "PLIN5", "full": "Perilipin 5", "desc": "脂質滴表面コートタンパク。ミトコンドリア-LD物理的テザリングを媒介するペリリピンファミリー。絶食で誘導されmito-LDカップリングを促進"}, {"term": "scPhenomics", "full": "single-cell Phenomics（単一細胞フェノミクス）", "desc": "本論文で開発。共焦点組織イメージング（mtDendra2・BODIPY・ファロイジン）と深層学習セグメンテーションにより、単一細胞のミトコンドリア・LDの形態特徴を門脈周囲-中心静脈軸に沿って多変量で定量する"}, {"term": "mito-LD contact", "full": "mitochondria–lipid droplet contact site", "desc": "ミトコンドリアと脂質滴が物理的に接触する部位。本論文ではFFAのエステル化・LDへのTG貯蔵を促進し脂肪毒性を緩和する方向に働くことが示された（脂肪酸輸送の方向自体は未測定）"}, {"term": "Lipotoxicity", "full": "lipotoxicity（脂質毒性）", "desc": "細胞内LD過剰蓄積によるER stress・ミトコンドリア機能障害・アポトーシス誘導。MASLD→MASH進行に中心的役割"}, {"term": "WD", "full": "Western diet（西洋食）", "desc": "高脂肪・高糖の肥満誘導食。本論文では4週投与で単純性脂肪化とmito-LDコンタクトの減少を、12週投与ではコンタクトの増加を示す条件"}],
    "struct": {"model": "in vivo + scPhenomics/空間プロテオミクス", "cells": ["肝細胞"], "triggers": ["絶食", "西洋食(WD)", "PLIN5 S155変異体過剰発現"], "steatosis": "○", "inflammation": "—", "fibrosis": "—", "readout": ["mito-LDコンタクト率", "PLIN5発現/リン酸化", "LDサイズ", "lipotoxicity"], "ignite": "短期WDでmito-LDコンタクト↓→脂質チャンネリング破綻→lipotoxicity（脂肪化→炎症の上流スイッチ）", "params": [{"name": "mito-LDコンタクト率→steatosis度→DAMPs→炎症点火", "note": "コンタクト率を脂肪化指標に変換し、破綻でDAMPs放出→KC活性化に接続するABMルール"}, {"name": "PLIN5 S155リン酸化状態→カップリングon/off", "note": "S155A(非リン酸化)でコンタクト↑/LD拡大、S155E(リン酸化)で↓。上流キナーゼ(PKA?)が脂肪化→炎症スイッチ候補"}], "todos": ["高FFA負荷(パルミチン酸/オレイン酸)でmito-LDコンタクト崩壊→lipotoxicityを評価", "scPhenomicsを自系の細胞内脂質動態解析手法として採用", "#24の早期steatosisミトコンドリアプログラムと統合したモデル化"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m26' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：絶食 vs 西洋食 → scPhenomics → 空間プロテオミクス → S155変異体</text>\n  <rect x='14' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='66' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 食餌条件</text>\n  <text x='84' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>絶食 vs 西洋食(WD)</text>\n  <text x='84' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>マウス肝</text>\n  <text x='84' y='112' text-anchor='middle' font-size='8.3' fill='var(--accent)'>脂質処理を比較</text>\n  <path d='M156,98 L168,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m26)'/>\n  <rect x='172' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='241' y='66' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>② scPhenomics</text>\n  <text x='241' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単一細胞組織イメージング</text>\n  <text x='241' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>共焦点＋自動分割</text>\n  <text x='241' y='112' text-anchor='middle' font-size='8.3' fill='var(--G)'>mito-LDコンタクト</text>\n  <path d='M314,98 L326,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m26)'/>\n  <rect x='329' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='399' y='66' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ 空間プロテオミクス</text>\n  <text x='399' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>PP/PC肝細胞をFACS</text>\n  <text x='399' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TMT質量分析</text>\n  <text x='399' y='112' text-anchor='middle' font-size='8.3' fill='var(--G)'>PLIN5↑を検出</text>\n  <path d='M472,98 L484,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m26)'/>\n  <rect x='486' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='556' y='66' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ S155変異体</text>\n  <text x='556' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>S155A / S155E をAAV</text>\n  <text x='556' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>過剰発現</text>\n  <text x='556' y='112' text-anchor='middle' font-size='8.3' fill='var(--H)'>リン酸化依存性</text>\n  <text x='320' y='196' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Porat-Shliom N et al., Nat Metab 8(3):587–603 (2026)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 320' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs>\n    <radialGradient id='ld26' cx='0.35' cy='0.3' r='0.8'><stop offset='0' stop-color='#ffe9a0'/><stop offset='1' stop-color='#d9a441'/></radialGradient>\n    <marker id='af26' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--D)'/></marker>\n    <marker id='af26b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>\n  </defs>\n  <rect x='0' y='0' width='640' height='320' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>PLIN5 S155リン酸化がmito-LDカップリングを切り替える</text>\n  <!-- fasting -->\n  <rect x='16' y='40' width='292' height='130' rx='10' fill='#eef2ec' stroke='var(--A)' stroke-width='1.3'/>\n  <text x='162' y='60' text-anchor='middle' font-size='9.5' fill='var(--A)' font-weight='700'>絶食：PLIN5↑・コンタクト増加</text>\n  <circle cx='120' cy='112' r='28' fill='url(#ld26)' stroke='#d4b800' stroke-width='1.5'/>\n  <text x='120' y='115' text-anchor='middle' font-size='8' fill='#7a6000'>LD（拡大）</text>\n  <rect x='168' y='92' width='52' height='40' rx='10' fill='#d6a08e' stroke='var(--B)' stroke-width='1.3'/>\n  <text x='194' y='116' text-anchor='middle' font-size='7.5' fill='#5a2f25'>mito</text>\n  <line x1='148' y1='112' x2='168' y2='112' stroke='var(--A)' stroke-width='3'/>\n  <text x='158' y='148' text-anchor='middle' font-size='8' fill='var(--A)'>mito-LD接触 ↑ → LDへTG貯蔵</text>\n  <!-- WD -->\n  <rect x='332' y='40' width='292' height='130' rx='10' fill='#f1e2dd' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='478' y='60' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='700'>短期WD（4週）：コンタクト↓</text>\n  <circle cx='430' cy='112' r='16' fill='url(#ld26)' stroke='#d4b800' stroke-width='1.3'/>\n  <text x='430' y='115' text-anchor='middle' font-size='7' fill='#7a6000'>小型LD</text>\n  <rect x='500' y='96' width='48' height='34' rx='9' fill='#d6a08e' stroke='var(--B)' stroke-width='1.3'/>\n  <text x='524' y='117' text-anchor='middle' font-size='7.5' fill='#5a2f25'>mito</text>\n  <text x='478' y='150' text-anchor='middle' font-size='8' fill='var(--B)'>接触が稀 → 脂質チャンネリング破綻</text>\n  <!-- bottom outcome -->\n  <rect x='60' y='190' width='240' height='96' rx='8' fill='#e6efe6' stroke='var(--A)' stroke-width='1.4'/>\n  <text x='180' y='212' text-anchor='middle' font-size='9' fill='var(--A)' font-weight='700'>S155A 過剰発現（WD下）</text>\n  <text x='180' y='232' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>mito-LD接触を回復</text>\n  <text x='180' y='250' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>LD拡大・FFAをLDへ貯蔵</text>\n  <text x='180' y='270' text-anchor='middle' font-size='9.5' fill='var(--A)' font-weight='700'>→ 酸化ストレスを軽減</text>\n  <rect x='340' y='190' width='240' height='96' rx='8' fill='#f1e2dd' stroke='var(--B)' stroke-width='1.4'/>\n  <text x='460' y='212' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='700'>カップリング破綻が持続</text>\n  <text x='460' y='232' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>未処理脂質が蓄積</text>\n  <text x='460' y='250' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>酸化ストレス</text>\n  <text x='460' y='270' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='700'>→ lipotoxicity → steatosis進行</text>\n  <path d='M300,238 L338,238' stroke='var(--B)' stroke-width='1.3' marker-end='url(#af26b)'/>\n  <text x='320' y='306' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>新手法 scPhenomics で単一細胞の細胞内脂質動態をin vivo可視化</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("26", [{ic:"liver",cap:"肝細胞内の脂質滴（LD）とミトコンドリアのコンタクト"},{ic:"mouse",cap:"絶食 vs 西洋食（WD）マウス肝"},{ic:"omics",cap:"scPhenomics（単一細胞組織イメージング）"},{ic:"omics",cap:"空間プロテオミクス"},{ic:"drug",cap:"PLIN5 S155A過剰発現がlipotoxicityを軽減"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 26 Porat-Shliom Nat Metab 2026: 絶食/WDマウス+scPhenomics+空間プロテオミクス+AAVによるPLIN5変異体過剰発現 */
LP.methods("26", ["mouse","human","proteomics","facs","imaging","qpcr","wb"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
LP.cinema("26", {
  svg:GLYPH.bg()
    +`<defs>${GLYPH.defsCommon}${GLYPH.arrow("26d","var(--D)")}${GLYPH.arrow("26g","var(--G)")}</defs>`
    +GLYPH.title("PLIN5 S155リン酸化がmito-LDカップリングを制御——脂質フラックスと脂肪毒性の鍵")
    +GLYPH.hep("hep26",20,32,0.85,"肝細胞")
    +`<g id="ldH26"><ellipse cx="280" cy="140" rx="38" ry="32" fill="#f5e060" fill-opacity="0.7" stroke="#d4b800" stroke-width="1.8"/><text x="280" y="135" text-anchor="middle" font-size="9" fill="#7a6000" font-weight="600">脂質滴（LD）</text><text x="280" y="148" text-anchor="middle" font-size="8" fill="#7a6000">中型</text></g>`
    +`<ellipse id="mito26" cx="450" cy="140" rx="44" ry="26" fill="var(--D)" fill-opacity="0.18" stroke="var(--D)" stroke-width="1.6"/><text x="450" y="135" text-anchor="middle" font-size="9" fill="var(--D)" font-weight="600">ミトコンドリア</text><text x="450" y="150" text-anchor="middle" font-size="8" fill="var(--D)">β酸化</text>`
    +GLYPH.receptor("plin5r26",365,130,"PLIN5","var(--D)")
    +`<g id="contactLine26" class="fade"><line x1="318" y1="138" x2="406" y2="138" stroke="var(--D)" stroke-width="2.5" stroke-dasharray="5,3"/><text x="362" y="126" text-anchor="middle" font-size="8.5" fill="var(--D)">mito-LDコンタクト</text></g>`
    +`<g id="fastLabel26" class="fade">`+GLYPH.badge("fastB26",158,108,"絶食","FA過剰→mito↑","var(--D)")+`</g>`
    +`<g id="wdLabel26" class="fade">`+GLYPH.badge("wdB26",158,108,"WD","mito-LD↓→脂毒","var(--B)")+`</g>`
    +`<g id="s155aWrap26" class="fade">`+GLYPH.tag("s155a26",365,100,"S155A(非リン酸化)","var(--D)",80,false)+`</g>`
    +`<g id="s155eWrap26" class="fade">`+GLYPH.tag("s155e26",365,100,"S155E(リン酸化模倣)","var(--B)",80,false)+`</g>`
    +`<g id="ldLarge26" class="fade"><ellipse cx="280" cy="145" rx="54" ry="44" fill="#f5e060" fill-opacity="0.5" stroke="#d4b800" stroke-width="2" stroke-dasharray="5,3"/><text x="280" y="140" text-anchor="middle" font-size="9" fill="#7a6000">LD拡大</text><text x="280" y="155" text-anchor="middle" font-size="8" fill="#7a6000">（S155A）</text></g>`
    +`<g id="ldSmall26" class="fade"><ellipse cx="280" cy="145" rx="22" ry="18" fill="#f5e060" fill-opacity="0.9" stroke="#d4b800" stroke-width="2"/><text x="280" y="140" text-anchor="middle" font-size="8" fill="#7a6000">LD縮小</text><text x="280" y="153" text-anchor="middle" font-size="8" fill="#7a6000">（S155E）</text></g>`
    +`<g id="scPheno26" class="fade"><rect x="105" y="320" width="510" height="42" rx="5" fill="var(--G)" fill-opacity="0.08" stroke="var(--G)" stroke-width="1"/><text x="360" y="338" text-anchor="middle" font-size="9" fill="var(--G)" font-weight="600">新手法 scPhenomics（単一細胞組織イメージング）＋ 空間プロテオミクス</text><text x="360" y="353" text-anchor="middle" font-size="8.5" fill="var(--G)">絶食/WDマウス肝の脂質代謝状態を単一細胞解像度でマッピング</text></g>`
    +GLYPH.layer("col26"),
  build(K){
    return [
      {color:"D",t:2400,cap:"① 健常肝細胞。脂質滴（LD）はミトコンドリアの近傍に存在し、通常食ではLDが少なく、mito-LDコンタクトも乏しい。",run(){}},
      {color:"D",t:4200,cap:"② 絶食状態。脂肪組織から流入する脂肪酸に対応して、mito-LDコンタクトが小葉全体で増加。PLIN5（ペリリピン5）が誘導されてミトコンドリア-LD物理的テザリングを促進する。",
       run(){
         K.show(["fastLabel26","contactLine26"]);
         K.pulse("fastB26");
         K.flow(318,138,406,138,"var(--D)",{n:3,dur:1.0,loop:2});
         K.T(()=>K.pulse("plin5r26"),500);
       }},
      {color:"B",t:4200,cap:"③ 短期（4週）の西洋食（WD）投与。mito-LDコンタクトは稀なままで、FFAをLDへ貯蔵して封じ込める適応が働きにくく→脂肪毒性（lipotoxicity）・酸化ストレスのリスクが高まる。",
       run(){
         K.unpulse("fastB26"); K.unpulse("plin5r26");
         K.attr("fastLabel26","opacity","0");
         K.attr("contactLine26","opacity","0.18");
         K.show(["wdLabel26"]);
         K.pulse("wdB26");
       }},
      {color:"D",t:4800,cap:"④ PLIN5 S155変異体実験。非リン酸化型S155AはコンタクトとLD拡大を促進、リン酸化模倣型S155EはLD縮小をもたらす。S155Aの過剰発現はWDマウスで脂質過酸化を軽減——S155リン酸化制御が治療標的となる。",
       run(){
         K.unpulse("wdB26");
         K.show(["s155aWrap26","ldLarge26"]);
         K.pulse("s155a26");
         K.T(()=>{
           K.unpulse("s155a26");
           K.attr("s155aWrap26","opacity","0.2");
           K.attr("ldLarge26","opacity","0.2");
           K.show(["s155eWrap26","ldSmall26"]);
           K.pulse("s155e26");
         },2200);
         K.T(()=>{K.unpulse("s155e26"); K.show(["scPheno26"]);},4400);
       }},
    ];
  }
});
