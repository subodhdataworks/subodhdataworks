import { TopicQuestion } from './data/pythonBasics140QuestionsData';
import {
  TeachingStep,
  ProgressiveHint,
  QuestionV5Config,
  diagnoseHelloWorldError,
} from './smartClassroomV5Engine';
import {
  OperatorVisualType,
  CharIndexCell,
  EvaluatedOperandInfo,
  IntermediateEvalStep,
  VariableSnapshot,
} from './operatorsVisualEngine';

export interface DictEntryRuntime {
  key: RuntimeVal;
  val: RuntimeVal;
}

export interface RuntimeVal {
  val: any;
  type: 'Integer' | 'Float' | 'Boolean' | 'String' | 'List' | 'Tuple' | 'Set' | 'Dict' | 'NoneType';
  isFloatFixed?: number;
}

export interface FuncDefRuntime {
  name: string;
  params: string[];
  body: BlockNode[];
}

export interface ProblemEvalContext {
  env: Record<string, RuntimeVal>;
  functions: Record<string, FuncDefRuntime>;
  inputs: string[];
  inputCursor: number;
  stdoutLines: string[];
  intermediateSteps: IntermediateEvalStep[];
  evaluatedOperands: EvaluatedOperandInfo[];
  detectedVisualType?: OperatorVisualType;
  detectedConcept?: string;
  charMap?: CharIndexCell[];
  setMembers?: {
    value: string;
    status?: 'unique' | 'added' | 'removed' | 'shared' | 'onlyA' | 'onlyB';
  }[];
  dictEntries?: {
    key: string;
    value: string;
    status?: 'normal' | 'selected' | 'added' | 'updated' | 'removed';
  }[];
  stringTransformInfo?: {
    original: string;
    operation: string;
    result: string;
    immutableNote?: string;
  };
  callStack: string[];
}

function makeInt(n: number): RuntimeVal {
  return { val: Math.trunc(n), type: 'Integer' };
}

function makeFloat(n: number, fixed?: number): RuntimeVal {
  return { val: n, type: 'Float', isFloatFixed: fixed };
}

function makeBool(b: boolean): RuntimeVal {
  return { val: Boolean(b), type: 'Boolean' };
}

function makeStr(s: string): RuntimeVal {
  return { val: String(s), type: 'String' };
}

function makeNone(): RuntimeVal {
  return { val: null, type: 'NoneType' };
}

function makeList(items: RuntimeVal[]): RuntimeVal {
  return { val: items, type: 'List' };
}

function makeTuple(items: RuntimeVal[]): RuntimeVal {
  return { val: items, type: 'Tuple' };
}

function makeSet(items: RuntimeVal[]): RuntimeVal {
  const unique: RuntimeVal[] = [];
  for (const it of items) {
    if (!unique.some((u) => valEquals(u, it))) {
      unique.push(cloneRuntimeVal(it));
    }
  }
  return { val: unique, type: 'Set' };
}

function makeDict(entries: DictEntryRuntime[]): RuntimeVal {
  const deduped: DictEntryRuntime[] = [];
  for (const e of entries) {
    const idx = deduped.findIndex((d) => valEquals(d.key, e.key));
    if (idx !== -1) {
      deduped[idx].val = cloneRuntimeVal(e.val);
    } else {
      deduped.push({ key: cloneRuntimeVal(e.key), val: cloneRuntimeVal(e.val) });
    }
  }
  return { val: deduped, type: 'Dict' };
}

export function valEquals(a?: RuntimeVal, b?: RuntimeVal): boolean {
  if (!a || !b) return false;
  if ((a.type === 'Integer' || a.type === 'Float') && (b.type === 'Integer' || b.type === 'Float')) {
    return Number(a.val) === Number(b.val);
  }
  if (a.type !== b.type) return false;
  if (a.type === 'List' || a.type === 'Tuple') {
    const arrA = a.val as RuntimeVal[];
    const arrB = b.val as RuntimeVal[];
    if (arrA.length !== arrB.length) return false;
    return arrA.every((el, idx) => valEquals(el, arrB[idx]));
  }
  if (a.type === 'Set') {
    const setA = a.val as RuntimeVal[];
    const setB = b.val as RuntimeVal[];
    if (setA.length !== setB.length) return false;
    return setA.every((el) => setB.some((bEl) => valEquals(el, bEl)));
  }
  if (a.type === 'Dict') {
    const dA = a.val as DictEntryRuntime[];
    const dB = b.val as DictEntryRuntime[];
    if (dA.length !== dB.length) return false;
    return dA.every((eA) => {
      const m = dB.find((eB) => valEquals(eB.key, eA.key));
      return m ? valEquals(eA.val, m.val) : false;
    });
  }
  return a.val === b.val;
}

export function compareRuntimeVals(a: RuntimeVal, b: RuntimeVal): number {
  if (a.type === 'Tuple' && b.type === 'Tuple') {
    const arrA = a.val as RuntimeVal[];
    const arrB = b.val as RuntimeVal[];
    const len = Math.min(arrA.length, arrB.length);
    for (let i = 0; i < len; i++) {
      const c = compareRuntimeVals(arrA[i], arrB[i]);
      if (c !== 0) return c;
    }
    return arrA.length - arrB.length;
  }
  if (a.val < b.val) return -1;
  if (a.val > b.val) return 1;
  return 0;
}

export function cloneRuntimeVal(v: RuntimeVal): RuntimeVal {
  if (!v) return makeNone();
  if (v.type === 'List') return makeList((v.val as RuntimeVal[]).map(cloneRuntimeVal));
  if (v.type === 'Tuple') return makeTuple((v.val as RuntimeVal[]).map(cloneRuntimeVal));
  if (v.type === 'Set') return { val: (v.val as RuntimeVal[]).map(cloneRuntimeVal), type: 'Set' };
  if (v.type === 'Dict') {
    return {
      val: (v.val as DictEntryRuntime[]).map((e) => ({
        key: cloneRuntimeVal(e.key),
        val: cloneRuntimeVal(e.val),
      })),
      type: 'Dict',
    };
  }
  return { ...v };
}

function reprString(s: string): string {
  if (s.includes("'") && !s.includes('"')) {
    return `"${s}"`;
  }
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

export function formatVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'Boolean') return v.val ? 'True' : 'False';
  if (v.type === 'Float') {
    if (v.isFloatFixed !== undefined) return Number(v.val).toFixed(v.isFloatFixed);
    return Number.isInteger(v.val) ? `${v.val}.0` : String(v.val);
  }
  if (v.type === 'Integer') return String(v.val);
  if (v.type === 'String') return reprString(String(v.val));
  if (v.type === 'List') {
    return `[${(v.val as RuntimeVal[]).map((it) => formatVal(it)).join(', ')}]`;
  }
  if (v.type === 'Tuple') {
    const items = (v.val as RuntimeVal[]).map((it) => formatVal(it));
    if (items.length === 1) return `(${items[0]},)`;
    return `(${items.join(', ')})`;
  }
  if (v.type === 'Set') {
    const items = v.val as RuntimeVal[];
    if (items.length === 0) return 'set()';
    return `{${items.map((it) => formatVal(it)).join(', ')}}`;
  }
  if (v.type === 'Dict') {
    const entries = v.val as DictEntryRuntime[];
    return `{${entries.map((e) => `${formatVal(e.key)}: ${formatVal(e.val)}`).join(', ')}}`;
  }
  return String(v.val);
}

export function formatPrintVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'String') return String(v.val);
  return formatVal(v);
}

export function isTruthy(v: RuntimeVal): boolean {
  if (!v || v.type === 'NoneType') return false;
  if (v.type === 'Boolean') return Boolean(v.val);
  if (v.type === 'Integer' || v.type === 'Float') return Number(v.val) !== 0;
  if (v.type === 'String') return String(v.val).length > 0;
  if (v.type === 'List' || v.type === 'Tuple' || v.type === 'Set' || v.type === 'Dict') {
    return (v.val as any[]).length > 0;
  }
  return Boolean(v.val);
}

function buildCollectionCharMap(items: RuntimeVal[], selected?: Set<number>): CharIndexCell[] {
  const len = items.length;
  return items.slice(0, 14).map((item, idx) => ({
    char: formatVal(item),
    posIdx: idx,
    negIdx: idx - len,
    isSelected: selected ? selected.has(idx) : false,
  }));
}

function buildStringCharMap(str: string, selected?: Set<number>): CharIndexCell[] {
  const chars = Array.from(str).slice(0, 14);
  const len = str.length;
  return chars.map((ch, idx) => ({
    char: ch === ' ' ? '␣' : ch,
    posIdx: idx,
    negIdx: idx - len,
    isSelected: selected ? selected.has(idx) : false,
  }));
}

function buildSetMembersVisual(items: RuntimeVal[]) {
  return items.map((it) => ({ value: formatVal(it), status: 'unique' as const }));
}

function buildDictEntriesVisual(entries: DictEntryRuntime[], highlightKey?: RuntimeVal) {
  return entries.map((e) => ({
    key: formatVal(e.key),
    value: formatVal(e.val),
    status: (highlightKey && valEquals(e.key, highlightKey) ? 'selected' : 'normal') as
      | 'selected'
      | 'normal',
  }));
}

function splitTopLevel(expr: string, sepChar = ','): string[] {
  const res: string[] = [];
  let cur = '';
  let depth = 0;
  let inQuote: string | null = null;

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (inQuote) {
      cur += ch;
      if (ch === '\\' && i + 1 < expr.length) {
        cur += expr[++i];
      } else if (ch === inQuote) {
        inQuote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      cur += ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;

    if (depth === 0 && expr.slice(i, i + sepChar.length) === sepChar) {
      res.push(cur.trim());
      cur = '';
      i += sepChar.length - 1;
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) res.push(cur.trim());
  return res;
}

function isSingleStringLiteral(s: string, isFString = false): boolean {
  const startIdx = isFString ? 1 : 0;
  const q = s[startIdx];
  if (q !== '"' && q !== "'") return false;
  if (!s.endsWith(q) || s.length < startIdx + 2) return false;
  for (let i = startIdx + 1; i < s.length - 1; i++) {
    if (s[i] === '\\') {
      i++;
      continue;
    }
    if (s[i] === q) return false;
  }
  return true;
}

function isOuterBalanced(s: string, openChar: string, closeChar: string): boolean {
  if (!s.startsWith(openChar) || !s.endsWith(closeChar)) return false;
  let depth = 0;
  let inQuote: string | null = null;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQuote) {
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      continue;
    }
    if (ch === openChar) depth++;
    else if (ch === closeChar) {
      depth--;
      if (depth === 0 && i < s.length - 1) return false;
    }
  }
  return depth === 0;
}

function findTopLevelKeywordOp(s: string, kw: string): number {
  let depth = 0;
  let inQuote: string | null = null;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQuote) {
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;
    if (depth === 0) {
      const prevOk = i === 0 || /\s/.test(s[i - 1]);
      const nextIdx = i + kw.length;
      const nextOk = nextIdx === s.length || /\s/.test(s[nextIdx]);
      if (prevOk && nextOk && s.slice(i, nextIdx) === kw) {
        return i;
      }
    }
  }
  return -1;
}

function findTopLevelComparison(s: string): { idx: number; op: string } | null {
  let depth = 0;
  let inQuote: string | null = null;
  const symOps = ['==', '!=', '<=', '>=', '<', '>'];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQuote) {
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;
    if (depth !== 0) continue;

    if (s.slice(i, i + 8) === ' not in ' && i > 0) {
      return { idx: i + 1, op: 'not in' };
    }
    if (s.slice(i, i + 4) === ' in ' && i > 0) {
      return { idx: i + 1, op: 'in' };
    }
    for (const op of symOps) {
      if (s.slice(i, i + op.length) === op) {
        return { idx: i, op };
      }
    }
  }
  return null;
}

