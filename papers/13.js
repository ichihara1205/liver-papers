/* ============================================================
   №13 · Nature Metabolism 2025 · Wang X, Moore MP, Shi H, Xiao Y, Zhang J, Faccioli LAP, Hu Z, Kissele…
   肝細胞の非アポトーシス性caspase-8–Meteorin経路がMASH線維化を駆動
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"13",
    title:"肝細胞の非アポトーシス性caspase-8–Meteorin経路がMASH線維化を駆動",
    authors:"Wang X, Moore MP, Shi H, Xiao Y, Zhang J, Faccioli LAP, Hu Z, Kisseleva T, Soto Gutierrez A, Lazar MA, Tabas I",
    journal:"Nature Metabolism",
    year:2025,
    vol:"7(10):2067–2082",
    doi:"10.1038/s42255-025-01355-1",
    url:"https://www.nature.com/articles/s42255-025-01355-1",
    primary:"D",
    tags:["D","B","H"],
    approach:"in vivo（肝細胞特異的caspase-8 KOマウス）＋ヒト試料 ＋ ヒト・マウス初代肝細胞（Columbia / Tabas lab）",
    added:"2026-06-02",
    abstract_ja:"MASH（代謝機能障害関連脂肪肝炎）は慢性肝疾患の最大の原因だが、線維化がどのように起こるかの理解が不十分で治療選択肢が限られていた。本研究は、肝細胞のcaspase-8がアポトーシスとは独立した機構でMASH線維化を駆動することを示した。肝のcaspase-8発現はヒト・実験的MASHのいずれでも線維化の程度と相関し、雄マウスで肝細胞特異的にcaspase-8を欠損させると、肝細胞のアポトーシスには影響を与えないまま線維化と肝星細胞（HSC）活性化が抑制された。機構解析では、肝細胞内のcaspase-8–YY1経路が分泌型のMeteorin（Metrn）を誘導し、このMetrnがc-Kit–STAT3経路を介してHSCを活性化することが示された。Meteorinはヒト・マウスのMASH肝で増加し、肝細胞caspase-8の欠損で低下した。caspase-8欠損MASHマウスで肝細胞のMeteorinを遺伝的に復元するとHSC活性化と線維化が再び現れ、逆に肝細胞のMeteorinをサイレンシングすると線維化が低下した。以上より、caspase-8の非アポトーシス機能と新規HSCアクチベーターであるMeteorinが、治療標的になりうる線維化促進経路を構成することが明らかになった。",
    background:"MASHではsteatosis（脂肪化）から炎症・線維化へと進行するが、脂肪化した肝細胞がどのようにHSCを点火するかという上流の因果は完全には解明されていなかった。肝細胞死（アポトーシス）が線維化に寄与するという見方がある一方で、caspase-8はアポトーシス実行の中心因子でありながら、近年は細胞死とは別の非アポトーシス的なシグナル機能を持つことが知られてきた。しかしMASHにおいてcaspase-8がHSC活性化や線維化に果たす役割、とりわけ肝細胞由来のどの分泌因子がHSCを活性化するかは不明であり、TGFβ等の既知アクチベーターだけでは説明しきれない肝細胞→HSCのパラクライン軸を同定する必要があった。",
    achievements:[
      "肝のcaspase-8発現がヒト・実験的MASHの双方で線維化の程度と相関し、肝細胞特異的caspase-8欠損マウスで線維化とHSC活性化（αSMA・コラーゲン）が抑制されることを実証。重要なのはこの抑制が肝細胞アポトーシスの変化を伴わない＝非アポトーシス機構である点。",
      "肝細胞内でcaspase-8が転写因子YY1を介して分泌型Meteorin（Metrn）の発現を誘導するという、肝細胞内シグナル軸を同定。",
      "分泌Meteorinが HSC膜上の受容体型チロシンキナーゼc-Kitに作用し、下流のSTAT3経路を起動してHSCを活性化することを示した（肝細胞→HSCのパラクライン経路）。",
      "Meteorinがヒト・マウスMASH肝で増加し肝細胞caspase-8欠損で低下することを確認。caspase-8欠損マウスで肝細胞Meteorinを遺伝的に復元するとHSC活性化・線維化が回復し、サイレンシングで低下するという必要十分性の証拠を提示。",
      "caspase-8（非アポトーシス機能）とMeteorinという新規HSCアクチベーターを、抗線維化の治療標的として提示。"
    ],
    limitations:[
      "解析の大半が雄マウスで行われており、性差の検討が限定的。",
      "機構がcaspase-8–YY1–Meteorin–c-Kit–STAT3軸に絞られ、KC・LSEC・免疫細胞の寄与やTGFβ等既知経路との相互作用の定量は今後の課題。",
      "in vivoマウスとヒト相関が中心で、ヒトでの介入（Meteorin/c-Kit阻害の治療効果）は未検証。",
      "Meteorin受容がc-Kit単独か共受容体を要するか、STAT3以外の下流分岐があるかは未解明。"
    ],
    connection:[
      "線維化点火の新ルート（KC非依存）：自系の最重要課題はfibrosisをどう生理的に点火するかで、直近はKC＋LPSのsecond hit路線を採る。本論文は脂肪化した肝細胞自身がcaspase-8→YY1→Meteorinで直接HSCを点火するKC非依存ルートを示す。自系でKC second hitと肝細胞Meteorinのどちらが（あるいは協調が）点火に効くかを切り分ける設計ができる。",
      "共培養系での検証：肝細胞・HSCの2細胞共培養（自系4細胞系のサブセット）で肝細胞にcaspase-8/Meteorinを操作しHSC活性化（αSMA・コラーゲン）が動くか直接検証できる。recombinant MeteorinをHSC培地に添加しc-Kit/STAT3依存的に活性化が誘導できるかもネガコン/ポジコン実験になる。",
      "ABM実装：肝細胞ノードの脂質負荷↑→caspase-8活性↑→YY1→Meteorin分泌量↑を肝細胞エージェントに、HSC近傍のMeteorin濃度がc-Kit閾値超→STAT3活性化→qHSC→aHSC遷移確率↑をHSCエージェントに実装可能。細胞死を介さず線維化が進む＝アポトーシス独立の点火ルールとして既存の炎症駆動ルートと並列に置ける。",
      "既収録との接続：#03（ATF4がHSC内部でエンハンサー起動）・#09（HSC由来RSPO3が肝細胞を制御）がHSC起点だったのに対し、本論文は肝細胞起点でHSCを活性化する逆向きのパラクライン軸。#02（KC由来シグナル）・#10（IL32産生肝細胞→KC）と合わせると、肝細胞→HSC直接路と肝細胞→KC→HSC間接路を多細胞で対比でき、c-Kit/STAT3がHSC側の新リードアウト候補になる。"
    ],
    glossary:[
      {term:"caspase-8",full:"cysteine-aspartic protease 8 (CASP8)",desc:"アポトーシス開始カスパーゼ。本論文では非アポトーシス機能でYY1→Meteorinを誘導しMASH線維化を駆動"},
      {term:"YY1",full:"Yin Yang 1",desc:"転写因子。肝細胞でcaspase-8下流に働きMeteorinの転写を誘導"},
      {term:"Meteorin",full:"meteorin (Metrn)",desc:"分泌型タンパク質。MASH肝細胞由来でHSCをc-Kit–STAT3経路を介して活性化する新規HSCアクチベーター"},
      {term:"c-Kit",full:"KIT proto-oncogene receptor tyrosine kinase (CD117)",desc:"受容体型チロシンキナーゼ。HSC上でMeteorinを受容しSTAT3を起動"},
      {term:"STAT3",full:"signal transducer and activator of transcription 3",desc:"転写因子/シグナル分子。c-Kit下流でHSC活性化を媒介"}
    ],
    struct:{
      model:"in vivo（肝細胞特異的KOマウス）＋ヒト試料＋初代肝細胞",
      cells:["肝細胞","HSC"],
      triggers:["MASH食","肝細胞caspase-8発現","分泌Meteorin"],
      steatosis:"○",
      inflammation:"△",
      fibrosis:"○",
      readout:["肝線維化（コラーゲン/αSMA）","HSC活性化","Meteorin発現","caspase-8発現","STAT3活性"],
      ignite:"脂肪化肝細胞のcaspase-8→YY1→分泌MeteorinがHSCのc-Kit/STAT3を介して線維化を点火（アポトーシス非依存）",
      params:[
        {name:"肝細胞caspase-8活性",note:"非アポトーシス的にYY1経由でMetrn転写を誘導するスイッチ。ABMでは肝細胞ノードの脂質負荷依存で上昇させる"},
        {name:"Metrn分泌量",note:"肝細胞→HSCのパラクライン因子。HSC活性化確率の入力値に使える"},
        {name:"c-Kit–STAT3経路",note:"HSC側の受容。Metrn濃度の閾値でqHSC→aHSC遷移を起こすルールに"},
        {name:"アポトーシス独立性",note:"肝細胞死とは独立に線維化が進む＝細胞死を介さない点火ルールとして実装"}
      ],
      todos:[
        "肝細胞・HSC共培養で肝細胞のcaspase-8/Meteorinを発現・抑制し、HSC活性化（αSMA）が動くか検証",
        "KC非依存でも肝細胞由来Meteorinだけで線維化点火が起こるか（自系のKC second-hitと比較）",
        "培地にrecombinant Meteorinを添加してHSC活性化が誘導できるか（ポジコン）",
        "c-Kit/STAT3阻害でHSC活性化が止まるか（ネガコン）"
      ]
    },
    figure:"<svg viewBox='0 0 640 320' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='ar13fb' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--B)'/></marker><marker id='ar13fd' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--D)'/></marker><marker id='ar13fh' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--H)'/></marker></defs><rect width='640' height='320' fill='var(--paper)'/><text x='320' y='22' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>肝細胞起点のパラクライン軸：caspase-8 → YY1 → 分泌Meteorin → HSCのc-Kit/STAT3 → 線維化</text><ellipse cx='150' cy='160' rx='118' ry='92' fill='#f5ede0' stroke='#c8a87a' stroke-width='1.8'/><text x='150' y='84' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>MASH肝細胞（脂肪化・生存）</text><circle cx='118' cy='150' r='5' fill='#e8c45a'/><circle cx='150' cy='178' r='6' fill='#e8c45a'/><circle cx='185' cy='150' r='4.5' fill='#e8c45a'/><circle cx='132' cy='196' r='4' fill='#e8c45a'/><rect x='95' y='112' width='96' height='24' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.8'/><text x='143' y='128' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>caspase-8 ↑</text><ellipse cx='150' cy='168' rx='34' ry='24' fill='#d5cae8' stroke='#8a78b0' stroke-width='1.5'/><text x='150' y='165' text-anchor='middle' font-size='9.5' fill='#6a5a92'>核</text><text x='150' y='180' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>YY1</text><line x1='143' y1='136' x2='150' y2='146' stroke='var(--D)' stroke-width='1.5' marker-end='url(#ar13fd)'/><circle cx='268' cy='150' r='13' fill='var(--B)' opacity='0.85'/><text x='268' y='128' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>Meteorin</text><text x='268' y='176' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>（分泌）</text><line x1='184' y1='168' x2='250' y2='154' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar13fb)'/><ellipse cx='470' cy='165' rx='110' ry='85' fill='#f3ece2' stroke='var(--line)' stroke-width='1.6'/><text x='470' y='92' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>肝星細胞（HSC）</text><path d='M452,118 l-5,-9 m5,9 l5,-9 m-5,9 l-9,-4 m9,4 l9,-4' stroke='var(--B)' stroke-width='2.2' fill='none'/><text x='470' y='112' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>c-Kit</text><line x1='286' y1='150' x2='440' y2='128' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar13fb)'/><ellipse cx='470' cy='172' rx='30' ry='22' fill='#d5cae8' stroke='#8a78b0' stroke-width='1.5'/><text x='470' y='176' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>STAT3</text><line x1='470' y1='126' x2='470' y2='150' stroke='var(--B)' stroke-width='1.5' marker-end='url(#ar13fb)'/><text x='470' y='214' text-anchor='middle' font-size='9.5' fill='var(--B)'>qHSC → aHSC（活性化）</text><rect x='400' y='278' width='140' height='30' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.8'/><text x='470' y='298' text-anchor='middle' font-size='10.5' fill='var(--B)' font-weight='600'>コラーゲン産生 → 線維化</text><line x1='470' y1='250' x2='470' y2='276' stroke='var(--B)' stroke-width='1.5' marker-end='url(#ar13fb)'/><rect x='20' y='278' width='250' height='30' rx='8' fill='#eaf5ee' stroke='var(--H)' stroke-width='1.5'/><text x='145' y='298' text-anchor='middle' font-size='9.5' fill='var(--H)'>肝細胞はアポトーシスせず生存（非アポトーシス機構）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m13' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><rect width='640' height='200' fill='var(--paper)'/><rect x='8' y='30' width='118' height='92' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='67' y='52' text-anchor='middle' font-size='10' font-weight='600' fill='var(--ink)'>ヒト・マウスMASH肝</text><text x='67' y='68' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>caspase-8発現 vs</text><text x='67' y='81' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化を相関</text><text x='67' y='100' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Meteorin↑を確認</text><line x1='126' y1='76' x2='148' y2='76' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m13)'/><rect x='150' y='24' width='124' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='212' y='46' text-anchor='middle' font-size='10' font-weight='600' fill='var(--B)'>肝細胞特異的</text><text x='212' y='60' text-anchor='middle' font-size='10' font-weight='600' fill='var(--B)'>caspase-8 KO</text><text x='212' y='76' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>MASH食マウス</text><text x='212' y='90' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>線維化・HSC活性化↓</text><text x='212' y='104' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>アポトーシスは不変</text><line x1='274' y1='76' x2='296' y2='76' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m13)'/><rect x='298' y='24' width='124' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='360' y='46' text-anchor='middle' font-size='10' font-weight='600' fill='var(--D)'>機構解析</text><text x='360' y='62' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>初代肝細胞で</text><text x='360' y='75' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>caspase-8→YY1</text><text x='360' y='88' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→Metrn誘導</text><text x='360' y='104' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→c-Kit/STAT3</text><line x1='422' y1='76' x2='444' y2='76' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#m13)'/><rect x='446' y='24' width='186' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/><text x='539' y='46' text-anchor='middle' font-size='10' font-weight='600' fill='var(--H)'>必要十分性の検証</text><text x='539' y='62' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>KOマウスで肝細胞Metrnを</text><text x='539' y='75' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>遺伝的に復元 → 線維化回復</text><text x='539' y='90' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Metrnサイレンシング</text><text x='539' y='104' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ 線維化↓</text><text x='320' y='158' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>ヒト相関 × 肝細胞特異的KO × 初代肝細胞機構 × 遺伝的復元/サイレンシング（必要十分性）</text><text x='320' y='174' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>Wang, Tabas et al., Nature Metabolism 7(10):2067–2082 (2025)</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("13", [{ic:"mouse",cap:"肝細胞特異的caspase-8 KOマウス"},{ic:"human",cap:"ヒトMASH肝で相関"},{ic:"hepatocyte",cap:"caspase-8→YY1→Meteorin分泌"},{ic:"stellate",cap:"HSCをc-Kit/STAT3で活性化"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 13 Wang/Tabas Nat Metab 2025: 肝細胞特異的caspase-8 KO+初代肝細胞+ヒト試料+ELISA(Meteorin)+IHC */
