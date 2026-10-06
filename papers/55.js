/* ============================================================
   №55 · Sci Adv 2026 · Cadavid JL, Meimetis N, Matsuzaki T, Tevonian EN, Griffith LG, Lauffenburger DA
   MPS(肝チップ)のデータを潜在空間でin vivoに写像し、翻訳性を上げる培養条件を機械学習で提案する(LIV2TRANS)
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"55", primary:"F",
    title:"MPS(肝チップ)をin vivoにどう橋渡しするか——潜在空間で写像し『翻訳性を上げる培養条件』を機械学習で提案するLIV2TRANS",
    authors:"Cadavid JL, Meimetis N, Matsuzaki T, Tevonian EN, Griffith LG, Lauffenburger DA",
    journal:"Sci Adv",
    year:2026,
    vol:"12(38):eaef7756",
    doi:"10.1126/sciadv.aef7756",
    url:"https://doi.org/10.1126/sciadv.aef7756",
    tags:["F","A","G"],
    approach:"機械学習フレームワークLIV2TRANS（潜在変数モデル/オートエンコーダでMPSとin vivoの分子データを共通潜在空間に写像）＋ MASLDをケーススタディ ＋ 翻訳性を高める実験条件（培地サプリ・シグナル摂動）の同定 ＋ 最適化アルゴリズムによる重要経路のノミネート",
    added:"2026-10-06",
    abstract_ja:"前臨床モデルは疾患や治療の研究に広く使われている。ヒト細胞を複数種組み込んだin vitroの単培養やmicrophysiological system（MPS, 臓器チップ）は病態組織を模せるが、どの実験条件（培地サプリメントなど）がヒト(in vivo)への翻訳性を最もよくするのかを決めるのは大きな難題だった。本研究はMASLDをケーススタディに、まずMPSの分子データをin vivoデータへ写像し、次に翻訳の勘所を明らかにし、最後に翻訳性を高める実験条件を提案する機械学習フレームワーク（LIV2TRANS＝Latent In Vitro to In Vivo Translation）を開発した。その結果、TGFβ（トランスフォーミング増殖因子β）がMPSの翻訳性にとって決定的な手がかりであることが浮かび上がり、インターフェロン介在のJAK（ヤヌスキナーゼ）-STAT（シグナル伝達兼転写活性化因子）シグナルの摂動を加えると、MPSのMASLDに対する予測性能が上がりうると示された。さらに最適化アルゴリズムが、このMPSが捉えるヒト関連情報を最大化する鍵となるシグナル経路を提示した。本研究は、ヒトに関連する分子プロセスを最もよく捉える実験条件を、数理的に原理立てて選ぶ方法を確立したもので、適切な分子データがある多様な疾患に一般化できる。",
    background:"創薬・病態研究では動物モデルやin vitro/MPSが使われるが、in vitroの結果がどれだけヒト(in vivo)を予測できるか——翻訳性(translatability)——は常に問題になる。MPSは細胞種・培地・刺激など設計自由度が高い反面、『どの条件にすればヒトを最もよく再現するか』を試行錯誤で決めており、原理的な指針がなかった。MASLDはヒトと動物・in vitroで病態の出方が異なることで知られ、翻訳性を定量して条件を設計する枠組みが求められていた。",
    achievements:[
      "**LIV2TRANSを開発**：潜在変数モデルでMPSとin vivoの分子データを共通潜在空間に写像し、翻訳性を定量して条件提案までを一気通貫で行う機械学習枠組み。",
      "**TGFβがMPS翻訳性の決定的な手がかり**であることを同定（MASLDをヒトらしく再現するうえで重要なキュー）。",
      "**インターフェロン介在のJAK-STAT摂動を加えると予測性能が上がりうる**と予測し、追加すべきシグナル条件を具体的に提示。",
      "**最適化アルゴリズムが、ヒト関連情報を最大化する鍵経路をノミネート**。適切な分子データがあれば他疾患にも一般化できる原理的手法として提示。"
    ],
    limitations:[
      "**計算/データ駆動**で、提案された条件（TGFβ・IFN-JAK-STAT追加）の**前向き実験検証**は限定的。",
      "潜在空間への写像は**入力する分子データの質・網羅性・バッチ効果**に依存し、データが薄い系では精度が落ちる。",
      "MASLDをケースにしているが、**どのMPS/どの読み出し**かで結論が動きうる（特定プラットフォーム依存の可能性）。",
      "翻訳性の『正解』をin vivo（多くは動物やヒト断面データ）に置くため、**参照データ自体のヒト代表性**という根本的な限界が残る。"
    ],
    connection:[
      "**自分のin vitro↔ABMの翻訳そのものに効く**。肝オープンオルガノイドの分子データとin vivo/ヒトデータを潜在空間で突き合わせ、『どの培養条件なら臨床スケールのMASH進行を予測できるか』を原理的に選べる。",
      "**線維化点火の条件探索**：TGFβが翻訳性の鍵という結果は、自分の『脂肪化は出るが線維化が出ない』課題と直結する。TGFβ（＋IFN/JAK-STAT）を入力キューに加える設計を、当てずっぽうでなくデータ駆動で正当化できる。",
      "**ABMとの接続**：LIV2TRANSが示す重要経路（TGFβ, JAK-STAT）を、自分のABMのパラメータ優先度（どのシグナルをルール化すべきか）の根拠にできる。感度解析の上流に置ける。",
      "**既収録との接続**：#01系のMPS/臓器チップ論文や、ABM/in silico論文（テーマF）と方法論的に補完。手法面では#56(EasySCP)などのオミクスが生む分子データを、本枠組みの入力として活かせる。"
    ],
    glossary:[
      {term:"LIV2TRANS",full:"Latent In Vitro to In Vivo Translation",desc:"MPSとin vivoの分子データを潜在空間で写像し、翻訳性を上げる条件を提案する機械学習枠組み"},
      {term:"MPS",full:"microphysiological system",desc:"複数のヒト細胞を組み込んだ臓器チップ。病態組織を模すがin vivo翻訳性が課題"},
      {term:"translatability",full:"in vitro-to-in vivo translatability",desc:"in vitroの結果がヒト(in vivo)をどれだけ予測できるかの度合い。本研究が定量化"},
      {term:"latent variable model",full:"latent variable / autoencoder model",desc:"高次元の分子データを低次元の潜在空間に圧縮して系を突き合わせる統計/ML手法"},
      {term:"TGFβ",full:"transforming growth factor beta",desc:"線維化の中心サイトカイン。本研究でMPS翻訳性の決定的キューと同定"},
      {term:"JAK",full:"Janus kinase",desc:"サイトカイン受容体に結合しSTATをリン酸化するキナーゼ。IFNシグナルの中核"},
      {term:"STAT",full:"signal transducer and activator of transcription",desc:"JAKで活性化し核へ移る転写因子。IFN/JAK-STAT摂動が予測性能を上げうる"},
      {term:"interferon",full:"interferon (IFN)",desc:"JAK-STATを介する炎症/抗ウイルスサイトカイン。摂動条件として追加が提案された"}
    ],
    struct:{
      model:"in silico",
      cells:["（MPS内）ヒト肝細胞","HSC","免疫細胞"],
      triggers:["(入力キュー)TGFβ","IFN/JAK-STAT摂動","培地サプリ条件"],
      steatosis:"—", inflammation:"△", fibrosis:"△",
      readout:["潜在空間での写像誤差/翻訳性スコア","重要経路のノミネート","提案された実験条件(培地/摂動)"],
      ignite:"（計算枠組み）病態点火ではなく『翻訳性を上げる条件の設計』。TGFβとIFN/JAK-STATが線維化方向の鍵キューとして提案される。",
      params:[
        {name:"入力キュー(TGFβ等) → in vivo翻訳性スコア",note:"条件→翻訳性の写像を最適化"},
        {name:"IFN/JAK-STAT摂動 → 予測性能の増分",note:"追加すべきシグナルを定量"}
      ],
      todos:[
        "自系の分子データをin vivo/ヒトと潜在空間で突き合わせ翻訳性を評価",
        "TGFβ(＋IFN/JAK-STAT)を線維化点火の入力キューとしてデータ駆動で設計",
        "LIV2TRANSの重要経路をABMパラメータ優先度の根拠に使う"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f55' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f55b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>LIV2TRANS：MPSとin vivoを潜在空間で写像→翻訳性を上げる条件を提案</text><rect x='16' y='52' width='120' height='70' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.4'/><text x='76' y='74' text-anchor='middle' font-size='10' fill='var(--A)' font-weight='600'>MPS(肝チップ)</text><text x='76' y='92' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>分子データ</text><text x='76' y='107' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>(多条件)</text><rect x='16' y='138' width='120' height='64' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='76' y='162' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>in vivo / ヒト</text><text x='76' y='180' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>参照データ</text><ellipse cx='300' cy='120' rx='110' ry='78' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.6' stroke-dasharray='6 4'/><text x='300' y='58' text-anchor='middle' font-size='10' fill='var(--F)' font-weight='600'>潜在空間</text><circle cx='268' cy='112' r='6' fill='var(--A)'/><circle cx='284' cy='128' r='6' fill='var(--A)'/><circle cx='300' cy='104' r='6' fill='var(--A)'/><circle cx='316' cy='130' r='6' fill='var(--E)'/><circle cx='330' cy='112' r='6' fill='var(--E)'/><circle cx='300' cy='148' r='6' fill='var(--E)'/><text x='300' y='180' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>MPS点↔in vivo点を近づける</text><path d='M136,86 C180,86 196,110 192,116' fill='none' stroke='var(--accent)' marker-end='url(#f55)'/><path d='M136,168 C180,168 196,140 192,132' fill='none' stroke='var(--accent)' marker-end='url(#f55)'/><rect x='426' y='46' width='200' height='70' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='526' y='68' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>翻訳性の鍵キュー</text><text x='526' y='86' text-anchor='middle' font-size='9.5' fill='var(--B)'>TGFβ（決定的）</text><text x='526' y='102' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>＋ IFN/JAK-STAT摂動</text><rect x='426' y='126' width='200' height='76' rx='8' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='526' y='150' text-anchor='middle' font-size='10' fill='var(--F)' font-weight='600'>最適化→条件を提案</text><text x='526' y='168' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>翻訳性を最大化する</text><text x='526' y='183' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>培地/摂動・重要経路</text><path d='M410,100 L424,90' stroke='var(--B)' stroke-width='1.4' marker-end='url(#f55b)'/><path d='M410,140 L424,150' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f55)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m55' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>枠組みの流れ：写像 → 翻訳の勘所 → 条件提案（MASLDをケースに）</text><rect x='14' y='44' width='140' height='150' rx='8' fill='var(--paper-2)' stroke='var(--line-soft)'/><text x='84' y='62' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>入力データ</text><rect x='26' y='72' width='116' height='40' rx='6' fill='var(--paper)' stroke='var(--A)'/><text x='84' y='88' text-anchor='middle' font-size='9' fill='var(--A)'>MPS 多条件</text><text x='84' y='102' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>分子プロファイル</text><rect x='26' y='120' width='116' height='40' rx='6' fill='var(--paper)' stroke='var(--E)'/><text x='84' y='136' text-anchor='middle' font-size='9' fill='var(--E)'>in vivo/ヒト</text><text x='84' y='150' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>参照</text><path d='M154,120 L186,120' stroke='var(--accent)' marker-end='url(#m55)'/><rect x='188' y='56' width='136' height='54' rx='7' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/><text x='256' y='76' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='600'>① 写像</text><text x='256' y='92' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>潜在変数モデルで</text><text x='256' y='104' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>共通潜在空間へ</text><rect x='188' y='122' width='136' height='54' rx='7' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/><text x='256' y='142' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='600'>② 翻訳の勘所</text><text x='256' y='158' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>何が翻訳性を決めるか</text><text x='256' y='170' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→TGFβを同定</text><path d='M324,83 C344,83 348,110 360,114' fill='none' stroke='var(--accent)' marker-end='url(#m55)'/><path d='M324,149 C344,149 348,122 360,118' fill='none' stroke='var(--accent)' marker-end='url(#m55)'/><rect x='362' y='78' width='146' height='76' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='435' y='100' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>③ 条件提案</text><text x='435' y='118' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>IFN/JAK-STAT摂動を追加</text><text x='435' y='132' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>最適化で重要経路を</text><text x='435' y='145' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ノミネート</text><path d='M508,116 L534,116' stroke='var(--accent)' marker-end='url(#m55)'/><rect x='536' y='84' width='94' height='64' rx='7' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='583' y='110' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='600'>翻訳性↑</text><text x='583' y='128' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>予測性能改善</text><text x='320' y='214' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>一般化：適切な分子データがある多様な疾患に適用可能</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("55", [{ic:"chip",cap:"MPS(肝チップ)：多条件の分子データ"}, {ic:"silico",cap:"LIV2TRANS：潜在空間で写像する機械学習枠組み"}, {ic:"human",cap:"in vivo/ヒトを参照に翻訳性を定量"}, {ic:"omics",cap:"分子プロファイルを入力"}, {ic:"drug",cap:"TGFβ・IFN/JAK-STATを条件として提案"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 55 Cadavid/Lauffenburger Sci Adv 2026: 機械学習(潜在変数モデル)+MPS/in vivo分子データ写像+最適化 */
