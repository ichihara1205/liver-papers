/* ============================================================
   №32 · Cell Communication and Signaling 2024 · He Q, He W, Dong H et al.
   LSECのMAFLD/MASHにおける役割——capillarization（fenestrae消失）が早期脂肪化から線維化への進行を促す（VEGF-A/NO・BMP9が分化形質を維持）
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"32", primary:"E",
    title:"LSECのMAFLD/MASHにおける役割——capillarization（fenestrae消失）が早期脂肪化から線維化への進行を促す（VEGF-A/NO・BMP9が分化形質を維持）",
    authors:"He Q, He W, Dong H et al.",
    journal:"Cell Communication and Signaling",
    year:2024,
    vol:"22(1):346",
    doi:"10.1186/s12964-024-01720-9",
    url:"https://biosignaling.biomedcentral.com/articles/10.1186/s12964-024-01720-9",
    catPrimary:"E",
    catSub:["B"],
    tags:["E","B"],
    summary:"LSECの生理機能（物質交換・血流調節・免疫調節・HSC静止維持）とMAFLD/MASHにおける役割をまとめたナラティブ総説。病的因子（過剰な脂質・糖質摂取、腸内細菌叢変化、LPS、Hedgehog活性化など）がLSECのcapillarization（fenestrae消失・基底膜沈着）を誘導し、これが早期の脂肪化を助長しMASH・線維化を加速する。fenestraeの維持には肝細胞やHSC由来のVEGF-A→eNOS→NO→sGC/cGMP/PKG経路が必要で、HSC由来の循環因子BMP9も血管の静止に関わる。BMP9 KOマウスではLSEC終末分化マーカー（Lyve1・Stab1・Stab2等）が低下し、基底膜様沈着が増えfenestraeが減少したという報告が引用されている（本総説自身の実験ではない）。Capillarizationによってゲートキーパー機能が失われHSC活性化が起こる。治療標的としてVCAM-1/ITGβ1、スタチン（KLF2）、PPAR作動薬、FXR作動薬、riociguatなども整理されている。",
    connection:["iLSEC（iPSC由来LSEC）を系に組み込んだとき、fenestrae維持にVEGF-A/NO経路とHSC由来BMP9が関わるという総説の整理を念頭に置いた培地設計・共培養条件検討のリファレンス。LSECのcapillarizationをLYVE-1やStab2発現でモニタリングする設計根拠（本総説はBMP9 KOマウスでこれらの終末分化マーカーが低下した報告を引用）。BMP9を外因性に添加してiLSEC終末分化を維持できるかは自分の系で検証する仮説（本総説はBMP9補充の効果を示していない）。No.33・35と統合してLSEC機能の評価・維持・操作の三要素を体系化できる。"],
    methods:["総説（review）","文献統合分析"],
    "approach": "総説（review）＋ 文献統合分析",
    "added": "2026-06-15",
    "abstract_ja": "類洞内皮細胞（LSEC）は血液と肝細胞の界面にある特殊化した内皮で、血管圧調節・抗炎症・抗線維化などの機能をもつ。本総説は、病的因子がLSECのcapillarization（fenestraeの消失と機能障害）を誘導し、これが早期脂肪化の素地となってMAFLDの進行、MASHおよび線維化を加速することを整理する。fenestraeの維持にはVEGF-A→NO経路が重要で、HSC由来のBMP9もLSEC終末分化マーカーの維持に関わる（BMP9 KOマウスの報告を引用）。capillarizationによるゲートキーパー機能の喪失がHSC活性化につながることから、LSECはMAFLD・MASHの予防・治療標的となりうると論じる。",
    "background": "LSECのfenestraeは物質交換とHSCの静止維持に重要だが、慢性肝疾患では毛細血管化（fenestrae消失・基底膜形成）が早期から起こりHSC活性化を促す。MAFLD/MASHにおけるLSECの役割は十分に評価されておらず、fenestraeとLSEC分化形質を維持するシグナルと病態への寄与を整理する必要があった。",
    "achievements": ["LSECの**fenestrae維持機構（VEGF-A→NO→sGC/cGMP/PKG経路、HSC由来BMP9）**を整理し、BMP9 KOマウスでの終末分化マーカー低下・fenestrae減少の報告を紹介した。", "脂質・腸内細菌叢・LPS・Hedgehogなどが**capillarization（fenestrae消失・基底膜沈着）**を誘導し、早期脂肪化とMASH・線維化進行の素地になることをまとめた。", "capillarizationで**ゲートキーパー機能が失われHSC活性化につながる**ことと、LSECを標的とする治療候補（VCAM-1/ITGβ1阻害、スタチン、PPAR・FXR作動薬、riociguat等）を整理した。"],
    "limitations": ["総説であり、BMP9–fenestrae関係は引用された1報のBMP9 KOマウスデータに基づく（ヒト肝での検証は示されていない）。", "LSECは単離・培養で急速に脱分化するため、in vitro実験に基づく知見の信頼性に限界がある（総説自身が指摘）。", "BMP9補充がcapillarizationを逆転できるかは本総説では扱われていない。"],
    "glossary": [{"term": "BMP9", "full": "bone morphogenetic protein 9 (GDF2)", "desc": "HSC由来の循環因子。BMP9 KOマウスでLSEC終末分化マーカーが低下しfenestraeが減少（本総説が引用）"}, {"term": "fenestrae", "full": "fenestrae（有窓構造）", "desc": "LSEC表面の小孔群。物質交換とHSC静止維持に重要"}, {"term": "capillarization", "full": "capillarization（毛細血管化）", "desc": "LSECがfenestraeを失い基底膜を形成する病的変化。HSC活性化を促す"}, {"term": "Stab2", "full": "stabilin-2", "desc": "LSEC同一性マーカー兼スカベンジャー受容体。BMP9 KOマウスで低下（本総説が引用）"}, {"term": "LYVE-1", "full": "lymphatic vessel endothelial hyaluronan receptor 1", "desc": "健常LSECマーカー。BMP9 KOマウスで低下（本総説が引用）"}],
    "struct": {"model": "総説（文献統合）", "cells": ["LSEC", "HSC"], "triggers": ["VEGF-A/NO低下", "BMP9低下", "capillarization"], "steatosis": "△", "inflammation": "△", "fibrosis": "○", "readout": ["fenestrae（電子顕微鏡）", "LYVE-1/Stab2発現", "HSC活性化", "線維化"], "ignite": "VEGF-A/NO・BMP9低下→capillarization→ゲートキーパー機能喪失→HSC活性化で線維化を促進", "params": [{"name": "BMP9→LSEC終末分化維持", "note": "培地にBMP9添加でiLSECのfenestrae/同一性を維持する設計ルール"}, {"name": "capillarization度→HSC活性化", "note": "LSEC同一性低下をHSC活性化確率に変換するABMルール"}], "todos": ["iLSEC培地にBMP9を添加しfenestrae/LYVE-1/Stab2を維持", "capillarization度をLYVE-1/Stab2でモニタリング"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m32' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>総説の構成：LSEC機能→capillarization→線維化→治療</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① LSECの機能</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae・NO産生</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>HSC静止維持</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m32)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>② capillarization</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae消失</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>基底膜沈着</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>早期脂肪化と関連</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m32)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ 維持シグナル</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>VEGF-A/NO</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>BMP9・Hh</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--G)'>分化形質を維持</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m32)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>④ 線維化</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>HSC活性化</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>fibrosis促進</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>He Q, He W, Dong H et al., Cell Commun Signal (2024)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f32' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>fenestrae維持シグナル低下でcapillarization→線維化</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常LSEC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae保持</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LYVE-1/Stab2</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>HSC静止維持</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f32)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>VEGF-A/NO・BMP9↓</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>gatekeeper喪失</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>終末分化破綻</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f32)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae消失</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>連続性内皮化</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>同一性低下</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f32)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSC活性化→線維化</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>静止維持喪失</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>fibrosis</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>LSECのcapillarizationが早期脂肪化〜線維化進行の素地になる</text>\n  </svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
/* 2026-10補完：approach・abstract_ja・struct から下書き（要確認） */
LP.icons("32", [{ic:"endothelial",cap:"LSECのfenestrae維持"}, {ic:"mouse",cap:"BMP9 KOマウス（引用データ）"}, {ic:"stellate",cap:"capillarization→HSC活性化"}, {ic:"liver",cap:"capillarization→線維化"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 32 He 2024 Cell Commun Signal: LSEC×MAFLD総説（BMP9 KOは引用データのため総説として[]） */
LP.methods("32", []);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №32 fenestrae維持シグナル低下でcapillarization→線維化 ===== */
LP.cinema("32", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("32e","var(--E)")}${GLYPH.arrow("32b","var(--B)")}</defs>`
    +GLYPH.title("BMP9低下でcapillarization→HSC活性化→線維化（fenestrae維持の破綻）")
    +`<path id="lsecWall32" d="M0,180 C180,165 540,195 720,178" fill="none" stroke="var(--E)" stroke-width="2.4"/>`
    +`<g id="fen32">`+[...Array(13)].map((_,i)=>`<circle id="f32_${i}" cx="${40+i*52}" cy="${180+Math.sin(i)*2}" r="3.2" fill="#eef3f6"/>`).join("")+`</g>`
    +`<text x="20" y="214" font-size="10" fill="var(--ink-soft)">LSEC</text>`
    +GLYPH.receptor("alk1_32",300,160,"ALK1","var(--E)")
    +GLYPH.cytokine("bmp9_32",300,100,"BMP9","var(--E)")
    +`<g id="lyve32" class="fade">`+GLYPH.tag("lyveT32",500,155,"LYVE-1/Stab2","var(--E)",100)+`</g>`
    +GLYPH.stellate("hsc32",400,310,"肝星細胞")
    +`<g id="bmpLoss32" class="fade"><text x="300" y="92" text-anchor="middle" font-size="10.5" fill="var(--B)" font-weight="600">BMP9↓</text></g>`
    +GLYPH.layer("col32"),
  build(K){
    const N=13;
    const closeFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f32_"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r");const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/700));c.setAttribute("r",(from*(1-q)).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2600,cap:"健常な類洞内皮（LSEC）。fenestrae（小孔）を保ち、HSC由来のBMP9がLYVE-1/Stab2などの終末分化マーカーとfenestraeの維持に関わる（BMP9 KOマウスの報告）。",run(){
        K.show(["lyve32"]);
        K.flow(300,112,300,150,"var(--E)",{n:2,dur:0.8,loop:2});
        K.T(()=>K.pulse("alk1_32"),500);
        K.T(()=>K.unpulse("alk1_32"),2000);
      }},
      {color:"D",t:3600,cap:"① BMP9（やVEGF-A/NO）が低下すると、LSECの終末分化マーカーが低下しfenestraeが減少する。",run(){
        K.show(["bmpLoss32"]);
        K.attr("bmp9_32","opacity","0.15");
        K.T(()=>{K.attr("lyve32","opacity","0.2");K.strike(300,92,300,160);},600);
        K.T(()=>K.markX(300,160),1200);
      }},
      {color:"D",t:3400,cap:"② fenestraeが失われ連続性内皮化（capillarization）が進む。LYVE-1/Stab2も低下する。",run(){
        closeFen();
        K.T(()=>{K.attr("lsecWall32","stroke","var(--D)");K.attr("lsecWall32","stroke-width","3.5");},1200);
      }},
      {color:"B",t:3200,cap:"③ capillarizationでゲートキーパー機能が失われ、HSCの静止維持が解除されて活性化→線維化が進行する。",run(){
        K.flow(300,195,380,300,"var(--B)",{n:2,dur:1.0,loop:2});
        K.T(()=>{K.morph("hsc32Shape",GLYPH.SPINDLE);K.attr("hsc32Shape","fill","#b0432f");K.text("hsc32Cap","活性化HSC");},1200);
        K.T(()=>K.draw("col32",GLYPH.collagenAt(400,370),{len:150}),1800);
      }},
    ];
  }
});
