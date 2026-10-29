import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  SlidersHorizontal,
  Gift,
  ArrowRight,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Code2,
  Users,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Lock,
  Building2,
  TrendingUp,
  BarChart3,
  Bell,
  Cpu,
  Bot,
  Brain,
  ShieldCheck,
  Bookmark,
  Award,
  ChevronRight,
  ChevronLeft,
  Star,
  Pause,
  Play,
  Layers,
  LayoutGrid,
  List,
  Infinity as InfinityIcon,
} from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import { isCourseUnlocked } from '../../../services/courseUnlockService';
import '../LearnerHomeHub.css';

interface MobileDashboardHomeProps {
  userName: string;
  telemetry: LearnerTelemetry;
  onStartPython: () => void;
  onOpenDataAnalyst?: () => void;
  onOpenDataScience?: () => void;
  onOpenMlEngineering?: () => void;
  onOpenAiEngineering?: () => void;
  onOpenAiToolsPrompt?: () => void;
  onOpenMsOfficeCopilot?: () => void;
  onOpenFullStackMern?: () => void;
  onOpenSql?: () => void;
  onOpenExcel?: () => void;
  onOpenPowerBi?: () => void;
  onOpenGenAi?: () => void;
  onOpenPlacement?: () => void;
  onOpenArena: () => void;
  onOpenEarn: () => void;
  onOpenAdvisor?: () => void;
  onOpenLockedModule: (moduleName: string) => void;
}

