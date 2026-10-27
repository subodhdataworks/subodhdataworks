import React, { useState, useEffect } from 'react';
import {
  Search, Bell, Bot, ChevronDown, ChevronUp, ChevronRight,
  FileText, Clock, Code, Database, Home,
  Briefcase, Users, HelpCircle, Send, Volume2, VolumeX,
  Sparkles, Gamepad2, Mic, Trophy, BarChart3,
  TrendingUp, ShieldCheck, GraduationCap, FolderKanban, Layers,
  MonitorPlay, Target, Rocket, Award, Zap, Star,
  CheckCircle2, Timer, BookMarked, Grid, List as ListIcon,
  Settings, Folder, Globe, GitBranch
} from 'lucide-react';
import { PythonTopicWorkspace, WorkspaceStepId } from './PythonTopicWorkspace';
import { soundEffects } from '../../services/soundEffects';
import { PYTHON_MODULES, CourseTopic } from './data/pythonCourseData';
import './PythonModuleDetail.css';

interface PythonModuleDetailProps {
  userName?: string;
  onBack: () => void;
  onOpenUnlockModal: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
  onNavigateSidebar?: (tab: string) => void;
  hideOuterNav?: boolean;
}

// 3D Icon configs per type
const THUMB_CFG: Record<string, { bg: string; glow: string; node: React.ReactNode }> = {
  python:    { bg: 'linear-gradient(145deg,#1a2744 0%,#1e3a5f 100%)', glow: 'rgba(56,189,248,0.55)',  node: <img src="/images/python_logo_3d_hd.png" alt="" style={{width:26,height:26,objectFit:'contain'}} /> },
  code:      { bg: 'linear-gradient(145deg,#0c1445 0%,#1e3a8a 100%)', glow: 'rgba(96,165,250,0.5)',   node: <span style={{fontFamily:'monospace',fontWeight:900,color:'#60a5fa',fontSize:'1rem'}}>&lt;/&gt;</span> },
  terminal:  { bg: 'linear-gradient(145deg,#1e1b4b 0%,#312e81 100%)', glow: 'rgba(167,139,250,0.5)', node: <span style={{fontFamily:'monospace',fontWeight:900,color:'#a78bfa',fontSize:'0.95rem'}}>&gt;_</span> },
  data:      { bg: 'linear-gradient(145deg,#082f49 0%,#0c4a6e 100%)', glow: 'rgba(14,165,233,0.5)',  node: <Database style={{width:16,height:16,color:'#38bdf8'}} /> },
  loop:      { bg: 'linear-gradient(145deg,#431407 0%,#7c2d12 100%)', glow: 'rgba(249,115,22,0.5)',  node: <Layers style={{width:16,height:16,color:'#fb923c'}} /> },
  structure: { bg: 'linear-gradient(145deg,#2e1065 0%,#4c1d95 100%)', glow: 'rgba(139,92,246,0.55)', node: <Grid style={{width:16,height:16,color:'#a78bfa'}} /> },
  function:  { bg: 'linear-gradient(145deg,#500724 0%,#881337 100%)', glow: 'rgba(236,72,153,0.5)',  node: <Zap style={{width:16,height:16,color:'#f472b6'}} /> },
  oop:       { bg: 'linear-gradient(145deg,#1e1b4b 0%,#3730a3 100%)', glow: 'rgba(99,102,241,0.5)',  node: <Settings style={{width:16,height:16,color:'#818cf8'}} /> },
  file:      { bg: 'linear-gradient(145deg,#052e16 0%,#14532d 100%)', glow: 'rgba(34,197,94,0.5)',   node: <Folder style={{width:16,height:16,color:'#4ade80'}} /> },
  project:   { bg: 'linear-gradient(145deg,#451a03 0%,#78350f 100%)', glow: 'rgba(245,158,11,0.55)', node: <Rocket style={{width:16,height:16,color:'#fbbf24'}} /> },
};

const TopicThumbIcon: React.FC<{ iconType: string }> = ({ iconType }) => {
  const cfg = THUMB_CFG[iconType] || THUMB_CFG.code;
  return (
    <div className="topic-thumb-3d" style={{ background: cfg.bg, boxShadow: `0 4px 14px ${cfg.glow}, inset 0 1px 0 rgba(255,255,255,0.08)` }}>
      {cfg.node}
    </div>
  );
};

