import React, { useState } from 'react';
import { 
  Sparkles, Compass, Brain, Flame, Award, Heart, DollarSign, Activity, Menu, X, BookOpen, RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';
import OverviewDashboard from './components/OverviewDashboard';
import AstrologyView from './components/AstrologyView';
import HumanDesignView from './components/HumanDesignView';
import EasternDestinyView from './components/EasternDestinyView';
import NameNumerologyView from './components/NameNumerologyView';
import RelationshipView from './components/RelationshipView';
import WealthCareerView from './components/WealthCareerView';
import HealthSpiritualityView from './components/HealthSpiritualityView';
import FullReportView from './components/FullReportView';

type TabType = 'overview' | 'fullreport' | 'astrology' | 'humandesign' | 'easterndestiny' | 'name' | 'love' | 'wealth' | 'spirituality';

interface QuoteItem {
  quote: string;
  source: string;
}

const ALL_QUOTES: QuoteItem[] = [
  { quote: "真正的自由，是擁有隨時能夠打破框架的底氣。", source: "太陽 & 上升雙子座" },
  { quote: "我的影響力，來自於我敢於發起別人不敢想像的改變。", source: "顯示者 (Manifestor) 主權" },
  { quote: "允許一切發生，並在其中提煉智慧。", source: "35-36 體驗與無常通道" },
  { quote: "王者不求許可，王者只做宣告。", source: "顯示者 (Manifestor) 主權" },
  { quote: "最完美的太陽，是懂得日落的。", source: "丙火日主 ✕ 能量蓄補" },
  { quote: "大腦在雲端衝浪，雙腳在泥土扎根。", source: "雙子星群 ✕ 金星金牛" },
  { quote: "用冷靜與理智的水，調和耀眼溫暖的烈日。", source: "八字五行調頻：喜水" },
  { quote: "不要在人群中透支借來的薦骨能量。", source: "空白薦骨 ✕ 能量隔離" },
  { quote: "你的善良必須帶點鋒芒，高貴的靈魂不容侵犯。", source: "月亮獅子 ✕ 天梁蔭星" },
  { quote: "把無形的靈性直覺，築成現實世界中極具質感的城堡。", source: "土星雙魚 ✕ 金牛美感" },
  { quote: "你不需要向所有人示弱，但你需要無條件地寬恕自己的不完美。", source: "第四宮火星凱龍合相" },
  { quote: "先處理心情，再處理事情，才是讓生活長久獲利的最強戰略。", source: "實用型 (Pragma) 愛情觀" },
  { quote: "去尋找大腦能與你共舞、大膽包容你所有傲嬌的靈魂對手。", source: "第七宮射手 ✕ 巨門昌曲" },
  { quote: "你的點子就是印鈔機，大膽為自己的腦力與品味標上高溢價。", source: "天機化祿 ✕ 辛金正財" },
  { quote: "做運籌帷幄的軍師，而非上陣流汗的步兵。", source: "四箭全左戰略型大腦" },
  { quote: "在寂靜的深海裡撈取靈感珍珠，然後用溫暖的光芒照亮世人。", source: "太陽 12 宮 ✕ 太陽化權" },
  { quote: "悶聲發大財，用優雅的姿態對消耗你的人事物優雅退場。", source: "卯宮空宮 ✕ 祿存防禦" },
  { quote: "生命本就是一場浩瀚的冒險，不要為了填補空虛而飢餓。", source: "基因天命 35 (飢餓➔冒險)" },
  { quote: "放下速度的執著，信任宇宙的節奏，精準發起。", source: "基因天命 5 (急躁➔耐心)" },
  { quote: "溫柔地擁抱內心那個焦慮的太陰，你的太陽才能綻放不刺眼的光芒。", source: "福德太陰化忌 ✕ 遷移太陽" },
  { quote: "你的優點是你的羽翼，你的黑暗面則是保護羽翼的雷達。", source: "全息陰影與防禦機制" },
  { quote: "與其在不確定的迷霧中焦慮，不如在當下的行動中尋找錨點。", source: "天機化權 ✕ 土星雙魚" },
  { quote: "每一次的自我懷疑，都是靈魂深處重新探究真理的開始。", source: "63 號基因天命：懷疑➔探究" },
  { quote: "將零散的想像力，點石成金為照亮未來的深刻啟示。", source: "64 號基因天命：困惑➔啟示" },
  { quote: "在獨處的寂靜中，你才能聽見屬於自己最高音軌的發起音頻。", source: "2/4 雙子顯示者之孤獨力" },
  { quote: "當你不再尋求外界的認可，整個宇宙都會開始為你轉動。", source: "命宮祿存 ✕ 自我穩固" },
  { quote: "愛是一場高品質的智力與心靈雙重共振，而非情緒的妥協。", source: "巨門昌曲 ✕ 雙子太陽" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const [selectedQuotes, setSelectedQuotes] = useState<QuoteItem[]>(() => {
    return [...ALL_QUOTES].sort(() => 0.5 - Math.random()).slice(0, 5);
  });
  const [animKey, setAnimKey] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const handleRotateQuotes = () => {
    setIsRotating(true);
    setAnimKey(prev => prev + 1);
    
    // Pick 5 unique random quotes
    const shuffled = [...ALL_QUOTES].sort(() => 0.5 - Math.random());
    setSelectedQuotes(shuffled.slice(0, 5));
    
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  const tabs = [
    { id: 'overview', name: '全息總覽', icon: Sparkles, color: 'text-indigo-400' },
    { id: 'fullreport', name: '全息天書報告', icon: BookOpen, color: 'text-amber-400' },
    { id: 'astrology', name: '西洋占星', icon: Compass, color: 'text-blue-400' },
    { id: 'humandesign', name: '人類圖全析', icon: Brain, color: 'text-rose-400' },
    { id: 'easterndestiny', name: '東方命理 (八字/紫微)', icon: Flame, color: 'text-amber-400' },
    { id: 'name', name: '五格姓名學', icon: Award, color: 'text-emerald-400' },
    { id: 'love', name: '親密關係藍圖', icon: Heart, color: 'text-rose-500' },
    { id: 'wealth', name: '財富與職場', icon: DollarSign, color: 'text-amber-300' },
    { id: 'spirituality', name: '身心靈與玄學', icon: Activity, color: 'text-teal-400' },
  ];

  const handleTabSelect = (tabId: TabType) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased font-sans">
      
      {/* Mobile Sticky Header */}
      <header className="md:hidden sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <span className="font-display font-black text-slate-100 tracking-tight text-sm uppercase">全息能量藍圖 ✦ BLUEPRINT</span>
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-slate-200 focus:outline-none"
          id="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-45 bg-slate-950/98 flex flex-col pt-24 px-8 space-y-6 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id as TabType)}
                  className={`flex items-center gap-4 py-3.5 px-4 rounded-xl text-sm font-black transition-all ${
                    activeTab === tab.id 
                      ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/10' 
                      : 'text-slate-400 hover:text-slate-300 bg-slate-900/40'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
          
          <div className="pt-6 border-t border-slate-800 space-y-4 overflow-y-auto max-h-[calc(100vh-420px)] scrollbar-none">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-amber-400 font-mono tracking-widest block uppercase">Daily Golden Sayings ✦ 能量金句</span>
              <button 
                onClick={handleRotateQuotes}
                disabled={isRotating}
                className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-amber-400 transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-1 text-[10px] font-mono"
              >
                <RefreshCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
                隨機更換
              </button>
            </div>
            
            <motion.div
              key={animKey}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-3"
            >
              {selectedQuotes.map((q, idx) => (
                <div key={idx} className="pl-3 border-l-2 border-amber-400/60">
                  <p className="text-xs text-slate-200 italic font-serif leading-relaxed">
                    「{q.quote}」
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">
                    ✦ {q.source}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex md:w-72 lg:w-80 flex-shrink-0 bg-slate-950 border-r border-slate-850 flex-col justify-between p-6 h-screen sticky top-0">
        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-340px)] pr-1 scrollbar-none">
          {/* Brand Seal in Bold Typography style */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
              </div>
              <div>
                <h1 className="font-display font-black text-slate-100 text-xl tracking-tighter leading-none">全息能量藍圖</h1>
                <p className="text-[10px] text-amber-400 font-mono tracking-widest uppercase mt-0.5">The Soul Blueprint</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-900/30 border-l-2 border-amber-400 border-y border-r border-slate-850">
              <span className="text-[9px] text-amber-400 font-mono tracking-wider block mb-1 uppercase">COSMIC IDENTITY</span>
              <p className="text-[11px] text-slate-300 leading-normal font-sans">
                顯示者 ✕ 太陽雙子 ✕ 丙火日主。極致思維大腦、渴望情緒平靜與物理落地的靈魂。
              </p>
            </div>
          </div>

          {/* Nav Items - Bold Brutalist style */}
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id as TabType)}
                  className={`w-full flex items-center gap-3.5 py-2.5 px-4 rounded-xl text-xs font-black tracking-wide transition-all ${
                    activeTab === tab.id 
                      ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/15' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 bg-slate-950 border border-transparent'
                  }`}
                  id={`tab-btn-${tab.id}`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Desktop Sidebar Footer quotes rotating */}
        <div className="space-y-4 pt-4 border-t border-slate-850">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono uppercase tracking-wider">
              <span className="flex items-center gap-1.5 font-bold">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                能量金句 ✦ 隨機指引
              </span>
              <button 
                onClick={handleRotateQuotes}
                disabled={isRotating}
                className="p-1 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-amber-400 transition-colors disabled:opacity-50 cursor-pointer"
                title="隨機換一批"
              >
                <RefreshCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
              </button>
            </div>
            
            <div className="relative min-h-[140px] overflow-hidden">
              <motion.div
                key={animKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-2.5"
              >
                {selectedQuotes.map((q, idx) => (
                  <div key={idx} className="group pl-2 border-l border-amber-400/50 hover:border-amber-400 transition-all">
                    <p className="text-[10px] text-slate-300 italic font-serif leading-relaxed group-hover:text-amber-200 transition-colors">
                      「{q.quote}」
                    </p>
                    <span className="text-[9px] text-slate-500 font-mono tracking-wider block mt-0.5">
                      ✦ {q.source}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="text-[9px] text-slate-600 font-mono uppercase tracking-widest">
            跨流派天賦系統 ✦ Vol. 2026
          </div>
        </div>
      </aside>

      {/* Main Content Area Container with shifting watermark background */}
      <div className="flex-grow relative overflow-hidden flex flex-col min-h-screen">
        {/* Background Decorative Text - Giant Brand Watermark */}
        <div className="absolute -top-12 -right-16 text-[15rem] md:text-[22rem] font-black text-slate-100/5 leading-none select-none z-0 pointer-events-none font-display uppercase tracking-tighter">
          {activeTab === 'overview' && 'SOUL'}
          {activeTab === 'fullreport' && 'REPORT'}
          {activeTab === 'astrology' && 'ASTRO'}
          {activeTab === 'humandesign' && 'HUMAN'}
          {activeTab === 'easterndestiny' && 'DESTINY'}
          {activeTab === 'name' && 'NAME'}
          {activeTab === 'love' && 'LOVE'}
          {activeTab === 'wealth' && 'WEALTH'}
          {activeTab === 'spirituality' && 'SPIRIT'}
        </div>

        {/* Scrollable content box */}
        <main className="relative z-10 flex-grow p-6 md:p-10 max-w-7xl mx-auto space-y-8 w-full overflow-y-auto">
          {activeTab === 'overview' && <OverviewDashboard onTabChange={(tab) => handleTabSelect(tab as TabType)} />}
          {activeTab === 'fullreport' && <FullReportView />}
          {activeTab === 'astrology' && <AstrologyView />}
          {activeTab === 'humandesign' && <HumanDesignView />}
          {activeTab === 'easterndestiny' && <EasternDestinyView />}
          {activeTab === 'name' && <NameNumerologyView />}
          {activeTab === 'love' && <RelationshipView />}
          {activeTab === 'wealth' && <WealthCareerView />}
          {activeTab === 'spirituality' && <HealthSpiritualityView />}
        </main>
      </div>

    </div>
  );
}
