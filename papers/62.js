/* ============================================================
   №62 · Gastroenterology 2012 · Teratani T, Tomita K, Suzuki T, Oshikawa T, …, Miura S, Hibi T
   HSCに溜まった遊離コレステロールがTLR4を上げBAMBIを下げる——傷害を増やさずにHSCをTGF-βへ過敏にする
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
    id:"62", primary:"B",
    title:"HSCに溜まった遊離コレステロールがTLR4を上げBAMBIを下げる——傷害を増やさずにHSCをTGF-βへ過敏にする",
    authors:"Teratani T, Tomita K, Suzuki T, Oshikawa T, …, Miura S, Hibi T",
    journal:"Gastroenterology",
    year:2012,
    vol:"142(1):152-164.e10",
    doi:"10.1053/j.gastro.2011.09.049",
    url:"https://doi.org/10.1053/j.gastro.2011.09.049",
    tags:["B","D"],
    approach:"in vivo（C57BL/6に高コレステロール食または対照食を4週 → 胆管結紮あるいは四塩化炭素で線維化を誘導）＋ in vitro（高コレステロール食マウスおよびNiemann-Pick C1欠損マウスから単離した初代HSC）＋ TLR4変異マウス（C3H/HeJ）での検証",
    added:"2026-11-08",
    origin:{via:"chat", date:"2026-11-08", topic:"AlbuMax由来のコレステロール仮説"},
    abstract_ja:"食事性コレステロールが線維化の進行に関わるという報告はあったが、その機序は明らかでなかった。本研究はC57BL/6マウスに高コレステロール食または対照食を4週間与えたのち、胆管結紮または四塩化炭素で線維化を誘導した。高コレステロール食の群では線維化とHSCの活性化がいずれのモデルでも有意に強かった。ところが**肝細胞傷害や肝の炎症の程度——肝細胞のアポトーシスやクッパー細胞の活性化を含む——には差がなかった**。遊離コレステロールの量は、高コレステロール食のマウスから単離したHSCで対照より大きく高かった。培養HSCでは、遊離コレステロールの蓄積がToll様受容体4（TLR4）の量を増やし、その結果としてBAMBI（TGF-βの偽受容体）が下がり、HSCはTGF-βによる活性化に対して過敏になった。TLR4の変異型をもつC3H/HeJマウスでは高コレステロール食による線維化の悪化が起こらず、変異TLR4のHSCは遊離コレステロールが溜まっても活性化しなかった。つまり食事性コレステロールは、HSCに遊離コレステロールが溜まることでTLR4シグナルを増やし、BAMBIを下げ、HSCをTGF-βに過敏にすることで線維化を悪化させる。この経路は抗線維化治療の標的になりうる。",
    background:"線維化の強さは、傷害の強さだけでは説明がつかない。同じ程度の傷害でも線維化の進み方に差が出ることは臨床でも実験でも知られており、「入力の大きさ」とは別に「受け手の感度」という軸があることを示唆していた。コレステロールは食事因子として線維化との関連が報告されていたが、それが肝細胞を余計に傷めるからなのか、HSC側の性質を変えるからなのかは分けられていなかった。この区別は、介入をどこに置くかを左右する。",
    achievements:[
      "高コレステロール食のマウスは、胆管結紮でも四塩化炭素でも**線維化とHSC活性化が有意に強かった**。",
      "一方で**肝細胞傷害と炎症の程度には差がなかった**（肝細胞アポトーシス、クッパー細胞の活性化を含む）。傷害を増やさずに線維化だけが増えている。",
      "遊離コレステロールは**HSCに蓄積**していた。高コレステロール食マウスのHSCで対照より大きく高かった。",
      "培養HSCで、遊離コレステロールの蓄積が**TLR4を増やし、BAMBI（TGF-βの偽受容体）を下げ**、HSCをTGF-βによる活性化に過敏にした。",
      "**TLR4変異のC3H/HeJマウスでは悪化が起きなかった**。変異TLR4のHSCは遊離コレステロールが溜まっても活性化せず、TLR4が必須であることを示した。"
    ],
    limitations:[
      "マウスの食餌モデルであり、ヒトの食事性コレステロール摂取にそのまま外挿するには隔たりがある。",
      "線維化の誘導は胆管結紮と四塩化炭素で、MASHの代謝性の経過とは異なる入力である。",
      "遊離コレステロールがどのようにTLR4の量を増やすのか、その分子機構は完全には解けていない。",
      "Niemann-Pick C1欠損HSCは遊離コレステロールが溜まる系だが、リソソーム機能の他の異常も同時に伴う。",
      "「過敏になる」ことの定量——TGF-βの用量反応がどれだけずれるか——は限定的にしか示されていない。"
    ],
    connection:[
      "**AlbuMax由来のコレステロール仮説の直接の根拠**になる論文。AlbuMaxは脂質を含むアルブミン画分で、コレステロールが入る。培地由来の遊離コレステロールがHSCに溜まっていれば、HSC側の感度がすでに動いている可能性がある。",
      "効き方が目的に合っている。**傷害を増やさずにHSCのTGF-β感受性だけを上げる**ので、細胞を痛めずに線維化の点火だけを強められる。追加刺激の候補としてコレステロールを優先する理由がここにある。",
      "読み出しが具体的に決まる。HSCの**TLR4とBAMBI**を測れば、受け手側が過敏化しているかどうかを直接見られる。線維化が点火しない理由が受け手側にあるのかを切り分ける、安い実験になる。",
      "用量を振る実験が立つ。培地のコレステロール量を測り、コレステロールを足した用量反応を取る。No.46（肝細胞のTAZ→Ihh）が送り手側の話なのに対し、こちらは受け手側の話なので、両方を並べると点火の欠けがどちらにあるか二分できる。"
    ],
    glossary:[
      {term:"遊離コレステロール", full:"free cholesterol", desc:"エステル化されていないコレステロール。HSCに溜まるとTLR4を介して線維化を促す"},
      {term:"TLR4", full:"Toll-like receptor 4", desc:"自然免疫の受容体。HSCでは量が増えるとBAMBIを下げTGF-β感受性を上げる"},
      {term:"BAMBI", full:"BMP and activin membrane-bound inhibitor", desc:"TGF-βの偽受容体。下がるとHSCがTGF-βに過敏になる"},
      {term:"NPC1", full:"Niemann-Pick type C1", desc:"細胞内のコレステロール輸送を担う。欠損すると遊離コレステロールが溜まる"},
      {term:"C3H/HeJ", full:"C3H/HeJ mouse strain", desc:"TLR4に変異をもつ系統。TLR4依存性の検証に使われる"},
      {term:"胆管結紮", full:"bile duct ligation (BDL)", desc:"胆汁うっ滞から線維化を起こす古典的なモデル手術"},
      {term:"AlbuMax", full:"AlbuMax (lipid-rich bovine serum albumin)", desc:"脂質を含むBSA画分。培地成分としてコレステロールの持ち込み源になりうる"}
    ],
    struct:{
      model:"in vivo（マウス：高コレステロール食＋胆管結紮/四塩化炭素）＋ in vitro（初代HSC培養）",
      cells:["肝星細胞(HSC)","肝細胞","クッパー細胞(KC)"],
      triggers:["高コレステロール食4週","胆管結紮","四塩化炭素","HSCへの遊離コレステロール蓄積"],
      steatosis:"△（コレステロールの蓄積が主題。中性脂肪の蓄積は扱っていない）",
      inflammation:"×（高コレステロール食で炎症とKC活性化に差がなかった）",
      fibrosis:"○",
      readout:["肝線維化","HSC活性化","HSC内の遊離コレステロール","TLR4","BAMBI","TGF-β応答性","肝細胞アポトーシス","KC活性化"],
      ignite:"受け手側の過敏化。HSCの遊離コレステロール→TLR4↑→BAMBI↓→同じTGF-βでより強く活性化する",
      params:[
        {name:"HSC内の遊離コレステロール量", note:"入力ではなく受け手の状態変数。培地のAlbuMax由来分も効きうる"},
        {name:"BAMBI量（TGF-β感受性）", note:"同じTGF-β濃度に対する応答の倍率。ABMではHSCのゲインに相当する"},
        {name:"TLR4依存性", note:"C3H/HeJでは消える。経路の必須性を示す切り分け点"}
      ],
      todos:[
        "使用しているAlbuMaxのコレステロール含量を調べ、培地中の濃度を見積もる",
        "HSCのTLR4とBAMBIを測り、受け手側がすでに過敏化しているかを確認する",
        "コレステロールを添加した用量反応を取り、TGF-β応答がどれだけずれるかを見る",
        "肝細胞傷害（LDH・ALT）が増えないことを確かめ、傷害を増やさずに感度だけ上げられているか検証する"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f62' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>入力は同じまま、受け手の感度だけが上がる</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>高コレステロール食</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>4週間</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>その後に線維化を誘導</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f62)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSCに溜まる</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>遊離コレステロール</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>肝細胞傷害は増えない</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f62)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>TLR4↑ → BAMBI↓</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>偽受容体が減る</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>TGF-βに過敏になる</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f62)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>線維化が悪化</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>同じTGF-βで強く活性化</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>TLR4変異では起きない</text><text x='320' y='180' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>炎症もクッパー細胞の活性化も肝細胞アポトーシスも、対照食と差がなかった</text><text x='320' y='206' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>細胞を余計に傷めずに、線維化の点火だけを強められる入力</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m62' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：食べさせる → 単離する → 溜める → 受容体を壊す</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>① 食べさせる</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高コレステロール食4週</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>→ 胆管結紮 / CCl4</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m62)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>② 単離する</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>初代HSCを取り出す</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>遊離コレステロールを定量</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m62)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>③ 溜める</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>NPC1欠損HSCでも検証</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>TLR4・BAMBI・TGF-β応答</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m62)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ 壊す</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TLR4変異 C3H/HeJ</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>悪化が消える</text><text x='320' y='186' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>対照群との比較点：線維化・HSC活性化・肝細胞アポトーシス・KC活性化・HSC内の遊離コレステロール</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("62", [{ic:"mouse",cap:"高コレステロール食のマウスで線維化を誘導する"}, {ic:"stellate",cap:"HSCに遊離コレステロールが溜まりTGF-βに過敏になる"}, {ic:"hepatocyte",cap:"肝細胞の傷害は増えていない"}, {ic:"geneko",cap:"TLR4変異のC3H/HeJでは悪化が起きない"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 62 Teratani/Tomita Gastroenterology 2012: マウスin vivo（食餌＋BDL/CCl4）＋初代HSC培養＋TLR4変異系統。
   要旨ベースのため qpcr と wb（IHC/IF を含むラベル）は推定。 */
