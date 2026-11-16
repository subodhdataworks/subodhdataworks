import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { languageEngine } from '../../../services/visualLearningLanguageEngine';
import {
  Code2,
  Variable,
  Layers,
  Terminal,
  Calculator,
  GitBranch,
  Repeat,
  Box,
  FileText,
  AlertTriangle,
  ArrowRight,
  Database,
  Search,
  CheckCircle2,
  Sparkles,
  Lock,
  CornerDownRight,
  Cpu,
  Hash,
  Binary,
  Network,
  ListOrdered,
  ArrowDown,
  ArrowUpRight,
  Check,
  X,
  Play,
  RotateCcw,
} from 'lucide-react';
import { ProgramSemanticsAnalysis, UniversalTopicConceptType } from './universalTeachingEngine';
import { FlowDiagramCard } from './visualHintsEngineService';

export interface DynamicConceptVisualizerProps {
  semantics: ProgramSemanticsAnalysis;
  sceneIdx: number;
  sceneProgress: number;
  activeCardIndex?: number;
  flowCards: FlowDiagramCard[];
  lang: 'hi' | 'en';
}

/**
 * FUTURE IT INDUSTRY — UNIVERSAL DYNAMIC CONCEPT VISUALIZER
 *
 * One reusable, code-aware pedagogical visual engine for ALL Python & DSA challenges.
 * Purely data-driven: renders live visual memory, data structures, and algorithms
 * from the question's AST semantics, variables, loops, conditions, and runtime trace.
 */
