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
  Crown
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
  const [selectedSubject, setSelectedSubject] = useState<'python' | 'sql' | 'excel' | 'powerbi' | 'stats' | 'genai'>('python');
  const [activeChallengeModal, setActiveChallengeModal] = useState<any | null>(null);
  const [userChallengeInput, setUserChallengeInput] = useState('');
  const [challengeFeedback, setChallengeFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showHint, setShowHint] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'week' | 'all'>('week');

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

  // 6 Subjects
  const subjects = [
    { id: 'python' as const, name: 'Python', icon: '🐍', tag: '29 Levels', color: '#0ea5e9' },
    { id: 'sql' as const, name: 'SQL', icon: '🗄️', tag: '8 Quests', color: '#8b5cf6' },
    { id: 'excel' as const, name: 'Excel', icon: '📊', tag: '8 Arenas', color: '#10b981' },
    { id: 'powerbi' as const, name: 'Power BI', icon: '📈', tag: '8 Leagues', color: '#f59e0b' },
    { id: 'stats' as const, name: 'Stats', icon: '∑', tag: '8 Arcades', color: '#ec4899' },
    { id: 'genai' as const, name: 'Gen AI', icon: '🤖', tag: '8 Labs', color: '#06b6d4' },
  ];

  // 15 Python Levels
  const pythonLevels = [
    {
      id: 1,
      title: 'START YOUR PYTHON JOURNEY',
      subtitle: 'Introduction & Setup',
      level: 1,
      difficulty: 'Beginner',
      xp: 100,
      coins: 50,
      image: '/images/arena/python/cards/level_1.jpg',
      icon: '🚀',
      isUnlocked: true,
      tagColor: '#00e5ff',
    },
    {
      id: 2,
      title: 'VARIABLES & DATA TYPES',
      subtitle: 'Values, Types & Cast',
      level: 2,
      difficulty: 'Beginner',
      xp: 120,
      coins: 60,
      image: '/images/arena/python/cards/level_2_variables.jpg',
      icon: '💎',
      isUnlocked: false,
      tagColor: '#00e676',
    },
    {
      id: 3,
      title: 'INPUT, OUTPUT & INTERACTION',
      subtitle: 'print(), input() & Formatting',
      level: 3,
      difficulty: 'Beginner',
      xp: 140,
      coins: 70,
      image: '/images/arena/python/cards/level_3_input_output.jpg',
      icon: '💻',
      isUnlocked: false,
      tagColor: '#d500f9',
    },
    {
      id: 4,
      title: 'OPERATORS & LOGIC',
      subtitle: 'Arithmetic, Comparison & Logic',
      level: 4,
      difficulty: 'Beginner',
      xp: 160,
      coins: 80,
      image: '/images/arena/python/cards/level_4_operators.jpg',
      icon: '🧮',
      isUnlocked: false,
      tagColor: '#ff9100',
    },
    {
      id: 5,
      title: 'TYPE CASTING & CONVERSION',
      subtitle: 'int(), float(), str() & Types',
      level: 5,
      difficulty: 'Beginner',
      xp: 180,
      coins: 90,
      image: '/images/arena/python/cards/level_5_type_casting.jpg',
      icon: '🔄',
      isUnlocked: false,
      tagColor: '#ff1744',
    },
    {
      id: 6,
      title: 'CONDITIONAL LOGIC (IF-ELSE)',
      subtitle: 'Branching, Decisions & Truthy',
      level: 6,
      difficulty: 'Intermediate',
      xp: 200,
      coins: 100,
      image: '/images/arena/python/cards/level_6_conditionals.jpg',
      icon: '⚡',
      isUnlocked: false,
      tagColor: '#00b0ff',
    },
    {
      id: 7,
      title: 'LOOP RUNNER (FOR & WHILE)',
      subtitle: 'Repetition, range() & break',
      level: 7,
      difficulty: 'Intermediate',
      xp: 220,
      coins: 110,
      image: '/images/arena/python/cards/level_7_loops.jpg',
      icon: '🔁',
      isUnlocked: false,
      tagColor: '#76ff03',
    },
    {
      id: 8,
      title: 'PYTHON BOSS BATTLE',
      subtitle: 'Core Python Mega Challenge',
      level: 8,
      difficulty: 'Advanced',
      xp: 300,
      coins: 150,
      image: '/images/arena/python/cards/level_8_strings.jpg',
      icon: '👑',
      isUnlocked: false,
      tagColor: '#ffd600',
    },
  ];

  // Subject quick challenges
  const subjectQuickChallenges: Record<string, Array<{
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
      {
        id: 102,
        title: 'SQL Boss: Multi-Table INNER JOIN',
        subtitle: 'Relational Joins',
        difficulty: 'Intermediate',
        desc: 'Join Orders with Customers on CustomerID.',
        challenge: 'Combine Orders and Customers table matching on CustomerID.',
        hint: 'SELECT * FROM Orders o JOIN Customers c ON o.CustomerID = c.CustomerID;',
        starterCode: 'SELECT * FROM Orders o JOIN Customers c ON o.CustomerID = c.CustomerID;',
        correctAnswer: 'SELECT * FROM Orders o JOIN Customers c ON o.CustomerID = c.CustomerID;',
        xp: 200,
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
        colors: ['#00e5ff', '#10b981', '#f59e0b', '#ec4899']
      });
    } catch {
      // fallback
    }
  };

  // Leaderboard data
  const weeklyLeaders = [
    { rank: 1, name: 'Aakash Roy', score: '3,450 XP', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces', badge: '🥇 Python Grandmaster' },
    { rank: 2, name: 'Sneha Rao', score: '2,920 XP', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', badge: '🥈 Code Ninja' },
    { rank: 3, name: 'Karan Mehra', score: '2,400 XP', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces', badge: '🥉 Data Challenger' },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pb-36 select-none">

      {/* ─── 1. ANDROID TOP GAMING APP BAR ─── */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onNavigateBack();
            }}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 active:scale-95 transition-all"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-white leading-tight flex items-center gap-1.5">
              <span>Coding Games Arena</span>
              <span className="px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-extrabold border border-purple-500/30">
                LIVE
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">
              Solve Challenges • Win XP &amp; Coins
            </p>
          </div>
        </div>

        {/* Telemetry badges */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black">
            <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400/80" />
            <span>{telemetry.coins}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-400" />
            <span>3d</span>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT SCROLL AREA ─── */}
      <div className="px-4 pt-3.5 space-y-4">

        {/* ─── 2. HERO CINEMATIC GAMING BANNER ─── */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-purple-500/30 shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <img
              src="/images/arena/navigation_game_banner_poster.jpg"
              alt="Coding Arena"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Neon Flagship Tag */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-900/80 backdrop-blur-md border border-purple-400/40 text-purple-200 text-[10px] font-black flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-purple-300" />
              <span>6 LPA to 15 LPA Career Path</span>
            </div>

            {/* Play Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                onPlayPython(1);
              }}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 text-white flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all border-2 border-white/60"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>

            {/* Bottom Info Row */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Level 1: Python Rocket Launcher</span>
              </div>
              <span className="px-2 py-0.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-[10px]">
                UNLOCKED
              </span>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <strong className="text-white font-extrabold text-xs block">Ready to Code?</strong>
              <span className="text-[10px] text-slate-400">Play Level 1 free &amp; earn +100 XP</span>
            </div>
            <button
              type="button"
              onClick={() => {
                playTactile();
                onPlayPython(1);
              }}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs shadow-md shadow-cyan-500/30 flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>PLAY NOW</span>
            </button>
          </div>
        </div>

        {/* ─── 3. 6 SUBJECTS CAROUSEL PILLS ─── */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              Choose Subject Arena
            </h2>
            <span className="text-[10px] text-cyan-400 font-bold">6 Subjects</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {subjects.map((subj) => {
              const isSelected = selectedSubject === subj.id;
              return (
                <button
                  type="button"
                  key={subj.id}
                  onClick={() => {
                    playTactile();
                    setSelectedSubject(subj.id);
                  }}
                  className={`px-3.5 py-2 rounded-2xl flex-shrink-0 flex items-center gap-2 transition-all border ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                  style={{
                    borderColor: isSelected ? subj.color : undefined,
                    boxShadow: isSelected ? `0 0 15px ${subj.color}33` : undefined,
                  }}
                >
                  <span className="text-base">{subj.icon}</span>
                  <div className="text-left">
                    <span className="text-xs font-black block leading-tight">{subj.name}</span>
                    <span className="text-[9px] text-slate-500 block font-semibold">{subj.tag}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── 4. LEVEL CARDS FOR SELECTED SUBJECT ─── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              {selectedSubject === 'python' ? 'Python Levels (8 Core Levels)' : `${selectedSubject.toUpperCase()} Arena Challenges`}
            </h3>
            <span className="text-[10px] text-slate-400 font-bold">Tap to Play</span>
          </div>

          {selectedSubject === 'python' ? (
            <div className="grid grid-cols-1 gap-3">
              {pythonLevels.map((lvl) => (
                <div
                  key={lvl.id}
                  className={`rounded-2xl border p-3.5 flex items-center justify-between transition-all ${
                    lvl.isUnlocked
                      ? 'bg-gradient-to-r from-slate-900 to-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/70 border-slate-900 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-sm"
                      style={{
                        backgroundColor: lvl.isUnlocked ? `${lvl.tagColor}20` : '#1e293b',
                        border: `1px solid ${lvl.isUnlocked ? lvl.tagColor : '#334155'}40`,
                      }}
                    >
                      {lvl.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-black uppercase tracking-wider text-cyan-400">
                          LEVEL {String(lvl.level).padStart(2, '0')}
                        </span>
                        <span className="px-1.5 py-0.2 rounded-md bg-slate-800 text-slate-400 text-[9px] font-bold">
                          +{lvl.xp} XP
                        </span>
                      </div>
                      <strong className="text-xs font-extrabold text-white block truncate leading-tight mt-0.5">
                        {lvl.title}
                      </strong>
                      <span className="text-[10px] text-slate-400 truncate block">
                        {lvl.subtitle}
                      </span>
                    </div>
                  </div>

                  {lvl.isUnlocked ? (
                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        onPlayPython(lvl.id);
                      }}
                      className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs flex-shrink-0 active:scale-95 transition-all shadow-md"
                    >
                      PLAY ▶
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        onLockedGame?.(lvl.title);
                      }}
                      className="py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-amber-400 font-extrabold text-xs flex items-center gap-1 flex-shrink-0"
                    >
                      <Lock className="w-3 h-3" />
                      <span>Lock</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2.5">
              {(subjectQuickChallenges[selectedSubject] || []).map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => handleOpenChallenge(ch)}
                  className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-between cursor-pointer active:scale-98 transition-all"
                >
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-indigo-400">
                      {ch.difficulty} • +{ch.xp} XP
                    </span>
                    <strong className="text-xs font-bold text-white block leading-tight mt-0.5">
                      {ch.title}
                    </strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{ch.desc}</span>
                  </div>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ─── 5. MOBILE GAMING LEADERBOARD ─── */}
        <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-black text-white uppercase tracking-wider">
                Arena Champions
              </h3>
            </div>
            <span className="text-[10px] text-cyan-400 font-extrabold">Weekly Reset</span>
          </div>

          <div className="space-y-2">
            {weeklyLeaders.map((lead) => (
              <div
                key={lead.rank}
                className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-black w-4 text-center ${
                    lead.rank === 1 ? 'text-amber-400' : lead.rank === 2 ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    #{lead.rank}
                  </span>
                  <img
                    src={lead.avatar}
                    alt={lead.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <strong className="text-xs font-bold text-white block leading-tight">
                      {lead.name}
                    </strong>
                    <span className="text-[9px] text-slate-400">{lead.badge}</span>
                  </div>
                </div>

                <div className="text-right font-black text-cyan-400 text-xs">
                  {lead.score}
                </div>
              </div>
            ))}
          </div>

          {/* User Rank Card */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-950 to-slate-900 border border-purple-500/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                You
              </span>
              <div>
                <strong className="text-white font-extrabold block text-xs">{userName}</strong>
                <span className="text-[10px] text-slate-400">Rank #14 • Challenger</span>
              </div>
            </div>
            <span className="text-xs font-black text-emerald-400">+100 XP Today</span>
          </div>
        </div>

        {/* ─── 6. AI GAME ADVISOR CARD ─── */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-2xl flex items-center justify-center">
              🤖
            </div>
            <div>
              <strong className="text-white font-black text-xs block">Game Assistant</strong>
              <p className="text-[10px] text-slate-400">Need hints or debug tips for any level?</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playTactile();
              onOpenAdvisor?.();
            }}
            className="py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex-shrink-0 active:scale-95 transition-all cursor-pointer"
          >
            Get Help
          </button>
        </div>

      </div>

      {/* ─── 7. INTERACTIVE CHALLENGE BOTTOM SHEET ─── */}
      {activeChallengeModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setActiveChallengeModal(null)}
          />

          <div className="relative w-full max-w-md bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 shadow-2xl z-10 space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-cyan-400 tracking-wider">
                  {activeChallengeModal.difficulty} • +{activeChallengeModal.xp} XP
                </span>
                <h3 className="text-base font-black text-white">{activeChallengeModal.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveChallengeModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium">
              {activeChallengeModal.challenge}
            </div>

            {challengeFeedback === 'correct' && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <span>Awesome! Correct solution. +{activeChallengeModal.xp} XP awarded to your profile!</span>
              </div>
            )}

            <form onSubmit={handleValidateChallenge} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Your Code Solution
                </label>
                <textarea
                  rows={3}
                  value={userChallengeInput}
                  onChange={(e) => setUserChallengeInput(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>

              {showHint && (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                  💡 Hint: {activeChallengeModal.hint}
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowHint((prev) => !prev)}
                  className="py-3 px-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1 active:scale-95 transition-all"
                >
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>Hint</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
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
