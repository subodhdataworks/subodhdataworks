import React, { useState, useEffect, useRef } from 'react';
import {
  Check, Lock, Play, FileText, Gamepad2, Code, Mic, Trophy,
  Clock, AlertCircle, Sparkles, ChevronRight, Lightbulb, Volume2, VolumeX,
  Bot, Bell, ChevronDown, ArrowRight
} from 'lucide-react';
import { soundEffects } from '../../services/soundEffects';
import './PracticeMcqLab.css';

export interface McqQuestionItem {
  id: number;
  tag: string;
  question: string;
  subtitle?: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    code: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  whyPoints: string[];
}

export const MCQ_PRACTICE_QUESTIONS: McqQuestionItem[] = [
  {
    id: 1,
    tag: 'MCQ',
    question: 'What is Python?',
    subtitle: 'Select the correct answer.',
    options: [
      { letter: 'A', code: 'A high-level, interpreted, general-purpose programming language.', isCorrect: true },
      { letter: 'B', code: 'A low-level, compiled programming language.', isCorrect: false },
      { letter: 'C', code: 'A language used only for web development.', isCorrect: false },
      { letter: 'D', code: 'A high-level, compiled language primarily used for mobile apps.', isCorrect: false }
    ],
    explanation: 'Python is a high-level, interpreted, general-purpose programming language. It is easy to learn, has readable syntax, and is widely used in web development, data analysis, AI, automation, and more.',
    whyPoints: [
      'High-level language',
      'Interpreted (no compilation needed)',
      'General-purpose (used in many fields)'
    ]
  },
  {
    id: 2,
    tag: 'MCQ',
    question: 'Which built-in function displays text or data to the terminal in Python?',
    subtitle: 'Select the correct function.',
    options: [
      { letter: 'A', code: 'console.log()', isCorrect: false },
      { letter: 'B', code: 'print()', isCorrect: true },
      { letter: 'C', code: 'echo', isCorrect: false },
      { letter: 'D', code: 'System.out.println()', isCorrect: false }
    ],
    explanation: 'print() is Python’s standard built-in function to display text, evaluated variables, and data structures to standard output.',
    whyPoints: [
      'print() displays data to stdout',
      'Accepts comma-separated arguments',
      'Appends a newline automatically'
    ]
  },
  {
    id: 3,
    tag: 'MCQ',
    question: 'Which of the following is the correct way to create a variable in Python?',
    subtitle: 'Select the valid syntax.',
    options: [
      { letter: 'A', code: 'name = "Python"', isCorrect: true },
      { letter: 'B', code: 'var name = "Python"', isCorrect: false },
      { letter: 'C', code: '1name = "Python"', isCorrect: false },
      { letter: 'D', code: 'name := "Python"', isCorrect: false }
    ],
    explanation: 'In Python, we create a variable using a name followed by an = sign and a value. Variable names cannot start with a digit and require no var keyword.',
    whyPoints: [
      'Direct assignment with = operator',
      'Dynamic typing (no keyword required)',
      'Identifiers must begin with letter or _'
    ]
  },
  {
    id: 4,
    tag: 'MCQ',
    question: 'Which of the following is an INVALID variable identifier in Python?',
    subtitle: 'Identify the illegal variable name.',
    options: [
      { letter: 'A', code: 'total_score', isCorrect: false },
      { letter: 'B', code: '2nd_user', isCorrect: true },
      { letter: 'C', code: '_user_id', isCorrect: false },
      { letter: 'D', code: 'StudentName', isCorrect: false }
    ],
    explanation: 'Variable names in Python cannot start with a number (e.g. 2nd_user is invalid). They must start with a letter (a-z, A-Z) or an underscore (_).',
    whyPoints: [
      'Cannot start with a numeric digit',
      'Underscore _ is allowed anywhere',
      'Case-sensitive in all environments'
    ]
  },
  {
    id: 5,
    tag: 'MCQ',
    question: 'What data type does the numerical value 42.5 represent in Python?',
    subtitle: 'Select the Python data type.',
    options: [
      { letter: 'A', code: 'int', isCorrect: false },
      { letter: 'B', code: 'float', isCorrect: true },
      { letter: 'C', code: 'str', isCorrect: false },
      { letter: 'D', code: 'bool', isCorrect: false }
    ],
    explanation: 'Numbers containing fractional decimal points in Python belong to the float (floating point) data type.',
    whyPoints: [
      'float handles decimal values',
      'int only stores whole integers',
      'Dynamic float conversion on division'
    ]
  },
  {
    id: 6,
    tag: 'MCQ',
    question: 'Which symbol is used for writing single-line comments in Python?',
    subtitle: 'Select the comment character.',
    options: [
      { letter: 'A', code: '//', isCorrect: false },
      { letter: 'B', code: '#', isCorrect: true },
      { letter: 'C', code: '/*', isCorrect: false },
      { letter: 'D', code: '--', isCorrect: false }
    ],
    explanation: 'In Python, the hash symbol (#) marks the start of a single-line comment. The interpreter ignores everything following # on that line.',
    whyPoints: [
      '# indicates comment start',
      'Ignored by Python interpreter',
      'Useful for documentation and notes'
    ]
  },
  {
    id: 7,
    tag: 'MCQ',
    question: 'What will be the output of print("Data" + " " + "Analyst")?',
    subtitle: 'Evaluate string concatenation.',
    options: [
      { letter: 'A', code: 'DataAnalyst', isCorrect: false },
      { letter: 'B', code: 'Data Analyst', isCorrect: true },
      { letter: 'C', code: 'Error: Cannot add strings', isCorrect: false },
      { letter: 'D', code: '["Data", "Analyst"]', isCorrect: false }
    ],
    explanation: 'The + operator between strings performs concatenation, joining "Data", " ", and "Analyst" into "Data Analyst".',
    whyPoints: [
      '+ concatenates strings sequentially',
      'Preserves whitespace characters',
      'Returns a single merged string'
    ]
  },
  {
    id: 8,
    tag: 'MCQ',
    question: 'How do you accept user input from the console in Python 3?',
    subtitle: 'Select the input function.',
    options: [
      { letter: 'A', code: 'scan()', isCorrect: false },
      { letter: 'B', code: 'input()', isCorrect: true },
      { letter: 'C', code: 'get()', isCorrect: false },
      { letter: 'D', code: 'read()', isCorrect: false }
    ],
    explanation: 'input() is the standard Python 3 built-in function to capture keyboard input from the user as a string.',
    whyPoints: [
      'input() captures terminal input',
      'Always returns data as string type',
      'Can display an optional prompt message'
    ]
  },
  {
    id: 9,
    tag: 'MCQ',
    question: 'Which of the following is a boolean literal in Python?',
    subtitle: 'Select the valid boolean value.',
    options: [
      { letter: 'A', code: 'true', isCorrect: false },
      { letter: 'B', code: 'True', isCorrect: true },
      { letter: 'C', code: 'TRUE', isCorrect: false },
      { letter: 'D', code: '1b', isCorrect: false }
    ],
    explanation: 'In Python, boolean literals must be capitalized: True and False. Lowercase true or uppercase TRUE will raise a NameError.',
    whyPoints: [
      'Capitalized True and False',
      'Subclass of integer (1 and 0)',
      'Used for conditional logic & branching'
    ]
  },
  {
    id: 10,
    tag: 'MCQ',
    question: 'Which function converts a numeric string like "100" into an integer?',
    subtitle: 'Select the type conversion function.',
    options: [
      { letter: 'A', code: 'to_int("100")', isCorrect: false },
      { letter: 'B', code: 'int("100")', isCorrect: true },
      { letter: 'C', code: 'parse("100")', isCorrect: false },
      { letter: 'D', code: 'Integer("100")', isCorrect: false }
    ],
    explanation: 'int() is Python’s type casting function used to convert strings or floats into whole integers.',
    whyPoints: [
      'int() casts valid strings to integer',
      'Raises ValueError if string contains letters',
      'Essential when processing input() data'
    ]
  }
];

