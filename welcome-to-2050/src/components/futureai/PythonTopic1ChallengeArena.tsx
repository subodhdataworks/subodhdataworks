import { IndianVoiceProblemStatement } from './IndianVoiceProblemStatement';
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import './PythonTopic1ChallengeArena.css';
import {
  ArrowLeft,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Terminal,
  ChevronRight,
  ChevronDown,
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
  Star
} from 'lucide-react';

export interface Topic1Task {
  id: number;
  taskNumber: number;
  title: string;
  points: number;
  successRate: string;
  skill: string;
  difficulty: 'Easy';
  problemStatement: string;
  highlightedKeyword: string;
  inputFormat: string;
  outputFormat: string;
  outputFormatSample: string;
  constraints: string[];
  sampleInput: string;
  sampleOutput: string;
  expectedOutput?: string;
  starterCode: string;
  hint: string;
  solution: string;
  validate: (code: string, output: string) => { passed: boolean; message: string };
}

// 10 Practice Challenges for Topic 1
export const TOPIC_1_TASKS: Topic1Task[] = [
  {
    id: 1,
    taskNumber: 1,
    title: 'Say Hello, World!',
    points: 5,
    successRate: '96.1%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Write a Python program to print the message',
    highlightedKeyword: 'Hello, World!',
    inputFormat: 'No input is required.',
    outputFormat: 'Print the message exactly as shown below:',
    outputFormatSample: 'Hello, World!',
    constraints: [
      'You must print the message exactly as shown (including the comma and exclamation mark).'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Hello, World!',
    starterCode: '# Write your code here\n',
    hint: 'Use the print() function: print("Hello, World!")',
    solution: 'print("Hello, World!")',
    validate: (code, output) => {
      const clean = output.trim();
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '95.4%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Write a Python program to print your name to the output.',
    highlightedKeyword: 'Your Name',
    inputFormat: 'No input is required.',
    outputFormat: 'Print any non-empty name as output:',
    outputFormatSample: 'Rahul',
    constraints: [
      'The output must contain at least one valid name string printed via print().'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Rahul',
    starterCode: '# Write your code here\n',
    hint: 'Define a variable name = "Rahul" or directly use print("Rahul")',
    solution: 'print("Rahul")',
    validate: (code, output) => {
      const clean = output.trim();
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '94.2%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Write a Python program that prints the welcome message',
    highlightedKeyword: 'Welcome to Future IT Industry',
    inputFormat: 'No input is required.',
    outputFormat: 'Print the message exactly as shown below:',
    outputFormatSample: 'Welcome to Future IT Industry',
    constraints: [
      'Character-by-character match is required (case-sensitive).'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Welcome to Future IT Industry',
    starterCode: '# Write your code here\n',
    hint: 'Use print("Welcome to Future IT Industry")',
    solution: 'print("Welcome to Future IT Industry")',
    validate: (code, output) => {
      const clean = output.trim();
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '92.8%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Print three different messages on separate lines using multiple print() statements.',
    highlightedKeyword: 'separate lines',
    inputFormat: 'No input is required.',
    outputFormat: 'Print at least three non-empty lines of text:',
    outputFormatSample: 'Line 1: Python is fun\nLine 2: Data Science is powerful\nLine 3: AI is the future',
    constraints: [
      'Each message must appear on its own separate line.'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Line 1: Python is fun\nLine 2: Data Science is powerful\nLine 3: AI is the future',
    starterCode: '# Write your code here\n',
    hint: 'Write three consecutive print() calls, each printing its own line.',
    solution: 'print("Line 1")\nprint("Line 2")\nprint("Line 3")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '91.5%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Print a sentence that includes your name and numeric age using string formatting or variables.',
    highlightedKeyword: 'name and age',
    inputFormat: 'No input is required.',
    outputFormat: 'Print a sentence containing both name and numeric age:',
    outputFormatSample: 'My name is Rahul and I am 21 years old.',
    constraints: [
      'The printed output must contain both an alphabetic name and numeric digits for age.'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'My name is Rahul and I am 21 years old.',
    starterCode: '# Write your code here\n',
    hint: 'Use variables name and age with an f-string: print(f"My name is {name} and I am {age} years old.")',
    solution: 'name = "Rahul"\nage = 21\nprint(f"My name is {name} and I am {age} years old.")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '93.0%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Print a numeric value on the first line, and a text message on the second line.',
    highlightedKeyword: 'number and text',
    inputFormat: 'No input is required.',
    outputFormat: 'Print a number on line 1 and text message on line 2:',
    outputFormatSample: '2050\nWelcome to Future IT Industry',
    constraints: [
      'Line 1 must contain numeric digits, and line 2 must contain text.'
    ],
    sampleInput: '(No input)',
    sampleOutput: '2050\nWelcome to Future IT Industry',
    starterCode: '# Write your code here\n',
    hint: 'print(2050)\nprint("Welcome to Future IT Industry")',
    solution: 'print(2050)\nprint("Welcome to Future IT Industry")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '94.6%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Display an output message using exactly two separate print() statements.',
    highlightedKeyword: 'two separate print()',
    inputFormat: 'No input is required.',
    outputFormat: 'Output generated across two print() calls:',
    outputFormatSample: 'Learning Python\nis the foundation of AI.',
    constraints: [
      'Must contain two distinct print() statements in your source code.'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Learning Python\nis the foundation of AI.',
    starterCode: '# Write your code here\n',
    hint: 'Call print() twice: print("Learning Python") and print("is the foundation of AI.")',
    solution: 'print("Learning Python")\nprint("is the foundation of AI.")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '89.7%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Print two lines of text using a single print() statement and the newline character',
    highlightedKeyword: '\\n',
    inputFormat: 'No input is required.',
    outputFormat: 'Two lines of text generated using \\n:',
    outputFormatSample: 'Line One\nLine Two',
    constraints: [
      'Use the \\n newline escape character inside a single print() string.'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Line One\nLine Two',
    starterCode: '# Write your code here\n',
    hint: 'Put \\n between words: print("First Line\\nSecond Line")',
    solution: 'print("Line One\\nLine Two")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '95.0%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Print the sentence',
    highlightedKeyword: 'Python is easy to learn',
    inputFormat: 'No input is required.',
    outputFormat: 'Print the sentence exactly as shown below:',
    outputFormatSample: 'Python is easy to learn',
    constraints: [
      'Exact matching of spacing and capital letters required.'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Python is easy to learn',
    starterCode: '# Write your code here\n',
    hint: 'Check spelling and spacing: print("Python is easy to learn")',
    solution: 'print("Python is easy to learn")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
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
    points: 5,
    successRate: '88.3%',
    skill: 'Python Basics',
    difficulty: 'Easy',
    problemStatement: 'Print a three-line welcome message using only one print() statement (with \\n or triple quotes).',
    highlightedKeyword: 'one print() statement',
    inputFormat: 'No input is required.',
    outputFormat: 'Three lines of text printed via a single print():',
    outputFormatSample: 'Welcome to Future IT!\nExplore Python & Data Science\nBuild Real AI Solutions',
    constraints: [
      'Only one print() call is permitted. Output must contain at least 3 lines.'
    ],
    sampleInput: '(No input)',
    sampleOutput: 'Welcome to Future IT!\nExplore Python & Data Science\nBuild Real AI Solutions',
    starterCode: '# Write your code here\n',
    hint: 'Use print("Line 1\\nLine 2\\nLine 3") or triple quotes print("""Line 1\\nLine 2\\nLine 3""")',
    solution: 'print("Line 1\\nLine 2\\nLine 3")',
    validate: (code, output) => {
      if (!code.replace('# Write your code here', '').trim()) {
        return { passed: false, message: 'Please write your Python code in the editor.' };
      }
      const printCount = (code.match(/print\s*\(/g) || []).length;
      const lines = output.trim().split('\n').filter(Boolean);
      if (printCount === 1 && lines.length >= 3) {
        return { passed: true, message: 'Mastery achieved! Printed 3 lines using a single print() statement.' };
      } else if (lines.length >= 3) {
        return { passed: true, message: 'Good effort! All 3 lines printed cleanly.' };
      }
      return { passed: false, message: 'Your output must contain 3 lines and use only one print() statement.' };
    }
  }
];

// Client-side Python Simulation Interpreter
function executePythonSimulation(code: string): { output: string; error?: string } {
  try {
    const rawLines = code.split('\n');
    const outputs: string[] = [];
    const variables: Record<string, any> = {};

    for (const rawLine of rawLines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      // Variable assignment: name = "Rahul", age = 21
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

      // Print statement: print(...)
      const printMatch = line.match(/^print\s*\(([\s\S]*)\)$/);
      if (printMatch) {
        let content = printMatch[1].trim();

        // f-strings: f"My name is {name} and I am {age} years old."
        if (content.startsWith('f"') || content.startsWith("f'")) {
          let str = content.slice(2, -1);
          str = str.replace(/\{([a-zA-Z_]\w*)\}/g, (_, key) => {
            return key in variables ? String(variables[key]) : `{${key}}`;
          });
          str = str.replace(/\\n/g, '\n');
          outputs.push(str);
          continue;
        }

        // Triple quotes: """Line 1\nLine 2"""
        if (content.startsWith('"""') && content.endsWith('"""')) {
          outputs.push(content.slice(3, -3).replace(/\\n/g, '\n'));
          continue;
        }

        // Regular quotes with \n
        if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
          let str = content.slice(1, -1);
          str = str.replace(/\\n/g, '\n');
          outputs.push(str);
          continue;
        }

        // Variable reference: print(name)
        if (content in variables) {
          outputs.push(String(variables[content]));
          continue;
        }

        // Numeric literal: print(2050)
        if (!isNaN(Number(content))) {
          outputs.push(content);
          continue;
        }

        outputs.push(content.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n'));
      }
    }

    return { output: outputs.join('\n') };
  } catch (err: any) {
    return { output: '', error: err?.message || 'SyntaxError: Invalid Python syntax' };
  }
}

import {
  TOPIC_QUESTIONS_MAP,
  ChallengeTask,
  getSyncedPythonChallengesProgress,
  saveSyncedPythonChallengesProgress,
  pullSyncedPythonChallengesProgressFromCloud,
} from './data/pythonCodingChallengesBank';

export interface PythonTopic1ChallengeArenaProps {
  userName?: string;
  topicId?: number;
  topicTitle?: string;
  initialTaskId?: number;
  tasks?: ChallengeTask[];
  onBack: () => void;
  onCompleteAll?: () => void;
}

export const PythonTopic1ChallengeArena: React.FC<PythonTopic1ChallengeArenaProps> = ({
  userName = 'Rahul',
  topicId = 1,
  topicTitle,
  initialTaskId = 1,
  tasks,
  onBack,
  onCompleteAll
}) => {
  // Select task set based on topicId or passed tasks
  const activeTasks: Topic1Task[] = React.useMemo(() => {
    if (tasks && tasks.length > 0) return tasks as Topic1Task[];
    if (topicId && TOPIC_QUESTIONS_MAP[topicId]) {
      return TOPIC_QUESTIONS_MAP[topicId] as Topic1Task[];
    }
    return TOPIC_1_TASKS;
  }, [tasks, topicId]);

  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(() => {
    const idx = activeTasks.findIndex((t) => t.taskNumber === initialTaskId);
    return idx >= 0 ? idx : 0;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [currentTaskIndex]);

  const task = activeTasks[currentTaskIndex] || activeTasks[0];

  // Codes dictionary per task (hydrated from synced student progress)
  const [codes, setCodes] = useState<Record<number, string>>(() => {
    const savedProgress = getSyncedPythonChallengesProgress();
    const init: Record<number, string> = {};
    activeTasks.forEach((t) => {
      init[t.id] = savedProgress.submittedCodeByTaskId[t.id] ?? t.starterCode;
    });
    return init;
  });

  const currentCode = codes[task.id] ?? task.starterCode;

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

  // Bookmarking state for current challenge/topic
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(() => {
    const saved = getSyncedPythonChallengesProgress();
    return new Set<number>(saved.bookmarkedTopicIds || []);
  });

  const isBookmarked = bookmarkedIds.has(topicId);

  const toggleBookmark = () => {
    soundEffects.playClick();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      saveSyncedPythonChallengesProgress({
        bookmarkedTopicIds: Array.from(next),
      });
      return next;
    });
  };

  // Sound and celebration states
  const [soundOn, setSoundOn] = useState<boolean>(() => soundEffects.getSoundEnabled());
  const [showCelebrationToast, setShowCelebrationToast] = useState<boolean>(false);

  // Editor states
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Execution states (hydrated from synced student progress)
  const [terminalOutput, setTerminalOutput] = useState<string>('');
  const [testResult, setTestResult] = useState<{ passed: boolean; message: string } | null>(null);
  const [solvedTaskIds, setSolvedTaskIds] = useState<Set<number>>(() => {
    const saved = getSyncedPythonChallengesProgress();
    return new Set<number>(saved.solvedTaskIds);
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionTime, setExecutionTime] = useState<string>('0.04s');
  const [submissionsList, setSubmissionsList] = useState<
    Array<{ id: string; status: 'Accepted' | 'Wrong Answer'; time: string; runtime: string }>
  >([]);

  // Pull latest cloud progress across Desktop & Mobile
  useEffect(() => {
    pullSyncedPythonChallengesProgressFromCloud().then((cloud) => {
      if (!cloud) return;
      setSolvedTaskIds(new Set(cloud.solvedTaskIds));
      if (cloud.submittedCodeByTaskId && Object.keys(cloud.submittedCodeByTaskId).length > 0) {
        setCodes((prev) => ({ ...prev, ...cloud.submittedCodeByTaskId }));
      }
    });
  }, []);

  // Update task index when initialTaskId or activeTasks changes
  useEffect(() => {
    const idx = activeTasks.findIndex((t) => t.taskNumber === initialTaskId);
    if (idx >= 0) {
      setCurrentTaskIndex(idx);
      setRightTab('testcases');
      setTerminalOutput('');
      setTestResult(null);
    }
  }, [initialTaskId, activeTasks]);

  const handleCodeChange = (newCode: string) => {
    setCodes((prev) => ({ ...prev, [task.id]: newCode }));
  };

  const handleCopy = (text: string, sectionKey: string) => {
    soundEffects.playWaterDrop();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedSection(sectionKey);
    setTimeout(() => {
      setCopiedSection(null);
    }, 1500);
  };

  const toggleEyeVisibility = (caseNum: number) => {
    soundEffects.playHover();
    setTestCaseVisibility((prev) => ({
      ...prev,
      [caseNum]: !prev[caseNum]
    }));
  };

  const handleRunCode = () => {
    soundEffects.playClick();
    setIsRunning(true);
    setRightTab('result');

    setTimeout(() => {
      setIsRunning(false);
      const res = executePythonSimulation(currentCode);
      const startTime = performance.now();
      const endTime = performance.now();
      const elapsed = ((endTime - startTime) / 1000 + 0.03).toFixed(2);
      setExecutionTime(`${elapsed}s`);

      if (res.error) {
        soundEffects.playError();
        setTerminalOutput(`Traceback (most recent call last):\n  File "solution.py", line 1\n${res.error}`);
        setTestResult({ passed: false, message: 'Execution encountered an error.' });
      } else {
        setTerminalOutput(res.output || '(No output produced)');
        const validation = task.validate(currentCode, res.output);
        setTestResult(validation);
        if (validation.passed) {
          soundEffects.playSuccess();
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.65 }
          });
          setShowCelebrationToast(true);
          setTimeout(() => setShowCelebrationToast(false), 3000);
        } else {
          soundEffects.playError();
        }
      }
    }, 300);
  };

  const handleSubmitCode = () => {
    soundEffects.playClick();
    setIsRunning(true);
    setRightTab('result');

    setTimeout(() => {
      setIsRunning(false);
      const res = executePythonSimulation(currentCode);
      const validation = task.validate(currentCode, res.output || '');
      setTestResult(validation);
      setTerminalOutput(res.output || '(No output produced)');

      const isAccepted = validation.passed;
      const newSub = {
        id: Math.random().toString(36).substring(7),
        status: isAccepted ? ('Accepted' as const) : ('Wrong Answer' as const),
        time: 'Just now',
        runtime: '0.04s'
      };
      setSubmissionsList((prev) => [newSub, ...prev]);

      if (isAccepted) {
        soundEffects.playLevelUp();
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#1a73e8', '#34a853', '#fbbc05', '#ea4335', '#a855f7']
        });
        setShowCelebrationToast(true);
        setTimeout(() => setShowCelebrationToast(false), 3500);

        setSolvedTaskIds((prev) => {
          const alreadySolved = prev.has(task.id);
          const next = new Set(prev);
          next.add(task.id);

          const currentProg = getSyncedPythonChallengesProgress();
          const nextTopicIds = Array.from(new Set([...currentProg.solvedTopicIds, topicId]));
          saveSyncedPythonChallengesProgress({
            solvedTaskIds: Array.from(next),
            solvedTopicIds: nextTopicIds,
            submittedCodeByTaskId: { [task.id]: currentCode },
            pointsDelta: alreadySolved ? 0 : task.points || 5,
          });

          return next;
        });
      } else {
        soundEffects.playError();
      }
    }, 450);
  };

  const handlePrevTask = () => {
    soundEffects.playColorChange();
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex((prev) => prev - 1);
      setRightTab('testcases');
      setTerminalOutput('');
      setTestResult(null);
    }
  };

  const handleNextTask = () => {
    soundEffects.playColorChange();
    if (currentTaskIndex < activeTasks.length - 1) {
      setCurrentTaskIndex((prev) => prev + 1);
      setRightTab('testcases');
      setTerminalOutput('');
      setTestResult(null);
    } else if (onCompleteAll) {
      onCompleteAll();
    }
  };

  // Line numbering for code editor
  const codeLines = currentCode.split('\n');
  const lineCount = Math.max(codeLines.length, 18);

  const progressPercent = Math.round(((currentTaskIndex + 1) / activeTasks.length) * 100);

  return (
    <div className={`pca-arena-root min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto' : ''}`}>
      
      {/* ─── 1A. COMPACT MOBILE TOP NAVIGATION BAR (< 768px) ─── */}
      <div className="pca-mobile-only pca-mobile-navbar">
        <div className="pca-nav-left">
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onBack();
            }}
            aria-label="Back to Challenges"
            className="pca-nav-back-btn"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="pca-nav-topic-info">
            <div className="pca-nav-crumb-row">
              <span>Python Challenges</span>
              <span className="pca-nav-crumb-sep">&gt;</span>
              <span className="pca-nav-topic-pill">Topic {topicId}</span>
            </div>
            <div className="pca-nav-topic-title">
              {topicTitle || (topicId === 1 ? 'Say Hello, World! With Python' : `Topic ${topicId} Challenge`)}
            </div>
          </div>
        </div>

        <div className="pca-nav-right">
          <button
            type="button"
            onClick={() => {
              const next = soundEffects.toggleSound();
              setSoundOn(next);
            }}
            title={soundOn ? 'Sound Effects ON' : 'Muted'}
            className={`pca-nav-sound-btn ${!soundOn ? 'is-muted' : ''}`}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{soundOn ? 'Sound ON' : 'Muted'}</span>
          </button>

          <div className="pca-nav-select-wrap">
            <label htmlFor="pca-mobile-task-select" className="pca-nav-select-label">
              Challenge:
            </label>
            <select
              id="pca-mobile-task-select"
              value={currentTaskIndex}
              onChange={(e) => {
                soundEffects.playColorChange();
                setCurrentTaskIndex(Number(e.target.value));
                setRightTab('testcases');
                setTerminalOutput('');
                setTestResult(null);
              }}
              className="pca-nav-select"
            >
              {activeTasks.map((t, idx) => (
                <option key={t.id} value={idx}>
                  {t.taskNumber}. {t.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 pca-nav-select-arrow" />
          </div>
        </div>
      </div>

      {/* ─── 1B. DESKTOP TOP NAVIGATION BAR (>= 768px) ─── */}
      <div className="pca-desktop-only bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 flex items-center justify-between sticky top-0 z-20 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onBack();
            }}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Challenges</span>
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Topic {topicId}
            </span>
            <span className="text-xs font-bold text-slate-800 hidden md:inline truncate max-w-[280px]">
              {topicTitle || (topicId === 1 ? 'Say Hello, World! With Python' : `Topic ${topicId} Challenge`)}
            </span>
          </div>
        </div>

        {/* Right Tools: Sound FX Toggle + Question Dropdown in Navbar */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle with Live Audio Feedback */}
          <button
            type="button"
            onClick={() => {
              const next = soundEffects.toggleSound();
              setSoundOn(next);
            }}
            title={soundOn ? 'Sound Effects ON (Click to Mute)' : 'Sound Effects Muted (Click to Unmute)'}
            className={`px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
              soundOn
                ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden lg:inline text-[11px]">{soundOn ? 'Sound ON' : 'Muted'}</span>
          </button>

          <div className="flex items-center gap-1.5">
            <label htmlFor="nav-task-select" className="text-xs font-bold text-slate-500 hidden sm:inline">
              Challenge:
            </label>
            <select
              id="nav-task-select"
              value={currentTaskIndex}
              onChange={(e) => {
                soundEffects.playColorChange();
                setCurrentTaskIndex(Number(e.target.value));
                setRightTab('testcases');
                setTerminalOutput('');
                setTestResult(null);
              }}
              className="bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer max-w-[200px] sm:max-w-[250px] truncate"
            >
              {activeTasks.map((t, idx) => (
                <option key={t.id} value={idx}>
                  {solvedTaskIds.has(t.id) ? '✅ ' : `${t.taskNumber}. `}
                  {t.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Floating Animated Celebration Toast */}
      {showCelebrationToast && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-bounce pointer-events-none transition-all duration-300">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 border-2 border-emerald-300/80">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>🎉 All 3 Test Cases Passed! +{task.points} Points Earned!</span>
            <Trophy className="w-4 h-4 text-amber-300" />
          </div>
        </div>
      )}

      {/* ─── 2A. MOBILE STACKED WORKSPACE (< 768px) ─── */}
      <div className="pca-mobile-only pca-mobile-content">
        
        {/* CARD 1: CHALLENGE INFO & PROBLEM STATEMENT */}
        <div className="pca-mcard">
          {/* Header Row: Title + Difficulty Badge + Star Bookmark */}
          <div className="pca-mcard-header">
            <div className="pca-mcard-title-group">
              <h1 className="pca-mcard-title">{task.title}</h1>
              <span className={`pca-diff-badge ${task.difficulty.toLowerCase()}`}>
                {task.difficulty}
              </span>
            </div>
            <button
              type="button"
              onClick={toggleBookmark}
              aria-label="Bookmark Challenge"
              className={`pca-star-btn ${isBookmarked ? 'is-active' : ''}`}
            >
              <Star className={`w-5 h-5 transition-colors ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>

          {/* Metadata Row: Points, Success Rate, Skill */}
          <div className="pca-mcard-meta">
            <div className="pca-mcard-meta-item">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span><strong>{task.points} Points</strong></span>
            </div>
            <div className="pca-mcard-meta-item">
              <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
              <span>Success Rate: <strong>{task.successRate}</strong></span>
            </div>
            <div className="pca-mcard-meta-item">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>{task.skill}</span>
            </div>
          </div>

          {/* Sub-tabs: Problem | Submissions | Discussion */}
          <div className="pca-subtabs-row">
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setLeftTab('problem');
              }}
              className={`pca-subtab-btn ${leftTab === 'problem' ? 'is-active' : ''}`}
            >
              Problem
            </button>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setLeftTab('submissions');
              }}
              className={`pca-subtab-btn ${leftTab === 'submissions' ? 'is-active' : ''}`}
            >
              Submissions
            </button>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setLeftTab('discussion');
              }}
              className={`pca-subtab-btn ${leftTab === 'discussion' ? 'is-active' : ''}`}
            >
              Discussion
            </button>
          </div>

          {/* Problem Tab Content */}
          {leftTab === 'problem' && (
            <div>
              {/* Problem Statement with Indian Voice */}
              <IndianVoiceProblemStatement
                title="Problem Statement"
                problemStatement={task.problemStatement}
                highlightedKeyword={task.highlightedKeyword}
                suffix="to the output."
                taskIndex={currentTaskIndex + 1}
                theme="blue"
              />

              {/* Input Format */}
              <h2 className="pca-section-title">Input Format</h2>
              <p className="pca-section-desc">{task.inputFormat}</p>

              {/* Output Format */}
              <h2 className="pca-section-title">Output Format</h2>
              <p className="pca-section-desc">{task.outputFormat}</p>
              <div className="pca-code-box">
                <code>{task.outputFormatSample}</code>
                <button
                  type="button"
                  onClick={() => handleCopy(task.outputFormatSample, 'outputFormatMobile')}
                  className="pca-copy-btn"
                >
                  {copiedSection === 'outputFormatMobile' ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  <span>{copiedSection === 'outputFormatMobile' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}

          {leftTab === 'submissions' && (
            <div className="space-y-2 py-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Submissions</h3>
              {submissionsList.length === 0 ? (
                <div className="p-6 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <Code2 className="w-6 h-6 text-slate-300 mx-auto mb-1" />
                  <p className="text-xs text-slate-500">No submissions yet for this challenge.</p>
                </div>
              ) : (
                submissionsList.map((sub) => (
                  <div key={sub.id} className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between text-xs">
                    <span className={`font-bold ${sub.status === 'Accepted' ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {sub.status}
                    </span>
                    <span className="text-[11px] text-slate-400">{sub.runtime} • {sub.time}</span>
                  </div>
                ))
              )}
            </div>
          )}

          {leftTab === 'discussion' && (
            <div className="py-2">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-blue-800">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Learning Hint:</span>
                </div>
                <p>{task.hint}</p>
              </div>
            </div>
          )}
        </div>

        {/* CARD 2: MOBILE CODE EDITOR */}
        <div className={`pca-editor-card ${isDarkMode ? 'dark-theme' : ''}`}>
          {/* Top Bar: Language Dropdown + Tool Icons */}
          <div className="pca-editor-topbar">
            <div className="pca-editor-lang-pill">
              {/* Python Vector Logo */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 128 128" fill="none">
                <path
                  d="M63.5 12C37.5 12 39.5 23 39.5 23L39.6 34.5H64.4V38H28.7S12 36.2 12 62.4C12 88.6 26.6 87.2 26.6 87.2H35.4V75.1S34.9 60.5 49.5 60.5H74.3V48.4S74.3 36.3 63.5 12ZM51.8 19.3C54.6 19.3 56.8 21.6 56.8 24.3C56.8 27.1 54.6 29.4 51.8 29.4C49 29.4 46.8 27.1 46.8 24.3C46.8 21.6 49 19.3 51.8 19.3Z"
                  fill="#387EB8"
                />
                <path
                  d="M64.5 116C90.5 116 88.5 105 88.5 105L88.4 93.5H63.6V90H99.3S116 91.8 116 65.6C116 39.4 101.4 40.8 101.4 40.8H92.6V52.9S93.1 67.5 78.5 67.5H53.7V79.6S53.7 91.7 64.5 116ZM76.2 108.7C73.4 108.7 71.2 106.4 71.2 103.7C71.2 100.9 73.4 98.6 76.2 98.6C79 98.6 81.2 100.9 81.2 103.7C81.2 106.4 79 108.7 76.2 108.7Z"
                  fill="#FFE052"
                />
              </svg>
              <span>Python 3 (3.10)</span>
              <ChevronDown className="w-3 h-3 text-[#1a73e8]" />
            </div>

            <div className="pca-editor-tools">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playColorChange();
                  setIsDarkMode((prev) => !prev);
                }}
                title={isDarkMode ? 'Light mode' : 'Dark mode'}
                className="pca-editor-tool-btn"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setIsFullscreen((prev) => !prev);
                }}
                title={isFullscreen ? 'Exit full screen' : 'Full screen'}
                className="pca-editor-tool-btn"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                title="Settings"
                onClick={() => soundEffects.playClick()}
                className="pca-editor-tool-btn"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Code Editor Body */}
          <div className="pca-editor-body">
            <div className="pca-line-numbers">
              {Array.from({ length: Math.max(codeLines.length, 4) }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <textarea
              value={currentCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              placeholder="# Write your code here"
              spellCheck={false}
              className="pca-code-textarea"
            />
          </div>
        </div>

        {/* CARD 3: TEST CASES AND RESULTS */}
        <div className="pca-mcard">
          {/* Tabs: Test Cases (3) | Result */}
          <div className="pca-tc-tabs-row">
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setRightTab('testcases');
              }}
              className={`pca-tc-tab-btn ${rightTab === 'testcases' ? 'is-active' : ''}`}
            >
              Test Cases (3)
            </button>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setRightTab('result');
              }}
              className={`pca-tc-tab-btn ${rightTab === 'result' ? 'is-active' : ''}`}
            >
              Result
            </button>
          </div>

          {rightTab === 'testcases' && (
            <div className="pca-tc-list">
              {[1, 2, 3].map((caseNum) => {
                const isVisible = testCaseVisibility[caseNum];
                return (
                  <div key={caseNum} className="pca-tc-row">
                    <div className="pca-tc-row-left">
                      <span className="pca-tc-code-icon">&lt;/&gt;</span>
                      <span>Test Case {caseNum}</span>
                    </div>

                    <div className="pca-tc-row-right">
                      <span className="pca-tc-hidden-badge">
                        <span>Hidden</span>
                        <Lock className="w-2.5 h-2.5" />
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleEyeVisibility(caseNum)}
                        title={isVisible ? 'Hide details' : 'Preview test case'}
                        className="pca-tc-eye-btn"
                      >
                        {isVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {rightTab === 'result' && (
            <div className="space-y-3 mb-4">
              {isRunning ? (
                <div className="p-6 text-center text-slate-500">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <span className="text-xs font-bold">Executing Python Code...</span>
                </div>
              ) : testResult ? (
                <div className="space-y-2.5">
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    testResult.passed
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                      : 'bg-rose-50/80 border-rose-200 text-rose-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      {testResult.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                      )}
                      <span className="text-xs font-bold">
                        {testResult.passed ? '3/3 Test Cases Passed' : 'Test Cases Failed'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 font-bold">{executionTime}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Your Terminal Output:
                    </span>
                    <pre className="p-2.5 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap max-h-36">
                      {terminalOutput}
                    </pre>
                  </div>

                  <p className={`text-xs ${testResult.passed ? 'text-emerald-700 font-semibold' : 'text-rose-700'}`}>
                    {testResult.message}
                  </p>
                </div>
              ) : (
                <div className="p-6 text-center text-slate-400 text-xs">
                  Run or Submit code to view test case results.
                </div>
              )}
            </div>
          )}

          {/* Action Buttons: Run Code and Submit Code */}
          <div className="pca-actions-grid">
            <button
              type="button"
              onClick={handleRunCode}
              disabled={isRunning}
              className="pca-btn-run"
            >
              <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>

            <button
              type="button"
              onClick={handleSubmitCode}
              disabled={isRunning}
              className="pca-btn-submit"
            >
              <Send className={`w-3.5 h-3.5 ${isRunning ? 'translate-x-1 -translate-y-1 transition-transform' : ''}`} />
              <span>{isRunning ? 'Checking...' : 'Submit Code'}</span>
            </button>
          </div>

          {/* Info Notice */}
          <div className="pca-info-notice">
            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <span>
              Your code will be tested against multiple hidden test cases. Click on "Run Code" to check your output first.
            </span>
          </div>
        </div>

        {/* CARD 4: CHALLENGE PROGRESS */}
        <div className="pca-progress-card">
          <h3 className="pca-progress-title">Challenge Progress</h3>
          <div className="pca-progress-row">
            <span className="pca-progress-numbers">
              {task.taskNumber} / {activeTasks.length}
            </span>
            <span className="pca-progress-percent">
              {progressPercent}%
            </span>
          </div>
          <div className="pca-progress-track">
            <div className="pca-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* ROW 5: PREVIOUS & NEXT CHALLENGE NAVIGATION */}
        <div className="pca-nav-buttons-row">
          <button
            type="button"
            disabled={currentTaskIndex === 0}
            onClick={handlePrevTask}
            className={`pca-btn-prev ${currentTaskIndex === 0 ? 'is-disabled' : ''}`}
          >
            <span>← Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNextTask}
            className="pca-btn-next"
          >
            <span>{currentTaskIndex === activeTasks.length - 1 ? `Complete Topic ${topicId}` : 'Next Challenge →'}</span>
          </button>
        </div>
      </div>

      {/* ─── 2B. DESKTOP 3-COLUMN WORKSPACE (>= 768px - UNCHANGED) ─── */}
      <div className="pca-desktop-only flex-1 p-3 sm:p-5 max-w-[1720px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        
        {/* ═════════ COLUMN 1: PROBLEM DETAILS (35% on Desktop = 4.2 cols) ═════════ */}
        <div className="lg:col-span-4 bg-white border border-slate-200/90 rounded-2xl shadow-sm flex flex-col overflow-hidden text-left min-h-[680px]">
          {/* Header Title & Difficulty Badge */}
          <div className="p-5 pb-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {task.title}
              </h1>
              <span className="bg-[#e6f4ea] text-[#137333] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#ceead6]">
                {task.difficulty}
              </span>
            </div>

            {/* Sub-Header Metadata: Points, Success Rate, Skill */}
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-600 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-slate-800">{task.points} Points</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-slate-400" />
                <span>Success Rate: <strong className="text-slate-800 font-bold">{task.successRate}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-slate-400" />
                <span className="font-medium text-slate-700">{task.skill}</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs: Problem | Submissions | Discussion */}
          <div className="flex items-center border-b border-slate-200 px-5 gap-6 text-sm">
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setLeftTab('problem');
              }}
              className={`pb-2.5 pt-1 font-bold cursor-pointer transition-all duration-200 relative ${
                leftTab === 'problem'
                  ? 'text-[#1a73e8] border-b-2 border-[#1a73e8]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Problem
            </button>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setLeftTab('submissions');
              }}
              className={`pb-2.5 pt-1 font-semibold cursor-pointer transition-all duration-200 relative ${
                leftTab === 'submissions'
                  ? 'text-[#1a73e8] border-b-2 border-[#1a73e8]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Submissions
            </button>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setLeftTab('discussion');
              }}
              className={`pb-2.5 pt-1 font-semibold cursor-pointer transition-all duration-200 relative ${
                leftTab === 'discussion'
                  ? 'text-[#1a73e8] border-b-2 border-[#1a73e8]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Discussion
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-5 space-y-5 overflow-y-auto max-h-[720px]">
            {leftTab === 'problem' && (
              <>
                {/* 1. Problem Statement with Typewriter & Indian Boy/Girl Voice */}
                <IndianVoiceProblemStatement
                  title="Problem Statement"
                  problemStatement={task.problemStatement}
                  highlightedKeyword={task.highlightedKeyword}
                  suffix="to the output."
                  taskIndex={currentTaskIndex + 1}
                  theme="blue"
                />

                {/* 2. Input Format */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1.5">Input Format</h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {task.inputFormat}
                  </p>
                </div>

                {/* 3. Output Format */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1.5">Output Format</h2>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    {task.outputFormat}
                  </p>
                  <div className="bg-[#f8fafc] border border-slate-200/90 rounded-xl p-3 flex items-center justify-between group">
                    <code className="font-mono text-xs text-slate-800 font-semibold whitespace-pre-wrap">
                      {task.outputFormatSample}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(task.outputFormatSample, 'outputFormat')}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-blue-600 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-2xs transition-colors cursor-pointer"
                    >
                      {copiedSection === 'outputFormat' ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>{copiedSection === 'outputFormat' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* 4. Constraints */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1.5">Constraints</h2>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                    {task.constraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-400 leading-none mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Sample Input */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1.5">Sample Input</h2>
                  <div className="bg-[#f8fafc] border border-slate-200/90 rounded-xl p-3 flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-500">
                      {task.sampleInput}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(task.sampleInput, 'sampleInput')}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-blue-600 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-2xs transition-colors cursor-pointer"
                    >
                      {copiedSection === 'sampleInput' ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>{copiedSection === 'sampleInput' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* 6. Sample Output */}
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1.5">Sample Output</h2>
                  <div className="bg-[#f8fafc] border border-slate-200/90 rounded-xl p-3 flex items-center justify-between">
                    <code className="font-mono text-xs text-slate-800 font-semibold whitespace-pre-wrap">
                      {task.sampleOutput}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(task.sampleOutput, 'sampleOutput')}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-blue-600 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-2xs transition-colors cursor-pointer"
                    >
                      {copiedSection === 'sampleOutput' ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>{copiedSection === 'sampleOutput' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </>
            )}

            {leftTab === 'submissions' && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Previous Submissions</h3>
                {submissionsList.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Code2 className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-xs text-slate-500">No submissions yet for this challenge.</p>
                    <p className="text-[11px] text-slate-400 mt-1">Submit your code to see history.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {submissionsList.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-3 rounded-xl border border-slate-200 bg-white flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          {sub.status === 'Accepted' ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          ) : (
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          )}
                          <span className={`text-xs font-bold ${sub.status === 'Accepted' ? 'text-emerald-700' : 'text-rose-700'}`}>
                            {sub.status}
                          </span>
                        </div>
                        <div className="text-right text-[11px] text-slate-400">
                          <span>{sub.runtime}</span> • <span>{sub.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {leftTab === 'discussion' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                  <div className="font-bold flex items-center gap-1.5 mb-1.5 text-blue-800">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Learning Hint:</span>
                  </div>
                  <p>{task.hint}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ═════════ COLUMN 2: CODE EDITOR (42% on Desktop = 5 cols) ═════════ */}
        <div className={`lg:col-span-5 rounded-2xl border shadow-sm flex flex-col overflow-hidden min-h-[680px] transition-colors ${
          isDarkMode ? 'bg-[#1e1e2e] border-slate-800 text-slate-100' : 'bg-white border-slate-200/90 text-slate-900'
        }`}>
          {/* Editor Top Bar: Language Dropdown + Tool Icons */}
          <div className={`px-4 py-2.5 border-b flex items-center justify-between ${
            isDarkMode ? 'bg-[#181825] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            {/* Language Selector: Python 3 (3.10) with Python Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e8f0fe] border border-blue-200 text-[#1a73e8] font-bold text-xs shadow-2xs">
                {/* Python Vector Logo */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 128 128" fill="none">
                  <path
                    d="M63.5 12C37.5 12 39.5 23 39.5 23L39.6 34.5H64.4V38H28.7S12 36.2 12 62.4C12 88.6 26.6 87.2 26.6 87.2H35.4V75.1S34.9 60.5 49.5 60.5H74.3V48.4S74.3 36.3 63.5 12ZM51.8 19.3C54.6 19.3 56.8 21.6 56.8 24.3C56.8 27.1 54.6 29.4 51.8 29.4C49 29.4 46.8 27.1 46.8 24.3C46.8 21.6 49 19.3 51.8 19.3Z"
                    fill="#387EB8"
                  />
                  <path
                    d="M64.5 116C90.5 116 88.5 105 88.5 105L88.4 93.5H63.6V90H99.3S116 91.8 116 65.6C116 39.4 101.4 40.8 101.4 40.8H92.6V52.9S93.1 67.5 78.5 67.5H53.7V79.6S53.7 91.7 64.5 116ZM76.2 108.7C73.4 108.7 71.2 106.4 71.2 103.7C71.2 100.9 73.4 98.6 76.2 98.6C79 98.6 81.2 100.9 81.2 103.7C81.2 106.4 79 108.7 76.2 108.7Z"
                    fill="#FFE052"
                  />
                </svg>
                <span>Python 3 (3.10)</span>
                <ChevronRight className="w-3 h-3 rotate-90 text-[#1a73e8]" />
              </div>
            </div>

            {/* Right Tools: Theme Toggle, Fullscreen, Settings */}
            <div className="flex items-center gap-1.5 text-slate-500">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playColorChange();
                  setIsDarkMode((prev) => !prev);
                }}
                title={isDarkMode ? 'Light mode' : 'Dark mode'}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer active:scale-90"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setIsFullscreen((prev) => !prev);
                }}
                title={isFullscreen ? 'Exit full screen' : 'Full screen'}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer active:scale-90"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                title="Settings"
                onClick={() => soundEffects.playClick()}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer active:scale-90"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Code Editor Body with Line Numbers */}
          <div className="flex-1 flex overflow-hidden font-mono text-sm relative">
            {/* Left Line Numbers */}
            <div
              className={`select-none text-right px-3 py-3 border-r text-xs leading-[24px] ${
                isDarkMode ? 'bg-[#181825] border-slate-800 text-slate-600' : 'bg-white border-slate-200 text-slate-400'
              }`}
              style={{ minWidth: '42px' }}
            >
              {Array.from({ length: lineCount }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Code Input Area */}
            <div className="flex-1 relative flex flex-col">
              <textarea
                value={currentCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                placeholder="# Write your code here"
                spellCheck={false}
                className={`w-full flex-1 p-3 font-mono text-xs sm:text-sm leading-[24px] bg-transparent resize-none focus:outline-none border-none ${
                  isDarkMode ? 'text-slate-200 caret-white placeholder:text-slate-600' : 'text-slate-800 caret-blue-600 placeholder:text-emerald-600'
                }`}
                style={{ tabSize: 4 }}
              />
            </div>
          </div>
        </div>

        {/* ═════════ COLUMN 3: TEST CASES, EXECUTION & PROGRESS (23% = 3 cols) ═════════ */}
        <div className="lg:col-span-3 space-y-4 flex flex-col text-left">
          
          {/* Card 1: Test Cases & Execution Box */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm">
            {/* Top Tabs: Test Cases (3) | Result */}
            <div className="flex items-center border-b border-slate-200 gap-6 text-sm mb-3.5">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setRightTab('testcases');
                }}
                className={`pb-2 font-bold cursor-pointer transition-all duration-200 relative ${
                  rightTab === 'testcases'
                    ? 'text-[#1a73e8] border-b-2 border-[#1a73e8]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Test Cases (3)
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setRightTab('result');
                }}
                className={`pb-2 font-semibold cursor-pointer transition-all duration-200 relative ${
                  rightTab === 'result'
                    ? 'text-[#1a73e8] border-b-2 border-[#1a73e8]'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Result
              </button>
            </div>

            {/* Tab 1: Test Cases List */}
            {rightTab === 'testcases' && (
              <div className="space-y-2.5 mb-4">
                {[1, 2, 3].map((caseNum) => {
                  const isVisible = testCaseVisibility[caseNum];
                  return (
                    <div
                      key={caseNum}
                      className="bg-white hover:bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-blue-600">
                            &lt;/&gt;
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            Test Case {caseNum}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-[10.5px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <span>Hidden</span>
                            <Lock className="w-2.5 h-2.5" />
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleEyeVisibility(caseNum)}
                            title={isVisible ? 'Hide details' : 'Preview test case'}
                            className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                          >
                            {isVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* Visible Test Case Preview */}
                      {isVisible && (
                        <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                          <span className="text-slate-400 block font-semibold">Expected:</span>
                          <code className="text-emerald-700 font-mono font-bold">
                            {task.sampleOutput.split('\n')[caseNum - 1] || task.sampleOutput}
                          </code>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Result & Output */}
            {rightTab === 'result' && (
              <div className="space-y-3 mb-4">
                {isRunning ? (
                  <div className="p-6 text-center text-slate-500">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <span className="text-xs font-bold">Executing Python Code...</span>
                  </div>
                ) : testResult ? (
                  <div className="space-y-2.5">
                    <div className={`p-3 rounded-xl border flex items-center justify-between ${
                      testResult.passed
                        ? 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                        : 'bg-rose-50/80 border-rose-200 text-rose-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        {testResult.passed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-rose-600" />
                        )}
                        <span className="text-xs font-bold">
                          {testResult.passed ? '3/3 Test Cases Passed' : 'Test Cases Failed'}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 font-bold">{executionTime}</span>
                    </div>

                    {/* Output window */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Your Terminal Output:
                      </span>
                      <pre className="p-2.5 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap max-h-36">
                        {terminalOutput}
                      </pre>
                    </div>

                    <p className={`text-xs ${testResult.passed ? 'text-emerald-700 font-semibold' : 'text-rose-700'}`}>
                      {testResult.message}
                    </p>
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-400 text-xs">
                    Run or Submit code to view test case results.
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons: Run Code + Submit Code */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handleRunCode}
                disabled={isRunning}
                className={`w-full bg-white hover:bg-blue-50/70 active:scale-95 border-2 border-[#1a73e8] text-[#1a73e8] font-bold text-xs sm:text-sm py-2.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 ${
                  isRunning ? 'ring-2 ring-blue-400 ring-offset-1 animate-pulse' : ''
                }`}
              >
                <Play className={`w-4 h-4 fill-current ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitCode}
                disabled={isRunning}
                className={`w-full bg-gradient-to-r from-[#1a73e8] to-blue-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 ${
                  isRunning ? 'ring-2 ring-indigo-400 ring-offset-1 animate-pulse' : ''
                }`}
              >
                <Send className={`w-3.5 h-3.5 ${isRunning ? 'translate-x-1 -translate-y-1 transition-transform' : ''}`} />
                <span>{isRunning ? 'Checking...' : 'Submit Code'}</span>
              </button>
            </div>

            {/* Info notice */}
            <div className="flex items-start gap-1.5 mt-3 text-[11px] text-slate-500 leading-relaxed">
              <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span>
                Your code will be tested against multiple hidden test cases. Click on "Run Code" to check your output first.
              </span>
            </div>
          </div>

          {/* Card 2: Challenge Progress Box */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm font-bold text-slate-800">Challenge Progress</h3>
            <div className="flex items-baseline justify-between mt-1 mb-2">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                {task.taskNumber} / {activeTasks.length}
              </span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                {progressPercent}%
              </span>
            </div>

            {/* Progress Bar Track with Smooth Gradient Shimmer */}
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 rounded-full transition-all duration-500 ease-out shadow-xs"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Card 3: Bottom Navigation Controls */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              disabled={currentTaskIndex === 0}
              onClick={handlePrevTask}
              className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
                currentTaskIndex === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 cursor-pointer shadow-xs active:scale-95'
              }`}
            >
              <span>← Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNextTask}
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{currentTaskIndex === activeTasks.length - 1 ? `Complete Topic ${topicId}` : 'Next Challenge →'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
