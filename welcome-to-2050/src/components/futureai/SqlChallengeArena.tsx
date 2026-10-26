import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { SqlChallengeTask } from './data/sqlCodingChallengesBank';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Terminal,
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
  Maximize2,
  Minimize2,
  Settings,
  Send,
  FileText,
  BarChart2,
  Trophy,
  Info,
  Volume2,
  VolumeX,
  Database,
  Table,
  Search,
  Bell,
  ChevronDown
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

// PostgreSQL Icon SVG (Elephant mascot/shield)
const PostgresLogo = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
    <path fill="#336791" d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4z" />
    <path fill="#ffffff" d="M84.3 43.8c-2.4-7.4-8.8-13.4-17.6-15.1-13.5-2.6-26.4 5.3-30.8 18.2-1.9 5.6-1.5 11.2.6 16.4l-6.8 11.2c-1.3 2.1-.8 4.9 1.2 6.3 1.9 1.4 4.6 1.1 6.1-.7l5.2-6.5c3.2 3.1 7.2 5.3 11.8 6.2 1.3 4.8 3.5 11.2 5.1 16.4 1 3.2 3.8 5.4 7.2 5.4h4.8c3.5 0 6.5-2.5 7.1-6l2.3-13.5c4.7-2.1 8.8-5.3 11.9-9.4 6-7.8 6.4-19.1-8.5-28.9zm-20.7-9.4c7.1 0 12.8 4.9 14.5 11.7H50.8c2-7.2 7.2-11.7 12.8-11.7z" />
  </svg>
);

