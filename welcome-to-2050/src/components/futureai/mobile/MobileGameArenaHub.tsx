import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Gamepad2,
  Trophy,
  Flame,
  Star,
  Play,
  Lock,
  Coins,
  Gem,
  Award,
  Zap,
  CheckCircle2,
  Code2,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Bot,
  X,
  HelpCircle,
  Clock,
  Crown,
  Target,
  Gift,
  Search,
  Menu,
  User,
  ArrowRight,
  SlidersHorizontal,
  Layers,
  Brain,
  Cpu,
  Palette,
  Briefcase,
  Megaphone,
  BookOpen,
  Building2,
  Sparkle
} from 'lucide-react';
import { getLearnerTelemetry } from '../../../services/realAuthService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import { FutureLogo } from '../FutureLogo';

export interface MobileGameArenaHubProps {
  userName?: string;
  onPlayPython?: (topicId?: number) => void;
  onLockedGame?: (gameName: string) => void;
  onNavigateBack?: () => void;
  onOpenAdvisor?: () => void;
  onOpenLogin?: () => void;
}

export interface GameCourseItem {
  num: number;
  id: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  subtitle: string;
  skills: string;
  iconBg: string;
  iconColor: string;
  image: string;
  category: 'all' | 'ai' | 'dev' | 'business';
  gameType: string;
  challenge: {
    question: string;
    codeSnippet?: string;
    options: string[];
    correct: number;
    explanation: string;
    xp: number;
  };
}

