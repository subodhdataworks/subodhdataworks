import React, { useState, useMemo } from 'react';
import {
  Search,
  Bell,
  Layers,
  ChevronDown,
  ArrowRight,
  Code2,
  Sparkles,
  Flame,
  CheckCircle2,
  Lock,
  Filter,
  Check,
  Zap,
  BookOpen
} from 'lucide-react';

export interface CodingPracticeMasterHubProps {
  userName?: string;
  onOpenPython?: (topicId?: number) => void;
  onOpenSql?: () => void;
  onOpenDataAnalyst?: () => void;
  onOpenDataScience?: () => void;
  onOpenMlEngineering?: () => void;
  onOpenAiEngineering?: () => void;
  onOpenFullStack?: () => void;
  onOpenGenericPractice?: (courseName: string) => void;
  onOpenAdvisor?: () => void;
}

interface PracticeCardItem {
  id: number;
  num: number;
  numBg: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  topicsCount: number;
  iconUrl: string;
  categories: string[];
  courseKey: string;
}

const PRACTICE_CARDS: PracticeCardItem[] = [
  {
    id: 1,
    num: 1,
    numBg: '#a855f7',
    title: 'Python',
    subtitle1: 'Syntax • OOP • Libraries',
    subtitle2: 'Projects • Problems',
    topicsCount: 50,
    iconUrl: '/images/arena/icons/python.png',
    categories: ['All', 'Popular', 'Programming', 'Data & AI'],
    courseKey: 'python'
  },
  {
    id: 2,
    num: 2,
    numBg: '#2563eb',
    title: 'SQL',
    subtitle1: 'Queries • Joins • CTE',
    subtitle2: 'Window • Projects',
    topicsCount: 40,
    iconUrl: '/images/arena/icons/sql.png',
    categories: ['All', 'Popular', 'Programming', 'Data & AI'],
    courseKey: 'sql'
  },
  {
    id: 3,
    num: 3,
    numBg: '#16a34a',
    title: 'Excel',
    subtitle1: 'Formulas • Functions',
    subtitle2: 'Pivot Table • Projects',
    topicsCount: 30,
    iconUrl: '/images/arena/icons/excel.png',
    categories: ['All', 'Popular', 'Tools', 'Data & AI'],
    courseKey: 'excel'
  },
  {
    id: 4,
    num: 4,
    numBg: '#eab308',
    title: 'Power BI',
    subtitle1: 'Data Modeling • DAX',
    subtitle2: 'Visualizations • Projects',
    topicsCount: 30,
    iconUrl: '/images/arena/icons/powerbi.png',
    categories: ['All', 'Popular', 'Tools', 'Data & AI'],
    courseKey: 'powerbi'
  },
  {
    id: 5,
    num: 5,
    numBg: '#ec4899',
    title: 'Pandas',
    subtitle1: 'Data Cleaning • Analysis',
    subtitle2: 'Projects • Real Problems',
    topicsCount: 35,
    iconUrl: '/images/arena/icons/pandas.png',
    categories: ['All', 'Data & AI', 'Programming'],
    courseKey: 'pandas'
  },
  {
    id: 6,
    num: 6,
    numBg: '#6366f1',
    title: 'NumPy',
    subtitle1: 'Arrays • Functions',
    subtitle2: 'Mathematics • Projects',
    topicsCount: 30,
    iconUrl: '/images/arena/icons/numpy.png',
    categories: ['All', 'Data & AI', 'Programming'],
    courseKey: 'numpy'
  },
  {
    id: 7,
    num: 7,
    numBg: '#06b6d4',
    title: 'Matplotlib & Seaborn',
    subtitle1: 'Visualization • Charts',
    subtitle2: 'Graphs • Projects',
    topicsCount: 25,
    iconUrl: '/images/arena/icons/matplotlib.png',
    categories: ['All', 'Data & AI'],
    courseKey: 'matplotlib'
  },
  {
    id: 8,
    num: 8,
    numBg: '#d946ef',
    title: 'Statistics',
    subtitle1: 'Descriptive • Probability',
    subtitle2: 'Hypothesis • Projects',
    topicsCount: 30,
    iconUrl: '/images/arena/icons/statistics.png',
    categories: ['All', 'Data & AI'],
    courseKey: 'statistics'
  },
  {
    id: 9,
    num: 9,
    numBg: '#f97316',
    title: 'Machine Learning',
    subtitle1: 'Algorithms • Model Training',
    subtitle2: 'Evaluation • Projects',
    topicsCount: 40,
    iconUrl: '/images/arena/icons/ml.png',
    categories: ['All', 'Popular', 'Programming', 'Data & AI'],
    courseKey: 'ml_engineering'
  },
  {
    id: 10,
    num: 10,
    numBg: '#0284c7',
    title: 'Deep Learning',
    subtitle1: 'Neural Networks • CNN',
    subtitle2: 'RNN • Projects',
    topicsCount: 35,
    iconUrl: '/images/arena/icons/dl.png',
    categories: ['All', 'Data & AI'],
    courseKey: 'deep_learning'
  },
  {
    id: 11,
    num: 11,
    numBg: '#10b981',
    title: 'Generative AI',
    subtitle1: 'Prompting • LLMs • RAG',
    subtitle2: 'APIs • Projects',
    topicsCount: 30,
    iconUrl: '/images/arena/icons/genai.png',
    categories: ['All', 'Popular', 'Programming', 'Data & AI'],
    courseKey: 'ai_engineering'
  },
  {
    id: 12,
    num: 12,
    numBg: '#ef4444',
    title: 'Agentic AI',
    subtitle1: 'AI Agents • LangChain',
    subtitle2: 'Multi-Agent • Projects',
    topicsCount: 25,
    iconUrl: '/images/arena/icons/agenticai.png',
    categories: ['All', 'Popular', 'Programming', 'Data & AI'],
    courseKey: 'data_science'
  },
  {
    id: 13,
    num: 13,
    numBg: '#84cc16',
    title: 'JavaScript',
    subtitle1: 'Syntax • DOM • ES6+',
    subtitle2: 'Projects • Challenges',
    topicsCount: 35,
    iconUrl: '/images/arena/icons/js.png',
    categories: ['All', 'Programming', 'Web Dev'],
    courseKey: 'javascript'
  },
  {
    id: 14,
    num: 14,
    numBg: '#0ea5e9',
    title: 'React',
    subtitle1: 'Components • Hooks',
    subtitle2: 'Routing • Projects',
    topicsCount: 35,
    iconUrl: '/images/arena/icons/react.png',
    categories: ['All', 'Programming', 'Web Dev'],
    courseKey: 'react'
  }
];

