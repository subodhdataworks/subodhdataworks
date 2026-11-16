import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic71VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic71WhyDataVizMattersLesson: React.FC<Topic71VisualLessonProps> = ({
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
  const secStoryRef = useRef<HTMLDivElement>(null);
  const secWhatIsVizRef = useRef<HTMLDivElement>(null);
  const secWhyMattersRef = useRef<HTMLDivElement>(null);
  const secPipelineRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec71-title': secTitleRef,
      'sec71-story': secStoryRef,
      'sec71-what-is-viz': secWhatIsVizRef,
      'sec71-why-matters': secWhyMattersRef,
      'sec71-pipeline': secPipelineRef,
      'sec71-takeaway': secTakeawayRef,
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
  }, [activeSectionId, onSectionRectChange, onScrollSettled]);

  const toggleLanguage = () => {
    const next = currentLang === 'english' ? 'hindi' : 'english';
    setCurrentLang(next);
    onLanguageChange?.(next);
  };

  const isAnyActive = Boolean(activeSectionId);
  const isPipelineStepActive = [
    'sec71-pipeline',
    'sec71-what-is-viz',
    'sec71-why-matters',
  ].includes(activeSectionId || '');

  const getCardClass = (id: string) => {
    if (!isAnyActive) return 'transition-all duration-300';
    if (activeSectionId === id) return 'lesson-section-active ring-2 ring-purple-400 shadow-lg';
    return 'lesson-section-inactive opacity-85 hover:opacity-100 transition-all duration-300';
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-4 sm:space-y-6 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER WITH FLOWERS & SPARKLES ── */}
      <div
        ref={secTitleRef}
        id="sec71-title"
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec71-title'
        )}`}
      >
        {/* Floating AI Explaining Badge */}
        {activeSectionId === 'sec71-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Why Data Visualization Matters</span>
          </div>
        )}

        {/* Banner with left and right flowers */}
        <div className="relative flex items-center justify-center max-w-[740px] mx-auto px-1 sm:px-2">
          {/* Left Floral Bouquet & Sparkles */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -mr-2 sm:-mr-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              <path d="M 16 14 Q 16 19 21 19 Q 16 19 16 24 Q 16 19 11 19 Q 16 19 16 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 42 6 Q 42 10 46 10 Q 42 10 42 14 Q 42 10 38 10 Q 42 10 42 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 8 38 Q 8 41 11 41 Q 8 41 8 44 Q 8 41 5 41 Q 8 41 8 38 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 28 90 Q 38 65 38 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 34 68 Q 18 64 20 52 Q 28 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <path d="M 37 54 Q 50 48 48 36 Q 40 43 36 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
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

          {/* Center 3D Curved Ribbon Banner */}
          <div className="relative flex-1 max-w-[560px]">
            <svg viewBox="0 0 540 85" className="w-full h-auto drop-shadow-2xs" fill="none">
              <path d="M 45 32 L 8 28 L 22 46 L 8 64 L 45 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 45 32 L 60 40 L 45 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 495 32 L 532 28 L 518 46 L 532 64 L 495 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 495 32 L 480 40 L 495 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path
                d="M 50 25 Q 270 12 490 25 Q 482 68 490 68 Q 270 80 50 68 Q 58 25 50 25 Z"
                fill="#ede6ff"
                stroke="#9d7ec9"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
            </svg>

            {/* Banner Text & Icons overlaid within the curved ribbon */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 pointer-events-none select-none">
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">📊</span>
              <h1 className="text-base sm:text-2xl md:text-[26px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                {currentLang === 'english' ? 'Why Data Visualization Matters' : 'Data Visualization क्यों ज़रूरी है?'}
              </h1>
              <div className="flex items-end gap-1 h-5 sm:h-6 mb-0.5">
                <div className="w-1.5 sm:w-2 h-3.5 sm:h-4 bg-[#7dd3fc] border-[1.5px] border-[#2a174a] rounded-xs" />
                <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-[#c084fc] border-[1.5px] border-[#2a174a] rounded-xs" />
                <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#93c5fd] border-[1.5px] border-[#2a174a] rounded-xs" />
              </div>
            </div>
          </div>

          {/* Right Floral Bouquet & Sparkles */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -ml-2 sm:-ml-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              <path d="M 54 14 Q 54 19 49 19 Q 54 19 54 24 Q 54 19 59 19 Q 54 19 54 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 28 6 Q 28 10 24 10 Q 28 10 28 14 Q 28 10 32 10 Q 28 10 28 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 62 38 Q 62 41 59 41 Q 62 41 62 44 Q 62 41 65 41 Q 62 41 62 38 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 42 90 Q 32 65 32 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 36 68 Q 52 64 50 52 Q 42 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <path d="M 33 54 Q 20 48 22 36 Q 30 43 34 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
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

        {/* Sub-heading Pill */}
        <div className="mt-2 flex items-center justify-center">
          <div className="inline-block px-5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border-[1.8px] border-[#b8a2e8] shadow-2xs">
            {currentLang === 'english' ? 'Python Data Visualization & Visual Storytelling' : 'Python Data Visualization & Visual Storytelling'}
          </div>
        </div>

        {/* Natural Definition with Accents and Highlighted Pills */}
        <div className="mt-2 flex items-center justify-center gap-2 max-w-xl mx-auto px-2">
          <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
            \ \ \
          </span>
          <p className="text-xs sm:text-[14px] text-[#2a174a] leading-relaxed font-medium text-center">
            {currentLang === 'hindi' ? (
              <>
                Data Visualization का अर्थ है जटिल{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8] mx-0.5">
                  numbers
                </span>{' '}
                को सरल{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-300 mx-0.5">
                  charts
                </span>{' '}
                और graphs में बदलना ताकि छिपे हुए{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 mx-0.5">
                  patterns
                </span>{' '}
                आसानी से समझ आ सकें।
              </>
            ) : (
              <>
                Data Visualization transforms complex{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8] mx-0.5">
                  numerical data
                </span>{' '}
                into intuitive{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-900 border border-amber-300 mx-0.5">
                  charts
                </span>{' '}
                and graphs to reveal hidden{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 mx-0.5">
                  patterns &amp; insights
                </span>
                .
              </>
            )}
          </p>
          <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
            / / /
          </span>
        </div>
      </div>

      {/* ── 2. PROCESS FLOW PIPELINE (DOODLE ICONS + PURPLE ARROWS) ── */}
      <div
        ref={secPipelineRef}
        id="sec71-pipeline"
        className={`p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 ${getCardClass(
          'sec71-pipeline'
        )}`}
      >
        <div className="flex items-center justify-between border-b border-purple-100 pb-2">
          <span className="text-xs font-black text-[#7045E8] uppercase tracking-wider">
            ⚡ Data → Chart → Insight → Decision Pipeline
          </span>
          <span className="text-[11px] text-slate-500 font-bold">5-Stage Workflow</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1">
          {/* Stage 1: Raw Data */}
          <div className="flex flex-col items-center p-1.5 rounded-2xl flex-1 min-w-[85px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                <ellipse cx="32" cy="18" rx="18" ry="7" fill="#7dd3fc" stroke="#1e293b" strokeWidth="2.2" />
                <path d="M 14 18 V 29 C 14 34 22 36 32 36 C 42 36 50 34 50 29 V 18" fill="#bae6fd" stroke="#1e293b" strokeWidth="2.2" />
                <path d="M 14 29 V 42 C 14 47 22 49 32 49 C 42 49 50 47 50 42 V 29" fill="#bae6fd" stroke="#1e293b" strokeWidth="2.2" />
                <path d="M 14 29 C 14 34 22 36 32 36 C 42 36 50 34 50 29" fill="none" stroke="#1e293b" strokeWidth="2.2" />
              </svg>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]">
              1. Raw Data
            </span>
            <span className="text-[9.5px] text-slate-500 mt-0.5">Tables &amp; CSVs</span>
          </div>

          <div className="shrink-0 text-purple-700 font-black text-sm">➡️</div>

          {/* Stage 2: Organize */}
          <div className="flex flex-col items-center p-1.5 rounded-2xl flex-1 min-w-[85px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                <rect x="14" y="14" width="36" height="36" rx="6" fill="#fde047" stroke="#1e293b" strokeWidth="2.2" />
                <path d="M 14 26 H 50 M 26 26 V 50" stroke="#1e293b" strokeWidth="2.2" />
                <circle cx="38" cy="38" r="4" fill="#a855f7" />
              </svg>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]">
              2. Organize
            </span>
            <span className="text-[9.5px] text-slate-500 mt-0.5">Pandas GroupBy</span>
          </div>

          <div className="shrink-0 text-purple-700 font-black text-sm">➡️</div>

          {/* Stage 3: Visualize */}
          <div className="flex flex-col items-center p-1.5 rounded-2xl flex-1 min-w-[85px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                <rect x="12" y="14" width="40" height="38" rx="6" fill="#e0e7ff" stroke="#1e293b" strokeWidth="2.2" />
                <rect x="18" y="32" width="6" height="14" fill="#38bdf8" stroke="#1e293b" strokeWidth="1.8" />
                <rect x="29" y="24" width="6" height="22" fill="#a855f7" stroke="#1e293b" strokeWidth="1.8" />
                <rect x="40" y="20" width="6" height="26" fill="#ec4899" stroke="#1e293b" strokeWidth="1.8" />
              </svg>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]">
              3. Visualize
            </span>
            <span className="text-[9.5px] text-slate-500 mt-0.5">Matplotlib Charts</span>
          </div>

          <div className="shrink-0 text-purple-700 font-black text-sm">➡️</div>

          {/* Stage 4: Insight */}
          <div className="flex flex-col items-center p-1.5 rounded-2xl flex-1 min-w-[85px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                <path d="M 32 14 C 23 14 17 21 17 29 C 17 35 21 39 24 43 H 40 C 43 39 47 35 47 29 C 47 21 41 14 32 14 Z" fill="#fef08a" stroke="#1e293b" strokeWidth="2.2" />
                <rect x="25" y="44" width="14" height="6" rx="2" fill="#94a3b8" stroke="#1e293b" strokeWidth="2" />
                <path d="M 32 6 V 10 M 18 10 L 22 13 M 46 10 L 42 13" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]">
              4. Insight
            </span>
            <span className="text-[9.5px] text-slate-500 mt-0.5">May Peak &amp; Dip</span>
          </div>

          <div className="shrink-0 text-purple-700 font-black text-sm">➡️</div>

          {/* Stage 5: Decision */}
          <div className="flex flex-col items-center p-1.5 rounded-2xl flex-1 min-w-[85px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                <circle cx="32" cy="32" r="18" fill="#fed7aa" stroke="#1e293b" strokeWidth="2.2" />
                <circle cx="32" cy="32" r="11" fill="#f97316" stroke="#1e293b" strokeWidth="2" />
                <circle cx="32" cy="32" r="4" fill="#ffffff" />
                <path d="M 44 20 L 52 12 M 52 12 L 46 12 M 52 12 L 52 18" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
              5. Decision
            </span>
            <span className="text-[9.5px] text-slate-500 mt-0.5">Scale Inventory</span>
          </div>
        </div>
      </div>

      {/* ── 3. REAL-LIFE STORE STORY (ILLUSTRATED STOREFRONT & BARS) ── */}
      <div
        ref={secStoryRef}
        id="sec71-story"
        className={`p-4 sm:p-6 rounded-2xl bg-[#FAF8FF] border-[2px] border-[#b8a2e8] space-y-4 ${getCardClass(
          'sec71-story'
        )}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏪</span>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#4C2A9A]">
              {currentLang === 'english' ? 'Real-Life Story: The Monthly Sales Audit' : 'रियल-लाइफ स्टोरी: दुकान की मासिक बिक्री का ऑडिट'}
            </h2>
            <p className="text-xs text-slate-500">
              {currentLang === 'english'
                ? 'Your manager asks: "Is our retail business growing or slowing down?"'
                : 'मैनेजर पूछता है: "क्या हमारी दुकान बढ़ रही है या घट रही है?"'}
            </p>
          </div>
        </div>

        {/* Comparison Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          {/* Box 1: Raw Numbers */}
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-2xs space-y-2">
            <span className="font-bold text-rose-700 block text-xs uppercase tracking-wide">
              ❌ Without Visualization (Raw Text Table)
            </span>
            <div className="font-mono bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700 space-y-1">
              <div>January  = ₹10,000</div>
              <div>February = ₹15,000</div>
              <div>March    = ₹12,000 (Drop?)</div>
              <div>April    = ₹20,000</div>
              <div>May      = ₹25,000</div>
            </div>
            <p className="text-slate-500 text-[11px]">
              {currentLang === 'english'
                ? 'Requires brain effort to calculate percentages and detect drops.'
                : 'दिमाग पर ज़ोर देकर सोचना पड़ता है कि किस महीने में बिक्री घटी या बढ़ी।'}
            </p>
          </div>

          {/* Box 2: Visual 3D Bar Comparison */}
          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-2xs space-y-2">
            <span className="font-bold text-[#7045E8] block text-xs uppercase tracking-wide">
              ✅ With Visualization (Instant Insight)
            </span>
            <div className="font-mono bg-purple-50/60 p-3 rounded-lg border border-purple-200 text-slate-800 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-8">Jan</span>
                <div className="h-4 bg-[#7dd3fc] border border-slate-700 rounded-xs" style={{ width: '40%' }} />
                <span>₹10k</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8">Feb</span>
                <div className="h-4 bg-[#c084fc] border border-slate-700 rounded-xs" style={{ width: '60%' }} />
                <span>₹15k</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8">Mar</span>
                <div className="h-4 bg-amber-400 border border-slate-700 rounded-xs" style={{ width: '48%' }} />
                <span className="text-amber-800 font-bold">₹12k ⚠️</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8">Apr</span>
                <div className="h-4 bg-[#c084fc] border border-slate-700 rounded-xs" style={{ width: '80%' }} />
                <span>₹20k</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 font-bold text-[#7045E8]">May</span>
                <div className="h-4 bg-[#7045E8] border border-slate-700 rounded-xs" style={{ width: '100%' }} />
                <span className="text-[#7045E8] font-bold">₹25k 🚀</span>
              </div>
            </div>
            <p className="text-emerald-700 font-bold text-[11px]">
              {currentLang === 'english'
                ? 'May is highest! March had a sudden drop before rebounding sharply.'
                : 'मई में सबसे अधिक बिक्री हुई! मार्च में गिरावट आई थी लेकिन उसके बाद तेज़ उछाल आया।'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. WHAT IS VISUALIZATION (CHARTS, MAPS, DASHBOARDS) ── */}
      <div
        ref={secWhatIsVizRef}
        id="sec71-what-is-viz"
        className={`p-4 sm:p-6 rounded-2xl bg-white border-[2px] border-[#b8a2e8] space-y-4 ${getCardClass(
          'sec71-what-is-viz'
        )}`}
      >
        <h2 className="text-base sm:text-lg font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📈</span>
          {currentLang === 'english' ? 'Core Forms of Data Visualization' : 'Data Visualization के Core Forms'}
        </h2>

        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-[#FAF8FF] p-3.5 rounded-xl border border-purple-200 text-center space-y-1">
            <span className="text-2xl block">📊</span>
            <strong className="text-[#4C2A9A] block text-sm">Charts &amp; Graphs</strong>
            <p className="text-slate-600">Bar, Line, Histogram, and Scatter plots translating coordinates into lengths and angles.</p>
          </div>
          <div className="bg-[#FAF8FF] p-3.5 rounded-xl border border-purple-200 text-center space-y-1">
            <span className="text-2xl block">🗺️</span>
            <strong className="text-[#4C2A9A] block text-sm">Geospatial Maps</strong>
            <p className="text-slate-600">Territorial chloropleths exposing city-wise demand and logistics delivery routes.</p>
          </div>
          <div className="bg-[#FAF8FF] p-3.5 rounded-xl border border-purple-200 text-center space-y-1">
            <span className="text-2xl block">🖥️</span>
            <strong className="text-[#4C2A9A] block text-sm">Executive Dashboards</strong>
            <p className="text-slate-600">Single-pane command centers allowing leadership to track live business metrics.</p>
          </div>
        </div>
      </div>

      {/* ── 5. FIVE SUPERPOWERS OF VISUALIZATION ── */}
      <div
        ref={secWhyMattersRef}
        id="sec71-why-matters"
        className={`p-4 sm:p-6 rounded-2xl bg-[#FAF8FF] border-[2px] border-[#b8a2e8] space-y-4 ${getCardClass(
          'sec71-why-matters'
        )}`}
      >
        <h2 className="text-base sm:text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Five Superpowers of Visualization' : 'Data Visualization की 5 Superpowers'}
        </h2>

        <div className="grid md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3.5 rounded-xl border border-purple-200 space-y-1">
            <strong className="text-[#7045E8] block text-xs sm:text-sm">⚡ 1. Comprehend Big Datasets in Seconds</strong>
            <p className="text-slate-600">Summarizes 500,000 transaction rows into a 4-inch chart without scrolling.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-200 space-y-1">
            <strong className="text-[#7045E8] block text-xs sm:text-sm">🚀 2. Identify Growth Trajectories</strong>
            <p className="text-slate-600">Instantly tells whether sales are surging up, dropping, or plateauing.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-200 space-y-1">
            <strong className="text-[#7045E8] block text-xs sm:text-sm">⚖️ 3. Effortless Category Benchmarking</strong>
            <p className="text-slate-600">Compares 10 product lines side-by-side using bar lengths with millimeter precision.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-200 space-y-1">
            <strong className="text-[#7045E8] block text-xs sm:text-sm">🚨 4. Pinpoint Extreme Outliers</strong>
            <p className="text-slate-600">A lone distant dot reveals a fraud transaction or a data entry typo instantly.</p>
          </div>
        </div>
      </div>

      {/* ── 6. CHART TYPES SUMMARY & TAKEAWAY ── */}
      <div
        ref={secTakeawayRef}
        id="sec71-takeaway"
        className={`p-4 sm:p-6 rounded-2xl bg-white border-[2px] border-[#b8a2e8] space-y-3 ${getCardClass(
          'sec71-takeaway'
        )}`}
      >
        <h3 className="text-base font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🗺️</span>
          {currentLang === 'english' ? 'Key Takeaway for Modern Analysts' : 'Modern Data Analysts के लिए Golden Rule'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'Data visualization converts raw numerical information into actionable business insights. Always choose your chart based on the analytical question, never for decoration alone!'
            : 'Data Visualization raw data को actionable business insights में बदल देता है। हमेशा अपने chart का selection business question के आधार पर करें, केवल decoration के लिए नहीं!'}
        </p>
      </div>
    </div>
  );
};
