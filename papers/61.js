/* ============================================================
   №61 · Nature 2022 · Filliol A, Saito Y, Nair A, Dapito DH, …, Tabas I, Schwabe RF
   肝星細胞は筋線維芽細胞型とサイトカイン産生型に分かれ、肝発がんで逆向きに働く——I型コラーゲンが押し、HGFが守る
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
    id:"61", primary:"B",
    title:"肝星細胞は筋線維芽細胞型とサイトカイン産生型に分かれ、肝発がんで逆向きに働く——I型コラーゲンが押し、HGFが守る",
    authors:"Filliol A, Saito Y, Nair A, Dapito DH, …, Tabas I, Schwabe RF",
    journal:"Nature",
    year:2022,
    vol:"610(7931):356-365",
    doi:"10.1038/s41586-022-05289-6",
    url:"https://doi.org/10.1038/s41586-022-05289-6",
    tags:["B","G"],
    approach:"in vivo（マウス肝細胞がんモデルでのHSCの遺伝学的除去・活性化・抑制）＋ マウスとヒトのHSC亜集団の single-cell RNA-seq ＋ 亜集団ごとに濃縮されたメディエーターの遺伝学的除去 ＋ ヒト肝疾患コホートとの対応づけ",
    added:"2026-11-08",
    origin:{via:"chat", date:"2026-11-08", topic:"HSCの亜集団——筋線維芽細胞型とサイトカイン産生型"},
    abstract_ja:"肝細胞がん（HCC）は世界のがん死の第4位で、そのほとんどが慢性肝疾患と進行した線維化を背景に起こる。本研究は、肝線維芽細胞の主な供給源である肝星細胞（HSC）が肝発がんで何をしているのかを問うた。マウスHCCモデルでHSCを遺伝学的に除去・活性化・抑制すると、HSCは全体としては**腫瘍を促進する**側だった。HSCは前がん環境に多く集まり、肝細胞と密に接して、その増殖と細胞死を調節していた。マウスとヒトのHSC亜集団をsingle-cell RNA-seqで解析し、亜集団に濃縮されたメディエーターを遺伝学的に除いたところ、HSCには**相反する二つの働き**があることがわかった。静止期およびサイトカイン産生型のHSCに多い**肝細胞増殖因子（HGF）は肝細胞死とHCCの発生を抑えた**。これに対し、活性化した筋線維芽細胞型のHSCに多い**I型コラーゲンは腫瘍を促進した**。前がん段階では硬さの増加とTAZの活性化を介して、成立した腫瘍ではディスコイジンドメイン受容体1（DDR1）の活性化を介して働いていた。患者では、肝疾患の進行に伴ってサイトカイン産生型と筋線維芽細胞型のバランスが後者に傾くほど、HCCのリスクが高かった。慢性肝疾患の経過でHSCの亜集団構成が動くことが、HCCを防ぐ側から促す側への切り替わりと結びついている。",
    background:"HSCは線維化の主役として「活性化するかどうか」の軸で語られてきた。しかし線維化した肝では、HSC由来の細胞が一様ではないことがsingle-cell解析で見えはじめていた。もしHSCが機能の異なる亜集団に分かれているなら、「HSCを抑える」という介入のしかたは粗すぎることになる。どの亜集団が何を出し、それが周囲の細胞に何をしているのかを、集団ごとのメディエーターを除く形で確かめる必要があった。",
    achievements:[
      "マウスHCCモデルでHSCを遺伝学的に除去・活性化・抑制し、HSCが全体としては**腫瘍促進**に働くことを示した。",
      "マウスとヒトのHSCをsingle-cell RNA-seqで解析し、**静止期／サイトカイン産生型**と**活性化した筋線維芽細胞型**という機能の異なる亜集団を切り分けた。",
      "サイトカイン産生型に多い**HGFは肝細胞死とHCC発生を抑える**。亜集団ごとのメディエーターを遺伝学的に除いて因果を示した。",
      "筋線維芽細胞型に多い**I型コラーゲンは腫瘍を促進する**。前がん段階では硬さの増加とTAZ活性化を介し、成立した腫瘍ではDDR1を介して働く。",
      "患者で、肝疾患の進行に伴う**亜集団バランスの筋線維芽細胞型への傾き**がHCCリスクの高さと関連した。"
    ],
    limitations:[
      "因果の中心はマウスモデルで、ヒトでは亜集団バランスとリスクの関連（相関）にとどまる。",
      "主題は肝発がんであり、MASHの線維化そのものの進行を扱った論文ではない。線維化の文脈に持ち込むときは橋渡しが要る。",
      "亜集団の定義はsingle-cell解析の分割に依存する。別の解析条件で同じ2群に割れるかは自明ではない。",
      "I型コラーゲンの作用に硬さとDDR1という2つの経路が併走しており、寄与の比率は明示されていない。",
      "培養下のHSCは自発的に活性化するため、in vitroでこの2群を保ったまま扱えるかは別の問題になる。"
    ],
    connection:[
      "「HSCが活性化したか」という一軸の見方を崩す論文。この系で ACTA2/COL1A1 が低いまま IL1B が上がるという結果は、**活性化していない**のではなく**サイトカイン産生型に寄っている**という読み方ができる。",
      "読み出しを増やす具体的な指針になる。αSMA・COL1A1 だけでなく、**HGF など分泌因子側のマーカーを並べて比をとる**と、どちらの型に寄っているかが見える。",
      "H+AOA の「線維化マーカーが下がりながら IL1B が上がる」は、この2群の枠にそのまま当てはまる候補。No.59（老化HSC）と併せ、ECMを作らないHSCにも複数の状態があると整理できる。",
      "コラーゲンが硬さを介して周囲の細胞を動かすという経路は、この系のコラーゲンゲルが約100 Paと軟らかいことと直接つながる。ゲル剛性を上げる実験の読み出しの根拠になる。"
    ],
    glossary:[
      {term:"HSC亜集団", full:"hepatic stellate cell subpopulations", desc:"HSCは一様ではなく、筋線維芽細胞型とサイトカイン産生型に分かれる"},
      {term:"HGF", full:"hepatocyte growth factor", desc:"肝細胞増殖因子。サイトカイン産生型HSCに多く、肝細胞死とHCCを抑える"},
      {term:"DDR1", full:"discoidin domain receptor 1", desc:"コラーゲンを受け取る受容体型チロシンキナーゼ。成立した腫瘍での促進経路"},
      {term:"TAZ", full:"transcriptional coactivator with PDZ-binding motif (WWTR1)", desc:"硬さを受け取る転写共役因子。前がん段階の肝細胞で活性化する"},
      {term:"HCC", full:"hepatocellular carcinoma", desc:"肝細胞がん。多くは慢性肝疾患と進行した線維化を背景に生じる"},
      {term:"myofibroblastic HSC", full:"myofibroblastic hepatic stellate cell", desc:"活性化してI型コラーゲンを作る側の亜集団"},
      {term:"cytokine-producing HSC", full:"cytokine-producing hepatic stellate cell", desc:"ECMよりも分泌因子を出す側の亜集団。HGFなどを供給する"}
    ],
    struct:{
      model:"in vivo（マウス肝細胞がんモデル）＋ scRNA-seq（マウス・ヒトHSC）＋ ヒトコホートとの対応",
      cells:["肝星細胞(HSC)","肝細胞"],
      triggers:["慢性肝傷害による発がん","HSCの遺伝学的な除去・活性化・抑制","亜集団メディエーターの除去"],
      steatosis:"—（評価していない）",
      inflammation:"△（前がん環境の文脈で扱う）",
      fibrosis:"○",
      readout:["HSC亜集団の構成比","I型コラーゲン","HGF","肝の硬さとTAZ活性","DDR1活性","腫瘍の数と大きさ"],
      ignite:"点火の有無ではなく配分。筋線維芽細胞型に傾くほどコラーゲンと硬さで押し、サイトカイン産生型が残るほどHGFで守る",
      params:[
        {name:"亜集団の構成比", note:"筋線維芽細胞型／サイトカイン産生型の比。ABMではHSCの状態を2種類に分ける根拠になる"},
        {name:"I型コラーゲン→硬さ→TAZ", note:"ECMが力学を介して肝細胞を動かす経路。ゲル剛性のパラメータと直結する"},
        {name:"HGFの供給", note:"サイトカイン産生型から肝細胞への保護的な入力"}
      ],
      todos:[
        "この系のHSCで、ACTA2/COL1A1 と HGF などの分泌因子を同時に測り、どちらの型に寄っているか比で見る",
        "H+AOA条件の「線維化マーカー↓・IL1B↑」が、サイトカイン産生型への偏りで説明できるか検討する",
        "ゲル剛性を上げた条件で肝細胞側のTAZ（WWTR1）が動くかを見る（No.46と共通の読み出し）",
        "scRNA-seqをかける際、HSCを1クラスタにまとめず亜集団に割る前提で設計する"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f61' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>HSCはひとつの状態ではない——二つの型が逆向きに働く</text><rect x='14' y='48' width='150' height='96' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='89' y='70' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>single-cell解析</text><text x='89' y='89' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>マウスとヒトのHSC</text><text x='89' y='103' text-anchor='middle' font-size='8.3' fill='var(--G)'>亜集団に分かれる</text><path d='M166,84 L180,70' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f61)'/><path d='M166,108 L180,122' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f61)'/><rect x='186' y='34' width='172' height='74' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/><text x='272' y='54' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>サイトカイン産生型</text><text x='272' y='72' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>HGF を多く出す</text><text x='272' y='88' text-anchor='middle' font-size='8.3' fill='var(--A)'>肝細胞死とHCCを抑える</text><rect x='186' y='122' width='172' height='78' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='272' y='142' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>筋線維芽細胞型</text><text x='272' y='160' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>I型コラーゲンを作る</text><text x='272' y='176' text-anchor='middle' font-size='8.3' fill='var(--B)'>硬さ↑→TAZ、DDR1</text><text x='272' y='192' text-anchor='middle' font-size='8.3' fill='var(--B)'>腫瘍を促進する</text><path d='M360,71 L374,71' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f61)'/><path d='M360,161 L374,161' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f61)'/><rect x='380' y='34' width='120' height='74' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/><text x='440' y='62' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>守る側</text><text x='440' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>肝細胞を保護</text><rect x='380' y='122' width='120' height='78' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='440' y='152' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>押す側</text><text x='440' y='172' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>増殖と腫瘍形成</text><rect x='512' y='70' width='114' height='94' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='569' y='94' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>患者で</text><text x='569' y='114' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>進行につれ</text><text x='569' y='130' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>筋線維芽細胞型へ傾く</text><text x='569' y='148' text-anchor='middle' font-size='8.3' fill='var(--H)'>HCCリスク↑</text><text x='320' y='220' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>「活性化したか」ではなく「どちらの型に配分されているか」で読む</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m61' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：集団ごと動かす → 割る → メディエーターを除く → ヒトで照合</text><rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 集団を動かす</text><text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>HSCを除去/活性化/抑制</text><text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>全体では腫瘍促進</text><path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m61)'/><rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>② 割る</text><text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>single-cell RNA-seq</text><text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--G)'>マウスとヒトのHSC</text><path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m61)'/><rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>③ 除く</text><text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>亜集団のメディエーター</text><text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>HGF / I型コラーゲン</text><path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m61)'/><rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>④ 照合する</text><text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>患者の亜集団バランス</text><text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--H)'>HCCリスクと関連</text><text x='320' y='186' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>読み出し：亜集団の構成比・HGF・I型コラーゲン・肝の硬さとTAZ活性・DDR1活性・腫瘍形成</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("61", [{ic:"omics",cap:"single-cell RNA-seqでHSCを亜集団に割る"}, {ic:"stellate",cap:"筋線維芽細胞型とサイトカイン産生型に分かれる"}, {ic:"hepatocyte",cap:"肝細胞は硬さとTAZで押され、HGFで守られる"}, {ic:"human",cap:"患者では筋線維芽細胞型への傾きがHCCリスクと関連"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 61 Filliol/Schwabe Nature 2022: マウス遺伝学＋scRNA-seq（マウス・ヒト）＋ヒトコホート照合。
   遺伝学的な除去・ノックアウトを crispr（CRISPR/KO）に分類。 */
