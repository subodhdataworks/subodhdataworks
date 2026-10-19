import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Menu,
  Bell,
  Users,
  Clock,
  Briefcase,
  Star,
  BookOpen,
  FileCheck,
  ArrowRight,
  Heart,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  CheckCircle2,
  Gift,
  Building2,
  Home,
  GraduationCap,
  Gamepad2,
  Wallet,
  Sparkles,
  Award
} from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

export interface MobileDataAnalystHubProps {
  userName: string;
  onOpenPython: () => void;
  onOpenSql: () => void;
  onOpenExcel: () => void;
  onOpenPowerBi: () => void;
  onOpenStats: () => void;
  onOpenGenAi: () => void;
  onOpenMockInterview: () => void;
  onOpenLockedModule: (moduleTitle: string) => void;
  onNavigateHome: () => void;
  onOpenArena: () => void;
  onOpenEarn: () => void;
  onOpenPlacement: () => void;
}

export const MobileDataAnalystHub: React.FC<MobileDataAnalystHubProps> = ({
  userName,
  onOpenPython,
  onOpenSql,
  onOpenExcel,
  onOpenPowerBi,
  onOpenStats,
  onOpenGenAi,
  onOpenMockInterview,
  onOpenLockedModule,
  onNavigateHome,
  onOpenArena,
  onOpenEarn,
  onOpenPlacement,
}) => {
  const { playClick } = useThemeAccent();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sound feedback helper
  const playTactile = () => {
    try {
      playClick();
    } catch {
      // fallback
    }
  };

  // Real Success Stories Moving Animation State & Ref
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const candidatesContainerRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  // Smooth continuous auto-glide ticker for placed candidates
  useEffect(() => {
    const container = candidatesContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (isAutoScrolling && !isUserInteracting) {
        // Continuous smooth 36px per second
        container.scrollLeft += 36 * dt;
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling, isUserInteracting]);

  const handleCandidateTouchStart = () => {
    setIsUserInteracting(true);
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleCandidateTouchEnd = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
    }, 2400);
  };

  const scrollCandidatesManual = (direction: 'left' | 'right') => {
    playTactile();
    handleCandidateTouchStart();
    if (candidatesContainerRef.current) {
      const delta = direction === 'left' ? -280 : 280;
      candidatesContainerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
    handleCandidateTouchEnd();
  };

  // 9 Core Modules matching reference image media_1792357650448_26d2dd8a.png
  const modules = [
    {
      id: 'python',
      badgeNum: 1,
      ribbonText: '🔥 Most Popular',
      ribbonGradient: 'from-red-500 to-orange-500',
      title: 'Python',
      desc: 'Zero to Advanced Python with real projects, automation and GenAI integration.',
      tags: ['Python', 'Automation', 'GenAI', 'Projects'],
      image: '/images/dashboard/poster_python.jpg',
      lessonsText: '260 Lessons',
      projectsText: '15+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700',
      badgeBg: 'bg-sky-600',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      category: 'python',
      action: onOpenPython,
    },
    {
      id: 'sql',
      badgeNum: 2,
      ribbonText: 'High Demand',
      ribbonGradient: 'from-purple-600 to-indigo-600',
      title: 'SQL',
      desc: 'Zero to Advanced SQL with real-world databases, queries and data analysis.',
      tags: ['SQL', 'Queries', 'Data Analysis', 'Projects'],
      image: '/images/dashboard/poster_sql.jpg',
      lessonsText: '280 Lessons',
      projectsText: '20+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
      badgeBg: 'bg-purple-600',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      category: 'sql',
      action: onOpenSql,
    },
    {
      id: 'excel',
      badgeNum: 3,
      title: 'Excel',
      desc: 'Zero to Advanced Excel with formulas, PivotTables and business reporting.',
      tags: ['Excel', 'Formulas', 'PivotTables', 'Dashboard'],
      image: '/images/dashboard/poster_excel.jpg',
      lessonsText: '280 Lessons',
      projectsText: '20+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
      badgeBg: 'bg-emerald-600',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      category: 'excel',
      action: onOpenExcel,
    },
    {
      id: 'powerbi',
      badgeNum: 4,
      title: 'Power BI',
      desc: 'Zero to Advanced Power BI with data modeling, DAX and interactive dashboards.',
      tags: ['Power BI', 'DAX', 'Dashboard', 'Projects'],
      image: '/images/dashboard/poster_powerbi.jpg',
      lessonsText: '240 Lessons',
      projectsText: '18+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
      badgeBg: 'bg-amber-500',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      category: 'powerbi',
      action: onOpenPowerBi,
    },
    {
      id: 'stats',
      badgeNum: 5,
      title: 'Statistics',
      desc: 'Learn statistics for data analysis, business insights and decision making.',
      tags: ['Statistics', 'Probability', 'Hypothesis', 'Analysis'],
      image: '/images/dashboard/poster_stats.jpg',
      lessonsText: '200 Lessons',
      projectsText: '15+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
      badgeBg: 'bg-pink-600',
      tagColor: 'bg-pink-50 text-pink-700 border-pink-200',
      category: 'stats',
      action: onOpenStats,
    },
    {
      id: 'genai',
      badgeNum: 6,
      title: 'GenAI',
      desc: 'Explore AI tools, prompt engineering and real-world applications with projects.',
      tags: ['GenAI', 'Prompt Engineering', 'AI Tools', 'Projects'],
      image: '/images/dashboard/poster_genai.jpg',
      lessonsText: '160 Lessons',
      projectsText: '18+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
      badgeBg: 'bg-teal-600',
      tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
      category: 'genai',
      action: onOpenGenAi,
    },
    {
      id: 'dsa-python',
      badgeNum: 7,
      title: 'DSA with Python',
      desc: 'Master data structures and algorithms with Python and real coding practice.',
      tags: ['DSA', 'Python', 'Problem Solving', 'Coding'],
      image: '/images/dashboard/poster_dsa_python.jpg',
      lessonsText: '180 Lessons',
      projectsText: '12+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      badgeBg: 'bg-blue-600',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      category: 'dsa',
      action: onOpenPython,
    },
    {
      id: 'dsa-sql',
      badgeNum: 8,
      title: 'DSA with SQL',
      desc: 'Advanced SQL for interviews, complex queries and real-world case studies.',
      tags: ['Advanced SQL', 'CTE', 'Window Functions', 'Projects'],
      image: '/images/dashboard/poster_dsa_sql.jpg',
      lessonsText: '150 Lessons',
      projectsText: '10+ Projects',
      progress: 0,
      btnBg: 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700',
      badgeBg: 'bg-purple-600',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      category: 'dsa',
      action: onOpenSql,
    },
  ];

  // Card 9: Real HR Interview Question
  const hrInterviewCard = {
    badgeNum: 9,
    title: 'Real HR Interview Question',
    desc: 'Practice live HR & technical interviews with AI feedback and real company questions.',
    tags: ['HR Interview', 'Behavioral', 'Live Mock', 'ATS Score'],
    image: '/images/dashboard/poster_real_hr_question.jpg',
    lessonsText: '140 Lessons',
    projectsText: '10+ Projects',
    progress: 0,
    action: onOpenMockInterview,
  };

  // Filter Categories Pills
  const filterCategories = [
    { id: 'all', label: 'All Courses', icon: '🎮' },
    { id: 'python', label: 'Python', icon: '🐍' },
    { id: 'sql', label: 'SQL', icon: '🗄️' },
    { id: 'excel', label: 'Excel', icon: '📊' },
    { id: 'powerbi', label: 'Power BI', icon: '📈' },
    { id: 'stats', label: 'Statistics', icon: '🧮' },
    { id: 'genai', label: 'GenAI', icon: '🤖' },
    { id: 'dsa', label: 'DSA', icon: '💻' },
    { id: 'interview', label: 'Interview', icon: '💼' },
  ];

  const visibleModules = modules.filter((m) => {
    if (activeCategory === 'all') return true;
    return m.category === activeCategory;
  });

  // Hiring Partners Logos (Authentic Brand Colors & Clear Names)
  const hiringPartners = [
    { name: 'Google', logo: '/images/companies/google.svg', tag: 'Tech Giant', color: '#4285F4' },
    { name: 'Amazon', logo: '/images/companies/amazon.svg', tag: 'E-Commerce', color: '#FF9900' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.svg', tag: 'Enterprise', color: '#00A4EF' },
    { name: 'Deloitte', logo: '/images/companies/deloitte.svg', tag: 'Consulting', color: '#86BC25' },
    { name: 'Accenture', logo: '/images/companies/accenture.svg', tag: 'Consulting', color: '#A100FF' },
    { name: 'TCS', logo: '/images/companies/tcs.svg', tag: 'Global IT', color: '#005691' },
    { name: 'Infosys', logo: '/images/companies/infosys.svg', tag: 'Global IT', color: '#007CC3' },
    { name: 'Wipro', logo: '/images/companies/wipro.svg', tag: 'Cloud/IT', color: '#D81B60' },
    { name: 'Adobe', logo: '/images/companies/adobe.svg', tag: 'Product/AI', color: '#DA1F26' },
    { name: 'IBM', logo: '/images/companies/ibm.svg', tag: 'Cloud/Data', color: '#1F70C1' },
    { name: 'EY', logo: '/images/companies/ey.svg', tag: 'Big 4', color: '#FFE600' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.svg', tag: 'Tech Solutions', color: '#0033A0' },
    { name: 'Capgemini', logo: '/images/companies/capgemini.svg', tag: 'Consulting', color: '#0070AD' },
    { name: 'PwC', logo: '/images/companies/pwc.svg', tag: 'Big 4', color: '#D04A02' },
    { name: 'HCLTech', logo: '/images/companies/hcl.svg', tag: 'Software', color: '#0072CE' },
    { name: 'KPMG', logo: '/images/companies/kpmg.svg', tag: 'Big 4', color: '#00338D' },
  ];

  // Placed Students Testimonials (All 8 real students with authentic photos & CTCs)
  const placedStudents = [
    {
      name: 'Neha Singh',
      role: 'Data Analyst',
      company: 'Accenture',
      companyLogo: '/images/companies/accenture.svg',
      rating: '5.0',
      review: '"The hands-on projects and 1-on-1 mentorship gave me the confidence to crack my first Data Analyst job."',
      skills: ['Python', 'SQL', 'Power BI', 'Excel'],
      ctc: '₹5.8 LPA CTC',
      avatar: '/images/alumni/alumni_neha_singh.jpg',
    },
    {
      name: 'Rohit Kumar',
      role: 'Business & BI Analyst',
      company: 'Deloitte',
      companyLogo: '/images/companies/deloitte.svg',
      rating: '5.0',
      review: '"The real-world curriculum and placement support made the entire career transition smooth."',
      skills: ['SQL', 'Excel', 'Power BI', 'Analytics'],
      ctc: '₹6.8 LPA CTC',
      avatar: '/images/alumni/alumni_rohit_kumar.jpg',
    },
    {
      name: 'Anjali Sharma',
      role: 'Junior Data Analyst',
      company: 'TCS',
      companyLogo: '/images/companies/tcs.svg',
      rating: '5.0',
      review: '"Switched from a non-tech background to a core analytics role in just 4 months of structured practice!"',
      skills: ['Excel', 'SQL', 'Python', 'Power BI'],
      ctc: '₹5.2 LPA CTC',
      avatar: '/images/alumni/alumni_sneha_verma.jpg',
    },
    {
      name: 'Aman Sharma',
      role: 'Python Data Engineer',
      company: 'Amazon',
      companyLogo: '/images/companies/amazon.svg',
      rating: '5.0',
      review: '"The Python live challenge problems and SQL queries were directly asked in my Amazon technical rounds."',
      skills: ['Python', 'DSA', 'SQL', 'GenAI'],
      ctc: '₹11.5 LPA CTC',
      avatar: '/images/alumni/alumni_aman_sharma.jpg',
    },
    {
      name: 'Priya Patel',
      role: 'AI & Insights Specialist',
      company: 'Microsoft',
      companyLogo: '/images/companies/microsoft.svg',
      rating: '5.0',
      review: '"GenAI prompt workflows and portfolio capstones gave me a huge edge in Microsoft interviews."',
      skills: ['GenAI', 'Power BI', 'Python', 'Prompt Eng'],
      ctc: '₹10.2 LPA CTC',
      avatar: '/images/alumni/alumni_priya_patel.jpg',
    },
    {
      name: 'Vikram Malhotra',
      role: 'Associate Consultant',
      company: 'Infosys',
      companyLogo: '/images/companies/infosys.svg',
      rating: '5.0',
      review: '"From basic Excel formulas to enterprise SQL data pipelines. Future.AI changed my career!"',
      skills: ['SQL', 'Excel', 'Power BI', 'Python'],
      ctc: '₹6.5 LPA CTC',
      avatar: '/images/alumni/alumni_vikram_malhotra.jpg',
    },
    {
      name: 'Ananya Sengupta',
      role: 'Business Analytics Lead',
      company: 'Google',
      companyLogo: '/images/companies/google.svg',
      rating: '5.0',
      review: '"Top-tier curriculum, real industry data sets, and mock interview coaching that actually worked."',
      skills: ['Python', 'Statistics', 'SQL', 'Data Story'],
      ctc: '₹14.2 LPA CTC',
      avatar: '/images/alumni/alumni_ananya_sengupta.jpg',
    },
    {
      name: 'Devansh Roy',
      role: 'Cloud Data Analyst',
      company: 'IBM',
      companyLogo: '/images/companies/ibm.svg',
      rating: '5.0',
      review: '"The structured path and 100+ hands-on projects gave me practical skills from day one."',
      skills: ['Python', 'SQL', 'IBM Cloud', 'Power BI'],
      ctc: '₹7.4 LPA CTC',
      avatar: '/images/alumni/alumni_devansh_roy.jpg',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-900 pb-36 select-none text-left font-sans">

      {/* Main Container */}
      <div className="max-w-md mx-auto px-3 pt-2 space-y-3.5">

        {/* Search Bar Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for topics, modules, projects..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs transition-all"
          />
        </div>

        {/* ─── 2. HERO PANORAMIC BANNER ─── */}
        <div className="relative rounded-2xl overflow-hidden border border-sky-200 shadow-sm bg-gradient-to-r from-[#031538] via-[#092257] to-[#1e3a8a] text-white p-3.5 sm:p-4">
          
          {/* Background Illustration of 3D Student & Robot Mascot */}
          <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none overflow-hidden opacity-90">
            <img
              src="/images/dashboard/hero_skills_panorama.jpg"
              alt="Future-Ready Skills"
              className="w-full h-full object-cover object-right"
            />
            {/* Left Vignette Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031538] via-[#031538]/80 to-transparent" />
          </div>

          {/* Top Pill Badges */}
          <div className="flex items-center justify-between relative z-10 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-200 text-[9px] font-black backdrop-blur-md">
              Industry-Ready Learning Platform
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-bold backdrop-blur-md">
              Learn Today Build Tomorrow
            </span>
          </div>

          {/* Main Headline */}
          <div className="relative z-10 max-w-[62%] space-y-1">
            <h1 className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight">
              Future-Ready Skills for a{' '}
              <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-fuchsia-300 bg-clip-text text-transparent">
                Brighter Tomorrow
              </span>
            </h1>
            <p className="text-[10px] text-slate-200 font-medium leading-snug">
              Interactive lessons • Real-world projects • AI-powered guidance • Placement support
            </p>
          </div>

          {/* 4 Stat Pills Grid (Inside Hero) */}
          <div className="grid grid-cols-4 gap-1.5 mt-3.5 relative z-10 pt-2 border-t border-white/15">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-1.5 text-center">
              <div className="text-[11px] font-black text-white leading-tight">50K+</div>
              <div className="text-[8px] text-sky-200 font-semibold leading-none mt-0.5">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-1.5 text-center">
              <div className="text-[11px] font-black text-white leading-tight">500+</div>
              <div className="text-[8px] text-purple-200 font-semibold leading-none mt-0.5">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-1.5 text-center">
              <div className="text-[11px] font-black text-white leading-tight">100+</div>
              <div className="text-[8px] text-emerald-200 font-semibold leading-none mt-0.5">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-1.5 text-center">
              <div className="text-[11px] font-black text-amber-300 leading-tight">⭐ 4.8/5</div>
              <div className="text-[8px] text-slate-200 font-semibold leading-none mt-0.5">Rating</div>
            </div>
          </div>
        </div>

        {/* ─── 3. CATEGORY FILTER PILL ROW ─── */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  playTactile();
                  setActiveCategory(cat.id);
                }}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-102'
                    : 'bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ─── 4. 2-COLUMN GRID OF COURSE MODULES (Cards 1 to 8) ─── */}
        <div className="grid grid-cols-2 gap-2.5">
          {visibleModules.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs flex flex-col justify-between hover:shadow-md transition-all group"
            >
              {/* Card Top Visual & Badges */}
              <div
                className="relative aspect-[16/10] bg-slate-900 cursor-pointer overflow-hidden"
                onClick={() => {
                  playTactile();
                  m.action();
                }}
              >
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Number Badge Top Left */}
                <div className={`absolute top-2 left-2 w-5 h-5 rounded-md ${m.badgeBg} text-white font-black text-[10px] flex items-center justify-center shadow-sm`}>
                  {m.badgeNum}
                </div>

                {/* Ribbon Tag (Most Popular / High Demand) */}
                {m.ribbonText && (
                  <div className={`absolute top-2 left-8 px-2 py-0.5 rounded-full bg-gradient-to-r ${m.ribbonGradient} text-white font-black text-[8px] shadow-sm tracking-wide`}>
                    {m.ribbonText}
                  </div>
                )}

                {/* Heart Button Top Right */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playTactile();
                  }}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs"
                >
                  <Heart className="w-3 h-3" />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-2.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Arrow */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => {
                      playTactile();
                      m.action();
                    }}
                  >
                    <h3 className="text-sm font-black text-slate-900 tracking-tight leading-tight">
                      {m.title}
                    </h3>
                    <div className="w-4 h-4 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-500 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* 2-line Description */}
                  <p className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-2 mt-1">
                    {m.desc}
                  </p>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {m.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[8px] font-bold px-1.5 py-0.5 rounded-md border ${m.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lessons & Projects Meta */}
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600 mt-2">
                    <BookOpen className="w-3 h-3 text-blue-600" />
                    <span>{m.lessonsText}</span>
                    <span className="text-slate-300">|</span>
                    <FileCheck className="w-3 h-3 text-emerald-600" />
                    <span>{m.projectsText}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-0.5 mt-2">
                    <div className="text-[8px] font-bold text-slate-500">
                      {m.progress}% Complete
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    m.action();
                  }}
                  className={`w-full py-1.5 px-2 rounded-xl ${m.btnBg} text-white font-extrabold text-[11px] shadow-xs active:scale-97 transition-all flex items-center justify-center gap-1 cursor-pointer mt-2`}
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ─── 5. CARD 9: REAL HR INTERVIEW QUESTION (Full-Width Card) ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs p-3 hover:shadow-md transition-all">
          <div className="flex items-center gap-3">
            {/* Left Image */}
            <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-900 shrink-0">
              <img
                src={hrInterviewCard.image}
                alt={hrInterviewCard.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-md bg-amber-500 text-white font-black text-[10px] flex items-center justify-center shadow-xs">
                {hrInterviewCard.badgeNum}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight truncate">
                {hrInterviewCard.title}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-2">
                {hrInterviewCard.desc}
              </p>

              <div className="flex flex-wrap gap-1 pt-0.5">
                {hrInterviewCard.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[8px] font-bold px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600">
                  <BookOpen className="w-3 h-3 text-amber-600" />
                  <span>{hrInterviewCard.lessonsText}</span>
                  <span className="text-slate-300">|</span>
                  <FileCheck className="w-3 h-3 text-amber-600" />
                  <span>{hrInterviewCard.projectsText}</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    hrInterviewCard.action();
                  }}
                  className="py-1 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-[10px] shadow-xs active:scale-95 transition-all flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 6. WHAT WILL YOU GET SECTION ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center text-sm shadow-xs shrink-0">
              🎁
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-900 tracking-tight leading-none">
                What Will You Get?
              </h2>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5 leading-none">
                Not just a course, but a complete career experience with Future IT Industry.
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 gap-2">
            {/* 1. 3 Month Internship */}
            <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-2.5 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center text-xs">
                  💼
                </div>
                <div className="text-[11px] font-black text-slate-900 leading-tight">3 Month Internship</div>
                <p className="text-[9px] text-slate-500 font-medium leading-tight">
                  Work on real projects, gain industry experience and learn from mentors.
                </p>
              </div>
              <span className="self-start text-[8px] font-black text-sky-700 bg-white border border-sky-200 px-2 py-0.5 rounded-full">
                3 Months
              </span>
            </div>

            {/* 2. Internship Certificate */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2.5 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs">
                  📜
                </div>
                <div className="text-[11px] font-black text-slate-900 leading-tight">Internship Certificate</div>
                <p className="text-[9px] text-slate-500 font-medium leading-tight">
                  Receive an official internship certificate after successful completion.
                </p>
              </div>
              <span className="self-start text-[8px] font-black text-emerald-700 bg-white border border-emerald-200 px-2 py-0.5 rounded-full">
                Verified Certificate
              </span>
            </div>

            {/* 3. Recommendation Letter */}
            <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-2.5 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="w-6 h-6 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xs">
                  📝
                </div>
                <div className="text-[11px] font-black text-slate-900 leading-tight">Recommendation Letter</div>
                <p className="text-[9px] text-slate-500 font-medium leading-tight">
                  Get a professional recommendation letter based on performance.
                </p>
              </div>
              <span className="self-start text-[8px] font-black text-purple-700 bg-white border border-purple-200 px-2 py-0.5 rounded-full">
                Official Letter
              </span>
            </div>

            {/* 4. Course Completion Certificate */}
            <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-2.5 flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                  🏆
                </div>
                <div className="text-[11px] font-black text-slate-900 leading-tight">Course Certificate</div>
                <p className="text-[9px] text-slate-500 font-medium leading-tight">
                  Complete course modules and receive industry-recognized certificate.
                </p>
              </div>
              <span className="self-start text-[8px] font-black text-amber-700 bg-white border border-amber-200 px-2 py-0.5 rounded-full">
                Course Completion
              </span>
            </div>
          </div>
        </div>

        {/* ─── 7. OUR HIRING PARTNERS (Vibrant Authentic Brand Colors & Clear Names) ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 shadow-2xs">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">🏢 Our Hiring Partners</h3>
                <p className="text-[9px] text-slate-500 font-medium mt-0.5">
                  150+ Top MNCs & Unicorns Actively Hiring Future.AI Students
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                playTactile();
                if (onOpenPlacement) onOpenPlacement();
              }}
              className="text-[10px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 shrink-0"
            >
              <span>View All</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Partner Badges 4-Column Grid with Authentic Brand Colors & Clear Names */}
          <div className="grid grid-cols-4 gap-2 pt-0.5">
            {hiringPartners.map((partner) => (
              <div
                key={partner.name}
                onClick={playTactile}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all text-center min-h-[66px] active:scale-95 cursor-pointer group"
                title={`${partner.name} - Actively Hiring Future.AI Students`}
              >
                <div className="h-6 w-full flex items-center justify-center mb-1">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-6 max-w-[32px] object-contain drop-shadow-2xs group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-black text-slate-800 leading-tight truncate w-full text-center">
                  {partner.name}
                </span>
                <span className="text-[7.5px] font-bold text-emerald-600 leading-none mt-0.5 flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Hiring
                </span>
              </div>
            ))}
          </div>

          {/* Hiring Guarantee Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50/70 border border-blue-100 rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">💼</span>
              <div>
                <div className="text-[10px] font-black text-slate-900 leading-tight">100% Placement Support</div>
                <div className="text-[8px] font-medium text-slate-500">Unlimited Interview Drives until Placed</div>
              </div>
            </div>
            <span className="text-[9px] font-black text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded-full shadow-2xs">
              ₹6 - 15 LPA
            </span>
          </div>
        </div>

        {/* ─── 8. REAL PEOPLE. REAL SUCCESS STORIES (Auto-Moving Candidates Animation) ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-3">
          {/* Header with Title and Moving Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shadow-2xs">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">
                  👥 Real People. Real Success Stories.
                </h3>
                <p className="text-[9px] text-blue-600 font-bold mt-0.5">
                  Future.AI Placed Students • 500+ Hired
                </p>
              </div>
            </div>

            {/* Moving Toggle & Manual Scroll Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setIsAutoScrolling((prev) => !prev);
                }}
                className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border transition-all flex items-center gap-1 shadow-2xs ${
                  isAutoScrolling && !isUserInteracting
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
                title="Toggle continuous auto-moving animation"
              >
                {isAutoScrolling && !isUserInteracting ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Moving</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-2.5 h-2.5" />
                    <span>Paused</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollCandidatesManual('left')}
                  className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-transform shadow-2xs"
                  aria-label="Previous Candidate"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCandidatesManual('right')}
                  className="w-5 h-5 rounded-md bg-slate-100 hover:bg-slate-200 active:scale-90 flex items-center justify-center text-slate-600 transition-transform shadow-2xs"
                  aria-label="Next Candidate"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Continuous Auto-Gliding Candidate Moving Track */}
          <div
            ref={candidatesContainerRef}
            onTouchStart={handleCandidateTouchStart}
            onTouchEnd={handleCandidateTouchEnd}
            onMouseEnter={() => setIsUserInteracting(true)}
            onMouseLeave={() => setIsUserInteracting(false)}
            className="flex items-stretch gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5 select-none"
          >
            {[...placedStudents, ...placedStudents].map((st, idx) => (
              <div
                key={`${st.name}-${idx}`}
                className="w-72 shrink-0 bg-white border border-slate-200/90 rounded-2xl p-3.5 flex flex-col justify-between space-y-2.5 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-left"
              >
                <div>
                  {/* Top Bar: Avatar + Name + Rating */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <img
                        src={st.avatar}
                        alt={st.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/25 shrink-0"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[7px] text-white font-black">
                        ✓
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-black text-slate-900 leading-tight truncate">
                        {st.name}
                      </div>
                      <div className="text-[8.5px] font-semibold text-slate-500 leading-tight truncate">
                        {st.role}
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col items-end shrink-0">
                      <div className="text-[10px] font-black text-amber-500 flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{st.rating}</span>
                      </div>
                      <span className="text-[7.5px] font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-1 py-0.2 rounded leading-none mt-0.5">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-[9.5px] text-slate-600 italic leading-snug mt-2 line-clamp-3">
                    {st.review}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {st.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[7.5px] font-bold text-slate-600 bg-slate-100 border border-slate-200/70 px-1.5 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Company Logo + Name & CTC Package */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <img
                      src={st.companyLogo}
                      alt={st.company}
                      className="w-4 h-4 object-contain shrink-0"
                    />
                    <span className="text-[9.5px] font-black text-slate-800 truncate">
                      {st.company}
                    </span>
                  </div>

                  <span className="text-[9.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full shadow-2xs shrink-0">
                    {st.ctc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Hint Footer */}
          <div className="flex items-center justify-between text-[8px] text-slate-400 pt-0.5 px-1 font-medium">
            <span>✨ Live moving placement stories</span>
            <span>Touch or drag cards to inspect</span>
          </div>
        </div>

      </div>
    </div>
  );
};
