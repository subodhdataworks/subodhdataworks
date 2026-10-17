import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
  Infinity as InfinityIcon,
  Award,
  Loader2,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';

// ============================================================================
// SINGLE CONFIGURATION OBJECT FOR COURSE & PRICING
// ============================================================================
export interface SkillItemConfig {
  id: string;
  label: string;
  twoLine?: [string, string];
  borderGlow: string;
  bgGlow: string;
  targetHash?: string;
}

export const COURSE_BANNER_CONFIG = {
  courseId: 'data-analytics-genai',
  courseTitle: "Future IT Industry's Data Analytics with GenAI Course",
  badgeText: 'CAREER SKILL ACCELERATOR • MOST POPULAR',
  headlineLine1: 'Want to learn and',
  headlineGradient: 'build these skills?',
  subtitlePrefix: 'Join ',
  subtitleHighlight: "Future IT Industry's",
  subtitleSuffix: ' Data Analytics with GenAI Course',
  dealBadge: 'LIMITED TIME DEAL',
  originalPrice: '₹18,999',
  currentPrice: '₹999',
  priceNumeric: 999,
  priceSuffix: 'ONLY',
  ctaText: 'Enroll Now for ₹999',
  loadingText: 'Opening enrollment…',
  taglinePart1: 'Learn Today.',
  taglinePart2: 'Earn',
  taglinePart3: 'Tomorrow.',
  benefits: [
    { id: 'lifetime', label: 'Lifetime', subLabel: 'Access', icon: 'infinity' as const },
    { id: 'certificate', label: 'Certificate', subLabel: '', icon: 'certificate' as const },
  ],
  skills: [
    {
      id: 'python',
      label: 'Python',
      borderGlow: 'border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.18)]',
      bgGlow: 'from-cyan-950/70 via-slate-900/85 to-blue-950/70',
      targetHash: '#dashboard',
    },
    {
      id: 'sql',
      label: 'SQL',
      borderGlow: 'border-purple-400/50 hover:border-purple-300 shadow-[0_0_16px_rgba(192,132,252,0.18)]',
      bgGlow: 'from-purple-950/70 via-slate-900/85 to-indigo-950/70',
      targetHash: '#dashboard',
    },
    {
      id: 'excel',
      label: 'Excel',
      borderGlow: 'border-emerald-400/50 hover:border-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.18)]',
      bgGlow: 'from-emerald-950/70 via-slate-900/85 to-teal-950/70',
      targetHash: '#dashboard',
    },
    {
      id: 'powerbi',
      label: 'Power BI',
      borderGlow: 'border-amber-400/50 hover:border-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.18)]',
      bgGlow: 'from-amber-950/70 via-slate-900/85 to-yellow-950/70',
      targetHash: '#dashboard',
    },
    {
      id: 'projects',
      label: 'Projects & Interview Prep',
      twoLine: ['Projects &', 'Interview Prep'],
      borderGlow: 'border-indigo-400/50 hover:border-indigo-300 shadow-[0_0_16px_rgba(129,140,248,0.18)]',
      bgGlow: 'from-indigo-950/70 via-slate-900/85 to-purple-950/70',
      targetHash: '#dashboard',
    },
  ] as SkillItemConfig[],
};

