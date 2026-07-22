import React, { useState } from 'react';
import { 
  Sparkles, Zap, CheckCircle2, ArrowRight, Lightbulb, ChevronDown, ChevronUp, Star, Bookmark,
  BarChart3, LayoutGrid, ShieldAlert, ArrowUpRight, Cpu, Target, Compass
} from 'lucide-react';

export interface KeyPointItem {
  icon?: React.ComponentType<{ className?: string }>;
  tag: string;
  tagColor?: 'amber' | 'emerald' | 'indigo' | 'rose' | 'purple' | 'blue';
  title: string;
  subtitle?: string;
  summary: string;
  actionAdvice?: string;
  // Optional graphic attributes for diagram rendering
  flowSteps?: { label: string; detail: string }[];
  metricScore?: number;
  metricLabel?: string;
}

interface CoreKeyPointsSummaryProps {
  domainName: string;
  title?: string;
  subtitle?: string;
  themeColor?: 'amber' | 'emerald' | 'indigo' | 'rose' | 'purple' | 'blue';
  items: KeyPointItem[];
}

export default function CoreKeyPointsSummary({
  domainName,
  title = "核心天賦與關鍵特質懶人包",
  subtitle = "專為快讀設計！3 分鐘快速掌握本分科的核心重點，再進入下方深度解析。",
  themeColor = 'amber',
  items
}: CoreKeyPointsSummaryProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'card' | 'diagram'>('diagram');

  const getThemeStyles = () => {
    switch (themeColor) {
      case 'emerald':
        return {
          border: 'border-emerald-500/30',
          bgGlow: 'bg-emerald-500/5',
          headerBadge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
          titleColor: 'text-emerald-300',
          accentBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          barColor: 'bg-emerald-400',
        };
      case 'indigo':
        return {
          border: 'border-indigo-500/30',
          bgGlow: 'bg-indigo-500/5',
          headerBadge: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
          titleColor: 'text-indigo-300',
          accentBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
          barColor: 'bg-indigo-400',
        };
      case 'rose':
        return {
          border: 'border-rose-500/30',
          bgGlow: 'bg-rose-500/5',
          headerBadge: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
          titleColor: 'text-rose-300',
          accentBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
          barColor: 'bg-rose-400',
        };
      case 'purple':
        return {
          border: 'border-purple-500/30',
          bgGlow: 'bg-purple-500/5',
          headerBadge: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
          titleColor: 'text-purple-300',
          accentBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          barColor: 'bg-purple-400',
        };
      case 'blue':
        return {
          border: 'border-blue-500/30',
          bgGlow: 'bg-blue-500/5',
          headerBadge: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
          titleColor: 'text-blue-300',
          accentBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          barColor: 'bg-blue-400',
        };
      default: // amber
        return {
          border: 'border-amber-500/30',
          bgGlow: 'bg-amber-500/5',
          headerBadge: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
          titleColor: 'text-amber-300',
          accentBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          barColor: 'bg-amber-400',
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`p-5 md:p-6 rounded-3xl bg-slate-900/90 border ${styles.border} shadow-2xl relative overflow-hidden space-y-4`}>
      {/* Glow Background */}
      <div className={`absolute top-0 right-0 w-72 h-72 ${styles.bgGlow} rounded-full blur-3xl pointer-events-none`} />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl ${styles.accentBg} flex items-center justify-center shrink-0 shadow-sm`}>
            <Zap className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${styles.headerBadge}`}>
                {domainName} ✦ 精華圖解速讀
              </span>
              <h3 className="text-sm font-black text-slate-100 tracking-tight">
                {title}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* View Mode & Expand Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {isExpanded && (
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('diagram')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'diagram'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>圖解模式</span>
              </button>
              <button
                onClick={() => setViewMode('card')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'card'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>卡片清單</span>
              </button>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 hover:text-slate-100 transition-all shrink-0"
          >
            {isExpanded ? (
              <>
                <span>收合</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>展開 3分鐘懶人包</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid of Key Points */}
      {isExpanded && (
        <div className="space-y-4 pt-1 relative z-10 animate-fade-in">
          {viewMode === 'diagram' ? (
            /* 📊 圖解模式 (Visual Diagram Mode) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item, idx) => {
                const Icon = item.icon || Sparkles;
                const score = item.metricScore || (95 - idx * 3);
                const scoreLabel = item.metricLabel || "頻率強度";

                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-amber-400/40 transition-all space-y-3 relative overflow-hidden group shadow-lg"
                  >
                    {/* Header Tag & Score Bar */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                            {item.tag}
                          </span>
                          <h4 className="text-xs font-black text-slate-100 group-hover:text-amber-300 transition-colors">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-mono text-slate-400 block">
                          {scoreLabel}
                        </span>
                        <span className="text-xs font-black font-mono text-amber-300">
                          {score}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Visual Indicator */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div 
                        className={`h-full ${styles.barColor} rounded-full transition-all duration-500`}
                        style={{ width: `${score}%` }}
                      />
                    </div>

                    {/* Visual Flow Graphic Diagram (原廠天賦 ➔ 作用機制 ➔ 高階產出) */}
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-amber-400" />
                        <span>能量轉化圖解 (Energy Flow)</span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 items-center text-center">
                        {/* Step 1: 原廠設定 */}
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800/80">
                          <span className="text-[9px] font-mono text-slate-500 block">❶ 天賦基因</span>
                          <span className="text-[11px] font-black text-amber-300 line-clamp-1">
                            {item.tag.split(':')[1] || item.tag}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="flex flex-col items-center justify-center text-slate-600">
                          <ArrowRight className="w-4 h-4 text-amber-400 animate-pulse" />
                        </div>

                        {/* Step 3: 高階表現 */}
                        <div className="p-1.5 rounded-lg bg-slate-950 border border-amber-400/20">
                          <span className="text-[9px] font-mono text-emerald-400 block">❷ 完美展現</span>
                          <span className="text-[11px] font-black text-slate-100 line-clamp-1">
                            {item.subtitle || "發揮極致"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    {/* Action Advice Callout */}
                    {item.actionAdvice && (
                      <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-xs leading-relaxed flex items-start gap-2.5 mt-1">
                        <Target className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-800 dark:text-amber-300 block text-xs font-bold font-mono tracking-wide mb-0.5">
                            關鍵破局行動：
                          </strong>
                          <span className="text-slate-900 dark:text-amber-100 font-medium">
                            {item.actionAdvice}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* 📋 標準卡片模式 (Standard Card List) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {items.map((item, idx) => {
                const Icon = item.icon || Sparkles;

                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3 group"
                  >
                    <div className="space-y-2">
                      {/* Top Tag & Title */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-amber-300 flex items-center gap-1">
                          <Icon className="w-3 h-3 text-amber-400" />
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          POINT #{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs font-black text-slate-100 group-hover:text-amber-300 transition-colors flex items-center gap-1">
                          {item.title}
                        </h4>
                        {item.subtitle && (
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Summary Text */}
                      <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1 border-t border-slate-800/60">
                        {item.summary}
                      </p>
                    </div>

                    {/* Action Advice (if available) */}
                    {item.actionAdvice && (
                      <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 text-xs leading-relaxed flex items-start gap-2 mt-1">
                        <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-800 dark:text-amber-300 font-bold block mb-0.5">行動指南：</strong>
                          <span className="text-slate-900 dark:text-amber-100 font-medium">{item.actionAdvice}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

