import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Lock,
  Code2,
  Terminal,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Check,
  RotateCcw,
  Play,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Copy,
  BookOpen,
  Award,
  GraduationCap,
  Lightbulb,
  FileCode,
  Menu,
  X,
  GitBranch,
  Repeat,
  Box,
  Package,
  FileText,
  AlertTriangle,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  PYTHON_CLASSROOM_SECTIONS,
  CurriculumTopic,
  TOTAL_CURRICULUM_LESSONS,
  getAllCurriculumTopics,
  getDefaultTopic,
  getTopicById,
  getNextTopic,
} from './data/pythonVisualClassroomCurriculum';
import { soundEffects } from '../../services/soundEffects';
import { executePythonCodeLocally } from '../../services/pythonRunner';
import {
  generatePythonExecutionTrace,
  ExecutionTraceStep,
  extractLineConcepts,
  generateHinglishLineTitle,
  generateHinglishLineDescription,
  generateHinglishTeacherNarration,
} from './pythonTraceEngine';
import { useFreeSpeechTeacher } from './useFreeSpeechTeacher';
import { FullPythonCodePanel } from './v4/FullPythonCodePanel';
import { VisualExplanationPanel } from './v4/VisualExplanationPanel';
import { languageEngine } from '../../services/visualLearningLanguageEngine';
import { getTopicQuestions, TopicQuestion } from './data/pythonBasics140QuestionsData';
import { generateQuestionMatchedExplanation } from './questionExplanationEngine';
import { SmartPythonClassroomV5 } from './SmartPythonClassroomV5';
import { PythonChallengesPracticeHub } from './PythonChallengesPracticeHub';

