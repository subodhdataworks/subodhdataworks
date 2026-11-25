import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  Check,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  Globe,
  PhoneOff,
  Eraser,
  ListChecks,
  Target,
  Sparkles,
  Keyboard,
  Maximize2,
  Layers,
  ChevronsRight,
  ArrowRight,
  XCircle,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { HrSettingsConfig } from '../../../services/hrSettingsService';
import { playSwaraVoice, stopSwaraVoice } from '../../../services/swaraAudioService';
import { StableMouthLipSyncAvatar } from './StableMouthLipSyncAvatar';
import {
  PreloadedInterviewQuestion,
  DeterministicEvaluationResult,
  getPreloadedInterviewQuestionsForTopic,
  evaluateInterviewAnswerDeterministically,
} from '../data/mockInterviewQuestionBank';
import {
  getTopicQuestionBank,
  revalidateQuestionBankFromBackend,
  getSyncedTopicProgress,
  saveSyncedTopicProgress,
  pullSyncedLearningProgressFromCloud,
} from '../data/questionBankRegistry';
import {
  TopicInterviewResultView,
  TopicResultRightSidebar,
} from './TopicInterviewResultView';
import {
  InterviewTopicGroup,
  QuestionAnswerRecord,
  TopicAttemptResult,
  evaluateTopicAnswer,
  buildTopicAttemptResult,
  saveTopicAttemptResult,
  getTopicHistory,
} from '../../../services/interviewPrepEngine';
import './ZeroCostMockInterviewRoom.css';

export interface ZeroCostMockInterviewRoomProps {
  userName?: string;
  tabId?: number;
  topicId?: number;
  courseKey?: string;
  topicTitleOverride?: string;
  language: 'en' | 'hi';
  onLanguageChange: (lang: 'en' | 'hi') => void;
  hrSettings: HrSettingsConfig;
  onOpenHrSettings: () => void;
  onBackToCourse?: () => void;
  onSelectTopic?: (topicId: number) => void;
  onEndInterview: (averageScoreOutOf100?: number) => void;
}

