import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Code2,
  Copy,
  Play,
  Pause,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Volume2,
  VolumeX,
  X,
  Terminal,
  FileText,
  Bug,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import {
  HELLO_WORLD_TEACHING_STEPS,
  HELLO_WORLD_HINTS,
  diagnoseHelloWorldError,
  diagnosePythonError,
  TEACHER_HELP_TOPICS,
  TeachingStep,
  ProgressiveHint,
  ErrorDiagnostic,
  TeacherHelpTopic,
  QuestionV5Config,
  TOPIC_01_QUESTION_CONFIGS,
  getTopicQuestionConfigs,
  getQuestionConfig,
} from './smartClassroomV5Engine';
import { executePythonCodeLocally } from '../../services/pythonRunner';
import { TalkingRobotAvatar, HumanTeacherAvatar } from './TalkingRobotAvatar';
import { UniversalPythonErrorModal } from './UniversalPythonErrorModal';
import { DynamicVisualWorkspace } from './DynamicVisualWorkspace';
import { soundEffects } from '../../services/soundEffects';
import confetti from 'canvas-confetti';

interface SmartPythonClassroomV5Props {
  topicId?: string;
  questionIndex?: number;
  totalQuestions?: number;
  onSelectQuestion?: (index: number) => void;
  completedQuestionIds?: Set<string>;
  onProgressUpdate?: (completedId: string) => void;
  onNavigateNextTopic?: () => void;
  onNavigatePrevTopic?: () => void;
  onBackToCourse?: () => void;
  language?: 'hi' | 'en';
  onLanguageChange?: (lang: 'hi' | 'en') => void;
}

function renderPythonSyntax(lineText: string): React.ReactNode {
  const tokenRegex = /(#.*$)|(f"[^"]*"|f'[^']*'|r"[^"]*"|r'[^']*'|"[^"]*"|'[^']*')|(\b(?:def|if|elif|else|for|while|in|return|break|continue|pass|and|or|not|True|False|None|is|try|except|as|import|from|class)\b)|(\b(?:print|input|len|range|type|int|float|str|ord|chr|sum|abs|min|max|list|dict|set)\b)|(\b\d+(?:\.\d+)?\b)|([^\s\w]+)|(\w+)|(\s+)/g;
  const tokens: React.ReactNode[] = [];
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = tokenRegex.exec(lineText)) !== null) {
    const [full, comment, str, kw, fn, num, punct] = match;
    const key = `${idx++}_${match.index}`;
    if (comment) {
      tokens.push(<span key={key} className="text-slate-500 italic">{comment}</span>);
    } else if (str) {
      tokens.push(<span key={key} className="text-[#facc15]">{str}</span>);
    } else if (kw) {
      tokens.push(<span key={key} className="text-[#c084fc] font-bold">{kw}</span>);
    } else if (fn) {
      tokens.push(<span key={key} className="text-[#38bdf8] font-semibold">{fn}</span>);
    } else if (num) {
      tokens.push(<span key={key} className="text-[#4ade80]">{num}</span>);
    } else if (punct) {
      tokens.push(<span key={key} className="text-slate-400">{punct}</span>);
    } else {
      tokens.push(<span key={key} className="text-slate-200">{full}</span>);
    }
  }
  return tokens.length > 0 ? tokens : <span className="text-slate-200">{lineText}</span>;
}

const getModuleNumber = (tId: string): number => {
  const m = tId.match(/^py_(\d+)/i);
  if (m && m[1]) {
    return parseInt(m[1], 10);
  }
  return 1;
};