LP.methods("62", ["mouse","invitro","qpcr","wb"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №62 遊離コレステロールがHSCをTGF-βに過敏にする ===== */
LP.cinema("62", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("62","var(--B)")}</defs>`
    +GLYPH.title("HSCに遊離コレステロールが溜まる → TLR4↑ → BAMBI↓ → 同じTGF-βで強く活性化")
    +GLYPH.hep("hep62",30,66,1.0,"肝細胞")
    +GLYPH.stellate("hsc62",360,250,"静止期HSC")
    +GLYPH.metab("chol62",150,250,"遊離コレステロール","var(--D)",true)
    +GLYPH.receptor("tlr62",360,170,"TLR4","var(--C)")
    +GLYPH.tag("bambi62",540,170,"BAMBI↓","var(--H)",86,true)
    +GLYPH.cytokine("tgf62",540,300,"TGF-β","var(--B)",true)
    +GLYPH.layer("col62")
    +GLYPH.badge("noinj62",120,380,"肝細胞傷害","変わらない","var(--A)")
    +GLYPH.pill("c3h62",560,62,"TLR4変異 C3H/HeJ",146),
  build(K){
    return [
      {color:"D",t:3400,cap:"高コレステロール食を4週間。遊離コレステロールが肝に入り、HSCに溜まっていく。",run(){
        K.show(["chol62"]);
        K.T(()=>K.flow(166,250,330,245,"var(--D)",{n:4,dur:1.3,loop:1}),700);
      }},
      {color:"A",t:3400,cap:"① このとき肝細胞の傷害は増えていない。アポトーシスもクッパー細胞の活性化も対照食と差がなかった。",run(){
        K.show(["noinj62"]);
        K.T(()=>K.pulse("noinj62"),900);
      }},
      {color:"C",t:3800,cap:"② HSCに溜まった遊離コレステロールはTLR4の量を増やす。受容体が増えることが次の段階の起点になる。",run(){
        K.unpulse("noinj62");
        K.T(()=>K.grow("tlr62",1.5,1.0),600);
        K.T(()=>radiate(K,360,175,"var(--C)",6),1600);
      }},
      {color:"H",t:3800,cap:"③ TLR4シグナルが増えるとBAMBIが下がる。BAMBIはTGF-βの偽受容体——受け止めて黙らせる部品——なので、歯止めが外れる。",run(){
        K.show(["bambi62"]);
        K.T(()=>{K.markX(540,196,"var(--H)");},1300);
      }},
      {color:"B",t:4200,cap:"④ 同じ量のTGF-βでも、HSCははるかに強く活性化する。入力は変わらないのに、受け手の感度だけが上がっている。",run(){
        K.show(["tgf62"]);
        K.T(()=>K.flow(528,296,382,258,"var(--B)",{n:4,dur:1.2,loop:2}),600);
        K.T(()=>{K.morph("hsc62Shape",GLYPH.SPINDLE);K.attr("hsc62Shape","fill","#b0432f");K.text("hsc62Cap","活性化HSC");},2000);
        K.T(()=>K.draw("col62",GLYPH.collagenAt(390,340),{len:150}),2900);
      }},
      {color:"H",t:3800,cap:"⑤ TLR4に変異をもつ系統では、コレステロールが溜まっても線維化は悪化しない。経路の要がTLR4であることがわかる。",run(){
        K.show(["c3h62"]);
        K.T(()=>{K.markX(360,175,"var(--H)");K.attr("col62","opacity","0.15");K.attr("bambi62","opacity","0.2");},1000);
        K.T(()=>{K.morph("hsc62Shape",GLYPH.QUIET);K.attr("hsc62Shape","fill","#d6a08e");K.text("hsc62Cap","活性化しないHSC");},2200);
      }}
    ];
  }
});
