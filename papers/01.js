/* ============================================================
   №01 · Nature Genetics 2025 · Li Z, Luo G, … Bai F, Chai J.
   ヒトMASLDの空間マルチオミクスatlas
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"01",
    added:"2026-05-29",
    title:"ヒトMASLDの空間マルチオミクスatlas",
    authors:"Li Z, Luo G, … Bai F, Chai J.",
    journal:"Nature Genetics",
    year:2025,
    vol:"57, 3112–3125",
    doi:"10.1038/s41588-025-02407-8",
    url:"https://www.nature.com/articles/s41588-025-02407-8",
    primary:"G", tags:["C","D","B","E","H"],
    approach:"ヒト組織(61例) · single-cell＋空間 · in vitro検証",
    struct:{
      model:"ヒト組織", cells:["LAM(マクロファージ)","中心静脈EC","HSC","肝細胞"], triggers:["RSPO3–LGR6（中心静脈EC–HSC）"],
      steatosis:"○", inflammation:"○", fibrosis:"○", readout:["COL1A1/2","LOXL1","THY1","RSPO3","LGR6"],
      ignite:"中心静脈EC–HSCのRSPO3–LGR6が線維化巣のドライバー候補（計算予測・未検証）。線維化はpericentral優位。",
      params:[{name:"細胞種別発現プログラム → リガンド–受容体相互作用",note:"確率ルールの参照データ"}],
      todos:["線維化マーカーCOL1A1/LOXL1/THY1/RSPO3/LGR6を採用","中心静脈ニッチをリガンド添加で疑似再現","LAMのFAO軸を好気代謝コンセプトに接続"]
    },
    figure:"<svg viewBox='0 0 640 240' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar01' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><g font-size='12.5' fill='var(--ink)'><rect x='10' y='86' width='120' height='62' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='70' y='112' text-anchor='middle'>ヒトMASLD肝</text><text x='70' y='130' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>61例 (対照/MASL/MASH)</text><rect x='200' y='18' width='190' height='40' rx='7' fill='var(--paper-2)' stroke='var(--line)'/><text x='295' y='43' text-anchor='middle' font-size='12'>single-cell RNA-seq</text><rect x='200' y='96' width='190' height='40' rx='7' fill='var(--paper-2)' stroke='var(--line)'/><text x='295' y='121' text-anchor='middle' font-size='12'>空間トランスクリプトーム</text><rect x='200' y='174' width='190' height='40' rx='7' fill='var(--paper-2)' stroke='var(--line)'/><text x='295' y='199' text-anchor='middle' font-size='12'>空間メタボローム</text><rect x='430' y='14' width='200' height='62' rx='7' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='530' y='38' text-anchor='middle' font-size='12'>LAM: MITF→FAO</text><text x='530' y='57' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>HGF分泌で肝保護</text><rect x='430' y='90' width='200' height='62' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='530' y='114' text-anchor='middle' font-size='12'>中心静脈EC–HSC</text><text x='530' y='133' text-anchor='middle' font-size='11' fill='var(--B)'>RSPO3–LGR6 線維化</text><rect x='430' y='166' width='200' height='58' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='530' y='190' text-anchor='middle' font-size='12'>MASLD特異的</text><text x='530' y='208' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>リン脂質蓄積 (lp-PLA2)</text><line x1='130' y1='104' x2='198' y2='40' stroke='var(--ink-soft)' marker-end='url(#ar01)'/><line x1='130' y1='117' x2='198' y2='116' stroke='var(--ink-soft)' marker-end='url(#ar01)'/><line x1='130' y1='130' x2='198' y2='192' stroke='var(--ink-soft)' marker-end='url(#ar01)'/><line x1='390' y1='40' x2='428' y2='45' stroke='var(--ink-soft)' marker-end='url(#ar01)'/><line x1='390' y1='116' x2='428' y2='119' stroke='var(--ink-soft)' marker-end='url(#ar01)'/><line x1='390' y1='194' x2='428' y2='192' stroke='var(--ink-soft)' marker-end='url(#ar01)'/></g></svg>",
    method_figure:"<svg viewBox='0 0 640 210' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m01' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><g font-size='12' fill='var(--ink)'><rect x='16' y='66' width='150' height='80' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='91' y='94' text-anchor='middle' font-size='12.5'>ヒト肝生検 61例</text><text x='91' y='114' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>対照10 / MASL17</text><text x='91' y='130' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>/ MASH34</text><rect x='226' y='14' width='160' height='44' rx='8' fill='var(--paper-2)' stroke='var(--G)'/><text x='306' y='40' text-anchor='middle' font-size='11.5'>scRNA-seq (54万細胞)</text><rect x='226' y='78' width='160' height='44' rx='8' fill='var(--paper-2)' stroke='var(--G)'/><text x='306' y='104' text-anchor='middle' font-size='11.5'>空間TX (Visium)</text><rect x='226' y='142' width='160' height='44' rx='8' fill='var(--paper-2)' stroke='var(--G)'/><text x='306' y='168' text-anchor='middle' font-size='11.5'>空間メタボローム</text><rect x='446' y='52' width='178' height='44' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='535' y='72' text-anchor='middle' font-size='11'>統合解析・空間マップ</text><text x='535' y='88' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>zonation/細胞間相互作用</text><rect x='446' y='112' width='178' height='48' rx='8' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='535' y='132' text-anchor='middle' font-size='11'>細胞株でin vitro検証</text><text x='535' y='149' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>MITF OE/KD・OCR</text><path d='M166,96 C190,96 200,36 224,36' fill='none' stroke='var(--accent)' marker-end='url(#m01)'/><path d='M166,104 C190,104 200,100 224,100' fill='none' stroke='var(--accent)' marker-end='url(#m01)'/><path d='M166,116 C190,116 200,164 224,164' fill='none' stroke='var(--accent)' marker-end='url(#m01)'/><path d='M386,100 C414,100 420,74 444,74' fill='none' stroke='var(--accent)' marker-end='url(#m01)'/><path d='M535,96 L535,110' stroke='var(--accent)' marker-end='url(#m01)'/></g></svg>",
    abstract:"ヒトMASLDは世界最多の慢性肝疾患。対照10・MASL 17・MASH 34の計61症例から単一細胞＋空間トランスクリプトーム＋空間メタボロームの統合マップを構築。脂質関連マクロファージ(LAM)の脂質処理能を制御する鍵転写因子としてMITFを同定し、LAMがHGF分泌を介して肝保護的に働くことを示した。空間解析で進行MASHに富む線維化遺伝子プログラムを抽出し、線維化巣での中心静脈内皮細胞–HSCのプロ線維化クロストークを示唆。空間メタボロームではMASLD特異的リン脂質蓄積を捉え、LAMのlp-PLA2(PLA2G7)を介したリン脂質代謝との関連を提示した。",
    abstract_ja:"MASLDは世界的に最も主要な慢性肝疾患でありながら、その病態を空間的に捉えた地図は乏しかった。そこで本研究は、対照10・MASL 17・MASH 34の計61のヒト肝を用いて、単一細胞・空間トランスクリプトーム・空間メタボロームを同一組織上で統合した地図を作製した。まずLAMの脂質処理能を制御する鍵因子としてMITFを同定し、さらにLAMがHGF分泌を介して肝保護的に働くことを示した。加えて空間解析により、進行MASHで濃縮する線維化関連の遺伝子プログラムを描き出し、その線維化領域では中心静脈内皮細胞とHSCがプロ線維化的にクロストークしていることを示唆した。最後に空間メタボロームがMASLD特異的なリン脂質蓄積を捉え、これがLAMのlp-PLA2を介したリン脂質代謝と関連する可能性を示した。",
    background:"MASLは炎症と線維化を伴うMASHへと進行し、やがて肝硬変や肝癌に至る。これまでscRNA-seqによって非実質細胞の不均一性は解像されてきたものの、どの細胞がどこに分布するかという空間情報が欠落していた。一方で肝は門脈から中心静脈にかけての酸素・栄養勾配(zonation)に沿って機能が分かれるため、病態もまた空間的文脈のなかで捉える必要がある。しかし、トランスクリプトームとメタボロームを同一組織上で統合して解析する基盤は、まだ整備されていなかった。",
    achievements:[
      "54万細胞・約4.8万Visiumスポット・約84万MSデータ点の大規模ヒト空間マルチオミクスatlas(Web公開)。",
      "MITFをLAM特異的マスター転写因子と同定→PGC1α–PPARγ–FAO軸でミトコンドリア機能・脂質処理能を増強(OE/KD・OCRで実証)。",
      "LAMのHGF–MET軸による肝保護的役割を提示。",
      "線維化遺伝子トピック(COL1A1/COL1A2,LOXL1等)を空間抽出し、進行MASH(F3–4)で中心静脈EC↔HSCのRSPO3–LGR6クロストークを線維化巣の候補経路として計算予測。",
      "MASLD特異的リン脂質(超長鎖脂肪酸含有PE/PC/PA)蓄積と空間メタボロームモジュールとLAM特異的遺伝子（PLA2G7）トピックの空間的対応を提示。"
    ],
    limitations:[
      "性別の偏り（scRNA-seqコホート）：対照が全例女性、MASLD群は男性優位→性差の影響を排除できない。",
      "空間メタボローム×トランスクリプトーム統合は隣接切片の高い類似性と手動ランドマークが必要で全データには未適用。",
      "RSPO3–LGR6軸は計算予測（CellPhoneDB・空間解析）のみで実験的検証が未実施、LAM機構（MITF・HGF）もTHP-1・HepG2など細胞株での検証にとどまり、生体内因果は未確立。"
    ],
    connection:[
      "酸化的代謝という主題が直結：LAMのMITF–PGC1α–PPARγ–FAO軸＝MΦの酸化的リン酸化の話で、酸素透過膜で好気的代謝を回す肝オープンオルガノイドのコンセプトと響き合う。",
      "線維化の点火に直接ヒント：中心静脈EC–HSCのRSPO3–LGR6が線維化巣のドライバー候補（論文では計算予測で、実験検証は今後の課題）。内皮を入れる意義づけ＋線維化マーカー候補(COL1A1,LOXL1,THY1,RSPO3,LGR6)。",
      "zonation視点：線維化はpericentral優位→内皮種やリガンド添加で「中心静脈ニッチ」を疑似再現する設計余地。",
      "ABM入力：細胞種別の発現プログラムとリガンド–受容体相互作用を確率ルールに落とす際の参照データ。"
    ],
    glossary:[
      {term:"LAM", full:"lipid-associated macrophage", desc:"脂質関連マクロファージ。MITFで脂質処理能を制御"},
      {term:"MITF", full:"microphthalmia-associated transcription factor", desc:"LAMの脂質処理を司るマスター転写因子"},
      {term:"PGC1α / PPARγ", full:"PPARG coactivator 1α / PPAR gamma", desc:"ミトコンドリア生合成・FAO・脂質代謝の転写制御"},
      {term:"FAO", full:"fatty acid oxidation", desc:"脂肪酸β酸化。LAMの脂質処理能の中核"},
      {term:"HGF / MET", full:"hepatocyte growth factor / its receptor", desc:"LAMが分泌しMET経由で肝保護的に働く軸"},
      {term:"lp-PLA2 (PLA2G7)", full:"lipoprotein-associated phospholipase A2", desc:"LAMのリン脂質代謝酵素。酸化リン脂質代謝に関与"},
      {term:"RSPO3 / LGR6", full:"R-spondin 3 / LGR6 receptor", desc:"中心静脈EC–HSCのプロ線維化クロストーク軸"},
      {term:"COL1A1/2, LOXL1, THY1", full:"collagen I, lysyl oxidase-like 1, Thy-1", desc:"線維化遺伝子プログラム/活性化HSCマーカー"},
      {term:"zonation", full:"hepatic zonation", desc:"門脈〜中心静脈の代謝勾配に沿った肝小葉の機能分化"},
      {term:"Visium / scRNA-seq", full:"spatial transcriptomics / single-cell RNA-seq", desc:"空間・単一細胞オミクス手法"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("01", [{ic:"human",cap:"ヒト肝61例"},{ic:"omics",cap:"空間オミクス"},{ic:"macrophage",cap:"LAM"},{ic:"endothelial",cap:"中心静脈EC"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 01 Li&Chai Nat Genet 2025: ヒト肝61例 scRNA-seq+空間TX+MALDI-MSI空間メタボローム+LCMプロテオミクス+THP-1 OE/siRNA検証(qPCR/ELISA/Seahorse)+IF/RNAscope */