function findTopLevelBinarySymbol(
  s: string,
  ops: string[],
  rightToLeft = false
): { idx: number; op: string } | null {
  let depth = 0;
  let inQuote: string | null = null;
  let best: { idx: number; op: string } | null = null;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQuote) {
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;
    if (depth !== 0) continue;

    for (const op of ops) {
      if (s.slice(i, i + op.length) === op) {
        if (op === '*' && (s[i + 1] === '*' || s[i - 1] === '*')) continue;
        if (op === '/' && (s[i + 1] === '/' || s[i - 1] === '/')) continue;
        if (
          op === '=' &&
          (s[i + 1] === '=' || ['=', '!', '<', '>', '+', '-', '*', '/', '%'].includes(s[i - 1]))
        )
          continue;
        if (op === '+' || op === '-') {
          const before = s.slice(0, i).trim();
          if (!before || /[+\-*/%(,<>=!:]$/.test(before)) continue;
        }
        best = { idx: i, op };
        if (rightToLeft) return best;
        i += op.length - 1;
        break;
      }
    }
  }
  return best;
}

function findTopLevelMethodDot(s: string): number {
  let depth = 0;
  let inQuote: string | null = null;
  let lastDot = -1;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQuote) {
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;
    if (depth === 0 && ch === '.') {
      const prevChar = i > 0 ? s[i - 1] : '';
      const nextChar = i + 1 < s.length ? s[i + 1] : '';
      if (/\d/.test(prevChar) && /\d/.test(nextChar)) continue;
      lastDot = i;
    }
  }
  return lastDot;
}

function findTopLevelTrailingBracket(s: string): { base: string; bracketContent: string } | null {
  if (!s.endsWith(']') || s.startsWith('[')) return null;
  let depth = 0;
  let inQuote: string | null = null;
  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (inQuote) {
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      continue;
    }
    if (ch === ']') depth++;
    else if (ch === '[') {
      depth--;
      if (depth === 0) {
        if (i === 0) return null;
        return {
          base: s.slice(0, i).trim(),
          bracketContent: s.slice(i + 1, -1).trim(),
        };
      }
    }
  }
  return null;
}

function computeSliceIndices(
  len: number,
  startVal: number | null,
  stopVal: number | null,
  stepVal: number | null
): number[] {
  const step = stepVal === null ? 1 : stepVal;
  if (step === 0) return [];
  let start: number;
  let stop: number;
  if (step > 0) {
    start = startVal === null ? 0 : startVal < 0 ? Math.max(0, len + startVal) : Math.min(len, startVal);
    stop = stopVal === null ? len : stopVal < 0 ? Math.max(0, len + stopVal) : Math.min(len, stopVal);
  } else {
    start =
      startVal === null ? len - 1 : startVal < 0 ? Math.max(-1, len + startVal) : Math.min(len - 1, startVal);
    stop = stopVal === null ? -1 : stopVal < 0 ? Math.max(-1, len + stopVal) : Math.min(len, stopVal);
  }
  const indices: number[] = [];
  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      if (i >= 0 && i < len) indices.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      if (i >= 0 && i < len) indices.push(i);
    }
  }
  return indices;
}

export function assignLoopTarget(
  targetStr: string,
  val: RuntimeVal,
  env: Record<string, RuntimeVal>
) {
  const t = targetStr.trim().replace(/^\((.+)\)$/, '$1').trim();
  const topParts = splitTopLevel(t, ',');
  if (topParts.length === 1) {
    env[topParts[0]] = cloneRuntimeVal(val);
    return;
  }
  const items =
    val.type === 'List' || val.type === 'Tuple' || val.type === 'Set'
      ? (val.val as RuntimeVal[])
      : [];
  for (let i = 0; i < topParts.length; i++) {
    assignLoopTarget(topParts[i], items[i] ?? makeNone(), env);
  }
}

export function evalGeneratorItems(genExpr: string, ctx: ProblemEvalContext): RuntimeVal[] {
  const clean = genExpr.trim().replace(/^\((.+)\)$/, '$1').trim();
  const firstFor = findTopLevelKeywordOp(clean, 'for');
  if (firstFor === -1) return [];
  const mapExpr = clean.slice(0, firstFor).trim();
  const rest = clean.slice(firstFor + 3).trim();
  const ifIdx = findTopLevelKeywordOp(rest, 'if');
  const forClause = ifIdx !== -1 ? rest.slice(0, ifIdx).trim() : rest;
  const condExpr = ifIdx !== -1 ? rest.slice(ifIdx + 2).trim() : null;
  const fm = forClause.match(/^(.+?)\s+in\s+(.+)$/);
  if (!fm) return [];

  const loopTarget = fm[1].trim();
  const iterSource = fm[2].trim();
  const srcItems = evalIterableItems(iterSource, ctx);
  const out: RuntimeVal[] = [];
  for (const itemVal of srcItems) {
    assignLoopTarget(loopTarget, itemVal, ctx.env);
    const keep = condExpr ? isTruthy(evalProblemExpr(condExpr, ctx)) : true;
    if (keep) {
      out.push(evalProblemExpr(mapExpr, ctx));
    }
  }
  return out;
}

export function evalIterableItems(iterExpr: string, ctx: ProblemEvalContext): RuntimeVal[] {
  const s = iterExpr.trim();
  const unwrapped = isOuterBalanced(s, '(', ')') ? s.slice(1, -1).trim() : s;

  if (
    findTopLevelKeywordOp(unwrapped, 'for') !== -1 &&
    !s.startsWith('[') &&
    !s.startsWith('{')
  ) {
    return evalGeneratorItems(unwrapped, ctx);
  }

  const rangeMatch = s.match(/^range\((.+)\)$/);
  if (rangeMatch) {
    const rArgs = splitTopLevel(rangeMatch[1]).map((a) => Number(evalProblemExpr(a, ctx).val));
    let start = 0;
    let stop = 0;
    let step = 1;
    if (rArgs.length === 1) stop = rArgs[0];
    else if (rArgs.length === 2) {
      start = rArgs[0];
      stop = rArgs[1];
    } else if (rArgs.length >= 3) {
      start = rArgs[0];
      stop = rArgs[1];
      step = rArgs[2];
    }
    const items: RuntimeVal[] = [];
    if (step > 0) {
      for (let k = start; k < stop; k += step) items.push(makeInt(k));
    } else if (step < 0) {
      for (let k = start; k > stop; k += step) items.push(makeInt(k));
    }
    return items;
  }

  const enumMatch = s.match(/^enumerate\((.+)\)$/);
  if (enumMatch) {
    const eArgs = splitTopLevel(enumMatch[1]);
    const baseItems = evalIterableItems(eArgs[0], ctx);
    const startIdx = eArgs[1] ? Number(evalProblemExpr(eArgs[1], ctx).val) : 0;
    return baseItems.map((it, idx) => makeTuple([makeInt(startIdx + idx), it]));
  }

  const v = evalProblemExpr(s, ctx);
  if (v.type === 'List' || v.type === 'Tuple' || v.type === 'Set') {
    return (v.val as RuntimeVal[]).map(cloneRuntimeVal);
  }
  if (v.type === 'Dict') {
    return (v.val as DictEntryRuntime[]).map((e) => cloneRuntimeVal(e.key));
  }
  if (v.type === 'String') {
    return Array.from(String(v.val)).map(makeStr);
  }
  return [];
}

function executeFunctionCall(
  fnDef: FuncDefRuntime,
  argVals: RuntimeVal[],
  ctx: ProblemEvalContext
): RuntimeVal {
  const localEnv: Record<string, RuntimeVal> = { ...ctx.env };
  for (let i = 0; i < fnDef.params.length; i++) {
    localEnv[fnDef.params[i]] = cloneRuntimeVal(argVals[i] ?? makeNone());
  }
  const frameStr = `${fnDef.name}(${argVals.map(formatVal).join(', ')})`;
  ctx.callStack.push(frameStr);
  ctx.detectedVisualType = fnDef.name === 'fib' ? 'fibonacci_dp' : 'function_call_stack';
  ctx.detectedConcept =
    fnDef.name === 'fib'
      ? `Memoized Recursive Call (${frameStr})`
      : `Function Call Execution (${frameStr})`;

  const subCtx: ProblemEvalContext = {
    ...ctx,
    env: localEnv,
  };

  function runFuncNodes(nodes: BlockNode[]): { returned?: RuntimeVal; broke?: boolean } {
    for (const node of nodes) {
      if (node.kind === 'simple') {
        const t = node.line.trimmed;
        if (t.startsWith('return ')) {
          const retVal = evalProblemExpr(t.slice(7).trim(), subCtx);
          return { returned: retVal };
        }
        if (t === 'return') return { returned: makeNone() };
        if (t === 'break') return { broke: true };

        // Nested dict/list assignment inside function (e.g. `memo[n] = fib(n - 1) + fib(n - 2)`)
        const idxAssign = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*=\s*(.+)$/);
        if (idxAssign) {
          const objName = idxAssign[1];
          const kVal = evalProblemExpr(idxAssign[2], subCtx);
          const rhsVal = evalProblemExpr(idxAssign[3], subCtx);
          const targetObj = subCtx.env[objName];
          if (targetObj?.type === 'Dict') {
            const entries = targetObj.val as DictEntryRuntime[];
            const existing = entries.find((e) => valEquals(e.key, kVal));
            if (existing) existing.val = cloneRuntimeVal(rhsVal);
            else entries.push({ key: cloneRuntimeVal(kVal), val: cloneRuntimeVal(rhsVal) });
          } else if (targetObj?.type === 'List') {
            const arr = targetObj.val as RuntimeVal[];
            arr[Number(kVal.val)] = cloneRuntimeVal(rhsVal);
          }
          continue;
        }

        const assignMatch = findTopLevelBinarySymbol(t, ['=']);
        if (assignMatch) {
          const lhs = t.slice(0, assignMatch.idx).trim();
          const rhs = t.slice(assignMatch.idx + 1).trim();
          const rhsVal = evalProblemExpr(rhs, subCtx);
          assignLoopTarget(lhs, rhsVal, subCtx.env);
          continue;
        }

        evalProblemExpr(t, subCtx);
        continue;
      }

      if (node.kind === 'if_chain') {
        for (const br of node.branches) {
          if (br.branchType === 'else' || isTruthy(evalProblemExpr(br.condExpr || 'True', subCtx))) {
            const r = runFuncNodes(br.body);
            if (r.returned !== undefined || r.broke) return r;
            break;
          }
        }
        continue;
      }

      if (node.kind === 'while_loop') {
        let guard = 0;
        while (guard++ < 500 && isTruthy(evalProblemExpr(node.condExpr, subCtx))) {
          const r = runFuncNodes(node.body);
          if (r.returned !== undefined) return r;
          if (r.broke) break;
        }
        continue;
      }

      if (node.kind === 'for_loop') {
        const items = evalIterableItems(node.iterExpr, subCtx);
        for (const it of items) {
          assignLoopTarget(node.targetStr, it, subCtx.env);
          const r = runFuncNodes(node.body);
          if (r.returned !== undefined) return r;
          if (r.broke) break;
        }
        continue;
      }
    }
    return {};
  }

  const res = runFuncNodes(fnDef.body);
  return res.returned ?? makeNone();
}

