import { getTopicQuestionBank, getTab1TopicList, TopicQuestionBank } from './data/questionBankRegistry';
import React, { useState, useEffect, useMemo } from 'react';
import './PythonPracticeArena4Games.css';
import {
  Building2,
  CheckCircle2,
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
  tabId?: number;
  topicId?: number | string;
  onSelectTopic?: (topicId: number) => void;
  onBackToVideo?: () => void;
  onNextToInterview?: () => void;
  onNavigateDock?: (tab: string) => void;
}

export const PythonPracticeArena4Games: React.FC<PythonPracticeArena4GamesProps> = ({
  userName = 'Subodh Kumar',
  tabId = 1,
  topicId = 1,
  onSelectTopic,
  onBackToVideo,
  onNextToInterview,
  onNavigateDock,
}) => {
  const numericTopicId = typeof topicId === 'number' ? topicId : 1;
  const topicHierarchy = useMemo(() => getTopicHierarchyInfo(numericTopicId), [numericTopicId]);
  const topicData: TopicAssessmentData = useMemo(() => getModule01TopicData(numericTopicId), [numericTopicId]);
  const hindiActivity = useMemo(() => getHindiTopicActivity(numericTopicId), [numericTopicId]);

  // Master Question Bank for Tab 1 / current topic
  const registeredBank: TopicQuestionBank | null = useMemo(() => {
    return getTopicQuestionBank(tabId, topicId);
  }, [tabId, topicId]);

  const tab1Topics = useMemo(() => getTab1TopicList(), []);

  // Active game (1: Quick Quiz, 2: Puzzle Challenge, 3: Match the Code, 4: Real-Life Mission)
  const [activeGame, setActiveGame] = useState<number>(1);
  const [unlockedGame, setUnlockedGame] = useState<number>(1);

  // Reset state when topicId or tabId changes
  useEffect(() => {
    setQuizIdx(0);
    setSelectedQuizKey(null);
    setQuizFeedback(null);
    setPuzzleIdx(0);
    setPlacedSlots([null, null, null, null]);
    setPuzzleStatus('idle');
    setMatchedPairs({});
    setSelectedSnippet(null);
    setMissionIdx(0);
    setMissionDone(false);
    setActiveGame(1);
    setUnlockedGame(1);
  }, [topicId, tabId]);

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

  // Typewriter & Text-to-Speech (TTS) states
  const [typedQuestion, setTypedQuestion] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const quizQuestions = useMemo(() => {
    if (registeredBank?.game1Quiz && registeredBank.game1Quiz.length >= 5) {
      return registeredBank.game1Quiz;
    }
    return [
      {
        id: 1,
        question: 'What is data?',
        options: [
          { key: 'A' as const, text: 'A collection of facts and values' },
          { key: 'B' as const, text: 'Only computer programs' },
          { key: 'C' as const, text: 'Only pictures' },
          { key: 'D' as const, text: 'Only business profits' }
        ],
        correct: 0,
        explanation: 'Data is a collection of facts, numbers, text, images, and values that represent observations or measurements.',
        hint: 'Think about whether data includes recorded facts and values.'
      },
      {
        id: 2,
        question: 'Which of these is an example of data?',
        options: [
          { key: 'A' as const, text: 'A keyboard only' },
          { key: 'B' as const, text: "A student's age: 18" },
          { key: 'C' as const, text: 'A computer desk only' },
          { key: 'D' as const, text: 'A blank notebook' }
        ],
        correct: 1,
        explanation: "A student's age: 18 is a recorded value representing an individual attribute, making it authentic data.",
        hint: 'Look for the option that represents an actual recorded value or measurement.'
      },
      {
        id: 3,
        question: 'A shop records 20, 25, and 30 items sold each day. What are these values?',
        options: [
          { key: 'A' as const, text: 'A computer virus' },
          { key: 'B' as const, text: 'A password' },
          { key: 'C' as const, text: 'Data' },
          { key: 'D' as const, text: 'A website' }
        ],
        correct: 2,
        explanation: 'Daily recorded sales numbers are factual observations, which are data.',
        hint: 'These recorded sales numbers represent factual observations.'
      },
      {
        id: 4,
        question: 'Which item can be data?',
        options: [
          { key: 'A' as const, text: "A customer's name" },
          { key: 'B' as const, text: 'A temperature reading' },
          { key: 'C' as const, text: 'A product photo' },
          { key: 'D' as const, text: 'All of these' }
        ],
        correct: 3,
        explanation: 'Data can exist as text (customer name), numbers (temperature), or multimedia (photos).',
        hint: 'Remember that text, numbers, and photos can all represent data.'
      },
      {
        id: 5,
        question: "A teacher records students' marks. Why are the marks data?",
        options: [
          { key: 'A' as const, text: 'They are always predictions' },
          { key: 'B' as const, text: 'They are recorded facts' },
          { key: 'C' as const, text: 'They are computer hardware' },
          { key: 'D' as const, text: 'They are advertisements' }
        ],
        correct: 1,
        explanation: 'Marks represent observed, recorded facts about student exam performance.',
        hint: 'Think about whether test scores are recorded facts.'
      }
    ];
  }, [registeredBank]);

  // Quiz Timer
  useEffect(() => {
    if (activeGame !== 1) return;
    const interval = setInterval(() => {
      setQuizSeconds((s) => (s > 0 ? s - 1 : 25));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeGame, quizIdx]);

  const currentQuestionText = quizQuestions[quizIdx]?.question || '';

  // Typewriter effect: types question character-by-character
  useEffect(() => {
    if (!currentQuestionText) return;
    setTypedQuestion('');
    setIsTyping(true);
    let charIdx = 0;
    const speed = 25; // 25ms per character
    const timer = setInterval(() => {
      charIdx++;
      setTypedQuestion(currentQuestionText.slice(0, charIdx));
      if (charIdx >= currentQuestionText.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [currentQuestionText, quizIdx]);

  // Alternating Gender: Even questions = Female Indian voice, Odd questions = Male Indian voice
  const currentVoiceGender: 'female' | 'male' = quizIdx % 2 === 0 ? 'female' : 'male';

  // Helper to pick Indian Accent Voice (Male or Female)
  const getIndianVoice = (gender: 'female' | 'male') => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return { voice: null, pitch: gender === 'female' ? 1.22 : 0.88 };
    }
    const voices = window.speechSynthesis.getVoices();

    // Look for Indian English (en-IN) or Hindi (hi-IN)
    const indianVoices = voices.filter(
      (v) =>
        v.lang === 'en-IN' ||
        v.lang.startsWith('en-IN') ||
        v.name.includes('India') ||
        v.name.includes('Hindi') ||
        v.lang.startsWith('hi')
    );

    let selectedVoice = null;
    if (gender === 'female') {
      selectedVoice =
        indianVoices.find(
          (v) =>
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('heera') ||
            v.name.toLowerCase().includes('neerja') ||
            v.name.toLowerCase().includes('kalpana') ||
            v.name.toLowerCase().includes('swara')
        ) ||
        indianVoices[0] ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('female') ||
              v.name.toLowerCase().includes('zira') ||
              v.name.toLowerCase().includes('samantha'))
        );
    } else {
      selectedVoice =
        indianVoices.find(
          (v) =>
            v.name.toLowerCase().includes('male') ||
            v.name.toLowerCase().includes('ravi') ||
            v.name.toLowerCase().includes('prabhat') ||
            v.name.toLowerCase().includes('hemant') ||
            v.name.toLowerCase().includes('madhav')
        ) ||
        indianVoices[indianVoices.length > 1 ? 1 : 0] ||
        voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('male') ||
              v.name.toLowerCase().includes('david') ||
              v.name.toLowerCase().includes('mark'))
        );
    }

    return {
      voice: selectedVoice || null,
      pitch: gender === 'female' ? 1.22 : 0.88,
    };
  };

  // Full-volume Indian Text-To-Speech (TTS) with completion callback
  const speakWithFullVoice = (
    textToSpeak: string,
    gender: 'female' | 'male',
    onComplete?: () => void
  ) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onComplete) onComplete();
      return;
    }
    try {
      window.speechSynthesis.cancel();
      if (!textToSpeak) {
        if (onComplete) onComplete();
        return;
      }
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.volume = 1.0; // Full Awaz
      utterance.rate = 0.94; // Clear natural Indian pace
      utterance.lang = 'en-IN'; // Indian English

      const { voice, pitch } = getIndianVoice(gender);
      if (voice) utterance.voice = voice;
      utterance.pitch = pitch;

      let finished = false;
      const handleFinish = () => {
        if (!finished) {
          finished = true;
          setIsSpeaking(false);
          if (onComplete) {
            // Wait 600ms after answer sentence ends before advancing to next question
            setTimeout(() => {
              onComplete();
            }, 600);
          }
        }
      };

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => handleFinish();
      utterance.onerror = () => handleFinish();

      window.speechSynthesis.speak(utterance);

      // Safety fallback: if speech synthesis is blocked or silent in browser, advance gracefully
      const wordCount = textToSpeak.split(' ').length;
      const maxDuration = Math.max(5000, wordCount * 600 + 2000);
      setTimeout(() => {
        handleFinish();
      }, maxDuration);
    } catch (err) {
      console.warn('Speech error:', err);
      setIsSpeaking(false);
      if (onComplete) onComplete();
    }
  };

  const speakQuestionText = (textToSpeak: string) => {
    speakWithFullVoice(textToSpeak, currentVoiceGender);
  };

  // Auto-speak question on load / change if sound is enabled
  useEffect(() => {
    if (soundOn && currentQuestionText && activeGame === 1) {
      const t = setTimeout(() => {
        speakQuestionText(currentQuestionText);
      }, 200);
      return () => {
        clearTimeout(t);
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      };
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentQuestionText, quizIdx, soundOn, activeGame]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // 1. SELECT OPTION ONLY (User requirement: apne aap submit nhi hoga)
  const handleSelectQuizOption = (key: string) => {
    if (quizFeedback === 'correct') return;
    setSelectedQuizKey(key);
    setQuizFeedback(null); // Reset feedback so user can change choice before submitting
    soundEffects.playClick();
  };

  // 2. SUBMIT ANSWER (User requirement: ans khatam hone ke baad hi next question aayega)
  const handleSubmitAnswer = () => {
    if (!selectedQuizKey || quizFeedback === 'correct') return;
    const currQ: any = quizQuestions[quizIdx];
    const optIdx = currQ.options.findIndex((o: any) => o.key === selectedQuizKey);
    if (optIdx === -1) return;

    const isRight = optIdx === currQ.correct;

    if (isRight) {
      setQuizFeedback('correct');
      soundEffects.playQuizCorrect();
      setQuizScore((s) => s + 10);
      setStreak((s) => s + 1);
      setFloatingXp('+10 XP ✨');
      setTimeout(() => setFloatingXp(null), 1500);

      // Build direct voice feedback with Indian voice (NO question repetition!)
      // Direct full answer: "Right answer! [Option text]"
      const selectedOptionText = currQ.options[optIdx]?.text || '';
      const rightAnswerAnnouncement = `Right answer! ${selectedOptionText}.`;

      // Function to advance ONLY AFTER voice announcement ends completely
      const advanceAfterVoiceEnds = () => {
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
          }, 1500);
        }
      };

      // Speak with full volume and pass callback to wait until speech finishes
      speakWithFullVoice(rightAnswerAnnouncement, currentVoiceGender, advanceAfterVoiceEnds);
    } else {
      setQuizFeedback('wrong');
      soundEffects.playQuizWrong();
      setStreak(0);
      speakWithFullVoice('Galat jawab, try again!', currentVoiceGender);
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

  const puzzleChallenges = useMemo(() => {
    if (registeredBank?.game2Puzzles && registeredBank.game2Puzzles.length > 0) {
      return registeredBank.game2Puzzles;
    }
    return [
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
  ];
  }, [registeredBank]);

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
  const matchPairs = useMemo(() => {
    if (registeredBank?.game3MatchPairs && registeredBank.game3MatchPairs.length > 0) {
      return registeredBank.game3MatchPairs;
    }
    return [
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
  ];
  }, [registeredBank]);

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

    const selectedPair = matchPairs.find((p) => p.snippet === selectedSnippet);
    if (!selectedPair) return;

    if (pair.snippet === selectedSnippet || pair.meaning === selectedPair.meaning) {
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

  const currentMission = useMemo(() => {
    if (registeredBank?.game4Missions && registeredBank.game4Missions[missionIdx]) {
      return registeredBank.game4Missions[missionIdx];
    }
    return null;
  }, [registeredBank, missionIdx]);

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

    const totalMissions = registeredBank?.game4Missions?.length || 2;
    if (missionIdx < totalMissions - 1) {
      setTimeout(() => {
        setMissionIdx((prev) => prev + 1);
        setMissionDone(false);
      }, 1200);
    } else {
      // User requirement: Real-life mission khatam hone ke baad mock interview auto start hoga
      setTimeout(() => {
        if (onNextToInterview) {
          onNextToInterview();
        }
      }, 1200);
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

  // AI Mentor Dynamic Hint — 100% matched to current question/scenario
  const currentMentorHint = useMemo(() => {
    if (activeGame === 1) {
      return (
        quizQuestions[quizIdx]?.hint ||
        quizQuestions[quizIdx]?.explanation ||
        'Think about the core concept asked in this question.'
      );
    }
    if (activeGame === 2) {
      return currentPuzzle?.hint || 'Analyze the given scenario to find the data.';
    }
    if (activeGame === 3) {
      return 'Match each real-world example on the left with its correct data format (Text, Number, Image, Measurement).';
    }
    return currentMission?.prompt || 'Formulate the analytical action needed to resolve this real-world scenario.';
  }, [activeGame, quizIdx, currentPuzzle, quizQuestions, currentMission]);

  // ─────────────────────────────────────────────────────────────────────────────
  // PRE-WRITTEN HINT, EXAMPLE, EXPLANATION & REPORT DATA (Matched to Current Question)
  // ─────────────────────────────────────────────────────────────────────────────
  const currentHelpData = useMemo(() => {
    if (activeGame === 1) {
      const currQ: any = quizQuestions[quizIdx];
      const qText = currQ?.question || '';

      // Topic 1.1 Custom Question Matches
      if (qText.includes('What is data?')) {
        return {
          hintEn: currQ?.hint || 'Think about whether data includes recorded facts, numbers, and values.',
          hintHi: 'सोचिए कि क्या डेटा में रिकॉर्ड किए गए तथ्य (facts) और मान (values) शामिल होते हैं।',
          exampleCode: '// Examples of Data:\nStudent Name = "Asha"       // Text\nMarks = 85                  // Number\nAttendance = "Present"       // Fact\nTemperature = 32°C          // Measurement',
          exampleNote: 'Data can be words, numbers, measurements, or observations recorded from the real world.',
          explainTitleEn: 'Concept: What Is Data?',
          explainTitleHi: 'डेटा क्या है? (Understanding Data)',
          explainTextEn: 'Data is a collection of facts, numbers, text, images, and values that represent observations or measurements. When analyzed, data becomes actionable information.',
          explainTextHi: 'डेटा रिकॉर्ड किए गए तथ्यों, संख्याओं, शब्दों या मापों का संग्रह होता है। जैसे किसी छात्र के अंक (85), उम्र (18) या दैनिक बिक्री।',
          realWorldEn: 'In companies like Google, Amazon, and Swiggy, data is collected from millions of clicks, orders, and GPS coordinates every second.',
          realWorldHi: 'Swiggy, Amazon और Google जैसी कंपनियां हर सेकंड यूजर के ऑर्डर्स, नाम और पेमेंट्स को डेटा के रूप में रिकॉर्ड करती हैं।',
        };
      }

      if (qText.includes('Which of these is an example of data?')) {
        return {
          hintEn: 'Look for an option that represents an actual recorded value or measurement, rather than physical hardware or blank paper.',
          hintHi: 'वह विकल्प चुनें जो किसी रिकॉर्ड किए गए मान (value) या माप को दर्शाता है, न कि कोई भौतिक वस्तु जैसे कीबोर्ड या खाली नोटबुक।',
          exampleCode: '// Physical Object vs Recorded Data:\nPhysical Hardware:  Computer Keyboard (Device)\nPhysical Furniture: Wooden Desk\nAuthentic Data:     Student\'s age: 18 (Recorded Value)',
          exampleNote: 'Hardware devices process or store information, but the recorded values themselves are the data.',
          explainTitleEn: 'Recognizing Data in Everyday Scenarios',
          explainTitleHi: 'डेटा के उदाहरण पहचानना',
          explainTextEn: 'A keyboard, computer desk, or blank notebook are physical objects. A student\'s age (18) is a measured, recorded observation that represents real data.',
          explainTextHi: 'कीबोर्ड, मेज या खाली कॉपी भौतिक वस्तुएं (Physical items) हैं। किसी छात्र की उम्र (18) एक रिकॉर्ड किया गया मान है, इसलिए यह डेटा है।',
          realWorldEn: 'HR software systems store employee age, join date, and salary as structured data fields.',
          realWorldHi: 'कंपनियों के HR सॉफ्टवेयर में कर्मचारी की उम्र, जॉइनिंग डेट और सैलरी डेटा के रूप में सेव होती है।',
        };
      }

      if (qText.includes('A shop records 20, 25, and 30 items sold')) {
        return {
          hintEn: 'These recorded sales numbers represent daily business observations of transactions.',
          hintHi: 'दुकानदार द्वारा हर दिन बेचे गए सामान की संख्या (20, 25, 30) रिकॉर्ड की गई जानकारी है।',
          exampleCode: '// Daily Store Transactions:\nDay 1: 20 items sold\nDay 2: 25 items sold\nDay 3: 30 items sold\n// Total = 75 items (Sales Data Log)',
          exampleNote: 'Daily transaction counts form the sales dataset of the store.',
          explainTitleEn: 'Sales Transaction Records as Business Data',
          explainTitleHi: 'दुकान की बिक्री का डेटा',
          explainTextEn: 'The daily numbers (20, 25, 30) are quantitative business records. They are not computer viruses or passwords; they are operational sales data used to analyze store performance.',
          explainTextHi: '20, 25, 30 बेची गई वस्तुओं की संख्या है, जो कि व्यापार का बिक्री डेटा (Sales Data) है।',
          realWorldEn: 'Retail stores like DMart and Reliance Smart track daily sold quantities to reorder stock and compute revenue.',
          realWorldHi: 'DMart और Reliance Retail हर दिन बिकने वाले सामान की संख्या से नया स्टॉक मंगाते हैं।',
        };
      }

      if (qText.includes('Which item can be data?')) {
        return {
          hintEn: 'Remember that data is not limited to numbers—text, measurements, and images can all be data.',
          hintHi: 'याद रखें कि डेटा केवल नंबर नहीं होता—नाम (टेक्स्ट), तापमान (माप) और फोटो (इमेज) सभी डेटा हो सकते हैं।',
          exampleCode: '// Variety of Data Types:\nCustomer Name:  "Subodh Kumar"  (Text / String)\nTemperature:    32.5°C          (Numerical Measurement)\nProduct Photo:  camera.jpg      (Image / Multimedia Data)',
          exampleNote: 'All of these forms can be stored and analyzed in modern databases.',
          explainTitleEn: 'Multimodal Nature of Data',
          explainTitleHi: 'डेटा के विभिन्न रूप',
          explainTextEn: 'Modern data analysts work with varied data formats: text strings (customer names), continuous measurements (temperature 32°C), and multimedia files (product images). Therefore, all of these are data.',
          explainTextHi: 'डेटा किसी भी रूप में हो सकता है: टेक्स्ट (नाम), नंबर या माप (तापमान) और फोटो। इसलिए ये सभी डेटा हैं।',
          realWorldEn: 'E-commerce apps like Flipkart display product titles (text), user reviews (text), prices (numbers), and product photos (images).',
          realWorldHi: 'Flipkart पर प्रोडक्ट का नाम, कीमत और फोटो तीनों ही अलग-अलग प्रकार का डेटा हैं।',
        };
      }

      if (qText.includes("marks data") || qText.includes("teacher records")) {
        return {
          hintEn: 'Think about what test marks represent: they are factual, observed outcomes of student evaluations.',
          hintHi: 'सोचिए कि परीक्षा के अंक क्या दर्शाते हैं: वे छात्रों के प्रदर्शन के रिकॉर्ड किए गए वास्तविक तथ्य (facts) हैं।',
          exampleCode: '// Student Gradebook:\nStudent: "Rahul", Subject: "Maths", Marks: 92\nStatus: Recorded Fact (Observable Exam Result)',
          exampleNote: 'Recorded marks provide factual evidence of academic performance.',
          explainTitleEn: 'Recorded Facts vs Predictions',
          explainTitleHi: 'रिकॉर्ड किए गए तथ्य (Recorded Facts)',
          explainTextEn: 'Marks represent observed, verifiable historical facts about a test that has taken place. They are not hardware, advertisements, or mere guesses; they are factual recorded observations.',
          explainTextHi: 'शिक्षक द्वारा दर्ज किए गए अंक परीक्षा के वास्तविक तथ्य (Recorded Facts) हैं, जो छात्र के प्रदर्शन को प्रमाणित करते हैं।',
          realWorldEn: 'Universities generate report cards and graduation eligibility by processing recorded marksheets in database systems.',
          realWorldHi: 'स्कूल और कॉलेज मार्कशीट और रिजल्ट तैयार करने के लिए छात्रों के दर्ज किए गए अंकों का विश्लेषण करते हैं।',
        };
      }

      // ─── Topic 1.2: What Is Data Analytics? Custom Question Matches ───
      if (qText.includes('What is data analytics?')) {
        return {
          hintEn: currQ?.hint || 'Think about examining data to find patterns and actionable insights.',
          hintHi: 'सोचिए कि डेटा की जांच करके उपयोगी जानकारी (insights) और पैटर्न कैसे निकाले जाते हैं।',
          exampleCode: '// What Data Analytics Looks Like:\nRaw Data:  Monthly sales = [₹12k, ₹15k, ₹21k]\nAnalysis:  Sales grew +40% after weekend promotion!\nDecision:  Continue weekend promotional campaigns.',
          exampleNote: 'Data analytics transforms raw numbers into actionable business strategy.',
          explainTitleEn: 'What Is Data Analytics?',
          explainTitleHi: 'डेटा एनालिटिक्स क्या है?',
          explainTextEn: 'Data analytics is the science and practice of examining raw datasets to discover hidden trends, answer operational questions, and support better business decisions.',
          explainTextHi: 'डेटा एनालिटिक्स का मतलब है डेटा की जांच करके उपयोगी जानकारी (Insights) निकालना, जिससे व्यापार में सही निर्णय लिए जा सकें।',
          realWorldEn: 'Netflix analyzes viewer ratings and watch time to decide which movies to produce and recommend next.',
          realWorldHi: 'Netflix यूजर के देखने के पैटर्न को एनालाइज करके अगली सीरीज बनाने का फैसला करता है।',
        };
      }

      if (qText.includes('best-selling product') || qText.includes('checks its monthly sales')) {
        return {
          hintEn: 'The shop is analyzing monthly sales records to identify product trends.',
          hintHi: 'दुकानदार पिछले महीने की बिक्री डेटा की जांच करके सबसे ज्यादा बिकने वाला सामान ढूंढ रहा है।',
          exampleCode: '// Product Sales Analysis:\nItem A (Notebooks):  500 units\nItem B (Pens):      1,200 units (Best Seller!)\nItem C (Bags):        45 units',
          exampleNote: 'Ranking sales quantities is a standard descriptive analytics technique.',
          explainTitleEn: 'Identifying Best-Selling Products via Analytics',
          explainTitleHi: 'बिक्री डेटा से बेस्ट सेलर खोजना',
          explainTextEn: 'By looking at sales logs across months, businesses evaluate which products generate high consumer demand and prioritize inventory restocking.',
          explainTextHi: 'बिक्री रिकॉर्ड की जांच करके यह पता लगाना कि कौन सा सामान सबसे ज्यादा बिक रहा है, डेटा एनालिटिक्स कहलाता है।',
          realWorldEn: 'Amazon uses analytics to badge top-performing products with "Best Seller" tags.',
          realWorldHi: 'Amazon और Flipkart ज्यादा बिकने वाले प्रोडक्ट्स को "Best Seller" का टैग देते हैं।',
        };
      }

      if (qText.includes('patterns in data')) {
        return {
          hintEn: 'Patterns reveal underlying trends and customer behaviors over time.',
          hintHi: 'डेटा में पैटर्न ढूंढने से भविष्य के ट्रेंड्स और ग्राहकों की पसंद का पता चलता है।',
          exampleCode: '// Weekly Sales Pattern:\nMon-Thu: ~50 orders/day\nFri-Sun: ~180 orders/day (Weekend Surge Pattern!)',
          exampleNote: 'Discovering patterns helps manage inventory and staffing proactively.',
          explainTitleEn: 'The Value of Patterns in Data',
          explainTitleHi: 'डेटा में पैटर्न का महत्व',
          explainTextEn: 'Patterns allow organizations to understand recurring trends, forecast upcoming demand, and support evidence-based decisions rather than relying on guesswork.',
          explainTextHi: 'पैटर्न देखने से हमें यह समझ आता है कि किस दिन या महीने में मांग बढ़ती है, जिससे सही फैसले लिए जा सकते हैं।',
          realWorldEn: 'Uber detects Friday night trip spikes to dynamically position drivers near busy areas.',
          realWorldHi: 'Uber शुक्रवार और वीकेंड पर ज्यादा गाड़ियां भेजता है क्योंकि डेटा में ऐसा पैटर्न दिखता है।',
        };
      }

      if (qText.includes("last month's") || qText.includes("month's sales")) {
        return {
          hintEn: 'Look for an activity that evaluates and compares numerical data over time.',
          hintHi: 'उस गतिविधि को चुनें जिसमें दो महीनों के डेटा की तुलना करके ट्रेंड्स देखे जाते हैं।',
          exampleCode: '// Month-over-Month (MoM) Analytics:\nLast Month: ₹1,50,000\nThis Month: ₹1,95,000 (+30% Growth)',
          exampleNote: 'Comparing periods is one of the most common analytical workflows in finance and retail.',
          explainTitleEn: 'Comparative Analytics in Action',
          explainTitleHi: 'महीने-दर-महीने बिक्री की तुलना',
          explainTextEn: 'Comparing monthly sales identifies whether business is growing, stagnant, or declining. This is a foundational data analytics task.',
          explainTextHi: 'पिछले महीने और इस महीने की बिक्री की तुलना करना डेटा एनालिटिक्स का एक सीधा उदाहरण है।',
          realWorldEn: 'Financial analysts present monthly growth rate reports to board executives every quarter.',
          realWorldHi: 'कंपनियां हर महीने सेल्स रिपोर्ट बनाकर देखती हैं कि उनका बिजनेस कितना बढ़ा है।',
        };
      }

      if (qText.includes('help a business do')) {
        return {
          hintEn: 'Data analytics provides insights for informed decisions, but cannot eliminate all uncertainty.',
          hintHi: 'डेटा एनालिटिक्स बेहतर और सूचित निर्णय (Better-informed decisions) लेने में मदद करता है।',
          exampleCode: '// Intuition vs Data-Driven:\nIntuition: "I think people might like this shirt."\nAnalytics: "Data shows 78% of customers bought black shirts in winter."',
          exampleNote: 'Analytics reduces uncertainty and backs decisions with observable facts.',
          explainTitleEn: 'Business Impact of Data Analytics',
          explainTitleHi: 'बिजनेस में डेटा एनालिटिक्स का फायदा',
          explainTextEn: 'Data analytics empowers business leaders to make better-informed, evidence-backed decisions, reducing costly mistakes and improving profitability.',
          explainTextHi: 'डेटा एनालिटिक्स व्यापार को तुक्के लगाने के बजाय ठोस तथ्यों के आधार पर सही निर्णय लेने में सक्षम बनाता है।',
          realWorldEn: 'Companies with strong data analytics practices achieve up to 23x greater customer acquisition.',
          realWorldHi: 'डेटा का सही इस्तेमाल करने वाली कंपनियां ग्राहकों को बेहतर समझती हैं और ज्यादा मुनाफा कमाती हैं।',
        };
      }

      // ─── Topic 1.3 Quizzes ───
      if (qText.includes('Why do businesses need data analytics?')) {
        return {
          hintEn: 'Businesses use analytics to guide choices with evidence rather than pure guesswork.',
          hintHi: 'बिजनेस तुक्के लगाने के बजाय ठोस तथ्यों के आधार पर सही निर्णय (better-informed decisions) लेने के लिए डेटा का उपयोग करते हैं।',
          exampleCode: '// Business Decision Making:\nGuesswork:  "Let us open 10 new branches randomly."\nAnalytics:  "Customer order data shows 80% demand in South Zone."\nDecision:   Open branches in South Zone first!',
          exampleNote: 'Data analytics empowers leaders with actionable business intelligence.',
          explainTitleEn: 'Why Businesses Need Data Analytics',
          explainTitleHi: 'बिजनेस को डेटा एनालिटिक्स की जरूरत क्यों है?',
          explainTextEn: 'Modern enterprises depend on data analytics to uncover customer behaviors, boost operational efficiency, minimize inventory waste, and make evidence-based decisions.',
          explainTextHi: 'आज के दौर में कंपनियां ग्राहकों की पसंद समझने, नुकसान कम करने और मुनाफा बढ़ाने के लिए डेटा एनालिटिक्स का इस्तेमाल करती हैं।',
          realWorldEn: 'Amazon attributes 35% of its overall revenue to algorithmic data-driven recommendations.',
          realWorldHi: 'Amazon की 35% बिक्री डेटा एनालिटिक्स और प्रोडक्ट रिकमेंडेशन से होती है।',
        };
      }

      if (qText.includes("sales are falling") || qText.includes("sales drop")) {
        return {
          hintEn: 'When sales decline, data analytics investigates transaction history to pinpoint the exact reasons.',
          hintHi: 'जब बिक्री घटती है, तो डेटा एनालिटिक्स पुराने रिकॉर्ड्स की जांच करके गिरावट के मुख्य कारण (reasons) ढूंढता है।',
          exampleCode: '// Sales Drop Diagnostic:\nProduct A Sales: Steady (-1%)\nProduct B Sales: Crashed by -55% after price hike!\n-> Immediate insight: Customers rejected Product B price rise.',
          exampleNote: 'Diagnostic analytics answers the question: "Why did it happen?"',
          explainTitleEn: 'Investigating Sales Declines',
          explainTitleHi: 'बिक्री में गिरावट की जांच',
          explainTextEn: 'Instead of panicking or closing down, a business uses data analytics to break down sales numbers by category, pricing, and footfall to diagnose the root cause.',
          explainTextHi: 'दुकान बंद करने या नजरअंदाज करने के बजाय डेटा का विश्लेषण करने से पता चलता है कि किस सामान या वजह से बिक्री घटी।',
          realWorldEn: 'Retail chains monitor daily store sales alerts to instantly investigate sudden revenue drops.',
          realWorldHi: 'मॉल और सुपरमार्केट रोजाना बिक्री डेटा देखते हैं ताकि किसी भी गिरावट को तुरंत ठीक किया जा सके।',
        };
      }

      if (qText.includes('customer feedback data') || qText.includes('customer feedback')) {
        return {
          hintEn: 'Feedback ratings and review text highlight what customers love and what needs improvement.',
          hintHi: 'कस्टमर फीडबैक और रेटिंग्स से समझ आता है कि ग्राहक क्या चाहते हैं और उन्हें क्या परेशानी हो रही है।',
          exampleCode: '// Customer Feedback Sentiment:\n⭐ 1-star: "Delivery took 7 days instead of 2."\n⭐ 5-star: "Product quality is awesome!"\n-> Business priority: Improve delivery logistics speed.',
          exampleNote: 'Feedback analytics directly connects user opinions with product improvements.',
          explainTitleEn: 'Leveraging Customer Feedback Data',
          explainTitleHi: 'कस्टमर फीडबैक का सही उपयोग',
          explainTextEn: 'Businesses analyze reviews, NPS scores, and survey responses to understand true customer requirements and systematically resolve service issues.',
          explainTextHi: 'ग्राहक फीडबैक का विश्लेषण करके कंपनी अपनी सेवाओं में सुधार करती है ताकि ग्राहक संतुष्ट रहें।',
          realWorldEn: 'Zomato and Swiggy use customer review NLP to flag restaurant hygiene and delivery speed issues.',
          realWorldHi: 'Zomato और Swiggy कस्टमर रेटिंग्स देखकर खराब डिलीवरी और खाने की शिकायत दूर करते हैं।',
        };
      }

      if (qText.includes('reduce wasted stock') || qText.includes('wasted stock')) {
        return {
          hintEn: 'To prevent perishable or excess stock from expiring, compare past sales velocities with inventory levels.',
          hintHi: 'बेकार स्टॉक से बचने के लिए बिक्री और इन्वेंट्री (Sales & Inventory records) के आंकड़े देखे जाते हैं।',
          exampleCode: '// Stock Waste Reduction:\nMilk stock ordered:  100 packets/day\nAverage daily sales:  60 packets/day\nWaste:                40 packets expired!\n-> New order rule:    Order 65 packets/day max.',
          exampleNote: 'Inventory analytics balances holding costs and customer demand.',
          explainTitleEn: 'Reducing Stock Waste with Analytics',
          explainTitleHi: 'डेटा से स्टॉक की बर्बादी रोकना',
          explainTextEn: 'Tracking sales velocity alongside warehouse stock data ensures businesses reorder just the right amount of goods, drastically cutting spoilage and holding costs.',
          explainTextHi: 'बिक्री और स्टॉक रिकॉर्ड्स को देखने से सही मात्रा में सामान मंगाया जाता है और बर्बादी रुकती है।',
          realWorldEn: 'Walmart uses predictive shelf-stocking algorithms to minimize perishable produce spoilage.',
          realWorldHi: 'Walmart फल और सब्जियों की बर्बादी रोकने के लिए सटीक इन्वेंट्री डेटा का इस्तेमाल करता है।',
        };
      }

      if (qText.includes('important benefit of data analytics') || qText.includes('benefit of data analytics')) {
        return {
          hintEn: 'Analytics does not guarantee instant magic or remove every risk, but it grounds decisions in solid evidence.',
          hintHi: 'डेटा एनालिटिक्स हर जोखिम नहीं हटा सकता, लेकिन यह सबूतों पर आधारित सही निर्णय (evidence-based decisions) लेने में मदद करता है।',
          exampleCode: '// Evidence-Based Decision Framework:\nObservation: 65% of app visits occur between 8 PM - 10 PM.\nAction:      Schedule flash sales at 8:30 PM with push notification.\nResult:      +35% conversion backed by user traffic evidence.',
          exampleNote: 'Evidence-based strategies consistently outperform subjective opinions.',
          explainTitleEn: 'Core Benefit: Evidence-Based Decisions',
          explainTitleHi: 'डेटा एनालिटिक्स का सबसे बड़ा फायदा',
          explainTextEn: 'The primary benefit of data analytics is transforming raw operations data into clear evidence, eliminating guesswork and giving decision-makers confidence.',
          explainTextHi: 'डेटा एनालिटिक्स का मुख्य फायदा यह है कि निर्णय अंदाजे के बजाय ठोस आंकड़ों और सबूतों पर आधारित होते हैं।',
          realWorldEn: 'Fortune 500 CEOs rely on predictive analytics dashboards for multi-billion dollar capital allocation.',
          realWorldHi: 'बड़ी कंपनियां नए प्रोजेक्ट्स में पैसा लगाने से पहले डेटा एनालिटिक्स रिपोर्ट की जांच करती हैं।',
        };
      }

      // Universal Question Match for any other question
      return {
        hintEn: currQ?.hint || 'Review the core concept being asked in this question.',
        hintHi: 'सवाल के मुख्य विचार (Core Concept) पर ध्यान दें और सही विकल्प चुनें।',
        exampleCode: currQ?.options?.map((o: any) => `${o.key}. ${o.text}`).join('\n') || '// Question Options',
        exampleNote: currQ?.explanation || 'Think about the lesson concepts discussed in this topic.',
        explainTitleEn: currQ?.question || 'Question Concept',
        explainTitleHi: 'सवाल की व्याख्या (Concept Details)',
        explainTextEn: currQ?.explanation || 'This concept is a core foundation of business data analytics.',
        explainTextHi: currQ?.explanation || 'यह डेटा एनालिटिक्स का एक मूलभूत सिद्धांत है जो सही जानकारी रिकॉर्ड और विश्लेषित करने में मदद करता है।',
        realWorldEn: 'Data professionals apply this concept to ensure high accuracy in dashboards and reporting.',
        realWorldHi: 'डेटा प्रोफेशनल्स इस तकनीक का उपयोग वास्तविक प्रोजेक्ट्स और रिपोर्ट्स में करते हैं।',
      };
    }

    if (activeGame === 2) {
      const puzzle = currentPuzzle;
      const pTitle = puzzle?.title || '';

      if (pTitle.includes('Find the Data') || puzzle?.prompt?.includes('café records')) {
        return {
          hintEn: 'Look for recorded numbers or counts. Furniture and wall paint are physical surroundings, not data.',
          hintHi: 'दुकान में रिकॉर्ड की गई संख्या को देखें। दीवार का रंग या कुर्सी डेटा नहीं हैं।',
          exampleCode: '// Identifying Data in a Café:\nWall Colour: Green        -> Physical Property (Not Data)\nChair in Café: Wooden     -> Physical Object (Not Data)\nCustomer Counts: 45, 52   -> Recorded Business Data (✓)',
          exampleNote: 'Recorded customer counts can be analyzed to find busiest hours and sales trends.',
          explainTitleEn: 'Puzzle 1: Find the Data',
          explainTitleHi: 'पहेली 1: डेटा की पहचान',
          explainTextEn: 'A café\'s wall colour or physical chair are surrounding physical objects. The recorded customer numbers (45, 52, 38) are documented observations representing business metrics—this is authentic data.',
          explainTextHi: 'कैफे की कुर्सी या दीवार का रंग केवल भौतिक वस्तुएं हैं। ग्राहकों की दर्ज की गई संख्या (45, 52, 38) वास्तविक डेटा है।',
          realWorldEn: 'Starbucks analyzes customer footfall by hour to optimize staff scheduling and reduce queue wait times.',
          realWorldHi: 'कैफे और रेस्टोरेंट ग्राहकों की संख्या गिनकर तय करते हैं कि कितने कर्मचारी काम पर रखे जाएं।',
        };
      }

      if (pTitle.includes('Spot the Data') || puzzle?.prompt?.includes('32°C')) {
        return {
          hintEn: 'Measurements like temperatures, rainfall, and wind speed are numerical data.',
          hintHi: 'तापमान (32°C) एक संख्यात्मक माप (Measurement) है, जो डेटा का एक महत्वपूर्ण प्रकार है।',
          exampleCode: '// Weather App Data Feed:\nCity: "Delhi"\nTemperature: 32°C  (Quantitative Measurement = Data ✓)\nHumidity: 65%      (Measurement = Data ✓)',
          exampleNote: 'Data is not restricted to text; scientific and environmental measurements are data.',
          explainTitleEn: 'Puzzle 2: Spot the Data',
          explainTitleHi: 'पहेली 2: तापमान डेटा है या नहीं?',
          explainTextEn: 'Yes, 32°C is a recorded environmental measurement. Data does not have to be text; numerical measurements, timestamps, and percentages are standard data points.',
          explainTextHi: 'हाँ, 32°C एक मापी गई संख्या है। डेटा केवल टेक्स्ट नहीं होता, माप और संख्याएं भी डेटा हैं।',
          realWorldEn: 'Weather forecasting platforms collect sensor readings from satellites and ground stations to predict weather patterns.',
          realWorldHi: 'मौसम विभाग सैटेलाइट और थर्मामीटर से तापमान रिकॉर्ड करके बारिश और गर्मी का अनुमान लगाता है।',
        };
      }

      if (pTitle.includes('Complete the Idea') || puzzle?.prompt?.includes('images, and')) {
        return {
          hintEn: 'Think about what else can be measured or observed (e.g. speed, height, temperature).',
          hintHi: 'सोचिए कि और कौन सी चीज मापी जा सकती है (जैसे गति, वजन, तापमान)।',
          exampleCode: '// Four Main Forms of Data:\n1. Numbers      -> 45, 100, 3.14\n2. Text         -> "Customer Name", "Review"\n3. Images       -> Product Photos, Scans\n4. Measurements -> Temperature, Speed, Distance (✓)',
          exampleNote: 'Measurements capture continuous physical quantities.',
          explainTitleEn: 'Puzzle 3: Complete the Idea',
          explainTitleHi: 'पहेली 3: विचार पूरा करें',
          explainTextEn: 'Data is versatile and includes numbers, text, images, and measurements. Keyboards and chairs are physical hardware, while measurements represent recorded scientific or physical values.',
          explainTextHi: 'डेटा में संख्या, टेक्स्ट, इमेज और माप (Measurements) शामिल होते हैं।',
          realWorldEn: 'IoT devices (smartwatches, connected cars) transmit millions of real-time measurements (heart rate, vehicle speed) per minute.',
          realWorldHi: 'स्मार्टवॉच हमारे दिल की धड़कन और कदमों की गिनती को माप (Measurement) के रूप में स्टोर करती है।',
        };
      }

      // ─── Topic 1.2 Puzzles ───
      if (puzzle?.prompt?.includes('pizza sales rise') || pTitle.includes('Discovering Trends')) {
        return {
          hintEn: 'A weekly recurring surge in customer orders is a sales pattern.',
          hintHi: 'हर शुक्रवार को बिक्री का बढ़ना एक सेल्स पैटर्न (Sales Pattern) कहलाता है।',
          exampleCode: '// Friday Pizza Orders:\nWeek 1 Friday: 120 pizzas\nWeek 2 Friday: 135 pizzas\nWeek 3 Friday: 140 pizzas\n-> Strong Friday Sales Pattern!',
          exampleNote: 'A pattern indicates predictable customer demand on specific days.',
          explainTitleEn: 'Discovering Sales Patterns',
          explainTitleHi: 'सेल्स पैटर्न की खोज',
          explainTextEn: 'When sales systematically increase on the same day every week, analysts describe this as a recurring sales pattern or seasonal trend.',
          explainTextHi: 'जब हर हफ्ते किसी खास दिन बिक्री बढ़ती है, तो इसे सेल्स पैटर्न कहा जाता है।',
          realWorldEn: 'Domino\'s and Pizza Hut plan inventory prep and driver shifts around Friday-Saturday sales spikes.',
          realWorldHi: 'पिज्जा कंपनियां शुक्रवार को पहले से ज्यादा आटा और पनीर तैयार रखती हैं क्योंकि डेटा में ऐसा पैटर्न दिखता है।',
        };
      }

      if (puzzle?.prompt?.includes('before and after a discount') || pTitle.includes('Evaluating Impact')) {
        return {
          hintEn: 'The objective is to measure how customer purchases changed as a result of the discount.',
          hintHi: 'डिस्काउंट से पहले और बाद की बिक्री की तुलना करके डिस्काउंट का प्रभाव (Effect) समझा जाता है।',
          exampleCode: '// Pre/Post Promotion Comparison:\nBefore 10% Discount: 50 items/day\nAfter 10% Discount:  85 items/day\n-> Impact: +70% lift in sales volume!',
          exampleNote: 'A/B and pre/post comparative analytics measure campaign effectiveness.',
          explainTitleEn: 'Evaluating Promotion Impact',
          explainTitleHi: 'डिस्काउंट का प्रभाव समझना',
          explainTextEn: 'Comparing sales metrics before versus after a price promotion demonstrates the direct elasticity and impact of the discount on customer demand.',
          explainTextHi: 'डिस्काउंट देने से पहले और बाद के आंकड़ों की तुलना करने से पता चलता है कि ऑफर से बिक्री बढ़ी या घटी।',
          realWorldEn: 'E-commerce brands evaluate Festive Sale discount effectiveness through pre/post conversion tracking.',
          realWorldHi: 'Flipkart Big Billion Days सेल में डिस्काउंट का असर देखने के लिए यही एनालिसिस करता है।',
        };
      }

      if (puzzle?.prompt?.includes('most absences') || pTitle.includes('Analyzing School Data')) {
        return {
          hintEn: 'Analyzing historical records to identify trends and solve problems is data analytics.',
          hintHi: 'स्कूल रिकॉर्ड्स की जांच करके अनुपस्थिति का कारण और दिन ढूंढना डेटा एनालिटिक्स का काम है।',
          exampleCode: '// School Attendance Log:\nMonday:    98%\nWednesday: 97%\nFriday:    82% (High Absence Day!)\n-> Data Analytics finding attendance patterns.',
          exampleNote: 'Educational institutions use attendance analytics to intervene before grades drop.',
          explainTitleEn: 'Educational Data Analytics',
          explainTitleHi: 'स्कूल अटेंडेंस का डेटा एनालिसिस',
          explainTextEn: 'Examining recorded student attendance to reveal which days experience peak absences is an application of descriptive data analytics.',
          explainTextHi: 'रिकॉर्ड किए गए हाजिरी डेटा की जांच करके यह समझना कि किस दिन सबसे ज्यादा छात्र अनुपस्थित रहते हैं, डेटा एनालिटिक्स कहलाता है।',
          realWorldEn: 'School districts allocate counseling and meal resources based on attendance trend dashboards.',
          realWorldHi: 'स्कूल प्रशासन अटेंडेंस डेटा देखकर तय करता है कि किस दिन छात्रों के लिए स्पेशल एक्टिविटी रखी जाए।',
        };
      }

      // ─── Topic 1.3 Puzzles ───
      if (puzzle?.prompt?.includes('100 bags last week') || pTitle.includes('Falling Sales')) {
        return {
          hintEn: 'When sales drop from 100 to 60, first investigate the data to identify why the decrease happened.',
          hintHi: 'जब बैग्स की बिक्री 100 से घटकर 60 रह जाए, तो सबसे पहले सेल्स डेटा की जांच करें।',
          exampleCode: '// Falling Sales Diagnosis:\nLast Week: 100 bags sold\nThis Week:  60 bags sold (-40% drop!)\nAction:    Investigate sales data, price, and competitor discounts.',
          exampleNote: 'Always analyze the numbers before jumping to conclusions or shutting operations.',
          explainTitleEn: 'Puzzle 1: Falling Sales Investigation',
          explainTitleHi: 'पहेली 1: गिरती बिक्री की पड़ताल',
          explainTextEn: 'The most rational first response to declining sales is to inspect sales records, pricing changes, and customer footfall to uncover the underlying cause.',
          explainTextHi: 'अचानक बिक्री घटने पर दुकान बंद करने या अनदेखा करने के बजाय बिक्री डेटा की जांच करना सबसे समझदारी भरा कदम है।',
          realWorldEn: 'Retail managers use daily sales anomaly detection to catch underperforming categories immediately.',
          realWorldHi: 'दुकानदार पिछले हफ्ते और इस हफ्ते की बिक्री देखकर पता लगाते हैं कि ग्राहक क्यों कम आए।',
        };
      }

      if (puzzle?.prompt?.includes('unsold food') || pTitle.includes('Too Much Stock')) {
        return {
          hintEn: 'To stop throwing away unsold food, examine daily sales records and inventory logs.',
          hintHi: 'बचे हुए खाने की बर्बादी रोकने के लिए रोजाना की बिक्री और स्टॉक रिकॉर्ड्स (Sales & stock records) देखना जरूरी है।',
          exampleCode: '// Daily Food Stock Optimization:\nUnsold Food Wasted: 25 kg/day\nSales Data Insight: Monday-Wednesday dinner traffic is 40% lower.\nAdjustment:         Prep 40% less food on weekdays.',
          exampleNote: 'Sales and inventory records provide the exact demand quantities needed.',
          explainTitleEn: 'Puzzle 2: Reducing Food Waste',
          explainTitleHi: 'पहेली 2: स्टॉक और खाने की बर्बादी रोकना',
          explainTextEn: 'Unsold food waste occurs due to a mismatch between prepared inventory and customer demand. Analyzing sales and stock records aligns production with actual consumption.',
          explainTextHi: 'बिक्री और स्टॉक के रिकॉर्ड की जांच करके यह तय किया जाता है कि रोजाना कितना खाना बनाना चाहिए जिससे बर्बादी न हो।',
          realWorldEn: 'Restaurants and bakeries cut food waste by up to 30% using daily inventory tracking software.',
          realWorldHi: 'रेस्टोरेंट और बेकरी रोजाना का स्टॉक डेटा देखकर ही नया माल तैयार करते हैं।',
        };
      }

      if (puzzle?.prompt?.includes('ratings have dropped') || pTitle.includes('Unhappy Customers')) {
        return {
          hintEn: 'When ratings fall, check customer reviews and feedback comments to see specific complaints.',
          hintHi: 'जब कस्टमर रेटिंग गिरे, तो ग्राहकों के रिव्यू और फीडबैक (Customer reviews and feedback) का विश्लेषण करें।',
          exampleCode: '// Customer Sentiment Analysis:\nAverage Rating: Dropped from 4.6 ★ to 3.2 ★\nTop Complaints: "Delivery delayed", "Packaging damaged"\nAction:         Upgrade packaging and switch delivery partner.',
          exampleNote: 'Customer reviews contain direct qualitative feedback about product and service flaws.',
          explainTitleEn: 'Puzzle 3: Analyzing Customer Feedback',
          explainTitleHi: 'पहेली 3: असंतुष्ट ग्राहकों की समस्या हल करना',
          explainTextEn: 'Customer reviews and ratings are the most direct source of customer sentiment. Analyzing feedback uncovers exact pain points such as poor quality or late delivery.',
          explainTextHi: 'ग्राहकों की रेटिंग कम होने पर उनके रिव्यूज और कमेंट्स पढ़कर ही सही समस्या का पता लगाया जा सकता है।',
          realWorldEn: 'E-commerce and app platforms monitor sentiment analysis dashboards to fix bugs and delivery issues within hours.',
          realWorldHi: 'ऑनलाइन शॉपिंग वेबसाइट्स ग्राहकों के 1-स्टार रिव्यूज पढ़कर तुरंत कमियां सुधारती हैं।',
        };
      }

      return {
        hintEn: puzzle?.hint || 'Analyze the sequence and identify the correct concept.',
        hintHi: 'दी गई स्थिति को ध्यान से पढ़ें और उसमें से सही डेटा या क्रम पहचानें।',
        exampleCode: `Available Tokens:\n${puzzle?.tokens?.map((t: string) => `• ${t}`).join('\n')}`,
        exampleNote: puzzle?.hint || 'Arrange the blocks in logical order.',
        explainTitleEn: puzzle?.title || 'Puzzle Challenge',
        explainTitleHi: 'पहेली की व्याख्या (Challenge Logic)',
        explainTextEn: (puzzle?.prompt || '') + '\n\nExpected target: ' + (puzzle?.expected?.join(' -> ') || ''),
        explainTextHi: 'इस पहेली में सही क्रम या विकल्प: ' + (puzzle?.expected?.join(', ') || ''),
        realWorldEn: 'Logical ordering and critical thinking are essential skills for clean data preparation.',
        realWorldHi: 'डेटा क्लीनिंग और एनालिसिस में सही लॉजिकल सीक्वेंस समझना बहुत जरूरी होता है।',
      };
    }

    if (activeGame === 3) {
      return {
        hintEn: 'Match each data item on the left with its correct type on the right (e.g. Text, Number, Measurement, Image).',
        hintHi: 'बाएं तरफ दिए गए उदाहरण को उसके सही डेटा प्रकार (जैसे Text, Number, Measurement, Image) से मिलाएं।',
        exampleCode: matchPairs.map((p, i) => `${i + 1}. ${p.snippet} ➔ ${p.meaning}`).join('\n'),
        exampleNote: 'Names and words are Text, quantities and scores are Numbers, temperature and speed are Measurements.',
        explainTitleEn: 'Match Concept: Data Types & Categories',
        explainTitleHi: 'डेटा प्रकारों की पहचान (Data Types Matching)',
        explainTextEn: 'Each data point belongs to a specific type. Text describes qualities or identifiers, Numbers represent counts or totals, Images provide visual records, and Measurements capture physical scales.',
        explainTextHi: 'हर डेटा का एक प्रकार होता है: नाम और फीडबैक टेक्स्ट हैं, अंक नंबर हैं, फोटो इमेज है, और 28°C माप है।',
        realWorldEn: 'In Excel and SQL databases, setting the correct column format (Text, Number, Date) prevents calculation bugs.',
        realWorldHi: 'एक्सेल और डेटाबेस में कॉलम का सही टाइप सेट करने से गणना और रिपोर्टिंग सही होती है।',
      };
    }

    // Game 4: Real-Life Mission
    return {
      hintEn: currentMission?.prompt || 'Identify 3 core data points or relevant operational records.',
      hintHi: 'सोचिए कि इस स्थिति में कौन सी 3 मुख्य जानकारियां (Data Points) रजिस्टर या कंप्यूटर में दर्ज करनी चाहिए।',
      exampleCode: currentMission?.expectedResponse || '// Analytical Guidelines:\n1. Identifier: ID / Barcode\n2. Metric: Count / Amount / Attendance\n3. Context: Date & Timestamp',
      exampleNote: currentMission?.scenario || 'Business Data Tracking Scenario',
      explainTitleEn: currentMission?.title || 'Real-Life Analytical Mission',
      explainTitleHi: currentMission?.title || 'व्यावहारिक व्यावसायिक मिशन',
      explainTextEn: (currentMission?.scenario || '') + '\n\nKey Strategy:\n' + (currentMission?.expectedResponse || ''),
      explainTextHi: (currentMission?.scenario || '') + '\n\nसमाधान संकेत:\n' + (currentMission?.expectedResponse || ''),
      realWorldEn: 'Data engineering teams design intake schemas to capture exactly these transactional attributes.',
      realWorldHi: 'कंपनियां ग्राहकों और छात्रों का रिकॉर्ड रखने के लिए इसी तरह का डेटा कलेक्ट करती हैं।',
    };
  }, [activeGame, quizIdx, puzzleIdx, quizQuestions, currentPuzzle, matchPairs, currentMission]);

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
      const totalMissions = registeredBank?.game4Missions?.length || 2;
      if (missionIdx < totalMissions - 1) {
        setMissionIdx((prev) => prev + 1);
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
            <h3 className="ppa-pic-title">{registeredBank?.tabName || 'Data Analytics'}</h3>
            <p className="ppa-pic-subtitle">{registeredBank ? `${registeredBank.topicKey} ${registeredBank.topicTitle}` : 'Introduction to Programming'}</p>

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
                <div className="ppa-prompt-question-row">
                  <h3 className="ppa-prompt-question">
                    {typedQuestion || currentQuestionText}
                    {isTyping && <span className="ppa-typing-cursor">|</span>}
                  </h3>
                  <button
                    type="button"
                    className={`ppa-speech-btn ${isSpeaking ? 'speaking' : ''}`}
                    onClick={() => {
                      if (isSpeaking) {
                        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                          window.speechSynthesis.cancel();
                        }
                        setIsSpeaking(false);
                      } else {
                        speakQuestionText(currentQuestionText);
                      }
                    }}
                    title={
                      isSpeaking
                        ? 'Mute voice'
                        : `Listen (${currentVoiceGender === 'female' ? 'Female' : 'Male'} Indian Voice)`
                    }
                  >
                    <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-sky-600 animate-pulse' : 'text-slate-500'}`} />
                    <span className="ppa-voice-gender-pill">
                      {currentVoiceGender === 'female' ? '👩 Indian' : '👨 Indian'}
                    </span>
                    {isSpeaking && (
                      <span className="ppa-speaking-waves">
                        <span className="sbar sbar-1"></span>
                        <span className="sbar sbar-2"></span>
                        <span className="sbar sbar-3"></span>
                      </span>
                    )}
                  </button>
                </div>
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
                      onClick={() => handleSelectQuizOption(opt.key)}
                      disabled={quizFeedback === 'correct'}
                    >
                      <div className={`ppa-opt-key-badge badge-${opt.key.toLowerCase()}`}>{opt.key}</div>
                      <span className="ppa-opt-text font-normal">{opt.text}</span>
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
                          <span className="font-mono text-xs font-medium text-purple-900">{tok}</span>
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
              GAME 4: REAL-LIFE MISSION VIEW (Dynamic Topic Support)
              ════════════════════════════════════════════════════════════ */}
          {activeGame === 4 && (
            <div className="ppa-mission-container">
              <div className="ppa-mission-grid">
                {/* Left: Real-Life Business Scenario */}
                <div className="ppa-scenario-card">
                  <div className="flex items-center justify-between gap-2">
                    <div className="ppa-scenario-title">
                      <Target className="w-4 h-4 text-pink-600" />
                      <span>{currentMission?.title || `MISSION ${missionIdx + 1} OF 2 — BUSINESS SCENARIO`}</span>
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

                  <div className="ppa-scenario-context-box my-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Business Context</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed">
                      {currentMission?.scenario || 'A team faces an operational challenge requiring practical data analysis.'}
                    </p>
                  </div>

                  <div className="ppa-scenario-task-box p-3 rounded-xl bg-blue-50/70 border border-blue-200">
                    <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>Your Objective</span>
                    </div>
                    <p className="text-sm font-bold text-blue-950 leading-relaxed">
                      {currentMission?.prompt || 'Identify the lesson concept that applies and formulate the analytical solution.'}
                    </p>
                  </div>
                </div>

                {/* Right: Mission Execution & Action Workspace */}
                <div className="ppa-ide-card ppa-mission-action-card">
                  <div className="ppa-ide-head">
                    <span className="ppa-ide-task-text flex items-center gap-1.5 text-slate-200 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Recommended Analytical Action</span>
                    </span>
                    <button
                      type="button"
                      className="ppa-ide-run-btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs transition-all shadow-sm cursor-pointer"
                      onClick={handleSubmitMissionSolution}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Submit Solution</span>
                    </button>
                  </div>

                  <div className="p-4 bg-slate-900/90 rounded-b-xl flex-1 flex flex-col justify-between gap-3 text-slate-100">
                    <div className="space-y-2.5">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Key Decision Guidelines:
                      </div>
                      <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 text-xs text-slate-200 leading-relaxed">
                        <strong className="text-emerald-400">Step 1:</strong> Identify the core business question and map relevant data sources.
                      </div>
                      <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 text-xs text-slate-200 leading-relaxed">
                        <strong className="text-sky-400">Step 2:</strong> Apply the topic's standard methodology to clean, categorize, or analyze.
                      </div>
                      <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700 text-xs text-slate-200 leading-relaxed">
                        <strong className="text-purple-400">Step 3:</strong> Present verified insights to stakeholders to drive objective action.
                      </div>
                    </div>

                    {missionDone && (
                      <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs font-bold flex items-center gap-2 animate-pulse">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          {missionIdx < (registeredBank?.game4Missions?.length || 2) - 1
                            ? 'Mission 1 Approved! Loading Mission 2...'
                            : '🎉 All Missions Completed! Starting Mock Interview automatically...'}
                        </span>
                      </div>
                    )}
                  </div>
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
              disabled={activeGame === 1 ? quizIdx === 0 : activeGame === 2 ? puzzleIdx === 0 : activeGame === 4 ? missionIdx === 0 : false}
              onClick={() => {
                soundEffects.playClick();
                if (activeGame === 1) {
                  setQuizIdx((prev) => Math.max(0, prev - 1));
                  setSelectedQuizKey(null);
                  setQuizFeedback(null);
                } else if (activeGame === 2) {
                  setPuzzleIdx((prev) => Math.max(0, prev - 1));
                } else if (activeGame === 4) {
                  setMissionIdx((prev) => Math.max(0, prev - 1));
                  setMissionDone(false);
                }
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

            {/* Dynamic Main Action Button for Current Game */}
            {activeGame === 1 && (
              <button
                type="button"
                className="ppa-btn-submit-main"
                disabled={!selectedQuizKey || quizFeedback === 'correct'}
                onClick={handleSubmitAnswer}
              >
                <span>Submit Answer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {activeGame === 2 && (
              <button
                type="button"
                className="ppa-btn-submit-main"
                disabled={placedSlots.some((s) => s === null)}
                onClick={handleCheckPuzzleAnswer}
              >
                <span>Check Puzzle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {activeGame === 3 && (
              <button
                type="button"
                className="ppa-btn-submit-main"
                onClick={() => {
                  if (Object.keys(matchedPairs).length === matchPairs.length) {
                    setUnlockedGame((prev) => Math.max(prev, 4));
                    setActiveGame(4);
                  } else {
                    handleSkipQuestion();
                  }
                }}
              >
                <span>{Object.keys(matchedPairs).length === matchPairs.length ? 'Continue to Game 4 »' : 'Skip & Continue »'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {activeGame === 4 && (
              <button
                type="button"
                className="ppa-btn-submit-main bg-emerald-600 hover:bg-emerald-500"
                onClick={handleSubmitMissionSolution}
              >
                <span>
                  {missionIdx < (registeredBank?.game4Missions?.length || 2) - 1
                    ? 'Submit Mission 1 »'
                    : 'Submit & Start Mock Interview 🎙️'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
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
                    Ye example dekh kar samjho ki is question ka correct concept aur logic kya hai:
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
