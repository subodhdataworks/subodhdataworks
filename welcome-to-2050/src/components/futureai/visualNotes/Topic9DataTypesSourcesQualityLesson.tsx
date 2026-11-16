import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic9VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic9DataTypesSourcesQualityLesson: React.FC<Topic9VisualLessonProps> = ({
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
  const secTypesRef = useRef<HTMLDivElement>(null);
  const secSourcesRef = useRef<HTMLDivElement>(null);
  const secQualityRef = useRef<HTMLDivElement>(null);
  const secPoorQualityRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec9-title': secTitleRef,
      'sec9-types': secTypesRef,
      'sec9-sources': secSourcesRef,
      'sec9-quality': secQualityRef,
      'sec9-poor-quality': secPoorQualityRef,
      'sec9-takeaway': secTakeawayRef,
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
        'sec9-title': secTitleRef,
        'sec9-types': secTypesRef,
        'sec9-sources': secSourcesRef,
        'sec9-quality': secQualityRef,
        'sec9-poor-quality': secPoorQualityRef,
        'sec9-takeaway': secTakeawayRef,
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
          'sec9-title'
        )}`}
      >
        {activeSectionId === 'sec9-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor: Data Types & Quality</span>
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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🗂️</span>
              <h1 className="text-xs sm:text-lg md:text-[20px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Understanding Data Types, Sources & Quality
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">✨</span>
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
          Data means facts or information (Name: Rahul, Age: 18, Marks: 85, City: Patna, Attendance: Present).
        </p>
      </div>

      {/* ── 2. WHAT ARE DATA TYPES? (4 BASIC TYPES) ── */}
      <div
        ref={secTypesRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec9-types'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🔤</span>
          <span>4 Basic Data Types</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* Numbers */}
          <div className="p-3 rounded-2xl bg-sky-50 border-2 border-sky-200 text-center space-y-1">
            <span className="text-base block">🔢</span>
            <strong className="text-xs text-sky-950 block">Numbers</strong>
            <span className="text-[11px] text-slate-600 block">Age: 20, Marks: 85, ₹100</span>
            <span className="text-[9.5px] text-sky-700 font-bold">Calculations possible</span>
          </div>

          {/* Text */}
          <div className="p-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-center space-y-1">
            <span className="text-base block">📝</span>
            <strong className="text-xs text-purple-950 block">Text / String</strong>
            <span className="text-[11px] text-slate-600 block">Rahul, Delhi, Milk</span>
            <span className="text-[9.5px] text-purple-700 font-bold">Names & words</span>
          </div>

          {/* Date & Time */}
          <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center space-y-1">
            <span className="text-base block">📅</span>
            <strong className="text-xs text-amber-950 block">Date & Time</strong>
            <span className="text-[11px] text-slate-600 block">10 Jan 2026, 10:30 AM</span>
            <span className="text-[9.5px] text-amber-700 font-bold">When it happened</span>
          </div>

          {/* Yes/No */}
          <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center space-y-1">
            <span className="text-base block">⚖️</span>
            <strong className="text-xs text-emerald-950 block">Yes/No (Boolean)</strong>
            <span className="text-[11px] text-slate-600 block">Paid: Yes, Present: No</span>
            <span className="text-[9.5px] text-emerald-700 font-bold">True or False</span>
          </div>
        </div>

        {/* Combined Table Example */}
        <div className="rounded-2xl border-2 border-purple-200 overflow-hidden text-xs shadow-2xs mt-2">
          <table className="w-full text-left">
            <thead className="bg-purple-100 font-bold text-purple-950">
              <tr>
                <th className="p-2 px-3">Name (Text)</th>
                <th className="p-2 px-3 text-right">Age (Number)</th>
                <th className="p-2 px-3">Joining Date (Date)</th>
                <th className="p-2 px-3 text-right">Fee Paid (Yes/No)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white font-medium">
              <tr>
                <td className="p-2 px-3">Rahul</td>
                <td className="p-2 px-3 text-right font-bold text-sky-800">20</td>
                <td className="p-2 px-3 text-amber-900">10 Jan 2026</td>
                <td className="p-2 px-3 text-right font-bold text-emerald-700">Yes</td>
              </tr>
              <tr>
                <td className="p-2 px-3">Priya</td>
                <td className="p-2 px-3 text-right font-bold text-sky-800">21</td>
                <td className="p-2 px-3 text-amber-900">12 Jan 2026</td>
                <td className="p-2 px-3 text-right font-bold text-rose-700">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 3. DATA SOURCES ── */}
      <div
        ref={secSourcesRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
          'sec9-sources'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🌐</span>
          <span>Where Does Data Come From? (Sources)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <strong className="text-purple-950 block">Excel Files</strong>
            <span className="text-[10px] text-slate-600">Daily shop spreadsheets</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <strong className="text-purple-950 block">Databases</strong>
            <span className="text-[10px] text-slate-600">Bank transactions</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <strong className="text-purple-950 block">Online Forms</strong>
            <span className="text-[10px] text-slate-600">Registrations</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <strong className="text-purple-950 block">Apps & Sites</strong>
            <span className="text-[10px] text-slate-600">Shopping clicks</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 col-span-2 sm:col-span-1">
            <strong className="text-purple-950 block">Surveys</strong>
            <span className="text-[10px] text-slate-600">Customer feedback</span>
          </div>
        </div>
      </div>

      {/* ── 4. DATA QUALITY (5 PILLARS) & POOR QUALITY EXAMPLE ── */}
      <div
        ref={secQualityRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec9-quality'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">✨</span>
          <span>5 Pillars of Data Quality</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
            <strong className="text-emerald-950 block">Accurate</strong>
            <span className="text-[10px] text-slate-600">Correct values</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
            <strong className="text-emerald-950 block">Complete</strong>
            <span className="text-[10px] text-slate-600">No missing info</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
            <strong className="text-emerald-950 block">Consistent</strong>
            <span className="text-[10px] text-slate-600">Same format rules</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
            <strong className="text-emerald-950 block">Timely</strong>
            <span className="text-[10px] text-slate-600">Up to date</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 col-span-2 sm:col-span-1">
            <strong className="text-emerald-950 block">Unique</strong>
            <span className="text-[10px] text-slate-600">No duplicates</span>
          </div>
        </div>

        {/* Example of Poor Data Quality */}
        <div ref={secPoorQualityRef} className="space-y-1.5 pt-1">
          <span className="text-xs font-bold text-rose-950 block">⚠️ Example of Poor Data Quality:</span>
          <div className="rounded-2xl border-2 border-rose-200 overflow-hidden text-xs shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-rose-100/70 font-bold text-rose-950">
                <tr>
                  <th className="p-2 px-3">Name</th>
                  <th className="p-2 px-3">Age</th>
                  <th className="p-2 px-3">City</th>
                  <th className="p-2 px-3 text-right">Issue Flag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100 bg-white font-medium">
                <tr>
                  <td className="p-2 px-3">Rahul</td>
                  <td className="p-2 px-3">20</td>
                  <td className="p-2 px-3">Patna</td>
                  <td className="p-2 px-3 text-right text-emerald-700">OK</td>
                </tr>
                <tr className="bg-rose-50/60">
                  <td className="p-2 px-3 font-bold">Priya</td>
                  <td className="p-2 px-3 font-bold text-rose-600">Missing</td>
                  <td className="p-2 px-3">Delhi</td>
                  <td className="p-2 px-3 text-right font-bold text-rose-700">Missing value!</td>
                </tr>
                <tr>
                  <td className="p-2 px-3">Aman</td>
                  <td className="p-2 px-3">22</td>
                  <td className="p-2 px-3">Mumbai</td>
                  <td className="p-2 px-3 text-right text-emerald-700">OK</td>
                </tr>
                <tr className="bg-amber-50/60">
                  <td className="p-2 px-3 font-bold">Rahul</td>
                  <td className="p-2 px-3">20</td>
                  <td className="p-2 px-3">Patna</td>
                  <td className="p-2 px-3 text-right font-bold text-amber-800">Duplicate row!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── 5. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec9-takeaway'
          )}`}
        >
          {activeSectionId === 'sec9-takeaway' && (
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
            Data Types tell what kind. Data Sources tell where from. Data Quality tells whether it is trustworthy!
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
