import React, { useState } from 'react';
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
  AlertCircle
} from 'lucide-react';

export interface Topic1Task {
  id: number;
  taskNumber: number;
  title: string;
  description: string;
  difficulty: 'Easy';
  maxScore: number;
  starterCode: string;
  expectedOutput: string;
  hint: string;
  solution: string;
  validate: (code: string, output: string) => { passed: boolean; message: string };
}

export const TOPIC_1_TASKS: Topic1Task[] = [
  {
    id: 1,
    taskNumber: 1,
    title: 'Print Hello, World!',
    description: 'Write a Python program that prints "Hello, World!" to the console.',
    difficulty: 'Easy',
    maxScore: 5,
    starterCode: '# Task 1: Print Hello, World!\nprint("Hello, World!")\n',
    expectedOutput: 'Hello, World!',
    hint: 'Use the print() function: print("Hello, World!")',
    solution: 'print("Hello, World!")',
    validate: (code, output) => {
      const clean = output.trim();
      if (clean === 'Hello, World!' || clean.includes('Hello, World!')) {
        return { passed: true, message: 'Excellent! You printed Hello, World! successfully.' };
      }
      return { passed: false, message: `Expected "Hello, World!" but got "${clean}"` };
    }
  },
  {
    id: 2,
    taskNumber: 2,
    title: 'Print your name.',
    description: 'Write a Python program to print your name (for example, "Rahul" or any name).',
    difficulty: 'Easy',
    maxScore: 5,
    starterCode: '# Task 2: Print your name\nname = "Rahul"\nprint(name)\n',
    expectedOutput: 'Rahul',
    hint: 'Define a variable name = "Your Name" or directly use print("Your Name")',
    solution: 'print("Rahul")',
    validate: (code, output) => {
      const clean = output.trim();
      if (clean.length > 0 && code.includes('print')) {
        return { passed: true, message: `Great job! Printed name: "${clean}"` };
      }
      return { passed: false, message: 'Please write a print() statement to print a name.' };
    }
  },
  {
    id: 3,
    taskNumber: 3,
    title: 'Print Welcome to Future IT Industry.',
    description: 'Write a Python program that prints "Welcome to Future IT Industry" exactly as given.',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 3: Print Welcome to Future IT Industry\nprint("Welcome to Future IT Industry")\n',
    expectedOutput: 'Welcome to Future IT Industry',
    hint: 'Use print("Welcome to Future IT Industry")',
    solution: 'print("Welcome to Future IT Industry")',
    validate: (code, output) => {
      const clean = output.trim();
      if (clean === 'Welcome to Future IT Industry' || clean.toLowerCase() === 'welcome to future it industry') {
        return { passed: true, message: 'Perfect! Exactly matched the welcome banner text.' };
      }
      return { passed: false, message: `Expected "Welcome to Future IT Industry" but received "${clean}"` };
    }
  },
  {
    id: 4,
    taskNumber: 4,
    title: 'Print three different messages on separate lines.',
    description: 'Print three different messages on separate lines using three print() statements.',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 4: Print three different messages on separate lines\nprint("Line 1: Python is fun")\nprint("Line 2: Data Science is powerful")\nprint("Line 3: AI is the future")\n',
    expectedOutput: 'Line 1: Python is fun\nLine 2: Data Science is powerful\nLine 3: AI is the future',
    hint: 'Write three consecutive print() function calls, each printing its own line.',
    solution: 'print("Line 1")\nprint("Line 2")\nprint("Line 3")',
    validate: (code, output) => {
      const lines = output.trim().split('\n').filter(Boolean);
      const printCount = (code.match(/print\s*\(/g) || []).length;
      if (lines.length >= 3 || printCount >= 3) {
        return { passed: true, message: 'Awesome! All 3 messages printed on separate lines.' };
      }
      return { passed: false, message: 'You must print at least three messages on separate lines.' };
    }
  },
  {
    id: 5,
    taskNumber: 5,
    title: 'Print a sentence containing your name and age.',
    description: 'Print a sentence that includes your name and age (e.g. "My name is Rahul and I am 21 years old.").',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 5: Print a sentence containing name and age\nname = "Rahul"\nage = 21\nprint(f"My name is {name} and I am {age} years old.")\n',
    expectedOutput: 'My name is Rahul and I am 21 years old.',
    hint: 'Use variables name and age with an f-string or comma separation inside print().',
    solution: 'name = "Rahul"\nage = 21\nprint(f"My name is {name} and I am {age} years old.")',
    validate: (code, output) => {
      const clean = output.trim();
      const hasDigit = /\d+/.test(clean);
      const hasText = /[a-zA-Z]{3,}/.test(clean);
      if (hasDigit && hasText) {
        return { passed: true, message: 'Superb! Name and age sentence printed cleanly.' };
      }
      return { passed: false, message: 'The output sentence must contain both your name and numeric age.' };
    }
  },
  {
    id: 6,
    taskNumber: 6,
    title: 'Print a number and a text message on separate lines.',
    description: 'Print a numeric value on the first line, and a text message on the second line.',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 6: Print number and text message on separate lines\nprint(2050)\nprint("Welcome to Future IT Industry")\n',
    expectedOutput: '2050\nWelcome to Future IT Industry',
    hint: 'Line 1: print(100) or print(2050)\nLine 2: print("Your text message")',
    solution: 'print(2050)\nprint("Welcome to Future IT Industry")',
    validate: (code, output) => {
      const lines = output.trim().split('\n').filter(Boolean);
      if (lines.length >= 2) {
        return { passed: true, message: 'Great job! Number and text printed on separate lines.' };
      }
      return { passed: false, message: 'Please print a number on line 1 and text on line 2.' };
    }
  },
  {
    id: 7,
    taskNumber: 7,
    title: 'Print a message using two separate print() statements.',
    description: 'Display an output message using two separate print() statements.',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 7: Use two separate print() statements\nprint("Learning Python")\nprint("is the foundation of AI.")\n',
    expectedOutput: 'Learning Python\nis the foundation of AI.',
    hint: 'Call print() twice in your script.',
    solution: 'print("Learning Python")\nprint("is the foundation of AI.")',
    validate: (code, output) => {
      const printCount = (code.match(/print\s*\(/g) || []).length;
      if (printCount >= 2 && output.trim().length > 0) {
        return { passed: true, message: 'Nicely done! Two separate print() statements executed.' };
      }
      return { passed: false, message: 'You must use two separate print() function statements.' };
    }
  },
  {
    id: 8,
    taskNumber: 8,
    title: 'Print a sentence using a newline character.',
    description: 'Print two lines of text using a single print() statement and the newline character \\n.',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 8: Print two lines using \\n in one print statement\nprint("Line One\\nLine Two")\n',
    expectedOutput: 'Line One\nLine Two',
    hint: 'Put \\n between words inside quotes: print("First Line\\nSecond Line")',
    solution: 'print("Line One\\nLine Two")',
    validate: (code, output) => {
      const lines = output.trim().split('\n').filter(Boolean);
      const hasNewlineChar = code.includes('\\n');
      if (lines.length >= 2 || hasNewlineChar) {
        return { passed: true, message: 'Brilliant! Successfully used the \\n escape character.' };
      }
      return { passed: false, message: 'You must use \\n inside a print() call to produce multiple lines.' };
    }
  },
  {
    id: 9,
    taskNumber: 9,
    title: 'Print Python is easy to learn exactly as given.',
    description: 'Print the sentence "Python is easy to learn" exactly as given.',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 9: Print exact sentence\nprint("Python is easy to learn")\n',
    expectedOutput: 'Python is easy to learn',
    hint: 'Check spelling and spacing: print("Python is easy to learn")',
    solution: 'print("Python is easy to learn")',
    validate: (code, output) => {
      const clean = output.trim();
      if (clean === 'Python is easy to learn' || clean.toLowerCase() === 'python is easy to learn') {
        return { passed: true, message: 'Spot on! The sentence matched character-by-character.' };
      }
      return { passed: false, message: `Expected "Python is easy to learn" but received "${clean}"` };
    }
  },
  {
    id: 10,
    taskNumber: 10,
    title: 'Print a three-line welcome message using one print() statement.',
    description: 'Print a three-line welcome message using only one print() statement (using \\n or triple quotes).',
    difficulty: 'Easy',
    maxScore: 10,
    starterCode: '# Task 10: 3-line message with ONLY ONE print() call\nprint("Welcome to Future IT!\\nExplore Python & Data Science\\nBuild Real AI Solutions")\n',
    expectedOutput: 'Welcome to Future IT!\nExplore Python & Data Science\nBuild Real AI Solutions',
    hint: 'Use print("Line 1\\nLine 2\\nLine 3") or triple quotes print("""Line 1\\nLine 2\\nLine 3""")',
    solution: 'print("Line 1\\nLine 2\\nLine 3")',
    validate: (code, output) => {
      const printCount = (code.match(/print\s*\(/g) || []).length;
      const lines = output.trim().split('\n').filter(Boolean);
      if (printCount === 1 && lines.length >= 3) {
        return { passed: true, message: 'Champion! Printed 3 lines using a single print() statement.' };
      } else if (printCount > 1) {
        return { passed: false, message: 'Requirement: You must use only ONE print() statement!' };
      }
      return { passed: false, message: 'The output must contain 3 separate lines.' };
    }
  }
];

// Lightweight client-side Python print interpreter
export function executePythonCodeSimulation(code: string): { output: string; error?: string } {
  try {
    const rawLines = code.split('\n');
    const outputs: string[] = [];
    const variables: Record<string, string | number> = {};

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i].trim();
      if (!line || line.startsWith('#')) continue;

      // Variable assignment: name = "Rahul" or age = 21
      const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
      if (assignMatch && !line.startsWith('print')) {
        const varName = assignMatch[1];
        let valExpr = assignMatch[2].trim();
        if ((valExpr.startsWith('"') && valExpr.endsWith('"')) || (valExpr.startsWith("'") && valExpr.endsWith("'"))) {
          variables[varName] = valExpr.slice(1, -1);
        } else if (!isNaN(Number(valExpr))) {
          variables[varName] = Number(valExpr);
        } else if (valExpr in variables) {
          variables[varName] = variables[valExpr];
        }
        continue;
      }

      // Print function call: print(...)
      const printMatch = line.match(/^print\s*\(([\s\S]*)\)$/);
      if (printMatch) {
        let content = printMatch[1].trim();

        // f-string handling: f"My name is {name} and age is {age}"
        if (content.startsWith('f"') || content.startsWith("f'")) {
          let str = content.slice(2, -1);
          str = str.replace(/\{([a-zA-Z_]\w*)\}/g, (_, key) => {
            return key in variables ? String(variables[key]) : `{${key}}`;
          });
          str = str.replace(/\\n/g, '\n');
          outputs.push(str);
          continue;
        }

        // Triple quote string
        if (content.startsWith('"""') && content.endsWith('"""')) {
          outputs.push(content.slice(3, -3).replace(/\\n/g, '\n'));
          continue;
        }

        // Standard string with escape characters: "Hello\nWorld"
        if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
          let str = content.slice(1, -1);
          str = str.replace(/\\n/g, '\n');
          outputs.push(str);
          continue;
        }

        // Variable name: print(name)
        if (content in variables) {
          outputs.push(String(variables[content]));
          continue;
        }

        // Plain numbers: print(2050)
        if (!isNaN(Number(content))) {
          outputs.push(content);
          continue;
        }

        // Fallback: strip surrounding quotes if any
        outputs.push(content.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n'));
      }
    }

    return { output: outputs.join('\n') };
  } catch (err: any) {
    return { output: '', error: err?.message || 'SyntaxError: Invalid Python syntax' };
  }
}

interface PythonTopic1ChallengeArenaProps {
  userName?: string;
  initialTaskId?: number;
  onBack: () => void;
  onCompleteAll?: () => void;
}

export const PythonTopic1ChallengeArena: React.FC<PythonTopic1ChallengeArenaProps> = ({
  userName = 'Rahul',
  initialTaskId = 1,
  onBack,
  onCompleteAll
}) => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(() => {
    const idx = TOPIC_1_TASKS.findIndex((t) => t.taskNumber === initialTaskId);
    return idx >= 0 ? idx : 0;
  });

  const task = TOPIC_1_TASKS[currentTaskIndex];

  // User code state dictionary per task
  const [codes, setCodes] = useState<Record<number, string>>(() => {
    const init: Record<number, string> = {};
    TOPIC_1_TASKS.forEach((t) => {
      init[t.id] = t.starterCode;
    });
    return init;
  });

  const currentCode = codes[task.id] || task.starterCode;

  const [terminalOutput, setTerminalOutput] = useState<string>('');
  const [testResult, setTestResult] = useState<{ passed: boolean; message: string } | null>(null);
  const [solvedTaskIds, setSolvedTaskIds] = useState<Set<number>>(new Set());
  const [showHint, setShowHint] = useState<boolean>(false);
  const [earnedPoints, setEarnedPoints] = useState<number>(0);

  const handleCodeChange = (newCode: string) => {
    setCodes((prev) => ({ ...prev, [task.id]: newCode }));
  };

  const handleResetCode = () => {
    setCodes((prev) => ({ ...prev, [task.id]: task.starterCode }));
    setTerminalOutput('');
    setTestResult(null);
  };

  const handleRunCode = () => {
    const res = executePythonCodeSimulation(currentCode);
    if (res.error) {
      setTerminalOutput(`Traceback (most recent call last):\n  File "solution.py", line 1\n${res.error}`);
      setTestResult({ passed: false, message: 'Execution encountered an error.' });
      return;
    }

    setTerminalOutput(res.output);
    const validation = task.validate(currentCode, res.output);
    setTestResult(validation);

    if (validation.passed) {
      if (!solvedTaskIds.has(task.id)) {
        setSolvedTaskIds((prev) => new Set([...prev, task.id]));
        setEarnedPoints((prev) => prev + task.maxScore);
      }
    }
  };

  const handleNextTask = () => {
    if (currentTaskIndex < TOPIC_1_TASKS.length - 1) {
      setCurrentTaskIndex((prev) => prev + 1);
      setTerminalOutput('');
      setTestResult(null);
      setShowHint(false);
    } else {
      if (onCompleteAll) onCompleteAll();
      else alert('🎉 Congratulations! You have solved all 10 challenges of Topic 1: Say Hello, World! With Python!');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 text-slate-800">
      
      {/* ─── Top Bar: Back Button, Title & Progress ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-600" />
            <span>Back to Python Challenges</span>
          </button>
          <div className="h-4 w-[1px] bg-slate-200 hidden sm:block" />
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              Topic 1 — Say Hello, World! With Python
            </h2>
            <span className="text-[11px] text-slate-500 font-medium">
              Task {task.taskNumber} of {TOPIC_1_TASKS.length}: {task.title}
            </span>
          </div>
        </div>

        {/* Right Stats badge */}
        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-2 text-xs font-bold text-blue-700">
            <Award className="w-4 h-4 text-blue-600" />
            <span>{solvedTaskIds.size} / 10 Solved</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>+{earnedPoints} XP</span>
          </div>
        </div>
      </div>

      {/* ─── Task Selector Pills (1 to 10) ─── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 no-scrollbar">
        {TOPIC_1_TASKS.map((t, idx) => {
          const isActive = idx === currentTaskIndex;
          const isSolved = solvedTaskIds.has(t.id);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setCurrentTaskIndex(idx);
                setTerminalOutput('');
                setTestResult(null);
                setShowHint(false);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                isActive
                  ? 'bg-[#1a73e8] text-white shadow-sm'
                  : isSolved
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isSolved ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <span>#{t.taskNumber}</span>
              )}
              <span className="max-w-[120px] truncate">{t.title.replace(/^\d+\.\s*/, '')}</span>
            </button>
          );
        })}
      </div>

      {/* ─── Two-Column Interactive Problem Solver Workspace ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* LEFT PANE: Problem Statement, Sample Output & Hint (5 of 12 cols = ~42%) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 text-left">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                {task.difficulty} • +{task.maxScore} XP
              </span>
              <span className="text-xs text-slate-400 font-medium">Task {task.taskNumber}/10</span>
            </div>

            <h3 className="text-base font-extrabold text-slate-900 leading-snug">
              {task.title}
            </h3>

            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {task.description}
            </p>

            {/* Expected Output Box */}
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Expected Output:
              </span>
              <pre className="p-3 bg-slate-900 text-emerald-400 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap">
                {task.expectedOutput}
              </pre>
            </div>

            {/* Hint Accordion */}
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowHint((prev) => !prev)}
                className="flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>{showHint ? 'Hide Hint' : 'Need Help? Show Hint'}</span>
              </button>

              {showHint && (
                <div className="mt-2.5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed animate-fadeIn">
                  <div className="font-bold mb-1">💡 Pro-Tip Hint:</div>
                  <pre className="p-2 bg-white/90 rounded-lg text-amber-950 font-mono text-[11px] mt-1 overflow-x-auto">
                    {task.hint}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Code Editor & Execution Terminal (7 of 12 cols = ~58%) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Code Editor Window */}
          <div className="bg-[#1e1e2e] rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#181825] border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">solution.py</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition-colors cursor-pointer"
                  title="Reset to starter code"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Code Textarea with Python syntax dark styling */}
            <div className="relative">
              <textarea
                value={currentCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                rows={9}
                className="w-full bg-[#1e1e2e] text-[#cdd6f4] font-mono text-xs sm:text-sm p-4 outline-none resize-none leading-relaxed selection:bg-blue-600/40"
                spellCheck={false}
              />
            </div>

            {/* Editor Bottom Controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#181825] border-t border-slate-800">
              <span className="text-[11px] text-slate-400 font-mono">Python 3.12</span>
              
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleRunCode}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run &amp; Test Code</span>
                </button>
              </div>
            </div>
          </div>

          {/* Terminal & Test Case Results */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 text-left">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-bold text-slate-800">Terminal Output &amp; Results</span>
              </div>
              {testResult && (
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    testResult.passed
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  {testResult.passed ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Test Case Passed</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3 text-rose-600" />
                      <span>Test Case Failed</span>
                    </>
                  )}
                </span>
              )}
            </div>

            {/* Console Output Area */}
            <div className="bg-slate-950 text-slate-100 rounded-xl p-3 font-mono text-xs min-h-[70px] whitespace-pre-wrap leading-relaxed">
              {terminalOutput ? (
                terminalOutput
              ) : (
                <span className="text-slate-500 italic">Click "Run &amp; Test Code" above to execute your solution.</span>
              )}
            </div>

            {/* Validation Message & Next Button */}
            {testResult && (
              <div
                className={`mt-3 p-3 rounded-xl text-xs flex items-center justify-between gap-3 ${
                  testResult.passed
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border border-rose-200 text-rose-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  {testResult.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span className="font-semibold">{testResult.message}</span>
                </div>

                {testResult.passed && (
                  <button
                    type="button"
                    onClick={handleNextTask}
                    className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <span>Next Task</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
