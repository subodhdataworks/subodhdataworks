import React, { useState, useMemo, useEffect } from 'react';
import { Play, CheckCircle2, ChevronRight, RotateCcw, Lightbulb, Bot, Check, AlertCircle, Code2, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface CustomChallengeItem {
  id: number;
  title: string;
  instruction: string;
  starterCode: string;
  expectedKeywords: string[];
  expectedOutputText: string;
  hint: string;
}

interface CodingChallengeSandboxProps {
  onComplete: () => void;
  userName?: string;
  onOpenAiChat?: (prompt?: string) => void;
  customChallenges?: CustomChallengeItem[];
}

interface Problem {
  id: number;
  title: string;
  instruction: string;
  starterCode: string;
  expectedOutputRegex: RegExp;
  expectedKeywords: string[];
  expectedOutputText: string;
  sampleInput: string;
  hint: string;
}

export const CodingChallengeSandbox: React.FC<CodingChallengeSandboxProps> = ({
  onComplete,
  userName = 'Subodh',
  onOpenAiChat,
  customChallenges
}) => {
  const defaultProblems: Problem[] = [
    {
      id: 1,
      title: 'Challenge 1: Print a Message',
      instruction: 'Print the message Hello, Python!',
      starterCode: `# Challenge 1: Print Hello, Python!\nprint("Hello, Python!")`,
      expectedOutputRegex: /Hello,\s*Python!?/i,
      expectedKeywords: ['print', 'Hello, Python'],
      expectedOutputText: 'Hello, Python!',
      sampleInput: 'None',
      hint: 'Use the print() function with the string inside double quotes: print("Hello, Python!")'
    },
    {
      id: 2,
      title: 'Challenge 2: Create and Print a Variable',
      instruction: 'Create a variable called name and store your name in it. Print the variable.',
      starterCode: `# Challenge 2: Store your name in a variable and print it\nname = "${userName}"\nprint(name)`,
      expectedOutputRegex: new RegExp(userName || '[A-Za-z]+', 'i'),
      expectedKeywords: ['name', 'print'],
      expectedOutputText: userName,
      sampleInput: `name = "${userName}"`,
      hint: 'Assign a string to the variable: name = "..." and then call print(name).'
    },
    {
      id: 3,
      title: 'Challenge 3: Variable Addition',
      instruction: 'Create two variables a = 10 and b = 20 and print their sum.',
      starterCode: `# Challenge 3: Create a = 10, b = 20 and print their sum\na = 10\nb = 20\nprint(a + b)`,
      expectedOutputRegex: /30/,
      expectedKeywords: ['a', 'b', 'print'],
      expectedOutputText: '30',
      sampleInput: 'a = 10, b = 20',
      hint: 'Declare a = 10 and b = 20. Then print the sum using print(a + b).'
    },
    {
      id: 4,
      title: 'Challenge 4: Integer Variable',
      instruction: 'Create a variable age = 25 and print the value of age.',
      starterCode: `# Challenge 4: Create age = 25 and print it\nage = 25\nprint(age)`,
      expectedOutputRegex: /25/,
      expectedKeywords: ['age', 'print'],
      expectedOutputText: '25',
      sampleInput: 'age = 25',
      hint: 'Assign 25 to age without quotes since it is an integer: age = 25. Then print(age).'
    },
    {
      id: 5,
      title: 'Challenge 5: Formatted Output',
      instruction: 'Create a variable city containing your city name and print: I live in <city>',
      starterCode: `# Challenge 5: Create a variable city and print: I live in <city>\ncity = "Delhi"\nprint("I live in", city)`,
      expectedOutputRegex: /I live in\s+[A-Za-z]+/i,
      expectedKeywords: ['city', 'print', 'I live in'],
      expectedOutputText: 'I live in Delhi',
      sampleInput: 'city = "Delhi"',
      hint: 'Define city = "Delhi" (or your city) and use print("I live in", city) or print(f"I live in {city}").'
    }
  ];

  const problems: Problem[] = useMemo(() => {
    if (customChallenges && customChallenges.length > 0) {
      return customChallenges.map((c) => ({
        id: c.id,
        title: c.title,
        instruction: c.instruction,
        starterCode: c.starterCode,
        expectedKeywords: c.expectedKeywords,
        expectedOutputText: c.expectedOutputText,
        expectedOutputRegex: new RegExp(c.expectedOutputText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'),
        sampleInput: 'Python 3',
        hint: c.hint
      }));
    }
    return defaultProblems;
  }, [customChallenges]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [codeMap, setCodeMap] = useState<Record<number, string>>(() => {
    const initialMap: Record<number, string> = {};
    defaultProblems.forEach((p, idx) => {
      initialMap[idx] = p.starterCode;
    });
    return initialMap;
  });

  useEffect(() => {
    const initialMap: Record<number, string> = {};
    problems.forEach((p, idx) => {
      initialMap[idx] = p.starterCode;
    });
    setCodeMap(initialMap);
    setCurrentIdx(0);
    setOutput(null);
    setTestStatus('idle');
    setPassedChallenges([]);
    setAllCompleted(false);
  }, [problems]);

  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'passed' | 'failed'>('idle');
  const [passedChallenges, setPassedChallenges] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);

  const currentProblem = problems[currentIdx] || problems[0];
  const userCode = (currentProblem && codeMap[currentIdx] !== undefined) ? codeMap[currentIdx] : (currentProblem ? currentProblem.starterCode : '');

  const handleCodeChange = (newCode: string) => {
    setCodeMap(prev => ({ ...prev, [currentIdx]: newCode }));
    // reset test status when code is edited
    if (testStatus === 'failed') setTestStatus('idle');
  };

  const handleResetCode = () => {
    if (currentProblem) {
      handleCodeChange(currentProblem.starterCode);
    }
    setOutput(null);
    setTestStatus('idle');
  };

  const executeCode = (code: string, problem: Problem): { success: boolean; outText: string } => {
    // Check keywords first
    const missingKeyword = problem.expectedKeywords.find(kw => !code.toLowerCase().includes(kw.toLowerCase()));
    if (missingKeyword) {
      return {
        success: false,
        outText: `Syntax / Logic Check: Missing required keyword or statement: '${missingKeyword}'. Please review the problem task.`
      };
    }

    if (customChallenges && customChallenges.length > 0) {
      return { success: true, outText: problem.expectedOutputText };
    }

    // Determine simulated output based on question
    if (problem.id === 1) {
      if (/print\s*\(\s*["']Hello,\s*Python!?["']\s*\)/i.test(code)) {
        return { success: true, outText: 'Hello, Python!' };
      }
      return { success: false, outText: 'Output does not match expected "Hello, Python!" exactly.' };
    }

    if (problem.id === 2) {
      const match = code.match(/name\s*=\s*["']([^"']+)["']/i);
      const val = match ? match[1] : userName;
      if (/print\s*\(\s*name\s*\)/i.test(code)) {
        return { success: true, outText: `${val}` };
      }
      return { success: false, outText: 'Variable `name` defined, but not output using `print(name)`.' };
    }

    if (problem.id === 3) {
      if (/a\s*=\s*10/i.test(code) && /b\s*=\s*20/i.test(code) && /print\s*\(/i.test(code)) {
        return { success: true, outText: '30' };
      }
      return { success: false, outText: 'Expected variables a = 10, b = 20 and output 30.' };
    }

    if (problem.id === 4) {
      if (/age\s*=\s*25/i.test(code) && /print\s*\(\s*age\s*\)/i.test(code)) {
        return { success: true, outText: '25' };
      }
      return { success: false, outText: 'Expected variable age = 25 and output 25.' };
    }

    if (problem.id === 5) {
      if (/city\s*=\s*["']([^"']+)["']/i.test(code) && /print\s*\(/i.test(code)) {
        const cityMatch = code.match(/city\s*=\s*["']([^"']+)["']/i);
        const cityName = cityMatch ? cityMatch[1] : 'Delhi';
        return { success: true, outText: `I live in ${cityName}` };
      }
      return { success: false, outText: 'Expected variable city and output "I live in <city>".' };
    }

    return { success: false, outText: 'Could not evaluate code snippet.' };
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      const res = executeCode(userCode, currentProblem);
      setOutput(res.outText);

      if (res.success) {
        setTestStatus('passed');
        if (!passedChallenges.includes(currentProblem.id)) {
          setPassedChallenges(prev => [...prev, currentProblem.id]);
        }
      } else {
        setTestStatus('failed');
      }
    }, 400);
  };

  const handleSubmitChallenge = () => {
    const res = executeCode(userCode, currentProblem);
    setOutput(res.outText);

    if (res.success) {
      setTestStatus('passed');
      if (!passedChallenges.includes(currentProblem.id)) {
        setPassedChallenges(prev => [...prev, currentProblem.id]);
      }
      confetti({ particleCount: 60, spread: 65, origin: { y: 0.6 } });

      // If this is the last problem
      if (currentIdx === problems.length - 1) {
        setAllCompleted(true);
      } else {
        // Move to next challenge after brief pause
        setTimeout(() => {
          setCurrentIdx(prev => prev + 1);
          setOutput(null);
          setTestStatus('idle');
          setShowHint(false);
        }, 800);
      }
    } else {
      setTestStatus('failed');
    }
  };

  const handleNextChallenge = () => {
    if (currentIdx < problems.length - 1 && passedChallenges.includes(currentProblem.id)) {
      setCurrentIdx(prev => prev + 1);
      setOutput(null);
      setTestStatus('idle');
      setShowHint(false);
    }
  };

  if (allCompleted) {
    return (
      <div className="text-center py-8 px-4 space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center mx-auto text-3xl shadow-xl shadow-emerald-500/30 animate-bounce">
          🎉
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Coding Challenge Completed!
          </h2>
          <p className="text-sm font-bold text-emerald-600 mt-1">
            5 / 5 Challenges Completed
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto mt-2">
            Outstanding work! You have written and passed test cases for all 5 Python introductory coding tasks. Your AI Recruiter Interview is now ready!
          </p>
        </div>

        {/* 5 Passed Checkmarks Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-xl mx-auto pt-2">
          {problems.map((p) => (
            <div
              key={p.id}
              className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center flex flex-col items-center gap-1 shadow-xs"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="text-[11px] font-black">{p.title.split(':')[0]}</span>
              <span className="text-[10px] text-emerald-600 font-bold">Passed</span>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <button
            data-testid="start-interview-btn"
            onClick={onComplete}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all active:scale-95 group"
          >
            <span>Start AI Interview</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  const isCurrentPassed = passedChallenges.includes(currentProblem.id);

  return (
    <div className="space-y-5">
      {/* Header with Title and Challenge Stepper Track */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💻</span>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Python Coding Challenge
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Now prove what you learned. Complete each challenge to advance.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
            Question {currentIdx + 1} of 5
          </span>
          <span className="text-xs font-bold text-slate-500">
            {passedChallenges.length} / 5 Passed
          </span>
        </div>
      </div>

      {/* 5-Question Step Indicators */}
      <div className="grid grid-cols-5 gap-2">
        {problems.map((p, idx) => {
          const isPassed = passedChallenges.includes(p.id);
          const isCurrent = idx === currentIdx;
          const isAccessible = idx === 0 || passedChallenges.includes(problems[idx - 1].id) || isPassed;

          return (
            <button
              key={p.id}
              onClick={() => {
                if (isAccessible) {
                  setCurrentIdx(idx);
                  setOutput(null);
                  setTestStatus(isPassed ? 'passed' : 'idle');
                }
              }}
              disabled={!isAccessible}
              className={`p-2 rounded-xl border text-center transition-all ${
                isCurrent
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-black'
                  : isPassed
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-bold hover:bg-emerald-100 cursor-pointer'
                  : isAccessible
                  ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 cursor-pointer'
                  : 'bg-slate-50 text-slate-300 border-slate-200/60 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                {isPassed && !isCurrent ? (
                  <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                ) : null}
                <span className="text-[11px]">Q{p.id}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Problem Statement Card */}
      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-left space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-blue-900 uppercase tracking-wider">
            {currentProblem.title}
          </span>
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
          {currentProblem.instruction}
        </p>

        {showHint && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <span className="text-base shrink-0">💡</span>
            <div>
              <span className="font-extrabold block">AI Hint:</span>
              <span className="text-[11px] block mt-0.5">{currentProblem.hint}</span>
            </div>
          </div>
        )}
      </div>

      {/* Code Editor Panel */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner text-left font-mono text-xs">
        {/* Editor Top Bar */}
        <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-2 text-[11px] font-bold text-slate-300">solution.py</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetCode}
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Textarea Code Input */}
        <textarea
          data-testid="code-editor-textarea"
          rows={5}
          value={userCode}
          onChange={(e) => handleCodeChange(e.target.value)}
          className="w-full p-4 bg-transparent text-emerald-400 font-mono text-xs leading-relaxed focus:outline-none resize-none"
          spellCheck={false}
        />
      </div>

      {/* Action Buttons: Run Code + Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          <button
            data-testid="run-code-btn"
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>

          <button
            data-testid="submit-code-btn"
            onClick={handleSubmitChallenge}
            className={`px-6 py-2.5 rounded-xl text-white font-extrabold text-xs shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-95 ${
              isCurrentPassed
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-emerald-500/25'
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/25'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCurrentPassed ? 'Passed ✓ Submit Again' : 'Submit Challenge'}</span>
          </button>
        </div>

        {isCurrentPassed && currentIdx < problems.length - 1 && (
          <button
            data-testid="next-challenge-btn"
            onClick={handleNextChallenge}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95"
          >
            <span>Next Challenge →</span>
          </button>
        )}
      </div>

      {/* Output & Test Case Verification Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
        {/* Terminal Output */}
        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-left font-mono text-xs text-slate-300 min-h-[90px] flex flex-col justify-between shadow-inner">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] text-slate-500 uppercase font-sans">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-blue-400" />
              Terminal Output
            </span>
            <span>Execution: {output ? '14ms' : 'Ready'}</span>
          </div>
          <pre className="text-emerald-400 whitespace-pre-wrap py-2 flex-1">
            {output || 'Click "Run Code" to view program output...'}
          </pre>
        </div>

        {/* Test Case Status */}
        <div className={`p-3.5 rounded-2xl border flex flex-col justify-between text-xs transition-all ${
          testStatus === 'passed'
            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900'
            : testStatus === 'failed'
            ? 'bg-rose-50/80 border-rose-300 text-rose-900'
            : 'bg-slate-50 border-slate-200 text-slate-600'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Test Case 1 Verification
              </span>
              {testStatus === 'passed' ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center gap-1">
                  <Check className="w-3 h-3 stroke-[3]" /> Passed
                </span>
              ) : testStatus === 'failed' ? (
                <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center gap-1">
                  ✕ Failed
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold">
                  Pending
                </span>
              )}
            </div>

            <div className="space-y-1 text-[11px] font-mono mt-1">
              <div>
                <span className="text-slate-400">Expected: </span>
                <span className="font-bold text-slate-800">{currentProblem.expectedOutputText}</span>
              </div>
              <div>
                <span className="text-slate-400">Actual: </span>
                <span className={`font-bold ${testStatus === 'passed' ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {output || '(None)'}
                </span>
              </div>
            </div>
          </div>

          {testStatus === 'passed' && (
            <div className="pt-2 text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Great job! Test case passed. Move to next challenge.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
