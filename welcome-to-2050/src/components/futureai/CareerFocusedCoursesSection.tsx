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
  Briefcase,
  Play,
  CheckCircle2
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';
import './LearnerHomeHub.css';

interface CareerFocusedCoursesProps {
  onStartCourse?: (courseId: string) => void;
  onEnroll?: () => void;
}

export type CourseFilterType = 'all' | 'in-progress' | 'not-started' | 'completed';
export type CourseViewModeType = 'grid' | 'list';
export type MobileCourseCategoryType = 'all' | 'flagship' | 'core' | 'ai';

export interface CourseItem {
  id: string;
  badgeNum: number;
  category: 'flagship' | 'core' | 'ai';
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
  potTheme: 'blue' | 'purple' | 'gold' | 'emerald' | 'pink' | 'amber';
  skillsList: string[];
  lessonsText: string;
  projectsText: string;
}

export const CareerFocusedCoursesSection: React.FC<CareerFocusedCoursesProps> = ({
  onStartCourse,
  onEnroll,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [filter, setFilter] = useState<CourseFilterType>('all');
  const [viewMode, setViewMode] = useState<CourseViewModeType>('grid');
  const [mobileCategory, setMobileCategory] = useState<MobileCourseCategoryType>('all');

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

  // COMPLETE 12 HIGH-PAYING COURSES CATALOG
  const courses: CourseItem[] = [
    {
      id: 'data-analyst-genai',
      badgeNum: 1,
      category: 'flagship',
      statusTag: '🔥 FLAGSHIP • ACTIVE',
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
      lessonsText: '260 Lessons',
      projectsText: '28 Projects',
    },
    {
      id: 'data-science-agentic-ai',
      badgeNum: 2,
      category: 'flagship',
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
      lessonsText: '320 Lessons',
      projectsText: '25 Projects',
    },
    {
      id: 'full-stack-web-ai',
      badgeNum: 3,
      category: 'flagship',
      statusTag: 'HOT CAREER TRACK',
      title: 'Full Stack',
      subtitle: 'Web & AI Dev',
      fullName: 'Full Stack Web & AI Development Program',
      shortDesc: 'Build modern responsive full-stack apps with React, Node, Next.js & GenAI integrations.',
      descLine1: 'React • Next.js • TypeScript • Node.js • PostgreSQL • GenAI APIs',
      descLine2: 'Full-Stack Production Deployments • Real Startup Projects',
      salaryRange: '₹8 LPA – ₹20 LPA',
      courseFee: '₹24,999',
      image: '/images/dashboard/poster_python.jpg',
      holoImage: '/images/dashboard/poster_python.jpg',
      video: '/videos/card_video_python.mp4',
      potTheme: 'emerald',
      skillsList: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'GenAI'],
      lessonsText: '290 Lessons',
      projectsText: '18 Projects',
    },
    {
      id: 'ml-engineering',
      badgeNum: 4,
      category: 'flagship',
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
      lessonsText: '280 Lessons',
      projectsText: '20 Projects',
    },
    {
      id: 'ai-engineering',
      badgeNum: 5,
      category: 'flagship',
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
      lessonsText: '240 Lessons',
      projectsText: '16 Projects',
    },
    {
      id: 'python-mastery',
      badgeNum: 6,
      category: 'core',
      statusTag: 'CORE PILLAR 01',
      title: 'Python Mastery',
      subtitle: 'Zero to Advanced',
      fullName: 'Python for Data Analytics & AI — Zero to Advanced',
      shortDesc: 'From zero logic to handling millions of records with NumPy, Pandas and automation.',
      descLine1: 'Variables • Data Types • Indexing • Functions • NumPy • Pandas',
      descLine2: 'Interactive Coding Games • 15+ Industry Projects • Automation',
      salaryRange: '₹5 LPA – ₹12 LPA',
      courseFee: '₹9,999',
      image: '/images/dashboard/poster_python.jpg',
      holoImage: '/images/dashboard/poster_python.jpg',
      video: '/videos/card_video_python.mp4',
      potTheme: 'blue',
      skillsList: ['Syntax', 'NumPy', 'Pandas', 'Automation', 'OOP'],
      lessonsText: '260 Lessons',
      projectsText: '15+ Projects',
    },
    {
      id: 'sql-mastery',
      badgeNum: 7,
      category: 'core',
      statusTag: 'CORE PILLAR 02',
      title: 'SQL Master',
      subtitle: 'Zero to Advanced',
      fullName: 'SQL: Zero to Advanced Query Mastery',
      shortDesc: 'Real-world databases, complex analytical queries, CTEs, Window Functions & index tuning.',
      descLine1: 'SELECT • WHERE • GROUP BY • Multi-table JOINs • Window Functions',
      descLine2: 'CTEs • Database Indexing • Query Performance Tuning',
      salaryRange: '₹5 LPA – ₹14 LPA',
      courseFee: '₹9,999',
      image: '/images/dashboard/poster_sql.jpg',
      holoImage: '/images/dashboard/poster_sql.jpg',
      video: '/videos/card_video_sql.mp4',
      potTheme: 'purple',
      skillsList: ['Queries', 'JOINs', 'Window Functions', 'CTEs', 'Subqueries'],
      lessonsText: '280 Lessons',
      projectsText: '20+ Projects',
    },
    {
      id: 'excel-automation',
      badgeNum: 8,
      category: 'core',
      statusTag: 'CORE PILLAR 03',
      title: 'Advanced Excel',
      subtitle: '& Business Automation',
      fullName: 'Advanced Microsoft Excel & Business Automation',
      shortDesc: 'Master dynamic formulas, XLOOKUP, pivot tables, Power Query and C-Suite dashboards.',
      descLine1: 'VLOOKUP • XLOOKUP • INDEX/MATCH • Pivot Tables • Dynamic Slicers',
      descLine2: 'Power Query Automation • Financial & Statistical Modeling',
      salaryRange: '₹4.5 LPA – ₹10 LPA',
      courseFee: '₹7,999',
      image: '/images/dashboard/poster_excel.jpg',
      holoImage: '/images/dashboard/poster_excel.jpg',
      video: '/videos/card_video_excel.mp4',
      potTheme: 'emerald',
      skillsList: ['Formulas', 'XLOOKUP', 'PivotTables', 'Power Query', 'KPIs'],
      lessonsText: '280 Lessons',
      projectsText: '20+ Projects',
    },
    {
      id: 'powerbi-analytics',
      badgeNum: 9,
      category: 'core',
      statusTag: 'CORE PILLAR 04',
      title: 'Power BI',
      subtitle: '& Visual Analytics',
      fullName: 'Power BI & Visual Analytics Master Track',
      shortDesc: 'Data modeling, star schemas, advanced DAX measures and executive visual dashboards.',
      descLine1: 'Data Modeling • Star Schemas • DAX Measures • Calculated Columns',
      descLine2: 'Executive C-Suite KPI Dashboards • Power BI Service Publishing',
      salaryRange: '₹6 LPA – ₹16 LPA',
      courseFee: '₹11,999',
      image: '/images/dashboard/poster_powerbi.jpg',
      holoImage: '/images/dashboard/poster_powerbi.jpg',
      video: '/videos/card_video_powerbi.mp4',
      potTheme: 'amber',
      skillsList: ['DAX', 'Star Schemas', 'KPIs', 'Reports', 'Service'],
      lessonsText: '240 Lessons',
      projectsText: '18+ Projects',
    },
    {
      id: 'applied-statistics',
      badgeNum: 10,
      category: 'core',
      statusTag: 'CORE PILLAR 05',
      title: 'Statistics',
      subtitle: 'for Data Science',
      fullName: 'Applied Statistics & Probability for Data Analytics',
      shortDesc: 'Learn descriptive and inferential statistics, hypothesis testing, A/B testing and regression.',
      descLine1: 'Descriptive & Inferential Stats • Probability Distributions',
      descLine2: 'Hypothesis Testing (A/B Testing) • Confidence Intervals • Regression',
      salaryRange: '₹6 LPA – ₹15 LPA',
      courseFee: '₹8,999',
      image: '/images/dashboard/poster_stats.jpg',
      holoImage: '/images/dashboard/poster_stats.jpg',
      video: '/videos/card_video_stats.mp4',
      potTheme: 'pink',
      skillsList: ['Probability', 'Hypothesis Testing', 'A/B Testing', 'Regression'],
      lessonsText: '200 Lessons',
      projectsText: '15+ Projects',
    },
    {
      id: 'genai-prompt-eng',
      badgeNum: 11,
      category: 'ai',
      statusTag: 'FUTURE TECH 06',
      title: 'GenAI & LLMs',
      subtitle: 'for Analytics',
      fullName: 'Generative AI & LLM Automation for Data Analytics',
      shortDesc: 'Prompt engineering for analytics, automated SQL generation, and building custom AI agents.',
      descLine1: 'Prompt Engineering • Automated SQL & Python Code Generation',
      descLine2: 'Synthesizing Documents • Building Custom AI Analytics Agents',
      salaryRange: '₹10 LPA – ₹25 LPA',
      courseFee: '₹14,999',
      image: '/images/dashboard/poster_genai.jpg',
      holoImage: '/images/dashboard/poster_genai.jpg',
      video: '/videos/card_video_genai.mp4',
      potTheme: 'emerald',
      skillsList: ['Prompt Engineering', 'LangChain', 'OpenAI', 'Autonomous Agents'],
      lessonsText: '160 Lessons',
      projectsText: '12+ Projects',
    },
    {
      id: 'real-hr-interview',
      badgeNum: 12,
      category: 'ai',
      statusTag: 'CAREER PILLAR 07',
      title: 'Mock Interview',
      subtitle: 'Live AI Room',
      fullName: 'Real HR Interview Question — Live AI Mock Room',
      shortDesc: 'Practice live HR & technical interviews with instant AI feedback and real company questions.',
      descLine1: '1-on-1 AI Mock Interviews • Technical & Behavioral Questions',
      descLine2: 'Instant AI Evaluation • Resume & LinkedIn ATS Optimization',
      salaryRange: 'Guaranteed Job-Ready',
      courseFee: '₹6,999',
      image: '/images/dashboard/poster_real_hr_question.jpg',
      holoImage: '/images/dashboard/poster_real_hr_question.jpg',
      video: '/videos/card_video_stats.mp4',
      potTheme: 'gold',
      skillsList: ['HR Questions', 'Technical Rounds', 'Live AI Feedback', 'ATS Check'],
      lessonsText: '140 Lessons',
      projectsText: '10+ Real Mocks',
    },
    {
      id: 'msoffice-365-copilot',
      badgeNum: 13,
      category: 'flagship',
      statusTag: 'POPULAR • PRODUCTIVITY',
      title: 'Microsoft Office 365',
      subtitle: 'with Copilot',
      fullName: 'Microsoft Office 365 with Copilot Master Program',
      shortDesc: 'Master AI-powered Excel, Word, PowerPoint, Outlook & Teams with Copilot automation.',
      descLine1: 'Excel Copilot • PowerPoint AI • Word Automation • Teams • AI Workflows',
      descLine2: 'Corporate Productivity • AI Assistant Workflows • Real-time Business Analytics',
      salaryRange: '₹5 LPA – ₹12 LPA',
      courseFee: '₹14,999',
      image: '/images/msoffice_365_copilot_poster.jpg',
      holoImage: '/images/msoffice_365_copilot_poster.jpg',
      video: '/videos/msoffice_365_copilot.mp4',
      potTheme: 'blue',
      skillsList: ['Excel Copilot', 'PowerPoint AI', 'Word', 'Teams', 'Automation'],
      lessonsText: '180 Lessons',
      projectsText: '15+ Projects',
    },
    {
      id: 'full-stack-web-dev',
      badgeNum: 14,
      category: 'flagship',
      statusTag: 'HIGH DEMAND • FULL STACK',
      title: 'Full Stack Web',
      subtitle: 'Development',
      fullName: 'Full Stack Web Development (MERN & Next.js)',
      shortDesc: 'Build production SaaS apps with React, Node.js, Express, MongoDB, Next.js & REST APIs.',
      descLine1: 'React.js • Node.js • Express • MongoDB • Next.js • REST APIs',
      descLine2: 'Production Deployments • Auth Systems • SaaS Cloud Architecture',
      salaryRange: '₹8 LPA – ₹20 LPA',
      courseFee: '₹24,999',
      image: '/images/full_stack_web_development_poster.jpg',
      holoImage: '/images/full_stack_web_development_poster.jpg',
      video: '/videos/full_stack_web_development.mp4',
      potTheme: 'emerald',
      skillsList: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Next.js'],
      lessonsText: '300 Lessons',
      projectsText: '22 Projects',
    },
    {
      id: 'react-frontend-dev',
      badgeNum: 15,
      category: 'flagship',
      statusTag: 'MODERN UI • REACT 19',
      title: 'React Front End',
      subtitle: 'Development',
      fullName: 'React Front-End Development with AI',
      shortDesc: 'Modern React 19, Redux Toolkit, Tailwind CSS, TypeScript & fast Vite tooling.',
      descLine1: 'React 19 • TypeScript • Redux Toolkit • Tailwind CSS • Vite',
      descLine2: 'State Management • Custom Hooks • Performance Optimization',
      salaryRange: '₹7 LPA – ₹16 LPA',
      courseFee: '₹19,999',
      image: '/images/react_frontend_development_poster.jpg',
      holoImage: '/images/react_frontend_development_poster.jpg',
      video: '/videos/react_frontend_development.mp4',
      potTheme: 'blue',
      skillsList: ['React 19', 'TypeScript', 'Redux', 'Tailwind', 'Vite'],
      lessonsText: '240 Lessons',
      projectsText: '18 Projects',
    },
    {
      id: 'ui-ux-design-figma-ai',
      badgeNum: 16,
      category: 'flagship',
      statusTag: 'CREATIVE • AI DESIGN',
      title: 'UI/UX Design',
      subtitle: 'with Figma & AI',
      fullName: 'UI/UX Design with Figma & AI Master Program',
      shortDesc: 'Create wireframes, high-fidelity prototypes, design systems & AI UI generation.',
      descLine1: 'Figma AI • Wireframing • Prototyping • Design Systems • UX Research',
      descLine2: 'Interactive App Prototypes • User Journeys • Design to Code AI',
      salaryRange: '₹6 LPA – ₹18 LPA',
      courseFee: '₹21,999',
      image: '/images/ui_ux_design_poster.jpg',
      holoImage: '/images/ui_ux_design_poster.jpg',
      video: '/videos/ui_ux_design_figma_ai.mp4',
      potTheme: 'purple',
      skillsList: ['Figma AI', 'Wireframing', 'Prototyping', 'Design Systems', 'UX'],
      lessonsText: '210 Lessons',
      projectsText: '16 Projects',
    },
    {
      id: 'ai-tool-and-prompt',
      badgeNum: 17,
      category: 'ai',
      statusTag: '10X PRODUCTIVITY',
      title: 'AI Tools & Prompt',
      subtitle: 'Engineering',
      fullName: 'AI Tools & Advanced Prompt Engineering',
      shortDesc: 'Unlock ChatGPT 4o, Claude 3.5, Midjourney, Automation Workflows & Prompt Systems.',
      descLine1: 'ChatGPT 4o • Claude 3.5 • Midjourney • Zapier AI • Prompt Systems',
      descLine2: 'Custom GPTs • Workflow Automations • AI Content & Code Engines',
      salaryRange: '₹6 LPA – ₹15 LPA',
      courseFee: '₹12,999',
      image: '/images/cube_genai.jpg',
      holoImage: '/images/cube_genai.jpg',
      video: '/videos/card_video_genai.mp4',
      potTheme: 'gold',
      skillsList: ['ChatGPT 4o', 'Claude 3.5', 'Midjourney', 'Zapier AI', 'Prompting'],
      lessonsText: '150 Lessons',
      projectsText: '25+ AI Tools',
    },
    {
      id: 'digital-marketing',
      badgeNum: 18,
      category: 'core',
      statusTag: 'HIGH ROI • GROWTH',
      title: 'Digital Marketing',
      subtitle: 'Performance & AI',
      fullName: 'Digital Marketing Performance & AI Strategy',
      shortDesc: 'Master SEO, Google Ads, Meta Campaigns, High-Converting Funnels & AI Copywriting.',
      descLine1: 'SEO • Google Ads • Meta Ads • Funnel Architecture • AI Copywriting',
      descLine2: 'Growth Hacking • Data-Driven Ad Campaigns • Conversion Rate Optimization',
      salaryRange: '₹5 LPA – ₹14 LPA',
      courseFee: '₹16,999',
      image: '/images/digital_marketing_poster.jpg',
      holoImage: '/images/digital_marketing_poster.jpg',
      video: '/videos/digital_marketing_ai.mp4',
      potTheme: 'pink',
      skillsList: ['SEO', 'Google Ads', 'Meta Ads', 'Funnels', 'AI Copy'],
      lessonsText: '190 Lessons',
      projectsText: '14 Live Campaigns',
    },
    {
      id: 'ai-career-accelerator',
      badgeNum: 19,
      category: 'ai',
      statusTag: 'FAST-TRACK CAREER',
      title: 'AI Career',
      subtitle: 'Accelerator',
      fullName: 'AI Career Accelerator Program',
      shortDesc: 'Supercharge your tech career: Standout portfolio, GitHub profile, mock interview mastery & 1:1 mentorship.',
      descLine1: 'Career Strategy • Portfolio SaaS • Mock Interviews • 1:1 Mentorship',
      descLine2: 'Salary Negotiation • Referral Networks • Personal Brand Building',
      salaryRange: '₹10 LPA – ₹25 LPA',
      courseFee: '₹27,999',
      image: '/images/ai_career_accelerator_poster.jpg',
      holoImage: '/images/ai_career_accelerator_poster.jpg',
      video: '/videos/ai_career_accelerator.mp4',
      potTheme: 'blue',
      skillsList: ['Career Strategy', 'Portfolio SaaS', 'Mock Interviews', 'Mentorship'],
      lessonsText: '120 Lessons',
      projectsText: 'Personal Career Plan',
    },
    {
      id: 'ai-for-techies-python-sprint',
      badgeNum: 20,
      category: 'core',
      statusTag: '30-DAY SPRINT',
      title: 'AI for Techies',
      subtitle: '30 Days Python Sprint',
      fullName: 'AI for Techies — 30 Days Python Coding Sprint',
      shortDesc: 'Intensive 30-day coding sprint: Python core, OOP, NumPy, Pandas & practical AI scripting.',
      descLine1: 'Python 3 • OOP • NumPy • Pandas • AI Scripting • Coding Challenges',
      descLine2: '30 Daily Coding Missions • Real-World Python Automation Bots',
      salaryRange: '₹8 LPA – ₹18 LPA',
      courseFee: '₹9,999',
      image: '/images/ai_for_techies_poster.jpg',
      holoImage: '/images/ai_for_techies_poster.jpg',
      video: '/videos/ai_for_techies_python_sprint.mp4',
      potTheme: 'emerald',
      skillsList: ['Python 3', 'OOP', 'NumPy', 'Pandas', 'AI Scripting'],
      lessonsText: '180 Lessons',
      projectsText: '30 Coding Missions',
    },
    {
      id: 'train-your-business-corporate-ai',
      badgeNum: 21,
      category: 'ai',
      statusTag: 'ENTERPRISE AI',
      title: 'Corporate AI',
      subtitle: 'Training for Business',
      fullName: 'Train Your Business — Corporate AI Training',
      shortDesc: 'Tailored enterprise corporate training: Upskill your workforce, automate business workflows & deploy private LLMs.',
      descLine1: 'Corporate AI • Workflow Automation • Team Upskilling • Enterprise LLMs',
      descLine2: 'Security & Compliance • Custom AI Agents for Business Ops',
      salaryRange: 'Custom Enterprise Quote',
      courseFee: '₹49,999',
      image: '/images/train_your_business_poster.jpg',
      holoImage: '/images/train_your_business_poster.jpg',
      video: '/videos/train_your_business_corporate_ai.mp4',
      potTheme: 'gold',
      skillsList: ['Corporate AI', 'Workflow Automation', 'Team Upskilling', 'Enterprise LLMs'],
      lessonsText: 'Custom Modules',
      projectsText: 'Enterprise Pilot',
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

  // Primary Flagships and Featured Tracks for Desktop Cylinders (Top 8 High-Paying Tracks)
  const desktopPotCourses = courses.filter((c) =>
    [
      'data-analyst-genai',
      'data-science-agentic-ai',
      'ml-engineering',
      'ai-engineering',
      'react-frontend-dev',
      'full-stack-web-dev',
      'msoffice-365-copilot',
      'ui-ux-design-figma-ai',
    ].includes(c.id)
  );

  // Filtered list for Mobile View
  const filteredMobileCourses = courses.filter((c) => {
    if (mobileCategory === 'flagship') return c.category === 'flagship';
    if (mobileCategory === 'core') return c.category === 'core';
    if (mobileCategory === 'ai') return c.category === 'ai';
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
            DESKTOP VIEW: 4 HIGH-PAYING INDUSTRY COURSES (CYLINDRICAL NEON POTS)
            ========================================================================= */}
        <div className="hidden md:block">
          <div className="lhh-modules-section scd-transparent-pots-section" style={{ padding: 0, margin: 0, background: 'transparent' }}>
            <div className="lhh-section-header" style={{ marginBottom: '1.5rem' }}>
              <div className="lhh-section-left">
                <div className="lhh-layer-icon-box">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <div className="lhh-section-title-wrap">
                  <h2 className="lhh-section-title">High-Paying Industry Career Tracks</h2>
                </div>
              </div>

              <div className="lhh-controls-group">
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

            {viewMode === 'grid' ? (
              <div className="scd-pots-4grid home-compact-pots">
                {desktopPotCourses.map((c) => (
                  <article
                    key={c.id}
                    className={`scd-pot-card scd-pot-${c.potTheme}`}
                    onClick={() => handleCourseClick(c.id)}
                    onMouseEnter={playHover}
                  >
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
                        <img
                          src={c.holoImage || c.image}
                          alt={c.title}
                          loading="lazy"
                          decoding="async"
                          className="scd-pot-holo-img"
                        />
                        <div className="scd-pot-holo-glass-frame" />
                      </div>
                    </div>

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
                          <button
                            type="button"
                            className="scd-pot-circle-arrow-btn cursor-pointer w-full justify-between"
                            aria-label="Start Learning"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCourseClick(c.id);
                            }}
                          >
                            <span className="scd-pot-unlock-text">Explore Curriculum</span>
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
              <div className="lhh-modules-list">
                {courses.map((c) => (
                  <div
                    key={c.id}
                    className="lhh-list-card cursor-pointer"
                    onClick={() => handleCourseClick(c.id)}
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

        {/* =========================================================================
            MOBILE VIEW: COMPLETE 12 COURSES SHOWCASE IN ULTRA-PREMIUM STYLE
            ========================================================================= */}
        <div className="block md:hidden mt-2 mb-8">
          
          {/* Header Title with Layers icon */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-black text-slate-900 tracking-tight">
                All Courses ({courses.length})
              </h3>
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Industry Ready
            </span>
          </div>

          {/* Category Tabs Scrollbar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-4 scrollbar-none px-1">
            {[
              { id: 'all', label: `All (${courses.length})` },
              { id: 'flagship', label: 'Flagship Tracks (5)' },
              { id: 'core', label: 'Core Analytics (5)' },
              { id: 'ai', label: 'AI & Mock Room (2)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  playClick();
                  setMobileCategory(tab.id as MobileCourseCategoryType);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs cursor-pointer ${
                  mobileCategory === tab.id
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 12 Courses Premium Cards */}
          <div className="space-y-4 px-1">
            {filteredMobileCourses.map((c) => (
              <article
                key={c.id}
                onClick={() => handleCourseClick(c.id)}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden relative cursor-pointer active:scale-[0.99]"
              >
                {/* 16:9 Thumbnail / Video Header with floating badges */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={c.image || c.holoImage}
                    alt={c.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/35 pointer-events-none" />

                  {/* Top Tags Overlay */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wide uppercase bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {c.statusTag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-tight bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xs">
                      {c.salaryRange}
                    </span>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[10px] font-bold z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">{c.lessonsText}</span>
                      <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">{c.projectsText}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4">
                  <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                    <span>{c.title}</span> <span className="text-blue-600">{c.subtitle}</span>
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1 line-clamp-2 leading-relaxed">
                    {c.shortDesc}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {c.skillsList.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      Full Curriculum
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(c.id);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md shadow-blue-500/25 flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

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
