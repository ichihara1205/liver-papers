/* ============================================================
   №60 · Hepatology 2019 · Inzaugarat ME, Johnson CD, Holtmann TM, McGeough MD, Trautwein C, …
   肝星細胞のNLRP3インフラマソームだけで線維化が起きる——炎症細胞の浸潤がなくてもHSCが自前で活性化する
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ※本エントリは要旨ベース（全文は未取得）。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"60", primary:"B",
    title:"肝星細胞のNLRP3インフラマソームだけで線維化が起きる——炎症細胞の浸潤がなくてもHSCが自前で活性化する",
    authors:"Inzaugarat ME, Johnson CD, Holtmann TM, McGeough MD, Trautwein C, Papouchado BG, Schwabe R, Hoffman HM, Wree A, Feldstein AE",
    journal:"Hepatology",
    year:2019,
    vol:"69(2):845-859",
    doi:"10.1002/hep.30252",
    url:"https://doi.org/10.1002/hep.30252",
    tags:["B","C"],
    approach:"in vitro（野生型・Nlrp3欠損・誘導性Nlrp3ノックインの初代HSCに LPS＋ATP または 4-OHT）＋ in vivo（Lrat-Cre によるHSC特異的Nlrp3ノックインマウスを通常食で6か月）＋ RT-PCR・ウェスタンブロット・FACS・ELISA・IF/IHC",
    added:"2026-11-08",
    origin:{via:"chat", date:"2026-11-08", topic:"HSC インフラマソーム / IL-1β"},
    abstract_ja:"NLRP3インフラマソームが肝線維化に関わることは知られていたが、それがどの細胞で何をして線維化に至るのかは不明だった。本研究は、**肝星細胞（HSC）自身のNLRP3インフラマソームがHSCの活性化を直接制御し、線維化に寄与する**という仮説を検証した。野生型HSCをLPSとATPで刺激すると、NLRP3に依存して活性酸素種（ROS）の産生とカテプシンB活性が上がり、線維化マーカーのmRNAとタンパクが増えた。Nlrp3を欠くHSCではこの反応が消えた。誘導性のNlrp3ノックインHSCでは、4-ヒドロキシタモキシフェンでインフラマソームを入れるだけで24時間後に線維化マーカーが上がった。さらに、レシチンレチノールアシルトランスフェラーゼ（Lrat）駆動のCreを使ってHSC特異的にNlrp3ノックインしたマウスでは、通常食のまま24週で線維化が現れ、αSMA陽性細胞・デスミン陽性細胞とコラーゲン沈着が増えた。注目すべきことに、この変化は**炎症細胞の浸潤とは独立**していた。8週齢のマウスへのLPS負荷でも同じ変化が見られた。以上は、NLRP3インフラマソームがHSCの活性化を直接引き起こし、線維化の引き金になりうることを示している。",
    background:"NLRP3インフラマソームはMASHや肝線維化で繰り返し注目されてきたが、議論の中心はクッパー細胞（KC）や浸潤マクロファージだった。すなわち、免疫細胞が点火してIL-1βなどを出し、それを受けたHSCが活性化する、という順序である。一方でHSCもインフラマソームの部品を持つことは報告されており（Watanabe 2009）、HSC自身の活性化が線維化に直結するのかは確かめられていなかった。免疫細胞を介するのか、HSCの中だけで完結するのかは、介入点をどこに置くかを決める分岐点になる。",
    achievements:[
      "初代HSCを**LPS＋ATP**で刺激すると、NLRP3依存にROS産生とカテプシンB活性が上がり、線維化マーカーのmRNA・タンパクが増えた。Nlrp3欠損HSCではこの反応が消えた。",
      "**誘導性のNlrp3ノックインHSC**では、4-OHTでインフラマソームを入れるだけで24時間後に線維化マーカーが上がった。外からのサイトカインを与えていない。",
      "**HSC特異的（Lrat-Cre）にNlrp3ノックイン**したマウスは、通常食のまま24週で線維化を示し、αSMA・デスミン陽性細胞とコラーゲン沈着が増えた。",
      "この線維化は**炎症細胞の浸潤とは独立**だった。HSCの中で完結する経路として線維化が点火しうることを示している。"
    ],
    limitations:[
      "ノックインは恒常的に活性化する変異NLRP3であり、生理的な活性化の強さや持続と同じとは限らない。",
      "マウスの遺伝学モデルで示された経路で、ヒトのMASH肝でこれが主要な寄与をするかは本論文では示されていない。",
      "LPS＋ATPの2段刺激は培養系の標準的な入れ方で、生体内で何がこの2段に当たるのかは別に示す必要がある。",
      "HSCから出たIL-1βを介するのか、細胞内のNLRP3シグナルが直接に線維化遺伝子を動かすのか——この2つは完全には分離されていない。",
      "Lrat-Creは他の細胞にも発現しうるため、HSC特異性は完全ではない。"
    ],
    connection:[
      "iKCで確認済みの **LPS＋ATP の2段刺激を、KCではなくHSC側に向ける**根拠になる。この系からHSCだけを取り出して同じ刺激を入れる実験がそのまま立つ。",
      "「HSCは前駆体のIL-1βを作るが放出されない」という観察に対する重要な補助線。**IL-1βが外に出なくても、細胞内のNLRP3活性化だけで線維化マーカーが上がりうる**。放出の有無と線維化を切り離して考えられる。",
      "H+AOA が HSC 依存だったことと噛み合う。HSC自身の自律的な経路を測る対象として、NLRP3・CASP1・IL1B・ROS・カテプシンBを読み出しに入れる価値がある。",
      "No.59（老化HSC）と並べると、HSCは**自分で点火もし、自分で制動もかける**細胞だと整理できる。どちらに寄っているかを見分ける読み出しが要る。"
    ],
    glossary:[
      {term:"NLRP3", full:"NLR family pyrin domain containing 3", desc:"インフラマソームの中心となるセンサー分子。2段階の刺激で組み上がる"},
      {term:"インフラマソーム", full:"inflammasome", desc:"caspase-1を活性化する細胞内の複合体。IL-1βの成熟とパイロトーシスを担う"},
      {term:"caspase-1", full:"cysteine-aspartic protease 1", desc:"インフラマソームが活性化する酵素。前駆体IL-1βを切って成熟型にする"},
      {term:"カテプシンB", full:"cathepsin B", desc:"リソソームのプロテアーゼ。漏出するとNLRP3の活性化を促す"},
      {term:"ROS", full:"reactive oxygen species", desc:"活性酸素種。NLRP3活性化の上流シグナルのひとつ"},
      {term:"Lrat", full:"lecithin retinol acyltransferase", desc:"HSCでよく発現する遺伝子。HSC特異的なCre駆動に使う"},
      {term:"デスミン", full:"desmin", desc:"HSCの細胞骨格タンパク。活性化の有無によらずHSCの同定に使われる"}
    ],
    struct:{
      model:"in vitro（初代HSC）＋ in vivo（HSC特異的Nlrp3ノックインマウス）",
      cells:["肝星細胞(HSC)"],
      triggers:["LPS＋ATP（2段刺激）","4-OHTによる誘導性Nlrp3活性化","HSC特異的Nlrp3ノックイン"],
      steatosis:"—（評価していない）",
      inflammation:"○",
      fibrosis:"○",
      readout:["αSMA","デスミン","コラーゲン沈着","ROS","カテプシンB活性","線維化関連mRNA/タンパク"],
      ignite:"HSC自身のNLRP3インフラマソーム。浸潤細胞がなくても線維化が点火する",
      params:[
        {name:"NLRP3の2段活性化（プライミング＋トリガー）", note:"LPSで準備しATPで入れる。ABMではHSCの点火条件そのもの"},
        {name:"ROS／カテプシンB", note:"NLRP3の上流。HSC内部の状態変数として置ける"},
        {name:"浸潤の有無", note:"この論文では浸潤なしで線維化が出る。免疫細胞を介する経路と分けて扱える"}
      ],
      todos:[
        "この系のHSCにLPS＋ATPを入れ、ACTA2/COL1A1とNLRP3/CASP1/IL1Bを同時に測る",
        "IL-1βの放出量（ELISA）と線維化マーカーを並べ、放出を介するかどうかを切り分ける",
        "HSC側のROSとカテプシンB活性を測り、点火の上流が立っているか確認する",
        "H+AOA条件でHSCのNLRP3経路が動いているかを見る（HSC依存という結果の裏取り）"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f60' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>点火はHSCの中で完結しうる——浸潤がなくても線維化が立ち上がる</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>2段の刺激</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LPS で準備 → ATP</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>HSC に直接入れる</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f60)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSC内で組み上がる</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>NLRP3インフラマソーム</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>ROS・カテプシンB↑</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f60)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSCが活性化</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>線維化マーカー↑</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>Nlrp3欠損では起きない</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f60)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>マウス肝で線維化</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>αSMA・デスミン・膠原線維</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>浸潤とは独立</text><text x='320' y='180' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>HSC特異的にNLRP3を入れるだけで、通常食のまま24週で線維化が現れる</text><text x='320' y='206' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>免疫細胞の点火を待たずに、HSCは自前で線維化を始められる</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m60' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：外から入れる／遺伝子で入れる／個体で確かめる</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 刺激で入れる</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>初代HSC＋LPS＋ATP</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>WT と Nlrp3欠損を比較</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m60)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>② 遺伝子で入れる</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>誘導性ノックイン＋4-OHT</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>24時間で線維化マーカー↑</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m60)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>③ 個体で確かめる</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>Lrat-Cre でHSC特異的に</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>通常食6か月</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m60)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>④ 読み出し</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>RT-PCR・WB・FACS</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>ELISA・IF/IHC</text><text x='320' y='186' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>読み出し：ROS・カテプシンB活性・線維化マーカー・αSMA/デスミン陽性細胞・コラーゲン沈着・浸潤の有無</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("60", [{ic:"stellate",cap:"HSC自身がNLRP3インフラマソームを組み上げる"}, {ic:"dish",cap:"初代HSC培養にLPS＋ATPを入れる"}, {ic:"geneko",cap:"Nlrp3欠損と誘導性ノックインで因果を示す"}, {ic:"mouse",cap:"HSC特異的ノックインマウスが通常食で線維化する"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 60 Inzaugarat/Feldstein Hepatology 2019: 要旨に RT-PCR・WB・FACS・ELISA・IF・IHC が明記。
   遺伝子欠損／ノックインマウスを crispr（CRISPR/KO）に分類。 */
