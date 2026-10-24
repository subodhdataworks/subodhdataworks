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
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { getTopicHierarchyInfo } from './PythonChapterView';
import { getModule01TopicData, TopicAssessmentData } from './data/module01TopicContent';

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

  // Active game (1: Quick Quiz, 2: Puzzle Challenge, 3: Match the Code, 4: Real-Life Mission)
  const [activeGame, setActiveGame] = useState<number>(1);
  const [unlockedGame, setUnlockedGame] = useState<number>(1);

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME 1: QUICK QUIZ STATE (5 Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [selectedQuizKey, setSelectedQuizKey] = useState<string | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizSeconds, setQuizSeconds] = useState<number>(25);

  const quizQuestions = useMemo(() => {
    if (topicData?.mcqs && topicData.mcqs.length >= 5) {
      return topicData.mcqs.slice(0, 5);
    }
    return [
      {
        id: 1,
        question: 'A computer follows instructions to complete a task. What is this process called?',
        options: [
          { key: 'A' as const, text: 'Programming' },
          { key: 'B' as const, text: 'Browsing' },
          { key: 'C' as const, text: 'Charging' },
          { key: 'D' as const, text: 'Printing' },
        ],
        correct: 0,
        explanation: 'Programming is the process of creating a set of instructions that tell a computer how to perform a task.',
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

  // Handle Quiz Selection & Auto-Next
  const handleSelectQuizOption = (key: string, optIdx: number) => {
    if (quizFeedback === 'correct') return;
    setSelectedQuizKey(key);
    soundEffects.playClick();

    const currQ = quizQuestions[quizIdx];
    const isRight = optIdx === currQ.correct;

    if (isRight) {
      setQuizFeedback('correct');
      soundEffects.playQuizCorrect();
      setQuizScore((s) => s + 10);

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
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME 2: PUZZLE CHALLENGE STATE (3 Challenges)
  // ─────────────────────────────────────────────────────────────────────────────
  const [puzzleIdx, setPuzzleIdx] = useState<number>(0);
  const [puzzleSeconds, setPuzzleSeconds] = useState<number>(150);
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
  const [matchStatus, setMatchStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

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

      // Check if all 5 matched
      if (Object.keys(nextMatches).length === matchPairs.length) {
        setMatchStatus('correct');
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
    setMatchStatus('idle');
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

    if (missionIdx === 0) {
      setTimeout(() => {
        setMissionIdx(1);
        setMissionDone(false);
      }, 1500);
    } else {
      // All 4 games completed!
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

  return (
    <div className="ppa-container">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP 5-STEP SUB-STEPPER BAR (Pills 1 to 5)
          ───────────────────────────────────────────────────────────── */}
      <nav className="ppa-stepper-bar" aria-label="Practice Sub-Steps">
        {/* Step 1: Quick Quiz */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 1 ? 'active' : ''}`}
          onClick={() => setActiveGame(1)}
        >
          <div className={`ppa-step-circle-badge ${unlockedGame > 1 ? 'completed' : 'quiz'}`}>
            {unlockedGame > 1 ? <Check className="w-4 h-4 stroke-[3]" /> : '1'}
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Quick Quiz</span>
            <span className="ppa-step-sub">{unlockedGame > 1 ? '5/5 Done' : '5 Questions'}</span>
          </div>
        </button>

        <span className="ppa-step-arrow">→</span>

        {/* Step 2: Puzzle Challenge */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 2 ? 'active' : ''}`}
          disabled={unlockedGame < 2}
          onClick={() => setActiveGame(2)}
        >
          <div className={`ppa-step-circle-badge ${unlockedGame > 2 ? 'completed' : unlockedGame >= 2 ? 'puzzle' : 'locked'}`}>
            {unlockedGame > 2 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : unlockedGame >= 2 ? (
              <Puzzle className="w-4 h-4" />
            ) : (
              <Lock className="w-3.5 h-3.5" />
            )}
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Puzzle Challenge</span>
            <span className="ppa-step-sub">{unlockedGame > 2 ? '3/3 Done' : '3 Challenges'}</span>
          </div>
        </button>

        <span className="ppa-step-arrow">→</span>

        {/* Step 3: Match the Code */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 3 ? 'active' : ''}`}
          disabled={unlockedGame < 3}
          onClick={() => setActiveGame(3)}
        >
          <div className={`ppa-step-circle-badge ${unlockedGame > 3 ? 'completed' : unlockedGame >= 3 ? 'match' : 'locked'}`}>
            {unlockedGame > 3 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : unlockedGame >= 3 ? (
              <Code2 className="w-4 h-4" />
            ) : (
              <Lock className="w-3.5 h-3.5" />
            )}
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Match the Code</span>
            <span className="ppa-step-sub">{unlockedGame > 3 ? '5/5 Done' : '5 Matches'}</span>
          </div>
        </button>

        <span className="ppa-step-arrow">→</span>

        {/* Step 4: Real-Life Mission */}
        <button
          type="button"
          className={`ppa-step-item ${activeGame === 4 ? 'active' : ''}`}
          disabled={unlockedGame < 4}
          onClick={() => setActiveGame(4)}
        >
          <div className={`ppa-step-circle-badge ${missionDone ? 'completed' : unlockedGame >= 4 ? 'mission' : 'locked'}`}>
            {missionDone ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : unlockedGame >= 4 ? (
              <Target className="w-4 h-4" />
            ) : (
              <Lock className="w-3.5 h-3.5" />
            )}
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Real-Life Mission</span>
            <span className="ppa-step-sub">{missionDone ? '2/2 Done' : '2 Missions'}</span>
          </div>
        </button>

        <span className="ppa-step-arrow">→</span>

        {/* Step 5: Coding Practice (If Available) */}
        <button
          type="button"
          className="ppa-step-item"
          disabled={true}
          title="Full IDE Coding Practice available in advanced chapters"
        >
          <div className="ppa-step-circle-badge locked">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <div className="ppa-step-meta">
            <span className="ppa-step-name">Coding Practice</span>
            <span className="ppa-step-sub">If Available</span>
          </div>
        </button>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN ARENA STAGE (Left 3D Pedestal, Center Game, Right AI Mentor)
          ───────────────────────────────────────────────────────────── */}
      <div className="ppa-arena-stage">
        {/* Left Column: 3D Python Pedestal */}
        <aside className="ppa-pedestal-col" aria-label="3D Python Pedestal">
          <img
            src="/images/dashboard/pedestal_left_feathered.png"
            alt="3D Glowing Python Sphere"
            className="ppa-pedestal-img"
          />
        </aside>

        {/* Center Column: Active Game Main Card */}
        <main className="ppa-main-card">
          {/* ════════════════════════════════════════════════════════════
              HEADER ROW (Icon, Title, Subtitle, Timer, Progress, Points)
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
                {activeGame === 1 && <FileText className="w-6 h-6" />}
                {activeGame === 2 && <Puzzle className="w-6 h-6" />}
                {activeGame === 3 && <Code2 className="w-6 h-6" />}
                {activeGame === 4 && <Target className="w-6 h-6" />}
              </div>

              <div className="ppa-header-titles">
                <span className="ppa-practice-counter-pill">Practice {activeGame} of 4</span>
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
                  {activeGame === 1 && 'Test your understanding with 5 interactive questions.'}
                  {activeGame === 2 && 'Arrange the code blocks in the correct order to complete the program.'}
                  {activeGame === 3 && 'Match each Python code with its correct meaning, output or purpose.'}
                  {activeGame === 4 && 'Solve real-world problems using your Python knowledge.'}
                </p>
              </div>
            </div>

            <div className="ppa-header-right">
              {/* Clock Timer */}
              <div className="ppa-timer-pill">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>
                  {activeGame === 1 && `00:${quizSeconds < 10 ? '0' : ''}${quizSeconds}`}
                  {activeGame === 2 && '02:30'}
                  {activeGame === 3 && '01:45'}
                  {activeGame === 4 && '04:30'}
                </span>
              </div>

              {/* Progress counter & mini bar */}
              <div className="ppa-progress-counter-box">
                <span className="ppa-pcb-label">
                  {activeGame === 1 && `Question ${quizIdx + 1} / 5`}
                  {activeGame === 2 && `Challenge ${puzzleIdx + 1} / 3`}
                  {activeGame === 3 && `Match ${Object.keys(matchedPairs).length} / 5`}
                  {activeGame === 4 && `Mission ${missionIdx + 1} / 2`}
                </span>
                <div className="ppa-pcb-track">
                  <div
                    className="ppa-pcb-bar"
                    style={{
                      width:
                        activeGame === 1
                          ? `${((quizIdx + 1) / 5) * 100}%`
                          : activeGame === 2
                          ? `${((puzzleIdx + 1) / 3) * 100}%`
                          : activeGame === 3
                          ? `${(Object.keys(matchedPairs).length / 5) * 100}%`
                          : `${((missionIdx + 1) / 2) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Points Pill */}
              <div className="ppa-points-pill">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>
                  {activeGame === 1 && '+10 Points for correct answer'}
                  {activeGame === 2 && '+15 Points for correct answer'}
                  {activeGame === 3 && '+10 Points for correct match'}
                  {activeGame === 4 && '+25 Points for correct solution'}
                </span>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════
              GAME 1: QUICK QUIZ VIEW (Image 2 Match)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 1 && (
            <div className="ppa-quiz-container flex flex-col gap-4">
              <div className="ppa-prompt-banner">
                <div className="ppa-prompt-tag">
                  <Lightbulb className="w-3.5 h-3.5 fill-amber-300" />
                  <span>QUESTION {quizIdx + 1} — CONCEPT CHALLENGE</span>
                </div>
                <h3 className="ppa-prompt-question">
                  {quizQuestions[quizIdx]?.question}
                </h3>
              </div>

              <div className="ppa-quiz-options-grid">
                {quizQuestions[quizIdx]?.options.map((opt, optIdx) => {
                  const isSelected = selectedQuizKey === opt.key;
                  const isCorrect = isSelected && quizFeedback === 'correct';
                  const isWrong = isSelected && quizFeedback === 'wrong';

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      className={`ppa-quiz-opt-btn ${isSelected ? 'selected' : ''} ${
                        isCorrect ? 'correct' : ''
                      } ${isWrong ? 'wrong' : ''}`}
                      onClick={() => handleSelectQuizOption(opt.key, optIdx)}
                      disabled={quizFeedback === 'correct'}
                    >
                      <div className="ppa-opt-key-badge">{opt.key}</div>
                      <span>{opt.text}</span>
                      {isCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              GAME 2: PUZZLE CHALLENGE VIEW (Image 1 Match)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 2 && (
            <div className="ppa-puzzle-container flex flex-col gap-4">
              <div className="ppa-prompt-banner">
                <div className="ppa-prompt-tag">
                  <Lightbulb className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{currentPuzzle.title}</span>
                </div>
                <h3 className="ppa-prompt-question">{currentPuzzle.prompt}</h3>
              </div>

              <div className="ppa-puzzle-grid">
                {/* Left: Code Blocks */}
                <div className="ppa-puzzle-col">
                  <span className="ppa-puzzle-col-title">Code Blocks (Drag or tap to arrange)</span>
                  <div className="ppa-blocks-deck">
                    {puzzleAvailableTokens.map((tok, i) => (
                      <div
                        key={i}
                        className="ppa-puzzle-block-pill"
                        onClick={() => handleAddPuzzleToken(tok, i)}
                        title="Tap to place in answer"
                      >
                        <span className="ppa-block-grip-dots">:::</span>
                        <span>{tok}</span>
                      </div>
                    ))}
                    {puzzleAvailableTokens.length === 0 && (
                      <div className="p-3 text-center text-xs text-slate-400 italic">
                        All blocks placed in slots!
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Drop Slots */}
                <div className="ppa-puzzle-col">
                  <span className="ppa-puzzle-col-title">Your Answer (Drop blocks here in correct order)</span>
                  <div className="ppa-slots-deck">
                    {placedSlots.map((tok, i) => (
                      <div
                        key={i}
                        className={`ppa-puzzle-slot-row ${tok ? 'filled' : ''}`}
                        onClick={() => tok && handleRemovePuzzleSlot(i)}
                        title={tok ? 'Tap to remove block' : 'Drop slot'}
                      >
                        <span className="ppa-slot-index-pill">{i + 1}</span>
                        {tok ? (
                          <span className="font-mono text-xs font-bold text-purple-900">{tok}</span>
                        ) : (
                          <span className="ppa-slot-placeholder-text">Drop a block here</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              GAME 3: MATCH THE CODE VIEW (Image 3 Match)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 3 && (
            <div className="ppa-match-container flex flex-col gap-4">
              <div className="ppa-prompt-banner">
                <div className="ppa-prompt-tag">
                  <Lightbulb className="w-3.5 h-3.5 fill-amber-300" />
                  <span>MATCH 1 TO 5 — PYTHON SYNTAX &amp; CONCEPTS</span>
                </div>
                <h3 className="ppa-prompt-question">
                  Tap a code snippet on the left, then tap its matching purpose on the right.
                </h3>
              </div>

              <div className="ppa-match-grid">
                {/* Left: Code Snippets */}
                <div>
                  <span className="ppa-puzzle-col-title">Code Snippets</span>
                  {matchPairs.map((pair) => {
                    const isSelected = selectedSnippet === pair.snippet;
                    const isAlreadyMatched = Object.values(matchedPairs).includes(pair.snippet);
                    if (isAlreadyMatched) return null;

                    return (
                      <div
                        key={pair.id}
                        className={`ppa-snippet-card ${pair.cls} ${isSelected ? 'ring-2 ring-blue-500 scale-102' : ''}`}
                        onClick={() => handleSelectSnippet(pair.snippet)}
                        title="Click to select this snippet"
                      >
                        <span className="text-slate-400 font-bold">:::</span>
                        <code>{pair.snippet}</code>
                      </div>
                    );
                  })}
                  {Object.keys(matchedPairs).length === matchPairs.length && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-xs text-center">
                      🎉 All 5 snippets matched perfectly!
                    </div>
                  )}
                </div>

                {/* Right: Meanings & Drop Slots */}
                <div>
                  <span className="ppa-puzzle-col-title">Meanings / Outputs (Drag the correct code here)</span>
                  {matchPairs.map((pair) => {
                    const matchedSnippet = matchedPairs[pair.id];
                    return (
                      <div
                        key={pair.id}
                        className="ppa-meaning-row"
                        onClick={() => handlePlaceMatch(pair.id)}
                      >
                        <div className="ppa-meaning-left">
                          <span className="font-extrabold text-xs text-slate-500">{pair.id}</span>
                          <span className="ppa-meaning-text">{pair.meaning}</span>
                        </div>
                        <div className={`ppa-meaning-drop-slot ${matchedSnippet ? 'filled' : ''}`}>
                          {matchedSnippet ? matchedSnippet : 'Drop code here'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              GAME 4: REAL-LIFE MISSION VIEW (Image 4 Match)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 4 && (
            <div className="ppa-mission-container flex flex-col gap-4">
              <div className="ppa-mission-grid">
                {/* Left: Scenario & Product List Table */}
                <div className="ppa-scenario-card">
                  <div className="ppa-scenario-title">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Scenario</span>
                  </div>
                  <p className="ppa-scenario-desc">
                    You are working with a small e-commerce company. They have a list of product prices and want to find:
                  </p>
                  <div className="ppa-scenario-quote-box">
                    &ldquo;Which products have a price greater than ₹500, and show their names and prices.&rdquo;
                  </div>

                  <strong className="text-xs font-bold text-slate-800 mt-2 block">
                    Product List (products)
                  </strong>
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
                      Your Task: Write Python code to filter and display products with price &gt; 500.
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
                    rows={12}
                    value={missionCode}
                    onChange={(e) => setMissionCode(e.target.value)}
                  />

                  {missionOutput && (
                    <div className="p-3 bg-black/60 border-t border-slate-700 text-xs font-mono text-emerald-400">
                      <strong>Console Output:</strong>
                      <pre className="mt-1">{missionOutput}</pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════
              CARD FOOTER CONTROLS (Previous, Reset, Check / Submit)
              ════════════════════════════════════════════════════════════ */}
          <div className="ppa-card-footer">
            <button
              type="button"
              className="ppa-btn-prev"
              disabled={activeGame === 1}
              onClick={() => setActiveGame((g) => Math.max(1, g - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {activeGame === 2 && (
              <button
                type="button"
                className="ppa-btn-reset"
                onClick={handleResetPuzzle}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            {activeGame === 3 && (
              <button
                type="button"
                className="ppa-btn-reset"
                onClick={handleResetMatches}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}

            {/* Action Button: Check Answer / Submit */}
            {activeGame === 1 && (
              <button
                type="button"
                className="ppa-btn-submit-action"
                disabled={!selectedQuizKey}
                onClick={() => {
                  const optIdx = quizQuestions[quizIdx]?.options.findIndex((o) => o.key === selectedQuizKey);
                  if (optIdx !== -1 && selectedQuizKey) {
                    handleSelectQuizOption(selectedQuizKey, optIdx);
                  }
                }}
              >
                <span>Submit Answer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {activeGame === 2 && (
              <button
                type="button"
                className="ppa-btn-submit-action"
                disabled={placedSlots.some((s) => s === null)}
                onClick={handleCheckPuzzleAnswer}
              >
                <span>Check Answer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {activeGame === 3 && (
              <button
                type="button"
                className="ppa-btn-submit-action"
                disabled={Object.keys(matchedPairs).length < matchPairs.length}
                onClick={() => {
                  setUnlockedGame(4);
                  setActiveGame(4);
                }}
              >
                <span>Next to Mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {activeGame === 4 && (
              <button
                type="button"
                className="ppa-btn-submit-action"
                onClick={handleSubmitMissionSolution}
              >
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Submit Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </main>

        {/* ─────────────────────────────────────────────────────────────
            3. RIGHT COLUMN: AI MENTOR HINT & YOUR PROGRESS
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
              className="ppa-watch-video-btn"
              onClick={onBackToVideo}
              title="Watch Explanation Video"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Explanation Video</span>
            </button>
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
                <span className="ppa-donut-percentage">{totalProgressPercent}%</span>
              </div>

              {/* Checklist */}
              <div className="ppa-progress-checklist">
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
                  <span>Match the Code ({Object.keys(matchedPairs).length}/5)</span>
                </div>

                <div className={`ppa-check-item ${missionDone ? 'completed' : activeGame === 4 ? 'active' : ''}`}>
                  <div className="ppa-check-dot-icon">
                    {missionDone ? '✓' : ''}
                  </div>
                  <span>Real-Life Mission ({missionDone ? '2/2' : `${missionIdx}/2`})</span>
                </div>

                <div className="ppa-check-item opacity-50">
                  <div className="ppa-check-dot-icon" />
                  <span>Coding Practice (If Available)</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
