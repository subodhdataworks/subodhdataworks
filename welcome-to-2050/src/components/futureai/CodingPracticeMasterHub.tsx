import React, { useState, useMemo, useEffect } from 'react';
import './CodingPracticeMasterHub.css';
import { soundEffects } from '../../services/soundEffects';
import { isCourseUnlocked, isAnyCourseUnlocked } from '../../services/courseUnlockService';
import {
  Search,
  Bell,
  Layers,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Code2,
  Sparkles,
  Flame,
  CheckCircle2,
  Lock,
  Unlock,
  ShieldCheck,
  X,
  GraduationCap,
  Filter,
  Check,
  Zap,
  BookOpen,
  BarChart3,
  Trophy,
  BriefcaseBusiness
} from 'lucide-react';

// =========================================================================
// 14 CRISP, HIGH-RESOLUTION VECTOR ICONS (NO CROPPED PIXELS, VECTOR PRECISION)
// =========================================================================

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-9 h-9 shrink-0">
    <path fill="url(#py-blue)" d="M63.2 0c-15.6 0-25 6.6-29.2 12.3-5 6.8-5.7 13.9-5.7 21.6v9.4h35.2v4.7H18.9c-8 0-14.9 4.7-17 13.8C-.2 71.4-.6 81.3 1.9 90.6c2.2 8.3 8.3 13.7 17 13.7h11.2v-15.5c0-8.8 7.4-16.5 16.5-16.5h34.8c7.3 0 13.3-6.2 13.3-13.5V34c0-7.3-6.2-13-13.5-13.7l-4.7-.3c0-3.3.3-7.5-.7-10.7C74.6 3.4 68.6 0 63.2 0zm-10 10.4c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1z" />
    <path fill="url(#py-yellow)" d="M64.8 128c15.6 0 25-6.6 29.2-12.3 5-6.8 5.7-13.9 5.7-21.6v-9.4H64.5V80h44.6c8 0 14.9-4.7 17-13.8 2.1-9.6 2.5-19.5 0-28.8-2.2-8.3-8.3-13.7-17-13.7H97.9v15.5c0 8.8-7.4 16.5-16.5 16.5H46.6c-7.3 0-13.3 6.2-13.3 13.5V94c0 7.3 6.2 13 13.5 13.7l4.7.3c0 3.3-.3 7.5.7 10.7 1.9 5.9 7.9 9.3 12.6 9.3zm10-10.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z" />
    <defs>
      <linearGradient id="py-blue" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stopColor="#387eb8"/>
        <stop offset="100%" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="py-yellow" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stopColor="#ffe873"/>
        <stop offset="100%" stopColor="#ffd43b"/>
      </linearGradient>
    </defs>
  </svg>
);

const SqlIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <ellipse cx="24" cy="11" rx="17" ry="6" fill="#0284c7" />
    <ellipse cx="24" cy="10" rx="16" ry="5.5" fill="#38bdf8" />
    <path d="M7 11v11c0 3.5 7.6 6.5 17 6.5s17-3 17-6.5V11" fill="none" stroke="#0284c7" strokeWidth="2.5" />
    <path d="M7 22v11c0 3.5 7.6 6.5 17 6.5s17-3 17-6.5V22" fill="none" stroke="#0284c7" strokeWidth="2.5" />
    <ellipse cx="24" cy="22" rx="16" ry="5.5" fill="#0ea5e9" opacity="0.3" />
    <ellipse cx="24" cy="33" rx="16" ry="5.5" fill="#0284c7" opacity="0.4" />
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="6" y="6" width="36" height="36" rx="6" fill="#107c41" />
    <rect x="22" y="10" width="18" height="28" rx="2" fill="#185c37" />
    <path d="M25 15h11M25 21h11M25 27h11M25 33h11" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="4" y="11" width="22" height="26" rx="4" fill="#107c41" stroke="#22c55e" strokeWidth="1" />
    <text x="15" y="29" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">X</text>
  </svg>
);

const PowerBiIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="6" y="24" width="8" height="18" rx="2" fill="#facc15" />
    <rect x="18" y="16" width="8" height="26" rx="2" fill="#eab308" />
    <rect x="30" y="8" width="8" height="34" rx="2" fill="#ca8a04" />
    <path d="M30 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v34H30V8z" fill="#f59e0b" />
  </svg>
);

const PandasIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="8" y="10" width="7" height="28" rx="3.5" fill="#130654" />
    <rect x="20.5" y="6" width="7" height="36" rx="3.5" fill="#ff4a00" />
    <rect x="33" y="16" width="7" height="22" rx="3.5" fill="#e70488" />
    <circle cx="11.5" cy="18" r="2" fill="#ffffff" />
    <circle cx="24" cy="22" r="2" fill="#ffffff" />
    <circle cx="36.5" cy="24" r="2" fill="#ffffff" />
  </svg>
);

const NumpyIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <polygon points="24,6 42,16 24,26 6,16" fill="#4dabcf" />
    <polygon points="6,16 24,26 24,44 6,34" fill="#013243" />
    <polygon points="42,16 24,26 24,44 42,34" fill="#4d77cf" />
    <text x="24" y="29" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">N</text>
  </svg>
);

const MatplotlibIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="10" y="24" width="5" height="14" rx="1.5" fill="#06b6d4" />
    <rect x="18" y="18" width="5" height="20" rx="1.5" fill="#3b82f6" />
    <rect x="26" y="12" width="5" height="26" rx="1.5" fill="#8b5cf6" />
    <rect x="34" y="20" width="5" height="18" rx="1.5" fill="#ec4899" />
    <path d="M10 22 Q 22 8, 38 15" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const StatisticsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="8" y="26" width="6" height="14" rx="2" fill="#d946ef" opacity="0.6" />
    <rect x="17" y="18" width="6" height="22" rx="2" fill="#c026d3" opacity="0.8" />
    <rect x="26" y="12" width="6" height="28" rx="2" fill="#a21caf" />
    <rect x="35" y="20" width="6" height="20" rx="2" fill="#86198f" opacity="0.7" />
    <path d="M8 26 C 16 10, 26 8, 38 18" fill="none" stroke="#a21caf" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const MachineLearningIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="6" y="6" width="36" height="36" rx="10" fill="#fff7ed" stroke="#fdba74" strokeWidth="1.5" />
    <path d="M24 12c-4 0-7 3-7 7 0 2 1 3.5 2 4.5V28h10v-4.5c1-1 2-2.5 2-4.5 0-4-3-7-7-7z" fill="#f97316" />
    <circle cx="17" cy="19" r="2" fill="#ea580c" />
    <circle cx="31" cy="19" r="2" fill="#ea580c" />
    <circle cx="24" cy="16" r="2" fill="#ffedd5" />
    <path d="M20 32h8M22 35h4" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="24" r="2" fill="#f97316" />
    <circle cx="36" cy="24" r="2" fill="#f97316" />
    <line x1="14" y1="24" x2="18" y2="22" stroke="#ea580c" strokeWidth="1.5" />
    <line x1="34" y1="24" x2="30" y2="22" stroke="#ea580c" strokeWidth="1.5" />
  </svg>
);

const DeepLearningIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <circle cx="12" cy="16" r="3.5" fill="#0284c7" />
    <circle cx="12" cy="32" r="3.5" fill="#0284c7" />
    <circle cx="24" cy="10" r="3.5" fill="#38bdf8" />
    <circle cx="24" cy="24" r="3.5" fill="#38bdf8" />
    <circle cx="24" cy="38" r="3.5" fill="#38bdf8" />
    <circle cx="36" cy="16" r="3.5" fill="#0284c7" />
    <circle cx="36" cy="32" r="3.5" fill="#0284c7" />
    <line x1="12" y1="16" x2="24" y2="10" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="12" y1="16" x2="24" y2="24" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="12" y1="32" x2="24" y2="24" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="12" y1="32" x2="24" y2="38" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="24" y1="10" x2="36" y2="16" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="24" y1="24" x2="36" y2="16" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="24" y1="24" x2="36" y2="32" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
    <line x1="24" y1="38" x2="36" y2="32" stroke="#0284c7" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const GenAiIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <circle cx="24" cy="24" r="18" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
    <g transform="translate(24,24) scale(0.65)">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <path
          key={deg}
          d="M0,-18 C6,-12 10,-4 8,4 C6,10 0,16 0,16 C0,16 -6,10 -8,4 C-10,-4 -6,-12 0,-18"
          fill="#10b981"
          opacity="0.8"
          transform={`rotate(${deg})`}
        />
      ))}
      <circle cx="0" cy="0" r="4" fill="#059669" />
    </g>
  </svg>
);

const AgenticAiIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="10" y="14" width="28" height="24" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
    <circle cx="18" cy="24" r="3.5" fill="#ef4444" />
    <circle cx="30" cy="24" r="3.5" fill="#ef4444" />
    <path d="M20 31 Q 24 34 28 31" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="8" x2="24" y2="14" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="7" r="2.5" fill="#dc2626" />
    <line x1="6" y1="24" x2="10" y2="24" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="24" x2="42" y2="24" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <rect x="6" y="6" width="36" height="36" rx="6" fill="#f7df1e" />
    <path d="M20 23v11c0 3-1.5 4-4 4-2.5 0-3.5-1.5-3.5-2.5l2.5-1.5c.3.5.7.8 1.2.8.8 0 1.3-.4 1.3-1.8V23h2.5zM35.5 32c0 3.5-2.5 6-6.5 6-4 0-6.2-2.3-6.2-5.5l2.6-1.5c.5 1.7 1.8 3.5 3.6 3.5 1.5 0 2.5-.8 2.5-2 0-1.4-1.1-2-3-2.8l-1-.4c-3-1.3-4.5-2.8-4.5-5.3 0-3.2 2.5-5.5 6-5.5 3.3 0 5.4 1.8 5.8 4.7l-2.6 1.4c-.4-1.5-1.3-2.6-3.2-2.6-1.3 0-2.2.8-2.2 1.8 0 1.2.8 1.8 2.5 2.5l1.2.5c3.2 1.3 4.9 2.8 4.9 5.3z" fill="#000000" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9 shrink-0">
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#0ea5e9" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#0ea5e9" strokeWidth="2" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#0ea5e9" strokeWidth="2" transform="rotate(120 24 24)" />
    <circle cx="24" cy="24" r="3.5" fill="#0ea5e9" />
  </svg>
);

export interface CodingPracticeMasterHubProps {
  userName?: string;
  isEnrolled?: boolean;
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
  onNavigateToCourses?: () => void;
  onUnlockAll?: () => void;
  onOpenPython?: (topicId?: number) => void;
  onOpenSql?: () => void;
  onOpenExcel?: () => void;
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
  iconComponent: React.ReactNode;
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
    iconComponent: <PythonIcon />,
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
    iconComponent: <SqlIcon />,
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
    iconComponent: <ExcelIcon />,
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
    iconComponent: <PowerBiIcon />,
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
    iconComponent: <PandasIcon />,
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
    iconComponent: <NumpyIcon />,
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
    iconComponent: <MatplotlibIcon />,
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
    iconComponent: <StatisticsIcon />,
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
    iconComponent: <MachineLearningIcon />,
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
    iconComponent: <DeepLearningIcon />,
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
    iconComponent: <GenAiIcon />,
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
    iconComponent: <AgenticAiIcon />,
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
    iconComponent: <JavaScriptIcon />,
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
    iconComponent: <ReactIcon />,
    categories: ['All', 'Programming', 'Web Dev'],
    courseKey: 'react'
  }
];

const CATEGORIES = ['All', 'Popular', 'Programming', 'Data & AI', 'Web Dev', 'Tools'];

