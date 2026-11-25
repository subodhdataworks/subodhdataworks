import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AnimatedDesktopHeaderLogo } from '../AnimatedFutureFLogo';
import {
  House,
  BookOpen,
  GraduationCap,
  CodeXml,
  FileChartColumn,
  BriefcaseBusiness,
  Briefcase,
  Trophy,
  Wallet,
  LayoutGrid,
  Menu,
  Award,
  FileBadge,
  Headphones,
  Sparkles,
  IndianRupee,
  X,
  User,
  Bot,
  ChevronDown,
  BarChart3,
  FlaskConical,
  Cpu,
  Brain,
  Code2,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';

export type AppleTopNavTab =
  | 'home'
  | 'learning'
  | 'practice'
  | 'ats'
  | 'hr_round'
  | 'earn'
  | 'internship'
  | 'placement'
  | 'certificate'
  | 'recommendation';

export interface HrRoundTrackOption {
  id: string;
  tabId: number;
  label: string;
  role: string;
  iconType: 'chart' | 'flask' | 'cpu' | 'brain' | 'code';
  badge: string;
  badgeClass: string;
  desc: string;
  iconBgClass: string;
}

export const HR_ROUND_TRACKS: HrRoundTrackOption[] = [
  {
    id: 'data_analyst',
    tabId: 1,
    label: 'Data Analyst Interview Prep',
    role: 'Data Analyst / BI Engineer',
    iconType: 'chart',
    iconBgClass: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    badge: 'Popular',
    badgeClass: 'bg-purple-100 text-purple-700 border-purple-200',
    desc: '11 Systematic Sections • SQL, Excel, Power BI...',
  },
  {
    id: 'data_science',
    tabId: 2,
    label: 'Data Science Interview Prep',
    role: 'Data Scientist / Agentic AI Specialist',
    iconType: 'flask',
    iconBgClass: 'bg-purple-50 text-purple-600 border border-purple-100',
    badge: 'Advanced',
    badgeClass: 'bg-sky-100 text-sky-700 border-sky-200',
    desc: 'ML Algorithms, Statistics, Model Evaluation...',
  },
  {
    id: 'ai_engineering',
    tabId: 4,
    label: 'AI Engineering Interview Prep',
    role: 'AI Engineer / LLM Architect',
    iconType: 'cpu',
    iconBgClass: 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100',
    badge: 'Trending',
    badgeClass: 'bg-pink-100 text-pink-700 border-pink-200',
    desc: 'LLMs, RAG, Vector DB, GenAI Applications...',
  },
  {
    id: 'ml_engineering',
    tabId: 3,
    label: 'ML Engineering Interview Prep',
    role: 'MLOps & Systems Engineer',
    iconType: 'brain',
    iconBgClass: 'bg-rose-50 text-rose-500 border border-rose-100',
    badge: 'Core Tech',
    badgeClass: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    desc: 'Model Training, Pipelines, MLOps, Deployment...',
  },
  {
    id: 'full_stack',
    tabId: 7,
    label: 'Full Stack MERN Interview Prep',
    role: 'Full Stack Web & Cloud Architect',
    iconType: 'code',
    iconBgClass: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
    badge: 'High Demand',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
    desc: 'React, Node.js, Express, MongoDB, APIs...',
  },
];

export interface NotificationEntry {
  id: number;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
  action?: () => void;
}

export interface DesktopAppleTopNavProps {
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
  onOpenSignUp?: () => void;
  activeNavTab?: AppleTopNavTab;
  walletBalance?: number;
  studentName?: string;
  studentAvatar?: string;
  notificationsOpen?: boolean;
  notificationItems?: NotificationEntry[];
  onToggleNotifications?: () => void;
  onCloseNotifications?: () => void;
  onMarkNotificationRead?: (id: number) => void;
  onMarkAllNotificationsRead?: () => void;
  onNavigateHome: () => void;
  onNavigateLearning: () => void;
  onNavigatePractice: (track?: 'python' | 'sql' | 'excel' | 'master') => void;
  onOpenAtsResume: () => void;
  onNavigateHrRound?: (roleKey?: string, tabId?: number) => void;
  onNavigateEarn: () => void;
  onOpenWallet: () => void;
  onNavigateInternship: () => void;
  onNavigateCertificate: () => void;
  onNavigateRecommendation: () => void;
  onNavigatePlacement: () => void;
  onOpenHelp: () => void;
  onOpenSearch?: () => void;
  onToggleProfile: () => void;
  onToggleHamburger?: () => void;
}

export const DesktopAppleTopNav: React.FC<DesktopAppleTopNavProps> = ({
  isLoggedIn = false,
  onOpenLogin,
  onOpenSignUp,
  activeNavTab = 'home',
  walletBalance = 0,
  studentName = 'Learner',
  studentAvatar = '',
  notificationsOpen = false,
  notificationItems = [],
  onToggleNotifications,
  onCloseNotifications,
  onMarkNotificationRead,
  onMarkAllNotificationsRead,
  onNavigateHome,
  onNavigateLearning,
  onNavigatePractice,
  onOpenAtsResume,
  onNavigateHrRound,
  onNavigateEarn,
  onOpenWallet,
  onNavigateInternship,
  onNavigateCertificate,
  onNavigateRecommendation,
  onNavigatePlacement,
  onOpenHelp,
  onOpenSearch,
  onToggleProfile,
  onToggleHamburger,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [navWidth, setNavWidth] = useState<number>(930);
  const barContainerRef = useRef<HTMLDivElement | null>(null);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [hrDropdownOpen, setHrDropdownOpen] = useState(false);
  const moreContainerRef = useRef<HTMLDivElement | null>(null);
  const hrContainerRef = useRef<HTMLDivElement | null>(null);
  const profileContainerRef = useRef<HTMLDivElement | null>(null);

  // ResizeObserver to track bar width dynamically for pixel-perfect SVG wing cuts
  useEffect(() => {
    if (!barContainerRef.current) return;
    const updateSize = () => {
      if (barContainerRef.current) {
        setNavWidth(barContainerRef.current.offsetWidth);
      }
    };
    updateSize();
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setNavWidth(Math.round(entry.contentRect.width));
      }
    });
    ro.observe(barContainerRef.current);
    return () => ro.disconnect();
  }, []);

  // Close dropdown on outside click or ESC
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        moreContainerRef.current &&
        !moreContainerRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
      if (
        hrContainerRef.current &&
        !hrContainerRef.current.contains(e.target as Node)
      ) {
        setHrDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreOpen(false);
        setHrDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentHash = typeof window !== 'undefined' ? window.location.hash.toLowerCase() : '';

  // Determine active item
  const isItemActive = (id: string): boolean => {
    switch (id) {
      case 'home':
        return activeNavTab === 'home' && !currentHash.includes('#ats') && !currentHash.includes('#data') && !currentHash.includes('#python') && !currentHash.includes('#game') && !currentHash.includes('#income') && !currentHash.includes('#earn') && !currentHash.includes('#internship') && !currentHash.includes('#placement') && !currentHash.includes('#wallet');
      case 'learning':
        return activeNavTab === 'learning' || currentHash.includes('#data') || currentHash.includes('#python') || currentHash.includes('#learning');
      case 'courses':
        return currentHash.includes('#courses') || currentHash.includes('#curriculum');
      case 'practice':
        return activeNavTab === 'practice' || currentHash.includes('#game') || currentHash.includes('#challenges') || currentHash.includes('#practice');
      case 'ats':
        return activeNavTab === 'ats' || currentHash.includes('#ats');
      case 'hr_round':
        return activeNavTab === 'hr_round' || currentHash.includes('#hr-round') || currentHash.includes('#hrround');
      case 'internship':
        return activeNavTab === 'internship' || currentHash.includes('#internship');
      case 'placement':
        return activeNavTab === 'placement' || currentHash.includes('#placement') || currentHash.includes('#job');
      case 'earn':
        return activeNavTab === 'earn' || currentHash.includes('#income') || currentHash.includes('#earn');
      case 'wallet':
        return currentHash.includes('#wallet') || currentHash.includes('#withdraw');
      default:
        return false;
    }
  };

  // Nav Items Configuration matching the Reference Image exactly
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      tooltip: 'Dashboard Overview',
      icon: House,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onNavigateHome();
      },
    },
    {
      id: 'learning',
      label: 'My Learning',
      tooltip: 'Continue Your Courses',
      icon: GraduationCap,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onNavigateLearning();
      },
    },
    {
      id: 'courses',
      label: 'Courses',
      tooltip: 'Browse All Courses',
      icon: BookOpen,
      onClick: () => {
        soundEffects.playClick();
        const el = document.getElementById('courses') || document.getElementById('career-programs') || document.getElementById('learning-modules-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          scrollToTop();
          onNavigateLearning();
        }
      },
    },
    {
      id: 'practice',
      label: 'Coding + DSA',
      tooltip: 'Coding Practice & Challenges',
      icon: CodeXml,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onNavigatePractice('master');
      },
    },
    {
      id: 'ats',
      label: 'ATS Resume',
      tooltip: 'ATS Resume Score & Optimizer',
      icon: FileChartColumn,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onOpenAtsResume();
      },
    },
    {
      id: 'hr_round',
      label: 'Interview Prep',
      tooltip: 'AI Interview Prep & Master Question Bank',
      icon: Briefcase,
      onClick: () => {
        soundEffects.playClick();
        setHrDropdownOpen((prev) => !prev);
      },
    },
    {
      id: 'earn',
      label: 'Earn Cash',
      tooltip: 'Partner Affiliate & Referral Rewards',
      icon: IndianRupee,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onNavigateEarn();
      },
    },
    {
      id: 'wallet',
      label: `₹${(walletBalance ?? 0).toLocaleString('en-IN')}`,
      tooltip: `Available Balance: ₹${(walletBalance ?? 0).toLocaleString('en-IN')}`,
      icon: Wallet,
      onClick: () => {
        soundEffects.playClick();
        onOpenWallet();
      },
    },
    {
      id: 'internship',
      label: 'Internship',
      tooltip: 'Industry Internship Drives',
      icon: BriefcaseBusiness,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onNavigateInternship();
      },
    },
    {
      id: 'placement',
      label: 'Placement',
      tooltip: 'Career & Placement Drives',
      hasBadge: true,
      icon: Trophy,
      onClick: () => {
        soundEffects.playClick();
        scrollToTop();
        onNavigatePlacement();
      },
    },
  ];

  // More Dropdown Items
  const moreDropdownItems = [
    {
      id: 'certificate',
      label: 'My Certificate',
      subtitle: 'Verified course credentials',
      icon: Award,
      tileBg: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
      tileBorder: '#fde68a',
      iconColor: '#d97706',
      onClick: () => {
        soundEffects.playClick();
        setMoreOpen(false);
        scrollToTop();
        onNavigateCertificate();
      },
    },
    {
      id: 'recommendation',
      label: 'Recommendation Letter',
      subtitle: 'Official LOR for applications',
      icon: FileBadge,
      tileBg: 'linear-gradient(145deg, #f5f3ff 0%, #ede9fe 100%)',
      tileBorder: '#ddd6fe',
      iconColor: '#7c3aed',
      onClick: () => {
        soundEffects.playClick();
        setMoreOpen(false);
        scrollToTop();
        onNavigateRecommendation();
      },
    },
    {
      id: 'support',
      label: 'Help & Support',
      subtitle: 'Dedicated mentor guidance',
      icon: Headphones,
      tileBg: 'linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)',
      tileBorder: '#a7f3d0',
      iconColor: '#10b981',
      onClick: () => {
        soundEffects.playClick();
        setMoreOpen(false);
        onOpenHelp();
      },
    },
  ];

  // Calculate SVG curve coordinates matching the reference image's concave wings:
  const barH = 72;
  const wingW = 44;
  const cx1 = 15.5;
  const cy1 = 28.8;
  const cx2 = 15.5;
  const cy2 = 70.3;
  const svgPath = `M 0 0 L ${navWidth} 0 C ${navWidth - cx1} ${cy1}, ${navWidth - cx2} ${cy2}, ${navWidth - wingW} ${barH} L ${wingW} ${barH} C ${cx2} ${cy2}, ${cx1} ${cy1}, 0 0 Z`;

  return (
    <header
      data-testid="apple-top-nav"
      className="hidden md:flex items-center justify-between w-full pt-2.5 pb-2.5 px-6 lg:px-8 select-none bg-white relative z-50"
      aria-label="Desktop Primary Navigation"
    >
      {/* ════════════════════════════════════════════════════════════════════
          1. SEPARATE FLOATING FUTURE IT INDUSTRY LOGO (5-Stage Animated V2)
          ════════════════════════════════════════════════════════════════════ */}
      <AnimatedDesktopHeaderLogo
        onClick={() => {
          soundEffects.playClick();
          scrollToTop();
          onNavigateHome();
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          2 & 3. MAIN NAVIGATION + FLOATING PROFILE BUTTON (Centered on Desktop)
          ════════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center gap-2.5 lg:gap-3.5 shrink-0 ml-auto xl:mx-auto">
        {/* 2. MAIN PURPLE NAVIGATION BAR WITH ASYMMETRIC CONCAVE WING CUTS */}
        <div
          ref={barContainerRef}
          className="relative shrink-0 max-w-[1040px] lg:max-w-[1100px] h-[72px] flex items-center justify-between"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(87, 22, 204, 0.14))',
          }}
        >
          {/* SVG Background Path with Deep-Purple Gradient & Concave Scoop Cuts */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible"
            viewBox={`0 0 ${navWidth} ${barH}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="purpleNavGradientExact" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5716cc" />
                <stop offset="65%" stopColor="#5816cf" />
                <stop offset="100%" stopColor="#4b18a5" />
              </linearGradient>
            </defs>
            <path d={svgPath} fill="url(#purpleNavGradientExact)" />
          </svg>

          {/* ── CENTER: PRIMARY NAV ITEMS (Equal Spacing, Aligned Icons & Smooth Hover) ── */}
          <nav className="flex items-center gap-1 lg:gap-2 pl-9 lg:pl-11 shrink-0" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  ref={item.id === 'hr_round' ? hrContainerRef : undefined}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={item.onClick}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId((prev) => (prev === item.id ? null : prev))}
                    aria-label={item.label}
                    className={`group relative flex flex-col items-center justify-center min-w-[64px] lg:min-w-[74px] h-[54px] px-2.5 py-1 rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                      active
                        ? 'bg-white text-[#5716cc] shadow-[0_2px_8px_rgba(45,12,115,0.12)] border border-white'
                        : 'text-white/95 border border-transparent hover:bg-white/14 hover:text-white'
                    }`}
                  >
                    {/* Icon Container with Consistent Alignment */}
                    <div className="relative h-6 mb-1 flex items-center justify-center">
                      <motion.span
                        whileHover={{ y: -2, scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 24,
                        }}
                        className={`inline-flex items-center justify-center ${
                          active ? 'text-[#5716cc]' : 'text-white'
                        }`}
                      >
                        <IconComp
                          size={20}
                          strokeWidth={2.15}
                          color={active ? '#5716cc' : '#ffffff'}
                          style={{ color: active ? '#5716cc' : '#ffffff' }}
                          className={active ? 'text-[#5716cc]' : 'text-white'}
                        />
                      </motion.span>

                      {/* Badges on Tab Icons */}
                      {item.hasBadge && (
                        item.badgeText ? (
                          <span
                            className="absolute -top-1.5 -right-2 px-1 py-0.2 rounded-full bg-cyan-400 text-slate-950 text-[7px] font-black uppercase tracking-wider shadow-[0_0_8px_rgba(6,182,212,0.65)] pointer-events-none"
                          >
                            {item.badgeText}
                          </span>
                        ) : (
                          <span
                            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF5722] ring-2 ring-[#5716cc] shadow-[0_0_8px_#FF5722] animate-pulse pointer-events-none"
                            aria-label="New update"
                          />
                        )
                      )}
                    </div>

                    {/* Label beneath icon — Larger & Clearer Readability */}
                    <span
                      className={`text-[11px] lg:text-[11.5px] tracking-normal leading-none whitespace-nowrap ${
                        active
                          ? 'font-bold text-[#5716cc]'
                          : 'font-semibold text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>

                  {/* ─── HR ROUND TRACK SELECTION DROPDOWN POPOVER ─── */}
                  {item.id === 'hr_round' && (
                    <AnimatePresence>
                      {hrDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.96 }}
                          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                          role="menu"
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[390px] sm:w-[440px] rounded-2xl p-3.5 z-50 text-left bg-white border border-purple-200/80 shadow-[0_20px_50px_rgba(20,10,50,0.22)]"
                        >
                          {/* Dropdown Header */}
                          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                                <Briefcase className="w-5 h-5 text-purple-700" />
                              </div>
                              <div>
                                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 m-0">
                                  Select Interview Prep Track
                                </h3>
                                <p className="text-[11px] text-slate-500 font-medium m-0">
                                  Comprehensive Question Bank &amp; Live AI Interviewer
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setHrDropdownOpen(false);
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* HR Round Track Badges / Buttons */}
                          <div className="space-y-2">
                            {HR_ROUND_TRACKS.map((t) => {
                              const renderTrackIcon = () => {
                                switch (t.iconType) {
                                  case 'chart':
                                    return <BarChart3 className="w-5 h-5 text-emerald-600" />;
                                  case 'flask':
                                    return <FlaskConical className="w-5 h-5 text-purple-600" />;
                                  case 'cpu':
                                    return <Cpu className="w-5 h-5 text-fuchsia-600" />;
                                  case 'brain':
                                    return <Brain className="w-5 h-5 text-rose-500" />;
                                  case 'code':
                                    return <Code2 className="w-5 h-5 text-indigo-600" />;
                                  default:
                                    return <Briefcase className="w-5 h-5 text-purple-600" />;
                                }
                              };

                              return (
                                <button
                                  key={t.id}
                                  type="button"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setHrDropdownOpen(false);
                                    scrollToTop();
                                    if (typeof window !== 'undefined') {
                                      window.location.hash = `#interview-prep?role=${t.id}`;
                                      window.dispatchEvent(
                                        new CustomEvent('futureai_interview_role_change', {
                                          detail: { role: t.id },
                                        })
                                      );
                                    }
                                    if (onNavigateHrRound) onNavigateHrRound(t.id, t.tabId);
                                  }}
                                  className="w-full group flex items-center justify-between p-2 rounded-xl bg-white hover:bg-purple-50/70 border border-slate-200/90 hover:border-purple-300 transition-all cursor-pointer text-left shadow-2xs hover:shadow-xs"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <div
                                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${t.iconBgClass} group-hover:scale-105 transition-transform`}
                                    >
                                      {renderTrackIcon()}
                                    </div>
                                    <div className="min-w-0">
                                      <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition">
                                          {t.label}
                                        </span>
                                        <span
                                          className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border ${t.badgeClass}`}
                                        >
                                          {t.badge}
                                        </span>
                                      </div>
                                      <p className="text-[10.5px] text-slate-500 font-medium truncate mt-0.5">
                                        {t.desc}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white shadow-xs group-hover:shadow-[0_2px_8px_rgba(147,51,234,0.35)] transition ml-2">
                                    Start ▶
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── RIGHT IN-BAR: WHITE ROUNDED-SQUARE "MORE" BUTTON ── */}
          <div className="relative ml-1.5 lg:ml-2 mr-1" ref={moreContainerRef}>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setMoreOpen((prev) => !prev);
              }}
              onMouseEnter={() => setHoveredId('more')}
              onMouseLeave={() => setHoveredId((prev) => (prev === 'more' ? null : prev))}
              aria-label="More Services"
              aria-expanded={moreOpen}
              className="relative w-[50px] lg:w-[54px] h-[50px] lg:h-[54px] rounded-xl bg-white text-[#5716cc] hover:bg-slate-50 shadow-md hover:shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 border border-white"
            >
              {/* Lucide LayoutGrid Icon with Framer Motion Hover Animation */}
              <motion.span
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className="inline-flex items-center justify-center mb-0.5 text-[#5716cc]"
              >
                <LayoutGrid size={19} strokeWidth={2.2} />
              </motion.span>
              <span className="text-[10px] font-bold text-[#5716cc] leading-none">More</span>
            </button>

            {/* ─── MORE DROPDOWN MENU ─── */}
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  role="menu"
                  className="absolute right-0 top-full mt-3 w-64 rounded-2xl p-2 z-50 text-left bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl"
                >
                  <div className="space-y-1">
                    {moreDropdownItems.map((dropItem) => {
                      const DropIcon = dropItem.icon;
                      return (
                        <button
                          key={dropItem.id}
                          type="button"
                          onClick={dropItem.onClick}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition cursor-pointer group text-left"
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                            style={{
                              background: dropItem.tileBg,
                              borderColor: dropItem.tileBorder,
                              color: dropItem.iconColor,
                            }}
                          >
                            <DropIcon className="w-4 h-4 stroke-[2.2]" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[12.5px] font-bold text-slate-800 group-hover:text-purple-700 transition">
                              {dropItem.label}
                            </span>
                            <span className="text-[10px] text-slate-500 truncate">
                              {dropItem.subtitle}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── VERTICAL DIVIDER BEFORE HAMBURGER ── */}
          <div className="h-5 w-[1px] bg-white/20 mx-1 lg:mx-1.5 shrink-0" aria-hidden="true" />

          {/* ── HAMBURGER MENU ICON (Menu with Framer Motion Hover Animation) ── */}
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              if (onToggleHamburger) onToggleHamburger();
              else onToggleProfile();
            }}
            onMouseEnter={() => setHoveredId('menu')}
            onMouseLeave={() => setHoveredId((prev) => (prev === 'menu' ? null : prev))}
            className="pr-9 lg:pr-11 text-white hover:text-white/80 cursor-pointer flex items-center justify-center shrink-0"
            title="Menu"
            aria-label="Navigation Menu"
          >
            <motion.span
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
              }}
              className="inline-flex items-center justify-center text-white"
            >
              <Menu size={19} strokeWidth={2} />
            </motion.span>
          </button>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            3. SEPARATE PURPLE PROFILE / LOGIN BUTTON (Floating to the right)
            ════════════════════════════════════════════════════════════════════ */}
        <div className="relative shrink-0 xl:translate-x-10" ref={profileContainerRef}>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                onToggleProfile();
              }}
              onMouseEnter={() => setHoveredId('profile')}
              onMouseLeave={() => setHoveredId((prev) => (prev === 'profile' ? null : prev))}
              aria-label="Student Profile"
              className="w-[54px] h-[54px] rounded-2xl bg-gradient-to-r from-[#5716cc] to-[#4b18a5] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 border border-white/10"
              style={{
                boxShadow: '0 4px 12px rgba(87, 22, 204, 0.16)',
              }}
              title={`${studentName || 'Student'} — Profile & Settings`}
            >
              {studentAvatar ? (
                <img
                  src={studentAvatar}
                  alt={studentName || 'Student'}
                  className="w-9 h-9 rounded-full object-cover border-[2.5px] border-solid border-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px]">
                  <circle cx="12" cy="8" r="4.2" />
                  <path d="M4.5 20.5c0-3.8 3.3-6.5 7.5-6.5s7.5 2.7 7.5 6.5" />
                </svg>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                if (onOpenLogin) onOpenLogin();
                else if (onOpenSignUp) onOpenSignUp();
              }}
              onMouseEnter={() => setHoveredId('login')}
              onMouseLeave={() => setHoveredId((prev) => (prev === 'login' ? null : prev))}
              aria-label="Login / Sign Up"
              className="h-[54px] px-4 rounded-2xl bg-gradient-to-r from-[#5716cc] to-[#4b18a5] text-white flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 border border-white/10 font-bold text-xs sm:text-sm whitespace-nowrap"
              style={{
                boxShadow: '0 4px 12px rgba(87, 22, 204, 0.16)',
              }}
              title="Login to your account"
            >
              <User size={18} strokeWidth={2.2} className="text-white" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>

      {/* 4. BALANCING SPACER: Matches logo container width to keep Center Nav & Profile perfectly centered across desktop viewports */}
      <div className="shrink-0 w-[118px] pointer-events-none invisible hidden xl:block" aria-hidden="true" />
    </header>
  );
};

export default DesktopAppleTopNav;
