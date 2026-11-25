import React, { useState, useMemo, useEffect } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Trophy,
  ArrowRight,
  Briefcase,
  Volume2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RealLifeMission } from './data/questionBankRegistry';
import {
  IndustrialOptionCard,
  IndustrialMissionConfig,
  getIndustrialTrainingMission
} from './data/industrialTrainingScenarios';
import { UniversalOptionVisual } from './UniversalOptionVisualRegistry';
import {
  buildUniversalMissionRuntime,
  UniversalMissionRuntime,
  MissionStep
} from './UniversalMissionEngine';
import { QuizAiHostAvatar } from './QuizAiHostAvatar';
import { ACTIVITY_LABELS } from './data/activityLabels';

export interface UniversalMissionWorkspaceProps {
  mission?: RealLifeMission;
  missionIdx: number;
  totalMissions: number;
  topicTitle?: string;
  topicKey?: string;
  onCompleteMission: (pointsGained: number, notes?: string) => void;
  onNextMission: () => void;
  isLastMission: boolean;
  soundEffects: {
    playClick: () => void;
    playCelebration: () => void;
    playQuizCorrect: () => void;
    playQuizWrong: () => void;
  };
  soundOn?: boolean;
  onSpeakQuestion?: (text: string) => void;
  onStopVoice?: () => void;
  isVoiceSpeaking?: boolean;
  onStepChange?: (step: 1 | 2 | 3, mentorHint: string, learningOutcomes: string[]) => void;
}

/**
 * 3D Scenario Persona Avatar (Left Side of Hero Banner)
 */
