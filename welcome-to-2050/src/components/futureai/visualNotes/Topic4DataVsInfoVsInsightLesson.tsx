import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic4VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic4DataVsInfoVsInsightLesson: React.FC<Topic4VisualLessonProps> = ({
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
  const secDataRef = useRef<HTMLDivElement>(null);
  const secInfoRef = useRef<HTMLDivElement>(null);
  const secInsightRef = useRef<HTMLDivElement>(null);
  const secTableRef = useRef<HTMLDivElement>(null);
  const secMarksRef = useRef<HTMLDivElement>(null);
  const secConnectionRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active section when changed
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec4-title': secTitleRef,
      'sec4-data': secDataRef,
      'sec4-info': secInfoRef,
      'sec4-insight': secInsightRef,
      'sec4-table': secTableRef,
      'sec4-marks': secMarksRef,
      'sec4-connection': secConnectionRef,
      'sec4-takeaway': secTakeawayRef,
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
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2,
          });
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  // Update rect on scroll / resize
  useEffect(() => {
    const handleUpdate = () => {
      if (!activeSectionId || !onSectionRectChange) return;
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        'sec4-title': secTitleRef,
        'sec4-data': secDataRef,
        'sec4-info': secInfoRef,
        'sec4-insight': secInsightRef,
        'sec4-table': secTableRef,
        'sec4-marks': secMarksRef,
        'sec4-connection': secConnectionRef,
        'sec4-takeaway': secTakeawayRef,
      };
      const targetEl = refMap[activeSectionId]?.current;
      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        onSectionRectChange({
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height,
          centerX: rect.left + rect.width / 2,
          centerY: rect.top + rect.height / 2,
        });
      }
    };

    window.addEventListener('resize', handleUpdate);
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleUpdate, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', handleUpdate);
      if (container) {
        container.removeEventListener('scroll', handleUpdate);
      }
    };
  }, [activeSectionId, onSectionRectChange]);

  const isAnyActive = Boolean(activeSectionId);

  const getCardClass = (id: string) => {
    if (!isAnyActive) return 'transition-all duration-300';
    if (activeSectionId === id) return 'lesson-section-active';
    return 'lesson-section-inactive hover:opacity-100';
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-4 sm:space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TITLE RIBBON BANNER: DATA VS INFORMATION VS INSIGHT ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec4-title'
        )}`}
      >
        {activeSectionId === 'sec4-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: 3 Key Concepts</span>
          </div>
        )}

        {/* Ribbon Banner with Flowers */}
        <div className="relative flex items-center justify-center max-w-[740px] mx-auto px-1 sm:px-2">
          {/* Left Bouquet */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -mr-2 sm:-mr-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              <path d="M 16 14 Q 16 19 21 19 Q 16 19 16 24 Q 16 19 11 19 Q 16 19 16 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 28 90 Q 38 65 38 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 34 68 Q 18 64 20 52 Q 28 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <g transform="translate(38, 36)">
                <circle cx="0" cy="-11" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="10" cy="-3" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="6" cy="9" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="-6" cy="9" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="-10" cy="-3" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          <div className="relative flex-1 max-w-[560px]">
            <svg viewBox="0 0 540 85" className="w-full h-auto drop-shadow-2xs" fill="none">
              <path d="M 45 32 L 8 28 L 22 46 L 8 64 L 45 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 45 32 L 60 40 L 45 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 495 32 L 532 28 L 518 46 L 532 64 L 495 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 495 32 L 480 40 L 495 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 50 25 Q 270 12 490 25 Q 482 68 490 68 Q 270 80 50 68 Q 58 25 50 25 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.4" strokeLinejoin="round" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 pointer-events-none select-none">
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🔢</span>
              <h1 className="text-sm sm:text-xl md:text-[23px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Data vs Information vs Insight
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">💡</span>
            </div>
          </div>

          {/* Right Bouquet */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -ml-2 sm:-ml-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              <path d="M 54 14 Q 54 19 49 19 Q 54 19 54 24 Q 54 19 59 19 Q 54 19 54 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 42 90 Q 32 65 32 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 36 68 Q 52 64 50 52 Q 42 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <g transform="translate(32, 36)">
                <circle cx="0" cy="-11" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <circle cx="10" cy="-3" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <circle cx="6" cy="9" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <circle cx="-6" cy="9" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <circle cx="-10" cy="-3" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>

        <p className="mt-2 text-xs sm:text-[14px] text-[#2a174a] font-medium max-w-xl mx-auto px-2 leading-relaxed">
          Data, Information, and Insight are three different things. Let's understand them with a very simple fruit sales example!
        </p>
      </div>

      {/* ── 2. THREE CORE PILLARS: DATA vs INFO vs INSIGHT (RICH ILLUSTRATED CARDS) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
        {/* Block 1: What is Data? */}
        <div
          ref={secDataRef}
          className={`p-4 rounded-2xl bg-white border-2 border-sky-300 shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
            'sec4-data'
          )}`}
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-300">
              1. What Is Data?
            </span>
            <span className="text-[10px] font-black text-sky-600 uppercase">Raw Facts</span>
          </div>

          {/* Jumbled Numbers Illustration */}
          <div className="h-20 rounded-xl bg-gradient-to-b from-sky-50 to-white border border-sky-200 flex items-center justify-around p-2">
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-sky-400 shadow-xs flex items-center justify-center font-mono font-black text-lg text-sky-900 -rotate-6">
              10
            </div>
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-sky-400 shadow-xs flex items-center justify-center font-mono font-black text-lg text-sky-900 rotate-6">
              20
            </div>
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-sky-400 shadow-xs flex items-center justify-center font-mono font-black text-lg text-sky-900 -rotate-3">
              30
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-snug">
            Look at these numbers: <strong>10, 20, 30</strong>. Do you know what they mean? No, because there is no explanation! These raw numbers are called <strong>Data</strong>.
          </p>

          <div className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-950 text-center">
            Data = Raw facts or numbers
          </div>
        </div>

        {/* Block 2: What is Information? */}
        <div
          ref={secInfoRef}
          className={`p-4 rounded-2xl bg-white border-2 border-purple-300 shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
            'sec4-info'
          )}`}
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300">
              2. What Is Information?
            </span>
            <span className="text-[10px] font-black text-purple-600 uppercase">Meaning</span>
          </div>

          {/* Fruit Sales Table */}
          <div className="rounded-xl border border-purple-200 overflow-hidden text-xs shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-purple-100 font-bold text-purple-950">
                <tr>
                  <th className="p-1.5 px-2.5">Fruit</th>
                  <th className="p-1.5 px-2.5 text-right">Sold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 bg-white font-medium">
                <tr>
                  <td className="p-1.5 px-2.5">🍎 Apples</td>
                  <td className="p-1.5 px-2.5 text-right font-bold">10</td>
                </tr>
                <tr>
                  <td className="p-1.5 px-2.5">🍌 Bananas</td>
                  <td className="p-1.5 px-2.5 text-right font-bold">20</td>
                </tr>
                <tr className="bg-amber-50/60 font-bold text-amber-950">
                  <td className="p-1.5 px-2.5">🥭 Mangoes</td>
                  <td className="p-1.5 px-2.5 text-right text-amber-700">30</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-700 leading-snug">
            Now we understand the numbers! 10 apples sold, 20 bananas sold, and 30 mangoes sold. When data gets clear context, it becomes <strong>Information</strong>.
          </p>

          <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-950 text-center">
            Information = Data with clear meaning
          </div>
        </div>

        {/* Block 3: What is Insight? */}
        <div
          ref={secInsightRef}
          className={`p-4 rounded-2xl bg-white border-2 border-amber-300 shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
            'sec4-insight'
          )}`}
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              3. What Is Insight?
            </span>
            <span className="text-[10px] font-black text-amber-600 uppercase">Actionable</span>
          </div>

          {/* Discovery Card */}
          <div className="h-20 rounded-xl bg-gradient-to-b from-amber-50 to-white border-2 border-amber-300 p-2 flex flex-col items-center justify-center text-center space-y-1">
            <span className="text-xl">🥭 🔍</span>
            <strong className="text-xs sm:text-[13px] text-amber-950 font-black">
              "Mangoes sold the most!"
            </strong>
            <span className="text-[10px] text-amber-700 font-bold">Shop owner orders more mangoes</span>
          </div>

          <p className="text-xs text-slate-700 leading-snug">
            Insight means something useful we learn by studying information. The shop owner can use this insight to decide whether to buy more mangoes!
          </p>

          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950 text-center">
            Insight = Something useful we learn
          </div>
        </div>
      </div>

      {/* ── 3. SIMPLE DIFFERENCE MATRIX ── */}
      <div
        ref={secTableRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec4-table'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">⚖️</span>
          <span>Simple Difference Matrix</span>
        </div>

        <div className="rounded-2xl border-2 border-purple-200/90 overflow-hidden text-xs shadow-2xs">
          <table className="w-full text-left">
            <thead className="bg-purple-100/90 font-black text-purple-950 border-b border-purple-200">
              <tr>
                <th className="p-2.5 sm:p-3 text-sky-950">Data</th>
                <th className="p-2.5 sm:p-3 text-purple-950">Information</th>
                <th className="p-2.5 sm:p-3 text-amber-950">Insight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white font-medium">
              <tr>
                <td className="p-2.5 sm:p-3 text-slate-700">Raw numbers</td>
                <td className="p-2.5 sm:p-3 text-slate-700">Numbers with meaning</td>
                <td className="p-2.5 sm:p-3 font-bold text-emerald-700">What we learn</td>
              </tr>
              <tr className="bg-purple-50/40">
                <td className="p-2.5 sm:p-3 font-mono font-bold text-sky-800">10, 20, 30</td>
                <td className="p-2.5 sm:p-3 font-bold text-purple-900">Fruit sales numbers</td>
                <td className="p-2.5 sm:p-3 font-black text-amber-800">Mangoes sold the most</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 4. ANOTHER EASY EXAMPLE: SCHOOL MARKS STAIRCASE ── */}
      <div
        ref={secMarksRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec4-marks'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🎓</span>
          <span>Another Easy Example: School Marks</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-1">
            <span className="text-[10px] font-black text-sky-600 uppercase block">1. Data</span>
            <div className="font-mono font-black text-base text-sky-950">40, 60, 80</div>
            <p className="text-[11px] text-slate-600">Raw test scores without context.</p>
          </div>

          <div className="p-3 rounded-2xl bg-purple-50 border-2 border-purple-200 space-y-1">
            <span className="text-[10px] font-black text-purple-600 uppercase block">2. Information</span>
            <div className="font-bold text-xs sm:text-[13px] text-purple-950">A student's marks in 3 tests</div>
            <p className="text-[11px] text-slate-600">Structured meaning applied to the figures.</p>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 space-y-1">
            <span className="text-[10px] font-black text-emerald-600 uppercase block">3. Insight</span>
            <div className="font-black text-xs sm:text-[13px] text-emerald-950">Marks are improving! 📈</div>
            <p className="text-[11px] text-emerald-700">Actionable discovery derived from analysis.</p>
          </div>
        </div>
      </div>

      {/* ── 5. HOW ARE THEY CONNECTED? (THE CONTINUOUS VALUE CHAIN) ── */}
      <div
        ref={secConnectionRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 text-center transition-all duration-300 ${getCardClass(
          'sec4-connection'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🔗</span>
          <span>How Are They Connected? (The Pipeline)</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1 pt-1">
          {/* Data */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-sky-50 border border-sky-300">
            <span className="text-xs font-black text-sky-950 block">Data</span>
            <span className="text-[10px] text-slate-600">10, 20, 30</span>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <span className="text-purple-600 font-black">→</span>
          </div>

          {/* Information */}
          <div className="p-2 rounded-2xl flex-1 min-w-[95px] bg-purple-50 border border-purple-300">
            <span className="text-xs font-black text-purple-950 block">Information</span>
            <span className="text-[10px] text-slate-600">Fruit sales</span>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <span className="text-purple-600 font-black">→</span>
          </div>

          {/* Insight */}
          <div className="p-2 rounded-2xl flex-1 min-w-[95px] bg-amber-50 border border-amber-300">
            <span className="text-xs font-black text-amber-950 block">Insight</span>
            <span className="text-[10px] text-slate-600">Mangoes top</span>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <span className="text-purple-600 font-black">→</span>
          </div>

          {/* Decision */}
          <div className="p-2 rounded-2xl flex-1 min-w-[95px] bg-emerald-50 border border-emerald-300">
            <span className="text-xs font-black text-emerald-950 block">Decision</span>
            <span className="text-[10px] text-slate-600">Buy more mangoes</span>
          </div>
        </div>
      </div>

      {/* ── 6. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec4-takeaway'
          )}`}
        >
          {activeSectionId === 'sec4-takeaway' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping inline-block" />
              <span>✨ AI Mentor Key Takeaway</span>
            </div>
          )}

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-[13px] font-bold shrink-0 bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
            <span className="text-amber-400 text-sm">💡</span>
            <span>Key Takeaway</span>
          </div>

          <div className="text-xs sm:text-sm font-bold text-[#2a174a] leading-relaxed">
            <span><strong>Data</strong> = Raw Facts | <strong>Information</strong> = Meaning | <strong>Insight</strong> = Useful Learning. </span>
            <strong className="text-purple-700 underline decoration-purple-300 underline-offset-2">
              Data gives numbers, Information explains, and Insight guides decisions!
            </strong>
          </div>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
