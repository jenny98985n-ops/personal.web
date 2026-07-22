import React, { useState } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { Award, CheckCircle, HelpCircle, Shield, Sparkles, AlertTriangle, Flame, Activity, Zap, Layers, RefreshCw } from 'lucide-react';
import FullReportView from './FullReportView';

export default function NameNumerologyView() {
  const data = LAI_YI_CHIEH_DATA.nameNumerology;
  const [activeSubTab, setActiveSubTab] = useState<'grids' | 'woodfire' | 'characters'>('grids');
  
  // Interactive boundary simulator states
  const [boundaryLevel, setBoundaryLevel] = useState<number>(30); // percentage of shield
  const [coolingStage, setCoolingStage] = useState<string>('正常運轉');
  const [woodFireIntensity, setWoodFireIntensity] = useState<number>(85); // Wood feeds Fire is high by default

  const getBoundaryAssessment = (level: number) => {
    if (level < 30) return { title: '能量大潰散（外格12凶星吞噬）', desc: '妳正面臨過度討好、替他人承擔責任的危機。大腦過載，神經系統發炎，2 號人耗損過大。', color: 'text-rose-400' };
    if (level < 70) return { title: '被動防守狀態', desc: '妳雖然在心中設有底線，但仍難以拒絕朋友（4爻）的要求。社交完後在 2 爻洞穴需要漫長的時間療傷。', color: 'text-amber-400' };
    return { title: '完美水晶護盾（顯示者主權開啟）', desc: '妳成功轉化了外格12畫的敏感度。既保留了傾聽他人（13閘門）的慈悲，又建構了「冷酷的界線」，大腦與身體深度對齊。', color: 'text-emerald-400' };
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-emerald-400 font-display flex items-center gap-1.5 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Name Numerology
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-mystic">春日花開之吉木：姓名五格命盤</h2>
            <p className="text-xs md:text-sm text-slate-400">「姓名筆劃真實全解析」：總格 32（木）大吉・人格 21（木）大吉・地格 16（土）大吉</p>
          </div>
          
          <div className="flex bg-slate-900 border border-slate-800 p-3 rounded-xl max-w-xs">
            <p className="text-xs text-slate-400 leading-normal">
              <strong>名字是妳一生的能量振動頻率</strong>。在「YieJie」名字中，隱含著極強的獨立主權、優雅特質與獨特的社交磨損防線。
            </p>
          </div>
        </div>
      </div>

      {/* Characters and Stroke Count Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Visual Character Grid */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-200 border-b border-slate-900 pb-3">「YieJie」姓名筆劃與五行能量</h3>
            
            <div className="flex justify-center items-center gap-4 py-8 bg-slate-900/30 rounded-2xl border border-slate-900 mt-4">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-center text-2xl font-black text-emerald-400 font-mono">16</div>
                <span className="text-xs text-slate-400 font-mono">16 劃 (火)</span>
              </div>
              <div className="text-slate-600 font-display text-emerald-500">＋</div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-center text-2xl font-black text-emerald-400 font-mono">5</div>
                <span className="text-xs text-slate-400 font-mono">5 劃 (土)</span>
              </div>
              <div className="text-slate-600 font-display text-emerald-500">＋</div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-center text-2xl font-black text-emerald-400 font-mono">11</div>
                <span className="text-xs text-slate-400 font-mono">11 劃 (火)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-900">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-bold flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                外格（12 劃・木）——唯一暗藏的社交危機
              </span>
              <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono font-bold text-[10px]">耗損/敏感之數</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              這是妳名字中唯一帶有凶意和耗散的配置。它代表妳在對外社交時<strong>極度敏感、過度在意他人評價、且容易委屈自己去遷就別人</strong>（完美共振了妳的空白薦骨與 2 號人天性）。在工作中，這種敏感容易導致妳的心智與神經系統因「過載的同理心」而提早耗損。
            </p>
          </div>
        </div>

        {/* Five Grids Explanation */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
          <h3 className="text-sm font-bold text-slate-200 border-b border-slate-900 pb-3">姓名五格全息物理振幅</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">人格（21 劃・木）</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">大吉・核心力量</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">獨立自主與發起首領之數</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                21劃屬木，是名字的核心。代表妳內在深藏強烈的獨立性、權威感與不容屈服的意志。完美呼應妳<strong>顯示者發起</strong>與<strong>太陽化權</strong>的王者本能！
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">地格（16 劃・土）</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">大吉・前半生基石</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">質感品味與穩健財富之數</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                16劃大吉屬土。是妳後半生富饒與穩定的基礎。它給予妳對物質、質感生活與感官美學的極致敏銳（共振金星金牛），並能牢固鎖住財富。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">總格（32 劃・木）</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">大吉・後半生大運</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">寶馬金鞍、春日花開之數</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                32劃極致木，是妳的「如龍得水」貴人星。代表妳一生的機遇大都源於真心結交的朋友圈（完美呼應 4 爻機會網絡），得長輩貴人大力提攜。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">天格（17 劃・金）</span>
                <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-1.5 py-0.5 rounded">吉・天時福德</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">剛毅果決與突破萬難之數</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                17劃屬金。代表長輩遺傳與天命護持。金氣的剛強剛好砥礪妳的丙火，使妳在突破傳統格局、向外冒險時，依然有著極其冷靜的意志力。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND NEW: Interactive Deep Analysis Expansion of "YieJie" */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="space-y-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-emerald-400 font-display tracking-widest flex items-center gap-1.5 uppercase">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Name Inner Hologram
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-mystic">
                「YieJie」名字底下的隱藏能量切面
              </h3>
              <p className="text-xs text-slate-400">
                深度解構五格筆劃頻率、木生火燃燒引擎、與優雅字義能量
              </p>
            </div>

            {/* Dark sub-tabs */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-center">
              <button
                onClick={() => setActiveSubTab('grids')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSubTab === 'grids' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                12劃防禦模擬
              </button>
              <button
                onClick={() => setActiveSubTab('woodfire')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSubTab === 'woodfire' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                「木生火」過熱調頻
              </button>
              <button
                onClick={() => setActiveSubTab('characters')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSubTab === 'characters' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                筆劃數理與權力
              </button>
            </div>
          </div>

          {/* Sub-tab 1: Interactive Grids Shield */}
          {activeSubTab === 'grids' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 bg-emerald-950/10 border border-emerald-900/20 rounded-2xl">
                <p className="text-xs text-emerald-300 leading-relaxed font-sans">
                  💡 <strong>外格12劃的耗損警報：</strong> 妳的人格21、總格32皆為大吉「木」之數，但外格12木帶凶。這形成了一條「對外防禦漏洞」。當妳身處喧鬧人群（4爻社交）或進行諮詢工作時，12劃的過度敏感、怕別人失望（2號人特質）會大肆吸附別人的情緒垃圾。此處可模擬妳的「能量主權防線」，主動開啟防禦。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Shield slider controller */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">能量邊界強度調節 (Boundary Level)</span>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={boundaryLevel}
                      onChange={(e) => setBoundaryLevel(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-900 rounded-lg appearance-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>弱 (易被吸乾)</span>
                      <span>正常防護</span>
                      <span>強 (主權充盈)</span>
                    </div>
                  </div>

                  {/* Dynamic Assessment box */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className={`text-xs font-bold ${getBoundaryAssessment(boundaryLevel).color}`}>
                        {getBoundaryAssessment(boundaryLevel).title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {getBoundaryAssessment(boundaryLevel).desc}
                    </p>
                  </div>
                </div>

                {/* Practical Defensive Tips */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <span className="text-[10px] text-emerald-400 font-mono uppercase block">外格 12 畫「絕對防守策略」</span>
                  <ul className="text-xs text-slate-300 space-y-2 font-sans leading-normal list-disc list-inside">
                    <li><strong className="text-slate-100">設定「人情篩選網」：</strong> 堅定拒絕那些只是單向索取、不尊重妳界線的「能量吸血鬼」。</li>
                    <li><strong className="text-slate-100">告知優先，不尋求批准：</strong> 發揮顯示者主動「告知（Inform）」的策略，杜絕外格12因討好而陷入的委屈糾結。</li>
                    <li><strong className="text-slate-100">睡前斷電冥想：</strong> 阻斷12劃對外界聲光、情緒碎片的被動吸收，將大腦頻率撥回本體。</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 2: Wood-Fire Engine Regulator */}
          {activeSubTab === 'woodfire' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 bg-amber-950/10 border border-amber-900/20 rounded-2xl">
                <p className="text-xs text-amber-300 leading-relaxed font-sans">
                  🔥 <strong>「木生火」的過熱引擎：</strong> 妳的名字中木氣滔天（人格21、總格32、外格12全部屬木），而妳的日主是「丙火」。五行木能生火，這是一台源源不絕推動妳超級大腦（四箭全左）運轉的動力。然而，「木多火旺」的副作用是妳的思維快得像野火燎原，在深夜容易造成神經緊繃發炎與嚴重失眠。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visual fire gauge */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-850 space-y-4">
                  <span className="text-[10px] text-amber-400 font-mono block uppercase">大腦過熱引擎調節閥</span>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1 space-y-2">
                      <input
                        type="range"
                        min="30"
                        max="100"
                        value={woodFireIntensity}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setWoodFireIntensity(val);
                          if (val < 50) setCoolingStage('清涼幽靜（12宮與2爻安穩落地）');
                          else if (val < 80) setCoolingStage('高效思維（極致戰略輸出）');
                          else setCoolingStage('超載警報（神經發炎與深夜失眠）');
                        }}
                        className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-950 rounded-lg appearance-none"
                      />
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                        <span>30% (安穩熄火)</span>
                        <span>70% (高效發揮)</span>
                        <span>100% (極致過熱)</span>
                      </div>
                    </div>
                    
                    <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-center items-center">
                      <Flame className={`w-6 h-6 ${woodFireIntensity > 80 ? 'text-rose-500 animate-bounce' : woodFireIntensity > 50 ? 'text-amber-400 animate-pulse' : 'text-teal-400'}`} />
                      <span className="text-xs font-mono font-bold mt-1 text-slate-300">{woodFireIntensity}%</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl text-xs space-y-1">
                    <span className="text-slate-500 font-mono block">當前引擎狀態：</span>
                    <span className="font-bold text-slate-200">{coolingStage}</span>
                  </div>
                </div>

                {/* Practical Brain-Cooling Ritual */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-850 space-y-3">
                  <span className="text-[10px] text-amber-400 font-mono uppercase block">大腦神經「冷卻自救清單」</span>
                  <div className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                    <div className="p-2.5 rounded bg-slate-950 border border-slate-900 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold font-mono">1</span>
                      <p>
                        <strong>引水熄火（海鹽足浴）：</strong> 睡前用溫海鹽水泡腳。利用水（土鹽）能量引導頭部的多餘熱能下行接地，消融太陰化忌的腦波焦慮。
                      </p>
                    </div>
                    <div className="p-2.5 rounded bg-slate-950 border border-slate-900 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold font-mono">2</span>
                      <p>
                        <strong>大腦格式化（寫下來）：</strong> 將深夜狂飆的靈感全部寫入紙本或電子筆記，完成「大腦卸載」，讓四箭全左的聚焦腦袋停止背景程序。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 3: Character Meaning & Female Power */}
          {activeSubTab === 'characters' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {/* Stroke 5 (Earth) */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-850 hover:border-emerald-500/20 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-400 font-mono">5 劃 (土)</span>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 font-mono rounded">
                      憑藉與承載 (Bridge)
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-200">承前啟後的靈魂橋樑</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    5 劃數理代表「憑藉、承載與連結」。在能量頻率上，它是一座連通兩端的橋樑。這賦予了妳靈魂深處強烈的責任感與承載力。妳天生自帶想去承擔團隊、連結不同次元與流派（如將玄學翻譯為嚴謹系統）的崇高使命。
                  </p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl text-[11px] text-slate-400 font-sans">
                  <strong>💡 提醒：</strong> 橋樑的作用是「讓人通過」，但也容易被「踩在腳下」。學會適度收回承載力，不替別人的生命負全責。
                </div>
              </div>

              {/* Stroke 11 (Fire) */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-850 hover:border-emerald-500/20 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-400 font-mono">11 劃 (火)</span>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-300 font-mono rounded">
                      優雅與權力 (Sovereignty)
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-200">優雅、手腕與女性高貴主權</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    11 劃數理源於高階貴族氣場之數。代表妳溫和、美麗的外表與 ENFJ 的優雅社交面具之下，隱藏著「兼具智慧與鐵血手腕的女性最高權力」。妳有獨立的領地（2爻），也有著高貴的邊界，不需要向任何人卑躬屈膝。
                  </p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl text-[11px] text-slate-400 font-sans">
                  <strong>💡 提醒：</strong> 展現高貴的能量氣場。當妳堅定地守護領地主權時，妳的發起（顯示者）與氣場才最優雅迷人。
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Synthesis Section with HD and Astro */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-semibold font-mono">
              SYSTEM CROSSOVER ANALYSIS
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-200">
              姓名「大吉木」如何支持「顯示者」與「太陽雙子」
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
              在八字中，丙火（妳的太陽日主）最需要「木來生火」，才能維持璀璨燃燒的生命能量。
              妳的名字「YieJie」中，人格21、總格32皆是<strong>極旺的大吉木</strong>！這代表妳的名字在玄學頻率上，源源不絕地在為妳的丙火日主、月亮獅子、和顯示者能量提供「燃料」。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400 leading-normal">
                  <strong>貴人網絡自然展開：</strong> 總格32木帶來的強大貴人運，正是妳人類圖 4 爻最需要的人脈磁場。多與懂妳、尊重妳空間的知心好友共事。
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400 leading-normal">
                  <strong>平衡雙子的漂浮：</strong> 姓名中的吉土（地格16）給予妳雙子座與無主星海綿體質最需要的「沉穩落地力量」，幫妳留住財富。
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-center">
            <span className="text-[10px] text-emerald-400 font-mono tracking-wider block">NAME ENERGY RESONANCE</span>
            <div className="relative inline-flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-emerald-500/30 animate-spin-slow absolute" />
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex flex-col justify-center items-center">
                <span className="text-2xl font-extrabold text-emerald-300 font-mystic">32</span>
                <span className="text-[10px] text-slate-500 font-mono">吉木・總格</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              「人緣廣聚、繁花似錦」的終身天賦加持。
            </p>
          </div>
        </div>
      </div>

      {/* Full Report Chapter Integration */}
      <div className="pt-8 border-t border-slate-850 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-900 to-amber-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-black text-slate-100">全息天書 ✦ 姓名能量與個人特質專屬章節</h3>
              <p className="text-[11px] text-slate-400">邏輯分流：系統自動匯入全息天書中屬於 YieJie 姓名數理與人格界線的解析</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-slate-950 px-3 py-1 rounded-full border border-emerald-400/30 self-start sm:self-auto">
            姓名能量維度 (Name Numerology)
          </span>
        </div>
        <FullReportView initialCategory="destiny" hideBanner={true} />
      </div>
    </div>
  );
}
