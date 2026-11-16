import { TopicQuestion } from './data/pythonBasics140QuestionsData';
import {
  TeachingStep,
  ProgressiveHint,
  QuestionV5Config,
  ConceptBox,
  diagnoseHelloWorldError,
} from './smartClassroomV5Engine';
import {
  OperatorVisualType,
  EvaluatedOperandInfo,
  IntermediateEvalStep,
  VariableSnapshot,
  CharIndexCell,
} from './operatorsVisualEngine';

export function isListsTuplesTopic(topicId: string): boolean {
  return topicId.startsWith('py_06_lists');
}

export interface RuntimeVal {
  val: any; // For List and Tuple, val is RuntimeVal[]
  type: 'Integer' | 'Float' | 'Boolean' | 'String' | 'List' | 'Tuple' | 'NoneType';
}

export function formatVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'Boolean') return v.val ? 'True' : 'False';
  if (v.type === 'String') return `'${v.val}'`;
  if (v.type === 'Float') {
    const cleaned = Number(Number(v.val).toPrecision(12));
    const s = String(cleaned);
    return s.includes('.') ? s : `${s}.0`;
  }
  if (v.type === 'Integer') {
    return String(v.val);
  }
  if (v.type === 'List') {
    const arr = (v.val as RuntimeVal[]) || [];
    return `[${arr.map((item) => formatVal(item)).join(', ')}]`;
  }
  if (v.type === 'Tuple') {
    const arr = (v.val as RuntimeVal[]) || [];
    if (arr.length === 1) {
      return `(${formatVal(arr[0])},)`;
    }
    return `(${arr.map((item) => formatVal(item)).join(', ')})`;
  }
  return String(v.val);
}

export function formatPrintVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'String') return String(v.val);
  return formatVal(v);
}

export function makeInt(n: number): RuntimeVal {
  return { val: Math.trunc(n), type: 'Integer' };
}

export function makeFloat(n: number): RuntimeVal {
  return { val: Number(n), type: 'Float' };
}

export function makeBool(b: boolean): RuntimeVal {
  return { val: Boolean(b), type: 'Boolean' };
}

export function makeStr(s: string): RuntimeVal {
  return { val: String(s), type: 'String' };
}

export function makeList(items: RuntimeVal[]): RuntimeVal {
  return { val: [...items], type: 'List' };
}

export function makeTuple(items: RuntimeVal[]): RuntimeVal {
  return { val: [...items], type: 'Tuple' };
}

export function makeNone(): RuntimeVal {
  return { val: null, type: 'NoneType' };
}

export function cloneRuntimeVal(v: RuntimeVal): RuntimeVal {
  if (v.type === 'List') {
    return makeList((v.val as RuntimeVal[]).map(cloneRuntimeVal));
  }
  if (v.type === 'Tuple') {
    return makeTuple((v.val as RuntimeVal[]).map(cloneRuntimeVal));
  }
  return { val: v.val, type: v.type };
}

export function runtimeValEquals(a: RuntimeVal, b: RuntimeVal): boolean {
  if (
    (a.type === 'Integer' || a.type === 'Float') &&
    (b.type === 'Integer' || b.type === 'Float')
  ) {
    return Number(a.val) === Number(b.val);
  }
  if (a.type !== b.type) return false;
  if (a.type === 'List' || a.type === 'Tuple') {
    const arrA = a.val as RuntimeVal[];
    const arrB = b.val as RuntimeVal[];
    if (arrA.length !== arrB.length) return false;
    return arrA.every((it, idx) => runtimeValEquals(it, arrB[idx]));
  }
  return a.val === b.val;
}

export function isTruthy(v: RuntimeVal): boolean {
  if (!v || v.type === 'NoneType') return false;
  if (v.type === 'Boolean') return Boolean(v.val);
  if (v.type === 'Integer' || v.type === 'Float') return Number(v.val) !== 0;
  if (v.type === 'String') return v.val.length > 0;
  if (v.type === 'List' || v.type === 'Tuple') return (v.val as RuntimeVal[]).length > 0;
  return Boolean(v.val);
}

export function buildCollectionElementMap(
  items: RuntimeVal[],
  selectedIndices: Set<number> = new Set()
): CharIndexCell[] {
  const n = items.length;
  const limit = Math.min(n, 14);
  const cells: CharIndexCell[] = [];
  for (let i = 0; i < limit; i++) {
    cells.push({
      char: formatVal(items[i]),
      posIdx: i,
      negIdx: i - n,
      isSelected: selectedIndices.has(i),
    });
  }
  return cells;
}

export function computeCollectionSlice(
  items: RuntimeVal[],
  startVal: number | null,
  stopVal: number | null,
  stepVal: number | null
): {
  result: RuntimeVal[];
  selectedIndices: Set<number>;
  normalizedStart: number;
  normalizedStop: number;
  step: number;
} {
  const n = items.length;
  const step = stepVal === null ? 1 : stepVal;
  const selectedIndices = new Set<number>();
  const result: RuntimeVal[] = [];

  if (step === 0) {
    return { result, selectedIndices, normalizedStart: 0, normalizedStop: 0, step: 1 };
  }

  let start: number;
  let stop: number;

  if (step > 0) {
    start = startVal === null ? 0 : startVal < 0 ? Math.max(0, n + startVal) : Math.min(n, startVal);
    stop = stopVal === null ? n : stopVal < 0 ? Math.max(0, n + stopVal) : Math.min(n, stopVal);
    for (let i = start; i < stop; i += step) {
      selectedIndices.add(i);
      result.push(cloneRuntimeVal(items[i]));
    }
  } else {
    start = startVal === null ? n - 1 : startVal < 0 ? Math.max(-1, n + startVal) : Math.min(n - 1, startVal);
    stop = stopVal === null ? -1 : stopVal < 0 ? Math.max(-1, n + stopVal) : Math.min(n - 1, stopVal);
    for (let i = start; i > stop; i += step) {
      if (i >= 0 && i < n) {
        selectedIndices.add(i);
        result.push(cloneRuntimeVal(items[i]));
      }
    }
  }

  return { result, selectedIndices, normalizedStart: start, normalizedStop: stop, step };
}

export function splitTopLevel(s: string, delimiter = ','): string[] {
  const parts: string[] = [];
  let cur = '';
  let depth = 0;
  let inQuote: string | null = null;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inQuote) {
      cur += ch;
      if (ch === inQuote && s[i - 1] !== '\\') inQuote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      cur += ch;
      continue;
    }
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;
    if (depth === 0 && s.slice(i, i + delimiter.length) === delimiter) {
      parts.push(cur.trim());
      cur = '';
      i += delimiter.length - 1;
      continue;
    }
    cur += ch;
  }
  if (cur.trim().length > 0 || s.trim().endsWith(delimiter)) {
    parts.push(cur.trim());
  }
  return parts;
}

function stripOuterParensIfNotTuple(s: string): string {
  let str = s.trim();
  while (str.startsWith('(') && str.endsWith(')')) {
    let depth = 0;
    let balanced = true;
    let inQuote: string | null = null;
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (inQuote) {
        if (ch === inQuote && str[i - 1] !== '\\') inQuote = null;
        continue;
      }
      if (ch === '"' || ch === "'") {
        inQuote = ch;
        continue;
      }
      if (ch === '(') depth++;
      else if (ch === ')') {
        depth--;
        if (depth === 0 && i < str.length - 1) {
          balanced = false;
          break;
        }
      }
    }
    if (balanced) {
      const inner = str.slice(1, -1).trim();
      // If inner has top-level commas (e.g. (10, 20) or (42,)), it's a Tuple literal — DO NOT strip!
      const topParts = splitTopLevel(inner, ',');
      if (topParts.length > 1 || inner.endsWith(',')) {
        break;
      }
      str = inner;
    } else {
      break;
    }
  }
  return str;
}

function isSingleStringLiteral(s: string, isFString = false): boolean {
  if (s.length < 2) return false;
  const q = s[0];
  if (q !== '"' && q !== "'") return false;
  if (s[s.length - 1] !== q) return false;
  let braceDepth = 0;
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '\\') {
      i++;
      continue;
    }
    if (isFString) {
      if (s[i] === '{') {
        braceDepth++;
        continue;
      }
      if (s[i] === '}') {
        braceDepth = Math.max(0, braceDepth - 1);
        continue;
      }
      if (braceDepth > 0) continue;
    }
    if (s[i] === q) return false;
  }
  return true;
}

export interface ListEvalContext {
  env: Record<string, RuntimeVal>;
  inputs: string[];
  inputCursor: number;
  stdoutLines: string[];
  intermediateSteps: IntermediateEvalStep[];
  evaluatedOperands: EvaluatedOperandInfo[];
  detectedVisualType?: OperatorVisualType;
  detectedConcept?: string;
  charMap?: CharIndexCell[];
  sliceInfo?: {
    start: string;
    stop: string;
    step: string;
    note: string;
  };
  stringTransformInfo?: {
    original: string;
    operation: string;
    result: string;
    immutableNote?: string;
  };
}

function findTopLevelTernary(s: string): { body: string; cond: string; orelse: string } | null {
  let depth = 0;
  let inQuote: string | null = null;
  let ifIdx = -1;
  let elseIdx = -1;
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
    if (ifIdx === -1 && s.slice(i, i + 4) === ' if ') {
      ifIdx = i;
      i += 3;
    } else if (ifIdx !== -1 && elseIdx === -1 && s.slice(i, i + 6) === ' else ') {
      elseIdx = i;
      break;
    }
  }
  if (ifIdx !== -1 && elseIdx !== -1) {
    return {
      body: s.slice(0, ifIdx).trim(),
      cond: s.slice(ifIdx + 4, elseIdx).trim(),
      orelse: s.slice(elseIdx + 6).trim(),
    };
  }
  return null;
}

function findTopLevelKeywordOp(s: string, keyword: string): number {
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
    if (depth !== 0) continue;
    const prevOk = i === 0 || /[\s()]/.test(s[i - 1]);
    const afterIdx = i + keyword.length;
    const nextOk = afterIdx < s.length && /[\s(]/.test(s[afterIdx]);
    if (prevOk && nextOk && s.slice(i, afterIdx) === keyword) {
      return i;
    }
  }
  return -1;
}

