/* ============================================================
   №16 · Science Translational Medicine 2025 · Shi H, Wang X, Sloas C, ..., Klichinsky M, Tabas I
   Kupffer細胞のTIM4依存efferocytosis低下がアポトーシス肝細胞を蓄積させHSCを活性化し線維化を点火（TIM4回復/IL-10で抑制）
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"16",
    title:"Kupffer細胞のTIM4依存efferocytosis低下がアポトーシス肝細胞を蓄積させHSCを活性化し線維化を点火（TIM4回復/IL-10で抑制）",
    authors:"Shi H, Wang X, Sloas C, ..., Klichinsky M, Tabas I",
    journal:"Science Translational Medicine",
    year:2025,
    vol:"17(815):eadv2106",
    doi:"10.1126/scitranslmed.adv2106",
    url:"https://www.science.org/doi/10.1126/scitranslmed.adv2106",
    primary:"C",
    tags:["C","B","H"],
    approach:"in vivo（FPC食・HF-CDAA食の2種MASHマウス＋抗TIM4抗体／KC特異的Timd4 KO（Clec4f-Cre）／誘導性TIM4回復トランスジェニック／TIM4+マクロファージ細胞移植）＋ ex vivo マクロファージ–HSCクロストークモデル ＋ ヒト肝試料・初代ヒトKC",
    added:"2026-06-02",
    abstract_ja:"肝細胞アポトーシスはMASH（代謝機能障害関連脂肪肝炎）の中核的特徴だが、生じたアポトーシス肝細胞がその後どう処理されるのかはほとんど分かっていなかった。本研究は「MASHでは肝マクロファージによる死細胞貪食（efferocytosis）がefferocytosis受容体TIM4（遺伝子Timd4）の発現低下のために障害され、その結果として線維化が駆動される」という仮説を検証した。FPC食またはHF-CDAA食を与えたマウス、およびヒトMASH肝のいずれでもアポトーシス肝細胞が蓄積し、これがefferocytosisの障害とTIM4の喪失に対応していた。中和抗TIM4抗体の投与、あるいはKupffer細胞（KC）特異的なTimd4遺伝子欠損（Clec4f-Cre）は、肝マクロファージのefferocytosisを低下させ、コラーゲン産生性HSC（肝星細胞）のプロ線維化活性化を増強して、線維性MASHへの進行を加速した。逆に、マクロファージTimd4の遺伝的回復やTIM4+マクロファージの細胞移植は、アポトーシス肝細胞のクリアランスを高めてHSC活性化と肝線維化を低減した。ex vivoのマクロファージ–HSCクロストークモデルとHF-CDAA MASHモデルを用いた解析から、efferocytosisを行ったマクロファージがインターロイキン10（IL-10）の分泌へとリプログラムされ、HSC上のIL-10受容体（IL-10R）を介してそのプロ線維化活性化を抑えることが示された。これらの知見は脂肪肝から早期MASH線維化への進行を律する鍵となる過程を明らかにし、線維性MASH進行を予防する機構ベースの治療戦略を提示した。",
    background:"MASHでは過栄養・脂肪毒性によって肝細胞のアポトーシスが恒常的に生じるが、健常な組織では死細胞は速やかにマクロファージのefferocytosisで処理され、二次壊死による炎症惹起や周囲細胞の活性化が回避される。ところがMASHが進むと肝常在マクロファージであるKCが減少し単球由来マクロファージへの置換も進むため、死細胞処理の質が低下する可能性が指摘されてきた。efferocytosisの開始には死細胞膜のホスファチジルセリンを認識する一連の受容体が必要で、TIM4はそのテザリング（係留）受容体の代表格である。しかしMASH肝でTIM4依存のefferocytosisが実際に破綻しているのか、その破綻が線維化の点火にどう因果的に効くのか、回復させれば線維化を止められるのかは、いずれも証明されていなかった。脂肪化（steatosis）から線維化への移行点を分子的に押さえる課題にも直結する。",
    achievements:[
      "ヒトMASH肝・FPC食・HF-CDAA食マウスのいずれでも**アポトーシス肝細胞（apHC）が蓄積**し、肝マクロファージの**efferocytosis障害**と**TIM4（Timd4）低下**に対応することをTUNEL/cleaved caspase-3とマクロファージマーカー共染色で定量。",
      "**中和抗TIM4抗体**または**KC特異的Timd4欠損（Clec4f-Cre）**でefferocytosisを下げると、HSC活性化（**αSMA・COL1A1・OPN**陽性域）が増しSirius red陽性線維化が増悪—efferocytosis低下が線維化を能動的に点火。",
      "**誘導性マクロファージTimd4回復**および**TIM4+マクロファージの細胞移植（マウス：Timd4導入造血幹細胞由来マクロファージ／ヒト：TIMD4導入単球由来HMDM）**が、apHCクリアランスを高めHSC活性化と線維化を低減—治療的に巻き戻せることを実証。",
      "機構として、apHCを貪食したマクロファージが**IL-10分泌へリプログラム**され、HSC上の**IL-10R**を介して**Spp1・Timp1**などプロ線維化遺伝子を抑制（ex vivoクロストーク＋抗IL-10R抗体で確認）。"
    ],
    limitations:[
      "因果実証はマウス（FPC・HF-CDAA食）と初代細胞・ex vivoクロストーク中心で、ヒトでのTIM4回復療法の有効性・安全性は未検証で、マクロファージ細胞療法の反復投与は慢性疾患では拡張性に課題がある（mRNA等への置換を著者は展望）。",
      "MERTK等の他のefferocytosis受容体のmRNAはMASHで低下しておらず（MerTK欠失の影響なしとする先行報告とも整合）TIM4低下が主因と位置づけられているが、TREM2など他受容体との相対寄与や、apHCがマクロファージに取り込まれてIL-10産生へリプログラムされる分子機構は未解明。",
      "IL-10経路がHSC沈静化の唯一の媒介とは限らず、efferocytosis後マクロファージが出す他の抗炎症・脂質代謝性メディエーターの寄与は完全には排除できていない。",
      "KC特異性はClec4f-Cre依存で、MASH進行に伴うKC減少・単球由来置換のなかでどの集団がTIM4回復の主役かは部分的にしか解像されていない。"
    ],
    connection:[
      "線維化点火の生理的トリガーとして「死細胞処理の破綻」を導入できる。私の系の最重要課題「steatosisは堅牢だが線維化をどう点火するか」に対し、脂肪毒性で生じたapHCをKCが片付けきれないこと自体が点火因子になることを示す。KC共培養の狙いをLPSセカンドヒットだけでなく「死細胞負荷×efferocytosis能」軸で再設計できる。",
      "ex vivoマクロファージ–HSCクロストークモデルは私の4細胞共培養の縮約版そのもの。抗TIM4抗体やTimd4ノックダウンでefferocytosisを止める（線維化増悪＝必要条件）、TIM4+マクロファージやIL-10添加で抑える（十分条件のネガコン）という双方向操作を自系に直接移植できる。",
      "読み出し指標の具体化：apHC蓄積（TUNEL/cl-caspase3とマクロファージの共局在比＝efferocytosis効率）、IL-10分泌、HSCのSpp1/Timp1/COL1A1/αSMA。ステアトーシス→線維化移行の定量リードアウトに採用できる。",
      "#13（Wang, Tabas—肝細胞caspase-8→Meteorin→HSC）と同じTabasラボの姉妹的知見で、いずれも肝細胞の死／死にかけがHSC活性化のハブになる軸。#13がアポトーシス非依存の分泌経路だったのに対し本論文はアポトーシス細胞そのものの処理不全が点火する相補経路。#02（NCF1→KCフェロトーシス）・#10（GPNMB+MΦ）ともマクロファージ機能状態が線維化を左右する点で連続する。",
      "ABM実装：efferocytosisを「KCエージェントが近傍apHCを確率的に貪食→TIM4状態（脂質負荷の関数で減衰）に依存→貪食KCはIL-10分泌状態へ遷移→近傍HSCの活性化確率を低下」とルール化。apHC生成速度とefferocytosis速度の収支が閾値を超えるとapHCが蓄積しHSC活性化が点火する移行点を数理表現でき、#06（HSC 7状態モデル）の外部入力に接続可能。"
    ],
    struct:{
      model:"mixed",
      cells:["Kupffer細胞(KC)","肝マクロファージ","肝細胞(アポトーシス)","HSC","BMDM/HMDM(移植)"],
      triggers:["FPC食","HF-CDAA食","肝細胞アポトーシス蓄積","efferocytosis障害(TIM4低下)"],
      steatosis:"○",
      inflammation:"○",
      fibrosis:"○",
      readout:["apHC蓄積(TUNEL/cl-CASP3とMΦ共局在比)","Sirius red陽性域","COL1A1/αSMA/OPN陽性域","HSC Spp1/Timp1 mRNA","マクロファージIL-10分泌"],
      ignite:"KCのTIM4低下→apHCが片付けられず蓄積→HSCがプロ線維化活性化（IL-10欠如で脱抑制）",
      params:[
        {name:"efferocytosis効率",note:"KCが近傍apHCを貪食する確率。TIM4状態に依存し、脂質負荷で減衰"},
        {name:"apHC生成速度 vs クリアランス速度",note:"両者の収支が閾値超でapHC蓄積→HSC点火。移行点をABMで表現"},
        {name:"KC機能状態遷移",note:"apHC貪食→IL-10分泌状態へリプログラム"},
        {name:"IL-10→IL-10R→HSC",note:"近傍HSCのSpp1/Timp1を抑制しqHSC維持。HSC活性化確率を下げる抑制項"}
      ],
      todos:[
        "4細胞共培養にアポトーシス肝細胞負荷を与え、KCのefferocytosis効率と線維化（αSMA/COL1A1）の関係を定量",
        "抗TIM4抗体／Timd4ノックダウンをefferocytosis阻害ネガコンとして導入し線維化増悪を確認",
        "IL-10またはTIM4+マクロファージ添加でHSC活性化が抑制されるか（十分条件）を検証",
        "apHC蓄積量とIL-10をABMのHSC活性化外部入力に実装"
      ]
    },
    figure:`<svg viewBox='0 0 640 360' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs>
    <marker id='ar16' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>
    <marker id='ar16h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker>
  </defs>
  <rect x='0' y='0' width='640' height='360' fill='var(--paper)'/>
  <text x='320' y='20' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>TIM4依存efferocytosisが線維化の点火を分ける</text>
  <rect x='14' y='36' width='300' height='306' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/>
  <text x='164' y='54' text-anchor='middle' font-size='10.5' fill='var(--B)' font-weight='600'>MASH：KCのTIM4↓ → efferocytosis障害</text>
  <ellipse cx='80' cy='110' rx='30' ry='24' fill='#e8b0a0' stroke='#b05038' stroke-width='1.6'/>
  <text x='80' y='108' text-anchor='middle' font-size='8.5' fill='#7a2c20'>アポトーシス</text>
  <text x='80' y='120' text-anchor='middle' font-size='8.5' fill='#7a2c20'>肝細胞(apHC)</text>
  <ellipse cx='150' cy='150' rx='22' ry='18' fill='#e8b0a0' stroke='#b05038' stroke-width='1.2' opacity='0.8'/>
  <ellipse cx='60' cy='170' rx='20' ry='16' fill='#e8b0a0' stroke='#b05038' stroke-width='1.2' opacity='0.8'/>
  <path d='M200,118 C214,116 222,128 218,140 C226,150 212,162 200,156 C186,164 174,150 180,138 C172,124 188,110 200,118 Z' fill='#5d6470' stroke='#828a96' stroke-width='1.3'/>
  <circle cx='197' cy='137' r='5' fill='#3a3f48'/>
  <text x='200' y='184' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>KC（TIM4低）</text>
  <text x='200' y='100' text-anchor='middle' font-size='9' fill='var(--B)' font-weight='600'>TIM4↓</text>
  <text x='118' y='205' text-anchor='middle' font-size='9' fill='var(--B)'>apHC蓄積（貪食されない）</text>
  <path d='M164,225 L164,250' stroke='var(--B)' stroke-width='1.6' marker-end='url(#ar16)'/>
  <path d='M164,300 L182,278 L172,294 L192,296 L173,303 L184,320 L164,307 L144,320 L155,303 L136,296 L156,294 L146,278 Z' fill='#b0432f' stroke='var(--B)' stroke-width='1.4'/>
  <circle cx='164' cy='300' r='5' fill='#7a3a2c'/>
  <text x='164' y='335' text-anchor='middle' font-size='9' fill='var(--B)'>活性化HSC：COL1A1/αSMA/OPN↑ → 線維化</text>
  <rect x='326' y='36' width='300' height='306' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/>
  <text x='476' y='54' text-anchor='middle' font-size='10.5' fill='var(--C)' font-weight='600'>TIM4回復/TIM4+MΦ移植 → efferocytosis↑</text>
  <ellipse cx='400' cy='120' rx='26' ry='20' fill='#e8b0a0' stroke='#b05038' stroke-width='1.4' opacity='0.5' stroke-dasharray='3,2'/>
  <text x='400' y='123' text-anchor='middle' font-size='8' fill='#7a2c20'>apHC(貪食中)</text>
  <path d='M470,118 C484,116 492,128 488,140 C496,150 482,162 470,156 C456,164 444,150 450,138 C442,124 458,110 470,118 Z' fill='#5d7a58' stroke='#3d5a38' stroke-width='1.3'/>
  <circle cx='467' cy='137' r='5' fill='#2a3e26'/>
  <text x='470' y='100' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>TIM4+</text>
  <text x='470' y='184' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>KC/移植MΦ</text>
  <path d='M460,150 C450,135 420,130 408,130' stroke='var(--C)' stroke-width='1.4' fill='none' marker-end='url(#ar16h)'/>
  <circle cx='476' cy='205' r='7' fill='var(--C)'/>
  <line x1='476' y1='194' x2='476' y2='189' stroke='var(--C)' stroke-width='1.8'/><line x1='484' y1='197' x2='488' y2='193' stroke='var(--C)' stroke-width='1.8'/><line x1='487' y1='205' x2='493' y2='205' stroke='var(--C)' stroke-width='1.8'/><line x1='468' y1='197' x2='464' y2='193' stroke='var(--C)' stroke-width='1.8'/>
  <text x='476' y='225' text-anchor='middle' font-size='9' fill='var(--C)' font-weight='600'>IL-10分泌</text>
  <path d='M476,232 L476,255' stroke='var(--C)' stroke-width='1.6' marker-end='url(#ar16h)'/>
  <path d='M476,300 L492,282 L484,296 L502,298 L485,304 L496,318 L476,306 L456,318 L467,304 L450,298 L468,296 L460,282 Z' fill='#d6a08e' stroke='var(--C)' stroke-width='1.4'/>
  <circle cx='476' cy='300' r='5' fill='#7a3a2c'/>
  <text x='476' y='270' text-anchor='middle' font-size='8.5' fill='var(--C)'>IL-10R</text>
  <text x='476' y='335' text-anchor='middle' font-size='9' fill='var(--C)'>HSC活性化↓ → 線維化抑制</text>
</svg>`,
    method_figure:`<svg viewBox='0 0 640 250' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>
  <defs><marker id='m16' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>
  <rect x='0' y='0' width='640' height='250' fill='var(--paper)'/>
  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>実験デザイン：TIM4を「下げる/戻す」双方向の介入</text>
  <rect x='18' y='40' width='150' height='80' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/>
  <text x='93' y='62' text-anchor='middle' font-size='10' fill='var(--ink)' font-weight='600'>MASHモデル</text>
  <text x='93' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>FPC食 / HF-CDAA食</text>
  <text x='93' y='96' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>マウス＋ヒトMASH肝</text>
  <text x='93' y='112' text-anchor='middle' font-size='8.5' fill='var(--B)'>apHC蓄積・TIM4↓を確認</text>
  <path d='M168,72 L210,72' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m16)'/>
  <rect x='212' y='44' width='190' height='66' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>
  <text x='307' y='64' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>① TIM4を下げる（loss）</text>
  <text x='307' y='80' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>抗TIM4抗体 / Clec4f-Cre Timd4 KO</text>
  <text x='307' y='96' text-anchor='middle' font-size='8.5' fill='var(--B)'>→ efferocytosis↓・線維化↑</text>
  <path d='M168,96 L200,150 L210,150' stroke='var(--accent)' stroke-width='1.3' fill='none' marker-end='url(#m16)'/>
  <rect x='212' y='130' width='190' height='80' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>
  <text x='307' y='150' text-anchor='middle' font-size='9.5' fill='var(--C)' font-weight='600'>② TIM4を戻す（gain）</text>
  <text x='307' y='166' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>誘導性CD68rtTA:TRE-TIMD4</text>
  <text x='307' y='181' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>TIM4+ BMDM/HMDM 細胞移植</text>
  <text x='307' y='197' text-anchor='middle' font-size='8.5' fill='var(--C)'>→ efferocytosis↑・線維化↓</text>
  <path d='M402,77 L440,77' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m16)'/>
  <path d='M402,170 L440,120' stroke='var(--accent)' stroke-width='1.3' fill='none' marker-end='url(#m16)'/>
  <rect x='442' y='70' width='184' height='110' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.4'/>
  <text x='534' y='92' text-anchor='middle' font-size='9.5' fill='var(--ink)' font-weight='600'>機構解明</text>
  <text x='534' y='110' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>ex vivo MΦ–HSCクロストーク</text>
  <text x='534' y='128' text-anchor='middle' font-size='8.5' fill='var(--C)'>貪食MΦ → IL-10分泌</text>
  <text x='534' y='146' text-anchor='middle' font-size='8.5' fill='var(--C)'>IL-10R → HSC Spp1/Timp1↓</text>
  <text x='534' y='164' text-anchor='middle' font-size='8' fill='var(--ink-soft)'>抗IL-10R抗体で効果消失＝必要</text>
</svg>`,
    glossary:[
      {term:"TIM4",full:"T cell immunoglobulin and mucin domain containing 4 (gene Timd4)",desc:"アポトーシス細胞膜のホスファチジルセリンを認識する係留型efferocytosis受容体。MASH肝マクロファージで発現低下し、回復が抗線維化標的になる。"},
      {term:"efferocytosis",full:"efferocytosis",desc:"マクロファージ等によるアポトーシス細胞の貪食除去。破綻すると二次壊死・炎症・線維化を招く。"},
      {term:"apHC",full:"apoptotic hepatocyte",desc:"アポトーシス肝細胞。MASHで蓄積し、処理不全がHSC活性化を点火する。"},
      {term:"IL10",full:"interleukin-10",desc:"抗炎症性サイトカイン。efferocytosisを行ったマクロファージが分泌へリプログラムされ、HSCのプロ線維化活性化を抑える。"},
      {term:"IL-10R",full:"interleukin-10 receptor",desc:"IL-10受容体。HSC上で活性化されるとSpp1/Timp1などプロ線維化遺伝子発現を抑える。"},
      {term:"KC",full:"Kupffer cell",desc:"肝常在マクロファージ。MASHで減少・機能変化し、本論文ではTIM4依存efferocytosisの主役。"},
      {term:"HSC",full:"hepatic stellate cell",desc:"肝星細胞。活性化（αSMA・COL1A1産生）して線維化の中心を担う。"},
      {term:"SPP1",full:"secreted phosphoprotein 1 (osteopontin/OPN)",desc:"活性化HSC・線維化のマーカー遺伝子。IL-10R活性化で発現が抑制される。"},
      {term:"Timp1",full:"tissue inhibitor of metalloproteinases 1",desc:"メタロプロテアーゼ阻害因子。ECM分解を抑え線維化を促す活性化HSCのマーカー遺伝子。"},
      {term:"COL1A1",full:"collagen type I alpha 1 chain",desc:"I型コラーゲンα1鎖。活性化HSCが過剰産生する線維化の主要ECM・読み出し指標。"},
      {term:"αSMA",full:"alpha-smooth muscle actin (ACTA2)",desc:"活性化HSC/筋線維芽細胞マーカー・線維化リードアウト。"},
      {term:"Clec4f",full:"C-type lectin domain family 4 member F",desc:"Kupffer細胞特異的マーカー。Clec4f-CreはKC選択的遺伝子操作の駆動系として使用。"},
      {term:"BMDM",full:"bone marrow-derived macrophage",desc:"骨髄由来マクロファージ。本論文では移植後の肝局在確認（Luc-Mϕ）などに用い、TIM4+移植細胞（マウス）はTimd4導入造血幹細胞から分化させたマクロファージ。"},
      {term:"HMDM",full:"human monocyte-derived macrophage",desc:"ヒト単球由来マクロファージ。TIMD4導入細胞療法のヒト版モデル。"},
      {term:"HF-CDAA",full:"high-fat choline-deficient L-amino acid-defined diet",desc:"高脂肪・コリン欠乏アミノ酸規定食。線維化を伴うMASHを再現するマウス食餌。"},
      {term:"FPC",full:"fructose-palmitate-cholesterol diet",desc:"果糖・パルミチン酸・コレステロール食。ヒトMASHに近い病態を再現するマウス食餌。"},
      {term:"TUNEL",full:"terminal deoxynucleotidyl transferase dUTP nick end labeling",desc:"アポトーシス/死細胞のDNA断片を標識する染色法。efferocytosis効率の定量に使用。"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("16", [{ic:"macrophage",cap:"KC/マクロファージのTIM4依存efferocytosis"},{ic:"hepatocyte",cap:"アポトーシス肝細胞(apHC)蓄積"},{ic:"stellate",cap:"HSC活性化→線維化点火"},{ic:"mouse",cap:"FPC/HF-CDAA食MASHマウス＋KC特異的KO"},{ic:"human",cap:"ヒトMASH肝・初代ヒトKC/HMDM"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 16 Shi/Tabas Sci Transl Med 2025: 2MASHモデル+Clec4f-Cre TIM4 KO+細胞移植+ex vivo共培養+FACS+ELISA(IL-10) */
