import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

interface MobileHomeCourseItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  image: string;
  ctc: string;
  lessons: string;
  projects: string;
  isReact?: boolean;
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

  const courses: MobileHomeCourseItem[] = [
    {
      id: 'data-analyst-genai',
      badge: '🔥 Flagship',
      badgeColor: 'bg-amber-500/90 text-white',
      title: 'Data Analyst',
      subtitle: 'with GenAI',
      image: '/images/pot1_sharp_poster.jpg',
      ctc: '₹8–18 LPA',
      lessons: '260 Lessons',
      projects: '15+ Projects',
    },
    {
      id: 'react-frontend-dev',
      badge: '⭐ 36 Chapters',
      badgeColor: 'bg-cyan-500/90 text-white',
      title: 'React Front-End',
      subtitle: 'Development with AI',
      image: '/images/dashboard/hero_exact_2027.jpg',
      ctc: '₹8–20 LPA',
      lessons: '36 Chapters',
      projects: '12+ Projects',
      isReact: true,
    },
    {
      id: 'python-dsa',
      badge: '🐍 Most Popular',
      badgeColor: 'bg-blue-600/90 text-white',
      title: 'Python Mastery',
      subtitle: '& Coding Games',
      image: '/images/dashboard/poster_python.jpg',
      ctc: '₹7–16 LPA',
      lessons: '240 Lessons',
      projects: '10+ Projects',
    },
    {
      id: 'sql-databases',
      badge: '📊 Essential',
      badgeColor: 'bg-purple-600/90 text-white',
      title: 'SQL & Database',
      subtitle: 'Queries & ETL',
      image: '/images/dashboard/poster_sql.jpg',
      ctc: '₹7–15 LPA',
      lessons: '280 Lessons',
      projects: '12+ Projects',
    },
    {
      id: 'powerbi-analytics',
      badge: '📈 BI Visuals',
      badgeColor: 'bg-amber-600/90 text-white',
      title: 'Power BI',
      subtitle: '& DAX Analytics',
      image: '/images/dashboard/poster_powerbi.jpg',
      ctc: '₹8–17 LPA',
      lessons: '220 Lessons',
      projects: '8+ Projects',
    },
    {
      id: 'data-science-agentic-ai',
      badge: '🤖 Agentic AI',
      badgeColor: 'bg-indigo-600/90 text-white',
      title: 'Data Science',
      subtitle: '& Agentic AI',
      image: '/images/pot2_sharp_poster.jpg',
      ctc: '₹12–25 LPA',
      lessons: '320 Lessons',
      projects: '16+ Projects',
    },
    {
      id: 'full-stack-web-dev',
      badge: '💻 Full Stack',
      badgeColor: 'bg-emerald-600/90 text-white',
      title: 'Full Stack',
      subtitle: 'Web Development',
      image: '/images/pot4_sharp_poster.jpg',
      ctc: '₹9–22 LPA',
      lessons: '300 Lessons',
      projects: '14+ Projects',
    },
    {
      id: 'ui-ux-design-ai',
      badge: '🎨 AI Design',
      badgeColor: 'bg-pink-600/90 text-white',
      title: 'UI/UX Design',
      subtitle: 'with Figma & AI',
      image: '/images/ui_ux_design_poster.jpg',
      ctc: '₹6–18 LPA',
      lessons: '180 Lessons',
      projects: '10+ Projects',
    },
  ];

  const handleCardClick = (c: MobileHomeCourseItem) => {
    playClick();
    if (c.isReact || c.id === 'react-frontend-dev') {
      onOpenCurriculum();
    } else {
      onStartCourse(c.id);
    }
  };

  return (
    <section className="block md:hidden px-3 sm:px-4 my-5 select-none animate-fadeIn">
      {/* ── Section Header (Compact & Punchy) ── */}
      <div className="flex items-center justify-between mb-3 px-0.5">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
              Top Career Tracks
            </span>
          </div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
            High-Paying Courses
          </h2>
        </div>

        <button
          type="button"
          onClick={() => {
            playClick();
            onOpenCurriculum();
          }}
          className="text-[11px] font-bold text-blue-600 bg-blue-50/80 hover:bg-blue-100 px-2.5 py-1 rounded-xl border border-blue-200 flex items-center gap-1 active:scale-95 transition-transform"
        >
          <span>All Syllabus</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* ── 2-Column Grid (Compact "Chota Chota" 2 Courses at a Time) ── */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {courses.map((c) => (
          <article
            key={c.id}
            onClick={() => handleCardClick(c)}
            onMouseEnter={playHover}
            className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer active:scale-[0.98] relative"
          >
            {/* Top Thumbnail Image Frame */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/pot1_sharp_poster.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30 pointer-events-none" />

              {/* Top Badge: Left Ribbon */}
              <div className="absolute top-1.5 left-1.5 z-10">
                <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-black tracking-tight shadow-xs backdrop-blur-xs ${c.badgeColor}`}>
                  {c.badge}
                </span>
              </div>

              {/* Top Badge: Right CTC */}
              <div className="absolute top-1.5 right-1.5 z-10">
                <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-black/70 text-emerald-300 backdrop-blur-xs border border-white/10">
                  {c.ctc}
                </span>
              </div>

              {/* Bottom Stat on Image */}
              <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[9px] text-slate-200 font-semibold z-10">
                <span className="bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-xs">
                  {c.lessons}
                </span>
                <span className="bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-xs">
                  {c.projects}
                </span>
              </div>
            </div>

            {/* Bottom Card Content */}
            <div className="p-2 sm:p-2.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/60">
              <div>
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug line-clamp-1">
                  {c.title}
                </h3>
                <p className="text-[10px] font-semibold text-slate-500 line-clamp-1 mt-0.5">
                  {c.subtitle}
                </p>
              </div>

              {/* Mini CTA Button */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                  Free Pass
                </span>

                <span className="inline-flex items-center gap-1 text-[10px] font-black text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Start</span>
                  <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