// ============================================================================
// CUSTOM 3D-STYLE SVG ICONS FOR SKILL CARDS
// ============================================================================
const SkillIconSvg: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'python':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 shrink-0 drop-shadow-[0_2px_6px_rgba(59,130,246,0.5)]" aria-hidden="true">
          <defs>
            <linearGradient id="pyBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="pyYellow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path
            d="M17.8 4C11.6 4 12 6.7 12 6.7V9.5h6v1H9.5S5 10 5 16.2c0 6.2 3.9 6 3.9 6h2.3v-3s-.1-3.9 3.8-3.9h6.5s3.6.1 3.6-3.5V6.6S25.6 4 17.8 4zm-3.2 2.4a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            fill="url(#pyBlue)"
          />
          <path
            d="M18.2 32c6.2 0 5.8-2.7 5.8-2.7v-2.8h-6v-1h8.5S31 26 31 19.8c0-6.2-3.9-6-3.9-6h-2.3v3s.1 3.9-3.8 3.9h-6.5s-3.6-.1-3.6 3.5v5.2S10.4 32 18.2 32zm3.2-2.4a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"
            fill="url(#pyYellow)"
          />
        </svg>
      );
    case 'sql':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 shrink-0 drop-shadow-[0_2px_6px_rgba(168,85,247,0.5)]" aria-hidden="true">
          <defs>
            <linearGradient id="sqlGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <ellipse cx="18" cy="9" rx="10" ry="4.2" fill="#f0abfc" />
          <path d="M8 9v6c0 2.3 4.5 4.2 10 4.2s10-1.9 10-4.2V9c0 2.3-4.5 4.2-10 4.2S8 11.3 8 9z" fill="url(#sqlGrad)" />
          <path d="M8 16.5v6c0 2.3 4.5 4.2 10 4.2s10-1.9 10-4.2v-6c0 2.3-4.5 4.2-10 4.2s-10-1.9-10-4.2z" fill="url(#sqlGrad)" opacity="0.9" />
          <path d="M8 24v4c0 2.3 4.5 4.2 10 4.2s10-1.9 10-4.2v-4c0 2.3-4.5 4.2-10 4.2S8 26.3 8 24z" fill="#7e22ce" />
        </svg>
      );
    case 'excel':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 shrink-0 drop-shadow-[0_2px_6px_rgba(16,185,129,0.5)]" aria-hidden="true">
          <rect x="6" y="6" width="24" height="24" rx="5" fill="#10b981" />
          <rect x="15" y="8" width="13" height="20" rx="2" fill="#34d399" opacity="0.35" />
          <rect x="4" y="10" width="14" height="16" rx="3" fill="#047857" />
          <path d="M8.2 14l2.8 4-2.8 4h2.2l1.7-2.6 1.7 2.6h2.2l-2.8-4 2.8-4h-2.2l-1.7 2.5-1.7-2.5H8.2z" fill="#ffffff" />
        </svg>
      );
    case 'powerbi':
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 shrink-0 drop-shadow-[0_2px_6px_rgba(245,158,11,0.5)]" aria-hidden="true">
          <rect x="7" y="19" width="5.5" height="11" rx="2" fill="#fcd34d" />
          <rect x="15.2" y="13" width="5.5" height="17" rx="2" fill="#f59e0b" />
          <rect x="23.5" y="7" width="5.5" height="23" rx="2" fill="#d97706" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 36 36" className="w-6 h-6 shrink-0 drop-shadow-[0_2px_6px_rgba(129,140,248,0.6)]" aria-hidden="true">
          <defs>
            <linearGradient id="gearGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <circle cx="18" cy="18" r="9.5" fill="url(#gearGrad)" />
          <circle cx="18" cy="18" r="4.2" fill="#0f172a" />
          <g fill="#c084fc">
            <rect x="16" y="4" width="4" height="5" rx="1.2" />
            <rect x="16" y="27" width="4" height="5" rx="1.2" />
            <rect x="4" y="16" width="5" height="4" rx="1.2" />
            <rect x="27" y="16" width="5" height="4" rx="1.2" />
            <rect x="7.5" y="7.5" width="4.5" height="4" rx="1.2" transform="rotate(-45 9.75 9.5)" />
            <rect x="24" y="24" width="4.5" height="4" rx="1.2" transform="rotate(-45 26.25 26)" />
            <rect x="24" y="7.5" width="4.5" height="4" rx="1.2" transform="rotate(45 26.25 9.5)" />
            <rect x="7.5" y="24" width="4.5" height="4" rx="1.2" transform="rotate(45 9.75 26)" />
          </g>
        </svg>
      );
  }
};

