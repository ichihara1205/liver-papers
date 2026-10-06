/* ============================================================
   №06 · PLOS Computational Biology 2024 · Bouguéon M, Legagneux V, Hazard O, Bomo J, Siegel A, Feret J, Théret …
   HSCのKappaベース多スケールモデル — 不活化ループが線維化進行を駆動
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"06",
    added:"2026-05-30",
    title:"HSCのKappaベース多スケールモデル — 不活化ループが線維化進行を駆動",
    authors:"Bouguéon M, Legagneux V, Hazard O, Bomo J, Siegel A, Feret J, Théret N, Maini PK, Alber M, Kaleta C",
    journal:"PLOS Computational Biology",
    year:2024,
    vol:"20(7):e1011858",
    doi:"10.1371/journal.pcbi.1011858",
    url:"https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011858",
    primary:"F",
    tags:["F","B","G"],
    approach:"規則ベースモデル(Kappa) ＋ CCl4マウス ＋ ヒトNASH RNAseq",
    struct:{
      model:"in silico", cells:["HSC"], triggers:["TGFβ1（継続刺激）"],
      steatosis:"—", inflammation:"—", fibrosis:"○", readout:["iHSCマーカー","ECM/コラーゲン沈着","線維化ステージF0–F4"],
      ignite:"iHSC→aHSC再活性化ループ。閾値以上のTGFβ1が継続するとループが回り線維化が持続。",
      params:[{name:"HSC 7状態遷移マシン",note:"qHSC/aHSC/iHSC/老化/アポトーシス等"},{name:"TGFβ1濃度 → qHSC活性化確率",note:""},{name:"iHSC蓄積 → 再活性化確率",note:"線維化持続の鍵回路"}],
      todos:["7状態状態マシンをABMのHSCエージェントに移植","TGFβ1継続供給でiHSC再活性化→線維化点火を検証","KC除去→TGFβ1途絶→退縮シミュレーション"]
    },
    figure:"<svg viewBox='0 0 640 268' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar06' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--ink-soft)'/></marker><marker id='ar06b' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--B)'/></marker><marker id='ar06f' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--F)'/></marker></defs><rect x='20' y='96' width='110' height='48' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='75' y='117' text-anchor='middle' font-size='12.5' fill='var(--ink)'>qHSC</text><text x='75' y='135' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>静止期</text><line x1='130' y1='120' x2='198' y2='120' stroke='var(--ink-soft)' marker-end='url(#ar06)'/><text x='164' y='112' text-anchor='middle' font-size='10' fill='var(--B)'>TGFβ1</text><rect x='200' y='96' width='118' height='48' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='259' y='117' text-anchor='middle' font-size='12.5' fill='var(--ink)'>aHSC</text><text x='259' y='135' text-anchor='middle' font-size='10.5' fill='var(--B)'>活性化→ECM産生</text><line x1='318' y1='120' x2='386' y2='120' stroke='var(--B)' marker-end='url(#ar06b)'/><rect x='388' y='96' width='136' height='48' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='456' y='117' text-anchor='middle' font-size='12.5' fill='var(--ink)'>ECM 過剰沈着</text><text x='456' y='135' text-anchor='middle' font-size='11' fill='var(--B)'>→ 線維化</text><rect x='200' y='188' width='118' height='50' rx='7' fill='var(--paper-2)' stroke='var(--F)' stroke-width='2.4'/><text x='259' y='209' text-anchor='middle' font-size='12.5' fill='var(--ink)'>iHSC</text><text x='259' y='228' text-anchor='middle' font-size='10.5' fill='var(--F)'>不活化状態（中間）</text><line x1='259' y1='144' x2='259' y2='186' stroke='var(--ink-soft)' marker-end='url(#ar06)'/><text x='278' y='170' font-size='10' fill='var(--ink-soft)'>不活化</text><path d='M201,212 C154,212 148,136 197,126' fill='none' stroke='var(--F)' stroke-width='2.6' marker-end='url(#ar06f)'/><text x='132' y='177' text-anchor='middle' font-size='11' fill='var(--F)'>再活性化</text><text x='132' y='193' text-anchor='middle' font-size='10' fill='var(--F)'>(TGFβ1)</text><rect x='542' y='174' width='92' height='60' rx='5' fill='var(--paper-2)' stroke='var(--F)' stroke-dasharray='4 3'/><text x='588' y='196' text-anchor='middle' font-size='11' fill='var(--F)'>★ 鍵回路</text><text x='588' y='213' text-anchor='middle' font-size='11' fill='var(--F)'>不活化ループ</text><text x='588' y='228' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>線維化持続の必須要素</text><text x='20' y='258' font-size='11' fill='var(--G)'>iHSC蓄積 ∝ 線維化ステージ（NASH患者RNAseqで確認）→ 新規マーカー</text></svg>",
    method_figure:"<svg viewBox='0 0 640 238' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m06' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><text x='20' y='20' font-size='12' fill='var(--ink-soft)'>規則ベースモデル構築 → マウス＋ヒトデータで2重バリデーション</text><rect x='16' y='34' width='158' height='80' rx='8' fill='var(--paper)' stroke='var(--F)' stroke-width='2'/><text x='95' y='58' text-anchor='middle' font-size='12'>Kappaモデル構築</text><text x='95' y='76' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>HSC 7状態・TGFβ1ルール</text><text x='95' y='93' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>確率的シミュレーション</text><text x='95' y='108' text-anchor='middle' font-size='10.5' fill='var(--F)'>inactivation loop 解析</text><rect x='238' y='34' width='158' height='80' rx='8' fill='var(--paper)' stroke='var(--ink-soft)' stroke-width='1.5'/><text x='317' y='58' text-anchor='middle' font-size='12'>CCl4 マウスモデル</text><text x='317' y='76' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>線維化 + 退縮コース</text><text x='317' y='93' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>HSC 各状態数を定量</text><text x='317' y='108' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>→ パラメータ調整</text><rect x='462' y='34' width='162' height='80' rx='8' fill='var(--paper)' stroke='var(--G)' stroke-width='1.5'/><text x='543' y='58' text-anchor='middle' font-size='12'>NASH患者 RNAseq</text><text x='543' y='76' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>線維化ステージ F0–F4</text><text x='543' y='93' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>iHSCマーカー発現解析</text><text x='543' y='108' text-anchor='middle' font-size='10' fill='var(--G)'>→ iHSC蓄積確認</text><rect x='68' y='162' width='190' height='56' rx='8' fill='var(--paper)' stroke='var(--F)' stroke-width='1.5'/><text x='163' y='183' text-anchor='middle' font-size='11.5' fill='var(--ink)'>不活化ループが線維化持続に必須</text><text x='163' y='202' text-anchor='middle' font-size='10.5' fill='var(--F)'>退縮シミュレーションも実施</text><rect x='374' y='162' width='192' height='56' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='470' y='183' text-anchor='middle' font-size='11.5' fill='var(--ink)'>iHSC = 線維化新規マーカー</text><text x='470' y='202' text-anchor='middle' font-size='10.5' fill='var(--B)'>ヒトNASHで確認</text><path d='M174,114 L163,160' stroke='var(--accent)' marker-end='url(#m06)'/><path d='M317,114 C317,138 240,148 258,160' stroke='var(--accent)' fill='none' marker-end='url(#m06)'/><path d='M543,114 C543,140 492,150 466,160' stroke='var(--accent)' fill='none' marker-end='url(#m06)'/></svg>",
    abstract_ja:"HSCは慢性肝疾患で活性化し、ECMを過剰産生して線維化を引き起こす。本研究はKappaグラフ書き換え言語を用いて初の規則ベース多スケールモデルを構築し、TGFβ1が制御するHSCの7状態遷移（静止qHSC・活性化aHSC・不活化iHSC・老化・アポトーシス等）を記述した。シミュレーション解析の結果、iHSC→aHSCの「再活性化ループ（不活化ループ）」こそが線維化を持続させる必須回路であることが示された。さらにCCl4マウスモデルとNASH患者RNAseqによる二重バリデーションで、iHSCの蓄積が線維化ステージと相関することを確認し、iHSCを線維化進行の新規マーカー候補として提示した。加えて線維化退縮（reversion）条件のシミュレーションも行い、不活化ループの制御が治療標的になりうることを示唆した。",
    background:"線維化の中心機構は、HSCが静止期（qHSC）から活性化（aHSC）すなわち筋線維芽細胞へと変化してECMを過剰産生することにある。一部の活性化HSCは「不活化（iHSC）」という中間状態へ移行することも知られていたが、この不活化から再活性化へ戻るループが線維化の進行や持続にどの程度寄与するのかは、定量的には理解されていなかった。実際、従来の単純な2状態（静止↔活性化）モデルでは、線維化が維持されるダイナミクスを再現できなかった。",
    achievements:[
      "Kappa言語を使った7状態HSCプラスティシティモデル（qHSC・aHSC・iHSC・老化・アポトーシス等）を初構築。",
      "シミュレーションにより「iHSC再活性化ループ」が線維化持続に必須であることを計算的に証明。",
      "CCl4マウスモデルの実験データでモデルパラメータを調整・バリデーション。",
      "NASH患者RNAseqデータでiHSC蓄積が線維化ステージと相関することを確認 → iHSCが線維化進行の新規マーカーとして提示。",
      "線維化退縮のシミュレーション実施 → 不活化ループ制御が治療標的になりうることを示唆。"
    ],
    limitations:[
      "TGFβ1–HSC軸に特化したモデルで、KC・LSEC・肝細胞との多細胞クロストークは組み込まれていない。",
      "CCl4化学傷害モデルが主バリデーション系で、MASLD特有の代謝的文脈（脂肪化→炎症→線維化）は直接検証されていない。",
      "Kappaモデルは確率的なwell-mixed空間を仮定し、類洞内のzonationや空間的分布を記述できない。",
      "NASH患者データは相関解析が中心で、iHSCの線維化における因果的役割の直接実証は不十分。"
    ],
    connection:[
      "ABM実装に直結：7状態HSCモデルの遷移ルール（TGFβ1濃度→qHSC活性化確率、iHSC蓄積→再活性化確率）をそのまま私のABMのHSCエージェントの「状態マシン」として流用できる。ABM設計の最も直接的な参照文献。",
      "線維化が「点かない」問題への計算的答え：iHSC再活性化ループを回すには閾値以上のTGFβ1刺激の継続が必要。KCを入れてLPSセカンドヒット→TGFβ1供給継続→iHSC再活性化→線維化点火という仮説が計算的に支持される。",
      "KC除去→線維化退縮シナリオ：KCがフェロトーシスで脱落（#02）→TGFβ1供給途絶→iHSCが再活性化できず線維化退縮、という回路をABMでシミュレーションし「KCが線維化持続に必須か」を予測できる。",
      "既収録との連結：#03（ATF4→HSC転写プログラム）はaHSCの内部スイッチを担い、本論文はaHSCがいかに生み出されるか（iHSC再活性化の外部ダイナミクス）を記述 → 二層構造（エージェント状態遷移＋転写スイッチ）のABM設計が可能。#05（LSEC capillarization）との連結では、LSEC状態変化がiHSC再活性化の空間的引き金になるという仮説も立てられる。"
    ],
    glossary:[
      {term:"qHSC",full:"quiescent hepatic stellate cell",desc:"静止期HSC。ビタミンA脂質滴を貯蔵し非活性状態"},
      {term:"aHSC",full:"activated hepatic stellate cell",desc:"活性化HSC。αSMA・I型コラーゲン産生する筋線維芽細胞様状態"},
      {term:"iHSC",full:"inactivated hepatic stellate cell",desc:"不活化HSC。活性化後に仮静止した中間状態。TGFβ1で再活性化可能。線維化マーカー候補"},
      {term:"Kappa",full:"Kappa rule-based modeling language",desc:"生化学反応・状態遷移を分子書き換えルールで記述するグラフ言語。確率的シミュレーションに使用"},
      {term:"ECM",full:"extracellular matrix",desc:"細胞外基質。コラーゲン・フィブロネクチン等。線維化で過剰沈着し臓器硬化を招く"},
      {term:"reversion",full:"fibrosis reversion",desc:"線維化退縮。TGFβ1供給停止→iHSC再活性化低下→ECM分解が進む現象"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("06", [{ic:"stellate",cap:"HSC 7状態モデル"},{ic:"mouse",cap:"CCl4バリデーション"},{ic:"human",cap:"NASH患者RNAseq"},{ic:"liver",cap:"線維化退縮シミュレーション"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 06 Bouguéon PLOS CB 2024: Kappaモデル+CCl4マウス+ヒトNASH bulk RNAseq */
