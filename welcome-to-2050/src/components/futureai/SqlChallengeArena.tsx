import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { SqlChallengeTask } from './data/sqlCodingChallengesBank';
import {
  ArrowLeft,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Terminal,
  ChevronRight,
  Code2,
  Award,
  Check,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Copy,
  Lock,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Settings,
  Send,
  FileText,
  BarChart3,
  Trophy,
  Info,
  Volume2,
  VolumeX,
  Database,
  Table
} from 'lucide-react';

export interface SqlChallengeArenaProps {
  userName?: string;
  topicId?: number;
  topicTitle?: string;
  initialTaskId?: number;
  tasks?: SqlChallengeTask[];
  onBack?: () => void;
  onCompleteAll?: () => void;
}

// SQL Query parser & simulated output generator for client-side feedback
function simulateSqlQuery(
  query: string,
  sampleOutput: string
): { success: boolean; message: string; rows: string[][]; headers: string[]; execTime: string } {
  const cleaned = query.replace(/--[^\n]*/g, '').trim();
  if (!cleaned) {
    return {
      success: false,
      message: 'Query is empty. Please enter your SQL query in the editor.',
      rows: [],
      headers: [],
      execTime: '0.00s'
    };
  }

  // Parse sampleOutput to get headers and rows
  const lines = sampleOutput.split('\n').map((l) => l.trim()).filter(Boolean);
  let headers: string[] = [];
  let rows: string[][] = [];

  if (lines.length > 0) {
    if (lines[0].includes('|')) {
      headers = lines[0].split('|').map((h) => h.trim()).filter(Boolean);
      rows = lines.slice(1).map((l) => l.split('|').map((c) => c.trim()).filter(Boolean));
    } else {
      headers = ['result'];
      rows = lines.map((l) => [l]);
    }
  } else {
    headers = ['status'];
    rows = [['Query executed successfully']];
  }

  const upperQuery = cleaned.toUpperCase();
  const hasSelect = upperQuery.includes('SELECT');
  const hasWith = upperQuery.includes('WITH');

  if (!hasSelect && !hasWith) {
    return {
      success: false,
      message: 'Syntax error: Query must start with SELECT or WITH statement.',
      rows: [],
      headers: [],
      execTime: '0.01s'
    };
  }

  return {
    success: true,
    message: 'Query executed successfully with 0 errors.',
    rows,
    headers,
    execTime: '0.02s'
  };
}

