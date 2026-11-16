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
} from './operatorsVisualEngine';

export interface DictEntryRuntime {
  key: RuntimeVal;
  val: RuntimeVal;
}

export interface RuntimeVal {
  val: any; // for List/Tuple/Set: RuntimeVal[]; for Dict: DictEntryRuntime[]
  type: 'Integer' | 'Float' | 'Boolean' | 'String' | 'List' | 'Tuple' | 'Set' | 'Dict' | 'NoneType';
  isFloatFixed?: number;
}

export interface SetDictEvalContext {
  env: Record<string, RuntimeVal>;
  inputs: string[];
  inputCursor: number;
  stdoutLines: string[];
  intermediateSteps: IntermediateEvalStep[];
  evaluatedOperands: EvaluatedOperandInfo[];
  detectedVisualType?: OperatorVisualType;
  detectedConcept?: string;
  setMembers?: {
    value: string;
    status?: 'unique' | 'added' | 'removed' | 'shared' | 'onlyA' | 'onlyB';
  }[];
  setOperationInfo?: {
    opName: string;
    setA: string;
    setB: string;
    result: string;
    onlyA?: string[];
    bothAB?: string[];
    onlyB?: string[];
  };
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
  raisedError?: string;
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
    const existingIdx = deduped.findIndex((d) => valEquals(d.key, e.key));
    if (existingIdx !== -1) {
      deduped[existingIdx].val = cloneRuntimeVal(e.val);
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
  if (v.type === 'List') {
    return makeList((v.val as RuntimeVal[]).map(cloneRuntimeVal));
  }
  if (v.type === 'Tuple') {
    return makeTuple((v.val as RuntimeVal[]).map(cloneRuntimeVal));
  }
  if (v.type === 'Set') {
    return { val: (v.val as RuntimeVal[]).map(cloneRuntimeVal), type: 'Set' };
  }
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
    const items = (v.val as RuntimeVal[]).map((it) => formatVal(it));
    return `[${items.join(', ')}]`;
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

function buildSetMembersVisual(
  items: RuntimeVal[],
  addedVal?: RuntimeVal,
  removedVal?: RuntimeVal
): { value: string; status?: 'unique' | 'added' | 'removed' | 'shared' | 'onlyA' | 'onlyB' }[] {
  const res = items.map((it) => ({
    value: formatVal(it),
    status: (addedVal && valEquals(it, addedVal) ? 'added' : 'unique') as
      | 'unique'
      | 'added'
      | 'removed',
  }));
  if (removedVal) {
    res.push({ value: `${formatVal(removedVal)} (Removed)`, status: 'removed' });
  }
  return res;
}

function buildDictEntriesVisual(
  entries: DictEntryRuntime[],
  highlightKey?: RuntimeVal,
  highlightStatus: 'selected' | 'added' | 'updated' | 'removed' = 'selected'
): { key: string; value: string; status?: 'normal' | 'selected' | 'added' | 'updated' | 'removed' }[] {
  return entries.map((e) => ({
    key: formatVal(e.key),
    value: formatVal(e.val),
    status: highlightKey && valEquals(e.key, highlightKey) ? highlightStatus : 'normal',
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
        if (op === '=' && (s[i + 1] === '=' || ['!', '<', '>', '+', '-', '*', '/', '%'].includes(s[i - 1])))
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

export function evalIterableItems(iterExpr: string, ctx: SetDictEvalContext): RuntimeVal[] {
  const s = iterExpr.trim();
  const rangeMatch = s.match(/^range\((.+)\)$/);
  if (rangeMatch) {
    const rArgs = splitTopLevel(rangeMatch[1]).map((a) => Number(evalSetDictExpr(a, ctx).val));
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

  const zipMatch = s.match(/^zip\((.+)\)$/);
  if (zipMatch) {
    const zArgs = splitTopLevel(zipMatch[1]).map((a) => evalIterableItems(a, ctx));
    if (zArgs.length >= 2) {
      const len = Math.min(zArgs[0].length, zArgs[1].length);
      const out: RuntimeVal[] = [];
      for (let i = 0; i < len; i++) {
        out.push(makeTuple([zArgs[0][i], zArgs[1][i]]));
      }
      return out;
    }
  }

  const mapMatch = s.match(/^map\((.+)\)$/);
  if (mapMatch) {
    const mArgs = splitTopLevel(mapMatch[1]);
    const fnName = mArgs[0]?.trim();
    const srcItems = evalIterableItems(mArgs[1] || '[]', ctx);
    return srcItems.map((it) => {
      if (fnName === 'int') return makeInt(parseInt(String(it.val).trim(), 10));
      if (fnName === 'float') return makeFloat(parseFloat(String(it.val).trim()));
      if (fnName === 'str') return makeStr(formatPrintVal(it));
      return it;
    });
  }

  const v = evalSetDictExpr(s, ctx);
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

function evalLambdaKey(lambdaExpr: string, item: RuntimeVal, baseCtx: SetDictEvalContext): RuntimeVal {
  const m = lambdaExpr.trim().match(/^lambda\s+([a-zA-Z_]\w*)\s*:\s*(.+)$/);
  if (!m) return item;
  const param = m[1];
  const body = m[2].trim();
  const subCtx: SetDictEvalContext = {
    ...baseCtx,
    env: { ...baseCtx.env, [param]: item },
    intermediateSteps: [],
    evaluatedOperands: [],
  };
  return evalSetDictExpr(body, subCtx);
}

export function evalSetDictExpr(expr: string, ctx: SetDictEvalContext): RuntimeVal {
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
          const v = evalSetDictExpr(innerExpr, ctx);
          out += Number(v.val).toFixed(digits);
        } else {
          const v = evalSetDictExpr(inside, ctx);
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
    if (!inner) {
      ctx.detectedVisualType = 'dict_mapping_visual';
      ctx.detectedConcept = 'Empty Dictionary ({}) vs Empty Set (set())';
      ctx.dictEntries = [];
      return makeDict([]);
    }

    // Check for comprehension: `{ ... for ... in ... }`
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
        // Dictionary Comprehension: `{kExpr: vExpr for target in iter [if cond]}`
        const kExpr = headExpr.slice(0, colonMatch.idx).trim();
        const vExpr = headExpr.slice(colonMatch.idx + 1).trim();
        const loopTarget = fm[1].trim();
        const iterSource = fm[2].trim();
        const srcItems = evalIterableItems(iterSource, ctx);
        const entries: DictEntryRuntime[] = [];
        for (const itemVal of srcItems) {
          assignLoopTarget(loopTarget, itemVal, ctx.env);
          const keep = condExpr ? isTruthy(evalSetDictExpr(condExpr, ctx)) : true;
          if (keep) {
            const kVal = evalSetDictExpr(kExpr, ctx);
            const vVal = evalSetDictExpr(vExpr, ctx);
            entries.push({ key: kVal, val: vVal });
          }
        }
        const res = makeDict(entries);
        ctx.detectedVisualType = 'dict_comprehension_visual';
        ctx.detectedConcept = condExpr
          ? 'Filtered Dictionary Comprehension ({k: v for ... if ...})'
          : 'Dictionary Comprehension ({k: v for ...})';
        ctx.dictEntries = buildDictEntriesVisual(res.val as DictEntryRuntime[]);
        ctx.intermediateSteps.push({
          expr: s,
          result: formatVal(res),
          rule: condExpr
            ? `Generates ${entries.length} Key–Value pairs where (${condExpr}) is True`
            : `Generates ${entries.length} Key–Value mappings dynamically`,
        });
        return res;
      } else if (fm) {
        // Set Comprehension: `{expr for target in iter [if cond]}`
        const loopTarget = fm[1].trim();
        const iterSource = fm[2].trim();
        const srcItems = evalIterableItems(iterSource, ctx);
        const items: RuntimeVal[] = [];
        for (const itemVal of srcItems) {
          assignLoopTarget(loopTarget, itemVal, ctx.env);
          const keep = condExpr ? isTruthy(evalSetDictExpr(condExpr, ctx)) : true;
          if (keep) {
            items.push(evalSetDictExpr(headExpr, ctx));
          }
        }
        const res = makeSet(items);
        ctx.detectedVisualType = 'set_comprehension_visual';
        ctx.detectedConcept = 'Set Comprehension ({expr for x in seq})';
        ctx.setMembers = buildSetMembersVisual(res.val as RuntimeVal[]);
        ctx.intermediateSteps.push({
          expr: s,
          result: formatVal(res),
          rule: `Collects ${(res.val as RuntimeVal[]).length} unique elements into a Set`,
        });
        return res;
      }
    }

    // Standard Dict literal vs Set literal
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    const firstColon = parts[0] ? findTopLevelBinarySymbol(parts[0], [':'], true) : null;
    if (firstColon) {
      const rawEntries: DictEntryRuntime[] = [];
      let hadDuplicateKey = false;
      for (const p of parts) {
        const cm = findTopLevelBinarySymbol(p, [':'], true);
        if (cm) {
          const kVal = evalSetDictExpr(p.slice(0, cm.idx).trim(), ctx);
          const vVal = evalSetDictExpr(p.slice(cm.idx + 1).trim(), ctx);
          if (rawEntries.some((re) => valEquals(re.key, kVal))) {
            hadDuplicateKey = true;
          }
          rawEntries.push({ key: kVal, val: vVal });
        }
      }
      const res = makeDict(rawEntries);
      const finalEntries = res.val as DictEntryRuntime[];
      const hasNestedDict = finalEntries.some((e) => e.val.type === 'Dict');
      ctx.detectedVisualType = hasNestedDict ? 'nested_dict_visual' : 'dict_mapping_visual';
      ctx.detectedConcept = hadDuplicateKey
        ? 'Duplicate Dictionary Key Overwrite Behavior'
        : hasNestedDict
        ? `Nested Dictionary Mapping (${finalEntries.length} Outer Keys)`
        : `Dictionary Creation (${finalEntries.length} Key–Value Pairs)`;
      ctx.dictEntries = buildDictEntriesVisual(finalEntries);
      if (hadDuplicateKey) {
        ctx.intermediateSteps.push({
          expr: s,
          result: formatVal(res),
          rule: 'Duplicate Keys are not allowed: later value overwrites the earlier value!',
        });
      }
      return res;
    } else {
      const rawItems = parts.map((p) => evalSetDictExpr(p, ctx));
      const res = makeSet(rawItems);
      const uniqueItems = res.val as RuntimeVal[];
      const hadDups = uniqueItems.length < rawItems.length;
      ctx.detectedVisualType = hadDups ? 'duplicate_removal_visual' : 'set_element_visual';
      ctx.detectedConcept = hadDups
        ? 'Set Duplicate Elimination (Unique Elements Only)'
        : `Set Creation (${uniqueItems.length} Unique Unordered Elements)`;
      ctx.setMembers = buildSetMembersVisual(uniqueItems);
      return res;
    }
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
          const keep = condExpr ? isTruthy(evalSetDictExpr(condExpr, ctx)) : true;
          if (keep) {
            outItems.push(evalSetDictExpr(mapExpr, ctx));
          }
        }
        return makeList(outItems);
      }
    }
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    return makeList(parts.map((p) => evalSetDictExpr(p, ctx)));
  }

  // Parentheses or Tuple literal: ( ... )
  if (isOuterBalanced(s, '(', ')')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return makeTuple([]);
    const parts = splitTopLevel(inner, ',');
    if (parts.length === 1 && !inner.endsWith(',')) {
      return evalSetDictExpr(inner, ctx);
    }
    return makeTuple(parts.filter((p) => p.length > 0).map((p) => evalSetDictExpr(p, ctx)));
  }

  // Ternary conditional expression: `A if COND else B`
  const ternIfIdx = findTopLevelKeywordOp(s, 'if');
  const ternElseIdx = findTopLevelKeywordOp(s, 'else');
  if (ternIfIdx !== -1 && ternElseIdx !== -1 && ternElseIdx > ternIfIdx) {
    const trueExpr = s.slice(0, ternIfIdx).trim();
    const condExpr = s.slice(ternIfIdx + 2, ternElseIdx).trim();
    const falseExpr = s.slice(ternElseIdx + 4).trim();
    const cVal = evalSetDictExpr(condExpr, ctx);
    return isTruthy(cVal) ? evalSetDictExpr(trueExpr, ctx) : evalSetDictExpr(falseExpr, ctx);
  }

  // Logical OR / AND / NOT
  const orIdx = findTopLevelKeywordOp(s, 'or');
  if (orIdx !== -1) {
    const lv = evalSetDictExpr(s.slice(0, orIdx), ctx);
    if (isTruthy(lv)) return makeBool(true);
    const rv = evalSetDictExpr(s.slice(orIdx + 2), ctx);
    return makeBool(isTruthy(rv));
  }

  const andIdx = findTopLevelKeywordOp(s, 'and');
  if (andIdx !== -1) {
    const lv = evalSetDictExpr(s.slice(0, andIdx), ctx);
    if (!isTruthy(lv)) return makeBool(false);
    const rv = evalSetDictExpr(s.slice(andIdx + 3), ctx);
    return makeBool(isTruthy(rv));
  }

  if (s.startsWith('not ') && findTopLevelKeywordOp(s, 'not') === 0) {
    const innerVal = evalSetDictExpr(s.slice(4), ctx);
    return makeBool(!isTruthy(innerVal));
  }

  // Comparisons & Membership (`==`, `!=`, `<`, `>`, `<=`, `>=`, `in`, `not in`)
  const cmp = findTopLevelComparison(s);
  if (cmp) {
    const leftStr = s.slice(0, cmp.idx).trim();
    const rightStr = s.slice(cmp.idx + cmp.op.length).trim();
    const lv = evalSetDictExpr(leftStr, ctx);
    const rv = evalSetDictExpr(rightStr, ctx);

    let res = false;
    if (cmp.op === 'in' || cmp.op === 'not in') {
      let found = false;
      if (rv.type === 'Set' || rv.type === 'List' || rv.type === 'Tuple') {
        const arr = rv.val as RuntimeVal[];
        found = arr.some((item) => valEquals(item, lv));
        if (rv.type === 'Set') {
          ctx.detectedVisualType = 'set_element_visual';
          ctx.detectedConcept = `Set Membership Check (${cmp.op})`;
          ctx.setMembers = buildSetMembersVisual(arr);
        }
      } else if (rv.type === 'Dict') {
        const entries = rv.val as DictEntryRuntime[];
        found = entries.some((e) => valEquals(e.key, lv));
        ctx.detectedVisualType = 'dict_access_visual';
        ctx.detectedConcept = `Dictionary Key Membership (${cmp.op})`;
        ctx.dictEntries = buildDictEntriesVisual(entries, lv, 'selected');
      } else if (rv.type === 'String') {
        found = String(rv.val).includes(String(lv.val));
      }
      res = cmp.op === 'in' ? found : !found;
      ctx.intermediateSteps.push({
        expr: `${formatVal(lv)} ${cmp.op} ${rightStr}`,
        result: res ? 'True' : 'False',
        rule:
          rv.type === 'Dict'
            ? `Checks if Key ${formatVal(lv)} exists in Dictionary ${rightStr} ➔ ${res ? 'True' : 'False'}`
            : `Checks if Element ${formatVal(lv)} is a member of ${rightStr} ➔ ${res ? 'True' : 'False'}`,
      });
      return makeBool(res);
    }

    if (cmp.op === '==') res = valEquals(lv, rv);
    else if (cmp.op === '!=') res = !valEquals(lv, rv);
    else if (cmp.op === '<') res = lv.val < rv.val;
    else if (cmp.op === '>') res = lv.val > rv.val;
    else if (cmp.op === '<=') res = lv.val <= rv.val;
    else if (cmp.op === '>=') res = lv.val >= rv.val;

    ctx.intermediateSteps.push({
      expr: `${formatVal(lv)} ${cmp.op} ${formatVal(rv)}`,
      result: res ? 'True' : 'False',
      rule: `Comparison ${cmp.op} evaluates to ${res ? 'True' : 'False'}`,
    });
    return makeBool(res);
  }

  // Set Operators: Union (`|`), Symmetric Difference (`^`), Intersection (`&`)
  const pipeOp = findTopLevelBinarySymbol(s, ['|']);
  if (pipeOp) {
    const lv = evalSetDictExpr(s.slice(0, pipeOp.idx), ctx);
    const rv = evalSetDictExpr(s.slice(pipeOp.idx + 1), ctx);
    if (lv.type === 'Set' && rv.type === 'Set') {
      return computeSetBinaryOp(lv, rv, 'union', '|', ctx);
    }
  }

  const caretOp = findTopLevelBinarySymbol(s, ['^']);
  if (caretOp) {
    const lv = evalSetDictExpr(s.slice(0, caretOp.idx), ctx);
    const rv = evalSetDictExpr(s.slice(caretOp.idx + 1), ctx);
    if (lv.type === 'Set' && rv.type === 'Set') {
      return computeSetBinaryOp(lv, rv, 'symmetric_difference', '^', ctx);
    }
  }

  const ampOp = findTopLevelBinarySymbol(s, ['&']);
  if (ampOp) {
    const lv = evalSetDictExpr(s.slice(0, ampOp.idx), ctx);
    const rv = evalSetDictExpr(s.slice(ampOp.idx + 1), ctx);
    if (lv.type === 'Set' && rv.type === 'Set') {
      return computeSetBinaryOp(lv, rv, 'intersection', '&', ctx);
    }
  }

  // Binary + and - (including Set Difference `A - B`!)
  const addSub = findTopLevelBinarySymbol(s, ['+', '-']);
  if (addSub) {
    const lv = evalSetDictExpr(s.slice(0, addSub.idx), ctx);
    const rv = evalSetDictExpr(s.slice(addSub.idx + 1), ctx);
    if (addSub.op === '-' && lv.type === 'Set' && rv.type === 'Set') {
      return computeSetBinaryOp(lv, rv, 'difference', '-', ctx);
    }
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const num =
      addSub.op === '+' ? Number(lv.val) + Number(rv.val) : Number(lv.val) - Number(rv.val);
    return isF ? makeFloat(num) : makeInt(num);
  }

  // Binary *, /, //, %
  const mulDiv = findTopLevelBinarySymbol(s, ['//', '*', '/', '%']);
  if (mulDiv) {
    const lv = evalSetDictExpr(s.slice(0, mulDiv.idx), ctx);
    const rv = evalSetDictExpr(s.slice(mulDiv.idx + mulDiv.op.length), ctx);
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

  // Exponentiation (**)
  const powMatch = findTopLevelBinarySymbol(s, ['**'], true);
  if (powMatch) {
    const lv = evalSetDictExpr(s.slice(0, powMatch.idx), ctx);
    const rv = evalSetDictExpr(s.slice(powMatch.idx + 2), ctx);
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const n = Math.pow(Number(lv.val), Number(rv.val));
    return isF ? makeFloat(n) : makeInt(n);
  }

  // Unary - / +
  if ((s.startsWith('-') || s.startsWith('+')) && !/^[-+]\d+(\.\d+)?$/.test(s)) {
    const argVal = evalSetDictExpr(s.slice(1), ctx);
    const num = s[0] === '-' ? -Number(argVal.val) : +Number(argVal.val);
    return argVal.type === 'Float' ? makeFloat(num) : makeInt(num);
  }

  // Indexing / Key Access: `student['name']`, `students['s1']['name']`, `top[0]`
  const bracketMatch = findTopLevelTrailingBracket(s);
  if (bracketMatch) {
    const targetVal = evalSetDictExpr(bracketMatch.base, ctx);
    const keyOrIdx = evalSetDictExpr(bracketMatch.bracketContent, ctx);

    if (targetVal.type === 'Dict') {
      const entries = targetVal.val as DictEntryRuntime[];
      const found = entries.find((e) => valEquals(e.key, keyOrIdx));
      const isNested = bracketMatch.base.includes('[');
      ctx.detectedVisualType = isNested ? 'nested_dict_visual' : 'dict_access_visual';
      ctx.detectedConcept = isNested
        ? `Nested Dictionary Key Navigation (${s})`
        : `Dictionary Key Lookup (${bracketMatch.base}[${formatVal(keyOrIdx)}])`;
      ctx.dictEntries = buildDictEntriesVisual(entries, keyOrIdx, 'selected');
      const resVal = found ? found.val : makeNone();
      if (!found) {
        ctx.raisedError = 'KeyError';
      }
      ctx.intermediateSteps.push({
        expr: `${bracketMatch.base}[${formatVal(keyOrIdx)}]`,
        result: formatVal(resVal),
        rule: found
          ? `Key ${formatVal(keyOrIdx)} maps to Value ${formatVal(resVal)}`
          : `KeyError: Key ${formatVal(keyOrIdx)} not found in Dictionary`,
      });
      return resVal;
    }

    if (targetVal.type === 'List' || targetVal.type === 'Tuple') {
      const arr = targetVal.val as RuntimeVal[];
      const rawIdx = Number(keyOrIdx.val);
      const actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
      return arr[actualIdx] ?? makeNone();
    }
  }

  // Property or Method Call: `type(x).__name__`, `s.add(...)`, `d.get(...)`, `dept_map.setdefault(d, set()).add(emp)`
  const dotIdx = findTopLevelMethodDot(s);
  if (dotIdx !== -1) {
    const objExpr = s.slice(0, dotIdx).trim();
    const rightPart = s.slice(dotIdx + 1).trim();

    // Property access `. __name__` on `type(...)`
    if (rightPart === '__name__') {
      const tMatch = objExpr.match(/^type\((.+)\)$/);
      if (tMatch) {
        const innerVal = evalSetDictExpr(tMatch[1].trim(), ctx);
        const pyTypeName =
          innerVal.type === 'Set'
            ? 'set'
            : innerVal.type === 'Dict'
            ? 'dict'
            : innerVal.type === 'List'
            ? 'list'
            : innerVal.type === 'Tuple'
            ? 'tuple'
            : innerVal.type === 'Integer'
            ? 'int'
            : innerVal.type === 'Float'
            ? 'float'
            : innerVal.type === 'Boolean'
            ? 'bool'
            : 'str';
        ctx.intermediateSteps.push({
          expr: s,
          result: `'${pyTypeName}'`,
          rule: `Data type of ${tMatch[1].trim()} is '${pyTypeName}'`,
        });
        return makeStr(pyTypeName);
      }
    }

    const mMatch = rightPart.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
    if (mMatch) {
      const methodName = mMatch[1];
      const argsInner = mMatch[2].trim();
      const objVal = evalSetDictExpr(objExpr, ctx);
      const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalSetDictExpr(a, ctx)) : [];

      // String methods: `.split()`, `.strip()`, `.lower()`, `.upper()`, `.count()`, `.startswith()`
      if (objVal.type === 'String') {
        const str = String(objVal.val);
        if (methodName === 'strip') return makeStr(str.trim());
        if (methodName === 'lower') return makeStr(str.toLowerCase());
        if (methodName === 'upper') return makeStr(str.toUpperCase());
        if (methodName === 'startswith') return makeBool(str.startsWith(String(argVals[0]?.val ?? '')));
        if (methodName === 'count') {
          const sub = String(argVals[0]?.val ?? '');
          if (!sub) return makeInt(0);
          return makeInt(str.split(sub).length - 1);
        }
        if (methodName === 'split') {
          if (argVals.length === 0) {
            const t = str.trim();
            return makeList((t ? t.split(/\s+/) : []).map(makeStr));
          }
          const sep = String(argVals[0].val);
          return makeList(str.split(sep).map(makeStr));
        }
      }

      // List methods: `.count()`
      if (objVal.type === 'List') {
        const arr = objVal.val as RuntimeVal[];
        if (methodName === 'count') {
          const target = argVals[0];
          return makeInt(arr.filter((it) => valEquals(it, target)).length);
        }
      }

      // Set methods: `.add()`, `.update()`, `.remove()`, `.discard()`, `.pop()`, `.clear()`, `.union()`, `.intersection()`, `.difference()`, `.symmetric_difference()`, `.intersection_update()`, `.difference_update()`, `.issubset()`, `.issuperset()`, `.isdisjoint()`
      if (objVal.type === 'Set') {
        const setArr = objVal.val as RuntimeVal[];
        const beforeStr = formatVal(objVal);

        if (methodName === 'add') {
          const item = argVals[0];
          const alreadyExists = setArr.some((el) => valEquals(el, item));
          if (!alreadyExists) {
            setArr.push(cloneRuntimeVal(item));
          }
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = alreadyExists ? 'duplicate_removal_visual' : 'set_mutation_visual';
          ctx.detectedConcept = alreadyExists
            ? 'Set .add() Duplicate Ignored (Already in Set)'
            : 'Set .add() In-Place Element Addition';
          ctx.setMembers = buildSetMembersVisual(setArr, item);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.add(${formatVal(item)})`,
            result: afterStr,
            immutableNote: alreadyExists
              ? 'Duplicate ignored (Sets keep only Unique elements)'
              : 'In-place Set mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: afterStr,
            rule: alreadyExists
              ? `${formatVal(item)} is already in the Set — duplicates are ignored`
              : `Adds unique element ${formatVal(item)} into Set`,
          });
          return makeNone();
        }

        if (methodName === 'update') {
          const iterItems = evalIterableItems(argsInner, ctx);
          for (const it of iterItems) {
            if (!setArr.some((el) => valEquals(el, it))) {
              setArr.push(cloneRuntimeVal(it));
            }
          }
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'set_mutation_visual';
          ctx.detectedConcept = 'Set .update() Multi-Element Addition';
          ctx.setMembers = buildSetMembersVisual(setArr);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.update(${argsInner})`,
            result: afterStr,
            immutableNote: 'In-place Set mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: afterStr,
            rule: `Adds all unique elements from ${argsInner} into the Set`,
          });
          return makeNone();
        }

        if (methodName === 'remove') {
          const item = argVals[0];
          const idx = setArr.findIndex((el) => valEquals(el, item));
          if (idx === -1) {
            ctx.raisedError = 'KeyError';
            ctx.detectedVisualType = 'set_mutation_visual';
            ctx.detectedConcept = 'Set .remove() Missing Element Raises KeyError';
            ctx.setMembers = buildSetMembersVisual(setArr);
            ctx.intermediateSteps.push({
              expr: s,
              result: 'KeyError',
              rule: `Element ${formatVal(item)} is absent from Set — .remove() raises KeyError!`,
            });
            return makeNone();
          }
          const [removed] = setArr.splice(idx, 1);
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'set_mutation_visual';
          ctx.detectedConcept = 'Set .remove() Element Removal';
          ctx.setMembers = buildSetMembersVisual(setArr, undefined, removed);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.remove(${formatVal(item)})`,
            result: afterStr,
            immutableNote: 'In-place Set mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: afterStr,
            rule: `Removes ${formatVal(item)} from the Set`,
          });
          return makeNone();
        }

        if (methodName === 'discard') {
          const item = argVals[0];
          const idx = setArr.findIndex((el) => valEquals(el, item));
          let removed: RuntimeVal | undefined;
          if (idx !== -1) {
            [removed] = setArr.splice(idx, 1);
          }
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'set_mutation_visual';
          ctx.detectedConcept =
            idx !== -1
              ? 'Set .discard() Safe Element Removal'
              : 'Set .discard() Safe No-Error on Missing Element';
          ctx.setMembers = buildSetMembersVisual(setArr, undefined, removed);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.discard(${formatVal(item)})`,
            result: afterStr,
            immutableNote:
              idx !== -1 ? 'In-place Set mutation' : 'No KeyError when element is absent',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: afterStr,
            rule:
              idx !== -1
                ? `Removes ${formatVal(item)} safely from the Set`
                : `${formatVal(item)} not in Set — .discard() safely does nothing without raising KeyError`,
          });
          return makeNone();
        }

        if (methodName === 'pop') {
          const removed = setArr.shift() ?? makeNone();
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'set_mutation_visual';
          ctx.detectedConcept = 'Set .pop() Arbitrary Element Removal';
          ctx.setMembers = buildSetMembersVisual(setArr, undefined, removed);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: '.pop()',
            result: `${formatVal(removed)} (Remaining: ${afterStr})`,
            immutableNote: 'In-place Set mutation (Removes & returns 1 element)',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(removed),
            rule: `Removes and returns element ${formatVal(removed)} from the Set`,
          });
          return removed;
        }

        if (methodName === 'clear') {
          setArr.length = 0;
          ctx.detectedVisualType = 'set_mutation_visual';
          ctx.detectedConcept = 'Set .clear() Empty All Elements';
          ctx.setMembers = [];
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: '.clear()',
            result: 'set()',
            immutableNote: 'In-place Set mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: 'set()',
            rule: 'Removes all elements, leaving an empty set()',
          });
          return makeNone();
        }

        if (
          methodName === 'union' ||
          methodName === 'intersection' ||
          methodName === 'difference' ||
          methodName === 'symmetric_difference'
        ) {
          const otherSet = argVals[0];
          const sym =
            methodName === 'union'
              ? '.union()'
              : methodName === 'intersection'
              ? '.intersection()'
              : methodName === 'difference'
              ? '.difference()'
              : '.symmetric_difference()';
          return computeSetBinaryOp(objVal, otherSet, methodName, sym, ctx);
        }

        if (methodName === 'intersection_update' || methodName === 'difference_update') {
          const otherArr = (argVals[0]?.val as RuntimeVal[]) || [];
          const kept =
            methodName === 'intersection_update'
              ? setArr.filter((el) => otherArr.some((bEl) => valEquals(el, bEl)))
              : setArr.filter((el) => !otherArr.some((bEl) => valEquals(el, bEl)));
          setArr.splice(0, setArr.length, ...kept);
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'set_mutation_visual';
          ctx.detectedConcept = `Set .${methodName}() In-Place Update`;
          ctx.setMembers = buildSetMembersVisual(setArr);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.${methodName}(${formatVal(argVals[0])})`,
            result: afterStr,
            immutableNote: 'In-place Set mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: afterStr,
            rule:
              methodName === 'intersection_update'
                ? `Updates ${objExpr} in-place to keep only common elements`
                : `Updates ${objExpr} in-place by removing elements found in ${argsInner}`,
          });
          return makeNone();
        }

        if (methodName === 'issubset' || methodName === 'issuperset' || methodName === 'isdisjoint') {
          const otherArr = (argVals[0]?.val as RuntimeVal[]) || [];
          let res = false;
          if (methodName === 'issubset') {
            res = setArr.every((el) => otherArr.some((bEl) => valEquals(el, bEl)));
          } else if (methodName === 'issuperset') {
            res = otherArr.every((bEl) => setArr.some((el) => valEquals(el, bEl)));
          } else {
            res = !setArr.some((el) => otherArr.some((bEl) => valEquals(el, bEl)));
          }
          ctx.detectedVisualType = 'set_operation_visual';
          ctx.detectedConcept = `Set Relation Check (.${methodName}())`;
          ctx.setMembers = buildSetMembersVisual(setArr);
          ctx.intermediateSteps.push({
            expr: s,
            result: res ? 'True' : 'False',
            rule:
              methodName === 'issubset'
                ? `Every element of ${objExpr} is in ${argsInner} ➔ ${res ? 'True' : 'False'}`
                : methodName === 'issuperset'
                ? `${objExpr} contains all elements of ${argsInner} ➔ ${res ? 'True' : 'False'}`
                : `${objExpr} and ${argsInner} have no elements in common ➔ ${res ? 'True' : 'False'}`,
          });
          return makeBool(res);
        }
      }

      // Dictionary methods: `.get()`, `.keys()`, `.values()`, `.items()`, `.update()`, `.pop()`, `.popitem()`, `.clear()`, `.setdefault()`
      if (objVal.type === 'Dict') {
        const entries = objVal.val as DictEntryRuntime[];
        const beforeStr = formatVal(objVal);

        if (methodName === 'get') {
          const keyTarget = argVals[0];
          const defaultVal = argVals[1] ?? makeNone();
          const found = entries.find((e) => valEquals(e.key, keyTarget));
          const res = found ? cloneRuntimeVal(found.val) : cloneRuntimeVal(defaultVal);
          ctx.detectedVisualType = 'dict_access_visual';
          ctx.detectedConcept = found
            ? 'Dictionary .get() Safe Key Lookup (Key Found)'
            : 'Dictionary .get() Safe Fallback Default (Key Missing — No KeyError)';
          ctx.dictEntries = buildDictEntriesVisual(entries, keyTarget, 'selected');
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(res),
            rule: found
              ? `Key ${formatVal(keyTarget)} found ➔ returns ${formatVal(res)}`
              : `Key ${formatVal(keyTarget)} missing ➔ returns default ${formatVal(res)} safely`,
          });
          return res;
        }

        if (methodName === 'keys') {
          const res = makeList(entries.map((e) => cloneRuntimeVal(e.key)));
          ctx.detectedVisualType = 'dict_views_visual';
          ctx.detectedConcept = 'Dictionary .keys() View (All Keys in Insertion Order)';
          ctx.dictEntries = buildDictEntriesVisual(entries);
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(res),
            rule: `Extracts all ${entries.length} Keys in insertion order`,
          });
          return res;
        }

        if (methodName === 'values') {
          const res = makeList(entries.map((e) => cloneRuntimeVal(e.val)));
          ctx.detectedVisualType = 'dict_views_visual';
          ctx.detectedConcept = 'Dictionary .values() View (All Values in Insertion Order)';
          ctx.dictEntries = buildDictEntriesVisual(entries);
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(res),
            rule: `Extracts all ${entries.length} Values in insertion order`,
          });
          return res;
        }

        if (methodName === 'items') {
          const res = makeList(
            entries.map((e) => makeTuple([cloneRuntimeVal(e.key), cloneRuntimeVal(e.val)]))
          );
          ctx.detectedVisualType = 'dict_views_visual';
          ctx.detectedConcept = 'Dictionary .items() View (Key–Value Tuple Pairs)';
          ctx.dictEntries = buildDictEntriesVisual(entries);
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(res),
            rule: `Returns ${entries.length} (Key, Value) tuple pairs`,
          });
          return res;
        }

        if (methodName === 'update') {
          const otherEntries = (argVals[0]?.val as DictEntryRuntime[]) || [];
          for (const oe of otherEntries) {
            const idx = entries.findIndex((e) => valEquals(e.key, oe.key));
            if (idx !== -1) {
              entries[idx].val = cloneRuntimeVal(oe.val);
            } else {
              entries.push({ key: cloneRuntimeVal(oe.key), val: cloneRuntimeVal(oe.val) });
            }
          }
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'dict_mutation_visual';
          ctx.detectedConcept = 'Dictionary .update() Merge Key–Value Pairs';
          ctx.dictEntries = buildDictEntriesVisual(entries);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: `.update(${formatVal(argVals[0])})`,
            result: afterStr,
            immutableNote: 'In-place Dictionary mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: afterStr,
            rule: `Merges ${otherEntries.length} Key–Value pairs into ${objExpr}`,
          });
          return makeNone();
        }

        if (methodName === 'pop') {
          const keyTarget = argVals[0];
          const defaultVal = argVals[1];
          const idx = entries.findIndex((e) => valEquals(e.key, keyTarget));
          if (idx !== -1) {
            const [removed] = entries.splice(idx, 1);
            const afterStr = formatVal(objVal);
            ctx.detectedVisualType = 'dict_mutation_visual';
            ctx.detectedConcept = 'Dictionary .pop(key) Remove & Return Value';
            ctx.dictEntries = buildDictEntriesVisual(entries);
            ctx.stringTransformInfo = {
              original: beforeStr,
              operation: `.pop(${formatVal(keyTarget)})`,
              result: `${formatVal(removed.val)} (Remaining: ${afterStr})`,
              immutableNote: 'In-place Dictionary mutation',
            };
            ctx.intermediateSteps.push({
              expr: s,
              result: formatVal(removed.val),
              rule: `Removes Key ${formatVal(keyTarget)} and returns its Value ${formatVal(removed.val)}`,
            });
            return removed.val;
          }
          const fallback = defaultVal ?? makeNone();
          ctx.detectedVisualType = 'dict_mutation_visual';
          ctx.detectedConcept = 'Dictionary .pop(key, default) Missing Key Fallback';
          ctx.dictEntries = buildDictEntriesVisual(entries);
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(fallback),
            rule: `Key ${formatVal(keyTarget)} not found ➔ returns default ${formatVal(fallback)} without changing Dictionary`,
          });
          return fallback;
        }

        if (methodName === 'popitem') {
          const removed = entries.pop();
          const resTuple = removed ? makeTuple([removed.key, removed.val]) : makeNone();
          const afterStr = formatVal(objVal);
          ctx.detectedVisualType = 'dict_mutation_visual';
          ctx.detectedConcept = 'Dictionary .popitem() LIFO Last Pair Removal';
          ctx.dictEntries = buildDictEntriesVisual(entries);
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: '.popitem()',
            result: `${formatVal(resTuple)} (Remaining: ${afterStr})`,
            immutableNote: 'In-place Dictionary mutation (LIFO order)',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: formatVal(resTuple),
            rule: `Removes and returns the last inserted (Key, Value) pair ${formatVal(resTuple)}`,
          });
          return resTuple;
        }

        if (methodName === 'clear') {
          entries.length = 0;
          ctx.detectedVisualType = 'dict_mutation_visual';
          ctx.detectedConcept = 'Dictionary .clear() Remove All Entries';
          ctx.dictEntries = [];
          ctx.stringTransformInfo = {
            original: beforeStr,
            operation: '.clear()',
            result: '{}',
            immutableNote: 'In-place Dictionary mutation',
          };
          ctx.intermediateSteps.push({
            expr: s,
            result: '{}',
            rule: 'Removes all Key–Value pairs from the Dictionary',
          });
          return makeNone();
        }

        if (methodName === 'setdefault') {
          const keyTarget = argVals[0];
          const defaultVal = argVals[1] ?? makeNone();
          let existing = entries.find((e) => valEquals(e.key, keyTarget));
          if (!existing) {
            existing = { key: cloneRuntimeVal(keyTarget), val: cloneRuntimeVal(defaultVal) };
            entries.push(existing);
          }
          ctx.detectedVisualType = 'dict_mutation_visual';
          ctx.detectedConcept = 'Dictionary .setdefault(key, default)';
          ctx.dictEntries = buildDictEntriesVisual(entries, keyTarget, 'updated');
          return existing.val;
        }
      }
    }
  }

  // Built-in Function Calls: `set(...)`, `dict(...)`, `list(...)`, `sorted(...)`, `len(...)`, `sum(...)`, `min(...)`, `max(...)`, `type(...)`, `int(...)`, `float(...)`, `str(...)`, `input(...)`
  const fnMatch = s.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
  if (fnMatch) {
    const fn = fnMatch[1];
    const inner = fnMatch[2].trim();

    if (fn === 'input') {
      const line = ctx.inputCursor < ctx.inputs.length ? ctx.inputs[ctx.inputCursor++] : '';
      return makeStr(line);
    }

    // Generator expression inside `sum(...)` e.g. `sum(students[i]['marks'] for i in sorted_ids)`
    if (fn === 'sum' && findTopLevelKeywordOp(inner, 'for') !== -1) {
      const forIdx = findTopLevelKeywordOp(inner, 'for');
      const mapExpr = inner.slice(0, forIdx).trim();
      const rest = inner.slice(forIdx + 3).trim();
      const fm = rest.match(/^(.+?)\s+in\s+(.+)$/);
      if (fm) {
        const target = fm[1].trim();
        const iterItems = evalIterableItems(fm[2].trim(), ctx);
        let sumVal = 0;
        for (const it of iterItems) {
          assignLoopTarget(target, it, ctx.env);
          const v = evalSetDictExpr(mapExpr, ctx);
          sumVal += Number(v.val);
        }
        return makeInt(sumVal);
      }
    }

    // `min(...)` or `max(...)` with `key=lambda ...`
    if ((fn === 'min' || fn === 'max') && inner.includes('key=')) {
      const topArgs = splitTopLevel(inner);
      const seqItems = evalIterableItems(topArgs[0], ctx);
      const keyArg = topArgs.find((a) => a.startsWith('key='));
      const lambdaStr = keyArg ? keyArg.slice(4).trim() : '';
      if (seqItems.length === 0) return makeNone();
      let bestItem = seqItems[0];
      let bestKey = lambdaStr ? evalLambdaKey(lambdaStr, bestItem, ctx) : bestItem;
      for (let i = 1; i < seqItems.length; i++) {
        const curItem = seqItems[i];
        const curKey = lambdaStr ? evalLambdaKey(lambdaStr, curItem, ctx) : curItem;
        const cmpVal = compareRuntimeVals(curKey, bestKey);
        if (fn === 'min' ? cmpVal < 0 : cmpVal > 0) {
          bestItem = curItem;
          bestKey = curKey;
        }
      }
      ctx.intermediateSteps.push({
        expr: s,
        result: formatVal(bestItem),
        rule: `Selects ${fn === 'min' ? 'minimum' : 'maximum'} item ${formatVal(bestItem)} using custom key function`,
      });
      return cloneRuntimeVal(bestItem);
    }

    if (fn === 'set') {
      if (!inner) {
        ctx.detectedVisualType = 'set_element_visual';
        ctx.detectedConcept = 'Empty Set Creation (set())';
        ctx.setMembers = [];
        return makeSet([]);
      }
      const rawItems = evalIterableItems(inner, ctx);
      const res = makeSet(rawItems);
      const uniqueItems = res.val as RuntimeVal[];
      const removedCount = rawItems.length - uniqueItems.length;
      ctx.detectedVisualType =
        removedCount > 0 ? 'duplicate_removal_visual' : 'set_element_visual';
      ctx.detectedConcept =
        removedCount > 0
          ? `Duplicate Elimination via set() (${removedCount} Duplicates Removed)`
          : 'Set Conversion (set())';
      ctx.setMembers = buildSetMembersVisual(uniqueItems);
      ctx.stringTransformInfo = {
        original: `${rawItems.length} Input Items`,
        operation: 'set(...)',
        result: `${uniqueItems.length} Unique Elements`,
        immutableNote: 'Sets automatically remove all duplicate elements',
      };
      ctx.intermediateSteps.push({
        expr: s,
        result: formatVal(res),
        rule:
          removedCount > 0
            ? `Eliminates ${removedCount} duplicate(s) ➔ keeps ${uniqueItems.length} unique elements`
            : `Creates a Set of ${uniqueItems.length} unique elements`,
      });
      return res;
    }

    if (fn === 'dict') {
      if (!inner) return makeDict([]);
      const pairs = evalIterableItems(inner, ctx);
      const entries: DictEntryRuntime[] = [];
      for (const p of pairs) {
        const arr = (p.val as RuntimeVal[]) || [];
        if (arr.length >= 2) {
          entries.push({ key: arr[0], val: arr[1] });
        }
      }
      const res = makeDict(entries);
      ctx.detectedVisualType = 'dict_mapping_visual';
      ctx.detectedConcept = 'Construct Dictionary from Key–Value Pairs (dict(zip(...)))';
      ctx.dictEntries = buildDictEntriesVisual(res.val as DictEntryRuntime[]);
      ctx.intermediateSteps.push({
        expr: s,
        result: formatVal(res),
        rule: `Pairs ${entries.length} Keys with their corresponding Values`,
      });
      return res;
    }

    if (fn === 'list') {
      if (!inner) return makeList([]);
      return makeList(evalIterableItems(inner, ctx));
    }

    const argVals = inner ? splitTopLevel(inner).map((a) => evalSetDictExpr(a, ctx)) : [];

    if (fn === 'int') return makeInt(parseInt(String(argVals[0]?.val ?? 0).trim(), 10));
    if (fn === 'float') return makeFloat(parseFloat(String(argVals[0]?.val ?? 0).trim()));
    if (fn === 'str') return makeStr(formatPrintVal(argVals[0]));

    if (fn === 'len') {
      const target = argVals[0];
      const len =
        target?.type === 'List' ||
        target?.type === 'Tuple' ||
        target?.type === 'Set' ||
        target?.type === 'Dict'
          ? (target.val as any[]).length
          : String(target?.val ?? '').length;
      if (target?.type === 'Set') {
        ctx.setMembers = buildSetMembersVisual(target.val as RuntimeVal[]);
      } else if (target?.type === 'Dict') {
        ctx.dictEntries = buildDictEntriesVisual(target.val as DictEntryRuntime[]);
      }
      ctx.intermediateSteps.push({
        expr: `len(${inner})`,
        result: String(len),
        rule:
          target?.type === 'Set'
            ? `Total number of unique elements in Set is ${len}`
            : target?.type === 'Dict'
            ? `Total number of Key–Value pairs in Dictionary is ${len}`
            : `Total count of items is ${len}`,
      });
      return makeInt(len);
    }

    if (fn === 'sorted') {
      const target = argVals[0];
      let items: RuntimeVal[] = [];
      if (target?.type === 'Set' || target?.type === 'List' || target?.type === 'Tuple') {
        items = (target.val as RuntimeVal[]).map(cloneRuntimeVal);
      } else if (target?.type === 'Dict') {
        items = (target.val as DictEntryRuntime[]).map((e) => cloneRuntimeVal(e.key));
      } else if (target?.type === 'String') {
        items = Array.from(String(target.val)).map(makeStr);
      }
      items.sort(compareRuntimeVals);
      return makeList(items);
    }

    if (fn === 'list') {
      const target = argVals[0];
      if (target?.type === 'List' || target?.type === 'Tuple' || target?.type === 'Set') {
        return makeList((target.val as RuntimeVal[]).map(cloneRuntimeVal));
      }
      if (target?.type === 'Dict') {
        return makeList((target.val as DictEntryRuntime[]).map((e) => cloneRuntimeVal(e.key)));
      }
      if (target?.type === 'String') {
        return makeList(Array.from(String(target.val)).map(makeStr));
      }
      return makeList(evalIterableItems(inner, ctx));
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

    if (fn === 'type') {
      const t = argVals[0]?.type;
      const pyType =
        t === 'Set'
          ? "<class 'set'>"
          : t === 'Dict'
          ? "<class 'dict'>"
          : t === 'List'
          ? "<class 'list'>"
          : t === 'Tuple'
          ? "<class 'tuple'>"
          : "<class 'object'>";
      return makeStr(pyType);
    }
  }

  // Variable Lookup
  if (s in ctx.env) {
    const v = ctx.env[s];
    if (v.type === 'Set' && !ctx.setMembers) {
      ctx.setMembers = buildSetMembersVisual(v.val as RuntimeVal[]);
    } else if (v.type === 'Dict' && !ctx.dictEntries) {
      ctx.dictEntries = buildDictEntriesVisual(v.val as DictEntryRuntime[]);
    }
    return v;
  }

  return makeNone();
}

function computeSetBinaryOp(
  setA: RuntimeVal,
  setB: RuntimeVal,
  opKind: 'union' | 'intersection' | 'difference' | 'symmetric_difference',
  opSymbol: string,
  ctx: SetDictEvalContext
): RuntimeVal {
  const arrA = (setA.val as RuntimeVal[]) || [];
  const arrB = (setB.val as RuntimeVal[]) || [];

  const onlyA = arrA.filter((a) => !arrB.some((b) => valEquals(a, b)));
  const bothAB = arrA.filter((a) => arrB.some((b) => valEquals(a, b)));
  const onlyB = arrB.filter((b) => !arrA.some((a) => valEquals(a, b)));

  let resItems: RuntimeVal[] = [];
  let opTitle = '';
  let ruleDesc = '';

  if (opKind === 'union') {
    resItems = [...arrA, ...onlyB];
    opTitle = `Set Union (${opSymbol})`;
    ruleDesc = 'Combines all unique elements from both Sets';
  } else if (opKind === 'intersection') {
    resItems = [...bothAB];
    opTitle = `Set Intersection (${opSymbol})`;
    ruleDesc = 'Keeps only elements present in BOTH Sets';
  } else if (opKind === 'difference') {
    resItems = [...onlyA];
    opTitle = `Set Difference (${opSymbol})`;
    ruleDesc = 'Keeps elements in the first Set that are NOT in the second Set';
  } else {
    resItems = [...onlyA, ...onlyB];
    opTitle = `Set Symmetric Difference (${opSymbol})`;
    ruleDesc = 'Keeps elements in either Set, excluding common elements';
  }

  const res = makeSet(resItems);
  ctx.detectedVisualType = 'set_operation_visual';
  ctx.detectedConcept = opTitle;
  ctx.setMembers = buildSetMembersVisual(res.val as RuntimeVal[]);
  ctx.setOperationInfo = {
    opName: opTitle,
    setA: formatVal(setA),
    setB: formatVal(setB),
    result: formatVal(res),
    onlyA: onlyA.map(formatVal),
    bothAB: bothAB.map(formatVal),
    onlyB: onlyB.map(formatVal),
  };
  ctx.intermediateSteps.push({
    expr: `${formatVal(setA)} ${opSymbol} ${formatVal(setB)}`,
    result: formatVal(res),
    rule: ruleDesc,
  });
  return res;
}

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
    }
  | {
      kind: 'try_except';
      tryBody: BlockNode[];
      exceptBody: BlockNode[];
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

    // Check if brackets/braces/parens are unbalanced (e.g. multiline dict literal `student = {\n 'name': 'Rahul'\n}`)
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
  return Object.entries(env)
    .filter(([k]) => k !== '_')
    .map(([k, v]) => ({
      name: k,
      prevValue: k === changedVar && prevVal !== undefined ? prevVal : undefined,
      value: formatVal(v),
      dataType: v.type,
    }));
}

function setDictEntryInPlace(dictObj: RuntimeVal, keyVal: RuntimeVal, newVal: RuntimeVal): 'added' | 'updated' {
  const entries = dictObj.val as DictEntryRuntime[];
  const idx = entries.findIndex((e) => valEquals(e.key, keyVal));
  if (idx !== -1) {
    entries[idx].val = cloneRuntimeVal(newVal);
    return 'updated';
  }
  entries.push({ key: cloneRuntimeVal(keyVal), val: cloneRuntimeVal(newVal) });
  return 'added';
}

export function generateSetsDictsTeachingSteps(question: TopicQuestion): TeachingStep[] {
  const stmtLines = buildLogicalStmtLines(question.referenceCode);
  const ast = parseBlocks(stmtLines, 0, 0).nodes;
  const env: Record<string, RuntimeVal> = {};
  const inputs = question.sampleInput ? question.sampleInput.split('\n') : [];
  let inputCursor = 0;
  const stdoutLines: string[] = [];
  const drafts: Omit<TeachingStep, 'step' | 'totalSteps'>[] = [];

  function makeCtx(): SetDictEvalContext {
    return {
      env,
      inputs,
      inputCursor,
      stdoutLines,
      intermediateSteps: [],
      evaluatedOperands: [],
    };
  }

  function runSilentBlock(nodes: BlockNode[]): 'normal' | 'break' | 'continue' | 'eof' | 'error' {
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
            ? splitTopLevel(pMatch[1], ',').map((a) => evalSetDictExpr(a, ctx))
            : [];
          inputCursor = ctx.inputCursor;
          if (ctx.raisedError) return 'error';
          stdoutLines.push(args.map(formatPrintVal).join(' '));
          continue;
        }

        // 2. del d[key]
        const delMatch = t.match(/^del\s+([a-zA-Z_]\w*)\[(.+)\]$/);
        if (delMatch) {
          const dName = delMatch[1];
          const kVal = evalSetDictExpr(delMatch[2], ctx);
          inputCursor = ctx.inputCursor;
          const dObj = env[dName];
          if (dObj?.type === 'Dict') {
            const entries = dObj.val as DictEntryRuntime[];
            const idx = entries.findIndex((e) => valEquals(e.key, kVal));
            if (idx !== -1) entries.splice(idx, 1);
          }
          continue;
        }

        // 3. Augmented assignment on Dict item: `inv[item] -= q_val` or `inv[item] += q_val`
        const dictAugMatch = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*([+\-])=\s*(.+)$/);
        if (dictAugMatch) {
          const dName = dictAugMatch[1];
          const kVal = evalSetDictExpr(dictAugMatch[2], ctx);
          const op = dictAugMatch[3];
          const rhsVal = evalSetDictExpr(dictAugMatch[4], ctx);
          inputCursor = ctx.inputCursor;
          const dObj = env[dName];
          if (dObj?.type === 'Dict') {
            const entries = dObj.val as DictEntryRuntime[];
            const found = entries.find((e) => valEquals(e.key, kVal));
            const curNum = Number(found?.val.val ?? 0);
            const nextNum = op === '+' ? curNum + Number(rhsVal.val) : curNum - Number(rhsVal.val);
            setDictEntryInPlace(dObj, kVal, makeInt(nextNum));
          }
          continue;
        }

        // 4. Nested Dict assignment: `students['s1']['marks'] = 90`
        const nestedAssign = t.match(/^([a-zA-Z_]\w*)\[([^\]]+)\]\[([^\]]+)\]\s*=\s*(.+)$/);
        if (nestedAssign) {
          const outerName = nestedAssign[1];
          const k1 = evalSetDictExpr(nestedAssign[2], ctx);
          const k2 = evalSetDictExpr(nestedAssign[3], ctx);
          const rhsVal = evalSetDictExpr(nestedAssign[4], ctx);
          inputCursor = ctx.inputCursor;
          const outerObj = env[outerName];
          if (outerObj?.type === 'Dict') {
            const outerEntries = outerObj.val as DictEntryRuntime[];
            const innerEntry = outerEntries.find((e) => valEquals(e.key, k1));
            if (innerEntry?.val.type === 'Dict') {
              setDictEntryInPlace(innerEntry.val, k2, rhsVal);
            }
          }
          continue;
        }

        // 5. Single-level Dict item assignment: `db[k] = v`
        const idxAssign = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*=\s*(.+)$/);
        if (idxAssign) {
          const dName = idxAssign[1];
          const kVal = evalSetDictExpr(idxAssign[2], ctx);
          const rhsVal = evalSetDictExpr(idxAssign[3], ctx);
          inputCursor = ctx.inputCursor;
          const dObj = env[dName];
          if (dObj?.type === 'Dict') {
            setDictEntryInPlace(dObj, kVal, rhsVal);
          }
          continue;
        }

        // 6. Standard assignment or unpacking: `lhs = rhs`
        const assignMatch = findTopLevelBinarySymbol(t, ['=']);
        const assignIdx = assignMatch ? assignMatch.idx : -1;
        if (assignIdx !== -1) {
          const lhs = t.slice(0, assignIdx).trim();
          const rhs = t.slice(assignIdx + 1).trim();
          const rhsVal = evalSetDictExpr(rhs, ctx);
          inputCursor = ctx.inputCursor;
          if (ctx.raisedError) return 'error';
          assignLoopTarget(lhs, rhsVal, env);
          continue;
        }

        // 7. Standalone method call: `s.add(...)`, `s.remove(99)`
        evalSetDictExpr(t, ctx);
        inputCursor = ctx.inputCursor;
        if (ctx.raisedError) return 'error';
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
          const cVal = evalSetDictExpr(br.condExpr || 'True', ctx);
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
          if (res === 'eof' || res === 'error') return res;
        }
        continue;
      }

      if (node.kind === 'try_except') {
        const res = runSilentBlock(node.tryBody);
        if (res === 'eof' || res === 'error') {
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
      if (node.kind === 'try_except') {
        const res = runSilentBlock(node.tryBody);
        if (res === 'error' || res === 'eof') {
          executeNodes(node.exceptBody);
        }
        continue;
      }

      if (node.kind === 'while_loop') {
        const hdr = node.headerLine;
        let guard = 0;
        while (guard++ < 100) {
          const ctx = makeCtx();
          const cVal = evalSetDictExpr(node.condExpr, ctx);
          inputCursor = ctx.inputCursor;
          if (!isTruthy(cVal)) break;
          const res = runSilentBlock(node.body);
          if (res === 'break' || res === 'eof') break;
        }

        const firstDict = Object.values(env).find((v) => v.type === 'Dict');
        drafts.push({
          title: `Interactive Dictionary Command Loop (Line ${hdr.lineNum})`,
          conceptKey: 'dict_mutation_visual',
          speechHinglish: `Line ${hdr.lineNum} पर \`while ${node.condExpr}:\` Loop लगातार Commands पढ़कर Dictionary को Real-Time में Update और Search करता है।`,
          speechEnglish: `Line ${hdr.lineNum} executes the \`while ${node.condExpr}:\` command loop to update and query the Dictionary.`,
          cardExplanationHinglish: `Command Loop \`while ${node.condExpr}:\` ने सभी Commands को Process करके Dictionary और Output को Update किया।`,
          cardExplanationEnglish: `Processed interactive commands using \`while ${node.condExpr}:\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: hdr.trimmed,
          visualSublabel: 'Interactive Dictionary Operations',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'while',
          conceptBoxes: [
            { label: hdr.trimmed, sublabel: 'Command Loop', isActive: true },
            { label: 'Add / Search / Update', sublabel: 'Dictionary Operations', isActive: true },
            {
              label: stdoutLines[stdoutLines.length - 1] || 'State Updated',
              sublabel: 'Resulting Output',
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: 'dict_mutation_visual',
            technicalConcept: 'Interactive Dictionary State Management (while Loop)',
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            dictEntries: firstDict
              ? buildDictEntriesVisual(firstDict.val as DictEntryRuntime[])
              : undefined,
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: takeSnapshots(env)
                  .map((s) => `${s.name}=${s.value}`)
                  .join(', '),
                rule: 'Processes commands until exit or EOF',
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

        const isDictIter =
          node.iterExpr.includes('.items()') ||
          node.iterExpr.includes('.values()') ||
          node.iterExpr.includes('.keys()') ||
          Object.values(env).some((v) => v.type === 'Dict');

        const firstDict = Object.values(env).find((v) => v.type === 'Dict');
        const firstSet = Object.values(env).find((v) => v.type === 'Set');

        const vType: OperatorVisualType = isDictIter
          ? 'dict_iteration_visual'
          : 'set_mutation_visual';
        const techConcept = node.iterExpr.includes('.items()')
          ? 'Dictionary Key–Value Iteration (.items() in Insertion Order)'
          : node.iterExpr.includes('.values()')
          ? 'Dictionary Value Iteration (.values() in Insertion Order)'
          : isDictIter
          ? 'Dictionary Key Iteration (Insertion Order Preserved)'
          : 'Iterative Set Update (for Loop)';

        drafts.push({
          title: `${techConcept} (Line ${hdr.lineNum})`,
          conceptKey: vType,
          speechHinglish: `Line ${hdr.lineNum} पर \`${hdr.trimmed}\` के ज़रिए हम सभी ${iterItems.length} Entries पर Insertion Order में Loop चलाते हैं और अंदर के Statements Execute करते हैं।`,
          speechEnglish: `Line ${hdr.lineNum} iterates through ${iterItems.length} entries using \`${hdr.trimmed}\`.`,
          cardExplanationHinglish: `Iteration: \`${hdr.trimmed}\` ने सभी ${iterItems.length} Entries को क्रम से Process किया।`,
          cardExplanationEnglish: `Processed ${iterItems.length} entries via \`${hdr.trimmed}\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: hdr.trimmed,
          visualSublabel: `${iterItems.length} Iterations Completed`,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'for',
          conceptBoxes: [
            { label: `for ${node.targetStr}`, sublabel: 'Loop Variable(s)', isActive: true },
            { label: node.iterExpr, sublabel: `${iterItems.length} Items`, isActive: true },
            { label: 'Body Executed', sublabel: techConcept, isActive: true },
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
            dictEntries: firstDict
              ? buildDictEntriesVisual(firstDict.val as DictEntryRuntime[])
              : undefined,
            setMembers: firstSet
              ? buildSetMembersVisual(firstSet.val as RuntimeVal[])
              : undefined,
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: `${iterItems.length} iterations executed`,
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
          const condVal = evalSetDictExpr(condStr, ctx);
          inputCursor = ctx.inputCursor;
          const condBool = isTruthy(condVal);

          drafts.push({
            title: `Check Condition (${condStr}) ➔ ${condBool ? 'True ✅' : 'False ❌'}`,
            conceptKey: 'dict_access_visual',
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
              { label: condStr, sublabel: 'Key / Value Validation', isActive: true },
              {
                label: condBool ? 'True ✅' : 'False ❌',
                sublabel: condBool ? 'Selected' : 'Skipped',
                isActive: true,
              },
              { label: 'Decision', sublabel: 'Branch Control', isActive: false },
            ],
            operatorDetails: {
              visualType: 'dict_access_visual',
              technicalConcept: 'Dictionary Key Membership & Validation Check',
              activeSourceRange: {
                line: hdr.lineNum,
                startCol: hdr.indent + 1,
                endCol: hdr.raw.length,
                codeText: hdr.trimmed,
              },
              dictEntries: ctx.dictEntries,
              intermediateSteps: ctx.intermediateSteps,
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
          const printedVals = argExprs.map((ae) => evalSetDictExpr(ae, ctx));
          inputCursor = ctx.inputCursor;
          const printedLine = printedVals.map(formatPrintVal).join(' ');
          stdoutLines.push(printedLine);
          const cumConsole = stdoutLines.join('\n');

          const vType: OperatorVisualType = ctx.detectedVisualType || 'console';
          const techConcept = ctx.detectedConcept || 'Console Output (print)';

          drafts.push({
            title:
              vType === 'set_operation_visual'
                ? `${techConcept} (${inner} ➔ ${printedLine})`
                : vType === 'dict_access_visual'
                ? `Dictionary Lookup (${inner} ➔ ${printedLine})`
                : vType === 'dict_views_visual'
                ? `${techConcept} ➔ ${printedLine}`
                : `Evaluate & Print (Line ${line.lineNum})`,
            conceptKey: vType,
            speechHinglish:
              vType === 'set_operation_visual'
                ? `Line ${line.lineNum} पर Set Operation \`${inner}\` Execute होकर Resulting Elements \`${printedLine}\` Console पर Print करता है।`
                : vType === 'dict_access_visual'
                ? `Line ${line.lineNum} पर Dictionary से Key Access होकर उसकी Value \`${printedLine}\` Console पर Print होती है।`
                : `Line ${line.lineNum} पर \`${t}\` Execute होकर Console पर \`${printedLine}\` Print करता है।`,
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
              setMembers: ctx.setMembers,
              setOperationInfo: ctx.setOperationInfo,
              dictEntries: ctx.dictEntries,
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

        // 2. `del d[key]`
        const delMatch = t.match(/^del\s+([a-zA-Z_]\w*)\[(.+)\]$/);
        if (delMatch) {
          const dName = delMatch[1];
          const kExpr = delMatch[2].trim();
          const dObj = env[dName];
          const beforeStr = formatVal(dObj);
          const kVal = evalSetDictExpr(kExpr, ctx);
          inputCursor = ctx.inputCursor;
          if (dObj?.type === 'Dict') {
            const entries = dObj.val as DictEntryRuntime[];
            const idx = entries.findIndex((e) => valEquals(e.key, kVal));
            if (idx !== -1) entries.splice(idx, 1);
            ctx.dictEntries = buildDictEntriesVisual(entries);
          }
          const afterStr = formatVal(dObj);
          drafts.push({
            title: `Delete Dictionary Entry (del ${dName}[${formatVal(kVal)}])`,
            conceptKey: 'dict_mutation_visual',
            speechHinglish: `Line ${line.lineNum} पर \`${t}\` Dictionary \`${dName}\` से Key \`${formatVal(
              kVal
            )}\` और उसकी Value को हमेशा के लिए हटा देता है! अब Dictionary \`${afterStr}\` हो गई है।`,
            speechEnglish: `Line ${line.lineNum} deletes Key \`${formatVal(kVal)}\` from \`${dName}\`.`,
            cardExplanationHinglish: `Entry Deleted: \`${t}\` ने Key \`${formatVal(
              kVal
            )}\` को हटाया। Before: \`${beforeStr}\` ➔ After: \`${afterStr}\`।`,
            cardExplanationEnglish: `Deleted Key \`${formatVal(kVal)}\` from \`${dName}\`.`,
            visualTarget: t,
            visualLabel: `${dName} ➔ ${afterStr}`,
            visualSublabel: 'del Key–Value Entry',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: 'del',
            conceptBoxes: [
              { label: `Before: ${beforeStr}`, sublabel: 'Original Dictionary', isActive: false },
              { label: `del ${dName}[${formatVal(kVal)}]`, sublabel: 'Delete Key', isActive: true },
              { label: `After: ${afterStr}`, sublabel: 'Updated Dictionary', isActive: true },
            ],
            operatorDetails: {
              visualType: 'dict_mutation_visual',
              technicalConcept: 'Deleting Dictionary Key–Value Entry (del)',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              dictEntries: ctx.dictEntries,
              stringTransformInfo: {
                original: beforeStr,
                operation: `del [${formatVal(kVal)}]`,
                result: afterStr,
                immutableNote: 'In-place Dictionary mutation',
              },
              intermediateSteps: [
                {
                  expr: t,
                  result: afterStr,
                  rule: `Deletes Key ${formatVal(kVal)} and its associated Value`,
                },
              ],
              variableSnapshots: takeSnapshots(env, dName, beforeStr),
            },
          });
          continue;
        }

        // 3. Nested Dictionary Mutation: `students['s1']['marks'] = 90`
        const nestedAssign = t.match(/^([a-zA-Z_]\w*)\[([^\]]+)\]\[([^\]]+)\]\s*=\s*(.+)$/);
        if (nestedAssign) {
          const outerName = nestedAssign[1];
          const k1 = evalSetDictExpr(nestedAssign[2], ctx);
          const k2 = evalSetDictExpr(nestedAssign[3], ctx);
          const rhsVal = evalSetDictExpr(nestedAssign[4], ctx);
          inputCursor = ctx.inputCursor;
          const outerObj = env[outerName];
          const beforeStr = formatVal(outerObj);
          if (outerObj?.type === 'Dict') {
            const outerEntries = outerObj.val as DictEntryRuntime[];
            const innerEntry = outerEntries.find((e) => valEquals(e.key, k1));
            if (innerEntry?.val.type === 'Dict') {
              setDictEntryInPlace(innerEntry.val, k2, rhsVal);
            }
            ctx.dictEntries = buildDictEntriesVisual(outerEntries, k1, 'updated');
          }
          const afterStr = formatVal(outerObj);
          drafts.push({
            title: `Nested Dictionary Update (${outerName}[${formatVal(k1)}][${formatVal(k2)}] = ${formatVal(rhsVal)})`,
            conceptKey: 'nested_dict_visual',
            speechHinglish: `Line ${line.lineNum} पर हम Nested Dictionary के अंदर पहले Outer Key \`${formatVal(
              k1
            )}\` तक जाते हैं और फिर उसकी Inner Key \`${formatVal(k2)}\` की Value को \`${formatVal(
              rhsVal
            )}\` से Update करते हैं!`,
            speechEnglish: `Line ${line.lineNum} navigates to outer Key \`${formatVal(
              k1
            )}\` and updates inner Key \`${formatVal(k2)}\` to \`${formatVal(rhsVal)}\`.`,
            cardExplanationHinglish: `Nested Update: \`${t}\` ➔ \`${afterStr}\`।`,
            cardExplanationEnglish: `Updates nested Key \`${formatVal(k2)}\` inside \`${formatVal(k1)}\`.`,
            visualTarget: t,
            visualLabel: `${outerName}[${formatVal(k1)}][${formatVal(k2)}] = ${formatVal(rhsVal)}`,
            visualSublabel: 'Nested Dictionary Mutation',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: outerName,
            conceptBoxes: [
              { label: `Outer Key: ${formatVal(k1)}`, sublabel: 'Level 1 Lookup', isActive: true },
              { label: `Inner Key: ${formatVal(k2)}`, sublabel: 'Level 2 Target', isActive: true },
              { label: `New Value: ${formatVal(rhsVal)}`, sublabel: 'Updated In-Place', isActive: true },
            ],
            operatorDetails: {
              visualType: 'nested_dict_visual',
              technicalConcept: 'Multi-Level Nested Dictionary Update',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              dictEntries: ctx.dictEntries,
              stringTransformInfo: {
                original: beforeStr,
                operation: `[${formatVal(k1)}][${formatVal(k2)}] = ${formatVal(rhsVal)}`,
                result: afterStr,
                immutableNote: 'In-place Dictionary mutation',
              },
              intermediateSteps: [
                {
                  expr: t,
                  result: afterStr,
                  rule: `Updates inner Key ${formatVal(k2)} inside ${formatVal(k1)} to ${formatVal(rhsVal)}`,
                },
              ],
              variableSnapshots: takeSnapshots(env, outerName, beforeStr),
            },
          });
          continue;
        }

        // 4. Single-Level Dictionary Key Add / Update: `d['age'] = 25` or `marks[subj] = new_m`
        const idxAssign = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*=\s*(.+)$/);
        if (idxAssign) {
          const dName = idxAssign[1];
          const kExpr = idxAssign[2].trim();
          const rhsExpr = idxAssign[3].trim();
          const dObj = env[dName];
          const beforeStr = formatVal(dObj);
          const kVal = evalSetDictExpr(kExpr, ctx);
          const newVal = evalSetDictExpr(rhsExpr, ctx);
          inputCursor = ctx.inputCursor;

          let actionKind: 'added' | 'updated' = 'added';
          if (dObj?.type === 'Dict') {
            actionKind = setDictEntryInPlace(dObj, kVal, newVal);
            ctx.dictEntries = buildDictEntriesVisual(
              dObj.val as DictEntryRuntime[],
              kVal,
              actionKind
            );
          }
          const afterStr = formatVal(dObj);

          drafts.push({
            title:
              actionKind === 'added'
                ? `Add New Key–Value Pair (${dName}[${formatVal(kVal)}] = ${formatVal(newVal)})`
                : `Update Existing Key Value (${dName}[${formatVal(kVal)}] = ${formatVal(newVal)})`,
            conceptKey: 'dict_mutation_visual',
            speechHinglish:
              actionKind === 'added'
                ? `Line ${line.lineNum} पर क्योंकि Key \`${formatVal(
                    kVal
                  )}\` पहले से \`${dName}\` में नहीं थी, इसलिए Python एक नई Entry \`${formatVal(
                    kVal
                  )}: ${formatVal(newVal)}\` Add कर देता है!`
                : `Line ${line.lineNum} पर Key \`${formatVal(
                    kVal
                  )}\` पहले से \`${dName}\` में मौजूद है, इसलिए Python उसकी Insertion Position बदले बिना उसकी Value को \`${formatVal(
                    newVal
                  )}\` से Update कर देता है!`,
            speechEnglish:
              actionKind === 'added'
                ? `Line ${line.lineNum} adds new Key \`${formatVal(kVal)}\` with Value \`${formatVal(
                    newVal
                  )}\` to \`${dName}\`.`
                : `Line ${line.lineNum} updates existing Key \`${formatVal(
                    kVal
                  )}\` to Value \`${formatVal(newVal)}\` in \`${dName}\`.`,
            cardExplanationHinglish: `Dictionary ${
              actionKind === 'added' ? 'Add Entry' : 'Update Value'
            }: \`${dName}[${formatVal(kVal)}] = ${formatVal(
              newVal
            )}\`। Before: \`${beforeStr}\` ➔ After: \`${afterStr}\`।`,
            cardExplanationEnglish: `${
              actionKind === 'added' ? 'Added' : 'Updated'
            } Key \`${formatVal(kVal)}\` in \`${dName}\`.`,
            visualTarget: `${dName}[${kExpr}]`,
            visualLabel: `${dName}[${formatVal(kVal)}] ➔ ${formatVal(newVal)}`,
            visualSublabel:
              actionKind === 'added' ? 'New Key–Value Added' : 'Existing Key Updated',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: dName,
            conceptBoxes: [
              { label: `Before: ${beforeStr}`, sublabel: 'Previous Dictionary', isActive: false },
              {
                label: `${formatVal(kVal)}: ${formatVal(newVal)}`,
                sublabel: actionKind === 'added' ? 'New Entry' : 'Updated Value',
                isActive: true,
              },
              { label: `After: ${afterStr}`, sublabel: 'Mutated In-Place', isActive: true },
            ],
            operatorDetails: {
              visualType: 'dict_mutation_visual',
              technicalConcept:
                actionKind === 'added'
                  ? 'Adding New Key–Value Pair to Dictionary'
                  : 'Updating Existing Key Value in Dictionary',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              dictEntries: ctx.dictEntries,
              stringTransformInfo: {
                original: beforeStr,
                operation: `[${formatVal(kVal)}] = ${formatVal(newVal)}`,
                result: afterStr,
                immutableNote: 'In-place Dictionary mutation',
              },
              intermediateSteps: [
                {
                  expr: t,
                  result: afterStr,
                  rule:
                    actionKind === 'added'
                      ? `Inserts new Key ${formatVal(kVal)} ➔ ${formatVal(newVal)}`
                      : `Overwrites Value of Key ${formatVal(kVal)} with ${formatVal(newVal)}`,
                },
              ],
              variableSnapshots: takeSnapshots(env, dName, beforeStr),
            },
          });
          continue;
        }

        // 5. Variable Assignment or Unpacking: `lhs = rhs`
        const assignMatch = findTopLevelBinarySymbol(t, ['=']);
        const assignIdx = assignMatch ? assignMatch.idx : -1;
        if (assignIdx !== -1) {
          const lhs = t.slice(0, assignIdx).trim();
          const rhs = t.slice(assignIdx + 1).trim();

          if (lhs.includes(',')) {
            const rhsVal = evalSetDictExpr(rhs, ctx);
            inputCursor = ctx.inputCursor;
            assignLoopTarget(lhs, rhsVal, env);
            const lhsVars = lhs.split(',').map((v) => v.trim());
            const mappingStr = lhsVars.map((v) => `${v} = ${formatVal(env[v])}`).join(', ');
            drafts.push({
              title: `Unpack Input Values (${lhs} = ${rhs})`,
              conceptKey: 'dict_mapping_visual',
              speechHinglish: `Line ${line.lineNum} पर \`${rhs}\` से मिले Values क्रम से \`${mappingStr}\` में Store हो जाते हैं।`,
              speechEnglish: `Line ${line.lineNum} unpacks \`${rhs}\` into \`${mappingStr}\`.`,
              cardExplanationHinglish: `Unpacking: \`${mappingStr}\`।`,
              cardExplanationEnglish: `Unpacked into \`${mappingStr}\`.`,
              visualTarget: lhs,
              visualLabel: mappingStr,
              visualSublabel: 'Variable Unpacking',
              consoleOutput: stdoutLines.join('\n'),
              isConsoleVisible: stdoutLines.length > 0,
              highlightLine: line.lineNum,
              highlightToken: lhsVars[0],
              conceptBoxes: [
                { label: rhs, sublabel: 'Input Source', isActive: true },
                { label: lhs, sublabel: 'Target Variables', isActive: true },
                { label: mappingStr, sublabel: 'Assigned Values', isActive: true },
              ],
              operatorDetails: {
                visualType: 'dict_mapping_visual',
                technicalConcept: 'Sequence Unpacking Assignment',
                activeSourceRange: {
                  line: line.lineNum,
                  startCol: line.indent + 1,
                  endCol: line.raw.length,
                  codeText: t,
                },
                intermediateSteps: [{ expr: t, result: mappingStr, rule: 'Unpacks values into variables' }],
                variableSnapshots: takeSnapshots(env),
              },
            });
            continue;
          }

          const prevVal = env[lhs] ? formatVal(env[lhs]) : undefined;
          const rhsVal = evalSetDictExpr(rhs, ctx);
          inputCursor = ctx.inputCursor;
          env[lhs] = cloneRuntimeVal(rhsVal);
          const valStr = formatVal(rhsVal);

          if (!ctx.setMembers && rhsVal.type === 'Set') {
            ctx.setMembers = buildSetMembersVisual(rhsVal.val as RuntimeVal[]);
          }
          if (!ctx.dictEntries && rhsVal.type === 'Dict') {
            ctx.dictEntries = buildDictEntriesVisual(rhsVal.val as DictEntryRuntime[]);
          }

          const vType: OperatorVisualType =
            ctx.detectedVisualType ||
            (rhsVal.type === 'Set'
              ? 'set_element_visual'
              : rhsVal.type === 'Dict'
              ? 'dict_mapping_visual'
              : 'set_element_visual');
          const techConcept =
            ctx.detectedConcept ||
            (rhsVal.type === 'Set'
              ? 'Set Creation & Unique Membership'
              : rhsVal.type === 'Dict'
              ? 'Dictionary Key–Value Mapping'
              : `Variable Assignment (${rhsVal.type})`);

          drafts.push({
            title: `${techConcept} (${lhs} = ${valStr})`,
            conceptKey: vType,
            speechHinglish:
              rhsVal.type === 'Set'
                ? `Line ${line.lineNum} पर हम Set \`${lhs} = ${valStr}\` बनाते हैं। ध्यान दें कि Set में केवल Unique Elements रहते हैं और कोई Positional Index नहीं होता!`
                : rhsVal.type === 'Dict'
                ? `Line ${line.lineNum} पर हम Dictionary \`${lhs} = ${valStr}\` बनाते हैं, जहाँ हर Unique Key अपनी Value से जुड़ी होती है।`
                : `Line ${line.lineNum} पर \`${rhs}\` Evaluate होकर Variable \`${lhs}\` में \`${valStr}\` Store करता है।`,
            speechEnglish: `Line ${line.lineNum} evaluates \`${rhs}\` and stores \`${valStr}\` in \`${lhs}\`.`,
            cardExplanationHinglish: `Assignment: \`${lhs}\` = \`${valStr}\` (${rhsVal.type})।`,
            cardExplanationEnglish: `Assigned \`${valStr}\` to \`${lhs}\`.`,
            visualTarget: lhs,
            visualLabel: `${lhs} = ${valStr}`,
            visualSublabel: techConcept,
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: lhs,
            conceptBoxes: [
              { label: lhs, sublabel: `${rhsVal.type} Variable`, isActive: true },
              { label: valStr, sublabel: techConcept, isActive: true },
              {
                label:
                  rhsVal.type === 'Set'
                    ? 'Unordered Unique Set'
                    : rhsVal.type === 'Dict'
                    ? 'Key ➔ Value Mapping'
                    : rhsVal.type,
                sublabel: 'Memory Structure',
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
              setMembers: ctx.setMembers,
              setOperationInfo: ctx.setOperationInfo,
              dictEntries: ctx.dictEntries,
              stringTransformInfo: ctx.stringTransformInfo,
              intermediateSteps:
                ctx.intermediateSteps.length > 0
                  ? ctx.intermediateSteps
                  : [{ expr: `${lhs} = ${rhs}`, result: valStr, rule: `Stores ${rhsVal.type} in ${lhs}` }],
              intermediateResult: valStr,
              variableSnapshots: takeSnapshots(env, lhs, prevVal),
            },
          });
          continue;
        }

        // 6. Standalone In-Place Method Call: `s.add(4)`, `s.remove('banana')`, `d.update(...)`, `d.clear()`
        const dotIdx = findTopLevelMethodDot(t);
        const objName = dotIdx !== -1 ? t.slice(0, dotIdx).trim() : '';
        const beforeStr = env[objName] ? formatVal(env[objName]) : '';
        evalSetDictExpr(t, ctx);
        inputCursor = ctx.inputCursor;
        const afterStr = env[objName] ? formatVal(env[objName]) : '';

        const vType: OperatorVisualType = ctx.detectedVisualType || 'set_mutation_visual';
        const techConcept = ctx.detectedConcept || 'In-Place Collection Method';

        drafts.push({
          title: `${techConcept} (${t})`,
          conceptKey: vType,
          speechHinglish: `Line ${line.lineNum} पर \`${t}\` सीधे \`${objName}\` को In-Place Update करता है! Before: \`${beforeStr}\` ➔ After: \`${afterStr}\`।`,
          speechEnglish: `Line ${line.lineNum} executes \`${t}\`, mutating \`${objName}\` from \`${beforeStr}\` to \`${afterStr}\`.`,
          cardExplanationHinglish: `Method \`${t}\`: Before \`${beforeStr}\` ➔ After \`${afterStr}\`।`,
          cardExplanationEnglish: `Executed \`${t}\`: \`${beforeStr}\` ➔ \`${afterStr}\`.`,
          visualTarget: t,
          visualLabel: `${objName} ➔ ${afterStr}`,
          visualSublabel: techConcept,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: line.lineNum,
          highlightToken: t.split('.')[1]?.split('(')[0] || objName,
          conceptBoxes: [
            { label: beforeStr || objName, sublabel: 'Before Operation', isActive: false },
            { label: t, sublabel: techConcept, isActive: true },
            { label: afterStr, sublabel: 'After Operation', isActive: true },
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
            setMembers: ctx.setMembers,
            setOperationInfo: ctx.setOperationInfo,
            dictEntries: ctx.dictEntries,
            stringTransformInfo: ctx.stringTransformInfo,
            intermediateSteps: ctx.intermediateSteps,
            intermediateResult: afterStr,
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

export function runSetsDictsPythonSandbox(
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
    const steps = generateSetsDictsTeachingSteps(qDummy);
    const finalOut = steps.length > 0 ? steps[steps.length - 1].consoleOutput : '';
    return { stdout: finalOut, error: null };
  } catch (err: any) {
    return { stdout: '', error: err?.message || String(err) };
  }
}

export function generateSetsDictsHints(question: TopicQuestion): ProgressiveHint[] {
  const codeLines = question.referenceCode
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const keyLine = codeLines[Math.min(1, codeLines.length - 1)] || codeLines[0] || '';

  return [
    {
      level: 1,
      name: 'Level 1: Set / Dictionary Concept Hint',
      badge: '💡 Set / Dictionary Operation Hint',
      hintHinglish: `इस सवाल में हमें Set या Dictionary के Method या Key Access का सही उपयोग करना है। मुख्य Step \`${keyLine}\` पर ध्यान दें।`,
      hintEnglish: `Focus on the Set or Dictionary operation in \`${keyLine}\`. Remember Sets store unique elements and Dictionaries map Keys to Values.`,
    },
    {
      level: 2,
      name: 'Level 2: Expected Output & Syntax',
      badge: '📐 Syntax & Output Structure',
      hintHinglish: `सुनिश्चित करें कि Curly Braces \`{}\` या Round Brackets \`()\` सही से बंद हैं और Output बिल्कुल \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\` जैसा आए।`,
      hintEnglish: `Ensure all braces and parentheses match and your output matches: \`${question.sampleOutput.replace(
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

export function buildSetsDictsQuestionConfig(
  topicId: string,
  q: TopicQuestion
): QuestionV5Config {
  const teachingSteps = generateSetsDictsTeachingSteps(q);
  const hints = generateSetsDictsHints(q);
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
          message: '🎉 Excellent! Your Set & Dictionary logic and output match 100%!',
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
