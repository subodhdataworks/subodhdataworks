import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Play,
  FileText,
  Gamepad2,
  Code2,
  Coins,
  Gem,
  Lock,
  ChevronDown,
  ChevronUp,
  Table2,
  ExternalLink,
  Bot
} from 'lucide-react';
import { EXCEL_CHAPTERS, Chapter } from '../ExcelChapterView';
import { getLearnerTelemetry } from '../../../services/realAuthService';

export interface MobileExcelChapterViewProps {
  userName?: string;
  onBack: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
}

export const MobileExcelChapterView: React.FC<MobileExcelChapterViewProps> = ({
  userName = 'Learner',
  onBack,
  onOpenUnlockModal,
  onOpenAdvisor,
}) => {
  const [openChapterId, setOpenChapterId] = useState<number | null>(1);
  const [filterMode, setFilterMode] = useState<'all' | 'video' | 'mcq' | 'game' | 'code'>('all');
  const [telemetry, setTelemetry] = useState(getLearnerTelemetry);

  useEffect(() => {
    const handleUpdate = () => setTelemetry(getLearnerTelemetry());
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('focus', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('focus', handleUpdate);
    };
  }, []);

  const totalLessons = EXCEL_CHAPTERS.reduce((acc, c) => acc + c.lessons.length, 0);
  const doneLessons = EXCEL_CHAPTERS.reduce((acc, c) => acc + c.lessons.filter((l) => l.status === 'completed').length, 0);
  const progressPercent = Math.round((doneLessons / totalLessons) * 100);

  const playTactile = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(850, now);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // fallback
    }
  };

  const handleChapterClick = (chapter: Chapter) => {
    playTactile();
    if (!chapter.free && chapter.id !== 1) {
      onOpenUnlockModal?.(chapter.title);
      return;
    }
    setOpenChapterId((prev) => (prev === chapter.id ? null : chapter.id));
  };

  const handleActionClick = (e: React.MouseEvent, chapter: Chapter) => {
    e.stopPropagation();
    playTactile();
    if (!chapter.free && chapter.id !== 1) {
      onOpenUnlockModal?.(chapter.title);
      return;
    }
    alert(`Starting ${chapter.title} hands-on spreadsheet exercise.`);
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pb-28 select-none">

      {/* ─── 1. ANDROID TOP APP BAR ─── */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onBack();
            }}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 active:scale-95 transition-all"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-white leading-tight flex items-center gap-1.5">
              <span>Advanced Excel</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
                PRO 365
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">
              Module 3 of 10 • 27 Chapters • 20+ Hrs
            </p>
          </div>
        </div>

        {/* Telemetry badges */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black">
            <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400/80" />
            <span>{telemetry.coins}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-black">
            <Gem className="w-3.5 h-3.5 text-fuchsia-400 fill-fuchsia-400/80" />
            <span>{telemetry.gems}</span>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT SCROLL AREA ─── */}
      <div className="px-4 pt-3.5 space-y-4">

        {/* ─── 2. YOUTUBE / COURSERA STYLE HERO VIDEO CARD ─── */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-emerald-500/30 shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <img
              src="/images/dashboard/excel_hero_banner_2050.jpg"
              alt="Advanced Excel Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Glowing Big Play Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                setOpenChapterId(1);
              }}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all border-2 border-white/60"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>

            {/* Top Right Tag */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-emerald-200 text-[10px] font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Microsoft 365 Live</span>
            </div>

            {/* Duration / Title Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                <Table2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chapter 1: Intro to Excel</span>
              </div>
              <span className="px-2 py-0.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-[10px]">
                FREE LESSON
              </span>
            </div>
          </div>

          {/* Under-Banner Progress */}
          <div className="p-4 space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-extrabold text-white">Course Progress</span>
                <span className="font-black text-emerald-400">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(progressPercent, 4)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mt-1">
                <span>{doneLessons} of {totalLessons} Lessons</span>
                <span>7 Real-World Projects</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                playTactile();
                setOpenChapterId(1);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 text-white font-black text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume Chapter 1: Introduction to Excel</span>
            </button>
          </div>
        </div>

        {/* ─── 3. QUICK FILTER PILL TABS ─── */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs font-extrabold">
          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('all');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 transition-all border ${
              filterMode === 'all'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            All Chapters (27)
          </button>

          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('video');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1.5 transition-all border ${
              filterMode === 'video'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Videos (270+)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('mcq');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1.5 transition-all border ${
              filterMode === 'mcq'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <FileText className="w-3 h-3" />
            <span>MCQ Quizzes</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('game');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1.5 transition-all border ${
              filterMode === 'game'
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Formula Arenas</span>
          </button>
        </div>

        {/* ─── 4. ANDROID 27 CHAPTERS ACCORDION FEED ─── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              Excel Curriculum (27 Chapters)
            </h2>
            <span className="text-[10px] text-emerald-400 font-bold">
              {doneLessons} Completed
            </span>
          </div>

          {EXCEL_CHAPTERS.map((chapter, idx) => {
            const isOpen = openChapterId === chapter.id;
            const isFree = chapter.free || chapter.id === 1;

            return (
              <div
                key={chapter.id}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-emerald-500/40 shadow-xl'
                    : isFree
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-slate-950/60 border-slate-900 opacity-90'
                }`}
              >
                {/* Chapter Card Header */}
                <div
                  onClick={() => handleChapterClick(chapter)}
                  className="p-4 flex items-center justify-between cursor-pointer active:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                    <div
                      className="w-9 h-9 rounded-2xl flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm"
                      style={{
                        backgroundColor: isFree ? '#05966922' : '#1e293b',
                        color: isFree ? '#10b981' : '#94a3b8',
                        border: `1px solid ${isFree ? '#059669' : '#334155'}40`,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <strong className="text-xs font-extrabold text-white truncate block">
                        {chapter.title}
                      </strong>

                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-semibold">
                        <span className="text-slate-400">
                          {chapter.lessons.length} Lessons
                        </span>
                        {isFree ? (
                          <span className="px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-emerald-400 font-extrabold border border-emerald-500/30">
                            FREE
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.2 rounded-md bg-amber-500/10 text-amber-400 font-extrabold flex items-center gap-0.5 border border-amber-500/20">
                            <Lock className="w-2.5 h-2.5" />
                            <span>Pro</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 flex-shrink-0">
                    {!isFree ? (
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                    ) : isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Expanded Chapter Details */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/80 space-y-3.5 animate-fadeIn">
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                      {chapter.desc}
                    </p>

                    {/* Quick action buttons */}
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, chapter)}
                        className="py-2 px-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Video</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, chapter)}
                        className="py-2 px-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>MCQ</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, chapter)}
                        className="py-2 px-1 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Arena</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, chapter)}
                        className="py-2 px-1 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Formula</span>
                      </button>
                    </div>

                    {/* Lessons list */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                        Chapter Lessons ({chapter.lessons.length})
                      </span>
                      {chapter.lessons.map((lesson, lIdx) => (
                        <div
                          key={lIdx}
                          onClick={() => {
                            playTactile();
                            alert(`Playing lesson: ${lesson.title}`);
                          }}
                          className="p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 flex items-center justify-between text-xs cursor-pointer active:scale-98 transition-all"
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-2">
                            <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-400">
                              <Play className="w-2.5 h-2.5 fill-current" />
                            </div>
                            <span className="text-white font-medium truncate text-xs">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 flex-shrink-0">
                            {lesson.time}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        alert(`Starting ${chapter.title}`);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                    >
                      <span>Open Excel Workbook Practice</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── 5. AI EXCEL COPILOT CARD ─── */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-2xl flex-shrink-0">
              🤖
            </div>
            <div>
              <strong className="text-white font-black text-xs block">AI Excel Copilot</strong>
              <p className="text-[10px] text-slate-400 leading-tight">
                Ask formula doubts: XLOOKUP, Pivot Tables, Macros &amp; Charts.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              playTactile();
              onOpenAdvisor?.();
            }}
            className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex-shrink-0 shadow-md active:scale-95 transition-all cursor-pointer"
          >
            Ask AI
          </button>
        </div>

      </div>

    </div>
  );
};
