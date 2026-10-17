import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  RotateCcw,
  Zap,
  Globe2,
  Clock,
  Layers,
  HelpCircle,
  RefreshCw,
  Award
} from 'lucide-react';
import { 
  DAY1_STEPS 
} from '../../data/day1PythonFlow';
import { 
  SafePythonSandbox, 
  PythonExecutionResult 
} from '../../services/pythonSandbox';
import { AnalyticsService } from '../../services/analytics';
import { 
  LearnerProfile, 
  LanguageMode, 
  MistakeCategory, 
  ConfidenceLevel, 
  DiagnosisFeedback,
  AnalogyModel,
  PulseState
} from '../../types';
import { AiCompanionOrb } from '../companion/AiCompanionOrb';
import { InputModeBar, InputMode } from '../layout/InputModeBar';
import { LearningPulse } from '../layout/LearningPulse';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { DiagnosisEngine } from '../../services/diagnosisEngine';
import { AnalogyService } from '../../services/analogyService';
import { ConfidenceEngine, ConfidenceFeedback } from '../../services/confidenceEngine';

interface Day1PythonExperienceProps {
  profile: LearnerProfile;
  initialStepIndex?: number;
  onStepComplete: (stepIndex: number) => void;
  onDayComplete: () => void;
  onOpenTutor: (contextNote?: string) => void;
  onRecordMistake: (cat: MistakeCategory, desc: string) => void;
}

