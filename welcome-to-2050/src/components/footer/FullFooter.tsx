import React from 'react';

export interface FullFooterProps {
  onOpenAuthModal?: () => void;
  className?: string;
}

export const FullFooter: React.FC<FullFooterProps> = ({ onOpenAuthModal, className = '' }) => {
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
      className={`relative w-full border-t border-slate-700/60 overflow-hidden text-white select-none font-sans ${className}`}
      style={{
        backgroundImage: "url('/images/future_ai_campus_footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ─── DARK NAVY TRANSPARENT OVERLAY (Graduated to let building on right shine through) ─── */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#030c1c]/95 via-[#041226]/80 to-[#041226]/40"
      />

      {/* ─── TOP ELECTRIC-BLUE SUBTLE ACCENT LINE ─── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-[#00D2FF] to-indigo-500 pointer-events-none" />

      {/* ─── MAIN FOOTER CONTENT WRAPPER ─── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-5">
        
        {/* ═══════════════════════════════════════════════════════════════════
            DIRECTORY GRID: BRAND + QUICK LINKS + COMPANY + SUPPORT
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-7 lg:gap-8 items-start pb-7">
          
          {/* 1. BRAND (LEFT) */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 flex flex-col items-start text-left">
            <img
              src="/images/brand/future_it_logo_dark.png"
              alt="FUTURE IT INDUSTRIES"
              className="h-8 sm:h-9 w-auto object-contain cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => handleNav('#home')}
            />
            <p className="text-[13.5px] sm:text-[14px] text-slate-200 font-medium mt-3 leading-relaxed tracking-wide">
              India&apos;s #1 AI &amp; Data Science Career Accelerator.
              <br />
              <span className="text-white font-semibold">Learn Today, Earn Tomorrow.</span>
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <div className="w-8 h-[2.5px] bg-[#00D2FF] rounded-full mt-1.5 mb-3" />
            <ul className="space-y-2 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#courses')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#game')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  DSA Coding Practice
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#ats')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  ATS Resume Checker
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#internship')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Internship
                </button>
              </li>
            </ul>
          </div>

          {/* 3. COMPANY */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
              Company
            </h4>
            <div className="w-8 h-[2.5px] bg-[#00D2FF] rounded-full mt-1.5 mb-3" />
            <ul className="space-y-2 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#about-us')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#contact-us')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#privacy-policy')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#terms-and-conditions')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* 4. SUPPORT */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
              Support
            </h4>
            <div className="w-8 h-[2.5px] bg-[#00D2FF] rounded-full mt-1.5 mb-3" />
            <ul className="space-y-2 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
              <li>
                <button
                  type="button"
                  onClick={handleHelpCenter}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#contact-us')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#refund-policy')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#placement')}
                  className="hover:text-[#00D2FF] transition-colors cursor-pointer text-left"
                >
                  Career
                </button>
              </li>
            </ul>
          </div>

          {/* 5. RIGHT SPACER (Col 11-12) — keeps the building & monolith visible */}
          <div className="hidden lg:block lg:col-span-2 pointer-events-none" />

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BOTTOM BAR (COPYRIGHT & SLOGAN)
            Note: pb-20 on mobile ensures bottom nav never hides text
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="border-t border-slate-700/60 pt-4 pb-20 md:pb-1 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-xs sm:text-[13px] text-slate-300">
          <p className="font-normal text-slate-300">
            &copy; 2026 Future IT Industry. All rights reserved.
          </p>
          <p className="font-normal text-slate-300">
            Empowering learners across India to learn, practice, and get placed.
          </p>
        </div>

      </div>
    </footer>
  );
};
