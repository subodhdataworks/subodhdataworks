import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Box,
  Layers,
  Cpu,
  GitBranch,
  Repeat,
  Binary,
  Hash,
  Database,
  Terminal,
  CheckCircle2,
  ListOrdered,
} from 'lucide-react';
import type { TeachingStep, QuestionV5Config } from './smartClassroomV5Engine';

export interface DynamicVisualWorkspaceProps {
  currentStep: TeachingStep;
  currentStepIndex: number;
  totalSteps: number;
  topicId: string;
  questionConfig: QuestionV5Config;
  isExplanationStarted: boolean;
}

export const DynamicVisualWorkspace: React.FC<DynamicVisualWorkspaceProps> = ({
  currentStep,
  currentStepIndex,
  totalSteps,
  topicId,
  questionConfig,
  isExplanationStarted,
}) => {
  const op = currentStep.operatorDetails;
  const conceptKey = currentStep.conceptKey || '';
  const token = currentStep.highlightToken || '';

  // Determine Concept Domain
  const isOOP = Boolean(op?.oopInfo || topicId.includes('oop'));
  const isProblemSolving = Boolean(op?.problemSolvingInfo || topicId.includes('problem_solving') || topicId.includes('dsa'));
  const isSet = Boolean(op?.setMembers || op?.setOperationInfo || topicId.includes('set'));
  const isDict = Boolean(op?.dictEntries || topicId.includes('dict'));
  const isIndexable = Boolean(op?.charMap || topicId.includes('string') || topicId.includes('list') || topicId.includes('tuple'));
  const isCondition = Boolean(op?.conditionExpression || op?.selectedBranch || topicId.includes('conditional'));
  const isLoop = Boolean(topicId.includes('loop'));
  const isArithmetic = Boolean(op?.evaluatedOperands || op?.intermediateSteps || topicId.includes('operator'));
  const isPrintOrOutput = conceptKey === 'print' || conceptKey === 'brackets' || conceptKey === 'string' || conceptKey === 'output' || topicId.includes('basics_01') || topicId.includes('basics_00');

  return (
    <div className="rounded-2xl bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/60 border border-purple-200/80 p-3 flex flex-col gap-2.5 transition-all duration-300 shadow-2xs">
      {/* ── Top Workspace Header: Concept & Active Source Range ── */}
      <div className="flex items-center justify-between gap-2 border-b border-purple-100/90 pb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-purple-600/10 text-purple-700 flex items-center justify-center shrink-0">
            {isOOP ? <Layers className="w-3 h-3" /> :
             isProblemSolving ? <Cpu className="w-3 h-3" /> :
             isCondition ? <GitBranch className="w-3 h-3" /> :
             isLoop ? <Repeat className="w-3 h-3" /> :
             isSet || isDict ? <Hash className="w-3 h-3" /> :
             isIndexable ? <ListOrdered className="w-3 h-3" /> :
             <Code2 className="w-3 h-3" />}
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-purple-950 truncate">
            {op?.technicalConcept || currentStep.title}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {token && (
            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100/80 text-purple-900 border border-purple-200/60">
              {token}
            </span>
          )}
          <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-slate-100 font-mono">
            Line {currentStep.highlightLine || 1}
          </span>
        </div>
      </div>

      {/* ── Dynamic Layout Body: Adapts to Topic & Teaching Step ── */}
      <div className="flex flex-col gap-2 min-h-[92px] justify-center">
        {/* 1. PRINT & STREAMING OUTPUT FLOW (Function ➔ Argument ➔ Stream toward Console) */}
        {isPrintOrOutput && (
          <div className="flex flex-col gap-2 py-1">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-white/90 p-2.5 rounded-xl border border-purple-200/70 shadow-2xs">
              {/* Function Entity */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-300 ${
                  conceptKey === 'print' || currentStepIndex === 0
                    ? 'bg-purple-700 text-white font-black shadow-xs ring-2 ring-purple-300 scale-102'
                    : 'bg-purple-50 text-purple-900 border-purple-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 shrink-0" />
                <span>print</span>
              </div>

              <span className="text-purple-400 font-black">━━▶</span>

              {/* Argument Container (Parentheses & String) */}
              <div
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-300 ${
                  conceptKey === 'brackets' || conceptKey === 'string' || currentStepIndex === 1 || currentStepIndex === 2
                    ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold ring-2 ring-amber-300/80 shadow-xs scale-102'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span className={`font-black ${conceptKey === 'brackets' ? 'text-purple-700 text-sm' : 'text-slate-400'}`}>(</span>
                <span className={`px-1 rounded ${conceptKey === 'string' ? 'bg-amber-200 text-amber-950 font-black' : 'text-slate-800'}`}>
                  "{questionConfig.expectedOutput || 'Hello, World!'}"
                </span>
                <span className={`font-black ${conceptKey === 'brackets' ? 'text-purple-700 text-sm' : 'text-slate-400'}`}>)</span>
              </div>

              <span className="text-purple-400 font-black">━━▶</span>

              {/* Console Destination Target */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-300 ${
                  conceptKey === 'output' || currentStepIndex >= 3
                    ? 'bg-emerald-600 text-white font-black shadow-xs ring-2 ring-emerald-300 scale-102'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Console Output</span>
              </div>
            </div>

            {/* Step-specific annotation */}
            <div className="flex items-center justify-between text-[10.5px] font-mono px-2 text-slate-600">
              <span className="text-purple-800 font-bold">
                {conceptKey === 'print'
                  ? 'Built-in Output Function · Calls Python stdout writer'
                  : conceptKey === 'brackets'
                  ? 'Argument Boundary · Encloses arguments passed to print()'
                  : conceptKey === 'string'
                  ? 'String Literal · Text enclosed within matching quotation marks'
                  : 'Execution Complete · Text streamed directly to Console'}
              </span>
              <span className="text-emerald-700 font-black text-[10px]">
                {currentStep.consoleOutput ? `> ${currentStep.consoleOutput}` : 'Standby'}
              </span>
            </div>
          </div>
        )}

        {/* 2. ARITHMETIC & OPERATORS (Horizontal Calculation Pipeline) */}
        {!isPrintOrOutput && isArithmetic && (
          <div className="flex flex-col gap-1.5">
            {op?.intermediateSteps && op.intermediateSteps.length > 0 ? (
              <div className="flex flex-col gap-1">
                {op.intermediateSteps.map((istep, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-wrap items-center justify-between gap-2 font-mono bg-white px-3 py-2 rounded-xl border border-purple-200/80 shadow-2xs text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900 text-amber-300 font-bold text-xs truncate max-w-[260px]">
                        {istep.expr}
                      </span>
                      {istep.rule && (
                        <span className="text-[10px] text-slate-500 hidden sm:inline truncate max-w-[180px]">
                          ({istep.rule})
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-purple-600 font-black">━━▶</span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-600 text-white font-black text-xs shadow-2xs">
                        ✨ {istep.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-purple-200 font-mono text-xs">
                <span className="text-purple-900 font-bold">Evaluated Expression</span>
                <span className="text-emerald-700 font-black">{currentStep.consoleOutput || 'Result'}</span>
              </div>
            )}
          </div>
        )}

        {/* 3. CONDITIONS & BRANCHING DECISION DIAGRAM */}
        {!isPrintOrOutput && isCondition && (
          <div className="flex flex-col gap-2 bg-white/95 p-2.5 rounded-xl border border-purple-200/80 shadow-2xs font-mono text-xs">
            {op?.conditionExpression && (
              <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
                <span className="text-slate-600 font-bold">Condition Check:</span>
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-black">
                  {op.conditionExpression}
                </span>
                <span className={`px-2 py-0.5 rounded text-white font-black text-[10px] ${op.conditionResult ? 'bg-emerald-600' : 'bg-rose-600'}`}>
                  {op.conditionResult ? 'TRUE ✅' : 'FALSE ❌'}
                </span>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-1.5">
              {op?.selectedBranch && (
                <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-black text-[10px] shadow-2xs">
                  ✅ Executing: {op.selectedBranch}
                </span>
              )}
              {op?.skippedBranches && op.skippedBranches.map((sk, skIdx) => (
                <span key={skIdx} className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500 line-through text-[10px]">
                  ⏭️ Skipped: {sk}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 4. STRINGS, LISTS & TUPLES (Interactive Index Map) */}
        {!isPrintOrOutput && isIndexable && op?.charMap && (
          <div className="flex flex-col gap-1.5 bg-white/95 p-2.5 rounded-xl border border-purple-200/80 shadow-2xs font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between text-[10px] font-black text-purple-900 pb-1 border-b border-purple-100">
              <span>{topicId.includes('list') || topicId.includes('tuple') ? 'Indexed Element Array (+0..+n & -n..-1)' : 'Indexed Character Map (+0..+n & -n..-1)'}</span>
              {op.sliceInfo && (
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 text-[9px] font-bold">
                  [{op.sliceInfo.start}:{op.sliceInfo.stop}:{op.sliceInfo.step}]
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 py-1 overflow-x-auto">
              {op.charMap.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  className={`min-w-[32px] px-1.5 py-1 rounded-lg border text-center font-mono leading-tight transition-all duration-300 ${
                    cell.isSelected
                      ? 'bg-purple-700 text-white border-amber-400 ring-2 ring-amber-300 font-black shadow-md scale-105'
                      : 'bg-slate-50 text-slate-800 border-purple-200'
                  }`}
                >
                  <div className="text-xs font-black">{cell.char}</div>
                  <div className={`text-[9px] ${cell.isSelected ? 'text-amber-200 font-black' : 'text-emerald-700 font-bold'}`}>
                    +{cell.posIdx}
                  </div>
                  <div className={`text-[8.5px] ${cell.isSelected ? 'text-purple-100' : 'text-rose-600 font-semibold'}`}>
                    {cell.negIdx}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. SETS (Unique Elements & Venn Operations) */}
        {!isPrintOrOutput && isSet && op?.setMembers && (
          <div className="flex flex-col gap-1.5 bg-white/95 p-2.5 rounded-xl border border-purple-200/80 shadow-2xs font-mono text-xs">
            <div className="text-[10px] font-black text-purple-900">
              🔵 Unique Set Elements (Unordered Collection):
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {op.setMembers.length === 0 ? (
                <span className="px-2 py-1 rounded border border-dashed text-slate-400 text-xs">
                  set() — Empty Set
                </span>
              ) : (
                op.setMembers.map((m, mIdx) => (
                  <span
                    key={mIdx}
                    className={`px-3 py-1 rounded-full border text-xs font-black transition-all ${
                      m.status === 'added'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs scale-105'
                        : m.status === 'removed'
                        ? 'bg-rose-100 text-rose-800 border-rose-300 line-through'
                        : 'bg-purple-100 text-purple-950 border-purple-300'
                    }`}
                  >
                    {m.value}
                  </span>
                ))
              )}
            </div>
          </div>
        )}

        {/* 6. DICTIONARIES (Key ➔ Value Mapping Cards) */}
        {!isPrintOrOutput && isDict && op?.dictEntries && (
          <div className="flex flex-col gap-1.5 bg-white/95 p-2.5 rounded-xl border border-purple-200/80 shadow-2xs font-mono text-xs">
            <div className="text-[10px] font-black text-purple-900">
              🔑 Key ➔ Value Hash Map:
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {op.dictEntries.length === 0 ? (
                <span className="px-2 py-1 rounded border border-dashed text-slate-400 text-xs">
                  {'{}'} — Empty Dictionary
                </span>
              ) : (
                op.dictEntries.map((entry, eIdx) => (
                  <div
                    key={eIdx}
                    className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 text-xs transition-all ${
                      entry.status === 'selected' || entry.status === 'added'
                        ? 'bg-purple-700 text-white border-purple-800 font-black shadow-xs scale-102'
                        : 'bg-purple-50 text-slate-900 border-purple-200'
                    }`}
                  >
                    <span className="font-bold text-amber-300">{entry.key}</span>
                    <span className="opacity-60">➔</span>
                    <span className="font-black text-emerald-300">{entry.value}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* 7. OBJECT-ORIENTED PROGRAMMING (Classes, Instances & self) */}
        {!isPrintOrOutput && isOOP && op?.oopInfo && (
          <div className="flex flex-col gap-2 bg-white/95 p-2.5 rounded-xl border border-purple-200/80 shadow-2xs font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-purple-900 flex items-center gap-1">
                <span>🏛️</span> {op.oopInfo.conceptCategory}
              </span>
              <div className="flex items-center gap-1.5">
                {op.oopInfo.activeClass && (
                  <span className="px-2 py-0.5 rounded bg-purple-700 text-white text-[9px] font-black">
                    Class: {op.oopInfo.activeClass}
                  </span>
                )}
                {op.oopInfo.selfBinding && (
                  <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[9px] font-black">
                    {op.oopInfo.selfBinding}
                  </span>
                )}
              </div>
            </div>

            {op.oopInfo.instancesSnapshot && op.oopInfo.instancesSnapshot.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {op.oopInfo.instancesSnapshot.map((inst, iIdx) => (
                  <div key={iIdx} className="p-2 rounded-lg bg-indigo-50/70 border border-indigo-200 text-xs flex flex-col gap-1">
                    <span className="font-black text-indigo-950">Object: {inst.instanceId}</span>
                    <div className="flex flex-wrap gap-1">
                      {inst.attributes.map((attr, aIdx) => (
                        <span key={aIdx} className="px-1.5 py-0.5 rounded bg-white border border-indigo-200 text-[10px]">
                          {attr.name} = <strong className="text-emerald-700">{attr.value}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 8. PROBLEM SOLVING / DSA (Pointers & Pattern Overview) */}
        {!isPrintOrOutput && isProblemSolving && op?.problemSolvingInfo && (
          <div className="flex flex-col gap-1.5 bg-white/95 p-2.5 rounded-xl border border-purple-200/80 shadow-2xs font-mono text-xs">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-black text-purple-900">Pattern: {op.problemSolvingInfo.patternName}</span>
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 font-bold">
                Time: {op.problemSolvingInfo.timeComplexity} | Space: {op.problemSolvingInfo.spaceComplexity}
              </span>
            </div>
            {op.problemSolvingInfo.pointers && op.problemSolvingInfo.pointers.length > 0 && (
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="text-[10px] text-slate-500 font-bold">Pointers:</span>
                {op.problemSolvingInfo.pointers.map((ptr, pIdx) => (
                  <span key={pIdx} className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[10px]">
                    {ptr.name} = {ptr.index}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── LIVE MEMORY VARIABLE BOARD (Whenever variables exist) ── */}
        {op?.variableSnapshots && op.variableSnapshots.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-purple-100">
            <span className="text-[9.5px] font-black uppercase text-slate-400 mr-1">Live Variables:</span>
            {op.variableSnapshots.map((vSnap, vIdx) => (
              <div
                key={vIdx}
                className="px-2 py-0.5 rounded-md bg-white border border-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1 shadow-2xs"
              >
                <span className="text-purple-700">{vSnap.name}</span>
                <span className="text-slate-400">=</span>
                <span className="text-emerald-700 font-black">{vSnap.value}</span>
                <span className="text-[8px] text-slate-400">({vSnap.dataType})</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
