/* ============================================================
   №18 · Nature Communications 2026 · Sun L, Zhang Y, Niu Y, Yang H, …, Du Y（責任著者, Tsinghua University）
   5細胞種hESC由来マルチリネージ肝オルガノイド(3D MLHO)で間接的肝毒性を解明：imipramineがHSCのTrkBを介し毒性エクソソーム(miR-34a-3p)で肝細胞をアポトーシスさせる
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"18",
    title:"5細胞種hESC由来マルチリネージ肝オルガノイド(3D MLHO)で間接的肝毒性を解明：imipramineがHSCのTrkBを介し毒性エクソソーム(miR-34a-3p)で肝細胞をアポトーシスさせる",
    authors:"Sun L, Zhang Y, Niu Y, Yang H, …, Du Y（責任著者, Tsinghua University）",
    journal:"Nature Communications",
    year:2026,
    vol:"17:2926",
    doi:"10.1038/s41467-026-69548-0",
    url:"https://www.nature.com/articles/s41467-026-69548-0",
    primary:"A",
    tags:["A","I","C","H"],
    approach:"in vitro（hESC由来5細胞種＝肝細胞HEPs・胆管細胞CHO・HSC・内皮EC・Kupffer細胞KCを比率制御で集合させた3D MLHO）＋ 58薬剤スクリーニング ＋ scRNA-seq/scRank in silico摂動 ＋ エクソソーム解析（NTA/TEM/miRNA） ＋ in vivo（imipramine長期経口投与マウス）",
    added:"2026-06-03",
    abstract_ja:"間接的肝毒性（indirect hepatotoxicity）は、薬剤が肝細胞を直接傷つけるのではなく細胞間相互作用を介して肝障害を起こす型で、評価ツールも機序理解も乏しいため創薬上の難題であり続けてきた。本研究はヒト胚性幹細胞（hESC）から肝細胞（HEPs）・胆管細胞（CHO）・肝星細胞（HSC）・内皮細胞（EC）・Kupffer細胞（KC）の5細胞種を分化させ、肝に近い比率（HEP 60％、他4種を各10％）で集合させた三次元マルチリネージ肝オルガノイド（3D MLHO）を構築した。3D MLHOは2D/3Dの肝細胞単独培養よりヒト肝組織に近い遺伝子発現（相関0.8）・高いCYP活性・アルブミン/尿素/脂質/グリコーゲン合成能を示し、LPS刺激に対しIL-1β/IL-6/TNF-αを強く分泌する免疫応答能も備えていた。58薬剤のスクリーニングで感度82.4％・特異度75％を達成し、肝細胞単独では毒性が出ないのに3D MLHOでのみ強い毒性を示す薬として三環系抗うつ薬imipramine（IMP）を同定した。機序解析の結果、IMPは肝細胞ではなくHSCに高発現する神経栄養因子受容体TrkB（NTRK2、IMPの既報の結合標的）に作用し、HSC内でp53/hnRNPA2B1/DGCR8経路を活性化してmiR-34a-3pをHSC由来エクソソームに選択的に濃縮させる（エクソソームの総量・サイズは不変で、積荷の組成だけが変わる『毒性エクソソーム化』）。この毒性エクソソームが肝細胞に取り込まれ、運ばれたmiR-34a-3pが抗アポトーシスタンパクXIAPを抑制してcaspase3を活性化し、肝細胞をアポトーシスへ導く。マウスにIMPを長期経口投与すると、まずHSCがアポトーシスし、遅れて肝細胞のmiR-34a-3pとアポトーシスが上昇する一方でp53は肝細胞では変化せず、TrkBノックダウン・エクソソーム阻害薬GW4869・antagomiR-34のいずれもがALT/AST上昇とcaspase3陽性域を軽減した。以上から本研究は、非実質細胞を含む生体模倣オルガノイドが間接的肝毒性の予測と機序解明に有効であること、そしてTrkB–miR-34a-3p–XIAP軸という細胞間コミュニケーションを介した新しいDILI機序を提示した。",
    background:"薬剤性肝障害（drug-induced liver injury; DILI）は直接型・特異体質型（idiosyncratic）・間接型に大別される。直接型は薬剤そのものの用量依存的な肝細胞毒性（例：アセトアミノフェン）で従来モデルでも捉えやすい一方、間接型は免疫活性化や細胞間シグナルの撹乱を介して肝障害を起こすため、肝細胞だけを見るアッセイでは見落とされやすい。これまでの肝オルガノイドの多くはKupffer細胞・内皮細胞・胆管細胞・HSCといった非実質細胞を欠いており、肝の微小環境や細胞間クロストークを再現できず、薬剤の毒性を『肝細胞への直接作用』としてしか評価できなかった。しかし細胞間シグナルの担い手としてエクソソーム（径100〜150 nmの細胞外小胞）が注目され、ドナー細胞が積み込んだmiRNAやタンパクがレシピエント細胞の遺伝子発現と運命を変えうることが分かってきた。そこで、複数の非実質細胞を含む生体模倣オルガノイドを作って間接的肝毒性を再現し、その分子機序——特にどの細胞が起点となり何を介して肝細胞を傷つけるのか——を解くことが課題となっていた。",
    achievements:[
      "hESCから**5細胞種（HEPs・CHO・HSC・EC・KC）**を分化・FACS精製し、肝に近い比率で集合させた**3D MLHO**を構築。35日間にわたり球状構造・アルブミン分泌・生存率を維持し、CK19+胆管様管腔やCD31+血管様構造の形成も確認した。",
      "3D MLHOは肝細胞単独培養よりヒト肝組織に近い**転写プロファイル（相関0.8）**を示し、CYP3A4/CYP1A2/CYP2C9活性は2D比で約6倍・アルブミン/尿素/脂質/グリコーゲン合成能も上回り、**LPS刺激でIL-1β/IL-6/TNF-α**を強く分泌する免疫応答能を備えた。",
      "**58薬剤のスクリーニング**で感度82.4％・特異度75％を達成。肝細胞単独では無毒なのに3D MLHOでのみ強毒性を示す薬として三環系抗うつ薬**imipramine（IMP）**を同定し、間接的肝毒性のモデル化に成功した。",
      "IMPは肝細胞ではなく**HSCに高発現するTrkB（NTRK2、IMPの既報の結合標的）**に作用し、HSC内で**p53/hnRNPA2B1/DGCR8**経路を起動して**miR-34a-3p**をHSC由来エクソソームに選択的に濃縮（総量・サイズは不変＝**毒性エクソソーム化**）。TrkBノックダウンやscRank in silico摂動でもHSCが最応答性細胞と裏づけられた。",
      "毒性エクソソームが肝細胞に取り込まれ、miR-34a-3pが抗アポトーシスタンパク**XIAP**を直接標的に抑制→**caspase3**活性化→肝細胞アポトーシスを誘導することを、ルシフェラーゼレポーター・p53過剰発現/ノックダウンで実証した。",
      "**in vivo**でIMP長期経口投与マウスは、まずHSCがアポトーシスし遅れて肝細胞のmiR-34a-3pとアポトーシスが上昇（肝細胞のp53は不変）。TrkB-KD・**GW4869**・**antagomiR-34**のいずれもALT/AST上昇とcleaved caspase3陽性域・TUNEL+肝細胞を軽減し、機序を裏づけた。"
    ],
    limitations:[
      "深く解いた間接的肝毒性は**IMP 1薬剤**のTrkB–miR-34a-3p–XIAP軸が中心で、スクリーニングで挙がった他6薬剤や他の間接機序（免疫介在・代謝物毒性）への一般性は限定的。",
      "オルガノイドは**hESC由来分化細胞**で、各細胞の成熟度・比率は生体と完全には一致せず、灌流血流やzonation・線維化アウトカムは評価対象外。HSCは静止期様で、活性化・線維化の点火は扱っていない。",
      "in vivoはマウス35日の**亜致死的**肝ストレスで死亡例はなく、ヒトでのIMP肝障害（しばしば胆汁うっ滞型）との対応や臨床用量での頻度は未検証。種差も残る。",
      "miR-34a-3p–XIAPを主軸に据えるが、毒性エクソソームには他の積荷（miR-200b-3p等の候補や蛋白）も含まれうるため、単一miRNAの寄与と他因子の相対重みは完全には切り分けられていない。"
    ],
    connection:[
      "私の系（酸素透過膜上に肝細胞＋HSC＋LSEC＋KCを階層共培養した肝オープンオルガノイド）と最も近い『多細胞構成オルガノイドで肝細胞単独では見えない病態を出す』思想の論文。5細胞比率（HEP60％/他10％ずつ）・FACS精製・PEG/PDMS低接着集合という構築レシピは、自系の細胞比率・配置設計の具体的な比較対象になる。",
      "『非実質細胞起点→分泌因子→肝細胞』という間接経路の好例。私の最重要課題（steatosisは出るがfibrosisをどう点火するか）に対し、本論文は線維化ではなくアポトーシス方向だが、HSCを起点に据えエクソソーム/miRNAという伝令で肝細胞表現型を変える枠組みは、KCのLPSセカンドヒット（#16のapHC蓄積、#13 caspase-8→Meteorin）と同じ『細胞間伝令で病態を点火する』系譜に位置づく。",
      "エクソソーム/EVを共培養の新しい読み出し・操作点として導入できる。培養上清からのエクソソーム単離（NTA/TEM/CD9・TSG101）とmiRNA定量を非破壊リードアウトに採用し、HSC由来EVが肝細胞アポトーシス/活性化に効くかを自系で検証できる。GW4869によるEV遮断、antagomiRによるmiRNA中和はネガコン操作に使える。",
      "創薬・毒性予測プラットフォームとしての位置づけが私の最終目標（臨床スケール予測）と重なる。58薬剤・感度/特異度という定量評価の枠組み、scRankによる『どの細胞が薬剤標的に最も応答するか』のin silico予測は、私のABM（細胞個別動態→臨床スケール予測）に統合できる。#15（多スケールCFD DILI予測）・#04（iPSC-MPSでのMASLD発症）と並ぶ、テーマA/I/Fの橋渡し論文。",
      "ABM実装：HSCエージェントに『TrkB受容体量→IMP結合→p53/DGCR8経路→miR-34a-3p搭載エクソソーム分泌速度』のルールを、肝細胞エージェントに『エクソソーム取り込み→XIAP低下→caspase3活性化→アポトーシス確率』のルールを持たせれば、分泌—取り込み—表現型変化という細胞間伝令を確率遷移で表現できる。#06（HSC状態モデル）や#13/#16の点火経路と同じ伝令フレームに、エクソソーム媒介という新しいチャネルを追加できる。"
    ],
    struct:{
      model:"mixed",
      cells:["肝細胞(HEPs)","胆管細胞(CHO)","HSC","内皮細胞(EC)","Kupffer細胞(KC)"],
      triggers:["imipramine(IMP)曝露","HSCのTrkB(NTRK2)結合","p53/hnRNPA2B1/DGCR8活性化","毒性エクソソーム(miR-34a-3p)分泌"],
      steatosis:"—",
      inflammation:"△",
      fibrosis:"—",
      readout:["細胞生存率(CellTiter-Glo)","Annexin V/PIアポトーシス","cleaved caspase3/XIAP発現","エクソソームmiR-34a-3p量(NTA/qPCR)","血清ALT/AST・TUNEL(in vivo)"],
      ignite:"間接的肝毒性の点火＝IMPがHSCのTrkBに結合→p53/DGCR8でmiR-34a-3pをエクソソームに濃縮→肝細胞XIAP抑制→caspase3でアポトーシス（肝細胞への直接毒性なし）",
      params:[
        {name:"細胞種比率",note:"HEP 60％・CHO/HSC/EC/KC 各10％（総3.0×10⁴/well）で集合。自系の比率設計の比較対象"},
        {name:"TrkB→p53→miR-34a-3p搭載",note:"HSCエージェント：TrkB受容体量に依存してIMP結合→p53/hnRNPA2B1/DGCR8→miR-34a-3p搭載エクソソーム分泌速度を決める"},
        {name:"エクソソーム取り込み→XIAP低下",note:"肝細胞エージェント：取り込んだmiR-34a-3p量に応じXIAP低下→caspase3活性化→アポトーシス確率上昇（CD9遮断で取り込み低下）"},
        {name:"エクソソーム総量不変・積荷可変",note:"IMPは分泌量/サイズを変えず積荷組成のみ変える（RAB27a/b・SIRT1不変）。量ではなく『質』のパラメータ化が必要"},
        {name:"介入イベント",note:"GW4869=エクソソーム生合成遮断、antagomiR-34=miRNA中和、TrkB-KD=起点遮断。各々を毒性低下イベントとして実装可"}
      ],
      todos:[
        "自系の共培養上清からHSC由来エクソソームを単離(NTA/CD9・TSG101)し、肝細胞アポトーシス/活性化への作用を検証",
        "GW4869でEVを遮断し、HSC↔肝細胞のクロストークがEV依存か（必要条件）を切り分け",
        "miR-34a-3p/XIAP/caspase3を共培養の非破壊リードアウトに採用し経時測定",
        "細胞種比率(HEP60/他10ずつ)を自系の階層共培養比率と比較し肝機能・薬剤応答の差を評価",
        "エクソソーム媒介の伝令チャネルをABMに実装（搭載→取り込み→XIAP→caspase3の確率遷移）"
      ]
    },
    figure:`<svg viewBox='0 0 640 380' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='ar18' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>
    <marker id='ar18c' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='380' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>imipramine→HSCのTrkB→毒性エクソソーム(miR-34a-3p)→肝細胞XIAP↓→caspase3→アポトーシス</text>
  <text x='95' y='52' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>imipramine(IMP)</text>
  <rect x='55' y='58' width='80' height='22' rx='11' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/>
  <text x='95' y='73' text-anchor='middle' font-size='9.5' fill='var(--ink)'>IMP</text>
  <path d='M95,80 L95,118' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar18)'/>
  <!-- HSC -->
  <path d='M95,170 L120,140 L104,164 L142,168 L106,178 L122,210 L96,182 L70,210 L86,178 L50,168 L88,164 L72,140 Z' fill='#d6a08e' stroke='var(--B)' stroke-width='1.6'/>
  <circle cx='96' cy='173' r='7' fill='#7a3a2c'/>
  <text x='96' y='232' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>肝星細胞(HSC)</text>
  <text x='150' y='122' text-anchor='middle' font-size='8.5' fill='var(--B)'>TrkB(NTRK2)</text>
  <text x='96' y='258' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>p53/hnRNPA2B1/DGCR8↑</text>
  <text x='96' y='272' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>(HSC自身もアポトーシス)</text>
  <!-- exosome -->
  <path d='M156,173 L250,173' stroke='var(--C)' stroke-width='1.6' marker-end='url(#ar18c)'/>
  <circle cx='300' cy='173' r='26' fill='none' stroke='var(--C)' stroke-width='2'/>
  <circle cx='292' cy='168' r='4' fill='var(--C)'/><circle cx='306' cy='178' r='4' fill='var(--C)'/><circle cx='300' cy='162' r='3.5' fill='var(--C)'/>
  <text x='300' y='138' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>毒性エクソソーム</text>
  <text x='300' y='210' text-anchor='middle' font-size='8.5' fill='var(--C)'>miR-34a-3p濃縮</text>
  <text x='300' y='223' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>(総量・サイズ不変)</text>
  <path d='M326,173 L420,173' stroke='var(--C)' stroke-width='1.6' marker-end='url(#ar18c)'/>
  <text x='373' y='165' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>取り込み(CD9)</text>
  <!-- hepatocyte -->
  <ellipse cx='510' cy='175' rx='66' ry='52' fill='url(#hepg)' stroke='#c2a268' stroke-width='2'/>
  <ellipse cx='488' cy='162' rx='16' ry='13' fill='#b79a64'/>
  <text x='510' y='110' text-anchor='middle' font-size='9.5' fill='#9c7b3a' font-weight='600'>肝細胞(HEPs)</text>
  <text x='510' y='176' text-anchor='middle' font-size='8.5' fill='var(--B)' font-weight='600'>XIAP↓</text>
  <text x='510' y='190' text-anchor='middle' font-size='8.5' fill='var(--B)' font-weight='600'>caspase3↑</text>
  <text x='510' y='245' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>アポトーシス</text>
  <!-- bottom: blocked by interventions -->
  <text x='320' y='312' text-anchor='middle' font-size='9.5' fill='var(--H)' font-weight='600'>遮断点：TrkB-KD ／ GW4869(エクソソーム阻害) ／ antagomiR-34</text>
  <text x='320' y='332' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ いずれもALT/AST・cleaved caspase3・TUNEL+肝細胞を軽減（in vivoで確認）</text>
  <text x='320' y='356' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>※肝細胞への直接毒性はなく、HSC起点の細胞間伝令による間接的肝毒性</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 360' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs><marker id='m18' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs>
  <rect x='0' y='0' width='640' height='360' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>実験デザイン：hESC→5細胞→3D MLHO→58薬剤スクリーニング→機序→in vivo</text>
  <!-- hESC -->
  <circle cx='70' cy='90' r='26' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.6'/>
  <text x='70' y='94' text-anchor='middle' font-size='9' fill='var(--ink)'>hESC</text>
  <path d='M98,90 L138,90' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m18)'/>
  <!-- 5 cell types -->
  <text x='200' y='44' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>5細胞種に分化・FACS精製</text>
  <ellipse cx='160' cy='70' rx='15' ry='12' fill='url(#hepg)' stroke='#c2a268' stroke-width='1.2'/><text x='160' y='92' text-anchor='middle' font-size='7.5' fill='#9c7b3a'>HEP</text>
  <circle cx='200' cy='70' r='12' fill='#d3e6f0' stroke='var(--E)' stroke-width='1.2'/><text x='200' y='92' text-anchor='middle' font-size='7.5' fill='var(--E)'>EC</text>
  <circle cx='240' cy='70' r='12' fill='#5d6470' stroke='#828a96' stroke-width='1.2'/><text x='240' y='92' text-anchor='middle' font-size='7.5' fill='var(--ink-soft)'>KC</text>
  <path d='M160,118 L160,108 L153,116 L168,116 Z' fill='#d6a08e' stroke='var(--B)' stroke-width='1'/><text x='160' y='134' text-anchor='middle' font-size='7.5' fill='var(--B)'>HSC</text>
  <rect x='190' y='106' width='20' height='14' rx='4' fill='#cdbfe0' stroke='#8a78b0' stroke-width='1.2'/><text x='200' y='134' text-anchor='middle' font-size='7.5' fill='#6a5a92'>CHO</text>
  <path d='M255,100 L290,100' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m18)'/>
  <!-- MLHO spheroid -->
  <circle cx='340' cy='100' r='34' fill='#e8d9b8' stroke='#c2a268' stroke-width='2'/>
  <circle cx='328' cy='92' r='7' fill='url(#hepg)'/><circle cx='352' cy='90' r='6' fill='#5d6470'/><circle cx='344' cy='112' r='6' fill='#d3e6f0'/><circle cx='326' cy='110' r='5' fill='#d6a08e'/><circle cx='356' cy='108' r='5' fill='#cdbfe0'/>
  <text x='340' y='150' text-anchor='middle' font-size='8.5' fill='var(--ink)'>3D MLHO</text>
  <text x='340' y='162' text-anchor='middle' font-size='7.5' fill='var(--ink-soft)'>HEP60%/他10%ずつ・35日</text>
  <!-- screening -->
  <path d='M378,100 L418,100' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m18)'/>
  <rect x='420' y='70' width='160' height='60' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/>
  <text x='500' y='90' text-anchor='middle' font-size='9' fill='var(--ink)' font-weight='600'>58薬剤スクリーニング</text>
  <text x='500' y='106' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>14日曝露・CellTiter-Glo</text>
  <text x='500' y='120' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>感度82.4%/特異度75%→IMP同定</text>
  <!-- mechanism row -->
  <path d='M340,170 L340,200' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m18)'/>
  <rect x='40' y='205' width='560' height='66' rx='8' fill='none' stroke='var(--C)' stroke-width='1.4' stroke-dasharray='5,3'/>
  <text x='320' y='223' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>機序解析</text>
  <text x='320' y='240' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>scRNA-seq/scRank（HSCがTrkB最応答）／ TrkBノックダウン ／ HSC上清・条件培地で肝細胞アポトーシス</text>
  <text x='320' y='256' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>エクソソーム単離(NTA/TEM/CD9・TSG101)／ miR-34a-3p濃縮 ／ ルシフェラーゼでmiR-34a-3p→XIAP直接標的を確認</text>
  <!-- in vivo -->
  <rect x='40' y='285' width='560' height='52' rx='8' fill='none' stroke='var(--B)' stroke-width='1.4'/>
  <text x='320' y='303' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>in vivo：マウスにIMP 5mg/kgを長期経口投与（day0/8/16/35）</text>
  <text x='320' y='320' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>HSCが先にアポトーシス→遅れて肝細胞miR-34a-3p/アポトーシス↑（p53は肝細胞で不変）</text>
  <text x='320' y='333' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>TrkB-KD／GW4869／antagomiR-34でALT/AST・cleaved caspase3・TUNEL+を軽減</text>
</svg>`,
    glossary:[
      {term:"3D MLHO",full:"three-dimensional multi-lineage hepatic organoid",desc:"hESC由来の5細胞種（HEP・CHO・HSC・EC・KC）を肝に近い比率で集合させた三次元肝オルガノイド。本論文の中核プラットフォーム。"},
      {term:"hESC",full:"human embryonic stem cell",desc:"ヒト胚性幹細胞。段階的分化で肝の5細胞種を作る出発材料。"},
      {term:"HEPs",full:"hepatocytes",desc:"肝細胞。ALB/CYP3A4を発現する実質細胞で、3D MLHOの約60％を占める。"},
      {term:"CHO",full:"cholangiocytes",desc:"胆管細胞。CK19/SOX9/HNF6陽性で胆管様管腔を形成する。"},
      {term:"IMP",full:"imipramine",desc:"三環系抗うつ薬。肝細胞単独では無毒だが3D MLHOで間接的肝毒性を示し、本論文の主役となった薬剤。"},
      {term:"TrkB",full:"tropomyosin receptor kinase B (NTRK2)",desc:"神経栄養因子受容体チロシンキナーゼ。HSCに高発現し、IMPが作用してHSC内シグナルを起動する間接的肝毒性の起点（IMPの既報の結合標的）。"},
      {term:"NTRK2",full:"neurotrophic receptor tyrosine kinase 2",desc:"TrkBをコードする遺伝子。scRNA-seqでHSCに最も高発現することが示された。"},
      {term:"p53",full:"tumor protein p53 (TP53)",desc:"腫瘍抑制・ストレス応答転写因子。IMP–TrkB下流でHSCで上昇し、miR-34a-3pの産生を促す。"},
      {term:"hnRNPA2B1",full:"heterogeneous nuclear ribonucleoprotein A2/B1",desc:"miRNAのエクソソームへの選別的積み込みに関わるRNA結合タンパク。IMPで上昇する。"},
      {term:"DGCR8",full:"DiGeorge syndrome critical region 8",desc:"miRNAプロセシング（Microprocessor複合体）構成因子。IMPで上昇し、miR-34a-3p産生を支える。"},
      {term:"miR-34a-3p",full:"microRNA-34a-3p",desc:"p53応答性miRNA。毒性エクソソームに選択的に濃縮され、肝細胞でXIAPを抑制してアポトーシスを誘導する伝令分子。"},
      {term:"XIAP",full:"X-linked inhibitor of apoptosis protein",desc:"抗アポトーシスタンパク。miR-34a-3pの直接標的で、抑制されるとcaspase3が活性化して肝細胞がアポトーシスする。"},
      {term:"caspase3",full:"cysteine-aspartic protease 3",desc:"アポトーシス実行カスパーゼ。XIAP低下で活性化し肝細胞死を実行する（cleaved caspase3で検出）。"},
      {term:"exosome",full:"exosome (toxic-EXOs)",desc:"径100〜150 nmの細胞外小胞。miRNA等を運ぶ細胞間伝令で、IMP下では積荷がmiR-34a-3pに偏り『毒性エクソソーム』化する。"},
      {term:"GW4869",full:"neutral sphingomyelinase inhibitor",desc:"中性スフィンゴミエリナーゼ阻害薬。エクソソーム生合成を遮断し、IMPの間接的肝毒性を軽減するネガコン操作に使われた。"},
      {term:"antagomiR-34",full:"anti-miR-34 antagomir",desc:"miR-34を中和する化学修飾アンチセンス。in vivoでIMP肝障害を軽減し、miR-34a-3p依存性を裏づけた。"},
      {term:"NTA",full:"nanoparticle tracking analysis",desc:"ナノ粒子トラッキング解析。エクソソームの濃度・粒径分布を計測する手法。"},
      {term:"scRank",full:"single-cell drug-target perturbation ranking",desc:"単一細胞解像度で薬剤–標的摂動をシミュレートし、最も応答する細胞集団を順位づけるin silico手法。HSCを最応答性と予測。"},
      {term:"CellTiter-Glo",full:"CellTiter-Glo ATP viability assay",desc:"ATP量から細胞生存率を定量する発光アッセイ。58薬剤スクリーニングの毒性判定に使用。"},
      {term:"Cmax",full:"maximum plasma concentration",desc:"最高血漿中濃度。薬剤を臨床曝露に近い用量で試験するための基準。"},
      {term:"OSM",full:"Oncostatin M",desc:"肝細胞成熟を促すサイトカイン。HGF・デキサメタゾンと併用してHEP分化に用いた。"},
      {term:"CYP3A4",full:"cytochrome P450 3A4",desc:"主要な薬物代謝酵素。3D MLHOで2D比約6倍の活性を示し肝機能成熟の指標となった。"},
      {term:"NGFR",full:"nerve growth factor receptor (p75)",desc:"HSC特異的表面マーカー。分化HSCの同定に用いた。"},
      {term:"PDGFR-β",full:"platelet-derived growth factor receptor beta",desc:"HSC/ペリサイトのマーカー受容体。分化HSCの同定に用いた。"},
      {term:"Desmin",full:"desmin",desc:"中間径フィラメント。HSCの細胞骨格マーカーで分化同定に用いた。"},
      {term:"CD9",full:"cluster of differentiation 9 (tetraspanin)",desc:"エクソソーム表面マーカー。抗体で取り込みを阻害でき、毒性エクソソームの肝細胞取り込みを担う。"},
      {term:"TSG101",full:"tumor susceptibility gene 101",desc:"エクソソーム（多胞体由来）マーカータンパク。単離したエクソソームの同定に用いた。"},
      {term:"DILI",full:"drug-induced liver injury",desc:"薬剤性肝障害。直接型・特異体質型・間接型に大別され、本論文は間接型の機序を解いた。"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("18", [{ic:"dish",cap:"hESC由来5細胞種・3D MLHO"},{ic:"hepatocyte",cap:"肝細胞(HEP)アポトーシス"},{ic:"stellate",cap:"HSCのTrkBが起点→毒性エクソソーム"},{ic:"drug",cap:"58薬剤→imipramine同定"},{ic:"mouse",cap:"IMP長期投与マウスで機序検証"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 18 Sun/Du Nat Commun 2026: hESC 5細胞MLHO+58薬剤+scRNA+エクソソーム(NTA/TEM)+bulk RNA-seq+FACS+ELISA(サイトカイン)+qPCR+WB+TrkB/p53 KD+scRank in silico摂動+マウスin vivo */
