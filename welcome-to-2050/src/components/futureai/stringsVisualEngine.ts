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
  OperatorVisualDetails,
  CharIndexCell,
} from './operatorsVisualEngine';

export function isStringsTopic(topicId: string): boolean {
  return (
    topicId.startsWith('py_05_strings') ||
    topicId === 'py_01_basics_14' ||
    topicId === 'py_01_basics_15'
  );
}

interface RuntimeVal {
  val: any;
  type: 'Integer' | 'Float' | 'Boolean' | 'String' | 'List' | 'Dict' | 'NoneType';
}

function formatVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'Boolean') return v.val ? 'True' : 'False';
  if (v.type === 'String') return `"${v.val}"`;
  if (v.type === 'List') {
    const items = (v.val as any[]).map((x) => (typeof x === 'string' ? `'${x}'` : String(x)));
    return `[${items.join(', ')}]`;
  }
  if (v.type === 'Dict') {
    const entries = Object.entries(v.val || {}).map(
      ([k, val]) => `'${k}': ${typeof val === 'string' ? `'${val}'` : String(val)}`
    );
    return `{${entries.join(', ')}}`;
  }
  if (v.type === 'Float') {
    const cleaned = Number(Number(v.val).toPrecision(12));
    const s = String(cleaned);
    return s.includes('.') ? s : `${s}.0`;
  }
  return String(v.val);
}

function formatPrintVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'String') return String(v.val);
  return formatVal(v);
}

function inferRuntimeVal(raw: any, forceFloat = false): RuntimeVal {
  if (raw === null || raw === undefined) return { val: null, type: 'NoneType' };
  if (typeof raw === 'boolean') return { val: raw, type: 'Boolean' };
  if (typeof raw === 'number') {
    const isF = forceFloat || !Number.isInteger(raw);
    return { val: raw, type: isF ? 'Float' : 'Integer' };
  }
  if (typeof raw === 'string') return { val: raw, type: 'String' };
  if (Array.isArray(raw)) return { val: raw, type: 'List' };
  if (typeof raw === 'object') return { val: raw, type: 'Dict' };
  return { val: String(raw), type: 'String' };
}

function isTruthy(v: RuntimeVal): boolean {
  if (v.type === 'NoneType') return false;
  if (v.type === 'Boolean') return Boolean(v.val);
  if (v.type === 'Integer' || v.type === 'Float') return Number(v.val) !== 0;
  if (v.type === 'String' || v.type === 'List') return v.val.length > 0;
  if (v.type === 'Dict') return Object.keys(v.val || {}).length > 0;
  return Boolean(v.val);
}

export function buildCharIndexMap(str: string, selectedIndices: Set<number> = new Set()): CharIndexCell[] {
  const chars = Array.from(str);
  const n = chars.length;
  // Cap visual cells at 18 so very long strings remain readable in the UI card
  const limit = Math.min(n, 18);
  const cells: CharIndexCell[] = [];
  for (let i = 0; i < limit; i++) {
    cells.push({
      char: chars[i] === ' ' ? '␣' : chars[i] === '\n' ? '\\n' : chars[i] === '\t' ? '\\t' : chars[i],
      posIdx: i,
      negIdx: i - n,
      isSelected: selectedIndices.has(i),
    });
  }
  return cells;
}

export function computePythonSlice(
  str: string,
  startVal: number | null,
  stopVal: number | null,
  stepVal: number | null
): { result: string; selectedIndices: Set<number>; normalizedStart: number; normalizedStop: number; step: number } {
  const n = str.length;
  const step = stepVal === null ? 1 : stepVal;
  const selectedIndices = new Set<number>();
  let result = '';

  if (step === 0) {
    return { result: '', selectedIndices, normalizedStart: 0, normalizedStop: 0, step: 1 };
  }

  let start: number;
  let stop: number;

  if (step > 0) {
    start = startVal === null ? 0 : startVal < 0 ? Math.max(0, n + startVal) : Math.min(n, startVal);
    stop = stopVal === null ? n : stopVal < 0 ? Math.max(0, n + stopVal) : Math.min(n, stopVal);
    for (let i = start; i < stop; i += step) {
      selectedIndices.add(i);
      result += str[i];
    }
  } else {
    start = startVal === null ? n - 1 : startVal < 0 ? Math.max(-1, n + startVal) : Math.min(n - 1, startVal);
    stop = stopVal === null ? -1 : stopVal < 0 ? Math.max(-1, n + stopVal) : Math.min(n - 1, stopVal);
    for (let i = start; i > stop; i += step) {
      if (i >= 0 && i < n) {
        selectedIndices.add(i);
        result += str[i];
      }
    }
  }

  return { result, selectedIndices, normalizedStart: start, normalizedStop: stop, step };
}

function unescapePythonString(rawInner: string, isRaw = false): string {
  if (isRaw) return rawInner;
  let out = '';
  for (let i = 0; i < rawInner.length; i++) {
    if (rawInner[i] === '\\' && i + 1 < rawInner.length) {
      const next = rawInner[i + 1];
      if (next === 'n') {
        out += '\n';
        i++;
      } else if (next === 't') {
        out += '\t';
        i++;
      } else if (next === 'r') {
        out += '\r';
        i++;
      } else if (next === 'b') {
        out += '\b';
        i++;
      } else if (next === '\\') {
        out += '\\';
        i++;
      } else if (next === '"') {
        out += '"';
        i++;
      } else if (next === "'") {
        out += "'";
        i++;
      } else {
        out += rawInner[i];
      }
    } else {
      out += rawInner[i];
    }
  }
  return out;
}

function toPythonTitleCase(s: string): string {
  return s.replace(/[a-zA-Z]+/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

function toPythonCapitalize(s: string): string {
  if (!s) return '';
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
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
  if (cur.trim().length > 0) parts.push(cur.trim());
  return parts;
}

function stripOuterParens(s: string): string {
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
      str = str.slice(1, -1).trim();
    } else {
      break;
    }
  }
  return str;
}

export interface StringEvalContext {
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

function findTopLevelBinarySymbol(s: string, ops: string[]): { idx: number; op: string } | null {
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
        if (op === '+' || op === '-') {
          const before = s.slice(0, i).trim();
          if (!before || /[+\-*/%(,<>=!:]$/.test(before)) continue;
        }
        best = { idx: i, op };
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
      // Do not treat decimal point in float like 49.5 as a method dot!
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
        if (i === 0) return null; // It's a list literal [...]
        return {
          base: s.slice(0, i).trim(),
          bracketContent: s.slice(i + 1, -1).trim(),
        };
      }
    }
  }
  return null;
}