export const MobileDashboardHome: React.FC<MobileDashboardHomeProps> = ({
  userName,
  telemetry,
  onStartPython,
  onOpenDataAnalyst,
  onOpenDataScience,
  onOpenMlEngineering,
  onOpenAiEngineering,
  onOpenAiToolsPrompt,
  onOpenMsOfficeCopilot,
  onOpenFullStackMern,
  onOpenSql,
  onOpenExcel,
  onOpenPowerBi,
  onOpenGenAi,
  onOpenPlacement,
  onOpenArena,
  onOpenEarn,
  onOpenAdvisor,
  onOpenLockedModule,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'explore' | 'completed'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [, setUnlockRefreshTick] = useState(0);

  useEffect(() => {
    const refreshUserCourseAccess = () => setUnlockRefreshTick((t) => t + 1);
    window.addEventListener('futureai_course_unlocked', refreshUserCourseAccess);
    window.addEventListener('storage', refreshUserCourseAccess);
    return () => {
      window.removeEventListener('futureai_course_unlocked', refreshUserCourseAccess);
      window.removeEventListener('storage', refreshUserCourseAccess);
    };
  }, []);

  // Hiring Partners & Real People Home Showcase State
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = heroVideoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', 'true');
    const p = vid.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {});
    }
  }, []);

  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [isStoryAutoPlaying, setIsStoryAutoPlaying] = useState(true);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // 16 Hiring Partners Split into 2 Dynamic Flowing Stream Rows
  const homePartnersRow1 = [
    { name: 'Google', logo: '/images/companies/google.svg', role: 'Data & AI', package: '₹14 - 24 LPA' },
    { name: 'Amazon', logo: '/images/companies/amazon.svg', role: 'Data Engineer', package: '₹12 - 20 LPA' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.svg', role: 'Cloud BI', package: '₹11 - 18 LPA' },
    { name: 'Deloitte', logo: '/images/companies/deloitte.svg', role: 'BI Consultant', package: '₹7 - 12 LPA' },
    { name: 'Accenture', logo: '/images/companies/accenture.svg', role: 'Data Analyst', package: '₹6 - 10 LPA' },
    { name: 'TCS', logo: '/images/companies/tcs.svg', role: 'Analytics Lead', package: '₹5 - 9 LPA' },
    { name: 'Infosys', logo: '/images/companies/infosys.svg', role: 'Data Specialist', package: '₹6 - 9 LPA' },
    { name: 'Wipro', logo: '/images/companies/wipro.svg', role: 'BI Developer', package: '₹5 - 8 LPA' },
  ];

  const homePartnersRow2 = [
    { name: 'Adobe', logo: '/images/companies/adobe.svg', role: 'Product Analytics', package: '₹12 - 18 LPA' },
    { name: 'IBM', logo: '/images/companies/ibm.svg', role: 'Cloud Analytics', package: '₹8 - 14 LPA' },
    { name: 'EY', logo: '/images/companies/ey.svg', role: 'Risk Analyst', package: '₹7 - 11 LPA' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.svg', role: 'Business Analyst', package: '₹6 - 10 LPA' },
    { name: 'Capgemini', logo: '/images/companies/capgemini.svg', role: 'BI Consultant', package: '₹6 - 9 LPA' },
    { name: 'PwC', logo: '/images/companies/pwc.svg', role: 'Insights Consultant', package: '₹7 - 12 LPA' },
    { name: 'HCLTech', logo: '/images/companies/hcl.svg', role: 'Data Ops', package: '₹5 - 8 LPA' },
    { name: 'KPMG', logo: '/images/companies/kpmg.svg', role: 'Financial Analyst', package: '₹7 - 11 LPA' },
  ];

  // 6 Career Transformation Stories for Home Spotlight
  const homeSuccessStories = [
    {
      id: 'rohit',
      name: 'Rohit Kumar',
      shortName: 'Rohit',
      photo: '/images/alumni/alumni_rohit_kumar.jpg',
      role: 'Business & BI Analyst',
      company: 'Deloitte',
      companyLogo: '/images/companies/deloitte.svg',
      previousRole: 'B.Com Graduate (Non-Tech)',
      previousCtc: '₹2.4 LPA',
      placedCtc: '₹6.8 LPA',
      hike: '+183% Hike',
      rating: '5.0',
      skills: ['SQL', 'Excel', 'Power BI', 'Analytics'],
      quote: 'Switched from accounting to analytics in 4 months. The live capstone projects and mock interview drills made it effortless!',
      batch: 'Placed 2026',
    },
    {
      id: 'neha',
      name: 'Neha Singh',
      shortName: 'Neha',
      photo: '/images/alumni/alumni_neha_singh.jpg',
      role: 'Data Analyst',
      company: 'Accenture',
      companyLogo: '/images/companies/accenture.svg',
      previousRole: 'Tier-3 College Fresher',
      previousCtc: '₹0 (Fresher)',
      placedCtc: '₹5.8 LPA',
      hike: 'First Offer 🚀',
      rating: '5.0',
      skills: ['Python', 'SQL', 'Power BI', 'Excel'],
      quote: '1-on-1 mentor guidance helped me build an ATS-approved portfolio that cracked my first job with ease.',
      batch: 'Placed 2026',
    },
    {
      id: 'aman',
      name: 'Aman Sharma',
      shortName: 'Aman',
      photo: '/images/alumni/alumni_aman_sharma.jpg',
      role: 'Python Data Engineer',
      company: 'Amazon',
      companyLogo: '/images/companies/amazon.svg',
      previousRole: 'BPO Support Executive',
      previousCtc: '₹3.2 LPA',
      placedCtc: '₹11.5 LPA',
      hike: '+260% Hike',
      rating: '5.0',
      skills: ['Python', 'DSA', 'SQL', 'GenAI'],
      quote: 'The advanced Python challenge series and query optimization sessions were directly asked in my Amazon technical rounds!',
      batch: 'Placed 2026',
    },
    {
      id: 'anjali',
      name: 'Anjali Sharma',
      shortName: 'Anjali',
      photo: '/images/alumni/alumni_sneha_verma.jpg',
      role: 'Junior Data Analyst',
      company: 'TCS',
      companyLogo: '/images/companies/tcs.svg',
      previousRole: 'Arts Graduate (0 Coding)',
      previousCtc: '₹1.8 LPA',
      placedCtc: '₹5.2 LPA',
      hike: '+188% Hike',
      rating: '5.0',
      skills: ['Excel', 'SQL', 'Python', 'Power BI'],
      quote: 'I had never written code before Future.AI. The gamified lessons broke every barrier for non-tech students.',
      batch: 'Placed 2026',
    },
    {
      id: 'priya',
      name: 'Priya Patel',
      shortName: 'Priya',
      photo: '/images/alumni/alumni_priya_patel.jpg',
      role: 'AI & Insights Specialist',
      company: 'Microsoft',
      companyLogo: '/images/companies/microsoft.svg',
      previousRole: 'Junior MIS Coordinator',
      previousCtc: '₹4.0 LPA',
      placedCtc: '₹10.2 LPA',
      hike: '+155% Hike',
      rating: '5.0',
      skills: ['GenAI', 'Power BI', 'Python', 'Prompt Eng'],
      quote: 'GenAI prompt workflows and portfolio capstones gave me a clear unfair advantage during Microsoft interviews.',
      batch: 'Placed 2026',
    },
    {
      id: 'ananya',
      name: 'Ananya Sengupta',
      shortName: 'Ananya',
      photo: '/images/alumni/alumni_ananya_sengupta.jpg',
      role: 'Business Analytics Lead',
      company: 'Google',
      companyLogo: '/images/companies/google.svg',
      previousRole: 'Senior MIS Exec',
      previousCtc: '₹5.5 LPA',
      placedCtc: '₹14.2 LPA',
      hike: '+158% Hike',
      rating: '5.0',
      skills: ['Python', 'Statistics', 'SQL', 'Storytelling'],
      quote: 'Industry datasets and rigorous mock coaching prepared me to lead large-scale business analytics initiatives.',
      batch: 'Placed 2026',
    },
  ];

  // Auto-advance spotlight story
  useEffect(() => {
    if (!isStoryAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStoryIdx((prev) => (prev + 1) % homeSuccessStories.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isStoryAutoPlaying, homeSuccessStories.length]);

  // 4 Flagship Industry Courses matching the mobile reference design exactly
  const flagshipCourses = [
    {
      id: 'data-analyst-genai',
      badgeNum: 1,
      statusTag: isCourseUnlocked('data_analyst') ? 'ENROLLED • ACTIVE' : 'LOCKED • ₹4',
      badgeIcon: isCourseUnlocked('data_analyst') ? '✓' : '🔥',
      badgeGradient: isCourseUnlocked('data_analyst') ? 'from-emerald-500 to-teal-600' : 'from-rose-500 via-pink-500 to-rose-600',
      title: 'Data Analyst',
      subtitle: 'with GenAI',
      shortDesc: 'Master Python, SQL, Power BI, Excel & GenAI Analytics.',
      salaryRange: '₹6 LPA - ₹15 LPA',
      courseFee: '₹4',
      image: '/images/pot1_sharp_poster.jpg',
      holoImage: '/images/pot1_sharp_poster.jpg',
      video: '/videos/data_analyst_genai_v2.mp4',
      potTheme: 'blue' as const,
      skillsList: ['Python', 'SQL', 'Excel', 'Power BI', 'GenAI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(0,180,255,0.22)]',
        cardBorder: 'border-sky-300',
        trayBg: 'bg-gradient-to-r from-sky-50/95 via-white to-cyan-50/95',
        trayBorder: 'border-sky-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(0,210,255,0.3)]',
        neonLip: 'bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400',
        btnClass: 'bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-blue-500/30',
        priceBorder: 'border-sky-400',
      },
      action: onOpenDataAnalyst || onStartPython || (() => {}),
    },
    {
      id: 'data-science-agentic-ai',
      badgeNum: 2,
      statusTag: isCourseUnlocked('data_science') ? 'ENROLLED • ACTIVE' : 'LOCKED • ₹987',
      badgeIcon: isCourseUnlocked('data_science') ? '✓' : '🔒',
      badgeGradient: isCourseUnlocked('data_science') ? 'from-emerald-500 to-teal-600' : 'from-purple-600 via-indigo-600 to-purple-700',
      title: 'Data Science &',
      subtitle: 'Agentic AI',
      shortDesc: 'Explore Machine Learning, Deep Learning, RAG & AI Agents.',
      salaryRange: '₹10 LPA - ₹22 LPA',
      courseFee: '₹987',
      image: '/images/pot2_sharp_poster.jpg',
      holoImage: '/images/pot2_sharp_poster.jpg',
      video: '/videos/data_science_agentic_ai_course.mp4',
      potTheme: 'purple' as const,
      skillsList: ['Data Science', 'ML', 'Deep Learning', 'RAG', 'Agentic AI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(168,85,247,0.22)]',
        cardBorder: 'border-purple-300',
        trayBg: 'bg-gradient-to-r from-purple-50/95 via-white to-fuchsia-50/95',
        trayBorder: 'border-purple-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(168,85,247,0.3)]',
        neonLip: 'bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400',
        btnClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/30',
        priceBorder: 'border-purple-400',
      },
      action: onOpenDataScience || onOpenGenAi || (() => {}),
    },
    {
      id: 'ml-engineering',
      badgeNum: 3,
      statusTag: 'ADVANCED TECH',
      badgeIcon: '👑',
      badgeGradient: 'from-amber-500 via-orange-500 to-amber-600',
      title: 'ML',
      subtitle: 'Engineering',
      shortDesc: 'Build & deploy scalable ML models, PyTorch & MLOps pipelines.',
      salaryRange: '₹12 LPA - ₹28 LPA',
      courseFee: '₹39,999',
      image: '/images/pot3_sharp_poster.jpg',
      holoImage: '/images/pot3_sharp_poster.jpg',
      video: '/videos/ml_engineering_course.mp4',
      potTheme: 'gold' as const,
      skillsList: ['PyTorch', 'TensorFlow', 'MLOps', 'Docker', 'Cloud AI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(245,158,11,0.22)]',
        cardBorder: 'border-amber-300',
        trayBg: 'bg-gradient-to-r from-amber-50/95 via-white to-orange-50/95',
        trayBorder: 'border-amber-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(245,158,11,0.3)]',
        neonLip: 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400',
        btnClass: 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-amber-500/30',
        priceBorder: 'border-amber-400',
      },
      action: onOpenMlEngineering || onOpenPowerBi || (() => {}),
    },
    {
      id: 'ai-engineering',
      badgeNum: 4,
      statusTag: 'FLAGSHIP 2050',
      badgeIcon: '⭐',
      badgeGradient: 'from-emerald-500 via-teal-500 to-emerald-600',
      title: 'AI',
      subtitle: 'Engineering',
      shortDesc: 'Design intelligent systems, LLMs, Vector DBs & Multi-Agents.',
      salaryRange: '₹15 LPA - ₹35 LPA',
      courseFee: '₹49,999',
      image: '/images/pot4_sharp_poster.jpg',
      holoImage: '/images/pot4_sharp_poster.jpg',
      video: '/videos/ai_engineering_course.mp4',
      potTheme: 'emerald' as const,
      skillsList: ['LLMs', 'LangChain', 'Vector DBs', 'Fine-Tuning', 'OpenAI'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(16,185,129,0.22)]',
        cardBorder: 'border-emerald-300',
        trayBg: 'bg-gradient-to-r from-emerald-50/95 via-white to-teal-50/95',
        trayBorder: 'border-emerald-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(16,185,129,0.3)]',
        neonLip: 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400',
        btnClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/30',
        priceBorder: 'border-emerald-400',
      },
      action: onOpenAiEngineering || (() => {}),
    },
    {
      id: 'msoffice-365-copilot',
      badgeNum: 5,
      statusTag: 'POPULAR • PRODUCTIVITY',
      badgeIcon: '📊',
      badgeGradient: 'from-blue-600 via-sky-600 to-indigo-600',
      title: 'Microsoft Office 365',
      subtitle: 'with Copilot',
      shortDesc: 'Master AI-powered Excel, Word, PowerPoint, Outlook & Teams with Copilot automation.',
      salaryRange: '₹5 LPA - ₹12 LPA',
      courseFee: '₹14,999',
      image: '/images/msoffice_365_copilot_poster.jpg',
      holoImage: '/images/msoffice_365_copilot_poster.jpg',
      video: '/videos/msoffice_365_copilot.mp4',
      potTheme: 'blue' as const,
      skillsList: ['Excel Copilot', 'PowerPoint AI', 'Word', 'Teams', 'Automation'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(0,180,255,0.22)]',
        cardBorder: 'border-sky-300',
        trayBg: 'bg-gradient-to-r from-sky-50/95 via-white to-cyan-50/95',
        trayBorder: 'border-sky-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(0,210,255,0.3)]',
        neonLip: 'bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400',
        btnClass: 'bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-blue-500/30',
        priceBorder: 'border-sky-400',
      },
      action: onOpenMsOfficeCopilot || (() => {}),
    },
    {
      id: 'full-stack-web-dev',
      badgeNum: 6,
      statusTag: 'HIGH DEMAND • FULL STACK',
      badgeIcon: '🌐',
      badgeGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      title: 'Full Stack',
      subtitle: 'Web Development',
      shortDesc: 'Build production SaaS apps with React, Node.js, Express, MongoDB, Next.js & REST APIs.',
      salaryRange: '₹8 LPA - ₹20 LPA',
      courseFee: '₹24,999',
      image: '/images/full_stack_web_development_poster.jpg',
      holoImage: '/images/full_stack_web_development_poster.jpg',
      video: '/videos/full_stack_web_development.mp4',
      potTheme: 'emerald' as const,
      skillsList: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Next.js'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(16,185,129,0.22)]',
        cardBorder: 'border-emerald-300',
        trayBg: 'bg-gradient-to-r from-emerald-50/95 via-white to-teal-50/95',
        trayBorder: 'border-emerald-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(16,185,129,0.3)]',
        neonLip: 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400',
        btnClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/30',
        priceBorder: 'border-emerald-400',
      },
      action: onOpenFullStackMern || (() => {}),
    },
    {
      id: 'ui-ux-design-figma-ai',
      badgeNum: 8,
      statusTag: 'CREATIVE • AI DESIGN',
      badgeIcon: '🎨',
      badgeGradient: 'from-purple-600 via-fuchsia-500 to-pink-500',
      title: 'UI/UX Design with Figma',
      subtitle: '& AI Master Program',
      shortDesc: 'Create wireframes, high-fidelity prototypes, design systems & AI UI generation.',
      salaryRange: '₹6 LPA - ₹18 LPA',
      courseFee: '₹21,999',
      image: '/images/ui_ux_design_poster.jpg',
      holoImage: '/images/ui_ux_design_poster.jpg',
      video: '/videos/ui_ux_design_figma_ai.mp4',
      potTheme: 'purple' as const,
      skillsList: ['Figma AI', 'Wireframing', 'Prototyping', 'Design Systems', 'UX Research'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(168,85,247,0.22)]',
        cardBorder: 'border-purple-300',
        trayBg: 'bg-gradient-to-r from-purple-50/95 via-white to-fuchsia-50/95',
        trayBorder: 'border-purple-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(168,85,247,0.3)]',
        neonLip: 'bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400',
        btnClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/30',
        priceBorder: 'border-purple-400',
      },
      action: () => onOpenLockedModule('UI/UX Design with Figma & AI Master Program'),
    },
    {
      id: 'ai-tool-and-prompt',
      badgeNum: 9,
      statusTag: '10X PRODUCTIVITY',
      badgeIcon: '⚡',
      badgeGradient: 'from-amber-500 via-orange-500 to-amber-600',
      title: 'AI Tool & Prompt',
      subtitle: 'Engineering',
      shortDesc: 'Unlock ChatGPT 4o, Claude 3.5, Midjourney, Automation Workflows & Prompt Systems.',
      salaryRange: '₹6 LPA - ₹15 LPA',
      courseFee: '₹12,999',
      image: '/images/cube_genai.jpg',
      holoImage: '/images/cube_genai.jpg',
      video: '/videos/card_video_genai.mp4',
      potTheme: 'gold' as const,
      skillsList: ['ChatGPT 4o', 'Claude 3.5', 'Midjourney', 'Zapier AI', 'Prompt Systems'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(245,158,11,0.22)]',
        cardBorder: 'border-amber-300',
        trayBg: 'bg-gradient-to-r from-amber-50/95 via-white to-orange-50/95',
        trayBorder: 'border-amber-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(245,158,11,0.3)]',
        neonLip: 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400',
        btnClass: 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-amber-500/30',
        priceBorder: 'border-amber-400',
      },
      action: onOpenAiToolsPrompt || (() => {}),
    },
    {
      id: 'ai-for-techies-python-sprint',
      badgeNum: 12,
      statusTag: '30-DAY SPRINT',
      badgeIcon: '🐍',
      badgeGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      title: 'AI for Techies',
      subtitle: '(30 Days Python Sprint)',
      shortDesc: 'Intensive 30-day coding sprint: Python core, OOP, NumPy, Pandas & practical AI scripting.',
      salaryRange: '₹8 LPA - ₹18 LPA',
      courseFee: '₹9,999',
      image: '/images/ai_for_techies_poster.jpg',
      holoImage: '/images/ai_for_techies_poster.jpg',
      video: '/videos/ai_for_techies_python_sprint.mp4',
      potTheme: 'emerald' as const,
      skillsList: ['Python 3', 'OOP', 'NumPy', 'Pandas', 'AI Scripting'],
      themeStyles: {
        cardGlow: 'shadow-[0_0_24px_rgba(16,185,129,0.22)]',
        cardBorder: 'border-emerald-300',
        trayBg: 'bg-gradient-to-r from-emerald-50/95 via-white to-teal-50/95',
        trayBorder: 'border-emerald-300',
        trayGlow: 'shadow-[0_4px_18px_rgba(16,185,129,0.3)]',
        neonLip: 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400',
        btnClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-500/30',
        priceBorder: 'border-emerald-400',
      },
      action: onStartPython || (() => {}),
    },
    ];

  const visibleCourses = flagshipCourses.filter((c) => {
    if (filter === 'in-progress') return c.id === 'data-analyst-genai';
    if (filter === 'explore') return c.id !== 'data-analyst-genai';
    if (filter === 'completed') return false;
    return true;
  });

  return (
    <div className="w-full pb-32 pt-2 px-3 sm:px-4 space-y-4 text-left select-none max-w-md mx-auto">
      

      {/* =========================================================================
          2. HERO VIDEO: Practical Learning ECOSYSTEM
          ========================================================================= */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xs border border-sky-100 bg-black">
        <video
          ref={heroVideoRef}
          src="/videos/mobile_hero_ecosystem.mp4"
          poster="/images/hero_video_frame.jpg"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className="w-full h-auto object-cover block select-none"
        />
      </div>

      {/* =========================================================================
          4. FOUR BENEFIT ITEMS (Industry Projects, Expert Mentors, Placement Support, Lifetime Access)
          ========================================================================= */}
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xs py-2.5 px-1">
        <div className="grid grid-cols-4 divide-x divide-slate-100">
          {/* 1. Industry Projects */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <Briefcase className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 text-amber-500 stroke-[1.8]" />
            <span className="text-[8.5px] min-[375px]:text-[9.5px] font-extrabold text-slate-800 leading-tight mt-1 text-center">
              Industry<br />Projects
            </span>
          </div>

          {/* 2. Expert Mentors */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <Star className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 text-emerald-500 stroke-[1.8]" />
            <span className="text-[8.5px] min-[375px]:text-[9.5px] font-extrabold text-slate-800 leading-tight mt-1 text-center">
              Expert<br />Mentors
            </span>
          </div>

          {/* 3. Placement Support */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <Users className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 text-blue-500 stroke-[1.8]" />
            <span className="text-[8.5px] min-[375px]:text-[9.5px] font-extrabold text-slate-800 leading-tight mt-1 text-center">
              Placement<br />Support
            </span>
          </div>

          {/* 4. Lifetime Access */}
          <div className="flex flex-col items-center justify-center text-center px-1">
            <InfinityIcon className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 text-purple-600 stroke-[1.8]" />
            <span className="text-[8.5px] min-[375px]:text-[9.5px] font-extrabold text-slate-800 leading-tight mt-1 text-center">
              Lifetime<br />Access
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. "4 High-Paying Industry Courses" (Exact Match to User Reference Screenshot)
          ========================================================================= */}
      <div className="w-full space-y-3.5">
        {/* Section Header (Exact Match to Desired Mobile Design) */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
                <Layers className="w-4 h-4 text-blue-600" />
              </div>
              <div className="min-w-0">
                <h2 className="text-[14px] min-[375px]:text-[15px] font-black text-[#0B1B3D] tracking-tight leading-tight truncate">
                  {flagshipCourses.length} High-Paying Industry Courses
                </h2>
                <p className="text-[10px] min-[375px]:text-[11px] font-medium text-slate-500 leading-tight truncate mt-0.5">
                  Job-Ready Skills for a Brighter Tomorrow
                </p>
              </div>
            </div>

            {/* All Courses Button on Right */}
            <button
              type="button"
              onClick={() => {
                playClick?.();
                setFilter('all');
              }}
              className="px-2.5 py-1 rounded-full border border-blue-200 text-blue-600 font-bold text-[11px] flex items-center gap-1 bg-white hover:bg-blue-50 active:scale-95 transition-all shrink-0 cursor-pointer shadow-2xs"
            >
              <span>All Courses</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Filter Pills & View Switcher */}
          <div className="flex items-center justify-between gap-2 pt-2.5">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('all');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                All ({flagshipCourses.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('in-progress');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'in-progress'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                In Progress (1)
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('explore');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'explore'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                Explore ({flagshipCourses.length - 1})
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setFilter('completed');
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filter === 'completed'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                Completed
              </button>
            </div>

            {/* View Mode Toggle (Grid / List) */}
            <div className="flex items-center bg-white border border-slate-200/90 rounded-full p-0.5 shrink-0 shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setViewMode('grid');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  setViewMode('list');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards List (Vertical Stack of Futuristic Capsule Stage Cards) */}
        {visibleCourses.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200/80 shadow-xs">
            <GraduationCap className="w-8 h-8 text-blue-500 mx-auto mb-2 opacity-80" />
            <h4 className="text-sm font-black text-slate-800">No completed courses yet</h4>
            <p className="text-xs text-slate-500 mt-1">Start learning your active course to unlock completed certification!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {visibleCourses.map((c) => (
              <div
                key={c.id}
                className={`fii-course-stage-card theme-${c.potTheme}`}
                onClick={() => {
                  playClick?.();
                  c.action?.();
                }}
              >
                <div className="fii-stage-outer-frame">
                  {/* 1. Upper Card: Media Box + Course Details */}
                  <div className="fii-stage-upper">
                    {/* Left Column: Course Video Playing in Loop with Top-Left Badge */}
                    <div className="fii-stage-media-box">
                      {/* Top-left Badge over the video */}
                      <span className={`fii-stage-media-badge bg-gradient-to-r ${c.badgeGradient}`}>
                        <span>{c.badgeIcon}</span>
                        <span>{isCourseUnlocked(c.id) ? 'ENROLLED • ACTIVE' : c.statusTag}</span>
                      </span>

                      {/* Optimized Crisp Course Card Visual */}
                      <img
                        src={c.holoImage || c.image}
                        alt={c.title}
                        loading="lazy"
                        decoding="async"
                        className="fii-stage-video object-cover"
                      />
                    </div>

                    {/* Right Column: Course Info, CTC, Description & Skills */}
                    <div className="fii-stage-info">
                      {/* Top Right: CTC Salary Range Pill */}
                      <div className="flex items-center justify-end">
                        <span className="fii-stage-ctc-pill">
                          <span className="text-[10px] font-black">₹</span>
                          <span>{c.salaryRange}</span>
                        </span>
                      </div>

                      {/* Course Title (Title in Blue, Subtitle in Purple) */}
                      <h3 className="fii-stage-title">
                        <span className="part-primary">{c.title}</span>{' '}
                        <span className="part-secondary">{c.subtitle}</span>
                      </h3>

                      {/* Short Description */}
                      <p className="fii-stage-desc">
                        {c.shortDesc}
                      </p>

                      {/* Skills Row */}
                      <div className="fii-stage-skills">
                        {c.skillsList.map((skill) => (
                          <span key={skill} className="fii-stage-skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2. Bottom 3D Floating Glowing Glass Pedestal / Shelf */}
                  <div className="fii-stage-pedestal">
                    {/* Left: 28 Real-World Projects & Coding Games */}
                    <div className="fii-stage-pedestal-left">
                      <div className="fii-stage-feature-pill">
                        <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>28 Real-World Projects</span>
                      </div>
                      <div className="fii-stage-feature-pill">
                        <Code2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>Hackathon/DSA Practice</span>
                      </div>
                    </div>

                    {/* Right: Slashed Fee & Start Learning Button with White Circular Arrow */}
                    <div className="fii-stage-pedestal-right">
                      <span className="fii-stage-price-pill">
                        Rs {c.courseFee.replace('₹', '')}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClick?.();
                          c.action?.();
                        }}
                        className="fii-stage-start-btn"
                      >
                        {isCourseUnlocked(c.id) ? (
                          <>
                            <span>Resume Course</span>
                            <span className="fii-stage-arrow-disc">
                              <ArrowRight className="w-3 h-3 stroke-[3]" />
                            </span>
                          </>
                        ) : (
                          <>
                            <span>Unlock Course</span>
                            <span className="fii-stage-arrow-disc">
                              <ArrowRight className="w-3 h-3 stroke-[3]" />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================================
          5. PROMO STRIP BANNER: "Unlock All Premium Courses"
          ========================================================================= */}
      <div className="relative p-3.5 rounded-3xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200 shadow-xs flex items-center justify-between gap-2">
        {/* 3D Gift Box Left */}
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md text-xl">
          🎁
        </div>

        {/* Text Center */}
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-rose-500 text-white text-[8px] font-black uppercase tracking-wider">
            <span>LIMITED-TIME OFFER</span>
          </div>
          <div className="text-xs font-black text-slate-900 leading-tight mt-0.5">
            Unlock All Premium Courses
          </div>
          <div className="text-[9px] text-slate-500 font-semibold truncate leading-tight">
            Access All 13 Industry Programs, Certificates &amp; AI Projects
          </div>
        </div>

        {/* Right Action: ₹987 Yellow Button */}
        <button
          type="button"
          onClick={() => {
            playClick?.();
            onOpenLockedModule('All Premium Courses Bundle');
          }}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-[10px] px-3 py-2 rounded-2xl shadow-sm active:scale-95 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
        >
          <Lock className="w-3 h-3 text-slate-950" />
          <span>UNLOCK ALL ₹987</span>
          <ArrowRight className="w-3 h-3 text-slate-950" />
        </button>
      </div>

      {/* =========================================================================
          5B. PLACEMENT & BENEFIT BANNER: "Learn. Practice. Build. Get Placed."
          ========================================================================= */}
      <div
        onClick={() => {
          playClick?.();
          onOpenLockedModule('All Premium Courses Bundle');
        }}
        className="relative w-full cursor-pointer active:scale-[0.98] transition-transform select-none rounded-2xl overflow-hidden shadow-xs hover:shadow-md"
      >
        <img
          src="/images/banner_learn_practice_get_placed.png"
          alt="Learn. Practice. Build. Get Placed. No Need to Spend ₹2 Lakh"
          className="w-full h-auto block rounded-2xl border border-amber-200/50"
          loading="lazy"
        />
      </div>

      {/* =========================================================================
          6. "What Will You Get?" (2x2 Grid with Exact Certificates & Letters)
          ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Gift className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-black text-slate-900 tracking-tight">
              What Will You Get?
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              onOpenLockedModule('Course Offerings & Credentials');
            }}
            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2x2 Grid of 4 Items */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* 1. 3 Month Internship */}
          <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>3 Month Internship</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Work on real projects, gain industry experience and learn from mentors.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-sky-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-black">
                3 Months
              </span>
              <img
                src="/images/dashboard/wyg_card_internship.png"
                alt="Internship"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>

          {/* 2. Internship Certificate */}
          <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Internship Certificate</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Receive an official internship certificate after successful completion.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-black">
                Verified
              </span>
              <img
                src="/images/dashboard/wyg_card_cert_internship.png"
                alt="Certificate"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>

          {/* 3. Recommendation Letter */}
          <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <Bookmark className="w-4 h-4 text-purple-600" />
                  <span>Recommendation Letter</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Get a professional recommendation letter based on your performance.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-purple-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-black">
                Official LOR
              </span>
              <img
                src="/images/dashboard/wyg_card_letter_rec.png"
                alt="LOR"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>

          {/* 4. Course Completion Certificate */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Course Certificate</span>
                </div>
              </div>
              <p className="text-[9px] text-slate-600 font-medium leading-relaxed">
                Complete the course and receive a verified certificate from Future IT.
              </p>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-amber-200/60 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-black">
                Accredited
              </span>
              <img
                src="/images/dashboard/wyg_card_cert_course.png"
                alt="Course Certificate"
                className="w-10 h-7 rounded object-cover shadow-2xs border border-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          7. STATS ROW (4 Metric Chips from Screenshot)
          ========================================================================= */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
        {/* Metric 1 */}
        <div className="p-2 rounded-2xl bg-sky-50/80 border border-sky-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-blue-700 leading-tight">10,000+</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Learners</div>
        </div>

        {/* Metric 2 */}
        <div className="p-2 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-1">
            <Briefcase className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-purple-700 leading-tight">500+</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Hiring Partners</div>
        </div>

        {/* Metric 3 */}
        <div className="p-2 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
            <Bell className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-emerald-700 leading-tight">70%+</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Transitions</div>
        </div>

        {/* Metric 4 */}
        <div className="p-2 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-center flex flex-col items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-1">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-black text-amber-700 leading-tight">2X</div>
          <div className="text-[8px] font-bold text-slate-500 leading-tight">Salary Growth</div>
        </div>
      </div>

      {/* =========================================================================
          8. "Our Hiring Partners" (Dual Dynamic Flowing Marquee Ribbons)
          ========================================================================= */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 shadow-2xs">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xs font-black text-slate-900 tracking-tight">
                  🏢 Our Hiring Partners
                </h2>
                <span className="flex items-center gap-1 text-[8px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Hiring
                </span>
              </div>
              <p className="text-[9px] text-slate-500 font-medium mt-0.5">
                150+ Top Tech Companies Actively Recruiting Future.AI Alumni
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              playClick?.();
              if (onOpenPlacement) onOpenPlacement();
              else window.location.hash = '#placement';
            }}
            className="flex items-center gap-0.5 text-[10px] font-bold text-blue-600 hover:text-blue-700 shrink-0"
          >
            <span>View All</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Dual-Direction Flowing Marquee Ribbon (Different Style from Hub Grid) */}
        <div 
          className="space-y-2 overflow-hidden py-1"
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
          onTouchStart={() => setIsMarqueePaused(true)}
          onTouchEnd={() => setIsMarqueePaused(false)}
        >
          {/* Stream 1: Moving Left-to-Right */}
          <div className="overflow-hidden w-full">
            <div 
              className={`animate-stories-ltr ${isMarqueePaused ? 'stories-slider-paused' : ''} flex items-center gap-2`}
              style={{ animationDuration: '36s' }}
            >
              {[...homePartnersRow1, ...homePartnersRow1].map((partner, idx) => (
                <div
                  key={`p1-${partner.name}-${idx}`}
                  onClick={() => {
                    playClick?.();
                    if (onOpenPlacement) onOpenPlacement();
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 shrink-0 active:scale-95 transition-all cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-5 h-5 object-contain shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-slate-800 leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[7.5px] font-semibold text-slate-400 leading-tight">
                      {partner.role}
                    </span>
                  </div>
                  <span className="text-[7.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-1.5 py-0.2 rounded-full shrink-0">
                    {partner.package}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stream 2: Moving Right-to-Left */}
          <div className="overflow-hidden w-full">
            <div 
              className={`animate-stories-rtl ${isMarqueePaused ? 'stories-slider-paused' : ''} flex items-center gap-2`}
              style={{ animationDuration: '36s' }}
            >
              {[...homePartnersRow2, ...homePartnersRow2].map((partner, idx) => (
                <div
                  key={`p2-${partner.name}-${idx}`}
                  onClick={() => {
                    playClick?.();
                    if (onOpenPlacement) onOpenPlacement();
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2 shrink-0 active:scale-95 transition-all cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-5 h-5 object-contain shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-slate-800 leading-tight">
                      {partner.name}
                    </span>
                    <span className="text-[7.5px] font-semibold text-slate-400 leading-tight">
                      {partner.role}
                    </span>
                  </div>
                  <span className="text-[7.5px] font-black text-blue-700 bg-blue-50 border border-blue-200/70 px-1.5 py-0.2 rounded-full shrink-0">
                    {partner.package}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Placement Guarantee Banner Callout */}
        <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-sky-50/80 border border-blue-100 rounded-xl p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base">💼</span>
            <div>
              <div className="text-[10px] font-black text-slate-900 leading-tight">Direct Referral & Interview Guarantee</div>
              <div className="text-[8px] font-medium text-slate-500">₹6.0 - 15.0 LPA Average Salary Package</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playClick?.();
              if (onOpenPlacement) onOpenPlacement();
              else window.location.hash = '#placement';
            }}
            className="text-[9px] font-black text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded-full shadow-2xs hover:bg-blue-600 hover:text-white transition-colors shrink-0"
          >
            Apply Drives →
          </button>
        </div>
      </div>

      {/* =========================================================================
          9. "Real People. Real Transformations." (Career Transformation Spotlight Style)
          ========================================================================= */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-3">
        {/* Header with Title and Auto-Play / Navigation Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shadow-2xs">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-xs font-black text-slate-900 tracking-tight">
                  👥 Real People. Real Success.
                </h2>
                <span className="text-[8px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  4.9/5
                </span>
              </div>
              <p className="text-[9px] text-blue-600 font-bold mt-0.5">
                From Non-Tech & Freshers to Top Tech Earners
              </p>
            </div>
          </div>

          {/* Auto-Slide Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                playClick?.();
                setIsStoryAutoPlaying((prev) => !prev);
              }}
              className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border transition-all flex items-center gap-1 shadow-2xs ${
                isStoryAutoPlaying
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
              title="Toggle Auto Slide"
            >
              {isStoryAutoPlaying ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Auto</span>
                </>
              ) : (
                <>
                  <Pause className="w-2.5 h-2.5" />
                  <span>Paused</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                playClick?.();
                setActiveStoryIdx((prev) => (prev === 0 ? homeSuccessStories.length - 1 : prev - 1));
              }}
              className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-transform shadow-2xs"
              aria-label="Previous Story"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => {
                playClick?.();
                setActiveStoryIdx((prev) => (prev + 1) % homeSuccessStories.length);
              }}
              className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-transform shadow-2xs"
              aria-label="Next Story"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Story Circle Avatars (Instagram / LinkedIn Story Reel Style) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {homeSuccessStories.map((story, idx) => {
            const isActive = idx === activeStoryIdx;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => {
                  playClick?.();
                  setActiveStoryIdx(idx);
                }}
                className="flex flex-col items-center gap-1 shrink-0 group focus:outline-none"
              >
                <div
                  className={`relative p-0.5 rounded-full transition-all ${
                    isActive
                      ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={story.photo}
                    alt={story.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-0.5">
                    <img
                      src={story.companyLogo}
                      alt={story.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <span
                  className={`text-[9px] font-bold leading-tight ${
                    isActive ? 'text-blue-600 font-black' : 'text-slate-600'
                  }`}
                >
                  {story.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Story Spotlight Card */}
        {(() => {
          const currentStory = homeSuccessStories[activeStoryIdx];
          return (
            <div className="bg-gradient-to-b from-slate-50/80 to-white border border-slate-200/90 rounded-2xl p-3.5 space-y-3 shadow-2xs text-left transition-all">
              {/* Top Row: Avatar + Name + Placed Badge */}
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <img
                    src={currentStory.photo}
                    alt={currentStory.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-500/30"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white font-black">
                    ✓
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900 leading-tight">
                      {currentStory.name}
                    </span>
                    <span className="text-[7.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.2 rounded-full">
                      Verified Hire
                    </span>
                  </div>
                  <div className="text-[9.5px] font-bold text-blue-600 leading-tight mt-0.5">
                    {currentStory.role} @ {currentStory.company}
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <div className="text-[10px] font-black text-amber-500 flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{currentStory.rating}</span>
                  </div>
                  <span className="text-[7.5px] font-semibold text-slate-400">
                    {currentStory.batch}
                  </span>
                </div>
              </div>

              {/* Career Transformation Bar: Previous Role ➔ Placed Role */}
              <div className="bg-white border border-slate-200/80 rounded-xl p-2.5 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Career Journey</span>
                  <span className="text-emerald-600 font-black">{currentStory.hike}</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1 bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                    <div className="text-[7.5px] font-bold text-slate-400">Previous Role</div>
                    <div className="text-[9px] font-bold text-slate-700 truncate">{currentStory.previousRole}</div>
                    <div className="text-[8px] font-bold text-slate-500">{currentStory.previousCtc}</div>
                  </div>

                  <span className="text-slate-400 text-xs font-black">➔</span>

                  <div className="min-w-0 flex-1 bg-emerald-50/70 rounded-lg p-1.5 border border-emerald-200/60">
                    <div className="text-[7.5px] font-bold text-emerald-600">Placed Career</div>
                    <div className="text-[9px] font-black text-emerald-900 truncate">{currentStory.role}</div>
                    <div className="text-[8px] font-black text-emerald-700">{currentStory.placedCtc}</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-[9.5px] text-slate-600 italic leading-snug">
                "{currentStory.quote}"
              </p>

              {/* Skills Tags & Company Logo Bar */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {currentStory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[7.5px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded-md shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <img
                    src={currentStory.companyLogo}
                    alt={currentStory.company}
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-[9.5px] font-black text-slate-800">
                    {currentStory.company}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  playClick?.();
                  if (onOpenDataAnalyst) onOpenDataAnalyst();
                  else window.location.hash = '#data-analyst';
                }}
                className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/20 active:scale-98 transition-transform"
              >
                <span>Start Your Analytics Career Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })()}
      </div>

    </div>
  );
};
