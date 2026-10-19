import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Clock,
  Code2,
  Gamepad2,
  Mic,
  MicOff,
  Sparkles,
  Award,
  Bot,
  Send,
  HelpCircle,
  Trophy,
  Star,
  ExternalLink,
  Flame,
  Coins,
  Check,
  X,
  Zap,
  BookOpen,
  Menu,
  Bell,
  Download,
  FileText,
  FileCode,
  Link,
  PhoneOff,
  Video,
  VideoOff,
  Lightbulb,
  Trash2,
  LayoutGrid,
  Search,
  Wallet,
  Globe,
  ChevronDown,
  Target
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { awardLearnerTelemetry } from '../../../services/realAuthService';
import type { WorkspaceStepId } from '../PythonTopicWorkspace';
import { TOPICS } from '../PythonChapterView';
import { LESSON_BUNNY_VIDEOS, BUNNY_STREAM_CONFIG } from '../../../services/bunnyVideoService';
import { StableMouthLipSyncAvatar } from '../interview/StableMouthLipSyncAvatar';
import {
  getPreloadedInterviewQuestionsForTopic,
  evaluateInterviewAnswerDeterministically,
  DeterministicEvaluationResult,
  PreloadedInterviewQuestion,
} from '../data/mockInterviewQuestionBank';

export interface PracticeChallenge {
  num: number;
  tag: string;
  title: string;
  concept: string;
  text: string;
  codeSnippet?: string;
  options: {
    id: string;
    text: string;
    correct: boolean;
    explanation: string;
  }[];
}

export const PRACTICE_GAMES: PracticeChallenge[] = [
  {
    num: 1,
    tag: "Fundamentals",
    title: "QUESTION 1 — CONCEPT CHALLENGE",
    concept: "What is Programming?",
    text: "A computer follows instructions to complete a task. What is this process called?",
    options: [
      { id: 'A', text: "Programming", correct: true, explanation: "Programming is the process of creating a set of instructions that tell a computer how to perform a task." },
      { id: 'B', text: "Browsing", correct: false, explanation: "Browsing is viewing web pages on the internet." },
      { id: 'C', text: "Charging", correct: false, explanation: "Charging powers the computer hardware battery." },
      { id: 'D', text: "Printing", correct: false, explanation: "Printing produces physical hard copies on paper." },
    ],
  },
  {
    num: 2,
    tag: "Python History",
    title: "QUESTION 2 — CREATOR & ORIGIN",
    concept: "Guido van Rossum (1991)",
    text: "Who designed and created the Python programming language in 1991?",
    options: [
      { id: 'A', text: "Dennis Ritchie", correct: false, explanation: "Dennis Ritchie created the C programming language." },
      { id: 'B', text: "Guido van Rossum", correct: true, explanation: "Guido van Rossum created Python and released version 0.9.0 in February 1991." },
      { id: 'C', text: "James Gosling", correct: false, explanation: "James Gosling created Java." },
      { id: 'D', text: "Bjarne Stroustrup", correct: false, explanation: "Bjarne Stroustrup created C++." },
    ],
  },
  {
    num: 3,
    tag: "Output & Syntax",
    title: "QUESTION 3 — FIRST PYTHON COMMAND",
    concept: "The print() Function",
    text: "Which built-in function is used to display output on the screen in Python 3?",
    codeSnippet: '_____("Welcome to Python!")',
    options: [
      { id: 'A', text: 'echo("Welcome to Python!")', correct: false, explanation: "'echo' is used in Unix shell / PHP, not Python." },
      { id: 'B', text: 'System.out.println("Welcome to Python!")', correct: false, explanation: "This is Java syntax." },
      { id: 'C', text: 'print("Welcome to Python!")', correct: true, explanation: "The print() function outputs the specified message to the screen or console." },
      { id: 'D', text: 'console.log("Welcome to Python!")', correct: false, explanation: "This is JavaScript syntax." },
    ],
  },
  {
    num: 4,
    tag: "Data Types",
    title: "QUESTION 4 — VARIABLE TYPES",
    concept: "Floating Point Numbers",
    text: "In Python, what data type is automatically assigned to the variable score = 98.5?",
    codeSnippet: "score = 98.5\nprint(type(score))",
    options: [
      { id: 'A', text: "<class 'float'>", correct: true, explanation: "Numbers with fractional decimal points are stored as floating point numbers (float)." },
      { id: 'B', text: "<class 'int'>", correct: false, explanation: "int is reserved for whole integers like 98 without decimal fractions." },
      { id: 'C', text: "<class 'str'>", correct: false, explanation: "str is for text strings enclosed in quotes." },
      { id: 'D', text: "<class 'bool'>", correct: false, explanation: "bool represents True or False values." },
    ],
  },
  {
    num: 5,
    tag: "Indentation Rules",
    title: "QUESTION 5 — CODE STRUCTURE",
    concept: "Whitespace Indentation",
    text: "Unlike C++ or Java that use curly braces { }, how does Python define a code block inside an if statement or loop?",
    options: [
      { id: 'A', text: "Semicolons at line endings", correct: false, explanation: "Semicolons are optional and do not create blocks in Python." },
      { id: 'B', text: "Round parentheses ( )", correct: false, explanation: "Parentheses are used for tuples and function calls." },
      { id: 'C', text: "Square brackets [ ]", correct: false, explanation: "Square brackets are used for lists." },
      { id: 'D', text: "Consistent Whitespace Indentation", correct: true, explanation: "Python strictly uses 4 spaces (or tabs) of indentation to group blocks of code." },
    ],
  },
  {
    num: 6,
    tag: "String Operations",
    title: "QUESTION 6 — REPETITION & CONCAT",
    concept: "String Multiplication",
    text: "What will be the exact output of running: print('Py' + 'thon' * 2) in Python?",
    codeSnippet: "print('Py' + 'thon' * 2)",
    options: [
      { id: 'A', text: "'PythonPython'", correct: false, explanation: "'*' has higher precedence than '+', so only 'thon' is multiplied." },
      { id: 'B', text: "'Pythonthon'", correct: true, explanation: "'thon' * 2 produces 'thonthon', and concatenating 'Py' yields 'Pythonthon'!" },
      { id: 'C', text: "TypeError: Cannot multiply string", correct: false, explanation: "Python natively supports string repetition with the * operator." },
      { id: 'D', text: "'Python2'", correct: false, explanation: "The * operator repeats strings rather than appending numbers." },
    ],
  },
  {
    num: 7,
    tag: "Boolean Logic",
    title: "QUESTION 7 — TRUTHY & FALSY",
    concept: "Falsy Evaluation",
    text: "Which of the following values evaluates to False when passed into bool()?",
    codeSnippet: "bool(value) -> ?",
    options: [
      { id: 'A', text: "bool('False')", correct: false, explanation: "Any non-empty string is truthy in Python!" },
      { id: 'B', text: "bool([0])", correct: false, explanation: "A list with any element (even 0) is truthy." },
      { id: 'C', text: "bool(0)", correct: true, explanation: "The number 0, empty string '', empty list [], and None are falsy in Python." },
      { id: 'D', text: "bool(-1)", correct: false, explanation: "Any non-zero integer is truthy." },
    ],
  },
  {
    num: 8,
    tag: "Data Structures",
    title: "QUESTION 8 — LIST INDEXING",
    concept: "Negative Indices",
    text: "Given skills = ['Python', 'SQL', 'Tableau', 'GenAI'], what is the value of skills[-1]?",
    codeSnippet: "skills = ['Python', 'SQL', 'Tableau', 'GenAI']\nprint(skills[-1])",
    options: [
      { id: 'A', text: "'GenAI'", correct: true, explanation: "Negative index -1 in Python always returns the last element of the sequence." },
      { id: 'B', text: "'Python'", correct: false, explanation: "'Python' is at index 0 or -4." },
      { id: 'C', text: "IndexError", correct: false, explanation: "Python fully supports negative indexing." },
      { id: 'D', text: "'Tableau'", correct: false, explanation: "'Tableau' is at index 2 or -2." },
    ],
  },
  {
    num: 9,
    tag: "Bug Hunter",
    title: "QUESTION 9 — IDENTIFIER RULES",
    concept: "Variable Naming Syntax",
    text: "Which of the following is an INVALID variable name in Python and triggers a SyntaxError?",
    options: [
      { id: 'A', text: "_user_score", correct: false, explanation: "Identifiers can legally start with an underscore." },
      { id: 'B', text: "total_marks_2026", correct: false, explanation: "Digits are allowed in variable names as long as they are not the first character." },
      { id: 'C', text: "MAX_SPEED", correct: false, explanation: "Uppercase identifiers are legal and commonly used for constants." },
      { id: 'D', text: "2nd_student", correct: true, explanation: "Python variable names cannot start with a number! '2nd_student' raises an immediate SyntaxError." },
    ],
  },
  {
    num: 10,
    tag: "Execution Model",
    title: "QUESTION 10 — BYTECODE & PVM",
    concept: "Python Virtual Machine",
    text: "When you run a Python script, what intermediate bytecode format does the interpreter compile it into before running on the PVM?",
    codeSnippet: "main.py ➔ Bytecode (.pyc) ➔ PVM Execution",
    options: [
      { id: 'A', text: "Native x86 Machine Code", correct: false, explanation: "Compiled languages like C produce machine code; Python uses bytecode interpreted by PVM." },
      { id: 'B', text: "Bytecode (.pyc format)", correct: true, explanation: "Python source code is compiled into platform-independent Bytecode (.pyc files) executed by the Python Virtual Machine." },
      { id: 'C', text: "Assembly Code", correct: false, explanation: "CPython does not convert code to assembly language." },
      { id: 'D', text: "JavaScript Code", correct: false, explanation: "Python does not transpile to JavaScript in standard execution." },
    ],
  },
];

