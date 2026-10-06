/* ============================================================
   №08 · Nature Medicine 2025 · Brennan PN, MacMillan M, Manship T, Moroni F, Glover A, Troland D, Ma…
   自家マクロファージ療法フェーズ2 RCTが肝関連死ゼロと探索的抗炎症シグナルを示す
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"08",
    added:"2026-05-30",
    title:"自家マクロファージ療法フェーズ2 RCTが肝関連死ゼロと探索的抗炎症シグナルを示す",
    authors:"Brennan PN, MacMillan M, Manship T, Moroni F, Glover A, Troland D, MacPherson I, Graham C, Aird R, Semple SIK, Morris DM, Fraser AR, Pass C, McGowan NWA, Turner ML, Manson L, Lachlan NJ, Dillon JF, Kilpatrick AM, Campbell JDM, Fallowfield JA, Forbes SJ",
    journal:"Nature Medicine",
    year:2025,
    vol:"31(3): 979–987",
    doi:"10.1038/s41591-024-03406-8",
    url:"https://www.nature.com/articles/s41591-024-03406-8",
    primary:"H",
    tags:["H","C"],
    approach:"ヒトRCT（フェーズ2、n=51）— 自家単球由来マクロファージ輸注 vs 標準治療",
    struct:{
      model:"clinical trial", cells:["monocyte/macrophage (autologous)"], triggers:["ex vivo M2 induction","IV infusion"],
      steatosis:"—", inflammation:"△(探索)", fibrosis:"△(探索)", readout:["MELD score","serious adverse events","serum cytokine profile"],
      ignite:"n/a（治療介入研究）",
      params:[{name:"マクロファージ投与 → 抗炎症サイトカインシフト",note:"血清サイトカインプロファイルで確認"},{name:"治療群 vs 対照群 肝関連死",note:"0 vs 2（治療効果の探索的シグナル）"}],
      todos:["M1/M2分極比コントロールをKC共培養に実装","iHSC再活性化ループ抑制シナリオをABMでシミュレーション","#02(KC消耗)→AMT(補填)の統合モデルを検討"]
    },
    figure:"<svg viewBox='0 0 640 280' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar08' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--ink-soft)'/></marker><marker id='ar08h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker><marker id='ar08c' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--C)'/></marker></defs><text x='12' y='16' font-size='11' fill='var(--ink-soft)'>自家マクロファージ療法（AMT）: 単球→M2→輸注→抗炎症・線維化退縮・肝再生</text><rect x='8' y='28' width='110' height='46' rx='7' fill='var(--paper-2)' stroke='var(--ink-soft)' stroke-width='1.3'/><text x='63' y='48' text-anchor='middle' font-size='12'>単球（自己）</text><text x='63' y='65' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>骨髄/末梢血</text><rect x='168' y='28' width='122' height='46' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.8'/><text x='229' y='48' text-anchor='middle' font-size='12' fill='var(--H)'>ex vivo 分化</text><text x='229' y='65' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>M2-like MΦ</text><line x1='118' y1='51' x2='166' y2='51' stroke='var(--ink-soft)' marker-end='url(#ar08)'/><rect x='344' y='28' width='120' height='46' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.8'/><text x='404' y='48' text-anchor='middle' font-size='12' fill='var(--H)'>静脈内輸注</text><text x='404' y='65' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>肝へ移行</text><line x1='290' y1='51' x2='342' y2='51' stroke='var(--H)' marker-end='url(#ar08h)'/><rect x='520' y='28' width='110' height='46' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='2'/><text x='575' y='48' text-anchor='middle' font-size='12' fill='var(--H)'>肝へ定着</text><text x='575' y='65' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>治療MΦ</text><line x1='464' y1='51' x2='518' y2='51' stroke='var(--H)' marker-end='url(#ar08h)'/><path d='M575,74 L575,104' stroke='var(--H)' marker-end='url(#ar08h)'/><rect x='468' y='106' width='222' height='42' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.6'/><text x='579' y='123' text-anchor='middle' font-size='11.5' fill='var(--C)'>抗炎症サイトカイン ↑</text><text x='579' y='140' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>探索的シグナル確認</text><rect x='8' y='160' width='272' height='50' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='144' y='181' text-anchor='middle' font-size='11.5'>線維化退縮</text><text x='144' y='198' text-anchor='middle' font-size='10' fill='var(--B)'>コラーゲン分解 ↑ ／ ECM 軟化</text><rect x='8' y='222' width='272' height='50' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='144' y='243' text-anchor='middle' font-size='11.5'>肝再生促進</text><text x='144' y='260' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>肝細胞再生 / MELD 安定化</text><path d='M579,148 C579,168 460,168 420,168 C360,168 310,185 280,185' fill='none' stroke='var(--C)' marker-end='url(#ar08c)'/><path d='M420,168 C360,168 310,247 280,247' fill='none' stroke='var(--C)' marker-end='url(#ar08c)'/><rect x='354' y='168' width='282' height='60' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='1.5' stroke-dasharray='5 3'/><text x='495' y='192' text-anchor='middle' font-size='12' fill='var(--H)'>治験結果（MATCH trial）</text><text x='495' y='210' text-anchor='middle' font-size='11' fill='var(--ink)'>治療群 肝関連死 0 件</text><text x='495' y='226' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>対照群 3死亡（うち2件肝関連）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 250' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m08' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='m08h' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--H)'/></marker></defs><text x='12' y='16' font-size='12' fill='var(--ink-soft)'>Phase 2 RCT（MATCH trial）— 代償性肝硬変 MELD 10–17, n=51</text><rect x='8' y='28' width='160' height='46' rx='7' fill='var(--paper)' stroke='var(--ink-soft)' stroke-width='1.5'/><text x='88' y='49' text-anchor='middle' font-size='12'>肝硬変患者 n=51</text><text x='88' y='66' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>代償性・MELD 10–17</text><line x1='168' y1='51' x2='212' y2='51' stroke='var(--accent)' marker-end='url(#m08)'/><rect x='214' y='28' width='60' height='46' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='244' y='53' text-anchor='middle' font-size='12'>RCT</text><path d='M274,51 L338,30' stroke='var(--H)' marker-end='url(#m08h)'/><path d='M274,51 L338,73' stroke='var(--accent)' marker-end='url(#m08)'/><rect x='340' y='8' width='200' height='44' rx='7' fill='var(--paper-2)' stroke='var(--H)' stroke-width='2'/><text x='440' y='28' text-anchor='middle' font-size='12' fill='var(--H)'>治療群 n=27</text><text x='440' y='44' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>単球採取→M2分化→輸注</text><rect x='340' y='60' width='200' height='44' rx='7' fill='var(--paper-2)' stroke='var(--ink-soft)' stroke-width='1.5'/><text x='440' y='79' text-anchor='middle' font-size='12'>対照群 n=24</text><text x='440' y='95' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>標準治療</text><rect x='8' y='124' width='610' height='44' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.3'/><text x='50' y='141' font-size='11' fill='var(--accent)'>day 0</text><text x='178' y='141' text-anchor='middle' font-size='11' fill='var(--ink)'>day 90 — 主要EP</text><text x='178' y='157' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>ΔMELD（P=0.06 未達）</text><text x='380' y='141' text-anchor='middle' font-size='11' fill='var(--ink)'>day 180</text><text x='560' y='141' text-anchor='middle' font-size='11' fill='var(--ink)'>day 360</text><text x='560' y='157' text-anchor='middle' font-size='10' fill='var(--H)'>肝関連死 0 vs 2</text><line x1='50' y1='124' x2='50' y2='168' stroke='var(--line)'/><line x1='178' y1='124' x2='178' y2='168' stroke='var(--line)'/><line x1='380' y1='124' x2='380' y2='168' stroke='var(--line)'/><line x1='560' y1='124' x2='560' y2='168' stroke='var(--line)'/><rect x='8' y='180' width='290' height='58' rx='7' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='153' y='200' text-anchor='middle' font-size='11.5'>安全性プロファイル確立</text><text x='153' y='217' text-anchor='middle' font-size='10.5' fill='var(--H)'>治療群 重篤肝関連AE 0件</text><text x='153' y='232' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>対照群 5件 SAE・3死亡</text><rect x='318' y='180' width='314' height='58' rx='7' fill='var(--paper)' stroke='var(--C)' stroke-width='1.5'/><text x='475' y='200' text-anchor='middle' font-size='11.5'>探索的シグナル</text><text x='475' y='217' text-anchor='middle' font-size='10.5' fill='var(--C)'>抗炎症サイトカインプロファイル変化</text><text x='475' y='232' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>→ 次フェーズへの布石</text></svg>",
    abstract_ja:"本研究は、肝硬変を対象とした第2相オープンラベルRCT（MATCHトライアル、n=51）で、自己単球由来マクロファージ療法（AMT、n=27）と標準治療（n=24）を比較した。主要エンドポイントである90日MELD変化量の群間差は−0.87（P=0.06）で、統計的有意には届かなかった。しかし360日の追跡では、治療群に肝関連の重篤有害事象も死亡もゼロであった（対照群は3死亡、うち2件が肝関連）。さらに探索的解析では、マクロファージ輸注後に抗炎症サイトカインプロファイルの改善が確認された。したがってプロトコルを最適化すれば、次フェーズでより明確な有効性評価が期待される。",
    background:"肝硬変の根本的治療は今なお肝移植のみで、有効な薬物療法や細胞療法は確立していない。前臨床では骨髄由来マクロファージの輸注が炎症の解消・線維化の退縮・肝再生を促すことが示されていたものの、ヒトでの安全性と有効性の検証は不十分だった。加えて、MELDは短期では変動しにくいため、これを主要エンドポイントに据えた点も試験設計上の難点であった。",
    achievements:[
      "世界初の自家マクロファージ療法フェーズ2 RCT（MATCH trial）を完遂。",
      "安全性の確立：治療群で肝関連重篤有害事象・死亡ゼロ（対照群は3死亡・2件肝関連）。",
      "探索的解析で抗炎症サイトカインプロファイルの改善を確認（免疫学的作用機序の実在を示唆）。",
      "主要エンドポイント（ΔMELD at day 90; P=0.06）は惜しくも未達だが次フェーズの基盤を構築。"
    ],
    limitations:[
      "主要エンドポイント未達（P=0.06）。サンプルサイズ小（n=51）で検出力不足の可能性。",
      "非盲検デザインによるバイアスリスク。",
      "追跡期間360日では肝硬変の長期転帰（代償→非代償化）を十分に捉えられない。",
      "最適な細胞数・投与回数・投与経路・対象患者選択基準は未確立。"
    ],
    connection:[
      "KCを4細胞共培養に入れる論拠の臨床的補完：「マクロファージを肝へ入れると抗炎症・線維化解消シグナルが得られる」ことをヒトRCTで実証。自系KCは炎症ドライバーにも治療的アクターにもなれる双方向性を論じる根拠として使える。",
      "M2偏向KCの活用：LPS（M1誘導）とは逆にIL-4/IL-13（M2誘導）でKCを極性化させれば線維化退縮方向を自系で再現できる。M1/M2比コントロール実験設計に直結。",
      "ABM入力：「治療的MΦ輸注 → 炎症解消 → iHSC再活性化ループ抑制 → 線維化退縮」シナリオを#06（iHSC再活性化ループ）と連結してマクロファージ治療の定量予測シミュレーションを設計できる。",
      "既収録との接続：#02（KC-NCF1→フェロトーシス→KC消耗）の『KCが失われる病態』に対し、本論文は『外からマクロファージを投入する治療』という対となる戦略を提示。#04（M1-iMAC→TNFα→悪化）と合わせ『M1が悪化させ・M2が治す』の二面が揃い、KCのM1/M2バランスが系の運命を決めるコンセプトが完結する。"
    ],
    glossary:[
      {term:"MELD",full:"Model for End-Stage Liver Disease",desc:"肝疾患重症度スコア（3〜40点）。肝移植優先度・予後予測に使用"},
      {term:"AMT",full:"autologous macrophage therapy",desc:"患者自己の単球を体外でマクロファージへ分化・拡大後に輸注する細胞療法"},
      {term:"M2 macrophage",full:"M2-polarized macrophage",desc:"抗炎症・組織修復・線維化解消に働くマクロファージ表現型（IL-10↑）"},
      {term:"MATCH trial",full:"Macrophage Therapy for Liver Cirrhosis (phase 2 RCT)",desc:"肝硬変を対象とした自家マクロファージ療法の第2相RCT（欧州多施設共同）"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("08", [{ic:"human",cap:"肝硬変患者51名"},{ic:"macrophage",cap:"自家MΦ輸注(AMT)"},{ic:"liver",cap:"線維化退縮・肝再生"},{ic:"drug",cap:"細胞療法 Phase 2 RCT"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 08 Brennan Nat Med 2025: ヒトRCT+FACS(MΦ表現型)+ELISA(肝機能/サイトカイン)+生検組織染色 */
