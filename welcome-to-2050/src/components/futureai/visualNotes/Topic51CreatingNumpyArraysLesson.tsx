import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic51VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic51CreatingNumpyArraysLesson: React.FC<Topic51VisualLessonProps> = ({
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
  const secArray1D2DRef = useRef<HTMLDivElement>(null);
  const secZerosOnesRef = useRef<HTMLDivElement>(null);
  const secArangeLinspaceRef = useRef<HTMLDivElement>(null);
  const secDtypeAstypeRef = useRef<HTMLDivElement>(null);
  const secDailySalesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec51-title': secTitleRef,
      'sec51-1d-2d': secArray1D2DRef,
      'sec51-zeros-ones': secZerosOnesRef,
      'sec51-arange-linspace': secArangeLinspaceRef,
      'sec51-dtype-astype': secDtypeAstypeRef,
      'sec51-daily-sales': secDailySalesRef,
      'sec51-takeaway': secTakeawayRef,
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
      className="topic51-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={2}
        totalTopicsInModule={8}
        englishTitle="Creating NumPy Arrays"
        hindiTitle="Creating NumPy Arrays"
        subtitleEnglish="Creating NumPy Arrays toolkit"
        subtitleHindi="Creating NumPy Arrays toolkit"
        emoji="🔢"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec51-title'}
        sectionRef={secTitleRef}
        sectionId="sec51-title"
      />

      {/* SECTION 1: 1D & 2D ARRAYS */}
      <div
        ref={secArray1D2DRef}
        data-mentor-target="sec51-1d-2d"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '1D और 2D Arrays बनाना' : 'Creating 1D and 2D Arrays'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एकल Row (Single Row) vs Rows और Columns की Table (Rows & Columns Matrix)' : 'Single dimensional vectors vs tabular matrices'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1D Array */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">1D Array (Vector)</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              marks = np.array([70, 80, 90, 60])
            </div>
            {/* Visual */}
            <div className="flex items-center gap-2 pt-2">
              {[70, 80, 90, 60].map((val, idx) => (
                <div key={idx} className="flex-1 text-center border border-purple-200 bg-white rounded p-1.5 shadow-2xs">
                  <div className="text-[9px] text-[#77758A]">Col {idx}</div>
                  <div className="text-xs font-bold text-[#4C2A9A]">{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2D Array */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">2D Array (Matrix: 2 Rows, 3 Columns)</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              marks = np.array([<br />
              &nbsp;&nbsp;[70, 80, 90],<br />
              &nbsp;&nbsp;[60, 75, 85]<br />
              ])
            </div>
            {/* Visual */}
            <div className="space-y-1 pt-1">
              <div className="flex gap-1 text-[10px] text-center font-bold">
                <span className="w-12 text-[#77758A]">Row 0</span>
                <span className="flex-1 bg-white border border-purple-200 rounded p-1 text-[#202033]">70</span>
                <span className="flex-1 bg-white border border-purple-200 rounded p-1 text-[#202033]">80</span>
                <span className="flex-1 bg-white border border-purple-200 rounded p-1 text-[#202033]">90</span>
              </div>
              <div className="flex gap-1 text-[10px] text-center font-bold">
                <span className="w-12 text-[#77758A]">Row 1</span>
                <span className="flex-1 bg-white border border-purple-200 rounded p-1 text-[#202033]">60</span>
                <span className="flex-1 bg-white border border-purple-200 rounded p-1 text-[#202033]">75</span>
                <span className="flex-1 bg-white border border-purple-200 rounded p-1 text-[#202033]">85</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ZEROS & ONES */}
      <div
        ref={secZerosOnesRef}
        data-mentor-target="sec51-zeros-ones"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'पूर्वनिर्मित Arrays: `np.zeros()` और `np.ones()`' : 'Built-in Initializers: zeros() & ones()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'शून्य या एक से भरी मेमोरी को तुरंत तैयार करना (Default float dtype)' : 'Pre-allocating buffer memory filled with zeros or ones'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C2A9A]">np.zeros(5) & np.zeros((2, 3))</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              z = np.zeros(5)<br />
              print(z) <span className="text-emerald-300"># [0. 0. 0. 0. 0.] (float)</span><br /><br />
              z2d = np.zeros((2, 3))<br />
              <span className="text-purple-300"># 2 Rows, 3 Cols of zeros</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C2A9A]">np.ones(4, dtype=int)</span>
            <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
              o_float = np.ones(4)<br />
              print(o_float) <span className="text-purple-300"># [1. 1. 1. 1.]</span><br /><br />
              o_int = np.ones(4, dtype=int)<br />
              print(o_int) <span className="text-emerald-300"># [1 1 1 1] (Integer)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: ARANGE VS LINSPACE */}
      <div
        ref={secArangeLinspaceRef}
        data-mentor-target="sec51-arange-linspace"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'क्रमवार Value: `arange()` बनाम `linspace()`' : 'Sequence Generation: arange() vs linspace()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'स्टेप साइज (Step Size) तय करना बनाम कुल Values की संख्या (Count) तय करना' : 'Step size boundary vs total sample count with inclusive endpoints'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Syntax</th>
                <th className="py-3 px-4">Stop Endpoint</th>
                <th className="py-3 px-4">Best Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]"><code>np.arange()</code></td>
                <td className="py-2.5 px-4 font-mono">np.arange(start, stop, step)</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">Excluded (छूट जाता है)</td>
                <td className="py-2.5 px-4">When exact step interval is known (e.g. 2, 4, 6, 8)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]"><code>np.linspace()</code></td>
                <td className="py-2.5 px-4 font-mono">np.linspace(start, stop, num)</td>
                <td className="py-2.5 px-4 text-emerald-600 font-semibold">Included (शामिल होता है)</td>
                <td className="py-2.5 px-4">Evenly spaced samples for charts & regression curves</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: DTYPE AND ASTYPE */}
      <div
        ref={secDtypeAstypeRef}
        data-mentor-target="sec51-dtype-astype"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Data Type और कन्वर्जन: `dtype` & `.astype()`' : 'Data Types and Casting: dtype & .astype()'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Integer को Float में बदलना या मेमोरी साइज को नियंत्रित करना' : 'Inspecting precision (int64, float64) and casting array memory'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white overflow-x-auto space-y-1">
          numbers = np.array([10, 20, 30])<br />
          print(numbers.dtype) <span className="text-purple-300"># Output: int64</span><br /><br />
          <span className="text-purple-300"># Cast to float using .astype()</span><br />
          converted = numbers.<span className="text-blue-400">astype</span>(float)<br />
          print(converted) <span className="text-emerald-300"># [10. 20. 30.]</span><br />
          print(converted.dtype) <span className="text-purple-300"># float64</span>
        </div>
      </div>

      {/* SECTION 5: DAILY SALES MATRIX EXAMPLE */}
      <div
        ref={secDailySalesRef}
        data-mentor-target="sec51-daily-sales"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">📊</span>
          <h3 className="text-sm font-bold">{isHi ? 'रियल-लाइफ उदाहरण: दैनिक बिक्री (Daily Sales)' : 'Real-Life Retail Example: Daily Sales Array'}</h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? '5 दिनों की बिक्री Data स्टोर करना और त्वरित Calculation करना:'
            : 'Storing 5 consecutive days of retail revenue in an ndarray:'}
        </p>
        <div className="bg-[#202033] p-3 rounded font-mono text-xs text-white">
          sales = np.array([500, 700, 650, 900, 800])<br />
          print(<span className="text-emerald-300">&quot;Total Days:&quot;</span>, len(sales)) <span className="text-purple-300"># 5</span><br />
          print(<span className="text-emerald-300">&quot;Total Revenue: ₹&quot;</span>, sales.sum()) <span className="text-emerald-300"># ₹3550</span>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec51-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 2 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? '1D vs 2D Arrays:' : '1D vs 2D Arrays:'}</strong>{' '}
            {isHi ? '1D एक Row Vector है, जबकि 2D Rows और Columns की Table (Matrix) है।' : '1D is a row vector, while 2D is a table matrix of rows and columns.'}
          </li>
          <li>
            <strong>{isHi ? '`arange()` vs `linspace()`:' : '`arange()` vs `linspace()`:'}</strong>{' '}
            {isHi ? '`arange()` में स्टेप साइज बताते हैं, `linspace()` में कुल Values की संख्या बताते हैं।' : 'Use `arange()` for defined steps; use `linspace()` for exact number of sample points.'}
          </li>
          <li>
            <strong>{isHi ? 'Data Type कन्वर्जन:' : 'Type Casting:'}</strong>{' '}
            {isHi ? '`.astype(float)` से बिना मूल Data बिगाड़े नया कास्टेड Array बनाएं।' : 'Use `.astype()` to convert types safely without altering underlying data.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
