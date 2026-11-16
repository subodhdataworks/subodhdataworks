import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic58VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic58WhatIsPandasLesson: React.FC<Topic58VisualLessonProps> = ({
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
  const secStoryRef = useRef<HTMLDivElement>(null);
  const secWhatIsRef = useRef<HTMLDivElement>(null);
  const secImportFirstRef = useRef<HTMLDivElement>(null);
  const secPandasVsNumpyRef = useRef<HTMLDivElement>(null);
  const secRevenueExampleRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec58-title': secTitleRef,
      'sec58-story': secStoryRef,
      'sec58-whatis': secWhatIsRef,
      'sec58-import-first': secImportFirstRef,
      'sec58-pandas-vs-numpy': secPandasVsNumpyRef,
      'sec58-revenue-example': secRevenueExampleRef,
      'sec58-takeaway': secTakeawayRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const timer = setTimeout(() => {
        if (containerRef.current) {
          const cRect = containerRef.current.getBoundingClientRect();
          const tRect = targetEl.getBoundingClientRect();
          onSectionRectChange?.({
            top: tRect.top - cRect.top,
            left: tRect.left - cRect.left,
            width: tRect.width,
            height: tRect.height,
          });
        }
        onScrollSettled?.();
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic58-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={1}
        totalTopicsInModule={13}
        englishTitle="What Is Pandas?"
        hindiTitle="What Is Pandas?"
        subtitleEnglish="Introduction to Pandas library in Python"
        subtitleHindi="Introduction to Pandas library in Python"
        emoji="🐼"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec58-title'}
        sectionRef={secTitleRef}
        sectionId="sec58-title"
      />

      {/* SECTION 1: REAL-LIFE STORY */}
      <div
        ref={secStoryRef}
        data-mentor-target="sec58-story"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'रियल-लाइफ स्टोरी: ई-कॉमर्स Cells Report' : 'The E-Commerce Analyst Scenario'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'मैनेजर के 5 जरूरी सवाल जो सिर्फ Table Data से हल होंगे' : '5 executive questions from the sales director'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A4768] leading-relaxed">
          {isHi ? (
            <>
              कल्पना कीजिए आप एक ऑनलाइन शॉपिंग कंपनी में Data Analyst हैं। मैनेजर आपको यह Cells Report देता है:
            </>
          ) : (
            <>
              Imagine working as a Data Analyst at an e-commerce platform. Your manager provides this sales table:
            </>
          )}
        </p>

        {/* SAMPLE TABLE */}
        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold">
              <tr>
                <th className="py-2.5 px-4">Order ID</th>
                <th className="py-2.5 px-4">Product</th>
                <th className="py-2.5 px-4">Price (₹)</th>
                <th className="py-2.5 px-4">Quantity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] font-mono text-[#202033]">
              <tr><td className="py-2 px-4">101</td><td className="py-2 px-4 font-sans font-semibold">Pen</td><td className="py-2 px-4">₹10</td><td className="py-2 px-4">5</td></tr>
              <tr><td className="py-2 px-4">102</td><td className="py-2 px-4 font-sans font-semibold">Book</td><td className="py-2 px-4">₹50</td><td className="py-2 px-4">2</td></tr>
              <tr><td className="py-2 px-4">103</td><td className="py-2 px-4 font-sans font-semibold">Bag</td><td className="py-2 px-4">₹500</td><td className="py-2 px-4">1</td></tr>
              <tr><td className="py-2 px-4">104</td><td className="py-2 px-4 font-sans font-semibold">Notebook</td><td className="py-2 px-4">₹80</td><td className="py-2 px-4">3</td></tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-4 text-xs text-[#4A4768] space-y-1">
          <strong className="text-[#4C2A9A]">
            {isHi ? 'मैनेजर के प्रश्न:' : 'Executive Inquiries:'}
          </strong>
          <ul className="list-disc list-inside space-y-0.5">
            <li>{isHi ? 'कुल कितने Orders हैं?' : 'How many total orders were placed?'}</li>
            <li>{isHi ? 'सबसे महंगा प्रोडक्ट कौन सा है?' : 'Which product is the most expensive?'}</li>
            <li>{isHi ? 'कुल Revenue कितना है?' : 'What is the gross revenue?'}</li>
            <li>{isHi ? '₹50 से अधिक कीमत वाले Orders कौन से हैं?' : 'Which orders exceeded ₹50?'}</li>
            <li>{isHi ? 'क्या परिणाम को Excel में एक्सपोर्ट किया जा सकता है?' : 'Can the results be saved to an Excel file?'}</li>
          </ul>
        </div>
      </div>

      {/* SECTION 2: WHAT IS PANDAS */}
      <div
        ref={secWhatIsRef}
        data-mentor-target="sec58-whatis"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Pandas क्या है और Analysts इसे क्यों पसंद करते हैं?' : 'What Is Pandas and Why Use It?'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'संरचित Spreadsheet Data को लोड और ट्रांसफॉर्म करने का सर्वोत्तम साधन' : 'Working with CSV, Excel, SQL queries, and millions of tabular records'}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4A4768] leading-relaxed">
          {isHi ? (
            <>
              <strong>Pandas</strong> एक ओपन-सोर्स Python Library है जिसे Table-जैसी संरचनाओं (स्ट्रक्चर्ड Data) पर काम करने के लिए डिज़ाइन किया गया है। यह Dataset को लोड करने, साफ़ करने (Missing values हटाना), Filter करने, ग्रुप करने और Excel/सीएसवी Report एक्सपोर्ट करने की पूरी सुविधा देती है।
            </>
          ) : (
            <>
              <strong>Pandas</strong> is the premier Python toolkit for working with tabular data (rows and columns). It handles messy customer records, missing entries, duplicates, group aggregations, and business report generation with minimal, elegant syntax.
            </>
          )}
        </p>

        <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
          <span className="text-xs font-bold text-[#4C2A9A]">Installation (One-time command):</span>
          <div className="bg-[#202033] p-2.5 rounded font-mono text-xs text-white">
            <span className="text-amber-400">pip</span> install pandas openpyxl
          </div>
          <p className="text-[11px] text-[#77758A]">
            {isHi ? 'openpyxl Library Pandas को `.xlsx` Excel फाइलों के साथ काम करने में सक्षम बनाती है।' : 'openpyxl enables Pandas to natively read and write modern `.xlsx` workbooks.'}
          </p>
        </div>
      </div>

      {/* SECTION 3: IMPORT & FIRST DATAFRAME */}
      <div
        ref={secImportFirstRef}
        data-mentor-target="sec58-import-first"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'अपनी पहली Table (DataFrame) बनाना' : 'Creating Your First Pandas DataFrame'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Python Dictionary से सीधे Pandas DataFrame तैयार करना' : 'From Python dictionaries to 2D labeled dataframes'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">Python Code:</span>
            <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed shadow-inner">
              <span className="text-amber-400">import</span> pandas <span className="text-amber-400">as</span> pd<br /><br />
              data = &#123;<br />
              &nbsp;&nbsp;<span className="text-emerald-300">&quot;Product&quot;</span>: [<span className="text-emerald-300">&quot;Pen&quot;</span>, <span className="text-emerald-300">&quot;Book&quot;</span>, <span className="text-emerald-300">&quot;Bag&quot;</span>],<br />
              &nbsp;&nbsp;<span className="text-emerald-300">&quot;Price&quot;</span>: [<span className="text-purple-300">10</span>, <span className="text-purple-300">50</span>, <span className="text-purple-300">500</span>]<br />
              &#125;<br /><br />
              df = pd.<span className="text-blue-400">DataFrame</span>(data)<br />
              print(df)
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C2A9A]">Visual Result (Index + Columns):</span>
            <div className="rounded-xl border border-purple-200 bg-white p-4 font-mono text-xs text-[#202033] shadow-inner space-y-1">
              <div className="grid grid-cols-3 font-bold text-[#7045E8] border-b border-purple-100 pb-1">
                <span>Index</span>
                <span>Product</span>
                <span>Price</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-gray-100">
                <span className="text-[#77758A]">0</span>
                <span className="font-sans font-semibold">Pen</span>
                <span>10</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-gray-100">
                <span className="text-[#77758A]">1</span>
                <span className="font-sans font-semibold">Book</span>
                <span>50</span>
              </div>
              <div className="grid grid-cols-3 py-1">
                <span className="text-[#77758A]">2</span>
                <span className="font-sans font-semibold">Bag</span>
                <span>500</span>
              </div>
            </div>
            <p className="text-[11px] text-[#77758A]">
              {isHi ? '👈 देखें: Pandas ने बाईं ओर अपने आप 0, 1, 2 Index जोड़ दिया!' : '👈 Notice: Pandas automatically provides a 0-based row Index.'}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: PANDAS VS NUMPY */}
      <div
        ref={secPandasVsNumpyRef}
        data-mentor-target="sec58-pandas-vs-numpy"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'NumPy बनाम Pandas: सही टूल कब चुनें?' : 'NumPy vs Pandas Comparison'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'गणितीय वेक्टर्स (Arrays) vs लेबल वाली व्यावसायिक Table (DataFrames)' : 'Mathematical arrays vs labeled business tables'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">NumPy</th>
                <th className="py-3 px-4">Pandas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Core Structure</td>
                <td className="py-2.5 px-4 font-mono">ndarray</td>
                <td className="py-2.5 px-4 font-mono font-bold text-[#7045E8]">Series &amp; DataFrame</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Data Orientation</td>
                <td className="py-2.5 px-4">Pure numeric matrix computing</td>
                <td className="py-2.5 px-4 font-semibold text-emerald-700">Labeled rows, columns &amp; time-series</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Column Headers</td>
                <td className="py-2.5 px-4 text-rose-600">No column names (numeric axes only)</td>
                <td className="py-2.5 px-4 font-semibold text-emerald-700">Custom names (e.g. &apos;Price&apos;, &apos;Date&apos;)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Primary Domain</td>
                <td className="py-2.5 px-4">Scientific computing &amp; math algorithms</td>
                <td className="py-2.5 px-4 font-semibold text-emerald-700">Business analytics, ETL &amp; data cleaning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: REVENUE CALCULATION */}
      <div
        ref={secRevenueExampleRef}
        data-mentor-target="sec58-revenue-example"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">💡</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'रियल-लाइफ उदाहरण: नया Column जोड़ना (`df["Revenue"]`)' : 'Real-Life Application: Calculating Revenue Column'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? 'बिना किसी Loop के सीधे Column स्तर पर Calculation:'
            : 'Applying vectorized math directly to create a new column:'}
        </p>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          df[<span className="text-emerald-300">&quot;Revenue&quot;</span>] = df[<span className="text-emerald-300">&quot;Price&quot;</span>] * 2<br />
          print(df)<br />
          <span className="text-purple-300"># Adds a clean third column &apos;Revenue&apos;!</span>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec58-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 1 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'Pandas = Table Data का बॉस:' : 'Pandas = King of Tabular Data:'}</strong>{' '}
            {isHi ? 'Spreadsheet, CSV और Database के Data को साफ़ और विश्लेषित करने का सबसे तेज़ टूल।' : 'The industry-standard library for inspecting, cleaning, and transforming tabular datasets.'}
          </li>
          <li>
            <strong>{isHi ? 'डेटाफ्रेम (DataFrame):' : 'The DataFrame:'}</strong>{' '}
            {isHi ? 'यह 2D लेबल वाली Table है जिसमें Row Index और Column Header होते हैं।' : 'A two-dimensional labeled data structure with rows and named columns.'}
          </li>
          <li>
            <strong>{isHi ? '`pd` कन्वेंशन:' : 'The `pd` Alias:'}</strong>{' '}
            {isHi ? '`import pandas as pd` पूरी दुनिया का स्टैंडर्ड सिंटेक्स है।' : 'Always import using the global convention `import pandas as pd`.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
