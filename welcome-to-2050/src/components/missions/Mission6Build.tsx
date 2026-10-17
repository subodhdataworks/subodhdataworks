import React, { useState } from 'react';
import { Blocks, Play, CheckCircle2, RotateCcw, Sparkles, Terminal, Code2 } from 'lucide-react';
import { Mission } from '../../types';
import { SafePythonSandbox } from '../../services/pythonSandbox';
import { AnalyticsService } from '../../services/analytics';
import confetti from 'canvas-confetti';

interface Mission6BuildProps {
  mission: Mission;
  onSuccess: () => void;
  onMistake: (desc: string) => void;
}

interface BlockItem {
  id: string;
  label: string;
  category: 'variable' | 'operator' | 'text' | 'statement';
}

export const Mission6Build: React.FC<Mission6BuildProps> = ({ mission, onSuccess, onMistake }) => {
  const availableBlocks: BlockItem[] = [
    { id: 'b_var', label: 'name', category: 'variable' },
    { id: 'b_op', label: '=', category: 'operator' },
    { id: 'b_text', label: '"Alex"', category: 'text' },
    { id: 'b_print', label: 'print("Hello", name)', category: 'statement' },
  ];

  const [line1Blocks, setLine1Blocks] = useState<BlockItem[]>([]);
  const [line2Blocks, setLine2Blocks] = useState<BlockItem[]>([]);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const addBlockToLine = (block: BlockItem, lineNum: 1 | 2) => {
    if (isCompleted) return;
    setErrorMessage(null);
    if (lineNum === 1) {
      if (line1Blocks.some((b) => b.id === block.id)) return;
      setLine1Blocks([...line1Blocks, block]);
    } else {
      if (line2Blocks.some((b) => b.id === block.id)) return;
      setLine2Blocks([...line2Blocks, block]);
    }
  };

  const removeBlock = (lineNum: 1 | 2, index: number) => {
    if (isCompleted) return;
    setErrorMessage(null);
    if (lineNum === 1) {
      const updated = [...line1Blocks];
      updated.splice(index, 1);
      setLine1Blocks(updated);
    } else {
      const updated = [...line2Blocks];
      updated.splice(index, 1);
      setLine2Blocks(updated);
    }
  };

  const handleReset = () => {
    if (isCompleted) return;
    setLine1Blocks([]);
    setLine2Blocks([]);
    setTerminalOutput(null);
    setErrorMessage(null);
  };

  // Compile constructed lines to Python code
  const getCompiledCode = () => {
    const l1 = line1Blocks.map((b) => b.label).join(' ');
    const l2 = line2Blocks.map((b) => b.label).join(' ');
    return `${l1}\n${l2}`.trim();
  };

  const handleRun = () => {
    const compiled = getCompiledCode();
    if (!compiled) {
      setErrorMessage('Add blocks to your lines before executing.');
      return;
    }

    AnalyticsService.log('code_run', { missionId: mission.id, code: compiled });

    const result = SafePythonSandbox.run(compiled);

    if (result.success) {
      const output = result.output.join(' ');
      setTerminalOutput(output);

      // Check if it achieves the objective: introducing Alex
      if (output.includes('Hello Alex')) {
        setIsCompleted(true);
        AnalyticsService.log('answer_correct', { missionId: mission.id });
        confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
        setTimeout(() => {
          onSuccess();
        }, 1800);
      } else {
        setErrorMessage('Code ran, but did not produce "Hello Alex". Check block arrangement.');
        onMistake('Constructed code produced unexpected greeting');
      }
    } else {
      setErrorMessage(result.error || 'Syntax error in constructed program.');
      onMistake('Constructed code had syntax error');
      AnalyticsService.log('answer_incorrect', { missionId: mission.id, error: result.error });
    }
  };

  const isBlockUsed = (id: string) => {
    return line1Blocks.some((b) => b.id === id) || line2Blocks.some((b) => b.id === id);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Objective Brief */}
      <div className="p-4 rounded-xl bg-lab-900 border border-white/10 text-xs text-slate-300">
        <p className="font-semibold text-cyan-300 mb-1">Mission Objective:</p>
        <p>
          Assemble blocks to make the computer introduce itself with: <code className="text-emerald-300 font-mono">Hello Alex</code>.
          Store the name in a variable on Line 1, then print it on Line 2!
        </p>
      </div>

      {/* Available Blocks Pool */}
      <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>AVAILABLE SYNTAX BLOCKS (CLICK TO ADD)</span>
          <button
            onClick={handleReset}
            disabled={isCompleted || (line1Blocks.length === 0 && line2Blocks.length === 0)}
            className="text-slate-400 hover:text-rose-400 disabled:opacity-30 text-[11px] flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {availableBlocks.map((block) => {
            const used = isBlockUsed(block.id);
            let color = 'bg-cyan-950/70 border-cyan-500/40 text-cyan-200';
            if (block.category === 'operator') color = 'bg-slate-900 border-white/20 text-slate-200';
            if (block.category === 'text') color = 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300';
            if (block.category === 'statement') color = 'bg-purple-950/70 border-purple-500/40 text-purple-300';

            return (
              <div key={block.id} className="flex items-center gap-1">
                <button
                  onClick={() => addBlockToLine(block, 1)}
                  disabled={used || isCompleted}
                  className={`px-3 py-2 rounded-lg border font-mono text-xs font-semibold shadow-sm transition-all ${color} ${
                    used ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                  }`}
                  title="Add to Line 1"
                >
                  {block.label}
                  <span className="ml-1.5 text-[9px] opacity-60 font-sans">+L1</span>
                </button>
                <button
                  onClick={() => addBlockToLine(block, 2)}
                  disabled={used || isCompleted}
                  className={`px-2 py-2 rounded-lg border font-mono text-[10px] text-slate-400 border-white/10 hover:border-white/30 transition-all ${
                    used ? 'opacity-30 cursor-not-allowed' : ''
                  }`}
                  title="Add to Line 2"
                >
                  +L2
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Assembly Canvas */}
      <div className="rounded-xl overflow-hidden border border-cyan-500/30 bg-lab-900 shadow-xl">
        <div className="px-4 py-2 bg-lab-950/90 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>intro_program.py</span>
          </div>
          <span className="text-[10px] text-emerald-400">LIVE BUILDER</span>
        </div>

        <div className="p-4 space-y-3 font-mono text-xs">
          {/* Line 1 Slot */}
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-lab-950 border border-white/5 min-h-[46px]">
            <span className="text-slate-600 select-none w-4">1</span>
            <div className="flex flex-wrap items-center gap-2 flex-1">
              {line1Blocks.length === 0 ? (
                <span className="text-slate-600 italic">Click +L1 on blocks to build Line 1 (e.g. name = "Alex")</span>
              ) : (
                line1Blocks.map((b, idx) => (
                  <span
                    key={idx}
                    onClick={() => removeBlock(1, idx)}
                    className="px-2.5 py-1 rounded bg-lab-800 border border-white/10 text-cyan-200 cursor-pointer hover:border-rose-400 hover:text-rose-300 transition-all flex items-center gap-1 shadow-sm"
                    title="Click to remove block"
                  >
                    {b.label}
                    <span className="text-[9px] text-slate-500">×</span>
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Line 2 Slot */}
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-lab-950 border border-white/5 min-h-[46px]">
            <span className="text-slate-600 select-none w-4">2</span>
            <div className="flex flex-wrap items-center gap-2 flex-1">
              {line2Blocks.length === 0 ? (
                <span className="text-slate-600 italic">Click +L2 on blocks to build Line 2 (e.g. print("Hello", name))</span>
              ) : (
                line2Blocks.map((b, idx) => (
                  <span
                    key={idx}
                    onClick={() => removeBlock(2, idx)}
                    className="px-2.5 py-1 rounded bg-lab-800 border border-white/10 text-purple-200 cursor-pointer hover:border-rose-400 hover:text-rose-300 transition-all flex items-center gap-1 shadow-sm"
                    title="Click to remove block"
                  >
                    {b.label}
                    <span className="text-[9px] text-slate-500">×</span>
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Execute Program */}
      <button
        onClick={handleRun}
        disabled={isCompleted || (line1Blocks.length === 0 && line2Blocks.length === 0)}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 disabled:opacity-40 text-lab-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
      >
        <Play className="w-4 h-4 fill-lab-950" />
        <span>EXECUTE CONSTRUCTED PROGRAM</span>
      </button>

      {/* Output / Feedback */}
      {terminalOutput && (
        <div className="p-4 rounded-xl bg-lab-950 border border-emerald-500/40 font-mono text-xs space-y-1 shadow-glow-emerald">
          <div className="text-[10px] text-slate-500 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span>TERMINAL OUTPUT</span>
          </div>
          <div className="text-emerald-300 text-sm font-bold pl-2">&gt; {terminalOutput}</div>
          <div className="pt-2 text-[11px] text-slate-400 font-sans flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Success! The computer has greeted Alex using your custom program.</span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500 text-rose-200 text-xs">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
