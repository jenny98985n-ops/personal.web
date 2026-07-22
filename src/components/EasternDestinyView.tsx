import React, { useState } from 'react';
import { LAI_YI_CHIEH_DATA } from '../types';
import { Flame, Sparkles, AlertCircle, HelpCircle, Award, Compass, Brain, Heart, Shield } from 'lucide-react';
import FullReportView from './FullReportView';
import CoreKeyPointsSummary from './CoreKeyPointsSummary';

const getGridAreaClass = (palaceName: string) => {
  if (palaceName.includes('福德宮') || palaceName.includes('福德')) return 'col-start-1 row-start-1';
  if (palaceName.includes('田宅宮') || palaceName.includes('田宅')) return 'col-start-2 row-start-1';
  if (palaceName.includes('官祿宮') || palaceName.includes('官祿')) return 'col-start-3 row-start-1';
  if (palaceName.includes('交友宮') || palaceName.includes('交友')) return 'col-start-4 row-start-1';
  if (palaceName.includes('遷移宮') || palaceName.includes('遷移')) return 'col-start-4 row-start-2';
  if (palaceName.includes('疾厄宮') || palaceName.includes('疾厄')) return 'col-start-4 row-start-3';
  if (palaceName.includes('財帛宮') || palaceName.includes('財帛')) return 'col-start-4 row-start-4';
  if (palaceName.includes('子女宮') || palaceName.includes('子女')) return 'col-start-3 row-start-4';
  if (palaceName.includes('夫妻宮') || palaceName.includes('夫妻')) return 'col-start-2 row-start-4';
  if (palaceName.includes('兄弟宮') || palaceName.includes('兄弟')) return 'col-start-1 row-start-4';
  if (palaceName.includes('命宮'))   return 'col-start-1 row-start-3';
  if (palaceName.includes('父母宮') || palaceName.includes('父母')) return 'col-start-1 row-start-2';
  return '';
};

const cleanPalaceName = (name: string) => {
  const match = name.match(/^(.+?)\s*\((.+?)\)$/);
  if (match) {
    let nameOnly = match[1];
    if (nameOnly.endsWith('宮') && nameOnly.length > 2) {
      nameOnly = nameOnly.slice(0, -1);
    }
    return { nameOnly, branchOnly: match[2] };
  }
  return { nameOnly: name, branchOnly: '' };
};

const isMajorStar = (starName: string) => {
  const main14 = [
    '紫微', '天府', '武曲', '天相', '太陽', '天梁', '廉貞', '天同', '巨門', '天機', '太陰', '貪狼', '七殺', '破軍'
  ];
  const mainOthers = [
    '祿存', '文昌', '文曲', '左輔', '右弼', '火星', '鈴星', '擎羊', '陀羅', '地空', '地劫', '天刑', '天馬'
  ];
  return main14.includes(starName) || mainOthers.includes(starName);
};

const getStarColorClass = (starName: string) => {
  const main14 = [
    '紫微', '天府', '武曲', '天相', '太陽', '天梁', '廉貞', '天同', '巨門', '天機', '太陰', '貪狼', '七殺', '破軍'
  ];
  const luckyStars = ['文昌', '文曲', '左輔', '右弼', '天魁', '天鉞'];
  const harmfulStars = ['火星', '鈴星', '擎羊', '陀羅', '地空', '地劫', '天刑'];
  const specialStars = ['祿存', '天馬'];

  if (main14.includes(starName)) return 'text-amber-400';
  if (luckyStars.includes(starName)) return 'text-teal-400';
  if (harmfulStars.includes(starName)) return 'text-rose-400 font-normal';
  if (specialStars.includes(starName)) return 'text-pink-400';
  return 'text-slate-400 text-[10px]';
};

const getStarTransform = (palaceName: string, starName: string) => {
  if (palaceName.includes('福德宮') && starName === '太陰') return '忌';
  if (palaceName.includes('遷移宮') && starName === '太陽') return '權';
  if (palaceName.includes('財帛宮') && starName === '天機') return '祿';
  if (palaceName.includes('子女宮') && starName === '紫微') return '科';
  return null;
};

