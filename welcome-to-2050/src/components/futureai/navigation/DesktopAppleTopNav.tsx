import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  House,
  BookOpen,
  GraduationCap,
  CodeXml,
  FileChartColumn,
  BriefcaseBusiness,
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
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';

export type AppleTopNavTab =
  | 'home'
  | 'learning'
  | 'practice'
  | 'ats'
  | 'earn'
  | 'internship'
  | 'placement'
  | 'certificate'
  | 'recommendation';

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
  const moreContainerRef = useRef<HTMLDivElement | null>(null);
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
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreOpen(false);
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
          1. SEPARATE FLOATING FUTURE IT INDUSTRY LOGO (Far-left: 24-32px from viewport edge)
          ════════════════════════════════════════════════════════════════════ */}
      <div
        onClick={() => {
          soundEffects.playClick();
          scrollToTop();
          onNavigateHome();
        }}
        className="relative shrink-0 h-[54px] px-3.5 sm:px-4 rounded-2xl bg-gradient-to-r from-[#5716cc] to-[#4b18a5] text-white flex items-center gap-2.5 select-none cursor-pointer group transition-all duration-200 hover:scale-[1.03] active:scale-95 border border-white/10 z-20"
        style={{
          boxShadow: '0 10px 24px rgba(87, 22, 204, 0.38), 0 4px 8px rgba(87, 22, 204, 0.20)',
        }}
        title="Future IT Industry — Home"
      >
        <img
          src="/images/brand/future_it_white_emblem.png"
          alt="Future IT"
          className="h-[26px] w-auto object-contain shrink-0 drop-shadow-sm group-hover:scale-105 transition-transform"
          onError={(e) => {
            // Inline SVG fallback if image missing
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="flex flex-col text-white font-black italic tracking-tight leading-[1.05] text-[12.5px] select-none">
          <span>Future IT</span>
          <span className="text-[11.5px] tracking-normal font-extrabold">Industry</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          2 & 3. MAIN NAVIGATION + FLOATING PROFILE BUTTON (Centered on Desktop)
          ════════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center gap-2.5 lg:gap-3.5 shrink-0 ml-auto xl:mx-auto">
        {/* 2. MAIN PURPLE NAVIGATION BAR WITH ASYMMETRIC CONCAVE WING CUTS */}
        <div
          ref={barContainerRef}
          className="relative shrink-0 max-w-[890px] h-[72px] flex items-center justify-between"
          style={{
            filter: 'drop-shadow(0 12px 24px rgba(87, 22, 204, 0.38)) drop-shadow(0 4px 8px rgba(87, 22, 204, 0.20))',
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

          {/* ── CENTER: PRIMARY NAV ITEMS (Home, My Learning, Courses, Coding + DSA, ATS Resume, Internship, Placement, Earn Cash, Wallet) ── */}
          <nav className="flex items-center gap-0.5 lg:gap-1.5 pl-9 lg:pl-11 shrink-0" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              const isHovered = hoveredId === item.id;
              const IconComp = item.icon;

              return (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={item.onClick}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId((prev) => (prev === item.id ? null : prev))}
                    aria-label={item.label}
                    className={`group relative flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                      active
                        ? 'min-w-[58px] lg:min-w-[64px] h-[56px] px-2.5 py-1 rounded-2xl bg-white text-[#5716cc] shadow-[0_8px_20px_rgba(87,22,204,0.32)] border-2 border-white'
                        : 'min-w-[54px] lg:min-w-[60px] h-[56px] px-2 py-1 rounded-2xl text-white border border-transparent hover:bg-white/10 hover:shadow-[0_0_12px_rgba(255,255,255,0.18)] hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Icon Container with Smooth Framer Motion Hover Animation */}
                    <div className="relative mb-0.5 flex items-center justify-center">
                      <motion.span
                        whileHover={{ y: -3, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        }}
                        className={`inline-flex items-center justify-center ${
                          active ? 'text-[#5716cc]' : 'text-white'
                        }`}
                      >
                        <IconComp
                          size={24}
                          strokeWidth={2.2}
                          color={active ? '#5716cc' : '#ffffff'}
                          style={{ color: active ? '#5716cc' : '#ffffff' }}
                          className={active ? 'text-[#5716cc]' : 'text-white'}
                        />
                      </motion.span>

                      {/* Glowing Orange-Red Badge on Placement Icon */}
                      {item.hasBadge && (
                        <span
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF5722] ring-2 ring-[#5716cc] shadow-[0_0_8px_#FF5722] animate-pulse pointer-events-none"
                          aria-label="New placement update"
                        />
                      )}
                    </div>

                    {/* Label beneath icon — Shown for BOTH active and inactive */}
                    <span
                      className={`text-[10px] lg:text-[10.5px] tracking-tight leading-none whitespace-nowrap ${
                        active
                          ? 'font-bold text-[#5716cc]'
                          : 'font-medium text-white/95'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
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
                boxShadow: '0 10px 24px rgba(87, 22, 204, 0.38), 0 4px 8px rgba(87, 22, 204, 0.20)',
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
                boxShadow: '0 10px 24px rgba(87, 22, 204, 0.38), 0 4px 8px rgba(87, 22, 204, 0.20)',
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