export const CodingPracticeMasterHub: React.FC<CodingPracticeMasterHubProps> = ({
  userName = 'Rahul',
  isEnrolled,
  isLoggedIn = false,
  onOpenLogin,
  onNavigateToCourses,
  onUnlockAll,
  onOpenPython,
  onOpenSql,
  onOpenExcel,
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
  const [activeBlankCourse, setActiveBlankCourse] = useState<PracticeCardItem | null>(null);
  const [lockedModalCourse, setLockedModalCourse] = useState<PracticeCardItem | null>(null);
  const [showLoginGate, setShowLoginGate] = useState<boolean>(false);

  const [internalEnrolled, setInternalEnrolled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {

      if (isCourseUnlocked('data_analyst') || isAnyCourseUnlocked()) return true;
    }
    return isEnrolled || false;
  });

  useEffect(() => {
    if (isEnrolled !== undefined) {
      setInternalEnrolled(isEnrolled);
    }
  }, [isEnrolled]);

  useEffect(() => {
    const handleUnlocked = () => {
      setInternalEnrolled(true);
    };
    window.addEventListener('futureai_course_unlocked', handleUnlocked);
    return () => window.removeEventListener('futureai_course_unlocked', handleUnlocked);
  }, []);

  // Sync track hash with activeBlankCourse so Google Chrome back button returns to all 14 cards
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      if (h.includes('track=')) {
        const params = new URLSearchParams(h.split('?')[1] || '');
        const trackKey = params.get('track');
        const found = PRACTICE_CARDS.find((c) => c.courseKey === trackKey);
        if (found) setActiveBlankCourse(found);
      } else {
        setActiveBlankCourse(null);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [activeCategory, activeBlankCourse]);

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
    const isEnrolledStudent = internalEnrolled || isCourseUnlocked('data_analyst') || isAnyCourseUnlocked();
    const isAuth = Boolean(
      isLoggedIn ||
      isEnrolledStudent ||
      (typeof window !== 'undefined' && (
        localStorage.getItem('futureai_logged_in') === 'true' ||
        localStorage.getItem('futureai_logged_in') === 'true' ||
        localStorage.getItem('futureai_user_email') ||
        localStorage.getItem('futureai_user_phone')
      ))
    );

    if (!isAuth) {
      soundEffects.playLock();
      if (onOpenLogin) {
        onOpenLogin();
      } else {
        setShowLoginGate(true);
      }
      return;
    }

    switch (card.courseKey) {
      case 'python':
        if (onOpenPython) onOpenPython(1);
        else window.location.hash = '#python-challenges';
        break;
      case 'sql':
        if (onOpenSql) onOpenSql();
        else window.location.hash = '#sql-challenges';
        break;
      case 'excel':
        if (onOpenExcel) onOpenExcel();
        else window.location.hash = '#excel-challenges';
        break;
      default: {
        // Items 4 to 14: Power BI, Pandas, NumPy, Matplotlib & Seaborn, Statistics, Machine Learning, Deep Learning, Generative AI, Agentic AI, JavaScript, React
        if (!internalEnrolled) {
          soundEffects.playLock();
          setLockedModalCourse(card);
        } else {
          soundEffects.playClick();
          setActiveBlankCourse(card);
          if (typeof window !== 'undefined') {
            window.location.hash = `#practice?track=${card.courseKey}`;
          }
        }
        break;
      }
    }
  };

  const handleNotifyMe = () => {
    setNotifySuccess(true);
    setTimeout(() => setNotifySuccess(false), 4000);
  };

  // If an enrolled course is opened (Items 4 to 14)
  if (activeBlankCourse) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-slate-800">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <span className="text-slate-400">DSA Coding Practice</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">{activeBlankCourse.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Course Enrolled</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs border border-slate-200">
              0 / {activeBlankCourse.topicsCount} Topics
            </span>
          </div>
        </div>

        {/* Blank Page Content - "content updating soon" */}
        <div className="w-full min-h-[500px] bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center p-3 mb-5 shadow-xs">
            {activeBlankCourse.iconComponent}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
            {activeBlankCourse.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md mb-4">
            {activeBlankCourse.subtitle1} • {activeBlankCourse.subtitle2}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm shadow-xs mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Content Updating Soon</span>
          </div>
          <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
            Hands-on coding challenges for {activeBlankCourse.title} are currently being curated. Check back shortly!
          </p>
          <button
            onClick={() => {
              soundEffects.playClick();
              if (typeof window !== 'undefined' && window.location.hash.includes('track=')) {
                window.history.back();
              } else {
                setActiveBlankCourse(null);
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition shadow-sm cursor-pointer"
          >
            ← Back to Practice Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cpm-root-container w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 text-slate-800">
      
      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* MOBILE INTERFACE (< 768px) - 1:1 WITH REFERENCE DESIGN               */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div className="cpm-mobile-only">
        {/* 1. Compact Mobile Hero Banner */}
        <section className="cpm-mobile-hero">
          <div className="cpm-hero-left">
            <span className="cpm-hero-pill">
              <Code2 className="w-2.5 h-2.5 text-[#1a5fe0]" />
              Practice Today, Get Job-Ready
            </span>
            <h1 className="cpm-hero-title">
              Coding <span>Practice</span>
            </h1>
            <p className="cpm-hero-desc">
              Practice course-wise code, solve real-world problems and level up your skills.
            </p>

            {/* 4 Feature Highlights */}
            <ul className="cpm-hero-features">
              <li className="cpm-hero-feature-item">
                <span className="cpm-feature-icon-box bg-blue-50 text-[#1a73e8] border-blue-100">
                  <Code2 className="w-2.5 h-2.5" />
                </span>
                <span className="cpm-feature-text">
                  Course-wise<br />Problems
                </span>
              </li>
              <li className="cpm-hero-feature-item">
                <span className="cpm-feature-icon-box bg-emerald-50 text-emerald-600 border-emerald-100">
                  <BarChart3 className="w-2.5 h-2.5" />
                </span>
                <span className="cpm-feature-text">
                  Track Your<br />Progress
                </span>
              </li>
              <li className="cpm-hero-feature-item">
                <span className="cpm-feature-icon-box bg-amber-50 text-amber-500 border-amber-100">
                  <Trophy className="w-2.5 h-2.5" />
                </span>
                <span className="cpm-feature-text">
                  Challenge<br />Yourself
                </span>
              </li>
              <li className="cpm-hero-feature-item">
                <span className="cpm-feature-icon-box bg-rose-50 text-rose-500 border-rose-100">
                  <BriefcaseBusiness className="w-2.5 h-2.5" />
                </span>
                <span className="cpm-feature-text">
                  Get<br />Job-Ready
                </span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                document.getElementById('mobile-practice-courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="cpm-hero-btn"
            >
              Start Practicing Now
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="cpm-hero-right">
            <img
              src="/images/arena/coding_practice_hero_v2.png"
              alt="Student Coding"
              className="cpm-hero-illustration"
              draggable={false}
            />
          </div>
        </section>

        {/* 2. Horizontally Scrollable Category Pills */}
        <div id="mobile-practice-courses" className="cpm-tabs-scroll scroll-mt-20">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setActiveCategory(cat);
                }}
                className={`cpm-tab-pill ${isActive ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3. Section Header: Heading + Dynamic Course Count Dropdown */}
        <div className="cpm-section-header">
          <div className="cpm-section-titles">
            <h2 className="cpm-section-heading">Choose a Course &amp; Start Practicing</h2>
            <p className="cpm-section-subheading">Learn by doing. Solve problems and build real skills.</p>
          </div>

          <div className="cpm-course-count-dropdown">
            <button
              type="button"
              onClick={() => setCourseDropdownOpen((prev) => !prev)}
              className="cpm-course-count-btn"
            >
              <span>📚</span>
              <span>{filteredCards.length} Courses</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${courseDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu on Mobile */}
            {courseDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCourseDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl py-2 z-50 animate-fadeIn text-left">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
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
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
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
        </div>

        {/* 4. Two-Column Compact Course Grid */}
        <div className="cpm-cards-grid">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="cpm-course-card"
            >
              <div className="cpm-card-top">
                <div
                  className="cpm-card-badge"
                  style={{ backgroundColor: card.numBg }}
                >
                  {card.num}
                </div>
                <div className="cpm-card-icon-wrap">
                  {card.iconComponent}
                </div>
                <div className="cpm-card-info">
                  <h3 className="cpm-card-title">{card.title}</h3>
                  <div className="cpm-card-subtitle">
                    {card.subtitle1}
                    <br />
                    {card.subtitle2}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="cpm-card-progress-track">
                  <div className="cpm-card-progress-fill" style={{ width: '0%' }} />
                </div>
                <div className="cpm-card-bottom">
                  <span className="cpm-card-topics-count">0 / {card.topicsCount} Topics</span>
                  <button
                    type="button"
                    aria-label={`Open ${card.title} practice`}
                    className="cpm-card-arrow-btn"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* DESKTOP INTERFACE (>= 768px) - 100% UNTOUCHED ORIGINAL LAYOUT        */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div className="cpm-desktop-only">
      {/* ─── 1. HERO BANNER (Compact Premium Reference Design) ─── */}
      <section className="relative rounded-[22px] bg-gradient-to-r from-[#f7fbff] via-[#eef5ff] to-[#e3eeff] border border-[#d6e6fe] shadow-[0_6px_28px_rgba(37,99,235,0.08)] overflow-hidden flex flex-col md:flex-row items-stretch md:h-[320px] md:max-h-[340px]">
        {/* Soft futuristic glow & waves */}
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 250 C 250 180, 450 320, 700 240 S 1050 160, 1200 220" fill="none" stroke="#bcd6ff" strokeWidth="1.5" />
          <path d="M0 280 C 300 220, 500 330, 760 270 S 1080 200, 1200 260" fill="none" stroke="#d3e4ff" strokeWidth="1.2" />
        </svg>

        {/* Left Content */}
        <div className="relative z-10 text-left flex flex-col justify-center px-5 pt-6 pb-4 sm:px-8 md:pl-10 md:pr-4 md:py-6 md:w-[46%] lg:w-[44%] shrink-0">
          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#e3eeff] border border-[#c9dcff] text-[#1a5fe0] text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase">
            <Code2 className="w-3.5 h-3.5" />
            Practice Today, Get Job-Ready
          </span>
          <h1 className="mt-2.5 text-[28px] min-[375px]:text-[32px] sm:text-[40px] lg:text-[46px] font-black text-[#0b1a3a] tracking-tight leading-[1.05]">
            Coding <span className="text-[#1a6bff]">Practice</span>
          </h1>
          <p className="mt-2 text-slate-600 text-[13px] sm:text-[15px] leading-snug max-w-md">
            Practice course-wise code, solve real-world problems and level up your skills.
          </p>

          {/* Feature highlights */}
          <ul className="mt-3.5 grid grid-cols-4 max-w-md">
            {[
              { icon: <Code2 className="w-4 h-4" />, bg: 'bg-blue-50 text-[#1a6bff] border-blue-100', l1: 'Course-wise', l2: 'Problems' },
              { icon: <BarChart3 className="w-4 h-4" />, bg: 'bg-emerald-50 text-emerald-600 border-emerald-100', l1: 'Track Your', l2: 'Progress' },
              { icon: <Trophy className="w-4 h-4" />, bg: 'bg-amber-50 text-amber-500 border-amber-100', l1: 'Challenge', l2: 'Yourself' },
              { icon: <BriefcaseBusiness className="w-4 h-4" />, bg: 'bg-rose-50 text-rose-500 border-rose-100', l1: 'Get', l2: 'Job-Ready' },
            ].map((f, i) => (
              <li key={f.l2} className={`flex flex-col items-start gap-1 px-1.5 sm:px-3 ${i > 0 ? 'border-l border-slate-200' : '!pl-0'}`}>
                <span className={`w-7 h-7 rounded-lg border flex items-center justify-center ${f.bg}`}>{f.icon}</span>
                <span className="text-[10px] min-[375px]:text-[11px] sm:text-xs font-bold text-[#0b1a3a] leading-tight">
                  {f.l1}<br />{f.l2}
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              document.getElementById('practice-courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="mt-4 self-start inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-[#1a6bff] to-[#0b5cf0] hover:from-[#0b5cf0] hover:to-[#0047d6] text-white text-sm font-bold shadow-[0_6px_18px_rgba(26,107,255,0.35)] transition-all active:scale-95 cursor-pointer"
          >
            Start Practicing Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Illustration (from provided reference) */}
        <div className="relative z-0 flex-1 min-w-0 flex items-end justify-center md:justify-end">
          <img
            src="/images/arena/coding_practice_hero_v2.png"
            alt="3D student coding on a laptop with Python, DSA, SQL and Web Dev books"
            className="w-full h-auto md:h-full md:w-auto max-w-full object-contain object-right-bottom select-none [mask-image:linear-gradient(to_right,transparent,black_12%)]"
            draggable={false}
          />
        </div>
      </section>

      {/* ─── 2. FILTER PILLS & 13 COURSES BAR (1:1 with Reference Design) ─── */}
      <section id="practice-courses" className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 scroll-mt-24">
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
        {filteredCards.map((card) => {
          const isLocked = !internalEnrolled && card.id >= 4;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`group bg-white rounded-2xl p-4 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isLocked
                  ? 'border-slate-200/90 shadow-2xs hover:border-amber-300 hover:shadow-md'
                  : 'border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-blue-200'
              }`}
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

                {/* Vector Icon Container (Ultra Crisp, High Resolution) */}
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center shrink-0 p-1 group-hover:scale-105 transition-transform duration-200">
                  {card.iconComponent}
                </div>

                {/* Title & Subtitles */}
                <div className="min-w-0 flex-1 text-left">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight group-hover:text-blue-600 transition-colors truncate">
                      {card.title}
                    </h3>
                    {isLocked && (
                      <span className="shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
                        <Lock className="w-2.5 h-2.5 text-amber-600" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-tight truncate">
                    {card.subtitle1}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight truncate">
                    {card.subtitle2}
                  </div>
                </div>
              </div>

              {/* Card Bottom: Progress Bar + Topics count + Arrow/Lock Button */}
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
                  {isLocked ? (
                    <div
                      title="Enroll in any course to unlock"
                      className="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-2xs border border-amber-200"
                    >
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <button
                      type="button"
                      aria-label={`Open ${card.title} practice`}
                      className="w-7 h-7 rounded-full bg-[#f0f6ff] text-[#1a73e8] flex items-center justify-center group-hover:bg-[#1a73e8] group-hover:text-white transition-colors shadow-sm cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* ─── 4. POWERGREEN AI TUTOR BANNER (Original Uncropped 3D Mascot) ─── */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#f1effe] via-[#edf2fe] to-[#eff4fe] border border-[#e2e8f8] shadow-sm flex items-center justify-between gap-4 relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Mascot Robot (Original 3D AI Generated) */}
          <div className="shrink-0 flex items-center justify-center">
            <img
              src="/images/arena/powergreen_tutor_original.jpg"
              alt="PowerGreen AI Tutor Robot"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-sm select-none"
            />
          </div>

          {/* Center Info & Notify Button */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                PowerGreen AI Tutor
              </h3>
              <span className="bg-[#ec4899] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                Coming Soon
              </span>
            </div>
            <p className="text-slate-500 text-xs mt-1.5 leading-snug">
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
        </div>
      </section>
      </div>

      {/* ─── MODAL: ENROLL IN COURSE TO UNLOCK PRACTICE TRACK ─── */}
      {lockedModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 sm:p-7 shadow-2xl relative text-left">
            {/* Close button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setLockedModalCourse(null);
              }}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lock Badge & Icon */}
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
              <Lock className="w-7 h-7" />
            </div>

            {/* Course name pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
              <span>{lockedModalCourse.title} Practice Track</span>
            </div>

            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
              Enroll in Any 1 Course to Unlock
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              <strong>{lockedModalCourse.title}</strong> ke coding challenges unlock karne ke liye kisi bhi <strong>1 Course</strong> me enroll karein. Kisi ek me enroll hone ke baad tabhi ye open hoga!
            </p>

            {/* Benefits List */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3.5 space-y-2 mb-5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All {lockedModalCourse.topicsCount} practical challenge topics unlock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hands-on live coding &amp; real-world tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Industry placement &amp; interview challenges</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setLockedModalCourse(null);
                  if (onNavigateToCourses) {
                    onNavigateToCourses();
                  } else {
                    window.location.hash = '#courses';
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-98 transition cursor-pointer"
              >
                <span>Explore &amp; Enroll in Courses →</span>
              </button>

            </div>
          </div>
        </div>
      )}

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
