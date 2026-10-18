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
      borderAccent: 'border-blue-400/80',
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
      borderAccent: 'border-purple-400/80',
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
      borderAccent: 'border-emerald-400/80',
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
      borderAccent: 'border-amber-400/80',
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
      borderAccent: 'border-indigo-400/80',
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
      borderAccent: 'border-rose-400/80',
      iconUrl: '/images/icons3d/icon_10_placement.png',
      altIcon: '💼',
    },
  ];

  return (
    <div className="w-full pb-36 pt-2 px-3.5 space-y-4 text-left select-none max-w-md mx-auto">
      
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
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-orange-600 shadow-2xs">
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
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all cursor-pointer"
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
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all cursor-pointer"
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
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all cursor-pointer"
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
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-sky-400 to-blue-600 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
              🤖
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-slate-800">AI Mentor</span>
        </button>

        {/* Shortcut 5: Placement */}
        <button
          type="button"
          onClick={() => {
            playClick();
            if (onOpenPlacement) onOpenPlacement(); else window.location.hash = '#placement';
          }}
          className="flex flex-col items-center gap-1 flex-shrink-0 active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-13 h-13 rounded-full p-0.5 bg-gradient-to-tr from-rose-500 to-orange-400 shadow-sm flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl">
              💼
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-slate-800">Jobs</span>
        </button>
      </div>

      {/* 3. Hero Feature Card: Python Course (Ultra-Modern Light Futuristic Card) */}
      <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50/80 to-indigo-50/90 text-slate-900 p-5 shadow-lg shadow-blue-500/10 border border-blue-200/80">
        {/* Soft Ambient Light Glow Blobs */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black shadow-xs shadow-blue-500/25">
              <Sparkles className="w-3 h-3 text-white" />
              <span>100% Free Core Course</span>
            </div>

            <div className="text-[11px] font-extrabold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
              {telemetry.completedTopics.length}/10 Topics Done
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                Python Mastery with GenAI
              </h3>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed mt-1">
                Interactive videos, 8 coding games, AI mentor, and real-world project portfolio.
              </p>
            </div>
            {/* Cute 3D AI Robot Avatar Pill (Matches screenshot background) */}
            <div className="w-14 h-14 rounded-2xl bg-white/90 border border-blue-200/80 shadow-sm flex items-center justify-center flex-shrink-0 text-3xl">
              🤖
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-extrabold text-slate-500">
              <span>Learning Progress</span>
              <span className="text-blue-600 font-black">
                {Math.min(100, Math.round((telemetry.completedTopics.length / 10) * 100))}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.max(6, Math.min(100, Math.round((telemetry.completedTopics.length / 10) * 100)))}%`,
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
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Continue Learning Python</span>
            <ArrowRight className="w-4 h-4 ml-auto" />
          </button>
        </div>
      </div>

      {/* 4. Fintech Referral Mini-Card (Light Mode PhonePe / Google Pay Card) */}
      <div className="rounded-[24px] bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white p-4 text-slate-900 shadow-sm border border-emerald-200/90">
        <div className="flex items-center justify-between mb-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black shadow-2xs">
            <span>💸 Refer & Earn</span>
          </div>

          <span className="text-[11px] font-black text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
            ₹100 Per Free Signup
          </span>
        </div>

        <h4 className="text-base font-black tracking-tight leading-tight mb-1 text-slate-900">
          Share your link with classmates & friends
        </h4>
        <p className="text-[11px] text-slate-600 font-semibold mb-3">
          When anyone joins with your link, you get ₹100 instantly in your wallet!
        </p>

        {/* 2 Big Action Buttons: WhatsApp + Copy */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 shadow-xs transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-emerald-800 font-black text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-emerald-300 shadow-2xs cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-emerald-600" />}
            <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>

      {/* 5. Android Course Modules Section Header */}
      <div className="flex items-center justify-between pt-1">
        <h3 className="text-base font-black text-slate-900 tracking-tight">
          Curriculum Modules
        </h3>
        <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
          6 Modules Total
        </span>
      </div>

      {/* 6. Modules Vertical Card Feed */}
      <div className="space-y-2.5">
        {modules.map((mod) => (
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
              mod.isUnlocked ? 'border-blue-300/80 bg-blue-50/20' : 'border-slate-200'
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
                <span className="text-[10px] text-slate-500 font-extrabold">{mod.duration}</span>
              </div>

              <h4 className="text-xs font-black text-slate-900 leading-tight truncate">
                {mod.title}
              </h4>

              <p className="text-[10px] text-slate-500 font-semibold truncate mt-0.5">
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

    </div>
  );
};
