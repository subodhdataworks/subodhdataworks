import React from 'react';

export type ConceptIllustrationTheme =
  | 'foundations'
  | 'python'
  | 'excel'
  | 'sql'
  | 'powerbi'
  | 'genai';

/**
 * Smart Topic-Matched Vector Illustration Engine
 * Automatically picks a unique, relevant, colorful illustration based on the exact topic/section title
 * across all 259 topics (shop/orders, cleaning, joins, Excel, Python, SQL, Power BI, GenAI, charts, decisions, roles, trends).
 */
export const SmartTopicIllustration: React.FC<{
  title: string;
  theme: ConceptIllustrationTheme;
  compact?: boolean;
}> = ({ title, theme, compact = false }) => {
  const t = title.toLowerCase();
  const sizeCls = compact
    ? 'w-[110px] sm:w-[126px] h-[86px] sm:h-[96px] shrink-0'
    : 'w-[136px] sm:w-[164px] h-[98px] sm:h-[114px] shrink-0';

  // 1. Online Shop / Store / Retail / Orders / Product / Sales
  if (/shop|store|order|retail|e-?commerce|cart|product|customer|stock|inventory/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#F5F3FF" />
        {/* Store awning */}
        <path d="M 32 34 L 128 34 L 134 48 L 26 48 Z" fill="#7C3AED" />
        <rect x="38" y="34" width="16" height="14" fill="#A78BFA" />
        <rect x="72" y="34" width="16" height="14" fill="#A78BFA" />
        <rect x="106" y="34" width="16" height="14" fill="#A78BFA" />
        {/* Store body */}
        <rect x="34" y="48" width="92" height="44" rx="6" fill="#FFFFFF" stroke="#C4B5FD" strokeWidth="2" />
        {/* Shopping cart inside */}
        <path d="M 58 60 L 66 60 L 72 78 L 98 78 L 103 65 L 69 65" stroke="#6D28D9" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="75" cy="84" r="3" fill="#4C1D95" />
        <circle cx="94" cy="84" r="3" fill="#4C1D95" />
        {/* Mini growth badge */}
        <circle cx="128" cy="26" r="12" fill="#34D399" />
        <path d="M 122 28 L 126 24 L 130 26 L 134 21" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 2. Data Cleaning / Missing Values / Duplicates / Errors / Nulls
  if (/clean|missing|duplicate|error|null|dirty|trim|scrub|quality|fix/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#ECFEFF" />
        {/* Funnel */}
        <path d="M 34 26 L 126 26 L 94 62 L 94 88 L 66 94 L 66 62 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Messy dots entering */}
        <circle cx="52" cy="19" r="5" fill="#FB7185" />
        <circle cx="76" cy="17" r="4.5" fill="#FBBF24" />
        <circle cx="102" cy="19" r="5" fill="#A78BFA" />
        {/* Clean sparkles inside & exiting */}
        <path d="M 80 38 L 83 45 L 90 48 L 83 51 L 80 58 L 77 51 L 70 48 L 77 45 Z" fill="#10B981" />
        <circle cx="124" cy="78" r="13" fill="#10B981" />
        <path d="M 118 78 L 122.5 82.5 L 131 73.5" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 3. SQL Joins / Schema / Relationships / Modeling / Merge
  if (/join|merge|schema|model|relation|key|star|lookup|xlookup|vlookup/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#F5F3FF" />
        {/* Left table */}
        <rect x="20" y="24" width="46" height="62" rx="8" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2" />
        <rect x="20" y="24" width="46" height="16" rx="6" fill="#7C3AED" />
        <rect x="27" y="47" width="32" height="5" rx="2.5" fill="#DDD6FE" />
        <rect x="27" y="58" width="24" height="5" rx="2.5" fill="#A78BFA" />
        <rect x="27" y="69" width="30" height="5" rx="2.5" fill="#DDD6FE" />
        {/* Link bridge */}
        <path d="M 66 56 L 94 56" stroke="#10B981" strokeWidth="3" strokeDasharray="4 3" />
        <circle cx="80" cy="56" r="10" fill="#10B981" />
        <path d="M 75 56 L 85 56 M 80 51 L 80 61" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        {/* Right table */}
        <rect x="94" y="24" width="46" height="62" rx="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
        <rect x="94" y="24" width="46" height="16" rx="6" fill="#0284C7" />
        <rect x="101" y="47" width="32" height="5" rx="2.5" fill="#BAE6FD" />
        <rect x="101" y="58" width="28" height="5" rx="2.5" fill="#38BDF8" />
        <rect x="101" y="69" width="22" height="5" rx="2.5" fill="#BAE6FD" />
      </svg>
    );
  }

  // 4. Business Decisions / Guesswork vs Evidence / Strategy / KPI
  if (/business|decision|guess|evidence|kpi|metric|roi|why|need|goal|target/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#ECFDF5" />
        {/* Target rings */}
        <circle cx="52" cy="58" r="28" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="3" />
        <circle cx="52" cy="58" r="18" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2.5" />
        <circle cx="52" cy="58" r="8" fill="#F43F5E" />
        {/* Rising green bars */}
        <rect x="92" y="66" width="11" height="22" rx="3" fill="#6EE7B7" />
        <rect x="107" y="52" width="11" height="36" rx="3" fill="#10B981" />
        <rect x="122" y="34" width="11" height="54" rx="3" fill="#059669" />
        <path d="M 92 54 L 112 38 L 132 22" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        <path d="M 124 22 L 133 22 L 133 31" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 5. Excel / Spreadsheet / Formula / Pivot / Cell
  if (theme === 'excel' || /excel|sheet|cell|formula|pivot|sum|workbook/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#ECFDF5" />
        {/* Worksheet grid */}
        <rect x="24" y="22" width="112" height="68" rx="10" fill="#FFFFFF" stroke="#107C41" strokeWidth="2.5" />
        <rect x="24" y="22" width="112" height="18" rx="8" fill="#107C41" />
        <text x="36" y="35" fill="#FFFFFF" fontSize="10" fontWeight="800">fx  =SUM(B2:B5)</text>
        <line x1="24" y1="56" x2="136" y2="56" stroke="#D1FAE5" strokeWidth="2" />
        <line x1="24" y1="72" x2="136" y2="72" stroke="#D1FAE5" strokeWidth="2" />
        <line x1="62" y1="40" x2="62" y2="90" stroke="#D1FAE5" strokeWidth="2" />
        <line x1="100" y1="40" x2="100" y2="90" stroke="#D1FAE5" strokeWidth="2" />
        {/* Active highlighted cell */}
        <rect x="62" y="56" width="38" height="16" fill="#BBF7D0" stroke="#107C41" strokeWidth="2" />
      </svg>
    );
  }

  // 6. Python / Code / Pandas / NumPy / Variable / Function
  if (theme === 'python' || /python|code|pandas|numpy|dataframe|loop|function|variable|list|dict/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#EEF2FF" />
        {/* Dark code window */}
        <rect x="22" y="20" width="116" height="72" rx="10" fill="#1E1B3A" stroke="#6366F1" strokeWidth="2" />
        <circle cx="34" cy="31" r="3" fill="#FB7185" />
        <circle cx="44" cy="31" r="3" fill="#FBBF24" />
        <circle cx="54" cy="31" r="3" fill="#34D399" />
        <rect x="32" y="44" width="36" height="6" rx="3" fill="#38BDF8" />
        <rect x="74" y="44" width="44" height="6" rx="3" fill="#A78BFA" />
        <rect x="42" y="57" width="54" height="6" rx="3" fill="#FBBF24" />
        <rect x="42" y="70" width="68" height="6" rx="3" fill="#34D399" />
      </svg>
    );
  }

  // 7. SQL / Database / Query / Table
  if (theme === 'sql' || /sql|database|query|select|where|group|having|cte|window/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#F5F3FF" />
        {/* Database cylinder */}
        <ellipse cx="64" cy="34" rx="30" ry="10" fill="#7C3AED" />
        <path d="M 34 34 L 34 78 C 34 84 94 84 94 78 L 94 34" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.5" />
        <ellipse cx="64" cy="56" rx="30" ry="9" fill="none" stroke="#A78BFA" strokeWidth="2" />
        <ellipse cx="64" cy="34" rx="30" ry="10" fill="#8B5CF6" />
        {/* Magnifying glass */}
        <circle cx="110" cy="60" r="18" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3.5" />
        <line x1="123" y1="73" x2="136" y2="86" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" />
        <text x="110" y="64" textAnchor="middle" fill="#0284C7" fontSize="11" fontWeight="800">SQL</text>
      </svg>
    );
  }

  // 8. Power BI / Dashboard / DAX / Visuals / Chart
  if (theme === 'powerbi' || /power bi|dax|dashboard|visual|chart|plot|graph|slicer/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#FFFBEB" />
        <rect x="20" y="20" width="120" height="72" rx="10" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2.5" />
        {/* Bars */}
        <rect x="34" y="58" width="12" height="22" rx="3" fill="#FCD34D" />
        <rect x="50" y="44" width="12" height="36" rx="3" fill="#F59E0B" />
        <rect x="66" y="32" width="12" height="48" rx="3" fill="#D97706" />
        {/* Donut chart */}
        <circle cx="110" cy="56" r="18" stroke="#EDE9FE" strokeWidth="7" />
        <path d="M 110 38 A 18 18 0 0 1 128 56" stroke="#7C3AED" strokeWidth="7" strokeLinecap="round" />
        <path d="M 128 56 A 18 18 0 0 1 102 72" stroke="#10B981" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }

  // 9. GenAI / Prompt / LLM / Copilot / Automation
  if (theme === 'genai' || /genai|ai|prompt|llm|copilot|gpt|chat|automat/i.test(t)) {
    return (
      <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
        <rect x="8" y="8" width="144" height="96" rx="18" fill="#FAF5FF" />
        <rect x="26" y="22" width="108" height="68" rx="16" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2.5" />
        {/* Central AI sparkle */}
        <path d="M 80 32 L 86 48 L 102 54 L 86 60 L 80 76 L 74 60 L 58 54 L 74 48 Z" fill="#7C3AED" />
        <path d="M 112 30 L 114.5 36.5 L 121 39 L 114.5 41.5 L 112 48 L 109.5 41.5 L 103 39 L 109.5 36.5 Z" fill="#F59E0B" />
        <circle cx="46" cy="40" r="6" fill="#38BDF8" />
        <circle cx="46" cy="70" r="5" fill="#34D399" />
      </svg>
    );
  }

  // 10. Default (Foundations / Analytics Laptop with Bar + Pie Chart + Growth Arrow — matches reference!)
  return (
    <svg viewBox="0 0 160 112" className={sizeCls} fill="none" aria-hidden="true">
      <rect x="8" y="8" width="144" height="96" rx="18" fill="#F5F3FF" />
      {/* Laptop screen */}
      <rect x="26" y="20" width="108" height="62" rx="8" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="2.5" />
      {/* Bar chart */}
      <rect x="38" y="56" width="10" height="18" rx="2" fill="#A78BFA" />
      <rect x="52" y="46" width="10" height="28" rx="2" fill="#7C3AED" />
      <rect x="66" y="38" width="10" height="36" rx="2" fill="#38BDF8" />
      {/* Pie chart */}
      <circle cx="106" cy="52" r="16" fill="#EDE9FE" />
      <path d="M 106 52 L 106 36 A 16 16 0 0 1 122 52 Z" fill="#38BDF8" />
      <path d="M 106 52 L 122 52 A 16 16 0 0 1 98 66 Z" fill="#FBBF24" />
      <path d="M 106 52 L 98 66 A 16 16 0 0 1 106 36 Z" fill="#7C3AED" />
      {/* Upward growth arrow */}
      <path d="M 38 48 L 66 30 L 96 24 L 122 14" stroke="#6D28D9" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M 114 13 L 123 14 L 120 22" stroke="#6D28D9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Laptop base */}
      <path d="M 16 84 L 144 84 L 138 92 L 22 92 Z" fill="#6D28D9" />
    </svg>
  );
};