// Real Official Animated Python Vector Icon
const AnimatedPythonIcon: React.FC<{ size?: number; className?: string }> = ({ size = 30, className = '' }) => (
  <motion.div
    animate={{ y: [0, -2.5, 0], rotate: [0, 1.5, -1.5, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    className={`relative shrink-0 flex items-center justify-center ${className}`}
  >
    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xs pointer-events-none" />
    <svg viewBox="0 0 128 128" style={{ width: size, height: size }} className="shrink-0 relative z-10 drop-shadow-sm select-none">
      <path
        fill="url(#py-blue-v5)"
        d="M63.2 0c-15.6 0-25 6.6-29.2 12.3-5 6.8-5.7 13.9-5.7 21.6v9.4h35.2v4.7H18.9c-8 0-14.9 4.7-17 13.8C-.2 71.4-.6 81.3 1.9 90.6c2.2 8.3 8.3 13.7 17 13.7h11.2v-15.5c0-8.8 7.4-16.5 16.5-16.5h34.8c7.3 0 13.3-6.2 13.3-13.5V34c0-7.3-6.2-13-13.5-13.7l-4.7-.3c0-3.3.3-7.5-.7-10.7C74.6 3.4 68.6 0 63.2 0zm-10 10.4c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1z"
      />
      <path
        fill="url(#py-yellow-v5)"
        d="M64.8 128c15.6 0 25-6.6 29.2-12.3 5-6.8 5.7-13.9 5.7-21.6v-9.4H64.5V80h44.6c8 0 14.9-4.7 17-13.8 2.1-9.6 2.5-19.5 0-28.8-2.2-8.3-8.3-13.7-17-13.7H97.9v15.5c0 8.8-7.4 16.5-16.5 16.5H46.6c-7.3 0-13.3 6.2-13.3 13.5V94c0 7.3 6.2 13 13.5 13.7l4.7.3c0 3.3-.3 7.5.7 10.7 1.9 5.9 7.9 9.3 12.6 9.3zm10-10.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z"
      />
      <defs>
        <linearGradient id="py-blue-v5" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#387eb8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py-yellow-v5" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#ffe873" />
          <stop offset="100%" stopColor="#ffd43b" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

export interface PythonVisualClassroomHubProps {
  onBack?: () => void;
  initialTopicId?: string;
  userName?: string;
}

export const PythonVisualClassroomHub: React.FC<PythonVisualClassroomHubProps> = ({
  onBack,
  initialTopicId,
  userName = 'Rahul',
}) => {
  // Active classroom topic ID. If null, the SQL-style 13-Module Hub is displayed!
  const [activeClassroomTopicId, setActiveClassroomTopicId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash || '';
      const match = hash.match(/[?&]topic=([^&]+)/);
      if (match && match[1]) {
        return match[1];
      }
    }
    if (initialTopicId) {
      return initialTopicId;
    }
    return null; // Defaults to the SQL-style 13-Module Hub view
  });

  // Keep synced with browser URL hash & Chrome back/forward navigation
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash || '';
      if (h.includes('#python-classroom') || h.includes('#python-challenges') || h.includes('#pythonchallenges')) {
        const match = h.match(/[?&]topic=([^&]+)/);
        if (match && match[1]) {
          setActiveClassroomTopicId(match[1]);
          const found = getTopicById(match[1]);
          if (found) setCurrentTopic(found);
        } else {
          setActiveClassroomTopicId(null);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  // Current active topic (syncs with URL hash or initialTopicId or localStorage)
  const [currentTopic, setCurrentTopic] = useState<CurriculumTopic>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash || '';
      const match = hash.match(/[?&]topic=([^&]+)/);
      if (match && match[1]) {
        const found = getTopicById(match[1]);
        if (found) return found;
      }
      try {
        const saved = localStorage.getItem('futureai_py_last_topic');
        if (saved) {
          const foundSaved = getTopicById(saved);
          if (foundSaved) return foundSaved;
        }
      } catch {}
    }
    if (initialTopicId) {
      const found = getTopicById(initialTopicId);
      if (found) return found;
    }
    return getDefaultTopic();
  });

  // Primary Workspace Tab: exactly two tabs
  const [activeTab, setActiveTab] = useState<'visualization' | 'practice'>('visualization');

  // Visualization Step index: 0-indexed pointer into dynamic execution trace
  const [stepIdx, setStepIdx] = useState<number>(0);

  // V4 Universal Visual Classroom states (Defaults to authentic Indian language Hinglish)
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [teachingLanguage, setTeachingLanguage] = useState<'en' | 'hi'>('hi');

  // Mobile syllabus drawer toggle
  const [isMobileSyllabusOpen, setIsMobileSyllabusOpen] = useState<boolean>(false);

  // Expanded sections in left sidebar
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    '01_basics': true,
  });

  // Real completed topics tracker stored in localStorage
  const [completedTopicIds, setCompletedTopicIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('futureai_py_completed_topics');
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set<string>();
  });

  // ── Multi-Question Architecture (Module 01: 140 Questions, 10 per Topic) ──
  const topicQuestions: TopicQuestion[] = useMemo(() => {
    return getTopicQuestions(currentTopic.id);
  }, [currentTopic.id]);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);

  // Active sub-question within the topic if available
  const currentQuestion: TopicQuestion | null = useMemo(() => {
    if (topicQuestions && topicQuestions.length > 0) {
      return topicQuestions[selectedQuestionIndex] || topicQuestions[0];
    }
    return null;
  }, [topicQuestions, selectedQuestionIndex]);

  // Student practice state
  const [studentCode, setStudentCode] = useState<string>(() => {
    const qList = getTopicQuestions(currentTopic.id);
    return qList.length > 0 ? qList[0].starterCode : currentTopic.practice.starterCode;
  });
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<
    Array<{ id: number; input: string; expected: string; actual: string; passed: boolean }>
  >([]);
  const [practicePassed, setPracticePassed] = useState<boolean>(false);
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  const allCurriculumTopics = useMemo(() => getAllCurriculumTopics(), []);

  // Determine if a topic is unlocked — All topics unlocked per user request
  const isTopicUnlocked = useCallback(
    (_topicId: string) => true,
    []
  );

  const nextTopic = useMemo(() => getNextTopic(currentTopic.id), [currentTopic.id]);

  const currentSection = useMemo(() => {
    return (
      PYTHON_CLASSROOM_SECTIONS.find((s) => s.topics.some((t) => t.id === currentTopic.id)) ||
      PYTHON_CLASSROOM_SECTIONS[0]
    );
  }, [currentTopic.id]);

  const topicIdx = useMemo(() => {
    return currentSection.topics.findIndex((t) => t.id === currentTopic.id);
  }, [currentSection, currentTopic.id]);

  const topicBadge = useMemo(() => {
    const secNum = currentSection.sectionNumber || '01';
    const topNum = String((topicIdx >= 0 ? topicIdx : 0) + 1).padStart(2, '0');
    return `PY-${secNum}-${topNum}`;
  }, [currentSection, topicIdx]);

  const progressPercent = useMemo(() => {
    const total = TOTAL_CURRICULUM_LESSONS || 196;
    return Math.min(100, Math.round(((completedTopicIds.size || 1) / total) * 100 * 10) / 10);
  }, [completedTopicIds.size]);

  useEffect(() => {
    if (currentSection) {
      setExpandedSections((prev) => ({
        ...prev,
        [currentSection.id]: true,
      }));
    }
  }, [currentSection]);

  // Normalized reference code (handles real or escaped newlines, switches by question)
  const normalizedReferenceCode = useMemo(() => {
    const raw = currentQuestion ? currentQuestion.referenceCode : currentTopic.referenceCode;
    return (raw || '').replace(/\\n/g, '\n').replace(/\\r/g, '');
  }, [currentQuestion, currentTopic.referenceCode]);

  // Active practice starter code and test cases
  const activeStarterCode = useMemo(() => {
    return currentQuestion ? currentQuestion.starterCode : currentTopic.practice.starterCode;
  }, [currentQuestion, currentTopic.practice.starterCode]);

  const activeTestCases = useMemo(() => {
    return currentQuestion?.testCases && currentQuestion.testCases.length > 0
      ? currentQuestion.testCases
      : currentTopic.practice.testCases;
  }, [currentQuestion, currentTopic.practice.testCases]);

  // ── Universal Execution Trace Computation ──
  // STRICT RULE: 1 MAIN STEP = 1 EXECUTED CODE LINE.
  const traceSteps: ExecutionTraceStep[] = useMemo(() => {
    const sampleInputStr = currentQuestion ? currentQuestion.sampleInput : currentTopic.practice.sampleInput;
    const sampleInputLines = sampleInputStr
      ? sampleInputStr.split('\n').filter(Boolean)
      : ['10', '20', '30'];
    return generatePythonExecutionTrace(normalizedReferenceCode, sampleInputLines);
  }, [normalizedReferenceCode, currentQuestion, currentTopic.practice.sampleInput]);

  // Active step snapshot (100% deterministic historical state)
  const safeStepIdx = stepIdx < traceSteps.length ? stepIdx : 0;
  const activeStep: ExecutionTraceStep = traceSteps[safeStepIdx] || traceSteps[0] || {
    stepNumber: 1,
    totalSteps: 1,
    lineNumber: 1,
    lineContent: normalizedReferenceCode.split('\n')[0] || '',
    opType: 'general',
    variables: [],
    callStack: [{ functionName: '__main__', lineNumber: 1, args: {}, depth: 0 }],
    consoleOutput: '',
    explanation: 'Executing Python code line by line.',
    keyTakeaway: 'Python programs top to bottom sequentially execute hote hain.',
    diagram: { opType: 'general' },
  };

  // ── Question-Matched Indian Language Explanation & Spoken Voice Narration ──
  // STRICT RULE: Indian Language = Natural Hindi grammar + English technical terminology.
  // Both Explanation (Section C) and Voice Narration (TTS) directly match the current question!
  const questionMatchedData = useMemo(() => {
    return generateQuestionMatchedExplanation({
      question: currentQuestion,
      topicTitle: currentTopic.title,
      step: activeStep,
      totalSteps: traceSteps.length,
    });
  }, [currentQuestion, currentTopic.title, activeStep, traceSteps.length]);

  // Spoken voice narration strictly matched to current question in authentic Hinglish
  const narrationText = useMemo(() => {
    if (teachingLanguage === 'hi') {
      return questionMatchedData.narration;
    }
    return activeStep.keyTakeaway || activeStep.explanation || questionMatchedData.title;
  }, [teachingLanguage, questionMatchedData, activeStep]);

  // Free Web Speech API Voice Teacher Hook
  const {
    playbackState,
    isMuted,
    play: playSpeech,
    pause: pauseSpeech,
    replay: replaySpeech,
    toggleMute: toggleSpeechMute,
  } = useFreeSpeechTeacher({
    narrationText,
  });


  const topicIndexInSection = useMemo(() => {
    if (!currentSection) return 0;
    return currentSection.topics.findIndex((t) => t.id === currentTopic.id);
  }, [currentSection, currentTopic.id]);

  const totalTopicsInSection = useMemo(() => {
    return currentSection ? currentSection.topics.length : 1;
  }, [currentSection]);

  // Sub-question selection handler
  const handleSelectQuestion = (index: number) => {
    soundEffects.playClick?.();
    setSelectedQuestionIndex(index);
    setStepIdx(0);
    setIsStarted(false);
    const q = topicQuestions[index];
    if (q) {
      setStudentCode(q.starterCode);
      setTestResults([]);
      setPracticePassed(false);
    }
  };

  // Sync starter code & reset step when topic changes
  useEffect(() => {
    setSelectedQuestionIndex(0);
    const qList = getTopicQuestions(currentTopic.id);
    if (qList.length > 0) {
      setStudentCode(qList[0].starterCode);
    } else {
      setStudentCode(currentTopic.practice.starterCode);
    }
    setStepIdx(0);
    setIsStarted(false);
    setActiveTab('visualization');
    setTestResults([]);
    setPracticePassed(false);
  }, [currentTopic.id]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '';
      const match = hash.match(/[?&]topic=([^&]+)/);
      if (match && match[1]) {
        const found = getTopicById(match[1]);
        if (found && found.id !== currentTopic.id) {
          setCurrentTopic(found);
          setSelectedQuestionIndex(0);
          setIsStarted(false);
          setStepIdx(0);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentTopic.id]);

  // Strict Next & Previous Handlers
  const handleNextStep = () => {
    if (stepIdx < traceSteps.length - 1) {
      soundEffects.playClick();
      setStepIdx((prev) => prev + 1);
    } else {
      // Completed all executed lines -> Switch to Coding Practice!
      soundEffects.playLevelUp?.();
      setActiveTab('practice');
      setShowToast('🚀 Visualization Complete! Now write and verify your code.');
      setTimeout(() => setShowToast(null), 3500);
    }
  };

  const handlePrevStep = () => {
    if (stepIdx > 0) {
      soundEffects.playClick();
      setStepIdx((prev) => prev - 1);
    }
  };

  const handleStartExplanation = () => {
    soundEffects.playClick?.();
    setIsStarted(true);
    setStepIdx(0);
    if (!isMuted) {
      setTimeout(() => playSpeech(), 100);
    }
  };

  const toggleSection = (secId: string) => {
    soundEffects.playClick();
    setExpandedSections((prev) => ({
      ...prev,
      [secId]: !prev[secId],
    }));
  };

  const selectTopic = (t: CurriculumTopic) => {
    if (!isTopicUnlocked(t.id)) {
      soundEffects.playLock?.();
      setShowToast('🔒 Lesson Locked: Complete previous lesson to unlock!');
      setTimeout(() => setShowToast(null), 3500);
      return;
    }

    soundEffects.playClick();
    setCurrentTopic(t);
    setSelectedQuestionIndex(0);
    const qList = getTopicQuestions(t.id);
    if (qList.length > 0) {
      setStudentCode(qList[0].starterCode);
    } else {
      setStudentCode(t.practice.starterCode);
    }
    setIsStarted(false);
    setStepIdx(0);
    setTestResults([]);
    setPracticePassed(false);
    setIsMobileSyllabusOpen(false);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('futureai_py_last_topic', t.id);
        const url = new URL(window.location.href);
        url.hash = `python-classroom?topic=${t.id}`;
        window.history.replaceState(null, '', url.toString());
      } catch {}
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(normalizedReferenceCode);
      setHasCopied(true);
      soundEffects.playClick();
      setTimeout(() => setHasCopied(false), 2000);
    } catch {}
  };

  // Run student practice code locally
  const handleRunPracticeCode = async () => {
    setIsExecuting(true);
    soundEffects.playClick();

    const results: Array<{ id: number; input: string; expected: string; actual: string; passed: boolean }> = [];
    let allPassed = true;

    for (const tc of activeTestCases) {
      const res = await executePythonCodeLocally(studentCode, tc.input);
      const cleanActual = (res.stdout || '').trim();
      const cleanExpected = tc.expectedOutput.trim();
      const passed = cleanActual === cleanExpected;

      if (!passed) allPassed = false;

      results.push({
        id: tc.id,
        input: tc.input,
        expected: cleanExpected,
        actual: cleanActual,
        passed,
      });
    }

    setTestResults(results);
    setPracticePassed(allPassed);
    setIsExecuting(false);

    if (allPassed) {
      soundEffects.playSuccess?.();
      const updated = new Set(completedTopicIds);
      updated.add(currentTopic.id);
      if (currentQuestion) {
        updated.add(currentQuestion.id);
      }
      setCompletedTopicIds(updated);
      try {
        localStorage.setItem('futureai_py_completed_topics', JSON.stringify(Array.from(updated)));
      } catch {}
      setShowToast('🎉 Congratulations! All Test Cases Passed.');
      setTimeout(() => setShowToast(null), 4000);
    } else {
      soundEffects.playError?.();
    }
  };

  // If no specific topic is active, show the 13-Module SQL-style Python Course Practice Hub!
  if (activeClassroomTopicId === null) {
    return (
      <div className="w-full mx-auto">
        <PythonChallengesPracticeHub
          userName={userName}
          onBackToPractice={onBack}
          onBackToDashboard={() => {
            if (typeof window !== 'undefined') window.location.hash = '#dashboard';
          }}
          onOpenClassroomTopic={(topicId) => {
            setActiveClassroomTopicId(topicId);
            const found = getTopicById(topicId);
            if (found) setCurrentTopic(found);
            if (typeof window !== 'undefined') {
              window.location.hash = `#python-challenges?topic=${topicId}`;
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eff3fa] via-[#f5f2fe] to-[#faf8ff] text-slate-900 font-sans pb-16 antialiased selection:bg-purple-200">
      {/* ─────────────────────────────────────────────────────────────────────────────
          1. CLEAN TOP BREADCRUMB BAR (Matching reference screenshot)
         ───────────────────────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white/80 backdrop-blur-xs border-b border-purple-100 sticky top-0 z-30 px-3 sm:px-6 py-2 shadow-2xs">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-3">
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto py-0.5">
            <button
              type="button"
              onClick={() => {
                setActiveClassroomTopicId(null);
                if (typeof window !== 'undefined') {
                  window.location.hash = '#python-challenges';
                }
              }}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#6516DC] font-bold cursor-pointer transition shrink-0"
              title="Back to All Python Topics"
            >
              <Home className="w-3.5 h-3.5 text-[#6516DC]" />
              <span>Python Visual Classroom</span>
            </button>
            <span className="text-slate-400">›</span>
            <span className="text-slate-600 shrink-0">Python Course</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-600 shrink-0">{currentSection.title}</span>
            <span className="text-slate-400">›</span>
            <span className="text-purple-900 font-bold truncate">{currentTopic.title}</span>
          </div>

          {/* Right Side: Language switcher (Hindi / English) + Mobile Syllabus */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-[#EDE3FF] p-0.5 rounded-xl border border-[#D8B4FE]/80 shadow-2xs select-none">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick?.();
                  setTeachingLanguage('hi');
                }}
                className={`px-2.5 py-1 rounded-[10px] text-xs font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  teachingLanguage === 'hi'
                    ? 'bg-[#6D28D9] text-white shadow-xs'
                    : 'text-[#6D28D9] hover:bg-[#E3D2FF]'
                }`}
                title="Switch to Hindi / Hinglish Voice"
              >
                <span>🇮🇳 Hindi</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick?.();
                  setTeachingLanguage('en');
                }}
                className={`px-2.5 py-1 rounded-[10px] text-xs font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  teachingLanguage === 'en'
                    ? 'bg-[#6D28D9] text-white shadow-xs'
                    : 'text-[#6D28D9] hover:bg-[#E3D2FF]'
                }`}
                title="Switch to English Voice"
              >
                <span>English</span>
              </button>
            </div>

            
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 border border-purple-400"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{showToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────────────────────
          2. MOBILE SYLLABUS SLIDE-OVER DRAWER (Rendered via Portal)
         ───────────────────────────────────────────────────────────────────────────── */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isMobileSyllabusOpen && (
              <div className="fixed inset-0 z-[9999] lg:hidden flex">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileSyllabusOpen(false)}
                  className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
                />

                {/* Drawer */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                  className="relative w-[85%] max-w-[340px] bg-white text-slate-900 h-full shadow-2xl flex flex-col z-10 border-r border-purple-100"
                >
                  <div className="p-3.5 border-b border-purple-100 flex items-center justify-between bg-purple-50/50">
                    <span className="font-bold text-sm text-purple-950">Python + DSA Syllabus</span>
                    <button
                      type="button"
                      aria-label="Close Syllabus"
                      onClick={() => setIsMobileSyllabusOpen(false)}
                      className="p-1 rounded-lg hover:bg-purple-100 text-slate-500 hover:text-slate-900 transition cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {PYTHON_CLASSROOM_SECTIONS.map((sec) => (
                      <div key={sec.id} className="rounded-xl overflow-hidden border border-purple-100 mb-1">
                        <button
                          type="button"
                          onClick={() => toggleSection(sec.id)}
                          className="w-full px-3 py-2 flex items-center justify-between text-left text-xs bg-purple-50/40 text-purple-950 font-bold"
                        >
                          <span className="truncate">
                            {sec.sectionNumber}. {sec.title}
                          </span>
                          {expandedSections[sec.id] ? (
                            <ChevronDown className="w-3.5 h-3.5 shrink-0 text-purple-500" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-purple-500" />
                          )}
                        </button>

                        {expandedSections[sec.id] && (
                          <div className="bg-white divide-y divide-purple-50">
                            {sec.topics.map((t) => {
                              const isSelected = t.id === currentTopic.id;
                              const isDone = completedTopicIds.has(t.id);
                              const isUnlocked = isTopicUnlocked(t.id);

                              return (
                                <button
                                  key={t.id}
                                  type="button"
                                  onClick={() => selectTopic(t)}
                                  className={`w-full px-3 py-2 flex items-center gap-2 text-left text-xs transition cursor-pointer ${
                                    !isUnlocked
                                      ? 'opacity-40 text-slate-400 cursor-not-allowed'
                                      : isSelected
                                      ? 'bg-purple-100/70 text-purple-900 font-bold border-l-3 border-purple-700'
                                      : 'text-slate-600 hover:bg-purple-50/50'
                                  }`}
                                >
                                  {isDone ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                                  ) : isSelected ? (
                                    <Play className="w-3 h-3 text-purple-700 fill-current shrink-0" />
                                  ) : isUnlocked ? (
                                    <span className="w-2 h-2 rounded-full border border-purple-400 shrink-0" />
                                  ) : (
                                    <Lock className="w-3 h-3 text-slate-400 shrink-0" />
                                  )}
                                  <span className="truncate flex-1">{t.title}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* ─────────────────────────────────────────────────────────────────────────────
          3. MAIN CONTAINER (DESKTOP TWO-COLUMN: SIDEBAR + WORKSPACE)
         ───────────────────────────────────────────────────────────────────────────── */}
      <main className="max-w-[1560px] w-full mx-auto px-3 sm:px-6 pt-3 pb-12">
        <div className="w-full flex flex-col gap-2.5">
            {/* 3. UNIVERSAL SMART CLASSROOM (Works dynamically for ALL Modules 01 to 20) */}
            <SmartPythonClassroomV5
              topicId={currentTopic.id}
              questionIndex={selectedQuestionIndex}
              totalQuestions={topicQuestions.length || 10}
              onSelectQuestion={(idx) => {
                handleSelectQuestion(idx);
              }}
              completedQuestionIds={completedTopicIds}
              onProgressUpdate={(completedId) => {
                setCompletedTopicIds((prev) => {
                  const next = new Set([...prev, completedId]);
                  try {
                    localStorage.setItem('futureai_py_completed_topics', JSON.stringify(Array.from(next)));
                  } catch {}
                  return next;
                });
              }}
              onNavigateNextTopic={() => {
                if (nextTopic) selectTopic(nextTopic);
              }}
              onNavigatePrevTopic={() => {
                const allTopics = getAllCurriculumTopics();
                const curIdx = allTopics.findIndex((t) => t.id === currentTopic.id);
                if (curIdx > 0) selectTopic(allTopics[curIdx - 1]);
              }}
              onBackToCourse={() => {
                setActiveClassroomTopicId(null);
                if (typeof window !== 'undefined') {
                  window.location.hash = '#python-challenges';
                }
              }}
              language={teachingLanguage}
              onLanguageChange={setTeachingLanguage}
            />
          </div>
        
      </main>
    </div>
  );
};
