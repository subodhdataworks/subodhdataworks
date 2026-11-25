import React from 'react';

export interface EditorialCourseCoverProps {
  courseId: string;
  isLiveCourse?: boolean;
  liveBadgeText?: string;
  topBadgeText?: string;
}

interface CourseDesignSpec {
  monogram: string;
  categoryTag: string;
  bgGradient: string;
  accentRing: string;
  orbBg: string;
  orbText: string;
  techLabel: string;
  glowColor: string;
}

const COURSE_SPECS: Record<string, CourseDesignSpec> = {
  'data-analyst-genai': {
    monogram: 'DA',
    categoryTag: 'FLAGSHIP ANALYTICS',
    bgGradient: 'from-[#0A162B] via-[#0F2347] to-[#1E1B4B]',
    accentRing: 'border-sky-400/35',
    orbBg: 'bg-gradient-to-br from-sky-500/20 to-blue-600/30 border-sky-400/50',
    orbText: 'text-sky-300',
    techLabel: 'PYTHON • SQL • POWER BI • EXCEL',
    glowColor: 'rgba(56, 189, 248, 0.22)',
  },
  'data-science-agentic-ai': {
    monogram: 'DS',
    categoryTag: 'AI FIRST • AGENTS',
    bgGradient: 'from-[#14082E] via-[#240F4E] to-[#1E1B4B]',
    accentRing: 'border-purple-400/40',
    orbBg: 'bg-gradient-to-br from-purple-500/25 to-pink-600/30 border-purple-400/60',
    orbText: 'text-purple-300',
    techLabel: 'PYTORCH • LANGCHAIN • VECTOR DB • RAG',
    glowColor: 'rgba(168, 85, 247, 0.26)',
  },
  'ml-engineering': {
    monogram: 'ML',
    categoryTag: 'PRODUCTION MLOPS',
    bgGradient: 'from-[#1C0B08] via-[#361611] to-[#1E1B4B]',
    accentRing: 'border-amber-400/40',
    orbBg: 'bg-gradient-to-br from-amber-500/25 to-orange-600/30 border-amber-400/60',
    orbText: 'text-amber-300',
    techLabel: 'FASTAPI • DOCKER • K8S • PIPELINES',
    glowColor: 'rgba(251, 146, 60, 0.24)',
  },
  'ai-engineering': {
    monogram: 'AI',
    categoryTag: 'ENTERPRISE LLMS',
    bgGradient: 'from-[#061C14] via-[#0C3828] to-[#122A3E]',
    accentRing: 'border-emerald-400/40',
    orbBg: 'bg-gradient-to-br from-emerald-500/25 to-teal-600/30 border-emerald-400/60',
    orbText: 'text-emerald-300',
    techLabel: 'OPENAI • RAG • MULTI-AGENT • LANGCHAIN',
    glowColor: 'rgba(52, 211, 153, 0.25)',
  },
  'ai-tools-prompt': {
    monogram: 'PRO',
    categoryTag: '10X PRODUCTIVITY',
    bgGradient: 'from-[#0A1333] via-[#142358] to-[#1E1B4B]',
    accentRing: 'border-indigo-400/40',
    orbBg: 'bg-gradient-to-br from-indigo-500/25 to-blue-600/30 border-indigo-400/60',
    orbText: 'text-indigo-300',
    techLabel: 'CHATGPT-4o • CLAUDE • MIDJOURNEY • CURSOR',
    glowColor: 'rgba(99, 102, 241, 0.25)',
  },
  'ms-office-copilot': {
    monogram: '365',
    categoryTag: 'MICROSOFT CERTIFIED',
    bgGradient: 'from-[#071F15] via-[#0E3D29] to-[#142D3D]',
    accentRing: 'border-lime-400/40',
    orbBg: 'bg-gradient-to-br from-lime-500/25 to-emerald-600/30 border-lime-400/60',
    orbText: 'text-lime-300',
    techLabel: 'EXCEL • POWER QUERY • COPILOT • DAX',
    glowColor: 'rgba(74, 222, 128, 0.24)',
  },
  'full-stack-web-dev': {
    monogram: 'FS',
    categoryTag: 'WEB ARCHITECTURE',
    bgGradient: 'from-[#061C24] via-[#0D3442] to-[#19243C]',
    accentRing: 'border-cyan-400/40',
    orbBg: 'bg-gradient-to-br from-cyan-500/25 to-teal-600/30 border-cyan-400/60',
    orbText: 'text-cyan-300',
    techLabel: 'REACT • NODE.JS • POSTGRESQL • DOCKER',
    glowColor: 'rgba(34, 211, 238, 0.24)',
  },
  'ai-website-dev': {
    monogram: 'WEB',
    categoryTag: 'LIVE INSTRUCTOR CLASS',
    bgGradient: 'from-[#211400] via-[#3D2503] to-[#26132D]',
    accentRing: 'border-amber-400/45',
    orbBg: 'bg-gradient-to-br from-amber-500/30 to-orange-600/35 border-amber-400/65',
    orbText: 'text-amber-200',
    techLabel: 'CORPORATE SITES • E-COMMERCE • SAAS',
    glowColor: 'rgba(245, 158, 11, 0.28)',
  },
  'ai-android-dev': {
    monogram: 'APP',
    categoryTag: 'LIVE INSTRUCTOR CLASS',
    bgGradient: 'from-[#041926] via-[#09324D] to-[#1B1D3D]',
    accentRing: 'border-sky-400/45',
    orbBg: 'bg-gradient-to-br from-sky-500/30 to-cyan-600/35 border-sky-400/65',
    orbText: 'text-sky-200',
    techLabel: 'MOBILE APPS • FIREBASE • PLAY STORE',
    glowColor: 'rgba(14, 165, 233, 0.28)',
  },
  'ai-video-creation': {
    monogram: '4K',
    categoryTag: 'LIVE INSTRUCTOR CLASS',
    bgGradient: 'from-[#260515] via-[#450C28] to-[#240A2E]',
    accentRing: 'border-rose-400/45',
    orbBg: 'bg-gradient-to-br from-rose-500/30 to-pink-600/35 border-rose-400/65',
    orbText: 'text-rose-200',
    techLabel: 'CINEMATIC ADS • REELS • AI VOICES',
    glowColor: 'rgba(244, 63, 94, 0.28)',
  },
};