LP.methods("13", ["mouse","human","invitro","crispr","qpcr","wb","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №01 ヒトMASLD空間マルチオミクスatlas ===== */
/* ===== №13 肝細胞caspase-8→YY1→分泌Meteorin→HSCのc-Kit/STAT3→線維化（アポトーシス非依存） ===== */
LP.cinema("13", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("13")}${GLYPH.arrow("13","var(--B)")}</defs>`+GLYPH.title("肝細胞caspase-8→YY1→分泌Meteorin→HSCのc-Kit/STAT3→線維化（肝細胞は生存）")
    +GLYPH.hep("hep",20,60,1.3,"MASH肝細胞")
    +GLYPH.nucleus("hepNuc",70,138,30,22,"核")
    +GLYPH.tag("casp8",170,170,"caspase-8↑","var(--B)",100,true)
    +GLYPH.tf("yy1",70,140,"YY1","var(--B)",true)
    +`<g id="metrnLayer" class="fade">`+GLYPH.cytokine("metrn",300,150,"Meteorin","var(--B)")+`</g>`
    +GLYPH.stellate("hsc",520,300,"肝星細胞")
    +GLYPH.receptor("ckit",520,246,"c-Kit","var(--B)")
    +GLYPH.tf("stat3",520,300,"STAT3","var(--B)",true)
    +GLYPH.layer("collagen")
    +GLYPH.pill("drug",600,80,"caspase-8/Metrn阻害",150)
    +GLYPH.badge("good",635,300,"線維化","退縮 ✓","var(--B)"),
  build(K){
    const dp=[[60,150],[105,178],[140,150],[85,200],[120,205]];
    return [
      {color:"E",t:2400,cap:"健常な肝類洞。肝細胞は生存し、肝星細胞（HSC）は静止期（qHSC）にある。",run(){}},
      {color:"D",t:3000,cap:"① 過栄養でMASH肝細胞に脂肪滴が蓄積（steatosis）し、細胞内のcaspase-8がアポトーシスとは別の働きで上昇する。",run(){
        addDrops(K,"hepDrops",dp,"lip13");
        K.show(["casp8"]); K.T(()=>K.pulse("casp8"),900);
      }},
      {color:"B",t:4200,cap:"② caspase-8が核内でYY1を介し、分泌型Meteorin（Metrn）の転写を誘導。Metrnが細胞外へ放出される（肝細胞自体はアポトーシスせず生存）。",run(){
        K.show(["yy1"]); K.flow(170,168,78,142,"var(--B)",{dur:1.0,loop:2});
        K.T(()=>{K.pulse("yy1"); K.show(["metrnLayer"]);},1300);
        K.T(()=>{K.flow(95,140,290,150,"var(--B)",{dur:1.1,loop:2}); K.pulse("metrn");},2300);
      }},
      {color:"B",t:4200,cap:"③ 分泌MetrnがHSC膜上のc-Kit受容体に結合→STAT3経路を起動→qHSCがaHSC（筋線維芽細胞）へ活性化し、コラーゲンを過剰産生して線維化が進む。",run(){
        K.flow(312,150,520,246,"var(--B)",{dur:1.3,loop:2});
        K.T(()=>{K.pulse("ckit"); K.show(["stat3"]); K.flow(520,250,520,300,"var(--B)",{dur:0.8,loop:2});},1300);
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC（aHSC）");},2300);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(520,365),{len:160}),3100);
      }},
      {color:"H",t:3600,cap:"④ 肝細胞caspase-8の欠損やMetrnのサイレンシングがこの経路を遮断→HSCが静止化し線維化が退縮。アポトーシスには影響しない＝新たな抗線維化標的。",run(){
        K.show(["drug"]);
        K.T(()=>{K.strike(600,80,170,170); K.strike(600,80,300,150);
          K.T(()=>{
            K.markX(170,170); K.markX(300,150);
            K.unpulse("casp8"); K.unpulse("metrn"); K.unpulse("ckit");
            K.attr("metrnLayer","opacity","0.25"); K.attr("casp8","opacity","0.3");
            K.morph("hscShape",GLYPH.QUIET); K.attr("hscShape","fill","#d6a08e"); K.text("hscCap","静止期へ（qHSC）");
            K.attr("collagen","opacity","0.25"); K.attr("stat3","opacity","0.3");
            K.show(["good"]);
          },800);
        },800);
      }},
    ];
  }
});
