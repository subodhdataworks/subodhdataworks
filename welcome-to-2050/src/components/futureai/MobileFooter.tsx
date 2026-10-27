import React from 'react';
import { Building2, Headphones, ChevronRight, Leaf } from 'lucide-react';

export const MobileFooter: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHelpCenter = () => {
    const msg = 'Hello Future IT Industry Support Team, I need help regarding my course or student account. Please assist me.';
    window.open(`https://wa.me/917632099528?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      className="relative w-full overflow-hidden text-white select-none"
      style={{
        backgroundImage: "url('/images/future_ai_campus_footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Dark Navy-Blue Gradient Overlay for Perfect Readability ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(3, 18, 46, 0.62) 0%, rgba(2, 12, 32, 0.88) 28%, rgba(2, 9, 24, 0.96) 52%, #010613 100%)',
        }}
      />

      {/* Top Electric Cyan Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-[#00E5FF] to-indigo-500 pointer-events-none" />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full max-w-full px-4 sm:px-6 pt-6 sm:pt-7 pb-6">
        {/* 1. Official Future IT Industry Logo in White Badge (Matching Reference) */}
        <div className="inline-block bg-white rounded-2xl py-2 px-3 sm:py-2.5 sm:px-3.5 shadow-xl border border-white/20">
          <img
            src="/images/brand/future_it_logo.png"
            alt="FUTURE IT INDUSTRIES"
            className="h-7 sm:h-8 w-auto object-contain pointer-events-none"
          />
        </div>

        {/* 2. Headline: Learn Today, Earn Tomorrow. */}
        <div className="mt-4 sm:mt-5 text-left">
          <h2 className="text-2xl sm:text-[27px] font-black text-white tracking-tight leading-tight">
            Learn Today,
            <span className="block text-[#00E5FF] font-black text-2xl sm:text-[27px]">
              Earn Tomorrow.
            </span>
          </h2>
          {/* Cyan Underline Accent */}
          <div className="w-14 h-1.5 bg-[#00E5FF] rounded-full mt-2 mb-6 shadow-[0_0_8px_rgba(0,229,255,0.7)]" />
        </div>

        {/* 3. Company & Support Links (Compact 2-Column Layout) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-6 text-left">
          {/* ── COLUMN 1: COMPANY ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183c75] border border-blue-400/30 flex items-center justify-center text-white shadow-2xs shrink-0">
                <Building2 className="w-3.5 h-3.5 text-cyan-300 stroke-[2.2]" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-white tracking-wide">
                Company
              </h3>
            </div>
            {/* Cyan Underline */}
            <div className="w-7 h-[2px] bg-[#00E5FF] rounded-full mb-2 shadow-[0_0_5px_rgba(0,229,255,0.6)]" />

            {/* Links List */}
            <ul className="text-xs sm:text-[13px] font-semibold text-slate-200">
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => navigate('#about-us')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">About Us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => navigate('#contact-us')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">Contact Us</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => navigate('#privacy-policy')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">Privacy Policy</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('#terms-and-conditions')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">Terms &amp; Conditions</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
            </ul>
          </div>

          {/* ── COLUMN 2: SUPPORT ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183c75] border border-blue-400/30 flex items-center justify-center text-white shadow-2xs shrink-0">
                <Headphones className="w-3.5 h-3.5 text-cyan-300 stroke-[2.2]" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-white tracking-wide">
                Support
              </h3>
            </div>
            {/* Cyan Underline */}
            <div className="w-7 h-[2px] bg-[#00E5FF] rounded-full mb-2 shadow-[0_0_5px_rgba(0,229,255,0.6)]" />

            {/* Links List */}
            <ul className="text-xs sm:text-[13px] font-semibold text-slate-200">
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={handleHelpCenter}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">Help Center</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => navigate('#contact-us')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">FAQs</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
              <li className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => navigate('#refund-policy')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">Refund Policy</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('#contact-us')}
                  className="w-full py-2 flex items-center justify-between text-slate-200 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="truncate pr-1">Career</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Bottom Copyright & Powered by Bar (Exact Reference Match) */}
        <div className="border-t border-white/15 pt-4 mt-6">
          <div className="flex items-center justify-between gap-2.5 sm:gap-3 text-left">
            {/* Left Side: Copyright */}
            <div className="min-w-0 flex-1">
              <p className="text-[11.5px] sm:text-xs font-bold text-slate-200 leading-tight">
                © 2026 Future IT Industry.
              </p>
              <p className="text-[10px] sm:text-[10.5px] text-slate-400 font-medium leading-tight mt-0.5">
                All rights reserved.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="w-px h-8 bg-white/20 shrink-0" />

            {/* Right Side: Powered by Power Green Industry */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 fill-emerald-500 shrink-0 drop-shadow-[0_2px_8px_rgba(16,185,129,0.4)]" />
              <div className="text-left leading-tight">
                <span className="block text-[9.5px] sm:text-[10px] text-slate-400 font-medium leading-none">
                  Powered by
                </span>
                <span className="block text-[11px] sm:text-xs font-black text-white tracking-tight mt-0.5 leading-tight">
                  Power Green Industry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