LP.methods("55", ["insilico","invitro","human"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №55 MPSとin vivoを潜在空間で近づけ、翻訳性を上げる条件(TGFβ/JAK-STAT)を提案 ===== */
LP.cinema("55", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("55",'var(--F)')}${GLYPH.arrow("55b",'var(--B)')}</defs>`
    +GLYPH.title("MPSとin vivoの分子データを潜在空間で写像→翻訳性を定量→上げる条件(TGFβ/JAK-STAT)を提案")
    +`<rect x="60" y="100" width="110" height="60" rx="10" fill="none" stroke="var(--A)" stroke-width="2"/>`
    +`<text x="115" y="135" text-anchor="middle" font-size="10.5" fill="var(--A)">MPS(肝チップ)</text>`
    +`<rect x="60" y="250" width="110" height="60" rx="10" fill="none" stroke="var(--E)" stroke-width="2"/>`
    +`<text x="115" y="285" text-anchor="middle" font-size="10.5" fill="var(--E)">in vivo/ヒト</text>`
    +`<ellipse cx="400" cy="205" rx="150" ry="105" fill="none" stroke="var(--F)" stroke-width="2" stroke-dasharray="7 5"/>`
    +`<text x="400" y="118" text-anchor="middle" font-size="11" fill="var(--F)">潜在空間</text>`
    +`<circle id="mp55" cx="330" cy="175" r="10" fill="var(--A)"/>`
    +`<circle id="iv55" cx="470" cy="245" r="10" fill="var(--E)"/>`
    +GLYPH.gene("tgf55",630,175,"TGFβ","var(--B)",true)
    +GLYPH.gene("jak55",630,235,"JAK-STAT","var(--C)",true)
    +GLYPH.badge("out55",400,360,"翻訳性↑","条件を提案","var(--F)"),
  build(K){
    return [
      {color:"A",t:2800,cap:"① MPS(肝チップ)の多条件の分子データと、in vivo/ヒトの参照データを用意する。",run(){
        K.pulse("mp55");K.pulse("iv55");
      }},
      {color:"F",t:3800,cap:"② 潜在変数モデルで両者を共通の潜在空間へ写像する。いまはMPS点とin vivo点が離れている＝翻訳性が低い。",run(){
        K.T(()=>{K.flow(115,130,330,175,"var(--A)",{n:2,dur:1.1,loop:2});},300);
        K.T(()=>{K.flow(115,280,470,245,"var(--E)",{n:2,dur:1.1,loop:2});},300);
        K.T(()=>{K.markX(400,210,"var(--B)");},2200);
      }},
      {color:"B",t:4000,cap:"③ 何が翻訳性を決めるかを解くと、TGFβが決定的な手がかりと分かる。IFN/JAK-STAT摂動の追加も効く。",run(){
        K.show(["tgf55"]);K.pulse("tgf55");
        K.T(()=>{K.show(["jak55"]);K.pulse("jak55");},1400);
      }},
      {color:"F",t:3600,cap:"④ 提案条件を入れるとMPS点がin vivo点に近づく——翻訳性が上がり、鍵経路もノミネートされる。",run(){
        K.move("mp55",0,0,120,60,1.4);
        K.T(()=>{K.show(["out55"]);K.pulse("out55");},1500);
      }},
    ];
  }
});
