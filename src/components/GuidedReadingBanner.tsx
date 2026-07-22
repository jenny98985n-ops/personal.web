import React, { useState } from 'react';
import { 
  Compass, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, BookOpenCheck, 
  BookOpen, Brain, Layers, HelpCircle, ChevronRight, Bookmark, Play
} from 'lucide-react';

export type TabType = 'overview' | 'usermanual' | 'fullreport' | 'astrology' | 'humandesign' | 'easterndestiny' | 'name' | 'love' | 'wealth' | 'spirituality';

interface GuidedReadingBannerProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  guidedMode: boolean;
  setGuidedMode: (mode: boolean) => void;
}

export const READING_STEPS = [
  {
    step: 1,
    id: 'overview' as TabType,
    level: '第一階・入門總覽',
    title: '全息能量總覽',
    time: '約 3 分鐘',
    tag: '初階觀念',
    color: 'emerald',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    btnBg: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400',
    description: '從四大核心天賦、靈魂金句與四極頻率入手，快速掌握個人全貌，不迷失在細節中。'
  },
  {
    step: 2,
    id: 'usermanual' as TabType,
    level: '第二階・行動手冊',
    title: '能量使用說明書',
    time: '約 5 分鐘',
    tag: '實用操作',
    color: 'amber',
    badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    btnBg: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
    description: '學習三大面貌切換、72小時斷聯 recharge 機制、相處避坑地雷與相處須知。'
  },
  {
    step: 3,
    id: 'humandesign' as TabType, // Default domain tab
    level: '第三階・分科精讀',
    title: '領域主題深度剖析',
    time: '各 3-5 分鐘',
    tag: '專題破解',
    color: 'indigo',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    btnBg: 'bg-indigo-500 text-white hover:bg-indigo-400',
    description: '依你當前關注的議題，選擇西洋占星、人類圖、東方命理、姓名學、親密關係或財富身心靈。',
    subTabs: [
      { id: 'astrology', name: '西洋占星' },
      { id: 'humandesign', name: '人類圖' },
      { id: 'easterndestiny', name: '八字紫微' },
      { id: 'name', name: '姓名學' },
      { id: 'love', name: '親密關係' },
      { id: 'wealth', name: '財富職場' },
      { id: 'spirituality', name: '身心靈' },
    ]
  },
  {
    step: 4,
    id: 'fullreport' as TabType,
    level: '第四階・終極天書',
    title: '全息天書萬字報告',
    time: '深度研讀',
    tag: '高階研究',
    color: 'purple',
    badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    btnBg: 'bg-purple-500 text-white hover:bg-purple-400',
    description: '跨流派完全合參報告，萬字詳盡條目，適合想要沉浸式一字不漏完整研讀的深度讀者。'
  }
];

export default function GuidedReadingBanner({
  activeTab,
  onSelectTab,
  guidedMode,
  setGuidedMode
}: GuidedReadingBannerProps) {
  // Determine current step based on activeTab
  let currentStepIndex = 0;
  if (activeTab === 'overview') currentStepIndex = 0;
  else if (activeTab === 'usermanual') currentStepIndex = 1;
  else if (activeTab === 'fullreport') currentStepIndex = 3;
  else currentStepIndex = 2; // any sub domain

  const currentStepInfo = READING_STEPS[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex < READING_STEPS.length - 1) {
      const nextStep = READING_STEPS[currentStepIndex + 1];
      onSelectTab(nextStep.id);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      const prevStep = READING_STEPS[currentStepIndex - 1];
      onSelectTab(prevStep.id);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4 mb-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-black text-slate-100 tracking-tight">
                由淺入深 ✦ 漸進式閱讀導航條
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
                {guidedMode ? '導讀引導模式中' : '自由瀏覽模式'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              內容豐富龐大，建議遵循「4 大階梯」循序漸進閱讀，避免資訊超載
            </p>
          </div>
        </div>

        {/* Toggle Guided Mode Button */}
        <button
          onClick={() => setGuidedMode(!guidedMode)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border shrink-0 flex items-center gap-1.5 ${
            guidedMode
              ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20'
              : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          {guidedMode ? '切換為自由隨意瀏覽' : '開啟「由淺入深」導讀模式'}
        </button>
      </div>

      {/* Steps Progress Indicator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {READING_STEPS.map((s, idx) => {
          const isActive = currentStepIndex === idx;
          const isPassed = currentStepIndex > idx;

          return (
            <button
              key={s.step}
              onClick={() => onSelectTab(s.id)}
              className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between min-h-[64px] ${
                isActive
                  ? 'bg-slate-950 border-amber-400 shadow-lg shadow-amber-400/10'
                  : isPassed
                  ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-90'
                  : 'bg-slate-950/30 border-slate-900 hover:border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${s.badgeBg}`}>
                  階梯 {s.step}
                </span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                {isActive && <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />}
              </div>

              <div>
                <span className={`text-xs font-black block mt-1 ${isActive ? 'text-amber-300' : 'text-slate-300'}`}>
                  {s.level.split('・')[1]}
                </span>
                <span className="text-[10px] text-slate-500 block font-mono">{s.time}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details & Action Footer */}
      {guidedMode && (
        <div className="bg-slate-950 border border-slate-850 rounded-xl p-3.5 space-y-3 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-400 font-mono">
                  CURRENT: {currentStepInfo.level}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ({currentStepInfo.tag})
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                💡 <strong className="text-slate-100">{currentStepInfo.title}導讀：</strong>
                {currentStepInfo.description}
              </p>
            </div>

            {/* Prev / Next Step Controls */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
              <button
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 disabled:opacity-40 hover:bg-slate-800 flex items-center gap-1 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                上一階
              </button>

              <button
                onClick={handleNextStep}
                disabled={currentStepIndex === READING_STEPS.length - 1}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md transition-all ${
                  currentStepIndex === READING_STEPS.length - 1
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                }`}
              >
                <span>下一階：{currentStepIndex < READING_STEPS.length - 1 ? READING_STEPS[currentStepIndex + 1].level.split('・')[1] : '已達終點'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* If step 3, show sub domain navigation bar */}
          {currentStepIndex === 2 && currentStepInfo.subTabs && (
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[10px] text-slate-400 block mb-2 font-mono">
                🔍 第三階分科專題：請選擇你最關心的主題自由點擊深研
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentStepInfo.subTabs.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => onSelectTab(sub.id as TabType)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                      activeTab === sub.id
                        ? 'bg-indigo-500 text-white border-indigo-400 shadow-sm'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
