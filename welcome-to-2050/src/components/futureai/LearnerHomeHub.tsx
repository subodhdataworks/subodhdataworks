import React, { useState } from 'react';
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
  Briefcase,
  Award,
  Scroll,
  BarChart3,
  PieChart,
  TrendingUp,
  Workflow,
  LineChart,
  Atom,
  Brain,
  Server,
  Database,
  Users,
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Heart,
  Clock,
  Star
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import { RealSuccessStoriesShowcase } from './RealSuccessStoriesShowcase';
import './LearnerHomeHub.css';

export interface LearnerHomeHubProps {
  userName: string;
  isNewStudentMode?: boolean;
  onOpenPython: () => void;
  onOpenLockedModule: (moduleTitle: string) => void;
  onOpenMockInterview?: () => void;
  onOpenAdvisor?: () => void;
  onOpenVideo?: (moduleId?: string) => void;
  onOpenGame?: (moduleId?: string) => void;
  onOpenQuiz?: (moduleId?: string) => void;
  onOpenProject?: (moduleId?: string) => void;
  onBackToCourses?: () => void;
}

export type ModuleFilterType = 'all' | 'in-progress' | 'not-started' | 'completed';
export type ViewModeType = 'grid' | 'list';

interface CoreModuleItem {
  id: string;
  badgeNum: number;
  ribbonText?: string;
  ribbonGradient?: string;
  title: string;
  fullName: string;
  descLine1: string;
  descLine2: string;
  tags: string[];
  image: string;
  video?: string;
  lessonsText: string;
  projectsText: string;
  progress: number;
  btnText: string;
  theme: 'blue' | 'purple' | 'green' | 'amber' | 'pink' | 'red';
  themeColor: string;
  btnGradient: string;
  iconBg: string;
  tagBg: string;
  tagColor: string;
  tagBorder: string;
}

