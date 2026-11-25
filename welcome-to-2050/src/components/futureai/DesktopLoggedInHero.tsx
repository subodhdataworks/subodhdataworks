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
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.22)]',
    bgGradient: 'bg-gradient-to-r from-[#FAF8FF] via-[#F5F3FF]/70 to-white',
    vignetteGradient: 'from-[#FAF8FF] via-[#FAF8FF]/95 via-[65%]',
    imageSrc: '/images/dashboard/story_hero_students_freshers.jpg',
    imagePosition: 'object-[68%_18%]',
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
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.22)]',
    bgGradient: 'bg-gradient-to-r from-[#FAF8FF] via-[#F5F3FF]/70 to-white',
    vignetteGradient: 'from-[#FAF8FF] via-[#FAF8FF]/95 via-[65%]',
    imageSrc: '/images/dashboard/story_hero_career_gap.jpg',
    imagePosition: 'object-[68%_18%]',
    altText: 'Indian woman learner seated waist-up at desk with laptop and learning milestones',
  },
  {
    id: 'career-switchers',
    badge: 'CAREER SWITCH',
    headlinePrefix: 'Ready to ',
    headlineHighlight: 'Switch to IT?',
    description: 'Build practical tech skills, work on projects and prepare for your next career move.',
    ctaText: 'Explore Career Paths',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.22)]',
    bgGradient: 'bg-gradient-to-r from-[#FAF8FF] via-[#F5F3FF]/70 to-white',
    vignetteGradient: 'from-[#FAF8FF] via-[#FAF8FF]/95 via-[65%]',
    imageSrc: '/images/dashboard/story_hero_career_switch.jpg',
    imagePosition: 'object-[68%_18%]',
    altText: 'Indian professional waist-up at modern workstation with analytics and code editor',
  },
  {
    id: 'placement-solution',
    badge: 'PLACEMENT PREPARATION',
    headlinePrefix: 'Ultimate ',
    headlineHighlight: 'Placement Solution',
    description: 'DSA Practice. Mock Interviews. Resume Preparation. Placement Prep.',
    ctaText: 'Start Placement Prep',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.22)]',
    bgGradient: 'bg-gradient-to-r from-[#FAF8FF] via-[#F5F3FF]/70 to-white',
    vignetteGradient: 'from-[#FAF8FF] via-[#FAF8FF]/95 via-[65%]',
    imageSrc: '/images/dashboard/story_hero_placement_solution.jpg',
    imagePosition: 'object-[68%_18%]',
    altText: 'Young Indian professional waist-up at interview desk during a mock interview session',
  },
  {
    id: 'start-analysing',
    badge: 'INTERACTIVE DATA LAB',
    headlinePrefix: 'Stop memorising.',
    breakLine: true,
    headlineHighlight: 'Start analysing.',
    description:
      'Play with real-world data concepts. Sort information, spot mistakes, build a workflow and make smarter business decisions.',
    ctaText: 'Start Analysing',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.22)]',
    bgGradient: 'bg-gradient-to-r from-[#FAF8FF] via-[#F5F3FF]/70 to-white',
    vignetteGradient: 'from-[#FAF8FF] via-[#FAF8FF]/95 via-[65%]',
    imageSrc: '/images/dashboard/story_hero_start_analysing.jpg',
    imagePosition: 'object-[68%_18%]',
    altText: 'Young Indian data analyst working with interactive data charts, error spotting tables, and analytics workflows',
  },
  {
    id: 'learn-coding-playing',
    badge: 'GAMIFIED CODING LAB',
    headlinePrefix: 'Learn coding ',
    headlineHighlight: 'by playing.',
    description:
      'Solve interactive coding challenges, build logic step by step and master programming through hands-on play.',
    ctaText: 'Play & Code',
    ctaBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white',
    ctaShadow: 'shadow-[0_4px_14px_rgba(109,40,217,0.22)]',
    bgGradient: 'bg-gradient-to-r from-[#FAF8FF] via-[#F5F3FF]/70 to-white',
    vignetteGradient: 'from-[#FAF8FF] via-[#FAF8FF]/95 via-[65%]',
    imageSrc: '/images/dashboard/story_hero_learn_coding_playing.jpg',
    imagePosition: 'object-[68%_18%]',
    altText: 'Young Indian student learning coding interactively with gamified code blocks and logic challenges',
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
    if (slideId === 'placement-solution' || slideId === 'placement-program-banner') {
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
        className="group relative w-full rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(109,40,217,0.06)] hover:shadow-[0_6px_22px_rgba(109,40,217,0.09)] border border-[#E9E5F5] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50"
        style={{ aspectRatio: '16 / 3.1', minHeight: '175px', maxHeight: '205px' }}
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
              {/* 1. Right-Fitted Banner Image (Balanced with Left Text — Zero Dead Center Space) */}
              <div
                className="absolute inset-y-0 right-0 w-[64%] md:w-[60%] lg:w-[58%] h-full overflow-hidden pointer-events-none"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 16%, black 100%)',
                }}
              >
                <img
                  src={slide.imageSrc}
                  alt={slide.altText}
                  className={`w-full h-full object-cover ${slide.imagePosition} contrast-[1.04] saturate-[1.04] transition-transform duration-700 pointer-events-none`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>

              {/* 2. Controlled Smooth Lavender-White Vignette on Left */}
              <div
                className={`absolute inset-y-0 left-0 w-[56%] lg:w-[50%] bg-gradient-to-r from-[#FAF8FF] via-[#FAF8FF]/92 via-[52%] to-transparent pointer-events-none z-10`}
              />

              {/* 3. Left-Aligned Theme-Matched Text Content (Larger Headline & Supporting Copy) */}
              <div className="absolute inset-y-0 left-0 pl-5 sm:pl-7 lg:pl-9 flex flex-col justify-center gap-1.5 z-20 max-w-[60%] lg:max-w-[56%] text-left py-3">
                {/* Compact Brand Purple Top Pill */}
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] text-[#6D28D9] text-[10.5px] sm:text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
                    {slide.badge}
                  </span>
                </div>

                {/* Headline: Larger & Stronger Visual Presence */}
                <h2 className="text-xl sm:text-2xl lg:text-[27px] xl:text-[30px] font-extrabold text-[#111827] leading-[1.14] tracking-tight m-0">
                  {slide.headlinePrefix && <span>{slide.headlinePrefix}</span>}
                  {slide.breakLine && <br />}
                  <span className="text-[#6D28D9]">
                    {slide.headlineHighlight}
                  </span>
                  {slide.headlineSuffix && <span>{slide.headlineSuffix}</span>}
                </h2>

                {/* Supporting Description */}
                <p className="text-[#475569] text-xs sm:text-[13px] lg:text-[14px] font-medium leading-snug max-w-[96%] m-0">
                  {slide.description}
                </p>

                {/* Primary CTA */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={(e) => handleCtaClick(e, slide.id)}
                    className={`inline-flex items-center justify-center gap-1.5 h-8.5 sm:h-9 px-4 sm:px-5 rounded-xl ${slide.ctaBg} font-semibold text-xs sm:text-[13px] shadow-xs ${slide.ctaShadow} hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group/btn`}
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