function splitTopLevelComparisons(s: string): { ops: string[]; operands: string[] } | null {
  const cmpOps = ['not in', 'in', 'is', '==', '!=', '>=', '<=', '>', '<'];
  const ops: string[] = [];
  const operands: string[] = [];
  let depth = 0;
  let inQuote: string | null = null;
  let lastSplit = 0;

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

    for (const op of cmpOps) {
      if (op === 'not in' || op === 'in' || op === 'is') {
        const prevOk = i > 0 && /[\s)]/.test(s[i - 1]);
        const afterIdx = i + op.length;
        const nextOk = afterIdx < s.length && /[\s(]/.test(s[afterIdx]);
        if (prevOk && nextOk && s.slice(i, afterIdx) === op) {
          operands.push(s.slice(lastSplit, i).trim());
          ops.push(op);
          lastSplit = afterIdx;
          i = afterIdx - 1;
          break;
        }
      } else if (s.slice(i, i + op.length) === op) {
        if (op === '>' && (s[i + 1] === '=' || s[i + 1] === '>' || s[i - 1] === '>')) continue;
        if (op === '<' && (s[i + 1] === '=' || s[i + 1] === '<' || s[i - 1] === '<')) continue;
        operands.push(s.slice(lastSplit, i).trim());
        ops.push(op);
        lastSplit = i + op.length;
        i += op.length - 1;
        break;
      }
    }
  }

  if (ops.length > 0) {
    operands.push(s.slice(lastSplit).trim());
    return { ops, operands };
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
        if (op === '=' && (s[i + 1] === '=' || ['!', '<', '>', '+', '-', '*', '/', '%'].includes(s[i - 1]))) continue;
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

export function evalIterableItems(iterExpr: string, ctx: ListEvalContext): RuntimeVal[] {
  const s = iterExpr.trim();
  // range(...)
  const rangeMatch = s.match(/^range\((.+)\)$/);
  if (rangeMatch) {
    const rArgs = splitTopLevel(rangeMatch[1]).map((a) => Number(evalListExpr(a, ctx).val));
    let start = 0;
    let stop = 0;
    let step = 1;
    if (rArgs.length === 1) {
      stop = rArgs[0];
    } else if (rArgs.length === 2) {
      start = rArgs[0];
      stop = rArgs[1];
    } else if (rArgs.length >= 3) {
      start = rArgs[0];
      stop = rArgs[1];
      step = rArgs[2];
    }
    const items: RuntimeVal[] = [];
    if (step > 0) {
      for (let i = start; i < stop; i += step) items.push(makeInt(i));
    } else if (step < 0) {
      for (let i = start; i > stop; i += step) items.push(makeInt(i));
    }
    return items;
  }

  // enumerate(seq) or enumerate(seq, start)
  const enumMatch = s.match(/^enumerate\((.+)\)$/);
  if (enumMatch) {
    const eArgs = splitTopLevel(enumMatch[1]);
    const seqVal = evalListExpr(eArgs[0], ctx);
    const startIdx = eArgs[1] ? Number(evalListExpr(eArgs[1], ctx).val) : 0;
    const seqArr = (seqVal.val as RuntimeVal[]) || [];
    return seqArr.map((it, idx) => makeTuple([makeInt(startIdx + idx), it]));
  }

  // zip(seq1, seq2)
  const zipMatch = s.match(/^zip\((.+)\)$/);
  if (zipMatch) {
    const zArgs = splitTopLevel(zipMatch[1]).map((a) => evalListExpr(a, ctx));
    const arr1 = (zArgs[0]?.val as RuntimeVal[]) || [];
    const arr2 = (zArgs[1]?.val as RuntimeVal[]) || [];
    const minLen = Math.min(arr1.length, arr2.length);
    const out: RuntimeVal[] = [];
    for (let i = 0; i < minLen; i++) {
      out.push(makeTuple([arr1[i], arr2[i]]));
    }
    return out;
  }

  const val = evalListExpr(s, ctx);
  if (val.type === 'List' || val.type === 'Tuple') {
    return val.val as RuntimeVal[];
  }
  if (val.type === 'String') {
    return Array.from(String(val.val)).map(makeStr);
  }
  return [];
}

export function assignLoopTarget(
  targetStr: string,
  val: RuntimeVal,
  env: Record<string, RuntimeVal>
) {
  const t = targetStr.trim();
  // e.g. rank, (name, score)
  const nestedMatch = t.match(/^([a-zA-Z_]\w*)\s*,\s*\(([^)]+)\)$/);
  if (nestedMatch && (val.type === 'Tuple' || val.type === 'List')) {
    const outerArr = val.val as RuntimeVal[];
    env[nestedMatch[1]] = outerArr[0] || makeNone();
    const innerVars = nestedMatch[2].split(',').map((v) => v.trim());
    const innerArr = (outerArr[1]?.val as RuntimeVal[]) || [];
    innerVars.forEach((vName, idx) => {
      if (vName !== '_') env[vName] = innerArr[idx] || makeNone();
    });
    return;
  }

  if (t.includes(',')) {
    const varNames = t.split(',').map((v) => v.trim());
    const arr = (val.val as RuntimeVal[]) || [];
    varNames.forEach((vName, idx) => {
      if (vName !== '_') env[vName] = arr[idx] || makeNone();
    });
    return;
  }

  if (t !== '_') {
    env[t] = val;
  }
}