LP.methods("18", ["invitro","mouse","nano","drug","crispr","scrna","rnaseq","insilico","facs","elisa","qpcr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №18 imipramine→HSCのTrkB→p53/DGCR8→miR-34a-3p搭載毒性エクソソーム→肝細胞XIAP↓→caspase3→アポトーシス（間接的肝毒性） ===== */
LP.cinema("18", {
  svg:`<defs>
    <radialGradient id="hep18" cx="0.4" cy="0.32" r="0.85"><stop offset="0" stop-color="#f6e7c8"/><stop offset="1" stop-color="#dcc18c"/></radialGradient>
    <radialGradient id="pill18" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stop-color="#d98a8a"/><stop offset="1" stop-color="#a23b3b"/></radialGradient>
    <marker id="aC18" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--C)"/></marker>
    <marker id="aB18" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--B)"/></marker>
  </defs>
  <rect x="0" y="0" width="720" height="430" fill="#eef3f6"/>
  <text x="360" y="22" text-anchor="middle" font-size="11.5" fill="var(--ink-soft)">imipramine → HSCのTrkB → 毒性エクソソーム(miR-34a-3p) → 肝細胞XIAP↓ → caspase3 → アポトーシス</text>
  <!-- imipramine pill -->
  <g id="pill" class="fade" transform="translate(96,80)">
    <rect x="-46" y="-16" width="92" height="32" rx="16" fill="url(#pill18)" stroke="#7e2b2b" stroke-width="1.5"/>
    <rect x="-46" y="-16" width="46" height="32" rx="16" fill="#e8b3b3" opacity="0.6"/>
    <text x="0" y="5" text-anchor="middle" font-size="10.5" font-weight="600" fill="#fff">IMP</text>
  </g>
  <!-- HSC -->
  <g id="hsc" transform="translate(150,240)">
    <path id="hscShape" d="M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z" fill="#d6a08e" stroke="var(--B)" stroke-width="1.6"/>
    <circle id="hscNuc" cx="0" cy="0" r="9" fill="#7a3a2c"/>
    <text id="hscCap" x="0" y="56" text-anchor="middle" font-size="10.5" fill="var(--ink-soft)">肝星細胞（HSC）</text>
  </g>
  <!-- TrkB receptor on HSC membrane -->
  <g id="trkb"><path d="M178,222 L178,234 M190,222 L190,234 M178,222 L173,213 M178,222 L183,213 M190,222 L185,213 M190,222 L195,213" stroke="var(--B)" stroke-width="2.4" fill="none"/><text x="184" y="250" text-anchor="middle" font-size="9" font-weight="600" fill="var(--B)">TrkB</text></g>
  <!-- p53 / DGCR8 tags inside HSC -->
  <g id="p53tag" class="fade"><rect x="58" y="288" width="92" height="22" rx="11" fill="#fff" stroke="var(--B)" stroke-width="1.5"/><text x="104" y="303" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--B)">p53/DGCR8↑</text></g>
  <!-- exosome -->
  <g id="exo" class="fade" transform="translate(340,240)">
    <circle r="28" fill="none" stroke="var(--C)" stroke-width="2.2"/>
    <circle cx="-8" cy="-6" r="4" fill="var(--C)"/><circle cx="8" cy="4" r="4" fill="var(--C)"/><circle cx="2" cy="-12" r="3.5" fill="var(--C)"/>
    <text x="0" y="-38" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--C)">毒性エクソソーム</text>
    <text x="0" y="46" text-anchor="middle" font-size="9" fill="var(--C)">miR-34a-3p濃縮</text>
  </g>
  <!-- hepatocyte -->
  <g id="hep">
    <ellipse cx="560" cy="240" rx="78" ry="62" fill="url(#hep18)" stroke="#c2a268" stroke-width="2.2"/>
    <ellipse cx="534" cy="222" rx="18" ry="15" fill="#b79a64"/>
    <text x="560" y="160" text-anchor="middle" font-size="10.5" fill="#9c7b3a">肝細胞（HEP）</text>
  </g>
  <g id="xiaptag" class="fade"><rect x="520" y="248" width="80" height="22" rx="11" fill="#fff" stroke="var(--B)" stroke-width="1.5"/><text x="560" y="263" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--B)">XIAP↓ / casp3↑</text></g>
  <g id="apop" class="fade"><text x="560" y="318" text-anchor="middle" font-size="12" font-weight="600" fill="var(--B)">アポトーシス</text></g>
  <!-- interventions -->
  <g id="drug" class="fade" transform="translate(360,388)"><rect x="-150" y="-15" width="300" height="30" rx="15" fill="#fff" stroke="var(--H)" stroke-width="1.6"/><text x="0" y="5" text-anchor="middle" font-size="10" font-weight="600" fill="var(--H)">TrkB-KD ／ GW4869 ／ antagomiR-34</text></g>
  <g id="goodend" class="fade" transform="translate(560,360)"><circle r="34" fill="#fff" stroke="var(--H)" stroke-width="2.4"/><text x="0" y="-2" text-anchor="middle" font-size="11" fill="var(--H)">肝障害</text><text x="0" y="15" text-anchor="middle" font-size="11" fill="var(--H)">軽減 ✓</text></g>`,
  build(K){
    const QUIET="M0,-12 L26,-34 L9,-6 L40,-3 L11,6 L24,32 L1,10 L-22,34 L-6,6 L-38,5 L-8,-5 L-24,-32 Z";
    return [
      {color:"E",t:2600,cap:"健常な肝。肝細胞（HEP）と肝星細胞（HSC）が定常状態にあり、薬剤の直接毒性もない。HSC膜上には神経栄養因子受容体TrkBが立つ。",run(){}},
      {color:"C",t:3800,cap:"① 三環系抗うつ薬imipramine（IMP）が投与される。IMPは肝細胞ではなくHSCに高発現するTrkB（NTRK2、既報のIMP結合標的）に作用する——間接的肝毒性の起点はHSC側にある。",run(){
        K.show(["pill"]);
        K.flow(96,96,178,222,"var(--C)",{dur:1.2,loop:2});
        K.T(()=>K.pulse("trkb"),1100);
      }},
      {color:"B",t:4200,cap:"② TrkB下流でHSC内のp53/hnRNPA2B1/DGCR8が活性化し、miR-34a-3pをエクソソームに選択的に積み込む。エクソソームの総量・サイズは変わらず、積荷だけが毒性化（toxic-EXOs）して細胞外へ放出される。",run(){
        K.show(["p53tag"]); K.T(()=>K.pulse("p53tag"),700);
        K.T(()=>{K.show(["exo"]); K.flow(180,240,312,240,"var(--C)",{dur:1.2,loop:2});},1600);
        K.T(()=>K.pulse("exo"),2600);
      }},
      {color:"B",t:4200,cap:"③ 毒性エクソソームがCD9を介して肝細胞に取り込まれる。運ばれたmiR-34a-3pが抗アポトーシスタンパクXIAPを直接抑制→caspase3が活性化し、肝細胞がアポトーシスへ向かう（肝細胞への直接毒性はない）。",run(){
        K.flow(368,240,482,240,"var(--C)",{dur:1.2,loop:2});
        K.T(()=>{K.show(["xiaptag"]); K.pulse("xiaptag");},1300);
        K.T(()=>{K.show(["apop"]); K.attr("hep","opacity","0.7");},2600);
      }},
      {color:"H",t:4000,cap:"④ 起点のTrkBノックダウン、エクソソーム阻害薬GW4869、miRNA中和antagomiR-34のいずれもがこの伝令を遮断→ALT/AST・cleaved caspase3・TUNEL+肝細胞が軽減する（in vivoで確認）。",run(){
        K.show(["drug"]);
        K.T(()=>{K.strike(360,373,184,228,{color:"var(--H)"});K.strike(360,373,340,240,{color:"var(--H)"});
          K.T(()=>{
            K.markX(184,228); K.markX(340,240);
            K.unpulse("trkb"); K.unpulse("p53tag"); K.unpulse("exo"); K.unpulse("xiaptag");
            K.attr("exo","opacity","0.25"); K.attr("p53tag","opacity","0.3");
            K.attr("apop","opacity","0.25"); K.attr("hep","opacity","1");
            K.show(["goodend"]);
          },820);
        },800);
      }},
    ];
  }
});
