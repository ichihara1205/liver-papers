/* ============================================================
   №33 · International Journal of Molecular Sciences 2025 · Abdulmajeed RJ, Sergi CM
   LSEC免疫調節・Capillarization・薬物代謝bioreactivity——正常時：免疫抑制的・物質輸送、疾患時：炎症促進・ECM蓄積の二重性
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"33", primary:"E",
    title:"LSEC免疫調節・Capillarization・薬物代謝bioreactivity——正常時：免疫抑制的・物質輸送、疾患時：炎症促進・ECM蓄積の二重性",
    authors:"Abdulmajeed RJ, Sergi CM",
    journal:"International Journal of Molecular Sciences",
    year:2025,
    vol:"26(16):8006",
    doi:"10.3390/ijms26168006",
    url:"https://www.mdpi.com/1422-0067/26/16/8006",
    catPrimary:"E",
    catSub:["B","C"],
    tags:["E","B","H"],
    summary:"LSECの免疫調節・線維化（collagenization）・薬物代謝bioreactivityに焦点を当てたナラティブ総説。慢性肝疾患においてLSECはcapillarizationを起こしfenestraeを失って線維化促進シグナル（TGF-β等）をより多く放出するようになる。TGF-βはHSCのα-SMA発現を誘導して線維化を進める。LSECは門脈圧や薬物代謝（CYP3A4依存）における重要な調節因子でもあり、MASLD/MASHによるLSEC機能不全が薬物代謝異常や免疫過剰応答を引き起こす可能性も議論されている。",
    connection:["iLSECが線維化において単なる傍観者ではなく能動的なアクター（TGF-β放出経由のHSC活性化）であることをサポートする総説。LSEC capillarizationを再現または防ぐための培養条件の理論的根拠として参照できる。No.34（Rautou 2025）の一次データとの概念補完として活用。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "LSECは正常時には免疫抑制的なシヌソイド内皮として物質輸送・抗原提示・寛容維持を担い、薬物代謝の場としても機能する。本総説は健常LSECの免疫調節・bioreactivity機能と、疾患時のcapillarizationに伴う形質転換を対比し、疾患LSECが炎症促進的に変化してTGF-β等を介しHSCを活性化する能動的アクターとなることを整理する。LSECを線維化の傍観者ではなく駆動因子として位置づけ、capillarizationの再現・防止を培養条件設計の標的とする理論的根拠を提供する。",
    "background": "LSECは肝の最大の内皮細胞集団で、寛容維持・物質クリアランス・薬物代謝に関与する。慢性疾患でのcapillarizationがLSEC機能をどう変質させ、線維化にどう寄与するかの統合的整理が求められていた。",
    "achievements": ["健常LSECの**免疫抑制・物質輸送・薬物代謝（bioreactivity）**機能を体系化した。", "疾患時のcapillarizationに伴う**炎症促進的形質転換**を整理した。", "LSECを**TGF-β経由でHSCを活性化する能動的アクター**として線維化に位置づけた。"],
    "limitations": ["総説であり機能の定量的寄与は文脈依存。", "ヒト・モデル間でのLSEC機能差の整理は部分的。", "薬物代謝bioreactivityのin vitro再現条件は未標準化。"],
    "glossary": [{"term": "capillarization", "full": "capillarization（毛細血管化）", "desc": "LSECがfenestraeを失い連続性内皮化する病的変化。免疫抑制→炎症促進へ転換"}, {"term": "bioreactivity", "full": "bioreactivity", "desc": "LSECがもつ薬物代謝・物質処理能。CYP3A4等が関与"}, {"term": "immune tolerance", "full": "immune tolerance（免疫寛容）", "desc": "健常LSECが担う寛容維持機能。疾患で炎症促進性へ転換"}],
    "struct": {"model": "総説（文献統合）", "cells": ["LSEC", "HSC"], "triggers": ["capillarization", "TGF-β"], "steatosis": "—", "inflammation": "△", "fibrosis": "○", "readout": ["LSEC免疫機能", "薬物代謝（CYP3A4）", "TGF-β→HSC活性化"], "ignite": "疾患LSEC（capillarized）がTGF-β放出でHSCを能動的に活性化", "params": [{"name": "LSEC状態→TGF-β放出→HSC活性化", "note": "capillarization度をTGF-β放出量に変換しHSC活性化に接続"}], "todos": ["LSEC capillarizationを防ぐ培養条件を理論に基づき設計", "#34一次データと照合してLSECの線維化寄与を評価"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m33' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説：LSECの免疫調節・代謝・capillarizationを統合</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常LSEC機能</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>免疫抑制/寛容</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>物質輸送</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>薬物代謝</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m33)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>形質転換</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>炎症促進へ</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m33)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>線維化寄与</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TGF-β放出</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>HSC活性化</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>Abdulmajeed RJ, Sergi CM, Int J Mol Sci (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f33' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>LSECは線維化の傍観者でなく能動的アクター</text>\n  <rect x='14' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='111' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>正常時LSEC</text>\n  <text x='111' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>免疫寛容</text>\n  <text x='111' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CYP代謝</text>\n  <text x='111' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>恒常性</text>\n  <path d='M209,96 L220,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f33)'/>\n  <rect x='223' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='320' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>疾患時(capillarized)</text>\n  <text x='320' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>炎症促進</text>\n  <text x='320' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>形質転換</text>\n  <path d='M419,96 L430,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f33)'/>\n  <rect x='433' y='44' width='193' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='529' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSCを活性化</text>\n  <text x='529' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TGF-β経由</text>\n  <text x='529' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>線維化駆動</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>capillarizationの再現/防止が培養条件設計の標的</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 33 Abdulmajeed & Sergi 2025 IJMS: LSEC免疫・capillarization総説 */
