import { TopicQuestion } from './data/pythonBasics140QuestionsData';
import {
  TeachingStep,
  ProgressiveHint,
  QuestionV5Config,
  diagnoseHelloWorldError,
} from './smartClassroomV5Engine';
import {
  OperatorVisualType,
  OperatorVisualDetails,
  CharIndexCell,
  IntermediateEvalStep,
  EvaluatedOperandInfo,
  VariableSnapshot,
} from './operatorsVisualEngine';

export function isOOPTopic(topicId: string): boolean {
  return (
    topicId.startsWith('py_10_oop') ||
    topicId.startsWith('py_10_oops') ||
    /^py_10_\d+$/.test(topicId)
  );
}

export interface DictEntryRuntime {
  key: RuntimeVal;
  val: RuntimeVal;
}

export type MethodKind =
  | 'instance'
  | 'classmethod'
  | 'staticmethod'
  | 'property'
  | 'setter'
  | 'abstractmethod'
  | 'magic';

export interface MethodParam {
  name: string;
  defaultExpr?: string;
}

export interface MethodRuntime {
  name: string;
  definingClass: string;
  kind: MethodKind;
  params: MethodParam[];
  body: BlockNode[];
  lineNum: number;
}

export interface ClassRuntime {
  name: string;
  bases: string[];
  mro: string[];
  inheritsABC: boolean;
  abstractMethods: Set<string>;
  classAttrs: Record<string, RuntimeVal>;
  methods: Record<string, MethodRuntime>;
  properties: Record<string, { getter?: MethodRuntime; setter?: MethodRuntime }>;
  lineNum: number;
}

export interface InstanceAttrEntry {
  val: RuntimeVal;
  prevVal?: string;
  mangledFrom?: string;
}

export interface InstanceRuntime {
  instanceId: string;
  objNumericId: number;
  className: string;
  attrs: Record<string, InstanceAttrEntry>;
}

export interface RuntimeVal {
  val: any;
  type:
    | 'Integer'
    | 'Float'
    | 'Boolean'
    | 'String'
    | 'List'
    | 'Tuple'
    | 'Set'
    | 'Dict'
    | 'Class'
    | 'Instance'
    | 'NoneType';
  isFloatFixed?: number;
}

class PythonRuntimeError extends Error {
  excType: string;
  constructor(excType: string, message: string) {
    super(message);
    this.excType = excType;
  }
}

export interface OOPEvalContext {
  env: Record<string, RuntimeVal>;
  globalEnv: Record<string, RuntimeVal>;
  classes: Record<string, ClassRuntime>;
  functions: Record<string, MethodRuntime>;
  instances: InstanceRuntime[];
  classInstanceCounters: Record<string, number>;
  nextObjNumericId: { current: number };
  inputs: string[];
  inputCursor: number;
  stdoutLines: string[];
  callStack: string[];
  currentDefiningClass?: string;
  activeClass?: string;
  activeObject?: string;
  currentMethod?: string;
  selfBinding?: string;
  lookupPath?: string;
  returnValue?: string;
  oopRuleNote?: string;
  detectedVisualType?: OperatorVisualType;
  detectedConcept?: string;
}

function makeInt(n: number): RuntimeVal {
  return { val: Math.trunc(n), type: 'Integer' };
}

function makeFloat(n: number, isFloatFixed?: number): RuntimeVal {
  return { val: Number(n), type: 'Float', isFloatFixed };
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
  for (const entry of entries) {
    const existingIdx = deduped.findIndex((e) => valEquals(e.key, entry.key));
    if (existingIdx !== -1) {
      deduped[existingIdx] = {
        key: cloneRuntimeVal(entry.key),
        val: cloneRuntimeVal(entry.val),
      };
    } else {
      deduped.push({
        key: cloneRuntimeVal(entry.key),
        val: cloneRuntimeVal(entry.val),
      });
    }
  }
  return { val: deduped, type: 'Dict' };
}

function makeClassVal(cls: ClassRuntime): RuntimeVal {
  return { val: cls, type: 'Class' };
}

function makeInstanceVal(inst: InstanceRuntime): RuntimeVal {
  return { val: inst, type: 'Instance' };
}

export function valEquals(a: RuntimeVal, b: RuntimeVal): boolean {
  if (!a || !b) return false;
  if (
    (a.type === 'Integer' || a.type === 'Float') &&
    (b.type === 'Integer' || b.type === 'Float')
  ) {
    return Number(a.val) === Number(b.val);
  }
  if (a.type !== b.type) return false;
  if (a.type === 'Instance' && b.type === 'Instance') {
    return (a.val as InstanceRuntime).objNumericId === (b.val as InstanceRuntime).objNumericId;
  }
  if (a.type === 'Class' && b.type === 'Class') {
    return (a.val as ClassRuntime).name === (b.val as ClassRuntime).name;
  }
  if (a.type === 'List' || a.type === 'Tuple') {
    const arrA = a.val as RuntimeVal[];
    const arrB = b.val as RuntimeVal[];
    if (arrA.length !== arrB.length) return false;
    return arrA.every((item, i) => valEquals(item, arrB[i]));
  }
  return a.val === b.val;
}

export function compareRuntimeVals(a: RuntimeVal, b: RuntimeVal): number {
  if (
    (a.type === 'Integer' || a.type === 'Float') &&
    (b.type === 'Integer' || b.type === 'Float')
  ) {
    return Number(a.val) - Number(b.val);
  }
  if (a.type === 'String' && b.type === 'String') {
    return String(a.val).localeCompare(String(b.val));
  }
  if ((a.type === 'Tuple' || a.type === 'List') && (b.type === 'Tuple' || b.type === 'List')) {
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
  if (v.type === 'Instance' || v.type === 'Class') {
    // Preserve object reference semantics!
    return v;
  }
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
  return `'${s.replace(/\\/g, '\\\\').replace(/'/, "\\'")}'`;
}

export function formatVal(v: RuntimeVal | undefined, ctx?: OOPEvalContext): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'Boolean') return v.val ? 'True' : 'False';
  if (v.type === 'Float') {
    if (v.isFloatFixed !== undefined) return Number(v.val).toFixed(v.isFloatFixed);
    return Number.isInteger(v.val) ? `${v.val}.0` : String(v.val);
  }
  if (v.type === 'Integer') return String(v.val);
  if (v.type === 'String') return reprString(String(v.val));
  if (v.type === 'Class') return `<class '${(v.val as ClassRuntime).name}'>`;
  if (v.type === 'Instance') {
    const inst = v.val as InstanceRuntime;
    const attrPairs = Object.entries(inst.attrs)
      .map(([k, entry]) => `${k}=${formatVal(entry.val)}`)
      .join(', ');
    return attrPairs ? `${inst.instanceId}(${attrPairs})` : `${inst.instanceId}()`;
  }
  if (v.type === 'List') {
    return `[${(v.val as RuntimeVal[]).map((it) => formatVal(it, ctx)).join(', ')}]`;
  }
  if (v.type === 'Tuple') {
    const items = v.val as RuntimeVal[];
    if (items.length === 1) return `(${formatVal(items[0], ctx)},)`;
    return `(${items.map((it) => formatVal(it, ctx)).join(', ')})`;
  }
  if (v.type === 'Set') {
    const items = v.val as RuntimeVal[];
    if (items.length === 0) return 'set()';
    return `{${items.map((it) => formatVal(it, ctx)).join(', ')}}`;
  }
  if (v.type === 'Dict') {
    const entries = v.val as DictEntryRuntime[];
    return `{${entries.map((e) => `${formatVal(e.key, ctx)}: ${formatVal(e.val, ctx)}`).join(', ')}}`;
  }
  return String(v.val);
}

export function formatPrintVal(v: RuntimeVal | undefined, ctx?: OOPEvalContext): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'String') return String(v.val);
  if (v.type === 'Instance' && ctx) {
    const inst = v.val as InstanceRuntime;
    const strMethod = findMethodInMRO(inst.className, '__str__', ctx.classes);
    if (strMethod) {
      ctx.detectedVisualType = 'magic_method_visual';
      ctx.detectedConcept = `Magic Method __str__ on ${inst.instanceId}`;
      const strVal = executeMethodOrFunc(strMethod, [v], ctx, inst.instanceId);
      return String(strVal.val ?? '');
    }
  }
  return formatVal(v, ctx);
}

export function isTruthy(v: RuntimeVal | undefined): boolean {
  if (!v || v.type === 'NoneType') return false;
  if (v.type === 'Boolean') return Boolean(v.val);
  if (v.type === 'Integer' || v.type === 'Float') return Number(v.val) !== 0;
  if (v.type === 'String') return String(v.val).length > 0;
  if (v.type === 'List' || v.type === 'Tuple' || v.type === 'Set' || v.type === 'Dict') {
    return (v.val as any[]).length > 0;
  }
  return true;
}

/**
 * Genuine C3 Linearization algorithm for Python Method Resolution Order (MRO)
 */
export function computeC3MRO(
  className: string,
  bases: string[],
  classes: Record<string, ClassRuntime>
): string[] {
  const validBases = bases.filter((b) => b !== 'ABC' && b !== 'object');
  if (validBases.length === 0) {
    return [className, 'object'];
  }

  const sequences: string[][] = validBases.map((b) =>
    classes[b] ? [...classes[b].mro] : [b, 'object']
  );
  sequences.push([...validBases, 'object']);

  const result: string[] = [className];
  while (true) {
    const nonEmpty = sequences.filter((seq) => seq.length > 0);
    if (nonEmpty.length === 0) break;

    let candidate: string | null = null;
    for (const seq of nonEmpty) {
      const head = seq[0];
      const inAnyTail = nonEmpty.some((other) => other.slice(1).includes(head));
      if (!inAnyTail) {
        candidate = head;
        break;
      }
    }

    if (!candidate) {
      candidate = nonEmpty[0][0];
    }

    result.push(candidate);
    for (const seq of nonEmpty) {
      if (seq[0] === candidate) {
        seq.shift();
      }
    }
  }

  return result;
}

function findMethodInMRO(
  className: string,
  methodName: string,
  classes: Record<string, ClassRuntime>,
  startAfterClass?: string
): MethodRuntime | null {
  const cls = classes[className];
  if (!cls) return null;
  let searchMRO = cls.mro;
  if (startAfterClass) {
    const idx = cls.mro.indexOf(startAfterClass);
    if (idx !== -1) {
      searchMRO = cls.mro.slice(idx + 1);
    }
  }
  for (const cName of searchMRO) {
    const cObj = classes[cName];
    if (cObj && cObj.methods[methodName]) {
      return cObj.methods[methodName];
    }
  }
  return null;
}

function findPropertyInMRO(
  className: string,
  propName: string,
  classes: Record<string, ClassRuntime>
): { getter?: MethodRuntime; setter?: MethodRuntime; ownerClass: string } | null {
  const cls = classes[className];
  if (!cls) return null;
  for (const cName of cls.mro) {
    const cObj = classes[cName];
    if (cObj && cObj.properties[propName]) {
      return { ...cObj.properties[propName], ownerClass: cName };
    }
  }
  return null;
}

function resolveAttrName(attr: string, definingClass?: string): { resolved: string; mangledFrom?: string } {
  if (
    definingClass &&
    attr.startsWith('__') &&
    !attr.endsWith('__') &&
    attr.length > 2
  ) {
    return {
      resolved: `_${definingClass}${attr}`,
      mangledFrom: attr,
    };
  }
  return { resolved: attr };
}

