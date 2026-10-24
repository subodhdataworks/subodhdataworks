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
            DESKTOP VIEW: 4 HIGH-PAYING INDUSTRY COURSES (CYLINDRICAL NEON POTS)
            ========================================================================= */}
        <div className="hidden md:block">
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
              <div className="scd-pots-5grid home-compact-pots">
                {desktopPotCourses.map((c) => (
                  <article
                    key={c.id}
                    className={`scd-pot-card scd-pot-${c.potTheme}`}
                    onClick={() => handleCourseClick(c.id)}
                    onMouseEnter={playHover}
                  >
                    <div className="scd-pot-flow-stage">
                      <div className="scd-pot-rising-energy" />
                      <div className="scd-pot-particles">
                        <span className="scd-pt p1" />
                        <span className="scd-pt p2" />
                        <span className="scd-pt p3" />
                        <span className="scd-pt p4" />
                        <span className="scd-pt p5" />
                        <span className="scd-pt p6" />
                      </div>

                      <div className="scd-pot-holo-dome">
                        <img
                          src={c.holoImage || c.image}
                          alt={c.title}
                          loading="lazy"
                          decoding="async"
                          className="scd-pot-holo-img"
                        />
                        <div className="scd-pot-holo-glass-frame" />
                      </div>
                    </div>

                    <div className="scd-pot-cylinder-wrap">
                      <div className="scd-pot-top-rim">
                        <div className="scd-pot-mouth-vortex" />
                        <div className="scd-pot-rim-neon-ring" />
                      </div>

                      <div className="scd-pot-cylinder-body">
                        <span className="scd-pot-side-rib left" />
                        <span className="scd-pot-side-rib right" />

                        <div className="scd-pot-top-tags">
                          <span className="scd-pot-status-pill">{c.statusTag}</span>
                          <span className="scd-pot-ctc-pill">{c.salaryRange}</span>
                        </div>

                        <h3 className="scd-pot-title">
                          <span className="scd-title-brighter">{c.title}</span>{' '}
                          <span className="scd-title-future">{c.subtitle}</span>
                        </h3>

                        <p className="scd-pot-desc">{c.shortDesc}</p>

                        <div className="scd-pot-skills-row">
                          {c.skillsList.map((s) => (
                            <span key={s} className="scd-pot-skill-tag">
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="scd-pot-bottom-actions-row">
                          <div className="scd-pot-slashed-price-wrap flex items-center gap-1.5">
                            <span className="scd-pot-slashed-daam" title="Suggested average market price">{c.marketPrice || 'Rs 6,000'}</span>
                            <span className="text-emerald-700 font-black text-xs sm:text-sm bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300 shadow-2xs whitespace-nowrap">{c.courseFee}</span>
                          </div>
                          <button
                            type="button"
                            className="scd-pot-circle-arrow-btn cursor-pointer w-full justify-between"
                            aria-label="Start Learning"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCourseClick(c.id);
                            }}
                          >
                            <span className="scd-pot-unlock-text">Explore Curriculum</span>
                            <span className="scd-pot-arrow-icon-circle">
                              <ArrowRight className="w-3.5 h-3.5 stroke-[2.8]" />
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="scd-pot-bottom-base">
                        <div className="scd-pot-bottom-neon-ring" />
                        <div className="scd-pot-metallic-plinth" />
                        <div className="scd-pot-floor-glow" />
                      </div>
                    </div>
                  </article>
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

        {/* =========================================================================
            MOBILE VIEW: COMPLETE 12 COURSES SHOWCASE IN ULTRA-PREMIUM STYLE
            ========================================================================= */}
        <div className="block md:hidden mt-2 mb-8">
          
          {/* Header Title with Layers icon */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-tight">
                All Courses ({courses.length})
              </h3>
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Industry Ready
            </span>
          </div>

          {/* Category Tabs Scrollbar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-4 scrollbar-none px-1">
            {[
              { id: 'all', label: `All (${courses.length})` },
              { id: 'flagship', label: 'Flagship Tracks (' + courses.filter(c => c.category === 'flagship').length + ')' },
              { id: 'core', label: 'Core Analytics (' + courses.filter(c => c.category === 'core').length + ')' },
              { id: 'ai', label: 'AI & Next-Gen (' + courses.filter(c => c.category === 'ai').length + ')' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  playClick();
                  setMobileCategory(tab.id as MobileCourseCategoryType);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer ${
                  mobileCategory === tab.id
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 12 Courses Premium Cards */}
          <div className="space-y-2 px-1">
            {filteredMobileCourses.map((c) => (
              <article
                key={c.id}
                onClick={() => handleCourseClick(c.id)}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden relative cursor-pointer active:scale-[0.99]"
              >
                {/* 16:9 Thumbnail / Video Header with floating badges */}
                <div className="relative aspect-[16/6] w-full overflow-hidden bg-slate-950">
                  <img
                    src={c.image || c.holoImage}
                    alt={c.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/35 pointer-events-none" />

                  {/* Top Tags Overlay */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wide uppercase bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {c.statusTag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-tight bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xs">
                      {c.salaryRange}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[10px] font-bold z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">{c.lessonsText}</span>
                      <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">{c.projectsText}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4">
                  <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                    <span>{c.title}</span> <span className="text-blue-600">{c.subtitle}</span>
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 line-clamp-2 leading-relaxed">
                    {c.shortDesc}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {c.skillsList.map((skill: string) => (
                      <span
                        key={skill}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-slate-400 line-through font-bold">
                        {c.marketPrice || 'Rs 6,000'}
                      </span>
                      <span className="text-xs sm:text-sm font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {c.courseFee}
                      </span>
                    </div>



                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(c.id);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md shadow-blue-500/25 flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        /* Compact Responsive Sizing for Home Page */
        .home-compact-pots {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        @media (min-width: 1024px) {
          .home-compact-pots .scd-pot-card {
            transform: scale(0.92);
            transform-origin: top center;
            margin-bottom: -20px;
          }
          .home-compact-pots .scd-pot-card:hover {
            transform: scale(0.95) translateY(-6px);
          }
        }
      `}</style>

    </section>
  );
};

export default CareerFocusedCoursesSection;
