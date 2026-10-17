import React, { useState } from 'react';
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  Database, 
  BarChart3, 
  Cpu, 
  Code, 
  Volume2, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  Terminal, 
  Box, 
  Award, 
  Briefcase, 
  Bot, 
  Heart, 
  ShieldCheck, 
  HelpCircle,
  Home,
  Target,
  FlaskConical,
  Users,
  Bell,
  Star,
  ChevronRight
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { LearnerProfile } from '../../types';
import { ThemeToggle } from '../common/ThemeToggle';

interface ChoosePathViewProps {
  profile: LearnerProfile;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onSelectPath: (pathId: string) => void;
  onNavigateHome: () => void;
  onOpenMissions?: () => void;
  onOpenCareer?: () => void;
  onOpenCommunity?: () => void;
}

export const ChoosePathView: React.FC<ChoosePathViewProps> = ({
  profile,
  theme = 'dark',
  onToggleTheme,
  onSelectPath,
  onNavigateHome,
  onOpenMissions,
  onOpenCareer,
  onOpenCommunity,
}) => {
  const [selectedTech, setSelectedTech] = useState<string>('python');
  const [showHowItWorks, setShowHowItWorks] = useState<boolean>(false);
  const learnerName = profile.name && profile.name !== 'Explorer' ? profile.name : 'Rajesh';

  const handleNovaGreet = () => {
    SoundEffects.playDiscovery();
    Voice.speak(`Hey ${learnerName}! Your skills, your future — let's get started! Click on Python to explore your learning missions.`, 'en');
  };

  const learningPaths = [
    {
      id: 'python',
      title: 'Python',
      level: 'Beginner → Advanced',
      levelBadgeStyle: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      icon: '🐍',
      glow: 'shadow-[0_0_30px_rgba(0,210,255,0.35)] border-cyan-400/60',
      btnStyle: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-deep-space font-bold hover:shadow-[0_0_20px_rgba(0,210,255,0.6)]',
      description: 'Learn Python from scratch and build real-world projects.',
      highlight: true
    },
    {
      id: 'dsa',
      title: 'DSA',
      level: 'Beginner → Advanced',
      levelBadgeStyle: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      icon: '🌐',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.25)] border-purple-500/40',
      btnStyle: 'bg-purple-600/30 text-purple-200 border border-purple-500/50 hover:bg-purple-600 hover:text-white',
      description: 'Master Data Structures & Algorithms and ace your interviews.',
      highlight: false
    },
    {
      id: 'sql',
      title: 'SQL',
      level: 'Beginner → Advanced',
      levelBadgeStyle: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      icon: '🗄️',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.25)] border-blue-500/40',
      btnStyle: 'bg-blue-600/30 text-blue-200 border border-blue-500/50 hover:bg-blue-600 hover:text-white',
      description: 'Work with databases, write powerful queries and analyze data.',
      highlight: false
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      level: 'Beginner → Advanced',
      levelBadgeStyle: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      icon: '📊',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.25)] border-amber-500/40',
      btnStyle: 'bg-amber-600/30 text-amber-200 border border-amber-500/50 hover:bg-amber-600 hover:text-white',
      description: 'Turn data into insights with interactive dashboards and reports.',
      highlight: false
    },
    {
      id: 'ai',
      title: 'Advanced Technology',
      level: 'Intermediate → Expert',
      levelBadgeStyle: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      icon: '🧠',
      glow: 'shadow-[0_0_30px_rgba(99,102,241,0.25)] border-indigo-500/40',
      btnStyle: 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/50 hover:bg-indigo-600 hover:text-white',
      description: 'Explore AI, Machine Learning, Data Science, Automation and more.',
      highlight: false
    }
  ];

  const steps = [
    { num: 1, icon: BookOpen, title: 'Learn Concepts' },
    { num: 2, icon: Terminal, title: 'Practice Hands-on' },
    { num: 3, icon: Box, title: 'Build Projects' },
    { num: 4, icon: Award, title: 'Get Certified' },
    { num: 5, icon: Briefcase, title: 'Land Your Dream Job' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#F4F7FB] text-slate-900' : 'bg-[#060B13] text-white'
    } flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200`}>
      
      {/* Top Main Shell Header */}
      <header className={`sticky top-0 z-30 w-full backdrop-blur-xl border-b transition-colors px-4 sm:px-8 py-3 ${
        theme === 'light' ? 'bg-white/90 border-slate-200 text-slate-900' : 'bg-[#08101E]/90 border-cyan-500/15 text-white'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Brand */}
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

          {/* Navigation Links (Matching Image 2 Nav) */}
          <nav className="hidden md:flex items-center gap-1.5 font-mono text-xs font-semibold">
            <button 
              onClick={onNavigateHome}
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            <button 
              onClick={onOpenMissions}
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Target className="w-3.5 h-3.5" />
              <span>Missions</span>
            </button>

            <button 
              className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,210,255,0.3)] flex items-center gap-1.5"
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
              onClick={onOpenCommunity}
              className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Community</span>
            </button>
          </nav>

          {/* User Status */}
          <div className="flex items-center gap-3">
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
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-8 flex-1">
        
        {/* Top Hero Banner with NOVA Greeting & Cloud City Background */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/25 bg-gradient-to-r from-[#0C182B] via-[#0F223D] to-[#0A1628] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          
          {/* Artwork Backdrop */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <img 
              src="/images/choose_path.jpg" 
              alt="Cityscape" 
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C182B] via-[#0C182B]/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left NOVA Dialog Box */}
            <div 
              onClick={handleNovaGreet}
              className="flex items-center gap-4 cursor-pointer group"
              title="Click to hear NOVA greeting"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-indigo-500 p-[2px] animate-float-nova shrink-0 shadow-lg shadow-cyan-500/40">
                <div className="w-full h-full rounded-full bg-[#07101B] flex items-center justify-center text-3xl">
                  🤖
                </div>
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#07101B] animate-pulse" />
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-cyan-400/30 backdrop-blur-md text-left max-w-xs group-hover:border-cyan-300 transition-colors">
                <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <span>Hey {learnerName}!</span>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                </span>
                <p className="text-xs text-slate-200 mt-1">
                  Your skills, your future — let's get started!
                </p>
              </div>
            </div>

            {/* Right Banner Content */}
            <div className="text-left md:text-right space-y-2 max-w-xl">
              <div className="hidden md:block">
                <span className="font-script text-lg text-cyan-300/80 -rotate-2 inline-block">
                  Same You. Bigger Dreams ↗
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Choose Your Path
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Explore different technologies, build real-world skills and unlock your career potential.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setShowHowItWorks(!showHowItWorks)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-bold transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>How it works?</span>
                </button>
              </div>
            </div>

          </div>

          {/* Collapsible How It Works Explanation */}
          {showHowItWorks && (
            <div className="relative z-10 mt-6 pt-6 border-t border-white/10 text-left text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeIn">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-cyan-300 block mb-1">1. Pick a Technology</strong>
                Start with Python basics, SQL database queries, or executive Power BI dashboards.
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-cyan-300 block mb-1">2. Complete 3 Free Topics</strong>
                Write live code, run real simulations, and evaluate your knowledge without friction.
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-cyan-300 block mb-1">3. Unlock Career Accelerator</strong>
                Access AI mock interviews, memory workout drills, and portfolio project cards.
              </div>
            </div>
          )}
        </div>

        {/* Learning Paths Section (5 Cards matching Image 2) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Learning Paths
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Click on any technology to start your journey.
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold">
                <Star className="w-3.5 h-3.5 fill-cyan-400" />
                <span>Beginner Friendly</span>
              </span>
            </div>
          </div>

          {/* 5 Holographic Pathway Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                onClick={() => {
                  SoundEffects.playDiscovery();
                  setSelectedTech(path.id);
                  onSelectPath(path.id);
                }}
                className={`group relative p-5 rounded-3xl cursor-pointer transition-all duration-300 text-left flex flex-col justify-between bg-gradient-to-b from-[#0F1C2E]/90 to-[#09111D]/95 border backdrop-blur-xl ${path.glow} hover:-translate-y-1.5 hover:scale-[1.02]`}
              >
                <div>
                  {/* Top Icon Shield */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {path.icon}
                  </div>

                  {/* Level Badge */}
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border mb-2 ${path.levelBadgeStyle}`}>
                    {path.level}
                  </span>

                  {/* Title & Description */}
                  <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {path.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                {/* Start Learning Button */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      SoundEffects.playDiscovery();
                      onSelectPath(path.id);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${path.btnStyle}`}
                  >
                    <span>Start Learning</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* "Your Learning Journey" Workflow (5 Steps) */}
        <section className="p-6 rounded-3xl bg-[#0B1524]/80 border border-white/10 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2.5 text-left">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Your Learning Journey</h4>
              <p className="text-xs text-slate-400">From basics to career, step by step.</p>
            </div>
          </div>

          {/* Stepper Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {steps.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div key={st.num} className="relative flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-400">Step {st.num}</span>
                    <p className="text-xs font-bold text-white leading-tight">{st.title}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <ChevronRight className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 z-10 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Feature Pillars at Bottom */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Real-World Projects</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Build a portfolio that gets you hired.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">AI Mentor</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Get personalized help anytime.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Gamified Learning</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Learn through missions & rewards.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Career Support</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Resume, interview & job guidance.</p>
            </div>
          </div>

        </section>

      </main>

    </div>
  );
};
