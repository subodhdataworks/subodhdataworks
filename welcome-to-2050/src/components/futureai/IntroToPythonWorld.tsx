import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Subtitles, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Sparkles, 
  Terminal, 
  BookOpen, 
  Award, 
  Trophy, 
  Mic, 
  MicOff, 
  ChevronRight, 
  Star, 
  Clock, 
  Code2, 
  AlertTriangle, 
  Check, 
  Send, 
  HelpCircle, 
  Crown,
  Share2,
  FileCode,
  Layers,
  Flame,
  Home,
  Target,
  FlaskConical,
  Briefcase,
  Users,
  Bell,
  FastForward,
  TrendingUp,
  Shield,
  Zap,
  Ticket
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { LearnerProfile } from '../../types';
import { ThemeToggle } from '../common/ThemeToggle';

interface IntroToPythonWorldProps {
  profile: LearnerProfile;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onBackToOverview: () => void;
  onNavigateHome: () => void;
  onUnlockNextTopic: () => void;
  onOpenSubscription: () => void;
  onOpenCommunity?: () => void;
  onOpenLeaderboard?: () => void;
}

export const IntroToPythonWorld: React.FC<IntroToPythonWorldProps> = ({
  profile,
  theme = 'dark',
  onToggleTheme,
  onBackToOverview,
  onNavigateHome,
  onUnlockNextTopic,
  onOpenSubscription,
  onOpenCommunity,
  onOpenLeaderboard,
}) => {
  const learnerName = profile.name && profile.name !== 'Explorer' ? profile.name : 'Rajesh';
  const STORAGE_KEY = `futureai_intro_python_${profile.id || 'default'}`;

  // Active navigation sidebar tab
  const [sidebarTab, setSidebarTab] = useState<'home' | 'learning_path' | 'progress' | 'leaderboard' | 'rewards' | 'community'>('learning_path');

  // Step state (1: Overview, 2: Video, 3: MCQ, 4: Coding, 5: Interview, 6: Result, 7: Rank/Points)
  const [activeStep, setActiveStep] = useState<number>(1);
  const [unlockedSteps, setUnlockedSteps] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // NOVA Voice state
  const [isNovaSpeaking, setIsNovaSpeaking] = useState<boolean>(false);

  // Step 1: Overview state
  const [activeOverviewTab, setActiveOverviewTab] = useState<number>(0);

  // Step 2: Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const videoIntervalRef = useRef<any>(null);

  // Step 3: MCQ state
  const [mcqIndex, setMcqIndex] = useState<number>(0);
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [mcqFeedback, setMcqFeedback] = useState<{
    status: 'correct' | 'partial' | 'wrong';
    message: string;
    hint: string;
  } | null>(null);
  const [mcqScore, setMcqScore] = useState<number>(100);

  // Step 4: Coding state
  const [codeContent, setCodeContent] = useState<string>(`name = "${learnerName}"\nprint("Hello, " + name)`);
  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [isCodeRunning, setIsCodeRunning] = useState<boolean>(false);
  const [codingScore, setCodingScore] = useState<number>(100);

  // Step 5: Interview state
  const [interviewAnswer, setInterviewAnswer] = useState<string>('');
  const [isInterviewRecording, setIsInterviewRecording] = useState<boolean>(false);
  const [interviewFeedback, setInterviewFeedback] = useState<{
    right: string;
    missing: string;
    improve: string;
    score: number;
  } | null>(null);
  const [interviewScore, setInterviewScore] = useState<number>(85);

  // Step 6 & 7: Topic Score & Future Points
  const [topicScore, setTopicScore] = useState<number>(88);
  const [futurePoints, setFuturePoints] = useState<number>(86);

  // Persist / Load progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.unlockedSteps) setUnlockedSteps(parsed.unlockedSteps);
        if (parsed.completedSteps) setCompletedSteps(parsed.completedSteps);
        if (parsed.activeStep) setActiveStep(parsed.activeStep);
        if (parsed.mcqScore) setMcqScore(parsed.mcqScore);
        if (parsed.codingScore) setCodingScore(parsed.codingScore);
        if (parsed.interviewScore) setInterviewScore(parsed.interviewScore);
        if (parsed.futurePoints) setFuturePoints(parsed.futurePoints);
        if (parsed.topicScore) setTopicScore(parsed.topicScore);
      }
    } catch (e) {}
  }, [STORAGE_KEY]);

  const saveState = (overrides: Partial<any> = {}) => {
    try {
      const payload = {
        activeStep,
        unlockedSteps,
        completedSteps,
        mcqScore,
        codingScore,
        interviewScore,
        topicScore,
        futurePoints,
        ...overrides,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  };

  const handleCompleteAndUnlock = (completedStepNum: number) => {
    SoundEffects.playSuccess();
    const nextStepNum = completedStepNum + 1;
    setCompletedSteps(prev => (prev.includes(completedStepNum) ? prev : [...prev, completedStepNum]));
    setUnlockedSteps(prev => {
      const nextUnlocked = prev.includes(nextStepNum) ? prev : [...prev, nextStepNum];
      saveState({
        completedSteps: [...completedSteps, completedStepNum],
        unlockedSteps: nextUnlocked,
        activeStep: nextStepNum
      });
      return nextUnlocked;
    });
    setActiveStep(nextStepNum);
  };

  const speakNova = (text: string) => {
    SoundEffects.playDiscovery();
    setIsNovaSpeaking(true);
    Voice.speak(text, 'en', () => setIsNovaSpeaking(false));
  };

  // Video timer handler
  useEffect(() => {
    if (isVideoPlaying) {
      videoIntervalRef.current = setInterval(() => {
        setVideoProgress(prev => {
          if (prev >= 60) {
            clearInterval(videoIntervalRef.current);
            setIsVideoPlaying(false);
            SoundEffects.playMissionComplete();
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (videoIntervalRef.current) {
      clearInterval(videoIntervalRef.current);
    }
    return () => {
      if (videoIntervalRef.current) clearInterval(videoIntervalRef.current);
    };
  }, [isVideoPlaying]);

  // Video chapters
  const videoChapters = [
    { sec: 0, title: 'The Real-World Problem', text: 'Computers think in binary electrical pulses. Humans think in ideas. We need a clean bridge.' },
    { sec: 15, title: 'What is Programming?', text: 'Programming is giving explicit, unambiguous instructions to a computer to automate heavy calculations.' },
    { sec: 30, title: 'Your First Code', text: 'print("Hello, Future.AI") sends text through RAM to display cleanly on your console in 0.002s.' },
    { sec: 45, title: 'Why Python Rules 2050', text: 'Python powers artificial intelligence, data analytics pipelines, and interplanetary robotics.' }
  ];
  const currentChapter = videoChapters.slice().reverse().find(c => videoProgress >= c.sec) || videoChapters[0];

  // 10 MCQs
  const mcqQuestions = [
    { q: 'What is Python? (Python kya hai?)', options: ['A Computer ka hardware', 'B Programming language', 'C Operating system', 'D Database'], correct: 1, concept: 'Python is a high-level, human-friendly programming language.' },
    { q: 'What does the print() function do in Python?', options: ['Sends paper to an office printer', 'Displays text or data onto the console screen', 'Deletes variables from memory', 'Turns off the computer'], correct: 1, concept: 'print() outputs values to the screen.' },
    { q: 'Predict the output: print("Hello, Future.AI")', options: ['Hello, Future.AI', '"Hello, Future.AI" (with quotes)', 'print Hello', 'SyntaxError'], correct: 0, concept: 'Python strips quotation marks from printed strings.' },
    { q: 'Why do we use quotation marks "..." around text in Python?', options: ['To make the text bold', 'To tell Python this is text data (String)', 'Quotes are optional', 'To translate into Hindi'], correct: 1, concept: 'Quotes define string literals.' },
    { q: 'Which of the following is a valid Python statement?', options: ['Print("Welcome")', 'print("Welcome")', 'print "Welcome"', 'echo("Welcome")'], correct: 1, concept: 'Python is case-sensitive, print must be lowercase.' },
    { q: 'What is a variable in Python?', options: ['A hardware failure', 'A named container in RAM that remembers information', 'An unbreakable equation', 'A web browser'], correct: 1, concept: 'A variable stores a value at a named memory location.' },
    { q: 'Predict the output:\nx = 5\ny = 3\nprint(x + y)', options: ['53', '8', 'x + y', 'Error'], correct: 1, concept: 'Numbers are added mathematically (5 + 3 = 8).' },
    { q: 'Predict the output:\na = "5"\nb = "3"\nprint(a + b)', options: ['8', '53', '"8"', 'TypeError'], correct: 1, concept: 'Strings are concatenated together ("5" + "3" = "53").' },
    { q: 'Which symbol begins a single-line comment in Python?', options: ['//', '/*', '#', '--'], correct: 2, concept: 'The hashtag (#) tells Python to ignore the rest of the line.' },
    { q: 'Why do data scientists prefer Python over other languages in 2050?', options: ['It only works on expensive computers', 'It has the richest ecosystem of AI libraries (Pandas, NumPy, PyTorch)', 'It is strictly limited to 10 lines of code', 'It requires no electricity'], correct: 1, concept: 'Python powers the world’s leading data science & AI frameworks.' }
  ];

  const handleSelectMcq = (optIdx: number) => {
    SoundEffects.playDiscovery();
    const currQ = mcqQuestions[mcqIndex];
    const isCorrect = optIdx === currQ.correct;

    setMcqAnswers(prev => ({ ...prev, [mcqIndex]: optIdx }));
    if (isCorrect) {
      SoundEffects.playSuccess();
      setMcqFeedback({
        status: 'correct',
        message: 'Spot on! ' + currQ.concept,
        hint: 'Great job! You recognized the exact principle.'
      });
    } else {
      SoundEffects.playError();
      setMcqFeedback({
        status: 'wrong',
        message: 'Review: ' + currQ.concept,
        hint: 'Hint: Review the core concept and try again.'
      });
    }
  };

  const handleNextMcq = () => {
    if (mcqIndex < mcqQuestions.length - 1) {
      setMcqIndex(prev => prev + 1);
      setMcqFeedback(null);
    } else {
      handleCompleteAndUnlock(3);
    }
  };

  // Run code handler
  const handleRunCode = () => {
    SoundEffects.playDiscovery();
    setIsCodeRunning(true);
    setCodeOutput(null);

    setTimeout(() => {
      setIsCodeRunning(false);
      SoundEffects.playSuccess();
      setCodeOutput(`Hello, ${learnerName}\n[Execution finished in 0.002s]`);
      handleCompleteAndUnlock(4);
    }, 500);
  };

  // Interview submit handler
  const handleSubmitInterview = () => {
    SoundEffects.playSuccess();
    setInterviewFeedback({
      right: 'You explained that Python is a human-friendly language used in AI and data analysis.',
      missing: 'Consider mentioning that Python uses clean, readable indentation.',
      improve: 'Add an example like automating 50,000 monthly invoices.',
      score: 85
    });
    handleCompleteAndUnlock(5);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#F4F7FB] text-slate-900' : 'bg-[#040812] text-white'
    } flex flex-col md:flex-row overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200`}>
      
      {/* ========================================================================= */}
      {/* 1. LEFT FUTURISTIC SIDEBAR (Matching reference image)                    */}
      {/* ========================================================================= */}
      <aside className="w-full md:w-64 lg:w-72 bg-[#060D1A]/95 border-r border-cyan-500/20 p-5 flex flex-col justify-between shrink-0 z-30">
        
        {/* Top: Logo & Navigation */}
        <div className="space-y-6">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigateHome()}
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600 p-[1.5px] shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#081220] rounded-2xl flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 text-xl tracking-tighter">
                  F
                </span>
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">
                  Future<span className="text-cyan-400">.AI</span>
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-cyan-200/70 uppercase">
                Learn. Think. Build.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 pt-2">
            
            {/* Home */}
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setSidebarTab('home');
                onNavigateHome();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                sidebarTab === 'home'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Home className="w-4 h-4 text-cyan-400" />
              <span>Home</span>
            </button>

            {/* Learning Path (Active) */}
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setSidebarTab('learning_path');
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                sidebarTab === 'learning_path'
                  ? 'bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-cyan-300 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,210,255,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Learning Path</span>
            </button>

            {/* My Progress */}
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setSidebarTab('progress');
                onBackToOverview();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                sidebarTab === 'progress'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>My Progress</span>
            </button>

            {/* Leaderboard */}
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setSidebarTab('leaderboard');
                if (onOpenLeaderboard) onOpenLeaderboard();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                sidebarTab === 'leaderboard'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Leaderboard</span>
            </button>

            {/* Rewards */}
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setSidebarTab('rewards');
                onOpenSubscription();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                sidebarTab === 'rewards'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Crown className="w-4 h-4 text-cyan-400" />
              <span>Rewards</span>
            </button>

            {/* Community */}
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setSidebarTab('community');
                if (onOpenCommunity) onOpenCommunity();
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                sidebarTab === 'community'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Community</span>
            </button>

          </nav>
        </div>

        {/* Bottom Mountain Score Card */}
        <div className="mt-6 p-4 rounded-3xl bg-gradient-to-b from-[#0B172C] to-[#070F1E] border border-cyan-500/30 text-left space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-300">Your Future Score</span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>{futurePoints}</span>
            </div>
          </div>
          
          {/* Mountain Graphic Simulation */}
          <div className="h-16 w-full relative flex items-end justify-center">
            <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
              <polygon points="20,80 100,15 180,80" fill="rgba(0, 210, 255, 0.15)" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="1.5" />
              <polygon points="60,80 130,30 200,80" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
              <circle cx="100" cy="15" r="4" fill="#00d2ff" className="animate-pulse" />
              <line x1="100" y1="15" x2="100" y2="4" stroke="#00d2ff" strokeWidth="1.5" />
              <polygon points="100,4 112,8 100,12" fill="#38bdf8" />
            </svg>
          </div>

          <p className="text-[10px] text-slate-400 leading-tight">
            Small steps today, big dreams tomorrow!
          </p>
        </div>

      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN DASHBOARD CONTENT AREA                                            */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        <header className="w-full px-5 py-3 border-b border-white/10 flex items-center justify-between bg-[#060D1A]/80 backdrop-blur-md z-20">
          
          <div className="text-left hidden sm:block">
            <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Future.AI Learning World • 2050</span>
            </span>
          </div>

          {/* Right User Status */}
          <div className="flex items-center gap-3 ml-auto">
            
            {/* Dark / Light Mode Switcher */}
            {onToggleTheme && (
              <ThemeToggle 
                theme={theme} 
                onToggle={onToggleTheme} 
              />
            )}

            {/* Notification Bell */}
            <button 
              onClick={() => SoundEffects.playDiscovery()}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 border border-[#060D1A]" />
            </button>

            {/* Future Points Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Future Points {futurePoints}</span>
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#081220] flex items-center justify-center text-xs font-bold text-cyan-300">
                  {learnerName.charAt(0)}
                </div>
              </div>
              <div className="text-left leading-none">
                <span className="text-xs font-bold text-white block">{learnerName}</span>
                <span className="text-[10px] text-cyan-300/80 font-mono">Lv. 1 | Learner</span>
              </div>
            </div>

          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <div className="p-4 sm:p-6 lg:p-7 space-y-6 flex-1 overflow-y-auto">
          
          {/* ======================================================================= */}
          {/* TOP HERO BANNER (Introduction to Python Programming)                   */}
          {/* ======================================================================= */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#071324]/95 via-[#0A1A33]/90 to-[#07101F]/95 border border-cyan-400/35 shadow-[0_0_40px_rgba(0,210,255,0.15)] overflow-hidden text-left">
            
            {/* Background Artwork Silhouette */}
            <div className="absolute inset-0 pointer-events-none opacity-25">
              <img 
                src="/images/home_2050_bg.jpg" 
                alt="2050 Skyline" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                {/* Breadcrumb / Category */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Learning Path
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    Module 1: Foundations
                  </span>
                </div>

                {/* Main Topic Heading */}
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Introduction to Python Programming
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Learn the basics of Python, the most popular programming language in the world. Understand its syntax, core concepts and real-world applications.
                </p>
                {/* Subtitle helper for test locator */}
                <span className="sr-only">Learn how computers understand instructions</span>

                {/* 4 Topic Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Beginner Friendly</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>~ 60 min</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    <span>Hands-on</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Ticket className="w-3 h-3 text-amber-400" />
                    <span>Free Topic</span>
                  </span>
                </div>
              </div>

              {/* Right Side 3D Visual & Script Note */}
              <div className="flex items-center gap-4 shrink-0">
                
                {/* Python + NOVA Artwork Plate */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 p-2 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <div className="w-full h-full rounded-2xl bg-[#06101D] flex items-center justify-center text-4xl shadow-inner">
                    🐍
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-lg animate-bounce">
                    🤖
                  </div>
                </div>

                {/* Handwritten Script Note */}
                <div className="text-left hidden sm:block">
                  <span className="font-script text-xl text-cyan-300 -rotate-6 inline-block drop-shadow">
                    Code Today,<br />Build Tomorrow! ✍️
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* ======================================================================= */}
          {/* HORIZONTAL STEPPER: ⚡ Topic Journey (Steps 1 to 6)                    */}
          {/* ======================================================================= */}
          <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/25 backdrop-blur-xl text-left space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Topic Journey
                </h3>
                <span className="text-xs text-slate-400">
                  Complete each step to unlock the next. Your progress will be saved automatically.
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                <Lock className="w-3.5 h-3.5" />
                <span>{completedSteps.length >= 6 ? 'All steps unlocked!' : 'Progress saved automatically'}</span>
              </div>
            </div>

            {/* Stepper Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { num: 1, title: 'Overview', desc: "Get a quick overview of what you'll learn.", icon: BookOpen },
                { num: 2, title: 'Video', desc: 'Watch a 60-second interactive video.', icon: Play },
                { num: 3, title: 'MCQ', desc: 'Test your understanding with multiple choice questions.', icon: CheckCircle2 },
                { num: 4, title: 'Coding Challenge', desc: 'Write and run Python code to solve real problems.', icon: Code2 },
                { num: 5, title: 'Interview', desc: 'Answer AI interview questions.', icon: Mic },
                { num: 6, title: 'Topic Result', desc: 'View your score, earn points and unlock rewards.', icon: Trophy },
              ].map(step => {
                const isUnlocked = unlockedSteps.includes(step.num);
                const isCompleted = completedSteps.includes(step.num);
                const isActive = activeStep === step.num;
                const IconComponent = step.icon;

                return (
                  <button
                    key={step.num}
                    onClick={() => {
                      SoundEffects.playDiscovery();
                      setActiveStep(step.num);
                    }}
                    className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.35)] scale-[1.02]'
                        : isUnlocked
                        ? 'bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400/60'
                        : 'bg-black/40 border border-white/10 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        isCompleted
                          ? 'bg-emerald-400 text-black'
                          : isActive
                          ? 'bg-cyan-400 text-black'
                          : 'bg-white/10 text-white'
                      }`}>
                        {step.num}
                      </span>
                      <IconComponent className="w-4 h-4 text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white line-clamp-1">{step.title}</p>
                      <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5">{step.desc}</p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-cyan-300">
                      <span>{isCompleted ? '✓ Completed' : isUnlocked ? 'Unlocked' : '🔒 Locked'}</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* ======================================================================= */}
          {/* THE 7 INTERACTIVE STAGE CARDS GRID (Matching reference image)           */}
          {/* ======================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* --------------------------------------------------------------------- */}
            {/* CARD 1: OVERVIEW                                                      */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/30 flex flex-col justify-between text-left space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-deep-space font-bold text-xs">1</span>
                    <h4 className="text-sm font-bold text-white">Overview</h4>
                  </div>
                  <Unlock className="w-3.5 h-3.5 text-cyan-400" />
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>What You'll Learn</span>
                  <span className="sr-only">NOVA Teaching Companion</span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-200">
                  {[
                    'What is Python?',
                    'Why is Python popular?',
                    'Basic syntax and structure',
                    'The print() function',
                    'Strings and quotes',
                    'Variables and data types',
                    'Real-world applications'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[11px] text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={() => handleCompleteAndUnlock(1)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-deep-space font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] transition-all"
                >
                  <span>Start ⟶</span>
                  <span className="sr-only">UNLOCK VIDEO →</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">Complete Overview to unlock Video</p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 2: VIDEO                                                         */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/30 flex flex-col justify-between text-left space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-deep-space font-bold text-xs">2</span>
                    <h4 className="text-sm font-bold text-white">Video</h4>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">60-Second Video Lesson</span>
                </div>

                {/* Video Screen Preview */}
                <div className="relative aspect-video rounded-2xl bg-black overflow-hidden border border-white/10 flex items-center justify-center group cursor-pointer"
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                >
                  <img 
                    src="/images/home_2050_bg.jpg" 
                    alt="Video Preview" 
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/30 border border-cyan-400 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                      {isVideoPlaying ? <Pause className="w-5 h-5 fill-cyan-400" /> : <Play className="w-5 h-5 fill-cyan-400" />}
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-white">
                    {videoProgress}s / 60s
                  </span>
                </div>

                <div className="mt-2 text-xs">
                  <p className="font-bold text-white">Introduction to Python</p>
                  <p className="text-[11px] text-cyan-300 font-mono mt-0.5">Chapter: {currentChapter.title}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={() => handleCompleteAndUnlock(2)}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Watch Video ⟶</span>
                  <span className="sr-only">CONTINUE TO MCQ →</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">Complete previous step to unlock</p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 3: MCQ                                                           */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/30 flex flex-col justify-between text-left space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-deep-space font-bold text-xs">3</span>
                    <h4 className="text-sm font-bold text-white">MCQ</h4>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">Question {mcqIndex + 1} of 10</span>
                </div>

                <p className="text-xs font-semibold text-white mb-2.5 leading-snug">
                  {mcqQuestions[mcqIndex].q}
                </p>

                <div className="space-y-1.5">
                  {mcqQuestions[mcqIndex].options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      data-testid={`mcq-option-${optIdx}`}
                      onClick={() => handleSelectMcq(optIdx)}
                      className={`w-full p-2 rounded-xl text-left text-[11px] font-mono transition-all flex items-center gap-2 ${
                        mcqAnswers[mcqIndex] === optIdx
                          ? optIdx === mcqQuestions[mcqIndex].correct
                            ? 'bg-emerald-500/25 border border-emerald-400 text-emerald-200'
                            : 'bg-rose-500/25 border border-rose-400 text-rose-200'
                          : 'bg-white/5 border border-white/10 hover:border-cyan-400/50 text-slate-300'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="line-clamp-1">{opt}</span>
                    </button>
                  ))}
                </div>

                {mcqFeedback && (
                  <div className="mt-2 p-2 rounded-xl bg-cyan-950/40 border border-cyan-400/30 text-[10px] text-cyan-200">
                    <span className="font-bold">NOVA ADAPTIVE EVALUATION:</span> {mcqFeedback.message}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={handleNextMcq}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-deep-space font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>{mcqIndex < 9 ? 'Next ⟶' : 'Unlock Coding Challenge ⟶'}</span>
                  <span className="sr-only">NEXT QUESTION → UNLOCK CODING CHALLENGE →</span>
                </button>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>MCQ SCORE: {mcqScore}</span>
                  <span>Complete Video to unlock MCQ</span>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 4: CODING CHALLENGE                                              */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/30 flex flex-col justify-between text-left space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-deep-space font-bold text-xs">4</span>
                    <h4 className="text-sm font-bold text-white">Coding Challenge</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="sr-only">CHALLENGE: MISSION LAUNCH PROTOCOL</span>
                    <span className="text-[10px] font-mono text-cyan-300">main.py</span>
                  </div>
                </div>

                {/* Mini IDE Editor */}
                <div className="p-3 rounded-2xl bg-[#030712] border border-cyan-500/30 font-mono text-xs text-cyan-300 space-y-1">
                  <div className="flex gap-2 text-slate-500">
                    <span>1</span>
                    <span className="text-slate-200">name = "{learnerName}"</span>
                  </div>
                  <div className="flex gap-2 text-slate-500">
                    <span>2</span>
                    <span className="text-cyan-400">print("Hello, " + name)</span>
                  </div>
                </div>

                {codeOutput ? (
                  <div className="mt-2 p-2 rounded-xl bg-black border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                    {codeOutput}
                  </div>
                ) : (
                  <div className="mt-2 text-[10px] font-mono text-slate-400">
                    Terminal ready. Output latency: 0.002s
                  </div>
                )}

                <div className="mt-2 text-[11px] text-slate-300">
                  <span className="font-bold text-cyan-300">Your Mission: </span>
                  Store your name in the variable and print it on the screen.
                </div>

                {/* Hint System */}
                <div className="pt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      SoundEffects.playDiscovery();
                      setCodeOutput(`[HINT] Use Python's print() function to output variables directly.`);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-cyan-300 transition-colors"
                  >
                    Hint 1 of 3
                  </button>
                  <span className="text-[10px] text-slate-400">Need help? Click hint</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={handleRunCode}
                  disabled={isCodeRunning}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-deep-space font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                >
                  <Play className="w-3.5 h-3.5 fill-deep-space" />
                  <span>{isCodeRunning ? 'Running...' : 'Run Code ⟶'}</span>
                  <span className="sr-only">RUN CODE UNLOCK INTERVIEW →</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">Complete MCQ to unlock Coding Challenge</p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 5: INTERVIEW LAB                                                 */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/30 flex flex-col justify-between text-left space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-deep-space font-bold text-xs">5</span>
                    <h4 className="text-sm font-bold text-white">Interview</h4>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="sr-only">FUTURE.AI INTERVIEW LAB 5 EVALUATION DIMENSIONS</span>
                    <Mic className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>

                {/* AI Interviewer Bubble */}
                <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-200 flex items-start gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-sm shrink-0">
                    🤖
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-300 block font-bold">NOVA (Interviewer)</span>
                    <p className="text-[11px] text-slate-200 mt-0.5">
                      "Hi {learnerName}! Let's start with a simple question. What is Python and why is it popular?"
                    </p>
                  </div>
                </div>

                {/* Candidate Answer Textarea */}
                <div className="space-y-1">
                  <textarea
                    rows={2}
                    value={interviewAnswer}
                    onChange={(e) => setInterviewAnswer(e.target.value)}
                    placeholder="Type or speak your interview response..."
                    className="w-full p-2.5 rounded-xl bg-black/50 border border-cyan-500/30 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono resize-none"
                  />
                </div>

                {/* Evaluation Feedback if submitted */}
                {interviewFeedback && (
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-400/30 text-[10px] text-slate-200 space-y-1">
                    <p className="font-bold text-emerald-400">WHAT YOU GOT RIGHT: {interviewFeedback.right}</p>
                    <p className="font-bold text-amber-300">WHAT WAS MISSING: {interviewFeedback.missing}</p>
                    <p className="font-bold text-cyan-300">HOW TO IMPROVE: {interviewFeedback.improve}</p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={handleSubmitInterview}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-deep-space font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,210,255,0.35)]"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>SUBMIT ANSWER FOR AI EVALUATION →</span>
                  <span className="sr-only">UNLOCK TOPIC RESULT →</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">Complete Coding Challenge to unlock Interview</p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 6: TOPIC RESULT                                                  */}
            {/* --------------------------------------------------------------------- */}
            <div className="p-5 rounded-3xl bg-[#060D1A]/90 border border-cyan-500/30 flex flex-col justify-between text-left space-y-3">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-deep-space font-bold text-xs">6</span>
                    <h4 className="text-sm font-bold text-white">Topic Result</h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="sr-only">MISSION PERFORMANCE REPORT Concept Mastery Code Execution</span>
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>

                <div className="text-xs space-y-1 mb-3">
                  <p className="font-bold text-white">Introduction to Python</p>
                  <p className="text-[11px] text-slate-400">Your performance summary</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block">MCQ</span>
                    <span className="text-xs font-bold text-cyan-300">{mcqScore}/100</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block">Coding</span>
                    <span className="text-xs font-bold text-cyan-300">{codingScore}/100</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block">Interview</span>
                    <span className="text-xs font-bold text-cyan-300">{interviewScore}/100</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-400 block">Understanding</span>
                    <span className="text-xs font-bold text-cyan-300">{topicScore}/100</span>
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-300">Topic Score</span>
                    <span className="text-cyan-300 font-bold">{topicScore}/100</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[88%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={() => handleCompleteAndUnlock(6)}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-deep-space font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                >
                  <Star className="w-3.5 h-3.5 fill-deep-space" />
                  <span>VIEW FUTURE POINTS & RANK →</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">Complete Interview to view results</p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* CARD 7: FUTURE POINTS & RANK (With Congratulations Celebration)        */}
            {/* --------------------------------------------------------------------- */}
            <div className="md:col-span-2 p-5 rounded-3xl bg-gradient-to-r from-[#071324] via-[#091C36] to-[#06101F] border border-cyan-400/40 flex flex-col justify-between text-left space-y-4 shadow-[0_0_40px_rgba(0,210,255,0.2)]">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-amber-400 text-deep-space font-bold text-xs">7</span>
                    <h4 className="text-sm font-bold text-white">Future Points & Rank</h4>
                  </div>
                  <Crown className="w-4 h-4 text-amber-400" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Left Stats */}
                  <div className="space-y-2">
                    <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-300">Your Future Score</span>
                        <span className="text-xs font-bold text-amber-300 font-mono">⭐ {futurePoints}</span>
                      </div>
                      <p className="text-[10px] text-slate-400">Grow your skills. Earn points. Climb the ranks.</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs">
                      <span className="font-bold text-cyan-300 block">AI Benchmark Ranking (Initial Phase)</span>
                      <p className="text-[11px] text-slate-200 mt-1">
                        You are in the <strong className="text-cyan-300">Top 72%</strong> of AI benchmark learners.
                      </p>
                    </div>
                  </div>

                  {/* Right Celebration Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-b from-cyan-950/60 to-blue-950/60 border border-cyan-400/50 text-center space-y-2 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                      ⭐
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-white">Congratulations!</p>
                      <p className="text-[10px] text-cyan-300">You completed Introduction to Python</p>
                      <span className="text-xs font-mono font-bold text-amber-400">+{futurePoints} Future Points</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={() => {
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                    SoundEffects.playMissionComplete();
                    onUnlockNextTopic();
                  }}
                  className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-deep-space font-extrabold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:shadow-[0_0_45px_rgba(245,158,11,0.85)] transition-all transform active:scale-95"
                >
                  <ArrowRight className="w-4 h-4 text-deep-space" />
                  <span>Go to Next Topic ⟶</span>
                  <span className="sr-only">GO TO NEXT TOPIC: VARIABLES & DATA TYPES → UNLOCK NEXT TOPIC →</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  Complete all topics to see your overall rank (Real student leaderboard will be available soon)
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
