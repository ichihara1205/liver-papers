/* ============================================================
   papers/_template.js — 論文1本ぶんの雛形（このファイル自体は読み込まれない）

   使い方（詳しくは ADDING.md）：
     1. このファイルを papers/49.js のように「次の番号」でコピーする
     2. 下の "00" を全部その番号に置き換える（4か所＋SVG内の id）
     3. 中身を埋める
     4. index.html の論文一覧の先頭に <script src="papers/49.js"></script> を1行足す
     5. node scripts/check.mjs でエラーが出ないことを確認する
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"00",                       // ファイル名と同じ番号（文字列・2桁以上）
    primary:"A",                   // 主テーマ。A〜I の1文字（js/core.js の THEMES）
    title:"一文で要点がわかる日本語タイトル",
    authors:"Surname AB, Surname CD, ..., Surname EF",
    journal:"Nature",              // 略誌名
    year:2026,                     // 数値
    vol:"640(8000):100-110",       // 巻(号):ページ
    doi:"10.1038/s41586-026-00000-0",   // 重複すると check.mjs がエラーにする
    url:"https://doi.org/10.1038/s41586-026-00000-0",
    tags:["A","D"],                // 関連テーマ（A〜I の配列。primary を含めてもよい）
    approach:"in vitro（…）＋ in vivo（…）＋ 解析手法（…）",   // カードに出る1行の研究手法
    added:"2026-10-06",            // 収録日 YYYY-MM-DD（統計ビューの月別集計に使う）
    abstract_ja:"Abstract の和訳要約（パラフレーズ）。",
    background:"背景と課題。",
    achievements:["達成したこと1。**太字**も書ける。", "達成したこと2。"],   // 配列（文字列1つでも [] で囲む）
    limitations:["限界1。", "限界2。"],                                      // 配列
    connection:["自分の研究との接続1。", "接続2。"],                         // 配列
    glossary:[                                                               // 用語メモ（用語ビュー・クイズ・ツールチップに使う）
      {term:"HSC", full:"hepatic stellate cell", desc:"肝星細胞。活性化すると筋線維芽細胞になりコラーゲンを産生"}
    ],
    struct:{                       // 研究ボード（線維化点火の横断比較・ABM台帳・実験ToDo）用
      model:"in vitro",            // in vitro / in vivo / in silico / ヒト / 総説 など
      cells:["肝細胞", "HSC"],
      triggers:["PA 200 µM"],
      steatosis:"○", inflammation:"△", fibrosis:"×",   // ○ △ × — のいずれか（"△(探索)" のように後ろに補足可）
      readout:["αSMA", "COL1A1"],
      ignite:"線維化点火のカギを1文で",
      params:[{name:"ABMのルール／パラメータ名", note:"補足"}],
      todos:["自分の実験でやること"]
    },
    // 図：viewBox='0 0 640 232' の SVG 文字列。色は var(--ink) などのCSS変数を使うとダークモードでも崩れない。
    // marker の id は論文ごとに変える（f00 / m00）。
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='120' text-anchor='middle' font-size='13' fill='var(--ink)'>概念図（わかったこと）</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='120' text-anchor='middle' font-size='13' fill='var(--ink)'>Method図（実験系）</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー -----
   使える ic：mouse human liver hepatocyte macrophage stellate endothelial adipocyte chip dish omics drug silico geneko */
LP.icons("00", [{ic:"dish",cap:"培養系の説明"}, {ic:"stellate",cap:"HSCの役割"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） -----
   実験系：mouse human invitro nano drug crispr
   解析系：qpcr wb facs elisa scrna spatial rnaseq chipseq proteomics imaging insilico */
LP.methods("00", ["invitro","qpcr","wb","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit -----
   svg   ：絵（720×430）。要素に id を付け、id には論文番号を入れて他の論文とぶつからないようにする
   build ：場面（scene）の配列を返す。{color:"A〜H", t:表示ミリ秒, cap:"字幕", run(){ K.show([...]) など }}
   K の主な道具：show/hide（class="fade" の要素を出す・消す）, pulse/unpulse, flow（粒子が流れる）,
                 T（遅延実行）, attr, text, markX（⊣ 阻害）, draw（線を描く）, grow */
LP.cinema("00", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("00","var(--B)")}</defs>`
    +GLYPH.title("この論文の流れを1行で")
    +GLYPH.hep("hep00",80,120,0.85,"肝細胞")
    +GLYPH.stellate("hsc00",520,240,"肝星細胞")
    +GLYPH.tag("res00",520,360,"線維化↑","var(--B)",90,true),
  build(K){
    return [
      {color:"E",t:2400,cap:"① 最初の状態。",run(){}},
      {color:"D",t:3200,cap:"② 刺激が入り、肝細胞からシグナルが出る。",run(){ K.flow(200,200,500,240,"var(--D)",{n:3,dur:1.1}); }},
      {color:"B",t:3200,cap:"③ HSCが活性化して線維化が進む。",run(){ K.pulse("hsc00"); K.T(()=>K.show(["res00"]),1200); }},
    ];
  }
});
