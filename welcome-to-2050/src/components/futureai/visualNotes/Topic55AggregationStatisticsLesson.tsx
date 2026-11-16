import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic55VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic55AggregationStatisticsLesson: React.FC<Topic55VisualLessonProps> = ({
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
  const secCoreStatsRef = useRef<HTMLDivElement>(null);
  const secAxisDeepDiveRef = useRef<HTMLDivElement>(null);
  const secAxis0Vs1Ref = useRef<HTMLDivElement>(null);
  const secSalesAggregationRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec55-title': secTitleRef,
      'sec55-core-stats': secCoreStatsRef,
      'sec55-axis-deepdive': secAxisDeepDiveRef,
      'sec55-axis0-vs-axis1': secAxis0Vs1Ref,
      'sec55-sales-aggregation': secSalesAggregationRef,
      'sec55-takeaway': secTakeawayRef,
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
      className="topic55-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={6}
        totalTopicsInModule={8}
        englishTitle="Aggregation and Summary Statistics"
        hindiTitle="Aggregation and Summary Statistics"
        subtitleEnglish="Aggregation & Summary Statistics"
        subtitleHindi="Aggregation & Summary Statistics"
        emoji="📊"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec55-title'}
        sectionRef={secTitleRef}
        sectionId="sec55-title"
      />

      {/* SECTION 1: CORE STATISTICAL FUNCTIONS */}
      <div
        ref={secCoreStatsRef}
        data-mentor-target="sec55-core-stats"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'मूल सांख्यिकीय फंक्शन्स (Core Aggregations)' : 'Essential Summary Statistics'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'लाखों संख्याओं को एक सार्थक बिजनेस नंबर में बदलना' : 'Condensing raw numeric arrays into actionable business benchmarks'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {[
            { fn: 'np.sum()', label: isHi ? 'कुल जोड़' : 'Total Sum', val: '1000' },
            { fn: 'np.mean()', label: isHi ? 'औसत' : 'Average Mean', val: '250.0' },
            { fn: 'np.median()', label: isHi ? 'मध्य Value' : 'Median Value', val: '250.0' },
            { fn: 'np.min()', label: isHi ? 'न्यूनतम' : 'Minimum', val: '100' },
            { fn: 'np.max()', label: isHi ? 'अधिकतम' : 'Maximum', val: '400' },
            { fn: 'np.std()', label: isHi ? 'मानक विचलन' : 'Std Deviation', val: '111.8' },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-3 text-center space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#7045E8]">{item.fn}</span>
              <div className="text-xs font-semibold text-[#202033]">{item.label}</div>
              <div className="text-sm font-extrabold text-[#4C2A9A]">{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: THE AXIS CONCEPT DEEP DIVE */}
      <div
        ref={secAxisDeepDiveRef}
        data-mentor-target="sec55-axis-deepdive"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'The Axis Concept: NumPy का सबसे महत्वपूर्ण Parameter' : 'The Axis Concept: Down Rows vs Across Columns'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एक्सिस तय करता है कि जोड़ना नीचे की ओर (↓) होगा या दाईं ओर (→)' : 'Collapsing dimensions: along columns vs along rows'}
            </p>
          </div>
        </div>

        {/* 2D MATRIX VISUAL */}
        <div className="rounded-xl border border-purple-200 bg-white p-5 space-y-4 shadow-xs">
          <div className="text-center font-bold text-xs text-[#4C2A9A]">
            Sales Matrix: 2 Rows (Months) &times; 3 Columns (Products)
          </div>

          <div className="max-w-md mx-auto border border-purple-200 rounded-xl overflow-hidden text-xs">
            <div className="grid grid-cols-4 bg-[#F6F2FF] font-bold text-[#4C2A9A] p-2 text-center">
              <span>Month</span>
              <span>Prod A</span>
              <span>Prod B</span>
              <span>Prod C</span>
            </div>
            <div className="grid grid-cols-4 p-2 text-center border-t border-purple-100 font-mono">
              <span className="font-sans font-bold text-[#77758A]">Jan (Row 0)</span>
              <span>100</span>
              <span>200</span>
              <span>300</span>
            </div>
            <div className="grid grid-cols-4 p-2 text-center border-t border-purple-100 font-mono">
              <span className="font-sans font-bold text-[#77758A]">Feb (Row 1)</span>
              <span>400</span>
              <span>500</span>
              <span>600</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: AXIS=0 VS AXIS=1 VISUAL */}
      <div
        ref={secAxis0Vs1Ref}
        data-mentor-target="sec55-axis0-vs-axis1"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`axis=0` vs `axis=1`: भ्रम हमेशा के लिए खत्म!' : 'axis=0 vs axis=1: The Visual Clarity Guide'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Column-वाइज जोड़ना (नीचे की तरफ) vs Row-वाइज जोड़ना (दाईं तरफ)' : 'Column totals down the axis vs row totals across columns'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AXIS = 0 */}
          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#7045E8]">`np.sum(sales, axis=0)`</span>
              <span className="text-[10px] bg-purple-100 text-[#4C2A9A] font-bold px-2 py-0.5 rounded">Down Rows (↓)</span>
            </div>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Rows के आर-पार नीचे जोड़ता है &rarr; प्रत्येक Column का Total Sum मिलता है (Product Totals)।' : 'Collapses rows downwards &rarr; produces totals for each product column.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
              [100+400, 200+500, 300+600]<br />
              <span className="text-emerald-300"># Output: [500 700 900] (Shape: 3)</span>
            </div>
          </div>

          {/* AXIS = 1 */}
          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700">`np.sum(sales, axis=1)`</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Across Cols (&rarr;)</span>
            </div>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Columns के आर-पार दाईं ओर जोड़ता है &rarr; प्रत्येक Row का Total Sum मिलता है (Monthly Totals)।' : 'Collapses columns horizontally &rarr; produces totals for each monthly row.'}
            </p>
            <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
              [100+200+300, 400+500+600]<br />
              <span className="text-emerald-300"># Output: [ 600 1500] (Shape: 2)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: REAL LIFE SALES AGGREGATION */}
      <div
        ref={secSalesAggregationRef}
        data-mentor-target="sec55-sales-aggregation"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">💼</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'रियल-वर्ल्ड केस: 3 महीनों की बिक्री समरी Report' : 'Executive Retail Case Study: 3-Month Sales Audit'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? '3 महीने &times; 3 प्रोडक्ट्स की बिक्री: मासिक और उत्पाद-वार Total Sum निकालना'
            : 'Evaluating performance per product category and total monthly intake:'}
        </p>
        <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
          sales = np.array([<br />
          &nbsp;&nbsp;[100, 200, 300], <span className="text-purple-300"># Jan</span><br />
          &nbsp;&nbsp;[150, 250, 350], <span className="text-purple-300"># Feb</span><br />
          &nbsp;&nbsp;[120, 220, 320]  <span className="text-purple-300"># Mar</span><br />
          ])<br /><br />
          monthly_totals = np.<span className="text-blue-400">sum</span>(sales, axis=1)<br />
          product_totals = np.<span className="text-blue-400">sum</span>(sales, axis=0)<br /><br />
          print(<span className="text-emerald-300">&quot;Monthly Revenues:&quot;</span>, monthly_totals) <span className="text-purple-300"># [600 750 660]</span><br />
          print(<span className="text-emerald-300">&quot;Product Totals:&quot;</span>, product_totals)  <span className="text-purple-300"># [370 670 970]</span>
        </div>
      </div>

      {/* SECTION 5: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec55-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 6 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? '`axis=0` = नीचे की तरफ (Column योग):' : '`axis=0` = Down Rows (Column Totals):'}</strong>{' '}
            {isHi ? 'यह Rows को समेटता है और प्रत्येक Column का परिणाम देता है।' : 'Collapses rows to produce a total for each individual column.'}
          </li>
          <li>
            <strong>{isHi ? '`axis=1` = दाईं तरफ (Row योग):' : '`axis=1` = Across Columns (Row Totals):'}</strong>{' '}
            {isHi ? 'यह Columns को समेटता है और प्रत्येक Row का परिणाम देता है।' : 'Collapses columns to produce a total for each individual row.'}
          </li>
          <li>
            <strong>{isHi ? 'Mean vs Median:' : 'Mean vs Median:'}</strong>{' '}
            {isHi ? 'यदि Data में चरम Value (Outliers) हों, तो `median` ज्यादा सटीक तस्वीर देता है।' : 'Median is robust against extreme outliers where arithmetic mean gets skewed.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
