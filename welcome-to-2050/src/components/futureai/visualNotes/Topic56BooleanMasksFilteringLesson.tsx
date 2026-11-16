import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic56VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic56BooleanMasksFilteringLesson: React.FC<Topic56VisualLessonProps> = ({
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
  const secMaskConceptRef = useRef<HTMLDivElement>(null);
  const secMultipleConditionsRef = useRef<HTMLDivElement>(null);
  const secCountingMatchingRef = useRef<HTMLDivElement>(null);
  const secNpWhereRef = useRef<HTMLDivElement>(null);
  const secSalesFilterRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec56-title': secTitleRef,
      'sec56-mask-concept': secMaskConceptRef,
      'sec56-multiple-conditions': secMultipleConditionsRef,
      'sec56-counting-matching': secCountingMatchingRef,
      'sec56-np-where': secNpWhereRef,
      'sec56-sales-filter': secSalesFilterRef,
      'sec56-takeaway': secTakeawayRef,
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
      className="topic56-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={7}
        totalTopicsInModule={8}
        englishTitle="Boolean Masks and Filtering"
        hindiTitle="Boolean Masks and Filtering"
        subtitleEnglish="Boolean Masks and Filtering"
        subtitleHindi="Boolean Masks and Filtering"
        emoji="🔍"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec56-title'}
        sectionRef={secTitleRef}
        sectionId="sec56-title"
      />

      {/* SECTION 1: WHAT IS A BOOLEAN MASK */}
      <div
        ref={secMaskConceptRef}
        data-mentor-target="sec56-mask-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'बुलियन मास्क क्या है? (The X-Ray Filter)' : 'What Is a Boolean Mask?'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'शर्त लगाने पर True और False का समानांतर Array बनता है' : 'Evaluating a condition produces a parallel array of True / False flags'}
            </p>
          </div>
        </div>

        {/* VISUAL FLOW */}
        <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-[#F6F2FF] to-white p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { val: 45, cond: false },
              { val: 80, cond: true },
              { val: 65, cond: false },
              { val: 90, cond: true },
              { val: 30, cond: false },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-1">
                <div className="w-16 h-10 rounded border border-gray-200 bg-white flex items-center justify-center font-bold text-xs text-[#202033]">
                  {item.val}
                </div>
                <span className="text-[10px] text-[#77758A]">&gt; 70 ?</span>
                <div
                  className={`w-16 h-8 rounded text-[11px] font-bold font-mono flex items-center justify-center ${
                    item.cond
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {item.cond ? 'True ✅' : 'False ❌'}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
            marks = np.array([45, 80, 65, 90, 30])<br />
            mask = marks &gt; 70<br />
            print(marks[mask]) <span className="text-emerald-300"># Output: [80 90] (Direct Filter!)</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: MULTIPLE CONDITIONS & BITWISE OPERATORS */}
      <div
        ref={secMultipleConditionsRef}
        data-mentor-target="sec56-multiple-conditions"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'एकाधिक शर्तें (Multiple Conditions): `&`, `|`, `~`' : 'Combining Conditions: Bitwise &, |, ~'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Python के `and`/`or` की जगह बिटवाइज़ Operators और कोष्ठक `()` अनिवार्य हैं' : 'Never use Python `and`/`or`; use bitwise operators wrapped in parentheses'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">AND (`&` Operator)</span>
            <p className="text-[11px] text-[#77758A]">दोनों शर्तें पूरी होनी चाहिए।</p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-white">
              (marks &gt; 50) &amp; (marks &lt; 90)<br />
              <span className="text-emerald-300"># [80 65]</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">OR (`|` Operator)</span>
            <p className="text-[11px] text-[#77758A]">कोई भी एक शर्त पूरी हो।</p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-white">
              (marks &lt; 40) | (marks &gt; 80)<br />
              <span className="text-emerald-300"># [90 30]</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">NOT (`~` Invert Operator)</span>
            <p className="text-[11px] text-[#77758A]">शर्त को उलट देता है।</p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-white">
              ~(marks &gt; 70)<br />
              <span className="text-emerald-300"># [45 65 30]</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: COUNTING MATCHING VALUES */}
      <div
        ref={secCountingMatchingRef}
        data-mentor-target="sec56-counting-matching"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'शर्त से मेल खाने वाले Values को गिनना' : 'Counting Matching Condition Elements'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '`np.sum(marks >= 40)`: True = 1 और False = 0 की सुपर-ट्रिक' : 'Since True equals 1 and False equals 0, np.sum directly tallies matches'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white space-y-1">
          marks = np.array([45, 80, 65, 90, 30])<br /><br />
          passed_count = np.<span className="text-blue-400">sum</span>(marks &gt;= 40)<br />
          print(<span className="text-emerald-300">&quot;Passed Students:&quot;</span>, passed_count) <span className="text-emerald-300"># Output: 4</span><br /><br />
          <span className="text-purple-300"># Or use np.count_nonzero():</span><br />
          also_passed = np.<span className="text-blue-400">count_nonzero</span>(marks &gt;= 40) <span className="text-purple-300"># 4</span>
        </div>
      </div>

      {/* SECTION 4: NP.WHERE() CLASSIFICATION */}
      <div
        ref={secNpWhereRef}
        data-mentor-target="sec56-np-where"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'श्रेणीबद्ध करना: `np.where(condition, true_val, false_val)`' : 'Vectorized Classification: np.where()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Excel के IF() फ़ॉर्मूले का हाई-स्पीड Python विकल्प' : 'The high-speed vectorized counterpart to Excel’s =IF() statement'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white space-y-1">
          marks = np.array([35, 80, 45, 90])<br /><br />
          grades = np.<span className="text-blue-400">where</span>(marks &gt;= 40, <span className="text-emerald-300">&quot;Pass&quot;</span>, <span className="text-rose-400">&quot;Fail&quot;</span>)<br />
          print(grades)<br />
          <span className="text-purple-300"># Output: [&apos;Fail&apos; &apos;Pass&apos; &apos;Pass&apos; &apos;Pass&apos;]</span>
        </div>
      </div>

      {/* SECTION 5: REAL LIFE HIGH VALUE SALES FILTER */}
      <div
        ref={secSalesFilterRef}
        data-mentor-target="sec56-sales-filter"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">💎</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'बिजनेस केस: ₹1,000 से अधिक की उच्च बिक्री छानना' : 'Business Case: High-Value Sales Filtering (> ₹1000)'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? 'प्रीमियम Orders को तुरंत अलग करना और उनका औसत Revenue निकालना:'
            : 'Extracting premium transactions and computing their average ticket size:'}
        </p>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          sales = np.array([500, 1500, 800, 2000, 300])<br />
          vip_sales = sales[sales &gt; 1000]<br />
          print(<span className="text-emerald-300">&quot;VIP Transactions: ₹&quot;</span>, vip_sales) <span className="text-emerald-300"># [1500 2000]</span><br />
          print(<span className="text-emerald-300">&quot;Avg VIP Sale: ₹&quot;</span>, vip_sales.mean())  <span className="text-emerald-300"># 1750.0</span>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec56-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 7 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'बुलियन Indexing:' : 'Boolean Mask Filtering:'}</strong>{' '}
            {isHi ? '`arr[arr > 50]` से केवल वही एलिमेंट्स बचते हैं जहां शर्त True होती है।' : '`arr[arr > 50]` extracts only those elements where the Boolean flag is True.'}
          </li>
          <li>
            <strong>{isHi ? 'हमेशा `&` और `()` का use करें:' : 'Always Parentheses & Bitwise:'}</strong>{' '}
            {isHi ? 'NumPy में `and` काम नहीं करता; `(cond1) & (cond2)` ही सही तरीका है।' : 'Do not use Python `and`; always write `(c1) & (c2)` with explicit parentheses.'}
          </li>
          <li>
            <strong>{isHi ? '`np.where()` से क्लासिफिकेशन:' : 'np.where() Power:'}</strong>{' '}
            {isHi ? 'शर्त के आधार पर श्रेणीबद्ध Column (Pass/Fail, High/Low) तुरंत बनाएं।' : 'Creates categorized outcome arrays based on vectorized condition checks.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
