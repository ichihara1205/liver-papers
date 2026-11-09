/* ============================================================
   №59 · Cell 2008 · Krizhanovsky V, Yon M, Dickins RA, Hearn S, Simon J, Miething C, Yee H, Ze…
   活性化した肝星細胞が細胞老化に入ると線維化が止まる——ECM産生が下がり分解酵素が上がり、NK細胞に除かれる
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ※本エントリは要旨ベース（全文は未取得）。使用手法は要旨からの推定を含む。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"59", primary:"B",
    title:"活性化した肝星細胞が細胞老化に入ると線維化が止まる——ECM産生が下がり分解酵素が上がり、NK細胞に除かれる",
    authors:"Krizhanovsky V, Yon M, Dickins RA, Hearn S, Simon J, Miething C, Yee H, Zender L, Lowe SW",
    journal:"Cell",
    year:2008,
    vol:"134(4):657-667",
    doi:"10.1016/j.cell.2008.06.049",
    url:"https://doi.org/10.1016/j.cell.2008.06.049",
    tags:["B"],
    approach:"in vivo（四塩化炭素で線維化させたマウス肝、老化の制御因子を欠くマウス）＋ 老化した活性化HSCの遺伝子発現プロファイル ＋ NK細胞による傷害アッセイ（in vitro / in vivo）",
    added:"2026-11-08",
    origin:{via:"chat", date:"2026-11-08", topic:"老化HSCと線維化の自己制動"},
    abstract_ja:"細胞老化はがんを抑える強力な仕組みとして知られてきたが、がん以外の病態でそれが何をしているかは調べられていなかった。本研究は、線維化（肝硬変の前段階）を起こさせたマウス肝に老化細胞が蓄積すること、そしてその細胞が主として**活性化した肝星細胞（HSC）に由来する**ことを示した。HSCは肝傷害に反応していったん増殖し、瘢痕となる細胞外基質（ECM）を作る細胞である。老化の制御に必要な因子を欠くマウスではHSCが増殖を続け、線維化が過剰になった。老化した活性化HSCは、細胞周期から出ていること、ECM成分の分泌が減っていること、ECMを分解する酵素の分泌が増えていること、そして免疫監視を受けやすくなっていることと整合する発現プロファイルを示した。実際、NK細胞はin vitroでもin vivoでも老化した活性化HSCを選んで傷害し、線維化の収束を助けていた。つまり老化のプログラムは、急性の組織傷害に対する線維化応答に歯止めをかけている。",
    background:"線維化は瘢痕が増える一方の過程ではなく、傷害が止まれば退縮しうる。しかし何がその歯止めを引くのかは2000年代半ばまで明確でなかった。細胞老化は分裂を止めた不可逆の状態として、もっぱら腫瘍抑制の文脈で語られており、線維化のような非腫瘍性の病態で積極的な役割を果たすという視点はほとんどなかった。活性化HSCは増殖とECM産生を担う細胞なので、その増殖が止まること自体が線維化の制動になりうる——この可能性を検証した研究である。",
    achievements:[
      "線維化させたマウス肝に老化細胞が蓄積し、その大半が**活性化したHSC由来**であることを示した。",
      "老化の制御因子を欠くマウスではHSCが増殖を続け、**線維化が過剰になった**。老化が線維化を抑える側であることを遺伝学的に示した。",
      "老化した活性化HSCは、細胞周期からの離脱・**ECM成分の分泌低下**・**ECM分解酵素の分泌上昇**・免疫監視の受けやすさ、と整合する発現プロファイルを示した。",
      "**NK細胞が老化した活性化HSCを選択的に傷害**することをin vitroとin vivoで示し、線維化の収束を助ける経路として位置づけた。"
    ],
    limitations:[
      "四塩化炭素のような急性・中毒性の傷害モデルが中心で、MASHのような代謝性の慢性傷害にそのまま一般化できるかは本論文では示されていない。",
      "老化の制御因子を欠くマウスは全身性で、HSC特異的な欠損ではない。他の細胞を介した寄与を完全には切り離せない。",
      "ヒト肝での対応する所見は限られている。",
      "活性化したHSCのうちどれだけが、いつ老化に移るのか——移行の時間経過と割合——は定量されていない。",
      "培養下のHSCは自発的に活性化するため、in vitroで見た老化と生体内の老化が同じ状態かは慎重に見る必要がある。"
    ],
    connection:[
      "H+AOA で **ACTA2/COL1A1/CTGF/TIMP1 が下がりながら IL1B が上がる**という組み合わせは、老化HSCの表現型（ECM産生↓・分泌性の炎症↑）とよく合う。SA-β-gal、CDKN1A/CDKN2A、IL6・CXCL8 を読み出しに足せば、この解釈を直接確かめられる。",
      "この系には**NK細胞がいない**。老化HSCを除く経路が欠けているので、仮に老化HSCができても溜まったままになる。退縮まで再現したいなら、そこが足りない部品になる。",
      "No.57（ヒトMASHのセノリティクスRCT）と**向きが逆**の論文として並べて読む。老化HSCは線維化を抑える側なので、老化細胞を除くことが常に有利とは限らない。どの時期に除くかが論点になる。",
      "PIP が Day10 にピークを取るのに線維化マーカーが下がる、という**時間差**の説明候補になる。産生のピークのあとに制動がかかる、という読み方ができる。"
    ],
    glossary:[
      {term:"senescence", full:"cellular senescence", desc:"細胞老化。分裂を止めたまま生き続ける状態。この論文では活性化HSCがこれに入ると線維化が止まる"},
      {term:"SASP", full:"senescence-associated secretory phenotype", desc:"老化細胞が炎症性サイトカインや分解酵素を出し続ける分泌表現型"},
      {term:"SA-β-gal", full:"senescence-associated β-galactosidase", desc:"老化細胞の代表的な染色マーカー。pH6での β-gal 活性で検出する"},
      {term:"NK細胞", full:"natural killer cell", desc:"自然免疫のリンパ球。老化した活性化HSCを選択的に傷害し線維化の収束を助ける"},
      {term:"CCl4", full:"carbon tetrachloride", desc:"四塩化炭素。肝細胞傷害から線維化を起こす古典的なモデル薬剤"},
      {term:"MMP", full:"matrix metalloproteinase", desc:"細胞外基質を分解する酵素群。老化HSCではこちらが上がる"},
      {term:"CDKN2A", full:"cyclin-dependent kinase inhibitor 2A (p16INK4a)", desc:"細胞周期を止める因子。老化の代表的なマーカー遺伝子"}
    ],
    struct:{
      model:"in vivo（マウス肝線維化）＋ in vitro（初代HSC・NK傷害アッセイ）",
      cells:["肝星細胞(HSC)","NK細胞","肝細胞"],
      triggers:["四塩化炭素(CCl4)による肝傷害","老化制御因子の欠損"],
      steatosis:"—（評価していない）",
      inflammation:"△（NK細胞による免疫監視として扱う）",
      fibrosis:"○",
      readout:["老化マーカー陽性細胞","αSMA","コラーゲン沈着","ECM分解酵素","NK細胞による傷害"],
      ignite:"点火ではなく自己制動。活性化HSCが老化に入るとECMを減らし分解酵素を増やし、NK細胞に除かれる",
      params:[
        {name:"HSCの老化移行率", note:"活性化HSCが増殖を止めて老化に入る確率。ABMではHSCの状態遷移として置く"},
        {name:"NKによる除去速度", note:"老化HSCが取り除かれる速さ。この系には欠けている過程"},
        {name:"ECM産生↓／分解↑の切り替え", note:"老化に入った時点でHSCの出力が反転する。線維化の退縮の駆動力"}
      ],
      todos:[
        "H+AOA条件でSA-β-galとCDKN1A/CDKN2Aを測り、HSCが老化に入っているかを見る",
        "SASP（IL6・CXCL8）とIL1Bを並べ、炎症の出どころがHSCの老化かどうかを切り分ける",
        "MMP/TIMP比を測り、ECMが分解側に傾いているか確認する",
        "Day10のPIPピークと線維化マーカー低下の時間差を、老化移行のタイミングとして説明できるか検討する"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f59' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>線維化は増え続けない——活性化HSCの老化が歯止めになる</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>肝傷害</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CCl4 など</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>HSCが活性化</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f59)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>増殖とECM産生</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>活性化HSCが増える</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>瘢痕が厚くなる</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f59)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>細胞老化に入る</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>増殖停止・ECM産生↓</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>分解酵素↑</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f59)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>NK細胞が除く</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>老化HSCを選んで傷害</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>線維化が収束</text><path d='M241,152 L241,162 L399,162 L399,152' stroke='var(--H)' stroke-width='1.1' stroke-dasharray='4,3' fill='none'/><text x='320' y='166' text-anchor='middle' font-size='11' fill='var(--H)' font-weight='700'>⊣</text><text x='320' y='186' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>老化の制御因子を欠くと③に進めず、HSCは増殖を続けて線維化が過剰になる</text><text x='320' y='206' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>線維化応答には、HSC自身が引く歯止めが組み込まれている</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m59' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：老化を「見る」「外す」「読む」「除かせる」</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 見る</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>線維化マウス肝</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>老化細胞の由来を同定</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m59)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>② 外す</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>老化制御因子を欠くマウス</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>線維化が過剰に</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m59)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ 読む</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>老化HSCの発現profile</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>ECM↓・分解酵素↑</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m59)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>④ 除かせる</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>NK傷害アッセイ</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>in vitro と in vivo</text><text x='320' y='186' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>読み出し：老化マーカー陽性細胞の数と由来・コラーゲン沈着・ECM分解酵素・NKによる傷害</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("59", [{ic:"mouse",cap:"四塩化炭素で線維化させたマウス肝"}, {ic:"stellate",cap:"活性化したHSCが老化に入り、ECM産生をやめる"}, {ic:"macrophage",cap:"NK細胞が老化HSCを選んで傷害する"}, {ic:"geneko",cap:"老化の制御因子を欠くマウスでは線維化が過剰になる"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 59 Krizhanovsky/Lowe Cell 2008: マウスin vivo＋初代HSC培養＋NK傷害アッセイ＋発現プロファイル。
   要旨ベースのため wb（IHC/IF を含むラベル）と imaging は推定。遺伝子欠損マウスを crispr（CRISPR/KO）に分類。 */