LP.methods("16", ["mouse","human","invitro","crispr","drug","facs","wb","qpcr","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №16 KC TIM4 efferocytosis障害→apHC蓄積→HSC活性化→線維化（TIM4回復/IL-10で抑制） ===== */
LP.cinema("16", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("16")}${GLYPH.arrow("16","var(--B)")}</defs>`
    +GLYPH.title("KCのTIM4依存efferocytosis破綻 → アポトーシス肝細胞(apHC)蓄積 → HSC活性化 → 線維化（TIM4回復/IL-10で抑制）")
    +GLYPH.hep("hep",24,66,1.25,"MASH肝細胞")
    +`<g id="apEarly" class="fade"><ellipse cx="252" cy="150" rx="16" ry="13" fill="#e8b0a0" stroke="#b05038" stroke-width="1.3" stroke-dasharray="3,2"/><text x="252" y="124" text-anchor="middle" font-size="9" fill="#7a2c20">apHC</text></g>`
    +`<g id="apAccum" class="fade"><ellipse cx="250" cy="208" rx="15" ry="12" fill="#e8b0a0" stroke="#b05038" stroke-width="1.2" stroke-dasharray="3,2"/><ellipse cx="305" cy="234" rx="15" ry="12" fill="#e8b0a0" stroke="#b05038" stroke-width="1.2" stroke-dasharray="3,2"/><ellipse cx="360" cy="206" rx="15" ry="12" fill="#e8b0a0" stroke="#b05038" stroke-width="1.2" stroke-dasharray="3,2"/><ellipse cx="290" cy="180" rx="13" ry="11" fill="#e8b0a0" stroke="#b05038" stroke-width="1.2" stroke-dasharray="3,2"/><ellipse cx="350" cy="256" rx="13" ry="11" fill="#e8b0a0" stroke="#b05038" stroke-width="1.2" stroke-dasharray="3,2"/><text x="300" y="290" text-anchor="middle" font-size="9.5" fill="var(--B)">apHC蓄積（貪食されず）</text></g>`
    +GLYPH.mac("kc",345,150,"Kupffer細胞","#5d6470")
    +GLYPH.receptor("tim4",345,116,"TIM4","var(--C)")
    +`<g id="il10Layer" class="fade">`+GLYPH.cytokine("il10",470,238,"IL-10","var(--C)")+`</g>`
    +GLYPH.stellate("hsc",560,322,"肝星細胞")
    +GLYPH.receptor("il10r",560,268,"IL-10R","var(--C)")
    +GLYPH.layer("collagen")
    +GLYPH.pill("drug",606,72,"TIM4回復 / TIM4+MΦ移植",178)
    +GLYPH.badge("good",642,322,"線維化","抑制 ✓","var(--C)"),
  build(K){
    const dp=[[80,150],[120,172],[100,128],[152,158],[72,192]];
    return [
      {color:"E",t:2800,cap:"① 健常な肝類洞。Kupffer細胞(KC)はTIM4でアポトーシス肝細胞(apHC)を速やかに貪食(efferocytosis)し、HSCは静止期(qHSC)に保たれる。",run(){
        K.show(["apEarly"]);
        K.flow(252,150,345,150,"var(--C)",{dur:1.1,loop:2});
        K.T(()=>K.hide(["apEarly"]),1700);
      }},
      {color:"D",t:3600,cap:"② MASHで肝細胞に脂肪滴が蓄積(steatosis)しアポトーシスが増える。一方KCのTIM4が低下してefferocytosisが破綻し、apHCが処理されず蓄積していく。",run(){
        addDrops(K,"hepDrops",dp,"lip16");
        K.T(()=>{K.attr("tim4","opacity","0.3");K.show(["apAccum"]);},1300);
        K.T(()=>{K.flow(252,150,345,150,"var(--B)",{dur:0.9,loop:1});K.markX(320,150,"var(--B)");},2300);
      }},
      {color:"B",t:4200,cap:"③ apHCが蓄積し、efferocytosis後のマクロファージIL-10産生も失われるためHSCへの抑制が外れ、プロ線維化活性化が進む。qHSC→aHSC(筋線維芽細胞)へ転換し、COL1A1/αSMA/OPNを産生して線維化が点火する。",run(){
        K.flow(330,220,560,300,"var(--B)",{dur:1.3,loop:2});
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC（aHSC）");},1400);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(560,386),{len:160}),2300);
      }},
      {color:"H",t:4400,cap:"④ TIM4を回復、またはTIM4+マクロファージを移植するとefferocytosisが回復しapHCを処理。貪食したMΦはIL-10を分泌し、HSCのIL-10Rを介してSpp1/Timp1を抑制→HSCの活性化が抑えられ線維化の進行が抑制される。",run(){
        K.show(["drug"]);
        K.T(()=>{
          K.attr("tim4","opacity","1");
          K.flow(305,225,345,155,"var(--C)",{dur:1.0,loop:2});
          K.T(()=>{
            K.attr("apAccum","opacity","0.15");
            K.show(["il10Layer"]);K.pulse("il10");
            K.flow(470,238,560,292,"var(--C)",{dur:1.1,loop:2});
            K.T(()=>{
              K.pulse("il10r");
              K.morph("hscShape",GLYPH.QUIET);K.attr("hscShape","fill","#d6a08e");K.text("hscCap","静止期へ（qHSC）");
              K.attr("collagen","opacity","0.25");
              K.show(["good"]);
            },1300);
          },1300);
        },800);
      }},
    ];
  }
});
