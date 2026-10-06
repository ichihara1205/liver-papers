/* ============================================================
   №55 · Sci Adv 2026 · Cadavid JL, Meimetis N, Matsuzaki T, Tevonian EN, Griffith LG, Lauffenburger DA
   肝MPSのデータをヒト肝生検データへPCA射影・PLSRで突き合わせ、翻訳性を上げる培養条件を機械学習で提案する(LIV2TRANS)
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
    title:"肝MPSをin vivoにどう橋渡しするか——PLSRとPCA射影で翻訳性を測り『翻訳性を上げる培養条件』を機械学習で提案するLIV2TRANS",
    authors:"Cadavid JL, Meimetis N, Matsuzaki T, Tevonian EN, Griffith LG, Lauffenburger DA",
    journal:"Sci Adv",
    year:2026,
    vol:"12(38):eaef7756",
    doi:"10.1126/sciadv.aef7756",
    url:"https://doi.org/10.1126/sciadv.aef7756",
    tags:["F","A","G"],
    approach:"機械学習フレームワークLIV2TRANS（ヒト肝生検の遺伝子発現から組織学スコアを予測するPLSR［部分最小二乗回帰, 潜在変数8本］＋ MPS遺伝子発現空間のPCAにヒトデータを射影・逆射影［truncation］し、予測性能の低下から翻訳性を評価）＋ MASLDをケーススタディ ＋ 翻訳可能成分(TC)の同定とMPSに欠けた方向(LV Extra)の解析的導出 ＋ 確率的勾配法(Adam/PyTorch)による捕捉分散の最大化と重要経路のノミネート ＋ IFN-αの予測を三重培養スフェロイドで検証（BODIPY・α-SMA/vimentin免疫蛍光・bulk RNA-seq）",
    added:"2026-10-06",
    abstract_ja:"前臨床モデルは疾患や治療の研究に広く使われている。ヒト細胞を複数種組み込んだin vitroの単培養やmicrophysiological system（MPS, 臓器チップ）は病態組織を模せるが、どの実験条件（培地サプリメントなど）がヒト(in vivo)への翻訳性を最もよくするのかを決めるのは大きな難題だった。本研究はMASLDをケーススタディに、まずMPSの分子データをin vivoデータへ写像し、次に翻訳の勘所を明らかにし、最後に翻訳性を高める実験条件を提案する機械学習フレームワーク（LIV2TRANS＝Latent In Vitro to In Vivo Translation）を開発した。その結果、TGFβ（トランスフォーミング増殖因子β）がMPSの翻訳性にとって決定的な手がかりであることが浮かび上がり、インターフェロン介在のJAK（ヤヌスキナーゼ）-STAT（シグナル伝達兼転写活性化因子）シグナルの摂動を加えると、MPSのMASLDに対する予測性能が上がりうると示された。さらに最適化アルゴリズムが、このMPSが捉えるヒト関連情報を最大化する鍵となるシグナル経路を提示した。本研究は、ヒトに関連する分子プロセスを最もよく捉える実験条件を、数理的に原理立てて選ぶ方法を確立したもので、適切な分子データがある多様な疾患に一般化できる。",
    background:"創薬・病態研究では動物モデルやin vitro/MPSが使われるが、動物モデルは臨床への翻訳成功率が概ね10%程度にとどまり、種差による薬物毒性の予測失敗も起きる。ヒト細胞で組むMPSはこの種差を避けられると期待されるが、in vitroの結果がどれだけヒト(in vivo)を予測できるか——翻訳性(translatability)——は常に問題になる。MPSは細胞種・培地・刺激など設計自由度が高い反面、『どの条件にすればヒトを最もよく再現するか』を試行錯誤で決めており、原理的な指針がなかった。表現型を一対一で対応づける従来の発想にも限界があり、MASLDをケースに、翻訳性を定量して条件を設計する枠組みが求められていた。",
    achievements:[
      "**LIV2TRANSを開発**：ヒト肝生検の遺伝子発現から組織学スコア(MASスコア・線維化ステージ)を予測するPLSRモデルに、ヒトデータをMPSのPC空間へ射影・逆射影して通し、その際の予測性能の低下を翻訳性の指標とする。一対一のサンプル対応は要さず、条件提案までを一気通貫で行う機械学習枠組み。",
      "**TGFβがMPS翻訳性の決定的な手がかり**であることを同定（MASLDをヒトらしく再現するうえで重要なキュー）。",
      "**インターフェロン介在のJAK-STAT摂動(LV Extra)を加えると予測性能が上がりうる**と予測し、追加すべきシグナル条件を具体的に提示。この予測を三重培養スフェロイド（初代ヒト肝細胞:Kupffer細胞:HSC=10:1:1、アルギン酸ウェル、11日間、高脂肪・高糖・高インスリン培地）で検証し、IFN-α(1000 U/ml)の併用がTGFβ1誘導の表現型に拮抗して、脂質をさらに減らしα-SMAをほぼ基線まで戻すことを示した（BODIPY、α-SMA/vimentin免疫蛍光、bulk RNA-seq）。",
      "**最適化アルゴリズムが、ヒト関連情報を最大化する鍵経路をノミネート**。適切な分子データがあれば他疾患にも一般化できる原理的手法として提示。"
    ],
    limitations:[
      "IFN-α追加の予測は三重培養スフェロイドで検証されたが、**誘導された発現変化のLV Extra 1への射影は小さく**、IFN-α駆動のPC2にはLV Extra 1が要求するJAK-STATとp53が逆向きに動く特徴が見られず、**vimentin陽性面積の増加も残った**。他の欠けた手がかりとの併用や、用量・投与タイミングの実験的な決定が必要。",
      "MPSのPC空間への射影は**入力する分子データの質・網羅性・バッチ効果**と、**多様な培養条件のデータがあるか**に依存し、データが薄い系では精度が落ちる。",
      "MASLDをケースにしているが、**どのMPS/どの読み出し**かで結論が動きうる（特定プラットフォーム依存の可能性）。",
      "翻訳性の『正解』は、ヒト肝生検のbulk RNA-seq（Govaere。外部検証はHoang・Pantano）とその組織学スコアに置く。MASスコアと線維化ステージは**半定量的で粗い指標**であり、**コホートの代表性**という限界も残る。"
    ],
    connection:[
      "**自分のin vitro↔ABMの翻訳そのものに効く**。肝オープンオルガノイドの分子データを、ヒト肝生検データとPCA射影・PLSRで突き合わせ、『どの培養条件なら臨床スケールのMASH進行を予測できるか』を原理的に選べる。",
      "**線維化点火の条件探索**：TGFβが翻訳性の鍵という結果は、自分の『脂肪化は出るが線維化が出ない』課題と直結する。TGFβを主たる入力キューに据え、IFN-α/JAK-STATはMPSが取りこぼす疾患分散を補う追加キュー（TGFβ1誘導の表現型には拮抗する抗線維化的な手がかりで、著者は早期線維化の捕捉にIFN-α、進行線維化にはIFNを抑えたTGFβを提案）として使い分ける設計を、当てずっぽうでなくデータ駆動で正当化できる。",
      "**ABMとの接続**：LIV2TRANSが示す重要経路（TGFβ, JAK-STAT）を、自分のABMのパラメータ優先度（どのシグナルをルール化すべきか）の根拠にできる。感度解析の上流に置ける。",
      "**既収録との接続**：MPS論文の#04（iPSC統合型MPS）・#12（灌流マイクロ血管統合の肝MPS、同じLauffenburger系）・#48（iPSC由来4細胞の肝MPS・LEADS）や、in silico論文（テーマF）の#06（HSCのKappaベース多スケールモデル）・#15（患者特異的な仮想肝臓）と方法論的に補完。手法面では#56(EasySCP)などのオミクスが生む分子データを、本枠組みの入力として活かせる。"
    ],
    glossary:[
      {term:"LIV2TRANS",full:"Latent In Vitro to In Vivo Translation",desc:"ヒト肝生検データをMPSのPC空間に射影・逆射影したときのPLSR予測性能の損失から翻訳性を測り、上げる条件を提案する機械学習枠組み"},
      {term:"MPS",full:"microphysiological system",desc:"複数のヒト細胞を組み込んだ臓器チップ。病態組織を模すがin vivo翻訳性が課題"},
      {term:"translatability",full:"in vitro-to-in vivo translatability",desc:"in vitroの結果がヒト(in vivo)をどれだけ予測できるかの度合い。本研究が定量化"},
      {term:"PLSR/PCA",full:"partial least squares regression / principal component analysis",desc:"PLSRは遺伝子発現から組織学スコアを少数の潜在変数で予測する回帰。PCAはMPSの発現空間を主成分で表す。ヒトデータをこのPC空間に通して予測性能の損失を測る"},
      {term:"TGFβ",full:"transforming growth factor beta",desc:"線維化の中心サイトカイン。本研究でMPS翻訳性の決定的キューと同定"},
      {term:"JAK",full:"Janus kinase",desc:"サイトカイン受容体に結合しSTATをリン酸化するキナーゼ。IFNシグナルの中核"},
      {term:"STAT",full:"signal transducer and activator of transcription",desc:"JAKで活性化し核へ移る転写因子。IFN/JAK-STAT摂動が予測性能を上げうる"},
      {term:"interferon",full:"interferon (IFN)",desc:"JAK-STATを介する炎症/抗ウイルスサイトカイン。IFN-αはTGFβ1誘導の表現型に拮抗し、追加キューとして提案・検証された"}
    ],
    struct:{
      model:"in silico",
      cells:["（参照MPS）肝細胞・星細胞・マクロファージ（内皮細胞なし）","（検証スフェロイド）初代ヒト肝細胞:Kupffer細胞:HSC=10:1:1"],
      triggers:["(入力キュー)TGFβ","IFN-α/JAK-STAT摂動(追加キュー)","培地サプリ条件"],
      steatosis:"△", inflammation:"△", fibrosis:"△",
      readout:["射影後のPLSR予測性能の低下/回復(翻訳性)","重要経路のノミネート","提案された実験条件(培地/摂動)","スフェロイドのBODIPY脂質・α-SMA/vimentin・bulk RNA-seq"],
      ignite:"（計算枠組み）病態点火ではなく『翻訳性を上げる条件の設計』。TGFβが翻訳性の主要キューで、IFN-α/JAK-STATはMPSが取りこぼす疾患分散を補う追加キュー。スフェロイド検証ではIFN-αはTGFβ1誘導の表現型に拮抗した（抗線維化方向）。早期線維化の捕捉にはIFN-α、進行線維化にはIFNを抑えたTGFβが提案されている。",
      params:[
        {name:"入力キュー(TGFβ等) → in vivo翻訳性スコア",note:"条件→翻訳性の写像を最適化"},
        {name:"IFN/JAK-STAT摂動 → 予測性能の増分",note:"追加すべきシグナルを定量"}
      ],
      todos:[
        "自系の分子データをヒト肝生検データとPCA射影・PLSRで突き合わせ翻訳性を評価",
        "TGFβを主たる線維化点火キューとし、IFN-α/JAK-STATは抗線維化的な追加キュー（早期線維化の捕捉向け）として段階に応じ使い分ける設計をデータ駆動で検討",
        "LIV2TRANSの重要経路をABMパラメータ優先度の根拠に使う"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f55' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f55b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>LIV2TRANS：MPSのPC空間を通した予測性能の損失で翻訳性を測り、欠けた方向を補う条件を提案</text><rect x='16' y='52' width='120' height='70' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.4'/><text x='76' y='74' text-anchor='middle' font-size='10' fill='var(--A)' font-weight='600'>肝MPS</text><text x='76' y='92' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>分子データ(多条件)</text><text x='76' y='107' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→PCAでPC空間</text><rect x='16' y='138' width='120' height='64' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='76' y='158' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>ヒト肝生検</text><text x='76' y='175' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>PLSRで組織学スコア</text><text x='76' y='190' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>(MAS・線維化)を予測</text><ellipse cx='300' cy='120' rx='110' ry='78' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.6' stroke-dasharray='6 4'/><text x='300' y='58' text-anchor='middle' font-size='10' fill='var(--F)' font-weight='600'>MPSのPC空間</text><text x='300' y='88' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ヒトデータを射影→逆射影</text><text x='300' y='102' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>(truncation)</text><text x='300' y='126' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='600'>PLSR予測性能が低下</text><text x='300' y='140' text-anchor='middle' font-size='9' fill='var(--E)' font-weight='600'>＝翻訳性の損失</text><text x='300' y='170' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>＋LV Extraで回復</text><path d='M136,86 C180,86 196,110 192,116' fill='none' stroke='var(--accent)' marker-end='url(#f55)'/><path d='M136,168 C180,168 196,140 192,132' fill='none' stroke='var(--accent)' marker-end='url(#f55)'/><rect x='426' y='46' width='200' height='70' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='526' y='68' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>翻訳性の鍵キュー</text><text x='526' y='86' text-anchor='middle' font-size='9.5' fill='var(--B)'>TGFβ（決定的）</text><text x='526' y='102' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>＋ IFN-α/JAK-STAT(追加キュー)</text><rect x='426' y='126' width='200' height='76' rx='8' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='526' y='150' text-anchor='middle' font-size='10' fill='var(--F)' font-weight='600'>最適化→条件を提案</text><text x='526' y='168' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>翻訳性を最大化する</text><text x='526' y='183' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>培地/摂動・重要経路</text><path d='M410,100 L424,90' stroke='var(--B)' stroke-width='1.4' marker-end='url(#f55b)'/><path d='M410,140 L424,150' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f55)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m55' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>枠組みの流れ：射影 → 翻訳の勘所 → 条件提案（MASLDをケースに）</text><rect x='14' y='44' width='140' height='150' rx='8' fill='var(--paper-2)' stroke='var(--line-soft)'/><text x='84' y='62' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>入力データ</text><rect x='26' y='72' width='116' height='40' rx='6' fill='var(--paper)' stroke='var(--A)'/><text x='84' y='88' text-anchor='middle' font-size='9' fill='var(--A)'>肝MPS 多条件</text><text x='84' y='102' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>発現→PCA</text><rect x='26' y='120' width='116' height='40' rx='6' fill='var(--paper)' stroke='var(--E)'/><text x='84' y='136' text-anchor='middle' font-size='9' fill='var(--E)'>ヒト肝生検</text><text x='84' y='150' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>発現→PLSR</text><path d='M154,120 L186,120' stroke='var(--accent)' marker-end='url(#m55)'/><rect x='188' y='56' width='136' height='54' rx='7' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/><text x='256' y='76' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='600'>① 射影</text><text x='256' y='92' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>MPSのPC空間へ射影・逆射影</text><text x='256' y='104' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→予測性能の低下を測る</text><rect x='188' y='122' width='136' height='54' rx='7' fill='var(--paper-2)' stroke='var(--F)' stroke-width='1.4'/><text x='256' y='142' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='600'>② 翻訳の勘所</text><text x='256' y='158' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>何が翻訳性を決めるか</text><text x='256' y='170' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→TC解析でTGFβを同定</text><path d='M324,83 C344,83 348,110 360,114' fill='none' stroke='var(--accent)' marker-end='url(#m55)'/><path d='M324,149 C344,149 348,122 360,118' fill='none' stroke='var(--accent)' marker-end='url(#m55)'/><rect x='362' y='78' width='146' height='76' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='435' y='100' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>③ 条件提案</text><text x='435' y='118' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>欠けた方向LV Extraを導出</text><text x='435' y='132' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→IFN-α/JAK-STATを提案</text><text x='435' y='145' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>勾配法で重要経路を選ぶ</text><path d='M508,116 L534,116' stroke='var(--accent)' marker-end='url(#m55)'/><rect x='536' y='84' width='94' height='64' rx='7' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='583' y='110' text-anchor='middle' font-size='9.5' fill='var(--F)' font-weight='600'>翻訳性↑</text><text x='583' y='128' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>予測性能改善</text><text x='320' y='214' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>一般化：適切な分子データがある多様な疾患に適用可能</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("55", [{ic:"chip",cap:"肝MPS：多条件の分子データ"}, {ic:"silico",cap:"LIV2TRANS：PLSRとPCA射影で翻訳性を測る機械学習枠組み"}, {ic:"human",cap:"ヒト肝生検を参照に翻訳性を定量"}, {ic:"omics",cap:"分子プロファイルを入力"}, {ic:"drug",cap:"TGFβ・IFN/JAK-STATを条件として提案"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 55 Cadavid/Lauffenburger Sci Adv 2026: 機械学習(PLSR+PCA射影)+公開ヒトbulk RNA-seq/MPS発現データ(rnaseq)+三重培養スフェロイドでの検証(bulk RNA-seq, α-SMA/vimentin免疫蛍光=wb, BODIPY共焦点=imaging) */
