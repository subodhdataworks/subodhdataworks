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
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Bot,
  Clock,
  Award,
  Zap,
  FolderKanban,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { TOPICS, Topic, Lesson } from '../PythonChapterView';
import type { WorkspaceStepId } from '../PythonTopicWorkspace';
import { getLearnerTelemetry } from '../../../services/realAuthService';

export interface MobilePythonChapterViewProps {
  userName: string;
  onBack: () => void;
  onOpenTopic: (topicId: number, step?: WorkspaceStepId) => void;
  onOpenUnlockModal: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
}

export const MobilePythonChapterView: React.FC<MobilePythonChapterViewProps> = ({
  userName,
  onBack,
  onOpenTopic,
  onOpenUnlockModal,
  onOpenAdvisor,
}) => {
  const [openTopicId, setOpenTopicId] = useState<number | null>(1);
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

  const totalLessons = TOPICS.reduce((acc, t) => acc + t.lessons.length, 0);
  const doneLessons = TOPICS.reduce((acc, t) => {
    const isTopicDone = telemetry.completedTopics.includes(t.id);
    return acc + (isTopicDone ? t.lessons.length : t.lessons.filter((l) => l.status === 'completed').length);
  }, 0);
  const progressPercent = Math.round((doneLessons / totalLessons) * 100);

  // Play subtle tactile click
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
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // fallback
    }
  };

  const handleTopicClick = (topic: Topic) => {
    playTactile();
    if (!topic.free && topic.id !== 1) {
      onOpenUnlockModal(topic.title);
      return;
    }
    setOpenTopicId((prev) => (prev === topic.id ? null : topic.id));
  };

  const handleActionClick = (e: React.MouseEvent, topicId: number, step: WorkspaceStepId, isFree: boolean, title: string) => {
    e.stopPropagation();
    playTactile();
    if (!isFree && topicId !== 1) {
      onOpenUnlockModal(title);
      return;
    }
    onOpenTopic(topicId, step);
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
              <span>Python Mastery</span>
              <span className="px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-extrabold border border-blue-500/30">
                Core
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">
              Module 1 of 10 • 26 Chapters • 40+ Hrs
            </p>
          </div>
        </div>

        {/* Telemetry Coins & Gems Badges */}
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
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-blue-500/30 shadow-2xl">
          {/* 16:9 Aspect Ratio Banner Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <img
              src="/images/python_mastery_banner_hd.jpg"
              alt="Python Mastery Video Player"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Glowing Big Play Button (YouTube App Style) */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                onOpenTopic(1, 'learn');
              }}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all border-2 border-white/60"
              aria-label="Start Video"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>

            {/* Top Right Flagship Badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-cyan-300 text-[10px] font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>Python 3.12 Live</span>
            </div>

            {/* Video Duration / Chapter Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Topic 1: Foundations</span>
              </div>
              <span className="px-2 py-0.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-[10px]">
                100% FREE
              </span>
            </div>
          </div>

          {/* Under-Player Progress Bar & Quick Start */}
          <div className="p-4 space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-extrabold text-white">Course Progress</span>
                <span className="font-black text-cyan-400">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(progressPercent, 4)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mt-1">
                <span>{doneLessons} of {totalLessons} Lessons</span>
                <span>8 Real-World Projects</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                playTactile();
                onOpenTopic(1, 'learn');
              }}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-black text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume Topic 1: What is Programming?</span>
            </button>
          </div>
        </div>

        {/* ─── 3. QUICK FILTER PILL TABS (Horizontal Scroll) ─── */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs font-extrabold">
          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('all');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 transition-all border ${
              filterMode === 'all'
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm shadow-blue-500/30'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            All Chapters (26)
          </button>

          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('video');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1.5 transition-all border ${
              filterMode === 'video'
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Videos (260+)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('mcq');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1.5 transition-all border ${
              filterMode === 'mcq'
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
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
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Coding Games</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('code');
            }}
            className={`px-3.5 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1.5 transition-all border ${
              filterMode === 'code'
                ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>Code Lab</span>
          </button>
        </div>

        {/* ─── 4. ANDROID 26 CHAPTERS ACCORDION FEED ─── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              Curriculum &amp; Chapters (26)
            </h2>
            <span className="text-[10px] text-cyan-400 font-bold">
              {doneLessons} Completed
            </span>
          </div>

          {TOPICS.map((topic, idx) => {
            const isOpen = openTopicId === topic.id;
            const isFree = topic.free || topic.id === 1;
            const isDone = telemetry.completedTopics.includes(topic.id);
            const completedLessons = isDone
              ? topic.lessons.length
              : topic.lessons.filter((l) => l.status === 'completed').length;

            return (
              <div
                key={topic.id}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-blue-500/40 shadow-xl'
                    : isFree
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-950/60 border-slate-900 opacity-90'
                }`}
              >
                {/* Chapter Card Header */}
                <div
                  onClick={() => handleTopicClick(topic)}
                  className="p-4 flex items-center justify-between cursor-pointer active:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                    {/* Chapter Number Badge */}
                    <div
                      className="w-9 h-9 rounded-2xl flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm"
                      style={{
                        backgroundColor: isFree ? `${topic.color}22` : '#1e293b',
                        color: isFree ? topic.color : '#94a3b8',
                        border: `1px solid ${isFree ? topic.color : '#334155'}40`,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <strong className="text-xs font-extrabold text-white truncate block">
                          {topic.title}
                        </strong>
                      </div>

                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-semibold">
                        <span className="text-slate-400">
                          {topic.lessons.length} Lessons • {completedLessons} done
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

                  {/* Expand Chevron or Lock Icon */}
                  <div className="w-7 h-7 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 flex-shrink-0">
                    {!isFree ? (
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                    ) : isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Expanded Chapter Details */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/80 space-y-3.5 animate-fadeIn">
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                      {topic.desc}
                    </p>

                    {/* 4 Quick Action Touch Pills */}
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'learn', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-400 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Video</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'practice', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>MCQ</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'play', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-400 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Game</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'code', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold flex flex-col items-center gap-1 active:scale-95 transition-all"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </button>
                    </div>

                    {/* Lessons List (Vertical touch rows) */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                        Included Lessons ({topic.lessons.length})
                      </span>
                      {topic.lessons.map((lesson, lIdx) => (
                        <div
                          key={lIdx}
                          onClick={() => {
                            playTactile();
                            onOpenTopic(topic.id, 'learn');
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

                    {/* CTA Button to open interactive lab */}
                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        onOpenTopic(topic.id, 'learn');
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                    >
                      <span>Open Chapter Lab &amp; Video</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── 5. AI PYTHON MENTOR FLOAT CARD ─── */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-2xl flex-shrink-0">
              🤖
            </div>
            <div>
              <strong className="text-white font-black text-xs block">AI Python Tutor</strong>
              <p className="text-[10px] text-slate-400 leading-tight">
                Ask doubts, debug code errors or get hints 24/7.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              playTactile();
              onOpenAdvisor?.();
            }}
            className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex-shrink-0 shadow-md active:scale-95 transition-all cursor-pointer"
          >
            Ask AI
          </button>
        </div>

      </div>

    </div>
  );
};
