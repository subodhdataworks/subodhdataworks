import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  BookOpen, 
  Terminal, 
  Box, 
  TrendingUp, 
  Clock, 
  FileText, 
  Download, 
  Share2, 
  HelpCircle,
  Home,
  Target,
  FlaskConical,
  Briefcase,
  Users,
  Bell,
  Star,
  ChevronRight
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { LearnerProfile } from '../../types';
import { ThemeToggle } from '../common/ThemeToggle';

interface PythonOverviewViewProps {
  profile: LearnerProfile;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onBackToLabs: () => void;
  onStartLesson1: () => void;
  onOpenIntroWorld?: () => void;
  onOpenLockedLesson: (lessonNumber: number) => void;
  onOpenPlayground: () => void;
  onOpenRecallWorkout?: () => void;
  onOpenInterviewSim?: () => void;
  onNavigateHome: () => void;
}

export const PythonOverviewView: React.FC<PythonOverviewViewProps> = ({
  profile,
  theme = 'dark',
  onToggleTheme,
  onBackToLabs,
  onStartLesson1,
  onOpenIntroWorld,
  onOpenLockedLesson,
  onOpenPlayground,
  onOpenRecallWorkout,
  onOpenInterviewSim,
  onNavigateHome,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'lessons' | 'practice' | 'projects' | 'quiz' | 'resources'>('overview');
  const [selectedQuickTab, setSelectedQuickTab] = useState<'learn' | 'practice' | 'build' | 'grow'>('learn');

  const learnerName = profile.name && profile.name !== 'Explorer' ? profile.name : 'Rajesh';

  const handleNovaSpeak = () => {
    SoundEffects.playDiscovery();
    Voice.speak(`Python is the key to unlock your future, ${learnerName}. Let's start with your first interactive program!`, 'en');
  };

  const lessons = [
    {
      num: 1,
      title: 'Introduction to Python Programming',
      subtitle: 'What is Python? Setup, IDE, and your first program.',
      duration: '~ 15 min',
      isFree: true,
      inProgress: true,
      locked: false,
    },
    {
      num: 2,
      title: 'Variables & Data Types',
      subtitle: 'Strings, Integers, Floats, Booleans and more.',
      duration: '~ 20 min',
      isFree: true,
      inProgress: false,
      locked: false,
    },
    {
      num: 3,
      title: 'Operators & Expressions',
      subtitle: 'Arithmetic, Comparison, Logical operators.',
      duration: '~ 20 min',
      isFree: true,
      inProgress: false,
      locked: false,
    },
    {
      num: 4,
      title: 'Control Flow',
      subtitle: 'If-else, Loops (for & while).',
      duration: '~ 25 min',
      isFree: false,
      inProgress: false,
      locked: true,
    },
    {
      num: 5,
      title: 'Functions',
      subtitle: 'Reusable code with functions.',
      duration: '~ 20 min',
      isFree: false,
      inProgress: false,
      locked: true,
    },
    {
      num: 6,
      title: 'Lists & Dictionaries',
      subtitle: 'Work with collections and data structures.',
      duration: '~ 25 min',
      isFree: false,
      inProgress: false,
      locked: true,
    },
    {
      num: 7,
      title: 'File Handling',
      subtitle: 'Read and write files.',
      duration: '~ 20 min',
      isFree: false,
      inProgress: false,
      locked: true,
    },
    {
      num: 8,
      title: 'Mini Project',
      subtitle: 'Build a real-world Python project.',
      duration: '~ 40 min',
      isFree: false,
      inProgress: false,
      locked: true,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#F4F7FB] text-slate-900' : 'bg-[#060B13] text-white'
    } flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200`}>
      
      {/* Top Main Navigation */}
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
              onClick={onBackToLabs}
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
              onClick={onOpenInterviewSim}
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
                <span className="text-[10px] text-emerald-400 font-mono">Learner</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Workspace Body with Left Sidebar + Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 flex-1 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar (Matching Image 3) */}
        <aside className="w-full md:w-60 shrink-0 space-y-4">
          
          {/* Active Tech Pill Header */}
          <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center gap-2.5">
            <span className="text-2xl">🐍</span>
            <span className="font-bold text-sm tracking-wide text-white">Python</span>
          </div>

          {/* Sub-Navigation List */}
          <nav className="space-y-1 text-xs font-mono">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'lessons', label: 'Lessons', icon: Terminal },
              { id: 'practice', label: 'Practice', icon: Box },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'quiz', label: 'Quiz', icon: CheckCircle2 },
              { id: 'resources', label: 'Resources', icon: FileText },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as any);
                    SoundEffects.playDiscovery();
                    if (item.id === 'lessons') onStartLesson1();
                    if (item.id === 'practice') onOpenPlayground();
                  }}
                  className={`w-full p-2.5 rounded-xl text-left flex items-center gap-2.5 transition-all font-semibold ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Left Skylands Thumbnail with Accent Note */}
          <div className="hidden md:block relative rounded-2xl overflow-hidden border border-white/10 p-3 pt-12 text-left bg-gradient-to-t from-black via-black/40 to-transparent">
            <img 
              src="/images/hero_home.jpg" 
              alt="Floating City" 
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 -z-10"
            />
            <span className="font-script text-sm text-cyan-300 block drop-shadow">
              Small Steps<br />Big Dreams ↗
            </span>
          </div>
        </aside>

        {/* Center / Main Content Area */}
        <main className="flex-1 space-y-6">
          
          {/* Hero Course Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/25 bg-gradient-to-r from-[#0C182B] via-[#0E2038] to-[#0A1628] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            
            {/* Background Panorama Artwork */}
            <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
              <img 
                src="/images/python_overview.jpg" 
                alt="Skyline" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C182B] via-[#0C182B]/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              
              {/* Back Link */}
              <button
                onClick={onBackToLabs}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Labs</span>
              </button>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Title and Description */}
                <div className="text-left space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                      🐍
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Python
                      </h2>
                      <p className="text-xs font-mono text-cyan-300">
                        From Basics to Real-World Projects
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    Start your journey with Python — learn the fundamentals, code in real-time, solve problems and build projects.
                  </p>

                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold">
                      <Star className="w-3.5 h-3.5 fill-cyan-400" />
                      <span>Beginner Friendly</span>
                    </span>
                  </div>
                </div>

                {/* Floating NOVA Robot Quote Widget */}
                <div 
                  onClick={handleNovaSpeak}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/50 border border-cyan-400/30 backdrop-blur-md cursor-pointer hover:border-cyan-300 transition-all max-w-xs text-left group"
                  title="Click to hear NOVA"
                >
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-indigo-500 p-[2px] animate-float-nova shrink-0 shadow-lg shadow-cyan-500/40">
                    <div className="w-full h-full rounded-full bg-[#07101B] flex items-center justify-center text-xl">
                      🤖
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-200 italic line-clamp-2">
                      "Python is the key to unlock your future. Let's start!"
                    </p>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold block mt-0.5">
                      — NOVA 🎙️
                    </span>
                  </div>
                </div>

              </div>

              {/* 4 Feature Tabs (Learn, Practice, Build, Grow) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
                <div 
                  onClick={() => setSelectedQuickTab('learn')}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedQuickTab === 'learn' ? 'bg-cyan-500/20 border-cyan-400/50' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Learn</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Core concepts with bite-sized lessons</p>
                </div>

                <div 
                  onClick={() => setSelectedQuickTab('practice')}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedQuickTab === 'practice' ? 'bg-cyan-500/20 border-cyan-400/50' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 text-blue-300 text-xs font-bold mb-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Practice</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Code in real-time with instant feedback</p>
                </div>

                <div 
                  onClick={() => setSelectedQuickTab('build')}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedQuickTab === 'build' ? 'bg-cyan-500/20 border-cyan-400/50' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold mb-1">
                    <Box className="w-3.5 h-3.5" />
                    <span>Build</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Work on real projects & get certified</p>
                </div>

                <div 
                  onClick={() => setSelectedQuickTab('grow')}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedQuickTab === 'grow' ? 'bg-cyan-500/20 border-cyan-400/50' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Grow</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Track your progress and earn rewards</p>
                </div>
              </div>

            </div>
          </div>

          {/* Two-Column Section: Learning Path vs Progress Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Python Learning Path List */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Python Learning Path</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  0 / 8 Lessons Completed
                </span>
              </div>

              {/* Lesson Items */}
              <div className="space-y-3">
                {lessons.map((lesson) => {
                  return (
                    <div
                      key={lesson.num}
                      onClick={() => {
                        SoundEffects.playDiscovery();
                        if (lesson.num === 1 && onOpenIntroWorld) {
                          onOpenIntroWorld();
                        } else if (!lesson.locked) {
                          onStartLesson1();
                        } else {
                          onOpenLockedLesson(lesson.num);
                        }
                      }}
                      className={`group p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        lesson.inProgress
                          ? 'bg-gradient-to-r from-cyan-950/60 to-[#0A1628] border-cyan-400/60 shadow-[0_0_20px_rgba(0,210,255,0.25)]'
                          : lesson.locked
                          ? 'bg-white/[0.03] border-white/10 opacity-70 hover:opacity-90 hover:border-white/20'
                          : 'bg-white/[0.05] border-white/15 hover:border-cyan-400/40'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Number Badge or Icon */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                          lesson.inProgress
                            ? 'bg-cyan-400 text-deep-space'
                            : lesson.locked
                            ? 'bg-white/10 text-slate-400'
                            : 'bg-cyan-500/20 text-cyan-300'
                        }`}>
                          {lesson.inProgress ? (
                            <Play className="w-3.5 h-3.5 fill-deep-space" />
                          ) : (
                            lesson.num
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {lesson.title}
                            </h4>
                            {lesson.inProgress && (
                              <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 text-[9px] font-mono font-bold">
                                In Progress
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {lesson.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right Duration & Lock Status */}
                      <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{lesson.duration}</span>
                        </span>

                        {lesson.locked ? (
                          <div className="flex items-center gap-1 text-slate-500">
                            <Lock className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline text-[10px]">Locked</span>
                          </div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Col: Progress, Quotes & Quick Tools */}
            <div className="space-y-5 text-left">
              
              {/* Your Progress Card (Matching Image 3) */}
              <div className="p-5 rounded-3xl bg-[#0B1524]/90 border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white">Your Progress</h4>
                
                <div className="flex items-center gap-4">
                  {/* Circular 12% Progress Ring */}
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/10"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400"
                        strokeDasharray="12, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono font-bold text-xs text-white">12%</span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono flex-1">
                    <div className="flex justify-between text-slate-300">
                      <span>Lessons Completed</span>
                      <strong className="text-white">1 / 8</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Practice Exercises</span>
                      <strong className="text-white">0 / 10</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Projects</span>
                      <strong className="text-white">0 / 2</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Quiz Score</span>
                      <strong className="text-white">0%</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Card with Student Looking at City */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 p-5 text-left bg-gradient-to-t from-black via-black/60 to-transparent">
                <img 
                  src="/images/hero_home.jpg" 
                  alt="City Backdrop" 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-50 -z-10"
                />
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "The best time to start was yesterday. The next best time is now."
                </p>
                <span className="text-[10px] font-mono text-cyan-300 font-bold block mt-2">
                  — Future.AI
                </span>
              </div>

              {/* Quick Tools Grid */}
              <div className="p-5 rounded-3xl bg-[#0B1524]/90 border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Quick Tools
                </h4>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <button 
                    onClick={onOpenPlayground}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-slate-300 hover:text-white transition-all"
                  >
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Python Compiler</span>
                  </button>

                  <button 
                    onClick={onOpenPlayground}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-slate-300 hover:text-white transition-all"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>Jupyter Lab</span>
                  </button>

                  <button 
                    onClick={onOpenRecallWorkout}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-slate-300 hover:text-white transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>2-Min Recall</span>
                  </button>

                  <button 
                    onClick={onOpenInterviewSim}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-slate-300 hover:text-white transition-all"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                    <span>AI Mock Interv.</span>
                  </button>
                </div>
              </div>

              {/* Next Step Box (Start Lesson 1 Button) */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-cyan-950/60 to-[#0A1628] border border-cyan-400/40 shadow-[0_0_25px_rgba(0,210,255,0.25)] space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Next Step
                  </h4>
                </div>

                <p className="text-xs text-slate-300">
                  Complete your first lesson and write your first Python program.
                </p>

                <button
                  onClick={() => {
                    SoundEffects.playDiscovery();
                    onStartLesson1();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-deep-space font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.5)] hover:shadow-[0_0_30px_rgba(0,210,255,0.8)] transition-all transform active:scale-95"
                >
                  <span>Start Lesson 1</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};