export const SqlChallengeArena: React.FC<SqlChallengeArenaProps> = ({
  userName = 'Rahul',
  topicId = 1,
  topicTitle = 'Topic 1 — SELECT Basics',
  initialTaskId = 1,
  tasks = [],
  onBack,
  onCompleteAll
}) => {
  const [activeTasks, setActiveTasks] = useState<SqlChallengeTask[]>(tasks);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      setActiveTasks(tasks);
    }
  }, [tasks]);

  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(() => {
    const idx = tasks.findIndex((t) => t.taskNumber === initialTaskId);
    return idx >= 0 ? idx : 0;
  });

  const task = activeTasks[currentTaskIndex] || activeTasks[0];

  // Codes dictionary per task
  const [codes, setCodes] = useState<Record<number, string>>(() => {
    const init: Record<number, string> = {};
    activeTasks.forEach((t) => {
      init[t.id] = t.starterCode;
    });
    return init;
  });

  const currentCode = (task && codes[task.id]) !== undefined ? codes[task.id] : (task ? task.starterCode : '-- Write your SQL query here\n');

  // Active Tabs: Left column ('problem' | 'submissions' | 'discussion')
  const [leftTab, setLeftTab] = useState<'problem' | 'submissions' | 'discussion'>('problem');

  // Active Tabs: Right column ('testcases' | 'result')
  const [rightTab, setRightTab] = useState<'testcases' | 'result'>('testcases');

  // Test case visibility toggles (hidden vs eye preview)
  const [testCaseVisibility, setTestCaseVisibility] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });

  // Sound and celebration states
  const [soundEnabled, setSoundEnabled] = useState<boolean>(soundEffects.getSoundEnabled());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [selectedDialect, setSelectedDialect] = useState<string>('SQL (PostgreSQL)');
  const [copiedSample, setCopiedSample] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Execution states
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(null);
  const [solvedTasks, setSolvedTasks] = useState<Set<number>>(new Set());
  const [totalPoints, setTotalPoints] = useState<number>(0);

  // Result table output
  const [queryResult, setQueryResult] = useState<{
    success: boolean;
    message: string;
    rows: string[][];
    headers: string[];
    execTime: string;
  } | null>(null);

  const toggleSound = () => {
    const state = soundEffects.toggleSound();
    setSoundEnabled(state);
  };

  const handleCodeChange = (newCode: string) => {
    if (!task) return;
    setCodes((prev) => ({
      ...prev,
      [task.id]: newCode
    }));
  };

  const handleResetCode = () => {
    if (!task) return;
    soundEffects.playClick();
    setCodes((prev) => ({
      ...prev,
      [task.id]: task.starterCode
    }));
    setQueryResult(null);
    setSubmissionSuccess(null);
  };

  const handleCopySample = () => {
    if (!task) return;
    navigator.clipboard.writeText(task.sampleOutput);
    soundEffects.playWaterDrop();
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 2000);
  };

  const toggleTestCaseEye = (tcNum: number) => {
    soundEffects.playClick();
    setTestCaseVisibility((prev) => ({
      ...prev,
      [tcNum]: !prev[tcNum]
    }));
  };

  // Run Code
  const handleRunCode = () => {
    if (!task) return;
    soundEffects.playCodeRun();
    setIsRunning(true);
    setRightTab('result');

    setTimeout(() => {
      const res = simulateSqlQuery(currentCode, task.sampleOutput);
      setQueryResult(res);
      setIsRunning(false);

      if (res.success) {
        soundEffects.playSuccess();
      } else {
        soundEffects.playError();
      }
    }, 600);
  };

  // Submit Code
  const handleSubmitCode = () => {
    if (!task) return;
    soundEffects.playCodeRun();
    setIsSubmitting(true);
    setRightTab('result');

    setTimeout(() => {
      const res = simulateSqlQuery(currentCode, task.sampleOutput);
      setIsSubmitting(false);

      if (res.success) {
        setSubmissionSuccess(true);
        setQueryResult(res);
        soundEffects.playCelebration();

        // Confetti Fireworks Burst
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }

        // Add to solved tasks & points
        if (!solvedTasks.has(task.id)) {
          setSolvedTasks((prev) => new Set([...prev, task.id]));
          setTotalPoints((prev) => prev + task.points);
          soundEffects.playLevelUp();
        }
      } else {
        setSubmissionSuccess(false);
        setQueryResult(res);
        soundEffects.playError();
      }
    }, 900);
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <p className="text-slate-400">Loading SQL Challenge...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0f172a] text-slate-100' : 'bg-[#f8fafc] text-slate-800'} flex flex-col font-sans transition-colors duration-200 select-none`}>
      
      {/* ─── TOP BAR HEADER ─── */}
      <header className={`h-14 border-b ${isDarkMode ? 'bg-[#0b1120] border-slate-800' : 'bg-white border-slate-200'} px-3 sm:px-5 flex items-center justify-between shrink-0 z-20`}>
        {/* Left: Back & Topic Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onBack}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'} transition-colors cursor-pointer`}
          >
            <ArrowLeft className="w-4 h-4 text-blue-500" />
            <span className="hidden sm:inline">Back to Challenges</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Database Icon & Topic Name */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Database className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <span className="font-bold text-xs sm:text-sm truncate">
              {topicTitle}
            </span>
          </div>

          {/* Question Selector Dropdown */}
          <div className="relative shrink-0">
            <select
              aria-label="Select Question"
              value={task.taskNumber}
              onChange={(e) => {
                const targetNum = Number(e.target.value);
                const idx = activeTasks.findIndex((t) => t.taskNumber === targetNum);
                if (idx >= 0) {
                  soundEffects.playClick();
                  setCurrentTaskIndex(idx);
                  setQueryResult(null);
                  setSubmissionSuccess(null);
                }
              }}
              className={`appearance-none text-xs font-bold pl-2.5 pr-7 py-1 rounded-lg border cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700 text-blue-400 hover:bg-slate-700/80'
                  : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
              }`}
            >
              {activeTasks.map((t) => (
                <option key={t.id} value={t.taskNumber} className={isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}>
                  Q{t.taskNumber}: {t.title.slice(0, 26)}...
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1.5 text-blue-400">
              <ChevronRight className="w-3.5 h-3.5 rotate-90" />
            </div>
          </div>
        </div>

        {/* Right: Sound Toggle, Points, Progress */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              isDarkMode
                ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
          </button>

          {/* Points Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
            <Trophy className="w-3 h-3 text-amber-400" />
            <span>{totalPoints} pts</span>
          </div>

          {/* Solved Count */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            <span>{solvedTasks.size} / {activeTasks.length} Solved</span>
          </div>
        </div>
      </header>

      {/* ─── 3-COLUMN WORKSPACE BODY (Exact 1:1 with Reference Screenshot) ─── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-[calc(100vh-3.5rem)]">
        
        {/* =========================================================================
            COLUMN 1: PROBLEM STATEMENT & SCHEMA DETAILS (4 of 12 cols = 33.3%)
           ========================================================================= */}
        <div className={`lg:col-span-4 border-r ${isDarkMode ? 'border-slate-800 bg-[#0d1424]' : 'border-slate-200 bg-white'} flex flex-col overflow-hidden`}>
          {/* Column Tabs */}
          <div className={`flex items-center border-b ${isDarkMode ? 'border-slate-800 bg-[#0b1120]' : 'border-slate-200 bg-slate-50'} px-3 pt-2 gap-1 shrink-0`}>
            <button
              type="button"
              onClick={() => setLeftTab('problem')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                leftTab === 'problem'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Problem</span>
            </button>
            <button
              type="button"
              onClick={() => setLeftTab('submissions')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                leftTab === 'submissions'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Submissions</span>
            </button>
            <button
              type="button"
              onClick={() => setLeftTab('discussion')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                leftTab === 'discussion'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Discussion</span>
            </button>
          </div>

          {/* Tab Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 text-left text-xs leading-relaxed">
            {leftTab === 'problem' && (
              <>
                {/* Title & Metadata Badges */}
                <div>
                  <h2 className="text-lg sm:text-xl font-black tracking-tight text-slate-100">
                    {task.taskNumber}. {task.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      {task.difficulty}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      +{task.points} pts
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Success: {task.successRate}
                    </span>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="space-y-2">
                  <p className="text-slate-300 font-normal text-xs sm:text-sm">
                    {task.problemStatement}{' '}
                    {task.highlightedKeyword && (
                      <code className="px-1.5 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-xs font-bold">
                        {task.highlightedKeyword}
                      </code>
                    )}
                  </p>
                </div>

                {/* Database Table Schema Card */}
                {task.tableSchema && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-300 font-bold text-xs uppercase tracking-wider">
                      <Table className="w-3.5 h-3.5 text-blue-400" />
                      <span>Table Schema</span>
                    </div>
                    <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'} font-mono text-[11px] text-blue-300 leading-normal`}>
                      {task.tableSchema}
                    </div>
                  </div>
                )}

                {/* Sample Input Dataset */}
                {task.sampleInput && (
                  <div className="space-y-1.5">
                    <div className="text-slate-300 font-bold text-xs uppercase tracking-wider">
                      Sample Table Data
                    </div>
                    <pre className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'} font-mono text-[11px] text-slate-300 overflow-x-auto whitespace-pre leading-snug`}>
                      {task.sampleInput}
                    </pre>
                  </div>
                )}

                {/* Sample Output Expected */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-bold text-xs uppercase tracking-wider">
                      Expected Output
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySample}
                      className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSample ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'} font-mono text-[11px] text-emerald-400 overflow-x-auto whitespace-pre leading-snug`}>
                    {task.sampleOutput}
                  </pre>
                </div>

                {/* Quick Hint Accordion */}
                <div className={`rounded-xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'} p-3`}>
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playHintChime();
                      setShowHint((prev) => !prev);
                    }}
                    className="w-full flex items-center justify-between text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{showHint ? 'Hide SQL Hint' : 'Need a SQL Hint?'}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${showHint ? 'rotate-90' : ''}`} />
                  </button>
                  {showHint && (
                    <div className="mt-2.5 pt-2.5 border-t border-slate-800 text-[11px] text-slate-300 font-mono leading-relaxed">
                      💡 {task.hint}
                    </div>
                  )}
                </div>
              </>
            )}

            {leftTab === 'submissions' && (
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-slate-200">Your Submissions</h3>
                {solvedTasks.has(task.id) ? (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <div>
                      <p className="font-bold">Passed All Hidden Test Cases!</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Execution speed: 0.02s • Memory: 1.2MB</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-400 text-xs">No accepted submissions yet for this challenge.</p>
                )}
              </div>
            )}

            {leftTab === 'discussion' && (
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-slate-200">Community Discussion</h3>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="font-bold text-blue-400 text-xs">DevPro2050</p>
                  <p className="text-slate-300 text-[11px]">Remember to check whether column aliases or table qualifications are required when performing multi-table joins!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2: SQL CODE EDITOR (5 of 12 cols = 41.6%)
           ========================================================================= */}
        <div className={`lg:col-span-5 border-r ${isDarkMode ? 'border-slate-800 bg-[#0b1120]' : 'border-slate-200 bg-white'} flex flex-col overflow-hidden`}>
          {/* Editor Header Bar */}
          <div className={`h-11 border-b ${isDarkMode ? 'border-slate-800 bg-[#0f172a]' : 'border-slate-200 bg-slate-50'} px-3 flex items-center justify-between shrink-0`}>
            {/* Dialect Selector */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <select
                aria-label="Select Dialect"
                value={selectedDialect}
                onChange={(e) => {
                  soundEffects.playClick();
                  setSelectedDialect(e.target.value);
                }}
                className={`text-xs font-bold py-1 px-2 rounded-md border cursor-pointer focus:outline-none ${
                  isDarkMode
                    ? 'bg-slate-800 border-slate-700 text-blue-400'
                    : 'bg-white border-slate-300 text-blue-700'
                }`}
              >
                <option value="SQL (PostgreSQL)">SQL (PostgreSQL)</option>
                <option value="SQL (MySQL)">SQL (MySQL)</option>
                <option value="SQLite">SQLite</option>
              </select>
            </div>

            {/* Action Buttons: Reset, Theme, Fullscreen */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleResetCode}
                title="Reset Code"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-200 text-slate-600'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playColorChange();
                  setIsDarkMode((prev) => !prev);
                }}
                title="Toggle Theme"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-200 text-slate-600'
                }`}
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setIsFullscreen((prev) => !prev);
                }}
                title="Toggle Fullscreen"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-200 text-slate-600'
                }`}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* SQL Editor Area with Line Numbers */}
          <div className="flex-1 flex overflow-hidden font-mono text-xs sm:text-sm relative">
            {/* Line Numbers Column */}
            <div className={`w-10 sm:w-12 py-3 px-1 select-none text-right shrink-0 ${isDarkMode ? 'bg-[#080d1a] text-slate-600 border-r border-slate-800/80' : 'bg-slate-100 text-slate-400 border-r border-slate-200'}`}>
              {currentCode.split('\n').map((_, idx) => (
                <div key={idx} className="leading-6 text-[11px] pr-2">
                  {idx + 1}
                </div>
              ))}
            </div>

            {/* Code Input Textarea (User writes query here!) */}
            <textarea
              aria-label="SQL Code Editor"
              value={currentCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              placeholder="-- Write your SQL query here..."
              spellCheck={false}
              className={`flex-1 p-3 leading-6 resize-none focus:outline-none font-mono ${
                isDarkMode
                  ? 'bg-[#0b1120] text-emerald-300 placeholder-slate-600 selection:bg-blue-600/30'
                  : 'bg-white text-slate-900 placeholder-slate-400 selection:bg-blue-200'
              }`}
            />
          </div>

          {/* Editor Status Bottom Bar */}
          <div className={`h-8 border-t ${isDarkMode ? 'border-slate-800 bg-[#080d1a] text-slate-500' : 'border-slate-200 bg-slate-50 text-slate-500'} px-3 flex items-center justify-between text-[11px] shrink-0`}>
            <span>Lines: {currentCode.split('\n').length} | Chars: {currentCode.length}</span>
            <span className="text-blue-400 font-bold">SQL Ready</span>
          </div>
        </div>

        {/* =========================================================================
            COLUMN 3: TEST CASES & QUERY RESULT (3 of 12 cols = 25.1%)
           ========================================================================= */}
        <div className={`lg:col-span-3 ${isDarkMode ? 'bg-[#0d1424]' : 'bg-[#f8fafc]'} flex flex-col overflow-hidden`}>
          {/* Right Tabs Header */}
          <div className={`flex items-center border-b ${isDarkMode ? 'border-slate-800 bg-[#0b1120]' : 'border-slate-200 bg-slate-50'} px-3 pt-2 gap-1 shrink-0`}>
            <button
              type="button"
              onClick={() => setRightTab('testcases')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                rightTab === 'testcases'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Test Cases</span>
            </button>
            <button
              type="button"
              onClick={() => setRightTab('result')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                rightTab === 'result'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Query Result</span>
            </button>
          </div>

          {/* Test Cases / Output Content Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-left text-xs">
            {rightTab === 'testcases' && (
              <>
                <p className="text-[11px] text-slate-400">
                  Run your query against all test cases. Hidden test cases evaluate edge conditions and relational constraints.
                </p>

                {/* Test Case 1 (Public) */}
                <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Test Case 1 (Sample Data)
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleTestCaseEye(1)}
                      title="Preview Test Case"
                      className="text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      {testCaseVisibility[1] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-blue-400" />}
                    </button>
                  </div>
                  {testCaseVisibility[1] ? (
                    <div className="pt-2 border-t border-slate-800 font-mono text-[10.5px] text-slate-300">
                      Expected rows matching sample table query.
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 italic">Click eye to view expected row set</div>
                  )}
                </div>

                {/* Test Case 2 (Hidden) */}
                <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-amber-400" />
                      Test Case 2 (Hidden Edge Case)
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleTestCaseEye(2)}
                      title="Preview Test Case"
                      className="text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      {testCaseVisibility[2] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-blue-400" />}
                    </button>
                  </div>
                  {testCaseVisibility[2] ? (
                    <div className="pt-2 border-t border-slate-800 font-mono text-[10.5px] text-slate-300">
                      NULL value and empty partition boundary check.
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 italic">Hidden until unlocked or tested</div>
                  )}
                </div>

                {/* Test Case 3 (Hidden) */}
                <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-amber-400" />
                      Test Case 3 (Scale & Ordering)
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleTestCaseEye(3)}
                      title="Preview Test Case"
                      className="text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      {testCaseVisibility[3] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-blue-400" />}
                    </button>
                  </div>
                  {testCaseVisibility[3] ? (
                    <div className="pt-2 border-t border-slate-800 font-mono text-[10.5px] text-slate-300">
                      Deterministic order verification on large row volume.
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 italic">Hidden until unlocked or tested</div>
                  )}
                </div>
              </>
            )}

            {rightTab === 'result' && (
              <div className="space-y-3">
                {queryResult ? (
                  <>
                    {/* Status Badge */}
                    <div className={`p-3 rounded-xl border ${
                      queryResult.success
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5">
                          {queryResult.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                          {queryResult.success ? 'Success / Accepted' : 'Execution Error'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{queryResult.execTime}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-300">{queryResult.message}</p>
                    </div>

                    {/* Output Table Preview */}
                    {queryResult.headers.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Result Grid ({queryResult.rows.length} rows)
                        </span>
                        <div className={`border rounded-xl overflow-hidden ${isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                          <div className="overflow-x-auto max-h-56">
                            <table className="w-full text-left font-mono text-[11px]">
                              <thead className={`${isDarkMode ? 'bg-slate-800 text-blue-300' : 'bg-slate-100 text-slate-700'}`}>
                                <tr>
                                  {queryResult.headers.map((h, i) => (
                                    <th key={i} className="px-2.5 py-1.5 border-b border-slate-700 font-bold whitespace-nowrap">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800">
                                {queryResult.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className={isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}>
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="px-2.5 py-1 text-slate-300 whitespace-nowrap">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-10 text-slate-500">
                    <Table className="w-8 h-8 mx-auto mb-2 opacity-40 text-blue-400" />
                    <p className="text-xs">Click "Run Code" or "Submit Code" to see table output</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Execution Action Buttons */}
          <div className={`p-3 border-t ${isDarkMode ? 'border-slate-800 bg-[#0b1120]' : 'border-slate-200 bg-slate-50'} flex items-center gap-2 shrink-0`}>
            {/* Run Code */}
            <button
              type="button"
              disabled={isRunning || isSubmitting}
              onClick={handleRunCode}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer active:scale-95 ${
                isDarkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 shadow-xs'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-blue-400" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>

            {/* Submit Code */}
            <button
              type="button"
              disabled={isRunning || isSubmitting}
              onClick={handleSubmitCode}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Evaluating...' : 'Submit Code'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
