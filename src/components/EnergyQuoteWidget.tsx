import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Crown, Ghost, RefreshCw, ChevronLeft, ChevronRight, Zap, Moon } from 'lucide-react';

interface Quote {
  id: number;
  mode: 'queen' | 'hermit';
  text: string;
  source: string;
  tag: string;
}

const QUOTES: Quote[] = [
  // Queen / Manifestor Mode Quotes
  {
    id: 1,
    mode: 'queen',
    text: '「告知不是請示，告知是劃定能量邊界，宣告新局的開始。」',
    source: '人類圖 ✕ 顯示者宣告指南',
    tag: '告知邊界'
  },
  {
    id: 2,
    mode: 'queen',
    text: '「妳生來不是為了當步兵，而是當引領方向的造王者。」',
    source: '紫微陽梁 ✕ 月獅子三宮',
    tag: '造王者氣場'
  },
  {
    id: 3,
    mode: 'queen',
    text: '「停止等待許可，妳就是權威本身，勇敢發起屬於妳的變革。」',
    source: '顯示者發起者密碼',
    tag: '打破現狀'
  },
  {
    id: 4,
    mode: 'queen',
    text: '「大腦用於策略，直覺用於發起，將重複執行的細節優雅外包。」',
    source: '四箭全左 ✕ 策略軍師',
    tag: '頂層架構'
  },
  {
    id: 5,
    mode: 'queen',
    text: '「丙火太陽的耀眼，不需要向任何人道歉或收斂光芒。」',
    source: '八字丙火 ✕ 璀璨本質',
    tag: '自信綻放'
  },

  // Hermit / Recharge Mode Quotes
  {
    id: 6,
    mode: 'hermit',
    text: '「斷聯與獨處是正常的能量代謝，並非故障，這是神聖的充電。」',
    source: '人類圖 2/4 角色 ✕ 12宮隱士',
    tag: '神聖洞穴'
  },
  {
    id: 7,
    mode: 'hermit',
    text: '「今天什麼都不做也完全沒有關係，妳的價值無需用勞作來證明。」',
    source: '空白薦骨 ✕ 抗內耗特效藥',
    tag: '擺爛特權'
  },
  {
    id: 8,
    mode: 'hermit',
    text: '「關閉資訊雜訊，讓過載的神經系統在木質調香氛與安靜中釋放。」',
    source: '高神經質 ✕ 物理斷電法',
    tag: '物理接地'
  },
  {
    id: 9,
    mode: 'hermit',
    text: '「給予自己 72 小時的情緒冷卻期，待風浪平息，答案自然浮現。」',
    source: '情緒中心權威 ✕ 冷卻法則',
    tag: '冷卻平靜'
  },
  {
    id: 10,
    mode: 'hermit',
    text: '「金星金牛需要極致的舒適感，給予身體最好的照顧與深層睡眠。」',
    source: '金星金牛 ✕ 身心滋養',
    tag: '高奢滋養'
  }
];

interface EnergyQuoteWidgetProps {
  compact?: boolean; // For sidebar vs full card
}

export default function EnergyQuoteWidget({ compact = false }: EnergyQuoteWidgetProps) {
  const [activeMode, setActiveMode] = useState<'queen' | 'hermit'>('queen');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter quotes based on current mode
  const currentQuotes = QUOTES.filter(q => q.mode === activeMode);

  // Reset index when mode changes
  useEffect(() => {
    setQuoteIndex(0);
  }, [activeMode]);

  // Auto-rotate timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % currentQuotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentQuotes.length]);

  const nextQuote = () => {
    setQuoteIndex(prev => (prev + 1) % currentQuotes.length);
  };

  const prevQuote = () => {
    setQuoteIndex(prev => (prev - 1 + currentQuotes.length) % currentQuotes.length);
  };

  const currentQuote = currentQuotes[quoteIndex] || currentQuotes[0];

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        activeMode === 'queen' 
          ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border-amber-400/30 shadow-lg shadow-amber-400/5' 
          : 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border-indigo-400/30 shadow-lg shadow-indigo-400/5'
      } ${compact ? 'p-3.5' : 'p-5 md:p-6'}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      id="energy-quote-widget"
    >
      {/* Background glow orb */}
      <div 
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-all duration-700 pointer-events-none ${
          activeMode === 'queen' ? 'bg-amber-400/15' : 'bg-indigo-400/15'
        }`} 
      />

      {/* Top Bar: Mode Selector Switch */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full animate-ping ${activeMode === 'queen' ? 'bg-amber-400' : 'bg-indigo-400'}`} />
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            {compact ? '能量調頻' : '能量模式雙軌金句 ✦ ENERGY TUNE'}
          </span>
        </div>

        {/* Mode Toggle Switch */}
        <div className="flex items-center bg-slate-950/80 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveMode('queen')}
            className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
              activeMode === 'queen' 
                ? 'bg-amber-400 text-slate-950 shadow-sm' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
            title="開啓女王發起模式"
          >
            <Crown className="w-3 h-3" />
            <span className={compact ? 'hidden sm:inline' : 'inline'}>女王</span>
          </button>

          <button
            onClick={() => setActiveMode('hermit')}
            className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
              activeMode === 'hermit' 
                ? 'bg-indigo-400 text-slate-950 shadow-sm' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
            title="開啓隱士修復模式"
          >
            <Ghost className="w-3 h-3" />
            <span className={compact ? 'hidden sm:inline' : 'inline'}>隱士</span>
          </button>
        </div>
      </div>

      {/* Quote Display Area with Smooth AnimatePresence */}
      <div className="relative min-h-[72px] flex flex-col justify-between space-y-2 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMode}-${quoteIndex}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="space-y-1.5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                activeMode === 'queen'
                  ? 'bg-amber-400/10 text-amber-300 border-amber-400/20'
                  : 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20'
              }`}>
                #{currentQuote.tag}
              </span>
              <span className="text-[9px] font-mono text-slate-500">
                {quoteIndex + 1} / {currentQuotes.length}
              </span>
            </div>

            <p className={`font-bold leading-relaxed font-display text-slate-100 ${
              compact ? 'text-xs line-clamp-2' : 'text-xs sm:text-sm'
            }`}>
              {currentQuote.text}
            </p>

            <p className="text-[10px] text-slate-400 font-mono italic flex items-center gap-1 pt-0.5">
              <Sparkles className="w-2.5 h-2.5 text-amber-400/80" />
              {currentQuote.source}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-900/80 text-[10px] font-mono text-slate-500 relative z-10">
        <div className="flex items-center gap-1 text-slate-500">
          <Zap className={`w-3 h-3 ${activeMode === 'queen' ? 'text-amber-400' : 'text-indigo-400'}`} />
          <span>{activeMode === 'queen' ? '發起動能' : '修復儲備'}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={prevQuote}
            className="p-1 rounded bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-850 transition-colors cursor-pointer"
            title="上一條金句"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button
            onClick={nextQuote}
            className="p-1 rounded bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-850 transition-colors cursor-pointer"
            title="下一條金句"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