function splitTopLevel(s: string, sep = ','): string[] {
  const res: string[] = [];
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
    if (ch === '(' || ch === '[' || ch === '{') {
      depth++;
      cur += ch;
      continue;
    }
    if (ch === ')' || ch === ']' || ch === '}') {
      depth--;
      cur += ch;
      continue;
    }
    if (depth === 0 && s.slice(i, i + sep.length) === sep) {
      res.push(cur.trim());
      cur = '';
      i += sep.length - 1;
      continue;
    }
    cur += ch;
  }
  if (cur.trim().length > 0) res.push(cur.trim());
  return res;
}

function isSingleStringLiteral(s: string, isFString = false): boolean {
  const startOffset = isFString ? 1 : 0;
  const quote = s[startOffset];
  if (quote !== '"' && quote !== "'") return false;
  if (s[s.length - 1] !== quote || s.length < startOffset + 2) return false;
  for (let i = startOffset + 1; i < s.length - 1; i++) {
    if (s[i] === quote && s[i - 1] !== '\\') return false;
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

function findAllTopLevelComparisons(s: string): { idx: number; op: string }[] {
  let depth = 0;
  let inQuote: string | null = null;
  const symOps = ['==', '!=', '<=', '>=', '<', '>'];
  const matches: { idx: number; op: string }[] = [];

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

    if (s.slice(i, i + 8) === ' is not ' && i > 0) {
      matches.push({ idx: i + 1, op: 'is not' });
      i += 7;
      continue;
    }
    if (s.slice(i, i + 4) === ' is ' && i > 0) {
      matches.push({ idx: i + 1, op: 'is' });
      i += 3;
      continue;
    }
    if (s.slice(i, i + 8) === ' not in ' && i > 0) {
      matches.push({ idx: i + 1, op: 'not in' });
      i += 7;
      continue;
    }
    if (s.slice(i, i + 4) === ' in ' && i > 0) {
      matches.push({ idx: i + 1, op: 'in' });
      i += 3;
      continue;
    }
    for (const op of symOps) {
      if (s.slice(i, i + op.length) === op) {
        matches.push({ idx: i, op });
        i += op.length - 1;
        break;
      }
    }
  }
  return matches;
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

function findTopLevelDot(s: string): number {
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

export function assignLoopTarget(
  targetStr: string,
  val: RuntimeVal,
  env: Record<string, RuntimeVal>,
  ctx?: OOPEvalContext
) {
  const t = targetStr.trim().replace(/^\((.+)\)$/, '$1').trim();
  const topParts = splitTopLevel(t, ',');
  if (topParts.length === 1) {
    const single = topParts[0];
    if (ctx && (single.includes('.') || single.includes('['))) {
      assignDotOrBracketTarget(single, val, ctx);
      return;
    }
    env[single] = cloneRuntimeVal(val);
    return;
  }
  const items =
    val.type === 'List' || val.type === 'Tuple' || val.type === 'Set'
      ? (val.val as RuntimeVal[])
      : [];
  for (let i = 0; i < topParts.length; i++) {
    assignLoopTarget(topParts[i], items[i] ?? makeNone(), env, ctx);
  }
}

export function assignDotOrBracketTarget(lhsRaw: string, val: RuntimeVal, ctx: OOPEvalContext) {
  const lhs = lhsRaw.trim();
  const idxMatch = findTopLevelTrailingBracket(lhs);
  if (idxMatch) {
    const targetObj = evalOOPExpr(idxMatch.base, ctx);
    const keyOrIdx = evalOOPExpr(idxMatch.bracketContent, ctx);
    if (targetObj.type === 'List') {
      const arr = targetObj.val as RuntimeVal[];
      const idx = Number(keyOrIdx.val);
      const actualIdx = idx < 0 ? arr.length + idx : idx;
      arr[actualIdx] = cloneRuntimeVal(val);
    } else if (targetObj.type === 'Dict') {
      const entries = targetObj.val as DictEntryRuntime[];
      const existing = entries.find((e) => valEquals(e.key, keyOrIdx));
      if (existing) existing.val = cloneRuntimeVal(val);
      else entries.push({ key: cloneRuntimeVal(keyOrIdx), val: cloneRuntimeVal(val) });
    }
    return;
  }

  const dotIdx = findTopLevelDot(lhs);
  if (dotIdx !== -1) {
    const objExpr = lhs.slice(0, dotIdx).trim();
    const rawAttr = lhs.slice(dotIdx + 1).trim();
    const targetObj = evalOOPExpr(objExpr, ctx);
    setObjectAttribute(targetObj, rawAttr, val, ctx);
    return;
  }

  ctx.env[lhs] = cloneRuntimeVal(val);
}

export function getObjectAttribute(
  targetObj: RuntimeVal,
  rawAttr: string,
  ctx: OOPEvalContext
): RuntimeVal {
  if (targetObj.type === 'Class') {
    const cls = targetObj.val as ClassRuntime;
    if (rawAttr === '__name__') return makeStr(cls.name);
    const { resolved } = resolveAttrName(rawAttr, ctx.currentDefiningClass);
    for (const cName of cls.mro) {
      const cObj = ctx.classes[cName];
      if (cObj && resolved in cObj.classAttrs) {
        ctx.activeClass = cName;
        ctx.lookupPath = `${cls.name}.${rawAttr} ➔ Class Attribute on ${cName}`;
        ctx.detectedVisualType = 'class_attribute_visual';
        ctx.detectedConcept = `Class Attribute Access (${cls.name}.${rawAttr})`;
        return cObj.classAttrs[resolved];
      }
    }
    return makeNone();
  }

  if (targetObj.type === 'Instance') {
    const inst = targetObj.val as InstanceRuntime;
    ctx.activeObject = inst.instanceId;
    ctx.activeClass = inst.className;

    // 1. Check @property getter along MRO
    const propInfo = findPropertyInMRO(inst.className, rawAttr, ctx.classes);
    if (propInfo?.getter) {
      ctx.detectedVisualType = 'encapsulation_visual';
      ctx.detectedConcept = `@property Getter (${inst.className}.${rawAttr})`;
      ctx.lookupPath = `${inst.instanceId}.${rawAttr} ➔ @property Getter on ${propInfo.ownerClass}`;
      return executeMethodOrFunc(propInfo.getter, [targetObj], ctx, inst.instanceId);
    }

    const { resolved, mangledFrom } = resolveAttrName(rawAttr, ctx.currentDefiningClass);

    // 2. Check Instance Attributes
    if (resolved in inst.attrs) {
      const entry = inst.attrs[resolved];
      const cls = ctx.classes[inst.className];
      const shadowsClass = cls?.mro.some(
        (cName) => ctx.classes[cName] && resolved in ctx.classes[cName].classAttrs
      );
      ctx.lookupPath = shadowsClass
        ? `${inst.instanceId}.${rawAttr} ➔ Instance Attribute (Shadows Class Attribute)`
        : `${inst.instanceId}.${rawAttr} ➔ Instance Attribute (${formatVal(entry.val, ctx)})`;
      if (mangledFrom || rawAttr.startsWith('_')) {
        ctx.detectedVisualType = 'encapsulation_visual';
        ctx.detectedConcept = mangledFrom
          ? `Name-Mangled Attribute (${mangledFrom} ➔ ${resolved})`
          : `Encapsulated Attribute (${rawAttr})`;
      } else if (shadowsClass) {
        ctx.detectedVisualType = 'class_attribute_visual';
        ctx.detectedConcept = `Instance Attribute Shadowing (${inst.instanceId}.${rawAttr})`;
      } else {
        ctx.detectedVisualType = 'instance_attribute_visual';
        ctx.detectedConcept = `Instance Attribute Lookup (${inst.instanceId}.${rawAttr})`;
      }
      return entry.val;
    }

    // 3. Fallback to Class Attribute Lookup along MRO
    const cls = ctx.classes[inst.className];
    if (cls) {
      for (const cName of cls.mro) {
        const cObj = ctx.classes[cName];
        if (cObj && resolved in cObj.classAttrs) {
          ctx.lookupPath = `${inst.instanceId}.${rawAttr} ➔ Not in Instance ➔ Found in Class ${cName}`;
          ctx.detectedVisualType = 'class_attribute_visual';
          ctx.detectedConcept = `Class Attribute Lookup via Instance (${inst.instanceId}.${rawAttr} ➔ ${cName}.${rawAttr})`;
          return cObj.classAttrs[resolved];
        }
      }
    }
  }

  return makeNone();
}

export function setObjectAttribute(
  targetObj: RuntimeVal,
  rawAttr: string,
  val: RuntimeVal,
  ctx: OOPEvalContext
) {
  if (targetObj.type === 'Class') {
    const cls = targetObj.val as ClassRuntime;
    const { resolved } = resolveAttrName(rawAttr, ctx.currentDefiningClass);
    cls.classAttrs[resolved] = cloneRuntimeVal(val);
    ctx.activeClass = cls.name;
    ctx.detectedVisualType = 'class_attribute_visual';
    ctx.detectedConcept = `Class Attribute Update (${cls.name}.${rawAttr} = ${formatVal(val, ctx)})`;
    return;
  }

  if (targetObj.type === 'Instance') {
    const inst = targetObj.val as InstanceRuntime;
    ctx.activeObject = inst.instanceId;
    ctx.activeClass = inst.className;

    // 1. Check @property setter along MRO
    const propInfo = findPropertyInMRO(inst.className, rawAttr, ctx.classes);
    if (propInfo?.setter) {
      ctx.detectedVisualType = 'encapsulation_visual';
      ctx.detectedConcept = `@${rawAttr}.setter Validation (${inst.instanceId}.${rawAttr} = ${formatVal(val, ctx)})`;
      ctx.lookupPath = `${inst.instanceId}.${rawAttr} = ${formatVal(val, ctx)} ➔ @${rawAttr}.setter`;
      executeMethodOrFunc(propInfo.setter, [targetObj, cloneRuntimeVal(val)], ctx, inst.instanceId);
      return;
    }

    const { resolved, mangledFrom } = resolveAttrName(rawAttr, ctx.currentDefiningClass);
    const existing = inst.attrs[resolved];
    const prevStr = existing ? formatVal(existing.val, ctx) : undefined;
    inst.attrs[resolved] = {
      val: cloneRuntimeVal(val),
      prevVal: prevStr,
      mangledFrom: mangledFrom || existing?.mangledFrom,
    };

    if (mangledFrom || rawAttr.startsWith('_')) {
      ctx.detectedVisualType = 'encapsulation_visual';
      ctx.detectedConcept = mangledFrom
        ? `Name Mangling (${rawAttr} stored as ${resolved})`
        : `Internal Attribute Convention (${rawAttr})`;
    } else if (prevStr !== undefined) {
      ctx.detectedVisualType = 'object_mutation_visual';
      ctx.detectedConcept = `Object State Mutation (${inst.instanceId}.${rawAttr}: ${prevStr} ➔ ${formatVal(val, ctx)})`;
    } else {
      ctx.detectedVisualType = 'instance_attribute_visual';
      ctx.detectedConcept = `Bind Instance Attribute (${inst.instanceId}.${rawAttr} = ${formatVal(val, ctx)})`;
    }
  }
}

export function evalGeneratorItems(genExpr: string, ctx: OOPEvalContext): RuntimeVal[] {
  const clean = isOuterBalanced(genExpr.trim(), '(', ')')
    ? genExpr.trim().slice(1, -1).trim()
    : genExpr.trim();
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
    assignLoopTarget(loopTarget, itemVal, ctx.env, ctx);
    const keep = condExpr ? isTruthy(evalOOPExpr(condExpr, ctx)) : true;
    if (keep) {
      out.push(evalOOPExpr(mapExpr, ctx));
    }
  }
  return out;
}

export function evalIterableItems(iterExpr: string, ctx: OOPEvalContext): RuntimeVal[] {
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
    const rArgs = splitTopLevel(rangeMatch[1]).map((a) => Number(evalOOPExpr(a, ctx).val));
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

  const v = evalOOPExpr(s, ctx);
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

function executeMethodOrFunc(
  fnDef: MethodRuntime,
  argVals: RuntimeVal[],
  ctx: OOPEvalContext,
  selfLabel?: string
): RuntimeVal {
  const localEnv: Record<string, RuntimeVal> = { ...ctx.globalEnv };
  for (let i = 0; i < fnDef.params.length; i++) {
    const p = fnDef.params[i];
    if (argVals[i] !== undefined) {
      localEnv[p.name] = cloneRuntimeVal(argVals[i]);
    } else if (p.defaultExpr !== undefined) {
      localEnv[p.name] = evalOOPExpr(p.defaultExpr, ctx);
    } else {
      localEnv[p.name] = makeNone();
    }
  }

  const displayArgs = argVals.map((a) => formatVal(a, ctx)).join(', ');
  const frameStr = fnDef.definingClass
    ? `${fnDef.definingClass}.${fnDef.name}(${displayArgs})`
    : `${fnDef.name}(${displayArgs})`;
  ctx.callStack.push(frameStr);
  ctx.currentMethod = fnDef.definingClass ? `${fnDef.definingClass}.${fnDef.name}` : fnDef.name;
  if (selfLabel && fnDef.params[0]?.name === 'self') {
    ctx.selfBinding = `self ➔ ${selfLabel}`;
  } else if (fnDef.params[0]?.name === 'cls' && argVals[0]?.type === 'Class') {
    ctx.selfBinding = `cls ➔ <class '${(argVals[0].val as ClassRuntime).name}'>`;
  }

  const prevDefiningClass = ctx.currentDefiningClass;
  const subCtx: OOPEvalContext = {
    ...ctx,
    env: localEnv,
    currentDefiningClass: fnDef.definingClass || prevDefiningClass,
  };

  function runBody(nodes: BlockNode[]): { returned?: RuntimeVal; broke?: boolean } {
    for (const node of nodes) {
      if (node.kind === 'simple') {
        const t = node.line.trimmed;
        if (t === 'pass') continue;
        if (t === 'break') return { broke: true };
        if (t === 'return' || t.startsWith('return ')) {
          const retExpr = t === 'return' ? '' : t.slice(7).trim();
          const rVal = retExpr ? evalOOPExpr(retExpr, subCtx) : makeNone();
          ctx.returnValue = formatVal(rVal, ctx);
          return { returned: rVal };
        }

        // print(...)
        const pMatch = t.match(/^print\((.*)\)$/);
        if (pMatch) {
          const inner = pMatch[1].trim();
          const args = inner ? splitTopLevel(inner, ',').map((a) => evalOOPExpr(a, subCtx)) : [];
          ctx.stdoutLines.push(args.map((a) => formatPrintVal(a, subCtx)).join(' '));
          continue;
        }

        // Augmented assignment
        const augMatch = t.match(/^([a-zA-Z_][\w.]*(?:\[.+?\])?)\s*(\+=|-=|\*=|\/\/=)\s*(.+)$/);
        if (augMatch) {
          const lhs = augMatch[1].trim();
          const op = augMatch[2];
          const curVal = evalOOPExpr(lhs, subCtx);
          const rhsVal = evalOOPExpr(augMatch[3], subCtx);
          const isF = curVal.type === 'Float' || rhsVal.type === 'Float';
          let num = Number(curVal.val ?? 0);
          if (op === '+=') num += Number(rhsVal.val);
          else if (op === '-=') num -= Number(rhsVal.val);
          else if (op === '*=') num *= Number(rhsVal.val);
          else if (op === '//=') num = Math.floor(num / Number(rhsVal.val));
          assignDotOrBracketTarget(lhs, isF ? makeFloat(num) : makeInt(num), subCtx);
          continue;
        }

        // Standard assignment
        const eq = findTopLevelBinarySymbol(t, ['='], true);
        if (eq) {
          const lhs = t.slice(0, eq.idx).trim();
          const rhs = t.slice(eq.idx + 1).trim();
          const rVal = evalOOPExpr(rhs, subCtx);
          assignLoopTarget(lhs, rVal, subCtx.env, subCtx);
          continue;
        }

        evalOOPExpr(t, subCtx);
        continue;
      }

      if (node.kind === 'if_chain') {
        for (const br of node.branches) {
          if (br.branchType === 'else' || isTruthy(evalOOPExpr(br.condExpr || 'True', subCtx))) {
            const res = runBody(br.body);
            if (res.returned !== undefined || res.broke) return res;
            break;
          }
        }
        continue;
      }

      if (node.kind === 'for_loop') {
        const items = evalIterableItems(node.iterExpr, subCtx);
        for (const it of items) {
          assignLoopTarget(node.targetStr, it, subCtx.env, subCtx);
          const res = runBody(node.body);
          if (res.returned !== undefined) return res;
          if (res.broke) break;
        }
        continue;
      }
    }
    return {};
  }

  const res = runBody(fnDef.body);
  ctx.inputCursor = subCtx.inputCursor;
  if (subCtx.activeObject) ctx.activeObject = subCtx.activeObject;
  if (subCtx.activeClass) ctx.activeClass = subCtx.activeClass;
  if (subCtx.lookupPath) ctx.lookupPath = subCtx.lookupPath;
  if (subCtx.detectedVisualType) ctx.detectedVisualType = subCtx.detectedVisualType;
  if (subCtx.detectedConcept) ctx.detectedConcept = subCtx.detectedConcept;
  return res.returned ?? makeNone();
}

export function instantiateClass(
  cls: ClassRuntime,
  argVals: RuntimeVal[],
  ctx: OOPEvalContext
): RuntimeVal {
  if (cls.inheritsABC && cls.abstractMethods.size > 0) {
    const missing = Array.from(cls.abstractMethods).join(', ');
    throw new PythonRuntimeError(
      'TypeError',
      `Can't instantiate abstract class ${cls.name} with abstract method ${missing}`
    );
  }

  const count = (ctx.classInstanceCounters[cls.name] || 0) + 1;
  ctx.classInstanceCounters[cls.name] = count;
  const inst: InstanceRuntime = {
    instanceId: `${cls.name}#${count}`,
    objNumericId: ctx.nextObjNumericId.current++,
    className: cls.name,
    attrs: {},
  };
  ctx.instances.push(inst);
  const instVal = makeInstanceVal(inst);
  ctx.activeClass = cls.name;
  ctx.activeObject = inst.instanceId;
  ctx.detectedVisualType = 'object_creation_visual';
  ctx.detectedConcept = `Object Instantiation (${cls.name}() ➔ ${inst.instanceId})`;

  const initMethod = findMethodInMRO(cls.name, '__init__', ctx.classes);
  if (initMethod) {
    ctx.selfBinding = `self ➔ ${inst.instanceId}`;
    ctx.lookupPath =
      initMethod.definingClass === cls.name
        ? `${cls.name}.__init__(self=${inst.instanceId})`
        : `${cls.name}() ➔ Inherited ${initMethod.definingClass}.__init__(self=${inst.instanceId})`;
    executeMethodOrFunc(initMethod, [instVal, ...argVals], ctx, inst.instanceId);
  }

  return instVal;
}

export function evalOOPExpr(expr: string, ctx: OOPEvalContext): RuntimeVal {
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
          const v = evalOOPExpr(innerExpr, ctx);
          out += Number(v.val).toFixed(digits);
        } else {
          const v = evalOOPExpr(inside, ctx);
          out += formatPrintVal(v, ctx);
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

  // Dict / Set literal
  if (isOuterBalanced(s, '{', '}')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return makeDict([]);
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    const firstColon = parts[0] ? findTopLevelBinarySymbol(parts[0], [':'], true) : null;
    if (firstColon) {
      const entries: DictEntryRuntime[] = [];
      for (const p of parts) {
        const cm = findTopLevelBinarySymbol(p, [':'], true);
        if (cm) {
          entries.push({
            key: evalOOPExpr(p.slice(0, cm.idx).trim(), ctx),
            val: evalOOPExpr(p.slice(cm.idx + 1).trim(), ctx),
          });
        }
      }
      return makeDict(entries);
    }
    return makeSet(parts.map((p) => evalOOPExpr(p, ctx)));
  }

  // List literal or List Comprehension
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
          assignLoopTarget(loopTarget, itemVal, ctx.env, ctx);
          if (!condExpr || isTruthy(evalOOPExpr(condExpr, ctx))) {
            outItems.push(evalOOPExpr(mapExpr, ctx));
          }
        }
        return makeList(outItems);
      }
    }
    const parts = splitTopLevel(inner, ',').filter((p) => p.length > 0);
    return makeList(parts.map((p) => evalOOPExpr(p, ctx)));
  }

  // Parentheses or Tuple literal
  if (isOuterBalanced(s, '(', ')')) {
    const inner = s.slice(1, -1).trim();
    if (!inner) return makeTuple([]);
    const parts = splitTopLevel(inner, ',');
    if (parts.length === 1 && !inner.endsWith(',')) {
      return evalOOPExpr(inner, ctx);
    }
    return makeTuple(parts.filter((p) => p.length > 0).map((p) => evalOOPExpr(p, ctx)));
  }

  // Top-level comma tuple packing
  const topCommaParts = splitTopLevel(s, ',');
  if (topCommaParts.length > 1) {
    return makeTuple(topCommaParts.map((p) => evalOOPExpr(p, ctx)));
  }

  // Ternary expression: `A if COND else B`
  const ternIfIdx = findTopLevelKeywordOp(s, 'if');
  const ternElseIdx = findTopLevelKeywordOp(s, 'else');
  if (ternIfIdx !== -1 && ternElseIdx !== -1 && ternElseIdx > ternIfIdx) {
    const trueExpr = s.slice(0, ternIfIdx).trim();
    const condExpr = s.slice(ternIfIdx + 2, ternElseIdx).trim();
    const falseExpr = s.slice(ternElseIdx + 4).trim();
    const cVal = evalOOPExpr(condExpr, ctx);
    return isTruthy(cVal) ? evalOOPExpr(trueExpr, ctx) : evalOOPExpr(falseExpr, ctx);
  }

  // Logical OR / AND / NOT
  const orIdx = findTopLevelKeywordOp(s, 'or');
  if (orIdx !== -1) {
    const lv = evalOOPExpr(s.slice(0, orIdx), ctx);
    if (isTruthy(lv)) return makeBool(true);
    const rv = evalOOPExpr(s.slice(orIdx + 2), ctx);
    return makeBool(isTruthy(rv));
  }

  const andIdx = findTopLevelKeywordOp(s, 'and');
  if (andIdx !== -1) {
    const lv = evalOOPExpr(s.slice(0, andIdx), ctx);
    if (!isTruthy(lv)) return makeBool(false);
    const rv = evalOOPExpr(s.slice(andIdx + 3), ctx);
    return makeBool(isTruthy(rv));
  }

  if (s.startsWith('not ') && findTopLevelKeywordOp(s, 'not') === 0) {
    return makeBool(!isTruthy(evalOOPExpr(s.slice(4), ctx)));
  }

  // Comparisons (including chained comparisons like `0 <= m <= 100` and `is` / `is not`)
  const cmps = findAllTopLevelComparisons(s);
  if (cmps.length > 0) {
    const operands: string[] = [];
    let lastPos = 0;
    for (const c of cmps) {
      operands.push(s.slice(lastPos, c.idx).trim());
      lastPos = c.idx + c.op.length;
    }
    operands.push(s.slice(lastPos).trim());
    const vals = operands.map((opStr) => evalOOPExpr(opStr, ctx));

    for (let i = 0; i < cmps.length; i++) {
      const op = cmps[i].op;
      const lv = vals[i];
      const rv = vals[i + 1];
      let stepOk = false;

      if (op === 'is' || op === 'is not') {
        const sameId =
          lv.type === 'Instance' && rv.type === 'Instance'
            ? (lv.val as InstanceRuntime).objNumericId === (rv.val as InstanceRuntime).objNumericId
            : valEquals(lv, rv);
        stepOk = op === 'is' ? sameId : !sameId;
        ctx.detectedVisualType = 'identity';
        ctx.detectedConcept = `Object Identity Comparison (${op})`;
      } else if (op === 'in' || op === 'not in') {
        let found = false;
        if (rv.type === 'Set' || rv.type === 'List' || rv.type === 'Tuple') {
          found = (rv.val as RuntimeVal[]).some((it) => valEquals(it, lv));
        } else if (rv.type === 'Dict') {
          found = (rv.val as DictEntryRuntime[]).some((e) => valEquals(e.key, lv));
        } else if (rv.type === 'String') {
          found = String(rv.val).includes(String(lv.val));
        }
        stepOk = op === 'in' ? found : !found;
      } else if (op === '==') stepOk = valEquals(lv, rv);
      else if (op === '!=') stepOk = !valEquals(lv, rv);
      else if (op === '<') stepOk = lv.val < rv.val;
      else if (op === '>') stepOk = lv.val > rv.val;
      else if (op === '<=') stepOk = lv.val <= rv.val;
      else if (op === '>=') stepOk = lv.val >= rv.val;

      if (!stepOk) return makeBool(false);
    }
    return makeBool(true);
  }

  // Binary + and - (with Operator Overloading `__add__`!)
  const addSub = findTopLevelBinarySymbol(s, ['+', '-']);
  if (addSub) {
    const lv = evalOOPExpr(s.slice(0, addSub.idx), ctx);
    const rv = evalOOPExpr(s.slice(addSub.idx + 1), ctx);
    if (addSub.op === '+' && lv.type === 'Instance') {
      const inst = lv.val as InstanceRuntime;
      const addMethod = findMethodInMRO(inst.className, '__add__', ctx.classes);
      if (addMethod) {
        ctx.detectedVisualType = 'magic_method_visual';
        ctx.detectedConcept = `Operator Overloading (__add__ on ${inst.instanceId})`;
        ctx.lookupPath = `${inst.instanceId} + ${
          rv.type === 'Instance' ? (rv.val as InstanceRuntime).instanceId : formatVal(rv, ctx)
        } ➔ ${inst.className}.__add__(self, other)`;
        return executeMethodOrFunc(addMethod, [lv, rv], ctx, inst.instanceId);
      }
    }
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
    const lv = evalOOPExpr(s.slice(0, mulDiv.idx), ctx);
    const rv = evalOOPExpr(s.slice(mulDiv.idx + mulDiv.op.length), ctx);
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
    const lv = evalOOPExpr(s.slice(0, powMatch.idx), ctx);
    const rv = evalOOPExpr(s.slice(powMatch.idx + 2), ctx);
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const n = Math.pow(Number(lv.val), Number(rv.val));
    return isF ? makeFloat(n) : makeInt(n);
  }

  // Unary - / +
  if ((s.startsWith('-') || s.startsWith('+')) && !/^[-+]\d+(\.\d+)?$/.test(s)) {
    const argVal = evalOOPExpr(s.slice(1), ctx);
    const num = s[0] === '-' ? -Number(argVal.val) : +Number(argVal.val);
    return argVal.type === 'Float' ? makeFloat(num) : makeInt(num);
  }

  // Indexing: `obj[key]`
  const bracketMatch = findTopLevelTrailingBracket(s);
  if (bracketMatch) {
    const targetVal = evalOOPExpr(bracketMatch.base, ctx);
    const keyVal = evalOOPExpr(bracketMatch.bracketContent, ctx);
    if (targetVal.type === 'List' || targetVal.type === 'Tuple') {
      const arr = targetVal.val as RuntimeVal[];
      const rawIdx = Number(keyVal.val);
      const actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
      return arr[actualIdx] ?? makeNone();
    }
    if (targetVal.type === 'Dict') {
      const entries = targetVal.val as DictEntryRuntime[];
      const found = entries.find((e) => valEquals(e.key, keyVal));
      return found ? found.val : makeNone();
    }
  }

  // Cooperative `super().method(...)` call!
  const superMatch = s.match(/^super\(\)\.([a-zA-Z_]\w*)\((.*)\)$/);
  if (superMatch) {
    const methodName = superMatch[1];
    const argsInner = superMatch[2].trim();
    const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalOOPExpr(a, ctx)) : [];
    const selfVal = ctx.env['self'];
    if (selfVal && selfVal.type === 'Instance') {
      const inst = selfVal.val as InstanceRuntime;
      const startAfter = ctx.currentDefiningClass || inst.className;
      const targetMethod = findMethodInMRO(
        inst.className,
        methodName,
        ctx.classes,
        startAfter
      );
      if (targetMethod) {
        ctx.detectedVisualType = 'super_mro_visual';
        ctx.detectedConcept = `Cooperative super().${methodName}() via MRO (${startAfter} ➔ ${targetMethod.definingClass})`;
        ctx.lookupPath = `super().${methodName}() in ${startAfter} ➔ Resolved to ${targetMethod.definingClass}.${methodName} via MRO [${
          ctx.classes[inst.className]?.mro.join(' ➔ ') || ''
        }]`;
        return executeMethodOrFunc(targetMethod, [selfVal, ...argVals], ctx, inst.instanceId);
      }
    }
    return makeNone();
  }

  // Dot access or Method call: `obj.attr` or `obj.method(...)`
  const dotIdx = findTopLevelDot(s);
  if (dotIdx !== -1) {
    const objExpr = s.slice(0, dotIdx).trim();
    const rightPart = s.slice(dotIdx + 1).trim();

    // Special case: `type(x).__name__`
    const typeMatch = objExpr.match(/^type\((.+)\)$/);
    if (typeMatch && rightPart === '__name__') {
      const innerVal = evalOOPExpr(typeMatch[1], ctx);
      if (innerVal.type === 'Instance') {
        const inst = innerVal.val as InstanceRuntime;
        ctx.activeObject = inst.instanceId;
        ctx.activeClass = inst.className;
        return makeStr(inst.className);
      }
      if (innerVal.type === 'Class') {
        return makeStr('type');
      }
      return makeStr(innerVal.type);
    }

    const objVal = evalOOPExpr(objExpr, ctx);
    const mMatch = rightPart.match(/^([a-zA-Z_]\w*)\((.*)\)$/);

    if (mMatch) {
      const methodName = mMatch[1];
      const argsInner = mMatch[2].trim();

      if (objVal.type === 'String' && methodName === 'join') {
        const sep = String(objVal.val);
        const items = evalIterableItems(argsInner, ctx);
        return makeStr(items.map((it) => formatPrintVal(it, ctx)).join(sep));
      }

      const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalOOPExpr(a, ctx)) : [];

      if (objVal.type === 'String') {
        const str = String(objVal.val);
        if (methodName === 'split') {
          if (argVals.length === 0) {
            const t = str.trim();
            return makeList((t ? t.split(/\s+/) : []).map(makeStr));
          }
          return makeList(str.split(String(argVals[0].val)).map(makeStr));
        }
      }

      if (objVal.type === 'List') {
        const arr = objVal.val as RuntimeVal[];
        if (methodName === 'append') {
          arr.push(cloneRuntimeVal(argVals[0]));
          return makeNone();
        }
        if (methodName === 'remove') {
          const idx = arr.findIndex((it) => valEquals(it, argVals[0]));
          if (idx !== -1) arr.splice(idx, 1);
          return makeNone();
        }
      }

      if (objVal.type === 'Dict') {
        const entries = objVal.val as DictEntryRuntime[];
        if (methodName === 'get') {
          const found = entries.find((e) => valEquals(e.key, argVals[0]));
          return found ? cloneRuntimeVal(found.val) : cloneRuntimeVal(argVals[1] ?? makeNone());
        }
        if (methodName === 'items') {
          return makeList(
            entries.map((e) => makeTuple([cloneRuntimeVal(e.key), cloneRuntimeVal(e.val)]))
          );
        }
      }

      if (objVal.type === 'Class') {
        const cls = objVal.val as ClassRuntime;
        ctx.activeClass = cls.name;
        if (methodName === 'mro') {
          ctx.detectedVisualType = 'super_mro_visual';
          ctx.detectedConcept = `C3 Method Resolution Order (${cls.name}.mro())`;
          ctx.lookupPath = `${cls.name}.mro() ➔ [${cls.mro.join(' ➔ ')}]`;
          return makeList(
            cls.mro.map((cName) =>
              ctx.classes[cName]
                ? makeClassVal(ctx.classes[cName])
                : makeClassVal({
                    name: cName,
                    bases: [],
                    mro: [cName],
                    inheritsABC: false,
                    abstractMethods: new Set(),
                    classAttrs: {},
                    methods: {},
                    properties: {},
                    lineNum: 0,
                  })
            )
          );
        }
        const mDef = findMethodInMRO(cls.name, methodName, ctx.classes);
        if (mDef) {
          if (mDef.kind === 'classmethod') {
            ctx.detectedVisualType = 'method_call_visual';
            ctx.detectedConcept = `@classmethod Call (${cls.name}.${methodName}(cls=${cls.name}))`;
            ctx.lookupPath = `${cls.name}.${methodName}() ➔ @classmethod ${mDef.definingClass}.${methodName}`;
            return executeMethodOrFunc(mDef, [objVal, ...argVals], ctx);
          }
          if (mDef.kind === 'staticmethod') {
            ctx.detectedVisualType = 'method_call_visual';
            ctx.detectedConcept = `@staticmethod Call (${cls.name}.${methodName}())`;
            ctx.lookupPath = `${cls.name}.${methodName}() ➔ @staticmethod ${mDef.definingClass}.${methodName}`;
            return executeMethodOrFunc(mDef, argVals, ctx);
          }
        }
      }

      if (objVal.type === 'Instance') {
        const inst = objVal.val as InstanceRuntime;
        ctx.activeObject = inst.instanceId;
        ctx.activeClass = inst.className;
        const mDef = findMethodInMRO(inst.className, methodName, ctx.classes);
        if (mDef) {
          const cls = ctx.classes[inst.className];
          const isOverridden =
            mDef.definingClass === inst.className &&
            cls?.mro
              .slice(1)
              .some((parentName) => Boolean(ctx.classes[parentName]?.methods[methodName]));

          if (isOverridden) {
            ctx.detectedVisualType = 'method_overriding_visual';
            ctx.detectedConcept = `Method Overriding (${inst.className}.${methodName} overrides Parent)`;
            ctx.lookupPath = `${inst.instanceId}.${methodName}() ➔ Selected overridden ${inst.className}.${methodName}`;
          } else if (mDef.definingClass !== inst.className) {
            ctx.detectedVisualType = 'inheritance_tree_visual';
            ctx.detectedConcept = `Inherited Method Lookup (${inst.className} ➔ ${mDef.definingClass}.${methodName})`;
            ctx.lookupPath = `${inst.instanceId}.${methodName}() ➔ Inherited from ${mDef.definingClass}.${methodName}`;
          } else {
            ctx.detectedVisualType = 'method_call_visual';
            ctx.detectedConcept = `Instance Method Call (${inst.instanceId}.${methodName}())`;
            ctx.lookupPath = `${inst.instanceId}.${methodName}() ➔ ${mDef.definingClass}.${methodName}(self=${inst.instanceId})`;
          }

          if (mDef.kind === 'classmethod') {
            const clsVal = makeClassVal(ctx.classes[inst.className]);
            return executeMethodOrFunc(mDef, [clsVal, ...argVals], ctx);
          }
          if (mDef.kind === 'staticmethod') {
            return executeMethodOrFunc(mDef, argVals, ctx);
          }
          return executeMethodOrFunc(mDef, [objVal, ...argVals], ctx, inst.instanceId);
        }
      }
    } else {
      // Attribute access: `obj.attr`
      return getObjectAttribute(objVal, rightPart, ctx);
    }
  }

  // Function Calls or Class Instantiation: `Name(...)`
  const fnMatch = s.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
  if (fnMatch) {
    const fn = fnMatch[1];
    const inner = fnMatch[2].trim();

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

    if ((fn === 'max' || fn === 'min') && inner.includes('key=')) {
      const topArgs = splitTopLevel(inner);
      const seqItems = evalIterableItems(topArgs[0], ctx);
      const keyArg = topArgs.find((a) => a.startsWith('key='));
      const keyFnStr = keyArg ? keyArg.slice(4).trim() : '';
      if (seqItems.length === 0) return makeNone();

      const evalKeyFor = (item: RuntimeVal): RuntimeVal => {
        if (keyFnStr.endsWith('.get')) {
          const dictName = keyFnStr.slice(0, -4).trim();
          const dObj = evalOOPExpr(dictName, ctx);
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

    const argVals = inner ? splitTopLevel(inner).map((a) => evalOOPExpr(a, ctx)) : [];

    // Check if `fn` is a Class or Variable bound to a Class (e.g. `cls(name, int(age))`)
    if (fn in ctx.classes) {
      return instantiateClass(ctx.classes[fn], argVals, ctx);
    }
    const envTarget = ctx.env[fn] ?? ctx.globalEnv[fn];
    if (envTarget?.type === 'Class') {
      return instantiateClass(envTarget.val as ClassRuntime, argVals, ctx);
    }

    // Check user-defined standalone function (`greet_proc`, `make_sound`, `test_quack`, `process`)
    if (fn in ctx.functions) {
      return executeMethodOrFunc(ctx.functions[fn], argVals, ctx);
    }

    if (fn === 'isinstance') {
      const obj = argVals[0];
      const clsArg = argVals[1];
      if (obj?.type === 'Instance' && clsArg?.type === 'Class') {
        const inst = obj.val as InstanceRuntime;
        const targetCls = clsArg.val as ClassRuntime;
        const instCls = ctx.classes[inst.className];
        const res = Boolean(instCls?.mro.includes(targetCls.name));
        ctx.detectedVisualType = 'inheritance_tree_visual';
        ctx.detectedConcept = `isinstance(${inst.instanceId}, ${targetCls.name}) ➔ ${res}`;
        ctx.lookupPath = `${inst.className}.mro() = [${instCls?.mro.join(' ➔ ')}] contains ${targetCls.name}: ${res}`;
        return makeBool(res);
      }
      return makeBool(false);
    }

    if (fn === 'issubclass') {
      const subArg = argVals[0];
      const parentArg = argVals[1];
      if (subArg?.type === 'Class' && parentArg?.type === 'Class') {
        const subCls = subArg.val as ClassRuntime;
        const parentCls = parentArg.val as ClassRuntime;
        const res = subCls.mro.includes(parentCls.name);
        ctx.detectedVisualType = 'inheritance_tree_visual';
        ctx.detectedConcept = `issubclass(${subCls.name}, ${parentCls.name}) ➔ ${res}`;
        ctx.lookupPath = `${subCls.name}.mro() = [${subCls.mro.join(' ➔ ')}] contains ${parentCls.name}: ${res}`;
        return makeBool(res);
      }
      return makeBool(false);
    }

    if (fn === 'int') return makeInt(Math.trunc(Number(argVals[0]?.val ?? 0)));
    if (fn === 'float') return makeFloat(Number(argVals[0]?.val ?? 0));
    if (fn === 'str') return makeStr(formatPrintVal(argVals[0], ctx));
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
  }

  if (s in ctx.env) return ctx.env[s];
  if (s in ctx.globalEnv) return ctx.globalEnv[s];
  if (s in ctx.classes) return makeClassVal(ctx.classes[s]);

  return makeNone();
}

export interface SourceStmtLine {
  lineNum: number;
  raw: string;
  indent: number;
  trimmed: string;
  decorator?: string;
}

export type BlockNode =
  | { kind: 'simple'; line: SourceStmtLine }
  | {
      kind: 'class_def';
      headerLine: SourceStmtLine;
      name: string;
      bases: string[];
      body: BlockNode[];
    }
  | {
      kind: 'func_def';
      headerLine: SourceStmtLine;
      name: string;
      params: MethodParam[];
      decorator?: string;
      body: BlockNode[];
    }
  | {
      kind: 'try_except';
      headerLine: SourceStmtLine;
      tryBody: BlockNode[];
      exceptType: string;
      exceptBody: BlockNode[];
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
    };

function splitTopLevelSemicolons(line: string): string[] {
  return splitTopLevel(line, ';');
}

function buildLogicalStmtLines(code: string): SourceStmtLine[] {
  const rawLines = code.split('\n');
  const stmtLines: SourceStmtLine[] = [];
  let pendingDecorator: string | undefined;

  for (let i = 0; i < rawLines.length; i++) {
    const raw = rawLines[i];
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const indent = raw.match(/^\s*/)?.[0].length ?? 0;

    if (trimmed.startsWith('@')) {
      pendingDecorator = trimmed.slice(1).trim();
      continue;
    }

    // Check for single-line block headers like `class A: pass`, `def area(self): return ...`, `if amt > 0: ...`, `for s in [...]: ...`
    const singleLineBlockMatch = trimmed.match(
      /^(class\s+.+?:|def\s+.+?:|if\s+.+?:|elif\s+.+?:|else:|for\s+.+?:)\s+(.+)$/
    );
    if (singleLineBlockMatch) {
      const hdrPart = singleLineBlockMatch[1].trim();
      const bodyPart = singleLineBlockMatch[2].trim();
      stmtLines.push({
        lineNum: i + 1,
        raw: ' '.repeat(indent) + hdrPart,
        indent,
        trimmed: hdrPart,
        decorator: pendingDecorator,
      });
      pendingDecorator = undefined;
      for (const sub of splitTopLevelSemicolons(bodyPart)) {
        stmtLines.push({
          lineNum: i + 1,
          raw: ' '.repeat(indent + 4) + sub,
          indent: indent + 4,
          trimmed: sub,
        });
      }
      continue;
    }

    // Split top-level semicolons (`b1 = Book(); b1.title, b1.author = ...`)
    const semiParts = splitTopLevelSemicolons(trimmed);
    for (const part of semiParts) {
      stmtLines.push({
        lineNum: i + 1,
        raw: ' '.repeat(indent) + part,
        indent,
        trimmed: part,
        decorator: pendingDecorator,
      });
      pendingDecorator = undefined;
    }
  }

  return stmtLines;
}

function parseMethodParams(paramStr: string): MethodParam[] {
  if (!paramStr.trim()) return [];
  return splitTopLevel(paramStr, ',').map((p) => {
    const eqIdx = p.indexOf('=');
    if (eqIdx !== -1) {
      return {
        name: p.slice(0, eqIdx).trim(),
        defaultExpr: p.slice(eqIdx + 1).trim(),
      };
    }
    return { name: p.trim() };
  });
}

function parseBlocks(
  lines: SourceStmtLine[],
  startIdx: number,
  expectedIndent: number
): { nodes: BlockNode[]; nextIdx: number } {
  const nodes: BlockNode[] = [];
  let i = startIdx;

  while (i < lines.length) {
    const line = lines[i];
    if (line.indent < expectedIndent) break;

    const t = line.trimmed;

    const clsMatch = t.match(/^class\s+([a-zA-Z_]\w*)(?:\((.*)\))?:$/);
    if (clsMatch) {
      const name = clsMatch[1];
      const bases = clsMatch[2]
        ? splitTopLevel(clsMatch[2], ',').map((b) => b.trim())
        : [];
      const bodyIndent =
        i + 1 < lines.length && lines[i + 1].indent > line.indent
          ? lines[i + 1].indent
          : line.indent + 4;
      const sub = parseBlocks(lines, i + 1, bodyIndent);
      nodes.push({
        kind: 'class_def',
        headerLine: line,
        name,
        bases,
        body: sub.nodes,
      });
      i = sub.nextIdx;
      continue;
    }

    const defMatch = t.match(/^def\s+([a-zA-Z_]\w*)\((.*)\):$/);
    if (defMatch) {
      const name = defMatch[1];
      const params = parseMethodParams(defMatch[2]);
      const bodyIndent =
        i + 1 < lines.length && lines[i + 1].indent > line.indent
          ? lines[i + 1].indent
          : line.indent + 4;
      const sub = parseBlocks(lines, i + 1, bodyIndent);
      nodes.push({
        kind: 'func_def',
        headerLine: line,
        name,
        params,
        decorator: line.decorator,
        body: sub.nodes,
      });
      i = sub.nextIdx;
      continue;
    }

    if (t === 'try:') {
      const tryHeader = line;
      const bodyIndent =
        i + 1 < lines.length && lines[i + 1].indent > line.indent
          ? lines[i + 1].indent
          : line.indent + 4;
      const trySub = parseBlocks(lines, i + 1, bodyIndent);
      i = trySub.nextIdx;
      let exceptType = 'Exception';
      let exceptBody: BlockNode[] = [];
      if (i < lines.length && lines[i].indent === line.indent && lines[i].trimmed.startsWith('except')) {
        const exMatch = lines[i].trimmed.match(/^except(?:\s+([a-zA-Z_]\w*))?:$/);
        if (exMatch && exMatch[1]) exceptType = exMatch[1];
        const exIndent =
          i + 1 < lines.length && lines[i + 1].indent > lines[i].indent
            ? lines[i + 1].indent
            : lines[i].indent + 4;
        const exSub = parseBlocks(lines, i + 1, exIndent);
        exceptBody = exSub.nodes;
        i = exSub.nextIdx;
      }
      nodes.push({
        kind: 'try_except',
        headerLine: tryHeader,
        tryBody: trySub.nodes,
        exceptType,
        exceptBody,
      });
      continue;
    }

    if (t.startsWith('if ') && t.endsWith(':')) {
      const branches: {
        headerLine: SourceStmtLine;
        branchType: 'if' | 'elif' | 'else';
        condExpr?: string;
        body: BlockNode[];
      }[] = [];

      const condExpr = t.slice(3, -1).trim();
      const bodyIndent =
        i + 1 < lines.length && lines[i + 1].indent > line.indent
          ? lines[i + 1].indent
          : line.indent + 4;
      const sub = parseBlocks(lines, i + 1, bodyIndent);
      branches.push({ headerLine: line, branchType: 'if', condExpr, body: sub.nodes });
      i = sub.nextIdx;

      while (i < lines.length && lines[i].indent === line.indent) {
        const nt = lines[i].trimmed;
        if (nt.startsWith('elif ') && nt.endsWith(':')) {
          const eLine = lines[i];
          const eCond = nt.slice(5, -1).trim();
          const eIndent =
            i + 1 < lines.length && lines[i + 1].indent > eLine.indent
              ? lines[i + 1].indent
              : eLine.indent + 4;
          const eSub = parseBlocks(lines, i + 1, eIndent);
          branches.push({ headerLine: eLine, branchType: 'elif', condExpr: eCond, body: eSub.nodes });
          i = eSub.nextIdx;
        } else if (nt === 'else:') {
          const elseLine = lines[i];
          const elseIndent =
            i + 1 < lines.length && lines[i + 1].indent > elseLine.indent
              ? lines[i + 1].indent
              : elseLine.indent + 4;
          const elseSub = parseBlocks(lines, i + 1, elseIndent);
          branches.push({ headerLine: elseLine, branchType: 'else', body: elseSub.nodes });
          i = elseSub.nextIdx;
          break;
        } else {
          break;
        }
      }
      nodes.push({ kind: 'if_chain', branches });
      continue;
    }

    const forMatch = t.match(/^for\s+(.+?)\s+in\s+(.+):$/);
    if (forMatch) {
      const bodyIndent =
        i + 1 < lines.length && lines[i + 1].indent > line.indent
          ? lines[i + 1].indent
          : line.indent + 4;
      const sub = parseBlocks(lines, i + 1, bodyIndent);
      nodes.push({
        kind: 'for_loop',
        headerLine: line,
        targetStr: forMatch[1].trim(),
        iterExpr: forMatch[2].trim(),
        body: sub.nodes,
      });
      i = sub.nextIdx;
      continue;
    }

    nodes.push({ kind: 'simple', line });
    i++;
  }

  return { nodes, nextIdx: i };
}

function buildOOPSnapshot(
  ctx: OOPEvalContext,
  conceptCategory: string,
  oopRuleNote: string
): OperatorVisualDetails['oopInfo'] {
  const classesSnapshot = Object.values(ctx.classes).map((c) => {
    const methodList = Object.values(c.methods).map((m) => ({
      name: m.name,
      kind: m.kind,
    }));
    for (const [pName, prop] of Object.entries(c.properties)) {
      if (prop.getter) methodList.push({ name: `@property ${pName}`, kind: 'property' });
      if (prop.setter) methodList.push({ name: `@${pName}.setter`, kind: 'setter' });
    }
    return {
      className: c.name,
      bases: c.bases,
      mro: c.mro,
      classAttributes: Object.entries(c.classAttrs).map(([k, v]) => ({
        name: k,
        value: formatVal(v, ctx),
      })),
      methods: methodList,
      isAbstract: c.inheritsABC && c.abstractMethods.size > 0,
    };
  });

  const inheritanceEdges = Object.values(ctx.classes)
    .filter((c) => c.bases.length > 0)
    .map((c) => ({ child: c.name, parents: c.bases }));

  const instancesSnapshot = ctx.instances.map((inst) => {
    const boundVars = Object.entries(ctx.globalEnv)
      .filter(
        ([, v]) =>
          v.type === 'Instance' && (v.val as InstanceRuntime).objNumericId === inst.objNumericId
      )
      .map(([k]) => k);
    return {
      instanceId: inst.instanceId,
      className: inst.className,
      boundVariables: boundVars,
      attributes: Object.entries(inst.attrs).map(([k, entry]) => ({
        name: k,
        value: formatVal(entry.val, ctx),
        prevValue: entry.prevVal,
        mangledFrom: entry.mangledFrom,
      })),
    };
  });

  const activeClsObj = ctx.activeClass ? ctx.classes[ctx.activeClass] : undefined;

  return {
    conceptCategory,
    activeClass: ctx.activeClass,
    activeObject: ctx.activeObject,
    currentMethod: ctx.currentMethod,
    selfBinding: ctx.selfBinding,
    mroChain: activeClsObj?.mro,
    inheritanceEdges: inheritanceEdges.length > 0 ? inheritanceEdges : undefined,
    classesSnapshot: classesSnapshot.length > 0 ? classesSnapshot : undefined,
    instancesSnapshot: instancesSnapshot.length > 0 ? instancesSnapshot : undefined,
    callStack: ctx.callStack.length > 0 ? [...ctx.callStack].slice(-6) : undefined,
    lookupPath: ctx.lookupPath,
    returnValue: ctx.returnValue,
    oopRuleNote,
  };
}

function takeVariableSnapshots(ctx: OOPEvalContext): VariableSnapshot[] {
  return Object.entries(ctx.globalEnv)
    .filter(([k]) => k !== '_')
    .map(([k, v]) => ({
      name: k,
      value: formatVal(v, ctx),
      dataType: v.type === 'Instance' ? `${(v.val as InstanceRuntime).className} Object` : v.type,
    }));
}

export function generateOOPTeachingSteps(question: TopicQuestion): TeachingStep[] {
  const stmtLines = buildLogicalStmtLines(question.referenceCode);
  const ast = parseBlocks(stmtLines, 0, 0).nodes;

  const globalEnv: Record<string, RuntimeVal> = {};
  const classes: Record<string, ClassRuntime> = {};
  const functions: Record<string, MethodRuntime> = {};
  const instances: InstanceRuntime[] = [];
  const classInstanceCounters: Record<string, number> = {};
  const nextObjNumericId = { current: 1 };
  const inputs = question.sampleInput ? question.sampleInput.split('\n') : [];
  const stdoutLines: string[] = [];
  const drafts: Omit<TeachingStep, 'step' | 'totalSteps'>[] = [];

  function makeStepCtx(): OOPEvalContext {
    return {
      env: globalEnv,
      globalEnv,
      classes,
      functions,
      instances,
      classInstanceCounters,
      nextObjNumericId,
      inputs,
      inputCursor: 0,
      stdoutLines,
      callStack: [],
    };
  }

  function executeTopNodes(nodes: BlockNode[]) {
    for (const node of nodes) {
      const ctx = makeStepCtx();

      if (node.kind === 'class_def') {
        const hdr = node.headerLine;
        const inheritsABC =
          node.bases.includes('ABC') ||
          node.bases.some((b) => classes[b]?.inheritsABC);

        const mro = computeC3MRO(node.name, node.bases, classes);
        const abstractMethods = new Set<string>();
        for (const b of node.bases) {
          if (classes[b]) {
            for (const am of classes[b].abstractMethods) {
              abstractMethods.add(am);
            }
          }
        }

        const classAttrs: Record<string, RuntimeVal> = {};
        const methods: Record<string, MethodRuntime> = {};
        const properties: Record<string, { getter?: MethodRuntime; setter?: MethodRuntime }> = {};

        for (const sub of node.body) {
          if (sub.kind === 'simple') {
            const st = sub.line.trimmed;
            if (st === 'pass') continue;
            const eq = findTopLevelBinarySymbol(st, ['='], true);
            if (eq) {
              const attrName = st.slice(0, eq.idx).trim();
              const attrVal = evalOOPExpr(st.slice(eq.idx + 1).trim(), ctx);
              classAttrs[attrName] = attrVal;
            }
          } else if (sub.kind === 'func_def') {
            let kind: MethodKind = 'instance';
            if (sub.decorator === 'classmethod') kind = 'classmethod';
            else if (sub.decorator === 'staticmethod') kind = 'staticmethod';
            else if (sub.decorator === 'property') kind = 'property';
            else if (sub.decorator === 'abstractmethod') kind = 'abstractmethod';
            else if (sub.decorator?.endsWith('.setter')) kind = 'setter';
            else if (sub.name.startsWith('__') && sub.name.endsWith('__')) kind = 'magic';

            const mRuntime: MethodRuntime = {
              name: sub.name,
              definingClass: node.name,
              kind,
              params: sub.params,
              body: sub.body,
              lineNum: sub.headerLine.lineNum,
            };

            if (kind === 'property') {
              properties[sub.name] = { ...(properties[sub.name] || {}), getter: mRuntime };
            } else if (kind === 'setter' && sub.decorator) {
              const propName = sub.decorator.split('.')[0];
              properties[propName] = { ...(properties[propName] || {}), setter: mRuntime };
            } else {
              methods[sub.name] = mRuntime;
              if (kind === 'abstractmethod') {
                abstractMethods.add(sub.name);
              } else {
                abstractMethods.delete(sub.name);
              }
            }
          }
        }

        const clsRuntime: ClassRuntime = {
          name: node.name,
          bases: node.bases,
          mro,
          inheritsABC,
          abstractMethods,
          classAttrs,
          methods,
          properties,
          lineNum: hdr.lineNum,
        };
        classes[node.name] = clsRuntime;
        globalEnv[node.name] = makeClassVal(clsRuntime);
        ctx.activeClass = node.name;

        const hasBases = node.bases.filter((b) => b !== 'ABC').length > 0;
        const visualType: OperatorVisualType = inheritsABC
          ? 'abstraction_visual'
          : hasBases
          ? 'inheritance_tree_visual'
          : 'class_definition_visual';

        const methodNames = [
          ...Object.keys(methods),
          ...Object.keys(properties).map((p) => `@property ${p}`),
        ];
        const classAttrNames = Object.entries(classAttrs).map(
          ([k, v]) => `${k}=${formatVal(v, ctx)}`
        );

        drafts.push({
          title: `Define Class \`${node.name}\`${
            node.bases.length ? `(${node.bases.join(', ')})` : ''
          } (Line ${hdr.lineNum})`,
          conceptKey: visualType,
          speechHinglish: `Line ${hdr.lineNum} पर हम \`class ${node.name}\` Define करते हैं। Python एक Class Object Create करता है${
            hasBases
              ? ` जो \`${node.bases.join(', ')}\` से Inherit करता है (MRO: ${mro.join(' ➔ ')})`
              : ''
          }${
            methodNames.length > 0
              ? ` और इसके Namespace में Methods (${methodNames.join(', ')}) Register करता है`
              : ''
          }।`,
          speechEnglish: `Line ${hdr.lineNum} executes \`${hdr.trimmed}\`, creating Class Object \`${node.name}\` with MRO [${mro.join(
            ' -> '
          )}].`,
          cardExplanationHinglish: `Class Object Created: \`${node.name}\` | MRO: \`${mro.join(
            ' ➔ '
          )}\`${methodNames.length ? ` | Methods: \`${methodNames.join(', ')}\`` : ''}${
            classAttrNames.length ? ` | Class Attributes: \`${classAttrNames.join(', ')}\`` : ''
          }।`,
          cardExplanationEnglish: `Created Class \`${node.name}\` (MRO: ${mro.join(' -> ')}).`,
          visualTarget: hdr.trimmed,
          visualLabel: `class ${node.name}`,
          visualSublabel: `MRO: ${mro.join(' ➔ ')}`,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: node.name,
          conceptBoxes: [
            { label: `class ${node.name}`, sublabel: 'Class Object', isActive: true },
            {
              label: methodNames.length ? methodNames.join(', ') : 'Empty Namespace (pass)',
              sublabel: 'Class Namespace',
              isActive: true,
            },
            { label: mro.join(' ➔ '), sublabel: 'C3 MRO Lookup Order', isActive: false },
          ],
          operatorDetails: {
            visualType,
            technicalConcept: inheritsABC
              ? `Abstract Base Class & Interface (${node.name})`
              : hasBases
              ? `Class Inheritance & MRO (${node.name} ➔ ${node.bases.join(', ')})`
              : `Class Definition & Namespace (class ${node.name})`,
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            oopInfo: buildOOPSnapshot(
              ctx,
              inheritsABC
                ? 'Abstraction (ABC & @abstractmethod)'
                : hasBases
                ? 'Inheritance & Method Resolution Order (MRO)'
                : 'Class Definition & Namespace',
              'Executing a `class` statement creates a Class Object in memory and binds its attributes and methods inside the Class Namespace.'
            ),
            intermediateSteps: [
              {
                expr: hdr.trimmed,
                result: `<class '${node.name}'>`,
                rule: `MRO: ${mro.join(' ➔ ')}`,
              },
            ],
            variableSnapshots: takeVariableSnapshots(ctx),
          },
        });
        continue;
      }

      if (node.kind === 'func_def') {
        const hdr = node.headerLine;
        functions[node.name] = {
          name: node.name,
          definingClass: '',
          kind: 'instance',
          params: node.params,
          body: node.body,
          lineNum: hdr.lineNum,
        };
        drafts.push({
          title: `Define Function \`def ${node.name}(${node.params
            .map((p) => p.name)
            .join(', ')})\` (Line ${hdr.lineNum})`,
          conceptKey: 'method_call_visual',
          speechHinglish: `Line ${hdr.lineNum} पर हम Function \`${node.name}\` Define करते हैं जो किसी भी Object पर Polymorphic Operation या Helper Logic चला सकता है।`,
          speechEnglish: `Line ${hdr.lineNum} defines function \`${node.name}\`.`,
          cardExplanationHinglish: `Function Defined: \`${hdr.trimmed}\`।`,
          cardExplanationEnglish: `Defined function \`${node.name}\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: `def ${node.name}`,
          visualSublabel: 'Standalone Function',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: node.name,
          conceptBoxes: [
            { label: `def ${node.name}`, sublabel: 'Function', isActive: true },
            {
              label: `(${node.params.map((p) => p.name).join(', ')})`,
              sublabel: 'Parameters',
              isActive: true,
            },
            { label: 'Polymorphic / Procedural', sublabel: 'Callable', isActive: false },
          ],
          operatorDetails: {
            visualType: 'method_call_visual',
            technicalConcept: `Function Definition (${node.name})`,
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            oopInfo: buildOOPSnapshot(
              ctx,
              'Procedural / Polymorphic Helper Function',
              'Functions can accept any Object that supports the expected method interface (Duck Typing).'
            ),
            variableSnapshots: takeVariableSnapshots(ctx),
          },
        });
        continue;
      }

      if (node.kind === 'try_except') {
        const hdr = node.headerLine;
        let caughtMessage = '';
        try {
          executeTopNodes(node.tryBody);
        } catch (err: any) {
          if (err instanceof PythonRuntimeError) {
            caughtMessage = `${err.excType}: ${err.message}`;
            executeTopNodes(node.exceptBody);
          } else {
            throw err;
          }
        }
        if (caughtMessage) {
          drafts.push({
            title: `Prevent Incomplete Abstract Instantiation (\`except ${node.exceptType}:\`)`,
            conceptKey: 'abstraction_visual',
            speechHinglish: `जब हम बिना सभी \`@abstractmethod\` Implement किए किसी Abstract Class का Object बनाने की कोशिश करते हैं, तब Python \`${caughtMessage}\` Raise करता है और \`except TypeError:\` Block चलता है!`,
            speechEnglish: `Instantiating a class with unimplemented @abstractmethods raises \`${caughtMessage}\`, which is caught by \`except ${node.exceptType}:\`.`,
            cardExplanationHinglish: `Abstraction Safeguard: \`${caughtMessage}\` पकड़ा गया और Console पर \`${stdoutLines[stdoutLines.length - 1] || ''}\` Print हुआ।`,
            cardExplanationEnglish: `Caught \`${caughtMessage}\` in \`except ${node.exceptType}:\`.`,
            visualTarget: hdr.trimmed,
            visualLabel: `Caught ${node.exceptType}`,
            visualSublabel: caughtMessage,
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: hdr.lineNum,
            highlightToken: 'try',
            conceptBoxes: [
              { label: 'Incomplete()', sublabel: 'Missing @abstractmethod', isActive: true },
              { label: 'Raises TypeError', sublabel: 'ABC Safeguard', isActive: true },
              {
                label: stdoutLines[stdoutLines.length - 1] || 'Handled',
                sublabel: 'Console Output',
                isActive: true,
              },
            ],
            operatorDetails: {
              visualType: 'abstraction_visual',
              technicalConcept: 'Abstract Class Instantiation Safeguard (TypeError)',
              activeSourceRange: {
                line: hdr.lineNum,
                startCol: hdr.indent + 1,
                endCol: hdr.raw.length,
                codeText: hdr.trimmed,
              },
              oopInfo: buildOOPSnapshot(
                ctx,
                'Abstraction Safeguard (ABC & @abstractmethod)',
                caughtMessage
              ),
              variableSnapshots: takeVariableSnapshots(ctx),
            },
          });
        }
        continue;
      }

      if (node.kind === 'for_loop') {
        const hdr = node.headerLine;
        const items = evalIterableItems(node.iterExpr, ctx);
        let ran = 0;
        for (const itemVal of items) {
          ran++;
          assignLoopTarget(node.targetStr, itemVal, globalEnv, ctx);
          executeTopNodes(node.body);
        }
        drafts.push({
          title: `Iterate Over Objects (\`${hdr.trimmed}\` — ${ran} Objects)`,
          conceptKey: 'polymorphism_visual',
          speechHinglish: `Line ${hdr.lineNum} पर \`${hdr.trimmed}\` Loop सभी ${ran} Objects पर एक-एक करके चलता है और उनके संबंधित Methods/Attributes को Dynamically Dispatch करता है!`,
          speechEnglish: `Line ${hdr.lineNum} iterates across ${ran} objects in \`${hdr.trimmed}\`.`,
          cardExplanationHinglish: `Object Iteration: \`${hdr.trimmed}\` ने ${ran} Objects को Process किया।`,
          cardExplanationEnglish: `Iterated over ${ran} objects.`,
          visualTarget: hdr.trimmed,
          visualLabel: `${hdr.trimmed} (${ran} items)`,
          visualSublabel: 'Polymorphic Object Iteration',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'for',
          conceptBoxes: [
            { label: `for ${node.targetStr}`, sublabel: 'Object Reference', isActive: true },
            { label: `${ran} Iterations`, sublabel: 'Dynamic Dispatch', isActive: true },
            {
              label: stdoutLines.length > 0 ? stdoutLines[stdoutLines.length - 1] : 'Updated State',
              sublabel: 'Result',
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: 'polymorphism_visual',
            technicalConcept: 'Polymorphic Object Iteration & Dynamic Dispatch',
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            oopInfo: buildOOPSnapshot(
              ctx,
              'Polymorphism & Object Collection Iteration',
              'Each Object in the collection responds according to its own runtime Class.'
            ),
            variableSnapshots: takeVariableSnapshots(ctx),
          },
        });
        continue;
      }

      if (node.kind === 'simple') {
        const line = node.line;
        const t = line.trimmed;

        if (t.startsWith('from abc import')) {
          drafts.push({
            title: `Import Abstract Base Class Tools (Line ${line.lineNum})`,
            conceptKey: 'abstraction_visual',
            speechHinglish: `Line ${line.lineNum} पर हम Python के \`abc\` Module से \`ABC\` और \`abstractmethod\` Import करते हैं ताकि हम Abstract Classes और Interfaces बना सकें।`,
            speechEnglish: `Line ${line.lineNum} imports \`ABC\` and \`abstractmethod\` from Python's \`abc\` module.`,
            cardExplanationHinglish: `Abstraction Module: \`from abc import ABC, abstractmethod\` Load हो गया।`,
            cardExplanationEnglish: `Imported \`ABC\` and \`abstractmethod\`.`,
            visualTarget: t,
            visualLabel: 'abc: ABC, @abstractmethod',
            visualSublabel: 'Abstraction Module',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: 'ABC',
            conceptBoxes: [
              { label: 'ABC', sublabel: 'Abstract Base Class', isActive: true },
              { label: '@abstractmethod', sublabel: 'Contract Decorator', isActive: true },
              { label: 'abc module', sublabel: 'Standard Library', isActive: false },
            ],
            operatorDetails: {
              visualType: 'abstraction_visual',
              technicalConcept: 'Abstract Base Classes (from abc import ABC, abstractmethod)',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              oopInfo: buildOOPSnapshot(
                ctx,
                'Abstraction (ABC & @abstractmethod)',
                '`ABC` and `@abstractmethod` enforce that concrete subclasses implement required methods before instantiation.'
              ),
              variableSnapshots: takeVariableSnapshots(ctx),
            },
          });
          continue;
        }

        // 1. print(...)
        const printMatch = t.match(/^print\((.*)\)$/);
        if (printMatch) {
          const inner = printMatch[1].trim();
          const argExprs = inner ? splitTopLevel(inner, ',') : [];
          const printedVals = argExprs.map((ae) => evalOOPExpr(ae, ctx));
          const printedLine = printedVals.map((v) => formatPrintVal(v, ctx)).join(' ');
          stdoutLines.push(printedLine);
          const cumConsole = stdoutLines.join('\n');

          const vType = ctx.detectedVisualType || 'console';
          drafts.push({
            title: `Evaluate & Print Output (Line ${line.lineNum}: \`${printedLine}\`)`,
            conceptKey: vType,
            speechHinglish: `Line ${line.lineNum} पर \`${t}\` Execute होता है${
              ctx.lookupPath ? ` (${ctx.lookupPath})` : ''
            } और Console पर \`${printedLine}\` Print करता है!`,
            speechEnglish: `Line ${line.lineNum} executes \`${t}\` and prints \`${printedLine}\` to the Console.`,
            cardExplanationHinglish: `Console Output (Line ${line.lineNum}): \`${printedLine}\`${
              ctx.lookupPath ? ` | Lookup: \`${ctx.lookupPath}\`` : ''
            }।`,
            cardExplanationEnglish: `Outputs \`${printedLine}\` to the Console.`,
            visualTarget: inner,
            visualLabel: `Output: ${printedLine}`,
            visualSublabel: ctx.detectedConcept || 'Verified Console Output',
            consoleOutput: cumConsole,
            isConsoleVisible: true,
            highlightLine: line.lineNum,
            highlightToken: 'print',
            conceptBoxes: [
              { label: inner, sublabel: 'Evaluated Expression', isActive: true },
              { label: printedLine, sublabel: 'Printed Output', isActive: true },
              {
                label: ctx.activeObject || ctx.activeClass || 'Console',
                sublabel: 'Active OOP Target',
                isActive: true,
              },
            ],
            operatorDetails: {
              visualType: vType,
              technicalConcept: ctx.detectedConcept || 'OOP Expression Evaluation & Console Output',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              oopInfo: buildOOPSnapshot(
                ctx,
                ctx.detectedConcept || 'Console Output Verification',
                ctx.lookupPath ||
                  'Python evaluates all method calls, attribute lookups, and special methods before printing to Console.'
              ),
              intermediateSteps: [{ expr: t, result: printedLine, rule: ctx.lookupPath || 'Prints to Console' }],
              intermediateResult: printedLine,
              variableSnapshots: takeVariableSnapshots(ctx),
            },
          });
          continue;
        }

        // 2. Augmented Assignment: `a.balance += 500`
        const augMatch = t.match(/^([a-zA-Z_][\w.]*(?:\[.+?\])?)\s*(\+=|-=|\*=|\/\/=)\s*(.+)$/);
        if (augMatch) {
          const lhs = augMatch[1].trim();
          const op = augMatch[2];
          const curVal = evalOOPExpr(lhs, ctx);
          const prevStr = formatVal(curVal, ctx);
          const rhsVal = evalOOPExpr(augMatch[3], ctx);
          const isF = curVal.type === 'Float' || rhsVal.type === 'Float';
          let num = Number(curVal.val ?? 0);
          if (op === '+=') num += Number(rhsVal.val);
          else if (op === '-=') num -= Number(rhsVal.val);
          else if (op === '*=') num *= Number(rhsVal.val);
          else if (op === '//=') num = Math.floor(num / Number(rhsVal.val));
          const nextVal = isF ? makeFloat(num) : makeInt(num);
          assignDotOrBracketTarget(lhs, nextVal, ctx);
          const nextStr = formatVal(nextVal, ctx);

          drafts.push({
            title: `Mutate Object Attribute (\`${t}\` ➔ ${nextStr})`,
            conceptKey: 'object_mutation_visual',
            speechHinglish: `Line ${line.lineNum} पर \`${t}\` Attribute \`${lhs}\` की Value को \`${prevStr}\` से Update करके \`${nextStr}\` कर देता है।`,
            speechEnglish: `Line ${line.lineNum} updates \`${lhs}\` from \`${prevStr}\` to \`${nextStr}\`.`,
            cardExplanationHinglish: `Attribute Mutation: \`${lhs}\` बदलकर \`${prevStr}\` ➔ \`${nextStr}\` हो गया।`,
            cardExplanationEnglish: `Mutated \`${lhs}\`: \`${prevStr}\` ➔ \`${nextStr}\`.`,
            visualTarget: t,
            visualLabel: `${lhs}: ${prevStr} ➔ ${nextStr}`,
            visualSublabel: 'In-Place Object State Mutation',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: lhs,
            conceptBoxes: [
              { label: `Before: ${prevStr}`, sublabel: 'Old Attribute Value', isActive: false },
              { label: `${op} ${formatVal(rhsVal, ctx)}`, sublabel: 'Mutation', isActive: true },
              { label: `After: ${nextStr}`, sublabel: 'New Attribute Value', isActive: true },
            ],
            operatorDetails: {
              visualType: 'object_mutation_visual',
              technicalConcept: `Object State Mutation (${lhs} ${op})`,
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              oopInfo: buildOOPSnapshot(
                ctx,
                'Object State Mutation',
                'Mutating an attribute updates the existing Object in-place without creating a new Instance.'
              ),
              intermediateSteps: [{ expr: t, result: nextStr, rule: `${prevStr} ${op[0]} ${formatVal(rhsVal, ctx)} = ${nextStr}` }],
              variableSnapshots: takeVariableSnapshots(ctx),
            },
          });
          continue;
        }

        // 3. Standard Assignment: `s = Student('Rahul')`, `p.name = 'Neha'`, `Student.school_name = ...`
        const eq = findTopLevelBinarySymbol(t, ['='], true);
        if (eq) {
          const lhs = t.slice(0, eq.idx).trim();
          const rhs = t.slice(eq.idx + 1).trim();
          const rhsVal = evalOOPExpr(rhs, ctx);
          assignLoopTarget(lhs, rhsVal, globalEnv, ctx);
          const valStr = formatVal(rhsVal, ctx);
          const vType = ctx.detectedVisualType || 'object_creation_visual';

          drafts.push({
            title: `Execute OOP Statement (Line ${line.lineNum}: \`${lhs} = ${valStr}\`)`,
            conceptKey: vType,
            speechHinglish:
              rhsVal.type === 'Instance'
                ? `Line ${line.lineNum} पर जब हम \`${rhs}\` Call करते हैं, तब \`${
                    (rhsVal.val as InstanceRuntime).className
                  }\` Class का नया Instance \`${
                    (rhsVal.val as InstanceRuntime).instanceId
                  }\` Create होता है${
                    ctx.selfBinding ? ` (जहाँ \`${ctx.selfBinding}\` के ज़रिए Attributes Initialize होते हैं)` : ''
                  } और उसका Reference Variable \`${lhs}\` में Store होता है।`
                : `Line ${line.lineNum} पर \`${t}\` Execute होकर \`${lhs}\` को \`${valStr}\` पर Set करता है।`,
            speechEnglish: `Line ${line.lineNum} evaluates \`${rhs}\` to \`${valStr}\` and binds it to \`${lhs}\`.`,
            cardExplanationHinglish: `Line ${line.lineNum}: \`${lhs}\` ➔ \`${valStr}\`${
              ctx.selfBinding ? ` | \`${ctx.selfBinding}\`` : ''
            }${ctx.lookupPath ? ` | \`${ctx.lookupPath}\`` : ''}।`,
            cardExplanationEnglish: `Bound \`${lhs}\` to \`${valStr}\`.`,
            visualTarget: t,
            visualLabel: `${lhs} = ${valStr}`,
            visualSublabel: ctx.detectedConcept || 'Object Reference & State Binding',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: lhs.split(',')[0].trim(),
            conceptBoxes: [
              { label: lhs, sublabel: 'Target Reference / Attribute', isActive: true },
              { label: rhs, sublabel: 'OOP Expression', isActive: true },
              { label: valStr, sublabel: 'Object State', isActive: true },
            ],
            operatorDetails: {
              visualType: vType,
              technicalConcept: ctx.detectedConcept || 'Object Creation & Attribute Binding',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: t,
              },
              oopInfo: buildOOPSnapshot(
                ctx,
                ctx.detectedConcept || 'Object Instantiation & Reference Binding',
                rhsVal.type === 'Instance'
                  ? '`__new__` allocates the Instance in memory, and `__init__(self, ...)` initializes its attributes via `self`.'
                  : 'Variables and attributes hold references to Objects in memory.'
              ),
              intermediateSteps: [{ expr: t, result: valStr, rule: ctx.lookupPath || `Binds ${lhs} ➔ ${valStr}` }],
              intermediateResult: valStr,
              variableSnapshots: takeVariableSnapshots(ctx),
            },
          });
          continue;
        }

        // 4. Standalone Method or Function Call: `g.say_hello()`, `acc.deposit(300)`, `Bank.set_rate(5.0)`
        const retVal = evalOOPExpr(t, ctx);
        const vType = ctx.detectedVisualType || 'method_call_visual';
        drafts.push({
          title: `Invoke Method / Operation (Line ${line.lineNum}: \`${t}\`)`,
          conceptKey: vType,
          speechHinglish: `Line ${line.lineNum} पर \`${t}\` Call होता है${
            ctx.selfBinding ? ` जहाँ \`${ctx.selfBinding}\` Current Object को Refer करता है` : ''
          }${
            ctx.lookupPath ? ` (${ctx.lookupPath})` : ''
          } और Object की State या Console Output को Update करता है।`,
          speechEnglish: `Line ${line.lineNum} invokes \`${t}\`${
            ctx.selfBinding ? ` with \`${ctx.selfBinding}\`` : ''
          }.`,
          cardExplanationHinglish: `Method Execution: \`${t}\`${
            ctx.selfBinding ? ` | \`${ctx.selfBinding}\`` : ''
          }${ctx.lookupPath ? ` | \`${ctx.lookupPath}\`` : ''}।`,
          cardExplanationEnglish: `Executed \`${t}\`.`,
          visualTarget: t,
          visualLabel: t,
          visualSublabel: ctx.detectedConcept || 'Method Call & Frame Execution',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: line.lineNum,
          highlightToken: t.split('(')[0],
          conceptBoxes: [
            { label: t, sublabel: 'Method Invocation', isActive: true },
            {
              label: ctx.selfBinding || ctx.activeClass || 'Execution Frame',
              sublabel: 'Active Binding',
              isActive: true,
            },
            {
              label:
                retVal.type !== 'NoneType'
                  ? `Return: ${formatVal(retVal, ctx)}`
                  : stdoutLines.length > 0
                  ? `Output: ${stdoutLines[stdoutLines.length - 1]}`
                  : 'State Mutated ✅',
              sublabel: 'Outcome',
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: vType,
            technicalConcept: ctx.detectedConcept || 'Method Call & Object State Update',
            activeSourceRange: {
              line: line.lineNum,
              startCol: line.indent + 1,
              endCol: line.raw.length,
              codeText: t,
            },
            oopInfo: buildOOPSnapshot(
              ctx,
              ctx.detectedConcept || 'Method Dispatch & Execution',
              '`self` is a conventional parameter name (not a keyword) that automatically receives the Instance on which the method was called.'
            ),
            intermediateSteps: [
              {
                expr: t,
                result:
                  retVal.type !== 'NoneType'
                    ? formatVal(retVal, ctx)
                    : stdoutLines[stdoutLines.length - 1] || 'Completed',
                rule: ctx.lookupPath || 'Method Call Frame',
              },
            ],
            variableSnapshots: takeVariableSnapshots(ctx),
          },
        });
      }
    }
  }

  executeTopNodes(ast);

  const totalSteps = drafts.length;
  return drafts.map((d, idx) => ({
    ...d,
    step: idx + 1,
    totalSteps,
  }));
}

