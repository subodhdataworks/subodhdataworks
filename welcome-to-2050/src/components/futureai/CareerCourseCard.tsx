import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { ToolIcon } from './CourseToolIcons';
import { COURSE_AUTHORITATIVE_IMAGES } from '../../data/careerCourses12';
import { CourseSocialProof } from './CourseSocialProof';

export interface CourseCardTool {
  name: string;
}

export interface CareerCourseCardProps {
  id: string;
  badgeNum?: number;
  title: string;
  subtitle?: string;
  shortDesc?: string;
  image?: string;
  holoImage?: string;
  video?: string;
  theme?: string;
  stripColor?:
    | 'sapphire-blue'
    | 'emerald-green'
    | 'vibrant-orange'
    | 'royal-purple'
    | 'crimson-rose'
    | 'indigo-cobalt'
    | 'dark-teal'
    | 'ocean-cyan'
    | 'forest-lime'
    | 'plum-magenta'
    | 'olive-green'
    | 'deep-olive'
    | 'premium-violet';
  topBadge?: {
    icon: string;
    text: string;
  };
  tools: CourseCardTool[];
  jobRoles: string;
  salary: string;
  price?: string;
  originalPrice?: string;
  discountBadge?: string;
  isLiveCourse?: boolean;
  liveBadgeText?: string;
  courseTypeLabel?: string;
  ctaLabel?: string;
  isUnlocked?: boolean;
  onClick: () => void;
}

// 10 distinct lighter, vibrant 2-color mix gradients (one unique dual-tone mix per course)
const STRIP_COLOR_MAP: Record<string, { bg: string; btnText: string; borderHover: string }> = {
  'sapphire-blue': {
    // 1. Data Analyst: Bright Sky Blue + Soft Violet Purple mix
    bg: 'bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]',
    btnText: 'text-[#4F46E5]',
    borderHover: 'hover:border-[#6366F1]/60',
  },
  'royal-purple': {
    // 2. Data Science: Luminous Violet + Vibrant Rose Pink mix
    bg: 'bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899]',
    btnText: 'text-[#9333EA]',
    borderHover: 'hover:border-[#A855F7]/60',
  },
  'vibrant-orange': {
    // 3. ML Engineering: Bright Tangerine Orange + Coral Rose Pink mix
    bg: 'bg-gradient-to-r from-[#F97316] via-[#FB7185] to-[#EC4899]',
    btnText: 'text-[#E11D48]',
    borderHover: 'hover:border-[#F97316]/60',
  },
  'emerald-green': {
    // 4. AI Engineering: Fresh Mint Emerald + Aqua Cyan Blue mix
    bg: 'bg-gradient-to-r from-[#10B981] via-[#14B8A6] to-[#06B6D4]',
    btnText: 'text-[#0D9488]',
    borderHover: 'hover:border-[#14B8A6]/60',
  },
  'indigo-cobalt': {
    // 5. AI Tools & Prompt: Electric Indigo + Bright Cyan Sky mix
    bg: 'bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#06B6D4]',
    btnText: 'text-[#2563EB]',
    borderHover: 'hover:border-[#3B82F6]/60',
  },
  'forest-lime': {
    // 6. MS Office 365: Vibrant Green + Ocean Sky Blue mix
    bg: 'bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#0EA5E9]',
    btnText: 'text-[#059669]',
    borderHover: 'hover:border-[#10B981]/60',
  },
  'dark-teal': {
    // 7. Full Stack Web Dev: Aqua Cyan + Royal Purple mix
    bg: 'bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6]',
    btnText: 'text-[#2563EB]',
    borderHover: 'hover:border-[#06B6D4]/60',
  },
  'amber-gold': {
    // 8. AI Website Builder Pro: Golden Amber + Coral Orange-Red mix
    bg: 'bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#F43F5E]',
    btnText: 'text-[#EA580C]',
    borderHover: 'hover:border-[#F97316]/60',
  },
  'ocean-cyan': {
    // 9. AI App Builder Pro: Sky Blue + Fresh Emerald Mint mix
    bg: 'bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#10B981]',
    btnText: 'text-[#0284C7]',
    borderHover: 'hover:border-[#06B6D4]/60',
  },
  'cinematic-red': {
    // 10. AI Video Creator Pro: Coral Rose + Luminous Violet Purple mix
    bg: 'bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#8B5CF6]',
    btnText: 'text-[#DB2777]',
    borderHover: 'hover:border-[#EC4899]/60',
  },
  'crimson-rose': {
    bg: 'bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#A855F7]',
    btnText: 'text-[#E11D48]',
    borderHover: 'hover:border-[#EC4899]/60',
  },
  'plum-magenta': {
    bg: 'bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#EC4899]',
    btnText: 'text-[#C026D3]',
    borderHover: 'hover:border-[#D946EF]/60',
  },
  'olive-green': {
    bg: 'bg-gradient-to-r from-[#84CC16] to-[#10B981]',
    btnText: 'text-[#059669]',
    borderHover: 'hover:border-[#10B981]/50',
  },
  'deep-olive': {
    bg: 'bg-gradient-to-r from-[#22C55E] to-[#14B8A6]',
    btnText: 'text-[#0D9488]',
    borderHover: 'hover:border-[#14B8A6]/50',
  },
  'premium-violet': {
    bg: 'bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]',
    btnText: 'text-[#7C3AED]',
    borderHover: 'hover:border-[#8B5CF6]/50',
  },
};

