import React, { useState } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { Brain, Sparkles, Shield, Heart, Zap, RefreshCw, Layers, Compass, HelpCircle } from 'lucide-react';
import ReflectionNotes from './ReflectionNotes';

export default function HumanDesignView() {
  const data = LAI_YI_CHIEH_DATA.humanDesign;
  const [selectedCenter, setSelectedCenter] = useState<string | null>('情緒中心');
  const [selectedKey, setSelectedKey] = useState<string | null>('35');

  const centerDetails: Record<string, { title: string; type: 'defined' | 'undefined'; text: string; guide: string }> = {
    '情緒中心': {
      title: '情緒中心 (Emotional Center) — 定義 (Defined)',
      type: 'defined',
      text: '你擁有著一個「有定義」的情緒中心，且它是你的「決策權威」。你的情緒像波浪一樣有規律地起伏。你對世界的感受是豐富且深刻的。然而，你最大的課題是不要在情緒的高點（過度興奮）或低谷（過度沮喪）做決定。你必須學會讓情緒的波浪完整跑完，歸於清明平靜。',
      guide: '重大決定至少緩衝 3 天。平靜不帶衝動時浮現的那個決定，才是最安全且真實的。'
    },
    '喉嚨中心': {
      title: '喉嚨中心 (Throat Center) — 定義 (Defined)',
      type: 'defined',
      text: '你有定義的喉嚨中心，且與 G 中心、情緒中心相連通，這使你具備極強的「發言、顯化與發起」能量。你的聲音自帶力量，能直接表達你的情感與認同（G中心）。作為顯示者，你說出的話就像是向宇宙發射的電波，能夠引領他人並打破現狀。',
      guide: '多寫、多說、多發表。主動且理直氣壯地表達你的體悟，因為你的聲音自帶顯化魔法。'
    },
    'G中心': {
      title: 'G中心 (G Center) — 定義 (Defined)',
      type: 'defined',
      text: 'G 中心掌管著愛、方向、以及「自我認同」。你的 G 中心是有定義的，這代表你內心深處有一套穩定且不容易被外界真正改變的「我是誰」以及「我往哪裡去」的底層程式。你的認同與喉嚨相連，能流暢地展現你真實的自我，並透過聲音去傳播你的存在。',
      guide: '信任你對自己生活方向的直覺，不需要依賴別人來定義你的價值。'
    },
    '薦骨中心': {
      title: '薦骨中心 (Sacral Center) — 空白 (Undefined)',
      type: 'undefined',
      text: '薦骨中心掌管源源不絕的持續工作體力。你的薦骨中心是「空白」的，這代表你「不是」一個生產者，不適合走天天打卡、長時間不間斷的傳統勞碌路線。你具備爆發性工作的能力，但電量有限，如果長期過度消耗薦骨，容易導致神經系統嚴重耗弱或過載。',
      guide: '允許自己累了就躺平耍廢。在電力剩下 20% 之前就主動休息。建立外包系統，將繁瑣的持續性勞動交給有薦骨的生產者夥伴。'
    },
    '頭腦中心': {
      title: '頭腦與邏輯中心 (Head & Ajna Center) — 空白 (Undefined)',
      type: 'undefined',
      text: '你的頭部與邏輯中心在人類圖中是空白的。這是一個絕佳的「不設限思考」天賦。你不會卡在單一的思維定勢中，可以像變色龍一樣吸收和理解各種不同的思想體系（這與你雙子星群和紫微空宮完美呼應）。你能客觀看清誰的思考是混亂的。',
      guide: '不要把腦袋空白當作健忘。把它當作可以隨意下載、隨時格式化的超級雲端大硬碟。不盲從任何權威，只提煉有用的邏輯。'
    },
    '直覺與意志力中心': {
      title: '直覺與意志力中心 (Spleen & Ego Center) — 空白 (Undefined)',
      type: 'undefined',
      text: '這些中心空白代表你容易在當下吸收外界的安全感與自我價值感。你可能容易為了自證價值、或因為害怕未知而做出不符合能量原則的妥協。',
      guide: '不要企圖向別人證明你的能幹。建立好「不妥協清單」，以此來捍衛你空白能量中心的邊界。'
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* HD Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-rose-400 font-display flex items-center gap-1.5 uppercase tracking-wider">
              <Brain className="w-4 h-4" />
              Human Design System
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-mystic">等待情緒清明的發起者</h2>
            <p className="text-xs md:text-sm text-slate-400">顯示者 (Manifestor) ✕ 2/4 人生角色 ✕ 情緒中心權威 ✕ 一分人</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 font-mono border border-rose-500/20">一分人能量池</span>
            <span className="text-xs px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 font-mono border border-indigo-500/20">右邊角度交叉意識2</span>
            <span className="text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 font-mono border border-amber-500/20">四箭全左 Quad Left</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Bodygraph and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Interactive Simplified Bodygraph */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-900 mb-6">
              <h3 className="text-sm font-bold text-slate-200">能量中心全息分布圖</h3>
              <span className="text-[10px] text-rose-400 font-mono uppercase">Interactive Graph</span>
            </div>

            {/* Simulated Interactive Vector Bodygraph */}
            <div className="relative aspect-[3/4] max-w-[280px] mx-auto border border-slate-900 rounded-2xl bg-slate-900/20 p-4 flex flex-col justify-between items-center overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient" />
              
              {/* Head Center */}
              <button 
                onClick={() => setSelectedCenter('頭腦中心')}
                className={`w-10 h-8 clip-triangle transition-all duration-300 ${selectedCenter === '頭腦中心' ? 'bg-rose-500/20 ring-2 ring-rose-400' : 'bg-slate-800 hover:bg-slate-750'} text-[9px] font-bold text-slate-400 flex items-center justify-center`}
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              >
                <span className="mt-2">HEAD</span>
              </button>

              {/* Ajna Center */}
              <button 
                onClick={() => setSelectedCenter('頭腦中心')}
                className={`w-12 h-10 clip-triangle-down transition-all duration-300 ${selectedCenter === '頭腦中心' ? 'bg-rose-500/20 ring-2 ring-rose-400' : 'bg-slate-800 hover:bg-slate-750'} text-[9px] font-bold text-slate-400 flex items-center justify-center`}
                style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}
              >
                <span className="mb-2">AJNA</span>
              </button>

              {/* Throat Center */}
              <button 
                onClick={() => setSelectedCenter('喉嚨中心')}
                className={`w-12 h-12 rounded-lg transition-all duration-300 ${selectedCenter === '喉嚨中心' ? 'bg-indigo-600 font-extrabold text-slate-100 shadow-[0_0_12px_rgba(99,102,241,0.5)] ring-2 ring-indigo-400' : 'bg-slate-800 hover:bg-slate-750'} text-[10px] text-slate-400 flex items-center justify-center`}
              >
                THROAT
              </button>

              <div className="w-full flex justify-between px-2">
                {/* Spleen Center (open) */}
                <button 
                  onClick={() => setSelectedCenter('直覺與意志力中心')}
                  className={`w-10 h-12 transition-all duration-300 ${selectedCenter === '直覺與意志力中心' ? 'bg-rose-500/20 ring-2 ring-rose-400' : 'bg-slate-800 hover:bg-slate-750'} text-[9px] font-bold text-slate-400 flex items-center justify-center`}
                  style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
                >
                  SPL
                </button>

                {/* G Center (defined) */}
                <button 
                  onClick={() => setSelectedCenter('G中心')}
                  className={`w-10 h-10 rotate-45 transition-all duration-300 ${selectedCenter === 'G中心' ? 'bg-indigo-600 text-slate-100 shadow-[0_0_12px_rgba(99,102,241,0.5)] ring-2 ring-indigo-400' : 'bg-slate-800 hover:bg-slate-750'} text-[10px] text-slate-400 flex items-center justify-center`}
                >
                  <span className="-rotate-45">G</span>
                </button>

                {/* Heart Center (open) */}
                <button 
                  onClick={() => setSelectedCenter('直覺與意志力中心')}
                  className={`w-8 h-8 rotate-[15deg] transition-all duration-300 ${selectedCenter === '直覺與意志力中心' ? 'bg-rose-500/20 ring-2 ring-rose-400' : 'bg-slate-800 hover:bg-slate-750'} text-[9px] font-bold text-slate-400 flex items-center justify-center`}
                  style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                >
                  EGO
                </button>
              </div>

              {/* Emotional Center (defined) */}
              <div className="w-full flex justify-end px-2">
                <button 
                  onClick={() => setSelectedCenter('情緒中心')}
                  className={`w-10 h-12 transition-all duration-300 ${selectedCenter === '情緒中心' ? 'bg-indigo-600 text-slate-100 shadow-[0_0_12px_rgba(99,102,241,0.5)] ring-2 ring-indigo-400' : 'bg-slate-800 hover:bg-slate-750'} text-[9px] font-bold flex items-center justify-center`}
                  style={{ clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}
                >
                  EMO
                </button>
              </div>

              {/* Sacral Center (open) */}
              <button 
                onClick={() => setSelectedCenter('薦骨中心')}
                className={`w-12 h-12 rounded transition-all duration-300 ${selectedCenter === '薦骨中心' ? 'bg-rose-500/20 ring-2 ring-rose-400' : 'bg-slate-800 hover:bg-slate-750'} text-[10px] font-bold text-slate-400 flex items-center justify-center`}
              >
                SACRAL
              </button>

              {/* Root Center (open) */}
              <button 
                onClick={() => setSelectedCenter('薦骨中心')}
                className={`w-10 h-10 rounded transition-all duration-300 ${selectedCenter === '薦骨中心' ? 'bg-rose-500/20 ring-2 ring-rose-400' : 'bg-slate-800 hover:bg-slate-750'} text-[9px] font-bold text-slate-400 flex items-center justify-center`}
              >
                ROOT
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-900 text-center mt-4">
            <span className="text-[10px] text-slate-500">
              提示：點選上方人型圖中的中心標籤可解鎖對應運作細則
            </span>
          </div>
        </div>

        {/* Center Detail Panel */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
          {selectedCenter && centerDetails[selectedCenter] ? (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded text-xs font-bold font-mono uppercase ${centerDetails[selectedCenter].type === 'defined' ? 'bg-indigo-600 text-slate-100' : 'bg-rose-500/10 text-rose-300'}`}>
                  {centerDetails[selectedCenter].type === 'defined' ? '著色中心 (Defined)' : '空白中心 (Undefined)'}
                </span>
                <h4 className="text-base font-bold text-slate-200">{centerDetails[selectedCenter].title}</h4>
              </div>

              <div className="space-y-4">
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  {centerDetails[selectedCenter].text}
                </p>
                
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2">
                  <span className="text-xs text-rose-300 font-bold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-rose-400" />
                    能量場保養核心法則
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {centerDetails[selectedCenter].guide}
                  </p>
                </div>
              </div>

              {/* Channels Breakdown */}
              <div className="space-y-4 pt-4 border-t border-slate-900">
                <span className="text-xs text-rose-400 font-mono uppercase block tracking-wider font-bold">★ 雙通道能量吞吐循環 (Double-Loop Metabolism)</span>
                <p className="text-[11.5px] text-slate-300 leading-relaxed font-sans">
                  妳的靈魂帶有兩條極具傳奇色彩的通道，它們在妳體內完美咬合成一條<strong>「能量吸入 ➔ 蒸餾 ➔ 驚艷吐出」</strong>的完美循環閉環：
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-indigo-500/20 transition-all space-y-1.5">
                    <span className="text-xs font-bold text-indigo-300 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      吸入：通道 13-33 (浪子/見證者)
                    </span>
                    <p className="text-[11px] text-slate-300 leading-normal font-sans">
                      <strong>大腦吸附器：</strong> 人們常莫名對妳掏心掏肺。13號閘門幫妳「傾聽眾生故事與祕密」，33號閘門則在妳縮回 2 爻洞穴時將其分類整理。妳是歷史的記錄者與生命智慧的「蒸餾大師」。
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-indigo-500/20 transition-all space-y-1.5">
                    <span className="text-xs font-bold text-indigo-300 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      吐出：通道 35-36 (無常/體驗)
                    </span>
                    <p className="text-[11px] text-slate-300 leading-normal font-sans">
                      <strong>體驗開拓器：</strong> 將蒸餾後的智慧與妳親歷的生命無常相結合。妳帶領受眾去冒險（35），在起伏與震撼中體驗萬事萬物，並化為高能量、極具穿透力的作品發起（36）！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-24 text-center space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-600 mx-auto animate-bounce-slow" />
              <p className="text-xs text-slate-400">點選左側 Bodygraph 的任意區域解鎖 賴以婕 的特殊中心管道機理。</p>
            </div>
          )}

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 mt-6 flex gap-3">
            <Layers className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-200 block">2/4 人生角色: 隱士與機會網絡</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                你同時兼備「需要專屬空間（2爻）」與「機會來自真心交友圈（4爻）」的特質。最好的機會都不是冷冰冰的盲測，而是熟人、朋友圈的真心推薦。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extreme Strategic Brain - Quad Left Section */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-semibold font-mono">
            <Compass className="w-3.5 h-3.5" />
            HD PHS ADVANCED SYSTEM: QUAD LEFT
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-100">
            四箭頭全左 (Quad Left) 的極致戰略家
          </h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans max-w-4xl">
            你頭部的四個箭頭全部向左。這代表你擁有一個<strong>極度活躍、極致聚焦、極具戰略性眼光</strong>的超級大腦。
            你擁有超強的資料抓取、架構、和逆向拆解能力。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
            <div className="p-4 bg-slate-900 border border-slate-850 rounded-xl">
              <span className="text-xs font-bold text-amber-200 block">🧠 大腦想衝鋒，但身體沒電？</span>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                這是你一生中最大的物理矛盾：你那<strong>四向左的大腦</strong>一秒想出一萬個戰略，像一名衝鋒陷陣的將軍；但你的<strong>薦骨中心是空白的</strong>（電量有限）。如果盲目用身體去硬扛執行，你會瞬間爆發憤怒並陷入神經耗弱。
              </p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-850 rounded-xl">
              <span className="text-xs font-bold text-emerald-200 block">👑 破解指南：做運籌帷幄的軍師</span>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                請你務必把你極致的「戰略性」完全應用在「用腦策劃」上。定位自己為「建築師」而非「泥水匠」。發起項目並規劃出底層邏輯，然後將繁瑣的手工日常執行完全交給團隊外包，做一個在幕後笑傲江湖的軍師！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gene Keys Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-400" />
          <h3 className="text-lg font-bold text-slate-200">基因天命 (Gene Keys) 專屬煉金密碼</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.geneKeys.map((key) => (
            <div 
              key={key.code}
              onClick={() => setSelectedKey(key.code)}
              className={`p-5 rounded-2xl bg-slate-950 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${selectedKey === key.code ? 'border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.15)] ring-1 ring-rose-500/20' : 'border-slate-800 hover:border-slate-700'}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">{key.sphere}</span>
                  <span className="text-xs font-bold text-rose-300 font-mono">Gate {key.code}</span>
                </div>
                
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">陰影 (Shadow):</span>
                    <span className="text-slate-300 font-semibold">{key.shadow}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-rose-400 font-medium">天賦 (Gift):</span>
                    <span className="text-rose-300 font-bold">{key.gift}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-medium">悉地 (Siddhi):</span>
                    <span className="text-emerald-300 font-semibold">{key.siddhi}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 text-right mt-4">
                <span className="text-[10px] text-slate-500 hover:text-slate-300 transition-colors">
                  {selectedKey === key.code ? '檢視解析' : '點選檢視'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedKey && (
          <div className="p-5 rounded-2xl bg-slate-900 border border-rose-500/20 animate-fade-in text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
            {selectedKey === '35' && (
              <p>
                <strong>密碼 35 (太陽閘門)：從 飢餓 (Hunger) ➔ 冒險 (Adventure)。</strong> 
                你的靈魂天生充滿了對各種生活與情感體驗的「飢餓感」。請注意，不要為了填補內心的空虛而去狼吞虎嚥地學習或消費；允許自己單純去享受生命的浩瀚體驗與冒險本身。當你不再執著於結果，冒險將化為你無與倫比的智慧。
              </p>
            )}
            {selectedKey === '5' && (
              <p>
                <strong>密碼 5 (地球閘門)：從 急躁 (Impatience) ➔ 耐心 (Patience)。</strong> 
                雙子座星群容易追求快速度、高頻率，這讓你容易感到「急躁」。地球閘門 5 要求你尋找自我的物理規律與節奏，信任宇宙的完美時間。當你能在安穩的耐心與呼吸中發起（顯示者），一切資源都會精準地為你而合流。
              </p>
            )}
            {selectedKey === '63' && (
              <p>
                <strong>密碼 63 (潛意識太陽)：從 懷疑 (Doubt) ➔ 探究 (Inquiry)。</strong> 
                你腦海中天然存在對萬事萬物的「懷疑」，甚至是對自我的批判。請不要讓這種懷疑壓抑了你。將它轉化為對世界客觀、有系統、有邏輯的探詢。你是一個天然的除錯家與真理探索者，能夠為大眾解答生命的疑惑。
              </p>
            )}
            {selectedKey === '64' && (
              <p>
                <strong>密碼 64 (潛意識地球)：從 困惑 (Confusion) ➔ 想像力 (Imagination)。</strong> 
                當大量、零散的信息湧入你四箭全左的大腦時，你會在初期感到巨大的混亂與困惑。不要強求立刻理清頭緒，在放鬆的暗房時刻（12宮），這股困惑將轉化為無與倫比的靈感與想像力，迸發為劃時代的啟示！
              </p>
            )}
          </div>
        )}
      </div>

      {/* 讀者心得筆記 */}
      <ReflectionNotes moduleId="humandesign" moduleName="人類圖氣場與能量密碼" />
    </div>
  );
}
