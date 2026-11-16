import React, { useEffect, useRef, useState, useMemo } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { languageEngine } from '../../../services/visualLearningLanguageEngine';
import {
  EXCEL_LESSONS_DATA,
  EXCEL_MODULE_PROJECTS,
  EXCEL_FINAL_CAPSTONE,
  ExcelLessonData,
  getExcelLessonById,
} from '../../../data/excelModules11To16Data';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Table,
  Sparkles,
  Award,
  Layers,
  Check,
} from 'lucide-react';

interface ExcelVisualLessonViewerProps {
  topicId?: number | string;
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
  onSelectTopic?: (topicId: number) => void;
  onBackToCurriculum?: () => void;
}

export const ExcelVisualLessonViewer: React.FC<ExcelVisualLessonViewerProps> = ({
  topicId = 27,
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
  onSelectTopic,
  onBackToCurriculum,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [showCapstoneModal, setShowCapstoneModal] = useState<boolean>(false);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

  const isHindi = currentLang === 'hindi';

  // Resolve current lesson data
  const lesson: ExcelLessonData = useMemo(() => {
    const found = getExcelLessonById(topicId);
    return found || EXCEL_LESSONS_DATA[0];
  }, [topicId]);

  // Identify the specialized visual diagram category for this topic
  const visualCategory = useMemo(() => {
    const t = (lesson.title + ' ' + lesson.subtitle).toLowerCase();
    if (lesson.moduleNum === 14 || t.includes('pivot')) return 'pivot_matrix';
    if (lesson.moduleNum === 15 || t.includes('chart') || t.includes('trend')) return 'chart_preview';
    if (lesson.moduleNum === 16 || t.includes('power query') || t.includes('etl') || t.includes('import')) return 'etl_pipeline';
    if (t.includes('lookup') || t.includes('vlookup') || t.includes('xlookup') || t.includes('index') || t.includes('match')) return 'lookup_diagram';
    if (lesson.moduleNum === 12 || t.includes('formula') || t.includes('sum') || t.includes('if') || t.includes('average') || t.includes('count')) return 'formula_blueprint';
    return 'grid_anatomy';
  }, [lesson]);

  const flowSteps = (isHindi && lesson.visualFlowHi && lesson.visualFlowHi.length > 0)
    ? lesson.visualFlowHi
    : lesson.visualFlow;

  // Section element refs for scrolling & highlight
  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secStartRef = useRef<HTMLDivElement>(null);
  const secExampleRef = useRef<HTMLDivElement>(null);
  const secStepsRef = useRef<HTMLDivElement>(null);
  const secFlowRef = useRef<HTMLDivElement>(null);
  const secTryRef = useRef<HTMLDivElement>(null);
  const secCheckRef = useRef<HTMLDivElement>(null);

  // Scroll to top immediately when changing lessons/topics
  useEffect(() => {
    if (containerRef.current) {
      const parentScroll = containerRef.current.closest('.overflow-y-auto') as HTMLElement | null;
      if (parentScroll) {
        parentScroll.scrollTop = 0;
      } else {
        containerRef.current.scrollIntoView({ block: 'start' });
      }
    }
  }, [topicId]);

  // Auto-scroll to active section when changed by AI Mentor
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec-title': secTitleRef,
      'sec-start': secStartRef,
      'sec-example': secExampleRef,
      'sec-steps': secStepsRef,
      'sec-flow': secFlowRef,
      'sec-try': secTryRef,
      'sec-check': secCheckRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const timer = setTimeout(() => {
        if (onScrollSettled) onScrollSettled();
        if (onSectionRectChange) {
          const rect = targetEl.getBoundingClientRect();
          onSectionRectChange({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2,
          });
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  // Parse example into table rows if it's table-formatted
  const parsedExample = useMemo(() => {
    const raw = lesson.realExample || '';
    const isFormula = raw.startsWith('=');

    // Check if it's cell-delimited e.g. "A1=Product; B1=Qty; C1=Price; A2=Pen; B2=5; C2=10"
    const cellPairs = raw.match(/([A-Z]\d+)=([^;]+)/g);
    if (cellPairs && cellPairs.length >= 3) {
      const grid: Record<string, string> = {};
      const colsSet = new Set<string>();
      const rowsSet = new Set<number>();

      cellPairs.forEach((pair) => {
        const [coord, val] = pair.split('=');
        const col = coord.slice(0, 1);
        const row = parseInt(coord.slice(1), 10);
        colsSet.add(col);
        rowsSet.add(row);
        grid[`${col}${row}`] = val.trim();
      });

      const cols = Array.from(colsSet).sort();
      const rows = Array.from(rowsSet).sort((a, b) => a - b);

      return {
        type: 'grid' as const,
        isFormula: false,
        raw,
        cols,
        rows,
        grid,
      };
    }

    return {
      type: isFormula ? ('formula' as const) : ('text' as const),
      isFormula,
      raw,
    };
  }, [lesson.realExample]);

  // Current lesson index in list
  const currentIdx = EXCEL_LESSONS_DATA.findIndex((l) => l.numericId === lesson.numericId);
  const prevLesson = currentIdx > 0 ? EXCEL_LESSONS_DATA[currentIdx - 1] : null;
  const nextLesson = currentIdx < EXCEL_LESSONS_DATA.length - 1 ? EXCEL_LESSONS_DATA[currentIdx + 1] : null;
  const currentModuleProject = EXCEL_MODULE_PROJECTS[lesson.moduleNum];

  const getCardClass = (id: string) => {
    if (activeSectionId === id) {
      return 'ring-2 ring-purple-400 bg-purple-50/60 shadow-md border-purple-500 scale-[1.008]';
    }
    return 'bg-white border-[#b8a2e8]';
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="excel-visual-lesson-container w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-4 sm:space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER WITH FLOWERS & SPARKLES ── */}
      <div
        ref={secTitleRef}
        className={`relative pt-2 pb-2 text-center rounded-3xl transition-all duration-300 border-[2px] ${getCardClass(
          'sec-title'
        )}`}
      >
        {/* Floating AI Explaining Badge */}
        {activeSectionId === 'sec-title' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: {isHindi ? lesson.titleHi : lesson.title}</span>
          </div>
        )}

        {/* Banner with left and right flowers */}
        <div className="relative flex items-center justify-center max-w-[740px] mx-auto px-1 sm:px-2">
          {/* Left Floral Bouquet & Sparkles */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -mr-2 sm:-mr-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
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

          {/* Center 3D Curved Ribbon Banner */}
          <div className="relative flex-1 max-w-[560px]">
            <svg viewBox="0 0 540 85" className="w-full h-auto drop-shadow-2xs" fill="none">
              <path d="M 45 32 L 8 28 L 22 46 L 8 64 L 45 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 45 32 L 60 40 L 45 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 495 32 L 532 28 L 518 46 L 532 64 L 495 60 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M 495 32 L 480 40 L 495 60 Z" fill="#bba5e2" stroke="#9d7ec9" strokeWidth="1.5" />
              <path d="M 50 25 Q 270 12 490 25 Q 482 68 490 68 Q 270 80 50 68 Q 58 25 50 25 Z" fill="#ede6ff" stroke="#9d7ec9" strokeWidth="2.4" strokeLinejoin="round" />
            </svg>

            {/* Banner Text & Icons overlaid within the curved ribbon */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 pointer-events-none select-none">
              <span className="text-lg sm:text-2xl text-purple-600 filter drop-shadow-2xs">💜</span>
              <h1 className="text-sm sm:text-xl md:text-[22px] font-bold text-[#2a174a] tracking-tight pointer-events-auto truncate max-w-[440px]">
                {isHindi ? languageEngine.standardizeHinglish(lesson.titleHi) : lesson.title}
              </h1>
              <div className="flex items-end gap-1 h-5 sm:h-6 mb-0.5 shrink-0">
                <div className="w-1.5 sm:w-2 h-3.5 sm:h-4 bg-[#7dd3fc] border-[1.5px] border-[#2a174a] rounded-xs" />
                <div className="w-1.5 sm:w-2 h-5 sm:h-6 bg-[#c084fc] border-[1.5px] border-[#2a174a] rounded-xs" />
                <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-[#93c5fd] border-[1.5px] border-[#2a174a] rounded-xs" />
              </div>
            </div>
          </div>

          {/* Right Floral Bouquet & Sparkles */}
          <div className="w-14 sm:w-20 h-24 sm:h-28 shrink-0 pointer-events-none select-none -ml-2 sm:-ml-4 z-10">
            <svg viewBox="0 0 70 95" className="w-full h-full" fill="none">
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

        {/* Sub-heading Pill: Clean Module Title Without Numbers */}
        <div className="mt-2 flex items-center justify-center">
          <div
            className={`inline-block px-5 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeSectionId === 'sec-title'
                ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white shadow-md ring-2 ring-purple-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border-[1.8px] border-[#b8a2e8] shadow-2xs'
            }`}
          >
            {isHindi
              ? languageEngine.standardizeHinglish(lesson.moduleTitleHi.replace(/^.*Module\s*\d+[\s:\-–]*/i, '').replace(/\(.*\)/g, '').trim() || lesson.moduleTitle)
              : lesson.moduleTitle.replace(/^Module\s*\d+[\s:\-–]*/i, '').trim()}
          </div>
        </div>

        {/* Natural Definition with Accents and Highlighted Pills */}
        <div className="mt-2 flex items-center justify-center gap-2 max-w-2xl mx-auto px-2">
          <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
            \ \ \
          </span>

          <p className="text-xs sm:text-[14px] md:text-[15px] text-[#2a174a] leading-relaxed font-semibold text-center">
            {isHindi ? languageEngine.standardizeHinglish(lesson.subtitleHi) : lesson.subtitle}
          </p>

          <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
            / / /
          </span>
        </div>
      </div>

      {/* ── 2. MAIN 5-STAGE PROCESS FLOW PIPELINE (DOODLE ICONS + PURPLE ARROWS) ── */}
      <div
        ref={secFlowRef}
        id="sec-flow"
        className={`relative p-3.5 sm:p-5 rounded-2xl border-[2px] transition-all duration-300 ${getCardClass(
          'sec-flow'
        )}`}
      >
        {activeSectionId === 'sec-flow' && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Process Flow</span>
          </div>
        )}

        {/* ── 2A. FORMULA BLUEPRINT: Syntax Bar, Parameter Breakdown & Calculation Result ── */}
        {visualCategory === 'formula_blueprint' && (
          <div className="space-y-3">
            {/* Header pill */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                  fx Formula Engine
                </span>
                <span>• {isHindi ? 'Formula Anatomy और Logic' : 'Formula Anatomy & Execution'}</span>
              </span>
              <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 font-bold">
                Syntax Breakdown
              </span>
            </div>

            {/* Live Formula Bar */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950 text-white font-mono text-xs sm:text-sm flex flex-wrap items-center gap-2 border border-slate-800 shadow-inner">
              <span className="text-emerald-400 font-bold text-sm sm:text-base">fx</span>
              <span className="text-slate-500 font-bold">=</span>
              <span className="px-2 py-0.5 rounded-md bg-purple-900/80 text-purple-200 font-bold border border-purple-600">
                {lesson.title.includes('IF') ? 'IF' : lesson.title.includes('SUM') ? 'SUM' : lesson.title.includes('COUNT') ? 'COUNT' : 'FORMULA'}
              </span>
              <span className="text-slate-400">(</span>
              <span className="px-2 py-0.5 rounded-md bg-sky-900/80 text-sky-200 font-bold border border-sky-600">
                {lesson.title.includes('IF') ? 'B2 >= 75' : 'A2:A10'}
              </span>
              <span className="text-slate-500">,</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-900/80 text-emerald-200 font-bold border border-emerald-600">
                {lesson.title.includes('IF') ? '"Passed"' : 'criteria'}
              </span>
              {lesson.title.includes('IF') && (
                <>
                  <span className="text-slate-500">,</span>
                  <span className="px-2 py-0.5 rounded-md bg-rose-900/80 text-rose-200 font-bold border border-rose-600">
                    "Retest"
                  </span>
                </>
              )}
              <span className="text-slate-400">)</span>
              <span className="ml-auto text-emerald-400 font-bold text-xs bg-emerald-950/90 px-2.5 py-1 rounded-lg border border-emerald-700">
                ➔ Result: {lesson.title.includes('IF') ? '"Passed"' : 'Auto-Computed'}
              </span>
            </div>

            {/* Argument Explanation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-center">
              <div className="p-2 rounded-xl bg-sky-50 border border-sky-200">
                <span className="text-[10px] font-bold text-sky-800 uppercase block mb-0.5">Arg 1: Input / Range</span>
                <p className="text-xs text-sky-950 font-semibold">{isHindi ? 'जिस Cell या Range को evaluate करना है' : 'Target cell or range being evaluated'}</p>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-0.5">Arg 2: Condition / Rule</span>
                <p className="text-xs text-emerald-950 font-semibold">{isHindi ? 'जब Condition TRUE हो तो Result' : 'Output when criteria or calculation matches'}</p>
              </div>
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-200">
                <span className="text-[10px] font-bold text-purple-800 uppercase block mb-0.5">Arg 3: Fallback / Total</span>
                <p className="text-xs text-purple-950 font-semibold">{isHindi ? 'जब Condition FALSE हो तो Fallback Result' : 'Fallback value or automated aggregation'}</p>
              </div>
            </div>
          </div>
        )}

        {/* ── 2B. LOOKUP CONNECTOR: Search Key ➔ Master Table ➔ Return Col ── */}
        {visualCategory === 'lookup_diagram' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase">
                  Lookup Architecture
                </span>
                <span>• {isHindi ? 'Data Search और Linking Flow' : 'Cross-Table Lookup Flow'}</span>
              </span>
              <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 font-bold">
                Table Array Mapping
              </span>
            </div>

            {/* Lookup Flow Illustration */}
            <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 items-center">
              {/* Lookup Value Card */}
              <div className="sm:col-span-2 p-3 rounded-xl bg-sky-50 border-2 border-sky-300 text-center space-y-1">
                <span className="text-[10px] font-black text-sky-700 uppercase">1. Lookup Value</span>
                <div className="p-1.5 rounded-lg bg-white border border-sky-300 font-mono text-xs font-bold text-sky-900">
                  ID: "P-104"
                </div>
                <span className="text-[10px] text-sky-800 block">{isHindi ? '(Search की जाने वाली Value)' : '(What to search)'}</span>
              </div>

              {/* Connecting Arrow */}
              <div className="sm:col-span-1 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-indigo-600 font-mono mb-0.5">Match</span>
                <svg viewBox="0 0 34 20" className="w-6 h-5" fill="none">
                  <path d="M 2 10 L 28 10 M 20 4 L 28 10 L 20 16" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Master Table Array */}
              <div className="sm:col-span-2 p-2.5 rounded-xl bg-purple-50 border-2 border-purple-300 text-center space-y-1">
                <span className="text-[10px] font-black text-purple-700 uppercase">2. Table Array (A2:C20)</span>
                <div className="grid grid-cols-3 gap-1 text-[10px] font-mono font-bold bg-white p-1 rounded-md border border-purple-200">
                  <span className="bg-sky-100 text-sky-900 rounded-xs py-0.5">Col 1</span>
                  <span className="bg-slate-100 text-slate-700 rounded-xs py-0.5">Col 2</span>
                  <span className="bg-emerald-100 text-emerald-900 rounded-xs py-0.5">Col 3 ⭐</span>
                </div>
                <span className="text-[10px] text-purple-800 block">{isHindi ? '(Master Table Grid)' : '(Table being searched)'}</span>
              </div>

              {/* Connecting Arrow */}
              <div className="sm:col-span-1 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-emerald-600 font-mono mb-0.5">Fetch</span>
                <svg viewBox="0 0 34 20" className="w-6 h-5" fill="none">
                  <path d="M 2 10 L 28 10 M 20 4 L 28 10 L 20 16" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Final Output */}
              <div className="sm:col-span-1 p-3 rounded-xl bg-emerald-50 border-2 border-emerald-400 text-center space-y-1">
                <span className="text-[10px] font-black text-emerald-700 uppercase">3. Output</span>
                <div className="p-1 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold shadow-xs">
                  $450.00
                </div>
                <span className="text-[9px] text-emerald-800 block">{isHindi ? 'Exact Return Value' : 'Return Val'}</span>
              </div>
            </div>
          </div>
        )}

        {/* ── 2C. PIVOT TABLE 4-ZONE BUILDER & SUMMARY MATRIX ── */}
        {visualCategory === 'pivot_matrix' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase">
                  Pivot Table Engine
                </span>
                <span>• {isHindi ? '4-Zones Drag & Drop Fields' : '4-Quadrant Field Builder'}</span>
              </span>
              <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-bold">
                Instant Aggregation
              </span>
            </div>

            {/* 4 Quadrants Visual */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300">
                <span className="font-bold text-slate-700 flex items-center gap-1 text-[11px] mb-1">
                  <span>🗂️</span> Filters
                </span>
                <div className="p-1.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-slate-800 font-bold">
                  [ Region: North ▼ ]
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-sky-50 border-2 border-dashed border-sky-300">
                <span className="font-bold text-sky-800 flex items-center gap-1 text-[11px] mb-1">
                  <span>📊</span> Columns
                </span>
                <div className="p-1.5 rounded-lg bg-white border border-sky-200 font-mono text-[11px] text-sky-900 font-bold">
                  [ Quarter / Month ]
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-50 border-2 border-dashed border-purple-300">
                <span className="font-bold text-purple-800 flex items-center gap-1 text-[11px] mb-1">
                  <span>📑</span> Rows
                </span>
                <div className="p-1.5 rounded-lg bg-white border border-purple-200 font-mono text-[11px] text-purple-900 font-bold">
                  [ Sales Rep / Product ]
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50 border-2 border-dashed border-emerald-300">
                <span className="font-bold text-emerald-800 flex items-center gap-1 text-[11px] mb-1">
                  <span>Σ</span> Values
                </span>
                <div className="p-1.5 rounded-lg bg-white border border-emerald-200 font-mono text-[11px] text-emerald-900 font-bold">
                  [ Sum of Total Revenue ]
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 2D. INTERACTIVE CHART & VISUALIZATION PREVIEW ── */}
        {visualCategory === 'chart_preview' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 text-[10px] font-black uppercase">
                  Chart Visualizer
                </span>
                <span>• {isHindi ? 'Graphical Trends और Data Visualization' : 'Visual Chart & KPI Analytics'}</span>
              </span>
              <span className="text-[10px] font-mono text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200 font-bold">
                Visual Analytics
              </span>
            </div>

            {/* Simulated Live Bar Chart with Axes & Data Labels */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">📊 Monthly Performance Trends</span>
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <span className="inline-flex items-center gap-1 text-purple-700">
                    <span className="w-2.5 h-2.5 rounded-xs bg-purple-600 inline-block" /> Actual Sales
                  </span>
                  <span className="inline-flex items-center gap-1 text-sky-700">
                    <span className="w-2.5 h-2.5 rounded-xs bg-sky-500 inline-block" /> Target
                  </span>
                </div>
              </div>

              {/* SVG Animated Chart */}
              <div className="h-28 w-full">
                <svg viewBox="0 0 400 110" className="w-full h-full" fill="none">
                  {/* Gridlines */}
                  <line x1="35" y1="20" x2="390" y2="20" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="35" y1="50" x2="390" y2="50" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="35" y1="80" x2="390" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
                  {/* Y-Axis Labels */}
                  <text x="5" y="24" fill="#64748b" fontSize="9" fontWeight="bold">30K</text>
                  <text x="5" y="54" fill="#64748b" fontSize="9" fontWeight="bold">20K</text>
                  <text x="5" y="84" fill="#64748b" fontSize="9" fontWeight="bold">10K</text>
                  {/* Q1 Bars */}
                  <rect x="55" y="38" width="18" height="42" rx="3" fill="#9333ea" />
                  <rect x="76" y="28" width="18" height="52" rx="3" fill="#0ea5e9" />
                  <text x="65" y="96" fill="#334155" fontSize="10" fontWeight="bold">Q1</text>
                  {/* Q2 Bars */}
                  <rect x="140" y="30" width="18" height="50" rx="3" fill="#9333ea" />
                  <rect x="161" y="24" width="18" height="56" rx="3" fill="#0ea5e9" />
                  <text x="150" y="96" fill="#334155" fontSize="10" fontWeight="bold">Q2</text>
                  {/* Q3 Bars */}
                  <rect x="225" y="22" width="18" height="58" rx="3" fill="#9333ea" />
                  <rect x="246" y="32" width="18" height="48" rx="3" fill="#0ea5e9" />
                  <text x="235" y="96" fill="#334155" fontSize="10" fontWeight="bold">Q3</text>
                  {/* Q4 Bars */}
                  <rect x="310" y="14" width="18" height="66" rx="3" fill="#9333ea" />
                  <rect x="331" y="18" width="18" height="62" rx="3" fill="#0ea5e9" />
                  <text x="320" y="96" fill="#334155" fontSize="10" fontWeight="bold">Q4</text>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ── 2E. POWER QUERY ETL PIPELINE ── */}
        {visualCategory === 'etl_pipeline' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                  ETL Architecture
                </span>
                <span>• {isHindi ? 'Extract, Transform और Load (ETL) Pipeline' : 'Extract, Transform & Load Pipeline'}</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold">
                Automated Refresh
              </span>
            </div>

            {/* 3-Stage Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-xl bg-sky-50 border-2 border-sky-300 space-y-1">
                <span className="w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs inline-flex items-center justify-center">1</span>
                <span className="text-xs font-bold text-sky-950 block">📥 Extract Data</span>
                <p className="text-[11px] text-sky-800">{isHindi ? 'CSV, Excel Files या Web से connect करें' : 'Connect to CSV, Folders or SQL'}</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border-2 border-purple-300 space-y-1">
                <span className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs inline-flex items-center justify-center">2</span>
                <span className="text-xs font-bold text-purple-950 block">⚡ Transform</span>
                <p className="text-[11px] text-purple-800">{isHindi ? 'Data clean करें, Columns split करें, Data Types change करें' : 'Clean errors, split cols, change data types'}</p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-300 space-y-1">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs inline-flex items-center justify-center">3</span>
                <span className="text-xs font-bold text-emerald-950 block">📤 Load Model</span>
                <p className="text-[11px] text-emerald-800">{isHindi ? 'Clean Table को Worksheet या Data Model में load करें' : 'Load clean tables for Dashboards'}</p>
              </div>
            </div>
          </div>
        )}

        {/* ── 2F. EXCEL INTERFACE & SPREADSHEET GRID ANATOMY ── */}
        {visualCategory === 'grid_anatomy' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-purple-900 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                  Interface Anatomy
                </span>
                <span>• {isHindi ? 'Excel Ribbon और Spreadsheet Structure' : 'Workbook, Ribbon & Grid Navigation'}</span>
              </span>
              <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 font-bold">
                Grid Structure
              </span>
            </div>

            {/* Interactive Grid Simulation */}
            <div className="rounded-xl border border-purple-200 overflow-hidden bg-white shadow-2xs text-xs font-mono">
              <div className="p-2 bg-slate-100 border-b border-slate-200 flex items-center gap-3">
                <div className="px-2 py-0.5 rounded-md bg-white border border-slate-300 text-slate-900 font-bold text-[11px]">
                  Name Box: <span className="text-purple-700">B2</span>
                </div>
                <div className="flex-1 px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-slate-700 flex items-center gap-1 text-[11px]">
                  <span className="text-emerald-600 font-bold">fx</span>
                  <span className="text-slate-900 font-bold select-all">15000</span>
                </div>
              </div>
              <div className="grid grid-cols-4 text-center font-bold text-[11px]">
                <div className="p-1.5 bg-slate-200/80 border-r border-b border-slate-300 text-slate-700">#</div>
                <div className="p-1.5 bg-slate-100 border-r border-b border-slate-300 text-slate-800">Col A</div>
                <div className="p-1.5 bg-purple-100 border-r border-b border-purple-300 text-purple-900 font-black">Col B (Active)</div>
                <div className="p-1.5 bg-slate-100 border-b border-slate-300 text-slate-800">Col C</div>
              </div>
              <div className="grid grid-cols-4 text-center text-[11px]">
                <div className="p-1.5 bg-slate-100 border-r border-b border-slate-200 font-bold text-slate-700">Row 1</div>
                <div className="p-1.5 border-r border-b border-slate-100 text-slate-800">Product</div>
                <div className="p-1.5 border-r border-b border-slate-100 text-slate-800">Sales ($)</div>
                <div className="p-1.5 border-b border-slate-100 text-slate-800">Status</div>
              </div>
              <div className="grid grid-cols-4 text-center text-[11px]">
                <div className="p-1.5 bg-purple-100 border-r border-purple-300 font-black text-purple-900">Row 2</div>
                <div className="p-1.5 border-r border-slate-100 text-slate-800">Laptop</div>
                <div className="p-1.5 border-2 border-emerald-500 bg-emerald-50/70 text-emerald-950 font-black relative">
                  $15,000
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-600 rounded-xs" title="Fill Handle" />
                </div>
                <div className="p-1.5 text-emerald-700 font-bold">Approved</div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Syllabus Steps Row (Preserved for each lesson) */}
        {flowSteps && flowSteps.length > 0 && (
          <div className="pt-2 border-t border-purple-100">
            <span className="text-[10px] font-bold text-[#473063] block mb-1.5 text-center">
              {isHindi ? '📋 इस टॉपिक का सीखने का क्रम (Learning Workflow):' : '📋 Learning Workflow Steps:'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {flowSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-[#ede6ff] text-[#2a174a] border border-[#c4b5fd] shadow-2xs">
                    <span className="text-purple-600 mr-1 font-black">{idx + 1}.</span>
                    {step}
                  </span>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-[#a78bfa] text-xs font-bold">➔</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── 3. TWO SIDE-BY-SIDE SPLIT CARDS (EXACT REFERENCE ARRANGEMENT) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
        {/* ── LEFT CARD: REAL-LIFE EXAMPLES & AUTHENTIC EXCEL DATA ── */}
        <div
          ref={secExampleRef}
          id="sec-example"
          className={`relative p-4 sm:p-5 rounded-2xl border-[2px] shadow-2xs space-y-3.5 transition-all duration-300 ${getCardClass(
            'sec-example'
          )}`}
        >
          {activeSectionId === 'sec-example' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>✨ AI Mentor Explaining: Real Example</span>
            </div>
          )}

          {/* Card Header Pill with Star */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeSectionId === 'sec-example'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm ring-2 ring-purple-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
            }`}
          >
            <span className="text-amber-400 text-sm sm:text-base">⭐</span>
            <span>{isHindi ? 'वास्तविक उदाहरण (Real-Life Examples)' : 'Real-Life Examples'}</span>
          </div>

          {/* Dynamic Authentic Lesson Scenario */}
          <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200/90 text-xs text-[#2a174a] leading-relaxed font-medium">
            <div className="flex items-center gap-1.5 font-bold text-purple-900 mb-1">
              <span className="px-2 py-0.5 rounded-full bg-purple-200 text-purple-900 text-[10px] font-black uppercase">
                {isHindi ? 'Business Scenario' : 'Business Scenario'}
              </span>
              <span>• {isHindi ? languageEngine.standardizeHinglish(lesson.titleHi) : lesson.title}</span>
            </div>
            <p className="text-[#3b2361] font-medium">
              {isHindi ? languageEngine.standardizeHinglish(lesson.startHereHi) : lesson.startHere}
            </p>
          </div>

          {/* Interactive Spreadsheet Box with Green Header */}
          <div className="pt-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-emerald-900 flex items-center gap-1">
                <Table className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isHindi ? 'Excel Spreadsheet View:' : 'Spreadsheet Live Grid:'}</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold">
                Excel 365
              </span>
            </div>

            {parsedExample.type === 'grid' && parsedExample.cols && parsedExample.rows ? (
              <div className="overflow-x-auto rounded-xl border border-emerald-300 shadow-2xs bg-white">
                <table className="w-full text-xs font-mono border-collapse select-text">
                  <thead>
                    <tr className="bg-emerald-100/80 border-b border-emerald-300 text-emerald-950 font-bold">
                      <th className="w-8 p-1.5 text-center border-r border-emerald-300 bg-emerald-200/70">#</th>
                      {parsedExample.cols.map((col) => (
                        <th key={col} className="p-1.5 text-left border-r border-emerald-300 uppercase">
                          Col {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parsedExample.rows.map((row) => (
                      <tr key={row} className="border-b border-emerald-100 hover:bg-emerald-50/50">
                        <td className="p-1.5 text-center bg-emerald-50/80 border-r border-emerald-200 font-bold text-emerald-900">
                          {row}
                        </td>
                        {parsedExample.cols?.map((col) => {
                          const val = parsedExample.grid?.[`${col}${row}`] || '';
                          const isHeader = row === 1;
                          return (
                            <td
                              key={col}
                              className={`p-1.5 border-r border-emerald-100 ${
                                isHeader ? 'font-bold text-slate-900 bg-slate-50/70' : 'text-slate-800'
                              }`}
                            >
                              {val}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : parsedExample.type === 'formula' ? (
              <div className="p-2.5 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs flex items-center gap-2 border border-slate-800 shadow-inner">
                <span className="text-slate-500 font-bold">fx</span>
                <span className="text-white font-bold select-all">{parsedExample.raw}</span>
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 select-text">
                {parsedExample.raw}
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT CARD: WHY IS IT IMPORTANT? ── */}
        <div
          ref={secStartRef}
          id="sec-start"
          className={`relative p-4 sm:p-5 rounded-2xl border-[2px] shadow-2xs space-y-3.5 transition-all duration-300 ${getCardClass(
            'sec-start'
          )}`}
        >
          {activeSectionId === 'sec-start' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>✨ AI Mentor Explaining: Core Concept</span>
            </div>
          )}

          {/* Card Header Pill with Heart */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeSectionId === 'sec-start'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm ring-2 ring-purple-300 scale-105'
                : 'bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]'
            }`}
          >
            <span className="text-purple-600 text-sm sm:text-base">💜</span>
            <span>{isHindi ? 'यह महत्वपूर्ण क्यों है?' : 'Why Is It Important?'}</span>
          </div>

          {/* 4 Green Checkmarks List */}
          <div className="space-y-2.5 pt-0.5">
            <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2a174a] font-medium leading-snug">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                ✔
              </span>
              <span>{isHindi ? 'Data को Rows और Columns के structured Grid में रखता है।' : 'Organizes scattered raw numbers into a clean, structured grid.'}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2a174a] font-medium leading-snug">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                ✔
              </span>
              <span>{isHindi ? 'Repetitive Calculations को Formulas से automate करता है।' : 'Automates repetitive calculations and eliminates manual human error.'}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2a174a] font-medium leading-snug">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                ✔
              </span>
              <span>{isHindi ? 'Sorting, Filtering और Lookup से तुरंत Data find करता है।' : 'Enables instant sorting, filtering, and cross-sheet lookups.'}</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#2a174a] font-medium leading-snug">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                ✔
              </span>
              <span>{isHindi ? 'Business Decisions लेने और Executive Reports तैयार करने में मदद करता है।' : 'Delivers actionable insights for business decisions and executive reports.'}</span>
            </div>
          </div>

          {/* Core concept explanation quote */}
          <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-xs text-purple-950 leading-relaxed font-medium">
            <span className="font-bold text-purple-800">💡 {isHindi ? 'Start Here:' : 'Start Here:'} </span>
            {isHindi ? languageEngine.standardizeHinglish(lesson.startHereHi) : lesson.startHere}
          </div>
        </div>
      </div>

      {/* ── 4. STEP-BY-STEP INSTRUCTIONS CARD ── */}
      <div
        ref={secStepsRef}
        id="sec-steps"
        className={`relative p-4 sm:p-5 rounded-2xl border-[2px] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
          'sec-steps'
        )}`}
      >
        {activeSectionId === 'sec-steps' && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>✨ AI Mentor Explaining: Step-by-Step Instructions</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-[#ede6ff] text-[#2a174a] border border-[#b8a2e8]">
            <span>📝</span>
            <span>{isHindi ? 'Step-by-Step Instructions' : 'Step-by-Step Instructions'}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#2a174a] font-medium leading-relaxed pl-1">
          {isHindi ? languageEngine.standardizeHinglish(lesson.stepByStepHi) : lesson.stepByStep}
        </p>
      </div>

      {/* ── 5. PRACTICE & QUALITY AUDIT (SPLIT CARDS) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
        {/* Practice Card */}
        <div
          ref={secTryRef}
          id="sec-try"
          className={`relative p-4 sm:p-5 rounded-2xl border-[2px] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
            'sec-try'
          )}`}
        >
          {activeSectionId === 'sec-try' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>✨ AI Mentor Explaining: Hands-On Practice</span>
            </div>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
            <span>🚀</span>
            <span>{isHindi ? 'Try It Yourself (खुद करके देखें)' : 'Try It Yourself'}</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1">
              <span className="font-bold text-emerald-800">🟢 Beginner Challenge:</span>
              <p className="text-slate-800 font-medium leading-snug">
                {isHindi ? languageEngine.standardizeHinglish(lesson.tryBeginnerHi) : lesson.tryBeginner}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 text-xs space-y-1">
              <span className="font-bold text-purple-800">🟣 Advanced Challenge:</span>
              <p className="text-slate-800 font-medium leading-snug">
                {isHindi ? languageEngine.standardizeHinglish(lesson.tryAdvancedHi) : lesson.tryAdvanced}
              </p>
            </div>
          </div>
        </div>

        {/* Quality Audit Card */}
        <div
          ref={secCheckRef}
          id="sec-check"
          className={`relative p-4 sm:p-5 rounded-2xl border-[2px] shadow-2xs space-y-3 transition-all duration-300 ${getCardClass(
            'sec-check'
          )}`}
        >
          {activeSectionId === 'sec-check' && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white text-[11px] font-bold shadow-lg pointer-events-none whitespace-nowrap animate-bounce-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>✨ AI Mentor Explaining: Quality Check</span>
            </div>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-900 border border-sky-200">
            <span>✅</span>
            <span>{isHindi ? 'Check Your Work (सत्यापन)' : 'Check Your Work'}</span>
          </div>

          <div className="space-y-2 text-xs text-[#2a174a]">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
              <span className="font-medium">
                {isHindi ? languageEngine.standardizeHinglish(lesson.checkWorkHi) : lesson.checkWork}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
              <span className="font-medium">
                {isHindi ? 'Accuracy check करें: क्या Rows और Columns के Results business logic के अनुसार सही हैं?' : 'Audit totals and verify that calculations match business logic.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 6. BOTTOM KEY TAKEAWAY FULL-WIDTH BANNER (IDENTICAL TO TOPIC 1) ── */}
      <div className="mt-2 flex items-center justify-center gap-2 px-2 py-3 rounded-2xl bg-white border-[2px] border-[#b8a2e8] shadow-2xs">
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
          \ \ \
        </span>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 text-xs font-bold shadow-xs">
          <span>💡</span>
          <span>Key Takeaway</span>
        </div>
        <p className="text-xs sm:text-sm font-bold text-[#2a174a] text-center">
          {isHindi ? languageEngine.standardizeHinglish(lesson.titleHi) : lesson.title} ➔ {isHindi ? languageEngine.standardizeHinglish(lesson.subtitleHi) : lesson.subtitle}
        </p>
        <span className="text-[#a78bfa] text-xs sm:text-sm font-black select-none tracking-tighter">
          / / /
        </span>
      </div>

      {/* ── MODULE PRACTICE PROJECT MODAL ── */}
      {showProjectModal && currentModuleProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
          <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-6 shadow-2xl border border-purple-100 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-purple-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📁</span>
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider">
                    Module {lesson.moduleNum} Project
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800">
                    {isHindi ? currentModuleProject.titleHi : currentModuleProject.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowProjectModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isHindi ? currentModuleProject.descHi : currentModuleProject.desc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase text-purple-700 tracking-wider">
                {isHindi ? 'मुख्य कार्य और डिलीवरेबल्स:' : 'Key Deliverables:'}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-700">
                {(isHindi ? currentModuleProject.deliverablesHi : currentModuleProject.deliverables).map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowProjectModal(false)}
                className="px-4 py-2 rounded-2xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 cursor-pointer"
              >
                {isHindi ? 'समझ आ गया' : 'Got It, Let’s Practise'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FINAL CAPSTONE PROJECT MODAL ── */}
      {showCapstoneModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl border border-purple-100 space-y-4 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-purple-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <span className="text-[10px] font-black uppercase text-purple-700 tracking-wider">
                    Modules 11 to 16
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800">
                    {isHindi ? EXCEL_FINAL_CAPSTONE.titleHi : EXCEL_FINAL_CAPSTONE.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCapstoneModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isHindi ? EXCEL_FINAL_CAPSTONE.subtitleHi : EXCEL_FINAL_CAPSTONE.subtitle}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase text-purple-700 tracking-wider">
                {isHindi ? '8-चरणीय कैपस्टोन रोडमैप:' : '8-Stage Capstone Roadmap:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EXCEL_FINAL_CAPSTONE.stages.map((st) => (
                  <div key={st.step} className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100 text-xs space-y-1">
                    <span className="font-extrabold text-purple-700">
                      {isHindi ? st.titleHi : `${st.step}. ${st.title}`}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {isHindi ? st.descHi : st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Checklist */}
            <div className="space-y-2 pt-2 border-t border-purple-100">
              <h4 className="text-xs font-black uppercase text-emerald-700 tracking-wider">
                {isHindi ? 'गुणवत्ता और सत्यापन चेकलिस्ट:' : 'Quality Audit Checklist:'}
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700">
                {EXCEL_FINAL_CAPSTONE.qualityChecklist.map((qc, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>
                      <strong className="text-slate-900">{isHindi ? qc.checkHi : qc.check}:</strong>{' '}
                      {isHindi ? qc.outcomeHi : qc.outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowCapstoneModal(false)}
                className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs hover:opacity-95 cursor-pointer shadow-xs"
              >
                {isHindi ? 'कैपस्टोन तैयार करें' : 'Close & Return to Notes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
