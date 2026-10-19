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
  BookOpen,
  Mic
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
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.04, now);
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
    setOpenTopicId(openTopicId === topic.id ? null : topic.id);
  };

  const handleActionClick = (
    e: React.MouseEvent,
    topicId: number,
    step: WorkspaceStepId,
    isFree: boolean,
    title: string
  ) => {
    e.stopPropagation();
    playTactile();
    if (!isFree && topicId !== 1) {
      onOpenUnlockModal(title);
      return;
    }
    onOpenTopic(topicId, step);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pb-36 select-none">
      
      {/* ─── 1. CLEAN LIGHT SUB-HEADER WITH BACK BUTTON ─── */}
      <div className="bg-white border-b border-slate-200/90 px-4 py-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onBack();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-slate-900 leading-tight flex items-center gap-1.5">
              <span>Python Mastery</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-extrabold border border-blue-200">
                Core
              </span>
            </h1>
            <p className="text-[11px] text-slate-500 font-semibold">
              Module 1 of 10 • 26 Chapters • 40+ Hrs
            </p>
          </div>
        </div>

        {/* Progress Chip */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-black text-xs">
          <span>{progressPercent}% Done</span>
        </div>
      </div>

      {/* ─── MAIN CONTENT SCROLL AREA ─── */}
      <div className="px-4 pt-3.5 space-y-4 max-w-md mx-auto text-left">

        {/* ─── 2. ATTRACTIVE HIGH-TECH HERO BANNER (3D Python + Quick Launchers) ─── */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-md">
          {/* 16:9 Aspect Ratio Hero Banner Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <img
              src="/images/python_mastery_banner_hd.jpg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/what_is_python_video_poster.jpg';
              }}
              alt="Python Mastery Banner"
              className="w-full h-full object-cover"
            />
            {/* Soft Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

            {/* Glowing Big Center Play Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                onOpenTopic(1, 'learn');
              }}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all border-2 border-white cursor-pointer group"
              aria-label="Start Video"
            >
              <Play className="w-6 h-6 fill-white ml-0.5 group-hover:scale-110 transition-transform" />
            </button>

            {/* Top Left: Live Status Badge */}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[9.5px] font-black flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Python 3.12 Enterprise</span>
            </div>

            {/* Top Right: 100% Free Foundation Chip */}
            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[9.5px] font-black flex items-center gap-1 shadow-xs border border-white/30">
              <span>⭐</span>
              <span>100% FREE</span>
            </div>

            {/* Video Duration / Chapter Pill */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white font-bold">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/15">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] font-black">Chapter 1: What is Programming?</span>
              </div>
              <span className="text-[9px] font-black text-amber-300 bg-black/60 px-2 py-0.5 rounded-lg border border-white/10">
                08:00 min
              </span>
            </div>
          </div>

          {/* Under-Player Content & 3 Quick Topic Launchers */}
          <div className="p-3.5 space-y-3">
            {/* Quick Launchers for Chapter 1: Video, Game, Mock Interview */}
            <div className="grid grid-cols-3 gap-1.5">
              {/* 1. Video Launcher */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  onOpenTopic(1, 'learn');
                }}
                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 text-blue-800 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span className="text-[10px] font-black leading-none">1. Video</span>
                <span className="text-[7.5px] font-bold text-blue-600">08:00 min</span>
              </button>

              {/* 2. Game Launcher */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  onOpenTopic(1, 'play');
                }}
                className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200/80 text-purple-800 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-black leading-none">2. Game</span>
                <span className="text-[7.5px] font-bold text-purple-600">Puzzle Quest</span>
              </button>

              {/* 3. Mock Interview Launcher */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  onOpenTopic(1, 'interview');
                }}
                className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <Mic className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-black leading-none">3. Interview</span>
                <span className="text-[7.5px] font-bold text-emerald-600">AI Recruiter</span>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="pt-0.5">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-extrabold text-slate-800">Module Progress</span>
                <span className="font-black text-blue-600">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(5, progressPercent)}%` }}
                />
              </div>
              <div className="flex justify-between text-[9.5px] text-slate-500 font-bold mt-1">
                <span>{doneLessons} of {totalLessons} Lessons Done</span>
                <span>8 Real-World Projects</span>
              </div>
            </div>

            {/* Main Action Callout */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                onOpenTopic(1, 'learn');
              }}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white font-black text-xs shadow-md shadow-blue-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume Chapter 1: What is Programming?</span>
            </button>
          </div>
        </div>

        {/* ─── 3. INTERACTIVE LEARNING MODES FILTER TABS ─── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('all');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 cursor-pointer ${
              filterMode === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
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
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 flex items-center gap-1 cursor-pointer ${
              filterMode === 'video'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Play className="w-3 h-3" />
            <span>Videos (260+)</span>
          </button>
          <button
            type="button"
            onClick={() => {
              playTactile();
              setFilterMode('mcq');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 flex items-center gap-1 cursor-pointer ${
              filterMode === 'mcq'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
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
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 flex items-center gap-1 cursor-pointer ${
              filterMode === 'game'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
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
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex-shrink-0 flex items-center gap-1 cursor-pointer ${
              filterMode === 'code'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>Code Lab</span>
          </button>
        </div>

        {/* ─── 4. LIGHT 26 CHAPTERS ACCORDION FEED ─── */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black text-slate-600 uppercase tracking-wider">
              Curriculum &amp; Chapters (26)
            </h2>
            <span className="text-[10px] text-blue-600 font-extrabold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
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
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/20 border-blue-400 shadow-sm'
                    : isFree
                    ? 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                    : 'bg-slate-50/70 border-slate-200/70 opacity-90'
                }`}
              >
                {/* Chapter Card Header */}
                <div
                  onClick={() => handleTopicClick(topic)}
                  className="p-3.5 flex items-center justify-between cursor-pointer active:bg-slate-100/60 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                    {/* Chapter Number Badge */}
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0 shadow-2xs"
                      style={{
                        backgroundColor: isFree ? `${topic.color}15` : '#f1f5f9',
                        color: isFree ? topic.color : '#64748b',
                        border: `1px solid ${isFree ? topic.color : '#cbd5e1'}40`,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <strong className="text-xs font-black text-slate-900 truncate block">
                        {topic.title}
                      </strong>

                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-semibold">
                        <span className="text-slate-500">
                          {topic.lessons.length} Lessons • {completedLessons} done
                        </span>
                        {isFree ? (
                          <span className="px-1.5 py-0.2 rounded-md bg-emerald-50 text-emerald-700 font-black border border-emerald-200">
                            FREE
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.2 rounded-md bg-amber-50 text-amber-700 font-black flex items-center gap-0.5 border border-amber-200">
                            <Lock className="w-2.5 h-2.5" />
                            <span>Pro</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expand Chevron or Lock Icon */}
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                    {!isFree ? (
                      <Lock className="w-3.5 h-3.5 text-amber-600" />
                    ) : isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Expanded Chapter Details */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-200/80 space-y-3.5 animate-fadeIn">
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                      {topic.desc}
                    </p>

                    {/* 4 Quick Action Touch Pills */}
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'learn', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-black flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Video</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'play', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Game</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'interview', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer"
                      >
                        <Mic className="w-3.5 h-3.5" />
                        <span>Interview</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleActionClick(e, topic.id, 'practice', isFree, topic.title)}
                        className="py-2 px-1 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-black flex flex-col items-center gap-1 active:scale-95 transition-all cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Practice</span>
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
                            handleActionClick(
                              { stopPropagation: () => {} } as any,
                              topic.id,
                              'learn',
                              isFree,
                              topic.title
                            );
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 flex items-center justify-between text-xs cursor-pointer active:scale-98 transition-all"
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
                            <span className="w-5 h-5 rounded-full bg-white border border-slate-200 text-[10px] font-extrabold text-slate-600 flex items-center justify-center flex-shrink-0">
                              {lIdx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-800 truncate">
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-[10px] text-slate-500 font-semibold">{lesson.time}</span>
                            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xs">
                              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
