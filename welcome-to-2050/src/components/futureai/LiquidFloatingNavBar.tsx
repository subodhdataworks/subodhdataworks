import React, { useState, useEffect, useRef } from 'react';
import './LiquidFloatingNavBar.css';
import { soundEffects } from '../../services/soundEffects';

export type LiquidNavTabId =
  | 'dashboard'
  | 'learning'
  | 'earning'
  | 'coding_game'
  | 'industrial_training'
  | 'internship'
  | 'job'
  | 'hackathon'
  | 'certificate'
  | 'placement';

export interface LiquidFloatingNavBarProps {
  activeTab?: LiquidNavTabId | string;
  onSelectTab: (tabId: LiquidNavTabId) => void;
  onOpenLockedModal?: (featureTitle: string) => void;
}

interface NavItemDef {
  id: LiquidNavTabId;
  label: string;
  shortLabel?: string;
  color: string;
  isLocked?: boolean;
}

export const LiquidFloatingNavBar: React.FC<LiquidFloatingNavBarProps> = ({
  activeTab = 'coding_game',
  onSelectTab,
  onOpenLockedModal,
}) => {
  // Normalize active tab
  const resolvedActiveTab: LiquidNavTabId = (() => {
    if (activeTab === 'home' || activeTab === 'dashboard') return 'dashboard';
    if (activeTab === 'python' || activeTab === 'learning') return 'learning';
    if (
      activeTab === 'income' ||
      activeTab === 'referral' ||
      activeTab === 'wallet' ||
      activeTab === 'withdraw' ||
      activeTab === 'earning'
    )
      return 'earning';
    if (activeTab === 'game' || activeTab === 'coding_game' || activeTab === 'game_intro')
      return 'coding_game';
    if (activeTab === 'industrial_training' || activeTab === 'training') return 'industrial_training';
    if (activeTab === 'internship') return 'internship';
    if (activeTab === 'placement' || activeTab === 'job' || activeTab === 'jobs') return 'placement';
    if (activeTab === 'hackathon') return 'industrial_training';
    if (activeTab === 'certificate' || activeTab === 'certificates') return 'placement';
    return 'coding_game';
  })();

  interface LiquidRippleEffect {
    id: number;
    tabId: string;
    x: number;
    y: number;
  }

  const [currentTab, setCurrentTab] = useState<LiquidNavTabId>(resolvedActiveTab);
  const [bubblePos, setBubblePos] = useState<{ left: number; width: number }>({ left: 490, width: 80 });
  const [isJellyAnimating, setIsJellyAnimating] = useState(false);
  const [ripples, setRipples] = useState<LiquidRippleEffect[]>([]);
  const [squishingTabId, setSquishingTabId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const navItems: NavItemDef[] = [
    {
      id: 'dashboard',
      label: 'Home',
      shortLabel: 'Home',
      color: '#0284c7',
    },
    {
      id: 'learning',
      label: 'My Learning',
      shortLabel: 'Learn',
      color: '#7c3aed',
    },
    {
      id: 'earning',
      label: 'Affiliate',
      shortLabel: 'Affiliate',
      color: '#d97706',
    },
    {
      id: 'coding_game',
      label: 'Coding Game',
      shortLabel: 'Game',
      color: '#0052cc',
    },
    {
      id: 'industrial_training',
      label: 'Industrial Training',
      shortLabel: 'Training',
      color: '#0284c7',
      isLocked: false,
    },
    {
      id: 'internship',
      label: 'Internship',
      shortLabel: 'Intern',
      color: '#059669',
      isLocked: false,
    },
    {
      id: 'placement',
      label: 'Placement',
      shortLabel: 'Placement',
      color: '#e11d48',
      isLocked: false,
    },
  ];

  // Sync internal state when activeTab prop changes
  useEffect(() => {
    setCurrentTab(resolvedActiveTab);
  }, [resolvedActiveTab]);

  // Compute bubble position — permanently anchored to coding_game in the center
  const updateBubblePosition = () => {
    const gameBtn = tabRefs.current['coding_game'];
    const container = containerRef.current;
    if (gameBtn && container) {
      const btnRect = gameBtn.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      const left = btnRect.left - contRect.left + btnRect.width / 2;
      setBubblePos({ left, width: btnRect.width });
    }
  };

  useEffect(() => {
    updateBubblePosition();
    setIsJellyAnimating(true);
    const t = setTimeout(() => setIsJellyAnimating(false), 450);

    const handleResize = () => updateBubblePosition();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabClick = (item: NavItemDef, event?: React.MouseEvent) => {
    // 1. Play tactile organic water/milk drop liquid plop sound
    soundEffects.playWaterDrop();

    // 2. Compute click ripple origin coordinates
    let x = 32;
    let y = 30;
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    // 3. Spawn liquid water / milk splash ripple
    const rippleId = Date.now() + Math.random();
    setRipples((prev) => [...prev.slice(-5), { id: rippleId, tabId: item.id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 850);

    // 4. Trigger viscous liquid squish on clicked tab
    setSquishingTabId(item.id);
    setTimeout(() => {
      setSquishingTabId((curr) => (curr === item.id ? null : curr));
    }, 550);

    if (item.isLocked && onOpenLockedModal) {
      soundEffects.playLock();
      onOpenLockedModal(item.label);
      setCurrentTab(item.id);
      return;
    }

    setCurrentTab(item.id);
    onSelectTab(item.id);
  };

  // Render authentic corporate executive icons
  const renderNavIcon = (id: LiquidNavTabId, isElevated: boolean = false) => {
    switch (id) {
      case 'dashboard':
        return (
          <img
            src="/images/nav/home.png"
            alt="Home"
            className="liquid-svg-icon"
            style={{
              width: 25,
              height: 25,
              objectFit: 'contain',
              display: 'block',
              filter: isElevated
                ? 'brightness(1.05) drop-shadow(0 2px 6px rgba(2,132,199,0.4))'
                : 'drop-shadow(0 2px 4px rgba(2,132,199,0.25))',
            }}
          />
        );

      case 'learning':
        return (
          <svg className="liquid-svg-icon" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="corpLearnGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#6b21a8" />
              </linearGradient>
              <linearGradient id="corpCapGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {isElevated ? (
              <g>
                <rect x="4" y="11" width="20" height="14" rx="3" fill="#ffffff" />
                <rect x="7" y="16" width="7" height="1.8" rx="0.9" fill="#7c3aed" />
                <rect x="7" y="19" width="10" height="1.8" rx="0.9" fill="#7c3aed" opacity="0.75" />
                <circle cx="19.5" cy="16.5" r="2" fill="#fde047" />
                <path d="M14 2.5L24.5 7.5L14 12.5L3.5 7.5L14 2.5Z" fill="#ffffff" stroke="#7c3aed" strokeWidth="1" strokeLinejoin="round" />
                <path d="M8 10V13C8 14.8 10.7 16 14 16C17.3 16 20 14.8 20 13V10" stroke="#7c3aed" strokeWidth="1.2" fill="none" />
                <path d="M22.5 8.5V13.5L23.5 15.5" stroke="#fde047" strokeWidth="1.6" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                {/* Smart Academy Tablet Screen Foundation */}
                <rect x="4" y="11" width="20" height="14" rx="3" fill="url(#corpLearnGrad)" stroke="#e9d5ff" strokeWidth="1" />
                <rect x="7" y="16" width="7" height="1.8" rx="0.9" fill="#ffffff" />
                <rect x="7" y="19" width="11" height="1.8" rx="0.9" fill="#ffffff" opacity="0.8" />
                <rect x="7" y="22" width="5" height="1.4" rx="0.7" fill="#fde047" />
                <circle cx="19.5" cy="16.5" r="2" fill="#fde047" />
                {/* Corporate Graduation Mortarboard Cap */}
                <path d="M14 2.5L24.5 7.5L14 12.5L3.5 7.5L14 2.5Z" fill="url(#corpLearnGrad)" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M8 10V13C8 14.8 10.7 16 14 16C17.3 16 20 14.8 20 13V10" stroke="#ffffff" strokeWidth="1.2" fill="none" />
                {/* Golden Executive Tassel */}
                <path d="M22.5 8.5V13.5L23.5 15.5" stroke="url(#corpCapGold)" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="14" cy="7.5" r="1.3" fill="url(#corpCapGold)" />
              </g>
            )}
          </svg>
        );

      case 'earning':
        return (
          <svg className="liquid-svg-icon" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="corpEarnGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="40%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
              <linearGradient id="corpChipGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {isElevated ? (
              <g>
                <rect x="2.5" y="5" width="23" height="15" rx="3" fill="#ffffff" />
                <rect x="2.5" y="8" width="23" height="3" fill="#d97706" opacity="0.3" />
                <rect x="5.5" y="13" width="4.5" height="4" rx="1" fill="#fef08a" stroke="#d97706" strokeWidth="0.8" />
                <path d="M12.5 16L15.5 13.5L18 15L22 12" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21" cy="19.5" r="5.5" fill="#fef08a" stroke="#ffffff" strokeWidth="1.2" />
                <text x="21" y="23" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">₹</text>
              </g>
            ) : (
              <g>
                {/* Corporate Executive Metal Smart Card */}
                <rect x="2.5" y="5" width="23" height="15" rx="3" fill="url(#corpEarnGrad)" stroke="#fef08a" strokeWidth="1.2" />
                {/* Security Stripe */}
                <rect x="2.5" y="8" width="23" height="3" fill="#78350f" opacity="0.45" />
                {/* Smart EMV Chip */}
                <rect x="5.5" y="13" width="4.5" height="4" rx="1" fill="url(#corpChipGold)" stroke="#b45309" strokeWidth="0.8" />
                {/* Rising Financial Growth Arrow */}
                <path d="M12.5 16L15.5 13.5L18 15L22 12" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.5 12H22V14.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                {/* Embossed ₹ Indian Rupee Coin Badge */}
                <circle cx="21" cy="19.5" r="5.5" fill="url(#corpChipGold)" stroke="#ffffff" strokeWidth="1.2" />
                <text x="21" y="23" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">₹</text>
              </g>
            )}
          </svg>
        );

      case 'coding_game':
        return (
          <svg className="liquid-svg-icon gamepad-icon" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="corpGameGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0052cc" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            {isElevated ? (
              <g>
                <path
                  d="M5 8.5C5 7.1 6.3 6 7.8 6H20.2C21.7 6 23 7.1 23 8.5C23 12 25 17.5 23.5 20.8C22.6 22.5 20.5 22.3 19 20.5L16.5 17.5H11.5L9 20.5C7.5 22.3 5.4 22.5 4.5 20.8C3 17.5 5 12 5 8.5Z"
                  fill="#ffffff"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path d="M7 6C7 4.8 9.5 4 11.5 4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M21 6C21 4.8 18.5 4 16.5 4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                {/* D-Pad on Left */}
                <rect x="8.5" y="9.5" width="2" height="6" rx="0.8" fill="#0052cc" />
                <rect x="6.5" y="11.5" width="6" height="2" rx="0.8" fill="#0052cc" />
                {/* Action Buttons on Right */}
                <circle cx="19.5" cy="10.5" r="1.1" fill="#f43f5e" />
                <circle cx="21" cy="12.5" r="1.1" fill="#0284c7" />
                <circle cx="18" cy="12.5" r="1.1" fill="#facc15" />
                <circle cx="19.5" cy="14.5" r="1.1" fill="#10b981" />
                {/* Center Code Badge < / > */}
                <text x="14" y="13.2" textAnchor="middle" fill="#0052cc" fontSize="5.5" fontWeight="900" fontFamily="monospace">
                  &lt;/&gt;
                </text>
                <circle cx="11" cy="16" r="2" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                <circle cx="17" cy="16" r="2" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
              </g>
            ) : (
              <g>
                <path
                  d="M5 8.5C5 7.1 6.3 6 7.8 6H20.2C21.7 6 23 7.1 23 8.5C23 12 25 17.5 23.5 20.8C22.6 22.5 20.5 22.3 19 20.5L16.5 17.5H11.5L9 20.5C7.5 22.3 5.4 22.5 4.5 20.8C3 17.5 5 12 5 8.5Z"
                  fill="url(#corpGameGrad)"
                  stroke="#ffffff"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path d="M7 6C7 4.8 9.5 4 11.5 4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M21 6C21 4.8 18.5 4 16.5 4" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                {/* D-Pad on Left */}
                <rect x="8.5" y="9.5" width="2" height="6" rx="0.8" fill="#ffffff" />
                <rect x="6.5" y="11.5" width="6" height="2" rx="0.8" fill="#ffffff" />
                {/* Action Buttons on Right */}
                <circle cx="19.5" cy="10.5" r="1.1" fill="#f43f5e" />
                <circle cx="21" cy="12.5" r="1.1" fill="#38bdf8" />
                <circle cx="18" cy="12.5" r="1.1" fill="#facc15" />
                <circle cx="19.5" cy="14.5" r="1.1" fill="#10b981" />
                {/* Center Code Badge < / > */}
                <text x="14" y="13.2" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900" fontFamily="monospace">
                  &lt;/&gt;
                </text>
                {/* Twin Analog Sticks */}
                <circle cx="11" cy="16" r="2" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
                <circle cx="17" cy="16" r="2" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
              </g>
            )}
          </svg>
        );

      case 'industrial_training':
        return (
          <svg className="liquid-svg-icon" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="corpIndGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            {isElevated ? (
              <g>
                <rect x="13" y="4" width="11" height="20" rx="2" fill="#ffffff" />
                <rect x="15.5" y="7" width="2.2" height="2" rx="0.5" fill="#0284c7" />
                <rect x="19" y="7" width="2.2" height="2" rx="0.5" fill="#0284c7" />
                <rect x="15.5" y="11" width="2.2" height="2" rx="0.5" fill="#0284c7" />
                <rect x="19" y="11" width="2.2" height="2" rx="0.5" fill="#0284c7" />
                <rect x="15.5" y="15" width="2.2" height="2" rx="0.5" fill="#0284c7" />
                <rect x="19" y="15" width="2.2" height="2" rx="0.5" fill="#0284c7" />
                <rect x="17" y="19.5" width="3" height="4.5" rx="0.8" fill="#0284c7" />
                <rect x="3" y="11" width="9" height="13" rx="2" fill="#ffffff" opacity="0.9" />
                <circle cx="7.5" cy="16" r="3.8" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="7.5" cy="16" r="1.6" fill="#0284c7" />
                <line x1="2" y1="24" x2="26" y2="24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                {/* Corporate High-Rise Headquarters Tower */}
                <rect x="13" y="4" width="11" height="20" rx="2" fill="url(#corpIndGrad)" stroke="#ffffff" strokeWidth="1.2" />
                <rect x="15.5" y="7" width="2.2" height="2" rx="0.5" fill="#ffffff" />
                <rect x="19" y="7" width="2.2" height="2" rx="0.5" fill="#ffffff" />
                <rect x="15.5" y="11" width="2.2" height="2" rx="0.5" fill="#ffffff" />
                <rect x="19" y="11" width="2.2" height="2" rx="0.5" fill="#ffffff" />
                <rect x="15.5" y="15" width="2.2" height="2" rx="0.5" fill="#ffffff" />
                <rect x="19" y="15" width="2.2" height="2" rx="0.5" fill="#ffffff" />
                <rect x="17" y="19.5" width="3" height="4.5" rx="0.8" fill="#ffffff" />
                {/* Industrial High-Tech Engine on Left */}
                <rect x="3" y="11" width="9" height="13" rx="2" fill="url(#corpIndGrad)" opacity="0.85" stroke="#ffffff" strokeWidth="1" />
                <circle cx="7.5" cy="16" r="3.8" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="7.5" cy="16" r="1.6" fill="#ffffff" />
                <line x1="2" y1="24" x2="26" y2="24" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
              </g>
            )}
          </svg>
        );

      case 'internship':
        return (
          <svg className="liquid-svg-icon" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="corpInternGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
              <linearGradient id="idBadgeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            {isElevated ? (
              <g>
                <rect x="3" y="8" width="22" height="16" rx="3.5" fill="#ffffff" />
                <path d="M10 8V5C10 4.2 10.7 3.5 11.5 3.5H16.5C17.3 3.5 18 4.2 18 5V8" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="14" x2="25" y2="14" stroke="#059669" strokeWidth="1.2" strokeOpacity="0.8" />
                <rect x="12" y="12.5" width="4" height="3" rx="0.8" fill="#fef08a" stroke="#d97706" strokeWidth="0.8" />
                <path d="M19 14V17L18 19" stroke="#facc15" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="16.5" y="18" width="8" height="9" rx="1.5" fill="#f0fdf4" stroke="#059669" strokeWidth="0.9" />
                <circle cx="20.5" cy="21.5" r="1.5" fill="#059669" />
                <line x1="18.5" y1="24.5" x2="22.5" y2="24.5" stroke="#059669" strokeWidth="1" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                {/* Executive Leather Attaché Case */}
                <rect x="3" y="8" width="22" height="16" rx="3.5" fill="url(#corpInternGrad)" stroke="#ffffff" strokeWidth="1.2" />
                <path d="M10 8V5C10 4.2 10.7 3.5 11.5 3.5H16.5C17.3 3.5 18 4.2 18 5V8" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="3" y1="14" x2="25" y2="14" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
                <rect x="12" y="12.5" width="4" height="3" rx="0.8" fill="#fef08a" stroke="#d97706" strokeWidth="0.8" />
                {/* Official Corporate ID Lanyard Badge */}
                <path d="M19 14V17L18 19" stroke="#facc15" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="16.5" y="18" width="8" height="9" rx="1.5" fill="url(#idBadgeGrad)" stroke="#059669" strokeWidth="0.9" />
                <circle cx="20.5" cy="21.5" r="1.5" fill="#059669" />
                <line x1="18.5" y1="24.5" x2="22.5" y2="24.5" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
              </g>
            )}
          </svg>
        );

      case 'placement':
      case 'job':
      default:
        return (
          <svg className="liquid-svg-icon" viewBox="0 0 28 28" fill="none">
            <defs>
              <linearGradient id="corpPlaceGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="50%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
              <linearGradient id="rocketExhaustGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            {isElevated ? (
              <g>
                <path
                  d="M16 2.5C16 2.5 22 5.5 24 13L21.5 15.5L18 12L13.5 16.5L16 20L13.5 22.5C6 20.5 3 14 3 14C3 14 9.5 14 13.5 10L16 2.5Z"
                  fill="#ffffff"
                  stroke="#e11d48"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <circle cx="16.8" cy="9.8" r="2.2" fill="#e11d48" />
                <path d="M12 18L9 21L6 20L8 16" fill="#be123c" stroke="#ffffff" strokeWidth="1" />
                <path d="M5.5 22.5L2 26M9.5 24.5L7 27" stroke="#fde047" strokeWidth="2.4" strokeLinecap="round" />
                <path
                  d="M23 18L23.8 20L26 20.3L24.3 21.8L24.8 24L23 22.8L21.2 24L21.7 21.8L20 20.3L22.2 20L23 18Z"
                  fill="#fde047"
                  stroke="#d97706"
                  strokeWidth="0.8"
                />
              </g>
            ) : (
              <g>
                {/* Supersonic Aerospace Launch Rocket */}
                <path
                  d="M16 2.5C16 2.5 22 5.5 24 13L21.5 15.5L18 12L13.5 16.5L16 20L13.5 22.5C6 20.5 3 14 3 14C3 14 9.5 14 13.5 10L16 2.5Z"
                  fill="url(#corpPlaceGrad)"
                  stroke="#ffffff"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <circle cx="16.8" cy="9.8" r="2.2" fill="#ffffff" />
                <circle cx="16.8" cy="9.8" r="1.2" fill="#0284c7" />
                <path d="M12 18L9 21L6 20L8 16" fill="#be123c" stroke="#ffffff" strokeWidth="1" />
                {/* Propulsion Flame */}
                <path d="M5.5 22.5L2 26M9.5 24.5L7 27" stroke="url(#rocketExhaustGrad)" strokeWidth="2.4" strokeLinecap="round" />
                {/* Golden Career Placement Star */}
                <path
                  d="M23 18L23.8 20L26 20.3L24.3 21.8L24.8 24L23 22.8L21.2 24L21.7 21.8L20 20.3L22.2 20L23 18Z"
                  fill="#fde047"
                  stroke="#d97706"
                  strokeWidth="0.8"
                />
              </g>
            )}
          </svg>
        );
    }
  };

  return (
    <div className="liquid-nav-dock-wrapper">
      {/* ── Floor Caustic Reflections Matching Reference ── */}
      <div className="liquid-nav-floor-caustic-left" />
      <div className="liquid-nav-floor-caustic-right" />
      <div
        className="liquid-nav-floor-caustic-center"
        style={{
          transform: `translateX(${bubblePos.left - 130}px)`,
        }}
      />

      {/* ── Main Liquid Glass Dock Bar ── */}
      <nav
        ref={containerRef}
        className="liquid-nav-capsule-bar"
        aria-label="Liquid Floating Navigation Bar"
      >
        {/* SVG Liquid Wave Shape Contour with 4-side running light */}
        <svg
          className="liquid-nav-wave-shape"
          viewBox="0 0 1000 88"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="liquidGlassBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.96)" />
              <stop offset="45%" stopColor="rgba(240, 248, 255, 0.88)" />
              <stop offset="100%" stopColor="rgba(224, 242, 254, 0.94)" />
            </linearGradient>
            <linearGradient id="liquidRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 180, 255, 0.6)" />
              <stop offset="25%" stopColor="rgba(147, 51, 234, 0.5)" />
              <stop offset="50%" stopColor="rgba(0, 220, 255, 0.8)" />
              <stop offset="75%" stopColor="rgba(236, 72, 153, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 180, 255, 0.6)" />
            </linearGradient>
            {/* Traveling Light Gradients for 4-side running light */}
            <linearGradient id="runningLightGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
              <stop offset="35%" stopColor="#00e5ff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="runningLightGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="35%" stopColor="#f472b6" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="65%" stopColor="#d946ef" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Base Glass Body */}
          <path
            d="M 40,24 C 180,24 350,22 410,22 C 435,22 450,2 500,2 C 550,2 565,22 590,22 C 650,22 820,24 960,24 C 985,24 1000,38 1000,55 C 1000,72 985,86 960,86 C 820,86 580,86 500,88 C 420,86 180,86 40,86 C 15,86 0,72 0,55 C 0,38 15,24 40,24 Z"
            fill="url(#liquidGlassBodyGrad)"
            stroke="url(#liquidRimGrad)"
            strokeWidth="2.5"
          />
          {/* Running Perimeter Light Beam 1 (Clockwise continuously around 4 edges) */}
          <path
            className="liquid-running-border-light-1"
            d="M 40,24 C 180,24 350,22 410,22 C 435,22 450,2 500,2 C 550,2 565,22 590,22 C 650,22 820,24 960,24 C 985,24 1000,38 1000,55 C 1000,72 985,86 960,86 C 820,86 580,86 500,88 C 420,86 180,86 40,86 C 15,86 0,72 0,55 C 0,38 15,24 40,24 Z"
            fill="none"
            stroke="url(#runningLightGrad1)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Running Perimeter Light Beam 2 (Opposite phase continuously around 4 edges) */}
          <path
            className="liquid-running-border-light-2"
            d="M 40,24 C 180,24 350,22 410,22 C 435,22 450,2 500,2 C 550,2 565,22 590,22 C 650,22 820,24 960,24 C 985,24 1000,38 1000,55 C 1000,72 985,86 960,86 C 820,86 580,86 500,88 C 420,86 180,86 40,86 C 15,86 0,72 0,55 C 0,38 15,24 40,24 Z"
            fill="none"
            stroke="url(#runningLightGrad2)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* ── Fixed 3D Liquid Bubble permanently on Coding Game ── */}
        <div
          className={`liquid-elevated-bubble fixed-game-bubble ${
            currentTab === 'coding_game' ? 'active-game-bubble' : 'dormant-game-bubble'
          } ${isJellyAnimating && currentTab === 'coding_game' ? 'jelly-spring' : ''} ${
            squishingTabId === 'coding_game' ? 'liquid-squish-anim' : ''
          }`}
          style={{
            transform: `translate3d(${bubblePos.left}px, -18px, 0)`,
          }}
          onClick={(e) => {
            const gameDef = navItems.find((n) => n.id === 'coding_game');
            if (gameDef) handleTabClick(gameDef, e);
          }}
          title="Coding Game Arena"
        >
          {/* Liquid Water / Milk Splash Ripple Container */}
          <div className="liquid-splash-container" aria-hidden="true">
            {ripples
              .filter((r) => r.tabId === 'coding_game')
              .map((r) => (
                <div
                  key={r.id}
                  className="liquid-fluid-splash"
                  style={{ left: `${r.x}px`, top: `${r.y}px` }}
                >
                  <span className="liquid-drop-core" />
                  <span className="liquid-wave-ring ring-1" />
                  <span className="liquid-wave-ring ring-2" />
                  <span className="liquid-wave-ring ring-3" />
                  <span className="liquid-milk-bead bead-1" />
                  <span className="liquid-milk-bead bead-2" />
                  <span className="liquid-milk-bead bead-3" />
                  <span className="liquid-milk-bead bead-4" />
                  <span className="liquid-milk-bead bead-5" />
                  <span className="liquid-milk-bead bead-6" />
                </div>
              ))}
          </div>

          {/* 3D Liquid Sphere Body */}
          <div className="liquid-sphere-glass-core">
            {/* Top-left specular crescent highlight */}
            <div className="liquid-sphere-specular" />

            {/* Glowing Gamepad icon inside the elevated bubble */}
            <div className="liquid-sphere-icon-wrap">
              {renderNavIcon('coding_game', true)}
            </div>

            {/* 5 Floating micro-droplets matching reference */}
            <span className="liquid-droplet droplet-1" />
            <span className="liquid-droplet droplet-2" />
            <span className="liquid-droplet droplet-3" />
            <span className="liquid-droplet droplet-4" />
            <span className="liquid-droplet droplet-5" />
          </div>

          {/* Liquid glow aura behind sphere */}
          <div className="liquid-bubble-aura-glow" />
        </div>

        {/* ── Nav Item Buttons ── */}
        <div className="liquid-nav-items-row">
          {navItems.map((item) => {
            const isActive = item.id === currentTab;
            const isGameTab = item.id === 'coding_game';

            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[item.id] = el;
                }}
                className={`liquid-nav-tab-btn ${isActive ? 'active' : ''} ${
                  isGameTab ? 'is-game-tab' : 'is-standard-tab'
                } ${squishingTabId === item.id ? 'liquid-squish-anim' : ''}`}
                onClick={(e) => handleTabClick(item, e)}
                title={item.label}
              >
                {/* Liquid Water / Milk Splash Ripple Container */}
                <div className="liquid-splash-container" aria-hidden="true">
                  {ripples
                    .filter((r) => r.tabId === item.id)
                    .map((r) => (
                      <div
                        key={r.id}
                        className="liquid-fluid-splash"
                        style={{ left: `${r.x}px`, top: `${r.y}px` }}
                      >
                        <span className="liquid-drop-core" />
                        <span className="liquid-wave-ring ring-1" />
                        <span className="liquid-wave-ring ring-2" />
                        <span className="liquid-wave-ring ring-3" />
                        <span className="liquid-milk-bead bead-1" />
                        <span className="liquid-milk-bead bead-2" />
                        <span className="liquid-milk-bead bead-3" />
                        <span className="liquid-milk-bead bead-4" />
                        <span className="liquid-milk-bead bead-5" />
                        <span className="liquid-milk-bead bead-6" />
                      </div>
                    ))}
                </div>

                {/* Regular Icon Area (Hidden only for Game tab since elevated bubble sits permanently on top) */}
                <div className={`liquid-tab-icon-box ${isGameTab ? 'elevated-hidden' : ''} ${isActive && !isGameTab ? 'animated-active-icon' : ''}`}>
                  {/* Glowing dynamic animated aura halo for other tabs when active */}
                  {isActive && !isGameTab && (
                    <span
                      className="liquid-tab-halo-glow"
                      style={{
                        background: `radial-gradient(circle, ${item.color}55 0%, transparent 72%)`,
                        boxShadow: `0 0 14px ${item.color}66`,
                      }}
                    />
                  )}
                  {renderNavIcon(item.id, false)}
                </div>

                {/* Tab Label */}
                <span
                  className={`liquid-tab-label ${isActive ? 'active-label' : ''}`}
                  style={isActive && !isGameTab ? { color: item.color } : undefined}
                >
                  <span className="liquid-full-label">{item.label}</span>
                  <span className="liquid-short-label">{item.shortLabel || item.label}</span>
                </span>

                {/* Indicator: Cyan glowing pill if active, small subtle grey dot if inactive */}
                <div className="liquid-tab-indicator-area">
                  {isActive ? (
                    <span
                      className="liquid-active-pill-indicator"
                      style={!isGameTab ? { background: item.color, boxShadow: `0 0 10px ${item.color}` } : undefined}
                    />
                  ) : (
                    <span className="liquid-inactive-dot" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default LiquidFloatingNavBar;
