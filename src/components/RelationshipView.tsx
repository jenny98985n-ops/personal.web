import React, { useState } from 'react';
import { Sparkles, Heart, AlertCircle, ShieldAlert, CheckCircle2, User, HelpCircle } from 'lucide-react';

export default function RelationshipView() {
  const [freedomLevel, setFreedomLevel] = useState<number>(50); // Slider for freedom vs security

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-rose-400 font-display flex items-center gap-1.5 uppercase tracking-wider">
              <Heart className="w-4 h-4 animate-pulse text-rose-500" />
              Love & Relationship Blueprint
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-mystic">在自由與絕對佔有中尋找平衡</h2>
            <p className="text-xs md:text-sm text-slate-400">
              外在展現得很灑脫、靈活，但內在對感情要求極度深情、固執且需要高度的安全感。
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm">
            <span className="text-[10px] text-rose-400 font-mono block mb-1">RELATIONSHIP ESSENCE</span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              朋友變情人是最高勝率的路徑。你的大腦需要廣袤的自由（雙子），但你的身體和心（金牛金星12宮）卻渴望絕對的專屬與低調偏愛。
            </p>
          </div>
        </div>
      </div>

      {/* Love Balance Meter (Interactive) */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-200">愛情雙極平衡儀 (Freedom vs. Security)</h3>
          <p className="text-xs text-slate-500">拖動滑塊，探索你大腦中「雙子風象」與身心中「金牛土象」的極致反差與和解策略</p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto py-4">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-indigo-400 font-bold">大腦要自由 (雙子群星 + 2/4 隱士)</span>
            <span className="text-rose-400 font-bold">身心渴望安穩 (金星金牛 + 12宮偏愛)</span>
          </div>

          <input 
            type="range" 
            min="0" 
            max="100" 
            value={freedomLevel} 
            onChange={(e) => setFreedomLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-rose-500 focus:outline-none"
          />

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 text-xs text-slate-300 leading-relaxed min-h-[96px] flex items-center">
            {freedomLevel < 35 && (
              <p className="animate-fade-in">
                <strong>🔒 當你向「絕對穩固」傾斜時：</strong> 
                你的<strong>金金牛落 12 宮</strong>在渴望高品質的肢體接觸、安逸生活和秘密專屬的安全感。但注意！如果逼得太緊、完全沒有秘密，你那<strong>太陽、上升雙子</strong>的大腦會開始感到窒息。請給自己留出一點點精神上的呼吸空隙。
              </p>
            )}
            {freedomLevel >= 35 && freedomLevel <= 65 && (
              <p className="animate-fade-in text-rose-200">
                <strong>✨ 完美平衡態 (反差萌的最高智慧)：</strong> 
                你最迷人的特點就是反差！你需要伴侶給你足夠的個人自主空間，但在實質關係上，你又極度專情、渴望專屬的擁抱與品味享受。成熟的伴侶能在大腦上陪你海闊天空、但在生活中給你最牢固的擁抱。
              </p>
            )}
            {freedomLevel > 65 && (
              <p className="animate-fade-in">
                <strong>🌪️ 當你向「絕對自由」傾斜時：</strong> 
                身為<strong>顯示者</strong>，你天生內建「不要管我」的霸氣。如果感到被控制，你會立刻築起冰冷的高牆退回「2 爻隱士」的洞穴中。但注意，如果過度冷漠抽離，會讓你的伴侶感到恐慌。請善用<strong>「告知」</strong>策略來減少無謂爭吵。
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Six Pillars of Her Relationship Blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Pillar 1: Path */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
          <span className="text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold font-mono rounded">
            PATH
          </span>
          <h4 className="text-base font-bold text-slate-200">① 「朋友變情人」勝率最高</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>命理依據：</strong> 人類圖 4 爻（機會網絡） + 星盤第七宮（伴侶宮）在射手座。
          </p>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            你對透過軟體「盲測」陌生人容易感到疲憊。你最容易發展長久關係的對象往往來自原本信任的朋友圈。你渴望伴侶首先是你的「最佳玩伴」和「人生導師」，先有智識和友誼的火花，才會點燃愛情。
          </p>
        </div>

        {/* Pillar 2: Queen */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
          <span className="text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold font-mono rounded">
            PRIDE
          </span>
          <h4 className="text-base font-bold text-slate-200">② 傲嬌女王需要專屬偏愛</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>命理依據：</strong> 月亮獅子座（第 3 宮）。
          </p>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            你的大腦理性，但心（月獅子）在愛情裡絕對需要「被捧在手心上」。你渴望的伴侶必須懂你的驕傲、欣賞你的才華，並且毫不吝嗇地給你讚美。你需要一個能帶著崇拜眼神看著你、把你當作唯一偏愛的人。
          </p>
        </div>

        {/* Pillar 3: Body */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
          <span className="text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold font-mono rounded">
            CONTRAST
          </span>
          <h4 className="text-base font-bold text-slate-200">③ 反差萌：大腦自由/身體安穩</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>命理依據：</strong> 雙子座 ✕ 金星金牛落 12 宮。
          </p>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            這是你愛情的核心矛盾。你需要足夠的自主精神空間；但金星卻落在極度需要安全感的金牛座。這意味著你一旦認可，會變得非常專情，極度渴望高品質的肢體觸覺、感官享受與安逸穩固的生活品質。
          </p>
        </div>

        {/* Pillar 4: Dealbreaker */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3 border-l-2 border-l-rose-500">
          <span className="text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold font-mono rounded flex items-center gap-1 w-fit">
            <ShieldAlert className="w-3 h-3" />
            DEALBREAKER
          </span>
          <h4 className="text-base font-bold text-slate-200">④ 絕對地雷：控制狂與情勒</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>命理依據：</strong> 顯示者（Manifestor） + 2 爻（隱士）。
          </p>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            你天生內建「不要管我」的霸氣程式。如果伴侶試圖控制你的行蹤、或進行情緒勒索，你那隱士（2爻）特質會讓你立刻築起高牆。伴侶必須理解你的「暫時抽離」是為了自體充電，而不是冷淡不愛。
          </p>
        </div>

        {/* Pillar 5: Spouse */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3 border-l-2 border-l-indigo-500">
          <span className="text-xs px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold font-mono rounded flex items-center gap-1 w-fit">
            <User className="w-3 h-3" />
            SPOUSE ARCHETYPE
          </span>
          <h4 className="text-base font-bold text-slate-200">⑤ 命中注定：尊重絕對界線的智識導師</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>命理依據：</strong> 紫微「夫妻宮」空宮（鈴星、天刑、蜚廉，借對宮巨門昌曲）+ 7宮射手座。
          </p>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            你的夫妻宮是「空宮」，藏有「鈴星、天刑、蜚廉」三煞。這意味著你對伴侶有著極度嚴格的「隱形考核標準（天刑）」。結合第七宮射手座與借對宮的「巨門、昌曲」，這個伴侶必須在智識上能讓你折服，口條極佳且具備高雅才華，像是一個人生導師能帶著你拓寬視野。他必須非常懂得「溝通與尊重界線」，因為一旦他觸犯了你的原則，你的「鈴星（冷戰）」與「蜚廉（決裂）」就會瞬間啟動，毫不留情地將對方三振出局。
          </p>
        </div>

        {/* Pillar 6: Timeline */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
          <span className="text-xs px-2 py-0.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold font-mono rounded">
            TIMELINE
          </span>
          <h4 className="text-base font-bold text-slate-200">⑥ 發展軌跡：慢火細熬與隱密結界</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            <strong>命理依據：</strong> HD 情緒中心權威 + 金星落 12 宮。
          </p>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            你的感情絕不是一見鍾情。作為情緒權威，你在初期會經歷多次的「好感與冷卻」，需要時間看此人是否對味。此外，金星落在代表隱密的第12宮，代表你享受那種「只有我們兩個人懂」的低調秘密結界，渴望靈魂伴侶的精神交流。
          </p>
        </div>

      </div>

      {/* Love Action Guide card */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h4 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          給你的專屬感情實踐必修課
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
            <strong>💡 實施「主動告知」策略：</strong>
            <p className="text-slate-400 mt-1">
              當你空白薦骨累了，需要回洞穴獨處時，千萬不要突然冷漠消失。大方告知對方「我這週末想一個人待在家看書充電，是我的身體充電需要，不是針對你喔。」這能幫你省去 90% 無謂的猜忌 and 爭吵！
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
            <strong>💡 練習坦誠脆弱：</strong>
            <p className="text-slate-400 mt-1">
              月亮獅子有時為了「面子」而表現得過於傲嬌或冰冷，明明渴望擁抱卻推開對方。在安全的、你認定的 12 宮私人結界裡，試著放下獅子的驕傲，向伴侶大膽索取你需要專屬擁抱和安撫的渴望。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