export const EditorialCourseCover: React.FC<EditorialCourseCoverProps> = React.memo(({
  courseId,
  isLiveCourse = false,
  liveBadgeText = 'LIVE CLASSES',
  topBadgeText,
}) => {
  const spec = COURSE_SPECS[courseId] || COURSE_SPECS['data-analyst-genai'];

  return (
    <div className={`relative w-full h-[120px] sm:h-[124px] overflow-hidden bg-gradient-to-br ${spec.bgGradient} select-none shrink-0`}>
      {/* 1. Subtle High-Tech Editorial Grid Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`tech-grid-${courseId}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#tech-grid-${courseId})`} />
      </svg>

      {/* 2. Soft Ambient Glowing Radial Spotlight */}
      <div
        className="absolute -right-8 -top-8 w-44 h-44 rounded-full pointer-events-none blur-2xl"
        style={{ background: spec.glowColor }}
        aria-hidden="true"
      />

      {/* 3. Concentric Orbital Rings (Reference Visual Notes Image 1 Aesthetic) */}
      <div
        className={`absolute -right-7 -top-7 w-36 h-36 rounded-full border ${spec.accentRing} pointer-events-none`}
        aria-hidden="true"
      />
      <div
        className={`absolute -right-3 -top-3 w-28 h-28 rounded-full border ${spec.accentRing} pointer-events-none`}
        aria-hidden="true"
      />
      <div
        className={`absolute right-1 top-1 w-20 h-20 rounded-full border ${spec.accentRing} pointer-events-none`}
        aria-hidden="true"
      />

      {/* 4. Glowing Neon Monogram Orb perched cleanly in the orbital ring center */}
      <div
        className={`absolute top-3.5 right-3.5 w-12 h-12 rounded-full border-2 ${spec.orbBg} shadow-sm backdrop-blur-xs flex items-center justify-center pointer-events-none z-10`}
        style={{ boxShadow: `0 0 18px ${spec.glowColor}` }}
      >
        <span className={`text-[14px] font-black tracking-wider ${spec.orbText}`}>
          {spec.monogram}
        </span>
      </div>

      {/* 5. Top-Left Badge: LIVE Pill or Topic Badge */}
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 max-w-[65%]">
        {isLiveCourse ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[9px] font-bold tracking-wider uppercase shadow-xs border border-red-400/40">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            <span>{liveBadgeText}</span>
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-[9px] font-semibold tracking-wider uppercase backdrop-blur-xs truncate">
            {topBadgeText ? topBadgeText.toUpperCase() : spec.categoryTag}
          </span>
        )}
      </div>

      {/* 6. Bottom Micro Tech Strip in Clean Editorial Typography */}
      <div className="absolute bottom-2 left-2.5 right-18 z-10">
        <span className="block text-[8.5px] font-mono font-semibold tracking-wider text-white/60 truncate uppercase">
          {spec.techLabel}
        </span>
      </div>

      {/* 7. Subtle bottom dark fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
});