/**
 * Advance Studio-Grade Dynamic Video Thumbnail tailored to each exact topic & track.
 * Replaces the generic static poster across all 345 topics.
 */
export const DynamicTopicVideoThumbnail: React.FC<{
  title: string;
  theme: ConceptIllustrationTheme;
  trackLabel: string;
  onPlay: () => void;
}> = ({ title, theme, trackLabel, onPlay }) => {
  const palette: Record<
    ConceptIllustrationTheme,
    { bg: string; glow1: string; glow2: string; badge: string; accent: string }
  > = {
    foundations: {
      bg: 'from-[#1E1042] via-[#3B177C] to-[#172554]',
      glow1: 'bg-purple-500/35',
      glow2: 'bg-sky-400/25',
      badge: 'bg-purple-500/25 border-purple-300/40 text-purple-100',
      accent: 'from-[#A855F7] to-[#38BDF8]',
    },
    python: {
      bg: 'from-[#0F172A] via-[#1E1B4B] to-[#0C4A6E]',
      glow1: 'bg-sky-500/35',
      glow2: 'bg-indigo-400/25',
      badge: 'bg-sky-500/25 border-sky-300/40 text-sky-100',
      accent: 'from-[#38BDF8] to-[#818CF8]',
    },
    excel: {
      bg: 'from-[#052E16] via-[#065F46] to-[#0F172A]',
      glow1: 'bg-emerald-500/35',
      glow2: 'bg-teal-400/25',
      badge: 'bg-emerald-500/25 border-emerald-300/40 text-emerald-100',
      accent: 'from-[#34D399] to-[#2DD4BF]',
    },
    sql: {
      bg: 'from-[#1E1B4B] via-[#312E81] to-[#1E1042]',
      glow1: 'bg-violet-500/35',
      glow2: 'bg-fuchsia-400/25',
      badge: 'bg-violet-500/25 border-violet-300/40 text-violet-100',
      accent: 'from-[#C084FC] to-[#38BDF8]',
    },
    powerbi: {
      bg: 'from-[#291704] via-[#78350F] to-[#1E1B4B]',
      glow1: 'bg-amber-400/35',
      glow2: 'bg-yellow-300/25',
      badge: 'bg-amber-400/25 border-amber-300/40 text-amber-100',
      accent: 'from-[#FBBF24] to-[#F59E0B]',
    },
    genai: {
      bg: 'from-[#1E1042] via-[#4C1D95] to-[#1D4ED8]',
      glow1: 'bg-fuchsia-500/35',
      glow2: 'bg-cyan-400/25',
      badge: 'bg-fuchsia-500/25 border-fuchsia-300/40 text-fuchsia-100',
      accent: 'from-[#E879F9] to-[#38BDF8]',
    },
  };

  const p = palette[theme] || palette.foundations;

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play Video Lesson: ${title}`}
      className={`group absolute inset-0 z-10 w-full h-full bg-gradient-to-br ${p.bg} text-left overflow-hidden cursor-pointer flex items-center justify-between px-4 py-3.5 focus:outline-none`}
    >
      {/* Studio Ambient Lighting Orbs */}
      <div className={`absolute -top-10 -left-10 w-36 h-36 rounded-full blur-2xl pointer-events-none ${p.glow1}`} />
      <div className={`absolute -bottom-12 -right-8 w-40 h-40 rounded-full blur-2xl pointer-events-none ${p.glow2}`} />

      {/* Subtle Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Left Zone: Brand Pill + Bold Topic Title + Play CTA */}
      <div className="relative z-10 flex-1 min-w-0 pr-2.5 flex flex-col justify-between h-full">
        <div className="flex items-center gap-1.5">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-extrabold uppercase tracking-wider border ${p.badge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{trackLabel}</span>
          </span>
        </div>

        <div className="my-auto py-1">
          <h4 className="text-[13.5px] sm:text-[15px] font-extrabold text-white leading-snug line-clamp-2 drop-shadow-xs m-0">
            {title}
          </h4>
          <div className={`mt-1.5 h-[2.5px] w-14 rounded-full bg-gradient-to-r ${p.accent}`} />
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#1E1B4B] text-[10.5px] font-extrabold shadow-md group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 16 16" className="w-3 h-3 fill-[#6D28D9]" aria-hidden="true">
              <path d="M4 2.5 L13.5 8 L4 13.5 Z" />
            </svg>
            <span>Watch Lesson</span>
          </span>
          <span className="text-[10px] font-semibold text-white/75">FUTURE IT</span>
        </div>
      </div>

      {/* Right Zone: Crisp Topic-Specific Visual Graphic inside Glass Card */}
      <div className="relative z-10 shrink-0 rounded-2xl bg-white/95 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.28)] border border-white/60 group-hover:scale-[1.03] transition-transform">
        <SmartTopicIllustration title={title} theme={theme} compact />
      </div>
    </button>
  );
};
