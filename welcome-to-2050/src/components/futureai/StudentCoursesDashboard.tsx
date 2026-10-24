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
import { CareerCourseCard } from './CareerCourseCard';
import { CAREER_COURSES_12 } from '../../data/careerCourses12';
import './LearnerHomeHub.css';

export interface StudentCoursesDashboardProps {
  userName: string;
  isNewStudentMode?: boolean;
  onOpenDataAnalystCourse: () => void;
  onOpenDataScienceCourse?: () => void;
  onOpenMlEngineeringCourse?: () => void;
  onOpenDeepLearningCourse?: () => void;
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
  onOpenDataScienceCourse,
  onOpenMlEngineeringCourse,
  onOpenDeepLearningCourse,
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

  // Continuous Typewriter effect for "Get Career-Ready."
  const careerReadyTargetText = 'Get Career-Ready.';
  const [typewriterText, setTypewriterText] = useState(careerReadyTargetText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(careerReadyTargetText.length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < careerReadyTargetText.length) {
      timeout = setTimeout(() => {
        setTypewriterText(careerReadyTargetText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && charIndex === careerReadyTargetText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypewriterText(careerReadyTargetText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 450);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, careerReadyTargetText]);

  const visibleCourses = ALL_PLATFORM_COURSES.filter((c) => {
    if (categoryTab !== 'all' && c.category !== categoryTab) return false;
    if (filter === 'in-progress') return c.progress > 0;
    if (filter === 'not-started') return c.progress === 0;
    if (filter === 'completed') return c.progress === 100;
    return true;
  });

  const handleCourseClick = (c: { id: string; title?: string; fullName?: string }) => {
    playClick();
    if (c.id === 'data-analyst-genai') {
      onOpenDataAnalystCourse();
    } else if (c.id === 'data-science-agentic-ai') {
      if (onOpenDataScienceCourse) onOpenDataScienceCourse();
      else onOpenLockedCourse(c.fullName || c.title || 'Data Science & Agentic AI');
    } else if (c.id === 'ml-engineering') {
      if (onOpenMlEngineeringCourse) onOpenMlEngineeringCourse();
      else onOpenLockedCourse(c.fullName || c.title || 'Machine Learning Engineering');
    } else if (c.id === 'deep-learning') {
      if (onOpenDeepLearningCourse) onOpenDeepLearningCourse();
      else onOpenLockedCourse(c.fullName || c.title || 'Deep Learning');
    } else {
      onOpenLockedCourse(c.fullName || c.title || 'Course');
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
    } else if (c.id === 'data-science-agentic-ai') {
      if (onOpenDataScienceCourse) onOpenDataScienceCourse();
      else onOpenLockedCourse(c.fullName || c.title || 'Data Science & Agentic AI');
    } else if (c.id === 'ml-engineering') {
      if (onOpenMlEngineeringCourse) onOpenMlEngineeringCourse();
      else onOpenLockedCourse(c.fullName || c.title || 'Machine Learning Engineering');
    } else if (c.id === 'deep-learning') {
      if (onOpenDeepLearningCourse) onOpenDeepLearningCourse();
      else onOpenLockedCourse(c.fullName || c.title || 'Deep Learning');
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
          alt="Future IT Industries Campus"
          className="scd-nhb-bg-img"
        />

        {/* Soft Glass / Light Gradient Overlay */}
        <div className="scd-nhb-gradient-overlay" />

        {/* Left Native Interactive Content */}
        <div className="scd-nhb-content">
          {/* Eyebrow Pill */}
          <div className="scd-future-eyebrow-pill">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>YOUR FUTURE IN AI STARTS HERE</span>
          </div>

          {/* Main Headline - Short, Bold, High-Impact */}
          <h1 className="scd-future-hero-hl">
            Learn AI. Build Real Skills.{' '}
            <span className="scd-future-hero-hl-gradient inline-block">
              {typewriterText}
              <span className="inline-block w-[3px] h-[0.82em] ml-1 bg-gradient-to-b from-[#0284c7] via-[#4f46e5] to-[#9333ea] align-middle animate-pulse rounded-full" />
            </span>{' '}
            <span className="inline-block hover:scale-125 transition-transform duration-300">🚀</span>
          </h1>

          {/* Subtitle - One Punchy Line */}
          <p className="scd-future-hero-sub">
            Master Analytics, Data Science, ML &amp; AI Engineering through practical industry tracks.
          </p>

          {/* Luxury Floating Feature Pills - Short & Crisp */}
          <div className="scd-future-pills-row">
            <span className="scd-future-pill">🎯 <strong>Internships</strong></span>
            <span className="scd-future-pill">📜 <strong>Certificates &amp; LOR</strong></span>
            <span className="scd-future-pill">🏭 <strong>Industrial Training</strong></span>
            <span className="scd-future-pill">💻 <strong>28+ Live Projects</strong></span>
            <span className="scd-future-pill">⌨️ <strong>Coding Practice</strong></span>
            <span className="scd-future-pill">🤖 <strong>AI Mock Interviews</strong></span>
            <span className="scd-future-pill">🚀 <strong>Placement Support</strong></span>
            <span className="scd-future-pill">🤝 <strong>700+ Partners</strong></span>
          </div>

          {/* CTA Row */}
          <div className="scd-future-cta-row">
            <button
              type="button"
              onClick={() => {
                playClick();
                const el = document.getElementById('learning-modules-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="scd-future-explore-btn"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            <span className="scd-future-tagline">
              *Learn Today. Earn Tomorrow.*
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
            {CAREER_COURSES_12.map((c) => (
              <CareerCourseCard
                key={c.id}
                {...c}
                onClick={() => handleCourseClick(c)}
              />
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
