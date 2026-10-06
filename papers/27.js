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
    authors:"Bonnardel J, T'Jonck W, Gaublomme D, Browaeys R, Scott CL, ..., Guilliams M（VIB-UGent, ベルギー）",
    journal:"Immunity",
    year:2019,
    vol:"51(4):638-654.e9",
    doi:"10.1016/j.immuni.2019.08.017",
    url:"https://www.cell.com/immunity/fulltext/S1074-7613(19)30368-1",
    catPrimary:"C",
    catSub:["A","E"],
    tags:["C","E","B"],
    summary:"KCニッチの定義を確立した一次資料。肝細胞（hepatocyte）との共培養は単球にID3の発現を誘導し（その分子経路は未解明）、LSEC由来のDLL4–Notch経路がLXRα（liver X receptor α）の発現を誘導し、HSC由来と推定されるBMP9がNotchと相乗的にLXRα依存性のKC遺伝子群を増強する。これらのニッチシグナルが、単球を「汎マクロファージ」ではなく「肝臓特異的なKC」へと変換する。KC枯渇後に流入する単球はTNF・IL-1によるHSC/LSECの一過性活性化を経て生着し、perisinusoidal space（Disse腔）へ移行してID3/LXRα等のKC関連転写因子を獲得する。",
    connection:["iKC（iPSC由来クッパー細胞）が成熟KCの表現型を獲得するためにはニッチシグナル——とりわけ肝細胞由来のID3誘導シグナルと、LSEC/HSC由来のNotch/BMP-LXRα軸——が必要であることをこの論文が示唆する。共培養系においてiKCが真のKC挙動を示せているかを評価するとき、ID3とLXRαの発現確認が機能的成熟の証拠となる。No.31（Tasnim 2019 iKC）のニッチ概念の技術的実装版として対で読む。"],
    methods:["in vivo（Clec4f-Cre×DTRによるKC枯渇＋DT）","bulk RNA-seq・マイクロアレイ","FACS","イメージング（intravital 2光子・CLEM）","遺伝子欠損マウス（Ccr2・Tnf）","単球と肝細胞/LSEC/HSCまたはOP9-DL4+BMPの共培養"],
    "approach": "in vivo（Clec4f-Cre×DTRマウスのDT投与によるKC枯渇、Ccr2・Tnf欠損、抗TNF/Anakinra/抗DLL1・DLL4投与）＋ bulk RNA-seq・FACS・intravital/CLEMイメージング ＋ 単球共培養（OP9-DL4・BMP9）",
    "added": "2026-06-15",
    "abstract_ja": "クッパー細胞（KC）は肝類洞に常在する自己複製性のマクロファージだが、その細胞同一性を規定する微小環境（ニッチ）の構成要素は不明であった。本研究はKCを枯渇させた肝で骨髄由来単球がKCへ転換する過程を解析し、ニッチを構成する三つの実質・非実質細胞が協調してKC同一性を誘導することを示した。すなわち肝細胞はID3の発現を、類洞内皮細胞（LSEC）はDLL4–Notchを介してLXRαの発現を誘導し、肝星細胞（HSC）由来と推定されるBMP9がNotchと相乗してこれを増強することで、流入単球をKCへとリプログラムする。KC枯渇後の単球の生着は、死にゆくKCが放出するTNF・IL-1によるHSC・LSECの一過性活性化に依存する。Notch阻害で単球のKC関連転写因子の獲得が低下し、KCの同一性がニッチ依存的に付与されることが示された。",
    "background": "KCは胚由来で自己複製により維持されるが、傷害や枯渇後には骨髄由来単球が空いたニッチを埋めてKC様細胞へ分化することが知られていた。しかし「どの細胞がどのシグナルを出してKC同一性を付与するのか」というニッチの分子実体は未解明であり、単球からKCへの転換を制御できれば組織マクロファージの人為的再構成への道が開ける。",
    "achievements": ["KC枯渇後に流入する単球が成熟KCへ転換する過程を時系列で捉え、**肝細胞・LSEC・HSCが協調するニッチ**がこの転換を駆動することを示した。", "肝細胞との接触が**ID3**を、**LSEC由来のDLL4–Notch**が**LXRα**を誘導し、**BMP9（HSC由来と推定）**がNotchと相乗してKC同一性遺伝子プログラムを増強することを、NicheNet予測とin vitro共培養で同定した。", "in vivoで抗DLL1/DLL4抗体によりNotchを遮断すると、流入単球のLXRα・Spic等のKC関連転写因子の発現が低下し、KC同一性が外部ニッチに依存することを示した。さらに、死にゆくKCのTNF・IL-1がHSC/LSECを一過性に活性化して単球の生着を可能にすることも明らかにした。"],
    "limitations": ["マウスのKC枯渇・再構成モデルに基づき、ヒトでのニッチ依存性は検証されていない。", "ID3を誘導する肝細胞側の分子経路や、どのBMPが生体で寄与するかは未決定。", "病態（MASLD等）でニッチがどう改変されKC機能が変質するかは本論文の射程外。"],
    "glossary": [{"term": "ID3", "full": "inhibitor of DNA binding 3", "desc": "肝細胞が供給するKC同一性誘導因子。流入単球のKC化に必要"}, {"term": "DLL4", "full": "delta-like canonical Notch ligand 4", "desc": "LSEC/HSCが提示するNotchリガンド。KC同一性プログラムを誘導"}, {"term": "LXRα", "full": "liver X receptor alpha (NR1H3)", "desc": "KC成熟の鍵となる核内受容体。BMP–Notch下流でKC同一性を確立"}, {"term": "KC niche", "full": "Kupffer cell niche", "desc": "肝細胞・LSEC・HSCが構成するKC同一性維持の微小環境"}, {"term": "BMP", "full": "bone morphogenetic protein", "desc": "ニッチ細胞由来シグナル。Notchと協働しLXRα経由でKC化を促進"}],
    "struct": {"model": "in vivo(KC枯渇マウス) + in vitro共培養", "cells": ["KC", "流入単球", "肝細胞", "LSEC", "HSC"], "triggers": ["KC枯渇→単球流入", "Notch遮断(抗DLL1/DLL4)・TNF/IL-1遮断等のニッチ操作"], "steatosis": "—", "inflammation": "—", "fibrosis": "—", "readout": ["KC同一性遺伝子（ID3/LXRα）", "単球→KC転換効率", "bulk RNA-seq/マイクロアレイのプロファイル"], "ignite": "—（恒常性研究。ニッチ喪失でKC同一性が確立できない）", "params": [{"name": "ニッチシグナル→iKC成熟係数", "note": "肝細胞接触(ID3)＋LSEC/HSC(DLL4/BMP→LXRα)の有無でiKC成熟確率を決めるABMルール"}, {"name": "KC同一性マーカー閾値", "note": "ID3/LXRα発現を共培養KCの機能的成熟判定に使用"}], "todos": ["共培養iKCでID3/LXRα発現を確認しニッチ成熟を評価", "肝細胞・LSEC・HSC接触の有無でiKC表現型を比較"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m27' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：KC枯渇→単球流入→ニッチ依存的にKC同一性が再構成</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① KC枯渇</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>DT投与でKC枯渇</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>空きニッチに単球流入</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>転換を追跡</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m27)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>② RNA-seq/イメージング</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単球→KC軌跡</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>FACSで表現型</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--G)'>同一性遺伝子</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m27)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>③ ニッチ操作</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>抗TNF/抗DLL1・4</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>シグナル遮断</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--H)'>生着・KC化が低下</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m27)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>④ 共培養</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>単球＋肝細胞/LSEC</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>OP9-DL4＋BMP9</text>\n  <text x='556' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--accent)'>ID3/LXRα誘導</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Bonnardel J, T'Jonck W, Gaublomme D, …, Guilliams M, Immunity (2019)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f27' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>KCニッチ：三細胞の協調シグナルが単球をKCへ転換</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>肝細胞</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ID3 を供給</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>KC同一性の起点</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f27)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>LSEC / HSC</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>DLL4–Notch</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>→ LXRα（BMP9が増強）</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>成熟を誘導</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f27)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>流入単球→KC</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ニッチ受容</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>同一性獲得</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--C)'>成熟KCへ</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f27)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>常在KC</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>自己複製で維持</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>恒常性・寛容</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Notch遮断で単球のKC関連転写因子の獲得が低下＝KC同一性はニッチ依存</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("27", [{ic:"macrophage",cap:"流入単球→KCへ転換"}, {ic:"hepatocyte",cap:"肝細胞がID3を誘導"}, {ic:"endothelial",cap:"LSEC：DLL4/Notch"}, {ic:"stellate",cap:"HSC：BMP→LXRα"}, {ic:"mouse",cap:"KC枯渇マウス・Notch/TNF遮断"}, {ic:"omics",cap:"bulk RNA-seq・intravital/CLEMイメージング"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 27 Bonnardel 2019 Immunity: KCニッチ定義 - Clec4f-Cre×DTRによるKC枯渇+bulk RNA-seq+FACS+Ccr2/Tnf欠損+単球共培養 */
