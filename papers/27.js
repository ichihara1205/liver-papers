/* ============================================================
   №27 · Immunity 2019 · Bonnardel J, T'Jonck W, Gaublomme D, Guilliams M, Scott CL et al.（VIB…
   KCニッチの定義——肝細胞がID3を誘導し、LSECとHSCがDLL4/Notch+BMP→LXRαを誘導して単球をKCへ転換する
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"27", primary:"C",
    title:"KCニッチの定義——肝細胞がID3を誘導し、LSECとHSCがDLL4/Notch+BMP→LXRαを誘導して単球をKCへ転換する",
    authors:"Bonnardel J, T'Jonck W, Gaublomme D, Guilliams M, Scott CL et al.（VIB-UGent, ベルギー）",
    journal:"Immunity",
    year:2019,
    vol:"51(4):638-654.e9",
    doi:"10.1016/j.immuni.2019.08.017",
    url:"https://www.cell.com/immunity/fulltext/S1074-7613(19)30368-1",
    catPrimary:"C",
    catSub:["A","E"],
    tags:["C","E","B"],
    summary:"KCニッチの定義を確立した一次資料。肝細胞（hepatocyte）は転写因子ID3（inhibitor of DNA binding 3）の発現を単球に誘導し、一方でLSECとHSCはDLL4依存性のNotch経路とBMP経路の相乗作用によってLXRα（liver X receptor α）の発現を誘導・維持する。この二段階の転写因子プログラムが、単球を「汎マクロファージ」ではなく「肝臓特異的なKC」へと変換する。KCの消耗後に単球を補充する実験でも、perisinusoidal spaceへの移行→ID3/LXRα獲得という順序が再現されており、ニッチの優位性（細胞自律的でない）が証明された。",
    connection:["iKC（iPSC由来クッパー細胞）が成熟KCの表現型を獲得するためにはニッチシグナル——とりわけ肝細胞由来のID3誘導シグナルと、LSEC/HSC由来のNotch/BMP-LXRα軸——が必要であることをこの論文が説明する。共培養系においてiKCが真のKC挙動を示せているかを評価するとき、ID3とLXRαの発現確認が機能的成熟の証拠となる。No.31（Tasnim 2019 iKC）のニッチ概念の技術的実装版として対で読む。"],
    methods:["in vivo（単球枯渇マウス+bone marrow transplant）","scRNA-seq","FACS","空間イメージング","条件付き遺伝子欠失（DLL4 KO等）","ヒト肝組織との比較"],
    "approach": "in vivo（単球枯渇マウス＋骨髄移植・条件付きDLL4 KO等）＋ scRNA-seq・FACS・空間イメージング ＋ ヒト肝組織比較",
    "added": "2026-06-15",
    "abstract_ja": "クッパー細胞（KC）は肝類洞に常在する自己複製性のマクロファージだが、その細胞同一性を規定する微小環境（ニッチ）の構成要素は不明であった。本研究はKCを枯渇させた肝で骨髄由来単球がKCへ転換する過程を解析し、ニッチを構成する三つの実質・非実質細胞が協調してKC同一性を誘導することを示した。すなわち肝細胞がID3を、類洞内皮細胞（LSEC）と肝星細胞（HSC）がDLL4/Notchおよびその下流のBMP–LXRα軸を介して、流入単球を成熟KCへとリプログラムする。ニッチシグナルを欠くと単球はKC表現型を獲得できず、KCの同一性がニッチ依存的に維持・再生されることが明らかになった。",
    "background": "KCは胚由来で自己複製により維持されるが、傷害や枯渇後には骨髄由来単球が空いたニッチを埋めてKC様細胞へ分化することが知られていた。しかし「どの細胞がどのシグナルを出してKC同一性を付与するのか」というニッチの分子実体は未解明であり、単球からKCへの転換を制御できれば組織マクロファージの人為的再構成への道が開ける。",
    "achievements": ["KC枯渇後に流入する単球が成熟KCへ転換する過程を時系列で捉え、**肝細胞・LSEC・HSCが協調するニッチ**がこの転換を駆動することを示した。", "**肝細胞由来ID3**と、**LSEC/HSC由来のDLL4–Notch→BMP→LXRα軸**がKC同一性遺伝子プログラムを誘導する中核シグナルであることを同定した。", "ニッチシグナルの遮断（DLL4 KO等）で単球のKC化が障害されることを示し、KC同一性が外部ニッチに依存することを実証した。"],
    "limitations": ["主にマウスのKC枯渇・再構成モデルに基づき、ヒトでのニッチ依存性は組織比較に留まる。", "ニッチ各因子の量的寄与や時間順序の完全な切り分けは限定的。", "病態（MASLD等）でニッチがどう改変されKC機能が変質するかは本論文の射程外。"],
    "glossary": [{"term": "ID3", "full": "inhibitor of DNA binding 3", "desc": "肝細胞が供給するKC同一性誘導因子。流入単球のKC化に必要"}, {"term": "DLL4", "full": "delta-like canonical Notch ligand 4", "desc": "LSEC/HSCが提示するNotchリガンド。KC同一性プログラムを誘導"}, {"term": "LXRα", "full": "liver X receptor alpha (NR1H3)", "desc": "KC成熟の鍵となる核内受容体。BMP–Notch下流でKC同一性を確立"}, {"term": "KC niche", "full": "Kupffer cell niche", "desc": "肝細胞・LSEC・HSCが構成するKC同一性維持の微小環境"}, {"term": "BMP", "full": "bone morphogenetic protein", "desc": "ニッチ細胞由来シグナル。Notchと協働しLXRα経由でKC化を促進"}],
    "struct": {"model": "in vivo + ヒト組織", "cells": ["KC", "流入単球", "肝細胞", "LSEC", "HSC"], "triggers": ["KC枯渇→単球流入", "DLL4 KO等のニッチ操作"], "steatosis": "—", "inflammation": "—", "fibrosis": "—", "readout": ["KC同一性遺伝子（ID3/LXRα）", "単球→KC転換効率", "scRNA-seqプロファイル"], "ignite": "—（恒常性研究。ニッチ喪失でKC同一性が確立できない）", "params": [{"name": "ニッチシグナル→iKC成熟係数", "note": "肝細胞接触(ID3)＋LSEC/HSC(DLL4/BMP→LXRα)の有無でiKC成熟確率を決めるABMルール"}, {"name": "KC同一性マーカー閾値", "note": "ID3/LXRα発現を共培養KCの機能的成熟判定に使用"}], "todos": ["共培養iKCでID3/LXRα発現を確認しニッチ成熟を評価", "肝細胞・LSEC・HSC接触の有無でiKC表現型を比較"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m27' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：KC枯渇→単球流入→ニッチ依存的にKC同一性が再構成</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① KC枯渇</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単球枯渇/移植マウス</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>空きニッチに単球流入</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>転換を追跡</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m27)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>② scRNA-seq/空間</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単球→KC軌跡</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FACSで表現型</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--G)'>同一性遺伝子</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m27)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>③ ニッチ操作</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>DLL4 KO等</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>シグナル遮断</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--H)'>KC化が障害</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m27)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>④ ヒト肝比較</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>保存性確認</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ニッチ概念</text>\n  <text x='556' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>種を越え保存</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Bonnardel J, Guilliams M, Scott CL et al., Immunity (2019)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f27' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>KCニッチ：三細胞の協調シグナルが単球をKCへ転換</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>肝細胞</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ID3 を供給</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>KC同一性の起点</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f27)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>LSEC / HSC</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>DLL4–Notch</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>BMP → LXRα</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>成熟を誘導</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f27)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>流入単球→KC</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ニッチ受容</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>同一性獲得</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>成熟KCへ</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f27)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>常在KC</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>自己複製で維持</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>恒常性・寛容</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>ニッチ喪失では単球はKC化できない＝KC同一性はニッチ依存</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("27", [{ic:"macrophage",cap:"流入単球→KCへ転換"}, {ic:"hepatocyte",cap:"肝細胞がID3を誘導"}, {ic:"endothelial",cap:"LSEC：DLL4/Notch"}, {ic:"stellate",cap:"HSC：BMP→LXRα"}, {ic:"mouse",cap:"KC枯渇マウス＋骨髄移植・DLL4 KO"}, {ic:"omics",cap:"scRNA-seq・空間イメージング"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 27 Bonnardel 2019 Immunity: KCニッチ定義 - 単球枯渇+BMT+scRNA-seq+FACS+条件付きKO */
