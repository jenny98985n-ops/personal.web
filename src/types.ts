export interface AstroPlacement {
  planet: string;
  sign: string;
  degree: string;
  house: number;
  isRetrograde?: boolean;
}

export interface BaziPillar {
  title: string; // 年柱, 月柱, 日柱, 時柱
  stem: string; // 乙, 辛, 丙, 辛
  stemTenGod: string; // 正印, 正財, 元女, 正財
  branch: string; // 亥, 巳, 寅, 卯
  branchHidden: string[]; // [壬七殺, 甲偏印]
  stage: string; // 絕, 臨官, 長生, 沐浴
  selfSitting: string; // 死, 死, 長生, 絕
  nayin: string; // 山頭火, 白蠟金, 爐中火, 松柏木
  stars: string[]; // [天乙貴人, 德秀貴人, ...]
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
}

export interface ZiweiPalace {
  name: string; // 命宮, 兄弟宮, 夫妻宮, ...
  stars: string[]; // 紫微, 破軍, 天梁, ...
  brightness?: string[]; // 廟, 旺, 得, 平, 陷
  transform?: string; // 祿, 權, 科, 忌
  rangeAge: string; // 5-14, 15-24, ...
  isMainPalace?: boolean;
}

export interface NameGrid {
  heaven: { value: number; type: string; fortune: string }; // 天格
  person: { value: number; type: string; fortune: string }; // 人格
  earth: { value: number; type: string; fortune: string }; // 地格
  outer: { value: number; type: string; fortune: string }; // 外格
  total: { value: number; type: string; fortune: string }; // 總格
}

export interface GeneKeyData {
  code: string; // 35, 5, 63, 64
  sphere: string; // 太陽, 地球, 潛意識太陽, 潛意識地球
  shadow: string; // 飢餓, 急躁, 懷疑, 困惑
  gift: string; // 冒險, 耐心, 探究, 想像力
  siddhi: string; // 體驗, 信任, 覺察, 啟示
}