export function evalListExpr(rawInput: string, ctx: ListEvalContext): RuntimeVal {
  const s = stripOuterParensIfNotTuple(rawInput);

  // 1. f-string literal: f"..." or f'...'
  if ((s.startsWith('f"') || s.startsWith("f'")) && isSingleStringLiteral(s.slice(1), true)) {
    const template = s.slice(2, -1);
    const rendered = template.replace(/\{([^}]+)\}/g, (_, innerBraces) => {
      let colonIdx = -1;
      let depth = 0;
      let inQ: string | null = null;
      for (let i = 0; i < innerBraces.length; i++) {
        const ch = innerBraces[i];
        if (inQ) {
          if (ch === inQ && innerBraces[i - 1] !== '\\') inQ = null;
          continue;
        }
        if (ch === '"' || ch === "'") {
          inQ = ch;
          continue;
        }
        if (ch === '(' || ch === '[') depth++;
        else if (ch === ')' || ch === ']') depth--;
        if (depth === 0 && ch === ':') {
          colonIdx = i;
          break;
        }
      }
      const exprPart = colonIdx !== -1 ? innerBraces.slice(0, colonIdx).trim() : innerBraces.trim();
      const specPart = colonIdx !== -1 ? innerBraces.slice(colonIdx + 1).trim() : '';
      const subVal = evalListExpr(exprPart, ctx);
      const fMatch = specPart.match(/^\.(\d+)f$/);
      if (fMatch) {
        return Number(subVal.val).toFixed(Number(fMatch[1]));
      }
      return formatPrintVal(subVal);
    });
    return makeStr(rendered);
  }

  // 2. Standard string literal: "..." or '...'
  if (isSingleStringLiteral(s)) {
    return makeStr(s.slice(1, -1));
  }

  // 3. List literal or List Comprehension: [...]
  if (s.startsWith('[') && s.endsWith(']') && !findTopLevelTrailingBracket(s)) {
    const inner = s.slice(1, -1).trim();
    if (!inner) {
      ctx.detectedVisualType = 'list_element_map';
      ctx.detectedConcept = 'Empty List Creation ([])';
      return makeList([]);
    }

    // Check if inner is a List Comprehension!
    // Find top-level ` for ` (at depth 0 inside `inner`)
    const topForIdx = findTopLevelKeywordOp(inner, 'for');
    if (topForIdx !== -1) {
      const mapExpr = inner.slice(0, topForIdx).trim();
      const rest = inner.slice(topForIdx + 3).trim();

      // Check if it's a 2-clause comprehension: `val for row in matrix for val in row`
      const secondForIdx = findTopLevelKeywordOp(rest, 'for');
      if (secondForIdx !== -1) {
        const clause1 = rest.slice(0, secondForIdx).trim();
        const clause2 = rest.slice(secondForIdx + 3).trim();
        const m1 = clause1.match(/^(.+?)\s+in\s+(.+)$/);
        const m2 = clause2.match(/^(.+?)\s+in\s+(.+)$/);
        if (m1 && m2) {
          const var1 = m1[1].trim();
          const iter1 = evalIterableItems(m1[2].trim(), ctx);
          const var2 = m2[1].trim();
          const outItems: RuntimeVal[] = [];
          for (const it1 of iter1) {
            assignLoopTarget(var1, it1, ctx.env);
            const iter2 = evalIterableItems(m2[2].trim(), ctx);
            for (const it2 of iter2) {
              assignLoopTarget(var2, it2, ctx.env);
              outItems.push(evalListExpr(mapExpr, ctx));
            }
          }
          const res = makeList(outItems);
          ctx.detectedVisualType = 'list_comprehension';
          ctx.detectedConcept = 'Nested List Comprehension (2D Flattening)';
          ctx.charMap = buildCollectionElementMap(outItems);
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(res),
            rule: `Flattens nested rows into ${outItems.length} elements`,
          });
          return res;
        }
      }

      // Single-clause comprehension: `mapExpr for var in iterSource [if condExpr]`
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
          const keep = condExpr ? isTruthy(evalListExpr(condExpr, ctx)) : true;
          if (keep) {
            outItems.push(evalListExpr(mapExpr, ctx));
          }
        }
        const res = makeList(outItems);
        ctx.detectedVisualType = 'list_comprehension';
        ctx.detectedConcept = condExpr
          ? 'Filtered List Comprehension ([expr for x in seq if cond])'
          : 'List Comprehension ([expr for x in seq])';
        ctx.charMap = buildCollectionElementMap(outItems);
        ctx.intermediateSteps.push({
          expr: s,
          result: formatVal(res),
          rule: condExpr
            ? `Filters and transforms elements where (${condExpr}) is True`
            : `Transforms each element using (${mapExpr})`,
        });
        return res;
      }
    }

    // Standard List literal: [item1, item2, ...]
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    const items = parts.map((p) => evalListExpr(p, ctx));
    const isNested2D = items.length > 0 && items.every((it) => it.type === 'List');
    ctx.detectedVisualType = isNested2D ? 'nested_list_grid' : 'list_element_map';
    ctx.detectedConcept = isNested2D
      ? `2D Nested List / Matrix (${items.length} Rows)`
      : `List Creation (${items.length} Elements)`;
    ctx.charMap = buildCollectionElementMap(items);
    return makeList(items);
  }

  // 4. Tuple literal with parentheses: (10, 20) or (42,)
  if (s.startsWith('(') && s.endsWith(')')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) {
      ctx.detectedVisualType = 'tuple_element_map';
      ctx.detectedConcept = 'Empty Tuple (())';
      return makeTuple([]);
    }
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    const items = parts.map((p) => evalListExpr(p, ctx));
    ctx.detectedVisualType = 'tuple_element_map';
    ctx.detectedConcept =
      items.length === 1
        ? 'Single-Element Tuple ((val,) with trailing comma)'
        : `Tuple Creation (${items.length} Immutable Elements)`;
    ctx.charMap = buildCollectionElementMap(items);
    return makeTuple(items);
  }

  // 5. Tuple packing without parentheses: e.g. 'Delhi', 28.61, 77.20 or b, a
  const topCommaParts = splitTopLevel(s, ',');
  if (topCommaParts.length > 1) {
    const items = topCommaParts.map((p) => evalListExpr(p, ctx));
    ctx.detectedVisualType = 'tuple_pack_unpack';
    ctx.detectedConcept = 'Tuple Packing (Comma-Separated Values)';
    ctx.charMap = buildCollectionElementMap(items);
    return makeTuple(items);
  }

  // 6. Generator sum(...):
  // e.g. sum(matrix[row][col] for row in range(3))
  // or sum(1 for x in exp if x > thresh)
  // or sum(m for _, m in records)
  if (s.startsWith('sum(') && s.includes(' for ') && s.endsWith(')')) {
    const inner = s.slice(4, -1).trim();
    const forIdx = findTopLevelKeywordOp(inner, 'for');
    if (forIdx !== -1) {
      const mapExpr = inner.slice(0, forIdx).trim();
      const rest = inner.slice(forIdx + 3).trim();
      const ifIdx = findTopLevelKeywordOp(rest, 'if');
      const forClause = ifIdx !== -1 ? rest.slice(0, ifIdx).trim() : rest;
      const condExpr = ifIdx !== -1 ? rest.slice(ifIdx + 2).trim() : null;
      const fm = forClause.match(/^(.+?)\s+in\s+(.+)$/);
      if (fm) {
        const loopTarget = fm[1].trim();
        const iterSource = fm[2].trim();
        const srcItems = evalIterableItems(iterSource, ctx);
        let sumVal = 0;
        let isF = false;
        for (const itemVal of srcItems) {
          assignLoopTarget(loopTarget, itemVal, ctx.env);
          const keep = condExpr ? isTruthy(evalListExpr(condExpr, ctx)) : true;
          if (keep) {
            const v = evalListExpr(mapExpr, ctx);
            if (v.type === 'Float') isF = true;
            sumVal += Number(v.val);
          }
        }
        const res = isF ? makeFloat(sumVal) : makeInt(sumVal);
        ctx.intermediateSteps.push({
          expr: s,
          result: formatVal(res),
          rule: 'Generator expression sum across collection',
        });
        return res;
      }
    }
  }

  // 7. Ternary Conditional Expression: body if cond else orelse
  const tern = findTopLevelTernary(s);
  if (tern) {
    const condVal = evalListExpr(tern.cond, ctx);
    return isTruthy(condVal) ? evalListExpr(tern.body, ctx) : evalListExpr(tern.orelse, ctx);
  }

  // 8. Logical OR / AND / NOT
  const orIdx = findTopLevelKeywordOp(s, 'or');
  if (orIdx !== -1) {
    const lv = evalListExpr(s.slice(0, orIdx), ctx);
    if (isTruthy(lv)) return lv;
    return evalListExpr(s.slice(orIdx + 2), ctx);
  }
  const andIdx = findTopLevelKeywordOp(s, 'and');
  if (andIdx !== -1) {
    const lv = evalListExpr(s.slice(0, andIdx), ctx);
    if (!isTruthy(lv)) return lv;
    return evalListExpr(s.slice(andIdx + 3), ctx);
  }
  if (/^not(?:\s+|\()/.test(s)) {
    const argVal = evalListExpr(s.replace(/^not\s*/, ''), ctx);
    return makeBool(!isTruthy(argVal));
  }

  // 9. Comparisons & Membership (`in`, `not in`, `==`, `!=`, `<`, `>`, `<=`, `>=`)
  const cmpSplit = splitTopLevelComparisons(s);
  if (cmpSplit) {
    const evaled: RuntimeVal[] = cmpSplit.operands.map((opnd) => evalListExpr(opnd, ctx));
    let allOk = true;
    for (let i = 0; i < cmpSplit.ops.length; i++) {
      const op = cmpSplit.ops[i];
      const left = evaled[i];
      const right = evaled[i + 1];
      let ok = false;
      if (op === 'in' || op === 'not in') {
        if (right.type === 'List' || right.type === 'Tuple') {
          const arr = right.val as RuntimeVal[];
          const foundIdx = arr.findIndex((it) => runtimeValEquals(it, left));
          ok = op === 'in' ? foundIdx !== -1 : foundIdx === -1;
          ctx.charMap = buildCollectionElementMap(
            arr,
            foundIdx !== -1 ? new Set([foundIdx]) : new Set()
          );
        } else {
          const inc = String(right.val).includes(String(left.val));
          ok = op === 'in' ? inc : !inc;
        }
      } else if (op === '==') {
        ok = runtimeValEquals(left, right);
      } else if (op === '!=') {
        ok = !runtimeValEquals(left, right);
      } else if (op === '<') {
        ok = left.val < right.val;
      } else if (op === '>') {
        ok = left.val > right.val;
      } else if (op === '<=') {
        ok = left.val <= right.val;
      } else if (op === '>=') {
        ok = left.val >= right.val;
      }
      ctx.intermediateSteps.push({
        expr: `${formatVal(left)} ${op} ${formatVal(right)}`,
        result: ok ? 'True' : 'False',
        rule: `Comparison (${op})`,
      });
      if (!ok) {
        allOk = false;
        break;
      }
    }
    return makeBool(allOk);
  }

  // 10. Addition / List Concatenation (+) and Subtraction (-)
  const addSub = findTopLevelBinarySymbol(s, ['+', '-']);
  if (addSub) {
    const lv = evalListExpr(s.slice(0, addSub.idx), ctx);
    const rv = evalListExpr(s.slice(addSub.idx + 1), ctx);
    if (addSub.op === '+' && lv.type === 'List' && rv.type === 'List') {
      const combined = [...(lv.val as RuntimeVal[]), ...(rv.val as RuntimeVal[])];
      const res = makeList(combined.map(cloneRuntimeVal));
      ctx.intermediateSteps.push({
        expr: `${formatVal(lv)} + ${formatVal(rv)}`,
        result: formatVal(res),
        rule: 'List Concatenation (+)',
      });
      return res;
    }
    if (addSub.op === '+' && lv.type === 'Tuple' && rv.type === 'Tuple') {
      const combined = [...(lv.val as RuntimeVal[]), ...(rv.val as RuntimeVal[])];
      return makeTuple(combined.map(cloneRuntimeVal));
    }
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const num = addSub.op === '+' ? Number(lv.val) + Number(rv.val) : Number(lv.val) - Number(rv.val);
    return isF ? makeFloat(num) : makeInt(num);
  }

  // 11. Multiplication (*), Division (/), Floor Division (//), Modulo (%)
  const mulDiv = findTopLevelBinarySymbol(s, ['//', '*', '/', '%']);
  if (mulDiv) {
    const lv = evalListExpr(s.slice(0, mulDiv.idx), ctx);
    const rv = evalListExpr(s.slice(mulDiv.idx + mulDiv.op.length), ctx);
    if (mulDiv.op === '*' && (lv.type === 'List' || rv.type === 'List')) {
      const listPart = (lv.type === 'List' ? lv.val : rv.val) as RuntimeVal[];
      const count = Number(lv.type === 'List' ? rv.val : lv.val);
      const out: RuntimeVal[] = [];
      for (let k = 0; k < count; k++) {
        out.push(...listPart.map(cloneRuntimeVal));
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
    return isF ? makeFloat(mod) : makeInt(mod);
  }

  // 12. Exponentiation (**)
  const powMatch = findTopLevelBinarySymbol(s, ['**'], true);
  if (powMatch) {
    const lv = evalListExpr(s.slice(0, powMatch.idx), ctx);
    const rv = evalListExpr(s.slice(powMatch.idx + 2), ctx);
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const n = Math.pow(Number(lv.val), Number(rv.val));
    return isF ? makeFloat(n) : makeInt(n);
  }

  // 13. Unary - / +
  if ((s.startsWith('-') || s.startsWith('+')) && !/^[-+]\d+(\.\d+)?$/.test(s)) {
    const argVal = evalListExpr(s.slice(1), ctx);
    const num = s[0] === '-' ? -Number(argVal.val) : +Number(argVal.val);
    return argVal.type === 'Float' ? makeFloat(num) : makeInt(num);
  }

  // 14. Indexing & Slicing: target[idx] or target[start:stop:step] or matrix[r][c]
  const bracketMatch = findTopLevelTrailingBracket(s);
  if (bracketMatch) {
    const targetVal = evalListExpr(bracketMatch.base, ctx);
    const inner = bracketMatch.bracketContent;

    if (targetVal.type === 'List' || targetVal.type === 'Tuple') {
      const arr = targetVal.val as RuntimeVal[];
      const isTup = targetVal.type === 'Tuple';

      if (inner.includes(':')) {
        const parts = inner.split(':').map((p) => p.trim());
        const startVal = parts[0] ? Number(evalListExpr(parts[0], ctx).val) : null;
        const stopVal =
          parts[1] !== undefined && parts[1] !== '' ? Number(evalListExpr(parts[1], ctx).val) : null;
        const stepVal =
          parts[2] !== undefined && parts[2] !== '' ? Number(evalListExpr(parts[2], ctx).val) : null;

        const sliceRes = computeCollectionSlice(arr, startVal, stopVal, stepVal);
        const isFullCopy = inner.trim() === ':';
        ctx.detectedVisualType = isFullCopy ? 'copy_reference' : 'slicing_visual';
        ctx.detectedConcept = isFullCopy
          ? 'Shallow List Copy via Full Slice ([:])'
          : `${isTup ? 'Tuple' : 'List'} Slicing ([${inner}])`;
        ctx.charMap = buildCollectionElementMap(arr, sliceRes.selectedIndices);
        ctx.sliceInfo = {
          start: startVal === null ? 'default' : String(startVal),
          stop: stopVal === null ? 'end' : `${stopVal} (Exclusive)`,
          step: String(sliceRes.step),
          note: isFullCopy
            ? 'Creates a new independent List copy in memory'
            : 'Stop index is exclusive (not included in sliced result)',
        };
        const res = isTup ? makeTuple(sliceRes.result) : makeList(sliceRes.result);
        ctx.intermediateSteps.push({
          expr: `${bracketMatch.base}[${inner}]`,
          result: formatVal(res),
          rule: isFullCopy
            ? `Copies all ${arr.length} elements into a separate List`
            : `Start=${ctx.sliceInfo.start}, Stop=${ctx.sliceInfo.stop}, Step=${ctx.sliceInfo.step}`,
        });
        return res;
      } else {
        const rawIdx = Number(evalListExpr(inner, ctx).val);
        const actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
        const elem = arr[actualIdx] ?? makeNone();
        const is2DAccess = bracketMatch.base.includes('[');
        ctx.detectedVisualType = is2DAccess ? 'nested_list_grid' : 'indexing_visual';
        ctx.detectedConcept = is2DAccess
          ? `2D Nested Matrix Indexing (${s})`
          : `${isTup ? 'Tuple' : 'List'} Element Indexing ([${rawIdx}])`;
        ctx.charMap = buildCollectionElementMap(arr, new Set([actualIdx]));
        ctx.intermediateSteps.push({
          expr: `${bracketMatch.base}[${rawIdx}]`,
          result: formatVal(elem),
          rule:
            rawIdx < 0
              ? `Negative index ${rawIdx} maps to element at position ${actualIdx} (${formatVal(elem)})`
              : `Index ${rawIdx} selects element ${formatVal(elem)}`,
        });
        return elem;
      }
    }
  }

  // 15. Method Calls: obj.method(args)
  const dotIdx = findTopLevelMethodDot(s);
  if (dotIdx !== -1) {
    const objExpr = s.slice(0, dotIdx).trim();
    const methodPart = s.slice(dotIdx + 1).trim();
    const mMatch = methodPart.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
    if (mMatch) {
      const methodName = mMatch[1];
      const argsInner = mMatch[2].trim();
      const objVal = evalListExpr(objExpr, ctx);

      // String methods used in List questions: .split(), .strip(), .upper(), .startswith()
      if (objVal.type === 'String') {
        const str = String(objVal.val);
        const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalListExpr(a, ctx)) : [];
        if (methodName === 'strip') return makeStr(str.trim());
        if (methodName === 'upper') return makeStr(str.toUpperCase());
        if (methodName === 'lower') return makeStr(str.toLowerCase());
        if (methodName === 'startswith') {
          return makeBool(str.startsWith(String(argVals[0]?.val ?? '')));
        }
        if (methodName === 'split') {
          let parts: string[];
          if (argVals.length === 0) {
            const t = str.trim();
            parts = t ? t.split(/\s+/) : [];
          } else {
            const sep = String(argVals[0].val);
            if (argVals[1] !== undefined) {
              const maxSplit = Number(argVals[1].val);
              const all = str.split(sep);
              if (all.length > maxSplit) {
                parts = [...all.slice(0, maxSplit), all.slice(maxSplit).join(sep)];
              } else {
                parts = all;
              }
            } else {
              parts = str.split(sep);
            }
          }
          const res = makeList(parts.map(makeStr));
          ctx.charMap = buildCollectionElementMap(res.val as RuntimeVal[]);
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(res),
            rule: `Splits input into a List of ${parts.length} string elements`,
          });
          return res;
        }
      }

      // List / Tuple methods
      if (objVal.type === 'List' || objVal.type === 'Tuple') {
        const arr = objVal.val as RuntimeVal[];
        const beforeStr = formatVal(objVal);

        // .sort(...) on List (supports reverse=True and key=lambda x: x[1])
        if (methodName === 'sort' && objVal.type === 'List') {
          const isRev = argsInner.includes('reverse=True');
          const hasTupleIndexKey = argsInner.includes('[1]');
          arr.sort((a, b) => {
            const va = hasTupleIndexKey && (a.type === 'Tuple' || a.type === 'List') ? a.val[1].val : a.val;
            const vb = hasTupleIndexKey && (b.type === 'Tuple' || b.type === 'List') ? b.val[1].val : b.val;
            if (va < vb) return isRev ? 1 : -1;
            if (va > vb) return isRev ? -1 : 1;
            return 0;
          });
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'sorting_visual';
          ctx.detectedConcept = isRev ? 'In-Place Descending Sort (.sort(reverse=True))' : 'In-Place List Sort (.sort())';
          ctx.charMap = buildCollectionElementMap(arr);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.sort(${argsInner})`,
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.sort(${argsInner})`,
            result: `${afterStr} (returns None)`,
            rule: 'Sorts the List in-place and returns None',
          });
          return makeNone();
        }

        if (methodName === 'reverse' && objVal.type === 'List') {
          arr.reverse();
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'sorting_visual';
          ctx.detectedConcept = 'In-Place List Reversal (.reverse())';
          ctx.charMap = buildCollectionElementMap(arr);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: '.reverse()',
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.reverse()`,
            result: afterStr,
            rule: 'Reverses element order in-place',
          });
          return makeNone();
        }

        const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalListExpr(a, ctx)) : [];

        if (methodName === 'append' && objVal.type === 'List') {
          const item = argVals[0] ? cloneRuntimeVal(argVals[0]) : makeNone();
          arr.push(item);
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'append_insert_extend';
          ctx.detectedConcept = 'List .append() (Add Element at End)';
          ctx.charMap = buildCollectionElementMap(arr, new Set([arr.length - 1]));
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.append(${formatVal(item)})`,
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.append(${formatVal(item)})`,
            result: afterStr,
            rule: `Appends ${formatVal(item)} at Index ${arr.length - 1}`,
          });
          return makeNone();
        }

        if (methodName === 'insert' && objVal.type === 'List') {
          const idx = Number(argVals[0]?.val ?? 0);
          const item = argVals[1] ? cloneRuntimeVal(argVals[1]) : makeNone();
          const actualIdx = idx < 0 ? Math.max(0, arr.length + idx) : Math.min(arr.length, idx);
          arr.splice(actualIdx, 0, item);
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'append_insert_extend';
          ctx.detectedConcept = `List .insert(${idx}, ${formatVal(item)})`;
          ctx.charMap = buildCollectionElementMap(arr, new Set([actualIdx]));
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.insert(${idx}, ${formatVal(item)})`,
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.insert(${idx}, ${formatVal(item)})`,
            result: afterStr,
            rule: `Inserts ${formatVal(item)} at Index ${actualIdx}, shifting right elements`,
          });
          return makeNone();
        }

        if (methodName === 'extend' && objVal.type === 'List') {
          const extItems = (argVals[0]?.val as RuntimeVal[]) || [];
          const startNewIdx = arr.length;
          const addedSet = new Set<number>();
          extItems.forEach((it, k) => {
            arr.push(cloneRuntimeVal(it));
            addedSet.add(startNewIdx + k);
          });
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'append_insert_extend';
          ctx.detectedConcept = 'List .extend() (Unpack & Append Iterable)';
          ctx.charMap = buildCollectionElementMap(arr, addedSet);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.extend(${formatVal(argVals[0])})`,
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.extend(${formatVal(argVals[0])})`,
            result: afterStr,
            rule: `Appends all ${extItems.length} elements individually to the List`,
          });
          return makeNone();
        }

        if (methodName === 'remove' && objVal.type === 'List') {
          const target = argVals[0] || makeNone();
          const fIdx = arr.findIndex((it) => runtimeValEquals(it, target));
          if (fIdx !== -1) arr.splice(fIdx, 1);
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'remove_pop_clear';
          ctx.detectedConcept = `List .remove(${formatVal(target)})`;
          ctx.charMap = buildCollectionElementMap(arr);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.remove(${formatVal(target)})`,
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.remove(${formatVal(target)})`,
            result: afterStr,
            rule: `Removes first occurrence of ${formatVal(target)} (at Index ${fIdx})`,
          });
          return makeNone();
        }

        if (methodName === 'pop' && objVal.type === 'List') {
          const rawIdx = argVals[0] !== undefined ? Number(argVals[0].val) : arr.length - 1;
          const actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
          const [removed] = arr.splice(actualIdx, 1);
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'remove_pop_clear';
          ctx.detectedConcept =
            argVals[0] !== undefined ? `List .pop(${rawIdx})` : 'List .pop() (Remove & Return Last)';
          ctx.charMap = buildCollectionElementMap(arr);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.pop(${argVals[0] !== undefined ? rawIdx : ''}) ➔ returns ${formatVal(removed)}`,
            result: afterStr,
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.pop(${argVals[0] !== undefined ? rawIdx : ''})`,
            result: `Removed ${formatVal(removed)} | Remaining: ${afterStr}`,
            rule: `Removes and returns element at Index ${actualIdx}`,
          });
          return removed || makeNone();
        }

        if (methodName === 'clear' && objVal.type === 'List') {
          arr.length = 0;
          ctx.detectedVisualType = 'remove_pop_clear';
          ctx.detectedConcept = 'List .clear() (Remove All Elements)';
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: '.clear()',
            result: '[]',
          };
          ctx.intermediateSteps.push({
            expr: `${objExpr}.clear()`,
            result: '[]',
            rule: 'Empties all elements from the List in-place',
          });
          return makeNone();
        }

        if (methodName === 'index') {
          const target = argVals[0] || makeNone();
          const fIdx = arr.findIndex((it) => runtimeValEquals(it, target));
          ctx.detectedVisualType = 'indexing_visual';
          ctx.detectedConcept = `${objVal.type} .index(${formatVal(target)})`;
          ctx.charMap = buildCollectionElementMap(arr, fIdx !== -1 ? new Set([fIdx]) : new Set());
          ctx.intermediateSteps.push({
            expr: `${objExpr}.index(${formatVal(target)})`,
            result: String(fIdx),
            rule: `First occurrence of ${formatVal(target)} is at Index ${fIdx}`,
          });
          return makeInt(fIdx);
        }

        if (methodName === 'count') {
          const target = argVals[0] || makeNone();
          const matchedSet = new Set<number>();
          let cnt = 0;
          arr.forEach((it, idx) => {
            if (runtimeValEquals(it, target)) {
              cnt++;
              matchedSet.add(idx);
            }
          });
          ctx.detectedVisualType =
            objVal.type === 'Tuple' ? 'tuple_element_map' : 'list_element_map';
          ctx.detectedConcept = `${objVal.type} .count(${formatVal(target)})`;
          ctx.charMap = buildCollectionElementMap(arr, matchedSet);
          ctx.intermediateSteps.push({
            expr: `${objExpr}.count(${formatVal(target)})`,
            result: String(cnt),
            rule: `${formatVal(target)} appears ${cnt} time(s)`,
          });
          return makeInt(cnt);
        }
      }
    }
  }

  // 16. Built-in Function Calls: len(), sum(), max(), min(), sorted(), list(), tuple(), type(), map(), int(), float(), input()
  const callMatch = s.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
  if (callMatch) {
    const fn = callMatch[1];
    const inner = callMatch[2].trim();

    if (fn === 'map') {
      const mParts = splitTopLevel(inner, ',');
      const mapFn = mParts[0].trim();
      const seqVal = evalListExpr(mParts[1].trim(), ctx);
      const arr = (seqVal.val as RuntimeVal[]) || [];
      const mapped = arr.map((it) =>
        mapFn === 'int'
          ? makeInt(Number(it.val))
          : mapFn === 'float'
          ? makeFloat(Number(it.val))
          : makeStr(String(it.val))
      );
      return makeList(mapped);
    }

    const argVals = inner ? splitTopLevel(inner, ',').map((a) => evalListExpr(a, ctx)) : [];

    if (fn === 'input') {
      const rawIn = ctx.inputCursor < ctx.inputs.length ? ctx.inputs[ctx.inputCursor++] : '';
      return makeStr(rawIn);
    }

    if (fn === 'len') {
      const target = argVals[0];
      const len =
        target?.type === 'List' || target?.type === 'Tuple'
          ? (target.val as RuntimeVal[]).length
          : String(target?.val ?? '').length;
      ctx.intermediateSteps.push({
        expr: `len(${inner})`,
        result: String(len),
        rule: `Total number of elements is ${len}`,
      });
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
      const res = isF ? makeFloat(sumVal) : makeInt(sumVal);
      ctx.intermediateSteps.push({
        expr: `sum(${formatVal(argVals[0])})`,
        result: formatVal(res),
        rule: `Adds all ${arr.length} numbers together ➔ ${formatVal(res)}`,
      });
      return res;
    }

    if (fn === 'max' || fn === 'min') {
      const arr = (argVals[0]?.val as RuntimeVal[]) || [];
      if (arr.length === 0) return makeInt(0);
      let best = arr[0];
      let bestIdx = 0;
      arr.forEach((it, idx) => {
        if (fn === 'max' ? it.val > best.val : it.val < best.val) {
          best = it;
          bestIdx = idx;
        }
      });
      ctx.charMap = buildCollectionElementMap(arr, new Set([bestIdx]));
      ctx.intermediateSteps.push({
        expr: `${fn}(${formatVal(argVals[0])})`,
        result: formatVal(best),
        rule: `${fn === 'max' ? 'Largest' : 'Smallest'} element is ${formatVal(best)} at Index ${bestIdx}`,
      });
      return cloneRuntimeVal(best);
    }

    if (fn === 'sorted') {
      const srcArr = ((argVals[0]?.val as RuntimeVal[]) || []).map(cloneRuntimeVal);
      const beforeStr = formatVal(argVals[0]);
      srcArr.sort((a, b) => (a.val < b.val ? -1 : a.val > b.val ? 1 : 0));
      const res = makeList(srcArr);
      ctx.detectedVisualType = 'sorting_visual';
      ctx.detectedConcept = 'Built-in sorted() (Returns New Sorted List)';
      ctx.charMap = buildCollectionElementMap(srcArr);
      ctx.stringTransformInfo = {
        original: beforeStr,
        operation: 'sorted(...)',
        result: formatVal(res),
        immutableNote: 'Original collection remains unchanged',
      };
      ctx.intermediateSteps.push({
        expr: `sorted(${beforeStr})`,
        result: formatVal(res),
        rule: 'Creates and returns a new sorted List without modifying original',
      });
      return res;
    }

    if (fn === 'list') {
      const target = argVals[0];
      let items: RuntimeVal[] = [];
      if (target?.type === 'Tuple' || target?.type === 'List') {
        items = (target.val as RuntimeVal[]).map(cloneRuntimeVal);
      } else if (target?.type === 'String') {
        items = Array.from(String(target.val)).map(makeStr);
      }
      const res = makeList(items);
      ctx.detectedVisualType =
        target?.type === 'Tuple' ? 'mutability_comparison' : 'list_element_map';
      ctx.detectedConcept =
        target?.type === 'Tuple'
          ? 'Convert Immutable Tuple to Mutable List (list())'
          : 'Convert Iterable to List (list())';
      ctx.charMap = buildCollectionElementMap(items);
      ctx.stringTransformInfo = {
        original: formatVal(target),
        operation: 'list(...)',
        result: formatVal(res),
      };
      ctx.intermediateSteps.push({
        expr: `list(${formatVal(target)})`,
        result: formatVal(res),
        rule: `Converts ${target?.type || 'iterable'} into a mutable List`,
      });
      return res;
    }

    if (fn === 'tuple') {
      const target = argVals[0];
      let items: RuntimeVal[] = [];
      if (target?.type === 'List' || target?.type === 'Tuple') {
        items = (target.val as RuntimeVal[]).map(cloneRuntimeVal);
      } else if (target?.type === 'String') {
        items = Array.from(String(target.val)).map(makeStr);
      }
      const res = makeTuple(items);
      ctx.detectedVisualType = 'mutability_comparison';
      ctx.detectedConcept = 'Convert List back to Immutable Tuple (tuple())';
      ctx.charMap = buildCollectionElementMap(items);
      ctx.stringTransformInfo = {
        original: formatVal(target),
        operation: 'tuple(...)',
        result: formatVal(res),
        immutableNote: 'Tuple is now locked (Immutable)',
      };
      ctx.intermediateSteps.push({
        expr: `tuple(${formatVal(target)})`,
        result: formatVal(res),
        rule: `Converts ${target?.type || 'iterable'} into an immutable Tuple`,
      });
      return res;
    }

    if (fn === 'type') {
      const t = argVals[0]?.type;
      const pyType =
        t === 'List'
          ? "<class 'list'>"
          : t === 'Tuple'
          ? "<class 'tuple'>"
          : t === 'Integer'
          ? "<class 'int'>"
          : t === 'Float'
          ? "<class 'float'>"
          : t === 'Boolean'
          ? "<class 'bool'>"
          : "<class 'str'>";
      return makeStr(pyType);
    }

    if (fn === 'int') return makeInt(Number(argVals[0]?.val ?? 0));
    if (fn === 'float') return makeFloat(Number(argVals[0]?.val ?? 0));
    if (fn === 'str') return makeStr(formatPrintVal(argVals[0]));
  }

  // 17. Literals & Variable Lookups
  if (s === 'True') return makeBool(true);
  if (s === 'False') return makeBool(false);
  if (s === 'None') return makeNone();
  if (/^[-+]?\d+(\.\d+)?$/.test(s)) {
    return s.includes('.') ? makeFloat(Number(s)) : makeInt(Number(s));
  }

  return ctx.env[s] ?? makeNone();
}

// ─── INDENTATION AST PARSER & EXECUTION ENGINE ───

interface SourceStmtLine {
  lineNum: number;
  raw: string;
  indent: number;
  trimmed: string;
}

type BlockNode =
  | { kind: 'simple'; line: SourceStmtLine }
  | {
      kind: 'if_chain';
      branches: {
        branchType: 'if' | 'elif' | 'else';
        headerLine: SourceStmtLine;
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
    }
  | {
      kind: 'try_except';
      tryBody: BlockNode[];
      exceptBody: BlockNode[];
    };

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

    if (cur.trimmed.startsWith('if ') && cur.trimmed.endsWith(':')) {
      const branches: {
        branchType: 'if' | 'elif' | 'else';
        headerLine: SourceStmtLine;
        condExpr?: string;
        body: BlockNode[];
      }[] = [];
      const baseIndent = cur.indent;

      while (i < lines.length && lines[i].indent === baseIndent) {
        const hdr = lines[i];
        if (hdr.trimmed.startsWith('if ') && hdr.trimmed.endsWith(':')) {
          if (branches.length > 0) break;
          const bodyRes = parseBlocks(lines, i + 1, baseIndent + 1);
          branches.push({
            branchType: 'if',
            headerLine: hdr,
            condExpr: hdr.trimmed.slice(3, -1).trim(),
            body: bodyRes.nodes,
          });
          i = bodyRes.nextIdx;
        } else if (hdr.trimmed.startsWith('elif ') && hdr.trimmed.endsWith(':')) {
          const bodyRes = parseBlocks(lines, i + 1, baseIndent + 1);
          branches.push({
            branchType: 'elif',
            headerLine: hdr,
            condExpr: hdr.trimmed.slice(5, -1).trim(),
            body: bodyRes.nodes,
          });
          i = bodyRes.nextIdx;
        } else if (hdr.trimmed === 'else:') {
          const bodyRes = parseBlocks(lines, i + 1, baseIndent + 1);
          branches.push({
            branchType: 'else',
            headerLine: hdr,
            body: bodyRes.nodes,
          });
          i = bodyRes.nextIdx;
          break;
        } else {
          break;
        }
      }
      nodes.push({ kind: 'if_chain', branches });
      continue;
    }

    if (cur.trimmed.startsWith('for ') && cur.trimmed.endsWith(':')) {
      const m = cur.trimmed.match(/^for\s+(.+?)\s+in\s+(.+):$/);
      const targetStr = m ? m[1].trim() : 'x';
      const iterExpr = m ? m[2].trim() : '';
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

    if (cur.trimmed === 'try:') {
      const baseIndent = cur.indent;
      const tryRes = parseBlocks(lines, i + 1, baseIndent + 1);
      i = tryRes.nextIdx;
      let exceptBody: BlockNode[] = [];
      if (i < lines.length && lines[i].indent === baseIndent && lines[i].trimmed.startsWith('except')) {
        const excRes = parseBlocks(lines, i + 1, baseIndent + 1);
        exceptBody = excRes.nodes;
        i = excRes.nextIdx;
      }
      nodes.push({
        kind: 'try_except',
        tryBody: tryRes.nodes,
        exceptBody,
      });
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
  return Object.entries(env).map(([k, v]) => ({
    name: k,
    prevValue: k === changedVar && prevVal !== undefined ? prevVal : undefined,
    value: formatVal(v),
    dataType: v.type,
  }));
}

export function generateListsTuplesTeachingSteps(question: TopicQuestion): TeachingStep[] {
  const rawLines = question.referenceCode.split('\n');
  const stmtLines: SourceStmtLine[] = [];
  for (let i = 0; i < rawLines.length; i++) {
    const raw = rawLines[i];
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const indent = (raw.match(/^(\s*)/)?.[1] || '').length;
    stmtLines.push({ lineNum: i + 1, raw, indent, trimmed });
  }

  const ast = parseBlocks(stmtLines, 0, 0).nodes;
  const env: Record<string, RuntimeVal> = {};
  const inputs = question.sampleInput ? question.sampleInput.split('\n') : [];
  let inputCursor = 0;
  const stdoutLines: string[] = [];
  const drafts: Omit<TeachingStep, 'step' | 'totalSteps'>[] = [];

  function makeCtx(): ListEvalContext {
    return {
      env,
      inputs,
      inputCursor,
      stdoutLines,
      intermediateSteps: [],
      evaluatedOperands: [],
    };
  }

  function runSilentBlock(nodes: BlockNode[]): 'normal' | 'break' | 'continue' | 'eof' {
    for (const node of nodes) {
      if (node.kind === 'simple') {
        const t = node.line.trimmed;
        if (t === 'break') return 'break';
        if (t === 'continue') return 'continue';

        const ctx = makeCtx();
        if (t.includes('input(') && inputCursor >= inputs.length) {
          return 'eof';
        }

        // 1. print(...)
        const pMatch = t.match(/^print\((.*)\)$/);
        if (pMatch) {
          const args = pMatch[1].trim()
            ? splitTopLevel(pMatch[1], ',').map((a) => evalListExpr(a, ctx))
            : [];
          inputCursor = ctx.inputCursor;
          stdoutLines.push(args.map(formatPrintVal).join(' '));
          continue;
        }

        // 2. Augmented assignment: total += num, count += 1
        const augMatch = t.match(/^([a-zA-Z_]\w*)\s*\+=\s*(.+)$/);
        if (augMatch) {
          const vName = augMatch[1];
          const rhs = evalListExpr(augMatch[2], ctx);
          inputCursor = ctx.inputCursor;
          const cur = env[vName];
          const isF = cur?.type === 'Float' || rhs.type === 'Float';
          const num = Number(cur?.val ?? 0) + Number(rhs.val);
          env[vName] = isF ? makeFloat(num) : makeInt(num);
          continue;
        }

        // 3. Indexed item assignment: nums[i] = 99
        const idxAssign = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*=\s*(.+)$/);
        if (idxAssign) {
          const listName = idxAssign[1];
          const idxVal = Number(evalListExpr(idxAssign[2], ctx).val);
          const rhsVal = evalListExpr(idxAssign[3], ctx);
          inputCursor = ctx.inputCursor;
          const targetList = env[listName];
          if (targetList?.type === 'List') {
            const arr = targetList.val as RuntimeVal[];
            const actualIdx = idxVal < 0 ? arr.length + idxVal : idxVal;
            arr[actualIdx] = cloneRuntimeVal(rhsVal);
          }
          continue;
        }

        // 4. Multi-variable unpacking assignment: name, m = input().split()
        const assignMatch = findTopLevelBinarySymbol(t, ['=']);
        const assignIdx = assignMatch ? assignMatch.idx : -1;
        if (
          assignIdx !== -1 &&
          t[assignIdx - 1] !== '!' &&
          t[assignIdx - 1] !== '<' &&
          t[assignIdx - 1] !== '>' &&
          t[assignIdx + 1] !== '='
        ) {
          const lhs = t.slice(0, assignIdx).trim();
          const rhs = t.slice(assignIdx + 1).trim();
          const rhsVal = evalListExpr(rhs, ctx);
          inputCursor = ctx.inputCursor;
          assignLoopTarget(lhs, rhsVal, env);
          continue;
        }

        // 5. Standalone method call: items.append(...), cart.remove(...)
        evalListExpr(t, ctx);
        inputCursor = ctx.inputCursor;
        continue;
      }

      if (node.kind === 'if_chain') {
        for (const br of node.branches) {
          if (br.branchType === 'else') {
            const res = runSilentBlock(br.body);
            if (res !== 'normal') return res;
            break;
          }
          const ctx = makeCtx();
          const cVal = evalListExpr(br.condExpr || 'True', ctx);
          inputCursor = ctx.inputCursor;
          if (isTruthy(cVal)) {
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
          if (res === 'eof') return 'eof';
        }
        continue;
      }

      if (node.kind === 'try_except') {
        const res = runSilentBlock(node.tryBody);
        if (res === 'eof') {
          const excRes = runSilentBlock(node.exceptBody);
          if (excRes !== 'normal') return excRes;
        } else if (res !== 'normal') {
          return res;
        }
        continue;
      }
    }
    return 'normal';
  }

  function executeNodes(nodes: BlockNode[]) {
    for (const node of nodes) {
      if (node.kind === 'while_loop') {
        const hdr = node.headerLine;
        const beforeCart = env.nums ? formatVal(env.nums) : env.cart ? formatVal(env.cart) : '';
        let guard = 0;
        while (guard++ < 100) {
          const ctx = makeCtx();
          const cVal = evalListExpr(node.condExpr, ctx);
          inputCursor = ctx.inputCursor;
          if (!isTruthy(cVal)) break;
          const res = runSilentBlock(node.body);
          if (res === 'break' || res === 'eof') break;
        }

        drafts.push({
          title: `While Loop Collection Processing (Line ${hdr.lineNum})`,
          conceptKey: 'remove_pop_clear',
          speechHinglish: `Line ${hdr.lineNum} पर \`while ${node.condExpr}:\` Loop तब तक चलता है जब तक शर्त पूरी होती रहती है, और List को Step-by-Step Update करता है।`,
          speechEnglish: `Line ${hdr.lineNum} repeatedly executes the \`while ${node.condExpr}:\` loop to update the List.`,
          cardExplanationHinglish: `Loop \`while ${node.condExpr}:\` ने List को Process करके Update किया।`,
          cardExplanationEnglish: `Processed collection using \`while ${node.condExpr}:\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: hdr.trimmed,
          visualSublabel: 'While Loop Mutation',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'while',
          conceptBoxes: [
            { label: hdr.trimmed, sublabel: 'Loop Condition', isActive: true },
            { label: beforeCart || 'Initial State', sublabel: 'Before Loop', isActive: false },
            {
              label: stdoutLines[stdoutLines.length - 1] || 'Updated List',
              sublabel: 'After Loop',
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: 'remove_pop_clear',
            technicalConcept: 'Iterative List Modification (while Loop)',
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: takeSnapshots(env)
                  .map((s) => `${s.name}=${s.value}`)
                  .join(', '),
                rule: 'Repeatedly updates List until condition becomes False',
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

        for (const itemVal of iterItems) {
          assignLoopTarget(node.targetStr, itemVal, env);
          const res = runSilentBlock(node.body);
          if (res === 'break' || res === 'eof') break;
        }

        const isEnum = node.iterExpr.startsWith('enumerate(');
        const isZip = node.iterExpr.startsWith('zip(');
        const isMatrix = node.iterExpr.includes('matrix') || node.targetStr === 'row';

        const vType: OperatorVisualType = isMatrix
          ? 'nested_list_grid'
          : node.targetStr.includes(',')
          ? 'tuple_pack_unpack'
          : 'list_element_map';

        const techConcept = isEnum
          ? 'Indexed Iteration with enumerate()'
          : isZip
          ? 'Parallel Iteration with zip()'
          : isMatrix
          ? '2D Nested List / Matrix Iteration'
          : 'Collection Iteration (for Loop)';

        drafts.push({
          title: `${techConcept} (Line ${hdr.lineNum})`,
          conceptKey: vType,
          speechHinglish: `Line ${hdr.lineNum} पर \`${hdr.trimmed}\` के ज़रिए हम Collection के सभी ${iterItems.length} Elements पर एक-एक करके Loop चलाते हैं और अंदर के Statements Execute करते हैं।`,
          speechEnglish: `Line ${hdr.lineNum} iterates through all ${iterItems.length} elements using \`${hdr.trimmed}\`.`,
          cardExplanationHinglish: `Iteration: \`${hdr.trimmed}\` ने सभी ${iterItems.length} Elements को क्रम से Process किया।`,
          cardExplanationEnglish: `Processed ${iterItems.length} elements via \`${hdr.trimmed}\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: hdr.trimmed,
          visualSublabel: `${iterItems.length} Iterations Completed`,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'for',
          conceptBoxes: [
            { label: `for ${node.targetStr}`, sublabel: 'Loop Variable(s)', isActive: true },
            { label: node.iterExpr, sublabel: `${iterItems.length} Elements`, isActive: true },
            { label: 'Loop Body Executed', sublabel: techConcept, isActive: true },
          ],
          operatorDetails: {
            visualType: vType,
            technicalConcept: techConcept,
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            charMap: buildCollectionElementMap(iterItems),
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: `${iterItems.length} elements processed`,
                rule: techConcept,
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
          const condVal = evalListExpr(condStr, ctx);
          inputCursor = ctx.inputCursor;
          const condBool = isTruthy(condVal);

          drafts.push({
            title: `Check Condition (${condStr}) ➔ ${condBool ? 'True ✅' : 'False ❌'}`,
            conceptKey: 'indexing_visual',
            speechHinglish: `Line ${hdr.lineNum} पर Condition \`${condStr}\` Check होती है, जिसका Result \`${
              condBool ? 'True' : 'False'
            }\` आता है।`,
            speechEnglish: `Line ${hdr.lineNum} evaluates condition \`${condStr}\` to \`${
              condBool ? 'True' : 'False'
            }\`.`,
            cardExplanationHinglish: `Condition \`${condStr}\` ➔ \`${condBool ? 'True ✅' : 'False ❌'}\`।`,
            cardExplanationEnglish: `Condition \`${condStr}\` evaluated to \`${condBool ? 'True' : 'False'}\`.`,
            visualTarget: condStr,
            visualLabel: `${condStr} ➔ ${condBool ? 'True' : 'False'}`,
            visualSublabel: condBool ? 'Branch Selected ✅' : 'Branch Skipped ⏭️',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: hdr.lineNum,
            highlightToken: br.branchType,
            conceptBoxes: [
              { label: condStr, sublabel: 'Condition Check', isActive: true },
              {
                label: condBool ? 'True ✅' : 'False ❌',
                sublabel: condBool ? 'Selected' : 'Skipped',
                isActive: true,
              },
              { label: 'Decision', sublabel: 'Branch Control', isActive: false },
            ],
            operatorDetails: {
              visualType: 'indexing_visual',
              technicalConcept: 'Boundary / Membership Guard Condition',
              activeSourceRange: {
                line: hdr.lineNum,
                startCol: hdr.indent + 1,
                endCol: hdr.raw.length,
                codeText: hdr.trimmed,
              },
              charMap: ctx.charMap,
              intermediateSteps: ctx.intermediateSteps,
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
          const printedVals = argExprs.map((ae) => evalListExpr(ae, ctx));
          inputCursor = ctx.inputCursor;
          const printedLine = printedVals.map(formatPrintVal).join(' ');
          stdoutLines.push(printedLine);
          const cumConsole = stdoutLines.join('\n');

          const firstVal = printedVals[0];
          if (!ctx.charMap && (firstVal?.type === 'List' || firstVal?.type === 'Tuple')) {
            ctx.charMap = buildCollectionElementMap(firstVal.val as RuntimeVal[]);
          }

          const vType: OperatorVisualType =
            ctx.detectedVisualType ||
            (firstVal?.type === 'Tuple'
              ? 'tuple_element_map'
              : firstVal?.type === 'List'
              ? 'list_element_map'
              : 'console');
          const techConcept = ctx.detectedConcept || 'Console Output (print)';

          drafts.push({
            title:
              vType === 'indexing_visual'
                ? `Element Index Lookup (${inner} ➔ ${printedLine})`
                : vType === 'slicing_visual'
                ? `Collection Slice (${inner} ➔ ${printedLine})`
                : `Evaluate & Print (Line ${line.lineNum})`,
            conceptKey: vType,
            speechHinglish: `Line ${line.lineNum} पर \`${t}\` Execute होकर Console पर \`${printedLine}\` Print करता है।`,
            speechEnglish: `Line ${line.lineNum} executes \`${t}\` and outputs \`${printedLine}\` to the Console.`,
            cardExplanationHinglish: `Line ${line.lineNum}: \`${t}\` का Result \`${printedLine}\` Console पर Print होता है।`,
            cardExplanationEnglish: `Outputs \`${printedLine}\` to the Console.`,
            visualTarget: inner,
            visualLabel: `Output: ${printedLine}`,
            visualSublabel: techConcept,
            consoleOutput: cumConsole,
            isConsoleVisible: true,
            highlightLine: line.lineNum,
            highlightToken: 'print',
            conceptBoxes: [
              { label: inner, sublabel: techConcept, isActive: true },
              { label: printedLine, sublabel: 'Evaluated Result', isActive: true },
              { label: 'Console Output', sublabel: 'Displayed on Screen', isActive: true },
            ],
            operatorDetails: {
              visualType: vType,
              technicalConcept: techConcept,
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              charMap: ctx.charMap,
              sliceInfo: ctx.sliceInfo,
              stringTransformInfo: ctx.stringTransformInfo,
              intermediateSteps:
                ctx.intermediateSteps.length > 0
                  ? ctx.intermediateSteps
                  : [{ expr: t, result: printedLine, rule: 'Prints to Console' }],
              intermediateResult: printedLine,
              variableSnapshots: takeSnapshots(env),
            },
          });
          continue;
        }

        // 2. Indexed Element Mutation: colors[0] = 'Yellow', marks[idx] = new_mark, temp[2] = 200
        const idxAssign = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*=\s*(.+)$/);
        if (idxAssign) {
          const listName = idxAssign[1];
          const idxExpr = idxAssign[2].trim();
          const rhsExpr = idxAssign[3].trim();
          const targetObj = env[listName];
          const beforeStr = formatVal(targetObj);
          const rawIdx = Number(evalListExpr(idxExpr, ctx).val);
          const newElem = evalListExpr(rhsExpr, ctx);
          inputCursor = ctx.inputCursor;

          let actualIdx = rawIdx;
          let oldElemStr = '';
          if (targetObj?.type === 'List') {
            const arr = targetObj.val as RuntimeVal[];
            actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
            oldElemStr = formatVal(arr[actualIdx]);
            arr[actualIdx] = cloneRuntimeVal(newElem);
            ctx.charMap = buildCollectionElementMap(arr, new Set([actualIdx]));
          }
          const afterStr = formatVal(targetObj);

          drafts.push({
            title: `List Element Mutation (${listName}[${actualIdx}] = ${formatVal(newElem)})`,
            conceptKey: 'mutation_visual',
            speechHinglish: `Line ${line.lineNum} पर क्योंकि Python में List Mutable होती है, इसलिए \`${listName}[${idxExpr}] = ${rhsExpr}\` सीधे Index ${actualIdx} के पुराने Element ${oldElemStr} को हटाकर नया Element \`${formatVal(
              newElem
            )}\` Store कर देता है! अब \`${listName}\` बदलकर \`${afterStr}\` हो गई है।`,
            speechEnglish: `On Line ${line.lineNum}, because Lists are mutable, \`${t}\` replaces the element at Index ${actualIdx} (${oldElemStr}) with \`${formatVal(
              newElem
            )}\` in-place.`,
            cardExplanationHinglish: `List Mutation (In-Place Update): Index ${actualIdx} पर ${oldElemStr} बदलकर \`${formatVal(
              newElem
            )}\` हो गया। Before: \`${beforeStr}\` ➔ After: \`${afterStr}\`।`,
            cardExplanationEnglish: `Mutates \`${listName}\` at Index ${actualIdx}: \`${beforeStr}\` ➔ \`${afterStr}\`.`,
            visualTarget: `${listName}[${idxExpr}]`,
            visualLabel: `${listName}[${actualIdx}] ➔ ${formatVal(newElem)}`,
            visualSublabel: 'Mutable List Element Update',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: listName,
            conceptBoxes: [
              { label: `Before: ${beforeStr}`, sublabel: `Old [${actualIdx}] = ${oldElemStr}`, isActive: false },
              { label: `Update Index ${actualIdx}`, sublabel: `New Value: ${formatVal(newElem)}`, isActive: true },
              { label: `After: ${afterStr}`, sublabel: 'Mutated In-Place', isActive: true },
            ],
            operatorDetails: {
              visualType: 'mutation_visual',
              technicalConcept: 'List Mutability & In-Place Element Update',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              charMap: ctx.charMap,
              stringTransformInfo: {
                original: beforeStr,
                operation: `[${actualIdx}] = ${formatVal(newElem)}`,
                result: afterStr,
              },
              intermediateSteps: [
                {
                  expr: t,
                  result: afterStr,
                  rule: `Replaces element at Index ${actualIdx} (${oldElemStr} ➔ ${formatVal(newElem)})`,
                },
              ],
              variableSnapshots: takeSnapshots(env, listName, beforeStr),
            },
          });
          continue;
        }

        // 3. Variable Assignment or Unpacking: lhs = rhs (e.g. x, y, z = point or a, b = b, a or fruits = [...])
        const assignMatch = findTopLevelBinarySymbol(t, ['=']);
        const assignIdx = assignMatch ? assignMatch.idx : -1;
        if (
          assignIdx !== -1 &&
          t[assignIdx - 1] !== '!' &&
          t[assignIdx - 1] !== '<' &&
          t[assignIdx - 1] !== '>' &&
          t[assignIdx + 1] !== '='
        ) {
          const lhs = t.slice(0, assignIdx).trim();
          const rhs = t.slice(assignIdx + 1).trim();

          // Check if LHS is Tuple Unpacking (contains comma: e.g. `x, y, z = point` or `a, b = b, a`)
          if (lhs.includes(',')) {
            const rhsVal = evalListExpr(rhs, ctx);
            inputCursor = ctx.inputCursor;
            assignLoopTarget(lhs, rhsVal, env);
            const lhsVars = lhs.split(',').map((v) => v.trim());
            const mappingStr = lhsVars.map((v) => `${v} = ${formatVal(env[v])}`).join(', ');

            drafts.push({
              title: `Tuple Unpacking (${lhs} = ${rhs})`,
              conceptKey: 'tuple_pack_unpack',
              speechHinglish: `Line ${line.lineNum} पर Tuple Unpacking हो रही है! Right Side की Collection \`${formatVal(
                rhsVal
              )}\` के Elements क्रम से Left Side के Variables में Map हो जाते हैं: \`${mappingStr}\`।`,
              speechEnglish: `Line ${line.lineNum} unpacks \`${formatVal(
                rhsVal
              )}\` directly into variables: \`${mappingStr}\`.`,
              cardExplanationHinglish: `Tuple Unpacking: \`${formatVal(
                rhsVal
              )}\` ➔ \`${mappingStr}\`।`,
              cardExplanationEnglish: `Unpacks \`${formatVal(rhsVal)}\` into \`${mappingStr}\`.`,
              visualTarget: lhs,
              visualLabel: mappingStr,
              visualSublabel: 'Tuple Unpacking',
              consoleOutput: stdoutLines.join('\n'),
              isConsoleVisible: stdoutLines.length > 0,
              highlightLine: line.lineNum,
              highlightToken: lhsVars[0],
              conceptBoxes: [
                { label: rhs, sublabel: `Packed: ${formatVal(rhsVal)}`, isActive: true },
                { label: lhs, sublabel: 'Target Variables', isActive: true },
                { label: mappingStr, sublabel: 'Unpacked Values', isActive: true },
              ],
              operatorDetails: {
                visualType: 'tuple_pack_unpack',
                technicalConcept: 'Sequence / Tuple Unpacking Assignment',
                activeSourceRange: {
                  line: line.lineNum,
                  startCol: line.indent + 1,
                  endCol: line.raw.length,
                  codeText: t,
                },
                charMap:
                  rhsVal.type === 'List' || rhsVal.type === 'Tuple'
                    ? buildCollectionElementMap(rhsVal.val as RuntimeVal[])
                    : undefined,
                intermediateSteps: [
                  {
                    expr: t,
                    result: mappingStr,
                    rule: 'Unpacks each element in order into its corresponding variable',
                  },
                ],
                variableSnapshots: takeSnapshots(env),
              },
            });
            continue;
          }

          // Single variable assignment: varName = rhs
          const varName = lhs;
          const prevValStr = env[varName] ? formatVal(env[varName]) : undefined;
          const newVal = evalListExpr(rhs, ctx);
          inputCursor = ctx.inputCursor;
          env[varName] = newVal;

          if (!ctx.charMap && (newVal.type === 'List' || newVal.type === 'Tuple')) {
            ctx.charMap = buildCollectionElementMap(newVal.val as RuntimeVal[]);
          }

          const vType: OperatorVisualType =
            ctx.detectedVisualType ||
            (newVal.type === 'Tuple'
              ? 'tuple_element_map'
              : newVal.type === 'List'
              ? 'list_element_map'
              : 'indexing_visual');

          const techConcept =
            ctx.detectedConcept ||
            (newVal.type === 'Tuple'
              ? 'Tuple Creation (Immutable Sequence)'
              : newVal.type === 'List'
              ? 'List Creation (Mutable Sequence)'
              : 'Variable Assignment');

          let speechHi = `Line ${line.lineNum} पर \`${rhs}\` Evaluate होकर Variable \`${varName}\` में \`${formatVal(
            newVal
          )}\` (${newVal.type}) Store करता है।`;
          let cardHi = `Variable \`${varName}\` = \`${formatVal(newVal)}\` (${newVal.type})।`;

          if (newVal.type === 'List' || newVal.type === 'Tuple') {
            const arr = newVal.val as RuntimeVal[];
            speechHi = `Line ${line.lineNum} पर \`${varName}\` एक ${newVal.type} है जिसमें ${
              arr.length
            } Elements हैं: \`${formatVal(newVal)}\`। ${
              newVal.type === 'Tuple'
                ? 'Tuple Immutable होती है (इसके Elements को बदला नहीं जा सकता)।'
                : 'List Mutable होती है और इसके Index 0 से शुरू होते हैं।'
            }`;
            cardHi = `${newVal.type} \`${varName} = ${formatVal(newVal)}\` (Length: ${
              arr.length
            })। नीचे Element Index Map में Positive और Negative Indices देखें!`;
          }

          drafts.push({
            title: `${varName} = ${formatVal(newVal)}`,
            conceptKey: vType,
            speechHinglish: speechHi,
            speechEnglish: `Line ${line.lineNum} assigns \`${formatVal(
              newVal
            )}\` (${newVal.type}) to \`${varName}\`.`,
            cardExplanationHinglish: cardHi,
            cardExplanationEnglish: `Assigns \`${formatVal(newVal)}\` (${newVal.type}) to \`${varName}\`.`,
            visualTarget: varName,
            visualLabel: `${varName} = ${formatVal(newVal)}`,
            visualSublabel: techConcept,
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: varName,
            conceptBoxes: [
              { label: varName, sublabel: `${newVal.type} Variable`, isActive: true },
              { label: formatVal(newVal), sublabel: techConcept, isActive: true },
              {
                label:
                  newVal.type === 'List'
                    ? 'Mutable (Changeable)'
                    : newVal.type === 'Tuple'
                    ? 'Immutable (Locked)'
                    : newVal.type,
                sublabel: 'Memory Behavior',
                isActive: false,
              },
            ],
            operatorDetails: {
              visualType: vType,
              technicalConcept: techConcept,
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              charMap: ctx.charMap,
              sliceInfo: ctx.sliceInfo,
              stringTransformInfo: ctx.stringTransformInfo,
              intermediateSteps:
                ctx.intermediateSteps.length > 0
                  ? ctx.intermediateSteps
                  : [{ expr: t, result: formatVal(newVal), rule: techConcept }],
              intermediateResult: formatVal(newVal),
              variableSnapshots: takeSnapshots(env, varName, prevValStr),
            },
          });
          continue;
        }

        // 4. Standalone Method Call on List: e.g. fruits.append('orange'), numbers.sort(), items.pop(1)
        evalListExpr(t, ctx);
        inputCursor = ctx.inputCursor;
        const vType: OperatorVisualType = ctx.detectedVisualType || 'mutation_visual';
        const techConcept = ctx.detectedConcept || 'In-Place List Mutation Method';
        const info = ctx.stringTransformInfo;

        drafts.push({
          title: `${techConcept} (Line ${line.lineNum})`,
          conceptKey: vType,
          speechHinglish: `Line ${line.lineNum} पर \`${t}\` List को In-Place Update करता है। ${
            info ? `पहले List \`${info.original}\` थी, जो अब बदलकर \`${info.result}\` हो गई है।` : ''
          }`,
          speechEnglish: `Line ${line.lineNum} executes \`${t}\`, mutating the List in-place${
            info ? ` from \`${info.original}\` to \`${info.result}\`` : ''
          }.`,
          cardExplanationHinglish: `List Method: \`${t}\`। ${
            info ? `Before: \`${info.original}\` ➔ After: \`${info.result}\`` : ''
          }`,
          cardExplanationEnglish: `Executes \`${t}\` (${techConcept}).`,
          visualTarget: t,
          visualLabel: info ? info.result : t,
          visualSublabel: techConcept,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: line.lineNum,
          highlightToken: t.split('.')[1]?.split('(')[0] || t,
          conceptBoxes: [
            { label: info?.original || 'Original List', sublabel: 'Before Method', isActive: false },
            { label: info?.operation || t, sublabel: techConcept, isActive: true },
            { label: info?.result || 'Updated List', sublabel: 'After Method', isActive: true },
          ],
          operatorDetails: {
            visualType: vType,
            technicalConcept: techConcept,
            activeSourceRange: {
              line: line.lineNum,
              startCol: line.indent + 1,
              endCol: line.raw.length,
              codeText: t,
            },
            charMap: ctx.charMap,
            stringTransformInfo: ctx.stringTransformInfo,
            intermediateSteps: ctx.intermediateSteps,
            variableSnapshots: takeSnapshots(env),
          },
        });
      }
    }
  }

  executeNodes(ast);

  const totalSteps = drafts.length;
  return drafts.map((d, idx) => ({
    step: idx + 1,
    totalSteps,
    ...d,
  }));
}