LP.methods("01", ["human","invitro","crispr","scrna","spatial","proteomics","qpcr","elisa","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
LP.cinema("01", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("01")}${GLYPH.arrow("01","var(--B)")}</defs>`+GLYPH.title("肝小葉：中心静脈(CV)周囲＝pericentral に病変が集中")
    +`<circle cx="600" cy="215" r="54" fill="#cfe0ee" stroke="var(--E)" stroke-width="2"/><text x="600" y="212" text-anchor="middle" font-size="11" fill="var(--E)">中心静脈</text><text x="600" y="228" text-anchor="middle" font-size="10" fill="var(--E)">(CV)</text>`
    +GLYPH.hep("hepA",70,90,1.15,"肝細胞")+GLYPH.hep("hepB",70,250,1.1,"")+GLYPH.hep("hepC",300,250,1.0,"")
    +`<g id="lam" class="fade">`+GLYPH.mac("lam1",430,150,"")+GLYPH.mac("lam2",480,110,"LAM(マクロファージ)")+GLYPH.mac("lam3",450,200,"")+`</g>`
    +GLYPH.tag("rspoTag",500,300,"RSPO3–LGR6","var(--B)",120,true)
    +GLYPH.stellate("hsc",520,355,"肝星細胞")+GLYPH.layer("collagen"),
  build(K){
    const dA=[[120,130],[160,150],[110,170],[150,110]], dB=[[120,290],[150,310],[110,330]], dC=[[330,290],[360,310],[330,330]];
    return [
      {color:"E",t:2200,cap:"健常なヒト肝小葉。空間マルチオミクスで全細胞の配置を解析。",run(){}},
      {color:"D",t:3000,cap:"① 肝細胞に脂肪滴が蓄積（steatosis）。脂肪滴は肝細胞の内部に溜まる。",run(){
        addDrops(K,"hepADrops",dA,"lip01");addDrops(K,"hepBDrops",dB,"lip01",400);addDrops(K,"hepCDrops",dC,"lip01",700);
      }},
      {color:"C",t:3400,cap:"② 脂質関連マクロファージ（LAM）が増え、中心静脈周囲でも脂質処理に働く。MITF依存で脂質を処理し、HGFを分泌して肝保護的に働く。",run(){
        K.show(["lam"]); ["lam1","lam2","lam3"].forEach(id=>K.pulse(id));
        K.T(()=>{radiate(K,430,150,"var(--C)");radiate(K,480,110,"var(--C)");radiate(K,450,200,"var(--C)");},700);
        K.T(()=>{radiate(K,430,150,"var(--C)");radiate(K,450,200,"var(--C)");},1900);
      }},
      {color:"B",t:3800,cap:"③ 中心静脈の内皮–HSC間のRSPO3–LGR6シグナルが線維化巣の駆動候補（計算予測）。線維化はpericentral優位に進む。",run(){
        K.show(["rspoTag"]); K.flow(575,235,528,330,"var(--B)",{dur:1.2,loop:2});
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC");},1100);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(560,350),{len:170}),1800);
      }},
    ];
  }
});