export const ZeroCostMockInterviewRoom: React.FC<ZeroCostMockInterviewRoomProps> = ({
  userName = 'Candidate',
  tabId = 1,
  topicId = 1,
  courseKey,
  topicTitleOverride,
  language: _incomingLanguage = 'en',
  onLanguageChange: _onLanguageChange,
  hrSettings,
  onOpenHrSettings,
  onBackToCourse,
  onSelectTopic,
  onEndInterview,
}) => {
  // Topic Interview is always conducted in English (questions, AI voice, STT & UI)
  const language: 'en' | 'hi' = 'en';
  const [bankRevision, setBankRevision] = useState<number>(0);
  const [hintExpanded, setHintExpanded] = useState<boolean>(false);

  const isCustomCourse =
    courseKey === 'full_stack_mern' ||
    courseKey === 'ms_office_copilot' ||
    courseKey === 'ai_tools_prompt' ||
    courseKey === 'ai_engineering' ||
    courseKey === 'ml_engineering' ||
    courseKey === 'data_science';

  const registeredBank = useMemo(
    () => (isCustomCourse ? null : getTopicQuestionBank(tabId, topicId)),
    [tabId, topicId, bankRevision, isCustomCourse]
  );

  // 1. Preloaded / Live Synchronized Question Bank
  const questions = useMemo<PreloadedInterviewQuestion[]>(
    () => getPreloadedInterviewQuestionsForTopic(topicId, tabId, courseKey),
    [topicId, tabId, bankRevision, courseKey]
  );

  const [currentQIdx, setCurrentQIdx] = useState<number>(() => {
    const synced = getSyncedTopicProgress(tabId, topicId).topicState;
    return synced?.interviewCurrentQIdx || 0;
  });
  const currentQ = questions[Math.min(currentQIdx, Math.max(0, questions.length - 1))] || questions[0];

  useEffect(() => {
    if (questions.length > 0 && currentQIdx >= questions.length) {
      setCurrentQIdx(Math.max(0, questions.length - 1));
    }
  }, [questions.length, currentQIdx]);

  useEffect(() => {
    let active = true;
    const syncAll = async () => {
      const bankUpdated = await revalidateQuestionBankFromBackend(tabId, topicId);
      if (bankUpdated && active) {
        setBankRevision((r) => r + 1);
      }
      await pullSyncedLearningProgressFromCloud();
    };
    syncAll();

    const handleBankUpdated = () => {
      if (active) setBankRevision((r) => r + 1);
    };
    const handleStorage = (e: StorageEvent) => {
      if (!e.key || e.key.includes('question_bank') || e.key.includes('interview_questions')) {
        if (active) setBankRevision((r) => r + 1);
      }
    };
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        syncAll();
      }
    };

    window.addEventListener('futureai_question_bank_updated', handleBankUpdated);
    window.addEventListener('storage', handleStorage);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      active = false;
      window.removeEventListener('futureai_question_bank_updated', handleBankUpdated);
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [tabId, topicId]);

  // 2. Session Timer (10:00 countdown) & Per-Question Answer Timer (02:00)
  const [sessionSecondsLeft, setSessionSecondsLeft] = useState<number>(10 * 60);
  const [answerElapsedSeconds, setAnswerElapsedSeconds] = useState<number>(0);
  const maxAnswerSeconds = 120;

  // 3. Browser SpeechSynthesis State
  const [speechState, setSpeechState] = useState<'idle' | 'speaking' | 'paused'>('idle');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceWarning, setVoiceWarning] = useState<string | null>(null);
  const [spokenSubtitle, setSpokenSubtitle] = useState<string>('');
  const [typedHrText, setTypedHrText] = useState<string>('');
  const speechFallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hrTypingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const studentTypingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isSpeechSynthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // 4. Browser-Native SpeechRecognition State
  const [isListening, setIsListening] = useState<boolean>(false);
  const isListeningRef = useRef<boolean>(false);
  const [confirmedAnswer, setConfirmedAnswer] = useState<string>('');
  const confirmedAnswerRef = useRef<string>('');
  const [interimAnswer, setInterimAnswer] = useState<string>('');
  const [sttSupported, setSttSupported] = useState<boolean>(true);
  const [sttError, setSttError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const lastFinalChunkRef = useRef<string>('');

  // 5. Student Webcam Preview & Stage State
  const [cameraEnabled, setCameraEnabled] = useState<boolean>(false);
  const [cameraStatus, setCameraStatus] = useState<'active' | 'off' | 'denied' | 'unavailable'>('off');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const stageContainerRef = useRef<HTMLDivElement | null>(null);
  const [answerMode, setAnswerMode] = useState<'speak' | 'type'>('speak');
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);
  const [skippedByQId, setSkippedByQId] = useState<Record<number, boolean>>({});
  const [inputModeByQId, setInputModeByQId] = useState<Record<number, 'voice' | 'text'>>({});
  const [completedTopicResult, setCompletedTopicResult] = useState<TopicAttemptResult | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const savedAttemptId = sessionStorage.getItem(`futureit_active_result_${tabId}_${topicId}`);
      if (!savedAttemptId) return null;
      const hist = getTopicHistory(`course_tab_${tabId}`, `t_${tabId}_${topicId}`);
      return hist.find((a) => a.attemptId === savedAttemptId) || null;
    } catch {
      return null;
    }
  });
  const [historyRevision, setHistoryRevision] = useState<number>(0);
  const sessionStartedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedAttemptId = sessionStorage.getItem(`futureit_active_result_${tabId}_${topicId}`);
        if (savedAttemptId) {
          const hist = getTopicHistory(`course_tab_${tabId}`, `t_${tabId}_${topicId}`);
          const found = hist.find((a) => a.attemptId === savedAttemptId) || null;
          setCompletedTopicResult(found);
        } else {
          setCompletedTopicResult(null);
        }
      } catch {
        setCompletedTopicResult(null);
      }
    } else {
      setCompletedTopicResult(null);
    }
    setSkippedByQId({});
    sessionStartedAtRef.current = Date.now();
  }, [tabId, topicId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const storageKey = `futureit_active_result_${tabId}_${topicId}`;
      if (completedTopicResult?.attemptId) {
        sessionStorage.setItem(storageKey, completedTopicResult.attemptId);
      } else {
        sessionStorage.removeItem(storageKey);
      }
    } catch {
      // ignore storage errors
    }
  }, [completedTopicResult, tabId, topicId]);

  // 6. Evaluations & Tabs
  const [activeRightTab, setActiveRightTab] = useState<'feedback' | 'model' | 'keypoints'>('feedback');
  const [evaluationsByQId, setEvaluationsByQId] = useState<Record<number, DeterministicEvaluationResult>>(() => {
    const synced = getSyncedTopicProgress(tabId, topicId).topicState;
    return synced?.interviewEvaluationsByQId || {};
  });
  const [submittedTextByQId, setSubmittedTextByQId] = useState<Record<number, string>>(() => {
    const synced = getSyncedTopicProgress(tabId, topicId).topicState;
    return synced?.interviewSubmittedTextByQId || {};
  });

  const currentEvaluation = evaluationsByQId[currentQ.id] || null;

  const displayAnswerText = useMemo(() => {
    if (!interimAnswer) return confirmedAnswer;
    const prefix = confirmedAnswer.trim();
    return prefix ? `${prefix} ${interimAnswer.trim()}` : interimAnswer.trim();
  }, [confirmedAnswer, interimAnswer]);

  const updateConfirmedAnswer = (val: string) => {
    setConfirmedAnswer(val);
    confirmedAnswerRef.current = val;
    setInterimAnswer('');
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(Math.max(0, totalSecs) / 60);
    const secs = Math.max(0, totalSecs) % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Per-question timer (02:00 Question Time countdown while question is active)
  useEffect(() => {
    if (currentEvaluation) return;
    const timer = setInterval(() => {
      setAnswerElapsedSeconds((prev) => {
        if (prev + 1 >= maxAnswerSeconds) {
          if (isListeningRef.current) stopListening();
          return maxAnswerSeconds;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQIdx, currentEvaluation]);

  // Load Voices
  const availableVoicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!isSpeechSynthesisSupported) return;
    const populate = () => {
      const vList = window.speechSynthesis.getVoices() || [];
      availableVoicesRef.current = vList;
      setAvailableVoices(vList);
    };
    populate();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populate;
    }
  }, [isSpeechSynthesisSupported]);

  const activeHrAvatarUrl = '/images/hr_interviewer_futureit_ritika.jpg';

  const activeHrGender: 'female' = 'female';

  const stopInterviewerSpeech = useCallback(() => {
    if (speechFallbackTimerRef.current) {
      clearTimeout(speechFallbackTimerRef.current);
      speechFallbackTimerRef.current = null;
    }
    if (hrTypingTimerRef.current) {
      clearInterval(hrTypingTimerRef.current);
      hrTypingTimerRef.current = null;
    }
    stopSwaraVoice();
    setSpeechState('idle');
  }, []);

  const pickBestVoice = useCallback((): SpeechSynthesisVoice | null => {
    const vList = availableVoicesRef.current.length > 0 ? availableVoicesRef.current : availableVoices;
    if (vList.length === 0) return null;

    // Universal Voice: Strictly prioritize Authentic Indian Female Voice (Swara / Heera / Neerja / Kalpana) for both Hindi and English
    const swaraVoice =
      vList.find((v) => /swara/i.test(v.name)) ||
      vList.find((v) => /heera|neerja|kalpana|lekha|veena|ananya|shruti|priya/i.test(v.name)) ||
      vList.find((v) => (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang)) && /female|woman/i.test(v.name)) ||
      vList.find((v) => !/male|man|ravi|madhav|hemant|prabhat|david|mark|george/i.test(v.name) && (/hi[-_]in/i.test(v.lang) || /en[-_]in/i.test(v.lang))) ||
      vList.find((v) => /hi[-_]in/i.test(v.lang)) ||
      vList.find((v) => /en[-_]in/i.test(v.lang)) ||
      vList.find((v) => /female|woman|zira/i.test(v.name));

    return swaraVoice || vList[0] || null;
  }, [availableVoices]);

  const speakQuestionAloud = useCallback(
    (customText?: string, _isIntro: boolean = false, _autoStartStudentTyping: boolean = true, onSpeechEnd?: () => void) => {
      stopInterviewerSpeech();
      const isQuestionPrompt = !customText;
      const textToSpeak = customText || (language === 'hi' ? currentQ.questionHi : currentQ.questionEn);
      if (!textToSpeak) return;
      setSpokenSubtitle(textToSpeak);
      if (isQuestionPrompt) {
        setTypedHrText('');
      }
      setAutoplayBlocked(false);

      let started = false;
      const watchdog = setTimeout(() => {
        if (!started) {
          setAutoplayBlocked(true);
          setSpeechState('idle');
        }
      }, 2800);

      playSwaraVoice(textToSpeak, {
        onStart: () => {
          started = true;
          clearTimeout(watchdog);
          setAutoplayBlocked(false);
          setSpeechState('speaking');
        },
        onWordBoundary: (spokenSoFar) => {
          started = true;
          clearTimeout(watchdog);
          if (isQuestionPrompt) {
            setTypedHrText(spokenSoFar);
          }
        },
        onEnd: () => {
          clearTimeout(watchdog);
          if (isQuestionPrompt) {
            setTypedHrText(textToSpeak);
          }
          setSpeechState('idle');
          onSpeechEnd?.();
        },
        onSpeechEnd: () => {
          clearTimeout(watchdog);
          if (isQuestionPrompt) {
            setTypedHrText(textToSpeak);
          }
          setSpeechState('idle');
          onSpeechEnd?.();
        },
        onError: () => {
          clearTimeout(watchdog);
          setSpeechState('idle');
          if (!started) setAutoplayBlocked(true);
          if (isQuestionPrompt) {
            setTypedHrText(textToSpeak);
          }
          onSpeechEnd?.();
        },
      }).catch(() => {
        clearTimeout(watchdog);
        setSpeechState('idle');
        if (!started) setAutoplayBlocked(true);
        if (isQuestionPrompt) {
          setTypedHrText(textToSpeak);
        }
      });
    },
    [stopInterviewerSpeech, language, currentQ]
  );

  // Auto-speak question on every new question or topic change
  useEffect(() => {
    const t = setTimeout(() => {
      speakQuestionAloud();
    }, 280);
    return () => {
      clearTimeout(t);
      stopInterviewerSpeech();
    };
  }, [topicId, tabId, currentQIdx, currentQ?.id, currentQ?.questionEn, language]);

  // Direct User-Click Student Webcam PiP Setup (Upper-Right Corner)
  const stopCameraStream = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  useEffect(() => {
    if (cameraEnabled && cameraStatus === 'active' && mediaStreamRef.current && videoRef.current) {
      videoRef.current.srcObject = mediaStreamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [cameraEnabled, cameraStatus]);

  useEffect(() => {
    return () => stopCameraStream();
  }, [stopCameraStream]);

  const handleToggleCamera = useCallback(async () => {
    soundEffects.playClick();
    if (cameraEnabled) {
      stopCameraStream();
      setCameraEnabled(false);
      setCameraStatus('off');
      return;
    }

    stopCameraStream();
    setCameraEnabled(true);

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraStatus('unavailable');
      return;
    }

    try {
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 480 }, height: { ideal: 360 }, facingMode: 'user' },
          audio: false,
        });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }
      mediaStreamRef.current = stream;
      setCameraStatus('active');
      requestAnimationFrame(() => {
        if (videoRef.current && mediaStreamRef.current) {
          videoRef.current.srcObject = mediaStreamRef.current;
          videoRef.current.play().catch(() => {});
        }
      });
    } catch {
      setCameraStatus('denied');
    }
  }, [cameraEnabled, stopCameraStream]);

  // STT Setup
  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSttSupported(false);
      setSttError(language === 'hi' ? 'ब्राउज़र में स्पीच रिकग्निशन समर्थित नहीं है।' : 'Speech recognition is not supported in this browser.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch {}
      }
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = language === 'hi' ? 'hi-IN' : 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
        isListeningRef.current = true;
        setSttError(null);
      };

      recognition.onresult = (event: any) => {
        let finalTrans = '';
        let interimTrans = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTrans += event.results[i][0].transcript;
          } else {
            interimTrans += event.results[i][0].transcript;
          }
        }
        if (finalTrans) {
          const cleanFinal = finalTrans.trim();
          if (cleanFinal && cleanFinal !== lastFinalChunkRef.current) {
            lastFinalChunkRef.current = cleanFinal;
            const updated = confirmedAnswerRef.current ? `${confirmedAnswerRef.current} ${cleanFinal}` : cleanFinal;
            updateConfirmedAnswer(updated);
          }
        }
        setInterimAnswer(interimTrans);
      };

      recognition.onerror = (event: any) => {
        if (event.error !== 'no-speech') {
          setSttError(event.error === 'not-allowed' ? (language === 'hi' ? 'माइक्रोफ़ोन अनुमति अस्वीकृत' : 'Microphone access denied') : event.error);
        }
      };

      recognition.onend = () => {
        if (isListeningRef.current) {
          try { recognition.start(); } catch {}
        } else {
          setIsListening(false);
        }
      };

      recognition.start();
    } catch (err: any) {
      setSttError(err?.message || 'Could not start microphone');
      setIsListening(false);
    }
  }, [language]);

  const stopListening = useCallback(() => {
    isListeningRef.current = false;
    setIsListening(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
  }, []);

  const handleMicToggleClick = () => {
    soundEffects.playClick();
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleInsertExampleAnswer = () => {
    soundEffects.playClick();
    setSttError(null);
    if (studentTypingTimerRef.current) {
      clearInterval(studentTypingTimerRef.current);
      studentTypingTimerRef.current = null;
    }
    const ex = language === 'hi' ? currentQ.exampleAnswerHi : currentQ.exampleAnswerEn;
    const chars = Array.from(ex);
    let idx = 0;
    updateConfirmedAnswer('');
    studentTypingTimerRef.current = setInterval(() => {
      idx += 3;
      if (idx >= chars.length) {
        updateConfirmedAnswer(ex);
        if (studentTypingTimerRef.current) {
          clearInterval(studentTypingTimerRef.current);
          studentTypingTimerRef.current = null;
        }
      } else {
        updateConfirmedAnswer(chars.slice(0, idx).join(''));
      }
    }, 18);
  };

  const handleSelectQuestion = (idx: number) => {
    if (idx === currentQIdx) return;
    soundEffects.playClick();
    stopListening();
    stopInterviewerSpeech();
    setCurrentQIdx(idx);
    const existing = submittedTextByQId[questions[idx]?.id] || '';
    updateConfirmedAnswer(existing);
    setAnswerElapsedSeconds(0);
    setSttError(null);
    setActiveRightTab('feedback');
    saveSyncedTopicProgress(tabId, topicId, { interviewCurrentQIdx: idx });
  };

  const courseStorageKey = `course_tab_${tabId}`;
  const topicStorageKey = `t_${tabId}_${topicId}`;

  const finalizeCourseTopicResult = useCallback(
    (
      finalEvalsMap: Record<number, DeterministicEvaluationResult>,
      finalSubmittedMap: Record<number, string>,
      finalSkippedMap: Record<number, boolean>,
      finalInputModesMap: Record<number, 'voice' | 'text'>
    ) => {
      stopListening();
      stopInterviewerSpeech();

      const topicTitle = topicTitleOverride || registeredBank?.topicTitle || currentQ?.topic || `Topic ${topicId}`;
      const sectionTitle =
        courseKey === 'full_stack_mern'
          ? 'Full-Stack MERN Module'
          : courseKey === 'ms_office_copilot'
          ? 'Microsoft 365 & Copilot Module'
          : courseKey === 'ai_tools_prompt'
          ? 'AI Tools & Prompt Engineering Module'
          : courseKey === 'ai_engineering'
          ? 'AI Engineering Module'
          : courseKey === 'ml_engineering'
          ? 'Machine Learning Engineering Module'
          : courseKey === 'data_science'
          ? 'Data Science Module'
          : registeredBank?.moduleName || 'Data Analytics Module';
      const courseName =
        courseKey === 'full_stack_mern'
          ? 'Full-Stack MERN Development with AI'
          : courseKey === 'ms_office_copilot'
          ? 'Microsoft 365 with Copilot AI'
          : courseKey === 'ai_tools_prompt'
          ? 'AI Tools & Prompt Engineering'
          : courseKey === 'ai_engineering'
          ? 'AI Engineering'
          : courseKey === 'ml_engineering'
          ? 'Machine Learning Engineering'
          : courseKey === 'data_science'
          ? 'Data Science with GenAI'
          : registeredBank?.tabName || 'Data Analyst with GenAI';

      const mappedMasterQuestions = questions.map((q, idx) => ({
        id: q.id,
        qNum: String(idx + 1).padStart(3, '0'),
        sectionId: registeredBank?.moduleId || 1,
        sectionCode: String(registeredBank?.moduleId || 1).padStart(2, '0'),
        sectionTitle,
        questionEn: q.questionEn,
        questionHi: q.questionHi || q.questionEn,
        category: topicTitle,
        difficulty: (q.difficulty === 'Easy'
          ? 'Basic'
          : q.difficulty === 'Hard'
          ? 'Intermediate'
          : 'Core') as 'Basic' | 'Core' | 'Intermediate',
        hintEn: q.hintEn,
        hintHi: q.hintHi || q.hintEn,
        keyPoints: (q.requiredKeywords || []).map((k) => k.labelEn),
        idealAnswerEn: q.idealAnswerEn,
        idealAnswerHi: q.idealAnswerHi || q.idealAnswerEn,
      }));

      const topicGroup: InterviewTopicGroup = {
        topicKey: topicStorageKey,
        courseKey: courseStorageKey,
        sectionCode: String(registeredBank?.moduleId || 1).padStart(2, '0'),
        sectionTitle,
        topicTitle,
        questions: mappedMasterQuestions,
        questionCount: mappedMasterQuestions.length,
      };

      const recordsByQuestionId: Record<number, QuestionAnswerRecord> = {};
      mappedMasterQuestions.forEach((mq, idx) => {
        const submittedText = (finalSubmittedMap[mq.id] || '').trim();
        const detEval = finalEvalsMap[mq.id];
        const isSkipped = !submittedText || (!detEval && Boolean(finalSkippedMap[mq.id]));

        if (!isSkipped && submittedText) {
          const baseEval = evaluateTopicAnswer(submittedText, mq);
          const finalScore10 = detEval ? detEval.score : baseEval.scoreOutOf10;
          recordsByQuestionId[mq.id] = {
            questionId: mq.id,
            qNum: String(idx + 1).padStart(2, '0'),
            questionText: mq.questionEn,
            difficulty: mq.difficulty,
            submittedAnswer: submittedText,
            inputMode: finalInputModesMap[mq.id] || 'text',
            skipped: false,
            submittedAt: new Date().toISOString(),
            evaluation: {
              ...baseEval,
              scoreOutOf10: finalScore10,
              matchedConcepts:
                detEval && detEval.matchedKeywords.length > 0
                  ? detEval.matchedKeywords.map((k) => k.labelEn)
                  : baseEval.matchedConcepts,
              missingConcepts:
                detEval && detEval.missingKeywords.length > 0
                  ? detEval.missingKeywords.map((k) => k.labelEn)
                  : baseEval.missingConcepts,
              feedback: detEval ? detEval.summaryEn : baseEval.feedback,
              suggestedImprovement:
                detEval && detEval.suggestionsEn.length > 0
                  ? detEval.suggestionsEn[0]
                  : baseEval.suggestedImprovement,
              modelAnswer: mq.idealAnswerEn,
            },
          };
        } else {
          recordsByQuestionId[mq.id] = {
            questionId: mq.id,
            qNum: String(idx + 1).padStart(2, '0'),
            questionText: mq.questionEn,
            difficulty: mq.difficulty,
            submittedAnswer: '',
            inputMode: finalInputModesMap[mq.id] || 'text',
            skipped: true,
            submittedAt: new Date().toISOString(),
            evaluation: null,
          };
        }
      });

      const prevHistory = getTopicHistory(courseStorageKey, topicStorageKey);
      const elapsedSeconds = Math.max(
        1,
        Math.round((Date.now() - sessionStartedAtRef.current) / 1000)
      );

      const attemptResult = buildTopicAttemptResult({
        courseKey: courseStorageKey,
        courseName,
        topic: topicGroup,
        recordsByQuestionId,
        attemptNumber: prevHistory.length + 1,
        durationSeconds: elapsedSeconds,
      });

      saveTopicAttemptResult(attemptResult);
      setHistoryRevision((r) => r + 1);
      setCompletedTopicResult(attemptResult);
      setTimeout(() => {
        const el = document.getElementById('inline-topic-interview-result');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);

      // HR interviewer briefly announces the topic interview result aloud with lip-sync
      const scorePct = attemptResult.overallScorePct ?? 0;
      const ansCount = attemptResult.answeredCount;
      const totCount = attemptResult.totalQuestions;
      const skipCount = attemptResult.skippedCount;

      let shortHrResultSpeech = '';
      if (ansCount === 0) {
        shortHrResultSpeech = `Your topic interview is complete. You skipped all ${totCount} questions, so your score is 0 percent. Please review the concepts and try again.`;
      } else if (scorePct >= 80) {
        shortHrResultSpeech = `Congratulations! Your topic interview is complete. You scored ${scorePct} percent and answered ${ansCount} out of ${totCount} questions. Great job!`;
      } else if (scorePct >= 50) {
        shortHrResultSpeech = `Your topic interview is complete. Your overall score is ${scorePct} percent, with ${ansCount} answered out of ${totCount} questions. Check the areas for improvement below.`;
      } else {
        shortHrResultSpeech = `Your topic interview is complete. Your overall score is ${scorePct} percent, with ${ansCount} answered and ${skipCount} skipped. Build your concepts and try again.`;
      }

      setTimeout(() => {
        speakQuestionAloud(shortHrResultSpeech);
      }, 240);
    },
    [
      stopListening,
      stopInterviewerSpeech,
      speakQuestionAloud,
      registeredBank,
      currentQ,
      topicId,
      questions,
      topicStorageKey,
      courseStorageKey,
    ]
  );

  const handleSubmitAnswer = () => {
    stopListening();
    const finalAnswer = displayAnswerText.trim();
    if (!finalAnswer) {
      setSttError('Please speak, type, or click "Insert Example" before submitting, or click Skip.');
      return;
    }

    setSttError(null);
    soundEffects.playClick();
    stopInterviewerSpeech();

    const result = evaluateInterviewAnswerDeterministically(finalAnswer, currentQ, language);
    const isSelectedVerdict = result.score >= 6.0;
    if (isSelectedVerdict) {
      soundEffects.playQuizCorrect();
    } else {
      soundEffects.playQuizWrong();
    }

    const nextEvalsMap = { ...evaluationsByQId, [currentQ.id]: result };
    const nextSubmittedMap = { ...submittedTextByQId, [currentQ.id]: finalAnswer };
    const nextInputModesMap: Record<number, 'voice' | 'text'> = {
      ...inputModeByQId,
      [currentQ.id]: answerMode === 'speak' ? 'voice' : 'text',
    };
    const nextSkippedMap = { ...skippedByQId };
    delete nextSkippedMap[currentQ.id];

    setEvaluationsByQId(nextEvalsMap);
    setSubmittedTextByQId(nextSubmittedMap);
    setInputModeByQId(nextInputModesMap);
    setSkippedByQId(nextSkippedMap);

    const evalValues = Object.values(nextEvalsMap);
    const avgPct =
      evalValues.length > 0
        ? Math.round((evalValues.reduce((acc, r) => acc + r.score, 0) / evalValues.length) * 10)
        : Math.round(result.score * 10);

    const nextIdx = currentQIdx + 1;
    const hasNextQuestion = nextIdx < questions.length;

    saveSyncedTopicProgress(tabId, topicId, {
      interviewCurrentQIdx: hasNextQuestion ? nextIdx : currentQIdx,
      interviewSubmittedTextByQId: nextSubmittedMap,
      interviewEvaluationsByQId: nextEvalsMap,
      interviewScorePct: avgPct,
      pointsDelta: isSelectedVerdict ? 15 : 5,
    });

    if (hasNextQuestion) {
      // Advance directly to the next question; overall result is shown at the end after the last question
      setCurrentQIdx(nextIdx);
      const nextExisting = nextSubmittedMap[questions[nextIdx]?.id] || '';
      updateConfirmedAnswer(nextExisting);
      setAnswerElapsedSeconds(0);
      setSttError(null);
    } else {
      // Last question submitted -> compute & show Overall Performance Result including this last question!
      finalizeCourseTopicResult(nextEvalsMap, nextSubmittedMap, nextSkippedMap, nextInputModesMap);
    }
  };

  const handleTryAgain = () => {
    soundEffects.playClick();
    stopInterviewerSpeech();
    setEvaluationsByQId((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
    setAnswerElapsedSeconds(0);
    setSttError(null);
  };

  const handleNextQuestion = () => {
    if (currentQIdx < questions.length - 1) {
      handleSelectQuestion(currentQIdx + 1);
    } else {
      finalizeCourseTopicResult(evaluationsByQId, submittedTextByQId, skippedByQId, inputModeByQId);
    }
  };

  const handleSkipQuestion = () => {
    soundEffects.playClick();
    stopListening();
    stopInterviewerSpeech();
    const nextSkippedMap = evaluationsByQId[currentQ.id]
      ? skippedByQId
      : { ...skippedByQId, [currentQ.id]: true };
    setSkippedByQId(nextSkippedMap);

    if (currentQIdx < questions.length - 1) {
      handleSelectQuestion(currentQIdx + 1);
    } else {
      finalizeCourseTopicResult(evaluationsByQId, submittedTextByQId, nextSkippedMap, inputModeByQId);
    }
  };

  const handleRetryEntireTopic = () => {
    soundEffects.playClick();
    stopListening();
    stopInterviewerSpeech();
    setEvaluationsByQId({});
    setSubmittedTextByQId({});
    setSkippedByQId({});
    setInputModeByQId({});
    updateConfirmedAnswer('');
    setCurrentQIdx(0);
    setAnswerElapsedSeconds(0);
    setSttError(null);
    sessionStartedAtRef.current = Date.now();
    setCompletedTopicResult(null);
    saveSyncedTopicProgress(tabId, topicId, {
      interviewCurrentQIdx: 0,
      interviewSubmittedTextByQId: {},
      interviewEvaluationsByQId: {},
    });
  };

  const handleEndSession = () => {
    soundEffects.playClick();
    stopListening();
    stopInterviewerSpeech();
    finalizeCourseTopicResult(evaluationsByQId, submittedTextByQId, skippedByQId, inputModeByQId);
  };

  const isAnswerReadyToSubmit = displayAnswerText.trim().length > 0;

  const answeredCount = useMemo(
    () => questions.filter((q) => Boolean(evaluationsByQId[q.id])).length,
    [questions, evaluationsByQId]
  );

  const skippedCount = useMemo(
    () => questions.filter((q) => !evaluationsByQId[q.id] && Boolean(skippedByQId[q.id])).length,
    [questions, evaluationsByQId, skippedByQId]
  );

  const handledCount = answeredCount + skippedCount;

  const answeredPct = useMemo(
    () => (questions.length ? Math.min(100, Math.round((answeredCount / questions.length) * 100)) : 0),
    [answeredCount, questions.length]
  );

  const skippedPct = useMemo(
    () => (questions.length ? Math.min(100 - answeredPct, Math.round((skippedCount / questions.length) * 100)) : 0),
    [skippedCount, questions.length, answeredPct]
  );

  const progressPct = useMemo(
    () => (questions.length ? Math.min(100, Math.round((handledCount / questions.length) * 100)) : 0),
    [handledCount, questions.length]
  );

  const topicHistoryList = useMemo(
    () => getTopicHistory(courseStorageKey, topicStorageKey),
    [courseStorageKey, topicStorageKey, historyRevision]
  );

  const handleToggleFullscreen = () => {
    soundEffects.playClick();
    const el = stageContainerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      el.requestFullscreen?.().catch(() => {});
    }
  };

  return (
    <div className="w-full max-w-[1380px] mx-auto px-2 sm:px-4 pb-2 flex flex-col gap-2.5 font-sans">
      {/* ── 1. COMPACT HEADER ROW (AI Topic Interview | Interview Time | End Interview) ── */}
      <header className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(109,40,217,0.25)] shrink-0">
            <Video className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight m-0 leading-tight">
                AI Topic <span className="text-[#6D28D9]">Interview</span>
              </h1>
              <Sparkles className="w-4 h-4 text-[#7C3AED] shrink-0" />
            </div>
            <p className="text-[12px] font-medium text-[#64748B] m-0 truncate">
              Practice real interview questions with an AI interviewer and get instant feedback.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Clearly Labeled Interview Time Pill */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0F5] shadow-[0_2px_8px_rgba(15,23,42,0.03)] text-[12.5px] font-bold text-[#1E293B] tabular-nums">
            <Clock className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span className="text-[#64748B] font-semibold">Interview Time:</span>
            <span className="text-[#6D28D9] font-extrabold">{formatTime(sessionSecondsLeft)}</span>
          </div>

          {/* End Interview Button */}
          <button
            type="button"
            onClick={handleEndSession}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 text-[12.5px] font-bold shadow-[0_2px_8px_rgba(244,63,94,0.06)] transition cursor-pointer"
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>End Interview</span>
          </button>
        </div>
      </header>

      {/* ── 2. MAIN 2-COLUMN LAYOUT (Fits Laptop Screen Above Fold) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* LEFT COLUMN (col-span-5): AI Interviewer Video Stage + Progress Card */}
        <section className="lg:col-span-5 flex flex-col gap-3" aria-label="AI Interviewer Stage">
          {/* AI Interviewer Video Frame */}
          <div
            ref={stageContainerRef}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0F172A] border-2 border-[#C4B5FD]/80 shadow-[0_10px_26px_rgba(109,40,217,0.12)]"
          >
            <StableMouthLipSyncAvatar
              imageUrl={activeHrAvatarUrl}
              isSpeaking={speechState === 'speaking'}
              speakingText={typedHrText || spokenSubtitle}
              speakingRate={hrSettings.speakingRate}
              gender={activeHrGender}
              isLipSyncEnabled={hrSettings.isLipSyncEnabled}
              hideInternalBadge={true}
              className="w-full h-full object-cover"
            />

            {/* Subtle Bottom Dark Scrim for Clean Button Contrast */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

            {/* Student Camera PiP in Upper-Right Corner */}
            {cameraEnabled && (
              <div className="absolute top-3 right-3 z-20 w-28 sm:w-32 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#A78BFA] bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#0F172A] shadow-[0_6px_18px_rgba(15,23,42,0.5)] flex items-center justify-center">
                {cameraStatus === 'active' ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover scale-x-[-1]"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] border border-white/30 flex items-center justify-center text-xs font-extrabold text-white shadow-md">
                    YOU
                  </div>
                )}
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-sm text-white text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>You</span>
                </span>
              </div>
            )}

            {/* Bottom-Center 3 Circular Controls: Camera | Mic | Replay */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleToggleCamera}
                title={cameraEnabled ? 'Turn Camera Off' : 'Turn Camera On'}
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition cursor-pointer ${
                  cameraEnabled
                    ? 'bg-[#7C3AED] border-purple-300 text-white shadow-[0_0_16px_rgba(124,58,237,0.55)]'
                    : 'bg-black/60 hover:bg-black/80 border-white/20 text-white'
                }`}
              >
                {cameraEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={handleMicToggleClick}
                title={isListening ? 'Stop Microphone' : 'Start Microphone'}
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition cursor-pointer ${
                  isListening
                    ? 'bg-[#7C3AED] border-purple-300 text-white shadow-[0_0_18px_rgba(124,58,237,0.65)] animate-pulse'
                    : 'bg-black/60 hover:bg-black/80 border-white/20 text-white'
                }`}
              >
                <Mic className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  speakQuestionAloud();
                }}
                title="Replay Question Audio"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom-Right Fullscreen Button */}
            <button
              type="button"
              onClick={handleToggleFullscreen}
              title="Toggle Fullscreen"
              className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-xl flex items-center justify-center bg-black/55 hover:bg-black/80 backdrop-blur-md border border-white/15 text-white transition cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Interview Progress Card (Separates Answered vs Skipped clearly) */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_12px_rgba(109,40,217,0.04)] p-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F3EEFF] border border-[#E5DCFE] text-[#6D28D9] flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[13px] font-bold text-[#1E293B]">
                  Interview Progress
                </span>
                <div className="flex items-center gap-2 text-[11.5px] font-bold tabular-nums">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {answeredCount} Answered
                  </span>
                  {skippedCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {skippedCount} Skipped
                    </span>
                  )}
                  <span className="text-[#6D28D9] font-extrabold">
                    {handledCount} / {questions.length} ({progressPct}%)
                  </span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-[#EDE9FE] overflow-hidden flex">
                <div
                  className="h-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] transition-all duration-300"
                  style={{ width: `${answeredPct}%` }}
                  title={`Answered: ${answeredCount}`}
                />
                {skippedPct > 0 && (
                  <div
                    className="h-full bg-amber-400 transition-all duration-300"
                    style={{ width: `${skippedPct}%` }}
                    title={`Skipped: ${skippedCount}`}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN (col-span-7): Question, Answer Input & Navigation Card */}
        <section
          className="lg:col-span-7 bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_4px_22px_rgba(109,40,217,0.05)] p-4 sm:p-5 flex flex-col justify-between gap-3"
          aria-label="Topic Interview Console"
        >
          <div className="flex flex-col gap-3">
            {/* Top Row: Question 1 of N | Question Time: 02:00 | 1 2 3 Circles */}
            <div className="flex items-center justify-between gap-2.5 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EEFF] text-[#5B21B6] text-[12.5px] font-bold">
                  <ListChecks className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>Question {currentQIdx + 1} of {questions.length}</span>
                </div>

                {/* Live AI Voice Status Pill */}
                {speechState === 'speaking' ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-[#6D28D9] border border-purple-200 text-[11.5px] font-bold">
                    <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                    <span>HR Speaking...</span>
                  </span>
                ) : autoplayBlocked ? (
                  <button
                    type="button"
                    onClick={() => speakQuestionAloud()}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6D28D9] text-white text-[11.5px] font-bold cursor-pointer shadow-2xs"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Play Question Voice</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => speakQuestionAloud()}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 hover:bg-[#F3EEFF] text-[#6D28D9] border border-[#E5DCFE] text-[11.5px] font-bold cursor-pointer transition"
                    title="Listen to HR speak this question"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Speak Question</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Clearly Labeled Question Time Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F2FF] border border-[#E9E2FF] text-[#5B21B6] text-[12px] font-bold tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span className="text-[#64748B] font-semibold">Question Time:</span>
                  <span className="text-[#6D28D9] font-extrabold">
                    {formatTime(Math.max(0, maxAnswerSeconds - answerElapsedSeconds))}
                  </span>
                </div>

                {/* Circular Question Number Stepper (Shows Answered vs Skipped status) */}
                <div className="flex items-center gap-1">
                  {questions.map((q, idx) => {
                    const isDone = Boolean(evaluationsByQId[q.id]);
                    const isSkipped = !isDone && Boolean(skippedByQId[q.id]);
                    const isCurrent = idx === currentQIdx;
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleSelectQuestion(idx)}
                        title={
                          isDone
                            ? `Question ${idx + 1} (Answered)`
                            : isSkipped
                            ? `Question ${idx + 1} (Skipped)`
                            : `Question ${idx + 1}`
                        }
                        className={`w-7 h-7 rounded-full text-[12px] font-extrabold transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_3px_8px_rgba(109,40,217,0.3)]'
                            : isDone
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                            : isSkipped
                            ? 'bg-amber-50 text-amber-700 border border-amber-300'
                            : 'bg-[#F8FAFC] text-[#1E293B] border border-slate-200/80 hover:bg-[#F3EEFF] hover:text-[#6D28D9]'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Question Display Box with Left Purple Accent */}
            <div className="rounded-xl bg-[#FAF8FF] border border-[#E9E2FF] border-l-4 border-l-[#7C3AED] px-3.5 py-2.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F3EEFF] border border-[#E5DCFE] text-[#6D28D9] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-[16px] sm:text-[17.5px] font-extrabold text-[#111827] leading-snug tracking-tight m-0 min-h-[1.4em]">
                {typedHrText}
                {typedHrText.length < currentQ.questionEn.length && (
                  <span className="inline-block w-[2.5px] h-[1em] bg-[#7C3AED] ml-1 align-middle animate-pulse" />
                )}
              </h2>
            </div>

            {/* Mode Toggle Row: Speak Answer | Type Answer + Subtle Hint */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setAnswerMode('speak');
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12.5px] font-bold transition-all cursor-pointer ${
                    answerMode === 'speak'
                      ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_3px_10px_rgba(109,40,217,0.25)]'
                      : 'bg-white border border-[#E2E8F0] text-[#334155] hover:bg-[#FAF8FF]'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Speak Answer</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setAnswerMode('type');
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12.5px] font-bold transition-all cursor-pointer ${
                    answerMode === 'type'
                      ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_3px_10px_rgba(109,40,217,0.25)]'
                      : 'bg-white border border-[#E2E8F0] text-[#334155] hover:bg-[#FAF8FF]'
                  }`}
                >
                  <Keyboard className="w-3.5 h-3.5" />
                  <span>Type Answer</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setHintExpanded((prev) => !prev)}
                className="text-[12px] font-semibold text-[#6D28D9] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Hint</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hintExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {hintExpanded && (
              <p className="text-[12px] text-[#475569] bg-[#FAF8FF] px-3 py-2 rounded-xl border border-[#E9E2FF] leading-relaxed m-0">
                {currentQ.hintEn}
              </p>
            )}

            {/* Answer Pod (Speak or Type — Always active until the last question is submitted) */}
            {answerMode === 'speak' ? (
                <div className="rounded-2xl bg-gradient-to-br from-[#F7F4FF] via-[#F3EEFF] to-[#FAF7FF] border border-[#E9E2FF] px-4 py-4 flex flex-col items-center justify-center gap-2.5 min-h-[136px]">
                  <div className="flex items-center justify-center gap-4 sm:gap-5">
                    {/* Left Waveform */}
                    <div className="flex items-center gap-1.5">
                      {[8, 13, 20, 26, 16, 22, 12, 8].map((h, i) => (
                        <span
                          key={`wl-${i}`}
                          className={`w-[3px] rounded-full transition-all ${
                            isListening ? 'bg-[#7C3AED] animate-pulse' : 'bg-[#A78BFA]/80'
                          }`}
                          style={{ height: `${h}px`, animationDelay: `${i * 75}ms` }}
                        />
                      ))}
                    </div>

                    {/* Centered Mic Button */}
                    <button
                      type="button"
                      onClick={handleMicToggleClick}
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ring-4 ring-white/90 ${
                        isListening
                          ? 'bg-[#EF4444] shadow-[0_0_0_6px_rgba(239,68,68,0.18)] scale-105'
                          : 'bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_8px_22px_rgba(109,40,217,0.34)] hover:scale-105'
                      }`}
                    >
                      <Mic className="w-6 h-6" />
                    </button>

                    {/* Right Waveform */}
                    <div className="flex items-center gap-1.5">
                      {[8, 12, 22, 16, 26, 20, 13, 8].map((h, i) => (
                        <span
                          key={`wr-${i}`}
                          className={`w-[3px] rounded-full transition-all ${
                            isListening ? 'bg-[#7C3AED] animate-pulse' : 'bg-[#A78BFA]/80'
                          }`}
                          style={{ height: `${h}px`, animationDelay: `${i * 75}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[13px] font-medium text-[#334155] text-center m-0">
                    {isListening
                      ? 'Listening... Click the microphone to finish speaking'
                      : 'Click the microphone to start speaking your answer'}
                  </p>

                  {displayAnswerText.trim() && (
                    <div className="w-full p-2.5 rounded-xl bg-white border border-[#DDD6FE] text-left">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#6D28D9]">
                          Your Recorded Answer
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            updateConfirmedAnswer('');
                            setSttError(null);
                          }}
                          className="text-[11px] font-semibold text-slate-400 hover:text-slate-700 cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>
                      <p className="text-[13px] text-[#1E293B] leading-relaxed m-0">
                        {displayAnswerText}
                      </p>
                    </div>
                  )}

                  {sttError && (
                    <div className="w-full px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium flex items-center justify-between gap-2">
                      <span>{sttError}</span>
                      <button
                        type="button"
                        onClick={() => setAnswerMode('type')}
                        className="font-bold text-[#6D28D9] hover:underline shrink-0 cursor-pointer"
                      >
                        Type instead
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl bg-[#F7F4FF] border border-[#E9E2FF] p-3 flex flex-col gap-2 min-h-[136px]">
                  <textarea
                    rows={3}
                    value={displayAnswerText}
                    onChange={(e) => {
                      setSttError(null);
                      updateConfirmedAnswer(e.target.value);
                    }}
                    placeholder="Type your interview answer clearly here..."
                    className="w-full flex-1 rounded-xl bg-white border border-[#DDD6FE] p-3 text-[13.5px] text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#7C3AED] resize-none leading-relaxed"
                  />
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11.5px] font-medium text-[#64748B]">
                      {displayAnswerText.trim()
                        ? `${displayAnswerText.trim().split(/\s+/).length} words`
                        : 'Use clear points and a real-world example.'}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleInsertExampleAnswer}
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#DDD6FE] text-[#6D28D9] hover:bg-purple-50 text-xs font-semibold transition cursor-pointer"
                      >
                        Insert Example
                      </button>
                      {displayAnswerText && (
                        <button
                          type="button"
                          onClick={() => {
                            updateConfirmedAnswer('');
                            setSttError(null);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                  {sttError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-600 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{sttError}</span>
                    </div>
                  )}
                </div>
              )}
          </div>

          {/* Bottom Action Bar: >> Skip | Submit & Next → (Shows Overall Result after Last Question) */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleSkipQuestion}
              className="px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#1E293B] font-bold text-[13.5px] flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition shrink-0"
            >
              <ChevronsRight className="w-4 h-4 text-[#475569]" />
              <span>Skip</span>
            </button>

            <button
              type="button"
              onClick={handleSubmitAnswer}
              className="flex-1 py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] text-white font-bold text-[14.5px] shadow-[0_6px_18px_rgba(109,40,217,0.28)] flex items-center justify-center gap-2 cursor-pointer transition"
            >
              <span>
                {currentQIdx >= questions.length - 1
                  ? 'Submit & View Overall Result'
                  : 'Submit & Next'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>

      {/* ── 3. INLINE TOPIC INTERVIEW RESULT (Full-Width Section Below Both Interview Columns on the Same Page) ── */}
      {completedTopicResult && (
        <section
          id="inline-topic-interview-result"
          aria-label="Topic Interview Result"
          className="w-full pt-1 pb-4"
        >
          <TopicInterviewResultView
            result={completedTopicResult}
            attemptHistory={topicHistoryList}
            hasNextTopic={Boolean(onSelectTopic)}
            nextTopicTitle={`Topic ${topicId + 1}`}
            onSelectAttempt={(att) => setCompletedTopicResult(att)}
            onRetryTopic={handleRetryEntireTopic}
            onBackToTopics={() => {
              setCompletedTopicResult(null);
              if (onBackToCourse) {
                onBackToCourse();
              }
            }}
            onStartNextTopic={() => {
              setCompletedTopicResult(null);
              if (onSelectTopic) {
                onSelectTopic(topicId + 1);
              }
            }}
            onOpenSummary={() => {
              setCompletedTopicResult(null);
              if (onBackToCourse) onBackToCourse();
            }}
          />
        </section>
      )}
    </div>
  );
};

export default ZeroCostMockInterviewRoom;