interface PracticeMcqLabProps {
  userName?: string;
  onBack: () => void;
  onUnlockNextStage: () => void;
  onSelectStep: (stepId: 'learn' | 'practice' | 'play' | 'code' | 'interview' | 'score') => void;
  onOpenAdvisor?: () => void;
}

export const PracticeMcqLab: React.FC<PracticeMcqLabProps> = ({
  userName = 'Rahul Sharma',
  onBack,
  onUnlockNextStage,
  onSelectStep,
  onOpenAdvisor
}) => {
  const [soundOn, setSoundOn] = useState(() => soundEffects.getSoundEnabled());
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [shakingLetter, setShakingLetter] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(582); // 09:42 matching reference
  const [autoAdvanceCount, setAutoAdvanceCount] = useState<number | null>(null);
  const [hintMessage, setHintMessage] = useState<string | null>(null);

  const autoAdvanceTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer countdown
  useEffect(() => {
    const t = setInterval(() => {
      setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // Format timer MM:SS
  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = MCQ_PRACTICE_QUESTIONS[currentQIndex];
  const selectedOptIdx = userAnswers[currentQIndex];
  const isAnswered = selectedOptIdx !== undefined;
  const isSelectedCorrect = isAnswered && currentQ.options[selectedOptIdx]?.isCorrect;

  // Cleanup auto-advance on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) clearInterval(autoAdvanceTimerRef.current);
    };
  }, []);

  // Start auto-advance: 3s -> 2s -> 1s -> next question
  const startAutoAdvance = (nextIdx: number) => {
    if (autoAdvanceTimerRef.current) clearInterval(autoAdvanceTimerRef.current);
    setAutoAdvanceCount(3);
    let count = 3;
    autoAdvanceTimerRef.current = setInterval(() => {
      count -= 1;
      if (count <= 0) {
        if (autoAdvanceTimerRef.current) clearInterval(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
        setAutoAdvanceCount(null);
        if (nextIdx < MCQ_PRACTICE_QUESTIONS.length) {
          setCurrentQIndex(nextIdx);
        } else {
          onUnlockNextStage();
        }
      } else {
        setAutoAdvanceCount(count);
      }
    }, 1000);
  };

  const handleSelectOption = (idx: number, letter: string, isCorrect: boolean) => {
    // Prevent changing answer if already answered
    if (isAnswered) return;

    if (soundOn) soundEffects.playClick();

    setUserAnswers(prev => ({ ...prev, [currentQIndex]: idx }));

    if (isCorrect) {
      if (soundOn) soundEffects.playRandomQuizPraise();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2600);
      startAutoAdvance(currentQIndex + 1);
    } else {
      if (soundOn) soundEffects.playQuizWrong();
      setShakingLetter(letter);
      setTimeout(() => setShakingLetter(null), 600);
    }
  };

  const handleManualNext = () => {
    if (!isAnswered) return; // Strict requirement: cannot click next without answering!
    if (autoAdvanceTimerRef.current) {
      clearInterval(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
      setAutoAdvanceCount(null);
    }
    if (soundOn) soundEffects.playClick();
    if (currentQIndex < MCQ_PRACTICE_QUESTIONS.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      if (soundOn) soundEffects.playCelebration();
      onUnlockNextStage();
    }
  };

  const handleQuestionDotClick = (qIdx: number) => {
    if (autoAdvanceTimerRef.current) {
      clearInterval(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
      setAutoAdvanceCount(null);
    }
    if (soundOn) soundEffects.playClick();
    setCurrentQIndex(qIdx);
  };

  const handleHintClick = () => {
    if (soundOn) soundEffects.playClick();
    const hints = [
      '💡 Python was designed for readability and simplicity! Think about whether it compiles directly to machine code or executes line-by-line.',
      '💡 Look closely at the keywords: "high-level", "interpreted", and "general-purpose".',
      '💡 Remember: Python powers web apps, AI models, and data pipelines alike!'
    ];
    setHintMessage(hints[currentQIndex % hints.length]);
    setTimeout(() => setHintMessage(null), 4000);
  };

  return (
    <div className="pml-page-wrapper">
      {/* Confetti celebration particles */}
      {showConfetti && (
        <div className="pml-confetti-container" aria-hidden="true">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className={`pml-confetti-piece pml-confetti-${(i % 5) + 1}`}
              style={{
                left: `${(i * 2.8) + Math.random() * 2}%`,
                animationDelay: `${Math.random() * 0.4}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}

      {/* =========================================================================
          1. TOP NAVIGATION BAR (Exact media_1790732740548.png)
          ========================================================================= */}
      <header className="pml-top-header">
        <div className="pml-header-left">
          {/* Future.AI Logo */}
          <div className="pml-logo-wrap" onClick={onBack} title="Back to Python Overview">
            <span className="pml-logo-accent">⚡</span>
            <span className="pml-logo-text">Future<span className="pml-logo-dot">.AI</span></span>
          </div>

          {/* Breadcrumb links */}
          <nav className="pml-breadcrumbs">
            <span className="pml-bc-bullet">•</span>
            <span className="pml-bc-item" onClick={onBack}>Python</span>
            <span className="pml-bc-sep">›</span>
            <span className="pml-bc-item" onClick={onBack}>Python Foundations</span>
            <span className="pml-bc-sep">›</span>
            <span className="pml-bc-item" onClick={onBack}>Python Introduction & Setup</span>
            <span className="pml-bc-sep">›</span>
            <span className="pml-bc-current">MCQ</span>
          </nav>
        </div>

        <div className="pml-header-right">
          {/* Sound Toggle */}
          <button
            className="pml-sound-toggle-btn"
            onClick={() => {
              const next = soundEffects.toggleSound();
              setSoundOn(next);
            }}
            title={soundOn ? 'Sound FX Enabled (Click to mute)' : 'Sound Muted (Click to unmute)'}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-sky-600" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span>{soundOn ? 'Sound ON' : 'Muted'}</span>
          </button>

          {/* Ask AI Mentor Button */}
          <button className="pml-ask-mentor-btn" onClick={onOpenAdvisor}>
            <Bot className="w-4 h-4 text-white" />
            <span>Ask AI Mentor</span>
          </button>

          {/* Notification Bell */}
          <div className="pml-bell-wrap">
            <Bell className="w-4 h-4 text-slate-600" />
            <span className="pml-bell-badge">3</span>
          </div>

          {/* User Profile */}
          <div className="pml-user-profile">
            <img
              src="/images/avatar-rahul-sharma.jpg"
              alt={userName}
              className="pml-user-avatar"
            />
            <div className="pml-user-info">
              <strong className="pml-user-name">{userName}</strong>
              <span className="pml-user-role">Learner</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. MAIN CENTRED FUTURISTIC CARD (Exact media_1790732740548.png)
          ========================================================================= */}
      <main className="pml-main-container">
        <div className="pml-card">
          
          {/* ──────────────── CARD HEADER & 6 STAGE PILLS ──────────────── */}
          <div className="pml-card-head">
            {/* Left: 3D Python Icon + Titles */}
            <div className="pml-topic-title-group">
              <div className="pml-topic-icon-box">
                <img
                  src="/images/python_logo_3d_hd.png"
                  alt="Python 3D"
                  className="pml-topic-icon-img"
                />
              </div>
              <div>
                <span className="pml-topic-subtitle">Python for Data Analysis</span>
                <h1 className="pml-topic-main-title">Python Introduction & Setup</h1>
              </div>
            </div>

            {/* Right: 6 Stage Capsules */}
            <div className="pml-stages-strip">
              {/* Stage 1: Learn */}
              <div className="pml-stage-pill completed" onClick={() => onSelectStep('learn')}>
                <div className="pml-stage-circle success">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="pml-stage-text">
                  <span className="pml-stage-name">Learn</span>
                  <span className="pml-stage-sub">Video</span>
                </div>
                <Check className="w-3.5 h-3.5 text-emerald-500 ml-1" />
              </div>

              {/* Stage 2: Practice (MCQ) - ACTIVE */}
              <div className="pml-stage-pill active">
                <div className="pml-stage-circle active-glow">
                  <span>2</span>
                </div>
                <div className="pml-stage-text">
                  <span className="pml-stage-name">Practice</span>
                  <span className="pml-stage-sub">MCQ</span>
                  <div className="pml-stage-active-line" />
                </div>
                <Lock className="w-3 h-3 text-slate-400 ml-1 opacity-60" />
              </div>

              {/* Stage 3: Play */}
              <div className="pml-stage-pill locked" onClick={() => onSelectStep('play')}>
                <div className="pml-stage-circle locked">3</div>
                <div className="pml-stage-text">
                  <span className="pml-stage-name">Play</span>
                  <span className="pml-stage-sub">Game</span>
                </div>
                <Lock className="w-3 h-3 text-slate-400 ml-1" />
              </div>

              {/* Stage 4: Code */}
              <div className="pml-stage-pill locked" onClick={() => onSelectStep('code')}>
                <div className="pml-stage-circle locked">4</div>
                <div className="pml-stage-text">
                  <span className="pml-stage-name">Code</span>
                  <span className="pml-stage-sub">Practice</span>
                </div>
                <Lock className="w-3 h-3 text-slate-400 ml-1" />
              </div>

              {/* Stage 5: Interview */}
              <div className="pml-stage-pill locked" onClick={() => onSelectStep('interview')}>
                <div className="pml-stage-circle locked">5</div>
                <div className="pml-stage-text">
                  <span className="pml-stage-name">Interview</span>
                  <span className="pml-stage-sub">AI Interview</span>
                </div>
                <Lock className="w-3 h-3 text-slate-400 ml-1" />
              </div>

              {/* Stage 6: Score */}
              <div className="pml-stage-pill locked" onClick={() => onSelectStep('score')}>
                <div className="pml-stage-circle locked">6</div>
                <div className="pml-stage-text">
                  <span className="pml-stage-name">Score</span>
                  <span className="pml-stage-sub">Get Report</span>
                </div>
                <Lock className="w-3 h-3 text-slate-400 ml-1" />
              </div>
            </div>
          </div>

          {/* ──────────────── QUESTION META & PROGRESS BAR ──────────────── */}
          <div className="pml-meta-bar">
            <div className="pml-meta-left">
              {/* Question count text */}
              <div className="pml-q-count-badge">
                <span className="pml-q-gear-icon">⚙</span>
                <span>Question {currentQIndex + 1} of {MCQ_PRACTICE_QUESTIONS.length}</span>
              </div>

              {/* Cyan capsule progress bar */}
              <div className="pml-progress-capsule-bg">
                <div
                  className="pml-progress-capsule-fill"
                  style={{ width: `${((currentQIndex + 1) / MCQ_PRACTICE_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Total questions label */}
              <div className="pml-total-label">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>10 Questions</span>
              </div>

              {/* Timer Pill */}
              <div className="pml-timer-badge">
                <Clock className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                <span>{formatTimer(timerSeconds)}</span>
              </div>
            </div>

            {/* Right Question Number Dots (1 to 10) */}
            <div className="pml-dots-row">
              {MCQ_PRACTICE_QUESTIONS.map((_, qIdx) => {
                const isCurrent = currentQIndex === qIdx;
                const isDone = userAnswers[qIdx] !== undefined;
                return (
                  <button
                    key={qIdx}
                    className={`pml-dot-btn ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}`}
                    onClick={() => handleQuestionDotClick(qIdx)}
                    title={`Go to Question ${qIdx + 1}`}
                  >
                    {isDone && !isCurrent ? (
                      <Check className="w-2.5 h-2.5 stroke-[3] text-white" />
                    ) : (
                      qIdx + 1
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ──────────────── 2-COLUMN MAIN BODY ──────────────── */}
          <div className="pml-body-grid">
            
            {/* ──── LEFT COLUMN: QUESTION + OPTIONS + FEEDBACK ──── */}
            <div className="pml-left-col">
              {/* MCQ Pill */}
              <span className="pml-mcq-tag">MCQ</span>

              {/* Question Title */}
              <h2 className="pml-question-title">{currentQ.question}</h2>

              {/* Subtitle */}
              <p className="pml-question-sub">{currentQ.subtitle || 'Select the correct answer.'}</p>

              {/* 4 Options */}
              <div className="pml-options-list">
                {currentQ.options.map(opt => {
                  const isSelected = selectedOptIdx === (opt.letter === 'A' ? 0 : opt.letter === 'B' ? 1 : opt.letter === 'C' ? 2 : 3);
                  const isOptCorrect = opt.isCorrect;
                  const isShaking = shakingLetter === opt.letter;

                  let optClass = 'unselected';
                  if (isAnswered) {
                    if (isSelected && isOptCorrect) {
                      optClass = 'correct';
                    } else if (isSelected && !isOptCorrect) {
                      optClass = 'wrong';
                    } else if (!isSelected && isOptCorrect) {
                      optClass = 'revealed-correct';
                    }
                  }

                  return (
                    <div
                      key={opt.letter}
                      className={`pml-option-card ${optClass} ${isShaking ? 'shake-anim' : ''}`}
                      onClick={() => {
                        const idx = opt.letter === 'A' ? 0 : opt.letter === 'B' ? 1 : opt.letter === 'C' ? 2 : 3;
                        handleSelectOption(idx, opt.letter, opt.isCorrect);
                      }}
                    >
                      {/* Left Letter Circle */}
                      <div className="pml-opt-letter-circle">
                        {opt.letter}
                      </div>

                      {/* Middle Text */}
                      <span className="pml-opt-text">{opt.code}</span>

                      {/* Right Radio or Checkmark Circle */}
                      <div className="pml-opt-radio-circle">
                        {isAnswered && isOptCorrect && (
                          <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                        )}
                        {isAnswered && isSelected && !isOptCorrect && (
                          <span className="pml-cross-mark">✕</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hint Toast Message */}
              {hintMessage && (
                <div className="pml-hint-toast">
                  <span>{hintMessage}</span>
                </div>
              )}

              {/* Feedback Banner (Matches media_1790732740548.png) */}
              {isAnswered && (
                <div className={`pml-feedback-banner ${isSelectedCorrect ? 'correct' : 'wrong'}`}>
                  {/* Left: Checkmark + Title + Desc */}
                  <div className="pml-fb-left">
                    <div className="pml-fb-check-circle">
                      {isSelectedCorrect ? (
                        <Check className="w-4 h-4 stroke-[3] text-white" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="pml-fb-copy">
                      <strong className="pml-fb-title">
                        {isSelectedCorrect ? 'Correct Answer!' : 'Not Quite Right!'}
                      </strong>
                      <p className="pml-fb-desc">{currentQ.explanation}</p>
                    </div>
                  </div>

                  {/* Right Sub-card: Why it's correct? */}
                  {isSelectedCorrect && (
                    <div className="pml-why-card">
                      <div className="pml-why-head">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 fill-current" />
                        <span>Why it's correct?</span>
                      </div>
                      <div className="pml-why-list">
                        {currentQ.whyPoints.map((pt, pIdx) => (
                          <div key={pIdx} className="pml-why-row">
                            <Check className="w-3 h-3 text-emerald-600 stroke-[3] flex-shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ──── RIGHT COLUMN: 3D HOLOGRAPHIC PEDESTAL ──── */}
            <div className="pml-right-col">
              <div className="pml-hologram-wrap">
                {/* Glowing backdrop halo */}
                <div className="pml-hologram-halo" />

                {/* Cropped HD 3D Hologram Pedestal Image */}
                <img
                  src="/images/mcq_hologram_pedestal.png"
                  alt="Python Holographic 3D Platform"
                  className="pml-hologram-img"
                />

                {/* Animated light particles */}
                <div className="pml-particle pml-particle-1" />
                <div className="pml-particle pml-particle-2" />
                <div className="pml-particle pml-particle-3" />
              </div>
            </div>
          </div>

          {/* ──────────────── BOTTOM ACTION FOOTER BAR ──────────────── */}
          <div className="pml-bottom-footer">
            {/* Left: Need a hint? button */}
            <button className="pml-hint-btn" onClick={handleHintClick}>
              <Lightbulb className="w-4 h-4 text-sky-500" />
              <span>Need a hint?</span>
            </button>

            {/* Center: Countdown circle animation */}
            <div className="pml-countdown-center">
              {autoAdvanceCount !== null ? (
                <div className="pml-countdown-bubble">
                  <div className="pml-countdown-ring">
                    <span className="pml-countdown-number">{autoAdvanceCount}</span>
                  </div>
                  <span className="pml-countdown-caption">Next question in...</span>
                </div>
              ) : (
                <span className="pml-countdown-idle-text">
                  {!isAnswered ? 'Select an answer to proceed' : 'Ready for next question!'}
                </span>
              )}
            </div>

            {/* Right: Next Question Button (STRICTLY DISABLED UNTIL ANSWERED) */}
            <button
              className={`pml-next-btn ${!isAnswered ? 'disabled' : 'enabled'}`}
              onClick={handleManualNext}
              disabled={!isAnswered}
              title={!isAnswered ? 'Please select an answer first to unlock the next question' : 'Proceed to next question'}
            >
              <span>{currentQIndex < MCQ_PRACTICE_QUESTIONS.length - 1 ? 'Next Question' : 'Submit & Finish Quiz'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};
