import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  Database,
  Layers,
  Sparkles,
  GitBranch,
  Repeat,
  Monitor,
  Cpu,
} from 'lucide-react';
import { ExecutionTraceStep } from './pythonTraceEngine';

interface PythonExecutionVisualizerProps {
  step: ExecutionTraceStep;
}

export const PythonExecutionVisualizer: React.FC<PythonExecutionVisualizerProps> = ({ step }) => {
  const { diagram, opType } = step;

  return (
    <div className="w-full rounded-2xl bg-white border border-purple-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      {/* Header matching reference mockup */}
      <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-purple-50">
        <Monitor className="w-4 h-4 text-purple-700" />
        <span className="text-sm font-black text-slate-900 tracking-tight">
          Execution Visualization (Line {step.lineNumber})
        </span>
      </div>

      {/* Main Pipeline Canvas */}
      <div className="w-full py-2 px-1 flex items-center justify-center">
        {/* 1. INPUT OPERATION (Matching Sum of Two Numbers Line 1 & Line 2) */}
        {opType === 'input' && (
          <div className="w-full flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            {/* Box 1: User Input */}
            <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center text-lg shadow-xs shrink-0">
                ⌨️
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800">User Input</span>
                <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-mono text-xs font-bold shadow-2xs mt-0.5">
                  {step.lineContent.includes('first')
                    ? `Enter first number: ${diagram.inputValue || '10'}`
                    : step.lineContent.includes('second')
                    ? `Enter second number: ${diagram.inputValue || '20'}`
                    : `Input: ${diagram.inputValue || '10'}`}
                </div>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            {/* Box 2: Type Casting (int()) */}
            <div className="flex flex-col items-center">
              <div className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-mono text-xs font-black shadow-xs tracking-wider">
                {diagram.castType || 'int'}()
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-700 mt-1">
                "{diagram.inputValue || '10'}" → {diagram.computedValue || '10'}
              </span>
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            {/* Box 3: Target Variable Memory */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 mb-1">
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                <span>Memory ({diagram.targetVar || 'a'})</span>
              </div>
              <div className="px-5 py-2 rounded-xl bg-[#fef9c3] border border-amber-300 text-slate-900 font-mono text-xs font-black shadow-xs flex items-center gap-4">
                <span className="font-bold text-slate-800 text-sm">{diagram.targetVar || 'a'}</span>
                <span className="text-amber-400">|</span>
                <span className="text-purple-900 font-black text-sm">{diagram.computedValue || '10'}</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. ARITHMETIC / EXPRESSION EVALUATION (total = a + b) */}
        {opType === 'arithmetic' && (
          <div className="w-full flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            {/* Operands retrieved from memory */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              {(diagram.operands && diagram.operands.length > 0 ? diagram.operands : [
                { name: 'a', value: 10 },
                { name: 'b', value: 20 },
              ]).map((op, i, arr) => (
                <React.Fragment key={op.name}>
                  <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs font-mono text-xs">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{op.name}</span>
                    <span className="font-black text-slate-900 text-sm">{op.value}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="font-mono text-purple-700 font-black text-base px-1">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            {/* Evaluated Value */}
            <div className="flex flex-col items-center">
              <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-mono text-xs font-black shadow-xs">
                {diagram.expression || 'a + b'} = {diagram.computedValue || 30}
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-600 mt-1">
                Calculated Sum
              </span>
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            {/* Stored in Memory */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 mb-1">
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                <span>Memory ({diagram.targetVar || 'total'})</span>
              </div>
              <div className="px-5 py-2 rounded-xl bg-[#fef9c3] border border-amber-300 text-slate-900 font-mono text-xs font-black shadow-xs flex items-center gap-4">
                <span className="font-bold text-slate-800 text-sm">{diagram.targetVar || 'total'}</span>
                <span className="text-amber-400">|</span>
                <span className="text-purple-900 font-black text-sm">{diagram.computedValue || 30}</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. PRINT / CONSOLE STREAM */}
        {opType === 'print' && (
          <div className="w-full flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-sm font-black font-mono shadow-xs">
                🖨️
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800">print() Statement</span>
                <span className="font-mono text-xs text-purple-900 font-bold">
                  {step.lineContent.trim()}
                </span>
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-emerald-700 uppercase mb-1">Sent to Console</span>
              <div className="px-5 py-2 rounded-xl bg-[#090d16] text-emerald-400 font-mono text-xs font-bold shadow-sm border border-slate-800 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>{diagram.printText || 'Sum is: 30'}</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. CONDITION (if/else) */}
        {opType === 'condition' && (
          <div className="w-full flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="px-4 py-2.5 rounded-xl bg-amber-50 border-2 border-amber-300 flex items-center gap-2 font-mono text-xs font-bold text-amber-950 shadow-2xs">
              <GitBranch className="w-4 h-4 text-amber-600" />
              <span>Evaluate: {diagram.conditionExpr}</span>
              <span
                className={`ml-1 px-2.5 py-0.5 rounded text-[11px] font-black ${
                  diagram.conditionResult ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                }`}
              >
                {diagram.conditionResult ? 'TRUE' : 'FALSE'}
              </span>
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            <div className="flex items-center gap-3">
              <div
                className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold ${
                  diagram.conditionResult
                    ? 'bg-purple-700 text-white border-purple-700 shadow-xs'
                    : 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
                }`}
              >
                ✔ if-block (EXECUTED)
              </div>
              <div
                className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold ${
                  !diagram.conditionResult
                    ? 'bg-purple-700 text-white border-purple-700 shadow-xs'
                    : 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
                }`}
              >
                ✖ else-block (SKIPPED)
              </div>
            </div>
          </div>
        )}

        {/* 5. LOOP (for/while) */}
        {(opType === 'loop_header' || opType === 'loop_body') && (
          <div className="w-full flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2 font-mono text-xs px-3 py-2 rounded-xl bg-purple-50 border border-purple-200">
              <Repeat className="w-4 h-4 text-purple-700" />
              <span className="font-bold text-purple-900">Iteration:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-700 text-white font-black text-xs">
                {diagram.iteration || 1} of {diagram.totalIterations || 3}
              </span>
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
              {(diagram.sequence || [1, 2, 3]).map((sVal) => {
                const isActive = sVal === diagram.currentValue;
                return (
                  <div
                    key={sVal}
                    className={`px-3 py-1 rounded-lg font-mono text-xs font-bold ${
                      isActive
                        ? 'bg-purple-700 text-white shadow-xs ring-2 ring-purple-300'
                        : sVal < (diagram.currentValue || 0)
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    {sVal}
                  </div>
                );
              })}
            </div>

            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />

            <div className="px-4 py-2 rounded-xl bg-[#fef9c3] border border-amber-300 text-slate-900 font-mono text-xs font-bold">
              {diagram.loopVar || 'i'} = <strong className="text-purple-900">{diagram.currentValue}</strong>
            </div>
          </div>
        )}

        {/* 6. GENERAL / ASSIGNMENT / FALLBACK */}
        {(opType === 'assignment' || opType === 'general' || opType === 'function_def' || opType === 'function_call' || opType === 'return' || opType === 'recursion' || opType === 'list_op' || opType === 'dict_op') && (
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs font-bold text-slate-800">
              Expression: {diagram.expression || step.lineContent.trim()}
            </div>
            <ArrowRight className="w-5 h-5 text-purple-600 shrink-0 stroke-[2.5]" />
            <div className="px-5 py-2.5 rounded-xl bg-[#fef9c3] border border-amber-300 text-slate-900 font-mono text-xs font-black shadow-xs flex items-center gap-3">
              <span>{diagram.targetVar || 'result'}</span>
              <span className="text-amber-400">|</span>
              <span className="text-purple-900">{diagram.computedValue !== undefined ? String(diagram.computedValue) : 'executed'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
