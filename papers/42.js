/* ============================================================
   №42 · Haematologica 2018 · Heideveld E, Hampton-O'Neil LA, Cross SJ et al.
   グルコルチコイドが単球を赤芽球島マクロファージ様のCD163+CD206+M2様マクロファージに分化誘導する
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"42", primary:"C",
    title:"グルコルチコイドが単球を赤芽球島マクロファージ様のCD163+CD206+M2様マクロファージに分化誘導する",
    authors:"Heideveld E, Hampton-O'Neil LA, Cross SJ et al.",
    journal:"Haematologica",
    year:2018,
    vol:"103(3):395-405",
    doi:"10.3324/haematol.2017.179341",
    url:"https://doi.org/10.3324/haematol.2017.179341",
    catPrimary:"C",
    catSub:[],
    tags:["C","H"],
    summary:"無血清培地にSCF・EPO・脂質・dexamethasoneを添加した条件で、ヒト末梢血単球をCD163+CD206+CD16+CD169+CXCR4+TAM受容体ファミリー発現を持つM2様マクロファージに分化誘導できることを示した原著。このGC-macrophageはヒト骨髄・胎児肝のCD163+常在マクロファージと表現型が似ており、赤芽球と結合してクラスターを作り、脱核後の核（pyrenocyte）を貪食するなど赤芽球島の機能の一部を再現する。プロテオームは抗炎症的（M2型）で、リソソーム/加水分解酵素関連が低下する。CD16・CD163はdexamethasoneだけで高発現となり（SCF・EPO・脂質は寄与しない）、CD16・CD163・CD206の発現はGR拮抗薬mifepristone（RU486）で低下する——GR活性化に依存した分化である。",
    connection:["dexamethasone含有分化培地でiKCを誘導する際、CD163はGC-dependent maturationの確認マーカーとして信頼できる。CD163+/VSIG4+/TIMD4+の共発現がhomeostatic KC表現型の評価基準となる。病的条件（LPS処理・FFA添加等）でのマーカー変化から「KC活性化閾値」を定量化できる。No.40（VSIG4/PDK2）・No.41（Desgeorges CD163総説）と統合してiKCの機能的成熟評価パネルを設計できる。"],
    methods:["in vitro（ヒト末梢血単球+SCF/EPO/脂質/dexamethasone培地）","フローサイトメトリー","GR阻害（RU486）","プロテオミクス（質量分析）","機能アッセイ（貪食・赤芽球結合・ライブイメージング）"],
    "approach": "in vitro（ヒト末梢血単球＋SCF/EPO/脂質/dexamethasone培地）＋ FACS・RT-PCR・プロテオミクス・GR阻害（RU486）・機能アッセイ（貪食・赤芽球結合・ライブイメージング）",
    "added": "2026-06-15",
    "abstract_ja": "グルココルチコイド（GC）はヒト末梢血単球を、赤芽球島マクロファージに類似したCD163+CD206+のM2様マクロファージへ分化誘導する。本研究は単球を無血清培地でSCF/EPO/脂質に加えdexamethasone存在下で培養し、GR依存的（mifepristone＝RU486で低下）にCD16・CD163・CD206が誘導され、CD169・CXCR4・TAM受容体（MERTK・AXL）も発現することを示した。得られたマクロファージ（GC-macrophage）はプロテオームが抗炎症的で、運動性が高く、赤芽球と結合してクラスターを作りpyrenocyteを貪食した。GCがin vitroで赤芽球島マクロファージ様の表現型・機能の一部を再現する手段であることを示す。iKC誘導においてCD163をGC依存的成熟マーカーとして用いる原著的根拠を与える。",
    "background": "赤芽球島の中心マクロファージと赤芽球の相互作用を調べるヒトモデルは、骨髄採取や遺伝子改変に頼るものに限られていた。著者らは前報で、SCF・EPO・脂質・dexamethasoneで培養した単球由来マクロファージが造血幹・前駆細胞の生存を支えることを示しており、どの因子が分化に必須か、またこの細胞が赤芽球島マクロファージとしての表現型・機能をもつかを明らかにする必要があった。",
    "achievements": ["ヒト末梢血単球からGC依存的に**CD163+CD206+のM2様マクロファージ**を分化誘導するプロトコルを確立した。", "CD16・CD163・CD206の誘導が**GR依存的（mifepristone＝RU486で低下）**であることを示し、CD169・CXCR4・TAM受容体（MERTK・AXL）の発現を伴うことを実証した。", "得られたマクロファージが**貪食能**（zymosan・pyrenocyte）と赤芽球との結合・クラスター形成能を備え、赤芽球島マクロファージ機能のin vitro再現手段となることを示した。"],
    "limitations": ["末梢血単球由来であり、組織常在KCの完全な同一性とは異なる。", "解析ドナー数は多くない（多くの実験でn＝3〜6）。", "in vivoでの機能的等価性は本研究では未証明。"],
    "glossary": [{"term": "CD163", "full": "CD163 (scavenger receptor)", "desc": "GC依存的に誘導される恒常性/M2マクロファージマーカー"}, {"term": "erythroblastic island Mφ", "full": "erythroblastic island macrophage", "desc": "赤芽球を支持する貪食型マクロファージ。本誘導細胞が類似"}, {"term": "CD169", "full": "sialoadhesin (SIGLEC1)", "desc": "組織常在・貪食型マクロファージマーカー。本研究ではタンパク発現はGC非依存的で、mRNAのみGR依存的に増加"}, {"term": "RU486", "full": "mifepristone（GR拮抗薬）", "desc": "GRを阻害しGC依存的なCD163誘導を抑制する薬理ツール"}],
    "struct": {"model": "in vitro（単球分化）", "cells": ["単球由来M2様マクロファージ"], "triggers": ["dexamethasone（GC）", "SCF/EPO/脂質"], "steatosis": "—", "inflammation": "△", "fibrosis": "—", "readout": ["CD16/CD163/CD206/CD169発現", "貪食能・赤芽球結合", "GR依存性（RU486）", "プロテオーム"], "ignite": "—（恒常性マクロファージのin vitro誘導）", "params": [{"name": "GC→CD163+M2誘導", "note": "iKC誘導培地にGCを入れCD163+恒常性表現型を作る根拠。LPS/FFAで活性化閾値を定量"}], "todos": ["dexamethasone培地でiKCのCD163+/VSIG4+/TIMD4+共発現を確認", "病的刺激（LPS/FFA）でのマーカー変化からKC活性化閾値を定量"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m42' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：単球→GC依存的にM2様Mφへ分化</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① ヒト単球</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>末梢血由来</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>SCF/EPO/脂質</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>出発材料</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m42)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>② GC培地</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>dexamethasone</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>分化誘導</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--A)'>M2様へ</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m42)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>③ GR依存性</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>RU486で阻害</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>GC依存を証明</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m42)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>④ 評価</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CD163/CD206/CD169</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>貪食能</text>\n  <text x='556' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--A)'>恒常性表現型</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Haematologica (2018) — GC induces CD163+CD206+ M2-like Mφ</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f42' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>GCがヒト単球を赤芽球島Mφ様のCD163+M2へ</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>単球＋GC</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>dexamethasone</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>GR依存</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f42)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>CD163+CD206+</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CD169・CXCR4も</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>恒常性/貪食型</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f42)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>貪食能獲得</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>M2様機能</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>iKCマーカー根拠</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>CD163+/VSIG4+/TIMD4+共発現がhomeostatic KC評価基準</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("42", [{ic:"human",cap:"ヒト末梢血単球"}, {ic:"dish",cap:"SCF/EPO/脂質の分化培養系"}, {ic:"drug",cap:"dexamethasone（GR依存・RU486で阻害）"}, {ic:"macrophage",cap:"CD163+CD206+のM2様マクロファージ"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 42 Haematologica 2018: GC処理でCD163+ M2様Mφ分化 */
