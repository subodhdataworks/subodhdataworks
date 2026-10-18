import React from 'react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

export type MobileTab = 'home' | 'learn' | 'game' | 'arena' | 'earn' | 'placement' | 'profile';

interface MobileBottomNavProps {
  currentTab: MobileTab;
  onSelectTab: (tab: MobileTab) => void;
  unreadEarnBadge?: boolean;
}

// ─────────────────────────────────────────────────────────────
// 1. 3D Home Icon (Royal Blue Facade + Door Arch + Roof Highlight)
// ─────────────────────────────────────────────────────────────
const Icon3DHome: React.FC<{ active?: boolean; className?: string }> = ({ active, className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="homeRoofGrad" x1="24" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="homeBodyGrad" x1="24" y1="20" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="homeDoorGrad" x1="24" y1="28" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.8" />
      </linearGradient>
      <filter id="homeShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#1d4ed8" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#homeShadow)">
      {/* Chimney */}
      <rect x="31" y="8" width="5" height="11" rx="2" fill="#1d4ed8" />
      {/* House Body */}
      <path
        d="M24 5L7 20C6 20.9 6.8 22.5 8.2 22.5H11V40C11 41.7 12.3 43 14 43H34C35.7 43 37 41.7 37 40V22.5H39.8C41.2 22.5 42 20.9 41 20L24 5Z"
        fill="url(#homeBodyGrad)"
      />
      {/* Roof Bevel Cap */}
      <path
        d="M24 5L7 20C6.3 20.6 6.8 21.8 7.7 21.8H40.3C41.2 21.8 41.7 20.6 41 20L24 5Z"
        fill="url(#homeRoofGrad)"
      />
      {/* Specular White Roof Edge */}
      <path
        d="M24 7L38 19.5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
      {/* Door Archway */}
      <path
        d="M19 43V31.5C19 28.7 21.2 26.5 24 26.5C26.8 26.5 29 28.7 29 31.5V43H19Z"
        fill="url(#homeDoorGrad)"
      />
    </g>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 2. 3D Learn Icon (Purple Graduation Mortarboard + Gold Tassel)
// ─────────────────────────────────────────────────────────────
const Icon3DLearn: React.FC<{ active?: boolean; className?: string }> = ({ active, className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="capTopGrad" x1="24" y1="8" x2="24" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <linearGradient id="capBottomGrad" x1="24" y1="24" x2="24" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
      <linearGradient id="tasselGrad" x1="38" y1="20" x2="42" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <filter id="capShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#7c3aed" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#capShadow)">
      {/* Skullcap / base underneath */}
      <path
        d="M13 25V32C13 36.4 17.9 40 24 40C30.1 40 35 36.4 35 32V25C31.8 27.2 28 28.5 24 28.5C20 28.5 16.2 27.2 13 25Z"
        fill="url(#capBottomGrad)"
      />
      {/* Diamond Mortarboard top */}
      <path
        d="M24 7L44 18L24 29L4 18L24 7Z"
        fill="url(#capTopGrad)"
      />
      {/* Top Bevel Highlight line */}
      <path
        d="M24 8.5L41.5 18L24 27.5L6.5 18L24 8.5Z"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeOpacity="0.45"
      />
      {/* Central button */}
      <circle cx="24" cy="18" r="2.2" fill="#e9d5ff" />
      {/* Tassel cord and brush */}
      <path
        d="M24 18C28 18 38 21 39 26V35"
        stroke="url(#tasselGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="39" cy="36" r="2.2" fill="#f59e0b" />
    </g>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 3. 3D Game Hero Protruding Sphere Orb (Cyan-Blue-Purple Glass)
// ─────────────────────────────────────────────────────────────
const Icon3DGameHero: React.FC<{ active?: boolean }> = ({ active }) => (
  <div className="relative -mt-6 sm:-mt-7 flex flex-col items-center">
    {/* Outer Translucent Glass Halo Ring Collar */}
    <div className="w-[58px] h-[58px] sm:w-[64px] sm:h-[64px] rounded-full p-[3px] bg-white/80 backdrop-blur-xl border-2 border-white/95 shadow-[0_10px_28px_rgba(0,102,255,0.38),0_0_24px_rgba(56,189,248,0.45)] flex items-center justify-center transition-transform active:scale-90 duration-200">
      {/* 3D Glossy Sphere Button */}
      <div
        className="w-full h-full rounded-full relative flex items-center justify-center overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.85),inset_0_-3px_6px_rgba(0,0,0,0.35)]"
        style={{
          background: 'radial-gradient(circle at 35% 28%, #5eead4 0%, #00d2ff 25%, #0066ff 60%, #9333ea 95%)',
        }}
      >
        {/* Top crescent specular gloss highlight */}
        <div
          className="absolute top-1 left-2.5 right-2.5 h-3.5 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)',
            filter: 'blur(0.5px)',
          }}
        />

        {/* Crisp White 3D Game Controller */}
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" fill="currentColor">
          <path d="M7 6H17C19.7614 6 22 8.23858 22 11C22 12.3807 21.4402 13.6307 20.5355 14.5355L18.4142 16.6569C17.6332 17.4379 16.3668 17.4379 15.5858 16.6569L14.7071 15.7782C14.332 15.4031 13.8234 15.1924 13.2929 15.1924H10.7071C10.1766 15.1924 9.66795 15.4031 9.29289 15.7782L8.41421 16.6569C7.63316 17.4379 6.36683 17.4379 5.58579 16.6569L3.46447 14.5355C2.55982 13.6307 2 12.3807 2 11C2 8.23858 4.23858 6 7 6ZM7 9V11H5V12H7V14H8V12H10V11H8V9H7ZM16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10ZM18.5 12C17.9477 12 17.5 12.4477 17.5 13C17.5 13.5523 17.9477 14 18.5 14C19.0523 14 19.5 13.5523 19.5 13C19.5 12.4477 19.0523 12 18.5 12Z" />
        </svg>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// 4. 3D Earn Icon (Golden Briefcase + Stacked Gold Coins)
// ─────────────────────────────────────────────────────────────
const Icon3DEarn: React.FC<{ active?: boolean; className?: string }> = ({ active, className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="earnBagGrad" x1="20" y1="12" x2="20" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="40%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="earnCoinGrad" x1="36" y1="26" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>
      <filter id="earnShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#d97706" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#earnShadow)">
      {/* Handle */}
      <path
        d="M17 14V11C17 9.3 18.3 8 20 8H26C27.7 8 29 9.3 29 11V14"
        stroke="#d97706"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Bag Body */}
      <rect x="7" y="14" width="28" height="26" rx="6" fill="url(#earnBagGrad)" />
      {/* Bag Flap */}
      <path
        d="M7 16C7 14.9 7.9 14 9 14H33C34.1 14 35 14.9 35 16V22C35 24.2 33.2 26 31 26H11C8.8 26 7 24.2 7 22V16Z"
        fill="#fef3c7"
        fillOpacity="0.5"
      />
      {/* Clasp / Lock */}
      <rect x="18.5" y="23" width="5" height="5" rx="1.5" fill="#78350f" />
      {/* 2 Shiny Embossed Gold Coins */}
      <circle cx="37" cy="33" r="7" fill="url(#earnCoinGrad)" stroke="#ffffff" strokeWidth="1" />
      <circle cx="37" cy="33" r="5" stroke="#a16207" strokeWidth="0.8" strokeDasharray="1 1" />
      <text x="37" y="36" fontSize="7" fontWeight="900" fill="#78350f" textAnchor="middle">₹</text>

      <circle cx="37" cy="24" r="5" fill="url(#earnCoinGrad)" stroke="#ffffff" strokeWidth="0.8" opacity="0.95" />
      <text x="37" y="26.5" fontSize="5" fontWeight="900" fill="#78350f" textAnchor="middle">₹</text>
    </g>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 5. 3D Placement Icon (Coral Team + Floating Gold Star)
// ─────────────────────────────────────────────────────────────
const Icon3DPlacement: React.FC<{ active?: boolean; className?: string }> = ({ active, className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="placeLeaderGrad" x1="24" y1="18" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb7185" />
        <stop offset="50%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="placeTeamGrad" x1="24" y1="22" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="60%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#c2410c" />
      </linearGradient>
      <linearGradient id="starGrad" x1="24" y1="4" x2="24" y2="15" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <filter id="placeShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#e11d48" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#placeShadow)">
      {/* Left team member */}
      <circle cx="12" cy="24" r="4.5" fill="url(#placeTeamGrad)" opacity="0.9" />
      <path d="M6 38C6 33.5 9 31 12 31C15 31 18 33.5 18 38V41H6V38Z" fill="url(#placeTeamGrad)" opacity="0.9" />

      {/* Right team member */}
      <circle cx="36" cy="24" r="4.5" fill="url(#placeTeamGrad)" opacity="0.9" />
      <path d="M30 38C30 33.5 33 31 36 31C39 31 42 33.5 42 38V41H30V38Z" fill="url(#placeTeamGrad)" opacity="0.9" />

      {/* Center leader (front) */}
      <circle cx="24" cy="20" r="5.5" fill="url(#placeLeaderGrad)" />
      <path d="M16 38C16 32.5 19.5 29 24 29C28.5 29 32 32.5 32 38V42H16V38Z" fill="url(#placeLeaderGrad)" />

      {/* Gold Star floating on top */}
      <path
        d="M24 4L25.8 8.8L30.9 9.1L27 12.4L28.2 17.3L24 14.7L19.8 17.3L21 12.4L17.1 9.1L22.2 8.8L24 4Z"
        fill="url(#starGrad)"
        stroke="#ffffff"
        strokeWidth="0.8"
      />
    </g>
  </svg>
);

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onSelectTab,
  unreadEarnBadge = false,
}) => {
  const { playClick } = useThemeAccent();

  const handleTabClick = (tab: MobileTab) => {
    playClick?.();
    onSelectTab(tab);
  };

  const isTabActive = (tabId: MobileTab) => {
    if (tabId === 'game') return currentTab === 'game' || currentTab === 'arena';
    if (tabId === 'arena') return currentTab === 'game' || currentTab === 'arena';
    return currentTab === tabId;
  };

  return (
    <div className="fixed bottom-3 left-3 right-3 max-w-md mx-auto z-50 select-none pb-[env(safe-area-inset-bottom,0px)]">
      {/* Ambient Blue Glowing Backlight */}
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-r from-blue-400/25 via-sky-300/35 to-indigo-400/25 blur-xl pointer-events-none" />

      {/* Floating Translucent Capsule (1:1 Exact Match with reference design) */}
      <nav className="relative w-full bg-white/85 backdrop-blur-2xl border-[1.5px] border-white/95 rounded-[32px] px-2 py-2 shadow-[0_16px_40px_-10px_rgba(0,110,255,0.22),0_4px_18px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)]">
        <div className="flex items-center justify-between">
          
          {/* TAB 1: HOME */}
          {(() => {
            const active = isTabActive('home');
            return (
              <button
                type="button"
                onClick={() => handleTabClick('home')}
                className="relative flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer transition-all duration-200 active:scale-95"
              >
                {/* Active Cushion Card or Clean Icon */}
                <div
                  className={`flex flex-col items-center justify-center transition-all duration-200 ${
                    active
                      ? 'bg-white/95 shadow-[0_4px_16px_rgba(37,99,235,0.12),inset_0_1px_2px_rgba(255,255,255,1)] border border-blue-100/70 rounded-2xl py-1 px-3.5 scale-105'
                      : 'py-1 px-2'
                  }`}
                >
                  <Icon3DHome active={active} className="w-7 h-7" />
                  <span
                    className={`text-[11px] mt-0.5 tracking-tight transition-colors ${
                      active ? 'font-black text-blue-600' : 'font-extrabold text-slate-700'
                    }`}
                  >
                    Home
                  </span>
                  {active ? (
                    <div className="w-6 h-[3.5px] rounded-full bg-blue-600 mt-0.5 shadow-xs shadow-blue-500/50" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300/80 mt-1" />
                  )}
                </div>
              </button>
            );
          })()}

          {/* TAB 2: LEARN */}
          {(() => {
            const active = isTabActive('learn');
            return (
              <button
                type="button"
                onClick={() => handleTabClick('learn')}
                className="relative flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer transition-all duration-200 active:scale-95"
              >
                <div
                  className={`flex flex-col items-center justify-center transition-all duration-200 ${
                    active
                      ? 'bg-white/95 shadow-[0_4px_16px_rgba(124,58,237,0.12),inset_0_1px_2px_rgba(255,255,255,1)] border border-purple-100/70 rounded-2xl py-1 px-3.5 scale-105'
                      : 'py-1 px-2'
                  }`}
                >
                  <Icon3DLearn active={active} className="w-7 h-7" />
                  <span
                    className={`text-[11px] mt-0.5 tracking-tight transition-colors ${
                      active ? 'font-black text-purple-600' : 'font-extrabold text-slate-700'
                    }`}
                  >
                    Learn
                  </span>
                  {active ? (
                    <div className="w-6 h-[3.5px] rounded-full bg-purple-600 mt-0.5 shadow-xs shadow-purple-500/50" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300/80 mt-1" />
                  )}
                </div>
              </button>
            );
          })()}

          {/* TAB 3: GAME (HERO PROTRUDING ORB IN CENTER) */}
          {(() => {
            const active = isTabActive('game');
            return (
              <button
                type="button"
                onClick={() => handleTabClick('game')}
                className="relative flex flex-col items-center justify-center flex-1 cursor-pointer transition-all duration-200 active:scale-95"
              >
                <Icon3DGameHero active={active} />
                <span
                  className={`text-[11px] -mt-1 tracking-tight transition-colors ${
                    active ? 'font-black text-blue-600' : 'font-extrabold text-slate-800'
                  }`}
                >
                  Game
                </span>
                {active ? (
                  <div className="w-6 h-[3.5px] rounded-full bg-blue-600 mt-0.5 shadow-xs shadow-blue-500/50" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300/80 mt-1" />
                )}
              </button>
            );
          })()}

          {/* TAB 4: EARN */}
          {(() => {
            const active = isTabActive('earn');
            return (
              <button
                type="button"
                onClick={() => handleTabClick('earn')}
                className="relative flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer transition-all duration-200 active:scale-95"
              >
                <div
                  className={`flex flex-col items-center justify-center transition-all duration-200 ${
                    active
                      ? 'bg-white/95 shadow-[0_4px_16px_rgba(217,119,6,0.12),inset_0_1px_2px_rgba(255,255,255,1)] border border-amber-100/70 rounded-2xl py-1 px-3.5 scale-105'
                      : 'py-1 px-2'
                  }`}
                >
                  <Icon3DEarn active={active} className="w-7 h-7" />
                  <span
                    className={`text-[11px] mt-0.5 tracking-tight transition-colors ${
                      active ? 'font-black text-amber-600' : 'font-extrabold text-slate-700'
                    }`}
                  >
                    Earn
                  </span>
                  {active ? (
                    <div className="w-6 h-[3.5px] rounded-full bg-amber-600 mt-0.5 shadow-xs shadow-amber-500/50" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300/80 mt-1" />
                  )}
                </div>
              </button>
            );
          })()}

          {/* TAB 5: PLACEMENT */}
          {(() => {
            const active = isTabActive('placement');
            return (
              <button
                type="button"
                onClick={() => handleTabClick('placement')}
                className="relative flex flex-col items-center justify-center flex-1 py-0.5 cursor-pointer transition-all duration-200 active:scale-95"
              >
                <div
                  className={`flex flex-col items-center justify-center transition-all duration-200 ${
                    active
                      ? 'bg-white/95 shadow-[0_4px_16px_rgba(225,29,72,0.12),inset_0_1px_2px_rgba(255,255,255,1)] border border-rose-100/70 rounded-2xl py-1 px-3.5 scale-105'
                      : 'py-1 px-2'
                  }`}
                >
                  <Icon3DPlacement active={active} className="w-7 h-7" />
                  <span
                    className={`text-[11px] mt-0.5 tracking-tight transition-colors ${
                      active ? 'font-black text-rose-600' : 'font-extrabold text-slate-700'
                    }`}
                  >
                    Placement
                  </span>
                  {active ? (
                    <div className="w-6 h-[3.5px] rounded-full bg-rose-600 mt-0.5 shadow-xs shadow-rose-500/50" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300/80 mt-1" />
                  )}
                </div>
              </button>
            );
          })()}

        </div>
      </nav>
    </div>
  );
};
