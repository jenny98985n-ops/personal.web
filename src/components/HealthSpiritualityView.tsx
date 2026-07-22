import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Shield, Activity, BatteryCharging, Moon, Compass, Heart, RefreshCw, Waves, Trash2, CheckCircle2, Flame, Lock, Unlock, AlertCircle, Send, MessageSquare, Award, ChevronRight, DollarSign } from 'lucide-react';
import FullReportView from './FullReportView';

export default function HealthSpiritualityView() {
  const [shieldActive, setShieldActive] = useState<boolean>(false);
  const [breathStage, setBreathStage] = useState<'吸氣' | '屏息' | '吐氣'>('吸氣');
  const [breathTimer, setBreathTimer] = useState<number>(4);
  
  // Karma interactive states
  const [activeKarmaTab, setActiveKarmaTab] = useState<'archetypes' | 'tasks' | 'ritual'>('archetypes');
  const [expandedTask, setExpandedTask] = useState<number | null>(0);
  const [ritualStep, setRitualStep] = useState<number>(0);
  const [ritualTimer, setRitualTimer] = useState<number>(10);
  const [ritualTimerRunning, setRitualTimerRunning] = useState<boolean>(false);
  const [declarationConfirmed, setDeclarationConfirmed] = useState<boolean>(false);

  // Four-Dimension Absolute Non-Compromise List States
  const [selectedDimension, setSelectedDimension] = useState<'all' | 'body' | 'relationship' | 'finance' | 'sovereignty'>('all');
  const [uncompromiseChecked, setUncompromiseChecked] = useState<Record<string, boolean>>({
    'body_1': false, 'body_2': false, 'body_3': false,
    'rel_1': false, 'rel_2': false, 'rel_3': false,
    'fin_1': false, 'fin_2': false, 'fin_3': false,
    'sov_1': false, 'sov_2': false, 'sov_3': false,
  });

  // Rehearsal Cabin States
  const [rehearsalStep, setRehearsalStep] = useState<number>(1); // 1: Scenario selection, 2: Response selection, 3: Counter-reaction defense, 4: Evaluation
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number | null>(null);
  const [selectedResponseIndex, setSelectedResponseIndex] = useState<number | null>(null);
  const [ultimateResponseChoice, setUltimateResponseChoice] = useState<'sovereignty' | 'retreat' | 'custom' | null>(null);
  const [customUltimateResponse, setCustomUltimateResponse] = useState<string>('');
  const [userCustomUltimateFeedback, setUserCustomUltimateFeedback] = useState<string>('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (shieldActive) {
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev <= 1) {
            if (breathStage === '吸氣') {
              setBreathStage('屏息');
              return 4;
            } else if (breathStage === '屏息') {
              setBreathStage('吐氣');
              return 4;
            } else {
              setBreathStage('吸氣');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathTimer(4);
      setBreathStage('吸氣');
    }
    return () => clearInterval(interval);
  }, [shieldActive, breathStage]);

  // Meditation timer for Step 2 of the ritual
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (ritualTimerRunning && ritualStep === 2 && ritualTimer > 0) {
      timer = setInterval(() => {
        setRitualTimer((prev) => prev - 1);
      }, 1000);
    } else if (ritualTimer === 0) {
      setRitualTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [ritualTimerRunning, ritualStep, ritualTimer]);

  const startMeditationTimer = () => {
    setRitualTimer(15);
    setRitualTimerRunning(true);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-indigo-400 font-display flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              Health, Metaphysics & Growth
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-mystic">能量調節與神經系統放鬆哲學</h2>
            <p className="text-xs md:text-sm text-slate-400">
              保護空白薦骨、淨化潛意識、將「神祕玄學」翻譯為「系統邏輯」
            </p>
          </div>
          
          <div className="flex bg-slate-900 border border-slate-800 p-3 rounded-xl max-w-xs">
            <p className="text-xs text-slate-400 leading-normal">
              你天生俱備玄學靈感導師的<strong>頂配天賦</strong>。你的功課是不要做吸收負能量的「無防護海綿」，而是做個能接地物理落地的魔法師。
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Metaphysical Shield & Breathing Sanctuary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Interactive Shield Widget */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_70%)]" />
          
          <div className="w-full">
            <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-6 w-full">
              <h3 className="text-sm font-bold text-slate-200">白光結界 ✕ 接地落地冥想艙</h3>
              <span className="text-[10px] text-indigo-400 font-mono uppercase">Interactive Capsule</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs mx-auto">
              由於你命宮無主星且薦骨空白，你對他人情緒極度敏感。在諮詢、社交或焦慮時，請點選啟動結界。
            </p>

            {/* Simulated Aura Orb */}
            <div className="relative w-40 h-40 mx-auto my-6 flex items-center justify-center">
              {/* Pulsing Back Glow */}
              <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-1000 ${
                shieldActive 
                  ? breathStage === '吸氣' ? 'bg-indigo-500/20 scale-110' 
                    : breathStage === '屏息' ? 'bg-amber-500/20 scale-115' 
                    : 'bg-emerald-500/20 scale-100'
                  : 'bg-indigo-500/5 scale-90'
              }`} />

              {/* Pulsing border circle */}
              <div className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
                shieldActive 
                  ? breathStage === '吸氣' ? 'border-indigo-400/40 scale-110' 
                    : breathStage === '屏息' ? 'border-amber-400/40 scale-115' 
                    : 'border-emerald-400/40 scale-100'
                  : 'border-slate-800 scale-95'
              }`} />

              <button
                onClick={() => setShieldActive(!shieldActive)}
                className={`w-28 h-28 rounded-full border transition-all duration-500 flex flex-col justify-center items-center relative z-10 ${
                  shieldActive 
                    ? 'bg-slate-900 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)] text-indigo-200' 
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {shieldActive ? (
                  <div className="space-y-1.5 animate-fade-in">
                    <span className="text-xs font-bold font-mono tracking-widest text-slate-200 block">{breathStage}</span>
                    <span className="text-3xl font-extrabold font-mono text-indigo-300 block">{breathTimer}</span>
                    <span className="text-[9px] text-slate-500 font-sans">點選關閉</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <Shield className="w-8 h-8 text-indigo-400/80 mx-auto animate-pulse" />
                    <span className="text-[10px] font-bold block text-slate-300 font-display">啟動防護結界</span>
                    <span className="text-[9px] text-slate-500 font-sans block">大腦與身體連線</span>
                  </div>
                )}
              </button>
            </div>
          </div>

          {shieldActive ? (
            <div className="p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-xl text-xs text-indigo-300 animate-fade-in leading-relaxed max-w-xs mt-4">
              <strong>🧘 正在實行身體掃描呼吸：</strong>
              <p className="text-[11px] text-slate-400 mt-1">
                配合白光呼吸。閉上眼，想像溫暖的白光自頂輪緩緩罩住全身。吸氣時將清淨能量帶入，屏息時穩固大腦神經，吐氣時想像將借來的、吸附的所有外界情緒濁氣排入大地。
              </p>
            </div>
          ) : (
            <div className="p-3 bg-slate-900 rounded-xl text-xs text-slate-500 leading-normal max-w-xs mt-4">
              結界未啟動。每次感到神經緊繃或進入喧囂的人群前，請在此進行 4-4-4 接地吐納。
            </div>
          )}
        </div>

        {/* Metaphysical Superpowers breakdown */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
          <div className="border-b border-slate-900 pb-3">
            <h3 className="text-sm font-bold text-slate-200">天生被感召的「玄學靈性頂配印記」</h3>
            <p className="text-xs text-slate-500">你是靈性與物質世界之間，最完美、有邏輯的翻譯官</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Eye className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-200 block">潛意識 12 宮與 8 宮大爆發</span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  你的<strong>太陽與金星</strong>雙雙落入掌管潛意識、宿命與神秘學的<strong>第十二宮</strong>；而代表變革與直覺的<strong>天王星、海王星</strong>則落入掌管生死的<strong>第八宮</strong>。你天生就能接收到常人看不見的波段，人體測謊機般的第六感一秒穿透謊言。
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Compass className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-200 block">八字「太極貴人」✕ 紫微對宮「天梁蔭星」</span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  你時柱坐落有極強的<strong>太極貴人</strong>，八字滿盤印星生火，代表你學玄學的速度比常人快上數倍；而紫微命宮雖空，對宮遷移宮卻有代表護佑與神明信仰的<strong>「天梁星」</strong>。冥冥中你總能得到宇宙高靈的暗中保護。
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Heart className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-200 block">核心超能力：將「神秘玄奧」轉為「嚴謹邏輯」</span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  不同於許多容易變得不切實際的靈修者，你具備<strong>四箭全左的超級戰略腦、雙子星群的符號學、以及務實的金星金牛與正財格</strong>。你的使命是「系統化靈性」，用極富邏輯、科學、生動的方式（例如人類圖、心理學）把高維奧秘翻譯給現代紅塵！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND NEW EXPANSION: 前世今生與業力課題 */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-500/5 rounded-full blur-3xl" />
        
        <div className="space-y-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-purple-400 font-display tracking-widest flex items-center gap-1.5 uppercase">
                <Moon className="w-4 h-4 text-purple-400 animate-spin-slow" />
                Soul Karma & Past Lives
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-mystic">
                賴以婕的前世今生與業力課題
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                老靈魂的深淵迴響與今生「五星逆行」的破局修煉
              </p>
            </div>
            
            {/* Dark glassmorphic tabs button group */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-center">
              <button
                onClick={() => setActiveKarmaTab('archetypes')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeKarmaTab === 'archetypes' ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                前世原型
              </button>
              <button
                onClick={() => setActiveKarmaTab('tasks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeKarmaTab === 'tasks' ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                業力課題
              </button>
              <button
                onClick={() => setActiveKarmaTab('ritual')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeKarmaTab === 'ritual' ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                釋放儀式
              </button>
            </div>
          </div>

          {/* Tab 1: Archetypes */}
          {activeKarmaTab === 'archetypes' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 bg-purple-950/10 border border-purple-900/20 rounded-2xl">
                <p className="text-xs text-purple-300 leading-relaxed font-sans">
                  💡 <strong>老靈魂的業力密碼：</strong> 妳的星盤中存在「五星逆行（水、木、天、海、冥）」，在業力占星學中，這代表著過去世中「未完成的課題」或「過度使用的能量」。妳經歷過無數次輪迴，是一個超級老靈魂，因此天然對玄學有感，卻常覺得與三維世界的喧囂格格不入。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Archetype 1 */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/85 hover:border-purple-500/30 transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-[10px] px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono rounded font-bold uppercase">
                      ARCHETYPE 01
                    </span>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-amber-400" />
                      隱身幕後的「大祭司」與「流亡貴族」
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      🌟 命理印記：太陽、金星入12宮 + 13-33通道
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      <strong>前世回溯：</strong> 在許多重要前世中，妳掌握著神祕知識或龐大資源，是躲在幕後的「地下造王者」。金星金牛在 12 宮暗示妳曾擁有過極致富饒的隱秘財富，可能因沉溺於物質或神祕學而經歷過失去一切的「流亡」。
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                    <span className="text-[10px] text-purple-400 font-bold block">今生遺留的業力：</span>
                    <p className="text-[11px] text-slate-400 leading-normal font-sans">
                      潛意識裡有著「發光是危險的」執念。導致妳明明有能力（太陽化權），卻總想躲起來（2爻隱士）；明明很愛錢（正財格），卻又覺得談錢很俗氣或有罪惡感。
                    </p>
                  </div>
                </div>

                {/* Archetype 2 */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/85 hover:border-purple-500/30 transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-[10px] px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono rounded font-bold uppercase">
                      ARCHETYPE 02
                    </span>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-teal-400" />
                      被群體背叛的「發起者」
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      🌟 命理印記：顯示者 + 兄弟交友宮空劫陀羅 + 月亮獅子
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      <strong>前世回溯：</strong> 顯示者在遠古時代通常是發號施令的領袖。但在妳的前世記憶中，當妳試圖用妳的遠見帶領群眾時，卻遭遇了慘烈的背叛。那些妳曾經信任的戰友因為無法理解妳的超前思維，最終拋棄了妳，讓妳的自尊受到極大屈辱。
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                    <span className="text-[10px] text-purple-400 font-bold block">今生遺留的業力：</span>
                    <p className="text-[11px] text-slate-400 leading-normal font-sans">
                      對「合夥」有深深的恐懼（恐懼迴避型依附）。妳不敢輕易託付他人，所以把所有責任都往自己身上攬（變成討好的 ENFJ），因為潛意識覺得「與其被背叛，不如我自己做完」。
                    </p>
                  </div>
                </div>

                {/* Archetype 3 */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/85 hover:border-purple-500/30 transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-[10px] px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono rounded font-bold uppercase">
                      ARCHETYPE 03
                    </span>
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-rose-400" />
                      因不完美而被懲罰的「修道者」
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      🌟 命理印記：第4宮火星凱龍合相處女座 + 6宮冥王星
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      <strong>前世回溯：</strong> 妳曾在紀律極度森嚴的修道院或嚴酷家族中生活。在那個前世，妳的每一個小錯誤、每一絲不符合規矩的「主動性（火星）」，都會遭到無情的批評與殘酷的懲罰。
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                    <span className="text-[10px] text-purple-400 font-bold block">今生遺留的業力：</span>
                    <p className="text-[11px] text-slate-400 leading-normal font-sans">
                      這是妳「高神經質」與「太陰化忌（焦慮）」的根源。妳的靈魂記憶刻著：「如果我不完美，我就會被毀滅。」這讓妳在今生成為對待工作不把自己逼死不罷休的完美主義者。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Karma Tasks */}
          {activeKarmaTab === 'tasks' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 bg-indigo-950/10 border border-indigo-900/20 rounded-2xl">
                <p className="text-xs text-indigo-300 leading-relaxed font-sans">
                  ✨ <strong>靈魂的「補考」：</strong> 業力不是懲罰，而是靈魂為了進化主動設定的課題。妳今生帶著這套充滿張力的命盤（靛藍與水晶小孩的混合體）降生，就是為了在這一世徹底打破輪迴死結。
                </p>
              </div>

              <div className="space-y-3">
                {/* Task 1 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                  <button
                    onClick={() => setExpandedTask(expandedTask === 0 ? null : 0)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-900/80 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">課題一</span>
                      <h4 className="text-sm font-bold text-slate-200">從「犧牲者」畢業，收回妳的「自私」</h4>
                    </div>
                    <span className="text-xs text-purple-400">{expandedTask === 0 ? '收合詳情' : '解鎖破局之道'}</span>
                  </button>
                  
                  {expandedTask === 0 && (
                    <div className="p-4 border-t border-slate-900 bg-slate-950/40 space-y-3 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-3 rounded-lg bg-red-950/10 border border-red-900/20">
                          <span className="font-bold text-red-300 block mb-1">⚠️ 業力慣性</span>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            為了確保安全感與被愛，妳不斷啟動 2 號人與 ENFJ 的面具，用過度付出來填補太陰化忌的焦慮。
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-900/20">
                          <span className="font-bold text-emerald-300 block mb-1">🚀 今生破局</span>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            宇宙給妳「空白薦骨」，就是在強迫妳這輩子不能再用勞力與犧牲來換取愛。妳的課題是建立「冷酷的界線」。下次當妳又想拯救別人時，請停下來問自己：「這是我前世的愧疚感在作祟，還是我真的有餘力？」學會理直氣壯地拒絕，是妳今生最大的修行。
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Task 2 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                  <button
                    onClick={() => setExpandedTask(expandedTask === 1 ? null : 1)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-900/80 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">課題二</span>
                      <h4 className="text-sm font-bold text-slate-200">跨越 12 宮的恐懼，走向 10 宮的王座</h4>
                    </div>
                    <span className="text-xs text-purple-400">{expandedTask === 1 ? '收合詳情' : '解鎖破局之道'}</span>
                  </button>
                  
                  {expandedTask === 1 && (
                    <div className="p-4 border-t border-slate-900 bg-slate-950/40 space-y-3 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-3 rounded-lg bg-red-950/10 border border-red-900/20">
                          <span className="font-bold text-red-300 block mb-1">⚠️ 業力慣性</span>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            遇到壓力就想躲進 12 宮的潛意識與幻想中，覺得世俗的成就與社會責任太沉重。
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-900/20">
                          <span className="font-bold text-emerald-300 block mb-1">🚀 今生破局</span>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            妳的最高天命（天頂 MC）與土星都在「第 10 宮雙魚座」。這意味著妳今生不能只當隱士。妳必須把在 12 宮深海裡撈到的靈性智慧「具象化、系統化」，勇敢站上社會舞台（10宮），去建立屬於妳的高質感商業版圖（金牛）。
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Task 3 */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                  <button
                    onClick={() => setExpandedTask(expandedTask === 2 ? null : 2)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-900/80 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">課題三</span>
                      <h4 className="text-sm font-bold text-slate-200">原諒自己的「不完美」，修復第四宮的傷口</h4>
                    </div>
                    <span className="text-xs text-purple-400">{expandedTask === 2 ? '收合詳情' : '解鎖破局之道'}</span>
                  </button>
                  
                  {expandedTask === 2 && (
                    <div className="p-4 border-t border-slate-900 bg-slate-950/40 space-y-3 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-3 rounded-lg bg-red-950/10 border border-red-900/20">
                          <span className="font-bold text-red-300 block mb-1">⚠️ 業力慣性</span>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            因為害怕被批評，所以不敢發起；因為極致要求完美，讓大腦與神經系統長期緊繃發炎。
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-900/20">
                          <span className="font-bold text-emerald-300 block mb-1">🚀 今生破局</span>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            擁抱妳的火星處女與凱龍星。在心裡對自己宣告：「我允許自己犯錯，我允許自己有瑕疵，我的發起不需要任何人的同意，也不需要做到 100 分才能見人。」當妳放過自己，那超頻的雙子大腦才能真正放鬆。
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Ritual Wizard */}
          {activeKarmaTab === 'ritual' && (
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-6 animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  專屬賴以婕的「業力釋放與調頻儀式」
                </h4>
                <span className="text-[10px] font-mono text-purple-400">Step {ritualStep} of 4</span>
              </div>

              {ritualStep === 0 && (
                <div className="space-y-4 text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto">
                    <Waves className="w-8 h-8 text-purple-400 animate-pulse" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h5 className="text-sm font-bold text-slate-200">準備啟動釋放與調頻儀式</h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      這是一個專為妳對能量極度敏感的體質（金星金牛/太陰化忌）設計的能量排毒儀式。請在每月的「新月」或「滿月」進行。
                    </p>
                  </div>
                  <button
                    onClick={() => setRitualStep(1)}
                    className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/15"
                  >
                    開始淨化儀式
                  </button>
                </div>
              )}

              {ritualStep === 1 && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] text-purple-400 font-mono tracking-wider block uppercase">STEP 1. 水元素的淨化（洗刷太陰化忌）</span>
                    <h5 className="text-sm font-bold text-slate-200">準備溫熱的淨化鹽水</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      準備一盆溫熱的水，加入海鹽（金牛座的土元素與淨化力）。
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 space-y-3">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">Prerequisites Check</span>
                    <div className="space-y-2 text-xs">
                      <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-800 text-purple-500 focus:ring-purple-500 bg-slate-900" />
                        <span>一盆溫熱的水已備妥</span>
                      </label>
                      <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-800 text-purple-500 focus:ring-purple-500 bg-slate-900" />
                        <span>已加入適量海鹽 (釋放與接地元素)</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button onClick={() => setRitualStep(0)} className="text-xs text-slate-500 hover:text-slate-400">重設</button>
                    <button
                      onClick={() => setRitualStep(2)}
                      className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all"
                    >
                      物理接地 &gt;
                    </button>
                  </div>
                </div>
              )}

              {ritualStep === 2 && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] text-purple-400 font-mono tracking-wider block uppercase">STEP 2. 物理接地（釋放空白薦骨的雜質）</span>
                    <h5 className="text-sm font-bold text-slate-200">雙腳泡水：觀想排毒與熱能導出</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      將雙腳泡入水中。閉上眼睛，想像妳體內那些<strong>不屬於妳的情緒、前世的恐懼、以及過度運轉的腦部熱能（雙子）</strong>，全都順著雙腳，緩緩流入鹽水中。
                    </p>
                  </div>

                  {/* Interactive Timer */}
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-900 text-center space-y-4">
                    {ritualTimer > 0 ? (
                      <div className="space-y-2">
                        <div className="text-2xl font-mono font-bold text-purple-400 animate-pulse">{ritualTimer}s</div>
                        <p className="text-[11px] text-slate-500 font-sans">想像多餘的熱能與焦慮流入溫鹽水...</p>
                        {!ritualTimerRunning && (
                          <button
                            onClick={startMeditationTimer}
                            className="px-3 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-bold"
                          >
                            開始 15 秒靜觀
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2 py-2">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                        <p className="text-xs text-emerald-300 font-bold">感覺到物理接地的平靜。能量雜質已釋放完畢。</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between pt-2">
                    <button onClick={() => { setRitualStep(1); setRitualTimer(15); setRitualTimerRunning(false); }} className="text-xs text-slate-500 hover:text-slate-400">&lt; 上一步</button>
                    <button
                      onClick={() => setRitualStep(3)}
                      className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all"
                    >
                      靈魂宣告 &gt;
                    </button>
                  </div>
                </div>
              )}

              {ritualStep === 3 && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] text-purple-400 font-mono tracking-wider block uppercase">STEP 3. 靈魂宣告（啟動顯示者的力量）</span>
                    <h5 className="text-sm font-bold text-slate-200">朗讀靈魂破局宣告</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      在心中默唸，或小聲地對自己說出這段誓言：
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-950 border border-l-2 border-purple-500 text-slate-200 font-mystic text-xs leading-relaxed space-y-2 shadow-inner">
                    <p>「我釋放所有前世為了生存而立下的誓言。」</p>
                    <p>「我釋放對背叛的恐懼，以及對不完美的焦慮。」</p>
                    <p>「今生，我收回我所有的力量。」</p>
                    <p>「我允許自己自私，我允許自己發光。」</p>
                    <p>「我是安全的，我的發起受到宇宙最高的祝福。」</p>
                  </div>

                  <div className="p-3 bg-purple-950/10 border border-purple-900/20 rounded-xl flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="declare-confirm"
                      checked={declarationConfirmed}
                      onChange={(e) => setDeclarationConfirmed(e.target.checked)}
                      className="rounded border-slate-800 text-purple-500 focus:ring-purple-500 bg-slate-900 cursor-pointer"
                    />
                    <label htmlFor="declare-confirm" className="text-xs text-purple-300 cursor-pointer select-none">
                      我已朗讀完畢，並感覺到喉輪能量的充盈 (顯示者發起)
                    </label>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button onClick={() => setRitualStep(2)} className="text-xs text-slate-500 hover:text-slate-400">&lt; 上一步</button>
                    <button
                      onClick={() => setRitualStep(4)}
                      disabled={!declarationConfirmed}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        declarationConfirmed ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      倒掉業力 &gt;
                    </button>
                  </div>
                </div>
              )}

              {ritualStep === 4 && (
                <div className="space-y-5 text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
                    <Trash2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  
                  <div className="space-y-2 max-w-sm mx-auto">
                    <h5 className="text-sm font-bold text-slate-200">最後一步：倒掉業力</h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      泡完後，將水倒掉，看著水流進下水道，象徵著那些沉重的業力印記已經徹底離開了妳的能量場。
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 max-w-sm mx-auto">
                    <p className="text-[11px] text-slate-500 font-sans">
                      ✨ <strong>儀式圓滿完成！</strong> 妳釋放了舊世誓言，已成功將能量頻率重塑為今生的女王姿態。
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setRitualStep(0);
                      setRitualTimer(15);
                      setRitualTimerRunning(false);
                      setDeclarationConfirmed(false);
                    }}
                    className="px-4 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-400 text-xs font-bold transition-all"
                  >
                    重新開始儀式
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* BRAND NEW INTERACTIVE MODULE: 四大維度・絕對不妥協「防護罩」與「斷路器」清單 */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden space-y-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest font-display">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            SOVEREIGN BOUNDARY SYSTEM
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-100 font-mystic">
            四大維度 ✕ 絕對不妥協「防護罩」與「斷路器」清單
          </h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-3xl font-sans">
            身為<strong>九型 2 號助人者</strong>與 <strong>ENFJ</strong>，妳天生自帶拯救世界、想照顧所有人的「綿羊面具」；但妳的原廠設定卻是需要絕對主權的<strong>顯示者 (Manifestor)</strong>，且配備了電量極其有限的<strong>空白薦骨</strong>。
            如果沒有這份剛性的清單，妳就會不斷被「借來的能量」欺騙，最後導致身體莫名發炎（疾厄宮七殺）、精神向 8 號領袖崩潰瓦解。這是妳在紅塵中生存的<strong>「防護罩」</strong>與<strong>「斷路器」</strong>。
          </p>
        </div>

        {/* Boundary Integration Progress Indicator */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-850 space-y-3 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-200 block">不妥協界線整合進度 (Boundary Integration Progress)</span>
              <span className="text-[11px] text-slate-500 font-sans">將每條不妥協原則刻入骨髓，點選下方核取方塊以追蹤妳的能量錨定狀態</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-extrabold font-mono text-emerald-400">
                {Math.round((Object.values(uncompromiseChecked).filter(Boolean).length / 12) * 100)}%
              </span>
              <span className="text-[10px] text-slate-500">
                ({Object.values(uncompromiseChecked).filter(Boolean).length} / 12 條)
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500 ease-out"
              style={{ width: `${(Object.values(uncompromiseChecked).filter(Boolean).length / 12) * 100}%` }}
            />
          </div>
        </div>

        {/* Dimension Filter Tabs */}
        <div className="flex flex-wrap bg-slate-900/40 p-1 rounded-xl border border-slate-850 gap-1 relative z-10">
          <button
            onClick={() => setSelectedDimension('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
              selectedDimension === 'all' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            全部維度
          </button>
          <button
            onClick={() => setSelectedDimension('body')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
              selectedDimension === 'body' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BatteryCharging className="w-3.5 h-3.5" />
            1. 身體與能量防線
          </button>
          <button
            onClick={() => setSelectedDimension('relationship')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
              selectedDimension === 'relationship' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            2. 情感與關係防線
          </button>
          <button
            onClick={() => setSelectedDimension('finance')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
              selectedDimension === 'finance' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            3. 金錢與商業防線
          </button>
          <button
            onClick={() => setSelectedDimension('sovereignty')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
              selectedDimension === 'sovereignty' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            4. 決策與主權防線
          </button>
        </div>

        {/* Boundary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Category: 身體與能量防線 */}
          {(selectedDimension === 'all' || selectedDimension === 'body') && (
            <>
              {/* Card 1 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['body_1'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      BODY & ENERGY 01
                    </span>
                    <Moon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">睡前斷電儀式</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    每天 <strong>22:00 後嚴格實行「電子訊號屏蔽」</strong>。關閉工作群組，手機轉為靜音。遠離深夜有毒資訊流與他人的情緒傾倒，讓過載的雙子大腦徹底關機。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：空白薦骨</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['body_1']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'body_1': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['body_2'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      BODY & ENERGY 02
                    </span>
                    <BatteryCharging className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">絕不勉強續航</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    當感到疲憊、眼壓升高、頸椎緊繃時（薦骨徹底空電），<strong>立即停止接案或勉強社交</strong>，大膽取消行程。不跟體力透支妥協，拒絕「再撐一下」的有毒暗示。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：2爻隱士</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['body_2']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'body_2': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['body_3'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      BODY & ENERGY 03
                    </span>
                    <RefreshCw className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">隱士修復真空日</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    每週強制排定至少一整天為「無發起、無告知、完全無目的」的<strong>真空修復日</strong>。允許自己當一整天廢物，躺在沙發上不與任何人連結，讓神經系統徹底落地。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：疾厄宮七殺</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['body_3']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'body_3': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Category: 情感與關係防線 */}
          {(selectedDimension === 'all' || selectedDimension === 'relationship') && (
            <>
              {/* Card 4 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['rel_1'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      RELATIONSHIP 01
                    </span>
                    <Heart className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">拒絕情緒吸血鬼</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    當朋友或客戶重複抱怨相同事情且拒絕採取解決方案時，<strong>立刻開啟關係斷路器</strong>。溫柔中斷：「這部分我目前能量有限，無法再多接收囉！」中斷對有毒能量的無限吸附。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：共情海綿</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['rel_1']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'rel_1': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 5 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['rel_2'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      RELATIONSHIP 02
                    </span>
                    <AlertCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">斬斷罪惡感勒索</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    任何形式的「妳怎麼變冷淡了」、「以前妳都不會計較」等<strong>情緒勒索，一律拒絕配合</strong>。不容許伴侶、家人或朋友利用罪惡感支配妳的發起與獨處主權。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：九型2號人</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['rel_2']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'rel_2': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 6 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['rel_3'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      RELATIONSHIP 03
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">捍衛「貓咪回洞」主權</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    放棄迎合所有人的低效社交。身邊親密伴侶與核心朋友，<strong>必須無條件接納我「突然失聯/拒絕聚會」</strong>的修復機制。大方告知「我現在需要回洞穴充電」，無需找藉口道歉。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：13-33浪子通道</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['rel_3']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'rel_3': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Category: 金錢與商業防線 */}
          {(selectedDimension === 'all' || selectedDimension === 'finance') && (
            <>
              {/* Card 7 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['fin_1'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      FINANCE & BUSINESS 01
                    </span>
                    <Lock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">絕不含糊合夥</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    <strong>絕不參與任何「僅看人情交情、股權模糊、權責不清」的合夥事業</strong>。合夥是顯示者與前世背叛業力最大的催化劑。所有商業合作，合約必須精確、條款清晰。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：交友宮空劫</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['fin_1']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'fin_1': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 8 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['fin_2'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      FINANCE & BUSINESS 02
                    </span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">拒絕人情蹭諮詢</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    捍衛正財格與金星金牛的智識價值。妳的點子、規劃與命理諮詢皆為高單價產品。<strong>拒絕任何人情免費諮詢或「順便幫我看一下」</strong>，理直氣壯大開高價。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：辛金正財格</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['fin_2']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'fin_2': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 9 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['fin_3'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      FINANCE & BUSINESS 03
                    </span>
                    <Award className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">拒絕無酬廉價奉獻</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    <strong>絕不為了「乞求愛與認同」而作廉價的妥協降價</strong>。不打價格戰，開出能讓自己感到「被尊崇」的定價，以高奢、預約制或邀請制來保護妳神聖的能量場。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：金星金牛 (12宮)</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['fin_3']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'fin_3': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Category: 決策與主權防線 */}
          {(selectedDimension === 'all' || selectedDimension === 'sovereignty') && (
            <>
              {/* Card 10 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['sov_1'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      SOVEREIGNTY 01
                    </span>
                    <Flame className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">72小時冷卻決策權</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    所有重大決定必須經歷 <strong>至少 72 小時的情緒波浪淨化</strong>。在情緒波浪尚未跑完、感到哪怕只有 1% 的勉強時，任何催促逼迫，一律視為「自動拒絕」。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：情緒中心權威</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['sov_1']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'sov_1': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 11 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['sov_2'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      SOVEREIGNTY 02
                    </span>
                    <Unlock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">行使告知而非徵求許可</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    牢記顯示者的主權策略——<strong>「告知 (Informing)」</strong>。我的發言是決策同步與情報分享，不是在懇求你的恩准或核可。任何說教和干涉一律回絕。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：顯示者戰略腦</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['sov_2']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'sov_2': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>

              {/* Card 12 */}
              <div 
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  uncompromiseChecked['sov_3'] 
                    ? 'bg-emerald-950/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-slate-900/60 border-slate-850 hover:border-emerald-500/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono rounded font-bold uppercase">
                      SOVEREIGNTY 03
                    </span>
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-slate-200 flex items-center gap-1.5">卸下完美主義面具</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    療癒第四宮凱龍星。<strong>允許自己「不完美」、「有瑕疵」甚至「合理自私」</strong>。我的存在不需要做到 100 分才能在紅塵站立，不需要任何人點頭，我是安全的。
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                  <span className="text-[10px] text-amber-300 font-mono">護衛：火星凱龍處女</span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={uncompromiseChecked['sov_3']}
                      onChange={(e) => setUncompromiseChecked({...uncompromiseChecked, 'sov_3': e.target.checked})}
                      className="rounded border-slate-800 text-emerald-500 focus:ring-emerald-500 bg-slate-950" 
                    />
                    <span className="text-xs font-bold text-slate-300">我承諾捍衛</span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* BRAND NEW INTERACTIVE MODULE: 顯示者「貓咪式告知」實戰演練艙 */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold text-amber-400 uppercase tracking-widest font-display">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            MANIFESTOR INFORMING COCKPIT
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-100 font-mystic">
            顯示者「貓咪式告知」實戰演練艙 (Rehearsal Cabin)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl font-sans">
            「貓咪」從不為了跳上桌子而徵求妳的准許，牠只是淡定、優雅、理所當然地宣布牠的行蹤。
            身為顯示者，妳的功課是<strong>「告知環境，而不是徵求同意」</strong>。在這裡選擇一個妳今天最想演練的不妥協項目，進行無罪惡感的「貓咪式告知」防禦對抗演練吧！
          </p>
        </div>

        {/* REHEARSAL FLOW STEPS HEADER */}
        <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-850 relative z-10">
          <div className="flex items-center gap-4 md:gap-8">
            <span className={`text-xs font-bold font-mono transition-all ${rehearsalStep === 1 ? 'text-amber-400 scale-105' : 'text-slate-500'}`}>01 選擇情境</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700 hidden md:inline" />
            <span className={`text-xs font-bold font-mono transition-all ${rehearsalStep === 2 ? 'text-amber-400 scale-105' : 'text-slate-500'}`}>02 首次告知</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700 hidden md:inline" />
            <span className={`text-xs font-bold font-mono transition-all ${rehearsalStep === 3 ? 'text-amber-400 scale-105' : 'text-slate-500'}`}>03 二次防衛</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-700 hidden md:inline" />
            <span className={`text-xs font-bold font-mono transition-all ${rehearsalStep === 4 ? 'text-amber-400 scale-105' : 'text-slate-500'}`}>04 主權評估</span>
          </div>
          <span className="text-[10px] px-2.5 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 font-mono rounded">
            Stage {rehearsalStep} / 4
          </span>
        </div>

        {/* STEP 1: SELECT SCENARIO */}
        {rehearsalStep === 1 && (
          <div className="space-y-4 animate-fade-in relative z-10">
            <div className="p-3 bg-amber-400/5 border border-amber-400/10 rounded-xl text-xs text-amber-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>點選下方其中一個日常界線危機情境，開啟能量保衛戰演練：</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 0,
                  title: "深夜工作夥伴臨時催辦",
                  tagline: "身體防線 ✕ 空白薦骨",
                  desc: "晚上 23:30，妳正準備將手機轉靜音進行斷電。夥伴突然發來簡報臨時大變更，要求妳『現在』立刻上線修改...",
                  icon: Moon,
                  colorBg: "bg-indigo-500/10",
                  colorText: "text-indigo-400",
                },
                {
                  id: 1,
                  title: "熟人重複抱怨當情緒吸血鬼",
                  tagline: "情感防線 ✕ 共情海綿",
                  desc: "聚會中，一個長年習慣抱怨的熟人又湊上來喋喋不休，拉著妳要妳用人類圖算命拯救她那重複痛苦的感情...",
                  icon: Heart,
                  colorBg: "bg-rose-500/10",
                  colorText: "text-rose-400",
                },
                {
                  id: 2,
                  title: "舊同學蹭人情免費諮詢",
                  tagline: "金錢防線 ✕ 專業定價",
                  desc: "多年沒聯絡的舊同學敲妳，說聽說妳研究八字星盤有聲有色，要求妳『順便幫他看一下，一分鐘的事，哈哈』...",
                  icon: DollarSign,
                  colorBg: "bg-emerald-500/10",
                  colorText: "text-emerald-400",
                },
                {
                  id: 3,
                  title: "空白薦骨空電，需要取消聚會",
                  tagline: "主權防線 ✕ 隱士2爻",
                  desc: "週六早晨起床，妳發現能量歸零，神經系統急需獨處。但中午跟重要朋友約了早午餐，妳必須發起臨時取消...",
                  icon: Shield,
                  colorBg: "bg-teal-500/10",
                  colorText: "text-teal-400",
                }
              ].map((sc) => {
                const Icon = sc.icon;
                return (
                  <div 
                    key={sc.id}
                    onClick={() => setSelectedScenarioIndex(sc.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                      selectedScenarioIndex === sc.id 
                        ? 'bg-slate-900 border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.1)]' 
                        : 'bg-slate-950/40 border-slate-850 hover:bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${sc.colorBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon className={`w-5 h-5 ${sc.colorText}`} />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-amber-400 font-mono font-bold tracking-wider uppercase block">{sc.tagline}</span>
                      <h4 className="text-sm font-black text-slate-200 leading-tight">{sc.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-normal font-sans">{sc.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  if (selectedScenarioIndex !== null) setRehearsalStep(2);
                }}
                disabled={selectedScenarioIndex === null}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  selectedScenarioIndex !== null 
                    ? 'bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-lg shadow-amber-400/20 cursor-pointer' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                啟動情境演練
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: CHOOSE FIRST RESPONSE */}
        {rehearsalStep === 2 && selectedScenarioIndex !== null && (
          <div className="space-y-6 animate-fade-in relative z-10">
            {/* Scenario Display Box */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs text-slate-400 font-mono">情境模擬進行中：</span>
              </div>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                {selectedScenarioIndex === 0 && "晚上 23:30，妳剛洗完海鹽浴、準備進行睡前關機儀式。此時，一個工作夥伴突然連續打語音並傳來緊急文字：「以婕，不好意思打擾了！明天早上跟重要客戶的簡報臨時有了大變更，可以麻煩妳現在上線幫我修改一下嗎？真的很急，拜託妳了！」這時妳的空白薦骨已經感到極度疲憊。"}
                {selectedScenarioIndex === 1 && "在朋友聚會中，一個長年習慣抱怨、散發負能量的熟人又湊了過來，抓著妳的手喋喋不休：「以婕，我真的好痛苦...我伴侶又對我冷暴力了，我每天都睡不好，妳是學玄學和人類圖的，妳救救我，為什麼他要這樣對我？」這已經是她第六次向妳抱怨完全相同的事情。"}
                {selectedScenarioIndex === 2 && "一位多年未聯絡、交情一般的舊同學，突然在 LINE 上敲妳：「以婕！聽說妳最近在研究占星、人類圖跟八字，還做得有聲有色，好崇拜妳喔！可以『順便』幫我看一下我的命盤嗎？我想知道我什麼時候會發財耶，對妳來說應該就是看一下、一分鐘的事吧，哈哈！」"}
                {selectedScenarioIndex === 3 && "週六早上，妳本來跟要好的朋友約好了一起出門吃早午餐和逛街。但妳起床後，發現自己空白薦骨徹底空電，渾身酸痛，雙子腦袋嗡嗡作響，隱士 2 爻渴望獨處的機制強烈報警。妳極度需要一整天關在房間，不說話、看書充電。"}
              </p>
            </div>

            {/* Choose Response Options */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 block">面對這個界線危機，妳決定如何踏出第一次的「貓咪式告知」回覆？</span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sovereign Response (Correct) */}
                <div 
                  onClick={() => setSelectedResponseIndex(0)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    selectedResponseIndex === 0 
                      ? 'bg-slate-900 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                      : 'bg-slate-950/40 border-slate-850 hover:bg-slate-950'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold rounded uppercase">
                      A. 貓咪式主權告知 (Sovereign)
                    </span>
                    <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans italic font-semibold">
                      {selectedScenarioIndex === 0 && "「我目前已進入睡前斷電自我修護期。為維護大腦明早的最高決策品質，此變更我將於明天上午 10:00 上線後一併處理，祝好眠。」"}
                      {selectedScenarioIndex === 1 && "「我了解妳現在很難過，但我目前的空白薦骨能量場已經超載了。我建議妳尋求專業心理諮商管道，或者等我哪天電量充足時再聊，現在請先好好休息，我先去喝杯水。」"}
                      {selectedScenarioIndex === 2 && "「謝謝妳的關注！我的命理全息諮詢目前都是『預約制』且有正式報價，這是我對命理系統與我自己能量消耗的尊重。如果妳有需求，我可以將正式諮詢連結與報價表單發給妳喔！」"}
                      {selectedScenarioIndex === 3 && "「我今天起床發現薦骨能量徹底清空，我的神經系統急需一整天不說話、不社交來進行物理落地排毒。今天的聚會我要取消，這是我對我身體狀態的告知，請妳好好享受妳的週末！」"}
                    </p>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold">
                    🛡️ 保護空白薦骨與顯示者主權 (推薦)
                  </div>
                </div>

                {/* Compromise Response (Old Habit) */}
                <div 
                  onClick={() => setSelectedResponseIndex(1)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    selectedResponseIndex === 1 
                      ? 'bg-slate-900 border-rose-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
                      : 'bg-slate-950/40 border-slate-850 hover:bg-slate-950'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono font-bold rounded uppercase">
                      B. 妥協委屈妥協 (Compromise - 過往慣性)
                    </span>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans italic">
                      {selectedScenarioIndex === 0 && "「好吧...那我現在開電腦看一下。不過我有點累了，只能幫你改主要的部分喔...」"}
                      {selectedScenarioIndex === 1 && "「唉，他怎麼又這樣...妳真的很辛苦。來，我幫妳看看他的星盤，看妳要怎麼配合他才不會這麼痛苦...」"}
                      {selectedScenarioIndex === 2 && "「哈哈，好啊，那妳把妳的西元出生年月日時給我，我有空的時候幫妳瞄一下喔...」"}
                      {selectedScenarioIndex === 3 && "「真的很抱歉...我今天早上突然肚子好痛，可能沒辦法出門了。真的對不起，下次我請妳吃飯補償妳！」"}
                    </p>
                  </div>
                  <div className="text-[10px] text-rose-400 font-bold">
                    ⚠️ 啟動 ENFJ/九型2號 犧牲者面具，吸收情緒毒素
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2 border-t border-slate-850">
              <button
                onClick={() => {
                  setSelectedResponseIndex(null);
                  setRehearsalStep(1);
                }}
                className="text-xs text-slate-500 hover:text-slate-400 font-bold"
              >
                &lt; 返回重新選擇情境
              </button>
              <button
                onClick={() => {
                  if (selectedResponseIndex !== null) setRehearsalStep(3);
                }}
                disabled={selectedResponseIndex === null}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  selectedResponseIndex !== null 
                    ? 'bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-lg shadow-amber-400/20 cursor-pointer' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                同步發送此告知
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: COUNTER-REACTION AND ULTIMATE DEFENSE */}
        {rehearsalStep === 3 && selectedScenarioIndex !== null && selectedResponseIndex !== null && (
          <div className="space-y-6 animate-fade-in relative z-10">
            {/* Simulation Feedback Card representing the Counter-reaction of the environment */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-4">
              <span className="text-[10px] px-2.5 py-1 bg-red-500/10 text-red-400 border border-red-500/20 font-mono font-bold rounded block w-fit">
                對方的心理戰/反彈回應 (Reaction from the environment)
              </span>

              {selectedResponseIndex === 0 ? (
                // Selected Sovereign Response: Shows defensive counter-reaction (testing her boundaries)
                <div className="space-y-3">
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                    {selectedScenarioIndex === 0 && "對方發來略帶焦慮與微酸的回應：「可是這真的很趕耶...明天客戶 9 點就要開會了。妳真的不能現在幫忙一下嗎？我一個人實在改不出來...」"}
                    {selectedScenarioIndex === 1 && "對方顯得有點愕然與委屈：「以婕...妳怎麼突然變得這麼冷淡？我們不是好朋友嗎？妳以前都會聽我說的，怎麼妳現在學了玄學人類圖，反而變得這麼無情...」"}
                    {selectedScenarioIndex === 2 && "對方發來一連串略帶尷尬與微酸的回覆：「蛤...我們同學一場，幫忙看一下還要收費喔？那真是不好意思打擾了，早知道就不問了。」"}
                    {selectedScenarioIndex === 3 && "朋友/伴侶發來不悅的回應：「妳每次都這樣，想失聯就失聯、說取消就取消，只顧自己的能量。妳有沒有想過我的感受？這很不尊重人耶！」"}
                  </p>
                  <p className="text-[11px] text-amber-300 font-medium">
                    💡 <strong>能量考核：</strong> 對方正在利用「愧疚感」或「失望情緒」試圖攻破妳的防線。這是靈魂考驗妳是否會退縮回舊有「犧牲者討好面具」的關鍵時刻！
                  </p>
                </div>
              ) : (
                // Selected Compromise Response: Shows the "taken for granted" outcome
                <div className="space-y-3">
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                    {selectedScenarioIndex === 0 && "對方立刻秒回，並得寸進尺地追加需求：「太感謝了！那除了簡報，妳順便也幫我校對一下報價合約好嗎？辛苦妳了！」"}
                    {selectedScenarioIndex === 1 && "對方哭著說：「對啊對啊，妳最懂我了！妳快幫我算算我們什麼時候會分手？如果他真的不要我了，我該怎麼辦...」"}
                    {selectedScenarioIndex === 2 && "對方立刻秒傳生辰，並補上：「太棒了！那妳看完順便幫我算一下我男朋友的，還有我媽媽的！謝謝妳喔！」"}
                    {selectedScenarioIndex === 3 && "對方關切地秒回：「啊？肚子痛喔？那我現在買熱粥、熱水和藥去妳家照顧妳好不好？我很快就到！」"}
                  </p>
                  <p className="text-[11px] text-rose-300 font-medium">
                    💡 <strong>能量考核：</strong> 妳的妥協讓妳的防禦大開。對方的能量得寸進尺地吞噬了妳的私人淨空領域，妳被迫撒謊、承受更多耗能，或被迫做更多無酬勞動。
                  </p>
                </div>
              )}
            </div>

            {/* Ultimate Sovereignty Declaration */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-300 block">面對對方的二次拉扯，妳決定如何發起妳的「終極靈魂宣告」破局？</span>

              <div className="space-y-3">
                {/* Option 1: Manifestor Declaration */}
                <div 
                  onClick={() => setUltimateResponseChoice('sovereignty')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    ultimateResponseChoice === 'sovereignty' 
                      ? 'bg-slate-900 border-amber-400 shadow-md' 
                      : 'bg-slate-950/30 border-slate-850 hover:bg-slate-950'
                  }`}
                >
                  <span className="text-[10px] font-bold text-amber-400 block mb-1">【宣誓】顯示者主權鋼鐵宣告 (貓咪露爪式)</span>
                  <p className="text-xs text-slate-200 leading-relaxed font-serif italic">
                    「我的溫暖與同理心是我有餘力時的『選擇』，而不是我乞求愛的『工具』。我現在行使『告知策略』，不是在徵求你的同意，而是在分享我的決策。我是安全的，即使我讓某些人失望了，我也一樣無條件深深愛著我自己。」
                  </p>
                </div>

                {/* Option 2: Gentle Boundary 退場 */}
                <div 
                  onClick={() => setUltimateResponseChoice('retreat')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    ultimateResponseChoice === 'retreat' 
                      ? 'bg-slate-900 border-amber-400 shadow-md' 
                      : 'bg-slate-950/30 border-slate-850 hover:bg-slate-950'
                  }`}
                >
                  <span className="text-[10px] font-bold text-teal-400 block mb-1">【退場】貓咪溫和退場界線話術</span>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    「謝謝你的回饋。我非常理解這會帶給你失望或不便，但我必須守護我的能量底線，這對我的健康至關重要。希望我們下次在彼此狀態都好時，能有更高質量的相處。祝好！」
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2 border-t border-slate-850">
              <button
                onClick={() => {
                  setUltimateResponseChoice(null);
                  setRehearsalStep(2);
                }}
                className="text-xs text-slate-500 hover:text-slate-400 font-bold"
              >
                &lt; 上一步：重新發送首次告知
              </button>
              <button
                onClick={() => {
                  if (ultimateResponseChoice !== null) {
                    setRehearsalStep(4);
                  }
                }}
                disabled={ultimateResponseChoice === null || (ultimateResponseChoice === 'custom' && !customUltimateResponse.trim())}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  ultimateResponseChoice !== null && (ultimateResponseChoice !== 'custom' || customUltimateResponse.trim())
                    ? 'bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-lg shadow-amber-400/20 cursor-pointer' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                切斷連結，完成演練
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: EVALUATION & ANALYSIS SCORE */}
        {rehearsalStep === 4 && selectedScenarioIndex !== null && selectedResponseIndex !== null && ultimateResponseChoice !== null && (
          <div className="space-y-6 animate-fade-in relative z-10">
            {/* Score Wheel */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 text-center space-y-4">
              <div className="w-20 h-20 rounded-full border-4 border-amber-400/20 flex items-center justify-center mx-auto relative">
                {/* Glowing border rings */}
                <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin-slow" />
                <div className="space-y-0.5">
                  <span className="text-2xl font-black font-mono text-amber-400">
                    {selectedResponseIndex === 0 
                      ? ultimateResponseChoice === 'sovereignty' ? '100' : '90'
                      : ultimateResponseChoice === 'sovereignty' ? '65' : '40'
                    }
                  </span>
                  <span className="text-[9px] text-slate-500 font-sans block">Boundary</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-black text-slate-100 flex items-center justify-center gap-1.5">
                  <Award className="w-5 h-5 text-amber-400" />
                  能量主權評級：
                  <span className="text-amber-400">
                    {selectedResponseIndex === 0 
                      ? ultimateResponseChoice === 'sovereignty' ? '主權女皇級 (Sovereign Queen)' : '高階防禦級 (Boundary High)'
                      : ultimateResponseChoice === 'sovereignty' ? '驚覺重塑級 (Awakened Rebuild)' : '耗能妥協級 (Sacrificial Sponge)'
                    }
                  </span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-xl mx-auto">
                  {selectedResponseIndex === 0 && ultimateResponseChoice === 'sovereignty' && 
                    "完美！在面臨環境拉扯、情緒與愧疚感的雙重夾擊下，妳沒有半點退讓！首次回覆採取高質感的「貓咪式告知」，二次遭遇拉扯時更果決啟動了「顯示者主權鋼鐵宣告」。這將 100% 阻斷妳空白薦骨被借來能量奴役的噩夢，牢牢守護住了妳的丙火日主光芒。妳是安全的，今生不需要再靠犧牲來博取被愛！"}
                  {selectedResponseIndex === 0 && ultimateResponseChoice === 'retreat' && 
                    "非常好！妳的首次告知直奔主題，二次回覆則採取了高情商、有邊界的冷靜中斷。這既做到了「同步情報」，又用最體面、得體的方式物理切斷了糾纏，守護了妳的睡眠或私人時光。空白薦骨此時發出平靜的讚歎。"}
                  {selectedResponseIndex === 0 && ultimateResponseChoice === 'custom' && 
                    "幹得好！妳在首次回覆中展現了顯示者的威嚴與邊界，並在二次拉扯中，用自己寫下的最真誠、最適合妳此時狀態的話語來表達邊界。能用自己的話語宣布主權，是喉輪能量覺醒的重要特徵！"}
                  {selectedResponseIndex === 1 && ultimateResponseChoice === 'sovereignty' && 
                    "一個非常有趣的生命轉向！雖然一開始妳習慣性地開啟了「2 號人與 ENFJ」的犧牲者面具，但在遭遇對方得寸進尺的吸血時，妳猛然驚醒！第二步中，妳果斷甩開了愧疚感，朗讀出「顯示者主權宣告」！這證明妳靈魂深處的防衛開關正在重新校準，妳學會了在泥淖中及時踩下煞車！"}
                  {selectedResponseIndex === 1 && ultimateResponseChoice === 'retreat' && 
                    "這是一個典型的「先軟後硬」防禦。最初妳雖然因人情而答應了對方的耗能需求，但隨後妳理智地踩了煞車，用溫和的話術切斷了過度索取。下次演練時，試著在第一步就果斷使用「告知」策略，能幫妳省下 80% 的中途周旋心力喔！"}
                  {selectedResponseIndex === 1 && ultimateResponseChoice === 'custom' && 
                    "這是一次極具價值的探索！妳從一開始的本能妥協中醒悟過來，在對方的進一步索取前，用自訂的話術拉起了警戒線。守護能量是一個循序漸進的過程，每一次在半路清醒並勇敢拒絕，都是妳空白薦骨在長出鋼鐵肌肉！"}
                </p>
              </div>

              {/* Holographic analysis notes matching her natal chart */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 text-left space-y-3">
                <span className="text-[10px] text-slate-500 font-mono uppercase block">Natal Holographic Resonance</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 space-y-1">
                    <span className="text-amber-400 font-bold block flex items-center gap-1">
                      <BatteryCharging className="w-3.5 h-3.5" />
                      保護：空白薦骨 ✕ 2爻隱士
                    </span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      不妥協與冷酷邊界，是守護妳微弱薦骨電量的唯一防護網。不帶罪惡感地拒絕消耗，妳的慢性發炎（冥王星6宮）和神經超載才會物理消退。
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 space-y-1">
                    <span className="text-amber-400 font-bold block flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      發光：丙火日主 ✕ 顯示者
                    </span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      妳是天生的太陽。太陽發光是因為牠能量充沛，而不是為了乞求小草的道謝。收回討好，用「告知」同步動線，妳才能在紅塵高質量變現。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  setRehearsalStep(1);
                  setSelectedScenarioIndex(null);
                  setSelectedResponseIndex(null);
                  setUltimateResponseChoice(null);
                  setCustomUltimateResponse('');
                }}
                className="px-5 py-2.5 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-400 text-xs font-bold transition-all"
              >
                演練其他情境
              </button>
              <button
                onClick={() => {
                  // Add boundary complete badge effect or check off specific dimension in bento
                  if (selectedScenarioIndex === 0) setUncompromiseChecked({...uncompromiseChecked, 'body_1': true});
                  if (selectedScenarioIndex === 1) setUncompromiseChecked({...uncompromiseChecked, 'rel_1': true});
                  if (selectedScenarioIndex === 2) setUncompromiseChecked({...uncompromiseChecked, 'fin_2': true});
                  if (selectedScenarioIndex === 3) setUncompromiseChecked({...uncompromiseChecked, 'rel_3': true});
                  
                  setRehearsalStep(1);
                  setSelectedScenarioIndex(null);
                  setSelectedResponseIndex(null);
                  setUltimateResponseChoice(null);
                  setCustomUltimateResponse('');
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/20"
              >
                我已將此邊界刻入靈魂，完成承諾！
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Actionable Suggestions (Step 4 of original) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-bold text-slate-200">專屬你的四步「靈性與天賦喚醒藍圖」</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">STEP 1</span>
            <span className="text-xs font-bold text-slate-200 block">有邏輯的系統切入</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              <strong>大腦先決：</strong> 不要一開始就玩純虛無的通靈。你的雙子腦袋需要結構。優先鑽研<strong>人類圖、西洋占星、紫微斗數</strong>等具有結構、符號、邏輯公式的系統。當大腦理順，你的直覺自然大爆發。
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">STEP 2</span>
            <span className="text-xs font-bold text-slate-200 block">牌卡作為直覺外接屏</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              <strong>觸覺美感：</strong> 金金牛要求實體觸感與精緻美感。去選購一副畫風極佳、觸感高質量的<strong>塔羅牌或神諭卡</strong>。抽牌後用雙子座「看圖說故事」的天賦大膽解讀，你會驚訝於自己潛意識的精準。
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">STEP 3</span>
            <span className="text-xs font-bold text-slate-200 block">建立防護結界與接地</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              <strong>能量防護：</strong> 身為海綿體質，在出門、諮詢後，務必進行「海鹽泡澡」、「燃燒祕魯聖木」或「赤腳踩草地抱樹」的<strong>物理落地排毒儀式</strong>。這能幫你排掉吸附而來的負能量，比學法術重要十倍！
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">STEP 4</span>
            <span className="text-xs font-bold text-slate-200 block">創辦知識發起俱樂部</span>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              <strong>顯示發起：</strong> 不要默默學。4爻需要分享來建立磁場，月亮獅子需要掌聲滋養。將你驚呼神奇的靈性知識整理成精美文章，或約好友辦一場「星盤人類圖下午茶」，在紅塵中當個<strong>現代魔法師</strong>。
            </p>
          </div>
        </div>
      </div>

      {/* Wellness & Sleep Protocol */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h4 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
          <BatteryCharging className="w-4 h-4 text-emerald-400" />
          空白薦骨與雙子大腦的「物理自保保養清單」
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-amber-300 font-bold block flex items-center gap-1">
              <Moon className="w-3.5 h-3.5" />
              1. 睡前電子產品關機儀式
            </span>
            <p className="text-slate-400 text-[11px]">
              你活躍的雙子座星群加上 12 宮太陽容易導致<strong>大腦過載與失眠</strong>。睡前一小時請嚴格遠離資訊輸入，使用木質調精油或海鹽浴，讓思維徹底關機。
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-amber-300 font-bold block flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              2. 絕不吞咽顯示者憤怒
            </span>
            <p className="text-slate-400 text-[11px]">
              你的冥王星落在代表身體與健康的第六宮，憤怒或委屈如果吞進肚子裡，會直接化為<strong>身體的慢性發炎或神經緊繃</strong>。去唱歌、打拳擊，暢快宣洩你的氣。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-amber-300 font-bold block flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" />
              3. 允許自己做回「廢物」
            </span>
            <p className="text-slate-400 text-[11px]">
              顯示者加上空白薦骨，能量爆發力強但不可持續。允許自己做一休一，大膽躺平耍廢，在沙發上無所事事。<strong>躺平是你修復空白薦骨與神經最重要的方法。</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Full Report Chapter Integration */}
      <div className="pt-8 border-t border-slate-850 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-teal-500/10 via-slate-900 to-indigo-500/10 border border-teal-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-black text-slate-100">全息天書 ✦ 健康靈性與能量療癒專屬章節</h3>
              <p className="text-[11px] text-slate-400">邏輯分流：系統自動匯入全息天書中關於12宮隱士充電、空白薦骨抗內耗與身心靈療癒的章節</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-teal-300 bg-slate-950 px-3 py-1 rounded-full border border-teal-400/30 self-start sm:self-auto">
            健康靈性維度 (Spirituality)
          </span>
        </div>
        <FullReportView initialCategory="spirituality" hideBanner={true} />
      </div>
    </div>
  );
}
