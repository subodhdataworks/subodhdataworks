import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface MinimalFooterProps {
  className?: string;
}

export const MinimalFooter: React.FC<MinimalFooterProps> = ({ className = '' }) => {
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
    <footer
      className={`relative w-full bg-[#040816] border-t border-slate-800/80 text-white overflow-hidden select-none font-sans ${className}`}
    >
      {/* ─── PURE MODERN VECTOR ACCENTS (NO BACKGROUND IMAGES) ─── */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent pointer-events-none opacity-85" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-16 bg-cyan-500/5 blur-2xl pointer-events-none" />

      {/* ─── COMPACT LUXURY SINGLE-ROW DESKTOP / CLEAN MOBILE WRAPPER ─── */}
      {/* Note: pb-24 on mobile ensures mobile dashboard bottom navigation never covers content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 pb-24 lg:pb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 lg:gap-4">
          
          {/* ══════════ LEFT: LOGO & BRAND SLOGAN ══════════ */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0 text-center sm:text-left">
            <img
              src="/images/brand/future_it_logo_dark.png"
              alt="Future IT Industry"
              className="h-7 sm:h-8 w-auto object-contain cursor-pointer transition-opacity hover:opacity-90"
              onClick={() => handleNav('#dashboard')}
            />
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="text-[11.5px] sm:text-xs font-semibold text-slate-300 tracking-wide">
              Learn Today,{' '}
              <span className="text-cyan-400 font-bold">Earn Tomorrow.</span>
            </span>
          </div>

          {/* Desktop Divider 1 */}
          <div className="hidden lg:block h-6 w-[1px] bg-slate-800 shrink-0" />

          {/* ══════════ CENTER: 8 ESSENTIAL STREAMLINED LINKS ══════════ */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-[11.5px] sm:text-xs font-medium text-slate-300">
            <button
              type="button"
              onClick={() => handleNav('#about-us')}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => handleNav('#courses')}
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
          <div className="hidden lg:block h-6 w-[1px] bg-slate-800 shrink-0" />

          {/* ══════════ RIGHT: COPYRIGHT & LIVE SECURE STATUS ══════════ */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end text-center lg:text-right shrink-0 gap-1 sm:gap-2 lg:gap-0.5">
            <p className="text-[11px] sm:text-[11.5px] font-semibold text-slate-300">
              &copy; 2026 Future IT Industry. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Platform Active &amp; Verified</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