LP.methods("08", ["human","facs","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №08 自家マクロファージ療法 RCT（細胞そのものが移動） ===== */
LP.cinema("08", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}</defs>`+GLYPH.title("自己単球→ex vivoでM2へ分化→輸注→M2が肝へ到達して抗炎症・退縮")
    +`<rect x="360" y="80" width="330" height="280" rx="16" fill="#fff" stroke="var(--B)" stroke-width="1.6" stroke-dasharray="6 4"/><text x="525" y="104" text-anchor="middle" font-size="11" fill="var(--B)">線維化肝（肝硬変）</text>`
    +GLYPH.stellate("hsc",460,170,"活性化HSC")+GLYPH.layer("collagen")
    +GLYPH.monocyte("mono",90,130,"自己単球")
    +`<text id="exvivo" class="fade" x="90" y="210" text-anchor="middle" font-size="9.5" fill="var(--H)">ex vivo分化</text>`
    +`<g id="m2" class="fade">`+GLYPH.mac("m2c",90,250,"M2 MΦ","#b0487f")+`</g>`
    +GLYPH.badge("good",600,300,"肝関連死","0 ✓","var(--H)"),
  build(K){
    return [
      {color:"B",t:2600,cap:"代償性肝硬変（MELD 10–17）。HSCが活性化しコラーゲンが沈着した線維化肝。",run(){
        K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");
        K.draw("collagen",GLYPH.collagenAt(540,250),{len:170,gap:0.25});
      }},
      {color:"H",t:3000,cap:"① 患者自身の単球を採取し、ex vivoでM2-likeマクロファージへ分化させる。",run(){
        K.show(["exvivo"]); K.attr("mono","opacity","0.3");
        K.T(()=>K.show(["m2"]),800);
      }},
      {color:"H",t:3000,cap:"② M2マクロファージを静脈内に輸注すると、その細胞自体が肝へ到達して定着する。",run(){
        K.move("m2",90,250,370,0,1.6);
      }},
      {color:"C",t:3200,cap:"③ 定着したM2が抗炎症サイトカインを放出し、HSCが沈静化して線維化が退縮。治療群は肝関連死ゼロ（探索的シグナル）。",run(){
        K.flow(460,250,460,180,"var(--C)",{loop:2});
        K.T(()=>{K.attr("collagen","opacity","0.25");K.morph("hscShape",GLYPH.QUIET);K.attr("hscShape","fill","#d6a08e");K.text("hscCap","沈静化");K.show(["good"]);},900);
      }},
    ];
  }
});
