import React from 'react';

// ==========================================
// 1. BRAND & PROGRAM TECHNOLOGY ICONS
// ==========================================

export const IconPython: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M23.6 2c-11.4 0-10.7 4.9-10.7 4.9l.01 5.1h10.9v1.6H8.5S2 12.9 2 24.3s5.7 11.2 5.7 11.2h3.4v-4.8s-.2-5.7 5.6-5.7h9.7s5.4.1 5.4-5.3V8.8S32.6 2 23.6 2zM19.1 5.8a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z"
      fill="url(#pyBlue)"
    />
    <path
      d="M24.4 46c11.4 0 10.7-4.9 10.7-4.9l-.01-5.1H24.2v-1.6h15.3s6.5.7 6.5-10.7-5.7-11.2-5.7-11.2h-3.4v4.8s.2 5.7-5.6 5.7h-9.7s-5.4-.1-5.4 5.3v10.9s-.8 6.8 8.2 6.8zm4.5-3.8a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z"
      fill="url(#pyYellow)"
    />
    <defs>
      <linearGradient id="pyBlue" x1="2" y1="2" x2="32" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="46" y1="46" x2="16" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
  </svg>
);

export const IconSQL: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="sqlCyl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    {/* Bottom Cylinder */}
    <path d="M4 23 C4 27.5 32 27.5 32 23 V27 C32 31.5 4 31.5 4 27 Z" fill="url(#sqlCyl)" opacity="0.9" />
    {/* Middle Cylinder */}
    <path d="M4 15 C4 19.5 32 19.5 32 15 V19 C32 23.5 4 23.5 4 19 Z" fill="url(#sqlCyl)" />
    {/* Top Cylinder Base */}
    <path d="M4 7 C4 11.5 32 11.5 32 7 V11 C32 15.5 4 15.5 4 11 Z" fill="url(#sqlCyl)" />
    {/* Top Cap */}
    <ellipse cx="18" cy="7" rx="14" ry="4" fill="#7DD3FC" />
  </svg>
);

export const IconExcel: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="xlBack" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#107C41" />
        <stop offset="100%" stopColor="#0B5A2F" />
      </linearGradient>
      <linearGradient id="xlFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#185C37" />
        <stop offset="100%" stopColor="#21A366" />
      </linearGradient>
    </defs>
    {/* Sheet Back Grid */}
    <rect x="8" y="4" width="24" height="28" rx="3" fill="url(#xlBack)" />
    <path d="M16 10 H28 M16 16 H28 M16 22 H28 M16 26 H28" stroke="#33C481" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 6 V30" stroke="#33C481" strokeWidth="1.5" />
    {/* Green Folded Front Plate with White X */}
    <rect x="4" y="9" width="16" height="18" rx="2.5" fill="url(#xlFront)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
    <path d="M8 14 L16 22 M16 14 L8 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconPowerBI: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pbiGold1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="pbiGold2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>
    {/* Bar 1 (Shortest) */}
    <rect x="5" y="19" width="7" height="13" rx="2" fill="url(#pbiGold1)" />
    {/* Bar 2 (Medium) */}
    <rect x="14" y="12" width="7" height="20" rx="2" fill="url(#pbiGold2)" />
    {/* Bar 3 (Tallest) */}
    <rect x="23" y="4" width="7" height="28" rx="2" fill="url(#pbiGold1)" />
  </svg>
);

export const IconGenAI: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="36" height="36" rx="8" fill="#10A37F" />
    {/* OpenAI Vortex / Knot Icon */}
    <path
      d="M26.4 15.6c-.3-1.6-1.4-2.8-2.9-3.3v-1.7c0-2-1.6-3.6-3.6-3.6h-.5c-.3 0-.6.1-.8.3l-5.6 3.2c-.3.2-.5.5-.5.8v4.9c-.8.3-1.5.8-2 1.5-.7 1-1 2.3-.7 3.5.3 1.6 1.4 2.8 2.9 3.3v1.7c0 2 1.6 3.6 3.6 3.6h.5c.3 0 .6-.1.8-.3l5.6-3.2c.3-.2.5-.5.5-.8v-4.9c.8-.3 1.5-.8 2-1.5.7-1 1-2.3.7-3.5zm-8.8-6.6c.9 0 1.6.7 1.6 1.6v3.2l-3.2 1.8-2.6-1.5 4.2-5.1zm-7 8.3c.4-.7 1-1.2 1.8-1.4l2.7 1.6v3.7l-4.5 2.6v-6.5zm7.3 10.7c-.9 0-1.6-.7-1.6-1.6v-3.2l3.2-1.8 2.6 1.5-4.2 5.1zm6.2-4.1l-2.7-1.6v-3.7l4.5-2.6v6.5c-.4.7-1 1.2-1.8 1.4z"
      fill="white"
    />
  </svg>
);

