import React from 'react';

/**
 * Mandatory Master Reference Primitives (`What Is Data Analytics?` Handwritten Visual Style)
 *
 * CRITICAL FIXES:
 * - Every decorative SVG has explicit `width` & `height` attributes AND inline `style={{ width, height, flexShrink: 0 }}`
 *   so no decorative icon can EVER expand beyond its 24px–36px bounding box.
 * - Zero invalid fractional Tailwind classes (`w-4.5`, `h-4.5`, `h-5.5` removed).
 * - Section headings use bold handwritten typography (`20px–25px`), natural text wrapping, and horizontal
 *   lavender pill backgrounds (`bg-[#ede6ff] border-[2px] border-[#9d7ec9]`).
 */

export const NoteRibbonBanner: React.FC<{
  title: string;
  subtitle?: string;
  moduleTag?: string;
  pageTag?: string;
  isActive?: boolean;
}> = ({ title, subtitle, moduleTag, isActive = false }) => {
  if (!title && !subtitle) return null;

  return (
    <div className="relative pt-0.5 pb-1 text-center select-none">
      {/* Banner with Left Lavender Flower & Right Rose-Pink Flower + Golden Sparkles */}
      <div className="relative flex items-center justify-center max-w-[760px] mx-auto px-1">
        {/* Left Floral Bouquet & Sparkles (Explicitly bounded 56x76 on mobile, 68x88 on desktop) */}
        <div
          className="hidden sm:block shrink-0 pointer-events-none -mr-3 z-10"
          style={{ width: 64, height: 82, flexShrink: 0 }}
        >
          <svg
            viewBox="0 0 70 95"
            width={64}
            height={82}
            style={{ width: 64, height: 82, display: 'block' }}
            fill="none"
          >
            <path d="M 16 14 Q 16 19 21 19 Q 16 19 16 24 Q 16 19 11 19 Q 16 19 16 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
            <path d="M 42 6 Q 42 10 46 10 Q 42 10 42 14 Q 42 10 38 10 Q 42 10 42 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
            <path d="M 8 38 Q 8 41 11 41 Q 8 41 8 44 Q 8 41 5 41 Q 8 41 8 38 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
            <path d="M 28 90 Q 38 65 38 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 34 68 Q 18 64 20 52 Q 28 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <path d="M 37 54 Q 50 48 48 36 Q 40 43 36 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <g transform="translate(38, 36)">
              <circle cx="0" cy="-11" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle cx="10" cy="-3" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle cx="6" cy="9" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle cx="-6" cy="9" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle cx="-10" cy="-3" r="5.5" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
            </g>
          </svg>
        </div>

        {/* Center 3D Curved Lavender Ribbon Banner */}
        <div className="relative flex-1 max-w-[660px] min-w-0">
          <svg
            viewBox="0 0 600 88"
            className="w-full h-auto drop-shadow-2xs block"
            style={{ maxHeight: 92 }}
            fill="none"
          >
            {/* Left Ribbon Notch Tail */}
            <path
              d="M 45 31 L 8 27 L 22 45 L 8 63 L 45 59 Z"
              fill="#ede6ff"
              stroke="#9d7ec9"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M 45 31 L 60 39 L 45 59 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />

            {/* Right Ribbon Notch Tail */}
            <path
              d="M 555 31 L 592 27 L 578 45 L 592 63 L 555 59 Z"
              fill="#ede6ff"
              stroke="#9d7ec9"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M 555 31 L 540 39 L 555 59 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />

            {/* Main Curved Arc Ribbon Body */}
            <path
              d="M 50 20 Q 300 8 550 20 Q 542 70 550 70 Q 300 82 50 70 Q 58 20 50 20 Z"
              fill={isActive ? '#e3d7ff' : '#ede6ff'}
              stroke={isActive ? '#7c3aed' : '#9d7ec9'}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
          </svg>

          {/* Ribbon Title Text + Left Pastel Heart (26px) + Right 3-Bar Chart Doodle (26px) */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-2.5 px-7 sm:px-11 pointer-events-none">
            <svg
              viewBox="0 0 28 28"
              width={24}
              height={24}
              style={{ width: 24, height: 24, flexShrink: 0 }}
              fill="none"
            >
              <path
                d="M14 24s-9-5.6-9-12.2C5 8.4 7.6 6 10.5 6c1.8 0 3.5 1 3.5 2.4C14 7 15.7 6 17.5 6 20.4 6 23 8.4 23 11.8 23 18.4 14 24 14 24z"
                fill="#c4b5fd"
                stroke="#2a174a"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            <h1
              className={`font-bold text-[#2a174a] tracking-tight leading-tight text-center pointer-events-auto select-text m-0 ${
                title.length > 34
                  ? 'text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] line-clamp-2'
                  : title.length > 26
                  ? 'text-[14px] sm:text-[17px] md:text-[20px] lg:text-[24px] line-clamp-1'
                  : 'text-[15px] sm:text-[19px] md:text-[23px] lg:text-[28px] line-clamp-1'
              }`}
            >
              {title}
            </h1>

            {/* 3-Bar Chart Doodle with Dark Purple Outlines */}
            <svg
              viewBox="0 0 28 26"
              width={24}
              height={22}
              style={{ width: 24, height: 22, flexShrink: 0 }}
              className="hidden sm:block"
              fill="none"
            >
              <rect x="3" y="12" width="5" height="11" rx="1" fill="#7dd3fc" stroke="#2a174a" strokeWidth="1.8" />
              <rect x="11" y="4" width="5" height="19" rx="1" fill="#c084fc" stroke="#2a174a" strokeWidth="1.8" />
              <rect x="19" y="8" width="5" height="15" rx="1" fill="#93c5fd" stroke="#2a174a" strokeWidth="1.8" />
            </svg>
          </div>
        </div>

        {/* Right Floral Bouquet & Sparkles */}
        <div
          className="hidden sm:block shrink-0 pointer-events-none -ml-3 z-10"
          style={{ width: 64, height: 82, flexShrink: 0 }}
        >
          <svg
            viewBox="0 0 70 95"
            width={64}
            height={82}
            style={{ width: 64, height: 82, display: 'block' }}
            fill="none"
          >
            <path d="M 54 14 Q 54 19 49 19 Q 54 19 54 24 Q 54 19 59 19 Q 54 19 54 14 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
            <path d="M 28 6 Q 28 10 24 10 Q 28 10 28 14 Q 28 10 32 10 Q 28 10 28 6 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
            <path d="M 62 38 Q 62 41 59 41 Q 62 41 62 44 Q 62 41 65 41 Q 62 41 62 38 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
            <path d="M 42 90 Q 32 65 32 42" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 36 68 Q 52 64 50 52 Q 42 58 35 63" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <path d="M 33 54 Q 20 48 22 36 Q 30 43 34 50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <g transform="translate(32, 36)">
              <circle cx="0" cy="-11" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              <circle cx="10" cy="-3" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              <circle cx="6" cy="9" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              <circle cx="-6" cy="9" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              <circle cx="-10" cy="-3" r="5.5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>

      {/* Centered Lavender Subtitle Pill (Exact Reference Image Match) */}
      {(subtitle || moduleTag) && (
        <div className="mt-1 flex items-center justify-center">
          <div
            className={`inline-flex items-center gap-2 px-5 py-1 rounded-full text-[14px] sm:text-[17px] font-bold transition-colors select-text ${
              isActive
                ? 'bg-[#6D28D9] text-white border-[2px] border-[#5B21B6] shadow-xs'
                : 'bg-[#ede6ff] text-[#2a174a] border-[2px] border-[#b8a2e8] shadow-2xs'
            }`}
          >
            <span>{subtitle || moduleTag}</span>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Hand-drawn Rounded Lavender Section Heading Pill
 * - Strictly 24px decorative icon (`width={24} height={24}`)
 * - Bold handwritten heading (`17px–21px`) with natural wrapping and full horizontal width
 */
export const SectionPill: React.FC<{ label: string; isActive?: boolean; indexNum?: number }> = ({
  label,
  isActive = false,
  indexNum = 1,
}) => {
  const l = label.toLowerCase();
  const iconKind: 'star' | 'heart' | 'bulb' =
    /example|real-life|real life|pillar|industry|application|stage|type|step/i.test(l)
      ? 'star'
      : /why|important|benefit|need|truth|matter/i.test(l)
      ? 'heart'
      : /takeaway|remember|summary|formula|rule|code/i.test(l)
      ? 'bulb'
      : indexNum % 2 === 1
      ? 'star'
      : 'heart';

  return (
    <div className="w-full flex items-center justify-start">
      <div
        className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[16px] sm:text-[19px] font-bold leading-snug transition-colors duration-200 max-w-full ${
          isActive
            ? 'bg-[#6D28D9] text-white border-[2px] border-[#4C1D95] shadow-xs'
            : 'bg-[#ede6ff] text-[#2a174a] border-[2px] border-[#9d7ec9] shadow-2xs'
        }`}
      >
        {iconKind === 'star' && (
          <svg
            viewBox="0 0 24 24"
            width={22}
            height={22}
            style={{ width: 22, height: 22, flexShrink: 0 }}
            fill="none"
          >
            <path
              d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z"
              fill="#fde047"
              stroke="#2a174a"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {iconKind === 'heart' && (
          <svg
            viewBox="0 0 24 24"
            width={22}
            height={22}
            style={{ width: 22, height: 22, flexShrink: 0 }}
            fill="none"
          >
            <path
              d="M12 20.5s-7.5-4.7-7.5-10.2C4.5 7.4 6.7 5.5 9.1 5.5c1.5 0 2.9.8 2.9 2 0-1.2 1.4-2 2.9-2 2.4 0 4.6 1.9 4.6 4.8 0 5.5-7.5 10.2-7.5 10.2z"
              fill="#c4b5fd"
              stroke="#2a174a"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {iconKind === 'bulb' && (
          <svg
            viewBox="0 0 24 24"
            width={22}
            height={22}
            style={{ width: 22, height: 22, flexShrink: 0 }}
            fill="none"
          >
            <path
              d="M8.5 10a3.5 3.5 0 117 0c0 1.8-1.3 2.8-1.7 4.2h-3.6C9.8 12.8 8.5 11.8 8.5 10z"
              fill="#fde047"
              stroke="#2a174a"
              strokeWidth="1.8"
            />
            <rect x="10" y="14.2" width="4" height="2.4" rx="0.6" fill="#c4b5fd" stroke="#2a174a" strokeWidth="1.5" />
          </svg>
        )}
        <span className="min-w-0 break-words">{label}</span>
      </div>
    </div>
  );
};

/**
 * Bottom "Key Takeaway" Equation Bar matching the bottom of the master reference image
 */
export const KeyTakeawayFormulaBar: React.FC<{
  topicTitle: string;
  pills: string[];
  isHi?: boolean;
}> = ({ topicTitle, pills }) => {
  const cleanTopic =
    topicTitle
      .replace(/\?$/, '')
      .replace(/^What Is\s+/i, '')
      .replace(/^Why Do We Need\s+/i, '')
      .trim() || 'Data Science';
  const items =
    pills.length > 0 ? pills.slice(0, 4) : ['Raw Data', 'Clean & Analyze', 'Insights', 'Decisions'];

  return (
    <div className="relative flex items-center justify-center gap-2 pt-0.5">
      <span className="hidden sm:inline-block text-[#9d7ec9] text-sm font-black select-none tracking-tighter shrink-0">
        \ \ \
      </span>

      <div className="flex-1 rounded-[20px] bg-[#FFFDF9] border-[2px] border-[#9d7ec9] px-3.5 py-2.5 shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
        {/* Left Lavender Pill with Glowing Bulb (22px explicit dimension) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ede6ff] border-[1.8px] border-[#9d7ec9] text-[#2a174a] text-[14px] sm:text-[15px] font-bold shrink-0">
          <svg
            viewBox="0 0 24 24"
            width={22}
            height={22}
            style={{ width: 22, height: 22, flexShrink: 0 }}
            fill="none"
          >
            <path
              d="M8.5 10a3.5 3.5 0 117 0c0 1.8-1.3 2.8-1.7 4.2h-3.6C9.8 12.8 8.5 11.8 8.5 10z"
              fill="#fde047"
              stroke="#2a174a"
              strokeWidth="1.8"
            />
            <rect x="10" y="14.2" width="4" height="2.4" rx="0.6" fill="#c4b5fd" stroke="#2a174a" strokeWidth="1.5" />
          </svg>
          <span>Key Takeaway</span>
        </div>

        {/* Formula Equation with Lavender Keyword Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-[14px] sm:text-[15.5px] font-bold text-[#2a174a]">
          <span>{cleanTopic}</span>
          <span className="text-[#7c3aed] font-black">=</span>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="px-2.5 py-0.5 rounded-full bg-[#ede6ff] border border-[#b8a2e8] text-[#2a174a] font-bold">
                {item}
              </span>
              {idx < items.length - 1 && <span className="text-[#7c3aed] font-black">+</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <span className="hidden sm:inline-block text-[#9d7ec9] text-sm font-black select-none tracking-tighter shrink-0">
        / / /
      </span>
    </div>
  );
};

export const SqlEditorBox: React.FC<{
  label?: string;
  children: React.ReactNode;
}> = ({ label = 'CODE NOTEBOOK', children }) => (
  <div className="rounded-2xl bg-[#FFFDF9] text-[#2a174a] overflow-hidden shadow-2xs border-[2px] border-[#9d7ec9]">
    <div className="flex items-center gap-2 px-4 py-2 bg-[#ede6ff] border-b-[2px] border-[#b8a2e8]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#f472b6] border border-[#2a174a]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#fde047] border border-[#2a174a]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#86efac] border border-[#2a174a]" />
      <span className="ml-1.5 text-[11px] font-bold tracking-wider uppercase text-[#2a174a]">
        {label}
      </span>
    </div>
    <pre className="p-3.5 text-[13px] sm:text-[14px] leading-relaxed font-mono overflow-x-auto m-0 bg-[#FAF7FF] text-[#2a174a]">
      <code>{children}</code>
    </pre>
  </div>
);

export const NotePageFooter: React.FC<{ page: string }> = ({ page }) => (
  <div className="pt-1.5 border-t border-[#e2d6f8] flex items-center justify-between text-[11px] font-bold text-[#6e5694] tracking-wider uppercase">
    <span>✨ HANDWRITTEN VISUAL LEARNING NOTES • READ + SEE + UNDERSTAND</span>
    <span className="px-2.5 py-0.5 rounded-full bg-[#ede6ff] border border-[#b8a2e8] text-[#2a174a]">
      Page {page}
    </span>
  </div>
);
