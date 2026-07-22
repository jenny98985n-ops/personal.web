import React, { useState } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { 
  Sparkles, Brain, Flame, Zap, CheckCircle2, AlertCircle, 
  Compass, Heart, DollarSign, Activity, Eye, Shield, Award, HelpCircle,
  RefreshCw, Shuffle, Crown, TrendingUp, Users, ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import EnergyQuoteWidget from './EnergyQuoteWidget';

interface GoldenSaying {
  id: number;
  quote: string;
  source: string;
  category: 'manifestor' | 'bazi' | 'astrology' | 'relationship' | 'wealth' | 'spirituality';
}

const GOLDEN_SAYINGS: GoldenSaying[] = [
  { id: 1, quote: "王者不求許可，王者只做宣告。", source: "顯示者 (Manifestor) 主權", category: "manifestor" },
  { id: 2, quote: "最完美的太陽，是懂得日落的。", source: "丙火日主 ✕ 能量蓄補", category: "bazi" },
  { id: 3, quote: "大腦在雲端衝浪，雙腳在泥土扎根。", source: "雙子星群 ✕ 金星金牛", category: "astrology" },
  { id: 4, quote: "真正的自由，是擁有隨時能夠打破框架的底氣。", source: "太陽 & 上升雙子座", category: "astrology" },
  { id: 5, quote: "允許一切發生，並在其中提煉智慧。", source: "35-36 體驗與無常通道", category: "manifestor" },
  { id: 6, quote: "用冷靜與理智的水，調和耀眼溫暖的烈日。", source: "八字五行調頻：喜水", category: "spirituality" },
  { id: 7, quote: "不要在人群中透支借來的薦骨能量。", source: "空白薦骨 ✕ 能量隔離", category: "manifestor" },
  { id: 8, quote: "你的善良必須帶點鋒芒，高貴的靈魂不容侵犯。", source: "月亮獅子 ✕ 天梁蔭星", category: "astrology" },
  { id: 9, quote: "把無形的靈性直覺，築成現實世界中極具質感的城堡。", source: "土星雙魚 ✕ 金牛美感", category: "wealth" },
  { id: 10, quote: "你不需要向所有人示弱，但你需要無條件地寬恕自己的不完美。", source: "第四宮火星凱龍合相", category: "spirituality" },
  { id: 11, quote: "先處理心情，再處理事情，才是讓生活長久獲利的最強戰略。", source: "實用型 (Pragma) 愛情觀", category: "relationship" },
  { id: 12, quote: "去尋找大腦能與你共舞、大膽包容你所有傲嬌的靈魂對手。", source: "第七宮射手 ✕ 巨門昌曲", category: "relationship" },
  { id: 13, quote: "你的點子就是印鈔機，大膽為自己的腦力與品味標上高溢價。", source: "天機化祿 ✕ 辛金正財", category: "wealth" },
  { id: 14, quote: "做運籌帷幄的軍師，而非上陣流汗的步兵。", source: "四箭全左戰略型大腦", category: "wealth" },
  { id: 15, quote: "在寂靜的深海裡撈取靈感珍珠，然後用溫暖的光芒照亮世人。", source: "太陽 12 宮 ✕ 太陽化權", category: "spirituality" },
  { id: 16, quote: "悶聲發大財，用優雅的姿態對消耗你的人事物優雅退場。", source: "卯宮空宮 ✕ 祿存防禦", category: "wealth" },
  { id: 17, quote: "生命本就是一場浩瀚的冒險，不要為了填補空虛而飢餓。", source: "基因天命 35 (飢餓➔冒險)", category: "manifestor" },
  { id: 18, quote: "放下速度的執著，信任宇宙的節奏，精準發起。", source: "基因天命 5 (急躁➔耐心)", category: "manifestor" },
  { id: 19, quote: "溫柔地擁抱內心那個焦慮的太陰，你的太陽才能綻放不刺眼的光芒。", source: "福德太陰化忌 ✕ 遷移太陽", category: "bazi" },
  { id: 20, quote: "你的優點是你的羽翼，你的黑暗面則是保護羽翼的雷達。", source: "全息陰影與防禦機制", category: "spirituality" }
];

const getSayingIcon = (category: string) => {
  switch (category) {
    case 'manifestor': return <Zap className="w-4 h-4 text-amber-400" />;
    case 'bazi': return <Flame className="w-4 h-4 text-orange-400" />;
    case 'astrology': return <Compass className="w-4 h-4 text-blue-400" />;
    case 'relationship': return <Heart className="w-4 h-4 text-pink-400" />;
    case 'wealth': return <DollarSign className="w-4 h-4 text-emerald-400" />;
    case 'spirituality': return <Sparkles className="w-4 h-4 text-teal-400" />;
    default: return <Sparkles className="w-4 h-4 text-slate-400" />;
  }
};

interface Props {
  onTabChange: (tabId: string) => void;
}

export default function OverviewDashboard({ onTabChange }: Props) {
  const data = LAI_YI_CHIEH_DATA;
  const [activeTabRelation, setActiveTabRelation] = useState<'mind' | 'heart' | 'power'>('mind');
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleShuffleAll = () => {
    setIsSpinning(true);
    const indices: number[] = [];
    while (indices.length < 5) {
      const rand = Math.floor(Math.random() * GOLDEN_SAYINGS.length);
      if (!indices.includes(rand)) {
        indices.push(rand);
      }
    }
    setTimeout(() => {
      setActiveIndices(indices);
      setIsSpinning(false);
    }, 500);
  };

  const randomizeSingle = (slotIndex: number) => {
    setActiveIndices(prev => {
      const updated = [...prev];
      let rand = Math.floor(Math.random() * GOLDEN_SAYINGS.length);
      let attempts = 0;
      while (updated.includes(rand) && attempts < 100) {
        rand = Math.floor(Math.random() * GOLDEN_SAYINGS.length);
        attempts++;
      }
      updated[slotIndex] = rand;
      return updated;
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Mystical Header Banner in Bold Typography style */}
      <div className="relative overflow-hidden bg-slate-900/35 rounded-3xl p-8 md:p-12 border border-slate-850 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold text-amber-400 tracking-wider font-display uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            跨流派深度命理全息報告 / VOL. 2026
          </div>
          
          <div className="border-l-4 border-amber-400 pl-6 space-y-2">
            <h1 className="text-4xl md:text-7xl font-black text-slate-100 tracking-tighter leading-none">
              能量藍圖 <span className="text-amber-400 text-xl md:text-2xl tracking-widest uppercase block mt-2 font-light">The Soul Blueprint</span>
            </h1>
            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-mono">Manifestor 2/4 ✦ 太陽雙子 ✦ 月亮獅子 ✦ 丙火日主</p>
          </div>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            透過整合「西洋占星」、「人類圖」、「紫微斗數」、「姓名學」以及「八字」，
            透視一個極具爆發力、思維敏捷，同時又需要深刻情感共鳴與物理落地的獨特靈魂。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-850">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">出廠年份</span>
              <p className="text-xs md:text-sm font-bold text-amber-300">1995 年 (乙亥年/靛藍小孩)</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">核心處理器</span>
              <p className="text-xs md:text-sm font-bold text-slate-200">雙子座 ✕ 四箭全左</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">動力系統</span>
              <p className="text-xs md:text-sm font-bold text-slate-200">顯示者 ✕ 丙火日主</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">外觀與材質</span>
              <p className="text-xs md:text-sm font-bold text-emerald-300 font-display">金星金牛 (高奢材質)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 每日五句能量金句 (Daily 5 Golden Sayings) */}
      <div className="p-6 rounded-3xl bg-slate-900/35 border border-slate-850 shadow-2xl space-y-6 relative overflow-hidden" id="daily-golden-sayings-section">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              每日五句能量金句 ✦ 隨機解籤
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              為賴以婕量身定制的靈魂絮語。點擊整盤更換，或<span className="text-amber-400/90 font-bold">點擊單個卡片</span>單獨更換。
            </p>
          </div>
          
          <button
            onClick={handleShuffleAll}
            disabled={isSpinning}
            className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-500 disabled:opacity-50 transition-all rounded-xl shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
            整盤隨機更換
          </button>
        </div>

        {/* Five Golden Sayings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activeIndices.map((sayingIdx, slotIdx) => {
            const saying = GOLDEN_SAYINGS[sayingIdx];
            return (
              <div
                key={slotIdx}
                onClick={() => randomizeSingle(slotIdx)}
                className="group cursor-pointer relative p-5 rounded-2xl bg-slate-950 border border-slate-850 hover:border-amber-400/30 hover:bg-slate-900/20 transition-all duration-300 flex flex-col justify-between min-h-[175px] shadow-md select-none"
                id={`saying-card-slot-${slotIdx}`}
              >
                {/* Number Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-600 font-black">SLOT #0{slotIdx + 1}</span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800/80 group-hover:border-amber-400/20 transition-all">
                    {getSayingIcon(saying.category)}
                  </div>
                </div>

                {/* Saying Quote Body */}
                <div className="my-4">
                  <p className="text-xs md:text-[13px] font-semibold text-slate-200 group-hover:text-amber-300 leading-relaxed transition-colors tracking-tight">
                    「{saying.quote}」
                  </p>
                </div>

                {/* Sayings Source Label & Single Swap Indicator */}
                <div className="pt-2 border-t border-slate-900/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-slate-500 tracking-wider">
                    {saying.source}
                  </span>
                  
                  {/* Subtle single swap label */}
                  <span className="text-[9px] font-mono text-amber-400/0 group-hover:opacity-100 group-hover:text-amber-400/70 transition-all flex items-center gap-0.5">
                    <Shuffle className="w-2.5 h-2.5" />
                    單換
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categorized Holographic Systems Card Grid Section */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/20 border border-slate-850 shadow-2xl space-y-8">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850/80 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-100 flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-amber-400" />
              跨流派全息命理卡片式矩陣
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              依據「天賦核心」、「運勢節奏」、「人際互動」三大主軸整合各流派摘要資訊
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 self-start sm:self-auto">
            CATEGORIZED CARD GRID
          </span>
        </div>

        <div className="space-y-8">
          {/* GROUP 1: 天賦核心 (Core Talents & Personality) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black flex items-center gap-2 font-mono">
                <Crown className="w-4 h-4 text-amber-400" />
                維度一 ✦ 天賦核心 (CORE TALENTS & PERSONALITY)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Western Astrology Card */}
              <div 
                onClick={() => onTabChange('astrology')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-amber-400/60 shadow-lg hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-astrology"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:scale-110 transition-transform">
                      <Compass className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                      西洋占星
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-amber-300 transition-colors">
                      太陽與上升雙子 ✕ 月亮獅子
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">超級神經網絡</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">12宮隱秘天賦</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    雙子星群賦予極速學習與超頻邏輯，月亮獅子 3 宮擁有強烈的<strong>表達熱情與造王者氣場</strong>。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>查看西洋占星詳情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Human Design Card */}
              <div 
                onClick={() => onTabChange('humandesign')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-rose-400/60 shadow-lg hover:shadow-2xl hover:shadow-rose-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-hd"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-rose-400/5 rounded-full blur-2xl group-hover:bg-rose-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-rose-400/10 text-rose-400 border border-rose-400/20 group-hover:scale-110 transition-transform">
                      <Brain className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                      人類圖
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-rose-300 transition-colors">
                      顯示者 Manifestor ✕ 四箭全左
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-400/10 text-rose-300 border border-rose-400/20">獨立破局發起</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">極致戰略策劃</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    生來打破現狀、開創新局。配備<strong>四箭全左邏輯大腦</strong>，專注於頂層策略規劃與方向引領。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-rose-400 group-hover:text-rose-300">
                  <span>查看人類圖詳情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Ziwei Core Card */}
              <div 
                onClick={() => onTabChange('easterndestiny')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-teal-400/60 shadow-lg hover:shadow-2xl hover:shadow-teal-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-ziwei"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-teal-400/5 rounded-full blur-2xl group-hover:bg-teal-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-teal-400/10 text-teal-400 border border-teal-400/20 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      紫微斗數
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-teal-300 transition-colors">
                      命宮卯無主星 ✕ 對宮太陽天梁
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-400/10 text-teal-300 border border-teal-400/20">變色龍極致適應</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">軍師靈感源泉</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    無主星具備極高彈性與環境吸收力，藉由借對宮陽梁巨木能量，展現<strong>大智若愚與策略格局</strong>。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-teal-400 group-hover:text-teal-300">
                  <span>查看紫微命盤詳情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* GROUP 2: 運勢節奏 (Fortune & Life Rhythm) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-black flex items-center gap-2 font-mono">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                維度二 ✦ 運勢節奏 (FORTUNE & LIFE RHYTHM)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Bazi Card */}
              <div 
                onClick={() => onTabChange('easterndestiny')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-emerald-400/60 shadow-lg hover:shadow-2xl hover:shadow-emerald-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-bazi"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-400/5 rounded-full blur-2xl group-hover:bg-emerald-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:scale-110 transition-transform">
                      <Flame className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      八字格局
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-amber-300 transition-colors">
                      丙火日主 ✕ 月時雙透辛金正財
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">暖意璀璨太陽</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">高品味正財格</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    自帶耀眼丙火能量，丙辛相合化財，具備天然的<strong>高階美感商業眼光與穩健獲利手腕</strong>。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>查看八字與流年詳情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Ziwei Wealth Card */}
              <div 
                onClick={() => onTabChange('wealth')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-emerald-400/60 shadow-lg hover:shadow-2xl hover:shadow-emerald-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-wealth-ziwei"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-400/5 rounded-full blur-2xl group-hover:bg-emerald-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      財帛事業
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-emerald-300 transition-colors">
                      財帛宮天機化祿 ✕ 點子印鈔機
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">企劃變現天賦</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">智慧輕鬆聚財</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    靠智慧、企劃與頂層架構獲得豐厚回報。專注於<strong>策略發起與系統構建</strong>，避開無謂勞力損耗。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>查看財富事業佈局</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* HD Emotional Authority Card */}
              <div 
                onClick={() => onTabChange('humandesign')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-blue-400/60 shadow-lg hover:shadow-2xl hover:shadow-blue-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-hd-rhythm"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/5 rounded-full blur-2xl group-hover:bg-blue-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-400/10 text-blue-400 border border-blue-400/20 group-hover:scale-110 transition-transform">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      能量節奏
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-blue-300 transition-colors">
                      情緒權威 ✕ 72 小時冷卻法則
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-400/10 text-blue-300 border border-blue-400/20">情緒波浪衝浪</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">平靜確定算數</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    絕不在興奮或焦慮當下做承諾。等待<strong>情緒波浪平復後的清明冷酷理智</strong>，決策勝率近乎 100%。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300">
                  <span>查看情緒權威與冷卻艙</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* GROUP 3: 人際互動 (Interpersonal & Dynamics) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-rose-400/10 border border-rose-400/30 text-rose-400 text-xs font-black flex items-center gap-2 font-mono">
                <Users className="w-4 h-4 text-rose-400" />
                維度三 ✦ 人際互動 (INTERPERSONAL & DYNAMICS)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name Numerology Card */}
              <div 
                onClick={() => onTabChange('name')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-rose-400/60 shadow-lg hover:shadow-2xl hover:shadow-rose-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-name"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-rose-400/5 rounded-full blur-2xl group-hover:bg-rose-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-rose-400/10 text-rose-400 border border-rose-400/20 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      五格姓名
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-rose-300 transition-colors">
                      「賴以婕」總格 32 吉木
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-400/10 text-rose-300 border border-rose-400/20">春日花開之象</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">熟人貴人聚財</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    名字自帶春日溫和能量與強大人緣氣場。<strong>良好的人際口碑與貴人引薦</strong>是事業成功的加速器。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-rose-400 group-hover:text-rose-300">
                  <span>查看姓名學格局詳情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* HD 2/4 Role Card */}
              <div 
                onClick={() => onTabChange('humandesign')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-indigo-400/60 shadow-lg hover:shadow-2xl hover:shadow-indigo-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-hd-role"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-400/5 rounded-full blur-2xl group-hover:bg-indigo-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-indigo-400/10 text-indigo-400 border border-indigo-400/20 group-hover:scale-110 transition-transform">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      人生角色
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-indigo-300 transition-colors">
                      2/4 雙軌社交 (隱士 / 機會主義者)
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-400/10 text-indigo-300 border border-indigo-400/20">神聖獨處充電</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">熟人網絡圈層</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    需要<strong>神聖的獨處洞穴時間 (2爻)</strong>，同時好機會往往來自<strong>深厚信任的熟人圈層 (4爻)</strong>。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                  <span>查看 2/4 角色互動策略</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Astro Venus/Moon Card */}
              <div 
                onClick={() => onTabChange('love')}
                className="group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border border-slate-850 hover:border-pink-400/60 shadow-lg hover:shadow-2xl hover:shadow-pink-400/10 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                id="overview-card-love"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-pink-400/5 rounded-full blur-2xl group-hover:bg-pink-400/15 transition-all" />
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-pink-400/10 text-pink-400 border border-pink-400/20 group-hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                      情感品味
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-100 group-hover:text-pink-300 transition-colors">
                      金星金牛 ✕ 月亮獅子 3 宮
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-pink-400/10 text-pink-300 border border-pink-400/20">高奢實質感</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">智識大腦對手</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    鄙視廉價的畫大餅。重視<strong>實質行動、高質感審美體驗</strong>，與能進行智識深度交流的靈魂夥伴。
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-pink-400 group-hover:text-pink-300">
                  <span>查看情感與關係密碼</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Synthesized Energy Systems Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                跨流派全息共振與能量合成
              </h2>
              <p className="text-xs text-slate-400">當東方命格遇上西方星體，解鎖你的多維交互印記</p>
            </div>
            
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-850 self-start sm:self-auto">
              <button 
                onClick={() => setActiveTabRelation('mind')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${activeTabRelation === 'mind' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
              >
                心智思維 (雙子-四左)
              </button>
              <button 
                onClick={() => setActiveTabRelation('heart')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${activeTabRelation === 'heart' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
              >
                內在核心 (丙火-獅子)
              </button>
              <button 
                onClick={() => setActiveTabRelation('power')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${activeTabRelation === 'power' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
              >
                能量防禦
              </button>
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 min-h-[220px] flex flex-col justify-between">
            {activeTabRelation === 'mind' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-100">「超級神經網絡」— 雙子星群 ✕ 四箭全左</h4>
                    <p className="text-[11px] text-slate-500 font-mono">ASTROLOGY SUN & ASC GEMINI + HUMAN DESIGN QUAD LEFT</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  你的<strong>太陽與上升皆落雙子座</strong>，代表敏捷的思維與無窮的好奇心。這在人類圖中完美共振了你的<strong>「四箭全左」超級大腦</strong>——這是一個極度活躍、渴望結構、極具戰略眼光的超級神經系統。你天生就是一個極佳的策劃者和軍師，擅長用邏輯去組織龐雜的信息。
                </p>
                <div className="bg-amber-400/5 border border-amber-400/10 p-3 rounded-lg text-xs text-amber-300/90 leading-normal">
                  💡 <strong>整合指引：</strong> 不要把這股強大的大腦戰略力耗費在瑣碎的手工勞動上（因為你是薦骨空白的顯示者）。用大腦去規劃頂層邏輯或 AI 工作流，把執行外包出去，才是你的高勝率打法。
                </div>
              </div>
            )}

            {activeTabRelation === 'heart' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-100">「太陽女皇的光芒」— 丙火日主 ✕ 月亮獅子</h4>
                    <p className="text-[11px] text-slate-500 font-mono">BAZI BING FIRE + ASTROLOGY MOON LEO IN 3RD HOUSE</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  在八字中，你是溫暖璀璨的<strong>「丙火（太陽）」</strong>。這顆丙火與你西方星盤中落入第三宮的<strong>「月亮獅子座」</strong>形成了完美的世紀共振！這代表著你內心深處渴望發光、渴望被肯定，擁有天生的領袖魅力與源源不絕的熱情，且非常渴望自己的觀點能在大眾中得到掌聲。
                </p>
                <div className="bg-amber-400/5 border border-amber-400/10 p-3 rounded-lg text-xs text-amber-300/90 leading-normal">
                  💡 <strong>整合指引：</strong> 不要壓抑自己想要「被看見」的渴望。為自己建立一個能安全展現才華的發言台（如自媒體、主導專案），獲得正向的回饋，這將是你最重要的內在養分。
                </div>
              </div>
            )}

            {activeTabRelation === 'power' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-100">「共情海綿與能量護城河」— 紫微無主星 ✕ 薦骨中心空白</h4>
                    <p className="text-[11px] text-slate-500 font-mono">ZIWEI MAO EMPTY PALACE + HD UNDEFINED SACRAL CENTER</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  你的紫微命宮坐落於卯且<strong>「無主星」</strong>，完美呼應了你的雙子座特質——像海綿一樣，極易吸收別人的觀點與能量。而在人類圖中，你的<strong>薦骨中心是空白的</strong>。這意指你是一個天生的「超級敏感共情者（Empath）」，容易因為過度配合新環境 or 他人而累壞自己，迷失了方向。
                </p>
                <div className="bg-amber-400/5 border border-amber-400/10 p-3 rounded-lg text-xs text-amber-300/90 leading-normal">
                  💡 <strong>整合指引：</strong> 你必須建立明確的「不妥協邊界」和「物理落地淨化儀式」（如海鹽浴或抱樹接地）。當你想開始迎合別人時，默唸你的不妥協清單，守護你脆弱的能量護城河。
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Name Meaning Card (Bento Style) */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-400/10 text-amber-400 rounded-lg">
                <DollarSign className="w-4 h-4" />
              </span>
              <h3 className="text-base font-black text-slate-100">財富本質：點子印鈔機</h3>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              你的財帛宮坐落了<strong>「天機星」且逢「化祿」</strong>，這代表你擁有<strong>靠腦袋、企劃、行銷設計和發起專案</strong>輕鬆聚財的極強天賦。配合你八字中的「正財格」與西方「金星金牛座」，你的直覺和點子極富高階品味與商業變現潛力。
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>熟人引介 (人類圖 4 爻) 是最好的聚財管道</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>杜絕情緒性消費，強制實行 72 小時冷卻法則</span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-850 mt-4">
            <button 
              onClick={() => onTabChange('wealth')}
              className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-xs font-black text-slate-950 transition-all border border-transparent"
            >
              檢視完整財富與事業佈局 →
            </button>
          </div>
        </div>
      </div>

      {/* Energy Mode Dual-Track Quote Carousel Widget */}
      <EnergyQuoteWidget compact={false} />

      {/* User Manual Standalone Quick Link */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">獨立特別專欄</span>
            <h3 className="text-base font-black text-slate-100">Lai Yi Jie ✦ 能量使用說明書</h3>
          </div>
          <p className="text-xs text-slate-300">減阻尼 ✕ 抗內耗 ✕ 專屬官方原廠操作手冊（已設為獨立導覽選單）</p>
        </div>
        <button
          onClick={() => onTabChange('usermanual')}
          className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md flex-shrink-0"
        >
          <span>開啟完整使用說明書</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Core Advantages & Disadvantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Strengths */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-4">
          <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            核心天賦優勢 (Strengths)
          </h3>
          <div className="space-y-4 divide-y divide-slate-850">
            <div className="pt-2">
              <span className="text-xs font-black text-emerald-300 font-display px-2 py-0.5 rounded bg-emerald-500/10">雙子星群智力風暴</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                擁有頂級的「超級大腦」與變色龍般的適應力。源源不絕的絕妙點子，學習能力驚人，能夠瞬間吸收新知識並轉化系統。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-teal-300 font-display px-2 py-0.5 rounded bg-teal-500/10">顯示者的王者能量</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                獨立、破局，擁有強大的開創力與行動力。生來具備「發起」的引領者氣場，是改變現狀、顛覆陳舊體系的破局者。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">極致的品味與深情</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                丙火與月亮獅子的慷慨璀璨，結合金星金牛座的固定土象，帶給你對美、質感和生活享受的極致追求，對待認定的人極度深情專一。
              </p>
            </div>
          </div>
        </div>

        {/* Optimizations */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-4">
          <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            盲點剖析與優化策略 (Optimizations)
          </h3>
          <div className="space-y-4 divide-y divide-slate-850">
            <div className="pt-2">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">三分鐘熱度與迎合失界</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                <strong>💡 優化策略：</strong> 建立穩固的「外包系統」，將執行面交給別人生產，自己專注於策劃；在人際與職場中，提前劃定「不可退讓核心清單」作為能量錨點。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">孤立獨斷與憤怒爆發</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                <strong>💡 優化策略：</strong> 將「告知」當作你最強的公關與開路武器。告知他人你的行動和想法，而不是徵求許可。這能將你生命中的阻力 90% 轉化為助力。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">傲嬌固執與情緒消費</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                <strong>💡 優化策略：</strong> 在親密關係中練習「坦承脆弱」（學會放下獅子的傲嬌面子）；在財務支配上，嚴格執行大筆開支 72 小時冷卻期。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Guided Action Steps (Action Plan) */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-slate-850 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-100">專屬你的生活與心靈實踐行動指南</h3>
            <p className="text-xs text-slate-400 font-sans">請將這些法則融入日常，逐步開啟你的能量最大化模式</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">1</span>
              停、看、聽、說 (HD權威)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              重大決定絕不能在情緒的高點或低點下定論。給自己<strong>至少3天緩衝期</strong>，當情緒歸於平靜後，那個不帶衝動的答案才是你最真實的聲音。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">2</span>
              感情中的「告知」藝術
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              為避免伴侶因你「突然需要縮回洞穴」而不安，請提前大方告知：<strong>「我這週末想一個人看書充電，是我的身體充電需要，不是因為不愛喔！」</strong>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">3</span>
              建立「不妥協清單」
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              紫微無主星的你極易隨人搖擺。請寫下 <strong>絕對不退讓的關係與生活原則</strong>，在被外界拉扯時默念，像錨一樣把你的靈魂穩固在原地。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">4</span>
              為心靈打造「發言台」
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              月亮獅子落在第三宮，渴望表達和掌聲。去創辦付費社群、寫自媒體或主導極具質感的專案，<strong>理直氣壯地大膽開價</strong>，大放異彩！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