LP.methods("60", ["mouse","invitro","crispr","qpcr","wb","facs","elisa"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №60 HSC自身のNLRP3が線維化を点火する ===== */
LP.cinema("60", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("60","var(--B)")}</defs>`
    +GLYPH.title("LPSで準備 → ATPでNLRP3が組み上がる → HSCが活性化 → 浸潤なしで線維化")
    +GLYPH.stellate("hsc60",250,210,"静止期HSC")
    +GLYPH.mol("lps60",80,150,"LPS","var(--C)",true)
    +GLYPH.metab("atp60",80,250,"ATP","var(--D)",true)
    +GLYPH.tag("nlrp60",250,110,"NLRP3 組み上がり","var(--B)",132,true)
    +GLYPH.tag("ros60",430,120,"ROS・カテプシンB↑","var(--H)",144,true)
    +GLYPH.gene("fib60",430,250,"線維化遺伝子↑","var(--B)",true)
    +GLYPH.layer("col60")
    +`<g id="noinf60" class="fade">`+GLYPH.mac("macro60",620,120,"浸潤マクロファージ","#5d6470")+`</g>`
    +GLYPH.badge("ko60",620,320,"Nlrp3欠損","反応なし","var(--H)"),
  build(K){
    return [
      {color:"C",t:3200,cap:"静止期のHSCに、まずLPSを入れて準備（プライミング）する。これだけでは点火しない。",run(){
        K.show(["lps60"]);
        K.T(()=>K.flow(96,156,230,200,"var(--C)",{n:3,dur:1.2,loop:1}),600);
      }},
      {color:"D",t:3600,cap:"① 続いてATPを入れると、HSCの中でNLRP3インフラマソームが組み上がる。2段そろって初めて動く。",run(){
        K.show(["atp60"]);
        K.T(()=>K.flow(96,244,230,220,"var(--D)",{n:3,dur:1.2,loop:1}),500);
        K.T(()=>{K.show(["nlrp60"]);K.pulse("nlrp60");},1700);
      }},
      {color:"H",t:3800,cap:"② NLRP3に依存して活性酸素種（ROS）の産生とカテプシンB活性が上がる。HSCの内部だけで起きている。",run(){
        K.unpulse("nlrp60");
        K.T(()=>K.show(["ros60"]),500);
        K.T(()=>radiate(K,250,205,"var(--H)",6),1200);
      }},
      {color:"B",t:4000,cap:"③ 線維化関連の遺伝子とタンパクが上がり、HSCは紡錘形の活性化した姿になってコラーゲンを出す。",run(){
        K.show(["fib60"]);
        K.T(()=>{K.morph("hsc60Shape",GLYPH.SPINDLE);K.attr("hsc60Shape","fill","#b0432f");K.text("hsc60Cap","活性化HSC");},800);
        K.T(()=>K.draw("col60",GLYPH.collagenAt(300,320),{len:150}),1900);
      }},
      {color:"B",t:4200,cap:"④ HSC特異的にNLRP3を入れたマウスでは、通常食のまま線維化が出る。しかも炎症細胞の浸潤とは独立だった。",run(){
        K.show(["noinf60"]);
        K.T(()=>K.markX(620,120,"var(--H)"),1100);
        K.T(()=>K.draw("col60",GLYPH.collagenAt(300,370),{len:150}),2200);
      }},
      {color:"H",t:3400,cap:"⑤ 逆にNlrp3を欠くHSCでは、同じ刺激を入れても線維化マーカーが上がらない。点火の本体がNLRP3であることを示す。",run(){
        K.show(["ko60"]);
        K.T(()=>{K.attr("col60","opacity","0.15");K.attr("fib60","opacity","0.2");K.attr("ros60","opacity","0.2");},900);
        K.T(()=>K.pulse("ko60"),2000);
      }}
    ];
  }
});