export const IconProjectsBriefcase: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="projPurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#7E22CE" />
      </linearGradient>
    </defs>
    {/* Handle */}
    <path d="M13 10 V6 C13 4.9 13.9 4 15 4 H21 C22.1 4 23 4.9 23 6 V10" stroke="#9333EA" strokeWidth="2.5" />
    {/* Case Body */}
    <rect x="4" y="9" width="28" height="22" rx="4" fill="url(#projPurple)" />
    {/* Belt / Latches */}
    <path d="M4 18 H32" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
    <rect x="15" y="16" width="6" height="5" rx="1.5" fill="white" />
  </svg>
);

export const IconCaseStudies: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="caseBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="26" height="26" rx="4" fill="url(#caseBlue)" />
    {/* Upward Line Chart inside */}
    <path d="M9 23 L15 17 L20 20 L27 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="27" cy="12" r="2" fill="white" />
  </svg>
);

export const IconMentorship: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="mentorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#7E22CE" />
      </linearGradient>
    </defs>
    {/* Center Mentor */}
    <circle cx="18" cy="11" r="5" fill="url(#mentorGrad)" />
    <path d="M9 28 C9 23 13 20 18 20 C23 20 27 23 27 28" fill="url(#mentorGrad)" />
    {/* Left Peer */}
    <circle cx="9" cy="14" r="3.5" fill="#A855F7" opacity="0.8" />
    <path d="M3 26 C3 22.5 6 20.5 9 20.5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
    {/* Right Peer */}
    <circle cx="27" cy="14" r="3.5" fill="#A855F7" opacity="0.8" />
    <path d="M27 20.5 C30 20.5 33 22.5 33 26" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ==========================================
// 2. TOOLS USED IN TOP COMPANIES ICONS
// ==========================================

export const IconGoogleAnalytics: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6 24 C6 22.3 7.3 21 9 21 C10.7 21 12 22.3 12 24 V27 H6 V24 Z" fill="#F59E0B" />
    <path d="M13 16 C13 14.3 14.3 13 16 13 C17.7 13 19 14.3 19 16 V27 H13 V16 Z" fill="#F59E0B" />
    <path d="M20 9 C20 7.3 21.3 6 23 6 C24.7 6 26 7.3 26 9 V27 H20 V9 Z" fill="#F59E0B" />
  </svg>
);

export const IconTableau: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Center Red Plus */}
    <path d="M15 11 H17 V21 H15 Z M11 15 H21 V17 H11 Z" fill="#E8762D" />
    {/* Top Orange Plus */}
    <path d="M15 3 H17 V9 H15 Z M12 5 H20 V7 H12 Z" fill="#4B6382" />
    {/* Bottom Blue Plus */}
    <path d="M15 23 H17 V29 H15 Z M12 25 H20 V27 H12 Z" fill="#52799E" />
    {/* Left Teal Plus */}
    <path d="M3 15 H9 V17 H3 Z M5 12 H7 V20 H5 Z" fill="#1F4570" />
    {/* Right Gold Plus */}
    <path d="M23 15 H29 V17 H23 Z M25 12 H27 V20 H25 Z" fill="#DF6526" />
  </svg>
);

export const IconGitHub: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.43 9.58 13.28.7.13.96-.3.96-.67v-2.35c-3.9.85-4.72-1.88-4.72-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.41.1 2.15 1.45 2.15 1.45 1.25 2.15 3.28 1.53 4.08 1.17.13-.91.49-1.53.89-1.88-3.11-.35-6.39-1.56-6.39-6.93 0-1.53.55-2.78 1.44-3.76-.14-.35-.62-1.78.14-3.71 0 0 1.18-.38 3.85 1.44 1.12-.31 2.32-.47 3.51-.47s2.39.16 3.51.47c2.67-1.82 3.85-1.44 3.85-1.44.76 1.93.28 3.36.14 3.71.9 1 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.41 6.92.51.44.96 1.3.96 2.62v3.89c0 .38.25.81.96.67C25.99 27.43 30 26.19 30 16c0-7.73-6.27-14-14-14z"
      fill="white"
    />
  </svg>
);

// ==========================================
// 3. WHY FUTURE.AI 8 RICH BADGE ICONS
// ==========================================

