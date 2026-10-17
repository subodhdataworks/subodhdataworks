import React from 'react';
import { Trophy, CheckCircle2, ChevronRight, RotateCcw, Bot, Sparkles, TrendingUp, Award, ArrowRight } from 'lucide-react';

interface TopicScoreDashboardProps {
  onContinueNextTopic: () => void;
  onPracticeAgain: () => void;
  userName?: string;
  mcqScore?: number;
  topicTitle?: string;
  nextTopicTitle?: string;
}

export const TopicScoreDashboard: React.FC<TopicScoreDashboardProps> = ({
  onContinueNextTopic,
  onPracticeAgain,
  userName = 'Subodh',
  mcqScore = 4,
  topicTitle = 'Introduction to Python',
  nextTopicTitle = 'Python Syntax & Variables'
}) => {
  return (
    <div className="space-y-6 text-left">
      {/* Top Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm shadow-xs">
            🏆
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              {topicTitle} — Your Score
            </h2>
            <p className="text-xs text-slate-500">
              Topic performance analysis, AI recruiter evaluation, and next learning milestone.
            </p>
          </div>
        </div>

        <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black self-start sm:self-auto flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          Python Foundation: Strong
        </span>
      </div>

      {/* Main Score Hero Card */}
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-center bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white rounded-3xl p-5 sm:p-6 shadow-lg border border-slate-800">
        {/* Overall Score Circle */}
        <div className="sm:col-span-2 flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-slate-800 pb-4 sm:pb-0 sm:pr-4">
          <div className="relative w-20 h-20 rounded-full bg-blue-500/10 border-4 border-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-400/20">
            <span className="text-2xl font-black text-white">86</span>
          </div>
          <div>
            <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider block">
              Overall Topic Score
            </span>
            <span className="text-xl font-black text-white mt-0.5 block">
              86 / 100
            </span>
            <span className="text-[11px] text-emerald-300 font-bold block mt-1">
              ✓ Top 15% of learners
            </span>
          </div>
        </div>

        {/* 4 Score Breakdown Cards */}
        <div className="sm:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">MCQ</span>
            <span className="text-lg font-black text-white mt-0.5 block">{mcqScore} / 5</span>
            <span className="text-[10px] text-emerald-400 font-bold">Passed</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Python Game</span>
            <span className="text-lg font-black text-white mt-0.5 block">3 / 3</span>
            <span className="text-[10px] text-emerald-400 font-bold">All Badges</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Coding</span>
            <span className="text-lg font-black text-white mt-0.5 block">5 / 5</span>
            <span className="text-[10px] text-emerald-400 font-bold">100% Tests</span>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Interview</span>
            <span className="text-lg font-black text-white mt-0.5 block">82 / 100</span>
            <span className="text-[10px] text-indigo-300 font-bold">Strong</span>
          </div>
        </div>
      </div>

      {/* AI Feedback & Pedagogical Summary Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-purple-50/80 border border-blue-200/80 flex items-start gap-4">
        <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
          <Bot className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-blue-900">AI Mentor Feedback</span>
            <span className="text-[10px] font-extrabold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200 shadow-3xs">
              Verified Analysis
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            "You understand the basic Python concepts well. Continue practicing variables, syntax and small coding problems to build confidence."
          </p>
        </div>
      </div>

      {/* 5 Milestone Checkmarks Grid */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-3">
          Completed Topic Milestones
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {[
            { label: 'Video Completed', icon: '▶' },
            { label: 'MCQ Completed', icon: '❓' },
            { label: 'Game Completed', icon: '🐍' },
            { label: 'Coding Completed', icon: '</>' },
            { label: 'Interview Completed', icon: '🎤' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-800 shadow-3xs"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-[11px] font-extrabold truncate">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          data-testid="practice-again-btn"
          onClick={onPracticeAgain}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Practice Again</span>
        </button>

        <button
          data-testid="continue-next-topic-btn"
          onClick={onContinueNextTopic}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 group"
        >
          <span>Continue to {nextTopicTitle}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
