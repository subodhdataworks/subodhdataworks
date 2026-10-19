import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Play,
  Lock,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { TOPICS, Topic } from '../PythonChapterView';
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
}) => {
  // Start with Chapter 1 open by default
  const [openTopicId, setOpenTopicId] = useState<number | null>(1);
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
    } catch {}
  };

  const handleChapterToggle = (topic: Topic) => {
    playTactile();
    if (!topic.free && topic.id !== 1) {
      onOpenUnlockModal(topic.title);
      return;
    }
    setOpenTopicId(openTopicId === topic.id ? null : topic.id);
  };

  const handleTopicSelect = (topicId: number, isFree: boolean, title: string) => {
    playTactile();
    if (!isFree && topicId !== 1) {
      onOpenUnlockModal(title);
      return;
    }
    // Launch directly into Video Player workspace for this topic
    onOpenTopic(topicId, 'learn');
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pb-36 select-none">
      
      {/* ─── 1. TOP HEADER WITH BACK BUTTON ─── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-3.5 py-2.5 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onBack();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-sm font-black text-slate-900 leading-tight flex items-center gap-1.5">
              <span>Python Mastery</span>
              <span className="px-1.5 py-0.2 rounded-md bg-blue-100 text-blue-700 text-[9.5px] font-black">
                26 Chapters
              </span>
            </h1>
            <p className="text-[10px] text-slate-500 font-semibold">
              Tap any topic to play video, game & mock interview
            </p>
          </div>
        </div>

        {/* Progress Pill */}
        <div className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-700 font-black text-[11px] shrink-0">
          <span>{progressPercent}% Done</span>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="px-3.5 pt-3 space-y-3 max-w-md mx-auto text-left">

        {/* ─── 2. COMPACT ATTRACTIVE HERO BANNER (Generated 4K Compact Banner) ─── */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-md border border-slate-200">
          <div className="relative h-28 sm:h-32 w-full overflow-hidden">
            <img
              src="/images/python_mastery_compact_banner.jpg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/python_mastery_banner_hd.jpg';
              }}
              alt="Python Mastery Banner"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

            {/* Banner Text Overlays */}
            <div className="absolute inset-0 p-3 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-blue-500/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Module 1 • Core Python</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[9px] font-black">
                  ⭐ 100% Free Chapters
                </span>
              </div>

              <div>
                <h2 className="text-base font-black tracking-tight text-white drop-shadow-md">
                  Python Mastery Curriculum
                </h2>
                <p className="text-[10px] text-blue-200 font-semibold drop-shadow-sm">
                  Video Lessons ➔ Interactive Coding Game ➔ AI Mock Interview
                </p>
              </div>
            </div>
          </div>

          {/* Compact Progress Strip */}
          <div className="px-3 py-1.5 bg-slate-900 flex items-center justify-between text-[10px] font-bold text-slate-300">
            <span className="flex items-center gap-1 text-slate-300">
              <BookOpen className="w-3 h-3 text-sky-400" />
              <span>26 Chapters • 100+ Topics</span>
            </span>
            <span className="text-amber-400 font-black">
              {doneLessons}/{totalLessons} Completed
            </span>
          </div>
        </div>

        {/* ─── 3. CLEAN 26 CHAPTERS LIST (ONLY Chapter Name & Topics, NO Description, NO Video/Game Icons) ─── */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between px-0.5">
            <h2 className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
              All Chapters (01 to 26)
            </h2>
            <span className="text-[10px] text-slate-400 font-semibold">
              Click chapter to view topics
            </span>
          </div>

          {TOPICS.map((topic, idx) => {
            const isOpen = openTopicId === topic.id;
            const isFree = topic.free || topic.id === 1;
            const isDone = telemetry.completedTopics.includes(topic.id);
            const completedCount = isDone
              ? topic.lessons.length
              : topic.lessons.filter((l) => l.status === 'completed').length;

            return (
              <div
                key={topic.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/30 border-blue-400 shadow-sm'
                    : isFree
                    ? 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                    : 'bg-slate-50/70 border-slate-200/70'
                }`}
              >
                {/* Chapter Card Header: ONLY Chapter Name & Expand Icon (NO Descriptions, NO Action Icons) */}
                <div
                  onClick={() => handleChapterToggle(topic)}
                  className="p-3 flex items-center justify-between cursor-pointer active:bg-slate-100/60 transition-colors"
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                    {/* Chapter Number Badge */}
                    <div
                      className="w-7 h-7 rounded-xl flex items-center justify-center font-black text-[11px] flex-shrink-0 shadow-2xs"
                      style={{
                        backgroundColor: isFree ? `${topic.color}15` : '#f1f5f9',
                        color: isFree ? topic.color : '#64748b',
                        border: `1px solid ${isFree ? topic.color : '#cbd5e1'}40`,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-black text-slate-900 truncate">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                        <span>{topic.lessons.length} Topics</span>
                        {completedCount > 0 && (
                          <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            <span>{completedCount} done</span>
                          </span>
                        )}
                        {isFree ? (
                          <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 px-1 rounded">
                            FREE
                          </span>
                        ) : (
                          <span className="text-[9px] font-black text-amber-700 bg-amber-50 px-1 rounded flex items-center gap-0.5">
                            <Lock className="w-2 h-2" />
                            <span>PRO</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expand Chevron or Lock */}
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                    {!isFree ? (
                      <Lock className="w-3 h-3 text-amber-600" />
                    ) : isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                {/* Expanded Topics List (ONLY Topics: Tap to Launch Bunny Video -> Game -> Interview) */}
                {isOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-slate-200/80 space-y-1.5 animate-fadeIn">
                    <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-400 block pt-1">
                      Topics in this Chapter:
                    </span>

                    {topic.lessons.map((lesson, lIdx) => {
                      const isLessonDone = isDone || lesson.status === 'completed';

                      return (
                        <div
                          key={lIdx}
                          onClick={() => handleTopicSelect(topic.id, isFree, topic.title)}
                          className="p-2.5 rounded-xl bg-white hover:bg-blue-50/70 border border-slate-200/80 flex items-center justify-between text-xs cursor-pointer active:scale-98 transition-all shadow-2xs group"
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
                            <span className="w-5 h-5 rounded-lg bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-[10px] font-black text-slate-600 flex items-center justify-center flex-shrink-0 transition-colors">
                              {lIdx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-[9.5px] text-slate-400 font-semibold flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5" />
                              <span>{lesson.time}</span>
                            </span>

                            {/* Play Circle Icon */}
                            <div className="w-6 h-6 rounded-full bg-blue-600 group-hover:bg-blue-700 text-white flex items-center justify-center shadow-xs shrink-0">
                              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
