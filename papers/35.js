/* ============================================================
   №35 · Clinical and Molecular Hepatology 2024 · Qu J, Wang L, Li Y, Li X（北京中医薬大学）
   LSEC→EndMT→ECM産生：Capillarization後のEndMT概念とgatekeeper機能——線維化への積極的寄与と治療標的
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
    title:"LSEC→EndMT→ECM産生：Capillarization後のEndMT概念とgatekeeper機能——線維化への積極的寄与と治療標的",
    authors:"Qu J, Wang L, Li Y, Li X（北京中医薬大学）",
    journal:"Clinical and Molecular Hepatology",
    year:2024,
    vol:"30:303-325",
    doi:"10.3350/cmh.2024.0022",
    url:"https://e-cmh.org/journal/view.php?doi=10.3350/cmh.2024.0022",
    catPrimary:"E",
    catSub:["B"],
    tags:["E","B"],
    summary:"LSECの線維化への関与を「LSEC capillarization → EndMT（内皮間葉転換） → ECM産生」という概念軸で整理した総説。Capillarized LSECは部分的なEndMT状態にあり、α-SMAやCol1A1を直接産生する能力を獲得する可能性がある。LSECはHSC活性化を制御するgatekeeper機能を持ち、capillarizationが先行してHSC活性化を許容する（gate-open）。LSECを標的とした治療（eNOS-sGC活性化・VEGFR経路制御）が線維化の進行を抑制し解消を促進するという文献的エビデンスも整理されている。",
    connection:["LSEC→HSC活性化という上流シグナル関係を理解するために重要。自分の系ではLSECを加えたことがHSC線維化をどう修飾するかを調べるとき、LSEC capillarization具合→HSC活性化の因果評価フレームとして使える。No.32（He 2024 BMP9/LSEC）と組み合わせてLSECの構造的・機能的完全性評価体系を構築できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "capillarizationの先に、LSECが内皮–間葉転換（EndMT）を起こしてECM産生細胞へ変化するという新しい概念が提唱されている。本総説はLSECのgatekeeper機能とその破綻後のEndMTを整理し、LSECがαSMA・COL1A1を発現してECM産生に積極的に寄与する経路（TGF-β等が駆動）を論じる。LSECを線維化の受動的指標ではなく能動的な線維化貢献細胞として再定義し、EndMT阻害をLSEC標的治療の候補とする視座を提供する。",
    "background": "従来capillarizationはLSECの『脱分化』として捉えられてきたが、近年LSECがEndMTを経てECM産生に直接寄与する可能性が示された。LSEC→HSCの上流関係に加え、LSEC自身の線維化寄与を整理する必要があった。",
    "achievements": ["capillarization後の**LSEC EndMT（内皮–間葉転換）概念**を整理した。", "EndMTにより**LSECがαSMA/COL1A1を発現しECM産生に寄与**する経路を提示した。", "LSECを**能動的な線維化貢献細胞**として再定義し、EndMT阻害を治療標的候補とした。"],
    "limitations": ["総説であり、in vivoでのLSEC-EndMTの定量的寄与は今後の検証課題。", "EndMTマーカーの特異性とHSC由来筋線維芽細胞との区別に注意を要する。", "ヒト肝でのEndMTの臨床的意義は確立途上。"],
    "glossary": [{"term": "EndMT", "full": "endothelial-mesenchymal transition（内皮–間葉転換）", "desc": "LSECが間葉様・ECM産生細胞へ転換する過程。線維化に直接寄与しうる"}, {"term": "ECM", "full": "extracellular matrix（細胞外マトリックス）", "desc": "コラーゲン等の線維化基質。EndMTでLSECも産生に寄与"}, {"term": "gatekeeper", "full": "LSEC gatekeeper function", "desc": "健常LSECがHSC静止・物質輸送を守る門番機能。破綻でEndMT・線維化"}],
    "struct": {"model": "総説（文献統合）", "cells": ["LSEC", "HSC"], "triggers": ["capillarization→EndMT", "TGF-β"], "steatosis": "—", "inflammation": "—", "fibrosis": "○", "readout": ["EndMTマーカー（αSMA/COL1A1）", "ECM産生", "LSEC同一性喪失"], "ignite": "LSECのcapillarization→EndMT→ECM産生で線維化に能動的に寄与", "params": [{"name": "LSEC EndMT度→ECM産生", "note": "LSEC同一性喪失をECM産生・線維化寄与に変換するABMルール"}], "todos": ["共培養でLSECのEndMT（αSMA/COL1A1）有無を確認", "#32(BMP9)と統合しLSEC構造的・機能的完全性を体系評価"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m35' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：capillarization→EndMT→ECM産生の整理</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>LSEC gatekeeper</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>HSC静止維持</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>物質輸送</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>健常機能</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m35)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae消失</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>同一性喪失</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m35)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>EndMT→ECM</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>αSMA/COL1A1</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化に寄与</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Qu J, Li X et al., Clin Mol Hepatol (2024)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f35' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>LSECがEndMTでECM産生細胞に転換し線維化に寄与</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常LSEC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>内皮同一性</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--E)'>gatekeeper</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f35)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脱分化</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>前段階</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f35)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>EndMT</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>間葉様へ</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>αSMA/COL1A1</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--B)'>ECM産生</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f35)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>線維化に能動寄与</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>EndMT阻害が標的</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>治療候補</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>LSEC→HSC上流関係＋LSEC自身の線維化寄与</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("35", [{ic:"endothelial",cap:"LSECのgatekeeper機能とEndMT"}, {ic:"stellate",cap:"HSCとともにECMを産生"}, {ic:"liver",cap:"capillarization後の線維化"}, {ic:"drug",cap:"治療標的としてのEndMT"}]);

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
      +GLYPH.tag("asma35",360,260,"αSMA↑","var(--B)",70)
      +GLYPH.tag("col1tag35",480,260,"COL1A1↑","var(--B)",80)
    +`</g>`
    +GLYPH.layer("col35")
    +`<g id="capTag35" class="fade">`+GLYPH.tag("capT35",540,144,"capillarization","var(--D)",110)+`</g>`
    +`<g id="endmtTag35" class="fade">`+GLYPH.tag("endmtT35",540,144,"EndMT","var(--B)",60)+`</g>`,
  build(K){
    const N=13;
    const closeFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f35_"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r");const st=now=>{const q=Math.min(1,(now-t0)/700);c.setAttribute("r",(from*(1-q)).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2400,cap:"健常なLSEC。fenestrae（小孔）が開き、内皮同一性を保ってHSC静止と物質輸送のgatekeeperとして機能する。",run(){}},
      {color:"D",t:3400,cap:"① 疾患下でcapillarizationが進行——fenestraeと内皮マーカー（LYVE-1等）が失われる前段階。",run(){
        closeFen();
        K.show(["capTag35"]);
        K.T(()=>{K.attr("lsecWall35","stroke","var(--D)");K.attr("lsecWall35","stroke-width","3.5");},1200);
      }},
      {color:"B",t:4000,cap:"② さらにLSECが内皮–間葉転換（EndMT）を起こし、αSMA・COL1A1を発現する間葉様細胞に変わる。",run(){
        K.hide(["capTag35"]);K.show(["endmtTag35","endmt35"]);
        K.attr("lsecWall35","stroke","var(--B)");
        K.T(()=>{K.pulse("asma35");K.pulse("col1tag35");},600);
        K.T(()=>{K.unpulse("asma35");K.unpulse("col1tag35");},2400);
      }},
      {color:"B",t:3400,cap:"③ EndMTしたLSECがECMを自ら産生し、HSC由来とは独立に線維化へ能動的に寄与する。EndMT阻害が新たな治療標的。",run(){
        K.draw("col35",GLYPH.collagenAt(360,270),{len:140});
        K.T(()=>{K.morph("hsc35Shape",GLYPH.SPINDLE);K.attr("hsc35Shape","fill","#b0432f");K.text("hsc35Cap","活性化HSC");},800);
      }},
    ];
  }
});
