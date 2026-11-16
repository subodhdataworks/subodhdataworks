import React from 'react';
import { languageEngine } from '../../../services/visualLearningLanguageEngine';

export interface CurvedLavenderRibbonBannerProps {
  moduleNum: number;
  moduleName: string;
  topicNum: number;
  totalTopicsInModule: number;
  englishTitle: string;
  hindiTitle: string;
  subtitleEnglish: string;
  subtitleHindi: string;
  emoji?: string;
  currentLang: 'hindi' | 'english';
  onLanguageToggle?: (nextLang: 'hindi' | 'english') => void;
  isActive?: boolean;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
  sectionId?: string;
}

export const CurvedLavenderRibbonBanner: React.FC<CurvedLavenderRibbonBannerProps> = ({
  moduleNum,
  moduleName,
  topicNum,
  totalTopicsInModule,
  englishTitle,
  hindiTitle,
  subtitleEnglish,
  subtitleHindi,
  emoji = '✨',
  currentLang,
  onLanguageToggle,
  isActive = false,
  sectionRef,
  sectionId,
}) => {
  const isHindi = currentLang === 'hindi';

  return (
    <div className="w-full space-y-4">
      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER WITH FLOWERS & SPARKLES ── */}
      <div
        ref={sectionRef}
        id={sectionId}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 ${
          isActive ? 'ring-2 ring-purple-400 shadow-lg bg-purple-50/50' : ''
        }`}
      >
        {/* Floating AI Explaining Badge */}
        {isActive && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: {englishTitle}</span>
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
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#7045E8]">
                Module {moduleNum} • {moduleName}
              </span>
              <h1 className="text-base sm:text-lg md:text-xl font-black text-[#2a174a] tracking-tight text-center leading-tight">
                {emoji} {isHindi ? languageEngine.standardizeHinglish(hindiTitle) : englishTitle}
              </h1>
            </div>
          </div>

          {/* Right Floral Bouquet & Sparkles */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -ml-2 sm:-ml-4 z-10 scale-x-[-1]">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
              <path d="M 16 14 Q 16 19 21 19 Q 16 19 16 24 Q 16 19 11 19 Q 16 19 16 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 42 6 Q 42 10 46 10 Q 42 10 42 14 Q 42 10 38 10 Q 42 10 42 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
              <path d="M 28 90 Q 38 65 38 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 34 68 Q 18 64 20 52 Q 28 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <path d="M 37 54 Q 50 48 48 36 Q 40 43 36 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
              <g transform="translate(38, 36)">
                <circle cx="0" cy="-11" r="5.5" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                <circle cx="10" cy="-3" r="5.5" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                <circle cx="6" cy="9" r="5.5" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                <circle cx="-6" cy="9" r="5.5" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                <circle cx="-10" cy="-3" r="5.5" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-[#4b3570] font-semibold max-w-lg mx-auto">
          {isHindi ? languageEngine.standardizeHinglish(subtitleHindi) : subtitleEnglish}
        </p>
      </div>
    </div>
  );
};