export const LearnerHomeHub: React.FC<LearnerHomeHubProps> = ({
  userName = 'Rahul Sharma',
  isNewStudentMode = true,
  onOpenPython,
  onOpenLockedModule,
  onOpenMockInterview,
  onOpenAdvisor,
  onOpenVideo,
  onOpenGame,
  onOpenQuiz,
  onOpenProject,
  onBackToCourses,
}) => {
  const { playClick } = useThemeAccent();
  const [filter] = useState<ModuleFilterType>('all');
  const [viewMode] = useState<ViewModeType>('grid');

  // Exact 9 Core Modules (5 on Row 1 + 4 Centered on Row 2) matching reference image
  const modules: CoreModuleItem[] = [
    {
      id: 'python',
      badgeNum: 1,
      ribbonText: '🔥 Most Popular',
      ribbonGradient: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
      title: 'Python',
      fullName: 'Python — Zero to Advanced',
      descLine1: 'Zero to Advanced Python with real projects,',
      descLine2: 'automation and GenAI integration.',
      tags: ['Python', 'Automation', 'GenAI', 'Projects'],
      image: '/images/dashboard/poster_python.jpg',
      video: '/videos/card_video_python.mp4',
      lessonsText: '260 Lessons',
      projectsText: '15+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'blue',
      themeColor: '#0284c7',
      btnGradient: 'linear-gradient(90deg, #0284c7 0%, #0070f3 100%)',
      iconBg: 'rgba(2, 132, 199, 0.08)',
      tagBg: '#eff6ff',
      tagColor: '#0284c7',
      tagBorder: '#bfdbfe',
    },
    {
      id: 'sql',
      badgeNum: 2,
      ribbonText: 'High Demand',
      ribbonGradient: 'linear-gradient(90deg, #7c3aed 0%, #9333ea 100%)',
      title: 'SQL',
      fullName: 'SQL — Zero to Advanced',
      descLine1: 'Zero to Advanced SQL with real-world',
      descLine2: 'databases, queries and data analysis.',
      tags: ['SQL', 'Queries', 'Data Analysis', 'Projects'],
      image: '/images/dashboard/poster_sql.jpg',
      video: '/videos/card_video_sql.mp4',
      lessonsText: '280 Lessons',
      projectsText: '20+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'purple',
      themeColor: '#7c3aed',
      btnGradient: 'linear-gradient(90deg, #7c3aed 0%, #9333ea 100%)',
      iconBg: 'rgba(124, 58, 237, 0.08)',
      tagBg: '#f5f3ff',
      tagColor: '#7c3aed',
      tagBorder: '#ddd6fe',
    },
    {
      id: 'excel',
      badgeNum: 3,
      title: 'Excel',
      fullName: 'Excel — Zero to Advanced',
      descLine1: 'Zero to Advanced Excel with formulas,',
      descLine2: 'PivotTables and business reporting.',
      tags: ['Excel', 'Formulas', 'PivotTables', 'Dashboard'],
      image: '/images/dashboard/poster_excel.jpg',
      video: '/videos/card_video_excel.mp4',
      lessonsText: '280 Lessons',
      projectsText: '20+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'green',
      themeColor: '#059669',
      btnGradient: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
      iconBg: 'rgba(5, 150, 105, 0.08)',
      tagBg: '#ecfdf5',
      tagColor: '#059669',
      tagBorder: '#a7f3d0',
    },
    {
      id: 'powerbi',
      badgeNum: 4,
      title: 'Power BI',
      fullName: 'Power BI — Zero to Advanced',
      descLine1: 'Zero to Advanced Power BI with data',
      descLine2: 'modeling, DAX and interactive dashboards.',
      tags: ['Power BI', 'DAX', 'Dashboard', 'Projects'],
      image: '/images/dashboard/poster_powerbi.jpg',
      video: '/videos/card_video_powerbi.mp4',
      lessonsText: '240 Lessons',
      projectsText: '18+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'amber',
      themeColor: '#f59e0b',
      btnGradient: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
      iconBg: 'rgba(245, 158, 11, 0.08)',
      tagBg: '#fffbeb',
      tagColor: '#d97706',
      tagBorder: '#fde68a',
    },
    {
      id: 'stats',
      badgeNum: 5,
      title: 'Statistics',
      fullName: 'Statistics — Zero to Advanced',
      descLine1: 'Learn statistics for data analysis, business',
      descLine2: 'insights and decision making.',
      tags: ['Statistics', 'Probability', 'Hypothesis', 'Analysis'],
      image: '/images/dashboard/poster_stats.jpg',
      video: '/videos/card_video_stats.mp4',
      lessonsText: '200 Lessons',
      projectsText: '15+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'pink',
      themeColor: '#ec4899',
      btnGradient: 'linear-gradient(90deg, #ec4899 0%, #d946ef 100%)',
      iconBg: 'rgba(236, 72, 153, 0.08)',
      tagBg: '#fdf2f8',
      tagColor: '#db2777',
      tagBorder: '#fbcfe8',
    },
    {
      id: 'genai',
      badgeNum: 6,
      title: 'GenAI',
      fullName: 'GenAI for Data Analytics',
      descLine1: 'Explore AI tools, prompt engineering and',
      descLine2: 'real-world applications with projects.',
      tags: ['GenAI', 'Prompt Engineering', 'AI Tools', 'Projects'],
      image: '/images/dashboard/poster_genai.jpg',
      video: '/videos/card_video_genai.mp4',
      lessonsText: '160 Lessons',
      projectsText: '12+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'green',
      themeColor: '#059669',
      btnGradient: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
      iconBg: 'rgba(5, 150, 105, 0.08)',
      tagBg: '#ecfdf5',
      tagColor: '#059669',
      tagBorder: '#a7f3d0',
    },
    {
      id: 'dsa-python',
      badgeNum: 7,
      title: 'DSA with Python',
      fullName: 'DSA with Python — Zero to Advanced',
      descLine1: 'Master data structures and algorithms with',
      descLine2: 'Python and real coding practice.',
      tags: ['DSA', 'Python', 'Problem Solving', 'Coding'],
      image: '/images/dashboard/poster_dsa_python.jpg',
      lessonsText: '180 Lessons',
      projectsText: '12+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'blue',
      themeColor: '#0284c7',
      btnGradient: 'linear-gradient(90deg, #0284c7 0%, #2563eb 100%)',
      iconBg: 'rgba(2, 132, 199, 0.08)',
      tagBg: '#eff6ff',
      tagColor: '#0284c7',
      tagBorder: '#bfdbfe',
    },
    {
      id: 'dsa-sql',
      badgeNum: 8,
      title: 'DSA with SQL',
      fullName: 'DSA with SQL — Advanced Query Problem Solving',
      descLine1: 'Advanced SQL for interviews, complex queries',
      descLine2: 'and real-world case studies.',
      tags: ['Advanced SQL', 'CTE', 'Window Functions', 'Projects'],
      image: '/images/dashboard/poster_dsa_sql.jpg',
      lessonsText: '150 Lessons',
      projectsText: '10+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'purple',
      themeColor: '#7c3aed',
      btnGradient: 'linear-gradient(90deg, #6d28d9 0%, #7c3aed 100%)',
      iconBg: 'rgba(109, 40, 217, 0.08)',
      tagBg: '#f5f3ff',
      tagColor: '#7c3aed',
      tagBorder: '#ddd6fe',
    },
    {
      id: 'real-hr-interview',
      badgeNum: 9,
      title: 'Real HR Interview Question',
      fullName: 'Real HR Interview Question — Live AI Mock Room',
      descLine1: 'Practice live HR & technical interviews with',
      descLine2: 'AI feedback and real company questions.',
      tags: ['HR Interview', 'Behavioral', 'Live Mock', 'ATS Score'],
      image: '/images/dashboard/poster_real_hr_question.jpg',
      lessonsText: '140 Lessons',
      projectsText: '10+ Projects',
      progress: 0,
      btnText: 'Start Learning →',
      theme: 'red',
      themeColor: '#ea580c',
      btnGradient: 'linear-gradient(90deg, #ea580c 0%, #f97316 100%)',
      iconBg: 'rgba(234, 88, 12, 0.08)',
      tagBg: '#fff7ed',
      tagColor: '#ea580c',
      tagBorder: '#fed7aa',
    },
  ];

  const visibleModules = modules.filter((m) => {
    if (filter === 'in-progress') return m.progress > 0;
    if (filter === 'not-started') return m.progress === 0;
    if (filter === 'completed') return m.progress === 100;
    return true;
  });

  const handleModuleAction = (m: CoreModuleItem) => {
    playClick();
    if (m.id === 'python' || m.id === 'dsa-python') {
      onOpenPython();
    } else if (m.id === 'sql' || m.id === 'dsa-sql') {
      if (typeof window !== 'undefined') window.location.hash = '#sql';
      onOpenLockedModule('__sql__');
    } else if (m.id === 'real-hr-interview') {
      if (onOpenMockInterview) {
        onOpenMockInterview();
      } else {
        if (typeof window !== 'undefined') window.location.hash = '#interview?topic=1';
      }
    } else if (m.id === 'excel') {
      if (typeof window !== 'undefined') window.location.hash = '#excel';
      onOpenLockedModule('__excel__');
    } else if (m.id === 'powerbi') {
      if (typeof window !== 'undefined') window.location.hash = '#powerbi';
      onOpenLockedModule('__powerbi__');
    } else if (m.id === 'stats') {
      if (typeof window !== 'undefined') window.location.hash = '#stats';
      onOpenLockedModule('__stats__');
    } else if (m.id === 'genai') {
      if (typeof window !== 'undefined') window.location.hash = '#genai';
      onOpenLockedModule('__genai__');
    } else {
      onOpenLockedModule(m.fullName);
    }
  };

  const handleSubAction = (m: CoreModuleItem, type: 'video' | 'games' | 'quiz' | 'project') => {
    playClick();
    if (m.id === 'python' || m.id === 'dsa-python') {
      if (type === 'video') onOpenVideo ? onOpenVideo('python') : onOpenPython();
      else if (type === 'games') onOpenGame ? onOpenGame('python') : onOpenPython();
      else if (type === 'quiz') onOpenQuiz ? onOpenQuiz('python') : onOpenPython();
      else if (type === 'project') onOpenProject ? onOpenProject('python') : onOpenPython();
    } else if (m.id === 'sql' || m.id === 'dsa-sql') {
      if (typeof window !== 'undefined') window.location.hash = '#sql';
      onOpenLockedModule('__sql__');
    } else if (m.id === 'real-hr-interview') {
      if (onOpenMockInterview) {
        onOpenMockInterview();
      } else {
        if (typeof window !== 'undefined') window.location.hash = '#interview?topic=1';
      }
    } else if (m.id === 'excel') {
      if (typeof window !== 'undefined') window.location.hash = '#excel';
      onOpenLockedModule('__excel__');
    } else if (m.id === 'powerbi') {
      if (typeof window !== 'undefined') window.location.hash = '#powerbi';
      onOpenLockedModule('__powerbi__');
    } else if (m.id === 'stats') {
      if (typeof window !== 'undefined') window.location.hash = '#stats';
      onOpenLockedModule('__stats__');
    } else if (m.id === 'genai') {
      if (typeof window !== 'undefined') window.location.hash = '#genai';
      onOpenLockedModule('__genai__');
    } else {
      onOpenLockedModule(`${m.fullName} - ${type.toUpperCase()}`);
    }
  };

  return (
    <div className="lhh-wrapper">

      {/* =========================================================================
          1. TOP HERO PANORAMIC BANNER WITH VIDEO BACKGROUND & REFERENCE TEXT
          ========================================================================= */}
      <section className="lhh-hero-banner-frame">
        {/* Animated Background Video */}
        <video
          className="lhh-hero-video-bg"
          src="/videos/hero_animated_banner.mp4"
          poster="/images/dashboard/hero_skills_panorama.jpg"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Soft Left Gradient Overlay for crisp text readability */}
        <div className="lhh-hero-gradient-overlay" />

        {/* Text & Content Layer on top of video */}
        <div className="lhh-hero-content-overlay lhh-hero-full-row">
          <div className="lhh-hero-left-col">
            {/* Top Pill Badge */}
            <div className="lhh-hero-top-pill">
              <span className="lhh-hero-pill-text">Industry-Ready Learning Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="lhh-hero-headline">
              Future-Ready Skills for a{' '}
              <span className="lhh-headline-brighter-tomorrow">Brighter Tomorrow</span>
            </h1>

            {/* Subtitle */}
            <p className="lhh-hero-subtitle">
              Interactive lessons &nbsp;•&nbsp; Real-world projects &nbsp;•&nbsp; AI-powered guidance &nbsp;•&nbsp; Placement support
            </p>
          </div>

          {/* 4 Glass Stat Cards on the Right */}
          <div className="lhh-hero-stats-group">
            <div className="lhh-hero-stat-card">
              <div className="lhh-hero-stat-icon lhh-stat-blue">
                <Users className="w-4 h-4" />
              </div>
              <div className="lhh-hero-stat-info">
                <strong>50K+</strong>
                <span>Students</span>
              </div>
            </div>

            <div className="lhh-hero-stat-card">
              <div className="lhh-hero-stat-icon lhh-stat-indigo">
                <Clock className="w-4 h-4" />
              </div>
              <div className="lhh-hero-stat-info">
                <strong>500+</strong>
                <span>Hours of Content</span>
              </div>
            </div>

            <div className="lhh-hero-stat-card">
              <div className="lhh-hero-stat-icon lhh-stat-purple">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="lhh-hero-stat-info">
                <strong>100+</strong>
                <span>Real Projects</span>
              </div>
            </div>

            <div className="lhh-hero-stat-card">
              <div className="lhh-hero-stat-icon lhh-stat-amber">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="lhh-hero-stat-info">
                <strong>4.8/5</strong>
                <span>Student Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. 9 CORE MODULE CARDS GRID (5 ON ROW 1 + 4 CENTERED ON ROW 2)
          ========================================================================= */}
      <section className="lhh-modules-section">
        {viewMode === 'grid' ? (
          <div className="lhh-modules-6grid">
            {visibleModules.map((m) => (
              <article 
                key={m.id} 
                className="lhh-module-card"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector<HTMLVideoElement>('video');
                  if (vid) vid.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector<HTMLVideoElement>('video');
                  if (vid) vid.pause();
                }}
              >
                
                {/* Top Pedestal Visual with Number Badge, Ribbon, and Heart Button */}
                <div 
                  className="lhh-card-image-wrap"
                  onClick={() => handleModuleAction(m)}
                >
                  {m.video ? (
                    <video
                      src={m.video}
                      poster={m.image}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="lhh-card-video"
                    />
                  ) : (
                    <img
                      src={m.image}
                      alt={m.title}
                      loading="lazy"
                      className="lhh-card-img"
                    />
                  )}

                  {/* Top Left Badge Overlay */}
                  <span 
                    className="lhh-card-badge-overlay"
                    style={{ background: m.themeColor }}
                  >
                    {m.badgeNum}
                  </span>

                  {/* Optional Ribbon Pill (Most Popular / High Demand) */}
                  {m.ribbonText && (
                    <span
                      className="lhh-card-ribbon-pill"
                      style={{ background: m.ribbonGradient }}
                    >
                      {m.ribbonText}
                    </span>
                  )}

                  {/* Top Right Heart Button */}
                  <span className="lhh-card-heart-btn" aria-hidden="true">
                    <Heart className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Card Info */}
                <div className="lhh-card-body">
                  {/* Title Row with Right Circular Arrow */}
                  <div className="lhh-card-title-row" onClick={() => handleModuleAction(m)}>
                    <h3 className="lhh-card-title">{m.title}</h3>
                    <span
                      className="lhh-card-title-arrow"
                      style={{ background: m.themeColor }}
                    >
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                  </div>

                  {/* 2-Line Description */}
                  <div className="lhh-card-desc">
                    <span>{m.descLine1}</span>
                    <span>{m.descLine2}</span>
                  </div>

                  {/* 4 Colored Topic Tag Pills */}
                  <div className="lhh-card-tags-row">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="lhh-card-tag-pill"
                        style={{
                          background: m.tagBg,
                          color: m.tagColor,
                          borderColor: m.tagBorder,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lessons count & Projects count */}
                  <div className="lhh-meta-row">
                    <div className="lhh-lessons-count-wrap" style={{ color: m.themeColor }}>
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                      <span className="lhh-lessons-text">{m.lessonsText}</span>
                    </div>
                    <span className="lhh-meta-divider">|</span>
                    <div className="lhh-projects-count-wrap" style={{ color: m.themeColor }}>
                      <FileCheck className="w-3.5 h-3.5 shrink-0" />
                      <span className="lhh-lessons-text">{m.projectsText}</span>
                    </div>
                  </div>

                  {/* Progress Label + Progress Bar */}
                  <div className="lhh-progress-status-row">
                    <span
                      className="lhh-complete-label"
                      style={{ color: m.progress > 0 ? m.themeColor : '#1e293b' }}
                    >
                      {m.progress}% Complete
                    </span>
                  </div>

                  <div className="lhh-progress-track">
                    {m.progress === 0 && (
                      <span
                        className="lhh-progress-zero-dot"
                        style={{ background: m.themeColor }}
                      />
                    )}
                    <div
                      className="lhh-progress-fill"
                      style={{
                        width: `${m.progress}%`,
                        background: m.btnGradient,
                      }}
                    />
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    className="lhh-action-btn"
                    style={{ background: m.btnGradient }}
                    onClick={() => handleModuleAction(m)}
                  >
                    {m.btnText}
                  </button>

                </div>
              </article>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="lhh-modules-list">
            {visibleModules.map((m) => (
              <div 
                key={m.id} 
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
                {m.video ? (
                  <video
                    src={m.video}
                    poster={m.image}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="lhh-list-thumb"
                    onClick={() => handleModuleAction(m)}
                  />
                ) : (
                  <img
                    src={m.image}
                    alt={m.title}
                    className="lhh-list-thumb"
                    onClick={() => handleModuleAction(m)}
                  />
                )}
                <div className="lhh-list-info">
                  <h3 className="lhh-list-title">{m.title}</h3>
                  <p className="lhh-list-desc">{m.descLine1} {m.descLine2}</p>
                  <div className="lhh-list-meta">
                    <span style={{ color: m.themeColor }}>{m.lessonsText}</span>
                    <span>•</span>
                    <span style={{ color: m.progress > 0 ? m.themeColor : '#94a3b8' }}>
                      Progress: {m.progress}%
                    </span>
                  </div>
                </div>
                <div className="lhh-list-actions">
                  <button
                    type="button"
                    className="lhh-action-btn lhh-list-btn"
                    style={{ background: m.btnGradient }}
                    onClick={() => handleModuleAction(m)}
                  >
                    {m.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

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
            <p className="lhh-pcomb-subtitle">Not just a course, but a complete career experience with Future IT Industry.</p>
          </div>
        </div>

        <div className="lhh-wyg-exact-grid">
          {/* Card 1: 3 Month Internship */}
          <div className="lhh-wyg-exact-card lhh-wyg-card-intern">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-blue">
                <Award size={18} />
                <span>3 Month Internship</span>
              </div>
              <p className="lhh-wyg-exact-desc">Work on real projects, gain industry experience and learn from mentors.</p>
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

          {/* Card 2: Internship Certificate */}
          <div className="lhh-wyg-exact-card lhh-wyg-card-cert-green">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-green">
                <FileCheck size={18} />
                <span>Internship Certificate</span>
              </div>
              <p className="lhh-wyg-exact-desc">Receive an official internship certificate from Future IT Industry after successful completion.</p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/cert_internship_exact.jpg"
                alt="Internship Certificate"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          {/* Card 3: Recommendation Letter */}
          <div className="lhh-wyg-exact-card lhh-wyg-card-letter-purple">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-purple">
                <Scroll size={18} />
                <span>Recommendation Letter</span>
              </div>
              <p className="lhh-wyg-exact-desc">Get a professional recommendation letter based on your performance during the internship.</p>
            </div>
            <div className="lhh-wyg-exact-cert-box">
              <img
                src="/images/dashboard/letter_recommendation_exact.jpg"
                alt="Recommendation Letter"
                className="lhh-wyg-cert-full"
              />
            </div>
          </div>

          {/* Card 4: Course Completion Certificate */}
          <div className="lhh-wyg-exact-card lhh-wyg-card-cert-gold">
            <div className="lhh-wyg-exact-info">
              <div className="lhh-wyg-icon-tag lhh-tag-gold">
                <ShieldCheck size={18} />
                <span>Course Completion Certificate</span>
              </div>
              <p className="lhh-wyg-exact-desc">Complete the course successfully and receive a verified certificate from Future IT Industry.</p>
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
          REAL PEOPLE. REAL SUCCESS STORIES. (1:1 with user reference)
          Continuous infinite hiring partner marquee & auto-sliding alumni stories
         ============================================================ */}
      <RealSuccessStoriesShowcase
        onOpenRole={(role) => onOpenLockedModule(role)}
        onOpenPartnersModal={() => onOpenLockedModule('Data Analytics with GenAI')}
        onExploreProgram={() => onOpenLockedModule('Data Analytics with GenAI')}
      />

    </div>
  );
};