LP.methods("61", ["mouse","human","scrna","crispr"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №61 HSCの亜集団が逆向きに働く ===== */
LP.cinema("61", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("61","var(--B)")}</defs>`
    +GLYPH.title("HSCを割ると二つの型 → HGFは守り、I型コラーゲンは硬さとDDR1で押す")
    +GLYPH.hep("hep61",270,60,1.0,"肝細胞")
    +GLYPH.stellate("hsc61",120,250,"HSC（一様に見える）")
    +`<g id="cyto61" class="fade">`+GLYPH.stellate("hscC61",330,300,"サイトカイン産生型")+`</g>`
    +`<g id="myo61" class="fade">`+GLYPH.stellate("hscM61",330,390,"筋線維芽細胞型")+`</g>`
    +GLYPH.cytokine("hgf61",470,300,"HGF","var(--A)",true)
    +GLYPH.layer("col61")
    +GLYPH.tag("stiff61",560,250,"硬さ↑ → TAZ","var(--B)",108,true)
    +GLYPH.tag("ddr61",560,386,"DDR1","var(--B)",76,true)
    +GLYPH.badge("risk61",630,120,"患者で","HCCリスク↑","var(--H)"),
  build(K){
    return [
      {color:"G",t:3200,cap:"線維化した肝のHSCは、ひとまとまりの集団のように見える。まずはこれをsingle-cell解析にかける。",run(){
        K.T(()=>K.pulse("hsc61"),700);
      }},
      {color:"G",t:3800,cap:"① 割ってみると、HSCは機能の違う二つの型に分かれる。サイトカイン産生型と、活性化した筋線維芽細胞型。",run(){
        K.unpulse("hsc61");
        K.T(()=>K.show(["cyto61"]),600);
        K.T(()=>{K.show(["myo61"]);K.morph("hscM61Shape",GLYPH.SPINDLE);K.attr("hscM61Shape","fill","#b0432f");},1500);
      }},
      {color:"A",t:3800,cap:"② サイトカイン産生型はHGFを出す。これが肝細胞の死を抑え、がんの発生を抑える方向に働く。守る側。",run(){
        K.show(["hgf61"]);
        K.T(()=>K.flow(470,292,330,150,"var(--A)",{n:4,dur:1.3,loop:1}),800);
        K.T(()=>K.pulse("hgf61"),2200);
      }},
      {color:"B",t:4200,cap:"③ 筋線維芽細胞型はI型コラーゲンを作る。前がん段階では組織が硬くなり、肝細胞のTAZが活性化して増殖が進む。押す側。",run(){
        K.unpulse("hgf61");
        K.T(()=>K.draw("col61",GLYPH.collagenAt(450,390),{len:150}),500);
        K.T(()=>K.show(["stiff61"]),1700);
        K.T(()=>K.flow(560,240,320,150,"var(--B)",{n:4,dur:1.3,loop:1}),2400);
      }},
      {color:"B",t:3600,cap:"④ 成立した腫瘍では、同じI型コラーゲンがDDR1を介して働く。経路は変わるが、押す向きは変わらない。",run(){
        K.show(["ddr61"]);
        K.T(()=>K.pulse("ddr61"),900);
      }},
      {color:"H",t:3800,cap:"⑤ 患者では、肝疾患が進むほど筋線維芽細胞型に傾く。守る側から押す側への切り替わりが、HCCリスクの高さと結びついていた。",run(){
        K.unpulse("ddr61");
        K.T(()=>{K.attr("cyto61","opacity","0.3");K.attr("hgf61","opacity","0.2");},700);
        K.T(()=>K.show(["risk61"]),1700);
        K.T(()=>K.pulse("risk61"),2600);
      }}
    ];
  }
});