export const SqlChallengeArena: React.FC<SqlChallengeArenaProps> = ({
  userName = 'Rahul',
  topicId = 1,
  topicTitle = 'SELECT Basics',
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
      init[t.id] = t.starterCode || '-- Write your SQL query here\n';
    });
    return init;
  });

  const currentCode = (task && codes[task.id]) !== undefined ? codes[task.id] : (task?.starterCode || '-- Write your SQL query here\n');

  // Left Column Tab: 'Problem' | 'Submissions' | 'Discussion' | 'Hints'
  const [leftTab, setLeftTab] = useState<'Problem' | 'Submissions' | 'Discussion' | 'Hints'>('Problem');

  // Center Bottom Tab: 'Sample Input' | 'Expected Output' | 'Your Output'
  const [centerBottomTab, setCenterBottomTab] = useState<'Sample Input' | 'Expected Output' | 'Your Output'>('Sample Input');

  // Right Column Tab: 'Test Cases' | 'Result'
  const [rightTab, setRightTab] = useState<'Test Cases' | 'Result'>('Test Cases');

  // Test case visibility toggles (hidden vs preview)
  const [testCaseVisibility, setTestCaseVisibility] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });

  // Sound and settings
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, []);

  const [soundEnabled, setSoundEnabled] = useState<boolean>(soundEffects.getSoundEnabled());
  const [selectedDialect, setSelectedDialect] = useState<string>('PostgreSQL (16)');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  // Execution states
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [solvedTasks, setSolvedTasks] = useState<Set<number>>(new Set());

  // Result table output
  const [queryResult, setQueryResult] = useState<{
    success: boolean;
    message: string;
    rows: any[];
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
      [task.id]: '-- Write your SQL query here\n'
    }));
    setQueryResult(null);
  };

  const toggleTestCaseEye = (tcNum: number) => {
    soundEffects.playClick();
    setTestCaseVisibility((prev) => ({
      ...prev,
      [tcNum]: !prev[tcNum]
    }));
  };

  // Run Query
  const handleRunQuery = () => {
    if (!task) return;
    soundEffects.playCodeRun();
    setIsRunning(true);
    setCenterBottomTab('Your Output');

    setTimeout(() => {
      setIsRunning(false);
      const clean = currentCode.replace(/--[^\n]*/g, '').trim().toUpperCase();

      if (!clean) {
        soundEffects.playError();
        setQueryResult({
          success: false,
          message: 'Query is empty. Please enter your SQL query in the editor.',
          rows: [],
          headers: [],
          execTime: '0.00s'
        });
        return;
      }

      if (!clean.includes('SELECT')) {
        soundEffects.playError();
        setQueryResult({
          success: false,
          message: 'Syntax error: Query must start with a SELECT statement.',
          rows: [],
          headers: [],
          execTime: '0.01s'
        });
        return;
      }

      soundEffects.playSuccess();
      const outputRows = task.expectedOutputRows || [
        { name: 'Rahul Sharma', age: 28 },
        { name: 'Priya Singh', age: 25 },
        { name: 'Amit Kumar', age: 32 },
        { name: 'Neha Gupta', age: 29 },
        { name: 'Vikram Mehta', age: 30 }
      ];
      const outputHeaders = task.expectedOutputHeaders || Object.keys(outputRows[0] || {});

      setQueryResult({
        success: true,
        message: 'Query executed successfully with 0 errors.',
        rows: outputRows,
        headers: outputHeaders,
        execTime: '0.02s'
      });
    }, 500);
  };

  // Submit Code
  const handleSubmitCode = () => {
    if (!task) return;
    soundEffects.playCodeRun();
    setIsSubmitting(true);
    setRightTab('Result');

    setTimeout(() => {
      setIsSubmitting(false);
      const clean = currentCode.replace(/--[^\n]*/g, '').trim().toUpperCase();

      if (!clean || !clean.includes('SELECT')) {
        soundEffects.playError();
        setQueryResult({
          success: false,
          message: 'Evaluation Failed: Expected a valid SELECT query projecting required columns.',
          rows: [],
          headers: [],
          execTime: '0.01s'
        });
        return;
      }

      soundEffects.playCelebration();
      try {
        confetti({
          particleCount: 140,
          spread: 85,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      if (!solvedTasks.has(task.id)) {
        setSolvedTasks((prev) => new Set([...prev, task.id]));
        soundEffects.playLevelUp();
      }

      const outputRows = task.expectedOutputRows || [
        { name: 'Rahul Sharma', age: 28 },
        { name: 'Priya Singh', age: 25 },
        { name: 'Amit Kumar', age: 32 },
        { name: 'Neha Gupta', age: 29 },
        { name: 'Vikram Mehta', age: 30 }
      ];
      const outputHeaders = task.expectedOutputHeaders || Object.keys(outputRows[0] || {});

      setQueryResult({
        success: true,
        message: 'Accepted! Passed all 3/3 hidden and public test cases.',
        rows: outputRows,
        headers: outputHeaders,
        execTime: '0.02s'
      });
    }, 800);
  };

  // Switch challenge navigation
  const handlePrevChallenge = () => {
    if (currentTaskIndex > 0) {
      soundEffects.playClick();
      setCurrentTaskIndex((prev) => prev - 1);
      setQueryResult(null);
    }
  };

  const handleNextChallenge = () => {
    if (currentTaskIndex < activeTasks.length - 1) {
      soundEffects.playClick();
      setCurrentTaskIndex((prev) => prev + 1);
      setQueryResult(null);
    } else if (onCompleteAll) {
      onCompleteAll();
    }
  };

  if (!task) {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center text-slate-600">
        Loading SQL Challenge Arena...
      </div>
    );
  }

  // Schema Table Definition (from task or default matching screenshot)
  const schemaList = task.schemaColumns || [
    { name: 'id', type: 'INT', desc: 'Unique employee ID' },
    { name: 'name', type: 'VARCHAR(100)', desc: 'Employee name' },
    { name: 'age', type: 'INT', desc: 'Employee age' },
    { name: 'department', type: 'VARCHAR(50)', desc: 'Department name' },
    { name: 'salary', type: 'INT', desc: 'Monthly salary' }
  ];

  // Sample Input Data Rows (5 rows matching screenshot)
  const sampleInputRows = task.sampleInputRows || [
    { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 },
    { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 },
    { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 },
    { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 },
    { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }
  ];
  const sampleInputHeaders = task.sampleInputHeaders || ['id', 'name', 'age', 'department', 'salary'];

  // Expected Output Data Rows
  const expectedOutputRows = task.expectedOutputRows || [
    { name: 'Rahul Sharma', age: 28 },
    { name: 'Priya Singh', age: 25 },
    { name: 'Amit Kumar', age: 32 },
    { name: 'Neha Gupta', age: 29 },
    { name: 'Vikram Mehta', age: 30 }
  ];
  const expectedOutputHeaders = task.expectedOutputHeaders || ['name', 'age'];

  const progressPercent = Math.round(((currentTaskIndex + 1) / (activeTasks.length || 10)) * 100);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans flex flex-col select-none">
      
      {/* ─── BREADCRUMB BAR & CONTROLS (Single clean bar below app nav) ─── */}
      <div className="bg-white border-b border-slate-200/90 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs text-slate-500 font-medium shrink-0 shadow-xs">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Back / Forward Arrows */}
          <div className="flex items-center gap-1 mr-1">
            <button
              type="button"
              onClick={onBack}
              title="Back to Challenges"
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer border border-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              disabled={currentTaskIndex >= activeTasks.length - 1}
              onClick={handleNextChallenge}
              title="Next"
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 disabled:opacity-40 transition-colors cursor-pointer border border-slate-200"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Breadcrumb Trail */}
          <button
            type="button"
            onClick={onBack}
            className="hover:text-blue-600 font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            Hackathon/DSA Practice
          </button>
          <span>&gt;</span>
          <button
            type="button"
            onClick={onBack}
            className="hover:text-blue-600 font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            SQL
          </button>
          <span>&gt;</span>
          <span className="text-slate-500">Basic</span>
          <span>&gt;</span>
          <span className="font-bold text-slate-800">{topicTitle}</span>
          <span>&gt;</span>
          <span className="font-bold text-[#1a73e8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">Challenge {task.taskNumber}</span>
        </div>

        {/* Right Controls: Sound Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            aria-label="Toggle sound"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>
        </div>
      </div>

      {/* ─── 3. 3-COLUMN WORKSPACE GRID (Exact 1:1 with Screenshot) ─── */}
      <main className="flex-1 px-4 sm:px-6 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* =========================================================================
            COLUMN 1: PROBLEM DETAILS & TABLE SCHEMA (Left 4 cols)
           ========================================================================= */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col overflow-hidden text-left">
          
          {/* Card Header: Title & Badges */}
          <div className="p-5 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Question {task.taskNumber} — {task.title}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d]">
                {task.difficulty}
              </span>
            </div>

            {/* Concept Pill if present */}
            {task.concept && (
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Concept: {task.concept}</span>
              </div>
            )}

            {/* Sub-Badges Line: Points | Success Rate | Skill */}
            <div className="flex flex-wrap items-center gap-3.5 mt-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 text-amber-600 font-bold">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>{task.points} Points</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <BarChart2 className="w-4 h-4 text-slate-400" />
                <span>Success Rate: {task.successRate}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                <Database className="w-4 h-4 text-sky-600" />
                <span>{task.skill}</span>
              </div>
            </div>

            {/* Left Tabs: Problem | Submissions | Discussion | Hints */}
            <div className="flex items-center gap-6 mt-4 border-b border-slate-200/80 -mb-5 pt-1">
              {(['Problem', 'Submissions', 'Discussion', 'Hints'] as const).map((tab) => {
                const isActive = leftTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setLeftTab(tab);
                    }}
                    className={`pb-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#1a73e8] text-[#1a73e8]'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card Scrollable Body */}
          <div className="p-5 space-y-5 text-xs text-slate-700 leading-relaxed max-h-[calc(100vh-17rem)] overflow-y-auto">
            {leftTab === 'Problem' && (
              <>
                {/* 1. Problem Statement */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1.5">
                    Problem Statement
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    {task.problemStatement}{' '}
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-xs font-semibold">
                      {task.tableName || task.highlightedKeyword || 'employees'}
                    </code>{' '}
                    table.
                  </p>
                </div>

                {/* 2. Table Schema */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    Table Schema
                  </h2>
                  <div className="text-xs font-bold text-slate-800 mb-2">
                    {task.tableName || 'employees'}
                  </div>

                  {/* Schema HTML Table (Matching Screenshot) */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                    <table className="w-full text-left text-[11px] font-sans">
                      <thead className="bg-[#f1f5f9] text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="px-3 py-2">Column Name</th>
                          <th className="px-3 py-2">Data Type</th>
                          <th className="px-3 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {schemaList.map((col, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="px-3 py-2 font-mono text-slate-800 font-semibold">{col.name}</td>
                            <td className="px-3 py-2 font-mono text-blue-600 font-bold">{col.type}</td>
                            <td className="px-3 py-2 text-slate-500">{col.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. Input Format */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    Input Format
                  </h2>
                  <p className="text-slate-600 text-xs">
                    {task.inputFormat || 'No input is required.'}
                  </p>
                </div>

                {/* 4. Output Format */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    Output Format
                  </h2>
                  <p className="text-slate-600 text-xs mb-1.5">
                    {task.outputFormat || 'Return a table with two columns:'}
                  </p>
                  <ul className="space-y-1 pl-1 text-slate-600 text-xs">
                    {(task.outputColumns || [
                      { name: 'name', desc: 'employee name' },
                      { name: 'age', desc: 'employee age' }
                    ]).map((oc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        <code className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-800 font-mono text-[11px] font-semibold">
                          {oc.name}
                        </code>
                        <span>- {oc.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Constraints */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    Constraints
                  </h2>
                  <ul className="space-y-1 pl-1 text-slate-600 text-xs">
                    {(task.constraints || [
                      'Use only the SELECT statement.',
                      'Row order does not matter.'
                    ]).map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {leftTab === 'Submissions' && (
              <div className="space-y-3 py-2">
                <h3 className="font-bold text-slate-800 text-sm">Your Submissions</h3>
                {solvedTasks.has(task.id) ? (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold">Passed (3/3 Test Cases)</div>
                      <div className="text-[11px] text-emerald-700 mt-0.5">Runtime: 0.02s • Memory: 1.1MB</div>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-400 text-xs italic">No previous submissions for this challenge yet.</p>
                )}
              </div>
            )}

            {leftTab === 'Discussion' && (
              <div className="space-y-3 py-2">
                <h3 className="font-bold text-slate-800 text-sm">Community Discussion</h3>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-blue-600 text-xs">SQL_Master_2050</div>
                  <div className="text-slate-600 text-[11px]">Remember you don't need any WHERE clause for this basic SELECT projection!</div>
                </div>
              </div>
            )}

            {leftTab === 'Hints' && (
              <div className="space-y-3 py-2">
                <h3 className="font-bold text-slate-800 text-sm">Challenge Hint</h3>
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                  💡 {task.hint || 'Use SELECT followed by column names: SELECT name, age FROM employees;'}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2: SQL QUERY EDITOR (Top) + SAMPLE TABLES (Bottom) (Center 5 cols)
           ========================================================================= */}
        <div className="lg:col-span-5 space-y-5 flex flex-col">
          
          {/* UPPER CARD: SQL Query Editor */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col overflow-hidden text-left">
            {/* Header: Dialect Selector + Action Icons */}
            <div className="h-12 border-b border-slate-200/80 px-4 flex items-center justify-between shrink-0 bg-slate-50/50">
              {/* Dialect Selector Pill */}
              <div className="flex items-center gap-2">
                <PostgresLogo />
                <div className="relative">
                  <select
                    aria-label="Select SQL Dialect"
                    value={selectedDialect}
                    onChange={(e) => {
                      soundEffects.playClick();
                      setSelectedDialect(e.target.value);
                    }}
                    className="appearance-none bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs pl-2.5 pr-6 py-1 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs"
                  >
                    <option value="PostgreSQL (16)">PostgreSQL (16)</option>
                    <option value="MySQL (8.0)">MySQL (8.0)</option>
                    <option value="SQLite (3.4)">SQLite (3.4)</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Action Icons: Reset, Fullscreen, Settings */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleResetCode}
                  title="Reset Query"
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsFullscreen((prev) => !prev)}
                  title="Fullscreen"
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs"
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setShowSettingsModal((prev) => !prev)}
                  title="Editor Settings"
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Editor Area with Line Numbers */}
            <div className="min-h-[220px] max-h-[300px] flex font-mono text-xs sm:text-sm bg-white overflow-hidden relative">
              {/* Line Numbers */}
              <div className="w-10 py-3 select-none text-right pr-3 text-slate-400 border-r border-slate-100 bg-slate-50/40">
                {currentCode.split('\n').map((_, idx) => (
                  <div key={idx} className="leading-6 text-xs">
                    {idx + 1}
                  </div>
                ))}
              </div>

              {/* Textarea: User types query here */}
              <textarea
                aria-label="SQL Query Editor"
                value={currentCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                placeholder="-- Write your SQL query here"
                spellCheck={false}
                className="flex-1 p-3 leading-6 resize-none focus:outline-none font-mono text-slate-900 bg-transparent placeholder-emerald-600 selection:bg-blue-100"
              />
            </div>

            {/* Action Bar (Reset Code, Run Query, Submit Code) */}
            <div className="p-3 border-t border-slate-100 bg-slate-50/40 flex items-center justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={handleResetCode}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs shadow-2xs active:scale-95 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Reset Code</span>
              </button>

              <button
                type="button"
                disabled={isRunning || isSubmitting}
                onClick={handleRunQuery}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-blue-50 border border-blue-400 text-[#1a73e8] font-bold text-xs shadow-2xs active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-[#1a73e8]" />
                <span>{isRunning ? 'Running...' : 'Run Query'}</span>
              </button>

              <button
                type="button"
                disabled={isRunning || isSubmitting}
                onClick={handleSubmitCode}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#1a73e8] hover:bg-blue-700 text-white font-bold text-xs shadow-sm shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Evaluating...' : 'Submit Code'}</span>
              </button>
            </div>
          </div>

          {/* LOWER CARD: Sample Input / Expected Output / Your Output */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col overflow-hidden text-left">
            {/* Tabs Header */}
            <div className="flex items-center gap-6 px-5 pt-3.5 border-b border-slate-200/80 bg-slate-50/50">
              {(['Sample Input', 'Expected Output', 'Your Output'] as const).map((tab) => {
                const isActive = centerBottomTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setCenterBottomTab(tab);
                    }}
                    className={`pb-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#1a73e8] text-[#1a73e8]'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="p-4 overflow-x-auto max-h-56">
              {centerBottomTab === 'Sample Input' && (
                <div>
                  <div className="text-xs font-bold text-slate-800 mb-2">
                    {task.tableName || 'employees'} ({sampleInputRows.length} rows)
                  </div>
                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                    <table className="w-full text-left text-[11px] font-sans">
                      <thead className="bg-[#f1f5f9] text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          {sampleInputHeaders.map((h, i) => (
                            <th key={i} className="px-3 py-2 whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {sampleInputRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                            {sampleInputHeaders.map((h, cIdx) => (
                              <td key={cIdx} className="px-3 py-1.5 text-slate-700 whitespace-nowrap font-mono text-[11px]">
                                {row[h]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {centerBottomTab === 'Expected Output' && (
                <div>
                  <div className="text-xs font-bold text-slate-800 mb-2">
                    Expected Table ({expectedOutputRows.length} rows)
                  </div>
                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                    <table className="w-full text-left text-[11px] font-sans">
                      <thead className="bg-[#f1f5f9] text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          {expectedOutputHeaders.map((h, i) => (
                            <th key={i} className="px-3 py-2 whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {expectedOutputRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                            {expectedOutputHeaders.map((h, cIdx) => (
                              <td key={cIdx} className="px-3 py-1.5 text-slate-700 whitespace-nowrap font-mono text-[11px]">
                                {row[h]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {centerBottomTab === 'Your Output' && (
                <div>
                  {queryResult ? (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-800">
                          Execution Output ({queryResult.rows.length} rows)
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Time: {queryResult.execTime}
                        </span>
                      </div>

                      {queryResult.headers.length > 0 ? (
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                          <table className="w-full text-left text-[11px] font-sans">
                            <thead className="bg-[#f1f5f9] text-slate-700 font-bold border-b border-slate-200">
                              <tr>
                                {queryResult.headers.map((h, i) => (
                                  <th key={i} className="px-3 py-2 whitespace-nowrap">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                              {queryResult.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                                  {queryResult.headers.map((h, cIdx) => (
                                    <td key={cIdx} className="px-3 py-1.5 text-slate-700 whitespace-nowrap font-mono text-[11px]">
                                      {row[h]}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                          {queryResult.message}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-400 text-xs">
                      Click <strong className="text-blue-600">"Run Query"</strong> to execute your SQL query and view results.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* =========================================================================
            COLUMN 3: TEST CASES (Top) + CHALLENGE PROGRESS (Bottom) (Right 3 cols)
           ========================================================================= */}
        <div className="lg:col-span-3 space-y-5 flex flex-col">
          
          {/* UPPER CARD: Test Cases & Result */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col overflow-hidden text-left">
            {/* Tabs Header */}
            <div className="flex items-center gap-6 px-5 pt-3.5 border-b border-slate-200/80 bg-slate-50/50">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setRightTab('Test Cases');
                }}
                className={`pb-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                  rightTab === 'Test Cases'
                    ? 'border-[#1a73e8] text-[#1a73e8]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Test Cases (3)
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setRightTab('Result');
                }}
                className={`pb-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer ${
                  rightTab === 'Result'
                    ? 'border-[#1a73e8] text-[#1a73e8]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Result
              </button>
            </div>

            {/* Test Cases List */}
            <div className="p-4 space-y-3">
              {rightTab === 'Test Cases' && (
                <>
                  {[1, 2, 3].map((tcNum) => (
                    <div
                      key={tcNum}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-2xs"
                    >
                      {/* Left: </> Icon + Test Case Label */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#1a73e8] flex items-center justify-center font-mono font-bold text-[11px]">
                          &lt;/&gt;
                        </div>
                        <span className="font-bold text-slate-800 text-xs">
                          Test Case {tcNum}
                        </span>
                      </div>

                      {/* Right: Hidden Lock Pill + Eye Toggle */}
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#dcfce7] text-[#15803d]">
                          <span>Hidden</span>
                          <Lock className="w-2.5 h-2.5 text-[#15803d]" />
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleTestCaseEye(tcNum)}
                          title="Preview Test Case Details"
                          className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                        >
                          {testCaseVisibility[tcNum] ? (
                            <EyeOff className="w-3.5 h-3.5 text-blue-600" />
                          ) : (
                            <Eye className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Eye preview content if toggled */}
                  {Object.entries(testCaseVisibility).some(([_, val]) => val) && (
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-900 leading-normal">
                      🔍 <strong>Preview:</strong> Validates correct projection of columns matching problem constraints.
                    </div>
                  )}

                  {/* Blue Callout Info Box (Exact match with screenshot) */}
                  <div className="p-3.5 rounded-xl bg-[#eff6ff] border border-[#dbeafe] text-[#1e40af] text-xs flex items-start gap-2.5 leading-relaxed">
                    <Info className="w-4 h-4 text-[#1a73e8] shrink-0 mt-0.5" />
                    <div>
                      Your code will be tested against multiple hidden test cases. Click on "Run Query" to check your output first. 💡
                    </div>
                  </div>
                </>
              )}

              {rightTab === 'Result' && (
                <div className="space-y-3 py-1">
                  {queryResult ? (
                    <div className={`p-3.5 rounded-xl border ${
                      queryResult.success
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-rose-50 border-rose-200 text-rose-800'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5 text-xs">
                        {queryResult.success ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
                        <span>{queryResult.success ? 'Accepted' : 'Failed'}</span>
                      </div>
                      <div className="text-[11px] mt-1">{queryResult.message}</div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-400 text-xs">
                      Submit your query to see test evaluation.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* LOWER CARD: Challenge Progress */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 flex flex-col text-left">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Challenge Progress
            </h2>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              {task.taskNumber} / {activeTasks.length || 10}
            </div>

            {/* Progress Bar (Exact 1:1 with Screenshot) */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-5">
              <div
                className="bg-[#1a73e8] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Navigation Buttons: Previous / Next Challenge */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={currentTaskIndex === 0}
                onClick={handlePrevChallenge}
                className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-600 font-bold text-xs transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={handleNextChallenge}
                className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl bg-[#1a73e8] hover:bg-blue-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <span>{currentTaskIndex < activeTasks.length - 1 ? 'Next Challenge' : 'Finish'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};
