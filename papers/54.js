/* ============================================================
   №54 · Nat Commun 2026 · Lee KH, Jakab M, Uvarovskii A, …, Anders S, Augustin HG
   血流(ずり応力)がLSECのセンサーになり、血管Wnt(オート/パラクリン)を介して肝の代謝zonationを維持する
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"54", primary:"E",
    title:"血流(ずり応力)がLSECのセンサーになり、血管Wntを介して肝の代謝zonationを決める——内皮Wntを二重欠損させるとゾーン構造が崩れる",
    authors:"Lee KH, Jakab M, Uvarovskii A, Papageorgiou D, Inverso D, …, Krijgsveld J, Anders S, Augustin HG",
    journal:"Nat Commun",
    year:2026,
    vol:"17(1):—",
    doi:"10.1038/s41467-026-76966-7",
    url:"https://doi.org/10.1038/s41467-026-76966-7",
    tags:["E","F","A"],
    approach:"内皮Wnt二重欠損マウス（Double-iECKO）× 対照 ＋ single-cell RNA-seq ＋ 空間プロテオミクス ＋ LSEC-肝細胞クロストークマップ ＋ in vitroでのずり応力(shear)負荷 ＋ 形態・ギャップ結合・zonationマーカー解析",
    added:"2026-10-06",
    abstract_ja:"血管内皮は全身に広がる一つの臓器のように働き、周囲の微小環境の因子を『指示シグナル(アンギオクリン因子)』に翻訳して各臓器の機能を調える。肝では、血管(LSEC)由来のWntシグナルが代謝のzonation（小葉内の位置依存的な機能分担）を制御することが古くから知られてきたが、どんな環境因子がアンギオクリン・シグナルに翻訳されるのかは不明だった。本研究は、確立された『アンギオクリンWnt→肝代謝zonation』というモデルに焦点を当て、血流が生む血行力学的ストレス（ずり応力, haemodynamic/shear stress）こそがLSECのアンギオクリン発現プロファイルを決める生体物理センサーであることを示した。single-cell RNA-seqと空間プロテオミクスを組み合わせ、内皮Wnt欠損変異マウス（Double-iECKO）と同腹対照からLSEC-肝細胞の高解像度クロストークマップを作ると、興味深いことに血管側のWnt受容体（FZD4・LRP6など）が、アンギオクリンWntリガンド（Wnt2・Wnt9b）と並んで中心静脈周囲（PC）LSECに特異的に濃集しており、空間的に協調した血管Wnt機能を強めていた。その結果、血管Wntはアンギオクリンの遺伝子シグネチャー、LSECの形態、そしてギャップ結合分子（Cx37・Cx43）の発現をオートクリンに調節していた。以上から、LSECは生体物理的な力を、乱れやすい（プロミスキュアスな）血管Wnt因子の活性化を介して指示的なアンギオクリン・シグナルへ翻訳する、動的な『デコーダー』であることが定義された。",
    background:"肝小葉は門脈周囲(PP)〜中心静脈周囲(PC)で酸素・栄養の勾配を持ち、これに沿って代謝が位置分担（zonation）される。PC側の肝細胞のglutamine synthetase(GS/Glul)やβ-catenin標的遺伝子は、PC LSECが出すアンギオクリンWnt（Wnt2・Wnt9bやR-spondin）に依存することが知られていた。しかし、何がLSECにこのアンギオクリンWntを出させるのか——どの環境因子がセンサーで翻訳されるのか——は分かっていなかった。肝類洞は門脈と肝動脈の二重供給で特徴的な血行力学的勾配を持つため、ずり応力が候補として浮上していた。",
    achievements:[
      "**血流由来のずり応力がLSECの生体物理センサー**で、アンギオクリン(Wnt)発現プロファイルを決めることを示した（in vitroのshear負荷とin vivoを突き合わせ）。",
      "scRNA-seq＋空間プロテオミクスで**LSEC-肝細胞クロストークマップ**を構築し、**内皮Wnt二重欠損(Double-iECKO)でzonationが崩れる**ことを示した。",
      "血管側の**Wnt受容体(FZD4・LRP6)が、Wntリガンド(Wnt2・Wnt9b)とともにPC LSECに濃集**しており、空間的に協調した血管Wntを形成していることを見いだした。",
      "血管Wntが**アンギオクリン遺伝子シグネチャー・LSEC形態・ギャップ結合分子(Cx37・Cx43)をオートクリンに調節**。LSECが力をアンギオクリン・シグナルに翻訳する『デコーダー』であると定義。"
    ],
    limitations:[
      "主要な因果は**マウス**で、ヒト肝での血行力学→血管Wnt→zonationの検証は今後。",
      "ずり応力の**定量（局所の実際の力）と、Wnt以外の力依存経路（Notch・YAP/TAZ・Piezoなど）との切り分け**は限定的。",
      "Double-iECKOの操作が**発生/恒常性のどちらに主に効くか**、またR-spondin/ZNRF3-RNF43軸との相互作用の詳細は未解明。",
      "脂肪化・線維化などの**疾患局面は本研究の主眼ではなく**、病態下での血管Wntデコーダーの挙動は別途検討が必要。"
    ],
    connection:[
      "**zonationを物理で作れる可能性**。自分の肝オープンオルガノイドは灌流・酸素勾配を設計できるので、『血流(ずり応力)→LSECのWnt→肝細胞GS/zonation』を物理入力として再現し、PC様機能を灌流で誘導できるかを試せる。",
      "**4細胞共培養の設計指針**：LSECにshearをかけるとアンギオクリンWnt(Wnt2/Wnt9b)とギャップ結合(Cx37/Cx43)が変わる、という予測を使い、灌流条件で肝細胞のゾーン機能(アンモニア処理/薬物代謝)が整うかを評価できる。",
      "**ABM実装**：『局所ずり応力→LSEC Wnt発現→(パラクリン)肝細胞のβ-catenin標的/GS』を空間ルールに。#53(c-Kit/FGF1でPC脂肪化を抑制)と組み合わせ、PCの保護/感受性を物理+アンギオクリンで表現できる。",
      "**既収録との接続**：#50(FBXW7/NOTCH1でLSEC→HSC)・#53(c-Kit/RXRG/FGF1でPC脂肪化抑制)・#09(HSC-RSPO3のzonation)と同じLSEC-zonation軸。本論文は『力』という上流を足し、#56(EasySCPの空間プロテオミクス)と手法的にも響き合う。"
    ],
    glossary:[
      {term:"angiocrine",full:"angiocrine signalling",desc:"内皮が周囲因子を『指示シグナル』に翻訳して出す分泌・接触シグナル。肝ではWntが代表"},
      {term:"shear stress",full:"haemodynamic shear stress",desc:"血流が血管壁に与えるずり応力。LSECがこれをセンスしてアンギオクリンWntを調節する"},
      {term:"Wnt2",full:"Wnt family member 2",desc:"PC LSECが出すアンギオクリンWntリガンド。肝細胞のβ-catenin標的/GSを支える"},
      {term:"Wnt9b",full:"Wnt family member 9b",desc:"PC LSEC由来のWntリガンド。Wnt2と並び肝zonationを維持する"},
      {term:"FZD4",full:"frizzled class receptor 4",desc:"Wnt受容体。PC LSECに濃集し血管側で自律的にWntを受ける"},
      {term:"LRP6",full:"LDL receptor related protein 6",desc:"Wntの共受容体。FZDと組んでβ-cateninシグナルを起動する"},
      {term:"Double-iECKO",full:"double inducible endothelial-cell-specific knockout",desc:"内皮Wnt(リガンド/受容体)を二重に欠損させる誘導型KO。zonationが崩れる"},
      {term:"Cx37",full:"connexin 37 (GJA4)",desc:"血管Wntがオートクリンに制御するギャップ結合分子。LSEC間連絡を担う"},
      {term:"Cx43",full:"connexin 43 (GJA1)",desc:"ギャップ結合分子。血管Wntで調節され細胞間の電気/代謝的連絡に関わる"},
      {term:"GS",full:"glutamine synthetase (Glul)",desc:"PC肝細胞のzonationマーカー。アンギオクリンWntに依存して発現する"}
    ],
    struct:{
      model:"in vivo",
      cells:["LSEC","肝細胞"],
      triggers:["血流由来ずり応力(shear)","PCのアンギオクリンWnt","(破綻)内皮Wnt二重欠損"],
      steatosis:"—", inflammation:"—", fibrosis:"—",
      readout:["scRNA-seq/空間プロテオミクス","LSEC-肝細胞クロストークマップ","GS/β-catenin標的のゾーン分布","Cx37/Cx43・LSEC形態"],
      ignite:"（恒常性モデル）血流ずり応力→LSECの血管Wnt→肝細胞のGS/zonation。内皮Wnt欠損でゾーン崩壊。病態点火ではなく正常zonationの成立機構。",
      params:[
        {name:"局所ずり応力 → LSEC Wnt(Wnt2/Wnt9b)発現",note:"力→アンギオクリンの翻訳ルール"},
        {name:"LSEC Wnt → (パラクリン)肝細胞β-catenin標的/GS",note:"PC機能のzonation維持"}
      ],
      todos:[
        "灌流/ずり応力をLSECにかけてアンギオクリンWnt・Cx37/Cx43が動くか検証",
        "灌流条件で肝細胞のゾーン機能(アンモニア処理/薬物代謝)が整うか評価",
        "ABMに『ずり応力→Wnt→GS』の空間ルールを実装(#53と統合)"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f54' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker><marker id='f54b' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--B)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>血流(ずり応力)→LSECの血管Wnt→肝のzonation、内皮Wnt欠損で崩壊</text><rect x='16' y='40' width='124' height='60' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='78' y='60' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>血流 (shear)</text><path d='M30,78 h96 M30,86 h96 M30,94 h96' stroke='var(--E)' stroke-width='1.2' marker-end='url(#f54)'/><rect x='170' y='40' width='150' height='150' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.3' stroke-dasharray='5 3'/><text x='245' y='58' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>PC LSEC（デコーダー）</text><rect x='182' y='70' width='60' height='28' rx='5' fill='var(--paper)' stroke='var(--E)'/><text x='212' y='88' text-anchor='middle' font-size='9' fill='var(--E)'>Wnt2/9b</text><rect x='250' y='70' width='60' height='28' rx='5' fill='var(--paper)' stroke='var(--accent)'/><text x='280' y='88' text-anchor='middle' font-size='9' fill='var(--accent)'>FZD4/LRP6</text><text x='245' y='120' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>アンギオクリンWnt</text><text x='245' y='134' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>（オート/パラクリン）</text><rect x='182' y='148' width='128' height='32' rx='5' fill='var(--paper)' stroke='var(--accent)'/><text x='246' y='162' text-anchor='middle' font-size='8.5' fill='var(--accent)'>ギャップ結合</text><text x='246' y='174' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>Cx37 / Cx43</text><path d='M140,80 L168,80' stroke='var(--E)' stroke-width='1.4' marker-end='url(#f54)'/><path d='M320,110 L356,110' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f54)'/><rect x='360' y='40' width='120' height='70' rx='8' fill='var(--paper)' stroke='var(--E)' stroke-width='1.5'/><text x='420' y='62' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>PC 肝細胞</text><text x='420' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>β-catenin標的</text><text x='420' y='95' text-anchor='middle' font-size='9.5' fill='var(--E)'>GS (Glul) ↑</text><rect x='500' y='40' width='124' height='70' rx='8' fill='var(--paper)' stroke='var(--E)' stroke-width='1.3'/><text x='562' y='62' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>正常zonation</text><text x='562' y='82' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>PP〜PCの代謝分担</text><path d='M480,75 L498,75' stroke='var(--accent)' stroke-width='1.4' marker-end='url(#f54)'/><rect x='360' y='140' width='264' height='52' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='492' y='160' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>内皮Wnt二重欠損 (Double-iECKO)</text><text x='492' y='178' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→ GS/zonation が崩れる</text><path d='M280,180 C330,180 360,170 374,166' fill='none' stroke='var(--B)' stroke-width='1.3' stroke-dasharray='4 3' marker-end='url(#f54b)'/></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m54' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：内皮Wnt二重欠損 × scRNA-seq＋空間プロテオミクス → shear検証</text><rect x='14' y='42' width='156' height='52' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.4'/><text x='92' y='62' text-anchor='middle' font-size='9.5' fill='var(--B)' font-weight='600'>Double-iECKO</text><text x='92' y='78' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>内皮Wnt二重欠損</text><text x='92' y='90' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>vs 同腹対照</text><path d='M170,68 L206,68' stroke='var(--accent)' marker-end='url(#m54)'/><rect x='208' y='40' width='164' height='26' rx='6' fill='var(--paper-2)' stroke='var(--G)'/><text x='290' y='57' text-anchor='middle' font-size='9' fill='var(--G)' font-weight='600'>single-cell RNA-seq</text><rect x='208' y='72' width='164' height='26' rx='6' fill='var(--paper-2)' stroke='var(--G)'/><text x='290' y='89' text-anchor='middle' font-size='9' fill='var(--G)' font-weight='600'>空間プロテオミクス</text><path d='M372,53 C388,53 392,66 404,70' fill='none' stroke='var(--accent)' marker-end='url(#m54)'/><path d='M372,85 C388,85 392,74 404,72' fill='none' stroke='var(--accent)' marker-end='url(#m54)'/><rect x='406' y='44' width='130' height='52' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='471' y='64' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>クロストークマップ</text><text x='471' y='80' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>LSEC-肝細胞</text><text x='471' y='92' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>Wnt/受容体の局在</text><rect x='14' y='120' width='156' height='54' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='92' y='140' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>in vitro shear負荷</text><text x='92' y='156' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>LSECにずり応力</text><text x='92' y='168' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>→Wnt発現を検証</text><path d='M170,147 L206,147' stroke='var(--accent)' marker-end='url(#m54)'/><rect x='208' y='120' width='164' height='54' rx='7' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.4'/><text x='290' y='140' text-anchor='middle' font-size='9.5' fill='var(--accent)' font-weight='600'>形態・ギャップ結合</text><text x='290' y='156' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>Cx37/Cx43</text><text x='290' y='168' text-anchor='middle' font-size='8.5' fill='var(--ink-soft)'>アンギオクリン遺伝子</text><path d='M372,147 L404,147' stroke='var(--accent)' marker-end='url(#m54)'/><rect x='406' y='112' width='218' height='70' rx='8' fill='var(--paper)' stroke='var(--E)' stroke-width='1.5'/><text x='515' y='136' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>結論：LSEC=力のデコーダー</text><text x='515' y='155' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>ずり応力→血管Wnt→zonation</text><text x='515' y='170' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>欠損でGS/ゾーン崩壊</text><path d='M536,70 C560,70 556,100 515,110' fill='none' stroke='var(--accent)' marker-end='url(#m54)'/></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("54", [{ic:"endothelial",cap:"PC LSEC：ずり応力を血管Wntに翻訳するデコーダー"}, {ic:"hepatocyte",cap:"肝細胞：β-catenin標的/GSがWnt依存"}, {ic:"liver",cap:"zonation：PP〜PCの代謝分担を維持"}, {ic:"mouse",cap:"内皮Wnt二重欠損(Double-iECKO)でゾーン崩壊"}, {ic:"omics",cap:"scRNA-seq＋空間プロテオミクスでクロストークマップ"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 54 Lee/Augustin Nat Commun 2026: 内皮Wnt二重KO+scRNA-seq+空間プロテオミクス+in vitro shear+IF/形態 */
