/* ============================================================
   js/core.js — テーマ・アイコン・手法の定義と、論文データの登録API
   読み込み順：core.js → cinema.js → catinfo.js → papers/NN.js → app.js
   （index.html の <script src> 一覧。fetch を使わないので file:// でも動く）
   ============================================================ */

/* ===== テーマ定義 ===== */
const THEMES={
  A:{name:"培養系・モデル構築",c:"var(--A)"},
  B:{name:"線維化メカニズム(HSC)",c:"var(--B)"},
  C:{name:"免疫・炎症(KC/MΦ)",c:"var(--C)"},
  D:{name:"脂肪化・脂質/代謝",c:"var(--D)"},
  E:{name:"LSEC・血管・zonation",c:"var(--E)"},
  F:{name:"数理・in silico(ABM)",c:"var(--F)"},
  G:{name:"オミクス・空間解析",c:"var(--G)"},
  H:{name:"治療・創薬標的/再生",c:"var(--H)"},
  I:{name:"共培養(肝細胞＋複数非実質細胞)",c:"var(--I)"}
};

/* ===== イラスト素材（自前インラインSVG） ===== */
const ICONS={
  mouse:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--ink-soft)' stroke-width='1.6'><ellipse cx='27' cy='30' rx='13' ry='9' fill='var(--paper-2)'/><circle cx='14' cy='24' r='7' fill='var(--paper-2)'/><circle cx='11' cy='18' r='3.5' fill='var(--paper-2)'/><circle cx='12' cy='24' r='1.2' fill='var(--ink-soft)' stroke='none'/><path d='M40 32 q6 1 5 7'/></svg>",
  human:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--ink-soft)' stroke-width='1.6'><circle cx='24' cy='15' r='7' fill='var(--paper-2)'/><path d='M11 41 q0-13 13-13 t13 13' fill='var(--paper-2)'/></svg>",
  liver:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--B)' stroke-width='1.6'><path d='M7 18 q18-7 34-3 q3 12-6 20 q-10 7-19 1 q-9-7-9-18z' fill='var(--paper-2)'/><path d='M30 16 q2 6-1 11'/></svg>",
  hepatocyte:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--B)' stroke-width='1.6'><path d='M24 7 L40 16 L40 32 L24 41 L8 32 L8 16 Z' fill='var(--paper-2)'/><circle cx='24' cy='24' r='6' fill='var(--B)' opacity='.25'/></svg>",
  macrophage:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--C)' stroke-width='1.4'><path d='M24 6 l3 5 5-3 0 6 6 1-4 4 4 4-6 1 0 6-5-3-3 5-3-5-5 3 0-6-6-1 4-4-4-4 6-1 0-6 5 3z' fill='var(--paper-2)'/><circle cx='24' cy='24' r='5' fill='var(--C)' opacity='.25'/></svg>",
  stellate:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--B)' stroke-width='1.4'><path d='M24 5 l4 13 13-6-9 11 12 6-14 1 3 12-9-9-9 9 3-12-14-1 12-6-9-11 13 6z' fill='var(--paper-2)'/><circle cx='24' cy='24' r='4.5' fill='var(--B)' opacity='.25'/></svg>",
  endothelial:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--E)' stroke-width='1.6'><path d='M5 16 h38 M5 32 h38'/><ellipse cx='17' cy='24' rx='3' ry='4' fill='var(--E)' opacity='.3'/><ellipse cx='31' cy='24' rx='3' ry='4' fill='var(--E)' opacity='.3'/></svg>",
  adipocyte:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--D)' stroke-width='1.6'><circle cx='24' cy='24' r='17' fill='var(--paper-2)'/><circle cx='24' cy='24' r='11' fill='var(--D)' opacity='.2'/><circle cx='20' cy='20' r='2.5' fill='var(--D)' opacity='.5' stroke='none'/></svg>",
  chip:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--accent)' stroke-width='1.6'><rect x='6' y='12' width='36' height='24' rx='4' fill='var(--paper-2)'/><circle cx='16' cy='24' r='4' fill='var(--D)' opacity='.4'/><circle cx='24' cy='24' r='4' fill='var(--B)' opacity='.4'/><circle cx='32' cy='24' r='4' fill='var(--C)' opacity='.4'/><path d='M2 24 h4 M42 24 h4'/></svg>",
  dish:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--accent)' stroke-width='1.6'><ellipse cx='24' cy='26' rx='18' ry='9' fill='var(--paper-2)'/><ellipse cx='24' cy='24' rx='18' ry='9'/><circle cx='18' cy='24' r='1.6' fill='var(--accent)' stroke='none'/><circle cx='27' cy='27' r='1.6' fill='var(--accent)' stroke='none'/><circle cx='30' cy='22' r='1.6' fill='var(--accent)' stroke='none'/></svg>",
  omics:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--G)' stroke-width='1.6'><path d='M12 8 q12 8 0 16 q-12 8 0 16 M24 8 q-12 8 0 16 q12 8 0 16'/><path d='M14 13 h8 M14 35 h8' opacity='.6'/><rect x='32' y='30' width='3' height='12' fill='var(--G)' stroke='none'/><rect x='37' y='24' width='3' height='18' fill='var(--G)' stroke='none'/><rect x='42' y='34' width='3' height='8' fill='var(--G)' stroke='none'/></svg>",
  drug:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--A)' stroke-width='1.6'><g transform='rotate(-35 24 24)'><rect x='8' y='18' width='32' height='13' rx='6.5' fill='var(--paper-2)'/><line x1='24' y1='18' x2='24' y2='31'/><rect x='8' y='18' width='16' height='13' rx='6.5' fill='var(--A)' opacity='.2' stroke='none'/></g></svg>",
  silico:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--F)' stroke-width='1.6'><rect x='7' y='9' width='34' height='24' rx='3' fill='var(--paper-2)'/><path d='M18 41 h12 M24 33 v8'/><path d='M13 16 h6 M13 21 h10 M13 26 h7' stroke-width='1.3'/></svg>",
  geneko:"<svg viewBox='0 0 48 48' fill='none' stroke='var(--ink-soft)' stroke-width='1.6'><path d='M16 8 q-4 16 0 32 M22 8 q4 16 0 32'/><path d='M14 22 q8 2 10 0'/><path d='M30 14 l12 12 M42 14 l-12 12' stroke='var(--H)' stroke-width='2.2'/></svg>"
};

