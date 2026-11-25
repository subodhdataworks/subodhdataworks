import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Sparkles,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import {
  NoteRibbonBanner,
  SectionPill,
  NotePageFooter,
  KeyTakeawayFormulaBar,
} from './SqlVisualNotesPrimitives';
import { HandwrittenDoodle, HandwrittenArrow } from './HandwrittenDoodleEngine';
import type { SectionRectInfo } from './PdfVisualNotesViewer';
import { resolveVisualHinglish, resolveHinglishHeading } from './visualNotesHinglishEngine';
import { resolveSectionCue, splitIntoSentences } from '../mentor/voiceSyncEngine';

export type PastelTone = 'lavender' | 'sky' | 'green' | 'amber' | 'pink';

export type VisualNoteBlock =
  | {
      type: 'flow';
      items: { title: string; bodyEn: string; bodyHi: string; tone: PastelTone }[];
    }
  | {
      type: 'table';
      headers: string[];
      rows: string[][];
      noteEn?: string;
      noteHi?: string;
    }
  | {
      type: 'sql';
      label?: string;
      code: string;
      output?: string;
      isError?: boolean;
      captionEn?: string;
      captionHi?: string;
    }
  | {
      type: 'compare';
      items: { title: string; bodyEn: string; bodyHi: string; tone: PastelTone; imageUrl?: string }[];
    }
  | {
      type: 'bullets';
      tone: 'amber' | 'lavender' | 'green';
      items: { en: string; hi: string }[];
    }
  | {
      type: 'note';
      tone?: PastelTone;
      bodyEn: string;
      bodyHi: string;
    };

export interface VisualNoteSection {
  pill: string;
  blocks: VisualNoteBlock[];
}

export interface VisualNotePageSpec {
  moduleTag: string;
  pageTag: string;
  footerPage: string;
  title: string;
  subtitle: string;
  intro?: {
    icon?: 'database' | 'table';
    titleEn?: string;
    titleHi?: string;
    bodyEn: string;
    bodyHi: string;
  };
  sections: VisualNoteSection[];
}

export interface StructuredVisualNoteTopic {
  module: string;
  moduleTitle: string;
  topic: string;
  pageCount: number;
  sampleDataNotice: string;
  pages: VisualNotePageSpec[];
}

export const HANDWRITTEN_DOODLE_MANIFEST: Record<string, string> = {};

const TONE_CLASSES: Record<PastelTone, string> = {
  lavender: 'bg-[#FAF7FF] border-[#b8a2e8]',
  sky: 'bg-[#F5FBFF] border-[#93c5fd]',
  green: 'bg-[#F4FDF7] border-[#86efac]',
  amber: 'bg-[#FFFDF4] border-[#fcd34d]',
  pink: 'bg-[#FFF7FA] border-[#f9a8d4]',
};

/**
 * Renders **bold** spans as soft lavender technical keyword pills — exact reference image style!
 */