export function evalProblemExpr(expr: string, ctx: ProblemEvalContext): RuntimeVal {
  const s = expr.trim();
  if (!s) return makeNone();

  if (s === 'True') return makeBool(true);
  if (s === 'False') return makeBool(false);
  if (s === 'None') return makeNone();
  if (/^-?\d+$/.test(s)) return makeInt(parseInt(s, 10));
  if (/^-?\d+\.\d+$/.test(s)) return makeFloat(parseFloat(s));

  // F-string
  if ((s.startsWith('f"') || s.startsWith("f'")) && isSingleStringLiteral(s, true)) {
    const rawBody = s.slice(2, -1);
    let out = '';
    let i = 0;
    while (i < rawBody.length) {
      if (rawBody[i] === '{') {
        let j = i + 1;
        let depth = 1;
        while (j < rawBody.length && depth > 0) {
          if (rawBody[j] === '{') depth++;
          else if (rawBody[j] === '}') depth--;
          j++;
        }
        const inside = rawBody.slice(i + 1, j - 1).trim();
        const fmtColon = findTopLevelBinarySymbol(inside, [':']);
        if (fmtColon && /\.\d+f$/.test(inside.slice(fmtColon.idx + 1))) {
          const innerExpr = inside.slice(0, fmtColon.idx).trim();
          const digits = parseInt(inside.slice(fmtColon.idx + 2, -1), 10);
          const v = evalProblemExpr(innerExpr, ctx);
          out += Number(v.val).toFixed(digits);
        } else {
          const v = evalProblemExpr(inside, ctx);
          out += formatPrintVal(v);
        }
        i = j;
      } else {
        out += rawBody[i];
        i++;
      }
    }
    return makeStr(out);
  }

  // String literal
  if (isSingleStringLiteral(s, false)) {
    return makeStr(s.slice(1, -1));
  }

  // Dictionary or Set literal / comprehension: { ... }
  if (isOuterBalanced(s, '{', '}')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return makeDict([]);

    const firstFor = findTopLevelKeywordOp(inner, 'for');
    if (firstFor !== -1) {
      const headExpr = inner.slice(0, firstFor).trim();
      const rest = inner.slice(firstFor + 3).trim();
      const ifIdx = findTopLevelKeywordOp(rest, 'if');
      const forClause = ifIdx !== -1 ? rest.slice(0, ifIdx).trim() : rest;
      const condExpr = ifIdx !== -1 ? rest.slice(ifIdx + 2).trim() : null;
      const fm = forClause.match(/^(.+?)\s+in\s+(.+)$/);
      const colonMatch = findTopLevelBinarySymbol(headExpr, [':'], true);
      if (fm && colonMatch) {
        const kExpr = headExpr.slice(0, colonMatch.idx).trim();
        const vExpr = headExpr.slice(colonMatch.idx + 1).trim();
        const loopTarget = fm[1].trim();
        const iterSource = fm[2].trim();
        const srcItems = evalIterableItems(iterSource, ctx);
        const entries: DictEntryRuntime[] = [];
        for (const itemVal of srcItems) {
          assignLoopTarget(loopTarget, itemVal, ctx.env);
          if (!condExpr || isTruthy(evalProblemExpr(condExpr, ctx))) {
            entries.push({
              key: evalProblemExpr(kExpr, ctx),
              val: evalProblemExpr(vExpr, ctx),
            });
          }
        }
        const res = makeDict(entries);
        ctx.dictEntries = buildDictEntriesVisual(res.val as DictEntryRuntime[]);
        return res;
      }
    }

    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    const firstColon = parts[0] ? findTopLevelBinarySymbol(parts[0], [':'], true) : null;
    if (firstColon) {
      const entries: DictEntryRuntime[] = [];
      for (const p of parts) {
        const cm = findTopLevelBinarySymbol(p, [':'], true);
        if (cm) {
          entries.push({
            key: evalProblemExpr(p.slice(0, cm.idx).trim(), ctx),
            val: evalProblemExpr(p.slice(cm.idx + 1).trim(), ctx),
          });
        }
      }
      const res = makeDict(entries);
      ctx.dictEntries = buildDictEntriesVisual(res.val as DictEntryRuntime[]);
      return res;
    }
    const items = parts.map((p) => evalProblemExpr(p, ctx));
    const res = makeSet(items);
    ctx.setMembers = buildSetMembersVisual(res.val as RuntimeVal[]);
    return res;
  }

  // List literal or List Comprehension: [ ... ]
  if (isOuterBalanced(s, '[', ']')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return makeList([]);
    const firstFor = findTopLevelKeywordOp(inner, 'for');
    if (firstFor !== -1) {
      const mapExpr = inner.slice(0, firstFor).trim();
      const rest = inner.slice(firstFor + 3).trim();
      const ifIdx = findTopLevelKeywordOp(rest, 'if');
      const forClause = ifIdx !== -1 ? rest.slice(0, ifIdx).trim() : rest;
      const condExpr = ifIdx !== -1 ? rest.slice(ifIdx + 2).trim() : null;
      const fm = forClause.match(/^(.+?)\s+in\s+(.+)$/);
      if (fm) {
        const loopTarget = fm[1].trim();
        const iterSource = fm[2].trim();
        const srcItems = evalIterableItems(iterSource, ctx);
        const outItems: RuntimeVal[] = [];
        for (const itemVal of srcItems) {
          assignLoopTarget(loopTarget, itemVal, ctx.env);
          if (!condExpr || isTruthy(evalProblemExpr(condExpr, ctx))) {
            outItems.push(evalProblemExpr(mapExpr, ctx));
          }
        }
        const res = makeList(outItems);
        ctx.charMap = buildCollectionCharMap(outItems);
        return res;
      }
    }
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    const items = parts.map((p) => evalProblemExpr(p, ctx));
    ctx.charMap = buildCollectionCharMap(items);
    return makeList(items);
  }

  // Parentheses or Tuple literal: ( ... )
  if (isOuterBalanced(s, '(', ')')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return makeTuple([]);
    const parts = splitTopLevel(inner, ',');
    if (parts.length === 1 && !inner.endsWith(',')) {
      return evalProblemExpr(inner, ctx);
    }
    return makeTuple(parts.filter((p) => p.length > 0).map((p) => evalProblemExpr(p, ctx)));
  }

  // Tuple packing without parentheses (e.g. `b, a + b` or `y, x % y`)
  const topCommaParts = splitTopLevel(s, ',');
  if (topCommaParts.length > 1) {
    return makeTuple(topCommaParts.map((p) => evalProblemExpr(p, ctx)));
  }

  // Ternary conditional expression: `A if COND else B`
  const ternIfIdx = findTopLevelKeywordOp(s, 'if');
  const ternElseIdx = findTopLevelKeywordOp(s, 'else');
  if (ternIfIdx !== -1 && ternElseIdx !== -1 && ternElseIdx > ternIfIdx) {
    const trueExpr = s.slice(0, ternIfIdx).trim();
    const condExpr = s.slice(ternIfIdx + 2, ternElseIdx).trim();
    const falseExpr = s.slice(ternElseIdx + 4).trim();
    const cVal = evalProblemExpr(condExpr, ctx);
    return isTruthy(cVal) ? evalProblemExpr(trueExpr, ctx) : evalProblemExpr(falseExpr, ctx);
  }

  // Logical OR / AND / NOT
  const orIdx = findTopLevelKeywordOp(s, 'or');
  if (orIdx !== -1) {
    const lv = evalProblemExpr(s.slice(0, orIdx), ctx);
    if (isTruthy(lv)) return makeBool(true);
    const rv = evalProblemExpr(s.slice(orIdx + 2), ctx);
    return makeBool(isTruthy(rv));
  }

  const andIdx = findTopLevelKeywordOp(s, 'and');
  if (andIdx !== -1) {
    const lv = evalProblemExpr(s.slice(0, andIdx), ctx);
    if (!isTruthy(lv)) return makeBool(false);
    const rv = evalProblemExpr(s.slice(andIdx + 3), ctx);
    return makeBool(isTruthy(rv));
  }

  if (s.startsWith('not ') && findTopLevelKeywordOp(s, 'not') === 0) {
    return makeBool(!isTruthy(evalProblemExpr(s.slice(4), ctx)));
  }

  // Comparisons & Membership
  const cmp = findTopLevelComparison(s);
  if (cmp) {
    const leftStr = s.slice(0, cmp.idx).trim();
    const rightStr = s.slice(cmp.idx + cmp.op.length).trim();
    const lv = evalProblemExpr(leftStr, ctx);
    const rv = evalProblemExpr(rightStr, ctx);

    let res = false;
    if (cmp.op === 'in' || cmp.op === 'not in') {
      let found = false;
      if (rv.type === 'Set' || rv.type === 'List' || rv.type === 'Tuple') {
        found = (rv.val as RuntimeVal[]).some((it) => valEquals(it, lv));
      } else if (rv.type === 'Dict') {
        found = (rv.val as DictEntryRuntime[]).some((e) => valEquals(e.key, lv));
      } else if (rv.type === 'String') {
        found = String(rv.val).includes(String(lv.val));
      }
      res = cmp.op === 'in' ? found : !found;
      return makeBool(res);
    }

    if (cmp.op === '==') res = valEquals(lv, rv);
    else if (cmp.op === '!=') res = !valEquals(lv, rv);
    else if (cmp.op === '<') res = lv.val < rv.val;
    else if (cmp.op === '>') res = lv.val > rv.val;
    else if (cmp.op === '<=') res = lv.val <= rv.val;
    else if (cmp.op === '>=') res = lv.val >= rv.val;
    return makeBool(res);
  }

  // Set Intersection `&` / Union `|`
  const ampOp = findTopLevelBinarySymbol(s, ['&', '|']);
  if (ampOp) {
    const lv = evalProblemExpr(s.slice(0, ampOp.idx), ctx);
    const rv = evalProblemExpr(s.slice(ampOp.idx + 1), ctx);
    if (lv.type === 'Set' && rv.type === 'Set') {
      const arrA = lv.val as RuntimeVal[];
      const arrB = rv.val as RuntimeVal[];
      if (ampOp.op === '&') {
        return makeSet(arrA.filter((a) => arrB.some((b) => valEquals(a, b))));
      }
      return makeSet([...arrA, ...arrB]);
    }
  }

  // Binary + and -
  const addSub = findTopLevelBinarySymbol(s, ['+', '-']);
  if (addSub) {
    const lv = evalProblemExpr(s.slice(0, addSub.idx), ctx);
    const rv = evalProblemExpr(s.slice(addSub.idx + 1), ctx);
    if (addSub.op === '+' && lv.type === 'List' && rv.type === 'List') {
      return makeList([
        ...(lv.val as RuntimeVal[]).map(cloneRuntimeVal),
        ...(rv.val as RuntimeVal[]).map(cloneRuntimeVal),
      ]);
    }
    if (addSub.op === '+' && lv.type === 'String' && rv.type === 'String') {
      return makeStr(String(lv.val) + String(rv.val));
    }
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const num =
      addSub.op === '+' ? Number(lv.val) + Number(rv.val) : Number(lv.val) - Number(rv.val);
    return isF ? makeFloat(num) : makeInt(num);
  }

  // Binary *, /, //, %
  const mulDiv = findTopLevelBinarySymbol(s, ['//', '*', '/', '%']);
  if (mulDiv) {
    const lv = evalProblemExpr(s.slice(0, mulDiv.idx), ctx);
    const rv = evalProblemExpr(s.slice(mulDiv.idx + mulDiv.op.length), ctx);
    if (mulDiv.op === '*' && lv.type === 'List' && rv.type === 'Integer') {
      const count = Math.max(0, Number(rv.val));
      const base = lv.val as RuntimeVal[];
      const out: RuntimeVal[] = [];
      for (let k = 0; k < count; k++) {
        for (const it of base) out.push(cloneRuntimeVal(it));
      }
      return makeList(out);
    }
    const isF = lv.type === 'Float' || rv.type === 'Float';
    if (mulDiv.op === '*') {
      const n = Number(lv.val) * Number(rv.val);
      return isF ? makeFloat(n) : makeInt(n);
    }
    if (mulDiv.op === '/') {
      return makeFloat(Number(lv.val) / Number(rv.val));
    }
    if (mulDiv.op === '//') {
      const n = Math.floor(Number(lv.val) / Number(rv.val));
      return isF ? makeFloat(n) : makeInt(n);
    }
    const n = Number(lv.val);
    const d = Number(rv.val);
    const mod = ((n % d) + d) % d;
    if (s.includes('% 10')) {
      ctx.detectedVisualType = 'digit_extraction';
      ctx.detectedConcept = `Extract Last Digit (${n} % 10 ➔ ${mod})`;
    }
    return isF ? makeFloat(mod) : makeInt(mod);
  }

  // Exponentiation (**)
  const powMatch = findTopLevelBinarySymbol(s, ['**'], true);
  if (powMatch) {
    const lv = evalProblemExpr(s.slice(0, powMatch.idx), ctx);
    const rv = evalProblemExpr(s.slice(powMatch.idx + 2), ctx);
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const n = Math.pow(Number(lv.val), Number(rv.val));
    return isF ? makeFloat(n) : makeInt(n);
  }

  // Unary - / +
  if ((s.startsWith('-') || s.startsWith('+')) && !/^[-+]\d+(\.\d+)?$/.test(s)) {
    const argVal = evalProblemExpr(s.slice(1), ctx);
    const num = s[0] === '-' ? -Number(argVal.val) : +Number(argVal.val);
    return argVal.type === 'Float' ? makeFloat(num) : makeInt(num);
  }

  // Indexing & Slicing: `nums[mid]`, `s[::-1]`, `nums[-k:]`, `nums[:-k]`
  const bracketMatch = findTopLevelTrailingBracket(s);
  if (bracketMatch) {
    const targetVal = evalProblemExpr(bracketMatch.base, ctx);
    const inner = bracketMatch.bracketContent;

    if (targetVal.type === 'List' || targetVal.type === 'Tuple') {
      const arr = targetVal.val as RuntimeVal[];
      if (inner.includes(':')) {
        const parts = inner.split(':').map((p) => p.trim());
        const startVal = parts[0] ? Number(evalProblemExpr(parts[0], ctx).val) : null;
        const stopVal =
          parts[1] !== undefined && parts[1] !== '' ? Number(evalProblemExpr(parts[1], ctx).val) : null;
        const stepVal =
          parts[2] !== undefined && parts[2] !== '' ? Number(evalProblemExpr(parts[2], ctx).val) : null;
        const indices = computeSliceIndices(arr.length, startVal, stopVal, stepVal);
        const resItems = indices.map((i) => cloneRuntimeVal(arr[i]));
        return targetVal.type === 'Tuple' ? makeTuple(resItems) : makeList(resItems);
      }
      const rawIdx = Number(evalProblemExpr(inner, ctx).val);
      const actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
      ctx.charMap = buildCollectionCharMap(arr, new Set([actualIdx]));
      return arr[actualIdx] ?? makeNone();
    }

    if (targetVal.type === 'String') {
      const str = String(targetVal.val);
      const chars = Array.from(str);
      if (inner.includes(':')) {
        const parts = inner.split(':').map((p) => p.trim());
        const startVal = parts[0] ? Number(evalProblemExpr(parts[0], ctx).val) : null;
        const stopVal =
          parts[1] !== undefined && parts[1] !== '' ? Number(evalProblemExpr(parts[1], ctx).val) : null;
        const stepVal =
          parts[2] !== undefined && parts[2] !== '' ? Number(evalProblemExpr(parts[2], ctx).val) : null;
        const indices = computeSliceIndices(chars.length, startVal, stopVal, stepVal);
        return makeStr(indices.map((i) => chars[i]).join(''));
      }
      const rawIdx = Number(evalProblemExpr(inner, ctx).val);
      const actualIdx = rawIdx < 0 ? chars.length + rawIdx : rawIdx;
      ctx.charMap = buildStringCharMap(str, new Set([actualIdx]));
      return makeStr(chars[actualIdx] ?? '');
    }

    if (targetVal.type === 'Dict') {
      const entries = targetVal.val as DictEntryRuntime[];
      const keyVal = evalProblemExpr(inner, ctx);
      const found = entries.find((e) => valEquals(e.key, keyVal));
      ctx.dictEntries = buildDictEntriesVisual(entries, keyVal);
      return found ? found.val : makeNone();
    }
  }

  // Method calls: `.append()`, `.pop()`, `.add()`, `.get()`, `.setdefault()`, `.values()`, `.items()`, `.join()`, `.split()`, `.isalpha()`, `.isdigit()`, `.isalnum()`, `.lower()`, `.upper()`, `.count()`
  const dotIdx = findTopLevelMethodDot(s);
  if (dotIdx !== -1) {
    const objExpr = s.slice(0, dotIdx).trim();
    const rightPart = s.slice(dotIdx + 1).trim();
    const mMatch = rightPart.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
    if (mMatch) {
      const methodName = mMatch[1];
      const argsInner = mMatch[2].trim();
      const objVal = evalProblemExpr(objExpr, ctx);

      if (objVal.type === 'String' && methodName === 'join') {
        const sep = String(objVal.val);
        const items = evalIterableItems(argsInner, ctx);
        return makeStr(items.map(formatPrintVal).join(sep));
      }

      const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalProblemExpr(a, ctx)) : [];

      if (objVal.type === 'String') {
        const str = String(objVal.val);
        if (methodName === 'isalpha') return makeBool(str.length > 0 && /^[a-zA-Z]+$/.test(str));
        if (methodName === 'isdigit') return makeBool(str.length > 0 && /^\d+$/.test(str));
        if (methodName === 'isalnum') return makeBool(str.length > 0 && /^[a-zA-Z0-9]+$/.test(str));
        if (methodName === 'lower') return makeStr(str.toLowerCase());
        if (methodName === 'upper') return makeStr(str.toUpperCase());
        if (methodName === 'strip') return makeStr(str.trim());
        if (methodName === 'split') {
          if (argVals.length === 0) {
            const t = str.trim();
            return makeList((t ? t.split(/\s+/) : []).map(makeStr));
          }
          return makeList(str.split(String(argVals[0].val)).map(makeStr));
        }
        if (methodName === 'count') {
          const sub = String(argVals[0]?.val ?? '');
          return makeInt(sub ? str.split(sub).length - 1 : 0);
        }
      }

      if (objVal.type === 'List') {
        const arr = objVal.val as RuntimeVal[];
        if (methodName === 'append') {
          arr.push(cloneRuntimeVal(argVals[0]));
          ctx.charMap = buildCollectionCharMap(arr, new Set([arr.length - 1]));
          return makeNone();
        }
        if (methodName === 'pop') {
          const idx = argVals[0] !== undefined ? Number(argVals[0].val) : arr.length - 1;
          const actualIdx = idx < 0 ? arr.length + idx : idx;
          const [removed] = arr.splice(actualIdx, 1);
          ctx.charMap = buildCollectionCharMap(arr);
          return removed ?? makeNone();
        }
        if (methodName === 'count') {
          return makeInt(arr.filter((it) => valEquals(it, argVals[0])).length);
        }
      }

      if (objVal.type === 'Set') {
        const setArr = objVal.val as RuntimeVal[];
        if (methodName === 'add') {
          const item = argVals[0];
          if (!setArr.some((el) => valEquals(el, item))) {
            setArr.push(cloneRuntimeVal(item));
          }
          ctx.setMembers = buildSetMembersVisual(setArr);
          return makeNone();
        }
      }

      if (objVal.type === 'Dict') {
        const entries = objVal.val as DictEntryRuntime[];
        if (methodName === 'get') {
          const found = entries.find((e) => valEquals(e.key, argVals[0]));
          return found ? cloneRuntimeVal(found.val) : cloneRuntimeVal(argVals[1] ?? makeNone());
        }
        if (methodName === 'setdefault') {
          const keyTarget = argVals[0];
          const defaultVal = argVals[1] ?? makeNone();
          let existing = entries.find((e) => valEquals(e.key, keyTarget));
          if (!existing) {
            existing = { key: cloneRuntimeVal(keyTarget), val: cloneRuntimeVal(defaultVal) };
            entries.push(existing);
          }
          ctx.dictEntries = buildDictEntriesVisual(entries, keyTarget);
          return existing.val;
        }
        if (methodName === 'values') {
          return makeList(entries.map((e) => cloneRuntimeVal(e.val)));
        }
        if (methodName === 'keys') {
          return makeList(entries.map((e) => cloneRuntimeVal(e.key)));
        }
        if (methodName === 'items') {
          return makeList(
            entries.map((e) => makeTuple([cloneRuntimeVal(e.key), cloneRuntimeVal(e.val)]))
          );
        }
      }
    }
  }

  // Function Calls (User-defined & Built-in)
  const fnMatch = s.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
  if (fnMatch) {
    const fn = fnMatch[1];
    const inner = fnMatch[2].trim();

    if (fn in ctx.functions) {
      const argVals = inner ? splitTopLevel(inner).map((a) => evalProblemExpr(a, ctx)) : [];
      return executeFunctionCall(ctx.functions[fn], argVals, ctx);
    }

    if (fn === 'input') {
      const line = ctx.inputCursor < ctx.inputs.length ? ctx.inputs[ctx.inputCursor++] : '';
      return makeStr(line);
    }

    if (fn === 'all') {
      const items = evalIterableItems(inner, ctx);
      return makeBool(items.every(isTruthy));
    }

    if (fn === 'any') {
      const items = evalIterableItems(inner, ctx);
      return makeBool(items.some(isTruthy));
    }

    if (fn === 'next') {
      const topArgs = splitTopLevel(inner);
      const items = evalIterableItems(topArgs[0], ctx);
      if (items.length > 0) return items[0];
      return topArgs[1] ? evalProblemExpr(topArgs[1], ctx) : makeNone();
    }

    if (fn === 'sum' && findTopLevelKeywordOp(inner, 'for') !== -1) {
      const items = evalGeneratorItems(inner, ctx);
      let total = 0;
      let isF = false;
      for (const it of items) {
        if (it.type === 'Float') isF = true;
        total += Number(it.val);
      }
      return isF ? makeFloat(total) : makeInt(total);
    }

    if (fn === 'set') {
      if (!inner) return makeSet([]);
      return makeSet(evalIterableItems(inner, ctx));
    }

    if (fn === 'list') {
      if (!inner) return makeList([]);
      return makeList(evalIterableItems(inner, ctx));
    }

    if ((fn === 'max' || fn === 'min') && inner.includes('key=')) {
      const topArgs = splitTopLevel(inner);
      const seqItems = evalIterableItems(topArgs[0], ctx);
      const keyArg = topArgs.find((a) => a.startsWith('key='));
      const keyFnStr = keyArg ? keyArg.slice(4).trim() : '';
      if (seqItems.length === 0) return makeNone();

      const evalKeyFor = (item: RuntimeVal): RuntimeVal => {
        if (keyFnStr === 'len') {
          return makeInt(String(item.val).length);
        }
        if (keyFnStr.endsWith('.get')) {
          const dictName = keyFnStr.slice(0, -4).trim();
          const dObj = ctx.env[dictName];
          if (dObj?.type === 'Dict') {
            const found = (dObj.val as DictEntryRuntime[]).find((e) => valEquals(e.key, item));
            return found ? found.val : makeInt(0);
          }
        }
        return item;
      };

      let bestItem = seqItems[0];
      let bestKey = evalKeyFor(bestItem);
      for (let i = 1; i < seqItems.length; i++) {
        const curKey = evalKeyFor(seqItems[i]);
        const cmpVal = compareRuntimeVals(curKey, bestKey);
        if (fn === 'max' ? cmpVal > 0 : cmpVal < 0) {
          bestItem = seqItems[i];
          bestKey = curKey;
        }
      }
      return cloneRuntimeVal(bestItem);
    }

    const argVals = inner ? splitTopLevel(inner).map((a) => evalProblemExpr(a, ctx)) : [];

    if (fn === 'int') return makeInt(Math.trunc(Number(argVals[0]?.val ?? 0)));
    if (fn === 'float') return makeFloat(Number(argVals[0]?.val ?? 0));
    if (fn === 'str') return makeStr(formatPrintVal(argVals[0]));
    if (fn === 'round') {
      const num = Number(argVals[0]?.val ?? 0);
      const digits = argVals[1] !== undefined ? Number(argVals[1].val) : 0;
      if (digits === 0) return makeInt(Math.round(num));
      const factor = Math.pow(10, digits);
      return makeFloat(Math.round(num * factor) / factor, digits);
    }

    if (fn === 'len') {
      const target = argVals[0];
      const len =
        target?.type === 'List' ||
        target?.type === 'Tuple' ||
        target?.type === 'Set' ||
        target?.type === 'Dict'
          ? (target.val as any[]).length
          : String(target?.val ?? '').length;
      return makeInt(len);
    }

    if (fn === 'sum') {
      const arr = (argVals[0]?.val as RuntimeVal[]) || [];
      let sumVal = 0;
      let isF = false;
      for (const it of arr) {
        if (it.type === 'Float') isF = true;
        sumVal += Number(it.val);
      }
      return isF ? makeFloat(sumVal) : makeInt(sumVal);
    }

    if (fn === 'max' || fn === 'min') {
      const candidates =
        argVals.length === 1 &&
        (argVals[0].type === 'List' || argVals[0].type === 'Tuple' || argVals[0].type === 'Set')
          ? (argVals[0].val as RuntimeVal[])
          : argVals;
      if (candidates.length === 0) return makeInt(0);
      let best = candidates[0];
      for (let i = 1; i < candidates.length; i++) {
        if (fn === 'max' ? candidates[i].val > best.val : candidates[i].val < best.val) {
          best = candidates[i];
        }
      }
      return cloneRuntimeVal(best);
    }

    if (fn === 'sorted') {
      const items = evalIterableItems(inner, ctx);
      items.sort(compareRuntimeVals);
      return makeList(items);
    }
  }

  if (s in ctx.env) {
    return ctx.env[s];
  }

  return makeNone();
}

