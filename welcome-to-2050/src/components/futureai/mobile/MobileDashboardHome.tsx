import React, { useState } from 'react';
import {
  Play,
  Lock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Gamepad2,
  FileCode,
  Users,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Video,
  ListOrdered,
  Bot
} from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

interface MobileDashboardHomeProps {
  userName: string;
  telemetry: LearnerTelemetry;
  onStartPython: () => void;
  onOpenSql?: () => void;
  onOpenExcel?: () => void;
  onOpenPowerBi?: () => void;
  onOpenGenAi?: () => void;
  onOpenPlacement?: () => void;
  onOpenArena: () => void;
  onOpenEarn: () => void;
  onOpenAdvisor?: () => void;
  onOpenLockedModule: (moduleName: string) => void;
}

export const MobileDashboardHome: React.FC<MobileDashboardHomeProps> = ({
  userName,
  telemetry,
  onStartPython,
  onOpenSql,
  onOpenExcel,
  onOpenPowerBi,
  onOpenGenAi,
  onOpenPlacement,
  onOpenArena,
  onOpenEarn,
  onOpenAdvisor,
  onOpenLockedModule,
}) => {
  const { playClick } = useThemeAccent();

  // 6 Interactive Learning Modes (1:1 with Website Home)
  const learningModes = [
    {
      id: 'video',
      title: 'Smart Video',
      sub: 'Learn Step-by-Step',
      icon: Video,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      action: onStartPython,
    },
    {
      id: 'mcq',
      title: 'MCQ Practice',
      sub: 'Test & Improve',
      icon: ListOrdered,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      action: () => {
        playClick();
        window.location.hash = '#practice';
      },
    },
    {
      id: 'game',
      title: 'Play Game',
      sub: 'Learn with Fun',
      icon: Gamepad2,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      action: onOpenArena,
    },
    {
      id: 'code',
      title: 'Practice Code',
      sub: 'Write & Solve',
      icon: FileCode,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      action: () => {
        playClick();
        window.location.hash = '#code';
      },
    },
    {
      id: 'interview',
      title: 'Mock Interview',
      sub: 'Real Questions',
      icon: Users,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      action: () => {
        playClick();
        window.location.hash = '#mockinterview';
      },
    },
    {
      id: 'job',
      title: 'Get Job',
      sub: '6 LPA – 15 LPA',
      icon: Briefcase,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      action: () => {
        if (onOpenPlacement) onOpenPlacement(); else window.location.hash = '#placement';
      },
    },
  ];

  // Core Curriculum Courses
  const courses = [
    {
      id: 'python',
      title: 'Python Mastery with GenAI',
      subtitle: 'From Basics to Real-World Projects & 8 Coding Games',
      tag: 'Flagship Core',
      duration: '40+ Hours • 260 Lessons',
      isUnlocked: true,
      badgeColor: 'bg-blue-600 text-white',
      borderAccent: 'border-blue-400',
      icon: '🐍',
      progress: Math.min(100, Math.round((telemetry.completedTopics.length / 10) * 100)),
      action: onStartPython,
    },
    {
      id: 'sql',
      title: 'SQL & Relational Databases',
      subtitle: 'PostgreSQL, Joins, Window Functions & Business Analytics',
      tag: 'Job Ready Track',
      duration: '25 Hours • 180 Lessons',
      isUnlocked: true,
      badgeColor: 'bg-purple-600 text-white',
      borderAccent: 'border-purple-300',
      icon: '🗄️',
      progress: 0,
      action: () => (onOpenSql ? onOpenSql() : onOpenLockedModule('SQL & Databases')),
    },
    {
      id: 'excel',
      title: 'Advanced Excel & Business Dashboards',
      subtitle: 'Formulas, Pivot Tables, XLOOKUP & Data Modeling',
      tag: 'Industry Essential',
      duration: '20 Hours • 140 Lessons',
      isUnlocked: true,
      badgeColor: 'bg-emerald-600 text-white',
      borderAccent: 'border-emerald-300',
      icon: '📊',
      progress: 0,
      action: () => (onOpenExcel ? onOpenExcel() : onOpenLockedModule('Advanced Excel')),
    },
    {
      id: 'powerbi',
      title: 'Power BI & Interactive Data Storytelling',
      subtitle: 'DAX Measures, Live Dashboards & Executive Reports',
      tag: 'BI Track',
      duration: '28 Hours • 160 Lessons',
      isUnlocked: true,
      badgeColor: 'bg-amber-600 text-white',
      borderAccent: 'border-amber-300',
      icon: '📈',
      progress: 0,
      action: () => (onOpenPowerBi ? onOpenPowerBi() : onOpenLockedModule('Power BI')),
    },
    {
      id: 'genai',
      title: 'Generative AI & LLM Automation',
      subtitle: 'Prompt Engineering, LangChain & OpenAI API Pipelines',
      tag: 'Futuristic Track',
      duration: '32 Hours • 190 Lessons',
      isUnlocked: true,
      badgeColor: 'bg-indigo-600 text-white',
      borderAccent: 'border-indigo-300',
      icon: '🤖',
      progress: 0,
      action: () => (onOpenGenAi ? onOpenGenAi() : onOpenLockedModule('Generative AI')),
    },
    {
      id: 'placement',
      title: 'Placement Assistance & Job Drives',
      subtitle: '6 LPA – 15 LPA Guarantee, AI Mock Prep & Active Openings',
      tag: 'Career Support',
      duration: '100% Free Prep • Active Drives',
      isUnlocked: true,
      badgeColor: 'bg-rose-600 text-white',
      borderAccent: 'border-rose-300',
      icon: '💼',
      progress: 0,
      action: () => (onOpenPlacement ? onOpenPlacement() : onOpenLockedModule('Placement')),
    },
  ];

  return (
    <div className="w-full pb-32 pt-2 px-3.5 space-y-4 text-left select-none max-w-md mx-auto">
      
      {/* 1. Website Style Hero Header Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/90 via-sky-50/70 to-indigo-50/80 border border-blue-200/80 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-black shadow-2xs mb-2">
          <Sparkles className="w-3 h-3 text-white" />
          <span>Job-Ready Learning Platform</span>
        </div>
        
        <h2 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
          Play Coding Games.<br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Build Real Skills. Get Your Dream Job.
          </span>
        </h2>
        
        <p className="text-xs text-slate-600 font-semibold mt-1.5 leading-relaxed">
          Master Python, SQL, Excel, Power BI &amp; Statistics with AI-powered interactive learning and placement guarantee.
        </p>
      </div>

      {/* 2. 6 Interactive Learning Modes (2x3 Grid matching Website) */}
      <div>
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
          Interactive Learning Modes
        </h3>
        
        <div className="grid grid-cols-3 gap-2">
          {learningModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  playClick();
                  mode.action();
                }}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all active:scale-95 shadow-2xs ${mode.color}`}
              >
                <Icon className="w-5 h-5 mb-1 stroke-[2.2]" />
                <span className="text-[11px] font-black leading-tight text-slate-900">
                  {mode.title}
                </span>
                <span className="text-[9px] font-bold text-slate-500 leading-none mt-0.5">
                  {mode.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Flagship Curriculum Courses (Cards matching Website) */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-slate-900 tracking-tight">
            Curriculum Courses
          </h3>
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
            6 Full Tracks
          </span>
        </div>

        <div className="space-y-2.5">
          {courses.map((c) => (
            <div
              key={c.id}
              onClick={() => {
                playClick();
                c.action();
              }}
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-sm cursor-pointer transition-all active:scale-[0.99] flex items-center gap-3.5"
            >
              {/* 3D Emoji Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-2xl flex-shrink-0 shadow-2xs">
                {c.icon}
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-md ${c.badgeColor}`}>
                    {c.tag}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 truncate">
                    {c.duration}
                  </span>
                </div>

                <h4 className="text-xs font-black text-slate-900 leading-tight truncate">
                  {c.title}
                </h4>

                <p className="text-[10px] font-semibold text-slate-500 truncate mt-0.5">
                  {c.subtitle}
                </p>

                {/* Progress bar if started */}
                {c.progress > 0 && (
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-black text-blue-600">{c.progress}%</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