export const PythonModuleDetail: React.FC<PythonModuleDetailProps> = ({
  userName = 'Rahul Sharma',
  onBack,
  onOpenUnlockModal,
  onOpenAdvisor,
  onNavigateSidebar,
  hideOuterNav = false,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(() => soundEffects.getSoundEnabled());
  const [expandedMods, setExpandedMods] = useState<Set<number>>(new Set([1]));
  const [activeTopicWs, setActiveTopicWs] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null;
    const baseHash = window.location.hash.split('?')[0];
    const isStep = ['#practice','#mcq','#play','#codequest','#workspace','#code','#codepractice','#interview','#mockinterview','#score','#scorecard','#learn','#video'].includes(baseHash);
    if (!isStep) return null;
    const params = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
    const t = params.get('topic');
    return t ? parseInt(t, 10) : 1;
  });
  const [targetStep, setTargetStep] = useState<WorkspaceStepId>(() => {
    if (typeof window !== 'undefined') {
      const baseHash = window.location.hash.split('?')[0];
      if (baseHash === '#practice' || baseHash === '#mcq') return 'practice';
      if (baseHash === '#play' || baseHash === '#codequest') return 'play';
      if (baseHash === '#code' || baseHash === '#codepractice') return 'code';
      if (baseHash === '#interview' || baseHash === '#mockinterview') return 'interview';
      if (baseHash === '#score' || baseHash === '#scorecard') return 'score';
    }
    return 'learn';
  });
  const [aiInput, setAiInput] = useState('');
  const [aiMsgs, setAiMsgs] = useState<{ role: 'user'|'ai'; text: string }[]>([]);

  useEffect(() => {
    const h = () => {
      const hash = window.location.hash;
      const stepRoutes = ['#practice','#mcq','#play','#codequest','#workspace','#code','#codepractice','#interview','#mockinterview','#score','#scorecard','#learn','#video'];
      const baseHash = hash.split('?')[0];
      if (stepRoutes.includes(baseHash)) {
        const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
        const hashTopicId = params.get('topic');
        if (hashTopicId) {
          setActiveTopicWs(parseInt(hashTopicId, 10));
        } else {
          setActiveTopicWs(prev => prev ?? 1);
        }
        if (baseHash === '#practice' || baseHash === '#mcq') {
          setTargetStep('practice');
        } else if (baseHash === '#play' || baseHash === '#codequest') {
          setTargetStep('play');
        } else if (baseHash === '#code' || baseHash === '#codepractice') {
          setTargetStep('code');
        } else if (baseHash === '#interview' || baseHash === '#mockinterview') {
          setTargetStep('interview');
        } else if (baseHash === '#score' || baseHash === '#scorecard') {
          setTargetStep('score');
        } else {
          setTargetStep('learn');
        }
      }
    };
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);

  const toggleMod = (id: number) => {
    if (soundEnabled) soundEffects.playClick();
    setExpandedMods(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const openTopic = (topic: CourseTopic, step: WorkspaceStepId = 'learn') => {
    if (soundEnabled) soundEffects.playClick();
    setTargetStep(step);
    setActiveTopicWs(topic.id);
    const map: Record<WorkspaceStepId, string> = { learn:'#learn', practice:'#practice', play:'#play', code:'#code', interview:'#interview', score:'#score' };
    const stepHash = map[step] || '#learn';
    window.location.hash = `${stepHash}?topic=${topic.id}`;
  };

  const sendAi = (text?: string) => {
    const q = text || aiInput;
    if (!q.trim()) return;
    if (soundEnabled) soundEffects.playClick();
    setAiMsgs(p => [...p, { role: 'user', text: q }]);
    setAiInput('');
    setTimeout(() => {
      const l = q.toLowerCase();
      let r = `Python is the #1 tool for data analysis! Regarding "${q}" — practice makes perfect. Try solving challenges in the Code Practice tab.`;
      if (l.includes('simple') || l.includes('explain')) r = "Python reads like plain English! With just `print('Hello World')`, you're programming. It powers Google, Netflix and OpenAI!";
      else if (l.includes('code')) r = "```python\nsales = [120, 300, 450, 600]\nhigh_sales = [s for s in sales if s > 250]\nprint(f'Total High Value: {len(high_sales)}')\n```";
      else if (l.includes('practice')) r = "Practice Challenge: Write a Python program to take 2 numbers as input and calculate their sum, average and percentage!";
      else if (l.includes('real') || l.includes('use')) r = "Real-world: Spotify uses Python for recommendations, JPMorgan for algorithmic trading, and YouTube for video streaming!";
      setAiMsgs(p => [...p, { role: 'ai', text: r }]);
    }, 350);
  };

  if (activeTopicWs !== null) {
    return <PythonTopicWorkspace userName={userName} topicId={activeTopicWs} initialStep={targetStep}
      onBack={() => { setActiveTopicWs(null); window.location.hash = '#python'; }}
      onOpenUnlockModal={onOpenUnlockModal} />;
  }

  const sidebarNav = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-4 h-4" /> },
    { id: 'mylearning', label: 'My Learning', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'python', label: 'Python', icon: <img src="/images/python_logo_3d_hd.png" alt="" className="w-4 h-4 object-contain" />, active: true },
    { id: 'sql', label: 'SQL', icon: <Database className="w-4 h-4" /> },
    { id: 'excel', label: 'Excel', icon: <FileText className="w-4 h-4" /> },
    { id: 'powerbi', label: 'Power BI', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'statistics', label: 'Statistics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'genai', label: 'GenAI', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban className="w-4 h-4" /> },
    { id: 'interview', label: 'Interview Prep', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'placement', label: 'Placement Support', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
    { id: 'certificates', label: 'Certificates', icon: <Trophy className="w-4 h-4" /> },
    { id: 'help', label: 'Help & Support', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const modulesMeta = [
    { id: 1, num: '1', name: 'Introduction to Programming & Python Thinking', icon: <img src="/images/python_logo_3d_hd.png" className="w-5 h-5 object-contain" alt="" />, color: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', sqBg: '#e0f2fe', count: 9, free: true, desc: 'Real-life programming examples, why Python leads everywhere, how computers understand instructions, VS Code setup, first Python program, step-by-step code execution, beginner mistakes, and programmer mindset.' },
    { id: 2, num: '2', name: 'Variables & Data – How Python Stores Information', icon: <Grid className="w-4 h-4 text-sky-500" />, color: '#0ea5e9', sqBg: '#e0f2fe', count: 11, free: true, desc: 'Understand variables with real-life box analogies, variable naming rules, data types, type checking, type conversion, dynamic typing, memory concepts, and common quote vs number confusions.' },
    { id: 3, num: '3', name: 'Input, Output & User Interaction', icon: <Layers className="w-4 h-4 text-orange-500" />, color: '#f97316', sqBg: '#ffedd5', count: 8, free: true, desc: 'Learn how to take user input, display clean output, format strings with f-strings, handle input data types, and build interactive Python programs.' },
    { id: 4, num: '4', name: 'Operators & Logic', icon: <Database className="w-4 h-4 text-purple-500" />, color: '#a855f7', sqBg: '#f3e8ff', count: 10, free: true, desc: 'Master arithmetic, comparison, and logical operators, operator precedence, and real-life logic expressions.' },
    { id: 5, num: '5', name: 'Conditional Statements – Decision Making', icon: <Settings className="w-4 h-4 text-pink-500" />, color: '#ec4899', sqBg: '#fce7f3', count: 8, free: true, desc: 'Learn how programs make decisions using if, if-else, elif, nested conditions, and real-world login logic.' },
    { id: 6, num: '6', name: 'Loops – Repeating Tasks Automatically', icon: <Settings className="w-4 h-4 text-indigo-500" />, color: '#8b5cf6', sqBg: '#ede9fe', count: 8, free: true, desc: 'Automate repetitive tasks using for and while loops, break and continue, nested loops, and safe loop control.' },
    { id: 7, num: '7', name: 'Strings – Working with Text Data', icon: <Folder className="w-4 h-4 text-emerald-500" />, color: '#10b981', sqBg: '#d1fae5', count: 10, free: true, desc: 'Master string manipulation, indexing, slicing, built-in string methods, formatting, and real-world text processing.' },
    { id: 8, num: '8', name: 'Lists – Storing Multiple Values', icon: <Rocket className="w-4 h-4 text-amber-500" />, color: '#eab308', sqBg: '#fef3c7', count: 7, free: true, desc: 'Learn how to create lists, access and modify items, iterate over collections, use list methods, and avoid common pitfalls.' },
    { id: 9, num: '9', name: 'Tuples, Sets & Dictionaries', icon: <Database className="w-4 h-4 text-purple-500" />, color: '#8b5cf6', sqBg: '#ede9fe', count: 7, free: true, desc: 'Understand immutable tuples, unique sets, key-value dictionaries, and when to choose each data structure.' },
    { id: 10, num: '10', name: 'Functions – Reusable Code Blocks', icon: <Settings className="w-4 h-4 text-pink-500" />, color: '#ec4899', sqBg: '#fce7f3', count: 7, free: true, desc: 'Write clean, modular code using Python functions, parameters, return values, default arguments, and variable scope.' },
    { id: 11, num: '11', name: 'Problem Solving & Logic Building', icon: <Rocket className="w-4 h-4 text-cyan-500" />, color: '#06b6d4', sqBg: '#cffafe', count: 6, free: true, desc: 'Learn how to think before coding, break problems into steps, write pseudocode, solve patterns, and debug logic errors.' },
    { id: 12, num: '12', name: 'File Handling – Working with Files', icon: <Folder className="w-4 h-4 text-teal-500" />, color: '#14b8a6', sqBg: '#ccfbf1', count: 6, free: true, desc: 'Learn how to open, read, and write files safely in Python using file modes, real-world workflows, and error handling.' },
    { id: 13, num: '13', name: 'Exception Handling – Handling Errors', icon: <Settings className="w-4 h-4 text-rose-500" />, color: '#ef4444', sqBg: '#fee2e2', count: 5, free: true, desc: 'Handle runtime crashes gracefully with try-except, finally blocks, custom exceptions, and a strong debugging mindset.' },
    { id: 14, num: '14', name: 'Modules & Libraries', icon: <Layers className="w-4 h-4 text-blue-500" />, color: '#3b82f6', sqBg: '#dbeafe', count: 5, free: true, desc: 'Organize code into reusable Python modules, import standard libraries, install packages with pip, and manage virtual environments.' },
    { id: 15, num: '15', name: 'Object-Oriented Programming (OOP)', icon: <Database className="w-4 h-4 text-purple-600" />, color: '#9333ea', sqBg: '#f3e8ff', count: 5, free: true, desc: 'Model real-world entities in Python using classes, objects, __init__ constructors, attributes, and methods.' },
    { id: 16, num: '16', name: 'OOP Advanced Concepts', icon: <Layers className="w-4 h-4 text-violet-600" />, color: '#7c3aed', sqBg: '#ede9fe', count: 5, free: true, desc: 'Master the four pillars of Object-Oriented Programming: Inheritance, Encapsulation, Polymorphism, and Abstraction.' },
    { id: 17, num: '17', name: 'Working with APIs', icon: <Rocket className="w-4 h-4 text-sky-600" />, color: '#0284c7', sqBg: '#e0f2fe', count: 5, free: true, desc: 'Connect Python applications to live web services using REST APIs, the requests library, JSON parsing, and API error handling.' },
    { id: 18, num: '18', name: 'Automation with Python', icon: <Settings className="w-4 h-4 text-orange-500" />, color: '#f97316', sqBg: '#ffedd5', count: 5, free: true, desc: 'Save hours of manual effort by automating files, emails, browser tasks, and recurring schedules with Python.' },
    { id: 19, num: '19', name: 'Data Handling & Processing', icon: <Database className="w-4 h-4 text-emerald-500" />, color: '#10b981', sqBg: '#d1fae5', count: 4, free: true, desc: 'Read and process tabular datasets with CSV files, clean messy records, and get started with Pandas DataFrames.' },
    { id: 20, num: '20', name: 'Advanced Python Concepts', icon: <Rocket className="w-4 h-4 text-purple-600" />, color: '#8b5cf6', sqBg: '#f3e8ff', count: 4, free: true, desc: 'Level up your Python mastery with lambda functions, elegant list comprehensions, memory-efficient generators, and function decorators.' },
    { id: 21, num: '21', name: 'Database Integration', icon: <Database className="w-4 h-4 text-sky-500" />, color: '#0ea5e9', sqBg: '#e0f2fe', count: 4, free: true, desc: 'Store and query persistent data with SQLite, connect Python with databases, and implement full CRUD operations.' },
    { id: 22, num: '22', name: 'Web Development with Python – Introduction', icon: <Globe className="w-4 h-4 text-emerald-600" />, color: '#059669', sqBg: '#d1fae5', count: 4, free: true, desc: 'Get started with Python web development, build lightweight servers with Flask, design RESTful API endpoints, configure URL routing, and handle client requests.' },
    { id: 23, num: '23', name: 'Python for Data Analysis and Visualization – Introduction', icon: <BarChart3 className="w-4 h-4 text-amber-500" />, color: '#f59e0b', sqBg: '#fef3c7', count: 4, free: true, desc: 'Unlock insights from raw data using Pandas DataFrames, descriptive data analysis techniques, and clear visual charts with Matplotlib.' },
    { id: 24, num: '24', name: 'Git, GitHub & Collaboration', icon: <GitBranch className="w-4 h-4 text-orange-500" />, color: '#f97316', sqBg: '#ffedd5', count: 4, free: true, desc: 'Track code changes with Git, publish repositories to GitHub, manage branches, and collaborate seamlessly on professional development teams.' },
  ];

  return (
    <div className={`pmd-page ${hideOuterNav ? 'pmd-embedded-mode' : ''}`}>
      {/* ── TOPBAR (Rendered only if not embedded in GlobalAppLayout) ── */}
      {!hideOuterNav && (
        <header className="pmd-topbar">
          <div className="pmd-logo" onClick={onBack} role="button" tabIndex={0}>
            <div className="pmd-logo-icon"><Sparkles className="w-3.5 h-3.5 text-white" /></div>
            <span className="pmd-logo-text">Future.AI</span>
          </div>

          <div className="pmd-search-bar">
            <Search className="pmd-search-icon" />
            <input type="text" placeholder="Ask anything... (e.g. Pandas, SQL join, Power BI, real-world projects, interview questions...)" className="pmd-search-input" />
            <div className="pmd-search-shortcut"><kbd>Ctrl</kbd><kbd>K</kbd></div>
          </div>

          <div className="pmd-topbar-right">
            <button className="pmd-sound-btn" onClick={() => { const r = soundEffects.toggleSound(); setSoundEnabled(r); }}>
              <Volume2 className="w-4 h-4 text-blue-600" />
              <span>{soundEnabled ? 'Sound ON' : 'Sound OFF'}</span>
            </button>
            
            <button className="pmd-ai-mentor-pill" onClick={onOpenAdvisor}>
              <div className="pmd-ai-mentor-icon-wrap">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span>Ask AI Mentor</span>
            </button>

            <div className="pmd-notif-wrap">
              <Bell className="w-4 h-4 text-slate-700" />
              <span className="pmd-notif-dot">3</span>
            </div>

            <div className="pmd-avatar">
              <img src="/images/avatar-rahul-sharma.jpg" alt={userName} className="pmd-avatar-img" onError={e => { (e.target as HTMLImageElement).style.display='none'; }} />
              <span className="pmd-avatar-fallback">{userName.split(' ').map(n=>n[0]).join('').slice(0,2)}</span>
            </div>

            <div className="pmd-user-info">
              <span className="pmd-user-name">{userName}</span>
              <span className="pmd-user-role">Learner <ChevronDown className="w-3 h-3 inline ml-0.5 text-slate-500" /></span>
            </div>
          </div>
        </header>
      )}

      {/* ── MAIN GRID ── */}
      <div className="pmd-main-grid">

        {/* ── LEFT NAV (Rendered only if not embedded in GlobalAppLayout) ── */}
        {!hideOuterNav && (
          <aside className="pmd-left-nav">
            <nav className="pmd-nav-list">
              {sidebarNav.map(item => (
                <div key={item.id} className={`pmd-nav-item ${item.active ? 'active' : ''}`}
                  onClick={() => { if (!item.active && soundEnabled) soundEffects.playClick(); onNavigateSidebar?.(item.id); }}
                  role="button" tabIndex={0}>
                  <span className="pmd-nav-icon">{item.icon}</span>
                  <span className="pmd-nav-label">{item.label}</span>
                </div>
              ))}
            </nav>

            {/* PowerGreen AI bottom widget */}
            <div className="pmd-pgai-widget">
              <button className="pmd-pgai-close">×</button>
              <img src="/images/powergreen_ai_bot.png" alt="AI" className="pmd-pgai-img" />
              <div className="pmd-pgai-widget-name">PowerGreen AI</div>
              <div className="pmd-pgai-widget-sub">Your Personal Learning Mentor</div>
              <button className="pmd-pgai-widget-btn" onClick={() => { if (soundEnabled) soundEffects.playClick(); onOpenAdvisor?.(); }}>
                <span>Chat with AI →</span>
              </button>
              <div className="pmd-online-badge"><span className="pmd-online-dot" />Online</div>
            </div>
          </aside>
        )}

        {/* ── CENTER CONTENT ── */}
        <main className="pmd-center">

          {/* BREADCRUMB */}
          <div className="pmd-bc">
            <span className="pmd-bc-link" onClick={onBack}>Home</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="pmd-bc-link">Python</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="pmd-bc-cur">Python for Data Analysis</span>
          </div>

          {/* ── FULL HD RAZOR-SHARP HERO BANNER ── */}
          <div className="pmd-hero-hd">
            {/* Photographic High-Res Backdrop Layer */}
            <div className="pmd-hero-backdrop-wrap">
              <img
                src="/images/hero-student-robot-workspace-2050.jpg"
                alt=""
                className="pmd-hero-photo-bg"
              />
              <div className="pmd-hero-photo-overlay" />
            </div>

            {/* Foreground Content */}
            <div className="pmd-hero-hd-body">
              {/* Left Column: Track badge + 3D Logo + Title + Subtitle */}
              <div className="pmd-hero-hd-left">
                <div className="pmd-hero-track-pill">
                  <Star className="w-3 h-3 fill-current text-white" />
                  <span>Data Analyst Track</span>
                </div>

                <div className="pmd-hero-brand-row">
                  <img
                    src="/images/python_logo_3d_hd.png"
                    alt="Python 3D"
                    className="pmd-hero-hd-pylogo"
                  />
                  <div className="pmd-hero-title-group">
                    <h1 className="pmd-hero-hd-title">
                      Python for <span className="pmd-hero-hd-accent">Data Analysis</span>
                    </h1>
                    <p className="pmd-hero-hd-sub">
                      From basics to advanced. Learn with AI-powered videos, hands-on practice, games, real projects, and interview preparation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center: 3D Robot */}
              <div className="pmd-hero-hd-mid">
                <img src="/images/powergreen_ai_bot.png" alt="AI Mentor" className="pmd-hero-hd-robot" />
              </div>

              {/* Right: Graphic + Start Learning Button */}
              <div className="pmd-hero-hd-right">
                <div className="pmd-hero-hd-taglines">
                  <span className="pmd-hd-tag-w">Learn</span>
                  <span className="pmd-hd-tag-w">Practice</span>
                  <span className="pmd-hd-tag-w">Build</span>
                  <div className="pmd-hd-tag-row">
                    <span className="pmd-hd-tag-c">Get Hired</span>
                    <span className="pmd-hd-tag-chart">📈</span>
                  </div>
                </div>

                <button
                  className="pmd-hero-hd-btn"
                  onClick={() => openTopic(PYTHON_MODULES[0].topics[0], 'learn')}
                  title="Start Learning Topic 1"
                >
                  <div className="pmd-hd-btn-icon">
                    <MonitorPlay className="w-3.5 h-3.5 fill-current text-blue-600 ml-0.5" />
                  </div>
                  <div className="pmd-hd-btn-text">
                    <span className="pmd-hd-btn-main">Start Learning</span>
                    <span className="pmd-hd-btn-sub">Your Future Today →</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom Integrated Feature Chips Strip */}
            <div className="pmd-hero-hd-chips">
              <span className="pmd-hd-chip"><Target className="w-3.5 h-3.5 text-blue-500" />45 Topics</span>
              <span className="pmd-hd-chip"><BookMarked className="w-3.5 h-3.5 text-blue-500" />8 Modules</span>
              <span className="pmd-hd-chip"><Timer className="w-3.5 h-3.5 text-cyan-500" />6–8 Min Videos</span>
              <span className="pmd-hd-chip"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />50+ Practice Sets</span>
              <span className="pmd-hd-chip"><Rocket className="w-3.5 h-3.5 text-slate-700" />Real Projects</span>
              <span className="pmd-hd-chip"><Mic className="w-3.5 h-3.5 text-purple-500" />AI Mock Interviews</span>
              <span className="pmd-hd-chip"><Award className="w-3.5 h-3.5 text-slate-800" />Certificate</span>
            </div>
          </div>

          {/* ── ALL MODULES ACCORDION (ALL UNLOCKED) ── */}
          <div className="pmd-modules">
            {modulesMeta.map(m => {
              const open = expandedMods.has(m.id);
              const courseMod = PYTHON_MODULES.find(x => x.id === m.id) || PYTHON_MODULES[0];

              return (
                <div key={m.id} className={`pmd-mod-card ${m.id === 1 ? 'pmd-mod-1-expanded' : ''} ${open ? 'open' : ''}`}>

                  {/* Header Row */}
                  <div className="pmd-mod-header" onClick={() => toggleMod(m.id)} role="button" tabIndex={0}>
                    <div className="pmd-mod-left">
                      {/* Number circle */}
                      <div className="pmd-mod-badge-num" style={{ background: m.color }}>
                        {m.num}
                      </div>
                      {/* Icon square */}
                      <div className="pmd-mod-badge-sq" style={{ background: m.sqBg }}>
                        {m.icon}
                      </div>
                      {/* Title */}
                      <div className="pmd-mod-text">
                        <div className="pmd-mod-title-line">
                          <span className="pmd-mod-title">{m.name}</span>
                          <span className="pmd-free-preview-pill">
                            <span className="pmd-fp-dot" />FREE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right side stats */}
                    <div className="pmd-mod-right">
                      <span className="pmd-mod-cnt-text">0 / {courseMod.topics.length} Topics</span>
                      <div className="pmd-mod-pbar-track">
                        <div className="pmd-mod-pbar-fill" style={{ width: '0%' }} />
                      </div>
                      <span className="pmd-mod-pct-text">0%</span>
                      <div className="pmd-mod-chevron-btn">
                        {open ? <ChevronUp className="w-4 h-4 text-slate-600" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
                      </div>
                    </div>
                  </div>

                  {/* Topics List (Unlocked for ALL modules) */}
                  {open && (
                    <div className="pmd-topics-list">
                      {courseMod.topics.map(topic => (
                        <div key={topic.id} className="pmd-topic-row" onClick={() => openTopic(topic, 'learn')}>
                          <span className="pmd-topic-num" style={{ color: m.color, fontWeight: 700 }}>{String(topic.topicNumber).padStart(2, '0')}</span>
                          <TopicThumbIcon iconType={topic.iconType} />
                          <div className="pmd-topic-body">
                            <div className="pmd-topic-title" style={{ color: m.color }}>{topic.title}</div>
                            <div className="pmd-topic-sub">{topic.description}</div>
                            <div className="pmd-topic-chips">
                              <span className="pmd-chip c-blue cursor-pointer" onClick={(e) => { e.stopPropagation(); openTopic(topic, 'learn'); }}><MonitorPlay className="w-3 h-3" />Video</span>
                              <span className="pmd-chip c-purple cursor-pointer" onClick={(e) => { e.stopPropagation(); openTopic(topic, 'practice'); }}><FileText className="w-3 h-3" />MCQ</span>
                              <span className="pmd-chip c-orange cursor-pointer" onClick={(e) => { e.stopPropagation(); openTopic(topic, 'play'); }}><Gamepad2 className="w-3 h-3" />Game</span>
                              <span className="pmd-chip c-green cursor-pointer" onClick={(e) => { e.stopPropagation(); openTopic(topic, 'code'); }}><Code className="w-3 h-3" />Coding Game</span>
                              <span className="pmd-chip c-pink cursor-pointer" onClick={(e) => { e.stopPropagation(); openTopic(topic, 'interview'); }}><Mic className="w-3 h-3" />Mock Interview</span>
                            </div>
                          </div>
                          <div className="pmd-topic-right">
                            <span className="pmd-topic-dur"><Clock className="w-3 h-3" />{topic.videoDuration || '6–8 min'}</span>
                            <span className="pmd-free-pill">FREE</span>
                            <div className="pmd-arrow-circle"><ChevronRight className="w-4 h-4 text-slate-500" /></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>

        {/* ── RIGHT SIDEBAR ── */}
        <aside className="pmd-sidebar">

          {/* 1. YOUR LEARNING PROGRESS */}
          <div className="pmd-card pmd-progress-card">
            <div className="pmd-card-header">
              <span className="pmd-card-title">Your Learning Progress</span>
            </div>
            
            <div className="pmd-prog-top-row">
              {/* Circular Gauge */}
              <div className="pmd-prog-circle-wrap">
                <svg className="pmd-prog-circle-svg" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#dbeafe" strokeWidth="6" />
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#06b6d4" strokeWidth="6"
                    strokeDasharray="40 188.5" strokeLinecap="round" transform="rotate(-90 40 40)" />
                </svg>
                <div className="pmd-prog-circle-pct">0%</div>
              </div>

              {/* Stats on Right */}
              <div className="pmd-prog-right-stats">
                <div className="pmd-stat-line-top">
                  <Clock className="w-3.5 h-3.5 text-blue-600 inline mr-1" />
                  <span><b>/ 45</b> Topics Completed</span>
                </div>
                <div className="pmd-prog-bar-mini">
                  <div className="pmd-prog-bar-mini-fill" style={{ width: '0%' }} />
                </div>
                <div className="pmd-prog-dual-cols">
                  <div className="pmd-prog-col">
                    <div className="pmd-col-top"><FileText className="w-3 h-3 inline mr-1 text-slate-700" />0 / 8 Modules</div>
                    <div className="pmd-col-sub">Learning Streak</div>
                  </div>
                  <div className="pmd-prog-col">
                    <div className="pmd-col-top"><Clock className="w-3 h-3 inline mr-1 text-slate-700" />0 hrs</div>
                    <div className="pmd-col-sub">Study Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Topic pill card */}
            <div className="pmd-next-topic-card" onClick={() => openTopic(PYTHON_MODULES[0].topics[0], 'learn')}>
              <div className="pmd-next-topic-glow-icon">
                <MonitorPlay className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="pmd-next-topic-info">
                <div className="pmd-nt-label">Next Topic</div>
                <div className="pmd-nt-name">1.1 What is Programming? – Real-Life Examples</div>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-600 ml-auto" />
            </div>
          </div>

          {/* 2. LEARNING JOURNEY */}
          <div className="pmd-card pmd-journey-card">
            <div className="pmd-card-header">
              <span className="pmd-card-title">Learning Journey</span>
              <button className="pmd-link-btn">See Full Path →</button>
            </div>

            <div className="pmd-journey-flow">
              {/* Step 1: Learn */}
              <div className="pmd-j-step">
                <div className="pmd-j-icon bg-blue-100 text-blue-600 border border-blue-200">
                  <MonitorPlay className="w-3.5 h-3.5" />
                </div>
                <span className="pmd-j-top">Learn</span>
                <span className="pmd-j-sub">Video</span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-300" />

              {/* Step 2: Practice */}
              <div className="pmd-j-step">
                <div className="pmd-j-icon bg-purple-100 text-purple-600 border border-purple-200">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span className="pmd-j-top">Practice</span>
                <span className="pmd-j-sub">MCQ</span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-300" />

              {/* Step 3: Play */}
              <div className="pmd-j-step">
                <div className="pmd-j-icon bg-orange-100 text-orange-600 border border-orange-200">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </div>
                <span className="pmd-j-top">Play</span>
                <span className="pmd-j-sub">Game</span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-300" />

              {/* Step 4: Code */}
              <div className="pmd-j-step">
                <div className="pmd-j-icon bg-emerald-100 text-emerald-600 border border-emerald-200">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <span className="pmd-j-top">Code</span>
                <span className="pmd-j-sub">Practice</span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-300" />

              {/* Step 5: Interview */}
              <div className="pmd-j-step">
                <div className="pmd-j-icon bg-pink-100 text-pink-600 border border-pink-200">
                  <Mic className="w-3.5 h-3.5" />
                </div>
                <span className="pmd-j-top">Interview</span>
                <span className="pmd-j-sub">AI</span>
              </div>
              <ChevronRight className="w-3 h-3 text-slate-300" />

              {/* Step 6: Score */}
              <div className="pmd-j-step">
                <div className="pmd-j-icon bg-purple-100 text-indigo-600 border border-purple-200">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <span className="pmd-j-top">Score</span>
                <span className="pmd-j-sub">&amp; Grow</span>
              </div>
            </div>
          </div>

          {/* 3. POWERGREEN AI */}
          <div className="pmd-card pmd-pgai-card">
            <div className="pmd-pgai-head">
              <div className="pmd-pgai-avatar-wrap">
                <img src="/images/powergreen_ai_bot.png" alt="AI" className="pmd-pgai-bot-avatar" />
              </div>
              <div>
                <div className="pmd-pgai-name">PowerGreen AI</div>
                <div className="pmd-pgai-online-status">
                  <span className="pmd-online-dot" />Online
                </div>
              </div>
            </div>

            <p className="pmd-pgai-intro">
              Ask anything about this topic. Get explanations, code examples, practice questions, real-world use cases and more.
            </p>

            {aiMsgs.length > 0 && (
              <div className="pmd-ai-msgs-box">
                {aiMsgs.slice(-3).map((m, i) => (
                  <div key={i} className={`pmd-ai-chat-bubble ${m.role}`}>{m.text}</div>
                ))}
              </div>
            )}

            <div className="pmd-pgai-actions-col">
              <button className="pmd-pgai-pill-btn pill-blue" onClick={() => sendAi('Explain this topic in simple words')}>
                <span className="pmd-pill-emoji">💡</span>
                <span>Explain this topic in simple words</span>
              </button>
              <button className="pmd-pgai-pill-btn pill-orange" onClick={() => sendAi('Give me a code example')}>
                <span className="pmd-pill-emoji">⚡</span>
                <span>Give me a code example</span>
              </button>
              <button className="pmd-pgai-pill-btn pill-purple" onClick={() => sendAi('Show me a practice question')}>
                <span className="pmd-pill-emoji">🎯</span>
                <span>Show me a practice question</span>
              </button>
              <button className="pmd-pgai-pill-btn pill-green" onClick={() => sendAi('Tell me real-world use cases')}>
                <span className="pmd-pill-emoji">💼</span>
                <span>Tell me real-world use cases</span>
              </button>
            </div>

            <div className="pmd-pgai-input-wrap">
              <input type="text" placeholder="Type your question..." className="pmd-pgai-chat-input"
                value={aiInput} onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendAi()} />
              <button className="pmd-pgai-send-btn" onClick={() => sendAi()}>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          {/* 4. UNLOCK CARD */}
          <div className="pmd-unlock-banner-card">
            <div className="pmd-unlock-crown-icon">👑</div>
            <div className="pmd-unlock-card-title">Unlock Complete Python Learning Path</div>
            <div className="pmd-unlock-card-desc">
              Get access to all 45 topics, 8 modules, real projects, interview prep and certificate.
            </div>
            <button className="pmd-unlock-cta-btn" onClick={() => onOpenUnlockModal()}>
              Join Future.AI Today →
            </button>
          </div>

        </aside>
      </div>
    </div>
  );
};
