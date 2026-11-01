import React from 'react';

export interface MinimalFooterProps {
  className?: string;
  onOpenAuthModal?: () => void;
}

export const MinimalFooter: React.FC<MinimalFooterProps> = ({ className = '', onOpenAuthModal }) => {
  const handleNav = (hash: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHelpCenter = () => {
    const msg = 'Hello Future IT Industry Support Team, I need help regarding my student dashboard or course access. Please assist me.';
    window.open(`https://wa.me/917632099528?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* =========================================================================
          1. MOBILE MINIMAL FOOTER (< md) (EXACT MATCH TO REFERENCE media_1793571609467_e0939037.jpg)
          ========================================================================= */}
      <footer className={`block md:hidden relative w-full bg-white text-slate-800 overflow-hidden select-none font-sans ${className}`}>
        {/* Subtle Ambient Top Border */}
        <div className="w-full h-[1px] bg-slate-100" />

        {/* Content Container (pb-20 ensures mobile bottom dock navigation never overlaps) */}
        <div className="relative z-10 w-full px-4 pt-4 pb-20">
          <div className="flex items-center justify-center gap-3.5 text-left">
            {/* Logo Left */}
            <img
              src="/images/brand/future_it_logo.png"
              alt="Future IT Industry"
              className="h-7 w-auto object-contain cursor-pointer shrink-0"
              onClick={() => handleNav('#dashboard')}
            />
            {/* Vertical Divider */}
            <div className="w-[1px] h-6 bg-slate-300 shrink-0" />
            {/* Copyright Text Right */}
            <div className="flex flex-col text-[11px] leading-tight text-slate-700 font-medium">
              <span className="font-semibold text-slate-800">© 2026 Future IT Industry.</span>
              <span className="text-slate-500 mt-0.5">All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Flowing Curved Bottom Gradient Wave (Blue -> Cyan -> Emerald) */}
        <div className="w-full overflow-hidden leading-none -mt-1 pointer-events-none">
          <svg viewBox="0 0 400 18" className="w-full h-3.5" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="minWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="45%" stopColor="#00D2FF" />
                <stop offset="100%" stopColor="#00E599" />
              </linearGradient>
            </defs>
            <path
              d="M0,14 C110,4 260,16 400,2 L400,18 L0,18 Z"
              fill="url(#minWaveGrad)"
            />
          </svg>
        </div>
      </footer>

      {/* =========================================================================
          2. DESKTOP MINIMAL FOOTER (>= md) (100% UNCHANGED)
          ========================================================================= */}
      <footer
        className={`hidden md:block relative w-full bg-[#040816] border-t border-slate-800/80 text-white overflow-hidden select-none font-sans ${className}`}
      >
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent pointer-events-none opacity-85" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-16 bg-cyan-500/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="flex flex-row items-center justify-between gap-4">
            
            {/* LEFT: LOGO & BRAND SLOGAN */}
            <div className="flex flex-row items-center gap-3 shrink-0 text-left">
              <img
                src="/images/brand/future_it_logo_dark.png"
                alt="Future IT Industry"
                className="h-7 sm:h-8 w-auto object-contain cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => handleNav('#dashboard')}
              />
              <span className="inline-block text-slate-700">|</span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                Learn Today,{' '}
                <span className="text-cyan-400 font-bold">Earn Tomorrow.</span>
              </span>
            </div>

            {/* Desktop Divider 1 */}
            <div className="h-6 w-[1px] bg-slate-800 shrink-0" />

            {/* CENTER: 8 ESSENTIAL STREAMLINED LINKS */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-medium text-slate-300">
              <button
                type="button"
                onClick={() => handleNav('#about-us')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleNav('#dashboard')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                All Courses
              </button>
              <button
                type="button"
                onClick={() => handleNav('#internship')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Internship
              </button>
              <button
                type="button"
                onClick={() => handleNav('#placement')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Placement Prep
              </button>
              <button
                type="button"
                onClick={handleHelpCenter}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Help Center
              </button>
              <button
                type="button"
                onClick={() => handleNav('#privacy-policy')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => handleNav('#terms-and-conditions')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <button
                type="button"
                onClick={() => handleNav('#refund-policy')}
                className="hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Refund Policy
              </button>
            </div>

            {/* Desktop Divider 2 */}
            <div className="h-6 w-[1px] bg-slate-800 shrink-0" />

            {/* RIGHT: COPYRIGHT & LIVE SECURE STATUS */}
            <div className="flex flex-col items-end text-right shrink-0 gap-0.5">
              <p className="text-[11.5px] font-semibold text-slate-300">
                &copy; 2026 Future IT Industry. All rights reserved.
              </p>
              <div className="flex items-center gap-1.5 text-[10.5px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Platform Active &amp; Verified</span>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export const SmallFooter = MinimalFooter;
export default MinimalFooter;