const CATEGORIES = ['All', 'Popular', 'Programming', 'Data & AI', 'Web Dev', 'Tools'];

export const CodingPracticeMasterHub: React.FC<CodingPracticeMasterHubProps> = ({
  userName = 'Rahul',
  onOpenPython,
  onOpenSql,
  onOpenDataAnalyst,
  onOpenDataScience,
  onOpenMlEngineering,
  onOpenAiEngineering,
  onOpenFullStack,
  onOpenGenericPractice,
  onOpenAdvisor
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [courseDropdownOpen, setCourseDropdownOpen] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [notifySuccess, setNotifySuccess] = useState<boolean>(false);

  // Filter cards based on selected category and search input
  const filteredCards = useMemo(() => {
    return PRACTICE_CARDS.filter((card) => {
      const matchesCategory =
        activeCategory === 'All' || card.categories.includes(activeCategory);
      const matchesSearch =
        searchFilter.trim() === '' ||
        card.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        card.subtitle1.toLowerCase().includes(searchFilter.toLowerCase()) ||
        card.subtitle2.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchFilter]);

  const handleCardClick = (card: PracticeCardItem) => {
    switch (card.courseKey) {
      case 'python':
        if (onOpenPython) onOpenPython(1);
        else window.location.hash = '#python';
        break;
      case 'sql':
        if (onOpenSql) onOpenSql();
        else window.location.hash = '#sql';
        break;
      case 'excel':
      case 'powerbi':
        if (onOpenDataAnalyst) onOpenDataAnalyst();
        else window.location.hash = '#data-analyst';
        break;
      case 'pandas':
      case 'numpy':
      case 'matplotlib':
      case 'statistics':
      case 'data_science':
        if (onOpenDataScience) onOpenDataScience();
        else window.location.hash = '#data-science';
        break;
      case 'ml_engineering':
        if (onOpenMlEngineering) onOpenMlEngineering();
        else window.location.hash = '#ml-engineering';
        break;
      case 'ai_engineering':
        if (onOpenAiEngineering) onOpenAiEngineering();
        else window.location.hash = '#ai-engineering';
        break;
      case 'javascript':
      case 'react':
        if (onOpenFullStack) onOpenFullStack();
        else window.location.hash = '#full-stack';
        break;
      case 'deep_learning':
        if (onOpenGenericPractice) onOpenGenericPractice('Deep Learning');
        else if (onOpenAiEngineering) onOpenAiEngineering();
        break;
      default:
        if (onOpenGenericPractice) onOpenGenericPractice(card.title);
        break;
    }
  };

  const handleNotifyMe = () => {
    setNotifySuccess(true);
    setTimeout(() => setNotifySuccess(false), 4000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 text-slate-800">
      
      {/* ─── 1. HERO BANNER (1:1 with Reference Design) ─── */}
      <section className="relative rounded-3xl bg-gradient-to-r from-[#eef6ff] via-[#f3f7fd] to-[#ebf3ff] border border-[#d6e6fe] shadow-[0_4px_20px_rgba(37,99,235,0.06)] p-6 sm:p-8 md:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Soft Background Radial Light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-300/15 rounded-full blur-2xl pointer-events-none" />

        {/* Left Typography */}
        <div className="relative z-10 text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
            Coding <span className="text-[#1a73e8]">Practice</span>
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Practice course-wise code, complete challenges and level up your skills.
          </p>
        </div>

        {/* Right 3D Boy with Laptop & Badges Illustration */}
        <div className="relative z-10 shrink-0 flex items-center justify-center">
          <img
            src="/images/arena/coding_practice_hero_boy.png"
            alt="Coding Practice Illustration"
            className="h-28 sm:h-36 md:h-44 object-contain select-none pointer-events-none filter drop-shadow-sm transition-transform hover:scale-105 duration-300"
          />
        </div>
      </section>

      {/* ─── 2. FILTER PILLS & 13 COURSES BAR (1:1 with Reference Design) ─── */}
      <section className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-[#1a73e8] text-white shadow-sm shadow-blue-500/20'
                    : 'bg-[#f1f5f9] hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right 13 Courses Dropdown Button */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setCourseDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#1a73e8]" />
            <span>13 Courses</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${courseDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {courseDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setCourseDropdownOpen(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl py-2 z-40 animate-fadeIn text-left">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                  Select Practice Course
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {PRACTICE_CARDS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setCourseDropdownOpen(false);
                        handleCardClick(c);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
                    >
                      <span
                        className="w-4 h-4 rounded text-white text-[9px] font-black flex items-center justify-center shrink-0"
                        style={{ backgroundColor: c.numBg }}
                      >
                        {c.num}
                      </span>
                      <span className="truncate">{c.title}</span>
                      <span className="text-[10px] text-slate-400 ml-auto">{c.topicsCount} T</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─── 3. 14 CODING PRACTICE CARDS GRID + POWERGREEN AI TUTOR BANNER ─── */}
      <section className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4.5">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            {/* Card Header: Number Badge + Icon + Text */}
            <div className="flex items-start gap-3">
              {/* Number Badge */}
              <div
                className="w-5 h-5 rounded-md text-white text-[11px] font-black flex items-center justify-center shrink-0 shadow-sm mt-0.5"
                style={{ backgroundColor: card.numBg }}
              >
                {card.num}
              </div>

              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center shrink-0 p-1 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={card.iconUrl}
                  alt={card.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to Code icon if image fails
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Title & Subtitles */}
              <div className="min-w-0 flex-1 text-left">
                <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <div className="text-[11px] text-slate-400 mt-1 leading-tight truncate">
                  {card.subtitle1}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight truncate">
                  {card.subtitle2}
                </div>
              </div>
            </div>

            {/* Card Bottom: Progress Bar + Topics count + Arrow Button */}
            <div className="mt-4 pt-2">
              {/* Progress Track */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-blue-600 h-full w-0 rounded-full" />
              </div>

              {/* Text & Button */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  0 / {card.topicsCount} Topics
                </span>
                <button
                  type="button"
                  aria-label={`Open ${card.title} practice`}
                  className="w-7 h-7 rounded-full bg-[#f0f6ff] text-[#1a73e8] flex items-center justify-center group-hover:bg-[#1a73e8] group-hover:text-white transition-colors shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* ─── 4. POWERGREEN AI TUTOR BANNER (Bottom-Right Spanning 2 Columns) ─── */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 rounded-2xl p-4 bg-gradient-to-r from-[#f1effe] via-[#edf2fe] to-[#eff4fe] border border-[#e2e8f8] shadow-sm flex items-center justify-between gap-3 relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Mascot Robot */}
          <div className="shrink-0 flex items-center justify-center">
            <img
              src="/images/arena/tutor_robot_mascot.png"
              alt="PowerGreen AI Tutor"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm select-none"
            />
          </div>

          {/* Center Info & Notify Button */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                PowerGreen AI Tutor
              </h3>
              <span className="bg-[#ec4899] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                Coming Soon
              </span>
            </div>
            <p className="text-slate-500 text-xs mt-1 leading-snug">
              Get hints, explanations and solve your doubts with AI.
            </p>
            <button
              type="button"
              onClick={handleNotifyMe}
              className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
            >
              <Bell className="w-3.5 h-3.5 fill-white/20" />
              <span>{notifySuccess ? 'Subscribed!' : 'Notify Me'}</span>
            </button>
          </div>

          {/* Right Floating Code Document Badge */}
          <div className="shrink-0 hidden sm:flex items-center justify-center">
            <img
              src="/images/arena/tutor_code_badge.png"
              alt="Code Document"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-sm select-none"
            />
          </div>
        </div>
      </section>

      {/* Floating Toast Notification when user clicks Notify Me */}
      {notifySuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <div className="font-bold">You are on the VIP Waitlist!</div>
            <div className="text-slate-300">PowerGreen AI Tutor launch hone par aapko sabse pehle alert milega.</div>
          </div>
        </div>
      )}
    </div>
  );
};