LP.methods("55", ["insilico","invitro","human","rnaseq","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №55 MPSのPC空間を通した予測性能の損失で翻訳性を測り、欠けた方向で回復させる条件(TGFβ/JAK-STAT)を提案 ===== */
LP.cinema("55", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("55",'var(--F)')}${GLYPH.arrow("55b",'var(--B)')}</defs>`
    +GLYPH.title("MPSのPC空間を通した予測性能の損失で翻訳性を測り、欠けた方向(LV Extra)で回復する条件を提案")
    +`<rect id="mpsb55" x="60" y="100" width="110" height="60" rx="10" fill="none" stroke="var(--A)" stroke-width="2"/>`
    +`<text x="115" y="127" text-anchor="middle" font-size="10.5" fill="var(--A)">肝MPS</text>`
    +`<text x="115" y="145" text-anchor="middle" font-size="9" fill="var(--A)">発現→PCA</text>`
    +`<rect id="hmb55" x="60" y="250" width="110" height="60" rx="10" fill="none" stroke="var(--E)" stroke-width="2"/>`
    +`<text x="115" y="277" text-anchor="middle" font-size="10.5" fill="var(--E)">ヒト肝生検</text>`
    +`<text x="115" y="295" text-anchor="middle" font-size="9" fill="var(--E)">PLSRでスコア予測</text>`
    +`<ellipse cx="400" cy="205" rx="150" ry="105" fill="none" stroke="var(--F)" stroke-width="2" stroke-dasharray="7 5"/>`
    +`<text x="400" y="118" text-anchor="middle" font-size="11" fill="var(--F)">MPSのPC空間</text>`
    +`<circle id="iv55" cx="470" cy="245" r="10" fill="var(--E)"/>`
    +`<text x="470" y="270" text-anchor="middle" font-size="9" fill="var(--E)">ヒト試料</text>`
    +`<circle id="pj55" class="fade" cx="400" cy="195" r="10" fill="none" stroke="var(--E)" stroke-width="2.4" stroke-dasharray="4 3"/>`
    +GLYPH.gene("lvx55",400,155,"LV Extra","var(--F)",true)
    +GLYPH.gene("tgf55",630,175,"TGFβ","var(--B)",true)
    +GLYPH.gene("jak55",630,235,"JAK-STAT","var(--C)",true)
    +`<text x="605" y="302" text-anchor="middle" font-size="10" fill="var(--ink-soft)">PLSR予測性能</text>`
    +`<rect x="525" y="310" width="160" height="14" rx="4" fill="none" stroke="var(--ink-soft)" stroke-width="1.2"/>`
    +`<g id="gFull55" class="fade"><rect x="527" y="312" width="156" height="10" rx="3" fill="var(--E)"/><text x="605" y="342" text-anchor="middle" font-size="9.5" fill="var(--E)">ヒトデータそのまま</text></g>`
    +`<g id="gDrop55" class="fade"><rect x="527" y="312" width="80" height="10" rx="3" fill="var(--B)"/><text x="605" y="342" text-anchor="middle" font-size="9.5" fill="var(--B)">PC空間を通すと低下</text></g>`
    +`<g id="gRec55" class="fade"><rect x="527" y="312" width="132" height="10" rx="3" fill="var(--F)"/><text x="605" y="342" text-anchor="middle" font-size="9.5" fill="var(--F)">LV Extra追加で回復</text></g>`
    +GLYPH.badge("out55",400,360,"翻訳性↑","条件を提案","var(--F)"),
  build(K){
    return [
      {color:"A",t:3200,cap:"① 肝MPSの多条件の遺伝子発現からPCAでMPSのPC空間を作る。ヒト肝生検の発現からは組織学スコア(MASスコア・線維化)を予測するPLSRモデルを用意する。",run(){
        K.pulse("mpsb55");K.pulse("hmb55");K.pulse("iv55");
        K.T(()=>{K.show(["gFull55"]);},600);
      }},
      {color:"F",t:4400,cap:"② ヒトデータをMPSのPC空間へ射影し元へ逆射影(truncation)すると、MPSが捉えていない分散が削ぎ落とされ、PLSRの予測性能が下がる。この低下が『翻訳性の損失』で、一対一の対応付けは要しない。",run(){
        K.T(()=>{K.flow(115,280,470,245,"var(--E)",{n:2,dur:1.1,loop:2});},300);
        K.T(()=>{K.flow(470,245,400,195,"var(--F)",{n:2,dur:1.0,loop:2});},1500);
        K.T(()=>{K.show(["pj55"]);K.pulse("pj55");},2300);
        K.T(()=>{K.hide(["gFull55"]);K.show(["gDrop55"]);},3000);
      }},
      {color:"B",t:4000,cap:"③ 何が翻訳性を決めるかを解くと、TGFβが決定的な手がかりと分かる。IFN/JAK-STAT摂動の追加も効く。",run(){
        K.show(["tgf55"]);K.pulse("tgf55");
        K.T(()=>{K.show(["jak55"]);K.pulse("jak55");},1400);
      }},
      {color:"F",t:3800,cap:"④ MPSに欠けていた方向(LV Extra)を足すと、低下していた予測性能が回復する。IFN-α/JAK-STAT摂動がその候補で、鍵経路もノミネートされる。",run(){
        K.show(["lvx55"]);K.pulse("lvx55");
        K.T(()=>{K.hide(["gDrop55"]);K.show(["gRec55"]);},900);
        K.T(()=>{K.show(["out55"]);K.pulse("out55");},1800);
      }},
    ];
  }
});
