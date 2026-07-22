import React, { useState } from 'react';
import { Sparkles, DollarSign, Briefcase, TrendingUp, Compass, AlertTriangle, Users, Lightbulb, ShieldCheck, HelpCircle, ArrowRight, Calendar, Coins } from 'lucide-react';

export default function WealthCareerView() {
  const [selectedTimeline, setSelectedTimeline] = useState<'35-44' | '2026' | '2027'>('35-44');

  // Interactive defense score calculator
  const [avoidJointVenture, setAvoidJointVenture] = useState<boolean>(false);
  const [delayedGratification, setDelayedGratification] = useState<boolean>(false);
  const [legalAudit, setLegalAudit] = useState<boolean>(false);

  const calculateDefenseScore = () => {
    let score = 30; // base score
    if (avoidJointVenture) score += 25;
    if (delayedGratification) score += 20;
    if (legalAudit) score += 25;
    return score;
  };

  const getDefenseLabel = (score: number) => {
    if (score < 50) return { title: '破財高危區 (比劫奪財) ⚠️', desc: '在 2026-2027 年與 35 大限中，妳容易因面子、義氣或對暴利的貪念，而做出不理性的合資決定。', color: 'text-rose-400 bg-rose-500/10' };
    if (score < 80) return { title: '中等風險防線 🛡️', desc: '已具備基本危機意識。但若面對 4 爻熟人圈子的商業邀約，仍有退讓、不忍拒絕的隱患。', color: 'text-amber-400 bg-amber-500/10' };
    return { title: '鐵壁防守（完美守財）👑', desc: '恭喜！妳已完美啟動「地格16土」的厚重鎖財力與「顯示者」的主權意識。貪狼大限將轉化為真正的黃金創富期！', color: 'text-emerald-400 bg-emerald-500/10' };
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-amber-400 font-display flex items-center gap-1.5 uppercase tracking-wider">
              <DollarSign className="w-4 h-4" />
              Wealth & Career Blueprint
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-mystic">智慧變現與人脈聚財：不靠體力印鈔</h2>
            <p className="text-xs md:text-sm text-slate-400">
              財帛宮天機化祿、正財格辛金雙透、機會網絡 4 爻天賦
            </p>
          </div>
          
          <div className="flex bg-slate-900 border border-slate-800 p-3 rounded-xl max-w-xs">
            <p className="text-xs text-slate-400 leading-normal">
              你絕對不適合傳統的重複性苦幹實幹。你的<strong>腦袋、企劃、行銷點子與高端人脈</strong>才是你真正的金礦。
            </p>
          </div>
        </div>
      </div>

      {/* NEW SECTION: 35大限與 2026-2027 流年預警核心 */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-rose-400 font-display tracking-widest flex items-center gap-1.5 uppercase">
                <Calendar className="w-4 h-4 text-rose-400" />
                Hidden Wealth Warning & Strategy
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-mystic">
                35歲前流年（2026-2027）與 35-44歲大限防守線
              </h3>
              <p className="text-xs text-slate-400">
                貪狼黃金大限的致命誘惑與「比劫奪財」赤字防線
              </p>
            </div>

            {/* Selector buttons */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-center">
              <button
                onClick={() => setSelectedTimeline('35-44')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedTimeline === '35-44' ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                35-44歲 貪狼大限
              </button>
              <button
                onClick={() => setSelectedTimeline('2026')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedTimeline === '2026' ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                2026 丙午流年
              </button>
              <button
                onClick={() => setSelectedTimeline('2027')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedTimeline === '2027' ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                2027 丁未流年
              </button>
            </div>
          </div>

          {/* Dynamic Content Renderer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              {selectedTimeline === '35-44' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    田宅宮「貪狼旺 + 右弼」
                  </div>
                  <h4 className="text-base font-bold text-slate-200">
                    本命黃金十年：野心勃勃的擴張與資產重組期
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    35至44歲，妳的十年大限進入「田宅宮」午宮。這裡坐守著旺吉的「貪狼星」與「右弼」。
                    這是一個<strong>極度繁華、慾望高漲、自帶龐大商業野心與地產投資機遇</strong>的黃金十年。
                    妳在此限會產生強烈的「不甘於現狀、渴望幹大事」的衝動，在房地產、高端品味事業、以及大跨度的知識變現上運勢極佳。
                  </p>
                  <p className="text-xs text-rose-300 leading-relaxed font-sans border-l-2 border-rose-500 pl-3">
                    ❌ <strong>危險：</strong> 「貪狼」是第一桃花與慾望星。若無節制，極易陷入投機、豪賭、過度樂觀的擴張，而導致慘烈的資金斷鏈。
                  </p>
                </div>
              )}

              {selectedTimeline === '2026' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-300">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    丙午年流年預警
                  </div>
                  <h4 className="text-base font-bold text-slate-200">
                    「丙午比劫旺地」：大火滔天，防合作奪財與面子買單
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    2026丙午年，是丙火日主（妳自己）在流年上碰到極旺的「比肩、劫財」。
                    此時，身邊會突然湧現許多合作、合資項目（多半是4爻朋友熟人引薦），看似天衣無縫、暴利誘人。
                    但因為流年比劫極旺，這叫<strong>「比劫奪財」</strong>，代表所有的利潤都會被合夥人或不可控競爭蠶食，且極易因為面子、好勝心大筆砸錢而深陷赤字。
                  </p>
                  <p className="text-xs text-amber-300 leading-relaxed font-sans">
                    🛡️ <strong>絕對守則：</strong> 2026 年「不盲目擴張、不輕信熟人合夥」。只做自己說了算的「單人顯示者」項目。
                  </p>
                </div>
              )}

              {selectedTimeline === '2027' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-300">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    丁未年流年預警
                  </div>
                  <h4 className="text-base font-bold text-slate-200">
                    「丁未劫財夾帶」：情緒波動消費與隱性財富漏洞
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    2027丁未年，為「劫財」星主導。這一年妳的物慾與精神壓力都會達到臨界點。
                    受到「太陰化忌、天馬」在福德宮（25-34大限尾聲）的劇烈拉扯，妳極易產生「報復性、療癒性」的奢侈消費。
                    或因為心軟（外格12、九型2號人），去替不值得的人承擔債務、提供無償資金支持，導致嚴重的隱性財富流失。
                  </p>
                  <p className="text-xs text-amber-300 leading-relaxed font-sans">
                    🛡️ <strong>絕對守則：</strong> 對一切非必要支出實施「72小時延遲法則」。對外借款「一概婉拒」，設定冷酷邊界。
                  </p>
                </div>
              )}
            </div>

            {/* Right Panel: Interactive Risk Defense Checklist */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-slate-850 space-y-4">
              <span className="text-[10px] text-amber-400 font-mono uppercase block">流年防破財「絕對防守線」檢查</span>
              
              <div className="space-y-3">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={avoidJointVenture}
                    onChange={(e) => setAvoidJointVenture(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-amber-400 focus:ring-amber-400/20 mt-0.5"
                  />
                  <span>
                    <strong>拒絕合資 (2026核心)：</strong> 2026不與任何人進行股權、資金合夥，寧可錯過也不踩雷。
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={delayedGratification}
                    onChange={(e) => setDelayedGratification(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-amber-400 focus:ring-amber-400/20 mt-0.5"
                  />
                  <span>
                    <strong>延時冷卻 (2027消費)：</strong> 奢侈品、大額投資一律靜置 72 小時以上，用理智熄滅情緒火花。
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={legalAudit}
                    onChange={(e) => setLegalAudit(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-amber-400 focus:ring-amber-400/20 mt-0.5"
                  />
                  <span>
                    <strong>硬性合約與審計：</strong> 即使跟熟人（4爻）合作，也必須使用「天刑」級別的剛硬合約，絕不委協。
                  </span>
                </label>
              </div>

              {/* Dynamic defense score feedback */}
              <div className={`p-4 rounded-xl space-y-1.5 transition-all ${getDefenseLabel(calculateDefenseScore()).color}`}>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">防守安全指數</span>
                  <span className="text-xs font-mono font-black">{calculateDefenseScore()}%</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full transition-all duration-500"
                    style={{ width: `${calculateDefenseScore()}%` }}
                  />
                </div>
                <p className="text-[10.5px] leading-relaxed">
                  {getDefenseLabel(calculateDefenseScore()).desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Career Paths */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-slate-200">專屬你的三大「黃金職涯路徑」</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-880 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold font-mono text-xs rounded">
                PATH A: LOGIC & SYSTEM
              </span>
              <h4 className="text-base font-bold text-slate-200">趨勢與系統架構者</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>核心能力：</strong> 四箭全左超級大腦 ✕ 雙子星群
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                如 <strong>AI 工作流導入、數位轉型 PM、產品系統架構師</strong>。發揮你極致的邏輯整合能力，去規劃項目的底層流暢邏輯，引進最先進的效率技術，然後將繁瑣維護交給團隊。
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-880 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold font-mono text-xs rounded">
                PATH B: LUXURY & DESIGN
              </span>
              <h4 className="text-base font-bold text-slate-200">質感美學的幕後操盤手</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>核心能力：</strong> 金星金牛落 12 宮 ✕ 八字正財格
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                如 <strong>品牌形象總監、空間美學顧問、高端美感策劃</strong>。發揮你對實體物質、感官體驗與細節品味的極致直覺，為產品、品牌或實體空間進行高毛利的品味賦能。
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-880 flex flex-col justify-between hover:border-amber-500/30 transition-all">
            <div className="space-y-3">
              <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold font-mono text-xs rounded">
                PATH C: KNOWLEDGE
              </span>
              <h4 className="text-base font-bold text-slate-200">獨立知識與靈性變現者</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>核心能力：</strong> 12宮神秘天賦 ✕ 4爻機會網絡
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                如 <strong>利基型社群主理人、身心靈系統導師、獨立顧問</strong>。利用你強大的私域信任磁場與驚人的玄學解碼天賦，將看似零散的生命體驗和玄學知識，系統化地輸出給你的受眾。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Boss Rules (Manifestor style) */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded">
            <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
            顯示者的當老闆鐵則 (Kingmaker Entrepreneurship)
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-mystic">只發起，不收尾：顯示者的造王者之路</h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-4xl font-sans">
            你是薦骨空白的顯示者。這意味著你適合<strong>「做一陣，休一陣」的專案式或高利潤的爆發式商業模式</strong>。
            千萬別妄想去幹需要天天打卡、凡事親力親為的勞力型、超長戰線創業，否則必定中途崩潰。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1.5">
              <span className="text-xs text-amber-200 font-bold block">1. 買別人的時間來執行</span>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                你的工作是「當個發起人和大腦」。花錢聘請有薦骨的「生產者」神隊友去執行日常的琐碎維護，你只負責提供金點子和開拓方向。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1.5">
              <span className="text-xs text-amber-200 font-bold block">2. 大膽尊榮定價</span>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                你的點子、美感、和諮詢具有極高的商業價值。拒絕一切人情勒索的削價競爭，大膽開出匹配你高階品味與專業的<strong>尊榮高端價</strong>。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1.5">
              <span className="text-xs text-amber-200 font-bold block">3. 封閉式 / 預約制行銷</span>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                「越難買越有人要」。利用你 12 宮的隱密質感和金金牛的私密要求，採用封閉的付費社群或高端預約制，保護你的能量場不被雜質干擾。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Wisdom and Warning Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Wealth Tips */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-400" />
            錢脈合流：聚財實戰指南
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-mono flex-shrink-0 mt-0.5">
                A
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-200 block">人脈就是錢脈 (4爻黃金通路)</span>
                <p className="text-xs text-slate-400 leading-normal font-sans">
                  你最優質、高額的賺錢機會，幾乎都來自於<strong>「熟人介紹或懂你價值的小圈子」</strong>。用心經營你的高質量社交小圈圈，財富網絡會自然而然向外鋪開。
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 text-xs flex items-center justify-center font-mono flex-shrink-0 mt-0.5">
                B
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-200 block">把智慧包裝為「大腦外包顧問」</span>
                <p className="text-xs text-slate-400 leading-normal font-sans">
                  將你跨流派的分析邏輯、AI 導入工作流，當作一套解決方案賣給企業。你賣點子與系統，執行細節讓他們自己解決，這能保護你空白薦骨。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wealth Leaks */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4 border-l-4 border-l-amber-500">
          <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            金錢防漏：避坑防身手冊
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 text-xs flex items-center justify-center font-mono flex-shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-200 block">嚴格防堵「情緒性消費」</span>
                <p className="text-xs text-slate-400 leading-normal font-sans">
                  你的月亮獅子與金星金牛有時候會藉由大筆支出、購買高CP或昂貴之物來填補情緒起伏的空虛。對於大筆花銷，請務必強制執行<strong>「72小時延遲冷卻法則」</strong>。
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 text-xs flex items-center justify-center font-mono flex-shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-200 block">職場必修：用「告知」向上管理</span>
                <p className="text-xs text-slate-400 leading-normal font-sans">
                  不要默默做事期待老闆發現。身為顯示者，養成習慣向上級或夥伴匯報你的專案進度：<strong>不求許可，但隨時同步信息</strong>。這會極大增加他們對你的信任 and 重用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
