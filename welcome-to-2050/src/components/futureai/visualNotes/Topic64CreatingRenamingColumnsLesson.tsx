import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic64VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic64CreatingRenamingColumnsLesson: React.FC<Topic64VisualLessonProps> = ({
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
  const secDerivedRevenueRef = useRef<HTMLDivElement>(null);
  const secDiscountNetRef = useRef<HTMLDivElement>(null);
  const secRenameColumnsRef = useRef<HTMLDivElement>(null);
  const secConditionalColumnsRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec64-title': secTitleRef,
      'sec64-derived-revenue': secDerivedRevenueRef,
      'sec64-discount-net': secDiscountNetRef,
      'sec64-rename-columns': secRenameColumnsRef,
      'sec64-conditional-columns': secConditionalColumnsRef,
      'sec64-takeaway': secTakeawayRef,
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
      className="topic64-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={7}
        totalTopicsInModule={13}
        englishTitle="Creating and Renaming Columns"
        hindiTitle="Creating and Renaming Columns"
        subtitleEnglish="Creating derived columns"
        subtitleHindi="Creating derived columns"
        emoji="✏️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec64-title'}
        sectionRef={secTitleRef}
        sectionId="sec64-title"
      />

      {/* SECTION 1: DERIVED REVENUE COLUMN */}
      <div
        ref={secDerivedRevenueRef}
        data-mentor-target="sec64-derived-revenue"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'नया Column बनाना: `Revenue = Price * Quantity`' : 'Creating Calculated Columns'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'मौजूदा दो Columns का गुणनफल करके तीसरा Column जोड़ना' : 'Element-wise columnar multiplication applied to the whole DataFrame'}
            </p>
          </div>
        </div>

        <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
          df[<span className="text-emerald-300">&quot;Revenue&quot;</span>] = df[<span className="text-emerald-300">&quot;Price&quot;</span>] * df[<span className="text-emerald-300">&quot;Quantity&quot;</span>]<br />
          print(df)
        </div>
      </div>

      {/* SECTION 2: DISCOUNT AND NET REVENUE */}
      <div
        ref={secDiscountNetRef}
        data-mentor-target="sec64-discount-net"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'डिस्काउंट और शुद्ध राशि (Net Amount)' : 'Multi-Step Business Pipelines: Discount & Net Amount'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '10% डिस्काउंट घटाकर अंतिम राशि निकालना' : 'Calculating deductions and final bill amounts'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          df[<span className="text-emerald-300">&quot;Discount&quot;</span>] = df[<span className="text-emerald-300">&quot;Revenue&quot;</span>] * <span className="text-purple-300">0.10</span><br />
          df[<span className="text-emerald-300">&quot;FinalAmount&quot;</span>] = df[<span className="text-emerald-300">&quot;Revenue&quot;</span>] - df[<span className="text-emerald-300">&quot;Discount&quot;</span>]
        </div>
      </div>

      {/* SECTION 3: RENAMING COLUMNS */}
      <div
        ref={secRenameColumnsRef}
        data-mentor-target="sec64-rename-columns"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'कॉलमों का नाम बदलना: `.rename()`' : 'Renaming Columns with Dictionaries'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'पुराने नाम को नए स्पष्ट व्यावसायिक नाम में बदलना' : 'Always assign the result back to df!'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          df = df.<span className="text-blue-400">rename</span>(columns=&#123;<br />
          &nbsp;&nbsp;<span className="text-emerald-300">&quot;Product&quot;</span>: <span className="text-emerald-300">&quot;ProductName&quot;</span>,<br />
          &nbsp;&nbsp;<span className="text-emerald-300">&quot;Price&quot;</span>: <span className="text-emerald-300">&quot;UnitPrice&quot;</span>,<br />
          &nbsp;&nbsp;<span className="text-emerald-300">&quot;FinalAmount&quot;</span>: <span className="text-emerald-300">&quot;NetRevenue&quot;</span><br />
          &#125;)
        </div>
      </div>

      {/* SECTION 4: CONDITIONAL COLUMNS WITH NP.WHERE */}
      <div
        ref={secConditionalColumnsRef}
        data-mentor-target="sec64-conditional-columns"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'शर्तीय Column बनाना: `np.where()`' : 'Creating Conditional Categories with np.where()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'यदि NetRevenue >= 100 हो तो "High" varna "Low"' : 'Vectorized classification into High vs Low value orders'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          <span className="text-amber-400">import</span> numpy <span className="text-amber-400">as</span> np<br /><br />
          df[<span className="text-emerald-300">&quot;Category&quot;</span>] = np.<span className="text-blue-400">where</span>(df[<span className="text-emerald-300">&quot;NetRevenue&quot;</span>] &gt;= <span className="text-purple-300">100</span>, <span className="text-emerald-300">&quot;High&quot;</span>, <span className="text-rose-300">&quot;Low&quot;</span>)<br />
          print(df[[<span className="text-emerald-300">&quot;ProductName&quot;</span>, <span className="text-emerald-300">&quot;NetRevenue&quot;</span>, <span className="text-emerald-300">&quot;Category&quot;</span>]])
        </div>
      </div>

      {/* SECTION 5: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec64-takeaway"
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
            <strong>नए Columns:</strong> `df[&apos;NewCol&apos;] = df[&apos;A&apos;] * df[&apos;B&apos;]` से सीधे नई Calculation जुड़ जाती है।
          </li>
          <li>
            <strong>`rename()` Assignment:</strong> `df = df.rename(...)` Assign करना न भूलें ताकि बदलाव सहेजे जाएं।
          </li>
          <li>
            <strong>`np.where()`:</strong> बिना Loop के तुरंत श्रेणीबद्ध (Categorical) Columns तैयार करता है।
          </li>
        </ul>
      </div>
    </div>
  );
};
