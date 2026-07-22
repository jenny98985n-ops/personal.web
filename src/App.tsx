import React, { useState, lazy, Suspense } from 'react';
import { 
  Sparkles, Compass, Brain, Flame, Award, Heart, DollarSign, Activity, Menu, X, BookOpen, Loader2
} from 'lucide-react';

const OverviewDashboard = lazy(() => import('./components/OverviewDashboard'));
const AstrologyView = lazy(() => import('./components/AstrologyView'));
const HumanDesignView = lazy(() => import('./components/HumanDesignView'));
const EasternDestinyView = lazy(() => import('./components/EasternDestinyView'));
const NameNumerologyView = lazy(() => import('./components/NameNumerologyView'));
const RelationshipView = lazy(() => import('./components/RelationshipView'));
const WealthCareerView = lazy(() => import('./components/WealthCareerView'));
const HealthSpiritualityView = lazy(() => import('./components/HealthSpiritualityView'));
const FullReportView = lazy(() => import('./components/FullReportView'));

type TabType = 'overview' | 'fullreport' | 'astrology' | 'humandesign' | 'easterndestiny' | 'name' | 'love' | 'wealth' | 'spirituality';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex md:w-72 lg:w-80 flex-shrink-0 bg-slate-950 border-r border-slate-850 flex-col justify-between p-6 h-screen sticky top-0">
        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-120px)] pr-1 scrollbar-none">
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

        {/* Desktop Sidebar Footer */}
        <div className="pt-4 border-t border-slate-850">
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
          <Suspense fallback={
            <div className="flex items-center justify-center py-20 gap-3 text-slate-400 font-mono text-sm">
              <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
              <span>載入中...</span>
            </div>
          }>
            {activeTab === 'overview' && <OverviewDashboard onTabChange={(tab) => handleTabSelect(tab as TabType)} />}
            {activeTab === 'fullreport' && <FullReportView />}
            {activeTab === 'astrology' && <AstrologyView />}
            {activeTab === 'humandesign' && <HumanDesignView />}
            {activeTab === 'easterndestiny' && <EasternDestinyView />}
            {activeTab === 'name' && <NameNumerologyView />}
            {activeTab === 'love' && <RelationshipView />}
            {activeTab === 'wealth' && <WealthCareerView />}
            {activeTab === 'spirituality' && <HealthSpiritualityView />}
          </Suspense>
        </main>
      </div>

    </div>
  );
}
