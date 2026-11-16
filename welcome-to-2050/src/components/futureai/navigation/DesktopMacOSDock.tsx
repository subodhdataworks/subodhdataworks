import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Home,
  BookOpen,
  Code2,
  FileCheck2,
  Coins,
  GraduationCap,
  Award,
  FileBadge,
  Target,
  Headphones,
  Search,
  Wallet,
  Bell,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';

const HomeDockIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="/images/home_final_icon_tight.png"
    alt="Home"
    style={{ width: size, height: size }}
    className={`object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className || ''}`}
    loading="eager"
  />
);

const EarnCashDockIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="/images/earn_cash_final_icon_tight.png"
    alt="Earn Cash"
    style={{ width: size, height: size }}
    className={`object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className || ''}`}
    loading="eager"
  />
);

const WalletDockIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="/images/wallet_final_icon_tight.png"
    alt="Wallet"
    style={{ width: size, height: size }}
    className={`object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className || ''}`}
    loading="eager"
  />
);

const AtsResumeDockIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="/images/ats_resume_final_icon_tight.png"
    alt="ATS Resume"
    style={{ width: size, height: size }}
    className={`object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className || ''}`}
    loading="eager"
  />
);

const MyLearningDockIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="/images/my_learning_squircle_icon_tight.png"
    alt="My Learning"
    style={{ width: size, height: size }}
    className={`object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className || ''}`}
    loading="eager"
  />
);

const DsaPracticeDockIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <img
    src="/images/dsa_practice_squircle_icon_tight.png"
    alt="Coding Practice + DSA"
    style={{ width: size, height: size }}
    className={`object-contain shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className || ''}`}
    loading="eager"
  />
);

export type MacDockNavTab =
  | 'home'
  | 'learning'
  | 'practice'
  | 'ats'
  | 'earn'
  | 'internship'
  | 'placement'
  | 'certificate'
  | 'recommendation';

export interface DesktopMacOSDockProps {
  activeNavTab?: MacDockNavTab;
  walletBalance?: number;
  studentName?: string;
  studentAvatar?: string;
  onNavigateHome: () => void;
  onNavigateLearning: () => void;
  onNavigatePractice: (track?: 'python' | 'sql' | 'excel' | 'master') => void;
  onOpenAtsResume: () => void;
  onNavigateEarn: () => void;
  onNavigateInternship: () => void;
  onNavigatePlacement: () => void;
  onNavigateCertificate?: () => void;
  onNavigateRecommendation?: () => void;
  onOpenHelp?: () => void;
  onTriggerSearch?: () => void;
  onTriggerWallet?: () => void;
  onTriggerNotifications?: () => void;
  onTriggerProfile?: () => void;
}

interface MacDockItemConfig {
  id:
    | 'home'
    | 'learning'
    | 'practice'
    | 'ats'
    | 'earn'
    | 'internship'
    | 'certificate'
    | 'recommendation'
    | 'placement'
    | 'support'
    | 'search'
    | 'wallet'
    | 'notifications'
    | 'profile';
  label: string;
  shortLabel: string;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  tileBg: string;
  tileBorder: string;
  iconColor: string;
  dotColor: string;
  glowShadow: string;
  badgeText?: string;
  hasUnreadDot?: boolean;
  isAvatar?: boolean;
  dividerBefore?: boolean;
  onClick: () => void;
}

const BASE_SIZE = 42;
const MAX_SIZE = 66;
const DISTANCE_LIMIT = 145;
const LERP_FACTOR = 0.28;