LP.methods("54", ["mouse","crispr","scrna","spatial","proteomics","invitro","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №54 ずり応力→PC LSECの血管Wnt→肝細胞GS/zonation、内皮Wnt欠損で崩壊 ===== */
LP.cinema("54", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("54",'var(--E)')}${GLYPH.arrow("54b",'var(--B)')}</defs>`
    +GLYPH.title("血流(ずり応力)がLSECの血管Wntを駆動し、肝細胞のGS/zonationを維持。内皮Wnt欠損で崩れる")
    +`<g id="flow54" class="fade"><path d="M60,110 h120" stroke="var(--E)" stroke-width="2" marker-end="url(#ar54)"/><path d="M60,130 h120" stroke="var(--E)" stroke-width="2" marker-end="url(#ar54)"/><path d="M60,150 h120" stroke="var(--E)" stroke-width="2" marker-end="url(#ar54)"/></g>`
    +`<text x="60" y="100" font-size="10.5" fill="var(--E)">血流（ずり応力 shear）</text>`
    +`<rect x="200" y="90" width="230" height="130" rx="14" fill="none" stroke="var(--E)" stroke-width="2" stroke-dasharray="6 4"/>`
    +`<text x="220" y="112" font-size="10.5" fill="var(--E)">PC LSEC（デコーダー）</text>`
    +GLYPH.receptor("fzd54",260,170,"FZD4/LRP6","var(--accent)")
    +GLYPH.gene("wnt54",370,150,"Wnt2/9b","var(--E)",true)
    +GLYPH.tag("cx54",310,205,"Cx37/Cx43","var(--accent)",120,true)
    +`<g id="wntOut54" class="fade"></g>`
    +GLYPH.hep("hep54",560,150,1,"PC肝細胞")
    +GLYPH.tf("gs54",560,150,"GS↑","var(--E)",true)
    +GLYPH.badge("zone54",640,150,"正常","zonation","var(--E)")
    +GLYPH.badge("ko54",420,320,"Double-iECKO","GS/ゾーン崩壊","var(--B)"),
  build(K){
    return [
      {color:"E",t:2800,cap:"① 肝類洞では血流がLSECにずり応力をかける。LSECはこの物理的な力をセンスする。",run(){
        K.show(["flow54"]);
        K.T(()=>{K.flow(70,130,190,130,"var(--E)",{n:3,dur:1.0,loop:3});},400);
      }},
      {color:"E",t:4000,cap:"② ずり応力に応じてPC LSECが血管Wnt（Wnt2/Wnt9b）を発現。受容体FZD4/LRP6を自ら持ちオートクリンにも働く。",run(){
        K.pulse("fzd54");
        K.T(()=>{K.show(["wnt54"]);K.pulse("wnt54");},900);
        K.T(()=>{K.show(["cx54"]);},1900);
      }},
      {color:"E",t:4000,cap:"③ 分泌されたWntが肝細胞のβ-cateninを動かし、PCマーカーGS(Glul)を立ち上げる——正常なzonationが維持される。",run(){
        K.show(["wntOut54"]);const g=K.$("wntOut54");
        [[430,160],[470,175],[500,150]].forEach((p,i)=>K.T(()=>{g.insertAdjacentHTML("beforeend",GLYPH.mol("w"+i,p[0],p[1],i===1?"Wnt":"","var(--E)"));K.flow(p[0],p[1],555,150,"var(--E)",{n:1,dur:1.1,loop:2});},i*250));
        K.T(()=>{K.show(["gs54"]);K.pulse("gs54");},1700);
        K.T(()=>{K.show(["zone54"]);},2600);
      }},
      {color:"B",t:3400,cap:"④ 内皮Wntを二重欠損(Double-iECKO)させると翻訳が止まり、GSが消えてzonationが崩れる。",run(){
        K.T(()=>{K.attr("wnt54","opacity","0.2");K.markX(370,150,"var(--B)");},400);
        K.T(()=>{K.attr("gs54","opacity","0.2");K.attr("zone54","opacity","0.25");},1400);
        K.T(()=>{K.show(["ko54"]);K.pulse("ko54");},2200);
      }},
    ];
  }
});
