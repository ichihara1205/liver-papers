/* ============================================================
   №47 · Nature 2017 · Halpern KB, Shenhav R, Matcovitch-Natan O, Toth B, Lemze D, Golan M, …
   肝遺伝子の約半分はゾーン依存で、中間層にピークを持つ非単調プロファイルも多い
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"47", primary:"E",
    title:"肝遺伝子の約半分はゾーン依存で、中間層にピークを持つ非単調プロファイルも多い",
    authors:"Halpern KB, Shenhav R, Matcovitch-Natan O, Toth B, Lemze D, Golan M, Massasa EE, Baydatch S, Landen S, Moor AE, Brandis A, Giladi A, Stokar-Avihail A, David E, Amit I, Itzkovitz S",
    journal:"Nature",
    year:2017,
    vol:"542(7641):352-356",
    doi:"10.1038/nature21065",
    url:"https://doi.org/10.1038/nature21065",
    tags:["E","G","D"],
    "approach": "マウス肝の単一細胞トランスクリプトーム（数千細胞）＋ smFISHで特徴づけたランドマーク遺伝子パネルによる小葉座標の推定 ＋ 全遺伝子のゾーン依存プロファイル再構成",
    "added": "2026-09-20",
    "abstract_ja": "哺乳類の肝臓は六角形の小葉からなり、血流とモルフォゲンによって門脈側から中心静脈側へ放射状に極性づけられている。主要な肝遺伝子がこの軸に沿って発現を変えること——zonation——自体は知られていたが、全ゲノムにわたって空間的な分業を詳細に再構成した例はなかった。本研究は数千個のマウス肝細胞のトランスクリプトームを測定し、単分子蛍光in situハイブリダイゼーション（smFISH）で性質を確かめたランドマーク遺伝子のパネルに基づいて各細胞の小葉座標を推定することで、全遺伝子のゾーン依存プロファイルを高い空間分解能で得た。その結果、肝遺伝子のおよそ50%が有意にゾーン依存であり、しかも門脈↔中心静脈の単調な勾配だけでなく、小葉の中間層でピークを迎える非単調なプロファイルが数多く存在することが明らかになった。こうした非単調性には胆汁酸生合成酵素群が含まれ、その空間的な並び順が酵素カスケードにおける反応の順序と一致していた。この手法は他の哺乳類臓器についても同様の空間ゲノム地図を描く道を開く。",
    "background": "肝小葉では酸素・栄養・ホルモンが門脈から中心静脈へ向かって連続的に変化し、それに応じて糖新生・解糖・アンモニア処理・薬物代謝などの機能が場所ごとに分業されている。しかしこの分業の記述は、古典的には少数のマーカー遺伝子の免疫染色に依存しており、全遺伝子を対象に空間分解能をもって測る手段がなかった。単一細胞RNA-seqは細胞を解離させるため位置情報が失われるという根本的な制約があり、転写プロファイルから元の位置を復元する枠組みが必要だった。",
    "achievements": ["smFISHで検証したランドマーク遺伝子パネルから各肝細胞の**小葉座標を推定する枠組み**を確立し、解離で失われる位置情報を転写プロファイルから復元した。", "全遺伝子のゾーン依存プロファイルを高い空間分解能で取得し、**肝遺伝子の約50%が有意にzonate**していることを示した。", "単調な勾配だけでなく、**中間層にピークを持つ非単調プロファイル**が数多く存在することを発見した。", "胆汁酸生合成酵素群の空間的な並び順が、酵素カスケードにおける反応の順序と一致することを示した。"],
    "limitations": ["解析は絶食させたマウス肝に限られ、ヒト肝での一致は検証されていない。", "小葉座標はランドマーク遺伝子からの推定であって、物理的な位置を直接測定したものではない。", "食餌状態や概日リズムといった時間軸によるzonationの変動は扱っていない（著者も今後の課題としている）。", "対象は肝細胞に限られ、LSEC・HSC・KCといった非実質細胞のzonationは扱っていない。"],
    "connection": ["「zonationを再現する」を目標に据えると、門脈側/中心静脈側の2条件では近似にならない——非単調プロファイルが多いからで、目標の立て方そのものを変える根拠になる。", "自分の系で狙うべきはzonationの再現ではなく、**酸素とWntの寄与を分離すること**である。生体では中心静脈が低酸素端であると同時にWnt源でもあるため、この分離はin vivoでは原理的にできない。", "酸素 × RSPO1 の2×2をInnoCellで組めば、記述されている勾配のうちどこまでが酸素由来かを問える。これは誰も答えていない問いで、しかも自分の系の構成上の強みと一致する。", "非単調マーカーを一つ選び、2条件では再現できないことを積極的に示せば、DiProspero 2021の先を行く枠組みになる。"],
    "glossary": [{"term": "zonation", "full": "liver zonation", "desc": "肝小葉の門脈-中心静脈軸に沿って機能と遺伝子発現が分業される現象"}, {"term": "smFISH", "full": "single-molecule fluorescence in situ hybridization", "desc": "個々のmRNA分子を組織切片上で数える手法。位置情報を保ったまま定量できる"}, {"term": "periportal", "full": "periportal (zone 1)", "desc": "門脈周囲。酸素が高く糖新生やアンモニア処理が優位"}, {"term": "pericentral", "full": "pericentral (zone 3)", "desc": "中心静脈周囲。酸素が低く解糖や薬物代謝が優位でWnt源でもある"}, {"term": "landmark gene", "full": "landmark gene", "desc": "ゾーン依存性が既知で、細胞の小葉座標を推定する基準になる遺伝子"}, {"term": "lobule", "full": "hepatic lobule", "desc": "肝の構造単位。六角形で、頂点に門脈域、中心に中心静脈を持つ"}],
    "struct": {"model": "in vivo", "cells": ["肝細胞"], "triggers": ["—（生理的zonation）"], "steatosis": "—", "inflammation": "—", "fibrosis": "—", "readout": ["scRNA-seq", "smFISH", "小葉座標推定", "ゾーン依存プロファイル"], "ignite": "—（線維化は対象外。zonationをどの分解能で語るべきかの基準を与える）", "params": [{"name": "zonate遺伝子の割合", "note": "約50%。ABMの空間依存パラメータをどこまで細かく持つべきかの目安"}, {"name": "非単調プロファイル", "note": "中間層にピーク。2ゾーン近似の限界を定量的に与える"}], "todos": ["酸素×RSPO1の2×2でGLUL/CYP2E1（中心静脈側）とCPS1/ASS1（門脈側）を読む", "非単調マーカーを1つ選び、2条件では再現できないことを積極的に示す"]},
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f47' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>2ゾーン近似では足りない——非単調プロファイルの発見</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>解離</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>数千肝細胞のscRNA-seq</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>位置情報は失われる</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f47)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>復元</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>smFISHランドマーク</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>小葉座標を推定</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f47)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>結果</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>約50%がzonate</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--E)'>全遺伝子プロファイル</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f47)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>非単調</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>中間層にピーク</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>胆汁酸酵素の順序と一致</text>\n</svg>",
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m47' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：転写プロファイルから元の位置を復元する</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① マウス肝</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>小葉構造</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>門脈→中心静脈軸</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m47)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>② scRNA-seq</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>数千細胞</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>解離で位置が消える</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m47)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>③ smFISH</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ランドマーク遺伝子</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>位置の基準を作る</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m47)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--E)' font-weight='600'>④ 再構成</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>小葉座標を推定</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--E)'>全遺伝子の空間地図</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("47", [{ic:"mouse",cap:"マウス肝 数千個の肝細胞"}, {ic:"omics",cap:"scRNA-seq＋smFISHランドマーク遺伝子"}, {ic:"liver",cap:"小葉座標を推定しzonationプロファイルを再構成"}, {ic:"omics",cap:"約50%がzonate・非単調プロファイルも多数"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 47 Halpern/Itzkovitz Nature 2017: マウス肝scRNA-seq+smFISHランドマーク遺伝子で小葉座標を推定（2026-10補完：spatialは空間再構成を空間TXとみなした分類） */
LP.methods("47", ["mouse","scrna","spatial","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №47 zonation：解離で失った位置を復元し、非単調プロファイルを見つける ===== */
LP.cinema("47", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("47e","var(--E)")}</defs>`
    +GLYPH.title("門脈→中心静脈の軸：肝遺伝子の約50%がzonate、中間層ピークも多い")
    +`<circle cx="66" cy="196" r="22" fill="#cfd9e6" stroke="#7d92ad" stroke-width="2"/><text x="66" y="238" text-anchor="middle" font-size="9.5" fill="var(--ink-soft)">門脈域</text>`
    +`<circle cx="662" cy="196" r="22" fill="#d9c7cf" stroke="#a5788a" stroke-width="2"/><text x="662" y="238" text-anchor="middle" font-size="9.5" fill="var(--ink-soft)">中心静脈</text>`
    +GLYPH.hexHep("z1",160,196,"")+GLYPH.hexHep("z2",258,196,"")+GLYPH.hexHep("z3",356,196,"")
    +GLYPH.hexHep("z4",454,196,"")+GLYPH.hexHep("z5",552,196,"")
    +GLYPH.tag("o2hi",160,92,"O2 高","var(--E)",78)
    +GLYPH.tag("o2lo",552,92,"O2 低 / Wnt源","var(--B)",128)
    +GLYPH.layer("mono47")+GLYPH.layer("nonmono47")
    +GLYPH.tag("half47",360,300,"約50%の遺伝子がzonate","var(--E)",176,true)
    +GLYPH.tag("peak47",360,404,"中間層にピーク＝2ゾーン近似では届かない","var(--B)",300,true),
  build(K){
    const ids=["z1","z2","z3","z4","z5"];
    const off=[[-52,92],[64,118],[-24,-64],[88,-52],[-96,74]];
    return [
      {color:"E",t:2400,cap:"肝小葉は門脈域から中心静脈へ放射状に極性づけられ、酸素もモルフォゲンも連続的に変わっていく。",run(){}},
      {color:"F",t:3400,cap:"① 単一細胞RNA-seqのために細胞を解離すると、この位置情報がまるごと失われる。転写プロファイルだけが手元に残る。",run(){
        ids.forEach((id,i)=>K.T(()=>K.move(id,0,0,off[i][0],off[i][1],1.2),i*120));
      }},
      {color:"A",t:4000,cap:"② smFISHで性質を確かめたランドマーク遺伝子のパネルを基準にすると、各細胞の小葉座標を推定して位置を復元できる。",run(){
        ids.forEach((id,i)=>K.T(()=>K.move(id,off[i][0],off[i][1],0,0,1.2),i*120));
        ids.forEach((id,i)=>K.T(()=>{K.pulse(id);K.T(()=>K.unpulse(id),700);},900+i*120));
      }},
      {color:"E",t:4200,cap:"③ こうして全遺伝子のゾーン依存プロファイルが高い分解能で取れる。肝遺伝子のおよそ50%が有意にzonateしていた。",run(){
        K.draw("mono47",["M120,352 C240,352 300,318 380,306 C470,292 540,286 600,284"],{len:520,dur:1.6,color:"var(--E)",w:3});
        K.T(()=>K.show(["half47"]),1700);
      }},
      {color:"B",t:3800,cap:"④ しかも単調な勾配だけではない。中間層でピークを迎える非単調プロファイルが数多くあり、門脈側と中心静脈側の2条件では近似にならない。",run(){
        K.draw("nonmono47",["M120,370 C220,370 280,316 360,316 C440,316 500,368 600,368"],{len:520,dur:1.6,color:"var(--B)",w:3});
        K.T(()=>K.show(["peak47"]),1700);
      }},
    ];
  }
});
