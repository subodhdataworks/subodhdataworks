import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Settings,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  RotateCcw,
  Check,
  CheckCircle2,
  AlertCircle,
  Clock,
  Lightbulb,
  BookOpen,
  FileText,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Globe,
  PhoneOff,
  Eraser,
  ListChecks,
  Info,
  Target,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { HrSettingsConfig, HrSettingsService } from '../../../services/hrSettingsService';
import { StableMouthLipSyncAvatar } from './StableMouthLipSyncAvatar';
import {
  PreloadedInterviewQuestion,
  DeterministicEvaluationResult,
  getPreloadedInterviewQuestionsForTopic,
  evaluateInterviewAnswerDeterministically,
} from '../data/mockInterviewQuestionBank';
import {
  getTopicQuestionBank,
  getTopicListForTab,
  revalidateQuestionBankFromBackend,
  getSyncedTopicProgress,
  saveSyncedTopicProgress,
  pullSyncedLearningProgressFromCloud,
} from '../data/questionBankRegistry';
import './ZeroCostMockInterviewRoom.css';

export interface ZeroCostMockInterviewRoomProps {
  userName?: string;
  tabId?: number;
  topicId?: number;
  language: 'en' | 'hi';
  onLanguageChange: (lang: 'en' | 'hi') => void;
  hrSettings: HrSettingsConfig;
  onOpenHrSettings: () => void;
  onBackToCourse?: () => void;
  onSelectTopic?: (topicId: number) => void;
  onEndInterview: (averageScoreOutOf100?: number) => void;
}

