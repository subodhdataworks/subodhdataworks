import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic14VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic14PythonInAnalyticsLesson: React.FC<Topic14VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secShopRef = useRef<HTMLDivElement>(null);
  const secStudentRef = useRef<HTMLDivElement>(null);
  const secPillarsRef = useRef<HTMLDivElement>(null);
  const secLibrariesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec14-title': secTitleRef,
      'sec14-shop': secShopRef,
      'sec14-student': secStudentRef,
      'sec14-pillars': secPillarsRef,
      'sec14-libraries': secLibrariesRef,
      'sec14-takeaway': secTakeawayRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const timer = setTimeout(() => {
        if (onScrollSettled) onScrollSettled();
        if (onSectionRectChange) {
          const rect = targetEl.getBoundingClientRect();
          onSectionRectChange({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          });
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';
  const isHindi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic14-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={3}
        moduleName="Introduction to Programming & Python"
        topicNum={4}
        totalTopicsInModule={6}
        englishTitle="Python in Data Analytics and Real Life"
        hindiTitle="Python in Data Analytics and Real Life"
        subtitleEnglish="Practical deployment of Python in business analytics."
        subtitleHindi="Python in Data Analytics: Real business applications."
        emoji="📊"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec14-title'}
        sectionRef={secTitleRef}
        sectionId="sec14-title"
      />

      {/* ── 2. SMALL SHOP SALES CASE STUDY ── */}
      <div
        ref={secShopRef}
        id="sec14-shop"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec14-shop'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🏪</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी 1: छोटी दुकान की Total Sales (Small Shop Sales)' : 'Case Study 1: Small Shop Total Sales'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'दुकानदार जानना चाहता है कि आज कुल कितने उत्पाद बिके?'
                : 'The shopkeeper wants to know the total number of items sold today:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Table */}
          <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-purple-100/70 text-purple-950 font-bold">
                <tr>
                  <th className="py-2.5 px-4">{isHindi ? 'उत्पाद (Product)' : 'Product'}</th>
                  <th className="py-2.5 px-4 text-right">{isHindi ? 'बिक्री (Units Sold)' : 'Units Sold'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-50">
                <tr className="hover:bg-purple-50/40">
                  <td className="py-2.5 px-4 font-medium">🥛 Milk</td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold">20</td>
                </tr>
                <tr className="hover:bg-purple-50/40">
                  <td className="py-2.5 px-4 font-medium">🍞 Bread</td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold">15</td>
                </tr>
                <tr className="hover:bg-purple-50/40">
                  <td className="py-2.5 px-4 font-medium">🍪 Biscuits</td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold">10</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Python Code & Solution */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs flex flex-col justify-between">
            <div>
              <p className="text-slate-400"># Calculate total units in Python</p>
              <p className="mt-2 text-white font-bold text-sm sm:text-base">
                <span className="text-indigo-400">print</span>(<span className="text-amber-300">20</span> + <span className="text-amber-300">15</span> + <span className="text-amber-300">10</span>)
              </p>
            </div>
            <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400 text-xs font-sans">OUTPUT:</span>
              <span className="text-emerald-400 font-extrabold text-base">45 units</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. STUDENT MARKS & AVERAGE ── */}
      <div
        ref={secStudentRef}
        id="sec14-student"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec14-student'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🎓</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी 2: छात्र के कुल अंक और औसत (Total & Average)' : 'Case Study 2: Student Marks & Average'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'English: 80, Maths: 90, Science: 70 — Python से कुल व औसत निकालें:'
                : 'English: 80, Maths: 90, Science: 70 — Compute total and average marks:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Total */}
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
            <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider">{isHindi ? 'कुल अंक (Total)' : 'Total Marks'}</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl font-mono text-xs">
              <span className="text-indigo-400">print</span>(<span className="text-amber-300">80</span> + <span className="text-amber-300">90</span> + <span className="text-amber-300">70</span>)
            </div>
            <p className="mt-2 text-xs font-bold text-indigo-950 flex items-center justify-between">
              <span>{isHindi ? 'परिणाम:' : 'Result:'}</span>
              <span className="text-indigo-700 font-mono text-sm">240</span>
            </p>
          </div>

          {/* Average */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">{isHindi ? 'औसत (Average)' : 'Average Marks'}</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl font-mono text-xs">
              <span className="text-indigo-400">print</span>((<span className="text-amber-300">80</span> + <span className="text-amber-300">90</span> + <span className="text-amber-300">70</span>) / <span className="text-amber-300">3</span>)
            </div>
            <p className="mt-2 text-xs font-bold text-emerald-950 flex items-center justify-between">
              <span>{isHindi ? 'परिणाम:' : 'Result:'}</span>
              <span className="text-emerald-700 font-mono text-sm">80.0</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. HOW PYTHON HELPS ANALYTICS (5 PILLARS) ── */}
      <div
        ref={secPillarsRef}
        id="sec14-pillars"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec14-pillars'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">🛠️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Python Data Analytics में कैसे मदद करता है?' : 'How Python Powers the Analytics Workflow'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'Data पढ़ने से लेकर Charts और ऑटोमेशन तक 5 मुख्य चरण:' : '5 core capabilities every analyst relies on daily:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { title: isHindi ? '1. Data पढ़ना' : '1. Read Data', sub: isHindi ? 'Excel, CSV, SQL' : 'Files & DBs', icon: '📂', bg: 'bg-blue-50 border-blue-200 text-blue-900' },
            { title: isHindi ? '2. Data Cleaning' : '2. Clean Data', sub: isHindi ? 'गलतियां सुधारना' : 'Fix missing', icon: '🧹', bg: 'bg-rose-50 border-rose-200 text-rose-900' },
            { title: isHindi ? '3. विश्लेषण' : '3. Analyze', sub: isHindi ? 'औसत व टोटल' : 'Stats & trends', icon: '🔍', bg: 'bg-amber-50 border-amber-200 text-amber-900' },
            { title: isHindi ? '4. Visualization' : '4. Visualize', sub: isHindi ? 'Chart व Graph' : 'Charts & plots', icon: '📊', bg: 'bg-purple-50 border-purple-200 text-purple-900' },
            { title: isHindi ? '5. ऑटोमेशन' : '5. Automate', sub: isHindi ? 'बार-बार का काम' : 'Save hours', icon: '⚡', bg: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
          ].map((item, idx) => (
            <div key={idx} className={`p-3 rounded-2xl border ${item.bg} text-center flex flex-col items-center shadow-2xs`}>
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="font-bold text-xs">{item.title}</span>
              <span className="text-[11px] opacity-80 mt-0.5">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. PYTHON LIBRARIES SHOWCASE TABLE ── */}
      <div
        ref={secLibrariesRef}
        id="sec14-libraries"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec14-libraries'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">📚</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Data Analysts की 4 जादुई लाइब्रेरीज (Key Libraries)' : 'The 4 Essential Python Analytics Libraries'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Library यानी पहले से बना-बनाया Code, जो आपके काम को 100 गुना तेज कर देता है:'
                : 'A library is pre-written code that accelerates your work by 100x:'}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-purple-100/70 text-purple-950 font-bold">
              <tr>
                <th className="py-2.5 px-4">{isHindi ? 'Library का नाम' : 'Library'}</th>
                <th className="py-2.5 px-4">{isHindi ? 'मुख्य उपयोग (Main Purpose)' : 'Main Purpose'}</th>
                <th className="py-2.5 px-4 text-right">{isHindi ? 'Icon' : 'Type'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-indigo-700">NumPy</td>
                <td className="py-2.5 px-4">{isHindi ? 'तेज़ गणितीय और सांख्यिकीय गणनाएं' : 'High-speed numerical math & array operations'}</td>
                <td className="py-2.5 px-4 text-right font-medium text-slate-600">🔢 Math</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-emerald-700">Pandas</td>
                <td className="py-2.5 px-4">{isHindi ? 'Excel और Data Tables पर काम करना' : 'Tabular dataframes, filtering & Excel operations'}</td>
                <td className="py-2.5 px-4 text-right font-medium text-slate-600">📋 Tables</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-amber-700">Matplotlib</td>
                <td className="py-2.5 px-4">{isHindi ? 'लाइन, बार और पाई Charts बनाना' : 'Line graphs, bar charts & scatter plots'}</td>
                <td className="py-2.5 px-4 text-right font-medium text-slate-600">📊 Charts</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-purple-700">Seaborn</td>
                <td className="py-2.5 px-4">{isHindi ? 'सुंदर सांख्यिकीय और हीटमैप Charts' : 'Beautiful statistical data storytelling & heatmaps'}</td>
                <td className="py-2.5 px-4 text-right font-medium text-slate-600">🎨 Aesthetics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 6. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec14-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec14-takeaway'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 shadow-2xs'
        }`}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl p-2 bg-purple-200/80 rounded-2xl">🌟</span>
          <div>
            <h4 className="font-extrabold text-purple-950 text-base sm:text-lg">
              {isHindi ? 'मुख्य सार (Key Takeaway)' : 'Key Takeaway'}
            </h4>
            <p className="text-xs sm:text-sm text-purple-900 mt-1 leading-relaxed">
              {isHindi
                ? 'Python Raw Data को उपयोगी सूचना में बदलता है। यह Calculation, एनालिसिस, Charts और ऑटोमेशन के लिए Data Analyst का सबसे भरोसेमंद साथी है।'
                : 'Python turns raw numbers into actionable business insights. It is the premier toolkit for calculations, data analysis, visualization, and workflow automation.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