interface SourceStmtLine {
  lineNum: number;
  raw: string;
  indent: number;
  trimmed: string;
}

export type BlockNode =
  | { kind: 'simple'; line: SourceStmtLine }
  | {
      kind: 'func_def';
      headerLine: SourceStmtLine;
      name: string;
      params: string[];
      body: BlockNode[];
    }
  | {
      kind: 'if_chain';
      branches: {
        headerLine: SourceStmtLine;
        branchType: 'if' | 'elif' | 'else';
        condExpr?: string;
        body: BlockNode[];
      }[];
    }
  | {
      kind: 'for_loop';
      headerLine: SourceStmtLine;
      targetStr: string;
      iterExpr: string;
      body: BlockNode[];
    }
  | {
      kind: 'while_loop';
      headerLine: SourceStmtLine;
      condExpr: string;
      body: BlockNode[];
    };

function buildLogicalStmtLines(code: string): SourceStmtLine[] {
  const rawLines = code.split('\n');
  const stmtLines: SourceStmtLine[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const raw = rawLines[i];
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      i++;
      continue;
    }
    const indent = (raw.match(/^(\s*)/)?.[1] || '').length;
    const startLineNum = i + 1;

    let combinedTrimmed = trimmed;
    let combinedRaw = raw;
    let depth = 0;
    let inQuote: string | null = null;

    const scanLine = (str: string) => {
      for (let c = 0; c < str.length; c++) {
        const ch = str[c];
        if (inQuote) {
          if (ch === inQuote && str[c - 1] !== '\\') inQuote = null;
          continue;
        }
        if (ch === '"' || ch === "'") {
          inQuote = ch;
          continue;
        }
        if (ch === '{' || ch === '[' || ch === '(') depth++;
        else if (ch === '}' || ch === ']' || ch === ')') depth--;
      }
    };

    scanLine(trimmed);
    while (depth > 0 && i + 1 < rawLines.length) {
      i++;
      const nextPart = rawLines[i].trim();
      combinedTrimmed += ' ' + nextPart;
      combinedRaw += ' ' + nextPart;
      scanLine(nextPart);
    }

    stmtLines.push({
      lineNum: startLineNum,
      raw: combinedRaw,
      indent,
      trimmed: combinedTrimmed,
    });
    i++;
  }

  return stmtLines;
}

