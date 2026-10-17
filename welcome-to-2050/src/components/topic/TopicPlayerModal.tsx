import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Play, 
  Volume2, 
  CheckCircle2, 
  Code2, 
  ArrowRight, 
  Layers, 
  Brain, 
  HelpCircle,
  Lightbulb,
  Terminal,
  Database,
  FileSpreadsheet,
  BarChart3,
  Award
} from 'lucide-react';
import { CourseTopic, CourseModule, LanguageMode, DiagnosisFeedback } from '../../types';
import { SafePythonSandbox } from '../../services/pythonSandbox';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { DiagnosisEngine } from '../../services/diagnosisEngine';
import { StorageService } from '../../services/storage';
import confetti from 'canvas-confetti';

interface TopicPlayerModalProps {
  course: CourseModule;
  topic: CourseTopic;
  isOpen: boolean;
  onClose: () => void;
  onCompleteTopic: (courseId: string, topicId: string) => void;
  onOpenSubscription?: () => void;
}

export const TopicPlayerModal: React.FC<TopicPlayerModalProps> = ({
  course,
  topic,
  isOpen,
  onClose,
  onCompleteTopic,
  onOpenSubscription,
}) => {
  const [lang, setLang] = useState<LanguageMode>('hinglish');
  const [code, setCode] = useState<string>(topic.starterCode || '');
  const [output, setOutput] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState<boolean>(false);

  // Teach-back state
  const [teachBackInput, setTeachBackInput] = useState<string>('');
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisFeedback | null>(null);

  // Simulation states
  const [simStep, setSimStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setCode(topic.starterCode || '');
      setOutput([]);
      setHasRun(false);
      setTeachBackInput('');
      setDiagnosisResult(null);
      setSimStep(0);
      setIsCompleted(false);

      // Play introductory voice
      SoundEffects.playDiscovery();
      const introVoice = lang === 'hindi'
        ? `${topic.titleHindi || topic.title}। आइए 30 सेकंड में इस कांसेप्ट का लॉजिक समझते हैं।`
        : `Welcome to ${topic.title}. ${topic.whatIsIt} ${topic.indianRealLifeMetaphor}`;
      Voice.speak(introVoice, lang);
    }
  }, [isOpen, topic.id, lang]);

  if (!isOpen) return null;

  const handleRunCode = () => {
    SoundEffects.playDiscovery();
    const res = SafePythonSandbox.run(code);
    if (res.success) {
      setOutput(res.output);
      setHasRun(true);
      SoundEffects.playSuccess();
    } else {
      setOutput([res.error || 'Execution Error']);
      setHasRun(true);
      SoundEffects.playError();
    }
  };

  const handleTeachBackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teachBackInput.trim()) return;

    SoundEffects.playDiscovery();
    const diagnosis = DiagnosisEngine.diagnoseVariableExplanation(teachBackInput.trim(), lang, 'storage_box');
    setDiagnosisResult(diagnosis);

    if (diagnosis.category === 'CORRECT') {
      SoundEffects.playBreakthrough();
      confetti({ particleCount: 40, spread: 60 });
    }
  };

  const handleMarkComplete = () => {
    SoundEffects.playMissionComplete();
    confetti({ particleCount: 70, spread: 70 });
    setIsCompleted(true);
    StorageService.completeCourseTopic(course.id, topic.id);
    onCompleteTopic(course.id, topic.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-space/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-4xl w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-left relative shadow-elevated space-y-6 max-h-[95vh] overflow-y-auto">
        
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-lab-900/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-lab-100 text-deep-space border border-lab-900/10 text-[10px] font-mono font-bold uppercase">
                {course.title} • TOPIC 0{topic.topicNumber}
              </span>
              {topic.isFree ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold">
                  ✓ 100% FREE TOPIC
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-solar-gold/20 text-deep-space border border-solar-gold/50 text-[10px] font-mono font-bold">
                  ⭐ VIP PASS UNLOCKED
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-deep-space tracking-tight">
              {lang === 'hindi' && topic.titleHindi ? topic.titleHindi : topic.title}
            </h2>
            <p className="text-xs sm:text-sm text-lab-500 mt-0.5">
              {topic.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-lab-100 p-0.5 rounded-full border border-lab-900/10 text-[10px] font-mono">
              {[
                { id: 'hinglish' as LanguageMode, label: 'Hinglish' },
                { id: 'hindi' as LanguageMode, label: 'हिंदी' },
                { id: 'en' as LanguageMode, label: 'English' },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLang(l.id)}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    lang === l.id ? 'bg-deep-space text-white font-semibold' : 'text-lab-500 hover:text-deep-space'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              aria-label="Close lesson"
              className="p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PHASE 1: 30-SECOND CLICK & INDIAN METAPHOR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-quantum-teal font-bold block">
              1. WHAT IS IT?
            </span>
            <p className="text-xs text-deep-space leading-relaxed font-medium">
              {topic.whatIsIt}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-future-blue font-bold block">
              2. WHY WE USE IT?
            </span>
            <p className="text-xs text-deep-space leading-relaxed font-medium">
              {topic.whyDoWeUseIt}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-solar-gold/15 border border-solar-gold/30 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-deep-space font-bold flex items-center gap-1">
              <span>🇮🇳</span>
              <span>3. REAL-LIFE INDIAN METAPHOR</span>
            </span>
            <p className="text-xs text-deep-space leading-relaxed font-medium">
              {topic.indianRealLifeMetaphor}
            </p>
          </div>
        </div>

        {/* Audio Narration Bar */}
        <div className="p-3 rounded-2xl bg-lab-100/70 border border-lab-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-quantum-teal animate-pulse-subtle" />
            <span className="font-mono text-deep-space font-medium">
              2050 Audio Companion is ready to explain in your chosen language ({lang.toUpperCase()}).
            </span>
          </div>

          <button
            onClick={() => {
              SoundEffects.playDiscovery();
              Voice.speak(`${topic.whatIsIt}. ${topic.indianRealLifeMetaphor}`, lang);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-deep-space text-white text-[11px] font-mono font-medium hover:bg-deep-space/90 shrink-0"
          >
            <Volume2 className="w-3.5 h-3.5 text-quantum-teal" />
            <span>Listen (30s)</span>
          </button>
        </div>

        {/* PHASE 2: VISUAL MECHANISM SIMULATOR */}
        <div className="p-5 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-quantum-teal font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              INTERACTIVE 2050 VISUAL MECHANISM
            </span>
            <span className="text-[10px] font-mono text-lab-400">
              See how the machine executes this concept
            </span>
          </div>

          {/* Python Memory / RAM Container Simulation */}
          {course.id === 'python' && (
            <div className="p-4 rounded-2xl bg-deep-space text-white space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-lab-300 border-b border-white/10 pb-2">
                <span>COMPUTER RAM (RANDOM ACCESS MEMORY)</span>
                <span className="text-quantum-teal">STATE: 0.002s CYCLE</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-around gap-4 py-3">
                <div className="p-4 rounded-2xl bg-lab-900/80 border border-quantum-teal/40 text-center w-full sm:w-48 shadow-subtle">
                  <span className="text-[10px] text-lab-400 block uppercase">Container Label</span>
                  <span className="text-base font-bold text-quantum-teal mt-0.5 block">name</span>
                  <div className="mt-2 py-1 px-2 rounded-lg bg-white/10 text-emerald-400 font-bold text-sm">
                    {simStep === 0 ? '"Aarav"' : '"Aarav Explorer"'}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 text-lab-400 text-xs">
                  <span>→ Mutation →</span>
                  <button
                    onClick={() => {
                      SoundEffects.playDiscovery();
                      setSimStep((prev) => (prev === 0 ? 1 : 0));
                    }}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[10px] transition-all"
                  >
                    Mutate Value in Memory
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-lab-900/80 border border-future-blue/40 text-center w-full sm:w-48 shadow-subtle">
                  <span className="text-[10px] text-lab-400 block uppercase">Data Type in Memory</span>
                  <span className="text-base font-bold text-future-blue mt-0.5 block">&lt;class 'str'&gt;</span>
                  <span className="text-[10px] text-lab-300 block mt-1">Immutable String</span>
                </div>
              </div>
            </div>
          )}

          {/* SQL Table Simulation */}
          {course.id === 'sql' && (
            <div className="p-4 rounded-2xl bg-deep-space text-white space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-lab-300 border-b border-white/10 pb-2">
                <span>RDBMS POSTGRESQL TABLE: upi_transactions</span>
                <span className="text-quantum-teal">Total: 4,120 rows</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="text-lab-400 border-b border-white/10">
                      <th className="py-1.5 px-2">TXN_ID</th>
                      <th className="py-1.5 px-2">AMOUNT</th>
                      <th className="py-1.5 px-2">STATUS</th>
                      <th className="py-1.5 px-2">RECEIVER_UPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 bg-white/5 text-emerald-400">
                      <td className="py-1 px-2">TXN_9821</td>
                      <td className="py-1 px-2">₹1,500</td>
                      <td className="py-1 px-2">SUCCESS</td>
                      <td className="py-1 px-2">sharma@oksbi</td>
                    </tr>
                    <tr className="border-b border-white/5 text-lab-400">
                      <td className="py-1 px-2">TXN_9822</td>
                      <td className="py-1 px-2">₹200</td>
                      <td className="py-1 px-2">FAILED</td>
                      <td className="py-1 px-2">verma@okhdfc</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/5 text-emerald-400">
                      <td className="py-1 px-2">TXN_9823</td>
                      <td className="py-1 px-2">₹4,800</td>
                      <td className="py-1 px-2">SUCCESS</td>
                      <td className="py-1 px-2">kumar@oksbi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Excel Grid Simulation */}
          {course.id === 'excel' && (
            <div className="p-4 rounded-2xl bg-deep-space text-white space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-lab-300 border-b border-white/10 pb-2">
                <span>EXCEL 365 GRID ENGINE: Cell Referencing Model</span>
                <span className="text-emerald-400">Active Cell: C2</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                <div className="p-2 rounded bg-white/10 text-lab-400 font-bold">Col A (Sales)</div>
                <div className="p-2 rounded bg-white/10 text-lab-400 font-bold">Col B ($B$1 Tax)</div>
                <div className="p-2 rounded bg-white/10 text-lab-400 font-bold">Formula (=A2 * $B$1)</div>
                <div className="p-2 rounded bg-white/10 text-lab-400 font-bold">Output (₹)</div>

                <div className="p-2 rounded bg-white/5 text-white">5,000</div>
                <div className="p-2 rounded bg-solar-gold/20 text-solar-gold font-bold">18% ($ Locked)</div>
                <div className="p-2 rounded bg-white/5 text-quantum-teal">=A2 * $B$1</div>
                <div className="p-2 rounded bg-emerald-500/20 text-emerald-300 font-bold">₹900.00</div>
              </div>
            </div>
          )}

          {/* Power BI Canvas Simulation */}
          {course.id === 'powerbi' && (
            <div className="p-4 rounded-2xl bg-deep-space text-white space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-lab-300 border-b border-white/10 pb-2">
                <span>POWER BI DASHBOARD CANVAS: VertiPaq Engine</span>
                <span className="text-amber-400">Slicer: [Bihar, Delhi, Mumbai]</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-lab-400 block">TOTAL REVENUE (DAX)</span>
                  <span className="text-2xl font-bold text-quantum-teal block mt-1">₹1.24 Cr</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-lab-400 block">ACTIVE STORES</span>
                  <span className="text-2xl font-bold text-future-blue block mt-1">142</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-lab-400 block">CUSTOMER RETENTION</span>
                  <span className="text-2xl font-bold text-emerald-400 block mt-1">87.4%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PHASE 3: LIVE RUNNABLE SANDBOX */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-quantum-teal" />
              <span className="text-xs font-mono font-bold text-deep-space">
                {course.id === 'python' ? '2050 Python Sandbox' : `${course.title} Code Studio`}
              </span>
            </div>

            <button
              onClick={handleRunCode}
              className="px-5 py-2 rounded-xl bg-quantum-teal text-white hover:bg-quantum-teal/90 text-xs font-mono font-bold shadow-subtle flex items-center gap-1.5 transition-transform active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>RUN EXECUTION</span>
            </button>
          </div>

          <div className="rounded-2xl border border-lab-900/10 bg-deep-space overflow-hidden shadow-subtle">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={5}
              className="w-full p-4 bg-transparent text-emerald-400 font-mono text-xs focus:outline-none resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>

          {hasRun && (
            <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/10 font-mono text-xs space-y-1 animate-fadeIn">
              <div className="flex items-center justify-between text-[10px] text-lab-400 uppercase tracking-widest font-semibold border-b border-lab-200 pb-1">
                <span>EXECUTION OUTPUT</span>
                <span className="text-emerald-600 font-bold">0.002s (100% Precision)</span>
              </div>
              {output.map((line, idx) => (
                <div key={idx} className="text-deep-space pt-1">
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PHASE 4: TEACH-BACK ENGINE (CAN YOU TEACH SOMEONE ELSE?) */}
        <div className="p-5 rounded-3xl bg-lab-50 border border-lab-900/10 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-quantum-teal" />
            <h4 className="text-xs font-bold text-deep-space font-mono">
              THE 2050 TEACH-BACK TEST: "Ab tum mujhe ya kisi naye student ko samjhao"
            </h4>
          </div>

          <p className="text-xs text-lab-500">
            Explain this concept in simple words (Hindi, English, or Hinglish). Our AI Cognitive Diagnosis Engine checks your understanding, not your grammar!
          </p>

          <form onSubmit={handleTeachBackSubmit} className="flex gap-2">
            <input
              type="text"
              value={teachBackInput}
              onChange={(e) => setTeachBackInput(e.target.value)}
              placeholder="Apne shabdon mein batao yeh concept kya karta hai..."
              className="flex-1 px-3.5 py-2.5 text-xs rounded-xl border border-lab-200 bg-white focus:outline-none focus:border-quantum-teal"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-deep-space text-white text-xs font-mono font-semibold hover:bg-deep-space/90 shrink-0"
            >
              Analyze Logic
            </button>
          </form>

          {diagnosisResult && (
            <div className="p-4 rounded-2xl bg-white border border-lab-200 space-y-2 text-xs animate-fadeIn font-sans">
              <div className="flex items-center justify-between">
                <span className="font-bold text-quantum-teal font-mono">
                  {diagnosisResult.encouragement}
                </span>
                <span className="px-2 py-0.5 rounded bg-lab-100 text-deep-space font-mono text-[10px] font-bold">
                  DIAGNOSIS: {diagnosisResult.category}
                </span>
              </div>
              <div className="space-y-1 text-deep-space">
                <div>
                  <strong className="text-emerald-700">✓ WHAT YOU GOT RIGHT: </strong>
                  <span>{diagnosisResult.whatYouGotRight}</span>
                </div>
                {diagnosisResult.whatIsMissing && (
                  <div>
                    <strong className="text-amber-700">🔍 WHAT IS MISSING: </strong>
                    <span>{diagnosisResult.whatIsMissing}</span>
                  </div>
                )}
                <div>
                  <strong className="text-future-blue">💡 HOW TO EXPLAIN EVEN BETTER: </strong>
                  <span>{diagnosisResult.howToImprove}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PHASE 5: 20-SECOND INTERVIEW FLASHCARD */}
        <div className="p-5 rounded-3xl bg-solar-gold/10 border border-solar-gold/30 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
                DATA ANALYST INTERVIEW FLASHCARD (20-SECOND READY ANSWER)
              </span>
              <h4 className="text-xs font-bold text-deep-space font-mono mt-1">
                {topic.interviewAnswer.question}
              </h4>
            </div>

            <button
              onClick={() => {
                SoundEffects.playDiscovery();
                Voice.speak(topic.interviewAnswer.audioPrompt, lang);
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-deep-space text-white text-[11px] font-mono font-medium shrink-0 hover:bg-deep-space/90"
              title="Listen to how to speak this answer in an interview"
            >
              <Volume2 className="w-3.5 h-3.5 text-quantum-teal" />
              <span>Hear Answer (20s)</span>
            </button>
          </div>

          <p className="text-xs text-lab-600 leading-relaxed font-medium bg-white p-3.5 rounded-2xl border border-solar-gold/30">
            «“{topic.interviewAnswer.answer20s}”»
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-lab-900/10">
          <button
            onClick={onClose}
            className="text-xs font-mono text-lab-400 hover:text-deep-space transition-colors"
          >
            ← Back to Syllabus
          </button>

          {!isCompleted ? (
            <button
              onClick={handleMarkComplete}
              className="px-6 py-3 rounded-full bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-bold font-mono tracking-wide shadow-elevated flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>MARK TOPIC COMPLETE & MASTERED</span>
              <Award className="w-4 h-4 text-quantum-teal" />
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>✓ Topic Mastered & Recorded in Profile!</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