LP.methods("33", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №33 LSECは線維化の傍観者でなく能動的なアクター ===== */
LP.cinema("33", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("33b","var(--B)")}${GLYPH.arrow("33e","var(--E)")}</defs>`
    +GLYPH.title("LSECは線維化の傍観者ではなく能動的アクター——capillarization→TGF-β→HSC活性化")
    +`<path id="lsecWall33" d="M0,185 C180,170 540,200 720,183" fill="none" stroke="var(--E)" stroke-width="2.4"/>`
    +`<g id="fen33">`+[...Array(11)].map((_,i)=>`<circle id="f33_${i}" cx="${50+i*60}" cy="${185+Math.sin(i)*2}" r="3.2" fill="#eef3f6"/>`).join("")+`</g>`
    +`<text x="20" y="218" font-size="10" fill="var(--ink-soft)">LSEC</text>`
    +`<g id="immTol33" class="fade">`+GLYPH.tag("tol33",200,155,"免疫寛容","var(--E)",80)+`</g>`
    +`<g id="bioR33" class="fade">`+GLYPH.tag("bio33",400,155,"bioreactivity","var(--E)",100)+`</g>`
    +GLYPH.stellate("hsc33",400,320,"肝星細胞")
    +GLYPH.cytokine("tgfb33",300,260,"TGF-β","var(--B)",true)
    +GLYPH.layer("col33"),
  build(K){
    const N=11;
    const closeFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f33_"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r");const st=now=>{const q=Math.min(1,(now-t0)/700);c.setAttribute("r",(from*(1-q)).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2600,cap:"正常時のLSECは免疫寛容原性で、fenestrae（小孔）を通じた物質輸送とbioreactivityを担う。",run(){
        K.show(["immTol33","bioR33"]);
      }},
      {color:"D",t:3400,cap:"① 疾患下でcapillarizationが進行。fenestraeが消失しLSECが炎症促進性へ形質転換する。",run(){
        closeFen();
        K.attr("immTol33","opacity","0.2");K.attr("bioR33","opacity","0.2");
        K.T(()=>{K.attr("lsecWall33","stroke","var(--D)");K.attr("lsecWall33","stroke-width","3.5");},1200);
      }},
      {color:"B",t:4000,cap:"② 疾患LSECがTGF-βを能動的に分泌し、直下のHSCを活性化する。LSECは線維化の「傍観者」ではなく「ドライバー」。",run(){
        K.show(["tgfb33"]);
        K.flow(300,195,300,248,"var(--B)",{n:2,dur:0.8,loop:2});
        K.T(()=>K.flow(312,265,380,310,"var(--B)",{n:2,dur:0.9,loop:2}),600);
        K.T(()=>{K.morph("hsc33Shape",GLYPH.SPINDLE);K.attr("hsc33Shape","fill","#b0432f");K.text("hsc33Cap","活性化HSC");},2200);
      }},
      {color:"B",t:3000,cap:"③ 活性化HSCがECMを産生し線維化に至る。LSEC→HSC軸のパラクラインが治療標的候補。",run(){
        K.draw("col33",GLYPH.collagenAt(400,380),{len:150});
      }},
    ];
  }
});
