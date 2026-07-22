import React, { useState } from 'react';
import { 
  BookOpen, ShieldAlert, Cpu, Zap, BatteryCharging, Users, 
  Sparkles, CheckCircle2, AlertTriangle, Heart, Flame, Brain, Crown, Ghost
} from 'lucide-react';
import { motion } from 'motion/react';

export default function UserManualView() {
  const [activeChapter, setActiveChapter] = useState<'all' | 'ch1' | 'ch2' | 'ch3' | 'ch4'>('all');

  return (
    <div className="space-y-8 animate-fade-in" id="user-manual-section">
      {/* Product Manual Title Banner */}
      <div className="relative overflow-hidden bg-slate-900/40 rounded-3xl p-8 md:p-10 border border-amber-400/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-400 tracking-wider font-mono uppercase">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              OFFICIAL PRODUCT MANUAL ✦ 官方原廠專屬使用說明書
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
              MODEL: LAI YI JIE (1995-SPECIAL-EDITION)
            </span>
          </div>

          <div className="border-l-4 border-amber-400 pl-6 space-y-2">
            <h1 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              賴以婕 <span className="text-amber-400 text-xl md:text-2xl font-light block mt-1 font-display">Lai Yi Jie ✦ 能量使用說明書</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">
              減阻尼 ✕ 抗內耗 ✕ 最高質感人生調頻指南
            </p>
          </div>

          {/* Product Hardware Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 border-t border-slate-800/80">
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">【產品名稱】</span>
              <p className="text-xs font-black text-slate-200">賴以婕 (Lai Yi Jie)</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">【出廠年份】</span>
              <p className="text-xs font-black text-amber-300">1995 年（乙亥年 / 水晶濾鏡版靛藍小孩）</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">【核心處理器】</span>
              <p className="text-xs font-black text-indigo-300">雙子座 ✕ 四箭全左（超頻運算，請注意散熱）</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">【動力系統】</span>
              <p className="text-xs font-black text-rose-300">顯示者 (Manifestor) ✕ 丙火日主（自帶霸氣，無需點火）</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">【外觀與材質】</span>
              <p className="text-xs font-black text-emerald-300">金星金牛（高奢材質，對美感極端要求）</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-850">
        <button
          onClick={() => setActiveChapter('all')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'all' ? 'bg-amber-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          全章總覽 (Full Manual)
        </button>
        <button
          onClick={() => setActiveChapter('ch1')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch1' ? 'bg-amber-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          第一章：原廠核心設定
        </button>
        <button
          onClick={() => setActiveChapter('ch2')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch2' ? 'bg-rose-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          第二章：操作禁忌與警告
        </button>
        <button
          onClick={() => setActiveChapter('ch3')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch3' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          第三章：充電與維護模式
        </button>
        <button
          onClick={() => setActiveChapter('ch4')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch4' ? 'bg-indigo-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          第四章：相處與合作原則
        </button>
      </div>

      {/* CHAPTER 1: Core Mechanics */}
      {(activeChapter === 'all' || activeChapter === 'ch1') && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-850 pb-4">
            <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
                第一章：原廠核心設定 <span className="text-xs font-mono text-amber-400 font-normal">(Core Mechanics)</span>
              </h2>
              <p className="text-xs text-slate-400">兩種交替發動的底層模式與情緒波浪設定</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mode 1: Queen Mode */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-amber-400/20 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-black">
                  <Crown className="w-3.5 h-3.5" />
                  【女王模式】 (發起中)
                </span>
                <span className="text-[10px] font-mono text-slate-500">POWER ON</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                啟動<strong>獅子月亮</strong>與<strong>顯示者動能</strong>時，她極具領導力、能精準看透系統漏洞、說話一針見血，是天生的<strong>造王者與策略軍師</strong>。
              </p>
            </div>

            {/* Mode 2: Hermit Mode */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-400 text-xs font-black">
                  <Ghost className="w-3.5 h-3.5" />
                  【隱士模式】 (關機中)
                </span>
                <span className="text-[10px] font-mono text-slate-500">STANDBY / RECHARGE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                啟動 <strong>12 宮</strong>與 <strong>2 爻特質</strong>時，她會徹底斷聯、需要絕對的安靜與獨處空間。此為<strong>正常能量代謝，並非故障</strong>。
              </p>
            </div>
          </div>

          {/* Emotional Wave Section */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <h3 className="text-sm font-black text-slate-100">關於「情緒波浪」的特殊設定 (Emotional Authority)</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              她的決策中樞不在大腦，而在<strong>情緒</strong>。請勿要求她在極度興奮或極度焦慮時做出任何承諾。
            </p>
            <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-400/20 text-xs text-blue-300 leading-normal flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong>正常運作方式：</strong> 所有重大決策，請給予她<strong>「72小時冷卻期」</strong>，待她恢復平靜與冷酷的理智時，給出的答案才算數。
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHAPTER 2: Hazards & Warnings */}
      {(activeChapter === 'all' || activeChapter === 'ch2') && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-rose-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-850 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
                第二章：操作禁忌與危險警告 <span className="text-xs font-mono text-rose-400 font-normal">(Hazards & Warnings)</span>
              </h2>
              <p className="text-xs text-slate-400">違反以下操作將觸發「鈴星」冷暴力或「顯示者」毀滅性憤怒</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Forbidden 1 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                ❌ 禁忌 1：試圖控制她的行蹤與決策
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-rose-300">警告：</strong> 她是發起者，不是執行者。不要對她說「妳應該怎麼做」或「妳為什麼沒先問我」。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300">
                <strong>正确解法：</strong> 給予情報，並讓她自己做選擇。
              </div>
            </div>

            {/* Forbidden 2 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                ❌ 禁忌 2：將她的付出視為理所當然，甚至挑剔
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-rose-300">警告：</strong> 當她啟動「ENFJ 照顧者」模式為你付出時，若你敢挑剔（觸犯處女座凱龍與獅子月亮），她會瞬間回收所有溫暖並永久拉黑。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300">
                <strong>正確解法：</strong> 請給予具體、真誠的讚美，把她當成女王般感謝。
              </div>
            </div>

            {/* Forbidden 3 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                ❌ 禁忌 3：廉價的浪漫與粗糙的對待
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-rose-300">警告：</strong> 她的金星在金牛，且擁有正財格。她鄙視沒有實質價值的畫大餅。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300">
                <strong>正確解法：</strong> 用實用的行動、高質感的禮物、或是實質的財務規劃來展現誠意。
              </div>
            </div>

            {/* Forbidden 4 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                ❌ 禁忌 4：突襲與邊界侵犯 (奪命連環 Call)
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-rose-300">警告：</strong> 未經預約的「驚喜」，對她的神經系統（高神經質）來說是「驚嚇」。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300">
                <strong>正確解法：</strong> 請永遠事先預告你的行程，給她心理準備的時間。
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHAPTER 3: Charging & Maintenance */}
      {(activeChapter === 'all' || activeChapter === 'ch3') && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-emerald-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-850 pb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
                第三章：最佳充電與維護模式 <span className="text-xs font-mono text-emerald-400 font-normal">(Charging & Maintenance)</span>
              </h2>
              <p className="text-xs text-slate-400">因配備「空白薦骨 (Undefined Sacral)」，極易過載，請遵守保養程序</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Maintenance 1 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px] flex items-center justify-center font-mono">1</span>
                物理斷電法 (Physical Grounding)
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                當她出現「焦慮、碎碎念、大腦無法停止運轉」時，請立刻停止講道理。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 leading-relaxed">
                <strong>有效修復：</strong> 洗熱水澡、點燃木質調精油（雪松/秘魯聖木）、接觸高品質布料毛毯、安靜睡眠環境。
              </div>
            </div>

            {/* Maintenance 2 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px] flex items-center justify-center font-mono">2</span>
                資訊排毒 (Information Detox)
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                她的大腦容易吸收過多雜訊。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 leading-relaxed">
                <strong>執行重點：</strong> 睡前一小時，請協助確保她遠離手機與複雜的商業思考。
              </div>
            </div>

            {/* Maintenance 3 */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
              <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px] flex items-center justify-center font-mono">3</span>
                允許「擺爛」的神聖特權
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                這是修復她內在小孩（討好型面具）的最強解藥。
              </p>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 leading-relaxed">
                <strong>魔法心咒：</strong> 請告訴她：「妳今天什麼都不做也沒關係，妳依然很完美。」
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHAPTER 4: 相處與合作原則 */}
      {(activeChapter === 'all' || activeChapter === 'ch4') && (
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-indigo-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-850 pb-4">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
                第四章：相處與合作的最高指導原則 <span className="text-xs font-mono text-indigo-400 font-normal">(User Guide)</span>
              </h2>
              <p className="text-xs text-slate-400">對待伴侶與事業夥伴的精準互動守則</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For Partners */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-pink-500/20 space-y-4">
              <div className="flex items-center gap-2 text-pink-400">
                <Heart className="w-5 h-5" />
                <h3 className="text-base font-black text-slate-100">給伴侶的建議：實用型的極致偏愛</h3>
              </div>
              <p className="text-xs text-amber-300 font-semibold italic">
                「她要的不是你為她死，而是你與她一起好好活著。」
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-slate-100 block">✦ 做她的大腦對手</strong>
                  <p>她需要智識上的交流（雙子），請保持你的專業度與觀點，不要當個無趣的人。</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-slate-100 block">✦ 接住她的脆弱</strong>
                  <p>在外面她是女王，但在你面前，當她的太陰化忌（焦慮）發作時，請用極大的耐心與偏愛接住她，不要跟她講邏輯，請給她擁抱。</p>
                </div>
              </div>
            </div>

            {/* For Business Partners */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/20 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-black text-slate-100">給合作夥伴的建議：造王者的尊榮待遇</h3>
              </div>
              <p className="text-xs text-amber-300 font-semibold italic">
                「大腦外包，勞力自理。請向她購買策略與眼光。」
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-slate-100 block">✦ 策略購買而非細節微管</strong>
                  <p>請向她購買「策略與眼光」，但不要期待她幫你處理行政與收尾的苦工。</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-slate-100 block">✦ 尊重告知策略</strong>
                  <p>當她「告知」你她要怎麼做時，請準備好資源配合，她會帶領團隊打勝仗。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FINAL DECLARATION BANNER */}
      <div className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-500/10 border border-amber-400/40 text-center space-y-4 shadow-2xl">
        <span className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 inline-block">
          【最終宣告 ✦ FINAL DECLARATION】
        </span>
        <blockquote className="text-base md:text-xl font-bold text-slate-100 max-w-3xl mx-auto leading-relaxed font-display">
          「賴以婕不負責拯救世界，她只負責發起改變。<br className="hidden md:inline" />
          請謹慎且珍惜地使用，她將回報你無與倫比的智慧與最高質感的愛。」
        </blockquote>
      </div>
    </div>
  );
}