function parseBlocks(
  lines: SourceStmtLine[],
  startIdx: number,
  minIndent: number
): { nodes: BlockNode[]; nextIdx: number } {
  const nodes: BlockNode[] = [];
  let i = startIdx;

  while (i < lines.length) {
    const cur = lines[i];
    if (cur.indent < minIndent) break;

    const defMatch = cur.trimmed.match(/^def\s+([a-zA-Z_]\w*)\((.*)\):$/);
    if (defMatch) {
      const name = defMatch[1];
      const params = defMatch[2]
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      const bodyRes = parseBlocks(lines, i + 1, cur.indent + 1);
      nodes.push({
        kind: 'func_def',
        headerLine: cur,
        name,
        params,
        body: bodyRes.nodes,
      });
      i = bodyRes.nextIdx;
      continue;
    }

    if (cur.trimmed.startsWith('if ') && cur.trimmed.endsWith(':')) {
      const branches: {
        headerLine: SourceStmtLine;
        branchType: 'if' | 'elif' | 'else';
        condExpr?: string;
        body: BlockNode[];
      }[] = [];
      const baseIndent = cur.indent;
      const condExpr = cur.trimmed.slice(3, -1).trim();
      const bodyRes = parseBlocks(lines, i + 1, baseIndent + 1);
      branches.push({ headerLine: cur, branchType: 'if', condExpr, body: bodyRes.nodes });
      i = bodyRes.nextIdx;

      while (i < lines.length && lines[i].indent === baseIndent) {
        const bLine = lines[i];
        if (bLine.trimmed.startsWith('elif ') && bLine.trimmed.endsWith(':')) {
          const eCond = bLine.trimmed.slice(5, -1).trim();
          const eBody = parseBlocks(lines, i + 1, baseIndent + 1);
          branches.push({ headerLine: bLine, branchType: 'elif', condExpr: eCond, body: eBody.nodes });
          i = eBody.nextIdx;
        } else if (bLine.trimmed === 'else:') {
          const elBody = parseBlocks(lines, i + 1, baseIndent + 1);
          branches.push({ headerLine: bLine, branchType: 'else', body: elBody.nodes });
          i = elBody.nextIdx;
          break;
        } else {
          break;
        }
      }
      nodes.push({ kind: 'if_chain', branches });
      continue;
    }

    if (cur.trimmed.startsWith('for ') && cur.trimmed.endsWith(':')) {
      const inner = cur.trimmed.slice(4, -1).trim();
      const inIdx = findTopLevelKeywordOp(inner, 'in');
      const targetStr = inner.slice(0, inIdx).trim();
      const iterExpr = inner.slice(inIdx + 2).trim();
      const bodyRes = parseBlocks(lines, i + 1, cur.indent + 1);
      nodes.push({
        kind: 'for_loop',
        headerLine: cur,
        targetStr,
        iterExpr,
        body: bodyRes.nodes,
      });
      i = bodyRes.nextIdx;
      continue;
    }

    if (cur.trimmed.startsWith('while ') && cur.trimmed.endsWith(':')) {
      const condExpr = cur.trimmed.slice(6, -1).trim();
      const bodyRes = parseBlocks(lines, i + 1, cur.indent + 1);
      nodes.push({
        kind: 'while_loop',
        headerLine: cur,
        condExpr,
        body: bodyRes.nodes,
      });
      i = bodyRes.nextIdx;
      continue;
    }

    nodes.push({ kind: 'simple', line: cur });
    i++;
  }

  return { nodes, nextIdx: i };
}

function takeSnapshots(
  env: Record<string, RuntimeVal>,
  changedVar?: string,
  prevVal?: string
): VariableSnapshot[] {
  return Object.entries(env)
    .filter(([k]) => k !== '_')
    .map(([k, v]) => ({
      name: k,
      prevValue: k === changedVar && prevVal !== undefined ? prevVal : undefined,
      value: formatVal(v),
      dataType: v.type,
    }));
}

export function analyzeProblemAndAlgorithm(question: TopicQuestion) {
  const code = question.referenceCode;
  let patternName = 'IPO (Input ➔ Process ➔ Output) & Sequential Logic';
  let visualType: OperatorVisualType = 'problem_understanding';
  let timeComplexity = 'O(1)';
  let spaceComplexity = 'O(1)';
  let complexityReason = 'Executes a fixed number of arithmetic/conditional operations.';
  let whyItWorks =
    'By breaking the problem into Input initialization, mathematical/conditional processing, and formatted Output, we compute the exact answer deterministically.';

  if (code.includes('mid = (low + high) // 2')) {
    patternName = 'Binary Search (Divide & Conquer)';
    visualType = 'binary_search';
    timeComplexity = 'O(log n)';
    spaceComplexity = 'O(1)';
    complexityReason = 'Halves the search range [low..high] on every iteration.';
    whyItWorks =
      'Because the input array is sorted, comparing nums[mid] with target allows us to eliminate half of the remaining elements at each step.';
  } else if (code.includes('curr_max') && code.includes('max_so_far')) {
    patternName = "Kadane's Algorithm (Dynamic Programming)";
    visualType = 'kadane_subarray';
    timeComplexity = 'O(n)';
    spaceComplexity = 'O(1)';
    complexityReason = 'Single pass over the array while maintaining two running scalars.';
    whyItWorks =
      'At each element x, the maximum subarray ending at x is either x itself (starting fresh) or curr_max + x (extending the previous subarray).';
  } else if (code.includes('stack') && code.includes('.pop()')) {
    patternName = 'Stack LIFO (Last-In, First-Out) Matching';
    visualType = 'stack_queue_visual';
    timeComplexity = 'O(n)';
    spaceComplexity = 'O(n)';
    complexityReason = 'Each item is pushed and popped at most once.';
    whyItWorks =
      'A Stack naturally tracks the most recent unmatched opening bracket or state so it can be paired in reverse (LIFO) order.';
  } else if (code.includes('memo') && code.includes('def fib')) {
    patternName = 'Top-Down Dynamic Programming (Memoized Recursion)';
    visualType = 'fibonacci_dp';
    timeComplexity = 'O(n)';
    spaceComplexity = 'O(n)';
    complexityReason = 'Each Fibonacci state F(k) is computed once and cached in memo.';
    whyItWorks =
      'Memoization avoids redundant exponential recursive calls by storing already-computed results in a Dictionary.';
  } else if (code.includes('a, b = b, a + b')) {
    patternName = 'Iterative Fibonacci State Transition';
    visualType = 'fibonacci_dp';
    timeComplexity = 'O(n)';
    spaceComplexity = code.includes('.append(') ? 'O(n)' : 'O(1)';
    complexityReason = 'Updates the two preceding terms (a, b) in a single linear loop.';
    whyItWorks =
      'Each Fibonacci term is the sum of the previous two terms: simultaneous tuple assignment (a, b = b, a + b) advances the window cleanly.';
  } else if (
    (code.includes('left') && code.includes('right')) ||
    (code.includes('l, r =') && code.includes('while l < r'))
  ) {
    patternName = 'Two-Pointer Convergence Pattern';
    visualType = 'palindrome_two_pointer';
    timeComplexity = 'O(n)';
    spaceComplexity = 'O(1)';
    complexityReason = 'Left and Right pointers move toward the center in at most n/2 steps.';
    whyItWorks =
      'By comparing symmetric characters from both ends simultaneously, any mismatch is detected immediately without allocating a reversed copy.';
  } else if (code.includes('sieve')) {
    patternName = 'Sieve of Eratosthenes (Prime Precomputation)';
    visualType = 'prime_factor_visual';
    timeComplexity = 'O(n log log n)';
    spaceComplexity = 'O(n)';
    complexityReason = 'Marks multiples of each prime p starting from p*p up to n.';
    whyItWorks =
      'Every composite number ≤ n has a prime factor ≤ √n; crossing out multiples leaves only prime numbers Marked True.';
  } else if (code.includes('** 0.5') || code.includes('d * d <=')) {
    patternName = ' √N Trial Division & Prime Factorization';
    visualType = 'prime_factor_visual';
    timeComplexity = 'O(√n)';
    spaceComplexity = 'O(1)';
    complexityReason = 'Tests divisors only up to √n instead of n.';
    whyItWorks =
      'If a number n has a factor larger than √n, its paired cofactor must be smaller than √n.';
  } else if (code.includes('x % y')) {
    patternName = 'Euclidean GCD / LCM Algorithm';
    visualType = 'prime_factor_visual';
    timeComplexity = 'O(log(min(a, b)))';
    spaceComplexity = 'O(1)';
    complexityReason = 'Modulo reduction (x, y = y, x % y) shrinks operands logarithmically.';
    whyItWorks =
      'By Euclid’s theorem, gcd(x, y) = gcd(y, x % y) until the remainder becomes 0.';
  } else if (code.includes('% 10') || code.includes('//= 10') || code.includes('// 10')) {
    patternName = 'Mathematical Digit Extraction (% 10 & // 10)';
    visualType = 'digit_extraction';
    timeComplexity = 'O(log₁₀ n)';
    spaceComplexity = 'O(1)';
    complexityReason = 'Processes one decimal digit per iteration (number of digits = ⌊log₁₀ n⌋ + 1).';
    whyItWorks =
      '`n % 10` extracts the rightmost digit and `n // 10` strips the rightmost digit away.';
  } else if (code.includes('seen = set()')) {
    patternName = 'Hash Set O(1) Membership & Deduplication';
    visualType = 'set_element_visual';
    timeComplexity = 'O(n)';
    spaceComplexity = 'O(n)';
    complexityReason = 'Single pass over n elements with O(1) average Set lookup/insert.';
    whyItWorks =
      'A Set stores seen elements in a hash table, allowing instant O(1) duplicate or complement detection.';
  } else if (code.includes('.get(') || code.includes('.setdefault(')) {
    patternName = 'Hash Map Frequency Counting & Grouping';
    visualType = 'dict_mapping_visual';
    timeComplexity = 'O(n)';
    spaceComplexity = 'O(u) (Unique Keys)';
    complexityReason = 'Iterates once through the input and updates Dictionary counts in O(1).';
    whyItWorks =
      'A Dictionary maps each distinct element or category key to its running count or group list.';
  } else if (code.includes('sorted(')) {
    patternName = 'Sorting & Order-Based Analysis';
    visualType = 'sorting_visual';
    timeComplexity = 'O(n log n)';
    spaceComplexity = 'O(n)';
    complexityReason = 'Timsort orders n elements in O(n log n) comparisons.';
    whyItWorks =
      'Sorting brings identical or extremal elements into canonical order for direct comparison or indexing.';
  } else if (code.includes('for ') || code.includes('while ')) {
    const forCount = (code.match(/\bfor\s+/g) || []).length + (code.match(/\bwhile\s+/g) || []).length;
    patternName =
      forCount >= 2
        ? 'Nested Iteration & 2D Grid Traversal'
        : 'Iterative Accumulator / Filtering Pattern';
    visualType = 'dry_run_trace';
    timeComplexity = forCount >= 2 ? 'O(n²)' : 'O(n)';
    spaceComplexity = 'O(1)';
    complexityReason =
      forCount >= 2
        ? 'Nested loops evaluate pairs of indices across both dimensions.'
        : 'Single linear pass visits each element once.';
    whyItWorks =
      'Maintains a running state variable (accumulator, min/max, or result list) updated step-by-step on each iteration.';
  }

  const rawLines = code
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  const algorithmSteps: string[] = [];
  if (rawLines.length > 0) {
    algorithmSteps.push(`1. Initialize Data / Input: \`${rawLines[0]}\``);
  }
  if (rawLines.length > 2) {
    algorithmSteps.push(
      `2. Core Logic (${patternName}): \`${rawLines.slice(1, rawLines.length - 1).join(' ; ')}\``
    );
  }
  if (rawLines.length > 1) {
    algorithmSteps.push(`3. Produce Verified Output: \`${rawLines[rawLines.length - 1]}\``);
  }

  return {
    patternName,
    visualType,
    inputSummary: question.sampleInput ? question.sampleInput : 'Initialized in Code Variables',
    outputSummary: question.sampleOutput,
    algorithmSteps,
    whyItWorks,
    timeComplexity,
    spaceComplexity,
    complexityReason,
  };
}

