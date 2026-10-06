/* ============================================================
   №32 · Cell Communication and Signaling 2024 · He Q, He W, Dong H et al.
   BMP9がLSECの終末分化・fenestrae維持のgatekeeper——capillarizationでBMP9↓→HSC活性化→線維化の能動的hub event
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
    title:"BMP9がLSECの終末分化・fenestrae維持のgatekeeper——capillarizationでBMP9↓→HSC活性化→線維化の能動的hub event",
    authors:"He Q, He W, Dong H et al.",
    journal:"Cell Communication and Signaling",
    year:2024,
    vol:"22:346",
    doi:"10.1186/s12964-024-01720-9",
    url:"https://biosignaling.biomedcentral.com/articles/10.1186/s12964-024-01720-9",
    catPrimary:"E",
    catSub:["B"],
    tags:["E","B"],
    summary:"LSECはその独自性（有窓＋基底膜なし）を維持するために、HSCが分泌するBMP9を必要とする。BMP9がLSECの終末分化マーカー（LYVE-1・Stab2等）を支持しfenestraeを維持する。BMP9 KOマウスでは基底板沈着増加・fenestrae減少が確認されており、HSC→LSECのBMP9シグナルという「逆向きのクロストーク」が存在する。病的状況（MASLD）ではこのHSC→LSEC BMP9シグナルが低下しcapillarizationが生じる。Capillarizationはゲートキーパー機能の喪失をもたらし初期脂肪化から線維化への進行を加速する能動的hub eventである。",
    connection:["iLSEC（iPSC由来LSEC）を系に組み込んだとき、fenestrae維持にBMP9（HSCから）が必要であることを念頭に置いた培地設計・共培養条件検討のリファレンス。LSECのcapillarizationをLYVE-1やStab2発現でモニタリングする設計根拠。BMP9を外因性に添加してiLSEC終末分化を維持する実験の根拠論文。No.33・35と統合してLSEC機能の評価・維持・操作の三要素を体系化できる。"],
    methods:["in vivo（BMP9 KOマウス）","形態解析（fenestrae電子顕微鏡）","分子解析（LYVE-1/Stab2等）","文献統合分析"],
    "approach": "in vivo（BMP9 KOマウス）＋ fenestrae電子顕微鏡形態解析 ＋ 分子解析（LYVE-1/Stab2等）＋ 文献統合",
    "added": "2026-06-15",
    "abstract_ja": "類洞内皮細胞（LSEC）は有窓構造（fenestrae）をもつ特殊な内皮で、この終末分化形質の維持機構は不明であった。本研究はBMP9がLSECの終末分化とfenestrae維持の門番（gatekeeper）として機能することを示した。BMP9欠損や、毛細血管化（capillarization）に伴うBMP9シグナル低下では、LSECがfenestraeを失い連続性内皮へと変化し、LYVE-1・Stab2などのLSEC同一性マーカーが低下する。このcapillarizationがHSC活性化を介して線維化を促進することから、BMP9–LSEC軸が肝の血管恒常性と線維化抑制の要であることが示された。",
    "background": "LSECのfenestraeは物質交換とHSCの静止維持に重要だが、慢性肝疾患では毛細血管化（fenestrae消失・基底膜形成）が早期から起こりHSC活性化を促す。fenestraeとLSEC同一性を維持するシグナルの実体、特にBMP9の役割が問われていた。",
    "achievements": ["**BMP9がLSECの終末分化・fenestrae維持のgatekeeper**であることを同定した。", "BMP9低下・欠損で**capillarization（fenestrae消失・連続性内皮化）**が進み、LYVE-1/Stab2が低下することを示した。", "capillarizationが**HSC活性化を介して線維化を促進**する経路を提示し、BMP9–LSEC軸を血管恒常性の要に位置づけた。"],
    "limitations": ["BMP9操作の全身性影響とLSEC特異的寄与の切り分けは限定的。", "ヒト肝でのBMP9–fenestrae関係は今後の検証を要する。", "BMP9補充がcapillarizationを臨床的に逆転できるかは未確立。"],
    "glossary": [{"term": "BMP9", "full": "bone morphogenetic protein 9 (GDF2)", "desc": "LSEC終末分化・fenestrae維持のgatekeeper。低下でcapillarization→線維化"}, {"term": "fenestrae", "full": "fenestrae（有窓構造）", "desc": "LSEC表面の小孔群。物質交換とHSC静止維持に重要"}, {"term": "capillarization", "full": "capillarization（毛細血管化）", "desc": "LSECがfenestraeを失い基底膜を形成する病的変化。HSC活性化を促す"}, {"term": "Stab2", "full": "stabilin-2", "desc": "LSEC同一性マーカー兼スカベンジャー受容体。capillarizationで低下"}, {"term": "LYVE-1", "full": "lymphatic vessel endothelial hyaluronan receptor 1", "desc": "健常LSECマーカー。capillarizationで低下"}],
    "struct": {"model": "in vivo（BMP9 KO）", "cells": ["LSEC", "HSC"], "triggers": ["BMP9欠損", "capillarization"], "steatosis": "—", "inflammation": "—", "fibrosis": "○", "readout": ["fenestrae（電子顕微鏡）", "LYVE-1/Stab2発現", "HSC活性化", "線維化"], "ignite": "BMP9低下→capillarization→HSC活性化で線維化を促進", "params": [{"name": "BMP9→LSEC終末分化維持", "note": "培地にBMP9添加でiLSECのfenestrae/同一性を維持する設計ルール"}, {"name": "capillarization度→HSC活性化", "note": "LSEC同一性低下をHSC活性化確率に変換するABMルール"}], "todos": ["iLSEC培地にBMP9を添加しfenestrae/LYVE-1/Stab2を維持", "capillarization度をLYVE-1/Stab2でモニタリング"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m32' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：BMP9 KO → fenestrae/同一性/線維化を評価</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① BMP9 KOマウス</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>遺伝子欠失</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>BMP9を除去</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m32)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>② fenestrae形態</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>電子顕微鏡</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>有窓構造評価</text>\n  <text x='242' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>capillarization</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m32)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>③ 分子解析</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LYVE-1/Stab2</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LSEC同一性</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--G)'>マーカー低下</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m32)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>④ 線維化</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>HSC活性化</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>fibrosis促進</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>He Q, Dong H et al., Cell Commun Signal (2024)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f32' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>BMP9はfenestraeの門番／低下でcapillarization→線維化</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='84' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>健常LSEC</text>\n  <text x='84' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae保持</text>\n  <text x='84' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>LYVE-1/Stab2</text>\n  <text x='84' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--E)'>HSC静止維持</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f32)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='242' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>BMP9 ↓</text>\n  <text x='242' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>gatekeeper喪失</text>\n  <text x='242' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>終末分化破綻</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f32)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='398' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>capillarization</text>\n  <text x='398' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>fenestrae消失</text>\n  <text x='398' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>連続性内皮化</text>\n  <text x='398' y='109.0' text-anchor='middle' font-size='8.3' fill='var(--D)'>同一性低下</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f32)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='556' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>HSC活性化→線維化</text>\n  <text x='556' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>静止維持喪失</text>\n  <text x='556' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>fibrosis</text>\n  <text x='320' y='182' text-anchor='middle' font-size='8.6' fill='var(--ink-soft)'>BMP9–LSEC軸が血管恒常性と線維化抑制の要</text>\n  </svg>"
  }
);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 32 He 2024 Cell Commun Signal: BMP9/LSEC gatekeeper総説+in vivo */
LP.methods("32", ["mouse","invivo","imaging","wb"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №32 BMP9はfenestraeの門番／低下でcapillarization→線維化 ===== */
LP.cinema("32", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("32e","var(--E)")}${GLYPH.arrow("32b","var(--B)")}</defs>`
    +GLYPH.title("BMP9がfenestraeの門番——低下でcapillarization→HSC活性化→線維化")
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
    const closeFen=()=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("f32_"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r");const st=now=>{const q=Math.min(1,(now-t0)/700);c.setAttribute("r",(from*(1-q)).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2600,cap:"健常な類洞内皮（LSEC）。BMP9がALK1受容体に結合し、fenestrae（小孔）とLYVE-1/Stab2の終末分化マーカーを維持するgatekeeperとして働く。",run(){
        K.show(["lyve32"]);
        K.flow(300,112,300,150,"var(--E)",{n:2,dur:0.8,loop:2});
        K.T(()=>K.pulse("alk1_32"),500);
        K.T(()=>K.unpulse("alk1_32"),2000);
      }},
      {color:"D",t:3600,cap:"① BMP9が低下するとALK1シグナルが途絶し、LSECの終末分化プログラムが崩壊する。",run(){
        K.show(["bmpLoss32"]);
        K.attr("bmp9_32","opacity","0.15");
        K.T(()=>{K.attr("lyve32","opacity","0.2");K.strike(300,92,300,160);},600);
        K.T(()=>K.markX(300,160),1200);
      }},
      {color:"D",t:3400,cap:"② fenestraeが失われ連続性内皮化（capillarization）が進む。LYVE-1/Stab2も低下する。",run(){
        closeFen();
        K.T(()=>{K.attr("lsecWall32","stroke","var(--D)");K.attr("lsecWall32","stroke-width","3.5");},1200);
      }},
      {color:"B",t:3200,cap:"③ capillarizationがHSCの静止維持を解除し活性化を促進→線維化が進行。BMP9補充が治療候補となる。",run(){
        K.flow(300,195,380,300,"var(--B)",{n:2,dur:1.0,loop:2});
        K.T(()=>{K.morph("hsc32Shape",GLYPH.SPINDLE);K.attr("hsc32Shape","fill","#b0432f");K.text("hsc32Cap","活性化HSC");},1200);
        K.T(()=>K.draw("col32",GLYPH.collagenAt(400,370),{len:150}),1800);
      }},
    ];
  }
});
