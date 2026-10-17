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
  Briefcase
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import './LearnerHomeHub.css';

interface CareerFocusedCoursesProps {
  onStartCourse?: (courseId: string) => void;
  onEnroll?: () => void;
}

export type CourseFilterType = 'all' | 'in-progress' | 'not-started' | 'completed';
export type CourseViewModeType = 'grid' | 'list';

interface CourseItem {
  id: string;
  badgeNum: number;
  statusTag: string;
  title: string;
  subtitle: string;
  fullName: string;
  shortDesc: string;
  descLine1: string;
  descLine2: string;
  salaryRange: string;
  courseFee: string;
  image: string;
  holoImage: string;
  video: string;
  potTheme: 'blue' | 'purple' | 'gold' | 'emerald';
  skillsList: string[];
}

export const CareerFocusedCoursesSection: React.FC<CareerFocusedCoursesProps> = ({
  onStartCourse,
  onEnroll,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [filter, setFilter] = useState<CourseFilterType>('all');
  const [viewMode, setViewMode] = useState<CourseViewModeType>('grid');

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

  const courses: CourseItem[] = [
    {
      id: 'data-analyst-genai',
      badgeNum: 1,
      statusTag: 'ENROLLED • ACTIVE',
      title: 'Data Analyst',
      subtitle: 'with GenAI',
      fullName: 'Data Analyst with GenAI Flagship Program',
      shortDesc: 'Master Python, SQL, Power BI, Excel & GenAI Analytics.',
      descLine1: 'Python • SQL • Advanced Excel • Power BI • Statistics • GenAI',
      descLine2: '28 Real-World Projects • Coding Games • AI Mock Interviews',
      salaryRange: '₹6 LPA – ₹15 LPA',
      courseFee: '₹18,999',
      image: '/images/pot1_sharp_poster.jpg',
      holoImage: '/images/pot1_sharp_poster.jpg',
      video: '/videos/data_analyst_genai_v2.mp4',
      potTheme: 'blue',
      skillsList: ['Python', 'SQL', 'Excel', 'Power BI', 'GenAI'],
    },
    {
      id: 'data-science-agentic-ai',
      badgeNum: 2,
      statusTag: 'HIGH DEMAND',
      title: 'Data Science',
      subtitle: '& Agentic AI',
      fullName: 'Data Science & Agentic AI Mastery Program',
      shortDesc: 'Explore Machine Learning, Deep Learning, RAG & AI Agents.',
      descLine1: 'Python • Machine Learning • Deep Learning • NLP • Agentic AI',
      descLine2: 'RAG Pipelines • Autonomous AI Agents • Industry Capstone Projects',
      salaryRange: '₹10 LPA – ₹22 LPA',
      courseFee: '₹29,999',
      image: '/images/pot2_sharp_poster.jpg',
      holoImage: '/images/pot2_sharp_poster.jpg',
      video: '/videos/data_science_agentic_ai_course.mp4',
      potTheme: 'purple',
      skillsList: ['Data Science', 'ML', 'Deep Learning', 'RAG', 'Agentic AI'],
    },
    {
      id: 'ml-engineering',
      badgeNum: 3,
      statusTag: 'ADVANCED TECH',
      title: 'ML',
      subtitle: 'Engineering',
      fullName: 'Machine Learning Engineering & MLOps Program',
      shortDesc: 'Build & deploy scalable ML models, PyTorch & MLOps pipelines.',
      descLine1: 'Scikit-Learn • TensorFlow • PyTorch • MLOps • Cloud Deployment',
      descLine2: 'Distributed Training • Docker & Kubernetes • Production ML Pipelines',
      salaryRange: '₹12 LPA – ₹28 LPA',
      courseFee: '₹39,999',
      image: '/images/pot3_sharp_poster.jpg',
      holoImage: '/images/pot3_sharp_poster.jpg',
      video: '/videos/ml_engineering_course.mp4',
      potTheme: 'gold',
      skillsList: ['PyTorch', 'TensorFlow', 'MLOps', 'Docker', 'Cloud AI'],
    },
    {
      id: 'ai-engineering',
      badgeNum: 4,
      statusTag: 'FLAGSHIP 2050',
      title: 'AI',
      subtitle: 'Engineering',
      fullName: 'Full-Stack AI & LLM Engineering Program',
      shortDesc: 'Design intelligent systems, LLMs, Vector DBs & Multi-Agents.',
      descLine1: 'LLMs • LangChain • Vector Databases • Fine-Tuning • Multimodal AI',
      descLine2: 'Enterprise AI Architecture • Multi-Agent Systems • Live AI Apps',
      salaryRange: '₹15 LPA – ₹35 LPA',
      courseFee: '₹49,999',
      image: '/images/pot4_sharp_poster.jpg',
      holoImage: '/images/pot4_sharp_poster.jpg',
      video: '/videos/ai_engineering_course.mp4',
      potTheme: 'emerald',
      skillsList: ['LLMs', 'LangChain', 'Vector DBs', 'Fine-Tuning', 'OpenAI'],
    },
  ];

  const handleCourseClick = (courseId: string) => {
    playClick();
    if (onStartCourse) {
      onStartCourse(courseId);
    } else if (onEnroll) {
      onEnroll();
    }
  };

  const visibleCourses = courses.filter((c) => {
    if (filter === 'in-progress') return c.id === 'data-analyst-genai';
    if (filter === 'not-started') return c.id !== 'data-analyst-genai';
    if (filter === 'completed') return false;
    return true;
  });

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
            EXACT COPY OF "4 HIGH-PAYING INDUSTRY COURSES" SECTION HEADER & CONTROLS
            ========================================================================= */}
        <div className="lhh-modules-section scd-transparent-pots-section" style={{ padding: 0, margin: 0, background: 'transparent' }}>
          <div className="lhh-section-header" style={{ marginBottom: '1.5rem' }}>
            <div className="lhh-section-left">
              <div className="lhh-layer-icon-box">
                <Layers className="w-5 h-5 text-blue-600" />
              </div>
              <div className="lhh-section-title-wrap">
                <h2 className="lhh-section-title">4 High-Paying Industry Courses</h2>
              </div>
            </div>

            <div className="lhh-controls-group">
              <div className="lhh-filter-pills-row">
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setFilter('all');
                  }}
                  className={`lhh-filter-pill ${filter === 'all' ? 'active' : ''}`}
                >
                  All (4)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setFilter('in-progress');
                  }}
                  className={`lhh-filter-pill ${filter === 'in-progress' ? 'active' : ''}`}
                >
                  In Progress (1)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setFilter('not-started');
                  }}
                  className={`lhh-filter-pill ${filter === 'not-started' ? 'active' : ''}`}
                >
                  Explore (3)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setFilter('completed');
                  }}
                  className={`lhh-filter-pill ${filter === 'completed' ? 'active' : ''}`}
                >
                  Completed
                </button>
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
              4 3D CYLINDRICAL GLOWING NEON POTS (EXACT COPY FROM STUDENT DASHBOARD)
              ========================================================================= */}
          {viewMode === 'grid' ? (
            <div className="scd-pots-4grid home-compact-pots">
              {visibleCourses.map((c) => (
                <article
                  key={c.id}
                  className={`scd-pot-card scd-pot-${c.potTheme}`}
                  onClick={() => handleCourseClick(c.id)}
                  onMouseEnter={playHover}
                >
                  {/* TOP HOLOGRAM / VIDEO DOME FLOWING UP OUT OF THE POT */}
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
                      <video
                        src={c.video}
                        poster={c.holoImage}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="scd-pot-holo-video is-always-on"
                      />
                      <div className="scd-pot-holo-glass-frame" />
                    </div>
                  </div>

                  {/* BOTTOM 3D CYLINDRICAL NEON POT */}
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
                        <div className="scd-pot-slashed-price-wrap">
                          <span className="scd-pot-slashed-daam">Rs {c.courseFee.replace('₹', '')}</span>
                        </div>

                        <button
                          type="button"
                          className="scd-pot-circle-arrow-btn cursor-pointer"
                          aria-label="Start Learning"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCourseClick(c.id);
                          }}
                        >
                          <span className="scd-pot-unlock-text">Start Learning</span>
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
            /* List View */
            <div className="lhh-modules-list">
              {visibleCourses.map((c) => (
                <div
                  key={c.id}
                  className="lhh-list-card cursor-pointer"
                  onClick={() => handleCourseClick(c.id)}
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
                      preload="metadata"
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
                    <div className="lhh-list-meta-row">
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
