/* ============================================================
   №05 · Nature Communications 2025 · Liu W, Liu Y, Zhang L, Li L, Yang W, Li J, He W
   miR-325-3p搭載核酸スフィア（SNA）がLSECのcapillarizationを是正し肝線維化を治療
   ------------------------------------------------------------
   この1ファイルに論文1本分をまとめている：
     LP.paper（本文データ）/ LP.icons（登場要素イラスト）/
     LP.methods（使用手法）/ LP.cinema（アニメーション）
   書式・追加手順は ADDING.md、雛形は papers/_template.js。
   ============================================================ */

/* ----- 本文データ ----- */
LP.paper(
  {
    id:"05",
    added:"2026-05-30",
    title:"miR-325-3p搭載核酸スフィア（SNA）がLSECのcapillarizationを是正し肝線維化を治療",
    authors:"Liu W, Liu Y, Zhang L, Li L, Yang W, Li J, He W",
    journal:"Nature Communications",
    year:2025,
    vol:"16:4517",
    doi:"10.1038/s41467-025-59885-x",
    url:"https://www.nature.com/articles/s41467-025-59885-x",
    primary:"E",
    tags:["E","H","B"],
    approach:"in vivo (mouse) ＋ AI ＋ ナノ核酸",
    struct:{
      model:"in vivo", cells:["LSEC","HSC"], triggers:["LSEC capillarization（脱分化）"],
      steatosis:"—", inflammation:"△", fibrosis:"○", readout:["LSEC fenestrae/分化マーカー","線維化面積","αSMA"],
      ignite:"LSEC capillarization（脱分化）が線維化を促進。miR-325-3pで是正するとHSC活性化が抑制。",
      params:[{name:"LSEC状態（正常↔capillarized）→ HSC活性化確率",note:"内皮状態を空間トリガー化"}],
      todos:["LSEC状態変化をHSC再活性化の空間トリガーに実装","内皮を入れて中心静脈ニッチを再現"]
    },
    figure:"<svg viewBox='0 0 640 240' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='ar05' markerWidth='10' markerHeight='10' refX='8' refY='3' orient='auto'><path d='M0,0 L8,3 L0,6 Z' fill='var(--ink-soft)'/></marker></defs><g font-size='12.5' fill='var(--ink)'><rect x='12' y='28' width='150' height='52' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='87' y='49' text-anchor='middle'>MSC 分泌物</text><text x='87' y='67' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>AIで活性本体を探索</text><rect x='200' y='28' width='150' height='52' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='2'/><text x='275' y='49' text-anchor='middle'>miR-325-3p</text><text x='275' y='67' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>⊣ Ptprm</text><rect x='388' y='28' width='160' height='52' rx='7' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='468' y='49' text-anchor='middle' font-size='12'>アクチン細胞骨格</text><text x='468' y='67' text-anchor='middle' font-size='11' fill='var(--ink-soft)'>再編</text><rect x='200' y='148' width='200' height='56' rx='7' fill='var(--paper)' stroke='var(--E)' stroke-width='2'/><text x='300' y='172' text-anchor='middle'>LSEC fenestrae 回復</text><text x='300' y='191' text-anchor='middle' font-size='11.5' fill='var(--E)'>capillarization 逆転</text><rect x='430' y='150' width='200' height='54' rx='7' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='530' y='173' text-anchor='middle'>HSC活性化↓</text><text x='530' y='191' text-anchor='middle' font-size='11.5' fill='var(--B)'>→ 線維化 軽減</text><line x1='162' y1='54' x2='198' y2='54' stroke='var(--ink-soft)' marker-end='url(#ar05)'/><line x1='350' y1='54' x2='386' y2='54' stroke='var(--ink-soft)' marker-end='url(#ar05)'/><path d='M468,80 C468,118 300,120 300,146' fill='none' stroke='var(--ink-soft)' stroke-width='1.4' marker-end='url(#ar05)'/><line x1='400' y1='176' x2='428' y2='176' stroke='var(--ink-soft)' marker-end='url(#ar05)'/></g><text x='12' y='228' font-size='11.5' fill='var(--H)'>送達：miR-325-3pを球状核酸(SNA)化 → Scara/SR-A介在エンドサイトーシスで線維化LSECへ特異的内在化</text></svg>",
    method_figure:"<svg viewBox='0 0 640 240' xmlns='http://www.w3.org/2000/svg' font-family='inherit'><defs><marker id='m05' markerWidth='9' markerHeight='9' refX='7' refY='3' orient='auto'><path d='M0,0 L7,3 L0,6 Z' fill='var(--accent)'/></marker></defs><text x='20' y='22' font-size='12' fill='var(--ink-soft)'>AIでMSC分泌miRNAを同定 → SNA化 → 3種の線維化マウスへ投与</text><g font-size='12' fill='var(--ink)'><rect x='18' y='38' width='150' height='50' rx='8' fill='var(--paper)' stroke='var(--G)' stroke-width='1.5'/><text x='93' y='59' text-anchor='middle' font-size='11.5'>AI×MSC分泌解析</text><text x='93' y='76' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>→ miR-325-3p</text><rect x='18' y='104' width='150' height='52' rx='8' fill='var(--paper)' stroke='var(--H)' stroke-width='1.5'/><text x='93' y='125' text-anchor='middle' font-size='11.5'>SNA ナノ粒子化</text><text x='93' y='142' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>担体不要・球状核酸</text><rect x='250' y='72' width='150' height='96' rx='8' fill='var(--paper-2)' stroke='var(--line)'/><text x='325' y='100' text-anchor='middle' font-size='12'>線維化マウス</text><text x='325' y='120' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>CCl4 / TAA / BDL</text><text x='325' y='140' text-anchor='middle' font-size='10.5' fill='var(--ink-soft)'>SNAを投与</text><rect x='452' y='36' width='172' height='52' rx='8' fill='var(--paper)' stroke='var(--E)' stroke-width='1.5'/><text x='538' y='57' text-anchor='middle' font-size='11.5'>LSEC fenestrae 回復</text><text x='538' y='74' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>SEM/マーカーで評価</text><rect x='452' y='100' width='172' height='50' rx='8' fill='var(--paper)' stroke='var(--B)' stroke-width='1.5'/><text x='538' y='121' text-anchor='middle' font-size='11.5'>線維化 有意に軽減</text><text x='538' y='137' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>コラーゲン定量</text><rect x='452' y='162' width='172' height='48' rx='8' fill='var(--paper)' stroke='var(--accent)' stroke-width='1.5'/><text x='538' y='182' text-anchor='middle' font-size='11'>有害作用なし</text><text x='538' y='198' text-anchor='middle' font-size='10' fill='var(--ink-soft)'>安全性評価</text><path d='M168,63 C200,63 200,108 248,112' fill='none' stroke='var(--accent)' marker-end='url(#m05)'/><path d='M168,130 C200,130 220,124 248,122' fill='none' stroke='var(--accent)' marker-end='url(#m05)'/><path d='M400,108 C424,108 428,64 450,62' fill='none' stroke='var(--accent)' marker-end='url(#m05)'/><path d='M400,120 C424,120 428,124 450,125' fill='none' stroke='var(--accent)' marker-end='url(#m05)'/><path d='M400,132 C424,132 428,184 450,186' fill='none' stroke='var(--accent)' marker-end='url(#m05)'/></g></svg>",
    abstract_ja:"LSECは肝線維化の進行に伴って有窓(fenestrae)を失い、毛細血管化(capillarization)する。MSC移植はこれを是正して線維化を軽減できるものの、臨床応用には製造や安全性の制約が多い。そこで本研究は、MSC処置マウスやヒト肝硬変患者のLSECのオミクスデータをAIモデルで解析し、capillarization是正の活性本体としてmiR-325-3pを同定した。miR-325-3pは標的Ptprmを抑えて細胞骨格（アクチン・微小管）を再編し、fenestraeを再形成する。さらにMSC療法の代替として、miR-325-3pを多価提示する球状核酸(SNA)ナノ粒子を開発したところ、SNAはScara/SR-A介在のクラスリン依存エンドサイトーシスによって線維化LSECに特異的に内在化した。実際にCCl4・TAA・BDLの3モデルで、SNAはLSECの有窓を回復させてcapillarizationを逆転させ、有害作用なく線維化を有意に軽減した。以上はLSECを標的とする核酸医薬の新たな道を示すものである。",
    background:"健常なLSECは有窓かつ無基底膜という特殊な内皮で、HSCを静止状態に保つなど肝の恒常性に寄与する。ところが線維化の過程では、LSECがfenestraeを失って基底膜をもつ毛細血管様の内皮へ脱分化(capillarization)し、これがHSC活性化と線維化を促す上流イベントになる。したがってcapillarizationの是正は線維化を巻き戻しうる標的だが、それを担う分子と送達手段は未確立だった。MSC移植は有効なものの、製造・品質・安全性の制約から臨床化が難しいという課題も残っていた。",
    achievements:[
      "MSC処置マウスLSECのRNA-seqとヒト肝硬変LSECのプロテオームをAIモデルで解析し、capillarization是正の活性本体としてmiR-325-3pを同定(miR-325-3p阻害でMSCの効果が減弱＝MSC効果がmiR-325-3p依存と実証)。",
      "miR-325-3pの直接標的がPtprmで、これを抑制しアクチン細胞骨格を再編→fenestrae再形成という機序を解明。",
      "miR-325-3pを多価提示する球状核酸(SNA)ナノ粒子を設計(担体不要)。",
      "SNAがScara/SR-A介在のクラスリン依存エンドサイトーシスで線維化LSECに選択的内在化することを示した。",
      "CCl4・TAA・BDLの3独立モデルでLSEC有窓を回復・capillarizationを逆転し、有害事象なく線維化を有意に軽減。"
    ],
    limitations:[
      "SNAの治療実証はすべてマウスモデルで、ヒト患者由来LSECでの確認はmiR-325-3p mimic導入（3例のex vivo）にとどまり、SNAのヒトでの有効性・薬物動態・免疫原性は未確立。",
      "線維化確立後の治療効果が中心で、長期/反復投与時の安全性・耐性は今後の課題。",
      "Ptprm抑制の全身的影響、Scara依存取り込みのLSEC特異性の絶対度は更なる検討が必要。",
      "MASLD/MASH特異的(脂質・代謝駆動)モデルでの検証は限定的で、化学傷害・胆汁うっ滞モデル中心。"
    ],
    connection:[
      "LSEC=4細胞共培養の機能的意味づけ：capillarization(有窓喪失)が線維化の上流ドライバーであることを治療介入で逆に証明。LSECを『線維化点火/抑制のスイッチ細胞』へ格上げできる。",
      "線維化リードアウト(LSEC側)：fenestrae密度・capillarizationマーカー(CD31/CD34↑)、Ptprm、Scara発現が、LSECの健常→capillarized移行の指標に。#01のEC–HSCクロストークと合わせEC状態軸が補強。",
      "酸素・代謝との接点：LSEC有窓維持は酸素・ずり応力・VEGFに感受性。好気条件を保つ本系は生理的LSEC表現型を維持しやすく、capillarizationの点火条件を制御変数にできる。",
      "逆方向の対照ツール：miR-325-3p/SNAを共培養添加→LSECを健常側へ戻しHSC活性化・線維化が抑制されるかを試せるネガコン。逆にPtprm高発現/capillarization誘導で線維化を点火する正方向操作も設計可。",
      "ABM：『LSEC状態(有窓 vs capillarized)→HSC活性化確率』を状態遷移ルール化。#02(KC由来シグナル)・#03(HSC内ATF4スイッチ)と連結しEC軸を多細胞カスケードに追加できる。",
      "既収録との接続：#01はEC–HSCクロストークを相関・空間で示したが、本論文(#05)はLSEC状態の是正で線維化が巻き戻ることを因果・治療で示し、内皮起点の線維化制御を補完。"
    ],
    glossary:[
      {term:"capillarization",full:"sinusoidal capillarization",desc:"LSECが有窓を失い毛細血管様内皮へ脱分化する病的変化。線維化の上流"},
      {term:"fenestrae",full:"LSEC fenestrae",desc:"LSEC膜上の有窓(小孔)。物質交換と肝恒常性に必須"},
      {term:"miR-325-3p",full:"microRNA-325-3p",desc:"MSC分泌のマイクロRNA。Ptprmを標的にLSEC有窓を回復"},
      {term:"Ptprm",full:"protein tyrosine phosphatase receptor type M",desc:"miR-325-3pの標的。抑制でアクチン細胞骨格再編→fenestrae再形成"},
      {term:"SNA",full:"spherical nucleic acid",desc:"核酸を球状に多価提示するナノ粒子。担体不要でLSEC送達"},
      {term:"Scara / SR-A",full:"scavenger receptor class A",desc:"SNAをクラスリン依存エンドサイトーシスで取り込むLSEC受容体"},
      {term:"MSC",full:"mesenchymal stem cell",desc:"間葉系幹細胞。分泌物(miR-325-3p)でcapillarizationを是正"},
      {term:"BDL",full:"bile duct ligation",desc:"胆管結紮による胆汁うっ滞性肝線維化モデル"},
      {term:"TAA",full:"thioacetamide",desc:"肝毒で線維化を誘導する実験モデル試薬"},
      {term:"CCl4",full:"carbon tetrachloride",desc:"四塩化炭素。代表的な化学傷害性肝線維化モデル"}
    ]
  }
);

