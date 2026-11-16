import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export interface DesktopLoggedInHeroProps {
  onContinueLearning: () => void;
  playClick?: () => void;
  onOpenPlacement?: () => void;
}

interface BannerSlide {
  id: string;
  badge: string;
  headlinePrefix?: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  breakLine?: boolean;
  description: string;
  ctaText: string;
  ctaBg: string;
  ctaShadow: string;
  bgGradient: string;
  vignetteGradient: string;
  imageSrc: string;
  imagePosition: string;
  altText: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 'students-freshers',
    badge: 'STUDENTS & FRESHERS',
    headlinePrefix: "Don't Just Learn.",
    breakLine: true,
    headlineHighlight: 'Build Your Future.',
    description: 'Learn practical skills, solve real problems and build projects that showcase your abilities.',
    ctaText: 'Start Learning',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#7C3AED] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.25)]',
    bgGradient: 'bg-gradient-to-r from-[#f7f3fb] via-[#fbf9fe] to-[#ffffff]',
    vignetteGradient: 'from-[#f7f3fb] via-[#f7f3fb]/95 via-[72%]',
    imageSrc: '/images/dashboard/story_hero_students_freshers.jpg',
    imagePosition: 'object-[80%_center] xl:object-[82%_20%]',
    altText: 'Young Indian student working waist-up on a laptop surrounded by project screens',
  },
  {
    id: 'career-gap',
    badge: 'NON-IT & CAREER GAP',
    headlinePrefix: 'A ',
    headlineHighlight: 'Fresh Start',
    headlineSuffix: ' for Your Career.',
    description: 'No IT background? No problem. Learn from the basics.',
    ctaText: 'Start Your Journey',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#7C3AED] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.25)]',
    bgGradient: 'bg-gradient-to-r from-[#f7f3fb] via-[#faf6fd] to-[#ffffff]',
    vignetteGradient: 'from-[#f7f3fb] via-[#f7f3fb]/95 via-[72%]',
    imageSrc: '/images/dashboard/story_hero_career_gap.jpg',
    imagePosition: 'object-[80%_center] xl:object-[82%_20%]',
    altText: 'Indian woman learner seated waist-up at desk with laptop and learning milestones',
  },
  {
    id: 'career-switchers',
    badge: 'CAREER SWITCH',
    headlinePrefix: 'Ready to ',
    headlineHighlight: 'Switch to IT?',
    description: 'Build practical tech skills, work on projects and prepare for your next career move.',
    ctaText: 'Explore Career Paths',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#7C3AED] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.25)]',
    bgGradient: 'bg-gradient-to-r from-[#f7f3fb] via-[#faf6fd] to-[#ffffff]',
    vignetteGradient: 'from-[#f7f3fb] via-[#f7f3fb]/95 via-[72%]',
    imageSrc: '/images/dashboard/story_hero_career_switch.jpg',
    imagePosition: 'object-[80%_center] xl:object-[82%_20%]',
    altText: 'Indian professional waist-up at modern workstation with analytics and code editor',
  },
  {
    id: 'placement-solution',
    badge: 'PLACEMENT PREPARATION',
    headlinePrefix: 'Ultimate ',
    headlineHighlight: 'Placement Solution',
    description: 'DSA Practice. Mock Interviews. Resume Preparation. Placement Prep.',
    ctaText: 'Start Placement Prep',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#7C3AED] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.25)]',
    bgGradient: 'bg-gradient-to-r from-[#f7f3fb] via-[#faf6fd] to-[#ffffff]',
    vignetteGradient: 'from-[#f7f3fb] via-[#f7f3fb]/95 via-[72%]',
    imageSrc: '/images/dashboard/story_hero_placement_solution.jpg',
    imagePosition: 'object-[80%_center] xl:object-[82%_20%]',
    altText: 'Young Indian professional waist-up at interview desk during a mock interview session',
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;
const TRANSITION_DURATION_MS = 600;

/**
 * Story-Driven Premium Light-Theme Auto-Sliding Hero Carousel (4 Slides)
 * Highlighted Royal Blue Badges (14-16px semibold) & Subtle Light-Blue Headline Highlights.
 * No crown, sparkles, stars, or decorative icons.
 */
export const DesktopLoggedInHero: React.FC<DesktopLoggedInHeroProps> = ({
  onContinueLearning,
  playClick,
  onOpenPlacement,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = SLIDES.length;

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    playClick?.();
    setCurrentIndex(index);
  };

  // Reset & start autoplay timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        goToNextSlide();
      }, AUTOPLAY_INTERVAL_MS);
    }
  }, [isPaused, goToNextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [resetTimer, currentIndex]);

  const handleManualPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick?.();
    goToPrevSlide();
  };

  const handleManualNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick?.();
    goToNextSlide();
  };

  const handleCtaClick = (e: React.MouseEvent, slideId: string) => {
    e.stopPropagation();
    playClick?.();
    if (slideId === 'placement-solution') {
      if (onOpenPlacement) {
        onOpenPlacement();
      } else if (typeof window !== 'undefined') {
        window.location.hash = '#placement';
      }
    } else {
      const target = document.getElementById('learning-modules-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        onContinueLearning();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      playClick?.();
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      playClick?.();
      goToNextSlide();
    }
  };

  return (
    <section
      className="w-full select-none"
      aria-roledescription="carousel"
      aria-label="Future IT Industry Learning Opportunities"
    >
      <div
        ref={containerRef}
        role="region"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        className="group relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-[#DDD6FE]/60 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50"
        style={{ aspectRatio: '16 / 4.2', minHeight: '220px', maxHeight: '275px' }}
      >
        {/* ─── SLIDING TRACK ─── */}
        <div
          className="flex h-full w-full transition-transform ease-out will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: `${TRANSITION_DURATION_MS}ms`,
          }}
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${idx + 1} of ${totalSlides}: ${slide.badge}`}
              aria-hidden={idx !== currentIndex}
              className={`relative h-full w-full flex-shrink-0 overflow-hidden ${slide.bgGradient}`}
            >
              {/* 1. Story-Driven Visual: Waist-up Learner, Desk, Laptop & UI Screens */}
              <img
                src={slide.imageSrc}
                alt={slide.altText}
                className={`absolute inset-0 w-full h-full object-cover ${slide.imagePosition} contrast-[1.06] saturate-[1.05] transition-transform duration-700 pointer-events-none`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />

              {/* 2. Controlled Smooth Vignette on Left (Feathers before subject, giving 100% clarity to the story visuals) */}
              <div
                className={`absolute inset-y-0 left-0 w-[58%] lg:w-[50%] bg-gradient-to-r ${slide.vignetteGradient} to-transparent pointer-events-none z-10`}
              />

              {/* 3. Left-Aligned Text Content */}
              <div className="absolute inset-y-0 left-0 pl-6 sm:pl-8 lg:pl-10 xl:pl-11 flex flex-col justify-center z-20 max-w-[56%] lg:max-w-[49%] text-left py-3 sm:py-4">
                {/* Highlighted Royal-Purple Top Badge */}
                <div className="mb-2 sm:mb-2.5">
                  <span className="inline-flex items-center px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#6D28D9] text-[13px] sm:text-[14px] font-semibold tracking-wide uppercase shadow-2xs">
                    {slide.badge}
                  </span>
                </div>

                {/* Headline: Deep Navy with subtle Lavender Highlight on key words */}
                <h2 className="text-xl sm:text-2xl lg:text-[25px] xl:text-[28px] font-black text-[#111827] leading-[1.22] tracking-tight">
                  {slide.headlinePrefix && <span>{slide.headlinePrefix}</span>}
                  {slide.breakLine && <br />}
                  <span className="bg-[#F5F3FF] text-[#6D28D9] border border-[#DDD6FE]/60 px-2 py-0.5 rounded-lg inline-block my-0.5 shadow-2xs">
                    {slide.headlineHighlight}
                  </span>
                  {slide.headlineSuffix && <span>{slide.headlineSuffix}</span>}
                </h2>

                {/* Description */}
                <p className="mt-1 sm:mt-1.5 text-slate-600 text-[11px] sm:text-[11.5px] lg:text-[12.5px] font-medium leading-snug max-w-[94%]">
                  {slide.description}
                </p>

                {/* Primary CTA (Refined Solid Brand Button) */}
                <div className="mt-2.5 sm:mt-3">
                  <button
                    type="button"
                    onClick={(e) => handleCtaClick(e, slide.id)}
                    className={`inline-flex items-center justify-center gap-1.5 h-9 px-4 sm:px-4.5 rounded-xl ${slide.ctaBg} font-bold text-xs sm:text-[12.5px] shadow-sm ${slide.ctaShadow} hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group/btn`}
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── MANUAL NAVIGATION CONTROLS ─── */}

        {/* Previous Slide Arrow */}
        <button
          type="button"
          onClick={handleManualPrev}
          aria-label="Previous Slide"
          className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-sm border border-slate-200/80 transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Next Slide Arrow */}
        <button
          type="button"
          onClick={handleManualNext}
          aria-label="Next Slide"
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-sm border border-slate-200/80 transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Four Pagination Indicators (Bottom-Center) */}
        <div
          role="tablist"
          aria-label="Carousel pagination"
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/80 backdrop-blur-xs border border-slate-200/70 shadow-2xs"
        >
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}: ${slide.badge}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-5 h-1.5 bg-[#6D28D9]'
                    : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