function renderRichText(text: string, isActive: boolean = false): React.ReactNode {
  const cleaned = text.replace(/`([^`]+)`/g, '$1');
  const parts = cleaned.split(/(\*\*[\s\S]+?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <span
          key={i}
          className={`inline-block px-2.5 py-0.5 rounded-full font-bold mx-0.5 text-[0.95em] leading-snug transition-colors duration-200 ${
            isActive
              ? 'bg-[#6D28D9] text-white shadow-2xs'
              : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
          }`}
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function renderSentenceSyncedText(
  text: string,
  isActive: boolean,
  progress: number
): React.ReactNode {
  if (!isActive || progress <= 0) {
    return renderRichText(text, isActive);
  }
  const sentences = splitIntoSentences(text);
  if (sentences.length <= 1) {
    return (
      <span className="bg-[#FEF08A]/75 text-[#2a174a] rounded px-0.5 transition-colors duration-200">
        {renderRichText(text, true)}
      </span>
    );
  }
  const activeIdx = Math.min(
    sentences.length - 1,
    Math.floor(Math.min(0.9999, Math.max(0, progress)) * sentences.length)
  );
  return sentences.map((sentence, sIdx) => {
    const isCurrent = sIdx === activeIdx;
    return (
      <React.Fragment key={sIdx}>
        <span
          className={`rounded px-0.5 transition-colors duration-200 ${
            isCurrent ? 'bg-[#FEF08A]/80 text-[#2a174a]' : 'bg-transparent'
          }`}
        >
          {renderRichText(sentence, isCurrent)}
        </span>
        {sIdx < sentences.length - 1 ? ' ' : ''}
      </React.Fragment>
    );
  });
}

const CODE_KEYWORD_RE =
  /\b(SELECT|DISTINCT|FROM|WHERE|GROUP BY|HAVING|FILTER|CASE|WHEN|THEN|ELSE|END|AND|OR|NOT|IN|BETWEEN|LIKE|ILIKE|ORDER BY|ASC|DESC|NULLS LAST|NULLS FIRST|LIMIT|OFFSET|TOP|FETCH FIRST|ROWS ONLY|IS NULL|IS NOT NULL|NULL|COALESCE|NULLIF|ROUND|COUNT|SUM|AVG|MIN|MAX|AS|DATE|TIMESTAMP|INNER JOIN|LEFT JOIN|RIGHT JOIN|FULL OUTER JOIN|FULL JOIN|CROSS JOIN|JOIN|ON|USING|EXISTS|UNION ALL|UNION|INTERSECT|EXCEPT|WITH|RECURSIVE|OVER|PARTITION BY|ROW_NUMBER|DENSE_RANK|RANK|LAG|LEAD|ROWS BETWEEN|UNBOUNDED PRECEDING|PRECEDING|FOLLOWING|CURRENT ROW|DATE_TRUNC|EXTRACT|LOWER|UPPER|TRIM|CONCAT|SUBSTRING|LENGTH|REPLACE|CAST|EXPLAIN|ANALYZE|CALCULATE|COUNTROWS|DISTINCTCOUNT|DIVIDE|SWITCH|IF|SUMX|ALL|RELATED|def|return|import|as|for|while|if|elif|else|in|print|True|False|None|len|range|pd|np|plt)\b/g;

function highlightCodeLine(line: string): React.ReactNode {
  const tokens: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  CODE_KEYWORD_RE.lastIndex = 0;
  while ((match = CODE_KEYWORD_RE.exec(line)) !== null) {
    if (match.index > lastIdx) {
      tokens.push(line.slice(lastIdx, match.index));
    }
    tokens.push(
      <span key={match.index} className="text-[#6D28D9] font-extrabold">
        {match[0]}
      </span>
    );
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < line.length) {
    tokens.push(line.slice(lastIdx));
  }
  return tokens;
}

const InteractiveCodeBlock: React.FC<{
  label: string;
  code: string;
  output?: string;
  isError?: boolean;
  caption?: string;
  activeLineIndex?: number;
  highlightCaption?: boolean;
}> = ({
  label,
  code,
  output,
  isError = false,
  caption,
  activeLineIndex = -1,
  highlightCaption = false,
}) => {
  const [highlighted, setHighlighted] = useState(false);
  const lines = code.split('\n');

  return (
    <div
      className={`rounded-2xl border-[2px] bg-[#FFFDF9] p-3 space-y-2 transition-colors duration-200 ${
        highlighted || activeLineIndex >= 0 || highlightCaption
          ? 'border-[#7C3AED] shadow-xs'
          : 'border-[#b8a2e8]'
      }`}
    >
      <div className="rounded-xl bg-[#FAF7FF] text-[#2a174a] overflow-hidden shadow-2xs border-[2px] border-[#9d7ec9]">
        <div className="flex items-center justify-between gap-2 px-3.5 py-1.5 bg-[#ede6ff] border-b-[2px] border-[#b8a2e8]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f472b6] border border-[#2a174a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#fde047] border border-[#2a174a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#86efac] border border-[#2a174a]" />
            <span className="ml-1.5 text-[11px] font-bold tracking-wider uppercase text-[#2a174a]">
              {label}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setHighlighted((prev) => !prev)}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#ede6ff] hover:bg-[#ddd0fe] text-[#2a174a] border border-[#9d7ec9] transition-colors cursor-pointer"
          >
            {highlighted ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 fill-[#2a174a]" />
                <span>Highlight</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-3 text-[13px] sm:text-[13.5px] leading-relaxed font-mono overflow-x-auto m-0 bg-[#FFFDF9] text-[#2a174a]">
          <code>
            {lines.map((ln, lIdx) => {
              const isLineSynced = activeLineIndex === lIdx;
              return (
                <div
                  key={lIdx}
                  className={`px-2 -mx-2 rounded transition-colors duration-200 border-l-2 ${
                    isLineSynced
                      ? 'bg-[#FEF08A]/75 border-[#7C3AED]'
                      : highlighted
                      ? 'bg-[#ede6ff]/60 border-transparent'
                      : 'border-transparent hover:bg-[#ede6ff]/30'
                  }`}
                >
                  <span
                    className={`inline-block w-5 select-none text-[11px] mr-2 ${
                      isLineSynced ? 'text-[#6D28D9] font-extrabold' : 'text-[#8b73b0]'
                    }`}
                  >
                    {lIdx + 1}
                  </span>
                  {highlightCodeLine(ln)}
                </div>
              );
            })}
          </code>
        </pre>
        {output !== undefined && (
          <div
            className={`border-t-[2px] px-3.5 py-2 font-mono text-[12.5px] sm:text-[13px] leading-relaxed ${
              isError
                ? 'bg-[#FFF1F2] border-rose-300 text-rose-900'
                : 'bg-[#F0FDF4] border-emerald-300 text-emerald-900'
            }`}
          >
            <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider mb-0.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>{isError ? 'Error Output (Demo)' : '✔ Verified Output'}</span>
            </div>
            <pre className="m-0 whitespace-pre-wrap break-words font-mono font-semibold">{output}</pre>
          </div>
        )}
      </div>

      {caption && (
        <div
          className={`text-[14px] text-[#2a174a] font-semibold m-0 leading-relaxed rounded-xl px-2.5 py-1.5 transition-colors duration-200 ${
            highlightCaption
              ? 'bg-[#FEF08A]/75 border border-[#FACC15]'
              : highlighted
              ? 'bg-[#FAF5FF] border border-[#DDD6FE]'
              : ''
          }`}
        >
          {renderRichText(caption, highlightCaption)}
        </div>
      )}
    </div>
  );
};

function findSpokenItemIndex(items: { title: string }[], liveTypedText: string): number {
  if (!liveTypedText || !items.length) return -1;
  const spokenLower = liveTypedText.toLowerCase();
  for (let i = items.length - 1; i >= 0; i--) {
    const rawTitle = items[i].title.trim().toLowerCase();
    const strippedTitle = rawTitle
      .replace(/^\d+[\.\)]\s*/, '')
      .replace(/\s*\(.*?\)\s*/g, '')
      .trim();
    if (
      (rawTitle.length >= 2 && spokenLower.includes(rawTitle)) ||
      (strippedTitle.length >= 2 && spokenLower.includes(strippedTitle))
    ) {
      return i;
    }
  }
  return -1;
}

function deriveTakeawayPills(page: VisualNotePageSpec): string[] {
  const pills: string[] = [];
  for (const sec of page.sections) {
    for (const b of sec.blocks) {
      if (b.type === 'flow') {
        for (const it of b.items) {
          const clean = it.title.replace(/^\d+[\.\)]\s*/, '').trim();
          if (clean && !pills.includes(clean)) pills.push(clean);
          if (pills.length >= 4) return pills;
        }
      }
      if (b.type === 'compare') {
        for (const it of b.items) {
          const clean = it.title.replace(/^\d+[\.\)]\s*/, '').split('(')[0].trim();
          if (clean && clean.length <= 28 && !pills.includes(clean)) pills.push(clean);
          if (pills.length >= 4) return pills;
        }
      }
    }
  }
  if (pills.length >= 2) return pills.slice(0, 4);
  return ['Raw Data', 'Clean & Analyze', 'Insights', 'Decisions'];
}

/**
 * Determines whether a section MUST span both columns (`full`) or can pair side-by-side (`half`)
 * matching the reference image where "Real-Life Examples" and "Why Is It Important?" sit side-by-side.
 */
function isSectionInherentlyFullWidth(sec: VisualNoteSection): boolean {
  for (const b of sec.blocks) {
    if (b.type === 'flow' || b.type === 'table' || b.type === 'sql') return true;
  }
  return false;
}

function computeSectionSpanMap(sections: VisualNoteSection[]): boolean[] {
  const spansFull = sections.map((s) => isSectionInherentlyFullWidth(s));
  // Pair consecutive half-width candidates; if an odd one is left alone, let it span full width so no empty grid cell appears
  let i = 0;
  while (i < spansFull.length) {
    if (spansFull[i]) {
      i++;
      continue;
    }
    if (i + 1 < spansFull.length && !spansFull[i + 1]) {
      // i and i+1 form a side-by-side 2-column pair!
      i += 2;
    } else {
      // Unpaired compact section spans full width
      spansFull[i] = true;
      i++;
    }
  }
  return spansFull;
}

export const StructuredVisualNotesSheet: React.FC<{
  spec: StructuredVisualNoteTopic;
  lang: 'en' | 'hi';
  activeSectionId?: string | null;
  speechProgress?: number;
  liveTypedText?: string;
  isMentorSpeaking?: boolean;
  onSectionRectChange?: (rect: SectionRectInfo) => void;
  onScrollSettled?: () => void;
}> = ({
  spec,
  lang,
  activeSectionId,
  speechProgress = 0,
  liveTypedText = '',
  isMentorSpeaking = false,
  onSectionRectChange,
  onScrollSettled,
}) => {
  const isHi = lang === 'hi';
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const manualScrollUntilRef = useRef<number>(0);

  useEffect(() => {
    const scrollParent = containerRef.current?.closest('.overflow-y-auto') as HTMLElement | null;
    if (!scrollParent) return;
    const markManualScroll = () => {
      manualScrollUntilRef.current = Date.now() + 4500;
    };
    scrollParent.addEventListener('wheel', markManualScroll, { passive: true });
    scrollParent.addEventListener('touchmove', markManualScroll, { passive: true });
    return () => {
      scrollParent.removeEventListener('wheel', markManualScroll);
      scrollParent.removeEventListener('touchmove', markManualScroll);
    };
  }, []);

  useEffect(() => {
    if (!activeSectionId || !containerRef.current) return;
    const targetEl = containerRef.current.querySelector<HTMLElement>(
      `[data-mentor-section="${activeSectionId}"]`
    );
    if (!targetEl) return;

    const emitRect = () => {
      const r = targetEl.getBoundingClientRect();
      onSectionRectChange?.({
        id: activeSectionId,
        top: r.top,
        height: r.height,
        bottom: r.bottom,
        left: r.left,
        right: r.right,
        width: r.width,
        centerX: r.left + r.width / 2,
        centerY: r.top + r.height / 2,
      });
    };

    const scrollParent = containerRef.current.closest('.overflow-y-auto') as HTMLElement | null;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (scrollParent && Date.now() > manualScrollUntilRef.current) {
      const parentRect = scrollParent.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const isComfortablyVisible =
        targetRect.top >= parentRect.top + 36 &&
        targetRect.bottom <= parentRect.bottom - 56;

      if (!isComfortablyVisible) {
        const relativeTop = targetRect.top - parentRect.top + scrollParent.scrollTop;
        const desiredTop = Math.max(
          0,
          relativeTop - Math.max(48, (parentRect.height - targetRect.height) / 2.4)
        );
        scrollParent.scrollTo({
          top: desiredTop,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      }
    }

    emitRect();

    const tMid = window.setTimeout(emitRect, 220);
    const tDone = window.setTimeout(() => {
      emitRect();
      onScrollSettled?.();
    }, 460);

    let rafId = 0;
    const handleScrollSync = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(emitRect);
    };
    const scrollTarget = scrollParent || window;
    scrollTarget.addEventListener('scroll', handleScrollSync, { passive: true });

    return () => {
      window.clearTimeout(tMid);
      window.clearTimeout(tDone);
      if (rafId) cancelAnimationFrame(rafId);
      scrollTarget.removeEventListener('scroll', handleScrollSync);
    };
  }, [activeSectionId, onSectionRectChange, onScrollSettled]);

  let runningIdx = 0;
  const pageSectionMaps = spec.pages.map((page) => {
    const introId = page.intro ? `sec-${runningIdx++}` : null;
    const sectionIds = page.sections.map(() => `sec-${runningIdx++}`);
    return { introId, sectionIds };
  });

  const txt = (en: string, hi?: string) => (isHi ? resolveVisualHinglish(en, hi) : en);
  const headingTxt = (label: string) => (isHi ? resolveHinglishHeading(label) : label);

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily:
          "'Comic Neue', 'Fredoka', 'Kalam', 'Quicksand', 'Plus Jakarta Sans', cursive, sans-serif",
      }}
      className="space-y-5 text-[#2a174a] antialiased sm:pl-[88px]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&family=Kalam:wght@400;700&display=swap');
        @keyframes vnActiveCardGlow {
          0%, 100% {
            box-shadow:
              0 0 0 2.5px rgba(124, 58, 237, 0.45),
              0 6px 20px rgba(139, 92, 246, 0.16);
          }
          50% {
            box-shadow:
              0 0 0 3.5px rgba(168, 85, 247, 0.6),
              0 8px 24px rgba(236, 72, 153, 0.20);
          }
        }
        @keyframes vnActiveStepGlow {
          0%, 100% {
            box-shadow:
              0 0 0 2.5px rgba(124, 58, 237, 0.55),
              0 4px 14px rgba(139, 92, 246, 0.20);
          }
          50% {
            box-shadow:
              0 0 0 3.5px rgba(192, 132, 252, 0.72),
              0 6px 18px rgba(244, 114, 182, 0.25);
          }
        }
        .vn-active-card-glow {
          animation: vnActiveCardGlow 2.8s ease-in-out infinite;
        }
        .vn-active-step-glow {
          animation: vnActiveStepGlow 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .vn-active-card-glow, .vn-active-step-glow {
            animation: none;
          }
        }
      `}</style>

      {spec.pages.map((page, pageIdx) => {
        const { introId, sectionIds } = pageSectionMaps[pageIdx];
        const isIntroActive = Boolean(introId && activeSectionId === introId);
        const takeawayPills = deriveTakeawayPills(page);
        const sectionSpanFull = computeSectionSpanMap(page.sections);

        return (
          <section
            key={pageIdx}
            data-mentor-section={`page-${pageIdx + 1}`}
            className="rounded-[26px] border-[2px] border-[#b8a2e8] bg-[#FBF9F5] p-3.5 sm:p-5 shadow-[0_4px_18px_rgba(109,40,217,0.05)] space-y-3.5"
            style={{
              backgroundImage:
                'radial-gradient(rgba(157, 126, 201, 0.12) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {/* ── 1. PAGE TOP CURVED LAVENDER RIBBON BANNER + SUBTITLE PILL + RADIATING DEFINITION ── */}
            <div
              data-mentor-section={introId || undefined}
              className={`relative rounded-[20px] px-2 py-1.5 space-y-2 transition-colors duration-200 ${
                isIntroActive ? 'bg-[#F5EEFF]/80 vn-active-card-glow' : ''
              }`}
            >
              {isIntroActive && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#6D28D9] text-white text-[11px] font-bold shadow-xs pointer-events-none whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                  <span>✨ AI Mentor Explaining</span>
                </div>
              )}

              <NoteRibbonBanner
                title={page.title}
                subtitle={headingTxt(page.subtitle || spec.topic)}
                moduleTag={page.moduleTag}
                pageTag={page.pageTag}
                isActive={isIntroActive}
              />

              {page.intro && (
                <div className="flex items-center justify-center gap-2 max-w-3xl mx-auto px-2">
                  <span className="hidden sm:inline-block text-[#9d7ec9] text-sm font-black select-none tracking-tighter shrink-0">
                    \ \ \
                  </span>

                  <p className="text-[14.5px] sm:text-[16px] text-[#2a174a] leading-[1.58] font-semibold text-center m-0">
                    {renderSentenceSyncedText(
                      txt(page.intro.bodyEn, page.intro.bodyHi),
                      isIntroActive,
                      isIntroActive ? speechProgress : 0
                    )}
                  </p>

                  <span className="hidden sm:inline-block text-[#9d7ec9] text-sm font-black select-none tracking-tighter shrink-0">
                    / / /
                  </span>
                </div>
              )}

              {isIntroActive && liveTypedText && (
                <div className="max-w-3xl mx-auto rounded-xl bg-[#FAF6FF] border-[2px] border-[#b8a2e8] px-3.5 py-2 shadow-2xs flex flex-col justify-start gap-1">
                  <div className="flex items-center justify-between gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ede6ff] border border-[#b8a2e8] text-[#2a174a] text-[11px] font-bold">
                      <Sparkles className="w-3 h-3 text-[#7c3aed]" />
                      <span>{isHi ? 'AI Teacher (Live Hindi Classroom)' : 'AI Teacher (Live English Classroom)'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-[#d8b4fe] text-[#6D28D9] text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block animate-ping" />
                      <span>Live Explanation</span>
                    </span>
                  </div>
                  <p className="text-[13px] text-[#2a174a] font-semibold leading-snug line-clamp-2 m-0">
                    <span>{liveTypedText}</span>
                    {isMentorSpeaking && (
                      <span
                        className="inline-block w-[2px] h-3.5 bg-[#6D28D9] ml-0.5 align-middle animate-pulse"
                        aria-hidden="true"
                      />
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* ── 2. SECTIONS GRID — FULL-WIDTH PROCESS FLOWS & SIDE-BY-SIDE 2-COLUMN CARDS ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-stretch">
              {page.sections.map((section, sIdx) => {
                const secId = sectionIds[sIdx];
                const isSecActive = activeSectionId === secId;
                const activeCue = isSecActive ? resolveSectionCue(section, speechProgress) : null;
                const isFullSpan = sectionSpanFull[sIdx];

                // If a section is ONLY a single `flow` block, render the flow container directly without redundant double-boxing
                const isPureFlowSection =
                  section.blocks.length === 1 && section.blocks[0].type === 'flow';

                return (
                  <div
                    key={sIdx}
                    data-mentor-section={secId}
                    className={`relative rounded-[22px] border-[2px] p-3.5 sm:p-4 space-y-2.5 flex flex-col justify-between transition-colors duration-200 ${
                      isFullSpan ? 'lg:col-span-2' : 'lg:col-span-1'
                    } ${
                      isSecActive
                        ? 'border-[#7C3AED] bg-[#FAF5FF] vn-active-card-glow'
                        : 'border-[#b8a2e8] bg-[#FFFDF9] shadow-2xs hover:border-[#9d7ec9]'
                    }`}
                  >
                    {isSecActive && (
                      <div className="absolute -top-3 left-5 z-20 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#6D28D9] text-white text-[10.5px] font-bold shadow-xs pointer-events-none whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                        <span>✨ AI Mentor Explaining</span>
                      </div>
                    )}

                    {!isPureFlowSection && (
                      <SectionPill
                        label={headingTxt(section.pill)}
                        isActive={isSecActive}
                        indexNum={
                          spec.pages
                            .slice(0, pageIdx)
                            .reduce((acc, p) => acc + p.sections.length, 0) +
                          sIdx +
                          1
                        }
                      />
                    )}

                    <div className="space-y-2.5 flex-1 flex flex-col justify-center">
                      {section.blocks.map((block, bIdx) => {
                        const isBlockCue = Boolean(activeCue && activeCue.blockIndex === bIdx);

                        // ── A. HORIZONTAL STEP-BY-STEP DOODLE FLOW PIPELINE (Reference Image Center Box) ──
                        if (block.type === 'flow') {
                          const spokenMatchIdx = isSecActive
                            ? findSpokenItemIndex(block.items, liveTypedText)
                            : -1;
                          const activeStepIndex =
                            spokenMatchIdx >= 0
                              ? spokenMatchIdx
                              : isBlockCue && activeCue
                              ? Math.min(block.items.length - 1, Math.max(0, activeCue.itemIndex))
                              : isSecActive && bIdx === 0
                              ? 0
                              : -1;
                          const activeStepItem =
                            activeStepIndex >= 0 ? block.items[activeStepIndex] : null;

                          return (
                            <div key={bIdx} className="space-y-2.5">
                              <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch sm:items-center justify-center sm:justify-between gap-1.5">
                                {block.items.map((item, iIdx) => {
                                  const isItemCurrent = activeStepIndex === iIdx;
                                  const spokenLower = liveTypedText.toLowerCase();
                                  const titlePos = isItemCurrent
                                    ? spokenLower.lastIndexOf(item.title.trim().toLowerCase())
                                    : -1;
                                  const isDescPhase =
                                    isItemCurrent &&
                                    ((titlePos >= 0 &&
                                      liveTypedText.length > titlePos + item.title.length + 6) ||
                                      activeCue?.phase === 'description');
                                  const isMutedSibling = activeStepIndex >= 0 && !isItemCurrent;

                                  return (
                                    <React.Fragment key={iIdx}>
                                      <div
                                        className={`group relative flex-1 flex flex-col items-center text-center gap-1 p-2 rounded-2xl transition-all duration-200 ${
                                          isItemCurrent
                                            ? 'bg-[#F3E8FF] border-[2px] border-[#7C3AED] vn-active-step-glow'
                                            : isMutedSibling
                                            ? 'opacity-75'
                                            : 'hover:bg-[#FAF6FF]'
                                        }`}
                                      >
                                        <HandwrittenDoodle
                                          title={item.title}
                                          body={item.bodyEn}
                                          fallbackIndex={iIdx + sIdx * 5}
                                          size="lg"
                                          isActive={isItemCurrent}
                                        />

                                        <div
                                          className={`px-3 py-0.5 rounded-full text-[13.5px] sm:text-[14.5px] font-bold border transition-colors ${
                                            isItemCurrent
                                              ? 'bg-[#6D28D9] text-white border-[#5B21B6]'
                                              : 'bg-[#ede6ff] text-[#2a174a] border-[#b8a2e8]'
                                          }`}
                                        >
                                          {item.title}
                                        </div>

                                        <p className="text-[12.5px] sm:text-[13.5px] text-[#3b2260] font-semibold leading-snug m-0">
                                          <span
                                            className={`rounded px-0.5 transition-colors duration-200 ${
                                              isDescPhase
                                                ? 'bg-[#FEF08A]/85 text-[#2a174a]'
                                                : 'bg-transparent'
                                            }`}
                                          >
                                            ({renderRichText(txt(item.bodyEn, item.bodyHi), isItemCurrent)})
                                          </span>
                                        </p>
                                      </div>

                                      {iIdx < block.items.length - 1 && (
                                        <HandwrittenArrow
                                          withSparkles={iIdx === 0}
                                          isActive={isItemCurrent}
                                        />
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </div>

                              {isSecActive && activeStepItem && liveTypedText && (
                                <div className="relative h-[80px] overflow-hidden rounded-xl bg-[#FAF6FF] border-[2px] border-[#b8a2e8] px-3.5 py-2 shadow-2xs flex flex-col justify-start gap-1">
                                  <div className="flex items-center justify-between gap-2 shrink-0">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ede6ff] border border-[#b8a2e8] text-[#2a174a] text-[11px] font-bold">
                                      <Sparkles className="w-3 h-3 text-[#7c3aed]" />
                                      <span>
                                        Step {activeStepIndex + 1}: {activeStepItem.title}
                                      </span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-[#d8b4fe] text-[#6D28D9] text-[10px] font-bold">
                                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                                      <span>AI Mentor Live</span>
                                    </span>
                                  </div>
                                  <p className="text-[13px] text-[#2a174a] font-semibold leading-snug line-clamp-2 m-0">
                                    <span>{liveTypedText}</span>
                                    {isMentorSpeaking && (
                                      <span
                                        className="inline-block w-[2px] h-3.5 bg-[#6D28D9] ml-0.5 align-middle animate-pulse"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        }

                        // ── B. HANDWRITTEN-STYLE SAMPLE DATASET TABLE ──
                        if (block.type === 'table') {
                          const isTableNoteActive =
                            isBlockCue && activeCue?.itemIndex === block.rows.length;
                          return (
                            <div key={bIdx} className="space-y-2">
                              <div className="overflow-x-auto rounded-xl border-[2px] border-[#9d7ec9]">
                                <table className="w-full text-left border-collapse text-[13.5px] sm:text-[14px]">
                                  <thead>
                                    <tr className="bg-[#ede6ff] text-[#2a174a]">
                                      {block.headers.map((h, hIdx) => (
                                        <th
                                          key={hIdx}
                                          className="py-2 px-3 font-bold border-b-[2px] border-[#b8a2e8] border-r last:border-r-0"
                                        >
                                          {h}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-[#2a174a] font-semibold">
                                    {block.rows.map((row, rIdx) => {
                                      const rowKey = `${pageIdx}-${sIdx}-${bIdx}-${rIdx}`;
                                      const isSyncedRow =
                                        isBlockCue && activeCue?.itemIndex === rIdx;
                                      const isPicked = selectedRowKey === rowKey || isSyncedRow;
                                      return (
                                        <tr
                                          key={rIdx}
                                          onClick={() =>
                                            setSelectedRowKey(
                                              selectedRowKey === rowKey ? null : rowKey
                                            )
                                          }
                                          className={`cursor-pointer transition-colors duration-200 ${
                                            rIdx < block.rows.length - 1
                                              ? 'border-b border-[#e2d6f8]'
                                              : ''
                                          } ${
                                            isSyncedRow
                                              ? 'bg-[#FEF08A]/80 ring-1 ring-inset ring-[#7C3AED]'
                                              : isPicked
                                              ? 'bg-[#ede6ff] ring-1 ring-inset ring-[#7C3AED]'
                                              : rIdx % 2 === 1
                                              ? 'bg-[#FAF7FF] hover:bg-[#F3E8FF]/60'
                                              : 'bg-[#FFFDF9] hover:bg-[#F3E8FF]/60'
                                          }`}
                                        >
                                          {row.map((cell, cIdx) => (
                                            <td
                                              key={cIdx}
                                              className={`py-1.5 px-3 border-r border-[#ede6ff] last:border-r-0 ${
                                                cIdx === 0 ? 'font-bold text-[#2a174a]' : ''
                                              }`}
                                            >
                                              {cell}
                                            </td>
                                          ))}
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                              {(block.noteEn || block.noteHi) && (
                                <p className="text-[13.5px] sm:text-[14px] text-[#2a174a] font-semibold m-0 leading-relaxed">
                                  <span
                                    className={`rounded px-0.5 transition-colors duration-200 ${
                                      isTableNoteActive ? 'bg-[#FEF08A]/80' : 'bg-transparent'
                                    }`}
                                  >
                                    {renderRichText(
                                      txt(block.noteEn || '', block.noteHi),
                                      isTableNoteActive
                                    )}
                                  </span>
                                </p>
                              )}
                            </div>
                          );
                        }

                        // ── C. HANDWRITTEN-STYLE CODE / FORMULA NOTEBOOK BLOCK ──
                        if (block.type === 'sql') {
                          const nonEmptyLines = block.code
                            .split('\n')
                            .filter((l) => l.trim().length > 0);
                          const activeLineIndex =
                            isBlockCue && activeCue && activeCue.itemIndex < nonEmptyLines.length
                              ? activeCue.itemIndex
                              : -1;
                          const highlightCaption =
                            isBlockCue &&
                            Boolean(activeCue && activeCue.itemIndex >= nonEmptyLines.length);
                          return (
                            <InteractiveCodeBlock
                              key={bIdx}
                              label={block.label || 'CODE & FORMULA NOTEBOOK'}
                              code={block.code}
                              output={block.output}
                              isError={block.isError}
                              activeLineIndex={activeLineIndex}
                              highlightCaption={highlightCaption}
                              caption={
                                block.captionEn || block.captionHi
                                  ? txt(block.captionEn || '', block.captionHi)
                                  : undefined
                              }
                            />
                          );
                        }

                        // ── D. REAL-LIFE EXAMPLES / COMPARE ITEMS (Stacked inside Half-Width Card OR Multi-Column inside Full-Width Card) ──
                        if (block.type === 'compare') {
                          const spokenCmpIdx = isSecActive
                            ? findSpokenItemIndex(block.items, liveTypedText)
                            : -1;
                          const activeCmpIndex =
                            spokenCmpIdx >= 0
                              ? spokenCmpIdx
                              : isBlockCue && activeCue
                              ? Math.min(block.items.length - 1, Math.max(0, activeCue.itemIndex))
                              : -1;

                          // If this section sits in a half-width column (e.g. "Real-Life Examples" paired with "Why Is It Important?"),
                          // render compact stacked rows inside the section box (exact reference image Left Card layout!)
                          if (!isFullSpan) {
                            return (
                              <div key={bIdx} className="space-y-3 pt-0.5">
                                {block.items.map((item, cIdx) => {
                                  const isCmpActive = isSecActive && activeCmpIndex === cIdx;
                                  const isCmpDesc =
                                    isCmpActive && activeCue?.phase === 'description';
                                  return (
                                    <div
                                      key={cIdx}
                                      className={`flex items-start gap-3 rounded-xl p-1.5 transition-colors ${
                                        isCmpActive ? 'bg-[#F3E8FF]' : ''
                                      }`}
                                    >
                                      <HandwrittenDoodle
                                        title={item.title}
                                        body={item.bodyEn}
                                        fallbackIndex={cIdx + sIdx * 3 + pageIdx * 7}
                                        size="sm"
                                        isActive={isCmpActive}
                                      />
                                      <div className="space-y-0.5 flex-1 min-w-0">
                                        <div>
                                          <span
                                            className={`inline-block px-3 py-0.5 rounded-full text-[13.5px] sm:text-[14.5px] font-bold border transition-colors ${
                                              isCmpActive
                                                ? 'bg-[#6D28D9] text-white border-[#5B21B6]'
                                                : 'bg-[#ede6ff] text-[#2a174a] border-[#9d7ec9]'
                                            }`}
                                          >
                                            {item.title}
                                          </span>
                                        </div>
                                        <p className="text-[14px] sm:text-[15px] text-[#2a174a] font-semibold leading-[1.52] m-0">
                                          <span className="text-[#7c3aed] font-black mr-1">→</span>
                                          <span
                                            className={`rounded px-0.5 transition-colors duration-200 ${
                                              isCmpDesc ? 'bg-[#FEF08A]/85' : 'bg-transparent'
                                            }`}
                                          >
                                            {renderRichText(
                                              txt(item.bodyEn, item.bodyHi),
                                              isCmpActive
                                            )}
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }

                          // Full-width compare section: 2-column or 3-column horizontal cards
                          return (
                            <div
                              key={bIdx}
                              className={`grid grid-cols-1 ${
                                block.items.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
                              } gap-3`}
                            >
                              {block.items.map((item, cIdx) => {
                                const isCmpActive = isSecActive && activeCmpIndex === cIdx;
                                const isCmpDesc =
                                  isCmpActive && activeCue?.phase === 'description';
                                const isMutedCmp =
                                  isSecActive && activeCmpIndex >= 0 && !isCmpActive;
                                const slug = item.title
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]+/g, '-')
                                  .replace(/^-+|-+$/g, '');
                                const cachedDoodleUrl =
                                  item.imageUrl || HANDWRITTEN_DOODLE_MANIFEST[slug];

                                return (
                                  <div
                                    key={cIdx}
                                    className={`group rounded-[18px] border-[2px] p-3 space-y-2 flex flex-col transition-all duration-200 ${
                                      isCmpActive
                                        ? 'bg-[#F3E8FF] border-[#7C3AED] vn-active-step-glow'
                                        : isMutedCmp
                                        ? `${TONE_CLASSES[item.tone]} opacity-75`
                                        : TONE_CLASSES[item.tone]
                                    }`}
                                  >
                                    {cachedDoodleUrl && (
                                      <div className="w-full rounded-xl overflow-hidden bg-[#FFFDF9] border border-[#d8b4fe] p-1.5 flex items-center justify-center">
                                        <img
                                          src={cachedDoodleUrl}
                                          alt={item.title}
                                          loading="lazy"
                                          className="max-h-28 w-auto object-contain select-none"
                                        />
                                      </div>
                                    )}

                                    <div className="flex items-start gap-2.5">
                                      <HandwrittenDoodle
                                        title={item.title}
                                        body={item.bodyEn}
                                        fallbackIndex={cIdx + sIdx * 3 + pageIdx * 7}
                                        size="md"
                                        isActive={isCmpActive}
                                      />

                                      <div className="space-y-1 flex-1 min-w-0">
                                        <div>
                                          <span
                                            className={`inline-block px-3 py-0.5 rounded-full text-[14px] sm:text-[15px] font-bold border transition-colors ${
                                              isCmpActive
                                                ? 'bg-[#6D28D9] text-white border-[#5B21B6]'
                                                : 'bg-[#ede6ff] text-[#2a174a] border-[#9d7ec9]'
                                            }`}
                                          >
                                            {item.title}
                                          </span>
                                        </div>

                                        <p className="text-[14px] sm:text-[15px] text-[#2a174a] font-semibold leading-[1.55] m-0">
                                          <span className="text-[#7c3aed] font-black mr-1">→</span>
                                          <span
                                            className={`rounded px-0.5 transition-colors duration-200 ${
                                              isCmpDesc ? 'bg-[#FEF08A]/85' : 'bg-transparent'
                                            }`}
                                          >
                                            {renderRichText(
                                              txt(item.bodyEn, item.bodyHi),
                                              isCmpActive
                                            )}
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }

                        // ── E. HANDWRITTEN CONCEPT NOTE BOX WITH DOODLE ──
                        if (block.type === 'note') {
                          return (
                            <div
                              key={bIdx}
                              className={`rounded-[18px] border-[1.8px] p-3 flex items-start gap-3 text-[14.5px] sm:text-[15.5px] text-[#2a174a] font-semibold leading-[1.58] transition-colors duration-200 ${
                                isSecActive
                                  ? 'bg-[#F3E8FF] border-[#7C3AED]'
                                  : block.tone
                                  ? TONE_CLASSES[block.tone]
                                  : 'bg-[#FAF7FF] border-[#b8a2e8]'
                              }`}
                            >
                              <HandwrittenDoodle
                                title={section.pill}
                                body={block.bodyEn}
                                fallbackIndex={sIdx + pageIdx * 4}
                                size="md"
                                isActive={isSecActive}
                              />
                              <div className="flex-1 min-w-0">
                                {renderSentenceSyncedText(
                                  txt(block.bodyEn, block.bodyHi),
                                  isSecActive,
                                  isSecActive ? speechProgress : 0
                                )}
                              </div>
                            </div>
                          );
                        }

                        // ── F. GREEN CHECKMARK (`✔`) BENEFITS / TAKEAWAYS LIST (Reference Image Right Card Style) ──
                        return (
                          <div key={bIdx} className="space-y-2 pt-0.5">
                            {block.items.map((item, iIdx) => {
                              const isBulletSelected =
                                isBlockCue && activeCue?.itemIndex === iIdx;
                              return (
                                <div
                                  key={iIdx}
                                  className={`flex items-start gap-2.5 text-[14.5px] sm:text-[15.5px] font-semibold leading-[1.55] rounded-xl px-2 py-1 transition-colors duration-200 ${
                                    isBulletSelected
                                      ? 'bg-[#FEF08A]/75 text-[#2a174a]'
                                      : 'text-[#2a174a]'
                                  }`}
                                >
                                  <span
                                    className={`font-black text-[18px] leading-none shrink-0 mt-0.5 select-none transition-transform ${
                                      isBulletSelected
                                        ? 'text-emerald-600 scale-125'
                                        : 'text-emerald-500'
                                    }`}
                                  >
                                    ✔
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    {renderRichText(txt(item.en, item.hi), isBulletSelected)}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}

                      {isSecActive && !isPureFlowSection && liveTypedText && (
                        <div className="relative h-[78px] overflow-hidden rounded-xl bg-[#FAF6FF] border-[2px] border-[#b8a2e8] px-3.5 py-2 shadow-2xs flex flex-col justify-start gap-1 mt-2">
                          <div className="flex items-center justify-between gap-2 shrink-0">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ede6ff] border border-[#b8a2e8] text-[#2a174a] text-[11px] font-bold truncate max-w-[70%]">
                              <Sparkles className="w-3 h-3 text-[#7c3aed] shrink-0" />
                              <span className="truncate">
                                {isHi ? 'AI Teacher (Live Hindi)' : 'AI Teacher (Live English)'}
                              </span>
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white border border-[#d8b4fe] text-[#6D28D9] text-[10px] font-bold shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block animate-ping" />
                              <span>Live</span>
                            </span>
                          </div>
                          <p className="text-[12.5px] sm:text-[13px] text-[#2a174a] font-semibold leading-snug line-clamp-2 m-0">
                            <span>{liveTypedText}</span>
                            {isMentorSpeaking && (
                              <span
                                className="inline-block w-[2px] h-3.5 bg-[#6D28D9] ml-0.5 align-middle animate-pulse"
                                aria-hidden="true"
                              />
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── 3. BOTTOM "KEY TAKEAWAY" FORMULA EQUATION BAR (Exact Reference Image Bottom Box) ── */}
            <KeyTakeawayFormulaBar
              topicTitle={page.title || spec.topic}
              pills={takeawayPills}
              isHi={isHi}
            />

            <NotePageFooter page={page.footerPage} />
          </section>
        );
      })}
    </div>
  );
};