/* ----- 登場要素（イラスト）：ic は js/core.js の ICONS のキー ----- */
LP.icons("05", [{ic:"mouse",cap:"線維化3モデル"},{ic:"endothelial",cap:"LSEC capillarization"},{ic:"drug",cap:"SNA核酸医薬"},{ic:"liver",cap:"線維化軽減"}]);

/* ----- 使用手法：js/core.js の METHOD_LABELS のキー（総説は []） ----- */
/* 05 Liu Nat Commun 2025: 3マウス線維化モデル(CCl4/TAA/BDL)+ヒト肝硬変LSEC+SNA(miR-325-3p)+LSEC in vitro(siRNA, 阻害剤)+AIモデル(RNA-seq/プロテオーム解析)+iTRAQ/RNA-seq/scRNA-seq+qPCR/WB/ELISA+SEM/共焦点 */
LP.methods("05", ["mouse","human","invitro","crispr","drug","nano","insilico","rnaseq","scrna","proteomics","qpcr","wb","elisa","imaging"]);

/* ----- アニメーション（CINEMA）：部品は js/cinema.js の GLYPH / CinemaKit ----- */
/* ===== №05 SNA(miR-325-3p)がSR-A介在エンドサイトーシスでLSEC是正 ===== */
LP.cinema("05", {
  svg:GLYPH.bg("#23242c")+`<defs>${GLYPH.defsCommon}</defs>`
    +`<text x="360" y="22" text-anchor="middle" font-size="11.5" fill="rgba(255,255,255,.6)">SNAがLSECのSR-Aに結合→エンドサイトーシスで内在化→fenestrae回復</text>`
    +`<path d="M0,150 C180,130 540,170 720,148 L720,206 C540,228 180,188 0,208 Z" fill="#3a3026" opacity="0.9"/>`
    +`<path d="M0,150 C180,130 540,170 720,148" fill="none" stroke="var(--E)" stroke-width="2.4"/>`
    +`<g id="fen">`+[...Array(13)].map((_,i)=>`<circle id="fen${i}" cx="${40+i*52}" cy="${150+Math.sin(i)*2}" r="3.2" fill="#23242c"/>`).join("")+`</g>`
    +GLYPH.receptor("sra",300,150,"SR-A","var(--E)")
    +`<g id="vesicle" class="fade"><circle cx="300" cy="150" r="9" fill="none" stroke="var(--H)" stroke-width="2"/></g>`
    +`<text x="20" y="186" font-size="10" fill="rgba(255,255,255,.5)">類洞(LSEC)</text>`
    +GLYPH.stellate("hsc",360,330,"肝星細胞")+GLYPH.layer("collagen")
    +GLYPH.pill("sna",600,80,"SNA(miR-325-3p)",128)+GLYPH.badge("good",615,330,"線維化","軽減 ✓","var(--E)"),
  build(K){
    const N=13;
    const closeFen=(open)=>{for(let i=0;i<N;i++)K.T(()=>{const c=K.$("fen"+i);if(c){const t0=performance.now(),from=+c.getAttribute("r"),to=open?3.2:0;const st=now=>{const q=Math.max(0,Math.min(1,(now-t0)/700));c.setAttribute("r",(from+(to-from)*q).toFixed(2));if(q<1)K.raf(st);};K.raf(st);}},i*40);};
    return [
      {color:"E",t:2400,cap:"健常な類洞。LSECの小孔（fenestrae）が開き、HSCは静止期。",run(){}},
      {color:"B",t:3200,cap:"① 病態進行でLSECが小孔を失い（capillarization）、SR-A（スカベンジャー受容体）を高発現するようになる。HSCが活性化してコラーゲンを沈着 → 線維化。",run(){
        closeFen(false);
        K.T(()=>{K.morph("hscShape",GLYPH.SPINDLE);K.attr("hscShape","fill","#b0432f");K.text("hscCap","活性化HSC");},700);
        K.T(()=>K.draw("collagen",GLYPH.collagenAt(360,385),{len:160}),1300);
      }},
      {color:"H",t:4000,cap:"② miR-325-3pを球状核酸(SNA)化して投与。SNAはLSEC膜のSR-Aに結合し、SR-A介在エンドサイトーシスで小胞として内在化される。",run(){
        K.show(["sna"]); K.flow(600,90,300,148,"var(--H)",{dur:1.3,loop:2,r:4});
        K.T(()=>{K.show(["vesicle"]); K.move("vesicle",0,0,30,55,1.2);},1500);
      }},
      {color:"E",t:3200,cap:"③ 取り込まれたmiR-325-3pがLSECを是正してfenestraeが回復、HSC活性化が抑えられ線維化が有意に軽減。",run(){
        closeFen(true);
        K.morph("hscShape",GLYPH.QUIET);K.attr("hscShape","fill","#d6a08e");K.text("hscCap","静止期へ");
        K.attr("collagen","opacity","0.25");K.show(["good"]);
      }},
    ];
  }
});