/* 2026-10修正：未定義キー（invivo/ipsc）を除去。27/32は条件付きKO・BMP9 KOに対応して crispr を追加 */
LP.methods("27", ["mouse","crispr","invitro","rnaseq","facs","imaging","qpcr","elisa","drug"]);

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
    +`<g id="failTag27" class="fade">`+GLYPH.tag("fail27",600,380,"Notch遮断→KC化低下","var(--B)",140)+`</g>`,
  build(K){
    return [
      {color:"E",t:2400,cap:"健常な肝類洞。肝細胞・LSEC・HSCが「KCニッチ」を構成する微小環境を形成している。",run(){}},
      {color:"D",t:3800,cap:"① 肝細胞がID3を供給し、KC同一性の転写起点を提供する。LSECはDLL4–Notchを介してLXRαを誘導し、HSC由来と推定されるBMP9がこれを増強してニッチを完成させる。",run(){
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
      {color:"B",t:3000,cap:"③ Notch遮断などでニッチシグナルが欠けると、単球のKC関連転写因子（LXRα等）の獲得が低下する。培養でニッチを模倣することがiKC品質の鍵と考えられる。",run(){
        K.show(["failTag27"]);
        K.pulse("fail27");
        K.T(()=>K.unpulse("fail27"),2000);
      }},
    ];
  }
});
