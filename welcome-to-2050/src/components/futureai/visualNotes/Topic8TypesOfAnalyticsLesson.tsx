import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic8VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic8TypesOfAnalyticsLesson: React.FC<Topic8VisualLessonProps> = ({
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
  const secShopTableRef = useRef<HTMLDivElement>(null);
  const secFourTypesRef = useRef<HTMLDivElement>(null);
  const secComparisonRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec8-title': secTitleRef,
      'sec8-shop-table': secShopTableRef,
      'sec8-four-types': secFourTypesRef,
      'sec8-comparison': secComparisonRef,
      'sec8-takeaway': secTakeawayRef,
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

  useEffect(() => {
    const handleUpdate = () => {
      if (!activeSectionId || !onSectionRectChange) return;
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        'sec8-title': secTitleRef,
        'sec8-shop-table': secShopTableRef,
        'sec8-four-types': secFourTypesRef,
        'sec8-comparison': secComparisonRef,
        'sec8-takeaway': secTakeawayRef,
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

      {/* ── 1. TITLE RIBBON BANNER ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec8-title'
        )}`}
      >
        {activeSectionId === 'sec8-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor: 4 Types of Analytics</span>
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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🍧</span>
              <h1 className="text-sm sm:text-xl md:text-[23px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Types of Data Analytics
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🔍</span>
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
          There are four common types of Data Analytics. Each type answers a different critical business question!
        </p>
      </div>

      {/* ── 2. EXAMPLE: A SMALL ICE CREAM SHOP SALES TABLE ── */}
      <div
        ref={secShopTableRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec8-shop-table'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🍦</span>
          <span>Example: A Small Ice Cream Shop</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <div className="rounded-2xl border-2 border-purple-200 overflow-hidden text-xs shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-purple-100 font-bold text-purple-950">
                <tr>
                  <th className="p-2 px-3">Day</th>
                  <th className="p-2 px-3 text-right">Ice Creams Sold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 bg-white font-medium">
                <tr>
                  <td className="p-2 px-3">Monday</td>
                  <td className="p-2 px-3 text-right">20</td>
                </tr>
                <tr>
                  <td className="p-2 px-3">Tuesday</td>
                  <td className="p-2 px-3 text-right">25</td>
                </tr>
                <tr>
                  <td className="p-2 px-3">Wednesday</td>
                  <td className="p-2 px-3 text-right">30</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-2 px-3 text-rose-950 font-bold">Thursday</td>
                  <td className="p-2 px-3 text-right font-black text-rose-700">15 (Lowest)</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="p-2 px-3 text-emerald-950 font-bold">Friday</td>
                  <td className="p-2 px-3 text-right font-black text-emerald-700">40 (Highest)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#faf5ff] border-2 border-purple-200 text-xs space-y-2">
            <h5 className="font-bold text-purple-950">Weekly Sales Summary:</h5>
            <p className="text-slate-700">• <strong>Total Sales:</strong> 130 ice creams sold.</p>
            <p className="text-slate-700">• <strong>Peak Day:</strong> Friday (40 units).</p>
            <p className="text-slate-700">• <strong>Low Day:</strong> Thursday (15 units).</p>
          </div>
        </div>
      </div>

      {/* ── 3. FOUR TYPES OF ANALYTICS APPLIED (4 DETAILED CARDS) ── */}
      <div
        ref={secFourTypesRef}
        className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch transition-all duration-300 ${getCardClass(
          'sec8-four-types'
        )}`}
      >
        {/* 1. Descriptive Analytics */}
        <div className="p-4 rounded-2xl bg-white border-2 border-sky-300 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-300">
              1. Descriptive Analytics
            </span>
            <span className="text-xs text-sky-700 font-bold">Past</span>
          </div>
          <strong className="text-xs sm:text-[13px] text-sky-950 block">Question: "What happened?"</strong>
          <p className="text-xs text-slate-700 leading-snug">
            Explains past results: Friday had highest sales (40), Thursday had lowest (15), and total was 130.
          </p>
          <div className="p-1.5 rounded-lg bg-sky-50 text-[11px] font-semibold text-sky-900">
            📊 It tells us what happened in the past.
          </div>
        </div>

        {/* 2. Diagnostic Analytics */}
        <div className="p-4 rounded-2xl bg-white border-2 border-pink-300 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-900 border border-pink-300">
              2. Diagnostic Analytics
            </span>
            <span className="text-xs text-pink-700 font-bold">Why</span>
          </div>
          <strong className="text-xs sm:text-[13px] text-pink-950 block">Question: "Why did it happen?"</strong>
          <p className="text-xs text-slate-700 leading-snug">
            Thursday sales were low. Checking records reveals the shop closed early! This explains the drop.
          </p>
          <div className="p-1.5 rounded-lg bg-pink-50 text-[11px] font-semibold text-pink-900">
            🔍 It discovers the root cause and reasons behind results.
          </div>
        </div>

        {/* 3. Predictive Analytics */}
        <div className="p-4 rounded-2xl bg-white border-2 border-amber-300 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              3. Predictive Analytics
            </span>
            <span className="text-xs text-amber-700 font-bold">Future</span>
          </div>
          <strong className="text-xs sm:text-[13px] text-amber-950 block">Question: "What might happen?"</strong>
          <p className="text-xs text-slate-700 leading-snug">
            Sales increase on hot days. Based on past patterns and weather forecast, tomorrow's demand will likely be high!
          </p>
          <div className="p-1.5 rounded-lg bg-amber-50 text-[11px] font-semibold text-amber-900">
            🔮 Estimates future likelihood (an estimate, not guarantee).
          </div>
        </div>

        {/* 4. Prescriptive Analytics */}
        <div className="p-4 rounded-2xl bg-white border-2 border-emerald-300 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
              4. Prescriptive Analytics
            </span>
            <span className="text-xs text-emerald-700 font-bold">Action</span>
          </div>
          <strong className="text-xs sm:text-[13px] text-emerald-950 block">Question: "What should we do?"</strong>
          <p className="text-xs text-slate-700 leading-snug">
            If tomorrow will be hot, the shop should prepare extra ice cream tubs in advance to avoid stock-outs!
          </p>
          <div className="p-1.5 rounded-lg bg-emerald-50 text-[11px] font-semibold text-emerald-900">
            🎯 Recommends the best action to take for maximum profit.
          </div>
        </div>
      </div>

      {/* ── 4. ALL FOUR TYPES SUMMARY TABLE ── */}
      <div
        ref={secComparisonRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec8-comparison'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">📊</span>
          <span>Summary Table of All 4 Types</span>
        </div>

        <div className="rounded-2xl border-2 border-purple-200/90 overflow-hidden text-xs shadow-2xs">
          <table className="w-full text-left">
            <thead className="bg-purple-100 font-bold text-purple-950">
              <tr>
                <th className="p-2 sm:p-2.5">Type</th>
                <th className="p-2 sm:p-2.5">Question</th>
                <th className="p-2 sm:p-2.5">Ice Cream Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white font-medium">
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-sky-950">Descriptive</td>
                <td className="p-2 sm:p-2.5 text-slate-700">What happened?</td>
                <td className="p-2 sm:p-2.5 text-slate-800">Friday sales were highest (40)</td>
              </tr>
              <tr className="bg-purple-50/40">
                <td className="p-2 sm:p-2.5 font-bold text-pink-950">Diagnostic</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Why did it happen?</td>
                <td className="p-2 sm:p-2.5 text-slate-800">Thursday closed early</td>
              </tr>
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-amber-950">Predictive</td>
                <td className="p-2 sm:p-2.5 text-slate-700">What might happen?</td>
                <td className="p-2 sm:p-2.5 text-slate-800">Hot weather will boost demand</td>
              </tr>
              <tr className="bg-purple-50/40">
                <td className="p-2 sm:p-2.5 font-bold text-emerald-950">Prescriptive</td>
                <td className="p-2 sm:p-2.5 text-slate-700">What should we do?</td>
                <td className="p-2 sm:p-2.5 text-slate-800 font-bold text-emerald-800">Prepare extra stock ahead</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 5. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec8-takeaway'
          )}`}
        >
          {activeSectionId === 'sec8-takeaway' && (
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
            Descriptive → Diagnostic → Predictive → Prescriptive.{' '}
            <strong className="text-purple-700 underline decoration-purple-300 underline-offset-2">
              What happened → Why → What might happen → What should we do?
            </strong>
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