export const SmartPythonClassroomV5: React.FC<SmartPythonClassroomV5Props> = ({
  topicId = 'py_01_basics_01',
  questionIndex: propQuestionIndex = 0,
  totalQuestions = 10,
  onSelectQuestion,
  completedQuestionIds,
  onProgressUpdate,
  onNavigateNextTopic,
  onNavigatePrevTopic,
  onBackToCourse,
  language: propLanguage,
  onLanguageChange,
}) => {
  // Multi-Question state (0 to 9) for Questions 1 to 10
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(() => {
    return typeof propQuestionIndex === 'number' && propQuestionIndex >= 0 ? propQuestionIndex : 0;
  });

  useEffect(() => {
    if (typeof propQuestionIndex === 'number' && propQuestionIndex !== activeQuestionIndex) {
      handleSwitchQuestion(propQuestionIndex);
    }
  }, [propQuestionIndex]);
  // Mode switch: Learn Mode vs Practice Mode
  const [activeMode, setActiveMode] = useState<'learn' | 'practice'>('learn');

  // Teaching language: 'hi' (Hinglish/Hindi) vs 'en' (English)
  const [internalLanguage, setInternalLanguage] = useState<'hi' | 'en'>('hi');
  const language = propLanguage || internalLanguage;
  const setLanguage = (l: 'hi' | 'en') => {
    setInternalLanguage(l);
    onLanguageChange?.(l);
  };

  // Step state: 0 to 3 (Steps 1 to 4)
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isExplanationStarted, setIsExplanationStarted] = useState<boolean>(false);

  // Student practice state
  const [studentCode, setStudentCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [practiceOutput, setPracticeOutput] = useState<string>('');
  const [practiceError, setPracticeError] = useState<string | null>(null);
  const [practicePassed, setPracticePassed] = useState<boolean>(false);
  const [showErrorSuggestion, setShowErrorSuggestion] = useState<boolean>(false);
  const [activeTabPractice, setActiveTabPractice] = useState<'testcases' | 'output' | 'explanation'>('testcases');

  // Hints progressive state (0 = none revealed, 1..3 = hints active)
  const [revealedHintLevel, setRevealedHintLevel] = useState<number>(0);

  // Error Diagnostic modal state
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [currentDiagnostic, setCurrentDiagnostic] = useState<ErrorDiagnostic | null>(null);

  // Teacher Help modal state
  const [teacherHelpModalOpen, setTeacherHelpModalOpen] = useState<boolean>(false);
  const [selectedHelpTopic, setSelectedHelpTopic] = useState<TeacherHelpTopic | null>(TEACHER_HELP_TOPICS[0]);

  // Audio / Speech state
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const practiceSectionRef = useRef<HTMLDivElement>(null);
  const editorTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToCodingPractice = () => {
    if (practiceSectionRef.current) {
      practiceSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Celebration Confetti and Sound Effect
  const triggerCelebration = () => {
    try {
      soundEffects.playCelebration?.();

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#6366f1', '#ec4899', '#10b981', '#f59e0b'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.7 },
          colors: ['#8b5cf6', '#ec4899', '#10b981'],
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.7 },
          colors: ['#6366f1', '#f59e0b', '#3b82f6'],
        });
      }, 400);
    } catch (err) {
      console.warn('[Celebration] Confetti error:', err);
    }
  };

  // Live Typing Explanation: word-by-word streaming animation
  const [typedWordsCount, setTypedWordsCount] = useState<number>(999);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(-1);
  const typingTimerRef = useRef<any>(null);

  // Live Question Typing (synced with voice)
  const [questionTypedCount, setQuestionTypedCount] = useState<number>(999);
  const [questionActiveWordIdx, setQuestionActiveWordIdx] = useState<number>(-1);
  const [isQuestionTyping, setIsQuestionTyping] = useState<boolean>(false);
  const questionTypingTimerRef = useRef<any>(null);

  // Active Question Configuration from Multi-Question Engine
  // Module Number: Module 1, Module 2, Module 3...
  const moduleNum = getModuleNumber(topicId);
  const activeTopicConfigs = getTopicQuestionConfigs(topicId);
  const currentQuestionConfig = getQuestionConfig(activeQuestionIndex, topicId);
  const REFERENCE_CODE = currentQuestionConfig.referenceCode;
  const EXPECTED_OUTPUT = currentQuestionConfig.expectedOutput;
  const activeTeachingSteps = currentQuestionConfig.teachingSteps;
  const currentStep: TeachingStep = activeTeachingSteps[currentStepIndex] || activeTeachingSteps[0];
  const activeHints = currentQuestionConfig.hints;

  // Student code persistence map across all 10 questions
  const [studentCodeMap, setStudentCodeMap] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(`futureai_smart_py_code_map_${topicId}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

    // Keep studentCode synced & auto-type question with voice when question changes
  useEffect(() => {
    const savedCode = studentCodeMap[activeQuestionIndex];
    setStudentCode(savedCode !== undefined ? savedCode : currentQuestionConfig.starterCode);
    handlePlayQuestionWithTyping(true);
    return () => {
      if (questionTypingTimerRef.current) clearInterval(questionTypingTimerRef.current);
    };
  }, [activeQuestionIndex, topicId]);

  const handleStudentCodeChange = (val: string) => {
    setStudentCode(val);
    setPracticePassed(false);
    setStudentCodeMap((prev) => {
      const next = { ...prev, [activeQuestionIndex]: val };
      try {
        localStorage.setItem(`futureai_smart_py_code_map_${topicId}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleSwitchQuestion = (newIdx: number) => {
    if (newIdx < 0 || newIdx >= activeTopicConfigs.length) return;
    soundEffects.playClick?.();
    stopSpeech();
    setActiveQuestionIndex(newIdx);
    onSelectQuestion?.(newIdx);
    setCurrentStepIndex(0);
    setIsExplanationStarted(false);
    setPracticeOutput('');
    setPracticeError(null);
    setPracticePassed(false);
    setShowErrorSuggestion(false);
    setRevealedHintLevel(0);
    setActiveTabPractice('testcases');
    const nextConfig = getQuestionConfig(newIdx, topicId);
    setStudentCode(studentCodeMap[newIdx] ?? nextConfig.starterCode);
  };

  // Stop any ongoing audio (HTML5 audio or Web Speech)
  const stopSpeech = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.onplay = null;
      audioPlayerRef.current.onended = null;
      audioPlayerRef.current.onerror = null;
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  // Play real studio-recorded voice from MP3 (Hindi or Energetic Indian English Male)
  const playDesiVoiceAudio = (audioPath: string, fallbackText: string, onEnded?: () => void) => {
    if (isMuted) {
      onEnded?.();
      return;
    }
    stopSpeech();

    if (!audioPath) {
      speakFallbackText(fallbackText, onEnded);
      return;
    }

    // If English is selected, route seamlessly to /audio/smart_teacher/en/
    const resolvedPath =
      language === 'en'
        ? audioPath.replace('/audio/smart_teacher/', '/audio/smart_teacher/en/')
        : audioPath;

    try {
      const audio = new Audio(resolvedPath);
      audioPlayerRef.current = audio;

      audio.onplay = () => setIsPlayingAudio(true);
      audio.onended = () => {
        setIsPlayingAudio(false);
        onEnded?.();
      };
      audio.onerror = () => {
        // Fallback to browser Web Speech API if audio file fails to load
        speakFallbackText(fallbackText, onEnded);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('[SmartClassroomV5] Audio autoplay blocked or failed:', err);
          speakFallbackText(fallbackText, onEnded);
        });
      }
    } catch {
      speakFallbackText(fallbackText, onEnded);
    }
  };

  // Fallback speech using browser Web Speech API (Exact Module 01 Indian Female Voice across all modules)
  const speakFallbackText = (text: string, onEnded?: () => void) => {
    stopSpeech();
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || isMuted) {
      onEnded?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice =
      voices.find((v) => /swara|heera|neerja|kalpana|lekha|veena|ananya|shruti|priya/i.test(v.name)) ||
      voices.find((v) => (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang)) && /female|woman|zira/i.test(v.name)) ||
      voices.find((v) => !/male|man|ravi|madhav|hemant|prabhat|david|mark|george/i.test(v.name) && (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang))) ||
      voices.find((v) => /female|woman|zira/i.test(v.name)) ||
      voices[0];

    if (femaleVoice) {
      utterance.voice = femaleVoice;
      utterance.lang = femaleVoice.lang;
    } else {
      utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    }

    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => {
      setIsPlayingAudio(false);
      onEnded?.();
    };
    utterance.onerror = () => {
      setIsPlayingAudio(false);
      onEnded?.();
    };

    window.speechSynthesis.speak(utterance);
  };

  const speakText = (text: string) => speakFallbackText(text);

  // Start live typing animation for the current step's text
  const startLiveTyping = (text: string) => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    const words = text.split(' ');
    setTypedWordsCount(0);
    setActiveWordIndex(0);

    let current = 0;
    typingTimerRef.current = setInterval(() => {
      current++;
      setTypedWordsCount(current);
      setActiveWordIndex(current - 1);

      if (current >= words.length) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setActiveWordIndex(-1);
      }
    }, 520);
  };

  // Start live typing for the Question text synchronized with voice
  const startQuestionLiveTyping = (qText: string) => {
    if (questionTypingTimerRef.current) clearInterval(questionTypingTimerRef.current);
    const words = qText.trim().split(/\s+/);
    setIsQuestionTyping(true);
    setQuestionTypedCount(0);
    setQuestionActiveWordIdx(0);

    let current = 0;
    questionTypingTimerRef.current = setInterval(() => {
      current++;
      setQuestionTypedCount(current);
      setQuestionActiveWordIdx(current - 1);

      if (current >= words.length) {
        if (questionTypingTimerRef.current) clearInterval(questionTypingTimerRef.current);
        setIsQuestionTyping(false);
        setQuestionActiveWordIdx(-1);
      }
    }, 360);
  };

  // Play Question Voice AND type out the question text simultaneously
  const handlePlayQuestionWithTyping = (playVoice = true) => {
    const qText = currentQuestionConfig.problemStatement || currentQuestionConfig.title;
    startQuestionLiveTyping(qText);

    if (!playVoice) return;

    // Unified Question Voice: Pure Desi Indian English for English mode, Swara girl voice for Hindi
    let audioUrl = '';
    if (language === 'en') {
      if (topicId === 'py_01_basics_01' && activeQuestionIndex === 0) {
        audioUrl = '/audio/smart_teacher/en/q_play.mp3';
      } else {
        audioUrl = `/api/human-tts?lang=en&voice=en-IN-PrabhatNeural&text=${encodeURIComponent(qText)}`;
      }
    } else {
      if (topicId === 'py_01_basics_01' && activeQuestionIndex === 0) {
        audioUrl = '/audio/smart_teacher/q_play.mp3';
      } else {
        audioUrl = `/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(qText)}`;
      }
    }

    playDesiVoiceAudio(audioUrl, qText);
  };

  // Pause or Resume audio & typing
  const handleTogglePause = () => {
    soundEffects.playClick?.();
    if (isPaused) {
      if (audioPlayerRef.current) audioPlayerRef.current.play();
      setIsPaused(false);
      setIsPlayingAudio(true);
    } else {
      if (audioPlayerRef.current) audioPlayerRef.current.pause();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.pause();
      }
      setIsPaused(true);
      setIsPlayingAudio(false);
    }
  };

  // Audio mapping for teaching steps
  const playStepAudio = (stepIndex: number) => {
    if (stepIndex >= activeTeachingSteps.length) return;
    const text = language === 'hi'
      ? activeTeachingSteps[stepIndex].cardExplanationHinglish
      : activeTeachingSteps[stepIndex].cardExplanationEnglish;
    const fallback = language === 'hi'
      ? activeTeachingSteps[stepIndex].speechHinglish
      : activeTeachingSteps[stepIndex].speechEnglish;

    setIsPaused(false);
    startLiveTyping(text);

    let audioUrl = '';
    const sNum = stepIndex + 1;

    // Unified Universal Engine:
    // In English mode: Pure Desi Indian English studio recordings or Prabhat Indian English voice
    // In Hindi mode: Authentic Module 1 Visual Explanation Girl Voice (hi-IN-SwaraNeural)
    if (language === 'en') {
      if (topicId === 'py_01_basics_01' && activeQuestionIndex === 0 && sNum <= 4) {
        audioUrl = `/audio/smart_teacher/en/step_${sNum}.mp3`;
      } else {
        audioUrl = `/api/human-tts?lang=en&voice=en-IN-PrabhatNeural&text=${encodeURIComponent(fallback || text)}`;
      }
    } else {
      if (topicId === 'py_01_basics_01' && activeQuestionIndex === 0 && sNum <= 4) {
        audioUrl = `/audio/smart_teacher/step_${sNum}.mp3`;
      } else {
        audioUrl = `/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(fallback || text)}`;
      }
    }
    playDesiVoiceAudio(audioUrl, fallback, () => {
      if (stepIndex === activeTeachingSteps.length - 1) {
        setTimeout(() => {
          scrollToCodingPractice();
        }, 800);
      }
    });
  };

  // Start Explanation action
  const handleStartExplanation = () => {
    soundEffects.playClick?.();
    setIsExplanationStarted(true);
    setCurrentStepIndex(0);
    playStepAudio(0);
  };

  // Step Navigation
  const handleNextStep = () => {
    if (currentStepIndex < activeTeachingSteps.length - 1) {
      soundEffects.playClick?.();
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      playStepAudio(nextIdx);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      soundEffects.playClick?.();
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      playStepAudio(prevIdx);
    }
  };

  const handleReplaySpeech = () => {
    soundEffects.playClick?.();
    playStepAudio(currentStepIndex);
  };

  // Copy Reference Code
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    soundEffects.playClick?.();
    navigator.clipboard?.writeText(REFERENCE_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset Code
  const handleResetCode = () => {
    soundEffects.playClick?.();
    if (studentCode.trim().length > 0 && !window.confirm('Kya aap apna code reset karna chahte hain?')) {
      return;
    }
    const defCode = currentQuestionConfig.starterCode;
    setStudentCode(defCode);
    setStudentCodeMap((prev) => ({ ...prev, [activeQuestionIndex]: defCode }));
    setPracticeOutput('');
    setPracticeError(null);
    setPracticePassed(false);
    setIsSubmitted(false);
    setShowErrorSuggestion(false);
  };

  // Run Code
  const handleRunCode = async () => {
    soundEffects.playClick?.();
    setIsRunning(true);
    setPracticeError(null);
    setPracticePassed(false);

    try {
      const res = await executePythonCodeLocally(studentCode, currentQuestionConfig.sampleInput);
      const out = (res.stdout || '').trim();
      setPracticeOutput(out);
      setPracticeError(res.error || null);

      const validation = currentQuestionConfig.validate(studentCode, res.stdout || '');
      if (validation.passed && !res.error) {
        setPracticePassed(true);
        setShowErrorSuggestion(false);
        triggerCelebration();
        // Play friendly teacher encouragement voice
        playDesiVoiceAudio(
          '/audio/smart_teacher/praise_success.mp3',
          'Wah! Zabardast! Aapne apna Python code bilkul sahi run kar liya hai! Congratulations! Aise hi aage badhte rahiye!'
        );
      } else {
        setPracticePassed(false);
        setShowErrorSuggestion(true);
        soundEffects.playError?.();
        try {
          const preDiag = diagnosePythonError({
            studentCode,
            stdout: out,
            rawError: res.error || null,
            expectedOutput: currentQuestionConfig.expectedOutput,
            referenceCode: currentQuestionConfig.referenceCode,
            problemStatement: currentQuestionConfig.problemStatement,
            questionTitle: currentQuestionConfig.title,
          });
          if (!res.error && preDiag.exactIssue) {
            setPracticeError(`${preDiag.title} — ${preDiag.exactIssue}`);
          }
          const preText = buildSpokenDiagnosticText(preDiag);
          fetch(`/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(preText)}`).catch(() => {});
        } catch {}
        // Play friendly teacher error prompt voice
        playDesiVoiceAudio(
          '/audio/smart_teacher/error_prompt.mp3',
          'Arre, code mein thodi si gadbad ho gayi hai! Tension mat lo, neeche Explain My Error button par click karo, main samjhati hoon kya problem hai.'
        );
      }
    } catch (err: any) {
      setPracticeError(err?.message || 'Execution error');
      setPracticePassed(false);
      setShowErrorSuggestion(true);
      soundEffects.playError?.();
      playDesiVoiceAudio(
        '/audio/smart_teacher/error_prompt.mp3',
        'Arre, code mein thodi si gadbad ho gayi hai! Tension mat lo, neeche Explain My Error button par click karo, main samjhati hoon kya problem hai.'
      );
    } finally {
      setIsRunning(false);
      setActiveTabPractice('testcases');
    }
  };

  // Submit Code
  const handleSubmitCode = async () => {
    soundEffects.playClick?.();
    setIsRunning(true);
    setIsSubmitted(true);

    try {
      const res = await executePythonCodeLocally(studentCode, currentQuestionConfig.sampleInput);
      const out = (res.stdout || '').trim();
      setPracticeOutput(out);
      setPracticeError(res.error || null);

      const validation = currentQuestionConfig.validate(studentCode, res.stdout || '');
      if (validation.passed && !res.error) {
        setPracticePassed(true);
        setShowErrorSuggestion(false);
        triggerCelebration();
        // Play friendly teacher encouragement voice
        playDesiVoiceAudio(
          '/audio/smart_teacher/praise_success.mp3',
          'Wah! Zabardast! Aapne apna Python challenge successfully solve kar liya hai! Congratulations!'
        );
        // Record completed question identifier
        try {
          const topicPrefix = topicId === 'py_10_oops_00_intro' || topicId === 'py_10_oops_01_alias' || topicId === 'py_10_oop_01' || topicId === 'py_10_01' ? 'OOP-01'
            : topicId === 'py_10_oops_01' || topicId === 'py_10_oop_02' || topicId === 'py_10_02' ? 'OOP-02'
            : topicId === 'py_10_oops_02' || topicId === 'py_10_oop_03' || topicId === 'py_10_03' ? 'OOP-03'
            : topicId === 'py_10_oops_04_init' || topicId === 'py_10_oop_04' || topicId === 'py_10_04' ? 'OOP-04'
            : topicId === 'py_10_oops_03' || topicId === 'py_10_oop_05' || topicId === 'py_10_05' ? 'OOP-05'
            : topicId === 'py_10_oops_04' || topicId === 'py_10_oop_06' || topicId === 'py_10_06' ? 'OOP-06'
            : topicId === 'py_10_oops_05' || topicId === 'py_10_oop_07' || topicId === 'py_10_07' ? 'OOP-07'
            : topicId === 'py_10_oops_06' || topicId === 'py_10_oop_08' || topicId === 'py_10_08' ? 'OOP-08'
            : topicId === 'py_10_oops_07' || topicId === 'py_10_oop_09' || topicId === 'py_10_09' ? 'OOP-09'
            : topicId === 'py_10_oops_08' || topicId === 'py_10_oop_10' || topicId === 'py_10_10' ? 'OOP-10'
            : topicId === 'py_10_oops_09' || topicId === 'py_10_oop_11' || topicId === 'py_10_11' ? 'OOP-11'
            : topicId === 'py_10_oops_10' || topicId === 'py_10_oop_12' || topicId === 'py_10_12' ? 'OOP-12'
            : topicId === 'py_09_problem_solving_01' || topicId === 'py_09_ps_01' || topicId === 'py_09_01' ? 'PS-01'
            : topicId === 'py_09_problem_solving_02' || topicId === 'py_09_ps_02' || topicId === 'py_09_02' ? 'PS-02'
            : topicId === 'py_09_problem_solving_03' || topicId === 'py_09_ps_03' || topicId === 'py_09_03' ? 'PS-03'
            : topicId === 'py_09_problem_solving_04' || topicId === 'py_09_ps_04' || topicId === 'py_09_04' ? 'PS-04'
            : topicId === 'py_09_problem_solving_05' || topicId === 'py_09_ps_05' || topicId === 'py_09_05' ? 'PS-05'
            : topicId === 'py_09_problem_solving_06' || topicId === 'py_09_ps_06' || topicId === 'py_09_06' ? 'PS-06'
            : topicId === 'py_09_problem_solving_07' || topicId === 'py_09_ps_07' || topicId === 'py_09_07' ? 'PS-07'
            : topicId === 'py_09_problem_solving_08' || topicId === 'py_09_ps_08' || topicId === 'py_09_08' ? 'PS-08'
            : topicId === 'py_09_problem_solving_09' || topicId === 'py_09_ps_09' || topicId === 'py_09_09' ? 'PS-09'
            : topicId === 'py_09_problem_solving_10' || topicId === 'py_09_ps_10' || topicId === 'py_09_10' ? 'PS-10'
            : topicId === 'py_09_problem_solving_11' || topicId === 'py_09_ps_11' || topicId === 'py_09_11' ? 'PS-11'
            : topicId === 'py_09_problem_solving_12' || topicId === 'py_09_ps_12' || topicId === 'py_09_12' ? 'PS-12'
            : topicId === 'py_08_functions_00_intro' || topicId === 'py_08_fn_01' ? 'FN-01'
            : topicId === 'py_08_functions_01' || topicId === 'py_08_fn_02' ? 'FN-02'
            : topicId === 'py_08_functions_03_call' || topicId === 'py_08_fn_03' ? 'FN-03'
            : topicId === 'py_08_functions_02' || topicId === 'py_08_fn_04' ? 'FN-04'
            : topicId === 'py_08_functions_03' || topicId === 'py_08_fn_05' ? 'FN-05'
            : topicId === 'py_08_functions_04' || topicId === 'py_08_fn_06' ? 'FN-06'
            : topicId === 'py_08_functions_05' || topicId === 'py_08_fn_07' ? 'FN-07'
            : topicId === 'py_08_functions_06' || topicId === 'py_08_fn_08' ? 'FN-08'
            : topicId === 'py_08_functions_07' || topicId === 'py_08_fn_09' ? 'FN-09'
            : topicId === 'py_08_functions_08' || topicId === 'py_08_fn_10' ? 'FN-10'
            : topicId === 'py_08_functions_09' || topicId === 'py_08_fn_11' ? 'FN-11'
            : topicId === 'py_08_functions_10' || topicId === 'py_08_fn_12' ? 'FN-12'
            : topicId === 'py_07_sets_dicts_00_intro' || topicId === 'py_07_sets_01' ? 'SET-01'
            : topicId === 'py_07_sets_dicts_01' || topicId === 'py_07_sets_02' ? 'SET-02'
            : topicId === 'py_07_sets_dicts_03' || topicId === 'py_07_sets_03' ? 'SET-03'
            : topicId === 'py_07_sets_dicts_02' || topicId === 'py_07_sets_04' ? 'SET-04'
            : topicId === 'py_07_sets_dicts_05_ops' || topicId === 'py_07_sets_05' ? 'SET-05'
            : topicId === 'py_07_sets_dicts_04_intro' || topicId === 'py_07_dicts_06' ? 'DICT-06'
            : topicId === 'py_07_sets_dicts_04' || topicId === 'py_07_dicts_07' ? 'DICT-07'
            : topicId === 'py_07_sets_dicts_05' || topicId === 'py_07_dicts_08' ? 'DICT-08'
            : topicId === 'py_07_sets_dicts_06' || topicId === 'py_07_dicts_09' ? 'DICT-09'
            : topicId === 'py_07_sets_dicts_08' || topicId === 'py_07_dicts_10' ? 'DICT-10'
            : topicId === 'py_07_sets_dicts_09' || topicId === 'py_07_dicts_11' ? 'DICT-11'
            : topicId === 'py_06_lists_tuples_00_intro' || topicId === 'py_06_lists_01' ? 'LST-01'
            : topicId === 'py_06_lists_tuples_01' || topicId === 'py_06_lists_02' ? 'LST-02'
            : topicId === 'py_06_lists_tuples_02' || topicId === 'py_06_lists_03' ? 'LST-03'
            : topicId === 'py_06_lists_tuples_03' || topicId === 'py_06_lists_04' ? 'LST-04'
            : topicId === 'py_06_lists_tuples_05_remove' || topicId === 'py_06_lists_05' ? 'LST-05'
            : topicId === 'py_06_lists_tuples_04' || topicId === 'py_06_lists_06' ? 'LST-06'
            : topicId === 'py_06_lists_tuples_09' || topicId === 'py_06_lists_07' ? 'LST-07'
            : topicId === 'py_06_lists_tuples_05' || topicId === 'py_06_lists_08' ? 'LST-08'
            : topicId === 'py_06_lists_tuples_07' || topicId === 'py_06_lists_09' ? 'LST-09'
            : topicId === 'py_06_lists_tuples_06' || topicId === 'py_06_lists_10' ? 'LST-10'
            : topicId === 'py_06_lists_tuples_08' || topicId === 'py_06_lists_11' ? 'LST-11'
            : topicId === 'py_06_lists_tuples_12_proj' || topicId === 'py_06_lists_12' ? 'LST-12'
            : topicId === 'py_05_strings_00_intro' ? 'STR-01'
            : topicId === 'py_05_strings_01' ? 'STR-02'
            : topicId === 'py_05_strings_03_concat' ? 'STR-03'
            : topicId === 'py_05_strings_04_index' ? 'STR-04'
            : topicId === 'py_05_strings_02' ? 'STR-05'
            : topicId === 'py_05_strings_06_len' ? 'STR-06'
            : topicId === 'py_05_strings_03' ? 'STR-07'
            : topicId === 'py_05_strings_04' ? 'STR-10'
            : topicId === 'py_05_strings_05' ? 'STR-11'
            : topicId === 'py_05_strings_06' ? 'STR-12'
            : topicId === 'py_05_strings_08' ? 'STR-13'
            : topicId === 'py_04_loops_00_intro' ? 'LP-01'
            : topicId === 'py_04_loops_02' ? 'LP-02'
            : topicId === 'py_04_loops_03' ? 'LP-03'
            : topicId === 'py_04_loops_01' ? 'LP-04'
            : topicId === 'py_04_loops_04' ? 'LP-05'
            : topicId === 'py_04_loops_05_break' ? 'LP-06'
            : topicId === 'py_04_loops_05_continue' ? 'LP-07'
            : topicId === 'py_04_loops_05_pass' ? 'LP-08'
            : topicId === 'py_04_loops_06' ? 'LP-09'
            : topicId === 'py_04_loops_08' ? 'LP-10'
            : topicId === 'py_04_loops_07' ? 'LP-11'
            : topicId === 'py_04_loops_09' ? 'LP-12'
            : topicId === 'py_03_conditionals_01_intro' ? 'CD-01'
            : topicId === 'py_03_conditionals_01' ? 'CD-02'
            : topicId === 'py_03_conditionals_02' ? 'CD-03'
            : topicId === 'py_03_conditionals_03' ? 'CD-04'
            : topicId === 'py_03_conditionals_04' ? 'CD-05'
            : topicId === 'py_03_conditionals_06_cond' ? 'CD-06'
            : topicId === 'py_03_conditionals_05' ? 'CD-07'
            : topicId === 'py_03_conditionals_06' ? 'CD-08'
            : topicId === 'py_03_conditionals_07' ? 'CD-09'
            : topicId === 'py_03_conditionals_08' ? 'CD-10'
            : topicId === 'py_03_conditionals_09' ? 'CD-11'
            : topicId === 'py_02_operators_01' ? 'OP-01'
            : topicId === 'py_02_operators_02_add_sub' ? 'OP-02'
            : topicId === 'py_02_operators_03_mul_div' ? 'OP-03'
            : topicId === 'py_02_operators_04_floor_mod' ? 'OP-04'
            : topicId === 'py_02_operators_05_exp' ? 'OP-05'
            : topicId === 'py_02_operators_03' ? 'OP-06'
            : topicId === 'py_02_operators_04' ? 'OP-07'
            : topicId === 'py_02_operators_02' ? 'OP-08'
            : topicId === 'py_02_operators_05' ? 'OP-09'
            : topicId === 'py_02_operators_06' ? 'OP-10'
            : topicId === 'py_02_operators_08' ? 'OP-11'
            : topicId === 'py_02_operators_09' ? 'OP-12'
            : topicId === 'py_01_basics_17' ? 'PB-17' : topicId === 'py_01_basics_16' ? 'PB-16' : topicId === 'py_01_basics_15' ? 'PB-15' : topicId === 'py_01_basics_14' ? 'PB-14' : topicId === 'py_01_basics_13' ? 'PB-13' : topicId === 'py_01_basics_12' ? 'PB-12' : topicId === 'py_01_basics_11' ? 'PB-11' : topicId === 'py_01_basics_09' ? 'PB-09' : topicId === 'py_01_basics_08' ? 'PB-08' : topicId === 'py_01_basics_07' ? 'PB-07' : topicId === 'py_01_basics_06' ? 'PB-06' : topicId === 'py_01_basics_05' ? 'PB-05' : topicId === 'py_01_basics_04' ? 'PB-04' : topicId === 'py_01_basics_03' ? 'PB-03' : topicId === 'py_01_basics_02' ? 'PB-02' : 'PB-01';
          const qId = `${topicPrefix}-${String(activeQuestionIndex + 1).padStart(2, '0')}`;
          onProgressUpdate?.(qId);
        } catch {}
      } else {
        setPracticePassed(false);
        setShowErrorSuggestion(true);
        soundEffects.playError?.();
        try {
          const preDiag = diagnosePythonError({
            studentCode,
            stdout: out,
            rawError: res.error || null,
            expectedOutput: currentQuestionConfig.expectedOutput,
            referenceCode: currentQuestionConfig.referenceCode,
            problemStatement: currentQuestionConfig.problemStatement,
            questionTitle: currentQuestionConfig.title,
          });
          if (!res.error && preDiag.exactIssue) {
            setPracticeError(`${preDiag.title} — ${preDiag.exactIssue}`);
          }
          const preText = buildSpokenDiagnosticText(preDiag);
          fetch(`/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(preText)}`).catch(() => {});
        } catch {}
        // Play friendly teacher error prompt voice
        playDesiVoiceAudio(
          '/audio/smart_teacher/error_prompt.mp3',
          'Arre, code mein thodi si gadbad ho gayi hai! Tension mat lo, neeche Explain My Error button par click karo, main samjhati hoon kya problem hai.'
        );
      }
    } catch (err: any) {
      setPracticeError(err?.message || 'Verification error');
      setPracticePassed(false);
      setShowErrorSuggestion(true);
      soundEffects.playError?.();
      playDesiVoiceAudio(
        '/audio/smart_teacher/error_prompt.mp3',
        'Arre, code mein thodi si gadbad ho gayi hai! Tension mat lo, neeche Explain My Error button par click karo, main samjhati hoon kya problem hai.'
      );
    } finally {
      setIsRunning(false);
      setActiveTabPractice('testcases');
    }
  };

  // Progressive Hint
  const handleShowNextHint = () => {
    soundEffects.playClick?.();
    if (revealedHintLevel < 3) {
      const nextLevel = revealedHintLevel + 1;
      setRevealedHintLevel(nextLevel);
      const qNum = activeQuestionIndex + 1;
      let hintAudio = '';
      if (topicId === 'py_02_operators_01') {
        hintAudio = `/audio/smart_teacher/module02_topic01/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_17') {
        hintAudio = `/audio/smart_teacher/topic_17/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_16') {
        hintAudio = `/audio/smart_teacher/topic_16/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_15') {
        hintAudio = `/audio/smart_teacher/topic_15/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_14') {
        hintAudio = `/audio/smart_teacher/topic_14/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_13') {
        hintAudio = `/audio/smart_teacher/topic_13/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_12') {
        hintAudio = `/audio/smart_teacher/topic_12/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_11') {
        hintAudio = `/audio/smart_teacher/topic_11/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_09') {
        hintAudio = `/audio/smart_teacher/topic_09/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_08') {
        hintAudio = `/audio/smart_teacher/topic_08/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_07') {
        hintAudio = `/audio/smart_teacher/topic_07/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_06') {
        hintAudio = `/audio/smart_teacher/topic_06/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_05') {
        hintAudio = `/audio/smart_teacher/topic_05/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_04') {
        hintAudio = `/audio/smart_teacher/topic_04/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_03') {
        hintAudio = `/audio/smart_teacher/topic_03/q${qNum}_hint_${nextLevel}.mp3`;
      } else if (topicId === 'py_01_basics_02') {
        hintAudio = `/audio/smart_teacher/topic_02/q${qNum}_hint_${nextLevel}.mp3`;
      } else {
        hintAudio = activeQuestionIndex === 0 
          ? `/audio/smart_teacher/hint_${nextLevel}.mp3` 
          : `/audio/smart_teacher/q${qNum}_hint_${nextLevel}.mp3`;
      }
      const hintText = activeHints[nextLevel - 1] 
        ? (language === 'hi' ? activeHints[nextLevel - 1].textHinglish : activeHints[nextLevel - 1].textEnglish)
        : '';
      playDesiVoiceAudio(hintAudio, hintText);
    }
  };

    // Helper to format diagnostic text so TTS pronounces quotes, brackets, and colons clearly
  const buildSpokenDiagnosticText = (diag: ErrorDiagnostic): string => {
    const exactProb = diag.exactIssue || diag.title;
    const rawGuidance =
      language === 'hi'
        ? `Execution Error! Exact Problem: ${exactProb} Friendly Guidance: ${diag.explanationHinglish} Isse theek karne ke liye: ${diag.fixSuggestionHinglish}`
        : `Execution Error! Exact Problem: ${exactProb} Friendly Guidance: ${diag.explanationEnglish} To fix this: ${diag.fixSuggestionEnglish}`;

    return rawGuidance
      .replace(/opening bracket '\('/gi, 'opening round bracket')
      .replace(/closing bracket '\)'/gi, 'closing round bracket')
      .replace(/bracket '\('/gi, 'round bracket')
      .replace(/closing '\)'/gi, 'closing round bracket')
      .replace(/quote \(""\)|quote \("\)/gi, 'double quote')
      .replace(/quote \(''\)|quote \('\)/gi, 'single quote')
      .replace(/'\('/g, ' opening round bracket ')
      .replace(/'\)'/g, ' closing round bracket ')
      .replace(/'\['/g, ' opening square bracket ')
      .replace(/'\]'/g, ' closing square bracket ')
      .replace(/'\{'/g, ' opening curly brace ')
      .replace(/'\}'/g, ' closing curly brace ')
      .replace(/':'/g, ' colon ')
      .replace(/'=='/g, ' double equals ')
      .replace(/'='/g, ' single equals ')
      .replace(/'!'/g, ' exclamation mark ')
      .replace(/\(""\)|\("\)|'"'/g, ' double quote ')
      .replace(/\(''\)|\('\)|"'"/g, ' single quote ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Play Exact Problem + Friendly Guidance + How to Fix in the exact same Indian Female Voice (hi-IN-SwaraNeural) as Explanation
  const playDiagnosticVoice = (diag: ErrorDiagnostic) => {
    // Immediately stop any ongoing Execution Error prompt (error_prompt.mp3) or step audio
    stopSpeech();
    if (isMuted) return;

    const spokenGuidance = buildSpokenDiagnosticText(diag);
    const liveSwaraUrl = `/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(spokenGuidance)}`;
    const staticFallbackUrl = `/audio/smart_teacher/diag_${diag.type}.mp3`;

    try {
      const audio = new Audio(liveSwaraUrl);
      audioPlayerRef.current = audio;
      setIsPlayingAudio(true);

      audio.onplay = () => setIsPlayingAudio(true);
      audio.onended = () => setIsPlayingAudio(false);
      audio.onerror = () => {
        playDesiVoiceAudio(staticFallbackUrl, spokenGuidance);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          playDesiVoiceAudio(staticFallbackUrl, spokenGuidance);
        });
      }
    } catch {
      playDesiVoiceAudio(staticFallbackUrl, spokenGuidance);
    }
  };

  // Explain My Error
  const handleExplainError = () => {
    soundEffects.playClick?.();
    // Immediately stop any ongoing Execution Error voice before opening and speaking Exact Problem
    stopSpeech();
    const diag = diagnosePythonError({
      studentCode,
      stdout: practiceOutput,
      rawError: practiceError,
      expectedOutput: currentQuestionConfig.expectedOutput,
      referenceCode: currentQuestionConfig.referenceCode,
      problemStatement: currentQuestionConfig.problemStatement,
      questionTitle: currentQuestionConfig.title,
    });
    setCurrentDiagnostic(diag);
    setErrorModalOpen(true);

    // Speak Execution Error + Exact Problem + Friendly Guidance + How to Fix in the exact same Female Voice
    playDiagnosticVoice(diag);
  };

  // Teacher Help
  const handleOpenTeacherHelp = () => {
    soundEffects.playClick?.();
    setTeacherHelpModalOpen(true);
    if (selectedHelpTopic) {
      const helpAudio = `/audio/smart_teacher/help_${selectedHelpTopic.id}.mp3`;
      playDesiVoiceAudio(helpAudio, selectedHelpTopic.answerHinglish);
    }
  };

  // Pre-warm female teacher diagnostic TTS in background when student edits code so Explain My Error speaks instantaneously
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const diag = diagnosePythonError({
          studentCode,
          stdout: practiceOutput,
          rawError: practiceError,
          expectedOutput: currentQuestionConfig.expectedOutput,
          referenceCode: currentQuestionConfig.referenceCode,
          problemStatement: currentQuestionConfig.problemStatement,
          questionTitle: currentQuestionConfig.title,
        });
        const text = buildSpokenDiagnosticText(diag);
        fetch(`/api/human-tts?lang=hi&voice=hi-IN-SwaraNeural&text=${encodeURIComponent(text)}`).catch(() => {});
      } catch {}
    }, 400);
    return () => clearTimeout(timer);
  }, [studentCode, practiceOutput, practiceError, activeQuestionIndex, topicId]);

    // Clean up speech on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

    return (
    <div className="flex flex-col gap-2 min-w-0 font-sans pb-2">
      {/* ═══════════════════════════════════════════════════════════════════════
          QUESTION HEADING (Compact Executive Header)
         ═══════════════════════════════════════════════════════════════════════ */}
      <div className="py-1 px-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-purple-100/60 pb-1.5">
        <div className="flex items-center flex-wrap gap-2 min-w-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#6D28D9] text-white text-xs font-bold tracking-wide shadow-2xs shrink-0 select-none">
            Module {moduleNum} · Q{activeQuestionIndex + 1}
          </span>
          <h2 className="text-sm sm:text-base md:text-lg font-black text-slate-900 tracking-tight shrink-0">
            {currentQuestionConfig.title || `Challenge ${activeQuestionIndex + 1}`}
          </h2>
          <span className="hidden sm:inline text-slate-300 font-bold">·</span>
          <p className="text-xs text-slate-600 font-medium truncate max-w-xl">
            {(() => {
              const stmt = (currentQuestionConfig.problemStatement || currentQuestionConfig.instructions || '').trim();
              return stmt.replace(/^###\s*Problem Statement\s*/i, '').replace(/###\s*Instructions.*/is, '').trim();
            })()}
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. TOP LEARNING AREA (2 Panels: Full Python Code + Visual Explanation)
         ═══════════════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-stretch">
        {/* ── LEFT CARD: FULL PYTHON CODE (Read Only - Compact) ── */}
        <div className="lg:col-span-4 rounded-xl bg-white border border-purple-100/90 shadow-2xs p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-purple-700" />
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-tight">Full Python Code</h3>
                <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[9px] font-black uppercase tracking-wider">
                  Read Only
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="h-[30px] px-2.5 rounded-[8px] bg-[#FFFFFF] border border-[#E6E1F0] text-[#0B132B] hover:bg-[#EDE3FF] hover:-translate-y-[1px] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ease-in-out cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#109B81]" /> : <Copy className="w-3.5 h-3.5 text-[#6D28D9]" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Compact Dark Code Box with Live Code Magic Highlights */}
            <div className="rounded-xl bg-[#090d16] border border-slate-800 p-2.5 font-mono text-xs sm:text-[12.5px] leading-5 flex flex-col gap-1 relative overflow-hidden transition-all duration-300">
              {REFERENCE_CODE.split('\n').map((lineText, lineIdx) => {
                const isLineActive = isExplanationStarted && (currentStep.highlightLine === (lineIdx + 1) || activeTeachingSteps.length === 1);
                return (
                  <div
                    key={lineIdx}
                    className={`flex items-center justify-between gap-1.5 rounded-md px-1.5 py-0.5 transition-all duration-300 ${
                      isLineActive
                        ? 'bg-gradient-to-r from-purple-900/60 via-indigo-900/45 to-purple-900/30 ring-1 ring-amber-400/80 shadow-[0_0_12px_rgba(168,85,247,0.35)] translate-x-0.5'
                        : ''
                    }`}
                  >
                    <div className="flex items-start gap-2 min-w-0 flex-1">
                      <span className={`select-none font-bold text-[10px] pt-0.5 ${isLineActive ? 'text-amber-300' : 'text-slate-600'}`}>
                        {lineIdx + 1}
                      </span>
                      <div className="flex-1 text-slate-200 font-bold tracking-wide break-all whitespace-pre-wrap">
                        {renderPythonSyntax(lineText)}
                      </div>
                    </div>
                    {isLineActive && currentStep.highlightToken && (
                      <span className="shrink-0 px-1.5 py-0.5 rounded bg-amber-400/20 border border-amber-300/60 text-amber-200 text-[9px] font-mono font-black animate-pulse">
                        🎯 {currentStep.highlightToken}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Button: Start Explanation (Compact) */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleStartExplanation}
              className="w-full h-[32px] rounded-[8px] bg-[#6D28D9] hover:bg-[#5B21B6] active:bg-[#4C1D95] hover:-translate-y-[1px] text-[#FFFFFF] text-[13px] font-semibold flex items-center justify-center gap-2 border-0 shadow-[0_4px_12px_rgba(109,40,217,0.15)] transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>{isExplanationStarted ? 'Replay Explanation' : 'Start Explanation'}</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT CARD: VISUAL EXPLANATION (Expanded lg:col-span-8 with Animated Highlighted Visual Stage) ── */}
        <div className="lg:col-span-8 rounded-xl bg-white border border-purple-100/90 shadow-2xs p-3 flex flex-col justify-between">
          <div>
            {/* Header: Title, Step badge, Stepper dots, Navigation arrows */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-700" />
                <h3 className="text-sm font-black text-slate-900 tracking-tight">Visual Explanation</h3>
                <span className="text-slate-400 font-bold">—</span>
                <span className="text-xs font-black text-purple-700">
                  Step {currentStepIndex + 1} of {activeTeachingSteps.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Stepper Dots matching active teaching steps */}
                <div className="flex items-center gap-1">
                  {activeTeachingSteps.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentStepIndex
                          ? 'w-5 bg-purple-700'
                          : 'w-2 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Explanation Body: Teacher + Text Bubble (md:col-span-5) + Animated Visual Stage & Console (md:col-span-7) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-start">
              {/* Teacher Avatar & Premium Explanation Card (md:col-span-5) */}
              <div className="md:col-span-5 flex flex-col gap-2">
                {/* Realistic Upper-Body AI Teacher Avatar + Stepper Audio Controls */}
                <div className="flex flex-col items-center gap-2 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 p-2 rounded-2xl border border-purple-200/70 shadow-2xs">
                  <HumanTeacherAvatar
                    isSpeaking={isPlayingAudio && !isPaused}
                    isPaused={isPaused}
                    isExplanationStarted={isExplanationStarted}
                    currentStepIndex={currentStepIndex}
                    conceptKey={currentQuestionConfig.conceptKey}
                    activeWord={(() => {
                      if (!isExplanationStarted || !isPlayingAudio) return '';
                      const fullText = language === 'hi' ? currentStep.cardExplanationHinglish : currentStep.cardExplanationEnglish;
                      const words = fullText.split(' ');
                      return words[activeWordIndex] || '';
                    })()}
                    mood={practicePassed || currentStepIndex === activeTeachingSteps.length - 1 ? 'celebrating' : isExplanationStarted ? 'explaining' : 'idle'}
                    size="compact"
                    language={language}
                  />

                  {/* Controls below AI Mentor with Smart Animated "Next Step" Indicator */}
                  <div className="flex items-center gap-1 p-0.5 rounded-[10px] bg-[#F8F7FC] border border-[#E6E1F0] shadow-2xs">
                    {/* Previous Step */}
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={!isExplanationStarted || currentStepIndex === 0}
                      className="w-[30px] h-[30px] rounded-[8px] bg-white border border-[#E6E1F0] text-[#6D28D9] hover:bg-[#EDE3FF] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                      title="Previous Step"
                    >
                      <ChevronLeft className="w-4 h-4 text-[#6D28D9]" />
                    </button>

                    {/* Pause / Resume Button */}
                    <button
                      type="button"
                      onClick={handleTogglePause}
                      disabled={!isExplanationStarted}
                      className="w-[30px] h-[30px] rounded-[8px] bg-white border border-[#E6E1F0] text-[#6D28D9] hover:bg-[#EDE3FF] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                      title={isPaused ? 'Resume Explanation' : 'Pause Explanation'}
                    >
                      {isPaused ? <Play className="w-4 h-4 fill-current text-[#6D28D9]" /> : <Pause className="w-4 h-4 text-[#6D28D9]" />}
                    </button>

                    {/* Unified Main Action Button */}
                    {!isExplanationStarted ? (
                      <div className="relative inline-flex p-[2px] rounded-[11px] overflow-hidden group shadow-[0_3px_14px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_18px_rgba(66,133,244,0.35)] transition-all duration-300">
                        <div className="google-border-beam-glow pointer-events-none" />
                        <div className="google-border-beam-spinner pointer-events-none" />
                        <button
                          type="button"
                          onClick={handleStartExplanation}
                          className="relative z-10 cursor-pointer min-w-[115px] h-[30px] px-2.5 rounded-[8px] bg-white hover:bg-slate-50 text-slate-800 text-[11.5px] font-black tracking-tight flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-98 shadow-xs hover:text-purple-700"
                          title="Start Visual Explanation"
                        >
                          <Play className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB] shrink-0" />
                          <span>Start Explanation</span>
                        </button>
                      </div>
                    ) : currentStepIndex < activeTeachingSteps.length - 1 ? (
                      <div className="relative inline-flex p-[2px] rounded-[11px] overflow-hidden group shadow-[0_3px_14px_rgba(99,102,241,0.2)] hover:shadow-[0_4px_18px_rgba(66,133,244,0.35)] transition-all duration-300">
                        <div className="google-border-beam-glow pointer-events-none" />
                        <div className="google-border-beam-spinner pointer-events-none" />
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="relative z-10 cursor-pointer min-w-[95px] h-[30px] px-2 rounded-[8px] bg-white hover:bg-slate-50 text-slate-800 text-[11.5px] font-black tracking-tight flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-98 shadow-xs hover:text-purple-700"
                          title="Next Step"
                        >
                          <span>Next Step</span>
                          <ChevronRight className="w-4 h-4 stroke-[2.5] text-[#2563EB]" />
                        </button>
                      </div>
                    ) : (
                      <div className="relative inline-flex p-[2px] rounded-[11px] overflow-hidden group shadow-[0_3px_14px_rgba(212,255,63,0.3)] hover:shadow-[0_5px_20px_rgba(212,255,63,0.5)] transition-all duration-300">
                        <div className="google-border-beam-glow pointer-events-none" />
                        <div className="google-border-beam-spinner pointer-events-none" />
                        <button
                          type="button"
                          onClick={scrollToCodingPractice}
                          className="relative z-10 cursor-pointer min-w-[105px] h-[30px] px-2.5 rounded-[8px] bg-[#D4FF3F] hover:bg-[#C4EF2C] text-[#0B132B] text-[11.5px] font-black tracking-tight flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-98 shadow-xs"
                          title="Start Coding Practice"
                        >
                          <span>Start Coding</span>
                          <Code2 className="w-3.5 h-3.5 stroke-[2.5] text-[#0B132B]" />
                        </button>
                      </div>
                    )}

                    {/* Sound / Replay Button */}
                    <button
                      type="button"
                      onClick={handleReplaySpeech}
                      disabled={!isExplanationStarted}
                      className="w-[30px] h-[30px] rounded-[8px] bg-white border border-[#E6E1F0] text-[#6D28D9] hover:bg-[#EDE3FF] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
                      title="Voice Replay"
                    >
                      <Volume2 className="w-4 h-4 text-[#6D28D9]" />
                    </button>
                  </div>
                </div>

                {/* 2. Premium Explanation Bubble - Full Width of Column, Clean & Spacious */}
                <div className="w-full bg-gradient-to-br from-purple-50/90 via-white to-purple-50/40 border border-purple-200/70 rounded-lg p-2.5 text-xs text-slate-700 leading-relaxed font-medium min-h-[70px] shadow-2xs">
                  {!isExplanationStarted ? (
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-800">
                          <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                          Interactive Concept Guide
                        </span>
                        <span className="text-[10.5px] font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-md">
                          {activeTeachingSteps.length} Steps
                        </span>
                      </div>
                      <p className="text-slate-600 text-[11.5px] leading-relaxed">
                        {currentQuestionConfig.title}: Python ke foundational concepts aur execution flow ko samjhein. Upar diye gaye <span className="font-bold text-purple-700">Start Explanation</span> button par click karke step-by-step interactive explanation shuru karein.
                      </p>
                    </div>
                  ) : (
                    (() => {
                      const fullText = language === 'hi' ? currentStep.cardExplanationHinglish : currentStep.cardExplanationEnglish;
                      const words = fullText.split(' ');

                      return (
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between text-[11px] font-bold text-purple-800 pb-1 border-b border-purple-100/80">
                            <span>Step {currentStepIndex + 1}: {currentStep.title}</span>
                            <span className="text-slate-400 font-semibold">{currentStepIndex + 1} / {activeTeachingSteps.length}</span>
                          </div>
                          <p className="text-xs text-slate-800 leading-relaxed font-medium">
                            {words.map((word, wIdx) => {
                              const isCurrentSpeakingWord = wIdx === activeWordIndex && isPlayingAudio;
                              return (
                                <span
                                  key={wIdx}
                                  className={`transition-colors duration-150 inline-block mr-1 ${
                                    isCurrentSpeakingWord
                                      ? 'text-purple-900 font-bold bg-purple-200/90 px-1 py-0.2 rounded'
                                      : 'text-slate-700'
                                  }`}
                                >
                                  {word}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                      );
                    })()
                  )}
                </div>
              </div>

              {/* Animated Code Concept & Dynamic Visual Workspace (Directly Above Console Output) */}
              <div
                key={`visual_stage_${activeQuestionIndex}_${currentStepIndex}_${isExplanationStarted ? 'live' : 'idle'}`}
                className="md:col-span-7 flex flex-col gap-2.5 transition-all duration-300"
              >
                {/* Intelligent Dynamic Visual Workspace (Replaces generic 3-cards with Question-Aware Engine) */}
                <DynamicVisualWorkspace
                  currentStep={currentStep}
                  currentStepIndex={currentStepIndex}
                  totalSteps={activeTeachingSteps.length}
                  topicId={topicId}
                  questionConfig={currentQuestionConfig}
                  isExplanationStarted={isExplanationStarted}
                />

                {/* Console Output Card (matching reference right box) */}
                <div className="rounded-xl bg-[#090d16] border border-slate-800 p-2.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-[10px] text-slate-400 font-bold ml-1">
                      Console (Output)
                    </span>
                  </div>
                  <div className="text-emerald-400 font-bold py-1 whitespace-pre-wrap">
                    {isExplanationStarted && currentStep.isConsoleVisible && currentStep.consoleOutput ? (
                      <span>&gt; {currentStep.consoleOutput}</span>
                    ) : currentStepIndex >= activeTeachingSteps.length - 1 ? (
                      <span>&gt; {EXPECTED_OUTPUT}</span>
                    ) : (
                      <span className="text-slate-500 italic">&gt; [Click Next to execute output]</span>
                    )}
                  </div>
                  {((isExplanationStarted && currentStep.isConsoleVisible && currentStep.consoleOutput) || currentStepIndex >= activeTeachingSteps.length - 1) && (
                    <div className="mt-1.5 px-2 py-1 rounded-md bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Output: {(currentStep.consoleOutput || EXPECTED_OUTPUT).replace(/\n/g, ' | ')}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. PREMIUM PRACTICE WORKBOOK (2 Panels: Code Workbook + Test Cases & Diagnostics)
         ═══════════════════════════════════════════════════════════════════════ */}
      <div ref={practiceSectionRef} id="coding-practice-section" className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-stretch scroll-mt-4">
        {/* ── LEFT PANEL: PREMIUM CODE WORKBOOK (lg:col-span-7) ── */}
        <div className="lg:col-span-7 rounded-xl bg-gradient-to-b from-white via-white to-purple-50/40 border border-purple-200/80 shadow-2xs p-3 flex flex-col justify-between">
          <div>
            {/* Workbook Header */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2 pb-2 border-b border-purple-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight">Coding Practice Workbook</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-[11px] font-black uppercase tracking-wider">
                      Module {moduleNum} Q{activeQuestionIndex + 1}
                    </span>
                  </div>
                  <p className="text-[10.5px] text-slate-500 font-semibold leading-tight mt-0.5">
                    Apna Python solution likhiye aur Run Code se test kijiye
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-[28px] px-2.5 rounded-[8px] bg-purple-50 border border-purple-200 text-purple-950 text-[10.5px] font-bold flex items-center gap-1 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Python v3.12</span>
                </span>
                <button
                  type="button"
                  onClick={handleResetCode}
                  className="h-[28px] px-2.5 rounded-[8px] bg-white border border-[#E6E1F0] text-[#2F3E46] hover:bg-[#EDE3FF] hover:-translate-y-[1px] text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Premium Dark IDE */}
            <div className="rounded-xl bg-[#090d16] border border-slate-800 overflow-hidden shadow-inner">
              <div className="px-3 py-1.5 bg-[#0f1624] border-b border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                  <span className="text-[10.5px] font-mono font-bold text-slate-300 ml-1.5">solution.py</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-purple-300/90 truncate max-w-[60%]">
                  🎯 Target: {(currentQuestionConfig.expectedOutput || '').replace(/\n/g, ' | ')}
                </span>
              </div>
              <div className="p-2.5 font-mono text-xs sm:text-[13px] text-slate-100 leading-5 flex gap-2.5 min-h-[135px]">
                <div className="select-none text-right pr-2 border-r border-slate-800 text-slate-500 font-bold flex flex-col">
                  {Array.from({ length: Math.max((studentCode || '').split('\n').length, 7) }).map((_, i) => (
                    <span key={i} className="leading-6 text-[11px]">{i + 1}</span>
                  ))}
                </div>
                <textarea
                  ref={editorTextareaRef}
                  value={studentCode}
                  onChange={(e) => handleStudentCodeChange(e.target.value)}
                  rows={5}
                  className="w-full bg-transparent text-slate-100 font-mono text-xs sm:text-[13px] leading-5 focus:outline-hidden resize-none"
                  placeholder="# Write your Python code here..."
                  spellCheck={false}
                />
              </div>
            </div>
          </div>

          {/* Run + Submit */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <button
              type="button"
              onClick={handleRunCode}
              disabled={isRunning}
              className="w-full h-[38px] rounded-[10px] bg-[#D4FF3F] hover:bg-[#C4EF2C] active:bg-[#B3DC20] hover:-translate-y-[1px] border border-[#B3DC20] text-[#0B132B] font-bold text-[13px] flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(212,255,63,0.3)] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4FF3F] focus:ring-offset-2 active:scale-98 disabled:opacity-45 disabled:pointer-events-none"
            >
              {isRunning ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run Code</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleSubmitCode}
              disabled={isRunning}
              className="w-full h-[38px] rounded-[10px] bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] hover:-translate-y-[1px] text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(109,40,217,0.3)] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98 disabled:opacity-45 disabled:pointer-events-none"
            >
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>Submit Code</span>
            </button>
          </div>
        </div>

        {/* ── RIGHT PANEL: TEST CASES & DIAGNOSTICS (lg:col-span-5) ── */}
        <div className="lg:col-span-5 rounded-xl bg-gradient-to-b from-white via-white to-purple-50/40 border border-purple-200/80 shadow-2xs p-3 flex flex-col justify-between">
          <div>
            {/* Segmented Tabs */}
            <div className="flex items-center gap-1 p-0.5 mb-2 rounded-lg bg-purple-50 border border-purple-100 text-[11.5px] font-semibold">
              {([
                ['testcases', '✓ Test Cases (1)'],
                ['output', 'Output'],
                ['explanation', 'Explanation'],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTabPractice(key)}
                  className={`flex-1 px-3 py-1.5 rounded-[9px] transition-all duration-200 cursor-pointer ${
                    activeTabPractice === key
                      ? 'bg-white text-[#6D28D9] shadow-sm font-bold'
                      : 'text-[#64748B] hover:text-[#0B132B]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {activeTabPractice === 'testcases' && (
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                    <span
                      className={`w-4 h-4 rounded-full text-white flex items-center justify-center text-[10px] ${
                        practicePassed ? 'bg-[#109B81]' : practiceOutput ? 'bg-[#E34234]' : 'bg-slate-300'
                      }`}
                    >
                      {practicePassed ? '✓' : practiceOutput ? '✕' : '•'}
                    </span>
                    <span>Test Case 1</span>
                  </div>
                  {practicePassed && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">Passed</span>
                  )}
                  {!practicePassed && practiceOutput && (
                    <span className="px-2 py-0.5 rounded-md bg-[#FFF0ED] text-[#B42318] border border-[#F3B4AC] text-[10px] font-black uppercase">Failed</span>
                  )}
                </div>

                {/* Premium I/O Comparison */}
                <div className="rounded-xl bg-white border border-purple-200/80 font-mono text-[11.5px] divide-y divide-purple-100 shadow-2xs overflow-hidden">
                  <div className="flex items-start justify-between gap-3 px-3 py-2">
                    <span className="text-slate-500 font-bold shrink-0">Input</span>
                    <span className="text-slate-800 font-bold text-right whitespace-pre-wrap">
                      {currentQuestionConfig.sampleInput ? currentQuestionConfig.sampleInput.replace(/\n/g, ', ') : '—'}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3 px-3 py-2 bg-amber-50/40">
                    <span className="text-amber-900 font-bold shrink-0">
                      {currentQuestionConfig.isPersonalized ? 'Example' : 'Expected'}
                    </span>
                    <span className="text-amber-950 font-black text-right whitespace-pre-wrap">
                      {currentQuestionConfig.expectedOutput}
                    </span>
                  </div>
                  <div
                    className={`flex items-start justify-between gap-3 px-3 py-2 ${
                      practicePassed ? 'bg-emerald-50/60' : practiceOutput ? 'bg-rose-50/60' : ''
                    }`}
                  >
                    <span className="text-slate-600 font-bold shrink-0">Your Output</span>
                    <span
                      className={`font-black text-right whitespace-pre-wrap ${
                        practicePassed ? 'text-emerald-800' : practiceOutput ? 'text-rose-800' : 'text-slate-400'
                      }`}
                    >
                      {practiceOutput || '[Not run yet]'}
                    </span>
                  </div>
                </div>

                {practicePassed && (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-purple-50 border-2 border-emerald-300 text-slate-800 shadow-sm flex flex-col gap-2 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl animate-bounce">🏆</span>
                        <div>
                          <div className="text-xs font-black text-emerald-950 flex items-center gap-1.5">
                            <span>Wah! Zabardast Kaam Kiya!</span>
                            <span className="px-1.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900 text-[9px] font-black uppercase">+100 XP</span>
                          </div>
                          <p className="text-[11px] text-slate-700 font-medium leading-tight mt-0.5">
                            Aapka Python code successfully pass ho gaya! Shabash!
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={triggerCelebration}
                        className="w-[36px] h-[36px] rounded-[10px] bg-[#EDE3FF] hover:bg-[#E3D2FF] text-[#6D28D9] border border-[#D8B4FE] text-xs transition-all duration-200 cursor-pointer flex items-center justify-center shadow-2xs"
                        title="Replay Celebration"
                      >
                        🎉
                      </button>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-emerald-200/60 text-[10px] text-emerald-900 font-bold">
                      <span className="flex items-center gap-1">
                        <span>⭐</span> Question Completed
                      </span>
                      {activeQuestionIndex < activeTopicConfigs.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => handleSwitchQuestion(activeQuestionIndex + 1)}
                          className="h-[36px] px-3.5 rounded-[10px] bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-[13px] flex items-center gap-1.5 shadow-[0_4px_12px_rgba(109,40,217,0.15)] transition-all duration-200 cursor-pointer"
                        >
                          <span>Next Question (Module {moduleNum} Q{activeQuestionIndex + 2})</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : onNavigateNextTopic ? (
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playClick?.();
                            onNavigateNextTopic();
                          }}
                          className="h-[36px] px-3.5 rounded-[10px] bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-[13px] flex items-center gap-1.5 shadow-[0_4px_12px_rgba(109,40,217,0.15)] transition-all duration-200 cursor-pointer"
                        >
                          <span>Next Topic</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                )}

                {practiceError && (
                  <div className="p-2.5 rounded-[10px] bg-[#FFF0ED] border border-[#E34234] text-[#B42318] text-[11px] flex items-start gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#E34234] mt-0.5" />
                    <div>
                      <div className="font-bold">Execution Error:</div>
                      <div className="font-mono text-[10px]">{practiceError}</div>
                    </div>
                  </div>
                )}

                {showErrorSuggestion && !practicePassed && (
                  <div className="p-2.5 rounded-[12px] bg-[#FFF0ED] border border-[#E34234] text-[#B42318] shadow-sm flex items-start justify-between gap-2 animate-pulse">
                    <div className="flex items-start gap-2">
                      <span className="text-base select-none">💡</span>
                      <div>
                        <div className="text-[11px] font-black text-[#B42318]">Mistake Detect Hui Hai!</div>
                        <p className="text-[11px] text-slate-700 leading-tight mt-0.5">
                          Tension mat lo! Neeche <strong className="text-[#6D28D9] font-bold">Explain My Error</strong> par click karo, teacher sahi rasta batayegi.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleExplainError}
                      className="h-[36px] px-3 rounded-[10px] bg-[#E34234] hover:bg-[#B42318] text-white font-semibold text-[12px] shrink-0 shadow-2xs transition-all duration-200 flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <span>Fix It</span>
                      <span>👉</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTabPractice === 'output' && (
              <div className="rounded-xl bg-[#090d16] p-3 text-xs font-mono text-emerald-400 min-h-[140px] whitespace-pre-wrap">
                {practiceOutput ? `> ${practiceOutput}` : '> [Run code to see standard output]'}
              </div>
            )}

            {activeTabPractice === 'explanation' && (
              <div className="text-xs text-slate-700 leading-relaxed">
                <p className="text-[11.5px] text-slate-600">
                  Upar <strong>Visual Explanation</strong> me <strong>Next</strong> par click karke har line ka live execution, memory aur output step-by-step samjhiye.
                </p>
              </div>
            )}
          </div>

          {/* Explain My Error + Teacher Help */}
          <div className="grid grid-cols-2 gap-2.5 pt-3.5">
            {showErrorSuggestion && !practicePassed ? (
              <div className="relative w-full p-[2.5px] rounded-[13px] overflow-hidden group shadow-[0_4px_18px_rgba(234,67,53,0.35)] hover:shadow-[0_6px_26px_rgba(234,67,53,0.55)] transition-all duration-300">
                {/* Continuous running multicolor light beam around button */}
                <div className="google-border-beam-glow pointer-events-none" />
                <div className="google-border-beam-spinner pointer-events-none" />
                <button
                  type="button"
                  onClick={handleExplainError}
                  className="relative z-10 w-full h-[37px] rounded-[10.5px] bg-white hover:bg-rose-50 text-[#B42318] text-[13px] font-black tracking-tight flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs active:scale-98"
                >
                  <Bug className="w-4 h-4 text-[#EA4335] shrink-0" />
                  <span>Explain My Error</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-100 text-[#B42318] font-bold">Fix</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleExplainError}
                className="w-full h-[42px] px-3.5 rounded-[10px] bg-[#FFF0ED] hover:bg-[#FFE1DB] text-[#B42318] font-semibold text-[13px] flex items-center justify-center gap-2 border border-[#F3B4AC] transition-all duration-200 cursor-pointer hover:-translate-y-[1px] active:scale-98 shadow-2xs"
              >
                <Bug className="w-4 h-4 text-[#B42318]" />
                <span>Explain My Error</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleOpenTeacherHelp}
              className="w-full h-[42px] px-3.5 rounded-[10px] bg-white hover:bg-[#EDE3FF] hover:-translate-y-[1px] text-[#6D28D9] font-semibold text-[13px] flex items-center justify-center gap-2 border border-[#D8B4FE] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Teacher Help</span>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          6. BOTTOM FOOTER NAVIGATION (Strict bottom format: Previous | Question X of 10 | Progress Dots | Next)
         ═══════════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between gap-2 pt-2 px-1">
        {/* Previous Question Button */}
        <button
          type="button"
          onClick={() => {
            if (activeQuestionIndex > 0) {
              handleSwitchQuestion(activeQuestionIndex - 1);
            } else {
              onNavigatePrevTopic?.();
            }
          }}
          className="w-[120px] h-[40px] rounded-[10px] bg-[#FFFFFF] hover:bg-[#EDE3FF] hover:-translate-y-[1px] text-[#0B132B] font-semibold text-[13px] sm:text-[14px] flex items-center justify-center gap-2 border border-[#E6E1F0] transition-all duration-200 ease-in-out cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98"
        >
          <ArrowLeft className="w-4 h-4 text-[#0B132B]" />
          <span>Previous</span>
        </button>

        {/* Module Questions Selector (Module X: Q1, Q2, Q3...) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <span className="text-xs font-black text-purple-900 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200 hidden sm:inline-flex items-center gap-1.5 shadow-2xs">
            <span>📚</span>
            <span>Module {moduleNum}</span>
          </span>
          <div className="flex items-center gap-1.5">
            {activeTopicConfigs.map((q, idx) => {
              const isCurrent = idx === activeQuestionIndex;
              const topicPrefix = topicId === 'py_10_oops_00_intro' || topicId === 'py_10_oops_01_alias' || topicId === 'py_10_oop_01' || topicId === 'py_10_01' ? 'OOP-01'
            : topicId === 'py_10_oops_01' || topicId === 'py_10_oop_02' || topicId === 'py_10_02' ? 'OOP-02'
            : topicId === 'py_10_oops_02' || topicId === 'py_10_oop_03' || topicId === 'py_10_03' ? 'OOP-03'
            : topicId === 'py_10_oops_04_init' || topicId === 'py_10_oop_04' || topicId === 'py_10_04' ? 'OOP-04'
            : topicId === 'py_10_oops_03' || topicId === 'py_10_oop_05' || topicId === 'py_10_05' ? 'OOP-05'
            : topicId === 'py_10_oops_04' || topicId === 'py_10_oop_06' || topicId === 'py_10_06' ? 'OOP-06'
            : topicId === 'py_10_oops_05' || topicId === 'py_10_oop_07' || topicId === 'py_10_07' ? 'OOP-07'
            : topicId === 'py_10_oops_06' || topicId === 'py_10_oop_08' || topicId === 'py_10_08' ? 'OOP-08'
            : topicId === 'py_10_oops_07' || topicId === 'py_10_oop_09' || topicId === 'py_10_09' ? 'OOP-09'
            : topicId === 'py_10_oops_08' || topicId === 'py_10_oop_10' || topicId === 'py_10_10' ? 'OOP-10'
            : topicId === 'py_10_oops_09' || topicId === 'py_10_oop_11' || topicId === 'py_10_11' ? 'OOP-11'
            : topicId === 'py_10_oops_10' || topicId === 'py_10_oop_12' || topicId === 'py_10_12' ? 'OOP-12'
            : topicId === 'py_09_problem_solving_01' || topicId === 'py_09_ps_01' || topicId === 'py_09_01' ? 'PS-01'
            : topicId === 'py_09_problem_solving_02' || topicId === 'py_09_ps_02' || topicId === 'py_09_02' ? 'PS-02'
            : topicId === 'py_09_problem_solving_03' || topicId === 'py_09_ps_03' || topicId === 'py_09_03' ? 'PS-03'
            : topicId === 'py_09_problem_solving_04' || topicId === 'py_09_ps_04' || topicId === 'py_09_04' ? 'PS-04'
            : topicId === 'py_09_problem_solving_05' || topicId === 'py_09_ps_05' || topicId === 'py_09_05' ? 'PS-05'
            : topicId === 'py_09_problem_solving_06' || topicId === 'py_09_ps_06' || topicId === 'py_09_06' ? 'PS-06'
            : topicId === 'py_09_problem_solving_07' || topicId === 'py_09_ps_07' || topicId === 'py_09_07' ? 'PS-07'
            : topicId === 'py_09_problem_solving_08' || topicId === 'py_09_ps_08' || topicId === 'py_09_08' ? 'PS-08'
            : topicId === 'py_09_problem_solving_09' || topicId === 'py_09_ps_09' || topicId === 'py_09_09' ? 'PS-09'
            : topicId === 'py_09_problem_solving_10' || topicId === 'py_09_ps_10' || topicId === 'py_09_10' ? 'PS-10'
            : topicId === 'py_09_problem_solving_11' || topicId === 'py_09_ps_11' || topicId === 'py_09_11' ? 'PS-11'
            : topicId === 'py_09_problem_solving_12' || topicId === 'py_09_ps_12' || topicId === 'py_09_12' ? 'PS-12'
            : topicId === 'py_08_functions_00_intro' || topicId === 'py_08_fn_01' ? 'FN-01'
            : topicId === 'py_08_functions_01' || topicId === 'py_08_fn_02' ? 'FN-02'
            : topicId === 'py_08_functions_03_call' || topicId === 'py_08_fn_03' ? 'FN-03'
            : topicId === 'py_08_functions_02' || topicId === 'py_08_fn_04' ? 'FN-04'
            : topicId === 'py_08_functions_03' || topicId === 'py_08_fn_05' ? 'FN-05'
            : topicId === 'py_08_functions_04' || topicId === 'py_08_fn_06' ? 'FN-06'
            : topicId === 'py_08_functions_05' || topicId === 'py_08_fn_07' ? 'FN-07'
            : topicId === 'py_08_functions_06' || topicId === 'py_08_fn_08' ? 'FN-08'
            : topicId === 'py_08_functions_07' || topicId === 'py_08_fn_09' ? 'FN-09'
            : topicId === 'py_08_functions_08' || topicId === 'py_08_fn_10' ? 'FN-10'
            : topicId === 'py_08_functions_09' || topicId === 'py_08_fn_11' ? 'FN-11'
            : topicId === 'py_08_functions_10' || topicId === 'py_08_fn_12' ? 'FN-12'
            : topicId === 'py_07_sets_dicts_00_intro' || topicId === 'py_07_sets_01' ? 'SET-01'
            : topicId === 'py_07_sets_dicts_01' || topicId === 'py_07_sets_02' ? 'SET-02'
            : topicId === 'py_07_sets_dicts_03' || topicId === 'py_07_sets_03' ? 'SET-03'
            : topicId === 'py_07_sets_dicts_02' || topicId === 'py_07_sets_04' ? 'SET-04'
            : topicId === 'py_07_sets_dicts_05_ops' || topicId === 'py_07_sets_05' ? 'SET-05'
            : topicId === 'py_07_sets_dicts_04_intro' || topicId === 'py_07_dicts_06' ? 'DICT-06'
            : topicId === 'py_07_sets_dicts_04' || topicId === 'py_07_dicts_07' ? 'DICT-07'
            : topicId === 'py_07_sets_dicts_05' || topicId === 'py_07_dicts_08' ? 'DICT-08'
            : topicId === 'py_07_sets_dicts_06' || topicId === 'py_07_dicts_09' ? 'DICT-09'
            : topicId === 'py_07_sets_dicts_08' || topicId === 'py_07_dicts_10' ? 'DICT-10'
            : topicId === 'py_07_sets_dicts_09' || topicId === 'py_07_dicts_11' ? 'DICT-11'
            : topicId === 'py_06_lists_tuples_00_intro' || topicId === 'py_06_lists_01' ? 'LST-01'
            : topicId === 'py_06_lists_tuples_01' || topicId === 'py_06_lists_02' ? 'LST-02'
            : topicId === 'py_06_lists_tuples_02' || topicId === 'py_06_lists_03' ? 'LST-03'
            : topicId === 'py_06_lists_tuples_03' || topicId === 'py_06_lists_04' ? 'LST-04'
            : topicId === 'py_06_lists_tuples_05_remove' || topicId === 'py_06_lists_05' ? 'LST-05'
            : topicId === 'py_06_lists_tuples_04' || topicId === 'py_06_lists_06' ? 'LST-06'
            : topicId === 'py_06_lists_tuples_09' || topicId === 'py_06_lists_07' ? 'LST-07'
            : topicId === 'py_06_lists_tuples_05' || topicId === 'py_06_lists_08' ? 'LST-08'
            : topicId === 'py_06_lists_tuples_07' || topicId === 'py_06_lists_09' ? 'LST-09'
            : topicId === 'py_06_lists_tuples_06' || topicId === 'py_06_lists_10' ? 'LST-10'
            : topicId === 'py_06_lists_tuples_08' || topicId === 'py_06_lists_11' ? 'LST-11'
            : topicId === 'py_06_lists_tuples_12_proj' || topicId === 'py_06_lists_12' ? 'LST-12'
            : topicId === 'py_05_strings_00_intro' ? 'STR-01'
            : topicId === 'py_05_strings_01' ? 'STR-02'
            : topicId === 'py_05_strings_03_concat' ? 'STR-03'
            : topicId === 'py_05_strings_04_index' ? 'STR-04'
            : topicId === 'py_05_strings_02' ? 'STR-05'
            : topicId === 'py_05_strings_06_len' ? 'STR-06'
            : topicId === 'py_05_strings_03' ? 'STR-07'
            : topicId === 'py_05_strings_04' ? 'STR-10'
            : topicId === 'py_05_strings_05' ? 'STR-11'
            : topicId === 'py_05_strings_06' ? 'STR-12'
            : topicId === 'py_05_strings_08' ? 'STR-13'
            : topicId === 'py_04_loops_00_intro' ? 'LP-01'
            : topicId === 'py_04_loops_02' ? 'LP-02'
            : topicId === 'py_04_loops_03' ? 'LP-03'
            : topicId === 'py_04_loops_01' ? 'LP-04'
            : topicId === 'py_04_loops_04' ? 'LP-05'
            : topicId === 'py_04_loops_05_break' ? 'LP-06'
            : topicId === 'py_04_loops_05_continue' ? 'LP-07'
            : topicId === 'py_04_loops_05_pass' ? 'LP-08'
            : topicId === 'py_04_loops_06' ? 'LP-09'
            : topicId === 'py_04_loops_08' ? 'LP-10'
            : topicId === 'py_04_loops_07' ? 'LP-11'
            : topicId === 'py_04_loops_09' ? 'LP-12'
            : topicId === 'py_03_conditionals_01_intro' ? 'CD-01'
            : topicId === 'py_03_conditionals_01' ? 'CD-02'
            : topicId === 'py_03_conditionals_02' ? 'CD-03'
            : topicId === 'py_03_conditionals_03' ? 'CD-04'
            : topicId === 'py_03_conditionals_04' ? 'CD-05'
            : topicId === 'py_03_conditionals_06_cond' ? 'CD-06'
            : topicId === 'py_03_conditionals_05' ? 'CD-07'
            : topicId === 'py_03_conditionals_06' ? 'CD-08'
            : topicId === 'py_03_conditionals_07' ? 'CD-09'
            : topicId === 'py_03_conditionals_08' ? 'CD-10'
            : topicId === 'py_03_conditionals_09' ? 'CD-11'
            : topicId === 'py_02_operators_01' ? 'OP-01'
            : topicId === 'py_02_operators_02_add_sub' ? 'OP-02'
            : topicId === 'py_02_operators_03_mul_div' ? 'OP-03'
            : topicId === 'py_02_operators_04_floor_mod' ? 'OP-04'
            : topicId === 'py_02_operators_05_exp' ? 'OP-05'
            : topicId === 'py_02_operators_03' ? 'OP-06'
            : topicId === 'py_02_operators_04' ? 'OP-07'
            : topicId === 'py_02_operators_02' ? 'OP-08'
            : topicId === 'py_02_operators_05' ? 'OP-09'
            : topicId === 'py_02_operators_06' ? 'OP-10'
            : topicId === 'py_02_operators_08' ? 'OP-11'
            : topicId === 'py_02_operators_09' ? 'OP-12'
            : topicId === 'py_01_basics_17' ? 'PB-17' : topicId === 'py_01_basics_16' ? 'PB-16' : topicId === 'py_01_basics_15' ? 'PB-15' : topicId === 'py_01_basics_14' ? 'PB-14' : topicId === 'py_01_basics_13' ? 'PB-13' : topicId === 'py_01_basics_12' ? 'PB-12' : topicId === 'py_01_basics_11' ? 'PB-11' : topicId === 'py_01_basics_09' ? 'PB-09' : topicId === 'py_01_basics_08' ? 'PB-08' : topicId === 'py_01_basics_07' ? 'PB-07' : topicId === 'py_01_basics_06' ? 'PB-06' : topicId === 'py_01_basics_05' ? 'PB-05' : topicId === 'py_01_basics_04' ? 'PB-04' : topicId === 'py_01_basics_03' ? 'PB-03' : topicId === 'py_01_basics_02' ? 'PB-02' : 'PB-01';
              const qId = `${topicPrefix}-${String(idx + 1).padStart(2, '0')}`;
              const isPassed = completedQuestionIds?.has(qId);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSwitchQuestion(idx)}
                  title={`Module ${moduleNum} Q${idx + 1}: ${q.title}`}
                  className={`min-w-[34px] h-[30px] px-2 rounded-lg text-xs font-black transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 shadow-2xs ${
                    isCurrent
                      ? 'bg-[#6D28D9] text-white ring-2 ring-purple-300 shadow-sm scale-105'
                      : isPassed
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200'
                  }`}
                >
                  <span>Q{idx + 1}</span>
                  {isPassed && <span className="text-[10px] text-emerald-700 font-black">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next Question Button */}
        <button
          type="button"
          onClick={() => {
            if (activeQuestionIndex < activeTopicConfigs.length - 1) {
              handleSwitchQuestion(activeQuestionIndex + 1);
            } else {
              onNavigateNextTopic?.();
            }
          }}
          className="w-[120px] h-[40px] rounded-[12px] bg-[#6D28D9] hover:bg-[#5B21B6] hover:-translate-y-[1px] text-[#FFFFFF] font-semibold text-[13px] sm:text-[14px] flex items-center justify-center gap-2 border-0 shadow-[0_4px_12px_rgba(109,40,217,0.15)] transition-all duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2 active:scale-98"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          MODAL 1: UNIVERSAL TEACHER ERROR DIAGNOSTIC (Compact & Premium)
         ═══════════════════════════════════════════════════════════════════════ */}
      <UniversalPythonErrorModal
        isOpen={errorModalOpen}
        diagnostic={currentDiagnostic}
        onClose={() => {
          soundEffects.playClick?.();
          stopSpeech();
          setErrorModalOpen(false);
          setTimeout(() => {
            editorTextareaRef.current?.focus();
          }, 60);
        }}
        onListen={() => {
          soundEffects.playClick?.();
          if (currentDiagnostic) {
            playDiagnosticVoice(currentDiagnostic);
          }
        }}
        isPlayingVoice={isPlayingAudio}
        language={language}
        fullStudentCode={studentCode}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          MODAL 2: TEACHER HELP (Contextual Predefined Topics)
         ═══════════════════════════════════════════════════════════════════════ */}
      {teacherHelpModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-5 shadow-2xl border border-purple-100 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">💬</span>
                <div>
                  <h3 className="text-sm font-black text-slate-900">Teacher Help Desk</h3>
                  <p className="text-[11px] text-purple-700 font-bold">Ask anything about Hello, World!</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick?.();
                  stopSpeech();
                  setTeacherHelpModalOpen(false);
                }}
                className="w-8 h-8 rounded-[10px] bg-[#FFFFFF] hover:bg-[#EDE3FF] border border-[#E6E1F0] text-[#6D28D9] flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <X className="w-4 h-4 text-[#6D28D9]" />
              </button>
            </div>

            {/* Two-Column Help Layout: Topics List on Left, Teacher Answer on Right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              <div className="sm:col-span-5 flex flex-col gap-1.5 max-h-[300px] overflow-y-auto pr-1">
                {TEACHER_HELP_TOPICS.map((topic) => {
                  const isSelected = selectedHelpTopic?.id === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        soundEffects.playClick?.();
                        setSelectedHelpTopic(topic);
                        speakText(topic.answerHinglish);
                      }}
                      className={`p-2.5 rounded-[10px] text-left text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-[#6D28D9] text-white border-[#6D28D9] shadow-sm'
                          : 'bg-[#FFFFFF] hover:bg-[#EDE3FF] text-[#0B132B] border-[#E6E1F0]'
                      }`}
                    >
                      {topic.questionHinglish}
                    </button>
                  );
                })}
              </div>

              {/* Answer Panel */}
              <div className="sm:col-span-7 bg-purple-50/50 border border-purple-100 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-purple-200 shrink-0 border border-purple-300">
                      <img
                        src="/images/female_teacher_full.png"
                        alt="Teacher"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-black text-purple-950">
                        {selectedHelpTopic?.questionHinglish}
                      </div>
                      <div className="text-[10px] text-slate-500">Teacher Explanation</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {selectedHelpTopic?.answerHinglish}
                  </p>
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedHelpTopic) speakText(selectedHelpTopic.answerHinglish);
                    }}
                    className="h-[36px] px-3.5 rounded-[10px] bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-[13px] flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-[1px] cursor-pointer shadow-[0_4px_12px_rgba(109,40,217,0.15)]"
                  >
                    <Volume2 className="w-4 h-4 text-white" />
                    <span>Listen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
