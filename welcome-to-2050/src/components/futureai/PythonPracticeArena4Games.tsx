import React, { useState, useEffect, useMemo } from 'react';
import './PythonPracticeArena4Games.css';
import {
  FileText,
  Puzzle,
  Code2,
  Target,
  Clock,
  Star,
  Check,
  RotateCcw,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Lightbulb,
  Lock,
  Sparkles,
  Zap,
  HelpCircle,
  Languages,
  Flag,
  AlertTriangle,
  Flame,
  Volume2,
  VolumeX,
  BookOpen,
  MessageSquare,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { getTopicHierarchyInfo } from './PythonChapterView';
import { getModule01TopicData, TopicAssessmentData } from './data/module01TopicContent';
import { getHindiTopicActivity } from './data/hindiActivityContent';

export interface PythonPracticeArena4GamesProps {
  userName?: string;
  topicId?: number;
  onBackToVideo?: () => void;
  onNextToInterview?: () => void;
  onNavigateDock?: (tab: string) => void;
}

export const PythonPracticeArena4Games: React.FC<PythonPracticeArena4GamesProps> = ({
  userName = 'Subodh Kumar',
  topicId = 1,
  onBackToVideo,
  onNextToInterview,
  onNavigateDock,
}) => {
  const topicHierarchy = useMemo(() => getTopicHierarchyInfo(topicId), [topicId]);
  const topicData: TopicAssessmentData = useMemo(() => getModule01TopicData(topicId), [topicId]);
  const hindiActivity = useMemo(() => getHindiTopicActivity(topicId), [topicId]);

  // Active game (1: Quick Quiz, 2: Puzzle Challenge, 3: Match the Code, 4: Real-Life Mission)
  const [activeGame, setActiveGame] = useState<number>(1);
  const [unlockedGame, setUnlockedGame] = useState<number>(1);

  // Gamification: Streak, XP toast & Sound Toggle
  const [streak, setStreak] = useState<number>(0);
  const [floatingXp, setFloatingXp] = useState<string | null>(null);
  const [soundOn, setSoundOn] = useState<boolean>(soundEffects.getSoundEnabled());

  // ─────────────────────────────────────────────────────────────────────────────
  // HELP SYSTEM & SKIP QUESTION STATE
  // ─────────────────────────────────────────────────────────────────────────────
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [helpTab, setHelpTab] = useState<'menu' | 'hint' | 'example' | 'explain' | 'report'>('menu');
  const [helpLang, setHelpLang] = useState<'hi' | 'en'>('hi');
  const [reportReason, setReportReason] = useState<string>('');
  const [reportDetails, setReportDetails] = useState<string>('');
  const [reportSuccess, setReportSuccess] = useState<boolean>(false);

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME 1: QUICK QUIZ STATE (5 Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [selectedQuizKey, setSelectedQuizKey] = useState<string | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizSeconds, setQuizSeconds] = useState<number>(25);

  const quizQuestions = useMemo(() => {
    if (topicId === 1) {
      return [
        {
          id: 1,
          question: 'Programming is...',
          options: [
            { key: 'A' as const, text: 'Repairing hardware' },
            { key: 'B' as const, text: 'Browsing the internet' },
            { key: 'C' as const, text: 'Giving a computer instructions' },
            { key: 'D' as const, text: 'Designing only graphics' },
          ],
          correct: 2,
          explanation: 'Programming is the process of creating a set of instructions that tell a computer how to perform tasks.',
          hint: 'A program is a set of instructions a computer can execute.',
          realWorldContext: 'Every software application consists of computer instructions.',
          codeSnippet: '# Programming = instructions\nprint("Execute step by step")',
        },
        ...(topicData?.mcqs ? topicData.mcqs.slice(1, 5) : [])
      ];
    }
    if (topicData?.mcqs && topicData.mcqs.length >= 5) {
      return topicData.mcqs.slice(0, 5);
    }
    return [
      {
        id: 1,
        question: 'Programming is...',
        options: [
          { key: 'A' as const, text: 'Repairing hardware' },
          { key: 'B' as const, text: 'Browsing the internet' },
          { key: 'C' as const, text: 'Giving a computer instructions' },
          { key: 'D' as const, text: 'Designing only graphics' },
        ],
        correct: 2,
        explanation: 'Programming is the process of creating a set of instructions that tell a computer how to perform tasks and solve problems.',
        hint: 'A program is a set of instructions a computer can execute.',
        realWorldContext: 'Every software application consists of computer instructions.',
        codeSnippet: '# Programming = instructions\nprint("Execute step by step")',
      },
      {
        id: 2,
        question: 'Who created the Python programming language in 1991?',
        options: [
          { key: 'A' as const, text: 'Dennis Ritchie' },
          { key: 'B' as const, text: 'Guido van Rossum' },
          { key: 'C' as const, text: 'James Gosling' },
          { key: 'D' as const, text: 'Bjarne Stroustrup' },
        ],
        correct: 1,
        explanation: 'Guido van Rossum created Python in 1991 at CWI in the Netherlands.',
        hint: 'He is a Dutch computer programmer named Guido.',
        realWorldContext: 'Guido designed Python to be clean and readable.',
        codeSnippet: '# Python was created by Guido van Rossum\nauthor = "Guido van Rossum"',
      },
      {
        id: 3,
        question: 'Which built-in Python function is used to output messages to the console screen?',
        options: [
          { key: 'A' as const, text: 'output()' },
          { key: 'B' as const, text: 'display()' },
          { key: 'C' as const, text: 'print()' },
          { key: 'D' as const, text: 'show()' },
        ],
        correct: 2,
        explanation: 'print() is Python standard built-in function to display text and data values.',
        hint: 'It prints text directly to your console.',
        realWorldContext: 'Used by every developer to test and show results.',
        codeSnippet: 'print("Hello, Python!")',
      },
      {
        id: 4,
        question: 'What is the correct file extension for standard Python source code script files?',
        options: [
          { key: 'A' as const, text: '.python' },
          { key: 'B' as const, text: '.py' },
          { key: 'C' as const, text: '.pt' },
          { key: 'D' as const, text: '.exe' },
        ],
        correct: 1,
        explanation: 'Python script source files always use the .py extension.',
        hint: 'It is a 2-letter extension starting with p.',
        realWorldContext: 'Operating systems associate .py files with the Python interpreter.',
        codeSnippet: '# filename: app.py',
      },
      {
        id: 5,
        question: 'Why is Python the leading language for Artificial Intelligence and Data Analytics?',
        options: [
          { key: 'A' as const, text: 'Only runs on one specific operating system' },
          { key: 'B' as const, text: 'Simple English-like syntax and vast library ecosystem' },
          { key: 'C' as const, text: 'Cannot work with numbers' },
          { key: 'D' as const, text: 'Requires compilation before execution' },
        ],
        correct: 1,
        explanation: 'Python clean readability and massive libraries (Pandas, NumPy, PyTorch) make it the global standard for AI.',
        hint: 'English-like readability and rich packages.',
        realWorldContext: 'Used worldwide in ChatGPT, Google DeepMind, and Tesla Autopilot.',
        codeSnippet: 'import pandas as pd\nimport torch',
      },
    ];
  }, [topicData]);

  // Quiz Timer
  useEffect(() => {
    if (activeGame !== 1) return;
    const interval = setInterval(() => {
      setQuizSeconds((s) => (s > 0 ? s - 1 : 25));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeGame, quizIdx]);

  const handleSubmitAnswer = () => {
    if (!selectedQuizKey || quizFeedback === 'correct') return;
    const currQ: any = quizQuestions[quizIdx];
    const optIdx = currQ.options.findIndex((o: any) => o.key === selectedQuizKey);
    if (optIdx !== -1) {
      handleSelectQuizOption(selectedQuizKey, optIdx);
    }
  };

  // Handle Quiz Selection & Auto-Next
  const handleSelectQuizOption = (key: string, optIdx: number) => {
    if (quizFeedback === 'correct') return;
    setSelectedQuizKey(key);
    soundEffects.playClick();

    const currQ: any = quizQuestions[quizIdx];
    const isRight = optIdx === currQ.correct;

    if (isRight) {
      setQuizFeedback('correct');
      soundEffects.playQuizCorrect();
      setQuizScore((s) => s + 10);
      setStreak((s) => s + 1);
      setFloatingXp('+10 XP ✨');
      setTimeout(() => setFloatingXp(null), 1200);

      // Auto advance to next question after 1.2s
      setTimeout(() => {
        setSelectedQuizKey(null);
        setQuizFeedback(null);
        setQuizSeconds(25);

        if (quizIdx < quizQuestions.length - 1) {
          setQuizIdx((i) => i + 1);
        } else {
          // Game 1 Complete! Unlock & Transition to Game 2
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
          soundEffects.playCelebration();
          setUnlockedGame((prev) => Math.max(prev, 2));
          setTimeout(() => {
            setActiveGame(2);
          }, 1200);
        }
      }, 1200);
    } else {
      setQuizFeedback('wrong');
      soundEffects.playQuizWrong();
      setStreak(0);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME 2: PUZZLE CHALLENGE STATE (3 Challenges)
  // ─────────────────────────────────────────────────────────────────────────────
  const [puzzleIdx, setPuzzleIdx] = useState<number>(0);
  const [placedSlots, setPlacedSlots] = useState<(string | null)[]>([null, null, null, null]);
  const [puzzleAvailableTokens, setPuzzleAvailableTokens] = useState<string[]>([
    'print',
    '("Hello, Python!")',
    ')',
    '(',
  ]);
  const [puzzleStatus, setPuzzleStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const puzzleChallenges = useMemo(() => [
    {
      id: 1,
      title: 'CHALLENGE 1 — ARRANGE THE CODE',
      prompt: 'Arrange the code blocks in the correct order to print "Hello, Python!".',
      tokens: ['print', '(', '"Hello, Python!"', ')'],
      shuffled: ['print', '("Hello, Python!")', ')', '('],
      expected: ['print', '(', '"Hello, Python!"', ')'],
      hint: 'In Python, the print() function is used to display a message on the screen. Arrange the brackets and text in the correct order.',
    },
    {
      id: 2,
      title: 'CHALLENGE 2 — VARIABLE ASSIGNMENT',
      prompt: 'Arrange the blocks to store the user name "Aman" inside variable user_name.',
      tokens: ['user_name', '=', '"Aman"'],
      shuffled: ['=', '"Aman"', 'user_name'],
      expected: ['user_name', '=', '"Aman"'],
      hint: 'Variable assignment syntax: variable_name = value.',
    },
    {
      id: 3,
      title: 'CHALLENGE 3 — NUMERIC CALCULATION',
      prompt: 'Arrange the code blocks to add 10 and 20 and print the sum.',
      tokens: ['total', '=', '10', '+', '20'],
      shuffled: ['+', '20', '=', 'total', '10'],
      expected: ['total', '=', '10', '+', '20'],
      hint: 'Store 10 + 20 in the total variable.',
    },
  ], []);

  const currentPuzzle = puzzleChallenges[puzzleIdx] || puzzleChallenges[0];

  useEffect(() => {
    const tokens = currentPuzzle.shuffled || currentPuzzle.tokens;
    setPuzzleAvailableTokens([...tokens]);
    setPlacedSlots(new Array(currentPuzzle.expected.length).fill(null));
    setPuzzleStatus('idle');
  }, [puzzleIdx, currentPuzzle]);

  const handleAddPuzzleToken = (tok: string, idx: number) => {
    soundEffects.playClick();
    const firstEmpty = placedSlots.findIndex((s) => s === null);
    if (firstEmpty === -1) return;

    const nextSlots = [...placedSlots];
    nextSlots[firstEmpty] = tok;
    setPlacedSlots(nextSlots);

    const nextAvail = [...puzzleAvailableTokens];
    nextAvail.splice(idx, 1);
    setPuzzleAvailableTokens(nextAvail);
  };

  const handleRemovePuzzleSlot = (slotIdx: number) => {
    soundEffects.playClick();
    const tok = placedSlots[slotIdx];
    if (!tok) return;

    const nextSlots = [...placedSlots];
    nextSlots[slotIdx] = null;
    setPlacedSlots(nextSlots);
    setPuzzleAvailableTokens((prev) => [...prev, tok]);
  };

  const handleCheckPuzzleAnswer = () => {
    const isComplete = placedSlots.every((s) => s !== null);
    if (!isComplete) return;

    const isMatch = placedSlots.every((val, i) => val === currentPuzzle.expected[i]);
    if (isMatch) {
      setPuzzleStatus('correct');
      soundEffects.playQuizCorrect();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      setStreak((s) => s + 1);
      setFloatingXp('+15 XP ✨');
      setTimeout(() => setFloatingXp(null), 1200);

      setTimeout(() => {
        if (puzzleIdx < puzzleChallenges.length - 1) {
          setPuzzleIdx((i) => i + 1);
        } else {
          // Game 2 Complete! Unlock Game 3
          confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
          soundEffects.playCelebration();
          setUnlockedGame((prev) => Math.max(prev, 3));
          setTimeout(() => setActiveGame(3), 1200);
        }
      }, 1200);
    } else {
      setPuzzleStatus('wrong');
      soundEffects.playQuizWrong();
      setStreak(0);
    }
  };

  const handleResetPuzzle = () => {
    soundEffects.playClick();
    setPuzzleAvailableTokens([...(currentPuzzle.shuffled || currentPuzzle.tokens)]);
    setPlacedSlots(new Array(currentPuzzle.expected.length).fill(null));
    setPuzzleStatus('idle');
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME 3: MATCH THE CODE STATE (5 Matches)
  // ─────────────────────────────────────────────────────────────────────────────
  const matchPairs = useMemo(() => [
    {
      id: 1,
      snippet: 'print("Hello, Python!")',
      meaning: 'Displays a message on the screen.',
      cls: 'c1',
    },
    {
      id: 2,
      snippet: 'name = "Aman"',
      meaning: 'Stores a value in a variable.',
      cls: 'c2',
    },
    {
      id: 3,
      snippet: 'for i in range(3):',
      meaning: 'Repeats instructions a fixed number of times.',
      cls: 'c3',
    },
    {
      id: 4,
      snippet: 'if x > 5:',
      meaning: 'Checks a condition.',
      cls: 'c4',
    },
    {
      id: 5,
      snippet: 'len([1, 2, 3])',
      meaning: 'Returns the length (number of items).',
      cls: 'c5',
    },
  ], []);

  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<number, string>>({});

  const handleSelectSnippet = (snippet: string) => {
    soundEffects.playClick();
    setSelectedSnippet(snippet);
  };

  const handlePlaceMatch = (pairId: number) => {
    if (!selectedSnippet) return;
    soundEffects.playClick();

    const pair = matchPairs.find((p) => p.id === pairId);
    if (!pair) return;

    if (pair.snippet === selectedSnippet) {
      const nextMatches = { ...matchedPairs, [pairId]: selectedSnippet };
      setMatchedPairs(nextMatches);
      setSelectedSnippet(null);
      soundEffects.playQuizCorrect();
      setFloatingXp('+10 XP ✨');
      setTimeout(() => setFloatingXp(null), 1000);

      // Check if all 5 matched
      if (Object.keys(nextMatches).length === matchPairs.length) {
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
        soundEffects.playCelebration();
        setUnlockedGame((prev) => Math.max(prev, 4));
        setTimeout(() => setActiveGame(4), 1400);
      }
    } else {
      soundEffects.playQuizWrong();
    }
  };

  const handleResetMatches = () => {
    soundEffects.playClick();
    setMatchedPairs({});
    setSelectedSnippet(null);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME 4: REAL-LIFE MISSION STATE (2 Missions)
  // ─────────────────────────────────────────────────────────────────────────────
  const [missionIdx, setMissionIdx] = useState<number>(0);
  const [missionCode, setMissionCode] = useState<string>(
`products = [
  {"name": "Laptop", "price": 45000},
  {"name": "Mouse", "price": 299},
  {"name": "Keyboard", "price": 799},
  {"name": "Monitor", "price": 8999},
  {"name": "Charger", "price": 499},
  {"name": "Headphone", "price": 1999}
]

# Write Python code to filter products with price > 500
result = [p for p in products if p['price'] > 500]
print(result)`
  );
  const [missionOutput, setMissionOutput] = useState<string>('');
  const [missionDone, setMissionDone] = useState<boolean>(false);

  const handleRunMissionCode = () => {
    soundEffects.playClick();
    setMissionOutput(`[
  {'name': 'Laptop', 'price': 45000},
  {'name': 'Keyboard', 'price': 799},
  {'name': 'Monitor', 'price': 8999},
  {'name': 'Headphone', 'price': 1999}
]`);
  };

  const handleSubmitMissionSolution = () => {
    soundEffects.playCelebration();
    confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 } });
    setMissionDone(true);
    setFloatingXp('+25 XP 🏆');
    setTimeout(() => setFloatingXp(null), 1500);

    if (missionIdx === 0) {
      setTimeout(() => {
        setMissionIdx(1);
        setMissionDone(false);
      }, 1500);
    } else {
      if (onNextToInterview) {
        setTimeout(onNextToInterview, 1800);
      }
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // PROGRESS CALCULATIONS (0% -> 25% -> 50% -> 75% -> 100%)
  // ─────────────────────────────────────────────────────────────────────────────
  const totalProgressPercent = useMemo(() => {
    let p = 0;
    if (unlockedGame >= 2) p += 25;
    if (unlockedGame >= 3) p += 25;
    if (unlockedGame >= 4) p += 25;
    if (missionDone) p += 25;
    return p;
  }, [unlockedGame, missionDone]);

  // AI Mentor Dynamic Hint
  const currentMentorHint = useMemo(() => {
    if (activeGame === 1) {
      return (
        quizQuestions[quizIdx]?.explanation ||
        'Think about the process of writing instructions that a computer can understand and execute.'
      );
    }
    if (activeGame === 2) {
      return currentPuzzle.hint;
    }
    if (activeGame === 3) {
      return 'Look at what each code does and match it with the correct meaning: variables, loops, and conditions.';
    }
    return 'Think about using a loop or list comprehension to check the price condition and create a new list with the matching products.';
  }, [activeGame, quizIdx, currentPuzzle, quizQuestions]);

  // ─────────────────────────────────────────────────────────────────────────────
  // PRE-WRITTEN HINT, EXAMPLE, EXPLANATION & REPORT DATA (Zero AI Cost)
  // ─────────────────────────────────────────────────────────────────────────────
  const currentHelpData = useMemo(() => {
    if (activeGame === 1) {
      const qNum = quizIdx + 1;
      const currQ: any = quizQuestions[quizIdx];
      const currH = hindiActivity?.mcqs ? hindiActivity.mcqs[qNum] : null;

      return {
        hintEn: currQ?.hint || currQ?.explanation || 'Think about the core concept of giving step-by-step instructions that a machine executes.',
        hintHi: currH?.hint || 'सोचिए कि कोड कंप्यूटर को कौन सा काम करने का निर्देश देता है।',
        exampleCode: currQ?.codeSnippet || '# Example instruction in Python\nprint("Hello, Python!")\nx = 10 + 20\nprint(x)',
        exampleNote: currQ?.realWorldContext || 'Computer sequentially executes code from top to bottom, exactly as commanded.',
        explainTitleEn: currQ?.question || 'Question Concept',
        explainTitleHi: currH?.question || 'प्रोग्रामिंग संकल्पना (Concept)',
        explainTextEn: currQ?.explanation || 'A program is a collection of instructions that tell the hardware how to perform computations and process data.',
        explainTextHi: currH?.explanation || 'प्रोग्राम निर्देशों का एक समूह होता है जिसे कंप्यूटर स्टेप-बाय-स्टेप प्रोसेस करके सही परिणाम दिखाता है।',
        realWorldEn: currQ?.realWorldContext || 'Every software system, from WhatsApp to Google Search, is driven by programmed instructions.',
        realWorldHi: 'आजकल की सारी मोबाइल ऐप्स और AI मॉडल्स इसी बेसिक प्रोग्रामिंग इंस्ट्रक्शन्स पर चलते हैं।',
      };
    }

    if (activeGame === 2) {
      const puzzle = currentPuzzle;
      const examples = [
        '# Python print syntax\nprint("Hello, Python!")',
        '# Variable assignment syntax\nuser_name = "Aman"\nprint(user_name)',
        '# Calculation syntax\ntotal = 10 + 20\nprint("Total:", total)'
      ];
      const notes = [
        'Function name comes first, then brackets (), and string is inside quotes.',
        'Variable name on left, = in middle, value on right.',
        'Expression on right (10 + 20) evaluates to 30 and gets assigned to total.'
      ];

      return {
        hintEn: puzzle.hint,
        hintHi: puzzleIdx === 0
          ? 'Python में print() फ़ंक्शन पहले आएगा, फिर कोष्ठक ( ) के अंदर कोट्स में संदेश लिखा जाएगा।'
          : puzzleIdx === 1
          ? 'वेरिएबल बनाने का नियम: पहले वेरिएबल का नाम, फिर बराबर का निशान (=), फिर मान (value)।'
          : 'गणित जोड़ (+) करने के बाद बराबर (=) से total वेरिएबल में सुरक्षित करें।',
        exampleCode: examples[puzzleIdx] || examples[0],
        exampleNote: notes[puzzleIdx] || notes[0],
        explainTitleEn: puzzle.title,
        explainTitleHi: 'पहेली की व्याख्या (Challenge Logic)',
        explainTextEn: `In Python syntax, statement structure follows strict grammatical rules. For ${puzzle.title.toLowerCase()}, tokens must be placed in sequential order without misplaced parentheses or operators.`,
        explainTextHi: 'Python में कोड लिखने का नियम बिल्कुल निश्चित होता है। पहले फ़ंक्शन का नाम या वेरिएबल, फिर ऑपरेटर, और ब्रैकेट्स को हमेशा सही तरह से जोड़ें।',
        realWorldEn: 'Syntax errors represent 80% of beginner programming bugs; ordering tokens properly builds compiler-friendly logic.',
        realWorldHi: 'कोडिंग सीखते समय ब्रैकेट या कॉमा की गलती सबसे आम होती है, इसलिए ब्लॉक्स को ध्यान से जोड़ें।',
      };
    }

    if (activeGame === 3) {
      return {
        hintEn: 'Look at the keywords: "print" displays text, "=" assigns value, "for" loops, "if" tests conditions, "len()" calculates size.',
        hintHi: 'कीवर्ड्स को ध्यान से देखें: print = स्क्रीन पर दिखाना, = = स्टोर करना, for = रिपीट करना, if = शर्त जांचना, len = लंबाई/गिनना।',
        exampleCode: '# Quick Python Cheatsheet\nprint("Subodh")       # 1. Output\nroll = 45             # 2. Variable\nfor num in [1, 2, 3]: # 3. Loop\nif roll > 30:         # 4. Condition\nsize = len("Python")  # 5. Length = 6',
        exampleNote: 'Each built-in keyword represents a distinct operation in the computer memory pipeline.',
        explainTitleEn: 'Python Syntax & Keywords Meaning',
        explainTitleHi: 'Python सिंटैक्स और कीवर्ड्स का अर्थ',
        explainTextEn: 'Programming languages define high-level keywords (print, if, for, len) that translate human logic into binary machine code.',
        explainTextHi: 'Python में हर कीवर्ड का एक निश्चित मतलब होता है। जैसे ही आप "print" लिखते हैं, Python OS को कंसोल आउटपुट भेजने का आदेश देता है।',
        realWorldEn: 'Writing clean, idiomatic code helps team members quickly read and maintain production codebases.',
        realWorldHi: 'सॉफ्टवेयर डेवलपमेंट कंपनियों में क्लीन कोड और सही कीवर्ड्स इस्तेमाल करने से कोड तेज गति से चलता है।',
      };
    }

    return {
      hintEn: 'Filter the list using a conditional check (if price > 500) inside a loop or comprehension.',
      hintHi: 'लिस्ट के हर प्रोडक्ट को चेक करने के लिए for loop और if condition का प्रयोग करें: if p["price"] > 500.',
      exampleCode: '# Real-life data filtering example\nproducts = [\n    {"name": "Pen", "price": 20},\n    {"name": "Book", "price": 600},\n    {"name": "Bag", "price": 1200}\n]\n\n# Filter items above 500\nhigh_value = [p for p in products if p["price"] > 500]\nprint(high_value)',
      exampleNote: 'List comprehension iterates through each dictionary and filters only items meeting the threshold price.',
      explainTitleEn: 'E-Commerce Product Filtering Mission',
      explainTitleHi: 'ई-कॉमर्स प्रोडक्ट फिल्टरिंग मिशन',
      explainTextEn: 'In modern e-commerce platforms like Amazon or Flipkart, catalog filtering based on price ranges, ratings, and categories happens using high-performance array filters.',
      explainTextHi: 'रियल-वर्ल्ड ई-कॉमर्स वेबसाइट में हजारों प्रोडक्ट्स में से फ़िल्टर करके सस्ते या महंगे सामान दिखाना एक अहम Python डेटा ऑपरेशन है।',
      realWorldEn: 'Backend engineers process millions of JSON records daily using this exact filtering logic.',
      realWorldHi: 'डेटा एनालिस्ट और सॉफ्टवेयर इंजीनियर हर दिन इसी तरह के फ़िल्टरिंग स्क्रिप्ट्स लिखते हैं।',
    };
  }, [activeGame, quizIdx, puzzleIdx, topicData, hindiActivity, quizQuestions, currentPuzzle]);

  // Skip Question Handler
  const handleSkipQuestion = () => {
    soundEffects.playClick();
    if (activeGame === 1) {
      setSelectedQuizKey(null);
      setQuizFeedback(null);
      setQuizSeconds(25);
      if (quizIdx < quizQuestions.length - 1) {
        setQuizIdx((i) => i + 1);
      } else {
        setUnlockedGame((prev) => Math.max(prev, 2));
        setActiveGame(2);
      }
    } else if (activeGame === 2) {
      if (puzzleIdx < puzzleChallenges.length - 1) {
        setPuzzleIdx((i) => i + 1);
      } else {
        setUnlockedGame((prev) => Math.max(prev, 3));
        setActiveGame(3);
      }
    } else if (activeGame === 3) {
      const allMatches: Record<number, string> = {};
      matchPairs.forEach((p) => {
        allMatches[p.id] = p.snippet;
      });
      setMatchedPairs(allMatches);
      setUnlockedGame((prev) => Math.max(prev, 4));
      setTimeout(() => setActiveGame(4), 500);
    } else if (activeGame === 4) {
      if (missionIdx === 0) {
        setMissionIdx(1);
      } else {
        setMissionDone(true);
        if (onNextToInterview) {
          onNextToInterview();
        }
      }
    }
  };

  // Report Question Handler
  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportReason) return;
    soundEffects.playClick();
    setReportSuccess(true);
    setTimeout(() => {
      setIsHelpOpen(false);
      setReportSuccess(false);
      setReportReason('');
      setReportDetails('');
      setHelpTab('menu');
    }, 1800);
  };

  return (
    <div className="ppa-container">
      {/* Floating XP Toast */}
      {floatingXp && (
        <div className="ppa-floating-xp-toast">
          <span>{floatingXp}</span>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          1. TOP 5-STEP SUB-STEPPER BAR (Pills 1 to 5 - Ultra Sleek)
          ───────────────────────────────────────────────────────────── */}
      <nav className="ppa-stepper-bar" aria-label="Practice Sub-Steps">
        {/* Step 1: Quick Quiz */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 1 ? 'active' : ''}`}
          onClick={() => { soundEffects.playClick(); setActiveGame(1); }}
        >
          <div className="ppa-step-badges-wrap">
            <div className={`ppa-step-circle-badge ${unlockedGame > 1 ? 'completed' : 'quiz'}`}>
              {unlockedGame > 1 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-200" />}
            </div>
            <span className="ppa-step-num-pill">1</span>
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Quick Quiz</span>
            <span className="ppa-step-sub">{unlockedGame > 1 ? '5/5 Done' : '5 Questions'}</span>
          </div>
        </button>

        <div className="ppa-step-connector-line">
          <span className="ppa-step-dot" />
        </div>

        {/* Step 2: Puzzle Challenge */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 2 ? 'active' : ''} ${unlockedGame < 2 ? 'locked' : ''}`}
          disabled={unlockedGame < 2}
          onClick={() => { soundEffects.playClick(); setActiveGame(2); }}
        >
          <div className="ppa-step-badges-wrap">
            <div className={`ppa-step-circle-badge ${unlockedGame > 2 ? 'completed' : unlockedGame >= 2 ? 'puzzle' : 'locked'}`}>
              {unlockedGame > 2 ? (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              ) : (
                <Puzzle className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="ppa-step-num-pill">2</span>
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Puzzle Challenge</span>
            <span className="ppa-step-sub">{unlockedGame > 2 ? '3/3 Done' : '3 Challenges'}</span>
          </div>
          {unlockedGame < 2 && <Lock className="w-3.5 h-3.5 text-slate-300 ml-auto ppa-lock-icon" />}
        </button>

        <div className="ppa-step-connector-line">
          <span className="ppa-step-dot" />
        </div>

        {/* Step 3: Match Code */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 3 ? 'active' : ''} ${unlockedGame < 3 ? 'locked' : ''}`}
          disabled={unlockedGame < 3}
          onClick={() => { soundEffects.playClick(); setActiveGame(3); }}
        >
          <div className="ppa-step-badges-wrap">
            <div className={`ppa-step-circle-badge ${unlockedGame > 3 ? 'completed' : unlockedGame >= 3 ? 'match' : 'locked'}`}>
              {unlockedGame > 3 ? (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              ) : (
                <Code2 className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="ppa-step-num-pill">3</span>
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Match Code</span>
            <span className="ppa-step-sub">{unlockedGame > 3 ? '5/5 Done' : '5 Pairs'}</span>
          </div>
          {unlockedGame < 3 && <Lock className="w-3.5 h-3.5 text-slate-300 ml-auto ppa-lock-icon" />}
        </button>

        <div className="ppa-step-connector-line">
          <span className="ppa-step-dot" />
        </div>

        {/* Step 4: Real-Life Mission */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 4 ? 'active' : ''} ${unlockedGame < 4 ? 'locked' : ''}`}
          disabled={unlockedGame < 4}
          onClick={() => { soundEffects.playClick(); setActiveGame(4); }}
        >
          <div className="ppa-step-badges-wrap">
            <div className={`ppa-step-circle-badge ${missionDone ? 'completed' : unlockedGame >= 4 ? 'mission' : 'locked'}`}>
              {missionDone ? (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              ) : (
                <Target className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="ppa-step-num-pill">4</span>
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Real-Life Mission</span>
            <span className="ppa-step-sub">{missionDone ? '2/2 Done' : '2 Missions'}</span>
          </div>
          {unlockedGame < 4 && <Lock className="w-3.5 h-3.5 text-slate-300 ml-auto ppa-lock-icon" />}
        </button>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN ARENA STAGE (Left 3D Pedestal, Center Game, Right AI Mentor)
          ───────────────────────────────────────────────────────────── */}
      <div className="ppa-arena-stage">
        {/* Left Column: 3D Python Pedestal */}
        <aside className="ppa-left-card-col" aria-label="Python Course Status">
          <div className="ppa-robot-mascot-wrap">
            <img
              src="/images/dashboard/py_robot_mascot_laptop.png"
              alt="Python AI Robot Mascot"
              className="ppa-robot-mascot-img"
            />
          </div>

          <div className="ppa-python-info-card">
            <h3 className="ppa-pic-title">Python</h3>
            <p className="ppa-pic-subtitle">Introduction to Programming</p>

            <div className="ppa-pic-progress-wrap">
              <div className="ppa-pic-progress-bar">
                <div className="ppa-pic-progress-fill" style={{ width: '20%' }} />
              </div>
              <span className="ppa-pic-progress-text">20% Complete</span>
            </div>

            <nav className="ppa-pic-links-list">
              <button
                type="button"
                className="ppa-pic-link-btn"
                onClick={() => { soundEffects.playClick(); onBackToVideo?.(); }}
                title="Open Lesson Notes"
              >
                <span className="ppa-pic-icon-box blue">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span>Lesson Notes</span>
              </button>
              <button
                type="button"
                className="ppa-pic-link-btn"
                onClick={() => { soundEffects.playClick(); setActiveGame(3); }}
                title="View Code Examples"
              >
                <span className="ppa-pic-icon-box purple">
                  <Code2 className="w-3.5 h-3.5" />
                </span>
                <span>Code Examples</span>
              </button>
              <button
                type="button"
                className="ppa-pic-link-btn"
                onClick={() => { soundEffects.playClick(); window.print(); }}
                title="Download Lesson PDF"
              >
                <span className="ppa-pic-icon-box violet">
                  <FileText className="w-3.5 h-3.5" />
                </span>
                <span>Download PDF</span>
              </button>
              <button
                type="button"
                className="ppa-pic-link-btn"
                onClick={() => { soundEffects.playClick(); onNextToInterview?.(); }}
                title="Open Discussion & Interview"
              >
                <span className="ppa-pic-icon-box pink">
                  <MessageSquare className="w-3.5 h-3.5" />
                </span>
                <span>Discussion</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Center Column: Active Game Main Card */}
        <main className="ppa-main-card">
          {/* ════════════════════════════════════════════════════════════
              HEADER ROW (Icon, Title, Subtitle, Timer, Points, Streak, Sound)
              ════════════════════════════════════════════════════════════ */}
          <div className="ppa-card-header">
            <div className="ppa-header-left">
              <div
                className={`ppa-card-icon-bubble ${
                  activeGame === 1
                    ? 'quiz'
                    : activeGame === 2
                    ? 'puzzle'
                    : activeGame === 3
                    ? 'match'
                    : 'mission'
                }`}
              >
                {activeGame === 1 && <Zap className="w-5 h-5 fill-amber-300 text-amber-200 animate-pulse" />}
                {activeGame === 2 && <Puzzle className="w-5 h-5 fill-purple-300 text-purple-100" />}
                {activeGame === 3 && <Code2 className="w-5 h-5 text-cyan-200" />}
                {activeGame === 4 && <Target className="w-5 h-5 text-amber-100" />}
              </div>

              <div className="ppa-header-titles">
                <div className="ppa-card-title-row">
                  <h2 className="ppa-card-title">
                    {activeGame === 1 && 'Quick Quiz'}
                    {activeGame === 2 && 'Puzzle Challenge'}
                    {activeGame === 3 && 'Match the Code'}
                    {activeGame === 4 && 'Real-Life Mission'}
                  </h2>
                  <span className="ppa-card-count-badge">
                    {activeGame === 1 && '5 Questions'}
                    {activeGame === 2 && '3 Challenges'}
                    {activeGame === 3 && '5 Matches'}
                    {activeGame === 4 && '2 Missions'}
                  </span>
                </div>
                <p className="ppa-card-desc">
                  {activeGame === 1 && 'Concepts test karo — correct answer select karte hi next question aayega.'}
                  {activeGame === 2 && 'Logic aur sequence solve karo — arrange blocks in order.'}
                  {activeGame === 3 && 'Code, meaning aur output match karo.'}
                  {activeGame === 4 && 'Practical problem solve karo — filter product catalog.'}
                </p>
              </div>
            </div>

            <div className="ppa-header-right">
              {/* Streak Counter Pill */}
              {streak > 1 && (
                <div className="ppa-streak-pill" title={`${streak} correct in a row!`}>
                  <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
                  <span>{streak}x Streak!</span>
                </div>
              )}

              {/* Clock Timer */}
              <div className="ppa-timer-pill">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>
                  {activeGame === 1 && `00:${quizSeconds < 10 ? '0' : ''}${quizSeconds}`}
                  {activeGame === 2 && '02:30'}
                  {activeGame === 3 && '01:45'}
                  {activeGame === 4 && '04:30'}
                </span>
              </div>

              {/* Points Pill */}
              <div className="ppa-points-pill">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>
                  {activeGame === 1 && '+10 Pts'}
                  {activeGame === 2 && '+15 Pts'}
                  {activeGame === 3 && '+10 Pts'}
                  {activeGame === 4 && '+25 Pts'}
                </span>
              </div>

              {/* Sound Toggle */}
              <button
                type="button"
                className={`ppa-sound-toggle-btn ${soundOn ? 'active' : 'muted'}`}
                onClick={() => {
                  const next = soundEffects.toggleSound();
                  setSoundOn(next);
                }}
                title={soundOn ? 'Mute Sound' : 'Enable Sound'}
              >
                {soundOn ? <Volume2 className="w-3.5 h-3.5 text-slate-600" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
              </button>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════
              GAME 1: QUICK QUIZ VIEW (2x2 Grid - Zero Scroll Fit)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 1 && (
            <div className="ppa-quiz-container">
              <div className="ppa-prompt-banner">
                <div className="flex items-center justify-between gap-2">
                  <div className="ppa-prompt-tag">
                    <Lightbulb className="w-3.5 h-3.5 fill-amber-300" />
                    <span>QUESTION {quizIdx + 1} OF 5</span>
                  </div>
                  <button
                    type="button"
                    className="ppa-btn-help"
                    onClick={() => {
                      setIsHelpOpen(true);
                      setHelpTab('menu');
                    }}
                    title="Need Help? Choose how you want to understand this question"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Need Help?</span>
                  </button>
                </div>
                <h3 className="ppa-prompt-question">
                  {quizQuestions[quizIdx]?.question}
                </h3>
              </div>

              {/* 2x2 Clean Responsive Grid */}
              <div className="ppa-quiz-options-grid">
                {quizQuestions[quizIdx]?.options.map((opt, optIdx) => {
                  const isSelected = selectedQuizKey === opt.key;
                  const isCorrect = isSelected && quizFeedback === 'correct';
                  const isWrong = isSelected && quizFeedback === 'wrong';

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      className={`ppa-quiz-opt-btn opt-card-${opt.key.toLowerCase()} ${isSelected ? 'selected' : ''} ${
                        isCorrect ? 'correct animate-pulse-glow' : ''
                      } ${isWrong ? 'wrong ppa-shake' : ''}`}
                      onMouseEnter={() => soundEffects.playHover()}
                      onClick={() => handleSelectQuizOption(opt.key, optIdx)}
                      disabled={quizFeedback === 'correct'}
                    >
                      <div className={`ppa-opt-key-badge badge-${opt.key.toLowerCase()}`}>{opt.key}</div>
                      <span className="ppa-opt-text">{opt.text}</span>
                      {isCorrect && <Check className="w-5 h-5 text-emerald-600 ml-auto shrink-0 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              GAME 2: PUZZLE CHALLENGE VIEW (Compact Fit)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 2 && (
            <div className="ppa-puzzle-container">
              <div className="ppa-prompt-banner">
                <div className="flex items-center justify-between gap-2">
                  <div className="ppa-prompt-tag">
                    <Lightbulb className="w-3.5 h-3.5 fill-amber-300" />
                    <span>{currentPuzzle.title}</span>
                  </div>
                  <button
                    type="button"
                    className="ppa-btn-help"
                    onClick={() => {
                      setIsHelpOpen(true);
                      setHelpTab('menu');
                    }}
                    title="Need Help? Choose how you want to understand this question"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Need Help?</span>
                  </button>
                </div>
                <h3 className="ppa-prompt-question">{currentPuzzle.prompt}</h3>
              </div>

              <div className="ppa-puzzle-grid">
                {/* Left: Code Blocks */}
                <div className="ppa-puzzle-col">
                  <span className="ppa-puzzle-col-title">Available Tokens (Tap to place)</span>
                  <div className="ppa-blocks-deck">
                    {puzzleAvailableTokens.map((tok, i) => (
                      <div
                        key={i}
                        className="ppa-puzzle-block-pill"
                        onMouseEnter={() => soundEffects.playHover()}
                        onClick={() => handleAddPuzzleToken(tok, i)}
                        title="Tap to place in answer"
                      >
                        <span className="ppa-block-grip-dots">:::</span>
                        <span>{tok}</span>
                      </div>
                    ))}
                    {puzzleAvailableTokens.length === 0 && (
                      <div className="p-2 text-center text-xs text-slate-400 italic">
                        All blocks placed!
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Drop Slots */}
                <div className="ppa-puzzle-col">
                  <span className="ppa-puzzle-col-title">Your Sequence (Tap to remove)</span>
                  <div className="ppa-slots-deck">
                    {placedSlots.map((tok, i) => (
                      <div
                        key={i}
                        className={`ppa-puzzle-slot-row ${tok ? 'filled' : ''}`}
                        onMouseEnter={() => soundEffects.playHover()}
                        onClick={() => tok && handleRemovePuzzleSlot(i)}
                        title={tok ? 'Tap to remove block' : 'Drop slot'}
                      >
                        <span className="ppa-slot-index-pill">{i + 1}</span>
                        {tok ? (
                          <span className="font-mono text-xs font-bold text-purple-900">{tok}</span>
                        ) : (
                          <span className="ppa-slot-placeholder-text">Empty slot</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              GAME 3: MATCH THE CODE VIEW (Compact Fit)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 3 && (
            <div className="ppa-match-container">
              <div className="ppa-prompt-banner">
                <div className="flex items-center justify-between gap-2">
                  <div className="ppa-prompt-tag">
                    <Lightbulb className="w-3.5 h-3.5 fill-amber-300" />
                    <span>MATCH 1 TO 5 — PYTHON SYNTAX</span>
                  </div>
                  <button
                    type="button"
                    className="ppa-btn-help"
                    onClick={() => {
                      setIsHelpOpen(true);
                      setHelpTab('menu');
                    }}
                    title="Need Help? Choose how you want to understand this question"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Need Help?</span>
                  </button>
                </div>
                <h3 className="ppa-prompt-question">
                  Select a snippet on the left, then click its matching meaning on the right.
                </h3>
              </div>

              <div className="ppa-match-grid">
                {/* Left: Code Snippets */}
                <div>
                  <span className="ppa-puzzle-col-title">Snippets</span>
                  {matchPairs.map((pair) => {
                    const isSelected = selectedSnippet === pair.snippet;
                    const isAlreadyMatched = Object.values(matchedPairs).includes(pair.snippet);
                    if (isAlreadyMatched) return null;

                    return (
                      <div
                        key={pair.id}
                        className={`ppa-snippet-card ${pair.cls} ${isSelected ? 'ring-2 ring-blue-500 scale-102' : ''}`}
                        onMouseEnter={() => soundEffects.playHover()}
                        onClick={() => handleSelectSnippet(pair.snippet)}
                        title="Click to select this snippet"
                      >
                        <span className="text-slate-400 font-bold">:::</span>
                        <code>{pair.snippet}</code>
                      </div>
                    );
                  })}
                  {Object.keys(matchedPairs).length === matchPairs.length && (
                    <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-xs text-center">
                      🎉 All 5 matched perfectly!
                    </div>
                  )}
                </div>

                {/* Right: Meanings & Drop Slots */}
                <div>
                  <span className="ppa-puzzle-col-title">Meanings</span>
                  {matchPairs.map((pair) => {
                    const matchedSnippet = matchedPairs[pair.id];
                    return (
                      <div
                        key={pair.id}
                        className="ppa-meaning-row"
                        onMouseEnter={() => soundEffects.playHover()}
                        onClick={() => handlePlaceMatch(pair.id)}
                      >
                        <div className="ppa-meaning-left">
                          <span className="font-extrabold text-xs text-slate-500">{pair.id}</span>
                          <span className="ppa-meaning-text">{pair.meaning}</span>
                        </div>
                        <div className={`ppa-meaning-drop-slot ${matchedSnippet ? 'filled' : ''}`}>
                          {matchedSnippet ? matchedSnippet : 'Match here'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              GAME 4: REAL-LIFE MISSION VIEW (Compact Fit)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 4 && (
            <div className="ppa-mission-container">
              <div className="ppa-mission-grid">
                {/* Left: Scenario & Product List Table */}
                <div className="ppa-scenario-card">
                  <div className="flex items-center justify-between gap-2">
                    <div className="ppa-scenario-title">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>Scenario</span>
                    </div>
                    <button
                      type="button"
                      className="ppa-btn-help"
                      onClick={() => {
                        setIsHelpOpen(true);
                        setHelpTab('menu');
                      }}
                      title="Need Help? Choose how you want to understand this question"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Need Help?</span>
                    </button>
                  </div>
                  <p className="ppa-scenario-desc">
                    Find products with price &gt; ₹500 and show their names and prices.
                  </p>

                  <table className="ppa-data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Laptop</td><td>45000</td></tr>
                      <tr><td>Mouse</td><td>299</td></tr>
                      <tr><td>Keyboard</td><td>799</td></tr>
                      <tr><td>Monitor</td><td>8999</td></tr>
                      <tr><td>Charger</td><td>499</td></tr>
                      <tr><td>Headphone</td><td>1999</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Center: Python IDE Card */}
                <div className="ppa-ide-card">
                  <div className="ppa-ide-head">
                    <span className="ppa-ide-task-text">
                      Filter products &gt; 500
                    </span>
                    <button
                      type="button"
                      className="ppa-ide-run-btn"
                      onClick={handleRunMissionCode}
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Run Code</span>
                    </button>
                  </div>

                  <textarea
                    className="ppa-ide-editor-area bg-transparent text-emerald-300 font-mono text-xs outline-none resize-none"
                    rows={8}
                    value={missionCode}
                    onChange={(e) => setMissionCode(e.target.value)}
                  />

                  {missionOutput && (
                    <div className="p-2 bg-black/60 border-t border-slate-700 text-xs font-mono text-emerald-400">
                      <strong>Output:</strong> {missionOutput}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              CARD FOOTER CONTROLS: PREVIOUS, RESET, SKIP, SUBMIT
              (All strictly visible together without scrolling)
              ════════════════════════════════════════════════════════════ */}
          <div className="ppa-card-footer">
                <button
                  type="button"
                  className="ppa-btn-prev"
                  disabled={quizIdx === 0}
                  onClick={() => {
                    soundEffects.playClick();
                    setQuizIdx((prev) => Math.max(0, prev - 1));
                    setSelectedQuizKey(null);
                    setQuizFeedback(null);
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="ppa-btn-skip-pill"
                  onClick={handleSkipQuestion}
                  title="Skip this question and move to next"
                >
                  <span>Skip Question</span>
                  <span className="ppa-skip-chevrons">»</span>
                </button>

                <button
                  type="button"
                  className="ppa-btn-submit-main"
                  disabled={!selectedQuizKey || quizFeedback === 'correct'}
                  onClick={handleSubmitAnswer}
                >
                  <span>Submit Answer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
        </main>

        {/* ─────────────────────────────────────────────────────────────
            3. RIGHT COLUMN: AI MENTOR HINT & YOUR PROGRESS
            (Watch Explanation Video removed as requested)
            ───────────────────────────────────────────────────────────── */}
        <aside className="ppa-sidebar-col">
          {/* Card 1: AI Mentor Hint with Mascot Boy */}
          <div className="ppa-ai-mentor-card">
            <div className="ppa-mentor-head">
              <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>AI Mentor Hint</span>
            </div>

            <div className="ppa-mentor-content-row">
              <p className="ppa-mentor-speech-text">{currentMentorHint}</p>
              <img
                src="/images/dashboard/ai_mentor_boy_mascot.png"
                alt="AI Mentor Boy"
                className="ppa-mentor-mascot-img"
              />
            </div>

            <button
              type="button"
              className="ppa-mentor-help-cta-btn"
              onClick={() => {
                setIsHelpOpen(true);
                setHelpTab('menu');
              }}
              title="Need Help? Choose how you want to understand this question"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Need Help? (4 Options)</span>
            </button>
          </div>

          {/* Card 3: Points & Streak (Exact match to media_1792847065914_f68382f0.png) */}
          <div className="ppa-points-streak-card">
            <div className="ppa-ps-head">
              <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Points & Streak</span>
            </div>

            <div className="ppa-ps-stats-grid">
              <div className="ppa-ps-stat-box">
                <Star className="w-7 h-7 text-amber-400 fill-amber-400 shrink-0" />
                <div className="ppa-ps-stat-content">
                  <strong className="ppa-ps-stat-val">{quizScore}</strong>
                  <span className="ppa-ps-stat-lbl">Total Points</span>
                </div>
              </div>

              <div className="ppa-ps-stat-box">
                <Flame className="w-7 h-7 text-orange-500 fill-orange-500 shrink-0" />
                <div className="ppa-ps-stat-content">
                  <strong className="ppa-ps-stat-val">{streak}</strong>
                  <span className="ppa-ps-stat-lbl">Day Streak</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Your Progress Donut & Checklist */}
          <div className="ppa-progress-card">
            <h3 className="ppa-progress-title">Your Progress</h3>

            <div className="ppa-progress-body">
              {/* Circular SVG Donut */}
              <div className="ppa-donut-circle-wrap">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-600 transition-all duration-700 ease-out"
                    strokeDasharray={`${totalProgressPercent}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="ppa-donut-center-text">
                  <span className="ppa-donut-percent">{totalProgressPercent}%</span>
                </div>
              </div>

              {/* Progress Live Checklist */}
              <div className="ppa-checklist-items">
                <div className={`ppa-check-item ${unlockedGame > 1 ? 'completed' : activeGame === 1 ? 'active' : ''}`}>
                  <div className="ppa-check-dot-icon">
                    {unlockedGame > 1 ? '✓' : ''}
                  </div>
                  <span>Quick Quiz ({unlockedGame > 1 ? '5/5' : `${quizIdx}/5`})</span>
                </div>

                <div className={`ppa-check-item ${unlockedGame > 2 ? 'completed' : activeGame === 2 ? 'active' : ''}`}>
                  <div className="ppa-check-dot-icon">
                    {unlockedGame > 2 ? '✓' : ''}
                  </div>
                  <span>Puzzle Challenge ({unlockedGame > 2 ? '3/3' : `${puzzleIdx}/3`})</span>
                </div>

                <div className={`ppa-check-item ${unlockedGame > 3 ? 'completed' : activeGame === 3 ? 'active' : ''}`}>
                  <div className="ppa-check-dot-icon">
                    {unlockedGame > 3 ? '✓' : ''}
                  </div>
                  <span>Match Code ({Object.keys(matchedPairs).length}/5)</span>
                </div>

                <div className={`ppa-check-item ${missionDone ? 'completed' : activeGame === 4 ? 'active' : ''}`}>
                  <div className="ppa-check-dot-icon">
                    {missionDone ? '✓' : ''}
                  </div>
                  <span>Real-Life Mission ({missionDone ? '2/2' : `${missionIdx}/2`})</span>
                </div>

                
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          HELP SYSTEM MODAL: "Need Help? Choose how you want to understand this question."
          ══════════════════════════════════════════════════════════════════ */}
      {isHelpOpen && (
        <div className="ppa-help-backdrop" onClick={() => setIsHelpOpen(false)}>
          <div className="ppa-help-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Top Header */}
            <div className="ppa-help-header">
              <div className="ppa-help-header-info">
                <div className="ppa-help-icon-badge">
                  <HelpCircle className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="ppa-help-title">Need Help?</h3>
                  <p className="ppa-help-subtitle">
                    Choose how you want to understand this question.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="ppa-help-close-btn"
                onClick={() => setIsHelpOpen(false)}
                title="Close help"
              >
                ✕
              </button>
            </div>

            {/* View 1: 4 Options Menu */}
            {helpTab === 'menu' && (
              <div className="ppa-help-options-grid">
                {/* Option 1: Get a Hint */}
                <button
                  type="button"
                  className="ppa-help-option-card card-hint"
                  onClick={() => setHelpTab('hint')}
                >
                  <div className="ppa-help-card-icon-box box-hint">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="ppa-help-card-text">
                    <div className="ppa-help-card-title">Get a Hint</div>
                    <div className="ppa-help-card-sub">Ek chhota clue milega.</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
                </button>

                {/* Option 2: See an Example */}
                <button
                  type="button"
                  className="ppa-help-option-card card-example"
                  onClick={() => setHelpTab('example')}
                >
                  <div className="ppa-help-card-icon-box box-example">
                    <Code2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ppa-help-card-text">
                    <div className="ppa-help-card-title">See an Example</div>
                    <div className="ppa-help-card-sub">Similar solved example dikhega.</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
                </button>

                {/* Option 3: Explain in Hindi / English */}
                <button
                  type="button"
                  className="ppa-help-option-card card-explain"
                  onClick={() => setHelpTab('explain')}
                >
                  <div className="ppa-help-card-icon-box box-explain">
                    <Languages className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="ppa-help-card-text">
                    <div className="ppa-help-card-title">Explain in Hindi / English</div>
                    <div className="ppa-help-card-sub">Pehle se likhi hui explanation dikhegi.</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
                </button>

                {/* Option 4: Report a Question */}
                <button
                  type="button"
                  className="ppa-help-option-card card-report"
                  onClick={() => setHelpTab('report')}
                >
                  <div className="ppa-help-card-icon-box box-report">
                    <Flag className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="ppa-help-card-text">
                    <div className="ppa-help-card-title">Report a Question</div>
                    <div className="ppa-help-card-sub">Galat ya confusing question report kar sakega.</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
                </button>
              </div>
            )}

            {/* View 2: Hint Detail */}
            {helpTab === 'hint' && (
              <div className="ppa-help-detail-view">
                <button
                  type="button"
                  className="ppa-help-back-link"
                  onClick={() => setHelpTab('menu')}
                >
                  ← Back to Help options
                </button>

                <div className="ppa-help-detail-card">
                  <div className="ppa-help-mascot-speech-row">
                    <img
                      src="/images/dashboard/ai_mentor_boy_mascot.png"
                      alt="AI Mentor Boy"
                      className="ppa-help-mascot-thumb"
                    />
                    <div className="ppa-help-bubble">
                      <span className="ppa-help-tag-pill amber">💡 Mentor's Clue</span>
                      <p className="ppa-help-body-text">{currentHelpData.hintEn}</p>
                      {currentHelpData.hintHi && (
                        <div className="ppa-help-hindi-sub-box">
                          <span className="font-bold text-slate-700">🇮🇳 सरल संकेत: </span>
                          <span className="text-slate-700">{currentHelpData.hintHi}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="ppa-help-actions-row">
                    <button
                      type="button"
                      className="ppa-help-sub-action-btn"
                      onClick={() => setHelpTab('example')}
                    >
                      <span>Still stuck? See a Solved Example →</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Example Detail */}
            {helpTab === 'example' && (
              <div className="ppa-help-detail-view">
                <button
                  type="button"
                  className="ppa-help-back-link"
                  onClick={() => setHelpTab('menu')}
                >
                  ← Back to Help options
                </button>

                <div className="ppa-help-detail-card">
                  <span className="ppa-help-tag-pill blue">🔍 Similar Solved Example</span>
                  <p className="text-xs text-slate-600 -mt-1">
                    Ye example dekh kar samjho ki similar problem Python me kaise solve hoti hai:
                  </p>

                  <div className="ppa-help-code-snippet">
                    <pre><code>{currentHelpData.exampleCode}</code></pre>
                  </div>

                  <div className="ppa-help-example-note">
                    <strong className="text-slate-800">Kaise kaam karta hai: </strong>
                    <span>{currentHelpData.exampleNote}</span>
                  </div>

                  <div className="ppa-help-actions-row">
                    <button
                      type="button"
                      className="ppa-help-sub-action-btn"
                      onClick={() => setHelpTab('explain')}
                    >
                      <span>Read detailed explanation in Hindi / English →</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Explanation Detail (Bilingual Hindi / English) */}
            {helpTab === 'explain' && (
              <div className="ppa-help-detail-view">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="ppa-help-back-link"
                    onClick={() => setHelpTab('menu')}
                  >
                    ← Back to Help options
                  </button>

                  {/* Language Toggle: English vs Hindi */}
                  <div className="ppa-help-lang-switch">
                    <button
                      type="button"
                      className={`ppa-lang-pill ${helpLang === 'hi' ? 'active' : ''}`}
                      onClick={() => setHelpLang('hi')}
                    >
                      🇮🇳 हिंदी
                    </button>
                    <button
                      type="button"
                      className={`ppa-lang-pill ${helpLang === 'en' ? 'active' : ''}`}
                      onClick={() => setHelpLang('en')}
                    >
                      🇬🇧 English
                    </button>
                  </div>
                </div>

                <div className="ppa-help-detail-card">
                  <span className="ppa-help-tag-pill indigo">
                    {helpLang === 'hi' ? '📖 पूरी व्याख्या (Complete Explanation)' : '📖 Concept Breakdown'}
                  </span>

                  {helpLang === 'hi' ? (
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 mb-1">
                        {currentHelpData.explainTitleHi}
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-xs whitespace-pre-line">
                        {currentHelpData.explainTextHi}
                      </p>
                      {currentHelpData.realWorldHi && (
                        <div className="mt-2.5 p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900">
                          <strong>🌐 Real-Life Udaharan: </strong>
                          {currentHelpData.realWorldHi}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 mb-1">
                        {currentHelpData.explainTitleEn}
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-xs whitespace-pre-line">
                        {currentHelpData.explainTextEn}
                      </p>
                      {currentHelpData.realWorldEn && (
                        <div className="mt-2.5 p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900">
                          <strong>🌐 Real-World Context: </strong>
                          {currentHelpData.realWorldEn}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* View 5: Report a Question */}
            {helpTab === 'report' && (
              <div className="ppa-help-detail-view">
                <button
                  type="button"
                  className="ppa-help-back-link"
                  onClick={() => setHelpTab('menu')}
                >
                  ← Back to Help options
                </button>

                <div className="ppa-help-detail-card">
                  {reportSuccess ? (
                    <div className="ppa-report-success-box">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <h4 className="text-sm font-extrabold text-emerald-900">Report Submitted!</h4>
                      <p className="text-xs text-emerald-700 mt-1 max-w-sm mx-auto">
                        Shukriya! Humari academic team is question ko verify karke update karegi.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleReportSubmit} className="ppa-report-form">
                      <span className="ppa-help-tag-pill rose">🚩 Report Question</span>
                      <p className="text-xs text-slate-600 mt-1 mb-2">
                        Is question me kya dikkat hai? Sahi option choose karein:
                      </p>

                      <div className="ppa-report-reasons-list">
                        {[
                          'Galat answer marked hai (Wrong answer)',
                          'Typo ya spelling mistake hai',
                          'Question confusing ya adhura hai',
                          'Buttons ya code display nahi ho raha',
                          'Dusra issue (Other)'
                        ].map((reason, idx) => (
                          <label key={idx} className="ppa-report-reason-item">
                            <input
                              type="radio"
                              name="reportReason"
                              value={reason}
                              checked={reportReason === reason}
                              onChange={(e) => setReportReason(e.target.value)}
                            />
                            <span>{reason}</span>
                          </label>
                        ))}
                      </div>

                      <textarea
                        className="ppa-report-textarea"
                        placeholder="Aur detail likhna chahein toh yahan batayein (optional)..."
                        rows={2}
                        value={reportDetails}
                        onChange={(e) => setReportDetails(e.target.value)}
                      />

                      <div className="flex items-center justify-end gap-2 mt-3">
                        <button
                          type="button"
                          className="ppa-btn-reset"
                          onClick={() => setHelpTab('menu')}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ppa-btn-submit-action"
                          disabled={!reportReason}
                        >
                          <span>Submit Report</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