// Unique color per course id matching its visual artwork and branding theme
const COURSE_STRIP_FALLBACK: Record<string, string> = {
  'data-analyst-genai': 'sapphire-blue',
  'data-science-agentic-ai': 'royal-purple',
  'ml-engineering': 'vibrant-orange',
  'ai-engineering': 'emerald-green',
  'ai-tools-prompt': 'indigo-cobalt',
  'ms-office-copilot': 'forest-lime',
  'full-stack-web-dev': 'dark-teal',
  'ai-website-dev': 'amber-gold',
  'ai-android-dev': 'ocean-cyan',
  'ai-video-creation': 'cinematic-red',
};

export const CareerCourseCard: React.FC<CareerCourseCardProps> = React.memo(({
  id,
  badgeNum,
  title,
  shortDesc,
  image,
  holoImage,
  video,
  stripColor,
  topBadge,
  tools,
  jobRoles,
  salary,
  price = '₹1,199',
  originalPrice,
  discountBadge,
  isLiveCourse = false,
  liveBadgeText = 'LIVE CLASSES',
  courseTypeLabel,
  ctaLabel,
  isUnlocked = false,
  onClick,
}) => {
  const chosenColorKey = stripColor || COURSE_STRIP_FALLBACK[id] || 'royal-purple';
  const stripTheme = STRIP_COLOR_MAP[chosenColorKey] || STRIP_COLOR_MAP['royal-purple'];

  const authoritativeSrc = COURSE_AUTHORITATIVE_IMAGES[id] || holoImage || image || '';
  const fallbackJpgSrc = authoritativeSrc.endsWith('.webp')
    ? authoritativeSrc.replace(/\.webp$/, '.jpg')
    : authoritativeSrc;

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(authoritativeSrc);

  useEffect(() => {
    setImgSrc(authoritativeSrc);
  }, [authoritativeSrc]);

  const isAboveFold = typeof badgeNum === 'number' ? badgeNum <= 10 : true;

  return (
    <article
      onClick={onClick}
      className={`group relative rounded-[20px] bg-white border border-[#E5DEFF] ${stripTheme.borderHover} shadow-[0_2px_8px_rgba(109,40,217,0.04)] hover:shadow-[0_10px_22px_rgba(109,40,217,0.10)] flex flex-col justify-between overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 cursor-pointer select-none h-full`}
    >
      {/* 1. TOP ARTWORK — Original Auto-Playing Course Card Video (with Fallback Image) */}
      <div className="relative w-full h-[118px] sm:h-[122px] overflow-hidden bg-[#1E1B4B] shrink-0">
        {isLiveCourse ? (
          <div className="absolute top-2 left-2 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[9.5px] font-bold tracking-wider uppercase shadow-sm border border-red-400/50">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            <span>{liveBadgeText}</span>
          </div>
        ) : topBadge ? (
          <div className="absolute top-2 left-2 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#6D28D9] text-[9.5px] font-bold shadow-xs border border-[#E9E5F5]">
            <span>{topBadge.text}</span>
          </div>
        ) : null}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#2E1065] via-[#1E1B4B] to-[#312E81]"
        />

        {video ? (
          <video
            src={video}
            poster={video.endsWith('_card.mp4') ? video.replace('_card.mp4', '_poster.webp') : imgSrc}
            autoPlay
            loop
            muted
            playsInline
            preload={isAboveFold ? 'auto' : 'metadata'}
            className="relative z-10 w-full h-full object-cover brightness-[0.94] saturate-[0.95] group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
          />
        ) : imgSrc && (
          <img
            ref={imgRef}
            src={imgSrc}
            alt={title}
            width={600}
            height={338}
            loading={isAboveFold ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={isAboveFold ? 'high' : 'auto'}
            onError={() => {
              if (imgSrc !== fallbackJpgSrc && fallbackJpgSrc) {
                setImgSrc(fallbackJpgSrc);
              }
            }}
            className="relative z-10 w-full h-full object-cover brightness-[0.94] saturate-[0.95] group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
          />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 z-[15] bg-gradient-to-t from-[#1E1B4B]/60 via-[#1E1B4B]/10 to-[#1E1B4B]/10 pointer-events-none"
        />
      </div>

      {/* 2. CARD BODY */}
      <div className="px-3 py-2.5 flex flex-col flex-1 justify-between gap-1.5 bg-white">
        {/* Course Title — Clean typography with reduced font weight */}
        <div className="text-center pt-0.5 pb-0.5">
          <h3
            title={title}
            className="font-bold text-[13.5px] sm:text-[14px] text-[#111827] group-hover:text-[#6D28D9] transition-colors tracking-tight leading-snug line-clamp-1 m-0"
          >
            {title}
          </h3>
          {isLiveCourse && shortDesc && (
            <p className="text-[10px] text-[#64748B] font-medium leading-tight line-clamp-1 mt-0.5 m-0">
              {shortDesc}
            </p>
          )}
        </div>

        {/* 5 Technology Icons & Labels */}
        <div className="flex items-center justify-between w-full px-0.5 py-0.5">
          {tools.slice(0, 5).map((t, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 text-center min-w-0">
              <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 flex items-center justify-center group-hover:scale-108 transition-transform">
                <ToolIcon name={t.name} className="w-4.5 h-4.5 sm:w-5 sm:h-5 object-contain" />
              </div>
              <span className="text-[9px] font-semibold text-slate-600 tracking-tight truncate w-full text-center mt-0.5">
                {t.name}
              </span>
            </div>
          ))}
        </div>

        {/* Thin Divider */}
        <div className="w-full border-t border-slate-100 my-0.5" />

        {/* Job Roles (Left) & Salary Package (Right) */}
        <div className="flex items-center justify-between w-full gap-1.5">
          {/* Left: Job Roles / Course Type */}
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <div className={`w-5.5 h-5.5 rounded-md flex items-center justify-center shrink-0 border ${isLiveCourse ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
              <Briefcase className="w-3 h-3" />
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className="text-[8.5px] font-semibold tracking-tight text-slate-500 uppercase leading-none">
                {isLiveCourse ? 'Class Format' : 'Job Roles'}
              </span>
              <span className="text-[9.5px] font-medium text-slate-800 truncate max-w-[100px] sm:max-w-[115px] mt-0.5">
                {courseTypeLabel || jobRoles}
              </span>
            </div>
          </div>

          {/* Right: Salary / Outcome Pill Container */}
          <div className={`flex flex-col items-end text-right shrink-0 px-2 py-0.5 rounded-lg border ${isLiveCourse ? 'bg-rose-50/80 border-rose-100 text-rose-700' : 'bg-emerald-50 border-emerald-100 text-emerald-700'}`}>
            <span className="text-[10.5px] sm:text-[11px] font-bold tracking-tight leading-none">
              {salary}
            </span>
            <span className="text-[8px] font-medium text-slate-500 mt-0.5">
              {isLiveCourse ? 'Hands-On Build' : 'Average Package'}
            </span>
          </div>
        </div>

        {/* Animated Student Social Proof Row (4-5 Avatars + Enrolled Count + Star Rating) */}
        <CourseSocialProof courseId={id} visibleCount={4} />
      </div>

      {/* 3. FULL-WIDTH PREMIUM PRICING STRIP (100% card width, flush with bottom 20px corners) */}
      <div
        className={`w-full ${stripTheme.bg} px-3 py-2 flex items-center justify-between text-white h-[46px] shrink-0 mt-auto select-none`}
      >
        {/* Left Side: Pricing details */}
        {discountBadge && originalPrice ? (
          /* Discounted courses: Original Price | 90% OFF | Selling Price */
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[10px] xl:text-[10.5px] font-normal text-white/75 line-through tracking-tight whitespace-nowrap">
              {originalPrice}
            </span>
            <span className="bg-yellow-400 text-slate-950 font-bold text-[8.5px] xl:text-[9px] px-1.5 py-0.5 rounded shadow-2xs uppercase tracking-tight whitespace-nowrap">
              {discountBadge}
            </span>
            <span className="text-[14px] xl:text-[15px] font-bold text-white tracking-tight whitespace-nowrap ml-0.5">
              {price}
            </span>
          </div>
        ) : (
          /* Full Stack (No discount): Just Selling Price */
          <span className="text-[15px] xl:text-[16px] font-bold text-white tracking-tight whitespace-nowrap">
            {price}
          </span>
        )}

        {/* Right Side: White Pill Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className={`bg-white ${stripTheme.btnText} hover:bg-slate-50 font-bold text-[10px] xl:text-[10.5px] px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm hover:scale-[1.02] active:scale-98 transition-all flex items-center gap-1 shrink-0 cursor-pointer whitespace-nowrap ml-1.5`}
        >
          {isUnlocked ? (
            <>
              <span>{isLiveCourse ? 'Live Class & Demo' : 'Learning'}</span>
              <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
            </>
          ) : (
            <>
              <span>{ctaLabel || 'Enroll Now'}</span>
              <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
            </>
          )}
        </button>
      </div>
    </article>
  );
});
