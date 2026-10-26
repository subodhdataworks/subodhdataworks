import React, { useState, useEffect } from 'react';
import {
  Layers,
  LayoutGrid,
  List,
  Sparkles,
  ArrowRight,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Users,
  Briefcase,
  Play,
  CheckCircle2
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import './LearnerHomeHub.css';
import { ALL_PLATFORM_COURSES, PlatformCourseItem } from '../../data/allPlatformCourses';
import { CareerCourseCard } from './CareerCourseCard';
import { CAREER_COURSES_12 } from '../../data/careerCourses12';

interface CareerFocusedCoursesProps {
  onStartCourse?: (courseId: string) => void;
  onEnroll?: () => void;
}

export type CourseFilterType = 'all' | 'in-progress' | 'not-started' | 'completed';
export type CourseViewModeType = 'grid' | 'list';
export type MobileCourseCategoryType = 'all' | 'flagship' | 'core' | 'ai';

export interface CourseItem {
  id: string;
  badgeNum: number;
  category: 'flagship' | 'core' | 'ai';
  statusTag: string;
  title: string;
  subtitle: string;
  fullName: string;
  shortDesc: string;
  descLine1: string;
  descLine2: string;
  salaryRange: string;
  courseFee: string;
  marketPrice?: string;
  payAfterJob?: string;
  image: string;
  holoImage: string;
  video: string;
  potTheme: 'blue' | 'purple' | 'gold' | 'emerald' | 'pink' | 'amber';
  skillsList: string[];
  lessonsText: string;
  projectsText: string;
}

export const CareerFocusedCoursesSection: React.FC<CareerFocusedCoursesProps> = ({
  onStartCourse,
  onEnroll,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [filter, setFilter] = useState<CourseFilterType>('all');
  const [viewMode, setViewMode] = useState<CourseViewModeType>('grid');
  const [mobileCategory, setMobileCategory] = useState<MobileCourseCategoryType>('all');

  // Continuous Typewriter Effect for "Career-Focused Courses"
  const typewriterPhrases = [
    'Career-Focused Courses',
    'High-Paying Industry Roles',
    'GenAI & Data Analytics',
    'Pay After Placement Tracks',
  ];
  const [typedText, setTypedText] = useState('Career-Focused Courses');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIdx];
    const speed = isDeleting ? 38 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentPhrase.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIdx]);

  // ALL 19 CAREER-FOCUSED INDUSTRY COURSES
  const courses: CourseItem[] = ALL_PLATFORM_COURSES.map(c => ({ ...c, video: c.video || '' }));

  const handleCourseClick = (courseId: string) => {
    playClick();
    if (onStartCourse) {
      onStartCourse(courseId);
    } else if (onEnroll) {
      onEnroll();
    }
  };

  // Primary Flagships and Featured Tracks for Desktop Cylinders (Top 8 High-Paying Tracks)
  const desktopPotCourses = courses;

  // Filtered courses for mobile category tabs
  const filteredMobileCourses: CourseItem[] = mobileCategory === 'all'
    ? courses
    : courses.filter((c: CourseItem) => c.category === mobileCategory);




















  return (
    <section className="relative pt-8 sm:pt-12 pb-0 bg-gradient-to-b from-[#f8fbff] via-white to-[#f8fbff] overflow-hidden" id="pay-after-placement">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            TOP EYEBROW & TITLE
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 shadow-2xs text-xs font-black text-blue-700 tracking-wide uppercase mb-3">
            <GraduationCap className="w-4 h-4 text-blue-600 stroke-[2.4]" />
            <span>CAREER-FOCUSED LEARNING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight min-h-[50px] sm:min-h-[56px]">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-[#0066ff] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent inline-block">
              {typedText}
              <span className="inline-block w-[3px] h-[0.85em] ml-1.5 bg-gradient-to-b from-[#0066ff] to-[#a855f7] align-middle animate-pulse rounded-full" />
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
            Choose the right path for your future. Learn practical skills with real-world projects.
          </p>

          {/* 4 Feature Pills in a Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-800">
              <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <BarChart3 className="w-3 h-3 stroke-[2.4]" />
              </div>
              <span>Industry-Relevant Curriculum</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-800">
              <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Layers className="w-3 h-3 stroke-[2.4]" />
              </div>
              <span>Hands-on Projects</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-800">
              <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Users className="w-3 h-3 stroke-[2.4]" />
              </div>
              <span>Expert Mentorship</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-800">
              <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Briefcase className="w-3 h-3 stroke-[2.4]" />
              </div>
              <span>Job-Oriented Training</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            UNIFIED RESPONSIVE VIEW: HIGH-PAYING INDUSTRY COURSES (SINGLE SOURCE OF TRUTH)
            ========================================================================= */}
        <div className="lhh-modules-section scd-transparent-pots-section" style={{ padding: 0, margin: 0, background: 'transparent' }}>
          <div className="lhh-section-header" style={{ marginBottom: '1.5rem' }}>
            <div className="lhh-section-left">
              <div className="lhh-layer-icon-box">
                <Layers className="w-5 h-5 text-blue-600" />
              </div>
              <div className="lhh-section-title-wrap">
                <h2 className="lhh-section-title">High-Paying Industry Career Tracks</h2>
              </div>
            </div>

            <div className="lhh-controls-group">
              <div className="lhh-view-toggle-capsule">
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setViewMode('grid');
                  }}
                  className={`lhh-view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setViewMode('list');
                  }}
                  className={`lhh-view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  aria-label="List view"
                >
                  <List className="w-3.5 h-3.5" />
                  <span>List</span>
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="scd-pots-4grid home-compact-pots">
              {CAREER_COURSES_12.map((c) => (
                <CareerCourseCard
                  key={c.id}
                  {...c}
                  onClick={() => handleCourseClick(c.id)}
                />
              ))}
            </div>
          ) : (
            <div className="lhh-modules-list">
              {courses.map((c) => (
                <div
                  key={c.id}
                  className="lhh-list-card cursor-pointer"
                  onClick={() => handleCourseClick(c.id)}
                >
                  {c.video ? (
                    <video
                      src={c.video}
                      poster={c.image}
                      loop
                      muted
                      playsInline
                      preload="none"
                      className="lhh-list-thumb"
                    />
                  ) : (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="lhh-list-thumb"
                    />
                  )}
                  <div className="lhh-list-info">
                    <h3 className="lhh-list-title">{c.title} {c.subtitle}</h3>
                    <p className="lhh-list-desc">
                      {c.descLine1} • {c.descLine2}
                    </p>
                    <div className="lhh-list-meta-row flex flex-wrap items-center gap-2">
                      <span className="line-through text-slate-400 font-semibold text-xs">Market: {c.marketPrice || 'Rs 6,000'}</span>
                      <span className="text-emerald-600 font-black text-xs sm:text-sm bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">Fee: {c.courseFee}</span>
                      <span className="lhh-meta-pill ctc">{c.salaryRange}</span>
                      <span className="lhh-meta-pill tag">{c.statusTag}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="lhh-list-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(c.id);
                    }}
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* 4 Courses per Line on Desktop + Bigger Video Dome + Smaller Course Name */
        .scd-pots-4grid {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          gap: 18px !important;
          padding: 4px 2px 24px !important;
          margin-top: -6px !important;
          background: transparent !important;
          align-items: stretch !important;
        }
        @media (max-width: 1080px) {
          .scd-pots-4grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 640px) {
          .scd-pots-4grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        /* Video Dome - Bigger as requested (175px) */
        .scd-pots-4grid .scd-pot-holo-dome {
          height: 175px !important;
          border-radius: 28px 28px 18px 18px !important;
        }

        /* Course Name - Smaller as requested (13.5px) */
        .scd-pots-4grid .scd-pot-title {
          font-size: 13.5px !important;
          font-weight: 850 !important;
          line-height: 1.25 !important;
          margin: 3px 0 2px !important;
          min-height: 34px !important;
          text-align: center !important;
        }

        .scd-pots-4grid .scd-pot-top-rim {
          height: 32px !important;
          width: 95% !important;
        }
        .scd-pots-4grid .scd-pot-cylinder-body {
          min-height: 200px !important;
          margin-top: -15px !important;
          padding: 16px 12px 14px !important;
          background: #ffffff !important;
          border-left: 2px solid var(--pot-neon) !important;
          border-right: 2px solid var(--pot-neon) !important;
          border-bottom: 2.5px solid var(--pot-neon) !important;
          box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 0 16px rgba(var(--pot-neon-rgb), 0.22) !important;
          gap: 7px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
        }
        .scd-pots-4grid .scd-pot-top-tags {
          gap: 4px !important;
          margin-bottom: 2px !important;
        }
        .scd-pots-4grid .scd-pot-status-pill,
        .scd-pots-4grid .scd-pot-ctc-pill {
          font-size: 8.5px !important;
          padding: 2px 7px !important;
        }
        .scd-pots-4grid .scd-pot-bottom-actions-row {
          margin-top: 6px !important;
          width: 100% !important;
        }
        .scd-pots-4grid .scd-pot-circle-arrow-btn {
          height: 32px !important;
          padding: 6px 12px !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          border-radius: 999px !important;
          width: 100% !important;
        }
        .scd-pots-4grid .scd-pot-metallic-plinth {
          height: 18px !important;
          margin-top: -6px !important;
        }
        .scd-pots-4grid .scd-pot-bottom-neon-ring {
          height: 14px !important;
        }
      `}</style>

    </section>
  );
};

export default CareerFocusedCoursesSection;
