/**
 * FUTURE IT INDUSTRY — MASTER UNIVERSAL VISUAL CLASSROOM ENGINE
 *
 * ONE REUSABLE, CODE-AWARE PEDAGOGICAL ENGINE FOR ALL PYTHON & DSA CHALLENGES.
 * No question-specific hardcoded animations or components.
 * Automatically adapts to every challenge using:
 * 1. Question Statement & Verified Solution Code
 * 2. AST Code Semantics & Variable/Structure Detection
 * 3. Step-by-Step Concept Generation & Timeline Tracing
 * 4. Dynamic Visual Memory & Data Structure Canvas (Variables, Branches, Loops, Lists, Trees, Stacks, Searching, Sorting)
 * 5. Console Standard Output Stream
 * 6. Synchronized Hindi-English Voice Narration
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Check,
  Copy,
  Gauge,
  ChevronDown,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Database,
  Calculator,
} from 'lucide-react';

import { getOptimizedSpeechConfig, toPhoneticHinglish } from './speechTransliteration';
import {
  parseProgramSemantics,
  composeUniversalVisualCards,
  generateUniversalScenes,
  ProgramSemanticsAnalysis,
} from './universalTeachingEngine';
import { DynamicConceptVisualizer } from './DynamicConceptVisualizer';
import {
  getLessonTitle,
  PROGRAMMING_LABELS,
  PLAYBACK_LABELS,
} from './visualClassroomLanguageStandard';
import {
  VisualHintAnimationPlan,
  FlowDiagramCard,
  LearningSceneSpec,
  TimelineExecutionEvent,
} from './visualHintsEngineService';

export interface PythonVisualHintsModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: VisualHintAnimationPlan | null;
  taskNumber: number;
  totalTasks: number;
  isSolved: boolean;
  onPlayClick?: () => void;
  studentCode?: string;
  topicId?: number;
  topicTitle?: string;
}

export type VoiceLang = 'hi' | 'en';

interface ParsedCodeLine {
  raw: string;
  prefix: string;
  inner: string;
  suffix: string;
  hasBrackets: boolean;
}

function parseCodeLine(line: string): ParsedCodeLine {
  const fnMatch = line.match(/^(\s*[a-zA-Z_]\w*\s*\()(.*)(\)\s*)$/);
  if (fnMatch) {
    return {
      raw: line,
      prefix: fnMatch[1],
      inner: fnMatch[2],
      suffix: fnMatch[3],
      hasBrackets: true,
    };
  }
  const bracketMatch = line.match(/^(\s*.*?[\[\(])(.*)([\]\)]\s*)$/);
  if (bracketMatch) {
    return {
      raw: line,
      prefix: bracketMatch[1],
      inner: bracketMatch[2],
      suffix: bracketMatch[3],
      hasBrackets: true,
    };
  }
  const assignMatch = line.match(/^(\s*[a-zA-Z_]\w*\s*=\s*)(.+)$/);
  if (assignMatch) {
    return {
      raw: line,
      prefix: assignMatch[1],
      inner: assignMatch[2],
      suffix: '',
      hasBrackets: false,
    };
  }
  return {
    raw: line,
    prefix: '',
    inner: line,
    suffix: '',
    hasBrackets: false,
  };
}

interface LightningSceneTheme {
  start: string;
  mid: string;
  end: string;
  glow: string;
  particleGlow: string;
}

const LIGHTNING_SCENE_THEMES: LightningSceneTheme[] = [
  { start: '#38bdf8', mid: '#00f2fe', end: '#3b82f6', glow: '#00f2fe', particleGlow: '#00f2fe' },
  { start: '#34d399', mid: '#10b981', end: '#06b6d4', glow: '#10b981', particleGlow: '#34d399' },
  { start: '#fbbf24', mid: '#f59e0b', end: '#f43f5e', glow: '#f59e0b', particleGlow: '#fbbf24' },
  { start: '#c084fc', mid: '#a855f7', end: '#ec4899', glow: '#a855f7', particleGlow: '#ec4899' },
];

const LightningConnector: React.FC<{
  isActive: boolean;
  isRecap: boolean;
  sceneIdx: number;
  uniqueId: string;
}> = ({ isActive, isRecap, sceneIdx, uniqueId }) => {
  const isGlowing = isActive || isRecap;
  const theme = LIGHTNING_SCENE_THEMES[sceneIdx % LIGHTNING_SCENE_THEMES.length];

  return (
    <div className="w-8 sm:w-10 h-7 flex items-center justify-center shrink-0">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 40 20" fill="none">
        <defs>
          <linearGradient id={`lightning-grad-${uniqueId}`} x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={theme.start} stopOpacity={isGlowing ? 0.9 : 0.25} />
            <stop offset="50%" stopColor={theme.mid} stopOpacity={isGlowing ? 1 : 0.4} />
            <stop offset="100%" stopColor={theme.end} stopOpacity={isGlowing ? 0.9 : 0.25} />
          </linearGradient>
        </defs>
        <path d="M 3 10 L 37 10" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
        <motion.path
          d="M 3 10 Q 20 6, 37 10"
          stroke={`url(#lightning-grad-${uniqueId})`}
          strokeWidth={isGlowing ? 2.5 : 1.5}
          strokeLinecap="round"
          animate={isGlowing ? { strokeWidth: [2, 3.2, 2], opacity: [0.8, 1, 0.8] } : { strokeWidth: 1.5, opacity: 0.3 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {isGlowing && (
          <motion.circle
            r="3.5"
            fill="#ffffff"
            filter={`drop-shadow(0 0 6px ${theme.particleGlow})`}
            animate={{ cx: [3, 37], opacity: [0.3, 1, 0.9, 0.3] }}
            transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut' }}
            cy="10"
          />
        )}
      </svg>
    </div>
  );
};

export const PythonVisualHintsModal: React.FC<PythonVisualHintsModalProps> = ({
  isOpen,
  onClose,
  plan,
  taskNumber,
  totalTasks,
  isSolved,
  onPlayClick,
  studentCode,
  topicId = 1,
  topicTitle,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [sceneIdx, setSceneIdx] = useState<number>(0);
  const [lang, setLang] = useState<VoiceLang>('hi');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1);
  const [sceneProgress, setSceneProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [replayNonce, setReplayNonce] = useState<number>(0);
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [codeMode, setCodeMode] = useState<'reference' | 'student'>('reference');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const progressRef = useRef<number>(0);
  const speedRef = useRef<number>(1);
  const isMutedRef = useRef<boolean>(false);
  const isPlayingRef = useRef<boolean>(true);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Resolve target source code
  const referenceCode = useMemo(() => {
    return (
      (plan as any)?.referenceCode ||
      plan?.postSolveWalkthrough?.annotatedCode ||
      'print("Hello, World!")'
    );
  }, [plan]);

  const hasValidStudentCode = Boolean(
    studentCode && studentCode.trim().length > 0 && studentCode.trim() !== referenceCode.trim()
  );

  const targetCode = codeMode === 'student' && hasValidStudentCode ? studentCode! : referenceCode;
  const expectedOutput = plan?.steps?.[plan.steps.length - 1]?.terminalLines?.[0] || 'Output';

  // Deep Program Semantics Analysis
  const programSemantics: ProgramSemanticsAnalysis = useMemo(() => {
    if (codeMode === 'reference' && (plan as any)?.semantics) {
      return (plan as any).semantics;
    }
    return parseProgramSemantics(targetCode, expectedOutput, '', topicId);
  }, [targetCode, expectedOutput, codeMode, plan, topicId]);

  // Compose dynamic scenes and cards
  const vizData = useMemo(() => {
    const rawLines = targetCode.split('\n').filter((l) => l.trim().length > 0);
    const codeLines = rawLines.length > 0 ? rawLines : ['print("Hello, World!")'];

    if (codeMode === 'reference' && (plan as any)?.scenes && (plan as any)?.flowCards) {
      return {
        scenes: (plan as any).scenes as LearningSceneSpec[],
        flowCards: (plan as any).flowCards as [FlowDiagramCard, FlowDiagramCard, FlowDiagramCard],
        codeLines,
      };
    }

    const flowCards = composeUniversalVisualCards(programSemantics);
    const scenes = generateUniversalScenes(programSemantics, flowCards);
    return {
      scenes,
      flowCards,
      codeLines,
    };
  }, [targetCode, codeMode, plan, programSemantics]);

  const scenes = vizData.scenes;
  const currentScene: LearningSceneSpec = scenes[sceneIdx] || scenes[0];

  const stopAllAudio = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  // Voice narration synchronization
  useEffect(() => {
    if (!isOpen || isMuted) {
      stopAllAudio();
      return;
    }

    stopAllAudio();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const rawText = lang === 'hi' ? currentScene.spokenNarrationHi : currentScene.spokenNarrationEn;
    const spokenText = lang === 'hi' ? toPhoneticHinglish(rawText) : rawText;

    const voices = window.speechSynthesis.getVoices();
    const config = getOptimizedSpeechConfig(lang, spokenText, voices);

    const utterance = new SpeechSynthesisUtterance(spokenText);
    const speechRate = (lang === 'hi' ? 0.95 : 1.0) * (speed || 1);
    utterance.rate = Number.isFinite(speechRate) && speechRate > 0 ? speechRate : 1.0;
    utterance.pitch = 1.0;
    utterance.lang = config.voiceLang || (lang === 'hi' ? 'hi-IN' : 'en-US');

    if (config.voice) {
      utterance.voice = config.voice;
    } else {
      if (lang === 'hi') {
        const hiVoice = voices.find((v) => v.lang.includes('hi') || v.name.includes('Hindi'));
        if (hiVoice) utterance.voice = hiVoice;
      } else {
        const enVoice = voices.find((v) => (v.lang.includes('en-IN') || v.lang.includes('en-US')) && v.name.includes('Natural'));
        if (enVoice) utterance.voice = enVoice;
      }
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    activeUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);

    return () => {
      stopAllAudio();
    };
  }, [sceneIdx, lang, isMuted, speed, replayNonce, isOpen, currentScene, stopAllAudio]);

  // Auto-play timer
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const baseDuration = (currentScene.durationSec || 7) * 1000;
    const duration = baseDuration / speed;
    const intervalMs = 50;
    const stepIncrement = (intervalMs / duration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          if (sceneIdx < scenes.length - 1) {
            setSceneIdx((s) => s + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return 100;
          }
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, sceneIdx, scenes.length, speed, currentScene.durationSec]);

  // Controls
  const handleTogglePlay = () => {
    onPlayClick?.();
    setIsPlaying((prev) => !prev);
  };

  const handleReplay = () => {
    onPlayClick?.();
    stopAllAudio();
    setSceneProgress(0);
    setIsPlaying(true);
    setReplayNonce((n) => n + 1);
  };

  const handlePrevScene = () => {
    if (sceneIdx > 0) {
      onPlayClick?.();
      stopAllAudio();
      setSceneProgress(0);
      setSceneIdx((s) => s - 1);
      setIsPlaying(true);
    }
  };

  const handleNextScene = () => {
    if (sceneIdx < scenes.length - 1) {
      onPlayClick?.();
      stopAllAudio();
      setSceneProgress(0);
      setSceneIdx((s) => s + 1);
      setIsPlaying(true);
    }
  };

  const handleCycleSpeed = () => {
    onPlayClick?.();
    const speeds = [1, 1.5, 2, 0.75];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(targetCode);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch {}
  };

  if (!isOpen) return null;

  const exp = lang === 'hi' ? currentScene.explanationPartsHi : currentScene.explanationPartsEn;
  const isRecap = sceneIdx === scenes.length - 1;

  // Active line highlight check
  const activeLines = currentScene.activeLineNumbers || [1];

  const renderCardIcon = (card: FlowDiagramCard) => {
    switch (card.iconName) {
      case 'terminal':
      case 'console':
        return <Terminal className="w-5 h-5 text-white" />;
      case 'variable':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'calculator':
        return <Calculator className="w-5 h-5 text-white" />;
      case 'code':
      default:
        return <Code2 className="w-5 h-5 text-white" />;
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="visual-hints-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto"
      onClick={() => {
        stopAllAudio();
        onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${
          isFullscreen
            ? 'fixed inset-0 z-[100] w-screen h-screen max-w-none max-h-none rounded-none m-0'
            : 'max-w-[1140px] rounded-[28px]'
        } bg-white border border-slate-200/90 shadow-[0_24px_70px_rgba(15,23,42,0.22)] overflow-hidden flex flex-col text-slate-900 max-h-[96vh]`}
      >
        {/* 1. TOP HEADER BAR */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-50/95 border-b border-slate-200/80 flex items-center justify-between gap-3 flex-wrap">
          {/* Left: Future IT Badge + Visual Classroom Pill + Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="flex items-center gap-2 mr-1">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0284c7] to-[#00f2fe] flex items-center justify-center text-white font-black text-sm shadow-sm ring-1 ring-white">
                F
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] font-black tracking-wider text-[#0284c7]">FUTURE IT</span>
                <span className="text-[9px] font-extrabold tracking-widest text-slate-600">INDUSTRY</span>
              </div>
            </div>

            <span className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
              Visual Classroom • Challenge {taskNumber}
            </span>

            <div className="flex items-center gap-2 min-w-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                <path
                  fill="#3b82f6"
                  d="M12 2c-3.3 0-5 1.5-5 3.5v2.5h5v1H5c-2 0-3.5 1.7-3.5 5s1.5 5 3.5 5h1.5v-2.2c0-2 1.6-3.8 3.8-3.8h4.4c1.7 0 3-1.3 3-3V5.5C17.7 3.5 16 2 12 2zm-1.8 2.2a.9.9 0 110 1.8.9.9 0 010-1.8z"
                />
                <path
                  fill="#eab308"
                  d="M12 22c3.3 0 5-1.5 5-3.5v-2.5h-5v-1h7c2 0 3.5-1.7 3.5-5s-1.5-5-3.5-5h-1.5v2.2c0 2-1.6 3.8-3.8 3.8h-4.4c-1.7 0-3 1.3-3 3v4.5c0 2 1.7 3.5 5.7 3.5zm1.8-2.2a.9.9 0 110-1.8.9.9 0 010 1.8z"
                />
              </svg>
              <h2
                id="visual-hints-modal-title"
                className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate"
              >
                {getLessonTitle({ fallbackTitle: plan?.questionTitle || topicTitle || 'Universal Python Visual Classroom' }, lang)}
              </h2>
            </div>
          </div>

          {/* Right: Language switch + Fullscreen + Close */}
          <div className="flex items-center gap-2 shrink-0">
            {hasValidStudentCode && (
              <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 text-xs font-semibold mr-1">
                <button
                  type="button"
                  onClick={() => {
                    stopAllAudio();
                    setCodeMode('reference');
                  }}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    codeMode === 'reference' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-500'
                  }`}
                >
                  Solution
                </button>
                <button
                  type="button"
                  onClick={() => {
                    stopAllAudio();
                    setCodeMode('student');
                  }}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    codeMode === 'student' ? 'bg-[#0284c7] text-white shadow-2xs font-bold' : 'text-slate-500'
                  }`}
                >
                  My Code
                </button>
              </div>
            )}

            {/* English Voice Button */}
            <button
              type="button"
              onClick={() => {
                stopAllAudio();
                setLang('en');
              }}
              aria-label="English voice"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white shadow-md shadow-purple-500/25 font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>English</span>
            </button>

            {/* Hindi Voice Button */}
            <button
              type="button"
              onClick={() => {
                stopAllAudio();
                setLang('hi');
              }}
              aria-label="Hindi voice"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                lang === 'hi'
                  ? 'bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white shadow-md shadow-purple-500/25 font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Hindi</span>
            </button>

            <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={() => setIsFullscreen((prev) => !prev)}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              className="w-8 h-8 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Modal */}
            <button
              type="button"
              onClick={() => {
                stopAllAudio();
                onClose();
              }}
              aria-label="Close Visual Classroom"
              className="w-8 h-8 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-slate-700 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <X className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* 2. MAIN PEDAGOGICAL WORKSPACE (2-COLUMN GRID) */}
        <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between overflow-y-auto">
          <div
            ref={stageRef}
            className="rounded-[24px] bg-[#f8fafc]/90 border border-slate-200/80 p-3 sm:p-4 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 items-stretch relative overflow-visible"
          >
            {/* COLUMN 1 (LEFT): OBSIDIAN DARK CODE EDITOR + CONSOLE */}
            <div className="flex flex-col gap-3 min-w-0">
              {/* Code Editor */}
              <div className="rounded-2xl bg-[#0c1222] border border-slate-800 shadow-md flex flex-col overflow-hidden min-h-[260px]">
                {/* Editor Header */}
                <div className="px-3.5 py-2.5 bg-[#141b2d] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                      <path
                        fill="#3b82f6"
                        d="M12 2c-3.3 0-5 1.5-5 3.5v2.5h5v1H5c-2 0-3.5 1.7-3.5 5s1.5 5 3.5 5h1.5v-2.2c0-2 1.6-3.8 3.8-3.8h4.4c1.7 0 3-1.3 3-3V5.5C17.7 3.5 16 2 12 2zm-1.8 2.2a.9.9 0 110 1.8.9.9 0 010-1.8z"
                      />
                      <path
                        fill="#eab308"
                        d="M12 22c3.3 0 5-1.5 5-3.5v-2.5h-5v-1h7c2 0 3.5-1.7 3.5-5s-1.5-5-3.5-5h-1.5v2.2c0 2-1.6 3.8-3.8 3.8h-4.4c-1.7 0-3 1.3-3 3v4.5c0 2 1.7 3.5 5.7 3.5zm1.8-2.2a.9.9 0 110-1.8.9.9 0 010 1.8z"
                      />
                    </svg>
                    <span className="text-xs font-bold text-slate-200 font-mono">main.py</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    title={hasCopied ? 'Copied!' : 'Copy code'}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    {hasCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Code Lines with AST Token Highlight */}
                <div className="flex-1 p-3 overflow-y-auto font-mono text-[13px] leading-7 bg-[#0c1222]">
                  <div className="space-y-1">
                    {vizData.codeLines.map((line, idx) => {
                      const lineNum = idx + 1;
                      const isLineActive = activeLines.includes(lineNum) || (isRecap && true);
                      const parsed = parseCodeLine(line);

                      return (
                        <div
                          key={idx}
                          className={`flex items-start rounded-lg px-2 py-0.5 transition-all ${
                            isLineActive
                              ? 'bg-blue-500/20 border-l-4 border-cyan-400 text-white shadow-xs'
                              : 'text-slate-400 hover:text-slate-300'
                          }`}
                        >
                          <span className="w-6 shrink-0 text-right pr-2 select-none text-xs font-bold text-slate-600">
                            {lineNum}
                          </span>
                          <div className="flex-1 min-w-0 whitespace-pre-wrap break-all">
                            {parsed.prefix && (
                              <span className={isLineActive ? 'text-cyan-300 font-bold' : 'text-blue-400'}>
                                {parsed.prefix}
                              </span>
                            )}
                            <span
                              className={
                                isLineActive
                                  ? 'text-amber-300 font-extrabold bg-amber-400/15 px-1 rounded'
                                  : 'text-slate-200'
                              }
                            >
                              {parsed.inner}
                            </span>
                            {parsed.suffix && (
                              <span className={isLineActive ? 'text-cyan-300 font-bold' : 'text-blue-400'}>
                                {parsed.suffix}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Console Output Window */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-700 font-mono ml-1">Terminal</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">stdout</span>
                </div>
                <div className="p-3 bg-[#0c1222] font-mono text-xs text-emerald-400 min-h-[75px] max-h-[110px] overflow-y-auto flex flex-col justify-center">
                  {sceneIdx >= 2 ? (
                    <div className="flex items-start gap-1.5">
                      <span className="text-cyan-400 select-none">&gt;</span>
                      <span className="font-bold text-emerald-300 break-words whitespace-pre-wrap">
                        {expectedOutput}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="text-cyan-500/60">&gt;</span>
                      <span className="italic">Waiting for execution...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* COLUMN 2 (RIGHT): DYNAMIC VISUAL MEMORY & 3-CARD EXECUTION PIPELINE */}
            <div className="flex flex-col justify-between flex-1 relative z-10 gap-3">
              {/* Domain Specific Visualizer (Memory, Stacks, Trees, Loops, Conditions) */}
              <DynamicConceptVisualizer
                semantics={programSemantics}
                sceneIdx={sceneIdx}
                sceneProgress={sceneProgress}
                flowCards={vizData.flowCards}
                lang={lang}
              />

              {/* THREE SLEEK FLOW CARDS PIPELINE */}
              <div className="grid grid-cols-[1fr_auto_1.15fr_auto_1fr] items-stretch gap-2 min-h-[130px] my-auto">
                {/* Card 1 */}
                <div className="flex flex-col">
                  {(() => {
                    const isCard1Active = sceneIdx === 0;
                    const isCard1Done = sceneIdx >= 1;
                    return (
                      <motion.div
                        animate={{
                          opacity: isRecap || isCard1Active ? 1 : isCard1Done ? 0.75 : 0.4,
                          y: isCard1Active ? -2 : 0,
                        }}
                        className={`h-full rounded-2xl p-3 text-center flex flex-col items-center justify-between border-2 transition-all ${
                          isCard1Active
                            ? 'bg-gradient-to-b from-blue-50 to-white border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.35)]'
                            : isRecap
                            ? 'bg-gradient-to-b from-blue-50 to-white border-sky-400'
                            : isCard1Done
                            ? 'bg-white border-slate-300'
                            : 'bg-slate-50 border-dashed border-slate-300'
                        }`}
                      >
                        <div className="w-full flex justify-center mb-1">
                          <span className={`px-2 py-0.5 text-[9px] font-extrabold uppercase rounded-full ${isCard1Active ? 'bg-cyan-100 text-cyan-800 border border-cyan-300' : 'bg-slate-100 text-slate-500'}`}>
                            {vizData.flowCards[0]?.tagText || 'Setup'}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md mb-1">
                          {renderCardIcon(vizData.flowCards[0])}
                        </div>
                        <div className="font-mono font-bold text-xs text-slate-900 truncate max-w-[120px]">
                          {vizData.flowCards[0]?.pillText || 'Concept'}
                        </div>
                        <p className="text-[10.5px] text-slate-600 leading-tight">
                          {lang === 'hi' ? vizData.flowCards[0]?.captionHi : vizData.flowCards[0]?.captionEn}
                        </p>
                      </motion.div>
                    );
                  })()}
                </div>

                <LightningConnector isActive={sceneIdx === 1} isRecap={isRecap} sceneIdx={sceneIdx} uniqueId="c1" />

                {/* Card 2 */}
                <div className="flex flex-col">
                  {(() => {
                    const isCard2Active = sceneIdx === 1;
                    const isCard2Done = sceneIdx >= 2;
                    return (
                      <motion.div
                        animate={{
                          opacity: isRecap || isCard2Active ? 1 : isCard2Done ? 0.75 : 0.4,
                          y: isCard2Active ? -2 : 0,
                        }}
                        className={`h-full rounded-2xl p-3 text-center flex flex-col items-center justify-between border-2 transition-all ${
                          isCard2Active
                            ? 'bg-gradient-to-b from-amber-50 to-white border-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.35)]'
                            : isRecap
                            ? 'bg-gradient-to-b from-amber-50 to-white border-amber-400'
                            : isCard2Done
                            ? 'bg-white border-slate-300'
                            : 'bg-slate-50 border-dashed border-slate-300'
                        }`}
                      >
                        <div className="w-full flex justify-center mb-1">
                          <span className={`px-2 py-0.5 text-[9px] font-extrabold uppercase rounded-full ${isCard2Active ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-500'}`}>
                            {vizData.flowCards[1]?.tagText || 'Logic'}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-md mb-1">
                          {renderCardIcon(vizData.flowCards[1])}
                        </div>
                        <div className="font-mono font-bold text-xs text-slate-900 truncate max-w-[120px]">
                          {vizData.flowCards[1]?.pillText || 'Process'}
                        </div>
                        <p className="text-[10.5px] text-slate-600 leading-tight">
                          {lang === 'hi' ? vizData.flowCards[1]?.captionHi : vizData.flowCards[1]?.captionEn}
                        </p>
                      </motion.div>
                    );
                  })()}
                </div>

                <LightningConnector isActive={sceneIdx === 2} isRecap={isRecap} sceneIdx={sceneIdx} uniqueId="c2" />

                {/* Card 3 */}
                <div className="flex flex-col">
                  {(() => {
                    const isCard3Active = sceneIdx >= 2;
                    return (
                      <motion.div
                        animate={{
                          opacity: isRecap || isCard3Active ? 1 : 0.4,
                          y: isCard3Active ? -2 : 0,
                        }}
                        className={`h-full rounded-2xl p-3 text-center flex flex-col items-center justify-between border-2 transition-all ${
                          isCard3Active
                            ? 'bg-gradient-to-b from-purple-50 to-white border-purple-400 shadow-[0_0_24px_rgba(168,85,247,0.35)]'
                            : 'bg-slate-50 border-dashed border-slate-300'
                        }`}
                      >
                        <div className="w-full flex justify-center mb-1">
                          <span className={`px-2 py-0.5 text-[9px] font-extrabold uppercase rounded-full ${isCard3Active ? 'bg-purple-100 text-purple-800 border border-purple-300' : 'bg-slate-100 text-slate-500'}`}>
                            {vizData.flowCards[2]?.tagText || 'Output'}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md mb-1">
                          {renderCardIcon(vizData.flowCards[2])}
                        </div>
                        <div className="font-mono font-bold text-xs text-slate-900 truncate max-w-[120px]">
                          {vizData.flowCards[2]?.pillText || 'Result'}
                        </div>
                        <p className="text-[10.5px] text-slate-600 leading-tight">
                          {lang === 'hi' ? vizData.flowCards[2]?.captionHi : vizData.flowCards[2]?.captionEn}
                        </p>
                      </motion.div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BILINGUAL EXPLANATION PANEL */}
        <div className="px-4 sm:px-6 pb-2">
          <div className="rounded-2xl bg-white border border-slate-200/90 px-4 sm:px-5 py-2.5 shadow-2xs flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (isSpeaking) {
                  stopAllAudio();
                } else {
                  setReplayNonce((n) => n + 1);
                }
              }}
              aria-label={isMuted ? 'Unmute' : 'Voice Narration'}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all cursor-pointer relative ${
                isMuted
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-purple-50 hover:bg-purple-100 border-purple-200/70 text-[#7c3aed]'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              {isSpeaking && !isMuted && (
                <span className="absolute inset-0 rounded-xl border-2 border-purple-400 animate-ping opacity-25 pointer-events-none" />
              )}
            </button>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {exp?.codePill1 ? (
                <span className="inline-block font-mono font-bold text-blue-700 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-lg mr-1.5">
                  {exp.codePill1}
                </span>
              ) : null}
              <span>{exp?.text1 || (lang === 'hi' ? currentScene?.spokenNarrationHi : currentScene?.spokenNarrationEn)} </span>
              {exp?.codePill2 ? (
                <span className="inline-block font-mono font-bold text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-lg mx-1">
                  {exp.codePill2}
                </span>
              ) : null}
              {exp?.text2 ? <span> {exp.text2}</span> : null}
            </p>
          </div>
        </div>

        {/* 4. BOTTOM PLAYBACK CONTROLS */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50/95 border-t border-slate-200/80 flex items-center justify-between gap-2 flex-wrap">
          {/* Play/Pause | Replay | Previous | Next */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? PLAYBACK_LABELS.PAUSE : PLAYBACK_LABELS.PLAY}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-purple-500/25 cursor-pointer active:scale-95 transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{PLAYBACK_LABELS.PAUSE}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{PLAYBACK_LABELS.PLAY}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleReplay}
              aria-label={PLAYBACK_LABELS.REPLAY}
              className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>{PLAYBACK_LABELS.REPLAY}</span>
            </button>

            <button
              type="button"
              onClick={handlePrevScene}
              disabled={sceneIdx === 0}
              aria-label={PLAYBACK_LABELS.BACK}
              className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 disabled:bg-slate-50 text-slate-700 disabled:text-slate-400 border border-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow-2xs cursor-pointer disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{PLAYBACK_LABELS.BACK}</span>
            </button>

            <button
              type="button"
              onClick={handleNextScene}
              disabled={sceneIdx === scenes.length - 1}
              aria-label={PLAYBACK_LABELS.NEXT}
              className="px-5 py-2 rounded-full bg-purple-50 hover:bg-purple-100 disabled:bg-slate-50 text-purple-700 disabled:text-slate-400 border border-purple-200 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-2xs cursor-pointer disabled:cursor-not-allowed transition-all"
            >
              <span>{PLAYBACK_LABELS.NEXT}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Progress Track with Connected Dots */}
          <div className="hidden md:flex items-center relative py-1 px-3" role="group" aria-label="Progress dots">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
            <div
              className="absolute left-6 top-1/2 -translate-y-1/2 h-0.5 bg-[#7c3aed] z-0 pointer-events-none transition-all"
              style={{
                width: scenes.length > 1 ? `${Math.min(100, (sceneIdx / (scenes.length - 1)) * 100)}%` : '0%',
              }}
            />
            <div className="flex items-center gap-4 relative z-10">
              {scenes.map((_, sIdx) => {
                const isCurrent = sceneIdx === sIdx;
                const isDone = sIdx < sceneIdx;
                return (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => {
                      onPlayClick?.();
                      stopAllAudio();
                      setSceneProgress(0);
                      setSceneIdx(sIdx);
                      setIsPlaying(true);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#7c3aed] text-white ring-4 ring-purple-200 shadow-md shadow-purple-500/30'
                        : isDone
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-white border-2 border-slate-300 text-transparent hover:border-slate-400'
                    }`}
                    title={`Step ${sIdx + 1}`}
                  >
                    {isDone ? (
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Indicator & Speed */}
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 shadow-2xs">
              <span>{PLAYBACK_LABELS.formatStep(sceneIdx + 1, scenes.length)}</span>
            </div>

            <button
              type="button"
              onClick={handleCycleSpeed}
              aria-label={PLAYBACK_LABELS.formatSpeed(speed)}
              className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95 transition-all"
            >
              <Gauge className="w-3.5 h-3.5 text-slate-500" />
              <span>{PLAYBACK_LABELS.formatSpeed(speed)}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default PythonVisualHintsModal;
