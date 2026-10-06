/* ============================================================
   №35 · Clinical and Molecular Hepatology 2024 · Qu J, Wang L, Li Y, Li X（北京中医薬大学）
   LSECの脱分化（capillarization）からEndMT・ECM産生へ——血管分泌シグナルとHSCとのクロストークを介した線維化への寄与とLSEC標的治療
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"35", primary:"E",
    title:"LSECの脱分化（capillarization）からEndMT・ECM産生へ——血管分泌シグナルとHSCとのクロストークを介した線維化への寄与とLSEC標的治療",
    authors:"Qu J, Wang L, Li Y, Li X（北京中医薬大学）",
    journal:"Clinical and Molecular Hepatology",
    year:2024,
    vol:"30:303-325",
    doi:"10.3350/cmh.2024.0022",
    url:"https://e-cmh.org/journal/view.php?doi=10.3350/cmh.2024.0022",
    catPrimary:"E",
    catSub:["B"],
    tags:["E","B"],
    summary:"LSECの肝線維化への関与を整理した総説（PubMedで「liver sinusoidal endothelial cell」×「liver fibrosis」を検索し、過去10年・IF≥3の代表的研究95報を収集）。LSECは損傷に最も脆弱な肝細胞の一つで、defenestration・capillarization・血管新生、炎症性表現型への移行、EndMTなどの変化を経て肝の恒常性維持能を失う。Ruanらの報告では、capillarizedなLSECが部分的EndMTを起こしてコラーゲン等のECM成分を過剰産生し、正常→脱分化→capillarization→EndMTと連続的に変化して線維化を促進する。MKL1/STAT3–Twist1、BRG1–NOX4、HMGB1、ROS、オートファジー障害などがEndMTに関わる。LSECはNO（eNOS–sGC）経路や血管分泌シグナル、HSC・肝細胞とのクロストークを通じても線維化に関与し、静止HSCを維持する能力の喪失が鍵となる。LSEC標的治療としてeNOS/NO経路の調整、fenestraeの保護・回復、抗血管新生薬、lanifibranor等が整理されているが、細胞・動物段階が中心で臨床には至っていないとされる。",
    connection:["LSEC→HSC活性化という上流シグナル関係を理解するために重要。自分の系ではLSECを加えたことがHSC線維化をどう修飾するかを調べるとき、LSEC capillarization具合→HSC活性化の因果評価フレームとして使える。No.32（He 2024 LSECとMAFLDの総説）と組み合わせてLSECの構造的・機能的完全性評価体系を構築できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "LSECは血液と肝細胞・Disse腔の間で物質交換を担う特殊な内皮で、慢性肝障害の最初の応答細胞として線維化の開始と増悪に関与する。本総説はLSECの脱分化（defenestration・capillarization）、血管新生、炎症性表現型や内皮–間葉転換（EndMT）といった表現型変化、NO経路・血管分泌シグナル、HSC・肝細胞とのコミュニケーションを整理する。capillarizedなLSECが部分的EndMTを起こして過剰なECM成分を産生し線維化を促進するとの報告（TGF-β誘導EndMTをMKL1/STAT3–Twist1が増強するなど）も取り上げ、LSECを線維化の受動的指標ではなく能動的な線維化貢献細胞として捉える視座を提供する。あわせてLSEC標的の抗線維化薬の効果と作用機序を整理する。",
    "background": "LSECは慢性肝障害の最初の応答細胞だが、肝線維化におけるその役割は見過ごされがちだった。従来capillarizationはLSECの『脱分化』として捉えられてきたが、近年LSECがEndMTを経てECM産生に寄与する可能性も報告された。LSEC→HSCの上流関係に加え、LSEC自身の線維化寄与や標的治療を整理する必要があった。",
    "achievements": ["LSECの**脱分化（defenestration・capillarization）と、その後のEndMT（内皮–間葉転換）**を連続的な表現型変化として整理した。", "EndMTを起こしたLSECが**コラーゲン等のECM成分を過剰産生**して線維化を促進するとの報告と、その制御因子（MKL1/STAT3・BRG1–NOX4・HMGB1・ROSなど）をまとめた。", "LSECを**能動的な線維化貢献細胞**として捉え、NO経路・fenestrae保護・EndMT抑制（silymarin、クロロゲン酸など）を含むLSEC標的治療の候補を整理した。"],
    "limitations": ["総説であり、in vivoでのLSEC-EndMTの定量的寄与は今後の検証課題。", "線維化に伴うEndMTの誘因に関する情報は限られる（総説自身が指摘。過剰なROSが重要な因子の可能性）。", "紹介されたLSEC標的薬は細胞・動物研究が中心で臨床研究に進んでおらず、LSECへの特異的な標的化も未達である（総説が指摘）。"],
    "glossary": [{"term": "EndMT", "full": "endothelial-mesenchymal transition（内皮–間葉転換）", "desc": "LSECが内皮機能を失い間葉様の性質を獲得する過程。capillarizedなLSECが部分的EndMTでECM成分を過剰産生し線維化を促進するとの報告がある"}, {"term": "ECM", "full": "extracellular matrix（細胞外マトリックス）", "desc": "コラーゲン等の線維化基質。EndMTを起こしたLSECも産生に寄与しうる"}, {"term": "gatekeeper", "full": "LSEC gatekeeper function", "desc": "健常LSECがHSC静止維持・物質輸送を担う門番的機能（本総説は「HSC静止維持能の喪失」と記述）。脱分化・capillarizationで失われる"}],
    "struct": {"model": "総説（文献統合）", "cells": ["LSEC", "HSC"], "triggers": ["capillarization→EndMT", "TGF-β"], "steatosis": "—", "inflammation": "—", "fibrosis": "○", "readout": ["EndMT（間葉形質獲得）", "ECM産生", "LSEC同一性喪失"], "ignite": "LSECのcapillarization→EndMT→ECM産生で線維化に能動的に寄与", "params": [{"name": "LSEC EndMT度→ECM産生", "note": "LSEC同一性喪失をECM産生・線維化寄与に変換するABMルール"}], "todos": ["共培養でLSECのEndMT（αSMA/COL1A1）有無を確認", "#32（LSECとMAFLDの総説）と統合しLSEC構造的・機能的完全性を体系評価"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m35' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：capillarization→EndMT→ECM産生の整理</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常LSEC</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>HSC静止維持</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>物質輸送</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>健常機能</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m35)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae消失</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>同一性喪失</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m35)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>EndMT→ECM産生</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>間葉形質・ECM</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化に寄与</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Qu J, Li X et al., Clin Mol Hepatol (2024)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f35' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>LSECがEndMTでECM産生細胞に転換し線維化に寄与</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常LSEC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>内皮同一性</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--E)'>HSC静止維持</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f35)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脱分化</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>前段階</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f35)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>EndMT</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>間葉様へ</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>間葉形質獲得</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>ECM産生</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f35)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>線維化に能動寄与</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>EndMT阻害が標的</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>治療候補</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>LSEC→HSC上流関係＋LSEC自身の線維化寄与</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("35", [{ic:"endothelial",cap:"LSECの脱分化とEndMT"}, {ic:"stellate",cap:"HSCとともにECMを産生"}, {ic:"liver",cap:"capillarization後の線維化"}, {ic:"drug",cap:"治療標的としてのEndMT"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 35 Qu 2024 Clin Mol Hepatol: LSEC/EndMT/ECM総説 */
