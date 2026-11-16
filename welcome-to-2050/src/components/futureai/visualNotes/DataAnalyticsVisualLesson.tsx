import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';

interface DataAnalyticsVisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const DataAnalyticsVisualLesson: React.FC<DataAnalyticsVisualLessonProps> = ({
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

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secRawDataRef = useRef<HTMLDivElement>(null);
  const secCleaningRef = useRef<HTMLDivElement>(null);
  const secAnalysisRef = useRef<HTMLDivElement>(null);
  const secInsightsRef = useRef<HTMLDivElement>(null);
  const secDecisionsRef = useRef<HTMLDivElement>(null);
  const secRealLifeRef = useRef<HTMLDivElement>(null);
  const secImportanceRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active section when changed
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec-title': secTitleRef,
      'sec-raw-data': secRawDataRef,
      'sec-data-cleaning': secCleaningRef,
      'sec-analysis': secAnalysisRef,
      'sec-insights': secInsightsRef,
      'sec-decisions': secDecisionsRef,
      'sec-real-life': secRealLifeRef,
      'sec-importance': secImportanceRef,
      'sec-key-takeaway': secTakeawayRef,
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
        'sec-title': secTitleRef,
        'sec-raw-data': secRawDataRef,
        'sec-data-cleaning': secCleaningRef,
        'sec-analysis': secAnalysisRef,
        'sec-insights': secInsightsRef,
        'sec-decisions': secDecisionsRef,
        'sec-real-life': secRealLifeRef,
        'sec-importance': secImportanceRef,
        'sec-key-takeaway': secTakeawayRef,
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
  const isPipelineStepActive = [
    'sec-raw-data',
    'sec-data-cleaning',
    'sec-analysis',
    'sec-insights',
    'sec-decisions',
  ].includes(activeSectionId || '');

  const getCardClass = (id: string) => {
    if (!isAnyActive) return 'transition-all duration-300';
    if (activeSectionId === id) return 'lesson-section-active';
    return 'lesson-section-inactive hover:opacity-100';
  };

  const getStepClass = (id: string) => {
    if (activeSectionId === id) return 'lesson-step-active';
    if (isPipelineStepActive) return 'opacity-60 scale-95 transition-all duration-300';
    return 'transition-all duration-300';
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

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER WITH FLOWERS & SPARKLES ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${getCardClass(
          'sec-title'
        )}`}
      >
        {/* Floating AI Explaining Badge */}
        {activeSectionId === 'sec-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Definition</span>
          </div>
        )}

        {/* Banner with left and right flowers */}
        <div className="relative flex items-center justify-center max-w-[740px] mx-auto px-1 sm:px-2">
          {/* Left Floral Bouquet & Sparkles */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -mr-2 sm:-mr-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              {/* Sparkles */}
              <path d="M 16 14 Q 16 19 21 19 Q 16 19 16 24 Q 16 19 11 19 Q 16 19 16 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 42 6 Q 42 10 46 10 Q 42 10 42 14 Q 42 10 38 10 Q 42 10 42 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 8 38 Q 8 41 11 41 Q 8 41 8 44 Q 8 41 5 41 Q 8 41 8 38 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              {/* Green Stem & Leaves */}
              <path d="M 28 90 Q 38 65 38 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 34 68 Q 18 64 20 52 Q 28 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <path d="M 37 54 Q 50 48 48 36 Q 40 43 36 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              {/* 5-Petal Lavender Flower */}
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
              {/* Left Ribbon Notch Tail (Folded behind) */}
              <path
                d="M 45 32 L 8 28 L 22 46 L 8 64 L 45 60 Z"
                fill="#ede6ff"
                stroke="#9d7ec9"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Left Fold Shadow */}
              <path d="M 45 32 L 60 40 L 45 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />

              {/* Right Ribbon Notch Tail (Folded behind) */}
              <path
                d="M 495 32 L 532 28 L 518 46 L 532 64 L 495 60 Z"
                fill="#ede6ff"
                stroke="#9d7ec9"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Right Fold Shadow */}
              <path d="M 495 32 L 480 40 L 495 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />

              {/* Main Banner Body (Curved arc) */}
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
              {/* Heart Icon */}
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">💜</span>

              {/* Title Text */}
              <h1 className="text-base sm:text-2xl md:text-[27px] font-bold text-[#2a174a] tracking-tight pointer-events-auto">
                What Is Data Analytics?
              </h1>

              {/* 3 Bar Chart Icon with Black Outlines */}
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
              {/* Sparkles */}
              <path d="M 54 14 Q 54 19 49 19 Q 54 19 54 24 Q 54 19 59 19 Q 54 19 54 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 28 6 Q 28 10 24 10 Q 28 10 28 14 Q 28 10 32 10 Q 28 10 28 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 62 38 Q 62 41 59 41 Q 62 41 62 44 Q 62 41 65 41 Q 62 41 62 38 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              {/* Green Stem & Leaves */}
              <path d="M 42 90 Q 32 65 32 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 36 68 Q 52 64 50 52 Q 42 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <path d="M 33 54 Q 20 48 22 36 Q 30 43 34 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              {/* 5-Petal Rose Pink Flower */}
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

        {/* Sub-heading Pill: Data Analytics */}
        <div className="mt-2 flex items-center justify-center">
          <div
            className={`inline-block px-5 py-1 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
              activeSectionId === 'sec-title'
                ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white shadow-md ring-2 ring-purple-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border-[1.8px] border-[#b8a2e8] shadow-2xs'
            }`}
          >
            Data Analytics
          </div>
        </div>

        {/* Natural Definition with Accents and Highlighted Pills */}
        <div className="mt-2 flex items-center justify-center gap-2 max-w-xl mx-auto px-2">
          {/* Left 3 accent dashes */}
          <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
            \ \ \
          </span>

          <p className="text-xs sm:text-[14px] md:text-[15px] text-[#2a174a] leading-relaxed font-medium text-center">
            {currentLang === 'hindi' ? (
              <>
                Data Analytics एक ऐसी प्रक्रिया (process) है जिसमें हम{' '}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 transition-all duration-300 ${
                    activeSectionId === 'sec-title'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xs ring-2 ring-sky-300 scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
                  }`}
                >
                  raw data
                </span>{' '}
                को analyze करके useful{' '}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 transition-all duration-300 ${
                    activeSectionId === 'sec-title'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 shadow-xs ring-2 ring-amber-300 scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
                  }`}
                >
                  insights
                </span>{' '}
                निकालते हैं और better{' '}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 transition-all duration-300 ${
                    activeSectionId === 'sec-title'
                      ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-xs ring-2 ring-rose-300 scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
                  }`}
                >
                  decisions
                </span>{' '}
                लेते हैं।
              </>
            ) : (
              <>
                Data Analytics is a process where we analyze{' '}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 transition-all duration-300 ${
                    activeSectionId === 'sec-title'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xs ring-2 ring-sky-300 scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
                  }`}
                >
                  raw data
                </span>{' '}
                to extract useful{' '}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 transition-all duration-300 ${
                    activeSectionId === 'sec-title'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 shadow-xs ring-2 ring-amber-300 scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
                  }`}
                >
                  insights
                </span>{' '}
                and make better{' '}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 transition-all duration-300 ${
                    activeSectionId === 'sec-title'
                      ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-xs ring-2 ring-rose-300 scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
                  }`}
                >
                  decisions
                </span>
                .
              </>
            )}
          </p>

          {/* Right 3 accent dashes */}
          <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
            / / /
          </span>
        </div>
      </div>

      {/* ── 2. MAIN 5-STAGE PROCESS FLOW PIPELINE (OUTLINED DOODLE ICONS + PURPLE ARROWS) ── */}
      <div className="p-3.5 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs">
        <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 text-center overflow-x-auto pb-1">
          {/* ── STAGE 1: RAW DATA ── */}
          <div
            ref={secRawDataRef}
            className={`relative flex flex-col items-center p-1.5 sm:p-2.5 rounded-2xl flex-1 min-w-[95px] transition-all duration-300 ${getStepClass(
              'sec-raw-data'
            )}`}
          >
            {activeSectionId === 'sec-raw-data' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[9.5px] font-black shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                <span>Step 1</span>
              </div>
            )}
            {/* 3-Tier Database Cylinder Stack */}
            <div
              className={`w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center transition-transform duration-300 ${
                activeSectionId === 'sec-raw-data'
                  ? 'scale-110 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]'
                  : ''
              }`}
            >
              <svg viewBox="0 0 64 64" className="w-12 sm:w-14 h-12 sm:h-14" fill="none">
                {/* Top disc */}
                <ellipse cx="32" cy="18" rx="18" ry="7" fill="#7dd3fc" stroke="#1e293b" strokeWidth="2.4" />
                {/* Middle layer */}
                <path d="M 14 18 V 29 C 14 34 22 36 32 36 C 42 36 50 34 50 29 V 18" fill="#bae6fd" stroke="#1e293b" strokeWidth="2.4" />
                {/* Bottom layer */}
                <path d="M 14 29 V 42 C 14 47 22 49 32 49 C 42 49 50 47 50 42 V 29" fill="#bae6fd" stroke="#1e293b" strokeWidth="2.4" />
                {/* Middle disc separator line */}
                <path d="M 14 29 C 14 34 22 36 32 36 C 42 36 50 34 50 29" fill="none" stroke="#1e293b" strokeWidth="2.4" />
              </svg>
            </div>
            <div
              className={`mt-1 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                activeSectionId === 'sec-raw-data'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md ring-2 ring-sky-300 font-black scale-105'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Raw Data
            </div>
            <span
              className={`mt-0.5 text-[10px] sm:text-xs leading-tight transition-colors ${
                activeSectionId === 'sec-raw-data' ? 'text-sky-800 font-bold' : 'text-[#473063] font-medium'
              }`}
            >
              {currentLang === 'hindi' ? '(बिखरा हुआ raw data)' : '(Scattered raw data)'}
            </span>
          </div>

          {/* Arrow 1 with Sparkles */}
          <div className="flex flex-col items-center justify-center px-0.5 shrink-0 select-none">
            <svg viewBox="0 0 38 32" className="w-6 sm:w-8 h-6 sm:h-8" fill="none">
              {/* Two 4-point sparkle stars */}
              <path d="M 8 7 Q 8 10 11 10 Q 8 10 8 13 Q 8 10 5 10 Q 8 10 8 7 Z" fill="#2a174a" />
              <path d="M 28 6 Q 28 9 31 9 Q 28 9 28 12 Q 28 9 25 9 Q 28 9 28 6 Z" fill="#2a174a" />
              {/* Bold purple arrow */}
              <path d="M 4 20 L 26 20 M 20 14 L 28 20 L 20 26" stroke="#2a174a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── STAGE 2: DATA CLEANING ── */}
          <div
            ref={secCleaningRef}
            className={`relative flex flex-col items-center p-1.5 sm:p-2.5 rounded-2xl flex-1 min-w-[95px] transition-all duration-300 ${getStepClass(
              'sec-data-cleaning'
            )}`}
          >
            {activeSectionId === 'sec-data-cleaning' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-[9.5px] font-black shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                <span>Step 2</span>
              </div>
            )}
            {/* Broom Cleaning Icon with Bristles & Sparkles */}
            <div
              className={`w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center transition-transform duration-300 ${
                activeSectionId === 'sec-data-cleaning'
                  ? 'animate-active-broom scale-110 drop-shadow-[0_0_12px_rgba(244,63,94,0.7)]'
                  : ''
              }`}
            >
              <svg viewBox="0 0 64 64" className="w-12 sm:w-14 h-12 sm:h-14" fill="none">
                {/* Purple handle */}
                <path d="M 48 10 L 32 30" stroke="#7e22ce" strokeWidth="4.5" strokeLinecap="round" />
                <rect x="29" y="27" width="8" height="4" rx="1.5" transform="rotate(-52 29 27)" fill="#db2777" stroke="#1e293b" strokeWidth="1.8" />
                {/* Yellow bristles */}
                <path
                  d="M 30 30 Q 36 34 33 46 C 30 50 16 48 14 43 Q 18 34 30 30 Z"
                  fill="#fde047"
                  stroke="#1e293b"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Bristle lines */}
                <path d="M 18 41 Q 24 39 28 41" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 21 46 Q 25 44 28 46" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
                {/* Dust sparkles */}
                <path d="M 45 36 Q 45 39 48 39 Q 45 39 45 42 Q 45 39 42 39 Q 45 39 45 36 Z" fill="#2a174a" />
                <path d="M 11 31 Q 11 33 13 33 Q 11 33 11 35 Q 11 33 9 33 Q 11 33 11 31 Z" fill="#2a174a" />
              </svg>
            </div>
            <div
              className={`mt-1 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                activeSectionId === 'sec-data-cleaning'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md ring-2 ring-pink-300 font-black scale-105'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Data Cleaning
            </div>
            <span
              className={`mt-0.5 text-[10px] sm:text-xs leading-tight transition-colors ${
                activeSectionId === 'sec-data-cleaning' ? 'text-rose-800 font-bold' : 'text-[#473063] font-medium'
              }`}
            >
              {currentLang === 'hindi' ? '(गलतियों को सुधारना)' : '(Fixing errors & noise)'}
            </span>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center px-0.5 shrink-0 select-none">
            <svg viewBox="0 0 34 28" className="w-5 sm:w-7 h-5 sm:h-7" fill="none">
              <path d="M 4 14 L 26 14 M 18 7 L 26 14 L 18 21" stroke="#2a174a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── STAGE 3: ANALYSIS ── */}
          <div
            ref={secAnalysisRef}
            className={`relative flex flex-col items-center p-1.5 sm:p-2.5 rounded-2xl flex-1 min-w-[95px] transition-all duration-300 ${getStepClass(
              'sec-analysis'
            )}`}
          >
            {activeSectionId === 'sec-analysis' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[9.5px] font-black shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                <span>Step 3</span>
              </div>
            )}
            {/* Monitor + Charts + Magnifying Glass */}
            <div
              className={`w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center transition-transform duration-300 ${
                activeSectionId === 'sec-analysis'
                  ? 'scale-110 drop-shadow-[0_0_12px_rgba(147,51,234,0.7)]'
                  : ''
              }`}
            >
              <svg viewBox="0 0 64 64" className="w-12 sm:w-14 h-12 sm:h-14" fill="none">
                {/* Screen body */}
                <rect x="10" y="14" width="38" height="25" rx="3" fill="#ffffff" stroke="#1e293b" strokeWidth="2.2" />
                <line x1="10" y1="19" x2="48" y2="19" stroke="#94a3b8" strokeWidth="1.2" />
                {/* 3 mini bar charts */}
                <rect x="16" y="27" width="4" height="8" rx="1" fill="#f43f5e" />
                <rect x="22" y="22" width="4" height="13" rx="1" fill="#38bdf8" />
                <rect x="28" y="25" width="4" height="10" rx="1" fill="#a855f7" />
                {/* Base */}
                <path d="M 6 39 L 52 39 C 54 39 54 43 51 43 L 7 43 C 4 43 4 39 6 39 Z" fill="#38bdf8" stroke="#1e293b" strokeWidth="2.2" />
                {/* Magnifying Glass */}
                <circle cx="42" cy="27" r="7.5" fill="rgba(255,255,255,0.7)" stroke="#1e293b" strokeWidth="2.4" />
                <path d="M 48 32 L 55 39" stroke="#1e293b" strokeWidth="3.2" strokeLinecap="round" />
              </svg>
            </div>
            <div
              className={`mt-1 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                activeSectionId === 'sec-analysis'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md ring-2 ring-indigo-300 font-black scale-105'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Analysis
            </div>
            <span
              className={`mt-0.5 text-[10px] sm:text-xs leading-tight transition-colors ${
                activeSectionId === 'sec-analysis' ? 'text-indigo-900 font-bold' : 'text-[#473063] font-medium'
              }`}
            >
              {currentLang === 'hindi' ? '(Data को समझना)' : '(Understanding data patterns)'}
            </span>
          </div>

          {/* Arrow 3 */}
          <div className="flex items-center justify-center px-0.5 shrink-0 select-none">
            <svg viewBox="0 0 34 28" className="w-5 sm:w-7 h-5 sm:h-7" fill="none">
              <path d="M 4 14 L 26 14 M 18 7 L 26 14 L 18 21" stroke="#2a174a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── STAGE 4: INSIGHTS ── */}
          <div
            ref={secInsightsRef}
            className={`relative flex flex-col items-center p-1.5 sm:p-2.5 rounded-2xl flex-1 min-w-[95px] transition-all duration-300 ${getStepClass(
              'sec-insights'
            )}`}
          >
            {activeSectionId === 'sec-insights' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-[9.5px] font-black shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Step 4</span>
              </div>
            )}
            {/* Glowing Lightbulb with Rays */}
            <div
              className={`w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center transition-transform duration-300 ${
                activeSectionId === 'sec-insights'
                  ? 'animate-active-bulb scale-110 drop-shadow-[0_0_16px_rgba(245,158,11,0.9)]'
                  : ''
              }`}
            >
              <svg viewBox="0 0 64 64" className="w-12 sm:w-14 h-12 sm:h-14" fill="none">
                {/* 6 Radiating yellow rays */}
                <line x1="32" y1="5" x2="32" y2="9" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="16" y1="11" x2="19" y2="14" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="48" y1="11" x2="45" y2="14" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="10" y1="26" x2="14" y2="26" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="54" y1="26" x2="50" y2="26" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                {/* Glass Bulb Body */}
                <path
                  d="M 22 26 C 22 20 26 16 32 16 C 38 16 42 20 42 26 C 42 31 38 34 37 38 L 27 38 C 26 34 22 31 22 26 Z"
                  fill="#fef08a"
                  stroke="#1e293b"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Filament */}
                <path d="M 29 27 L 32 23 L 35 27" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Screw base & contact */}
                <path d="M 27 38 H 37 V 42 H 27 Z" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.8" />
                <path d="M 29 42 H 35 V 45 C 35 46.5 33.5 48 32 48 C 30.5 48 29 46.5 29 45 Z" fill="#475569" stroke="#1e293b" strokeWidth="1.8" />
              </svg>
            </div>
            <div
              className={`mt-1 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                activeSectionId === 'sec-insights'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md ring-2 ring-amber-300 font-black scale-105'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Insights
            </div>
            <span
              className={`mt-0.5 text-[10px] sm:text-xs leading-tight transition-colors ${
                activeSectionId === 'sec-insights' ? 'text-amber-900 font-bold' : 'text-[#473063] font-medium'
              }`}
            >
              {currentLang === 'hindi' ? '(Useful information)' : '(Actionable information)'}
            </span>
          </div>

          {/* Arrow 4 */}
          <div className="flex items-center justify-center px-0.5 shrink-0 select-none">
            <svg viewBox="0 0 34 28" className="w-5 sm:w-7 h-5 sm:h-7" fill="none">
              <path d="M 4 14 L 26 14 M 18 7 L 26 14 L 18 21" stroke="#2a174a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── STAGE 5: DECISIONS ── */}
          <div
            ref={secDecisionsRef}
            className={`relative flex flex-col items-center p-1.5 sm:p-2.5 rounded-2xl flex-1 min-w-[95px] transition-all duration-300 ${getStepClass(
              'sec-decisions'
            )}`}
          >
            {activeSectionId === 'sec-decisions' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white text-[9.5px] font-black shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                <span>Step 5</span>
              </div>
            )}
            {/* Dartboard Target with Arrow Bullseye */}
            <div
              className={`w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center transition-transform duration-300 ${
                activeSectionId === 'sec-decisions'
                  ? 'animate-active-target scale-110 drop-shadow-[0_0_16px_rgba(244,63,94,0.9)]'
                  : ''
              }`}
            >
              <svg viewBox="0 0 64 64" className="w-12 sm:w-14 h-12 sm:h-14" fill="none">
                {/* Outer ring */}
                <circle cx="32" cy="32" r="19" fill="#ffe4e6" stroke="#1e293b" strokeWidth="2.2" />
                {/* Second ring */}
                <circle cx="32" cy="32" r="13" fill="#ffffff" stroke="#f43f5e" strokeWidth="2.2" />
                {/* Bullseye center */}
                <circle cx="32" cy="32" r="7" fill="#f43f5e" stroke="#1e293b" strokeWidth="1.8" />
                {/* Arrow hitting target */}
                <path d="M 47 17 L 33 31" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                {/* Arrow feathers */}
                <path d="M 43 14 L 49 20" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 47 11 L 53 17" stroke="#7e22ce" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div
              className={`mt-1 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                activeSectionId === 'sec-decisions'
                  ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md ring-2 ring-rose-300 font-black scale-105'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Decisions
            </div>
            <span
              className={`mt-0.5 text-[10px] sm:text-xs leading-tight transition-colors ${
                activeSectionId === 'sec-decisions' ? 'text-rose-900 font-bold' : 'text-[#473063] font-medium'
              }`}
            >
              {currentLang === 'hindi' ? '(Better decisions लेना)' : '(Making smarter choices)'}
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. TWO SIDE-BY-SIDE SPLIT CARDS (EXACT REFERENCE ARRANGEMENT) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
        {/* ── LEFT CARD: REAL-LIFE EXAMPLES ── */}
        <div
          ref={secRealLifeRef}
          className={`relative p-4 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3.5 transition-all duration-300 ${getCardClass(
            'sec-real-life'
          )}`}
        >
          {/* Floating AI Explaining Badge */}
          {activeSectionId === 'sec-real-life' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>✨ AI Mentor Explaining: Examples</span>
            </div>
          )}

          {/* Card Header Pill with Star */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeSectionId === 'sec-real-life'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm ring-2 ring-purple-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
            }`}
          >
            <span className="text-amber-400 text-sm sm:text-base">⭐</span>
            <span>Real-Life Examples</span>
          </div>

          <div className="space-y-3 pt-0.5">
            {/* Example 1: E-commerce */}
            <div className="flex items-start gap-3">
              {/* Pink wire shopping cart */}
              <div
                className={`w-9 h-9 flex items-center justify-center shrink-0 transition-transform ${
                  activeSectionId === 'sec-real-life' ? 'scale-115 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]' : ''
                }`}
              >
                <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                  <circle cx="14" cy="30" r="2.2" fill="#2a174a" />
                  <circle cx="28" cy="30" r="2.2" fill="#2a174a" />
                  <path d="M 4 8 H 9 L 13 24 H 29 L 32 12 H 10" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="12" x2="16" y2="24" stroke="#f43f5e" strokeWidth="1.5" />
                  <line x1="22" y1="12" x2="22" y2="24" stroke="#f43f5e" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeSectionId === 'sec-real-life'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-xs ring-2 ring-pink-300 font-extrabold scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
                  }`}
                >
                  E-commerce
                </span>
                <p className="text-xs sm:text-[13px] text-[#2a174a] font-medium leading-relaxed">
                  {currentLang === 'hindi' ? '→ कौन सा product ज़्यादा बिक रहा है?' : '→ Which product is selling the most?'}
                </p>
              </div>
            </div>

            {/* Example 2: Banking */}
            <div className="flex items-start gap-3">
              {/* Classical Bank Building with Columns */}
              <div
                className={`w-9 h-9 flex items-center justify-center shrink-0 transition-transform ${
                  activeSectionId === 'sec-real-life' ? 'scale-115 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]' : ''
                }`}
              >
                <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                  {/* Triangular pediment roof */}
                  <polygon points="18,5 4,13 32,13" fill="#fde047" stroke="#2a174a" strokeWidth="2" strokeLinejoin="round" />
                  {/* Architrave bar */}
                  <rect x="5" y="13" width="26" height="3" fill="#ca8a04" stroke="#2a174a" strokeWidth="1.5" />
                  {/* 4 Columns */}
                  <line x1="8" y1="16" x2="8" y2="26" stroke="#2a174a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="14" y1="16" x2="14" y2="26" stroke="#2a174a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="22" y1="16" x2="22" y2="26" stroke="#2a174a" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="28" y1="16" x2="28" y2="26" stroke="#2a174a" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Base podium */}
                  <rect x="4" y="26" width="28" height="4" rx="1" fill="#fde047" stroke="#2a174a" strokeWidth="2" />
                </svg>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeSectionId === 'sec-real-life'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 shadow-xs ring-2 ring-amber-300 font-extrabold scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
                  }`}
                >
                  Banking
                </span>
                <p className="text-xs sm:text-[13px] text-[#2a174a] font-medium leading-relaxed">
                  {currentLang === 'hindi' ? '→ किस customer का loan risk high है?' : '→ Which customer has a high loan risk?'}
                </p>
              </div>
            </div>

            {/* Example 3: OTT / Media */}
            <div className="flex items-start gap-3">
              {/* Clapperboard with play icon */}
              <div
                className={`w-9 h-9 flex items-center justify-center shrink-0 transition-transform ${
                  activeSectionId === 'sec-real-life' ? 'scale-115 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]' : ''
                }`}
              >
                <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
                  {/* Clapperboard body */}
                  <rect x="6" y="14" width="24" height="17" rx="2" fill="#ede6ff" stroke="#2a174a" strokeWidth="2" />
                  {/* Play triangle */}
                  <polygon points="16,19 23,22.5 16,26" fill="#7c3aed" stroke="#2a174a" strokeWidth="1.5" strokeLinejoin="round" />
                  {/* Top slanted clapper */}
                  <g transform="rotate(-6 6 12)">
                    <rect x="6" y="8" width="24" height="6" rx="1.5" fill="#38bdf8" stroke="#2a174a" strokeWidth="1.8" />
                    <line x1="12" y1="8" x2="15" y2="14" stroke="#2a174a" strokeWidth="1.8" />
                    <line x1="18" y1="8" x2="21" y2="14" stroke="#2a174a" strokeWidth="1.8" />
                    <line x1="24" y1="8" x2="27" y2="14" stroke="#2a174a" strokeWidth="1.8" />
                  </g>
                </svg>
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeSectionId === 'sec-real-life'
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xs ring-2 ring-sky-300 font-extrabold scale-105'
                      : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
                  }`}
                >
                  OTT / Media
                </span>
                <p className="text-xs sm:text-[13px] text-[#2a174a] font-medium leading-relaxed">
                  {currentLang === 'hindi' ? '→ कौनसा content ज़्यादा देखा जा रहा है?' : '→ Which content is being watched the most?'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT CARD: WHY IS IT IMPORTANT? ── */}
        <div
          ref={secImportanceRef}
          className={`relative p-4 sm:p-5 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs space-y-3.5 transition-all duration-300 ${getCardClass(
            'sec-importance'
          )}`}
        >
          {/* Floating AI Explaining Badge */}
          {activeSectionId === 'sec-importance' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-emerald-600 to-teal-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
              <span>✨ AI Mentor Explaining: 4 Key Benefits</span>
            </div>
          )}

          {/* Card Header Pill with Heart */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeSectionId === 'sec-importance'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm ring-2 ring-emerald-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
            }`}
          >
            <span className="text-purple-600 text-sm sm:text-base">💜</span>
            <span>Why Is It Important?</span>
          </div>

          {/* 4 Clean Bullet Points with Hand-Drawn Green Checkmark */}
          <div className="space-y-3 pt-0.5">
            <div className="flex items-start gap-2.5">
              <span
                className={`font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5 select-none transition-transform duration-300 ${
                  activeSectionId === 'sec-importance'
                    ? 'text-emerald-500 scale-125 filter drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]'
                    : 'text-emerald-500'
                }`}
              >
                ✔
              </span>
              <p
                className={`text-xs sm:text-[13.5px] leading-snug transition-colors ${
                  activeSectionId === 'sec-importance' ? 'text-slate-900 font-bold' : 'text-[#2a174a] font-medium'
                }`}
              >
                {currentLang === 'hindi'
                  ? 'Better business decisions लेने में मदद करता है।'
                  : 'Helps make better business decisions.'}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span
                className={`font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5 select-none transition-transform duration-300 ${
                  activeSectionId === 'sec-importance'
                    ? 'text-emerald-500 scale-125 filter drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]'
                    : 'text-emerald-500'
                }`}
              >
                ✔
              </span>
              <p
                className={`text-xs sm:text-[13.5px] leading-snug transition-colors ${
                  activeSectionId === 'sec-importance' ? 'text-slate-900 font-bold' : 'text-[#2a174a] font-medium'
                }`}
              >
                {currentLang === 'hindi'
                  ? 'Trends और patterns को identify करता है।'
                  : 'Identifies valuable trends and hidden patterns.'}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span
                className={`font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5 select-none transition-transform duration-300 ${
                  activeSectionId === 'sec-importance'
                    ? 'text-emerald-500 scale-125 filter drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]'
                    : 'text-emerald-500'
                }`}
              >
                ✔
              </span>
              <p
                className={`text-xs sm:text-[13.5px] leading-snug transition-colors ${
                  activeSectionId === 'sec-importance' ? 'text-slate-900 font-bold' : 'text-[#2a174a] font-medium'
                }`}
              >
                {currentLang === 'hindi'
                  ? 'Cost कम और efficiency बढ़ाता है।'
                  : 'Reduces operational costs and boosts efficiency.'}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span
                className={`font-bold text-base sm:text-lg leading-none shrink-0 mt-0.5 select-none transition-transform duration-300 ${
                  activeSectionId === 'sec-importance'
                    ? 'text-emerald-500 scale-125 filter drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]'
                    : 'text-emerald-500'
                }`}
              >
                ✔
              </span>
              <p
                className={`text-xs sm:text-[13.5px] leading-snug transition-colors ${
                  activeSectionId === 'sec-importance' ? 'text-slate-900 font-bold' : 'text-[#2a174a] font-medium'
                }`}
              >
                {currentLang === 'hindi'
                  ? 'Customer को बेहतर experience देता है।'
                  : 'Delivers a superior customer experience.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. BOTTOM BANNER: KEY TAKEAWAY FORMULA ── */}
      <div className="relative flex items-center justify-center gap-2 pt-1">
        {/* Left accent doodle rays */}
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
          \ \
        </span>

        <div
          ref={secTakeawayRef}
          className={`relative flex-1 p-3 sm:p-4 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-center transition-all duration-300 ${getCardClass(
            'sec-key-takeaway'
          )}`}
        >
          {/* Floating AI Explaining Badge */}
          {activeSectionId === 'sec-key-takeaway' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping inline-block" />
              <span>✨ AI Mentor Golden Formula</span>
            </div>
          )}

          {/* Key Takeaway Pill */}
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-[13px] font-bold shrink-0 transition-all duration-300 ${
              activeSectionId === 'sec-key-takeaway'
                ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white shadow-sm ring-2 ring-amber-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
            }`}
          >
            <span className="text-amber-400 text-sm">💡</span>
            <span>Key Takeaway</span>
          </div>

          {/* Formula Chips */}
          <div className="flex items-center flex-wrap justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#2a174a]">
            <span className="mr-1">Data Analytics =</span>
            <span
              className={`px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                activeSectionId === 'sec-key-takeaway'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white ring-2 ring-sky-300 shadow-xs scale-105 font-black'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Data
            </span>
            <span className="text-[#7c3aed] font-bold">+</span>
            <span
              className={`px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                activeSectionId === 'sec-key-takeaway'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white ring-2 ring-indigo-300 shadow-xs scale-105 font-black'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Analysis
            </span>
            <span className="text-[#7c3aed] font-bold">+</span>
            <span
              className={`px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                activeSectionId === 'sec-key-takeaway'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 ring-2 ring-amber-300 shadow-xs scale-105 font-black'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Insights
            </span>
            <span className="text-[#7c3aed] font-bold">+</span>
            <span
              className={`px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                activeSectionId === 'sec-key-takeaway'
                  ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white ring-2 ring-rose-300 shadow-xs scale-105 font-black'
                  : 'bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd]'
              }`}
            >
              Decisions
            </span>
          </div>
        </div>

        {/* Right accent doodle rays */}
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
          / /
        </span>
      </div>
    </div>
  );
};
