import React, { useState } from 'react';
import {
  Play,
  Lock,
  Sparkles,
  ArrowRight,
  Share2,
  Copy,
  Check,
  Flame,
  Award,
  BookOpen,
  Gamepad2,
  IndianRupee,
  Bot,
  FileText,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { LearnerTelemetry, getUserReferralCode } from '../../../services/realAuthService';
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
  const [copiedLink, setCopiedLink] = useState(false);

  // Referral link for 1-click sharing
  const refCode = getUserReferralCode(userName);
  const refUrl = `https://futureitindustry.com/?ref=${refCode}`;

  const handleCopyLink = () => {
    playClick?.();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(refUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleWhatsAppShare = () => {
    playClick?.();
    const msg = encodeURIComponent(
      `🚀 Join FUTURE IT INDUSTRY with me! Master Python, GenAI & Data Analytics. Sign up free here: ${refUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  // Modules list for Android feed
  const modules = [
    {
      id: 'python',
      title: 'Python Data Analytics & Automation',
      subtitle: 'From Basics to Real-World Projects & 8 Coding Games',
      tag: 'Flagship Core',
      isUnlocked: true,
      duration: '40+ Hours',
      badgeColor: 'bg-blue-600 text-white',
      borderAccent: 'border-blue-500/80',
      iconUrl: '/images/icons3d/icon_01_python.png',
      altIcon: '🐍',
    },
    {
      id: 'sql',
      title: 'SQL & Relational Databases',
      subtitle: 'PostgreSQL, Window Functions & Real Business Queries',
      tag: 'Job Ready Track',
      isUnlocked: true,
      duration: '25 Hours',
      badgeColor: 'bg-purple-600 text-white',
      borderAccent: 'border-purple-500/80',
      iconUrl: '/images/icons3d/icon_02_sql.png',
      altIcon: '🗄️',
    },
    {
      id: 'excel',
      title: 'Advanced Excel & Business Dashboards',
      subtitle: 'Formulas, Pivot Tables, XLOOKUP, Data Modeling',
      tag: 'Industry Essential',
      isUnlocked: true,
      duration: '20 Hours',
      badgeColor: 'bg-emerald-600 text-white',
      borderAccent: 'border-emerald-500/80',
      iconUrl: '/images/icons3d/icon_03_excel.png',
      altIcon: '📊',
    },
    {
      id: 'powerbi',
      title: 'Power BI & Interactive Data Storytelling',
      subtitle: 'DAX Measures, Live Dashboards & Executive Reports',
      tag: 'BI Track',
      isUnlocked: true,
      duration: '28 Hours',
      badgeColor: 'bg-amber-600 text-white',
      borderAccent: 'border-amber-500/80',
      iconUrl: '/images/icons3d/icon_04_powerbi.png',
      altIcon: '📈',
    },
    {
      id: 'genai',
      title: 'Generative AI & LLM Automation',
      subtitle: 'Prompt Engineering, LangChain & OpenAI API Pipelines',
      tag: 'Futuristic Track',
      isUnlocked: true,
      duration: '32 Hours',
      badgeColor: 'bg-indigo-600 text-white',
      borderAccent: 'border-indigo-500/80',
      iconUrl: '/images/icons3d/icon_06_genai.png',
      altIcon: '🤖',
    },
    {
      id: 'placement',
      title: 'Placement Assistance & Job Drives',
      subtitle: '6 LPA – 15 LPA Guarantee, AI Mock Prep & Active Openings',
      tag: 'Career Support',
      isUnlocked: true,
      duration: '100% Free Prep',
      badgeColor: 'bg-rose-600 text-white',
      borderAccent: 'border-rose-500/80',
      iconUrl: '/images/icons3d/icon_10_placement.png',
      altIcon: '💼',
    },
  ];

  return (
    <div className="w-full pb-28 pt-2 px-3.5 space-y-4 text-left select-none max-w-md mx-auto">
      
      {/* 1. Android Greeting Banner */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
            Hello, {userName} 👋
          </h2>
          <p className="text-xs font-semibold text-slate-500">
            Let's build high-income tech skills today!
          </p>
        </div>

        {/* Daily Streak Chip */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 shadow-2xs">
          <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-bounce" />
          <span className="text-xs font-black">3 Days</span>
        </div>
      </div>

      {/* 2. Android Story Circles / Quick Shortcuts (Horizontal Scroll) */}
      <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none pt-1">
        {/* Shortcut 1: Python */}
        <button
          type="button"
          onClick={() => {
            playClick();
            onStartPython();
          }}
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
              🐍
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-slate-800">Python</span>
        </button>

        {/* Shortcut 2: Games Arena */}
        <button
          type="button"
          onClick={() => {
            playClick();
            onOpenArena();
          }}
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-purple-600 to-pink-500 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
              🎮
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-slate-800">Arena</span>
        </button>

        {/* Shortcut 3: Earn ₹100 */}
        <button
          type="button"
          onClick={() => {
            playClick();
            onOpenEarn();
          }}
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-black text-lg">
              ₹
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-emerald-600">Earn ₹100</span>
        </button>

        {/* Shortcut 4: AI Advisor */}
        <button
          type="button"
          onClick={() => {
            playClick?.();
            onOpenAdvisor?.();
          }}
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-sky-400 to-blue-600 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
              🤖
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-slate-800">AI Mentor</span>
        </button>

        {/* Shortcut 5: ATS Resume */}
        <button
          type="button"
          onClick={() => {
            playClick();
            window.location.hash = '#ats-resume-checker';
          }}
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-slate-400 to-slate-700 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
              📄
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-slate-800">ATS Resume</span>
        </button>
      </div>

      {/* 3. Hero Feature Card: Python Course (Android EdTech Card) */}
      <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-5 shadow-xl shadow-blue-950/20 border border-blue-500/30">
        {/* Glow Blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-sky-300 text-[10px] font-extrabold border border-blue-400/30">
              <Sparkles className="w-3 h-3 text-sky-300" />
              <span>Free Unlocked Course</span>
            </div>

            <div className="text-[11px] font-bold text-slate-300">
              {telemetry.completedTopics.length}/10 Topics
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-white tracking-tight leading-snug">
              Python Mastery with GenAI
            </h3>
            <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
              Interactive videos, 8 coding games, AI mentor, and real project certifications.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-bold text-slate-400">
              <span>Course Progress</span>
              <span className="text-sky-300">
                {Math.min(100, Math.round((telemetry.completedTopics.length / 10) * 100))}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 transition-all duration-500"
                style={{
                  width: `${Math.max(5, Math.min(100, Math.round((telemetry.completedTopics.length / 10) * 100)))}%`,
                }}
              />
            </div>
          </div>

          {/* Android Continue Button */}
          <button
            type="button"
            onClick={() => {
              playClick();
              onStartPython();
            }}
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-blue-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Continue Learning Python</span>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </button>
        </div>
      </div>

      {/* 4. Fintech Referral Mini-Card (Google Pay / PhonePe Style) */}
      <div className="rounded-[24px] bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 p-4 text-white shadow-lg shadow-emerald-600/15">
        <div className="flex items-center justify-between mb-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-black">
            <span>💸 Refer & Earn</span>
          </div>

          <span className="text-[11px] font-bold text-emerald-100">
            ₹100 Per Free Signup
          </span>
        </div>

        <h4 className="text-base font-black tracking-tight leading-tight mb-1">
          Share your link with classmates & friends
        </h4>
        <p className="text-[11px] text-emerald-100 mb-3">
          When anyone joins with your link, you get ₹100 instantly in your wallet!
        </p>

        {/* 2 Big Action Buttons: WhatsApp + Copy */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="py-2.5 px-3 rounded-xl bg-white text-emerald-800 font-extrabold text-xs flex items-center justify-center gap-1.5 active:scale-95 shadow-sm transition-all"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="py-2.5 px-3 rounded-xl bg-emerald-800/60 hover:bg-emerald-800/80 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-emerald-400/40"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>

      {/* 5. Android Course Modules Section Header */}
      <div className="flex items-center justify-between pt-1">
        <h3 className="text-base font-black text-slate-900 tracking-tight">
          Curriculum Modules
        </h3>
        <span className="text-xs font-bold text-blue-600">
          6 Modules Total
        </span>
      </div>

      {/* 6. Modules Vertical Card Feed */}
      <div className="space-y-2.5">
        {modules.map((mod, idx) => (
          <div
            key={mod.id}
            onClick={() => {
              playClick();
              if (mod.id === 'python') {
                onStartPython();
              } else if (mod.id === 'sql') {
                if (onOpenSql) onOpenSql(); else onOpenLockedModule(mod.title);
              } else if (mod.id === 'excel') {
                if (onOpenExcel) onOpenExcel(); else onOpenLockedModule(mod.title);
              } else if (mod.id === 'powerbi') {
                if (onOpenPowerBi) onOpenPowerBi(); else onOpenLockedModule(mod.title);
              } else if (mod.id === 'genai') {
                if (onOpenGenAi) onOpenGenAi(); else onOpenLockedModule(mod.title);
              } else if (mod.id === 'placement') {
                if (onOpenPlacement) onOpenPlacement(); else onOpenLockedModule(mod.title);
              } else {
                onOpenLockedModule(mod.title);
              }
            }}
            className={`p-3.5 rounded-2xl bg-white border transition-all active:scale-98 cursor-pointer flex items-center gap-3 shadow-xs hover:shadow-sm ${
              mod.isUnlocked ? 'border-blue-400/80 bg-blue-50/20' : 'border-slate-200'
            }`}
          >
            {/* Module Icon or 3D badge */}
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-2xs border border-slate-200/80">
              <span className="text-2xl">{mod.altIcon}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-md ${mod.badgeColor}`}>
                  {mod.tag}
                </span>
                <span className="text-[10px] text-slate-400 font-bold">{mod.duration}</span>
              </div>

              <h4 className="text-xs font-black text-slate-900 leading-tight truncate">
                {mod.title}
              </h4>

              <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                {mod.subtitle}
              </p>
            </div>

            {/* Action Indicator */}
            <div className="flex-shrink-0">
              {mod.isUnlocked ? (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center border border-slate-200">
                  <Lock className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button (FAB) for AI Mentor */}
      <button
        type="button"
        onClick={() => {
          playClick?.();
          onOpenAdvisor?.();
        }}
        className="fixed bottom-18 right-4 z-40 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-xs shadow-xl shadow-blue-500/30 flex items-center gap-2 active:scale-95 transition-all border border-white/40 animate-pulse"
      >
        <Bot className="w-4 h-4" />
        <span>Ask AI Mentor</span>
      </button>
    </div>
  );
};
