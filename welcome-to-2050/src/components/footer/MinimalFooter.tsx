import React from 'react';

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
    const msg = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
    window.open(`https://wa.me/917632099528?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      className={`relative w-full bg-[#020b18] border-t border-[#00d2ff]/40 text-white overflow-hidden select-none font-sans shadow-[0_-2px_16px_rgba(6,182,212,0.12)] ${className}`}
      style={{
        backgroundImage: "url('/images/footer/minimal_footer_bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle Electric Cyan Accent Line on Top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent pointer-events-none opacity-80" />

      {/* Main Single Horizontal Section (Desktop: 100-130px, Mobile: compact stack with pb-20 clearance) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 pb-20 md:pb-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          
          {/* ══════════ LEFT: LOGO & TAGLINE ══════════ */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 text-center sm:text-left">
            <img
              src="/images/brand/future_it_logo_dark.png"
              alt="FUTURE IT INDUSTRY"
              className="h-8 sm:h-9 w-auto object-contain cursor-pointer transition-opacity hover:opacity-90"
              onClick={() => handleNav('#dashboard')}
            />
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="text-xs sm:text-[13px] font-bold text-slate-200 tracking-wide">
              Learn Today, Earn Tomorrow.
            </span>
          </div>

          {/* Desktop Vertical Divider 1 */}
          <div className="hidden lg:block h-9 w-[1px] bg-slate-700/60 mx-5 shrink-0" />

          {/* ══════════ CENTER: 8 ESSENTIAL HORIZONTAL LINKS ══════════ */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs sm:text-[13px] font-medium text-slate-300">
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

          {/* Desktop Vertical Divider 2 */}
          <div className="hidden lg:block h-9 w-[1px] bg-slate-700/60 mx-5 shrink-0" />

          {/* ══════════ RIGHT: COPYRIGHT & EMPOWERING SLOGAN ══════════ */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right shrink-0 space-y-0.5">
            <p className="text-xs sm:text-[12.5px] font-bold text-white">
              &copy; 2026 Future IT Industry.
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-normal">
              Empowering learners to learn, practice, and get placed.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
