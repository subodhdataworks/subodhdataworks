import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic5VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic5DataDecisionMakingLesson: React.FC<Topic5VisualLessonProps> = ({
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
  const secWhyHelpfulRef = useRef<HTMLDivElement>(null);
  const secExampleRef = useRef<HTMLDivElement>(null);
  const secGuessingRef = useRef<HTMLDivElement>(null);
  const secStepsRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active section when changed
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec5-title': secTitleRef,
      'sec5-why-helpful': secWhyHelpfulRef,
      'sec5-example': secExampleRef,
      'sec5-guessing': secGuessingRef,
      'sec5-steps': secStepsRef,
      'sec5-takeaway': secTakeawayRef,
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
        'sec5-title': secTitleRef,
        'sec5-why-helpful': secWhyHelpfulRef,
        'sec5-example': secExampleRef,
        'sec5-guessing': secGuessingRef,
        'sec5-steps': secStepsRef,
        'sec5-takeaway': secTakeawayRef,
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

      {/* ── 1. TITLE RIBBON BANNER: THE ROLE OF DATA IN DECISION-MAKING ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec5-title'
        )}`}
      >
        {activeSectionId === 'sec5-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Decision-Making</span>
          </div>
        )}

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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🎯</span>
              <h1 className="text-sm sm:text-xl md:text-[23px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                The Role of Data in Decision-Making
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">📊</span>
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

        {/* What is a Decision? & Data-Driven Definition */}
        <div className="mt-2 text-center max-w-xl mx-auto px-2 space-y-2">
          <p className="text-xs sm:text-[14px] text-[#2a174a] font-medium leading-relaxed">
            A <strong>Decision</strong> means choosing what to do. We make decisions every day: what food to eat, which clothes to wear, or which road to take!
          </p>

          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-600 text-white text-xs sm:text-[13px] font-bold shadow-xs">
            🎯 <strong>Data-Driven Decision-Making:</strong> Choosing actions based on real facts & numbers instead of guessing!
          </div>
        </div>
      </div>

      {/* ── 2. WHY IS DATA HELPFUL? 5 CORE REASONS (ILLUSTRATED CARDS) ── */}
      <div
        ref={secWhyHelpfulRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec5-why-helpful'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">⭐</span>
          <span>Why Is Data Helpful? (5 Reasons)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1 text-xs">
          {/* Card A: Understand Problems */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center">A</span>
              <h5 className="font-bold text-[#2a174a] text-xs sm:text-[13px]">Understand Problems</h5>
            </div>
            <p className="text-slate-600 leading-snug">
              Shop owner checks why sales are low to fix issues immediately.
            </p>
          </div>

          {/* Card B: Compare Things */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-black text-xs flex items-center justify-center">B</span>
              <h5 className="font-bold text-[#2a174a] text-xs sm:text-[13px]">Compare Things</h5>
            </div>
            <p className="text-slate-600 leading-snug">
              A student compares marks across subjects to see where to focus.
            </p>
          </div>

          {/* Card C: Make Better Choices */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center">C</span>
              <h5 className="font-bold text-[#2a174a] text-xs sm:text-[13px]">Make Better Choices</h5>
            </div>
            <p className="text-slate-600 leading-snug">
              Store owner checks verified sales data before purchasing stock.
            </p>
          </div>

          {/* Card D: Save Money */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center">D</span>
              <h5 className="font-bold text-[#2a174a] text-xs sm:text-[13px]">Save Money</h5>
            </div>
            <p className="text-slate-600 leading-snug">
              A restaurant checks food waste records to prepare less extra food.
            </p>
          </div>

          {/* Card E: Check Results */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200 shadow-2xs space-y-1.5 sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center">E</span>
              <h5 className="font-bold text-[#2a174a] text-xs sm:text-[13px]">Check Results</h5>
            </div>
            <p className="text-slate-600 leading-snug">
              A business compares sales numbers before and after a discount promotion to see if it worked.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. EASY EXAMPLE: CHOOSING WHAT TO SELL (PENS, PENCILS, ERASERS) ── */}
      <div
        ref={secExampleRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec5-example'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">✏️</span>
          <span>Easy Example: Choosing What to Sell</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Visual Sales Bars (Cols 6) */}
          <div className="md:col-span-6 rounded-2xl border-2 border-purple-200 p-3 bg-gradient-to-b from-purple-50/30 to-white space-y-3 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-purple-950 border-b border-purple-100 pb-1.5">
              <span>Stationery Sold Last Week</span>
              <span className="text-purple-600">Visual Sales Bar</span>
            </div>

            {/* Pens Row */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-950">
                  ✒️ <span>Pens</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-200 text-emerald-900 font-black">Top Seller</span>
                </span>
                <span className="font-mono text-emerald-700 font-black">50 sold</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[100%]" />
              </div>
            </div>

            {/* Pencils Row */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-slate-800">
                  ✏️ <span>Pencils</span>
                </span>
                <span className="font-mono text-slate-700 font-bold">20 sold</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-[40%]" />
              </div>
            </div>

            {/* Erasers Row */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-rose-950">
                  🧼 <span>Erasers</span>
                </span>
                <span className="font-mono text-rose-700 font-black">10 sold</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full w-[20%]" />
              </div>
            </div>
          </div>

          {/* 5-Step Action Taken (Cols 6) */}
          <div className="md:col-span-6 space-y-1.5 p-3.5 rounded-2xl bg-[#faf5ff] border-2 border-purple-200 text-xs">
            <h5 className="font-bold text-purple-950 text-xs sm:text-[13px]">5-Step Action Cycle:</h5>
            <ol className="space-y-1.5 text-slate-700 font-medium">
              <li className="flex items-start gap-1.5">
                <span className="w-4 h-4 rounded-full bg-purple-200 text-purple-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span><strong>Look at Data:</strong> Pens sold the most (50 units).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-4 h-4 rounded-full bg-purple-200 text-purple-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span><strong>Understand Data:</strong> Customers bought more pens than pencils/erasers.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-4 h-4 rounded-full bg-purple-200 text-purple-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span><strong>Make a Decision:</strong> Owner decides to buy more pens.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-4 h-4 rounded-full bg-purple-200 text-purple-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span><strong>Take Action:</strong> Orders new pens from supplier.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-4 h-4 rounded-full bg-purple-200 text-purple-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">5</span>
                <span><strong>Check Result:</strong> Next week, checks sales numbers again!</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* ── 4. GUESSING VS USING DATA (SIDE-BY-SIDE CONTRAST MATRIX) ── */}
      <div
        ref={secGuessingRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec5-guessing'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">⚖️</span>
          <span>Guessing vs Using Data</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Left: Guessing */}
          <div className="p-3.5 rounded-2xl bg-rose-50/60 border-2 border-rose-200 space-y-2">
            <div className="flex items-center gap-2 text-rose-900 font-black text-sm">
              <span>❌</span>
              <span>Guessing (Only Intuition)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• "I think pens sell more."</li>
              <li>• No clear proof or validation.</li>
              <li>• High risk: May lead to poor planning & heavy financial loss!</li>
            </ul>
          </div>

          {/* Right: Using Data */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border-2 border-emerald-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-black text-sm">
              <span>✅</span>
              <span>Using Data (Fact-Driven)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• "50 pens sold last week."</li>
              <li>• Based on verified sales records.</li>
              <li>• Low risk: Helps make profitable, accurate business plans!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 5. DECISION CYCLE (6 STEPS IN SEQUENCE) ── */}
      <div
        ref={secStepsRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 text-center transition-all duration-300 ${getCardClass(
          'sec5-steps'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🚀</span>
          <span>Steps to Make a Decision Using Data</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1 pt-1">
          <div className="p-2 rounded-2xl flex-1 min-w-[80px] bg-purple-50 border border-purple-200">
            <span className="text-[10px] font-bold text-purple-600 block">Step 1</span>
            <strong className="text-xs text-purple-950">Question</strong>
          </div>
          <span className="text-purple-600 font-black">→</span>
          <div className="p-2 rounded-2xl flex-1 min-w-[80px] bg-sky-50 border border-sky-200">
            <span className="text-[10px] font-bold text-sky-600 block">Step 2</span>
            <strong className="text-xs text-sky-950">Data</strong>
          </div>
          <span className="text-purple-600 font-black">→</span>
          <div className="p-2 rounded-2xl flex-1 min-w-[80px] bg-amber-50 border border-amber-200">
            <span className="text-[10px] font-bold text-amber-600 block">Step 3</span>
            <strong className="text-xs text-amber-950">Understand</strong>
          </div>
          <span className="text-purple-600 font-black">→</span>
          <div className="p-2 rounded-2xl flex-1 min-w-[80px] bg-indigo-50 border border-indigo-200">
            <span className="text-[10px] font-bold text-indigo-600 block">Step 4</span>
            <strong className="text-xs text-indigo-950">Decision</strong>
          </div>
          <span className="text-purple-600 font-black">→</span>
          <div className="p-2 rounded-2xl flex-1 min-w-[80px] bg-rose-50 border border-rose-200">
            <span className="text-[10px] font-bold text-rose-600 block">Step 5</span>
            <strong className="text-xs text-rose-950">Action</strong>
          </div>
          <span className="text-purple-600 font-black">→</span>
          <div className="p-2 rounded-2xl flex-1 min-w-[80px] bg-emerald-50 border border-emerald-200">
            <span className="text-[10px] font-bold text-emerald-600 block">Step 6</span>
            <strong className="text-xs text-emerald-950">Result</strong>
          </div>
        </div>
      </div>

      {/* ── 6. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec5-takeaway'
          )}`}
        >
          {activeSectionId === 'sec5-takeaway' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping inline-block" />
              <span>✨ AI Mentor Key Takeaway</span>
            </div>
          )}

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-[13px] font-bold shrink-0 bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
            <span className="text-amber-400 text-sm">💡</span>
            <span>Key Takeaway</span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-[#2a174a] leading-relaxed">
            Data helps us understand problems, compare choices, and make better decisions.{' '}
            <strong className="text-purple-700 underline decoration-purple-300 underline-offset-2">
              Remember: Don't just guess. Check the facts before making an important decision!
            </strong>
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