/* ===== 使用手法アイコン ===== */
const METHOD_ICONS={
  scrna:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='27' r='15' stroke='var(--C)' stroke-width='1.8' fill='var(--paper-2)'/><path d='M24 12 L24 8' stroke='var(--C)' stroke-width='2' stroke-linecap='round'/><circle cx='18' cy='22' r='2.5' fill='var(--C)' stroke='none'/><circle cx='27' cy='20' r='2' fill='var(--B)' stroke='none'/><circle cx='21' cy='30' r='2.2' fill='var(--D)' stroke='none'/><circle cx='30' cy='28' r='2.5' fill='var(--E)' stroke='none'/><circle cx='17' cy='31' r='1.8' fill='var(--C)' stroke='none' opacity='.5'/><circle cx='28' cy='34' r='1.6' fill='var(--B)' stroke='none' opacity='.6'/></svg>`,
  spatial:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='6' y='6' width='36' height='36' rx='3' stroke='var(--line)' stroke-width='1.5' fill='var(--paper-2)'/><circle cx='14' cy='14' r='4' fill='var(--D)' stroke='none'/><circle cx='24' cy='14' r='4' fill='var(--C)' stroke='none' opacity='.6'/><circle cx='34' cy='14' r='4' fill='var(--B)' stroke='none' opacity='.4'/><circle cx='14' cy='24' r='4' fill='var(--E)' stroke='none' opacity='.7'/><circle cx='24' cy='24' r='4' fill='var(--D)' stroke='none' opacity='.9'/><circle cx='34' cy='24' r='4' fill='var(--C)' stroke='none' opacity='.8'/><circle cx='14' cy='34' r='4' fill='var(--B)' stroke='none' opacity='.5'/><circle cx='24' cy='34' r='4' fill='var(--E)' stroke='none' opacity='.4'/><circle cx='34' cy='34' r='4' fill='var(--D)' stroke='none' opacity='.7'/></svg>`,
  rnaseq:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><line x1='5' y1='42' x2='44' y2='42' stroke='var(--line)' stroke-width='1.5'/><line x1='5' y1='42' x2='5' y2='7' stroke='var(--line)' stroke-width='1.5'/><rect x='9' y='32' width='5' height='10' rx='1' fill='var(--E)' stroke='none' opacity='.5'/><rect x='16' y='22' width='5' height='20' rx='1' fill='var(--E)' stroke='none' opacity='.7'/><rect x='23' y='14' width='5' height='28' rx='1' fill='var(--E)' stroke='none'/><rect x='30' y='19' width='5' height='23' rx='1' fill='var(--B)' stroke='none' opacity='.7'/><rect x='37' y='28' width='5' height='14' rx='1' fill='var(--B)' stroke='none' opacity='.4'/></svg>`,
  chipseq:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><line x1='4' y1='38' x2='44' y2='38' stroke='var(--line)' stroke-width='1.5'/><polyline points='4,38 10,38 13,26 16,38 21,38 24,9 27,38 32,38 35,27 38,38 44,38' stroke='var(--B)' stroke-width='2.2' stroke-linejoin='round' stroke-linecap='round'/><polyline points='4,38 10,38 12,33 14,38 44,38' stroke='var(--E)' stroke-width='1.4' stroke-linejoin='round' opacity='.6'/></svg>`,
  qpcr:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><line x1='4' y1='40' x2='44' y2='40' stroke='var(--line)' stroke-width='1.5'/><line x1='4' y1='40' x2='4' y2='7' stroke='var(--line)' stroke-width='1.5'/><line x1='4' y1='26' x2='44' y2='26' stroke='var(--accent)' stroke-width='1' stroke-dasharray='3,2' opacity='.7'/><path d='M6,38 C9,38 12,37 14,36 C17,35 18,32 20,26 C22,20 24,11 28,9 C32,7 34,10 36,12 C38,14 40,16 43,16' stroke='var(--D)' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>`,
  wb:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='5' y='8' width='2' height='34' rx='1' fill='var(--accent)' stroke='none'/><rect x='10' y='11' width='32' height='7' rx='3.5' fill='var(--ink)' stroke='none' opacity='.8'/><rect x='12' y='23' width='22' height='5' rx='2.5' fill='var(--ink)' stroke='none' opacity='.5'/><rect x='10' y='32' width='28' height='8' rx='4' fill='var(--ink)' stroke='none' opacity='.7'/></svg>`,
  facs:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><line x1='4' y1='43' x2='45' y2='43' stroke='var(--line)' stroke-width='1.5'/><line x1='4' y1='43' x2='4' y2='7' stroke='var(--line)' stroke-width='1.5'/><circle cx='12' cy='35' r='2.5' fill='var(--E)' stroke='none'/><circle cx='16' cy='33' r='2' fill='var(--E)' stroke='none' opacity='.8'/><circle cx='10' cy='30' r='2.2' fill='var(--E)' stroke='none' opacity='.7'/><circle cx='15' cy='28' r='1.8' fill='var(--E)' stroke='none'/><circle cx='20' cy='32' r='2' fill='var(--E)' stroke='none' opacity='.6'/><circle cx='31' cy='16' r='2.5' fill='var(--C)' stroke='none'/><circle cx='35' cy='13' r='2' fill='var(--C)' stroke='none' opacity='.8'/><circle cx='29' cy='12' r='2.2' fill='var(--C)' stroke='none' opacity='.7'/><circle cx='34' cy='19' r='1.8' fill='var(--C)' stroke='none'/><circle cx='38' cy='16' r='2' fill='var(--C)' stroke='none' opacity='.6'/></svg>`,
  mouse:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='30' rx='14' ry='10' fill='var(--paper-2)' stroke='var(--ink-soft)' stroke-width='1.6'/><circle cx='24' cy='17' r='9' fill='var(--paper-2)' stroke='var(--ink-soft)' stroke-width='1.6'/><circle cx='16' cy='8' r='5.5' fill='none' stroke='var(--ink-soft)' stroke-width='1.6'/><circle cx='32' cy='8' r='5.5' fill='none' stroke='var(--ink-soft)' stroke-width='1.6'/><path d='M37 35 C42 34 44 30 44 26' stroke='var(--ink-soft)' stroke-width='1.8' fill='none' stroke-linecap='round'/><circle cx='20' cy='16' r='1.8' fill='var(--ink)' stroke='none'/></svg>`,
  human:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='11' r='7' stroke='var(--ink-soft)' stroke-width='1.6' fill='var(--paper-2)'/><path d='M12 43 C12 31 36 31 36 43' stroke='var(--ink-soft)' stroke-width='1.6' fill='none'/><rect x='20' y='28' width='8' height='10' rx='2' fill='var(--E)' stroke='var(--E)' stroke-width='1' opacity='.5'/><path d='M20 28 L20 23 M28 28 L28 23' stroke='var(--ink-soft)' stroke-width='1.4'/></svg>`,
  invitro:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='24' cy='28' rx='16' ry='9' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.6'/><ellipse cx='24' cy='26' rx='16' ry='9' stroke='var(--accent)' stroke-width='1.6'/><circle cx='20' cy='24' r='4' fill='var(--D)' stroke='none' opacity='.4'/><circle cx='28' cy='26' r='3' fill='var(--C)' stroke='none' opacity='.4'/><circle cx='24' cy='20' r='2.5' fill='var(--B)' stroke='none' opacity='.4'/></svg>`,
  insilico:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='24' r='5' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.8'/><circle cx='8' cy='18' r='4' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/><circle cx='40' cy='18' r='4' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/><circle cx='14' cy='38' r='4' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/><circle cx='34' cy='38' r='4' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.5'/><line x1='12' y1='19' x2='19' y2='21' stroke='var(--F)' stroke-width='1.4'/><line x1='36' y1='19' x2='29' y2='21' stroke='var(--F)' stroke-width='1.4'/><line x1='17' y1='35' x2='21' y2='29' stroke='var(--F)' stroke-width='1.4'/><line x1='31' y1='35' x2='27' y2='29' stroke='var(--F)' stroke-width='1.4'/><line x1='12' y1='21' x2='17' y2='35' stroke='var(--F)' stroke-width='1' opacity='.4'/><line x1='36' y1='21' x2='31' y2='35' stroke='var(--F)' stroke-width='1' opacity='.4'/></svg>`,
  drug:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><g transform='rotate(-35 24 24)'><rect x='6' y='18' width='36' height='13' rx='6.5' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.6'/><line x1='24' y1='18' x2='24' y2='31' stroke='var(--H)' stroke-width='1.4'/><rect x='6' y='18' width='18' height='13' rx='6.5' fill='var(--H)' stroke='none' opacity='.2'/></g><circle cx='36' cy='10' r='3' fill='var(--H)' stroke='none' opacity='.5'/><circle cx='41' cy='17' r='2' fill='var(--H)' stroke='none' opacity='.4'/></svg>`,
  proteomics:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><line x1='4' y1='40' x2='44' y2='40' stroke='var(--line)' stroke-width='1.5'/><line x1='4' y1='40' x2='4' y2='7' stroke='var(--line)' stroke-width='1.5'/><rect x='9' y='28' width='3' height='12' rx='1.5' fill='var(--G)' stroke='none' opacity='.6'/><rect x='15' y='12' width='3' height='28' rx='1.5' fill='var(--G)' stroke='none'/><rect x='21' y='20' width='3' height='20' rx='1.5' fill='var(--G)' stroke='none' opacity='.7'/><rect x='27' y='8' width='3' height='32' rx='1.5' fill='var(--G)' stroke='none'/><rect x='33' y='16' width='3' height='24' rx='1.5' fill='var(--G)' stroke='none' opacity='.8'/><rect x='39' y='24' width='3' height='16' rx='1.5' fill='var(--G)' stroke='none' opacity='.5'/></svg>`,
  imaging:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='22' cy='22' r='14' stroke='var(--E)' stroke-width='1.8' fill='var(--paper-2)'/><circle cx='22' cy='22' r='8' stroke='var(--E)' stroke-width='1.2' fill='none' opacity='.5'/><circle cx='22' cy='22' r='3' fill='var(--E)' stroke='none' opacity='.4'/><line x1='33' y1='33' x2='43' y2='43' stroke='var(--E)' stroke-width='3' stroke-linecap='round'/><circle cx='22' cy='17' r='2' fill='var(--D)' stroke='none' opacity='.6'/><circle cx='26' cy='25' r='1.5' fill='var(--C)' stroke='none' opacity='.6'/></svg>`,
  nano:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='24' r='9' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.8'/><circle cx='12' cy='16' r='5.5' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4' opacity='.7'/><circle cx='36' cy='16' r='5.5' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4' opacity='.7'/><circle cx='14' cy='34' r='4.5' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.3' opacity='.5'/><circle cx='34' cy='34' r='4.5' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.3' opacity='.5'/><circle cx='24' cy='9' r='3' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.2' opacity='.6'/></svg>`,
  crispr:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14 8 q-4 16 0 32 M20 8 q4 16 0 32' stroke='var(--ink-soft)' stroke-width='1.8' stroke-linecap='round'/><path d='M14 22 q6 2 6 0' stroke='var(--ink-soft)' stroke-width='1.4'/><path d='M28 14 L40 26 M40 14 L28 26' stroke='var(--H)' stroke-width='2.4' stroke-linecap='round'/><circle cx='34' cy='20' r='5' stroke='var(--H)' stroke-width='1.4' fill='none' opacity='.4'/></svg>`,
  elisa:`<svg viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><!-- 96well strip × 2 rows --><rect x='5' y='10' width='38' height='12' rx='3' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.6'/><circle cx='13' cy='16' r='3.2' fill='var(--D)' stroke='none' opacity='.2'/><circle cx='22' cy='16' r='3.2' fill='var(--D)' stroke='none' opacity='.5'/><circle cx='31' cy='16' r='3.2' fill='var(--D)' stroke='none' opacity='.8'/><circle cx='40' cy='16' r='3.2' fill='var(--D)' stroke='none'/><rect x='5' y='26' width='38' height='12' rx='3' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.6'/><circle cx='13' cy='32' r='3.2' fill='var(--D)' stroke='none' opacity='.1'/><circle cx='22' cy='32' r='3.2' fill='var(--D)' stroke='none' opacity='.35'/><circle cx='31' cy='32' r='3.2' fill='var(--D)' stroke='none' opacity='.65'/><circle cx='40' cy='32' r='3.2' fill='var(--D)' stroke='none' opacity='.9'/></svg>`
};
const METHOD_LABELS={
  scrna:"scRNA/snRNA-seq", spatial:"空間TX", rnaseq:"Bulk RNA-seq", chipseq:"ChIP/ATAC-seq",
  qpcr:"qPCR / PCR", wb:"WB / IHC / IF", facs:"フローサイト", elisa:"ELISA",
  mouse:"マウスin vivo", human:"ヒト検体", invitro:"オルガノイド/MPS",
  insilico:"数理モデル", drug:"薬剤スクリーニング",
  proteomics:"プロテオミクス", imaging:"ライブ/顕微鏡", nano:"EV/ナノ粒子", crispr:"CRISPR/KO"
};
/* exp=実験系（何を使うか・何に介入するか）/ ana=解析系（結果をどう読み出すか） */
const METHOD_CAT={
  mouse:"exp", human:"exp", invitro:"exp",
  nano:"exp", drug:"exp", crispr:"exp",
  qpcr:"ana", wb:"ana", facs:"ana", elisa:"ana", imaging:"ana",
  scrna:"ana", spatial:"ana", rnaseq:"ana", chipseq:"ana",
  proteomics:"ana", insilico:"ana"
};

/* ===== 論文データの登録先 =====
   各 papers/NN.js が下の LP API で自分を登録する（1本＝1ファイル）。
     LP.paper({...})          本文データ（PAPERS に追加）
     LP.icons(id,[...])        登場要素イラスト（ic は上の ICONS のキー）
     LP.methods(id,[...])      使用手法（METHOD_LABELS のキー。総説は []）
     LP.cinema(id,{svg,build}) アニメーション（js/cinema.js の CinemaKit を使う）
   PAPERS の並びは index.html の読み込み順（新しい論文が先頭）。 */
const PAPERS=[], paperIcons={}, paperMethods={}, CINEMA={};
const LP={
  paper(p){
    if(!p||typeof p!=="object"||!p.id){ console.error("[LP.paper] id のないデータを無視しました",p); return; }
    if(PAPERS.some(q=>q.id===p.id)) console.error("[LP.paper] ID が重複しています: "+p.id);
    PAPERS.push(p);
  },
  icons(id,list){ paperIcons[id]=list; },
  methods(id,list){ paperMethods[id]=list; },
  cinema(id,def){ CINEMA[id]=def; }
};
