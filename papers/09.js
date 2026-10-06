/* ============================================================
   №09 · Nature 2025 · Sugimoto A†, Saito Y†, Wang G†, Sun Q, Lin C, Lee KH, Geng Y, Rajbhan…
   HSCがR-spondin 3を介して肝細胞のzonation・再生・代謝を制御
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"09",
    added:"2026-05-30",
    title:"HSCがR-spondin 3を介して肝細胞のzonation・再生・代謝を制御",
    authors:"Sugimoto A†, Saito Y†, Wang G†, Sun Q, Lin C, Lee KH, Geng Y, Rajbhandari P, Hernandez C, Steffani M, Qie J, Savage T, Goyal DM, ..., Augustin HG, Schwabe RF",
    journal:"Nature",
    year:2025,
    vol:"640:752–761",
    doi:"10.1038/s41586-025-08677-w",
    url:"https://www.nature.com/articles/s41586-025-08677-w",
    primary:"B",
    tags:["B","E","H"],
    approach:"in vivo (条件付きKO mouse) ＋ scRNA-seq/空間TX ＋ ヒト患者データ",
    struct:{
      model:"in vivo",
      cells:["HSC","肝細胞"],
      triggers:["Rspo3遺伝学的欠損（条件付きKO）","HSC枯渇（ジフテリア毒素誘導）"],
      steatosis:"△", inflammation:"△", fibrosis:"○",
      readout:["RSPO3発現（HSC活性化の早期マーカー）","肝細胞CYP450発現（zonation指標）","肝再生率"],
      ignite:"HSC活性化（aHSC）→ RSPO3低下 → WNT/βカテニン減弱 → 肝細胞zonation障害 → CYP450↓・再生障害 → MASLD/ALD悪化。逆にqHSCがRSPO3を産生し続けることで正常zonationと肝機能が保たれる。",
      params:[{name:"HSC状態（qHSC=RSPO3高 vs aHSC=RSPO3低）→ WNT/βカテニン活性 → Zone 3遺伝子ON/OFF",note:""},{name:"RSPO3産生速度 → 肝細胞CYP450発現・再生速度",note:"Rspo3欠損で再生遅延を数値化"}],
      todos:["共培養でHSC添加時のRSPO3産生量と肝細胞CYP450発現を測定（HSCの保護機能を実証）","RSPO3低下を線維化タイムコースの早期マーカーとして採用（COL1A1・αSMAより早い）","ABMのHSCエージェントにRSPO3産生パラメータを追加（qHSC: 高 / aHSC: 低）"]
    },
    figure:"<svg viewBox='0 0 640 292' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar09' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--ink-soft)'/></marker><marker id='ar09b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker><marker id='ar09h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><text x='12' y='16' font-size='11' fill='var(--ink-soft)'>HSC→RSPO3→WNT/βカテニン→肝細胞Zone 3：静止HSCは保護的、活性化HSCは障害性</text><rect x='8' y='28' width='100' height='46' rx='6' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='58' y='48' text-anchor='middle' font-size='12'>qHSC</text><text x='58' y='64' text-anchor='middle' font-size='10' fill='var(--accent)'>RSPO3 ↑</text><line x1='108' y1='51' x2='144' y2='51' stroke='var(--ink-soft)' marker-end='url(#ar09)'/><text x='126' y='45' text-anchor='middle' font-size='9.5' fill='var(--ink-soft)'>RSPO3</text><rect x='146' y='28' width='118' height='46' rx='6' fill='var(--paper)' stroke='var(--E)' stroke-width='1.5'/><text x='205' y='47' text-anchor='middle' font-size='11.5' fill='var(--E)'>WNT/βカテニン ↑</text><text x='205' y='63' text-anchor='middle' font-size='10' fill='var(--E)'>LRP5/6増強</text><line x1='264' y1='51' x2='300' y2='51' stroke='var(--ink-soft)' marker-end='url(#ar09)'/><rect x='302' y='18' width='148' height='66' rx='6' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='376' y='38' text-anchor='middle' font-size='11.5'>肝細胞 Zone 3</text><text x='376' y='54' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>CYP450 ↑・再生 ↑</text><text x='376' y='70' text-anchor='middle' font-size='10.5' fill='var(--accent)'>Zonation 正常維持</text><line x1='450' y1='51' x2='486' y2='51' stroke='var(--ink-soft)' marker-end='url(#ar09)'/><rect x='488' y='28' width='144' height='46' rx='6' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='560' y='47' text-anchor='middle' font-size='11.5' fill='var(--accent)'>正常肝機能</text><text x='560' y='63' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>MASLD 保護</text><line x1='0' y1='100' x2='640' y2='100' stroke='var(--line-soft)' stroke-width='1' stroke-dasharray='4 3'/><text x='10' y='114' font-size='10' fill='var(--B)'>HSC活性化時（線維化条件）</text><rect x='8' y='120' width='100' height='46' rx='6' fill='var(--paper)' stroke='var(--B)' stroke-width='1.8'/><text x='58' y='140' text-anchor='middle' font-size='12'>aHSC</text><text x='58' y='156' text-anchor='middle' font-size='10' fill='var(--B)'>RSPO3 ↓</text><line x1='108' y1='143' x2='144' y2='143' stroke='var(--B)' marker-end='url(#ar09b)'/><text x='126' y='137' text-anchor='middle' font-size='9.5' fill='var(--B)'>RSPO3↓</text><rect x='146' y='120' width='118' height='46' rx='6' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='205' y='139' text-anchor='middle' font-size='11.5' fill='var(--B)'>WNT/βカテニン ↓</text><text x='205' y='155' text-anchor='middle' font-size='10' fill='var(--B)'>シグナル減弱</text><line x1='264' y1='143' x2='300' y2='143' stroke='var(--B)' marker-end='url(#ar09b)'/><rect x='302' y='110' width='148' height='66' rx='6' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='376' y='130' text-anchor='middle' font-size='11.5' fill='var(--B)'>Zonation 喪失</text><text x='376' y='146' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>CYP450 ↓・再生障害</text><text x='376' y='162' text-anchor='middle' font-size='10.5' fill='var(--B)'>肝代謝・解毒 ↓</text><line x1='450' y1='143' x2='486' y2='143' stroke='var(--B)' marker-end='url(#ar09b)'/><rect x='488' y='120' width='144' height='46' rx='6' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='560' y='139' text-anchor='middle' font-size='11.5' fill='var(--B)'>MASLD/ALD 悪化</text><text x='560' y='155' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>患者転帰と逆相関</text><rect x='120' y='202' width='400' height='54' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='2'/><text x='320' y='224' text-anchor='middle' font-size='12.5' fill='var(--H)'>治療コンセプト</text><text x='320' y='243' text-anchor='middle' font-size='11' fill='var(--H)'>RSPO3補充 / qHSC保護 → WNT回復 → Zonation正常化 → MASLD改善</text><path d='M58,166 C58,194 140,212 170,214' fill='none' stroke='var(--H)' stroke-dasharray='4 3' stroke-width='1.5' marker-end='url(#ar09h)'/><text x='12' y='278' font-size='10.5' fill='var(--G)'>★ RSPO3発現はHSC活性化とともに低下 → 患者転帰マーカー・線維化タイムコースの早期指標</text></svg>",
    method_figure:"<svg viewBox='0 0 640 240' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m09' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><text x='16' y='18' font-size='11.5' fill='var(--ink-soft)'>3実験アーム + ヒトデータ → RSPO3がHSCの保護的肝調節機能の必須因子と確立</text><rect x='8' y='30' width='156' height='50' rx='7' fill='var(--paper)' stroke='var(--ink-soft)' stroke-width='1.5'/><text x='86' y='52' text-anchor='middle' font-size='11.5'>条件付きHSC枯渇マウス</text><text x='86' y='69' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>DTA/DTR誘導</text><rect x='8' y='96' width='156' height='50' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.8'/><text x='86' y='118' text-anchor='middle' font-size='11.5' fill='var(--B)'>Rspo3 条件付きKO</text><text x='86' y='135' text-anchor='middle' font-size='10.5' fill='var(--B)'>HSC特異的 cKO</text><rect x='8' y='162' width='156' height='50' rx='7' fill='var(--paper)' stroke='var(--D)' stroke-width='1.5'/><text x='86' y='184' text-anchor='middle' font-size='11.5'>MASLD/ALD食 + cKO</text><text x='86' y='200' text-anchor='middle' font-size='10.5' fill='var(--D)'>疾患悪化確認</text><rect x='214' y='30' width='170' height='50' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/><text x='299' y='52' text-anchor='middle' font-size='11.5'>scRNA-seq + 空間TX</text><text x='299' y='69' text-anchor='middle' font-size='10.5' fill='var(--G)'>WNT活性・zonation解析</text><rect x='214' y='96' width='170' height='50' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='299' y='118' text-anchor='middle' font-size='11.5'>RSPO3必須性確認</text><text x='299' y='135' text-anchor='middle' font-size='10.5' fill='var(--B)'>HSC枯渇表現型を再現</text><rect x='214' y='162' width='170' height='50' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='299' y='184' text-anchor='middle' font-size='11.5'>肝ZON遺伝子・CYP450↓</text><text x='299' y='200' text-anchor='middle' font-size='10.5' fill='var(--D)'>肝再生・サイズ変化</text><path d='M164,55 C188,55 188,55 212,55' fill='none' stroke='var(--accent)' marker-end='url(#m09)'/><path d='M164,121 C188,121 188,121 212,121' fill='none' stroke='var(--accent)' marker-end='url(#m09)'/><path d='M164,187 C188,187 188,187 212,187' fill='none' stroke='var(--accent)' marker-end='url(#m09)'/><rect x='438' y='56' width='194' height='128' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='2'/><text x='535' y='78' text-anchor='middle' font-size='12'>ヒト患者コホート</text><text x='535' y='96' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>ALD・MASLD患者</text><text x='535' y='114' text-anchor='middle' font-size='10.5' fill='var(--H)'>RSPO3 ↓ ∝ 疾患悪化</text><text x='535' y='132' text-anchor='middle' font-size='10.5' fill='var(--H)'>転帰と逆相関</text><text x='535' y='150' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>HSC活性化でRSPO3↓</text><text x='535' y='168' text-anchor='middle' font-size='10.5' fill='var(--H)'>臨床マーカー候補</text><path d='M384,90 C410,90 412,100 436,100' fill='none' stroke='var(--accent)' stroke-dasharray='3 3' marker-end='url(#m09)'/></svg>",
    abstract_ja:"肝星細胞（HSC）は線維化の病態因子として知られてきたが、線維化に依存しない恒常性機能は不明確だった。本研究はまず、遺伝学的にHSCを枯渇させるとWNT/βカテニンシグナルと肝細胞のzonationが変化し、肝再生・CYP450代謝・傷害応答に顕著な影響が及ぶことを示した。そのうえで、HSCに豊富なWNT増強因子RSPO3が、これらHSCによる肝細胞調節機能を担うことを同定した。実際、HSC選択的にRspo3を欠損させると、HSC枯渇と同様に肝細胞の遺伝子発現・zonation・肝臓サイズ・再生・CYP450依存の解毒能が変化し、ALDやMASLDが悪化した。さらにRSPO3発現はHSC活性化とともに低下し、ALD・MASLD患者の転帰と逆相関した。こうしたHSCのRSPO3を介した保護的機能は他臓器のR-spondin発現間質ニッチに類似しており、治療概念として統合されるべきだと提唱した。",
    background:"HSCはECM産生による線維化の主役として研究されてきたため、正常肝における「非線維化機能」は見過ごされてきた。肝のzonation（門脈〜中心静脈帯域）ではZone 3の肝細胞がCYP450やWNT標的遺伝子を高発現するが、その維持機構は不明で、HSCの関与も分かっていなかった。RSPO3は#01でEC→HSCのプロ線維化クロストークとして登場したものの、HSC→RSPO3→肝細胞という保護的シグナルはこれまで報告がなかった。",
    achievements:[
      "条件付きHSC枯渇マウスで肝細胞のWNT/βカテニン活性・zonationが変化し、肝再生障害・CYP450低下・傷害感受性増大を実証。",
      "scRNA-seq・空間TXでHSCに富むRSPO3を同定。HSC選択的Rspo3欠損マウスがHSC枯渇表現型を完全に再現（RSPO3が必須因子の証明）。",
      "RSPO3はHSC活性化（線維化）時に低下し肝細胞保護機能が失われることを示した。",
      "Rspo3欠損がALD・MASLDを悪化させ、ヒト患者データでRSPO3が転帰と逆相関することを確認。",
      "RSPO3補充・qHSC保護が治療標的になりうることを提唱（Nature 2025）。"
    ],
    limitations:[
      "HSC枯渇は遺伝学的誘導モデルに依存し、完全・持続的な枯渇ではない。",
      "RSPO3産生担当HSCサブポピュレーション（qHSC vs aHSC）の定量比較は今後の課題。",
      "RSPO3低下がzonation障害とMASLD悪化を結ぶ因果の直接実証は不十分。",
      "RSPO3補充（組み換えタンパク・遺伝子療法）の前臨床検証は限定的。"
    ],
    connection:[
      "HSCの二面性の再定義：自系でHSCを4細胞共培養に入れる意義を「線維化点火材」だけでなく「RSPO3→肝細胞zonation・CYP450機能維持」の機能的ニッチとして格上げできる。低TGFβ1（qHSC条件）では肝細胞CYP450が保護され、活性化条件では機能が失われるという予測が立つ。",
      "RSPO3低下 = 線維化点火の早期マーカー：自系の線維化誘導時にRSPO3が低下するなら、COL1A1・αSMAより早い「線維化始動」の指標として位置づけられる。",
      "zonation再現の設計：酸素透過膜で好気条件を維持する自系でHSCのRSPO3産生が保たれれば、肝細胞CYP1A2・CYP3A4・βカテニン標的遺伝子が誘導されるかを検証できる。「RSPO3添加でzonation-likeを誘導」という陽性対照実験も設計可。",
      "ABM実装：「HSC状態（qHSC=RSPO3高 vs aHSC=RSPO3低）→ WNT/βカテニン活性 → Zone 3遺伝子ON/OFF → CYP450代謝能 → 肝細胞再生率」のルールをHSC-HEP連結パラメータに実装できる。#06の7状態モデルにRSPO3産生パラメータを追加した拡張が可能。",
      "既収録との接続：#01はEC→RSPO3→LGR6発現HSCというプロ線維化方向を示し、本論文（#09）はHSC→RSPO3→肝細胞WNT/zonationという保護方向を示す。RSPO3はEC-HSC間（#01）とHSC-肝細胞間（#09）の両軸で機能するシグナルハブ。#03（TGFβ→ATF4→HSC活性化）の下流にHSC活性化→RSPO3低下→MASLD悪化のカスケードが続く。#08（M2マクロファージ療法→炎症解消）との接続では、炎症解消→HSC活性化抑制→RSPO3回復→zonation正常化という治療回路が成立する。"
    ],
    glossary:[
      {term:"Wnt / WNT",full:"Wingless-related integration site ligands",desc:"発生・幹細胞・肝代謝を制御する分泌型シグナルリガンドファミリー。RSPO3がLRP5/6受容体でWntシグナルを増強"},
      {term:"β-catenin (CTNNB1)",full:"beta-catenin (CTNNB1)",desc:"WNTシグナルの転写共活性化因子。RSPO3→WNT活性化で核移行しZone 3肝細胞遺伝子を誘導"},
      {term:"CYP450",full:"cytochrome P450 enzymes (CYP1A2, CYP3A4 etc.)",desc:"ER/ミトコンドリア局在の薬物代謝酵素ファミリー。RSPO3→WNT→Zone 3のzonation維持に依存して発現"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("09", [{ic:"mouse",cap:"条件付きHSC/Rspo3 KOマウス"},{ic:"stellate",cap:"HSC-RSPO3産生"},{ic:"hepatocyte",cap:"肝細胞zonation"},{ic:"geneko",cap:"Rspo3 cKO"},{ic:"human",cap:"ヒト患者コホート"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 09 Sugimoto/Saito/Wang Nature 2025: 条件付きKOマウス+scRNA+空間TX+ヒトコホート+ELISA(serum RSPO3)+IHC */
