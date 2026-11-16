import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic62VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic62SelectingColumnsRowsLesson: React.FC<Topic62VisualLessonProps> = ({
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
  const secColumnSelectionRef = useRef<HTMLDivElement>(null);
  const secLocConceptRef = useRef<HTMLDivElement>(null);
  const secIlocConceptRef = useRef<HTMLDivElement>(null);
  const secLocVsIlocRef = useRef<HTMLDivElement>(null);
  const secRowsColsTogetherRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec62-title': secTitleRef,
      'sec62-column-selection': secColumnSelectionRef,
      'sec62-loc-concept': secLocConceptRef,
      'sec62-iloc-concept': secIlocConceptRef,
      'sec62-loc-vs-iloc': secLocVsIlocRef,
      'sec62-rows-cols-together': secRowsColsTogetherRef,
      'sec62-takeaway': secTakeawayRef,
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
      className="topic62-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={5}
        totalTopicsInModule={13}
        englishTitle="Selecting Columns and Rows (loc & iloc)"
        hindiTitle="Selecting Columns and Rows (loc & iloc)"
        subtitleEnglish="Loc vs iloc data selection"
        subtitleHindi="Loc vs iloc data selection"
        emoji="🎯"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec62-title'}
        sectionRef={secTitleRef}
        sectionId="sec62-title"
      />

      {/* SECTION 1: COLUMN SELECTION */}
      <div
        ref={secColumnSelectionRef}
        data-mentor-target="sec62-column-selection"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'एक या अनेक Columns का चयन करना' : 'Selecting Single & Multiple Columns'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '`df["Name"]` (Series) बनाम `df[["Name", "Salary"]]` (DataFrame)' : 'Single column Series vs multi-column DataFrame'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed space-y-1">
            <span className="text-purple-300"># 1. Single Column:</span><br />
            names = df[<span className="text-emerald-300">&quot;Name&quot;</span>]<br /><br />
            <span className="text-purple-300"># 2. Multiple Columns (Double Bracket):</span><br />
            sub_table = df[[<span className="text-emerald-300">&quot;Name&quot;</span>, <span className="text-emerald-300">&quot;Salary&quot;</span>]]
          </div>

          <div className="border border-purple-200 rounded-xl bg-[#F6F2FF]/40 p-4 text-xs text-[#4A4768] space-y-2">
            <span className="font-bold text-[#4C2A9A]">याद रखें:</span>
            <p>
              जब भी 2 या अधिक Columns चाहिए हों, तो Column नामों की List बनाकर डबल ब्रैकेट <code>df[[&quot;Col1&quot;, &quot;Col2&quot;]]</code> में पास करें।
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: LOC CONCEPT */}
      <div
        ref={secLocConceptRef}
        data-mentor-target="sec62-loc-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`df.loc`: लेबल-आधारित चयन (Label-Based Selection)' : 'df.loc: Label-Based Selection'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Row का लेबल और Column का नाम देकर Data निकालना' : 'Selecting by explicit row index label and column header name'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          <span className="text-purple-300"># Cell at row label 1, column label &apos;Name&apos;:</span><br />
          val = df.<span className="text-blue-400">loc</span>[<span className="text-purple-300">1</span>, <span className="text-emerald-300">&quot;Name&quot;</span>]<br />
          print(val) <span className="text-emerald-300"># Output: Aman</span>
        </div>
      </div>

      {/* SECTION 3: ILOC CONCEPT */}
      <div
        ref={secIlocConceptRef}
        data-mentor-target="sec62-iloc-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`df.iloc`: स्थिति-आधारित चयन (Integer Position-Based)' : 'df.iloc: Integer Position-Based Selection'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'संख्यात्मक स्थिति 0, 1, 2 के अनुसार Rows व Columns को चुनना' : 'Selecting by zero-based integer index and column coordinates'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white leading-relaxed space-y-1">
          <span className="text-purple-300"># Row position 1 (second row), Column position 0 (first column):</span><br />
          val = df.<span className="text-blue-400">iloc</span>[<span className="text-purple-300">1</span>, <span className="text-purple-300">0</span>]<br />
          print(val) <span className="text-emerald-300"># Output: Aman</span>
        </div>
      </div>

      {/* SECTION 4: LOC VS ILOC COMPARISON */}
      <div
        ref={secLocVsIlocRef}
        data-mentor-target="sec62-loc-vs-iloc"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '`loc` बनाम `iloc` तुलना' : 'loc vs iloc Comparison'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'लेबल बनाम स्थिति और Slicing का अंतर' : 'Name labels vs numeric coordinates'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">df.loc</th>
                <th className="py-3 px-4">df.iloc</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Selection Basis</td>
                <td className="py-2.5 px-4 font-semibold text-purple-700">Labels / Names</td>
                <td className="py-2.5 px-4 font-semibold text-emerald-700">Integer Positions (0, 1, 2)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Slicing Boundary</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">Includes stop label! (0:2 includes 2)</td>
                <td className="py-2.5 px-4 text-rose-600 font-bold">Excludes stop position! (0:2 takes 0 &amp; 1)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Column Syntax</td>
                <td className="py-2.5 px-4 font-mono">&apos;Salary&apos; or [&apos;Name&apos;, &apos;Age&apos;]</td>
                <td className="py-2.5 px-4 font-mono">0, 1, or 0:2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: ROWS & COLS TOGETHER */}
      <div
        ref={secRowsColsTogetherRef}
        data-mentor-target="sec62-rows-cols-together"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">🗂️</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'Rows और Columns का एक साथ चयन' : 'Selecting Rows and Columns Together'}
          </h3>
        </div>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          subset = df.<span className="text-blue-400">loc</span>[<span className="text-purple-300">0</span>:<span className="text-purple-300">1</span>, [<span className="text-emerald-300">&quot;Name&quot;</span>, <span className="text-emerald-300">&quot;Salary&quot;</span>]]<br />
          print(subset)
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec62-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 5 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>`loc` (Labels):</strong> जब आपको Row और Column के नाम से Data निकालना हो।
          </li>
          <li>
            <strong>`iloc` (Integers):</strong> जब आपको 0, 1, 2 जैसी संख्यात्मक स्थिति से Data निकालना हो।
          </li>
          <li>
            <strong>Stop Boundary अंतर:</strong> `loc` में स्टॉप लेबल शामिल होता है, जबकि `iloc` में स्टॉप Index छूट जाता है।
          </li>
        </ul>
      </div>
    </div>
  );
};
