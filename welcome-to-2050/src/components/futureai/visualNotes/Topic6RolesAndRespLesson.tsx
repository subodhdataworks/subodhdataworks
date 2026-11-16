import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic6VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic6RolesAndRespLesson: React.FC<Topic6VisualLessonProps> = ({
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
  const secWhatDoesRef = useRef<HTMLDivElement>(null);
  const secExampleRef = useRef<HTMLDivElement>(null);
  const secWhereWorkRef = useRef<HTMLDivElement>(null);
  const secSkillsRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec6-title': secTitleRef,
      'sec6-what-does': secWhatDoesRef,
      'sec6-example': secExampleRef,
      'sec6-where-work': secWhereWorkRef,
      'sec6-skills': secSkillsRef,
      'sec6-takeaway': secTakeawayRef,
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
        'sec6-title': secTitleRef,
        'sec6-what-does': secWhatDoesRef,
        'sec6-example': secExampleRef,
        'sec6-where-work': secWhereWorkRef,
        'sec6-skills': secSkillsRef,
        'sec6-takeaway': secTakeawayRef,
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

      {/* ── 1. TITLE RIBBON BANNER: DATA ANALYST ROLES & RESPONSIBILITIES ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec6-title'
        )}`}
      >
        {activeSectionId === 'sec6-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor: Data Analyst Role</span>
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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🧑‍💻</span>
              <h1 className="text-sm sm:text-xl md:text-[22px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Data Analyst Roles & Responsibilities
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">📈</span>
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

        <div className="mt-2 text-center max-w-xl mx-auto px-2 space-y-2">
          <p className="text-xs sm:text-[14px] text-[#2a174a] font-medium leading-relaxed">
            A <strong>Data Analyst</strong> is a person who studies data to find useful information and answers what is happening in business.
          </p>

          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-600 text-white text-xs sm:text-[13px] font-bold shadow-xs">
            ⭐ <strong>Remember:</strong> A Data Analyst turns numbers into useful answers!
          </div>
        </div>
      </div>

      {/* ── 2. WHAT DOES A DATA ANALYST DO? (5 MAIN RESPONSIBILITIES PIPELINE) ── */}
      <div
        ref={secWhatDoesRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec6-what-does'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">⭐</span>
          <span>5 Main Responsibilities of a Data Analyst</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 text-center">
          {/* Step 1: Collect */}
          <div className="p-2.5 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col items-center">
            <span className="px-2 py-0.5 rounded-full bg-sky-500 text-white text-[9px] font-bold mb-1">Step 1</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                <rect x="8" y="10" width="20" height="20" rx="3" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.8" />
                <path d="M 14 18 H 22 M 14 22 H 22" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <strong className="text-xs text-sky-950 mt-1">Collect Data</strong>
            <span className="text-[10px] text-slate-600">Gather daily records</span>
          </div>

          {/* Step 2: Clean */}
          <div className="p-2.5 rounded-2xl bg-pink-50 border border-pink-200 flex flex-col items-center">
            <span className="px-2 py-0.5 rounded-full bg-pink-500 text-white text-[9px] font-bold mb-1">Step 2</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                <path d="M 26 8 L 16 20" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 14 20 Q 20 22 17 28 C 14 30 8 28 8 25 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              </svg>
            </div>
            <strong className="text-xs text-pink-950 mt-1">Clean Data</strong>
            <span className="text-[10px] text-slate-600">Fix & remove errors</span>
          </div>

          {/* Step 3: Analyze */}
          <div className="p-2.5 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col items-center">
            <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-[9px] font-bold mb-1">Step 3</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                <circle cx="18" cy="18" r="8" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.8" />
                <line x1="24" y1="24" x2="30" y2="30" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <strong className="text-xs text-purple-950 mt-1">Analyze Data</strong>
            <span className="text-[10px] text-slate-600">Spot trends & patterns</span>
          </div>

          {/* Step 4: Reports */}
          <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col items-center">
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9px] font-bold mb-1">Step 4</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                <rect x="8" y="20" width="4" height="8" rx="1" fill="#f59e0b" />
                <rect x="14" y="14" width="4" height="14" rx="1" fill="#f59e0b" />
                <rect x="20" y="8" width="4" height="20" rx="1" fill="#f59e0b" />
              </svg>
            </div>
            <strong className="text-xs text-amber-950 mt-1">Create Reports</strong>
            <span className="text-[10px] text-slate-600">Charts & dashboards</span>
          </div>

          {/* Step 5: Decisions */}
          <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center col-span-2 sm:col-span-1">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold mb-1">Step 5</span>
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                <circle cx="18" cy="18" r="10" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.8" />
                <path d="M 14 18 L 17 21 L 23 15" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <strong className="text-xs text-emerald-950 mt-1">Help Decide</strong>
            <span className="text-[10px] text-slate-600">Explain results</span>
          </div>
        </div>
      </div>

      {/* ── 3. REAL-LIFE EXAMPLE: SCHOOL MARKS TABLE & FINDINGS ── */}
      <div
        ref={secExampleRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec6-example'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🏫</span>
          <span>Real-Life Example: School Performance</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-6 rounded-2xl border-2 border-purple-200 overflow-hidden text-xs shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-purple-100 font-bold text-purple-950">
                <tr>
                  <th className="p-2 px-3">Student</th>
                  <th className="p-2 px-3 text-right">Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 bg-white font-medium">
                <tr>
                  <td className="p-2 px-3">Rahul</td>
                  <td className="p-2 px-3 text-right font-bold text-slate-800">80</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="p-2 px-3 font-bold text-emerald-950">Priya</td>
                  <td className="p-2 px-3 text-right font-black text-emerald-700">90 (Highest)</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-2 px-3 font-bold text-rose-950">Aman</td>
                  <td className="p-2 px-3 text-right font-black text-rose-700">50 (Lowest)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:col-span-6 space-y-1.5 p-3.5 rounded-2xl bg-[#faf5ff] border-2 border-purple-200 text-xs">
            <h5 className="font-bold text-purple-950">Analyst's Key Findings:</h5>
            <ul className="space-y-1.5 text-slate-700 font-medium">
              <li>• <strong>Highest Marks:</strong> Priya (90).</li>
              <li>• <strong>Lowest Marks:</strong> Aman (50).</li>
              <li>• <strong>Average Marks:</strong> About 73.3.</li>
              <li>• <strong>Action:</strong> School plans extra tutorial support for Aman!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 4. WHERE DO DATA ANALYSTS WORK? ── */}
      <div
        ref={secWhereWorkRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
          'sec6-where-work'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🏢</span>
          <span>Where Do Data Analysts Work?</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <span className="text-base block">🏥</span>
            <strong className="text-purple-950">Hospitals</strong>
            <span className="text-[10px] text-slate-600 block">Waiting times</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <span className="text-base block">🏫</span>
            <strong className="text-purple-950">Schools</strong>
            <span className="text-[10px] text-slate-600 block">Student results</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <span className="text-base block">🏦</span>
            <strong className="text-purple-950">Banks</strong>
            <span className="text-[10px] text-slate-600 block">Transactions</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <span className="text-base block">🛍️</span>
            <strong className="text-purple-950">Shops</strong>
            <span className="text-[10px] text-slate-600 block">Product sales</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 col-span-2 sm:col-span-1">
            <span className="text-base block">📦</span>
            <strong className="text-purple-950">E-Commerce</strong>
            <span className="text-[10px] text-slate-600 block">Customer orders</span>
          </div>
        </div>
      </div>

      {/* ── 5. SKILLS A DATA ANALYST USES ── */}
      <div
        ref={secSkillsRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
          'sec6-skills'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🛠️</span>
          <span>Common Skills & Tools</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-2.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center">
            <strong className="text-xs text-emerald-950 block">Excel</strong>
            <span className="text-[10px] text-emerald-700">Organize & calculate</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-sky-50 border-2 border-sky-200 text-center">
            <strong className="text-xs text-sky-950 block">SQL</strong>
            <span className="text-[10px] text-sky-700">Extract from databases</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 text-center">
            <strong className="text-xs text-indigo-950 block">Python</strong>
            <span className="text-[10px] text-indigo-700">Complex analysis</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center">
            <strong className="text-xs text-amber-950 block">Power BI</strong>
            <span className="text-[10px] text-amber-700">Visual dashboards</span>
          </div>
        </div>
      </div>

      {/* ── 6. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec6-takeaway'
          )}`}
        >
          {activeSectionId === 'sec6-takeaway' && (
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
            A Data Analyst collects, cleans, analyzes, reports, and explains data to help people make better decisions!
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
