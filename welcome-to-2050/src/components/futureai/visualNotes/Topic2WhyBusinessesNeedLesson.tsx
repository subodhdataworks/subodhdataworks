import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface Topic2VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic2WhyBusinessesNeedLesson: React.FC<Topic2VisualLessonProps> = ({
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
  const secWhyNeedRef = useRef<HTMLDivElement>(null);
  const secSmallShopRef = useRef<HTMLDivElement>(null);
  const secHowItWorksRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active section when changed
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec2-title': secTitleRef,
      'sec2-why-need': secWhyNeedRef,
      'sec2-small-shop': secSmallShopRef,
      'sec2-how-it-works': secHowItWorksRef,
      'sec2-takeaway': secTakeawayRef,
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
        'sec2-title': secTitleRef,
        'sec2-why-need': secWhyNeedRef,
        'sec2-small-shop': secSmallShopRef,
        'sec2-how-it-works': secHowItWorksRef,
        'sec2-takeaway': secTakeawayRef,
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

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER: WHY BUSINESSES NEED DATA ANALYTICS ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec2-title'
        )}`}
      >
        {activeSectionId === 'sec2-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Business Basics</span>
          </div>
        )}

        {/* Banner with left and right floral bouquets */}
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

          {/* Center 3D Curved Ribbon Banner */}
          <div className="relative flex-1 max-w-[560px]">
            <svg viewBox="0 0 540 85" className="w-full h-auto drop-shadow-2xs" fill="none">
              <path d="M 45 32 L 8 28 L 22 46 L 8 64 L 45 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 45 32 L 60 40 L 45 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 495 32 L 532 28 L 518 46 L 532 64 L 495 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 495 32 L 480 40 L 495 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 50 25 Q 270 12 490 25 Q 482 68 490 68 Q 270 80 50 68 Q 58 25 50 25 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.4" strokeLinejoin="round" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 pointer-events-none select-none">
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">🏬</span>
              <h1 className="text-sm sm:text-xl md:text-[23px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                Why Businesses Need Data Analytics
              </h1>
              <div className="flex items-end gap-1 h-5 sm:h-6 mb-0.5">
                <div className="w-1.5 sm:w-2 h-3.5 sm:h-4 bg-[#7dd3fc] border-[1.5px] border-[#2a174a] rounded-xs" />
                <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-[#c084fc] border-[1.5px] border-[#2a174a] rounded-xs" />
                <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#93c5fd] border-[1.5px] border-[#2a174a] rounded-xs" />
              </div>
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

        {/* Subtitle Pill */}
        <div className="mt-2 flex items-center justify-center">
          <div className="inline-block px-5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border-[1.8px] border-[#b8a2e8] shadow-2xs">
            Simple Meaning & Real Types
          </div>
        </div>

        <p className="mt-2 text-xs sm:text-[14px] text-[#2a174a] font-medium max-w-xl mx-auto px-2 leading-relaxed">
          {currentLang === 'hindi' ? (
            <>
              A <strong>Business</strong> is a place where people sell products or services to earn money. Har roz ye businesses information collect karte hain ki kya bika aur customers ne kya khareeda!
            </>
          ) : (
            <>
              A <strong>Business</strong> is a place where people sell products or services to earn money. Every day, they collect data about sales and customer buying habits!
            </>
          )}
        </p>

        {/* 4 Rich Illustrated Storefront Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 max-w-2xl mx-auto px-1">
          {/* 1. Grocery Shop */}
          <div className="p-2.5 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-200/80 shadow-2xs flex flex-col items-center text-center space-y-1 hover:scale-102 transition-transform">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Red/White striped Awning */}
                <path d="M 8 18 H 40 L 44 26 H 4 L 8 18 Z" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M 12 18 L 10 26 M 20 18 L 19 26 M 28 18 L 29 26 M 36 18 L 38 26" stroke="#e11d48" strokeWidth="1.8" />
                {/* Store base & counter */}
                <rect x="8" y="26" width="32" height="15" rx="1.5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.8" />
                {/* Fruit crate */}
                <rect x="12" y="30" width="10" height="7" rx="1" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.2" />
                <circle cx="15" cy="33" r="1.8" fill="#ef4444" />
                <circle cx="19" cy="33" r="1.8" fill="#22c55e" />
                {/* Price tag */}
                <rect x="26" y="31" width="10" height="5" rx="1" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
              </svg>
            </div>
            <span className="font-bold text-xs text-emerald-950">Grocery Shop</span>
            <span className="text-[10px] text-emerald-700 font-medium">Sells food items</span>
          </div>

          {/* 2. Clothing Shop */}
          <div className="p-2.5 rounded-2xl bg-gradient-to-b from-sky-50 to-white border-2 border-sky-200/80 shadow-2xs flex flex-col items-center text-center space-y-1 hover:scale-102 transition-transform">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Hanger hook */}
                <path d="M 24 12 C 24 8 20 8 20 12 C 20 15 24 16 24 18" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                {/* Triangle hanger */}
                <path d="M 24 18 L 11 26 H 37 L 24 18 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Cute T-shirt */}
                <path d="M 16 26 L 10 30 L 13 34 L 16 32 V 42 H 32 V 32 L 35 34 L 38 30 L 32 26" fill="#bae6fd" stroke="#0369a1" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M 21 26 C 21 28 27 28 27 26" stroke="#0369a1" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="font-bold text-xs text-sky-950">Clothing Shop</span>
            <span className="text-[10px] text-sky-700 font-medium">Sells clothes</span>
          </div>

          {/* 3. Restaurant */}
          <div className="p-2.5 rounded-2xl bg-gradient-to-b from-amber-50 to-white border-2 border-amber-200/80 shadow-2xs flex flex-col items-center text-center space-y-1 hover:scale-102 transition-transform">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Chef Hat */}
                <path d="M 17 22 C 14 20 14 14 19 14 C 20 10 28 10 29 14 C 34 14 34 20 31 22 Z" fill="#ffffff" stroke="#b45309" strokeWidth="1.8" />
                <rect x="17" y="22" width="14" height="4" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
                {/* Pizza Slice */}
                <path d="M 12 36 L 24 24 L 36 36 Q 24 42 12 36 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="20" cy="33" r="1.8" fill="#ef4444" />
                <circle cx="26" cy="31" r="1.8" fill="#ef4444" />
                <circle cx="24" cy="37" r="1.8" fill="#16a34a" />
              </svg>
            </div>
            <span className="font-bold text-xs text-amber-950">Restaurant</span>
            <span className="text-[10px] text-amber-700 font-medium">Serves meals</span>
          </div>

          {/* 4. Online Store */}
          <div className="p-2.5 rounded-2xl bg-gradient-to-b from-purple-50 to-white border-2 border-purple-200/80 shadow-2xs flex flex-col items-center text-center space-y-1 hover:scale-102 transition-transform">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Isometric Cardboard Box */}
                <path d="M 24 10 L 38 18 L 24 26 L 10 18 Z" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M 10 18 V 34 L 24 42 V 26 Z" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M 38 18 V 34 L 24 42 V 26 Z" fill="#c084fc" stroke="#7e22ce" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Tape */}
                <path d="M 17 14 L 31 22" stroke="#6b21a8" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="font-bold text-xs text-purple-950">Online Store</span>
            <span className="text-[10px] text-purple-700 font-medium">Digital orders</span>
          </div>
        </div>

        {/* Highlighted Banner Callout */}
        <div className="mt-3 p-2.5 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-600 text-white text-xs sm:text-[13.5px] font-bold shadow-sm max-w-xl mx-auto text-center flex items-center justify-center gap-2">
          <span>✨</span>
          <span>Data Analytics helps businesses understand this data & make better decisions!</span>
          <span>✨</span>
        </div>
      </div>

      {/* ── 2. WHY DO BUSINESSES NEED IT? 5 CORE PILLARS (WITH DETAILED VECTOR DOODLES) ── */}
      <div
        ref={secWhyNeedRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec2-why-need'
        )}`}
      >
        {activeSectionId === 'sec2-why-need' && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: 5 Business Needs</span>
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm sm:text-base">⭐</span>
          <span>Why Do Businesses Need It? (5 Core Reasons)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
          {/* Card A: Customer Likes */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200/90 shadow-2xs space-y-2 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                  <circle cx="18" cy="18" r="14" fill="#ede6ff" stroke="#7e22ce" strokeWidth="2" />
                  <path d="M 12 18 Q 18 24 24 18" stroke="#7e22ce" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="14" cy="14" r="1.5" fill="#7e22ce" />
                  <circle cx="22" cy="14" r="1.5" fill="#7e22ce" />
                  <path d="M 23 8 C 21 6 18 7 18 9 C 18 7 15 6 13 8 C 11 10 14 13 18 16 C 22 13 25 10 23 8 Z" fill="#ec4899" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black text-purple-600 uppercase tracking-wider block">Point A</span>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#2a174a]">Know Customer Likes</h4>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-700 leading-snug">
              Shopkeeper knows what customers buy most.
            </p>
            <div className="p-1.5 rounded-lg bg-purple-50 text-[11px] font-semibold text-purple-900 border border-purple-100">
              🍫 <strong>Ex:</strong> If chocolate sells more than biscuits, stock more chocolate!
            </div>
          </div>

          {/* Card B: Sell More Products */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200/90 shadow-2xs space-y-2 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                  {/* Rising bar chart + Rocket arrow */}
                  <rect x="6" y="22" width="5" height="9" rx="1" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
                  <rect x="14" y="16" width="5" height="15" rx="1" fill="#4ade80" stroke="#16a34a" strokeWidth="1.5" />
                  <rect x="22" y="10" width="5" height="21" rx="1" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
                  <path d="M 8 18 L 18 10 L 28 6 M 28 6 H 22 M 28 6 V 12" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block">Point B</span>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#2a174a]">Sell More Products</h4>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-700 leading-snug">
              Check which products sell well by season.
            </p>
            <div className="p-1.5 rounded-lg bg-emerald-50 text-[11px] font-semibold text-emerald-900 border border-emerald-100">
              🍦 <strong>Ex:</strong> Ice cream sells more in summer, so shop prepares ahead!
            </div>
          </div>

          {/* Card C: Save Money */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200/90 shadow-2xs space-y-2 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                  {/* Piggy bank with coin */}
                  <ellipse cx="18" cy="20" rx="12" ry="9" fill="#fde68a" stroke="#d97706" strokeWidth="1.8" />
                  <circle cx="10" cy="19" r="1.5" fill="#d97706" />
                  <rect x="15" y="14" width="6" height="2" rx="1" fill="#d97706" />
                  <circle cx="18" cy="10" r="3" fill="#f59e0b" stroke="#b45309" strokeWidth="1.2" />
                  <path d="M 12 28 V 31 M 24 28 V 31" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block">Point C</span>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#2a174a]">Save Money</h4>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-700 leading-snug">
              Avoid wasting money by cutting excess waste.
            </p>
            <div className="p-1.5 rounded-lg bg-amber-50 text-[11px] font-semibold text-amber-900 border border-amber-100">
              🥗 <strong>Ex:</strong> Restaurant tracks food waste and prepares the exact required amount.
            </div>
          </div>

          {/* Card D: Better Decisions */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200/90 shadow-2xs space-y-2 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                  {/* Compass / Fact target */}
                  <circle cx="18" cy="18" r="13" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.8" />
                  <polygon points="18,7 21,17 18,15 15,17" fill="#ef4444" stroke="#dc2626" strokeWidth="1" />
                  <polygon points="18,29 21,19 18,21 15,19" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
                  <circle cx="18" cy="18" r="2" fill="#0f172a" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black text-sky-600 uppercase tracking-wider block">Point D</span>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#2a174a]">Make Better Decisions</h4>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-700 leading-snug">
              Use verified facts instead of guessing.
            </p>
            <div className="p-1.5 rounded-lg bg-sky-50 text-[11px] font-semibold text-sky-900 border border-sky-100">
              📊 <strong>Ex:</strong> Shop owner checks exact sales numbers before purchasing stock.
            </div>
          </div>

          {/* Card E: Plan for the Future */}
          <div className="p-3 rounded-2xl bg-white border-2 border-purple-200/90 shadow-2xs space-y-2 sm:col-span-2 md:col-span-2 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                  {/* Umbrella & Rain cloud */}
                  <path d="M 8 16 C 8 8 28 8 28 16 Z" fill="#c7d2fe" stroke="#4338ca" strokeWidth="1.8" />
                  <line x1="18" y1="16" x2="18" y2="28" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 18 28 C 18 31 15 31 15 28" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                  <line x1="10" y1="20" x2="8" y2="24" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="26" y1="20" x2="24" y2="24" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-wider block">Point E</span>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#2a174a]">Plan for the Future</h4>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-700 leading-snug">
              Look at past records to prepare for upcoming needs.
            </p>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-[11px] font-semibold text-indigo-900 border border-indigo-100">
              ☂️ <strong>Ex:</strong> Shop sold 200 umbrellas last rainy season; orders 250 umbrellas before next monsoon!
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. EASY EXAMPLE: A SMALL SHOP (VISUAL PRODUCT BARS + ANALYSIS) ── */}
      <div
        ref={secSmallShopRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec2-small-shop'
        )}`}
      >
        {activeSectionId === 'sec2-small-shop' && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Small Shop Example</span>
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm sm:text-base">📊</span>
          <span>Easy Example: A Small Shop</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center pt-1">
          {/* Visual Sales Graph & Table (Cols 6) */}
          <div className="md:col-span-6 rounded-2xl border-2 border-purple-200/90 p-3 bg-gradient-to-b from-purple-50/40 to-white space-y-3 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-purple-950 border-b border-purple-100 pb-1.5">
              <span>Product Sold Today</span>
              <span className="text-purple-600">Visual Sales Bar</span>
            </div>

            {/* Milk Row */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-950">
                  🥛 <span>Milk</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-200 text-emerald-900 font-extrabold">Top Seller</span>
                </span>
                <span className="font-mono text-emerald-700 font-black">20 sold</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[100%]" />
              </div>
            </div>

            {/* Bread Row */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-slate-800">
                  🍞 <span>Bread</span>
                </span>
                <span className="font-mono text-slate-700 font-bold">10 sold</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full w-[50%]" />
              </div>
            </div>

            {/* Biscuits Row */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-rose-950">
                  🍪 <span>Biscuits</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-rose-200 text-rose-900 font-extrabold">Least</span>
                </span>
                <span className="font-mono text-rose-700 font-black">5 sold</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full w-[25%]" />
              </div>
            </div>
          </div>

          {/* Key Findings Card (Cols 6) */}
          <div className="md:col-span-6 space-y-2 p-3.5 rounded-2xl bg-[#faf5ff] border-2 border-purple-200/90 text-xs">
            <h5 className="font-bold text-purple-950 text-xs sm:text-[13px] flex items-center gap-1.5">
              <span>💡 What do we understand?</span>
            </h5>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">✔</span>
                <span><strong>Milk sold the most</strong> (20 sold today).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">✔</span>
                <span><strong>Biscuits sold the least</strong> (only 5 sold).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">✔</span>
                <span>Shop owner needs <strong>more milk tomorrow</strong> to prevent loss.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">✔</span>
                <span>Owner can <strong>check why biscuits are selling less</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 4. HOW DOES IT WORK? 4-STAGE INTERACTIVE PIPELINE (DOODLE SVGS + ARROWS) ── */}
      <div
        ref={secHowItWorksRef}
        className={`relative p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec2-how-it-works'
        )}`}
      >
        {activeSectionId === 'sec2-how-it-works' && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-sky-300 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: 4-Step Process</span>
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
          <span className="text-amber-400 text-sm sm:text-base">⚙️</span>
          <span>How Does It Work? (4 Steps)</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1">
          {/* Step 1: Collect Data */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-purple-50/50 border border-purple-200">
            <span className="px-2 py-0.5 rounded-full bg-sky-500 text-white text-[9.5px] font-bold mb-1">Step 1</span>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Cash register / Receipt */}
                <rect x="8" y="18" width="32" height="22" rx="3" fill="#bae6fd" stroke="#0369a1" strokeWidth="2" />
                <path d="M 14 10 H 34 V 18 H 14 Z" fill="#ffffff" stroke="#0369a1" strokeWidth="1.8" />
                <line x1="18" y1="14" x2="30" y2="14" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="14" y="24" width="8" height="5" rx="1" fill="#0284c7" />
                <circle cx="30" cy="27" r="2" fill="#22c55e" />
              </svg>
            </div>
            <strong className="text-xs text-purple-950 mt-1">Collect Data</strong>
            <span className="text-[10px] text-slate-600">Collect sales numbers</span>
          </div>

          {/* Arrow 1 */}
          <div className="flex items-center justify-center shrink-0">
            <svg viewBox="0 0 32 24" className="w-5 sm:w-6 h-5 sm:h-6" fill="none">
              <path d="M 4 12 H 24 M 18 6 L 24 12 L 18 18" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 2: Check Data */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-purple-50/50 border border-purple-200">
            <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-[9.5px] font-bold mb-1">Step 2</span>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Checklist clipboard */}
                <rect x="10" y="8" width="28" height="34" rx="3" fill="#f5d0fe" stroke="#a21caf" strokeWidth="2" />
                <rect x="18" y="5" width="12" height="6" rx="1.5" fill="#a21caf" />
                <path d="M 15 18 L 18 21 L 24 15" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="26" y1="18" x2="33" y2="18" stroke="#701a75" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 15 28 L 18 31 L 24 25" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="26" y1="28" x2="33" y2="28" stroke="#701a75" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <strong className="text-xs text-purple-950 mt-1">Check Data</strong>
            <span className="text-[10px] text-slate-600">Review numbers</span>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center shrink-0">
            <svg viewBox="0 0 32 24" className="w-5 sm:w-6 h-5 sm:h-6" fill="none">
              <path d="M 4 12 H 24 M 18 6 L 24 12 L 18 18" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 3: Understand */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-purple-50/50 border border-purple-200">
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9.5px] font-bold mb-1">Step 3</span>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Glowing Lightbulb Insight */}
                <path d="M 18 18 C 18 13 21 10 24 10 C 27 10 30 13 30 18 C 30 22 28 24 27 27 H 21 C 20 24 18 22 18 18 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                <rect x="21" y="27" width="6" height="4" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
                <line x1="24" y1="4" x2="24" y2="7" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="12" x2="14" y2="14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
                <line x1="36" y1="12" x2="34" y2="14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <strong className="text-xs text-purple-950 mt-1">Understand</strong>
            <span className="text-[10px] text-slate-600">Find top seller</span>
          </div>

          {/* Arrow 3 */}
          <div className="flex items-center justify-center shrink-0">
            <svg viewBox="0 0 32 24" className="w-5 sm:w-6 h-5 sm:h-6" fill="none">
              <path d="M 4 12 H 24 M 18 6 L 24 12 L 18 18" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 4: Decide */}
          <div className="flex flex-col items-center p-2 rounded-2xl flex-1 min-w-[90px] bg-purple-50/50 border border-purple-200">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9.5px] font-bold mb-1">Step 4</span>
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                {/* Target Bullseye with checkmark */}
                <circle cx="24" cy="24" r="16" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2" />
                <circle cx="24" cy="24" r="10" fill="#ffffff" stroke="#e11d48" strokeWidth="1.8" />
                <circle cx="24" cy="24" r="5" fill="#e11d48" />
                <path d="M 32 14 L 22 26 L 17 21" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <strong className="text-xs text-purple-950 mt-1">Decide</strong>
            <span className="text-[10px] text-slate-600">Decide what to buy</span>
          </div>
        </div>

        {/* Formula Pipeline Bar */}
        <div className="mt-2 text-center p-2 rounded-xl bg-purple-100/70 text-xs sm:text-[13px] font-bold text-purple-950 flex flex-wrap items-center justify-center gap-2">
          <span>Collect Data</span>
          <span className="text-purple-600">→</span>
          <span>Check Data</span>
          <span className="text-purple-600">→</span>
          <span>Understand</span>
          <span className="text-purple-600">→</span>
          <span className="text-emerald-700">Decide</span>
        </div>
      </div>

      {/* ── 5. BOTTOM BANNER: KEY TAKEAWAY ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">\ \</span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec2-takeaway'
          )}`}
        >
          {activeSectionId === 'sec2-takeaway' && (
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
            Businesses use Data Analytics to understand customers, sell more products, save money, and make better decisions.{' '}
            <strong className="text-purple-700 underline decoration-purple-300 underline-offset-2">
              Remember: Decisions using facts, not guesses!
            </strong>
          </p>
        </div>

        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">/ /</span>
      </div>
    </div>
  );
};
