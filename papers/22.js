/* ============================================================
   №22 · Immunity 2025 · De Ponti FF†, Bujko A†, Liu Z, Collins PJ, Schuermans S, Maueroder C,…
   LAM様KCと募集LAMがTREM2を介した機能的冗長性で肝組織修復を保証——両者欠失でefferocytosis障害・線維化点火
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    "id": "22",
    "title": "LAM様KCと募集LAMがTREM2を介した機能的冗長性で肝組織修復を保証——両者欠失でefferocytosis障害・線維化点火",
    "authors": "De Ponti FF†, Bujko A†, Liu Z, Collins PJ, Schuermans S, Maueroder C, Amstelveen S, Thoné T, Martens L, McKendrick JG, Louwe PA, Sànchez Cruz A, Saelens W, Matchett KP, Waller KJ, Zwicker C, Buglar-Lamb A, Vanneste B, Parmentier F, Remmerie A, Guilliams M, Henderson NC, Ravichandran K, Marques PE, Scott CL†（VIB-UGent Center for Inflammation Research, ベルギー）",
    "journal": "Immunity",
    "year": 2025,
    "vol": "58(2):362–380.e10",
    "doi": "10.1016/j.immuni.2025.01.002",
    "url": "https://www.cell.com/immunity/fulltext/S1074-7613(25)00002-0",
    "primary": "C",
    "tags": ["C", "B", "H"],
    "approach": "in vivo（複数マウス肝傷害モデル：CCl4・MASH食・胆管結紮BDL＋条件付きTREM2 KO）＋ scRNA-seq・空間トランスクリプトーム・プロテオゲノミクス ＋ ヒト肝組織ex vivo検証",
    "added": "2026-06-09",
    "abstract_ja": "肝臓には傷害前から常在するクッパー細胞（KC）と病態時に浸潤する脂質関連マクロファージ（LAM）という異なる発生起源のマクロファージが共存するが、両者の機能分担は不明であった。本研究はプロテオゲノミクス・scRNA-seq・空間トランスクリプトームを複数の肝傷害モデルに適用し、常在KCも傷害部位でLAM様表現型（TREM2+/CD9+/GPNMB+）を採用できることを発見した。このLAM様KCと単球由来の募集LAMはともに傷害巣に空間的に限局し、いずれもアポトーシス死細胞の取り込み（efferocytosis）によってLAM表現型へ誘導される。条件付きTREM2欠失実験では、LAMとLAM様KCのどちらか一方にTREM2が維持されれば組織修復は成立するが、両集団から同時に欠失させると死細胞クリアランスが失われ過剰な線維化が生じた。この相互補完的な機能的冗長機構は複数の肝傷害背景に共通し、ヒト肝組織でも保存されており、TREM2を足がかりとした修復細胞の産生が治療応用への道を開く可能性を示した。",
    "background": "健常肝の類洞には常在マクロファージのクッパー細胞（KC）が住み着き、アポトーシス細胞や異物を貪食して恒常性を維持している。MASHや薬物性肝障害など傷害が生じると循環単球が肝に浸潤してLAM（TREM2・CD9・GPNMB・SPP1高発現の特殊亜集団）へ分化し、常在KCと共存する。LAMは近年注目される修復関連マクロファージだが、「常在KCがLAM様表現型を取りうるか」「組織修復の責任集団はKCとLAMのどちらか」「一方が欠損しても補完できるか」という問いには実験的答えがなかった。",
    "achievements": ["複数の肝傷害モデル（CCl4・MASH食・BDL等）でプロテオゲノミクス＋scRNA-seq＋空間TX解析を実施し、**LAM様KCと募集LAMの両集団が傷害巣に空間的に限局**することを発見した。", "**常在KCが傷害部位でTREM2+/CD9+のLAM様表現型を採用**できること、かつ死細胞の取り込み（efferocytosis）そのものがLAM表現型への誘導シグナルとなることを実証した。", "条件付きTREM2欠失実験で、**KC・LAMのどちらか一方のTREM2が保たれれば修復は成立**するが、**両集団の同時欠失で死細胞蓄積・線維化増悪**が起こることを確立——機能的冗長性の存在を証明した。", "マウスで得た知見が**ヒト肝組織でも保存**されており、TREM2+の両集団が複数の傷害背景に共通して存在することを確認した。"],
    "limitations": ["主に急性・亜急性の実験的傷害モデルが用いられており、長期的なMASH進行における両集団の動態変化は未解明。", "LAMとLAM様KCのefferocytosis誘導がTREM2以外の分子（TIM4・MARCO等）とどう連携するかは今後の課題として残る。", "ヒト組織検証はex vivo解析に留まり、ヒトでのTREM2条件付き欠失実験は倫理的に不可能なため機能的冗長性の直接証明は得られていない。"],
    "connection": ["KC→LAM様転換のTREM2発現をオルガノイドKC健全性バイオマーカーとして活用可能。LPS刺激によるTREM2低下がefferocytosis不全KCを誘導し線維化点火を再現できる。論文16（TIM4軸）と合わせABMのKCエージェントに「efferocytosis能（TIM4×TREM2の積）→死細胞除去率」ルールを実装する根拠となる。"],
    "glossary": [{"term": "TREM2", "full": "triggering receptor expressed on myeloid cells 2", "desc": "LAM様KC・募集LAMに発現する組織修復受容体。efferocytosisを駆動し、いずれか一方の発現で修復成立"}, {"term": "LAM", "full": "lipid-associated macrophage", "desc": "TREM2/CD9/GPNMB陽性の特殊マクロファージ。本論文では募集LAM（単球由来）とLAM様KC（常在KC転換）を区別"}, {"term": "LAM-like KC", "full": "LAM-like Kupffer cell", "desc": "傷害部位で常在KCがLAM表現型を採用した状態。募集LAMと機能的冗長性をもつ"}, {"term": "Efferocytosis", "full": "efferocytosis（死細胞貪食）", "desc": "アポトーシス細胞の貪食除去。本論文では死細胞取込がLAM表現型誘導シグナルにもなる"}, {"term": "Proteogenomics", "full": "proteogenomics", "desc": "プロテオームとトランスクリプトームを統合する解析手法。LAM vs LAM様KCの分子同一性比較に使用"}, {"term": "GPNMB", "full": "glycoprotein NMB", "desc": "LAM表現型の定義マーカー。TREM2・CD9とともにLAMとLAM様KCに高発現"}, {"term": "CD9", "full": "cluster of differentiation 9", "desc": "テトラスパニン型LAMマーカー。TREM2とともにLAM表現型の定義に使用"}, {"term": "TIMD4", "full": "T cell immunoglobulin and mucin domain 4", "desc": "常在KC特異的マーカー遺伝子（TIM4タンパクの遺伝子）"}],
    "struct": {"model": "in vivo + ヒト組織", "cells": ["クッパー細胞(KC)", "LAM様KC", "募集LAM(単球由来)", "HSC"], "triggers": ["急性肝傷害(CCl4)", "MASH食", "胆管結紮(BDL)", "TREM2条件付き欠失"], "steatosis": "—", "inflammation": "○", "fibrosis": "○", "readout": ["efferocytosis(死細胞クリアランス)", "TREM2/CD9/GPNMB発現", "線維化(コラーゲン沈着)", "空間TX/scRNA-seq"], "ignite": "KC・LAM両集団のTREM2同時欠失→死細胞蓄積→HSC活性化で線維化点火", "params": [{"name": "efferocytosis能(TIM4×TREM2)→死細胞除去率", "note": "KC/LAMエージェントの死細胞クリアランス係数。低下で死細胞蓄積→HSC活性化に接続（#16 TIM4軸と統合）"}, {"name": "KC→LAM様転換確率", "note": "死細胞取込量に応じてKCがLAM様(TREM2+)状態へ遷移する確率ルール"}], "todos": ["オルガノイドKCのTREM2発現をefferocytosis健全性バイオマーカー(qPCR)に採用", "LPS刺激でKCのTREM2低下→死細胞蓄積→HSC活性化という線維化点火連鎖をin vitroで再現"]},
    "method_figure": "<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs><marker id='m22' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs>\n  <rect x='0' y='0' width='640' height='232' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：複数肝傷害モデル → マルチオミクス → 条件付きTREM2欠失 → ヒト保存性</text>\n  <rect x='14' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='84' y='66' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>① 肝傷害モデル</text>\n  <text x='84' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>CCl4 / MASH食 / BDL</text>\n  <text x='84' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>急性〜亜急性</text>\n  <text x='84' y='112' text-anchor='middle' font-size='8.3' fill='var(--accent)'>KC＋募集LAM共存</text>\n  <path d='M156,98 L168,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m22)'/>\n  <rect x='172' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.5'/>\n  <text x='241' y='66' text-anchor='middle' font-size='9.3' fill='var(--G)' font-weight='600'>② マルチオミクス</text>\n  <text x='241' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>scRNA-seq＋空間TX</text>\n  <text x='241' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>プロテオゲノミクス</text>\n  <text x='241' y='112' text-anchor='middle' font-size='8.3' fill='var(--G)'>LAM様KCを同定</text>\n  <path d='M314,98 L326,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m22)'/>\n  <rect x='329' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5'/>\n  <text x='399' y='66' text-anchor='middle' font-size='9.3' fill='var(--H)' font-weight='600'>③ 条件付きTREM2 KO</text>\n  <text x='399' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>KC側 / LAM側を別々に</text>\n  <text x='399' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>機能冗長性を検証</text>\n  <text x='399' y='112' text-anchor='middle' font-size='8.3' fill='var(--H)'>両欠失で線維化↑</text>\n  <path d='M472,98 L484,98' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m22)'/>\n  <rect x='486' y='46' width='140' height='104' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/>\n  <text x='556' y='66' text-anchor='middle' font-size='9.3' fill='var(--accent)' font-weight='600'>④ ヒト肝</text>\n  <text x='556' y='84' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>ex vivo解析</text>\n  <text x='556' y='98' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>TREM2+両集団</text>\n  <text x='556' y='112' text-anchor='middle' font-size='8.3' fill='var(--accent)'>ヒトでも保存</text>\n  <text x='320' y='196' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>De Ponti FF, Bujko A et al., Immunity 58(2):362–380.e10 (2025)</text>\n  </svg>",
    "figure": "<svg viewBox='0 0 640 318' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <defs>\n    <marker id='af22' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker>\n    <marker id='af22a' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--A)'/></marker>\n    <marker id='af22b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker>\n  </defs>\n  <rect x='0' y='0' width='640' height='318' fill='var(--paper)'/>\n  <text x='320' y='22' text-anchor='middle' font-size='12' fill='var(--ink)' font-weight='600'>TREM2による機能的冗長性：efferocytosisが修復を担い、両欠失で線維化が点火</text>\n  <ellipse cx='180' cy='160' rx='150' ry='96' fill='#efe1de' stroke='var(--C)' stroke-width='1.1' stroke-dasharray='4 3'/>\n  <text x='180' y='80' text-anchor='middle' font-size='9' fill='var(--C)'>傷害巣（空間的に限局）</text>\n  <circle cx='96' cy='160' r='15' fill='#cdbfae' stroke='var(--ink-soft)' stroke-width='1'/>\n  <text x='96' y='163' text-anchor='middle' font-size='7.5' fill='var(--ink-soft)'>死細胞</text>\n  <circle cx='200' cy='124' r='23' fill='#d7a9bd' stroke='var(--C)' stroke-width='1.6'/>\n  <text x='200' y='121' text-anchor='middle' font-size='8' fill='var(--C)' font-weight='700'>募集LAM</text>\n  <text x='200' y='133' text-anchor='middle' font-size='7.5' fill='var(--C)'>TREM2+</text>\n  <circle cx='200' cy='198' r='23' fill='#d7a9bd' stroke='var(--C)' stroke-width='1.6'/>\n  <text x='200' y='195' text-anchor='middle' font-size='8' fill='var(--C)' font-weight='700'>LAM様KC</text>\n  <text x='200' y='207' text-anchor='middle' font-size='7.5' fill='var(--C)'>TREM2+</text>\n  <path d='M113,156 C140,140 160,132 178,126' stroke='var(--C)' stroke-width='1.4' fill='none' marker-end='url(#af22)'/>\n  <path d='M113,166 C142,184 162,192 178,196' stroke='var(--C)' stroke-width='1.4' fill='none' marker-end='url(#af22)'/>\n  <text x='128' y='214' text-anchor='middle' font-size='8' fill='var(--C)'>efferocytosis</text>\n  <rect x='356' y='56' width='268' height='78' rx='8' fill='#e6efe6' stroke='var(--A)' stroke-width='1.4'/>\n  <text x='490' y='78' text-anchor='middle' font-size='9.5' fill='var(--A)' font-weight='700'>片方のTREM2が維持</text>\n  <text x='490' y='96' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>死細胞は除去される</text>\n  <text x='490' y='114' text-anchor='middle' font-size='9' fill='var(--A)'>→ 組織修復が成立（冗長性）</text>\n  <rect x='356' y='160' width='268' height='110' rx='8' fill='#f0e0db' stroke='var(--B)' stroke-width='1.6'/>\n  <text x='490' y='182' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='700'>KC・LAM両方のTREM2欠失</text>\n  <text x='490' y='200' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>死細胞クリアランス喪失 → 蓄積</text>\n  <text x='490' y='220' text-anchor='middle' font-size='8.8' fill='var(--B)' font-weight='600'>→ HSC活性化</text>\n  <text x='490' y='240' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='700'>→ 線維化を点火</text>\n  <text x='490' y='258' text-anchor='middle' font-size='8.3' fill='var(--ink-soft)'>過剰なコラーゲン沈着</text>\n  <path d='M270,138 C312,118 332,100 354,92' stroke='var(--A)' stroke-width='1.4' fill='none' marker-end='url(#af22a)'/>\n  <path d='M270,184 C312,206 332,212 354,216' stroke='var(--B)' stroke-width='1.6' fill='none' marker-end='url(#af22b)'/>\n  <text x='320' y='300' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>死細胞の取り込み自体がLAM様表現型(TREM2/CD9/GPNMB)を誘導する</text>\n</svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("22", [{ic:"macrophage",cap:"KC→LAM様表現型（TREM2↑）"},{ic:"macrophage",cap:"募集LAM（単球由来）"},{ic:"mouse",cap:"複数傷害モデル（CCl4・MASH・BDL）"},{ic:"human",cap:"ヒト肝組織での保存性確認"},{ic:"omics",cap:"scRNA-seq＋空間TX＋プロテオゲノミクス"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 22 De Ponti/Bujko/Scott Immunity 2025: 複数マウス肝傷害モデル+条件付きTREM2 KO+scRNA+空間TX+プロテオゲノミクス+ヒト肝組織 */
