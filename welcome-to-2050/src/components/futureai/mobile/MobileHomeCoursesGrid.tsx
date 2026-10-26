import React from 'react';
import { Sparkles, ArrowRight, Play, Layers, Star } from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

export interface MobileHomeCourseItem {
  id: string;
  badge?: string;
  badgeColor?: string;
  glowColor: string;
  accentBorder: string;
  floatDelay: string;
  title: string;
  subtitle: string;
  image: string;
  video: string;
  /** Optional crisp text banner rendered over the video (for videos without baked-in titles) */
  bannerTitle?: string;
  bannerSub?: string;
  bannerTheme?: 'purple' | 'amber';
  ctc?: string;
  lessons?: string;
  projects?: string;
}

interface MobileHomeCoursesGridProps {
  onStartCourse: (courseId: string) => void;
  onOpenCurriculum: () => void;
}

export const MobileHomeCoursesGrid: React.FC<MobileHomeCoursesGridProps> = ({
  onStartCourse,
  onOpenCurriculum,
}) => {
  const { playClick, playHover } = useThemeAccent();

  // All 12 High-Impact Courses with Live Continuous Videos
  const courses: MobileHomeCourseItem[] = [
    {
      id: 'react-frontend-dev',
      badge: '⭐ 36 Chapters',
      badgeColor: 'bg-cyan-500/90 text-white',
      glowColor: 'rgba(6, 182, 212, 0.35)',
      accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.35)]',
      floatDelay: '0s',
      title: 'React Front-End',
      subtitle: 'Development with AI',
      image: '/images/dashboard/hero_exact_2027.jpg',
      video: '/videos/react_frontend_development.mp4',
      ctc: '₹8–20 LPA',
      lessons: '36 Chapters',
      projects: '12+ Projects',
    },
    {
      id: 'data-analyst-genai',
      badge: '🔥 Flagship',
      badgeColor: 'bg-amber-500/90 text-white',
      glowColor: 'rgba(245, 158, 11, 0.35)',
      accentBorder: 'hover:border-amber-400 group-hover:shadow-[0_0_24px_rgba(245,158,11,0.35)]',
      floatDelay: '1.2s',
      title: 'Data Analyst',
      subtitle: 'with GenAI',
      image: '/images/pot1_sharp_poster.jpg',
      video: '/videos/data_analyst_genai_v2.mp4',
      ctc: '₹8–18 LPA',
      lessons: '260 Lessons',
      projects: '15+ Projects',
    },
    {
      id: 'python-dsa',
      badge: '🐍 Most Popular',
      badgeColor: 'bg-blue-600/90 text-white',
      glowColor: 'rgba(37, 99, 235, 0.35)',
      accentBorder: 'hover:border-blue-400 group-hover:shadow-[0_0_24px_rgba(37,99,235,0.35)]',
      floatDelay: '2.4s',
      title: 'Python Mastery',
      subtitle: '& Hackathon/DSA Practice',
      image: '/images/dashboard/poster_python.jpg',
      video: '/videos/card_video_python.mp4',
      ctc: '₹7–16 LPA',
      lessons: '240 Lessons',
      projects: '10+ Projects',
    },
    {
      id: 'sql-databases',
      badge: '📊 Essential',
      badgeColor: 'bg-purple-600/90 text-white',
      glowColor: 'rgba(147, 51, 234, 0.35)',
      accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_24px_rgba(147,51,234,0.35)]',
      floatDelay: '0.6s',
      title: 'SQL & Database',
      subtitle: 'Queries & ETL',
      image: '/images/dashboard/poster_sql.jpg',
      video: '/videos/card_video_sql.mp4',
      ctc: '₹7–15 LPA',
      lessons: '280 Lessons',
      projects: '12+ Projects',
    },
    {
      id: 'powerbi-analytics',
      badge: '📈 BI Visuals',
      badgeColor: 'bg-amber-600/90 text-white',
      glowColor: 'rgba(217, 119, 6, 0.35)',
      accentBorder: 'hover:border-amber-400 group-hover:shadow-[0_0_24px_rgba(217,119,6,0.35)]',
      floatDelay: '1.8s',
      title: 'Power BI',
      subtitle: '& DAX Analytics',
      image: '/images/dashboard/poster_powerbi.jpg',
      video: '/videos/card_video_powerbi.mp4',
      ctc: '₹8–17 LPA',
      lessons: '220 Lessons',
      projects: '8+ Projects',
    },
    {
      id: 'data-science-agentic-ai',
      badge: '🤖 Agentic AI',
      badgeColor: 'bg-indigo-600/90 text-white',
      glowColor: 'rgba(99, 102, 241, 0.35)',
      accentBorder: 'hover:border-indigo-400 group-hover:shadow-[0_0_24px_rgba(99,102,241,0.35)]',
      floatDelay: '3s',
      title: 'Data Science',
      subtitle: '& Agentic AI',
      image: '/images/pot2_sharp_poster.jpg',
      video: '/videos/data_science_agentic_ai_course.mp4',
      bannerTitle: 'Data Science',
      bannerSub: '& Agentic AI',
      bannerTheme: 'purple',
      ctc: '₹12–25 LPA',
      lessons: '320 Lessons',
      projects: '16+ Projects',
    },
    {
      id: 'ml-engineering',
      badge: '👑 Advanced MLOps',
      badgeColor: 'bg-rose-600/90 text-white',
      glowColor: 'rgba(225, 29, 72, 0.35)',
      accentBorder: 'hover:border-rose-400 group-hover:shadow-[0_0_24px_rgba(225,29,72,0.35)]',
      floatDelay: '0.9s',
      title: 'ML Engineering',
      subtitle: '& PyTorch Pipelines',
      image: '/images/pot3_sharp_poster.jpg',
      video: '/videos/ml_engineering_course.mp4',
      bannerTitle: 'ML Engineering',
      bannerSub: 'PyTorch & MLOps',
      bannerTheme: 'amber',
      ctc: '₹12–28 LPA',
      lessons: '280 Lessons',
      projects: '14+ Projects',
    },
    {
      id: 'full-stack-web-dev',
      badge: '💻 Full Stack',
      badgeColor: 'bg-emerald-600/90 text-white',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      accentBorder: 'hover:border-emerald-400 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.35)]',
      floatDelay: '2.1s',
      title: 'Full Stack',
      subtitle: 'Web Development',
      image: '/images/pot4_sharp_poster.jpg',
      video: '/videos/full_stack_web_development.mp4',
      ctc: '₹9–22 LPA',
      lessons: '300 Lessons',
      projects: '14+ Projects',
    },
    {
      id: 'ui-ux-design-ai',
      badge: '🎨 AI Design',
      badgeColor: 'bg-pink-600/90 text-white',
      glowColor: 'rgba(236, 72, 153, 0.35)',
      accentBorder: 'hover:border-pink-400 group-hover:shadow-[0_0_24px_rgba(236,72,153,0.35)]',
      floatDelay: '1.5s',
      title: 'UI/UX Design',
      subtitle: 'with Figma & AI',
      image: '/images/ui_ux_design_poster.jpg',
      video: '/videos/ui_ux_design_figma_ai.mp4',
      ctc: '₹6–18 LPA',
      lessons: '180 Lessons',
      projects: '10+ Projects',
    },
    {
      id: 'msoffice-365-copilot',
      badge: '📊 AI Copilot',
      badgeColor: 'bg-blue-500/90 text-white',
      glowColor: 'rgba(59, 130, 246, 0.35)',
      accentBorder: 'hover:border-blue-400 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]',
      floatDelay: '2.7s',
      title: 'Office 365',
      subtitle: 'with Copilot AI',
      image: '/images/msoffice_365_copilot_poster.jpg',
      video: '/videos/msoffice_365_copilot.mp4',
      ctc: '₹5–12 LPA',
      lessons: '140 Lessons',
      projects: '8+ Projects',
    },
    {
      id: 'ai-career-accelerator',
      badge: '🚀 Accelerator',
      badgeColor: 'bg-violet-600/90 text-white',
      glowColor: 'rgba(124, 58, 237, 0.35)',
      accentBorder: 'hover:border-violet-400 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.35)]',
      floatDelay: '0.3s',
      title: 'AI Career',
      subtitle: 'Portfolio & Placement',
      image: '/images/ai_career_accelerator_poster.jpg',
      video: '/videos/ai_career_accelerator.mp4',
      ctc: '₹8–24 LPA',
      lessons: '160 Lessons',
      projects: '10+ Projects',
    },
    {
      id: 'ai-for-techies-30days',
      badge: '⚡ 30-Day Sprint',
      badgeColor: 'bg-teal-600/90 text-white',
      glowColor: 'rgba(13, 148, 136, 0.35)',
      accentBorder: 'hover:border-teal-400 group-hover:shadow-[0_0_24px_rgba(13,148,136,0.35)]',
      floatDelay: '1.9s',
      title: 'AI for Techies',
      subtitle: '30-Day Python Sprint',
      image: '/images/ai_for_techies_poster.jpg',
      video: '/videos/ai_for_techies_python_sprint.mp4',
      ctc: '₹6–15 LPA',
      lessons: '30 Sprints',
      projects: '8+ Projects',
    },
  ];

  const handleCardClick = (c: MobileHomeCourseItem) => {
    playClick();
    onStartCourse(c.id);
  };

  return (
    <section className="px-3 sm:px-4 my-6 select-none animate-fadeIn relative">
      {/* ── Background Ambient Radial Lights ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[300px] bg-gradient-to-r from-blue-400/15 via-cyan-400/10 to-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Section Header (Punchy & Modern) ── */}
      <div className="flex items-center justify-between mb-4 px-1 relative z-10">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200 shadow-2xs">
              ⚡ LIVE VIDEO PREVIEW • ALL 12 TRACKS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            Explore All Courses
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Tap any course to inspect subjects covered, full curriculum &amp; syllabus
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            playClick();
            onOpenCurriculum();
          }}
          className="text-xs font-bold text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 px-3 py-1.5 rounded-xl border border-blue-200/90 shadow-2xs flex items-center gap-1.5 active:scale-95 transition-transform shrink-0 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span className="hidden sm:inline">Browse Syllabus</span>
          <span className="sm:hidden">Syllabus</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* ── 2-Column Grid on Mobile, Responsive 3-4 on Tablet/Desktop ── */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 relative z-10">
        {courses.map((c) => (
          <article
            key={c.id}
            onClick={() => handleCardClick(c)}
            onMouseEnter={playHover}
            style={{ animationDelay: c.floatDelay }}
            className={`group rounded-2xl bg-white border border-slate-200/90 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_${c.glowColor}] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer active:scale-[0.98] relative course-floating-card ${c.accentBorder}`}
          >
            {/* Top Video Preview Stage (Continuous AutoPlay Looping Video - Clean & Uncluttered) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
              {/* Crisp Poster Image with Lazy Loading */}
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />

              {/* Shimmer Ambient Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Crisp Title Banner Overlay (for videos without baked-in titles) */}
              {c.bannerTitle && (
                <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center pt-2 px-1.5 pointer-events-none bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-transparent pb-5">
                  <span
                    className="text-[15px] sm:text-[17px] font-black leading-none tracking-tight text-center whitespace-nowrap"
                    style={{
                      color: c.bannerTheme === 'amber' ? '#fde68a' : '#ffffff',
                      WebkitTextStroke: c.bannerTheme === 'amber' ? '0.4px #92400e' : '0.4px #1e3a8a',
                      textShadow:
                        c.bannerTheme === 'amber'
                          ? '0 2px 0 #b45309, 0 0 12px rgba(251,191,36,0.75)'
                          : '0 2px 0 #1d4ed8, 0 0 12px rgba(96,165,250,0.8)',
                    }}
                  >
                    {c.bannerTitle}
                  </span>
                  {c.bannerSub && (
                    <span
                      className={`mt-1 px-2 py-[2px] rounded-full text-[8.5px] sm:text-[9.5px] font-extrabold text-white whitespace-nowrap shadow-md ring-1 ring-white/40 ${
                        c.bannerTheme === 'amber'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600'
                          : 'bg-gradient-to-r from-purple-600 to-fuchsia-500'
                      }`}
                    >
                      {c.bannerSub}
                    </span>
                  )}
                </div>
              )}

              {/* Minimal Live Video Tag at Bottom Left */}
              <div className="absolute bottom-1 left-1.5 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded text-[8px] text-white/95 font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>

            {/* Bottom Card Content - Compact & Space-Saving */}
            <div className="p-2 sm:p-2.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
              <div>
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {c.title}
                </h3>
                <p className="text-[10px] font-semibold text-slate-500 line-clamp-1 mt-0.5">
                  {c.subtitle}
                </p>
              </div>

              {/* Mini CTA Footer */}
              <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-end">
                <span className="inline-flex items-center gap-1 text-[10px] font-black text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Floating Animation & Glowing Lighting Styles */}
      <style>{`
        @keyframes courseFloatSoft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .course-floating-card {
          animation: courseFloatSoft 5.5s ease-in-out infinite;
          will-change: transform;
        }
        .course-floating-card:hover {
          animation-play-state: paused;
          transform: translateY(-6px) scale(1.01);
        }
      `}</style>
    </section>
  );
};
