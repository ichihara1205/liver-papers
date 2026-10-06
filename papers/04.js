/* ============================================================
   №04 · Nature Communications 2024 · Qi L, Groeger M, Sharma A, Goswami I, Chen E, Zhong F, Ram A, Healy K…
   iPSCベース統合型MPSで脂肪組織炎症がMASLD発症の主ドライバーと実証
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"04",
    added:"2026-05-30",
    title:"iPSCベース統合型MPSで脂肪組織炎症がMASLD発症の主ドライバーと実証",
    authors:"Qi L, Groeger M, Sharma A, Goswami I, Chen E, Zhong F, Ram A, Healy K, Hsiao EC, Willenbring H, Stahl A",
    journal:"Nature Communications",
    year:2024,
    vol:"15:7991",
    doi:"10.1038/s41467-024-52258-w",
    url:"https://www.nature.com/articles/s41467-024-52258-w",
    primary:"A",
    tags:["A","C","D","H","I"],
    approach:"iPSC-MPS（脂肪・肝・マクロファージ）",
    struct:{
      model:"in vitro", cells:["iPSC肝細胞","iPSCマクロファージ","iPSC脂肪細胞"], triggers:["M1マクロファージ炎症","TNFα＋遊離脂肪酸"],
      steatosis:"○", inflammation:"○", fibrosis:"×", readout:["TNFα","遊離脂肪酸","HGP/インスリン抵抗性","肝脂質蓄積"],
      ignite:"WAT量増大だけでは不十分、M1炎症（TNFα＋FFA）が病態ドライバー。線維化はHSC/LSEC欠如で未達。",
      params:[{name:"M1マクロファージ比 → TNFα分泌 → 肝脂質蓄積",note:"iADIPO-iHEP比 最大30:1"},{name:"培地 TNFα/FFA/アディポネクチン濃度",note:"クロストーク指標"}],
      todos:["培地のTNFα/FFA/アディポネクチン定量プロトコルを流用","4細胞でfibrosis達成を本論文の正統な発展に位置づけ"]
    },
    figure:"<svg viewBox='0 0 640 250' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar04' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><g font-size='13' fill='var(--ink)'><rect x='20' y='24' width='170' height='52' rx='7' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='105' y='46' text-anchor='middle'>iADIPO</text><text x='105' y='64' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>脂肪量↑ (WAT)</text><rect x='330' y='24' width='200' height='52' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='430' y='46' text-anchor='middle'>M1-iMAC</text><text x='430' y='64' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>脂肪組織炎症</text><rect x='20' y='162' width='170' height='48' rx='7' fill='var(--paper-2)' stroke='var(--line)' stroke-dasharray='4 3'/><text x='105' y='184' text-anchor='middle' fill='var(--ink-soft)'>HIR 誘導されず</text><text x='105' y='201' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>量だけでは不十分</text><rect x='290' y='150' width='270' height='60' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='425' y='176' text-anchor='middle'>iHEP 脂質蓄積</text><text x='425' y='196' text-anchor='middle' font-size='12' fill='var(--B)'>→ インスリン抵抗性 / MASLD</text><line x1='105' y1='76' x2='105' y2='160' stroke='var(--ink-soft)' stroke-dasharray='4 3' marker-end='url(#ar04)'/><path d='M430,76 C430,118 425,126 425,148' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#ar04)'/><text x='452' y='120' font-size='11' fill='var(--ink-soft)'>TNFα + 遊離脂肪酸</text></g><text x='20' y='238' font-size='11.5' fill='var(--A)'>セマグルチド → iADIPO の GLP1R → 抗炎症・肝保護（肝への直接作用は軽微）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 230' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m04' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><text x='20' y='22' font-size='12' fill='var(--ink-soft)'>同一iPSC株 → 3細胞へ分化 → 相互接続MPS（共通循環培地, ~48h）</text><g font-size='12' fill='var(--ink)'><rect x='24' y='44' width='80' height='40' rx='20' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='64' y='69' text-anchor='middle' font-size='11'>iPSC</text><rect x='150' y='40' width='118' height='48' rx='8' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='209' y='62' text-anchor='middle'>iADIPO槽</text><text x='209' y='79' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>脂肪比 最大30:1</text><rect x='150' y='100' width='118' height='48' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='209' y='128' text-anchor='middle'>iHEP槽</text><rect x='150' y='160' width='118' height='48' rx='8' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='209' y='182' text-anchor='middle'>iMAC槽</text><text x='209' y='198' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>±M1分極</text><rect x='320' y='70' width='150' height='108' rx='8' fill='var(--paper-2)' stroke='var(--line)'/><text x='395' y='118' text-anchor='middle' font-size='12'>共通循環培地</text><text x='395' y='136' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>細胞間クロストーク</text><path d='M104,64 C120,64 130,64 148,64' fill='none' stroke='var(--accent)' marker-end='url(#m04)'/><line x1='268' y1='64' x2='318' y2='100' stroke='var(--line)'/><line x1='268' y1='124' x2='318' y2='124' stroke='var(--line)'/><line x1='268' y1='184' x2='318' y2='148' stroke='var(--line)'/><rect x='500' y='70' width='124' height='50' rx='8' fill='var(--paper)' stroke='var(--A)' stroke-width='1.5'/><text x='562' y='91' text-anchor='middle' font-size='11'>±セマグルチド</text><text x='562' y='108' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>薬剤介入</text><rect x='500' y='132' width='124' height='50' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='562' y='153' text-anchor='middle' font-size='11'>読み出し</text><text x='562' y='169' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>HGP/脂質/サイトカイン</text><path d='M470,124 C484,124 488,95 498,95' fill='none' stroke='var(--accent)' marker-end='url(#m04)'/><path d='M470,124 C484,124 488,155 498,155' fill='none' stroke='var(--accent)' marker-end='url(#m04)'/></g></svg>",
    abstract_ja:"本研究は、同一のヒトiPS細胞株から分化させたiADIPO・iHEP・iMACを相互接続型MPSで共培養した。その結果、WAT量の増大だけでは生理的範囲でHIRは誘導されず、むしろM1型iMACによる脂肪組織炎症こそがiHEPの脂質蓄積とMPS全体のインスリン抵抗性を惹起することを実証した。一方でセマグルチドは、肝細胞への直接作用は軽微で、主に脂肪細胞のGLP1Rを介して抗炎症・肝保護効果を発揮した。以上から本系は、MASLD発症の細胞間クロストーク解析や創薬スクリーニングを動物実験の代替として担う基盤として有望である。",
    background:"WATへのM1マクロファージ浸潤（炎症）がHIRを招くとされてきたが、WAT量の増大と炎症のどちらが主ドライバーなのかは、ヒト系では切り分けられていなかった。同様に、GLP-1受容体作動薬の肝保護機序が脂肪を介するのか肝への直接作用によるのかも、未解決のままであった。",
    achievements:[
      "等遺伝子iPSC由来iADIPO・iHEP・iMACを相互接続した3臓器MPSを初構築。",
      "WAT量の増大のみ（iADIPO-iHEP比最大30:1）ではHIR未誘導。炎症（M1-iMAC）が決定的ドライバーと実証。",
      "M1-iMAC由来TNFα＋遊離脂肪酸がiHEP脂質蓄積・HIRをドライブする機序を定量的に解明。",
      "セマグルチドはiADIPO特異的GLP1R作動で肝保護 → セマグルチドの肝保護がアディポサイト依存であることを示した。"
    ],
    limitations:[
      "HSC・LSECを含まず線維化再現なし。",
      "iADIPOは皮下脂肪的特性優位。内臓脂肪特性は不完全。",
      "培養期間が短く（~48h）慢性進行の長期動態は扱えない。",
      "PDMSによる疎水性薬物吸着の制限（一部検証済み）。"
    ],
    connection:[
      "KC（≒M1-iMAC）導入の正当化：炎症性マクロファージが肝MASLD発症を駆動することの定量的根拠。LPS等セカンドヒット戦略の機序的支柱。",
      "MPS培地中のTNFα・遊離脂肪酸・アディポネクチン定量は肝オープンオルガノイドの培地解析プロトコルの雛形になる。",
      "HSC・LSECを欠く点が自系との差別化軸。4細胞共培養でfibrosis達成すれば本論文の正統な発展として位置づけ可。",
      "#02（KC-NCF1→フェロトーシス）+ #03（ATF4→HSC活性化）と合わせKC→炎症→HSC→線維化の多段階カスケードの論拠が固まる。"
    ],
    glossary:[
      {term:"iADIPO",full:"iPSC-derived adipocyte",desc:"iPSC由来白色脂肪細胞"},
      {term:"iHEP",full:"iPSC-derived hepatocyte",desc:"iPSC由来肝細胞"},
      {term:"iMAC",full:"iPSC-derived macrophage",desc:"iPSC由来マクロファージ（M0/M1）"},
      {term:"MPS",full:"Microphysiological System",desc:"ミクロフィジオロジカルシステム（臓器チップ総称）"},
      {term:"HIR",full:"Hepatic Insulin Resistance",desc:"肝インスリン抵抗性"},
      {term:"WAT",full:"White Adipose Tissue",desc:"白色脂肪組織"},
      {term:"HGP",full:"Hepatic Glucose Production",desc:"肝糖産生；HIRの機能リードアウト"},
      {term:"GLP1R",full:"Glucagon-Like Peptide-1 Receptor",desc:"GLP-1受容体；セマグルチドの標的"},
      {term:"PDMS",full:"Polydimethylsiloxane",desc:"MPSデバイス材料；疎水性薬物吸着注意"},
      {term:"PCK1",full:"Phosphoenolpyruvate Carboxykinase 1",desc:"糖新生律速酵素；HIRマーカー"},
      {term:"ADIPOQ",full:"Adiponectin (gene)",desc:"インスリン感受性アディポカイン"},
      {term:"TNF",full:"Tumor Necrosis Factor",desc:"炎症性サイトカイン；M1-iMACが大量分泌"},
      {term:"PPARA",full:"Peroxisome Proliferator-Activated Receptor Alpha",desc:"肝β酸化促進核内受容体"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("04", [{ic:"chip",cap:"iPSC-MPS"},{ic:"adipocyte",cap:"iADIPO"},{ic:"hepatocyte",cap:"iHEP"},{ic:"macrophage",cap:"M1-iMAC"},{ic:"drug",cap:"セマグルチド"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 04 Qi Nat Commun 2024: iPSC-MPS(脂肪+肝+MΦ)+scRNA+FACS+薬理(セマグルチド)+ELISA+ライブイメージング */
