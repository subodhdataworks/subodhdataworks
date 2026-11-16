import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic7VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic7AnalystVsScientistVsEngineerLesson: React.FC<Topic7VisualLessonProps> = ({
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
  const secThreeRolesRef = useRef<HTMLDivElement>(null);
  const secTableRef = useRef<HTMLDivElement>(null);
  const secCollabRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec7-title': secTitleRef,
      'sec7-three-roles': secThreeRolesRef,
      'sec7-table': secTableRef,
      'sec7-collab': secCollabRef,
      'sec7-takeaway': secTakeawayRef,
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
        'sec7-title': secTitleRef,
        'sec7-three-roles': secThreeRolesRef,
        'sec7-table': secTableRef,
        'sec7-collab': secCollabRef,
        'sec7-takeaway': secTakeawayRef,
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
          'sec7-title'
        )}`}
      >
        {activeSectionId === 'sec7-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor: 3 Data Roles</span>
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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">👥</span>
              <h1 className="text-xs sm:text-lg md:text-[20px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Data Analyst vs Data Scientist vs Data Engineer
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🚀</span>
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

        {/* Restaurant Analogy */}
        <div className="mt-2 text-center max-w-xl mx-auto px-2 space-y-1.5">
          <p className="text-xs sm:text-[14px] text-[#2a174a] font-medium leading-relaxed">
            Think of a restaurant 🍳: One buys ingredients (Engineer), one cooks food (Scientist), and one studies customer orders & reviews (Analyst)!
          </p>
        </div>
      </div>

      {/* ── 2. THREE CORE DATA PERSONAS (ILLUSTRATED CARDS) ── */}
      <div
        ref={secThreeRolesRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch transition-all duration-300 ${getCardClass(
          'sec7-three-roles'
        )}`}
      >
        {/* Role 1: Data Engineer */}
        <div className="p-4 rounded-2xl bg-white border-2 border-sky-300 shadow-2xs space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                <ellipse cx="18" cy="10" rx="10" ry="4" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.8" />
                <path d="M 8 10 V 26 C 8 28 12 30 18 30 C 24 30 28 28 28 26 V 10" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.8" />
                <path d="M 8 18 C 8 20 12 22 18 22 C 24 22 28 20 28 18" stroke="#0284c7" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-sky-600 uppercase">Architecture</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Data Engineer</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Builds and maintains data pipelines and database storage systems so data is reliable and fast.
          </p>
          <div className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-950">
            ❓ <strong>Main Question:</strong> "How can we make data available and reliable?"
          </div>
        </div>

        {/* Role 2: Data Analyst */}
        <div className="p-4 rounded-2xl bg-white border-2 border-purple-300 shadow-2xs space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                <rect x="6" y="10" width="24" height="18" rx="2" fill="#ede6ff" stroke="#7e22ce" strokeWidth="1.8" />
                <rect x="10" y="18" width="3" height="7" rx="0.5" fill="#a855f7" />
                <rect x="16" y="14" width="3" height="11" rx="0.5" fill="#a855f7" />
                <rect x="22" y="16" width="3" height="9" rx="0.5" fill="#a855f7" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-purple-600 uppercase">Insights</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Data Analyst</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Studies existing data, finds trends, answers business questions, and builds interactive dashboards.
          </p>
          <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-950">
            ❓ <strong>Main Question:</strong> "What happened, and what can we learn from it?"
          </div>
        </div>

        {/* Role 3: Data Scientist */}
        <div className="p-4 rounded-2xl bg-white border-2 border-amber-300 shadow-2xs space-y-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                <path d="M 12 28 C 12 24 16 20 18 16 V 8 H 14 V 6 H 22 V 8 H 18 V 16 C 20 20 24 24 24 28 C 24 30 22 31 18 31 C 14 31 12 30 12 28 Z" fill="#fde68a" stroke="#d97706" strokeWidth="1.8" />
                <circle cx="16" cy="26" r="1.5" fill="#d97706" />
                <circle cx="20" cy="24" r="1" fill="#d97706" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-amber-600 uppercase">Predictions</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Data Scientist</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Applies advanced statistics, machine learning, and algorithms to build models and predict the future.
          </p>
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950">
            ❓ <strong>Main Question:</strong> "What might happen next?"
          </div>
        </div>
      </div>

      {/* ── 3. COMPARISON MATRIX ── */}
      <div
        ref={secTableRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec7-table'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">⚖️</span>
          <span>Simple Comparison Table</span>
        </div>

        <div className="rounded-2xl border-2 border-purple-200/90 overflow-hidden text-xs shadow-2xs">
          <table className="w-full text-left">
            <thead className="bg-purple-100 font-bold text-purple-950 border-b border-purple-200">
              <tr>
                <th className="p-2 sm:p-2.5">Job Role</th>
                <th className="p-2 sm:p-2.5">Main Work</th>
                <th className="p-2 sm:p-2.5">Simple Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white font-medium">
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-purple-950">Data Analyst</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Understand data & trends</td>
                <td className="p-2 sm:p-2.5 text-purple-900 font-semibold">Find best-selling product</td>
              </tr>
              <tr className="bg-purple-50/40">
                <td className="p-2 sm:p-2.5 font-bold text-amber-950">Data Scientist</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Build ML models & predictions</td>
                <td className="p-2 sm:p-2.5 text-amber-900 font-semibold">Predict next month's sales</td>
              </tr>
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-sky-950">Data Engineer</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Build data pipelines & systems</td>
                <td className="p-2 sm:p-2.5 text-sky-900 font-semibold">Collect and store order data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 4. HOW DO THEY WORK TOGETHER? (FOOD DELIVERY CASE STUDY) ── */}
      <div
        ref={secCollabRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec7-collab'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🛵</span>
          <span>How Do They Work Together? (Food Delivery Company)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-1">
            <strong className="text-sky-950 block">1. Data Engineer</strong>
            <p className="text-slate-600 leading-snug">Makes sure every food order transaction is captured and stored safely in database.</p>
          </div>
          <div className="p-3 rounded-2xl bg-purple-50 border-2 border-purple-200 space-y-1">
            <strong className="text-purple-950 block">2. Data Analyst</strong>
            <p className="text-slate-600 leading-snug">Identifies which restaurants and biryani items are ordered the most each evening.</p>
          </div>
          <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 space-y-1">
            <strong className="text-amber-950 block">3. Data Scientist</strong>
            <p className="text-slate-600 leading-snug">Builds an AI prediction model to forecast food demand for the upcoming IPL cricket match!</p>
          </div>
        </div>
      </div>

      {/* ── 5. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec7-takeaway'
          )}`}
        >
          {activeSectionId === 'sec7-takeaway' && (
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
            Data Engineer prepares data systems. Data Analyst explains the data. Data Scientist builds prediction models.
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