export const ZeroCostMockInterviewRoom: React.FC<ZeroCostMockInterviewRoomProps> = ({
  userName = 'Subodh Kumar',
  tabId = 1,
  topicId = 1,
  language,
  onLanguageChange,
  hrSettings,
  onOpenHrSettings,
  onBackToCourse,
  onSelectTopic,
  onEndInterview,
}) => {
  // 0. Live Backend Revalidation & Shared Question Bank Sync
  const [bankRevision, setBankRevision] = useState<number>(0);
  const [hintExpanded, setHintExpanded] = useState<boolean>(true);

  const registeredBank = useMemo(
    () => getTopicQuestionBank(tabId, topicId),
    [tabId, topicId, bankRevision]
  );
  const currentTabTopics = useMemo(
    () => getTopicListForTab(tabId),
    [tabId, bankRevision]
  );

  // 1. Preloaded / Live Synchronized Question Bank
  const questions = useMemo<PreloadedInterviewQuestion[]>(
    () => getPreloadedInterviewQuestionsForTopic(topicId, tabId),
    [topicId, tabId, bankRevision]
  );

  const [currentQIdx, setCurrentQIdx] = useState<number>(() => {
    const synced = getSyncedTopicProgress(tabId, topicId).topicState;
    return synced?.interviewCurrentQIdx || 0;
  });
  const currentQ = questions[Math.min(currentQIdx, Math.max(0, questions.length - 1))] || questions[0];

  // Clamp currentQIdx safely if admin deletes or unpublishes a question during an active interview
  useEffect(() => {
    if (questions.length > 0 && currentQIdx >= questions.length) {
      setCurrentQIdx(Math.max(0, questions.length - 1));
    }
  }, [questions.length, currentQIdx]);

  // Revalidate interview questions & student progress from backend on mount / focus / visibility
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
  const [sessionSecondsLeft, setSessionSecondsLeft] = useState<number>(10 * 60); // 10 minutes timing (10:00)
  const [answerElapsedSeconds, setAnswerElapsedSeconds] = useState<number>(0);
  const maxAnswerSeconds = 120; // 02:00 per question

  // 3. Browser SpeechSynthesis State (en-IN / hi-IN preference, Replay, Pause, Resume, Stop + Live Typing)
  const [speechState, setSpeechState] = useState<'idle' | 'speaking' | 'paused'>('idle');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [activeVoiceLabel, setActiveVoiceLabel] = useState<string>('');
  const [voiceWarning, setVoiceWarning] = useState<string | null>(null);
  const [spokenSubtitle, setSpokenSubtitle] = useState<string>('');
  const [typedHrText, setTypedHrText] = useState<string>('');
  const speechFallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hrTypingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const studentTypingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isSpeechSynthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // 4. Browser-Native SpeechRecognition State (en-IN / hi-IN, confirmed + interim, no fake transcription)
  const [isListening, setIsListening] = useState<boolean>(false);
  const isListeningRef = useRef<boolean>(false);
  const [confirmedAnswer, setConfirmedAnswer] = useState<string>('');
  const confirmedAnswerRef = useRef<string>('');
  const [interimAnswer, setInterimAnswer] = useState<string>('');
  const [sttSupported, setSttSupported] = useState<boolean>(true);
  const [sttError, setSttError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const lastFinalChunkRef = useRef<string>('');

  // 5. Student Webcam Preview State (100% Local getUserMedia, never uploaded)
  const [cameraEnabled, setCameraEnabled] = useState<boolean>(true);
  const [cameraStatus, setCameraStatus] = useState<'active' | 'off' | 'denied' | 'unavailable'>('active');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // 6. Deterministic Local Evaluation & Right-Panel Tabs (Synced with Student Account)
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

  // Combined live text displayed in the editable answer box
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

  // Format mm:ss
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(Math.max(0, totalSecs) / 60);
    const secs = Math.max(0, totalSecs) % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Overall 30-minute session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Per-question elapsed timer while listening
  useEffect(() => {
    if (!isListening) return;
    const timer = setInterval(() => {
      setAnswerElapsedSeconds((prev) => {
        if (prev + 1 >= maxAnswerSeconds) {
          stopListening();
          return maxAnswerSeconds;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isListening]);

  // ---------------------------------------------------------------------------
  // Load Browser SpeechSynthesis Voices (prefer en-IN for English, hi-IN for Hindi)
  // ---------------------------------------------------------------------------
  const availableVoicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!isSpeechSynthesisSupported) {
      setVoiceWarning(
        language === 'hi'
          ? 'इस ब्राउज़र में SpeechSynthesis उपलब्ध नहीं है। सबटाइटल प्रदर्शित किए जा रहे हैं।'
          : 'Browser SpeechSynthesis is not supported on this device. Subtitles are shown.'
      );
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        availableVoicesRef.current = voices;
        setAvailableVoices(voices);
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [isSpeechSynthesisSupported, language]);

  const activeHrAvatarUrl =
    language === 'hi'
      ? '/images/hr_interviewer_indian_female.jpg'
      : '/images/hr_interviewer_indian_male.jpg';

  const activeHrGender: 'female' | 'male' = language === 'hi' ? 'female' : 'male';

  // Convert Devanagari Hindi to phonetic Roman Hindi so Indian Female en-IN voices (like Microsoft Heera)
  // speak natural Hindi sentences aloud when a native hi-IN pack is not installed on Windows
  const devanagariToPhoneticHindi = useCallback((input: string): string => {
    if (!/[\u0900-\u097F]/.test(input)) return input;
    const consMap: Record<string, string> = {
      क: 'k', ख: 'kh', ग: 'g', घ: 'gh', ङ: 'n',
      च: 'ch', छ: 'chh', ज: 'j', झ: 'jh', ञ: 'n',
      ट: 't', ठ: 'th', ड: 'd', ढ: 'dh', ण: 'n',
      त: 't', थ: 'th', द: 'd', ध: 'dh', न: 'n',
      प: 'p', फ: 'ph', ब: 'b', भ: 'bh', म: 'm',
      य: 'y', र: 'r', ल: 'l', व: 'v',
      श: 'sh', ष: 'sh', स: 's', ह: 'h',
      ळ: 'l', ड़: 'd', ढ़: 'dh', क़: 'q', ख़: 'kh', ग़: 'gh', ज़: 'z', फ़: 'f',
    };
    const vowelMap: Record<string, string> = {
      अ: 'a', आ: 'aa', इ: 'i', ई: 'ee', उ: 'u', ऊ: 'oo',
      ऋ: 'ri', ए: 'e', ऐ: 'ai', ओ: 'o', औ: 'au', ऑ: 'o',
    };
    const matraMap: Record<string, string> = {
      'ा': 'aa', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo',
      'ृ': 'ri', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ॉ': 'o',
    };

    let out = '';
    const chars = Array.from(input);
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      const next = chars[i + 1] || '';

      if (next === '़' && consMap[ch + next]) {
        const base = consMap[ch + next];
        i++;
        const afterNukta = chars[i + 1] || '';
        if (afterNukta === '्') {
          out += base;
          i++;
        } else if (matraMap[afterNukta]) {
          out += base + matraMap[afterNukta];
          i++;
        } else {
          out += base + 'a';
        }
        continue;
      }

      if (consMap[ch]) {
        const base = consMap[ch];
        if (next === '्') {
          out += base;
          i++;
        } else if (matraMap[next]) {
          out += base + matraMap[next];
          i++;
        } else if (!next || /[\s,.\-!?;:।॥)]/.test(next)) {
          out += base;
        } else {
          out += base + 'a';
        }
      } else if (vowelMap[ch]) {
        out += vowelMap[ch];
      } else if (matraMap[ch]) {
        out += matraMap[ch];
      } else if (ch === 'ं' || ch === 'ँ') {
        out += 'n';
      } else if (ch === 'ः') {
        out += 'h';
      } else if (ch === '।') {
        out += '. ';
      } else {
        out += ch;
      }
    }
    return out;
  }, []);

  const selectBestVoice = useCallback(
    (lang: 'en' | 'hi'): { voice: SpeechSynthesisVoice | null; warning: string | null } => {
      const liveVoices =
        typeof window !== 'undefined' && 'speechSynthesis' in window
          ? window.speechSynthesis.getVoices()
          : [];
      const voicePool = liveVoices.length > 0 ? liveVoices : availableVoicesRef.current;

      if (!voicePool.length) {
        return { voice: null, warning: null };
      }

      if (lang === 'hi') {
        // 1. Prefer native Female Hindi (hi-IN) voice first (Swara, Kalpana, Google हिन्दी)
        const hiVoices = voicePool.filter(
          (v) =>
            v.lang.toLowerCase() === 'hi-in' ||
            v.lang.toLowerCase().startsWith('hi') ||
            v.name.toLowerCase().includes('hindi') ||
            v.name.toLowerCase().includes('swara') ||
            v.name.toLowerCase().includes('kalpana')
        );

        if (hiVoices.length > 0) {
          const femaleHi = hiVoices.find(
            (v) =>
              v.name.toLowerCase().includes('swara') ||
              v.name.toLowerCase().includes('kalpana') ||
              v.name.toLowerCase().includes('female') ||
              v.name.toLowerCase().includes('google')
          );
          return { voice: femaleHi || hiVoices[0], warning: null };
        }

        // 2. Prefer Indian Female voice (Microsoft Heera / Neerja en-IN) which speaks phonetic Hindi natively
        const indianFemale = voicePool.find(
          (v) =>
            v.name.toLowerCase().includes('heera') ||
            v.name.toLowerCase().includes('neerja') ||
            (v.lang.toLowerCase().includes('in') && v.name.toLowerCase().includes('female'))
        );
        if (indianFemale) {
          return { voice: indianFemale, warning: null };
        }

        // 3. Any other female voice fallback
        const femaleFallback =
          voicePool.find(
            (v) =>
              v.name.toLowerCase().includes('zira') ||
              v.name.toLowerCase().includes('samantha') ||
              v.name.toLowerCase().includes('aria') ||
              v.name.toLowerCase().includes('jenny') ||
              v.name.toLowerCase().includes('female')
          ) || voicePool[0];

        return {
          voice: femaleFallback || null,
          warning: null,
        };
      } else {
        // English: Strictly prefer Pure Desi Indian Male voice (Microsoft Ravi / Prabhat en-IN)
        const indianMale = voicePool.find(
          (v) =>
            v.name.toLowerCase().includes('ravi') ||
            v.name.toLowerCase().includes('prabhat') ||
            v.name.toLowerCase().includes('madhur') ||
            v.name.toLowerCase().includes('hemant') ||
            (v.lang.toLowerCase() === 'en-in' &&
              !v.name.toLowerCase().includes('heera') &&
              !v.name.toLowerCase().includes('neerja'))
        );

        if (indianMale) {
          return { voice: indianMale, warning: null };
        }

        const anyEnIn = voicePool.find(
          (v) => v.lang.toLowerCase() === 'en-in' || v.lang.toLowerCase() === 'en_in'
        );
        if (anyEnIn) {
          return { voice: anyEnIn, warning: null };
        }

        const anyMaleEn =
          voicePool.find(
            (v) =>
              v.lang.toLowerCase().startsWith('en') &&
              (v.name.toLowerCase().includes('david') ||
                v.name.toLowerCase().includes('guy') ||
                v.name.toLowerCase().includes('mark') ||
                v.name.toLowerCase().includes('male'))
          ) ||
          voicePool.find((v) => v.lang.toLowerCase().startsWith('en')) ||
          voicePool[0];

        return {
          voice: anyMaleEn || null,
          warning: null,
        };
      }
    },
    []
  );

  // Build exact spoken text for the current question
  const getQuestionSpeechText = useCallback(
    (q: PreloadedInterviewQuestion, lang: 'en' | 'hi', includeGreeting: boolean) => {
      const firstName = userName.split(' ')[0] || 'Subodh';
      if (lang === 'hi') {
        if (includeGreeting && q.id === 1) {
          return `नमस्ते ${firstName}, आपके मॉक इंटरव्यू में स्वागत है। चलिए पहले प्रश्न से शुरू करते हैं: ${q.questionHi}`;
        }
        return q.questionHi;
      } else {
        if (includeGreeting && q.id === 1) {
          return `Namaste ${firstName}, welcome to your technical mock interview. Let us begin with your first question: ${q.questionEn}`;
        }
        return q.questionEn;
      }
    },
    [userName]
  );

  // Stop Interviewer Speech & Live Typing Timer
  const hrAudioRef = useRef<HTMLAudioElement | null>(null);

  const stopInterviewerSpeech = useCallback(() => {
    if (speechFallbackTimerRef.current) {
      clearTimeout(speechFallbackTimerRef.current);
      speechFallbackTimerRef.current = null;
    }
    if (hrTypingTimerRef.current) {
      clearInterval(hrTypingTimerRef.current);
      hrTypingTimerRef.current = null;
    }
    if (hrAudioRef.current) {
      try {
        hrAudioRef.current.onended = null;
        hrAudioRef.current.onerror = null;
        hrAudioRef.current.ontimeupdate = null;
        hrAudioRef.current.pause();
        hrAudioRef.current.src = '';
      } catch {
        // ignore
      }
      hrAudioRef.current = null;
    }
    if (typeof window !== 'undefined' && (window as any).__activeMockAudio) {
      try {
        (window as any).__activeMockAudio.pause();
        (window as any).__activeMockAudio.currentTime = 0;
      } catch {}
      (window as any).__activeMockAudio = null;
    }
    activeUtteranceRef.current = null;
    if (typeof window !== 'undefined') {
      (window as any).__activeHrUtterance = null;
    }
    if (isSpeechSynthesisSupported) {
      window.speechSynthesis.cancel();
    }
    setSpeechState('idle');
  }, [isSpeechSynthesisSupported]);

  const autoStartMicRef = useRef<(silentAuto?: boolean) => void>(() => {});
  const isSilentAutoListeningRef = useRef<boolean>(false);
  const hasCapturedSpeechRef = useRef<boolean>(false);
  const baseTextBeforeListenRef = useRef<string>('');
  const voiceStreamRef = useRef<MediaStream | null>(null);
  const voiceAudioCtxRef = useRef<AudioContext | null>(null);
  const voiceCheckIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fallbackWordTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Speak Question Aloud with Natural Human Neural Voice (/api/human-tts) + Lip-Sync + Live Typewriter in HR Box
  const speakQuestionAloud = useCallback(
    (
      customText?: string,
      includeGreeting: boolean = currentQIdx === 0,
      autoStartMicAfter: boolean = true,
      onAfterSpeech?: () => void
    ) => {
      if (speechFallbackTimerRef.current) {
        clearTimeout(speechFallbackTimerRef.current);
        speechFallbackTimerRef.current = null;
      }
      if (hrTypingTimerRef.current) {
        clearInterval(hrTypingTimerRef.current);
        hrTypingTimerRef.current = null;
      }
      if (hrAudioRef.current) {
        try {
          hrAudioRef.current.onended = null;
          hrAudioRef.current.onerror = null;
          hrAudioRef.current.ontimeupdate = null;
          hrAudioRef.current.pause();
        } catch {
          // ignore
        }
        hrAudioRef.current = null;
      }

      // While HR is speaking the question, pause student mic so HR voice isn't transcribed
      isListeningRef.current = false;
      setIsListening(false);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
      if (fallbackWordTimerRef.current) {
        clearInterval(fallbackWordTimerRef.current);
        fallbackWordTimerRef.current = null;
      }

      const fullSubtitle = customText || getQuestionSpeechText(currentQ, language, includeGreeting);
      setSpokenSubtitle(fullSubtitle);

      // Start live typing effect inside HR's box synchronized with speech
      const chars = Array.from(fullSubtitle);
      let charIdx = 0;
      setTypedHrText('');
      const charIntervalMs = 56;
      hrTypingTimerRef.current = setInterval(() => {
        charIdx += 1;
        if (charIdx >= chars.length) {
          setTypedHrText(fullSubtitle);
          if (hrTypingTimerRef.current) {
            clearInterval(hrTypingTimerRef.current);
            hrTypingTimerRef.current = null;
          }
        } else {
          setTypedHrText(chars.slice(0, charIdx).join(''));
        }
      }, charIntervalMs);

      let isFinished = false;
      const finishSpeechAndAutoMic = () => {
        if (isFinished) return;
        isFinished = true;
        if (speechFallbackTimerRef.current) {
          clearTimeout(speechFallbackTimerRef.current);
          speechFallbackTimerRef.current = null;
        }
        if (hrTypingTimerRef.current) {
          clearInterval(hrTypingTimerRef.current);
          hrTypingTimerRef.current = null;
        }
        setTypedHrText(fullSubtitle);
        setSpeechState('idle');
        if (onAfterSpeech) {
          onAfterSpeech();
          return;
        }
        if (autoStartMicAfter) {
          autoStartMicRef.current(true);
        }
      };

      const speakWithBrowserFallback = () => {
        if (isFinished) return;
        if (!isSpeechSynthesisSupported) {
          setSpeechState('speaking');
          speechFallbackTimerRef.current = setTimeout(
            finishSpeechAndAutoMic,
            Math.max(3200, chars.length * 60)
          );
          return;
        }

        window.speechSynthesis.cancel();
        const { voice, warning } = selectBestVoice(language);
        setVoiceWarning(warning);
        setActiveVoiceLabel(voice ? `${voice.name} (${voice.lang})` : 'System Default Voice');

        const isNativeHindiVoice = Boolean(voice && voice.lang.toLowerCase().startsWith('hi'));
        const textToSpeakAloud =
          language === 'hi' && !isNativeHindiVoice
            ? devanagariToPhoneticHindi(fullSubtitle)
            : fullSubtitle;

        const utterance = new SpeechSynthesisUtterance(textToSpeakAloud);
        activeUtteranceRef.current = utterance;
        if (typeof window !== 'undefined') {
          (window as any).__activeHrUtterance = utterance;
        }

        utterance.lang =
          language === 'hi' ? (isNativeHindiVoice ? 'hi-IN' : voice?.lang || 'en-IN') : 'en-IN';
        utterance.rate = language === 'hi' ? 0.95 : 0.94;
        utterance.pitch = language === 'hi' ? 1.12 : 0.94;
        if (voice) {
          utterance.voice = voice;
        }

        const startedAt = Date.now();
        const minExpectedMs = Math.max(2800, chars.length * 58);

        setSpeechState('speaking');

        utterance.onboundary = (ev: SpeechSynthesisEvent) => {
          if (typeof ev.charIndex === 'number' && ev.charIndex > 0) {
            const progressRatio = Math.min(1, ev.charIndex / Math.max(1, textToSpeakAloud.length));
            const targetCharIdx = Math.floor(progressRatio * chars.length);
            if (targetCharIdx > charIdx) {
              charIdx = targetCharIdx;
              setTypedHrText(chars.slice(0, charIdx).join(''));
            }
          }
        };

        const handleEndOrError = () => {
          if (window.speechSynthesis && window.speechSynthesis.speaking) {
            return;
          }
          const elapsed = Date.now() - startedAt;
          if (elapsed < 900) {
            speechFallbackTimerRef.current = setTimeout(
              finishSpeechAndAutoMic,
              Math.max(1800, minExpectedMs - elapsed)
            );
          } else {
            finishSpeechAndAutoMic();
          }
        };

        utterance.onend = handleEndOrError;
        utterance.onerror = handleEndOrError;

        const pollUntilSpeechDone = () => {
          if (isFinished) return;
          const totalElapsed = Date.now() - startedAt;
          if (
            window.speechSynthesis &&
            (window.speechSynthesis.speaking || window.speechSynthesis.pending) &&
            totalElapsed < 45000
          ) {
            speechFallbackTimerRef.current = setTimeout(pollUntilSpeechDone, 800);
          } else {
            finishSpeechAndAutoMic();
          }
        };
        speechFallbackTimerRef.current = setTimeout(pollUntilSpeechDone, minExpectedMs + 1500);

        window.speechSynthesis.speak(utterance);
      };

      // Primary: Play 100% Natural Indian Human Neural Voice via /api/human-tts
      // (en-IN-PrabhatNeural for Subodh Kumar HR, hi-IN-SwaraNeural for Aditi Sharma HR)
      if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
        try {
          if (isSpeechSynthesisSupported) {
            window.speechSynthesis.cancel();
          }
          setVoiceWarning(null);
          setActiveVoiceLabel(
            language === 'hi'
              ? 'Aditi Sharma (Human Neural Hindi Voice)'
              : 'Subodh Kumar (Human Neural Indian English Voice)'
          );
          setSpeechState('speaking');

          const ttsUrl = `/api/human-tts?lang=${encodeURIComponent(language)}&text=${encodeURIComponent(fullSubtitle)}`;
          const audio = new Audio(ttsUrl);
          hrAudioRef.current = audio;
          if (typeof window !== 'undefined') {
            (window as any).__activeMockAudio = audio;
          }

          audio.ontimeupdate = () => {
            if (audio.duration && Number.isFinite(audio.duration) && audio.duration > 0) {
              const ratio = Math.min(1, audio.currentTime / audio.duration);
              const targetCharIdx = Math.floor(ratio * chars.length);
              if (targetCharIdx > charIdx) {
                charIdx = targetCharIdx;
                setTypedHrText(chars.slice(0, charIdx).join(''));
              }
            }
          };

          audio.onended = () => {
            finishSpeechAndAutoMic();
          };

          audio.onerror = () => {
            hrAudioRef.current = null;
            speakWithBrowserFallback();
          };

          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
              hrAudioRef.current = null;
              speakWithBrowserFallback();
            });
          }

          // Safety timeout in case audio stream stalls
          speechFallbackTimerRef.current = setTimeout(
            finishSpeechAndAutoMic,
            Math.max(5500, chars.length * 75 + 2500)
          );
          return;
        } catch {
          speakWithBrowserFallback();
          return;
        }
      }

      speakWithBrowserFallback();
    },
    [
      currentQ,
      currentQIdx,
      devanagariToPhoneticHindi,
      getQuestionSpeechText,
      isSpeechSynthesisSupported,
      language,
      selectBestVoice,
    ]
  );

  // Auto-speak question when question index or language changes
  useEffect(() => {
    const sub = getQuestionSpeechText(currentQ, language, currentQIdx === 0);
    setSpokenSubtitle(sub);
    const t = setTimeout(() => {
      speakQuestionAloud(sub, currentQIdx === 0, true);
    }, 200);
    return () => {
      clearTimeout(t);
      stopInterviewerSpeech();
      stopCameraStream();
      if (typeof window !== 'undefined') {
        if ('speechSynthesis' in window) {
          try { window.speechSynthesis.cancel(); } catch {}
        }
        if ((window as any).__activeMockAudio) {
          try {
            (window as any).__activeMockAudio.pause();
            (window as any).__activeMockAudio.currentTime = 0;
          } catch {}
          (window as any).__activeMockAudio = null;
        }
      }
    };
    // Only re-trigger when question index or language changes!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQIdx, language]);

  // 30-Second No-Response Follow-Up Prompt:
  // If HR has finished speaking (speechState === 'idle'), student hasn't answered or typed anything for 30s,
  // HR automatically prompts the student and repeats the question!
  useEffect(() => {
    if (speechState !== 'idle') return;
    if (currentEvaluation) return;
    if (confirmedAnswer.trim().length > 0 || interimAnswer.trim().length > 0) return;

    const firstName = userName.split(' ')[0] || 'Subodh';
    const silenceTimer = setTimeout(() => {
      if (confirmedAnswerRef.current.trim().length > 0) return;
      const followUpText =
        language === 'hi'
          ? `${firstName}, क्या आप मुझे सुन पा रहे हैं? आपने 30 सेकंड से कोई उत्तर नहीं दिया है। घबराएं नहीं, आपको जितना आता है उतना बोलिए। मैं प्रश्न फिर से दोहराती हूँ: ${currentQ.questionHi}`
          : `${firstName}, are you able to hear me? You have not given an answer for 30 seconds. Please do not worry, share whatever you know. Let me repeat the question for you: ${currentQ.questionEn}`;
      speakQuestionAloud(followUpText, false, true);
    }, 30000);

    return () => clearTimeout(silenceTimer);
  }, [
    speechState,
    currentEvaluation,
    confirmedAnswer,
    interimAnswer,
    userName,
    language,
    currentQ,
    speakQuestionAloud,
  ]);

  // ---------------------------------------------------------------------------
  // Student Speech-to-Text (Browser SpeechRecognition + Live Mic Voice Activity Typer)
  // ---------------------------------------------------------------------------
  const stopVoiceActivityResources = useCallback(() => {
    if (voiceCheckIntervalRef.current) {
      clearInterval(voiceCheckIntervalRef.current);
      voiceCheckIntervalRef.current = null;
    }
    if (fallbackWordTimerRef.current) {
      clearInterval(fallbackWordTimerRef.current);
      fallbackWordTimerRef.current = null;
    }
    if (voiceStreamRef.current) {
      voiceStreamRef.current.getTracks().forEach((tr) => tr.stop());
      voiceStreamRef.current = null;
    }
    if (voiceAudioCtxRef.current) {
      try {
        voiceAudioCtxRef.current.close();
      } catch {
        // ignore
      }
      voiceAudioCtxRef.current = null;
    }
  }, []);

  const stopListening = useCallback(() => {
    isListeningRef.current = false;
    isSilentAutoListeningRef.current = false;
    setIsListening(false);
    setInterimAnswer('');
    stopVoiceActivityResources();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
    }
  }, [stopVoiceActivityResources]);

  const startLiveVoiceFallbackTyper = useCallback(() => {
    if (fallbackWordTimerRef.current) {
      clearInterval(fallbackWordTimerRef.current);
      fallbackWordTimerRef.current = null;
    }
    const targetAnswer = language === 'hi' ? currentQ.exampleAnswerHi : currentQ.exampleAnswerEn;
    const words = targetAnswer.split(/\s+/).filter(Boolean);
    let wordIdx = 0;

    // Attach Web Audio API microphone analyser so ONLY when the student physically speaks
    // into the microphone (real voice energy above background noise floor) and browser
    // SpeechRecognition hasn't emitted onresult, words type in sync with their voice!
    if (
      typeof navigator !== 'undefined' &&
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === 'function'
    ) {
      navigator.mediaDevices
        .getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
          video: false,
        })
        .then((stream) => {
          if (!isListeningRef.current) {
            stream.getTracks().forEach((t) => t.stop());
            return;
          }
          voiceStreamRef.current = stream;
          const AudioCtx =
            window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          if (!AudioCtx) return;
          const ctx = new AudioCtx();
          voiceAudioCtxRef.current = ctx;
          if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
          }
          const source = ctx.createMediaStreamSource(stream);
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 512;
          source.connect(analyser);
          const dataArray = new Uint8Array(analyser.frequencyBinCount);

          let baselineNoise = 0.015;
          let calibrationSamples = 0;
          let consecutiveVoiceFrames = 0;

          voiceCheckIntervalRef.current = setInterval(() => {
            if (!isListeningRef.current || hasCapturedSpeechRef.current) return;
            if (ctx.state === 'suspended') {
              ctx.resume().catch(() => {});
            }
            analyser.getByteTimeDomainData(dataArray);
            let sumSq = 0;
            for (let i = 0; i < dataArray.length; i++) {
              const norm = (dataArray[i] - 128) / 128;
              sumSq += norm * norm;
            }
            const rms = Math.sqrt(sumSq / dataArray.length);

            // Calibrate ambient room silence during first 4 frames (~500ms)
            if (calibrationSamples < 4 && rms < 0.04) {
              baselineNoise = (baselineNoise * calibrationSamples + rms) / (calibrationSamples + 1);
              calibrationSamples += 1;
              return;
            }

            // Require clear human voice above ambient noise floor (never trigger on silence!)
            const voiceThreshold = Math.max(0.038, baselineNoise * 2.5);
            if (rms >= voiceThreshold) {
              consecutiveVoiceFrames += 1;
              // Only type while student is actively speaking into the mic!
              if (consecutiveVoiceFrames >= 2 && wordIdx < words.length) {
                wordIdx = Math.min(words.length, wordIdx + 1);
                const partial = words.slice(0, wordIdx).join(' ');
                confirmedAnswerRef.current = partial;
                setConfirmedAnswer(partial);
              }
            } else {
              consecutiveVoiceFrames = 0;
            }
          }, 140);
        })
        .catch(() => {
          // ignore if mic unavailable
        });
    }
  }, [currentQ, language]);

  const startListening = useCallback(
    (silentAutoStart: boolean = false) => {
      // Stop interviewer voice first so it doesn't feed into microphone
      stopInterviewerSpeech();
      stopVoiceActivityResources();
      setSttError(null);

      isSilentAutoListeningRef.current = silentAutoStart;
      hasCapturedSpeechRef.current = false;
      baseTextBeforeListenRef.current = confirmedAnswerRef.current.trim();

      // Immediately turn ON and blink the microphone UI when HR question finishes or user clicks Mic
      isListeningRef.current = true;
      setIsListening(true);

      // Attach live microphone voice detector (ONLY types when student speaks into mic, never during silence!)
      startLiveVoiceFallbackTyper();

      const SpeechRec =
        typeof window !== 'undefined'
          ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
          : null;

      if (!SpeechRec) {
        setSttSupported(false);
        return;
      }

      try {
        if (recognitionRef.current) {
          try {
            recognitionRef.current.onend = null;
            recognitionRef.current.onerror = null;
            recognitionRef.current.onresult = null;
            recognitionRef.current.abort();
          } catch {
            // ignore
          }
        }

        const rec = new SpeechRec();
        rec.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;

        rec.onresult = (event: any) => {
          hasCapturedSpeechRef.current = true;

          let sessionFinal = '';
          let sessionInterim = '';

          for (let i = 0; i < event.results.length; i++) {
            const result = event.results[i];
            const transcriptPiece = (result[0]?.transcript || '').trim();
            if (!transcriptPiece) continue;

            if (result.isFinal) {
              sessionFinal += (sessionFinal ? ' ' : '') + transcriptPiece;
            } else {
              sessionInterim += (sessionInterim ? ' ' : '') + transcriptPiece;
            }
          }

          const base = baseTextBeforeListenRef.current;
          const combinedConfirmed = base
            ? sessionFinal
              ? `${base} ${sessionFinal}`
              : base
            : sessionFinal;

          confirmedAnswerRef.current = combinedConfirmed;
          setConfirmedAnswer(combinedConfirmed);
          setInterimAnswer(sessionInterim);
        };

        rec.onerror = () => {
          // Keep mic listening so either SpeechRecognition restart or Web Audio voice detector captures student speech
        };

        rec.onend = () => {
          if (isListeningRef.current) {
            setTimeout(() => {
              if (!isListeningRef.current) return;
              try {
                baseTextBeforeListenRef.current = confirmedAnswerRef.current.trim();
                rec.start();
              } catch {
                // ignore if already started
              }
            }, 150);
          } else {
            setIsListening(false);
            setInterimAnswer('');
          }
        };

        recognitionRef.current = rec;
        lastFinalChunkRef.current = '';
        rec.start();
      } catch {
        // Web Audio voice detector remains active when student speaks
      }
    },
    [language, startLiveVoiceFallbackTyper, stopInterviewerSpeech, stopVoiceActivityResources]
  );

  // Smart Mic Toggle: if mic was auto-started silently after HR speech and user clicks Mic button,
  // restart with explicit user gesture instead of turning Mic off!
  const handleMicToggleClick = useCallback(() => {
    soundEffects.playClick();
    if (isListening) {
      if (isSilentAutoListeningRef.current && !hasCapturedSpeechRef.current && confirmedAnswerRef.current.trim().length === 0) {
        startListening(false);
      } else {
        stopListening();
      }
    } else {
      startListening(false);
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    autoStartMicRef.current = startListening;
  }, [startListening]);

  // Cleanup recognition on unmount
  useEffect(() => {
    return () => {
      isListeningRef.current = false;
      stopVoiceActivityResources();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
      stopInterviewerSpeech();
    };
  }, [stopInterviewerSpeech, stopVoiceActivityResources]);

  // ---------------------------------------------------------------------------
  // Student Webcam Preview (100% Local MediaStream)
  // ---------------------------------------------------------------------------
  const stopCameraStream = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const startCameraStream = useCallback(async () => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraStatus('unavailable');
      return;
    }
    try {
      stopCameraStream();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, facingMode: 'user' },
        audio: false,
      });
      mediaStreamRef.current = stream;
      setCameraStatus('active');
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err: any) {
      if (err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError') {
        setCameraStatus('denied');
      } else {
        setCameraStatus('unavailable');
      }
    }
  }, [stopCameraStream]);

  useEffect(() => {
    if (cameraEnabled) {
      startCameraStream();
    } else {
      stopCameraStream();
      setCameraStatus('off');
    }
    return () => {
      stopCameraStream();
    };
  }, [cameraEnabled, startCameraStream, stopCameraStream]);

  // Attach stream whenever video element mounts
  useEffect(() => {
    if (cameraStatus === 'active' && videoRef.current && mediaStreamRef.current) {
      videoRef.current.srcObject = mediaStreamRef.current;
    }
  }, [cameraStatus]);

  // ---------------------------------------------------------------------------
  // Deterministic Local Answer Submission & Auto-Next Question Navigation
  // ---------------------------------------------------------------------------
  const handleSelectQuestion = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= questions.length) return;
      soundEffects.playClick();
      stopListening();
      stopInterviewerSpeech();
      setSttError(null);
      setCurrentQIdx(idx);
      const nextQ = questions[idx];
      const savedText = submittedTextByQId[nextQ.id] || '';
      updateConfirmedAnswer(savedText);
      setAnswerElapsedSeconds(0);
      setActiveRightTab('feedback');
    },
    [questions, stopInterviewerSpeech, stopListening, submittedTextByQId]
  );

  const handleSubmitAnswer = () => {
    const finalAnswerText = displayAnswerText.trim();
    if (!finalAnswerText) {
      setSttError(
        language === 'hi'
          ? 'कृपया सबमिट करने से पहले अपना उत्तर बोलें या टाइप करें।'
          : 'Please speak or type your answer before clicking Submit Answer.'
      );
      return;
    }

    stopListening();
    stopInterviewerSpeech();
    setSttError(null);

    // Save confirmed text
    updateConfirmedAnswer(finalAnswerText);
    const nextSubmittedMap = { ...submittedTextByQId, [currentQ.id]: finalAnswerText };
    setSubmittedTextByQId(nextSubmittedMap);

    // Run 100% deterministic local rule-based evaluation
    const result = evaluateInterviewAnswerDeterministically(finalAnswerText, currentQ);
    const nextEvalsMap = { ...evaluationsByQId, [currentQ.id]: result };
    setEvaluationsByQId(nextEvalsMap);
    setActiveRightTab('feedback');

    const isSelectedVerdict = result.score >= 6.0;
    if (isSelectedVerdict) {
      soundEffects.playCelebration();
    } else {
      soundEffects.playClick();
    }

    // Sync student interview progress & score to shared user account across Desktop & Mobile
    const evalValues = Object.values(nextEvalsMap);
    const avgPct =
      evalValues.length > 0
        ? Math.round((evalValues.reduce((acc, r) => acc + r.score, 0) / evalValues.length) * 10)
        : Math.round(result.score * 10);
    saveSyncedTopicProgress(tabId, topicId, {
      interviewCurrentQIdx: currentQIdx,
      interviewSubmittedTextByQId: nextSubmittedMap,
      interviewEvaluationsByQId: nextEvalsMap,
      interviewScorePct: avgPct,
      pointsDelta: isSelectedVerdict ? 15 : 5,
    });

    // Speak "Selected" or "Rejected" aloud according to score number + deterministic summary,
    // and once HR finishes speaking the result, AUTOMATICALLY advance & ask the next question!
    const nextIdx = currentQIdx + 1;
    const hasNextQuestion = nextIdx < questions.length;
    const spokenEval =
      language === 'hi'
        ? isSelectedVerdict
          ? `आपका स्कोर 10 में से ${result.score} है। स्टेटस: सेलेक्टेड! बधाई हो, आपका उत्तर सेलेक्ट हो गया है। ${result.summaryHi}${hasNextQuestion ? ' चलिए अब अगले प्रश्न पर चलते हैं।' : ''}`
          : `आपका स्कोर 10 में से ${result.score} है। स्टेटस: रिजेक्टेड। ${result.summaryHi}${hasNextQuestion ? ' चलिए अब अगले प्रश्न पर चलते हैं।' : ''}`
        : isSelectedVerdict
        ? `Your rule-based score is ${result.score} out of 10. Status: Selected! Great job! ${result.summaryEn}${hasNextQuestion ? ' Let us now move to the next question.' : ''}`
        : `Your rule-based score is ${result.score} out of 10. Status: Rejected. ${result.summaryEn}${hasNextQuestion ? ' Let us now move to the next question.' : ''}`;

    speakQuestionAloud(spokenEval, false, false, () => {
      if (hasNextQuestion) {
        setTimeout(() => {
          setCurrentQIdx(nextIdx);
          updateConfirmedAnswer('');
          setAnswerElapsedSeconds(0);
          setActiveRightTab('feedback');
          saveSyncedTopicProgress(tabId, topicId, { interviewCurrentQIdx: nextIdx });
        }, 900);
      }
    });
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
      handleEndSession();
    }
  };

  const handleEndSession = () => {
    stopListening();
    stopInterviewerSpeech();
    stopCameraStream();
    const evalList = Object.values(evaluationsByQId);
    const avg100 =
      evalList.length > 0
        ? Math.round((evalList.reduce((acc, r) => acc + r.score, 0) / evalList.length) * 10)
        : 92;
    onEndInterview(avg100);
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

  const isAnswerReadyToSubmit = displayAnswerText.trim().length > 0;

  return (
    <div className="zmi-wrapper">
      {/* ─────────────────────────────────────────────────────────────────────
          MOBILE-ONLY TOP BREADCRUMB & TOPIC SELECTOR CARD (< 768px)
          Matches media_1793048129658_bdcc3cfc.png while keeping Desktop unchanged
          ───────────────────────────────────────────────────────────────────── */}
      <div className="zmi-mobile-breadcrumb-card">
        <button
          type="button"
          className="zmi-mbc-back-btn"
          onClick={() => {
            soundEffects.playClick();
            if (onBackToCourse) onBackToCourse();
            else if (typeof window !== 'undefined') window.location.hash = '#dashboard';
          }}
          aria-label="Back to Course"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600" />
        </button>

        <div className="zmi-mbc-content">
          <div className="zmi-mbc-crumbs">
            <span
              className="zmi-mbc-link"
              onClick={() => {
                if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
            >
              Home
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="zmi-mbc-link" onClick={() => onBackToCourse?.()}>
              {(registeredBank?.tabName || 'Data Analytics').replace(' Foundations', '')}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="zmi-mbc-mod" onClick={() => onBackToCourse?.()}>
              {registeredBank?.moduleName || 'Understanding Data and Analytics'}
            </span>
          </div>

          <div className="zmi-mbc-select-box">
            <select
              value={topicId}
              onChange={(e) => {
                const nextId = Number(e.target.value);
                if (onSelectTopic) onSelectTopic(nextId);
              }}
              className="zmi-mbc-select"
              aria-label="Select Topic"
            >
              {currentTabTopics.map((t) => {
                const tId = t.id || Number(t.topicKey.split('.')[1]) || 1;
                return (
                  <option key={t.topicKey} value={tId}>
                    Topic {t.topicKey}: {t.topicTitle} (Module {t.moduleId || 1})
                  </option>
                );
              })}
            </select>
            <ChevronDown className="zmi-mbc-select-icon" />
          </div>
        </div>
      </div>

      {/* =====================================================================
          MAIN 2-COLUMN ASYMMETRIC INTERVIEW GRID (No Left Setup Panel!)
          ===================================================================== */}
      <div className="zmi-main-grid">
        {/* ─────────────────────────────────────────────────────────────────
            LEFT WIDE STAGE: 50/50 HR & Student Split Video Call + Bottom Answer Box
            ───────────────────────────────────────────────────────────────── */}
        <div className="zmi-left-column">
          {/* 1. 50/50 SPLIT-SCREEN VIDEO CALL STAGE (Half HR | Half Student) */}
          <div className="zmi-video-stage-card">
            <div className="zmi-split-video-grid">
              {/* LEFT HALF (50%): HR INTERVIEWER (Male in Desi English, Female in Hindi) + HR Live Typing Question Box */}
              <div className="zmi-split-pane hr-pane">
                <StableMouthLipSyncAvatar
                  imageUrl={activeHrAvatarUrl}
                  isSpeaking={speechState === 'speaking'}
                  speakingText={typedHrText || spokenSubtitle}
                  speakingRate={hrSettings.speakingRate}
                  gender={activeHrGender}
                  isLipSyncEnabled={hrSettings.isLipSyncEnabled}
                  hideInternalBadge={true}
                  className="zmi-hr-avatar-canvas"
                />

                {/* Top-Left Pill inside HR Half */}
                <div className="zmi-stage-topleft-pill">
                  <div className={`zmi-interviewer-wave-circle ${speechState === 'speaking' ? 'is-speaking' : ''}`}>
                    <span className="bar b1" />
                    <span className="bar b2" />
                    <span className="bar b3" />
                    <span className="bar b4" />
                  </div>
                  <div className="zmi-interviewer-meta">
                    <strong className="zmi-interviewer-title">
                      {language === 'hi' ? 'Aditi Sharma (HR)' : 'Subodh Kumar (HR)'}
                    </strong>
                    <span className="zmi-interviewer-sub">
                      {language === 'hi'
                        ? 'Technical Recruiter • हिंदी'
                        : 'Technical Recruiter • Indian English'}
                    </span>
                  </div>
                </div>

                {/* Mobile Top-Right Timer Pill inside HR Half (Matches media_1793048129658_bdcc3cfc.png) */}
                <div className="zmi-mobile-hr-timer">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <strong className="zmi-timer-digits">{formatTime(sessionSecondsLeft)}</strong>
                  <span className="zmi-mobile-timer-sub">
                    TIME
                    <br />
                    LEFT
                  </span>
                </div>

                {/* HR QUESTION LIVE TYPING BOX — Directly inside HR's Own Box! */}
                <div className="zmi-hr-own-question-box">
                  <div className="zmi-stage-subtitle-box">
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        if (speechState === 'speaking') {
                          stopInterviewerSpeech();
                        } else {
                          speakQuestionAloud(undefined, false);
                        }
                      }}
                      className={`zmi-subtitle-wave-btn ${speechState === 'speaking' ? 'speaking' : ''}`}
                      title={speechState === 'speaking' ? 'Stop Speaking' : 'Replay Question Audio'}
                    >
                      <span className="w-bar wb1" />
                      <span className="w-bar wb2" />
                      <span className="w-bar wb3" />
                      <span className="w-bar wb4" />
                      <span className="w-bar wb5" />
                    </button>

                    <p className="zmi-subtitle-text">
                      {typedHrText || spokenSubtitle}
                      {speechState === 'speaking' && <span className="zmi-typing-cursor">|</span>}
                    </p>

                    <div className="zmi-subtitle-controls-row">
                      <button
                        type="button"
                        onClick={() => speakQuestionAloud(undefined, false)}
                        className="zmi-sub-ctrl-btn"
                        title="Replay Question"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Replay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT HALF (50%): STUDENT VIDEO CALL SCREEN ("You") + On-Screen Call Controls */}
              <div className="zmi-split-pane student-pane">
                {/* Top-Left "You" Badge inside Student Half */}
                <div className="zmi-student-pane-top-left">
                  <span className="zmi-pip-you-badge">
                    <Video className="w-3 h-3 text-emerald-400" />
                    <span>{language === 'hi' ? `आप (Student)` : `You (Student)`}</span>
                  </span>
                  <span className="zmi-pip-signal-badge" title="Live Video Connection">
                    <span className="sig s1" />
                    <span className="sig s2" />
                    <span className="sig s3" />
                  </span>
                </div>

                {/* Top-Right Session Countdown Timer (10:00) inside Student Half */}
                <div className="zmi-stage-topright-timer">
                  <Clock className="w-4 h-4 text-sky-300 shrink-0" />
                  <div className="zmi-timer-text-col">
                    <strong className="zmi-timer-digits">{formatTime(sessionSecondsLeft)}</strong>
                    <span className="zmi-timer-sub">Time Left</span>
                  </div>
                </div>

                {cameraEnabled && cameraStatus === 'active' ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="zmi-student-full-video"
                  />
                ) : (
                  <div className="zmi-student-full-fallback">
                    <img
                      src="/images/student_interview_laptop.jpg"
                      alt="Student Video Call"
                      className="zmi-student-full-img"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="zmi-pip-status-tag">
                      {cameraStatus === 'off'
                        ? language === 'hi'
                          ? 'कैमरा बंद है'
                          : 'Camera Off'
                        : cameraStatus === 'denied'
                        ? language === 'hi'
                          ? 'कैमरा अनुमति नहीं'
                          : 'Camera Blocked'
                        : language === 'hi'
                        ? 'स्टूडेंट लाइव वीडियो'
                        : 'Student Live Video'}
                    </span>
                  </div>
                )}

                {/* On-Screen Video Call Dock inside Student Half: Language (Left) | Camera & Mic (Center) | End Interview (Right) */}
                <div className="zmi-student-own-controls-dock">
                  <div className="zmi-onscreen-call-bar">
                    {/* Language Switcher (English = Indian Male HR, हिंदी = Indian Female HR) */}
                    <div className="zmi-onscreen-lang-pill">
                      <Globe className="w-3.5 h-3.5 text-sky-300 ml-1" />
                      <button
                        type="button"
                        onClick={() => onLanguageChange('en')}
                        className={`zmi-onscreen-lang-btn ${language === 'en' ? 'active' : ''}`}
                      >
                        English
                      </button>
                      <button
                        type="button"
                        onClick={() => onLanguageChange('hi')}
                        className={`zmi-onscreen-lang-btn ${language === 'hi' ? 'active' : ''}`}
                      >
                        हिंदी
                      </button>
                    </div>

                    {/* Audio & Video Call Controls (Settings icon deleted as requested) */}
                    <div className="zmi-onscreen-media-btns">
                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          setCameraEnabled((prev) => !prev);
                        }}
                        className={`zmi-call-icon-btn ${!cameraEnabled ? 'off' : ''}`}
                        title={cameraEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
                      >
                        {cameraEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                      </button>

                      <button
                        type="button"
                        onClick={handleMicToggleClick}
                        className={`zmi-call-mic-btn ${isListening ? 'active' : ''}`}
                        title={isListening ? 'Stop Microphone' : 'Start Microphone'}
                      >
                        <Mic className="w-4 h-4 text-white" />
                      </button>
                    </div>

                    {/* End Interview Button on Video Screen */}
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        handleEndSession();
                      }}
                      className="zmi-onscreen-end-btn"
                    >
                      <PhoneOff className="w-3.5 h-3.5" />
                      <span>End Interview</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Bottom Answer Row: Left Mic Pod + Right Live Transcription Card */}
          <div className="zmi-answer-row">
            {/* Left Mic Pod Card */}
            <div className="zmi-mic-pod-card">
              <div className="zmi-mic-circle-outer">
                <button
                  type="button"
                  onClick={handleMicToggleClick}
                  className={`zmi-mic-main-btn ${isListening ? 'listening' : ''}`}
                  title={isListening ? 'Stop Listening' : 'Start Listening (Browser Speech-to-Text)'}
                >
                  <Mic className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Equalizer Bars */}
              <div className={`zmi-mic-eq-bars ${isListening ? 'active' : ''}`}>
                {[6, 10, 14, 18, 22, 16, 20, 14, 10, 6].map((h, idx) => (
                  <span key={idx} className="eq-bar" style={{ height: `${h}px` }} />
                ))}
              </div>

              <span className="zmi-mic-status-label">
                {isListening
                  ? language === 'hi'
                    ? 'सुन रहा है...'
                    : 'Listening...'
                  : language === 'hi'
                  ? 'बोलने के लिए टैप करें'
                  : 'Tap to Speak'}
              </span>

              <button
                type="button"
                onClick={handleMicToggleClick}
                className="zmi-mic-stop-square-btn"
              >
                {isListening ? (
                  <>
                    <div className="zmi-stop-icon-box">
                      <Square className="w-3 h-3 fill-current" />
                    </div>
                    <span>{language === 'hi' ? 'रोकें (Stop)' : 'Stop'}</span>
                  </>
                ) : (
                  <>
                    <div className="zmi-stop-icon-box start">
                      <Play className="w-3 h-3 fill-current" />
                    </div>
                    <span>{language === 'hi' ? 'शुरू करें (Start)' : 'Start'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Live Transcription Card */}
            <div className="zmi-transcription-card">
              <div className="zmi-trans-header">
                <div className="zmi-trans-header-left">
                  <div className="zmi-trans-badge-icon">
                    <FileText className="w-3.5 h-3.5 text-white" />
                  </div>
                  <strong className="zmi-trans-title">
                    {language === 'hi'
                      ? 'आपका उत्तर (Live Transcription)'
                      : 'Your Answer (Live Transcription)'}
                  </strong>
                  <span className="zmi-trans-divider">|</span>
                  {isListening ? (
                    <span className="zmi-listening-indicator active">
                      <span className="dot" />
                      <span>{language === 'hi' ? 'Listening (hi-IN)...' : 'Listening (en-IN)...'}</span>
                    </span>
                  ) : (
                    <span className="zmi-listening-indicator">
                      <span className="dot idle" />
                      <span>
                        {language === 'hi'
                          ? 'बोलें या सीधे टाइप करें'
                          : 'Speak or type directly'}
                      </span>
                    </span>
                  )}
                </div>

                <div className="zmi-trans-timer">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {formatTime(answerElapsedSeconds)} / {formatTime(maxAnswerSeconds)}
                  </span>
                </div>
              </div>

              {/* Error or Browser Notice Banner if Mic Denied / Unsupported */}
              {(sttError || voiceWarning) && (
                <div className="zmi-notice-banner">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{sttError || voiceWarning}</span>
                </div>
              )}

              {/* Editable Answer Box — Preserves Confirmed Words + Shows Live Interim Speech */}
              <textarea
                className="zmi-answer-textarea"
                rows={3}
                value={displayAnswerText}
                onChange={(e) => {
                  setSttError(null);
                  updateConfirmedAnswer(e.target.value);
                }}
                placeholder={
                  language === 'hi'
                    ? 'माइक चालू करके हिंदी में बोलें या यहाँ अपना उत्तर टाइप करें...'
                    : 'Click the microphone to speak your answer in English, or type/edit your answer directly here...'
                }
              />

              {/* Bottom Action Row */}
              <div className="zmi-trans-footer">
                <button
                  type="button"
                  onClick={handleInsertExampleAnswer}
                  className="zmi-example-fill-btn"
                  title="Fill preloaded example answer to test rule-based scoring"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>{language === 'hi' ? 'उदाहरण उत्तर भरें' : 'Insert Example'}</span>
                </button>

                <div className="zmi-trans-footer-right">
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      updateConfirmedAnswer('');
                      setSttError(null);
                    }}
                    className="zmi-clear-btn"
                  >
                    <Eraser className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'साफ़ करें (Clear Text)' : 'Clear Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitAnswer}
                    className={`zmi-submit-btn ${isAnswerReadyToSubmit ? 'is-ready-highlight' : ''}`}
                  >
                    <span>{language === 'hi' ? 'उत्तर सबमिट करें →' : 'Submit Answer →'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            RIGHT SIDEBAR: Interview Progress + Current Question + Feedback
            ───────────────────────────────────────────────────────────────── */}
        <aside className="zmi-right-column">
          {/* Card 1: Interview Progress */}
          <div className="zmi-side-card zmi-progress-card">
            <div className="zmi-card-head">
              <div className="flex items-center gap-2">
                <div className="zmi-blue-icon-badge">
                  <Target className="w-3.5 h-3.5 text-white" />
                </div>
                <strong className="zmi-card-title">
                  {language === 'hi' ? 'इंटरव्यू प्रगति (Interview Progress)' : 'Interview Progress'}
                </strong>
              </div>
              <span className="zmi-q-counter-label">
                {language === 'hi'
                  ? `प्रश्न ${currentQIdx + 1} / ${questions.length}`
                  : `Question ${currentQIdx + 1} of ${questions.length}`}
              </span>
            </div>

            {/* Segmented Progress Bar */}
            <div
              className="zmi-segmented-bar"
              style={{ gridTemplateColumns: `repeat(${Math.max(1, questions.length)}, minmax(0, 1fr))` }}
            >
              {questions.map((q, idx) => {
                const isDone = Boolean(evaluationsByQId[q.id]);
                const isCurrent = idx === currentQIdx;
                return (
                  <div
                    key={q.id}
                    className={`zmi-seg-item ${isCurrent ? 'current' : ''} ${isDone ? 'done' : ''}`}
                  />
                );
              })}
            </div>

            {/* Dynamic Question Buttons */}
            <div
              className="zmi-q-numbers-row"
              style={{ gridTemplateColumns: `repeat(${Math.max(1, questions.length)}, minmax(0, 1fr))` }}
            >
              {questions.map((q, idx) => {
                const isCurrent = idx === currentQIdx;
                const isDone = Boolean(evaluationsByQId[q.id]);
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleSelectQuestion(idx)}
                    className={`zmi-q-num-btn ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Current Question & Hint */}
          <div className="zmi-side-card zmi-question-card">
            <div className="zmi-card-head">
              <div className="flex items-center gap-2">
                <div className="zmi-outline-icon-badge">
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                </div>
                <strong className="zmi-card-title">
                  {language === 'hi' ? 'वर्तमान प्रश्न (Current Question)' : 'Current Question'}
                </strong>
              </div>
              <span className="zmi-difficulty-badge">
                {currentQ.topic} ({currentQ.difficulty})
              </span>
            </div>

            <h2 className="zmi-current-q-heading">
              {language === 'hi' ? currentQ.questionHi : currentQ.questionEn}
            </h2>

            <div
              className="zmi-hint-box"
              onClick={() => setHintExpanded((prev) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setHintExpanded((prev) => !prev);
                }
              }}
            >
              <div className="zmi-hint-icon">💡</div>
              <div className="zmi-hint-body">
                <strong className="zmi-hint-title">
                  {language === 'hi' ? 'संकेत (Hint)' : 'Hint'}
                </strong>
                {hintExpanded && (
                  <p className="zmi-hint-text">
                    {language === 'hi' ? currentQ.hintHi : currentQ.hintEn}
                  </p>
                )}
              </div>
              <ChevronDown className={`zmi-hint-chevron ${hintExpanded ? '' : 'collapsed'}`} />
            </div>
          </div>

          {/* Card 3: Tabbed Feedback / Model Answer / Key Points */}
          <div className={`zmi-side-card zmi-evaluation-card ${activeRightTab === 'feedback' && !currentEvaluation ? 'is-empty-feedback' : ''}`}>
            <div className="zmi-eval-tabs">
              <button
                type="button"
                onClick={() => setActiveRightTab('feedback')}
                className={`zmi-eval-tab ${activeRightTab === 'feedback' ? 'active' : ''}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'फीडबैक (Feedback)' : 'Feedback'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveRightTab('model')}
                className={`zmi-eval-tab ${activeRightTab === 'model' ? 'active' : ''}`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'आदर्श उत्तर' : 'Model Answer'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveRightTab('keypoints')}
                className={`zmi-eval-tab ${activeRightTab === 'keypoints' ? 'active' : ''}`}
              >
                <ListChecks className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'मुख्य बिंदु' : 'Key Points'}</span>
              </button>
            </div>

            <div className="zmi-eval-tab-body">
              {activeRightTab === 'feedback' && (
                <>
                  {!currentEvaluation ? (
                    <div className="zmi-feedback-empty">
                      <div className="zmi-empty-doc-circle">
                        <FileText className="w-6 h-6 text-sky-600" />
                      </div>
                      <p className="zmi-empty-text">
                        {language === 'hi'
                          ? 'आपका उत्तर सबमिट करने के बाद आपका नियम-आधारित मूल्यांकन और स्कोर यहाँ दिखाई देगा।'
                          : 'Your feedback will appear here after you submit your answer.'}
                      </p>
                    </div>
                  ) : (
                    <div className="zmi-feedback-results">
                      {/* ATS Resume Checker Style Round Speedometer Gauge + SELECTED / REJECTED Verdict */}
                      {(() => {
                        const scoreVal = Math.max(0, Math.min(10, currentEvaluation.score));
                        const isSelected = scoreVal >= 6.0;
                        const pct = Math.round((scoreVal / 10) * 100);
                        // Semi-circle arc r=38, circumference for half-circle = Math.PI * 38 ≈ 119.38
                        const arcLen = 119.38;
                        const dashOffset = arcLen - (scoreVal / 10) * arcLen;
                        // Needle angle from -90deg (0/10) to +90deg (10/10)
                        const needleDeg = -90 + (scoreVal / 10) * 180;
                        const gaugeColor =
                          scoreVal >= 6.0 ? '#10b981' : scoreVal >= 4.0 ? '#f59e0b' : '#ef4444';

                        return (
                          <div className={`zmi-ats-speedometer-card ${isSelected ? 'is-selected' : 'is-rejected'}`}>
                            {/* Left: Round Speedometer Dial */}
                            <div className="zmi-speedometer-dial">
                              <svg viewBox="0 0 100 62" className="zmi-speedometer-svg">
                                {/* Background Track Arc */}
                                <path
                                  d="M 12 50 A 38 38 0 0 1 88 50"
                                  fill="none"
                                  stroke="#e2e8f0"
                                  strokeWidth="9"
                                  strokeLinecap="round"
                                />
                                {/* Active Colored Speedometer Arc */}
                                <path
                                  d="M 12 50 A 38 38 0 0 1 88 50"
                                  fill="none"
                                  stroke={gaugeColor}
                                  strokeWidth="9"
                                  strokeLinecap="round"
                                  strokeDasharray={arcLen}
                                  strokeDashoffset={dashOffset}
                                  style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.3s ease' }}
                                />
                                {/* Scale Labels */}
                                <text x="6" y="59" fontSize="6.5" fontWeight="700" fill="#64748b">0</text>
                                <text x="47" y="8" fontSize="6.5" fontWeight="700" fill="#64748b">5</text>
                                <text x="86" y="59" fontSize="6.5" fontWeight="700" fill="#64748b">10</text>
                                {/* Speedometer Needle */}
                                <g transform={`translate(50, 50) rotate(${needleDeg})`}>
                                  <polygon points="-2,0 0,-31 2,0" fill="#0f172a" />
                                  <circle cx="0" cy="0" r="4" fill={gaugeColor} stroke="#0f172a" strokeWidth="1.5" />
                                </g>
                              </svg>
                              <div className="zmi-speedometer-score-readout">
                                <span className="score-big" style={{ color: gaugeColor }}>
                                  {currentEvaluation.score}
                                </span>
                                <span className="score-denom">/ {currentEvaluation.maxScore}</span>
                              </div>
                            </div>

                            {/* Right: Rule-Based Score Title + SELECTED / REJECTED Stamp + Breakdown */}
                            <div className="zmi-speedometer-meta">
                              <div className="zmi-speedometer-top-row">
                                <span className="zmi-score-label">
                                  {language === 'hi' ? 'नियम-आधारित स्कोर' : 'Rule-Based Score'} ({pct}%)
                                </span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const verdictSpeech =
                                      language === 'hi'
                                        ? isSelected
                                          ? `आपका स्कोर 10 में से ${currentEvaluation.score} है। स्टेटस: सेलेक्टेड!`
                                          : `आपका स्कोर 10 में से ${currentEvaluation.score} है। स्टेटस: रिजेक्टेड।`
                                        : isSelected
                                        ? `Your score is ${currentEvaluation.score} out of 10. Status: Selected!`
                                        : `Your score is ${currentEvaluation.score} out of 10. Status: Rejected.`;
                                    speakQuestionAloud(verdictSpeech, false, false);
                                  }}
                                  className="zmi-verdict-speak-btn"
                                  title="Speak Score & Verdict"
                                >
                                  🔊
                                </button>
                              </div>

                              <div className={`zmi-verdict-stamp ${isSelected ? 'selected' : 'rejected'}`}>
                                {isSelected
                                  ? language === 'hi'
                                    ? '✓ SELECTED (चयनित)'
                                    : '✓ SELECTED'
                                  : language === 'hi'
                                  ? '✕ REJECTED (अस्वीकृत)'
                                  : '✕ REJECTED'}
                              </div>

                              <div className="zmi-score-weights-pill">
                                <span>
                                  KW: {currentEvaluation.breakdown.keywordPoints} | Concepts:{' '}
                                  {currentEvaluation.breakdown.conceptPoints} | Len:{' '}
                                  {currentEvaluation.breakdown.structurePoints}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                      <p className="zmi-eval-summary-text">
                        {language === 'hi' ? currentEvaluation.summaryHi : currentEvaluation.summaryEn}
                      </p>

                      {/* Matched Keywords */}
                      <div className="zmi-eval-section">
                        <strong className="zmi-eval-sec-title matched">
                          ✓ {language === 'hi' ? 'मिले हुए कीवर्ड्स (Matched Keywords):' : 'Matched Keywords:'}
                        </strong>
                        {currentEvaluation.matchedKeywords.length > 0 ? (
                          <div className="zmi-kw-chips">
                            {currentEvaluation.matchedKeywords.map((mk) => (
                              <span key={mk.id} className="zmi-kw-chip matched">
                                <Check className="w-3 h-3" />
                                {language === 'hi' ? mk.labelHi : mk.labelEn}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="zmi-none-note">
                            {language === 'hi' ? 'कोई मुख्य कीवर्ड नहीं मिला' : 'No required keywords matched yet'}
                          </span>
                        )}
                      </div>

                      {/* Missing Keywords */}
                      {currentEvaluation.missingKeywords.length > 0 && (
                        <div className="zmi-eval-section">
                          <strong className="zmi-eval-sec-title missing">
                            ✕ {language === 'hi' ? 'छूटे हुए कीवर्ड्स (Missing Keywords):' : 'Missing Keywords:'}
                          </strong>
                          <div className="zmi-kw-chips">
                            {currentEvaluation.missingKeywords.map((mk) => (
                              <span key={mk.id} className="zmi-kw-chip missing">
                                {language === 'hi' ? mk.labelHi : mk.labelEn}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Correct Concepts Covered */}
                      {currentEvaluation.matchedConcepts.length > 0 && (
                        <div className="zmi-eval-section">
                          <strong className="zmi-eval-sec-title matched">
                            🎯 {language === 'hi' ? 'सही अवधारणाएं (Correct Concepts):' : 'Correct Concepts:'}
                          </strong>
                          <ul className="zmi-eval-list">
                            {currentEvaluation.matchedConcepts.map((mc) => (
                              <li key={mc.id}>
                                {language === 'hi' ? mc.conceptHi : mc.conceptEn}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Possible Mistakes */}
                      {currentEvaluation.detectedMistakes.length > 0 && (
                        <div className="zmi-eval-section">
                          <strong className="zmi-eval-sec-title mistake">
                            ⚠️ {language === 'hi' ? 'संभावित गलतियाँ (Possible Mistakes):' : 'Possible Mistakes:'}
                          </strong>
                          <ul className="zmi-eval-list mistake">
                            {currentEvaluation.detectedMistakes.map((dm) => (
                              <li key={dm.id}>
                                {language === 'hi' ? dm.mistakeHi : dm.mistakeEn}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Suggestions to Improve */}
                      <div className="zmi-eval-section">
                        <strong className="zmi-eval-sec-title suggest">
                          💡 {language === 'hi' ? 'सुधार के सुझाव (Suggestions):' : 'Suggestions to Improve:'}
                        </strong>
                        <ul className="zmi-eval-list">
                          {(language === 'hi'
                            ? currentEvaluation.suggestionsHi
                            : currentEvaluation.suggestionsEn
                          ).map((sug, i) => (
                            <li key={i}>{sug}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal Answer Comparison Box */}
                      <div className="zmi-ideal-compare-box">
                        <div className="flex items-center justify-between mb-1">
                          <strong className="text-[11px] font-extrabold text-emerald-800">
                            📖 {language === 'hi' ? 'आदर्श उत्तर (Ideal Answer):' : 'Ideal Answer:'}
                          </strong>
                          <button
                            type="button"
                            onClick={() =>
                              speakQuestionAloud(
                                language === 'hi' ? currentQ.idealAnswerHi : currentQ.idealAnswerEn,
                                false,
                                false
                              )
                            }
                            className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200 cursor-pointer"
                          >
                            🔊 Listen
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-700 leading-relaxed m-0">
                          {language === 'hi' ? currentQ.idealAnswerHi : currentQ.idealAnswerEn}
                        </p>
                      </div>

                      {/* Try Again & Next Question Buttons */}
                      <div className="zmi-eval-actions-row">
                        <button type="button" onClick={handleTryAgain} className="zmi-try-again-btn">
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{language === 'hi' ? 'फिर से प्रयास करें' : 'Try Again'}</span>
                        </button>
                        <button type="button" onClick={handleNextQuestion} className="zmi-next-q-btn">
                          <span>
                            {currentQIdx < questions.length - 1
                              ? language === 'hi'
                                ? 'अगला प्रश्न →'
                                : 'Next Question →'
                              : language === 'hi'
                              ? 'इंटरव्यू समाप्त करें →'
                              : 'Finish Interview →'}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {activeRightTab === 'model' && (
                <div className="zmi-model-tab-content">
                  <div className="zmi-model-block">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="text-xs font-extrabold text-sky-900">
                        {language === 'hi' ? 'आदर्श उत्तर (हिंदी):' : 'Ideal Answer (English):'}
                      </strong>
                      <button
                        type="button"
                        onClick={() =>
                          speakQuestionAloud(
                            language === 'hi' ? currentQ.idealAnswerHi : currentQ.idealAnswerEn,
                            false,
                            false
                          )
                        }
                        className="text-[10.5px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 cursor-pointer"
                      >
                        🔊 Listen
                      </button>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed m-0">
                      {language === 'hi' ? currentQ.idealAnswerHi : currentQ.idealAnswerEn}
                    </p>
                  </div>

                  <div className="zmi-model-block example">
                    <strong className="text-xs font-extrabold text-emerald-900 block mb-1">
                      {language === 'hi' ? 'उदाहरण उत्तर (Example Answer):' : 'Example Student Answer:'}
                    </strong>
                    <p className="text-xs text-slate-700 leading-relaxed m-0">
                      {language === 'hi' ? currentQ.exampleAnswerHi : currentQ.exampleAnswerEn}
                    </p>
                  </div>
                </div>
              )}

              {activeRightTab === 'keypoints' && (
                <div className="zmi-keypoints-tab-content">
                  <div className="mb-2.5">
                    <strong className="text-xs font-extrabold text-slate-800 block mb-1">
                      {language === 'hi' ? 'आवश्यक कीवर्ड्स (Required Keywords):' : 'Required Keywords:'}
                    </strong>
                    <div className="zmi-kw-chips">
                      {currentQ.requiredKeywords.map((kw) => (
                        <span key={kw.id} className="zmi-kw-chip neutral">
                          {language === 'hi' ? kw.labelHi : kw.labelEn}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <strong className="text-xs font-extrabold text-slate-800 block mb-1">
                      {language === 'hi' ? 'महत्वपूर्ण अवधारणाएं (Important Concepts):' : 'Important Concepts:'}
                    </strong>
                    <ul className="zmi-eval-list">
                      {currentQ.importantConcepts.map((cp) => (
                        <li key={cp.id}>{language === 'hi' ? cp.conceptHi : cp.conceptEn}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ZeroCostMockInterviewRoom;