LP.methods("06", ["mouse","human","insilico","rnaseq"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №06 Kappa ABM：不活化ループ制御が治療標的 ===== */
LP.cinema("06", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("06","var(--F)")}${GLYPH.arrow("06b","var(--B)")}</defs>`+GLYPH.title("規則ベース多スケールモデル：不活化ループの制御が治療標的になりうる")
    +GLYPH.stellate("q",140,180,"qHSC（静止）")
    +GLYPH.stellate("a",400,180,"aHSC（活性化）")
    +GLYPH.stellate("i",400,330,"iHSC（不活化）")
    +`<line id="e1" x1="190" y1="180" x2="356" y2="180" stroke="var(--B)" stroke-width="1.8" marker-end="url(#ar06b)"/><text x="270" y="168" text-anchor="middle" font-size="10" fill="var(--B)">TGFβ1で活性化</text>`
    +`<line id="e2" x1="400" y1="222" x2="400" y2="290" stroke="var(--F)" stroke-width="1.8" marker-end="url(#ar06)"/><text x="466" y="262" text-anchor="middle" font-size="10" fill="var(--F)">不活化</text>`
    +`<path id="e3" d="M360,320 C220,320 150,250 138,222" fill="none" stroke="var(--F)" stroke-width="1.8" marker-end="url(#ar06)"/><text id="e3lbl" x="225" y="300" text-anchor="middle" font-size="10" fill="var(--F)">再活性化</text>`
    +GLYPH.layer("collagen")+GLYPH.tag("loop",560,250,"ループが回り続ける","var(--F)",150,true)+GLYPH.badge("good",600,355,"線維化","退縮 ✓","var(--F)"),
  build(K){
    return [
      {color:"E",t:2200,cap:"静止期HSC（qHSC）が定常状態にある。",run(){}},
      {color:"B",t:3000,cap:"① 閾値以上のTGFβ1が継続するとqHSC→aHSCへ活性化し、ECM産生で線維化が進む。",run(){
        K.flow(190,180,356,180,"var(--B)",{loop:3});
        K.T(()=>{K.morph("aShape",GLYPH.SPINDLE);K.attr("aShape","fill","#b0432f");},900);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(400,110),{len:140}),1500);
      }},
      {color:"F",t:3400,cap:"② 一部はiHSCへ不活化するが容易に再活性化する。この不活化ループが回り続けることが線維化の持続に必須。",run(){
        K.flow(400,222,400,290,"var(--F)",{loop:2});
        K.T(()=>{K.attr("iShape","fill","#cdbfae");K.flow(360,320,138,210,"var(--F)",{dur:1.3,loop:3});K.show(["loop"]);K.pulse("loop");},900);
      }},
      {color:"F",t:3800,cap:"③ 退縮シミュレーションでは、再活性化（iHSC→aHSC）を遮断するとループが止まり線維化が解消。＝不活化ループの制御が治療標的になりうる。",run(){
        K.unpulse("loop"); K.markX(225,290,"var(--H)"); K.attr("e3","stroke","var(--H)"); K.attr("e3","opacity","0.3"); K.text("e3lbl","再活性化を遮断");
        K.flow(400,290,400,222,"var(--F)",{loop:2});
        K.T(()=>{K.morph("aShape",GLYPH.QUIET);K.attr("aShape","fill","#d6a08e");K.attr("collagen","opacity","0.25");K.show(["good"]);},900);
      }},
    ];
  }
});