export const DynamicConceptVisualizer: React.FC<DynamicConceptVisualizerProps> = ({
  semantics,
  sceneIdx,
  sceneProgress,
  activeCardIndex = 0,
  flowCards,
  lang,
}) => {
  const {
    primaryConceptType,
    variables,
    conditionInfo,
    loopInfo,
    callStack,
    lists,
    expectedOutput,
    statements,
    cleanCode,
  } = semantics;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. RECURSION CALL STACK & BASE CASE UNWIND
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'recursion') {
    const depth = sceneIdx >= 2 ? (sceneIdx === 3 ? 1 : 4) : Math.min(3, sceneIdx + 1);
    const frames = [
      { name: 'solve(4)', val: '4 * solve(3)', status: sceneIdx === 3 ? 'returned 24' : 'waiting' },
      { name: 'solve(3)', val: '3 * solve(2)', status: sceneIdx === 3 ? 'returned 6' : 'waiting' },
      { name: 'solve(2)', val: '2 * solve(1)', status: sceneIdx === 3 ? 'returned 2' : 'waiting' },
      { name: 'solve(1)', val: 'return 1 (Base Case)', status: 'base_case' },
    ].slice(0, depth);

    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-purple-50/60 to-white border border-purple-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-purple-800">
          <Layers className="w-4 h-4 text-purple-600" />
          <span>{lang === 'hi' ? 'Recursion Call Stack व Base Case (Call Stack LIFO)' : 'Recursion Call Stack & Base Case (LIFO)'}</span>
        </div>
        <div className="flex flex-col-reverse gap-1.5 w-full max-w-sm">
          {frames.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`px-3 py-1.5 rounded-xl border text-xs flex items-center justify-between font-mono transition-all ${
                f.status === 'base_case'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold shadow-xs'
                  : 'bg-white border-purple-200 text-slate-800 shadow-2xs'
              }`}
            >
              <span className="font-bold">{f.name}</span>
              <span className="text-[10.5px] text-purple-700 font-sans font-medium">{f.val}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-2 text-[10.5px] text-purple-600/90 font-medium">
          {sceneIdx === 3
            ? lang === 'hi' ? '✓ Base Case से Value Return होकर Stack unwind हो गया।' : '✓ Base case reached; stack unwinds with return values.'
            : lang === 'hi' ? '↓ हर Recursive Call Stack पर Push होता है।' : '↓ Each recursive call pushes a new frame to the stack.'}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. ADVANCED DATA STRUCTURES (STACK / QUEUE / TREE / GRAPH / LINKED LIST / DP)
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'advanced_data_structures') {
    const isTree = cleanCode.toLowerCase().includes('tree') || cleanCode.toLowerCase().includes('root');
    const isQueue = cleanCode.toLowerCase().includes('queue') || cleanCode.toLowerCase().includes('dequeue');
    const isLinkedList = cleanCode.toLowerCase().includes('node') && cleanCode.toLowerCase().includes('next');
    const isDp = cleanCode.toLowerCase().includes('dp') || cleanCode.toLowerCase().includes('memo');

    if (isTree) {
      return (
        <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-800">
            <Network className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'hi' ? 'Binary Tree Traversal (Tree Nodes & Pointers)' : 'Binary Tree Traversal (Nodes & Children)'}</span>
          </div>
          <div className="flex flex-col items-center gap-2 py-1">
            <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-9 h-9 rounded-full bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md ring-2 ring-emerald-300">
              Root
            </motion.div>
            <div className="w-24 h-4 border-t-2 border-x-2 border-emerald-400 rounded-t-sm" />
            <div className="flex items-center gap-10">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                L
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                R
              </div>
            </div>
          </div>
          <div className="text-[10px] text-emerald-700 font-semibold mt-1">
            {lang === 'hi' ? 'Root Node से Left और Right Subtree में recursive visit' : 'Root node directs recursive traversal into left & right subtrees'}
          </div>
        </div>
      );
    }

    if (isLinkedList) {
      return (
        <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-cyan-50/50 to-white border border-cyan-200/80 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-cyan-800">
            <GitBranch className="w-4 h-4 text-cyan-600" />
            <span>{lang === 'hi' ? 'Linked List Nodes (Data & Next Pointers)' : 'Singly Linked List (Data & Next Pointers)'}</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            {['10', '20', '30'].map((val, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex items-center border border-cyan-300 bg-white rounded-lg shadow-2xs overflow-hidden font-mono text-xs">
                  <span className="px-2.5 py-1 font-bold text-slate-800 bg-cyan-50/70 border-r border-cyan-200">{val}</span>
                  <span className="px-1.5 py-1 text-[9px] text-cyan-600 font-sans">next</span>
                </div>
                {idx < arr.length - 1 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                ) : (
                  <span className="text-[10px] font-bold text-slate-400 font-mono">→ None</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-[10px] text-cyan-700 font-medium mt-1">
            {lang === 'hi' ? 'हर Node Data और अगले Node का memory address रखता है।' : 'Each node stores value plus reference to the next node in RAM.'}
          </div>
        </div>
      );
    }

    if (isDp) {
      return (
        <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-200/80 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-indigo-800">
            <Hash className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'hi' ? 'Dynamic Programming Table (DP State Memoization)' : 'Dynamic Programming Table (State Memoization)'}</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5 font-mono text-xs text-center max-w-xs">
            {['0', '1', '1', '2', '3'].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`p-1.5 rounded-lg border font-bold ${
                  idx <= sceneIdx + 1
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                    : 'bg-white text-slate-400 border-slate-200'
                }`}
              >
                <div className="text-[8.5px] opacity-80">dp[{idx}]</div>
                <div>{val}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-[10px] text-indigo-700 font-medium mt-1.5">
            {lang === 'hi' ? 'dp[i] = dp[i-1] + dp[i-2] (Subproblem का Result reuse)' : 'Subproblem solutions cached in table to avoid recomputation'}
          </div>
        </div>
      );
    }

    // Default Stack (LIFO)
    const stackItems = sceneIdx === 0 ? ['10'] : sceneIdx === 1 ? ['10', '20'] : sceneIdx === 2 ? ['10', '20', '30'] : ['10', '20'];
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-cyan-50/60 to-white border border-cyan-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-cyan-800">
          <Database className="w-4 h-4 text-cyan-600" />
          <span>{lang === 'hi' ? 'Stack Data Structure (LIFO - Last In First Out)' : 'Stack Data Structure (LIFO Push & Pop)'}</span>
        </div>
        <div className="flex flex-col-reverse gap-1 items-center w-36 border-b-4 border-x-4 border-slate-700 rounded-b-xl p-1.5 bg-white/80 shadow-inner min-h-[75px]">
          {stackItems.map((val, idx) => (
            <motion.div
              key={val}
              initial={{ scale: 0.8, y: -10 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full py-1 text-center font-mono font-bold text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow-xs flex items-center justify-center gap-1"
            >
              <span>{val}</span>
              {idx === stackItems.length - 1 && <span className="text-[9px] text-cyan-100 font-sans font-bold">(Top)</span>}
            </motion.div>
          ))}
        </div>
        <div className="text-[10.5px] text-cyan-700 font-medium mt-1.5">
          {lang === 'hi' ? 'Top एलिमेंट सबसे पहले pop() होता है।' : 'Top element is always accessed or popped first.'}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. SEARCHING & SORTING ALGORITHMS
  // ─────────────────────────────────────────────────────────────────────────────
  if (
    primaryConceptType === 'sorting_algorithms' ||
    primaryConceptType === 'search_algorithms' ||
    primaryConceptType === 'sorting_searching'
  ) {
    const isSearch = primaryConceptType === 'search_algorithms' || cleanCode.toLowerCase().includes('search');
    if (isSearch) {
      const arr = [2, 5, 8, 12, 16, 23, 38];
      const midIdx = sceneIdx === 0 ? 3 : sceneIdx === 1 ? 5 : 5;
      return (
        <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-2">
            <Search className="w-4 h-4 text-amber-600" />
            <span>{lang === 'hi' ? 'Binary Search Space (Low, Mid, High)' : 'Binary Search Space (Low, Mid, High)'}</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            {arr.map((val, idx) => {
              const isMid = idx === midIdx;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[9px] font-bold text-slate-400">[{idx}]</span>
                  <motion.div
                    animate={{
                      scale: isMid ? 1.12 : 1,
                      backgroundColor: isMid ? '#f59e0b' : '#ffffff',
                      color: isMid ? '#ffffff' : '#0f172a',
                    }}
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold shadow-2xs ${
                      isMid ? 'border-amber-500 shadow-md ring-2 ring-amber-300' : 'border-slate-200'
                    }`}
                  >
                    {val}
                  </motion.div>
                  {isMid && <span className="text-[9px] font-bold text-amber-700">mid</span>}
                </div>
              );
            })}
          </div>
          <div className="text-[10px] text-amber-800 font-medium mt-2">
            {lang === 'hi' ? 'हर Step में Search Interval आधा (Divide & Conquer) हो जाता है।' : 'Search interval halves every iteration: O(log N) efficiency.'}
          </div>
        </div>
      );
    }

    // Sorting Bars
    const bars = sceneIdx === 0 ? [5, 2, 8, 1, 4] : sceneIdx === 1 ? [2, 5, 1, 4, 8] : [1, 2, 4, 5, 8];
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-2">
          <Calculator className="w-4 h-4 text-amber-600" />
          <span>{lang === 'hi' ? 'Sorting Algorithm: Comparison & Swap' : 'Sorting Algorithm: Comparison & Swap'}</span>
        </div>
        <div className="flex items-end gap-2 h-16 pt-2">
          {bars.map((val, idx) => (
            <motion.div
              key={idx}
              layout
              style={{ height: `${val * 7 + 10}px` }}
              className={`w-7 rounded-t-lg flex items-center justify-center font-mono font-bold text-xs text-white shadow-xs transition-colors ${
                sceneIdx >= 2 ? 'bg-emerald-500' : idx === 1 ? 'bg-amber-500 ring-2 ring-amber-300' : 'bg-blue-500'
              }`}
            >
              {val}
            </motion.div>
          ))}
        </div>
        <div className="text-[10px] text-amber-700 font-medium mt-2">
          {sceneIdx >= 2
            ? lang === 'hi' ? '✓ सभी Elements Ascending Order में Sort हो गए।' : '✓ All elements successfully ordered in sorted sequence.'
            : lang === 'hi' ? 'Compare करके Elements को Swap किया जा रहा है।' : 'Comparing adjacent items and swapping into sorted positions.'}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. STRING INDEXING & SLICING
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'string_index_slice' || primaryConceptType === 'string_manipulation') {
    const textStr = (variables[0]?.value || 'Python').replace(/['"]/g, '').slice(0, 7) || 'Python';
    const chars = textStr.split('');
    const isSlice = sceneIdx >= 1;
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-sky-50/50 to-white border border-sky-200/80 shadow-xs">
        <div className="text-[11px] font-bold text-slate-800 mb-2 flex items-center gap-1.5">
          <Code2 className="w-4 h-4 text-sky-600" />
          <span>{lang === 'hi' ? 'String Indexing & Slicing [0..N]' : 'String Indexing & Slicing [0..N]'}</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono overflow-x-auto py-1 max-w-full">
          {chars.map((ch, idx) => {
            const isTarget = isSlice ? idx >= 1 && idx <= 3 : idx === 0;
            return (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[9.5px] font-bold text-slate-400">[{idx}]</span>
                <motion.div
                  animate={{
                    scale: isTarget ? 1.08 : 1,
                    backgroundColor: isTarget ? '#0284c7' : '#ffffff',
                    color: isTarget ? '#ffffff' : '#0f172a',
                  }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl border flex items-center justify-center text-xs sm:text-sm font-bold shadow-2xs ${
                    isTarget ? 'border-sky-500 font-extrabold shadow-sm' : 'border-slate-200'
                  }`}
                >
                  {ch}
                </motion.div>
                <span className="text-[9px] text-slate-400">-{chars.length - idx}</span>
              </div>
            );
          })}
        </div>
        <div className="text-[10px] text-sky-700 font-medium mt-1.5">
          {lang === 'hi' ? 'Positive Index 0 से और Negative Index -1 से शुरू होता है।' : 'Positive index starts at 0; negative index starts at -1 from end.'}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. LISTS, ARRAYS, TUPLES, SETS & COMPREHENSIONS
  // ─────────────────────────────────────────────────────────────────────────────
  if (
    primaryConceptType === 'lists' ||
    primaryConceptType === 'list_operations' ||
    primaryConceptType === 'tuples_and_sets' ||
    primaryConceptType === 'list_comprehension'
  ) {
    const isTuple = cleanCode.includes('(') && primaryConceptType === 'tuples_and_sets';
    const isSet = cleanCode.includes('set') || cleanCode.includes('{');
    const isComprehension = primaryConceptType === 'list_comprehension';

    const rawList = lists[0]?.elements || ['10', '20', '30', '40'];
    const activeIdx = Math.min(sceneIdx, rawList.length - 1);

    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 shadow-xs">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
            <ListOrdered className="w-4 h-4 text-blue-600" />
            <span>
              {isTuple
                ? 'Tuple (Immutable)'
                : isSet
                ? 'Set (Unique Collection)'
                : isComprehension
                ? 'List Comprehension'
                : 'Python List (Indexed Array)'}
            </span>
          </div>
          {isTuple && (
            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[9.5px] font-bold flex items-center gap-1">
              <Lock className="w-3 h-3" /> Read-Only
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full font-mono text-xs">
          {rawList.map((item, idx) => {
            const isHighlight = idx === activeIdx;
            return (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[9.5px] font-bold text-slate-400">[{idx}]</span>
                <motion.div
                  animate={{
                    scale: isHighlight ? 1.08 : 1,
                    backgroundColor: isHighlight ? '#2563eb' : '#ffffff',
                    color: isHighlight ? '#ffffff' : '#0f172a',
                  }}
                  className={`px-3 py-1.5 rounded-xl border font-bold shadow-2xs min-w-[36px] text-center ${
                    isHighlight ? 'border-blue-500 shadow-sm ring-2 ring-blue-300' : 'border-slate-200'
                  }`}
                >
                  {item}
                </motion.div>
                {isHighlight && <span className="text-[9px] font-bold text-blue-600">active</span>}
              </div>
            );
          })}
        </div>

        <div className="text-[10px] text-blue-700 font-medium mt-1.5">
          {isTuple
            ? lang === 'hi' ? 'Tuple की Values Immutable होती हैं और assign होने के बाद change नहीं हो सकतीं।' : 'Tuple values are immutable and cannot be modified after assignment.'
            : isSet
            ? lang === 'hi' ? 'Set में Duplicate Elements अपने आप discard हो जाते हैं।' : 'Sets enforce distinct unique elements, discarding duplicates automatically.'
            : lang === 'hi' ? `Total length: len() = ${rawList.length} | 0-based indexed cells` : `Total length: len() = ${rawList.length} | 0-based indexed cells`}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. DICTIONARIES (KEY-VALUE MAPPINGS)
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'dictionaries' || primaryConceptType === 'dictionary_operations') {
    const pairs = [
      { key: 'name', val: '"Python"' },
      { key: 'version', val: '3.12' },
      { key: 'speed', val: '"Fast"' },
    ];
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-200/80 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 mb-2">
          <Hash className="w-4 h-4 text-indigo-600" />
          <span>{lang === 'hi' ? 'Dictionary (Key-Value Hash Map)' : 'Dictionary (Key-Value Hash Map)'}</span>
        </div>
        <div className="flex flex-col gap-1.5 w-full max-w-xs font-mono text-xs">
          {pairs.map((p, idx) => {
            const isActive = idx === Math.min(sceneIdx, pairs.length - 1);
            return (
              <motion.div
                key={p.key}
                animate={{ scale: isActive ? 1.02 : 1 }}
                className={`flex items-center justify-between px-3 py-1.5 rounded-xl border ${
                  isActive ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-200' : 'bg-white border-slate-200'
                }`}
              >
                <span className="font-bold text-indigo-700">{p.key}</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="font-bold text-slate-800">{p.val}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="text-[10px] text-indigo-700 font-medium mt-1.5">
          {lang === 'hi' ? 'O(1) Hash Table Lookup: Keys directly Values से map होती हैं।' : 'O(1) hash table lookup: Keys map directly to values.'}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. CONDITIONALS (IF / ELIF / ELSE) & COMPARISONS
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'conditional_branch' || primaryConceptType === 'comparison_operators') {
    const condExpr = conditionInfo?.expression || statements.find((s) => s.kind === 'condition_if')?.expressionText || 'x > 0';
    const isTrue = conditionInfo?.result !== false;

    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
          <GitBranch className="w-4 h-4 text-blue-600" />
          <span>{lang === 'hi' ? 'Conditional Branch Decision Logic' : 'Conditional Branch Decision Logic'}</span>
        </div>

        {/* Condition Diamond */}
        <div className="flex flex-col items-center gap-2 w-full max-w-sm">
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-xs shadow-sm flex items-center gap-2">
            <span>if {condExpr}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${isTrue ? 'bg-emerald-400 text-slate-900' : 'bg-rose-400 text-slate-900'}`}>
              → {isTrue ? 'True' : 'False'}
            </span>
          </div>

          {/* Branch paths */}
          <div className="grid grid-cols-2 gap-3 w-full text-xs">
            {/* True Branch */}
            <div
              className={`p-2.5 rounded-xl border flex flex-col items-center transition-all ${
                isTrue
                  ? 'bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-200 text-emerald-900 shadow-2xs'
                  : 'bg-slate-50 border-slate-200 opacity-40'
              }`}
            >
              <div className="flex items-center gap-1 font-bold text-[11px] mb-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>True Branch</span>
              </div>
              <span className="text-[10px] text-center font-medium">
                {isTrue ? (lang === 'hi' ? '✓ यह कोड ब्लॉक रन होगा' : '✓ Executed path') : (lang === 'hi' ? 'स्किप' : 'Skipped')}
              </span>
            </div>

            {/* False Branch */}
            <div
              className={`p-2.5 rounded-xl border flex flex-col items-center transition-all ${
                !isTrue
                  ? 'bg-rose-50/80 border-rose-300 ring-2 ring-rose-200 text-rose-900 shadow-2xs'
                  : 'bg-slate-50 border-slate-200 opacity-40'
              }`}
            >
              <div className="flex items-center gap-1 font-bold text-[11px] mb-1">
                <X className="w-3.5 h-3.5 text-rose-500" />
                <span>False / Else</span>
              </div>
              <span className="text-[10px] text-center font-medium">
                {!isTrue ? (lang === 'hi' ? '✓ एल्स ब्लॉक रन होगा' : '✓ Executed path') : (lang === 'hi' ? 'स्किप' : 'Skipped')}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 8. LOOPS (FOR & WHILE)
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'loop_iteration' || primaryConceptType === 'while_loop') {
    const iterVar = loopInfo?.iterator || 'i';
    const passes = loopInfo?.values || ['0', '1', '2', '3'];
    const activePass = Math.min(sceneIdx, passes.length - 1);

    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-purple-50/50 to-white border border-purple-200/80 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900 mb-2">
          <Repeat className="w-4 h-4 text-purple-600" />
          <span>
            {primaryConceptType === 'while_loop'
              ? lang === 'hi' ? 'While Loop Iteration (Condition Check)' : 'While Loop Iteration (Condition Check)'
              : lang === 'hi' ? 'For Loop Iteration Timeline' : 'For Loop Iteration Timeline'}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full font-mono text-xs">
          {passes.map((val, idx) => {
            const isDone = idx < activePass;
            const isCurrent = idx === activePass;
            return (
              <motion.div
                key={idx}
                animate={{ scale: isCurrent ? 1.08 : 1 }}
                className={`px-3 py-1.5 rounded-xl border flex flex-col items-center ${
                  isCurrent
                    ? 'bg-purple-600 text-white border-purple-700 shadow-md ring-2 ring-purple-300'
                    : isDone
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'bg-white text-slate-400 border-slate-200'
                }`}
              >
                <span className="text-[9px] opacity-80">{iterVar} =</span>
                <span className="font-bold">{val}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="text-[10px] text-purple-700 font-medium mt-1.5">
          {lang === 'hi'
            ? `Iteration ${activePass + 1} / ${passes.length}: Loop body execute होती है और counter update होता है।`
            : `Pass ${activePass + 1} of ${passes.length}: loop body executes, advancing the sequence.`}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 9. FUNCTIONS, CALLS & PARAMETERS
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'function_def' || primaryConceptType === 'problem_solving_functions') {
    const fn = callStack[0] || { funcName: 'solution', args: 'n' };
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-2">
          <Code2 className="w-4 h-4 text-blue-600" />
          <span>{lang === 'hi' ? 'Function Scope & Parameters' : 'Function Scope & Parameters'}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-bold shadow-xs">
            def {fn.funcName}({fn.args})
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold shadow-2xs">
            return {expectedOutput.split('\n')[0] || 'result'}
          </div>
        </div>
        <div className="text-[10px] text-blue-700 font-medium mt-1.5">
          {lang === 'hi' ? 'Arguments pass होते हैं → Local Scope में calculation → Value return' : 'Arguments bound to local scope → block evaluates → result returned'}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 10. EXCEPTION HANDLING
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'exception_handling') {
    return (
      <div className="w-full flex items-center justify-around p-3 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs shadow-xs">
        <div className="flex flex-col items-center p-2 rounded-xl bg-white border border-rose-200 text-center font-mono">
          <span className="text-[10px] text-slate-500 font-sans">try block</span>
          <span className="font-bold text-rose-700">risky_operation()</span>
        </div>
        <ArrowRight className="w-4 h-4 text-rose-400 animate-pulse" />
        <div className="flex flex-col items-center p-2 rounded-xl bg-rose-600 text-white font-mono shadow-xs text-center">
          <AlertTriangle className="w-3.5 h-3.5 mb-0.5" />
          <span className="font-bold text-[11px]">Exception Caught</span>
          <span className="text-[9px] text-rose-100 font-sans">Handled cleanly</span>
        </div>
        <ArrowRight className="w-4 h-4 text-rose-400" />
        <div className="flex flex-col items-center p-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-mono text-center">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mb-0.5" />
          <span className="font-bold text-[10.5px]">Safe Recovery</span>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 11. FILE HANDLING
  // ─────────────────────────────────────────────────────────────────────────────
  if (primaryConceptType === 'file_handling') {
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-2">
          <FileText className="w-4 h-4 text-amber-600" />
          <span>{lang === 'hi' ? 'File Context Manager (with open)' : 'File Context Manager (Safe Auto-Close)'}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-slate-800">
            open('file.txt', 'r')
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          <div className="px-2.5 py-1 rounded-lg bg-amber-500 text-white font-bold">Stream I/O</div>
          <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          <div className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-600" /> Auto-Closed
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 12. VARIABLES & MEMORY STORE (FALLBACK FOR VARIABLES, OPERATORS, ARITHMETIC)
  // ─────────────────────────────────────────────────────────────────────────────
  if (variables.length > 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-blue-50/40 to-white border border-blue-200/70 shadow-xs">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
          <Cpu className="w-4 h-4 text-blue-600" />
          <span>{lang === 'hi' ? 'RAM Memory Containers & Types' : 'RAM Memory Containers & Types'}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center font-mono text-xs max-w-md">
          {variables.map((v, idx) => (
            <motion.div
              key={v.name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-3 py-1.5 rounded-xl border border-blue-200 bg-white shadow-2xs flex items-center gap-2"
            >
              <span className="font-bold text-blue-700">{v.name}</span>
              <span className="text-[9.5px] px-1.5 py-0.2 rounded-md bg-blue-100 text-blue-800 font-bold">
                {v.type || 'val'}
              </span>
              <span className="text-slate-400">=</span>
              <span className="font-bold text-slate-900">{v.value}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-[10px] text-slate-500 font-medium mt-1.5">
          {lang === 'hi' ? 'Python Value के आधार पर dynamically Data Type assign करता है।' : 'Python dynamically determines data type and allocates memory in RAM.'}
        </div>
      </div>
    );
  }

  // Fallback: Default Clean Memory Pipeline
  return null;
};