LP.methods("04", ["invitro","scrna","facs","drug","elisa","qpcr","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №04 iPSC統合MPS：脂肪組織炎症がMASLDドライバー ===== */
LP.cinema("04", {
  svg:GLYPH.bg("#eef1f4")+`<defs>${GLYPH.defsCommon}${GLYPH.lip("04")}${GLYPH.arrow("04","#3a9a5a")}${GLYPH.arrow("04r","var(--H)")}</defs>`+GLYPH.title("統合MPS：脂肪細胞由来FFA ＋ M1MΦ由来TNFα が共にMASLDを駆動")
    +`<rect x="24" y="60" width="250" height="300" rx="16" fill="#fff" stroke="#caa53a" stroke-width="1.6"/><text x="149" y="84" text-anchor="middle" font-size="11" fill="#b88a2a">iADIPO-MPS（脂肪組織）</text>`
    +GLYPH.adipo(95,150,30)+GLYPH.adipo(170,185,34)+GLYPH.adipo(105,240,28)+GLYPH.adipo(185,265,26)
    +GLYPH.mac("m1",210,140,"M1 MΦ","#9c4f6c")
    +`<rect x="446" y="60" width="250" height="300" rx="16" fill="#fff" stroke="var(--accent)" stroke-width="1.6"/><text x="571" y="84" text-anchor="middle" font-size="11" fill="var(--accent)">iHEP-MPS（肝）</text>`
    +GLYPH.hexHep("hep",560,210,"iPSC肝細胞")
    +`<line x1="276" y1="215" x2="444" y2="215" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/><text x="360" y="206" text-anchor="middle" font-size="9.5" fill="var(--ink-soft)">血流路</text>`,
  dwell:3200,
  build(K){
    const dp=[[545,195],[575,205],[560,225],[590,215],[555,180]];
    const ffaSrc=[[95,150],[170,185],[105,240],[185,265]];
    return [
      {color:"E",t:2200,cap:"iPSC由来の脂肪組織MPSと肝MPSを血流路で連結した統合系の定常状態。",run(){}},
      {color:"D",t:3400,cap:"① 脂肪細胞の脂肪分解（lipolysis）で遊離脂肪酸（FFA, 緑）が放出され、血流路を通って肝細胞に取り込まれ脂肪滴になる。",run(){
        ffaSrc.forEach((p,i)=>K.T(()=>K.flow(p[0],p[1],360,215,"#3a9a5a",{n:2,dur:1.0,loop:1}),i*180));
        K.T(()=>K.flow(360,215,560,210,"#3a9a5a",{loop:3}),900);
        K.T(()=>addDrops(K,"hepDrops",dp,"lip04"),1600);
      }},
      {color:"C",t:3800,cap:"② 脂肪組織のM1マクロファージはTNFα（赤）を放出する。脂肪細胞由来のFFA（緑）とM1由来のTNFα（赤）が“両方”そろうことがMASLD発症の主ドライバー。WAT量増大だけでは不十分。※本系はHSC/LSEC欠如のため線維化は未達。",run(){
        K.attr("m1Body","fill","#9c4f6c"); K.pulse("m1");
        K.flow(218,150,560,205,"var(--H)",{dur:1.4,loop:3,r:4});
        ffaSrc.forEach((p,i)=>K.T(()=>K.flow(p[0],p[1],560,215,"#3a9a5a",{n:1,dur:1.3,loop:1}),i*200));
      }},
    ];
  }
});
