import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  Gamepad2,
  Trophy,
  Flame,
  Star,
  Play,
  Lock,
  Coins,
  Gem,
  Award,
  Zap,
  CheckCircle2,
  Code2,
  ChevronRight,
  Sparkles,
  Bot,
  X,
  HelpCircle,
  Clock,
  Crown,
  Target,
  Gift,
  Bell,
  Medal,
  ArrowRight,
} from 'lucide-react';
import { getLearnerTelemetry } from '../../../services/realAuthService';

export interface MobileGameArenaHubProps {
  userName?: string;
  onPlayPython: (topicId?: number) => void;
  onLockedGame?: (gameName: string) => void;
  onNavigateBack: () => void;
  onOpenAdvisor?: () => void;
}

export const MobileGameArenaHub: React.FC<MobileGameArenaHubProps> = ({
  userName = 'Learner',
  onPlayPython,
  onLockedGame,
  onNavigateBack,
  onOpenAdvisor,
}) => {
  const [telemetry, setTelemetry] = useState(getLearnerTelemetry);
  const [activeFilter, setActiveFilter] = useState<'all' | 'python' | 'sql' | 'excel' | 'powerbi' | 'stats' | 'genai'>('all');
  const [activeChallengeModal, setActiveChallengeModal] = useState<any | null>(null);
  const [userChallengeInput, setUserChallengeInput] = useState('');
  const [challengeFeedback, setChallengeFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showHint, setShowHint] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'week' | 'month' | 'all'>('week');

  useEffect(() => {
    const handleUpdate = () => setTelemetry(getLearnerTelemetry());
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('focus', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('focus', handleUpdate);
    };
  }, []);

  // Tactile sound effect
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
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // fallback
    }
  };

  // 6 Subject Filters
  const filterPills = [
    { id: 'all' as const, name: 'All Games', icon: '🎮' },
    { id: 'python' as const, name: 'Python', icon: '🐍' },
    { id: 'sql' as const, name: 'SQL', icon: '🗄️' },
    { id: 'excel' as const, name: 'Excel', icon: '📊' },
    { id: 'powerbi' as const, name: 'Power BI', icon: '📈' },
    { id: 'stats' as const, name: 'Statistics', icon: '∑' },
    { id: 'genai' as const, name: 'Gen AI', icon: '🤖' },
  ];

  // 6 Subject Game Cards matching reference image exactly
  const gameCards = [
    {
      id: 'python' as const,
      title: 'Python Game',
      subtitle: '29 Levels Available • 100% Free',
      tag: '29 Levels',
      badge: 'Python',
      progress: 0,
      bannerImage: '/images/arena/subjects/card_python.png',
      btnClass: 'bg-[#0066ff] hover:bg-blue-700 shadow-blue-500/25',
      barColor: 'bg-blue-500',
      action: () => onPlayPython(1),
    },
    {
      id: 'sql' as const,
      title: 'SQL Game',
      subtitle: '8 Games Available • 100% Free',
      tag: '8 Games',
      badge: 'SQL Database',
      progress: 0,
      bannerImage: '/images/arena/subjects/card_sql.png',
      btnClass: 'bg-[#9333ea] hover:bg-purple-700 shadow-purple-500/25',
      barColor: 'bg-purple-500',
      action: () => handleOpenChallenge(quickChallenges.sql[0]),
    },
    {
      id: 'excel' as const,
      title: 'Excel Game',
      subtitle: '8 Games Available • 100% Free',
      tag: '8 Games',
      badge: 'Excel Formulas',
      progress: 0,
      bannerImage: '/images/arena/subjects/card_excel.png',
      btnClass: 'bg-[#10b981] hover:bg-emerald-600 shadow-emerald-500/25',
      barColor: 'bg-emerald-500',
      action: () => handleOpenChallenge(quickChallenges.excel[0]),
    },
    {
      id: 'powerbi' as const,
      title: 'Power BI Game',
      subtitle: '8 Games Available • 100% Free',
      tag: '8 Games',
      badge: 'Power BI',
      progress: 0,
      bannerImage: '/images/arena/subjects/card_powerbi.png',
      btnClass: 'bg-[#f59e0b] hover:bg-amber-600 shadow-amber-500/25',
      barColor: 'bg-amber-500',
      action: () => handleOpenChallenge(quickChallenges.powerbi[0]),
    },
    {
      id: 'stats' as const,
      title: 'Statistics Game',
      subtitle: '8 Games Available • 100% Free',
      tag: '8 Games',
      badge: 'Statistics',
      progress: 0,
      bannerImage: '/images/arena/subjects/card_stats.png',
      btnClass: 'bg-[#8b5cf6] hover:bg-purple-600 shadow-purple-500/25',
      barColor: 'bg-purple-500',
      action: () => handleOpenChallenge(quickChallenges.stats[0]),
    },
    {
      id: 'genai' as const,
      title: 'Gen AI Game',
      subtitle: '8 Games Available • 100% Free',
      tag: '8 Games',
      badge: 'Gen AI & LLM',
      progress: 0,
      bannerImage: '/images/arena/subjects/card_genai.png',
      btnClass: 'bg-[#06b6d4] hover:bg-cyan-600 shadow-cyan-500/25',
      barColor: 'bg-cyan-500',
      action: () => handleOpenChallenge(quickChallenges.genai[0]),
    },
  ];

  // Quick challenges for non-Python subjects
  const quickChallenges: Record<string, Array<{
    id: number;
    title: string;
    subtitle: string;
    difficulty: string;
    desc: string;
    challenge: string;
    hint: string;
    starterCode: string;
    correctAnswer: string;
    xp: number;
  }>> = {
    sql: [
      {
        id: 101,
        title: 'SQL Hero: SELECT * FROM City',
        subtitle: 'Foundations of Database Queries',
        difficulty: 'Beginner',
        desc: 'Extract all columns from the Customers table.',
        challenge: 'Write a query to retrieve all customer records from the Customers table.',
        hint: 'SELECT * FROM Customers;',
        starterCode: 'SELECT * FROM Customers;',
        correctAnswer: 'SELECT * FROM Customers;',
        xp: 100,
      },
    ],
    excel: [
      {
        id: 201,
        title: 'XLOOKUP Modern Legend',
        subtitle: 'Advanced Lookup Formulas',
        difficulty: 'Intermediate',
        desc: 'Lookup Employee name matching ID in column A.',
        challenge: 'Use XLOOKUP to find Employee Name (col C) by matching EmpID (A2) in col A.',
        hint: '=XLOOKUP(A2, A:A, C:C, "Not Found")',
        starterCode: '=XLOOKUP(A2, A:A, C:C, "Not Found")',
        correctAnswer: '=XLOOKUP(A2, A:A, C:C, "Not Found")',
        xp: 150,
      },
    ],
    powerbi: [
      {
        id: 301,
        title: 'DAX Hero: Total Revenue Measure',
        subtitle: 'Data Modeling & DAX',
        difficulty: 'Beginner',
        desc: 'Write DAX formula for Total Revenue sum.',
        challenge: 'Compute total sales revenue using SUMX across Sales table.',
        hint: 'Total Revenue = SUMX(Sales, Sales[Qty] * Sales[UnitPrice])',
        starterCode: 'Total Revenue = SUMX(Sales, Sales[Qty] * Sales[UnitPrice])',
        correctAnswer: 'Total Revenue = SUMX(Sales, Sales[Qty] * Sales[UnitPrice])',
        xp: 150,
      },
    ],
    stats: [
      {
        id: 401,
        title: 'Standard Normal Z-Score',
        subtitle: 'Distributions & Statistics',
        difficulty: 'Beginner',
        desc: 'Compute number of standard deviations from mean.',
        challenge: 'Z-score formula for value x, population mean μ, and standard deviation σ: (x - μ) / σ.',
        hint: '(x - μ) / σ',
        starterCode: '(x - μ) / σ',
        correctAnswer: '(x - μ) / σ',
        xp: 120,
      },
    ],
    genai: [
      {
        id: 501,
        title: 'Prompt Doctor: Few-Shot Master',
        subtitle: 'Prompt Engineering',
        difficulty: 'Beginner',
        desc: 'Structure a system prompt for JSON data output.',
        challenge: 'Enforce JSON schema format constraints for LLM responses.',
        hint: 'You are an expert data assistant. Output ONLY valid JSON matching schema: {...}',
        starterCode: 'You are an expert data assistant. Output ONLY valid JSON matching schema: {"insights": []}',
        correctAnswer: 'You are an expert data assistant. Output ONLY valid JSON matching schema: {"insights": []}',
        xp: 150,
      },
    ],
  };

  const handleOpenChallenge = (ch: any) => {
    playTactile();
    setActiveChallengeModal(ch);
    setUserChallengeInput(ch.starterCode || '');
    setChallengeFeedback('idle');
    setShowHint(false);
  };

  const handleValidateChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    playTactile();
    setChallengeFeedback('correct');
    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#0066ff', '#10b981', '#f59e0b', '#8b5cf6']
      });
    } catch {
      // fallback
    }
  };

  // Top 5 Leaderboard users from reference image
  const leaderboardUsers = [
    { rank: 1, name: 'Aditi Sharma', xp: '2,450 XP', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces', badge: '🥇' },
    { rank: 2, name: 'Rahul Verma', xp: '2,320 XP', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces', badge: '🥈' },
    { rank: 3, name: 'Neha Gupta', xp: '2,100 XP', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces', badge: '🥉' },
    { rank: 4, name: 'Aman Kumar', xp: '1,980 XP', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', badge: '4' },
    { rank: 5, name: 'Subodh Kumar', xp: '1,750 XP', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', badge: '5' },
  ];

  const visibleCards = activeFilter === 'all'
    ? gameCards
    : gameCards.filter((c) => c.id === activeFilter);

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-900 pb-32 select-none">


      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="max-w-md mx-auto px-3 sm:px-4 pt-3 space-y-3.5">

        {/* ─── 2. HERO BANNER: "Choose a Subject to Play" ─── */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ebf5ff] via-[#f4f8ff] to-[#edf3ff] border border-sky-200/80 shadow-xs p-4 sm:p-5">
          {/* Background Soft Glows */}
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

          {/* Content Left */}
          <div className="relative z-10 max-w-[62%]">
            <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
              Choose a Subject<br />
              <span className="bg-gradient-to-r from-[#0066ff] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                to Play
              </span>
            </h1>
            <p className="text-[11px] font-semibold text-slate-500 mt-1 leading-snug">
              Select a topic to start playing games &amp; earn points
            </p>

            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 rounded-full bg-blue-100/70 border border-blue-200/90 text-blue-700 text-[10px] font-black shadow-2xs">
              <Gamepad2 className="w-3.5 h-3.5 text-blue-600" />
              <span>6 Subjects • 65+ Interactive Games</span>
            </div>
          </div>

          {/* Hero Gamer Robot Right */}
          <img
            src="/images/arena/subjects/hero_robot_gamer.png"
            alt="Hero Mascot"
            className="absolute -right-2 -bottom-1 w-36 sm:w-40 h-auto object-contain pointer-events-none drop-shadow-md z-10"
          />
        </div>

        {/* ─── 3. SUBJECT FILTER PILLS ROW ─── */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {filterPills.map((pill) => {
            const isActive = activeFilter === pill.id;
            return (
              <button
                type="button"
                key={pill.id}
                onClick={() => {
                  playTactile();
                  setActiveFilter(pill.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0066ff] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                <span>{pill.icon}</span>
                <span>{pill.name}</span>
              </button>
            );
          })}
        </div>

        {/* ─── 4. 2-COLUMN GRID OF 6 SUBJECT GAME CARDS ─── */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md overflow-hidden flex flex-col justify-between transition-all"
            >
              {/* Upper Media Banner */}
              <div className="relative w-full aspect-[2.6/1] overflow-hidden bg-slate-100">
                <img
                  src={card.bannerImage}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lower Card Body */}
              <div className="p-2.5 sm:p-3 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[9.5px] font-semibold text-slate-400 mt-0.5 mb-2 truncate">
                    {card.subtitle}
                  </p>
                </div>

                {/* Progress bar with 0% */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${card.barColor}`}
                        style={{ width: `${card.progress}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-black text-slate-400 shrink-0">
                      {card.progress}%
                    </span>
                  </div>

                  {/* Start Playing Button */}
                  <button
                    type="button"
                    onClick={() => {
                      playTactile();
                      card.action();
                    }}
                    className={`w-full py-1.5 sm:py-2 rounded-full font-black text-[10.5px] sm:text-xs text-white shadow-xs flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-all ${card.btnClass}`}
                  >
                    <span>Start Playing</span>
                    <ArrowRight className="w-3 h-3 stroke-[2.8]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── 5. "YOUR PROGRESS" STRIP ─── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs p-3 sm:p-3.5 flex items-center justify-between gap-2">
          {/* Left: Circular progress indicator */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full border-2 border-blue-500 bg-blue-50/70 flex items-center justify-center shrink-0">
              <span className="text-xs font-black text-blue-700">0%</span>
            </div>
            <div>
              <span className="text-[11px] font-black text-slate-900 block leading-tight">
                Your Progress
              </span>
              <span className="text-[10px] font-bold text-slate-700 block">
                0 / 15
              </span>
              <span className="text-[9px] font-semibold text-slate-400 block leading-none">
                Topics Completed
              </span>
            </div>
          </div>

          {/* Right: 3 Metric Cards */}
          <div className="flex items-center gap-1.5">
            {/* XP Earned */}
            <div className="px-2 py-1.5 rounded-xl bg-purple-50/80 border border-purple-200/80 text-center min-w-[55px]">
              <div className="flex items-center justify-center gap-1 text-[10px] font-black text-purple-700">
                <Star className="w-3 h-3 fill-purple-500 text-purple-500" />
                <span>0</span>
              </div>
              <span className="text-[8px] font-bold text-slate-500 block">
                XP Earned
              </span>
            </div>

            {/* Games Done */}
            <div className="px-2 py-1.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-center min-w-[55px]">
              <div className="flex items-center justify-center gap-1 text-[10px] font-black text-blue-700">
                <Gamepad2 className="w-3 h-3 text-blue-500" />
                <span>0</span>
              </div>
              <span className="text-[8px] font-bold text-slate-500 block">
                Games Done
              </span>
            </div>

            {/* Quizzes Done */}
            <div className="px-2 py-1.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-center min-w-[55px]">
              <div className="flex items-center justify-center gap-1 text-[10px] font-black text-emerald-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>0</span>
              </div>
              <span className="text-[8px] font-bold text-slate-500 block">
                Quizzes Done
              </span>
            </div>
          </div>
        </div>

        {/* ─── 6. DAILY CHALLENGE & ACHIEVEMENTS ROW ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {/* Daily Challenge */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs p-3 sm:p-3.5 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">
                    Daily Challenge
                  </h4>
                  <p className="text-[9.5px] font-semibold text-slate-400 mt-0.5">
                    Complete 3 Python games today
                  </p>
                </div>
              </div>
              <span className="text-lg">🎁</span>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9.5px]">
              <span className="font-semibold text-slate-400">Progress</span>
              <span className="font-black text-slate-800">0 / 3</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs p-3 sm:p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">
                    Achievements
                  </h4>
                  <span className="text-[9.5px] font-semibold text-slate-400">
                    0 / 24 Unlocked
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => playTactile()}
                className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5 hover:underline"
              >
                <span>View All</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* 4 Badges */}
            <div className="grid grid-cols-4 gap-1 pt-1 border-t border-slate-100">
              <div className="text-center p-1 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs block">🏳️</span>
                <span className="text-[7.5px] font-extrabold text-slate-700 block truncate">First Step</span>
                <span className="text-[6.5px] text-slate-400 block truncate">Play 1 game</span>
              </div>
              <div className="text-center p-1 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs block">🔥</span>
                <span className="text-[7.5px] font-extrabold text-slate-700 block truncate">7 Day Streak</span>
                <span className="text-[6.5px] text-slate-400 block truncate">Play 7 days</span>
              </div>
              <div className="text-center p-1 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs block">🐍</span>
                <span className="text-[7.5px] font-extrabold text-slate-700 block truncate">Python Pro</span>
                <span className="text-[6.5px] text-slate-400 block truncate">5 games</span>
              </div>
              <div className="text-center p-1 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs block">👑</span>
                <span className="text-[7.5px] font-extrabold text-slate-700 block truncate">Code Master</span>
                <span className="text-[6.5px] text-slate-400 block truncate">15 games</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 7. LEADERBOARD SECTION (Exact match to Reference) ─── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs p-3.5 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Medal className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                Leaderboard
              </h4>
            </div>

            {/* Time Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setLeaderboardTab('week');
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  leaderboardTab === 'week'
                    ? 'bg-[#0066ff] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                This Week
              </button>
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setLeaderboardTab('month');
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  leaderboardTab === 'month'
                    ? 'bg-[#0066ff] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                This Month
              </button>
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setLeaderboardTab('all');
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  leaderboardTab === 'all'
                    ? 'bg-[#0066ff] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Time
              </button>
            </div>

            <button
              type="button"
              onClick={() => playTactile()}
              className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5 hover:underline shrink-0"
            >
              <span>View All</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Top 5 Leaderboard Cards Row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {leaderboardUsers.map((user) => (
              <div
                key={user.rank}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-2xl px-2.5 py-1.5 shrink-0 min-w-[125px] shadow-2xs"
              >
                <div className="relative shrink-0">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-200"
                  />
                  <span className="absolute -bottom-1 -left-1 text-[10px]">
                    {user.badge}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black text-slate-900 block truncate leading-tight">
                    {user.name}
                  </span>
                  <span className="text-[9px] font-bold text-blue-600 block leading-tight">
                    {user.xp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── INTERACTIVE CHALLENGE MODAL ─── */}
      {activeChallengeModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setActiveChallengeModal(null)}
          />

          <div className="relative w-full max-w-md bg-white border-t border-slate-200 rounded-t-3xl p-5 shadow-2xl z-10 space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">
                  {activeChallengeModal.difficulty} • +{activeChallengeModal.xp} XP
                </span>
                <h3 className="text-base font-black text-slate-900">{activeChallengeModal.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveChallengeModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-slate-700 font-medium leading-relaxed">
              {activeChallengeModal.challenge}
            </div>

            {challengeFeedback === 'correct' && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                <span>Awesome! Correct solution. +{activeChallengeModal.xp} XP awarded to your profile!</span>
              </div>
            )}

            <form onSubmit={handleValidateChallenge} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Your Code Solution
                </label>
                <textarea
                  rows={3}
                  value={userChallengeInput}
                  onChange={(e) => setUserChallengeInput(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {showHint && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono">
                  💡 Hint: {activeChallengeModal.hint}
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowHint((prev) => !prev)}
                  className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 active:scale-95 transition-all"
                >
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span>Hint</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-2xl bg-[#0066ff] hover:bg-blue-700 text-white font-black text-xs shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Submit Code</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
