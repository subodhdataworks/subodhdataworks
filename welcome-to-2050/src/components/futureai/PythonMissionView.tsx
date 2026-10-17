import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  Clock, 
  Star, 
  Code2, 
  Terminal, 
  Crown, 
  Award, 
  Zap, 
  Eye, 
  ChevronRight, 
  Flame, 
  Bell, 
  Home, 
  Target, 
  FlaskConical, 
  Briefcase, 
  Users, 
  X,
  Video
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { LearnerProfile } from '../../types';
import { ThemeToggle } from '../common/ThemeToggle';

interface PythonMissionViewProps {
  profile: LearnerProfile;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onBackToOverview: () => void;
  onOpenIntroWorld?: () => void;
  onOpenSubscription: () => void;
  onOpenWhatsAppLogin: () => void;
  onNavigateHome: () => void;
  onOpenCareer?: () => void;
}

export const PythonMissionView: React.FC<PythonMissionViewProps> = ({
  profile,
  theme = 'dark',
  onToggleTheme,
  onBackToOverview,
  onOpenIntroWorld,
  onOpenSubscription,
  onOpenWhatsAppLogin,
  onNavigateHome,
  onOpenCareer,
}) => {
  const [activeStepTab, setActiveStepTab] = useState<'learn' | 'practice' | 'quiz' | 'challenge'>('learn');
  const [activeSubtopic, setActiveSubtopic] = useState<number>(2); // 2: How to Write a Program
  const [codeContent, setCodeContent] = useState<string>('print("Hello, Future.AI!")');
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);
  const [isRunningCode, setIsRunningCode] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isNovaSpeaking, setIsNovaSpeaking] = useState<boolean>(false);
  const [selectedMissionIndex, setSelectedMissionIndex] = useState<number>(0);

  const learnerName = profile.name && profile.name !== 'Explorer' ? profile.name : 'Rajesh';

  const handleRunCode = () => {
    setIsRunningCode(true);
    SoundEffects.playDiscovery();
    setTimeout(() => {
      setIsRunningCode(false);
      // Clean Python output simulation
      let out = 'Hello, Future.AI!';
      try {
        const match = codeContent.match(/print\s*\(\s*["'](.*)["']\s*\)/);
        if (match && match[1]) {
          out = match[1];
        }
      } catch {
        out = 'Hello, Future.AI!';
      }
      setConsoleOutput(out);
      SoundEffects.playSuccess();
    }, 400);
  };

  const handleNovaSpeak = () => {
    SoundEffects.playDiscovery();
    setIsNovaSpeaking(true);
    const msg = `Hey ${learnerName}! Python is simple, but super powerful. Let's write your first program together!`;
    Voice.speak(msg, 'en', () => {
      setIsNovaSpeaking(false);
    });
  };

  const missions = [
    { num: '01', title: 'Introduction to Python', dur: '~25 min', isFree: true, locked: false },
    { num: '02', title: 'Variables & Data Types', dur: '~30 min', isFree: true, locked: false },
    { num: '03', title: 'Operators & Expressions', dur: '~35 min', isFree: true, locked: false },
    { num: '04', title: 'Control Flow', dur: '~40 min', isFree: false, locked: true },
    { num: '05', title: 'Functions', dur: '~35 min', isFree: false, locked: true },
    { num: '06', title: 'Lists & Dictionaries', dur: '~40 min', isFree: false, locked: true },
    { num: '07', title: 'File Handling', dur: '~30 min', isFree: false, locked: true },
    { num: '08', title: 'Mini Project', dur: '~60 min', isFree: false, locked: true },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#F4F7FB] text-slate-900' : 'bg-[#060B13] text-white'
    } flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200`}>
      
      {/* Top Header */}
      <header className={`sticky top-0 z-30 w-full backdrop-blur-xl border-b transition-colors px-4 sm:px-8 py-3 ${
        theme === 'light' ? 'bg-white/90 border-slate-200 text-slate-900' : 'bg-[#08101E]/90 border-cyan-500/15 text-white'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div 
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0A1220] rounded-2xl flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg">
                  F
                </span>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">
                Future<span className="text-cyan-400">.AI</span>
              </span>
              <p className="text-[9px] font-mono tracking-widest text-cyan-200/60 uppercase">
                Learn. Think. Build.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1.5 font-mono text-xs font-semibold">
            <button 
              onClick={onNavigateHome}
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            <button 
              className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,210,255,0.3)] flex items-center gap-1.5"
            >
              <Target className="w-3.5 h-3.5" />
              <span>Missions</span>
            </button>

            <button 
              onClick={onBackToOverview}
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Labs</span>
            </button>

            <button 
              onClick={onOpenCareer}
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career</span>
            </button>

            <button 
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Community</span>
            </button>
          </nav>

          <div className="flex items-center gap-3">
            {/* Capability Credits Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-bold">
              <span>Capability Credits:</span>
              <span className="text-white">250 💎</span>
            </div>

            {/* Dark / Light Mode Switcher */}
            {onToggleTheme && (
              <ThemeToggle 
                theme={theme} 
                onToggle={onToggleTheme} 
              />
            )}

            <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 transition-all">
              <Bell className="w-4 h-4 text-slate-300" />
            </button>

            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#0E1A2F] flex items-center justify-center text-xs font-bold text-cyan-300">
                  {learnerName.charAt(0)}
                </div>
              </div>
              <div className="text-left text-xs leading-none">
                <span className="font-bold text-white block">{learnerName}</span>
                <span className="text-[10px] text-cyan-400 font-mono">Lv. 3 | Learner</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Mission Workspace with Left Sidebar & Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 flex-1 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar (Matching Image 4) */}
        <aside className="w-full md:w-56 shrink-0 space-y-4">
          
          <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center gap-2.5">
            <span className="text-2xl">🐍</span>
            <span className="font-bold text-sm tracking-wide text-white">Python</span>
          </div>

          <nav className="space-y-1 text-xs font-mono">
            {[
              { id: 'overview', label: 'Overview', active: false },
              { id: 'path', label: 'Learning Path', active: true },
              { id: 'practice', label: 'Practice Zone', active: false },
              { id: 'projects', label: 'Projects', active: false },
              { id: 'leaderboard', label: 'Leaderboard', active: false },
            ].map((navItem) => (
              <button
                key={navItem.id}
                onClick={() => {
                  SoundEffects.playDiscovery();
                  if (navItem.id === 'overview') onBackToOverview();
                }}
                className={`w-full p-2.5 rounded-xl text-left font-semibold transition-all ${
                  navItem.active
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {navItem.label}
              </button>
            ))}
          </nav>

          {/* Progress Circular Widget */}
          <div className="p-4 rounded-2xl bg-[#0A1424] border border-white/10 space-y-2 text-left">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Your Progress</span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300">
                1/8
              </div>
              <span className="text-xs text-slate-200">Lessons Completed</span>
            </div>
          </div>

          {/* Student Artwork Illustration on Bottom Left */}
          <div className="hidden md:block relative rounded-2xl overflow-hidden border border-white/10 p-3 pt-20 text-left">
            <img 
              src="/images/python_mission.jpg" 
              alt="Learner" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-50 -z-10"
            />
            <span className="font-script text-sm text-cyan-300 block drop-shadow">
              Small Steps<br />Big Dreams ↗
            </span>
          </div>

        </aside>

        {/* Center / Main Workspace Area */}
        <main className="flex-1 space-y-6">
          
          {/* Header Banner: Python Title + Free Access Badge */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C1A2E] via-[#0E223D] to-[#0A1628] border border-cyan-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                  🐍
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Python
                  </h2>
                  <p className="text-xs font-mono text-cyan-300">
                    From Basics to Real-World Projects
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 max-w-xl">
                Learn Python the fun way — with real problems, interactive exercises and hands-on projects.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-cyan-400" />
                  <span>Beginner Friendly</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>20-30 min per lesson</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                  💻 Hands-on Practice
                </span>
              </div>
            </div>

            {/* Right Free Access Banner Card */}
            <div className="p-4 rounded-2xl bg-[#060D19]/80 border border-cyan-400/30 text-right space-y-1.5 shrink-0 max-w-xs">
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs font-bold text-slate-200">Free Access</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 text-[10px] font-mono font-bold">
                  3 Topics
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Complete the first 3 topics free. Unlock the full Python journey with Pro!
              </p>
              <button 
                onClick={onBackToOverview}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline font-bold"
              >
                View All Topics →
              </button>
            </div>

          </div>

          {/* Horizontal Interactive Mission Stepper (01 to 08 matching Image 4) */}
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-slate-300 font-bold">Learning Path</span>
              <span className="text-slate-400">Complete missions in order to unlock new skills and progress.</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {missions.map((m, idx) => {
                const isCurrent = idx === selectedMissionIndex;
                return (
                  <div
                    key={m.num}
                    onClick={() => {
                      SoundEffects.playDiscovery();
                      if (m.isFree) {
                        if (idx === 0 && onOpenIntroWorld) {
                          onOpenIntroWorld();
                        } else {
                          setSelectedMissionIndex(idx);
                        }
                      } else {
                        onOpenSubscription();
                      }
                    }}
                    className={`p-3 rounded-2xl border text-center cursor-pointer transition-all flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-gradient-to-b from-cyan-950/80 to-[#0A1628] border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.4)] scale-105'
                        : m.isFree
                        ? 'bg-white/5 border-emerald-500/30 hover:border-emerald-400'
                        : 'bg-white/[0.02] border-white/10 opacity-60 hover:opacity-90'
                    }`}
                  >
                    <div>
                      {m.isFree ? (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          FREE
                        </span>
                      ) : (
                        <Lock className="w-3 h-3 text-slate-500 mx-auto" />
                      )}

                      <div className="font-mono text-sm font-bold text-white mt-1">
                        {m.num}
                      </div>

                      <p className="text-[10px] text-slate-300 font-medium leading-tight mt-1 line-clamp-2">
                        {m.title}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/10">
                      {m.isFree ? (
                        <span className="block text-[10px] font-mono text-cyan-300 font-bold">
                          Play Now
                        </span>
                      ) : (
                        <span className="block text-[10px] font-mono text-slate-500">
                          Locked
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Mission Interactive Workstation */}
          <div className="p-6 rounded-3xl bg-[#091322]/90 border border-cyan-500/20 space-y-6 text-left">
            
            {/* Mission Header & Sub-Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                    FREE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Mission 1 of 3
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-white">
                    Introduction to Python
                  </h3>
                  {onOpenIntroWorld && (
                    <button
                      onClick={() => {
                        SoundEffects.playDiscovery();
                        onOpenIntroWorld();
                      }}
                      className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 hover:bg-cyan-500/30 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Introduction to Python Programming (Launch 2050 World) →</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Let's get started! Learn what Python is, how to write your first program, and run it in your own practice environment.
                </p>
              </div>

              {/* Sub-Tabs: 1 Learn, 2 Practice, 3 Quiz, 4 Challenge */}
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono shrink-0">
                {[
                  { id: 'learn', label: '1 Learn' },
                  { id: 'practice', label: '2 Practice' },
                  { id: 'quiz', label: '3 Quiz' },
                  { id: 'challenge', label: '4 Challenge' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      SoundEffects.playDiscovery();
                      setActiveStepTab(tab.id as any);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      activeStepTab === tab.id
                        ? 'bg-cyan-400 text-deep-space shadow-[0_0_12px_rgba(0,210,255,0.5)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3-Column Interactive Mission Body */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Col 1: Sub-topic Menu */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Lesson Steps
                </span>

                {[
                  { id: 1, title: '1. What is Python?' },
                  { id: 2, title: '2. How to Write a Program', active: true },
                  { id: 3, title: '3. Run Your First Code' },
                  { id: 4, title: 'Quick Recap', locked: true },
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      SoundEffects.playDiscovery();
                      setActiveSubtopic(sub.id);
                    }}
                    className={`w-full p-3 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between ${
                      activeSubtopic === sub.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold'
                        : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{sub.title}</span>
                    {sub.locked && <Lock className="w-3.5 h-3.5 text-slate-500" />}
                  </button>
                ))}
              </div>

              {/* Col 2 & 3: Video Player, NOVA AI & Code Workstation */}
              <div className="lg:col-span-2 space-y-4">
                
                {/* Interactive Video Player Preview */}
                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/60 p-4 flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-full sm:w-36 h-24 rounded-xl overflow-hidden bg-black shrink-0 border border-white/20 group cursor-pointer"
                       onClick={() => setIsVideoModalOpen(true)}>
                    <img 
                      src="/images/choose_path.jpg" 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-cyan-400 text-deep-space flex items-center justify-center shadow-lg shadow-cyan-500/50">
                        <Play className="w-4 h-4 fill-deep-space ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">How to Write a Python Program</h4>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">6:42</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      In this video, you'll learn how to write your first Python program and print output to the console.
                    </p>
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-xs font-mono font-bold transition-all pt-1"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Watch Video</span>
                    </button>
                  </div>
                </div>

                {/* NOVA AI Assistant Greeting Card */}
                <div 
                  onClick={handleNovaSpeak}
                  className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0C1B30] to-[#0A1628] border border-cyan-400/30 flex items-center justify-between gap-3 cursor-pointer hover:border-cyan-300 transition-all group"
                  title="Click to hear NOVA"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-xl shrink-0 animate-float-nova">
                      🤖
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">NOVA</span>
                        <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                        {isNovaSpeaking && <span className="text-[10px] text-cyan-400 font-mono animate-pulse">Speaking...</span>}
                      </div>
                      <p className="text-xs text-slate-200">
                        Hey {learnerName}! Python is simple, but super powerful. Let's write your first program!
                      </p>
                    </div>
                  </div>

                  <button 
                    className="px-3 py-1.5 rounded-xl bg-cyan-400 text-deep-space text-xs font-mono font-bold shrink-0 hover:bg-cyan-300 transition-colors"
                  >
                    Let's Go →
                  </button>
                </div>

                {/* Interactive Code Editor ("Try It Yourself") */}
                <div className="rounded-2xl border border-white/10 bg-[#070E1A] overflow-hidden space-y-2">
                  <div className="px-4 py-2.5 bg-black/40 border-b border-white/10 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-bold text-white">Try It Yourself</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Write and run your first Python program.</span>
                  </div>

                  <div className="p-3 font-mono text-xs">
                    <div className="relative">
                      <textarea
                        value={codeContent}
                        onChange={(e) => setCodeContent(e.target.value)}
                        rows={3}
                        className="w-full bg-[#040810] border border-white/10 rounded-xl p-3 text-cyan-300 font-mono text-xs focus:outline-none focus:border-cyan-400 resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] text-slate-400">
                        💡 Tip: Click "Run Code" to see the output. If you get stuck, ask NOVA!
                      </span>

                      <button
                        onClick={handleRunCode}
                        disabled={isRunningCode}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-deep-space font-mono text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,210,255,0.4)] hover:shadow-[0_0_25px_rgba(0,210,255,0.7)] transition-all active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-deep-space" />
                        <span>{isRunningCode ? 'Running...' : 'Run Code'}</span>
                      </button>
                    </div>

                    {/* Console Output Screen */}
                    {consoleOutput && (
                      <div className="mt-3 p-3 rounded-xl bg-black border border-emerald-500/30 text-left font-mono text-xs space-y-1 animate-fadeIn">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-1">
                          <span className="text-emerald-400 font-bold">TERMINAL OUTPUT (0.002s)</span>
                          <span className="text-slate-500">Python 3.12 Engine</span>
                        </div>
                        <pre className="text-emerald-300 pt-1 font-bold whitespace-pre-wrap">
                          {consoleOutput}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Col 4: Lesson Rewards & Next Unlock */}
              <div className="space-y-4">
                
                {/* Lesson Rewards Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Lesson Rewards
                  </h5>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>💎</span>
                      <span>+50 Capability Credits</span>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-300">
                      <span>🐍</span>
                      <span>Python Basics Skill Unlocked</span>
                    </div>

                    <div className="flex items-center gap-2 text-amber-300">
                      <span>⚡</span>
                      <span>+100 Experience Points</span>
                    </div>
                  </div>
                </div>

                {/* Next Unlock Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Next Unlock</span>
                  </div>

                  <p className="text-xs font-bold text-white">Variables & Data Types</p>
                  <p className="text-[10px] text-slate-400">
                    Unlocks after completing this mission.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

      {/* Floating Sticky Bottom Bar (Unlock Full Python Path ₹999) */}
      <footer className="sticky bottom-0 z-30 w-full bg-[#081220]/95 backdrop-blur-xl border-t border-cyan-500/20 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Complete all 3 free lessons and unlock the full Python journey!
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-32 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-1/3 h-full bg-cyan-400 rounded-full" />
                </div>
                <span className="text-[10px] font-mono text-cyan-300">1 / 3 Completed</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              SoundEffects.playDiscovery();
              onOpenSubscription();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-deep-space font-mono text-xs font-extrabold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.8)] transition-all transform active:scale-95"
          >
            <Crown className="w-4 h-4 text-deep-space" />
            <span>Unlock Full Python Path (Pro Plan)</span>
          </button>

        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="max-w-2xl w-full bg-[#0A1424] border border-cyan-400/40 rounded-3xl p-6 text-left relative space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">How to Write a Python Program</h4>
              </div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400 text-cyan-300 flex items-center justify-center animate-pulse">
                <Play className="w-7 h-7 fill-cyan-400" />
              </div>
              <p className="text-xs text-slate-200 font-mono">
                Interactive 2050 Video Stream Loaded
              </p>
              <p className="text-[11px] text-slate-400 max-w-sm">
                Watch Dr. Sophia and NOVA demonstrate writing print statements, creating variable assignments, and inspecting output.
              </p>
            </div>

            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-cyan-400 text-deep-space font-bold font-mono text-xs"
            >
              Close & Start Coding
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
