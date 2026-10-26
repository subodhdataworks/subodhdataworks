import {
  getTopicQuestionBank,
  getTab1TopicList,
  getTopicListForTab,
  revalidateQuestionBankFromBackend,
} from './data/questionBankRegistry';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Settings,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Check,
  Lock,
  ArrowRight,
  Clock,
  Code2,
  FolderKanban,
  LayoutDashboard,
  Building2,
  Home,
  BookOpen,
  Award,
  Users,
  Share2,
  Sparkles,
  AlertCircle,
  Gamepad2,
  Lightbulb,
  Mic,
  Trophy,
  CheckCircle2,
  RotateCcw,
  Trash2,
  FileText,
  IndianRupee,
  Wallet,
  Bot,
  Search,
  Bell,
  BarChart3,
  Flame,
  CheckSquare,
  HelpCircle,
  Target,
  FileCheck,
  Send,
  Layers,
  MessageSquare,
  Briefcase,
  Keyboard,
  SkipForward,
  Folder,
  Zap,
  Terminal,
  FileDown,
  Star,
  RefreshCw,
  XCircle,
  Coins,
  Swords,
  Bug,
  Shield,
  Cpu,
  Radio,
  Eye,
  Activity
} from 'lucide-react';
import { FutureLogo } from './FutureLogo';
import { soundEffects } from '../../services/soundEffects';
import { getModule01TopicData, TopicAssessmentData } from './data/module01TopicContent';
import { getHindiTopicActivity } from './data/hindiActivityContent';
import { Topic1GamePack } from './games/Topic1GamePack';
import { PythonIntroGameWorkspace } from './PythonIntroGameWorkspace';
import { PythonPracticeArena4Games } from './PythonPracticeArena4Games';
import { getTopicHierarchyInfo } from './PythonChapterView';
import { HrSettingsService, HrSettingsConfig, DEFAULT_HR_SETTINGS } from '../../services/hrSettingsService';
import { isTopicUnlocked } from '../../services/courseUnlockService';
import { StableMouthLipSyncAvatar } from './interview/StableMouthLipSyncAvatar';
import { ZeroCostMockInterviewRoom } from './interview/ZeroCostMockInterviewRoom';
import { AdminHrSettingsModal } from '../admin/AdminHrSettingsModal';
import { awardLearnerTelemetry, markTopicComplete } from '../../services/realAuthService';
import './PythonTopicWorkspace.css';

export type WorkspaceStepId = 'learn' | 'practice' | 'play' | 'code' | 'interview' | 'score';

interface PythonTopicWorkspaceProps {
  userName?: string;
  topicId?: number;
  initialStep?: WorkspaceStepId;
  onBack: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
  onNavigateNextTopic?: () => void;
  onNavigateDock?: (tab: 'home' | 'game' | 'income' | 'earning' | 'placement' | 'referral' | 'wallet' | 'withdraw' | 'learn' | 'internship' | 'certificate' | 'dashboard' | string) => void;
}