export const Day1PythonExperience: React.FC<Day1PythonExperienceProps> = ({
  profile,
  initialStepIndex = 0,
  onStepComplete,
  onDayComplete,
  onOpenTutor,
  onRecordMistake,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
  const step = DAY1_STEPS[currentStepIndex];

  // Code editor states
  const [code, setCode] = useState(step.initialCode || '');
  const [output, setOutput] = useState<string[]>([]);
  const [hasExecuted, setHasExecuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Global Learning Pulse state
  const [pulseState, setPulseState] = useState<PulseState>('idle');

  // Language Mode: 'hinglish' | 'hindi' | 'en'
  const [lang, setLang] = useState<LanguageMode>(profile.preferredLanguage || 'hinglish');

  // Step 1 interactive pipeline simulator state
  const [simulatedAction, setSimulatedAction] = useState<string | null>(null);

  // Step 4 comparison simulation state
  const [benchmarkRun, setBenchmarkRun] = useState(false);

  // Active Mental Analogy for Variables
  const [activeAnalogy, setActiveAnalogy] = useState<AnalogyModel>(profile.activeAnalogy || 'storage_box');
  const analogyDetails = AnalogyService.getAnalogy(activeAnalogy);

  // Step 5 & 7 variable memory container values
  const [memoryBoxValue, setMemoryBoxValue] = useState<string>('Aarav');

  // Metacognitive Confidence Engine State
  const [selectedConfidence, setSelectedConfidence] = useState<ConfidenceLevel | null>(null);
  const [confidenceFeedback, setConfidenceFeedback] = useState<ConfidenceFeedback | null>(null);

  // Step 7 prediction state
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [predictionFeedback, setPredictionFeedback] = useState<string | null>(null);

  // Step 8 bug detective 4-level progressive hint level
  const [hintLevel, setHintLevel] = useState(0);

  // Teach-back & Diagnosis Engine state
  const [teachBackInput, setTeachBackInput] = useState('');
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisFeedback | null>(null);

  // Spaced Retrieval state for Step 9
  const [retrievalAnswered, setRetrievalAnswered] = useState(false);

  // Input Mode (Speak | Type | Tap)
  const [inputMode, setInputMode] = useState<InputMode>('tap');

  // Sync state when step changes
  const loadStep = (idx: number) => {
    setCurrentStepIndex(idx);
    const targetStep = DAY1_STEPS[idx];
    setCode(targetStep.initialCode || '');
    setOutput([]);
    setHasExecuted(false);
    setErrorMsg(null);
    setSelectedConfidence(null);
    setConfidenceFeedback(null);
    setSelectedPrediction(null);
    setPredictionFeedback(null);
    setHintLevel(0);
    setTeachBackInput('');
    setDiagnosisResult(null);
    setPulseState('idle');
  };

  // Step opening voice prompts (India Edition)
  useEffect(() => {
    if (step.stepNumber === 1) {
      setPulseState('ai-speaking');
      const intro = lang === 'hindi'
        ? "नमस्ते! पायथन में आपका स्वागत है। हम कंप्यूटर को सीधे निर्देश देना सीखेंगे।"
        : "Welcome to 2050. Jaise kisi ko exact steps dete ho kaam karne ke liye, waise hi Python computer ko instructions deta hai.";
      Voice.speak(intro, lang, () => setPulseState('idle'));
    } else if (step.stepNumber === 5) {
      setPulseState('ai-speaking');
      const intro = lang === 'hindi'
        ? "अब कंप्यूटर को कुछ याद रखना सिखाते हैं। स्कूल ऐप को आरव का नाम याद रखना है।"
        : "Ab computer ko kuch yaad rakhwana hai. School app ko Aarav ka naam yaad rakhna hai. Iske liye variable chahiye.";
      Voice.speak(intro, lang, () => setPulseState('idle'));
    } else if (step.stepNumber === 7) {
      setPulseState('ai-speaking');
      const intro = lang === 'hindi'
        ? "कोड चलाने से पहले दिमाग में अनुमान लगाएं: 20 में 1 जोड़ने पर क्या आएगा?"
        : "Pehle dimaag mein chalao: 20 mein 1 jodne par memory mein kya store hoga?";
      Voice.speak(intro, lang, () => setPulseState('idle'));
    }
  }, [step.stepNumber, lang]);

  const handleNextStep = () => {
    onStepComplete(currentStepIndex);
    AnalyticsService.log('step_completed', { stepNumber: step.stepNumber, id: step.id });
    SoundEffects.playBreakthrough();
    setPulseState('breakthrough');

    if (currentStepIndex < DAY1_STEPS.length - 1) {
      setTimeout(() => loadStep(currentStepIndex + 1), 350);
    } else {
      SoundEffects.playMissionComplete();
      setPulseState('mission-completed');
      onDayComplete();
    }
  };

  // Safe Python Code Runner
  const runCode = () => {
    setErrorMsg(null);
    setPulseState('code-running');
    AnalyticsService.log('code_run', { step: step.stepNumber, code });

    const res: PythonExecutionResult = SafePythonSandbox.run(code);
    setOutput(res.output);
    setHasExecuted(true);

    if (!res.success) {
      setErrorMsg(res.error || 'Syntax error in code.');
      SoundEffects.playError();
      setPulseState('idle');
      onRecordMistake('syntax', res.error || 'Syntax error');
      return;
    }

    SoundEffects.playSuccess();
    setPulseState('breakthrough');

    // Metacognition evaluation if confidence was chosen
    if (selectedConfidence) {
      const isCorrectResult = res.success && !errorMsg;
      const confResult = ConfidenceEngine.evaluate(selectedConfidence, isCorrectResult, lang);
      setConfidenceFeedback(confResult);
    }
  };

  // Step 7 prediction handler
  const handleSelectPrediction = (choice: string) => {
    setSelectedPrediction(choice);
    SoundEffects.playDiscovery();
    setPulseState('prediction-submitted');

    const wasCorrect = choice === '21';

    if (wasCorrect) {
      setPredictionFeedback(
        lang === 'hindi'
          ? '«“शानदार! आपका मेंटल मॉडल मजबूत हो रहा है।”» 20 + 1 = 21। अब RUN दबाकर जांचें।'
          : '«“Your mental model is getting stronger.”» 20 + 1 = 21. Click RUN to confirm.'
      );
      Voice.speak("Your mental model is getting stronger. Let's test your prediction.", lang);
    } else {
      setPredictionFeedback(
        lang === 'hindi'
          ? '«“रोचक बात। चलिए देखते हैं ऐसा क्यों हुआ।”» लाइन 2 ने 20 में 1 जोड़ा था।'
          : '«“Interesting. Let\'s see why.”» Line 2 took 20 and added 1 to it.'
      );
      Voice.speak("Interesting. Let's see why.", lang);
      onRecordMistake('prediction', `Selected ${choice} instead of 21`);
    }

    if (selectedConfidence) {
      const confResult = ConfidenceEngine.evaluate(selectedConfidence, wasCorrect, lang);
      setConfidenceFeedback(confResult);
    }
  };

  // Teach-back submission with the 6-State Diagnosis Engine
  const handleTeachBackSubmit = (explanation: string) => {
    if (!explanation.trim()) return;
    setTeachBackInput(explanation);
    setPulseState('ai-speaking');

    const result = DiagnosisEngine.diagnoseVariableExplanation(explanation, lang, activeAnalogy);
    setDiagnosisResult(result);

    if (result.category === 'CORRECT') {
      SoundEffects.playBreakthrough();
      setPulseState('breakthrough');
    } else {
      SoundEffects.playDiscovery();
      setPulseState('idle');
    }

    Voice.speak(result.encouragement, lang);
  };

  // Switch to Next Indian Analogy (School Register, Mobile Contact, etc.)
  const handleSwitchAnalogy = () => {
    const next = AnalogyService.getNextAnalogy(activeAnalogy);
    setActiveAnalogy(next);
    SoundEffects.playDiscovery();
    const details = AnalogyService.getAnalogy(next);
    Voice.speak(`Chalo ab isko ${details.title} ke example se samajhte hain.`, lang);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 selection:bg-quantum-teal/20 selection:text-deep-space">
      {/* Top Header: Progress & Pulse */}
      <div className="flex items-center justify-between gap-3 border-b border-lab-900/10 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {DAY1_STEPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => loadStep(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentStepIndex
                  ? 'w-7 bg-quantum-teal shadow-teal-glow ring-2 ring-quantum-teal/30'
                  : idx < currentStepIndex
                  ? 'w-3 bg-emerald-500'
                  : 'w-2 bg-lab-200 hover:bg-lab-300'
              }`}
              title={`Step ${s.stepNumber}: ${s.title}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Global Learning Pulse Indicator */}
          <LearningPulse state={pulseState} />

          {/* Language Switcher */}
          <div className="flex items-center bg-lab-100 p-0.5 rounded-full border border-lab-900/10 text-[10px] font-mono">
            {[
              { id: 'hinglish' as LanguageMode, label: 'Hinglish' },
              { id: 'hindi' as LanguageMode, label: 'हिंदी' },
              { id: 'en' as LanguageMode, label: 'English' },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setLang(l.id);
                  Voice.setLanguage(l.id);
                  SoundEffects.playDiscovery();
                }}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === l.id
                    ? 'bg-deep-space text-future-white font-semibold'
                    : 'text-lab-500 hover:text-deep-space'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Socratic AI Mentor trigger */}
          <button
            onClick={() => onOpenTutor(step.title)}
            className="flex items-center gap-1 text-xs font-mono text-deep-space bg-lab-100 border border-lab-900/10 px-2.5 py-1 rounded-full hover:border-quantum-teal/50 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-quantum-teal" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </div>
      </div>

      {/* AI Companion Banner & Hero Voice */}
      <div className="flex items-center justify-between gap-4 bg-white border border-lab-900/10 rounded-2xl p-4 shadow-subtle">
        <div className="flex-1">
          <span className="text-[10px] font-mono tracking-widest uppercase text-quantum-teal font-semibold block">
            MISSION 01 • MAKE THE COMPUTER REMEMBER
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-deep-space tracking-tight mt-0.5">
            {lang === 'hindi' ? step.titleHindi || step.title : step.title}
          </h2>
          <p className="text-xs text-lab-500 font-normal mt-0.5">
            {step.tagline}
          </p>
        </div>

        {/* Floating AI Presence with Waveform */}
        <AiCompanionOrb
          message={
            step.stepNumber === 1
              ? (lang === 'hindi' ? "पायथन से हम कंप्यूटर को सीधे निर्देश देते हैं।" : "Python = instructions for computers.")
              : step.stepNumber === 5
              ? (lang === 'hindi' ? "स्कूल ऐप को आरव का नाम याद रखना है।" : "School app needs to remember Aarav's name.")
              : step.stepNumber === 7
              ? (lang === 'hindi' ? "कोड चलाने से पहले दिमाग में अनुमान लगाएं।" : "Predict what will appear before clicking RUN.")
              : step.conceptContext.doNow
          }
        />
      </div>

      {/* Rule #2: WHAT / WHY / REAL LIFE / DO NOW Micro-Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-lab-900/10 shadow-subtle">
          <span className="text-[10px] font-mono uppercase tracking-wider text-quantum-teal font-semibold block">
            WHAT IS IT?
          </span>
          <p className="text-xs text-deep-space font-medium mt-1 leading-snug">
            {step.conceptContext.what}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-lab-900/10 shadow-subtle">
          <span className="text-[10px] font-mono uppercase tracking-wider text-future-blue font-semibold block">
            WHY WE NEED IT?
          </span>
          <p className="text-xs text-deep-space font-medium mt-1 leading-snug">
            {step.conceptContext.why}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-lab-900/10 shadow-subtle">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-semibold block">
            DO NOW
          </span>
          <p className="text-xs text-deep-space font-medium mt-1 leading-snug">
            {step.conceptContext.doNow || step.tagline}
          </p>
        </div>
      </div>

      {/* STEP 1: INTERACTIVE TRANSMISSION PIPELINE */}
      {step.id === 'step_what_is_python' && (
        <div className="p-6 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-4 text-center">
          <div className="text-xs font-mono text-quantum-teal font-semibold uppercase tracking-wider">
            HUMAN INSTRUCTION → PYTHON → MACHINE EXECUTION
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-3 font-mono text-xs">
            <div className="px-4 py-2.5 rounded-2xl bg-lab-100 text-deep-space font-semibold border border-lab-900/5">
              1. "Room mein jao, book uthao"
            </div>
            <span className="text-quantum-teal font-bold">→</span>
            <div className={`px-4 py-2.5 rounded-2xl transition-all font-semibold ${
              simulatedAction ? 'bg-deep-space text-white shadow-elevated' : 'bg-lab-100 text-lab-600'
            }`}>
              2. print("Hello, Future")
            </div>
            <span className="text-quantum-teal font-bold">→</span>
            <div className={`px-4 py-2.5 rounded-2xl transition-all font-semibold ${
              simulatedAction ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-lab-100 text-lab-600'
            }`}>
              3. Screen Displays Output
            </div>
          </div>

          <button
            onClick={() => {
              SoundEffects.playDiscovery();
              setSimulatedAction('Transmitted: print("Hello, Future")');
              setPulseState('breakthrough');
            }}
            className="px-6 py-2.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-semibold shadow-subtle transition-all active:scale-95"
          >
            ⚡ Transmit Signal
          </button>

          {simulatedAction && (
            <p className="text-xs text-emerald-600 font-mono font-medium animate-fadeIn">
              ✓ Signal transmitted successfully! The machine obeyed your exact instruction.
            </p>
          )}
        </div>
      )}

      {/* STEP 4: SUPERHUMAN SPEED (10,000 EXAM CALCULATIONS) */}
      {step.id === 'step_why_useful' && (
        <div className="p-6 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-4">
          <div className="text-xs font-mono text-quantum-teal font-semibold text-center uppercase tracking-wider">
            BENCHMARK: 10,000 STATE BOARD EXAM RECORDS
          </div>

          <div className="grid grid-cols-2 gap-4 text-center py-2">
            <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5">
              <span className="text-xs text-lab-500 font-mono block">Manual Human Calculation</span>
              <span className="text-2xl font-bold text-signal-coral block mt-1">3.5 Hours</span>
              <span className="text-[11px] text-lab-400 mt-1 block">Calculation fatigue & mistakes</span>
            </div>
            <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5">
              <span className="text-xs text-lab-500 font-mono block">Python Memory</span>
              <span className="text-2xl font-bold text-emerald-600 block mt-1">0.002 Sec</span>
              <span className="text-[11px] text-lab-400 mt-1 block">100% mathematical precision</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                SoundEffects.playBreakthrough();
                setBenchmarkRun(true);
                setPulseState('breakthrough');
              }}
              className="px-6 py-2.5 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-semibold shadow-subtle transition-all"
            >
              Test Speed Simulation
            </button>
          </div>

          {benchmarkRun && (
            <p className="text-xs text-emerald-600 font-mono text-center font-medium animate-fadeIn">
              ✓ Processed 10,000 records in 0.0018 seconds. Zero human error.
            </p>
          )}
        </div>
      )}

      {/* STEP 5: VISUAL DIGITAL STORAGE & MULTI-ANALOGY SWITCHER */}
      {step.id === 'step_variables' && (
        <div className="p-5 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-quantum-teal font-semibold uppercase tracking-wider">
              {analogyDetails.title.toUpperCase()} ({analogyDetails.titleHindi})
            </div>

            {/* Switch Analogy Button */}
            <button
              onClick={handleSwitchAnalogy}
              className="flex items-center gap-1 text-[11px] font-mono text-future-blue hover:underline"
              title="Try a different real-world Indian analogy"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Try Another Analogy</span>
            </button>
          </div>

          <p className="text-xs text-lab-500">
            {AnalogyService.getLocalizedExplanation(activeAnalogy, lang)}
          </p>

          {/* Visual Container */}
          <div className="flex items-center justify-center gap-4 py-3 bg-lab-50 rounded-2xl border border-lab-900/5">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono text-lab-400 uppercase">Variable Name / Label</span>
              <div className="px-4 py-2 rounded-xl bg-deep-space text-future-white font-mono text-xs font-bold mt-1">
                {analogyDetails.visualGraphic.containerLabel}
              </div>
            </div>

            <span className="text-xl text-quantum-teal font-bold font-mono">=</span>

            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono text-lab-400 uppercase">Value in Memory</span>
              <div className="px-6 py-2 rounded-xl border-2 border-dashed border-quantum-teal bg-white text-deep-space font-mono text-xs font-bold mt-1 shadow-sm">
                {analogyDetails.visualGraphic.storedContent}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* METABOLIC CONFIDENCE ENGINE: "Kitna confident ho?" */}
      {(step.id === 'step_predict' || step.id === 'step_remember_age') && !hasExecuted && (
        <div className="p-4 rounded-2xl bg-white border border-lab-900/10 shadow-subtle space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-deep-space font-semibold">
              {lang === 'hindi' ? 'आप अपने उत्तर को लेकर कितने आश्वस्त (confident) हैं?' : 'Kitna confident ho? (Select before running):'}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'not_sure' as ConfidenceLevel, label: '😕 Not sure' },
              { id: 'maybe' as ConfidenceLevel, label: '🤔 Maybe' },
              { id: 'mostly' as ConfidenceLevel, label: '🙂 Mostly' },
              { id: 'confident' as ConfidenceLevel, label: '😎 Confident' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedConfidence(c.id);
                  SoundEffects.playDiscovery();
                }}
                className={`py-2 px-1 text-center rounded-xl text-xs font-medium border transition-all ${
                  selectedConfidence === c.id
                    ? 'bg-deep-space text-white border-deep-space shadow-subtle'
                    : 'bg-lab-50 text-lab-600 border-lab-200 hover:border-lab-400'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 7: PREDICTION CHOICES */}
      {step.id === 'step_predict' && (
        <div className="p-5 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-quantum-teal font-semibold uppercase tracking-wider">
              COGNITIVE PREDICTION
            </span>
            <span className="text-[11px] font-mono text-lab-400">
              Predict before running
            </span>
          </div>

          <p className="text-xs text-deep-space font-medium">
            Look at the code below: What will appear when print(age) runs?
          </p>

          <div className="grid grid-cols-4 gap-2">
            {['20', '21', '22', 'Error'].map((choice) => (
              <button
                key={choice}
                onClick={() => handleSelectPrediction(choice)}
                className={`py-2.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                  selectedPrediction === choice
                    ? choice === '21'
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-subtle'
                      : 'bg-signal-coral text-white border-signal-coral'
                    : 'bg-white text-deep-space border-lab-200 hover:border-quantum-teal'
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {predictionFeedback && (
            <p className="text-xs text-deep-space font-medium bg-lab-50 p-2.5 rounded-xl border border-lab-900/5 animate-fadeIn">
              {predictionFeedback}
            </p>
          )}

          {confidenceFeedback && (
            <div className="p-3 rounded-xl bg-solar-gold/15 border border-solar-gold/40 text-xs font-medium text-deep-space space-y-0.5 animate-fadeIn">
              <div>{confidenceFeedback.calibrationMessage}</div>
              <div className="text-[11px] text-lab-500 italic">{confidenceFeedback.metacognitiveTip}</div>
            </div>
          )}
        </div>
      )}

      {/* STEP 8: BUG DETECTIVE 4-LEVEL HINTS */}
      {step.id === 'step_first_bug' && (
        <div className="p-5 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-signal-coral font-semibold uppercase tracking-wider">
              DIAGNOSTIC RADAR • 4-LEVEL GUIDANCE
            </span>
            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                setHintLevel(Math.min(hintLevel + 1, 4));
              }}
              className="text-xs font-mono text-quantum-teal hover:underline font-semibold"
            >
              {hintLevel === 0 ? 'Need a hint? (Level 1)' : hintLevel < 4 ? `Next Hint (Level ${hintLevel + 1})` : 'All Hints Revealed'}
            </button>
          </div>

          {hintLevel > 0 && (
            <div className="space-y-1.5 animate-fadeIn">
              {step.hints.slice(0, hintLevel).map((h, i) => (
                <div key={i} className="text-xs text-deep-space bg-lab-50 p-2.5 rounded-xl border border-lab-900/5 font-mono">
                  {h}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CODE EDITOR & EXECUTION SANDBOX */}
      {step.initialCode && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-quantum-teal" />
              <span className="text-xs font-mono font-semibold text-deep-space">
                Python Sandbox (2050 Runtime)
              </span>
            </div>
            <button
              onClick={() => {
                setCode(step.initialCode || '');
                setOutput([]);
                setHasExecuted(false);
                setErrorMsg(null);
              }}
              className="flex items-center gap-1 text-[11px] font-mono text-lab-400 hover:text-deep-space"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Clean Editor Surface */}
          <div className="rounded-2xl border border-lab-900/10 bg-deep-space overflow-hidden shadow-subtle">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-lab-950 text-xs font-mono text-lab-400">
              <span>main.py</span>
              <button
                onClick={runCode}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-quantum-teal text-white hover:bg-quantum-teal/90 font-medium text-xs shadow-sm transition-all active:scale-95"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>RUN CODE</span>
              </button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={step.id === 'step_real_world_data' ? 7 : 4}
              className="w-full p-4 bg-transparent text-emerald-400 font-mono text-xs focus:outline-none resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>

          {/* Sandbox Execution Terminal */}
          {hasExecuted && (
            <div className="p-4 rounded-2xl bg-white border border-lab-900/10 shadow-subtle font-mono text-xs space-y-1 animate-fadeIn">
              <div className="flex items-center justify-between text-[10px] text-lab-400 uppercase tracking-widest font-semibold border-b border-lab-100 pb-1">
                <span>SANDBOX OUTPUT</span>
                <span className="text-emerald-600">0.002s</span>
              </div>
              {output.length > 0 ? (
                <div className="pt-1 space-y-0.5">
                  {output.map((line, idx) => (
                    <div key={idx} className="text-deep-space font-mono text-xs">
                      {line}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-lab-400 italic pt-1">
                  (Program executed with no visible output)
                </div>
              )}
            </div>
          )}

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-signal-coral/10 border border-signal-coral/20 text-signal-coral text-xs font-mono flex items-center gap-2 animate-fadeIn">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      )}

      {/* TEACH-BACK & STUDENT ANSWER DIAGNOSIS ENGINE */}
      {hasExecuted && !errorMsg && currentStepIndex >= 4 && (
        <div className="p-5 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-quantum-teal" />
            <span className="text-xs font-mono font-bold text-deep-space">
              TEACH-BACK ENGINE: "Ab tum mujhe batao — variable kya hota hai?"
            </span>
          </div>

          <p className="text-xs text-lab-500">
            {lang === 'hindi'
              ? 'हिंदी, अंग्रेजी या हिंग्लिश में बताएं। भाषा की कोई पाबंदी नहीं है।'
              : 'Explain in English, Hindi, or Hinglish. We analyze concept, not grammar.'}
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              value={teachBackInput}
              onChange={(e) => setTeachBackInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleTeachBackSubmit(teachBackInput);
              }}
              placeholder="e.g. Variable ek named memory container hai jo value store karta hai..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-lab-900/10 focus:outline-none focus:border-quantum-teal"
            />
            <button
              onClick={() => handleTeachBackSubmit(teachBackInput)}
              className="px-4 py-2 rounded-xl bg-deep-space text-white text-xs font-medium hover:bg-deep-space/90"
            >
              Analyze
            </button>
          </div>

          {/* 6-State Diagnosis Result with 4-Step Improvement */}
          {diagnosisResult && (
            <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/10 space-y-2.5 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-quantum-teal font-mono">
                  {diagnosisResult.encouragement}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lab-200 text-deep-space font-semibold">
                  STATUS: {diagnosisResult.category}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-deep-space">
                <div>
                  <span className="font-semibold text-emerald-700">✓ WHAT YOU GOT RIGHT: </span>
                  <span>{diagnosisResult.whatYouGotRight}</span>
                </div>
                {diagnosisResult.whatIsMissing && (
                  <div>
                    <span className="font-semibold text-amber-700">🔍 WHAT IS MISSING: </span>
                    <span>{diagnosisResult.whatIsMissing}</span>
                  </div>
                )}
                <div>
                  <span className="font-semibold text-future-blue">💡 HOW TO IMPROVE: </span>
                  <span>{diagnosisResult.howToImprove}</span>
                </div>
                <div className="pt-1 text-[11px] text-lab-500 italic">
                  🔄 {diagnosisResult.tryAgainPrompt}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SPACED RETRIEVAL (Section 30) on Step 9 */}
      {step.id === 'step_real_world_data' && hasExecuted && (
        <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/10 space-y-2">
          <div className="text-xs font-mono text-quantum-teal font-semibold">
            🧠 2-MINUTE SPACED RETRIEVAL
          </div>
          <p className="text-xs text-deep-space font-medium">
            «“Bina peeche dekhe batao: variable ka main purpose kya tha?”»
          </p>
          {!retrievalAnswered ? (
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  setRetrievalAnswered(true);
                  SoundEffects.playSuccess();
                }}
                className="p-2.5 rounded-xl bg-white border border-lab-900/10 hover:border-quantum-teal text-left"
              >
                A. Information ko memory mein ek naam ke saath store karna.
              </button>
              <button
                onClick={() => {
                  setRetrievalAnswered(true);
                  SoundEffects.playDiscovery();
                }}
                className="p-2.5 rounded-xl bg-white border border-lab-900/10 hover:border-quantum-teal text-left"
              >
                B. Sirf screen par print karna.
              </button>
            </div>
          ) : (
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              ✓ Bilkul sahi! Variable information ko store aur access karta hai.
            </div>
          )}
        </div>
      )}

      {/* BOTTOM INPUT MODE SWITCHER: Speak | Type | Tap */}
      <div className="pt-2">
        <InputModeBar
          currentMode={inputMode}
          onModeChange={(m) => setInputMode(m)}
          onTextSubmit={(text) => handleTeachBackSubmit(text)}
          placeholder={lang === 'hindi' ? 'अपनी बात या सवाल बोलें/लिखें...' : 'Share your thought or prediction...'}
        />
      </div>

      {/* NEXT STEP ACTION BUTTON */}
      <div className="flex items-center justify-between pt-4 border-t border-lab-900/10">
        <button
          onClick={() => loadStep(Math.max(0, currentStepIndex - 1))}
          disabled={currentStepIndex === 0}
          className="text-xs font-mono text-lab-400 hover:text-deep-space disabled:opacity-20 transition-colors"
        >
          ← Previous
        </button>

        <button
          onClick={handleNextStep}
          className="px-6 py-3 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-semibold tracking-wide shadow-elevated flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{currentStepIndex < DAY1_STEPS.length - 1 ? 'NEXT STEP' : 'COMPLETE DAY 1'}</span>
          <ArrowRight className="w-4 h-4 text-quantum-teal" />
        </button>
      </div>
    </div>
  );
};
