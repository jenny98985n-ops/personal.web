import React, { useState, useEffect } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { 
  Sparkles, Brain, Flame, Zap, CheckCircle2, AlertCircle, 
  Compass, Heart, DollarSign, Activity, Eye, Shield, Award, HelpCircle,
  RefreshCw, Shuffle, Crown, TrendingUp, Users, ArrowRight,
  Sliders, Gauge, BarChart3, PieChart, Info, ChevronDown, ChevronUp,
  Maximize2, X, ExternalLink, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import EnergyQuoteWidget from './EnergyQuoteWidget';

export interface HolographicCardItem {
  id: string;
  systemTag: string;
  groupTitle: string;
  title: string;
  tags: string[];
  icon: React.ElementType;
  themeColor: 'amber' | 'rose' | 'teal' | 'emerald' | 'blue' | 'indigo' | 'pink';
  summary: string;
  spiritualInsight: string;
  coreBreakdown: { label: string; text: string }[];
  actionAdvice: string;
  targetTab: string;
}

const HOLOGRAPHIC_CARDS: HolographicCardItem[] = [
  // Group 1: 天賦核心
  {
    id: 'astrology',
    systemTag: '西洋占星',
    groupTitle: '維度一 ✦ 天賦核心',
    title: '太陽與上升雙子 ✕ 月亮獅子 3 宮',
    tags: ['超級神經網絡', '12宮隱秘天賦', '表達造王者'],
    icon: Compass,
    themeColor: 'amber',
    summary: '雙子星群賦予極速學習與超頻邏輯，月亮獅子 3 宮擁有強烈的表達熱情與造王者氣場。',
    spiritualInsight: `雙子座太陽與上升組合構成了 YieJie 極速運算、無限吸收資訊的高維神經網絡。大腦如同一台超頻運作的量子電腦，能輕鬆拆解複雜系統並完成跨領域的逆向工程。

然而，這層看似機智靈動的外衣下，包裹著月亮獅子座在 3 宮的強烈光芒——妳的內心渴望透過高質感的表達與創造，成為眾人矚目的「靈性造王者」。同時，12 宮星體連線讓妳擁有極其特殊的潛意識靈感雷達，能在平靜中感應宇宙場域的細微震動。妳的理智並非冷酷，而是將深邃的靈性直覺轉化為精準無懈的語言。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '雙子超頻神經網絡 ✕ 3宮月亮獅子的語言震撼力與啟發氣場' },
      { label: '✦ 陰影機制', text: '大腦資訊過載引發的神經焦慮，與 12 宮海綿體質吸收外界濁氣' },
      { label: '✦ 高階破局', text: '建立明確心理結界，將 12 宮直覺轉化為 3 宮精準輸出，不干涉他人業力' }
    ],
    actionAdvice: '定期實施「文字與語音排毒」，將大腦中的靈光寫成專欄或卡片，並搭配雪松香氛淨化頭部能量場。',
    targetTab: 'astrology'
  },
  {
    id: 'hd_core',
    systemTag: '人類圖',
    groupTitle: '維度一 ✦ 天賦核心',
    title: '顯示者 Manifestor ✕ 四箭全左',
    tags: ['獨立破局發起', '極致戰略策劃', '告知開路'],
    icon: Brain,
    themeColor: 'rose',
    summary: '生來打破現狀、開創新局。配備四箭全左邏輯大腦，專注於頂層策略規劃與方向引領。',
    spiritualInsight: `身為佔人口僅 9% 的「顯示者 (Manifestor)」，YieJie 的原廠設定是獨立打破舊秩序、發起全新局面的變革者。妳的封閉與排他型能量場（Closed Aura）保護著妳強大的發起意志，不受他人質疑干擾。

搭配極為罕見的「四箭全左」戰略型大腦，妳在觀察世界時自帶極致的結構化與逆向思維。妳不是來聽命行事的，妳是來頒佈願景、帶領團隊突破重圍的戰略司令。當妳學會在行動前「告知 (Inform)」，阻力將化為助力，全宇宙都會為妳的發起開路。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '獨立發起力、純粹願景渲染力、四箭全左系統化架構天賦' },
      { label: '✦ 陰影機制', text: '試圖微觀管理苦工引發的「憤怒 (Anger)」，或被笨規則約束時的爆發' },
      { label: '✦ 高階破局', text: '只做發起者與軍師，將執行層面授權給團隊，並透過事先「告知」消除周遭恐懼' }
    ],
    actionAdvice: '在每次執行新企劃前，向團隊明確告知「我要做什麼」與「我的邊界在哪」，保護能量不被無謂干預。',
    targetTab: 'humandesign'
  },
  {
    id: 'ziwei_core',
    systemTag: '紫微斗數',
    groupTitle: '維度一 ✦ 天賦核心',
    title: '命宮卯無主星 ✕ 對宮太陽天梁',
    tags: ['變色龍極致適應', '軍師靈感源泉', '大智若愚'],
    icon: Zap,
    themeColor: 'teal',
    summary: '無主星具備極高彈性與環境吸收力，藉由借對宮陽梁巨木能量，展現大智若愚與策略格局。',
    spiritualInsight: `紫微斗數中「命宮無主星」象徵著極高的能量塑造空間與變色龍般的環境適應力。YieJie 不會被單一僵化的角色定型，妳能根據當下局勢自由切換頻率。

而借對宮「太陽天梁（廟）」的浩瀚能量，為妳挹注了光芒萬丈的庇蔭力與「蔭星」的靈性智慧。外在呈現出太陽般的熾熱溫暖與照顧精神，內在則具備天梁星看透世事的超然智慧。這種雙重交響讓妳在俗世商戰與高維玄學之間遊刃有餘。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '無主星無限包容力 ✕ 借對宮陽梁的庇蔭氣場與智者視野' },
      { label: '✦ 陰影機制', text: '因過度吸收外界期待而短暫迷失自我中心，或過度擔負他人宿命' },
      { label: '✦ 高階破局', text: '以「借力使力」代替硬碰硬，利用對宮陽梁的光芒照亮他人，同時保持本宮空靈' }
    ],
    actionAdvice: '定期進行自我能量歸零，提醒自己「我是一切的可能性，不被任何單一標籤綁架」。',
    targetTab: 'easterndestiny'
  },

  // Group 2: 運勢節奏
  {
    id: 'bazi_fortune',
    systemTag: '八字格局',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '丙火日主 ✕ 月時雙透辛金正財',
    tags: ['暖意璀璨太陽', '高品味正財格', '丙辛化財'],
    icon: Flame,
    themeColor: 'amber',
    summary: '自帶耀眼丙火能量，丙辛相合化財，具備天然的高階美感商業眼光與穩健獲利手腕。',
    spiritualInsight: `八字命格中，YieJie 為「丙火」日主，宛如高懸於天空的太陽，自帶無私照耀、溫暖萬物的旺盛生命力。月柱與時柱雙透「辛金」正財，形成了極為珍貴的「丙辛相合」。

辛金為溫潤精緻的珠寶翡翠，遇丙火陽光照射，更顯絢麗奪目。這代表妳具備天然的高品味審美眼光與穩健長久的商業變現手腕。妳的財富並非來自投機冒險，而是透過將美感、智慧與高品質服務系統化，吸引豐盛自然湧入。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '丙火太陽光輝 ✕ 丙辛合財的高階美感變現與資源吸引力' },
      { label: '✦ 陰影機制', text: '丙火過旺時的急躁，或辛金過度精細導致的完美主義內耗' },
      { label: '✦ 高階破局', text: '保持「溫和持續的照耀」，以高質感定位鎖定精準客群，讓財富主動追隨' }
    ],
    actionAdvice: '佩戴金屬配件或白水晶以補足「金」與「水」的調和能量，保持審美與財富管道的和諧。',
    targetTab: 'easterndestiny'
  },
  {
    id: 'ziwei_wealth',
    systemTag: '財帛事業',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '財帛宮天機化祿 ✕ 點子印鈔機',
    tags: ['企劃變現天賦', '智慧輕鬆聚財', '輕資產高溢價'],
    icon: DollarSign,
    themeColor: 'emerald',
    summary: '靠智慧、企劃與頂層架構獲得豐厚回報。專注於策略發起與系統構建，避開無謂勞力損耗。',
    spiritualInsight: `財帛宮天機化祿，象徵著 YieJie 的財富源泉來自「大腦智慧、策略企劃與創新靈感」。天機星為智慧機謀之星，化祿則代表點子源源不絕，且能快速轉化為實質收益。

妳是天生的「腦力印鈔機」，不需要依靠笨重體力，而是靠著靈活的頭腦與頂層架構獲得豐厚回報。結合太陰星在身宮的沉穩累積，妳能將抽象的策略概念，轉化為具備高溢價與可擴充性的商業模式。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '天機化祿的點子變現力、策略諮詢與知識產權高溢價' },
      { label: '✦ 陰影機制', text: '思維過度跳躍導致企劃流於表面，或因追求完美而延遲落地方案' },
      { label: '✦ 高階破局', text: '建立標準化知識產品或諮詢體系，實現「一次產出、多次收益」的輕資產模式' }
    ],
    actionAdvice: '將點子記錄在數位知識庫中，每季挑選 1-2 個最高槓桿的企劃進行商業落地。',
    targetTab: 'wealth'
  },
  {
    id: 'hd_emotion',
    systemTag: '能量節奏',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '情緒權威 ✕ 72 小時冷卻法則',
    tags: ['情緒波浪衝浪', '平靜確定算數', '冷卻隔離艙'],
    icon: Activity,
    themeColor: 'blue',
    summary: '絕不在興奮或焦慮當下做承諾。等待情緒波浪平復後的清明冷酷理智，決策勝率近乎 100%。',
    spiritualInsight: `人類圖情緒太陽神經叢中心（Emotional Solar Plexus）為 YieJie 的內在權威。這意味著妳的生命中「當下沒有真相」。妳的情緒會經歷如海洋波浪般高低起伏的週期：在興奮頂峰時看世界一片光明，在低谷時則容易生出焦慮疑慮。

真正的智慧在於學會「在情緒波浪上衝浪」。當面對重大合作、投資或感情承諾時，啟動「72小時冷卻法則」，等興奮與焦慮退去後，留下的那份「平靜而冷酷的確定感」，才是妳靈魂真正的答案。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '沉澱後深邃無比的洞察力、情感共鳴與平靜中的極致理性' },
      { label: '✦ 陰影機制', text: '在情緒高點衝動承諾，或在情緒低點焦慮毀約導致能量透支' },
      { label: '✦ 高階破局', text: '養成口頭禪：「這聽起來很棒！請給我 2-3 天思考，冷卻後回覆您。」' }
    ],
    actionAdvice: '設立專屬「情緒冷卻艙」時間，在面臨重大決定時絕不當下做最終答覆。',
    targetTab: 'humandesign'
  },

  // Group 3: 人際互動
  {
    id: 'name_numerology',
    systemTag: '五格姓名',
    groupTitle: '維度三 ✦ 人際互動',
    title: '「YieJie」總格 32 吉木',
    tags: ['春日花開之象', '熟人貴人聚財', '良好口碑'],
    icon: Award,
    themeColor: 'rose',
    summary: '名字自帶春日溫和能量與強大人緣氣場。良好的人際口碑與貴人引薦是事業成功的加速器。',
    spiritualInsight: `在姓名數理能量場中，YieJie 的總格呈現 32 數「寶馬金鞍、春日花開」之吉木大象。木主仁慈、生長與溫和，32 數具備極其強大的「貴人運」與人際吸引力。

妳的名字自帶一種讓人感到安心、值得信任的親和氣場，更容易吸引高層次貴人的賞識與自動引薦。人格與地格的和諧配置，讓妳在處理人際關係時既能展現優雅禮貌，又能在適當時機發揮溫柔而堅定的談判影響力。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '春風化雨般的人際吸引力、熟人圈層貴人引薦、品牌好感度' },
      { label: '✦ 陰影機制', text: '太過在意他人期待而難以劃清界線，或被「助人者」包袱綁架' },
      { label: '✦ 高階破局', text: '善用貴人網絡與口碑效應，同時保持清晰的個人邊界與專業定價' }
    ],
    actionAdvice: '定期維護高價值熟人圈層，以高質感諮詢與真誠服務鞏固口碑。',
    targetTab: 'name'
  },
  {
    id: 'hd_role',
    systemTag: '人生角色',
    groupTitle: '維度三 ✦ 人際互動',
    title: '2/4 雙軌社交 (隱士 / 機會主義者)',
    tags: ['神聖獨處充電', '熟人網絡圈層', '雙軌社交策略'],
    icon: Shield,
    themeColor: 'indigo',
    summary: '需要神聖的獨處洞穴時間 (2爻)，同時好機會往往來自深厚信任的熟人圈層 (4爻)。',
    spiritualInsight: `人類圖人生角色 2/4 呈現出特殊的雙軌動態：意識層面的「2爻隱士 (Hermit)」與潛意識層面的「4爻機會主義者 (Opportunist)」。

2爻讓妳天然具備某種不受干擾的獨異天賦，且極度需要沉浸在個人的神聖洞穴中獨處充電；而 4爻則代表妳生命中最優質的事業、財富與感情機會，絕大多數來自於「熟人與信任圈層」。妳不需要像業務員般盲目社交，只要在洞穴中磨練天賦，當熟人社群向妳發出召喚時，自然能一舉驚豔全場。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '自然發光的天賦技能、基於深厚信任的熟人圈層轉化率' },
      { label: '✦ 陰影機制', text: '在洞穴中過度縮避，或被不適合的社交圈強行打擾產生抗拒' },
      { label: '✦ 高階破局', text: '嚴格篩選社交圈，只對真誠且具智識質量的熟人網絡開放' }
    ],
    actionAdvice: '設定「無打擾獨處日」，在充分充電後再回應熟人社群的邀請。',
    targetTab: 'humandesign'
  },
  {
    id: 'love_astro',
    systemTag: '情感品味',
    groupTitle: '維度三 ✦ 人際互動',
    title: '金星金牛 ✕ 月亮獅子 3 宮',
    tags: ['高奢實質感', '智識大腦對手', '實用型感情觀'],
    icon: Heart,
    themeColor: 'pink',
    summary: '鄙視廉價的畫大餅。重視實質行動、高質感審美體驗，與能進行智識深度交流的靈魂夥伴。',
    spiritualInsight: `在情感與審美面向，金星位於廟旺的金牛座，讓 YieJie 對生活質感、感官美學與實質安全感有著極高標準。妳鄙視廉價的畫大餅與虛情假意的甜言蜜語，唯有實實在在的行動、高品質的陪伴與優雅的環境才能打動妳的心。

同時，月亮獅子座在 3 宮則渴望在關係中找到能進行「智識深度對話」的大腦夥伴。妳的理想伴侶既是能在外為妳撐腰的同盟者，也是能在私底下接住妳敏感焦慮、與妳共舞智識靈魂的知己。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '極高審美品味、實用主義情感觀、智識共鳴與真誠同盟' },
      { label: '✦ 陰影機制', text: '對細節與質感的極致挑剔，或在外強撐女王架子導致內心孤獨' },
      { label: '✦ 高階破局', text: '尋找具備深厚專業與高情緒價值的伴侶，在安全環境中放下防禦' }
    ],
    actionAdvice: '在日常生活中打造具備金牛美感的專屬儀式感，例如精油香氛與高品質音響。',
    targetTab: 'love'
  }
];

const getThemeClasses = (color: string) => {
  switch (color) {
    case 'rose':
      return {
        border: 'border-slate-850 hover:border-rose-400/60',
        shadow: 'hover:shadow-rose-400/10',
        bgGlow: 'bg-rose-400/5 group-hover:bg-rose-400/15',
        badgeBg: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
        badgeText: 'text-rose-300',
        text: 'text-rose-400 group-hover:text-rose-300',
        hoverHeading: 'group-hover:text-rose-300',
        modalBorder: 'border-rose-400/30'
      };
    case 'teal':
      return {
        border: 'border-slate-850 hover:border-teal-400/60',
        shadow: 'hover:shadow-teal-400/10',
        bgGlow: 'bg-teal-400/5 group-hover:bg-teal-400/15',
        badgeBg: 'bg-teal-400/10 text-teal-400 border-teal-400/20',
        badgeText: 'text-teal-300',
        text: 'text-teal-400 group-hover:text-teal-300',
        hoverHeading: 'group-hover:text-teal-300',
        modalBorder: 'border-teal-400/30'
      };
    case 'emerald':
      return {
        border: 'border-slate-850 hover:border-emerald-400/60',
        shadow: 'hover:shadow-emerald-400/10',
        bgGlow: 'bg-emerald-400/5 group-hover:bg-emerald-400/15',
        badgeBg: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
        badgeText: 'text-emerald-300',
        text: 'text-emerald-400 group-hover:text-emerald-300',
        hoverHeading: 'group-hover:text-emerald-300',
        modalBorder: 'border-emerald-400/30'
      };
    case 'blue':
      return {
        border: 'border-slate-850 hover:border-blue-400/60',
        shadow: 'hover:shadow-blue-400/10',
        bgGlow: 'bg-blue-400/5 group-hover:bg-blue-400/15',
        badgeBg: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
        badgeText: 'text-blue-300',
        text: 'text-blue-400 group-hover:text-blue-300',
        hoverHeading: 'group-hover:text-blue-300',
        modalBorder: 'border-blue-400/30'
      };
    case 'indigo':
      return {
        border: 'border-slate-850 hover:border-indigo-400/60',
        shadow: 'hover:shadow-indigo-400/10',
        bgGlow: 'bg-indigo-400/5 group-hover:bg-indigo-400/15',
        badgeBg: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20',
        badgeText: 'text-indigo-300',
        text: 'text-indigo-400 group-hover:text-indigo-300',
        hoverHeading: 'group-hover:text-indigo-300',
        modalBorder: 'border-indigo-400/30'
      };
    case 'pink':
      return {
        border: 'border-slate-850 hover:border-pink-400/60',
        shadow: 'hover:shadow-pink-400/10',
        bgGlow: 'bg-pink-400/5 group-hover:bg-pink-400/15',
        badgeBg: 'bg-pink-400/10 text-pink-400 border-pink-400/20',
        badgeText: 'text-pink-300',
        text: 'text-pink-400 group-hover:text-pink-300',
        hoverHeading: 'group-hover:text-pink-300',
        modalBorder: 'border-pink-400/30'
      };
    case 'amber':
    default:
      return {
        border: 'border-slate-850 hover:border-amber-400/60',
        shadow: 'hover:shadow-amber-400/10',
        bgGlow: 'bg-amber-400/5 group-hover:bg-amber-400/15',
        badgeBg: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
        badgeText: 'text-amber-300',
        text: 'text-amber-400 group-hover:text-amber-300',
        hoverHeading: 'group-hover:text-amber-300',
        modalBorder: 'border-amber-400/30'
      };
  }
};

interface EnergyMetric {
  id: string;
  name: string;
  shortName: string;
  score: number;
  category: 'talent' | 'wealth' | 'mindfulness';
  categoryLabel: string;
  weightTag: string;
  keyDrivers: string[];
  gradient: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: React.ElementType;
  description: string;
  strategyTip: string;
  systemResonance: string;
}

const ENERGY_METRICS: EnergyMetric[] = [
  {
    id: 'brainpower',
    name: '腦力網絡 (Brainpower)',
    shortName: '腦力網絡',
    score: 96,
    category: 'talent',
    categoryLabel: '天賦動力',
    weightTag: '96% ✦ 核心主導',
    keyDrivers: ['太陽/上升雙子', '四箭全左邏輯大腦', '超級神經網絡'],
    gradient: 'from-amber-400 via-yellow-400 to-amber-500',
    badgeBg: 'bg-amber-400/10',
    badgeText: 'text-amber-400',
    badgeBorder: 'border-amber-400/30',
    icon: Brain,
    description: '雙子星群與四箭全左超級大腦完美共振，具備頂級資訊敏銳度、結構化思維與極速知識吸收力。',
    strategyTip: '避免消耗於手工作業，專注於架構設計、頂層策劃與 AI 自動化系統發起。',
    systemResonance: '西洋占星 ✕ 人類圖 ✕ 紫微斗數 (對宮巨門昌曲)'
  },
  {
    id: 'initiating',
    name: '發起開路 (Initiating Power)',
    shortName: '發起開路',
    score: 92,
    category: 'talent',
    categoryLabel: '天賦動力',
    weightTag: '92% ✦ 破局開路',
    keyDrivers: ['顯示者 Manifestor', '35-36 冒險體驗通道', '丙火日主'],
    gradient: 'from-rose-500 via-amber-400 to-amber-500',
    badgeBg: 'bg-rose-400/10',
    badgeText: 'text-rose-400',
    badgeBorder: 'border-rose-400/30',
    icon: Zap,
    description: '生來打破現狀，具備獨立發起與開創新局的強大爆發能量，不需向任何人尋求許可。',
    strategyTip: '發起前主動「告知」周遭夥伴，能化解 90% 的人際阻力與對立情緒。',
    systemResonance: '人類圖 ✕ 八字丙火 ✕ 基因天命 35'
  },
  {
    id: 'wealth',
    name: '財富變現 (Monetization)',
    shortName: '財富變現',
    score: 94,
    category: 'wealth',
    categoryLabel: '財富事業',
    weightTag: '94% ✦ 點子印鈔機',
    keyDrivers: ['財帛天機化祿', '月時雙透辛金正財', '金星金牛高奢質感'],
    gradient: 'from-emerald-400 via-teal-400 to-emerald-500',
    badgeBg: 'bg-emerald-400/10',
    badgeText: 'text-emerald-400',
    badgeBorder: 'border-emerald-400/30',
    icon: DollarSign,
    description: '企劃與點子化祿，靠大腦與質感高溢價輕鬆獲利，自帶春日花開貴人與熟人圈層聚財磁場。',
    strategyTip: '善用 4 爻熟人圈層與貴人引薦，杜絕勞力賤賣，大膽為智力成果與美感標高價。',
    systemResonance: '紫微財帛宮 ✕ 八字正財格 ✕ 姓名學 32 吉木'
  },
  {
    id: 'charisma',
    name: '王者氣場 (Regal Charisma)',
    shortName: '王者氣場',
    score: 90,
    category: 'talent',
    categoryLabel: '天賦動力',
    weightTag: '90% ✦ 領袖魅力',
    keyDrivers: ['月亮獅子 3 宮', '遷移宮太陽化權', '天梁蔭星庇佑'],
    gradient: 'from-amber-500 via-orange-400 to-amber-400',
    badgeBg: 'bg-orange-400/10',
    badgeText: 'text-orange-400',
    badgeBorder: 'border-orange-400/30',
    icon: Crown,
    description: '具備大智若愚的造王者氣場與慷慨特質，渴望在大眾發言台上被看見、被肯定與獲得熱烈掌聲。',
    strategyTip: '打造個人品牌與專屬發言台（如知識社群/著作），理直氣壯接受大眾的正向讚賞。',
    systemResonance: '西洋占星 3 宮 ✕ 紫微太陽化權 ✕ 八字月令'
  },
  {
    id: 'emotion',
    name: '情緒冷卻 (Emotional Cool-down)',
    shortName: '情緒冷卻',
    score: 88,
    category: 'mindfulness',
    categoryLabel: '身心調頻',
    weightTag: '88% ✦ 72h法則',
    keyDrivers: ['情緒內在權威', '福德宮太陰化忌', '情緒波浪衝浪'],
    gradient: 'from-blue-500 via-indigo-400 to-blue-400',
    badgeBg: 'bg-blue-400/10',
    badgeText: 'text-blue-400',
    badgeBorder: 'border-blue-400/30',
    icon: Activity,
    description: '重大決策不可在情緒高低點定論。經過 72 小時平靜沉澱後，理智決策勝率近乎 100%。',
    strategyTip: '建立衝動隔離艙，任何重大契約或大筆消費實施至少 3 天冷卻期。',
    systemResonance: '人類圖情緒權威 ✕ 紫微福德宮 ✕ 占星火星'
  },
  {
    id: 'empathy',
    name: '共情護城 (Empathy Boundary)',
    shortName: '共情護城',
    score: 85,
    category: 'mindfulness',
    categoryLabel: '身心調頻',
    weightTag: '85% ✦ 邊界防禦',
    keyDrivers: ['卯宮無主星', '薦骨中心空白', '2/4 人生角色'],
    gradient: 'from-purple-500 via-pink-400 to-purple-400',
    badgeBg: 'bg-purple-400/10',
    badgeText: 'text-purple-400',
    badgeBorder: 'border-purple-400/30',
    icon: Shield,
    description: '海綿般敏銳共情吸收力。若缺乏邊界易透支借來的薦骨能量、過度迎合他人阻礙自我成長。',
    strategyTip: '明確不妥協原則清單，定期回歸獨處洞穴（2 爻）進行物理接地與海鹽淨化。',
    systemResonance: '紫微無主星 ✕ 人類圖空白薦骨 ✕ 2/4 雙軌社交'
  },
  {
    id: 'spirituality',
    name: '靈性直覺 (Spiritual Depth)',
    shortName: '靈性直覺',
    score: 89,
    category: 'mindfulness',
    categoryLabel: '身心調頻',
    weightTag: '89% ✦ 潛意識雷達',
    keyDrivers: ['12 宮太陽隱士', '土星雙魚靈感', '第四宮凱龍合相'],
    gradient: 'from-teal-400 via-cyan-400 to-teal-500',
    badgeBg: 'bg-teal-400/10',
    badgeText: 'text-teal-400',
    badgeBorder: 'border-teal-400/30',
    icon: Sparkles,
    description: '深邃潛意識連結與靈性探索雷達，能將深層情緒創傷淬煉為療癒人心的智者話語。',
    strategyTip: '在安靜夜間進行冥想與靈魂書寫，將無形靈感築造成現實中的高質感城堡。',
    systemResonance: '西洋占星 12 宮 ✕ 紫微天梁蔭星 ✕ 基因天命'
  }
];

interface GoldenSaying {
  id: number;
  quote: string;
  source: string;
  category: 'manifestor' | 'bazi' | 'astrology' | 'relationship' | 'wealth' | 'spirituality';
}

const GOLDEN_SAYINGS: GoldenSaying[] = [
  { id: 1, quote: "王者不求許可，王者只做宣告。", source: "顯示者 (Manifestor) 主權", category: "manifestor" },
  { id: 2, quote: "最完美的太陽，是懂得日落的。", source: "丙火日主 ✕ 能量蓄補", category: "bazi" },
  { id: 3, quote: "大腦在雲端衝浪，雙腳在泥土扎根。", source: "雙子星群 ✕ 金星金牛", category: "astrology" },
  { id: 4, quote: "真正的自由，是擁有隨時能夠打破框架的底氣。", source: "太陽 & 上升雙子座", category: "astrology" },
  { id: 5, quote: "允許一切發生，並在其中提煉智慧。", source: "35-36 體驗與無常通道", category: "manifestor" },
  { id: 6, quote: "用冷靜與理智的水，調和耀眼溫暖的烈日。", source: "八字五行調頻：喜水", category: "spirituality" },
  { id: 7, quote: "不要在人群中透支借來的薦骨能量。", source: "空白薦骨 ✕ 能量隔離", category: "manifestor" },
  { id: 8, quote: "你的善良必須帶點鋒芒，高貴的靈魂不容侵犯。", source: "月亮獅子 ✕ 天梁蔭星", category: "astrology" },
  { id: 9, quote: "把無形的靈性直覺，築成現實世界中極具質感的城堡。", source: "土星雙魚 ✕ 金牛美感", category: "wealth" },
  { id: 10, quote: "你不需要向所有人示弱，但你需要無條件地寬恕自己的不完美。", source: "第四宮火星凱龍合相", category: "spirituality" },
  { id: 11, quote: "先處理心情，再處理事情，才是讓生活長久獲利的最強戰略。", source: "實用型 (Pragma) 愛情觀", category: "relationship" },
  { id: 12, quote: "去尋找大腦能與你共舞、大膽包容你所有傲嬌的靈魂對手。", source: "第七宮射手 ✕ 巨門昌曲", category: "relationship" },
  { id: 13, quote: "你的點子就是印鈔機，大膽為自己的腦力與品味標上高溢價。", source: "天機化祿 ✕ 辛金正財", category: "wealth" },
  { id: 14, quote: "做運籌帷幄的軍師，而非上陣流汗的步兵。", source: "四箭全左戰略型大腦", category: "wealth" },
  { id: 15, quote: "在寂靜的深海裡撈取靈感珍珠，然後用溫暖的光芒照亮世人。", source: "太陽 12 宮 ✕ 太陽化權", category: "spirituality" },
  { id: 16, quote: "悶聲發大財，用優雅的姿態對消耗你的人事物優雅退場。", source: "卯宮空宮 ✕ 祿存防禦", category: "wealth" },
  { id: 17, quote: "生命本就是一場浩瀚的冒險，不要為了填補空虛而飢餓。", source: "基因天命 35 (飢餓➔冒險)", category: "manifestor" },
  { id: 18, quote: "放下速度的執著，信任宇宙的節奏，精準發起。", source: "基因天命 5 (急躁➔耐心)", category: "manifestor" },
  { id: 19, quote: "溫柔地擁抱內心那個焦慮的太陰，你的太陽才能綻放不刺眼的光芒。", source: "福德太陰化忌 ✕ 遷移太陽", category: "bazi" },
  { id: 20, quote: "你的優點是你的羽翼，你的黑暗面則是保護羽翼的雷達。", source: "全息陰影與防禦機制", category: "spirituality" }
];

const getSayingIcon = (category: string) => {
  switch (category) {
    case 'manifestor': return <Zap className="w-4 h-4 text-amber-400" />;
    case 'bazi': return <Flame className="w-4 h-4 text-orange-400" />;
    case 'astrology': return <Compass className="w-4 h-4 text-blue-400" />;
    case 'relationship': return <Heart className="w-4 h-4 text-pink-400" />;
    case 'wealth': return <DollarSign className="w-4 h-4 text-emerald-400" />;
    case 'spirituality': return <Sparkles className="w-4 h-4 text-teal-400" />;
    default: return <Sparkles className="w-4 h-4 text-slate-400" />;
  }
};

interface Props {
  onTabChange: (tabId: string) => void;
}

export default function OverviewDashboard({ onTabChange }: Props) {
  const data = LAI_YI_CHIEH_DATA;
  const [activeTabRelation, setActiveTabRelation] = useState<'mind' | 'heart' | 'power'>('mind');
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedGaugeCategory, setSelectedGaugeCategory] = useState<'all' | 'talent' | 'wealth' | 'mindfulness'>('all');
  const [hoveredMetricId, setHoveredMetricId] = useState<string | null>(null);
  const [activeMetricDetail, setActiveMetricDetail] = useState<string>('brainpower');
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const selectedCard = HOLOGRAPHIC_CARDS.find(c => c.id === selectedCardId) || null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCardId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleShuffleAll = () => {
    setIsSpinning(true);
    const indices: number[] = [];
    while (indices.length < 5) {
      const rand = Math.floor(Math.random() * GOLDEN_SAYINGS.length);
      if (!indices.includes(rand)) {
        indices.push(rand);
      }
    }
    setTimeout(() => {
      setActiveIndices(indices);
      setIsSpinning(false);
    }, 500);
  };

  const randomizeSingle = (slotIndex: number) => {
    setActiveIndices(prev => {
      const updated = [...prev];
      let rand = Math.floor(Math.random() * GOLDEN_SAYINGS.length);
      let attempts = 0;
      while (updated.includes(rand) && attempts < 100) {
        rand = Math.floor(Math.random() * GOLDEN_SAYINGS.length);
        attempts++;
      }
      updated[slotIndex] = rand;
      return updated;
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Mystical Header Banner in Bold Typography style */}
      <div className="relative overflow-hidden bg-slate-900/35 rounded-3xl p-8 md:p-12 border border-slate-850 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold text-amber-400 tracking-wider font-display uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            跨流派深度命理全息報告 / VOL. 2026
          </div>
          
          <div className="border-l-4 border-amber-400 pl-6 space-y-2">
            <h1 className="text-4xl md:text-7xl font-black text-slate-100 tracking-tighter leading-none">
              能量藍圖 <span className="text-amber-400 text-xl md:text-2xl tracking-widest uppercase block mt-2 font-light">The Soul Blueprint</span>
            </h1>
            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-mono">Manifestor 2/4 ✦ 太陽雙子 ✦ 月亮獅子 ✦ 丙火日主</p>
          </div>
          
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            透過整合「西洋占星」、「人類圖」、「紫微斗數」、「姓名學」以及「八字」，
            透視一個極具爆發力、思維敏捷，同時又需要深刻情感共鳴與物理落地的獨特靈魂。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-850">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">出廠年份</span>
              <p className="text-xs md:text-sm font-bold text-amber-300">1995 年 (乙亥年/靛藍小孩)</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">核心處理器</span>
              <p className="text-xs md:text-sm font-bold text-slate-200">雙子座 ✕ 四箭全左</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">動力系統</span>
              <p className="text-xs md:text-sm font-bold text-slate-200">顯示者 ✕ 丙火日主</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block tracking-wider">外觀與材質</span>
              <p className="text-xs md:text-sm font-bold text-emerald-300 font-display">金星金牛 (高奢材質)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 能量儀表板與雷達矩陣 (Energy Radar & Gauges Matrix Dashboard) */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-850 shadow-2xl space-y-8 relative overflow-hidden" id="energy-gauge-dashboard-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20">
                <Gauge className="w-5 h-5 animate-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-100 tracking-tight flex items-center gap-2">
                命理指標能量儀表板
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  VISUAL WEIGHT RADAR
                </span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl">
              取代繁雜純文字堆疊，將「西洋占星、人類圖、八字、紫微斗數、姓名學」核心指標量化為<strong className="text-amber-300">視覺化權重進度條與 7 維度能量雷達圖</strong>，直觀透視你的天賦強項與能量場動態。
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-850 self-start md:self-auto">
            <button
              onClick={() => setSelectedGaugeCategory('all')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                selectedGaugeCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              全部指標 ({ENERGY_METRICS.length})
            </button>
            <button
              onClick={() => setSelectedGaugeCategory('talent')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                selectedGaugeCategory === 'talent'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              天賦爆發 ({ENERGY_METRICS.filter(m => m.category === 'talent').length})
            </button>
            <button
              onClick={() => setSelectedGaugeCategory('wealth')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                selectedGaugeCategory === 'wealth'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              財富變現 ({ENERGY_METRICS.filter(m => m.category === 'wealth').length})
            </button>
            <button
              onClick={() => setSelectedGaugeCategory('mindfulness')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                selectedGaugeCategory === 'mindfulness'
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              身心調頻 ({ENERGY_METRICS.filter(m => m.category === 'mindfulness').length})
            </button>
          </div>
        </div>

        {/* Overview Key Indicators Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-[10px] font-mono text-slate-500 block uppercase">綜合能量原型</span>
            <p className="text-xs md:text-sm font-black text-amber-300 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              爆發型軍師 (Initiating Strategist)
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-[10px] font-mono text-slate-500 block uppercase">平均天賦頻率</span>
            <p className="text-xs md:text-sm font-black text-emerald-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              90.6 / 100 (超頻高階運作)
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-[10px] font-mono text-slate-500 block uppercase">最強獲利槓桿</span>
            <p className="text-xs md:text-sm font-black text-slate-200 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              企劃化祿 ✕ 熟人貴人引介
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 space-y-1">
            <span className="text-[10px] font-mono text-slate-500 block uppercase">最佳避坑心法</span>
            <p className="text-xs md:text-sm font-black text-blue-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              72h情緒冷卻 ✕ 獨處洞穴
            </p>
          </div>
        </div>

        {/* Radar Chart + Gauges Progress Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Radar Web Chart */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-850 flex flex-col items-center justify-between space-y-6 relative overflow-hidden shadow-xl">
            <div className="w-full flex items-center justify-between border-b border-slate-900 pb-3">
              <div className="flex items-center gap-2">
                <PieChart className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-black text-slate-200 uppercase tracking-wider font-mono">
                  7 維度命理權重雷達圖
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">HOVER TO HIGHLIGHT</span>
            </div>

            {/* SVG Radar */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="radarAreaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Rings */}
                {[20, 40, 60, 80, 100].map((lvl) => {
                  const ringPts = ENERGY_METRICS.map((_, i) => {
                    const angle = (2 * Math.PI * i) / ENERGY_METRICS.length - Math.PI / 2;
                    const r = (105 * lvl) / 100;
                    return `${(160 + r * Math.cos(angle)).toFixed(1)},${(160 + r * Math.sin(angle)).toFixed(1)}`;
                  }).join(' ');
                  return (
                    <polygon
                      key={lvl}
                      points={ringPts}
                      fill="none"
                      stroke={lvl === 100 ? "rgba(251, 191, 36, 0.35)" : "rgba(255, 255, 255, 0.08)"}
                      strokeWidth={lvl === 100 ? "1.5" : "1"}
                      strokeDasharray={lvl === 100 ? "none" : "3 3"}
                    />
                  );
                })}

                {/* Axis lines */}
                {ENERGY_METRICS.map((_, i) => {
                  const angle = (2 * Math.PI * i) / ENERGY_METRICS.length - Math.PI / 2;
                  const x2 = 160 + 105 * Math.cos(angle);
                  const y2 = 160 + 105 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={160}
                      y1={160}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255, 255, 255, 0.12)"
                      strokeDasharray="2 2"
                    />
                  );
                })}

                {/* Polygon Area */}
                <polygon
                  points={ENERGY_METRICS.map((m, i) => {
                    const angle = (2 * Math.PI * i) / ENERGY_METRICS.length - Math.PI / 2;
                    const r = (105 * m.score) / 100;
                    return `${(160 + r * Math.cos(angle)).toFixed(1)},${(160 + r * Math.sin(angle)).toFixed(1)}`;
                  }).join(' ')}
                  fill="url(#radarAreaGradient)"
                  stroke="#fbbf24"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                  className="transition-all duration-300"
                />

                {/* Nodes and Labels */}
                {ENERGY_METRICS.map((m, i) => {
                  const angle = (2 * Math.PI * i) / ENERGY_METRICS.length - Math.PI / 2;
                  const r = (105 * m.score) / 100;
                  const nx = 160 + r * Math.cos(angle);
                  const ny = 160 + r * Math.sin(angle);

                  const lx = 160 + 128 * Math.cos(angle);
                  const ly = 160 + 128 * Math.sin(angle);

                  const isSelected = activeMetricDetail === m.id || hoveredMetricId === m.id;

                  return (
                    <g 
                      key={m.id} 
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredMetricId(m.id)}
                      onMouseLeave={() => setHoveredMetricId(null)}
                      onClick={() => setActiveMetricDetail(m.id)}
                    >
                      <circle
                        cx={nx}
                        cy={ny}
                        r={isSelected ? 7 : 4.5}
                        fill={isSelected ? "#38bdf8" : "#fbbf24"}
                        stroke="#0f172a"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <text
                        x={lx}
                        y={ly}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isSelected ? "#38bdf8" : "#cbd5e1"}
                        fontSize="10"
                        fontWeight={isSelected ? "900" : "600"}
                        className="select-none font-mono transition-colors"
                      >
                        {m.shortName}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Radar Active Metric Preview */}
            {(() => {
              const activeMetric = ENERGY_METRICS.find(m => m.id === (hoveredMetricId || activeMetricDetail)) || ENERGY_METRICS[0];
              const MetricIcon = activeMetric.icon;
              return (
                <div className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-black text-slate-100">
                      <MetricIcon className="w-4 h-4 text-amber-400" />
                      {activeMetric.name}
                    </span>
                    <span className="text-xs font-mono font-black text-amber-400">
                      {activeMetric.score}%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {activeMetric.description}
                  </p>
                  <div className="pt-1 text-[10px] text-amber-300/90 font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span>{activeMetric.systemResonance}</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Right Column: Visual Progress Meters & Strategy Breakdown */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                量化指標權重與進度條列表
              </h3>
              <span className="text-[10px] text-slate-500 font-mono">CLICK TO EXPAND DETAILS</span>
            </div>

            <div className="space-y-3.5">
              {ENERGY_METRICS
                .filter(m => selectedGaugeCategory === 'all' || m.category === selectedGaugeCategory)
                .map((metric) => {
                  const Icon = metric.icon;
                  const isExpanded = activeMetricDetail === metric.id;
                  const isHovered = hoveredMetricId === metric.id;

                  return (
                    <div
                      key={metric.id}
                      onClick={() => setActiveMetricDetail(metric.id)}
                      onMouseEnter={() => setHoveredMetricId(metric.id)}
                      onMouseLeave={() => setHoveredMetricId(null)}
                      className={`p-4 rounded-2xl bg-slate-950 border transition-all duration-300 cursor-pointer ${
                        isExpanded || isHovered
                          ? 'border-amber-400/50 bg-slate-900/60 shadow-lg shadow-amber-400/5'
                          : 'border-slate-850 hover:border-slate-750'
                      }`}
                    >
                      {/* Metric Header Row */}
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${metric.badgeText}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-black text-slate-100">{metric.name}</h4>
                              <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${metric.badgeBg} ${metric.badgeText} ${metric.badgeBorder} border`}>
                                {metric.categoryLabel}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono">{metric.weightTag}</span>
                          </div>
                        </div>

                        {/* Numeric Score Badge */}
                        <div className="text-right">
                          <span className="text-base font-black font-mono text-slate-100">{metric.score}</span>
                          <span className="text-[10px] font-mono text-slate-500 block">/ 100</span>
                        </div>
                      </div>

                      {/* Visual Progress Meter Bar */}
                      <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 p-0.5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${metric.gradient} transition-all duration-700 relative`}
                          style={{ width: `${metric.score}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>

                      {/* Driver Tags Row */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3">
                        {metric.keyDrivers.map((driver, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {driver}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Strategy Tip Box */}
                      {isExpanded && (
                        <div className="mt-4 pt-3 border-t border-slate-850/80 space-y-2 animate-fade-in">
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {metric.description}
                          </p>
                          <div className="p-3 rounded-xl bg-amber-400/5 border border-amber-400/15 text-xs text-amber-300 space-y-1">
                            <span className="font-bold flex items-center gap-1 text-amber-400">
                              <Sparkles className="w-3.5 h-3.5" />
                              高階運作策略指引
                            </span>
                            <p className="leading-relaxed text-[11px] text-slate-300">
                              {metric.strategyTip}
                            </p>
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono pt-1">
                            跨流派共振：<span className="text-slate-300">{metric.systemResonance}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* 每日五句能量金句 (Daily 5 Golden Sayings) */}
      <div className="p-6 rounded-3xl bg-slate-900/35 border border-slate-850 shadow-2xl space-y-6 relative overflow-hidden" id="daily-golden-sayings-section">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              每日五句能量金句 ✦ 隨機解籤
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              為 YieJie 量身定制的靈魂絮語。點擊整盤更換，或<span className="text-amber-400/90 font-bold">點擊單個卡片</span>單獨更換。
            </p>
          </div>
          
          <button
            onClick={handleShuffleAll}
            disabled={isSpinning}
            className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-500 disabled:opacity-50 transition-all rounded-xl shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
            整盤隨機更換
          </button>
        </div>

        {/* Five Golden Sayings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activeIndices.map((sayingIdx, slotIdx) => {
            const saying = GOLDEN_SAYINGS[sayingIdx];
            return (
              <div
                key={slotIdx}
                onClick={() => randomizeSingle(slotIdx)}
                className="group cursor-pointer relative p-5 rounded-2xl bg-slate-950 border border-slate-850 hover:border-amber-400/30 hover:bg-slate-900/20 transition-all duration-300 flex flex-col justify-between min-h-[175px] shadow-md select-none"
                id={`saying-card-slot-${slotIdx}`}
              >
                {/* Number Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-600 font-black">SLOT #0{slotIdx + 1}</span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800/80 group-hover:border-amber-400/20 transition-all">
                    {getSayingIcon(saying.category)}
                  </div>
                </div>

                {/* Saying Quote Body */}
                <div className="my-4">
                  <p className="text-xs md:text-[13px] font-semibold text-slate-200 group-hover:text-amber-300 leading-relaxed transition-colors tracking-tight">
                    「{saying.quote}」
                  </p>
                </div>

                {/* Sayings Source Label & Single Swap Indicator */}
                <div className="pt-2 border-t border-slate-900/60 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-slate-500 tracking-wider">
                    {saying.source}
                  </span>
                  
                  {/* Subtle single swap label */}
                  <span className="text-[9px] font-mono text-amber-400/0 group-hover:opacity-100 group-hover:text-amber-400/70 transition-all flex items-center gap-0.5">
                    <Shuffle className="w-2.5 h-2.5" />
                    單換
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categorized Holographic Systems Card Grid Section */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/20 border border-slate-850 shadow-2xl space-y-8">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850/80 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-100 flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-amber-400" />
              跨流派全息命理卡片式矩陣
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              點擊卡片可即時展開 Framer Motion 平滑過渡之靈性深度洞察，或深入各系統分頁
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 self-start sm:self-auto flex items-center gap-1.5">
            <Maximize2 className="w-3 h-3" />
            CLICK TO EXPAND CARD
          </span>
        </div>

        <div className="space-y-8">
          {/* GROUP 1: 天賦核心 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black flex items-center gap-2 font-mono">
                <Crown className="w-4 h-4 text-amber-400" />
                維度一 ✦ 天賦核心 (CORE TALENTS & PERSONALITY)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HOLOGRAPHIC_CARDS.slice(0, 3).map((card) => {
                const theme = getThemeClasses(card.themeColor);
                return (
                  <motion.div
                    key={card.id}
                    id={`overview-card-${card.id}`}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onClick={() => setSelectedCardId(card.id)}
                    className={`group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border ${theme.border} shadow-lg hover:shadow-2xl ${theme.shadow} transition-colors duration-300 relative overflow-hidden flex flex-col justify-between`}
                  >
                    <div className={`absolute top-0 right-0 w-28 h-28 ${theme.bgGlow} rounded-full blur-2xl transition-all`} />
                    
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl ${theme.badgeBg} border group-hover:scale-110 transition-transform`}>
                          <card.icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-2.5 h-2.5" />
                            點擊放大
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                            {card.systemTag}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className={`text-base font-black text-slate-100 ${theme.hoverHeading} transition-colors`}>
                          {card.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {card.tags.map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[10px] font-bold px-2 py-0.5 rounded ${tIdx === 0 ? `${theme.badgeBg} ${theme.badgeText} border` : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {card.summary}
                      </p>
                    </div>

                    <div className={`mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold ${theme.text}`}>
                      <span className="flex items-center gap-1">
                        <span>點擊展開靈性洞察 ✦</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* GROUP 2: 運勢節奏 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-black flex items-center gap-2 font-mono">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                維度二 ✦ 運勢節奏 (FORTUNE & LIFE RHYTHM)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HOLOGRAPHIC_CARDS.slice(3, 6).map((card) => {
                const theme = getThemeClasses(card.themeColor);
                return (
                  <motion.div
                    key={card.id}
                    id={`overview-card-${card.id}`}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onClick={() => setSelectedCardId(card.id)}
                    className={`group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border ${theme.border} shadow-lg hover:shadow-2xl ${theme.shadow} transition-colors duration-300 relative overflow-hidden flex flex-col justify-between`}
                  >
                    <div className={`absolute top-0 right-0 w-28 h-28 ${theme.bgGlow} rounded-full blur-2xl transition-all`} />
                    
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl ${theme.badgeBg} border group-hover:scale-110 transition-transform`}>
                          <card.icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-2.5 h-2.5" />
                            點擊放大
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                            {card.systemTag}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className={`text-base font-black text-slate-100 ${theme.hoverHeading} transition-colors`}>
                          {card.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {card.tags.map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[10px] font-bold px-2 py-0.5 rounded ${tIdx === 0 ? `${theme.badgeBg} ${theme.badgeText} border` : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {card.summary}
                      </p>
                    </div>

                    <div className={`mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold ${theme.text}`}>
                      <span className="flex items-center gap-1">
                        <span>點擊展開靈性洞察 ✦</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* GROUP 3: 人際互動 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-rose-400/10 border border-rose-400/30 text-rose-400 text-xs font-black flex items-center gap-2 font-mono">
                <Users className="w-4 h-4 text-rose-400" />
                維度三 ✦ 人際互動 (INTERPERSONAL & DYNAMICS)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HOLOGRAPHIC_CARDS.slice(6, 9).map((card) => {
                const theme = getThemeClasses(card.themeColor);
                return (
                  <motion.div
                    key={card.id}
                    id={`overview-card-${card.id}`}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onClick={() => setSelectedCardId(card.id)}
                    className={`group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border ${theme.border} shadow-lg hover:shadow-2xl ${theme.shadow} transition-colors duration-300 relative overflow-hidden flex flex-col justify-between`}
                  >
                    <div className={`absolute top-0 right-0 w-28 h-28 ${theme.bgGlow} rounded-full blur-2xl transition-all`} />
                    
                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl ${theme.badgeBg} border group-hover:scale-110 transition-transform`}>
                          <card.icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-400/10 text-rose-300 border border-rose-400/20 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-2.5 h-2.5" />
                            點擊放大
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                            {card.systemTag}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className={`text-base font-black text-slate-100 ${theme.hoverHeading} transition-colors`}>
                          {card.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {card.tags.map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[10px] font-bold px-2 py-0.5 rounded ${tIdx === 0 ? `${theme.badgeBg} ${theme.badgeText} border` : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {card.summary}
                      </p>
                    </div>

                    <div className={`mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold ${theme.text}`}>
                      <span className="flex items-center gap-1">
                        <span>點擊展開靈性洞察 ✦</span>
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Framer Motion Expanded Card Lightbox Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCardId(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              layoutId={`overview-card-${selectedCard.id}`}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className={`relative z-10 w-full max-w-2xl bg-slate-900 border ${getThemeClasses(selectedCard.themeColor).modalBorder} rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 ${getThemeClasses(selectedCard.themeColor).bgGlow} rounded-full blur-3xl pointer-events-none`} />

              {/* Close Button & Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${getThemeClasses(selectedCard.themeColor).badgeBg} border`}>
                    <selectedCard.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                      {selectedCard.groupTitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-100 mt-0.5">
                      {selectedCard.title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCardId(null)}
                  className="p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tags & System Badge */}
              <div className="flex flex-wrap items-center gap-2 mt-4 relative z-10">
                <span className="text-xs font-mono font-black px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  {selectedCard.systemTag}
                </span>
                {selectedCard.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-bold px-3 py-1 rounded-lg border ${
                      idx === 0
                        ? `${getThemeClasses(selectedCard.themeColor).badgeBg} ${getThemeClasses(selectedCard.themeColor).badgeText}`
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Spiritual Detailed Insight Content */}
              <div className="mt-6 space-y-6 relative z-10 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {/* Spiritual Insight Section */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <h4 className="text-sm font-black text-amber-400 flex items-center gap-2 font-mono">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    靈性維度全息洞察 ✦ DEEP SPIRITUAL INSIGHT
                  </h4>
                  <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-line font-normal">
                    {selectedCard.spiritualInsight}
                  </div>
                </div>

                {/* Core Breakdown Items */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-black text-slate-400 font-mono tracking-wider">
                    核心解析與機制拆解
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedCard.coreBreakdown.map((item, bIdx) => (
                      <div key={bIdx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-850/80 flex flex-col sm:flex-row sm:items-baseline gap-2">
                        <span className="text-xs font-bold text-amber-300 shrink-0">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-300 leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* High Level Action Advice */}
                <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200 leading-relaxed flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300 block mb-0.5">高階運作建議：</span>
                    {selectedCard.actionAdvice}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-4 relative z-10">
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  按 ESC 鍵或點擊外部可隨時關閉
                </span>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setSelectedCardId(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-colors"
                  >
                    關閉卡片
                  </button>

                  <button
                    onClick={() => {
                      const target = selectedCard.targetTab;
                      setSelectedCardId(null);
                      onTabChange(target);
                    }}
                    className={`px-5 py-2.5 rounded-xl text-slate-950 text-xs font-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg flex items-center justify-center gap-2`}
                  >
                    <span>進入【{selectedCard.systemTag}】完整分頁</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Synthesized Energy Systems Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                跨流派全息共振與能量合成
              </h2>
              <p className="text-xs text-slate-400">當東方命格遇上西方星體，解鎖你的多維交互印記</p>
            </div>
            
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-850 self-start sm:self-auto">
              <button 
                onClick={() => setActiveTabRelation('mind')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${activeTabRelation === 'mind' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
              >
                心智思維 (雙子-四左)
              </button>
              <button 
                onClick={() => setActiveTabRelation('heart')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${activeTabRelation === 'heart' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
              >
                內在核心 (丙火-獅子)
              </button>
              <button 
                onClick={() => setActiveTabRelation('power')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${activeTabRelation === 'power' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-slate-200'}`}
              >
                能量防禦
              </button>
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 min-h-[220px] flex flex-col justify-between">
            {activeTabRelation === 'mind' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-100">「超級神經網絡」— 雙子星群 ✕ 四箭全左</h4>
                    <p className="text-[11px] text-slate-500 font-mono">ASTROLOGY SUN & ASC GEMINI + HUMAN DESIGN QUAD LEFT</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  你的<strong>太陽與上升皆落雙子座</strong>，代表敏捷的思維與無窮的好奇心。這在人類圖中完美共振了你的<strong>「四箭全左」超級大腦</strong>——這是一個極度活躍、渴望結構、極具戰略眼光的超級神經系統。你天生就是一個極佳的策劃者和軍師，擅長用邏輯去組織龐雜的信息。
                </p>
                <div className="bg-amber-400/5 border border-amber-400/10 p-3 rounded-lg text-xs text-amber-300/90 leading-normal">
                  💡 <strong>整合指引：</strong> 不要把這股強大的大腦戰略力耗費在瑣碎的手工勞動上（因為你是薦骨空白的顯示者）。用大腦去規劃頂層邏輯或 AI 工作流，把執行外包出去，才是你的高勝率打法。
                </div>
              </div>
            )}

            {activeTabRelation === 'heart' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-100">「太陽女皇的光芒」— 丙火日主 ✕ 月亮獅子</h4>
                    <p className="text-[11px] text-slate-500 font-mono">BAZI BING FIRE + ASTROLOGY MOON LEO IN 3RD HOUSE</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  在八字中，你是溫暖璀璨的<strong>「丙火（太陽）」</strong>。這顆丙火與你西方星盤中落入第三宮的<strong>「月亮獅子座」</strong>形成了完美的世紀共振！這代表著你內心深處渴望發光、渴望被肯定，擁有天生的領袖魅力與源源不絕的熱情，且非常渴望自己的觀點能在大眾中得到掌聲。
                </p>
                <div className="bg-amber-400/5 border border-amber-400/10 p-3 rounded-lg text-xs text-amber-300/90 leading-normal">
                  💡 <strong>整合指引：</strong> 不要壓抑自己想要「被看見」的渴望。為自己建立一個能安全展現才華的發言台（如自媒體、主導專案），獲得正向的回饋，這將是你最重要的內在養分。
                </div>
              </div>
            )}

            {activeTabRelation === 'power' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-100">「共情海綿與能量護城河」— 紫微無主星 ✕ 薦骨中心空白</h4>
                    <p className="text-[11px] text-slate-500 font-mono">ZIWEI MAO EMPTY PALACE + HD UNDEFINED SACRAL CENTER</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  你的紫微命宮坐落於卯且<strong>「無主星」</strong>，完美呼應了你的雙子座特質——像海綿一樣，極易吸收別人的觀點與能量。而在人類圖中，你的<strong>薦骨中心是空白的</strong>。這意指你是一個天生的「超級敏感共情者（Empath）」，容易因為過度配合新環境 or 他人而累壞自己，迷失了方向。
                </p>
                <div className="bg-amber-400/5 border border-amber-400/10 p-3 rounded-lg text-xs text-amber-300/90 leading-normal">
                  💡 <strong>整合指引：</strong> 你必須建立明確的「不妥協邊界」和「物理落地淨化儀式」（如海鹽浴或抱樹接地）。當你想開始迎合別人時，默唸你的不妥協清單，守護你脆弱的能量護城河。
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Name Meaning Card (Bento Style) */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-400/10 text-amber-400 rounded-lg">
                <DollarSign className="w-4 h-4" />
              </span>
              <h3 className="text-base font-black text-slate-100">財富本質：點子印鈔機</h3>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              你的財帛宮坐落了<strong>「天機星」且逢「化祿」</strong>，這代表你擁有<strong>靠腦袋、企劃、行銷設計和發起專案</strong>輕鬆聚財的極強天賦。配合你八字中的「正財格」與西方「金星金牛座」，你的直覺和點子極富高階品味與商業變現潛力。
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>熟人引介 (人類圖 4 爻) 是最好的聚財管道</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>杜絕情緒性消費，強制實行 72 小時冷卻法則</span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-850 mt-4">
            <button 
              onClick={() => onTabChange('wealth')}
              className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-xs font-black text-slate-950 transition-all border border-transparent"
            >
              檢視完整財富與事業佈局 →
            </button>
          </div>
        </div>
      </div>

      {/* Energy Mode Dual-Track Quote Carousel Widget */}
      <EnergyQuoteWidget compact={false} />

      {/* User Manual Standalone Quick Link */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">獨立特別專欄</span>
            <h3 className="text-base font-black text-slate-100">Lai Yi Jie ✦ 能量使用說明書</h3>
          </div>
          <p className="text-xs text-slate-300">減阻尼 ✕ 抗內耗 ✕ 專屬官方原廠操作手冊（已設為獨立導覽選單）</p>
        </div>
        <button
          onClick={() => onTabChange('usermanual')}
          className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md flex-shrink-0"
        >
          <span>開啟完整使用說明書</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Core Advantages & Disadvantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Strengths */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-4">
          <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            核心天賦優勢 (Strengths)
          </h3>
          <div className="space-y-4 divide-y divide-slate-850">
            <div className="pt-2">
              <span className="text-xs font-black text-emerald-300 font-display px-2 py-0.5 rounded bg-emerald-500/10">雙子星群智力風暴</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                擁有頂級的「超級大腦」與變色龍般的適應力。源源不絕的絕妙點子，學習能力驚人，能夠瞬間吸收新知識並轉化系統。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-teal-300 font-display px-2 py-0.5 rounded bg-teal-500/10">顯示者的王者能量</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                獨立、破局，擁有強大的開創力與行動力。生來具備「發起」的引領者氣場，是改變現狀、顛覆陳舊體系的破局者。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">極致的品味與深情</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                丙火與月亮獅子的慷慨璀璨，結合金星金牛座的固定土象，帶給你對美、質感和生活享受的極致追求，對待認定的人極度深情專一。
              </p>
            </div>
          </div>
        </div>

        {/* Optimizations */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850 shadow-xl space-y-4">
          <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            盲點剖析與優化策略 (Optimizations)
          </h3>
          <div className="space-y-4 divide-y divide-slate-850">
            <div className="pt-2">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">三分鐘熱度與迎合失界</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                <strong>💡 優化策略：</strong> 建立穩固的「外包系統」，將執行面交給別人生產，自己專注於策劃；在人際與職場中，提前劃定「不可退讓核心清單」作為能量錨點。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">孤立獨斷與憤怒爆發</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                <strong>💡 優化策略：</strong> 將「告知」當作你最強的公關與開路武器。告知他人你的行動和想法，而不是徵求許可。這能將你生命中的阻力 90% 轉化為助力。
              </p>
            </div>
            <div className="pt-4">
              <span className="text-xs font-black text-amber-300 font-display px-2 py-0.5 rounded bg-amber-500/10">傲嬌固執與情緒消費</span>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                <strong>💡 優化策略：</strong> 在親密關係中練習「坦承脆弱」（學會放下獅子的傲嬌面子）；在財務支配上，嚴格執行大筆開支 72 小時冷卻期。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Guided Action Steps (Action Plan) */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-slate-850 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-100">專屬你的生活與心靈實踐行動指南</h3>
            <p className="text-xs text-slate-400 font-sans">請將這些法則融入日常，逐步開啟你的能量最大化模式</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">1</span>
              停、看、聽、說 (HD權威)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              重大決定絕不能在情緒的高點或低點下定論。給自己<strong>至少3天緩衝期</strong>，當情緒歸於平靜後，那個不帶衝動的答案才是你最真實的聲音。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">2</span>
              感情中的「告知」藝術
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              為避免伴侶因你「突然需要縮回洞穴」而不安，請提前大方告知：<strong>「我這週末想一個人看書充電，是我的身體充電需要，不是因為不愛喔！」</strong>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">3</span>
              建立「不妥協清單」
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              紫微無主星的你極易隨人搖擺。請寫下 <strong>絕對不退讓的關係與生活原則</strong>，在被外界拉扯時默念，像錨一樣把你的靈魂穩固在原地。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-3">
            <div className="text-sm font-black text-slate-100 font-display flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs flex items-center justify-center font-black">4</span>
              為心靈打造「發言台」
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              月亮獅子落在第三宮，渴望表達和掌聲。去創辦付費社群、寫自媒體或主導極具質感的專案，<strong>理直氣壯地大膽開價</strong>，大放異彩！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
