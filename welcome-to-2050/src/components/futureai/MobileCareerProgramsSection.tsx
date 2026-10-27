import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  LayoutGrid,
  List,
  Lock,
  Play,
  Pause,
  Hexagon,
  SlidersHorizontal,
} from 'lucide-react';
import { ToolIcon } from './CourseToolIcons';

export interface MobileCareerProgram {
  id: string;
  category: 'flagship' | 'core' | 'ai';
  titlePrefix: string;
  titleHighlight: string;
  desc: string;
  salary: string;
  price: string;
  projectsCount: number;
  duration: string;
  video: string;
  image: string;
  route: string;
  tools: string[];
}

export const MOBILE_CAREER_PROGRAMS: MobileCareerProgram[] = [
  {
    id: 'data-analyst-genai',
    category: 'flagship',
    titlePrefix: 'Data Analyst with ',
    titleHighlight: 'GenAI',
    desc: 'Master Python, SQL, Power BI, Excel & GenAI Analytics.',
    salary: '₹ 6 LPA - ₹15 LPA',
    price: '₹13,999',
    projectsCount: 28,
    duration: '01:28',
    video: '/videos/data_analyst_genai_v2.mp4',
    image: '/images/pot1_sharp_poster.jpg',
    route: '#data-analyst',
    tools: ['Python', 'SQL', 'Power BI', 'Excel', 'ChatGPT'],
  },
  {
    id: 'data-science-agentic-ai',
    category: 'flagship',
    titlePrefix: 'Data Science & ',
    titleHighlight: 'Agentic AI',
    desc: 'Learn Machine Learning, Deep Learning, LLMs, AI Agents & Real-World Projects.',
    salary: '₹ 10 LPA - ₹25 LPA',
    price: '₹14,499',
    projectsCount: 32,
    duration: '01:36',
    video: '/videos/data_science_agentic_ai_course.mp4',
    image: '/images/pot2_sharp_poster.jpg',
    route: '#data-science',
    tools: ['Python', 'PyTorch', 'LangChain', 'Vector DB', 'RAG'],
  },
  {
    id: 'ml-engineering',
    category: 'flagship',
    titlePrefix: 'Machine Learning ',
    titleHighlight: 'Engineering',
    desc: 'End-to-end ML model development & deployment.',
    salary: '₹ 12 LPA - ₹28 LPA',
    price: '₹12,999',
    projectsCount: 32,
    duration: '01:42',
    video: '/videos/ml_engineering_course.mp4',
    image: '/images/pot3_sharp_poster.jpg',
    route: '#ml-engineering',
    tools: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Cloud'],
  },
  {
    id: 'ai-engineering',
    category: 'flagship',
    titlePrefix: 'AI ',
    titleHighlight: 'Engineering',
    desc: 'Build, deploy and scale AI applications with industry tools.',
    salary: '₹ 14 LPA - ₹32 LPA',
    price: '₹14,999',
    projectsCount: 28,
    duration: '01:30',
    video: '/videos/ai_engineering_course.mp4',
    image: '/images/pot4_sharp_poster.jpg',
    route: '#ai-engineering',
    tools: ['OpenAI', 'LangChain', 'Hugging Face', 'Vector DB', 'RAG'],
  },
  {
    id: 'ai-tools-prompt',
    category: 'ai',
    titlePrefix: 'AI Tools & ',
    titleHighlight: 'Prompt Engineering',
    desc: 'Master AI tools, automations and prompt engineering.',
    salary: '₹ 5 LPA - ₹14 LPA',
    price: '₹11,999',
    projectsCount: 20,
    duration: '01:25',
    video: '/videos/card_video_genai.mp4',
    image: '/images/cube_genai.jpg',
    route: '#ai-tools-prompt',
    tools: ['ChatGPT', 'OpenAI', 'LangChain', 'Python', 'Cloud'],
  },
  {
    id: 'ms-office-copilot',
    category: 'core',
    titlePrefix: 'Microsoft Office 365 with ',
    titleHighlight: 'Copilot',
    desc: 'Boost productivity with AI in Office 365.',
    salary: '₹ 5 LPA - ₹12 LPA',
    price: '₹11,499',
    projectsCount: 18,
    duration: '01:20',
    video: '/videos/card_video_excel.mp4',
    image: '/images/msoffice_365_copilot_poster.jpg',
    route: '#ms-office-copilot',
    tools: ['Excel', 'DAX', 'Power Query', 'Power BI', 'Copilot'],
  },
  {
    id: 'full-stack-web-dev',
    category: 'flagship',
    titlePrefix: 'Full Stack Web ',
    titleHighlight: 'Development',
    desc: 'Build modern web applications from scratch.',
    salary: '₹ 8 LPA - ₹22 LPA',
    price: '₹12,499',
    projectsCount: 30,
    duration: '01:35',
    video: '/videos/card_video_python.mp4',
    image: '/images/full_stack_web_development_poster.jpg',
    route: '#full-stack',
    tools: ['React', 'Node.js', 'TypeScript', 'Docker', 'GitHub'],
  },
];