LP.methods("42", ["invitro","human","facs","qpcr","drug","proteomics","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №42 GCがヒト単球を赤芽球島Mφ様のCD163+M2へ誘導 ===== */
LP.cinema("42", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("42c","var(--C)")}${GLYPH.arrow("42h","var(--H)")}</defs>`
    +GLYPH.title("ヒト単球＋GC → GR依存的にCD163+CD206+赤芽球島Mφ様M2を誘導")
    +GLYPH.monocyte("mono42",120,200,"末梢血単球")
    +GLYPH.pill("dex42",120,80,"dexamethasone(GC)",148)
    +GLYPH.receptor("gr42",120,160,"GR","var(--H)")
    +GLYPH.mac("m2_42",420,200,"","#5d7a58")
    +`<g id="m2label42" class="fade"><text x="420" y="255" text-anchor="middle" font-size="10" fill="#3d5a38" font-weight="600">CD163+CD206+</text><text x="420" y="268" text-anchor="middle" font-size="9" fill="var(--ink-soft)">M2様マクロファージ</text></g>`
    +`<g id="markers42" class="fade">`
      +GLYPH.receptor("cd163r42",385,175,"CD163","var(--C)")
      +GLYPH.receptor("cd206r42",455,175,"CD206","var(--C)")
    +`</g>`
    +`<g id="phago42" class="fade"><circle cx="420" cy="330" r="34" fill="#fff" stroke="var(--C)" stroke-width="2"/><text x="420" y="326" text-anchor="middle" font-size="10" fill="var(--C)" font-weight="600">貪食能</text><text x="420" y="340" text-anchor="middle" font-size="9" fill="var(--C)">pyrenocyte</text></g>`
    +GLYPH.pill("ru486",620,120,"RU486(GR拮抗)",120)
    +GLYPH.badge("block42",620,260,"GR阻害","→誘導消失","var(--H)"),
  build(K){
    return [
      {color:"E",t:2400,cap:"ヒト末梢血単球。GR（グルココルチコイド受容体）が膜と細胞質に存在する。",run(){}},
      {color:"H",t:3600,cap:"① dexamethasone（GC）がGRを活性化し、単球の転写プログラムを書き換え始める。",run(){
        K.show(["dex42"]);
        K.flow(120,96,120,155,"var(--H)",{n:2,dur:0.9,loop:2});
        K.T(()=>K.pulse("gr42"),600);
      }},
      {color:"C",t:4200,cap:"② GR依存的にCD16・CD163・CD206が誘導され、単球がM2様マクロファージへ分化。CD169・CXCR4・TAM受容体も発現し、骨髄・胎児肝のCD163+マクロファージに類似した表現型を獲得する。",run(){
        K.unpulse("gr42");
        K.flow(136,200,396,200,"var(--C)",{n:3,dur:1.3,loop:2});
        K.T(()=>{K.show(["m2label42","markers42"]);K.pulse("cd163r42");K.pulse("cd206r42");},1200);
        K.T(()=>{K.unpulse("cd163r42");K.unpulse("cd206r42");K.show(["phago42"]);},2800);
      }},
      {color:"H",t:3400,cap:"③ RU486（GR拮抗薬）でCD163・CD206などの誘導が低下し、GR依存性が実証される。CD163はiKC成熟の信頼マーカー。",run(){
        K.show(["ru486"]);
        K.T(()=>{K.strike(620,130,120,160);K.T(()=>{K.markX(120,160);K.show(["block42"]);K.attr("markers42","opacity","0.25");},700);},600);
      }},
    ];
  }
});