export const MobileGameArenaHub: React.FC<MobileGameArenaHubProps> = ({
  userName = 'Learner',
  onPlayPython,
  onLockedGame,
  onOpenLogin,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [telemetry, setTelemetry] = useState(getLearnerTelemetry);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'dev' | 'business'>('all');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [activeChallengeCourse, setActiveChallengeCourse] = useState<GameCourseItem | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setTelemetry(getLearnerTelemetry());
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('focus', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('focus', handleUpdate);
    };
  }, []);

  // 13 Game Courses Matching Reference Image Exactly
  const gameCourses: GameCourseItem[] = [
    {
      num: 1,
      id: 'data-analyst-genai',
      badgeColor: 'text-white',
      badgeBg: 'bg-purple-600',
      title: 'Data Analyst with GenAI',
      subtitle: 'Analytics & SQL Gaming',
      skills: 'Python • SQL • Excel • Power BI • Statistics • Generative AI',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image: '/images/gamezone/thumb_1.jpg',
      category: 'ai',
      gameType: 'SQL Query Arena',
      challenge: {
        question: 'Which SQL clause is used to filter records grouped by an aggregation?',
        codeSnippet: 'SELECT Department, AVG(Salary) FROM Employees GROUP BY Department ??? AVG(Salary) > 50000;',
        options: ['WHERE', 'HAVING', 'FILTER', 'ORDER BY'],
        correct: 1,
        explanation: 'HAVING is applied after aggregation (GROUP BY), whereas WHERE filters before grouping.',
        xp: 150,
      },
    },
    {
      num: 2,
      id: 'data-science-agentic-ai',
      badgeColor: 'text-white',
      badgeBg: 'bg-blue-600',
      title: 'Data Science & Agentic AI',
      subtitle: 'Neural & Agent Simulators',
      skills: 'Python • ML • DL • Statistics • Agentic AI',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image: '/images/gamezone/thumb_2.jpg',
      category: 'ai',
      gameType: 'AI Agent Architecture',
      challenge: {
        question: 'In an autonomous multi-agent system, what mechanism enables agents to call external tools?',
        codeSnippet: 'agent.invoke(tool_name="web_search", query="latest stock metrics")',
        options: ['Backpropagation', 'Tool Calling / Function Calling', 'Stochastic Gradient Descent', 'One-Hot Encoding'],
        correct: 1,
        explanation: 'Tool / Function calling allows LLMs to output structured payloads that trigger APIs and external functions.',
        xp: 180,
      },
    },
    {
      num: 3,
      id: 'ml-engineering',
      badgeColor: 'text-white',
      badgeBg: 'bg-emerald-600',
      title: 'ML Engineering',
      subtitle: 'MLOps & Pipeline Wars',
      skills: 'Model Training • MLOps • Deployment • LLMOps',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      image: '/images/gamezone/thumb_3.jpg',
      category: 'ai',
      gameType: 'PyTorch Pipeline Quest',
      challenge: {
        question: 'Which tool is industry-standard for experiment tracking and model registry in MLOps pipelines?',
        codeSnippet: 'with mlflow.start_run(): mlflow.log_metric("accuracy", val_acc)',
        options: ['Docker', 'MLflow', 'Nginx', 'PostgreSQL'],
        correct: 1,
        explanation: 'MLflow is the open-source industry standard for tracking hyperparameters, metrics, and saving model artifacts.',
        xp: 160,
      },
    },
    {
      num: 4,
      id: 'ai-engineering',
      badgeColor: 'text-white',
      badgeBg: 'bg-orange-500',
      title: 'AI Engineering',
      subtitle: 'RAG & Vector Combat',
      skills: 'LLMs • RAG • AI Agents • APIs • Deployment',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      image: '/images/gamezone/thumb_4.jpg',
      category: 'ai',
      gameType: 'RAG Pipeline Builder',
      challenge: {
        question: 'What is the primary role of a Vector Database (e.g. Pinecone, ChromaDB) in RAG?',
        codeSnippet: 'retriever = vector_db.as_retriever(search_kwargs={"k": 3})',
        options: ['Relational joins', 'Semantic similarity search using embeddings', 'Executing raw SQL', 'CSS UI rendering'],
        correct: 1,
        explanation: 'Vector DBs calculate cosine similarity / dot products between text query embeddings and indexed chunks.',
        xp: 170,
      },
    },
    {
      num: 5,
      id: 'react-frontend-dev',
      badgeColor: 'text-white',
      badgeBg: 'bg-pink-600',
      title: 'React Front-End Development',
      subtitle: 'UI Component Arena',
      skills: 'HTML • CSS • JavaScript • React • UI Challenges',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      image: '/images/gamezone/thumb_5.jpg',
      category: 'dev',
      gameType: 'React Hook Challenge',
      challenge: {
        question: 'Which React Hook is used to perform side effects like fetching data or subscribing to events?',
        codeSnippet: 'useEffect(() => { fetchMetrics(); }, []);',
        options: ['useState', 'useEffect', 'useMemo', 'useReducer'],
        correct: 1,
        explanation: 'useEffect handles side-effects after the component renders into the DOM.',
        xp: 140,
      },
    },
    {
      num: 6,
      id: 'full-stack-web-dev',
      badgeColor: 'text-white',
      badgeBg: 'bg-cyan-600',
      title: 'Full Stack Web Development',
      subtitle: 'API & Database Master',
      skills: 'Frontend • Backend • APIs • Database • Deployment',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      image: '/images/gamezone/thumb_6.jpg',
      category: 'dev',
      gameType: 'Full-Stack REST Combat',
      challenge: {
        question: 'Which HTTP method should be used to partially update an existing resource in a REST API?',
        codeSnippet: 'app.patch("/api/users/:id", updateUserPartial);',
        options: ['GET', 'POST', 'PATCH', 'DELETE'],
        correct: 2,
        explanation: 'PATCH applies partial modifications, whereas PUT typically replaces the entire resource.',
        xp: 150,
      },
    },
    {
      num: 7,
      id: 'ui-ux-design-ai',
      badgeColor: 'text-white',
      badgeBg: 'bg-purple-600',
      title: 'UI/UX Design with Figma & AI',
      subtitle: 'Design System Duel',
      skills: 'Wireframes • Prototyping • Design Systems • AI Design',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image: '/images/gamezone/thumb_7.jpg',
      category: 'business',
      gameType: 'Figma Auto Layout Game',
      challenge: {
        question: 'In Figma, which feature allows buttons and cards to automatically adjust their dimensions when inner text changes?',
        codeSnippet: 'Shift + A → Auto Layout (Horizontal / Vertical)',
        options: ['Vector Network', 'Auto Layout', 'Masking', 'Boolean Operations'],
        correct: 1,
        explanation: 'Auto Layout allows components to behave dynamically with responsive padding and spacing.',
        xp: 130,
      },
    },
    {
      num: 8,
      id: 'msoffice-365-copilot',
      badgeColor: 'text-white',
      badgeBg: 'bg-emerald-600',
      title: 'Microsoft Office 365 with Copilot',
      subtitle: 'Copilot Formula Battle',
      skills: 'Word • Excel • PowerPoint • Outlook • Copilot AI',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      image: '/images/gamezone/thumb_8.jpg',
      category: 'business',
      gameType: 'Excel Copilot Wizard',
      challenge: {
        question: 'Which modern Excel formula completely replaces both VLOOKUP and HLOOKUP with faster two-way lookups?',
        codeSnippet: '=XLOOKUP(lookup_value, lookup_array, return_array)',
        options: ['INDEX/MATCH', 'XLOOKUP', 'COUNTIF', 'SUMPRODUCT'],
        correct: 1,
        explanation: 'XLOOKUP is the modern, flexible formula that can look up in any direction without column index limits.',
        xp: 120,
      },
    },
    {
      num: 9,
      id: 'digital-marketing-ai',
      badgeColor: 'text-white',
      badgeBg: 'bg-rose-500',
      title: 'Digital Marketing Performance & AI',
      subtitle: 'Viral Ad Campaign Simulator',
      skills: 'SEO • Ads • Analytics • Campaigns • AI Strategy',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      image: '/images/gamezone/thumb_9.jpg',
      category: 'business',
      gameType: 'ROAS Ad Optimization',
      challenge: {
        question: 'What metric measures the revenue generated for every dollar or rupee spent on advertising?',
        codeSnippet: 'ROAS = Total Campaign Revenue / Total Ad Spend',
        options: ['CTR (Click-Through Rate)', 'ROAS (Return on Ad Spend)', 'CPC (Cost Per Click)', 'Bounce Rate'],
        correct: 1,
        explanation: 'ROAS measures campaign profitability by comparing ad revenue directly against ad expenditure.',
        xp: 130,
      },
    },
    {
      num: 10,
      id: 'ai-career-accelerator',
      badgeColor: 'text-white',
      badgeBg: 'bg-sky-500',
      title: 'AI Career Accelerator',
      subtitle: 'ATS Resume & Interview Lab',
      skills: 'Career Skills • Portfolio • Interview Practice • AI Tools',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-600',
      image: '/images/gamezone/thumb_10.jpg',
      category: 'business',
      gameType: 'FAANG Interview Quest',
      challenge: {
        question: 'What behavioral interview technique structures answers into Situation, Task, Action, and Result?',
        codeSnippet: 'HR Question: "Tell me about a time you resolved a major production database outage."',
        options: ['SWOT Analysis', 'STAR Method', 'Pareto Principle', 'Agile Scrum'],
        correct: 1,
        explanation: 'The STAR method (Situation, Task, Action, Result) ensures structured, high-impact storytelling for hiring managers.',
        xp: 140,
      },
    },
    {
      num: 11,
      id: 'ai-teachers-python-30days',
      badgeColor: 'text-white',
      badgeBg: 'bg-amber-500',
      title: 'AI for Teachers 30-Day Python Challenge',
      subtitle: 'Gamified Classroom Coding',
      skills: 'Python Basics • Teaching • AI Lesson Creation • Activities',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      image: '/images/gamezone/thumb_11.jpg',
      category: 'dev',
      gameType: 'Teacher Logic Puzzle',
      challenge: {
        question: 'In Python, what built-in data type stores an ordered collection of mutable items?',
        codeSnippet: 'student_scores = [95, 88, 92, 100]',
        options: ['tuple', 'list', 'set', 'dictionary'],
        correct: 1,
        explanation: 'Lists [] are ordered and mutable, while tuples () are immutable.',
        xp: 120,
      },
    },
    {
      num: 12,
      id: 'corporate-ai-training',
      badgeColor: 'text-white',
      badgeBg: 'bg-pink-600',
      title: 'Corporate AI Training for Business',
      subtitle: 'Executive AI Automation',
      skills: 'AI Workflows • Automation • Productivity • Business Cases',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      image: '/images/gamezone/thumb_12.jpg',
      category: 'business',
      gameType: 'Enterprise Workflow Battle',
      challenge: {
        question: 'What enterprise automation approach connects unstructured email/PDF data to downstream ERP workflows using LLMs?',
        codeSnippet: 'Inbound Invoices → OCR/LLM Extraction → SAP/ERP API Posting',
        options: ['Intelligent Document Processing (IDP)', 'Manual Data Entry', 'FTP file drop only', 'CSS Grid'],
        correct: 0,
        explanation: 'IDP leverages LLMs and OCR to extract key-value pairs from complex documents automatically.',
        xp: 160,
      },
    },
    {
      num: 13,
      id: 'ai-tools-prompt-engineering',
      badgeColor: 'text-white',
      badgeBg: 'bg-purple-600',
      title: 'AI Tools & Prompt Engineering',
      subtitle: 'Master Prompts & LLM Hacks',
      skills: 'Prompt Writing • AI Tools • Content Creation • Automation',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image: '/images/gamezone/thumb_13.jpg',
      category: 'ai',
      gameType: 'Prompt Doctor Arena',
      challenge: {
        question: 'What prompt engineering technique instructs the LLM to think step-by-step before producing its final output?',
        codeSnippet: 'Prompt: "Solve this revenue projection problem. Think step by step and explain your reasoning."',
        options: ['Zero-Shot Prompting', 'Chain-of-Thought (CoT) Prompting', 'Negative Prompting', 'Temperature Tuning'],
        correct: 1,
        explanation: 'Chain-of-Thought (CoT) prompting drastically reduces logic errors and hallucination on complex analytical questions.',
        xp: 200,
      },
    },
  ];

  const handleCardClick = (c: GameCourseItem) => {
    playClick?.();
    setActiveChallengeCourse(c);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  const handleOptionSelect = (idx: number) => {
    playClick?.();
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || !activeChallengeCourse) return;
    playClick?.();
    setIsAnswerSubmitted(true);
    if (selectedOption === activeChallengeCourse.challenge.correct) {
      setScore(prev => prev + activeChallengeCourse.challenge.xp);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00d2ff', '#9333ea', '#10b981', '#f59e0b']
        });
      } catch {}
    }
  };

  const filteredCourses = selectedCategory === 'all'
    ? gameCourses
    : gameCourses.filter(c => c.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-900 pb-28 select-none font-sans">
      
      {/* ── 1. EXACT TOP APP HEADER (Logo, Search, Login, Menu) ── */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-3.5 py-2.5 flex items-center justify-between shadow-2xs">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <FutureLogo size="sm" showText={true} />
        </div>

        {/* Right Actions: Search, Login Button, Hamburger Menu */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            type="button"
            onClick={() => {
              playClick?.();
              const q = window.prompt('🔍 Search Game Arena:\n(e.g., Python, SQL, React, GenAI, MLOps)');
              if (q && q.trim()) {
                const target = gameCourses.find(c => c.title.toLowerCase().includes(q.toLowerCase()));
                if (target) handleCardClick(target);
              }
            }}
            className="w-8 h-8 rounded-full border border-slate-200/90 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            aria-label="Search Games"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Login Pill Button */}
          <button
            type="button"
            onClick={() => {
              playClick?.();
              if (onOpenLogin) onOpenLogin();
            }}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-bold shadow-sm shadow-blue-500/25 flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
          >
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => {
              playClick?.();
              setIsFilterDropdownOpen(prev => !prev);
            }}
            className="w-8 h-8 rounded-lg border border-slate-200/90 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
            aria-label="Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── 2. HERO BANNER: GAME ZONE (1:1 with Reference Image) ── */}
      <section className="px-3 pt-3 pb-2">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-indigo-900/30 bg-gradient-to-r from-[#070b1e] via-[#0d163a] to-[#1a134d] text-white">
          
          {/* High-Resolution Background Graphic */}
          <img
            src="/images/gamezone/game_zone_hero_banner.jpg"
            alt="Game Zone: Learn by Playing. Grow by Doing."
            className="w-full h-auto block object-cover"
            onError={(e) => {
              // Fallback to AI-generated banner if direct crop isn't loaded
              (e.target as HTMLImageElement).src = '/images/gamezone/game_zone_hero_banner_ai.jpg';
            }}
          />

          {/* Subtle Ambient Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 4 Interactive Feature Badges below the image */}
        <div className="grid grid-cols-4 gap-1.5 mt-2.5">
          <button
            type="button"
            onClick={() => {
              playClick?.();
              if (onPlayPython) onPlayPython(1);
            }}
            className="p-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center gap-1 text-[10px] font-bold text-slate-700 active:scale-95 transition-transform hover:border-blue-300"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">Play Game</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              alert(`⭐ Your Gaming Points: ${telemetry?.totalXp || 450} XP!\nComplete challenges to level up.`);
            }}
            className="p-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center gap-1 text-[10px] font-bold text-slate-700 active:scale-95 transition-transform hover:border-emerald-300"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate">Earn Points</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              alert('🎖️ Unlocked Badges:\n• 👑 Code Rookie (Level 1)\n• 🐍 Python Explorer\n• ⚡ 7-Day Streak Master');
            }}
            className="p-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center gap-1 text-[10px] font-bold text-slate-700 active:scale-95 transition-transform hover:border-purple-300"
          >
            <Award className="w-3.5 h-3.5 text-purple-500 shrink-0" />
            <span className="truncate">Badges</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              alert('🎁 Win Real Rewards:\nComplete 5 games this week to win ₹100 cash voucher + verified game certificate!');
            }}
            className="p-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center gap-1 text-[10px] font-bold text-slate-700 active:scale-95 transition-transform hover:border-rose-300"
          >
            <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="truncate">Rewards</span>
          </button>
        </div>
      </section>

      {/* ── 3. SECTION TITLE & FILTER ROW (1:1 with Reference Image) ── */}
      <section className="px-3 pt-3 pb-2 flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
            Choose Your <span className="text-blue-600">Course Game</span>
          </h2>
          <p className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">
            Play course-wise games, complete challenges and level up your skills.
          </p>
        </div>

        {/* 13 Courses Filter Pill Dropdown */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => {
              playClick?.();
              setIsFilterDropdownOpen(prev => !prev);
            }}
            className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>13 Courses</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {/* Dropdown Menu */}
          {isFilterDropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-2xl shadow-xl border border-slate-200 p-1.5 z-40 animate-fadeIn">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                  selectedCategory === 'all' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>All 13 Courses</span>
                {selectedCategory === 'all' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('ai');
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                  selectedCategory === 'ai' ? 'bg-purple-50 text-purple-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>AI & Data Tracks</span>
                {selectedCategory === 'ai' && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('dev');
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                  selectedCategory === 'dev' ? 'bg-pink-50 text-pink-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Development Tracks</span>
                {selectedCategory === 'dev' && <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('business');
                  setIsFilterDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                  selectedCategory === 'business' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Business & Design</span>
                {selectedCategory === 'business' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. 2-COLUMN COURSE GAME CARDS GRID (1:1 with Reference Image) ── */}
      <section className="px-3 pt-1">
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {filteredCourses.map((c) => {
            const isFullWidth = c.num === 13;
            return (
              <article
                key={c.id}
                onClick={() => handleCardClick(c)}
                className={`group rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer active:scale-[0.98] flex flex-col justify-between ${
                  isFullWidth ? 'col-span-2' : ''
                }`}
              >
                {/* Horizontal Card Top Layout: Left 3D Thumbnail + Right Info */}
                <div className="p-2 sm:p-2.5 flex items-start gap-2">
                  
                  {/* Left: 3D Image Preview with Floating Number Badge */}
                  <div className="relative w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-100 shadow-2xs">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Number Badge Tag at Top-Left */}
                    <div className={`absolute top-1 left-1 w-4 h-4 sm:w-5 sm:h-5 rounded-md ${c.badgeBg} ${c.badgeColor} flex items-center justify-center font-black text-[9px] sm:text-[10px] shadow-sm leading-none`}>
                      {c.num}
                    </div>
                  </div>

                  {/* Right: Subject Icon + Title + Topics */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-1 mb-1">
                      {/* Subject Icon Box */}
                      <span className={`w-4 h-4 rounded-md ${c.iconBg} ${c.iconColor} flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black`}>
                        {c.num}
                      </span>
                      {/* Title */}
                      <h3 className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {c.title}
                      </h3>
                    </div>

                    {/* Subtext / Skills */}
                    <p className="text-[9px] sm:text-[9.5px] font-semibold text-slate-500 leading-tight line-clamp-2 mt-0.5">
                      {c.skills}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Mini Circle Arrow Button */}
                <div className="px-2 pb-2 pt-0.5 flex items-center justify-end">
                  <div className="w-5 h-5 rounded-full border border-blue-200/90 bg-blue-50/70 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 5. INTERACTIVE COURSE GAME CHALLENGE MODAL ── */}
      {activeChallengeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 text-left overflow-hidden">
            
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setActiveChallengeCourse(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-5 h-5 rounded-md ${activeChallengeCourse.badgeBg} text-white font-black text-xs flex items-center justify-center shadow-2xs`}>
                {activeChallengeCourse.num}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {activeChallengeCourse.gameType}
              </span>
              <span className="ml-auto text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                +{activeChallengeCourse.challenge.xp} XP
              </span>
            </div>

            {/* Course Title */}
            <h3 className="text-sm font-black text-slate-900 leading-snug mb-2 pr-6">
              {activeChallengeCourse.title}
            </h3>

            {/* Question */}
            <p className="text-xs font-bold text-slate-700 mb-2 leading-relaxed">
              {activeChallengeCourse.challenge.question}
            </p>

            {/* Code Snippet */}
            {activeChallengeCourse.challenge.codeSnippet && (
              <pre className="p-2.5 rounded-xl bg-slate-950 text-cyan-300 font-mono text-[10.5px] overflow-x-auto mb-3 border border-slate-800">
                <code>{activeChallengeCourse.challenge.codeSnippet}</code>
              </pre>
            )}

            {/* Multiple Choice Options */}
            <div className="space-y-1.5 mb-3">
              {activeChallengeCourse.challenge.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let optStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700';

                if (isAnswerSubmitted) {
                  if (idx === activeChallengeCourse.challenge.correct) {
                    optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                  } else if (isSelected) {
                    optStyle = 'border-rose-500 bg-rose-50 text-rose-800 font-bold';
                  }
                } else if (isSelected) {
                  optStyle = 'border-blue-500 bg-blue-50 text-blue-800 font-bold';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full p-2.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && idx === activeChallengeCourse.challenge.correct && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation */}
            {isAnswerSubmitted && (
              <div className={`p-2.5 rounded-xl text-xs mb-3 font-medium leading-relaxed ${
                selectedOption === activeChallengeCourse.challenge.correct
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}>
                {selectedOption === activeChallengeCourse.challenge.correct ? (
                  <p>🎉 <strong>Awesome Job!</strong> {activeChallengeCourse.challenge.explanation}</p>
                ) : (
                  <p>❌ <strong>Not quite!</strong> {activeChallengeCourse.challenge.explanation}</p>
                )}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  disabled={selectedOption === null}
                  onClick={handleCheckAnswer}
                  className={`w-full py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      if (onPlayPython) onPlayPython(1);
                      setActiveChallengeCourse(null);
                    }}
                    className="flex-1 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md active:scale-95 transition-transform cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>Play Full Game</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveChallengeCourse(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
