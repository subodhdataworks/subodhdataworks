import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic63VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic63FilteringSortingLesson: React.FC<Topic63VisualLessonProps> = ({
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
  const secConditionFilteringRef = useRef<HTMLDivElement>(null);
  const secAndOrConditionsRef = useRef<HTMLDivElement>(null);
  const secIsInFilteringRef = useRef<HTMLDivElement>(null);
  const secSortingValuesRef = useRef<HTMLDivElement>(null);
  const secResetIndexRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec63-title': secTitleRef,
      'sec63-condition-filtering': secConditionFilteringRef,
      'sec63-and-or-conditions': secAndOrConditionsRef,
      'sec63-isin-filtering': secIsInFilteringRef,
      'sec63-sorting-values': secSortingValuesRef,
      'sec63-reset-index': secResetIndexRef,
      'sec63-takeaway': secTakeawayRef,
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
      className="topic63-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={6}
        totalTopicsInModule={13}
        englishTitle="Filtering and Sorting DataFrames"
        hindiTitle="Filtering and Sorting DataFrames"
        subtitleEnglish="Filtering and sorting fundamentals"
        subtitleHindi="Filtering and sorting fundamentals"
        emoji="⚖️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec63-title'}
        sectionRef={secTitleRef}
        sectionId="sec63-title"
      />

      {/* SECTION 1: CONDITION FILTERING */}
      <div
        ref={secConditionFilteringRef}
        data-mentor-target="sec63-condition-filtering"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'शर्त के आधार पर Filter करना' : 'Filtering with Boolean Conditions'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '₹30,000 से अधिक वेतन वाले कर्मचारियों का चयन' : 'Extracting rows where numeric or text conditions evaluate to True'}
            </p>
          </div>
        </div>

        <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
          high_earners = df[df[<span className="text-emerald-300">&quot;Salary&quot;</span>] &gt; <span className="text-purple-300">30000</span>]<br />
          print(high_earners)
        </div>
      </div>

      {/* SECTION 2: AND / OR CONDITIONS */}
      <div
        ref={secAndOrConditionsRef}
        data-mentor-target="sec63-and-or-conditions"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'एकाधिक शर्तें: AND (`&`) और OR (`|`)' : 'Multiple Conditions with & and |'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'प्रत्येक शर्त को कोष्ठक `()` में रखना अनिवार्य है' : 'Enclose every individual comparison in parentheses to satisfy operator precedence'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">1. AND (`&`) Condition:</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              it_high = df[(df[<span className="text-emerald-300">&quot;Salary&quot;</span>] &gt; <span className="text-purple-300">30000</span>) &amp; (df[<span className="text-emerald-300">&quot;Department&quot;</span>] == <span className="text-emerald-300">&quot;IT&quot;</span>)]
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">2. OR (`|`) Condition:</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              hr_or_high = df[(df[<span className="text-emerald-300">&quot;Department&quot;</span>] == <span className="text-emerald-300">&quot;HR&quot;</span>) | (df[<span className="text-emerald-300">&quot;Salary&quot;</span>] &gt; <span className="text-purple-300">35000</span>)]
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ISIN FILTERING */}
      <div
        ref={secIsInFilteringRef}
        data-mentor-target="sec63-isin-filtering"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'List से मिलान: `.isin()`' : 'List Matching: .isin()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'जब कई Values में से किसी एक को चुनना हो (जैसे IT या HR)' : 'Clean multi-match querying without chaining dozens of OR statements'}
            </p>
          </div>
        </div>

        <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
          it_or_hr = df[df[<span className="text-emerald-300">&quot;Department&quot;</span>].<span className="text-blue-400">isin</span>([<span className="text-emerald-300">&quot;IT&quot;</span>, <span className="text-emerald-300">&quot;HR&quot;</span>])]<br />
          print(it_or_hr)
        </div>
      </div>

      {/* SECTION 4: SORTING VALUES */}
      <div
        ref={secSortingValuesRef}
        data-mentor-target="sec63-sorting-values"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Data को क्रमबद्ध करना: `sort_values()`' : 'Sorting Records: sort_values()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'आरोही (Ascending) और अवरोही (Descending: ascending=False) क्रम' : 'Ascending order by default, or descending sorting on multiple metrics'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          <span className="text-purple-300"># Highest salary first:</span><br />
          sorted_df = df.<span className="text-blue-400">sort_values</span>(<span className="text-emerald-300">&quot;Salary&quot;</span>, ascending=<span className="text-amber-400">False</span>)<br /><br />
          <span className="text-purple-300"># Sort by department A-Z, then salary highest first:</span><br />
          multi_sort = df.<span className="text-blue-400">sort_values</span>([<span className="text-emerald-300">&quot;Department&quot;</span>, <span className="text-emerald-300">&quot;Salary&quot;</span>], ascending=[<span className="text-amber-400">True</span>, <span className="text-amber-400">False</span>])
        </div>
      </div>

      {/* SECTION 5: RESET INDEX */}
      <div
        ref={secResetIndexRef}
        data-mentor-target="sec63-reset-index"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">🔄</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'Index रीसेट करना: `.reset_index(drop=True)`' : 'Resetting Indexes: .reset_index(drop=True)'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? 'Sorting के बाद Rows के पुराने Index क्रमहीन हो जाते हैं। उन्हें 0, 1, 2... में रीसेट करें:'
            : 'Sorting scrambles row index labels. Clean them back to 0, 1, 2 sequentially:'}
        </p>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          clean_sorted = sorted_df.<span className="text-blue-400">reset_index</span>(drop=<span className="text-amber-400">True</span>)
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec63-takeaway"
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
            <strong>Filtering:</strong> `df[df[&apos;col&apos;] &gt; val]` से तुरंत प्रासंगिक Rows प्राप्त होती हैं।
          </li>
          <li>
            <strong>बिटवाइज़ Operators:</strong> हमेशा `&` और `|` के साथ कोष्ठक `(c1) & (c2)` लगाएं।
          </li>
          <li>
            <strong>Sorting व Index:</strong> Sort करने के बाद `.reset_index(drop=True)` लगाना एक श्रेष्ठ अभ्यास है।
          </li>
        </ul>
      </div>
    </div>
  );
};