function formatFStringSpec(val: RuntimeVal, spec: string): string {
  if (!spec) return formatPrintVal(val);
  // e.g. .2f, .1%, ,, <12, >6
  if (spec === ',') {
    return Number(val.val).toLocaleString('en-US');
  }
  const fMatch = spec.match(/^\.(\d+)f$/);
  if (fMatch) {
    return Number(val.val).toFixed(Number(fMatch[1]));
  }
  const pMatch = spec.match(/^\.(\d+)%$/);
  if (pMatch) {
    return `${(Number(val.val) * 100).toFixed(Number(pMatch[1]))}%`;
  }
  const leftAlign = spec.match(/^<(\d+)$/);
  if (leftAlign) {
    return formatPrintVal(val).padEnd(Number(leftAlign[1]), ' ');
  }
  const rightAlign = spec.match(/^>(\d+)$/);
  if (rightAlign) {
    return formatPrintVal(val).padStart(Number(rightAlign[1]), ' ');
  }
  return formatPrintVal(val);
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

export function evalStringExpr(rawInput: string, ctx: StringEvalContext): RuntimeVal {
  const s = stripOuterParens(rawInput);

  // 1. Triple-quoted string literal: """...""" or '''...'''
  if (
    (s.startsWith('"""') && s.endsWith('"""') && s.length >= 6) ||
    (s.startsWith("'''") && s.endsWith("'''") && s.length >= 6)
  ) {
    const inner = s.slice(3, -3);
    const val = unescapePythonString(inner, false);
    return inferRuntimeVal(val);
  }

  // 2. Raw string literal: r"..." or r'...'
  if ((s.startsWith('r"') || s.startsWith("r'")) && isSingleStringLiteral(s.slice(1))) {
    const inner = s.slice(2, -1);
    ctx.detectedVisualType = 'escape_sequence';
    ctx.detectedConcept = 'Raw String Literal (r"...")';
    ctx.stringTransformInfo = {
      original: s,
      operation: 'Raw String (Backslashes preserved literally)',
      result: `"${inner}"`,
    };
    ctx.intermediateSteps.push({
      expr: s,
      result: `"${inner}"`,
      rule: 'Raw String ignores escape sequences and keeps backslashes as literal characters',
    });
    return inferRuntimeVal(inner);
  }

  // 3. f-string literal: f"..." or f'...'
  if ((s.startsWith('f"') || s.startsWith("f'")) && isSingleStringLiteral(s.slice(1), true)) {
    const rawTemplate = s.slice(2, -1);
    const unescapedTemplate = unescapePythonString(rawTemplate, false);
    const LBRACE = '\uFFF0';
    const RBRACE = '\uFFF1';
    const safeTemplate = unescapedTemplate.replace(/\{\{/g, LBRACE).replace(/\}\}/g, RBRACE);

    const rendered = safeTemplate.replace(/\{([^}]+)\}/g, (_, innerBraces) => {
      // Split by top-level ':' for format specifiers (like {price:.2f} or {'Name':<12})
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
      const subVal = evalStringExpr(exprPart, ctx);
      const formatted = formatFStringSpec(subVal, specPart);
      ctx.intermediateSteps.push({
        expr: `{${innerBraces}}`,
        result: `"${formatted}"`,
        rule: specPart ? `f-string format specifier (:${specPart})` : 'f-string interpolation',
      });
      return formatted;
    });

    const finalStr = rendered.replace(new RegExp(LBRACE, 'g'), '{').replace(new RegExp(RBRACE, 'g'), '}');
    ctx.detectedVisualType = 'fstring_visual';
    ctx.detectedConcept = 'Formatted String Literal (f-string)';
    return inferRuntimeVal(finalStr);
  }

  // 4. Standard string literal: "..." or '...'
  if (isSingleStringLiteral(s)) {
    const inner = s.slice(1, -1);
    const hasEscape = /\\[ntrb\\"']/.test(inner);
    const unescaped = unescapePythonString(inner, false);
    if (hasEscape) {
      ctx.detectedVisualType = 'escape_sequence';
      ctx.detectedConcept = 'Escape Sequence in String';
      ctx.stringTransformInfo = {
        original: s,
        operation: 'Escape Sequence Interpretation',
        result: unescaped,
      };
      ctx.intermediateSteps.push({
        expr: `Source: ${s}`,
        result: `Actual String (${unescaped.length} chars)`,
        rule: 'Escape sequences (\\n, \\t, \\\\, \\", \\\') are interpreted by Python',
      });
    }
    return inferRuntimeVal(unescaped);
  }

  // 5. Special List Comprehension in STR-12-08:
  // [item.strip() for item in csv_line.split(",") if item.strip()]
  if (s.startsWith('[') && s.endsWith(']') && s.includes(' for ') && s.includes(' in ')) {
    const lcMatch = s.slice(1, -1).match(/^(.+?)\s+for\s+([a-zA-Z_]\w*)\s+in\s+(.+?)(?:\s+if\s+(.+))?$/);
    if (lcMatch) {
      const mapExpr = lcMatch[1].trim();
      const iterVar = lcMatch[2].trim();
      const iterSource = lcMatch[3].trim();
      const filterExpr = lcMatch[4]?.trim();
      const srcListVal = evalStringExpr(iterSource, ctx);
      const srcArr = Array.isArray(srcListVal.val) ? srcListVal.val : [];
      const resultArr: any[] = [];
      for (const item of srcArr) {
        const prev = ctx.env[iterVar];
        ctx.env[iterVar] = inferRuntimeVal(item);
        const keep = filterExpr ? isTruthy(evalStringExpr(filterExpr, ctx)) : true;
        if (keep) {
          resultArr.push(evalStringExpr(mapExpr, ctx).val);
        }
        if (prev !== undefined) ctx.env[iterVar] = prev;
        else delete ctx.env[iterVar];
      }
      const res = inferRuntimeVal(resultArr);
      ctx.detectedVisualType = 'string_split';
      ctx.detectedConcept = 'String Split & List Cleaning';
      ctx.intermediateSteps.push({
        expr: s,
        result: formatVal(res),
        rule: 'Splits CSV string by comma and strips whitespace from each item',
      });
      return res;
    }
  }

  // 6. Special Generator sum(...) in STR-13-09:
  // sum(1 for ch in s.lower() if ch in 'aeiou')
  if (s.startsWith('sum(') && s.includes(' for ') && s.endsWith(')')) {
    const inner = s.slice(4, -1).trim();
    const gMatch = inner.match(/^1\s+for\s+([a-zA-Z_]\w*)\s+in\s+(.+?)\s+if\s+(.+)$/);
    if (gMatch) {
      const iterVar = gMatch[1].trim();
      const iterSource = gMatch[2].trim();
      const condExpr = gMatch[3].trim();
      const srcStrVal = evalStringExpr(iterSource, ctx);
      const chars = Array.from(String(srcStrVal.val));
      let count = 0;
      for (const ch of chars) {
        const prev = ctx.env[iterVar];
        ctx.env[iterVar] = inferRuntimeVal(ch);
        if (isTruthy(evalStringExpr(condExpr, ctx))) {
          count++;
        }
        if (prev !== undefined) ctx.env[iterVar] = prev;
        else delete ctx.env[iterVar];
      }
      const res = inferRuntimeVal(count);
      ctx.detectedVisualType = 'string_iteration';
      ctx.detectedConcept = 'String Character Iteration & Vowel Count';
      ctx.intermediateSteps.push({
        expr: s,
        result: String(count),
        rule: `Iterates over "${srcStrVal.val}" and counts ${count} vowels`,
      });
      return res;
    }
  }

  // 7. Ternary Conditional Expression: body if cond else orelse
  const tern = findTopLevelTernary(s);
  if (tern) {
    const condVal = evalStringExpr(tern.cond, ctx);
    const chosen = isTruthy(condVal) ? evalStringExpr(tern.body, ctx) : evalStringExpr(tern.orelse, ctx);
    ctx.intermediateSteps.push({
      expr: `${tern.cond} ➔ ${isTruthy(condVal) ? 'True' : 'False'}`,
      result: formatVal(chosen),
      rule: 'Conditional Expression',
    });
    return chosen;
  }

  // 8. Logical OR / AND / NOT
  const orIdx = findTopLevelKeywordOp(s, 'or');
  if (orIdx !== -1) {
    const lv = evalStringExpr(s.slice(0, orIdx), ctx);
    if (isTruthy(lv)) return lv;
    return evalStringExpr(s.slice(orIdx + 2), ctx);
  }
  const andIdx = findTopLevelKeywordOp(s, 'and');
  if (andIdx !== -1) {
    const lv = evalStringExpr(s.slice(0, andIdx), ctx);
    if (!isTruthy(lv)) return lv;
    return evalStringExpr(s.slice(andIdx + 3), ctx);
  }
  if (/^not(?:\s+|\()/.test(s)) {
    const argVal = evalStringExpr(s.replace(/^not\s*/, ''), ctx);
    return inferRuntimeVal(!isTruthy(argVal));
  }

  // 9. Comparisons & Membership (`in`, `not in`, `is`, `==`, `!=`, `<`, `>`, `<=`, `>=`)
  const cmpSplit = splitTopLevelComparisons(s);
  if (cmpSplit) {
    const evaled: RuntimeVal[] = cmpSplit.operands.map((opnd) => evalStringExpr(opnd, ctx));
    let allOk = true;
    for (let i = 0; i < cmpSplit.ops.length; i++) {
      const op = cmpSplit.ops[i];
      const lv = evaled[i].val;
      const rv = evaled[i + 1].val;
      let ok = false;
      if (op === 'in') {
        ok = String(rv).includes(String(lv));
        ctx.detectedVisualType = 'string_search';
        ctx.detectedConcept = 'Substring Membership Operator (in)';
      } else if (op === 'not in') {
        ok = !String(rv).includes(String(lv));
        ctx.detectedVisualType = 'string_search';
        ctx.detectedConcept = 'Negative Membership Operator (not in)';
      } else if (op === 'is') {
        ok = lv === rv;
      } else if (op === '==') {
        ok = lv === rv;
      } else if (op === '!=') {
        ok = lv !== rv;
      } else if (op === '<') {
        ok = lv < rv;
        if (evaled[i].type === 'String' && evaled[i + 1].type === 'String') {
          ctx.detectedVisualType = 'unicode_visual';
          ctx.detectedConcept = 'Lexicographical Unicode Comparison (<)';
        }
      } else if (op === '>') {
        ok = lv > rv;
        if (evaled[i].type === 'String' && evaled[i + 1].type === 'String') {
          ctx.detectedVisualType = 'unicode_visual';
          ctx.detectedConcept = 'Lexicographical Unicode Comparison (>)';
        }
      } else if (op === '<=') {
        ok = lv <= rv;
      } else if (op === '>=') {
        ok = lv >= rv;
      }
      ctx.intermediateSteps.push({
        expr: `${formatVal(evaled[i])} ${op} ${formatVal(evaled[i + 1])}`,
        result: ok ? 'True' : 'False',
        rule:
          op === '<' && evaled[i].type === 'String'
            ? `Compares Unicode code points: '${String(lv)[0]}' (${String(lv).charCodeAt(0)}) vs '${String(rv)[0]}' (${String(rv).charCodeAt(0)})`
            : `Comparison (${op})`,
      });
      if (!ok) {
        allOk = false;
        break;
      }
    }
    return inferRuntimeVal(allOk);
  }

  // 10. Addition / Concatenation (+) and Subtraction (-)
  const addSub = findTopLevelBinarySymbol(s, ['+', '-']);
  if (addSub) {
    const lv = evalStringExpr(s.slice(0, addSub.idx), ctx);
    const rv = evalStringExpr(s.slice(addSub.idx + 1), ctx);
    if (addSub.op === '+' && (lv.type === 'String' || rv.type === 'String')) {
      const joined = String(lv.val) + String(rv.val);
      const res = inferRuntimeVal(joined);
      ctx.detectedVisualType = 'concatenation';
      ctx.detectedConcept = 'String Concatenation (+)';
      ctx.stringTransformInfo = {
        original: `${formatVal(lv)} + ${formatVal(rv)}`,
        operation: 'Concatenation (+)',
        result: formatVal(res),
      };
      ctx.intermediateSteps.push({
        expr: `${formatVal(lv)} + ${formatVal(rv)}`,
        result: formatVal(res),
        rule: 'Joins Left String and Right String end-to-end',
      });
      return res;
    }
    const isF = lv.type === 'Float' || rv.type === 'Float';
    const numRes =
      addSub.op === '+' ? Number(lv.val) + Number(rv.val) : Number(lv.val) - Number(rv.val);
    return inferRuntimeVal(numRes, isF);
  }

  // 11. Multiplication / String Repetition (*), Division (/), Floor Division (//), Modulo (%)
  const mulDiv = findTopLevelBinarySymbol(s, ['//', '*', '/', '%']);
  if (mulDiv) {
    const lv = evalStringExpr(s.slice(0, mulDiv.idx), ctx);
    const rv = evalStringExpr(s.slice(mulDiv.idx + mulDiv.op.length), ctx);
    if (mulDiv.op === '*' && (lv.type === 'String' || rv.type === 'String')) {
      const strPart = lv.type === 'String' ? String(lv.val) : String(rv.val);
      const countPart = lv.type === 'String' ? Number(rv.val) : Number(lv.val);
      const repeated = countPart > 0 ? strPart.repeat(countPart) : '';
      const res = inferRuntimeVal(repeated);
      ctx.detectedVisualType = 'repetition';
      ctx.detectedConcept = 'String Repetition (*)';
      ctx.stringTransformInfo = {
        original: `"${strPart}"`,
        operation: `Repeat × ${countPart}`,
        result: formatVal(res),
      };
      ctx.intermediateSteps.push({
        expr: `${formatVal(lv)} * ${formatVal(rv)}`,
        result: formatVal(res),
        rule: `Repeats "${strPart}" ${countPart} times`,
      });
      return res;
    }
    const isF = lv.type === 'Float' || rv.type === 'Float';
    if (mulDiv.op === '*') return inferRuntimeVal(Number(lv.val) * Number(rv.val), isF);
    if (mulDiv.op === '/') return inferRuntimeVal(Number(lv.val) / Number(rv.val), true);
    if (mulDiv.op === '//') return inferRuntimeVal(Math.floor(Number(lv.val) / Number(rv.val)), isF);
    const n = Number(lv.val);
    const d = Number(rv.val);
    return inferRuntimeVal(((n % d) + d) % d, isF);
  }

  // 12. Unary - / +
  if ((s.startsWith('-') || s.startsWith('+')) && !/^[-+]\d+(\.\d+)?$/.test(s)) {
    const argVal = evalStringExpr(s.slice(1), ctx);
    const num = s[0] === '-' ? -Number(argVal.val) : +Number(argVal.val);
    return inferRuntimeVal(num, argVal.type === 'Float');
  }

  // 13. Indexing & Slicing: target[idx] or target[start:stop:step]
  const bracketMatch = findTopLevelTrailingBracket(s);
  if (bracketMatch) {
    const targetVal = evalStringExpr(bracketMatch.base, ctx);
    const inner = bracketMatch.bracketContent;

    if (targetVal.type === 'String') {
      const str = String(targetVal.val);
      if (inner.includes(':')) {
        // Slicing: start:stop or start:stop:step
        const parts = inner.split(':').map((p) => p.trim());
        const startVal = parts[0] ? Number(evalStringExpr(parts[0], ctx).val) : null;
        const stopVal = parts[1] !== undefined && parts[1] !== '' ? Number(evalStringExpr(parts[1], ctx).val) : null;
        const stepVal = parts[2] !== undefined && parts[2] !== '' ? Number(evalStringExpr(parts[2], ctx).val) : null;

        const sliceRes = computePythonSlice(str, startVal, stopVal, stepVal);
        ctx.detectedVisualType = 'slicing_visual';
        ctx.detectedConcept =
          sliceRes.step < 0 ? 'Reverse String Slicing ([::-1])' : 'String Slicing ([start:stop:step])';
        ctx.charMap = buildCharIndexMap(str, sliceRes.selectedIndices);
        ctx.sliceInfo = {
          start: startVal === null ? 'default' : String(startVal),
          stop: stopVal === null ? 'end' : `${stopVal} (Exclusive)`,
          step: String(sliceRes.step),
          note:
            sliceRes.step < 0
              ? 'Negative step (-1) traverses the string from right to left (reverse)'
              : 'Stop index is exclusive (not included in result)',
        };
        const res = inferRuntimeVal(sliceRes.result);
        ctx.intermediateSteps.push({
          expr: `${bracketMatch.base}[${inner}] on "${str}"`,
          result: formatVal(res),
          rule: `Start=${ctx.sliceInfo.start}, Stop=${ctx.sliceInfo.stop}, Step=${ctx.sliceInfo.step}`,
        });
        return res;
      } else {
        // Single Character Indexing: s[i] or s[-k]
        const rawIdx = Number(evalStringExpr(inner, ctx).val);
        const actualIdx = rawIdx < 0 ? str.length + rawIdx : rawIdx;
        const ch = str[actualIdx] ?? '';
        const selected = new Set<number>([actualIdx]);
        ctx.detectedVisualType = 'char_index_map';
        ctx.detectedConcept =
          rawIdx < 0 ? `Negative Character Indexing (${rawIdx})` : `Positive Character Indexing (${rawIdx})`;
        ctx.charMap = buildCharIndexMap(str, selected);
        const res = inferRuntimeVal(ch);
        ctx.intermediateSteps.push({
          expr: `${bracketMatch.base}[${rawIdx}]`,
          result: formatVal(res),
          rule:
            rawIdx < 0
              ? `Negative index ${rawIdx} maps to position ${actualIdx} ('${ch}')`
              : `Index ${rawIdx} selects character '${ch}'`,
        });
        return res;
      }
    }

    if (targetVal.type === 'List') {
      const rawIdx = Number(evalStringExpr(inner, ctx).val);
      const arr = targetVal.val as any[];
      const actualIdx = rawIdx < 0 ? arr.length + rawIdx : rawIdx;
      return inferRuntimeVal(arr[actualIdx]);
    }

    if (targetVal.type === 'Dict') {
      const keyVal = evalStringExpr(inner, ctx);
      return inferRuntimeVal(targetVal.val[String(keyVal.val)]);
    }
  }

  // 14. Method Calls: obj.method(args)
  const dotIdx = findTopLevelMethodDot(s);
  if (dotIdx !== -1) {
    const objExpr = s.slice(0, dotIdx).trim();
    const methodPart = s.slice(dotIdx + 1).trim();
    const mMatch = methodPart.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
    if (mMatch) {
      const methodName = mMatch[1];
      const argsInner = mMatch[2].trim();
      const objVal = evalStringExpr(objExpr, ctx);
      const argVals = argsInner ? splitTopLevel(argsInner).map((a) => evalStringExpr(a, ctx)) : [];

      if (objVal.type === 'Dict' && methodName === 'get') {
        const k = String(argVals[0]?.val ?? '');
        const defVal = argVals[1] ? argVals[1].val : null;
        const found = objVal.val[k] !== undefined ? objVal.val[k] : defVal;
        return inferRuntimeVal(found);
      }

      const origStr = String(objVal.val ?? '');

      if (
        methodName === 'upper' ||
        methodName === 'lower' ||
        methodName === 'title' ||
        methodName === 'capitalize' ||
        methodName === 'casefold'
      ) {
        const transformed =
          methodName === 'upper'
            ? origStr.toUpperCase()
            : methodName === 'lower' || methodName === 'casefold'
            ? origStr.toLowerCase()
            : methodName === 'title'
            ? toPythonTitleCase(origStr)
            : toPythonCapitalize(origStr);
        const res = inferRuntimeVal(transformed);
        ctx.detectedVisualType = 'string_transform';
        ctx.detectedConcept = `String Case Method (.${methodName}())`;
        ctx.stringTransformInfo = {
          original: `"${origStr}"`,
          operation: `.${methodName}()`,
          result: `"${transformed}"`,
          immutableNote: 'Strings are Immutable: returns a new String without mutating the original',
        };
        ctx.intermediateSteps.push({
          expr: `"${origStr}".${methodName}()`,
          result: `"${transformed}"`,
          rule: `Returns a new ${methodName} string (Original string remains unchanged)`,
        });
        return res;
      }

      if (methodName === 'strip' || methodName === 'lstrip' || methodName === 'rstrip') {
        const transformed =
          methodName === 'strip'
            ? origStr.trim()
            : methodName === 'lstrip'
            ? origStr.trimStart()
            : origStr.trimEnd();
        const res = inferRuntimeVal(transformed);
        // Only set visual type if not just a standard `input().strip()` setup line
        if (!objExpr.startsWith('input(')) {
          ctx.detectedVisualType = 'string_transform';
          ctx.detectedConcept = `Whitespace Trimming (.${methodName}())`;
          ctx.stringTransformInfo = {
            original: `"${origStr}"`,
            operation: `.${methodName}()`,
            result: `"${transformed}"`,
            immutableNote: 'Removes whitespace and returns a new String',
          };
        }
        ctx.intermediateSteps.push({
          expr: `${objExpr}.${methodName}()`,
          result: `"${transformed}"`,
          rule: `Removes ${
            methodName === 'strip' ? 'leading & trailing' : methodName === 'lstrip' ? 'leading (left)' : 'trailing (right)'
          } spaces`,
        });
        return res;
      }

      if (methodName === 'replace') {
        const oldSub = String(argVals[0]?.val ?? '');
        const newSub = String(argVals[1]?.val ?? '');
        const transformed = origStr.split(oldSub).join(newSub);
        const res = inferRuntimeVal(transformed);
        ctx.detectedVisualType = 'string_transform';
        ctx.detectedConcept = 'Substring Replacement (.replace())';
        ctx.stringTransformInfo = {
          original: `"${origStr}"`,
          operation: `.replace("${oldSub}", "${newSub}")`,
          result: `"${transformed}"`,
          immutableNote: 'Replaces occurrences and returns a new String',
        };
        ctx.intermediateSteps.push({
          expr: `"${origStr}".replace("${oldSub}", "${newSub}")`,
          result: `"${transformed}"`,
          rule: `Replaces every "${oldSub}" with "${newSub}"`,
        });
        return res;
      }

      if (methodName === 'find' || methodName === 'rfind' || methodName === 'index') {
        const sub = String(argVals[0]?.val ?? '');
        const idx = methodName === 'rfind' ? origStr.lastIndexOf(sub) : origStr.indexOf(sub);
        const res = inferRuntimeVal(idx);
        const matchedIndices = new Set<number>();
        if (idx !== -1) {
          for (let k = idx; k < idx + sub.length; k++) matchedIndices.add(k);
        }
        ctx.detectedVisualType = 'string_search';
        ctx.detectedConcept = `Substring Search (.${methodName}())`;
        ctx.charMap = buildCharIndexMap(origStr, matchedIndices);
        ctx.intermediateSteps.push({
          expr: `"${origStr}".${methodName}("${sub}")`,
          result: String(idx),
          rule:
            idx !== -1
              ? `Substring "${sub}" found starting at Index ${idx}`
              : `Substring "${sub}" not found (returns -1)`,
        });
        return res;
      }

      if (methodName === 'count') {
        const sub = String(argVals[0]?.val ?? '');
        let cnt = 0;
        const matchedIndices = new Set<number>();
        if (sub.length > 0) {
          let pos = 0;
          while ((pos = origStr.indexOf(sub, pos)) !== -1) {
            cnt++;
            for (let k = pos; k < pos + sub.length; k++) matchedIndices.add(k);
            pos += sub.length;
          }
        }
        const res = inferRuntimeVal(cnt);
        ctx.detectedVisualType = 'string_search';
        ctx.detectedConcept = 'Substring Frequency (.count())';
        ctx.charMap = buildCharIndexMap(origStr, matchedIndices);
        ctx.intermediateSteps.push({
          expr: `"${origStr}".count("${sub}")`,
          result: String(cnt),
          rule: `"${sub}" appears ${cnt} time(s) in "${origStr}"`,
        });
        return res;
      }

      if (methodName === 'startswith' || methodName === 'endswith') {
        const aff = String(argVals[0]?.val ?? '');
        const ok = methodName === 'startswith' ? origStr.startsWith(aff) : origStr.endsWith(aff);
        const res = inferRuntimeVal(ok);
        ctx.detectedVisualType = 'string_search';
        ctx.detectedConcept = `Prefix/Suffix Check (.${methodName}())`;
        ctx.intermediateSteps.push({
          expr: `"${origStr}".${methodName}("${aff}")`,
          result: ok ? 'True' : 'False',
          rule: `Checks if string ${methodName === 'startswith' ? 'starts' : 'ends'} with "${aff}"`,
        });
        return res;
      }

      if (methodName === 'split' || methodName === 'rsplit' || methodName === 'splitlines') {
        let parts: string[];
        if (methodName === 'splitlines') {
          parts = origStr.split(/\r?\n/);
        } else if (argVals.length === 0) {
          const trimmed = origStr.trim();
          parts = trimmed ? trimmed.split(/\s+/) : [];
        } else {
          const sep = String(argVals[0].val);
          parts = origStr.split(sep);
        }
        const res = inferRuntimeVal(parts);
        ctx.detectedVisualType = 'string_split';
        ctx.detectedConcept = 'String Splitting into List (.split())';
        ctx.stringTransformInfo = {
          original: `"${origStr}"`,
          operation: `.split(${argVals[0] ? `"${argVals[0].val}"` : ''})`,
          result: formatVal(res),
        };
        ctx.intermediateSteps.push({
          expr: `"${origStr}".split(${argVals[0] ? `"${argVals[0].val}"` : ''})`,
          result: formatVal(res),
          rule: `Splits String into a List of ${parts.length} substrings`,
        });
        return res;
      }

      if (methodName === 'join') {
        const arr = Array.isArray(argVals[0]?.val) ? (argVals[0].val as any[]) : [];
        const joined = arr.map(String).join(origStr);
        const res = inferRuntimeVal(joined);
        ctx.detectedVisualType = 'string_join';
        ctx.detectedConcept = 'Joining List Elements into String (.join())';
        ctx.stringTransformInfo = {
          original: formatVal(argVals[0]),
          operation: `"${origStr}".join(...)`,
          result: `"${joined}"`,
        };
        ctx.intermediateSteps.push({
          expr: `"${origStr}".join(${formatVal(argVals[0])})`,
          result: `"${joined}"`,
          rule: `Combines List elements using separator "${origStr}"`,
        });
        return res;
      }

      if (methodName === 'isalpha') return inferRuntimeVal(/^[a-zA-Z]+$/.test(origStr));
      if (methodName === 'isdigit') return inferRuntimeVal(/^\d+$/.test(origStr));
      if (methodName === 'isalnum') return inferRuntimeVal(/^[a-zA-Z0-9]+$/.test(origStr));
      if (methodName === 'isspace') return inferRuntimeVal(/^\s+$/.test(origStr));
    }
  }

  // 15. Built-in Function Calls: len(), ord(), chr(), type(), str(), int(), float(), input()
  const callMatch = s.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
  if (callMatch) {
    const fn = callMatch[1];
    const inner = callMatch[2].trim();
    const argVals = inner ? splitTopLevel(inner).map((a) => evalStringExpr(a, ctx)) : [];

    if (fn === 'input') {
      const promptStr = argVals[0] ? String(argVals[0].val) : '';
      const rawIn = ctx.inputCursor < ctx.inputs.length ? ctx.inputs[ctx.inputCursor++] : '';
      if (promptStr) {
        ctx.stdoutLines.push(`${promptStr}${rawIn}`);
      }
      const res = inferRuntimeVal(rawIn);
      ctx.intermediateSteps.push({
        expr: inner ? `input(${inner})` : 'input()',
        result: formatVal(res),
        rule: 'Reads text from standard input as a String',
      });
      return res;
    }

    if (fn === 'len') {
      const target = argVals[0];
      const length = target?.val?.length ?? 0;
      const res = inferRuntimeVal(length);
      if (target?.type === 'String') {
        ctx.charMap = buildCharIndexMap(String(target.val));
      }
      ctx.intermediateSteps.push({
        expr: `len(${formatVal(target)})`,
        result: String(length),
        rule: `Counts total characters/elements (${length})`,
      });
      return res;
    }

    if (fn === 'ord') {
      const ch = String(argVals[0]?.val ?? ' ');
      const code = ch.charCodeAt(0);
      const res = inferRuntimeVal(code);
      ctx.detectedVisualType = 'unicode_visual';
      ctx.detectedConcept = 'Unicode Code Point (ord())';
      ctx.intermediateSteps.push({
        expr: `ord('${ch}')`,
        result: String(code),
        rule: `Returns Unicode/ASCII code point of character '${ch}' ➔ ${code}`,
      });
      return res;
    }

    if (fn === 'chr') {
      const code = Number(argVals[0]?.val ?? 65);
      const ch = String.fromCharCode(code);
      const res = inferRuntimeVal(ch);
      ctx.detectedVisualType = 'unicode_visual';
      ctx.detectedConcept = 'Character from Unicode Code Point (chr())';
      ctx.intermediateSteps.push({
        expr: `chr(${code})`,
        result: `"${ch}"`,
        rule: `Converts Unicode/ASCII code ${code} to character '${ch}'`,
      });
      return res;
    }

    if (fn === 'type') {
      const t = argVals[0]?.type;
      const pyType =
        t === 'String'
          ? "<class 'str'>"
          : t === 'Integer'
          ? "<class 'int'>"
          : t === 'Float'
          ? "<class 'float'>"
          : "<class 'bool'>";
      return inferRuntimeVal(pyType);
    }

    if (fn === 'str') {
      const res = inferRuntimeVal(formatPrintVal(argVals[0]));
      ctx.intermediateSteps.push({
        expr: `str(${formatVal(argVals[0])})`,
        result: formatVal(res),
        rule: `Converts ${argVals[0]?.type || 'value'} to String`,
      });
      return res;
    }

    if (fn === 'int') {
      return inferRuntimeVal(Math.trunc(Number(argVals[0]?.val ?? 0)), false);
    }

    if (fn === 'float') {
      return inferRuntimeVal(Number(argVals[0]?.val ?? 0), true);
    }
  }

  // 16. List literal: ["Python", "is", "awesome"]
  if (s.startsWith('[') && s.endsWith(']')) {
    const inner = s.slice(1, -1).trim();
    const items = inner ? splitTopLevel(inner).map((a) => evalStringExpr(a, ctx).val) : [];
    return inferRuntimeVal(items);
  }

  // 17. Empty Dict literal: {}
  if (s === '{}') {
    return { val: {}, type: 'Dict' };
  }

  // 18. Booleans & Numeric literals
  if (s === 'True') return inferRuntimeVal(true);
  if (s === 'False') return inferRuntimeVal(false);
  if (/^[-+]?\d+(\.\d+)?$/.test(s)) {
    return inferRuntimeVal(Number(s), s.includes('.'));
  }

  // 19. Variable lookup
  return ctx.env[s] ?? inferRuntimeVal('');
}

// ─── STATEMENT PREPROCESSOR & INDENTATION PARSER ───

interface SourceStmtLine {
  lineNum: number;
  raw: string;
  indent: number;
  trimmed: string;
}

function preprocessSourceLines(code: string): SourceStmtLine[] {
  const rawLines = code.split('\n');
  const result: SourceStmtLine[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const line = rawLines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      i++;
      continue;
    }
    const indent = (line.match(/^(\s*)/)?.[1] || '').length;

    // Check if line opens a triple-quoted string that spans multiple lines (like STR-01-03)
    const tripleDoubleCount = (trimmed.match(/"""/g) || []).length;
    const tripleSingleCount = (trimmed.match(/'''/g) || []).length;
    if (tripleDoubleCount === 1 || tripleSingleCount === 1) {
      const delim = tripleDoubleCount === 1 ? '"""' : "'''";
      const startLineNum = i + 1;
      const joinedLines = [line];
      i++;
      while (i < rawLines.length) {
        joinedLines.push(rawLines[i]);
        if (rawLines[i].includes(delim)) {
          i++;
          break;
        }
        i++;
      }
      const combined = joinedLines.join('\n');
      result.push({
        lineNum: startLineNum,
        raw: combined,
        indent,
        trimmed: combined.trim(),
      });
      continue;
    }

    result.push({
      lineNum: i + 1,
      raw: line,
      indent,
      trimmed,
    });
    i++;
  }

  return result;
}

type StmtBlockNode =
  | { kind: 'simple'; line: SourceStmtLine }
  | {
      kind: 'if_chain';
      branches: {
        branchType: 'if' | 'elif' | 'else';
        headerLine: SourceStmtLine;
        condExpr?: string;
        body: StmtBlockNode[];
      }[];
    }
  | {
      kind: 'for_loop';
      headerLine: SourceStmtLine;
      loopVars: string[];
      iterExpr: string;
      body: StmtBlockNode[];
    };

function parseStringBlocks(
  lines: SourceStmtLine[],
  startIdx: number,
  minIndent: number
): { nodes: StmtBlockNode[]; nextIdx: number } {
  const nodes: StmtBlockNode[] = [];
  let i = startIdx;

  while (i < lines.length) {
    const cur = lines[i];
    if (cur.indent < minIndent) break;

    if (cur.trimmed.startsWith('if ') && cur.trimmed.endsWith(':')) {
      const branches: {
        branchType: 'if' | 'elif' | 'else';
        headerLine: SourceStmtLine;
        condExpr?: string;
        body: StmtBlockNode[];
      }[] = [];
      const baseIndent = cur.indent;

      while (i < lines.length && lines[i].indent === baseIndent) {
        const hdr = lines[i];
        if (hdr.trimmed.startsWith('if ') && hdr.trimmed.endsWith(':')) {
          if (branches.length > 0) break;
          const bodyRes = parseStringBlocks(lines, i + 1, baseIndent + 1);
          branches.push({
            branchType: 'if',
            headerLine: hdr,
            condExpr: hdr.trimmed.slice(3, -1).trim(),
            body: bodyRes.nodes,
          });
          i = bodyRes.nextIdx;
        } else if (hdr.trimmed.startsWith('elif ') && hdr.trimmed.endsWith(':')) {
          const bodyRes = parseStringBlocks(lines, i + 1, baseIndent + 1);
          branches.push({
            branchType: 'elif',
            headerLine: hdr,
            condExpr: hdr.trimmed.slice(5, -1).trim(),
            body: bodyRes.nodes,
          });
          i = bodyRes.nextIdx;
        } else if (hdr.trimmed === 'else:') {
          const bodyRes = parseStringBlocks(lines, i + 1, baseIndent + 1);
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
      const loopVars = m ? m[1].split(',').map((v) => v.trim()) : ['ch'];
      const iterExpr = m ? m[2].trim() : '';
      const bodyRes = parseStringBlocks(lines, i + 1, cur.indent + 1);
      nodes.push({
        kind: 'for_loop',
        headerLine: cur,
        loopVars,
        iterExpr,
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
  prevVal?: RuntimeVal
): VariableSnapshot[] {
  return Object.entries(env).map(([k, v]) => ({
    name: k,
    prevValue: k === changedVar && prevVal !== undefined ? formatVal(prevVal) : undefined,
    value: formatVal(v),
    dataType: v.type,
  }));
}

export function generateStringsTeachingSteps(question: TopicQuestion): TeachingStep[] {
  const stmtLines = preprocessSourceLines(question.referenceCode);
  const ast = parseStringBlocks(stmtLines, 0, 0).nodes;

  const env: Record<string, RuntimeVal> = {};
  const inputs = question.sampleInput ? question.sampleInput.split('\n') : [];
  let inputCursor = 0;
  const stdoutLines: string[] = [];
  const drafts: Omit<TeachingStep, 'step' | 'totalSteps'>[] = [];

  function runSilentBlock(nodes: StmtBlockNode[]) {
    for (const node of nodes) {
      if (node.kind === 'simple') {
        const t = node.line.trimmed;
        const ctx: StringEvalContext = {
          env,
          inputs,
          inputCursor,
          stdoutLines,
          intermediateSteps: [],
          evaluatedOperands: [],
        };
        // Augmented assignment: vowels += 1, res += ch
        const augMatch = t.match(/^([a-zA-Z_]\w*)\s*\+=\s*(.+)$/);
        if (augMatch) {
          const vName = augMatch[1];
          const rhs = evalStringExpr(augMatch[2], ctx);
          inputCursor = ctx.inputCursor;
          const cur = env[vName];
          if (cur?.type === 'String' || rhs.type === 'String') {
            env[vName] = inferRuntimeVal(String(cur?.val ?? '') + String(rhs.val));
          } else {
            env[vName] = inferRuntimeVal(Number(cur?.val ?? 0) + Number(rhs.val));
          }
          continue;
        }
        // Dict assignment: freq[ch] = freq.get(ch, 0) + 1
        const dictAssign = t.match(/^([a-zA-Z_]\w*)\[(.+?)\]\s*=\s*(.+)$/);
        if (dictAssign) {
          const dName = dictAssign[1];
          const kVal = evalStringExpr(dictAssign[2], ctx);
          const rVal = evalStringExpr(dictAssign[3], ctx);
          inputCursor = ctx.inputCursor;
          if (env[dName]?.type === 'Dict') {
            env[dName].val[String(kVal.val)] = rVal.val;
          }
          continue;
        }
        // Normal assignment
        const assignMatch = t.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (assignMatch) {
          env[assignMatch[1]] = evalStringExpr(assignMatch[2], ctx);
          inputCursor = ctx.inputCursor;
          continue;
        }
        // Print statement inside loop
        const pMatch = t.match(/^print\((.*)\)$/);
        if (pMatch) {
          const args = pMatch[1].trim() ? splitTopLevel(pMatch[1]).map((a) => evalStringExpr(a, ctx)) : [];
          inputCursor = ctx.inputCursor;
          stdoutLines.push(args.map(formatPrintVal).join(' '));
          continue;
        }
      } else if (node.kind === 'if_chain') {
        for (const br of node.branches) {
          if (br.branchType === 'else') {
            runSilentBlock(br.body);
            break;
          }
          const ctx: StringEvalContext = {
            env,
            inputs,
            inputCursor,
            stdoutLines,
            intermediateSteps: [],
            evaluatedOperands: [],
          };
          const cVal = evalStringExpr(br.condExpr || 'True', ctx);
          inputCursor = ctx.inputCursor;
          if (isTruthy(cVal)) {
            runSilentBlock(br.body);
            break;
          }
        }
      }
    }
  }

  function executeNodes(nodes: StmtBlockNode[]) {
    for (const node of nodes) {
      if (node.kind === 'for_loop') {
        const hdr = node.headerLine;
        const ctx: StringEvalContext = {
          env,
          inputs,
          inputCursor,
          stdoutLines,
          intermediateSteps: [],
          evaluatedOperands: [],
        };

        if (node.iterExpr.endsWith('.items()')) {
          const dictName = node.iterExpr.replace('.items()', '').trim();
          const dictObj = env[dictName]?.val || {};
          for (const [k, v] of Object.entries(dictObj)) {
            env[node.loopVars[0]] = inferRuntimeVal(k);
            if (node.loopVars[1]) env[node.loopVars[1]] = inferRuntimeVal(v);
            runSilentBlock(node.body);
          }
          delete env[node.loopVars[0]];
          if (node.loopVars[1]) delete env[node.loopVars[1]];

          drafts.push({
            title: `Iterate Dictionary Items & Print (Line ${hdr.lineNum})`,
            conceptKey: 'string_iteration',
            speechHinglish: `Line ${hdr.lineNum} पर \`${hdr.trimmed}\` के ज़रिए हम हर Character और उसकी Count को Console पर Print करते हैं।`,
            speechEnglish: `Line ${hdr.lineNum} iterates through each character-frequency pair and prints it to the Console.`,
            cardExplanationHinglish: `Loop \`${hdr.trimmed}\` प्रत्येक Character और उसकी Frequency को Console पर Print करता है।`,
            cardExplanationEnglish: `Iterates over \`${node.iterExpr}\` and outputs each key-value pair.`,
            visualTarget: hdr.trimmed,
            visualLabel: 'Character Frequency Output',
            visualSublabel: 'Console Output',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: hdr.lineNum,
            highlightToken: 'for',
            conceptBoxes: [
              { label: hdr.trimmed, sublabel: 'Dictionary Loop', isActive: true },
              { label: 'f"{k}: {v}"', sublabel: 'Formatted Pair', isActive: true },
              { label: 'Console Output', sublabel: 'Printed Lines', isActive: true },
            ],
            operatorDetails: {
              visualType: 'string_iteration',
              technicalConcept: 'String Frequency Iteration',
              activeSourceRange: {
                line: hdr.lineNum,
                startCol: hdr.indent + 1,
                endCol: hdr.raw.length,
                codeText: hdr.trimmed,
              },
              intermediateSteps: [
                {
                  expr: hdr.trimmed,
                  result: stdoutLines.join(' | '),
                  rule: 'Prints each character and its count',
                },
              ],
              variableSnapshots: takeSnapshots(env),
            },
          });
          continue;
        }

        // Iterating over a String: for ch in text:
        const iterVal = evalStringExpr(node.iterExpr, ctx);
        inputCursor = ctx.inputCursor;
        const iterStr = String(iterVal.val ?? '');
        const chars = Array.from(iterStr);
        const loopVar = node.loopVars[0];

        for (const ch of chars) {
          env[loopVar] = inferRuntimeVal(ch);
          runSilentBlock(node.body);
        }
        delete env[loopVar];

        drafts.push({
          title: `String Character Iteration (Line ${hdr.lineNum})`,
          conceptKey: 'string_iteration',
          speechHinglish: `Line ${hdr.lineNum} पर \`${hdr.trimmed}\` String \`"${iterStr}"\` के हर Character पर एक-एक करके Loop चलाता है (Index 0 से ${
            chars.length - 1
          } तक) और अंदर की Condition Check करके Variables को Update करता है।`,
          speechEnglish: `Line ${hdr.lineNum} iterates character-by-character over \`"${iterStr}"\` and updates the state variables.`,
          cardExplanationHinglish: `String Iteration: \`"${iterStr}"\` के सभी ${chars.length} Characters पर एक-एक करके Loop चला और Variables Update हुए।`,
          cardExplanationEnglish: `Iterates over all ${chars.length} characters of \`"${iterStr}"\`.`,
          visualTarget: hdr.trimmed,
          visualLabel: `for ${loopVar} in "${iterStr}"`,
          visualSublabel: `${chars.length} Characters Processed`,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: hdr.lineNum,
          highlightToken: 'for',
          conceptBoxes: [
            { label: `"${iterStr}"`, sublabel: `${chars.length} Characters`, isActive: true },
            { label: `for ${loopVar} in ...`, sublabel: 'Character Loop', isActive: true },
            { label: 'Updated State', sublabel: 'Loop Complete', isActive: true },
          ],
          operatorDetails: {
            visualType: 'string_iteration',
            technicalConcept: 'Character-by-Character String Iteration',
            activeSourceRange: {
              line: hdr.lineNum,
              startCol: hdr.indent + 1,
              endCol: hdr.raw.length,
              codeText: hdr.trimmed,
            },
            charMap: buildCharIndexMap(iterStr),
            intermediateSteps: [
              {
                expr: `Iterate over "${iterStr}" (${chars.length} chars)`,
                result: takeSnapshots(env)
                  .map((s) => `${s.name}=${s.value}`)
                  .join(', '),
                rule: 'Processes each character sequentially from left to right',
              },
            ],
            variableSnapshots: takeSnapshots(env),
          },
        });
        continue;
      }

      if (node.kind === 'if_chain') {
        for (let bIdx = 0; bIdx < node.branches.length; bIdx++) {
          const br = node.branches[bIdx];
          const hdr = br.headerLine;

          if (br.branchType === 'else') {
            drafts.push({
              title: `else Branch Selected (Line ${hdr.lineNum})`,
              conceptKey: 'if_else_branch',
              speechHinglish: `Line ${hdr.lineNum} पर ऊपर की Condition \`False\` होने के कारण Python अब \`else:\` Block को Select करके Execute करेगा।`,
              speechEnglish: `On Line ${hdr.lineNum}, since the previous condition was \`False\`, Python executes the \`else:\` branch.`,
              cardExplanationHinglish: `ऊपर की Condition \`False\` होने के कारण \`else:\` Branch Select हुई।`,
              cardExplanationEnglish: `\`else:\` branch selected for execution.`,
              visualTarget: 'else:',
              visualLabel: 'else: Selected ✅',
              visualSublabel: 'Fallback Branch',
              consoleOutput: stdoutLines.join('\n'),
              isConsoleVisible: stdoutLines.length > 0,
              highlightLine: hdr.lineNum,
              highlightToken: 'else',
              conceptBoxes: [
                { label: 'Previous Check', sublabel: 'False ❌', isActive: false },
                { label: 'else: Block', sublabel: 'Selected ✅', isActive: true },
                { label: 'Indented Body', sublabel: 'Executes Next', isActive: true },
              ],
              operatorDetails: {
                visualType: 'if_else_branch',
                technicalConcept: 'else Branch Execution',
                activeSourceRange: {
                  line: hdr.lineNum,
                  startCol: hdr.indent + 1,
                  endCol: hdr.raw.length,
                  codeText: hdr.trimmed,
                },
                selectedBranch: `else Block (Line ${hdr.lineNum + 1})`,
                variableSnapshots: takeSnapshots(env),
              },
            });
            executeNodes(br.body);
            break;
          }

          const ctx: StringEvalContext = {
            env,
            inputs,
            inputCursor,
            stdoutLines,
            intermediateSteps: [],
            evaluatedOperands: [],
          };
          const condStr = br.condExpr || 'True';
          const condVal = evalStringExpr(condStr, ctx);
          inputCursor = ctx.inputCursor;
          const condBool = isTruthy(condVal);

          drafts.push({
            title: `${br.branchType} Condition (${condStr}) ➔ ${condBool ? 'True ✅' : 'False ❌'}`,
            conceptKey: ctx.detectedVisualType || 'condition_eval',
            speechHinglish: `Line ${hdr.lineNum} पर String Condition \`${condStr}\` Check होती है, जिसका Result \`${
              condBool ? 'True' : 'False'
            }\` है। ${
              condBool
                ? `इसलिए यह \`${br.branchType}\` Block Execute होगा और बाक़ी Branches Skip हो जाएँगी।`
                : `इसलिए यह Block Skip हो जाता है और Python अगली Branch चेक करता है।`
            }`,
            speechEnglish: `On Line ${hdr.lineNum}, condition \`${condStr}\` evaluates to \`${
              condBool ? 'True' : 'False'
            }\`.`,
            cardExplanationHinglish: `Condition \`${condStr}\` ➔ \`${condBool ? 'True ✅' : 'False ❌'}\`। ${
              condBool ? 'Selected Branch अब Execute होगी।' : 'यह Branch Skip हो गई।'
            }`,
            cardExplanationEnglish: `Condition \`${condStr}\` evaluated to \`${condBool ? 'True' : 'False'}\`.`,
            visualTarget: condStr,
            visualLabel: `${condStr} ➔ ${condBool ? 'True' : 'False'}`,
            visualSublabel: condBool ? 'Branch Selected ✅' : 'Branch Skipped ⏭️',
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: hdr.lineNum,
            highlightToken: br.branchType,
            conceptBoxes: [
              { label: condStr, sublabel: 'String Condition', isActive: true },
              {
                label: `Result: ${condBool ? 'True ✅' : 'False ❌'}`,
                sublabel: condBool ? 'Condition Met' : 'Not Met',
                isActive: true,
              },
              {
                label: condBool ? 'Execute Block' : 'Skip Block',
                sublabel: 'Decision Flow',
                isActive: false,
              },
            ],
            operatorDetails: {
              visualType: ctx.detectedVisualType || 'if_else_branch',
              technicalConcept: ctx.detectedConcept || 'String Condition Decision',
              activeSourceRange: {
                line: hdr.lineNum,
                startCol: hdr.indent + 1,
                endCol: hdr.raw.length,
                codeText: hdr.trimmed,
              },
              intermediateSteps:
                ctx.intermediateSteps.length > 0
                  ? ctx.intermediateSteps
                  : [{ expr: condStr, result: condBool ? 'True' : 'False', rule: 'Condition Check' }],
              selectedBranch: condBool ? `${br.branchType} Block (Line ${hdr.lineNum + 1})` : undefined,
              skippedBranches: !condBool ? [`${br.branchType} Block Skipped`] : undefined,
              charMap: ctx.charMap,
              sliceInfo: ctx.sliceInfo,
              stringTransformInfo: ctx.stringTransformInfo,
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

      // Simple statement: print(...) or assignment
      const line = node.line;
      const ctx: StringEvalContext = {
        env,
        inputs,
        inputCursor,
        stdoutLines,
        intermediateSteps: [],
        evaluatedOperands: [],
      };

      const printMatch = line.trimmed.match(/^print\((.*)\)$/);
      if (printMatch) {
        const inner = printMatch[1].trim();
        const argExprs = inner ? splitTopLevel(inner) : [];
        const printedVals = argExprs.map((ae) => evalStringExpr(ae, ctx));
        inputCursor = ctx.inputCursor;
        const printedLine = printedVals.map(formatPrintVal).join(' ');
        stdoutLines.push(printedLine);
        const cumConsole = stdoutLines.join('\n');

        const vType: OperatorVisualType = ctx.detectedVisualType || 'console';
        const techConcept = ctx.detectedConcept || 'Console Output (print)';

        let speechHi = `Line ${line.lineNum} पर \`${line.trimmed}\` Execute होता है और Console पर \`${printedLine}\` Print करता है।`;
        let cardHi = `Line ${line.lineNum}: \`${line.trimmed}\` का Output \`${printedLine}\` Console पर Print होता है।`;

        if (vType === 'char_index_map') {
          speechHi = `Line ${line.lineNum} पर \`${inner}\` String Indexing का उपयोग करता है। Python में Positive Index 0 से शुरू होता है और Negative Index पीछे से -1 से शुरू होता है। यहाँ Selected Character \`"${printedLine}"\` Console पर Print होता है।`;
          cardHi = `Character Indexing: \`${inner}\` से Character \`"${printedLine}"\` मिला और Console पर Print हुआ। नीचे Character Index Map में Positive और Negative Indices देखें!`;
        } else if (vType === 'slicing_visual' && ctx.sliceInfo) {
          speechHi = `Line ${line.lineNum} पर \`${inner}\` String Slicing करता है। यहाँ Start=${ctx.sliceInfo.start}, Stop=${ctx.sliceInfo.stop} और Step=${ctx.sliceInfo.step} है। याद रखें कि Stop Index शामिल नहीं होता (Exclusive)। इसलिए Sliced Result \`"${printedLine}"\` बनता है।`;
          cardHi = `String Slicing: \`${inner}\` (Start=${ctx.sliceInfo.start}, Stop=${ctx.sliceInfo.stop}, Step=${ctx.sliceInfo.step}) ➔ \`"${printedLine}"\`।`;
        } else if (vType === 'string_transform' && ctx.stringTransformInfo) {
          speechHi = `Line ${line.lineNum} पर \`${ctx.stringTransformInfo.operation}\` Method Original String ${ctx.stringTransformInfo.original} से नई Transformed String \`${ctx.stringTransformInfo.result}\` बनाता है। Python में Strings Immutable होती हैं, यानी Original String नहीं बदलती।`;
          cardHi = `String Transformation: ${ctx.stringTransformInfo.original} पर \`${ctx.stringTransformInfo.operation}\` चलाने से \`${ctx.stringTransformInfo.result}\` बना (Immutable String)।`;
        } else if (vType === 'concatenation') {
          speechHi = `Line ${line.lineNum} पर \`+\` Concatenation Operator दोनों Strings को क्रम से जोड़कर \`"${printedLine}"\` बनाता है और Console पर Print करता है।`;
          cardHi = `String Concatenation (+): Strings जुड़कर \`"${printedLine}"\` बनती हैं।`;
        } else if (vType === 'repetition') {
          speechHi = `Line ${line.lineNum} पर \`*\` Repetition Operator String को बार-बार Repeat करके \`"${printedLine}"\` बनाता है।`;
          cardHi = `String Repetition (*): String Repeat होकर \`"${printedLine}"\` बनी।`;
        } else if (vType === 'fstring_visual') {
          speechHi = `Line ${line.lineNum} पर \`f-string\` के अंदर Curly Braces \`{...}\` में लिखे Expressions Evaluate होकर सीधे String में जुड़ जाते हैं, और \`"${printedLine}"\` Print होता है।`;
          cardHi = `f-string Formatting: \`${inner}\` Evaluate होकर \`"${printedLine}"\` Print करता है।`;
        } else if (vType === 'escape_sequence') {
          speechHi = `Line ${line.lineNum} पर Escape Sequence का प्रयोग हुआ है, जिसे Python Interpret करके Console पर सही Format में Print करता है।`;
          cardHi = `Escape Sequence Output: \`${inner}\` Console पर Formatted रूप में Print होता है।`;
        }

        drafts.push({
          title:
            vType === 'char_index_map'
              ? `Character Index Lookup (${inner} ➔ "${printedLine}")`
              : vType === 'slicing_visual'
              ? `String Slicing (${inner} ➔ "${printedLine}")`
              : vType === 'string_transform'
              ? `String Method (${inner} ➔ "${printedLine}")`
              : `Evaluate & Print (Line ${line.lineNum})`,
          conceptKey: vType,
          speechHinglish: speechHi,
          speechEnglish: `Line ${line.lineNum} evaluates \`${inner}\` and prints \`${printedLine}\` to the Console.`,
          cardExplanationHinglish: cardHi,
          cardExplanationEnglish: `Evaluates \`${line.trimmed}\` and outputs \`${printedLine}\` to the Console.`,
          visualTarget: inner,
          visualLabel: `Output: ${printedLine}`,
          visualSublabel: techConcept,
          consoleOutput: cumConsole,
          isConsoleVisible: true,
          highlightLine: line.lineNum,
          highlightToken: 'print',
          conceptBoxes: [
            { label: inner, sublabel: techConcept, isActive: true },
            { label: `"${printedLine}"`, sublabel: 'Evaluated Result', isActive: true },
            { label: 'Console Screen', sublabel: 'Output Displayed', isActive: true },
          ],
          operatorDetails: {
            visualType: vType,
            technicalConcept: techConcept,
            activeSourceRange: {
              line: line.lineNum,
              startCol: line.indent + 1,
              endCol: line.raw.length,
              codeText: line.trimmed,
            },
            intermediateSteps:
              ctx.intermediateSteps.length > 0
                ? ctx.intermediateSteps
                : [{ expr: line.trimmed, result: printedLine, rule: 'Prints to Console' }],
            intermediateResult: printedLine,
            charMap: ctx.charMap,
            sliceInfo: ctx.sliceInfo,
            stringTransformInfo: ctx.stringTransformInfo,
            variableSnapshots: takeSnapshots(env),
          },
        });
        continue;
      }

      // Assignment: varName = rhs
      const assignMatch = line.trimmed.match(/^([a-zA-Z_]\w*)\s*=\s*([\s\S]+)$/);
      if (assignMatch) {
        const varName = assignMatch[1];
        const rhsStr = assignMatch[2].trim();
        const prevVal = env[varName];
        const newVal = evalStringExpr(rhsStr, ctx);
        inputCursor = ctx.inputCursor;
        env[varName] = newVal;

        const vType: OperatorVisualType =
          ctx.detectedVisualType || (newVal.type === 'String' ? 'char_index_map' : 'variable_state');
        const techConcept =
          ctx.detectedConcept ||
          (newVal.type === 'String' ? 'String Creation & Character Index Map' : 'Variable Assignment');

        if (newVal.type === 'String' && !ctx.charMap && String(newVal.val).length > 0) {
          ctx.charMap = buildCharIndexMap(String(newVal.val));
        }

        let speechHi = `Line ${line.lineNum} पर \`${rhsStr}\` Evaluate होकर Variable \`${varName}\` में \`${formatVal(
          newVal
        )}\` (${newVal.type}) Store करता है।`;
        let cardHi = `Variable \`${varName}\` में \`${formatVal(newVal)}\` (${newVal.type}) Store हुआ।`;

        if (newVal.type === 'String' && String(newVal.val).length > 0 && vType === 'char_index_map') {
          const sLen = String(newVal.val).length;
          speechHi = `Line ${line.lineNum} पर String Variable \`${varName}\` में \`${formatVal(
            newVal
          )}\` Store होता है (Length: ${sLen})। Python में हर Character को दो Index मिलते हैं: आगे से Positive Index (0 से ${
            sLen - 1
          }) और पीछे से Negative Index (-${sLen} से -1)।`;
          cardHi = `String \`${varName} = ${formatVal(
            newVal
          )}\` (Length: ${sLen})। नीचे Character Index Map में हर Character का Positive और Negative Index देखें!`;
        } else if (prevVal && prevVal.type === 'String' && newVal.type === 'String') {
          speechHi = `Line ${line.lineNum} पर क्योंकि Python में Strings Immutable होती हैं, इसलिए हम \`${varName}\` के किसी एक Character को सीधे नहीं बदल सकते — इसके बजाय हम \`${rhsStr}\` से नई String \`${formatVal(
            newVal
          )}\` बनाकर \`${varName}\` को Reassign करते हैं।`;
          cardHi = `String Immutability: \`${rhsStr}\` से नई String \`${formatVal(
            newVal
          )}\` बनी और \`${varName}\` में Store हुई।`;
        }

        drafts.push({
          title: `Variable ${varName} = ${formatVal(newVal)}`,
          conceptKey: vType,
          speechHinglish: speechHi,
          speechEnglish: `Line ${line.lineNum} evaluates \`${rhsStr}\` to \`${formatVal(
            newVal
          )}\` and stores it in \`${varName}\`.`,
          cardExplanationHinglish: cardHi,
          cardExplanationEnglish: `Stores \`${formatVal(newVal)}\` (${newVal.type}) in variable \`${varName}\`.`,
          visualTarget: varName,
          visualLabel: `${varName} = ${formatVal(newVal)}`,
          visualSublabel: techConcept,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: line.lineNum,
          highlightToken: varName,
          conceptBoxes: [
            { label: varName, sublabel: 'Variable Name', isActive: true },
            { label: formatVal(newVal), sublabel: `${newVal.type} Value`, isActive: true },
            {
              label:
                newVal.type === 'String'
                  ? `Length: ${String(newVal.val).length}`
                  : `${newVal.type}`,
              sublabel: 'Memory State',
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
              codeText: line.trimmed,
            },
            intermediateSteps:
              ctx.intermediateSteps.length > 0
                ? ctx.intermediateSteps
                : [{ expr: `${varName} = ${rhsStr}`, result: formatVal(newVal), rule: 'Assignment' }],
            intermediateResult: formatVal(newVal),
            charMap: ctx.charMap,
            sliceInfo: ctx.sliceInfo,
            stringTransformInfo: ctx.stringTransformInfo,
            variableSnapshots: takeSnapshots(env, varName, prevVal),
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

export function runStringsPythonSandbox(
  code: string,
  sampleInput = ''
): { stdout: string; error: string | null } {
  try {
    const rawLines = code.split('\n');
    let inTriple = false;
    for (let i = 0; i < rawLines.length; i++) {
      const t = rawLines[i].trim();
      if (!t || t.startsWith('#')) continue;
      if (t.includes('"""') || t.includes("'''")) {
        const cnt = (t.match(/"""|'''/g) || []).length;
        if (cnt === 1) inTriple = !inTriple;
        continue;
      }
      if (inTriple) continue;
      // Check unbalanced parentheses
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
        if (ch === '(') depth++;
        else if (ch === ')') depth--;
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
          error: `SyntaxError: unmatched parentheses on line ${i + 1}`,
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
    const steps = generateStringsTeachingSteps(dummyQ);
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

export function generateStringsHints(question: TopicQuestion): ProgressiveHint[] {
  const codeLines = question.referenceCode
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const keyLine = codeLines[codeLines.length - 1] || codeLines[0] || '';

  return [
    {
      level: 1,
      name: 'Level 1: String Concept Hint',
      badge: '💡 String Operation Hint',
      hintHinglish: `इस सवाल में हमें String के Index, Slice या Built-in Method का सही उपयोग करना है। मुख्य Operation \`${keyLine}\` पर ध्यान दें।`,
      hintEnglish: `Focus on the core String operation or method in \`${keyLine}\`. Remember that Python strings are 0-indexed and immutable.`,
    },
    {
      level: 2,
      name: 'Level 2: Expected Output & Syntax',
      badge: '📐 Syntax & Output Structure',
      hintHinglish: `सुनिश्चित करें कि Quotes और Brackets सही से बंद हैं और Output बिल्कुल \`${question.sampleOutput.replace(
        /\n/g,
        ' | '
      )}\` जैसा आए।`,
      hintEnglish: `Ensure all quotes and parentheses match and your output matches: \`${question.sampleOutput.replace(
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

export function buildStringsQuestionConfig(
  topicId: string,
  q: TopicQuestion
): QuestionV5Config {
  const teachingSteps = generateStringsTeachingSteps(q);
  const hints = generateStringsHints(q);
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
          message: '🎉 Excellent! Your String operation and output match 100%!',
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
