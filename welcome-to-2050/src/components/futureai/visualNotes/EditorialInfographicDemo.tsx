import React from 'react';
import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import { StructuredVisualNotesSheet } from './StructuredVisualNotesRenderer';
import type { SectionRectInfo } from './PdfVisualNotesViewer';

export interface EditorialInfographicDemoProps {
  spec: StructuredVisualNoteTopic;
  lang: 'en' | 'hi';
  activeSectionId?: string | null;
  speechProgress?: number;
  liveTypedText?: string;
  isMentorSpeaking?: boolean;
  onSectionRectChange?: (rect: SectionRectInfo) => void;
  onScrollSettled?: () => void;
}

/**
 * DEMO PROTOTYPE (Topic 1: What Is Data Science?):
 * Hybrid Image-1 Dark Editorial Cover Banner + Image-2 Illustrated Story Strip
 * + Crisp Infographic Styling, while preserving 100% AI Mentor Voice Sync & EN/Hindi!
 */
export const EditorialInfographicDemo: React.FC<EditorialInfographicDemoProps> = ({
  spec,
  lang,
  activeSectionId,
  speechProgress = 0,
  liveTypedText = '',
  isMentorSpeaking = false,
  onSectionRectChange,
  onScrollSettled,
}) => {
  const isHi = lang === 'hi';

  return (
    <div className="space-y-4 font-sans">
      {/* =====================================================================
          1. IMAGE-1 STYLE DARK EDITORIAL HERO COVER BANNER (Pure HTML/CSS/SVG)
          ===================================================================== */}
      <div
        className="relative overflow-hidden rounded-2xl border border-[#2D2458] shadow-[0_12px_32px_rgba(17,14,41,0.22)]"
        style={{
          backgroundColor: '#120E29',
          backgroundImage:
            'linear-gradient(rgba(167,139,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        {/* Subtle radial glow behind right orbit */}
        <div
          className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-35 blur-3xl"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, #7C3AED 55%, transparent 75%)' }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-4 px-6 py-7 sm:px-8 sm:py-8">
          {/* Left Typography Zone */}
          <div className="md:col-span-7 space-y-3.5 text-left">
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs text-[11px] font-bold tracking-[0.14em] uppercase text-slate-200">
              <span>FUTURE IT INDUSTRY</span>
              <span className="text-pink-400">/</span>
              <span className="text-sky-300">AI FIRST</span>
            </div>

            {/* Series Kicker */}
            <div className="text-[11px] sm:text-xs font-extrabold tracking-[0.16em] uppercase text-pink-300">
              {isHi ? 'DATA SCIENCE / FOUNDATION SERIES' : 'DATA SCIENCE / FOUNDATION SERIES'}
            </div>

            {/* Bold Uppercase Editorial Title */}
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-white leading-[1.08] m-0">
              {isHi ? (
                <>
                  WHAT IS <span className="text-pink-400">DATA SCIENCE?</span>
                </>
              ) : (
                <>
                  WHAT IS <span className="text-pink-400">DATA SCIENCE?</span>
                </>
              )}
            </h1>

            {/* Clean Subtitle */}
            <p className="text-sm sm:text-[15px] text-slate-300 font-medium leading-relaxed max-w-xl m-0">
              {isHi
                ? 'Rozmarra ke raw data se clear answers aur smart business decisions tak ka safar'
                : 'From everyday raw records to clear patterns, insights, and smart decisions'}
            </p>

            {/* Bright Magenta Lesson Pill */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F43F5E] to-[#EC4899] text-white text-xs font-extrabold tracking-wider uppercase shadow-[0_4px_16px_rgba(244,63,94,0.4)]">
                <span>LESSON 01</span>
                <span className="opacity-70">|</span>
                <span>NO CODING NEEDED</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                {isHi ? 'ZERO-TO-HERO VISUAL LEARNING' : 'DATA SCIENCE FOR BEGINNERS'}
              </span>
            </div>
          </div>

          {/* Right Animated Concentric Orbit SVG (Image-1 inspired!) */}
          <div className="md:col-span-5 flex items-center justify-center">
            <svg
              viewBox="0 0 260 220"
              className="w-52 h-44 sm:w-60 sm:h-52 overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="dsCoreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FB7185" />
                  <stop offset="100%" stopColor="#E11D48" />
                </radialGradient>
              </defs>
              {/* Concentric Orbit Rings */}
              <circle cx="130" cy="110" r="92" fill="none" stroke="rgba(148,163,184,0.22)" strokeWidth="1" />
              <circle cx="130" cy="110" r="68" fill="none" stroke="rgba(167,139,250,0.32)" strokeWidth="1.2" />
              <circle cx="130" cy="110" r="46" fill="none" stroke="#F43F5E" strokeWidth="2.4" strokeOpacity="0.88" />
              {/* Orbiting Accent Nodes */}
              <circle cx="62" cy="48" r="3.5" fill="#2DD4BF" />
              <circle cx="195" cy="52" r="4" fill="#F43F5E" />
              <circle cx="218" cy="126" r="4.5" fill="#FB7185" />
              <circle cx="164" cy="186" r="4.5" fill="#34D399" />
              <circle cx="56" cy="158" r="4" fill="#38BDF8" />
              <circle cx="96" cy="76" r="4" fill="#F43F5E" />
              <circle cx="164" cy="84" r="3.5" fill="#2DD4BF" />
              <circle cx="106" cy="144" r="3.5" fill="#A78BFA" />
              {/* Glowing Center Core */}
              <circle cx="130" cy="110" r="28" fill="url(#dsCoreGrad)" />
              <text
                x="130"
                y="116"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="19"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                letterSpacing="1"
              >
                DS
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. IMAGE-2 STYLE ILLUSTRATED VISUAL STORY STRIP (Real AI Art + Crisp HTML)
          ===================================================================== */}
      <div className="rounded-2xl border border-[#DDD6FE] bg-white overflow-hidden shadow-xs">
        {/* Top Navy Editorial Strip Header */}
        <div className="bg-[#0F172A] px-5 py-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-[#F43F5E] text-white text-[11px] font-black tracking-wider">
              STORY
            </span>
            <h2 className="text-sm sm:text-base font-extrabold text-white m-0 tracking-tight">
              {isHi
                ? 'Ek Shop Register Se Modern Data Science Tak'
                : 'From a Local Shop Register to Modern Data Science'}
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-sky-300">
            {isHi ? 'Zero Coding • Real-Life Intuition' : 'Same Thinking • Bigger Scale'}
          </span>
        </div>

        {/* 2-Panel Visual Story Cards with Zero-Text AI Artwork */}
        <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch bg-gradient-to-b from-[#FAF8FF] to-white">
          {/* Card 1: Everyday Kirana Shop */}
          <div className="rounded-2xl border-2 border-[#BAE6FD] bg-[#F0F9FF] overflow-hidden flex flex-col">
            <div className="relative h-40 sm:h-44 w-full bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#DBEAFE] overflow-hidden flex items-center justify-center">
              {/* Crisp Custom Editorial SVG: Local Shop Counter + Seasonal Stock + Ledger */}
              <svg viewBox="0 0 360 170" className="w-full h-full" aria-hidden="true">
                {/* Shop Awning */}
                <rect x="28" y="18" width="304" height="22" rx="8" fill="#0284C7" />
                <path d="M28 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#38BDF8" />
                <path d="M66 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#FFFFFF" />
                <path d="M104 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#38BDF8" />
                <path d="M142 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#FFFFFF" />
                <path d="M180 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#38BDF8" />
                <path d="M218 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#FFFFFF" />
                <path d="M256 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#38BDF8" />
                <path d="M294 40 h38 v10 a19 10 0 0 1 -38 0 z" fill="#FFFFFF" />
                {/* Counter Desk */}
                <rect x="34" y="126" width="292" height="32" rx="10" fill="#0F172A" />
                <rect x="34" y="120" width="292" height="10" rx="5" fill="#F59E0B" />
                {/* Milk Cartons */}
                <rect x="58" y="88" width="24" height="32" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                <polygon points="58,88 70,76 82,88" fill="#38BDF8" />
                <rect x="88" y="92" width="22" height="28" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                <polygon points="88,92 99,82 110,92" fill="#7DD3FC" />
                {/* Open Sales Ledger Book */}
                <rect x="136" y="82" width="88" height="38" rx="6" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2.2" />
                <line x1="180" y1="82" x2="180" y2="120" stroke="#CBD5E1" strokeWidth="2" />
                <line x1="146" y1="94" x2="172" y2="94" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                <line x1="146" y1="104" x2="168" y2="104" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                <line x1="188" y1="94" x2="214" y2="94" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
                <line x1="188" y1="104" x2="210" y2="104" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                {/* Seasonal Monsoon Umbrella */}
                <path d="M250 96 A34 28 0 0 1 318 96 Z" fill="#F43F5E" />
                <path d="M266 96 A18 26 0 0 1 302 96 Z" fill="#FB7185" />
                <line x1="284" y1="96" x2="284" y2="120" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                {/* Raindrop accents */}
                <circle cx="256" cy="64" r="3" fill="#0284C7" />
                <circle cx="284" cy="58" r="3.5" fill="#38BDF8" />
                <circle cx="310" cy="66" r="3" fill="#0284C7" />
              </svg>
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#0F172A]/90 text-white text-[11px] font-extrabold tracking-wide">
                {isHi ? '1. EVERYDAY SHOP' : '1. EVERYDAY SHOP'}
              </span>
            </div>
            <div className="p-3.5 space-y-1.5 flex-1">
              <div className="text-[13.5px] font-extrabold text-[#0F172A]">
                {isHi ? 'Shopkeeper Register Mein Patterns Dekhta Hai' : 'A Shopkeeper Spots Seasonal Patterns'}
              </div>
              <p className="text-[12.5px] text-slate-700 leading-relaxed m-0">
                {isHi
                  ? 'Roz ke bills dekh kar shopkeeper samajh jaata hai ki June mein umbrellas aur Sunday subah doodh zyada bikta hai — aur pehle se stock mangwa leta hai.'
                  : 'By checking 6 months of bills, the shopkeeper notices umbrella demand jumps in June and milk sells out early on Sundays — so they stock ahead.'}
              </p>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white border border-[#93C5FD] text-[11px] font-bold text-[#0369A1]">
                  {isHi ? 'Main Use: Smart Stock Decision' : 'Main Use: Smart Stock Decision'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Data Scientist */}
          <div className="rounded-2xl border-2 border-[#DDD6FE] bg-[#F5F3FF] overflow-hidden flex flex-col">
            <div className="relative h-40 sm:h-44 w-full bg-gradient-to-br from-[#EDE9FE] via-[#FAF5FF] to-[#FCE7F3] overflow-hidden flex items-center justify-center">
              {/* Crisp Custom Editorial SVG: Modern Analytics Laptop + Rising Forecast + Floating Nodes */}
              <svg viewBox="0 0 360 170" className="w-full h-full" aria-hidden="true">
                {/* Floating Glow Nodes */}
                <circle cx="56" cy="52" r="14" fill="#DDD6FE" />
                <circle cx="56" cy="52" r="6" fill="#7C3AED" />
                <circle cx="308" cy="46" r="16" fill="#FCE7F3" />
                <circle cx="308" cy="46" r="7" fill="#EC4899" />
                <circle cx="312" cy="116" r="11" fill="#DCFCE7" />
                <circle cx="312" cy="116" r="5" fill="#10B981" />
                {/* Connecting Dotted Lines */}
                <line x1="68" y1="56" x2="104" y2="74" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="256" y1="68" x2="294" y2="50" stroke="#F472B6" strokeWidth="2" strokeDasharray="4 4" />
                {/* Laptop Screen */}
                <rect x="92" y="26" width="176" height="106" rx="12" fill="#1E1B4B" stroke="#7C3AED" strokeWidth="2.5" />
                <rect x="102" y="36" width="156" height="86" rx="6" fill="#0F172A" />
                {/* Rising Bar Chart Inside Laptop */}
                <rect x="118" y="92" width="16" height="22" rx="3" fill="#38BDF8" />
                <rect x="142" y="80" width="16" height="34" rx="3" fill="#A78BFA" />
                <rect x="166" y="70" width="16" height="44" rx="3" fill="#8B5CF6" />
                <rect x="190" y="58" width="16" height="56" rx="3" fill="#EC4899" />
                <rect x="214" y="46" width="16" height="68" rx="3" fill="#34D399" />
                {/* Forecast Trend Curve */}
                <path d="M124 88 L150 74 L174 66 L198 54 L224 42" fill="none" stroke="#FDE047" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="224" cy="42" r="4.5" fill="#FDE047" />
                {/* Laptop Base */}
                <path d="M72 134 H288 L276 146 H84 Z" fill="#6D28D9" />
                <rect x="156" y="137" width="48" height="4" rx="2" fill="#DDD6FE" />
              </svg>
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#7C3AED]/95 text-white text-[11px] font-extrabold tracking-wide">
                {isHi ? '2. DATA SCIENCE SCALE' : '2. DATA SCIENCE SCALE'}
              </span>
            </div>
            <div className="p-3.5 space-y-1.5 flex-1">
              <div className="text-[13.5px] font-extrabold text-[#0F172A]">
                {isHi ? 'Data Scientist Laakhon Records Par Yahi Karta Hai' : 'Data Science Does This Across Millions of Rows'}
              </div>
              <p className="text-[12.5px] text-slate-700 leading-relaxed m-0">
                {isHi
                  ? 'Statistics, Python/SQL aur Business Knowledge mila kar Data Scientist clean data se patterns nikaalta hai aur zaroorat padne par future demand forecast karta hai.'
                  : 'Combining Statistics, Python/SQL, and Domain Knowledge, a Data Scientist cleans massive datasets, uncovers hidden trends, and supports reliable decisions.'}
              </p>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white border border-[#C4B5FD] text-[11px] font-bold text-[#6D28D9]">
                  {isHi ? 'Main Use: Evidence-Based Forecasting' : 'Main Use: Evidence-Based Forecasting'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pink "What changed?" 4-Step Micro-Flow Bar (Image-2 signature strip!) */}
        <div className="px-4 py-3 bg-[#FFF1F2] border-t border-[#FECDD3] flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="px-3 py-1 rounded-full bg-[#F43F5E] text-white text-[11px] font-black tracking-wide shrink-0">
            {isHi ? 'Kya Badla?' : 'What changed?'}
          </span>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] font-bold text-[#0F172A]">
            <span className="px-2.5 py-0.5 rounded-lg bg-white border border-[#FDA4AF]">
              {isHi ? '1. Raw Records' : '1. Raw Records'}
            </span>
            <span className="text-[#F43F5E] font-black">→</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-white border border-[#FDA4AF]">
              {isHi ? '2. Clean Data' : '2. Clean Data'}
            </span>
            <span className="text-[#F43F5E] font-black">→</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-white border border-[#FDA4AF]">
              {isHi ? '3. Clear Patterns' : '3. Clear Patterns'}
            </span>
            <span className="text-[#F43F5E] font-black">→</span>
            <span className="px-2.5 py-0.5 rounded-lg bg-white border border-[#FDA4AF]">
              {isHi ? '4. Smart Decisions' : '4. Smart Decisions'}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. FULL VOICE-SYNCED INTERACTIVE VISUAL LEARNING NOTES (100% Preserved!)
          ===================================================================== */}
      <StructuredVisualNotesSheet
        spec={spec}
        lang={lang}
        activeSectionId={activeSectionId}
        speechProgress={speechProgress}
        liveTypedText={liveTypedText}
        isMentorSpeaking={isMentorSpeaking}
        onSectionRectChange={onSectionRectChange}
        onScrollSettled={onScrollSettled}
      />

      {/* =====================================================================
          4. IMAGE-2 STYLE DARK NAVY "REMEMBER THE DIFFERENCE" FOOTER BAR
          ===================================================================== */}
      <div className="rounded-2xl bg-[#0F172A] text-white px-5 py-4 border border-[#1E293B] shadow-xs space-y-1.5">
        <div className="text-[11px] font-black tracking-[0.14em] uppercase text-pink-400">
          {isHi ? 'HAMESHA YAAD RAKHEIN' : 'REMEMBER THE DIFFERENCE'}
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-[13px] font-bold text-slate-100">
          <span>
            “If days &lt; 5” <span className="text-sky-400">→</span> Rule-Based Logic
          </span>
          <span className="text-slate-600">|</span>
          <span>
            “Learns from 10,000 rows” <span className="text-emerald-400">→</span> Machine Learning
          </span>
          <span className="text-slate-600">|</span>
          <span>
            “Clean + Analyze + Decide” <span className="text-pink-400">→</span> Data Science
          </span>
        </div>
      </div>
    </div>
  );
};