export function runListsTuplesPythonSandbox(
  code: string,
  sampleInput = ''
): { stdout: string; error: string | null } {
  try {
    const rawLines = code.split('\n');
    for (let i = 0; i < rawLines.length; i++) {
      const t = rawLines[i].trim();
      if (!t || t.startsWith('#')) continue;
      let depth = 0;
      let inQ: string | null = null;
      for (let k = 0; k < t.length; k++) {
        const ch = t[k];
        if (inQ) {
          if (ch === inQ && t[k - 1] !== '\\') inQ = null;
          continue;
        }
        if (ch === '"' || ch === "'") {
          inQ = ch;
          continue;
        }
        if (ch === '(' || ch === '[') depth++;
        else if (ch === ')' || ch === ']') depth--;
      }
      if (inQ) {
        return {
          stdout: '',
          error: `SyntaxError: EOL while scanning string literal on line ${i + 1}`,
        };
      }
      if (depth !== 0) {
        return {
          stdout: '',
          error: `SyntaxError: unmatched brackets or parentheses on line ${i + 1}`,
        };
      }
    }

    const dummyQ: TopicQuestion = {
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
    const steps = generateListsTuplesTeachingSteps(dummyQ);
    const lastStep = steps[steps.length - 1];
    return {
      stdout: lastStep ? lastStep.consoleOutput : '',
      error: null,
    };
  } catch (err: any) {
    return {
      stdout: '',
      error: err?.message || 'Execution error',
    };
  }
}

export function generateListsTuplesHints(question: TopicQuestion): ProgressiveHint[] {
  const codeLines = question.referenceCode
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const keyLine = codeLines[Math.min(1, codeLines.length - 1)] || codeLines[0] || '';

  return [
    {
      level: 1,
      name: 'Level 1: Collection Concept Hint',
      badge: '💡 List / Tuple Operation Hint',
      hintHinglish: `इस सवाल में हमें List या Tuple के Index, Slice या Method का सही उपयोग करना है। मुख्य Step \`${keyLine}\` पर ध्यान दें।`,
      hintEnglish: `Focus on the collection operation in \`${keyLine}\`. Remember that Lists \`[...]\` are mutable and Tuples \`(...)\` are immutable.`,
    },
    {
      level: 2,
      name: 'Level 2: Expected Output & Syntax',
      badge: '📐 Syntax & Output Structure',
      hintHinglish: `सुनिश्चित करें कि Square Brackets \`[]\` या Round Brackets \`()\` सही से बंद हैं और Output बिल्कुल \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\` जैसा आए।`,
      hintEnglish: `Ensure all brackets and parentheses match and your output matches: \`${question.sampleOutput.replace(
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

export function buildListsTuplesQuestionConfig(
  topicId: string,
  q: TopicQuestion
): QuestionV5Config {
  const teachingSteps = generateListsTuplesTeachingSteps(q);
  const hints = generateListsTuplesHints(q);
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
          message: '🎉 Excellent! Your List & Tuple logic and output match 100%!',
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