LP.methods("09", ["mouse","human","crispr","scrna","spatial","qpcr","wb","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №09 RSPO3/WNT-βカテニン：HSCが肝細胞zonationを制御 ===== */
LP.cinema("09", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("09","var(--E)")}</defs>`+GLYPH.title("HSC由来RSPO3→WNT/βカテニン→肝細胞zonation・再生・代謝")
    +GLYPH.hep("hep",360,90,1.5,"肝細胞 Zone3")
    +GLYPH.receptor("wntR",430,108,"WNT受容体","var(--E)")
    +GLYPH.nucleus("nuc",470,210,40,30,"核")
    +GLYPH.tf("bcat",470,210,"βカテニン","var(--E)")
    +GLYPH.tag("cyp",470,300,"CYP450/再生 ✓","var(--E)",140,true)
    +GLYPH.stellate("hsc",140,250,"肝星細胞")
    +GLYPH.cytokine("rspo",230,250,"RSPO3","var(--E)",true)+GLYPH.layer("collagen"),
  build(K){
    return [
      {color:"E",t:3000,cap:"静止期HSCがRSPO3（分泌タンパク）を出し、肝細胞のWNT受容体を増強。WNT/βカテニンが核へ入りzonation遺伝子（CYP450）が保たれる。",run(){
        K.show(["rspo"]); K.flow(238,245,420,115,"var(--E)",{dur:1.2,loop:2});
        K.T(()=>{K.show(["bcat"]);K.flow(440,130,470,205,"var(--E)",{loop:2});K.show(["cyp"]);},1200);
      }},
      {color:"B",t:3200,cap:"① HSCが活性化（aHSC）するとRSPO3の供給が低下し、WNT/βカテニンシグナルが減弱する。",run(){
        K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC");
        K.attr("rspo","opacity","0.2"); K.attr("bcat","opacity","0.2"); K.attr("cyp","opacity","0.3");
        K.add("text",{x:470,y:250,"text-anchor":"middle","font-size":"10.5",fill:"var(--B)"}).textContent="RSPO3↓ → WNT↓ → βカテニン核外へ";
      }},
      {color:"B",t:3600,cap:"② Zone3のCYP450・再生能が低下し肝代謝・解毒が破綻 → MASLD/ALDが悪化し線維化が進む。",run(){
        K.attr("hep","opacity","0.55");
        K.add("text",{x:455,y:165,"text-anchor":"middle","font-size":"10.5",fill:"var(--B)"}).textContent="CYP450↓・再生障害";
        K.draw("collagen",GLYPH.collagenAt(150,310),{len:150});
      }},
    ];
  }
});