interface MobileCareerProgramsSectionProps {
  onUnlockCourse: (course: MobileCareerProgram) => void;
}

export const MobileCareerProgramsSection: React.FC<MobileCareerProgramsSectionProps> = ({
  onUnlockCourse,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'flagship' | 'core' | 'ai'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [playingCourseId, setPlayingCourseId] = useState<string | null>(null);
  const [manualPausedCourseId, setManualPausedCourseId] = useState<string | null>(null);

  // References to video elements
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const visibleRatiosRef = useRef<{ [key: string]: number }>({});

  const filteredCourses = MOBILE_CAREER_PROGRAMS.filter((course) => {
    if (activeCategory === 'all') return true;
    return course.category === activeCategory;
  });

  // Synchronize playingCourseId with video playback
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((cid) => {
      const v = videoRefs.current[cid];
      if (!v) return;

      if (cid === playingCourseId) {
        v.muted = true;
        v.play().catch(() => {});
      } else {
        if (!v.paused) {
          v.pause();
        }
      }
    });
  }, [playingCourseId]);

  // IntersectionObserver for Automatic Scroll-Based Single Video Playback
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const courseId = entry.target.getAttribute('data-course-id');
          if (courseId) {
            visibleRatiosRef.current[courseId] = entry.isIntersecting ? entry.intersectionRatio : 0;
          }
        });

        // Find the card with highest visibility ratio
        let bestCourseId: string | null = null;
        let maxRatio = 0.25; // At least 25% visible in mobile viewport

        Object.keys(visibleRatiosRef.current).forEach((cid) => {
          if (visibleRatiosRef.current[cid] > maxRatio) {
            maxRatio = visibleRatiosRef.current[cid];
            bestCourseId = cid;
          }
        });

        if (bestCourseId) {
          if (manualPausedCourseId !== bestCourseId) {
            setPlayingCourseId(bestCourseId);
          }
        } else {
          setPlayingCourseId(null);
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        rootMargin: '0px 0px -10% 0px',
      }
    );

    Object.values(cardRefs.current).forEach((cardEl) => {
      if (cardEl) observer.observe(cardEl);
    });

    return () => {
      observer.disconnect();
    };
  }, [manualPausedCourseId, activeCategory]);

  const togglePlayPause = (courseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[courseId];
    if (!video) return;

    if (playingCourseId === courseId) {
      setPlayingCourseId(null);
      setManualPausedCourseId(courseId);
    } else {
      setManualPausedCourseId(null);
      setPlayingCourseId(courseId);
    }
  };

  return (
    <div className="w-full py-4 select-none">
      {/* ─── 1. SECTION HEADER (Matching Reference Image) ─── */}
      <div className="px-3.5 mb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/90 flex items-center justify-center text-blue-600 shadow-2xs shrink-0">
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="text-[17px] font-black text-slate-900 tracking-tight leading-tight">
                All Career-Focused Industry Courses (7)
              </h2>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                Learn from industry experts. Build real skills. Get job-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs & View Toggle Row */}
        <div className="flex items-center justify-between gap-2 mt-3.5">
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-1 min-w-0">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0066FF] text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              All (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('flagship')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer ${
                activeCategory === 'flagship'
                  ? 'bg-[#0066FF] text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Flagship Tracks (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('core')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer ${
                activeCategory === 'core'
                  ? 'bg-[#0066FF] text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Core Analytics (1)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('ai')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer ${
                activeCategory === 'ai'
                  ? 'bg-[#0066FF] text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              AI & Next-Gen (1)
            </button>
          </div>

          {/* Grid / List View Toggle */}
          <div className="flex items-center gap-1 shrink-0 bg-white border border-slate-200 rounded-xl p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#0066FF] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#0066FF] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── 2. SEVEN COURSE CARDS LIST (Exact 1:1 Matching Reference Screenshot) ─── */}
      <div className="space-y-3.5 px-3.5">
        {filteredCourses.map((course) => {
          const isPlaying = playingCourseId === course.id;

          return (
            <div
              key={course.id}
              data-course-id={course.id}
              ref={(el) => {
                cardRefs.current[course.id] = el;
              }}
              className="bg-white rounded-2xl border border-blue-200/90 shadow-xs p-2.5 sm:p-3 relative overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="flex gap-2.5 sm:gap-3 items-stretch">
                {/* ═══ LEFT SIDE: Video Player & Project Badges ═══ */}
                <div className="w-[145px] sm:w-[165px] shrink-0 flex flex-col justify-between">
                  {/* Video / Thumbnail Area */}
                  <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-2xs group">
                    {/* Real Video Element with Muted Autoplay */}
                    <video
                      ref={(el) => {
                        videoRefs.current[course.id] = el;
                      }}
                      src={course.video}
                      poster={course.image}
                      muted
                      playsInline
                      loop
                      autoPlay={isPlaying}
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />

                    {/* Top-Left Pill Badge: "Preview Video" */}
                    <div className="absolute top-1.5 left-1.5 z-10 px-1.5 py-0.5 rounded-md bg-black/65 backdrop-blur-xs text-white text-[8px] sm:text-[8.5px] font-bold flex items-center gap-1 pointer-events-none">
                      <Play className="w-2 h-2 fill-white text-white" />
                      <span>Preview Video</span>
                    </div>

                    {/* Center Play / Pause Circle Action Overlay */}
                    <button
                      type="button"
                      onClick={(e) => togglePlayPause(course.id, e)}
                      aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
                      className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 backdrop-blur-xs flex items-center justify-center text-white border border-white/30 shadow-md transition-transform active:scale-90 z-20 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      )}
                    </button>

                    {/* Bottom-Right Duration Badge (e.g. 01:28) */}
                    <div className="absolute bottom-1.5 right-1.5 z-10 px-1 py-0.5 rounded bg-black/75 backdrop-blur-xs text-white text-[8px] font-mono font-bold pointer-events-none">
                      {course.duration}
                    </div>
                  </div>

                  {/* Micro-Chips under Video */}
                  <div className="flex items-center justify-between gap-1 mt-2 text-[8px] sm:text-[8.5px] font-bold text-slate-700">
                    <div className="flex items-center gap-1 min-w-0">
                      <Hexagon className="w-3 h-3 text-blue-600 shrink-0 stroke-[2.2]" />
                      <span className="truncate">{course.projectsCount} Real-World Projects</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <SlidersHorizontal className="w-3 h-3 text-purple-600 shrink-0 stroke-[2.2]" />
                      <span className="whitespace-nowrap">Coding Practice</span>
                    </div>
                  </div>
                </div>

                {/* ═══ RIGHT SIDE: Title, Description, Tech Icons, Price & Unlock ═══ */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  {/* Top Header: Title & Salary Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-1.5">
                      <h3 className="text-[13px] sm:text-[14px] font-black text-slate-900 leading-tight">
                        {course.titlePrefix}
                        <span className="text-[#A100E8] font-black">
                          {course.titleHighlight}
                        </span>
                      </h3>
                      <span className="shrink-0 px-1.5 sm:px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] sm:text-[9.5px] font-black whitespace-nowrap">
                        {course.salary}
                      </span>
                    </div>

                    {/* Subtitle / Short Description */}
                    <p className="text-[9.5px] sm:text-[10px] text-slate-600 font-medium leading-snug line-clamp-2 mt-0.5">
                      {course.desc}
                    </p>
                  </div>

                  {/* 5 Tech Icons with Labels Row */}
                  <div className="my-1.5">
                    <div className="flex items-center justify-between gap-1">
                      {course.tools.map((tool) => (
                        <div
                          key={tool}
                          className="flex flex-col items-center justify-center flex-1 min-w-0"
                          title={tool}
                        >
                          <div className="w-5 h-5 flex items-center justify-center shrink-0">
                            <ToolIcon name={tool} className="w-4 h-4 object-contain" />
                          </div>
                          <span className="text-[7.5px] sm:text-[8px] font-bold text-slate-700 leading-tight truncate max-w-full text-center mt-0.5">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Crossed-Out Price & Unlock Course Button */}
                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                    {/* Approved Crossed-Out Price (Black numbers with thin red line) */}
                    <div className="relative inline-block font-black text-[13px] sm:text-[14px] text-slate-950 tracking-tight select-none">
                      <span>{course.price}</span>
                      <span className="absolute left-[-2px] right-[-2px] top-1/2 -translate-y-1/2 h-[1.8px] bg-red-600 rotate-[-5deg] pointer-events-none" />
                    </div>

                    {/* Unlock Course Button (Deep Royal Blue with Gold Lock) */}
                    <button
                      type="button"
                      onClick={() => onUnlockCourse(course)}
                      className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#0a388c] hover:bg-[#082e73] text-white text-[10.5px] sm:text-[11px] font-black flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
                    >
                      <Lock className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                      <span>Unlock Course</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