export const IconWhyAIBrain: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-sky-400/15 to-blue-500/20 ring-1 ring-cyan-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left Brain Hemisphere */}
      <path
        d="M16 6 C12 6 8 8 8 13 C8 15 9 17 8 19 C7 21 8 24 11 25 C13 25.5 15 25 16 26 Z"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinecap="round"
        fill="#38BDF8"
        fillOpacity="0.2"
      />
      {/* Right Digital Circuit Node Hemisphere */}
      <path d="M16 6 V26 M16 11 H23 M16 16 H25 M16 21 H22" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      <circle cx="23" cy="11" r="2" fill="#00D2B4" />
      <circle cx="25" cy="16" r="2" fill="#00D2B4" />
      <circle cx="22" cy="21" r="2" fill="#00D2B4" />
    </svg>
  </div>
);

export const IconWhyCurriculum: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400/20 via-teal-400/15 to-green-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 3 Isometric Diamond Layers */}
      <path d="M16 5 L26 10 L16 15 L6 10 Z" fill="#34D399" stroke="#059669" strokeWidth="1.5" />
      <path d="M6 14 L16 19 L26 14" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 18 L16 23 L26 18" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 22 L16 27 L26 22" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

export const IconWhyProjects: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400/20 via-blue-400/15 to-indigo-500/20 ring-1 ring-sky-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11 10 L5 16 L11 22" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 10 L27 16 L21 22" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 8 L14 24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

export const IconWhyMentorship: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-400/20 via-emerald-400/15 to-teal-500/20 ring-1 ring-teal-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="11" r="5" stroke="#0D9488" strokeWidth="2.5" fill="#2DD4BF" fillOpacity="0.3" />
      <path d="M7 26 C7 21.5 11 19 16 19 C21 19 25 21.5 25 26" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </div>
);

export const IconWhyCareer: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-400/15 to-blue-600/20 ring-1 ring-blue-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 9 V6 C12 5 13 4 14 4 H18 C19 4 20 5 20 6 V9" stroke="#1D4ED8" strokeWidth="2" />
      <rect x="5" y="9" width="22" height="18" rx="3.5" fill="#1D4ED8" fillOpacity="0.2" stroke="#1D4ED8" strokeWidth="2" />
      <path d="M5 16 H27" stroke="#1D4ED8" strokeWidth="1.5" />
      <rect x="14" y="14" width="4" height="4" rx="1" fill="#1D4ED8" />
    </svg>
  </div>
);

export const IconWhyInternship: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-400/15 to-blue-500/20 ring-1 ring-cyan-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="7" width="20" height="20" rx="3" stroke="#0284C7" strokeWidth="2" fill="#0284C7" fillOpacity="0.15" />
      <path d="M12 5 H20 V8 H12 Z" fill="#0284C7" />
      <path d="M10 19 L14 15 L18 18 L22 13" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const IconWhyCommunity: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500/20 via-violet-400/15 to-purple-600/20 ring-1 ring-purple-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="11" r="4" fill="#7C3AED" />
      <path d="M9 25 C9 21 12 19 16 19 C20 19 23 21 23 25" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="8" cy="13" r="3" fill="#A78BFA" />
      <path d="M3 24 C3 21 5.5 19.5 8 19.5" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="13" r="3" fill="#A78BFA" />
      <path d="M24 19.5 C26.5 19.5 29 21 29 24" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

export const IconWhyLifetime: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 22 }) => (
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-purple-400/15 to-fuchsia-600/20 ring-1 ring-fuchsia-400/30 flex items-center justify-center shadow-xs shrink-0">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="8" width="20" height="18" rx="6" stroke="#9333EA" strokeWidth="2" fill="#C084FC" fillOpacity="0.2" />
      <circle cx="16" cy="17" r="4" stroke="#9333EA" strokeWidth="2" />
      <path d="M16 17 L18 19" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// ==========================================
// 4. CAREER PATHWAY STEP ICONS (01-04)
// ==========================================

export const IconStepLearn: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#059669" strokeWidth="2" fill="#34D399" fillOpacity="0.25" />
    <path d="M12 7l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="#059669" />
  </svg>
);

export const IconStepProjects: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="#0284C7" strokeWidth="2" fill="#38BDF8" fillOpacity="0.2" />
    <path d="M8 10l-3 2 3 2M16 10l3 2-3 2M13 8l-2 8" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconStepMentorship: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="7" r="4" stroke="#7C3AED" strokeWidth="2" fill="#C084FC" fillOpacity="0.3" />
    <path d="M5 21v-2a5 5 0 0 1 10 0v2" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="11" r="2.5" stroke="#7C3AED" strokeWidth="1.5" />
  </svg>
);

export const IconStepPlacement: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="7" width="18" height="14" rx="3" stroke="#0D9488" strokeWidth="2" fill="#2DD4BF" fillOpacity="0.25" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#0D9488" strokeWidth="2" />
    <path d="M9 14l2 2 4-4" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

