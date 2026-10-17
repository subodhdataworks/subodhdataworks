import React, { useState } from 'react';
import { X, Play, RotateCcw, Terminal, Code2, Sparkles, Shield, Cpu } from 'lucide-react';
import { SafePythonSandbox, PythonExecutionResult } from '../../services/pythonSandbox';
import { AnalyticsService } from '../../services/analytics';

interface PythonPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STARTER_SNIPPETS = [
  {
    name: '1. Hello 2050',
    code: '# Welcome to your 2050 Sandbox\nname = "Future Explorer"\nprint("Welcome to 2050,", name)\nprint("System Status: Online")',
  },
  {
    name: '2. Variable Math',
    code: '# Memory Containers\nenergy = 50\nenergy = energy + 25\nboost = 15\ntotal = energy + boost\nprint("Current Energy:", total)',
  },
  {
    name: '3. Data Output',
    code: '# Outputting Multiple Data Points\nspeed = 120\nrover = "Curiosity-2"\nprint("Rover:", rover)\nprint("Velocity km/h:", speed)',
  },
];

export const PythonPlaygroundModal: React.FC<PythonPlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(STARTER_SNIPPETS[0].code);
  const [result, setResult] = useState<PythonExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  if (!isOpen) return null;

  const handleRun = () => {
    setIsRunning(true);
    AnalyticsService.log('code_run', { context: 'playground', codeLength: code.length });

    setTimeout(() => {
      const res = SafePythonSandbox.run(code);
      setResult(res);
      setIsRunning(false);
    }, 150);
  };

  const handleClear = () => {
    setCode('');
    setResult(null);
  };

  const loadSnippet = (snippetCode: string) => {
    setCode(snippetCode);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lab-950/85 backdrop-blur-md overflow-y-auto">
      <div className="max-w-4xl w-full p-6 sm:p-8 rounded-2xl glass-panel border border-emerald-500/40 text-left relative shadow-2xl space-y-5 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-mono flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>SANDBOXED EXECUTION ENVIRONMENT</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                TIMEOUT: 2000MS • PROCESS ISOLATED
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400" />
              <span>Safe Python Playground</span>
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Experiment freely. Code is executed inside an isolated, safe browser sandbox with zero network vulnerabilities.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-lab-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Starter Snippets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Templates:</span>
          {STARTER_SNIPPETS.map((snip, i) => (
            <button
              key={i}
              onClick={() => loadSnippet(snip.code)}
              className="px-2.5 py-1 rounded-lg bg-lab-900 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-all"
            >
              {snip.name}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="px-2.5 py-1 rounded-lg bg-lab-900 border border-white/10 hover:border-rose-400 text-xs font-mono text-slate-400 hover:text-rose-300 ml-auto transition-all"
          >
            Clear Code
          </button>
        </div>

        {/* Code Editor Deck */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-lab-900 shadow-xl">
          <div className="px-4 py-2 bg-lab-950/90 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>playground.py</span>
            </div>
            <span className="text-[10px] text-emerald-400">CLIENT-SIDE PYTHON 3</span>
          </div>

          <textarea
            rows={8}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="# Write or paste beginner Python here..."
            className="w-full p-4 bg-lab-950 text-slate-100 font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-emerald-400 resize-y"
          />
        </div>

        {/* Run Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleRun}
            disabled={isRunning || !code.trim()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-xs font-mono flex items-center gap-2 shadow-glow-emerald transition-all"
          >
            <Play className="w-4 h-4 fill-lab-950" />
            <span>{isRunning ? 'RUNNING IN SANDBOX...' : 'RUN PYTHON SCRIPT'}</span>
          </button>

          {result && (
            <span className="text-[11px] font-mono text-slate-400">
              Steps: {result.executionSteps} • Active Variables: {Object.keys(result.variables).length}
            </span>
          )}
        </div>

        {/* Terminal Output & Variable Inspector */}
        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Output */}
            <div className="md:col-span-2 p-4 rounded-xl bg-lab-950 border border-white/10 font-mono text-xs space-y-1.5 shadow-inner">
              <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-white/5">
                <span>STDOUT CONSOLE</span>
                {result.success ? (
                  <span className="text-emerald-400 font-bold">✓ EXIT CODE 0</span>
                ) : (
                  <span className="text-rose-400 font-bold">✕ SYNTAX / RUNTIME ERROR</span>
                )}
              </div>

              {result.success ? (
                result.output.length > 0 ? (
                  result.output.map((line, i) => (
                    <div key={i} className="text-emerald-300 font-medium">
                      &gt; {line}
                    </div>
                  ))
                ) : (
                  <div className="text-slate-500 italic">&gt; (Program executed with no printed output)</div>
                )
              ) : (
                <div className="text-rose-300 font-medium">
                  {result.error}
                </div>
              )}
            </div>

            {/* Variable Memory State Inspector */}
            <div className="p-4 rounded-xl bg-lab-950 border border-white/10 font-mono text-xs space-y-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block border-b border-white/5 pb-1">
                VARIABLE STATE
              </span>
              {Object.keys(result.variables).length === 0 ? (
                <span className="text-slate-600 italic block text-[11px]">No active variables</span>
              ) : (
                <div className="space-y-1">
                  {Object.entries(result.variables).map(([k, v]) => (
                    <div key={k} className="flex justify-between p-1.5 rounded bg-lab-900 border border-white/5">
                      <span className="text-purple-300">{k}</span>
                      <span className="text-cyan-300">{JSON.stringify(v)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