LP.methods("22", ["mouse","human","crispr","scrna","spatial","proteomics","wb","facs","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
LP.cinema("22", {
  svg:GLYPH.bg()
    +`<defs>${GLYPH.defsCommon}${GLYPH.arrow("22","var(--C)")}${GLYPH.arrow("22b","var(--B)")}</defs>`
    +GLYPH.title("TREM2+LAM様KCと募集LAMの機能的冗長性 — efferocytosisが修復を担保し両者欠失で線維化点火")
    +GLYPH.hep("hep22",20,32,0.85,"健常肝細胞")
    +`<g id="deadCell22" class="fade"><circle cx="360" cy="112" r="33" fill="#b8b0a0" stroke="#888" stroke-width="2"/><text x="360" y="107" text-anchor="middle" font-size="9" fill="#555">アポトーシス</text><text x="360" y="122" text-anchor="middle" font-size="9" fill="#555">肝細胞</text></g>`
    +GLYPH.mac("kcLAM22",158,275,"LAM様KC (常在)","#4a7a9b")
    +GLYPH.tag("trem2kc22",158,248,"TREM2","var(--C)",60,true)
    +`<g id="mono22Wrap" class="fade">`+GLYPH.monocyte("mono22",680,415,"単球")+`</g>`
    +`<g id="lam22Wrap" class="fade">`+GLYPH.mac("recLAM22",554,275,"募集LAM","#7a4a9b")+`</g>`
    +GLYPH.tag("trem2lam22",554,248,"TREM2","var(--C)",60,true)
    +GLYPH.stellate("hsc22",360,368,"肝星細胞")
    +`<g id="injSite22" class="fade"><ellipse cx="360" cy="190" rx="202" ry="122" fill="none" stroke="var(--C)" stroke-width="1.3" stroke-dasharray="6,4" opacity="0.65"/><text x="360" y="72" text-anchor="middle" font-size="9.5" fill="var(--C)">傷害部位（空間的限局）</text></g>`
    +GLYPH.badge("repairBadge22",554,378,"修復","✓ 成立","var(--H)")
    +`<g id="deadAcc22" class="fade"></g>`
    +GLYPH.layer("col22"),
  build(K){
    return [
      {color:"E",t:2400,cap:"① 健常な肝類洞。常在クッパー細胞（KC）が類洞を哨戒し、肝星細胞（HSC）は静止状態にある。",run(){}},
      {color:"C",t:4400,cap:"② 肝傷害でアポトーシス細胞が出現。傷害部位（点線）に常在KCがLAM様表現型（TREM2↑）に転換し、循環単球が浸潤してLAMへ分化——どちらも傷害巣に空間的に限局する。",
       run(){
         K.show(["deadCell22","injSite22","trem2kc22"]);
         K.pulse("trem2kc22");
         K.show(["mono22Wrap"]);
         K.T(()=>K.move("mono22",680,415,554,285,1.3),200);
         K.T(()=>{K.attr("mono22Wrap","opacity","0.12"); K.show(["lam22Wrap","trem2lam22"]); K.pulse("trem2lam22");},1700);
       }},
      {color:"C",t:4200,cap:"③ TREM2陽性の両集団が協調して死細胞を貪食（efferocytosis）。KC・LAMのいずれかにTREM2が残れば修復は成立する——相互補完的な冗長性が組織修復を保証する。",
       run(){
         K.unpulse("trem2kc22"); K.unpulse("trem2lam22");
         K.flow(158,263,332,118,"var(--C)",{n:3,dur:1.1,loop:2});
         K.flow(554,263,388,118,"var(--C)",{n:3,dur:1.1,loop:2});
         K.T(()=>{K.attr("deadCell22","opacity","0.2"); K.show(["repairBadge22"]);},2900);
       }},
      {color:"B",t:4000,cap:"④ 両集団のTREM2を同時欠失 → efferocytosis障害 → 死細胞蓄積 → HSCへ過剰シグナル → 活性化・コラーゲン過剰産生で線維化が点火する。",
       run(){
         K.attr("repairBadge22","opacity","0");
         K.attr("deadCell22","opacity","1");
         K.show(["deadAcc22"]);
         const dp=[[308,143],[416,138],[335,172],[416,162],[362,153]];
         dp.forEach((p,i)=>K.T(()=>{
           K.$("deadAcc22").insertAdjacentHTML("beforeend",
             `<circle cx="${p[0]}" cy="${p[1]}" r="11" fill="#b8b0a0" stroke="#888" stroke-width="1" opacity="0.72"/>`);
         },i*260));
         K.T(()=>{
           K.flow(360,215,360,338,"var(--B)",{dur:1.0,loop:2});
           K.T(()=>{K.morph("hsc22Shape",GLYPH.SPINDLE);K.attr("hsc22Shape","fill","#b0432f");K.text("hsc22Cap","活性化HSC");},1200);
           K.T(()=>K.draw("col22",GLYPH.collagenAt(360,390),{len:158}),2100);
         },1500);
       }},
    ];
  }
});