export function generateProblemSolvingTeachingSteps(question: TopicQuestion): TeachingStep[] {
  const stmtLines = buildLogicalStmtLines(question.referenceCode);
  const ast = parseBlocks(stmtLines, 0, 0).nodes;
  const env: Record<string, RuntimeVal> = {};
  const functions: Record<string, FuncDefRuntime> = {};
  const inputs = question.sampleInput ? question.sampleInput.split('\n') : [];
  let inputCursor = 0;
  const stdoutLines: string[] = [];
  const drafts: Omit<TeachingStep, 'step' | 'totalSteps'>[] = [];

  const analysis = analyzeProblemAndAlgorithm(question);
  const cleanGoalText = (question.hindiDescription || question.question)
    .replace(/###\s*Problem Statement\s*/gi, '')
    .replace(/###\s*Instructions[\s\S]*/gi, '')
    .replace(/\r?\n/g, ' ')
    .trim();

  // Step 1: Problem Understanding & Algorithm Blueprint
  drafts.push({
    title: `Step 1: Understand Problem & Algorithm Blueprint (${analysis.patternName})`,
    conceptKey: analysis.visualType,
    speechHinglish: `सबसे पहले हमें Problem समझनी है: "${question.question}"। ${cleanGoalText} यहाँ हम "${analysis.patternName}" Algorithm का उपयोग करेंगे जिसकी Time Complexity ${analysis.timeComplexity} और Space Complexity ${analysis.spaceComplexity} है। अब चलिए Step-by-Step Dry Run देखते हैं!`,
    speechEnglish: `First, let's understand the problem: "${question.question}". We use the "${analysis.patternName}" pattern (Time: ${analysis.timeComplexity}, Space: ${analysis.spaceComplexity}) to produce the expected output "${question.sampleOutput}".`,
    cardExplanationHinglish: `Problem Goal: ${cleanGoalText} | Algorithm: ${analysis.patternName} (Time: ${analysis.timeComplexity}, Space: ${analysis.spaceComplexity}) | Expected Output: \`${question.sampleOutput}\`।`,
    cardExplanationEnglish: `Problem Blueprint: ${analysis.patternName} | Time: ${analysis.timeComplexity}, Space: ${analysis.spaceComplexity}.`,
    visualTarget: question.referenceCode.split('\n')[0] || '',
    visualLabel: `${analysis.patternName} (${analysis.timeComplexity})`,
    visualSublabel: `Expected Output: ${question.sampleOutput.replace(/\n/g, ' | ')}`,
    consoleOutput: '',
    isConsoleVisible: false,
    highlightLine: 1,
    highlightToken: '',
    conceptBoxes: [
      { label: 'Understand Problem', sublabel: question.question, isActive: true },
      { label: analysis.patternName, sublabel: `Time: ${analysis.timeComplexity} | Space: ${analysis.spaceComplexity}`, isActive: true },
      { label: `Output: ${question.sampleOutput.replace(/\n/g, ' ')}`, sublabel: 'Target Goal', isActive: false },
    ],
    operatorDetails: {
      visualType: analysis.visualType,
      technicalConcept: `Problem Decomposition & ${analysis.patternName}`,
      activeSourceRange: {
        line: 1,
        startCol: 1,
        endCol: (question.referenceCode.split('\n')[0] || '').length,
        codeText: question.referenceCode.split('\n')[0] || '',
      },
      problemSolvingInfo: {
        patternName: analysis.patternName,
        inputSummary: analysis.inputSummary,
        outputSummary: analysis.outputSummary,
        algorithmSteps: analysis.algorithmSteps,
        whyItWorks: analysis.whyItWorks,
        timeComplexity: analysis.timeComplexity,
        spaceComplexity: analysis.spaceComplexity,
        complexityReason: analysis.complexityReason,
      },
      intermediateSteps: analysis.algorithmSteps.map((st, idx) => ({
        expr: `Phase ${idx + 1}`,
        result: st,
        rule: analysis.whyItWorks,
      })),
    },
  });

  function makeCtx(): ProblemEvalContext {
    return {
      env,
      functions,
      inputs,
      inputCursor,
      stdoutLines,
      intermediateSteps: [],
      evaluatedOperands: [],
      callStack: [],
    };
  }

  function assignSingleTarget(lhsRaw: string, val: RuntimeVal, ctx: ProblemEvalContext) {
    const lhs = lhsRaw.trim();
    const idxMatch = lhs.match(/^([a-zA-Z_]\w*)\[(.+)\]$/);
    if (idxMatch) {
      const objName = idxMatch[1];
      const keyOrIdx = evalProblemExpr(idxMatch[2], ctx);
      const targetObj = env[objName];
      if (targetObj?.type === 'List') {
        const arr = targetObj.val as RuntimeVal[];
        const idx = Number(keyOrIdx.val);
        const actualIdx = idx < 0 ? arr.length + idx : idx;
        arr[actualIdx] = cloneRuntimeVal(val);
      } else if (targetObj?.type === 'Dict') {
        const entries = targetObj.val as DictEntryRuntime[];
        const existing = entries.find((e) => valEquals(e.key, keyOrIdx));
        if (existing) existing.val = cloneRuntimeVal(val);
        else entries.push({ key: cloneRuntimeVal(keyOrIdx), val: cloneRuntimeVal(val) });
      }
      return;
    }
    assignLoopTarget(lhs, val, env);
  }

  function runSilentBlock(nodes: BlockNode[]): 'normal' | 'break' | 'continue' {
    for (const node of nodes) {
      if (node.kind === 'func_def') {
        functions[node.name] = { name: node.name, params: node.params, body: node.body };
        continue;
      }

      if (node.kind === 'simple') {
        const t = node.line.trimmed;
        if (t === 'break') return 'break';
        if (t === 'continue') return 'continue';

        const ctx = makeCtx();

        // 1. print(...)
        const pMatch = t.match(/^print\((.*)\)$/);
        if (pMatch) {
          const args = pMatch[1].trim()
            ? splitTopLevel(pMatch[1], ',').map((a) => evalProblemExpr(a, ctx))
            : [];
          inputCursor = ctx.inputCursor;
          stdoutLines.push(args.map(formatPrintVal).join(' '));
          continue;
        }

        // 2. Augmented assignment: `+=`, `-=`, `*=`, `//=`
        const augMatch = t.match(/^([a-zA-Z_]\w*(?:\[.+?\])?)\s*(\+=|-=|\*=|\/\/=)\s*(.+)$/);
        if (augMatch) {
          const lhs = augMatch[1].trim();
          const op = augMatch[2];
          const rhsVal = evalProblemExpr(augMatch[3], ctx);
          const curVal = evalProblemExpr(lhs, ctx);
          inputCursor = ctx.inputCursor;
          const isF = curVal.type === 'Float' || rhsVal.type === 'Float';
          let num = Number(curVal.val ?? 0);
          if (op === '+=') num += Number(rhsVal.val);
          else if (op === '-=') num -= Number(rhsVal.val);
          else if (op === '*=') num *= Number(rhsVal.val);
          else if (op === '//=') num = Math.floor(num / Number(rhsVal.val));
          assignSingleTarget(lhs, isF ? makeFloat(num) : makeInt(num), ctx);
          continue;
        }

        // 3. Assignment (including chained assignment `a = b = rhs`)
        const firstEq = findTopLevelBinarySymbol(t, ['='], true);
        if (firstEq) {
          const chainParts: string[] = [];
          let rem = t;
          while (true) {
            const eq = findTopLevelBinarySymbol(rem, ['='], true);
            if (!eq) {
              chainParts.push(rem.trim());
              break;
            }
            chainParts.push(rem.slice(0, eq.idx).trim());
            rem = rem.slice(eq.idx + 1).trim();
          }
          const rhsExpr = chainParts[chainParts.length - 1];
          const rhsVal = evalProblemExpr(rhsExpr, ctx);
          inputCursor = ctx.inputCursor;
          for (let c = 0; c < chainParts.length - 1; c++) {
            assignSingleTarget(chainParts[c], rhsVal, ctx);
          }
          continue;
        }

        evalProblemExpr(t, ctx);
        inputCursor = ctx.inputCursor;
        continue;
      }

      if (node.kind === 'if_chain') {
        for (const br of node.branches) {
          const ctx = makeCtx();
          if (br.branchType === 'else' || isTruthy(evalProblemExpr(br.condExpr || 'True', ctx))) {
            inputCursor = ctx.inputCursor;
            const res = runSilentBlock(br.body);
            if (res !== 'normal') return res;
            break;
          }
        }
        continue;
      }

      if (node.kind === 'for_loop') {
        const ctx = makeCtx();
        const items = evalIterableItems(node.iterExpr, ctx);
        inputCursor = ctx.inputCursor;
        for (const it of items) {
          assignLoopTarget(node.targetStr, it, env);
          const res = runSilentBlock(node.body);
          if (res === 'break') break;
        }
        continue;
      }

      if (node.kind === 'while_loop') {
        let guard = 0;
        while (guard++ < 500) {
          const ctx = makeCtx();
          const cVal = evalProblemExpr(node.condExpr, ctx);
          inputCursor = ctx.inputCursor;
          if (!isTruthy(cVal)) break;
          const res = runSilentBlock(node.body);
          if (res === 'break') break;
        }
        continue;
      }
    }
    return 'normal';
  }

  function extractPointers(): { name: string; index: number; value?: string }[] | undefined {
    const ptrNames = ['low', 'mid', 'high', 'left', 'right', 'l', 'r', 'i'];
    const found: { name: string; index: number; value?: string }[] = [];
    for (const p of ptrNames) {
      if (env[p]?.type === 'Integer') {
        found.push({ name: p, index: Number(env[p].val) });
      }
    }
    return found.length > 0 ? found : undefined;
  }

  function executeNodes(nodes: BlockNode[]) {
    for (const node of nodes) {
      if (node.kind === 'func_def') {
        functions[node.name] = { name: node.name, params: node.params, body: node.body };
        const hdr = node.headerLine;
        drafts.push({
          title: `Define Helper Function \`def ${node.name}(${node.params.join(', ')})\` (Line ${hdr.lineNum})`,
          conceptKey: 'function_call_stack',
          speechHinglish: `Line ${hdr.lineNum} पर हम Reusable Function \`${node.name}(${node.params.join(
            ', '
          )})\` Define करते हैं, जिसे हम आगे बार-बार Call करके Problem को Modular तरीके से Solve करेंगे।`,
          speechEnglish: `Line ${hdr.lineNum} defines helper function \`${node.name}(${node.params.join(
            ', '
          )})\`.`,
          cardExplanationHinglish: `Function Definition: \`${hdr.trimmed}\` Memory में Register हो गया।`,
          cardExplanationEnglish: `Registered function \`${node.name}\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: `def ${node.name}(${node.params.join(', ')})`,
          visualSublabel: 'Modular Helper Function',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'def',
          conceptBoxes: [
            { label: `def ${node.name}`, sublabel: 'Function Name', isActive: true },
            { label: `(${node.params.join(', ')})`, sublabel: 'Parameters', isActive: true },
            { label: 'Reusable Logic', sublabel: 'Called Later', isActive: false },
          ],
          operatorDetails: {
            visualType: 'function_call_stack',
            technicalConcept: `Function Definition (def ${node.name})`,
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            variableSnapshots: takeSnapshots(env),
          },
        });
        continue;
      }

      if (node.kind === 'while_loop') {
        const hdr = node.headerLine;
        let iterations = 0;
        while (iterations < 500) {
          const ctx = makeCtx();
          const cVal = evalProblemExpr(node.condExpr, ctx);
          inputCursor = ctx.inputCursor;
          if (!isTruthy(cVal)) break;
          iterations++;
          const res = runSilentBlock(node.body);
          if (res === 'break') break;
        }

        drafts.push({
          title: `Dry Run While Loop (\`while ${node.condExpr}:\` — ${iterations} Iterations)`,
          conceptKey: analysis.visualType,
          speechHinglish: `Line ${hdr.lineNum} पर \`while ${node.condExpr}:\` Loop कुल ${iterations} बार चलता है और हर Step पर Variables को Update करते हुए सही उत्तर तक पहुँचता है!`,
          speechEnglish: `Line ${hdr.lineNum} executes \`while ${node.condExpr}:\` for ${iterations} iterations, updating state variables until termination.`,
          cardExplanationHinglish: `While Loop Dry Run: \`${hdr.trimmed}\` ने ${iterations} Iterations में State को Update किया।`,
          cardExplanationEnglish: `Executed ${iterations} iterations of \`${hdr.trimmed}\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: `${hdr.trimmed} (${iterations} Steps)`,
          visualSublabel: analysis.patternName,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'while',
          conceptBoxes: [
            { label: hdr.trimmed, sublabel: 'Loop Condition', isActive: true },
            { label: `${iterations} Iterations`, sublabel: 'Dry Run Executed', isActive: true },
            {
              label: takeSnapshots(env)
                .slice(0, 3)
                .map((s) => `${s.name}=${s.value}`)
                .join(', '),
              sublabel: 'Updated State',
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: analysis.visualType,
            technicalConcept: `${analysis.patternName} (while Loop Dry Run)`,
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            problemSolvingInfo: {
              ...analysis,
              pointers: extractPointers(),
            },
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: `${iterations} iterations completed`,
                rule: analysis.whyItWorks,
              },
            ],
            variableSnapshots: takeSnapshots(env),
          },
        });
        continue;
      }

      if (node.kind === 'for_loop') {
        const hdr = node.headerLine;
        const ctx = makeCtx();
        const iterItems = evalIterableItems(node.iterExpr, ctx);
        inputCursor = ctx.inputCursor;
        let ranCount = 0;

        for (const itemVal of iterItems) {
          ranCount++;
          assignLoopTarget(node.targetStr, itemVal, env);
          const res = runSilentBlock(node.body);
          if (res === 'break') break;
        }

        const firstSet = Object.values(env).find((v) => v.type === 'Set');
        const firstDict = Object.values(env).find((v) => v.type === 'Dict');
        const firstList = Object.values(env).find((v) => v.type === 'List');

        drafts.push({
          title: `Dry Run For Loop (\`${hdr.trimmed}\` — ${ranCount} Iterations)`,
          conceptKey: analysis.visualType,
          speechHinglish: `Line ${hdr.lineNum} पर \`${hdr.trimmed}\` Loop ${ranCount} Elements को Step-by-Step Process करता है और ${analysis.patternName} के अनुसार Variables को Update करता है।`,
          speechEnglish: `Line ${hdr.lineNum} iterates ${ranCount} times through \`${hdr.trimmed}\` to apply ${analysis.patternName}.`,
          cardExplanationHinglish: `For Loop Dry Run: \`${hdr.trimmed}\` ने ${ranCount} Iterations Execute किए।`,
          cardExplanationEnglish: `Processed ${ranCount} iterations via \`${hdr.trimmed}\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: `${hdr.trimmed} (${ranCount} Steps)`,
          visualSublabel: analysis.patternName,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'for',
          conceptBoxes: [
            { label: `for ${node.targetStr}`, sublabel: 'Loop Variable', isActive: true },
            { label: `${ranCount} Iterations`, sublabel: analysis.patternName, isActive: true },
            {
              label: takeSnapshots(env)
                .slice(0, 3)
                .map((s) => `${s.name}=${s.value}`)
                .join(', '),
              sublabel: 'Resulting State',
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: analysis.visualType,
            technicalConcept: `${analysis.patternName} (for Loop Dry Run)`,
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            charMap: firstList ? buildCollectionCharMap(firstList.val as RuntimeVal[]) : undefined,
            setMembers: firstSet ? buildSetMembersVisual(firstSet.val as RuntimeVal[]) : undefined,
            dictEntries: firstDict
              ? buildDictEntriesVisual(firstDict.val as DictEntryRuntime[])
              : undefined,
            problemSolvingInfo: {
              ...analysis,
              pointers: extractPointers(),
            },
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: `${ranCount} iterations completed`,
                rule: analysis.whyItWorks,
              },
            ],
            variableSnapshots: takeSnapshots(env),
          },
        });
        continue;
      }

      if (node.kind === 'if_chain') {
        for (const br of node.branches) {
          const hdr = br.headerLine;
          if (br.branchType === 'else') {
            executeNodes(br.body);
            break;
          }
          const ctx = makeCtx();
          const condStr = br.condExpr || 'True';
          const condVal = evalProblemExpr(condStr, ctx);
          inputCursor = ctx.inputCursor;
          const condBool = isTruthy(condVal);

          drafts.push({
            title: `Evaluate Condition (\`${condStr}\` ➔ ${condBool ? 'True ✅' : 'False ❌'})`,
            conceptKey: 'condition_eval',
            speechHinglish: `Line ${hdr.lineNum} पर Condition \`${condStr}\` Check होती है, जिसका Result \`${
              condBool ? 'True' : 'False'
            }\` आता है। ${
              condBool ? 'इसलिए यह Branch Execute होगी!' : 'इसलिए Python अगली Branch चेक करेगा।'
            }`,
            speechEnglish: `Line ${hdr.lineNum} evaluates condition \`${condStr}\` to \`${
              condBool ? 'True' : 'False'
            }\`.`,
            cardExplanationHinglish: `Condition Decision: \`${condStr}\` ➔ \`${
              condBool ? 'True ✅ (Branch Executed)' : 'False ❌ (Branch Skipped)'
            }\`।`,
            cardExplanationEnglish: `Condition \`${condStr}\` evaluated to \`${condBool ? 'True' : 'False'}\`.`,
            visualTarget: condStr,
            visualLabel: `${condStr} ➔ ${condBool ? 'True' : 'False'}`,
            visualSublabel: condBool ? 'Branch Selected ✅' : 'Branch Skipped ⏭️',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: hdr.lineNum,
            highlightToken: br.branchType,
            conceptBoxes: [
              { label: condStr, sublabel: 'Condition Expression', isActive: true },
              {
                label: condBool ? 'True ✅' : 'False ❌',
                sublabel: condBool ? 'Selected' : 'Skipped',
                isActive: true,
              },
              { label: analysis.patternName, sublabel: 'Decision Logic', isActive: false },
            ],
            operatorDetails: {
              visualType: 'condition_eval',
              technicalConcept: 'Decision & Edge-Case Branch Evaluation',
              activeSourceRange: {
                line: hdr.lineNum,
                startCol: hdr.indent + 1,
                endCol: hdr.raw.length,
                codeText: hdr.trimmed,
              },
              conditionExpression: condStr,
              conditionResult: condBool,
              selectedBranch: condBool ? `${br.branchType} Block` : undefined,
              skippedBranches: !condBool ? [`${br.branchType} Block Skipped`] : undefined,
              variableSnapshots: takeSnapshots(env),
            },
          });

          if (condBool) {
            executeNodes(br.body);
            break;
          }
        }
        continue;
      }

      if (node.kind === 'simple') {
        const line = node.line;
        const t = line.trimmed;
        const ctx = makeCtx();

        // 1. print(...)
        const printMatch = t.match(/^print\((.*)\)$/);
        if (printMatch) {
          const inner = printMatch[1].trim();
          const argExprs = inner ? splitTopLevel(inner, ',') : [];
          const printedVals = argExprs.map((ae) => evalProblemExpr(ae, ctx));
          inputCursor = ctx.inputCursor;
          const printedLine = printedVals.map(formatPrintVal).join(' ');
          stdoutLines.push(printedLine);
          const cumConsole = stdoutLines.join('\n');

          drafts.push({
            title: `Produce Console Output (Line ${line.lineNum}: \`${printedLine}\`)`,
            conceptKey: ctx.detectedVisualType || 'console',
            speechHinglish: `Line ${line.lineNum} पर \`${t}\` Execute होकर Console पर Final Result \`${printedLine}\` Print करता है!`,
            speechEnglish: `Line ${line.lineNum} executes \`${t}\` and prints \`${printedLine}\` to the Console.`,
            cardExplanationHinglish: `Output Produced (Line ${line.lineNum}): \`${printedLine}\` Console पर Display होता है।`,
            cardExplanationEnglish: `Outputs \`${printedLine}\` to the Console.`,
            visualTarget: inner,
            visualLabel: `Output: ${printedLine}`,
            visualSublabel: ctx.detectedConcept || 'Verified Console Output',
            consoleOutput: cumConsole,
            isConsoleVisible: true,
            highlightLine: line.lineNum,
            highlightToken: 'print',
            conceptBoxes: [
              { label: inner, sublabel: 'Print Expression', isActive: true },
              { label: printedLine, sublabel: 'Evaluated Result', isActive: true },
              { label: 'Console Output', sublabel: 'Verified Match ✅', isActive: true },
            ],
            operatorDetails: {
              visualType: ctx.detectedVisualType || 'console',
              technicalConcept: ctx.detectedConcept || 'Console Output Generation (print)',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              charMap: ctx.charMap,
              setMembers: ctx.setMembers,
              dictEntries: ctx.dictEntries,
              problemSolvingInfo: {
                ...analysis,
                callStack: ctx.callStack.length > 0 ? ctx.callStack.slice(0, 8) : undefined,
              },
              intermediateSteps: [{ expr: t, result: printedLine, rule: 'Prints result to Console' }],
              intermediateResult: printedLine,
              variableSnapshots: takeSnapshots(env),
            },
          });
          continue;
        }

        // 2. Augmented assignment: `+=`, `-=`, `*=`, `//=`
        const augMatch = t.match(/^([a-zA-Z_]\w*(?:\[.+?\])?)\s*(\+=|-=|\*=|\/\/=)\s*(.+)$/);
        if (augMatch) {
          const lhs = augMatch[1].trim();
          const op = augMatch[2];
          const rhsExpr = augMatch[3].trim();
          const prevVal = formatVal(evalProblemExpr(lhs, ctx));
          const rhsVal = evalProblemExpr(rhsExpr, ctx);
          const curVal = evalProblemExpr(lhs, ctx);
          inputCursor = ctx.inputCursor;
          const isF = curVal.type === 'Float' || rhsVal.type === 'Float';
          let num = Number(curVal.val ?? 0);
          if (op === '+=') num += Number(rhsVal.val);
          else if (op === '-=') num -= Number(rhsVal.val);
          else if (op === '*=') num *= Number(rhsVal.val);
          else if (op === '//=') num = Math.floor(num / Number(rhsVal.val));
          const nextVal = isF ? makeFloat(num) : makeInt(num);
          assignSingleTarget(lhs, nextVal, ctx);
          const nextStr = formatVal(nextVal);

          drafts.push({
            title: `Update State Variable (\`${t}\` ➔ ${nextStr})`,
            conceptKey: 'assignment',
            speechHinglish: `Line ${line.lineNum} पर \`${t}\` Variable \`${lhs}\` की पुरानी Value \`${prevVal}\` को Update करके \`${nextStr}\` बना देता है।`,
            speechEnglish: `Line ${line.lineNum} updates \`${lhs}\` from \`${prevVal}\` to \`${nextStr}\` via \`${t}\`.`,
            cardExplanationHinglish: `Variable Mutation: \`${lhs}\` बदलकर \`${prevVal}\` ➔ \`${nextStr}\` हो गया।`,
            cardExplanationEnglish: `Updated \`${lhs}\`: \`${prevVal}\` ➔ \`${nextStr}\`.`,
            visualTarget: t,
            visualLabel: `${lhs}: ${prevVal} ➔ ${nextStr}`,
            visualSublabel: `Augmented Update (${op})`,
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: lhs,
            conceptBoxes: [
              { label: `Old ${lhs}: ${prevVal}`, sublabel: 'Previous Value', isActive: false },
              { label: `${op} ${formatVal(rhsVal)}`, sublabel: 'Operation', isActive: true },
              { label: `New ${lhs}: ${nextStr}`, sublabel: 'Updated Value', isActive: true },
            ],
            operatorDetails: {
              visualType: 'assignment',
              technicalConcept: `State Mutation (${op})`,
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              intermediateSteps: [{ expr: t, result: nextStr, rule: `${prevVal} ${op[0]} ${formatVal(rhsVal)} = ${nextStr}` }],
              variableSnapshots: takeSnapshots(env, lhs, prevVal),
            },
          });
          continue;
        }

        // 3. Standard or Chained Assignment: `lhs = rhs` or `a = b = rhs`
        const firstEq = findTopLevelBinarySymbol(t, ['='], true);
        if (firstEq) {
          const chainParts: string[] = [];
          let rem = t;
          while (true) {
            const eq = findTopLevelBinarySymbol(rem, ['='], true);
            if (!eq) {
              chainParts.push(rem.trim());
              break;
            }
            chainParts.push(rem.slice(0, eq.idx).trim());
            rem = rem.slice(eq.idx + 1).trim();
          }
          const rhsExpr = chainParts[chainParts.length - 1];
          const lhsDisplay = chainParts.slice(0, -1).join(' = ');
          const prevVal = env[lhsDisplay] ? formatVal(env[lhsDisplay]) : undefined;
          const rhsVal = evalProblemExpr(rhsExpr, ctx);
          inputCursor = ctx.inputCursor;
          for (let c = 0; c < chainParts.length - 1; c++) {
            assignSingleTarget(chainParts[c], rhsVal, ctx);
          }
          const valStr = formatVal(rhsVal);

          drafts.push({
            title: `Execute Step (Line ${line.lineNum}: \`${lhsDisplay} = ${valStr}\`)`,
            conceptKey: ctx.detectedVisualType || analysis.visualType,
            speechHinglish: `Line ${line.lineNum} पर \`${rhsExpr}\` Evaluate होकर \`${lhsDisplay}\` में \`${valStr}\` Store करता है।`,
            speechEnglish: `Line ${line.lineNum} evaluates \`${rhsExpr}\` to \`${valStr}\` and stores it in \`${lhsDisplay}\`.`,
            cardExplanationHinglish: `Line ${line.lineNum}: \`${lhsDisplay}\` = \`${valStr}\` (${rhsVal.type})।`,
            cardExplanationEnglish: `Assigned \`${valStr}\` to \`${lhsDisplay}\`.`,
            visualTarget: lhsDisplay,
            visualLabel: `${lhsDisplay} = ${valStr}`,
            visualSublabel: ctx.detectedConcept || analysis.patternName,
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: chainParts[0].split(',')[0].trim(),
            conceptBoxes: [
              { label: lhsDisplay, sublabel: 'Target Variable(s)', isActive: true },
              { label: rhsExpr, sublabel: 'Expression', isActive: true },
              { label: valStr, sublabel: `Stored (${rhsVal.type})`, isActive: true },
            ],
            operatorDetails: {
              visualType: ctx.detectedVisualType || analysis.visualType,
              technicalConcept: ctx.detectedConcept || analysis.patternName,
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              charMap: ctx.charMap,
              setMembers: ctx.setMembers,
              dictEntries: ctx.dictEntries,
              problemSolvingInfo: {
                ...analysis,
                callStack: ctx.callStack.length > 0 ? ctx.callStack.slice(0, 8) : undefined,
              },
              intermediateSteps: [{ expr: t, result: valStr, rule: `Evaluates ${rhsExpr} ➔ ${valStr}` }],
              intermediateResult: valStr,
              variableSnapshots: takeSnapshots(env, lhsDisplay, prevVal),
            },
          });
          continue;
        }

        // 4. Standalone Method Call: `stack.append(10)`
        const dotIdx = findTopLevelMethodDot(t);
        const objName = dotIdx !== -1 ? t.slice(0, dotIdx).trim() : '';
        const beforeStr = env[objName] ? formatVal(env[objName]) : '';
        evalProblemExpr(t, ctx);
        inputCursor = ctx.inputCursor;
        const afterStr = env[objName] ? formatVal(env[objName]) : '';

        drafts.push({
          title: `Collection Operation (Line ${line.lineNum}: \`${t}\`)`,
          conceptKey: analysis.visualType,
          speechHinglish: `Line ${line.lineNum} पर \`${t}\` Execute होकर \`${objName}\` को \`${beforeStr}\` से Update करके \`${afterStr}\` बना देता है।`,
          speechEnglish: `Line ${line.lineNum} executes \`${t}\`, updating \`${objName}\` to \`${afterStr}\`.`,
          cardExplanationHinglish: `Operation \`${t}\`: \`${beforeStr}\` ➔ \`${afterStr}\`।`,
          cardExplanationEnglish: `Executed \`${t}\`: \`${beforeStr}\` ➔ \`${afterStr}\`.`,
          visualTarget: t,
          visualLabel: `${objName} ➔ ${afterStr}`,
          visualSublabel: analysis.patternName,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: line.lineNum,
          highlightToken: objName,
          conceptBoxes: [
            { label: `Before: ${beforeStr}`, sublabel: 'Previous State', isActive: false },
            { label: t, sublabel: 'Operation', isActive: true },
            { label: `After: ${afterStr}`, sublabel: 'Updated State', isActive: true },
          ],
          operatorDetails: {
            visualType: analysis.visualType,
            technicalConcept: analysis.patternName,
            activeSourceRange: {
              line: line.lineNum,
              startCol: line.indent + 1,
              endCol: line.raw.length,
              codeText: t,
            },
            charMap: ctx.charMap,
            setMembers: ctx.setMembers,
            dictEntries: ctx.dictEntries,
            intermediateSteps: [{ expr: t, result: afterStr, rule: `Mutates ${objName} in-place` }],
            variableSnapshots: takeSnapshots(env, objName, beforeStr),
          },
        });
      }
    }
  }

  executeNodes(ast);

  const totalSteps = drafts.length;
  return drafts.map((d, idx) => ({
    ...d,
    step: idx + 1,
    totalSteps,
  }));
}

export function runProblemSolvingPythonSandbox(
  code: string,
  sampleInput = ''
): { stdout: string; error: string | null } {
  try {
    const qDummy: TopicQuestion = {
      id: 'SANDBOX',
      number: 1,
      level: 'Learn',
      question: 'Sandbox',
      hindiDescription: '',
      referenceCode: code,
      starterCode: '',
      sampleInput,
      sampleOutput: '',
      testCases: [],
    };
    const steps = generateProblemSolvingTeachingSteps(qDummy);
    const finalOut = steps.length > 0 ? steps[steps.length - 1].consoleOutput : '';
    return { stdout: finalOut, error: null };
  } catch (err: any) {
    return { stdout: '', error: err?.message || String(err) };
  }
}

export function generateProblemSolvingHints(question: TopicQuestion): ProgressiveHint[] {
  const analysis = analyzeProblemAndAlgorithm(question);
  return [
    {
      level: 1,
      name: 'Level 1: Problem Understanding & Algorithm Hint',
      badge: `🧠 ${analysis.patternName}`,
      hintHinglish: `इस सवाल में "${analysis.patternName}" Pattern का उपयोग करें: ${analysis.whyItWorks}`,
      hintEnglish: `Use the "${analysis.patternName}" pattern: ${analysis.whyItWorks}`,
    },
    {
      level: 2,
      name: 'Level 2: Step-by-Step Logic Blueprint',
      badge: `📐 Logic & Complexity (${analysis.timeComplexity})`,
      hintHinglish: `Algorithm के मुख्य Steps:\n${analysis.algorithmSteps.join('\n')}\nसुनिश्चित करें कि Output बिल्कुल \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\` जैसा आए।`,
      hintEnglish: `Algorithm Steps:\n${analysis.algorithmSteps.join('\n')}\nEnsure your output matches: \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\`.`,
    },
    {
      level: 3,
      name: 'Level 3: Verified Reference Solution',
      badge: '🎯 Complete Solution',
      hintHinglish: `यहाँ पूरा Verified Python Solution दिया गया है:\n\`\`\`python\n${question.referenceCode}\n\`\`\``,
      hintEnglish: `Here is the complete verified Python solution:\n\`\`\`python\n${question.referenceCode}\n\`\`\``,
    },
  ];
}

export function buildProblemSolvingQuestionConfig(
  topicId: string,
  q: TopicQuestion
): QuestionV5Config {
  const teachingSteps = generateProblemSolvingTeachingSteps(q);
  const hints = generateProblemSolvingHints(q);
  const cleanTitle = q.question.length > 60 ? `${q.question.slice(0, 57)}...` : q.question;

  return {
    number: q.number,
    title: cleanTitle,
    problemStatement: q.question,
    instructions: q.hindiDescription,
    referenceCode: q.referenceCode,
    starterCode: q.starterCode,
    sampleInput: q.sampleInput,
    expectedOutput: q.sampleOutput,
    teachingSteps,
    hints,
    validate: (code: string, stdout: string) => {
      const trimmedCode = code.trim();
      if (!trimmedCode) {
        return { passed: false, message: 'Please write your Python code before running.' };
      }
      const actualOut = stdout.replace(/\r\n/g, '\n').trim();
      const expectedOut = q.sampleOutput.replace(/\r\n/g, '\n').trim();

      if (actualOut === expectedOut) {
        return {
          passed: true,
          message: '🎉 Excellent! Your Problem-Solving Algorithm and output match 100%!',
        };
      }

      return {
        passed: false,
        message: `Expected output "${expectedOut}", but your code produced "${actualOut}".`,
      };
    },
    diagnose: diagnoseHelloWorldError,
  };
}
