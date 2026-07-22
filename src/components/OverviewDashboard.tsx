import React, { useState, useEffect } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { 
  Sparkles, Brain, Flame, Zap, CheckCircle2, AlertCircle, 
  Compass, Heart, DollarSign, Activity, Eye, Shield, Award, HelpCircle,
  RefreshCw, Shuffle, Crown, TrendingUp, Users, ArrowRight,
  Sliders, Info, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Filter, Layers,
  Maximize2, Minimize2, X, ExternalLink, BookOpen
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
    title: '太陽/上升雙子 ✕ 月亮獅子 3 宮',
    tags: ['超級神經網絡', '12宮靈魂結界', '高階表達造王者'],
    icon: Compass,
    themeColor: 'amber',
    summary: '雙子星群賦予極速學習與超頻邏輯，月亮獅子 3 宮擁有強烈的表達熱情與造王者氣場。',
    spiritualInsight: `雙子座太陽與上升組合構成了 YieJie 極速運算、無限吸收資訊的高維神經網絡。大腦如同一台超頻運作的量子電腦，能輕鬆拆解複雜系統並完成跨領域的逆向工程。

然而，這層看似機智靈動的外衣下，包裹著月亮獅子座在 3 宮的強烈光芒——妳的內心渴望透過高質感的表達與創造，成為眾人矚目的「靈性造王者」。同時，12 宮星體連線（太陽、金星）讓妳擁有極其特殊的潛意識靈感雷達，能在平靜中感應宇宙場域的細微震動。妳不需要在日常中過度曝光，妳的定位是「預約制、邀請制、具備極高隱私性的高端智庫與靈性導師」。`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '雙子超頻神經網絡 ✕ 3宮月亮獅子的語言震撼力與啟發氣場' },
      { label: '✦ 陰影機制', text: '大腦資訊過載引發的神經焦慮，與 12 宮海綿體質吸收外界濁氣' },
      { label: '✦ 高階破局', text: '建立 12 宮隱密品牌結界，將直覺轉化為精準高價產出，不干涉他人業力' }
    ],
    actionAdvice: '實施「文字與語音排毒」，將大腦中的靈感寫成專屬戰略框架，搭配雪松與金牛精油淨化頭部能量場。',
    targetTab: 'astrology'
  },
  {
    id: 'hd_core',
    systemTag: '人類圖',
    groupTitle: '維度一 ✦ 天賦核心',
    title: '顯示者 Manifestor ✕ 四箭全左',
    tags: ['獨立破局發起', '極致戰略策劃', '四箭全左邏輯'],
    icon: Brain,
    themeColor: 'rose',
    summary: '生來打破現狀、開創新局。配備四箭全左邏輯大腦，專注於頂層策略規劃與方向引領。',
    spiritualInsight: `身為佔人口僅 9% 的「顯示者 (Manifestor)」，YieJie 的原廠設定是獨立打破舊秩序、發起全新局面的變革者。妳的封閉與排他型能量場（Closed Aura）保護著妳強大的發起意志，不受他人質疑干擾。

搭配極為罕見的「四箭全左」戰略型大腦，妳在觀察世界時自帶極致的結構化與逆向思維。妳不是來聽命行事的勞動者，而是頒佈願景、帶領團隊突破重圍的戰略司令。戒斷親力親為的勞力變現，透過「告知 (Inform)」與授權，將繁瑣執行外包，讓全宇宙為妳的發起開路。`,
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
    title: '命宮卯無主星 ✕ 身宮太陽化權',
    tags: ['變色龍極致適應', '太陽化權降維打擊', '霸氣結界'],
    icon: Zap,
    themeColor: 'teal',
    summary: '無主星具備極高彈性，身宮遷移宮太陽化權提供無與倫比的王權決斷力與護城河。',
    spiritualInsight: `紫微斗數中「命宮無主星」象徵著極高的能量塑造空間與變色龍般的環境適應力。YieJie 不會被單一僵化的角色定型，妳能根據當下局勢自由切換頻率。

而遷移宮/身宮的「太陽化權」則是妳一生最強大的底牌！當面對假貴人滲透或吸血鬼客戶情緒勒索時，妳不需要委屈妥協。啟動「太陽化權」的霸氣與降維打擊——直接單方面告知並終止關係。真正的太陽照耀大地不求回報，但絕不允許任何人試圖把太陽關進溫室裡！`,
    coreBreakdown: [
      { label: '✦ 靈魂天賦', text: '無主星無限包容力 ✕ 身宮太陽化權的無上威嚴與方向掌控力' },
      { label: '✦ 陰影機制', text: '因過度吸收外界期待而短暫迷失，或被偽裝成弱者的假貴人吸食資源' },
      { label: '✦ 高階破局', text: '調用太陽化權霸氣，拒絕向下兼容，建立高邊界的「王者結界」' }
    ],
    actionAdvice: '遇到越界要求時，不生氣也不委屈，直接用太陽化權的冷酷理性單方面發佈決定。',
    targetTab: 'easterndestiny'
  },

  // Group 2: 運勢節奏 & 財富矩陣
  {
    id: 'wealth_matrix',
    systemTag: '財富矩陣',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '財富矩陣與商業帝國底層',
    tags: ['系統變現', '高溢價定價權', '隱密智庫結界'],
    icon: DollarSign,
    themeColor: 'emerald',
    summary: '戒斷「勞力變現」，啟動「系統變現」。憑藉高溢價定價權與 12 宮隱密結界打造商業帝國。',
    spiritualInsight: `（參照財富矩陣篇剖析）YieJie 過去受 ENFJ 與 6 宮冥王星影響，容易落入「親力親為」的陷阱。對空白薦骨而言，這是慢性自殺！

破局戰略：
① 系統變現：結合四箭全左與天機化祿，將妳的解牌與潛意識戰略錄製成高單價課程或「潛意識戰略推演框架」。妳賣的是節省時間的「演算法」，而非時間本身。
② 高溢價定價權：八字「丙辛合正財」與金星金牛，代表妳配得起高質感回報。高定價是妳最好的護城河，能幫妳過濾情緒吸血鬼。
③ 12 宮隱密結界：不需在大眾面前跳舞博眼球。妳的品牌是「預約制、邀請制的高端智庫」，越神祕越引發渴望。`,
    coreBreakdown: [
      { label: '✦ 系統變現', text: '將雙子大腦與直覺淬鍊為標準化高價知識體系，實現一次產出多次獲利' },
      { label: '✦ 高溢價護城河', text: '高收費包含雙子過濾資訊、太陰/空白薦骨修復力與極致美感隱私成本' },
      { label: '✦ 12宮品牌定位', text: '預約制與邀請制的高端靈性智庫，以極高隱私度吸引頂級客群' }
    ],
    actionAdvice: '全面梳理個人諮詢服務，封頂單次諮詢價格，並推出模組化的線上高階潛意識課程。',
    targetTab: 'wealth'
  },
  {
    id: 'ziwei_oppose',
    systemTag: '巳亥對沖',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '巳亥對沖解碼 (天機化祿 vs 太陰化忌)',
    tags: ['賺錢與焦慮對決', '木五行通關', '知識產權護城河'],
    icon: Activity,
    themeColor: 'teal',
    summary: '財帛宮天機化祿與福德宮太陰化忌正對沖！唯有導入「木五行（品牌/知識庫）」方能通關。',
    spiritualInsight: `（參照巳亥對沖篇剖析）紫微財帛宮在「亥（天機化祿）」，福德宮在「巳（太陰化忌）」，兩者正對沖，完美對應八字「巳亥相沖」。

底層真相：大腦一產生商業點子賺錢（天機化祿），就會立刻沖動福德宮，引爆太陰化忌的神經緊繃與失眠。對妳來說，原廠設定中「賺錢」與「內心平靜」是拉扯的。

破局之道（木五行通關）：
在八字中，要化解水（亥）火（巳）相沖，必須加入「木（水生木、木生火）」。木代表妳的「印星」——知識體系、品牌護城河與自我疼惜。將點子沉澱為「有版權的知識體系（木）」，財富轉化為穩定資產，才能平息內心焦慮。`,
    coreBreakdown: [
      { label: '✦ 宿命拉扯', text: '天機化祿運作時，容易連動太陰化忌產生神經焦慮與缺乏安全感' },
      { label: '✦ 木五行通關', text: '打造品牌智庫與知識產權，讓「資產」替妳獲利，化解水火直沖' },
      { label: '✦ 終極平靜', text: '從賣腦力點子升級為累積品牌資產，獲得物質與心靈的雙重豐盛' }
    ],
    actionAdvice: '打造個人知識著作或專利選輯，建立固定版權與自動化收益流程。',
    targetTab: 'easterndestiny'
  },
  {
    id: 'bazi_pingsin',
    systemTag: '八字博弈',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '丙辛合水權力遊戲與吸血鬼防禦',
    tags: ['丙辛合水', '空宮吸血鬼防禦', '太陽化權降維打擊'],
    icon: Flame,
    themeColor: 'amber',
    summary: '丙辛合正財與控制權博弈！識別假貴人吸血鬼，啟動太陽化權進行降維打擊。',
    spiritualInsight: `（參照丙辛合水篇剖析）八字「丙辛合水（貪合正財）」：丙火（太陽）與辛金（正財）合化為水（官殺責任）。

致命盲點：妳為了抓住實質價值（辛金），常不自覺陷入充滿壓力的體制或責任（化水）中。配合紫微命宮空宮，一旦對方展現優渥條件，顯示者靈魂就會戴上枷鎖。

吸血鬼防禦戰：
命宮空宮的「祿存」很容易被偽裝成弱者的吸血鬼（假貴人）穿透。他們用情緒勒索吸食妳的資源。
終極防禦：啟動遷移宮「太陽化權」降維打擊！當關係變得沉重失真時，展現太陽的霸氣——直接單方面告知並終止。永遠不要為了一棵樹，賠上整片天空的自由。`,
    coreBreakdown: [
      { label: '✦ 丙辛合水', text: '警惕為追求短期價值而讓渡個人自由，承擔過度官殺責任' },
      { label: '✦ 吸血鬼識別', text: '看穿假裝崇拜弱小、實則吸食空宮祿存資源的情緒吸血鬼' },
      { label: '✦ 太陽降維打擊', text: '調用身宮太陽化權，單方面發布終止，保持靈魂絕對獨立' }
    ],
    actionAdvice: '盤點現有合作案，凡是帶來沉重情緒負擔者，評估啟動太陽化權單方面解約。',
    targetTab: 'easterndestiny'
  },

  // Group 3: 人際互動 & 核心內閣
  {
    id: 'social_cabinet',
    systemTag: '人際結界',
    groupTitle: '維度三 ✦ 人際互動',
    title: '三層人際防護網與核心內閣',
    tags: ['外圍信仰者', '中堅執行內閣', '核心靈魂避難所'],
    icon: Shield,
    themeColor: 'indigo',
    summary: '告別向下兼容！建立「信仰者、執行內閣、靈魂避難所」三層防護網，保護空白薦骨。',
    spiritualInsight: `（參照三層人際防護網篇剖析）伴隨 2026 羊刃年加冕，妳的人際關係必須重新洗牌。不能再把每個人都當成需要拯救的朋友，必須像 CEO 一樣建立三層防護網：

第一層 ✦ 外圍信仰者：
對應「太陽化權 + 月亮獅子」。給予願景與智識，享受掌聲，但絶不介入私人情緒，不當情緒垃圾桶。

第二層 ✦ 中堅執行內閣：
對應交友宮地空地劫。絕不與平輩合夥！採用「雇傭與外包」，尋找強大薦骨能量的生產者執行行政與細節。花錢買回神經健康。

第三層 ✦ 核心靈魂避難所 (1-3人)：
對應 2 爻隱士與 12 宮。能進行雙子深度對話、尊重妳突然消失充電的怪癖，讓妳能放下 ENFJ 面具展示脆弱。`,
    coreBreakdown: [
      { label: '✦ 第一層信仰者', text: '傳播智慧與願景，堅決不當任何人的情緒垃圾桶' },
      { label: '✦ 第二層執行閣', text: '不合夥，純雇傭外包！讓生產者執行細節，保護空白薦骨' },
      { label: '✦ 第三層避難所', text: '嚴格審查的 2 爻結界，只留 1-3 位能深度共鳴且不勒索的靈魂同盟' }
    ],
    actionAdvice: '立即招聘或外包行政與客服工作，將個人時間 100% 留給頂層策略與核心充電。',
    targetTab: 'humandesign'
  },
  {
    id: 'hd_role',
    systemTag: '人生角色',
    groupTitle: '維度三 ✦ 人際互動',
    title: '2/4 雙軌社交 (隱士 / 機會主義者)',
    tags: ['神聖獨處洞穴', '熟人網絡圈層', '雙軌社交策略'],
    icon: Heart,
    themeColor: 'pink',
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
    id: 'ziwei_wealth',
    systemTag: '財帛事業',
    groupTitle: '維度二 ✦ 運勢節奏',
    title: '財帛宮天機化祿 ✕ 點子印鈔機',
    tags: ['企劃變現天賦', '智慧輕鬆聚財', '輕資產高溢價'],
    icon: DollarSign,
    themeColor: 'emerald',
    summary: '靠智慧、企劃與頂層架構獲得豐厚回interface GoldenSaying {��往往來自深厚信任的熟人圈層 (4爻)。',
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
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [expandedSubTab, setExpandedSubTab] = useState<'insight' | 'breakdown' | 'action'>('insight');
  const [cardZoomRatio, setCardZoomRatio] = useState<number>(125);
  const [matrixSystemFilter, setMatrixSystemFilter] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedCardId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
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
        {/* Section Title & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-850/80 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                IN-PLACE HOLO MATRIX ZOOM
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400">
                8 卡片全息解讀
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-100 flex items-center gap-2.5 mt-1">
              <Sparkles className="w-6 h-6 text-amber-400" />
              跨流派全息命理卡片矩陣
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              點擊任意卡片可於原位全息放大，切換子分頁（洞察 / 拆解 / 行動）與特寫比例，或直接在卡片間無縫切換
            </p>
          </div>

          {/* System Filters & Matrix Status */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
            <button
              onClick={() => setMatrixSystemFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                matrixSystemFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>全部流派 (8)</span>
            </button>

            <button
              onClick={() => setMatrixSystemFilter('humandesign')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                matrixSystemFilter === 'humandesign'
                  ? 'bg-rose-400 text-slate-950 shadow-md font-black'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-rose-400" />
              <span>人類圖 (3)</span>
            </button>

            <button
              onClick={() => setMatrixSystemFilter('easterndestiny')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                matrixSystemFilter === 'easterndestiny'
                  ? 'bg-teal-400 text-slate-950 shadow-md font-black'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-teal-400" />
              <span>東方命理 (3)</span>
            </button>

            <button
              onClick={() => setMatrixSystemFilter('astrology')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                matrixSystemFilter === 'astrology'
                  ? 'bg-pink-400 text-slate-950 shadow-md font-black'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-pink-400" />
              <span>占星 & 姓名 (2)</span>
            </button>
          </div>
        </div>

        {/* Matrix Grid Content */}
        <div className="space-y-8">
          {(() => {
            const filteredCards = HOLOGRAPHIC_CARDS.filter((card) => {
              if (matrixSystemFilter === 'all') return true;
              if (matrixSystemFilter === 'humandesign') {
                return card.systemTag === '人類圖' || card.systemTag === '人生角色' || card.systemTag === '能量節奏';
              }
              if (matrixSystemFilter === 'easterndestiny') {
                return card.systemTag === '紫微斗數' || card.systemTag === '八字格局' || card.systemTag === '財帛事業';
              }
              if (matrixSystemFilter === 'astrology') {
                return card.systemTag === '情感品味' || card.systemTag === '五格姓名';
              }
              return true;
            });

            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {filteredCards.map((card) => {
                  const theme = getThemeClasses(card.themeColor);
                  const isExpanded = expandedCardId === card.id;

                  // Current card index in filtered cards
                  const cardIndexInFiltered = filteredCards.findIndex((c) => c.id === card.id);
                  const prevCardId = filteredCards[(cardIndexInFiltered - 1 + filteredCards.length) % filteredCards.length].id;
                  const nextCardId = filteredCards[(cardIndexInFiltered + 1) % filteredCards.length].id;

                  if (isExpanded) {
                    return (
                      <motion.div
                        key={card.id}
                        id={`overview-card-${card.id}`}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        className={`col-span-1 md:col-span-3 p-6 sm:p-8 rounded-3xl bg-slate-950/95 border ${theme.modalBorder} shadow-2xl relative overflow-hidden space-y-6 ring-2 ring-amber-400/40 backdrop-blur-xl transition-all my-2`}
                      >
                        {/* Glow halo */}
                        <div className={`absolute top-0 right-0 w-96 h-96 ${theme.bgGlow} rounded-full blur-3xl pointer-events-none opacity-80`} />

                        {/* Top Control Bar for Expanded Card */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-slate-800/80 pb-5 relative z-10 gap-4">
                          {/* Card Main Title & Metadata */}
                          <div className="flex items-start gap-4">
                            <div className={`p-3.5 rounded-2xl ${theme.badgeBg} border shrink-0 mt-0.5 shadow-lg`}>
                              <card.icon className="w-7 h-7" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                                  {card.groupTitle}
                                </span>
                                <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                                  ✦ {card.systemTag}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  [ HOLO-ZOOM Matrix :: {cardIndexInFiltered + 1} / {filteredCards.length} ]
                                </span>
                              </div>
                              <h3 className="text-2xl sm:text-3xl font-black text-slate-100 mt-1.5 tracking-tight">
                                {card.title}
                              </h3>
                            </div>
                          </div>

                          {/* Quick Controls: Next/Prev, Zoom Scale, Close */}
                          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto shrink-0">
                            {/* Card Switcher */}
                            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 gap-1">
                              <button
                                onClick={() => setExpandedCardId(prevCardId)}
                                className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-800 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                                title="上一張卡片"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                                <span>上一張</span>
                              </button>
                              <span className="text-[11px] font-mono text-slate-400 px-1 font-bold">
                                {cardIndexInFiltered + 1}/{filteredCards.length}
                              </span>
                              <button
                                onClick={() => setExpandedCardId(nextCardId)}
                                className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-800 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                                title="下一張卡片"
                              >
                                <span>下一張</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* Zoom Ratio Selector */}
                            <div className="hidden sm:flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 gap-1">
                              {[100, 125, 150].map((ratio) => (
                                <button
                                  key={ratio}
                                  onClick={() => setCardZoomRatio(ratio)}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                                    cardZoomRatio === ratio
                                      ? 'bg-amber-400 text-slate-950 shadow'
                                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                  }`}
                                >
                                  {ratio}%
                                </button>
                              ))}
                            </div>

                            {/* Minimize Button */}
                            <button
                              onClick={() => setExpandedCardId(null)}
                              className="px-4 py-2 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 hover:border-amber-400/60 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Minimize2 className="w-4 h-4 text-amber-400" />
                              <span>縮小 / 收合</span>
                            </button>
                          </div>
                        </div>

                        {/* Interactive Sub-Tab Selector inside Expanded Card */}
                        <div className="flex items-center gap-2 border-b border-slate-850 pb-3 relative z-10 overflow-x-auto custom-scrollbar">
                          <button
                            onClick={() => setExpandedSubTab('insight')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                              expandedSubTab === 'insight'
                                ? `${theme.badgeBg} ${theme.badgeText} border font-bold shadow-md`
                                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>✦ 靈性維度全息洞察</span>
                          </button>

                          <button
                            onClick={() => setExpandedSubTab('breakdown')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                              expandedSubTab === 'breakdown'
                                ? `${theme.badgeBg} ${theme.badgeText} border font-bold shadow-md`
                                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>✦ 3 大核心機制拆解</span>
                          </button>

                          <button
                            onClick={() => setExpandedSubTab('action')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                              expandedSubTab === 'action'
                                ? `${theme.badgeBg} ${theme.badgeText} border font-bold shadow-md`
                                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                            }`}
                          >
                            <Zap className="w-3.5 h-3.5" />
                            <span>✦ 智慧運算與高階行動</span>
                          </button>
                        </div>

                        {/* Sub-Tab Dynamic Content */}
                        <div className="relative z-10">
                          {expandedSubTab === 'insight' && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-5"
                            >
                              {/* Summary Quote Box */}
                              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-amber-400/20 text-slate-200 relative overflow-hidden">
                                <div className="text-amber-400/20 text-5xl font-serif absolute -top-2 -left-1 pointer-events-none">
                                  “
                                </div>
                                <p className="text-xs sm:text-sm font-bold leading-relaxed text-amber-200/90 pl-4 relative z-10">
                                  {card.summary}
                                </p>
                              </div>

                              {/* Spiritual Narrative */}
                              <div
                                className={`p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-3 leading-relaxed text-slate-200 whitespace-pre-line ${
                                  cardZoomRatio === 150
                                    ? 'text-sm sm:text-base'
                                    : cardZoomRatio === 100
                                    ? 'text-xs'
                                    : 'text-xs sm:text-sm'
                                }`}
                              >
                                <h4 className="text-xs font-mono font-bold text-amber-400 tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                  DEEP SPIRITUAL INSIGHT NARRATIVE
                                </h4>
                                <div>{card.spiritualInsight}</div>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap items-center gap-2 pt-1">
                                <span className="text-xs font-mono text-slate-400 mr-1 font-bold">
                                  核心標籤:
                                </span>
                                {card.tags.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className={`text-xs font-bold px-3 py-1 rounded-lg border ${
                                      tIdx === 0
                                        ? `${theme.badgeBg} ${theme.badgeText}`
                                        : 'bg-slate-900 text-slate-300 border-slate-800'
                                    }`}
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {expandedSubTab === 'breakdown' && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-4"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {card.coreBreakdown.map((item, bIdx) => (
                                  <div
                                    key={bIdx}
                                    className={`p-5 rounded-2xl bg-slate-900/90 border space-y-2.5 transition-all relative overflow-hidden ${
                                      bIdx === 0
                                        ? 'border-emerald-400/30 hover:border-emerald-400/60'
                                        : bIdx === 1
                                        ? 'border-amber-400/30 hover:border-amber-400/60'
                                        : 'border-indigo-400/30 hover:border-indigo-400/60'
                                    }`}
                                  >
                                    <div
                                      className={`text-xs font-mono font-black flex items-center justify-between pb-2 border-b border-slate-800 ${
                                        bIdx === 0
                                          ? 'text-emerald-400'
                                          : bIdx === 1
                                          ? 'text-amber-400'
                                          : 'text-indigo-400'
                                      }`}
                                    >
                                      <span>{item.label}</span>
                                      <span className="text-[10px] opacity-70">0{bIdx + 1}</span>
                                    </div>
                                    <p className="text-xs text-slate-200 leading-relaxed pt-1">
                                      {item.text}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {expandedSubTab === 'action' && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-4"
                            >
                              <div className="p-5 rounded-2xl bg-amber-400/10 border border-amber-400/30 space-y-3">
                                <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-black">
                                  <Zap className="w-4 h-4 text-amber-400" />
                                  <span>高階能量運作建議 (ACTION ADVICE)</span>
                                </div>
                                <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
                                  {card.actionAdvice}
                                </p>
                              </div>

                              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                                <span>✦ 如需深入操作此流派系統之詳細命盤，請點擊右側按鈕跳轉至對應專屬分頁</span>
                                <button
                                  onClick={() => onTabChange(card.targetTab)}
                                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                                >
                                  <span>進入【{card.systemTag}】完整分頁</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Expanded Footer Actions */}
                        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span>已原位全息放大解讀，按下 Esc 鍵或右上角可隨時縮小收合</span>
                          </div>

                          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                            <button
                              onClick={() => setExpandedCardId(null)}
                              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
                              <span>縮小收合</span>
                            </button>

                            <button
                              onClick={() => onTabChange(card.targetTab)}
                              className="px-5 py-2 rounded-xl text-slate-950 text-xs font-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>進入【{card.systemTag}】完整分頁</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }

                  // Compact Card View
                  return (
                    <motion.div
                      key={card.id}
                      id={`overview-card-${card.id}`}
                      layout
                      whileHover={{ y: -6, scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      onClick={() => {
                        setExpandedCardId(card.id);
                        setExpandedSubTab('insight');
                      }}
                      className={`group cursor-pointer p-6 rounded-2xl bg-slate-950/90 hover:bg-slate-900/90 border ${theme.border} shadow-lg hover:shadow-2xl ${theme.shadow} transition-colors duration-300 relative overflow-hidden flex flex-col justify-between`}
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bgGlow} rounded-full blur-2xl transition-all`} />

                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className={`p-2.5 rounded-xl ${theme.badgeBg} border group-hover:scale-110 transition-transform`}>
                            <card.icon className="w-5 h-5" />
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-2.5 h-2.5" />
                              點擊原位放大
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-850 text-slate-400">
                              {card.systemTag}
                            </span>
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                            {card.groupTitle}
                          </span>
                          <h3 className={`text-base font-black text-slate-100 ${theme.hoverHeading} transition-colors`}>
                            {card.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {card.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                  tIdx === 0
                                    ? `${theme.badgeBg} ${theme.badgeText} border`
                                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                                }`}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed pt-1">
                          {card.summary}
                        </p>
                      </div>

                      <div className={`mt-5 pt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold ${theme.text}`}>
                        <span className="flex items-center gap-1.5">
                          <span>點擊原位全息放大 ✦</span>
                        </span>
                        <Maximize2 className="w-3.5 h-3.5 group-hover:scale-125 transition-transform text-amber-400" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </div>

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