LP.methods("59", ["mouse","invitro","crispr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №59 活性化HSCの老化が線維化を止める ===== */
LP.cinema("59", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("59","var(--B)")}</defs>`
    +GLYPH.title("傷害 → HSCの活性化と増殖 → 老化（ECM↓・分解酵素↑）→ NK細胞が除いて収束")
    +GLYPH.hep("hep59",36,70,1.05,"肝細胞")
    +GLYPH.stellate("hsc59",330,210,"静止期HSC")
    +`<g id="prolif59" class="fade">`+GLYPH.stellate("hsc59b",330,330,"増えたHSC")+`</g>`
    +GLYPH.layer("col59")
    +GLYPH.tag("mmp59",560,150,"ECM分解酵素↑","var(--H)",116,true)
    +GLYPH.tag("ecm59",560,196,"ECM産生↓","var(--H)",100,true)
    +`<g id="nk59" class="fade">`+GLYPH.mac("nkcell59",630,300,"NK細胞","#4a7a6a")+`</g>`
    +GLYPH.badge("stop59",150,350,"増殖","停止","var(--H)")
    +GLYPH.pill("ko59",520,62,"老化制御因子を欠くと",150),
  build(K){
    return [
      {color:"C",t:3000,cap:"肝細胞が傷つくと、静止期の肝星細胞（HSC）が活性化する。形が星型から紡錘形に変わる。",run(){
        K.T(()=>{K.morph("hsc59Shape",GLYPH.SPINDLE);K.attr("hsc59Shape","fill","#b0432f");K.text("hsc59Cap","活性化HSC");},800);
        K.T(()=>K.flow(150,150,310,200,"var(--C)",{n:3,dur:1.2,loop:1}),400);
      }},
      {color:"B",t:3600,cap:"① 活性化したHSCは増殖し、瘢痕となる細胞外基質（ECM）を作る。ここまでは線維化が進む一方に見える。",run(){
        K.show(["prolif59"]);
        K.T(()=>{K.morph("hsc59bShape",GLYPH.SPINDLE);K.attr("hsc59bShape","fill","#b0432f");},600);
        K.T(()=>K.draw("col59",GLYPH.collagenAt(390,280),{len:150}),1400);
      }},
      {color:"H",t:4200,cap:"② ところが増殖を続けたHSCの一部は細胞老化に入り、分裂を止める。ここが線維化の歯止めになる。",run(){
        K.T(()=>{K.attr("hsc59Shape","fill","#8a8f99");K.text("hsc59Cap","老化した活性化HSC");},700);
        K.T(()=>K.show(["stop59"]),1500);
        K.T(()=>K.pulse("stop59"),2300);
      }},
      {color:"H",t:4200,cap:"③ 老化したHSCは出力が反転する。ECM成分の分泌が減り、逆にECMを分解する酵素の分泌が増える。",run(){
        K.unpulse("stop59");
        K.T(()=>K.show(["ecm59"]),500);
        K.T(()=>K.show(["mmp59"]),1300);
        K.T(()=>{K.attr("col59","opacity","0.45");},2600);
      }},
      {color:"A",t:4200,cap:"④ さらにNK細胞が老化した活性化HSCを選んで傷害する。瘢痕を作る細胞が減り、線維化が収束していく。",run(){
        K.show(["nk59"]);
        K.T(()=>K.strike(600,300,350,215),900);
        K.T(()=>{K.markX(350,215,"var(--A)");K.attr("col59","opacity","0.15");},1900);
      }},
      {color:"B",t:3600,cap:"⑤ 逆に老化の制御因子を欠くマウスでは、HSCが増殖を続けて線維化が過剰になる。老化は線維化を抑える側にある。",run(){
        K.show(["ko59"]);
        K.T(()=>{K.markX(150,350,"var(--B)");K.attr("col59","opacity","1");K.draw("col59",GLYPH.collagenAt(390,350),{len:150,color:"var(--B)"});},900);
        K.T(()=>{K.attr("hsc59bShape","fill","#b0432f");K.pulse("ko59");},2200);
      }}
    ];
  }
});