/* 2026-10修正：未定義キー（invivo/ipsc）を除去。27/32は条件付きKO・BMP9 KOに対応して crispr を追加 */
LP.methods("27", ["mouse","human","crispr","scrna","facs","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №27 KCニッチ：3細胞の協調シグナルが単球をKCへ転換 ===== */
LP.cinema("27", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("27c","var(--C)")}${GLYPH.arrow("27d","var(--D)")}${GLYPH.arrow("27e","var(--E)")}</defs>`
    +GLYPH.title("KCニッチ：肝細胞・LSEC・HSCの三細胞が協調して流入単球をKCへ転換する")
    +GLYPH.hep("hep27",30,60,0.8,"肝細胞")
    +`<path d="M0,220 C180,205 540,235 720,218" fill="none" stroke="var(--E)" stroke-width="2"/><text x="20" y="252" font-size="9.5" fill="var(--E)">LSEC</text>`
    +GLYPH.stellate("hsc27",560,290,"肝星細胞")
    +GLYPH.monocyte("mono27",600,130,"流入単球")
    +`<g id="nicheSignals27" class="fade">`
      +GLYPH.tf("id3_27",200,200,"ID3","var(--D)")
      +GLYPH.tag("dll4_27",340,260,"DLL4–Notch","var(--E)",90)
      +GLYPH.tag("bmp27",520,340,"BMP→LXRα","var(--E)",90)
    +`</g>`
    +`<g id="kcResult27" class="fade">`
      +GLYPH.mac("mkc27",380,160,"成熟KC","#5d7a58")
      +GLYPH.receptor("vsig27",345,135,"VSIG4","var(--C)")
      +GLYPH.receptor("cd163r27",415,135,"CD163","var(--C)")
    +`</g>`
    +`<g id="failTag27" class="fade">`+GLYPH.tag("fail27",600,380,"ニッチ欠損→KC化不能","var(--B)",140)+`</g>`,
  build(K){
    return [
      {color:"E",t:2400,cap:"健常な肝類洞。肝細胞・LSEC・HSCが「KCニッチ」を構成する微小環境を形成している。",run(){}},
      {color:"D",t:3800,cap:"① 肝細胞がID3を供給し、KC同一性の転写起点を提供する。LSECはDLL4–Notch、HSCはBMP→LXRαをそれぞれ提示してニッチを完成させる。",run(){
        K.show(["nicheSignals27"]);
        K.flow(150,140,200,195,"var(--D)",{n:2,dur:0.9,loop:2});
        K.T(()=>{K.flow(340,225,340,248,"var(--E)",{n:2,dur:0.7,loop:2});
          K.flow(560,300,530,335,"var(--E)",{n:2,dur:0.7,loop:2});},600);
        K.T(()=>{K.pulse("id3_27");K.pulse("dll4_27");K.pulse("bmp27");},1000);
        K.T(()=>{K.unpulse("id3_27");K.unpulse("dll4_27");K.unpulse("bmp27");},2800);
      }},
      {color:"C",t:4200,cap:"② KCが空いた席に骨髄由来の単球が血中から流入し、三細胞のニッチシグナルを受け取って成熟KC（VSIG4+/CD163+）へ転換する。",run(){
        K.flow(600,146,404,160,"var(--C)",{n:3,dur:1.3,loop:1});
        K.T(()=>{K.show(["kcResult27"]);K.pulse("vsig27");K.pulse("cd163r27");},1600);
        K.T(()=>{K.unpulse("vsig27");K.unpulse("cd163r27");},3200);
      }},
      {color:"B",t:3000,cap:"③ ニッチシグナルを欠くとKC化ができない——三細胞協調が不可欠。培養でニッチを模倣することがiKC品質の鍵。",run(){
        K.show(["failTag27"]);
        K.pulse("fail27");
        K.T(()=>K.unpulse("fail27"),2000);
      }},
    ];
  }
});
