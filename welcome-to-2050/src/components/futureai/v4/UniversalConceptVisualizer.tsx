import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  Database,
  Cpu,
  GitBranch,
  Repeat,
  CheckCircle2,
  XCircle,
  Code2,
  Layers,
  Sparkles,
  Search,
  ArrowUpDown,
  CornerDownRight,
  AlertTriangle,
  Network,
  Binary,
} from 'lucide-react';
import { ExecutionTraceStep } from '../pythonTraceEngine';

export interface ConceptVisualizerProps {
  step: ExecutionTraceStep;
  language?: 'en' | 'hi';
}

/**
 * Universal Concept-Specific Animated Visualization Registry.
 * Supports all 20 required Python & DSA concepts:
 * 1. print(): Function -> Arguments -> Console Output
 * 2. Variables & Assignment: Variable -> Assignment -> RAM Slot
 * 3. Data Types: Value -> Type Inspector -> Python Type
 * 4. Arithmetic: Operands -> Operator -> Computed Result -> Storage
 * 5. Comparisons: Values -> Comparison Operator -> Boolean
 * 6. input(): User Keyboard Input -> Type Cast -> Variable
 * 7. if/elif/else: Condition Test -> Executed Branch vs Skipped
 * 8. for/while: Iteration -> Sequence Element -> Loop Body
 * 9. Strings: Character Index Grid (Positive & Negative) & Slicing
 * 10. Lists: Indexed Memory Cells & Operations (append/pop)
 * 11. Dictionaries: Key-Value Mapping Hash Table
 * 12. Functions: Parameters -> Scope -> Return Value
 * 13. Recursion: Call Stack Frames & Base Case Tracker
 * 14. Exceptions: Try Block -> Exception Caught -> Handler
 * 15. Sorting: Elements Comparison & Swap Pointers
 * 16. Searching: Range Pointers (low/mid/high) & Match Detection
 * 17. Stack & Queue: LIFO Stack / FIFO Queue Operations
 * 18. Linked Lists: Nodes & Next Pointers
 * 19. Trees & Graphs: Hierarchical Nodes & Edges
 * 20. Dynamic Programming: 1D/2D Subproblem State Table
 * 21. General Fallback: Neutral Source & Trace Pipeline
 */
