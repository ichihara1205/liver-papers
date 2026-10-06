/* ============================================================
   №44 · Cell Metab 2015 · Koliaki C, Szendroedi J, Kaul K, Jelenik T, Nowotny P, Jankowiak F, H…
   ヒト肝ミトコンドリアは脂肪肝では適応して呼吸を上げ、NASHでその適応を失う
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"44", primary:"D",
    title:"ヒト肝ミトコンドリアは脂肪肝では適応して呼吸を上げ、NASHでその適応を失う",
    authors:"Koliaki C, Szendroedi J, Kaul K, Jelenik T, Nowotny P, Jankowiak F, Herder C, Carstensen M, Krausch M, Knoefel WT, Schlensak M, Roden M",
    journal:"Cell Metab",
    year:2015,
    vol:"21(5):739-746",
    doi:"10.1016/j.cmet.2015.04.004",
    url:"https://doi.org/10.1016/j.cmet.2015.04.004",
    tags:["D","A"],
    "approach": "ヒト肝生検（痩せ12例・肥満非脂肪肝18例・NAFL 16例・NASH 7例）＋ 単離ミトコンドリアの高分解能呼吸測定 ＋ 酸化ストレス・抗酸化能・炎症マーカーの併測",
    "added": "2026-09-20",
    "abstract_ja": "肝のミトコンドリア機能がインスリン抵抗性や脂肪肝・脂肪肝炎とどう結びつくのかは長らく判然としなかったが、本研究は肝生検から単離したミトコンドリアの呼吸を高分解能呼吸測定で直接定量することでこれに答えた。痩せた対照群と比べ、肥満者はミトコンドリア量が同程度であるにもかかわらず最大呼吸速度が4.3〜5.0倍に達しており、しかもこの上昇は脂肪肝の有無を問わず見られた。ところがNASHの段階になるとミトコンドリア量はむしろ増えているのに最大呼吸は31〜40%低く、この低下は肝インスリン抵抗性の強さ、脱共役とリークの増大と並行していた。さらにNASH肝では過酸化水素や脂質過酸化物といった酸化ストレスと8-OHdGに代表される酸化的DNA損傷が亢進する一方、抗酸化能は低下し炎症応答は強まっていた。以上から、肥満に伴うインスリン抵抗性の初期には肝が呼吸能を押し上げる適応——肝ミトコンドリア柔軟性——を示し、それがNASHで失われるという段階依存の像が描かれる。",
    "background": "脂肪肝からNASHへ進む過程でミトコンドリアが機能亢進するのか機能不全に陥るのかについては、動物モデルや間接的な指標を用いた研究が互いに食い違う結論を出していた。酸素消費を実際に測った報告でも、対象が単一の病期に限られていたり、ミトコンドリアの「量」と「質」が分離されていなかったりして、進行段階に沿った比較になっていなかった。そのため、病期の異なるヒト肝を同一の手法で横並びに測り、量あたりの呼吸能がどう変わるのかを直接確かめる必要があった。",
    "achievements": ["肥満群は脂肪肝の有無を問わず、痩せ群に対して単離ミトコンドリアの**最大呼吸が4.3〜5.0倍**に達し、しかもミトコンドリア量は同等だった。", "NASHでは**ミトコンドリア量が多いのに最大呼吸は31〜40%低下**し、脱共役とリークが増えており、量と質が逆方向に動くことを示した。", "呼吸低下は肝インスリン抵抗性の強さ、酸化ストレス（H2O2・脂質過酸化）、酸化的DNA損傷（8-OHdG）、抗酸化能の低下、炎症応答の亢進と並行していた。", "「肝ミトコンドリア柔軟性」という適応が早期に存在し、NASHで失われるという段階依存の枠組みを提示した。"],
    "limitations": ["NASH群が7例と小さく、サブグループ解析の統計的な力は限られる。", "横断研究であり、適応の獲得と喪失が同一個体のなかで時間的に連続して起きることは示されていない。", "単離ミトコンドリアの最大呼吸は基質を飽和させた条件下の能力であり、生体内で実際に回っている酸素消費とは異なる。", "検体は肥満外科手術時の生検であり、対象集団に偏りがある。"],
    "connection": ["「脂肪肝 > 通常 > MASH」という非単調な並びの数値的な出どころがここで、単純な細胞毒性ではこの形は説明できない。だからこそ自分の系で基礎呼吸を測る動機になる。", "ただしこの適応をin vitroで再現するには酸素が律速でないことが前提になるため、酸素透過膜（PMP）の意義を直接検証できる数少ない読み出しでもある。", "阻害剤カスケード（Mito Stress Test）まで踏み込まなくても、まずオープンオルガノイドと従来オルガノイドの**基礎呼吸だけ**を通常条件と病態誘導条件で比較すれば、非単調性が出るかどうかは判定できる。", "No.43の2:1（良性）と0:3（傷害）を使い分ければ、適応相と破綻相を意図的に作り分けられる。"],
    "glossary": [{"term": "high-resolution respirometry", "full": "high-resolution respirometry", "desc": "酸素電極で単離ミトコンドリアの酸素消費を高感度に測る手法"}, {"term": "maximal respiration", "full": "maximal respiration", "desc": "基質と脱共役剤を飽和させたときに到達できる最大の酸素消費速度"}, {"term": "uncoupling", "full": "mitochondrial uncoupling", "desc": "電子伝達と ATP 合成の共役が外れ、熱として散逸する状態"}, {"term": "8-OHdG", "full": "8-hydroxy-2'-deoxyguanosine", "desc": "酸化的DNA損傷の代表的なマーカー"}, {"term": "NAFL", "full": "non-alcoholic fatty liver", "desc": "炎症や線維化を伴わない単純性脂肪肝の段階"}, {"term": "hepatic mitochondrial flexibility", "full": "hepatic mitochondrial flexibility", "desc": "過栄養の初期に肝が呼吸能を押し上げる適応。NASHで失われる"}],
    "struct": {"model": "ヒト組織", "cells": ["肝（生検組織・単離ミトコンドリア）"], "triggers": ["肥満・インスリン抵抗性", "NAFL/NASHへの進行"], "steatosis": "○", "inflammation": "○", "fibrosis": "△", "readout": ["最大呼吸速度", "ミトコンドリア量", "H2O2・脂質過酸化", "8-OHdG", "肝インスリン抵抗性"], "ignite": "線維化の点火そのものではなく、点火の前後でミトコンドリアが上がってから落ちる段階性を定義する", "params": [{"name": "最大呼吸の倍率", "note": "肥満/NAFLで対照比4.3–5.0倍。ABMにおける代謝能パラメータの上限を与える"}, {"name": "NASHでの低下率", "note": "31–40%低下、かつミト量は増加。量と質を別変数として持つ根拠"}], "todos": ["オープンオルガノイドと従来オルガノイドの基礎呼吸を、通常条件とAOA200条件で比較する", "既存の凍結サンプルでmtDNAコピー数を測り、ミトコンドリアの量と質を分離する"]},
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f44' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>呼吸は上がってから落ちる——段階依存の非単調性</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>痩せ対照</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>基準の最大呼吸</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>ミト量 基準</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f44)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>肥満・NAFL</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>最大呼吸 4.3–5.0倍</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>ミト量は同等</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f44)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>NASH</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>最大呼吸 31–40%低下</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>ミト量はむしろ増</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f44)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>並行所見</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脱共役・リーク増</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>酸化ストレス・炎症亢進</text>\n</svg>",
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m44' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：病期の異なるヒト肝を同一手法で横並びに測る</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 被験者</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>4群 計53例</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>肥満外科手術時に生検</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m44)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>② 単離</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>肝ミトコンドリア</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>量と質を分離</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m44)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>③ 測定</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>高分解能呼吸測定</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>最大呼吸・リーク</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m44)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--C)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--C)' font-weight='600'>④ 併測</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>酸化ストレス・炎症</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--C)'>肝インスリン抵抗性</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("44", [{ic:"human",cap:"ヒト肝生検 痩せ12・肥満18・NAFL16・NASH7例"}, {ic:"liver",cap:"単離ミトコンドリアの高分解能呼吸測定"}, {ic:"omics",cap:"酸化ストレス・抗酸化能・炎症マーカーの併測"}, {ic:"liver",cap:"NASHでは量が増えるのに最大呼吸は31–40%低下"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 44 Koliaki/Roden Cell Metab 2015: ヒト肝生検+単離ミトコンドリアの高分解能呼吸測定+酸化ストレス・炎症マーカー（2026-10補完：elisaは推測） */
LP.methods("44", ["human","elisa"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №44 呼吸は上がってから落ちる（肝ミトコンドリア柔軟性の喪失） ===== */
LP.cinema("44", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("44d","var(--D)")}</defs>`
    +GLYPH.title("痩せ → 肥満/NAFL → NASH：ミトコンドリアの量と質は別々に動く")
    +GLYPH.hep("hepA",40,100,0.62,"")+GLYPH.hep("hepB",270,100,0.62,"")+GLYPH.hep("hepC",500,100,0.62,"")
    +`<g id="mitoA"><ellipse cx="95" cy="160" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/><ellipse cx="120" cy="180" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/></g>`
    +`<g id="mitoB"><ellipse cx="325" cy="160" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/><ellipse cx="350" cy="180" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/></g>`
    +`<g id="mitoC"><ellipse cx="555" cy="160" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/><ellipse cx="580" cy="180" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/></g>`
    +`<g id="mitoCx" class="fade"><ellipse cx="530" cy="196" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/><ellipse cx="596" cy="152" rx="11" ry="6.5" fill="#b06a4a" stroke="#7d4630" stroke-width="1"/></g>`
    +GLYPH.tag("labA",98,250,"痩せ対照","var(--accent)",96)
    +GLYPH.tag("labB",328,250,"肥満・NAFL","var(--D)",108)
    +GLYPH.tag("labC",558,250,"NASH","var(--B)",84)
    +GLYPH.tag("valA",98,284,"呼吸 基準","var(--ink-soft)",104,true)
    +GLYPH.tag("valB",328,284,"最大呼吸 4.3–5.0倍","var(--D)",150,true)
    +GLYPH.tag("valC",558,284,"最大呼吸 31–40%低下","var(--B)",162,true)
    +GLYPH.layer("curve44")
    +GLYPH.tag("axis44",360,412,"呼吸速度は非単調に変わる","var(--ink-soft)",180,true),
  build(K){
    return [
      {color:"E",t:2400,cap:"痩せた対照の肝。ミトコンドリアの数も、そこを通る酸素の流れも基準値。",run(){
        K.flow(95,200,95,165,"var(--E)",{n:2,dur:1.1,loop:2});K.T(()=>K.show(["valA"]),900);
      }},
      {color:"D",t:3800,cap:"① 肥満とNAFLでは、ミトコンドリアの数は変わらないのに最大呼吸が4.3〜5.0倍に上がる。肝が呼吸能そのものを押し上げる適応が起きている。",run(){
        K.flow(325,205,325,162,"var(--D)",{n:5,dur:0.8,loop:3});
        K.flow(350,205,350,182,"var(--D)",{n:5,dur:0.8,loop:3});
        K.T(()=>{K.show(["valB"]);K.pulse("labB");},1300);
        K.T(()=>K.unpulse("labB"),3000);
      }},
      {color:"B",t:4400,cap:"② NASHではミトコンドリアはむしろ増えているのに、最大呼吸は31〜40%低い。脱共役とリークが増え、プロトン勾配が熱として逃げていく。",run(){
        K.show(["mitoCx"]);
        K.T(()=>{K.flow(555,205,555,163,"var(--B)",{n:1,dur:1.4,loop:1});},600);
        K.T(()=>{K.flow(555,160,505,120,"var(--H)",{n:3,dur:1.0,loop:2,r:2.6});
                 K.flow(580,180,630,140,"var(--H)",{n:3,dur:1.0,loop:2,r:2.6});},1500);
        K.T(()=>{K.show(["valC"]);},2900);
      }},
      {color:"C",t:3600,cap:"③ 同時に過酸化水素と脂質過酸化、8-OHdGが増える一方で抗酸化能は落ち、炎症応答が強まる。",run(){
        radiate(K,558,175,"var(--C)",8);
        K.T(()=>{K.attr("hepC","opacity","0.55");},1600);
      }},
      {color:"F",t:3400,cap:"④ 呼吸は上がってから落ちる。この非単調性は単純な細胞毒性では説明がつかないので、自分の系で基礎呼吸を測る意味が出てくる。",run(){
        K.draw("curve44",["M90,392 C200,392 240,330 328,330 C430,330 470,372 560,376"],{len:560,dur:1.8,color:"var(--F)",w:3});
        K.T(()=>K.show(["axis44"]),1900);
      }},
    ];
  }
});
