import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Code, 
  Play, 
  RotateCcw, 
  Check, 
  Lightbulb, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  Terminal as TerminalIcon,
  Flame,
  Award,
  CheckCircle2,
  AlertCircle,
  Lock
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import './CodePracticeLab.css';

interface CodePracticeLabProps {
  userName?: string;
  onBack?: () => void;
  onUnlockNextStage?: () => void;
  onFinishAll?: () => void;
}

interface QuestionData {
  id: number;
  practiceTitle: string; // e.g. "Code Practice 1"
  missionNumber: number; // 1 to 5
  missionName: string; // e.g. "2. First Python Program"
  taskText: string; // e.g. "Write a Python program to display"
  targetPill: string; // e.g. '"Hello World"'
  taskSuffix: string; // e.g. "on the screen."
  robotSpeech: string;
  hintText: string;
  hintCode: string;
  defaultCode: string;
  expectedOutput: string;
  successTitle: string;
  successMessage: string;
  xpReward: number;
}

const CODING_QUESTIONS: QuestionData[] = [
  {
    id: 1,
    practiceTitle: 'Code Practice 1',
    missionNumber: 2,
    missionName: '2. First Python Program',
    taskText: 'Write a Python program to display',
    targetPill: '"Hello World"',
    taskSuffix: 'on the screen.',
    robotSpeech: "Type the code in the editor and click Run Code. I'm here to help! 😊",
    hintText: 'Use the',
    hintCode: 'print()',
    defaultCode: '',
    expectedOutput: 'Hello World',
    successTitle: 'Great! Correct Output!',
    successMessage: 'You have successfully displayed "Hello World".',
    xpReward: 10
  },
  {
    id: 2,
    practiceTitle: 'Code Practice 2',
    missionNumber: 2,
    missionName: '2. First Python Program',
    taskText: 'Write a Python program to display',
    targetPill: '"Welcome to Future.AI"',
    taskSuffix: 'on the screen.',
    robotSpeech: 'Write print("Welcome to Future.AI") and run your program!',
    hintText: 'Pass the exact string inside',
    hintCode: 'print("...")',
    defaultCode: '',
    expectedOutput: 'Welcome to Future.AI',
    successTitle: 'Awesome Job!',
    successMessage: 'You successfully printed "Welcome to Future.AI" to stdout!',
    xpReward: 10
  },
  {
    id: 3,
    practiceTitle: 'Code Practice 3',
    missionNumber: 3,
    missionName: '3. Variables',
    taskText: 'Create a variable message with text',
    targetPill: '"Python is Fun"',
    taskSuffix: 'and display it with print(message).',
    robotSpeech: 'Store the text in a variable, then pass that variable into print()!',
    hintText: 'Variables do not need quotes when passed into',
    hintCode: 'print(message)',
    defaultCode: '',
    expectedOutput: 'Python is Fun',
    successTitle: 'Variable Mastered!',
    successMessage: 'You created your first Python variable and displayed its value.',
    xpReward: 10
  },
  {
    id: 4,
    practiceTitle: 'Code Practice 4',
    missionNumber: 4,
    missionName: '4. Data Types',
    taskText: 'Write a Python program to calculate and display the sum of',
    targetPill: '20 + 30',
    taskSuffix: 'using numbers.',
    robotSpeech: 'Numbers in Python do not need quotes! Try print(20 + 30).',
    hintText: 'Python will automatically calculate math inside',
    hintCode: 'print(20 + 30)',
    defaultCode: '',
    expectedOutput: '50',
    successTitle: 'Calculation Verified!',
    successMessage: 'Python successfully evaluated 20 + 30 and outputted 50.',
    xpReward: 10
  },
  {
    id: 5,
    practiceTitle: 'Code Practice 5',
    missionNumber: 5,
    missionName: '5. Input and Output',
    taskText: 'Write two print() statements to display',
    targetPill: '"Data Analyst" & "Future Ready"',
    taskSuffix: 'on two separate lines.',
    robotSpeech: 'Write two print statements! Each one outputs on a new line.',
    hintText: 'Use two separate lines of',
    hintCode: 'print()',
    defaultCode: '',
    expectedOutput: 'Data Analyst\nFuture Ready',
    successTitle: 'Mission Accomplished! 🚀',
    successMessage: 'You mastered multi-line Python printing like a professional developer!',
    xpReward: 10
  }
];

