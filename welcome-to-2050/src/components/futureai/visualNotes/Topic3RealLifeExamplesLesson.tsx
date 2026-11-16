import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic3VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic3RealLifeExamplesLesson: React.FC<Topic3VisualLessonProps> = ({
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
  const secShoppingRef = useRef<HTMLDivElement>(null);
  const secYoutubeRef = useRef<HTMLDivElement>(null);
  const secGroceryRef = useRef<HTMLDivElement>(null);
  const secSchoolRef = useRef<HTMLDivElement>(null);
  const secHospitalRef = useRef<HTMLDivElement>(null);
  const secFoodRef = useRef<HTMLDivElement>(null);
  const secCommonRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active section when changed
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec3-title': secTitleRef,
      'sec3-shopping': secShoppingRef,
      'sec3-youtube': secYoutubeRef,
      'sec3-grocery': secGroceryRef,
      'sec3-school': secSchoolRef,
      'sec3-hospital': secHospitalRef,
      'sec3-food': secFoodRef,
      'sec3-common': secCommonRef,
      'sec3-takeaway': secTakeawayRef,
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
        'sec3-title': secTitleRef,
        'sec3-shopping': secShoppingRef,
        'sec3-youtube': secYoutubeRef,
        'sec3-grocery': secGroceryRef,
        'sec3-school': secSchoolRef,
        'sec3-hospital': secHospitalRef,
        'sec3-food': secFoodRef,
        'sec3-common': secCommonRef,
        'sec3-takeaway': secTakeawayRef,
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

      {/* ── 1. TITLE RIBBON BANNER: REAL-LIFE EXAMPLES ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec3-title'
        )}`}
      >
        {activeSectionId === 'sec3-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Everyday Analytics</span>
          </div>
        )}

        {/* Ribbon with flowers */}
        <div className="relative flex items-center justify-center max-w-[740px] mx-auto px-1 sm:px-2">
          {/* Left Floral Bouquet */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -mr-2 sm:-mr-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              <path d="M 16 14 Q 16 19 21 19 Q 16 19 16 24 Q 16 19 11 19 Q 16 19 16 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 42 6 Q 42 10 46 10 Q 42 10 42 14 Q 42 10 38 10 Q 42 10 42 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
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
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🌍</span>
              <h1 className="text-sm sm:text-xl md:text-[23px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Real-Life Examples of Data Analytics
              </h1>
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">✨</span>
            </div>
          </div>

          {/* Right Floral Bouquet */}
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

        <div className="mt-2 text-center max-w-xl mx-auto px-2 space-y-1.5">
          <p className="text-xs sm:text-[14px] text-[#2a174a] font-medium leading-relaxed">
            Data Analytics is used in many places around us. When people <strong>collect information</strong>, <strong>check it</strong>, and <strong>make a decision</strong>, they use the power of Data Analytics!
          </p>
        </div>
      </div>

      {/* ── 2. SIX DETAILED ILLUSTRATED REAL-LIFE EXAMPLES ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
        {/* Example 1: Online Shopping */}
        <div
          ref={secShoppingRef}
          className={`p-4 rounded-2xl bg-white border-2 border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
            'sec3-shopping'
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                {/* Sneaker Shoe */}
                <path d="M 6 26 L 14 18 H 22 L 28 22 L 34 22 C 36 22 36 26 34 28 H 6 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Laces & sole */}
                <path d="M 17 19 L 20 22 M 19 18 L 22 21" stroke="#db2777" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="4" y="27" width="32" height="3" rx="1.5" fill="#f43f5e" stroke="#db2777" strokeWidth="1" />
                {/* Search magnifying glass */}
                <circle cx="28" cy="14" r="5" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="32" y1="18" x2="36" y2="22" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-pink-600 uppercase tracking-wider block">Example 1</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Online Shopping (Shoe Search)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Imagine you search for shoes online. Later, the store automatically shows you more matching shoes.
          </p>
          <div className="p-2 rounded-xl bg-pink-50/70 border border-pink-200 text-xs font-semibold text-pink-950 flex items-start gap-1.5">
            <span>💡</span>
            <span><strong>Why?</strong> The website uses data about your searches to recommend items you'll love!</span>
          </div>
        </div>

        {/* Example 2: YouTube */}
        <div
          ref={secYoutubeRef}
          className={`p-4 rounded-2xl bg-white border-2 border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
            'sec3-youtube'
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                {/* YouTube Red Screen */}
                <rect x="6" y="10" width="28" height="20" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                <polygon points="17,15 26,20 17,25" fill="#dc2626" stroke="#991b1b" strokeWidth="1.2" />
                <circle cx="30" cy="8" r="3" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-rose-600 uppercase tracking-wider block">Example 2</span>
              <h4 className="font-bold text-sm text-[#2a174a]">YouTube (Video Feed)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Imagine you watch cartoon videos on YouTube. Soon, YouTube suggests more cartoon videos on your feed.
          </p>
          <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-200 text-xs font-semibold text-rose-950 flex items-start gap-1.5">
            <span>💡</span>
            <span><strong>Why?</strong> YouTube analyzes your watch history & interests to recommend videos you enjoy!</span>
          </div>
        </div>

        {/* Example 3: Grocery Shop */}
        <div
          ref={secGroceryRef}
          className={`p-4 rounded-2xl bg-white border-2 border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
            'sec3-grocery'
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                {/* Milk Carton + Bread */}
                <path d="M 8 18 L 12 14 H 18 L 22 18 V 32 H 8 Z" fill="#d1fae5" stroke="#059669" strokeWidth="1.8" />
                <path d="M 12 14 V 11 H 18 V 14" stroke="#059669" strokeWidth="1.5" />
                <circle cx="15" cy="24" r="3" fill="#10b981" />
                {/* Egg */}
                <ellipse cx="28" cy="27" rx="5" ry="6" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block">Example 3</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Grocery Shop (Stock Planning)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            A shop owner sells milk, bread, and eggs. Every day he notes sales. After one week, data shows milk sells most!
          </p>
          <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs font-semibold text-emerald-950 flex items-start gap-1.5">
            <span>💡</span>
            <span><strong>Why?</strong> Data Analytics helps the shop owner accurately plan what stock to order!</span>
          </div>
        </div>

        {/* Example 4: School Student Marks */}
        <div
          ref={secSchoolRef}
          className={`p-4 rounded-2xl bg-white border-2 border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
            'sec3-school'
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                {/* School chalkboard */}
                <rect x="6" y="10" width="28" height="20" rx="2" fill="#312e81" stroke="#4338ca" strokeWidth="2" />
                <line x1="10" y1="16" x2="20" y2="16" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="10" y1="21" x2="26" y2="21" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round" />
                {/* A+ Badge */}
                <circle cx="28" cy="14" r="3.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-wider block">Example 4</span>
              <h4 className="font-bold text-sm text-[#2a174a]">School (Student Performance)</h4>
            </div>
          </div>

          {/* Student Marks Table */}
          <div className="rounded-xl border border-purple-200 overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="bg-purple-100/80 font-bold text-purple-950">
                <tr>
                  <th className="p-1 px-2.5">Student</th>
                  <th className="p-1 px-2.5 text-right">Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 bg-white font-medium">
                <tr>
                  <td className="p-1 px-2.5">Rahul</td>
                  <td className="p-1 px-2.5 text-right font-bold text-slate-800">80</td>
                </tr>
                <tr>
                  <td className="p-1 px-2.5">Priya</td>
                  <td className="p-1 px-2.5 text-right font-bold text-emerald-600">90 (Top)</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-1 px-2.5 text-rose-950 font-bold">Aman</td>
                  <td className="p-1 px-2.5 text-right font-bold text-rose-600">50 (Lowest)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-[11px] font-semibold text-indigo-950">
            🎯 <strong>Result:</strong> Teacher spots Aman needs extra tutoring help!
          </div>
        </div>

        {/* Example 5: Hospital */}
        <div
          ref={secHospitalRef}
          className={`p-4 rounded-2xl bg-white border-2 border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
            'sec3-hospital'
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                {/* Hospital building with red cross */}
                <rect x="10" y="10" width="20" height="22" rx="2" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.8" />
                <path d="M 20 14 V 22 M 16 18 H 24" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="17" y="26" width="6" height="6" fill="#0d9488" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-teal-600 uppercase tracking-wider block">Example 5</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Hospital (Patient Rush Planning)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Hospital records show more patients visit on Mondays than any other weekday.
          </p>
          <div className="p-2 rounded-xl bg-teal-50/70 border border-teal-200 text-xs font-semibold text-teal-950 flex items-start gap-1.5">
            <span>💡</span>
            <span><strong>Decision:</strong> Hospital arranges more doctors & nurses on Monday to eliminate queues!</span>
          </div>
        </div>

        {/* Example 6: Food Delivery */}
        <div
          ref={secFoodRef}
          className={`p-4 rounded-2xl bg-white border-2 border-[#b8a2e8] shadow-2xs space-y-2.5 transition-all duration-300 ${getCardClass(
            'sec3-food'
          )}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                {/* Delivery Scooter */}
                <circle cx="12" cy="28" r="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.8" />
                <circle cx="28" cy="28" r="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.8" />
                <path d="M 12 28 H 22 L 26 18 H 30" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="8" y="16" width="8" height="9" rx="1.5" fill="#f97316" stroke="#c2410c" strokeWidth="1.2" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block">Example 6</span>
              <h4 className="font-bold text-sm text-[#2a174a]">Food Delivery (Dinner Rush)</h4>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-snug">
            Delivery apps analyze order timing data and find that dinner orders peak in the evening.
          </p>
          <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-semibold text-amber-950 flex items-start gap-1.5">
            <span>💡</span>
            <span><strong>Decision:</strong> Company schedules more delivery riders during dinner hours for speedy delivery!</span>
          </div>
        </div>
      </div>

      {/* ── 3. WHAT IS COMMON IN ALL EXAMPLES? (4 UNIVERSAL STEPS) ── */}
      <div
        ref={secCommonRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec3-common'
        )}`}
      >
        {activeSectionId === 'sec3-common' && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: 4 Universal Steps</span>
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm sm:text-base">🔄</span>
          <span>What Is Common in All Examples? (4 Steps)</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1">
          {/* Step 1: Collect */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-sky-50 border border-sky-200">
            <span className="px-2 py-0.5 rounded-full bg-sky-500 text-white text-[9.5px] font-bold mb-1">1</span>
            <strong className="text-xs text-sky-950">Collect</strong>
            <span className="text-[10px] text-slate-600">Gather information</span>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <svg viewBox="0 0 28 20" className="w-4 sm:w-5 h-4 sm:h-5" fill="none">
              <path d="M 4 10 H 22 M 16 4 L 22 10 L 16 16" stroke="#7e22ce" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Step 2: Check */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-purple-50 border border-purple-200">
            <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-[9.5px] font-bold mb-1">2</span>
            <strong className="text-xs text-purple-950">Check</strong>
            <span className="text-[10px] text-slate-600">Review numbers</span>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <svg viewBox="0 0 28 20" className="w-4 sm:w-5 h-4 sm:h-5" fill="none">
              <path d="M 4 10 H 22 M 16 4 L 22 10 L 16 16" stroke="#7e22ce" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Step 3: Understand */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-amber-50 border border-amber-200">
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9.5px] font-bold mb-1">3</span>
            <strong className="text-xs text-amber-950">Understand</strong>
            <span className="text-[10px] text-slate-600">Find what it shows</span>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <svg viewBox="0 0 28 20" className="w-4 sm:w-5 h-4 sm:h-5" fill="none">
              <path d="M 4 10 H 22 M 16 4 L 22 10 L 16 16" stroke="#7e22ce" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Step 4: Decide */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-emerald-50 border border-emerald-200">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9.5px] font-bold mb-1">4</span>
            <strong className="text-xs text-emerald-950">Decide</strong>
            <span className="text-[10px] text-slate-600">Useful decision</span>
          </div>
        </div>
      </div>

      {/* ── 4. KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec3-takeaway'
          )}`}
        >
          {activeSectionId === 'sec3-takeaway' && (
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
            Data Analytics is used in online shopping, YouTube, schools, hospitals, shops, and food delivery.{' '}
            <strong className="text-purple-700 underline decoration-purple-300 underline-offset-2">
              Remember: Data Analytics is part of everyday life!
            </strong>
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
