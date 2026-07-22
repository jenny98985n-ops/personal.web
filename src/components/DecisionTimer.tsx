import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, AlertTriangle, Check, X, Shield, Sparkles, HelpCircle, ArrowRight,
  Heart, DollarSign, Brain, RefreshCw, Trash2, Hourglass, Plus, Calendar,
  CheckCircle2, Info, Moon, Play, Pause, FastForward
} from 'lucide-react';

interface ReflectionAnswers {
  emotionalClarity: boolean;
  informedOthers: boolean;
  qualityChecked: boolean;
  boundaryChecked: boolean;
}

interface Decision {
  id: string;
  title: string;
  category: 'wealth' | 'career' | 'relationship' | 'spirituality' | 'other';
  notes: string;
  createdAt: number;
  targetAt: number;
  status: 'cooling' | 'completed' | 'confirmed' | 'dismissed';
  reflections: ReflectionAnswers;
  outcomeNotes?: string;
  isTestMode?: boolean;
}

const CATEGORIES = [
  { id: 'wealth', name: '財務與大筆消費', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: DollarSign },
  { id: 'career', name: '事業與重大發起', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: Brain },
  { id: 'relationship', name: '親密關係與社交', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', icon: Heart },
  { id: 'spirituality', name: '身心靈與能量保養', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20', icon: Shield },
  { id: 'other', name: '其他生活決策', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', icon: CompassIcon },
];

function CompassIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export default function DecisionTimer() {
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(Date.now());
  const [outcomeNotes, setOutcomeNotes] = useState('');

  // Save/Load to LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('soul_blueprint_decisions');
    if (saved) {
      try {
        setDecisions(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading decisions', e);
      }
    }
  }, []);

  const saveDecisions = (newDecisions: Decision[]) => {
    setDecisions(newDecisions);
    localStorage.setItem('soul_blueprint_decisions', JSON.stringify(newDecisions));
  };

  // Timer Tick
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
      
      // Auto-check if any decision completed its cooling time
      let updated = false;
      const nextDecisions = decisions.map(d => {
        if (d.status === 'cooling' && Date.now() >= d.targetAt) {
          updated = true;
          return { ...d, status: 'completed' as const };
        }
        return d;
      });

      if (updated) {
        saveDecisions(nextDecisions);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [decisions]);

  const handleToggleReflection = (decisionId: string, key: keyof ReflectionAnswers) => {
    const next = decisions.map(d => {
      if (d.id === decisionId) {
        const nextReflections = {
          ...d.reflections,
          [key]: !d.reflections[key]
        };
        return { ...d, reflections: nextReflections };
      }
      return d;
    });
    saveDecisions(next);
  };

  const handleFinalizeDecision = (decisionId: string, action: 'confirmed' | 'dismissed') => {
    const next = decisions.map(d => {
      if (d.id === decisionId) {
        return {
          ...d,
          status: action,
          outcomeNotes: outcomeNotes.trim() || undefined
        };
      }
      return d;
    });
    saveDecisions(next);
    setOutcomeNotes('');
    setExpandedId(null);
  };

  const handleDeleteDecision = (decisionId: string) => {
    if (confirm('確定要刪除這筆決策記錄嗎？')) {
      const next = decisions.filter(d => d.id !== decisionId);
      saveDecisions(next);
      if (expandedId === decisionId) setExpandedId(null);
    }
  };

  const getTimerRemaining = (decision: Decision) => {
    const total = decision.targetAt - currentTime;
    if (total <= 0) return { hours: 0, minutes: 0, seconds: 0, progress: 100 };

    const originalDuration = decision.isTestMode ? 3 * 60 * 1000 : 72 * 60 * 60 * 1000;
    const elapsed = originalDuration - total;
    const progress = Math.min(100, Math.max(0, (elapsed / originalDuration) * 100));

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / (1000 * 60 * 60));

    return { hours, minutes, seconds, progress };
  };

  const activeDecisions = decisions.filter(d => d.status === 'cooling' || d.status === 'completed');
  const historyDecisions = decisions.filter(d => d.status === 'confirmed' || d.status === 'dismissed');

  return (
    <div className="space-y-6" id="decision-timer-widget">
      {/* Widget Header Banner */}
      <div className="relative overflow-hidden p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-850 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[10px] font-mono font-bold text-amber-400 tracking-wider">
              <Hourglass className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              DEEP ASTRO-HD STRATEGY
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-100 flex items-center gap-2">
              72小時靈魂決策冷卻艙 <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">Decision Cooling Cabin</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              這是為 <strong>太陽/上升雙子群 ✕ 情緒權威顯示者</strong> 量身打造的決策定錨系統。
              透過強制執行 <strong>72小時冷卻法則</strong>，幫助你降溫雙子座的「三分鐘熱度」與情緒波浪的衝動，在完全的「情緒清明」中發起正確的顯化。
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-850 self-start">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'active' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
            >
              進行中 ({activeDecisions.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'history' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
            >
              歷史決策 ({historyDecisions.length})
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
            {activeTab === 'active' ? (
              <motion.div
                key="active"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {activeDecisions.length === 0 ? (
                  <div className="p-12 text-center rounded-2xl bg-slate-900/10 border border-slate-850 flex flex-col items-center justify-center space-y-3">
                    <Clock className="w-10 h-10 text-slate-700 animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-slate-400">目前沒有進行中的冷卻決策</p>
                      <p className="text-[10px] text-slate-600 mt-1 max-w-xs mx-auto">
                        為你的重大支出、專案承諾或社交答覆設定一個 72 小時倒數，保護你的能量邊界。
                      </p>
                    </div>
                  </div>
                ) : (
                  activeDecisions.map(d => {
                    const matchedCat = CATEGORIES.find(c => c.id === d.category);
                    const CatIcon = matchedCat?.icon || Info;
                    const { hours, minutes, seconds, progress } = getTimerRemaining(d);
                    const isExpanded = expandedId === d.id;
                    const isCoolingCompleted = d.status === 'completed' || hours === 0 && minutes === 0 && seconds === 0;

                    return (
                      <div
                        key={d.id}
                        className={`p-5 rounded-2xl border transition-all ${isCoolingCompleted ? 'bg-slate-900/60 border-amber-400/40' : 'bg-slate-900/30 border-slate-850'}`}
                      >
                        {/* Summary Header */}
                        <div className="flex items-start justify-between gap-4 cursor-pointer" onClick={() => setExpandedId(isExpanded ? null : d.id)}>
                          <div className="space-y-1.5 flex-grow">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded border ${matchedCat?.bg} ${matchedCat?.color} ${matchedCat?.border}`}>
                                <CatIcon className="w-3 h-3" />
                                {matchedCat?.name}
                              </span>
                              {d.isTestMode && (
                                <span className="text-[9px] font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1 rounded">
                                  測試模式 (3分鐘)
                                </span>
                              )}
                              <span className="text-[10px] text-slate-500 font-mono">
                                {new Date(d.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="text-sm font-black text-slate-100 flex items-center gap-2">
                              {d.title}
                            </h4>
                          </div>
                          
                          {/* Chevron */}
                          <button className="text-slate-500 hover:text-slate-300">
                            {isExpanded ? <X className="w-4 h-4" /> : <Clock className="w-4 h-4 text-slate-400" />}
                          </button>
                        </div>

                        {/* Timing Section (Always Visible) */}
                        <div className="mt-4 pt-3 border-t border-slate-850/60 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                          {/* Large Counter */}
                          <div className="md:col-span-2 flex items-center gap-3">
                            {isCoolingCompleted ? (
                              <div className="flex items-center gap-2 text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-2 rounded-xl">
                                <CheckCircle2 className="w-4.5 h-4.5 text-amber-400 animate-bounce" />
                                <div>
                                  <span className="text-[10px] font-bold block uppercase tracking-wider">情緒清明時刻</span>
                                  <span className="text-xs font-black">冷卻期已圓滿結束</span>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-baseline gap-1 font-mono text-slate-100 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-850">
                                <span className="text-base font-black text-amber-400">{String(hours).padStart(2, '0')}</span>
                                <span className="text-[9px] text-slate-500 uppercase">H</span>
                                <span className="text-sm font-black text-amber-400/90">:</span>
                                <span className="text-base font-black text-amber-400">{String(minutes).padStart(2, '0')}</span>
                                <span className="text-[9px] text-slate-500 uppercase">M</span>
                                <span className="text-sm font-black text-amber-400/90">:</span>
                                <span className="text-sm font-black text-slate-400">{String(seconds).padStart(2, '0')}</span>
                                <span className="text-[9px] text-slate-600 uppercase">S</span>
                              </div>
                            )}
                          </div>

                          {/* Progress bar */}
                          <div className="md:col-span-2 space-y-1">
                            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                              <span>冷卻進度</span>
                              <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                              <div
                                className={`h-full transition-all duration-1000 ${isCoolingCompleted ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-gradient-to-r from-teal-400 to-amber-400'}`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Collapsible Details Panel */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-4 pt-4 border-t border-slate-850 space-y-4"
                            >
                              {/* Notes */}
                              {d.notes && (
                                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs">
                                  <strong className="text-slate-400 block mb-1">創始備忘 / 內心起伏：</strong>
                                  <p className="text-slate-300 leading-relaxed italic">{d.notes}</p>
                                </div>
                              )}

                              {/* Astrological / HD Alignment reflections */}
                              <div className="space-y-2.5">
                                <h5 className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                                  <Shield className="w-3.5 h-3.5" />
                                  靈魂核心自我檢核清單 (Emotional & Strategic Alignment)
                                </h5>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                                  {/* Q1: Emotional Clarity */}
                                  <div
                                    onClick={() => handleToggleReflection(d.id, 'emotionalClarity')}
                                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${d.reflections.emotionalClarity ? 'bg-amber-400/5 border-amber-400/30' : 'bg-slate-950 border-slate-850/60 hover:border-slate-800'}`}
                                  >
                                    <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${d.reflections.emotionalClarity ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-750 bg-slate-900'}`}>
                                      {d.reflections.emotionalClarity && <Check className="w-3 h-3 stroke-[3]" />}
                                    </div>
                                    <div>
                                      <span className="font-bold block text-[11px] text-slate-200">情緒中心平靜確認</span>
                                      <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">我的情緒波浪是否已經走完？目前做這個決定是處於平靜理性(Clarity)還是熱血衝動(Impulsive)？</span>
                                    </div>
                                  </div>

                                  {/* Q2: Informed Others */}
                                  <div
                                    onClick={() => handleToggleReflection(d.id, 'informedOthers')}
                                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${d.reflections.informedOthers ? 'bg-amber-400/5 border-amber-400/30' : 'bg-slate-950 border-slate-850/60 hover:border-slate-800'}`}
                                  >
                                    <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${d.reflections.informedOthers ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-750 bg-slate-900'}`}>
                                      {d.reflections.informedOthers && <Check className="w-3 h-3 stroke-[3]" />}
                                    </div>
                                    <div>
                                      <span className="font-bold block text-[11px] text-slate-200">顯示者「告知」策略</span>
                                      <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">身為顯示者，我是否已向會受此決策影響的人進行主動「告知」？這能為我掃清阻力、開闢道路。</span>
                                    </div>
                                  </div>

                                  {/* Q3: Quality/Value Check */}
                                  <div
                                    onClick={() => handleToggleReflection(d.id, 'qualityChecked')}
                                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${d.reflections.qualityChecked ? 'bg-amber-400/5 border-amber-400/30' : 'bg-slate-950 border-slate-850/60 hover:border-slate-800'}`}
                                  >
                                    <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${d.reflections.qualityChecked ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-750 bg-slate-900'}`}>
                                      {d.reflections.qualityChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                    </div>
                                    <div>
                                      <span className="font-bold block text-[11px] text-slate-200">金星金牛質感 & 大腦雙子熱度核對</span>
                                      <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">這筆支出/承諾是否符合極致質感與長遠落地價值？還是只是雙子座短暫的好奇與三分鐘熱度？</span>
                                    </div>
                                  </div>

                                  {/* Q4: Boundary / Energy Cave */}
                                  <div
                                    onClick={() => handleToggleReflection(d.id, 'boundaryChecked')}
                                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${d.reflections.boundaryChecked ? 'bg-amber-400/5 border-amber-400/30' : 'bg-slate-950 border-slate-850/60 hover:border-slate-800'}`}
                                  >
                                    <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${d.reflections.boundaryChecked ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-750 bg-slate-900'}`}>
                                      {d.reflections.boundaryChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                    </div>
                                    <div>
                                      <span className="font-bold block text-[11px] text-slate-200">能量防禦與神聖洞穴界線</span>
                                      <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">薦骨空白的我是否有精力持續執行它？這是否侵犯了我安靜充電的「神聖洞穴時間 / 能量主權」？</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Decision Finalize Actions */}
                              <div className="pt-4 border-t border-slate-850 space-y-3">
                                <div className="space-y-1.5">
                                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                                    最終心境 / 決策定論 (Notes)
                                  </label>
                                  <input
                                    type="text"
                                    value={outcomeNotes}
                                    onChange={(e) => setOutcomeNotes(e.target.value)}
                                    placeholder={isCoolingCompleted ? "寫下你在情緒歸零後下的最睿智定論..." : "可以在此寫下你冷卻倒數結束後的想法..."}
                                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400/50 text-xs"
                                  />
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-3">
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteDecision(d.id)}
                                    className="px-3.5 py-2 rounded-lg bg-slate-950 hover:bg-rose-950/20 text-slate-500 hover:text-rose-400 border border-slate-850 hover:border-rose-900/30 text-[10px] font-bold flex items-center gap-1.5 transition-all"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    放棄此記錄
                                  </button>

                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => handleFinalizeDecision(d.id, 'dismissed')}
                                      className="px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-850 text-[10px] font-bold transition-all"
                                    >
                                      決定不做了 (Let it go)
                                    </button>
                                    <button
                                      type="button"
                                      disabled={!isCoolingCompleted}
                                      onClick={() => handleFinalizeDecision(d.id, 'confirmed')}
                                      className={`px-4.5 py-2 rounded-lg text-[10px] font-black flex items-center gap-1 transition-all ${isCoolingCompleted ? 'bg-amber-400 hover:bg-amber-500 text-slate-950 cursor-pointer shadow-lg' : 'bg-slate-850 text-slate-600 cursor-not-allowed border border-slate-800'}`}
                                    >
                                      {!isCoolingCompleted && <Clock className="w-3.5 h-3.5 animate-pulse" />}
                                      確定執行 (Confirm & Commit)
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                )}
              </motion.div>
            ) : (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {historyDecisions.length === 0 ? (
                  <div className="p-12 text-center rounded-2xl bg-slate-900/10 border border-slate-850 flex flex-col items-center justify-center space-y-3">
                    <Calendar className="w-10 h-10 text-slate-700" />
                    <div>
                      <p className="text-xs font-bold text-slate-400">尚無已完成的歷史決策</p>
                      <p className="text-[10px] text-slate-600 mt-1 max-w-xs mx-auto">
                        所有走完冷卻倒數並給予最終定案的決策，都將封存於此，記錄你靈性的每一次睿智跨越。
                      </p>
                    </div>
                  </div>
                ) : (
                  historyDecisions.map(d => {
                    const matchedCat = CATEGORIES.find(c => c.id === d.category);
                    const CatIcon = matchedCat?.icon || Info;
                    const isConfirmed = d.status === 'confirmed';

                    return (
                      <div
                        key={d.id}
                        className="p-5 rounded-2xl bg-slate-900/20 border border-slate-850/60 hover:border-slate-800 transition-all space-y-3"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded border ${matchedCat?.bg} ${matchedCat?.color} ${matchedCat?.border}`}>
                                <CatIcon className="w-3 h-3" />
                                {matchedCat?.name}
                              </span>
                              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${isConfirmed ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                                {isConfirmed ? '確定執行 (Committed)' : '放手不做 (Dismissed)'}
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                {new Date(d.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="text-sm font-black text-slate-100 mt-1">{d.title}</h4>
                          </div>
                          
                          {/* Trash */}
                          <button
                            onClick={() => handleDeleteDecision(d.id)}
                            className="p-1 text-slate-600 hover:text-rose-400 rounded hover:bg-slate-950 transition-all"
                            title="刪除記錄"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {d.notes && (
                          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-850 text-xs italic text-slate-400 leading-relaxed">
                            <span className="font-bold text-[10px] text-slate-500 block not-italic mb-0.5">當初起因：</span>
                            "{d.notes}"
                          </div>
                        )}

                        {d.outcomeNotes && (
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300 leading-relaxed">
                            <span className="font-bold text-[10px] text-amber-400 block mb-0.5">冷卻定論：</span>
                            "{d.outcomeNotes}"
                          </div>
                        )}

                        {/* Reflections metrics */}
                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                          {Object.entries(d.reflections).map(([key, val]) => {
                            const labels: Record<string, string> = {
                              emotionalClarity: '情緒歸於清明',
                              informedOthers: '已完成告知',
                              qualityChecked: '通過質感檢核',
                              boundaryChecked: '捍衛洞穴能量'
                            };
                            return (
                              <span
                                key={key}
                                className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border ${val ? 'bg-amber-400/5 text-amber-300/90 border-amber-400/20' : 'bg-slate-950 text-slate-600 border-slate-900 line-through'}`}
                              >
                                <Check className={`w-2.5 h-2.5 ${val ? 'text-amber-400' : 'text-slate-600'}`} />
                                {labels[key]}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                )}
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
  );
}