LP.methods("35", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №35 LSECがEndMTでECM産生細胞に転換し線維化に寄与 ===== */
LP.cinema("35", {
  svg:GLYPH.bg("#eef1f4")+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("35b","var(--B)")}${GLYPH.arrow("35e","var(--E)")}</defs>`
    +GLYPH.title("LSECがcapillarization→EndMTを経てECM産生細胞に転換し線維化に寄与")
    +`<path d="M0,170 C180,150 540,190 720,168 L720,226 C540,248 180,208 0,228 Z" fill="#3a4a5a" opacity="0.12"/>`
    +`<path id="lsecWall35" d="M0,170 C180,150 540,190 720,168" fill="none" stroke="var(--E)" stroke-width="2.4"/>`
    +`<g id="fen35">`+[...Array(13)].map((_,i)=>`<circle id="f35_${i}" cx="${40+i*52}" cy="${170+Math.sin(i)*2}" r="3.2" fill="#eef1f4"/>`).join("")+`</g>`
    +`<text x="20" y="208" font-size="10" fill="var(--ink-soft)">類洞内皮(LSEC)</text>`
    +GLYPH.stellate("hsc35",360,340,"肝星細胞")
    +GLYPH.hep("hep35",100,50,0.65,"肝細胞")
    +`<g id="endmt35" class="fade">`
      +GLYPH.tag("asma35",360,260,"間葉形質↑","var(--B)",70)
      +GLYPH.tag("col1tag35",480,260,"ECM産生↑","var(--B)",80)
    +`</g>`
    +GLYPH.layer("col35")
    +`<g id="capTag35" class="fade">`+GLYPH.tag("capT35",540,144,"capillarization","var(--D)",110)+`</g>`
    +`<g id="endmtTag35" class="fade">`+GLYPH.tag("endmtT35",540,144,"EndMT","var(--B)",60)+`</g>`,
  build(K){
    const N=13;
    const closeFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f35_"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r");const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/700));c.setAttribute("r",(from*(1-q)).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2400,cap:"健常なLSEC。fenestrae（小孔）が開き、内皮同一性を保ってHSCの静止維持と物質輸送を担う。",run(){}},
      {color:"D",t:3400,cap:"① 疾患下でcapillarizationが進行——fenestraeと内皮マーカー（LYVE-1等）が失われる前段階。",run(){
        closeFen();
        K.show(["capTag35"]);
        K.T(()=>{K.attr("lsecWall35","stroke","var(--D)");K.attr("lsecWall35","stroke-width","3.5");},1200);
      }},
      {color:"B",t:4000,cap:"② さらにLSECが内皮–間葉転換（EndMT）を起こし、内皮の性質を失って間葉様の性質を獲得する。",run(){
        K.hide(["capTag35"]);K.show(["endmtTag35","endmt35"]);
        K.attr("lsecWall35","stroke","var(--B)");
        K.T(()=>{K.pulse("asma35");K.pulse("col1tag35");},600);
        K.T(()=>{K.unpulse("asma35");K.unpulse("col1tag35");},2400);
      }},
      {color:"B",t:3400,cap:"③ EndMTしたLSECがECM成分を過剰産生し、線維化に能動的に寄与する。EndMTの抑制（HMGB1・ROSの制御など）が治療標的候補。",run(){
        K.draw("col35",GLYPH.collagenAt(360,270),{len:140});
        K.T(()=>{K.morph("hsc35Shape",GLYPH.SPINDLE);K.attr("hsc35Shape","fill","#b0432f");K.text("hsc35Cap","活性化HSC");},800);
      }},
    ];
  }
});
