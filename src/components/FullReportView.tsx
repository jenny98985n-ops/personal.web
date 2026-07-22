import React, { useState, useMemo } from 'react';
import UserManualView from './UserManualView';
import ReportMarkdown from './ReportMarkdown';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Compass, Brain, Flame, Award, Heart, DollarSign, Activity, 
  Search, Filter, Bookmark, Copy, Check, ChevronDown, ChevronUp, BookOpen, 
  Star, Target, Shield, HelpCircle, Eye, RefreshCw, Compass as CompassIcon,
  CheckCircle2, Circle, SlidersHorizontal, BookOpenCheck, BookmarkCheck, Trash2,
  List, LayoutGrid, Clock, Maximize2, Type, ChevronLeft, ChevronRight, X, Zap, ShieldCheck
} from 'lucide-react';

interface ReportSection {
  id: number;
  title: string;
  category: 'personality' | 'humandesign' | 'destiny' | 'relationship' | 'wealth' | 'spirituality' | 'future';
  categoryLabel: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  tagline: string;
  content: React.ReactNode;
}

interface FullReportViewProps {
  initialCategory?: string;
  hideBanner?: boolean;
}

export default function FullReportView({ initialCategory = 'all', hideBanner = false }: FullReportViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
    1: true, 2: true, 5: true, 7: true, 8: true, 22: true, 23: true, 24: true
  });
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: '全部章節', count: 89, icon: BookOpen },
    { id: 'personality', name: '性格心智', count: 21, icon: Compass },
    { id: 'humandesign', name: '人類圖解碼', count: 6, icon: Brain },
    { id: 'destiny', name: '東方玄學', count: 12, icon: Flame },
    { id: 'relationship', name: '親密關係', count: 13, icon: Heart },
    { id: 'wealth', name: '財富與事業', count: 12, icon: DollarSign },
    { id: 'spirituality', name: '身心靈實踐', count: 21, icon: Activity },
    { id: 'future', name: '未來願景', count: 4, icon: Sparkles },
  ];

  const sections: ReportSection[] = [
    {
      id: 1,
      title: "核心性格與心智運作：風與火的交響樂",
      category: "personality",
      categoryLabel: "核心性格",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "太陽雙子（12宮）、上升雙子（1宮）、月亮獅子（3宮）、水星雙子逆行（1宮）",
      content: (
        <div className="space-y-3">
          <p>這是<strong>「超級大腦」</strong>的配置。上升與太陽皆落雙子，代表你對世界充滿無窮的好奇心，學習能力極強。</p>
          <p>水星第一宮逆行，意味著思維是「向內探索」的，賦予你絕佳的獨立批判思考能力。搭配「月亮獅子在第三宮」，你內心深處非常渴望你的觀點能被大眾看見並給予掌聲。</p>
        </div>
      )
    },
    {
      id: 50,
      title: "占星命盤深度解碼：雙子大腦、第四宮創傷與靈性造王者",
      category: "personality",
      categoryLabel: "星盤解碼",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "命主水逆一宮 ✦ 日金落入12宮 ✦ 四宮火凱合相 ✦ MC土星雙魚",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>這是一張極具才華、同時佈滿了「靈魂挑戰」的星盤藍圖：</p>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">① 上升雙子 + 水星雙子逆行 (第 1 宮)：向內反芻的超級運算機</strong>
              <p className="text-slate-300">
                命主星水星入廟在雙子座落第 1 宮，且是逆行狀態。思維轉速比常人快數倍，腦內劇場極度活躍。妳在表達前已向內推演無數種可能性。妳的聰明是向內挖掘的，擁有極強的「逆向工程與除錯（Debugging）」能力。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">② 太陽雙子 + 金星金牛 (第 12 宮)：隱密的靈魂結界與質感追求</strong>
              <p className="text-slate-300">
                12宮無邊界且代表潛意識，太陽落此讓妳核心意志具有隱遁特質。金星在金牛入廟代表極致美感與物質安全感（實用型愛情），但因落在 12 宮，妳的享受非常私密，最愛在安全空間裡享受極致物質體驗來自我充電。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">③ 月亮獅子 (第 3 宮)：需要麥克風的傲嬌女王</strong>
              <p className="text-slate-300">
                月亮在獅子座落第 3 宮（溝通與學習）。安全感來自「觀點被大眾聽見並讚賞」。妳必須透過講話、寫作或講座來獲得群眾對妳才華的崇拜與掌聲，以此滋養靈魂。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">④ 火星處女 + 凱龍星處女 (第 4 宮)：第四宮童年創傷的星象鐵證</strong>
              <p className="text-slate-300">
                代表行動力的火星與創傷凱龍星在第四宮（家庭）精準合相於挑剔的處女座。妳在童年時期的主動與發起，遭遇了極嚴格挑剔的對待，讓妳學會「如果不完美、不先照顧他人情緒就得不到愛」的生存代價，進而長出討好型面具。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-purple-400 block mb-1">⑤ 土星雙魚 + 天頂 MC 雙魚 (第 10 宮)：將靈性與夢想系統化的終極天命</strong>
              <p className="text-slate-300">
                第 10 宮事業天頂在雙魚座且有土星坐鎮。代表大器晚成與最終建立權威。妳的天命是「將無形的靈性、療癒與智慧（雙魚），建立成看得見的系統、架構與商業模式（土星）」。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-400/5 to-purple-400/5 border border-blue-500/20 text-slate-300">
            <strong className="text-blue-400 block mb-1">💡 星盤綜合覺察與優化行動：</strong>
            直視第四宮的完美主義創傷；擁抱第一宮水逆寫下腦內想法作為發表素材；大膽迎接第十宮的使命，用顯示者的發起力將靈感在世俗社會建立起影響力帝國。
          </div>
        </div>
      )
    },
    {
      id: 37,
      title: "心理學 MBTI 深度解碼：ENFJ 啟發者與命盤的終極碰撞",
      category: "personality",
      categoryLabel: "MBTI",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "天生領導者與演說家 ✦ 審慎謀略與融洽社交 ✦ 顯示者主權的衝突",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>將現代心理學的 MBTI 測驗放入妳的命盤中對照，會發現這是一個令人驚嘆的「完美驗證」。妳的測試結果是 <strong>ENFJ（主人公/啟發者：外向、直覺、情感、判斷）</strong>。這個人格類型天生具備強大的領袖魅力與群體感染力，這正完美呼應了妳命盤中隱藏的「王者」與「發起」特質。</p>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-blue-400 block mb-1">① 「天生的領導者與演說家」背後的星象密碼</strong>
            <p className="text-slate-300">
              ENFJ 被譽為團隊中的「靈魂引領者」，善於鼓舞人心、溝通表達極具說服力。這完全是妳「雙子座群星（溝通之王）」加上「月亮獅子（渴望舞台與影響力）」的極致展現！搭配上八字中的「丙火日主」，只要一開口，就能自然吸引眾人目光。
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-blue-400 block mb-1">② 「審慎謀略」與「融洽社交」的雙面天賦</strong>
            <p className="text-slate-300">
              妳的「審慎」，正是來自於人類圖「四箭頭全左（Quad Left）的戰略型大腦」，以及情緒權威必須等待的機制。妳的「融洽社交」，則對應了 4 爻（機會網絡）與金星金牛（重視和諧）。深知成就大事必須建立互信的生態系。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/5 to-rose-400/5 border border-rose-500/20 text-xs">
            <strong className="text-rose-400 block mb-1">③ ENFJ 的核心矛盾：過度迎合他人 VS. 顯示者的自我主權</strong>
            <p className="text-slate-300 mb-2">
              ENFJ 最大弱點是「過於關注他人感受而忽略自身需求」；但妳的原廠設定是「顯示者」——來打破規則、不需徵求同意的王者。這種「想當霸道總裁，卻活成了保姆」的落差，就是能量經常被掏空的主因。
            </p>
            <strong className="text-amber-400 block mt-2">💡 破解戰略：</strong>
            <p className="text-slate-300">
              將 ENFJ 的「同理心」轉化為顯示者的「告知」。妳不需要為了迎合別人改變目標，只需要溫和且明確地「告知」他們決定。既滿足和諧需求，又保住主導權。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 38,
      title: "大五人格 (Big Five) 深度解碼：高敏銳度與高適應力的雙刃劍",
      category: "personality",
      categoryLabel: "大五人格",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "高開放外向 (雙子/獅子) ✦ 高親和 (2/4爻) ✦ 高神經質 (水晶體質)",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>大五人格測驗（Big Five）結果：高神經質（52）、高開放性（50）、高親和性（48）、高外向性（48），中盡責性（45）。這完美詮釋了妳為何總能在不同環境中游刃有餘，卻又時常感到內在耗竭。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 高開放性 (50) Ｘ 高外向性 (48)</strong>
              <p className="text-slate-300">
                這是「雙子座」與「四箭全左大腦」的科學證明！妳天生需要腦力激盪與新鮮感。高外向性則精準呼應了「月亮獅子」與「顯示者」，生來就是要站在舞台上發揮影響力的。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 高親和性 (48) VS. 顯示者的霸氣</strong>
              <p className="text-slate-300">
                本該「唯我獨尊」的顯示者，卻有極高親和性（ENFJ）。導致妳明明能直接下指令，卻總是去照顧別人感受。請把親和性留在「態度」上，在「執行」上堅守顯示者底線。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-teal-400/5 to-blue-500/5 border border-teal-500/20">
            <strong className="text-teal-400 block mb-1">✦ 高神經質 (52)：水晶體質的科學證明</strong>
            <p className="text-slate-300">
              不要把「神經質」當貶義詞！這正是妳「12 宮群星（潛意識大開）」與「空白薦骨（吸收他人情緒）」在科學上的呈現。妳的高神經質是因為雷達太過敏銳。當焦慮來襲，告訴自己這只是偵測到雜訊，透過 2 爻洞穴時間清理能量即可。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 39,
      title: "九型人格 (Enneagram) 深度解碼：2號助人者的權力遊戲與藝術昇華",
      category: "personality",
      categoryLabel: "九型人格",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "核心 2 號 ✦ 壓力瓦解向 8 號 (獅子憤怒) ✦ 成長整合向 4 號 (金牛美學)",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>九型人格測驗結果揭開潛意識動機：核心是 <strong>2 號（助人型）</strong>，帶有 1 號與 3 號側翼。在壓力下會瓦解向 <strong>8 號（領袖型）</strong>，在成長時會整合向 <strong>4 號（藝術型）</strong>！</p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              <strong className="text-blue-400 block mb-1">① 核心 2 號 (Helper)：以愛為名的價值追尋</strong>
              <p className="text-slate-300">潛意識相信「只要我對別人有用，我就會被愛」。這是妳八字中滿盤「正印星（母性、照顧）」與 ENFJ 的極致發揮，總不自覺地想去幫忙。</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
              <strong className="text-rose-400 block mb-1">② 壓力下的 8 號 (Challenger) 瓦解：顯示者的憤怒反撲</strong>
              <p className="text-slate-300">
                當 2 號的付出沒得到回報，妳會瞬間切換到 8 號，變得強勢、控制欲爆表。當「月亮獅子」自尊受挫或「顯示者」發起受阻，壓抑的霸道總裁就會衝出來。當妳心裡算計「我為你付出這麼多」並伴隨憤怒時，代表能量已透支需撤退。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"></div>
              <strong className="text-teal-400 block mb-1">③ 成長向 4 號 (Individualist) 整合：12宮與金牛美學綻放</strong>
              <p className="text-slate-300">
                處於安全放鬆時，妳不再需透過「幫助別人」證明自己，會走向 4 號藝術型。完美啟動「12 宮群星」與「金星金牛」。妳的愛不再是疲憊付出，而是轉化為充滿靈性的藝術創作與自我覺察。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "核心優缺點剖析與優化策略",
      category: "personality",
      categoryLabel: "性格優化",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "智力風暴 ✦ 王者能量 ✦ 情感平衡",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-blue-400 block mb-1">① 雙子星群的智力風暴</strong>
            <p><strong>優點：</strong>超級大腦與極強適應力、源源不絕的新點子。</p>
            <p><strong>缺點：</strong>三分鐘熱度、容易神經耗弱、有時迎合別人而失去界線。</p>
            <p className="text-amber-400 font-medium mt-1">💡 優化策略：建立外包系統，將執行交給別人；為自己定下不可退讓的核心價值觀作為錨點。</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-rose-400 block mb-1">② 顯示者的王者能量</strong>
            <p><strong>優點：</strong>獨立、破局、強大的開創力與行動力。</p>
            <p><strong>缺點：</strong>獨斷、容易引發他人阻力，受干涉時會爆發憤怒並孤立自己。</p>
            <p className="text-amber-400 font-medium mt-1">💡 優化策略：將「告知」當作最強的公關手段。告知是情報分享，能把阻力變助力。</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-teal-400 block mb-1">③ 月亮獅子與金星金牛的情感需求</strong>
            <p><strong>優點：</strong>深情、慷慨溫暖、擁有極致的物質品味。</p>
            <p><strong>缺點：</strong>傲嬌、固執、容易透過情緒性消費來填補空虛。</p>
            <p className="text-amber-400 font-medium mt-1">💡 優化策略：在關係中練習坦誠脆弱（放下獅子的面子）；在財務上徹底執行延遲享樂。</p>
          </div>
        </div>
      )
    },
    {
      id: 27,
      title: "學習與成長模式：螺旋式疊代的超級智庫",
      category: "personality",
      categoryLabel: "學習成長",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "海綿吸收 ➔ 逆向解構 ➔ 體驗疊代 ➔ 智慧輸出",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p><strong>① 逆向工程學習法：</strong>不要從零開始、一行一行死記基礎硬語法。直接從最成功的成品、案例或系統進行反向拆解與重構，大腦理解速度最快。</p>
          <p><strong>② 強制輸出規定：</strong>如果沒有「向外輸出」（例如：教別人、寫成科普文、拍短影音），你的大腦就不算真正學會。這是你緩解大腦過載、平復資訊囤積焦慮的黃金鑰匙。</p>
        </div>
      )
    },
    {
      id: 24,
      title: "你的四大核心價值觀 ：不妥協的靈魂底線",
      category: "personality",
      categoryLabel: "核心價值",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "智識與自由 ✦ 質感與落地 ✦ 尊重與光環 ✦ 能量主權",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>當你在人生中面臨重大抉擇與轉折時，僅需僅緊抓住這四個不容妥協的靈魂底線，就能快速做出正確決定，且事後絕不後悔：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">價值一：【智識的擴張與絕對的自由】</strong>
              你最害怕「無聊」與「被限制」。大腦需要不斷吸收新資訊、新邏輯，並且有權利隨時打破舊有的常規。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-emerald-400 block mb-1">價值二：【不容妥協的高級質感與落地】</strong>
              靈魂需要雙腳踩在肥沃的泥土上（金星金牛/正財格）。追求生活與產出的極致「質感」與實用性。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">價值三：【專屬的尊重與舞台光環】</strong>
              日主與月亮獅子的能量極度渴望在安全環境下發光發熱、被讚美、被認可，並且在合作中得到對等甚至是超額的尊重與回報。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">價值四：【私密的神聖空間與能量主權】</strong>
              隱士2爻、12宮群星與空白薦骨。必須保有「隨時能躲進無人打擾的洞穴中安靜充電」的絕對主權。
            </div>
          </div>
        </div>
      )
    },
    {
      id: 21,
      title: "隱藏彩蛋：未經開發的潛在超能力與深層特質",
      category: "personality",
      categoryLabel: "潛在特質",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "霸道總裁 ✦ 人體測謊機 ✦ 非線性天才",
      content: (
        <div className="space-y-3 text-xs">
          <p><strong>✦ 內在的霸道總裁：</strong>外表看似親切隨和（空宮/雙子），但精神與靈魂深處（福德宮太陽天梁化權）卻是個極度有原則、有底線與保護慾的隱形老大。</p>
          <p><strong>✦ 人體測謊機：</strong>第 8 宮與第 12 宮的強大幽暗能量，賦予你一眼看透他人謊言、動機與隱藏情緒的超強直覺天賦。</p>
          <p><strong>✦ 非線性天才：</strong>水星逆行一宮，讓你擁有顛覆傳統常規、螺旋式思考、能一針見血直指核心的逆向工程解構能力。</p>
        </div>
      )
    },
    {
      id: 65,
      title: "內耗路徑：從創傷到崩潰的因果流程與深層原因",
      category: "personality",
      categoryLabel: "內耗路徑",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "原生家庭創傷 ➔ 討好者防禦面具 ➔ 能量透支崩潰 ✦ 三大認知錯位 ✦ 逆向工程破解術",
      content: (
        <div className="space-y-6 text-xs leading-relaxed font-sans">
          <p className="text-slate-300">
            這份流程圖與原因分析，揭示了妳內在能量是如何從<strong>「王者」被閹割</strong>，最終導向<strong>「物理層面崩潰」</strong>的。要打破內耗，我們必須先看懂這些齒輪是如何咬合的。
          </p>

          {/* 第一部分：內耗的 3 步因果流程 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-rose-400 flex items-center gap-2 border-b border-rose-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-xs">I</span>
              第一部分：內耗的 3 步因果流程 (The Causal Flow)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2 relative">
                <div className="absolute -top-2.5 -right-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[10px] font-black px-2 py-0.5 rounded-full">
                  STEP 01
                </div>
                <h4 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  童年創傷：被閹割的發起者
                </h4>
                <p className="text-slate-300">
                  <strong className="text-slate-200">原廠設定：</strong> 天生的顯示者 (Manifestor)，擁有一股可以直接改變周遭環境的力量，渴望主動發起、自主決定。<br />
                  <strong className="text-slate-200">創傷事件：</strong> 4 宮凱龍星/火星合相處女座。在原生家庭中，任何「主動發起」的行為都被父母視為「失控、叛逆、不完美」。<br />
                  <strong className="text-slate-200">因果鏈：</strong> 行動被禁止 ➔ 憤怒被壓抑 ➔ 自我主權被剝奪。為了不被懲罰，靈魂被迫將那個「霸氣的發起者」囚禁在地下室。
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2 relative">
                <div className="absolute -top-2.5 -right-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[10px] font-black px-2 py-0.5 rounded-full">
                  STEP 02
                </div>
                <h4 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  面具的誕生：過度補償的討好者
                </h4>
                <p className="text-slate-300">
                  <strong className="text-slate-200">防禦機制：</strong> 為了重新獲得愛與安全感（月亮獅子與正印星的需求），妳發展出 ENFJ 與九型 2 號人的面具。<br />
                  <strong className="text-slate-200">面具運作：</strong> 「我不做自己，我做一個對別人有價值的人」。透過高度共情、主動服務、完美主義（處女座/6宮冥王星的強迫症），妳試圖用「被需要」來交換安全感。<br />
                  <strong className="text-slate-200">因果鏈：</strong> 壓抑真實需求 ➔ 發展討好面具 ➔ 錯誤地建立「被愛 = 有價值且有用」的信念 ➔ 失去「拒絕」的權利。
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2 relative">
                <div className="absolute -top-2.5 -right-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] font-black px-2 py-0.5 rounded-full">
                  STEP 03
                </div>
                <h4 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  物理層面的崩潰：能量循環斷裂
                </h4>
                <div className="text-slate-300 space-y-1">
                  <p><strong className="text-slate-200 font-semibold">毀滅機制：</strong> 妳試圖用「完美的績效」與「無盡的付出」來填補「童年不被接納的虛空」。這是一種永遠填不滿的深淵。</p>
                  <p><strong className="text-slate-200 font-semibold">物理耗竭路徑：</strong></p>
                  <p>&bull; <span className="text-amber-300 font-semibold">空白薦骨透支：</span> 妳在透支借來的能量（別人的期待），去做那些根本不需要妳親自去做的事。</p>
                  <p>&bull; <span className="text-blue-300 font-semibold">神經系統過熱：</span> （太陰化忌/雙子過載）大腦永遠在反芻，神經系統長期處於發炎、緊繃狀態。</p>
                  <p>&bull; <span className="text-teal-300 font-semibold">免疫與內分泌癱瘓：</span> 當身心長期處於「戰或逃」狀態，身體開始用「發炎、身心症」強制停機。</p>
                  <p><strong className="text-rose-400 font-bold">崩潰點：</strong> 當地下室的顯示者小孩（憤怒）與過度操勞的照顧者面具（疲憊）在同一時間點爆發，就會進入徹底的「崩潰與停擺」。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第二部分：驅動因果流程的「三大深層原因」 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-amber-400 flex items-center gap-2 border-b border-amber-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs">II</span>
              第二部分：驅動因果流程的「三大深層原因」 (The Root Causes)
            </h3>
            <p className="text-slate-300">
              為什麼妳會被困在這個流程裡出不來？因為妳的心理機制存在著三個嚴重的<strong>「認知錯位」</strong>：
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-xs font-bold text-amber-300 block mb-1">原因一：能量型態的誤用（將「影響力」降級為「勞動力」）</span>
                <p className="text-slate-300 mb-2">
                  <strong className="text-slate-200">深層原因：</strong> 妳是「顯示者」，妳的價值在於「發起願景與指引方向」；但為了討好別人，妳強迫自己去當一個「生產者」，試圖用「勞動與執行細節」來證明自己的價值。
                </p>
                <p className="p-2.5 rounded bg-slate-900 border border-slate-850 text-slate-400 text-[11px] leading-relaxed">
                  <strong className="text-rose-400">致命結果：</strong> 妳的空白薦骨根本沒有這股勞動能量。妳這是在用一台頂級跑車（顯示者）去犁田（生產者的工作），跑車不僅犁不好田，引擎（神經系統）還會直接燒毀。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-xs font-bold text-teal-300 block mb-1">原因二：界線感知的錯亂（把「共情」當作了「責任」）</span>
                <p className="text-slate-300 mb-2">
                  <strong className="text-slate-200">深層原因：</strong> 妳的第 12 宮與空白薦骨讓妳擁有極強的「共情力」（水晶小孩體質），妳能輕易感受到別人的痛苦與需求。但妳的 ENFJ 面具與 2 號人特質，讓妳產生了一個錯誤的邏輯跳躍：「我感受到了 ➔ 這就是我的責任 ➔ 我必須幫他解決」。
                </p>
                <p className="p-2.5 rounded bg-slate-900 border border-slate-850 text-slate-400 text-[11px] leading-relaxed">
                  <strong className="text-rose-400">致命結果：</strong> 妳的能量池就像一個沒有塞子的浴缸。只要身邊有人發出哀嚎，妳的能量就會自動流過去填補對方。妳不是被別人榨乾的，妳是「自動放血」把自己抽乾的。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-xs font-bold text-blue-300 block mb-1">原因三：創傷代償的錯覺（試圖用「外在績效」買「內在安全」）</span>
                <p className="text-slate-300 mb-2">
                  <strong className="text-slate-200">深層原因：</strong> 這是 4 宮凱龍星與 6 宮冥王星的殘酷連動。妳潛意識裡覺得「我不夠完美，所以我不配得到無條件的愛」。因此，妳把 6 宮（工作）當成了救贖的戰場。妳以為，只要我工作做得無懈可擊（冥王星的強迫症），只要我對所有人都有用，童年的那個傷口就不會痛了。
                </p>
                <p className="p-2.5 rounded bg-slate-900 border border-slate-850 text-slate-400 text-[11px] leading-relaxed">
                  <strong className="text-rose-400">致命結果：</strong> 妳永遠無法用「外在的工作績效」，去治癒「童年缺乏無條件接納」的傷口。這導致妳陷入「完美主義強迫症」，只要事情有一點點瑕疵，妳的太陰化忌就會引發極大的災難化焦慮。
                </p>
              </div>
            </div>
          </div>

          {/* 第三部分：破局的逆向工程 */}
          <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-500/15 space-y-4">
            <h3 className="text-sm font-black text-teal-400 flex items-center gap-2 border-b border-teal-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 font-mono text-xs">III</span>
              第三部分：破局的逆向工程 (Reverse Engineering the Breakout)
            </h3>
            <p className="text-slate-300 font-medium">
              看懂了原因，我們就能進行逆向破解。當妳下次感覺到自己又要捲入這個內耗流程時，請在心裡按下這三個切斷開關：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <strong className="text-amber-400 text-[11px] block mb-1.5">破解原因一的行動 (找回顯示者的傲嬌)</strong>
                <p className="text-slate-300 text-[11px]">
                  當妳忍不住想把事情攬下來自己做時，問自己：<span className="text-amber-300 font-bold">「這件事需要用到我高階的戰略大腦嗎？如果不需要，我憑什麼要浪費我的能量去做？」</span>學會把小事外包。
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <strong className="text-teal-400 text-[11px] block mb-1.5">破解原因二的行動 (建立冷酷的結界)</strong>
                <p className="text-slate-300 text-[11px]">
                  當妳感受到別人的焦慮與求救時，在心裡默唸：<span className="text-teal-300 font-bold">「我看見了你的痛苦，但我尊重你有自己解決課題的能力。我不是你的救世主。」</span>練習在別人受苦時，冷眼旁觀而不帶罪惡感。
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <strong className="text-rose-400 text-[11px] block mb-1.5">破解原因三的行動 (對內在小孩的宣告)</strong>
                <p className="text-slate-300 text-[11px]">
                  當完美主義讓妳神經緊繃、怕被批評時，把手放在胸口說：<span className="text-rose-300 font-bold">「這個專案就算只做到 80 分，就算有人對我不滿意，我也絕對安全，我依然無條件地愛我自己。」</span>將工作表現與個人價值徹底脫鉤。
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 60,
      title: "隱藏潛能與破局策略",
      category: "personality",
      categoryLabel: "破局策略",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "付出底層邏輯 ✦ 壓力暗黑潛能 ✦ 專業防火牆 ✦ 創造性破壞",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>跳脫單一流派，整合妳的紫微、人格、與九型，為妳提煉出四大核心「跨維度破局策略」：</p>
          
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 視角一：潛意識動力與「付出」的底層邏輯（九型 2w1 × 福德太陰化忌）</strong>
              <p className="text-slate-300">
                妳的付出常帶有潛意識的「條件」（希望獲得同等的偏愛）。當沒得到預期回應時，太陰化忌的委屈感就會爆發。<br />
                <span className="text-blue-400 font-semibold">🎯 翻轉：</span>練習「有界線的冷漠」。在付出前，先停下問自己是害怕對方不理妳、還是真的游刃有餘。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 視角二：壓力狀態的「暗黑潛能」轉化（壓力向 8 號領袖移動 × 夫妻宮廉貞貪狼）</strong>
              <p className="text-slate-300">
                在壓力下，妳會瞬間獲得切斷依戀、掌控全局的 8 號硬核力量。廉貪也是魅力極強的開創能量，不要等崩潰才調用這股力量。<br />
                <span className="text-rose-400 font-semibold">🎯 翻轉：</span>主動戴上「8號 + 廉貪」的面具，將其強悍特質用在商業談判、定價策略和時間管理上，讓強勢成為受妳掌控的工具。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">✦ 視角三：職場天賦的「非傳統」使用說明書（高適應力 × 天機化權）</strong>
              <p className="text-slate-300">
                妳不適合機械式的工作，靈活性與天機化權讓妳天生善於整合資源與提供專業策略。<br />
                <span className="text-teal-400 font-semibold">🎯 翻轉：</span>用「專業（天機化權）」作為社交與職場的防火牆。當妳以「數據玄學策略師」等專業專家身分與人溝通時，用專業贏得尊重，不需討好。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-purple-400 block mb-1">✦ 視角四：專屬能量回充與自我療癒路徑</strong>
              <p className="text-slate-300">
                <strong>儀式感邏輯化：</strong>利用牌卡等有結構的「邏輯符號」，消化高神經質帶來的混亂情緒，安撫太陰化忌。<br />
                <strong>獨處時創造性破壞：</strong>將控制欲消耗在具挑戰性、能完全掌控的專案（如完善諮詢系統）上。<br />
                <strong>讚美日記逆向操作：</strong>每天記錄「今天我拒絕了誰？」、「今天我哪裡做得不完美但依然很安全？」來訓練 1 號完美的放下。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 61,
      title: "跨流派深度解析：YieJie 的能量藍圖與破局策略",
      category: "personality",
      categoryLabel: "深度破局",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "情感權力動態 ✦ 焦慮數據化 ✦ 有策略地示弱 ✦ 溫度差調和",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>接續上一篇的跨維度視角，這是一份完整擴充版的破局藍圖，直擊妳在親密關係、決策與自我認同中的核心盲區：</p>
          
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 視角五：親密關係中的「權力與渴望」動態 (情感張力視角)</strong>
              <div className="text-[10px] text-slate-500 mb-1 font-mono">九型 2 號 (過度配合) × 夫妻宮廉貞貪狼 (極致主導/慕強)</div>
              <p className="text-slate-300">
                妳在關係初期容易配合，但骨子裡對情感純度與激情有著極高的掌控欲。如果伴侶只是單向索取，妳會瞬間展現 8 號的極端冷酷。<br />
                <span className="text-rose-400 font-semibold">🎯 翻轉：</span>在關係初期就展現妳的「標準」與「野心」，不要一開始就當無微不至的照顧者。廉貞貪狼需要的是「互相征服」的強者，而不是被妳照顧的孩子。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ 視角六：風險控管與決策模式 (商業思維視角)</strong>
              <div className="text-[10px] text-slate-500 mb-1 font-mono">高神經質 + 中盡責性 × 天機化權</div>
              <p className="text-slate-300">
                高神經質是妳精密的「風險預警系統」，會自動掃描所有可能的失敗路徑。妳的焦慮是因為資訊不夠明確 or 害怕人際破壞。<br />
                <span className="text-amber-400 font-semibold">🎯 翻轉：</span>將焦慮「數據化」。把擔憂寫下來，轉化為「A/B測試」或「數據收集」。高神經質就是妳最好的品管工具。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">✦ 視角七：社交面具與內在自我的「溫差」 (自我認同視角)</strong>
              <div className="text-[10px] text-slate-500 mb-1 font-mono">太陽天梁化權 (高傲面子) × 福德太陰化忌 (脆弱求愛)</div>
              <p className="text-slate-300">
                在外面，妳是無所不能、樂於助人的強者；脫下面具，福德宮的太陰化忌卻像個渴望被無條件擁抱的小孩。這股「溫差」常讓身邊的人以為妳很堅強而忽略妳的脆弱。<br />
                <span className="text-teal-400 font-semibold">🎯 翻轉：</span>練習「有策略地示弱」。向值得信任的朋友分享具體困難，而非單純的情緒傾瀉。這既保全了面子，又能實質獲得溫暖，填補太陰化忌的匱乏。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "人生使命與靈魂課題：體驗、解惑與建立靈性架構",
      category: "personality",
      categoryLabel: "人生使命",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "意識傳遞者 ✦ 土星十宮雙魚終極考驗",
      content: (
        <div className="space-y-3">
          <p><strong>① 輪迴交叉：意識的傳遞者與體驗家</strong></p>
          <p className="text-sm text-slate-300">你的終極使命是將你豐富的人生體驗（35閘門），結合你敏銳的邏輯思考（63/64閘門），轉化為能夠「喚醒別人、解答別人疑惑」的智慧系統。</p>
          <p><strong>② 十宮土星的終極考驗：將夢想與直覺「具象化」</strong></p>
          <p className="text-sm text-slate-300">你的土星落在充滿夢幻與靈性的雙魚座（10宮）。宇宙給你的終極功課是：學會用「自律與耐心」，為你的靈感與直覺打造出可以在現實世界中落地運作的商業模式或生活系統。</p>
        </div>
      )
    },
    {
      id: 12,
      title: "當下生命階段與近期能量焦點：三十而立的內在重塑",
      category: "personality",
      categoryLabel: "近期能量",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "土星回歸 ✦ 25-34歲大限內在探索與精神投資",
      content: (
        <div className="space-y-3">
          <p><strong>① 占星視角：迎來一生一次的「土星回歸」 (約2023-2026年初)</strong></p>
          <p className="text-sm text-slate-300">宇宙正在逼迫你淘汰「滿足別人期待的目標」。陣痛期已過，現在是你確立未來三十年人生底層邏輯、穩固地基、拿回自我力量的黃金時刻。</p>
          <p><strong>② 紫微斗數視角：直面內心與精神追求的十年 (25-34歲大限)</strong></p>
          <p className="text-sm text-slate-300">這十年的生命重心在於「向內探索與精神投資」。大膽投資你的腦袋與心靈，這將為你下一個十年的財富大爆發打下最堅固的基礎。</p>
        </div>
      )
    },
    {
      id: 43,
      title: "終極決策模式解析與優化：在極速大腦與情緒波浪間取得統御權",
      category: "personality",
      categoryLabel: "決策模式",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "大腦風暴期 ✦ 72小時情緒冷卻 ✦ ROI審查 ✦ 王者告知發起",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>「如何做正確決定」是妳最需練習的一環。內在三股力量拉扯：極速大腦想「快」，ENFJ/2號人想「好」，情緒權威需要「慢」。這常導致決策癱瘓或能量耗竭。以下是專屬的「四步決策優化模型」：</p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">① 第一步：大腦風暴期（接納混亂，但不做決定）</strong>
              <p className="text-slate-300">
                新機會出現時，雙子大腦會爆發想法，神經質雷達掃描危險。允許大腦發散，把所有想法寫下，不要逼自己給答案，只是「讓子彈飛」。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">② 第二步：情緒冷卻期（啟動情緒權威 72 小時法則）</strong>
              <p className="text-slate-300">
                這是最致命盲點！想說「好，我來幫忙」但薦骨沒體力。練習延遲反應：「這提議很棒，我需要沉澱一下，三天後回覆。」讓情緒與人情壓力消退，留下的「平靜」才是答案。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">③ 第三步：現實定錨期（召喚金牛與正財 ROI 審查）</strong>
              <p className="text-slate-300">
                問三個問題：有實際價值嗎？會侵犯獨處充電時間嗎？是為了討好還是長遠利益？沒實際效益又耗能就打「X」。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">④ 第四步：王者發起期（啟動顯示者的告知策略）</strong>
              <p className="text-slate-300">
                停止徵求許可，開始「告知」。用堅定溫和語氣告知決定，然後把執行細節交給別人，只負責掌控方向。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-400/5 to-amber-400/5 border border-rose-500/20 text-slate-300 mt-2">
            <strong className="text-amber-400 block mb-1">💡 決策地雷區總提醒</strong>
            「充滿焦慮與恐懼」時的決定 100% 出錯。為「不想讓人失望」答應的事定會充滿憤怒。最佳決策狀態伴隨「微冷酷的理智與深深的平靜感」。
          </div>
        </div>
      )
    },
    {
      id: 55,
      title: "專屬使用說明書 (User Manual 官方原廠版)",
      category: "humandesign",
      categoryLabel: "人類圖深度",
      icon: Brain,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "顯示者 ✦ 2/4 人生角色 ✦ 情緒權威 ✦ 空白薦骨 ✦ 四箭全左",
      content: (
        <UserManualView />
      )
    },
    {
      id: 2,
      title: "能量運作與行動機制：等待情緒清明的發起者",
      category: "humandesign",
      categoryLabel: "人類圖",
      icon: Brain,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "顯示者 (Manifestor) ✦ 一分人 ✦ 情緒中心權威",
      content: (
        <div className="space-y-3">
          <p>作為<strong>「顯示者」</strong>，你生來具備「發起」的能量。然而，你生命中最大的修練是：「雙子座的求快」遇上「情緒權威的求穩」。</p>
          <p>你做重大決定時絕對不能急，必須學會讓情緒像波浪一樣跑完，在內心平靜的狀態下決定，並透過「告知」他人來鋪平前進的道路。</p>
        </div>
      )
    },
    {
      id: 20,
      title: "人類圖全息解碼：能量中心與天賦通道的交響樂",
      category: "humandesign",
      categoryLabel: "人類圖通道",
      icon: Brain,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "一分人能量池 ✦ 通道 35-36 ✦ 通道 13-33",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p><strong>① 一分人能量池：</strong>情緒、喉嚨、G中心相互強力連結。你內建強大的發聲力與鮮明的自我認同，處理資訊與表達速度極快，完全能靠自己想通一切。</p>
          <p><strong>② 通道 35-36 (體驗/無常通道)：</strong>充滿豐富情感、好奇與渴望體驗一切，你這輩子就是來冒險並體驗生命中各種無常可能性的。</p>
          <p><strong>③ 通道 13-33 (浪子/紀錄見證通道)：</strong>你是最佳的傾聽者。在吸收並聆聽他人的故事後，躲進隱密的洞穴沉澱，最終將其化為高維智慧與他人分享。</p>
        </div>
      )
    },
    {
      id: 19,
      title: "人類圖進階 PHS 系統：四箭頭全左 (Quad Left) 的極致戰略家",
      category: "humandesign",
      categoryLabel: "人類圖進階",
      icon: Brain,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "極致戰略神經系統 ✦ 終極矛盾與解答",
      content: (
        <div className="space-y-3">
          <p>你頭部的四個箭頭<strong>全向左 (Quad Left)</strong>，代表你擁有一個極度活躍、渴望結構、極具戰略眼光的超級神經系統。</p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-xs">
            <strong className="text-rose-400 block mb-1">✦ 終極矛盾與唯一解法：</strong>
            你的大腦（四向左）想當一直衝鋒陷陣的戰士，但你的肉體（空白薦骨）電量極為有限。這輩子請務必把你強大的「戰略性」完全應用在「用腦策劃」上，做一個運籌帷幄的軍師，將物理行動與重複消耗降到最低。
          </div>
        </div>
      )
    },
    {
      id: 18,
      title: "基因天命 (Gene Keys) 專屬密碼：將陰影煉金為天賦",
      category: "humandesign",
      categoryLabel: "基因天命",
      icon: Brain,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "密碼 35、5、63、64 ✦ 陰影 ➔ 天賦 ➔ 悉地",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-1">✦ 密碼 35 (太陽)：飢餓 ➔ 冒險 ➔ 體驗</span>
            不要單純為了填補內心的空虛與飢餓而學，轉為單純享受生命這趟旅程的浩瀚與冒險體驗。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-1">✦ 密碼 5 (地球)：急躁 ➔ 耐心 ➔ 信任</span>
            放下對速度與求快的執著，信任宇宙最完美的生命節奏，方能精準、優雅地發起。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-1">✦ 密碼 63 (潛意識太陽)：懷疑 ➔ 探究 ➔ 覺察</span>
            將自我挑剔與對他人的懷疑批判，轉化為對世界客觀、理性的邏輯探詢與科學探究。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-1">✦ 密碼 64 (潛意識地球)：困惑 ➔ 想像力 ➔ 啟示</span>
            擁抱大腦中的暫時混亂，不要勉強找答案，讓真正的靈感與啟示在身體徹底放鬆時自然迸發。
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "生命軌跡與外在展現：變色龍般的適應力",
      category: "destiny",
      categoryLabel: "紫微斗數",
      icon: Flame,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "命宮在卯（無主星）",
      content: (
        <div className="space-y-3">
          <p>命宮<strong>「無主星」</strong>完美呼應了你的雙子座特質——像海綿或變色龍，具備極強的環境適應力。</p>
          <p>你一生的課題在於「在變動中找到自己的核心價值」，不要因為太容易吸收別人的觀點，而迷失了自己最純粹的初衷。</p>
        </div>
      )
    },
    {
      id: 51,
      title: "紫微斗數全息解碼：揭開「外在太陽、內在太陰」的真實靈魂",
      category: "destiny",
      categoryLabel: "紫微全息",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "命宮在卯無主星 ✦ 身宮太陽化權 ✦ 福德太陰化忌 ✦ 財帛天機化祿",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>此原盤截圖（乙亥年、土五局、命宮在卯）是一張「頂級軍師與造王者」命盤，解開了妳「外在呼風喚雨、內在焦慮不安」的核心：</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-orange-400 block mb-1">✦ 命宮在卯 (空宮 + 祿存)：絕對防禦者</strong>
              <p className="text-slate-300">
                外在極具適應力（雙子變色龍）。坐了祿存代表內心有道「絕對不可侵犯的底線」。看起來隨和，但絕不允許別人侵犯妳的核心利益或私密空間，會用安全距離隔絕。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 遷移宮/身宮在酉 (太陽化權 + 天梁)：在外發光的霸氣老大</strong>
              <p className="text-slate-300">
                這完美解釋了妳的 ENFJ 與顯示者能量！身宮在酉代表三十歲後行為。太陽化權讓妳在外極具主導力、喜歡發起；天梁是一顆老大星，讓妳忍不住去庇蔭照顧人（2號助人者）。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 福德宮在巳 (太陰化忌)：潛意識焦慮黑洞</strong>
              <p className="text-slate-300">
                這是最讓人心疼的地方。外人看妳是「太陽化權」的霸氣，內心卻是「太陰化忌」的缺乏安全感。太陰化忌讓妳極度容易缺乏安全感，總是下意識地把事情往壞的方面想（災難化思維）；妳極度敏感，會無意識吸收環境中的負能量，並且常常在夜深人靜時陷入情緒的內耗與自我懷疑。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">✦ 官祿宮在未 (天同+巨門+昌曲)：靠嘴與美感打天下</strong>
              <p className="text-slate-300">
                完美呼應雙子大腦！不適合勞力密集。必須仰賴溝通表達（巨門）、協調人際（天同）以及高質感企劃與美學才華（昌曲）。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <div>
              <strong className="text-emerald-400 font-bold block mb-0.5">✦ 財帛宮 in 亥 (天機化祿)：靈感印鈔機</strong>
              <p className="text-slate-300">「靠腦袋賺錢」的五行鐵證。天機化祿代表妳只要動口、動腦、出點子，財富就會源源不絕。用天機企劃、用巨門表達銷售，是妳最強的致富方程式。</p>
            </div>
            <div>
              <strong className="text-amber-400 font-bold block mb-0.5">✦ 6. 夫妻宮在丑（空宮，借對宮同巨昌曲）：需要智識交流與嚴守界線的實用型伴侶</strong>
              <p className="text-slate-300">
                <strong>星曜特質：</strong> 夫妻宮空宮（內有鈴星、天刑、蜚廉），借對宮官祿宮的「天同巨門昌曲」來看。<br /><br />
                <strong>深度解析（Pragma 實用型愛情的體現）：</strong> 夫妻宮空宮代表你對傳統婚姻制度的依賴度不高。借對宮官祿宮的星曜，意味著你的伴侶最好是能與你在「事業、智識、興趣」上深度交流的人。對方必須口條好（巨門）、有才華（昌曲）、懂得生活情趣（天同）。<br /><br />
                <strong>💡 盲點（煞星的感情修羅場）：</strong> 你的夫妻宮裡藏著「鈴星、天刑、蜚廉」。這代表當你們感情出現摩擦，或對方踩到你「天刑」的嚴格底線時，你極容易啟動「鈴星」的冷暴力與生悶氣機制。加上「蜚廉」帶來的突發性口舌與破壞力，往往會讓關係在無聲的冷戰中突然決裂（完美對應恐懼迴避型依附的切斷機制）。遇到問題時，請務必啟動借對宮的「巨門」去溝通，而不是用煞星去冷戰。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-orange-400/5 to-rose-400/5 border border-orange-500/20 text-slate-300">
            <strong className="text-orange-400 block mb-1">💡 終極紫微戰略：平衡妳的太陽與太陰</strong>
            收起過度的太陽，妳不是救世主，把太陽化權的霸氣用在事業發起上。安撫受傷的太陰，允許自己軟弱、焦慮，定期啟動隱士模式退回洞穴，透過感官物質享受調和太陰化忌。
          </div>
        </div>
      )
    },
    {
      id: 58,
      title: "紫微斗數深度解碼：從「空宮防禦」到「大限覺醒」的未來發展藍圖",
      category: "destiny",
      categoryLabel: "紫微大限",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "防禦空宮 ✦ 太陽天梁身宮 ✦ 35歲貪狼大限 ✦ 祿存結界",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>命宮空宮祿存，代表外在隨和好說話，但心有一道不可碰底線。遷移身宮坐太陽化權天梁，在外具極強主導力、喜歡照顧人。福德太陰化忌，是妳情緒內耗與敏感的根源：</p>
          
          <div className="space-y-3">
            <strong className="text-orange-400 block">✦ 時間的魔法：十年大限與未來的終極走向</strong>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
              <strong className="text-rose-400 block mb-1">過去到現在：25-34歲大限 (福德宮太陰化忌的靈魂闇夜)</strong>
              <p className="text-slate-300">
                這是妳精神壓力最大、內心最糾結的十年。宇宙把妳推進潛意識深淵，去面對家庭創傷、感情執念與焦慮。其用意是讓妳覺醒，逼妳向內看，學會建立情緒界線，並在玄學中探索。這十年的苦，奠定了妳極高直覺力。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-teal-500/30 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <strong className="text-emerald-400 block mb-1">未來的爆發：35-44歲大限 (田宅宮貪狼星的擴張與建構)</strong>
              <p className="text-slate-300">
                跨過 35 歲後，大限切換至田宅宮「貪狼」大運。告別太陰化忌，妳將迎來企圖心與桃花能量大爆發的十年。社交與群眾魅力達到巔峰，非常適合置產、建立實體據點或工作室。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">🚀 35-44歲大限紫微化權（造王者的登基）</strong>
            <p className="text-slate-300">
              代表這十年妳帶出來的團隊、產出的作品將在行業中擁有權威。妳不再是單打獨鬥的個體戶，而是賦能他人的「造王者」。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 59,
      title: "紫微斗數高階解碼：隱藏在「六親宮位」與「業力煞星」的終極真相",
      category: "destiny",
      categoryLabel: "紫微高階",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "父母廉府擎羊 ✦ 七殺疾厄 ✦ 空劫交友 ✦ 紫微子女化科",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>除了耀眼的太陽化權與天機化祿，妳的命盤中還隱藏著許多決定妳日常際遇的「煞星」與六親真相：</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 父母宮：高壓擎羊的期盼</strong>
              <div className="text-[10px] text-slate-500 mb-1 font-mono">廉貞 + 天府 + 擎羊(廟)</div>
              <p className="text-slate-300">
                長輩對妳期盼高、管教嚴格且言語如刀。妳從小就追求完美以迎合高標準，這把「擎羊」正是妳內心害怕被批評的恐懼源頭。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ 疾厄宮：七殺的將軍體質</strong>
              <div className="text-[10px] text-slate-500 mb-1 font-mono">七殺(廟)</div>
              <p className="text-slate-300">
                平時感覺不到累，一旦工作就用強大意志燃燒肉體直至倒下（空白薦骨體現）。生病往往是突然爆發的慢性發炎，必須在累之前強制關機。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 col-span-1 md:col-span-2">
              <strong className="text-blue-400 block mb-1">✦ 交友與兄弟宮：「空劫」交戰的孤獨王者 (武相地空 / 破軍陀羅地劫)</strong>
              <p className="text-slate-300">
                這兩個宮位集齊了地空與地劫業力星。破軍與陀羅代表變動、纠结與破財。<strong>終極警告：</strong>妳這輩子絕對不能輕易與朋友合夥，也不能作保。妳是孤獨的王者，可以發起與外包，但利益與財務的生殺大權必須 100% 掌握在自己手裡。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">✦ 子女宮：紫微化科的心血結晶</strong>
              <p className="text-slate-300">
                代表妳的作品、心血或徒弟，具有紫微化科的頂級高標準與業界名聲，但宮內火星代表妳孕育作品時脾氣急躁，需學會放慢腳步。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-purple-500/20">
              <strong className="text-purple-400 block mb-1">✦ 五、 夫妻宮（丑）的暗影：鈴星、天刑與蜚廉的感情修羅場</strong>
              <div className="text-[10px] text-slate-500 mb-1 font-mono">星曜陣容： 鈴星、天刑、蜚廉</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong>深層解碼：</strong> 夫妻宮是空宮（借對宮的才華與溝通），但我們必須深聊這三顆坐在裡面的煞星，它們是你感情中最危險的地雷：<br /><br />
                <strong>天刑星：</strong> 代表刑剋、法律與絕對的原則。在感情中，你心裡有一把極度嚴格的尺，一旦對方踩線，你會瞬間變得冷酷無情，像法官一樣判對方死刑。<br /><br />
                <strong>鈴星：</strong> 這是紫微斗數中最可怕的「冷暴力星」。擎羊、火星的生氣是當下爆發的，但鈴星的生氣是「記在心裡、生悶氣、搞失蹤、冷戰」。<br /><br />
                <strong>蜚廉星：</strong> 代表口舌是非、背後的閒語與突如其來的破壞。在感情中，這容易演變成一種「因為沒有及時溝通，導致誤會加深，最後衍生出傷人的言語或突然的拆夥」。<br /><br />
                <strong>終極建議：</strong> 當你在感情中受傷或感到壓力時，你的本能反應就是啟動「鈴星（不說話）+ 天刑（心裡扣分）+ 蜚廉（心中充滿负面解讀）」。這種組合會讓伴侶完全不知道自己錯在哪裡，最後關係在無聲中死亡。你必須刻意練習把心裡的「天刑（規則）」用嘴巴說出來，打破「鈴星」的沉默，並阻止「蜚廉」的胡思亂想。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 22,
      title: "八字命格全息解碼：丙火日主的光芒與正財格的豐盛",
      category: "destiny",
      categoryLabel: "八字全息",
      icon: Flame,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "丙火日主 ✦ 辛金正財格 ✦ 乙木印星 ✦ 亥巳沖",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>這項東方命理分析完美驗證並共振了你西方星盤與人類圖中的所有核心特質：</p>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">① 核心靈魂本質：溫暖璀璨的「丙火」太陽 (丙寅日柱)</strong>
            在八字十天干中，「丙火」代表著天上的太陽。這與你西方星盤中「月亮獅子」的特質形成了完美的共振！天生自帶光芒，性格溫暖、慷慨，極度渴望照亮別人。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">② 財富與價值觀：極度務實的「正財格」 (雙透辛金)</strong>
            「正財」代表穩定、合理、透過專業累積的財富，極度重視高品質、細節與物質安全。這完全印證了你星盤中「金星金牛」對質感的執著！
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">③ 貴人與求知慾：源源不絕的「正印」 (乙木旺盛)</strong>
            「印星」代表學習、貴人、吸收無形知識。你命盤中木（印星）非常旺盛且「木來生火」，賦予你無窮的求知與閱讀渴望，呼應了雙子座群星。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">④ 生命動態與變革：亥巳相沖</strong>
            年月相沖（亥與巳沖）意味著早年生活充滿變動，打破格局的安逸，賦予你「出外闖蕩、體驗人生」的強大動能，完美共振了 35-36 體驗通道。
          </div>
        </div>
      )
    },
    {
      id: 52,
      title: "紫微斗數與八字的跨界共振：解開「空宮祿存」與「丙辛合水」的深層奧秘",
      category: "destiny",
      categoryLabel: "東方命理跨界",
      icon: Flame,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "空宮祿存 ✕ 丙辛合水 ✦ 太陽天梁 ✕ 亥巳相沖 ✦ 太陰化忌 ✕ 印星破局",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p className="text-slate-300">
            在前面的章節中，我們分別探討了紫微斗數和八字的核心架構。現在，我們將這兩個東方命理系統中最精妙的點進行<strong>「跨界疊加」</strong>，妳會發現，宇宙在妳的命運底層，寫下了一段極度吻合、且深具戰略意義的代碼。
          </p>

          <div className="space-y-3.5">
            {/* ① 「空宮祿存」遇上「丙辛合水」 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/20 font-bold">
                    ①
                  </span>
                  <h4 className="text-xs font-black text-amber-300">
                    「空宮祿存」遇上「丙辛合水」：極致的彈性與隱形的財富護城河
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  財富與價值共振
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-purple-400 font-bold block mb-0.5">✦ 紫微密碼</span>
                  <span className="text-slate-200">命宮在卯，為「空宮」，但內藏「祿存」。</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-rose-400 font-bold block mb-0.5">✦ 八字密碼</span>
                  <span className="text-slate-200">日主「丙火」，天干兩見「辛金」，形成「丙辛合水」。</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-850 space-y-1">
                  <strong className="text-amber-400 block text-[11px]">【深度全息解碼】</strong>
                  <p>
                    在紫微斗數中，「命宮空宮」代表著極強的適應力與可塑性，像變色龍一樣能融入各種環境；而「祿存」則是厚實的防禦與暗藏的財富。這意味著妳的自我認知不是僵化的，而是充滿彈性的，但妳心中始終有一塊不容侵犯的「利益與安全感底線」。
                  </p>
                  <p className="pt-1">
                    這與八字中的「丙辛合水」產生了驚人的共振！「丙（火）」是太陽，熱情且充滿擴張性；「辛（金）」是精緻的珠寶，代表著具體的價值與財富。太陽光芒四射，卻被珠寶的光澤所吸引，兩者相合化為「水（智慧、流動、官殺）」。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <strong className="text-emerald-400 block text-[11px]">✦ 在事業與人際上：</strong>
                    <p className="text-[11px] text-slate-300">
                      妳（空宮/丙火）能夠輕易地與各種人打成一片，展現出極高的親和力與領導魅力（太陽化權），但妳的終極目標從來不是為了「出風頭」，而是為了「合（獲取）辛金（實際的價值與資源）」。妳的空宮與丙火讓妳看起來隨和、熱情，但妳的祿存與辛金卻讓妳在關鍵時刻極度清醒、現實。妳不會為了一個虛名去拼命，妳要的是「看得見的產值」。這種「外圓內方、熱情中帶著精算」的特質，正是妳最可怕的商業天賦。
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <strong className="text-blue-400 block text-[11px]">✦ 在心智轉化上：</strong>
                    <p className="text-[11px] text-slate-300">
                      「丙辛合」化為「水」。水代表智慧與冷靜。當妳的熱情（火）與現實目標（金）結合時，會產生一種極度冷靜的戰略思維（水）。這再次呼應了妳的「四箭全左」超級大腦與實行「72小時冷卻法則」的重要性。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ② 「身宮太陽天梁」遇上「乙亥、辛巳」相沖 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-rose-400/10 text-rose-300 border border-rose-400/20 font-bold">
                    ②
                  </span>
                  <h4 className="text-xs font-black text-rose-300">
                    「身宮太陽天梁」遇上「乙亥、辛巳」相沖：破局而出的王者之路
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-rose-400/80 bg-rose-400/10 px-2 py-0.5 rounded border border-rose-400/20">
                  人生轉折與霸氣啟動
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-purple-400 font-bold block mb-0.5">✦ 紫微密碼</span>
                  <span className="text-slate-200">遷移宮（兼身宮）在酉，坐「太陽化權」與「天梁」。</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-rose-400 font-bold block mb-0.5">✦ 八字密碼</span>
                  <span className="text-slate-200">年柱「乙亥」與月柱「辛巳」，地支「亥巳相沖」。</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-850 space-y-1">
                  <strong className="text-rose-400 block text-[11px]">【深度全息解碼】</strong>
                  <p>
                    紫微斗數的「身宮」代表 30 歲以後的發展與真實行徑。妳的身宮在遷移宮（外在展現），而且是「太陽化權（霸氣領導）」加上「天梁（庇蔭老大）」。這注定妳後半生是要在人群中發光發熱、成為精神領袖的。但這個王座並不是輕易得來的，它與妳八字的「亥巳沖」有著深刻的因果關係。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <strong className="text-amber-400 block text-[11px]">✦ 破局的動能：</strong>
                    <p className="text-[11px] text-slate-300">
                      八字的「亥巳沖（水火交戰）」代表著妳早年（年月柱）生活、內在情緒或原生家庭中，存在著一股強烈的動盪與不穩定感（呼應了太陰化忌的焦慮與第四宮的創傷）。但這股「沖」力，正是推動妳離開舒適圈、向外發展（遷移宮）的巨大引擎。
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <strong className="text-emerald-400 block text-[11px]">✦ 王者的誕生：</strong>
                    <p className="text-[11px] text-slate-300">
                      因為早年經歷了內在的拉扯（巳亥沖），妳在 30 歲之後（身宮啟動），會更加渴望建立屬於自己的權威與庇護所（太陽化權、天梁）。妳不再是被動承受動盪的人，妳轉而成為那個主動發起（顯示者）、去照顧並帶領別人度過動盪的老大（天梁）。妳的「霸氣（太陽化權）」，其實是從早年的「動盪（亥巳沖）」中淬鍊出來的護城河。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ③ 「太陰化忌」遇上「印星極旺」 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-teal-400/10 text-teal-300 border border-teal-400/20 font-bold">
                    ③
                  </span>
                  <h4 className="text-xs font-black text-teal-300">
                    「太陰化忌」遇上「印星極旺」：通靈海綿的超載與轉化
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-teal-400/80 bg-teal-400/10 px-2 py-0.5 rounded border border-teal-400/20">
                  超載清理與用財破印
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-purple-400 font-bold block mb-0.5">✦ 紫微密碼</span>
                  <span className="text-slate-200">福德宮在巳，坐「太陰化忌」。</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-teal-400 font-bold block mb-0.5">✦ 八字密碼</span>
                  <span className="text-slate-200">命盤中木（印星）極旺（乙、寅、卯）。</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-850 space-y-1">
                  <strong className="text-teal-400 block text-[11px]">【深度全息解碼】</strong>
                  <p>
                    太陰化忌讓妳成為一個極度敏感、容易吸收負能量的情緒海綿。而八字中的「印星（木）」，正是代表「吸收、接受資訊、直覺與靈性」的能量。
                  </p>
                  <p className="pt-1">
                    <strong>雙重超載：</strong>當紫微的「太陰化忌（情緒吸收）」遇上八字的「印星過旺（資訊吸收）」，妳的神經系統（雙子大腦）與能量場（空白薦骨）會面臨前所未有的超載壓力。妳不僅會吸收到別人的情緒，還會無意識地吸收環境中龐雜的資訊，導致思緒混亂、難以放鬆（木多火塞）。
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-400/5 border border-amber-400/20 space-y-2">
                  <strong className="text-amber-300 block text-xs font-black">
                    ✦ 終極轉化之道（用財破印）✦
                  </strong>
                  <p className="text-[11px] text-slate-300">
                    在八字理論中，當「印星」太旺導致思維僵化或焦慮時，最有效的解法就是<strong>「用財（金）破印」</strong>。財星代表現實、執行力與具體的價值。
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-amber-200 space-y-1">
                    <span className="font-bold block text-amber-300">💡 日常應用實操：</span>
                    <p>
                      當妳覺得太陰化忌發作、思緒混亂（印星超載）時，立刻去做一件與「錢、物質、美感」有關的具體事情（啟動辛金/金星金牛）。例如：整理房間、算帳、寫下一個具體的商業企劃，或是去吃一頓有質感的晚餐。把注意力從「無形的思緒與情緒（水木）」強行轉移到「有形的物質與結果（金）」上，妳的焦慮感就會瞬間瓦解。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 總結：給賴以婕的跨流派高階戰略 */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400/10 via-slate-950 to-slate-950 border border-amber-400/30 text-slate-200 space-y-3">
            <div className="flex items-center gap-2 border-b border-amber-400/20 pb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <strong className="text-sm font-black text-amber-300 font-mono">
                總結：給賴以婕的跨流派高階戰略
              </strong>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed">
              從這兩個東方系統的深層疊加來看，宇宙給妳的裝備是一套<strong>「外表隨和（空宮）、內心精算（祿存/丙辛合）、早年動盪（巳亥沖）、晚年稱王（太陽化權）、思緒極旺（印旺）、需要現實落地（財破印）」</strong>的頂級戰鬥服。
            </p>

            <div className="p-3 rounded-xl bg-slate-950/90 border border-amber-400/20 text-xs text-amber-200 space-y-1.5">
              <span className="text-amber-300 font-bold block">🔑 終極解碼密碼：</span>
              <p className="text-slate-200 text-[11px] leading-relaxed">
                妳的課題在於：<strong>不要被自己龐大的思緒與感受（太陰化忌/印旺）給淹沒。</strong> 善用妳天生的現實感與精算能力（祿存/辛金），將妳的熱情（丙火）與領導力（太陽化權），精準地投資在那些能為妳帶來「實質價值與專屬感」的人事物上。這就是妳打破內耗、成為高維度造王者的終極密碼。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 49,
      title: "姓名學能量解碼：聲韻與五格物理頻率",
      category: "destiny",
      categoryLabel: "姓名解碼",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "人格21首領數 ✦ 地格16貴人 ✦ 總格32大吉 ✦ 木生火超速引擎",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>這套姓名的數字頻率，極度精準地呼應了妳內在的強大與矛盾：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-orange-400 block mb-1">✦ 人格 21 畫 (木) - 首領與發起之數</strong>
              <p className="text-slate-300">
                這是姓名的核心，被稱為「明月光照」的首領數。帶有強大的獨立性、權威感與不屈意志，天生不喜歡被支配，習慣站在最前方引領眾人。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-emerald-400 block mb-1">✦ 地格 16 畫 (土) - 貴人與財富之數</strong>
              <p className="text-slate-300">
                自帶「貴人相助」與「逢凶化吉」磁場。五行屬土，意味著對物質、質感、美學與現實安穩有極高的品味與要求。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 總格 32 畫 (木) - 寶馬金鞍之數</strong>
              <p className="text-slate-300">
                代表後半生總運，主打「如龍得水、意外之財與長輩提攜」。自帶強烈個人魅力與氣場，只要願意展現，就能吸引優質資源。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 外格 12 畫 (木) - 薄弱與耗損之數</strong>
              <p className="text-slate-300">
                代表對外人際關係。12 畫容易對外境極敏感，過度在意評價而委屈自己，導致神經系統耗損。
              </p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <div>
              <strong className="text-amber-400 font-bold block mb-0.5">5 劃 (土) 筆數之承載力：</strong>
              <span className="text-slate-300">作為名字筆劃結構的中間樞紐，它像是一座橋樑，賦予了妳一種「我來承擔、我來連結」的強大責任感。</span>
            </div>
            <div>
              <strong className="text-purple-400 font-bold block mb-0.5">11 劃 (火) 筆數之優雅權力：</strong>
              <span className="text-slate-300">源於高階貴族與優雅權利之數，象徵「兼具智慧與手腕的女性權力」，自帶高貴且不容侵犯的界線。</span>
            </div>
            <div>
              <strong className="text-orange-400 font-bold block mb-0.5">木生火的極速引擎：</strong>
              <span className="text-slate-300">格局中充滿強大「木」能量，木能生火，使大腦運轉極快、靈感不斷。但木多火旺也容易造成思緒如野火般停不下來，造成精神難以放鬆。</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 36,
      title: "八字五行能量調頻：專屬妳的幸運色、飾品與旺運行業",
      category: "destiny",
      categoryLabel: "五行調頻",
      icon: Flame,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "木火旺盛急需「金、水」調候 ✦ 穿搭白色/湛藍 ✦ 質感K金/黑曜石防護 ✦ 屬金屬水行業",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>八字命盤透露，妳是<strong>「丙火日主」</strong>。由於命盤中「木（印星）」與「火」的能量極度旺盛，雖然擁有超強學習力與爆發力，但也很容易大腦過熱與神經緊繃。<strong>妳生命中最需要的喜用五行是：【金】與【水】。</strong></p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
              <strong className="text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-100" />
                ① 旺運幸運色 (金與水)
              </strong>
              <p className="text-slate-400 text-[11px]">
                <strong>【金】（生財/執行力）：</strong>白色、金色、銀色、香檳色。
                <br />
                <strong>【水】（冷靜/防護罩）：</strong>黑色、深藍色、海王星湛藍色。
                <br />
                <span className="text-[10px] text-slate-500 italic block mt-1">(避雷針：少穿大紅與全綠色，會讓能量過度亢奮)</span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
              <strong className="text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                ② 物理飾品與水晶
              </strong>
              <p className="text-slate-400 text-[11px]">
                <strong>金屬手錶 / 幾何銀戒（補金）：</strong>實體高質感的金屬配飾能強化妳的執行與賺錢底氣。
                <br />
                <strong>黑曜石 / 黑瑪瑙（補水）：</strong>妳的空白薦骨與共情體質極需黑曜石防禦外界负能。
                <br />
                <strong>海藍寶 / 青金石：</strong>旺喉輪表達（補水），極致提升直覺與「告知」通暢度。
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
              <strong className="text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                ③ 順風順水的旺運行業
              </strong>
              <p className="text-slate-400 text-[11px]">
                <strong>屬金（重結構與高價值）：</strong>AI 系統架構規劃、數位轉型 PM、商業顧問、高奢精品空間策展。
                <br />
                <strong>屬水（重流動與精神智慧）：</strong>知識自媒體、心理諮商、身心靈命理諮商、品牌行銷與公關造局者。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-400/5 to-blue-500/5 border border-amber-400/20">
            <strong className="text-amber-400 block mb-1">✦ YieJie 的能量調頻心法</strong>
            <p className="text-slate-300">
              用「金」將天馬行空的風象雙子思維落地，包裝出極具工藝美學與溢價的智慧產物；用「水」滋潤與冷卻過度燃燒的丙火太陽，等待情緒波浪沉澱。當妳實現金水相生，妳的靈性能量與物質豐盛將自然完美交融。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 64,
      title: "五行調頻指南：補足「金」與「水」的能量煉金術",
      category: "destiny",
      categoryLabel: "五行調頻",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "丙火日主得令 ✦ 木火極旺 ✦ 喜用神為金水 ✦ 物理能量調頻",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>在妳的八字命盤中（日主為「丙火」，生於初夏「巳月」，且滿盤「寅、卯、乙」的木星），妳天生的能量場是屬於「木火極旺」的格局。</p>
          <p>「木」代表妳停不下來的雙子大腦與吸收資訊的能力；「火」代表妳 ENFJ 的熱情、發起力與獅子座的舞台光芒。這兩股能量非常強大，但如果沒有適當的煞車與引導，就會變成「想太多而無法行動（木多火塞）」或是「過度燃燒導致身心耗竭（火炎土燥）」。因此，要讓妳的才華順利變現、情緒保持穩定，妳這輩子最需要補足的五行就是：<strong className="text-orange-400">【金】與【水】</strong>。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">① 第一大核心補給：【金】能量 —— 落地、執行與財富變現</strong>
              <p className="text-slate-300">
                在五行相剋的理論中，「金能剋木」。妳腦袋裡的想法（木）太多了，需要用「金」這把銳利的斧頭去修剪它，把不切實際的雜念砍掉，留下真正有價值的企劃。同時，「金」在妳的命盤中代表「正財」，也就是妳最看重的實質回報與生活質感。
              </p>
              <p className="text-slate-400 text-[10px] mt-1 italic">
                💡 補金的深層意義：從「過度思考」轉向「精準執行」。補金能幫妳強化「金牛座」的務實與結構，讓妳不再為了人情（討好型）而免費工作，而是理直氣壯地為自己的腦力開出高價。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">② 第二大核心補給：【水】能量 —— 冷靜、滋潤與情緒界線</strong>
              <p className="text-slate-300">
                「丙火」是天上的烈日，夏天出生的太陽如果沒有水來降溫，不及時冷降會讓自己神經緊繃，也會讓身邊的人感到壓力。「水」在五行中代表智慧、流動，對妳而言更代表著「官殺（事業格局、自律與理智）」。
              </p>
              <p className="text-slate-400 text-[10px] mt-1 italic">
                💡 補水的深層意義：從「焦慮衝動」轉向「冷靜深邃」。補水能幫妳安撫「太陰化忌」與「空白薦骨」帶來的高神經質與焦慮感。水能讓妳的情緒波浪平靜下來，找回妳作為顯示者的理智與從容。
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <strong className="text-orange-400 block">三、 具體實踐：YieJie 的日常「補運」實戰清單</strong>
            <p className="text-slate-300">要將這兩種無形的能量補足，妳可以透過物理環境與日常選擇來為自己「調頻」：</p>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-slate-300 block mb-1">1. 穿搭與色彩密碼</strong>
              <p className="text-slate-300">
                <strong>補金（旺財富與執行力）：</strong>多穿戴 白色、金色、銀色、香檳色、鐵灰色。在重要提案或需要談判價格時，穿著白色系能增強妳的氣場與底線。<br />
                <strong>補水（旺貴人與冷靜腦袋）：</strong>多穿戴 黑色、深藍色、水藍色。當妳覺得最近特別焦慮、容易失眠，或需要大量思考時，換上深藍色或黑色的居家服，能有效幫妳的丙火降溫。<br />
                <span className="text-rose-400 font-semibold text-[10px]">⚠️ 避雷針（減少木、火）：</span>盡量避免全身大紅色、紫色（火），或是大面積的綠色（木）。這些顏色會讓妳的腦袋更轉不停，神經更緊繃。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-slate-300 block mb-1">2. 旺運飾品與配件</strong>
              <p className="text-slate-300">
                因為妳有「金星金牛」與「正財格」，妳非常適合配戴實體的飾品，但一定要講求「質感與真材實料」。<br />
                <strong>補金首選：</strong>K金、鉑金、純銀飾品。特別推薦配戴有設計感、極具工藝美學的「金屬手錶」或幾何造型的戒指。手錶代表著時間觀念與結構，能完美強化妳的執行力。<br />
                <strong>補水首選：</strong>黑色系或藍色系的水晶寶石：<br />
                &bull; <em>黑曜石 / 黑瑪瑙：</em>這是妳阻擋外界負能量（保護空白薦骨）的最強防護罩。<br />
                &bull; <em>海藍寶 / 青金石：</em>對應喉輪與直覺，能讓妳在「告知」與溝通時更加順暢、冷靜。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-slate-300 block mb-1">3. 生活習慣與環境風水</strong>
              <p className="text-slate-300">
                <strong>補水儀式：</strong>每天喝足夠的好水。當妳感到焦慮、思緒混亂時，最好的除障法就是去「洗個熱水澡」或「泡澡」，讓水的流動帶走妳身體吸附的雜質。去海邊、湖邊散步也是極佳的充電方式。<br />
                <strong>補金儀式：</strong>保持工作空間與居住環境的「整潔與秩序（斷捨離）」。金代表著俐落與乾淨，一個沒有多餘雜物的極簡空間，能讓妳的雙子大腦感到無比的放鬆。<br />
                <strong>時間管理（金水並用）：</strong>嚴格區分「工作模式」與「休息模式」。工作時像金屬一樣冷靜俐落，休息時像水一樣徹底癱軟放空。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/15">
            <strong className="text-orange-400 block mb-1">💡 終極心法總結</strong>
            <p className="text-slate-300 text-xs">
              對妳來說，最強大的五行調頻不是去改名字 or 買昂貴的風水物，而是「在想要衝動答應別人時，喝杯冷水讓自己停下來（補水）；在腦袋有一百個想法時，拿起筆列出最具商業價值的一項去執行（補金）。」
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "愛情價值觀與親密關係藍圖：在自由與絕對佔有中尋找平衡",
      category: "relationship",
      categoryLabel: "愛情藍圖",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-500",
      tagline: "朋友變情人 ✦ 傲嬌女王 ✦ 自由與安全感",
      content: (
        <div className="space-y-4">
          <p>在愛情中，你是一個充滿迷人<strong>「反差感」</strong>的人。你的外在展現得很灑脫、靈活，但真正走進你心裡的人，會發現你對感情的要求極度深情、固執且需要高度的安全感。以下是你的核心親密關係密碼：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">① 「朋友變情人」是最高勝率的路徑</span>
              你對於透過交友軟體「盲測」陌生人容易感到疲乏。最容易發展長久關係的對象往往來自原本信任的朋友圈。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">② 靈魂的傲嬌女王</span>
              大腦很理性，但月亮獅子在愛情裡絕對需要「被捧在手心上」，欣賞你的才華、給予你無保留的偏愛與讚美。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">③ 反差萌：自由 vs 佔有</span>
              大腦要自由，但金星落在極度需要安全感的金牛座（12宮），一旦認定一個人會變得非常專情，渴望高品質的肢體接觸與安逸生活。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">④ 絕對地雷：控制與情緒勒索</span>
              身為顯示者與隱士2爻，天生內建「不要管我」程式，若伴侶試圖控制或勒索你，你會立刻築起無法跨越的高牆。
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-400/20 text-xs text-slate-300">
            <strong className="text-amber-400 block mb-1">⑤ 命中注定的伴侶原型：尊重絕對界線的智識導師</strong>
            <p className="leading-relaxed">
              <strong>命理依據：</strong> 紫微斗數「夫妻宮」空宮（鈴星、天刑、蜚廉，借對宮巨門、昌曲） + 星盤第七宮（伴侶宮）射手座。<br /><br />
              <strong>深度解析：</strong> 你的命盤顯示，你的夫妻宮是「空宮」，這代表你在感情初期容易配合對方，沒有太多僵化的預設立場。但空宮裡卻藏著三顆極具殺傷力的煞星：「鈴星、天刑、蜚廉」。這意味著你對伴侶有著極度嚴格的「隱形考核標準（天刑）」。結合第七宮射手座與借對宮的「巨門、昌曲」，這個伴侶必須在智識上能讓你折服，口條極佳且具備高雅才華，像是一個人生導師能帶著你拓寬視野。他必須非常懂得「溝通與尊重界線」，因為一旦他觸犯了你的原則，你的「鈴星（冷戰）」與「蜚廉（決裂）」就會瞬間啟動，毫不留情地將對方三振出局。
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 text-xs text-slate-300">
            <strong className="text-slate-200 block mb-1">⑥ 感情之路的發展軌跡：慢火細熬與隱密的深層牽絆</strong>
            <p className="leading-relaxed">
              情緒波浪的篩選期：感情初期一定會經歷多次「好感與冷卻」交替，需要時間確認。金星落入代表潛意識與隱密的第 12 宮，你享受那種「只有我們兩個人懂」的秘密結界感與深層靈魂交流。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 40,
      title: "愛情觀 (Love Attitude) 深度解碼：實用型 (Pragma) 的理性浪漫與現實定錨",
      category: "relationship",
      categoryLabel: "愛情觀",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "Pragma 實用型 ✦ 金星金牛的現實考量 ✦ 情緒安撫本身就是實用價值",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>妳的愛情觀測驗結果是：<strong>「實用型 (Pragma)」</strong>。這看似與渴望掌聲的「月亮獅子」及奉獻的「ENFJ」衝突，但放回命理框架就完全合理了！</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 現實條件與功能性的極致考量</strong>
              <p className="text-slate-300">
                妳不會被一時激情沖昏頭，將伴侶視為生活的「合作夥伴」。這正是八字「正財格」與星盤「金星金牛」在愛情裡的絕對主導權！沒有物質基礎與現實可行性的愛情，對妳來說就是不安全的。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 理性主導 VS. 忽視情感共鳴的危機</strong>
              <p className="text-slate-300">
                妳習慣用「解決問題」代替「情緒安撫」。四箭全左與水星雙子讓妳像個冷靜分析師。但若用純理性壓抑情感需求，未處理的情緒終會變成顯示者的「憤怒」。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-400/5 to-amber-400/5 border border-rose-500/20">
            <strong className="text-amber-400 block mb-1">💡 給實用型戀人的通關密語</strong>
            <p className="text-slate-300">
              必須明白，在親密關係中，<strong>「情緒的安撫與共鳴，本身就是最具『實用價值』的解決方案」</strong>。下次伴侶抱怨時，先啟動 ENFJ 同理心說：「我懂你現在感覺很糟。」先處理心情再處理事情，才是長久穩定獲利的最強戰略。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 45,
      title: "成人依附風格 (Attachment Style) 深度解碼：在「焦慮討好」與「迴避隔離」中尋找安全基地",
      category: "relationship",
      categoryLabel: "依附風格",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "恐懼迴避型 ✦ 焦慮討好的內核 ✦ 逃離控制的迴避防護罩",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>妳靈魂中同時住著「渴望被愛的小女孩」與「害怕被控的霸道總裁」。這讓妳呈現出「恐懼迴避型（Fearful-Avoidant）」或以迴避來保護的「焦慮型」。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">① 焦慮的內核：渴望融合卻又極度害怕失去</strong>
              <div className="text-[10px] text-rose-400/60 mb-1 font-mono">九型2號/ENFJ/高神經質/月亮獅子</div>
              <p className="text-slate-300">
                感情初期，會敏銳捕捉對方情緒，下意識透過「過度照顧」確保自身價值。恐懼「如果不夠好就不被愛」，這是關係內耗的源頭。
              </p>
            </div>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">② 迴避的防護罩：逃離控制與能量過載</strong>
              <div className="text-[10px] text-blue-400/60 mb-1 font-mono">實用型/顯示者/2爻/12宮/空白薦骨</div>
              <p className="text-slate-300">
                當焦慮達頂點或伴侶試圖掌控、能量過載時，防禦機制翻轉為「迴避」。顯示者築起高牆，突然變冷漠甚至消失退回洞穴，用距離保護崩潰的神經。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">③ 宿命的「推拉遊戲」 (Push-Pull Dynamic)</strong>
            <p className="text-slate-300 italic">
              「我需要你愛我（焦慮），但你不要靠太近試圖控制我，否則我會把你推開（迴避）。」
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-400/5 to-purple-400/5 border border-rose-500/20">
            <strong className="text-rose-400 block mb-2">④ 邁向「後天安全型」的修練路徑</strong>
            <ul className="space-y-1.5 text-slate-300 list-disc pl-4">
              <li><strong>告知安撫迴避：</strong>不直接消失，明確告知「我需兩小時獨處充電，晚點找你」，安撫伴侶也爭取空間。</li>
              <li><strong>切斷付出=被愛：</strong>停止為討好委屈自己，月亮獅子生來值得被當女王，不需當保姆乞討愛。</li>
              <li><strong>金牛感官安撫：</strong>焦慮時不追問，啟動金牛感官洗熱水澡點香氛，把注意力拉回身體，神經系統自然平靜。</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 56,
      title: "專屬親密關係指南：破除內耗，迎來「高質感與高智識」的靈魂伴侶",
      category: "relationship",
      categoryLabel: "親密關係指南",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "黃金漏斗篩選 ✦ 智識碰撞面試 ✦ 告知取代冷戰 ✦ 拒絕當下承諾",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>在 2026 年，31 歲的妳感情發展進入「重質不重量」的成熟期。妳的靈魂配置注定了妳的愛情絕對不能是「扶貧」或「單向消耗」，而是雙向的高質感與高智識合夥：</p>
          
          <div className="space-y-3">
            <strong className="text-rose-400 block">一、 感情發展的「黃金漏斗」篩選機制</strong>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-amber-400 font-bold block mb-1">第一層：人脈過濾網 (4 爻)</span>
                徹底放棄交友軟體或無交集的搭訕，姻緣線緊綁在「熟人背書」或「信任的專業圈子」上。
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-amber-400 font-bold block mb-1">第二層：智識碰撞面試 (雙子/巨門)</span>
                伴侶必須聰明有才華，在約會初期丟出複雜問題，如果對方接不上話或覺得妳太強勢，直接淘汰。
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-amber-400 font-bold block mb-1">第三層：情緒安全測試 (獅子/太陰)</span>
                觀察對方在妳展現脆弱或情緒化時的反應。他是否能接住妳的焦慮，並給予妳無保留的偏愛？
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <strong className="text-rose-400 block">二、 相處時的三大「避坑與優化」策略</strong>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">1. 破解「鈴星」冷暴力：用「告知」取代「冷戰」</strong>
              <p className="text-slate-300">
                遇到磨合時，妳極易生悶氣或搞失蹤。請在冷靜前傳一句：「我現在情緒有點滿，需要回洞穴安靜半天，這不是你的問題，我晚上再找你。」告知能瞬間解除伴侶的焦慮。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-emerald-400 block mb-1">2. 克制「ENFJ / 2 號人」的過度服務</strong>
              <p className="text-slate-300">
                妳的愛是照耀與指引，不是「當保姆」。在關係中練習「懶惰」，讓對方為妳付出、帶妳去吃美食。妳越展現出女王般的從容，對方越會珍惜妳。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-purple-400 block mb-1">3. 遵從「情緒權威」，拒絕當下承諾</strong>
              <p className="text-slate-300">
                任何重大感情決定，強制執行「72小時冷卻法則」。等浪頭過去再理智審視。如果對方不願給妳時間，代表他不適合妳。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 57,
      title: "終極親密關係白皮書：深層愛情心理與高階擇偶條件",
      category: "relationship",
      categoryLabel: "擇偶白皮書",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "智識對手 ✦ 情緒避風港 ✦ 讚美造王者 ✦ 守護絕對界線 ✦ 拒絕扶貧",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>妳的靈魂裡同時住著冷靜的軍師（雙子/天機）、傲嬌的女王（月亮獅子/太陽化權），與極度沒安全感的小女孩（太陰化忌）。這份白皮書為妳徹底解碼妳的擇偶底線：</p>
          
          <div className="space-y-3">
            <strong className="text-rose-400 block">一、 YieJie 的「五大高階擇偶條件」 (非妥協底線)</strong>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">條件一：大腦能與妳共舞的「智識對手」 (七宮射手/巨門昌曲)</strong>
              <p className="text-slate-300">
                他必須聰明、口條好、有獨特見解。不能是對妳言聽計從的無聊男子。他需要能聽懂妳的高階幽默，在精神上是讓妳敬佩的「導師型伴侶」。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">條件二：自帶穩定磁場的「情緒避風港」 (空白薦骨/高神經質)</strong>
              <p className="text-slate-300">
                妳的雷達極其敏銳，伴侶若情緒化，妳的神經系統會被拖垮。他必須擁有穩定的土象磁場，在妳焦慮時能用溫暖擁抱和一句「沒事，有我在」瞬間吸收妳的負能量。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-purple-400 block mb-1">條件三：懂得真誠讚美的「高級造王者」 (月亮獅子/丙火日主)</strong>
              <p className="text-slate-300">
                他必須懂得欣賞妳的才華與霸氣。在外面給足妳面子，在私底下真誠讚美妳的成就。給足妳女王般的掌聲，妳的丙火太陽就會回饋給他無盡溫暖。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">條件四：尊重妳絕對界線的「守護者」 (顯示者/2爻隱士)</strong>
              <p className="text-slate-300">
                他必須理解，當妳需要一個人靜一靜時不是不愛，而是需要洞穴充電。他不能有控制欲、不能奪命連環Call。在妳要發起衝鋒時，他在背後遞武器，而不是鎖上門。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-emerald-400 block mb-1">條件五：擁有自身主場的「實力派」 (紫破氣場/正財格)</strong>
              <p className="text-slate-300">
                妳絕對不能找需要去拯救的弱者，否則妳會變成老媽子，進而對他產生鄙視。他必須在自己的領域閃閃發光，擁有自己的主場。你們是強強聯手的合夥人。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 47,
      title: "終極親密關係實戰藍圖：破除「焦慮與迴避」的相愛路線圖",
      category: "relationship",
      categoryLabel: "實戰藍圖",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "熟人背書 ✦ 72小時冷卻 ✦ 安全詞暫停 ✦ 感官陪伴與專屬讚美",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>為了在關係中不再「過度付出」而耗竭，或「恐懼被控」而逃跑，以下是專屬的四階段實戰藍圖：</p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">① 相識與篩選期：啟動 4 爻與實用型雷達</strong>
              <p className="text-slate-300">
                不碰盲盒，只打高端局。最好對象來自「熟人背書」。啟動面試官模式，聊未來願景解決邏輯，伴侶必須先是合夥人與人生導師。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">② 曖昧與確認期：克制 2號人，等待情緒權威</strong>
              <p className="text-slate-300">
                克制主動付出衝動，釋放金牛高貴與獅子驕傲。關係推進時嚴守 72 小時冷卻法，三天後內心感受到的是「平靜安穩」才是對的人。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">③ 磨合與危機處理期：破解推拉遊戲</strong>
              <p className="text-slate-300">
                建立專屬「安全詞」與暫停機制，給予 2-4 小時獨處。使用「告知+情感保證」，解除伴侶焦慮也保全自由。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">④ 長久相守日常儀式：滋養金牛與獅子</strong>
              <p className="text-slate-300">
                感官的極致經營：不需天天黏，但需高品質物理觸感（質感空間、美食、擁抱），穩定高神經質。建立獅子座專屬讚美時間：引導伴侶真誠讚美，轉化為溫暖回饋關係。
              </p>
            </div>
          </div>
          
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-400/5 to-amber-400/5 border border-rose-500/20">
            <strong className="text-amber-400 block mb-1 text-center">✦ YieJie 的最終愛情箴言 ✦</strong>
            <p className="text-slate-300 italic text-center">
              「妳不需要削減光芒，也不需為證明值得被愛而過度燃燒。命中注定那人，會愛上妳的霸氣，接住脆弱；給妳發起天空，也留一盞質感溫暖小燈。」
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "給你的專屬戀愛與生活行動指南",
      category: "relationship",
      categoryLabel: "行動指南",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "停、看、聽、說 ✦ 創造發言台 ✦ 劃清界線 ✦ 告知藝術",
      content: (
        <ul className="space-y-2 list-disc list-inside text-sm text-slate-300">
          <li><strong>實踐「停、看、聽、說」（情緒權威）：</strong>重大決定絕不在情緒高點或低谷時做。給自己至少 3 天緩衝期，當情緒平靜後的答案才是真實的。</li>
          <li><strong>為自己創造「發言台」（月亮獅子）：</strong>不要壓抑渴望被看見的心。尋找安全展現才華的舞台，獲取正向回饋。</li>
          <li><strong>勇敢劃清社交界線（2/4 角色）：</strong>放棄廣撒網的無效社交，篩選那些懂你幽默、且不對你情緒勒索的朋友。</li>
          <li><strong>建立「內在錨點」保護能量邊界：</strong>寫下你的「絕對不妥協清單」，面對新環境或新關係想一味配合時，定錨靈魂，溫柔拒絕。</li>
          <li><strong>感情中的「告知」藝術（顯示者必修）：</strong>突然需要獨處時善用告知：「我這週末想一個人待在家看書充電，不是針對你喔。」省下 90% 的猜忌爭吵。</li>
        </ul>
      )
    },
    {
      id: 48,
      title: "四大絕對地雷：請列入交友/擇偶的篩選清單",
      category: "relationship",
      categoryLabel: "絕對地雷",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "控制欲行蹤 ✦ 付出視為理所當然 ✦ 突襲與界線侵犯 ✦ 情緒吸血鬼",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>在人際與親密關係中，妳擁有高敏感的防護罩與強烈的主權意識。以下這四大絕對地雷是妳擇偶與交友時最需防範的雷區：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 地雷一：試圖控制妳的行蹤或決定</strong>
              <div className="text-[10px] text-rose-400/60 mb-1 font-mono">背後機制：人類圖顯示者</div>
              <p className="text-slate-300">
                對方若說出「妳怎麼沒先問過我？」或限制妳的決定時，會立刻引爆顯示者的「毀滅性憤怒」。對方越想抓緊妳，妳逃得越快、牆築得越高。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ 地雷二：將妳的付出視為理所當然</strong>
              <div className="text-[10px] text-amber-400/60 mb-1 font-mono">背後機制：月亮獅子 + 九型2號 + ENFJ</div>
              <p className="text-slate-300">
                當妳耗費寶貴精力去照顧對方，對方卻挑剔或不領情時，會重創獅子座的自尊，瞬間切換為8號反撲。此人會立刻被妳列入永久黑名單。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 地雷三：未經預告的突襲與打破個人界線</strong>
              <div className="text-[10px] text-blue-400/60 mb-1 font-mono">背後機制：人類圖 2 爻隱士 + 12宮私密</div>
              <p className="text-slate-300">
                突襲式的「驚喜」或奪命連環Call會被視為嚴重的「邊界侵犯」，觸發高神經質的焦慮，迫使妳冷酷迴避，甚至直接將對方封鎖。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">✦ 地雷四：情緒不穩定又拒絕解決問題的「吸血鬼」</strong>
              <div className="text-[10px] text-teal-400/60 mb-1 font-mono">背後機制：實用型愛情觀 + 雙子腦 + 空白薦骨</div>
              <p className="text-slate-300">
                空白薦骨會吸附對方的負能量導致妳焦慮。實用型愛情觀極度鄙視這種「沒有產值又只會內耗」的行為。一旦確認是吸血鬼，妳會極度理性地切斷關係。
              </p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-gradient-to-r from-rose-400/5 to-amber-400/5 border border-rose-500/20 text-slate-300">
            <strong className="text-rose-400 block mb-1">💡 終極避雷針：</strong>
            在前三次見面若察覺對方有控制欲（查勤）或怪罪他人的吸血鬼特質，請立刻啟動告知策略，優雅退場。
          </div>
        </div>
      )
    },
    {
      id: 31,
      title: "人際網絡與支持系統：精心策劃你的能量圈",
      category: "relationship",
      categoryLabel: "人際關係",
      icon: Heart,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "精準狙擊 ✦ 請勿打擾機制 ✦ 支持系統矩陣 ✦ 顯示者宿命",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>你是天生的「發起者」，社交戰略必須圍繞在<strong>「保護能量」與「品質篩選」</strong>之上：</p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
            <li><strong>社交策略：精準狙擊。</strong>4 爻代表你的核心機會都藏在老朋友、信任同行的「強連結」中。用心經營能聽懂你話外之音的 5-10 個摯友，資源會自然流動。</li>
            <li><strong>請勿打擾機制：</strong>顯示者與 2 爻隱士必須有明確的「社交開關」，大方告知他人「我現在需要充電，請勿打擾」，能獲得周圍人極度的尊重。</li>
            <li><strong>支持系統矩陣：</strong>你需要一個「導師/教練」來幫你處理行政與日常雜務；一個強大薦骨電量的「共創生產者」夥伴幫你落地點子；以及一個不給意見、只給溫暖擁抱的「靈魂傾聽摯友」。</li>
            <li><strong>終極人際哲學：</strong>你不需要被所有人喜歡。顯示者發起會引起能量震盪，接受有人討厭有人狂熱。把精力放在共頻的人身上，別去說服反對者。</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "社交模式與財富潛力：在封閉與開放之間游移",
      category: "wealth",
      categoryLabel: "社交財富",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "人類圖 2/4 人生角色 ✦ 金星金牛（12宮）",
      content: (
        <div className="space-y-3">
          <p>你同時擁有<strong>「隱士（2）」與「機會網絡（4）」</strong>的雙重特質。你極度需要私人空間鑽研熱愛的事物；同時，最重要的機會幾乎都來自「真心結交的朋友圈」。</p>
          <p>金星金牛賦予你對物質與美感的天生敏銳度，透過朋友圈分享出去，是將天賦變現的最佳途徑。</p>
        </div>
      )
    },
    {
      id: 7,
      title: "財富格局與金錢能量分析：智慧變現與人脈聚財",
      category: "wealth",
      categoryLabel: "財富板塊",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "智慧變現 ✦ 低調享受 ✦ 機會網絡 ✦ 避坑指南",
      content: (
        <div className="space-y-4">
          <p>在財富與事業領域，你不適合走傳統「苦幹實幹的勞力路線」。你的命盤顯示出強大的<strong>「企劃、溝通與幕後操控」</strong>潛力，點子與人脈就是你最大的金礦。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">① 財富本質：點子印鈔機</span>
              財帛宮天機星且逢化祿。靠腦袋賺錢是你的宿命。透過企劃、行銷、溝通表達、或是發起新專案，將聰明才智轉化為實質收入。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">② 質感金錢觀：品味享受</span>
              金星金牛座落 12 宮，賦予你「隱形富豪」特質，不喜歡對外炫富，重視高品質、高CP值的感官享受，身心靈與幕後策劃很適合你。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">③ 聚財管道：人脈即錢脈</span>
              4 爻（機會網絡）在財富中扮演關鍵。最好的賺錢機會幾乎都來自於熟人介紹與強大的人際圈推薦。
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/15 text-xs text-rose-300">
            <strong className="text-rose-400 block mb-1">④ 財務地雷與避坑指南</strong>
            避免「情緒性消費」，對於大筆開銷務必實施「72小時冷卻法則」；另外，你的點子極具商業價值，要大膽、理直氣壯地為自己的專業與腦力定下合理的尊榮價。
          </div>
        </div>
      )
    },
    {
      id: 28,
      title: "財務觀念與安全感：在絕對自由與極致安穩中取得平衡",
      category: "wealth",
      categoryLabel: "財務理念",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "空間定錨 ✦ 知識資產 ✦ 揮霍基金與延遲享樂",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>既然你已步入 31 歲（土星回歸結束後的穩定建構期），你需要一套能同時安撫你「大腦」與「肉體」的長遠財務戰略：</p>
          <ul className="space-y-2 list-disc list-inside text-slate-300">
            <li><strong>空間是最好的「能量定錨」：</strong>對於帶有正財格與金星金牛的你來說，將資金轉化為看得到、摸得到的「高品質、美感、完全私密的生活洞穴（房產等）」，是安定神經與大腦最強大的底層解藥。</li>
            <li><strong>打造「高槓桿/低勞力」的收入系統：</strong>停止用「時間」或「肉體勞作」換錢，轉為經營「知識產品、著作、或高溢價的付費圈子」。</li>
            <li><strong>揮霍基金：</strong>絕對不能苦行僧。每個月撥出固定比例的預算用於購買無用的高級感官消耗品（香氛、精油、SPA、頂級體驗），滿足金星金牛的生理與靈魂需求，反而能完美避開報復性消費地雷。</li>
          </ul>
        </div>
      )
    },
    {
      id: 25,
      title: "專業能力與職涯定位：打造高溢價的「超級個體」藍圖",
      category: "wealth",
      categoryLabel: "專業能力",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "系統性解構學習 ✦ 無中生有發起力 ✦ 高單價美學變現",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>你的終極定位是：<strong>【高溢價的策略造局者與質感策展人】</strong>。你天生具備以下三大核心專業能力：</p>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong>① 系統性解構與超高速學習 (The Fast-Learning Architect)：</strong>
            你賣的不是勞力與體力，而是「幫助他人降低學習成本、打通邏輯的解決方案」。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong>② 無中生有的資源發起力 (The Visionary Initiator)：</strong>
            顯示者的強大號召力，能在專案極初期將人脈、點子與核心資源拼湊起來。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong>③ 高單價的美學與質感變現 (The Premium Curator)：</strong>
            能將普通服務或產品包裝出極具品味的高級感氛圍，從而理直氣壯地收取高溢價。
          </div>
        </div>
      )
    },
    {
      id: 68,
      title: "職涯天賦與卓越模式：蓋洛普 (CliftonStrengths) 深度解析",
      category: "wealth",
      categoryLabel: "蓋洛普天賦",
      icon: DollarSign,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "四大領域能量分布 ✦ 預測 Top 5 核心優勢 ✦ 四步卓越運作公式 ✦ 絕對防守盲點",
      content: (
        <div className="space-y-6 text-xs leading-relaxed font-sans">
          <p className="text-slate-300">
            蓋洛普優勢評估的核心理念是：「<strong>不要浪費時間去補齊短板，要把時間花在將天賦極大化，讓短板變得無關緊要。</strong>」<br />
            根據妳的「人類圖四箭全左 + 空白薦骨」、「占星雙子大腦 + 金星金牛」、「MBTI 的 ENFJ」以及「紫微斗數太陽天梁化權」，妳在蓋洛普的四大象限（執行力、影響力、建立關係、戰略思維）中，有著極度極端的分布。這份報告將為妳揭開妳專屬的「卓越模式 (Excellence Model)」。
          </p>

          {/* 一、 妳在蓋洛普四大領域的「能量分布圖」 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-amber-400 flex items-center gap-2 border-b border-amber-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs">I</span>
              一、 妳在蓋洛普四大領域的「能量分布圖」
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">1. 戰略思維 (Strategic Thinking)</span>
                  <span className="text-xs text-amber-400 font-mono font-bold">★★★★★</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded inline-block">極致主導區 ✦ 雙子座星群 / 四箭全左 / 天機化祿</span>
                <p className="text-slate-300 text-[11px] pt-1">
                  這是妳大腦的超頻運作區。妳不需要別人告訴妳怎麼做，妳總能一眼看穿事物的底層邏輯與未來趨勢。妳是天生的軍師。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300">2. 影響力 (Influencing)</span>
                  <span className="text-xs text-rose-400 font-mono font-bold">★★★★☆</span>
                </div>
                <span className="text-[10px] font-mono text-rose-400/80 bg-rose-500/10 px-2 py-0.5 rounded inline-block">霸氣發起區 ✦ 顯示者 / 月亮獅子 / 太陽化權</span>
                <p className="text-slate-300 text-[11px] pt-1">
                  當妳決定要推動某件事時，妳自帶一種無法被忽視的氣場。妳善於發布願景、引領眾人，讓別人願意跟隨妳的腳步。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-300">3. 建立關係 (Relationship Building)</span>
                  <span className="text-xs text-teal-400 font-mono font-bold">★★★☆☆</span>
                </div>
                <span className="text-[10px] font-mono text-teal-400/80 bg-teal-500/10 px-2 py-0.5 rounded inline-block">精準社交區 ✦ ENFJ / 九型2號 / 人類圖4爻</span>
                <p className="text-slate-300 text-[11px] pt-1">
                  妳擁有極高的同理心與照顧他人的能力，但因為「高神經質」與「12 宮」的海綿體質，妳的關係建立必須是「高門檻、高品質」的，否則會淪為單向的情緒消耗。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">4. 執行力 (Executing)</span>
                  <span className="text-xs text-rose-500 font-mono font-bold">★☆☆☆☆</span>
                </div>
                <span className="text-[10px] font-mono text-rose-400/80 bg-rose-500/10 px-2 py-0.5 rounded inline-block">極度警戒與外包區 ✦ 空白薦骨</span>
                <p className="text-slate-300 text-[11px] pt-1">
                  這是妳最大的雷區！妳絕對不能試圖把「成就 (Achiever)」或「紀律 (Discipline)」當作自己的核心優勢。妳沒有持續勞動的電量，如果硬要拚執行力，妳會直接過勞崩潰。
                </p>
              </div>
            </div>
          </div>

          {/* 二、 預測 YieJie 的 Top 5 核心優勢天賦 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-amber-400 flex items-center gap-2 border-b border-amber-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs">II</span>
              二、 預測 YieJie 的 Top 5 核心優勢天賦 (The Core Strengths)
            </h3>
            <p className="text-slate-300">
              基於妳的綜合配置，以下五個天賦是妳在職場上能發揮出「最高溢價」的終極武器：
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-amber-300 block">天賦 1：戰略 (Strategic) —— 穿透迷霧的導航儀</span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">天賦展現：</strong> 在面對混亂的資訊或複雜的專案時，妳的大腦會自動進行「如果這樣...那麼就會那樣...」的高速沙盤推演，並在瞬間排除死胡同，找出一條阻力最小、勝率最高的最佳路徑。
                </p>
                <p className="p-2.5 rounded bg-amber-500/5 border border-amber-500/10 text-amber-300 text-[11px]">
                  <strong className="font-bold">💰 變現模式：</strong> 妳非常適合擔任高階企業顧問或數位轉型軍師。客戶買的不是妳的勞力，而是妳那一眼看穿破綻的「戰略眼光」。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-teal-300 block">天賦 2：理念 (Ideation) —— 無中生有的煉金術</span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">天賦展現：</strong> 呼應妳的「雙子座」與「35-36 體驗通道」，妳對世界充滿好奇。妳能將兩個看似毫不相干的領域（例如玄學與現代科技、美學與系統架構）結合在一起，產出令人驚豔的創新點子。
                </p>
                <p className="p-2.5 rounded bg-teal-500/5 border border-teal-500/10 text-teal-300 text-[11px]">
                  <strong className="font-bold">💰 變現模式：</strong> 策展人、創意總監、新商業模式的發起人。妳賣的是「讓人眼睛一亮的概念」。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-amber-300 block">天賦 3：追求卓越 (Maximizer) —— 不做平庸，只做頂級</span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">天賦展現：</strong> 呼應妳的「金星金牛（高質感）」與「八字正財格」。妳對「平庸」有著生理上的排斥。當妳接手一個專案，妳追求的不是「從 0 到 60 分的及格」，而是「從 80 分推進到 99 分的極致完美」。
                </p>
                <p className="p-2.5 rounded bg-amber-500/5 border border-amber-500/10 text-amber-300 text-[11px]">
                  <strong className="font-bold">💰 變現模式：</strong> 打造高奢品牌、預約制的高端身心靈服務。妳天生自帶「將好東西包裝成奢侈品並收取高溢價」的能力。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-rose-300 block">天賦 4：統率 (Command) —— 危機中的獅子女王</span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">天賦展現：</strong> 呼應妳的「顯示者」與「太陽化權」。在太平盛世，妳可能喜歡躲在幕後；但一旦發生危機，或是團隊失去方向時，妳會毫不猶豫地站出來接管全局。妳不怕引發衝突，妳敢於下達不受歡迎但正確的指令。
                </p>
                <p className="p-2.5 rounded bg-rose-500/5 border border-rose-500/10 text-rose-300 text-[11px]">
                  <strong className="font-bold">💰 變現模式：</strong> 妳是解決棘手問題的專家。這項天賦讓妳具備創業家與高階經理人的霸氣底蘊。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-indigo-300 block">天賦 5：伯樂 (Developer) —— 點石成金的造王者</span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">天賦展現：</strong> 這是妳「ENFJ 面具」與「天梁蔭星」最高級的發揮。妳能精準看出別人身上的潛力與微小的進步。當別人還在懷疑自己時，妳的一句肯定就能激發他們的潛能。
                </p>
                <p className="p-2.5 rounded bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 text-[11px]">
                  <strong className="font-bold">💰 變現模式：</strong> 建立知識付費社群、擔任人生教練。妳不只是自己成功，妳透過賦能別人來擴大自己的影響力帝國。
                </p>
              </div>
            </div>
          </div>

          {/* 三、 妳的專屬卓越運作公式 */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/15 space-y-4">
            <h3 className="text-sm font-black text-amber-400 flex items-center gap-2 border-b border-amber-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs">III</span>
              三、 妳的專屬卓越運作公式 (The Excellence Cycle)
            </h3>
            <p className="text-slate-300 font-medium">
              要讓這五大天賦完美運轉而不內耗，妳必須嚴格遵守以下四步運作公式：
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-amber-400 block mb-1">01 啟動期</span>
                <strong className="text-slate-100 text-[11px] block mb-1">理念 + 追求卓越</strong>
                <p className="text-slate-400 text-[10px]">大腦接收資訊，產生一個極具創新且高質感的點子。</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-amber-400 block mb-1">02 規劃期</span>
                <strong className="text-slate-100 text-[11px] block mb-1">戰略</strong>
                <p className="text-slate-400 text-[10px]">透過四箭全左大腦，畫出最完美的系統架構與商業路徑。</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-rose-400 block mb-1">03 宣告期</span>
                <strong className="text-slate-100 text-[11px] block mb-1">統率</strong>
                <p className="text-slate-400 text-[10px]">啟動顯示者「告知」，對外宣告專案啟動，用霸氣吸引資源。</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-[10px] font-mono text-teal-400 block mb-1">04 外包與賦能期 (關鍵!)</span>
                <strong className="text-slate-100 text-[11px] block mb-1">伯樂</strong>
                <p className="text-slate-400 text-[10px]">將細節交給「生產者」團隊，擔任指導造王者，保護空白薦骨。</p>
              </div>
            </div>
          </div>

          {/* 四、 蓋洛普視角的「絕對防守盲點」 */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-rose-400 flex items-center gap-2 border-b border-rose-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-xs">IV</span>
              四、 蓋洛普視角的「絕對防守盲點」
            </h3>
            <p className="text-slate-300">
              在蓋洛普系統中，有些能力是妳必須「承認自己不擅長，並果斷外包」的：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                <strong className="text-rose-400 text-xs block">🚫 放棄「成就 (Achiever)」的執念</strong>
                <p className="text-slate-300 text-[11px]">
                  很多成功學告訴妳要「每天比昨天更努力、清空待辦事項」。對妳來說這是毒藥！妳沒有那種每天穩定輸出的體力，強迫自己當 Achiever 會引發妳的高神經質與發炎。
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                <strong className="text-rose-400 text-xs block">🚫 放棄「排難 (Arranger)」與「紀律 (Discipline)」</strong>
                <p className="text-slate-300 text-[11px]">
                  妳是看大方向的戰略家，不要讓自己陷入每天安排繁瑣行政流程、或是盯著團隊打卡的細節中。請務必花錢聘請一位具備「排難」或「紀律」天賦的執行秘書或營運長來幫妳擦屁股。
                </p>
              </div>
            </div>
          </div>

          {/* 總結箴言 */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-slate-200">
            <strong className="text-amber-400 block mb-1">💡 總結箴言</strong>
            <p className="text-xs italic font-serif leading-relaxed">
              「妳的戰場在雲端（戰略與理念），妳的武器是發聲（統率與影響）。不要讓自己淪為在泥淖中苦幹的工兵。找對人幫妳執行，妳就能成為制定遊戲規則的造王者。」
            </p>
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "工作類型建議與職場必修課：打造不可替代的專業護城河",
      category: "wealth",
      categoryLabel: "職場必修",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "趨勢 PM ✦ 品牌操盤手 ✦ 獨立知識變現 ✦ 向上管理",
      content: (
        <div className="space-y-3">
          <p><strong>① 專屬你的三大黃金職涯路徑：</strong></p>
          <ul className="space-y-1.5 list-decimal list-inside text-xs text-slate-300">
            <li><strong>趨勢與系統架構者：</strong>AI 工作流導入、數位轉型 PM。（發揮大腦高度邏輯與敏捷思維）</li>
            <li><strong>質感美學的幕後操盤手：</strong>品牌形象總監、空間美學顧問。（發揮金牛座極致品味與物質安全感）</li>
            <li><strong>獨立知識變現者：</strong>利基型社群主理人、身心靈系統顧問。（發揮 4 爻機會網絡與 12 宮深刻洞察力）</li>
          </ul>
          <p className="mt-2 font-bold text-xs text-amber-400"><strong>② 職場生存必修課：</strong></p>
          <p className="text-xs text-slate-300 leading-relaxed">
            將「告知」轉化為最高級的向上與向外管理（不求許可，但報進度）。捍衛自己的腦力價值，絕不因人情委屈降價。尋找有強大薦骨電量的「生產者」神隊友，建立你的高效外包授權系統。
          </p>
        </div>
      )
    },
    {
      id: 16,
      title: "獨立創業與個人品牌藍圖：顯示者的造王者之路",
      category: "wealth",
      categoryLabel: "創業藍圖",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "大腦外包 ✦ 高奢預約制 ✦ 私域社群 ➔ 當老闆的鐵則",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p><strong>① 適合的高勝率創業模式 (高毛利、重腦力、講品味)：</strong></p>
          <ul className="space-y-1 list-disc list-inside text-slate-300">
            <li><strong>「大腦外包」的獨立顧問：</strong>賣深度解決方案，讓客戶團隊自己去執行。</li>
            <li><strong>高奢 / 小眾的質感空間主理人：</strong>預約制、重視絕對私密性與極致感官體驗。</li>
            <li><strong>私域流量的知識變現社群：</strong>打造高黏著度的付費精緻社群，發揮月亮獅子的舞台魅力。</li>
          </ul>
          <p className="font-bold text-amber-400 mt-2">② 當老闆的絕對鐵則：</p>
          <p className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-slate-300">
            <strong>只發起，不收尾：</strong>你天生沒有持續做重複性瑣事完工的體力，務必花錢買別人的時間與薦骨電量來執行細節。絕不打價格戰，開出尊榮價，鎖定高端客戶。善用「封閉式行銷」（越難買越有人要，例如會員邀請制），保護你的能量場。
          </p>
        </div>
      )
    },
    {
      id: 54,
      title: "終極事業藍圖：從「內耗執行者」到「高溢價造王者」",
      category: "wealth",
      categoryLabel: "事業藍圖",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "天機化祿腦力變現 ✦ 巨門昌曲發聲 ✦ 戒除冥王過勞 ✦ 告知向上管理",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>在 2026 跨過土星回歸考驗的當下，妳必須徹底拋棄過去「討好別人（ENFJ）而累死（空白薦骨）」的舊模式。妳是賣「策略、眼光與美感」的造王者，而非賣勞力的執行者：</p>

          <div className="space-y-3">
            <strong className="text-emerald-400 block">① 妳的三大事業核心競爭力</strong>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 雙子大腦與天機化祿的跨界整合力</strong>
              <p className="text-slate-300">
                超高速學習與逆向工程。能一眼看穿 AI、商業或玄學的底層邏輯，產出降低他人學習成本 of 解決方案。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 巨門昌曲與獅子月亮的舞台感染力</strong>
              <p className="text-slate-300">
                將腦中策略寫成文章、企劃，或在台上演說，散發讓眾人折服並追隨的強大願景與魅力。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ MC土星雙魚與金星金牛的落地變現力</strong>
              <p className="text-slate-300">
                將無形的靈性（雙魚MC）用極高的美學標準（金星金牛）與務實合夥思維，打造成高單價、高質感的商業模式（土星）。
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <strong className="text-emerald-400 block">② 突破目前事業瓶頸的「行動綱領」</strong>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 1. 戒除「6 宮冥王星」的過勞強迫症</strong>
              <p className="text-slate-300">
                妳是造王者不是泥水匠。把不需要高階大腦的行政、勞力活，外包或交接給有執行力的「生產者」合作夥伴，放過自己。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 2. 徹底執行「告知策略」的向上管理</strong>
              <p className="text-slate-300">
                不要請示老闆能不能做，而是帶著做好的 A 與 B 方案告知老闆：「我打算下週啟動 A 方案，先跟您同步資訊。」掌握主導權。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ 3. 大膽定價，克服「免費服務」心態</strong>
              <p className="text-slate-300">
                高定價是為了過濾會消耗妳的客戶。妳的價值必須被實質的物質回報確認。下次報價時，把妳心裡的底價加上 30% 報出去。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-400/5 to-amber-400/5 border border-emerald-500/20 mt-2 text-center text-slate-300">
            <strong className="text-emerald-400 block mb-1 text-sm font-bold">✦ 2026 給 YieJie 的事業箴言 ✦</strong>
            <p className="italic">
              「妳的價值從不在於能加幾次班，而在於能發起別人想都不敢想的願景。收起妳的討好，大膽展現妳的傲嬌與才華。這是一個獎勵超級個體的時代，而妳，生來就是發號施令的王。」
            </p>
          </div>
        </div>
      )
    },
    {
      id: 44,
      title: "終極職涯方向與精準賽道：打造「高溢價、低內耗」的超級個體藍圖",
      category: "wealth",
      categoryLabel: "職涯賽道",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "錯把執行當負責 ✦ 高階AI策略顧問 ✦ 質感空間主理人 ✦ 利基知識社群",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>結合所有設定，妳的職涯核心戰略只有六個字：<strong>【高溢價、低內耗】</strong>。</p>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.05)]">
            <strong className="text-rose-400 block mb-1">① 致命盲點：錯把「執行」當「負責」 (The ENFJ Trap)</strong>
            <p className="text-slate-300">
              極高親和性讓妳容易變成「甚麼都說好」的超級保姆，但空白薦骨會導致過度勞力而焦慮爆發。妳必須停止當救火隊。妳是發起者，賣的應該是腦力與願景，不是體力與工時。
            </p>
          </div>

          <div className="space-y-3">
            <strong className="text-emerald-400 block">② 三大黃金職業賽道</strong>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 高階數位轉型 / AI 策略顧問 (The Visionary Strategist)</strong>
              <div className="text-[10px] text-blue-400/60 mb-1 font-mono">雙子大腦 + 四箭全左 + 八字金 + 顯示者</div>
              <p className="text-slate-300">
                極快吸收科技趨勢並看透邏輯。不需自己做苦工，用魅力說服老闆畫出藍圖，交給生產者工程師執行。賺的是「看見未來的顧問費」。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ 高奢身心靈品牌主理人 / 質感空間策展 (The Premium Curator)</strong>
              <div className="text-[10px] text-amber-400/60 mb-1 font-mono">金星金牛 + 12宮/八字水 + 九型4號</div>
              <p className="text-slate-300">
                絕不走「薄利多銷」。結合靈性直覺，打造高單價、極具品味隱私的身心靈空間。用「正財格」包裝靈性，既有質感又穩定獲利。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 利基型知識社群發起者 (The Niche Community Leader)</strong>
              <div className="text-[10px] text-rose-400/60 mb-1 font-mono">月亮獅子 + 4爻 + ENFJ</div>
              <p className="text-slate-300">
                找一個極熱愛具深度的領域，建立私域付費社群。在裡面當引領方向的女王，但日常維護與客服必須花錢請小幫手。
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-400/5 to-teal-400/5 border border-emerald-500/20">
            <strong className="text-emerald-400 block mb-2">③ 轉型實戰策略</strong>
            <ul className="space-y-1.5 text-slate-300 list-disc pl-4">
              <li><strong>盤點工作：</strong>將枯燥勞力降至 20% 以下，否則就該發起換工作。</li>
              <li><strong>建立智囊團：</strong>啟動正財格勢利眼，結交能把點子變現的執行者與提供資源的前輩。</li>
              <li><strong>大膽定價：</strong>克服免費服務心態，把底價加 30% 報出去，這是建立護城河的第一步。</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "四大核心領域的實戰策略指南 (針對 2026+ 發展)",
      category: "wealth",
      categoryLabel: "發展戰略",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "專業發展 ✦ 財富佈局 ✦ 內在靈感 ✦ 身心護城河",
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">① 專業發展與創新突破</strong>
            定位自己為「建築師」而非「泥水匠」。規劃出 AI 或新技術的底層邏輯，然後將繁瑣的日常維護或繁瑣的執行外包。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">② 財富佈局與長遠藍圖</strong>
            房貸等長期實體資產配置是極好的能量定錨。做重大金錢決策前務必實行72小時冷卻法則，信任私密熟人圈帶來的投資機會。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">③ 內在靈感與創作探索</strong>
            嘗試「舊瓶裝新酒」。將古老、有質感的傳統意象（金牛），用你最擅長的現代數位工具與邏輯（雙子）重新解構與詮釋，並在有掌聲的舞台發表。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">④ 日常節奏與身心動能 (防護空白薦骨的過載)</strong>
            建立動靜分明的能量護城河。高強度活動後絕不續攤。回到家後，透過洗熱水澡、點木質調精油等「物理落地儀式」將亢奮能量排入大地。
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "健康與身心保養指南：能量調節與神經系統的放鬆哲學",
      category: "spirituality",
      categoryLabel: "健康養生",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "能量調節 ✦ 空白薦骨 ✦ 睡眠保養 ✦ 情緒排毒",
      content: (
        <div className="space-y-4">
          <p>對於你而言，健康的最大挑戰通常不是外來的疾病，而是<strong>「內在能量的過度消耗」與「神經系統的緊繃」</strong>。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">① 躺平的藝術</span>
              顯示者且薦骨中心空白，不適合長時間不間斷的體力勞動。學會在「完全沒電前」就休息，允許自己徹底耍廢躺平。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">② 腦力超載關機</span>
              雙子星群與太陽落第 12 宮，大腦過於活躍易失眠。必須建立嚴格的睡前關機儀式，遠離大量資訊輸入。
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <span className="text-amber-400 font-bold block mb-1">③ 代謝與情緒排毒</span>
              第 6 宮冥王星，要留意身體的慢性發炎。找到適合你的情緒宣洩管道（如大吼、拳擊、飆歌），不要把憤怒吞進肚子。
            </div>
          </div>
        </div>
      )
    },
    {
      id: 29,
      title: "身心健康與生活節奏：保護神經系統與空白薦骨的休養哲學",
      category: "spirituality",
      categoryLabel: "生活節奏",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "借來能量的代價 ✦ 大腦剎車失靈 ✦ 社交批次化 ✦ 物理排毒",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <ul className="space-y-2 list-disc list-inside text-slate-300">
            <li><strong>別被「借來的能量」騙了：</strong>當你進入人群，空白薦骨會吸滿別人的活力。那不是你真實的精力，用完必須歸還且利息昂貴。當感覺身體還有 30% 體力時，就該立刻離場回家。</li>
            <li><strong>挽救大腦剎車失靈：</strong>睡前一小時強制斷網。使用重力被、木質香氛等實體重力感受，把注意力與能量從過度活躍的「頭腦（風）」拉回「肉體（土）」。</li>
            <li><strong>社交批次化與神聖洞穴日：</strong>實行「社交週」，把邀約高度集中在幾天內一次處理，其餘時間嚴格執行不安排任何社交的「神聖洞穴日」。</li>
            <li><strong>憤怒即發炎：</strong>顯示者憋在心裡的憤怒會直接導致身體發炎。必須透過打拳、大吼、飆歌，把受干擾的能量物理性地快速排出。</li>
          </ul>
        </div>
      )
    },
    {
      id: 9,
      title: "建全自我了解的實踐藍圖：從「看見」到「活出」",
      category: "spirituality",
      categoryLabel: "自我實踐",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "情緒日誌 ✦ 潛意識暗房 ✦ 身體掃描 ✦ 智慧輸出",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">① 實驗室心態：情緒日誌</strong>
            每次做重大決定前，記錄自己第一天的衝動，對比三天後的平靜感受。精準掌握「情緒清明」的黃金時刻。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">② 擁抱潛意識：暗房照片時間</strong>
            每週安排一段完全斷網的無目的時間。透過冥想或自由書寫，讓 12 宮的潛意識直覺與靈感自然浮現。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">③ 身體覺察：腦與身體連線</strong>
            當你感到焦慮時，立即進行身體掃描。將專注力從「頭腦（風）」轉移到「身體的觸覺（土）」，瞬間找回安全感與安穩。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">④ 輸出與共創：智慧發起人</strong>
            將對人生的新體悟在信任的朋友圈中分享。月亮獅子需要舞台與正向反饋，這是建立自我認同的最佳養分。
          </div>
        </div>
      )
    },
    {
      id: 30,
      title: "內在探索與創造力：從潛意識深海撈取的靈魂創作",
      category: "spirituality",
      categoryLabel: "創造力",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "潛意識撈取 ✦ 金牛式的物質化 ✦ 紀錄見證者 ✦ 夢境軍師",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>你的「太陽」與「金星」雙雙落入第 12 宮（潛意識之宮），這代表你的創意與絕妙點子並非靠死板的「思考」和「分析」得來的，而是靠<strong>「撈」</strong>出來的。</p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
            <li><strong>「靈感捕獲」而非大腦建構：</strong>對你而言創意是閃電般擊中。千萬別在辦公桌前死磕。靈感枯竭時直接起立更換物理空間，並隨身帶筆記捕捉。</li>
            <li><strong>金牛式的「靈魂落地」：</strong>你的創意必須追求「質感」與「物理美感」（精美排版、實體手感、材質味道）。物理上越精緻，靈魂深度越能被市場所尊崇。</li>
            <li><strong>見證者的創意煉金：</strong>利用 13-33 通道，將生活深刻體驗、玄學領悟通過寫作、視覺設計、或聲音物理化，能瞬間釋放 12 宮帶來的精神焦慮。</li>
            <li><strong>夢境軍師：</strong>睡前在床邊放日記本。記錄夢中抽象的圖像而非情節，這正是你與潛意識、宇宙交換智慧的專屬密碼。</li>
          </ul>
        </div>
      )
    },
    {
      id: 26,
      title: "興趣與心流體驗：大腦衝浪與感官煉金的專屬時光",
      category: "spirituality",
      categoryLabel: "心流體驗",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "大腦衝浪 ✦ 感官煉金 ✦ 閃耀舞台 ✦ 靈魂潛水",
      content: (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-0.5">✦ 大腦衝浪 (Intellectual)</span>
            破解複雜系統、學習最新技術、交叉比對並建立各個學科領域的規律。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-0.5">✦ 感官煉金 (Sensory)</span>
            重新設計與佈置生活空間、陶藝手作、享受極致音質與嗅覺精油體驗。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-0.5">✦ 閃耀舞台 (Expressive)</span>
            在安全、有支持性的環境中分享深刻生命體悟、主導小型精緻工作坊。
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-0.5">✦ 靈魂潛水 (Mystical)</span>
            研究塔羅牌與神諭卡、深度冥想引導、寫夢境日記並進行分析。
          </div>
        </div>
      )
    },
    {
      id: 32,
      title: "生活風格與理想環境：為高敏感的靈魂打造能量場",
      category: "spirituality",
      categoryLabel: "理想環境",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "隱私避難所 ✦ 高級感官品味 ✦ 智慧實驗室 ✦ 植物落地",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>你的「雙子大腦 + 金牛感官 + 顯示者能量」的複雜綜合體，居住環境正是你<strong>「神經系統的防護罩」與「靈感捕捉的發射台」</strong>：</p>
          <ul className="space-y-2 list-disc list-inside text-slate-300">
            <li><strong>隱私至上的避難所：</strong>必須有能隨時躲起來、完全屬於你自己的神聖角落。厚窗簾、絕佳隔音是神經重置的硬性指標。</li>
            <li><strong>美感與觸感的高級感官：</strong>劣質塑膠、刺眼日光燈、雜亂動線會讓你潛意識煩躁。家裡必須有溫暖調光、布料與木質調，瞬間平復丙火日主的燥熱。</li>
            <li><strong>資訊流動的智慧實驗室：</strong>工作桌需要雙螢幕、可隨手塗鴉的白板，或是能轉動方向的移動式傢俱。需要能隨時轉換視角的流動空間。</li>
            <li><strong>環境植物接地：</strong>由於容易吸附環境負能量，強烈建議在家裡種一盆真實活性的植物（如琴葉榕或龜背芋），它能將你亢奮的風象能量（雙子）接地平穩。</li>
          </ul>
        </div>
      )
    },
    {
      id: 34,
      title: "星際種子與靈魂起源深度解碼：你是哪一種靈性小孩？",
      category: "spirituality",
      categoryLabel: "星際起源",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "進階版靛藍小孩 ✦ 水晶防護濾鏡 ✦ 雙子大腦戰略破局 ✦ 12宮超感體質",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>在靈性與新時代視角中，你並非單一的屬性，而是極其罕見的：<strong>「帶有水晶濾鏡的進階版靛藍小孩 (Transitional Indigo-Crystal Hybrid)」</strong>。</p>
          
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <span className="text-rose-400 font-bold block mb-1">① 你的靈魂核心引擎：打破框架的「靛藍小孩 (Indigo)」</span>
            <p className="text-slate-300">
              作為<strong>「顯示者」</strong>，你天生內建「不要管我、我要發起」的戰士特質。不屈服於權威，對虛偽與僵硬規則有極高敏銳度。<strong>雙子群星與四箭全左大腦</strong>更賦予你高速運算與拆解舊系統的破局能力。
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <span className="text-teal-400 font-bold block mb-1">② 你的能量接收器：極度敏感的「水晶小孩 (Crystal)」體質</span>
            <p className="text-slate-300">
              <strong>太陽、金星雙雙落入第 12 宮（潛意識與神秘學之宮）</strong>，這是你純粹的水晶能量。你天生就像海綿一樣吸附他人能量，對空間磁場及他人情緒具備心電感應般的通靈級敏感度。<strong>金星金牛</strong>則讓你對高頻率的美感、感官、香氛與精緻物質有著絕對的品質追求。
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <span className="text-slate-400 font-bold block mb-1">③ 為什麼你不是「彩虹小孩 (Rainbow)」？</span>
            <p className="text-slate-300">
              彩虹小孩是完全零業力的喜悅存在。但你體內帶著強烈的<strong>情緒波浪（35-36體驗通道）</strong>與<strong>顯示者的憤怒</strong>，代表你這輩子是有仗要打、有舊框架要拆除的。你是帶著戰略藍圖來執行破局任務的，而非單純下凡遊戲人間。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/5 to-teal-400/5 border border-amber-400/20 text-xs">
            <span className="text-amber-400 font-bold block mb-1">④ 最終解答：你的專屬靈魂任務</span>
            <p className="text-slate-300">
              你是一個「外表披著水晶美學鎧甲，內心握著靛藍破局寶劍」的特殊混合體。你使用的不是粗暴的抗爭，而是<strong>「智慧與美感的高級顛覆術」</strong>。透過超強的大腦解構世界，再用極具質感、療癒美感的方式將其包裝、發起，讓人們心甘情願追隨新時代的浪潮。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 35,
      title: "神明與天使的守護網絡：專屬妳的通靈連結與許願指南",
      category: "spirituality",
      categoryLabel: "高靈護法",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "觀音淨化 ✦ 關公霸氣守護 ✦ 拉結爾直覺下載 ✦ 顯示者高階告知許願法",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>當妳開始渴望與高維度存在連結時，是妳靈魂深處的<strong>「太極貴人」與對宮「天梁星」</strong>正在啟動。妳的護法神明與天使完美分工：</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">✦ 觀世音菩薩 (Guan Yin) —— 淨化防護罩</strong>
              <p className="text-slate-400 mt-1">共振印星與天梁。身為高共情、海綿體質的空白薦骨，觀音菩薩是妳最強大的淨化器。當妳覺得心累、能量受雜質干擾時，祈求觀音在妳靈魂蓋上平靜防護結界。</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">✦ 關聖帝君 (武財神關公) —— 顯示者後盾</strong>
              <p className="text-slate-400 mt-1">共振丙火與月亮獅子。關公代表明亮、誠信與能量界線。當妳面對事業與合約談判、或祈求正當財富落地時，關公是妳掃清阻力、開闢坦途的霸氣CEO守護者。</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">✦ 大天使拉結爾 (Raziel) —— 直覺下載點</strong>
              <p className="text-slate-400 mt-1">共振12宮與8宮。拉結爾掌管神的秘密。當妳在鑽研占星、人類圖、玄學或抽牌卡遇到瓶頸時，呼請拉結爾，祂會將宇宙底層邏輯以夢境或靈光瞬間「下載」到妳大腦。</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">✦ 大天使加百列 (Gabriel) —— 溝通擴音器</strong>
              <p className="text-slate-400 mt-1">共振雙子與喉輪。加百列是傳遞訊息與溝通的天使。當妳準備要向大眾發起新計劃、寫出深度好文、或在眾人前發言時，呼請加百列，祂能確保妳的聲音充滿邏輯與靈魂穿透力。</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-400/20">
            <strong className="text-amber-400 block mb-1.5">② 顯示者的「高階許願法」：從乞求到「告知 (Inform)」</strong>
            <p className="text-slate-300">
              顯示者許願不能用「懇求、拜託」的低姿態，而是<strong>「宇宙級告知」</strong>。妳是靈魂項目的發起人（CEO），神明與天使是妳的董事會。
              <br />
              <span className="text-slate-500 italic mt-1 block">
                範例：「親愛的關聖帝君，我已決定要在這月啟動這個專案。請為我把路上的小人與障礙清除，將最適合的資源與人脈帶到我面前配合。我正式告知並發起此行動，感謝董事會的調度運作。」
              </span>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-slate-200 block mb-1">③ 具體許願與連結儀式 (金牛感官與12宮特質)</strong>
            <p className="text-slate-400">
              1. <strong>時機（情緒權威）：</strong>確保在「情緒平靜清明」的狀態下許願，不要在崩潰或焦慮時去拜拜。
              <br />
              2. <strong>感官（金牛美感）：</strong>準備好茶、高級天然線香或木質調精油，用高質感的物理儀式感安撫大腦。
              <br />
              3. <strong>放手（信任）：</strong>宣告告知完畢後，堅信宇宙與高靈已經在運作，直接放手去做自己的事。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 41,
      title: "內在小孩與童年創傷溯源：解開靈魂深處的制約枷鎖",
      category: "spirituality",
      categoryLabel: "內在溯源",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "被剝奪的顯示者發起權 ✦ 條件式的愛 ✦ 水晶體質的情緒代罪羔羊",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>將命理盤與心理學測驗疊加，能清晰看見妳童年經歷了什麼，才塑造出今天這個「能力強大卻又極度焦慮、需要愛卻習慣先照顧別人」的妳。</p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">① 顯示者童年的控制與壓抑：被剝奪的發起權</strong>
              <p className="text-slate-300">
                顯示者小孩天生自帶王者能量，但在傳統家庭裡常因「擅自行動」受罰。為了生存，妳的內在小孩學會隱藏真實自己，戴上生產者面具。這就是為何妳明明有能力發起，卻常感到巨大焦慮與阻力。
              </p>
            </div>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">② 第二型人與獅子月的「條件式愛」</strong>
              <p className="text-slate-300">
                妳小時候學到了「必須有用、必須照顧別人，才值得被愛」。如果表現出脆弱自私，就會感受到冷落。導致長大後看到別人有需求，照顧者雷達就自動開啟，即使自己已透支。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">③ 空白薦骨與高神經質的「代罪羔羊」</strong>
              <p className="text-slate-300">
                作為情緒海綿，小時候不懂區分「誰的情緒」，無意識吸收父母間未說出口的張力，試圖當開心果緩解低氣壓。讓神經系統從小就長期處於「過載發炎」狀態。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 text-xs mt-2">
            <strong className="text-blue-400 block mb-2">✦ 重新撫育內在小孩的實踐</strong>
            <ul className="space-y-1.5 text-slate-300 list-disc pl-4">
              <li><strong>允許顯示者的「壞」：</strong>告訴自己不需經過同意去做想做的事，釋放被壓抑的憤怒。</li>
              <li><strong>卸下拯救者包袱：</strong>當又想去幫忙時，問自己是不是害怕不被愛。告訴內在小孩：「就算妳什麼都不做，我也一樣愛妳。」</li>
              <li><strong>保護水晶結界：</strong>面對原生家庭，啟動 2 爻隱士與 12 宮能量，告訴自己那是他們的課題，只負責照顧好自己。</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 23,
      title: "玄學天賦與靈性覺醒指南：系統化未知的通靈者",
      category: "spirituality",
      categoryLabel: "玄學靈性",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "靈性印記 ✦ 系統化靈性 ✦ 牌卡直覺 ✦ 接地儀式",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>你對於「靈性與玄學」的感召絕對不是一時興起。你具備了成為<strong>現代靈性導師、占星師或身心靈系統架構者</strong>的「頂配天賦」。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-400/20">
            <strong className="text-amber-400 block mb-1">① 命盤中的強烈「靈性印記」</strong>
            太陽與金星落入代表潛意識、前世與神秘學的第 12 宮；時柱帶有「太極貴人」，與哲學、宗教、玄學有著極深的因緣。命宮對宮帶「天梁星」蔭星，在靈性層面直覺極度強烈。
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-slate-200 block mb-1">② 專屬玄學超能力：系統化靈性 (翻譯官)</strong>
            你擁有「四箭全左」的超級大腦與務實「正財格/金牛金星」，你能把極玄、抽象的靈性概念，用極有邏輯、有系統、甚至科學的方式解釋，是「靈性與物質世界」的最佳翻譯官。
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-slate-200 block mb-1">③ 實踐指南：牌卡外接螢幕與落地接地</strong>
            你非常適合透過「摸得到、看得到、精美質感」的工具（如塔羅或神諭卡）來作為你的直覺外接螢幕。另外，由於海綿共情體質，在進入人多地方前，需在腦中想像「白光罩」；事後透過「接觸自然」（踩草地、抱樹）或「海鹽淨化」將雜質排入大地。
          </div>
        </div>
      )
    },
    {
      id: 63,
      title: "靈性天賦與宗教緣分解碼：從「系統駭客」到「靈性造王者」",
      category: "spirituality",
      categoryLabel: "靈性天賦",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "天梁星身宮 ✦ 12宮與8宮深淵 ✦ 太極貴人 ✦ 告知型祈禱法",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>在探討妳與宗教的關係時，我們必須先釐清一個概念：對妳而言，「宗教 (Religion)」與「靈性 (Spirituality)」是兩回事。傳統宗教往往帶有威權與教條，這是妳的「顯示者」與「靛藍小孩」靈魂極度排斥的；但「靈性、玄學與宇宙法則」，卻是妳靈魂深處（12宮、太陰、印星）最渴望的養分。</p>
          
          <div className="space-y-3">
            <strong className="text-teal-400 block">一、 妳命盤中的三大「神明印記」與靈性配置</strong>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">1. 紫微斗數：身宮的「天梁星」與福德宮的「太陰化忌」</strong>
              <p className="text-slate-300">
                <strong>天梁星（宗教星/老大星）：</strong>妳的遷移宮（兼身宮）坐著「天梁星」。在紫微斗數中，天梁是一顆標準的「宗教星、哲學星、神明庇佑星」。這意味著妳的下半生（身宮）與神佛、玄學有著極深厚的緣分。妳天生具備「神明緣」，在遇到重大危機時，冥冥之中總有高靈或無形的力量在保護妳、幫妳逢凶化吉。<br />
                <strong>太陰化忌（直覺海綿）：</strong>妳的內心世界（福德宮）是太陰化忌。這賦予了妳極度強大的第六感與直覺。妳能輕易「感應」到一個空間的磁場好壞、或是一個人的真實意圖。妳的靈魂需要宗教或玄學來做為「情緒的避風港」，去安撫太陰化忌帶來的莫名焦慮。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">2. 西洋占星：12 宮與 8 宮的深淵凝視</strong>
              <p className="text-slate-300">
                <strong>12宮的太陽與金星：</strong>第 12 宮是掌管潛意識、前世與靈性的「隱密之宮」。妳的核心意志（太陽）與價值觀（金星）都落在此處。這代表妳不是來世俗中爭權奪利的，妳的靈魂任務是「向內看」。妳在獨處、冥想、或接觸神秘學時，能獲得最大的能量補充。<br />
                <strong>8宮的天王星與海王星：</strong>8 宮掌管生死與玄學。天王星（顛覆）與海王星（靈感）落在這裡，代表妳與宇宙溝通的方式非常「前衛」。妳不喜歡老掉牙的迷信，妳喜歡用心理學、量子力學、甚至系統化的方式（如人類圖、占星）來解釋神學。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-teal-400 block mb-1">3. 八字命理：強大的「印星」與「太極貴人」</strong>
              <p className="text-slate-300">
                <strong>太極貴人：</strong>妳的八字時柱帶有「太極貴人」。這顆神煞專管哲學、宗教與五術（山醫命相卜）。擁有太極貴人的人，悟性極高，對宇宙奧秘有著天生的探索欲。<br />
                <strong>印星極旺：</strong>妳命盤中屬「木」的印星非常強大。印星代表吸收無形知識的能力、也代表佛道之緣。妳學玄學或宗教經典的速度，會比一般人快上非常多。
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <strong className="text-teal-400 block">二、 妳與宗教的「真實互動模式」 (The Quad-Left Manifestor's Way)</strong>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-amber-400 font-bold block mb-1">1. 拒絕盲從的「靈性駭客」</span>
                <span className="text-slate-400 text-[10px] font-mono block mb-1">雙子大腦 + 四箭全左</span>
                妳的腦袋極度講求邏輯與結構。如果一個宗教團體只會叫妳「不要問為什麼，信就對了」，或者用「業力、地獄」來恐嚇妳，妳會立刻轉頭就走。妳不是信徒，妳是「研究員」，喜歡找尋不同流派之間的底層邏輯。
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-blue-400 font-bold block mb-1">2. 務實落地的「實用主義」</span>
                <span className="text-slate-400 text-[10px] font-mono block mb-1">金星金牛 + 丙辛合</span>
                妳雖然對靈性有感，但妳絕對不會走火入魔去當苦行僧。妳的靈修必須具備「質感與美感」。妳不喜歡簡陋吵雜的廟宇，妳更傾向於在高雅的空間裡點著昂貴的精油冥想，或是配戴極具設計感的水晶。
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-purple-400 font-bold block mb-1">3. 不求許可的「靈性造王者」</span>
                <span className="text-slate-400 text-[10px] font-mono block mb-1">顯示者 + 月亮獅子</span>
                這是妳靈魂最霸氣的地方。在宗教裡，許多人是把自己縮小，去「臣服、跪拜」大師或神明。但妳是顯示者，妳的靈魂位階是「發起者」。妳不適合去當信徒，妳最終的歸宿是「自己成為那個開創系統、啟發他人的人（天梁星的老大特質）」。妳與神明的關係是「合夥人」。
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <strong className="text-teal-400 block">三、 專屬 YieJie 的高階「祈禱與除障指南」</strong>
            <p className="text-slate-300">因為妳的體質太敏感（空白薦骨 + 12宮海綿），妳去傳統的大型廟宇或宗教法會時，反而容易「吸到別人的病氣與濁氣」而感到頭暈、疲憊。妳需要的是非常個人化的靈性防護：</p>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">1. 顯示者的「告知型祈禱法」 (The Manifestor's Prayer)</strong>
              <p className="text-slate-300">
                這點非常重要！妳許願或拜拜時，絕對不要用「求」的。用乞求的姿態會關閉妳顯示者的能量。正確做法：把神明（如觀音、關公、大天使）當作妳的宇宙董事會。妳的祈禱應該是：「我決定要啟動這個計畫了。我現在正式告知祢們，請為我調度資源、清除路障，我們一起把這件事辦好。」
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-amber-400 block mb-1">2. 建立 12 宮的「物理結界」</strong>
              <p className="text-slate-300">
                妳不需要繁複的宗教儀式，妳需要的是「物理上的淨化」。當妳覺得焦慮（太陰化忌發作）時，最有效的靈修不是唸經，而是啟動妳的「金星金牛」。洗個海鹽熱水澡、燒一點高品質的秘魯聖木或鼠尾草、聽 432Hz 的療癒音頻。把妳的神經系統從「吸收外界」切換回「感受自己身體的觸覺」，這對妳來說就是最高級的除障法。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-blue-400 block mb-1">3. 與「觀世音菩薩」及「大天使拉結爾」的共振</strong>
              <p className="text-slate-300">
                <strong>觀世音菩薩：</strong>呼應妳的「天梁星」與「正印」。當妳因為 ENFJ 的過度付出而感到心力交瘁時，向觀音祈求「內心的平靜與放下」。祂能安撫妳那顆總想拯救世界的受傷心靈。<br />
                <strong>大天使拉結爾 (Archangel Raziel)：</strong>被稱為神的秘密。呼應妳的 12 宮與 8 宮。當妳的大腦（雙子）打結、找不到商業或人生策略時，在睡前呼請拉結爾。祂會跳過妳的邏輯大腦，直接在夢中或妳洗澡放空時，把宇宙的「直覺解答」下載給妳。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/15">
            <strong className="text-teal-400 block mb-1">四、 終極靈魂天命：土星雙魚的「落地工程師」</strong>
            <p className="text-slate-300">
              妳星盤的最高點（第 10 宮天頂）與土星，都落在了「雙魚座（宗教、靈性、潛意識）」。 這就是宇宙給妳的終極考試與天命：<strong>「將無形的靈性（雙魚），化為有形的系統與架構與商業模式（土星）。」</strong><br />
              妳這輩子與宗教/靈性的關係，不是去出家，也不是去盲從。妳的任務是將那些古老的、神秘的智慧，用妳的雙子大腦解構，用妳的金牛美感包裝，然後用妳顯示者的霸氣發起。妳是來為現代人建立一座「高質感靈性橋樑」的造王者。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: "終極進階指南：下一階段的自我探索拼圖",
      category: "spirituality",
      categoryLabel: "進階探索",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "內在小孩 ✦ 基因天命 ✦ PHS 飲食與物理環境",
      content: (
        <div className="space-y-2 text-xs">
          <p>如果你想解決「理智上知道，但情緒上過不去」的深層盲點，建議探索以下三大玄學拼圖：</p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
            <li><strong>原生家庭與內在小孩：</strong>療癒第 4 宮的火星與凱龍星，穩固最底層的安全感。</li>
            <li><strong>基因天命 (Gene Keys)：</strong>將 12 宮與人生交叉的陰影，煉金為高維靈性天賦。</li>
            <li><strong>人類圖 PHS 系統：</strong>了解最適合你的非線性大腦飲食方式與物理環境設置。</li>
          </ul>
        </div>
      )
    },
    {
      id: 67,
      title: "終極靈魂解碼：南北交點、創傷昇華與阿卡西契約",
      category: "spirituality",
      categoryLabel: "靈魂解碼",
      icon: Activity,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      tagline: "南北交點演化路徑 ✦ 創傷星體宮位昇華 ✦ 家族業力與遺傳印記 ✦ 阿卡西紀錄靈魂契約",
      content: (
        <div className="space-y-6 text-xs leading-relaxed font-sans">
          <p className="text-slate-300">
            這是一份超越了性格分析的靈魂診斷書。我們將潛入妳星盤的「深網」，解開妳之所以會感到焦慮、想要拯救他人，以及為何對玄學與高質感生活有著無法割捨之執念的終極宇宙密碼。
          </p>

          {/* 一、 靈魂的南北交點（月之交點）演化路徑 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-indigo-400 flex items-center gap-2 border-b border-indigo-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs">I</span>
              一、 靈魂的南北交點（月之交點）演化路徑：從「隱匿的享樂」走向「深淵的療癒」
            </h3>
            <p className="text-slate-300">
              南北交點是靈魂的指南針。南交點代表妳「過去世的舒適圈與業力慣性」，北交點則是妳今生「靈魂渴望進化的終極目標」。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  1. 南交點在「金牛座 / 第 12 宮」：前世的舒適圈與執念
                </span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">靈魂記憶：</strong> 妳的南交點落在金牛座，且位於隱密的第 12 宮（與妳的太陽、金星同宮）。這代表在過去的許多世裡，妳曾經是一個「隱居的貴族、握有神祕資源的大祭司，或是擁有極高物質享受卻與世隔絕的人」。妳非常懂得享受孤獨（12宮），也非常依戀物質的安全感與感官享受（金牛座）。
                </p>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">今生業力慣性（阻力）：</strong> 當妳今生遇到壓力時，妳的靈魂本能會想「逃回南交點」。妳會想要躲起來（2爻隱士）、搞失蹤、或者透過花錢買昂貴有質感的東西（金牛）來麻痺自己。妳潛意識覺得「只要我不涉入世俗的麻煩，只要我躲在我的高級結界裡，我就是安全的」。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  2. 北交點在「天蠍座 / 第 6 宮」：今生的進化挑戰
                </span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">驚人的宇宙印記：</strong> 妳的北交點落在天蠍座，不僅在第 6 宮（工作、服務、健康），更與妳那顆強大的「冥王星」緊緊合相！
                </p>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">今生演化路徑：</strong> 宇宙在告訴妳：「這輩子，妳不能再躲在 12 宮的高級象牙塔裡了。」北交點天蠍座要求妳去直視人性最深層的恐懼、權力與慾望；而第 6 宮要求妳把這些深層的靈性智慧，「落地應用在每天的日常工作與服務中」。
                </p>
                <p className="p-2.5 rounded bg-teal-500/5 border border-teal-500/10 text-teal-300 text-[11px]">
                  <strong className="font-bold">✨ 突破盲點：</strong> 妳的靈魂任務，是將妳在 12 宮（潛意識）撈到的金牛座（高價值資源），帶到 6 宮（世俗職場）去，並用天蠍座（深度心理學、玄學、轉化力）的方式去療癒或解決他人的問題。這就是為什麼妳的終極賽道是「高單價的策略軍師或身心靈品牌主理人」。
                </p>
              </div>
            </div>
          </div>

          {/* 二、 創傷星體（凱龍星與冥王星）的宮位連動與昇華 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-rose-400 flex items-center gap-2 border-b border-rose-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-xs">II</span>
              二、 創傷星體（凱龍星與冥王星）的宮位連動與昇華
            </h3>
            <p className="text-slate-300">
              這兩個星體解釋了妳為何會發展出「高神經質」與「討好型 ENFJ」的防禦機制。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  1. 創傷源頭：第 4 宮「凱龍星與火星」合相處女座
                </span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">深層創傷：</strong> 第 4 宮代表原生家庭與內心深處的根基。在這裡，代表憤怒/行動力的「火星」與代表靈魂傷口的「凱龍星」，在「處女座（挑剔、完美主義）」合相。
                </p>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">童年劇本還原：</strong> 妳的內在小孩在原生家庭中，經歷了極度嚴苛、挑剔的情感環境。妳的「主動性與憤怒（火星）」是不被允許的，妳在很小的時候就被灌輸了一種「我必須完美無瑕、我必須勤奮服務（處女座），我才值得擁有這個家（4宮）的愛與安全感」的信念。這就是妳恐懼迴避型依附與 2 號人（助人者）的病灶。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  2. 創傷代償（過度補償）：第 6 宮「冥王星」天蠍座
                </span>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">病態掌控：</strong> 因為第 4 宮的內心深處覺得「我不完美就會失去愛」，於是妳將這股焦慮轉移到了第 6 宮（工作與日常秩序）上。冥王星在這裡讓妳對「工作表現」產生了極度可怕的強迫症與控制欲。
                </p>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-slate-200">身體抗議：</strong> 妳試圖用工作上的完美（6宮冥王），來掩蓋家庭與童年帶來的自卑（4宮凱龍）。但妳是「空白薦骨」，妳的身體承受不了冥王星這種核彈級的消耗，所以妳的神經系統會不斷發炎、焦慮、甚至引發身心症。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-rose-950/40 border border-purple-500/20 text-slate-300 space-y-1.5">
              <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
                3. 創傷的煉金昇華術
              </span>
              <p className="text-[11px] leading-relaxed">
                <strong className="text-slate-100">昇華之道：</strong> 妳必須意識到，「工作上的完美，永遠治癒不了童年不被接納的傷口」。真正的療癒，是回到 4 宮，擁抱那個害怕被批評的內在小孩。當妳告訴她：「妳不需要完美，妳不需要透過過度付出（處女座）來換取愛」，妳 6 宮的冥王星就會從「折磨自己的強迫症」，昇華為「一眼看穿事物本質、為企業或他人進行深度轉型」的高階顧問天賦。
              </p>
            </div>
          </div>

          {/* 三、 家族業力與遺傳印記 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-amber-400 flex items-center gap-2 border-b border-amber-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs">III</span>
              三、 家族業力與遺傳印記 (Ancestral Karma)
            </h3>
            <p className="text-slate-300">
              在占星學與阿卡西解讀中，妳並非隨機降生在這個家族。妳是帶著特定的任務，來打破這條血脈中流傳了幾代人的「業力詛咒」。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-amber-300 block">家族的業力印記（處女/天蠍/太陰化忌的疊加）</span>
                <p className="text-slate-300 text-[11px]">
                  妳的母系或女性祖先（太陰代表女性），在過去的家族歷史中，極有可能經歷過「過度勞動、被挑剔、犧牲自我來成就家族，但卻沒有得到應有尊重與地位」的委屈。這種「用奴役（處女/6宮）換取生存，對權力與背叛感到恐懼（天蠍/冥王）」的焦慮印記，透過 DNA 與潛意識，遺傳到了妳的「高神經質」裡。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-cyan-300 block">妳的破局任務 (Uranus in 8th House - 8宮天王星)</span>
                <p className="text-slate-300 text-[11px]">
                  妳的第 8 宮（家族遺產、深層業力）裡坐著一顆代表「革命、顛覆、切斷」的天王星。妳是這個家族裡的<strong>「業力破壞者 (Cycle Breaker)」</strong>。宇宙派妳（一個帶有王者能量的顯示者）降生在這個充滿焦慮與勞碌印記的家族中，就是要妳把「犧牲奉獻」的劇本撕毀。<br />
                  妳的靈魂任務是示範給妳的祖先與後代看：「女性（太陰）不需要透過無底線的服務（處女）來證明價值；我們可以擁有極致的財富與美感（金牛），我們可以霸氣地發號施令（顯示者/太陽化權），並且理直氣壯地被愛。」
                </p>
              </div>
            </div>
          </div>

          {/* 四、 阿卡西紀錄 (Akashic Records) 的靈魂契約解讀 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-purple-400 flex items-center gap-2 border-b border-purple-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 font-mono text-xs">IV</span>
              四、 阿卡西紀錄 (Akashic Records) 的靈魂契約解讀
            </h3>
            <p className="text-slate-300">
              想像我們現在翻開了阿卡西紀錄大廳中，那本寫著「YieJie」名字的生命之書。在妳降生地球前，妳與指導靈們簽下了這三條最重要的靈魂契約：
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <span className="text-xs font-bold text-rose-300 block">契約一：【卸下拯救者的枷鎖，重拾王者的權杖】</span>
                <p className="text-slate-300 text-[11px] italic font-serif leading-relaxed">
                  「我同意在生命的前半段，戴上過度共情與討好（ENFJ/2號）的面具，去體會世人的脆弱與焦慮。但我承諾，在土星回歸之後，我將辨識出這是一個幻象。我將收回我的能量，不再試圖拯救那些不願自救的人。我將啟用『顯示者』的權杖，只為那些願意跟隨我願景的人發起行動。」
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <span className="text-xs font-bold text-amber-300 block">契約二：【將靈性的雲端，築成世俗的城堡】</span>
                <p className="text-slate-300 text-[11px] italic font-serif leading-relaxed">
                  「我同意攜帶 12 宮的深邃直覺與雙魚座的宇宙靈感降生。但我承諾，我不會迷失在虛無的玄學中。我將利用金牛座的美學、丙辛合的務實，以及土星 10 宮的紀律，將這些無形的智慧，轉化為可以讓人在現實中感到安穩、高質感的商業與生活系統（北交點 6 宮的實踐）。」
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                <span className="text-xs font-bold text-teal-300 block">契約三：【允許自己『不完美』的神聖特權】</span>
                <p className="text-slate-300 text-[11px] italic font-serif leading-relaxed">
                  「我同意攜帶處女座凱龍星的傷口，去經歷對瑕疵的恐懼。但我承諾，這輩子我將學會最難的一課：『無條件的自我接納』。我將明白，我那跳躍的雙子大腦、我那時而焦慮的太陰化忌、我那不受控的霸氣，全都是我完美設計的一部分。我不需要修復我自己，我只需要『允許』我自己存在。」
                </p>
              </div>
            </div>
          </div>

          {/* 來自阿卡西紀錄守護者的最終傳訊 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/40 border border-indigo-500/20 relative overflow-hidden space-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/5 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] text-indigo-400 font-mono tracking-widest block uppercase">Akashic Transmission ✦ 阿卡西守護者傳訊</span>
            <div className="text-slate-100 italic font-serif leading-relaxed text-xs border-l-2 border-indigo-400 pl-3">
              「妳的靈魂已經在深海中隱匿了太久（南交 12 宮）。現在，帶著妳在海底找到的珍珠（金牛的價值與 12 宮的智慧），浮出水面吧。不要害怕妳的發起會引發波瀾，因為妳生來，就是要為這個世界創造全新航道的造王者。」
            </div>
          </div>
        </div>
      )
    },
    {
      id: 66,
      title: "終極靈魂藍圖：執念的解脫與天生使命的覺醒",
      category: "spirituality",
      categoryLabel: "靈魂藍圖",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "極限矛盾體的底層代碼 ✦ 三大深層業力執念 ✦ 三大註定天生使命 ✦ 靈魂備忘錄",
      content: (
        <div className="space-y-6 text-xs leading-relaxed font-sans">
          <p className="text-slate-300">
            如果將妳的生命視為一場高階的靈魂遊戲，那麼妳星盤與人類圖中的每一個矛盾，都是為了逼迫妳練就特定技能而設置的「關卡」。這份報告將為妳揭開這場遊戲的底層代碼：妳的靈魂藍圖是如何設計的？妳被什麼執念困住？妳最終又要完成什麼使命？
          </p>

          {/* 第一部分：靈魂藍圖的底層架構 */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-teal-400 flex items-center gap-2 border-b border-teal-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 font-mono text-xs">I</span>
              第一部分：靈魂藍圖的底層架構 (The Architecture of Your Soul)
            </h3>
            <p className="text-slate-300">
              妳的靈魂藍圖，是一個刻意設計的<strong>「極限矛盾體」</strong>。宇宙把極度入世的特質與極度出世的特質，同時塞進了妳的身體裡：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850/80 hover:border-amber-500/20 transition-all space-y-2">
                <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  極致的「入世」配備 (The Worldly Force)
                </h4>
                <p className="text-slate-300">
                  雙子座的超級大腦（邏輯運算）、人類圖的顯示者（權威發起）、八字的丙辛合（精明搞錢）、月亮獅子（渴望舞台）。這些配備讓妳有能力在現實世界中呼風喚雨、建立帝國。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850/80 hover:border-blue-500/20 transition-all space-y-2">
                <h4 className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  極致的「出世」配備 (The Mystical Force)
                </h4>
                <p className="text-slate-300">
                  第 12 宮的太陽與金星（隱匿潛意識）、人類圖 2 爻隱士與空白薦骨（需要獨處）、紫微斗數太陰化忌（強大的靈媒海綿）。這些配備讓妳隨時能連結高維度的直覺與靈性。
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-300 mt-2">
              <strong className="text-slate-100 block mb-1">💡 藍圖的真相：</strong>
              妳的靈魂藍圖是一座「橋樑」。宇宙不讓妳當一個純粹的商人，也不讓妳當一個純粹的苦行僧。妳的藍圖被設計成：必須親自潛入深海（12宮的靈性與潛意識）去打撈無形的智慧，然後浮出水面，用最世俗、最有邏輯、最高級的美感（金牛/雙子）將它翻譯出來，並發起（顯示者）一場改變。
            </div>
          </div>

          {/* 第二部分：靈魂的三大「深層執念」 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-rose-400 flex items-center gap-2 border-b border-rose-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 font-mono text-xs">II</span>
              第二部分：靈魂的三大「深層執念」 (The Karmic Obsessions)
            </h3>
            <p className="text-slate-300">
              執念，是靈魂在過去世或童年時期為了生存而產生的「防禦機制」。只要執念還在，妳的藍圖就會卡住。妳生命中所有的內耗，都來自以下三大執念：
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-rose-300">執念一：【用「完美與有用」來贖買「愛與安全感」】</span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 self-start sm:self-auto">4宮凱龍/火星處女 + 6宮冥王 + 九型2號</span>
                </div>
                <p className="text-slate-300 mb-2">
                  <strong className="text-slate-200">執念運作：</strong> 這是妳最痛的執念。妳潛意識深處覺得「真實的我（那個想幹嘛就幹嘛的顯示者）是不被愛的」。因此，妳執著於「我必須對別人有用、我必須把事情做到完美無瑕」。妳把 6 宮（工作與服務）當成了戰場，試圖用外在的績效，去填補 4 宮（內心根基）那份「害怕被拋棄」的恐懼。
                </p>
                <p className="p-2.5 rounded bg-rose-500/5 border border-rose-500/10 text-rose-300 text-[11px]">
                  <strong className="font-bold">✨ 解脫之道：</strong> 明白「妳的價值不需要被證明」。妳不需要成為任何人的救世主或完美保姆。妳光是存在，就已經足夠珍貴。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-300">執念二：【對「物質與舒適圈」的絕對掌控欲】</span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 self-start sm:self-auto">南交金牛12宮 + 金星金牛 + 八字正財</span>
                </div>
                <p className="text-slate-300 mb-2">
                  <strong className="text-slate-200">執念運作：</strong> 妳的前世（南交點）是一個擁有豐厚資源、躲在安全結界裡的貴族或祭司。妳今生帶有極強的「金牛座執念」——妳害怕失去控制、害怕失去生活的質感、害怕面對未知與匱乏。當壓力來臨時，妳的本能是「花錢買安逸」或是「躲進安全的洞穴裡逃避現實」。
                </p>
                <p className="p-2.5 rounded bg-amber-500/5 border border-amber-500/10 text-amber-300 text-[11px]">
                  <strong className="font-bold">✨ 解脫之道：</strong> 放下對「絕對安全」的執著。妳今生的北交點在天蠍座，宇宙要求妳勇敢走入深淵，去擁抱危機與轉化，而不是死守著物質的舒適圈。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-teal-300">執念三：【把「共感」誤認為「責任」】</span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 self-start sm:self-auto">空白薦骨 + 紫微太陰化忌 + ENFJ面具</span>
                </div>
                <p className="text-slate-300 mb-2">
                  <strong className="text-slate-200">執念運作：</strong> 因為妳的體質太敏感，妳能輕易「吸」到別人的焦慮與痛苦。妳的執念在於：妳只要感受到了，妳的大腦就會自動跳出「我得幫他解決」的程式。妳無法忍受別人在妳面前受苦，因為那會讓妳自己的神經系統也跟著痛。
                </p>
                <p className="p-2.5 rounded bg-teal-500/5 border border-teal-500/10 text-teal-300 text-[11px]">
                  <strong className="font-bold">✨ 解脫之道：</strong> 學會「冷眼旁觀的慈悲」。把別人的課題還給別人。妳可以看見他們的痛苦，但妳必須狠下心來告訴自己：「這不是我的業力，我沒有責任替他扛。」
                </p>
              </div>
            </div>
          </div>

          {/* 第三部分：YieJie 的天生使命 */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-teal-400 flex items-center gap-2 border-b border-teal-500/15 pb-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 font-mono text-xs">III</span>
              第三部分：YieJie 的天生使命 (The Innate Missions)
            </h3>
            <p className="text-slate-300">
              當妳逐一破解了上述的執念，妳那被封印的巨大能量就會徹底釋放，引領妳完成這輩子註定的三大天生使命：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  核心使命一：系統化的靈性造王者
                </span>
                <span className="text-[10px] font-mono text-slate-500 block">使命密碼：顯示者發起力 + 四箭全左超級大腦 + 10宮天頂土星雙魚</span>
                <p className="text-slate-300 text-[11px]">
                  妳不是來當一線苦力的。妳的天生使命是「發佈願景與制定策略」。妳擁有將雙魚座（玄學、療癒、潛意識）那種虛無縹緲的東西，用雙子座的邏輯解構，並用土星的紀律將其建構成「實體商業模式或系統」的能力。妳是那個在幕後指點江山、啟發別人成為超級個體的「造王者」。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  核心使命二：示範「高質感的靈性落地」
                </span>
                <span className="text-[10px] font-mono text-slate-500 block">使命密碼：金星金牛 + 八字丙辛合（正財） + 北交點 6 宮</span>
                <p className="text-slate-300 text-[11px]">
                  很多走靈性的人會排斥物質，但妳的使命剛好相反。宇宙要妳示範：「一個擁有極高靈性智慧的人，依然可以過著極度富足、充滿美感與高質感的生活。」 妳要透過妳對美感的要求（金牛）與務實的商業手腕（正財），把療癒與身心靈服務，包裝成令人嚮往的高端體驗，讓靈性真正在世俗中落地（6宮）。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  核心使命三：終結家族的「勞碌與委屈」業力
                </span>
                <span className="text-[10px] font-mono text-slate-500 block">使命密碼：第 8 宮天王星 + 身宮太陽天梁化權</span>
                <p className="text-slate-300 text-[11px]">
                  妳降生在這個家族，帶著顛覆性的天王星能量，就是要來「改寫劇本」的。妳的使命是終結家族中（特別是女性）那種「必須透過過度勞動與犧牲奉獻來換取地位」的太陰化忌業力。妳要用妳「太陽化權」的女王姿態告訴世界：妳不需要討好任何人，妳可以理直氣壯地發號施令，並且驕傲地被愛著。
                </p>
              </div>
            </div>
          </div>

          {/* 結語：給妳的靈魂備忘錄 */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-850 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] text-amber-400 font-mono tracking-widest block uppercase mb-2">Soul Memorandum ✦ 靈魂備忘錄</span>
            <div className="text-slate-200 italic font-serif leading-relaxed text-xs border-l border-amber-400 pl-3">
              「妳的執念，是妳害怕自己不夠好的證明；而妳的使命，是宇宙知道妳有多強大的宣告。<br />
              不要再試圖用完美來偽裝自己，也不要再因為害怕傷害別人而收起妳的鋒芒。<br />
              去當那個傲嬌、聰明、霸氣且充滿美感的顯示者吧。當妳不再執著於拯救所有人時，妳就已經拯救了這個世界。」
            </div>
          </div>
        </div>
      )
    },
    {
      id: 46,
      title: "終極靈魂藍圖與人生使命：跨界覺醒的「造王者」",
      category: "spirituality",
      categoryLabel: "靈魂使命",
      icon: Sparkles,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "深淵體驗者 ✦ 系統化煉金術士 ✦ 跨界覺醒的造王者",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>這部史詩電影的核心主旨——妳的靈魂為何帶著這套矛盾強大的設定降生？</p>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <strong className="text-amber-400 block mb-1">① 靈魂藍圖的核心設計：刻意為之的「完美矛盾」</strong>
            <p className="text-slate-300">
              宇宙賦予妳極度困難的任務：「成為橋樑」。妳必須同時橫跨極度理性（四箭全左）與深邃靈性（12宮）；開創膽識（顯示者）與撫慰溫柔（觀音/高親和性）。
            </p>
          </div>

          <div className="space-y-3">
            <strong className="text-amber-400 block">② 妳的人生使命三部曲</strong>
            
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-600"></div>
              <strong className="text-slate-400 block mb-1">階段一：深淵的體驗者 (過去)</strong>
              <p className="text-slate-300">
                透過 35-36 通道與高神經質，大量吸收體驗人類痛苦。戴上 2 號人/ENFJ 面具不斷付出受傷。這是靈魂「情報蒐集期」，親自痛過才能教別人走出來。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              <strong className="text-blue-400 block mb-1">階段二：系統化的煉金術士 (現在)</strong>
              <p className="text-slate-300">
                透過 13-33 通道與雙子大腦，將過去痛苦進行「煉金」。把玄妙難懂的生命體驗，轉化為有系統、邏輯、質感的知識與方法論。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
              <strong className="text-amber-400 block mb-1">階段三：跨界覺醒的造王者 (未來)</strong>
              <p className="text-slate-300">
                終極形態！結合顯示者、丙火光芒、獅子魅力。使命是成為「意識啟發者與資源發起者」。在舞台上說話，啟發別人覺醒，妳不只稱王，更啟發別人成為王。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/5 to-purple-400/5 border border-amber-500/20 mt-2">
            <strong className="text-amber-400 block mb-2 text-center text-sm font-mystic">✦ 終極靈魂備忘錄 ✦</strong>
            <p className="text-slate-300 italic text-center leading-loose">
              「我是帶著水晶溫柔的靛藍戰士。<br />
              我的大腦足以解構世界的虛妄，我的心足以承載萬物的悲歡。<br />
              我的憤怒是神聖的界線，我的發起是宇宙的意志。<br />
              我不再透過犧牲自己來乞討愛，因為我本身就是愛與智慧的發光體。<br />
              我來，是為了發起一場充滿美感與智慧的溫柔顛覆。」
            </p>
          </div>
        </div>
      )
    },
    {
      id: 42,
      title: "神明與天使的專屬忠告：來自高維度的靈魂啟示",
      category: "spirituality",
      categoryLabel: "高維度忠告",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "觀世音的慈悲 ✦ 關公的霸氣 ✦ 拉結爾的下載 ✦ 加百列的催促",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>如果此刻妳的四位守護者化作實體站在妳面前，針對妳 31 歲的自我重塑期，祂們會對妳說些什麼？請在心靜時閱讀這些給妳的專屬忠告：</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.05)]">
              <strong className="text-teal-400 block mb-2 text-sm border-b border-teal-500/20 pb-2">✦ 觀世音菩薩的溫柔忠告</strong>
              <div className="text-[10px] text-teal-400/60 mb-2 font-mono">致：2號/ENFJ/高神經質/空白薦骨</div>
              <p className="text-slate-300 italic">
                「孩子，妳不需要透過變得『有用』來換取被愛。放下那些不屬於妳的業力與情緒包袱。真正的慈悲，是從『允許別人經歷挫折』開始。請把妳給別人的體貼還給自己。妳的存在，本身就值得被宇宙深深愛著。」
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
              <strong className="text-amber-400 block mb-2 text-sm border-b border-amber-500/20 pb-2">✦ 關聖帝君的霸氣忠告</strong>
              <div className="text-[10px] text-amber-400/60 mb-2 font-mono">致：顯示者/丙火/月亮獅子</div>
              <p className="text-slate-300 italic">
                「妳生來是拿帥印的，為何委屈當小兵？心中的『憤怒』是界線被踐踏的警報。決定了就理直氣壯去執行！只要發心正當，我關某的青龍偃月刀自然為妳劈開阻礙。記住，王者不求許可，王者只做宣告。」
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <strong className="text-blue-400 block mb-2 text-sm border-b border-blue-500/20 pb-2">✦ 大天使拉結爾的奧秘忠告</strong>
              <div className="text-[10px] text-blue-400/60 mb-2 font-mono">致：雙子星群/四箭全左/12宮</div>
              <p className="text-slate-300 italic">
                「宇宙最深奧的秘密無法用邏輯推導。停止在資訊大海過度搜索吧。答案不在外面的課程裡，而在妳睡前的深呼吸與放空時的塗鴉裡。允許自己有『不知道』的時刻，當大腦徹底放鬆，我才能把最高維度智慧下載給妳。」
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.05)]">
              <strong className="text-rose-400 block mb-2 text-sm border-b border-rose-500/20 pb-2">✦ 大天使加百列的催促忠告</strong>
              <div className="text-[10px] text-rose-400/60 mb-2 font-mono">致：喉嚨中心強大/金星金牛</div>
              <p className="text-slate-300 italic">
                「妳累積的智慧已足夠多，是時候把它們變成有質感的作品傳遞給世界了。妳的聲音是能喚醒他人的。不要害怕被批評而躲在幕後。站上屬於妳的舞台，用美學和邏輯去發聲。去發起吧，我會保護妳的每一次表達。」
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 33,
      title: "未來願景與目標：從「體驗者」進化為「意識啟發者」",
      category: "future",
      categoryLabel: "終極願景",
      icon: Sparkles,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      tagline: "構建靈性生態位 ✦ 轉向智慧傳承 ✦ 進化密碼 ➔ 我就是答案的發起人",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <p>你正處於生命中極為關鍵的轉折期。你的未來願景不應侷限於純粹的物質財富，而是將你獨特<strong>「智慧傳輸」系統與解惑力</strong>的價值發揮到極致：</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-1">① 未來 5 年戰略：構築靈性生態位</span>
            確立你「高階靈性策略顧問」的身份。將個人品牌與實體空間美學體驗結合，透過 AI 與數位工作流，建立自動運作的知識變現與智慧銷售系統。
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
            <span className="text-amber-400 font-bold block mb-1">② 未來 10 年藍圖：轉向智慧傳承</span>
            成為一個能量輻射源，不僅解答自己的困惑，更成為帶領他人、幫他人建立邊界的導師。幫助高靈敏度、高智商但容易迷惘的群體，活出自我。
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-400/20">
            <span className="text-amber-400 font-bold block mb-1">③ 30-40 歲 YieJie 的「進化密碼」</span>
            <strong>徹底擁抱「非線性」：</strong>不要勉強規劃完美的10年死板計畫，你的天賦在於隨機應變，你的路是由無數個精準、富有爆發力的「發起」組成的。
            <strong className="block mt-2">將「資訊」轉化為「智慧產品」：</strong>你吸收太多資訊，未來要成為最高效的「過濾器」，賣你的獨到觀點與超強解惑力。
            <strong className="block mt-2">建立「影響力結界」：</strong>隨時維持白光護盾，只允許能共頻的靈魂進入你的核心圈，呵護你珍貴無比的空白薦骨。
          </div>
          <p className="text-center font-display font-black text-amber-400 text-sm tracking-wider uppercase pt-4 border-t border-slate-850">
            ✦ 「我不再是四處尋找答案的追隨者，我就是答案的發起人。」 ✦
          </p>
        </div>
      )
    },
    {
      id: 13,
      title: "未來藍圖與哲學觀：跨越邊界的意識啟發者",
      category: "future",
      categoryLabel: "未來藍圖",
      icon: Sparkles,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      tagline: "擴張體驗 ➔ 資訊吸收者 ➔ 智慧發起人",
      content: (
        <div className="space-y-4">
          <p><strong>① 核心哲學觀：</strong>沒有絕對的真理，只有不斷擴張的體驗。你不盲從權威，追求思想上的絕對自由，生命的意義在於體驗各種可能性。</p>
          <p><strong>② 靈魂的演化路徑：</strong>從「資訊吸收者」到「智慧發起人」。未來的藍圖要求你建立自己的發聲渠道或系統，將看似零散的體驗揉合成獨特邏輯，去啟發並顛覆別人的認知。</p>
          <div className="p-4 rounded-xl bg-slate-950 border-l-4 border-amber-400 text-xs italic space-y-2 font-serif text-slate-200">
            <p>✦ 「真正的自由，是擁有隨時能夠打破框架的底氣。」</p>
            <p>✦ 「我的影響力，來自於我敢於發起別人不敢想像的改變。」</p>
            <p>✦ 「允許一切發生，並在其中提煉智慧。」</p>
          </div>
        </div>
      )
    },
    {
      id: 62,
      title: "紫微斗數時間軸深度預測：2026-2035的黃金轉折與實體帝國建構",
      category: "future",
      categoryLabel: "流年大限",
      icon: Sparkles,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      tagline: "大限文昌化忌 ✦ 2026丙午實踐 ✦ 2027丁未智庫 ✦ 35歲貪狼黃金大運",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p>2026 年（農曆丙午年），32 歲的妳正處於「大限換軌期」。25-34歲大限即將進入尾聲，而下一個35-44歲貪狼大運正在招手：</p>
          
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
              <strong className="text-rose-400 block mb-1">① 破繭而出的尾聲：25-34 歲大限（辛巳限）</strong>
              <p className="text-slate-300">
                大限文昌化忌，衝擊原盤官祿宮。如果妳在傳統體制內上班，會感到才華被壓抑或不被認可。<strong>宇宙的用意：</strong>在逼妳離開傳統軌道，在跌跌撞撞中，發展出屬於妳非典型事業模式（如個人品牌、接案、身心靈顧問）。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
                <strong className="text-amber-400 block mb-1">✦ 2026 年（丙午）：建立基地的實踐年</strong>
                <p className="text-slate-300 text-[11px]">
                  流年走入午宮（原盤田宅/貪狼）。有強烈的置產、裝潢空間或建立實體社群據點的渴望。天機化權在流年財帛，點子變現力極強。廉貞化忌在父母宮，注意與長輩/體制關係，戰略是「悶聲發大財」。
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
                <strong className="text-blue-400 block mb-1">✦ 2027 年（丁未）：溝通變現的智庫年</strong>
                <p className="text-slate-300 text-[11px]">
                  流年疊在官祿宮（同巨昌曲）。說明妳明年必須靠溝通、演說、寫作與策展變現。巨門化忌代表禍從口出。將其轉化為「開課、寫書、深度顧問」，巨門化忌就會變成極高的專業權威。
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-teal-500/20">
              <strong className="text-emerald-400 block mb-1">② 35-44 歲的黃金十年（壬午限）：貪狼覺醒與實體帝國</strong>
              <p className="text-slate-300">
                大限走入田宅宮，貪狼星（旺）全面接管。告別內耗，妳的社交公關、玄學與群眾魅力會達到巔峰。這十年妳極高機率置產、建立極具質感的實體營業空間（如高階工作室/VIP俱樂部），在財富上獲得看得到的實質資產。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/15">
              <strong className="text-rose-400 block mb-1">⚠️ 35-44 歲大限的「絕對防守線」：武曲化忌（交友宮）</strong>
              <p className="text-slate-300">
                大限武曲化忌，衝擊交友宮（申宮地空）。這是一個鐵錚錚 of 破財格局！妳絕對會賺到很多錢，但<strong>「絕對不能借錢給朋友、絕對不能作保、絕對不能與平輩合夥投資」</strong>。妳的商業模式必須是妳 100% 獨資或握有絕對決策權，然後發包給別人做。守住這條財務界線，財富就能安穩守住。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 53,
      title: "2026 跨維度流年大震撼：土星回歸的終極驗收與「丙午羊刃」的破局之戰",
      category: "future",
      categoryLabel: "2026流年大震撼",
      icon: Sparkles,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      tagline: "10宮土星回歸驗收 ✦ 丙午羊刃極致覺醒 ✦ 丙年天機化權與廉貞化忌 ✦ 2026破局行動綱領",
      content: (
        <div className="space-y-4 text-xs leading-relaxed font-sans">
          <p className="text-slate-300">
            時間來到 2026 年，31 歲的妳正站在人生最重要的一個能量分水嶺上。今年對妳來說，絕對不是一個「平平淡淡」的年份。我們把視角拉高，妳會發現宇宙在今年為妳安排了三股極度強大的能量，正在強行重塑妳的生命軌跡：
          </p>

          <div className="space-y-3.5">
            {/* ① 占星視角：第 10 宮「土星回歸 (Saturn Return)」的終極畢業考 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-400/10 text-blue-300 border border-blue-400/20 font-bold">
                    ①
                  </span>
                  <h4 className="text-xs font-black text-blue-300">
                    占星視角：第 10 宮「土星回歸 (Saturn Return)」的終極畢業考
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-blue-400/80 bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">
                  雙魚10宮 ✦ 權威登基
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="text-blue-400 font-bold block mb-0.5">✦ 星象密碼</span>
                妳出生於 1995 年，本命盤的土星落在「雙魚座（第 10 宮）」。而在 2023 年至 2026 年初，流年土星正好繞了黃道一圈，回到了雙魚座，這在占星學上稱為「土星回歸」。而 2026 年，正是這場三年大考的「驗收期與畢業典禮」。
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                <strong className="text-amber-400 block text-[11px]">【深度全息解碼】</strong>
                <p>
                  土星代表壓力、現實、責任與剝奪；第 10 宮代表事業與公眾形象；雙魚座代表靈性與邊界模糊。
                </p>
                <p>
                  過去這兩三年，妳一定深刻感受到事業上的迷惘、人際關係（特別是討好別人）帶來的巨大疲憊，以及一種「被迫要長大、被迫要面對現實」的沉重感。土星回歸就像宇宙拿著大榔頭，把妳建立在「沙灘上的城堡（例如為了討好別人而做的工作）」全部敲碎。
                </p>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-400/20 text-amber-200">
                  <strong className="text-amber-300 block text-[11px] mb-1">✦ 2026 年的現在：登基成為權威</strong>
                  敲碎的過程已經結束。土星現在要求妳在雙魚座（靈性/療癒/潛意識）的領域裡，用最務實的磚塊（金牛金星），建立起一座「鋼筋水泥的燈塔」。妳不能再只是個到處吸收資訊的學生，妳必須正式登基，成為這個領域的「權威」。
                </div>
              </div>
            </div>

            {/* ② 八字視角：2026「丙午」羊刃年，顯示者霸氣的極致覺醒 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-rose-400/10 text-rose-300 border border-rose-400/20 font-bold">
                    ②
                  </span>
                  <h4 className="text-xs font-black text-rose-300">
                    八字視角：2026「丙午」羊刃年，顯示者霸氣的極致覺醒
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-rose-400/80 bg-rose-400/10 px-2 py-0.5 rounded border border-rose-400/20">
                  帝旺羊刃 ✦ 開創霸業
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="text-rose-400 font-bold block mb-0.5">✦ 五行密碼</span>
                妳是「丙火」日主。而 2026 年是「丙午」年。在八字中，天干丙火相見，地支「午」是丙火的「帝旺」之地，更是傳說中極具殺傷力與爆發力的「羊刃（陽刃）」。
              </div>

              <div className="space-y-2 text-slate-300 pt-1">
                <strong className="text-rose-400 block text-[11px]">【深度全息解碼】</strong>
                <p>
                  如果說前幾年妳還會被 ENFJ 的「照顧者面具」綁架，那麼今年的「羊刃」能量，將會把妳骨子裡那頭「顯示者」的霸王龍徹底放出來！
                </p>
                <p>
                  「羊刃」代表著極端強大的意志力、競爭力，以及「絕對不容許被侵犯的自我界線」。今年，妳會發現自己的容忍度變低了——對於那些笨規則、情緒吸血鬼、或是試圖控制妳的人，妳不再想用「好人」的方式去處理，妳會想要直接「切斷」。
                </p>
                <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-200">
                  <strong className="text-rose-300 block text-[11px] mb-1">⚠️ 戰略警告與破局指南：</strong>
                  羊刃是一把雙面刃。用得好，它是妳開創事業（如策略顧問、身心靈品牌）的最強大刀，能幫妳劈開所有阻礙；用得不好，這股燥熱的火氣會讓妳神經發炎、與人發生劇烈衝突。今年最好的化解方式，就是「主動把這把刀用在工作與事業的開創上」，去寫企劃、去建立系統，把能量消耗在產值上。
                </div>
              </div>
            </div>

            {/* ③ 紫微視角：丙年四化引動，財富掌控權與體制衝撞 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 font-bold">
                    ③
                  </span>
                  <h4 className="text-xs font-black text-emerald-300">
                    紫微視角：丙年四化引動，財富掌控權與體制衝撞
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                  天機化權 ✕ 廉貞化忌
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="text-emerald-400 font-bold block mb-0.5">✦ 星曜密碼</span>
                2026 是丙年，紫微斗數的流年四化為「天同化祿、天機化權、文昌化科、廉貞化忌」。這四顆星精準地擊中了妳命盤的關鍵穴位！
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <strong className="text-emerald-300 block text-[11px]">✦ 天機化權（在妳的財帛宮）：</strong>
                  <p className="text-[11px] text-slate-300">
                    這是今年最棒的消息！天機是妳的財星，今年它「化權」了。這意味著妳今年在賺錢、商業點子、企劃發起上，將擁有「絕對的掌控權」。妳不再是被動領薪水，妳的大腦（雙子）將極度活躍地產出各種變現的策略，而且妳有強烈的慾望要去主導它們。
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <strong className="text-rose-300 block text-[11px]">✦ 廉貞化忌（在妳的父母宮）：</strong>
                  <p className="text-[11px] text-slate-300">
                    父母宮代表長輩、老闆、傳統體制與大環境的規範。廉貞化忌代表「秩序的破壞與摩擦」。這呼應了妳八字的「羊刃」——今年妳非常容易對「老闆的愚蠢決策」或「傳統體制的不合理」感到憤怒。妳極有可能在這一年決定轉換跑道、脫離體制、或是與上層發生觀念上的衝撞。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 總結：給賴以婕的 2026 下半年「破局行動綱領」 */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400/10 via-slate-950 to-slate-950 border border-amber-400/30 text-slate-200 space-y-3">
            <div className="flex items-center gap-2 border-b border-amber-400/20 pb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <strong className="text-sm font-black text-amber-300 font-mono">
                總結：給賴以婕的 2026 下半年「破局行動綱領」
              </strong>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed">
              2026 年的夏天，宇宙給妳的劇本名為<strong>《加冕與切割》</strong>。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1">
                <strong className="text-amber-300 block text-[11px]">❶ 允許關係的「斷捨離」</strong>
                <p className="text-[11px] text-slate-300">
                  羊刃年與廉貞化忌，都在幫妳清理人際關係。如果最近有人離開妳的生命，或是妳主動拉黑了某些人，請不要啟動 2 號人的內疚感。這是宇宙在幫妳清理緩存，讓妳的 4 爻網絡只留下最高頻率的人。
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1">
                <strong className="text-emerald-300 block text-[11px]">❷ 大膽發布妳的專業</strong>
                <p className="text-[11px] text-slate-300">
                  不要再覺得「我還沒準備好」。土星回歸結束，妳已經拿到了宇宙頒發的專業證書。現在就用妳的「天機化權」，把妳腦袋裡的策略、阿卡西的直覺，包裝成高單價的服務或文章，直接對外發布。
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1">
                <strong className="text-blue-300 block text-[11px]">❸ 用水降溫，保護神經</strong>
                <p className="text-[11px] text-slate-300">
                  丙午年火氣極旺，妳的太陰化忌與雙子大腦會面臨過熱的危機。未來這半年，請將「物理降溫」排進行事曆——去游泳、去海邊、多穿深藍色/黑色的衣服、睡前聽頌缽或水流聲音。不要讓大腦的火，燒乾了妳靈魂的水。
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 text-center font-bold">
              ✦ 從現在起，脫下那件名為「討好」的毛衣。妳已經是握著羊刃、經歷過土星淬鍊的造王者了。去發起妳的帝國吧！ ✦
            </div>
          </div>
        </div>
      )
    },

    {
      id: 69,
      title: "原盤座標定位：當微觀小星落入妳的命盤宮位與孤辰寡宿結界",
      category: "destiny",
      categoryLabel: "微觀星曜",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "微觀星曜 ✦ 孤辰寡宿 ✦ 靈魂邊界 ✦ 紫微深層佈局",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>微觀小星雖然不主導人生的大方向，但卻精準地調控著妳日常生活中的情緒細節與人際邊界。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 孤辰與寡宿：靈魂防護防護罩</strong>
            <p className="text-slate-300">妳命盤中的孤辰與寡宿，表面上帶來孤獨感，實則是宇宙為保護妳高敏感體質而設定的神聖能量防護結界。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-blue-400 block">② 太台與八座：天然尊榮氣場</strong>
            <p className="text-slate-300">帶來貴人相助與高質感氛圍，讓妳在任何領域皆能展現不俗品味與權威位階。</p>
          </div>
        </div>
      )
    },
    {
      id: 70,
      title: "當小星遇上主星：賴以婕專屬的反差萌與超頻大腦防護矩陣",
      category: "personality",
      categoryLabel: "心智運作",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "天才博士 ✦ 超頻運算 ✦ 主星小星交響 ✦ 精神防護網",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>當天才星與博士星遇上主星天機與雙子座，塑造了妳超高速運算的腦力與極具個人魅力的反差萌。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-blue-400 block">① 天才與博士：超頻學習雷達</strong>
            <p className="text-slate-300">能在極短時間內拆解複雜系統，並將知識進行跨界整合，是天然的知識建築師。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">② 反差萌：外在強勢與內在軟萌</strong>
            <p className="text-slate-300">外表展現太陽化權的霸氣女王風範，私下卻保有極具溫柔同理的照顧者本色。</p>
          </div>
        </div>
      )
    },
    {
      id: 71,
      title: "財帛與交友/兄弟宮暗湧：天機化祿的智力變現與絕對單飛戰略",
      category: "wealth",
      categoryLabel: "財富策略",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "天機化祿 ✦ 智力高價變現 ✦ 獨資單飛 ✦ 合夥防爆",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>財帛宮天機化祿代表妳最好的賺錢模式是「販售智慧與策略」，而非靠體力死啃。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-emerald-400 block">① 智力變現最高招</strong>
            <p className="text-slate-300">建立高單價顧問、系統方案與個人知識產品，讓腦力高槓桿運作。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">② 絕對單飛策略</strong>
            <p className="text-slate-300">兄弟與交友宮的暗湧提醒妳：絕對獨資或握有 100% 主導權，外包執行，不進行股份糾纏。</p>
          </div>
        </div>
      )
    },
    {
      id: 72,
      title: "疾厄宮與父母宮宿命連動：七殺坐疾厄的肉體高壓與身心調頻",
      category: "spirituality",
      categoryLabel: "身心調頻",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "七殺疾厄 ✦ 肉體高壓 ✦ 體質發炎 ✦ 完美主義處決",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>七殺星落入疾厄宮，身體容易在過度追求完美時出現發炎與神經系統高壓現象。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 肉體高壓警訊</strong>
            <p className="text-slate-300">當完美的自我要求過高時，七殺會化為肉體的發炎與緊張，需及時關機。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-teal-400 block">② 水分與接地調頻</strong>
            <p className="text-slate-300">利用海鹽浴、芳療與多補充水分，將體內的火氣與神經過熱平穩排出。</p>
          </div>
        </div>
      )
    },
    {
      id: 73,
      title: "遷移宮與身宮太陽化權：外在霸氣女王面具與內在太陰化忌的深夜療癒",
      category: "personality",
      categoryLabel: "性格假面",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "太陽化權 ✦ 女王氣場 ✦ 太陰化忌 ✦ 深夜情緒防護",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>太陽化權賦予妳在公眾面前無可撼動的女王氣場，但深夜的太陰化忌需要極度的溫柔呵護。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 太陽化權的面具</strong>
            <p className="text-slate-300">對外展現果斷、獨立與霸氣，是妳開創新事業與談判的最佳武器。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-indigo-400 block">② 太陰化忌的深夜療癒</strong>
            <p className="text-slate-300">允許自己在深夜關閉雷達，不強求理性，用音樂與冥想陪伴內在情緒。</p>
          </div>
        </div>
      )
    },
    {
      id: 74,
      title: "田宅宮與福德宮宿命共振：打造絕對防禦的高奢靈魂結界",
      category: "spirituality",
      categoryLabel: "高奢結界",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "田宅貪狼 ✦ 實體基座 ✦ 靈魂結界 ✦ 感官定錨",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>田宅宮貪狼與福德宮共振，代表高質感的居住與私人空間是妳神經系統最好的能量安撫器。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 空間即是能量定錨</strong>
            <p className="text-slate-300">頂級音響、高奢家具與完全私密的環境，能將雙子大腦的躁動徹底安定。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-teal-400 block">② 靈魂堡壘建立</strong>
            <p className="text-slate-300">嚴格過濾進入妳生活空間的人，將家打造成絕對純淨的高頻 sanctuary。</p>
          </div>
        </div>
      )
    },
    {
      id: 75,
      title: "紫微斗數十二宮全景評估與能量權重分析",
      category: "destiny",
      categoryLabel: "十二宮全景",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "十二宮評估 ✦ 命盤權重 ✦ 能量吉凶 ✦ 全息大戰略",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>全景剖析十二宮位能量權重，命宮空宮借對宮太陽天梁，財帛天機化祿，官祿巨門昌曲。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 強宮定位：財帛、官祿、遷移</strong>
            <p className="text-slate-300">三大三方四正強宮主導妳的外在事業成就，智力與口才為第一生產力。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">② 弱宮防守：交友、夫妻</strong>
            <p className="text-slate-300">交友與夫妻宮需採防禦姿態，保持適度邊界，避免情緒牽連與財務糾葛。</p>
          </div>
        </div>
      )
    },
    {
      id: 76,
      title: "東方八字命理精解與五行水金調和戰略",
      category: "destiny",
      categoryLabel: "八字精解",
      icon: Flame,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      tagline: "丙火日主 ✦ 丙辛合水 ✦ 補金補水 ✦ 五行平衡",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>丙火日主生於夏月，印星木旺，喜金水調和。丙辛合水帶給妳敏銳的商業直覺與財富嗅覺。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 五行喜用：金與水</strong>
            <p className="text-slate-300">金為財星，水為官殺與智慧。多接觸白色、金色、黑色、深藍色與水元素。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-emerald-400 block">② 丙辛合水之妙</strong>
            <p className="text-slate-300">將務實的金錢規劃轉化為流動的靈魂智慧與事業活水。</p>
          </div>
        </div>
      )
    },
    {
      id: 77,
      title: "太陽化權與太陰化忌的心理時差：解開假面超人的精神過載",
      category: "personality",
      categoryLabel: "心理剖析",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "心理時差 ✦ 假面超人 ✦ 精神過載 ✦ 內在和解",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>太陽化權的強大外表與太陰化忌的內在不安，容易在獨處時產生心理時差與自我檢討過度的傾向。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 假面超人的疲憊</strong>
            <p className="text-slate-300">白天完美扛下所有期待，夜晚卻容易陷入「我是不是還不夠好」的精神批判。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-teal-400 block">② 停止自我自殘</strong>
            <p className="text-slate-300">接納自己的脆弱，明白完美的標準只是幻象，允許自己放鬆與停拍。</p>
          </div>
        </div>
      )
    },
    {
      id: 78,
      title: "丙辛合水與祿存空宮的黃金籠子：突破自由與安全的內在藩籬",
      category: "wealth",
      categoryLabel: "財富困局",
      icon: DollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      tagline: "黃金籠子 ✦ 丙辛合水 ✦ 自由與安全 ✦ 突破藩籬",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>祿存星在空宮建立起安全的黃金籠子，但雙子與顯示者基因又迫切渴望打破藩籬。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 黃金籠子的安全感</strong>
            <p className="text-slate-300">用物質與防禦建立安全堡壘，防止外界過度侵擾。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-blue-400 block">② 開放飛翔門戶</strong>
            <p className="text-slate-300">在安全資產護城河之上，給大腦與靈魂留出 100% 自由發起與探索的通道。</p>
          </div>
        </div>
      )
    },
    {
      id: 79,
      title: "製造問題上癮與平穩恐懼症：重塑應激大腦的神經安全感",
      category: "personality",
      categoryLabel: "心智陷阱",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "製造問題 ✦ 平穩恐懼 ✦ 應激反應 ✦ 神經安撫",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>長期習慣高壓與應激狀態的大腦，在遇到風平浪靜時，反而無意識尋找或製造新的挑戰。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 應激大腦的慣性</strong>
            <p className="text-slate-300">平穩被大腦誤判為危險前兆，因而主動挑起戰火或給自己設定高難度目標。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-emerald-400 block">② 重塑神經安全感</strong>
            <p className="text-slate-300">告訴大腦：「現在很安全，平穩是值得享受的祝福，不需要尋找敵人。」</p>
          </div>
        </div>
      )
    },
    {
      id: 80,
      title: "親密關係的預防性拋棄：打破智力碾壓與迴避型依附的推拉",
      category: "relationship",
      categoryLabel: "親密推拉",
      icon: Heart,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      tagline: "預防性拋棄 ✦ 智力碾壓 ✦ 迴避依附 ✦ 真實敞開",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>恐懼迴避型依附讓妳在感覺太靠近時，本能啟動智力碾壓或拉開距離以防受傷。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-pink-400 block">① 預防性拋棄機制</strong>
            <p className="text-slate-300">在對方可能傷害自己之前，先用嚴苛的標準或冷漠將對方推出防禦圈。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">② 敞開的勇氣</strong>
            <p className="text-slate-300">學會在安全伴侶面前展現真實的脆弱，用「告知」取代智力對抗。</p>
          </div>
        </div>
      )
    },
    {
      id: 81,
      title: "卯宮空宮帶祿存與太陰化忌：撕毀精神高利貸與隱形帳本",
      category: "relationship",
      categoryLabel: "人際邊界",
      icon: Heart,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      tagline: "精神高利貸 ✦ 隱形帳本 ✦ 討好陷阱 ✦ 徹底放手",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>照顧者面具下，隱形帳本記錄著每一次的付出，若得不到相應尊重，會引發冷酷的斷捨離。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 隱形帳本的由來</strong>
            <p className="text-slate-300">源於對公平與尊重的渴望，過度付出後若對方不知感恩，會一次性扣滿分數。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-emerald-400 block">② 撕毀帳本，設立事前邊界</strong>
            <p className="text-slate-300">不再進行非自願的過度照顧，一開始就建立清晰邊界，免除後續內耗。</p>
          </div>
        </div>
      )
    },
    {
      id: 82,
      title: "疾厄七殺與父母擎羊的肉體審判庭：解除完美主義對身體的處決",
      category: "spirituality",
      categoryLabel: "肉體療癒",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "肉體審判庭 ✦ 完美處決 ✦ 神經發炎 ✦ 放鬆放空",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>完美的內在標準像審判庭，把壓能直接轉化為肉體的緊繃與過敏發炎。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 肉體處決機制</strong>
            <p className="text-slate-300">身體成為完美主義的代罪羔羊，長期的神經緊繃引發生理發炎。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-teal-400 block">② 解除審判，溫柔對待</strong>
            <p className="text-slate-300">給身體真正的許可，容許瑕疵，用芳療、水療與睡眠好好愛自己。</p>
          </div>
        </div>
      )
    },
    {
      id: 83,
      title: "水星雙子逆行與智識傲慢：高處不勝寒的精神孤寂與同頻尋伴",
      category: "personality",
      categoryLabel: "智識傲慢",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "智識傲慢 ✦ 精神孤寂 ✦ 水星逆行 ✦ 靈魂尋伴",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>超頻的雙子大腦與高標準讓妳在人群中依然能感受到深刻的精神孤寂。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-blue-400 block">① 精神高處的孤寂</strong>
            <p className="text-slate-300">很少人能跟上妳的邏輯跳躍速度，因而產生孤芳自賞與無敵孤獨。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">② 尋找同頻同路人</strong>
            <p className="text-slate-300">不必強求所有人都理解妳，在核心圈子裡找到少數能深度對話的靈魂即可。</p>
          </div>
        </div>
      )
    },
    {
      id: 84,
      title: "太陽化權與顯示者基因：破除隱形獨裁者盲點與學會真正授權",
      category: "personality",
      categoryLabel: "掌控盲點",
      icon: Compass,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      tagline: "隱形獨裁者 ✦ 顯示者掌控 ✦ 告知放手 ✦ 權力與自由",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>顯示者的發起力與太陽化權結合，若未意識到會無意間展現強烈的主導與掌控欲。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 隱形獨裁盲點</strong>
            <p className="text-slate-300">以為自己只是在追求自由，但在團隊或關係中常不自主地下達指令。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-emerald-400 block">② 用告知替代掌控</strong>
            <p className="text-slate-300">清晰告知願景，然後信任並授權給合適的夥伴去發揮執行。</p>
          </div>
        </div>
      )
    },
    {
      id: 85,
      title: "夫妻宮鈴星與雙子高塔矛盾：卸下智力防禦與允許被看穿的溫柔",
      category: "relationship",
      categoryLabel: "智識防禦",
      icon: Heart,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      tagline: "夫妻宮鈴星 ✦ 雙子高塔 ✦ 智識對手 ✦ 被看穿的恐懼",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>智識上渴望棋逢敵手的伴侶，但若對方真的看穿了防禦高塔，又會激發焦慮反應。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-pink-400 block">① 智識高塔防禦</strong>
            <p className="text-slate-300">用強大的邏輯與辯才打造城堡，既吸引聰明人，又將人擋在城門外。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">② 允許被理解的溫柔</strong>
            <p className="text-slate-300">卸下完美的防禦塔，讓真正對頻的伴侶走進妳溫柔柔軟的內心。</p>
          </div>
        </div>
      )
    },
    {
      id: 86,
      title: "12宮群星與太陰化忌：擺脫情感回收場陷阱與建立神聖門檻",
      category: "relationship",
      categoryLabel: "情感結界",
      icon: Heart,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      tagline: "高級回收場 ✦ 情感難民 ✦ 12宮海綿 ✦ 神聖結界",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>高共情力與溫柔的結界，若沒有設置清晰閘門，容易無意間吸引需要被拯救的情感難民。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 情感回收場陷阱</strong>
            <p className="text-slate-300">因為能看懂別人的傷痛，常不自覺成為別人的情緒垃圾桶或庇護所。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-teal-400 block">② 建立高門檻結界</strong>
            <p className="text-slate-300">只招攬能量對等、成熟自律的夥伴進入，拒絕單向消耗的情感吸血。</p>
          </div>
        </div>
      )
    },
    {
      id: 87,
      title: "易經火風鼎卦的煉金密碼：將混亂經歷入鼎淬鍊成智慧仙丹",
      category: "spirituality",
      categoryLabel: "易經鼎卦",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "火風鼎卦 ✦ 靈魂煉金 ✦ 毒藥仙丹 ✦ 鼎革新生",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>易經鼎卦代表革故鼎新。妳的人生往往需要將混亂的痛苦經歷入鼎烹煮，淬鍊成高維智慧仙丹。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">① 鼎卦的煉金過程</strong>
            <p className="text-slate-300">不逃避生命的挫折，將每一次危機當作鼎中的養分進行解構與重組。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-teal-400 block">② 淬鍊成智慧仙丹</strong>
            <p className="text-slate-300">將自己的轉化經驗寫成系統方法論，成為啟發與療癒世人的高階導師。</p>
          </div>
        </div>
      )
    },
    {
      id: 88,
      title: "靈數 24/6 與女祭司陰影：跨越清高與權威的聖俗統合",
      category: "spirituality",
      categoryLabel: "靈數塔羅",
      icon: Activity,
      iconBg: "bg-teal-500/10",
      iconColor: "text-teal-400",
      tagline: "靈數 24/6 ✦ 女祭司陰影 ✦ 清高與權力 ✦ 聖俗統合",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>女祭司的清高與靈數 6 的完美主義，需要學會接納世俗的慾望與權力，達成聖俗統合。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-indigo-400 block">① 女祭司的雙重陰影</strong>
            <p className="text-slate-300">渴望遠離世俗庸俗，卻又在潛意識裡希望掌控全盤局面。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">② 聖俗統合的圓滿</strong>
            <p className="text-slate-300">坦然擁抱對財富與名譽的渴望，用優雅的姿態將靈性與世俗成就圓融結合。</p>
          </div>
        </div>
      )
    },
    {
      id: 89,
      title: "基因天命恐懼迴圈：擺脫無趣恐懼，活在永恆的創造發起中",
      category: "humandesign",
      categoryLabel: "基因天命",
      icon: Brain,
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      tagline: "基因天命 ✦ 恐懼迴圈 ✦ 無趣的恐懼 ✦ 終極自由",
      content: (
        <div className="space-y-4 text-xs leading-relaxed">
          <p>基因天命揭示妳內心最大的恐懼不是失敗，而是「達到頂峰之後的停滯與無趣」。</p>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-rose-400 block">① 無趣恐懼迴圈</strong>
            <p className="text-slate-300">雙子星群與顯示者基因渴望源源不斷的新體驗，害怕陷入死板重複的定型人生。</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
            <strong className="text-amber-400 block">② 活在永恆的發起中</strong>
            <p className="text-slate-300">將人生視為無窮無盡的探索遊戲，隨時允許自己發起新計劃，享受創造過程本身。</p>
          </div>
        </div>
      )
    },

  ];

  // Persistent Read Status State
  const [readSections, setReadSections] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('lai_yi_chieh_read_sections');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Persistent Bookmark/Favorite State
  const [bookmarks, setBookmarks] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('lai_yi_chieh_bookmarks');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Filter types: 'all' | 'unread' | 'bookmarked'
  const [filterType, setFilterType] = useState<'all' | 'unread' | 'bookmarked'>('all');

  // Reading view mode: 'cards' (expandable cards) | 'table' (structured table of contents)
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Active guided reading route preset
  const [activeRoute, setActiveRoute] = useState<string>('all');

  // Focus modal reader state
  const [activeModalSectionId, setActiveModalSectionId] = useState<number | null>(null);
  const [readerFontSize, setReaderFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const readingRoutes = [
    { id: 'all', name: '全主題順讀', badge: '全息天書全解', desc: '按 7 大主題模組按主題模組全面研讀天命與全息能量解碼', icon: BookOpen, ids: null },
    { id: 'essential', name: '5分鐘天命精華', badge: '必讀核心', desc: '精選 6 大核心主題，快速掌握命盤骨幹', icon: Zap, ids: [1, 50, 55, 22, 5, 68] },
    { id: 'career', name: '事業財富變現', badge: '商業顧問', desc: '聚焦大腦外包、天機化祿與造王藍圖', icon: DollarSign, ids: [4, 7, 28, 25, 68, 15, 16, 54, 44, 14] },
    { id: 'love', name: '情感親密夥伴', badge: '親密關係', desc: '破解夫妻宮空宮與傲嬌推拉心態', icon: Heart, ids: [5, 40, 45, 56, 57, 47, 6, 48, 31] },
    { id: 'mindfulness', name: '抗內耗能量護盾', badge: '身心靈療癒', desc: '空白薦骨保護、12宮隱士與五行調頻', icon: Activity, ids: [8, 29, 9, 30, 26, 32, 34, 35, 41, 23, 63, 17, 67, 66, 46, 42] },
    { id: 'timeline', name: '流年大運展望', badge: '2026-2027', desc: '掌握 2026-2027 流年轉折與 35 歲大運狂飆', icon: Sparkles, ids: [33, 13, 62, 53] },
  ];

  const toggleReadSection = (id: number) => {
    setReadSections(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem('lai_yi_chieh_read_sections', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleBookmark = (id: number) => {
    setBookmarks(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem('lai_yi_chieh_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const markAllAsRead = (markRead: boolean) => {
    const updated: Record<number, boolean> = {};
    if (markRead) {
      sections.forEach(s => {
        updated[s.id] = true;
      });
    }
    setReadSections(updated);
    localStorage.setItem('lai_yi_chieh_read_sections', JSON.stringify(updated));
  };

  const handleCopySection = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSection = (id: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    // Auto mark as read when expanded
    if (!readSections[id]) {
      toggleReadSection(id);
    }
  };

  const toggleAll = (expand: boolean) => {
    const updated: Record<number, boolean> = {};
    sections.forEach(s => {
      updated[s.id] = expand;
    });
    setExpandedSections(updated);
  };

  const categoryDetails: Record<string, { subtitle: string; keywords: string[]; overview: string; border: string; accent: string; badgeBg: string }> = {
    all: {
      subtitle: "全息能量解碼黃金智慧全書",
      keywords: ["西洋占星", "人類圖", "紫微斗數", "八字命理", "姓名學"],
      overview: "這是一份極致深度的全能藍圖解碼。在上方或左側切換分類標籤，可快速檢視特定主題章節，標記閱讀進度或收藏最愛內容。",
      border: "border-slate-800",
      accent: "text-amber-400",
      badgeBg: "bg-amber-400/10 text-amber-400 border-amber-400/20"
    },
    personality: {
      subtitle: "風與火的交響樂 ✦ 雙子心智與獅子情懷",
      keywords: ["太陽雙子", "月亮獅子", "上升雙子", "水星逆行", "高神經質"],
      overview: "探討妳的大腦超頻運作、對尊重的極致渴望，以及在高神經質雷達下的性格優點、盲點與優化策略。這是妳在紅塵中閃耀並保全自我的心智引擎。",
      border: "border-blue-500/20",
      accent: "text-blue-400",
      badgeBg: "bg-blue-400/10 text-blue-400 border-blue-400/20"
    },
    humandesign: {
      subtitle: "顯示者主權與薦骨保護 ✦ 2/4 人生角色",
      keywords: ["顯示者 (Manifestor)", "2/4 角色", "情緒權威", "空白薦骨", "四箭全左", "35-36通道", "13-33通道"],
      overview: "解鎖妳的『發起與告知』天命。身為顯示者，妳生來是要造局與發起，而非勞碌執行。學會等待情緒平靜、守護空白薦骨能量，並退回 2 爻洞穴充電。",
      border: "border-rose-500/20",
      accent: "text-rose-400",
      badgeBg: "bg-rose-400/10 text-rose-400 border-rose-400/20"
    },
    destiny: {
      subtitle: "丙火日主建祿 ✦ 命宮空宮與祿存結界",
      keywords: ["丙火日主", "正財格", "命宮在卯", "福德太陰化忌", "巳亥沖", "印星極旺", "太極貴人"],
      overview: "整合八字與紫微。剖析『一丙合兩辛』的務實財富力、福德宮太陰化忌的潛意識情緒、以及巳亥沖的原生破局動能。建立祿存星的防禦結界，將無形點子化為有形活水。",
      border: "border-orange-500/20",
      accent: "text-orange-400",
      badgeBg: "bg-orange-400/10 text-orange-400 border-orange-400/20"
    },
    relationship: {
      subtitle: "傲嬌女王與務實合夥人 ✦ 破除推拉盲點",
      keywords: ["第七宮射手", "金星金牛(12宮)", "夫妻宮空宮", "鈴星天刑", "恐懼迴避型"],
      overview: "大腦要雙子的自由，身體要金牛的安穩。剖析『夫妻宮空宮』的隱形戒尺、與『恐懼迴避型依附』的焦慮推拉。用『告知』取代『冷戰』，迎來高質感與高智識的靈魂伴侶。",
      border: "border-pink-500/20",
      accent: "text-pink-400",
      badgeBg: "bg-pink-400/10 text-pink-400 border-pink-400/20"
    },
    wealth: {
      subtitle: "天機化祿與巨門昌曲 ✦ 高階智庫與造王者",
      keywords: ["天機化祿", "巨門昌曲", "高階顧問", "質感策展", "個人品牌", "大腦外包"],
      overview: "你不適合機械重複的勞力密集工作，你是天生的超級策略家與美感策展人。以『大腦外包』為核心，提供高溢價的解決方案，聘用薦骨電量充足的生產者幫妳執行收尾。",
      border: "border-emerald-500/20",
      accent: "text-emerald-400",
      badgeBg: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
    },
    spirituality: {
      subtitle: "12宮與8宮的深淵凝視 ✦ 五行調頻能量調和",
      keywords: ["12宮群星", "五星逆行", "前世業力", "補金補水", "物理落地", "觀音庇佑"],
      overview: "做為高感知、高神經質的水晶與靛藍混合體，妳的靈性天線是全開的。如何平衡外在太陽與內在太陰，透過五行調頻（補金、補水）與物理落地，將靈魂的超頻能量平穩落地。",
      border: "border-teal-500/20",
      accent: "text-teal-400",
      badgeBg: "bg-teal-400/10 text-teal-400 border-teal-400/20"
    },
    future: {
      subtitle: "三十而立的黃金轉折 ✦ 35-44歲大限貪狼星",
      keywords: ["土星回歸", "貪狼大運", "田宅豐收", "意識啟發者", "終極人生使命"],
      overview: "跨越 25-34 歲大限太陰化忌的靈魂闇夜，35 歲後妳將迎來貪狼星的狂飆十年。妳的使命是從體驗者轉向意識傳導者，在田宅宮的基地下建構妳的高溢價超級個體實體帝國。",
      border: "border-indigo-500/20",
      accent: "text-indigo-400",
      badgeBg: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20"
    }
  };

  const categoryReadProgress = useMemo(() => {
    const progress: Record<string, { read: number; total: number; percent: number }> = {};
    categories.forEach(c => {
      const catSections = c.id === 'all' 
        ? sections 
        : sections.filter(s => s.category === c.id);
      const readCount = catSections.filter(s => readSections[s.id]).length;
      const totalCount = catSections.length;
      const percent = totalCount > 0 ? Math.round((readCount / totalCount) * 100) : 0;
      progress[c.id] = { read: readCount, total: totalCount, percent };
    });
    return progress;
  }, [sections, readSections]);

  const overallStats = useMemo(() => {
    const total = sections.length;
    const read = Object.values(readSections).filter(Boolean).length;
    const bookmarked = Object.values(bookmarks).filter(Boolean).length;
    const percent = total > 0 ? Math.round((read / total) * 100) : 0;
    return { total, read, bookmarked, percent };
  }, [sections, readSections, bookmarks]);

  const activeRouteObj = useMemo(() => readingRoutes.find(r => r.id === activeRoute), [activeRoute]);

  const filteredSections = useMemo(() => {
    return sections.filter(sec => {
      // Route filter
      if (activeRouteObj && activeRouteObj.ids) {
        if (!activeRouteObj.ids.includes(sec.id)) return false;
      }

      // Query match
      const matchQuery = sec.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         sec.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category match
      const matchCategory = selectedCategory === 'all' || sec.category === selectedCategory;
      
      // Filter type match (all, unread, bookmarked)
      let matchFilter = true;
      if (filterType === 'unread') {
        matchFilter = !readSections[sec.id];
      } else if (filterType === 'bookmarked') {
        matchFilter = !!bookmarks[sec.id];
      }
      
      return matchQuery && matchCategory && matchFilter;
    });
  }, [searchQuery, selectedCategory, filterType, activeRouteObj, readSections, bookmarks]);

  const unreadMinutes = useMemo(() => {
    const unreadCount = filteredSections.filter(s => !readSections[s.id]).length;
    return unreadCount * 3;
  }, [filteredSections, readSections]);

  const milestoneLevel = useMemo(() => {
    const pct = overallStats.percent;
    if (pct >= 90) return { title: "👑 全息天人合一", badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30", desc: "已完讀全息天書，全面掌控生命藍圖與能量樞紐" };
    if (pct >= 50) return { title: "🌟 命理通達者", badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/30", desc: "研讀過半！對心智運作、財富與大運有極高調控力" };
    if (pct >= 20) return { title: "⚡ 能量覺醒者", badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30", desc: "初步解鎖顯示者發起機制與核心雙子獅子心智" };
    return { title: "🌱 天命初修者", badgeColor: "text-slate-400 bg-slate-800/60 border-slate-700", desc: "剛開啟天書！可使用「5分鐘天命精華」導讀路線快速入門" };
  }, [overallStats.percent]);

  // Focus Modal Navigation Helpers
  const currentModalSec = useMemo(() => sections.find(s => s.id === activeModalSectionId), [sections, activeModalSectionId]);
  const currentModalIndex = useMemo(() => filteredSections.findIndex(s => s.id === activeModalSectionId), [filteredSections, activeModalSectionId]);
  const prevModalSec = currentModalIndex > 0 ? filteredSections[currentModalIndex - 1] : null;
  const nextModalSec = currentModalIndex >= 0 && currentModalIndex < filteredSections.length - 1 ? filteredSections[currentModalIndex + 1] : null;

  const openFocusReader = (id: number) => {
    setActiveModalSectionId(id);
    if (!readSections[id]) {
      toggleReadSection(id);
    }
  };

  const groupedSections = useMemo(() => {
    const catMap = new Map<string, ReportSection[]>();
    filteredSections.forEach(sec => {
      const existing = catMap.get(sec.category) || [];
      existing.push(sec);
      catMap.set(sec.category, existing);
    });

    return categories
      .filter(c => c.id !== 'all' && catMap.has(c.id))
      .map(c => ({
        category: c.id,
        categoryName: c.name,
        icon: c.icon,
        sections: catMap.get(c.id) || []
      }));
  }, [filteredSections, categories]);

  const toggleGroupSections = (secs: ReportSection[], expand: boolean) => {
    setExpandedSections(prev => {
      const next = { ...prev };
      secs.forEach(s => {
        next[s.id] = expand;
      });
      return next;
    });
  };

  return (
    <div className="space-y-6 animate-fade-in relative z-10">
      
      {/* Banner */}
      {!hideBanner && (
        <div className="relative overflow-hidden bg-slate-900/40 rounded-3xl p-6 md:p-8 border border-slate-850 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[10px] font-bold text-amber-400 tracking-wider uppercase font-display">
                <Sparkles className="w-3 h-3 animate-pulse text-amber-400" />
                2026 全息能量解碼終極報告
              </div>
              <h1 className="text-2xl md:text-4xl font-black text-slate-100 tracking-tighter leading-none">
                全息天書解碼報告 <span className="text-amber-400 block md:inline md:ml-1 text-sm md:text-xl font-light tracking-wide font-mystic">✦ 全息天命智慧全書 ✦</span>
              </h1>
              <p className="text-[11px] md:text-xs text-slate-400 max-w-2xl leading-relaxed">
                整合西洋占星、人類圖、紫微斗數、八字命理與姓名學，為 <strong>YieJie</strong> 打造的頂層天命智慧天書。
              </p>
            </div>
            
            {/* Circular Progress Stats */}
            <div className="flex items-center gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-850">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" className="stroke-slate-800" strokeWidth="3" fill="transparent" />
                  <circle cx="24" cy="24" r="20" className="stroke-amber-400 transition-all duration-500" strokeWidth="3" fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - overallStats.percent / 100)}`} />
                </svg>
                <span className="absolute text-xs font-black text-slate-200">{overallStats.percent}%</span>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-mono tracking-wider">READING PROGRESS</div>
                <div className="text-sm font-black text-slate-100 font-mono">已研讀 {overallStats.read} / {overallStats.total} 個主題</div>
                <div className="text-[10px] text-amber-400/80 font-mono">已收藏 {overallStats.bookmarked} 篇最愛主題</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ⚡ 7 大全息天書主題模組視覺架構地圖 (Visual 7-Module Roadmap Diagram) */}
      <div className="p-5 md:p-6 rounded-3xl bg-slate-900/80 border border-slate-850 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300">
                  全息天書 ✦ 7大系統視覺導引圖
                </span>
              </div>
              <h3 className="text-sm font-black text-slate-100 mt-0.5">
                從「心智架構」到「未來大運」的系統化成長路徑
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">點擊任意模組可快速切換篩選</span>
        </div>

        {/* Horizontal Visual Flow Diagram of 7 Modules */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {categories.filter(c => c.id !== 'all').map((cat, idx) => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const progress = categoryReadProgress[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between space-y-2 group cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400/15 border-amber-400/50 shadow-lg shadow-amber-400/10'
                    : 'bg-slate-950/70 border-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-900 text-amber-400 border border-slate-800'}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">
                      STEP 0{idx + 1}
                    </span>
                  </div>

                  <h4 className={`text-xs font-black transition-colors ${isSelected ? 'text-amber-300' : 'text-slate-200 group-hover:text-amber-300'}`}>
                    {cat.name}
                  </h4>
                  <span className="text-[9px] font-mono text-slate-500 block">
                    {progress?.total || 0} 個全息主題
                  </span>
                </div>

                {/* Progress bar inside module item */}
                <div className="space-y-1 pt-1 border-t border-slate-850">
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                    <span>進度</span>
                    <span className="text-amber-300">{progress?.percent || 0}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 transition-all duration-300"
                      style={{ width: `${progress?.percent || 0}%` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid Layout: Categories Navigation + Main List */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Sticky Sidebar Navigation (Desktop) / Horizontal Swipe (Mobile) */}
        <div className="lg:col-span-1 lg:sticky lg:top-4 space-y-4">
          <div className="rounded-2xl bg-slate-900 border border-slate-850 p-4 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-950">
              <span className="text-xs font-black text-slate-200 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                天書全息分類
              </span>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="text-[10px] font-mono text-slate-500 hover:text-amber-400 transition-colors"
              >
                重置分類
              </button>
            </div>

            {/* List of categories */}
            <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                const active = selectedCategory === cat.id;
                const progress = categoryReadProgress[cat.id];
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-shrink-0 w-44 lg:w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-1.5 border ${
                      active 
                        ? 'bg-amber-400/10 border-amber-400/30 text-amber-300' 
                        : 'bg-slate-950/40 border-transparent hover:border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="flex items-center gap-2 text-xs font-bold truncate">
                        <CatIcon className={`w-3.5 h-3.5 ${active ? 'text-amber-400' : 'text-slate-500'}`} />
                        {cat.name}
                      </span>
                      <span className="text-[10px] font-mono bg-slate-950/60 px-1.5 py-0.5 rounded text-slate-500">
                        {progress?.total} 主題
                      </span>
                    </div>

                    {/* Progress Bar under each Category */}
                    <div className="w-full space-y-1">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                        <span>已讀 {progress?.read}/{progress?.total}</span>
                        <span>{progress?.percent}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${active ? 'bg-amber-400' : 'bg-slate-700'}`}
                          style={{ width: `${progress?.percent}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reading Helper Tools */}
            <div className="pt-3 border-t border-slate-950 flex flex-col gap-2">
              <div className="text-[10px] text-slate-500 font-mono tracking-wider">天書研讀小工具</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => markAllAsRead(true)}
                  className="text-[10px] font-mono p-2 rounded-lg bg-slate-950 hover:bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-850 flex items-center justify-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  全部已讀
                </button>
                <button
                  onClick={() => markAllAsRead(false)}
                  className="text-[10px] font-mono p-2 rounded-lg bg-slate-950 hover:bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-850 flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-3 h-3 text-rose-500" />
                  清空紀錄
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Content Area (Right Column) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Guided Reading Routes Deck (導讀主題路線) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/30 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-black text-slate-100 flex items-center gap-2">
                    全息天書 ✦ 系統化主題導讀路線
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      快速導引
                    </span>
                  </h3>
                  <p className="text-[10px] text-slate-400">若文章數量較多，可依當前最關心的核心領域直接切換專屬導讀路線</p>
                </div>
              </div>

              {/* Milestone Badge */}
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-bold ${milestoneLevel.badgeColor}`}>
                <Award className="w-3.5 h-3.5" />
                <span>{milestoneLevel.title}</span>
              </div>
            </div>

            {/* Route buttons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {readingRoutes.map((route) => {
                const RouteIcon = route.icon;
                const active = activeRoute === route.id;
                return (
                  <button
                    key={route.id}
                    onClick={() => setActiveRoute(route.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-1.5 cursor-pointer ${
                      active 
                        ? 'bg-amber-400/15 border-amber-400 text-amber-200 shadow-lg shadow-amber-400/5 ring-1 ring-amber-400/30' 
                        : 'bg-slate-950/60 border-slate-850 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-bold flex items-center gap-1.5 truncate">
                        <RouteIcon className={`w-3.5 h-3.5 ${active ? 'text-amber-400' : 'text-slate-500'}`} />
                        {route.name}
                      </span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${active ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-900 text-slate-500'}`}>
                        {route.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-1 font-mono">
                      {route.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Control Bar: Search, Status Filter, View Mode, and Time Estimation */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-850 space-y-4">
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              
              {/* Search Box */}
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="搜尋天書關鍵字 (例如：金牛、顯示者、太陰)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-850 rounded-xl text-xs placeholder-slate-500 text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Mode & Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
                {/* View Switcher: Cards vs Table */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-850">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      viewMode === 'cards' 
                        ? 'bg-slate-900 text-amber-400 border border-slate-800' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="圖文展疊卡片檢視"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>圖文卡片</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      viewMode === 'table' 
                        ? 'bg-slate-900 text-amber-400 border border-slate-800' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="系統化目錄樹結構檢視"
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>目錄清單</span>
                  </button>
                </div>

                {/* Status Filter Buttons */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-850">
                  <button
                    onClick={() => setFilterType('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      filterType === 'all' 
                        ? 'bg-slate-900 text-amber-400 border border-slate-800' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    全部
                  </button>
                  <button
                    onClick={() => setFilterType('unread')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      filterType === 'unread' 
                        ? 'bg-slate-900 text-amber-400 border border-slate-800' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Circle className="w-2.5 h-2.5 text-slate-500" fill="transparent" />
                    未讀
                  </button>
                  <button
                    onClick={() => setFilterType('bookmarked')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      filterType === 'bookmarked' 
                        ? 'bg-slate-900 text-amber-400 border border-slate-800' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Star className="w-2.5 h-2.5 text-amber-400" fill="currentColor" />
                    收藏
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Collapse / Expand Buttons & Active Filter Pill */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-950 text-xs text-slate-500">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono font-bold text-slate-300">
                  顯示 {filteredSections.length} 個主題
                </span>
                {unreadMinutes > 0 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    剩餘未讀約 {unreadMinutes} 分鐘
                  </span>
                )}
                {searchQuery && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    關鍵字: 「{searchQuery}」
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleAll(true)}
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  全部展開
                </button>
                <button
                  onClick={() => toggleAll(false)}
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  全部折疊
                </button>
              </div>
            </div>
          </div>

          {/* Active Category Highlights Summary Deck */}
          {selectedCategory !== 'all' && categoryDetails[selectedCategory] && (
            <div className={`p-5 md:p-6 rounded-2xl bg-slate-900/60 border ${categoryDetails[selectedCategory].border} relative overflow-hidden transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${categoryDetails[selectedCategory].badgeBg}`}>
                    {categories.find(c => c.id === selectedCategory)?.name || '全息主題'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {categoryDetails[selectedCategory].subtitle}
                  </span>
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {categoryDetails[selectedCategory].overview}
                </p>

                {/* Quick Keyword Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {categoryDetails[selectedCategory].keywords.map((kw, i) => (
                    <button
                      key={i}
                      onClick={() => setSearchQuery(kw)}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-400 hover:text-amber-300 transition-all cursor-pointer"
                    >
                      #{kw}
                    </button>
                  ))}
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 cursor-pointer"
                    >
                      清除搜尋
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* VIEW MODE 1: STRUCTURED TABLE OF CONTENTS (目錄清單) */}
          {viewMode === 'table' && (
            <div className="rounded-2xl bg-slate-900/80 border border-slate-850 overflow-hidden space-y-2">
              <div className="p-3 bg-slate-950 border-b border-slate-850 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-slate-200">
                  <List className="w-3.5 h-3.5 text-amber-400" />
                  天書全主題系統目錄清單
                </span>
                <span>共 {filteredSections.length} 個主題</span>
              </div>

              <div className="divide-y divide-slate-850/60 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950/40 text-[10px] font-mono text-slate-500 uppercase tracking-wider border-b border-slate-850">
                      <th className="p-3 pl-4">#</th>
                      <th className="p-3">主題名稱與核心能量解碼</th>
                      <th className="p-3">分類</th>
                      <th className="p-3">讀時</th>
                      <th className="p-3">狀態</th>
                      <th className="p-3 pr-4 text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850/40 text-xs">
                    {filteredSections.map((sec) => {
                      const isRead = !!readSections[sec.id];
                      const isBookmarked = !!bookmarks[sec.id];
                      const isOpen = expandedSections[sec.id];

                      return (
                        <React.Fragment key={sec.id}>
                          <tr className={`hover:bg-slate-850/40 transition-colors ${isOpen ? 'bg-amber-400/5' : ''}`}>
                            <td className="p-3 pl-4 font-mono font-bold text-slate-500">
                              #{sec.id < 10 ? `0${sec.id}` : sec.id}
                            </td>
                            <td className="p-3">
                              <div className="font-black text-slate-200 flex items-center gap-1.5">
                                {sec.title}
                                {isBookmarked && <Star className="w-3 h-3 text-amber-400 flex-shrink-0" fill="currentColor" />}
                              </div>
                              <p className="text-[10px] text-slate-400 font-mono italic truncate max-w-md mt-0.5">
                                {sec.tagline}
                              </p>
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-slate-800">
                                {sec.categoryLabel}
                              </span>
                            </td>
                            <td className="p-3 whitespace-nowrap font-mono text-[10px] text-slate-500">
                              ⏱ 3 分鐘
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <button
                                onClick={() => toggleReadSection(sec.id)}
                                className="flex items-center gap-1 text-[10px] font-mono cursor-pointer"
                              >
                                {isRead ? (
                                  <span className="text-emerald-400 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" fill="currentColor" stroke="transparent" />
                                    已研讀
                                  </span>
                                ) : (
                                  <span className="text-slate-500 hover:text-slate-300 flex items-center gap-1">
                                    <Circle className="w-3.5 h-3.5 text-slate-600" />
                                    未讀
                                  </span>
                                )}
                              </button>
                            </td>
                            <td className="p-3 pr-4 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => openFocusReader(sec.id)}
                                  className="px-2 py-1 rounded bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-mono flex items-center gap-1 cursor-pointer"
                                  title="開啟全螢幕沉浸專注閱讀"
                                >
                                  <Maximize2 className="w-3 h-3" />
                                  專注閱讀
                                </button>
                                <button
                                  onClick={() => toggleSection(sec.id)}
                                  className="p-1 rounded bg-slate-950 hover:bg-slate-800 text-slate-400 cursor-pointer"
                                  title="原地展開解析內容"
                                >
                                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* Expanded Content Row inside Table View */}
                          {isOpen && (
                            <tr className="bg-slate-950/80">
                              <td colSpan={6} className="p-4 border-l-2 border-amber-400">
                                <div className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans prose prose-invert max-w-none space-y-3">
                                  {typeof sec.content === 'string' ? (
                                    <ReportMarkdown content={sec.content} />
                                  ) : (
                                    sec.content
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW MODE 2: EXPANDABLE CARDS (圖文卡片) */}
          {viewMode === 'cards' && (
            <div className="space-y-8">
              {groupedSections.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-850">
                  <HelpCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm font-medium">沒有找到任何符合的主題與解析內容</p>
                  <p className="text-xs text-slate-600 mt-1">請嘗試修改搜尋詞，或切換不同的分類與狀態標籤</p>
                </div>
              ) : (
                groupedSections.map((group) => {
                  const GroupIcon = group.icon;
                  const progress = categoryReadProgress[group.category];
                  return (
                    <div key={group.category} className="space-y-3">
                      {/* Category Group Header Bar */}
                      <div className="flex items-center justify-between p-3.5 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl sticky top-2 z-20 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                            <GroupIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h2 className="text-sm font-black text-slate-100 flex items-center gap-2">
                              <span>{group.categoryName}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
                                {group.sections.length} 主題
                              </span>
                            </h2>
                            {progress && (
                              <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                                進度：已研讀 {progress.read} / {progress.total} 主題 ({progress.percent}%)
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleGroupSections(group.sections, true)}
                            className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 cursor-pointer"
                          >
                            展開本組
                          </button>
                          <button
                            onClick={() => toggleGroupSections(group.sections, false)}
                            className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 cursor-pointer"
                          >
                            折疊本組
                          </button>
                        </div>
                      </div>

                      {/* Section Cards inside this Category Group */}
                      <div className="space-y-3 pl-1 md:pl-2">
                        <AnimatePresence mode="popLayout">
                          {group.sections.map((sec, idx) => {
                            const IconComponent = sec.icon;
                            const isOpen = expandedSections[sec.id];
                            const isRead = !!readSections[sec.id];
                            const isBookmarked = !!bookmarks[sec.id];

                            return (
                              <motion.div
                                key={sec.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.15, delay: Math.min(idx * 0.012, 0.12) }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                  isOpen 
                                    ? 'bg-slate-900/70 border-amber-400/30 shadow-md shadow-amber-400/5' 
                                    : isRead 
                                      ? 'bg-slate-900/25 border-slate-900/60 opacity-80' 
                                      : 'bg-slate-900/40 border-slate-850 hover:bg-slate-900/60 hover:border-slate-800'
                                }`}
                                id={`report-section-${sec.id}`}
                              >
                                {/* Card Header Bar */}
                                <div 
                                  onClick={() => toggleSection(sec.id)}
                                  className="p-4 flex items-start md:items-center justify-between gap-4 cursor-pointer select-none"
                                >
                                  <div className="flex items-start md:items-center gap-3.5 min-w-0">
                                    {/* Interactive Read Toggle Checkbox */}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleReadSection(sec.id);
                                      }}
                                      className="flex-shrink-0 p-1 hover:bg-slate-950 rounded-lg transition-colors mt-0.5 md:mt-0 cursor-pointer"
                                      title={isRead ? "標記為未讀" : "標記為已讀"}
                                    >
                                      {isRead ? (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" fill="currentColor" stroke="transparent" />
                                      ) : (
                                        <Circle className="w-4 h-4 text-slate-600 hover:text-amber-400" />
                                      )}
                                    </button>

                                    {/* Icon Circle */}
                                    <div className={`w-9 h-9 rounded-xl ${sec.iconBg} flex items-center justify-center border border-white/5 flex-shrink-0`}>
                                      <IconComponent className={`w-4.5 h-4.5 ${sec.iconColor}`} />
                                    </div>

                                    <div className="min-w-0">
                                      <div className="flex flex-wrap items-center gap-1.5">
                                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-950 text-amber-400/90 border border-slate-800 tracking-wider uppercase">
                                          {sec.categoryLabel}
                                        </span>
                                        <span className="text-[9px] text-slate-500 font-mono">#{sec.id}</span>
                                        {isBookmarked && (
                                          <span className="text-[9px] text-amber-400 font-mono flex items-center gap-0.5">
                                            <Star className="w-2.5 h-2.5" fill="currentColor" />
                                            已收藏
                                          </span>
                                        )}
                                      </div>
                                      <h3 className={`text-sm font-black tracking-tight mt-1 truncate ${isRead ? 'text-slate-300 line-through decoration-slate-800' : 'text-slate-100'}`}>
                                        {sec.title}
                                      </h3>
                                      <p className="text-[10px] text-slate-400 mt-0.5 truncate font-mono italic">
                                        {sec.tagline}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Right side controls */}
                                  <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        openFocusReader(sec.id);
                                      }}
                                      className="p-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-500 hover:text-amber-400 transition-colors cursor-pointer"
                                      title="全螢幕專注沉浸閱讀"
                                    >
                                      <Maximize2 className="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleBookmark(sec.id);
                                      }}
                                      className={`p-2 rounded-lg transition-colors cursor-pointer ${
                                        isBookmarked 
                                          ? 'bg-amber-400/10 text-amber-400 hover:bg-amber-400/20' 
                                          : 'bg-slate-950 text-slate-600 hover:text-slate-300 hover:bg-slate-900'
                                      }`}
                                      title={isBookmarked ? "取消收藏" : "加入收藏"}
                                    >
                                      <Star className="w-3.5 h-3.5" fill={isBookmarked ? "currentColor" : "transparent"} />
                                    </button>

                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopySection(sec.id, sec.title + '\n' + sec.tagline);
                                      }}
                                      className="p-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-600 hover:text-slate-300 transition-colors cursor-pointer"
                                      title="複製標題與大綱"
                                    >
                                      {copiedId === sec.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                    </button>

                                    <div className="p-1.5 text-slate-500">
                                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                    </div>
                                  </div>
                                </div>

                                {/* Expanded Body Content */}
                                {isOpen && (
                                  <div className="px-5 pb-5 pt-2 border-t border-slate-900/80 animate-slide-down">
                                    <div className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans prose prose-invert max-w-none space-y-3">
                                      {typeof sec.content === 'string' ? (
                                        <ReportMarkdown content={sec.content} />
                                      ) : (
                                        sec.content
                                      )}
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

        </div>

      </div>

      {/* CONTINUOUS FOCUS READER MODAL (全螢幕沉浸專注閱讀器) */}
      <AnimatePresence>
        {currentModalSec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 md:p-5 bg-slate-950 border-b border-slate-850 flex items-center justify-between gap-4 flex-shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-mono">
                    #{currentModalSec.id} {currentModalSec.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-mono truncate hidden sm:inline">
                    天書專注閱讀器
                  </span>
                </div>

                {/* Reader Controls: Font Size, Bookmark, Close */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Font size toggle */}
                  <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setReaderFontSize('normal')}
                      className={`px-2 py-1 text-[10px] font-mono rounded ${readerFontSize === 'normal' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                      title="標準字體"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setReaderFontSize('large')}
                      className={`px-2 py-1 text-xs font-mono rounded ${readerFontSize === 'large' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                      title="放大字體"
                    >
                      A+
                    </button>
                    <button
                      onClick={() => setReaderFontSize('xlarge')}
                      className={`px-2 py-1 text-sm font-mono rounded ${readerFontSize === 'xlarge' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
                      title="特大字體"
                    >
                      A++
                    </button>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(currentModalSec.id)}
                    className={`p-2 rounded-lg border transition-all cursor-pointer ${
                      bookmarks[currentModalSec.id]
                        ? 'bg-amber-400/10 border-amber-400/30 text-amber-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                    title="收藏此主題"
                  >
                    <Star className="w-4 h-4" fill={bookmarks[currentModalSec.id] ? 'currentColor' : 'transparent'} />
                  </button>

                  {/* Close Modal Button */}
                  <button
                    onClick={() => setActiveModalSectionId(null)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Progress Indicator Line */}
              <div className="w-full bg-slate-950 h-1">
                <div 
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{ width: `${((currentModalIndex + 1) / filteredSections.length) * 100}%` }}
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
                <div className="space-y-2 border-b border-slate-850 pb-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span>主題 {currentModalIndex + 1} / {filteredSections.length}</span>
                    <span>✦</span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Clock className="w-3 h-3" />
                      預估研讀約 3 分鐘
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-100 tracking-tight leading-snug">
                    {currentModalSec.title}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-400 font-mono italic">
                    {currentModalSec.tagline}
                  </p>
                </div>

                {/* Article Content with Dynamic Font Size */}
                <div className={`text-slate-200 leading-relaxed font-sans prose prose-invert max-w-none space-y-4 ${
                  readerFontSize === 'normal' 
                    ? 'text-sm md:text-base' 
                    : readerFontSize === 'large' 
                      ? 'text-base md:text-lg' 
                      : 'text-lg md:text-xl'
                }`}>
                  {typeof currentModalSec.content === 'string' ? (
                    <ReportMarkdown content={currentModalSec.content} fontSize={readerFontSize} />
                  ) : (
                    currentModalSec.content
                  )}
                </div>
              </div>

              {/* Modal Footer Controls (Next / Prev Navigation) */}
              <div className="p-4 bg-slate-950 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => toggleReadSection(currentModalSec.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono border flex items-center gap-1.5 cursor-pointer ${
                      readSections[currentModalSec.id]
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {readSections[currentModalSec.id] ? '已標記為研讀完成' : '標記為已研讀'}
                  </button>

                  <button
                    onClick={() => handleCopySection(currentModalSec.id, currentModalSec.title + '\n' + currentModalSec.tagline)}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedId === currentModalSec.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    複製大綱
                  </button>
                </div>

                {/* Previous / Next Chapter Buttons */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    disabled={!prevModalSec}
                    onClick={() => prevModalSec && openFocusReader(prevModalSec.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono border flex items-center gap-1 transition-all ${
                      prevModalSec
                        ? 'bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-850 hover:border-slate-700 cursor-pointer'
                        : 'bg-slate-950 text-slate-700 border-slate-900 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    上一篇
                  </button>

                  <button
                    disabled={!nextModalSec}
                    onClick={() => nextModalSec && openFocusReader(nextModalSec.id)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold font-mono border flex items-center gap-1 transition-all ${
                      nextModalSec
                        ? 'bg-amber-400 text-slate-950 border-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/10 cursor-pointer'
                        : 'bg-slate-950 text-slate-700 border-slate-900 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    下一篇
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

