import React, { useState } from 'react';
import { Box, ArrowRight, Play, CheckCircle2, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';
import { Mission } from '../../types';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission4VariablesProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

export const Mission4Variables: React.FC<Mission4VariablesProps> = ({ mission, onSuccess, onMistake }) => {
  // Phase 1: Demonstration (10 -> 15)
  const [demoState, setDemoState] = useState<'initial' | 'transformed'>('initial');
  
  // Phase 2: Challenge (y = 20; y = y - 4)
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [challengeExecuted, setChallengeExecuted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [challengeFeedback, setChallengeFeedback] = useState<string | null>(null);

  const challengeOptions = ['20', '4', '16', '24'];

  const triggerDemoTransform = () => {
    setDemoState('transformed');
  };

  const handleChallengeSubmit = () => {
    if (!selectedPrediction || isCompleted) return;

    AnalyticsService.log('answer_submitted', { missionId: mission.id, prediction: selectedPrediction });
    setChallengeExecuted(true);

    if (selectedPrediction === '16') {
      setIsCompleted(true);
      AnalyticsService.log('answer_correct', { missionId: mission.id });
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
      setTimeout(() => {
        onSuccess();
      }, 1600);
    } else {
      AnalyticsService.log('answer_incorrect', { missionId: mission.id, attempt: selectedPrediction });
      onMistake(`Variable predicted as ${selectedPrediction} instead of 16`);
      if (selectedPrediction === '20') {
        setChallengeFeedback('Container y started with 20, but the instruction subtracted 4. Calculate 20 - 4.');
      } else if (selectedPrediction === '24') {
        setChallengeFeedback('Careful with the arithmetic operator! It is subtraction (-) rather than addition (+). What is 20 minus 4?');
      } else {
        setChallengeFeedback('Remember: y = y - 4 takes the current value (20), subtracts 4, and stores the remainder back into y.');
      }
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Visual Container Concept Showcase */}
      <div className="p-5 rounded-2xl glass-panel border border-cyan-500/30 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold">PART 1: VISUAL MEMORY CELL</span>
          </div>
          <button
            onClick={() => setDemoState(demoState === 'initial' ? 'transformed' : 'initial')}
            className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            Replay
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Code */}
          <div className="p-3 rounded-xl bg-lab-900 font-mono text-xs text-slate-300 space-y-1.5 border border-white/5">
            <div className="text-slate-500 text-[10px]"># Memory Transformation</div>
            <div>
              <span className="text-purple-300">x</span> = <span className="text-emerald-300">10</span>
            </div>
            <div>
              <span className="text-purple-300">x</span> = <span className="text-purple-300">x</span> + <span className="text-emerald-300">5</span>
            </div>
            <div className="pt-2">
              <button
                onClick={triggerDemoTransform}
                className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs hover:bg-cyan-900/60 transition-all"
              >
                Watch Mutation &rarr;
              </button>
            </div>
          </div>

          {/* Visual Memory Box */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-lab-900/80 border border-white/10 relative overflow-hidden">
            <span className="text-[10px] font-mono text-slate-400 mb-1">RAM ADDRESS: 0x2050_A</span>
            <div className="w-32 h-20 rounded-xl bg-lab-950 border-2 border-cyan-500/40 shadow-glow-cyan flex flex-col items-center justify-center relative">
              <span className="absolute top-1 left-2 text-[10px] font-mono text-purple-400 font-bold">
                box: x
              </span>
              <div className="flex items-center gap-2">
                {demoState === 'initial' ? (
                  <span className="text-2xl font-bold font-mono text-white transition-all transform scale-100">
                    10
                  </span>
                ) : (
                  <div className="flex items-center gap-1.5 animate-fadeIn">
                    <span className="text-sm font-mono text-slate-500 line-through">10</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-2xl font-bold font-mono text-emerald-400 animate-pulse">
                      15
                    </span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 text-center">
              {demoState === 'initial'
                ? 'Box x currently holds 10'
                : '10 is overwritten. Box x now holds 15!'}
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: Hands-on Challenge */}
      <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>PART 2: PREDICT THE TRANSFORMED CONTAINER</span>
        </div>

        <div className="p-3 rounded-xl bg-lab-900 font-mono text-xs text-slate-300 space-y-1 border border-white/5">
          <div><span className="text-purple-300">y</span> = <span className="text-emerald-300">20</span></div>
          <div><span className="text-purple-300">y</span> = <span className="text-purple-300">y</span> - <span className="text-emerald-300">4</span></div>
          <div><span className="text-cyan-300">print</span>(<span className="text-purple-300">y</span>)</div>
        </div>

        <p className="text-sm font-semibold text-white">
          What value will container <span className="text-purple-300 font-mono">y</span> hold at the end?
        </p>

        {/* Options */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {challengeOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                if (!isCompleted) {
                  setSelectedPrediction(opt);
                  setChallengeExecuted(false);
                  setChallengeFeedback(null);
                }
              }}
              disabled={isCompleted}
              className={`py-3 px-4 rounded-xl border font-mono text-sm font-bold transition-all ${
                selectedPrediction === opt
                  ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400 shadow-glow-emerald scale-102'
                  : 'bg-lab-900 border-white/10 text-slate-300 hover:border-emerald-500/40'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Confirm */}
        <button
          onClick={handleChallengeSubmit}
          disabled={!selectedPrediction || isCompleted}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-emerald transition-all"
        >
          <Play className="w-4 h-4 fill-lab-950" />
          <span>CONFIRM CONTAINER VALUE</span>
        </button>

        {/* Status */}
        {challengeExecuted && (
          <div>
            {selectedPrediction === '16' ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2 shadow-glow-emerald">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Correct! Container y started at 20, subtracted 4, and transformed into 16.
                </span>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-0.5">Great catch opportunity:</p>
                  <p>{challengeFeedback}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