export default function EasternDestinyView() {
  const baziData = LAI_YI_CHIEH_DATA.bazi;
  const ziweiData = LAI_YI_CHIEH_DATA.ziwei.palaces;
  
  const [selectedBaziPillar, setSelectedBaziPillar] = useState<string | null>('日柱');
  const [selectedZiweiPalace, setSelectedZiweiPalace] = useState<string | null>('命宮 (卯)');

  const getBaziAnalysis = (pillarTitle: string) => {
    switch (pillarTitle) {
      case '日柱':
        return {
          title: '日主「丙火」的耀眼烈日 (丙寅日柱)',
          desc: '在八字十天干中，妳的日主是「丙火」，且出生在初夏的「巳月」（建祿格），能量極度強大。丙火代表天上的太陽，妳天生熱情、慷慨，有一種想把光芒照亮並溫暖所有人的本能，走到哪裡都自帶女王般的氣場與光芒。坐下「寅木（偏印）」更代表天生具有逢凶化吉的貴人守護與學習渴望。\n\n💡 致命盲點（太陽的過勞）：太陽雖強大，但若 24 小時不落山，不僅別人會被烤焦，太陽自己也會耗盡能量。這就是妳常覺得「心力交瘁」的五行根源。最完美的太陽是懂得日落的，妳必須學會收起光芒，給自己足夠的獨處與斷電時間。',
          synergy: '🌟 西東共振： 完美對應月亮獅子與雙子座群星！求知與表演欲是妳的生命燃料。'
        };
      case '月柱':
        return {
          title: '月柱「辛巳」：極度務實的「正財格」 ✕ 巳火比肩祿神',
          desc: '月干透出「辛金正財」，代表你對金錢、品質與安全感有着極高的敏銳度，重視高品質的生活享受，這完全印證了你星盤中「金星金牛」對質感的執著！\n\n「一丙合兩辛」的實用主義：丙火是太陽，辛金是精緻珠寶。在天干中「丙辛相合」，代表妳（太陽）本能地想去抱住精緻的財富與價值（辛金）。不論在事業或感情上，都極度看重「產值、ROI與實際收益」，浪漫不能當飯吃。\n\n地支「巳亥相沖」：年柱亥與月柱巳相沖，年月相沖代表早年生活變動、不安於室，強烈驅使你主動出去闖蕩、冒險，打破安逸的格局。',
          synergy: '🌟 西東共振： 完美對應金星金牛與 35-36 體驗通道！財務和生活底層極度追求穩固和高質感。'
        };
      case '年柱':
        return {
          title: '年柱「乙亥」：乙木正印福德 ✕ 亥水七殺與天乙貴人',
          desc: '年干透出「乙木正印」，正印代表著母親與家族帶來的福德、保護力以及對無形智慧的吸收天賦。地支「亥水」是妳的天乙貴人與七殺，代表妳在社交和外界環境中常能逢凶化吉，有天生的危機處理能力，冥冥之中總能遇到幫妳開路的人。\n\n地支「巳亥沖」：年月相沖也代表在早年的成長環境中，遭遇了一股相反的力量（亥水七殺）在壓制、管束妳。這賦予了妳極高的敏銳度與危機意識，但也讓妳的心性較為不平靜，時常有一種衝破現狀、向外發展、證明自己的驛馬星動能。',
          synergy: '🌟 西東共振： 呼應了第四宮火星凱龍合相的童年創傷！早年的管束與壓抑成了妳長大後向外破局的動力。'
        };
      case '時柱':
        return {
          title: '時柱「辛卯」：正財重逢 ✕ 太極貴人、思維過載',
          desc: '時干再透「辛金正財」，且時支為「卯木正印」。這代表你到了晚年或事業中後期，財運依然極佳，點子依然能不斷變現。而時支卯木坐擁「太極貴人、德秀貴人、桃花、將星」。這是一顆極強的「玄學靈感星」，意指妳極度適合專研神祕學、心理學、命理或心靈事業，能將美感（桃花）與靈性（太極）完美融合，點化眾人。\n\n超級大腦的代價（滿盤印星）：妳的八字地支有「寅、卯、亥」，天干有「乙」，五行「木（印星）」極度強大。當想法（印星）太多太滿時，就會壓抑妳的行動力與表達力（木多火塞），導致「高神經質焦慮」與「決策癱瘓」。妳在行動前，大腦會進行無數次的模擬考量，因為妳太害怕出錯了（印星的過度保護）。',
          synergy: '🌟 西東共振： 呼應四箭全左與雙子座水星逆行！代表你越往後走，越會理所當然地活成一個充滿魅力的「系統化心靈導師」。'
        };
      default:
        return { title: '', desc: '', synergy: '' };
    }
  };

  const getZiweiAnalysis = (palaceName: string) => {
    switch (palaceName) {
      case '命宮 (卯)':
        return {
          title: '命宮在卯（無主星）— 變色龍般的超強適應力',
          text: '命宮無主星代表你天生沒有「非得怎樣不可」的執拗偏執。你像是一塊乾淨的海綿，能輕易吸收和融入任何環境，具備極強的環境應變天賦。這完美對應了你「太陽、上升雙子座」的適應力！你一生的課題在於「在變動中找到自己的核心錨點」，不要因為太容易配合、吸收別人的觀點，而迷失了自己的本質。',
          guide: '寫下「絕對不妥協清單」，在外界拉扯你時，以此清單穩固你的靈魂，不要無休止地「配合」外界。'
        };
      case '夫妻宮 (丑)':
        return {
          title: '夫妻宮在丑（空宮，借對宮同巨昌曲）— 尊重絕對界線的智識導師',
          text: '你的夫妻宮是「空宮」，代表在感情初期你容易配合對方，沒有太多僵化的預設立場。但空宮內坐「鈴星、天刑、蜚廉」三煞，這代表你對伴侶有著極度嚴格的「隱形考核標準（天刑）」。結合西洋星盤第七宮（伴侶宮）射手座與借對宮官祿宮的「天同巨門昌曲」，這個伴侶必須在智識上能讓你折服，口條極佳且具備高才華，像是一個人生導師能帶著你拓寬視野。',
          guide: '對方必須極度懂得「溝通與尊重界線」，因為一旦他觸犯了你的原則，你的「鈴星（冷戰）」與「蜚廉（決裂）」就會瞬間啟動。練習用對宮「巨門」的正面口語表達來溝通，而不是用煞星搞冷戰。'
        };
      case '財帛宮 (亥)':
        return {
          title: '財帛宮「天機化祿、鳳閣」— 點子就是你的印鈔機',
          text: '天機星代表大腦、計謀、企劃和思維；化祿代表福澤、順利、金錢的流通。天機星在財帛宮化祿，是「靠腦袋、企劃、溝通設計輕鬆賺錢」的頂配格局！你不適合走傳統的苦幹實幹體力路線，你的每一個奇思妙想、新穎專案、或品牌形象，都有著極高的商業變現價值。鳳閣更賦予了你高尚精緻的藝術與品味變現力。',
          guide: '學會理直氣壯地為自己的腦力與專業定價。多用嘴巴、用企劃賺錢，人脈（4爻機會網絡）是你的最佳變現通路。'
        };
      case '遷移宮 (酉)':
        return {
          title: '遷移宮「太陽、天梁、太陰、祿存」— 冥冥之中的庇護與玄學直覺',
          text: '遷移宮代表你出外發展、向外探尋的能量。天梁是一顆極強的「蔭星（宗教星、逢凶化吉星）」，太陽 and 太陰同宮代表「日月照耀」。你一出外或面臨變革時，就會自動開啟極強的直覺（第六感），且冥冥之中總有強大的高靈、家族長輩或宇宙力量在保護你，祿存更代表出外賺錢機會多。對宮照射命宮，亦帶給你慈悲、溫暖的渡人氣場。',
          guide: '信任你在差旅、出門在外或接觸神祕學時感受到的「第一直覺」。它是你的靈性護法在對你說話。'
        };
      case '福德宮 (巳)':
        return {
          title: '福德宮「太陰化忌、天馬」— 25-34大限的內在精神追求與心智重塑',
          text: '福德宮代表精神享受、潛意識與晚年福報。太陰星化忌落入，代表你常常在夜深人靜時會陷入「精神焦慮、對安全感的深度懷疑、或大腦超載想太多」（與12宮太陽雙子、水逆共振）。這顆太陰化忌正好是你 25 至 34 歲這十年的「大限宮位」。這代表這十年你的生命重心就是「精神的內在探索與心靈投資」。',
          guide: '這十年不要強求向外瘋狂擴張。大膽投資你的腦袋與靈性心靈，它能幫你消融太陰化忌的焦慮，為下一階段的大爆發打下基石。'
        };
      default:
        return {
          title: `${palaceName} 解析`,
          text: `此宮位坐落著特定的吉星或凶星，反映了你在相應人生維度（例如： ${palaceName.split(' ')[0]}）的氣場運作與潛在課題。`,
          guide: '點選其他核心宮位（命宮、夫妻宮、財帛宮、遷移宮、福德宮）可直接解鎖 YieJie 的獨家紫微盤深層解碼！'
        };
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Eastern Destiny Header */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-amber-400 font-display flex items-center gap-1.5 uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              Eastern Metaphysics
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-mystic">東方全息天命：八字與紫微共振</h2>
            <p className="text-xs md:text-sm text-slate-400">
              整合「丙火日主正財格」與「命宮無主星對宮日梁」天賦
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 font-mono border border-amber-500/20">丙寅日柱</span>
            <span className="text-xs px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 font-mono border border-teal-500/20">天機化祿</span>
            <span className="text-xs px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 font-mono border border-rose-500/20">太陰大限</span>
          </div>
        </div>
      </div>

      {/* ⚡️ 東方命理（八字紫微）懶人包速讀元件 */}
      <CoreKeyPointsSummary
        domainName="八字與紫微"
        themeColor="amber"
        items={[
          {
            icon: Sparkles,
            tag: "紫微命宮: 命無正星",
            title: "命無正星 ✕ 借對宮太陽太陰",
            subtitle: "變色龍般的靈性吸納力",
            summary: "命宮無主星代表個人極具彈性，不執著固化心態，能吸收各路精華。借對宮日月能量，光芒與深邃兼備。",
            actionAdvice: "不盲從單一派別，善用吸納與整合天賦，打造屬於自己的獨特體系。"
          },
          {
            icon: Flame,
            tag: "八字日主: 丙火",
            title: "丙火日主 ✕ 身弱傷官佩印",
            subtitle: "熱情外放與智慧護體",
            summary: "丙火熱情有感染力，傷官天賦讓才華橫溢、講話一針見血；「佩印」代表需靠知識與身心靈滋養護體。",
            actionAdvice: "才華輸出（傷官）過度時容易耗傷精神，需隨時補充讀書學習與靈性修復（印星）。"
          },
          {
            icon: Brain,
            tag: "官祿宮: 天機巨門",
            title: "天機巨門 ✕ 靈魂駭客智囊",
            subtitle: "憑智慧與口才立足職場",
            summary: "天機主靈敏策略，巨門主分析口才。適合從事顧問、命理諮詢、自媒體、寫作與策略規劃。",
            actionAdvice: "將直覺與分析整理成 SOP 課程或諮詢報告，能最大化你的口才與大腦價值。"
          },
          {
            icon: Shield,
            tag: "財帛宮: 太陰化忌",
            title: "太陰化忌 ✕ 財富情緒水流",
            subtitle: "靠知識與美感變現",
            summary: "太陰主財與女性、情緒。化忌代表財務容易受情緒波動影響，宜走「非傳統、靠智慧與質感」的進財路線。",
            actionAdvice: "避免投機風險投資。專注於打造優質智力產品與長期美感品牌。"
          },
          {
            icon: Heart,
            tag: "夫妻宮: 太陽天梁",
            title: "太陽天梁 ✕ 照顧與崇拜共存",
            subtitle: "渴望有擔當與深度的伴侶",
            summary: "夫妻宮太陽天梁代表另一半具備領導力、正直、喜歡照顧人，但同時要求精神層面的高度共鳴。",
            actionAdvice: "保持獨立發光狀態，吸引能理解你精神世界並樂於給予後盾讚賞的優質伴侶。"
          }
        ]}
      />

      {/* Part 1: Bazi Four Pillars Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Bazi Grid */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-200">八字乾坤：四柱能量矩陣</h3>
            <p className="text-xs text-slate-500">點選柱位解鎖專屬的干支、十神與神煞天賦解碼</p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
            {baziData.pillars.map((p) => (
              <button
                key={p.title}
                onClick={() => setSelectedBaziPillar(p.title)}
                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${selectedBaziPillar === p.title ? 'bg-amber-950/30 border-amber-500 ring-1 ring-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 'bg-slate-900/40 border-slate-850 hover:border-slate-800'}`}
              >
                <div>
                  <span className="text-[10px] md:text-xs text-slate-500 font-mono block mb-1">{p.title}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded text-white font-bold block mb-2 ${
                    p.element === 'fire' ? 'bg-rose-600/80' : 
                    p.element === 'wood' ? 'bg-emerald-600/80' : 
                    p.element === 'metal' ? 'bg-amber-600/80' : 'bg-indigo-600/80'
                  }`}>
                    {p.stemTenGod}
                  </span>
                </div>

                <div className="space-y-1 my-3">
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-100 font-mystic">{p.stem}</div>
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-100 font-mystic">{p.branch}</div>
                </div>

                <div className="space-y-1 text-[9px] md:text-xs text-slate-400 border-t border-slate-850 pt-2 font-mono">
                  <div>地勢: {p.stage}</div>
                  <div className="text-amber-300/80 font-semibold truncate">{p.nayin}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 text-xs text-slate-400 leading-relaxed flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-200">「亥巳相沖」的內在動力：</span>
              <p>
                你的年柱「亥（豬）」與月柱「巳（蛇）」相沖。在八字中，年月相沖代表早年生活變動、不安於室，強烈驅使你主動出去闖蕩、冒險，打破安逸的格局。這與你人類圖中的「35-36 體驗通道」完美契合——你天生就是來在變動中淬煉、體驗生命起伏的開創者。
              </p>
            </div>
          </div>
        </div>

        {/* Bazi Detail Decoded Panel */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-900">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              <h3 className="text-base font-bold text-slate-200">八字密碼解密</h3>
            </div>

            {selectedBaziPillar ? (
              <div className="space-y-4 animate-fade-in">
                <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-300 font-mono font-bold rounded uppercase">
                  Pillar Decode
                </span>
                <h4 className="text-base font-bold text-slate-100">{getBaziAnalysis(selectedBaziPillar).title}</h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                  {getBaziAnalysis(selectedBaziPillar).desc}
                </p>
                <div className="p-3 bg-slate-900 border border-slate-850 rounded-xl">
                  <p className="text-xs text-slate-400 font-sans">
                    {getBaziAnalysis(selectedBaziPillar).synergy}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-slate-500 font-mono block mb-1.5 uppercase">神煞與吉星 (Spiritual Stars)</span>
                  <div className="flex flex-wrap gap-1.5">
                    {baziData.pillars.find(p => p.title === selectedBaziPillar)?.stars.map(star => (
                      <span key={star} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center space-y-2">
                <HelpCircle className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="text-xs text-slate-400">點選左側表格中的四柱解鎖 YieJie 的八字奧秘。</p>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-900 mt-6 text-center">
            <span className="text-[10px] text-slate-500 font-mono">
              乾坤八字由文墨天機提供・八字排盤數據 (生辰已保密)
            </span>
          </div>
        </div>
      </div>

      {/* Part 2: Ziwei Dou Shu Traditional Grid */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-400" />
            紫微命盤：12宮大限全息盤
          </h3>
          <p className="text-xs text-slate-400">點選紫微十二宮位，透視 YieJie 的生命發展與星煞配置</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Classical Square 4x4 Grid Layout */}
          <div className="lg:col-span-2 grid grid-cols-4 grid-rows-4 gap-1 sm:gap-2.5 bg-slate-950/40 p-1 sm:p-3 rounded-2xl border border-slate-900 aspect-square w-full max-w-[650px] mx-auto relative shadow-inner">
            {/* 12 Palaces around the perimeter */}
            {ziweiData.map((palace) => {
              const isCore = ['命宮 (卯)', '夫妻宮 (丑)', '財帛宮 (亥)', '遷移宮 (酉)', '福德宮 (巳)'].includes(palace.name);
              const gridAreaClass = getGridAreaClass(palace.name);
              const { nameOnly, branchOnly } = cleanPalaceName(palace.name);
              
              // Pair stars with their brightness
              const starsWithBrightness = palace.stars.map((star, idx) => ({
                name: star,
                brightness: palace.brightness && palace.brightness[idx] ? palace.brightness[idx] : ''
              }));

              const majors = starsWithBrightness.filter(s => isMajorStar(s.name));
              const minors = starsWithBrightness.filter(s => !isMajorStar(s.name));

              return (
                <button
                  key={palace.name}
                  onClick={() => setSelectedZiweiPalace(palace.name)}
                  className={`p-1 sm:p-2 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full w-full ${gridAreaClass} ${
                    selectedZiweiPalace === palace.name 
                      ? 'bg-teal-950/30 border-teal-500 ring-1 ring-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.25)]' 
                      : isCore 
                        ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                        : 'bg-slate-900/40 border-slate-900/60 hover:border-slate-800 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Top Portion: Stars & Brightness */}
                  <div className="flex justify-between items-start gap-0.5 w-full overflow-hidden">
                    {/* Left side: Major stars */}
                    <div className="flex flex-col items-start space-y-0.5">
                      {majors.map((star) => {
                        const transform = getStarTransform(palace.name, star.name);
                        return (
                          <div key={star.name} className="flex items-center gap-0.5 leading-none">
                            <span className={`text-[8px] sm:text-[11px] font-bold tracking-tighter sm:tracking-normal ${getStarColorClass(star.name)}`}>
                              {star.name}
                            </span>
                            {star.brightness && (
                              <span className="text-[7px] sm:text-[8px] text-slate-500 font-normal scale-90 origin-left">
                                ({star.brightness})
                              </span>
                            )}
                            {transform && (
                              <span className={`text-[7px] sm:text-[8px] px-0.5 rounded font-extrabold scale-90 origin-left leading-tight ${
                                transform === '祿' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                                transform === '權' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                                transform === '科' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                                'bg-rose-600 text-white font-extrabold px-1 animate-pulse'
                              }`}>
                                {transform}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Right side: Minor stars */}
                    <div className="flex flex-col items-end space-y-0.5 text-right opacity-80 overflow-hidden">
                      {minors.slice(0, 4).map((star) => (
                        <span key={star.name} className="text-slate-400 text-[7px] sm:text-[9.5px] scale-90 origin-right leading-tight whitespace-nowrap truncate max-w-[32px] sm:max-w-none">
                          {star.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Portion: Age Range & Palace Label */}
                  <div className="w-full flex justify-between items-end border-t border-slate-900/60 pt-0.5 mt-0.5 sm:pt-1 sm:mt-1 font-sans">
                    <span className="text-[7px] sm:text-[9px] text-slate-500 font-mono scale-90 sm:scale-100 origin-left leading-none">
                      {palace.rangeAge}
                    </span>
                    <span className="text-rose-400 font-extrabold text-[8px] sm:text-[11px] flex items-center leading-none">
                      {nameOnly}
                      <span className="text-slate-500 font-mono font-normal text-[7px] sm:text-[9.5px] ml-0.5">
                        {branchOnly}
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Central Info Box (Rows 2-3, Cols 2-3) */}
            <div className="col-start-2 col-end-4 row-start-2 row-end-4 bg-slate-950/90 border border-slate-850 rounded-xl p-1 sm:p-3 flex flex-col justify-between text-center overflow-hidden font-sans shadow-inner select-none">
              <div className="space-y-0.5">
                <div className="text-teal-400 font-extrabold text-[8px] sm:text-xs tracking-wider animate-pulse">
                  文墨天機 ✦ 命盤
                </div>
                <div className="flex justify-center gap-1.5 text-[7px] sm:text-[11px]">
                  <span className="text-slate-200 font-bold">姓名: YieJie</span>
                  <span className="text-pink-400 font-semibold scale-90 sm:scale-100 origin-center">陰女 土五局</span>
                </div>
              </div>

              <div className="space-y-0.5 text-[6.5px] sm:text-[10px] text-slate-300 scale-95 sm:scale-100 origin-center leading-snug">
                <div>農曆: (已隱藏保密)</div>
                <div>陽曆: (已隱藏保密)</div>
                <div className="text-slate-400 text-[6px] sm:text-[9px]">
                  命主：文曲 ✦ 身主：天機
                </div>
              </div>

              {/* Bazi (Right-to-Left writing layout) */}
              <div className="grid grid-cols-4 gap-0.5 sm:gap-1 bg-slate-900/80 p-0.5 sm:p-1 rounded-lg border border-slate-800 text-[6.5px] sm:text-[10px] scale-95 sm:scale-100 origin-center">
                <div>
                  <div className="text-slate-500 text-[6px] sm:text-[8px] scale-90">時</div>
                  <div className="text-amber-300 font-bold leading-tight">辛</div>
                  <div className="text-emerald-400 font-bold leading-tight">卯</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[6px] sm:text-[8px] scale-90">日</div>
                  <div className="text-rose-400 font-bold leading-tight">丙</div>
                  <div className="text-emerald-400 font-bold leading-tight">寅</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[6px] sm:text-[8px] scale-90">月</div>
                  <div className="text-amber-300 font-bold leading-tight">辛</div>
                  <div className="text-rose-400 font-bold leading-tight">巳</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[6px] sm:text-[8px] scale-90">年</div>
                  <div className="text-emerald-400 font-bold leading-tight">乙</div>
                  <div className="text-sky-400 font-bold leading-tight">亥</div>
                </div>
              </div>

              {/* Transform summary */}
              <div className="text-[6px] sm:text-[9px] text-slate-400 border-t border-slate-900 pt-0.5 sm:pt-1 scale-90 sm:scale-100 origin-bottom leading-none">
                <span className="text-emerald-400 font-semibold">祿</span>機 ✦ <span className="text-rose-300 font-semibold">權</span>梁 ✦ <span className="text-purple-400 font-semibold">科</span>紫 ✦ <span className="text-rose-400 font-semibold">忌</span>陰
              </div>
            </div>
          </div>

          {/* Ziwei Detail Decoder */}
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-850 flex flex-col justify-between">
            {selectedZiweiPalace ? (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-xs text-slate-500 font-mono">ZIWEI PALACE DECODE</span>
                </div>
                
                <h4 className="text-sm font-bold text-slate-200">
                  {getZiweiAnalysis(selectedZiweiPalace).title}
                </h4>
                
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {getZiweiAnalysis(selectedZiweiPalace).text}
                </p>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-900 space-y-1.5">
                  <span className="text-[10px] text-teal-400 font-bold block">💡 專屬生活實踐建議：</span>
                  <p className="text-xs text-slate-400 leading-normal font-sans">
                    {getZiweiAnalysis(selectedZiweiPalace).guide}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center text-xs text-slate-500 font-sans">
                請點選左側紫微斗數盤的 <strong>任意宮位</strong> 解鎖對應的天命細節。
              </div>
            )}

            <div className="pt-4 border-t border-slate-850 mt-6 flex items-center gap-2">
              <span className="text-[9px] text-slate-500 font-mono">
                本十年大限（25-34歲）重心在福德宮「太陰化忌、天馬」。重心在於「向內探索與精神投資」。大膽投資你的腦袋與心靈！
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Report Chapter Integration */}
      <div className="pt-8 border-t border-slate-850 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-rose-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-black text-slate-100">全息天書 ✦ 東方玄學紫微八字專屬章節</h3>
              <p className="text-[11px] text-slate-400">邏輯分流：系統自動匯入全息天書中屬於紫微斗數、八字命理與大運流年的深度解構</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-amber-300 bg-slate-950 px-3 py-1 rounded-full border border-amber-400/30 self-start sm:self-auto">
            東方玄學維度 (Destiny)
          </span>
        </div>
        <FullReportView initialCategory="destiny" hideBanner={true} />
      </div>
    </div>
  );
}