export const UniversalConceptVisualizer: React.FC<ConceptVisualizerProps> = ({
  step,
  language = 'en',
}) => {
  const { diagram, opType, lineContent } = step;
  const line = lineContent.trim();
  const isHi = language === 'hi';

  // ── Determine the most specific concept category ──
  const conceptCategory = React.useMemo(() => {
    const l = line.toLowerCase();
    if (l.startsWith('print(')) return 'print';
    if (l.includes('input(')) return 'input';
    if (l.includes('try:') || l.includes('except ') || l.includes('except:') || l.includes('raise ')) return 'exception';
    if (l.includes('node') && (l.includes('.next') || l.includes('self.next') || l.includes('head'))) return 'linked_list';
    if (l.includes('root') && (l.includes('.left') || l.includes('.right') || l.includes('tree'))) return 'tree_graph';
    if (l.includes('stack') || (l.includes('.append(') && l.includes('.pop('))) return 'stack_queue';
    if (l.includes('sort') || l.includes('sorted(') || l.includes('swap') || (l.includes('[j]') && l.includes('[j+1]'))) return 'sorting';
    if (l.includes('binary_search') || l.includes('low <= high') || l.includes('mid =')) return 'searching';
    if (l.includes('dp[') || l.includes('memo[') || (l.includes('range(') && l.includes('dp'))) return 'dp';
    if (opType === 'recursion' || (l.includes('return ') && l.includes('(') && !l.includes('range('))) return 'recursion';
    if (l.startsWith('def ') || (opType === 'function_call' && l.includes('('))) return 'function';
    if (l.startsWith('for ') || l.startsWith('while ') || opType === 'loop_header' || opType === 'loop_body') return 'loop';
    if (l.startsWith('if ') || l.startsWith('elif ') || l.startsWith('else:') || opType === 'condition') return 'condition';
    if (l.includes('==') || l.includes('!=') || l.includes('>=') || l.includes('<=') || (l.includes('>') && !l.includes('->')) || l.includes('<')) return 'comparison';
    if (l.includes('{') && l.includes(':')) return 'dict';
    if (l.includes('[') && l.includes(']') && (l.includes('.append(') || l.includes('nums') || l.includes('list'))) return 'list';
    if (l.includes('type(') || l.includes('int(') || l.includes('str(') || l.includes('float(') || l.includes('bool(')) return 'datatype';
    if (l.includes('"') || l.includes("'") || l.includes('.split(') || l.includes('.join(') || l.includes('f"')) return 'string';
    if (opType === 'arithmetic' || (l.includes('=') && (l.includes('+') || l.includes('-') || l.includes('*') || l.includes('/') || l.includes('%') || l.includes('//')))) return 'arithmetic';
    if (l.includes('=') && !l.includes('==')) return 'variable';
    return opType || 'general';
  }, [line, opType]);

  return (
    <div className="w-full bg-slate-50/70 border border-purple-100/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-center min-h-[140px] shadow-2xs">
      {/* 1. PRINT: Function -> Arguments -> Console Stream */}
      {conceptCategory === 'print' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          {/* Step 1: Function call */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-100/70 border border-purple-200 text-purple-950 font-mono text-xs font-bold shadow-2xs">
            <span className="text-base select-none">🖨️</span>
            <span>print()</span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          {/* Step 2: Arguments evaluated */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {isHi ? 'Arguments (Inp)' : 'Evaluated Arguments'}
            </span>
            <div className="px-3.5 py-1.5 rounded-xl bg-white border border-purple-200 font-mono text-xs text-purple-900 font-bold shadow-2xs">
              {line.slice(6, -1) || 'value'}
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          {/* Step 3: Console Output */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              <span>Console Output</span>
            </span>
            <div className="px-4 py-2 rounded-xl bg-[#090d16] text-emerald-400 font-mono text-xs font-bold border border-slate-800 shadow-sm flex items-center gap-2">
              <span>{diagram.printText || step.consoleOutput || 'Output displayed'}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-3.5 bg-emerald-400 inline-block"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. VARIABLE & ASSIGNMENT: Name -> Operator -> Memory Slot */}
      {conceptCategory === 'variable' && (
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Variable Name
            </span>
            <div className="px-3.5 py-1.5 rounded-xl bg-purple-100 text-purple-950 font-mono text-xs font-black border border-purple-300">
              {diagram.targetVar || line.split('=')[0]?.trim() || 'x'}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-1">
              Assign (=)
            </span>
            <ArrowRight className="w-5 h-5 text-purple-600" />
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Database className="w-3 h-3 text-purple-600" />
              <span>RAM Memory Slot</span>
            </span>
            <div className="px-5 py-2 rounded-xl bg-amber-50 border border-amber-300 text-slate-900 font-mono text-xs font-bold shadow-2xs flex items-center gap-3">
              <span className="text-slate-600 font-bold">{diagram.targetVar || line.split('=')[0]?.trim()}</span>
              <span className="text-amber-400 font-bold">|</span>
              <span className="text-purple-900 font-black">
                {String(diagram.computedValue !== undefined ? diagram.computedValue : line.split('=').slice(1).join('=').trim())}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. ARITHMETIC: Operands -> Operator -> Evaluated -> Storage */}
      {conceptCategory === 'arithmetic' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 font-mono text-xs">
            {(diagram.operands && diagram.operands.length > 0
              ? diagram.operands
              : [
                  { name: 'op1', value: 10 },
                  { name: 'op2', value: 20 },
                ]
            ).map((op, i, arr) => (
              <React.Fragment key={op.name}>
                <div className="flex flex-col items-center px-2.5 py-1 rounded-lg bg-purple-50 text-purple-950 border border-purple-200">
                  <span className="text-[9px] text-purple-600 font-bold uppercase">{op.name}</span>
                  <span className="font-black">{String(op.value)}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="font-mono text-purple-700 font-black text-sm px-0.5">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Evaluated Result
            </span>
            <div className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-mono text-xs font-black shadow-xs">
              {diagram.expression ? `${diagram.expression} = ` : ''}
              {diagram.computedValue !== undefined ? String(diagram.computedValue) : 'Calculated'}
            </div>
          </div>

          {diagram.targetVar && (
            <>
              <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Stored in {diagram.targetVar}
                </span>
                <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-purple-950 font-mono text-xs font-black">
                  {diagram.targetVar} = {String(diagram.computedValue)}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* 4. USER INPUT: Prompt -> Type Conversion -> Target Variable */}
      {conceptCategory === 'input' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs font-mono text-xs">
            <span className="text-base select-none">⌨️</span>
            <div>
              <span className="text-[10px] text-slate-400 block font-bold">User Input</span>
              <span className="text-slate-800 font-bold">
                "{diagram.inputValue || '10'}"
              </span>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-1">
              Type Conversion
            </span>
            <div className="px-3 py-1 rounded-xl bg-purple-700 text-white font-mono text-xs font-black shadow-2xs">
              {diagram.castType || 'int'}()
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider mb-1">
              Stored Variable
            </span>
            <div className="px-4 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-purple-950 font-mono text-xs font-black">
              {diagram.targetVar || 'var'} = {String(diagram.computedValue !== undefined ? diagram.computedValue : diagram.inputValue || '10')}
            </div>
          </div>
        </div>
      )}

      {/* 5. CONDITION (if/elif/else): Test Expression -> Selected Branch */}
      {conceptCategory === 'condition' && (
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <div className="px-3.5 py-2 rounded-xl bg-amber-50 border-2 border-amber-300 flex items-center gap-2 font-mono text-xs font-bold text-amber-950 shadow-2xs">
            <GitBranch className="w-4 h-4 text-amber-600" />
            <span>Condition: {diagram.conditionExpr || line.replace(':', '')}</span>
            <span
              className={`ml-1 px-2 py-0.5 rounded text-[11px] font-black ${
                diagram.conditionResult !== false ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {diagram.conditionResult !== false ? 'TRUE' : 'FALSE'}
            </span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex items-center gap-2.5">
            <div
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 ${
                diagram.conditionResult !== false
                  ? 'bg-purple-700 text-white border-purple-700 shadow-xs'
                  : 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>if-block (EXECUTED)</span>
            </div>
            <div
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 ${
                diagram.conditionResult === false
                  ? 'bg-purple-700 text-white border-purple-700 shadow-xs'
                  : 'bg-slate-100 text-slate-400 border-slate-200 opacity-50'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>else-block (SKIPPED)</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. COMPARISONS: Left -> Comparison Operator -> Right -> Boolean */}
      {conceptCategory === 'comparison' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 font-mono text-xs font-bold text-slate-800 shadow-2xs">
            {line}
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Boolean Evaluation
            </span>
            <span className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-mono text-xs font-black shadow-xs">
              True / False Verified
            </span>
          </div>
        </div>
      )}

      {/* 7. LOOP (for/while): Iteration -> Sequence Tracker -> Loop Body */}
      {conceptCategory === 'loop' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200">
            <Repeat className="w-4 h-4 text-purple-700" />
            <span className="font-bold text-purple-900">Iteration:</span>
            <span className="px-2 py-0.5 rounded-full bg-purple-700 text-white font-black text-xs">
              {diagram.iteration || 1} of {diagram.totalIterations || 3}
            </span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          {/* Sequence items */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-slate-200">
            {(diagram.sequence || [0, 1, 2, 3]).map((sVal) => {
              const isActive = sVal === (diagram.currentValue !== undefined ? diagram.currentValue : 0);
              return (
                <div
                  key={sVal}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-purple-700 text-white shadow-xs ring-2 ring-purple-300'
                      : sVal < (diagram.currentValue || 0)
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-50 text-slate-500 border border-slate-200'
                  }`}
                >
                  {sVal}
                </div>
              );
            })}
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-purple-950 font-mono text-xs font-bold">
            {diagram.loopVar || 'i'} = <strong className="text-purple-900 font-black">{diagram.currentValue !== undefined ? diagram.currentValue : 0}</strong>
          </div>
        </div>
      )}

      {/* 8. DATA TYPES: Value -> Type Inspector -> Python Class */}
      {conceptCategory === 'datatype' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-mono text-xs font-bold text-slate-800">
            Value: {line.slice(line.indexOf('(') + 1, line.lastIndexOf(')')) || '42'}
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-1">
              Type Identified
            </span>
            <div className="px-3.5 py-1.5 rounded-xl bg-purple-700 text-white font-mono text-xs font-black shadow-xs">
              &lt;class '{line.includes('int') ? 'int' : line.includes('float') ? 'float' : line.includes('str') ? 'str' : 'bool'}'&gt;
            </div>
          </div>
        </div>
      )}

      {/* 9. STRINGS: Forward & Negative Indexing Cells */}
      {conceptCategory === 'string' && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            String Index Anatomy
          </span>
          <div className="flex items-center gap-1 font-mono text-xs overflow-x-auto max-w-full pb-1">
            {['P', 'y', 't', 'h', 'o', 'n'].map((ch, idx, arr) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[9px] text-purple-600 font-bold select-none">{idx}</span>
                <div className="w-7 h-7 rounded-lg bg-white border border-purple-200 flex items-center justify-center font-black text-slate-900 shadow-2xs">
                  {ch}
                </div>
                <span className="text-[9px] text-slate-400 select-none">-{arr.length - idx}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 10. LISTS: Indexed Cells & Operations */}
      {conceptCategory === 'list' && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            List Indexed Cells
          </span>
          <div className="flex items-center gap-1.5 font-mono text-xs overflow-x-auto max-w-full pb-1">
            {(diagram.cells || [
              { index: 0, value: 10, isHighlighted: true },
              { index: 1, value: 20 },
              { index: 2, value: 30 },
            ]).map((cell) => (
              <div key={cell.index} className="flex flex-col items-center">
                <span className="text-[9px] text-purple-600 font-bold select-none">[{cell.index}]</span>
                <div
                  className={`w-9 h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-2xs ${
                    cell.isHighlighted
                      ? 'bg-purple-700 text-white ring-2 ring-purple-300'
                      : 'bg-white text-slate-800 border border-slate-200'
                  }`}
                >
                  {String(cell.value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 11. DICTIONARIES: Key -> Value Hash Table */}
      {conceptCategory === 'dict' && (
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 font-mono text-xs">
            <span className="text-purple-600 font-bold">Key:</span>
            <span className="text-purple-950 font-black">"name"</span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 font-mono text-xs">
            <span className="text-amber-700 font-bold">Mapped Value:</span>
            <span className="text-slate-900 font-black">"Rahul"</span>
          </div>
        </div>
      )}

      {/* 12. FUNCTIONS: Call -> Scope -> Return */}
      {conceptCategory === 'function' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-100 text-purple-950 font-mono text-xs font-bold border border-purple-200">
            <Code2 className="w-3.5 h-3.5 text-purple-700" />
            <span>{line.replace('def ', '').split('(')[0] || 'func'}()</span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs font-semibold shadow-2xs">
            Arguments Passed &amp; Scope Initialized
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 font-mono text-xs font-bold">
            Return Value
          </div>
        </div>
      )}

      {/* 13. RECURSION: Stack Frames & Base Case */}
      {conceptCategory === 'recursion' && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <Layers className="w-3 h-3 text-purple-600" />
            <span>Recursion Call Stack</span>
          </span>
          <div className="flex flex-col items-center gap-1 font-mono text-xs w-full max-w-xs">
            <div className="w-full px-3 py-1.5 rounded-lg bg-purple-700 text-white font-bold text-center shadow-xs">
              factorial(1) &rarr; Base Case: returns 1
            </div>
            <div className="w-full px-3 py-1.5 rounded-lg bg-purple-100 text-purple-950 font-semibold text-center border border-purple-200">
              factorial(2) &rarr; waits for factorial(1)
            </div>
            <div className="w-full px-3 py-1.5 rounded-lg bg-white text-slate-600 text-center border border-slate-200">
              factorial(3) &rarr; initial caller
            </div>
          </div>
        </div>
      )}

      {/* 14. EXCEPTIONS: Try Block -> Exception Caught -> Handler */}
      {conceptCategory === 'exception' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 font-mono text-xs font-bold flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>try: Code Block</span>
          </div>

          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />

          <div className="px-3.5 py-1.5 rounded-xl bg-purple-700 text-white font-mono text-xs font-bold shadow-xs">
            except: Error Handled Safely
          </div>
        </div>
      )}

      {/* 15. SORTING: Element Comparisons & Swaps */}
      {conceptCategory === 'sorting' && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3 text-purple-600" />
            <span>Sorting Comparison &amp; Swap</span>
          </span>
          <div className="flex items-center gap-2 font-mono text-xs">
            <div className="px-3 py-2 rounded-xl bg-purple-100 border border-purple-300 text-purple-950 font-black">
              nums[j] = 45
            </div>
            <span className="text-purple-600 font-bold">&gt;</span>
            <div className="px-3 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 font-black">
              nums[j+1] = 12
            </div>
            <span className="text-purple-400 font-bold">&rarr;</span>
            <div className="px-3 py-2 rounded-xl bg-emerald-600 text-white font-bold shadow-xs">
              Swapped!
            </div>
          </div>
        </div>
      )}

      {/* 16. SEARCHING: Search Range & Target Match */}
      {conceptCategory === 'searching' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 font-mono text-xs font-bold shadow-2xs">
            <Search className="w-3.5 h-3.5 text-purple-600" />
            <span>Binary Search Range: [low ... mid ... high]</span>
          </div>
          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />
          <div className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-mono text-xs font-black shadow-xs">
            Target Match Found at mid
          </div>
        </div>
      )}

      {/* 17. STACK & QUEUE */}
      {conceptCategory === 'stack_queue' && (
        <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-purple-700 uppercase">Top of Stack (LIFO)</span>
            <div className="flex flex-col gap-1 w-24">
              <div className="p-1 rounded bg-purple-700 text-white text-center font-mono text-xs font-bold">
                [40] Top
              </div>
              <div className="p-1 rounded bg-purple-100 text-purple-900 text-center font-mono text-xs font-semibold">
                [30]
              </div>
              <div className="p-1 rounded bg-slate-100 text-slate-700 text-center font-mono text-xs font-medium">
                [20]
              </div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />
          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-purple-200 text-purple-950 font-mono text-xs font-bold shadow-2xs">
            push() / pop() Operation
          </div>
        </div>
      )}

      {/* 18. LINKED LISTS */}
      {conceptCategory === 'linked_list' && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap font-mono text-xs">
          <div className="flex items-center rounded-lg overflow-hidden border border-purple-300 shadow-2xs">
            <span className="px-2 py-1 bg-purple-700 text-white font-bold">Head: 10</span>
            <span className="px-1.5 py-1 bg-purple-100 text-purple-900 font-bold border-l border-purple-300">&bull;&rarr;</span>
          </div>
          <span className="text-purple-500 font-bold">&rarr;</span>
          <div className="flex items-center rounded-lg overflow-hidden border border-purple-300 shadow-2xs">
            <span className="px-2 py-1 bg-white text-slate-800 font-bold">Node: 20</span>
            <span className="px-1.5 py-1 bg-purple-100 text-purple-900 font-bold border-l border-purple-300">&bull;&rarr;</span>
          </div>
          <span className="text-purple-500 font-bold">&rarr;</span>
          <div className="px-2 py-1 rounded-lg bg-slate-100 text-slate-500 font-bold border border-slate-200">
            NULL
          </div>
        </div>
      )}

      {/* 19. TREES & GRAPHS */}
      {conceptCategory === 'tree_graph' && (
        <div className="flex flex-col items-center gap-1 font-mono text-xs">
          <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold shadow-xs">
            10
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[9px] text-purple-400 select-none">/</span>
              <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-950 flex items-center justify-center font-bold border border-purple-300">
                5
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[9px] text-purple-400 select-none">\</span>
              <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-950 flex items-center justify-center font-bold border border-purple-300">
                15
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 20. DYNAMIC PROGRAMMING */}
      {conceptCategory === 'dp' && (
        <div className="flex flex-col items-center gap-2 font-mono text-xs">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            DP State Table: dp[i] = dp[i-1] + dp[i-2]
          </span>
          <div className="flex items-center gap-1">
            {[0, 1, 1, 2, 3, 5].map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[9px] text-slate-400">i={i}</span>
                <div
                  className={`w-8 h-7 rounded flex items-center justify-center font-bold ${
                    i === 5
                      ? 'bg-purple-700 text-white shadow-xs ring-2 ring-purple-300'
                      : i >= 3
                      ? 'bg-purple-100 text-purple-950 border border-purple-200'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 21. GENERAL FALLBACK */}
      {conceptCategory === 'general' && (
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-mono text-xs font-bold text-slate-800 shadow-2xs">
            {line}
          </div>
          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />
          <div className="px-4 py-2 rounded-xl bg-purple-700 text-white font-mono text-xs font-bold shadow-xs">
            Executed Sequentially
          </div>
        </div>
      )}
    </div>
  );
};
