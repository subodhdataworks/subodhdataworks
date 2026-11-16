import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';

interface DsaSubscriptionBannerProps {
  isSubscribed?: boolean;
  onUnlock?: () => void;
  className?: string;
}

// Crisp, high-resolution golden crown vector matching reference
const GoldenCrownIcon = () => (
  <svg viewBox="0 0 36 32" className="w-7 h-6 drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crown-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="25%" stopColor="#fde047" />
        <stop offset="60%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <radialGradient id="gem-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f59e0b" />
      </radialGradient>
    </defs>
    {/* Crown Base and Peaks */}
    <path
      d="M3 26.5C3 25.4 3.9 24.5 5 24.5H31C32.1 24.5 33 25.4 33 26.5C33 27.6 32.1 28.5 31 28.5H5C3.9 28.5 3 27.6 3 26.5Z"
      fill="url(#crown-gold-grad)"
    />
    <path
      d="M4 23L7.5 10L13.5 17.5L18 5L22.5 17.5L28.5 10L32 23H4Z"
      fill="url(#crown-gold-grad)"
    />
    {/* Jewels on Peaks */}
    <circle cx="7.5" cy="9" r="2" fill="url(#gem-glow)" />
    <circle cx="18" cy="4.5" r="2.5" fill="#ffffff" />
    <circle cx="28.5" cy="9" r="2" fill="url(#gem-glow)" />
    {/* Center Red/Ruby Accent */}
    <ellipse cx="18" cy="18" rx="2" ry="3" fill="#dc2626" opacity="0.85" />
    <circle cx="10" cy="20" r="1.5" fill="#38bdf8" opacity="0.85" />
    <circle cx="26" cy="20" r="1.5" fill="#38bdf8" opacity="0.85" />
  </svg>
);

export const DsaSubscriptionBanner: React.FC<DsaSubscriptionBannerProps> = ({
  isSubscribed = false,
  onUnlock,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playClick();
    if (onUnlock) {
      onUnlock();
    } else {
      const el = document.getElementById('practice-courses') || document.getElementById('mobile-practice-courses');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`relative w-full rounded-[22px] overflow-hidden border border-purple-400/35 transition-all duration-300 hover:border-purple-300/50 shadow-[0_10px_36px_-6px_rgba(59,7,100,0.45),inset_0_1px_1px_rgba(255,255,255,0.2)] ${className}`}
      style={{
        background: 'linear-gradient(90deg, #18063a 0%, #290858 18%, #380766 42%, #4d0354 75%, #30064f 100%)',
      }}
    >
      {/* Background Soft Glow Accents & Sparkles */}
      <div className="absolute -top-10 left-12 w-48 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 right-40 w-56 h-32 bg-fuchsia-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-72 -translate-y-1/2 text-amber-300/60 text-xs select-none pointer-events-none hidden xl:block animate-pulse">
        ✦
      </div>
      <div className="absolute top-2.5 left-1/3 text-purple-300/40 text-[10px] select-none pointer-events-none hidden lg:block">
        ✦
      </div>

      {/* Main Container */}
      <div className="relative z-10 px-4 py-3.5 sm:px-6 sm:py-3.5 lg:px-7 lg:py-3 flex flex-col lg:flex-row items-center justify-between gap-3.5 lg:gap-4">
        {/* Left: Crown + Title & Subtitle */}
        <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
          {/* Glowing Crown Circle */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-800/80 via-purple-950 to-indigo-950 border border-purple-400/40 shadow-[0_0_18px_rgba(168,85,247,0.35)] flex items-center justify-center shrink-0">
            <GoldenCrownIcon />
          </div>

          {/* Heading & Subtitle */}
          <div className="text-left min-w-0 flex-1">
            <h2 className="text-white font-extrabold text-[15px] sm:text-base lg:text-[18px] tracking-tight leading-snug">
              Complete <span className="text-[#facc15] font-black drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">DSA</span> Learning Path
            </h2>
            <p className="text-purple-200/85 text-[11px] sm:text-xs font-medium tracking-tight mt-0.5 whitespace-normal sm:whitespace-nowrap">
              14 Topics • 450+ Problems • Visual Explanations • Coding Games
            </p>
          </div>
        </div>

        {/* Middle: Divider + 4 Compact Benefit Items */}
        <div className="flex items-center justify-start sm:justify-center lg:justify-start gap-2.5 sm:gap-4 lg:gap-5 w-full lg:w-auto flex-wrap sm:flex-nowrap">
          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block h-8 w-[1px] bg-white/20 shrink-0" />

          {/* Benefit 1 */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <Check className="w-3 h-3 text-[#2e0854] stroke-[3.5]" />
            </span>
            <div className="text-left text-white text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-bold leading-tight">
              <div>Learn 14</div>
              <div className="text-purple-200/90 font-medium text-[9.5px] sm:text-[10px]">Essential Topics</div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <Check className="w-3 h-3 text-[#2e0854] stroke-[3.5]" />
            </span>
            <div className="text-left text-white text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-bold leading-tight">
              <div>Practice</div>
              <div className="text-purple-200/90 font-medium text-[9.5px] sm:text-[10px]">450+ Problems</div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <Check className="w-3 h-3 text-[#2e0854] stroke-[3.5]" />
            </span>
            <div className="text-left text-white text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-bold leading-tight">
              <div>Build Strong</div>
              <div className="text-purple-200/90 font-medium text-[9.5px] sm:text-[10px]">Logic</div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <Check className="w-3 h-3 text-[#2e0854] stroke-[3.5]" />
            </span>
            <div className="text-left text-white text-[10.5px] sm:text-[11px] lg:text-[11.5px] font-bold leading-tight">
              <div>Get</div>
              <div className="text-purple-200/90 font-medium text-[9.5px] sm:text-[10px]">Job Ready</div>
            </div>
          </div>
        </div>

        {/* Right: Golden CTA Button */}
        <div className="w-full sm:w-auto shrink-0 flex items-center justify-end">
          <button
            type="button"
            onClick={handleClick}
            className="group w-full sm:w-auto flex items-center justify-between sm:justify-center gap-3 px-5 py-2 sm:px-6 sm:py-2 rounded-full bg-gradient-to-r from-[#fef08a] via-[#facc15] to-[#eab308] hover:from-[#fff9c2] hover:to-[#f59e0b] text-slate-950 shadow-[0_4px_22px_rgba(250,204,21,0.45)] hover:shadow-[0_6px_28px_rgba(250,204,21,0.6)] active:scale-97 transition-all duration-200 cursor-pointer"
          >
            {isSubscribed ? (
              <div className="text-left">
                <span className="block text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-slate-800 leading-none">
                  Full Access Active
                </span>
                <span className="block text-xs sm:text-sm font-black text-slate-950 mt-0.5">
                  Start Learning Now
                </span>
              </div>
            ) : (
              <div className="text-left">
                <span className="block text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-tight text-slate-900 leading-none">
                  Unlock Full DSA
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[11px] font-bold text-slate-800">Just</span>
                  <span className="text-sm sm:text-base font-black text-slate-950 tracking-tight">₹1,199</span>
                </div>
              </div>
            )}

            {/* Circular Arrow Icon */}
            <div className="w-6 h-6 rounded-full bg-slate-950/15 group-hover:bg-slate-950/25 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