export const CodePracticeLab: React.FC<CodePracticeLabProps> = ({
  userName = 'Rahul Sharma',
  onBack,
  onUnlockNextStage,
  onFinishAll
}) => {
  const [currentQIdx, setCurrentQIdx] = useState<number>(0);
  const qData = CODING_QUESTIONS[currentQIdx];

  // User code state for each question - starts EMPTY so student writes their own code!
  const [userCodes, setUserCodes] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
    4: ''
  });

  // Track completed questions
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [xp, setXp] = useState<number>(250);
  const [streakDays, setStreakDays] = useState<number>(3);

  // Terminal & execution state - starts EMPTY
  const [terminalOutput, setTerminalOutput] = useState<string>('');
  const [isTerminalRunning, setIsTerminalRunning] = useState<boolean>(false);
  const [hasExecuted, setHasExecuted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto-advance timer reference & state
  const [autoAdvancing, setAutoAdvancing] = useState<boolean>(false);
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Toast Notification
  const [toast, setToast] = useState<{ message: string; type: 'warning' | 'info' | 'success' } | null>(null);
  const showToast = (message: string, type: 'warning' | 'info' | 'success' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3200);
  };

  // Fullscreen editor toggle
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Confetti celebration state
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Auto-focus editor textarea
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentCode = userCodes[currentQIdx] || '';

  // Clean up any auto-advance timer on question change or unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
    };
  }, [currentQIdx]);

  // Synchronize initial question setup
  useEffect(() => {
    setAutoAdvancing(false);
    // When question changes, reset execution view if not yet run
    if (!completedQuestions.includes(currentQIdx)) {
      setHasExecuted(false);
      setIsCorrect(false);
      setTerminalOutput('');
      setErrorMessage(null);
    } else {
      setHasExecuted(true);
      setIsCorrect(true);
      setTerminalOutput(qData.expectedOutput);
    }
  }, [currentQIdx]);

  // Execute Code Logic
  const handleRunCode = () => {
    soundEffects.playClick();
    setIsTerminalRunning(true);
    setErrorMessage(null);

    setTimeout(() => {
      setIsTerminalRunning(false);
      setHasExecuted(true);

      const code = (userCodes[currentQIdx] || '').trim();

      // Check empty
      if (!code) {
        soundEffects.playError();
        setTerminalOutput('');
        setErrorMessage('Code editor is empty. Write your Python code and run again.');
        setIsCorrect(false);
        return;
      }

      // Lightweight Python interpreter simulation
      try {
        const lines = code.split('\n');
        const outputLines: string[] = [];
        const variables: Record<string, any> = {};

        for (const rawLine of lines) {
          const line = rawLine.trim();
          if (!line || line.startsWith('#')) continue;

          // Check variable assignment: var_name = "value" or var_name = 123
          const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
          if (assignMatch && !line.startsWith('print')) {
            const varName = assignMatch[1];
            let valExpr = assignMatch[2].trim();
            // Handle string
            if ((valExpr.startsWith('"') && valExpr.endsWith('"')) || (valExpr.startsWith("'") && valExpr.endsWith("'"))) {
              variables[varName] = valExpr.slice(1, -1);
            } else if (!isNaN(Number(valExpr))) {
              variables[varName] = Number(valExpr);
            } else if (valExpr in variables) {
              variables[varName] = variables[valExpr];
            } else {
              throw new Error(`NameError: name '${valExpr}' is not defined`);
            }
            continue;
          }

          // Check print(...) function
          const printMatch = line.match(/^print\s*\((.*)\)$/);
          if (printMatch) {
            let inner = printMatch[1].trim();
            if (!inner) {
              outputLines.push('');
              continue;
            }

            // Check if string literal
            if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
              outputLines.push(inner.slice(1, -1));
            } 
            // Check if math operation like 20 + 30
            else if (/^[\d\s\+\-\*\/]+$/.test(inner)) {
              try {
                // Safe calculation of simple math numbers
                const calcResult = Function(`"use strict"; return (${inner});`)();
                outputLines.push(String(calcResult));
              } catch (e) {
                outputLines.push(inner);
              }
            }
            // Check variable
            else if (inner in variables) {
              outputLines.push(String(variables[inner]));
            }
            else {
              // Unrecognized identifier
              throw new Error(`NameError: name '${inner}' is not defined`);
            }
          } else {
            // Check missing parentheses
            if (line.startsWith('print ')) {
              throw new Error(`SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?`);
            } else {
              throw new Error(`SyntaxError: Invalid syntax in line '${line}'`);
            }
          }
        }

        const evaluatedOutput = outputLines.join('\n');
        setTerminalOutput(evaluatedOutput);

        // Verify with expected output (case-insensitive & trimmed)
        const normalize = (s: string) => s.replace(/\r\n/g, '\n').trim().toLowerCase();
        const expected = normalize(qData.expectedOutput);
        const actual = normalize(evaluatedOutput);

        if (actual === expected) {
          // CORRECT!
          soundEffects.playSuccess();
          setIsCorrect(true);
          setErrorMessage(null);
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2600);

          if (!completedQuestions.includes(currentQIdx)) {
            setCompletedQuestions(prev => {
              if (prev.includes(currentQIdx)) return prev;
              return [...prev, currentQIdx];
            });
            setXp(prev => prev + qData.xpReward);
          }

          // AUTO-ADVANCE TO NEXT QUESTION AFTER 2.2 SECONDS!
          if (autoAdvanceTimerRef.current) {
            clearTimeout(autoAdvanceTimerRef.current);
          }
          setAutoAdvancing(true);

          autoAdvanceTimerRef.current = setTimeout(() => {
            setAutoAdvancing(false);
            if (currentQIdx < CODING_QUESTIONS.length - 1) {
              soundEffects.playClick();
              setCurrentQIdx(prev => prev + 1);
            } else {
              // Completed all 5 questions!
              soundEffects.playCelebration();
              if (onFinishAll) {
                onFinishAll();
              } else if (onUnlockNextStage) {
                onUnlockNextStage();
              }
            }
          }, 2200);

        } else {
          // WRONG OUTPUT
          soundEffects.playError();
          setIsCorrect(false);
          setErrorMessage(`Expected output: "${qData.expectedOutput}", but received: "${evaluatedOutput}"`);
        }
      } catch (err: any) {
        soundEffects.playError();
        setIsCorrect(false);
        setTerminalOutput(`Traceback (most recent call last):\n  File "main.py", line 1\n${err.message || 'SyntaxError'}`);
        setErrorMessage(err.message || 'SyntaxError in code');
      }
    }, 450);
  };

  // Keyboard shortcut Ctrl + Enter to Run Code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRunCode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQIdx, userCodes]);

  // Navigate to Next Question - Validates completion before allowing step-forward!
  const handleNextQuestion = () => {
    // Clear auto-advance timer if user clicks Next button manually
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setAutoAdvancing(false);

    const isCurrentQDone = completedQuestions.includes(currentQIdx) || isCorrect;
    if (!isCurrentQDone) {
      soundEffects.playQuizWrong();
      showToast(`🔒 Question ${currentQIdx + 1} complete karke Run Code karein tabhi aage ja sakte hain!`, 'warning');
      return;
    }

    soundEffects.playClick();
    if (currentQIdx < CODING_QUESTIONS.length - 1) {
      setCurrentQIdx(prev => prev + 1);
    } else {
      // Completed all 5 questions!
      soundEffects.playCelebration();
      if (onFinishAll) {
        onFinishAll();
      } else if (onUnlockNextStage) {
        onUnlockNextStage();
      }
    }
  };

  // Navigate to Previous Question
  const handlePreviousQuestion = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setAutoAdvancing(false);

    soundEffects.playClick();
    if (currentQIdx > 0) {
      setCurrentQIdx(prev => prev - 1);
    } else if (onBack) {
      onBack();
    }
  };

  // Clear Terminal Output
  const handleClearTerminal = () => {
    soundEffects.playClick();
    setTerminalOutput('');
    setHasExecuted(false);
    setIsCorrect(false);
    setErrorMessage(null);
  };

  // Reset current question code to default (empty)
  const handleResetCode = () => {
    soundEffects.playClick();
    setUserCodes(prev => ({
      ...prev,
      [currentQIdx]: ''
    }));
    setHasExecuted(false);
    setIsCorrect(false);
    setTerminalOutput('');
    setErrorMessage(null);
  };

  // Calculate lines for code editor gutter
  const codeLines = currentCode.split('\n');

  return (
    <div className={`fai-cpl-viewport ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      
      {/* Toast Alert Notice */}
      {toast && (
        <div className={`fai-cpl-toast ${toast.type}`}>
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Confetti Particles */}
      {showConfetti && (
        <div className="fai-cpl-confetti-container">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className="fai-cpl-confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.4}s`,
                backgroundColor: ['#1677FF', '#00CFEB', '#16C79A', '#FF9F1C', '#FF4D8D', '#8B7CFF'][i % 6]
              }}
            />
          ))}
        </div>
      )}

      {/* =========================================================================
          1. TOP APP HEADER (1:1 with media_1790614931039.png)
          ========================================================================= */}
      <header className="fai-cpl-topbar">
        {/* Left: Brand & Course Title */}
        <div className="fai-cpl-topbar-left">
          <div className="fai-cpl-logo">
            <span className="font-extrabold text-blue-600 text-xl tracking-tight">Future</span>
            <span className="font-extrabold text-cyan-400 text-xl">.AI</span>
          </div>
          <div className="fai-cpl-divider" />
          <div className="fai-cpl-course-info">
            <span className="fai-cpl-course-name">Python for Beginners</span>
            <span className="fai-cpl-lesson-name">1. Introduction to Python</span>
          </div>
        </div>

        {/* Center: Segmented Progress Bar */}
        <div className="fai-cpl-topbar-center">
          <div className="fai-cpl-progress-pills">
            {CODING_QUESTIONS.map((q, idx) => (
              <span
                key={q.id}
                className={`fai-cpl-pill-seg ${
                  completedQuestions.includes(idx) ? 'active' : ''
                }`}
              />
            ))}
          </div>
          <span className="fai-cpl-progress-text">
            {completedQuestions.length} / 5
          </span>
        </div>

        {/* Right: Streak, XP & User Avatar */}
        <div className="fai-cpl-topbar-right">
          {/* Day Streak */}
          <div className="fai-cpl-stat-chip streak">
            <Flame className="w-4 h-4 text-amber-500 fill-current" />
            <div className="flex flex-col">
              <span className="fai-cpl-stat-num">{streakDays}</span>
              <span className="fai-cpl-stat-lbl">Day Streak</span>
            </div>
          </div>

          {/* XP Coins */}
          <div className="fai-cpl-stat-chip xp">
            <span className="text-base">🪙</span>
            <div className="flex flex-col">
              <span className="fai-cpl-stat-num">{xp}</span>
              <span className="fai-cpl-stat-lbl">XP</span>
            </div>
          </div>

          {/* User Profile Avatar */}
          <div className="fai-cpl-avatar-wrap" title={userName}>
            <img 
              src="/images/powergreen_ai_bot.png" 
              alt="User" 
              className="fai-cpl-avatar-img"
            />
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. MAIN LAYOUT GRID (LEFT SIDEBAR + CENTER EDITOR + RIGHT OUTPUT)
          ========================================================================= */}
      <main className="fai-cpl-main-layout">
        
        {/* ----------------------------------------------------
            LEFT SIDEBAR: Python Launch Mission
            ---------------------------------------------------- */}
        <aside className="fai-cpl-sidebar-card">
          <div className="fai-cpl-sidebar-header">
            <img 
              src="/images/python_logo_3d_hd.png" 
              alt="Python 3D" 
              className="fai-cpl-sidebar-icon"
            />
            <h3 className="fai-cpl-sidebar-title">Python Launch Mission</h3>
          </div>

          <div className="fai-cpl-mission-list">
            {[
              { num: 1, label: '1. What is Python?', state: 'completed' },
              { num: 2, label: '2. First Python Program', state: 'active' },
              { num: 3, label: '3. Variables', state: 'pending' },
              { num: 4, label: '4. Data Types', state: 'pending' },
              { num: 5, label: '5. Input and Output', state: 'pending' }
            ].map((m) => {
              const isActive = qData.missionNumber === m.num;
              const isDone = m.num < qData.missionNumber || (m.num === 2 && currentQIdx > 0);

              return (
                <div 
                  key={m.num}
                  className={`fai-cpl-mission-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`}
                >
                  <div className="fai-cpl-mission-bullet">
                    {isDone ? (
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    ) : isActive ? (
                      <span className="fai-cpl-bullet-active-dot" />
                    ) : (
                      <span className="fai-cpl-bullet-empty-ring" />
                    )}
                  </div>
                  <span className="fai-cpl-mission-label">{m.label}</span>
                </div>
              );
            })}
          </div>
        </aside>

        {/* ----------------------------------------------------
            CENTER COLUMN: Code Practice & Interactive Editor
            ---------------------------------------------------- */}
        <section className="fai-cpl-center-card">
          
          {/* Header Row: Code Practice badge + 10 XP */}
          <div className="fai-cpl-question-topbar">
            <div className="fai-cpl-qbadge">
              <Code className="w-3.5 h-3.5" />
              <span>{qData.practiceTitle}</span>
            </div>
            <div className="fai-cpl-xp-badge">
              <span>🪙</span>
              <span>{qData.xpReward} XP</span>
            </div>
          </div>

          {/* Question Title statement */}
          <h2 className="fai-cpl-question-title">
            {qData.taskText}{' '}
            <span className="fai-cpl-target-pill">{qData.targetPill}</span>{' '}
            {qData.taskSuffix}
          </h2>

          {/* Robot Assistant & Hint Row */}
          <div className="fai-cpl-assist-row">
            {/* Robot Unit with Speech bubble */}
            <div className="fai-cpl-robot-box">
              <img 
                src="/images/robot_assistant_styleguide.png" 
                alt="Robot Assistant" 
                className="fai-cpl-robot-img"
              />
              <div className="fai-cpl-speech-bubble">
                {qData.robotSpeech}
              </div>
            </div>

            {/* Hint Box */}
            <div className="fai-cpl-hint-box">
              <div className="fai-cpl-hint-title">
                <Lightbulb className="w-4 h-4 text-amber-500 fill-current" />
                <span>Hint</span>
              </div>
              <p className="fai-cpl-hint-text">
                {qData.hintText}{' '}
                <code className="fai-cpl-hint-code">{qData.hintCode}</code>{' '}
                function to display text.
              </p>
            </div>
          </div>

          {/* Code Editor Window (main.py) */}
          <div className="fai-cpl-editor-win">
            {/* Window title bar */}
            <div className="fai-cpl-editor-bar">
              <div className="fai-cpl-editor-file">
                <img 
                  src="/images/python_logo_3d_hd.png" 
                  alt="py" 
                  className="w-4 h-4 object-contain"
                />
                <span className="font-mono text-xs font-bold text-slate-700">main.py</span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  className="fai-cpl-tool-btn"
                  onClick={handleResetCode}
                  title="Reset Code"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                </button>
                <button 
                  className="fai-cpl-tool-btn"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Editor"}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-3.5 h-3.5 text-slate-500" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Editor Textarea with Line Numbers */}
            <div className="fai-cpl-editor-body">
              {/* Line Numbers Gutter */}
              <div className="fai-cpl-gutter">
                {codeLines.map((_, i) => (
                  <span key={i} className="fai-cpl-line-num">{i + 1}</span>
                ))}
              </div>

              {/* Code Input */}
              <div className="fai-cpl-code-area">
                <textarea
                  ref={textareaRef}
                  value={currentCode}
                  onChange={(e) => {
                    setUserCodes({
                      ...userCodes,
                      [currentQIdx]: e.target.value
                    });
                  }}
                  placeholder="# Type your Python code here... (e.g. print(&quot;Hello World&quot;))"
                  className="fai-cpl-textarea"
                  spellCheck={false}
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                />
              </div>
            </div>
          </div>

        </section>

        {/* ----------------------------------------------------
            RIGHT COLUMN: Output, Success Banner & Run Button
            ---------------------------------------------------- */}
        <section className="fai-cpl-output-card">
          
          {/* Header */}
          <div className="fai-cpl-output-header">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-slate-700" />
              <span className="font-bold text-sm text-slate-800">Output</span>
            </div>
            <button 
              className="fai-cpl-clear-btn"
              onClick={handleClearTerminal}
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          {/* Dark Terminal Pane */}
          <div className="fai-cpl-terminal-pane">
            <div className="fai-cpl-term-command">
              <span className="text-emerald-400 font-bold">$</span> python main.py
            </div>

            {isTerminalRunning ? (
              <div className="fai-cpl-term-running">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-400 text-xs">Compiling & executing in Python 3.12...</span>
              </div>
            ) : hasExecuted ? (
              <pre className={`fai-cpl-term-output ${errorMessage ? 'text-red-400' : 'text-white'}`}>
                {terminalOutput || '# (No output returned)'}
              </pre>
            ) : (
              <div className="text-slate-500 text-xs italic font-mono pt-1">
                # Click &apos;Run Code&apos; to view output in this terminal
              </div>
            )}
          </div>

          {/* Success / Error Notification Card */}
          {hasExecuted && isCorrect && (
            <div className="fai-cpl-success-card animate-fadeIn">
              <div className="fai-cpl-success-left">
                <div className="fai-cpl-success-icon-wrap">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <div>
                  <h4 className="fai-cpl-success-title">{qData.successTitle}</h4>
                  <p className="fai-cpl-success-desc">{qData.successMessage}</p>
                  {autoAdvancing && currentQIdx < CODING_QUESTIONS.length - 1 && (
                    <div className="fai-cpl-auto-adv-notice">
                      <span className="fai-cpl-auto-adv-dot" />
                      <span>Auto-advancing to Question {currentQIdx + 2} in 2s... 🚀</span>
                    </div>
                  )}
                </div>
              </div>
              <span className="fai-cpl-party-icon">🎉</span>
            </div>
          )}

          {hasExecuted && !isCorrect && errorMessage && (
            <div className="fai-cpl-error-card animate-fadeIn">
              <div className="fai-cpl-error-left">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-red-700">Check Your Code</h4>
                  <p className="text-xs text-red-600 mt-0.5 leading-snug">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Big Green Run Code Button */}
          <button 
            className={`fai-cpl-run-btn ${!isCorrect ? 'ready' : ''}`}
            onClick={handleRunCode}
            disabled={isTerminalRunning}
          >
            <Play className="w-4 h-4 fill-current" />
            <span className="font-bold text-sm">Run Code</span>
            <span className="fai-cpl-kbd-badge">Ctrl + Enter</span>
          </button>

        </section>

      </main>

      {/* =========================================================================
          3. BOTTOM NAVIGATION BAR (1:1 with media_1790614931039.png)
          ========================================================================= */}
      <footer className="fai-cpl-bottombar">
        {/* Previous Button */}
        <button 
          className="fai-cpl-nav-btn prev"
          onClick={handlePreviousQuestion}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Center: Question Stepper (Q1, 2, 3, 4, 5) */}
        <div className="fai-cpl-stepper">
          {CODING_QUESTIONS.map((q, idx) => {
            const isQDone = completedQuestions.includes(idx);
            const isQActive = currentQIdx === idx;
            // Question is unlocked if:
            // 1. It is Q1 (idx === 0)
            // 2. OR previous question was completed
            // 3. OR current question was just answered correctly
            const isQUnlocked = idx === 0 || completedQuestions.includes(idx - 1) || (idx === currentQIdx + 1 && isCorrect);

            return (
              <React.Fragment key={q.id}>
                {idx > 0 && (
                  <span className={`fai-cpl-stepper-line ${completedQuestions.includes(idx - 1) ? 'filled' : ''}`} />
                )}

                <div 
                  className={`fai-cpl-stepper-node ${isQDone ? 'completed' : ''} ${isQActive ? 'active' : ''} ${!isQUnlocked ? 'locked' : ''}`}
                  onClick={() => {
                    if (!isQUnlocked) {
                      soundEffects.playQuizWrong();
                      showToast(`🔒 Question ${idx + 1} locked hai! Pehle Question ${idx} complete karein.`, 'warning');
                      return;
                    }
                    if (autoAdvanceTimerRef.current) {
                      clearTimeout(autoAdvanceTimerRef.current);
                      autoAdvanceTimerRef.current = null;
                    }
                    setAutoAdvancing(false);
                    soundEffects.playClick();
                    setCurrentQIdx(idx);
                  }}
                  title={!isQUnlocked ? `Question ${idx + 1} (Locked - Pehle Question ${idx} complete karein)` : `Go to Question ${idx + 1}`}
                >
                  <div className="fai-cpl-stepper-circle">
                    {isQDone ? (
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    ) : !isQUnlocked ? (
                      <Lock className="w-3 h-3 text-slate-400" />
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </div>
                  {isQDone && idx === 0 && (
                    <span className="fai-cpl-stepper-label">Q1</span>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Next Question Button - Locked until current question is completed */}
        {(() => {
          const isCurrentQDone = completedQuestions.includes(currentQIdx) || isCorrect;
          return (
            <button 
              className={`fai-cpl-nav-btn next ${isCurrentQDone ? 'active pulse' : 'disabled'}`}
              onClick={handleNextQuestion}
              disabled={!isCurrentQDone}
              title={!isCurrentQDone ? `Question ${currentQIdx + 1} complete karke Run Code karein` : 'Go to Next Question'}
            >
              <span>{currentQIdx === CODING_QUESTIONS.length - 1 ? 'Finish Section ➔' : 'Next Question'}</span>
              {isCurrentQDone ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-slate-400 ml-1" />
              )}
            </button>
          );
        })()}
      </footer>

    </div>
  );
};
