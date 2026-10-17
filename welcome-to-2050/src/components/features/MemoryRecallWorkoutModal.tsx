import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Sparkles, 
  Brain, 
  CheckCircle2, 
  AlertTriangle, 
  Timer, 
  ArrowRight, 
  Flame, 
  RotateCcw,
  Volume2,
  Award,
  Zap,
  Calendar
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import confetti from 'canvas-confetti';

export interface RecallQuestion {
  id: string;
  category: 'Python Basics' | 'Data Wrangling' | 'SQL Queries' | 'Advanced Excel' | 'Power BI';
  topicTag: string;
  question: string;
  options: string[];
  correctIndex: number;
  whyItMatters: string;
  memoryHook: string;
}

// COMPREHENSIVE 2050 RECALL QUESTION BANK (Categorized & Progress-Indexed)
const RECALL_BANK: RecallQuestion[] = [
  // Python Module 1 Foundations
  {
    id: 'rq_py_01',
    category: 'Python Basics',
    topicTag: 'py_01',
    question: 'In Python, what data type does input() ALWAYS return by default?',
    options: ['Integer (int)', 'String (str)', 'Float (float)', 'Depends on user input'],
    correctIndex: 1,
    whyItMatters: 'If you forget to cast input with int() or float(), operations like "50" + 10 will raise a fatal TypeError in production.',
    memoryHook: '💡 Memory Tattoo: "Input = Text in Quotes". Always wrap with int() or float() before arithmetic math!'
  },
  {
    id: 'rq_py_02',
    category: 'Python Basics',
    topicTag: 'py_04',
    question: 'What is the output of the Python expression: x = "10" + "20"?',
    options: ['30', '1020', 'Error', 'None'],
    correctIndex: 1,
    whyItMatters: 'The + operator between strings performs concatenation (joining text), not mathematical addition. A classic beginner analytics bug!',
    memoryHook: '💡 Memory Tattoo: Quotes glue text together ("10" + "20" = "1020"). No quotes = Real mathematical math!'
  },
  {
    id: 'rq_py_03',
    category: 'Python Basics',
    topicTag: 'py_05',
    question: 'Which of the following Python data types is IMMUTABLE (cannot be modified in-place)?',
    options: ['List []', 'Dictionary {}', 'Tuple ()', 'Set {}'],
    correctIndex: 2,
    whyItMatters: 'Tuples guarantee data integrity for fixed coordinates, database credentials, and dictionary keys because their values cannot be accidentally overwritten.',
    memoryHook: '💡 Memory Tattoo: "Tuples are Locked in Stone". Lists are open shopping bags, tuples are sealed envelopes!'
  },
  {
    id: 'rq_py_04',
    category: 'Python Basics',
    topicTag: 'py_06',
    question: 'In Python slicing [start:stop], what is true about the "stop" index coordinate?',
    options: ['It is included in the output', 'It is EXCLUDED (up to, but not including)', 'It defaults to the first item', 'It causes an index error'],
    correctIndex: 1,
    whyItMatters: 'If you want the first 3 items (indices 0, 1, 2), your slice must be [0:3]. Forgetting that stop is exclusive creates off-by-one errors.',
    memoryHook: '💡 Memory Tattoo: "Stop means Stop before crossing!" [0:3] gives you items 0, 1, and 2 only.'
  },
  {
    id: 'rq_py_05',
    category: 'Python Basics',
    topicTag: 'py_07',
    question: 'What is the boolean result of: bool("") and bool(0)?',
    options: ['True and True', 'False and False', 'True and False', 'TypeError'],
    correctIndex: 1,
    whyItMatters: 'Empty strings, empty lists, and the number 0 evaluate to False (falsy) in Python condition checks, which is essential for filtering null fields.',
    memoryHook: '💡 Memory Tattoo: "Empty = False, Zero = False". Anything with content evaluates to True!'
  },

  // Python Module 2 Data Wrangling
  {
    id: 'rq_dw_01',
    category: 'Data Wrangling',
    topicTag: 'py_10',
    question: 'Why are NumPy arrays and Pandas DataFrames preferred over native Python loops for large datasets?',
    options: ['They use more memory', 'Vectorized operations execute in compiled C memory at 100x speed', 'They allow text only', 'They require no imports'],
    correctIndex: 1,
    whyItMatters: 'Writing manual for-loops over 10 million rows takes minutes in Python, whereas vectorized NumPy calculations execute in milliseconds.',
    memoryHook: '💡 Memory Tattoo: "Never loop what you can vectorize!" Vectorization calculates all rows simultaneously.'
  },
  {
    id: 'rq_dw_02',
    category: 'Data Wrangling',
    topicTag: 'py_12',
    question: 'In Pandas, what is the architectural difference between .loc and .iloc?',
    options: [
      '.loc is integer-based, .iloc is label-based',
      '.loc is label-based, .iloc is integer position-based',
      'Both are identical',
      '.iloc only works on column names'
    ],
    correctIndex: 1,
    whyItMatters: 'Using .loc with integer coordinates or .iloc with column labels throws immediate KeyErrors and IndexErrors.',
    memoryHook: '💡 Memory Tattoo: "i" in .iloc stands for INTEGER position! .loc uses named text labels.'
  },
  {
    id: 'rq_dw_03',
    category: 'Data Wrangling',
    topicTag: 'py_13',
    question: 'Which Pandas method is best practice to replace missing NaN values with a default metric?',
    options: ['.dropna()', '.fillna()', '.replace_null()', '.remove()'],
    correctIndex: 1,
    whyItMatters: 'Dropping rows with .dropna() can discard 30% of your dataset; imputing with .fillna(df["column"].median()) preserves sample size.',
    memoryHook: '💡 Memory Tattoo: .dropna() throws rows away. .fillna() repairs missing cells with smart defaults.'
  },
  {
    id: 'rq_dw_04',
    category: 'Data Wrangling',
    topicTag: 'py_14',
    question: 'What paradigm does the Pandas groupby() method follow under the hood?',
    options: ['Filter-Sort-Display', 'Split-Apply-Combine', 'Map-Reduce-Save', 'Search-Index-Merge'],
    correctIndex: 1,
    whyItMatters: 'Understanding Split-Apply-Combine enables you to write high-speed aggregations like calculating average order value per city in one line.',
    memoryHook: '💡 Memory Tattoo: "Split by category, Apply your math, Combine into summary!"'
  },

  // SQL Relational Queries
  {
    id: 'rq_sql_01',
    category: 'SQL Queries',
    topicTag: 'sql_01',
    question: 'Which SQL clause filters individual records BEFORE any GROUP BY aggregation takes place?',
    options: ['HAVING', 'WHERE', 'ORDER BY', 'LIMIT'],
    correctIndex: 1,
    whyItMatters: 'WHERE filters row-by-row before grouping. HAVING filters aggregated group metrics (like HAVING COUNT(*) > 10) after grouping.',
    memoryHook: '💡 Memory Tattoo: "W comes before H in the alphabet" -> WHERE row-level first, HAVING group-level last!'
  },
  {
    id: 'rq_sql_02',
    category: 'SQL Queries',
    topicTag: 'sql_03',
    question: 'In a LEFT JOIN between Table A (Orders) and Table B (Refunds), what appears when an order has NO refund?',
    options: ['The row is deleted', 'NULL values appear for Table B columns', 'Zero (0) appears automatically', 'SQL throws an error'],
    correctIndex: 1,
    whyItMatters: 'Filtering WHERE B.refund_id IS NULL on a LEFT JOIN is the industry standard query to detect unrefunded orders and revenue leaks.',
    memoryHook: '💡 Memory Tattoo: "LEFT JOIN keeps everyone on the left, filling missing right values with NULL!"'
  },

  // Advanced Excel
  {
    id: 'rq_xl_01',
    category: 'Advanced Excel',
    topicTag: 'xl_01',
    question: 'In Excel formulas, what does the $ symbol do in reference =$A$1 * B2?',
    options: ['Formats number as US Dollar', 'Locks cell A1 so it never shifts when dragged', 'Makes calculation faster', 'Calculates currency exchange'],
    correctIndex: 1,
    whyItMatters: 'Absolute referencing ($A$1) keeps your tax rate or parameter cell locked in place when copying formulas across 10,000 product rows.',
    memoryHook: '💡 Memory Tattoo: The dollar sign ($) is a nail! It nails the row and column in place.'
  },
  {
    id: 'rq_xl_02',
    category: 'Advanced Excel',
    topicTag: 'xl_02',
    question: 'Why is XLOOKUP strictly superior to legacy VLOOKUP in financial modeling?',
    options: [
      'XLOOKUP requires no arguments',
      'XLOOKUP defaults to exact match and can search both left and right',
      'XLOOKUP only works on numbers',
      'XLOOKUP replaces SUMIFS'
    ],
    correctIndex: 1,
    whyItMatters: 'VLOOKUP breaks when columns are inserted and defaults dangerously to approximate match. XLOOKUP makes financial models tamper-proof.',
    memoryHook: '💡 Memory Tattoo: XLOOKUP looks left, looks right, and never breaks when new columns are added!'
  },

  // Power BI Visual Analytics
  {
    id: 'rq_pbi_01',
    category: 'Power BI',
    topicTag: 'pbi_01',
    question: 'Where should heavy data cleaning and column renaming be performed in Power BI according to best practice?',
    options: ['In DAX calculated columns', 'Upstream in Power Query (ETL engine)', 'On the visual canvas', 'In Excel before export'],
    correctIndex: 1,
    whyItMatters: 'Power Query runs transformations once during data refresh and compresses into VertiPaq. DAX columns consume expensive live RAM.',
    memoryHook: '💡 Memory Tattoo: Clean upstream in Power Query, calculate downstream with DAX measures!'
  },
  {
    id: 'rq_pbi_02',
    category: 'Power BI',
    topicTag: 'pbi_03',
    question: 'What is the architectural difference between a Calculated Column and a DAX Measure?',
    options: [
      'Calculated columns evaluate on visual slicers; measures evaluate on refresh',
      'Calculated columns evaluate row-by-row and consume RAM; measures evaluate on-the-fly with zero persistent storage',
      'Both consume identical memory',
      'Measures can only calculate additions'
    ],
    correctIndex: 1,
    whyItMatters: 'Creating calculated columns for simple aggregations inflates file size needlessly. Measures recalculate in milliseconds on demand.',
    memoryHook: '💡 Memory Tattoo: "Columns for slicing, measures for aggregation!"'
  }
];