// Full profile data object for easy references
export const LAI_YI_CHIEH_DATA = {
  name: '探索者',
  englishName: 'Explorer',
  birthData: {
    solar: '保密 (已隱藏)',
    lunar: '保密 (已隱藏)',
    bazi_calc_time: '1995年 (真太陽時)',
    name_calc_time: '姓名學專屬輸入 (已隱藏)'
  },
  
  // 1. Astro Placements
  astrology: {
    placements: [
      { planet: '太陽 (Sun)', sign: '雙子座', degree: "12°49'50\"", house: 12 },
      { planet: '月亮 (Moon)', sign: '獅子座', degree: "13°12'30\"", house: 3 },
      { planet: '水星 (Mercury)', sign: '雙子座', degree: "14°52'07\"", house: 1, isRetrograde: true },
      { planet: '金星 (Venus)', sign: '金牛座', degree: "21°44'38\"", house: 12 },
      { planet: '火星 (Mars)', sign: '處女座', degree: "04°18'18\"", house: 4 },
      { planet: '木星 (Jupiter)', sign: '射手座', degree: "10°12'29\"", house: 6, isRetrograde: true },
      { planet: '土星 (Saturn)', sign: '雙魚座', degree: "23°53'07\"", house: 10 },
      { planet: '天王星 (Uranus)', sign: '水瓶座', degree: "00°07'35\"", house: 8, isRetrograde: true },
      { planet: '海王星 (Neptune)', sign: '魔羯座', degree: "25°12'01\"", house: 8, isRetrograde: true },
      { planet: '冥王星 (Pluto)', sign: '天蠍座', degree: "28°50'27\"", house: 6, isRetrograde: true },
      { planet: '上升 (Ascendant)', sign: '雙子座', degree: "14°34'15\"", house: 1 },
      { planet: '天頂 (Midheaven)', sign: '雙魚座', degree: "00°27'49\"", house: 10 },
      { planet: '凱龍星 (Chiron)', sign: '處女座', degree: "20°14'25\"", house: 4 }
    ] as AstroPlacement[],
    summary: '太陽雙子、上升雙子、水星逆行一宮，月亮獅子三宮。這是一個極致發達的「超級大腦」配置，心智活動旺盛，渴望看見與表達。'
  },

  // 2. Human Design Profile
  humanDesign: {
    type: '顯示者 (Manifestor)',
    profile: '2/4 (隱士/機會網絡)',
    definition: '一分人',
    authority: '情緒中心權威',
    strategy: '告知 (To Inform)',
    notSelf: '憤怒 (Anger)',
    signature: '平靜 (Peace)',
    incarnationCross: '右邊角度交叉意識2 (35/5 | 63/64)',
    arrows: '四箭全左 (Quad Left) — 極致戰略家腦袋',
    channels: [
      { code: '35-36', name: '無常/體驗通道', type: '感性/渴望體驗一切可能' },
      { code: '13-33', name: '浪子/記錄見證通道', type: '最佳傾聽者，歸納生命智慧' }
    ],
    centers: {
      defined: ['情緒中心', '喉嚨中心', 'G中心'],
      undefined: ['薦骨中心 (空白)', '根部中心', '直覺中心', '意志力中心', '邏輯中心', '頭腦中心']
    },
    geneKeys: [
      { code: '35', sphere: '太陽 (意志)', shadow: '飢餓 (Hunger)', gift: '冒險 (Adventure)', siddhi: '體驗 (Boundlessness)' },
      { code: '5', sphere: '地球 (穩固)', shadow: '急躁 (Impatience)', gift: '耐心 (Patience)', siddhi: '信任 (Timelessness)' },
      { code: '63', sphere: '潛意識太陽', shadow: '懷疑 (Doubt)', gift: '探究 (Inquiry)', siddhi: '覺察 (Truth)' },
      { code: '64', sphere: '潛意識地球', shadow: '困惑 (Confusion)', gift: '想像力 (Imagination)', siddhi: '啟示 (Epiphany)' }
    ] as GeneKeyData[]
  },

  // 3. Bazi Pillars
  bazi: {
    pillars: [
      {
        title: '年柱',
        stem: '乙',
        stemTenGod: '正印',
        branch: '亥',
        branchHidden: ['王 (七殺)', '甲 (偏印)'],
        stage: '絕',
        selfSitting: '死',
        nayin: '山頭火',
        stars: ['天乙貴人', '德秀貴人', '月德合', '六甲空亡', '國印貴人', '劫煞'],
        element: 'wood'
      },
      {
        title: '月柱',
        stem: '辛',
        stemTenGod: '正財',
        branch: '巳',
        branchHidden: ['丙 (比肩)', '庚 (偏財)', '戊 (食神)'],
        stage: '臨官',
        selfSitting: '死',
        nayin: '白蠟金',
        stars: ['天廚貴人', '德秀貴人', '天德貴人', '天官貴人', '金輿', '祿神', '詞館', '驛馬', '亡神'],
        element: 'metal'
      },
      {
        title: '日柱',
        stem: '丙',
        stemTenGod: '日主 (元女)',
        branch: '寅',
        branchHidden: ['甲 (偏印)', '丙 (比肩)', '戊 (食神)'],
        stage: '長生',
        selfSitting: '長生',
        nayin: '爐中火',
        stars: ['福星貴人', '天德合', '紅豔煞', '勾絞煞', '學堂', '亡神', '孤辰'],
        element: 'fire'
      },
      {
        title: '時柱',
        stem: '辛',
        stemTenGod: '正財',
        branch: '卯',
        branchHidden: ['乙 (正印)'],
        stage: '沐浴',
        selfSitting: '絕',
        nayin: '松柏木',
        stars: ['太極貴人', '福星貴人', '德秀貴人', '天德貴人', '童子煞', '將星', '桃花'],
        element: 'metal'
      }
    ] as BaziPillar[],
    summary: '丙火日主坐寅木長生，帶強大印星（木）和正財星（辛金）。火照金輝，既有熱情與靈感，又具備極高金錢敏銳度與質感品味。'
  },

  // 4. Ziwei Dou Shu
  ziwei: {
    palaces: [
      { name: '命宮 (卯)', stars: ['祿存', '龍池'], brightness: ['廟', ''], rangeAge: '5-14', isMainPalace: true },
      { name: '兄弟宮 (寅)', stars: ['破軍', '陀羅', '地空', '三台', '天才', '孤辰'], brightness: ['得', '陷', '平', '平', '廟', ''], rangeAge: '115-124' },
      { name: '夫妻宮 (丑)', stars: ['鈴星', '天刑', '蜚廉'], brightness: ['得', '陷', ''], rangeAge: '105-114' },
      { name: '子女宮 (子)', stars: ['紫微', '天府', '火星', '八座', '恩光', '天貴', '解神', '天空'], brightness: ['平', '旺', '陷', '平', '廟', '廟', '廟', ''], transform: '化科', rangeAge: '95-104' },
      { name: '財帛宮 (亥)', stars: ['天機', '年解', '鳳閣'], brightness: ['平', '得', '旺'], transform: '化祿', rangeAge: '85-94' },
      { name: '疾厄宮 (戌)', stars: ['七殺', '天喜', '天使', '寡宿'], brightness: ['廟', '廟', '陷', ''], rangeAge: '75-84' },
      { name: '遷移宮 (酉)', stars: ['太陽', '天梁', '臺輔', '旬空', '破碎'], brightness: ['平', '得', '', '', ''], transform: '化權', rangeAge: '65-74' },
      { name: '交友宮 (申)', stars: ['武曲', '天相', '左輔', '地劫', '天福', '天傷', '副旬', '劫煞'], brightness: ['得', '廟', '廟', '廟', '', '', '', ''], rangeAge: '55-64' },
      { name: '官祿宮 (未)', stars: ['天同', '巨門', '文昌', '文曲', '天月', '截空', '天哭', '華蓋'], brightness: ['不', '不', '利', '旺', '', '', '', ''], rangeAge: '45-54' },
      { name: '田宅宮 (午)', stars: ['貪狼', '右弼', '天廚', '副截', '陰煞', '龍德'], brightness: ['旺', '旺', '廟', '', '', ''], rangeAge: '35-44' },
      { name: '福德宮 (巳)', stars: ['太陰', '天馬', '天姚', '封誥', '天巫', '天虛'], brightness: ['陷', '平', '平', '平', '平', '平'], transform: '化忌', rangeAge: '25-34' },
      { name: '父母宮 (辰)', stars: ['廉貞', '天府', '擎羊', '紅鸞', '天官', '大耗'], brightness: ['利', '廟', '廟', '廟', '', ''], rangeAge: '15-24' }
    ] as ZiweiPalace[]
  },

  // 5. Name Numerology
  nameNumerology: {
    name: '隱藏姓名',
    strokes: {
      lai: 16,
      yi: 5,
      chieh: 11
    },
    grid: {
      heaven: { value: 17, type: '金', fortune: '吉' },
      person: { value: 21, type: '木', fortune: '吉' },
      earth: { value: 16, type: '土', fortune: '吉' },
      outer: { value: 12, type: '木', fortune: '凶' },
      total: { value: 32, type: '木', fortune: '吉' }
    } as NameGrid,
    analysis: '總格32木大吉，主人緣極佳、能得貴人扶持、春日花開般的發達命格。人格21木亦大吉（獨立領導、立業成名）；地格16土大吉（家庭美滿、厚重安穩）。'
  }
};
