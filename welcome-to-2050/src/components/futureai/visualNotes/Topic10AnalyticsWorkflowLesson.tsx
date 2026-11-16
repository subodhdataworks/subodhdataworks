import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic10VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic10AnalyticsWorkflowLesson: React.FC<Topic10VisualLessonProps> = ({
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
  const secWorkflowRef = useRef<HTMLDivElement>(null);
  const secCaseStudyRef = useRef<HTMLDivElement>(null);
  const secRevisionRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec10-title': secTitleRef,
      'sec10-workflow': secWorkflowRef,
      'sec10-case-study': secCaseStudyRef,
      'sec10-revision': secRevisionRef,
      'sec10-takeaway': secTakeawayRef,
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
        'sec10-title': secTitleRef,
        'sec10-workflow': secWorkflowRef,
        'sec10-case-study': secCaseStudyRef,
        'sec10-revision': secRevisionRef,
        'sec10-takeaway': secTakeawayRef,
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
          'sec10-title'
        )}`}
      >
        {activeSectionId === 'sec10-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor: Analytics Workflow</span>
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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🔄</span>
              <h1 className="text-xs sm:text-lg md:text-[20px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Data Analytics Workflow: Question to Action
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🎯</span>
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
          Think of making tea ☕: First collect ingredients, then prepare tea, and finally serve it! Analytics also follows a step-by-step workflow.
        </p>
      </div>

      {/* ── 2. THE 6 MAIN STEPS OF WORKFLOW (PIPELINE) ── */}
      <div
        ref={secWorkflowRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec10-workflow'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">⚙️</span>
          <span>The Six Main Steps of Analytics Workflow</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1">
          {/* Step 1: Question */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-sky-50 border border-sky-300">
            <span className="px-2 py-0.5 rounded-full bg-sky-500 text-white text-[9px] font-bold mb-1">1</span>
            <strong className="text-xs text-sky-950 block">Question</strong>
            <span className="text-[10px] text-slate-600">Ask problem</span>
          </div>

          <span className="text-purple-600 font-bold">→</span>

          {/* Step 2: Collect */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-purple-50 border border-purple-300">
            <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-[9px] font-bold mb-1">2</span>
            <strong className="text-xs text-purple-950 block">Collect</strong>
            <span className="text-[10px] text-slate-600">Gather data</span>
          </div>

          <span className="text-purple-600 font-bold">→</span>

          {/* Step 3: Clean */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-pink-50 border border-pink-300">
            <span className="px-2 py-0.5 rounded-full bg-pink-500 text-white text-[9px] font-bold mb-1">3</span>
            <strong className="text-xs text-pink-950 block">Clean</strong>
            <span className="text-[10px] text-slate-600">Fix errors</span>
          </div>

          <span className="text-purple-600 font-bold">→</span>

          {/* Step 4: Analyze */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-amber-50 border border-amber-300">
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9px] font-bold mb-1">4</span>
            <strong className="text-xs text-amber-950 block">Analyze</strong>
            <span className="text-[10px] text-slate-600">Find patterns</span>
          </div>

          <span className="text-purple-600 font-bold">→</span>

          {/* Step 5: Share */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-indigo-50 border border-indigo-300">
            <span className="px-2 py-0.5 rounded-full bg-indigo-500 text-white text-[9px] font-bold mb-1">5</span>
            <strong className="text-xs text-indigo-950 block">Share</strong>
            <span className="text-[10px] text-slate-600">Reports/charts</span>
          </div>

          <span className="text-purple-600 font-bold">→</span>

          {/* Step 6: Action */}
          <div className="p-2 rounded-2xl flex-1 min-w-[85px] bg-emerald-50 border border-emerald-300">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold mb-1">6</span>
            <strong className="text-xs text-emerald-950 block">Action</strong>
            <span className="text-[10px] text-slate-600">Decide & test</span>
          </div>
        </div>
      </div>

      {/* ── 3. REAL-LIFE STATIONERY SHOP CASE STUDY ── */}
      <div
        ref={secCaseStudyRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec10-case-study'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">✏️</span>
          <span>Real-Life Case Study: Stationery Store</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-5 rounded-2xl border-2 border-purple-200 overflow-hidden text-xs shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-purple-100 font-bold text-purple-950">
                <tr>
                  <th className="p-2 px-3">Product</th>
                  <th className="p-2 px-3 text-right">Units Sold</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 bg-white font-medium">
                <tr className="bg-emerald-50/50">
                  <td className="p-2 px-3 font-bold text-emerald-950">✒️ Pen</td>
                  <td className="p-2 px-3 text-right font-black text-emerald-700">50 (Top)</td>
                </tr>
                <tr>
                  <td className="p-2 px-3">✏️ Pencil</td>
                  <td className="p-2 px-3 text-right font-bold text-slate-800">30</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-2 px-3 text-rose-950">🧼 Eraser</td>
                  <td className="p-2 px-3 text-right font-bold text-rose-700">10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:col-span-7 space-y-1.5 p-3.5 rounded-2xl bg-[#faf5ff] border-2 border-purple-200 text-xs">
            <h5 className="font-bold text-purple-950">Workflow Execution:</h5>
            <ul className="space-y-1 text-slate-700 font-medium">
              <li>• <strong>1. Question:</strong> Which items should we stock more next month?</li>
              <li>• <strong>2. Collect:</strong> Recorded daily sales records.</li>
              <li>• <strong>3. Clean:</strong> Checked for duplicate entries and typos.</li>
              <li>• <strong>4. Analyze:</strong> Pens sold 50, Erasers 10, Total 90.</li>
              <li>• <strong>5. Share:</strong> Simple summary chart presented to owner.</li>
              <li>• <strong>6. Action:</strong> Owner restocks pens and monitors next month!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 4. MODULE 2 FINAL REVISION TABLE ── */}
      <div
        ref={secRevisionRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec10-revision'
        )}`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm">🏆</span>
          <span>Module 2 Final Revision Table</span>
        </div>

        <div className="rounded-2xl border-2 border-purple-200/90 overflow-hidden text-xs shadow-2xs">
          <table className="w-full text-left">
            <thead className="bg-purple-100 font-bold text-purple-950">
              <tr>
                <th className="p-2 sm:p-2.5">Topic</th>
                <th className="p-2 sm:p-2.5">Key Memory Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 bg-white font-medium">
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-purple-950">Data Analyst Roles</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Collect, clean, analyze, report, and explain</td>
              </tr>
              <tr className="bg-purple-50/40">
                <td className="p-2 sm:p-2.5 font-bold text-purple-950">Analyst vs Scientist vs Engineer</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Understand data, build ML predictions, build data systems</td>
              </tr>
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-purple-950">Types of Data Analytics</td>
                <td className="p-2 sm:p-2.5 text-slate-700">What, Why, What Next, What To Do</td>
              </tr>
              <tr className="bg-purple-50/40">
                <td className="p-2 sm:p-2.5 font-bold text-purple-950">Types, Sources & Quality</td>
                <td className="p-2 sm:p-2.5 text-slate-700">Kind of data, where it comes from, how reliable it is</td>
              </tr>
              <tr>
                <td className="p-2 sm:p-2.5 font-bold text-purple-950">Analytics Workflow</td>
                <td className="p-2 sm:p-2.5 font-bold text-emerald-800">Question → Collect → Clean → Analyze → Share → Action</td>
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
            'sec10-takeaway'
          )}`}
        >
          {activeSectionId === 'sec10-takeaway' && (
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
            Data Analytics is not just about numbers. It starts with a question, uses data to find answers, and ends with an informed action!
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
