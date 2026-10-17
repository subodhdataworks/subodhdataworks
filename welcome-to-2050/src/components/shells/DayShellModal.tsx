import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  Code2, 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Terminal,
  GitBranch,
  Volume2
} from 'lucide-react';
import { DAYS_2_TO_7_MODULES, DayModule } from '../../data/days2to7Missions';
import { LearnerProfile } from '../../types';
import { SafePythonSandbox } from '../../services/pythonSandbox';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';

interface DayShellModalProps {
  dayNumber: number;
  profile: LearnerProfile;
  onClose: () => void;
  onToggleDevMode: () => void;
}

export const DayShellModal: React.FC<DayShellModalProps> = ({
  dayNumber,
  profile,
  onClose,
  onToggleDevMode,
}) => {
  const mod: DayModule = DAYS_2_TO_7_MODULES[dayNumber] || DAYS_2_TO_7_MODULES[2];
  const challenge = mod.interactiveChallenge;

  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState(false);

  const isUnlocked = profile.devModeUnlocked || profile.completedDays.includes(dayNumber - 1);

  const handleRun = () => {
    const res = SafePythonSandbox.run(code);
    setOutput(res.success ? res.output : [res.error || 'Execution Error']);
    setHasRun(true);
    if (res.success) {
      SoundEffects.playSuccess();
    } else {
      SoundEffects.playError();
    }
  };

  const handleListenConcept = () => {
    SoundEffects.playDiscovery();
    Voice.speak(`Day ${mod.dayNumber}: ${mod.title}. ${mod.what} ${mod.why}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-space/60 backdrop-blur-md overflow-y-auto">
      <div className="max-w-3xl w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-left relative shadow-elevated space-y-6 max-h-[92vh] overflow-y-auto animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-lab-900/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-lab-100 text-deep-space border border-lab-900/10 text-xs font-mono font-semibold">
                DAY 0{mod.dayNumber} MISSION
              </span>
              {isUnlocked ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono flex items-center gap-1 font-semibold">
                  <Unlock className="w-3 h-3" /> ACTIVE
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-lab-100 text-lab-500 border border-lab-200 text-[10px] font-mono flex items-center gap-1">
                  <Lock className="w-3 h-3" /> LOCKED (UNLOCK VIA DAY 0{dayNumber - 1})
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-space tracking-tight">
              {mod.title}
            </h2>
            <p className="text-xs sm:text-sm text-lab-500 mt-0.5">
              {mod.tagline}
            </p>
            {mod.indianContext && (
              <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-xl bg-solar-gold/10 border border-solar-gold/30 text-xs text-deep-space font-medium">
                <span className="text-xs">🇮🇳</span>
                <span><strong>Real-World India Context:</strong> {mod.indianContext}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleListenConcept}
              className="p-2 rounded-full text-lab-500 hover:text-quantum-teal hover:bg-lab-100 transition-colors"
              title="Listen to Concept Introduction"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close day preview"
              className="p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lock / Unlock Banner if locked */}
        {!isUnlocked && (
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs text-amber-800">
            <span>
              🔒 Unlocks sequentially as you advance. Use Developer Mode to test this mission prototype right now.
            </span>
            <button
              onClick={onToggleDevMode}
              className="px-3 py-1.5 rounded-xl bg-deep-space text-future-white font-medium text-xs font-mono ml-3 shrink-0"
            >
              DEV UNLOCK
            </button>
          </div>
        )}

        {/* Section 5: Future UI Principles (WHAT / WHY / DO) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-2xl bg-lab-50 border border-lab-900/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-quantum-teal font-semibold block">
              WHAT?
            </span>
            <p className="text-xs text-deep-space font-medium mt-0.5">
              {mod.what}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-lab-50 border border-lab-900/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-future-blue font-semibold block">
              WHY?
            </span>
            <p className="text-xs text-deep-space font-medium mt-0.5">
              {mod.why}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-lab-50 border border-lab-900/5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-semibold block">
              DO?
            </span>
            <p className="text-xs text-deep-space font-medium mt-0.5">
              {mod.doNow}
            </p>
          </div>
        </div>

        {/* Visual Decision Tree for Day 2 if applicable */}
        {mod.interactiveChallenge.decisionTree && (
          <div className="p-4 rounded-2xl bg-white border border-lab-900/10 shadow-subtle space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-quantum-teal font-semibold">
              <GitBranch className="w-3.5 h-3.5" />
              <span>VISUAL DECISION BRANCH</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-2 font-mono text-xs">
              <div className="px-3 py-2 rounded-xl bg-deep-space text-future-white font-bold">
                {mod.interactiveChallenge.decisionTree.condition}
              </div>
              <span className="text-lab-400">→</span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                  YES: {mod.interactiveChallenge.decisionTree.yesAction}
                </span>
                <span className="px-2.5 py-1.5 rounded-lg bg-lab-100 text-lab-700 border border-lab-200">
                  NO: {mod.interactiveChallenge.decisionTree.noAction}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Day 7 8-Stage Workflow Pipeline visual */}
        {mod.dayNumber === 7 && (
          <div className="p-4 rounded-2xl bg-white border border-lab-900/10 shadow-subtle space-y-2">
            <span className="text-[10px] font-mono text-solar-gold font-bold tracking-wider uppercase block">
              THE 8-STAGE DATA DETECTIVE WORKFLOW
            </span>
            <div className="flex flex-wrap items-center gap-1 text-[10px] font-mono">
              {['INSPECT', 'UNDERSTAND', 'CLEAN', 'CALCULATE', 'FILTER', 'ANALYZE', 'VISUALIZE', 'EXPLAIN'].map((stage, i) => (
                <React.Fragment key={stage}>
                  <span className="px-2 py-1 rounded bg-deep-space text-future-white font-semibold">
                    {stage}
                  </span>
                  {i < 7 && <span className="text-lab-400">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Live Interactive Challenge & Code Sandbox */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-quantum-teal" />
              <span className="text-xs font-mono font-semibold text-deep-space">
                Interactive Challenge: {challenge.title}
              </span>
            </div>
            <span className="text-[11px] text-lab-400 font-mono">
              Safe Python Sandbox
            </span>
          </div>

          <p className="text-xs text-lab-600 bg-lab-50 p-2.5 rounded-xl border border-lab-900/5">
            {challenge.scenario}
          </p>

          {/* Code Editor */}
          <div className="rounded-2xl border border-lab-900/10 bg-deep-space overflow-hidden shadow-subtle">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-lab-950 text-xs font-mono text-lab-400">
              <span>main.py</span>
              <button
                onClick={handleRun}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-quantum-teal text-white hover:bg-quantum-teal/90 font-medium text-xs shadow-sm transition-all"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>RUN CODE</span>
              </button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={6}
              className="w-full p-4 bg-transparent text-emerald-400 font-mono text-xs focus:outline-none resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>

          {/* Sandbox Execution Terminal */}
          {hasRun && (
            <div className="p-3.5 rounded-2xl bg-lab-100 border border-lab-900/10 font-mono text-xs space-y-1">
              <div className="text-[10px] text-lab-400 uppercase tracking-widest font-semibold">
                SANDBOX OUTPUT:
              </div>
              <pre className="text-deep-space whitespace-pre-wrap font-mono text-xs leading-normal">
                {output.join('\n')}
              </pre>
            </div>
          )}
        </div>

        {/* Mindset Takeaway */}
        <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 flex items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-quantum-teal font-semibold block">
              2050 MINDSET TAKEAWAY
            </span>
            <p className="text-deep-space font-medium italic">
              «{mod.mindsetTakeaway}»
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-medium shrink-0 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
