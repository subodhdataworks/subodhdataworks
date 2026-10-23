import React, { useState, useEffect } from 'react';
import {
  Layers,
  LayoutGrid,
  List,
  Play,
  Gamepad2,
  FileText,
  Folder,
  BookOpen,
  Gift,
  Award,
  Scroll,
  ShieldCheck,
  FileCheck,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Brain,
  BarChart3,
  Bot,
  Lock,
  Briefcase,
  GraduationCap,
  Users
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { RealSuccessStoriesShowcase } from './RealSuccessStoriesShowcase';
import { ALL_PLATFORM_COURSES, PlatformCourseItem } from '../../data/allPlatformCourses';
import './LearnerHomeHub.css';

export interface StudentCoursesDashboardProps {
  userName: string;
  isNewStudentMode?: boolean;
  onOpenDataAnalystCourse: () => void;
  onOpenLockedCourse: (courseTitle: string) => void;
  onOpenPythonDirect?: () => void;
  onOpenMockInterview?: () => void;
  onOpenGameArena?: () => void;
  onOpenAdvisor?: () => void;
}

export type CourseFilterType = 'all' | 'in-progress' | 'not-started' | 'completed';
export type CourseViewModeType = 'grid' | 'list';

interface FlagshipCourseItem {
  id: string;
  badgeNum: number;
  statusTag: string;
  title: string;
  fullName: string;
  descLine1: string;
  descLine2: string;
  salaryRange: string;
  courseFee: string;
  marketPrice?: string;
  payAfterJob?: string;
  modulesCount: string;
  lessonsText: string;
  image: string;
  video?: string;
  progress: number;
  btnText: string;
  isUnlocked: boolean;
  themeColor: string;
  btnGradient: string;
  badgeBg: string;
  skillsList: string[];
}

export const StudentCoursesDashboard: React.FC<StudentCoursesDashboardProps> = ({
  userName = 'Subodh Kumar',
  onOpenDataAnalystCourse,
  onOpenLockedCourse,
  onOpenPythonDirect,
  onOpenMockInterview,
  onOpenGameArena,
  onOpenAdvisor,
}) => {
  const { playClick } = useThemeAccent();
  const [filter, setFilter] = useState<CourseFilterType>('all');
  const [categoryTab, setCategoryTab] = useState<'all' | 'flagship' | 'core' | 'ai'>('all');
  const [viewMode, setViewMode] = useState<CourseViewModeType>('grid');

  // Continuous Typewriter effect for "Pay After Placement."
  const fullPapText = 'Pay After Placement.';
  const [papDisplayText, setPapDisplayText] = useState(fullPapText);
  const [isPapDeleting, setIsPapDeleting] = useState(false);
  const [papCharIndex, setPapCharIndex] = useState(fullPapText.length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isPapDeleting && papCharIndex < fullPapText.length) {
      timeout = setTimeout(() => {
        setPapDisplayText(fullPapText.slice(0, papCharIndex + 1));
        setPapCharIndex((prev) => prev + 1);
      }, 95);
    } else if (!isPapDeleting && papCharIndex === fullPapText.length) {
      timeout = setTimeout(() => {
        setIsPapDeleting(true);
      }, 2500);
    } else if (isPapDeleting && papCharIndex > 0) {
      timeout = setTimeout(() => {
        setPapDisplayText(fullPapText.slice(0, papCharIndex - 1));
        setPapCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isPapDeleting && papCharIndex === 0) {
      timeout = setTimeout(() => {
        setIsPapDeleting(false);
      }, 450);
    }
    return () => clearTimeout(timeout);
  }, [papCharIndex, isPapDeleting, fullPapText]);

  const visibleCourses = ALL_PLATFORM_COURSES.filter((c) => {
    if (categoryTab !== 'all' && c.category !== categoryTab) return false;
    if (filter === 'in-progress') return c.progress > 0;
    if (filter === 'not-started') return c.progress === 0;
    if (filter === 'completed') return c.progress === 100;
    return true;
  });

  const handleCourseClick = (c: PlatformCourseItem) => {
    playClick();
    if (c.id === 'data-analyst-genai') {
      onOpenDataAnalystCourse();
    } else {
      onOpenLockedCourse(c.fullName || c.title);
    }
  };

  const handleSubAction = (
    c: PlatformCourseItem,
    type: 'modules' | 'games' | 'interview' | 'project'
  ) => {
    playClick();
    if (c.id === 'data-analyst-genai') {
      if (type === 'modules') onOpenDataAnalystCourse();
      else if (type === 'games') onOpenGameArena ? onOpenGameArena() : onOpenDataAnalystCourse();
      else if (type === 'interview') onOpenMockInterview ? onOpenMockInterview() : onOpenDataAnalystCourse();
      else if (type === 'project') onOpenDataAnalystCourse();
    } else {
      onOpenLockedCourse(c.fullName || c.title);
    }
  };

  return (
    <div className="lhh-wrapper">
      {/* =========================================================================
          1. NATIVE 1:1 GENERATED TOP HERO BANNER (Matches Reference Image)
          ========================================================================= */}
      <section className="scd-native-hero-banner">
        {/* Background Image: Future IT Industries Campus Zoomed Out */}
        <img
          src="/images/future_it_industries_campus_zoomed_out.jpg"
          alt="Future IT Industries Campus Zoomed Out"
          className="scd-nhb-bg-img"
        />

        {/* Soft Glass / Light Gradient Overlay on left */}
        <div className="scd-nhb-gradient-overlay" />

        {/* Left Native Interactive Content */}
        <div className="scd-nhb-content">
          {/* 1. Main Headline with Floating Animation & High Style */}
          <h1 className="scd-nhb-headline scd-floating-headline">
            <span className="scd-nhb-hl-title">Learn AI &amp; Data Skills.</span>
            <span className="scd-nhb-hl-sub">
              Get Job-Ready.{' '}
              <span className="scd-nhb-future scd-glow-shimmer scd-pap-typewriter-text">
                {papDisplayText}
                <span className="scd-pap-typewriter-cursor">|</span>
              </span>{' '}
              <span className="scd-nhb-trend-icon">🚀</span>
            </span>
          </h1>

          {/* 2. High-Converting Limited-Time Offer Ribbon directly under Headline */}
          <div className="scd-nhb-offer-capsule scd-floating-offer">
            <div className="scd-nhb-offer-tag">
              <span className="scd-nhb-offer-gift">🎁</span>
              <span className="scd-nhb-offer-label">LIMITED-TIME OFFER:</span>
              <span className="scd-nhb-offer-headline">
                Enroll in All 4 Courses for Just <strong className="scd-nhb-offer-price">₹987</strong>
              </span>
            </div>
            <div className="scd-nhb-offer-sep" />
            <div className="scd-nhb-offer-pap">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Placement Support with <strong className="scd-nhb-offer-pap-amt">700+ Hiring Partners</strong></span>
            </div>
          </div>

          {/* 3. Subtitle */}
          <p className="scd-nhb-subtitle">
            Master Data Analytics, Data Science, ML &amp; AI Engineering with coding practice, real projects &amp; AI HR interviews.
          </p>

          {/* 4. 4 Interactive Glassmorphism Course Cards with Course Fee */}
          <div className="scd-nhb-cards-row">
            {/* Card 1: Data Analyst with GenAI */}
            <div
              className="scd-nhb-mini-card scd-card-blue"
              onClick={() => {
                playClick();
                onOpenDataAnalystCourse();
              }}
            >
              <div className="scd-nhb-card-icon-wrap icon-blue">
                <BarChart3 className="w-4 h-4 text-sky-600" />
              </div>
              <div className="scd-nhb-card-text">
                <span className="scd-nhb-card-title">Data Analyst with GenAI</span>
                <span className="scd-nhb-card-ctc ctc-blue scd-card-slashed-daam">Rs 18,999</span>
              </div>
            </div>

            {/* Card 2: Data Science & Agentic AI */}
            <div
              className="scd-nhb-mini-card scd-card-purple"
              onClick={() => {
                playClick();
                onOpenLockedCourse('Data Science & Agentic AI Mastery Program');
              }}
            >
              <div className="scd-nhb-card-icon-wrap icon-purple">
                <Brain className="w-4 h-4 text-purple-600" />
              </div>
              <div className="scd-nhb-card-text">
                <span className="scd-nhb-card-title">Data Science &amp; Agentic AI</span>
                <span className="scd-nhb-card-ctc ctc-purple scd-card-slashed-daam">Rs 29,999</span>
              </div>
            </div>

            {/* Card 3: ML Engineering */}
            <div
              className="scd-nhb-mini-card scd-card-amber"
              onClick={() => {
                playClick();
                onOpenLockedCourse('Machine Learning Engineering & MLOps Program');
              }}
            >
              <div className="scd-nhb-card-icon-wrap icon-amber">
                <Cpu className="w-4 h-4 text-amber-600" />
              </div>
              <div className="scd-nhb-card-text">
                <span className="scd-nhb-card-title">ML Engineering</span>
                <span className="scd-nhb-card-ctc ctc-amber scd-card-slashed-daam">Rs 39,999</span>
              </div>
            </div>

            {/* Card 4: AI Engineering */}
            <div
              className="scd-nhb-mini-card scd-card-emerald"
              onClick={() => {
                playClick();
                onOpenLockedCourse('Full-Stack AI & LLM Engineering Program');
              }}
            >
              <div className="scd-nhb-card-icon-wrap icon-emerald">
                <Bot className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="scd-nhb-card-text">
                <span className="scd-nhb-card-title">AI Engineering</span>
                <span className="scd-nhb-card-ctc ctc-emerald scd-card-slashed-daam">Rs 49,999</span>
              </div>
            </div>
          </div>

          {/* 5. Features Highlights Row */}
          <div className="scd-nhb-features-row">
            <span className="scd-nhb-feature-chip">
              <Folder className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>28 Real-World Projects</span>
            </span>
            <span className="scd-nhb-feature-chip">
              <Gamepad2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>Coding Practice</span>
            </span>
            <span className="scd-nhb-feature-chip">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>AI Mock Interviews</span>
            </span>
            <span className="scd-nhb-feature-chip">
              <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Placement Support</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. "YOUR CAREER COURSES (4 FLAGSHIP PROGRAMS)" HEADER & CONTROLS
          ========================================================================= */}
      <section className="lhh-modules-section scd-transparent-pots-section" id="learning-modules-section">
        <div className="lhh-section-header">
          <div className="lhh-section-left">
            <div className="lhh-layer-icon-box">
              <Layers className="w-5 h-5 text-blue-600" />
            </div>
            <div className="lhh-section-title-wrap">
              <h2 className="lhh-section-title">All Career-Focused Industry Courses ({visibleCourses.length})</h2>

            </div>
          </div>

          <div className="lhh-controls-group">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
              {[
                { id: 'all', label: `All (${ALL_PLATFORM_COURSES.length})` },
                { id: 'flagship', label: `Flagship Tracks (${ALL_PLATFORM_COURSES.filter(c => c.category === 'flagship').length})` },
                { id: 'core', label: `Core Analytics (${ALL_PLATFORM_COURSES.filter(c => c.category === 'core').length})` },
                { id: 'ai', label: `AI & Next-Gen (${ALL_PLATFORM_COURSES.filter(c => c.category === 'ai').length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    playClick();
                    setCategoryTab(tab.id as any);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    categoryTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

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

        {/* =========================================================================
            3. 4 FLAGSHIP COURSES — 3D CYLINDRICAL GLOWING NEON POTS (NO WHITE BG)
            ========================================================================= */}
        {viewMode === 'grid' ? (
          <div className="scd-pots-4grid">
            {visibleCourses.map((c) => (
              <article
                key={c.id}
                className={`scd-pot-card scd-pot-${c.potTheme}`}
                onClick={() => handleCourseClick(c)}
              >
                {/* ===============================================================
                    TOP HOLOGRAM / VIDEO DOME FLOWING UP OUT OF THE POT
                    =============================================================== */}
                <div className="scd-pot-flow-stage">
                  {/* Upward flowing energy rays & particles from the pot mouth */}
                  <div className="scd-pot-rising-energy" />
                  <div className="scd-pot-particles">
                    <span className="scd-pt p1" />
                    <span className="scd-pt p2" />
                    <span className="scd-pt p3" />
                    <span className="scd-pt p4" />
                    <span className="scd-pt p5" />
                    <span className="scd-pt p6" />
                  </div>

                  {/* Translucent 3D Arched Hologram Shield emerging from the pot */}
                  <div className="scd-pot-holo-dome">
                    <img
                      src={c.holoImage || c.image}
                      alt={c.title}
                      loading="lazy"
                      decoding="async"
                      className="scd-pot-holo-img"
                    />
                    {/* Holographic inner arch frame & upward energy blend */}
                    <div className="scd-pot-holo-glass-frame" />
                  </div>
                </div>

                {/* ===============================================================
                    BOTTOM 3D CYLINDRICAL NEON POT (Rim + Cylinder Body + Base)
                    =============================================================== */}
                <div className="scd-pot-cylinder-wrap">
                  {/* 1. Glowing Elliptical Top Rim (Mouth of the Pot where Hologram flows from) */}
                  <div className="scd-pot-top-rim">
                    <div className="scd-pot-mouth-vortex" />
                    <div className="scd-pot-rim-neon-ring" />
                  </div>

                  {/* 2. 3D Cylindrical Metallic Body */}
                  <div className="scd-pot-cylinder-body">
                    {/* Vertical Neon Side Ribs (Left & Right) */}
                    <span className="scd-pot-side-rib left" />
                    <span className="scd-pot-side-rib right" />

                    {/* Status & CTC Pill inside Cylinder */}
                    <div className="scd-pot-top-tags">
                      <span className="scd-pot-status-pill">{c.statusTag}</span>
                      <span className="scd-pot-ctc-pill">{c.salaryRange}</span>
                    </div>

                    {/* Centered Course Title — Two-Tone 'Brighter Future' Style */}
                    <h3 className="scd-pot-title">
                      <span className="scd-title-brighter">{c.title}</span>{' '}
                      {c.subtitle && <span className="scd-title-future">{c.subtitle}</span>}
                    </h3>

                    {/* Centered Short Description */}
                    <p className="scd-pot-desc">{c.shortDesc}</p>

                    {/* Centered Skills Mini Pills */}
                    <div className="scd-pot-skills-row">
                      {c.skillsList.map((s) => (
                        <span key={s} className="scd-pot-skill-tag">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Horizontal Action Row: Left Slashed Price (Red Cut) + Right Start Learning Button */}
                    <div className="scd-pot-bottom-actions-row">
                      <div className="scd-pot-slashed-price-wrap flex flex-col gap-0.5">
                        <div className="flex items-center gap-1"><span className="line-through text-slate-400 font-semibold text-[9px]">{c.marketPrice}</span><span className="text-orange-500 font-bold text-[9px]">PAJ: {c.payAfterJob}</span></div>
                        <span className="text-emerald-700 font-black text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 whitespace-nowrap">Now: {c.courseFee}</span>
                      </div>

                      <button
                        type="button"
                        className="scd-pot-circle-arrow-btn"
                        aria-label="Start Learning"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCourseClick(c);
                        }}
                      >
                        <span className="scd-pot-unlock-text">Start Learning</span>
                        <span className="scd-pot-arrow-icon-circle">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.8]" />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* 3. Glowing Bottom Neon Ring & 3D Stepped Metallic Base Pedestal */}
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
          /* List View */
          <div className="lhh-modules-list">
            {visibleCourses.map((c) => (
              <div
                key={c.id}
                className="lhh-list-card"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector<HTMLVideoElement>('video');
                  if (vid) vid.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector<HTMLVideoElement>('video');
                  if (vid) vid.pause();
                }}
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
                    onClick={() => handleCourseClick(c)}
                  />
                ) : (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="lhh-list-thumb"
                    onClick={() => handleCourseClick(c)}
                  />
                )}
                <div className="lhh-list-info">
                  <h3 className="lhh-list-title">{c.title}</h3>
                  <p className="lhh-list-desc">
                    {c.descLine1} • {c.descLine2}
                  </p>
                  <div className="lhh-list-meta flex flex-wrap items-center gap-2">
                    <span style={{ color: c.themeColor }}>
                      {c.modulesCount} ({c.lessonsText})
                    </span>
                    <span>•</span>
                    <span className="line-through text-slate-400 font-semibold text-xs">{c.marketPrice}</span>
                    <span>•</span>
                    <span className="text-orange-500 font-semibold text-xs">PAJ: {c.payAfterJob}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-black text-xs bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Now: {c.courseFee}</span>
                    <span>•</span>
                    <span className="text-slate-600 font-semibold text-xs">CTC: {c.salaryRange}</span>
                    <span>•</span>
                    <span style={{ color: c.progress > 0 ? c.themeColor : '#94a3b8' }}>
                      Progress: {c.progress}%
                    </span>
                  </div>
                </div>
                <div className="lhh-list-actions">
                  <button
                    type="button"
                    className="lhh-action-btn lhh-list-btn"
                    style={{ background: c.btnGradient }}
                    onClick={() => handleCourseClick(c)}
                  >
                    {c.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =========================================================================
            SLIM PROMOTIONAL OFFER BANNER STRIP (DIRECTLY UNDER 4 COURSES)
            Matches media_1792140864467_fdb63c4c.png 1:1
            ========================================================================= */}
        <div className="scd-slim-offer-strip" onClick={() => handleCourseClick(visibleCourses[0])}>
          {/* TOP TIER: Glossy Cyan/White/Purple Gradient Card */}
          <div className="scd-sos-top-card">
            {/* Left: 3D Luxury Purple Gift Box with Golden Bow and Sparks */}
            <div className="scd-sos-gift-col">
              <img
                src="/images/luxury_purple_gift_box.png"
                alt="3D Luxury Gift Box"
                className="scd-sos-gift-img"
              />
            </div>

            {/* Left-Center: Limited-Time Offer Pill + Headline + Subtitle */}
            <div className="scd-sos-title-col">
              <div className="scd-sos-limited-pill">
                <span className="scd-sos-pill-clock">⏰</span>
                <span className="scd-sos-pill-text">LIMITED-TIME OFFER</span>
              </div>
              <div className="scd-sos-main-heading">
                <span className="scd-sos-headline-lead">Get All 4 Courses for Just</span>{' '}
                <span className="scd-sos-price-989">₹987</span>
              </div>
              <p className="scd-sos-subtitle">
                Access Data Analyst, Data Science, ML Engineering, AI Engineering &amp; All 21 Courses
              </p>
            </div>

            {/* Center Divider */}
            <div className="scd-sos-vdivider" />

            {/* Center-Right: Pay After Job Offer */}
            <div className="scd-sos-pap-col">
              <div className="scd-sos-pap-header">
                <span className="scd-sos-briefcase-icon">💼</span>
                <div className="scd-sos-pap-title">
                  <span>Pay After</span>
                  <span>Job Offer</span>
                </div>
              </div>
              <div className="scd-sos-pap-price">700+</div>
              <div className="scd-sos-pap-sub">Hiring Partners</div>
            </div>

            {/* Right: Golden Unlock Capsule Button */}
            <div className="scd-sos-btn-col">
              <button
                type="button"
                className="scd-sos-unlock-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  playClick();
                  handleCourseClick(visibleCourses[0]);
                }}
              >
                <Lock className="w-5 h-5 fill-slate-900 stroke-slate-900" />
                <span>UNLOCK ALL COURSES ₹987</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* BOTTOM TIER: Docked Dark Navy Blue Strip with 5 Feature Icons */}
          <div className="scd-sos-bottom-strip">
            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-blue">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Full Access</strong>
                <span>to All Courses</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-pink">
                <FileText className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Real-World</strong>
                <span>Projects</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-green">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Coding Practice</strong>
                <span>&amp; Practice</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-yellow">
                <Users className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>AI Mock</strong>
                <span>Interviews</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-cyan">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Placement</strong>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT WILL YOU GET? (Full Certificates, No Blur, No Cut)
         ============================================================ */}
      <section className="lhh-wyg-full-section">
        <div className="lhh-pcomb-header">
          <div className="lhh-pcomb-icon-box lhh-pcomb-icon-blue">
            <Gift size={22} color="#fff" />
          </div>
          <div>
            <h2 className="lhh-pcomb-title">What Will You Get?</h2>
            <p className="lhh-pcomb-subtitle">
              Not just a course, but a complete career experience with Future IT Industry.
            </p>
          </div>
        </div>

        <div className="lhh-wyg-exact-grid">
          <div className="lhh-wyg-exact-card lhh-wyg-card-intern">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-blue">
                <Award size={18} />
                <span>3 Month Internship</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Work on real projects, gain industry experience and learn from mentors.
              </p>
              <div className="lhh-wyg-pill-badge lhh-pill-blue">3 Months</div>
            </div>
            <div className="lhh-wyg-exact-img-box">
              <img
                src="/images/dashboard/internship_student.jpg"
                alt="3 Month Internship"
                className="lhh-wyg-photo"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-cert-green">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-green">
                <FileCheck size={18} />
                <span>Internship Certificate</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Receive an official internship certificate from Future IT Industry after successful completion.
              </p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/cert_internship_exact.jpg"
                alt="Internship Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-letter-purple">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-purple">
                <Scroll size={18} />
                <span>Recommendation Letter</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Get a professional recommendation letter based on your performance during the internship.
              </p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/letter_recommendation_exact.jpg"
                alt="Recommendation Letter"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          <div className="lhh-wyg-exact-card lhh-wyg-card-cert-gold">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-gold">
                <ShieldCheck size={18} />
                <span>Course Completion Certificate</span>
              </div>
              <p className="lhh-wyg-exact-desc">
                Complete the course successfully and receive a verified certificate from Future IT Industry.
              </p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/cert_completion_exact.jpg"
                alt="Course Completion Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REAL PEOPLE. REAL SUCCESS STORIES.
         ============================================================ */}
      <RealSuccessStoriesShowcase
        onOpenRole={(role) => onOpenLockedCourse(role)}
        onOpenPartnersModal={() => onOpenDataAnalystCourse()}
        onExploreProgram={() => onOpenDataAnalystCourse()}
      />
    </div>
  );
};
