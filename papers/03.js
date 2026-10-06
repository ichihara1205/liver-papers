/* ============================================================
   №03 · Nature Communications 2025 · Yang L-X, Qi C, … Li W, Feng Y-X.
   ATF4の非定型エンハンサープログラムがHSCを活性化し肝線維化を駆動
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"03",
    added:"2026-05-29",
    title:"ATF4の非定型エンハンサープログラムがHSCを活性化し肝線維化を駆動",
    authors:"Yang L-X, Qi C, … Li W, Feng Y-X.",
    journal:"Nature Communications",
    year:2025,
    vol:"16, 524",
    doi:"10.1038/s41467-024-55738-1",
    url:"https://www.nature.com/articles/s41467-024-55738-1",
    primary:"B", tags:["G","H"],
    approach:"in vivo (mouse) ＋ ヒトデータ ＋ 低分子阻害剤",
    struct:{
      model:"mixed", cells:["HSC"], triggers:["ATF4（非定型エンハンサープログラム）"],
      steatosis:"—", inflammation:"—", fibrosis:"○", readout:["HSC活性化転写プログラム","COL1A1","αSMA"],
      ignite:"ATF4がaHSCの内部転写スイッチを担う。低分子阻害剤で活性化を抑制（線維化ネガコンに使える）。",
      params:[{name:"ATF4活性 → HSC転写スイッチ（内部状態）",note:"#06の状態遷移と二層化"}],
      todos:["ATF4阻害剤を線維化ネガコンに","HSC内部スイッチ(ATF4)＋外部ダイナミクス(#06)の二層ABM設計"]
    },
    figure:"<svg viewBox='0 0 640 200' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar03' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><text x='320' y='28' text-anchor='middle' font-size='11.5' fill='var(--ink-soft)'>TGFβ が ATF4 を再構成（ERストレス非依存の非定型プログラム）</text><g font-size='12.5' fill='var(--ink)'><rect x='14' y='80' width='86' height='44' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='57' y='107' text-anchor='middle'>TGFβ</text><rect x='150' y='80' width='104' height='44' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='202' y='107' text-anchor='middle'>ATF4</text><rect x='304' y='72' width='170' height='60' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='389' y='96' text-anchor='middle' font-size='12'>非定型エンハンサー</text><text x='389' y='115' text-anchor='middle' font-size='11.5' fill='var(--ink-soft)'>→ EMT/線維化遺伝子</text><rect x='524' y='80' width='102' height='44' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='575' y='100' text-anchor='middle' font-size='12'>HSC活性化</text><text x='575' y='116' text-anchor='middle' font-size='11.5' fill='var(--B)'>→ 線維化</text><line x1='100' y1='102' x2='148' y2='102' stroke='var(--ink-soft)' marker-end='url(#ar03)'/><line x1='254' y1='102' x2='302' y2='102' stroke='var(--ink-soft)' marker-end='url(#ar03)'/><line x1='474' y1='102' x2='522' y2='102' stroke='var(--ink-soft)' marker-end='url(#ar03)'/><line x1='202' y1='158' x2='202' y2='126' stroke='var(--C)' stroke-width='2'/><line x1='184' y1='150' x2='220' y2='150' stroke='var(--C)' stroke-width='2.5'/><text x='202' y='176' text-anchor='middle' font-size='11' fill='var(--C)'>低分子翻訳阻害剤 ⊣</text></g></svg>",
    method_figure:"<svg viewBox='0 0 640 230' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m03' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><g font-size='12' fill='var(--ink)'><rect x='18' y='34' width='180' height='62' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='108' y='58' text-anchor='middle' font-size='12.5'>HSC特異的 Atf4</text><text x='108' y='76' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>条件付きKO マウス</text><text x='108' y='90' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>(Cre-loxP)</text><rect x='18' y='126' width='180' height='56' rx='8' fill='var(--paper-2)' stroke='var(--line)'/><text x='108' y='150' text-anchor='middle' font-size='12'>対照 (flox)</text><text x='108' y='168' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>同腹仔比較</text><rect x='248' y='80' width='150' height='56' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='323' y='104' text-anchor='middle' font-size='12'>肝線維化を誘導</text><text x='323' y='121' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>線維化モデル</text><rect x='440' y='34' width='184' height='56' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='532' y='56' text-anchor='middle' font-size='11.5'>線維化・αSMA・</text><text x='532' y='73' text-anchor='middle' font-size='11.5'>COL1A1 定量</text><rect x='440' y='104' width='184' height='50' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='532' y='125' text-anchor='middle' font-size='11'>±ATF4翻訳阻害剤</text><text x='532' y='141' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>低分子で治療試験</text><rect x='440' y='168' width='184' height='46' rx='8' fill='var(--paper)' stroke='var(--G)' stroke-width='1.5'/><text x='532' y='189' text-anchor='middle' font-size='11'>ヒト肝データ</text><text x='532' y='205' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>ATF4発現↔線維化 相関</text><path d='M198,72 C220,72 226,104 246,106' fill='none' stroke='var(--accent)' marker-end='url(#m03)'/><path d='M198,150 C220,150 226,116 246,112' fill='none' stroke='var(--accent)' marker-end='url(#m03)'/><path d='M398,100 C418,100 420,66 438,64' fill='none' stroke='var(--accent)' marker-end='url(#m03)'/><path d='M398,112 C418,112 420,126 438,128' fill='none' stroke='var(--accent)' marker-end='url(#m03)'/></g></svg>",
    abstract:"肝線維化は肝硬変等へ進行する難治性疾患で有効な標的治療がない。本研究はERストレス応答のマスター転写因子ATF4が、HSCにおいてストレス応答とは独立したエピジェネティックプログラムを介して線維化を促進すると同定。ATF4は通常UPR遺伝子を制御するが、線維化条件下ではEMT関連遺伝子の転写を活性化する。HSC特異的ATF4欠損はin vivoで線維化を抑制。機序として、TGFβがATF4を再構成しプロ線維化EMT遺伝子の転写活性化のための固有エンハンサープログラムを編成する。ヒトでもHSC ATF4発現と線維化進行が強く相関。ATF4翻訳を標的とする低分子阻害剤が線維化を有効に軽減した。",
    abstract_ja:"肝線維化は有効な治療がない難治性疾患であり、その中心にはHSCの活性化がある。本研究は、ERストレス応答の中心転写因子であるATF4が、HSCにおいてストレス応答とは独立したエピジェネティックプログラムを駆動して線維化を進めることを示した。ATF4は通常UPR遺伝子を制御するが、線維化環境ではむしろEMT遺伝子群を活性化しており、実際にHSC特異的にATF4を欠損させると線維化が抑制された。さらにTGFβがATF4を再プログラムし、プロ線維化的なEMT遺伝子のための独自のエンハンサーを組み立てることが分かった。ヒトでもHSCのATF4発現は線維化の進行と相関し、ATF4の翻訳を阻害する低分子が線維化を軽減した。",
    background:"線維化の中心はHSCの活性化、すなわち静止期から筋線維芽細胞へと変化してαSMAやI型コラーゲンを産生する過程にある。しかし、TGFβの下流でHSCのゲノムワイドな転写リプログラミングを統御する因子は不明だった。ATF4はこれまでER/統合的ストレス応答の文脈で語られてきたものの、ストレス非依存の線維化ドライバーとしての役割は知られておらず、それを標的とした治療も存在しなかった。",
    achievements:[
      "ATF4をHSC活性化・線維化の新規ドライバーとして同定(ERストレス/UPRとは独立の機能)。",
      "TGFβがATF4を再構成し、プロ線維化EMT遺伝子を駆動する固有のエンハンサープログラムを編成することをエピゲノム的に解明。",
      "HSC特異的ATF4欠損でCCl4モデルのin vivo線維化（間葉系・線維化遺伝子の誘導）が抑制されることを実証。",
      "ヒトデータでHSC ATF4発現と線維化進行の強い相関を確認。",
      "ATF4翻訳を標的とする低分子阻害剤で線維化を軽減し創薬標的性を提示。"
    ],
    limitations:[
      "主にマウスモデル＋ヒトは相関解析中心で、ヒトでの因果・治療効果は未確立。",
      "ATF4は全身で必須のストレス応答因子であり、全身投与時の安全域・HSC特異的デリバリーは別途検討要。",
      "「ストレス非依存」とするが、生理的線維化での代謝/ストレス環境との切り分けはin vitro依存が大きい。",
      "間葉系であるHSCでEMT遺伝子プログラムを論じる枠組みの解釈には注意。"
    ],
    connection:[
      "線維化点火の転写スイッチ候補：TGFβ→ATF4→EMT様エンハンサー群というHSC内部の点火スイッチを提供。KCセカンドヒット(#02)由来TGFβがHSCのATF4経由で線維化を起動する上流-下流仮説を立てられる。",
      "操作ノブ＆リードアウト：ATF4 KD/低分子翻訳阻害を共培養に導入すれば「線維化を消す」ネガコンに。ATF4標的EMT/線維化遺伝子(COL1A1, αSMA等)を線維化リードアウトに使える。",
      "酸素・代謝との接点：ATF4はISR/ER・ミトコンドリアストレスのハブ。好気的代謝を回す本系で酸素可用性がATF4活性とHSC運命にどう効くか問える。",
      "ABM：「TGFβ濃度→HSCのATF4活性化しきい値→EMT/コラーゲン遺伝子ON→筋線維芽細胞化確率」をルール化。#02と組みKC→TGFβ→HSC-ATF4→線維化を連結。",
      "既収録との接続：#01(EC–HSCクロストーク)・#02(KC機構)が「HSCをどう刺激するか(上流)」を示すのに対し、本論文は「刺激後HSCが内部でどう線維化プログラムを起動するか(下流転写機構)」を補完。"
    ],
    glossary:[
      {term:"ATF4", full:"activating transcription factor 4", desc:"ER/統合的ストレス応答の中心転写因子。線維化では非定型にEMT遺伝子を活性化"},
      {term:"EMT", full:"epithelial-mesenchymal transition", desc:"上皮間葉転換。ATF4が線維化条件下で関連遺伝子群を駆動"},
      {term:"ER stress", full:"endoplasmic reticulum stress", desc:"小胞体ストレス。UPRを誘導"},
      {term:"UPR", full:"unfolded protein response", desc:"不全タンパク応答。ATF4の本来の制御対象"},
      {term:"ISR", full:"integrated stress response", desc:"統合的ストレス応答。ATF4がハブ"},
      {term:"TGFβ", full:"transforming growth factor beta", desc:"HSC活性化の保存ドライバー。ATF4を再構成"},
      {term:"αSMA", full:"alpha-smooth muscle actin (ACTA2)", desc:"活性化HSC/筋線維芽細胞マーカー・線維化リードアウト"},
      {term:"HSC", full:"hepatic stellate cell", desc:"肝星細胞。活性化→筋線維芽細胞化で線維化の中心"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("03", [{ic:"mouse",cap:"ATF4-KOマウス"},{ic:"stellate",cap:"HSC"},{ic:"drug",cap:"翻訳阻害剤"},{ic:"human",cap:"ヒト相関"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 03 Yang&Feng Nat Commun 2025: Lrat-Cre HSC特異的Atf4-KOマウス(CCl4)+LX-2/HMLE(RNA-seq, ATF4/H3K27ac ChIP-seq)+ISRIB(CCl4/BDL/TAA)+ヒトscRNA-seq再解析・IHC */