const ScenarioPersonaAvatar: React.FC<{ persona: IndustrialMissionConfig['persona'] }> = ({ persona }) => {
  if (persona === 'shopkeeper') {
    return (
      <div className="relative w-full h-full bg-gradient-to-b from-[#FEF3C7] via-[#FDE68A] to-[#F59E0B] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1 left-1.5 w-4 h-6 bg-[#D97706] rounded-xs" />
          <div className="absolute top-1 left-7 w-3 h-5 bg-[#B45309] rounded-xs" />
          <div className="absolute top-1 right-2 w-4 h-6 bg-[#10B981] rounded-xs" />
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#78350F]" />
          <div className="absolute top-10 left-2 w-4 h-5 bg-[#8B5CF6] rounded-xs" />
          <div className="absolute top-10 right-2 w-5 h-6 bg-[#EF4444] rounded-xs" />
        </div>
        <svg className="relative z-10 w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none">
          <path d="M25 110 C25 80 40 70 60 70 C80 70 95 80 95 110 Z" fill="#3B82F6" />
          <path d="M38 78 L82 78 L78 120 L42 120 Z" fill="#1E40AF" />
          <path d="M48 68 L54 78 L66 78 L72 68 Z" stroke="#1E3A8A" strokeWidth="3" fill="none" />
          <path d="M30 95 C35 112 85 112 90 95 C82 92 70 92 60 92 C50 92 38 92 30 95 Z" fill="#1D4ED8" />
          <circle cx="48" cy="98" r="6" fill="#FBBF24" />
          <circle cx="72" cy="98" r="6" fill="#FBBF24" />
          <rect x="53" y="55" width="14" height="14" fill="#F59E0B" rx="3" />
          <circle cx="60" cy="46" r="18" fill="#FBBF24" />
          <path d="M42 42 C42 28 50 25 60 25 C70 25 78 28 78 42 C72 38 68 37 60 37 C52 37 48 38 42 42 Z" fill="#1F2937" />
          <circle cx="42" cy="46" r="3.5" fill="#F59E0B" />
          <circle cx="78" cy="46" r="3.5" fill="#F59E0B" />
          <circle cx="53" cy="44" r="2" fill="#1F2937" />
          <circle cx="67" cy="44" r="2" fill="#1F2937" />
          <path d="M50 51 C54 49 58 53 60 51 C62 53 66 49 70 51 C67 54 63 54 60 53 C57 54 53 54 50 51 Z" fill="#111827" />
          <path d="M55 55 Q60 58 65 55" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (persona === 'principal') {
    return (
      <div className="relative w-full h-full bg-gradient-to-b from-[#E0E7FF] via-[#C7D2FE] to-[#818CF8] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1 left-2 right-2 h-7 bg-[#064E3B] rounded-xs border border-[#78350F]" />
          <div className="absolute top-9 left-3 w-6 h-4 bg-[#60A5FA] rounded-xs" />
        </div>
        <svg className="relative z-10 w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none">
          <path d="M28 110 C28 85 40 75 60 75 C80 75 92 85 92 110 Z" fill="#4338CA" />
          <rect x="53" y="58" width="14" height="15" fill="#F59E0B" rx="3" />
          <circle cx="60" cy="48" r="18" fill="#FBBF24" />
          <path d="M42 42 C44 26 52 24 60 24 C68 24 76 26 78 42 C74 38 68 37 60 37 C52 37 46 38 42 42 Z" fill="#374151" />
          <rect x="49" y="44" width="9" height="7" rx="2" stroke="#1E293B" strokeWidth="1.5" fill="none" />
          <rect x="62" y="44" width="9" height="7" rx="2" stroke="#1E293B" strokeWidth="1.5" fill="none" />
          <line x1="58" y1="47" x2="62" y2="47" stroke="#1E293B" strokeWidth="1.5" />
          <circle cx="53" cy="47.5" r="1.5" fill="#1F2937" />
          <circle cx="66" cy="47.5" r="1.5" fill="#1F2937" />
          <path d="M55 57 Q60 60 65 57" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (persona === 'manager') {
    return (
      <div className="relative w-full h-full bg-gradient-to-b from-[#ECFDF5] via-[#A7F3D0] to-[#34D399] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-2 left-2 w-8 h-6 bg-[#3B82F6] rounded-xs" />
          <div className="absolute top-2 right-2 w-5 h-8 bg-[#6366F1] rounded-xs" />
        </div>
        <svg className="relative z-10 w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none">
          <path d="M28 110 C28 85 40 75 60 75 C80 75 92 85 92 110 Z" fill="#047857" />
          <polygon points="60,75 54,95 66,95" fill="#EF4444" />
          <circle cx="60" cy="48" r="18" fill="#FCD34D" />
          <path d="M42 42 C44 26 52 24 60 24 C68 24 76 26 78 42 C74 38 68 37 60 37 C52 37 46 38 42 42 Z" fill="#1E293B" />
          <circle cx="53" cy="47" r="2" fill="#1F2937" />
          <circle cx="67" cy="47" r="2" fill="#1F2937" />
          <path d="M55 57 Q60 60 65 57" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // Developer / Analyst Avatar
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#EDE9FE] via-[#DDD6FE] to-[#8B5CF6] flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-2 left-2 right-2 h-6 bg-[#1E1B4B] rounded-xs border border-[#7C3AED]" />
      </div>
      <svg className="relative z-10 w-full h-full drop-shadow-md" viewBox="0 0 120 120" fill="none">
        <path d="M28 110 C28 85 40 75 60 75 C80 75 92 85 92 110 Z" fill="#6D28D9" />
        <rect x="53" y="58" width="14" height="15" fill="#FCD34D" rx="3" />
        <circle cx="60" cy="48" r="18" fill="#FCD34D" />
        <path d="M42 42 C44 26 52 24 60 24 C68 24 76 26 78 42 C74 38 68 37 60 37 C52 37 46 38 42 42 Z" fill="#1E1B4B" />
        <circle cx="53" cy="47" r="2" fill="#1F2937" />
        <circle cx="67" cy="47" r="2" fill="#1F2937" />
        <path d="M55 57 Q60 60 65 57" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

/**
 * Scenario Right Illustration Graphic (Right Side of Hero Banner)
 */
const ScenarioRightGraphic: React.FC<{
  chartType?: IndustrialMissionConfig['chartType'];
  persona?: IndustrialMissionConfig['persona'];
  topicKey?: string;
}> = ({ chartType, persona, topicKey }) => {
  // Topic 2 / Printer Scenario
  if (topicKey === '3.2' || persona === 'manager') {
    return (
      <div className="w-24 sm:w-28 h-14 sm:h-16 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 140 80" fill="none">
          <rect x="35" y="24" width="70" height="34" rx="6" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
          <rect x="45" y="10" width="50" height="18" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="50" y1="16" x2="80" y2="16" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="50" y1="20" x2="70" y2="20" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="42" y="44" width="56" height="26" rx="3" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <rect x="48" y="50" width="30" height="4" rx="1" fill="#7C3AED" />
          <line x1="48" y1="58" x2="86" y2="58" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="48" y1="64" x2="78" y2="64" stroke="#E2E8F0" strokeWidth="2" />
          <circle cx="95" cy="32" r="2.5" fill="#10B981" />
          <circle cx="95" cy="40" r="2" fill="#3B82F6" />
        </svg>
      </div>
    );
  }

  // Topic 1 / School Attendance Scenario
  if (topicKey === '3.1' || persona === 'principal') {
    return (
      <div className="w-24 sm:w-28 h-14 sm:h-16 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 140 80" fill="none">
          <rect x="25" y="28" width="55" height="42" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
          <polygon points="52.5,12 20,28 85,28" fill="#DC2626" />
          <rect x="47" y="50" width="12" height="20" fill="#78350F" rx="2" />
          <rect x="32" y="36" width="10" height="10" fill="#60A5FA" rx="1" />
          <rect x="62" y="36" width="10" height="10" fill="#60A5FA" rx="1" />
          <rect x="75" y="20" width="48" height="48" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))" />
          <rect x="75" y="20" width="48" height="12" rx="6" fill="#10B981" />
          <text x="82" y="29" fill="#FFFFFF" fontSize="6" fontWeight="bold">ATTENDANCE</text>
          <text x="82" y="44" fill="#059669" fontSize="9" fontWeight="black">✓ 98%</text>
          <text x="82" y="56" fill="#64748B" fontSize="6" fontWeight="bold">Auto Count</text>
        </svg>
      </div>
    );
  }

  // Default / Retail Sales Bar Chart & Storefront (100% faithful to reference image)
  return (
    <div className="w-24 sm:w-32 h-14 sm:h-16 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
        <rect x="10" y="44" width="12" height="26" rx="2" fill="#8B5CF6" />
        <rect x="26" y="32" width="12" height="38" rx="2" fill="#7C3AED" />
        <rect x="42" y="22" width="12" height="48" rx="2" fill="#6D28D9" />
        <path d="M12 24 L52 46" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        <polygon points="54,49 44,46 51,40" fill="#EF4444" />
        <rect x="80" y="34" width="65" height="36" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M76 34 L149 34 L145 22 L80 22 Z" fill="#F97316" />
        <polygon points="85,34 92,34 90,22 83,22" fill="#FFFFFF" />
        <polygon points="99,34 106,34 104,22 97,22" fill="#FFFFFF" />
        <polygon points="113,34 120,34 118,22 111,22" fill="#FFFFFF" />
        <polygon points="127,34 134,34 132,22 125,22" fill="#FFFFFF" />
        <polygon points="141,34 148,34 146,22 139,22" fill="#FFFFFF" />
        <rect x="98" y="14" width="28" height="10" rx="2" fill="#78350F" />
        <text x="102" y="21" fill="#FEF3C7" fontSize="6" fontWeight="bold">SHOP</text>
        <rect x="86" y="46" width="16" height="16" fill="#38BDF8" rx="2" />
        <rect x="108" y="46" width="14" height="24" fill="#CBD5E1" rx="1" />
      </svg>
    </div>
  );
};

/**
 * Universal Industrial Training Workspace (M01 – M41)
 * 100% Faithful to Reference UI • Connected 3-Step Flow • Neutral Pre-Submission
 */
export const UniversalMissionWorkspace: React.FC<UniversalMissionWorkspaceProps> = ({
  mission,
  missionIdx,
  totalMissions,
  topicTitle,
  topicKey,
  onCompleteMission,
  onNextMission,
  isLastMission,
  soundEffects,
  soundOn = true,
  onSpeakQuestion,
  onStopVoice,
  isVoiceSpeaking = false,
  onStepChange,
}) => {
  // Resolve base mission config
  const rawConfig = useMemo(() => {
    return getIndustrialTrainingMission(topicKey || missionIdx + 1, mission, topicTitle);
  }, [topicKey, missionIdx, mission, topicTitle]);

  // Build connected 3-step runtime
  const runtime: UniversalMissionRuntime = useMemo(() => {
    return buildUniversalMissionRuntime(rawConfig);
  }, [rawConfig]);

  // Language state: 'en' (English) | 'hi' (हिंदी)
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  // Stepper state: 1, 2, or 3
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const currentStepData: MissionStep = runtime.steps[activeStep - 1];

  // Selection & Feedback state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Typewriter effect states
  const [typedSituation, setTypedSituation] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Local voice speaking state
  const [localSpeaking, setLocalSpeaking] = useState<boolean>(false);
  const speakingActive = isVoiceSpeaking || localSpeaking;

  // Only the question/scenario switches to Hindi (with English technical terms); all UI labels stay English
  const currentTitle = runtime.topicTitle;
  const currentSituation = language === 'hi' ? currentStepData.situationHi : currentStepData.situation;
  const currentTask = language === 'hi' ? currentStepData.questionHi : currentStepData.question;
  const currentExplanation = currentStepData.correctExplanation;
  const currentWhyThisWorks = currentStepData.whyThisWorks;
  const currentHint = currentStepData.mentorHint;

  // Text for neural voice
  const fullTextToRead = useMemo(() => {
    if (language === 'hi') {
      return `${currentSituation} ${currentTask}`;
    }
    return `${currentTitle}. ${currentSituation} Question: ${currentTask}`;
  }, [language, currentTitle, currentSituation, currentTask]);

  // Notify parent of step changes to synchronize right sidebar (always clean English)
  useEffect(() => {
    if (onStepChange) {
      onStepChange(
        activeStep,
        currentHint,
        currentStepData.learningOutcomes
      );
    }
  }, [activeStep, currentHint, currentStepData, onStepChange]);

  // Reset and Typewriter on topic change, step change or language toggle
  useEffect(() => {
    setSelectedOptionId(null);
    setFeedbackState('idle');

    setTypedSituation('');
    setIsTyping(true);
    let charIdx = 0;
    const textToType = `${currentSituation} ${currentTask}`;
    const speed = 20;
    const timer = setInterval(() => {
      charIdx++;
      setTypedSituation(textToType.slice(0, charIdx));
      if (charIdx >= textToType.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);

    let voiceTimeout: NodeJS.Timeout | null = null;
    if (soundOn) {
      voiceTimeout = setTimeout(() => {
        if (onSpeakQuestion) {
          onSpeakQuestion(fullTextToRead);
        } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(fullTextToRead);
          utter.rate = language === 'hi' ? 0.92 : 0.95;
          utter.pitch = 1.05;
          const voices = window.speechSynthesis.getVoices();
          const indianVoice = voices.find(
            (v) => (language === 'hi' ? (/hi[-_]in/i.test(v.lang) || /hindi/i.test(v.name)) : (/en[-_]in/i.test(v.lang) || /swara/i.test(v.name) || /india/i.test(v.name)))
          ) || voices.find((v) => /swara/i.test(v.name) || /india/i.test(v.name));
          if (indianVoice) utter.voice = indianVoice;
          utter.onend = () => setLocalSpeaking(false);
          utter.onerror = () => setLocalSpeaking(false);
          setLocalSpeaking(true);
          window.speechSynthesis.speak(utter);
        }
      }, 200);
    }

    return () => {
      clearInterval(timer);
      if (voiceTimeout) clearTimeout(voiceTimeout);
      onStopVoice?.();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setLocalSpeaking(false);
    };
  }, [runtime.id, activeStep, language, fullTextToRead]);

  // Voice toggle handler
  const handleToggleVoice = () => {
    if (speakingActive) {
      if (onStopVoice) {
        onStopVoice();
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setLocalSpeaking(false);
    } else {
      if (onSpeakQuestion) {
        onSpeakQuestion(fullTextToRead);
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(fullTextToRead);
        utter.rate = language === 'hi' ? 0.92 : 0.95;
        utter.pitch = 1.05;
        const voices = window.speechSynthesis.getVoices();
        const indianVoice = voices.find(
          (v) => (language === 'hi' ? (/hi[-_]in/i.test(v.lang) || /hindi/i.test(v.name)) : (/en[-_]in/i.test(v.lang) || /swara/i.test(v.name) || /india/i.test(v.name)))
        ) || voices.find((v) => /swara/i.test(v.name) || /india/i.test(v.name));
        if (indianVoice) utter.voice = indianVoice;
        utter.onend = () => setLocalSpeaking(false);
        utter.onerror = () => setLocalSpeaking(false);
        setLocalSpeaking(true);
        window.speechSynthesis.speak(utter);
      }
    }
  };

  // Select option handler
  const handleSelectOption = (optId: string) => {
    soundEffects.playClick();
    setSelectedOptionId(optId);
    if (feedbackState === 'wrong') {
      setFeedbackState('idle');
    }
  };

  // Check Answer Handler for current step
  const handleCheckAnswer = () => {
    if (!selectedOptionId) return;

    const chosenOption = currentStepData.options.find((o) => o.id === selectedOptionId);
    if (!chosenOption) return;

    if (chosenOption.isCorrect) {
      soundEffects.playQuizCorrect();
      setFeedbackState('correct');

      // If Step 3 completed, celebrate and award points!
      if (activeStep === 3) {
        setTimeout(() => {
          soundEffects.playCelebration();
          confetti({
            particleCount: 80,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#7C3AED', '#A78BFA', '#10B981', '#F59E0B'],
          });
          setIsCompleted(true);
          onCompleteMission(25);
        }, 500);
      }
    } else {
      soundEffects.playQuizWrong();
      setFeedbackState('wrong');
    }
  };

  // Advance to Next Step (Step 1 -> Step 2 -> Step 3 -> Next Mission)
  const handleAdvanceStep = () => {
    soundEffects.playClick();
    if (activeStep < 3) {
      setActiveStep((prev) => (prev + 1) as 2 | 3);
      setSelectedOptionId(null);
      setFeedbackState('idle');
    } else {
      onNextMission();
    }
  };

  return (
    <div className="w-full flex flex-col gap-2.5 font-sans">
      {/* ═════════════════════════════════════════════════════════════════════
          1. TOP HERO BANNER: AVATAR ON LEFT • TITLE & CONTROLS • GRAPHIC ON RIGHT
          ═════════════════════════════════════════════════════════════════════ */}
      <div className="w-full bg-[#FAF8FF] border border-[#EDE9FE] rounded-2xl p-2.5 sm:p-3 shadow-2xs flex items-center justify-between gap-3 transition-all">
        {/* Left: AI Host Avatar (Same as MCQ across M01–M41) */}
        <div className="shrink-0">
          <QuizAiHostAvatar
            isSpeaking={speakingActive}
            speakingText={typedSituation || `${currentSituation} ${currentTask}`}
            onToggleSpeak={handleToggleVoice}
          />
        </div>

        {/* Center: Mission Badge, Title, Situation & Controls */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[16px] sm:text-[18px] font-black text-[#1E1B4B] tracking-tight leading-tight m-0">
                {currentTitle}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Language Switch: English vs Hindi */}
              <div className="inline-flex items-center p-0.5 rounded-full bg-white border border-[#E5DEFF] shadow-2xs">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    if (speakingActive) handleToggleVoice();
                    setLanguage('en');
                  }}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-[#64748B] hover:text-[#1E1B4B]'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    if (speakingActive) handleToggleVoice();
                    setLanguage('hi');
                  }}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all cursor-pointer ${
                    language === 'hi'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-[#64748B] hover:text-[#1E1B4B]'
                  }`}
                >
                  हिंदी
                </button>
              </div>

              {/* Voice Button */}
              <button
                type="button"
                onClick={handleToggleVoice}
                title={speakingActive ? (language === 'hi' ? 'आवाज बंद करें' : 'Mute voice') : (language === 'hi' ? 'हिंदी आवाज में सुनें' : 'Listen with Neural Voice')}
                className="inline-flex items-center gap-1 p-0.5 pr-2 rounded-full bg-white border border-[#E5DEFF] hover:border-[#C4B5FD] shadow-2xs transition cursor-pointer shrink-0"
              >
                <span className="w-4 h-4 rounded-full bg-[#FAF8FF] border border-[#E5DEFF] flex items-center justify-center text-[#475569]">
                  <Volume2 className={`w-2.5 h-2.5 ${speakingActive ? 'text-[#6D28D9] animate-pulse' : 'text-[#475569]'}`} />
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-[10px] font-extrabold inline-flex items-center gap-1">
                  <span className="inline-flex items-center gap-0.5 h-2">
                    <span className={`w-0.5 bg-[#7C3AED] rounded-full ${speakingActive ? 'h-2 animate-pulse' : 'h-1'}`} />
                    <span className={`w-0.5 bg-[#6D28D9] rounded-full ${speakingActive ? 'h-1.5 animate-pulse' : 'h-1.5'}`} />
                    <span className={`w-0.5 bg-[#7C3AED] rounded-full ${speakingActive ? 'h-2 animate-pulse' : 'h-1'}`} />
                  </span>
                  <span>Voice</span>
                </span>
              </button>
            </div>
          </div>

          {/* Typing Animated Speech Box */}
          <div className="bg-white border border-[#E5DEFF] rounded-xl px-3.5 py-2 shadow-2xs">
            <p className="text-[13px] sm:text-[13.5px] text-[#1E293B] font-semibold leading-relaxed m-0">
              {typedSituation || `${currentSituation} ${currentTask}`}
              {isTyping && <span className="inline-block text-[#7C3AED] font-black animate-pulse ml-0.5">|</span>}
            </p>
          </div>
        </div>

        {/* Right: Graphic Scenario Illustration */}
        <div className="shrink-0 hidden sm:flex items-center justify-center">
          <ScenarioRightGraphic chartType={runtime.chartType} persona={runtime.persona} topicKey={topicKey} />
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          2. WORKSPACE CARD: STEP QUESTION & 3 EQUAL OPTION CARDS IN 1 ROW
          ═════════════════════════════════════════════════════════════════════ */}
      <div key={`${runtime.id}-step-${activeStep}`} className="it-smooth-rise w-full bg-white border border-[#E5DEFF] rounded-2xl p-3.5 sm:p-4.5 shadow-sm flex flex-col gap-3.5">
        {/* Workspace Step Heading */}
        <div className="flex items-center justify-between gap-2 border-b border-[#F1F5F9] pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE] text-[#6D28D9] flex items-center justify-center shadow-2xs shrink-0">
              <Briefcase className="w-4 h-4 text-[#6D28D9]" />
            </div>
            <div>
              <h3 className="text-[15.5px] sm:text-[16.5px] font-black text-[#1E1B4B] tracking-tight m-0">
                {currentStepData.stepTitle}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-[#475569] font-semibold m-0">
                {currentTask}
              </p>
            </div>
          </div>
        </div>

        {/* 3 EQUAL INTERACTIVE OPTION CARDS IN A SINGLE ROW ON DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-stretch">
          {currentStepData.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const showSuccess = feedbackState === 'correct' && isSelected;
            const showError = feedbackState === 'wrong' && isSelected;
            const optTitle = opt.title;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(opt.id)}
                className={`group relative text-left p-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col gap-2.5 min-h-[215px] sm:min-h-[240px] ${
                  showSuccess
                    ? 'border-emerald-500 bg-emerald-50/70 shadow-md shadow-emerald-500/15 ring-4 ring-emerald-500/15'
                    : showError
                    ? 'border-rose-400 bg-rose-50/70 shadow-md shadow-rose-500/15 ring-4 ring-rose-500/15'
                    : isSelected
                    ? 'border-[#7C3AED] bg-[#FAF8FF] shadow-lg shadow-[#7C3AED]/15 ring-4 ring-[#7C3AED]/15 -translate-y-0.5'
                    : 'border-[#E2E8F0] bg-white hover:border-[#C4B5FD] hover:bg-[#FAF8FF] hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                {/* Top Row: Letter Badge + Option Title on Left, Radio Button on Right */}
                <div className="flex items-center justify-between w-full shrink-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`w-6 h-6 rounded-lg text-[12px] font-bold flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#6D28D9] to-[#7C3AED] text-white shadow-sm'
                          : 'bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#EDE9FE] group-hover:text-[#6D28D9]'
                      }`}
                    >
                      {opt.letter}
                    </span>
                    <span className="text-[13.5px] sm:text-[14px] font-semibold text-[#1E1B4B] group-hover:text-[#6D28D9] transition-colors leading-snug truncate">
                      {optTitle}
                    </span>
                  </div>

                  {/* Radio Indicator (Exact match to Reference UI) */}
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      showSuccess
                        ? 'border-2 border-emerald-500 bg-white'
                        : showError
                        ? 'border-2 border-rose-500 bg-white'
                        : isSelected
                        ? 'border-2 border-[#7C3AED] bg-white scale-110'
                        : 'border-2 border-[#CBD5E1] bg-white group-hover:border-[#A78BFA]'
                    }`}
                  >
                    {isSelected && (
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-transform ${
                          showSuccess
                            ? 'bg-emerald-500'
                            : showError
                            ? 'bg-rose-500'
                            : 'bg-[#7C3AED]'
                        }`}
                      />
                    )}
                  </div>
                </div>

                {/* Full-Card Topic-Aware Dynamic Visual Illustration */}
                <div className="w-full flex-1 flex rounded-xl overflow-hidden group-hover:scale-[1.01] transition-transform duration-200">
                  <UniversalOptionVisual
                    title={opt.title}
                    subtitle={opt.subtitle}
                    topicTitle={runtime.topicTitle}
                    topicKey={topicKey}
                    stepNumber={activeStep}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Alert Banners */}
        {feedbackState === 'correct' && (
          <div className="it-smooth-rise w-full p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[13.5px] font-black text-emerald-950">
                {activeStep === 3
                  ? 'Mission Accomplished! +25 Pts Earned'
                  : `Step ${activeStep} Complete! Outstanding work`}
              </span>
              <p className="text-[12px] text-emerald-900 font-medium m-0 leading-snug">
                {currentExplanation}
              </p>
              <p className="text-[11.5px] text-emerald-800 font-semibold m-0 mt-0.5">
                Why this works: {currentWhyThisWorks}
              </p>
            </div>
          </div>
        )}

        {feedbackState === 'wrong' && (
          <div className="w-full p-3.5 rounded-xl bg-rose-50 border border-rose-300 flex items-start gap-2.5 animate-shake">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[13.5px] font-black text-rose-950">
                Not quite right — rethink the requirement!
              </span>
              <p className="text-[12px] text-rose-900 font-medium m-0 leading-snug">
                {currentHint}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Bar: Mentor Hint on Left • Premium Check My Answer / Next Step Button on Right */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#F1F5F9] flex-wrap sm:flex-nowrap">
          <div className="text-[12.5px] text-[#334155] font-medium flex items-start gap-1.5 min-w-0 flex-1 leading-snug">
            <span className="text-amber-500 font-bold shrink-0">💡 Hint:</span>
            <span>{currentHint}</span>
          </div>

          <button
            type="button"
            onClick={feedbackState === 'correct' ? handleAdvanceStep : handleCheckAnswer}
            disabled={!selectedOptionId}
            className={`it-premium-cta-btn group/cta min-w-[205px] justify-center px-7 py-3 rounded-2xl text-[14.5px] font-medium tracking-[0.015em] flex items-center gap-2.5 cursor-pointer ml-auto border transition-all ${
              feedbackState === 'correct'
                ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white border-emerald-400/40 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.45)]'
                : selectedOptionId
                ? 'bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#9333EA] text-white border-[#C4B5FD]/40 shadow-[0_8px_24px_-4px_rgba(124,58,237,0.5)]'
                : 'bg-[#F8FAFC] text-[#94A3B8] border-[#E2E8F0] cursor-not-allowed shadow-none'
            }`}
          >
            <span className="leading-none">
              {feedbackState === 'correct'
                ? activeStep < 3
                  ? `Continue to Step ${activeStep + 1}`
                  : isLastMission
                  ? 'Start Mock Interview'
                  : 'Next Challenge'
                : 'Check My Answer'}
            </span>
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 group-hover/cta:translate-x-1 ${
                feedbackState === 'correct' || selectedOptionId
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200/70 text-slate-400'
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.25]" />
            </span>
          </button>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          3. STEPPERS ROW (BOTTOM): 1. Explore Problem ➔ 2. Discover Insights ➔ 3. Business Decision
          ═════════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-center gap-2 pt-1.5 pb-0.5 flex-wrap">
        <div
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 ${
            activeStep === 1
              ? 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 scale-[1.03]'
              : activeStep > 1
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              : 'bg-[#F1F5F9] text-[#64748B]'
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-semibold transition-transform ${
              activeStep === 1
                ? 'bg-white text-[#7C3AED]'
                : activeStep > 1
                ? 'bg-emerald-600 text-white'
                : 'bg-[#CBD5E1] text-[#475569]'
            }`}
          >
            {activeStep > 1 ? '✓' : '1'}
          </span>
          <span>Explore the Problem</span>
        </div>

        <div className={`h-0.5 w-7 sm:w-12 rounded-full transition-colors duration-300 ${activeStep > 1 ? 'bg-emerald-400' : 'bg-[#E2E8F0]'}`} />

        <div
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 ${
            activeStep === 2
              ? 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 scale-[1.03]'
              : activeStep > 2
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              : 'bg-[#F1F5F9] text-[#64748B]'
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-semibold transition-transform ${
              activeStep === 2
                ? 'bg-white text-[#7C3AED]'
                : activeStep > 2
                ? 'bg-emerald-600 text-white'
                : 'bg-[#CBD5E1] text-[#475569]'
            }`}
          >
            {activeStep > 2 ? '✓' : '2'}
          </span>
          <span>Discover Insights</span>
        </div>

        <div className={`h-0.5 w-7 sm:w-12 rounded-full transition-colors duration-300 ${activeStep > 2 ? 'bg-emerald-400' : 'bg-[#E2E8F0]'}`} />

        <div
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 ${
            activeStep === 3
              ? 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 scale-[1.03]'
              : isCompleted
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              : 'bg-[#F1F5F9] text-[#64748B]'
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-semibold transition-transform ${
              activeStep === 3 && !isCompleted
                ? 'bg-white text-[#7C3AED]'
                : isCompleted
                ? 'bg-emerald-600 text-white'
                : 'bg-[#CBD5E1] text-[#475569]'
            }`}
          >
            {isCompleted ? '✓' : '3'}
          </span>
          <span>Make a Business Decision</span>
        </div>
      </div>
    </div>
  );
};
