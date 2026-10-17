import React, { useState } from 'react';
import { Search, ShieldAlert, CheckCircle2, AlertTriangle, Lightbulb, Play, Terminal, Sparkles } from 'lucide-react';
import { Mission } from '../../types';
import { SafePythonSandbox } from '../../services/pythonSandbox';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission5BugDetectiveProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

export const Mission5BugDetective: React.FC<Mission5BugDetectiveProps> = ({ mission, onSuccess, onMistake }) => {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [lineInvestigated, setLineInvestigated] = useState(false);
  const [activeHintLevel, setActiveHintLevel] = useState<number>(0);
  const [repaired, setRepaired] = useState(false);
  const [runResult, setRunResult] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const hints = [
    'Hint 1: What symbol starts the print instruction?',
    'Hint 2: Look at the beginning and end of the instruction.',
    'Hint 3: Does the instruction close correctly with a matching ")"?',
  ];

  const handleSelectLine = (lineNum: number) => {
    if (repaired) return;
    setSelectedLine(lineNum);
    setLineInvestigated(true);

    if (lineNum === 2) {
      AnalyticsService.log('bug_found', { line: 2, missionId: mission.id });
    } else {
      AnalyticsService.log('answer_incorrect', { line: lineNum, missionId: mission.id });
      onMistake('Selected Line 1 instead of Line 2 in Bug Detective');
    }
  };

  const handleUnlockHint = () => {
    if (activeHintLevel < 3) {
      const nextLevel = activeHintLevel + 1;
      setActiveHintLevel(nextLevel);
      AnalyticsService.log('hint_requested', { hintLevel: nextLevel, missionId: mission.id });
    }
  };

  const handleApplyFix = () => {
    setRepaired(true);
    const fixedCode = 'name = "Rahul"\nprint(name)';
    const res = SafePythonSandbox.run(fixedCode);
    setRunResult(res.output[0] || 'Rahul');
    setIsCompleted(true);
    AnalyticsService.log('answer_correct', { missionId: mission.id });
    confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
    setTimeout(() => {
      onSuccess();
    }, 2200);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Alert Header */}
      <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 animate-pulse" />
        <div>
          <h4 className="text-sm font-bold text-rose-200">
            🚨 Something is wrong in the laboratory code!
          </h4>
          <p className="text-xs text-rose-300/80 mt-0.5">
            The Python interpreter refused to run this script. Which line should the detective investigate?
          </p>
        </div>
      </div>

      {/* Code Inspector with clickable lines */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-lab-900 shadow-xl">
        <div className="px-4 py-2 bg-lab-950/90 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>buggy_scanner.py (Click a line to investigate)</span>
          </div>
          <span className="text-[10px] text-rose-400 font-bold">SYNTAX ALERT</span>
        </div>

        <div className="p-2 space-y-1 font-mono text-sm">
          {/* Line 1 */}
          <div
            onClick={() => handleSelectLine(1)}
            className={`p-2.5 rounded-lg flex items-center gap-4 cursor-pointer transition-all ${
              selectedLine === 1
                ? 'bg-amber-950/50 border border-amber-500/50'
                : 'hover:bg-lab-800/80 border border-transparent'
            }`}
          >
            <span className="text-slate-600 select-none w-4 text-right">1</span>
            <span className="text-purple-300">name</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-300">"Rahul"</span>
            {selectedLine === 1 && (
              <span className="text-[10px] font-sans text-amber-300 ml-auto">
                Clean: String is closed with quotes
              </span>
            )}
          </div>

          {/* Line 2 */}
          <div
            onClick={() => handleSelectLine(2)}
            className={`p-2.5 rounded-lg flex items-center gap-4 cursor-pointer transition-all ${
              selectedLine === 2
                ? 'bg-cyan-950/70 border border-cyan-400 shadow-glow-cyan'
                : 'hover:bg-lab-800/80 border border-transparent'
            }`}
          >
            <span className="text-slate-600 select-none w-4 text-right">2</span>
            {repaired ? (
              <div className="flex items-center gap-1 text-emerald-300 animate-fadeIn">
                <span className="text-cyan-300">print</span>
                <span className="text-slate-400">(</span>
                <span className="text-purple-300">name</span>
                <span className="text-emerald-400 font-bold">)</span>
                <span className="text-[10px] font-sans text-emerald-400 ml-3">
                  ✓ Parenthesis closed!
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <span className="text-cyan-300">print</span>
                <span className="text-slate-400">(</span>
                <span className="text-purple-300">name</span>
                <span className="inline-block w-2 h-4 bg-rose-500/60 animate-pulse ml-0.5" />
                {selectedLine === 2 && (
                  <span className="text-[10px] font-sans text-cyan-300 ml-auto">
                    Investigating Line 2...
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Investigation feedback & Hint Progression */}
      {lineInvestigated && (
        <div className="space-y-4">
          {selectedLine === 1 && (
            <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">Line 1 is actually healthy:</p>
                <p>
                  Line 1 assigns the text "Rahul" to the variable `name`. The quotes match. Look at Line 2!
                </p>
              </div>
            </div>
          )}

          {selectedLine === 2 && (
            <div className="p-5 rounded-2xl glass-panel border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono font-semibold">
                  <Lightbulb className="w-4 h-4 text-cyan-400" />
                  <span>PROGRESSIVE DETECTIVE HINTS ({activeHintLevel}/3)</span>
                </div>

                {activeHintLevel < 3 && !repaired && (
                  <button
                    onClick={handleUnlockHint}
                    className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs hover:bg-cyan-900/60 font-mono transition-all"
                  >
                    Reveal Next Hint ({activeHintLevel + 1}/3)
                  </button>
                )}
              </div>

              {/* Revealed Hints */}
              <div className="space-y-2">
                {hints.slice(0, activeHintLevel).map((h, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-lab-900 border border-cyan-500/20 text-xs text-cyan-100 flex items-start gap-2 animate-fadeIn"
                  >
                    <span className="text-cyan-400 font-bold font-mono">[{i + 1}]</span>
                    <span>{h}</span>
                  </div>
                ))}
                {activeHintLevel === 0 && (
                  <p className="text-xs text-slate-400 italic">
                    Stuck? Click "Reveal Next Hint" to receive gentle guided clues without spoiling the answer.
                  </p>
                )}
              </div>

              {/* Repair Action */}
              {!repaired ? (
                <div className="pt-2 border-t border-white/5">
                  <button
                    onClick={handleApplyFix}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
                  >
                    <Play className="w-4 h-4 fill-lab-950" />
                    <span>CLOSE PARENTHESIS AND RUN REPAIRED CODE</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Bug Solved! Python executed smoothly and printed: <strong className="font-mono text-white">"{runResult}"</strong>
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-lab-900 text-xs text-slate-300 leading-relaxed border border-white/5">
                    <p className="font-semibold text-cyan-300 mb-1">Detective Insight:</p>
                    <p>
                      In Python, instructions like `print()` are function calls. Every opening bracket `(` MUST have an accompanying closing bracket `)`. When you forgot to close it, Python was left waiting forever for the instruction to end!
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