LP.methods("03", ["mouse","human","invitro","crispr","rnaseq","scrna","chipseq","qpcr","wb","drug","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №03 ATF4(転写因子)の非定型エンハンサーがHSC活性化 ===== */
LP.cinema("03", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("03","var(--B)")}</defs>`+GLYPH.title("転写因子ATF4が核内の非定型エンハンサープログラムを起動しHSCを活性化")
    +`<ellipse cx="300" cy="235" rx="150" ry="115" fill="#f3ece2" stroke="var(--line)" stroke-width="1.5"/><text x="300" y="135" text-anchor="middle" font-size="10" fill="var(--ink-soft)">肝星細胞（細胞質）</text>`
    +GLYPH.stellate("hsc",300,235,"")
    +GLYPH.nucleus("nuc",300,235,52,40,"核")
    +`<g id="enh" class="fade"><path d="M268,250 q8,-10 16,0 q8,10 16,0 q8,-10 16,0" fill="none" stroke="var(--B)" stroke-width="2"/><text x="300" y="278" text-anchor="middle" font-size="8.5" fill="var(--B)">非定型エンハンサー</text></g>`
    +GLYPH.tf("atf4a",120,120,"ATF4","var(--B)",true)+GLYPH.tf("atf4b",150,150,"","var(--B)",true)
    +GLYPH.layer("collagen")+GLYPH.pill("drug",580,110,"ATF4阻害剤",96),
  build(K){
    return [
      {color:"E",t:2400,cap:"静止期HSC（qHSC）。転写因子ATF4は、TGFβなどの線維化刺激に応じて誘導される。",run(){K.show(["atf4a","atf4b"]);}},
      {color:"B",t:4000,cap:"① TGFβ刺激下でATF4がゲノム上の特定のエンハンサー領域に結合し、非定型エンハンサープログラムを起動。これが活性化HSCの内部スイッチとなり qHSC→aHSC へ転換する。",run(){
        K.flow(120,125,300,235,"var(--B)",{dur:1.2,loop:2});K.flow(150,155,300,235,"var(--B)",{dur:1.2,loop:2});
        K.attr("atf4a","opacity","0.2");K.attr("atf4b","opacity","0.2");
        K.T(()=>{K.show(["enh"]);K.pulse("enh");},1300);
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化");},2200);
      }},
      {color:"B",t:3000,cap:"② aHSCがECM・コラーゲンを過剰産生し線維化が進行。",run(){K.draw("collagen",GLYPH.collagenAt(300,360),{len:170});}},
      {color:"H",t:3200,cap:"③ ATF4を標的にした低分子阻害剤が核内プログラムを止め、HSC活性化＝線維化を抑制（線維化のネガコンに使える）。",run(){
        K.show(["drug"]); K.T(()=>{K.strike(580,110,300,235);K.T(()=>{K.markX(300,235);K.attr("collagen","opacity","0.28");K.attr("hscShape","opacity","0.5");K.attr("enh","opacity","0.3");},720);},700);
      }},
    ];
  }
});
