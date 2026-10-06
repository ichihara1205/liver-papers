/* ============================================================
   №49 · Sci Adv 2026 · Kim DH, Lee Y, Kim MJ, Lee AC, Kwon S, Kang KS
   iPSC由来の血管化肝オルガノイド——脱細胞肝スキャフォールド＋抗CD31アプタマーで血管を通し、IGF2-IGF1R-AKT/MAPKで肝と血管を同時に成熟させる
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"49", primary:"A",
    title:"iPSC由来の血管化肝オルガノイド——脱細胞スキャフォールド＋抗CD31アプタマーで血管を通し、IGF2軸で肝と血管を同時に成熟させる",
    authors:"Kim DH, Lee Y, Kim MJ, Lee AC, Kwon S, Kang KS",
    journal:"Sci Adv",
    year:2026,
    vol:"12(32):eaea3814",
    doi:"10.1126/sciadv.aea3814",
    url:"https://doi.org/10.1126/sciadv.aea3814",
    tags:["A","E","H"],
    approach:"ラット肝の脱細胞ECMスキャフォールドに抗CD31アプタマー（VCA）を担持 ＋ 単一ヒトiPSC株から肝芽・内皮前駆を分化・播種して血管化肝オルガノイドを構築 ＋ PHLI-seq空間トランスクリプトーム ＋ IGF2のノックダウン/外因性添加 ＋ TAA誘発慢性肝不全マウスへの移植",
    added:"2026-10-06",
    abstract_ja:"末期肝不全に対する移植臓器の不足を背景に、iPSCから作る移植可能な肝組織が求められているが、機能する血管をどう通すかが最大の壁だった。本研究は、ラット肝を脱細胞して天然の細胞外マトリックス（ECM）構造だけを残したスキャフォールドの血管内腔に、内皮に特異的に結合する抗CD31アプタマー（血管コーティング剤、VCA）を担持し、そこへ単一のヒトiPSC株から分化させた肝芽細胞と内皮前駆細胞を播種して血管化肝オルガノイドを作った。VCAによって内皮が血管内腔に整列し、実質と血管が空間的に分かれた構造ができ、アルブミン分泌や尿素産生、バリア機能が高まった。レーザーで部位を選んで切り出すPHLI-seqという空間トランスクリプトームで実質と血管をそれぞれ解析すると、IGF2-IGF1R-AKT/MAPKという軸が両方の区画の成熟を同時に調整していることが分かった。実際、IGF2をノックダウンすると肝細胞も内皮も生存・成熟が損なわれ、逆に外因性IGF2をVCAと併用すると構造と機能がさらに整った。この成熟させたオルガノイドをチオアセトアミド（TAA）で慢性肝不全にしたマウスに移植すると、ヒト肝細胞が血管周囲に生着し、肝幹細胞マーカーLGR5陽性細胞が血管周囲に現れて線維化が減り、肝機能マーカーが正常範囲へ戻った。ただし得られた肝細胞は門脈側（zone 1）寄りの性質に偏り、zonationは十分に再現されなかった。",
    background:"肝移植は末期肝不全の最も有効な治療だが、ドナー不足が深刻で、iPSC由来の移植可能な肝組織が代替策として期待されている。脱細胞ECMスキャフォールドは天然の3D構造と細胞結合モチーフを残すため足場として有望だが、血管内腔に内皮の裏打ちがないまま移植すると血栓や超急性拒絶を招くため、効率的な再内皮化が鍵となる。加えて、大きく複雑な組織では細胞の機能がその空間的な位置に強く依存するため、組織全体を平均するバルク解析では各区画の役割が見えず、空間分解能をもった解析が必要とされていた。",
    achievements:[
      "ラット肝の脱細胞ECMスキャフォールドの血管内腔に**抗CD31アプタマー（VCA）**を担持し、単一iPSC株由来の肝芽・内皮前駆から**実質と血管が空間的に分かれた血管化肝オルガノイド**を構築した。",
      "VCA群では内皮がCD31/CD144陽性で血管内腔に整列し、連続した密なバリアを形成、**アルブミン・尿素分泌、グリコーゲン合成、VEGF・NO産生**が高まりアポトーシスが減った。",
      "**PHLI-seq空間トランスクリプトーム**で実質と血管をそれぞれ解析し、**IGF2-IGF1R-AKT/MAPK軸**が両区画の成熟を協調的に調整する中心ハブであることを同定した。",
      "**外因性IGF2とVCAの併用**が構造・機能を相乗的に高め、TAA誘発慢性肝不全マウスへの移植で**ヒト肝細胞の血管周囲生着・LGR5⁺幹細胞の動員・線維化の軽減・肝機能の正常化**を達成した。"
    ],
    limitations:[
      "スキャフォールドが**ラット由来（異種）**で、α-GALなど免疫原性エピトープは除去を確認したものの、臨床応用には免疫学的安全性の検討が残る。",
      "得られた肝細胞は**門脈側（zone 1）寄りの性質に偏り**、CYP2E1など中心静脈側マーカーが乏しくzonationが十分に再現されない。著者はzonationを支配するのはLSECであり、本系の内皮が動脈型に寄ったことを一因に挙げている。",
      "**クッパー細胞・HSC・胆管上皮**といった非実質細胞が乏しく、天然肝の複雑な構築を完全には再現していない。",
      "3DオルガノイドでのIGF2ノックダウンは生存低下で実行困難で、機能は主に2D細胞と外因性IGF2添加（gain-of-function）で示されている。IGF2添加の最適濃度・タイミングは未決定。"
    ],
    connection:[
      "**血管化と内皮-実質クロストークの実装例**。自分の肝オープンオルガノイドはLSECを含む4細胞共培養で、本論文は内皮が実質の成熟をアンジオクライン（angiocrine）/パラクリンに支える関係を空間解析で示しており、LSECを「ただ入れる」から「どう配置して何を分泌させるか」へ設計を進める根拠になる。",
      "**zonationの限界が自系の強みに対応**：本論文は動脈型内皮では中心静脈側が出ずzonationが崩れ、zonationを支配するのはLSECだと指摘する。自系の酸素透過膜は酸素勾配を物理的に作れるため、LSEC＋酸素勾配でzone 3側を立ち上げられるかという検証テーマが立つ。",
      "**成熟のキューとしてのIGF2**：IGF2-IGF1R-AKT/MAPKは肝細胞・内皮の生存と成熟の共通ハブ。自系でアルブミン分泌やCYP活性が頭打ちのとき、IGF2添加を成熟促進キューとして試せる。ABMでは『IGF2濃度→細胞生存・成熟確率』のルール化が可能。",
      "**既収録との接続**：#19（hiPSC 3細胞の血管化）・#12（灌流血管統合MPS）と同じ血管化の系譜で、本論文は脱細胞ECM＋アプタマー＋空間解析という別アプローチ。#25（多ゾーンオルガノイド）・#53（LSEC zonationとRA-FGF1）と合わせると、zonation再現には内皮の種類と空間配置が要るという共通示唆が浮かぶ。"
    ],
    glossary:[
      {term:"dECM",full:"decellularized extracellular matrix",desc:"臓器を脱細胞して天然のECM構造だけ残した足場。細胞結合モチーフを保つ"},
      {term:"VCA",full:"vascular coating agent (anti-CD31 aptamer)",desc:"内皮CD31に結合する短鎖オリゴ。血管内腔に内皮を整列・接着させる"},
      {term:"IGF2",full:"insulin-like growth factor 2",desc:"IGF1Rに結合しAKT/MAPKを活性化。肝・内皮の生存と成熟を協調的に駆動"},
      {term:"IGF1R",full:"insulin-like growth factor 1 receptor",desc:"IGF2/IGF1の受容体型チロシンキナーゼ。下流でAKT・ERKを活性化"},
      {term:"PHLI-seq",full:"phenotype-based high-throughput laser-aided isolation sequencing",desc:"組織切片から表現型と位置で小領域を切り出し全長RNAを読む空間トランスクリプトーム"},
      {term:"TAA",full:"thioacetamide",desc:"慢性肝障害・線維化を誘発する肝毒物。慢性肝不全モデルの作製に用いる"},
      {term:"LGR5",full:"leucine-rich repeat-containing G protein–coupled receptor 5",desc:"肝幹/前駆細胞マーカー。再生時に血管周囲ニッチで動員される"},
      {term:"hepatoblast",full:"hepatoblast",desc:"肝細胞・胆管上皮の二分化能をもつ増殖性の肝前駆細胞"}
    ],
    struct:{
      model:"in vitro",
      cells:["iPSC由来肝芽/肝細胞","iPSC由来内皮(EC)","(少数)胆管上皮/LSEC様/HSC様"],
      triggers:["抗CD31アプタマー(VCA)","外因性IGF2","共分化培地"],
      steatosis:"—", inflammation:"—", fibrosis:"—",
      readout:["アルブミン/尿素分泌","CD31/CD144血管整列","IGF1R/AKT/MAPKリン酸化","移植後の生着・線維化"],
      ignite:"線維化は対象外。むしろ移植で宿主の線維化を減らす再生系。zonation（zone3側）が立たないことが自系への問い。",
      params:[
        {name:"IGF2濃度 → 細胞生存・成熟確率",note:"肝・内皮に共通のAKT/MAPK依存の成熟ルール"},
        {name:"内皮の血管内腔への整列度 → パラクリンによる実質成熟速度",note:"VCA有無でアンジオクラインシグナル強度を切替"}
      ],
      todos:[
        "LSEC（動脈型でなく類洞型）＋酸素勾配でzone3側マーカー（CYP2E1等）が立つか検証",
        "アルブミン/CYP活性が頭打ちのとき外因性IGF2を成熟キューとして添加",
        "自系の血管化で内皮を『配置＋分泌』として設計（抗CD31型コーティングの可否）"
      ]
    },
    figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='f49' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>脱細胞スキャフォールド＋VCAで血管を通し、IGF2軸で肝と血管を同時に成熟</text><rect x='12' y='40' width='150' height='96' rx='8' fill='var(--paper-2)' stroke='var(--accent)' stroke-width='1.5'/><text x='87' y='60' text-anchor='middle' font-size='10' fill='var(--accent)' font-weight='600'>脱細胞ECM足場</text><text x='87' y='78' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>天然の3D構造を保持</text><text x='87' y='94' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>血管内腔は裸</text><text x='87' y='118' text-anchor='middle' font-size='9.5' fill='var(--E)'>＋抗CD31アプタマー</text><text x='87' y='131' text-anchor='middle' font-size='9.5' fill='var(--E)'>(VCA)</text><path d='M164,88 L182,88' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f49)'/><rect x='185' y='40' width='150' height='96' rx='8' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.5'/><text x='260' y='60' text-anchor='middle' font-size='10' fill='var(--E)' font-weight='600'>血管化肝オルガノイド</text><text x='260' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>iPSC肝芽＋内皮前駆</text><text x='260' y='96' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>内皮が内腔に整列</text><text x='260' y='118' text-anchor='middle' font-size='9' fill='var(--ink)'>実質↔血管が空間分離</text><path d='M337,88 L355,88' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f49)'/><rect x='358' y='40' width='150' height='96' rx='8' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.5'/><text x='433' y='60' text-anchor='middle' font-size='10' fill='var(--D)' font-weight='600'>IGF2軸</text><text x='433' y='80' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>IGF2→IGF1R</text><text x='433' y='96' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→AKT / MAPK</text><text x='433' y='118' text-anchor='middle' font-size='9' fill='var(--ink)'>肝・血管を同時成熟</text><path d='M510,88 L528,88' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#f49)'/><rect x='520' y='52' width='112' height='72' rx='8' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='576' y='76' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>移植で再生</text><text x='576' y='94' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>生着・線維化↓</text><text x='576' y='109' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>肝機能 正常化</text><rect x='12' y='158' width='620' height='60' rx='8' fill='var(--paper-2)' stroke='var(--line)' stroke-width='1'/><text x='24' y='178' font-size='9.5' fill='var(--ink-soft)'>課題（自系への問い）：得られた肝細胞は門脈側(zone1)寄り。zonationを支配するのはLSECであり、</text><text x='24' y='198' font-size='9.5' fill='var(--ink-soft)'>本系の動脈型内皮では中心静脈側(zone3)が立たない。→ 類洞型LSEC＋酸素勾配でzone3を立ち上げられるかが次の検証。</text><text x='24' y='212' font-size='9' fill='var(--E)'>zone1（門脈・E-cad/TIMP1）○　／　zone3（中心静脈・CYP2E1/ITGA5）×</text></svg>",
    method_figure:"<svg viewBox='0 0 640 232' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='m49' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><rect x='0' y='0' width='640' height='232' fill='var(--paper)'/><text x='320' y='20' text-anchor='middle' font-size='11.5' fill='var(--ink)' font-weight='600'>実験デザイン：構築 → 空間解析 → IGF2検証 → 移植</text><rect x='12' y='36' width='138' height='54' rx='7' fill='var(--paper-2)' stroke='var(--A)' stroke-width='1.4'/><text x='81' y='56' text-anchor='middle' font-size='9.5' fill='var(--A)' font-weight='600'>① 分化</text><text x='81' y='72' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>単一iPSC株→</text><text x='81' y='85' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>肝芽＋内皮前駆</text><path d='M152,63 L170,63' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m49)'/><rect x='173' y='36' width='138' height='54' rx='7' fill='var(--paper-2)' stroke='var(--E)' stroke-width='1.4'/><text x='242' y='56' text-anchor='middle' font-size='9.5' fill='var(--E)' font-weight='600'>② 構築</text><text x='242' y='72' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>dECM＋VCAに播種</text><text x='242' y='85' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>共分化培地で成熟</text><path d='M313,63 L331,63' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m49)'/><rect x='334' y='36' width='138' height='54' rx='7' fill='var(--paper-2)' stroke='var(--G)' stroke-width='1.4'/><text x='403' y='56' text-anchor='middle' font-size='9.5' fill='var(--G)' font-weight='600'>③ 空間解析</text><text x='403' y='72' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>PHLI-seqで実質/血管</text><text x='403' y='85' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>→IGF2軸を同定</text><path d='M472,63 L490,63' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m49)'/><rect x='493' y='36' width='138' height='54' rx='7' fill='var(--paper-2)' stroke='var(--D)' stroke-width='1.4'/><text x='562' y='56' text-anchor='middle' font-size='9.5' fill='var(--D)' font-weight='600'>④ IGF2検証</text><text x='562' y='72' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>KDで成熟低下</text><text x='562' y='85' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>外因性添加で相乗</text><rect x='120' y='118' width='400' height='54' rx='7' fill='var(--paper-2)' stroke='var(--B)' stroke-width='1.5'/><text x='320' y='139' text-anchor='middle' font-size='10' fill='var(--B)' font-weight='600'>⑤ 移植：TAA誘発 慢性肝不全マウス</text><text x='320' y='158' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>VCA＋IGF2群でヒト肝細胞の血管周囲生着・LGR5⁺動員・線維化↓・ALT/AST正常化</text><path d='M320,90 L320,116' stroke='var(--accent)' stroke-width='1.3' marker-end='url(#m49)'/><text x='320' y='192' text-anchor='middle' font-size='9' fill='var(--ink-soft)'>読み出し：アルブミン/尿素・CD31整列・p-IGF1R/p-AKT/p-ERK・Sirius red・血清ALT/AST</text></svg>"
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("49", [{ic:"human",cap:"単一ヒトiPSC株→肝芽＋内皮前駆"}, {ic:"dish",cap:"脱細胞ECM足場＋抗CD31アプタマー(VCA)"}, {ic:"endothelial",cap:"内皮が血管内腔に整列"}, {ic:"omics",cap:"PHLI-seq空間トランスクリプトームでIGF2軸を同定"}, {ic:"drug",cap:"外因性IGF2で肝・血管を同時成熟"}, {ic:"mouse",cap:"TAA慢性肝不全マウスへ移植→再生・線維化↓"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 49 Kim/Kang Sci Adv 2026: iPSC由来血管化肝オルガノイド+dECM足場+PHLI-seq空間TX+IGF2 KD/添加+TAA移植+IF/WB */
LP.methods("49", ["invitro","mouse","spatial","proteomics","qpcr","wb","facs","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №49 血管を通し、IGF2軸で肝と血管を同時成熟 → 移植で再生 ===== */
LP.cinema("49", {
  svg:GLYPH.bg()+`<defs>${GLYPH.defsCommon}${GLYPH.arrow("49",'var(--E)')}</defs>`
    +GLYPH.title("脱細胞足場の血管にVCAで内皮を通し、IGF2→IGF1R→AKT/MAPKで肝と血管を同時に成熟させる")
    +`<rect x="60" y="150" width="600" height="60" rx="30" fill="#e3ecf2" stroke="#9bb6c8" stroke-width="2"/>`
    +`<text x="90" y="138" font-size="10.5" fill="var(--ink-soft)">脱細胞ECMの血管内腔（最初は内皮の裏打ちが無い＝裸）</text>`
    +GLYPH.hep("hep49",110,230,0.9,"iPSC由来 肝細胞")
    +`<g id="vca49" class="fade"><text x="360" y="130" text-anchor="middle" font-size="10.5" fill="var(--E)">抗CD31アプタマー(VCA)を内腔に担持</text></g>`
    +`<g id="ecs49"></g>`
    +GLYPH.mol("igf49a",330,250,"IGF2","var(--D)",true)+GLYPH.mol("igf49b",400,255,"IGF2","var(--D)",true)+GLYPH.mol("igf49c",470,248,"IGF2","var(--D)",true)
    +GLYPH.receptor("igfr49",300,235,"IGF1R","var(--D)")
    +GLYPH.tag("akt49",430,320,"AKT / MAPK ↑","var(--D)",150,true)
    +GLYPH.badge("mat49",600,110,"成熟","(肝＋血管)","var(--E)")
    +GLYPH.badge("regen49",600,300,"移植→再生","線維化↓","var(--B)"),
  build(K){
    const ecPos=[[120,180],[180,178],[250,182],[320,179],[400,181],[470,178],[540,182],[600,180]];
    return [
      {color:"A",t:2400,cap:"① 脱細胞した肝スキャフォールド。天然のECM構造は残るが、血管内腔は内皮の裏打ちが無く裸のまま。",run(){}},
      {color:"E",t:3400,cap:"② 血管内腔に抗CD31アプタマー（VCA）を担持。iPSC由来の内皮前駆が内腔に整列し、連続した血管の裏打ちができる。",run(){
        K.show(["vca49"]);
        const g=K.$("ecs49");
        ecPos.forEach((p,i)=>K.T(()=>{ const e=K.cE("ellipse",{cx:p[0],cy:p[1],rx:16,ry:9,fill:"#cfe0ee",stroke:"var(--E)","stroke-width":"1.6",opacity:"0"}); g.appendChild(e);
          const t0=performance.now(); const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/500));e.setAttribute("opacity",(0.9*q).toFixed(2));if(q<1)K.raf(st);};K.raf(st);
        },i*220));
      }},
      {color:"D",t:4200,cap:"③ 空間解析で浮かんだのはIGF2-IGF1R-AKT/MAPK軸。内皮と肝細胞がIGF2をやり取りし、両方の生存と成熟を同時に押し上げる。",run(){
        K.show(["igf49a","igf49b","igf49c"]);
        K.T(()=>{K.flow(330,250,305,235,"var(--D)",{n:2,dur:1.0,loop:2});K.flow(400,255,305,235,"var(--D)",{n:2,dur:1.1,loop:2});},300);
        K.T(()=>{K.pulse("igfr49");K.show(["akt49"]);},1600);
        K.T(()=>{K.show(["mat49"]);K.flow(470,178,560,120,"var(--E)",{n:3,dur:1.2,loop:2});},2800);
      }},
      {color:"B",t:3400,cap:"④ 外因性IGF2とVCAを併せた成熟オルガノイドを慢性肝不全マウスへ移植。ヒト肝細胞が血管周囲に生着し、線維化が減って肝機能が戻る。",run(){
        K.flow(300,235,560,300,"var(--B)",{n:3,dur:1.3,loop:2});
        K.T(()=>K.show(["regen49"]),1200);
      }},
    ];
  }
});
