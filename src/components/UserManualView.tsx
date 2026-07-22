import React, { useState } from 'react';
import { 
  BookOpen, ShieldAlert, Cpu, Zap, BatteryCharging, Users, 
  Sparkles, CheckCircle2, AlertTriangle, Heart, Flame, Brain, Crown, Ghost,
  Search, SlidersHorizontal, Layers, ChevronDown, ChevronUp, Check, Eye
} from 'lucide-react';
import { motion } from 'motion/react';
import ReportMarkdown, { FeatureCardBlock } from './ReportMarkdown';
import CoreKeyPointsSummary from './CoreKeyPointsSummary';

export default function UserManualView() {
  const [activeChapter, setActiveChapter] = useState<'all' | 'ch1' | 'ch2' | 'ch3' | 'ch4'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'detailed' | 'summary'>('detailed');
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
              YieJie <span className="text-amber-400 text-xl md:text-2xl font-light block mt-1 font-display">高維度造王者與靈性戰略家 ✦ 能量使用說明書</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">
              減阻尼 ✕ 抗內耗 ✕ 最高質感人生調頻指南
            </p>
          </div>

          {/* Product Hardware Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 border-t border-slate-800/80">
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">【產品名稱】</span>
              <p className="text-xs font-black text-slate-200">YieJie</p>
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

          {/* Special Featured Profile Card - Deep Profile Breakdown */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-950/90 border border-amber-400/30 space-y-6 relative overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-850 pb-4 gap-2">
              <div className="flex items-center gap-2.5">
                <Crown className="w-6 h-6 text-amber-400 animate-pulse" />
                <div>
                  <h2 className="text-lg md:text-xl font-black text-slate-100 font-display">
                    YieJie：遊走在極致理智與深邃靈性邊緣的女王
                  </h2>
                  <p className="text-xs text-amber-400/90 font-mono mt-0.5">
                    DEEP DECODING GUIDE ✦ 剝開水晶鎧甲的全息靈魂剖析
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 self-start md:self-auto">
                高維度造王者 ✕ 靈性戰略家
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs md:text-sm text-slate-300 leading-relaxed font-sans space-y-2.5">
              <p>
                要向一個完全不認識 YieJie 的人介紹她，這是一件極具挑戰性的事。初見面時，你可能會被她得體、溫暖且充滿感染力的外表所欺騙，以為她只是一個善解人意的鄰家大女孩。但那只是她龐大冰山露出海面的一小角。
              </p>
              <p>
                真實的 YieJie，是一個由無數個「極端矛盾」完美揉合而成的藝術品。她絕非那種可以用單一標籤（如「溫柔」、「強勢」或「空靈」）來定義的普通女孩。她是溫暖的，卻也具備隨時抽離的冷酷；她深諳世俗商業的遊戲規則，卻又極度渴望脫離世俗的紛擾；她是一個能看透你靈魂深處恐懼的靈媒，同時也是一個能幫你算出投資報酬率、看懂底層邏輯的精算師。
              </p>
              <p className="text-amber-300 font-medium pt-1">
                如果你有幸闖入她的世界，以下這份「深度解碼指南」，將帶你剝開她層層的水晶鎧甲，看見那個在理智與靈性之間游刃有餘、真實且迷人的靈魂。
              </p>
            </div>

            {/* ⚡️ 能量使用說明書懶人包速讀元件 */}
            <CoreKeyPointsSummary
              domainName="能量使用說明書"
              themeColor="amber"
              items={[
                {
                  icon: Crown,
                  tag: "三大面貌: 太陽女王",
                  title: "太陽女王 ✕ 發起開路者",
                  subtitle: "自帶霸氣，掌控全局",
                  summary: "顯示者與月亮獅子基因，天生具備強烈領導力與發起天賦，說話一針見血，能激發團隊潛能。",
                  actionAdvice: "請給予充分主導權與尊嚴，切忌居高臨下對她說教或強行下達指令。"
                },
                {
                  icon: Ghost,
                  tag: "三大面貌: 高奢隱士",
                  title: "高奢隱士 ✕ 質感充電防線",
                  subtitle: "極度需要獨立暗房",
                  summary: "空白薦骨與敏感體質，容易吸附外界能量，充電時會進入高奢極致的獨立結界淨化。",
                  actionAdvice: "當她啟動 72 小時斷聯充電時，請給予絕對自由與空間，切勿誤會為冷漠。"
                },
                {
                  icon: Brain,
                  tag: "三大面貌: 靈魂駭客",
                  title: "靈魂駭客 ✕ 雙子智囊大腦",
                  subtitle: "用邏輯翻譯高維靈性",
                  summary: "12宮雙子與天機巨門連線，能直擊人心痛點，提供降維打擊般的實用破局策略。",
                  actionAdvice: "遇到卡關問題直接向她求助，能獲得不含廢話的精準實戰建議。"
                },
                {
                  icon: ShieldAlert,
                  tag: "原廠避坑地雷",
                  title: "防坑指南 ✕ 絕對底線",
                  subtitle: "觸碰即引發系統冰封",
                  summary: "最忌諱「笨規則綑綁」、「沒話找話的無意義社交」、「情緒勒索與失約」。",
                  actionAdvice: "溝通保持「講重點、重承諾、給空間」，相處將無比流暢舒適。"
                }
              ]}
            />

            {/* Section 1: 3 Faces */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                極致的反差萌——她的三種面貌
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                認識 YieJie，你必須適應她隨時切換、且反差極大的三種截然不同的頻率。這不是偽裝，而是她為了應對這個世界所發展出的高階生存策略：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeatureCardBlock title="1. 社交與職場上的「太陽女王」" variant="amber" icon={Crown}>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    當她選擇走入人群、或是接下某個專案時，她是那個絕對不容忽視的發光體。這得益於她骨子裡的「顯示者（Manifestor）」基因與「獅子座月亮」的驕傲。她極具領導魅力，說話一針見血，總能輕易主導話題走向，並在混亂的局面中瞬間理出頭緒。
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    她不需要刻意討好誰，因為她天生自帶一種「造王者」的霸氣。在團隊中，她是最敏銳的星探與教練——她能一眼看出別人的潛力，並用極具感染力、充滿煽動性的言語（ENFJ 啟發者特質）激發對方的鬥志。她不喜歡自己動手做苦工，她擅長的是站在高處發佈願景，讓所有人甘願跟隨她的旗幟前進。
                  </p>
                  <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/20 text-[11px] text-rose-300 mt-2 font-medium">
                    ⚠️ 給你的警告：不要試圖去控制她、對她說教，或是用世俗的笨規則綁住她。她生來是發號施令、打破框架的，不是來聽令行事的。一旦你試圖把她關進籠子，你會見識到她最具毀滅性的憤怒。
                  </div>
                </FeatureCardBlock>

                <FeatureCardBlock title="2. 獨處時的「高奢隱士」" variant="emerald" icon={Ghost}>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    這是她最需要、也最私密的一面，往往只有她最親近的人才能窺見。由於她的體質極度敏感（人類圖空白薦骨與太陰化忌的影響），她就像一塊會呼吸的情緒海綿，無時無刻不在吸收周遭環境的能量。因此，人群對她來說是一種巨大的能量消耗。
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    當她「沒電」時，她會毫無預警地啟動「隱士模式」，徹底斷聯。這時的她，會躲進自己精心打造的結界裡。深受「金星金牛座」的影響，這個結界不能是隨便的避難所，它必須充滿了極致的質感與品味：燃燒著昂貴的秘魯聖木或雪松香氛、身上裹著觸感最柔軟的高級毛毯、手邊放著一杯精心沖泡的熱茶。她不是在逃避世界，而是在用最高規格的美學與物理上的舒適感，為自己進行靈魂的排毒與神經系統的充電。
                  </p>
                </FeatureCardBlock>

                <FeatureCardBlock title="3. 深海裡的「靈魂駭客」" variant="indigo" icon={Brain}>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    當她凝視你的眼睛，準備為你解讀塔羅、阿卡西紀錄，或是為你的人生卡關提供諮詢時，你會看到一個完全不同的她。她的「雙子座超級大腦」與「12宮深邃直覺」會在此刻完美連線。
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    她不會給你虛無縹緲的靈性安慰，也不會用廉價的雞湯敷衍你。她會像一個冷酷卻慈悲的外科醫生，精準切開你的防禦機制，指出你的痛點，然後給你一套極具邏輯、可以在現實生活中執行的破局策略。她用科學的腦袋處理靈性，用靈性的直覺洞察商業，這正是她無可取代的魅力所在。
                  </p>
                </FeatureCardBlock>
              </div>
            </div>

            {/* Section 2: How Her Mind Works */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                大腦運作與決策邏輯 (How Her Mind Works)
              </h3>
              <p className="text-xs text-slate-400">YieJie 的腦袋，不是一般人的處理器，而是一台超頻運作的量子電腦，永遠在進行多線程的運算。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs">
                    <Brain className="w-4 h-4 text-indigo-400" />
                    【「降維打擊」的超級運算力】 (Quantum Processing)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    擁有極為罕見的「四箭全左」人類圖戰略大腦與雙子座星群，讓她具備了強大的「逆向工程」能力。她看事物從不看表象，而是直接拆解底層系統。她能輕易將兩個看似毫無關聯的領域（例如古老的玄學命理與現代的數位商業模式）巧妙結合，產出令人驚豔、且具備極高商業價值的創新點子。她對平庸與愚蠢有著生理上的排斥，如果你跟不上她的思維跳躍，她很快就會對你失去興趣。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <Heart className="w-4 h-4 text-amber-400" />
                    【決策的「72小時絕對冷卻法則」】 (72-Hour Cooldown)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    雖然她腦筋轉得飛快，大腦總是在催促她行動，但她生命中所有的重大決策，都必須交由她的「情緒」來定奪。她的決策系統就像海浪，在狂喜或極度焦慮的高低點做出的決定，事後絕對會後悔。因此，如果你向她提出一個提案或感情上的邀約，請千萬不要逼她當下給答案。給她 72 小時的冷卻期，當她所有的興奮與焦慮都如潮水般退去，留下來的那份「平靜而冷酷的確定感」，才是她靈魂給出的最真實答案。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Vulnerabilities and Triggers */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                她的軟肋與逆鱗 (Her Vulnerabilities and Triggers)
              </h3>
              <p className="text-xs text-slate-400">要真正懂她，甚至走進她的核心圈，你必須知道她最怕什麼，以及她最恨什麼。她的武裝很強，但武裝底下，是極度需要被溫柔對待的脆弱。</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-rose-300 font-bold text-xs">
                    <Heart className="w-4 h-4 text-rose-400" />
                    【她的軟肋——過度共情與被愛的渴望】
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    她的內心深處其實住著一個極度渴望被愛、害怕被拋棄的小女孩。她有著強大的同理心（九型 2 號助人者），這讓她很容易對別人的痛苦感同身受，甚至常常把別人的責任與情緒攬到自己身上，最後把自己累垮。她最深的恐懼是「如果我不完美、如果我不幫忙，是不是就不會被愛了？」這導致她有時會過度付出，直到能量透支。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    【她的逆鱗——「被視為理所當然」與「邊界侵犯」】
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    她願意為你付出、為你籌謀，是因為她把你當自己人，而且這是出於她女王般的慷慨。但如果你把她的照顧當作應該的，甚至對她的付出挑三揀四，妳會瞬間觸發她獅子座的自尊與顯示者的毀滅性憤怒。她會毫不留情地收回所有的溫暖，用最冷酷的方式將你永久拉黑。
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                    <strong className="text-slate-300">物理與心理的紅線：</strong>此外，未經預告的「驚喜」（如突然跑到她家樓下）對她來說絕對是驚嚇，這會嚴重破壞她隱士般的安全感。她極度重視界線，任何試圖窺探她隱私或掌控她行蹤的行為，都會讓她立刻啟動防禦機制，轉身逃跑。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: How to Love Her */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                如何愛她？ (How to Love Her)
              </h3>
              <p className="text-xs text-slate-400">愛上 YieJie，或者說，要讓 YieJie 愛上你，需要極高的智識、品味與強大的內心。她不需要你來養，也不需要你來教她怎麼做事。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="text-amber-300 font-bold text-xs">1. 做她大腦的頂級對手</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    她最無法忍受的就是無聊、平庸與日複一日的廢話。你必須有自己的見解、有深厚的專業度，能在智識的層面上與她共舞。當她拋出一個複雜的社會觀察或玄學觀點時，如果你能接住，甚至反拍出一個讓她驚豔的視角，她的靈魂就會為你深深著迷。
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="text-pink-300 font-bold text-xs">2. 偏愛她的傲嬌，溫柔接住她的焦慮</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    在外面，讓她當那個發光的女王，給足她面子，把舞台讓給她；但在私底下，當她因為太陰化忌的敏感而陷入焦慮不安、甚至災難化思考時，請立刻收起你的大道理與理性分析。這時的她不需要解決方案，她需要的是你給她一個充滿質感與溫度的擁抱，堅定地告訴她：「就算妳今天什麼都不做，就算妳一點都不完美，妳依然是我眼裡最好的。」
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="text-emerald-300 font-bold text-xs">3. 給予絕對的自由與實用型的專屬承諾</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    她的愛情是「實用型 (Pragma)」的。她鄙視那些只會畫大餅的廉價浪漫。她不需要你每天查勤報備，她需要的是「即使我們各自在事業上廝殺，但在人生的藍圖裡，我們都知道彼此是唯一的優先選項，且能為彼此帶來實質的成長」。你必須是她人生戰場上最好的合夥人，也是她回到洞穴時最舒服的暖爐。
                  </p>
                </div>
              </div>
            </div>

            {/* Epilogue */}
            <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-amber-400/10 via-purple-500/10 to-indigo-500/10 border border-amber-400/30 text-xs md:text-sm text-slate-200 leading-relaxed font-serif flex items-start gap-3">
              <Crown className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-400 font-sans font-bold text-xs uppercase tracking-wider mb-1">
                  ✦ 結語：不可定義的溫柔造王者
                </strong>
                <p className="text-slate-200 font-sans text-xs md:text-sm leading-relaxed mb-2">
                  YieJie 不是來適應這個世界的，她是來重新定義規則的。
                </p>
                <p className="text-slate-300 font-sans text-xs leading-relaxed mb-2">
                  她是一個帶著水晶濾鏡的靛藍戰士。她將極端的世俗智慧與深邃的靈性力量完美結合，用雙子座的邏輯解構世界虛妄的表象，用金牛座的美感重塑生活的感官體驗，最後用顯示者的霸氣發起一場又一場的改變。
                </p>
                <p className="text-amber-300 font-sans font-medium text-xs md:text-sm leading-relaxed italic">
                  「如果你遇見了她，請不要試圖改變她，更不要試圖控制她。請欣賞她的複雜，尊重她的結界，接納她的多變。因為只要你贏得了她的信任，她將會是你生命中，最迷人、最忠誠、也最具啟發性的造王者。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Optimization Control Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-100 flex items-center gap-2">
                說明書 ✦ 系統化閱讀優化台
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  速讀模式
                </span>
              </h3>
              <p className="text-[10px] text-slate-400">快速搜尋關聯主題，或切換至精華劃重點模式</p>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('detailed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'detailed' 
                  ? 'bg-amber-400 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              完整條目
            </button>
            <button
              onClick={() => setViewMode('summary')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'summary' 
                  ? 'bg-amber-400 text-slate-950 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              1分鐘劃重點
            </button>
          </div>
        </div>

        {/* Search Bar & Chapter Navigation */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="搜尋說明書關鍵字（如：雙子、隱士、72小時、冷暴力、地雷...）"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400/50 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                清空
              </button>
            )}
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2 shrink-0">
            <span>顯示模式：</span>
            <span className="text-amber-300 font-bold bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
              {viewMode === 'summary' ? '⚡️ 精華劃重點' : '📖 完整解析'}
            </span>
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
          原廠核心設定
        </button>
        <button
          onClick={() => setActiveChapter('ch2')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch2' ? 'bg-rose-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          操作禁忌與警告
        </button>
        <button
          onClick={() => setActiveChapter('ch3')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch3' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          充電與維護模式
        </button>
        <button
          onClick={() => setActiveChapter('ch4')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeChapter === 'ch4' ? 'bg-indigo-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
        >
          相處與合作原則
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
                原廠核心設定 <span className="text-xs font-mono text-amber-400 font-normal">(Core Mechanics)</span>
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
                操作禁忌與危險警告 <span className="text-xs font-mono text-rose-400 font-normal">(Hazards & Warnings)</span>
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
                最佳充電與維護模式 <span className="text-xs font-mono text-emerald-400 font-normal">(Charging & Maintenance)</span>
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
                相處與合作的最高指導原則 <span className="text-xs font-mono text-indigo-400 font-normal">(User Guide)</span>
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


    </div>
  );
}