export function runOOPPythonSandbox(
  code: string,
  sampleInput = ''
): { stdout: string; error: string | null } {
  try {
    const qDummy: TopicQuestion = {
      id: 'OOP-SANDBOX',
      number: 1,
      level: 'Learn',
      question: 'OOP Sandbox',
      hindiDescription: '',
      referenceCode: code,
      starterCode: '',
      sampleInput,
      sampleOutput: '',
      testCases: [],
    };
    const steps = generateOOPTeachingSteps(qDummy);
    const finalOut = steps.length > 0 ? steps[steps.length - 1].consoleOutput : '';
    return { stdout: finalOut, error: null };
  } catch (err: any) {
    return { stdout: '', error: err?.message || String(err) };
  }
}

export function generateOOPHints(question: TopicQuestion): ProgressiveHint[] {
  return [
    {
      level: 1,
      name: 'Level 1: OOP Concept & Class Structure Hint',
      badge: '🏛️ Class & Object Blueprint',
      hintHinglish: `इस सवाल में "${question.question}" के लिए सही Class, Attributes (\`self\`) और Methods Define करें। ${question.hindiDescription}`,
      hintEnglish: `Define the appropriate Class, attributes (\`self\`), and methods for "${question.question}".`,
    },
    {
      level: 2,
      name: 'Level 2: Method & Output Blueprint',
      badge: '📐 OOP Execution Flow',
      hintHinglish: `सुनिश्चित करें कि Object Create करने और Method Call करने के बाद Console Output बिल्कुल \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\` जैसा आए।`,
      hintEnglish: `Ensure your Object instantiation and method calls produce the exact output: \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\`.`,
    },
    {
      level: 3,
      name: 'Level 3: Verified Reference Solution',
      badge: '🎯 Complete OOP Solution',
      hintHinglish: `यहाँ पूरा Verified Python OOP Solution दिया गया है:\n\`\`\`python\n${question.referenceCode}\n\`\`\``,
      hintEnglish: `Here is the complete verified Python OOP solution:\n\`\`\`python\n${question.referenceCode}\n\`\`\``,
    },
  ];
}

export function buildOOPQuestionConfig(
  topicId: string,
  q: TopicQuestion
): QuestionV5Config {
  const teachingSteps = generateOOPTeachingSteps(q);
  const hints = generateOOPHints(q);
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
        return { passed: false, message: 'Please write your Python OOP code before running.' };
      }
      const actualOut = stdout.replace(/\r\n/g, '\n').trim();
      const expectedOut = q.sampleOutput.replace(/\r\n/g, '\n').trim();

      if (actualOut === expectedOut) {
        return {
          passed: true,
          message: '🎉 Excellent! Your Object-Oriented Python code and output match 100%!',
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
