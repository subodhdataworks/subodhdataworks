import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Trophy,
  CheckCircle2,
  Video,
} from 'lucide-react';
import { HrRoundRoleKey } from './DedicatedHrRoundRoom';

export interface BannerSlideData {
  roleKey: HrRoundRoleKey;
  category: string;
  badgeText: string;
  headline: string;
  headlineHighlight: string;
  subtitle: string;
  salaryPackage: string;
  targetRole: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  bgImage: string;
  bgPosition?: string;
  isSquarePortrait?: boolean;
  fallbackImage: string;
  featurePills: string[];
}

export const BANNER_SLIDES: BannerSlideData[] = [
  {
    roleKey: 'data_analyst',
    category: '100% Interview Success',
    badgeText: 'Most In-Demand Role',
    headline: 'Prepare for Your Data Analyst',
    headlineHighlight: 'Interview',
    subtitle: 'Master Excel, SQL, Python, Power BI & Crack Top Product Companies with High Confidence.',
    salaryPackage: '₹8 – ₹16 LPA',
    targetRole: 'Data Analyst & BI Specialist',
    primaryCtaText: 'Start Interview Practice',
    secondaryCtaText: 'Explore 150+ Questions',
    bgImage: '/images/interview_banner_job_fair_selected.jpg',
    bgPosition: 'object-[50%_22%]',
    fallbackImage: '/images/future_it_industries_campus_banner.png',
    featurePills: [
      '1-on-1 AI HR Mock',
      '150+ Real Questions',
      'Instant AI Feedback',
      'Benchmark Model Answers',
    ],
  },
  {
    roleKey: 'data_science',
    category: 'High-Growth Tech Career',
    badgeText: 'Top Placement Rate',
    headline: 'Get Ready for Your Data Science',
    headlineHighlight: 'Interview',
    subtitle: 'Practice Python, Machine Learning, Statistical Scenarios & Practical Business Case Studies.',
    salaryPackage: '₹10 – ₹22 LPA',
    targetRole: 'Data Scientist & AI Specialist',
    primaryCtaText: 'Start Interview Practice',
    secondaryCtaText: 'Explore 150+ Questions',
    bgImage: '/images/why-placed-student.jpg',
    bgPosition: 'object-[50%_24%]',
    isSquarePortrait: true,
    fallbackImage: '/images/data_analyst_light_banner.jpg',
    featurePills: [
      'Machine Learning & Stats',
      'Real Case Studies',
      'Placement Assistance',
      'AI Evaluator Feedback',
    ],
  },
  {
    roleKey: 'ai_engineering',
    category: 'Next-Gen AI Careers',
    badgeText: 'Most Demanded Skill',
    headline: 'Build Confidence for AI Engineering',
    headlineHighlight: 'Interviews',
    subtitle: 'Prepare for LLMs, RAG Architectures, Prompt Engineering, Vector Databases & Agents.',
    salaryPackage: '₹12 – ₹25 LPA',
    targetRole: 'AI & Generative AI Engineer',
    primaryCtaText: 'Start Interview Practice',
    secondaryCtaText: 'Explore 150+ Questions',
    bgImage: '/images/placed-student-celebration.jpg',
    bgPosition: 'object-[50%_22%]',
    isSquarePortrait: true,
    fallbackImage: '/images/future_it_industries_campus_banner.png',
    featurePills: [
      'LLMs, RAG & LangChain',
      'System Design Rounds',
      '1-on-1 HR Interview',
      'Job Offer Readiness',
    ],
  },
  {
    roleKey: 'ml_engineering',
    category: 'Production ML & Cloud',
    badgeText: 'Industry-Ready Systems',
    headline: 'Master Your Machine Learning',
    headlineHighlight: 'Interview',
    subtitle: 'Practice ML algorithms, model evaluation, Python microservices & Dockerized MLOps pipelines.',
    salaryPackage: '₹10 – ₹20 LPA',
    targetRole: 'Machine Learning & MLOps Engineer',
    primaryCtaText: 'Start Interview Practice',
    secondaryCtaText: 'Explore 150+ Questions',
    bgImage: '/images/interview_banner_personal_cabin_hr.jpg',
    bgPosition: 'object-[50%_32%]',
    fallbackImage: '/images/why-placed-student.jpg',
    featurePills: [
      'MLOps & Production Pipelines',
      'Model Serving & Docker',
      'Real Interview Scenarios',
      'Industry Verification',
    ],
  },
  {
    roleKey: 'full_stack',
    category: 'Full Stack Web & Cloud',
    badgeText: 'Highest Job Openings',
    headline: 'Prepare for Full Stack Developer',
    headlineHighlight: 'Interviews',
    subtitle: 'Practice React, Node.js, Express, MongoDB, RESTful APIs & Clean System Architecture.',
    salaryPackage: '₹8 – ₹18 LPA',
    targetRole: 'Full Stack MERN Developer',
    primaryCtaText: 'Start Interview Practice',
    secondaryCtaText: 'Explore 150+ Questions',
    bgImage: '/images/why-placed-student.jpg',
    bgPosition: 'object-[50%_24%]',
    isSquarePortrait: true,
    fallbackImage: '/images/placed-student-celebration.jpg',
    featurePills: [
      'React, Node & MongoDB',
      'Clean Architecture Rounds',
      'Direct Placement Drives',
      'AI Mock Practice',
    ],
  },
];