// ============================================================================
// 1. SKILL CARD COMPONENT
// ============================================================================
export interface SkillCardProps {
  skill: SkillItemConfig;
  index: number;
  onSkillClick?: (skill: SkillItemConfig) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index, onSkillClick }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.12 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.03 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      onClick={() => onSkillClick?.(skill)}
      className={`group/skill relative flex items-center gap-2 px-2.5 sm:px-3 h-[42px] rounded-xl bg-gradient-to-br ${skill.bgGlow} backdrop-blur-md border ${skill.borderGlow} transition-colors duration-200 cursor-pointer text-left shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
    >
      {/* Subtle top inner highlight */}
      <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      <SkillIconSvg id={skill.id} />
      {skill.twoLine ? (
        <span className="text-[10px] sm:text-[11px] font-extrabold text-white leading-[1.12] tracking-tight whitespace-nowrap">
          <span className="block whitespace-nowrap">{skill.twoLine[0]}</span>
          <span className="block text-slate-200 whitespace-nowrap">{skill.twoLine[1]}</span>
        </span>
      ) : (
        <span className="text-xs sm:text-[13px] font-extrabold text-white tracking-tight whitespace-nowrap">
          {skill.label}
        </span>
      )}
    </motion.button>
  );
};

// ============================================================================
// 2. STUDENT ILLUSTRATION COMPONENT (Center Animated AI Robot & Skills Video)
// ============================================================================
export const StudentIllustration: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-[300px] sm:w-[355px] lg:w-[385px] h-[225px] sm:h-[255px] lg:h-[275px] mx-auto select-none flex items-center justify-center lg:translate-x-2">
      {/* Ambient Radial Cyan & Blue Backlight behind Video */}
      <div
        className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-500/40 via-cyan-400/30 to-indigo-500/35 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Animated Energy Halo Ring */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.55, 0.9, 0.55],
                scale: [0.98, 1.02, 0.98],
              }
        }
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-4 inset-y-2 rounded-full border border-cyan-300/30 shadow-[0_0_30px_rgba(56,189,248,0.25)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Center Fitted Video (Future IT AI Robot + Floating Python, SQL, Excel, Power BI, GenAI, Statistics) */}
      <div
        className="relative z-10 w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 49% 49% at 50% 52%, #000 76%, rgba(0,0,0,0.55) 90%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 49% 49% at 50% 52%, #000 76%, rgba(0,0,0,0.55) 90%, transparent 100%)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/ats/course_bottom_poster.jpg"
          className="w-full h-full object-contain object-center scale-[1.12] pointer-events-none select-none"
        >
          <source src="/videos/course_bottom_banner.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

// ============================================================================
// 3. ENROLL BUTTON COMPONENT (Functional Interactive CTA with Loading & Retry)
// ============================================================================
export interface EnrollButtonProps {
  onEnroll?: (payload: { courseId: string; amount: number }) => Promise<void> | void;
}

export const EnrollButton: React.FC<EnrollButtonProps> = ({ onEnroll }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const shouldReduceMotion = useReducedMotion();

  const handleClick = async () => {
    if (status === 'loading') return; // Prevent duplicate clicks
    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 320));
      if (onEnroll) {
        await onEnroll({
          courseId: COURSE_BANNER_CONFIG.courseId,
          amount: COURSE_BANNER_CONFIG.priceNumeric,
        });
      } else {
        window.location.hash = '#dashboard';
      }
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full space-y-1.5">
      <motion.button
        type="button"
        onClick={handleClick}
        disabled={status === 'loading'}
        whileHover={shouldReduceMotion || status === 'loading' ? {} : { y: -2.5, scale: 1.015 }}
        whileTap={shouldReduceMotion || status === 'loading' ? {} : { scale: 0.975 }}
        aria-label={`${COURSE_BANNER_CONFIG.ctaText} - ${COURSE_BANNER_CONFIG.courseTitle}`}
        className="group/cta relative w-full min-h-[48px] py-3 px-5 rounded-xl font-black text-sm sm:text-[15px] text-slate-950 bg-gradient-to-r from-[#34f5a6] via-[#3df0c8] to-[#5ce1ff] hover:from-[#47f8b0] hover:via-[#52f4d0] hover:to-[#73e6ff] shadow-[0_0_28px_rgba(61,240,200,0.45),0_4px_14px_rgba(0,0,0,0.3)] hover:shadow-[0_0_38px_rgba(92,225,255,0.7),0_6px_20px_rgba(0,0,0,0.35)] transition-shadow duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80 disabled:cursor-wait overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
      >
        {/* Continuous Light Sweep Animation */}
        {!shouldReduceMotion && (
          <motion.span
            aria-hidden="true"
            animate={{ x: ['-160%', '220%'] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/55 to-transparent -skew-x-12 pointer-events-none"
          />
        )}

        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-slate-950 shrink-0" />
            <span>{COURSE_BANNER_CONFIG.loadingText}</span>
          </>
        ) : (
          <>
            <Rocket className="w-4 h-4 stroke-[2.5] text-slate-950 shrink-0 -rotate-12 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
            <span className="tracking-tight">{COURSE_BANNER_CONFIG.ctaText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.8] text-slate-950 shrink-0 group-hover/cta:translate-x-1 transition-transform" />
          </>
        )}
      </motion.button>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500/50 text-[11px] text-rose-200"
        >
          <span className="flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            Unable to open enrollment.
          </span>
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center gap-1 font-bold text-cyan-300 hover:text-cyan-200 underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 4. PRICING CARD COMPONENT (Right Glassmorphism Panel)
// ============================================================================
export interface PricingCardProps {
  onEnroll?: (payload: { courseId: string; amount: number }) => Promise<void> | void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ onEnroll }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[330px] mx-auto lg:mx-0 rounded-2xl bg-gradient-to-b from-[#111c3d]/90 via-[#0d1530]/92 to-[#121132]/95 backdrop-blur-xl border border-cyan-400/35 shadow-[0_12px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(56,189,248,0.12)_inset] p-4 sm:p-5 flex flex-col items-center text-center"
    >
      {/* Top & Corner Neon Border Accents */}
      <div
        className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ⚡ LIMITED TIME DEAL Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#3b1d2e] via-[#4a1d33] to-[#3b1d2e] border border-rose-400/40 shadow-[0_0_15px_rgba(244,63,94,0.2)] mb-2">
        <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
        <span className="text-[11px] font-extrabold tracking-wider text-rose-100 uppercase">
          {COURSE_BANNER_CONFIG.dealBadge}
        </span>
      </div>

      {/* Pricing Row: ₹18,999 (strikethrough) + ₹999 (glowing) + ONLY */}
      <div className="flex items-baseline justify-center gap-2.5 my-1">
        {/* Original Price ₹18,999 with clear strikethrough */}
        <span className="relative text-base sm:text-lg font-bold text-slate-300/85 select-none">
          {COURSE_BANNER_CONFIG.originalPrice}
          <span
            aria-hidden="true"
            className="absolute left-[-4%] right-[-4%] top-1/2 h-[2px] bg-rose-500 -rotate-6 shadow-[0_0_6px_rgba(244,63,94,0.8)]"
          />
        </span>

        {/* Current Enrollment Price ₹999 */}
        <motion.span
          animate={
            shouldReduceMotion
              ? {}
              : {
                  textShadow: [
                    '0 0 18px rgba(103,232,249,0.55), 0 0 32px rgba(56,189,248,0.25)',
                    '0 0 26px rgba(103,232,249,0.85), 0 0 44px rgba(56,189,248,0.45)',
                    '0 0 18px rgba(103,232,249,0.55), 0 0 32px rgba(56,189,248,0.25)',
                  ],
                }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-4xl sm:text-[44px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-300 leading-none"
        >
          {COURSE_BANNER_CONFIG.currentPrice}
        </motion.span>

        <span className="text-xs font-extrabold text-white tracking-wider uppercase">
          {COURSE_BANNER_CONFIG.priceSuffix}
        </span>
      </div>

      {/* Primary Interactive CTA Button */}
      <div className="w-full mt-2">
        <EnrollButton onEnroll={onEnroll} />
      </div>

      {/* Tagline: ✨ Learn Today. Earn Tomorrow. */}
      <div className="flex items-center justify-center gap-1.5 mt-2.5 mb-3 text-xs font-extrabold tracking-tight">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
        <span className="text-cyan-300">{COURSE_BANNER_CONFIG.taglinePart1}</span>
        <span className="text-cyan-100">{COURSE_BANNER_CONFIG.taglinePart2}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
          {COURSE_BANNER_CONFIG.taglinePart3}
        </span>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-2.5" />

      {/* Two Benefit Items ONLY: Lifetime Access & Certificate */}
      <div className="w-full grid grid-cols-2 items-center pt-0.5">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          className="flex items-center justify-center gap-2 pr-2 border-r border-white/15"
        >
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
            <InfinityIcon className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="text-left leading-tight">
            <span className="text-[11px] font-bold text-white block">Lifetime</span>
            <span className="text-[11px] font-bold text-slate-300 block">Access</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          className="flex items-center justify-center gap-2 pl-2"
        >
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
            <Award className="w-4 h-4 stroke-[2.3]" />
          </div>
          <span className="text-xs font-bold text-white">Certificate</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ============================================================================
// 5. MAIN COURSE HERO BANNER COMPONENT
// ============================================================================
export interface CourseHeroBannerProps {
  onEnrollNow?: () => void;
}

export const CourseHeroBanner: React.FC<CourseHeroBannerProps> = ({ onEnrollNow }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleEnrollAction = () => {
    if (onEnrollNow) {
      onEnrollNow();
    } else {
      window.location.hash = '#dashboard';
    }
  };

  const handleSkillClick = (skill: SkillItemConfig) => {
    if (onEnrollNow) {
      onEnrollNow();
    } else if (skill.targetHash) {
      window.location.hash = skill.targetHash;
    }
  };

  return (
    <section
      aria-label="Future IT Industry Data Analytics with GenAI Course Offer"
      className="relative w-full py-2 sm:py-3"
    >
      {/* Decorative Floating 3D Spheres Outside/Around Banner Edges (Desktop) */}
      <div className="hidden md:block pointer-events-none" aria-hidden="true">
        {/* Top-left purple orb */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-2 left-10 w-7 h-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#e879f9,#6b21a8_70%,#1e1b4b)] shadow-[0_6px_16px_rgba(168,85,247,0.45)] z-20"
        />
        {/* Top-center-left cyan orb */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="absolute -top-1 left-[31%] w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#a5f3fc,#0284c7_70%,#0f172a)] shadow-[0_6px_18px_rgba(6,182,212,0.45)] z-20"
        />
        {/* Bottom-left blue orb */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute -bottom-2 left-20 w-9 h-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#1d4ed8_70%,#0f172a)] shadow-[0_8px_20px_rgba(37,99,235,0.45)] z-20"
        />
        {/* Top-right purple orb */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute -top-2 right-6 w-9 h-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,#d8b4fe,#7e22ce_70%,#1e1b4b)] shadow-[0_8px_20px_rgba(147,51,234,0.45)] z-20"
        />
        {/* Bottom-right blue orb */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute -bottom-1 right-28 w-6 h-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,#67e8f9,#2563eb_75%,#0f172a)] shadow-[0_6px_14px_rgba(37,99,235,0.45)] z-20"
        />
      </div>

      {/* Main Panoramic Banner Card with Uploaded Blue Wave & Spheres Background */}
      <div className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] bg-[#0b3884] border border-cyan-300/50 shadow-[0_20px_55px_rgba(6,40,120,0.28),0_0_1px_1px_rgba(255,255,255,0.35)_inset] px-5 py-6 sm:px-7 sm:py-6 lg:px-8 lg:py-5">
        {/* Uploaded Blue Wave & 3D Spheres Background Image */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <source srcSet="/images/ats/course_banner_wave_bg.webp" type="image/webp" />
          <img
            src="/images/ats/course_banner_wave_bg.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </picture>

        {/* Subtle Left Contrast Scrim so Headline & Subtitle pop cleanly over the bright blue waves */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#05163b]/65 via-[#072052]/30 to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Glowing Top & Bottom Neon Edge Highlights */}
        <div
          className="absolute top-0 inset-x-10 h-[2px] bg-gradient-to-r from-white/40 via-cyan-200/90 to-purple-300/60 pointer-events-none z-[2]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 inset-x-10 h-[2px] bg-gradient-to-r from-cyan-300/60 via-white/70 to-purple-400/50 pointer-events-none z-[2]"
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────────────
            DESKTOP & TABLET LAYOUT (lg: 3-column panoramic arrangement)
            MOBILE LAYOUT:
            1. Headline & Subtitle
            2. Student Illustration
            3. Pricing Card & CTA
            4. Skills Row
            ───────────────────────────────────────────────────────────── */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-2">
          
          {/* LEFT SECTION: Badge + Headline + Subtitle + (Desktop Skills) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 order-1">
            {/* Golden Badge */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      boxShadow: [
                        '0 0 12px rgba(245,158,11,0.22)',
                        '0 0 22px rgba(245,158,11,0.42)',
                        '0 0 12px rgba(245,158,11,0.22)',
                      ],
                    }
              }
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/65 text-amber-300 text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-lg"
            >
              <span aria-hidden="true" className="text-xs">👑</span>
              <span aria-hidden="true" className="text-xs">🔥</span>
              <span>{COURSE_BANNER_CONFIG.badgeText}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.08] drop-shadow-[0_3px_12px_rgba(3,12,40,0.65)]"
            >
              <span className="block text-white">
                {COURSE_BANNER_CONFIG.headlineLine1}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5ff59b] via-[#67e8f9] to-[#e879f9] pb-0.5">
                {COURSE_BANNER_CONFIG.headlineGradient}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-[15px] font-bold text-white leading-snug drop-shadow-[0_2px_8px_rgba(3,12,40,0.75)]"
            >
              <span>{COURSE_BANNER_CONFIG.subtitlePrefix}</span>
              <span className="text-cyan-200 font-extrabold">
                {COURSE_BANNER_CONFIG.subtitleHighlight}
              </span>
              <span className="text-white font-extrabold">
                {COURSE_BANNER_CONFIG.subtitleSuffix}
              </span>
            </motion.p>

            {/* 5 Glowing Skill Cards (Visible here on Desktop/Tablet, below CTA on Mobile) */}
            <div className="hidden sm:flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-2 pt-2">
              {COURSE_BANNER_CONFIG.skills.map((skill, idx) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  index={idx}
                  onSkillClick={handleSkillClick}
                />
              ))}
            </div>
          </div>

          {/* CENTER SECTION: 3D Student + Laptop with Future IT Logo + Floating Icons */}
          <div className="lg:col-span-4 flex items-center justify-center order-2 -my-2 lg:-my-5">
            <StudentIllustration />
          </div>

          {/* RIGHT SECTION: Glassmorphic Pricing Card */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end order-3">
            <PricingCard onEnroll={handleEnrollAction} />
          </div>

          {/* MOBILE ONLY: 5 Glowing Skill Cards below Pricing Card */}
          <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 pt-1 order-4">
            {COURSE_BANNER_CONFIG.skills.map((skill, idx) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={idx}
                onSkillClick={handleSkillClick}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseHeroBanner;
