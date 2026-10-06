/* ============================================================
   №43 · Chem Biol Interact 2007 · Gómez-Lechón MJ, Donato MT, Martínez-Romero A, Jiménez N, Castell JV,…
   OA:PA=2:1は「毒性が最小」として定義された比——良性慢性脂肪肝のin vitroモデル
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"43", primary:"D",
    title:"OA:PA=2:1は「毒性が最小」として定義された比——良性慢性脂肪肝のin vitroモデル",
    authors:"Gómez-Lechón MJ, Donato MT, Martínez-Romero A, Jiménez N, Castell JV, O'Connor JE",
    journal:"Chem Biol Interact",
    year:2007,
    vol:"165(2):106-116",
    doi:"10.1016/j.cbi.2006.11.004",
    url:"https://doi.org/10.1016/j.cbi.2006.11.004",
    tags:["D","A"],
    "approach": "in vitro（ヒト初代肝細胞・HepG2）＋ オレイン酸/パルミチン酸の混合比を系統的に変えたFFA曝露 ＋ 脂肪蓄積・細胞毒性・アポトーシスの同時定量",
    "added": "2026-09-20",
    "abstract_ja": "肝細胞に脂肪を溜めるin vitro条件では、脂肪が蓄積すること自体と脂肪酸が細胞を傷害することが同じ処理で同時に起きてしまうため、観察された変化がどちらに由来するのかを判別できないという困りごとがあった。本研究はその二つを切り分けられる曝露条件を実験的に定義することを目的に、ヒト肝トリグリセリドで最も豊富な飽和脂肪酸であるパルミチン酸（C16:0）と一価不飽和脂肪酸であるオレイン酸（C18:1）を比率を変えて混合し、ヒト初代肝細胞とHepG2に与えて、細胞内脂質の蓄積量・生存率・アポトーシスを並行して測定した。その結果、脂肪酸ごとに固有の毒性ポテンシャルがあり、オレイン酸をパルミチン酸の2倍含む2:1の混合では、ヒト脂肪肝組織と同程度の脂質蓄積を達成しながら毒性とアポトーシスは軽微にとどまった。一方でパルミチン酸のみを与えた0:3では、同じ蓄積に急性の細胞傷害が伴った。したがって2:1は「良性の慢性脂肪肝」を、0:3は「飽和脂肪酸が急性の傷害を引き起こす脂肪肝」を模す条件として使い分けることができ、脂肪過剰そのものの影響を他の因子から切り離して調べる土台となる。",
    "background": "脂肪肝のin vitroモデルでは培地に遊離脂肪酸（FFA）を加えて脂肪滴を蓄積させるのが定石だが、FFAは同時にリポトキシシティを引き起こすため、下流で見えた変化が脂肪の蓄積によるものなのか脂肪酸そのものの毒性によるものかを分離できなかった。しかも毒性の強さは脂肪酸種によって大きく異なり、飽和脂肪酸と一価不飽和脂肪酸では作用がむしろ逆を向くことが知られていた。そのため、ヒト肝に実際に蓄積する脂肪酸組成を反映しながら、傷害を伴わずに脂質だけを溜める条件がどこにあるのかを、比率の関数として定義する必要があった。",
    "achievements": ["ヒト初代肝細胞とHepG2のいずれでも、**オレイン酸:パルミチン酸 = 2:1** の混合がヒト脂肪肝と同等の細胞内脂質蓄積を与えつつ、細胞毒性とアポトーシスを最小に抑えることを示した。", "**パルミチン酸単独（0:3）** では同じ蓄積が急性の細胞傷害を伴い、飽和/不飽和の比こそが毒性を決める主因であることを、蓄積量とは独立に分離して示した。", "脂肪蓄積と細胞死を別々に操作できる条件セットを提示し、以後のMASLD in vitroモデルが用いるFFA処方の原型を与えた。"],
    "limitations": ["評価は脂肪蓄積・生存率・アポトーシスまでで、線維化や免疫応答といった下流の病態は対象外である。", "HepG2は肝癌由来株で脂質代謝が初代肝細胞と異なり、初代肝細胞側も単独培養のため非実質細胞との相互作用を含まない。", "曝露は短期であり、慢性経過のなかで適応が起きるのか破綻するのかは検証されていない。", "FFAはBSA複合体として与えられるが、FFA:BSAモル比が結果に与える影響は系統的に検討されていない。"],
    "connection": ["AOA200（OA:PA = 2:1、総量200 µM）の比はここが出典であり、**この比はもともと「毒性とアポトーシスが最小になる条件」として選ばれたもの**である。したがって自分の系で線維化が点火しないのは系の欠陥ではなく、傷害を出さないように設計された刺激に対する期待どおりの応答という読み方ができる。", "点火を狙うなら、同じ論文が定義したもう一方の極（パルミチン酸優位・0:3側）へ組成を振るのが最短で、しかも根拠が一報のなかで完結している。第6回でAOA200を選んだ判断（低傷害・高蓄積）は、この論文が2:1に与えた性格をそのままなぞっている。", "No.44（Koliaki 2015）と組み合わせると、良性脂肪肝の段階では呼吸が上がり傷害を伴う段階で落ちるという非単調性を、in vitroで作り分ける設計になる。"],
    "glossary": [{"term": "FFA", "full": "free fatty acid", "desc": "遊離脂肪酸。培地に加えて肝細胞に脂肪滴を蓄積させる入力"}, {"term": "OA", "full": "oleic acid (C18:1)", "desc": "一価不飽和脂肪酸。脂肪滴に取り込まれやすく毒性が低い"}, {"term": "PA", "full": "palmitic acid (C16:0)", "desc": "飽和脂肪酸。小胞体ストレスとアポトーシスを誘導しやすい"}, {"term": "lipotoxicity", "full": "lipotoxicity", "desc": "脂肪酸そのものが細胞を傷害する作用。脂肪の蓄積とは別の現象"}, {"term": "benign chronic steatosis", "full": "benign chronic steatosis", "desc": "傷害を伴わない慢性的な脂肪蓄積。2:1条件が模す病態段階"}],
    "struct": {"model": "in vitro", "cells": ["ヒト初代肝細胞", "HepG2"], "triggers": ["オレイン酸/パルミチン酸混合（比率可変）"], "steatosis": "○", "inflammation": "—", "fibrosis": "—", "readout": ["細胞内脂質蓄積量", "細胞生存率(neutral red)", "アポトーシス"], "ignite": "点火しない条件を定義した論文——2:1が毒性最小、0:3が急性傷害側", "params": [{"name": "OA:PA比", "note": "2:1で毒性最小、0:3で急性傷害。ABMでは脂肪酸組成→細胞死率の写像パラメータになる"}, {"name": "総FFA濃度", "note": "ヒト脂肪肝と同等の蓄積に必要な曝露量の目安"}], "todos": ["AOA200の比を2:1から1:1・1:2へ振り、蓄積量を保ったまま細胞死だけを上げられるか確認する", "PA優位条件でM30（caspase-cleaved CK18）が上がるかを見る"]},
    "figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='f43' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>OA:PA比が脂肪蓄積と細胞死を切り離す</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>FFA混合曝露</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>OA:PA比を可変</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>総量は一定</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f43)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>2:1（OA優位）</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ヒト脂肪肝相当の蓄積</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>毒性・アポトーシス軽微</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f43)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>0:3（PA単独）</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>同等の蓄積</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>急性の細胞傷害</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f43)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>使い分け</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>良性慢性 vs 急性傷害</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>下流の解釈が変わる</text>\n</svg>",
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m43' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：比率を振って蓄積と毒性を同時に測る</text>\n  <rect x='14' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 細胞</text>\n  <text x='84.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ヒト初代肝細胞</text>\n  <text x='84.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--accent)'>HepG2</text>\n  <path d='M157,96 L168,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m43)'/>\n  <rect x='171' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/>\n  <text x='241.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--D)' font-weight='600'>② 曝露</text>\n  <text x='241.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>OA/PA混合</text>\n  <text x='241.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--D)'>比率 2:1〜0:3</text>\n  <path d='M314,96 L325,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m43)'/>\n  <rect x='328' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.5'/>\n  <text x='398.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--A)' font-weight='600'>③ 読み出し</text>\n  <text x='398.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>脂質蓄積量</text>\n  <text x='398.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--A)'>生存率・アポトーシス</text>\n  <path d='M471,96 L482,96' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m43)'/>\n  <rect x='485' y='44' width='141' height='104' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/>\n  <text x='555.5' y='64' text-anchor='middle' font-size='9.3' fill='var(--B)' font-weight='600'>④ 結論</text>\n  <text x='555.5' y='82' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>毒性最小比の同定</text>\n  <text x='555.5' y='95.5' text-anchor='middle' font-size='8.3' fill='var(--B)'>2:1＝良性慢性脂肪肝</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("43", [{ic:"dish",cap:"ヒト初代肝細胞・HepG2の単層培養"}, {ic:"hepatocyte",cap:"OA:PA比を変えたFFA混合で脂肪滴を蓄積"}, {ic:"liver",cap:"ヒト脂肪肝と同等の細胞内脂質量に到達"}, {ic:"hepatocyte",cap:"PA優位(0:3)では急性の細胞傷害とアポトーシス"}]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №43 OA:PA比が脂肪蓄積と細胞死を切り離す ===== */
LP.cinema("43", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.lip("43")}${GLYPH.arrow("43d","var(--D)")}</defs>`
    +GLYPH.title("同じ総量のFFAでも、飽和/不飽和の比が細胞の運命を決める")
    +GLYPH.tag("armL43",135,72,"OA:PA = 2:1","var(--A)",118)
    +GLYPH.tag("armR43",585,72,"PA単独 (0:3)","var(--B)",118)
    +GLYPH.hep("hepL",60,120,0.85,"")
    +GLYPH.hep("hepR",510,120,0.85,"")
    +`<g id="ffaL43" class="fade">`+GLYPH.metab("oaL1",100,105,"OA","var(--A)")+GLYPH.metab("oaL2",135,105,"","var(--A)")+GLYPH.metab("paL1",170,105,"PA","var(--B)")+`</g>`
    +`<g id="ffaR43" class="fade">`+GLYPH.metab("paR1",550,105,"PA","var(--B)")+GLYPH.metab("paR2",585,105,"","var(--B)")+GLYPH.metab("paR3",620,105,"","var(--B)")+`</g>`
    +GLYPH.badge("ok43",120,320,"良性慢性脂肪肝","毒性は軽微","var(--A)")
    +GLYPH.badge("bad43",600,320,"急性の傷害","アポトーシス","var(--B)")
    +GLYPH.stellate("hsc43",360,352,"肝星細胞（静止）")
    +GLYPH.layer("col43")
    +GLYPH.tag("noig43",360,412,"点火しない","var(--ink-soft)",104,true),
  build(K){
    const dL=[[108,176],[146,200],[122,218],[168,192],[138,240]];
    const dR=[[558,176],[596,200],[572,218],[618,192],[588,240]];
    return [
      {color:"E",t:2200,cap:"ヒト初代肝細胞を2群に分ける。与える脂肪酸の総量は同じで、飽和と不飽和の比だけが違う。",run(){}},
      {color:"D",t:3600,cap:"① OA:PA = 2:1。オレイン酸が多い側では脂肪滴が溜まり、ヒト脂肪肝と同程度の蓄積まで達する。",run(){
        K.show(["ffaL43"]);
        [100,135,170].forEach((x,i)=>K.T(()=>K.flow(x,118,130,185,i===2?"var(--B)":"var(--A)",{n:2,dur:1.0,loop:1}),i*220));
        K.T(()=>addDrops(K,"hepLDrops",dL,"lip43"),900);
      }},
      {color:"D",t:3600,cap:"② PA単独（0:3）。蓄積量そのものは、ほぼ同じところまで行く。",run(){
        K.show(["ffaR43"]);
        [550,585,620].forEach((x,i)=>K.T(()=>K.flow(x,118,580,185,"var(--B)",{n:2,dur:1.0,loop:1}),i*220));
        K.T(()=>addDrops(K,"hepRDrops",dR,"lip43"),900);
      }},
      {color:"B",t:4200,cap:"③ 違いは細胞の側に出る。2:1では毒性もアポトーシスも軽微だが、0:3では膜が壊れて急性の傷害が起きる。",run(){
        K.T(()=>K.show(["ok43"]),500);
        K.T(()=>{radiate(K,580,190,"var(--B)",8);},1400);
        K.T(()=>{K.attr("hepR","opacity","0.4");shrinkChildren(K,"hepRDrops");K.markX(580,190,"var(--B)");},2400);
        K.T(()=>K.show(["bad43"]),3100);
      }},
      {color:"F",t:3400,cap:"④ AOA200が採っているのは左側——毒性が最小になるよう定義された比。だから下流のHSCは静止のままで、線維化が点火しないのは設計どおりの応答になる。",run(){
        K.flow(160,250,352,330,"var(--A)",{n:2,dur:1.3,loop:1,r:2.6});
        K.T(()=>{K.pulse("hsc43");},1200);
        K.T(()=>{K.unpulse("hsc43");K.show(["noig43"]);},2200);
      }},
    ];
  }
});