interface InterviewTrackBannerCarouselProps {
  selectedRole: HrRoundRoleKey;
  onStartPreparation: (roleKey: HrRoundRoleKey) => void;
  onExploreQuestions: (roleKey: HrRoundRoleKey) => void;
}

export const InterviewTrackBannerCarousel: React.FC<InterviewTrackBannerCarouselProps> = ({
  selectedRole,
  onStartPreparation,
  onExploreQuestions,
}) => {
  const activeSlide =
    BANNER_SLIDES.find((s) => s.roleKey === selectedRole) || BANNER_SLIDES[0];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(109,40,217,0.07)] border border-[#E9E5F5] transition-all select-none bg-white"
      role="region"
      aria-label={`${activeSlide.headline} Banner`}
    >
      {/* Active Role Banner (Slim & Theme-Matched — Locked to Selected Interview Track) */}
      <div
        key={activeSlide.roleKey}
        className="w-full relative overflow-hidden min-h-[195px] md:h-[215px] flex flex-col justify-center animate-fadeIn"
      >
        {/* ── Background Photo: Modern Corporate Office / Interview / Placed Student Success ── */}
        {activeSlide.isSquarePortrait ? (
          <div className="absolute inset-0 bg-gradient-to-r from-white via-[#FAF8FF] to-[#F5F3FF] pointer-events-none">
            <img
              src={activeSlide.bgImage}
              alt={activeSlide.headline}
              className={`absolute top-0 right-0 md:right-[8%] h-full w-full md:w-[50%] object-cover ${activeSlide.bgPosition || 'object-top'} pointer-events-none`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = activeSlide.fallbackImage;
              }}
            />
            {/* Smooth Left-to-Right White Pearl Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/88 to-transparent pointer-events-none w-full md:w-[60%]" />
            {/* Subtle Right Edge Blend so cards sit cleanly */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-[#F5F3FF] via-[#F5F3FF]/75 to-transparent pointer-events-none" />
          </div>
        ) : (
          <>
            <img
              src={activeSlide.bgImage}
              alt={activeSlide.headline}
              className={`absolute inset-0 w-full h-full object-cover ${activeSlide.bgPosition || 'object-center'} pointer-events-none`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = activeSlide.fallbackImage;
              }}
            />
            {/* Soft Pearl Gradient: Left side is crisp pure white for high contrast readable text */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/90 to-transparent pointer-events-none w-full md:w-[62%] lg:w-[56%]" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent pointer-events-none md:hidden" />

        {/* ── Main Foreground Content Zone ── */}
        <div className="relative z-10 px-5 sm:px-7 py-3.5 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4 h-full">
          
          {/* Left Column: Eyebrow, Inspiring Headline, Subtitle, Feature Pills & CTAs */}
          <div className="flex-1 max-w-xl z-10 text-left flex flex-col justify-center gap-1.5">
            {/* Category Pill & Theme-Matched Role Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5F3FF] border border-[#E9E5F5] text-[#6D28D9] text-[10.5px] font-semibold tracking-wide shadow-2xs">
                <Trophy className="w-3 h-3 text-[#6D28D9]" />
                <span>{activeSlide.category}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] text-[10.5px] font-semibold text-[#7C3AED] tracking-wide shadow-2xs">
                <span>{activeSlide.badgeText}</span>
              </div>
            </div>

            {/* Inspiring Headline */}
            <h1 className="text-lg sm:text-xl lg:text-[24px] font-bold tracking-[-0.02em] text-[#111827] leading-tight m-0">
              {activeSlide.headline}{' '}
              <span className="text-[#6D28D9]">
                {activeSlide.headlineHighlight}
              </span>
            </h1>

            {/* Motivating Subtitle */}
            <p className="text-xs sm:text-[13px] text-[#64748B] font-normal leading-snug max-w-lg m-0">
              {activeSlide.subtitle}
            </p>

            {/* Motivational Feature Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10.5px] font-medium text-slate-700">
              {activeSlide.featurePills.map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className="flex items-center gap-1 bg-white/95 border border-[#E9E5F5] px-2.5 py-0.5 rounded-full shadow-2xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#6D28D9] shrink-0" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex items-center gap-2.5 mt-1 flex-wrap">
              <button
                type="button"
                onClick={() => onStartPreparation(activeSlide.roleKey)}
                className="px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white font-semibold text-xs sm:text-[13px] flex items-center gap-1.5 shadow-xs active:scale-[0.99] transition-all cursor-pointer group/btn"
              >
                <span>{activeSlide.primaryCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onExploreQuestions(activeSlide.roleKey)}
                className="px-3.5 py-2 rounded-xl bg-white/95 hover:bg-[#F5F3FF] text-[#111827] text-xs sm:text-[13px] font-semibold border border-[#E9E5F5] shadow-2xs transition-all active:scale-[0.99] flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span>{activeSlide.secondaryCtaText}</span>
              </button>
            </div>
          </div>

          {/* Right Side: Compact Theme-Matched Career Showcase Floating Cards */}
          <div className="hidden md:flex flex-col gap-2 items-end justify-center z-10 shrink-0 w-[250px]">
            {/* Floating Card 1: Job Offer Package */}
            <div className="w-full bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#E9E5F5] shadow-sm text-left">
              <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#6D28D9] mb-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified Placement Package</span>
              </div>
              <div className="text-sm font-bold text-[#111827] tabular-nums leading-tight">
                {activeSlide.salaryPackage}{' '}
                <span className="text-[10px] text-[#64748B] font-medium">Avg. CTC</span>
              </div>
              <div className="text-[10.5px] text-[#64748B] font-normal truncate mt-0.5">
                Target: {activeSlide.targetRole}
              </div>
            </div>

            {/* Floating Card 2: 1-on-1 AI Interview Chamber */}
            <div className="w-full bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#E9E5F5] shadow-sm flex items-center gap-2.5 text-left">
              <div className="w-7 h-7 rounded-lg bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9] shrink-0 border border-[#E9E5F5]">
                <Video className="w-3.5 h-3.5 text-[#6D28D9]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#111827] leading-tight truncate">
                  Aditi Sharma (Senior HR)
                </div>
                <div className="text-[10px] text-[#64748B] font-normal leading-tight mt-0.5 truncate">
                  Live 1-on-1 Video Mock Interview
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