export interface MobileTopicWorkspaceProps {
  userName?: string;
  topicId?: number;
  initialStep?: WorkspaceStepId;
  onBack: () => void;
  onOpenAdvisor?: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenProfile?: () => void;
}

export const MobileTopicWorkspace: React.FC<MobileTopicWorkspaceProps> = ({
  userName = 'Learner',
  topicId = 1,
  initialStep = 'learn',
  onBack,
  onOpenAdvisor,
  onOpenUnlockModal,
  onOpenProfile,
}) => {
  const currentTopic = TOPICS.find((t) => t.id === topicId) || TOPICS[0];
  const firstLesson = currentTopic.lessons[0] || { title: currentTopic.title, time: '08:00' };

  const normalizeStep = (step?: WorkspaceStepId): WorkspaceStepId => {
    if (step === 'interview') return 'interview';
    if (step === 'play' || step === 'practice' || step === 'code') return 'play';
    return 'learn';
  };

  // Current Active Step: 'learn' (Video) | 'play' (Game) | 'interview' (Mock Interview)
  const [activeStep, setActiveStep] = useState<WorkspaceStepId>(normalizeStep(initialStep));

  useEffect(() => {
    if (initialStep) {
      setActiveStep(normalizeStep(initialStep));
    }
  }, [initialStep]);

  // Official Bunny.net Stream Video resolution
  const bunnyVideoId =
    (topicId === 1 ? '56e7a759-1562-4700-ab14-d5f31b921dc1' : '') ||
    LESSON_BUNNY_VIDEOS[`topic_${topicId}_lesson_1`]?.videoId ||
    '56e7a759-1562-4700-ab14-d5f31b921dc1';
  const bunnyLibraryId = BUNNY_STREAM_CONFIG.libraryId || '783689';
  const bunnyEmbedUrl = bunnyVideoId
    ? `https://iframe.mediadelivery.net/embed/${bunnyLibraryId}/${bunnyVideoId}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`
    : '';

  // Auto advance to Game when Bunny video finishes
  useEffect(() => {
    const handleBunnyMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          if (data.event === 'ended' || data.type === 'ended' || data.status === 'ended') {
            soundEffects.playCelebration();
            setActiveStep('play');
          }
        }
      } catch {}
    };
    window.addEventListener('message', handleBunnyMessage);
    return () => window.removeEventListener('message', handleBunnyMessage);
  }, []);

  // Sync activeStep when URL hash updates (e.g. #interview?topic=1)
  useEffect(() => {
    const syncHash = () => {
      const h = window.location.hash || '';
      const baseH = h.split('?')[0];
      if (baseH === '#interview' || baseH === '#mockinterview') {
        setActiveStep('interview');
      } else if (baseH === '#play' || baseH === '#game' || baseH === '#practice') {
        setActiveStep('play');
      } else if (baseH === '#learn' || baseH === '#video') {
        setActiveStep('learn');
      }
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const playTactile = () => {
    try {
      soundEffects.playClick();
    } catch {
      // fallback
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. VIDEO SCREEN STATE (Matches media_1792386781104_54a2e591.jpg)
  // ─────────────────────────────────────────────────────────────────────────────
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(65); // 65% as shown in screenshot
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(480); // 8:00 min
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const toggleVideoPlay = () => {
    playTactile();
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  };

  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    setVideoCurrentTime(videoRef.current.currentTime);
    if (videoRef.current.duration) {
      setVideoDuration(videoRef.current.duration);
      setVideoProgress(Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100));
    }
  };

  const formatVideoTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Close video and transition directly to practice game
  const handleCloseVideoAndPlayGame = () => {
    playTactile();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
    setActiveStep('play');
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. PRACTICE GAME SCREEN STATE (10 Distinct Unique Challenges)
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeGameLevel, setActiveGameLevel] = useState<number>(1);
  const [selectedGameOption, setSelectedGameOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [gameQuestionsDone, setGameQuestionsDone] = useState<number>(0);
  const [gameScore, setGameScore] = useState<number>(10);

  // Active Challenge corresponding to activeGameLevel (1 to 10)
  const currentChallenge = PRACTICE_GAMES[activeGameLevel - 1] || PRACTICE_GAMES[0];

  const handleSelectGameOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    playTactile();
    setSelectedGameOption(optId);
  };

  const handleSubmitGameAnswer = () => {
    if (!selectedGameOption || isAnswerSubmitted) return;
    playTactile();
    setIsAnswerSubmitted(true);
    const chosen = currentChallenge.options.find((o) => o.id === selectedGameOption);
    const correct = chosen?.correct ?? false;
    setIsAnswerCorrect(correct);
    if (correct) {
      try {
        soundEffects.playCelebration();
        soundEffects.playCoinCollect();
        awardLearnerTelemetry(20, 5);
      } catch {}
      setGameQuestionsDone((prev) => Math.min(10, Math.max(prev, activeGameLevel)));
      setGameScore((prev) => prev + 10);
    }
  };

  const handleSelectLevel = (levelNum: number) => {
    playTactile();
    setActiveGameLevel(levelNum);
    setSelectedGameOption(null);
    setIsAnswerSubmitted(false);
    setIsAnswerCorrect(false);
  };

  const handleNextGameLevel = () => {
    playTactile();
    if (activeGameLevel < 10) {
      setActiveGameLevel((prev) => prev + 1);
      setSelectedGameOption(null);
      setIsAnswerSubmitted(false);
      setIsAnswerCorrect(false);
    } else {
      handleFinishGameAndStartInterview();
    }
  };

  const handleFinishGameAndStartInterview = () => {
    playTactile();
    try {
      soundEffects.playCelebration();
    } catch {}
    setActiveStep('interview');
    if (typeof window !== 'undefined') {
      window.location.hash = `#interview?topic=${topicId || 1}`;
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. MOCK INTERVIEW SCREEN STATE (Matches media_1792386770731_fc4283bf.png)
  // ─────────────────────────────────────────────────────────────────────────────
  const interviewQuestions = useMemo<PreloadedInterviewQuestion[]>(
    () => getPreloadedInterviewQuestionsForTopic(topicId || 1),
    [topicId]
  );
  const [activeInterviewQ, setActiveInterviewQ] = useState<number>(1);
  const currentInterviewQData = interviewQuestions[activeInterviewQ - 1] || interviewQuestions[0];

  const [activeInterviewTab, setActiveInterviewTab] = useState<'feedback' | 'model' | 'points'>('feedback');
  const [interviewAnswerText, setInterviewAnswerText] = useState<string>('');
  const [isInterviewRecording, setIsInterviewRecording] = useState<boolean>(false);
  const [isInterviewSubmitted, setIsInterviewSubmitted] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<DeterministicEvaluationResult | null>(null);
  const [isPass, setIsPass] = useState<boolean | null>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
  const [interviewTimeLeft, setInterviewTimeLeft] = useState<number>(592); // 09:52
  const [isHrSpeaking, setIsHrSpeaking] = useState<boolean>(false);
  const [hrSpeakingText, setHrSpeakingText] = useState<string>('');
  const [isMicHighlighted, setIsMicHighlighted] = useState<boolean>(false);
  const [speechTip, setSpeechTip] = useState<string>('');
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Real device camera video ref & stream ref
  const userCameraVideoRef = useRef<HTMLVideoElement>(null);
  const userMediaStreamRef = useRef<MediaStream | null>(null);

  const startCameraStream = async () => {
    try {
      setCameraError(null);
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError("Camera API not supported on this browser");
        setHasCameraPermission(false);
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false, // Critical: Only request video mirror so mobile mic is NOT locked by MediaStream
      });
      userMediaStreamRef.current = stream;
      if (userCameraVideoRef.current) {
        userCameraVideoRef.current.srcObject = stream;
        userCameraVideoRef.current.play().catch(() => {});
      }

      setHasCameraPermission(true);
      setIsCameraOn(true);
    } catch (err: any) {
      console.warn("Camera permission error:", err);
      setCameraError(err.message || "Camera permission denied");
      setHasCameraPermission(false);
      setIsCameraOn(false);
    }
  };

  const stopCameraStream = () => {
    if (userMediaStreamRef.current) {
      userMediaStreamRef.current.getTracks().forEach((track) => track.stop());
      userMediaStreamRef.current = null;
    }
    if (userCameraVideoRef.current) {
      userCameraVideoRef.current.srcObject = null;
    }
  };

  // Re-attach video stream if camera is toggled back on
  useEffect(() => {
    if (isCameraOn && userMediaStreamRef.current && userCameraVideoRef.current) {
      userCameraVideoRef.current.srcObject = userMediaStreamRef.current;
      userCameraVideoRef.current.play().catch(() => {});
    }
  }, [isCameraOn, hasCameraPermission]);

  useEffect(() => {
    if (activeStep !== 'interview') {
      stopCameraStream();
      return;
    }

    // Auto-request camera & microphone when entering Mock Interview
    startCameraStream();

    const timer = setInterval(() => {
      setInterviewTimeLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);

    // Auto-speak HR Question
    const speechTimeout = setTimeout(() => {
      handleSpeakQuestion();
    }, 600);

    return () => {
      clearInterval(timer);
      clearTimeout(speechTimeout);
      stopCameraStream();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeStep]);

  const formatInterviewTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. MOCK INTERVIEW HR PROFILES (English Mentor vs Hindi Girl Voice)
  // ─────────────────────────────────────────────────────────────────────────────
  const [selectedHr, setSelectedHr] = useState<'male' | 'female'>('male');

  const HR_PROFILES = {
    male: {
      name: "English Mentor (Indian English Voice)",
      shortName: "English",
      avatar: "/images/hr_subodh_kumar.jpg",
      role: "English AI Mentor",
      badge: "English",
      accent: "Indian English (Male)",
      gender: "male" as const,
    },
    female: {
      name: "Hindi Mentor (Real Human Girl Voice)",
      shortName: "Hindi",
      avatar: "/images/hr_aditi_sharma.jpg",
      role: "Hindi AI Mentor",
      badge: "Hindi",
      accent: "Real Human Girl Voice (Hindi)",
      gender: "female" as const,
    },
  };
  const currentHr = HR_PROFILES[selectedHr];

  const recognitionRef = useRef<any>(null);
  const userRequestedRecordingRef = useRef<boolean>(false);
  const speechRestartTimerRef = useRef<any>(null);
  const speechSpeakingTimerRef = useRef<any>(null);
  const [isStudentSpeakingAudio, setIsStudentSpeakingAudio] = useState<boolean>(false);
  const speechAccumulatedRef = useRef<string>('');
  const autoNextTimerRef = useRef<any>(null);
  const [autoNextCountdown, setAutoNextCountdown] = useState<number | null>(null);
  const isInterviewRecordingRef = useRef<boolean>(false);
  const isInterviewSubmittedRef = useRef<boolean>(false);

  useEffect(() => {
    isInterviewRecordingRef.current = isInterviewRecording;
  }, [isInterviewRecording]);

  useEffect(() => {
    isInterviewSubmittedRef.current = isInterviewSubmitted;
  }, [isInterviewSubmitted]);

  const stopSpeechRecognition = () => {
    userRequestedRecordingRef.current = false;
    if (speechRestartTimerRef.current) {
      clearTimeout(speechRestartTimerRef.current);
      speechRestartTimerRef.current = null;
    }
    if (speechSpeakingTimerRef.current) {
      clearTimeout(speechSpeakingTimerRef.current);
      speechSpeakingTimerRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.stop();
      } catch {}
      recognitionRef.current = null;
    }
    setIsInterviewRecording(false);
    isInterviewRecordingRef.current = false;
    setIsStudentSpeakingAudio(false);
  };

  const getIndianVoice = (isFem: boolean, isHindiLang: boolean = false) => {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    if (isFem) {
      if (isHindiLang) {
        const hiFem = voices.find((v) => {
          const lang = (v.lang || '').toLowerCase().replace('_', '-');
          const name = (v.name || '').toLowerCase();
          const isHi = lang.startsWith('hi') || lang.includes('hi-in') || name.includes('hindi');
          const isFem = name.includes('female') || name.includes('kalpana') || name.includes('swara') || name.includes('geeta') || name.includes('aditi') || !name.includes('male');
          return isHi && isFem;
        });
        if (hiFem) return hiFem;
      }

      const inFem = voices.find((v) => {
        const lang = (v.lang || '').toLowerCase().replace('_', '-');
        const name = (v.name || '').toLowerCase();
        const isIndian = lang.startsWith('en-in') || lang.startsWith('hi') || name.includes('india') || name.includes('hindi');
        const isFemTag =
          name.includes('female') ||
          name.includes('heera') ||
          name.includes('aditi') ||
          name.includes('zira') ||
          name.includes('sangeeta') ||
          name.includes('kavya') ||
          name.includes('ananya') ||
          name.includes('priya') ||
          name.includes('kalpana') ||
          name.includes('swara') ||
          name.includes('#female');
        return isIndian && isFemTag;
      });
      if (inFem) return inFem;

      const anyIn = voices.find((v) => {
        const lang = (v.lang || '').toLowerCase().replace('_', '-');
        const name = (v.name || '').toLowerCase();
        return (lang.startsWith('en-in') || lang.startsWith('hi') || name.includes('india')) && !name.includes('male') && !name.includes('ravi') && !name.includes('rishi');
      });
      if (anyIn) return anyIn;

      return (
        voices.find((v) => {
          const name = (v.name || '').toLowerCase();
          return name.includes('female') || name.includes('zira') || name.includes('samantha');
        }) || null
      );
    } else {
      const inMale = voices.find((v) => {
        const lang = (v.lang || '').toLowerCase().replace('_', '-');
        const name = (v.name || '').toLowerCase();
        const isIndian = lang.startsWith('en-in') || lang.startsWith('hi') || name.includes('india') || name.includes('hindi');
        const isMaleTag =
          name.includes('male') ||
          name.includes('ravi') ||
          name.includes('rishi') ||
          name.includes('neerja') ||
          name.includes('madhav') ||
          name.includes('rohit') ||
          name.includes('#male');
        return isIndian && isMaleTag;
      });
      if (inMale) return inMale;

      const anyIn = voices.find((v) => {
        const lang = (v.lang || '').toLowerCase().replace('_', '-');
        const name = (v.name || '').toLowerCase();
        return (lang.startsWith('en-in') || name.includes('india')) && !name.includes('female') && !name.includes('heera') && !name.includes('zira') && !name.includes('aditi');
      });
      if (anyIn) return anyIn;

      return (
        voices.find((v) => {
          const name = (v.name || '').toLowerCase();
          return name.includes('male') || name.includes('david') || name.includes('george') || name.includes('alex');
        }) || null
      );
    }
  };

  const getSpeechRecognitionClass = () => {
    if (typeof window === 'undefined') return null;
    return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
  };

  const initAndStartRecognition = (preferredLang?: string) => {
    const SpeechRecognitionClass = getSpeechRecognitionClass();

    if (!SpeechRecognitionClass) {
      setSpeechTip("⚠️ Speech Recognition is not supported on this browser. Please type your answer or use Android Chrome.");
      setIsInterviewRecording(false);
      isInterviewRecordingRef.current = false;
      userRequestedRecordingRef.current = false;
      return;
    }

    // Clean up existing instance before starting fresh
    if (recognitionRef.current) {
      try {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.abort();
      } catch {}
      recognitionRef.current = null;
    }

    try {
      const recognition = new SpeechRecognitionClass();
      const langToUse = preferredLang || (selectedHr === 'female' ? 'hi-IN' : 'en-IN');
      recognition.lang = langToUse;
      // continuous = true allows smooth speech without cutting off every 2 seconds
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        // Crucial: "Mic On: Listening" must only appear when the recognition service is actually running
        setIsInterviewRecording(true);
        isInterviewRecordingRef.current = true;
        setIsStudentSpeakingAudio(true);
        setSpeechTip(
          selectedHr === 'female'
            ? "● Listening: बोलिए, आपकी आवाज़ लाइव टाइप हो रही है..."
            : "● Listening: Speak your answer, transcribing live..."
        );
      };

      recognition.onspeechstart = () => {
        setIsStudentSpeakingAudio(true);
      };

      recognition.onspeechend = () => {
        if (speechSpeakingTimerRef.current) clearTimeout(speechSpeakingTimerRef.current);
        speechSpeakingTimerRef.current = setTimeout(() => {
          setIsStudentSpeakingAudio(false);
        }, 800);
      };

      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let newlyFinalized = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          const text = res[0]?.transcript || '';
          if (res.isFinal) {
            newlyFinalized += text + ' ';
          } else {
            interimTranscript += text;
          }
        }

        if (newlyFinalized.trim()) {
          speechAccumulatedRef.current = (speechAccumulatedRef.current + ' ' + newlyFinalized.trim()).trim();
        }

        const liveText = (speechAccumulatedRef.current + (interimTranscript ? ' ' + interimTranscript.trim() : '')).trim();
        if (liveText) {
          setInterviewAnswerText(liveText);
          setIsStudentSpeakingAudio(true);
          const previewWord = (interimTranscript.trim() || newlyFinalized.trim());
          setSpeechTip("● Live: " + previewWord);
        }
      };

      recognition.onerror = (event: any) => {
        const error = event.error;
        console.warn("SpeechRecognition error:", error);

        if (error === 'not-allowed' || error === 'service-not-allowed') {
          userRequestedRecordingRef.current = false;
          setIsInterviewRecording(false);
          isInterviewRecordingRef.current = false;
          setIsStudentSpeakingAudio(false);
          setSpeechTip("⚠️ Mic permission blocked. Tap browser lock/settings icon to allow microphone.");
        } else if (error === 'audio-capture') {
          userRequestedRecordingRef.current = false;
          setIsInterviewRecording(false);
          isInterviewRecordingRef.current = false;
          setIsStudentSpeakingAudio(false);
          setSpeechTip("⚠️ Mic unavailable. Please ensure no other app is using your microphone.");
        } else if (error === 'network') {
          setSpeechTip("⚠️ Speech network error. Please check your internet connection.");
        } else if (error === 'no-speech') {
          // Normal silence; do not cancel recording
          setSpeechTip("● Listening: No speech detected yet, please speak...");
        }
      };

      recognition.onend = () => {
        // If user still intends to record and interview has not been submitted, restart with a fresh instance
        if (userRequestedRecordingRef.current && !isInterviewSubmittedRef.current) {
          if (speechRestartTimerRef.current) clearTimeout(speechRestartTimerRef.current);
          speechRestartTimerRef.current = setTimeout(() => {
            if (userRequestedRecordingRef.current && !isInterviewSubmittedRef.current) {
              initAndStartRecognition(langToUse);
            }
          }, 150);
        } else {
          setIsInterviewRecording(false);
          isInterviewRecordingRef.current = false;
          setIsStudentSpeakingAudio(false);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.warn("initAndStartRecognition exception:", err);
      setIsInterviewRecording(false);
      isInterviewRecordingRef.current = false;
      setIsStudentSpeakingAudio(false);
      if (err?.name === 'InvalidStateError') {
        if (speechRestartTimerRef.current) clearTimeout(speechRestartTimerRef.current);
        speechRestartTimerRef.current = setTimeout(() => {
          if (userRequestedRecordingRef.current && !isInterviewSubmittedRef.current) {
            initAndStartRecognition(preferredLang);
          }
        }, 200);
      } else {
        setSpeechTip("⚠️ Could not activate mic: " + (err.message || 'Error'));
      }
    }
  };

  const toggleSpeechRecording = () => {
    playTactile();

    if (isInterviewRecording || userRequestedRecordingRef.current) {
      stopSpeechRecognition();
      setSpeechTip("✓ Speaking paused. Click Submit to evaluate!");
    } else {
      userRequestedRecordingRef.current = true;
      setIsMicHighlighted(false);
      setSpeechTip("⏳ Activating microphone...");
      initAndStartRecognition(selectedHr === 'female' ? 'hi-IN' : 'en-IN');
    }
  };

  const handleSpeakQuestion = (overrideHr?: 'male' | 'female', overrideQNum?: number) => {
    playTactile();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const hrKey = overrideHr || selectedHr;
    const isFem = hrKey === 'female';
    const qNum = overrideQNum || activeInterviewQ;
    const qData = interviewQuestions[qNum - 1] || interviewQuestions[0];

    const questionHindi = qData.questionHi || qData.questionEn;
    const questionText = isFem
      ? `नमस्ते! मैं अदिति शर्मा। आपके पायथन टेक्निकल इंटरव्यू में आपका स्वागत है। सवाल नंबर ${qNum}: ${questionHindi}`
      : `Namaste! I am your English Technical Mentor from Future IT Industry. Welcome to your technical mock interview. Question ${qNum}: ${qData.questionEn}`;

    setHrSpeakingText(questionText);
    setIsHrSpeaking(true);
    setIsMicHighlighted(false);

    const utterance = new SpeechSynthesisUtterance(questionText);
    utterance.lang = isFem ? 'hi-IN' : 'en-IN';
    utterance.rate = isFem ? 0.95 : 0.92;
    utterance.pitch = isFem ? 1.25 : 0.88;

    const matchedVoice = getIndianVoice(isFem, isFem);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    let finished = false;
    const onSpeechEnd = () => {
      if (finished) return;
      finished = true;
      clearTimeout(safetyTimer);
      setIsHrSpeaking(false);
      setIsMicHighlighted(true);
      setSpeechTip("🎙️ Mentor question complete! Tap 'Speak Answer' to speak into mic");
    };

    const safetyTimer = setTimeout(onSpeechEnd, 12000);

    utterance.onstart = () => setIsHrSpeaking(true);
    utterance.onend = onSpeechEnd;
    utterance.onerror = () => {
      clearTimeout(safetyTimer);
      setIsHrSpeaking(false);
      setIsMicHighlighted(true);
      setSpeechTip("🎙️ Tap 'Speak Answer' below to answer into mic");
    };

    window.speechSynthesis.speak(utterance);
  };

  const speakVerdict = (text: string, isFemMode?: boolean) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setHrSpeakingText(text);
    setIsHrSpeaking(true);

    const isFem = isFemMode ?? (selectedHr === 'female');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = isFem ? 'hi-IN' : 'en-IN';
    utterance.rate = isFem ? 0.95 : 0.92;
    utterance.pitch = isFem ? 1.25 : 0.88;

    const matchedVoice = getIndianVoice(isFem, isFem);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    const timer = setTimeout(() => setIsHrSpeaking(false), 9000);
    utterance.onend = () => {
      clearTimeout(timer);
      setIsHrSpeaking(false);
    };
    utterance.onerror = () => {
      clearTimeout(timer);
      setIsHrSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleSubmitInterviewAnswer = () => {
    if (!interviewAnswerText.trim()) {
      alert("Please speak or write your answer before submitting.");
      return;
    }
    playTactile();

    // Stop recording if active
    stopSpeechRecognition();

    const result = evaluateInterviewAnswerDeterministically(interviewAnswerText, currentInterviewQData);
    setEvaluationResult(result);
    const passed = result.score >= 5.5; // pass threshold 5.5 / 10
    setIsPass(passed);
    setIsInterviewSubmitted(true);
    isInterviewSubmittedRef.current = true;
    setActiveInterviewTab('feedback');

    if (passed) {
      try {
        soundEffects.playCelebration();
        awardLearnerTelemetry(50, 20);
      } catch {}
      const verdict = selectedHr === 'female'
        ? `बधाई हो! आपका उत्तर पास हुआ, स्कोर 10 में से ${result.score} है! बहुत बढ़िया उत्तर!`
        : `Congratulations! Your answer is accepted and passed with a score of ${result.score} out of 10! Excellent response!`;
      speakVerdict(verdict, selectedHr === 'female');
    } else {
      try {
        soundEffects.playClick();
      } catch {}
      const verdict = selectedHr === 'female'
        ? `आपका स्कोर 10 में से ${result.score} है। कुछ मुख्य कॉन्सेप्ट्स मिसिंग हैं, कृपया सुधार करें।`
        : `Your answer needs improvement. Score is ${result.score} out of 10. Key concepts were missing. Please review model answer.`;
      speakVerdict(verdict, selectedHr === 'female');
    }

    // Auto-countdown to disappear result and auto-start Question 2 (or next question)
    if (autoNextTimerRef.current) {
      clearInterval(autoNextTimerRef.current);
    }
    let countdown = 6;
    setAutoNextCountdown(countdown);

    autoNextTimerRef.current = setInterval(() => {
      countdown -= 1;
      setAutoNextCountdown(countdown);
      if (countdown <= 0) {
        clearInterval(autoNextTimerRef.current);
        autoNextTimerRef.current = null;
        setAutoNextCountdown(null);
        // Auto-advance to next question!
        if (activeInterviewQ < 5) {
          handleSelectQuestion(activeInterviewQ + 1);
        } else {
          handleSelectQuestion(1);
        }
      }
    }, 1000);
  };

  const handleSelectQuestion = (qNum: number) => {
    playTactile();
    stopSpeechRecognition();
    if (autoNextTimerRef.current) {
      clearInterval(autoNextTimerRef.current);
      autoNextTimerRef.current = null;
      setAutoNextCountdown(null);
    }
    setActiveInterviewQ(qNum);
    setInterviewAnswerText('');
    speechAccumulatedRef.current = '';
    setEvaluationResult(null);
    setIsPass(null);
    setIsInterviewSubmitted(false);
    isInterviewSubmittedRef.current = false;
    setActiveInterviewTab('feedback');
    handleSpeakQuestion(selectedHr, qNum);
  };

  return (
    <div
      className="w-full min-h-[100dvh] bg-[#f3f8fe] text-slate-900 pb-36 text-left font-sans select-auto overflow-y-auto touch-pan-y"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* ═════════════════════════════════════════════════════════════════════════
          TOP GLOBAL HEADER (Matching all 3 reference screenshots)
          ═════════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-3.5 py-2 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer active:scale-90 transition-transform"
            aria-label="Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* FUTURE IT INDUSTRY LOGO */}
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-xs">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black tracking-tight text-blue-950 leading-none">
                FUTURE <span className="text-blue-600">IT</span> INDUSTRY
              </span>
              <span className="text-[7.5px] font-bold text-slate-400 tracking-wider leading-none mt-0.5">
                Learn • Play • Build • Grow
              </span>
            </div>
          </div>
        </div>

        {/* Right: EXACT 4 Items: Search, Wallet, Notification, Profile Picture */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* 1. Search */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Search"
            title="Search courses"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* 2. Wallet Pill with Amount */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            }}
            className="h-8 px-2.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/90 hover:from-amber-100 hover:to-amber-200 border border-amber-300 text-amber-950 flex items-center gap-1 active:scale-95 transition-all cursor-pointer shadow-2xs shrink-0"
            aria-label="Wallet & Earnings"
            title="Wallet Balance"
          >
            <Wallet className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="text-xs font-black text-amber-950 leading-none">
              ₹500
            </span>
          </button>

          {/* 3. Notification */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              alert('🔔 Welcome to FUTURE IT INDUSTRY!\nYou are currently in Python Chapter 1.');
            }}
            className="relative w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[8.5px] font-black flex items-center justify-center ring-1.5 ring-white">
              3
            </span>
          </button>

          {/* 4. Profile Picture (Gmail avatar) */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              onOpenProfile?.();
            }}
            className="relative rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xs active:scale-90 transition-all cursor-pointer ml-0.5"
            aria-label="Profile"
            title="Profile"
          >
            <img
              src={(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) || '/images/profile_student_avatar.png'}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/profile_student_avatar.png';
              }}
              alt={userName}
              className="w-7 h-7 rounded-full object-cover border border-white"
            />
          </button>
        </div>
      </header>

      {/* ═════════════════════════════════════════════════════════════════════════
          SUB-NAV STEPPER BAR (Video > Level 1 Game > Mock Interview)
          ═════════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {/* Python Course Tag */}
          <div className="flex items-center gap-1.5 shrink-0 mr-1">
            <img
              src="/images/companies/amazon.svg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              alt="Python"
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-black text-slate-900">Python</span>
          </div>

          {/* Stepper Pill 1: Video */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              setActiveStep('learn');
            }}
            className={`px-3 py-1 rounded-full text-[10.5px] font-black flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeStep === 'learn'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              activeStep === 'learn' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
            }`}>
              1
            </span>
            <span>Video</span>
          </button>

          <span className="text-slate-400 font-bold text-xs shrink-0">&gt;</span>

          {/* Stepper Pill 2: Practice Game */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              setActiveStep('play');
            }}
            className={`px-3 py-1 rounded-full text-[10.5px] font-black flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeStep === 'play'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              activeStep === 'play' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
            }`}>
              2
            </span>
            <span>Practice Game</span>
          </button>

          <span className="text-slate-400 font-bold text-xs shrink-0">&gt;</span>

          {/* Stepper Pill 3: Mock Interview */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              setActiveStep('interview');
            }}
            className={`px-3 py-1 rounded-full text-[10.5px] font-black flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeStep === 'interview'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              activeStep === 'interview' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
            }`}>
              3
            </span>
            <span>Mock Interview</span>
          </button>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════════
          SCREEN 1: 🎬 VIDEO LESSON (Matching media_1792386781104_54a2e591.jpg)
          ═════════════════════════════════════════════════════════════════════════ */}
      {activeStep === 'learn' && (
        <div className="max-w-md mx-auto px-3.5 pt-3 space-y-3">
          {/* Title */}
          <div>
            <h1 className="text-sm font-black text-slate-900 leading-tight">
              {currentTopic.id}.1 {firstLesson.title}
            </h1>
          </div>

          {/* Video Player Card (Bunny.net Stream Embed with HTML5 Fallback) */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-200 shadow-sm aspect-video">
            {bunnyEmbedUrl ? (
              <iframe
                src={bunnyEmbedUrl}
                title={firstLesson.title}
                loading="lazy"
                className="w-full h-full absolute inset-0 border-0"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                allowFullScreen={true}
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  src="/videos/what_is_programming_lesson.mp4"
                  poster="/images/what_is_python_video_poster.jpg"
                  className="w-full h-full object-cover"
                  playsInline
                  onTimeUpdate={handleVideoTimeUpdate}
                  onClick={toggleVideoPlay}
                  onEnded={() => {
                    try {
                      soundEffects.playCelebration();
                    } catch {}
                    setActiveStep('play');
                  }}
                />

                {/* Glowing Big Center Play Button */}
                {!isVideoPlaying && (
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all border-2 border-white cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                )}

                {/* Bottom Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-white flex items-center justify-between text-[10px] font-bold">
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={toggleVideoPlay} className="cursor-pointer">
                      {isVideoPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                    <span>{formatVideoTime(videoCurrentTime)} / {formatVideoTime(videoDuration)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        if (videoRef.current) {
                          videoRef.current.muted = !isVideoMuted;
                          setIsVideoMuted(!isVideoMuted);
                        }
                      }}
                    >
                      {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[9px] font-black bg-white/20 px-1.5 py-0.2 rounded">CC</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Quick Action: Close Video ➔ Start Practice Game */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[10.5px] font-black text-slate-700">
              Chapter 1 • Lesson 1
            </span>
            <button
              type="button"
              onClick={handleCloseVideoAndPlayGame}
              className="px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black border border-blue-600 flex items-center gap-1 active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              <span>Play Practice Game</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* What You Will Learn Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                What You Will Learn
              </h3>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="space-y-1 flex-1">
                {[
                  "What is Python?",
                  "History and evolution",
                  "Key features of Python",
                  "Real-world applications",
                  "Why learn Python for data analytics and GenAI"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[9.5px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* 3D Graduation illustration badge */}
              <div className="w-18 h-18 shrink-0 flex items-center justify-center">
                <img
                  src="/images/what_is_python_video_poster.jpg"
                  alt="Learn"
                  className="w-16 h-16 rounded-xl object-cover shadow-2xs border border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Download Resources Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">
                  Download Resources
                </h3>
              </div>
              <button
                type="button"
                onClick={() => alert("Downloading lecture notes & cheat sheet...")}
                className="text-[9.5px] font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3 h-3" />
                <span>Download All</span>
              </button>
            </div>

            {/* 4 Download Pills Grid */}
            <div className="grid grid-cols-4 gap-1.5 pt-0.5">
              <div className="p-2 rounded-xl bg-rose-50 border border-rose-100 text-center flex flex-col items-center justify-center gap-0.5">
                <FileText className="w-4 h-4 text-rose-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">PDF Notes</span>
                <span className="text-[7px] text-slate-400 font-semibold">(PDF)</span>
              </div>
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-center flex flex-col items-center justify-center gap-0.5">
                <FileCode className="w-4 h-4 text-blue-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Example Code</span>
                <span className="text-[7px] text-slate-400 font-semibold">(.py)</span>
              </div>
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-center flex flex-col items-center justify-center gap-0.5">
                <FileText className="w-4 h-4 text-purple-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Cheat Sheet</span>
                <span className="text-[7px] text-slate-400 font-semibold">(PDF)</span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-center flex flex-col items-center justify-center gap-0.5">
                <Link className="w-4 h-4 text-emerald-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Resources</span>
                <span className="text-[7px] text-slate-400 font-semibold">Links</span>
              </div>
            </div>
          </div>

          {/* Video Progress Bar & Next Step CTA Button */}
          <div className="space-y-2 pt-1 pb-4">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-600">
              <span>Video Progress</span>
              <span className="text-blue-600 font-black">{videoProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${videoProgress}%` }} />
            </div>

            {/* Start Practice Game Action Button */}
            <button
              type="button"
              onClick={handleCloseVideoAndPlayGame}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-blue-500/30 active:scale-98 transition-transform cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Video Finished ➔ Start Practice Game</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════════
          SCREEN 2: 🎮 PYTHON GAME (Matching media_1792386770782_47d1c2a3.png)
          ═════════════════════════════════════════════════════════════════════════ */}
      {activeStep === 'play' && (
        <div className="max-w-md mx-auto px-3.5 pt-3 space-y-3">
          {/* Breadcrumb Row */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <button
              type="button"
              onClick={() => setActiveStep('learn')}
              className="hover:text-blue-600 flex items-center gap-0.5"
            >
              <ChevronLeft className="w-3 h-3" />
              <span>Python</span>
            </button>
            <span>&gt;</span>
            <span className="text-slate-800 truncate">Introduction to Programming &amp; Python Thinking</span>
          </div>

          {/* Level Selector Circles (All 10 Distinct Levels 1 to 10) */}
          <div className="flex items-center justify-between gap-1 px-1 py-1 overflow-x-auto no-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
              const isActive = num === activeGameLevel;
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleSelectLevel(num)}
                  className={`w-8.5 h-8.5 rounded-full flex items-center justify-center font-black text-xs transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/40 ring-4 ring-blue-100 scale-105'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {/* Game Card Header: Practice Game 1 to 10 with Dynamic Concept */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                {activeGameLevel}
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">
                  Practice Game {activeGameLevel} — {currentChallenge.tag}
                </h3>
                <p className="text-[9px] text-slate-500 font-semibold leading-tight mt-0.5">
                  {currentChallenge.concept} • Challenge {activeGameLevel} of 10
                </p>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[9px] font-black text-blue-700 border border-blue-200 shrink-0">
              Level {activeGameLevel}/10
            </span>
          </div>

          {/* Active Question Challenge Box (Dark Gradient with 3D Boy Thinking) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-4 text-white shadow-md space-y-2">
            <div className="flex items-center gap-1.5 text-amber-300 text-[10px] font-black">
              <span>💡</span>
              <span>{currentChallenge.title}</span>
            </div>

            <p className="text-xs font-black leading-relaxed max-w-[70%]">
              {currentChallenge.text}
            </p>

            {currentChallenge.codeSnippet && (
              <pre className="text-[10px] font-mono bg-black/40 border border-white/10 p-2 rounded-xl text-emerald-300 max-w-[70%] whitespace-pre-wrap">
                {currentChallenge.codeSnippet}
              </pre>
            )}

            {/* 3D Thinking Avatar Graphic on Right */}
            <div className="absolute right-2 bottom-1 w-20 h-20 pointer-events-none">
              <img
                src="/images/python_hero_student.png"
                alt="Thinking"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 4 Interactive Option Cards (A, B, C, D) */}
          <div className="space-y-1.5">
            {currentChallenge.options.map((opt) => {
              const isSelected = selectedGameOption === opt.id;
              let optStyle = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50';

              if (isAnswerSubmitted) {
                if (opt.correct) {
                  optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm';
                } else if (isSelected && !opt.correct) {
                  optStyle = 'bg-rose-50 border-rose-500 text-rose-800 shadow-sm';
                }
              } else if (isSelected) {
                optStyle = 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-200 shadow-xs';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectGameOption(opt.id)}
                  className={`w-full py-2.5 px-3 rounded-xl border-2 flex items-center gap-2.5 transition-all cursor-pointer text-left ${optStyle}`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-[11.5px] font-black flex-1 leading-snug">
                    {opt.text}
                  </span>
                  {isAnswerSubmitted && opt.correct && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Sticky Floating Bottom Action Bar for Submit / Next Level */}
          <div className="sticky bottom-2 z-30 pt-2 pb-1 bg-gradient-to-t from-[#f3f8fe] via-[#f3f8fe]/95 to-transparent">
            {!isAnswerSubmitted ? (
              <button
                type="button"
                onClick={handleSubmitGameAnswer}
                disabled={!selectedGameOption}
                className={`w-full py-3.5 px-4 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg transition-transform cursor-pointer ${
                  selectedGameOption
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-blue-500/30 active:scale-98'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }`}
              >
                <span>Submit Answer</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="space-y-2">
                <div className={`p-2.5 rounded-xl border text-xs font-bold flex items-start gap-2 shadow-sm ${
                  isAnswerCorrect ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-rose-50 text-rose-800 border-rose-300'
                }`}>
                  {isAnswerCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="font-black text-emerald-950 text-[11px]">🎉 Correct Answer! +10 Points</div>
                        <div className="text-[9.5px] font-semibold text-emerald-800 mt-0.5 leading-tight">
                          {currentChallenge.options.find((o) => o.correct)?.explanation}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="font-black text-rose-950 text-[11px]">
                          Not quite right! Correct answer is {currentChallenge.options.find((o) => o.correct)?.id}
                        </div>
                        <div className="text-[9.5px] font-semibold text-rose-800 mt-0.5 leading-tight">
                          {currentChallenge.options.find((o) => o.correct)?.explanation}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Next Level or Finish ➔ Auto Interview CTA */}
                <div className="space-y-1.5">
                  {activeGameLevel < 10 ? (
                    <button
                      type="button"
                      onClick={handleNextGameLevel}
                      className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 active:scale-98 transition-transform cursor-pointer"
                    >
                      <span>Next Level: Practice Game {activeGameLevel + 1} of 10 →</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFinishGameAndStartInterview}
                      className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-emerald-500/30 active:scale-98 transition-transform cursor-pointer animate-pulse"
                    >
                      <Mic className="w-4 h-4" />
                      <span>🎉 Complete Practice Game ➔ Start Video Call Interview</span>
                    </button>
                  )}

                  {/* Direct Shortcut to Start Interview at Any Time */}
                  <button
                    type="button"
                    onClick={handleFinishGameAndStartInterview}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Mic className="w-3 h-3 text-blue-600" />
                    <span>Skip to Video Call Interview →</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Progress / Telemetry Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col items-center">
              <span className="text-base">🏆</span>
              <span className="text-[9.5px] font-black text-slate-800 mt-0.5">{gameQuestionsDone}/10</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Questions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base">💰</span>
              <span className="text-[9.5px] font-black text-amber-600 mt-0.5">+{gameScore}</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Points</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base">⭐</span>
              <span className="text-[9.5px] font-black text-purple-600 mt-0.5">Level {activeGameLevel}</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Game</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base">📊</span>
              <span className="text-[9.5px] font-black text-blue-600 mt-0.5">{Math.round((gameQuestionsDone / 10) * 100)}%</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Complete</span>
            </div>
          </div>

        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════════
          SCREEN 3: 🎙️ PYTHON MOCK INTERVIEW (Pixel-Perfect Match with media_1792411894095_03d853f5.png)
          ═════════════════════════════════════════════════════════════════════════ */}
      {activeStep === 'interview' && (
        <div className="max-w-md mx-auto px-3.5 pt-3 pb-8 space-y-3">

          {/* ── 1. SPLIT VIDEO CALL UI (Mentor Left + Student Right) ── */}
          <div className="grid grid-cols-2 gap-2">
            {/* Left Card: Mentor (Technical Expert) */}
            <div className={`relative overflow-hidden rounded-2xl bg-slate-900 border transition-all h-44 shadow-sm ${
              isHrSpeaking ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-slate-800'
            }`}>
              <StableMouthLipSyncAvatar
                imageUrl={currentHr.avatar}
                isSpeaking={isHrSpeaking}
                speakingText={hrSpeakingText}
                speakingRate={0.92}
                gender={selectedHr}
                isLipSyncEnabled={true}
                hideInternalBadge={true}
                className="w-full h-full object-cover"
              />

              {/* Top Tag: Mentor (Technical Expert) + Network Signal Bars */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black">
                  <Volume2 className="w-2.5 h-2.5 text-cyan-400" />
                  <span className="truncate max-w-[95px]">Mentor (Technical Expert)</span>
                </div>

                {/* Green Signal Bars */}
                <div className="flex items-end gap-0.5 px-1.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md">
                  <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="w-0.5 h-2 bg-emerald-400 rounded-full" />
                  <span className="w-0.5 h-3 bg-emerald-400 rounded-full" />
                </div>
              </div>

              {/* Lip-Sync Speaking Equalizer Banner */}
              {isHrSpeaking && (
                <div className="absolute inset-x-2 bottom-2 p-1.5 rounded-xl bg-blue-950/90 backdrop-blur-md border border-blue-400/40 text-white flex items-center justify-center gap-1.5 shadow-md animate-pulse z-10">
                  <span className="text-[8.5px] font-black text-cyan-300">Speaking Question...</span>
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-2 bg-cyan-300 rounded-full animate-bounce" />
                    <span className="w-0.5 h-3 bg-cyan-200 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-0.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Right Card: You (Student) */}
            <div className={`relative overflow-hidden rounded-2xl bg-slate-950 border transition-all h-44 shadow-sm ${
              isStudentSpeakingAudio ? 'border-emerald-500 ring-2 ring-emerald-500/40' : 'border-slate-800'
            }`}>
              {isCameraOn && hasCameraPermission ? (
                <video
                  ref={userCameraVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transform -scale-x-100 absolute inset-0"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 gap-1.5 p-2 text-center bg-slate-950 absolute inset-0 z-0">
                  <VideoOff className="w-5 h-5 text-rose-400" />
                  <div className="text-[9px] font-bold text-white">
                    {cameraError ? 'Cam Permission' : 'Camera Off'}
                  </div>
                  <button
                    type="button"
                    onClick={startCameraStream}
                    className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[8px] font-bold cursor-pointer"
                  >
                    Allow Camera
                  </button>
                </div>
              )}

              {/* Top Tag: You (Student) + Network Signal Bars */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black">
                  <Video className="w-2.5 h-2.5 text-emerald-400" />
                  <span>You (Student)</span>
                </div>

                {/* Green Signal Bars */}
                <div className="flex items-end gap-0.5 px-1.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md">
                  <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="w-0.5 h-2 bg-emerald-400 rounded-full" />
                  <span className="w-0.5 h-3 bg-emerald-400 rounded-full" />
                </div>
              </div>

              {/* Student Live Voice Soundwave Indicator */}
              {isStudentSpeakingAudio && (
                <div className="absolute inset-x-2 bottom-2 p-1 rounded-xl bg-emerald-950/90 backdrop-blur-md border border-emerald-400/40 text-emerald-300 flex items-center justify-center gap-1.5 shadow-md z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[8.5px] font-black">Voice Active (Speaking)</span>
                </div>
              )}
            </div>
          </div>

          {/* ── 2. UNIFIED SLEEK CONTROL BAR (Directly matching media_1792411894095_03d853f5.png) ── */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-2.5 flex items-center justify-between shadow-lg text-white">
            {/* Left: Globe + Language Dropdown (English vs Hindi) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  const nextHr = selectedHr === 'male' ? 'female' : 'male';
                  setSelectedHr(nextHr);
                  handleSpeakQuestion(nextHr);
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white text-xs font-black cursor-pointer active:scale-95 transition-all shadow-xs"
                title="Toggle HR Language (English / Hindi)"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{selectedHr === 'male' ? 'English' : 'Hindi'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>

            {/* Middle: Camera Button + Big Red Circular Mic Button */}
            <div className="flex items-center gap-3">
              {/* Camera Toggle Button */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  if (isCameraOn && hasCameraPermission) {
                    setIsCameraOn(false);
                    stopCameraStream();
                  } else {
                    startCameraStream();
                  }
                }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all cursor-pointer active:scale-95 ${
                  isCameraOn && hasCameraPermission
                    ? 'bg-slate-800/90 border-slate-700 text-white'
                    : 'bg-rose-950/80 border-rose-800 text-rose-400'
                }`}
                title="Toggle Camera"
              >
                {isCameraOn && hasCameraPermission ? (
                  <Video className="w-4 h-4 text-white" />
                ) : (
                  <VideoOff className="w-4 h-4 text-rose-400" />
                )}
              </button>

              {/* Big Red Circular Mic Button with Animated Ripple Wave */}
              <button
                type="button"
                onClick={toggleSpeechRecording}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90 ${
                  isInterviewRecording || isStudentSpeakingAudio
                    ? 'bg-rose-600 text-white shadow-rose-600/50 ring-4 ring-rose-500/40 animate-pulse'
                    : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/40'
                }`}
                title="Toggle Mic (Speak answer)"
              >
                <Mic className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Right: End Interview Red Rounded Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                onBack();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black cursor-pointer active:scale-95 transition-all shadow-md shadow-rose-950/30"
              title="End Interview"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              <span>End Interview</span>
            </button>
          </div>

          {/* ═════════════════════════════════════════════════════════════════════
              STATE A: ANSWERING (Before Submit - Question + Live Transcription + Submit)
              ═════════════════════════════════════════════════════════════════════ */}
          {!isInterviewSubmitted && (
            <div className="space-y-3">
              {/* Current Question Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                    <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">
                      Q{activeInterviewQ}
                    </span>
                    <span>Question {activeInterviewQ} of 5</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-black border border-emerald-200">
                    {currentInterviewQData.topic} ({currentInterviewQData.difficulty})
                  </span>
                </div>

                <p className="text-xs font-black text-blue-950 leading-snug">
                  {selectedHr === 'female' && currentInterviewQData.questionHi
                    ? currentInterviewQData.questionHi
                    : currentInterviewQData.questionEn}
                </p>
                {selectedHr === 'female' && currentInterviewQData.questionHi && (
                  <p className="text-[10px] font-medium text-slate-500 italic">
                    En: {currentInterviewQData.questionEn}
                  </p>
                )}
              </div>

              {/* Your Answer (Live Transcription) Card with Live Speaking Typing */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-2.5 text-left">
                {/* Header: Title + Speech Indicator + Auto-Fill + Clear */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-blue-900">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Your Answer (Live Transcription)</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-rose-500">
                      <span className={`w-2 h-2 rounded-full bg-rose-500 ${isInterviewRecording || isStudentSpeakingAudio ? 'animate-ping' : ''}`} />
                      <span>Transcribed from speech</span>
                      <span className="text-xs">〰️</span>
                    </div>

                    {interviewAnswerText && (
                      <button
                        type="button"
                        onClick={() => {
                          setInterviewAnswerText('');
                          speechAccumulatedRef.current = '';
                        }}
                        className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 cursor-pointer"
                        title="Clear Answer"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 🎙️ Direct User Tap-to-Speak Button (Guarantees Android Chrome Mic Permission) 🎙️ */}
                <button
                  type="button"
                  onClick={toggleSpeechRecording}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-98 ${
                    isInterviewRecording
                      ? 'bg-rose-600 text-white animate-pulse shadow-rose-600/40 ring-4 ring-rose-300'
                      : isMicHighlighted
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-600/30 ring-2 ring-emerald-300'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-600/25'
                  }`}
                >
                  <Mic className="w-4 h-4 text-white" />
                  <span>
                    {isInterviewRecording
                      ? '🔴 Mic On: Listening... (Tap to Pause)'
                      : '🎙️ Tap to Speak (माइक ऑन करें और बोलें)'}
                  </span>
                </button>

                {/* Live Speech Prompt Banner */}
                {speechTip && (
                  <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-200 text-[10px] font-semibold text-blue-900 flex items-center justify-between">
                    <span>{speechTip}</span>
                  </div>
                )}

                {/* Live Answer Box with Mic Icon & Real-Time Typing */}
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200 focus-within:border-blue-500 transition-all">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-all ${
                    isInterviewRecording || isStudentSpeakingAudio
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    <Mic className="w-4 h-4 text-white" />
                  </div>

                  <textarea
                    rows={4}
                    value={interviewAnswerText}
                    onChange={(e) => {
                      setInterviewAnswerText(e.target.value);
                      speechAccumulatedRef.current = e.target.value;
                    }}
                    placeholder={
                      selectedHr === 'female'
                        ? "माइक में बोलें... आपके बोलने से यहाँ लाइव टाइप होगा..."
                        : "Speak into your mic... your spoken words will type here in real time..."
                    }
                    className="w-full text-xs text-slate-900 bg-transparent border-none focus:outline-none leading-relaxed placeholder:text-slate-400 font-medium resize-none"
                  />
                </div>

                {/* 🚀 SUBMIT ANSWER BUTTON 🚀 */}
                <button
                  type="button"
                  onClick={handleSubmitInterviewAnswer}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 active:scale-98 transition-all cursor-pointer"
                >
                  <span>🚀 Submit Answer (Evaluate &amp; View Result)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════════
              STATE B: RESULT (After Submit - Exactly matches media_1792411894095_03d853f5.png)
              ═════════════════════════════════════════════════════════════════════ */}
          {isInterviewSubmitted && (
            <div className="bg-white border border-slate-200/90 rounded-3xl p-4 shadow-md space-y-3.5 relative overflow-hidden">
              {/* Confetti Floating Shapes */}
              <div className="absolute top-2 left-2 text-base select-none opacity-80 animate-pulse">🎉</div>
              <div className="absolute top-3 right-3 text-base select-none opacity-80 animate-bounce">✨</div>
              <div className="absolute top-8 left-6 text-sm select-none opacity-60">🎊</div>
              <div className="absolute top-8 right-8 text-sm select-none opacity-60">⭐</div>

              {/* Header: Gold Trophy + Title + Subtitle */}
              <div className="text-center pt-1 pb-0.5">
                <div className="w-12 h-12 mx-auto mb-1 flex items-center justify-center text-3xl">
                  🏆
                </div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  Interview Result
                </h2>
                <p className="text-[11px] font-semibold text-slate-400">
                  Your answer has been evaluated
                </p>
              </div>

              {/* Two Top Cards Side-by-Side: Speedometer Arc + Rule-Based Score */}
              <div className="grid grid-cols-2 gap-2.5 items-stretch">
                {/* Left: Speedometer Arc Gauge */}
                <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-2.5 flex flex-col items-center justify-between">
                  {/* SVG Arc Gauge */}
                  <div className="relative w-36 h-20 flex items-center justify-center">
                    <svg viewBox="0 0 200 115" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="resultGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="35%" stopColor="#f59e0b" />
                          <stop offset="65%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 25 100 A 75 75 0 0 1 175 100"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="16"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 25 100 A 75 75 0 0 1 175 100"
                        fill="none"
                        stroke="url(#resultGaugeGrad)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray="235.6"
                        strokeDashoffset={
                          235.6 -
                          (Math.min(10, Math.max(0, evaluationResult?.score ?? 10)) / 10) * 235.6
                        }
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                      />
                      <g
                        transform={`rotate(${
                          -180 +
                          (Math.min(10, Math.max(0, evaluationResult?.score ?? 10)) / 10) * 180
                        } 100 100)`}
                        style={{ transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                      >
                        <polygon points="97,100 103,100 100,32" fill="#0f172a" />
                        <circle cx="100" cy="100" r="7" fill="#0f172a" />
                        <circle cx="100" cy="100" r="3.5" fill="#10b981" />
                      </g>
                    </svg>
                  </div>

                  <div className="text-center mt-1">
                    <div className="text-lg font-black text-slate-900 leading-none">
                      {evaluationResult ? evaluationResult.score : '10'} / 10
                    </div>
                    <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9.5px] font-black border border-emerald-300">
                      <span>⭐</span>
                      <span>
                        {evaluationResult && evaluationResult.score < 5.5
                          ? 'Needs Improvement'
                          : 'Excellent Answer'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Rule-Based Score */}
                <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-2.5 flex flex-col justify-between text-left">
                  <div className="flex items-center gap-1 text-[10px] font-black text-blue-900">
                    <Trophy className="w-3.5 h-3.5 text-blue-600" />
                    <span>Rule-Based Score</span>
                    <HelpCircle className="w-3 h-3 text-slate-400" />
                  </div>

                  <div className="my-1.5">
                    <div className="w-full py-2 rounded-xl bg-emerald-500 text-white font-black text-xl text-center shadow-xs">
                      {Math.round(((evaluationResult?.score ?? 10) / 10) * 100)}%
                    </div>
                  </div>

                  <div className="text-[9px] font-bold text-slate-500 bg-white/80 px-2 py-1 rounded-lg border border-sky-100 text-center truncate">
                    KW: {evaluationResult?.breakdown.keywordPoints ?? 5} | Concepts: {evaluationResult?.breakdown.conceptPoints ?? 3.5} | Lenc: {evaluationResult?.breakdown.structurePoints ?? 1.5}
                  </div>
                </div>
              </div>

              {/* 4-Grid Metric Badges (2x2) */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[10px] font-bold text-slate-700">Key Points Covered</span>
                  </div>
                  <span className="text-[11px] font-black text-slate-900">
                    {evaluationResult?.matchedKeywords.length ?? 4} / {currentInterviewQData.requiredKeywords.length}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-[10px] font-bold text-slate-700">Core Concepts</span>
                  </div>
                  <span className="text-[11px] font-black text-slate-900">
                    {evaluationResult?.matchedConcepts.length ?? 2} / {currentInterviewQData.importantConcepts.length}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-[10px] font-bold text-slate-700">Answer Clarity</span>
                  </div>
                  <span className="text-[11px] font-black text-emerald-600">
                    {(evaluationResult?.score ?? 10) >= 7.5 ? 'Strong' : 'Moderate'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-[10px] font-bold text-slate-700">Real-Life Example</span>
                  </div>
                  <span className="text-[11px] font-black text-emerald-600">
                    {(evaluationResult?.score ?? 10) >= 6 ? 'Matched' : 'Missing'}
                  </span>
                </div>
              </div>

              {/* Your Answer (Live Transcription) Card */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-blue-900">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Your Answer (Live Transcription)</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9.5px] font-bold text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Transcribed from speech</span>
                    <span className="text-xs">〰️</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs font-medium text-slate-800 leading-relaxed">
                    {interviewAnswerText ||
                      "Programming is a way to give instructions to a computer to perform a specific task. For example, WhatsApp uses programming to send messages."}
                  </p>
                </div>
              </div>

              {/* Matched Keywords Card */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-blue-900">
                    <Link className="w-4 h-4 text-blue-600" />
                    <span>Matched Keywords</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                    {evaluationResult?.matchedKeywords.length ?? 4} / {currentInterviewQData.requiredKeywords.length} Matched
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {(evaluationResult?.matchedKeywords.length
                    ? evaluationResult.matchedKeywords
                    : currentInterviewQData.requiredKeywords
                  ).map((kw: any) => (
                    <span
                      key={kw.id}
                      className="px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] font-bold flex items-center gap-1"
                    >
                      <span className="text-emerald-600 font-black">✓</span>
                      <span>{kw.labelEn || kw.matchedTerm}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Feedback Card */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-blue-900">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <span>Feedback</span>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs font-medium text-slate-800 leading-relaxed">
                  {evaluationResult?.summaryEn ||
                    "Strong answer! You explained programming clearly and gave a practical example."}
                </div>
              </div>

              {/* Try to Improve Card */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-pink-600">
                  <Award className="w-4 h-4 text-pink-500" />
                  <span>Try to Improve</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-50/60 border border-pink-100 text-xs font-medium text-slate-800 leading-relaxed">
                  {evaluationResult?.suggestionsEn?.[0] ||
                    "Keep answers concise and include one clear example."}
                </div>
              </div>

              {/* Auto-Next Question Countdown Banner */}
              {autoNextCountdown !== null && (
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex items-center justify-between text-left shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                    <div>
                      <div className="text-xs font-black text-blue-950">
                        Auto-starting Question {activeInterviewQ < 5 ? activeInterviewQ + 1 : 1}
                      </div>
                      <div className="text-[10px] font-semibold text-blue-700">
                        Result will disappear in <span className="font-black text-blue-900">{autoNextCountdown}s</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (activeInterviewQ < 5) {
                        handleSelectQuestion(activeInterviewQ + 1);
                      } else {
                        handleSelectQuestion(1);
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black cursor-pointer shadow-xs active:scale-95"
                  >
                    Start Now ➔
                  </button>
                </div>
              )}

              {/* Action Buttons: Try Again & Next Question */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    if (autoNextTimerRef.current) {
                      clearInterval(autoNextTimerRef.current);
                      autoNextTimerRef.current = null;
                      setAutoNextCountdown(null);
                    }
                    setIsInterviewSubmitted(false);
                    isInterviewSubmittedRef.current = false;
                    setInterviewAnswerText('');
                    speechAccumulatedRef.current = '';
                    setEvaluationResult(null);
                    handleSpeakQuestion(selectedHr, activeInterviewQ);
                  }}
                  className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-blue-500 text-blue-600 font-black text-xs flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    if (activeInterviewQ < 5) {
                      handleSelectQuestion(activeInterviewQ + 1);
                    } else {
                      handleSelectQuestion(1);
                    }
                  }}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-purple-500/25 cursor-pointer active:scale-95"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
