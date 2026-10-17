import React, { useState } from 'react';
import { Play, CheckCircle2, AlertTriangle, Sparkles, Brain, ArrowRight, Terminal } from 'lucide-react';
import { Mission } from '../../types';
import { SafePythonSandbox } from '../../services/pythonSandbox';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission3PredictProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

export const Mission3Predict: React.FC<Mission3PredictProps> = ({ mission, onSuccess, onMistake }) => {
  const code = `x = 5\nx = x + 2\nprint(x)`;
  const expectedOutput = '7';
  const options = ['5', '2', '7', 'x + 2'];

  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const [hasExecuted, setHasExecuted] = useState(false);
  const [actualOutput, setActualOutput] = useState<string | null>(null);
  const [reasoningFeedback, setReasoningFeedback] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (val: string) => {
    if (hasExecuted && isCompleted) return;
    setSelectedPrediction(val);
    setReasoningFeedback(null);
    setHasExecuted(false);
  };

  const handleExecute = () => {
    if (!selectedPrediction) return;

    AnalyticsService.log('prediction_submitted', { missionId: mission.id, prediction: selectedPrediction });

    // Run in real client-side Python sandbox
    const result = SafePythonSandbox.run(code);
    const outputStr = result.output[0] || '';
    setActualOutput(outputStr);
    setHasExecuted(true);

    if (selectedPrediction === expectedOutput && outputStr === expectedOutput) {
      AnalyticsService.log('prediction_correct', { missionId: mission.id });
      setIsCompleted(true);
      confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
      setTimeout(() => {
        onSuccess();
      }, 1600);
    } else {
      AnalyticsService.log('answer_incorrect', { missionId: mission.id, attempt: selectedPrediction });
      onMistake(`Predicted "${selectedPrediction}" instead of 7`);

      // Patient step-by-step reasoning prompt instead of revealing immediately
      if (selectedPrediction === '5') {
        setReasoningFeedback(
          'Notice Line 2: `x = x + 2`. The computer takes the previous value of x (which was 5) and adds 2 to it. What does that become?'
        );
      } else if (selectedPrediction === '2') {
        setReasoningFeedback(
          'You noticed the `+ 2`, but remember that `x` already contained 5 from Line 1! What is 5 + 2?'
        );
      } else if (selectedPrediction === 'x + 2') {
        setReasoningFeedback(
          'Python evaluates the math calculation before printing. It calculates the numerical sum rather than printing literal characters.'
        );
      } else {
        setReasoningFeedback(
          'Great catch opportunity. Re-trace the memory box: Start with 5, then add 2. What number sits in the container now?'
        );
      }
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Code Display */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-lab-900 shadow-xl">
        <div className="px-4 py-2 bg-lab-950/90 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>script_prediction.py</span>
          </div>
          <span className="text-[10px] text-cyan-300">PYTHON 3.x</span>
        </div>

        <div className="p-4 font-mono text-sm leading-loose">
          <div className="flex gap-4">
            <span className="text-slate-600 select-none">1</span>
            <span className="text-purple-300">x</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-300">5</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none">2</span>
            <span className="text-purple-300">x</span>
            <span className="text-slate-400">=</span>
            <span className="text-purple-300">x</span>
            <span className="text-cyan-400">+</span>
            <span className="text-emerald-300">2</span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none">3</span>
            <span className="text-cyan-300">print</span>
            <span className="text-slate-400">(</span>
            <span className="text-purple-300">x</span>
            <span className="text-slate-400">)</span>
          </div>
        </div>
      </div>

      {/* Mandatory Prediction Section */}
      <div className="p-5 rounded-2xl glass-panel border border-cyan-500/30 space-y-4">
        <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-semibold">
          <Brain className="w-4 h-4 text-cyan-400" />
          <span>STEP 1: PREDICT BEFORE EXECUTION</span>
        </div>
        <p className="text-sm font-semibold text-white">
          What will the computer print on screen when this runs?
        </p>

        {/* Prediction Options */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              disabled={isCompleted}
              className={`py-3 px-4 rounded-xl border font-mono text-sm font-bold transition-all ${
                selectedPrediction === opt
                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-glow-cyan scale-102'
                  : 'bg-lab-900 border-white/10 text-slate-300 hover:border-cyan-500/40'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Step 2: Execution Button */}
        <div className="pt-2">
          <button
            onClick={handleExecute}
            disabled={!selectedPrediction || isCompleted}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
          >
            <Play className="w-4 h-4 fill-lab-950" />
            <span>
              {!selectedPrediction
                ? 'CHOOSE A PREDICTION FIRST'
                : 'EXECUTE IN PYTHON SANDBOX'}
            </span>
          </button>
        </div>
      </div>

      {/* Execution Results Comparison */}
      {hasExecuted && (
        <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            LAB EXECUTION TELEMETRY
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-xl bg-lab-900 border border-white/10">
              <span className="block text-[11px] text-slate-400 font-mono mb-1">Your Prediction</span>
              <span className="text-xl font-bold font-mono text-cyan-300">
                {selectedPrediction}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-lab-900 border border-white/10">
              <span className="block text-[11px] text-slate-400 font-mono mb-1">Actual Python Output</span>
              <span className="text-xl font-bold font-mono text-emerald-400">
                {actualOutput}
              </span>
            </div>
          </div>

          {/* Socratic Feedback */}
          {selectedPrediction === expectedOutput ? (
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2 shadow-glow-emerald">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Phenomenal mental tracing! You predicted 7, and Python output 7. You just executed Python in your mind before the machine did.
              </span>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Let's reason through this together:</p>
                <p>{reasoningFeedback}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