export const DesktopMacOSDock: React.FC<DesktopMacOSDockProps> = ({
  activeNavTab = 'home',
  walletBalance = 0,
  studentName = 'Learner',
  studentAvatar = '',
  onNavigateHome,
  onNavigateLearning,
  onNavigatePractice,
  onOpenAtsResume,
  onNavigateEarn,
  onNavigateInternship,
  onNavigatePlacement,
  onNavigateCertificate,
  onNavigateRecommendation,
  onOpenHelp,
  onTriggerSearch,
  onTriggerWallet,
  onTriggerNotifications,
  onTriggerProfile,
}) => {
  const dockRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mouseXRef = useRef<number | null>(null);

  const TOTAL_ITEMS = 14;
  const currentSizesRef = useRef<number[]>(new Array(TOTAL_ITEMS).fill(BASE_SIZE));
  const currentLiftsRef = useRef<number[]>(new Array(TOTAL_ITEMS).fill(0));
  const rafIdRef = useRef<number | null>(null);

  const [sizes, setSizes] = useState<number[]>(() => new Array(TOTAL_ITEMS).fill(BASE_SIZE));
  const [lifts, setLifts] = useState<number[]>(() => new Array(TOTAL_ITEMS).fill(0));
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [bouncingId, setBouncingId] = useState<string | null>(null);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const displayUserName = (studentName || 'Learner').trim();

  // Existing Future IT Industry icons & brand colors + utility items in the Apple macOS Bottom Dock
  const items: MacDockItemConfig[] = [
    {
      id: 'home',
      label: 'Home',
      shortLabel: 'Home',
      icon: Home,
      tileBg: 'linear-gradient(145deg, #eff6ff 0%, #e0efff 100%)',
      tileBorder: '#bfdbfe',
      iconColor: '#0066ff',
      dotColor: '#0066ff',
      glowShadow: 'rgba(0, 102, 255, 0.24)',
      onClick: () => {
        scrollToTop();
        onNavigateHome();
      },
    },
    {
      id: 'learning',
      label: 'My Learning',
      shortLabel: 'My Learning',
      icon: MyLearningDockIcon,
      tileBg: 'linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%)',
      tileBorder: '#e9d5ff',
      iconColor: '#9333ea',
      dotColor: '#9333ea',
      glowShadow: 'rgba(147, 51, 234, 0.24)',
      onClick: () => {
        scrollToTop();
        onNavigateLearning();
      },
    },
    {
      id: 'practice',
      label: 'Coding Practice + DSA',
      shortLabel: 'Coding Practice + DSA',
      icon: DsaPracticeDockIcon,
      tileBg: 'linear-gradient(145deg, #fff7ed 0%, #ffedd5 100%)',
      tileBorder: '#fed7aa',
      iconColor: '#ea580c',
      dotColor: '#ea580c',
      glowShadow: 'rgba(234, 88, 12, 0.24)',
      onClick: () => {
        scrollToTop();
        onNavigatePractice('master');
      },
    },
    {
      id: 'ats',
      label: 'ATS Resume Score',
      shortLabel: 'ATS Resume',
      icon: AtsResumeDockIcon,
      tileBg: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
      tileBorder: '#bbf7d0',
      iconColor: '#16a34a',
      dotColor: '#16a34a',
      glowShadow: 'rgba(22, 163, 74, 0.24)',
      onClick: () => {
        onOpenAtsResume();
      },
    },
    {
      id: 'earn',
      label: 'Earn Cash',
      shortLabel: 'Earn Cash',
      icon: Coins,
      tileBg: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
      tileBorder: '#fde68a',
      iconColor: '#d97706',
      dotColor: '#d97706',
      glowShadow: 'rgba(217, 119, 6, 0.24)',
      onClick: () => {
        scrollToTop();
        onNavigateEarn();
      },
    },
    {
      id: 'internship',
      label: 'Internship',
      shortLabel: 'Internship',
      icon: GraduationCap,
      tileBg: 'linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%)',
      tileBorder: '#bfdbfe',
      iconColor: '#2563eb',
      dotColor: '#2563eb',
      glowShadow: 'rgba(37, 99, 235, 0.24)',
      onClick: () => {
        scrollToTop();
        onNavigateInternship();
      },
    },
    {
      id: 'certificate',
      label: 'Certificate',
      shortLabel: 'Certificate',
      icon: Award,
      tileBg: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
      tileBorder: '#fde68a',
      iconColor: '#d97706',
      dotColor: '#d97706',
      glowShadow: 'rgba(217, 119, 6, 0.24)',
      onClick: () => {
        scrollToTop();
        if (onNavigateCertificate) onNavigateCertificate();
        else if (typeof window !== 'undefined') window.location.hash = '#certificate';
      },
    },
    {
      id: 'recommendation',
      label: 'Recommendation Letter',
      shortLabel: 'Recommend Letter',
      icon: FileBadge,
      tileBg: 'linear-gradient(145deg, #f5f3ff 0%, #ede9fe 100%)',
      tileBorder: '#ddd6fe',
      iconColor: '#7c3aed',
      dotColor: '#7c3aed',
      glowShadow: 'rgba(124, 58, 237, 0.24)',
      onClick: () => {
        scrollToTop();
        if (onNavigateRecommendation) onNavigateRecommendation();
        else if (typeof window !== 'undefined') window.location.hash = '#recommendation';
      },
    },
    {
      id: 'placement',
      label: 'Placement',
      shortLabel: 'Placement',
      icon: Target,
      tileBg: 'linear-gradient(145deg, #fff1f2 0%, #ffe4e6 100%)',
      tileBorder: '#fecdd3',
      iconColor: '#e11d48',
      dotColor: '#e11d48',
      glowShadow: 'rgba(225, 29, 72, 0.24)',
      onClick: () => {
        scrollToTop();
        onNavigatePlacement();
      },
    },
    {
      id: 'support',
      label: 'Help & Support',
      shortLabel: 'Help & Support',
      icon: Headphones,
      tileBg: 'linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)',
      tileBorder: '#a7f3d0',
      iconColor: '#10b981',
      dotColor: '#10b981',
      glowShadow: 'rgba(16, 185, 129, 0.24)',
      onClick: () => {
        if (onOpenHelp) onOpenHelp();
      },
    },
    {
      id: 'search',
      label: 'Search... (⌘K)',
      shortLabel: 'Search ⌘K',
      icon: Search,
      tileBg: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
      tileBorder: '#cbd5e1',
      iconColor: '#334155',
      dotColor: '#0284c7',
      glowShadow: 'rgba(51, 65, 85, 0.20)',
      badgeText: '⌘K',
      dividerBefore: true,
      onClick: () => {
        onTriggerSearch?.();
      },
    },
    {
      id: 'wallet',
      label: `Wallet Balance: ₹${walletBalance.toLocaleString('en-IN')}`,
      shortLabel: `₹${walletBalance.toLocaleString('en-IN')}`,
      icon: WalletDockIcon,
      tileBg: 'linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)',
      tileBorder: '#a7f3d0',
      iconColor: '#059669',
      dotColor: '#059669',
      glowShadow: 'rgba(5, 150, 105, 0.24)',
      onClick: () => {
        onTriggerWallet?.();
      },
    },
    {
      id: 'notifications',
      label: 'Notifications',
      shortLabel: 'Alerts',
      icon: Bell,
      tileBg: 'linear-gradient(145deg, #eef2ff 0%, #e0e7ff 100%)',
      tileBorder: '#c7d2fe',
      iconColor: '#4f46e5',
      dotColor: '#4f46e5',
      glowShadow: 'rgba(79, 70, 229, 0.24)',
      hasUnreadDot: true,
      onClick: () => {
        onTriggerNotifications?.();
      },
    },
    {
      id: 'profile',
      label: `${displayUserName} • Profile`,
      shortLabel: displayUserName,
      tileBg: 'linear-gradient(145deg, #ecfeff 0%, #cffafe 100%)',
      tileBorder: '#a5f3fc',
      iconColor: '#0891b2',
      dotColor: '#10b981',
      glowShadow: 'rgba(8, 145, 178, 0.24)',
      isAvatar: true,
      onClick: () => {
        onTriggerProfile?.();
      },
    },
  ];

  const isItemActive = (id: MacDockItemConfig['id']): boolean => {
    const h = typeof window !== 'undefined' ? window.location.hash.toLowerCase() : '';
    switch (id) {
      case 'home':
        return (
          activeNavTab === 'home' &&
          !h.includes('#ats') &&
          !h.includes('#intern') &&
          !h.includes('#placement') &&
          !h.includes('#cert') &&
          !h.includes('#recom')
        );
      case 'learning':
        return activeNavTab === 'learning' || h === '#learning' || h === '#data-analyst' || h === '#python';
      case 'practice':
        return (
          activeNavTab === 'practice' ||
          h === '#game' ||
          h.includes('challenges') ||
          h.includes('practice') ||
          h.includes('arena')
        );
      case 'ats':
        return activeNavTab === 'ats' || h === '#ats' || h === '#ats-resume-checker';
      case 'earn':
        return activeNavTab === 'earn' || h === '#income' || h === '#earnings' || h === '#referral';
      case 'internship':
        return activeNavTab === 'internship' || h === '#internship';
      case 'certificate':
        return activeNavTab === 'certificate' || h.includes('#cert');
      case 'recommendation':
        return activeNavTab === 'recommendation' || h.includes('#recom') || h.includes('#lor');
      case 'placement':
        return activeNavTab === 'placement' || h === '#placement' || h.includes('#job');
      default:
        return false;
    }
  };

  // Smooth 60fps Apple macOS Dock magnification physics loop
  const runAnimationStep = () => {
    const mouseX = mouseXRef.current;
    let needsMoreFrames = false;

    const nextSizes = [...currentSizesRef.current];
    const nextLifts = [...currentLiftsRef.current];

    for (let i = 0; i < items.length; i++) {
      let targetSize = BASE_SIZE;
      let targetLift = 0;

      if (mouseX !== null) {
        const el = itemRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const dist = Math.abs(mouseX - centerX);

          if (dist < DISTANCE_LIMIT) {
            const rad = (dist / DISTANCE_LIMIT) * (Math.PI / 2);
            const wave = Math.pow(Math.cos(rad), 1.6);
            targetSize = BASE_SIZE + (MAX_SIZE - BASE_SIZE) * wave;
            targetLift = 8 * wave;
          }
        }
      }

      const prevSize = nextSizes[i];
      const prevLift = nextLifts[i];

      const updatedSize = prevSize + (targetSize - prevSize) * LERP_FACTOR;
      const updatedLift = prevLift + (targetLift - prevLift) * LERP_FACTOR;

      if (Math.abs(targetSize - updatedSize) > 0.08 || Math.abs(targetLift - updatedLift) > 0.08) {
        needsMoreFrames = true;
        nextSizes[i] = updatedSize;
        nextLifts[i] = updatedLift;
      } else {
        nextSizes[i] = targetSize;
        nextLifts[i] = targetLift;
      }
    }

    currentSizesRef.current = nextSizes;
    currentLiftsRef.current = nextLifts;
    setSizes([...nextSizes]);
    setLifts([...nextLifts]);

    if (needsMoreFrames) {
      rafIdRef.current = requestAnimationFrame(runAnimationStep);
    } else {
      rafIdRef.current = null;
    }
  };

  const triggerAnimation = () => {
    if (rafIdRef.current === null) {
      rafIdRef.current = requestAnimationFrame(runAnimationStep);
    }
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseXRef.current = e.clientX;
    triggerAnimation();
  };

  const handleMouseLeave = () => {
    mouseXRef.current = null;
    setHoveredIdx(null);
    triggerAnimation();
  };

  const handleClickItem = (item: MacDockItemConfig) => {
    soundEffects.playClick();
    setBouncingId(item.id);
    setTimeout(() => {
      setBouncingId((curr) => (curr === item.id ? null : curr));
    }, 520);
    item.onClick();
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <style>{`
        @keyframes macosDockBounce {
          0% { transform: translateY(0); }
          28% { transform: translateY(-14px); }
          55% { transform: translateY(0); }
          78% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .macos-dock-bounce {
          animation: macosDockBounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1);
        }
      `}</style>
      <div
        className="hidden md:flex fixed bottom-3 left-1/2 -translate-x-1/2 z-[990] items-end justify-center pointer-events-none select-none max-w-[99vw]"
        aria-label="Desktop Dock Navigation"
      >
        {/* Authentic Apple macOS Frosted Glass Dock Shelf */}
        <nav
          ref={dockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="pointer-events-auto relative flex items-end gap-[6px] lg:gap-[9px] px-[12px] lg:px-[14px] pt-[9px] pb-[7px] rounded-[24px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(244, 248, 254, 0.72) 100%)',
            backdropFilter: 'blur(28px) saturate(195%)',
            WebkitBackdropFilter: 'blur(28px) saturate(195%)',
            border: '1px solid rgba(255, 255, 255, 0.90)',
            boxShadow:
              '0 20px 48px rgba(15, 23, 42, 0.16), 0 4px 14px rgba(15, 23, 42, 0.07), 0 0 0 0.5px rgba(15, 23, 42, 0.09), inset 0 1px 1px rgba(255, 255, 255, 0.98)',
          }}
        >
          {/* Subtle top specular glass reflection line */}
          <div
            className="pointer-events-none absolute inset-x-4 top-0 h-[1px] rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.98) 50%, transparent 100%)',
            }}
          />

          {items.map((item, idx) => {
            const IconComponent = item.icon;
            const size = sizes[idx] ?? BASE_SIZE;
            const lift = lifts[idx] ?? 0;
            const active = isItemActive(item.id);
            const isHovered = hoveredIdx === idx;
            const isBouncing = bouncingId === item.id;
            const iconSize = Math.round(size * 0.45);
            const borderRadius = Math.round(size * 0.24);

            return (
              <React.Fragment key={item.id}>
                {/* macOS Vertical Glass Separator Before Utility Section */}
                {item.dividerBefore && (
                  <div
                    className="self-stretch my-2 w-[1.5px] rounded-full mx-0.5 shrink-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(148,163,184,0.15) 0%, rgba(148,163,184,0.55) 50%, rgba(148,163,184,0.15) 100%)',
                    }}
                    aria-hidden="true"
                  />
                )}

                <div
                  className="relative flex flex-col items-center justify-end"
                  style={{
                    minWidth: `${Math.max(size, 48)}px`,
                  }}
                >
                  {/* Authentic macOS Floating Frosted Capsule Tooltip */}
                  <div
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 z-30 transition-all duration-150 ${
                      isHovered
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-1.5 scale-95'
                    }`}
                    style={{
                      bottom: `${size + lift + 34}px`,
                    }}
                  >
                    <div
                      className="relative px-3 py-1 rounded-[9px] text-[11.5px] font-semibold tracking-[-0.01em] text-white whitespace-nowrap"
                      style={{
                        background: 'rgba(15, 23, 42, 0.88)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxShadow:
                          '0 8px 22px rgba(15, 23, 42, 0.24), 0 0 0 0.5px rgba(255, 255, 255, 0.18) inset',
                      }}
                    >
                      {item.label}
                      <span
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[4px] w-2 h-2 rotate-45"
                        style={{ background: 'rgba(15, 23, 42, 0.88)' }}
                      />
                    </div>
                  </div>

                  {/* Future IT Industry Brand Icon Tile with macOS Magnification */}
                  <button
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => handleClickItem(item)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    aria-label={item.label}
                    aria-current={active ? 'page' : undefined}
                    className={`relative flex items-center justify-center cursor-pointer focus:outline-none ${
                      isBouncing ? 'macos-dock-bounce' : ''
                    }`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      borderRadius: `${borderRadius}px`,
                      background: item.tileBg,
                      border: `1.25px solid ${item.tileBorder}`,
                      transform: `translate3d(0, ${-lift}px, 0)`,
                      boxShadow:
                        isHovered || active
                          ? `0 12px 24px ${item.glowShadow}, 0 3px 8px rgba(15, 23, 42, 0.08), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.92)`
                          : '0 5px 12px rgba(15, 23, 42, 0.07), 0 1.5px 4px rgba(15, 23, 42, 0.04), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.9)',
                      transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                      willChange: 'width, height, transform',
                    }}
                  >
                    {/* Top glossy squircle sheen */}
                    <span
                      className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[inherit]"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0) 100%)',
                      }}
                    />

                    {item.isAvatar ? (
                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[inherit]">
                        {studentAvatar ? (
                          <img
                            src={studentAvatar}
                            alt={displayUserName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span
                            className="font-black text-[#0891b2]"
                            style={{ fontSize: `${Math.round(size * 0.4)}px` }}
                          >
                            {displayUserName.charAt(0).toUpperCase()}
                          </span>
                        )}
                        <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
                      </div>
                    ) : (
                      IconComponent && (
                        <IconComponent
                          style={{
                            width: `${iconSize}px`,
                            height: `${iconSize}px`,
                            color: item.iconColor,
                            strokeWidth: 2.1,
                            flexShrink: 0,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        />
                      )
                    )}

                    {/* Optional ⌘K Badge for Search */}
                    {item.badgeText && (
                      <span className="absolute -top-1 -right-1 px-1 py-0.2 rounded bg-slate-800 text-white text-[8.5px] font-bold font-mono leading-tight shadow-xs border border-white/80 z-10">
                        {item.badgeText}
                      </span>
                    )}

                    {/* Optional Unread Notification Dot */}
                    {item.hasUnreadDot && (
                      <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white z-10" />
                    )}
                  </button>

                  {/* Visible Item Name Under Every Icon */}
                  <span
                    onClick={() => handleClickItem(item)}
                    className={`mt-1 text-[9.5px] lg:text-[10px] leading-tight tracking-[-0.01em] whitespace-nowrap cursor-pointer transition-colors ${
                      active || isHovered
                        ? 'font-extrabold text-slate-900'
                        : 'font-semibold text-slate-700'
                    }`}
                    style={active ? { color: item.iconColor } : undefined}
                  >
                    {item.shortLabel}
                  </span>

                  {/* macOS Active Application Indicator Dot */}
                  <span
                    className="mt-[2px] rounded-full transition-all duration-200"
                    style={{
                      width: active ? '4.5px' : '3.5px',
                      height: active ? '4.5px' : '3.5px',
                      backgroundColor: active ? item.dotColor : 'transparent',
                      boxShadow: active ? `0 0 6px ${item.dotColor}` : 'none',
                      opacity: active ? 1 : 0,
                      transform: active ? 'scale(1)' : 'scale(0.4)',
                    }}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </>,
    document.body
  );
};

export default DesktopMacOSDock;
