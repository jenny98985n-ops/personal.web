import React, { useState } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { Compass, Sparkles, AlertCircle, HelpCircle, Eye, CornerRightDown, CheckCircle, Crown, Brain, Heart, Home, Shield } from 'lucide-react';
import FullReportView from './FullReportView';
import ReportMarkdown, { FeatureCardBlock } from './ReportMarkdown';
import CoreKeyPointsSummary, { KeyPointItem } from './CoreKeyPointsSummary';

export default function AstrologyView() {
  const data = LAI_YI_CHIEH_DATA.astrology;
  const [selectedPlacement, setSelectedPlacement] = useState<string | null>(null);
  const [filterHouse, setFilterHouse] = useState<string>('all');

  const placements = data.placements;

  const houses = Array.from(new Set(placements.map(p => p.house.toString()))).sort((a,b)=>parseInt(a)-parseInt(b));

  const getPlacementDetail = (planet: string) => {
    if (planet.includes('太陽')) {
      return {
        title: '太陽雙子座 ✕ 12宮 (Subconscious explorer)',
        meaning: '你的核心意志（太陽）落在雙子座，賦予你極致敏捷、充滿求知欲的靈魂；但它落入了隱密的「第12宮」。這代表你的探索是「向內且隱密的」，你的大腦活動經常與潛意識、前世與玄學冥冥之中對接。你天生具備極強的直覺雷達，也是為什麼你對命理、心理學有極深的感召。你需要不被打擾的「暗房時間」來消化靈感。',
        advise: '每週至少安排一天完全斷網的獨處，讓潛意識的直覺能夠自然浮現並整理成智慧。'
      };
    }
    if (planet.includes('月亮')) {
      return {
        title: '月亮獅子座 ✕ 3宮 (The Communicative Queen)',
        meaning: '掌管安全感與潛意識需求的月亮落在霸氣、慷慨、璀璨的「獅子座」，且落入掌管表達與溝通的「第三宮」。這代表你大腦在理智上很理性（雙子），但內心深處卻擁有著傲嬌的女王本質，強烈需要「被崇拜、被寵愛與被肯定」。你天生適合站在演說、自媒體、寫作的舞台上，聽眾的掌聲與回饋能為你注入無比的金錢與生命能量！',
        advise: '不要羞於展示才華。在關係和事業中，勇敢向懂你價值的人群索取掌聲與崇拜。'
      };
    }
    if (planet.includes('水星')) {
      return {
        title: '水星雙子座逆行 ✕ 1宮 (Internalized Genius)',
        meaning: '水星是雙子座的守護星，水星在第一宮雙子座是「廟旺」的頂配，代表你擁有「超級大腦」般的非線性逆向思考天賦。而水星在此處「逆行 (Rx)」，更將這股大腦風暴轉化為「向內探尋」。你不會盲從任何權威，你的思考是螺旋式前進的，賦予了你不可思議的客觀、透徹與獨立批判思考能力。',
        advise: '寫自由書寫（Free Writing）或記錄夢境，你的逆向工程思維會在筆尖流淌時大爆發。'
      };
    }
    if (planet.includes('金星')) {
      return {
        title: '金星金牛座 ✕ 12宮 (Subconscious Lover of Beauty)',
        meaning: '你的金星落在其守護星座「金牛座」，代表你對美感、質感、生活享受以及愛情有著極高的品味與豐盛的吸引力；但它落在了第12宮，代表這股對愛與美的體驗是隱密、甚至帶有一種宿命或靈魂伴侶色彩的。你渴望的情感是極致深沉且低調的，往往在私密空間或心靈深處才能全然釋放。',
        advise: '將美感融入你的私密空間。購買高質感的家居、香氛、或進行精油水療，在私密的感官享受中滋養靈魂。'
      };
    }
    if (planet.includes('火星')) {
      return {
        title: '火星處女座 ✕ 4宮 (The Precision Builder of Sanctuary)',
        meaning: '火星代表行動力，落在細緻、追求完美的「處女座」，且落入守護安全感與家庭的「第四宮」。這代表你做起事來極具效率、細節控、且有條不紊。你可能對自己的居家環境、私人領域有非常高的完美主義傾向，有時會將焦慮和火氣發洩在家庭或親近的人身上，但這也是你對「安全感」極度在乎的表現。',
        advise: '利用手作、整理房間或家居DIY來宣洩過剩的行動力，將精力轉化為打造完美避風港的動力。'
      };
    }
    if (planet.includes('木星')) {
      return {
        title: '木星射手座逆行 ✕ 6宮 (The Philosophic Problem Solver)',
        meaning: '木星落在守護的「射手座」且在「第六宮」，這是極佳的守護星配置，代表你在日常工作、健康、與服務他人中能獲得極大的幸運和擴展。雖然逆行 (Rx)，但更代表著你對「日常秩序、生活哲學」有著非常獨特的個人見解。你擅長在瑣碎的事務中看出宏觀的藍圖，在職場中常扮演慷慨、樂觀的導師。',
        advise: '避免過度擴張精力或承諾過多的日常瑣事。學會篩選，將好運聚焦在最能發揮你宏觀戰略的項目上。'
      };
    }
    if (planet.includes('土星')) {
      return {
        title: '土星雙魚座 ✕ 10宮 (The Spiritual Authority)',
        meaning: '土星落在第10宮雙魚座，象徵著你在世俗成就與事業邊界上面臨最核心的考驗。雙魚座的消融與土星的建構在此交織，代表你需要在看似混亂、無定形的領域（如玄學、創意、心靈）中，去建立起最堅固、最具紀律性的權威與體系。這是一場將靈性智慧「硬著陸」為社會價值的考驗。',
        advise: '不要害怕為自己的直覺和創意劃定邊界、甚至大膽開價。將無形的天賦制度化、商業化，是你此生土星的核心功課。'
      };
    }
    // Default for other placements
    const matched = placements.find(p => p.planet === planet);
    return {
      title: `${planet} 落於 ${matched ? matched.sign : '未知星座'} ✕ ${matched ? matched.house : '未知'}宮`,
      meaning: `在你的星盤中，${planet}落在了${matched ? matched.sign : '未知星座'}的第${matched ? matched.house : '未知'}宮。這代表此星體能量在此宮位所代表的人生領域中發揮作用。雙子座與其他星體的交互，為你帶來敏捷的多維思維與快速適應外部環境的能力。`,
      advise: '保持好奇心，多維度吸收資訊。在日常生活中，結合自身的內在權威進行決策，使能量達到最佳平衡。'
    };
  };

  const filteredPlacements = filterHouse === 'all'
    ? placements
    : placements.filter(p => p.house.toString() === filterHouse);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Tab Header Banner */}
      <div className="p-8 md:p-12 rounded-3xl bg-slate-900/35 border border-slate-850 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 border-l-4 border-amber-400 pl-6">
            <span className="text-xs font-black text-amber-400 font-mono tracking-widest block uppercase">
              ✦ WESTERN ASTROLOGY ARCHETYPE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tighter leading-none uppercase">
              風與火的智力交響樂 <span className="text-amber-400 block text-lg font-light tracking-widest mt-1">THE ASTROLOGICAL SPECTRUM</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-mono">
              SUN & ASC GEMINI (12H/1H) ✦ MOON LEO (3H) ✦ MERCURY RETROGRADE IN GEMINI
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 max-w-md">
            <span className="text-[10px] text-amber-400 font-mono font-black tracking-wider block mb-1">ASTRO BRIEF</span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              「超級大腦」的絕對頂配。上升與太陽皆落雙子，對世界充滿無窮的好奇心。水星第一宮逆行，賦予了你絕佳的「逆向工程式」獨立批判思考能力。
            </p>
          </div>
        </div>
      </div>

      {/* ⚡️ 西洋占星懶人包速讀元件 */}
      <CoreKeyPointsSummary
        domainName="西洋占星"
        themeColor="blue"
        items={[
          {
            icon: Sparkles,
            tag: "太陽 12宮",
            title: "太陽雙子座 ✕ 12宮",
            subtitle: "潛意識大腦探索者",
            summary: "核心意志落在雙子座，天生敏捷求知，但落入隱密第12宮，靈感大多來自潛意識與深層獨處。",
            actionAdvice: "安排完全斷網的獨處時間，讓潛意識直覺自然浮現並轉化為智慧。"
          },
          {
            icon: Crown,
            tag: "月亮 3宮",
            title: "月亮獅子座 ✕ 3宮",
            subtitle: "溝通與表達女王",
            summary: "理智上非常理性（雙子），但情感深處極度需要「被崇拜與肯定」。在舞台或自媒體表達能注入無比能量。",
            actionAdvice: "勇敢向懂你價值的人群展現才華，索取掌聲與崇拜是你的生命充能方式。"
          },
          {
            icon: Brain,
            tag: "水星 1宮逆行",
            title: "水星雙子座逆行 ✕ 1宮",
            subtitle: "逆向工程大腦",
            summary: "雙子座守護星廟旺，具備超級大腦。逆行更轉化為內向探尋，不盲從權威，擁有極致獨立的批判思考力。",
            actionAdvice: "透過自由書寫（Free Writing）或記錄夢境，大腦逆向工程天賦會在筆尖大爆發。"
          },
          {
            icon: Heart,
            tag: "金星 12宮",
            title: "金星金牛座 ✕ 12宮",
            subtitle: "高奢品味與隱密吸引力",
            summary: "金星廟旺金牛座，對美感、生活質感有極高品質要求，落入12宮代表情感體驗深沉且帶有靈魂伴侶色彩。",
            actionAdvice: "將美感融入私密空間與家居香氛，在私密感官享受中滋養靈魂。"
          },
          {
            icon: Home,
            tag: "火星 4宮",
            title: "火星處女座 ✕ 4宮",
            subtitle: "聖殿精準打造者",
            summary: "做起事來極具效率、細節控且有條不紊。對私人領域與家庭有完美主義，重視內在安全感。",
            actionAdvice: "利用手作、整理房間或家居DIY宣洩行動力，將精力轉化為打造避風港的動力。"
          }
        ]}
      />

      {/* Astrology Focus Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Placements Explorer List */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-850">
            <div>
              <h3 className="text-base font-black text-slate-100 uppercase tracking-tight">星體落入配置明細 (Placements)</h3>
              <p className="text-xs text-slate-400">點選星體，解鎖你的專屬跨流派對照詮釋</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-mono font-bold uppercase">篩選宮位:</span>
              <select 
                value={filterHouse}
                onChange={(e) => setFilterHouse(e.target.value)}
                className="bg-slate-950 text-xs font-bold text-slate-300 px-3 py-2 rounded-lg border border-slate-850 focus:outline-none focus:border-amber-400"
              >
                <option value="all">全部宮位 (ALL)</option>
                {houses.map(h => (
                  <option key={h} value={h}>{h} 宮 (HOUSE {h})</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-850 text-slate-500 uppercase tracking-widest font-mono text-[10px]">
                  <th className="py-3 px-4">星體 / 虛點</th>
                  <th className="py-3 px-4">落入星座</th>
                  <th className="py-3 px-4">精確度度數</th>
                  <th className="py-3 px-4 text-center">宮位</th>
                  <th className="py-3 px-4 text-right">狀態</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850/60 text-slate-300 font-mono">
                {filteredPlacements.map((p) => (
                  <tr 
                    key={p.planet}
                    onClick={() => setSelectedPlacement(p.planet)}
                    className={`cursor-pointer transition-colors hover:bg-amber-400/5 ${selectedPlacement === p.planet ? 'bg-amber-400/10 text-amber-300 font-black' : ''}`}
                  >
                    <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${['太陽 (Sun)', '月亮 (Moon)', '水星 (Mercury)', '金星 (Venus)', '土星 (Saturn)'].includes(p.planet) ? 'bg-amber-400' : 'bg-slate-600'}`} />
                      {p.planet}
                    </td>
                    <td className="py-3.5 px-4 font-sans font-medium">{p.sign}</td>
                    <td className="py-3.5 px-4 text-slate-400">{p.degree}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-slate-400 text-[11px] font-black">
                        {p.house} 宮
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {p.isRetrograde ? (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold">逆行 Rx</span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">順行</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Placement Details (Holographic Card) */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          
          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-850">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              <h3 className="text-base font-black text-slate-100 uppercase tracking-tight">星體深層解碼 (Decoded)</h3>
            </div>

            {selectedPlacement ? (
              <div className="space-y-4 animate-fade-in">
                <FeatureCardBlock
                  title={getPlacementDetail(selectedPlacement).title}
                  badge="DECODED"
                  variant="amber"
                  icon={Sparkles}
                >
                  <ReportMarkdown content={getPlacementDetail(selectedPlacement).meaning} />
                  
                  <div className="p-3.5 mt-3 bg-slate-950 border border-amber-400/20 rounded-xl space-y-1">
                    <span className="text-[10px] text-amber-400 font-black tracking-widest font-mono block uppercase">🎯 進階實踐策略 / PRACTICE</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {getPlacementDetail(selectedPlacement).advise}
                    </p>
                  </div>
                </FeatureCardBlock>
              </div>
            ) : (
              <div className="py-12 text-center space-y-4">
                <HelpCircle className="w-12 h-12 text-slate-700 mx-auto animate-pulse" />
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  請點選左側表格中的 <strong>星體名稱</strong>（建議優先點選 <strong>太陽、月亮、水星、金星或土星</strong>）來解鎖 YieJie 的獨家命盤深度剖析。
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => setSelectedPlacement('太陽 (Sun)')}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black rounded-lg transition-colors border border-transparent font-display uppercase tracking-wider"
                  >
                    一鍵解鎖太陽核心 ☀️
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-850 mt-6 text-center">
            <span className="text-[10px] text-slate-500 font-mono block">
              西洋占星數據由 Astrolabe 提供・星盤數據 (生辰已保密)
            </span>
          </div>
        </div>
      </div>

      {/* Saturn Return Deep Dive Card */}
      <div className="p-8 md:p-12 rounded-3xl bg-slate-900/30 border border-slate-850 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20 text-xs text-amber-400 font-bold font-mono uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              LIFETIME TRANSITION: SATURN RETURN
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-100 tracking-tight leading-none uppercase">
              迎來一生一次的「土星回歸」 <span className="text-amber-400 text-sm block mt-1 font-mono tracking-widest">SATURN RETURN (2023 - 2026)</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
              土星在你的第十宮雙魚座，代表在事業形象與世俗成就中面臨最嚴格的「地基穩固測試」。
              <strong>三十而立，內在重塑</strong>。大約從 2023 年開始至 2026 年初，土星繞行黃道一圈回到你出生時的位置。這是一段「宇宙正在逼迫你淘汰不適合你、滿足別人期待之虛無目標」的陣痛期。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400 leading-normal">
                  <strong className="text-slate-200">淘汰他人期待：</strong> 徹底剪除那些你為了迎合外界、博取人際面子而建立的疲累形象與項目。
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400 leading-normal">
                  <strong className="text-slate-200">確立未來30年根基：</strong> 土星回歸雖然伴隨陣痛，但它能幫你篩選出最不可退讓的核心原則，在此之上構建精簡且極具爆發力的事業系統。
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 space-y-4">
            <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase">ENERGY TIMELINE TRANSITION</span>
            
            <div className="space-y-4">
              <div className="relative pl-6 border-l border-slate-850">
                <div className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800" />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-0.5">
                  <span>2023 年以前</span>
                  <span>探索積累</span>
                </div>
                <p className="text-xs text-slate-400 font-sans">大量吸收，變色龍般配合外界，逐漸感到神經耗弱。</p>
              </div>

              <div className="relative pl-6 border-l-2 border-amber-400">
                <div className="absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <div className="absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="flex justify-between text-[10px] font-mono text-amber-400 mb-0.5 font-bold">
                  <span>2023 - 2026 年初</span>
                  <span className="bg-amber-400/10 px-1 rounded">正在經歷 ✦ RETURNING</span>
                </div>
                <p className="text-xs text-slate-200 font-sans font-medium leading-relaxed">破除幻象，大膽劃分界線，淘汰不合腳的鞋，構建最核心的發聲模式。</p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500" />
                <div className="flex justify-between text-[10px] font-mono text-emerald-400 mb-0.5 font-bold">
                  <span>2026 年及以後</span>
                  <span>穩固綻放</span>
                </div>
                <p className="text-xs text-slate-400 font-sans">大腦戰略完全落地。以「現代魔法師」的高奢定位發起專案，迎來下一次財富爆發。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Report Chapter Integration */}
      <div className="pt-8 border-t border-slate-850 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-slate-900 to-amber-500/10 border border-blue-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-black text-slate-100">全息天書 ✦ 西洋占星與性格心智專屬章節</h3>
              <p className="text-[11px] text-slate-400">邏輯分流：系統自動匯入全息天書中屬於性格與心智運作的精闢解碼</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-amber-300 bg-slate-950 px-3 py-1 rounded-full border border-amber-400/30 self-start sm:self-auto">
            性格心智維度 (Personality)
          </span>
        </div>
        <FullReportView initialCategory="personality" hideBanner={true} />
      </div>
    </div>
  );
}
