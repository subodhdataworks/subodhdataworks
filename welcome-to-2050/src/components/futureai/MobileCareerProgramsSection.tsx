import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  LayoutGrid,
  List,
  Lock,
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
    desc: 'Learn Machine Learning, Deep Learning, LLMs & AI Agents.',
    salary: '₹ 10 LPA - ₹25 LPA',
    price: '₹14,499',
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
        let maxRatio = 0.2; // At least 20% visible in mobile viewport

        Object.keys(visibleRatiosRef.current).forEach((cid) => {
          if (visibleRatiosRef.current[cid] > maxRatio) {
            maxRatio = visibleRatiosRef.current[cid];
            bestCourseId = cid;
          }
        });

        setPlayingCourseId(bestCourseId);
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
  }, [activeCategory]);

  return (
    <div id="career-programs" className="w-full max-w-full box-border py-3.5 select-none overflow-hidden">
      {/* ─── 1. SECTION HEADER ─── */}
      <div className="px-2.5 sm:px-3.5 mb-2.5 w-full max-w-full box-border min-w-0">
        <div className="flex items-start justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/90 flex items-center justify-center text-blue-600 shadow-2xs shrink-0">
              <Layers className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-[15px] sm:text-[17px] font-black text-slate-900 tracking-tight leading-tight truncate">
                All Career-Focused Industry Courses (7)
              </h2>
              <p className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-snug truncate">
                Learn from industry experts. Build real skills. Get job-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs & View Toggle Row */}
        <div className="flex items-center justify-between gap-1.5 mt-2.5 w-full min-w-0 box-border">
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none flex-1 min-w-0">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-[#0066FF] text-white shadow-xs shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              All (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('flagship')}
              className={`px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer shrink-0 ${
                activeCategory === 'flagship'
                  ? 'bg-[#0066FF] text-white shadow-xs shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Flagship Tracks (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('core')}
              className={`px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer shrink-0 ${
                activeCategory === 'core'
                  ? 'bg-[#0066FF] text-white shadow-xs shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Core Analytics (1)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('ai')}
              className={`px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer shrink-0 ${
                activeCategory === 'ai'
                  ? 'bg-[#0066FF] text-white shadow-xs shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              AI & Next-Gen (1)
            </button>
          </div>

          {/* Grid / List View Toggle */}
          <div className="flex items-center gap-0.5 shrink-0 bg-white border border-slate-200 rounded-xl p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10.5px] font-bold transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#0066FF] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10.5px] font-bold transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#0066FF] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3 h-3" />
              <span>List</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─── 2. SEVEN COMPACT COURSE CARDS (32-35% Video, No Play Buttons, No Project Counts) ─── */}
      <div className="space-y-2.5 px-2.5 sm:px-3.5 w-full max-w-full box-border min-w-0">
        {filteredCourses.map((course) => {
          const isPlaying = playingCourseId === course.id;

          return (
            <div
              key={course.id}
              data-course-id={course.id}
              ref={(el) => {
                cardRefs.current[course.id] = el;
              }}
              className="w-full max-w-full box-border bg-white rounded-2xl border border-blue-200/90 shadow-2xs hover:shadow-xs p-2 sm:p-2.5 relative overflow-hidden transition-all min-w-0"
            >
              <div className="flex gap-2 sm:gap-2.5 items-stretch w-full min-w-0">
                {/* ═══ LEFT SIDE: Smaller Course Video + Salary Badge Underneath ═══ */}
                <div className="w-[33%] max-w-[120px] min-w-[80px] shrink-0 flex flex-col justify-between">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 shadow-2xs">
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
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>

                  {/* LPA Salary Badge Under Video */}
                  <div className="mt-1.5 w-full text-center">
                    <span className="inline-block w-full py-0.5 px-1 rounded-md bg-emerald-50 border border-emerald-200/90 text-emerald-700 text-[8.5px] sm:text-[9.5px] font-black tracking-tight truncate shadow-2xs">
                      {course.salary}
                    </span>
                  </div>
                </div>

                {/* ═══ RIGHT SIDE: Title, Description, Tech Icons, Price & Unlock ═══ */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                  {/* Top Header: Title */}
                  <div>
                    <h3 className="text-[12.5px] sm:text-[14px] font-black text-slate-900 leading-snug">
                      {course.titlePrefix}
                      <span className="text-[#A100E8] font-black">
                        {course.titleHighlight}
                      </span>
                    </h3>

                    {/* Subtitle / Short Description */}
                    <p className="text-[9.5px] sm:text-[10px] text-slate-500 font-medium leading-snug line-clamp-2 mt-0.5">
                      {course.desc}
                    </p>
                  </div>

                  {/* 5 Tech Icons with Labels Row */}
                  <div className="my-1 w-full">
                    <div className="flex items-center justify-between gap-0.5 sm:gap-1 w-full">
                      {course.tools.map((tool) => (
                        <div
                          key={tool}
                          className="flex flex-col items-center justify-center flex-1 min-w-0"
                          title={tool}
                        >
                          <div className="w-4 h-4 flex items-center justify-center shrink-0">
                            <ToolIcon name={tool} className="w-3.5 h-3.5 object-contain" />
                          </div>
                          <span className="text-[7px] sm:text-[8px] font-bold text-slate-700 leading-tight truncate max-w-full text-center mt-0.5">
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Crossed-Out Price & Unlock Course Button */}
                  <div className="flex flex-wrap items-center justify-between gap-1 pt-1 border-t border-slate-100 min-w-0 w-full">
                    {/* Approved Crossed-Out Price (Black numbers with thin red strike) */}
                    <div className="relative inline-block font-black text-[11.5px] sm:text-[13px] text-slate-950 tracking-tight select-none shrink-0">
                      <span>{course.price}</span>
                      <span className="absolute left-[-2px] right-[-2px] top-1/2 -translate-y-1/2 h-[1.8px] bg-red-600 rotate-[-5deg] pointer-events-none" />
                    </div>

                    {/* Unlock Course Button (Deep Royal Blue with Gold Lock) */}
                    <button
                      type="button"
                      onClick={() => onUnlockCourse(course)}
                      className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#0a388c] hover:bg-[#082e73] text-white text-[9.5px] sm:text-[10.5px] font-black flex items-center gap-1 shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
                    >
                      <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-amber-400 shrink-0" />
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