interface MemoryRecallWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  completedTopicIds?: string[];
}

export const MemoryRecallWorkoutModal: React.FC<MemoryRecallWorkoutModalProps> = ({
  isOpen,
  onClose,
  completedTopicIds = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);

  // Dynamic Day-Based Question Selector Calibrated to Completed Course Progress
  const dailyQuestions = useMemo(() => {
    // Generate a day-seed integer based on calendar date
    const today = new Date();
    const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    // 1. Partition bank into completed topics vs foundational topics
    const matchingCompleted = RECALL_BANK.filter(q => completedTopicIds.includes(q.topicTag));
    const generalFoundational = RECALL_BANK.filter(q => !completedTopicIds.includes(q.topicTag));

    // Combine prioritizing completed questions first, filling remaining with daily rotated bank
    const combinedPool = matchingCompleted.length >= 3 
      ? [...matchingCompleted, ...generalFoundational] 
      : [...RECALL_BANK];

    // Shuffle/rotate based on dateSeed
    const rotated = [...combinedPool].sort((a, b) => {
      const hashA = (a.id.charCodeAt(3) + dateSeed) % 17;
      const hashB = (b.id.charCodeAt(3) + dateSeed) % 17;
      return hashA - hashB;
    });

    // Always pick 5 sharp questions for the 2-minute drill
    return rotated.slice(0, 5);
  }, [completedTopicIds]);

  const currentQ = dailyQuestions[currentIndex] || dailyQuestions[0];

  // 15-second countdown timer
  useEffect(() => {
    if (!isOpen) return;
    if (isWorkoutComplete || isAnswered) return;

    if (timeLeft <= 0) {
      handleSelectOption(-1); // Time out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeLeft, isAnswered, isWorkoutComplete]);

  // Reset drill when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setScore(0);
      setTimeLeft(15);
      setIsWorkoutComplete(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
      SoundEffects.playBreakthrough();
    } else {
      SoundEffects.playError();
    }
  };

  const handleNext = () => {
    SoundEffects.playDiscovery();
    if (currentIndex < dailyQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(15);
    } else {
      setIsWorkoutComplete(true);
      SoundEffects.playMissionComplete();
      confetti({ particleCount: 60, spread: 70 });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTimeLeft(15);
    setIsWorkoutComplete(false);
    SoundEffects.playDiscovery();
  };

  const todayDateString = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-space/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-2xl w-full bg-white border border-lab-900/10 rounded-3xl p-5 sm:p-8 text-left relative shadow-elevated space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-lab-100 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-quantum-teal/15 text-deep-space border border-quantum-teal/30 text-[10px] font-mono font-bold flex items-center gap-1">
                <Brain className="w-3.5 h-3.5 text-quantum-teal" />
                <span>DAILY MEMORY RETRIEVAL DRILL</span>
              </span>
              <span className="text-[10px] font-mono text-lab-500 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-lab-400" />
                <span>{todayDateString} • Auto-Rotated Daily</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-deep-space tracking-tight">
              Rapid Memory Workout
            </h3>
            <p className="text-xs text-lab-500 mt-0.5">
              15-second spaced retrieval workouts calibrated to your completed topics ({completedTopicIds.length} topics mastered).
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close workout"
            className="p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isWorkoutComplete ? (
          <div className="space-y-5 animate-fadeIn">
            {/* Progress & Countdown Timer */}
            <div className="flex items-center justify-between font-mono text-xs text-lab-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-deep-space">
                  DRILL {currentIndex + 1} / {dailyQuestions.length}
                </span>
                <span className="px-2 py-0.5 rounded bg-lab-100 text-deep-space text-[10px] font-semibold">
                  {currentQ.category}
                </span>
              </div>

              {/* 15s Timer Pill */}
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all ${
                timeLeft <= 5 
                  ? 'bg-signal-coral/20 text-signal-coral animate-pulse' 
                  : 'bg-lab-100 text-deep-space'
              }`}>
                <Timer className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-lab-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-quantum-teal h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / dailyQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="p-5 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
              <h4 className="text-sm sm:text-base font-bold text-deep-space leading-relaxed">
                {currentQ.question}
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'bg-white border-lab-200 text-deep-space hover:border-quantum-teal';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-subtle';
                  } else if (selectedOption === idx) {
                    btnStyle = 'bg-signal-coral/10 border-signal-coral text-signal-coral line-through';
                  } else {
                    btnStyle = 'bg-lab-50/50 border-lab-200 text-lab-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    data-testid="recall-option"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs font-mono font-medium transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Rationale & Memory Hook */}
            {isAnswered && (
              <div className="space-y-3 animate-fadeIn">
                <div className={`p-4 rounded-2xl border text-xs text-left space-y-2 ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50/80 border-amber-200 text-amber-900'
                }`}>
                  <div className="flex items-center gap-1.5 font-bold font-mono">
                    {selectedOption === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>EXCELLENT RECALL! (+1 Point)</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>NEURAL RETRIEVAL MISS — LOCK THIS IN NOW:</span>
                      </>
                    )}
                  </div>
                  
                  <p className="leading-relaxed">
                    {currentQ.whyItMatters}
                  </p>

                  <div className="p-3 rounded-xl bg-white/80 border border-lab-200 font-medium text-deep-space">
                    {currentQ.memoryHook}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-full bg-deep-space text-white hover:bg-deep-space/90 text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-elevated transition-transform active:scale-95"
                >
                  <span>{currentIndex < dailyQuestions.length - 1 ? 'Next Drill Question →' : 'View Daily Workout Score 🏆'}</span>
                  <ArrowRight className="w-4 h-4 text-quantum-teal" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Workout Completion Summary */
          <div className="py-6 space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-3xl bg-solar-gold/20 border border-solar-gold/40 flex items-center justify-center mx-auto text-solar-gold shadow-elevated">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-quantum-teal uppercase tracking-wider">
                DAILY WORKOUT COMPLETED
              </span>
              <h3 className="text-2xl font-bold text-deep-space">
                Neural Retention Score: {score} / {dailyQuestions.length}
              </h3>
              <p className="text-xs text-lab-500 max-w-md mx-auto">
                {score >= 4 
                  ? 'Outstanding memory retention! Your neural pathways are active and interview-ready. A fresh workout unlocks tomorrow.' 
                  : 'Good active retrieval effort! Review your missed concepts today so they become second nature under interview pressure.'}
              </p>
            </div>

            {/* Streak & Benefit Badges */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto font-mono text-xs">
              <div className="p-3 rounded-2xl bg-lab-50 border border-lab-100 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500 shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-lab-400">Daily Streak</div>
                  <div className="font-bold text-deep-space">Active (Day 01)</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-lab-50 border border-lab-100 flex items-center gap-2">
                <Zap className="w-5 h-5 text-quantum-teal shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-lab-400">Retention Power</div>
                  <div className="font-bold text-deep-space">+{score * 20}% Boost</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-lab-100 hover:bg-lab-200 text-deep-space text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Repeat Today's Drill</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-deep-space text-white hover:bg-deep-space/90 text-xs font-mono font-bold transition-transform active:scale-95 shadow-elevated"
              >
                <span>Back to Learning 🚀</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