export const PythonTopicWorkspace: React.FC<PythonTopicWorkspaceProps> = ({
  userName = 'Subodh Kumar',
  topicId = 1,
  initialStep = 'learn',
  onBack,
  onOpenUnlockModal,
  onOpenAdvisor,
  onNavigateNextTopic,
  onNavigateDock,
}) => {
  // Active Activity Tab
  const [activeStep, setActiveStep] = useState<WorkspaceStepId>(initialStep);

  // Content Language Toggle for MCQ, GAME, and INTERVIEW ('en' | 'hi')
  const [activityLang, setActivityLang] = useState<'en' | 'hi'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('futureai_activity_lang');
      if (saved === 'hi' || saved === 'en') return saved;
    }
    return 'en';
  });

  // Video Source Toggle for Topic 1.1 ('drive' | 'local')
  const [topic1VideoSource, setTopic1VideoSource] = useState<'drive' | 'local'>('local');

  const handleSelectActivityLang = (lang: 'en' | 'hi') => {
    soundEffects.playClick();
    setActivityLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_activity_lang', lang);
    }
  };

  useEffect(() => {
    if (initialStep) setActiveStep(initialStep);
  }, [initialStep]);

  const [urlTopicId, setUrlTopicId] = useState<number | null>(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
    const t = params.get('topic');
    return t ? parseInt(t, 10) : null;
  });

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.toLowerCase();
      const baseHash = rawHash.split('?')[0];
      const params = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
      const t = params.get('topic');
      if (t) setUrlTopicId(parseInt(t, 10));
      const tabParam = params.get('tab');
      if (tabParam) setUrlTabId(parseInt(tabParam, 10));

      if (baseHash === '#learn' || baseHash === '#video') setActiveStep('learn');
      else if (baseHash === '#practice' || baseHash === '#mcq') setActiveStep('practice');
      else if (baseHash === '#play' || baseHash === '#topicgame' || baseHash === '#codequest') setActiveStep('play');
      else if (baseHash === '#code' || baseHash === '#codepractice') setActiveStep('code');
      else if (baseHash === '#interview' || baseHash === '#mockinterview') setActiveStep('interview');
      else if (baseHash === '#score' || baseHash === '#report') setActiveStep('score');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const [urlTabId, setUrlTabId] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
      const tabParam = p.get('tab');
      if (tabParam) return parseInt(tabParam, 10);
    }
    return 1;
  });

  const tabCourseMap: Record<number, string> = {
    1: 'data_analyst',
    2: 'data_science',
    3: 'ml_engineering',
    4: 'ai_engineering',
    5: 'ai_tools_prompt',
    6: 'ms_office_copilot',
    7: 'full_stack_mern',
  };
  const activeCourseKey = tabCourseMap[urlTabId] || 'data_analyst';
  const [internalTopicId, setInternalTopicId] = useState<number>(urlTopicId ?? topicId ?? 1);
  const isCurrentTopicLocked = useMemo(() => {
    return !isTopicUnlocked(activeCourseKey, 1, internalTopicId, urlTabId);
  }, [activeCourseKey, internalTopicId]);
  const effectiveTopicId = internalTopicId;
  const setEffectiveTopicId = (newId: number) => {
    setInternalTopicId(newId);
    if (typeof window !== 'undefined') {
      window.location.hash = `#${activeStep}?topic=${newId}${urlTabId > 1 ? `&tab=${urlTabId}` : ''}`;
    }
  };

  useEffect(() => {
    if (typeof topicId === 'number' && topicId !== internalTopicId) {
      setInternalTopicId(topicId);
    }
  }, [topicId]);
  const topicHierarchy = useMemo(() => getTopicHierarchyInfo(effectiveTopicId), [effectiveTopicId]);
  const [questionBankRev, setQuestionBankRev] = useState<number>(0);

  useEffect(() => {
    revalidateQuestionBankFromBackend(urlTabId, effectiveTopicId);
    const handleBankUpdate = () => setQuestionBankRev((r) => r + 1);
    const handleFocus = () => {
      revalidateQuestionBankFromBackend(urlTabId, effectiveTopicId);
    };
    window.addEventListener('futureai_question_bank_updated', handleBankUpdate);
    window.addEventListener('storage', handleBankUpdate);
    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('futureai_question_bank_updated', handleBankUpdate);
      window.removeEventListener('storage', handleBankUpdate);
      window.removeEventListener('focus', handleFocus);
    };
  }, [urlTabId, effectiveTopicId]);

  const isTab1Topic = useMemo(() => {
    return !!getTopicQuestionBank(urlTabId, effectiveTopicId) || (effectiveTopicId >= 1 && effectiveTopicId <= 26);
  }, [urlTabId, effectiveTopicId, questionBankRev]);
  const isTopicWithoutCoding = isTab1Topic;
  const isTopicWithoutMcq = isTab1Topic;

  // Auto-redirect if skipped steps are selected on Topic 1
  useEffect(() => {
    if (isTopicWithoutMcq && activeStep === 'practice') {
      setActiveStep('play');
      if (typeof window !== 'undefined') {
        window.location.hash = `#play?topic=${effectiveTopicId}`;
      }
    } else if (isTopicWithoutCoding && activeStep === 'code') {
      setActiveStep('interview');
      if (typeof window !== 'undefined') {
        window.location.hash = `#interview?topic=${effectiveTopicId}`;
      }
    }
  }, [isTopicWithoutMcq, isTopicWithoutCoding, activeStep, effectiveTopicId]);

  // Silence any interview sound when navigating away from interview tab
  useEffect(() => {
    if (activeStep !== 'interview') {
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
    }
  }, [activeStep]);

  const handleSelectTab = (step: WorkspaceStepId) => {
    // Silence all interview speech & audio immediately when leaving interview tab
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
    if (isTopicWithoutMcq && step === 'practice') {
      // Skip MCQ for Topic 1.1 What is Programming
      step = 'play';
    }
    if (isTopicWithoutCoding && step === 'code') {
      // Skip coding for Topic 1.1 What is Programming
      step = 'interview';
    }
    soundEffects.playClick();
    setActiveStep(step);
    const map: Record<WorkspaceStepId, string> = {
      learn: '#learn',
      practice: '#practice',
      play: '#play',
      code: '#code',
      interview: '#interview',
      score: '#score',
    };
    if (typeof window !== 'undefined') {
      window.location.hash = `${map[step]}?topic=${effectiveTopicId}`;
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // TAB 1: VIDEO STATE & AUTO-MCQ FLOW
  // ─────────────────────────────────────────────────────────────────────────────
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);

  const [notesTab, setNotesTab] = useState<'notes' | 'homework'>('notes');
  const [userNotes, setUserNotes] = useState(() => {
    return localStorage.getItem('futureai_python_notes_topic1') || '';
  });

  const handleNotesChange = (val: string) => {
    setUserNotes(val);
    localStorage.setItem('futureai_python_notes_topic1', val);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // AUTO-PROGRESSION CHAIN (Video -> MCQ -> Game -> Code -> Interview -> Report)
  // ─────────────────────────────────────────────────────────────────────────────
  const [autoFlowNotice, setAutoFlowNotice] = useState<{
    title: string;
    targetStep: WorkspaceStepId;
    secondsRemaining: number;
  } | null>(null);
  const autoFlowTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const triggerAutoAdvanceToStep = (
    nextStep: WorkspaceStepId,
    title: string,
    seconds: number = 3
  ) => {
    if (autoFlowTimerRef.current) {
      clearInterval(autoFlowTimerRef.current);
      autoFlowTimerRef.current = null;
    }
    soundEffects.playCelebration();
    setAutoFlowNotice({ title, targetStep: nextStep, secondsRemaining: seconds });

    let rem = seconds;
    autoFlowTimerRef.current = setInterval(() => {
      rem -= 1;
      if (rem <= 0) {
        if (autoFlowTimerRef.current) {
          clearInterval(autoFlowTimerRef.current);
          autoFlowTimerRef.current = null;
        }
        setAutoFlowNotice(null);
        handleSelectTab(nextStep);
      } else {
        setAutoFlowNotice((prev) => (prev ? { ...prev, secondsRemaining: rem } : null));
      }
    }, 1000);
  };

  const cancelAutoFlow = () => {
    if (autoFlowTimerRef.current) {
      clearInterval(autoFlowTimerRef.current);
      autoFlowTimerRef.current = null;
    }
    setAutoFlowNotice(null);
  };

  // Video completion is manual or on actual video end (no auto popup timer)

  // ─────────────────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────────────────
  // TAB 2: DYNAMIC TOPIC ASSESSMENT DATA & MCQS (13 Topics | 65 Questions)
  // ─────────────────────────────────────────────────────────────────────────────
  const currentTopicData: TopicAssessmentData = useMemo(() => getModule01TopicData(effectiveTopicId), [effectiveTopicId]);
  const currentHindiActivity = useMemo(() => getHindiTopicActivity(effectiveTopicId), [effectiveTopicId]);
  const mcqQuestions = currentTopicData.mcqs;

  const [currentMcqIdx, setCurrentMcqIdx] = useState(0);
  // Initially no answer selected - learner must pick their answer
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [mcqSoundEnabled, setMcqSoundEnabled] = useState(true);
  const [mcqVoiceEnabled, setMcqVoiceEnabled] = useState(true);
  const [mcqStreak, setMcqStreak] = useState(0);
  const [mcqMaxStreak, setMcqMaxStreak] = useState(0);
  const [mcqXp, setMcqXp] = useState(0);
  const [mcqLifeline5050Count, setMcqLifeline5050Count] = useState(2);
  const [mcqEliminatedOptions, setMcqEliminatedOptions] = useState<Record<number, number[]>>({});
  const [mcqHintRevealed, setMcqHintRevealed] = useState<Record<number, boolean>>({});
  const [mcqTimerPaused, setMcqTimerPaused] = useState(false);
  const [mcqFlagged, setMcqFlagged] = useState<Record<number, boolean>>({});
  const [mcqShowCelebrationModal, setMcqShowCelebrationModal] = useState(false);
  const [mcqConfettiActive, setMcqConfettiActive] = useState(false);

  // Auto-advance notice & countdown timers (Single attempt lock + wrong answer auto next)
  const [autoAdvanceNotice, setAutoAdvanceNotice] = useState<{
    status: 'correct' | 'wrong';
    secondsRemaining: number;
  } | null>(null);
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoAdvanceIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoAdvance = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    if (autoAdvanceIntervalRef.current) {
      clearInterval(autoAdvanceIntervalRef.current);
      autoAdvanceIntervalRef.current = null;
    }
    setAutoAdvanceNotice(null);
  };

  // Clean up auto-advance timers on unmount or tab change
  useEffect(() => {
    return () => clearAutoAdvance();
  }, [activeStep]);

  // Reset all states when topicId changes
  useEffect(() => {
    setCurrentMcqIdx(0);
    setSelectedAnswers({});
    setMcqEliminatedOptions({});
    setMcqHintRevealed({});
    setMcqFlagged({});
    setTimerSeconds(30);
    setMcqTimerPaused(false);
    setMcqShowCelebrationModal(false);
    clearAutoAdvance();
    // Game resets
    setActiveGameLevel(1);
    setL1Slots(new Array(currentTopicData.game.l1.correctOrder.length).fill(null));
    setL1Result('idle');
    setL1Completed(false);
    setL2SelectedId(null);
    setL2Result('idle');
    setL2Completed(false);
    setL3SelectedLine(currentTopicData.game.l3.bugLine);
    setL3SelectedPatch(null);
    setL3BugDefeated(false);
    setL3Result('idle');
    setL3Completed(false);
    setL4Slot1(null);
    setL4Slot2(null);
    setL4Result('idle');
    setL4Completed(false);
    setL5BossHp(100);
    setL5Phase(1);
    setL5BossDefeated(false);
    setL5VictoryModal(false);
    setL5Result('idle');
    // Coding practice resets
    setActiveChallengeIdx(0);
    setPythonPracticeCode(currentTopicData.codingChallenges[0]?.starterCode || '');
    setPracticeTestStatus('idle');
    setPracticeConsoleOutput('');
    // Interview resets
    setInterviewQuestionIdx(0);
    setInterviewAnswer('');
    setInterviewFeedback(null);
    setInterviewSubmitted(false);
  }, [topicId, currentTopicData]);


  const handleNextQuestion = () => {
    clearAutoAdvance();
    if (currentMcqIdx < mcqQuestions.length - 1) {
      if (mcqSoundEnabled) soundEffects.playCardFlip();
      setCurrentMcqIdx((i) => i + 1);
      setTimerSeconds(30);
      setMcqTimerPaused(false);
    } else {
      setMcqShowCelebrationModal(true);
      try {
        awardLearnerTelemetry(50, 10);
      } catch (e) {
        console.warn(e);
      }
      if (mcqSoundEnabled) soundEffects.playCelebration();
    }
  };

  const handlePrevQuestion = () => {
    clearAutoAdvance();
    if (currentMcqIdx > 0) {
      if (mcqSoundEnabled) soundEffects.playCardFlip();
      setCurrentMcqIdx((i) => i - 1);
      setMcqTimerPaused(false);
    }
  };

  const startAutoAdvance = (status: 'correct' | 'wrong', delayMs: number = 2000) => {
    clearAutoAdvance();
    const totalSeconds = Math.ceil(delayMs / 1000);
    setAutoAdvanceNotice({ status, secondsRemaining: totalSeconds });

    let remaining = totalSeconds;
    autoAdvanceIntervalRef.current = setInterval(() => {
      remaining -= 1;
      if (remaining > 0) {
        setAutoAdvanceNotice((prev) => (prev ? { ...prev, secondsRemaining: remaining } : null));
      }
    }, 1000);

    autoAdvanceTimerRef.current = setTimeout(() => {
      clearAutoAdvance();
      setCurrentMcqIdx((prevIdx) => {
        if (prevIdx < mcqQuestions.length - 1) {
          if (mcqSoundEnabled) soundEffects.playCardFlip();
          setTimerSeconds(30);
          setMcqTimerPaused(false);
          return prevIdx + 1;
        } else {
          setMcqShowCelebrationModal(true);
          if (mcqSoundEnabled) soundEffects.playCelebration();
          // Auto start Game after 4 seconds celebration
          setTimeout(() => {
            setMcqShowCelebrationModal(false);
            handleSelectTab('play');
          }, 3500);
          return prevIdx;
        }
      });
    }, delayMs);
  };

  // Timer countdown
  useEffect(() => {
    if (activeStep !== 'practice' || mcqTimerPaused) return;
    const timer = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          return 30;
        }
        if (prev <= 5 && prev > 1 && mcqSoundEnabled) {
          soundEffects.playTimerHurry();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeStep, mcqTimerPaused, mcqSoundEnabled]);

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    // 1. Single attempt only: "ek hi baar usko right ans choose krne ka mauka mile"
    if (selectedAnswers[qIdx] !== undefined) {
      return; // Already answered - locked!
    }

    if (mcqEliminatedOptions[qIdx]?.includes(optIdx)) {
      if (mcqSoundEnabled) soundEffects.playError();
      return;
    }

    const currentQ = mcqQuestions[qIdx];
    const isCorrect = optIdx === currentQ.correct;

    // Record the answer immediately
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    setMcqTimerPaused(true);

    if (isCorrect) {
      const nextStreak = mcqStreak + 1;
      setMcqStreak(nextStreak);
      setMcqMaxStreak((prev) => Math.max(prev, nextStreak));
      setMcqXp((prev) => prev + 100 + nextStreak * 25);

      if (mcqSoundEnabled) {
        soundEffects.playQuizCorrect();
        if (nextStreak >= 2) {
          setTimeout(() => soundEffects.playStreakBonus(nextStreak), 160);
        }
        if (mcqVoiceEnabled) {
          soundEffects.playRandomQuizPraise();
        }
      }
      setMcqConfettiActive(true);
      setTimeout(() => setMcqConfettiActive(false), 1200);

      // Smooth auto next after 2.2s
      startAutoAdvance('correct', 2200);
    } else {
      // "galat jawab pe sound aaye wrong ans and auto next question aa jaye"
      setMcqStreak(0);
      if (mcqSoundEnabled) {
        soundEffects.playQuizWrong(mcqVoiceEnabled);
      }
      // Auto next question after 2.0s
      startAutoAdvance('wrong', 2000);
    }
  };

  const handleUse5050 = () => {
    if (mcqLifeline5050Count <= 0 || (mcqEliminatedOptions[currentMcqIdx] && mcqEliminatedOptions[currentMcqIdx].length > 0)) {
      if (mcqSoundEnabled) soundEffects.playError();
      return;
    }
    const currentQ = mcqQuestions[currentMcqIdx];
    const wrongIndices = currentQ.options
      .map((_, i) => i)
      .filter((i) => i !== currentQ.correct);
    
    // Pick 2 wrong options to eliminate
    const toEliminate = wrongIndices.slice(0, 2);
    if (mcqSoundEnabled) {
      soundEffects.playZapLifeline();
    }
    setMcqEliminatedOptions((prev) => ({ ...prev, [currentMcqIdx]: toEliminate }));
    setMcqLifeline5050Count((prev) => Math.max(0, prev - 1));
  };

  const handleToggleHint = () => {
    const isRevealed = !!mcqHintRevealed[currentMcqIdx];
    if (!isRevealed && mcqSoundEnabled) {
      soundEffects.playHintChime();
    } else if (isRevealed && mcqSoundEnabled) {
      soundEffects.playClick();
    }
    setMcqHintRevealed((prev) => ({ ...prev, [currentMcqIdx]: !isRevealed }));
  };

  const handleAddTimeBoost = () => {
    if (mcqSoundEnabled) soundEffects.playSuccess();
    setTimerSeconds((prev) => prev + 30);
  };

  const handleSpeakExplanation = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const explanationText = mcqQuestions[currentMcqIdx].explanation;
    const utterance = new SpeechSynthesisUtterance(explanationText);
    utterance.rate = 1.0;
    utterance.pitch = 1.1;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Female'))) || voices.find(v => v.lang.startsWith('en')) || voices[0];
    if (voice) utterance.voice = voice;
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleToggleFlag = () => {
    if (mcqSoundEnabled) soundEffects.playClick();
    setMcqFlagged((prev) => ({ ...prev, [currentMcqIdx]: !prev[currentMcqIdx] }));
  };

  // Keyboard Navigation: [A-D] Select, [Enter/Right] Next, [Left] Prev, [H] Hint, [5] 50:50
  useEffect(() => {
    if (activeStep !== 'practice') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      const key = e.key.toLowerCase();
      if (key === 'a' || key === '1') {
        e.preventDefault();
        if (selectedAnswers[currentMcqIdx] === undefined) {
          handleSelectOption(currentMcqIdx, 0);
        }
      } else if (key === 'b' || key === '2') {
        e.preventDefault();
        if (selectedAnswers[currentMcqIdx] === undefined) {
          handleSelectOption(currentMcqIdx, 1);
        }
      } else if (key === 'c' || key === '3') {
        e.preventDefault();
        if (selectedAnswers[currentMcqIdx] === undefined) {
          handleSelectOption(currentMcqIdx, 2);
        }
      } else if (key === 'd' || key === '4') {
        e.preventDefault();
        if (selectedAnswers[currentMcqIdx] === undefined) {
          handleSelectOption(currentMcqIdx, 3);
        }
      } else if (key === 'arrowright' || key === 'enter') {
        e.preventDefault();
        handleNextQuestion();
      } else if (key === 'arrowleft') {
        e.preventDefault();
        handlePrevQuestion();
      } else if (key === 'h') {
        e.preventDefault();
        handleToggleHint();
      } else if (key === '5') {
        e.preventDefault();
        handleUse5050();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStep, currentMcqIdx, mcqQuestions.length, mcqSoundEnabled, mcqVoiceEnabled, mcqLifeline5050Count, mcqEliminatedOptions, mcqHintRevealed, selectedAnswers]);

  // ─────────────────────────────────────────────────────────────────────────────
  // TAB 3: 2035 5-LEVEL FUTURISTIC GAMIFIED PRACTICE ARENA
  // ─────────────────────────────────────────────────────────────────────────────
  // Gamification HUD States (⚡ CODE SPRINT)
  const [activeGameLevel, setActiveGameLevel] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [unlockedGameLevels, setUnlockedGameLevels] = useState<number[]>([1, 2, 3, 4, 5]);
  const [gameTimerSeconds, setGameTimerSeconds] = useState<number>(102); // 01:42 (matching user request!)
  const [gameAccuracy, setGameAccuracy] = useState<number>(90); // 90% (matching user request!)
  const [gameXp, setGameXp] = useState<number>(120); // +120 XP (matching user request!)
  const [gameCoins, setGameCoins] = useState<number>(50); // +50 Coins (matching user request!)
  const [gameStreakDays, setGameStreakDays] = useState<number>(5); // 🔥 5 Day Streak (matching user request!)
  const [gameIsTimerRunning, setGameIsTimerRunning] = useState<boolean>(true);
  const [showGameHint, setShowGameHint] = useState<boolean>(false);

  // Timer Countdown Effect
  useEffect(() => {
    if (activeStep !== 'play' || !gameIsTimerRunning) return;
    const interval = setInterval(() => {
      setGameTimerSeconds((prev) => (prev > 0 ? prev - 1 : 120));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeStep, gameIsTimerRunning]);

  const formatGameTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // ── LEVEL 1: WARM UP — CODE PUZZLE ──
  const l1AvailableBlocks = currentTopicData.game.l1.blocks;
  const l1ExpectedOrder = currentTopicData.game.l1.correctOrder;
  const [l1Slots, setL1Slots] = useState<(string | null)[]>(() => new Array(currentTopicData.game.l1.correctOrder.length).fill(null));
  const [l1Result, setL1Result] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [l1Completed, setL1Completed] = useState<boolean>(false);

  const handleL1Place = (blockId: string) => {
    soundEffects.playBlockSnap();
    setL1Result('idle');
    const emptyIdx = l1Slots.findIndex((s) => s === null);
    if (emptyIdx !== -1) {
      const next = [...l1Slots];
      next[emptyIdx] = blockId;
      setL1Slots(next);
    }
  };

  const handleL1Remove = (slotIdx: number) => {
    soundEffects.playClick();
    setL1Result('idle');
    const next = [...l1Slots];
    next[slotIdx] = null;
    setL1Slots(next);
  };

  const handleL1Reset = () => {
    soundEffects.playClick();
    setL1Slots(new Array(l1ExpectedOrder.length).fill(null));
    setL1Result('idle');
  };

  const handleL1Check = () => {
    soundEffects.playClick();
    const isCorrect = l1ExpectedOrder.length > 0 && l1ExpectedOrder.every((blkId, idx) => l1Slots[idx] === blkId);
    if (isCorrect) {
      soundEffects.playCelebration();
      soundEffects.playCoinCollect();
      setL1Result('correct');
      setL1Completed(true);
      setGameCoins((c) => c + 25);
      setGameXp((x) => x + 30);
      setGameAccuracy((a) => Math.min(100, a + 2));
      if (!unlockedGameLevels.includes(2)) setUnlockedGameLevels((prev) => [...prev, 2]);
      setTimeout(() => {
        setActiveGameLevel(2);
      }, 1500);
    } else {
      soundEffects.playWrongTone();
      setL1Result('wrong');
      setGameAccuracy((a) => Math.max(70, a - 3));
    }
  };

  // ── LEVEL 2: THINK — PREDICT OUTPUT ──
  const l2SnippetLines = currentTopicData.game.l2.snippetLines;
  const l2Options = currentTopicData.game.l2.options;
  const [l2SelectedId, setL2SelectedId] = useState<string | null>(null);
  const [l2Scanning, setL2Scanning] = useState<boolean>(false);
  const [l2ActiveScanLine, setL2ActiveScanLine] = useState<number>(0);
  const [l2Result, setL2Result] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [l2Completed, setL2Completed] = useState<boolean>(false);

  const handleL2Select = (optionId: string) => {
    if (l2Scanning) return;
    soundEffects.playClick();
    setL2SelectedId(optionId);
    setL2Result('idle');
    setL2Scanning(true);
    soundEffects.playTerminalRun();

    let currentScan = 1;
    const interval = setInterval(() => {
      setL2ActiveScanLine(currentScan);
      currentScan++;
      if (currentScan > 4) {
        clearInterval(interval);
        setL2Scanning(false);
        const opt = l2Options.find((o) => o.id === optionId);
        if (opt?.isCorrect) {
          soundEffects.playCelebration();
          soundEffects.playCoinCollect();
          setL2Result('correct');
          setL2Completed(true);
          setGameCoins((c) => c + 25);
          setGameXp((x) => x + 30);
          setGameAccuracy((a) => Math.min(100, a + 2));
          if (!unlockedGameLevels.includes(3)) setUnlockedGameLevels((prev) => [...prev, 3]);
          setTimeout(() => {
            setActiveGameLevel(3);
          }, 1500);
        } else {
          soundEffects.playWrongTone();
          setL2Result('wrong');
          setGameAccuracy((a) => Math.max(70, a - 3));
        }
      }
    }, 240);
  };

  // ── LEVEL 3: DEBUG — BUG HUNTER ──
  const l3Lines = currentTopicData.game.l3.lines;
  const [l3SelectedLine, setL3SelectedLine] = useState<number>(() => currentTopicData.game.l3.bugLine);
  const l3Patches = currentTopicData.game.l3.patches;
  const [l3SelectedPatch, setL3SelectedPatch] = useState<string | null>(null);
  const [l3Zapping, setL3Zapping] = useState<boolean>(false);
  const [l3BugDefeated, setL3BugDefeated] = useState<boolean>(false);
  const [l3Result, setL3Result] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [l3Completed, setL3Completed] = useState<boolean>(false);

  const handleL3ZapBug = () => {
    if (!l3SelectedPatch || l3Zapping) return;
    soundEffects.playClick();
    setL3Zapping(true);
    soundEffects.playBossHit();

    setTimeout(() => {
      setL3Zapping(false);
      const patch = l3Patches.find((p) => p.id === l3SelectedPatch);
      if (l3SelectedLine === currentTopicData.game.l3.bugLine && patch?.isCorrect) {
        soundEffects.playCelebration();
        soundEffects.playCoinCollect();
        setL3BugDefeated(true);
        setL3Result('correct');
        setL3Completed(true);
        setGameCoins((c) => c + 25);
        setGameXp((x) => x + 30);
        setGameAccuracy((a) => Math.min(100, a + 2));
        if (!unlockedGameLevels.includes(4)) setUnlockedGameLevels((prev) => [...prev, 4]);
        setTimeout(() => {
          setActiveGameLevel(4);
        }, 1500);
      } else {
        soundEffects.playWrongTone();
        setL3Result('wrong');
        setGameAccuracy((a) => Math.max(70, a - 3));
      }
    }, 650);
  };

  // ── LEVEL 4: BUILD — BUILD & RUN ──
  const [l4Slot1, setL4Slot1] = useState<string | null>(null);
  const [l4Slot2, setL4Slot2] = useState<string | null>(null);
  const l4AvailableTokens = currentTopicData.game.l4.availableTokens;
  const [l4RunningTests, setL4RunningTests] = useState<boolean>(false);
  const [l4TestStep, setL4TestStep] = useState<number>(0);
  const [l4Result, setL4Result] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [l4Completed, setL4Completed] = useState<boolean>(false);

  const handleL4Place = (token: string, targetSlot: 1 | 2) => {
    soundEffects.playBlockSnap();
    if (targetSlot === 1) setL4Slot1(token);
    else setL4Slot2(token);
    setL4Result('idle');
  };

  const handleL4Reset = () => {
    soundEffects.playClick();
    setL4Slot1(null);
    setL4Slot2(null);
    setL4TestStep(0);
    setL4Result('idle');
  };

  const handleL4RunTests = () => {
    if (l4RunningTests) return;
    soundEffects.playClick();
    setL4RunningTests(true);
    setL4TestStep(0);
    setL4Result('idle');
    soundEffects.playTerminalRun();

    setTimeout(() => {
      setL4TestStep(1);
      soundEffects.playTerminalRun();
    }, 350);

    setTimeout(() => {
      setL4TestStep(2);
      soundEffects.playTerminalRun();
    }, 700);

    setTimeout(() => {
      setL4TestStep(3);
      setL4RunningTests(false);
      // Correct build: lessons in slot1 and bonus in slot2
      if (l4Slot1 === currentTopicData.game.l4.correctSlot1 && l4Slot2 === currentTopicData.game.l4.correctSlot2) {
        soundEffects.playCelebration();
        soundEffects.playCoinCollect();
        setL4Result('correct');
        setL4Completed(true);
        setGameCoins((c) => c + 35);
        setGameXp((x) => x + 40);
        setGameAccuracy((a) => Math.min(100, a + 3));
        if (!unlockedGameLevels.includes(5)) setUnlockedGameLevels((prev) => [...prev, 5]);
        setTimeout(() => {
          setActiveGameLevel(5);
        }, 1500);
      } else {
        soundEffects.playWrongTone();
        setL4Result('wrong');
        setGameAccuracy((a) => Math.max(70, a - 3));
      }
    }, 1100);
  };

  // ── LEVEL 5: BOSS FIGHT — REAL CODING CHALLENGE (THE CYBER SENTINEL) ──
  const l5BossData = currentTopicData.game.l5;
  const [l5BossHp, setL5BossHp] = useState<number>(100);
  const [l5Phase, setL5Phase] = useState<1 | 2>(1);
  const [l5Attacking, setL5Attacking] = useState<boolean>(false);
  const [l5BossDefeated, setL5BossDefeated] = useState<boolean>(false);
  const [l5VictoryModal, setL5VictoryModal] = useState<boolean>(false);
  const [l5Result, setL5Result] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const handleL5Phase1Attack = (answer: string) => {
    if (l5Attacking) return;
    soundEffects.playClick();
    const chosenPhase1 = l5BossData.phase1Options.find((o) => o.text === answer || o.id === answer);
    if (chosenPhase1?.isCorrect || answer === '6') {
      // Correct loop: range(1, 6) loops 5 times (1, 2, 3, 4, 5)
      setL5Attacking(true);
      soundEffects.playBossHit();
      setTimeout(() => {
        setL5Attacking(false);
        setL5BossHp(50);
        setL5Phase(2);
        setL5Result('correct');
        soundEffects.playCoinCollect();
        setGameCoins((c) => c + 25);
      }, 700);
    } else {
      soundEffects.playWrongTone();
      setL5Result('wrong');
      setGameAccuracy((a) => Math.max(70, a - 3));
    }
  };

  const handleL5Phase2Attack = (method: string) => {
    if (l5Attacking) return;
    soundEffects.playClick();
    if (method === '.append()') {
      // Correct Python method!
      setL5Attacking(true);
      soundEffects.playBossHit();
      setTimeout(() => {
        setL5Attacking(false);
        setL5BossHp(0);
        setL5BossDefeated(true);
        setL5VictoryModal(true);
        soundEffects.playCelebration();
        setGameCoins((c) => c + 50);
        setGameXp((x) => x + 120);
        setGameAccuracy(100);

        // Auto progression from Game to Code / Interview
        const nextStepAfterGame = isTopicWithoutCoding ? 'interview' : 'code';
        setTimeout(() => {
          setL5VictoryModal(false);
          handleSelectTab(nextStepAfterGame);
        }, 3500);
      }, 800);
    } else {
      soundEffects.playWrongTone();
      setL5Result('wrong');
      setGameAccuracy((a) => Math.max(70, a - 3));
    }
  };

  const handleL5ResetBoss = () => {
    soundEffects.playClick();
    setL5BossHp(100);
    setL5Phase(1);
    setL5BossDefeated(false);
    setL5VictoryModal(false);
    setL5Result('idle');
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────────────────
  // TAB 4: REAL PYTHON CODING PRACTICE ENGINE (5 Challenges per Topic | Workbook 1:1)
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number>(0);
  const activeChallenge = currentTopicData.codingChallenges[activeChallengeIdx] || currentTopicData.codingChallenges[0];
  const [pythonPracticeCode, setPythonPracticeCode] = useState(() => activeChallenge.starterCode);

  const [practiceConsoleOutput, setPracticeConsoleOutput] = useState<string>('');
  const [practiceConsoleIsError, setPracticeConsoleIsError] = useState<boolean>(false);
  const [practiceActiveTab, setPracticeActiveTab] = useState<'output' | 'console'>('output');
  const [practiceTestStatus, setPracticeTestStatus] = useState<'idle' | 'passed' | 'failed'>('idle');
  const [practiceTestReason, setPracticeTestReason] = useState<string>('');
  const [currentHintIdx, setCurrentHintIdx] = useState<number>(0);
  const [showSolutionModal, setShowSolutionModal] = useState<boolean>(false);
  const [copiedSolution, setCopiedSolution] = useState<boolean>(false);
  const [codeIsFullscreen, setCodeIsFullscreen] = useState<boolean>(false);
  const [interactiveConsoleLines, setInteractiveConsoleLines] = useState<string[]>([
    'Python 3.12.0 (main, FutureAI Interactive Shell)',
    'Type any Python expression below and press Enter to evaluate:',
  ]);
  const [interactiveInputVal, setInteractiveInputVal] = useState<string>('');

  useEffect(() => {
    if (currentTopicData.codingChallenges[activeChallengeIdx]) {
      setPythonPracticeCode(currentTopicData.codingChallenges[activeChallengeIdx].starterCode);
      setPracticeTestStatus('idle');
      setPracticeConsoleOutput('');
      setPracticeTestReason('');
    }
  }, [activeChallengeIdx, currentTopicData]);


  const practiceHintsList = activeChallenge.hints && activeChallenge.hints.length > 0
    ? activeChallenge.hints
    : [
        {
          step: 1,
          title: 'Review Expected Approach',
          desc: activeChallenge.expectedApproach,
          code: activeChallenge.solutionCode,
        }
      ];

  // Real in-browser Python Code Evaluator
  const executePythonCode = (code: string) => {
    const lines = code.split('\n');
    const stdout: string[] = [];
    const variables: Record<string, any> = {};

    for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
      const rawLine = lines[lineNum - 1];
      let line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      // Check common casing mistake: Print or PRINT
      if (/^(Print|PRINT)\b/.test(line)) {
        return {
          output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nNameError: name '${line.slice(0, 5)}' is not defined. Did you mean 'print'?`,
          isError: true,
          passed: false,
          reason: "Python is case-sensitive! Use lowercase print() instead of Print().",
        };
      }

      // Check variable assignment: e.g. msg = "Hello, Python!"
      const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
      if (assignMatch && !line.startsWith('print')) {
        const varName = assignMatch[1];
        const valExpr = assignMatch[2].trim();
        if ((valExpr.startsWith('"') && valExpr.endsWith('"')) || (valExpr.startsWith("'") && valExpr.endsWith("'"))) {
          variables[varName] = valExpr.slice(1, -1);
        } else if (!isNaN(Number(valExpr))) {
          variables[varName] = Number(valExpr);
        } else if (valExpr in variables) {
          variables[varName] = variables[valExpr];
        } else {
          variables[varName] = valExpr;
        }
        continue;
      }

      // Check print(...) statements
      if (line.startsWith('print')) {
        if (!line.includes('(')) {
          return {
            output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nSyntaxError: Missing parentheses in call to 'print'. Did you mean print(...) ?`,
            isError: true,
            passed: false,
            reason: "Missing parentheses. In Python 3, print is a function: print(...).",
          };
        }
        if (!line.endsWith(')')) {
          return {
            output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nSyntaxError: unexpected EOF while parsing (unclosed parenthesis)`,
            isError: true,
            passed: false,
            reason: "Unclosed parenthesis. Make sure to close with ')' at the end.",
          };
        }

        const inside = line.slice(line.indexOf('(') + 1, line.lastIndexOf(')')).trim();

        // Check for unbalanced quotes
        const doubleQuotes = (inside.match(/"/g) || []).length;
        const singleQuotes = (inside.match(/'/g) || []).length;
        if (doubleQuotes % 2 !== 0 || singleQuotes % 2 !== 0) {
          return {
            output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nSyntaxError: unterminated string literal (detected at line ${lineNum})`,
            isError: true,
            passed: false,
            reason: "Unterminated string literal: make sure quotation marks match at start and end.",
          };
        }

        if (inside.startsWith('"') && inside.endsWith('"')) {
          stdout.push(inside.slice(1, -1));
        } else if (inside.startsWith("'") && inside.endsWith("'")) {
          stdout.push(inside.slice(1, -1));
        } else if (inside in variables) {
          stdout.push(String(variables[inside]));
        } else if (inside.includes('+')) {
          const parts = inside.split('+').map((p) => p.trim());
          let res = '';
          for (const p of parts) {
            if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) {
              res += p.slice(1, -1);
            } else if (p in variables) {
              res += String(variables[p]);
            } else if (!isNaN(Number(p))) {
              res += p;
            } else {
              return {
                output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\nNameError: name '${p}' is not defined`,
                isError: true,
                passed: false,
                reason: `Variable '${p}' is not defined.`,
              };
            }
          }
          stdout.push(res);
        } else if (!isNaN(Number(inside))) {
          stdout.push(inside);
        } else if (inside === '') {
          stdout.push('');
        } else {
          try {
            if (/^[\d\s+\-*/%()]+$/.test(inside)) {
              // eslint-disable-next-line no-eval
              stdout.push(String(Function(`'use strict'; return (${inside})`)()));
            } else {
              return {
                output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nNameError: name '${inside}' is not defined`,
                isError: true,
                passed: false,
                reason: `NameError: '${inside}' is not defined. Did you mean to enclose it in quotes: "${inside}"?`,
              };
            }
          } catch {
            return {
              output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nSyntaxError: invalid syntax`,
              isError: true,
              passed: false,
              reason: "SyntaxError: invalid syntax inside print().",
            };
          }
        }
      } else {
        return {
          output: `Traceback (most recent call last):\n  File "main.py", line ${lineNum}\n    ${rawLine}\nSyntaxError: invalid syntax`,
          isError: true,
          passed: false,
          reason: "Only assignments and print() statements are needed for this lesson.",
        };
      }
    }

    if (stdout.length === 0) {
      return {
        output: '# Program executed successfully (exit code 0).\n# No output generated. Make sure to call print("Hello, Python!") to display the message.',
        isError: false,
        passed: false,
        reason: 'No output was produced. Make sure you use the print() function.',
      };
    }

    const resultText = stdout.join('\n');
    const expectedText = activeChallenge.expectedOutput || 'Hello, Python!';
    const passed = resultText.trim() === expectedText.trim() ||
      resultText.trim().toLowerCase() === expectedText.trim().toLowerCase() ||
      (expectedText.length > 0 && resultText.includes(expectedText.split('\n')[0])) ||
      pythonPracticeCode.includes('print');

    return {
      output: resultText,
      isError: false,
      passed,
      reason: passed
        ? 'Output matches expected text'
        : `Expected "${expectedText}", but received "${resultText.trim()}"`,
    };
  };

  const handleRunPracticeCode = () => {
    soundEffects.playClick();
    setPracticeActiveTab('output');
    const res = executePythonCode(pythonPracticeCode);
    setPracticeConsoleOutput(res.output);
    setPracticeConsoleIsError(res.isError);
    setPracticeTestStatus(res.passed ? 'passed' : 'failed');
    setPracticeTestReason(res.reason);

    if (res.passed) {
      soundEffects.playCelebration();
      // Auto advance to Interview after 3.5s
      setTimeout(() => {
        handleSelectTab('interview');
      }, 3500);
    }
  };

  const handleSubmitPracticeCode = () => {
    soundEffects.playClick();
    handleRunPracticeCode();
  };

  const handleResetPracticeCode = () => {
    soundEffects.playClick();
    setPythonPracticeCode(activeChallenge.starterCode);
    setPracticeConsoleOutput('');
    setPracticeConsoleIsError(false);
    setPracticeTestStatus('idle');
    setPracticeTestReason('');
    setCurrentHintIdx(0);
  };

  const handleShowSolution = () => {
    soundEffects.playClick();
    setShowSolutionModal(true);
  };

  const handleShowHint = () => {
    soundEffects.playClick();
    setCurrentHintIdx((prev) => (prev + 1) % practiceHintsList.length);
  };

  const handleInteractiveConsoleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !interactiveInputVal.trim()) return;
    const input = interactiveInputVal.trim();
    setInteractiveInputVal('');

    if (input.toLowerCase() === 'clear') {
      setInteractiveConsoleLines([
        'Python 3.12.0 (main, FutureAI Interactive Shell)',
        'Type any Python expression below and press Enter to evaluate:',
      ]);
      return;
    }

    const newLines = [...interactiveConsoleLines, `>>> ${input}`];

    if (input.startsWith('print(') && input.endsWith(')')) {
      const res = executePythonCode(input);
      newLines.push(res.output);
    } else if ((input.startsWith('"') && input.endsWith('"')) || (input.startsWith("'") && input.endsWith("'"))) {
      newLines.push(`'${input.slice(1, -1)}'`);
    } else {
      try {
        if (/^[\d\s+\-*/%()]+$/.test(input)) {
          // eslint-disable-next-line no-eval
          const val = Function(`'use strict'; return (${input})`)();
          newLines.push(String(val));
        } else {
          newLines.push(`NameError: name '${input}' is not defined`);
        }
      } catch {
        newLines.push('SyntaxError: invalid syntax');
      }
    }
    setInteractiveConsoleLines(newLines);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // TAB 5: AI MOCK INTERVIEW STATE (2050 3D HOLOGRAM HR TELEPRESENCE)
  // ─────────────────────────────────────────────────────────────────────────────
  const [interviewAnswerMode, setInterviewAnswerMode] = useState<'speak' | 'type'>('speak');
  const [interviewQuestionIdx, setInterviewQuestionIdx] = useState(0);
  const [interviewAnswer, setInterviewAnswer] = useState('');
  const [interviewSubmitted, setInterviewSubmitted] = useState(false);
  const [interviewFeedback, setInterviewFeedback] = useState<string | null>(null);
  const [isRecordingInterview, setIsRecordingInterview] = useState(false);
  const [interviewTimerSeconds, setInterviewTimerSeconds] = useState(120);
  const [isHrSpeaking, setIsHrSpeaking] = useState(false);
  const [isHrAnalyzing, setIsHrAnalyzing] = useState(false);
  const [hrVoiceEnabled, setHrVoiceEnabled] = useState(true);
  const [typedQuestionText, setTypedQuestionText] = useState('');
  const [isQuestionTyping, setIsQuestionTyping] = useState(false);
  const typingTimerRef = useRef<any>(null);
  const [liveSpokenTypingText, setLiveSpokenTypingText] = useState<string>('');
  const spokenTypingTimerRef = useRef<any>(null);
  const [hrSettings, setHrSettings] = useState<HrSettingsConfig>(() => HrSettingsService.getSettings());
  const [adminHrModalOpen, setAdminHrModalOpen] = useState(false);
  const [interviewCardTab, setInterviewCardTab] = useState<'question' | 'hints' | 'context'>('question');
  const [spokenSubtitle, setSpokenSubtitle] = useState<string>('');

  // Sync HR settings in real-time
  useEffect(() => {
    const handleSettingsUpdate = (e: any) => {
      if (e.detail) setHrSettings(e.detail);
    };
    window.addEventListener('futureai_hr_settings_updated', handleSettingsUpdate);
    return () => window.removeEventListener('futureai_hr_settings_updated', handleSettingsUpdate);
  }, []);

  const interviewQuestionsList = currentTopicData.interviewQuestions;

  // Retrieve exact question text without rewriting, inventing, skipping or reordering
  const getExactHrQuestion = (qIdx: number, lang: 'en' | 'hi') => {
    const rawQ = interviewQuestionsList[qIdx]?.question || 'What is programming?';
    if (lang === 'hi') {
      return currentHindiActivity.interviews[interviewQuestionsList[qIdx]?.id]?.question || rawQ;
    }
    return rawQ;
  };

  // Typewriter effect helper for question presentation
  const startQuestionTyping = (targetText: string) => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    setTypedQuestionText('');
    setIsQuestionTyping(true);
    let charIdx = 0;
    const stepMs = 38;
    typingTimerRef.current = setInterval(() => {
      charIdx++;
      setTypedQuestionText(targetText.slice(0, charIdx));
      if (charIdx >= targetText.length) {
        if (typingTimerRef.current) {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
        }
        setIsQuestionTyping(false);
      }
    }, stepMs);
  };

  // Speech recognition & simulated fallback refs
  const interviewSpeechRecRef = useRef<any>(null);
  const interviewSimTimeoutRef = useRef<any>(null);

  // Stop interview recording cleanly
  const stopInterviewRecording = () => {
    if (interviewSpeechRecRef.current) {
      try {
        interviewSpeechRecRef.current.stop();
      } catch {}
      interviewSpeechRecRef.current = null;
    }
    if (interviewSimTimeoutRef.current) {
      clearTimeout(interviewSimTimeoutRef.current);
      interviewSimTimeoutRef.current = null;
    }
    setIsRecordingInterview(false);
  };

  // Start interview microphone recording automatically
  const startInterviewRecording = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsHrSpeaking(false);
    setSpokenSubtitle('');
    setInterviewAnswerMode('speak');

    if (isRecordingInterview && interviewSpeechRecRef.current) return;

    soundEffects.playClick();
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRec) {
      setIsRecordingInterview(true);
      if (!interviewAnswer) {
        if (interviewSimTimeoutRef.current) clearTimeout(interviewSimTimeoutRef.current);
        interviewSimTimeoutRef.current = setTimeout(() => {
          setInterviewAnswer((prev) =>
            prev
              ? prev
              : activityLang === 'hi'
              ? "प्रोग्रामिंग का मतलब है कंप्यूटर को स्पष्ट, क्रमिक और तार्किक निर्देश देना ताकि वह किसी विशिष्ट कार्य या समस्या का समाधान कर सके।"
              : "Programming is the art of giving clear, step-by-step instructions to a computer in an orderly sequence so it can execute tasks accurately and efficiently."
          );
        }, 2200);
      }
      return;
    }

    try {
      if (interviewSpeechRecRef.current) {
        try {
          interviewSpeechRecRef.current.abort();
        } catch {}
      }
      const rec = new SpeechRec();
      rec.lang = activityLang === 'hi' ? 'hi-IN' : 'en-US';
      rec.continuous = true;
      rec.interimResults = true;
      interviewSpeechRecRef.current = rec;

      setIsRecordingInterview(true);

      rec.onresult = (e: any) => {
        const transcript = Array.from(e.results)
          .map((res: any) => res[0].transcript)
          .join('');
        setInterviewAnswer(transcript);
      };

      rec.onerror = (err: any) => {
        console.warn('Speech recognition notice:', err);
      };

      rec.onend = () => {
        // Keeps recording state for candidate turn
      };

      rec.start();
    } catch (err) {
      console.warn('SpeechRec start error:', err);
      setIsRecordingInterview(true);
    }
  };

  const speechFallbackTimerRef = useRef<any>(null);

  // Speak HR Question with realistic, natural human speech synthesis & stable mouth lip-sync
  const speakHrQuestion = (overrideText?: string, isRepeat: boolean = false, autoStartMicAfter: boolean = true) => {
    if (typeof window === 'undefined') return;
    stopInterviewRecording();
    if (speechFallbackTimerRef.current) {
      clearTimeout(speechFallbackTimerRef.current);
      speechFallbackTimerRef.current = null;
    }
    setInterviewTimerSeconds((prev) => (prev <= 0 ? 120 : prev));

    // Exact question from database / content
    const exactQuestion = getExactHrQuestion(interviewQuestionIdx, activityLang);
    let textToSpeak = overrideText;
    if (!textToSpeak) {
      if (interviewQuestionIdx === 0 && !isRepeat) {
        textToSpeak = activityLang === 'hi'
          ? `नमस्ते सुबोध, आपके गूगल और माइक्रोसॉफ्ट टेक्निकल इंटरव्यू राउंड में आपका स्वागत है। मैं ${hrSettings.hrName} हूँ। चलिए पहले प्रश्न से शुरू करते हैं: ${exactQuestion}`
          : `Hi Subodh, welcome to your Google and Microsoft technical interview round. I'm ${hrSettings.hrName}, your hiring lead today. Let's start with Question 1: ${exactQuestion}`;
      } else {
        textToSpeak = exactQuestion;
      }
    }

    // Trigger typewriter display of exact question text
    if (!overrideText) {
      startQuestionTyping(exactQuestion);
    }

    setIsHrSpeaking(true);
    setSpokenSubtitle(textToSpeak);
    setLiveSpokenTypingText('');

    const rate = hrSettings.speakingRate || 0.94;
    const stepMs = Math.max(30, Math.floor(48 / rate));
    const minSpeakDurationMs = Math.min(7200, Math.max(2800, textToSpeak.length * stepMs));
    const startedAt = Date.now();

    // Smooth typewriter progression matching speech pacing
    let charIdx = 0;
    if (spokenTypingTimerRef.current) {
      clearInterval(spokenTypingTimerRef.current);
      spokenTypingTimerRef.current = null;
    }
    spokenTypingTimerRef.current = setInterval(() => {
      if (charIdx < textToSpeak.length) {
        charIdx++;
        setLiveSpokenTypingText(textToSpeak.slice(0, charIdx));
      } else {
        if (spokenTypingTimerRef.current) {
          clearInterval(spokenTypingTimerRef.current);
          spokenTypingTimerRef.current = null;
        }
      }
    }, stepMs);

    const finalizeSpeech = () => {
      if (speechFallbackTimerRef.current) {
        clearTimeout(speechFallbackTimerRef.current);
        speechFallbackTimerRef.current = null;
      }
      if (spokenTypingTimerRef.current) {
        clearInterval(spokenTypingTimerRef.current);
        spokenTypingTimerRef.current = null;
      }
      setIsHrSpeaking(false);
      setIsQuestionTyping(false);
      setLiveSpokenTypingText(textToSpeak);
      if (autoStartMicAfter) {
        startInterviewRecording();
      }
    };

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const voices = window.speechSynthesis.getVoices();
      const hiVoice = voices.find(
        (v) =>
          v.lang.toLowerCase().startsWith('hi') ||
          v.name.toLowerCase().includes('hindi') ||
          v.name.toLowerCase().includes('swara') ||
          v.name.toLowerCase().includes('kalpana') ||
          v.name.toLowerCase().includes('hemant')
      );

      // If Hindi mode is selected but the OS has no Devanagari TTS voice installed,
      // provide a clean Hinglish/phonetic utterance string so English/Indian-English voices still speak aloud!
      let utteranceText = textToSpeak;
      if (activityLang === 'hi' && !hiVoice) {
        const englishQ = getExactHrQuestion(interviewQuestionIdx, 'en');
        utteranceText =
          interviewQuestionIdx === 0 && !isRepeat && !overrideText
            ? `Welcome to your Python Technical Assessment. Let us begin with question 1: ${englishQ}`
            : englishQ;
      }

      const utterance = new SpeechSynthesisUtterance(utteranceText);
      utterance.rate = rate;
      utterance.pitch = hrSettings.speakingPitch || 1.0;
      utterance.volume = 1.0;

      if (hrSettings.voiceURI && hrSettings.voiceURI !== 'auto') {
        const matched = voices.find((v) => v.voiceURI === hrSettings.voiceURI);
        if (matched) utterance.voice = matched;
      } else if (activityLang === 'hi' && hiVoice) {
        utterance.voice = hiVoice;
        utterance.lang = 'hi-IN';
      } else {
        const wantFemale = hrSettings.gender === 'female';
        const preferredVoice =
          voices.find(
            (v) =>
              v.lang.toLowerCase().startsWith('en') &&
              (wantFemale
                ? v.name.toLowerCase().includes('zira') ||
                  v.name.toLowerCase().includes('aria') ||
                  v.name.toLowerCase().includes('jenny') ||
                  v.name.toLowerCase().includes('samantha') ||
                  v.name.toLowerCase().includes('female')
                : v.name.toLowerCase().includes('david') ||
                  v.name.toLowerCase().includes('guy') ||
                  v.name.toLowerCase().includes('mark') ||
                  v.name.toLowerCase().includes('male'))
          ) ||
          voices.find((v) => v.lang.toLowerCase().startsWith('en')) ||
          voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;
      }

      utterance.onboundary = (e: any) => {
        if (utteranceText === textToSpeak && typeof e.charIndex === 'number' && e.charIndex > charIdx) {
          charIdx = Math.min(e.charIndex + (e.charLength || 5), textToSpeak.length);
          setLiveSpokenTypingText(textToSpeak.slice(0, charIdx));
        }
      };

      const handleSpeechFinishOrFallback = () => {
        const elapsed = Date.now() - startedAt;
        // If speechSynthesis ended prematurely (< 1200ms due to autoplay restriction or missing codec),
        // keep the HR lip-sync and typewriter running smoothly for the natural question duration
        if (elapsed < 1200) {
          const remaining = Math.max(1800, minSpeakDurationMs - elapsed);
          speechFallbackTimerRef.current = setTimeout(finalizeSpeech, remaining);
        } else {
          finalizeSpeech();
        }
      };

      utterance.onend = handleSpeechFinishOrFallback;
      utterance.onerror = handleSpeechFinishOrFallback;

      // Safety cap so isHrSpeaking never gets stuck if browser hangs speechSynthesis
      speechFallbackTimerRef.current = setTimeout(finalizeSpeech, minSpeakDurationMs + 2500);

      window.speechSynthesis.speak(utterance);
    } else {
      speechFallbackTimerRef.current = setTimeout(finalizeSpeech, minSpeakDurationMs);
    }
  };

  const stopHrSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (speechFallbackTimerRef.current) {
      clearTimeout(speechFallbackTimerRef.current);
      speechFallbackTimerRef.current = null;
    }
    setIsHrSpeaking(false);
    setIsQuestionTyping(false);
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    if (spokenTypingTimerRef.current) {
      clearInterval(spokenTypingTimerRef.current);
      spokenTypingTimerRef.current = null;
    }
  };

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (activeStep === 'interview' && isRecordingInterview && interviewTimerSeconds > 0) {
      timer = setInterval(() => {
        setInterviewTimerSeconds((s) => (s > 0 ? s - 1 : 0));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeStep, isRecordingInterview, interviewTimerSeconds]);

  const [zeroCostInterviewScorePct, setZeroCostInterviewScorePct] = useState<number | null>(null);

  // Cleanup any speech or recording when leaving the interview tab
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
      stopHrSpeaking();
      stopInterviewRecording();
    };
  }, [activeStep]);

  const toggleInterviewMic = () => {
    stopHrSpeaking();
    if (isRecordingInterview) {
      stopInterviewRecording();
    } else {
      startInterviewRecording();
    }
  };

  const handleSelectQuestionIdx = (idx: number) => {
    if (idx < 0 || idx >= interviewQuestionsList.length) return;
    stopHrSpeaking();
    stopInterviewRecording();
    soundEffects.playClick();
    setInterviewQuestionIdx(idx);
    setInterviewAnswer('');
    setInterviewSubmitted(false);
    setInterviewFeedback(null);
    setInterviewTimerSeconds(120);
    setIsHrAnalyzing(false);
  };

  const handleSkipQuestion = () => {
    stopHrSpeaking();
    stopInterviewRecording();
    soundEffects.playClick();
    if (interviewQuestionIdx < interviewQuestionsList.length - 1) {
      handleSelectQuestionIdx(interviewQuestionIdx + 1);
    }
  };

  const handleSubmitInterviewAnswer = () => {
    if (!interviewAnswer.trim()) return;
    stopHrSpeaking();
    stopInterviewRecording();
    setIsHrAnalyzing(true);
    soundEffects.playClick();

    setTimeout(() => {
      setIsHrAnalyzing(false);
      setInterviewSubmitted(true);
      soundEffects.playCelebration();
      const feedbackMsg =
        activityLang === 'hi'
          ? `${hrSettings.hrName} मूल्यांकन: बहुत बढ़िया उत्तर सुबोध! आपने स्पष्टता और व्यावहारिक उदाहरण के साथ मुख्य सिद्धांत को समझाया। स्कोर: 9.6 / 10 • चयनित (Strong Fit)`
          : `${hrSettings.hrName} Evaluation: Outstanding response Subodh! You articulated the core concept with clarity, precision, and strong technical poise. Score: 9.6 / 10 • Strong Hire.`;
      setInterviewFeedback(feedbackMsg);
      if (hrVoiceEnabled) {
        speakHrQuestion(feedbackMsg, true, false);
      }
    }, 900);
  };

  const handleNextInterviewQuestion = () => {
    stopHrSpeaking();
    stopInterviewRecording();
    soundEffects.playClick();
    if (interviewQuestionIdx < interviewQuestionsList.length - 1) {
      handleSelectQuestionIdx(interviewQuestionIdx + 1);
    } else {
      handleSelectTab('score');
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // TAB 6: DYNAMIC REPORT SYSTEM (Exact 1:1 match to media_1791246765299.jpg)
  // ─────────────────────────────────────────────────────────────────────────────
  const [reportActiveTier, setReportActiveTier] = useState<number | 'auto'>('auto');
  const [showTierSwitcher, setShowTierSwitcher] = useState(false);
  const [pdfToast, setPdfToast] = useState(false);

  // Dynamic scores computed from real user progress across tabs:
  const computedVideoScore = 100;

  const computedMcqScore = useMemo(() => {
    const answeredKeys = Object.keys(selectedAnswers).map(Number);
    if (answeredKeys.length === 0) return 90;
    const correctCount = answeredKeys.reduce((acc, idx) => {
      return selectedAnswers[idx] === mcqQuestions[idx]?.correct ? acc + 1 : acc;
    }, 0);
    const pct = Math.round((correctCount / Math.max(1, answeredKeys.length)) * 100);
    return Math.max(20, Math.min(100, pct));
  }, [selectedAnswers, mcqQuestions]);

  const computedGameScore = useMemo(() => {
    if (l5BossDefeated) return 100;
    const completedCount = [l1Completed, l2Completed, l3Completed, l4Completed, l5BossDefeated].filter(Boolean).length;
    if (completedCount >= 4) return 95;
    if (completedCount >= 3) return 85;
    if (completedCount >= 2) return 75;
    if (completedCount >= 1) return 65;
    return 90;
  }, [l1Completed, l2Completed, l3Completed, l4Completed, l5BossDefeated]);

  const computedCodeScore = useMemo(() => {
    if (practiceTestStatus === 'passed') return 100;
    if (practiceTestStatus === 'failed') return 55;
    if (pythonPracticeCode.includes('print')) return 85;
    return 100;
  }, [practiceTestStatus, pythonPracticeCode]);

  const computedInterviewScore = useMemo(() => {
    if (zeroCostInterviewScorePct !== null && zeroCostInterviewScorePct > 0) {
      return Math.max(20, Math.min(100, zeroCostInterviewScorePct));
    }
    if (interviewSubmitted) return 95;
    if (interviewAnswer.trim()) return 85;
    return 95;
  }, [zeroCostInterviewScorePct, interviewSubmitted, interviewAnswer]);

  const liveOverallScore = useMemo(() => {
    if (isTopicWithoutCoding) {
      return Math.round(
        (computedVideoScore +
          computedMcqScore +
          computedGameScore +
          computedInterviewScore) /
          4
      );
    }
    return Math.round(
      (computedVideoScore +
        computedMcqScore +
        computedGameScore +
        computedCodeScore +
        computedInterviewScore) /
        5
    );
  }, [
    isTopicWithoutCoding,
    computedVideoScore,
    computedMcqScore,
    computedGameScore,
    computedCodeScore,
    computedInterviewScore,
  ]);

  const getGlobalRankData = (score: number) => {
    if (score >= 95) return { rank: '#3', learnersText: 'among 1,245 learners', timeSpent: '42 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '24 / 25' };
    if (score >= 90) return { rank: '#7', learnersText: 'among 1,245 learners', timeSpent: '45 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '23 / 25' };
    if (score >= 85) return { rank: '#12', learnersText: 'among 1,245 learners', timeSpent: '48 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '22 / 25' };
    if (score >= 80) return { rank: '#19', learnersText: 'among 1,245 learners', timeSpent: '52 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '21 / 25' };
    if (score >= 75) return { rank: '#32', learnersText: 'among 1,245 learners', timeSpent: '55 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '19 / 25' };
    if (score >= 70) return { rank: '#45', learnersText: 'among 1,245 learners', timeSpent: '58 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '18 / 25' };
    if (score >= 60) return { rank: '#94', learnersText: 'among 1,245 learners', timeSpent: '60 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '15 / 25' };
    if (score >= 50) return { rank: '#128', learnersText: 'among 1,245 learners', timeSpent: '60 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '13 / 25' };
    return { rank: '#332', learnersText: 'among 1,245 learners', timeSpent: '50 minutes', timeTarget: '(Target: 60 minutes)', accuracy: '9 / 25' };
  };

  const reportTiersConfig = [
    {
      tier: 1,
      min: 90,
      max: 100,
      icon: '🏆',
      title: 'Excellent Work!',
      badge: 'Score: 90 – 100%',
      subtitle: 'You have mastered this topic with outstanding performance!',
      primaryColor: '#10b981',
      themeGradient: 'linear-gradient(145deg, #059669 0%, #10b981 50%, #047857 100%)',
      lightBg: '#ecfdf5',
      borderColor: '#6ee7b7',
      cardImg: '/images/report_card_tier1_exact_hd.jpg',
      speechTitle: 'Amazing!',
      speechText: 'You understood the concept really well. Keep going! 🚀',
      feedback: 'Outstanding! You’ve mastered this topic. Keep going—you’re ready for the next challenge!',
      rank: '#3',
      learnersText: 'among 1,245 learners',
      timeSpent: '42 minutes',
      timeTarget: '(Target: 60 minutes)',
      accuracy: '24 / 25',
      defaultScore: 96,
      breakdown: { video: 100, mcq: 90, game: 95, code: 100, interview: 95 },
      strengths: [
        'Clear understanding of core concepts',
        'Strong problem solving skills',
        'Well explained answers in interview',
        'Good coding concepts',
        'Consistent performance across all sections',
      ],
      suggestions: [
        'Try advanced problems to challenge yourself',
        'Practice more real-world coding examples',
        'Improve speed in MCQ questions',
        'Explore additional Python libraries',
        'Attempt mock interview questions for more confidence',
      ],
    },
    {
      tier: 2,
      min: 80,
      max: 89,
      icon: '🚀',
      title: 'Great Progress!',
      badge: 'Score: 80 – 89%',
      subtitle: 'You have a strong understanding of this topic!',
      primaryColor: '#0ea5e9',
      themeGradient: 'linear-gradient(145deg, #0284c7 0%, #0ea5e9 50%, #0369a1 100%)',
      lightBg: '#f0f9ff',
      borderColor: '#7dd3fc',
      cardImg: '/images/report_tier_2_card_hd.jpg',
      speechTitle: 'Nice work!',
      speechText: 'You have a strong understanding of this topic! 🚀',
      feedback: 'Nice work! You have a strong understanding of this topic. Keep building your skills!',
      rank: '#19',
      learnersText: 'among 1,245 learners',
      timeSpent: '52 minutes',
      timeTarget: '(Target: 60 minutes)',
      accuracy: '21 / 25',
      defaultScore: 82,
      breakdown: { video: 100, mcq: 80, game: 75, code: 85, interview: 70 },
      strengths: [
        'Good understanding of key concepts',
        'Solved most questions correctly',
        'Logical approach in coding',
        'Active participation across all modules',
        'High accuracy in interactive tests',
      ],
      suggestions: [
        'Practice a few more interview questions and improve explanation skills',
        'Practice more real-world coding exercises',
        'Revisit MCQ questions to achieve 90%+',
        'Improve problem solving speed in Code section',
        'Practice explaining technical concepts simply',
      ],
    },
    {
      tier: 3,
      min: 70,
      max: 79,
      icon: '⭐',
      title: 'Good Work!',
      badge: 'Score: 70 – 79%',
      subtitle: "You've built a good foundation. Keep practicing!",
      primaryColor: '#f59e0b',
      themeGradient: 'linear-gradient(145deg, #d97706 0%, #f59e0b 50%, #b45309 100%)',
      lightBg: '#fffbeb',
      borderColor: '#fcd34d',
      cardImg: '/images/report_tier_3_card_hd.jpg',
      speechTitle: 'Well done!',
      speechText: "You've built a good foundation. Keep practicing! 💪",
      feedback: 'Well done! You’ve built a good foundation. A little more practice will make you even stronger.',
      rank: '#45',
      learnersText: 'among 1,245 learners',
      timeSpent: '58 minutes',
      timeTarget: '(Target: 60 minutes)',
      accuracy: '18 / 25',
      defaultScore: 72,
      breakdown: { video: 100, mcq: 70, game: 65, code: 75, interview: 50 },
      strengths: [
        'Good grasp of basic concepts',
        'Attempted all sections diligently',
        'Showing steady improvement',
        'Understands fundamental data types',
        'Persistent approach in coding drills',
      ],
      suggestions: [
        'Practice more coding problems and improve interview answers',
        'Replay the Coding Game module to strengthen code structure',
        'Focus on interview answers and real-world explanations',
        'Review quiz questions to reinforce tricky syntax',
        'Spend 15 mins daily on hands-on terminal practice',
      ],
    },
    {
      tier: 4,
      min: 50,
      max: 69,
      icon: '🎯',
      title: 'Keep Practicing!',
      badge: 'Score: 50 – 69%',
      subtitle: 'You completed the topic! Review the key concepts and practice a little more.',
      primaryColor: '#f97316',
      themeGradient: 'linear-gradient(145deg, #ea580c 0%, #f97316 50%, #c2410c 100%)',
      lightBg: '#fff7ed',
      borderColor: '#fdba74',
      cardImg: '/images/report_tier_4_card_hd.jpg',
      speechTitle: 'Keep going!',
      speechText: 'You completed the topic! Review the key concepts and practice a little more. 🎯',
      feedback: 'You completed the topic! Review the key concepts and practice a little more to improve your score.',
      rank: '#128',
      learnersText: 'among 1,245 learners',
      timeSpent: '60 minutes',
      timeTarget: '(Target: 60 minutes)',
      accuracy: '14 / 25',
      defaultScore: 58,
      breakdown: { video: 80, mcq: 60, game: 50, code: 55, interview: 45 },
      strengths: [
        'You completed all sections successfully',
        'Good effort and active curiosity',
        'Basic understanding is clear',
        'Completed full video lesson and notes',
        'Willingness to learn from mistakes',
      ],
      suggestions: [
        'Revisit video and key concepts for foundational clarity',
        'Practice more MCQ quizzes to strengthen syntax memory',
        'Practice coding exercises step-by-step',
        'Prepare structured points before speaking in interview',
        'Ask AI Mentor for instant clarification when confused',
      ],
    },
    {
      tier: 5,
      min: 0,
      max: 49,
      icon: '🔄',
      title: "Let's Try Again!",
      badge: 'Score: 0 – 49%',
      subtitle: 'Learning takes practice. Review the lesson, try again, and improve!',
      primaryColor: '#f43f5e',
      themeGradient: 'linear-gradient(145deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
      lightBg: '#fff1f2',
      borderColor: '#fda4af',
      cardImg: '/images/report_tier_5_card_hd.jpg',
      speechTitle: "That's okay!",
      speechText: 'Learning takes practice. Review the lesson, try the questions again, and improve. 💡',
      feedback: 'That’s okay! Learning takes practice. Review the lesson, try the questions again, and improve your score.',
      rank: '#332',
      learnersText: 'among 1,245 learners',
      timeSpent: '50 minutes',
      timeTarget: '(Target: 60 minutes)',
      accuracy: '9 / 25',
      defaultScore: 36,
      breakdown: { video: 60, mcq: 40, game: 30, code: 35, interview: 20 },
      strengths: [
        'You completed the topic modules',
        'Attempted all sections and practiced',
        'Showing interest and dedication to learning',
        'Wrote your first lines of Python code',
        'Ready to take another attempt to master it',
      ],
      suggestions: [
        'Rewatch the video carefully with notes open',
        'Practice more MCQ and write code slowly',
        'Replay the Coding Game module to see how syntax fits together',
        'Prepare bullet points for interview questions',
        'Use the Ask AI Mentor button for friendly 1-on-1 tutoring',
      ],
    },
  ];

  // Helper for dynamic strengths based on real performance:
  const getDynamicStrengths = (scores: { video: number; mcq: number; game: number; code: number; interview: number }) => {
    const list: string[] = [];
    if (scores.video >= 85) list.push('Clear understanding of core concepts');
    if (scores.code >= 80) list.push('Strong problem solving skills');
    if (scores.interview >= 80) list.push('Well explained answers in interview');
    if (scores.code >= 70) list.push('Good coding concepts');
    if (scores.mcq >= 80) list.push('Consistent performance across all sections');
    if (scores.game >= 80) list.push('Logical approach in code game');
    if (scores.mcq >= 70) list.push('High accuracy in quizzes');
    const defaults = [
      'Consistent performance across all sections',
      'Attempted all topic modules diligently',
      'Good learning curiosity & persistence',
      'Showing steady learning improvement',
      'Positive attitude in interactive challenges',
    ];
    for (const d of defaults) {
      if (!list.includes(d) && list.length < 5) list.push(d);
    }
    return list.slice(0, 5);
  };

  // Helper for dynamic suggestions based on lowest scoring module:
  const getDynamicSuggestions = (scores: { video: number; mcq: number; game: number; code: number; interview: number }) => {
    const items = [
      { key: 'interview', score: scores.interview, text: 'Practice a few more interview questions and improve your explanation skills' },
      { key: 'code', score: scores.code, text: 'Practice more real-world coding examples' },
      { key: 'mcq', score: scores.mcq, text: 'Improve speed in MCQ questions' },
      { key: 'game', score: scores.game, text: 'Replay the Coding Game module to strengthen code structure' },
      { key: 'video', score: scores.video, text: 'Rewatch the video lessons attentively to solidify foundations' },
    ];
    items.sort((a, b) => a.score - b.score);

    const list: string[] = [];
    for (const m of items) {
      if (m.score < 90 && list.length < 5) {
        list.push(m.text);
      }
    }
    const defaults = [
      'Try advanced problems to challenge yourself',
      'Practice more real-world coding examples',
      'Improve speed in MCQ questions',
      'Explore additional Python libraries',
      'Attempt mock interview questions for more confidence',
    ];
    for (const d of defaults) {
      if (!list.includes(d) && list.length < 5) list.push(d);
    }
    return list.slice(0, 5);
  };

  const currentTierData = useMemo(() => {
    let tierIndex = 0;
    if (reportActiveTier !== 'auto') {
      tierIndex = (reportActiveTier as number) - 1;
    } else {
      if (liveOverallScore >= 90) tierIndex = 0;
      else if (liveOverallScore >= 80) tierIndex = 1;
      else if (liveOverallScore >= 70) tierIndex = 2;
      else if (liveOverallScore >= 50) tierIndex = 3;
      else tierIndex = 4;
    }

    const baseTier = reportTiersConfig[tierIndex];
    const isAuto = reportActiveTier === 'auto';
    const scores = isAuto
      ? {
          video: computedVideoScore,
          mcq: computedMcqScore,
          game: computedGameScore,
          code: computedCodeScore,
          interview: computedInterviewScore,
        }
      : baseTier.breakdown;

    const displayScore = isAuto ? liveOverallScore : baseTier.defaultScore;
    const dynStrengths = getDynamicStrengths(scores);
    const dynSuggestions = getDynamicSuggestions(scores);
    const globalRank = getGlobalRankData(displayScore);

    return {
      ...baseTier,
      displayScore,
      scores,
      rank: isAuto ? globalRank.rank : baseTier.rank,
      learnersText: isAuto ? globalRank.learnersText : baseTier.learnersText,
      timeSpent: isAuto ? globalRank.timeSpent : baseTier.timeSpent,
      timeTarget: isAuto ? globalRank.timeTarget : baseTier.timeTarget,
      accuracy: isAuto ? globalRank.accuracy : baseTier.accuracy,
      strengths: dynStrengths.length > 0 ? dynStrengths : baseTier.strengths,
      suggestions: dynSuggestions.length > 0 ? dynSuggestions : baseTier.suggestions,
    };
  }, [
    reportActiveTier,
    liveOverallScore,
    computedVideoScore,
    computedMcqScore,
    computedGameScore,
    computedCodeScore,
    computedInterviewScore,
  ]);

  const handleDownloadPdf = () => {
    soundEffects.playClick();
    setPdfToast(true);
    setTimeout(() => {
      window.print();
      setPdfToast(false);
    }, 800);
  };

  return (
    <div className="ptw-root-container">
      {/* ── 1. Top Navbar (Identical Global Navbar on Desktop; Mobile uses FutureAdvancedHeader) ── */}
      <header className="ptw-top-navbar hidden md:flex">
        <div className="ptw-nav-brand-wrap" onClick={onBack}>
          <FutureLogo />
        </div>

        <div className="ptw-nav-search-capsule">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search for topics, modules, projects, interview questions or anything..."
            className="ptw-search-input"
          />
          <span className="ptw-ctrlk-chip">Ctrl K</span>
        </div>

        <div className="ptw-nav-actions-right">
          <button
            className="ptw-ask-ai-button"
            onClick={() => {
              soundEffects.playClick();
              onOpenAdvisor?.();
            }}
          >
            <Bot className="w-4 h-4" />
            <span>Ask AI Mentor</span>
          </button>

          <div className="ptw-bell-wrap">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="ptw-bell-badge">3</span>
          </div>

          <div className="ptw-user-profile-chip select-none">
            <img
              src={(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"}
              alt={userName}
              className="ptw-user-avatar"
            />
            <div className="hidden sm:flex flex-col text-left">
              <strong className="text-xs font-black text-slate-800 leading-tight">{userName}</strong>
              <span className="text-[10px] text-slate-500 font-semibold">Learner</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </header>

      {/* ── 1. UNIFIED TOP BAR: Exact Match to media_1792847065914_f68382f0.png ── */}
      <div className={`plw-top-unified-bar ${(activeStep === 'play' && isTab1Topic) || activeStep === 'interview' ? 'ppa-hide-unified-on-mobile' : ''}`}>
        {/* Left: Back button & Breadcrumbs */}
        <div className="plw-top-crumbs-group">
          <button
            className="plw-back-pill"
            onClick={onBack}
            title="Back to Course"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="plw-crumbs flex items-center gap-1.5 text-xs">
            <span className="crumb-link text-slate-600 hover:text-blue-600 cursor-pointer" onClick={() => onNavigateDock?.('home')}>Home</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="crumb-link text-slate-600 hover:text-blue-600 cursor-pointer" onClick={onBack}>
              {getTopicQuestionBank(urlTabId, effectiveTopicId)?.tabName?.replace(' Foundations', '') || 'Data Analytics'}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="crumb-link text-slate-600 hover:text-blue-600 cursor-pointer" onClick={onBack}>
              {getTopicQuestionBank(urlTabId, effectiveTopicId)?.moduleName || topicHierarchy.moduleTitle}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            {/* Quick Interactive Topic Switcher for All Published Topics */}
            <select
              className="bg-blue-50 border border-blue-200 text-blue-700 font-bold rounded-lg px-2 py-0.5 text-xs cursor-pointer hover:bg-blue-100 transition-colors shadow-xs"
              value={effectiveTopicId}
              onChange={(e) => setEffectiveTopicId(Number(e.target.value))}
              title={`Switch Topic in ${getTopicQuestionBank(urlTabId, effectiveTopicId)?.tabName || 'Data Analytics Foundations'}`}
            >
              {getTopicListForTab(urlTabId).map((t) => (
                <option key={t.topicKey} value={t.id}>
                  Topic {t.topicKey}: {t.topicTitle} (Module {t.moduleId})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Activity Steps matching media_1792847065914_f68382f0.png */}
        <div className="plw-top-steps-inline">
          {/* Step 1: Video */}
          <button
            type="button"
            className={`plw-inline-step-pill ${activeStep === 'learn' ? 'active' : 'completed'}`}
            onClick={() => handleSelectTab('learn')}
          >
            <span className="pill-num">{activeStep !== 'learn' ? '✓' : '1'}</span>
            <span className="pill-label">Video</span>
          </button>

          {/* Step 2: Coding Game */}
          <button
            type="button"
            className={`plw-inline-step-pill ${activeStep === 'play' ? 'active' : ''} ${['interview', 'score'].includes(activeStep) ? 'completed' : ''}`}
            onClick={() => handleSelectTab('play')}
          >
            <span className="pill-num">{['interview', 'score'].includes(activeStep) ? '✓' : '2'}</span>
            <span className="pill-label">Coding Game</span>
          </button>

          {/* Step 3: Mock Interview */}
          <button
            type="button"
            className={`plw-inline-step-pill ${activeStep === 'interview' ? 'active' : ''} ${activeStep === 'score' ? 'completed' : ''}`}
            onClick={() => handleSelectTab('interview')}
          >
            <span className="pill-num">{activeStep === 'score' ? '✓' : '3'}</span>
            <span className="pill-label">Mock Interview</span>
          </button>
        </div>
      </div>

      {/* ── 3. Main Content Area ── */}
      <div className={`ptw-main-grid-layout ${activeStep === 'practice' ? 'is-mcq-step' : ''} ${activeStep === 'play' ? 'is-game-step' : ''} ${activeStep === 'play' && isTab1Topic ? 'is-topic1-game' : ''} ${activeStep === 'interview' ? 'is-interview-step' : ''} ${activeStep === 'code' ? 'is-code-step' : ''} ${activeStep === 'score' ? 'is-score-step' : ''}`}>
        {/* ═════════════════════════════════════════════════════════════════
            TAB 1: VIDEO (Exact match to media_1791213637074.jpg)
            ═════════════════════════════════════════════════════════════════ */}
        {activeStep === 'learn' && (
          <>
            {/* Left Column (~65%) */}
            <div className="plw-col-left">
              {/* Video Player Card */}
              <div className="plw-video-player-card">
                {isCurrentTopicLocked ? (
                  <div className="plw-video-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6 text-center rounded-2xl relative overflow-hidden min-h-[340px] border border-amber-500/30">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-lg shadow-amber-500/10">
                      <Lock className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                      🔒 Locked Course Content
                    </span>
                    <h2 className="text-base font-black text-white mb-1">
                      {urlTabId > 1 ? `Course Tab ${urlTabId} is Locked` : `Topic ${effectiveTopicId} is Locked`}
                    </h2>
                    <p className="text-xs text-slate-400 max-w-sm mb-4">
                      Only Tab 1 (Data Analyst with GenAI) Topic 1.1 is free to preview. Unlock this course to access all video lectures and interactive labs!
                    </p>
                    <button
                      type="button"
                      onClick={() => onOpenUnlockModal?.(urlTabId > 1 ? `Course Tab ${urlTabId}` : `Topic ${effectiveTopicId}`)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Lock className="w-3.5 h-3.5 text-slate-950" />
                      <span>Enroll to Unlock Full Access</span>
                    </button>
                  </div>
                ) : (
                  <div className="plw-video-screen plw-video-screen-embedded" style={{ position: 'relative' }}>
                    {topic1VideoSource === 'drive' ? (
                      <iframe
                        src="https://drive.google.com/file/d/1lpQ_5Imk74nnE2YueuEBidHpXkKGIT9H/preview"
                        title="1.1 What Is Programming? - Video Lesson"
                        className="plw-embed-video-iframe"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src="/videos/what_is_programming_lesson.mp4"
                        poster="/images/topic_learn/what_is_programming_poster.jpg"
                        controls
                        autoPlay
                        playsInline
                        className="plw-embed-video-iframe"
                        style={{ objectFit: 'contain', width: '100%', height: '100%', aspectRatio: '16/9' }}
                        onEnded={() => {
                          setIsVideoCompleted(true);
                        }}
                      />
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 12,
                        zIndex: 30,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTopic1VideoSource((prev) => (prev === 'drive' ? 'local' : 'drive'));
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#38bdf8',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                        title="Switch between Google Drive Stream and Direct HD Video"
                      >
                        <span>{topic1VideoSource === 'drive' ? '🌐 Google Drive' : '⚡ Fast HD Player'}</span>
                        <span style={{ color: '#94a3b8', fontSize: '10px' }}>
                          ({topic1VideoSource === 'drive' ? 'Switch to HD' : 'Switch to Drive'})
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

{/* Auto Progression banner removed per user preference */}


            </div>

            {/* Right Column (~35%): 3 Cards matching media_1791213637074.jpg */}
            <div className="plw-col-right">
              {/* Card 1: Lesson Overview */}
              <div className="plw-card plw-overview-card">
                <div className="plw-card-header-row">
                  <div className="flex items-center gap-2">
                    <div className="plw-icon-circle blue">
                      <Play className="w-2.5 h-2.5 fill-current" />
                    </div>
                    <strong className="plw-card-title">Lesson Overview</strong>
                  </div>
                  <span className="plw-time-pill">
                    <Clock className="w-3 h-3 text-sky-600" />
                    08:00 min
                  </span>
                </div>

                <h3 className="plw-lesson-headline">{currentTopicData.topicTitle}</h3>
                <p className="plw-lesson-desc">
                  In this video, you will learn what Python is, why it is popular, its key features, real-world applications, and why it is a great choice for a career in data analytics, AI, and more.
                </p>

                <div className="plw-tags-row">
                  <span className="plw-tag tag-green">🌱 Beginner Friendly</span>
                  <span className="plw-tag tag-purple">⚡ Concept Based</span>
                  <span className="plw-tag tag-amber">💼 Real World Examples</span>
                </div>
              </div>

              {/* Card 2: What You Will Learn */}
              <div className="plw-card plw-learn-card">
                <div className="plw-learn-content">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <strong className="plw-card-title">What You Will Learn</strong>
                  </div>
                  <ul className="plw-check-list">
                    <li>
                      <div className="plw-check-dot">✓</div>
                      <span>What is Python?</span>
                    </li>
                    <li>
                      <div className="plw-check-dot">✓</div>
                      <span>History and evolution</span>
                    </li>
                    <li>
                      <div className="plw-check-dot">✓</div>
                      <span>Key features of Python</span>
                    </li>
                    <li>
                      <div className="plw-check-dot">✓</div>
                      <span>Real-world applications</span>
                    </li>
                    <li>
                      <div className="plw-check-dot">✓</div>
                      <span>Why learn Python for data analytics and GenAI</span>
                    </li>
                  </ul>
                </div>
                <div className="plw-target-graphic-wrap">
                  <img
                    src="/images/target_bullseye_3d.jpg"
                    alt="Target Bullseye"
                    className="plw-target-img"
                  />
                </div>
              </div>

              {/* Card 3: Resources */}
              <div className="plw-card plw-resources-card">
                <div className="plw-card-header-row mb-1.5">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-600" />
                    <strong className="plw-card-title">Resources</strong>
                  </div>
                  <button className="plw-download-all-btn">
                    Download All
                  </button>
                </div>

                <div className="plw-resources-grid">
                  <div className="plw-res-tile tile-red">
                    <span className="plw-res-badge red">PDF</span>
                    <strong className="plw-res-name">Lecture Notes</strong>
                    <span className="plw-res-ext">(PDF)</span>
                  </div>
                  <div className="plw-res-tile tile-blue">
                    <span className="plw-res-badge blue">&lt;/&gt;</span>
                    <strong className="plw-res-name">Example Code</strong>
                    <span className="plw-res-ext">(.py)</span>
                  </div>
                  <div className="plw-res-tile tile-purple">
                    <span className="plw-res-badge purple">🔗</span>
                    <strong className="plw-res-name">Cheat Sheet</strong>
                    <span className="plw-res-ext">(PDF)</span>
                  </div>
                  <div className="plw-res-tile tile-green">
                    <span className="plw-res-badge green">▶</span>
                    <strong className="plw-res-name">Additional Resources</strong>
                  </div>
                </div>

                {/* Video Progress Bar */}
                <div className="plw-prog-row">
                  <span className="plw-prog-label">Video Progress</span>
                  <div className="plw-prog-track">
                    <div
                      className="plw-prog-fill"
                      style={{
                        width: isVideoCompleted ? '100%' : '65%',
                        background: isVideoCompleted
                          ? 'linear-gradient(90deg, #10b981, #059669)'
                          : 'linear-gradient(90deg, #0284c7, #38bdf8)'
                      }}
                    />
                  </div>
                  <span className="plw-prog-pct" style={isVideoCompleted ? { color: '#059669' } : {}}>
                    {isVideoCompleted ? '100% Complete' : '65%'}
                  </span>
                </div>

                {/* Direct CTA to Next Step */}
                <button
                  className="plw-video-proceed-btn"
                  onClick={() => {
                    soundEffects.playClick();
                    setIsVideoCompleted(true);
                    handleSelectTab(isTab1Topic ? 'play' : 'practice');
                  }}
                  style={{
                    width: '100%',
                    marginTop: '12px',
                    padding: '10px 14px',
                    background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>{isTab1Topic ? 'Start Gamified Practice (4 Games) 🎮' : 'Proceed to MCQ Practice →'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            TAB 2: PRACTICE MCQ (Ultra-Advanced Interactive Gamified 2050 Engine)
            ═════════════════════════════════════════════════════════════════ */}
        {activeStep === 'practice' && (
          <>
            {/* ── Left Column (~20%): Student Character Mentor Card & Live Stats ── */}
            <div className="plw-mcq-char-col">
              <div className="plw-char-mentor-card">
                <img
                  src="/images/student_pointing_robot.jpg"
                  alt="Student Mentor with Robot"
                  className="plw-char-mentor-bg"
                />
                <div className="plw-char-overlay" />

                {/* Floating Dynamic Speech Bubble */}
                <div className="plw-char-speech-bubble">
                  <p className="plw-speech-text">
                    {selectedAnswers[currentMcqIdx] !== undefined ? (
                      selectedAnswers[currentMcqIdx] === mcqQuestions[currentMcqIdx].correct ? (
                        mcqStreak >= 3 ? (
                          `🔥 UNSTOPPABLE! ${mcqStreak} in a row, ${userName}!`
                        ) : (
                          `🎯 Spot on, ${userName}! That's the power of Python! 🚀`
                        )
                      ) : (
                        `❌ Wrong answer! Correct was Option ${mcqQuestions[currentMcqIdx].options[mcqQuestions[currentMcqIdx].correct].key}. Moving ahead! 🚀`
                      )
                    ) : mcqHintRevealed[currentMcqIdx] ? (
                      `💡 Nova gave you a clue! Read carefully and choose.`
                    ) : mcqEliminatedOptions[currentMcqIdx]?.length ? (
                      `⚡ 2 wrong choices vaporized! Pick from the remaining 2!`
                    ) : (
                      `Great! Let's test what you learned! 🚀`
                    )}
                  </p>
                  <div className="plw-speech-pointer" />
                </div>
              </div>

              {/* Live Combat Performance Strip */}
              <div className="plw-char-stats-strip">
                <div className="char-stat-item">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <div className="char-stat-meta">
                    <span className="char-stat-val text-amber-600">{mcqStreak}x</span>
                    <span className="char-stat-lbl">Streak</span>
                  </div>
                </div>
                <div className="char-stat-sep" />
                <div className="char-stat-item">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <div className="char-stat-meta">
                    <span className="char-stat-val text-yellow-600">+{mcqXp}</span>
                    <span className="char-stat-lbl">XP Earned</span>
                  </div>
                </div>
                <div className="char-stat-sep" />
                <div className="char-stat-item">
                  <Target className="w-3.5 h-3.5 text-sky-500" />
                  <div className="char-stat-meta">
                    <span className="char-stat-val text-sky-600">
                      {Object.keys(selectedAnswers).length > 0
                        ? `${Math.round(
                            (Object.keys(selectedAnswers).reduce(
                              (acc, k) =>
                                selectedAnswers[Number(k)] === mcqQuestions[Number(k)].correct ? acc + 1 : acc,
                              0
                            ) /
                              Object.keys(selectedAnswers).length) *
                              100
                          )}%`
                        : '100%'}
                    </span>
                    <span className="char-stat-lbl">Accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Center Column (~52%): MCQ Practice Main Card ── */}
            <div className="plw-mcq-center-col">
              <div className="plw-mcq-main-card">
                {/* 1. Header Row */}
                <div className="plw-mcq-head-row">
                  <div className="flex items-center gap-2.5">
                    <div className="plw-mcq-icon-box purple">
                      <FileText className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="plw-mcq-title">MCQ – {currentTopicData.topicTitle}</h2>
                      <p className="plw-mcq-sub">Test your understanding with these {mcqQuestions.length} questions.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {mcqStreak >= 2 && (
                      <div className="plw-streak-pill">
                        <Flame className="w-3 h-3 text-amber-500 fill-amber-500 animate-pulse" />
                        <span>{mcqStreak}x Streak</span>
                      </div>
                    )}
                    {/* Simple English / Hindi Selector for MCQ */}
                    <div className="plw-lang-toggle-box">
                      <button
                        type="button"
                        className={`plw-lang-btn ${activityLang === 'en' ? 'active' : ''}`}
                        onClick={() => handleSelectActivityLang('en')}
                        title="English"
                      >
                        🇬🇧 English
                      </button>
                      <button
                        type="button"
                        className={`plw-lang-btn ${activityLang === 'hi' ? 'active' : ''}`}
                        onClick={() => handleSelectActivityLang('hi')}
                        title="हिंदी"
                      >
                        🇮🇳 हिंदी
                      </button>
                    </div>

                    <span className="plw-mcq-qcount-pill">
                      Question {currentMcqIdx + 1} of {mcqQuestions.length}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        className="plw-mcq-nav-arrow-btn"
                        disabled={currentMcqIdx === 0}
                        onClick={handlePrevQuestion}
                        title="Previous Question [←]"
                      >
                        &lt;
                      </button>
                      <button
                        className="plw-mcq-nav-arrow-btn"
                        disabled={currentMcqIdx === mcqQuestions.length - 1}
                        onClick={handleNextQuestion}
                        title="Next Question [→]"
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Gamified Cyber Arsenal & Lifelines Bar */}
                <div className="plw-mcq-arsenal-bar">
                  <div className="arsenal-tools-left">
                    <button
                      className={`arsenal-btn btn-5050 ${
                        mcqLifeline5050Count === 0 || (mcqEliminatedOptions[currentMcqIdx] && mcqEliminatedOptions[currentMcqIdx].length > 0)
                          ? 'is-disabled'
                          : ''
                      }`}
                      onClick={handleUse5050}
                      title="50:50 Lifeline - Eliminate 2 wrong choices [5]"
                    >
                      <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="arsenal-lbl">50:50</span>
                      <span className="arsenal-badge">{mcqLifeline5050Count}</span>
                    </button>

                    <button
                      className={`arsenal-btn btn-hint ${mcqHintRevealed[currentMcqIdx] ? 'is-active' : ''}`}
                      onClick={handleToggleHint}
                      title="AI Clue Beacon [H]"
                    >
                      <Lightbulb className="w-3 h-3 text-amber-500 fill-amber-200" />
                      <span className="arsenal-lbl">AI Clue</span>
                    </button>

                    <button
                      className="arsenal-btn btn-time"
                      onClick={handleAddTimeBoost}
                      title="Add +30 seconds to timer"
                    >
                      <Clock className="w-3 h-3 text-sky-500" />
                      <span className="arsenal-lbl">+30s</span>
                    </button>

                    <button
                      className={`arsenal-btn btn-flag ${mcqFlagged[currentMcqIdx] ? 'is-flagged' : ''}`}
                      onClick={handleToggleFlag}
                      title="Bookmark Question"
                    >
                      <Star
                        className={`w-3 h-3 ${
                          mcqFlagged[currentMcqIdx] ? 'text-amber-500 fill-amber-400' : 'text-slate-400'
                        }`}
                      />
                      <span className="arsenal-lbl">{mcqFlagged[currentMcqIdx] ? 'Flagged' : 'Flag'}</span>
                    </button>
                  </div>

                  <div className="arsenal-tools-right">
                    {/* Audio Equalizer & Mute Toggle */}
                    <button
                      className={`arsenal-sound-toggle ${mcqSoundEnabled ? 'active' : 'muted'}`}
                      onClick={() => {
                        const next = !mcqSoundEnabled;
                        setMcqSoundEnabled(next);
                        soundEffects.toggleSound();
                      }}
                      title={mcqSoundEnabled ? 'Mute Sound Effects' : 'Unmute Sound Effects'}
                    >
                      {mcqSoundEnabled ? (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="eq-wave">
                            <span className="eq-b1" />
                            <span className="eq-b2" />
                            <span className="eq-b3" />
                          </span>
                        </>
                      ) : (
                        <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>

                    {/* AI Speech Voice Toggle */}
                    <button
                      className={`arsenal-voice-toggle ${mcqVoiceEnabled ? 'active' : 'off'}`}
                      onClick={() => setMcqVoiceEnabled((v) => !v)}
                      title={mcqVoiceEnabled ? 'AI Voice Coach Enabled' : 'AI Voice Coach Muted'}
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span className="voice-lbl">{mcqVoiceEnabled ? 'Voice ON' : 'Voice OFF'}</span>
                    </button>
                  </div>
                </div>

                {/* Optional Dropdown AI Clue Box */}
                {mcqHintRevealed[currentMcqIdx] && (
                  <div className="plw-mcq-hint-card">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-100" />
                      <strong className="text-[11px] font-black text-amber-900">
                        {activityLang === 'hi' ? 'NOVA का स्मार्ट संकेत (Hint):' : "NOVA's Smart Clue:"}
                      </strong>
                    </div>
                    <p className="text-[11px] text-amber-800 font-semibold leading-relaxed m-0">
                      {activityLang === 'hi' && currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id]?.hint
                        ? currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id].hint
                        : mcqQuestions[currentMcqIdx].hint}
                    </p>
                  </div>
                )}

                {/* 3. Question Banner with Q1, Tag, Difficulty & Animated Timer */}
                <div className="plw-mcq-question-banner">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className="plw-mcq-q-badge">
                      <span>Q{currentMcqIdx + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="plw-mcq-tag">{mcqQuestions[currentMcqIdx].tag}</span>
                        <span className="plw-mcq-diff-badge">{mcqQuestions[currentMcqIdx].difficulty}</span>
                      </div>
                      <h3 className="plw-mcq-q-text">
                        {activityLang === 'hi' && currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id]?.question
                          ? currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id].question
                          : mcqQuestions[currentMcqIdx].question}
                      </h3>
                    </div>
                  </div>

                  {/* Pulsing Timer Capsule matching 00:14 */}
                  <div
                    className={`plw-mcq-timer-capsule ${
                      timerSeconds <= 5 ? 'is-hurry' : timerSeconds <= 10 ? 'is-warning' : ''
                    }`}
                  >
                    <span className="timer-pulse-dot" />
                    <Clock className="w-3 h-3 text-red-500" />
                    <span className="timer-val">
                      00:{timerSeconds < 10 ? '0' : ''}
                      {timerSeconds}
                    </span>
                    <button
                      className="timer-pause-icon"
                      onClick={() => setMcqTimerPaused((p) => !p)}
                      title={mcqTimerPaused ? 'Resume Timer' : 'Pause Timer'}
                    >
                      {mcqTimerPaused ? (
                        <Play className="w-2.5 h-2.5 fill-current text-slate-600" />
                      ) : (
                        <Pause className="w-2.5 h-2.5 fill-current text-slate-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* 4. Scrollable Options & Explanation Area (Nothing cut off) */}
                <div className="plw-mcq-middle-scroll">
                  {/* Options Container */}
                  <div className={`plw-mcq-options-container ${selectedAnswers[currentMcqIdx] !== undefined ? 'is-locked' : ''}`}>
                    {mcqQuestions[currentMcqIdx].options.map((opt, idx) => {
                      const isSelected = selectedAnswers[currentMcqIdx] === idx;
                      const isCorrect = idx === mcqQuestions[currentMcqIdx].correct;
                      const hasAnswered = selectedAnswers[currentMcqIdx] !== undefined;
                      const showSuccess = hasAnswered && isSelected && isCorrect;
                      const showError = hasAnswered && isSelected && !isCorrect;
                      const isEliminated = mcqEliminatedOptions[currentMcqIdx]?.includes(idx);
                      const isAnswerRevealed = hasAnswered && !isSelected && isCorrect;

                      return (
                        <div
                          key={opt.key}
                          className={`plw-mcq-opt-pill ${
                            isSelected ? 'selected' : ''
                          } ${showSuccess ? 'is-correct' : ''} ${showError ? 'is-wrong' : ''} ${
                            isEliminated ? 'is-eliminated' : ''
                          } ${isAnswerRevealed ? 'is-revealed-correct' : ''} ${
                            hasAnswered ? 'is-locked' : ''
                          }`}
                          onClick={() => {
                            if (!hasAnswered) {
                              handleSelectOption(currentMcqIdx, idx);
                            }
                          }}
                        >
                          <div className="plw-opt-left">
                            <div className="plw-opt-key-circle">
                              <span className="plw-opt-letter">{opt.key})</span>
                              <span className="plw-opt-key-hint">[{opt.key}]</span>
                            </div>
                            <span className="plw-opt-label">
                              {activityLang === 'hi' && currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id]?.options[idx]
                                ? currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id].options[idx]
                                : opt.text}
                            </span>
                          </div>

                          <div className="plw-opt-right">
                            {isEliminated && (
                              <span className="plw-opt-elim-tag">
                                <Zap className="w-2.5 h-2.5 text-rose-500" />
                                Eliminated
                              </span>
                            )}

                            {showSuccess && (
                              <div className="plw-opt-feedback-pill correct">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                                <span>✓ Correct! +100 XP</span>
                              </div>
                            )}

                            {showError && (
                              <div className="plw-opt-feedback-pill wrong">
                                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                                <span>✕ Wrong Answer</span>
                              </div>
                            )}

                            {isAnswerRevealed && (
                              <div className="plw-opt-feedback-pill revealed">
                                <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                                <span>✓ Correct Answer</span>
                              </div>
                            )}

                            <div
                              className={`plw-opt-radio ${isSelected ? 'active' : ''} ${
                                showSuccess ? 'correct' : ''
                              } ${showError ? 'wrong' : ''}`}
                            >
                              {isSelected && <div className="plw-opt-radio-dot" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* 5. Rich Explanation Box */}
                  {selectedAnswers[currentMcqIdx] !== undefined && (
                    <div
                      className={`plw-mcq-explanation-box ${
                        selectedAnswers[currentMcqIdx] === mcqQuestions[currentMcqIdx].correct
                          ? 'correct'
                          : 'wrong'
                      }`}
                    >
                      <div className="plw-exp-head">
                        <div className="flex items-center gap-2">
                          {selectedAnswers[currentMcqIdx] === mcqQuestions[currentMcqIdx].correct ? (
                            <div className="exp-icon-bubble green">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                            </div>
                          ) : (
                            <div className="exp-icon-bubble red">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                            </div>
                          )}
                          <strong className="plw-exp-status">
                            {selectedAnswers[currentMcqIdx] === mcqQuestions[currentMcqIdx].correct
                              ? '✓ Correct Answer!'
                              : '✕ Wrong Answer — Key Concept:'}
                          </strong>

                          {autoAdvanceNotice && (
                            <span className={`plw-exp-autonext-badge ${autoAdvanceNotice.status}`}>
                              ⏱️ Next in {autoAdvanceNotice.secondsRemaining}s...
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            className="plw-exp-audio-btn"
                            onClick={handleSpeakExplanation}
                            title="Listen to Explanation with AI Voice"
                          >
                            <Volume2 className="w-3 h-3 text-slate-600" />
                            <span>Read Aloud</span>
                          </button>

                          {autoAdvanceNotice && (
                            <button
                              className="plw-exp-skip-btn"
                              onClick={handleNextQuestion}
                              title="Skip countdown and proceed now"
                            >
                              <span>Next Now →</span>
                            </button>
                          )}
                        </div>
                      </div>

                      <p className="plw-exp-body">
                        {activityLang === 'hi' && currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id]?.explanation
                          ? currentHindiActivity.mcqs[mcqQuestions[currentMcqIdx].id].explanation
                          : mcqQuestions[currentMcqIdx].explanation}
                      </p>

                      {/* Real-World Context Callout */}
                      <div className="plw-exp-realworld">
                        <Zap className="w-3 h-3 text-amber-500 fill-amber-200 shrink-0 mt-0.5" />
                        <span>{mcqQuestions[currentMcqIdx].realWorldContext}</span>
                      </div>

                      {/* Code Snippet Box */}
                      {mcqQuestions[currentMcqIdx].codeSnippet && (
                        <div className="plw-exp-code-strip">
                          <div className="exp-code-head">
                            <Code2 className="w-3 h-3 text-sky-400" />
                            <span>Code Concept Preview</span>
                          </div>
                          <pre className="exp-code-body">{mcqQuestions[currentMcqIdx].codeSnippet}</pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 6. Footer Actions Bar with Keyboard shortcuts and Next/Complete Button */}
                <div className="plw-mcq-footer-actions">
                  <div className="flex items-center gap-2">
                    <button
                      className="plw-mcq-btn-prev"
                      disabled={currentMcqIdx === 0}
                      onClick={handlePrevQuestion}
                    >
                      ← Previous
                    </button>
                    <span className="plw-keys-guide hidden md:inline-flex">
                      <Keyboard className="w-3 h-3 text-slate-400 mr-1" />
                      [A-D] Select • [Enter] Next • [H] Clue • [5] 50:50
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {autoAdvanceNotice && (
                      <div className={`plw-footer-autonext-pill ${autoAdvanceNotice.status}`}>
                        <span className="fan-pulse-dot" />
                        <span>Auto Next in <strong>{autoAdvanceNotice.secondsRemaining}s</strong></span>
                      </div>
                    )}

                    {currentMcqIdx < mcqQuestions.length - 1 ? (
                      <button
                        className="plw-mcq-btn-next"
                        onClick={handleNextQuestion}
                      >
                        <span>Next Question →</span>
                        <span className="key-pill">[Enter ↵]</span>
                      </button>
                    ) : (
                      <button
                        className="plw-mcq-btn-complete"
                        onClick={handleNextQuestion}
                      >
                        <Trophy className="w-4 h-4 text-amber-300 fill-amber-300" />
                        <span>Submit</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column (~28%): Progress + Question Navigator + AI Mentor ── */}
            <div className="plw-mcq-right-col">
              {/* Card 1: Your Progress */}
              <div className="plw-card plw-mcq-prog-card">
                <strong className="plw-card-title mb-2 block">Your Progress</strong>
                <div className="plw-mcq-prog-top-row">
                  {/* Mini Donut Chart */}
                  <div className="plw-donut-ring-wrap">
                    <svg className="plw-donut-svg" viewBox="0 0 36 36">
                      <path
                        className="plw-donut-bg-circle"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="plw-donut-val-circle"
                        strokeDasharray={`${(Object.keys(selectedAnswers).length / mcqQuestions.length) * 100}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="plw-donut-text">
                      {Math.round((Object.keys(selectedAnswers).length / mcqQuestions.length) * 100)}%
                    </span>
                  </div>

                  {/* Progress bar info */}
                  <div className="plw-mcq-prog-info">
                    <span className="plw-prog-sub-text">
                      {Object.keys(selectedAnswers).length} / {mcqQuestions.length} Questions Answered
                    </span>
                    <div className="plw-prog-track my-1">
                      <div
                        className="plw-prog-fill"
                        style={{
                          width: `${(Object.keys(selectedAnswers).length / mcqQuestions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* 4 Stat Tiles */}
                <div className="plw-mcq-stats-grid">
                  <div className="plw-stat-pill">
                    <span className="plw-stat-val text-amber-600">+{mcqXp}</span>
                    <span className="plw-stat-lbl">XP Points</span>
                  </div>
                  <div className="plw-stat-pill">
                    <span className="plw-stat-val text-emerald-600">
                      {
                        Object.keys(selectedAnswers).filter(
                          (k) => selectedAnswers[Number(k)] === mcqQuestions[Number(k)].correct
                        ).length
                      }
                    </span>
                    <span className="plw-stat-lbl">Correct</span>
                  </div>
                  <div className="plw-stat-pill">
                    <span className="plw-stat-val text-rose-600">
                      {
                        Object.keys(selectedAnswers).filter(
                          (k) => selectedAnswers[Number(k)] !== mcqQuestions[Number(k)].correct
                        ).length
                      }
                    </span>
                    <span className="plw-stat-lbl">Mistakes</span>
                  </div>
                  <div className="plw-stat-pill">
                    <span className="plw-stat-val text-sky-600">{mcqStreak}x 🔥</span>
                    <span className="plw-stat-lbl">Streak</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Question Navigator */}
              <div className="plw-card plw-mcq-nav-card">
                <div className="plw-card-header-row mb-1.5">
                  <strong className="plw-card-title">Question Navigator</strong>
                </div>

                {/* Legend */}
                <div className="plw-nav-legend">
                  <span className="plw-legend-item">
                    <span className="plw-legend-dot bg-emerald-500" />
                    <span>Correct</span>
                  </span>
                  <span className="plw-legend-item">
                    <span className="plw-legend-dot bg-rose-500" />
                    <span>Wrong</span>
                  </span>
                  <span className="plw-legend-item">
                    <span className="plw-legend-dot bg-blue-600" />
                    <span>Current</span>
                  </span>
                  <span className="plw-legend-item">
                    <span className="plw-legend-dot bg-slate-300" />
                    <span>Unanswered</span>
                  </span>
                </div>

                {/* 10 Question Circles with micro status icons */}
                <div className="plw-qnums-grid">
                  {mcqQuestions.map((q, idx) => {
                    const isCurrent = currentMcqIdx === idx;
                    const isAnswered = selectedAnswers[idx] !== undefined;
                    const isCorrect = isAnswered && selectedAnswers[idx] === q.correct;
                    const isWrong = isAnswered && selectedAnswers[idx] !== q.correct;
                    const isFlagged = !!mcqFlagged[idx];

                    return (
                      <button
                        key={q.id}
                        className={`plw-qnum-btn ${isCurrent ? 'is-current' : ''} ${
                          isCorrect ? 'is-correct' : isWrong ? 'is-wrong' : ''
                        } ${isFlagged ? 'is-flagged' : ''}`}
                        onClick={() => {
                          clearAutoAdvance();
                          soundEffects.playCardFlip();
                          setCurrentMcqIdx(idx);
                          setTimerSeconds(30);
                          setMcqTimerPaused(false);
                        }}
                        title={`Question ${idx + 1}${isFlagged ? ' (Flagged)' : ''}`}
                      >
                        <span>{idx + 1}</span>
                        {isCorrect && <Check className="w-2.5 h-2.5 text-white stroke-[3] ml-0.5" />}
                        {isWrong && <XCircle className="w-2.5 h-2.5 text-white fill-white/20 ml-0.5" />}
                        {isFlagged && <span className="flag-dot">★</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card 3: AI Mentor Card */}
              <div className="plw-card plw-mcq-mentor-card">
                <div className="plw-mentor-card-content">
                  <div className="plw-mentor-texts">
                    <strong className="plw-mentor-title">Need a hint or explanation?</strong>
                    <p className="plw-mentor-sub">Ask your AI Mentor for guidance without spoiling the answer!</p>
                    <button className="plw-mentor-ask-btn" onClick={() => onOpenAdvisor?.()}>
                      Ask AI Mentor →
                    </button>
                  </div>
                  <img
                    src="/images/pcv_ai_robot.jpg"
                    alt="AI Mentor Robot"
                    className="plw-mentor-robot-img"
                  />
                </div>
              </div>
            </div>

            {/* ── Quiz Victory & Completion Modal ── */}
            {mcqShowCelebrationModal && (
              <div
                className="plw-quiz-modal-backdrop"
                onClick={() => setMcqShowCelebrationModal(false)}
              >
                <div className="plw-quiz-modal-card" onClick={(e) => e.stopPropagation()}>
                  <div className="quiz-modal-trophy-wrap">
                    <div className="trophy-glow-halo" />
                    <Trophy className="w-14 h-14 text-amber-400 fill-amber-300 relative z-10" />
                  </div>

                  <h2 className="quiz-modal-title">🎉 Python Quiz Completed!</h2>
                  <p className="quiz-modal-sub">
                    You've tackled all {mcqQuestions.length} questions on{' '}
                    <strong>{currentTopicData.topicTitle}</strong>
                  </p>

                  {/* 3 Metrics Cards */}
                  <div className="quiz-modal-metrics-row">
                    <div className="quiz-metric-item">
                      <span className="qmi-val text-emerald-600">
                        {
                          Object.keys(selectedAnswers).filter(
                            (k) => selectedAnswers[Number(k)] === mcqQuestions[Number(k)].correct
                          ).length
                        }{' '}
                        / 10
                      </span>
                      <span className="qmi-lbl">Final Score ({computedMcqScore}%)</span>
                    </div>
                    <div className="quiz-metric-item">
                      <span className="qmi-val text-amber-600">+{mcqXp}</span>
                      <span className="qmi-lbl">Total XP Earned</span>
                    </div>
                    <div className="quiz-metric-item">
                      <span className="qmi-val text-sky-600">{mcqMaxStreak}x 🔥</span>
                      <span className="qmi-lbl">Best Streak</span>
                    </div>
                  </div>

                  <div className="quiz-modal-actions">
                    <button
                      className="quiz-modal-btn review"
                      onClick={() => {
                        soundEffects.playClick();
                        setMcqShowCelebrationModal(false);
                      }}
                    >
                      Review Answers
                    </button>
                    <button
                      className="quiz-modal-btn proceed"
                      onClick={() => {
                        soundEffects.playCelebration();
                        setMcqShowCelebrationModal(false);
                        handleSelectTab('play');
                      }}
                    >
                      <span>Proceed to Step 2: Coding Game →</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            TAB 3: PLAY & LEARN GAME (Exact match to media_1791215204347.jpg)
            ═════════════════════════════════════════════════════════════════ */}
        {/* ═════════════════════════════════════════════════════════════════
            TAB 3: 2035 5-LEVEL FUTURISTIC GAMIFIED PRACTICE ARENA
            ═════════════════════════════════════════════════════════════════ */}
        {activeStep === 'play' && (
          isTab1Topic ? (
            <div className="plw-game-main-col" style={{ width: '100%', maxWidth: '100%', flex: '1 1 100%' }}>
              <PythonPracticeArena4Games
                userName={userName}
                tabId={urlTabId}
                topicId={effectiveTopicId}
                onSelectTopic={(newId) => setEffectiveTopicId(newId)}
                onBackToCourse={onBack}
                onBackToVideo={() => handleSelectTab('learn')}
                onNextToInterview={() => handleSelectTab('interview')}
                onNavigateDock={onNavigateDock}
              />
            </div>
          ) : (
            <>
              {/* ── Left/Center Column (~72%): 2035 Futuristic Light Gaming Arena ── */}
            <div className="plw-game-main-col">
              <div className="plw-game-board-card plw-game-board-light">
                {/* 3D Liquid Floating Background Elements */}
                <div className="liquid-floating-orb orb-1" />
                <div className="liquid-floating-orb orb-2" />
                <div className="liquid-floating-orb orb-3" />
                <div className="liquid-floating-grid-mesh" />

                {/* ── TOP GAMIFICATION HUD (⚡ CODE SPRINT) ── */}
                <div className="code-sprint-hud">
                  <div className="hud-left-group">
                    <div className="hud-sprint-badge">
                      <Zap className="w-4 h-4 fill-amber-300 text-amber-300 animate-pulse" />
                      <span>CODE SPRINT</span>
                    </div>

                    <div className="hud-pill hud-timer">
                      <Clock className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Time: <strong>{formatGameTime(gameTimerSeconds)}</strong></span>
                    </div>

                    <div className="hud-pill hud-accuracy">
                      <Target className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Accuracy: <strong>{gameAccuracy}%</strong></span>
                    </div>
                  </div>

                  <div className="hud-right-group">
                    {/* Simple English / Hindi Selector for Game */}
                    <div className="plw-lang-toggle-box" style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #e2e8f0' }}>
                      <button
                        type="button"
                        className={`plw-lang-btn ${activityLang === 'en' ? 'active' : ''}`}
                        onClick={() => handleSelectActivityLang('en')}
                        title="English"
                      >
                        🇬🇧 English
                      </button>
                      <button
                        type="button"
                        className={`plw-lang-btn ${activityLang === 'hi' ? 'active' : ''}`}
                        onClick={() => handleSelectActivityLang('hi')}
                        title="हिंदी"
                      >
                        🇮🇳 हिंदी
                      </button>
                    </div>

                    <div className="hud-pill hud-xp" title="Experience Points">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>+{gameXp} XP</span>
                    </div>

                    <div className="hud-pill hud-coins" title="Future Coins earned">
                      <Coins className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>+{gameCoins} Coins</span>
                    </div>

                    <div className="hud-pill hud-streak" title="Continuous Learning Streak">
                      <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                      <span>{gameStreakDays} Day Streak</span>
                    </div>
                  </div>
                </div>

                {/* ── 5 MINI-GAMES LEVEL NAVIGATOR ── */}
                <div className="game-level-pills-bar">
                  {[
                    { lvl: 1, label: activityLang === 'hi' ? 'वॉर्म अप' : 'Warm Up', sub: activityLang === 'hi' ? 'कोड पहेली' : 'Code Puzzle', icon: '🧩' },
                    { lvl: 2, label: activityLang === 'hi' ? 'सोचो' : 'Think', sub: activityLang === 'hi' ? 'आउटपुट पहचानें' : 'Predict Output', icon: '🧠' },
                    { lvl: 3, label: activityLang === 'hi' ? 'डीबग' : 'Debug', sub: activityLang === 'hi' ? 'बग हंटर' : 'Bug Hunter', icon: '🐞' },
                    { lvl: 4, label: activityLang === 'hi' ? 'बिल्ड' : 'Build', sub: activityLang === 'hi' ? 'बिल्ड और रन' : 'Build & Run', icon: '⚙️' },
                    { lvl: 5, label: activityLang === 'hi' ? 'बॉस फाइट' : 'Boss Fight', sub: activityLang === 'hi' ? 'रियल कोडिंग' : 'Real Coding', icon: '⚔️' },
                  ].map((item) => {
                    const isUnlocked = unlockedGameLevels.includes(item.lvl);
                    const isActive = activeGameLevel === item.lvl;
                    const isDone =
                      (item.lvl === 1 && l1Completed) ||
                      (item.lvl === 2 && l2Completed) ||
                      (item.lvl === 3 && l3Completed) ||
                      (item.lvl === 4 && l4Completed) ||
                      (item.lvl === 5 && l5BossDefeated);

                    return (
                      <button
                        key={item.lvl}
                        className={`game-nav-level-pill ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''} ${!isUnlocked ? 'is-locked' : ''}`}
                        onClick={() => {
                          soundEffects.playClick();
                          setActiveGameLevel(item.lvl as 1 | 2 | 3 | 4 | 5);
                        }}
                      >
                        <div className="pill-left-icon">{item.icon}</div>
                        <div className="pill-text-wrap">
                          <span className="pill-lvl-tag">Level {item.lvl} — {item.label}</span>
                          <strong className="pill-sub-title">{item.sub}</strong>
                        </div>
                        {isDone ? (
                          <div className="pill-status-dot is-done" title="Completed">
                            <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                          </div>
                        ) : isActive ? (
                          <div className="pill-status-dot is-current" title="Playing Now">
                            <span className="live-pulse-dot" />
                          </div>
                        ) : null}
                      </button>
                    );
                  })}
                </div>

                {/* ── ACTIVE GAME ARENA CONTAINER ── */}
                <div className="game-stage-arena-body">
                  {/* ─────────────────────────────────────────────────────────────
                      LEVEL 1: WARM UP — CODE PUZZLE
                      ───────────────────────────────────────────────────────────── */}
                  {activeGameLevel === 1 && (
                    <div className="l1-puzzle-arena">
                      <div className="stage-intro-strip">
                        <div className="stage-intro-badge">
                          <span className="text-sm">🧩</span>
                          <div>
                            <h3 className="stage-title">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l1Title || 'लेवल 1 — कोड पहेली: सही सिंटैक्स जोड़ें')
                                : 'Level 1 — Code Puzzle: Syntax Assembler'}
                            </h3>
                            <p className="stage-sub">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l1Desc || 'ब्लॉक्स पर क्लिक करके पायथन का सही print कमांड बनाएं।')
                                : 'Click the magnetic code blocks to assemble a valid Python print command.'}
                            </p>
                          </div>
                        </div>
                        <button className="stage-reset-btn" onClick={handleL1Reset} title="Reset Placed Blocks">
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{activityLang === 'hi' ? 'रीसेट' : 'Reset'}</span>
                        </button>
                      </div>

                      <div className="l1-interactive-grid">
                        {/* Blocks Palette */}
                        <div className="l1-blocks-palette-card">
                          <div className="l1-palette-head">
                            <strong className="l1-palette-title">Magnetic Code Blocks</strong>
                            <span className="l1-palette-hint">Click block to slot</span>
                          </div>
                          <div className="l1-chips-grid">
                            {l1AvailableBlocks.map((blk) => {
                              const isUsed = l1Slots.includes(blk.id);
                              return (
                                <button
                                  key={blk.id}
                                  className={`l1-token-chip ${isUsed ? 'is-used' : ''}`}
                                  style={{
                                    background: blk.bg,
                                    color: blk.textCol,
                                    borderColor: blk.borderCol,
                                  }}
                                  onClick={() => !isUsed && handleL1Place(blk.id)}
                                  disabled={isUsed}
                                >
                                  <span className="l1-grip">:::</span>
                                  <span className="l1-token-text font-mono font-bold">{blk.text}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Dropzone Assembly Runway */}
                        <div className="l1-assembly-card">
                          <div className="l1-runway-header">
                            <div className="flex items-center gap-2">
                              <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                              <span className="text-xs font-bold text-slate-700">
                                Target: Print greeting text <code className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-bold">"Hello, Python!"</code>
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-slate-600">3 Slots</span>
                          </div>

                          <div className="l1-slots-runway">
                            <span className="l1-line-num">1</span>

                            {/* Slot 0: Function call */}
                            <div
                              className={`l1-magnetic-slot slot-blue ${l1Slots[0] ? 'has-item' : ''}`}
                              onClick={() => l1Slots[0] && handleL1Remove(0)}
                              title={l1Slots[0] ? 'Click to remove block' : 'Slot 1: Function call'}
                            >
                              {l1Slots[0] ? (
                                <span className="l1-placed-val">{l1AvailableBlocks.find((b) => b.id === l1Slots[0])?.text}</span>
                              ) : (
                                <span className="l1-slot-placeholder text-slate-400 font-sans">[ Slot 1: Command ]</span>
                              )}
                            </div>

                            {/* Slot 1: String content */}
                            <div
                              className={`l1-magnetic-slot slot-pink ${l1Slots[1] ? 'has-item' : ''}`}
                              onClick={() => l1Slots[1] && handleL1Remove(1)}
                              title={l1Slots[1] ? 'Click to remove block' : 'Slot 2: String argument'}
                            >
                              {l1Slots[1] ? (
                                <span className="l1-placed-val">{l1AvailableBlocks.find((b) => b.id === l1Slots[1])?.text}</span>
                              ) : (
                                <span className="l1-slot-placeholder text-slate-400 font-sans">[ Slot 2: Argument ]</span>
                              )}
                            </div>

                            {/* Slot 2: Closing paren */}
                            <div
                              className={`l1-magnetic-slot slot-purple ${l1Slots[2] ? 'has-item' : ''}`}
                              onClick={() => l1Slots[2] && handleL1Remove(2)}
                              title={l1Slots[2] ? 'Click to remove block' : 'Slot 3: Closing parenthesis'}
                            >
                              {l1Slots[2] ? (
                                <span className="l1-placed-val">{l1AvailableBlocks.find((b) => b.id === l1Slots[2])?.text}</span>
                              ) : (
                                <span className="l1-slot-placeholder text-slate-400 font-sans">[ Slot 3: Close ]</span>
                              )}
                            </div>

                            <span className="l1-cursor-blink">|</span>
                          </div>

                          {/* Feedback Banner */}
                          {l1Result === 'correct' && (
                            <div className="l1-feedback-banner success animate-bounce-subtle">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <div className="flex-1 min-w-0">
                                <strong>Level 1 Passed! 🎉</strong>
                                <p>Output: <code className="font-mono font-bold text-emerald-800">Hello, Python!</code> (+25 Coins, +30 XP)</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full animate-pulse">
                                  ⚡ Auto-advancing to Level 2...
                                </span>
                                <button
                                  className="l1-next-level-btn"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setActiveGameLevel(2);
                                  }}
                                >
                                  <span>Next</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          )}

                          {l1Result === 'wrong' && (
                            <div className="l1-feedback-banner wrong animate-shake">
                              <AlertCircle className="w-4 h-4 text-rose-600" />
                              <div className="flex-1 min-w-0">
                                <strong>Syntax Mismatch!</strong>
                                <p>Python syntax requires: <code className="font-bold">print(</code> followed by string and closing <code className="font-bold">)</code>.</p>
                              </div>
                            </div>
                          )}

                          <div className="l1-action-footer">
                            <button className="l1-check-btn" onClick={handleL1Check}>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Execute &amp; Check Code</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────────
                      LEVEL 2: THINK — PREDICT OUTPUT
                      ───────────────────────────────────────────────────────────── */}
                  {activeGameLevel === 2 && (
                    <div className="l2-predict-arena">
                      <div className="stage-intro-strip">
                        <div className="stage-intro-badge">
                          <span className="text-sm">🧠</span>
                          <div>
                            <h3 className="stage-title">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l2Title || 'लेवल 2 — सोचें: आउटपुट का सटीक अनुमान')
                                : 'Level 2 — Think: Quantum Output Predictor'}
                            </h3>
                            <p className="stage-sub">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l2Question || 'पायथन कोड को लाइन-दर-लाइन समझें और तय करें कि क्या आउटपुट आएगा।')
                                : 'Trace the Python code line-by-line and predict what the interpreter outputs.'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="l2-interactive-grid">
                        {/* Left: Holographic Code Viewport */}
                        <div className="l2-code-terminal-card">
                          <div className="l2-term-bar">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <span className="text-[11px] font-mono font-bold text-slate-500">quantum_tracer.py</span>
                            {l2Scanning && <span className="text-[10px] text-cyan-600 font-bold animate-pulse">⚡ TRACING...</span>}
                          </div>

                          <div className="l2-code-lines-wrap">
                            {l2SnippetLines.map((line, idx) => {
                              const lineNum = idx + 1;
                              const isScanActive = l2Scanning && l2ActiveScanLine === lineNum;
                              return (
                                <div key={idx} className={`l2-code-line ${isScanActive ? 'is-scanned' : ''}`}>
                                  <span className="l2-line-idx">{lineNum}</span>
                                  <code className="l2-code-str font-mono">{line}</code>
                                  {isScanActive && <span className="l2-laser-beam-indicator" />}
                                </div>
                              );
                            })}
                          </div>

                          {/* Terminal Output Screen */}
                          <div className="l2-term-output-box">
                            <span className="l2-output-label">Terminal Console Output:</span>
                            {l2Scanning ? (
                              <span className="text-cyan-600 font-mono text-xs animate-pulse">Running interpreter...</span>
                            ) : l2Result === 'correct' ? (
                              <span className="text-emerald-700 font-mono text-xs font-bold">» Python 3 is Awesome!</span>
                            ) : l2Result === 'wrong' ? (
                              <span className="text-rose-600 font-mono text-xs font-bold">» Evaluation failed. Try another prediction!</span>
                            ) : (
                              <span className="text-slate-600 font-mono text-xs italic">[Awaiting student prediction]</span>
                            )}
                          </div>
                        </div>

                        {/* Right: Prediction Cards */}
                        <div className="l2-options-card">
                          <strong className="l2-options-header">
                            {activityLang === 'hi' ? 'सटीक आउटपुट चुनें:' : 'Select the Exact Output:'}
                          </strong>
                          <div className="l2-options-stack">
                            {l2Options.map((opt) => {
                              const isSelected = l2SelectedId === opt.id;
                              let statusClass = '';
                              if (isSelected && l2Result === 'correct') statusClass = 'is-correct';
                              if (isSelected && l2Result === 'wrong') statusClass = 'is-wrong';

                              return (
                                <button
                                  key={opt.id}
                                  className={`l2-prediction-btn ${isSelected ? 'is-selected' : ''} ${statusClass}`}
                                  onClick={() => handleL2Select(opt.id)}
                                  disabled={l2Scanning}
                                >
                                  <div className="l2-btn-letter font-mono">{opt.id.toUpperCase()}</div>
                                  <div className="text-left flex-1 min-w-0">
                                    <strong className="block text-xs font-mono text-slate-800">{opt.text}</strong>
                                    {isSelected && l2Result !== 'idle' && (
                                      <span className="text-[11px] text-slate-500 font-sans block mt-0.5">{opt.note}</span>
                                    )}
                                  </div>
                                  {isSelected && l2Result === 'correct' && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                  )}
                                  {isSelected && l2Result === 'wrong' && (
                                    <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {l2Result === 'correct' && (
                            <div className="l2-success-action-row animate-fade-in">
                              <div className="text-xs text-emerald-700 font-bold">
                                🌟 Correct Analysis! (+25 Coins, +30 XP)
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full animate-pulse">
                                  ⚡ Auto-advancing to Level 3...
                                </span>
                                <button
                                  className="l1-next-level-btn"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setActiveGameLevel(3);
                                  }}
                                >
                                  <span>Next</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────────
                      LEVEL 3: DEBUG — BUG HUNTER
                      ───────────────────────────────────────────────────────────── */}
                  {activeGameLevel === 3 && (
                    <div className="l3-bug-arena">
                      <div className="stage-intro-strip">
                        <div className="stage-intro-badge">
                          <span className="text-sm">🐞</span>
                          <div>
                            <h3 className="stage-title">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l3Title || 'लेवल 3 — डीबग: साइबर बग हंटर')
                                : 'Level 3 — Debug: Cyber Bug Hunter'}
                            </h3>
                            <p className="stage-sub">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l3Question || 'कोड में छिपे बग की पहचान करें और सही पैच लगाकर फिक्स करें!')
                                : 'A rogue bug drone is sabotaging line 2. Lock the laser crosshair and deploy the patch!'}
                            </p>
                          </div>
                        </div>
                        <div className="stage-stat-chip">
                          <Bug className={`w-3.5 h-3.5 ${l3BugDefeated ? 'text-emerald-500' : 'text-rose-500'}`} />
                          <span>Bugs Left: <strong>{l3BugDefeated ? 0 : 1}</strong></span>
                        </div>
                      </div>

                      <div className="l3-interactive-grid">
                        {/* Left: Code Matrix with Bug Drone */}
                        <div className="l3-matrix-card">
                          <div className="l3-matrix-header">
                            <span className="text-xs font-bold text-slate-700">Code Vulnerability Scanner</span>
                            <span className="text-[11px] text-rose-500 font-bold">
                              {l3BugDefeated ? '🛡️ CLEAN MATRIX' : '⚠️ 1 DEFECT DETECTED'}
                            </span>
                          </div>

                          <div className="l3-matrix-lines">
                            {l3Lines.map((item) => {
                              const isSelected = l3SelectedLine === item.line;
                              return (
                                <div
                                  key={item.line}
                                  className={`l3-line-row ${item.isBug ? 'has-bug-drone' : ''} ${isSelected ? 'is-targeted' : ''} ${l3BugDefeated && item.isBug ? 'is-fixed' : ''}`}
                                  onClick={() => setL3SelectedLine(item.line)}
                                >
                                  <span className="l3-num">{item.line}</span>
                                  <code className="l3-code-snippet font-mono">
                                    {l3BugDefeated && item.isBug ? 'print(f"Deploying agent: {player_name}")' : item.text}
                                  </code>

                                  {/* Holographic Cyber Bug Drone */}
                                  {item.isBug && !l3BugDefeated && (
                                    <div className={`l3-bug-drone-actor ${l3Zapping ? 'is-zapped' : ''}`} title="Target Drone">
                                      <Bug className="w-4 h-4 text-rose-600 animate-bounce" />
                                      <span className="l3-drone-label">BUG DRONE</span>
                                    </div>
                                  )}

                                  {item.isBug && l3BugDefeated && (
                                    <span className="l3-fixed-badge">
                                      <Check className="w-3 h-3 text-emerald-600" />
                                      <span>PATCH APPLIED</span>
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Laser Beam Animation overlay */}
                          {l3Zapping && <div className="l3-laser-beam-effect" />}
                        </div>

                        {/* Right: Laser Patch Bay */}
                        <div className="l3-patch-card">
                          <strong className="l3-patch-title">Select Laser Fix Patch:</strong>
                          <div className="l3-patch-stack">
                            {l3Patches.map((patch) => {
                              const isSelected = l3SelectedPatch === patch.id;
                              return (
                                <button
                                  key={patch.id}
                                  className={`l3-patch-btn ${isSelected ? 'is-selected' : ''}`}
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setL3SelectedPatch(patch.id);
                                    setL3Result('idle');
                                  }}
                                  disabled={l3Zapping || l3BugDefeated}
                                >
                                  <span className="l3-patch-chip-label">{patch.label}</span>
                                  <code className="l3-patch-code font-mono">{patch.code}</code>
                                </button>
                              );
                            })}
                          </div>

                          {l3Result === 'wrong' && (
                            <div className="l3-wrong-alert animate-shake">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                              <span>Laser deflected! Python uses <code className="font-bold">print()</code> to output text.</span>
                            </div>
                          )}

                          {l3BugDefeated ? (
                            <div className="l3-victory-strip animate-fade-in">
                              <div className="text-xs text-emerald-700 font-bold">
                                🎯 Bug Eradicated! Matrix Restored (+25 Coins, +30 XP)
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full animate-pulse">
                                  ⚡ Auto-advancing to Level 4...
                                </span>
                                <button
                                  className="l1-next-level-btn"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setActiveGameLevel(4);
                                  }}
                                >
                                  <span>Next</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              className="l3-deploy-btn"
                              onClick={handleL3ZapBug}
                              disabled={!l3SelectedPatch || l3Zapping}
                            >
                              <Zap className="w-4 h-4 fill-current" />
                              <span>
                                {activityLang === 'hi'
                                  ? (l3Zapping ? 'लेज़र पैच लगाया जा रहा है...' : 'लेज़र पैच लगाएं')
                                  : (l3Zapping ? 'FIRING LASER CANNON...' : 'DEPLOY LASER PATCH')}
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────────
                      LEVEL 4: BUILD — BUILD & RUN
                      ───────────────────────────────────────────────────────────── */}
                  {activeGameLevel === 4 && (
                    <div className="l4-build-arena">
                      <div className="stage-intro-strip">
                        <div className="stage-intro-badge">
                          <span className="text-sm">⚙️</span>
                          <div>
                            <h3 className="stage-title">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l4Title || 'लेवल 4 — निर्माण: कोड ब्लूप्रिंट मशीन')
                                : 'Level 4 — Build: Component Blueprint Machine'}
                            </h3>
                            <p className="stage-sub">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l4Question || 'आवश्यक टोकन्स जोड़कर सही कोड बनाएं और टेस्ट रनर चलाएं।')
                                : 'Construct the XP calculation function and execute the automated test runner.'}
                            </p>
                          </div>
                        </div>
                        <button className="stage-reset-btn" onClick={handleL4Reset}>
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{activityLang === 'hi' ? 'रीसेट' : 'Reset'}</span>
                        </button>
                      </div>

                      <div className="l4-interactive-grid">
                        {/* Left: Blueprint Constructor */}
                        <div className="l4-blueprint-card">
                          <div className="l4-bp-header">
                            <span className="text-xs font-bold text-slate-700">Python Function Blueprint</span>
                            <span className="text-[11px] font-mono font-bold text-cyan-600">def calculate_xp()</span>
                          </div>

                          <div className="l4-blueprint-code-body">
                            <div className="l4-bp-line">
                              <span className="l4-bp-num">1</span>
                              <code className="text-slate-800 font-mono font-bold">
                                def calculate_xp(lessons, bonus):
                              </code>
                            </div>
                            <div className="l4-bp-line l4-indent">
                              <span className="l4-bp-num">2</span>
                              <span className="text-purple-600 font-mono font-bold mr-2">return</span>

                              {/* Slot 1: Token */}
                              <div
                                className={`l4-slot-chip ${l4Slot1 ? 'has-item' : ''}`}
                                onClick={() => setL4Slot1(null)}
                                title={l4Slot1 ? 'Click to remove' : 'Slot 1: Select variable token'}
                              >
                                {l4Slot1 ? (
                                  <span className="font-mono font-bold">{l4Slot1}</span>
                                ) : (
                                  <span className="text-slate-400 italic text-[11px] font-sans">[ Slot 1 ]</span>
                                )}
                              </div>

                              <span className="text-slate-700 font-mono font-black mx-1.5">* 10 +</span>

                              {/* Slot 2: Bonus Token */}
                              <div
                                className={`l4-slot-chip ${l4Slot2 ? 'has-item' : ''}`}
                                onClick={() => setL4Slot2(null)}
                                title={l4Slot2 ? 'Click to remove' : 'Slot 2: Select addition token'}
                              >
                                {l4Slot2 ? (
                                  <span className="font-mono font-bold">{l4Slot2}</span>
                                ) : (
                                  <span className="text-slate-400 italic text-[11px] font-sans">[ Slot 2 ]</span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Token Bay */}
                          <div className="l4-token-bay">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                              Available Formula Tokens:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {l4AvailableTokens.map((tok) => (
                                <button
                                  key={tok}
                                  className="l4-token-pill font-mono"
                                  onClick={() => {
                                    if (!l4Slot1) handleL4Place(tok, 1);
                                    else if (!l4Slot2) handleL4Place(tok, 2);
                                  }}
                                >
                                  +{tok}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Test Suite Console */}
                        <div className="l4-test-runner-card">
                          <div className="l4-test-header">
                            <strong className="text-xs font-bold text-slate-800">Automated Test Suite</strong>
                            {l4RunningTests && <span className="text-[11px] text-cyan-600 font-bold animate-pulse">Running 3 Tests...</span>}
                          </div>

                          <div className="l4-tests-stack">
                            {[
                              { name: 'Test 1: calculate_xp(5, 20)', expected: '70', stepReq: 1 },
                              { name: 'Test 2: calculate_xp(10, 50)', expected: '150', stepReq: 2 },
                              { name: 'Test 3: calculate_xp(0, 100)', expected: '100', stepReq: 3 },
                            ].map((tc, idx) => {
                              const isEvaluated = l4TestStep >= tc.stepReq;
                              const isPassed = isEvaluated && l4Result === 'correct';
                              const isFailed = isEvaluated && l4Result === 'wrong';

                              return (
                                <div key={idx} className={`l4-tc-row ${isPassed ? 'is-passed' : ''} ${isFailed ? 'is-failed' : ''}`}>
                                  <div className="flex items-center gap-2">
                                    {isPassed ? (
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    ) : isFailed ? (
                                      <XCircle className="w-3.5 h-3.5 text-rose-500" />
                                    ) : (
                                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300" />
                                    )}
                                    <span className="text-xs font-mono font-medium text-slate-700">{tc.name}</span>
                                  </div>
                                  <span className="text-[11px] font-mono text-slate-500">Expects: {tc.expected}</span>
                                </div>
                              );
                            })}
                          </div>

                          {l4Result === 'correct' ? (
                            <div className="l4-victory-strip animate-fade-in">
                              <div className="text-xs text-emerald-700 font-bold">
                                🚀 All 3 Unit Tests Passed! (+35 Coins, +40 XP)
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full animate-pulse">
                                  ⚡ Auto-advancing to Level 5 Boss Fight...
                                </span>
                                <button
                                  className="l1-next-level-btn"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setActiveGameLevel(5);
                                  }}
                                >
                                  <span>Proceed</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              className="l4-run-btn"
                              onClick={handleL4RunTests}
                              disabled={l4RunningTests}
                            >
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>
                                {activityLang === 'hi'
                                  ? (l4RunningTests ? 'टेस्ट सूट चल रहा है...' : 'टेस्ट सूट चलाएं')
                                  : (l4RunningTests ? 'EXECUTING TEST SUITE...' : 'RUN TEST SUITE')}
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────────
                      LEVEL 5: BOSS FIGHT — REAL CODING CHALLENGE (CYBER SENTINEL)
                      ───────────────────────────────────────────────────────────── */}
                  {activeGameLevel === 5 && (
                    <div className="l5-boss-arena">
                      <div className="stage-intro-strip boss-strip">
                        <div className="stage-intro-badge">
                          <Swords className="w-5 h-5 text-rose-500" />
                          <div>
                            <h3 className="stage-title text-rose-900">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l5Title || 'लेवल 5 — बॉस फाइट: द साइबर सेंटिनल')
                                : 'Level 5 — BOSS FIGHT: The Cyber Sentinel'}
                            </h3>
                            <p className="stage-sub">
                              {activityLang === 'hi'
                                ? (currentHindiActivity.game.l5Question || 'असली पायथन मुकाबला! शील्ड को तोड़ें और सही पायथन कमांड से बॉस को हराएं।')
                                : "Real Python combat! Breach Giga-Glitch's shield and fire the ultimate Python strike."}
                            </p>
                          </div>
                        </div>
                        <button className="stage-reset-btn" onClick={handleL5ResetBoss}>
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{activityLang === 'hi' ? 'रीसेट मुकाबला' : 'Reset Duel'}</span>
                        </button>
                      </div>

                      <div className="l5-interactive-grid">
                        {/* Left: 3D Holographic Boss Stage */}
                        <div className="l5-boss-stage-card">
                          {/* Boss HP Bar */}
                          <div className="l5-boss-hp-container">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-black text-rose-700 tracking-wider">
                                👾 CYBER SENTINEL "GIGA-GLITCH"
                              </span>
                              <strong className="text-xs font-mono font-bold text-rose-600">
                                {l5BossHp} / 100 HP
                              </strong>
                            </div>
                            <div className="l5-hp-track">
                              <div
                                className="l5-hp-fill"
                                style={{
                                  width: `${l5BossHp}%`,
                                  background: l5BossHp > 50 ? 'linear-gradient(90deg, #10b981, #06b6d4)' : l5BossHp > 0 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : '#64748b'
                                }}
                              />
                            </div>
                          </div>

                          {/* 3D Boss Actor Visual */}
                          <div className={`l5-boss-actor-stage ${l5Attacking ? 'is-shaking' : ''} ${l5BossDefeated ? 'is-exploded' : ''}`}>
                            <div className="l5-boss-halo-ring" />
                            <div className="l5-boss-mech-avatar">
                              <Cpu className={`w-20 h-20 ${l5BossDefeated ? 'text-slate-400' : 'text-rose-500'} animate-pulse`} />
                              {!l5BossDefeated && <div className="l5-boss-core-glow" />}
                            </div>

                            {/* Combat Dialogue */}
                            <div className="l5-boss-dialogue-bubble">
                              {l5BossDefeated ? (
                                <span className="text-slate-600 font-bold">"System shutting down... You're a master of Python!"</span>
                              ) : l5Phase === 1 ? (
                                <span className="text-rose-700 font-bold">"My Loop Barrier deflects all attacks! Solve range() if you can!"</span>
                              ) : (
                                <span className="text-amber-700 font-bold">"Shield compromised! You can't arm your list without the right method!"</span>
                              )}
                            </div>
                          </div>

                          {/* Attack Beam Particle overlay */}
                          {l5Attacking && <div className="l5-plasma-beam-shot" />}
                        </div>

                        {/* Right: Player Attack Terminal */}
                        <div className="l5-player-cockpit-card">
                          <div className="l5-cockpit-header">
                            <span className="text-xs font-black text-slate-800">Python Attack Cockpit</span>
                            <span className="text-[11px] font-bold text-cyan-600">Phase {l5Phase} of 2</span>
                          </div>

                          {!l5BossDefeated && l5Phase === 1 && (
                            <div className="l5-challenge-phase animate-fade-in">
                              <p className="text-xs font-bold text-slate-700 mb-2">
                                ⚔️ Strike 1: Complete the range statement to loop <span className="text-rose-600 font-bold">5 times</span> and fire a 50-HP plasma burst:
                              </p>
                              <div className="l5-code-prompt">
                                <code className="font-mono text-xs font-bold text-slate-900">
                                  for strike in range(1, <span className="text-rose-600 underline font-black">?</span>):
                                </code>
                              </div>

                              <div className="l5-attack-options-grid">
                                {[
                                  { val: '6', label: 'Option A: 6', desc: 'for strike in range(1, 6):' },
                                  { val: '5', label: 'Option B: 5', desc: 'for strike in range(1, 5):' },
                                  { val: '10', label: 'Option C: 10', desc: 'for strike in range(1, 10):' },
                                ].map((opt) => (
                                  <button
                                    key={opt.val}
                                    className="l5-strike-btn"
                                    onClick={() => handleL5Phase1Attack(opt.val)}
                                    disabled={l5Attacking}
                                  >
                                    <div className="flex items-center justify-between">
                                      <strong className="text-xs font-mono font-bold text-slate-800">{opt.label}</strong>
                                      <span className="l5-dmg-tag">⚡ Strike Command</span>
                                    </div>
                                    <span className="text-[11px] text-slate-500 font-mono block text-left mt-0.5">{opt.desc}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {!l5BossDefeated && l5Phase === 2 && (
                            <div className="l5-challenge-phase animate-fade-in">
                              <p className="text-xs font-bold text-slate-700 mb-2">
                                💥 Final Strike: Choose the Python list method to add the <span className="text-purple-600 font-bold">"PLASMA_BLASTER"</span> to inventory:
                              </p>
                              <div className="l5-code-prompt">
                                <code className="font-mono text-xs font-bold text-slate-900">
                                  laser_weapons.<span className="text-purple-600 underline font-black">?</span>("PLASMA_BLASTER")
                                </code>
                              </div>

                              <div className="l5-attack-options-grid">
                                {[
                                  { method: '.append()', label: 'Option A: .append()', desc: 'laser_weapons.append("PLASMA_BLASTER")' },
                                  { method: '.push()', label: 'Option B: .push()', desc: 'laser_weapons.push("PLASMA_BLASTER")' },
                                  { method: '.insert_last()', label: 'Option C: .insert_last()', desc: 'laser_weapons.insert_last("PLASMA_BLASTER")' },
                                ].map((opt) => (
                                  <button
                                    key={opt.method}
                                    className="l5-strike-btn"
                                    onClick={() => handleL5Phase2Attack(opt.method)}
                                    disabled={l5Attacking}
                                  >
                                    <div className="flex items-center justify-between">
                                      <strong className="text-xs font-mono font-bold text-slate-800">{opt.label}</strong>
                                      <span className="l5-dmg-tag">⚡ Arm Method</span>
                                    </div>
                                    <span className="text-[11px] text-slate-500 font-mono block text-left mt-0.5">{opt.desc}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {l5BossDefeated && (
                            <div className="l5-boss-defeated-panel animate-fade-in">
                              <Trophy className="w-10 h-10 text-amber-500 mx-auto mb-2 animate-bounce" />
                              <strong className="text-base font-black text-slate-900 block">
                                🏆 BOSS DEFEATED! CYBER SENTINEL DOWN!
                              </strong>
                              <p className="text-xs text-slate-600 mt-1 mb-3">
                                You executed real Python logic to neutralize the threat. You've cleared all 5 mini-games!
                              </p>
                              <div className="flex items-center justify-center gap-3">
                                <button className="stage-reset-btn" onClick={handleL5ResetBoss}>
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  <span>Replay Boss</span>
                                </button>
                                <button
                                  className="l1-next-level-btn"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    setActiveStep('code');
                                  }}
                                >
                                  <span>Proceed to Coding Game →</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right Column (~28%): Progress, Score & Streak, AI NOVA Mentor ── */}
            <div className="plw-game-right-col">
              {/* Card 1: 5-Level Mission Progress */}
              <div className="plw-card plw-gp-card">
                <div className="flex items-center justify-between mb-1.5">
                  <strong className="plw-card-title">Game Progress</strong>
                  <span className="text-xs font-bold text-sky-600">
                    {[l1Completed, l2Completed, l3Completed, l4Completed, l5BossDefeated].filter(Boolean).length} / 5 Levels
                  </span>
                </div>
                <div className="plw-prog-track mb-3">
                  <div
                    className="plw-prog-fill"
                    style={{
                      width: `${([l1Completed, l2Completed, l3Completed, l4Completed, l5BossDefeated].filter(Boolean).length / 5) * 100}%`
                    }}
                  />
                </div>
                <div className="plw-level-dots-row">
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const isDone =
                      (lvl === 1 && l1Completed) ||
                      (lvl === 2 && l2Completed) ||
                      (lvl === 3 && l3Completed) ||
                      (lvl === 4 && l4Completed) ||
                      (lvl === 5 && l5BossDefeated);
                    const isActive = activeGameLevel === lvl;

                    return (
                      <button
                        key={lvl}
                        className={`plw-level-circle ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                        onClick={() => {
                          soundEffects.playClick();
                          setActiveGameLevel(lvl as 1 | 2 | 3 | 4 | 5);
                        }}
                        title={`Jump to Level ${lvl}`}
                      >
                        {isDone ? <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> : lvl}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card 2: Sprint Stats & Streak */}
              <div className="plw-card plw-score-streak-card">
                <strong className="plw-card-title mb-2 block">Score &amp; Streak</strong>
                <div className="plw-score-streak-grid">
                  <div className="plw-ss-tile">
                    <span className="text-amber-400 text-xl">⭐</span>
                    <div className="flex flex-col">
                      <strong className="plw-ss-val text-slate-800">+{gameXp} XP</strong>
                      <span className="plw-ss-lbl">Current XP</span>
                    </div>
                  </div>
                  <div className="plw-ss-tile">
                    <span className="text-orange-500 text-xl">🔥</span>
                    <div className="flex flex-col">
                      <strong className="plw-ss-val text-slate-800">{gameStreakDays} Days</strong>
                      <span className="plw-ss-lbl">Sprint Streak</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: AI NOVA Game Companion */}
              <div className="plw-card plw-hint-card">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-cyan-600" />
                    <strong className="plw-card-title">AI NOVA: Tactical Hint</strong>
                  </div>
                  <div className="plw-hint-penalty-chip">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-500" />
                    <span>Free Hint</span>
                  </div>
                </div>
                {showGameHint ? (
                  <p className="plw-hint-text animate-fade-in">
                    {activeGameLevel === 1 && '💡 Call the output function and pass the greeting string enclosed in parentheses.'}
                    {activeGameLevel === 2 && '💡 In f-strings, expressions inside curly braces {} evaluate to the variable values.'}
                    {activeGameLevel === 3 && '💡 Look closely at the spelling of the output statement on the infected line.'}
                    {activeGameLevel === 4 && '💡 Assemble the formula: multiply lessons by 10 and add the bonus variable.'}
                    {activeGameLevel === 5 && '💡 Notice: range(start, stop) runs from start up to stop - 1.'}
                  </p>
                ) : (
                  <p className="plw-hint-text text-slate-400 italic">
                    Tactical hint locked. Click below to reveal AI guidance if you need help.
                  </p>
                )}
                <button
                  className="plw-show-hint-btn"
                  onClick={() => {
                    soundEffects.playClick();
                    setShowGameHint((s) => !s);
                  }}
                >
                  <span>💡</span>
                  <span>{showGameHint ? 'Hide Tactical Hint' : 'Show Tactical Hint'}</span>
                </button>
              </div>

              {/* Card 4: Quick Action to Next Tab */}
              <div className="plw-card plw-fun-fact-card">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    {isTopicWithoutCoding ? <MessageSquare className="w-4 h-4 text-purple-600" /> : <Code2 className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <strong className="text-xs font-black text-slate-900 block mb-0.5">
                      {isTopicWithoutCoding ? 'Ready for Interview?' : 'Ready to Code?'}
                    </strong>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-2">
                      {isTopicWithoutCoding
                        ? 'Practice conceptual Q&A with your AI Mock Interview Coach.'
                        : 'Take what you practiced and write real code in Tab 4.'}
                    </p>
                    <button
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                      onClick={() => setActiveStep(isTopicWithoutCoding ? 'interview' : 'code')}
                    >
                      <span>
                        {isTopicWithoutCoding ? 'Jump to Mock Interview' : 'Jump to Coding Game'}
                      </span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Boss Victory Celebration Modal */}
            {l5VictoryModal && (
              <div className="l5-victory-modal-overlay animate-fade-in" onClick={() => setL5VictoryModal(false)}>
                <div className="l5-victory-modal-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
                  <div className="l5-modal-trophy-ring">
                    <Trophy className="w-12 h-12 text-amber-400 animate-bounce" />
                  </div>
                  <span className="l5-modal-eyebrow">MISSION ACCOMPLISHED</span>
                  <h3 className="l5-modal-title">CYBER SENTINEL DEFEATED! ⚔️</h3>
                  <p className="l5-modal-desc">
                    Outstanding performance! You conquered all 5 levels of the Python Arena.
                  </p>

                  <div className="l5-rewards-pills-row">
                    <div className="reward-pill xp">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span>+120 XP</span>
                    </div>
                    <div className="reward-pill coins">
                      <Coins className="w-4 h-4 text-amber-500 fill-amber-400" />
                      <span>+50 Coins</span>
                    </div>
                    <div className="reward-pill score">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span>100% Score</span>
                    </div>
                  </div>

                  <div className="l5-modal-actions-row">
                    <button
                      className="l5-modal-replay-btn"
                      onClick={() => {
                        handleL5ResetBoss();
                      }}
                    >
                      Play Again
                    </button>
                    <button
                      className="l5-modal-proceed-btn"
                      onClick={() => {
                        setL5VictoryModal(false);
                        setActiveStep(isTopicWithoutCoding ? 'interview' : 'code');
                      }}
                    >
                      <span>
                        {isTopicWithoutCoding ? 'Continue to Mock Interview' : 'Continue to Code Practice'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )
      )}

        {/* ═════════════════════════════════════════════════════════════════
            TAB 4: CODING PRACTICE (Exact 1:1 match to media_1791217752297.png)
            ═════════════════════════════════════════════════════════════════ */}
        {activeStep === 'code' && (
          <>
            {/* ── COLUMN 1: LEFT CHARACTER MENTOR CARD + PRO TIP (~22%) ── */}
            <div className="plw-code-left-col">
              {/* Character Card (~75% height) */}
              <div className="plw-code-char-card">
                <img
                  src="/images/student_pointing_robot.jpg"
                  alt="Student with Robot"
                  className="plw-code-char-bg"
                />
                <div className="plw-code-char-overlay" />

                {/* Speech Bubble */}
                <div className="plw-code-speech-bubble">
                  <p className="plw-code-speech-text">
                    Let's write<br />
                    some Python code<br />
                    together! 🚀
                  </p>
                  <div className="plw-code-speech-pointer" />
                </div>
              </div>

              {/* Pro Tip Card (~25% height) */}
              <div className="plw-code-protip-card">
                <div className="plw-protip-icon-box">
                  <span className="text-base">💡</span>
                </div>
                <div className="plw-protip-content">
                  <strong className="plw-protip-title">Pro Tip</strong>
                  <p className="plw-protip-desc">
                    Try writing the code yourself before using the hint. Practice makes perfect!
                  </p>
                </div>
              </div>
            </div>

            {/* ── COLUMN 2: CENTER CODE ARENA (~52%) ── */}
            <div className="plw-code-center-col">
              <div className="plw-code-arena-card">
                {/* 5-Challenge Selector Tabs Bar */}
                <div className="flex items-center gap-1.5 p-2 bg-slate-50 border-b border-slate-200 overflow-x-auto">
                  {currentTopicData.codingChallenges.map((ch, idx) => (
                    <button
                      key={ch.id}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                        activeChallengeIdx === idx
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                      onClick={() => {
                        soundEffects.playClick();
                        setActiveChallengeIdx(idx);
                        setPythonPracticeCode(ch.starterCode);
                        setPracticeTestStatus('idle');
                        setPracticeConsoleOutput('');
                      }}
                    >
                      <span>Challenge {ch.id}</span>
                    </button>
                  ))}
                </div>

                {/* Problem Header Bar */}
                <div className="plw-code-head-bar">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="plw-code-title-icon-box">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="plw-code-title">{activeChallenge.title}</h2>
                      <p className="plw-code-sub">{activeChallenge.prompt}</p>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                        <strong className="text-slate-700 font-bold">Approach: </strong>
                        <span>{activeChallenge.expectedApproach}</span>
                      </div>
                    </div>
                  </div>

                  <div className="plw-code-badges-row">
                    <span className="plw-badge-pill pill-easy">
                      <Check className="w-3 h-3 stroke-[3]" /> Easy
                    </span>
                    <span className="plw-badge-pill pill-points">
                      🏆 5 Points
                    </span>
                    <span className="plw-badge-pill pill-try">
                      🎮 Try it Yourself
                    </span>
                  </div>
                </div>

                {/* Dark Code Editor */}
                <div className={`plw-code-editor-box ${codeIsFullscreen ? 'is-fullscreen' : ''}`}>
                  {/* Editor Header Bar */}
                  <div className="plw-code-ed-header">
                    <div className="plw-code-file-tab">
                      <img src="/images/python_logo_3d_hd.png" alt="Python" className="w-3.5 h-3.5 object-contain" />
                      <span>main.py</span>
                      <ChevronRight className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="plw-code-ed-actions">
                      <button className="plw-ed-act-btn" onClick={handleResetPracticeCode}>
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                      <button className="plw-ed-act-btn" onClick={() => setCodeIsFullscreen((f) => !f)}>
                        <Maximize2 className="w-3 h-3" />
                        <span>Fullscreen</span>
                      </button>
                    </div>
                  </div>

                  {/* Code Editor Body with Line Numbers */}
                  <div className="plw-code-ed-body">
                    <div className="plw-code-gutter">
                      {Array.from({ length: Math.max(5, pythonPracticeCode.split('\n').length) }, (_, i) => (
                        <span key={i + 1}>{i + 1}</span>
                      ))}
                    </div>
                    <div className="plw-code-editor-layer-wrap">
                      <textarea
                        className="plw-code-textarea-input"
                        value={pythonPracticeCode}
                        onChange={(e) => setPythonPracticeCode(e.target.value)}
                        onKeyDown={(e) => {
                          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                            e.preventDefault();
                            handleRunPracticeCode();
                          }
                          if (e.key === 'Tab') {
                            e.preventDefault();
                            const target = e.currentTarget;
                            const start = target.selectionStart;
                            const end = target.selectionEnd;
                            const val = target.value;
                            setPythonPracticeCode(val.substring(0, start) + '    ' + val.substring(end));
                            setTimeout(() => {
                              target.selectionStart = target.selectionEnd = start + 4;
                            }, 0);
                          }
                        }}
                        spellCheck={false}
                        placeholder="# Write your Python code here..."
                      />
                    </div>
                  </div>
                </div>

                {/* 4 Action Buttons Row */}
                <div className="plw-code-actions-grid">
                  <button className="plw-act-btn btn-run" onClick={handleRunPracticeCode}>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Code</span>
                  </button>
                  <button className="plw-act-btn btn-submit" onClick={handleSubmitPracticeCode}>
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Submit</span>
                  </button>
                  <button className="plw-act-btn btn-hint" onClick={handleShowHint}>
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Hint</span>
                  </button>
                  <button className="plw-act-btn btn-solution" onClick={handleShowSolution}>
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Show Solution</span>
                  </button>
                </div>

                {/* Output Console Panel */}
                <div className="plw-code-output-panel">
                  <div className="plw-code-out-header">
                    <div className="flex items-center gap-1">
                      <button
                        className={`plw-out-tab-btn ${practiceActiveTab === 'output' ? 'active' : ''}`}
                        onClick={() => setPracticeActiveTab('output')}
                      >
                        <Keyboard className="w-3 h-3" />
                        <span>Output</span>
                      </button>
                      <button
                        className={`plw-out-tab-btn ${practiceActiveTab === 'console' ? 'active' : ''}`}
                        onClick={() => setPracticeActiveTab('console')}
                      >
                        <Terminal className="w-3 h-3" />
                        <span>Console</span>
                      </button>
                    </div>
                    <button className="plw-out-clear-btn" onClick={() => setPracticeConsoleOutput('')}>
                      <Trash2 className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  </div>
                  <div className="plw-code-out-content">
                    {practiceActiveTab === 'output' ? (
                      practiceConsoleOutput ? (
                        <pre className={`plw-terminal-text ${practiceConsoleIsError ? 'is-error' : ''}`}>
                          {practiceConsoleOutput}
                        </pre>
                      ) : (
                        <div className="plw-empty-terminal-prompt">
                          <span className="text-slate-500 font-mono text-xs">
                            # Terminal ready. Type your code above and click "▶ Run Code" (or Ctrl+Enter) to execute.
                          </span>
                        </div>
                      )
                    ) : (
                      <div className="plw-interactive-shell">
                        <div className="plw-shell-history">
                          {interactiveConsoleLines.map((line, idx) => (
                            <div key={idx} className="plw-shell-line">{line}</div>
                          ))}
                        </div>
                        <div className="plw-shell-prompt-row">
                          <span className="plw-shell-prompt-symbol">&gt;&gt;&gt;</span>
                          <input
                            type="text"
                            className="plw-shell-input"
                            value={interactiveInputVal}
                            onChange={(e) => setInteractiveInputVal(e.target.value)}
                            onKeyDown={handleInteractiveConsoleSubmit}
                            placeholder="type python expression, e.g. print('Hello!')"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── COLUMN 3: RIGHT SIDEBAR (~26%) ── */}
            <div className="plw-code-right-col">
              {/* Card 1: Instructions */}
              <div className="plw-code-side-card plw-instructions-card">
                <div className="plw-side-card-head">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🎯</span>
                    <strong className="plw-side-card-title">Instructions</strong>
                  </div>
                </div>
                <div className="plw-inst-list">
                  <div className="plw-inst-item">
                    <div className="plw-inst-check-dot">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <div className="plw-inst-body">
                      <span>Write a Python program to print the message:</span>
                      <div className="plw-inst-code-badge">
                        "Hello, Python!"
                      </div>
                    </div>
                  </div>

                  <div className="plw-inst-item">
                    <div className="plw-inst-check-dot">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <div className="plw-inst-body">
                      <span>Use the <code className="plw-inline-fn">print()</code> function.</span>
                    </div>
                  </div>

                  <div className="plw-inst-item">
                    <div className="plw-inst-check-dot">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <div className="plw-inst-body">
                      <span>Make sure the output matches exactly (including comma and exclamation).</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Hint (Optional) */}
              <div className="plw-code-side-card plw-hint-card">
                <div className="plw-side-card-head">
                  <div className="flex items-center gap-2">
                    <span className="text-base">💡</span>
                    <strong className="plw-side-card-title">Hint (Optional)</strong>
                  </div>
                  <span className="plw-penalty-chip">
                    <Clock className="w-2.5 h-2.5 inline mr-1" />
                    {practiceHintsList[currentHintIdx]?.penalty || '-1 point'}
                  </span>
                </div>
                <strong className="text-[11px] font-bold text-slate-800 block mb-0.5">
                  {practiceHintsList[currentHintIdx].title}
                </strong>
                <p className="plw-hint-desc">
                  {practiceHintsList[currentHintIdx].desc}
                </p>
                <div className="plw-hint-code-box">
                  <code>{practiceHintsList[currentHintIdx].code}</code>
                </div>
                <button className="plw-next-hint-btn" onClick={handleShowHint}>
                  <span className="text-xs mr-0.5">👁</span>
                  <span>Show Next Hint ({currentHintIdx + 1}/3)</span>
                </button>
              </div>

              {/* Card 3: Test Results */}
              <div className="plw-code-side-card plw-tests-card">
                <div className="plw-side-card-head">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🧪</span>
                    <strong className="plw-side-card-title">Test Results</strong>
                  </div>
                  <span className={`plw-test-score-chip ${practiceTestStatus === 'passed' ? 'passed' : practiceTestStatus === 'failed' ? 'failed' : 'idle'}`}>
                    {practiceTestStatus === 'passed' && <Check className="w-2.5 h-2.5 inline mr-1 stroke-[3]" />}
                    {practiceTestStatus === 'failed' && <AlertCircle className="w-2.5 h-2.5 inline mr-1 stroke-[3]" />}
                    {practiceTestStatus === 'idle' && <Clock className="w-2.5 h-2.5 inline mr-1 stroke-[3]" />}
                    {practiceTestStatus === 'passed' ? '1/1 Tests Passed' : practiceTestStatus === 'failed' ? '0/1 Tests Passed' : '0/1 Tests Run'}
                  </span>
                </div>
                <div className={`plw-test-row ${practiceTestStatus === 'passed' ? 'passed' : practiceTestStatus === 'failed' ? 'failed' : 'idle'}`}>
                  <div className={`plw-test-status-dot ${practiceTestStatus === 'passed' ? 'passed' : practiceTestStatus === 'failed' ? 'failed' : 'idle'}`}>
                    {practiceTestStatus === 'passed' ? (
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    ) : practiceTestStatus === 'failed' ? (
                      <AlertCircle className="w-3 h-3 text-white stroke-[3]" />
                    ) : (
                      <Clock className="w-3 h-3 text-slate-500 stroke-[3]" />
                    )}
                  </div>
                  <span className="plw-test-name">
                    {practiceTestStatus === 'passed'
                      ? 'Output matches expected text'
                      : practiceTestStatus === 'failed'
                      ? practiceTestReason || 'Output does not match expected text'
                      : 'Click "Run Code" to test against requirements'}
                  </span>
                </div>
              </div>
            </div>

            {/* ── REAL SOLUTION MODAL ── */}
            {showSolutionModal && (
              <div className="plw-solution-backdrop" onClick={() => setShowSolutionModal(false)}>
                <div className="plw-solution-modal" onClick={(e) => e.stopPropagation()}>
                  <div className="plw-sol-head">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        &lt;/&gt;
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-900 m-0">Solution: Print a Welcome Message</h3>
                        <span className="text-[11px] text-slate-500 font-medium">Read the code and explanation below</span>
                      </div>
                    </div>
                    <button className="plw-sol-close-btn" onClick={() => setShowSolutionModal(false)}>✕</button>
                  </div>

                  <div className="plw-sol-body">
                    <div className="plw-sol-code-box">
                      <div className="plw-sol-code-header">
                        <span className="text-[11px] font-mono text-slate-400">main.py</span>
                        <button
                          className="plw-sol-copy-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(activeChallenge.solutionCode);
                            soundEffects.playClick();
                            setCopiedSolution(true);
                            setTimeout(() => setCopiedSolution(false), 2000);
                          }}
                        >
                          {copiedSolution ? '✓ Copied' : '📋 Copy Code'}
                        </button>
                      </div>
                      <pre className="plw-sol-code-text">
                        {activeChallenge.solutionCode}
                      </pre>
                    </div>

                    <div className="plw-sol-explanation-box">
                      <strong className="text-xs font-bold text-slate-900 block mb-1">How this solution works:</strong>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                        <li><strong>print():</strong> Python's built-in standard output function.</li>
                        <li><strong>"Hello, Python!":</strong> The string literal passed inside quotation marks.</li>
                        <li>When executed, Python prints <code>Hello, Python!</code> to the terminal screen.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="plw-sol-footer">
                    <button
                      className="plw-sol-cancel-btn"
                      style={{ flex: 1, padding: '0.6rem 1rem', fontSize: '0.8rem', fontWeight: 800, background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1' }}
                      onClick={() => setShowSolutionModal(false)}
                    >
                      Close &amp; Write Code
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            TAB 5: AI MOCK INTERVIEW (Exact 1:1 match to media_1791216860858.jpg)
            ═════════════════════════════════════════════════════════════════ */}
        {/* ═════════════════════════════════════════════════════════════════
            TAB 5: 2050 3D HOLOGRAPHIC AI HR INTERVIEW ROOM
            Interactive Live Telepresence Boardroom with AURA (HR Director)
            ═════════════════════════════════════════════════════════════════ */}
        {/* ═════════════════════════════════════════════════════════════════
            TAB 5: REAL GOOGLE & MICROSOFT HR INTERVIEW (1:1 3-COLUMN DESKTOP LAYOUT)
            Left: Sarah Profile & Tips | Center: Chamber & Mic Console | Right: AI Feedback & Progress
            ═════════════════════════════════════════════════════════════════ */}
        {activeStep === 'interview' && (
          <>
            <ZeroCostMockInterviewRoom
              tabId={urlTabId}
              topicId={effectiveTopicId}
              userName={userName}
              language={activityLang}
              onLanguageChange={handleSelectActivityLang}
              hrSettings={hrSettings}
              onOpenHrSettings={() => setAdminHrModalOpen(true)}
              onBackToCourse={onBack}
              onSelectTopic={(nextId) => setEffectiveTopicId(nextId)}
              onEndInterview={(finalAveragePercent) => {
                if (typeof finalAveragePercent === 'number') {
                  setZeroCostInterviewScorePct(finalAveragePercent);
                }
                setInterviewSubmitted(true);
                handleSelectTab('score');
              }}
            />
            <AdminHrSettingsModal
              isOpen={adminHrModalOpen}
              onClose={() => setAdminHrModalOpen(false)}
              onSettingsSaved={(newSettings) => setHrSettings(newSettings)}
            />
          </>
        )}
        {false && activeStep === 'interview' && (() => {
          const hrName = hrSettings.hrName;
          const hrTitle = hrSettings.hrTitle;
          const hrPartner = hrSettings.hrRole;
          const hrPhoto = hrSettings.avatarUrl;
          const currentSpokenQuestion = getExactHrQuestion(interviewQuestionIdx, activityLang);
          const currentModelAnswer =
            activityLang === 'hi' && currentHindiActivity.interviews[interviewQuestionsList[interviewQuestionIdx]?.id]?.modelAnswer
              ? currentHindiActivity.interviews[interviewQuestionsList[interviewQuestionIdx]?.id].modelAnswer
              : (interviewQuestionsList[interviewQuestionIdx]?.modelAnswer ||
                'Programming is the process of writing clear, step-by-step logical instructions that tell a computer how to solve a problem or perform a task.');

          const recruiterPresets = [
            {
              id: 'avatar_sarah_female',
              shortName: 'Sarah',
              badge: 'US',
              avatarUrl: '/images/real_tech_hr_interviewer.jpg',
              hrName: 'Sarah Jenkins',
              hrTitle: 'Senior Technical Recruiter & Eng Lead',
              hrRole: 'Ex-Google & Microsoft Talent Partner',
              gender: 'female' as const,
            },
            {
              id: 'avatar_alex_male',
              shortName: 'Alex',
              badge: 'US',
              avatarUrl: '/images/male_tech_hr_interviewer.jpg',
              hrName: 'Alex Chen',
              hrTitle: 'Senior Technical Recruiter & Data Lead',
              hrRole: 'Google & Microsoft Talent Partner',
              gender: 'male' as const,
            },
            {
              id: 'avatar_priya_female',
              shortName: 'Priya',
              badge: 'IN',
              avatarUrl: '/images/hr_interviewer_indian_female.jpg',
              hrName: 'Priya Sharma',
              hrTitle: 'VP Engineering & Hiring Lead',
              hrRole: 'India Tech Talent Partner',
              gender: 'female' as const,
            },
            {
              id: 'avatar_rohan_male',
              shortName: 'Rohan',
              badge: 'IN',
              avatarUrl: '/images/hr_interviewer_indian_male.jpg',
              hrName: 'Rohan Verma',
              hrTitle: 'Principal Data Architect & Recruiter',
              hrRole: 'Tier-1 Analytics Hiring Partner',
              gender: 'male' as const,
            },
          ];

          return (
            <div className="plw-3col-interview-layout">
              {/* ═════════════════════════════════════════════════════════════
                  LEFT COLUMN: COMPACT INTERVIEWER CARD & CONTROLS
                  ═════════════════════════════════════════════════════════════ */}
              <aside className="plw-3col-left">
                <div className="plw-left-card interviewer-profile-card">
                  {/* Compact Header with Avatar + Verified Badge */}
                  <div className="plw-clean-hr-header">
                    <div className="plw-clean-hr-avatar-wrap">
                      <img src={hrPhoto} alt={hrName} className="plw-clean-hr-avatar" />
                      <span className="plw-clean-hr-live-dot" title="Online & Ready" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-sm font-black text-slate-900 tracking-tight m-0 truncate">
                          {hrName}
                        </h3>
                        <span className="text-[9.5px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          Verified HR
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-sky-700 leading-tight m-0 mt-0.5 truncate">
                        {hrTitle}
                      </p>
                      <p className="text-[10px] font-medium text-slate-500 m-0 truncate">
                        {hrPartner}
                      </p>
                    </div>
                  </div>

                  <div className="plw-profile-info-body">
                    {/* Role & CTC Compact Summary */}
                    <div className="plw-meta-boxes-grid">
                      <div className="plw-meta-box">
                        <span className="meta-box-label">Target Role</span>
                        <strong className="meta-box-value">Python / Data Analyst (L4)</strong>
                      </div>
                      <div className="plw-meta-box highlight-ctc">
                        <span className="meta-box-label">Package Band</span>
                        <strong className="meta-box-value text-emerald-600 font-black">₹18 LPA – ₹35 LPA</strong>
                      </div>
                    </div>

                    {/* 1-Click Recruiter Switcher (All 4 HR Avatars) */}
                    <div className="plw-profile-controls-strip">
                      <div className="flex items-center justify-between text-[10.5px] font-extrabold text-slate-600 mb-1">
                        <span>Select Interviewer:</span>
                        <span className="text-[9.5px] text-sky-600 font-bold">Lip-Sync AI</span>
                      </div>
                      <div className="plw-hr-grid-switcher">
                        {recruiterPresets.map((preset) => {
                          const isSelected =
                            hrSettings.hrName.toLowerCase().includes(preset.shortName.toLowerCase()) ||
                            hrSettings.avatarUrl === preset.avatarUrl;
                          return (
                            <button
                              key={preset.id}
                              type="button"
                              className={`plw-hr-chip-btn ${isSelected ? 'active' : ''}`}
                              onClick={() => {
                                soundEffects.playClick();
                                stopHrSpeaking();
                                stopInterviewRecording();
                                const res = HrSettingsService.saveSettings({
                                  avatarId: preset.id,
                                  avatarUrl: preset.avatarUrl,
                                  hrName: preset.hrName,
                                  hrTitle: preset.hrTitle,
                                  hrRole: preset.hrRole,
                                  gender: preset.gender,
                                });
                                if (res.success) setHrSettings(res.data);
                              }}
                            >
                              <img src={preset.avatarUrl} alt={preset.shortName} className="w-4 h-4 rounded-full object-cover" />
                              <span>{preset.shortName}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Interview Language Switcher */}
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 mt-1.5 pt-1.5 border-t border-slate-200/70">
                        <span>Language:</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            className={`plw-pill-btn ${activityLang === 'en' ? 'active' : ''}`}
                            onClick={() => {
                              handleSelectActivityLang('en');
                              stopHrSpeaking();
                              stopInterviewRecording();
                            }}
                          >
                            🇬🇧 English
                          </button>
                          <button
                            type="button"
                            className={`plw-pill-btn ${activityLang === 'hi' ? 'active' : ''}`}
                            onClick={() => {
                              handleSelectActivityLang('hi');
                              stopHrSpeaking();
                              stopInterviewRecording();
                            }}
                          >
                            🇮🇳 हिंदी
                          </button>
                        </div>
                      </div>

                      {/* Audio & Settings Quick Actions */}
                      <div className="grid grid-cols-2 gap-1.5 mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playClick();
                            if (isHrSpeaking) {
                              stopHrSpeaking();
                            } else {
                              speakHrQuestion(undefined, true);
                            }
                          }}
                          className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                            isHrSpeaking
                              ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                              : 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100'
                          }`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{isHrSpeaking ? 'Stop Voice' : 'Repeat Q'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setAdminHrModalOpen(true)}
                          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold transition-all cursor-pointer"
                          title="Configure HR Voice, Speed & Lip Sync"
                        >
                          <Settings className="w-3.5 h-3.5 text-sky-400" />
                          <span>Voice Setup</span>
                        </button>
                      </div>
                    </div>

                    {/* Built-in Golden Rules Strip (No overflowing 2nd card) */}
                    <div className="mt-2.5 pt-2.5 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 fill-amber-100" />
                        <strong className="text-[11px] font-black text-slate-800">
                          {activityLang === 'hi' ? 'इंटरव्यू के 3 मुख्य नियम' : '3 Golden Interview Tips'}
                        </strong>
                      </div>
                      <ul className="plw-3col-tips-list">
                        <li>
                          <Check className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span><strong>STAR Method:</strong> Concept → Example → Impact.</span>
                        </li>
                        <li>
                          <Check className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Real Analogy:</strong> Connect theory to practical code.</span>
                        </li>
                        <li>
                          <Check className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span><strong>Speak Clearly:</strong> Answer in Hindi or English.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>

              {/* ═════════════════════════════════════════════════════════════
                  CENTER COLUMN: LIVE HR VIDEO STAGE & CANDIDATE ANSWER CONSOLE
                  ═════════════════════════════════════════════════════════════ */}
              <main className="plw-3col-center">
                {/* 1. Center Stage with Seamless Mouth Lip-Sync Avatar */}
                <div className="plw-center-chamber-stage">
                  <StableMouthLipSyncAvatar
                    imageUrl={hrPhoto}
                    isSpeaking={isHrSpeaking}
                    speakingText={liveSpokenTypingText || spokenSubtitle || currentSpokenQuestion}
                    speakingRate={hrSettings.speakingRate}
                    gender={hrSettings.gender}
                    isLipSyncEnabled={hrSettings.isLipSyncEnabled}
                    className="plw-center-chamber-photo"
                  />

                  {/* Clean Top Status Bar */}
                  <div className="plw-stage-top-overlay">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="plw-badge-tag live-badge"
                        style={{ background: '#be123c', color: '#ffffff', border: '1px solid #f43f5e' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-white animate-ping inline-block" />
                        <span>LIVE 1-ON-1 INTERVIEW</span>
                      </div>
                      <div className="plw-top-company-badges hidden sm:inline-flex">
                        <span className="plw-badge-tag google">
                          <span className="font-black text-blue-600">G</span>
                          <span className="font-black text-rose-500">o</span>
                          <span className="font-black text-amber-500">o</span>
                          <span className="font-black text-blue-600">g</span>
                          <span className="font-black text-emerald-500">l</span>
                          <span className="font-black text-rose-500">e</span>
                        </span>
                        <span className="plw-badge-tag msft">
                          <svg className="w-3 h-3 inline-block mr-1" viewBox="0 0 24 24">
                            <rect x="1" y="1" width="10" height="10" fill="#f25022" />
                            <rect x="13" y="1" width="10" height="10" fill="#7fba00" />
                            <rect x="1" y="13" width="10" height="10" fill="#00a4ef" />
                            <rect x="13" y="13" width="10" height="10" fill="#ffb900" />
                          </svg>
                          Microsoft
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="plw-stage-q-counter">
                        <span className="dot" />
                        <span>
                          Q{interviewQuestionIdx + 1} / {interviewQuestionsList.length}
                        </span>
                      </div>

                      <div className="plw-stage-timer">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>
                          {Math.floor(interviewTimerSeconds / 60).toString().padStart(2, '0')}:
                          {(interviewTimerSeconds % 60).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clean White Live Question Ribbon at Bottom of Video Stage */}
                  <div className="plw-stage-speech-bubble is-speaking emergeFromSpeaker">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isHrSpeaking ? 'bg-emerald-500 animate-ping' : 'bg-sky-500'
                          }`}
                        />
                        <strong className="text-[11px] text-sky-800 font-extrabold uppercase tracking-wide">
                          {isHrSpeaking
                            ? `${hrName} (Speaking Live):`
                            : `${hrName} (Question ${interviewQuestionIdx + 1}):`}
                        </strong>
                      </div>

                      <div className="flex items-center gap-2">
                        {isHrSpeaking && (
                          <div className="plw-mini-speech-equalizer">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playClick();
                            if (isHrSpeaking) {
                              stopHrSpeaking();
                            } else {
                              speakHrQuestion(undefined, true);
                            }
                          }}
                          className="text-[10px] font-extrabold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-2 py-0.5 rounded border border-sky-200 transition-colors cursor-pointer pointer-events-auto"
                        >
                          {isHrSpeaking ? '⏹ Stop' : '🔊 Listen'}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-800 font-bold leading-relaxed m-0">
                      "{liveSpokenTypingText || spokenSubtitle || currentSpokenQuestion}"
                      {isHrSpeaking && (
                        <span className="inline-block w-1.5 h-3.5 bg-sky-600 ml-1 animate-pulse rounded-sm align-middle" />
                      )}
                    </p>
                  </div>
                </div>

                {/* 2. Candidate Response Console Card */}
                <div className="plw-center-console-card">
                  {/* Console Mode Switcher + 1-Click Sample Answer Helper */}
                  <div className="plw-console-header-bar">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        className={`plw-mode-pill ${interviewAnswerMode === 'speak' ? 'active' : ''}`}
                        onClick={() => {
                          soundEffects.playClick();
                          setInterviewAnswerMode('speak');
                        }}
                      >
                        <Mic className="w-3.5 h-3.5" />
                        <span>{activityLang === 'hi' ? 'बोलकर उत्तर दें (Voice)' : 'Voice Mode (Speak)'}</span>
                      </button>
                      <button
                        type="button"
                        className={`plw-mode-pill ${interviewAnswerMode === 'type' ? 'active' : ''}`}
                        onClick={() => {
                          soundEffects.playClick();
                          stopInterviewRecording();
                          setInterviewAnswerMode('type');
                        }}
                      >
                        <Keyboard className="w-3.5 h-3.5" />
                        <span>{activityLang === 'hi' ? 'टाइप करें (Type)' : 'Keyboard Mode (Type)'}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          stopHrSpeaking();
                          setInterviewAnswer(currentModelAnswer);
                        }}
                        className="text-[10.5px] font-extrabold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
                        title="Fill Ideal Sample Answer to test evaluation"
                      >
                        ✨ {activityLang === 'hi' ? 'सैंपल उत्तर भरें' : 'Use Sample Answer'}
                      </button>
                      {interviewAnswer && (
                        <button
                          type="button"
                          onClick={() => setInterviewAnswer('')}
                          className="text-[10.5px] font-bold text-slate-400 hover:text-rose-600 px-1.5 py-0.5 cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Voice Mode Viewport */}
                  {interviewAnswerMode === 'speak' && (
                    <div className="plw-voice-interactive-chamber">
                      <div className="plw-ergonomic-voice-row">
                        {/* Glowing Mic Button */}
                        <div className="plw-medium-mic-wrapper">
                          <button
                            type="button"
                            className={`plw-medium-mic-btn ${
                              isRecordingInterview ? 'recording blinking-light' : ''
                            }`}
                            onClick={toggleInterviewMic}
                            title={
                              isRecordingInterview
                                ? 'Click to pause microphone'
                                : `Click to speak your answer to ${hrName}`
                            }
                          >
                            <div className="medium-mic-glow" />
                            <Mic className="w-5 h-5 text-white relative z-10" />
                            {isRecordingInterview && (
                              <>
                                <span className="medium-mic-ripple-ring ring-1" />
                                <span className="medium-mic-ripple-ring ring-2" />
                              </>
                            )}
                          </button>
                          <span className={`plw-medium-mic-badge ${isRecordingInterview ? 'is-live' : ''}`}>
                            {isRecordingInterview ? 'REC ON' : 'TAP MIC'}
                          </span>
                        </div>

                        {/* Equalizer + Editable Real-Time Transcript Box */}
                        <div className="plw-voice-transcription-wrap">
                          <div className="plw-voice-status-line">
                            <div className="flex items-center gap-1.5">
                              {isRecordingInterview ? (
                                <>
                                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping inline-block" />
                                  <strong className="text-xs text-rose-600 font-black">
                                    {activityLang === 'hi'
                                      ? 'माइक ऑन है • अपना उत्तर बोलें या नीचे एडिट करें...'
                                      : 'Mic Active • Speak your answer now (or edit below)...'}
                                  </strong>
                                </>
                              ) : isHrSpeaking ? (
                                <>
                                  <Volume2 className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                                  <strong className="text-xs text-emerald-700 font-bold">
                                    {activityLang === 'hi'
                                      ? `${hrName} प्रश्न पूछ रहे हैं • इसके बाद माइक अपने आप ऑन होगा`
                                      : `${hrName} is speaking • Mic will auto-start when finished`}
                                  </strong>
                                </>
                              ) : (
                                <>
                                  <Mic className="w-3.5 h-3.5 text-sky-600" />
                                  <strong className="text-xs text-slate-700 font-bold">
                                    {activityLang === 'hi'
                                      ? 'माइक पर टैप करके बोलें या सीधा टाइप करें'
                                      : `Tap microphone to speak or type directly below`}
                                  </strong>
                                </>
                              )}
                            </div>

                            {/* Mini Audio Visualizer Wave */}
                            <div className="plw-mini-live-wave">
                              {[10, 18, 14, 22, 12, 20, 16, 8].map((h, i) => (
                                <span
                                  key={i}
                                  className={`mini-wave-bar ${isRecordingInterview ? 'is-active' : ''}`}
                                  style={{
                                    height: isRecordingInterview
                                      ? `${Math.max(6, (h * (1 + (i % 2) * 0.4)) % 22)}px`
                                      : '4px',
                                    animationDelay: `${i * 0.08}s`,
                                  }}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Editable Voice + Text Input Box */}
                          <textarea
                            className="plw-voice-editable-input"
                            rows={2}
                            placeholder={
                              activityLang === 'hi'
                                ? 'आप जो बोलेंगे वह रियल-टाइम में यहाँ दिखेगा (आप यहाँ टाइप या सुधार भी सकते हैं)...'
                                : 'Your spoken words appear here in real-time (you can also type or edit directly)...'
                            }
                            value={interviewAnswer}
                            onChange={(e) => setInterviewAnswer(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Keyboard Mode Viewport */}
                  {interviewAnswerMode === 'type' && (
                    <div className="plw-keyboard-interactive-chamber">
                      <textarea
                        className="plw-type-textarea"
                        placeholder={
                          activityLang === 'hi'
                            ? 'अपना उत्तर यहाँ स्पष्ट शब्दों में लिखें...'
                            : 'Type your structured interview answer here...'
                        }
                        value={interviewAnswer}
                        onChange={(e) => setInterviewAnswer(e.target.value)}
                        maxLength={1200}
                      />
                    </div>
                  )}

                  {/* Action Buttons Footer */}
                  <div className="plw-console-action-footer">
                    <button type="button" className="plw-action-skip-btn" onClick={handleSkipQuestion}>
                      <SkipForward className="w-3.5 h-3.5" />
                      <span>{activityLang === 'hi' ? 'अगला प्रश्न (Skip)' : 'Skip Question'}</span>
                    </button>

                    {interviewSubmitted ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="plw-action-skip-btn"
                          onClick={() => {
                            setInterviewSubmitted(false);
                            setInterviewFeedback(null);
                          }}
                        >
                          <span>{activityLang === 'hi' ? 'उत्तर बदलें' : 'Edit Answer'}</span>
                        </button>
                        <button
                          type="button"
                          className="plw-action-submit-btn next-q"
                          onClick={handleNextInterviewQuestion}
                        >
                          <span>
                            {interviewQuestionIdx < interviewQuestionsList.length - 1
                              ? activityLang === 'hi'
                                ? 'अगला प्रश्न (Next Question) →'
                                : 'Next Question →'
                              : activityLang === 'hi'
                              ? 'इंटरव्यू रिपोर्ट देखें →'
                              : 'Complete & View Report →'}
                          </span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className={`plw-action-submit-btn ${interviewAnswer.trim() ? 'active' : ''}`}
                        disabled={!interviewAnswer.trim() || isHrAnalyzing}
                        onClick={handleSubmitInterviewAnswer}
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>
                          {isHrAnalyzing
                            ? activityLang === 'hi'
                              ? 'मूल्यांकन हो रहा है...'
                              : 'Evaluating Answer...'
                            : activityLang === 'hi'
                            ? `${hrName} को उत्तर सबमिट करें →`
                            : `Submit Answer to ${hrName} →`}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </main>

              {/* ═════════════════════════════════════════════════════════════
                  RIGHT COLUMN: QUESTION NAVIGATOR, HINTS & LIVE AI EVALUATION
                  ═════════════════════════════════════════════════════════════ */}
              <aside className="plw-3col-right">
                {/* Card 1: Interview Questions Navigator (Q1 - Q5) */}
                <div className="plw-right-card progress-card">
                  <div className="flex items-center justify-between mb-1.5">
                    <strong className="text-xs font-black text-slate-900">
                      {activityLang === 'hi' ? 'प्रश्न नेविगेटर (Questions)' : 'Interview Questions'}
                    </strong>
                    <span className="text-[10px] font-extrabold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {interviewQuestionIdx + (interviewSubmitted ? 1 : 0)} / {interviewQuestionsList.length} Done
                    </span>
                  </div>

                  {/* Progress bar track */}
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-2">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-indigo-600 h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          100,
                          ((interviewQuestionIdx + (interviewSubmitted ? 1 : 0)) /
                            interviewQuestionsList.length) *
                            100
                        )}%`,
                      }}
                    />
                  </div>

                  {/* Question Pills Row */}
                  <div className="plw-q-pills-grid">
                    {interviewQuestionsList.map((_, idx) => {
                      const isCurrent = interviewQuestionIdx === idx;
                      const isPassed =
                        idx < interviewQuestionIdx || (idx === interviewQuestionIdx && interviewSubmitted);
                      return (
                        <button
                          key={idx}
                          type="button"
                          className={`plw-progress-pill ${isCurrent ? 'active' : ''} ${
                            isPassed ? 'passed' : ''
                          }`}
                          onClick={() => handleSelectQuestionIdx(idx)}
                        >
                          <span>Q{idx + 1}</span>
                          {isPassed && <Check className="w-2.5 h-2.5 ml-0.5 inline text-emerald-600" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card 2: Current Question Guide, Hints & Ideal Answer */}
                <div className="plw-center-question-card">
                  <div className="plw-q-tabs-row">
                    <button
                      type="button"
                      className={`plw-q-tab-btn ${interviewCardTab === 'question' ? 'active' : ''}`}
                      onClick={() => {
                        soundEffects.playClick();
                        setInterviewCardTab('question');
                      }}
                    >
                      {activityLang === 'hi' ? 'प्रश्न (Question)' : 'Question'}
                    </button>
                    <button
                      type="button"
                      className={`plw-q-tab-btn ${interviewCardTab === 'hints' ? 'active' : ''}`}
                      onClick={() => {
                        soundEffects.playClick();
                        setInterviewCardTab('hints');
                      }}
                    >
                      💡 {activityLang === 'hi' ? 'हिंट (Hints)' : 'Hints'}
                    </button>
                    <button
                      type="button"
                      className={`plw-q-tab-btn ${interviewCardTab === 'context' ? 'active' : ''}`}
                      onClick={() => {
                        soundEffects.playClick();
                        setInterviewCardTab('context');
                      }}
                    >
                      📖 {activityLang === 'hi' ? 'आदर्श उत्तर' : 'Model Answer'}
                    </button>
                  </div>

                  <div className="plw-q-tab-content">
                    {interviewCardTab === 'question' && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug m-0">
                          "{currentSpokenQuestion}"
                        </h4>
                        <p className="text-[11px] text-slate-500 font-semibold mt-1.5 mb-0">
                          🎯 {interviewQuestionsList[interviewQuestionIdx]?.tag || 'Core Concept & Practical Application'}
                        </p>
                      </div>
                    )}

                    {interviewCardTab === 'hints' && (
                      <div className="text-xs text-slate-700 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/70">
                        <strong className="text-amber-900 font-bold block mb-1">
                          💡 {activityLang === 'hi' ? 'उत्तर कैसे दें:' : 'How to Structure Your Answer:'}
                        </strong>
                        <ul className="m-0 pl-4 space-y-1 text-[11px]">
                          <li>Start with a clear 1-line definition.</li>
                          <li>Give a simple real-life or coding example.</li>
                          <li>Mention why it is useful in real projects.</li>
                        </ul>
                      </div>
                    )}

                    {interviewCardTab === 'context' && (
                      <div className="text-xs text-slate-700 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200/70">
                        <div className="flex items-center justify-between mb-1">
                          <strong className="text-emerald-900 font-bold text-[11px]">
                            📖 {activityLang === 'hi' ? 'आदर्श उत्तर (Benchmark):' : 'Benchmark Model Answer:'}
                          </strong>
                          <button
                            type="button"
                            onClick={() => speakHrQuestion(currentModelAnswer, true, false)}
                            className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200 hover:bg-emerald-100 cursor-pointer"
                          >
                            🔊 Listen
                          </button>
                        </div>
                        <p className="m-0 text-[11px] leading-relaxed text-slate-700">
                          {currentModelAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card 3: Live AI Evaluation & Feedback Card */}
                {isHrAnalyzing ? (
                  <div className="plw-eval-evaluating-strip">
                    <RefreshCw className="w-4 h-4 text-cyan-600 animate-spin shrink-0" />
                    <strong className="text-cyan-900 text-xs font-bold">
                      {activityLang === 'hi'
                        ? `${hrName} आपके उत्तर का विश्लेषण कर रहे हैं...`
                        : `${hrName} is evaluating your response...`}
                    </strong>
                  </div>
                ) : interviewSubmitted ? (
                  <div className="plw-eval-submitted-card">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <strong className="text-xs font-black text-slate-900">
                          {activityLang === 'hi' ? 'AI इंटरव्यू मूल्यांकन' : 'AI Interview Evaluation'}
                        </strong>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        9.6 / 10 • Strong Hire
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed mb-2">
                      {interviewFeedback}
                    </p>

                    <div className="bg-white/90 p-2 rounded-lg border border-emerald-200 mb-2">
                      <span className="text-[10px] font-bold text-emerald-800 block mb-0.5">
                        💡 {activityLang === 'hi' ? 'आदर्श उत्तर (Reference):' : 'Ideal Reference Answer:'}
                      </span>
                      <p className="text-[11px] text-slate-600 m-0 leading-snug">
                        {currentModelAnswer}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="plw-action-submit-btn next-q w-full justify-center"
                      onClick={handleNextInterviewQuestion}
                    >
                      <span>
                        {interviewQuestionIdx < interviewQuestionsList.length - 1
                          ? activityLang === 'hi'
                            ? `अगला प्रश्न (${hrName}) →`
                            : `Next Question from ${hrName} →`
                          : activityLang === 'hi'
                          ? 'इंटरव्यू पूरा करें और रिपोर्ट देखें →'
                          : 'Complete Interview & View Report →'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="plw-right-card eval-waiting-card">
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-sky-500 fill-sky-100" />
                        <strong className="text-xs font-black text-slate-900">
                          {activityLang === 'hi' ? 'लाइव AI स्कोर और फीडबैक' : 'Live AI Score & Feedback'}
                        </strong>
                      </div>
                      <span className="text-[9.5px] font-extrabold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        Instant Grading
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed m-0">
                      {activityLang === 'hi'
                        ? `माइक पर बोलकर या टाइप करके अपना उत्तर सबमिट करें। ${hrName} तुरंत आपके उत्तर को 10 में से स्कोर देंगे और आवाज़ के साथ फीडबैक बताएंगे।`
                        : `Speak into the mic or type your answer and click Submit. ${hrName} will instantly grade your answer out of 10 with live voice feedback.`}
                    </p>
                  </div>
                )}
              </aside>

              {/* Admin HR Settings Modal */}
              <AdminHrSettingsModal
                isOpen={adminHrModalOpen}
                onClose={() => setAdminHrModalOpen(false)}
                onSettingsSaved={(newSettings) => setHrSettings(newSettings)}
              />
            </div>
          );
        })()}

        {/* ═════════════════════════════════════════════════════════════════
        {/* ═════════════════════════════════════════════════════════════════
            TAB 6: DYNAMIC REPORT / TOPIC MASTERY (Exact 1:1 match to media_1791246765299.jpg)
            ═════════════════════════════════════════════════════════════════ */}
        {activeStep === 'score' && (
          <div className="ptw-report-wrapper">
            {/* Optional Dynamic Tier Filter Bar (hidden by default to match screenshot 1:1) */}
            {showTierSwitcher && (
              <div className="ptw-report-tier-switcher">
                <div className="flex items-center gap-2">
                  <span className="tier-switcher-label">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-100" />
                    <span>Report Tier:</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium hidden md:inline">
                    (Auto-calculated from Video + MCQ + Game + Code + Interview)
                  </span>
                </div>
                <div className="tier-switcher-buttons">
                  {[
                    { tier: 'auto', label: '⚡ Live Score' },
                    { tier: 1, label: '🏆 96% Excellent' },
                    { tier: 2, label: '🚀 82% Great' },
                    { tier: 3, label: '⭐ 72% Good' },
                    { tier: 4, label: '🎯 58% Practice' },
                    { tier: 5, label: '🔄 36% Retry' },
                  ].map((item) => (
                    <button
                      key={String(item.tier)}
                      className={`tier-switch-btn ${reportActiveTier === item.tier ? 'active' : ''}`}
                      onClick={() => {
                        soundEffects.playClick();
                        setReportActiveTier(item.tier as any);
                      }}
                    >
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main 3-Column Dashboard Grid matching media_1791247836069.jpg */}
            <div className="ptw-report-grid-container">
              {/* ── COLUMN 1 (LEFT ~33%): HERO CHARACTER VIDEO CARD ── */}
              <div className="report-col-left">
                <div
                  className="ptw-report-hero-card"
                  style={{
                    boxShadow: `0 12px 36px ${currentTierData.primaryColor}33`,
                    borderColor: `${currentTierData.primaryColor}66`,
                    background: '#0a0f24',
                  }}
                >
                  <video
                    key="report-video-player"
                    className="report-hero-full-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/test_frame.png"
                  >
                    <source src="/videos/report_student_workspace.mp4" type="video/mp4" />
                    <source src="/videos/report_student_workspace.gif" type="image/gif" />
                    <img
                      src="/videos/report_student_workspace.gif"
                      alt={currentTierData.title}
                      className="report-hero-full-img"
                    />
                  </video>

                  {/* Top & Bottom Ambient Overlays */}
                  <div className="report-video-gradient-top" />
                  <div className="report-video-gradient-bottom" />

                  {/* Top: Dynamic Tier Header Badge */}
                  <div className="report-video-top-badge-wrap">
                    <div
                      className="report-video-tier-badge"
                      style={{
                        borderColor: currentTierData.primaryColor,
                        boxShadow: `0 4px 16px ${currentTierData.primaryColor}40`,
                      }}
                    >
                      <span className="text-base">{currentTierData.icon}</span>
                      <div className="flex flex-col text-left">
                        <strong className="text-xs font-black text-white leading-tight">
                          {currentTierData.title}
                        </strong>
                        <span className="text-[10px] font-semibold" style={{ color: currentTierData.primaryColor }}>
                          {currentTierData.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Dynamic Speech Bubble */}
                  <div className="report-video-bottom-speech-wrap">
                    <div
                      className="report-video-speech-bubble"
                      style={{
                        borderLeftColor: currentTierData.primaryColor,
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ background: currentTierData.primaryColor }} />
                        <strong className="text-xs font-black" style={{ color: currentTierData.primaryColor }}>
                          {currentTierData.speechTitle}
                        </strong>
                      </div>
                      <p className="text-[11px] text-slate-800 font-semibold leading-relaxed m-0">
                        {currentTierData.speechText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── COLUMN 2 (CENTER ~37%): OVERALL PERFORMANCE + STRENGTHS ── */}
              <div className="report-col-center">
                {/* Overall Performance Card */}
                <div className="report-analytic-card perf-card">
                  <h3 className="analytic-card-title">Overall Performance</h3>
                  <div className="perf-card-body">
                    {/* Donut Gauge */}
                    <div className="donut-gauge-wrap">
                      <svg className="donut-gauge-svg" viewBox="0 0 100 100">
                        <circle className="donut-bg-circle" cx="50" cy="50" r="40" />
                        <circle
                          className="donut-fill-circle"
                          cx="50"
                          cy="50"
                          r="40"
                          style={{
                            stroke: currentTierData.primaryColor,
                            strokeDasharray: 2 * Math.PI * 40,
                            strokeDashoffset:
                              2 * Math.PI * 40 - (currentTierData.displayScore / 100) * (2 * Math.PI * 40),
                          }}
                        />
                      </svg>
                      <div className="donut-center-label">
                        <strong className="donut-score-val">{currentTierData.displayScore}%</strong>
                        <span className="donut-score-sub">Final Score</span>
                      </div>
                    </div>

                    {/* 5 Breakdown Bars */}
                    <div className="perf-bars-column">
                      {[
                        { key: 'video', icon: <Play className="w-2.5 h-2.5 text-white fill-white" />, iconBg: '#0284c7', label: 'Video', val: currentTierData.scores.video },
                        { key: 'mcq', icon: <FileText className="w-2.5 h-2.5 text-white" />, iconBg: '#0ea5e9', label: 'MCQ', val: currentTierData.scores.mcq },
                        { key: 'game', icon: <Gamepad2 className="w-2.5 h-2.5 text-white" />, iconBg: '#10b981', label: 'Game', val: currentTierData.scores.game },
                        { key: 'code', icon: <Code2 className="w-2.5 h-2.5 text-white" />, iconBg: '#6366f1', label: 'Code', val: currentTierData.scores.code },
                        { key: 'interview', icon: <Mic className="w-2.5 h-2.5 text-white" />, iconBg: '#a855f7', label: 'Interview', val: currentTierData.scores.interview },
                      ].filter((item) => !isTopicWithoutCoding || item.key !== 'code').map((item) => (
                        <div key={item.key} className="perf-bar-row">
                          <div className="perf-bar-meta">
                            <span className="perf-bar-icon-bubble" style={{ background: item.iconBg }}>
                              {item.icon}
                            </span>
                            <span className="perf-bar-name">{item.label}</span>
                          </div>
                          <div className="perf-bar-track">
                            <div
                              className="perf-bar-fill"
                              style={{
                                width: `${item.val}%`,
                                background: currentTierData.primaryColor,
                              }}
                            />
                          </div>
                          <span className="perf-bar-pct" style={{ color: currentTierData.primaryColor }}>
                            {item.val}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Strengths Card */}
                <div className="report-analytic-card strengths-card">
                  <div className="card-header-with-action">
                    <div className="analytic-badge-head strengths-head">
                      <div className="badge-icon-check">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                      <span className="strengths-title-text">Strengths</span>
                    </div>
                    <BarChart3 className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>
                  <ul className="analytic-bullets-list strengths-list">
                    {currentTierData.strengths.map((str, idx) => (
                      <li key={idx}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── COLUMN 3 (RIGHT ~30%): ACCURACY + [TIME | RANK] + SUGGESTIONS ── */}
              <div className="report-col-right">
                {/* Accuracy Card */}
                <div className="report-analytic-card accuracy-card">
                  <div className="accuracy-card-inner">
                    <div className="accuracy-star-badge">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div className="accuracy-text-center">
                      <span className="accuracy-label">Accuracy</span>
                      <strong className="accuracy-number">{currentTierData.accuracy}</strong>
                      <span className="accuracy-sub">Questions Correct</span>
                    </div>
                    <div className="accuracy-target-badge">
                      <Target className="w-6 h-6 text-sky-500" />
                    </div>
                  </div>
                </div>

                {/* Middle Strip: Split 2-tile row */}
                <div className="report-metrics-split-row">
                  {/* Time Spent Tile */}
                  <div className="report-metric-tile time-tile">
                    <div className="metric-tile-icon time-icon">
                      <Clock className="w-4 h-4 text-sky-500" />
                    </div>
                    <div className="metric-tile-content">
                      <span className="metric-tile-lbl">Time Spent</span>
                      <strong className="metric-tile-val">{currentTierData.timeSpent}</strong>
                      <span className="metric-tile-sub">{currentTierData.timeTarget}</span>
                    </div>
                  </div>

                  {/* Rank Tile */}
                  <div className="report-metric-tile rank-tile">
                    <div className="metric-tile-icon rank-icon">
                      <Trophy className="w-4 h-4 text-amber-500 fill-amber-100" />
                    </div>
                    <div className="metric-tile-content">
                      <span className="metric-tile-lbl">Rank</span>
                      <strong className="metric-tile-val">{currentTierData.rank}</strong>
                      <span className="metric-tile-sub">{currentTierData.learnersText}</span>
                    </div>
                  </div>
                </div>

                {/* Suggestions Card */}
                <div className="report-analytic-card suggestions-card">
                  <div className="card-header-with-action">
                    <div className="analytic-badge-head suggestions-head">
                      <div className="badge-icon-bulb">
                        <Lightbulb className="w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="suggestions-title-text">Suggestions</span>
                    </div>
                    <BarChart3 className="w-4 h-4 text-amber-500 shrink-0" />
                  </div>
                  <ul className="analytic-bullets-list suggestions-list">
                    {currentTierData.suggestions.map((sug, idx) => (
                      <li key={idx}>
                        <Target className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{sug}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── BOTTOM ACTIONS BAR (Spans Columns 2 & 3) ── */}
              <div className="report-actions-bottom-row">
                <button
                  className="report-btn btn-back"
                  onClick={() => {
                    soundEffects.playClick();
                    handleSelectTab('learn');
                  }}
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Review Topic</span>
                </button>

                <button
                  className="report-btn btn-download-pdf"
                  onClick={handleDownloadPdf}
                >
                  <span className="pdf-icon-badge">PDF</span>
                  <span>Download Report (PDF)</span>
                </button>

                <button
                  className="report-btn btn-next-topic"
                  onClick={() => {
                    soundEffects.playCelebration();
                    try {
                      markTopicComplete(topicId);
                    } catch (e) {
                      console.warn(e);
                    }
                    if (onNavigateNextTopic) onNavigateNextTopic();
                    else onBack();
                  }}
                >
                  <span>Next Topic →</span>
                </button>
              </div>
            </div>

            {/* PDF Toast Notification */}
            {pdfToast && (
              <div className="report-pdf-toast">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Preparing {userName}'s Topic Mastery Report (PDF)...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
