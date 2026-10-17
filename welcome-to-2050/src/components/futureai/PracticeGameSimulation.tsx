import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Terminal, 
  Bot, 
  Trophy, 
  Flame, 
  Lightbulb,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface PracticeGameSimulationProps {
  currentLanguage: SupportedLanguage;
  onMissionComplete?: () => void;
}

export const PracticeGameSimulation: React.FC<PracticeGameSimulationProps> = ({
  currentLanguage,
  onMissionComplete,
}) => {
  const initialCode = `# Mission 01: Fix the Python variable error
# Target: Compute the total transaction value
subtotal = "150"  # <-- Bug: subtotal is defined as a string!
tax_rate = 0.18

# Computing total with tax
total = subtotal + (subtotal * tax_rate)
print(f"Total Amount: ₹{total}")`;

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [userXp, setUserXp] = useState<number>(450);

  const handleRunCode = () => {
    // Check if subtotal is still a string
    if (code.includes('"150"') || code.includes("'150'")) {
      setHasError(true);
      setIsSuccess(false);
      setOutput(
        'TypeError: can\'t multiply sequence by non-int of type \'float\' on line 7\n--> subtotal is a str, cannot multiply text by float 0.18'
      );
    } else if (code.includes('150')) {
      // Success!
      setHasError(false);
      setIsSuccess(true);
      setOutput('✅ Execution Verified:\nTotal Amount: ₹177.0\n[TEST PASSED] Variable casting & float arithmetic valid.');
      setUserXp((prev) => prev + 100);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {}

      if (onMissionComplete) onMissionComplete();
    } else {
      setHasError(true);
      setIsSuccess(false);
      setOutput('Error: subtotal variable missing or value not matching 150.');
    }
  };

  const handleAutoFix = () => {
    const fixed = `# Mission 01: Fix the Python variable error
# Target: Compute the total transaction value
subtotal = 150  # Fixed: Integer literal
tax_rate = 0.18

# Computing total with tax
total = subtotal + (subtotal * tax_rate)
print(f"Total Amount: ₹{total}")`;
    setCode(fixed);
    setShowHint(false);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setIsSuccess(false);
    setHasError(false);
    setShowHint(false);
  };

  return (
    <section id="practice-game" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-emerald-600" />
            <span>2050 PRACTICE ARENA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Learn by Doing.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Mastery is forged in the sandbox. Step into our browser-based 2050 simulation workspace and debug authentic industry code missions.
          </p>
        </div>

        {/* Main Coding Simulation Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Mission Card, Stats, & PowerGreen AI Mentor */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Mission Objective Card */}
            <div className="p-6 rounded-3xl light-glass-card border border-slate-200/90 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                  MISSION 01
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>3 Day Streak</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Fix the Python variable error.
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  In this e-commerce pipeline, an input variable was stored as a string instead of a numeric type, causing a fatal crash during tax arithmetic.
                </p>
              </div>

              {/* Progress & XP Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600">Level 02 Data Apprentice</span>
                  <span className="text-sky-700 font-mono">{userXp} / 550 XP</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (userXp / 550) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* AI Mentor Advice Bubble */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-sky-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">PowerGreen AI Mentor</div>
                  <div className="text-[10px] text-slate-500">Live Mission Monitor</div>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed italic bg-white p-3 rounded-2xl border border-slate-200/80">
                &quot;Look at line 3. Python treats numbers inside quotation marks as characters, not numbers. Removing the quotes will allow arithmetic operations.&quot;
              </p>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                </button>

                <button
                  onClick={handleAutoFix}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
                >
                  Auto-Fix Code
                </button>
              </div>

              {showHint && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                  Change <code className="bg-amber-100 px-1 py-0.5 rounded">&quot;150&quot;</code> to <code className="bg-amber-100 px-1 py-0.5 rounded">150</code>.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Code Editor & Console Output */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Editor Top Bar */}
            <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 ml-3 px-2.5 py-0.5 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300">
                  <Terminal className="w-3 h-3 text-sky-400" />
                  <span>mission_01_var.py</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Reset Code"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleRunCode}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-sky-500/20 transition-all flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Code</span>
                </button>
              </div>
            </div>

            {/* Editable Python Code Area */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows={8}
                className="w-full bg-transparent text-slate-100 font-mono text-xs sm:text-sm focus:outline-none resize-none selection:bg-sky-500/30 selection:text-sky-200"
                spellCheck={false}
              />
            </div>

            {/* Interactive Terminal Execution Console */}
            <div className="p-5 bg-slate-950 border-t border-slate-800 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800/60">
                <span>SIMULATION TERMINAL OUTPUT:</span>
                <span>Python 3.12 2050 Runtime</span>
              </div>

              {output ? (
                <div
                  className={`p-3 rounded-xl whitespace-pre-line leading-relaxed ${
                    isSuccess
                      ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-950/40 text-rose-300 border border-rose-500/40'
                  }`}
                >
                  {output}
                </div>
              ) : (
                <div className="text-slate-500 italic py-2">
                  Click &quot;Run Code&quot; to test your syntax in the live simulation sandbox.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
