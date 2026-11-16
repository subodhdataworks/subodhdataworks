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
} from './operatorsVisualEngine';

export function isConditionalsTopic(topicId: string): boolean {
  return topicId.startsWith('py_03_conditionals');
}

interface RuntimeVal {
  val: any;
  type: 'Integer' | 'Float' | 'Boolean' | 'String' | 'List' | 'Tuple' | 'Dict' | 'NoneType';
}

function formatVal(v: RuntimeVal | undefined): string {
  if (!v || v.type === 'NoneType') return 'None';
  if (v.type === 'Boolean') return v.val ? 'True' : 'False';
  if (v.type === 'String') return `"${v.val}"`;
  if (v.type === 'Tuple') {
    const items = (v.val as any[]).map((x) => (typeof x === 'string' ? `'${x}'` : String(x)));
    return `(${items.join(', ')})`;
  }
  if (v.type === 'List') {
    const items = (v.val as any[]).map((x) => (typeof x === 'string' ? `'${x}'` : String(x)));
    return `[${items.join(', ')}]`;
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
  return { val: String(raw), type: 'String' };
}

function isTruthy(v: RuntimeVal): boolean {
  if (v.type === 'NoneType') return false;
  if (v.type === 'Boolean') return Boolean(v.val);
  if (v.type === 'Integer' || v.type === 'Float') return Number(v.val) !== 0;
  if (v.type === 'String' || v.type === 'List' || v.type === 'Tuple') return v.val.length > 0;
  return Boolean(v.val);
}

const CONDITIONAL_OPERATOR_META: Record<
  string,
  {
    nameEn: string;
    meaningHi: string;
    meaningEn: string;
  }
> = {
  '==': {
    nameEn: 'Equal To Comparison Operator (==)',
    meaningHi:
      '`==` Comparison Operator दोनों Operands की Values को Compare करता है। अगर दोनों बराबर हैं तो `True` Return करता है, वरना `False`।',
    meaningEn:
      '`==` compares both operands and returns `True` if they are equal, otherwise `False`.',
  },
  '!=': {
    nameEn: 'Not Equal To Comparison Operator (!=)',
    meaningHi:
      '`!=` Comparison Operator Check करता है कि दोनों Values अलग-अलग हैं या नहीं। अलग होने पर `True` और बराबर होने पर `False` Return करता है।',
    meaningEn:
      '`!=` returns `True` if the two values are different, and `False` if they are equal.',
  },
  '>': {
    nameEn: 'Greater Than Operator (>)',
    meaningHi:
      '`>` Comparison Operator Check करता है कि Left Value, Right Value से बड़ी है या नहीं।',
    meaningEn:
      '`>` checks whether the left operand is strictly greater than the right operand.',
  },
  '<': {
    nameEn: 'Less Than Operator (<)',
    meaningHi:
      '`<` Comparison Operator Check करता है कि Left Value, Right Value से छोटी है या नहीं।',
    meaningEn:
      '`<` checks whether the left operand is strictly less than the right operand.',
  },
  '>=': {
    nameEn: 'Greater Than or Equal To (>=)',
    meaningHi:
      '`>=` Comparison Operator Check करता है कि Left Value, Right Value से बड़ी या उसके बराबर है या नहीं।',
    meaningEn:
      '`>=` checks whether the left operand is greater than or equal to the right operand.',
  },
  '<=': {
    nameEn: 'Less Than or Equal To (<=)',
    meaningHi:
      '`<=` Comparison Operator Check करता है कि Left Value, Right Value से छोटी या उसके बराबर है या नहीं।',
    meaningEn:
      '`<=` checks whether the left operand is less than or equal to the right operand.',
  },
  and: {
    nameEn: 'Logical AND Operator (and)',
    meaningHi:
      '`and` Logical Operator तभी `True` देता है जब उसकी दोनों Conditions `True` हों। अगर पहली Condition `False` हो, तो Short-Circuit Evaluation के कारण दूसरी Condition Check नहीं होती।',
    meaningEn:
      '`and` returns `True` only when both conditions are `True`. If the first is `False`, it short-circuits.',
  },
  or: {
    nameEn: 'Logical OR Operator (or)',
    meaningHi:
      '`or` Logical Operator तब `True` देता है जब कम से कम एक Condition `True` हो। अगर पहली Condition `True` हो, तो Short-Circuit Evaluation के कारण दूसरी Condition Skip हो जाती है।',
    meaningEn:
      '`or` returns `True` if at least one condition is `True`. If the first is `True`, it short-circuits.',
  },
  not: {
    nameEn: 'Logical NOT Operator (not)',
    meaningHi:
      '`not` Logical Operator किसी Boolean Result को Invert (उल्टा) कर देता है — `True` को `False` और `False` को `True` बनाता है।',
    meaningEn:
      '`not` inverts a Boolean value — turning `True` into `False` and `False` into `True`.',
  },
};

// ─── EXPRESSION PARSER & EVALUATOR WITH TRACE ───

type ExprNode =
  | { kind: 'literal'; val: RuntimeVal; raw: string }
  | { kind: 'var'; name: string; raw: string }
  | { kind: 'unary'; op: string; arg: ExprNode; raw: string }
  | { kind: 'binary'; op: string; left: ExprNode; right: ExprNode; raw: string }
  | { kind: 'chained_cmp'; ops: string[]; operands: ExprNode[]; raw: string }
  | { kind: 'ternary'; body: ExprNode; cond: ExprNode; orelse: ExprNode; raw: string }
  | { kind: 'call'; fn: string; args: ExprNode[]; raw: string }
  | { kind: 'index'; target: ExprNode; index: ExprNode; raw: string }
  | { kind: 'tuple'; items: ExprNode[]; raw: string }
  | { kind: 'list'; items: ExprNode[]; raw: string }
  | { kind: 'fstring'; template: string; raw: string }
  | { kind: 'any_gen'; raw: string };

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
      // Check if it is a tuple like (0, 8) or (x, y) at top level
      if (splitTopLevelArgs(str.slice(1, -1)).length > 1) {
        break;
      }
      str = str.slice(1, -1).trim();
    } else {
      break;
    }
  }
  return str;
}

export function splitTopLevelArgs(s: string, delimiter = ','): string[] {
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
  let foundIdx = -1;
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
      foundIdx = i;
      // For left-to-right short-circuit evaluation of `and` / `or`, split at the first top-level occurrence
      return foundIdx;
    }
  }
  return foundIdx;
}

function splitTopLevelComparisons(s: string): { ops: string[]; operands: string[] } | null {
  const cmpOps = ['==', '!=', '>=', '<=', '>', '<'];
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
      if (s.slice(i, i + op.length) === op) {
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
        if (op === '+' || op === '-') {
          const before = s.slice(0, i).trim();
          if (!before || /[+\-*/%(,<>=!]$/.test(before)) continue;
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

export function parseExpr(rawInput: string): ExprNode {
  const s = stripOuterParens(rawInput);

  // Special generator expression in CD-11-11: any(x < 0 or x > 100 for x in [m1, m2, m3, att])
  if (s.startsWith('any(') && s.includes(' for ') && s.endsWith(')')) {
    return { kind: 'any_gen', raw: s };
  }

  // f-string: f"..." or f'...'
  if ((s.startsWith('f"') && s.endsWith('"')) || (s.startsWith("f'") && s.endsWith("'"))) {
    return { kind: 'fstring', template: s.slice(2, -1), raw: s };
  }

  // Ternary expression: body if cond else orelse
  const tern = findTopLevelTernary(s);
  if (tern) {
    return {
      kind: 'ternary',
      body: parseExpr(tern.body),
      cond: parseExpr(tern.cond),
      orelse: parseExpr(tern.orelse),
      raw: s,
    };
  }

  // 1. Logical OR
  const orIdx = findTopLevelKeywordOp(s, 'or');
  if (orIdx !== -1) {
    return {
      kind: 'binary',
      op: 'or',
      left: parseExpr(s.slice(0, orIdx)),
      right: parseExpr(s.slice(orIdx + 2)),
      raw: s,
    };
  }

  // 2. Logical AND
  const andIdx = findTopLevelKeywordOp(s, 'and');
  if (andIdx !== -1) {
    return {
      kind: 'binary',
      op: 'and',
      left: parseExpr(s.slice(0, andIdx)),
      right: parseExpr(s.slice(andIdx + 3)),
      raw: s,
    };
  }

  // 3. Logical NOT
  if (/^not(?:\s+|\()/.test(s)) {
    const argStr = s.replace(/^not\s*/, '');
    return {
      kind: 'unary',
      op: 'not',
      arg: parseExpr(argStr),
      raw: s,
    };
  }

  // 4. Comparisons (single or chained like a == b == c)
  const cmpSplit = splitTopLevelComparisons(s);
  if (cmpSplit) {
    if (cmpSplit.ops.length === 1) {
      return {
        kind: 'binary',
        op: cmpSplit.ops[0],
        left: parseExpr(cmpSplit.operands[0]),
        right: parseExpr(cmpSplit.operands[1]),
        raw: s,
      };
    }
    return {
      kind: 'chained_cmp',
      ops: cmpSplit.ops,
      operands: cmpSplit.operands.map(parseExpr),
      raw: s,
    };
  }

  // 5. Addition / Subtraction
  const addSub = findTopLevelBinarySymbol(s, ['+', '-']);
  if (addSub) {
    return {
      kind: 'binary',
      op: addSub.op,
      left: parseExpr(s.slice(0, addSub.idx)),
      right: parseExpr(s.slice(addSub.idx + addSub.op.length)),
      raw: s,
    };
  }

  // 6. Multiplication / Division / Floor Division / Modulo
  const mulDiv = findTopLevelBinarySymbol(s, ['//', '*', '/', '%']);
  if (mulDiv) {
    return {
      kind: 'binary',
      op: mulDiv.op,
      left: parseExpr(s.slice(0, mulDiv.idx)),
      right: parseExpr(s.slice(mulDiv.idx + mulDiv.op.length)),
      raw: s,
    };
  }

  // 7. Unary + / -
  if ((s.startsWith('-') || s.startsWith('+')) && !/^[-+]\d+(\.\d+)?$/.test(s)) {
    return {
      kind: 'unary',
      op: s[0],
      arg: parseExpr(s.slice(1)),
      raw: s,
    };
  }

  // 8. Exponentiation **
  const powMatch = findTopLevelBinarySymbol(s, ['**'], true);
  if (powMatch) {
    return {
      kind: 'binary',
      op: '**',
      left: parseExpr(s.slice(0, powMatch.idx)),
      right: parseExpr(s.slice(powMatch.idx + 2)),
      raw: s,
    };
  }

  // 9. Method chains on input() or variables: e.g. input().strip(), input().lower().strip(), text.split()
  if (
    /^input\(\s*\)(?:\.(?:strip|lower|upper)\(\s*\))+$/.test(s) ||
    /^[a-zA-Z_][a-zA-Z0-9_]*\.(?:strip|lower|upper|split)\(\s*\)$/.test(s)
  ) {
    return { kind: 'call', fn: s, args: [], raw: s };
  }

  // 10. Indexing: items[0]
  const idxMatch = s.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[(.+)\]$/);
  if (idxMatch) {
    return {
      kind: 'index',
      target: parseExpr(idxMatch[1]),
      index: parseExpr(idxMatch[2]),
      raw: s,
    };
  }

  // 11. Function call: int(...), float(...), str(...), bool(...), len(...), check(), input()
  const callMatch = s.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\((.*)\)$/);
  if (callMatch) {
    const fn = callMatch[1];
    const inner = callMatch[2].trim();
    const args = inner ? splitTopLevelArgs(inner).map(parseExpr) : [];
    return { kind: 'call', fn, args, raw: s };
  }

  // 12. Tuple literal: (x, y) or (0, 8)
  if (s.startsWith('(') && s.endsWith(')')) {
    const inner = s.slice(1, -1).trim();
    const parts = splitTopLevelArgs(inner);
    if (parts.length > 1) {
      return { kind: 'tuple', items: parts.map(parseExpr), raw: s };
    }
  }

  // 13. List literal: [a, b, c]
  if (s.startsWith('[') && s.endsWith(']')) {
    const inner = s.slice(1, -1).trim();
    const items = inner ? splitTopLevelArgs(inner).map(parseExpr) : [];
    return { kind: 'list', items, raw: s };
  }

  // 14. String literal
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return {
      kind: 'literal',
      val: inferRuntimeVal(s.slice(1, -1)),
      raw: s,
    };
  }

  // 15. Boolean / None literal
  if (s === 'True') return { kind: 'literal', val: inferRuntimeVal(true), raw: s };
  if (s === 'False') return { kind: 'literal', val: inferRuntimeVal(false), raw: s };
  if (s === 'None') return { kind: 'literal', val: inferRuntimeVal(null), raw: s };

  // 16. Numeric literal
  if (/^[-+]?\d+(\.\d+)?$/.test(s)) {
    const isF = s.includes('.');
    return {
      kind: 'literal',
      val: inferRuntimeVal(Number(s), isF),
      raw: s,
    };
  }

  // 17. Variable reference
  return { kind: 'var', name: s, raw: s };
}

export interface EvalTraceContext {
  env: Record<string, RuntimeVal>;
  funcs: Record<string, { bodyLines: string[]; returnVal: RuntimeVal }>;
  inputs: string[];
  inputCursor: number;
  stdoutLines: string[];
  intermediateSteps: IntermediateEvalStep[];
  evaluatedOperands: EvaluatedOperandInfo[];
  primaryOperator?: string;
  shortCircuitNote?: string;
}

export function evalExpr(node: ExprNode, ctx: EvalTraceContext): RuntimeVal {
  switch (node.kind) {
    case 'literal':
      return node.val;

    case 'var': {
      const found = ctx.env[node.name];
      if (!found) {
        return inferRuntimeVal(0);
      }
      return found;
    }

    case 'tuple': {
      const vals = node.items.map((it) => evalExpr(it, ctx).val);
      return { val: vals, type: 'Tuple' };
    }

    case 'list': {
      const vals = node.items.map((it) => evalExpr(it, ctx).val);
      return { val: vals, type: 'List' };
    }

    case 'index': {
      const targetVal = evalExpr(node.target, ctx);
      const idxVal = evalExpr(node.index, ctx);
      const arr = Array.isArray(targetVal.val) ? targetVal.val : [];
      const item = arr[Number(idxVal.val)];
      const res = inferRuntimeVal(item);
      ctx.intermediateSteps.push({
        expr: `${node.raw}`,
        result: formatVal(res),
        rule: `Index ${idxVal.val} lookup`,
      });
      return res;
    }

    case 'fstring': {
      const rendered = node.template.replace(/\{([^}]+)\}/g, (_, exprStr) => {
        const subNode = parseExpr(exprStr.trim());
        const subVal = evalExpr(subNode, ctx);
        return formatPrintVal(subVal);
      });
      return inferRuntimeVal(rendered);
    }

    case 'any_gen': {
      // e.g. any(x < 0 or x > 100 for x in [m1, m2, m3, att])
      const m = node.raw.match(/^any\((.+)\s+for\s+([a-zA-Z_]\w*)\s+in\s+\[(.+)\]\)$/);
      if (m) {
        const condStr = m[1].trim();
        const varName = m[2].trim();
        const listItems = splitTopLevelArgs(m[3]).map((it) => evalExpr(parseExpr(it), ctx));
        let anyTrue = false;
        for (const itemVal of listItems) {
          const prev = ctx.env[varName];
          ctx.env[varName] = itemVal;
          const cRes = evalExpr(parseExpr(condStr), ctx);
          if (prev !== undefined) ctx.env[varName] = prev;
          else delete ctx.env[varName];
          if (isTruthy(cRes)) {
            anyTrue = true;
            break;
          }
        }
        const res = inferRuntimeVal(anyTrue);
        ctx.intermediateSteps.push({
          expr: node.raw,
          result: formatVal(res),
          rule: `any() checks if any value in [${m[3]}] satisfies (${condStr})`,
        });
        return res;
      }
      return inferRuntimeVal(false);
    }

    case 'call': {
      // Handle method chains on input(): input().strip(), input().lower().strip(), etc.
      if (node.fn.startsWith('input()')) {
        let rawIn = ctx.inputCursor < ctx.inputs.length ? ctx.inputs[ctx.inputCursor++] : '';
        if (node.fn.includes('.strip()')) rawIn = rawIn.trim();
        if (node.fn.includes('.lower()')) rawIn = rawIn.toLowerCase();
        if (node.fn.includes('.upper()')) rawIn = rawIn.toUpperCase();
        const res = inferRuntimeVal(rawIn);
        ctx.intermediateSteps.push({
          expr: node.raw,
          result: formatVal(res),
          rule: `Reads input string and applies string methods`,
        });
        return res;
      }

      // Handle variable method call: e.g. text.split()
      if (node.fn.endsWith('.split()')) {
        const varName = node.fn.replace('.split()', '').trim();
        const strVal = String(ctx.env[varName]?.val ?? '').trim();
        const parts = strVal ? strVal.split(/\s+/) : [];
        return inferRuntimeVal(parts);
      }

      if (node.fn === 'input') {
        const rawIn = ctx.inputCursor < ctx.inputs.length ? ctx.inputs[ctx.inputCursor++] : '';
        const res = inferRuntimeVal(rawIn);
        ctx.intermediateSteps.push({
          expr: 'input()',
          result: formatVal(res),
          rule: `Reads line from standard input as String`,
        });
        return res;
      }

      if (node.fn === 'int') {
        const argVal = node.args[0] ? evalExpr(node.args[0], ctx) : inferRuntimeVal(0);
        const res = inferRuntimeVal(Math.trunc(Number(argVal.val)), false);
        ctx.intermediateSteps.push({
          expr: `int(${formatVal(argVal)})`,
          result: formatVal(res),
          rule: `Converts ${argVal.type} to Integer`,
        });
        return res;
      }

      if (node.fn === 'float') {
        const argVal = node.args[0] ? evalExpr(node.args[0], ctx) : inferRuntimeVal(0, true);
        const res = inferRuntimeVal(Number(argVal.val), true);
        ctx.intermediateSteps.push({
          expr: `float(${formatVal(argVal)})`,
          result: formatVal(res),
          rule: `Converts ${argVal.type} to Float`,
        });
        return res;
      }

      if (node.fn === 'bool') {
        const argVal = node.args[0] ? evalExpr(node.args[0], ctx) : inferRuntimeVal(false);
        const truth = isTruthy(argVal);
        const res = inferRuntimeVal(truth);
        ctx.evaluatedOperands.push({
          label: 'Operand',
          expr: node.args[0]?.raw || '',
          value: formatVal(argVal),
          dataType: argVal.type,
        });
        ctx.intermediateSteps.push({
          expr: `bool(${formatVal(argVal)})`,
          result: formatVal(res),
          rule: truth
            ? `${formatVal(argVal)} is Non-Zero / Non-Empty (Truthy ➔ True)`
            : `${formatVal(argVal)} is Zero / Empty (Falsy ➔ False)`,
        });
        return res;
      }

      if (node.fn === 'len') {
        const argVal = node.args[0] ? evalExpr(node.args[0], ctx) : inferRuntimeVal([]);
        const length = argVal.val?.length ?? 0;
        const res = inferRuntimeVal(length);
        ctx.intermediateSteps.push({
          expr: `len(${ node.args[0]?.raw || '' })`,
          result: formatVal(res),
          rule: `Length is ${length}`,
        });
        return res;
      }

      // User-defined function call like check() in CD-08-01 / CD-08-02
      if (ctx.funcs[node.fn]) {
        const fnDef = ctx.funcs[node.fn];
        for (const bLine of fnDef.bodyLines) {
          const pm = bLine.match(/^print\((.*)\)$/);
          if (pm) {
            const pVal = evalExpr(parseExpr(pm[1]), ctx);
            ctx.stdoutLines.push(formatPrintVal(pVal));
          }
        }
        return fnDef.returnVal;
      }

      return inferRuntimeVal(null);
    }

    case 'ternary': {
      const condVal = evalExpr(node.cond, ctx);
      const condBool = isTruthy(condVal);
      if (condBool) {
        const bodyVal = evalExpr(node.body, ctx);
        ctx.intermediateSteps.push({
          expr: `${node.cond.raw} ➔ True`,
          result: `Selects ${formatVal(bodyVal)} (skips ${node.orelse.raw})`,
          rule: 'Conditional Expression (Ternary True Branch)',
        });
        return bodyVal;
      } else {
        const elseVal = evalExpr(node.orelse, ctx);
        ctx.intermediateSteps.push({
          expr: `${node.cond.raw} ➔ False`,
          result: `Selects ${formatVal(elseVal)} (skips ${node.body.raw})`,
          rule: 'Conditional Expression (Ternary False Branch)',
        });
        return elseVal;
      }
    }

    case 'chained_cmp': {
      // e.g. a == b == c
      const evaledOperands: RuntimeVal[] = [];
      for (let i = 0; i < node.operands.length; i++) {
        const opnd = node.operands[i];
        const v = evalExpr(opnd, ctx);
        evaledOperands.push(v);
        ctx.evaluatedOperands.push({
          label: `Operand ${i + 1}`,
          expr: opnd.raw,
          value: formatVal(v),
          dataType: v.type,
        });
      }
      let allTrue = true;
      for (let i = 0; i < node.ops.length; i++) {
        const op = node.ops[i];
        const lv = evaledOperands[i].val;
        const rv = evaledOperands[i + 1].val;
        const pairOk =
          op === '=='
            ? lv === rv
            : op === '!='
            ? lv !== rv
            : op === '>'
            ? lv > rv
            : op === '<'
            ? lv < rv
            : op === '>='
            ? lv >= rv
            : lv <= rv;
        ctx.intermediateSteps.push({
          expr: `${formatVal(evaledOperands[i])} ${op} ${formatVal(evaledOperands[i + 1])}`,
          result: pairOk ? 'True' : 'False',
          rule: `Chained Comparison step ${i + 1}`,
        });
        if (!pairOk) {
          allTrue = false;
          break;
        }
      }
      ctx.primaryOperator = node.ops[0];
      return inferRuntimeVal(allTrue);
    }

    case 'unary': {
      const argVal = evalExpr(node.arg, ctx);
      ctx.primaryOperator = node.op;
      ctx.evaluatedOperands.push({
        label: 'Operand',
        expr: node.arg.raw,
        value: formatVal(argVal),
        dataType: argVal.type,
      });
      let res: RuntimeVal;
      if (node.op === 'not') {
        res = inferRuntimeVal(!isTruthy(argVal));
      } else if (node.op === '-') {
        res = inferRuntimeVal(-Number(argVal.val), argVal.type === 'Float');
      } else {
        res = inferRuntimeVal(+Number(argVal.val), argVal.type === 'Float');
      }
      ctx.intermediateSteps.push({
        expr: `${node.op === 'not' ? 'not ' : node.op}${formatVal(argVal)}`,
        result: formatVal(res),
        rule: CONDITIONAL_OPERATOR_META[node.op]?.nameEn || `Unary ${node.op}`,
      });
      return res;
    }

    case 'binary': {
      const op = node.op;

      // Short-circuit Logical AND / OR
      if (op === 'and') {
        const leftVal = evalExpr(node.left, ctx);
        const leftTruth = isTruthy(leftVal);
        ctx.evaluatedOperands.push({
          label: 'Left Condition',
          expr: node.left.raw,
          value: formatVal(leftVal),
          dataType: leftVal.type,
        });
        if (!leftTruth) {
          ctx.primaryOperator = 'and';
          ctx.shortCircuitNote = `Left condition (${node.left.raw}) False है, इसलिए 'and' ने Short-Circuit किया और Right condition (${node.right.raw}) को Skip कर दिया!`;
          ctx.intermediateSteps.push({
            expr: `${formatVal(leftVal)} and (${node.right.raw})`,
            result: `${formatVal(leftVal)} (Short-Circuit: Right side skipped)`,
            rule: 'Short-Circuit AND Evaluation',
          });
          return leftVal;
        }
        const rightVal = evalExpr(node.right, ctx);
        ctx.evaluatedOperands.push({
          label: 'Right Condition',
          expr: node.right.raw,
          value: formatVal(rightVal),
          dataType: rightVal.type,
        });
        ctx.primaryOperator = 'and';
        ctx.intermediateSteps.push({
          expr: `${formatVal(leftVal)} and ${formatVal(rightVal)}`,
          result: formatVal(rightVal),
          rule: CONDITIONAL_OPERATOR_META.and.nameEn,
        });
        return rightVal;
      }

      if (op === 'or') {
        const leftVal = evalExpr(node.left, ctx);
        const leftTruth = isTruthy(leftVal);
        ctx.evaluatedOperands.push({
          label: 'Left Condition',
          expr: node.left.raw,
          value: formatVal(leftVal),
          dataType: leftVal.type,
        });
        if (leftTruth) {
          ctx.primaryOperator = 'or';
          ctx.shortCircuitNote = `Left condition (${node.left.raw}) True है, इसलिए 'or' ने Short-Circuit किया और Right condition (${node.right.raw}) को Skip कर दिया!`;
          ctx.intermediateSteps.push({
            expr: `${formatVal(leftVal)} or (${node.right.raw})`,
            result: `${formatVal(leftVal)} (Short-Circuit: Right side skipped)`,
            rule: 'Short-Circuit OR Evaluation',
          });
          return leftVal;
        }
        const rightVal = evalExpr(node.right, ctx);
        ctx.evaluatedOperands.push({
          label: 'Right Condition',
          expr: node.right.raw,
          value: formatVal(rightVal),
          dataType: rightVal.type,
        });
        ctx.primaryOperator = 'or';
        ctx.intermediateSteps.push({
          expr: `${formatVal(leftVal)} or ${formatVal(rightVal)}`,
          result: formatVal(rightVal),
          rule: CONDITIONAL_OPERATOR_META.or.nameEn,
        });
        return rightVal;
      }

      const leftVal = evalExpr(node.left, ctx);
      const rightVal = evalExpr(node.right, ctx);
      ctx.primaryOperator = op;

      ctx.evaluatedOperands.push(
        {
          label: 'Left Operand',
          expr: node.left.raw,
          value: formatVal(leftVal),
          dataType: leftVal.type,
        },
        {
          label: 'Right Operand',
          expr: node.right.raw,
          value: formatVal(rightVal),
          dataType: rightVal.type,
        }
      );

      const lv = leftVal.val;
      const rv = rightVal.val;
      const isFloatOp = leftVal.type === 'Float' || rightVal.type === 'Float';
      let res: RuntimeVal;

      switch (op) {
        case '+':
          if (leftVal.type === 'String' || rightVal.type === 'String') {
            res = inferRuntimeVal(String(lv) + String(rv));
          } else {
            res = inferRuntimeVal(Number(lv) + Number(rv), isFloatOp);
          }
          break;
        case '-':
          res = inferRuntimeVal(Number(lv) - Number(rv), isFloatOp);
          break;
        case '*':
          res = inferRuntimeVal(Number(lv) * Number(rv), isFloatOp);
          break;
        case '/':
          res = inferRuntimeVal(Number(lv) / Number(rv), true);
          break;
        case '//':
          res = inferRuntimeVal(Math.floor(Number(lv) / Number(rv)), isFloatOp);
          break;
        case '%': {
          const n = Number(lv);
          const d = Number(rv);
          const mod = ((n % d) + d) % d;
          res = inferRuntimeVal(mod, isFloatOp);
          break;
        }
        case '**':
          res = inferRuntimeVal(Math.pow(Number(lv), Number(rv)), isFloatOp);
          break;
        case '==':
          res = inferRuntimeVal(lv === rv);
          break;
        case '!=':
          res = inferRuntimeVal(lv !== rv);
          break;
        case '>':
          res = inferRuntimeVal(lv > rv);
          break;
        case '<':
          res = inferRuntimeVal(lv < rv);
          break;
        case '>=':
          res = inferRuntimeVal(lv >= rv);
          break;
        case '<=':
          res = inferRuntimeVal(lv <= rv);
          break;
        default:
          res = inferRuntimeVal(null);
      }

      ctx.intermediateSteps.push({
        expr: `${formatVal(leftVal)} ${op} ${formatVal(rightVal)}`,
        result: formatVal(res),
        rule: CONDITIONAL_OPERATOR_META[op]?.nameEn || `Operator ${op}`,
      });

      return res;
    }
  }
}

// ─── INDENTATION BLOCK AST PARSER ───

interface SourceLine {
  lineNum: number; // 1-indexed
  raw: string;
  indent: number;
  trimmed: string;
}

type StmtNode =
  | {
      kind: 'simple';
      line: SourceLine;
    }
  | {
      kind: 'if_chain';
      branches: {
        branchType: 'if' | 'elif' | 'else';
        headerLine: SourceLine;
        condExpr?: string;
        body: StmtNode[];
        endLineNum: number;
      }[];
      isNested: boolean;
    }
  | {
      kind: 'match';
      headerLine: SourceLine;
      subjectExpr: string;
      cases: {
        headerLine: SourceLine;
        patternExpr: string;
        body: StmtNode[];
        endLineNum: number;
      }[];
    }
  | {
      kind: 'def';
      headerLine: SourceLine;
      fnName: string;
      bodyLines: SourceLine[];
    }
  | {
      kind: 'try_except';
      tryLine: SourceLine;
      tryBody: StmtNode[];
      exceptLine: SourceLine;
      exceptBody: StmtNode[];
    };

function getLastLineNum(nodes: StmtNode[], fallback: number): number {
  if (nodes.length === 0) return fallback;
  const last = nodes[nodes.length - 1];
  if (last.kind === 'simple') return last.line.lineNum;
  if (last.kind === 'if_chain') {
    const lastB = last.branches[last.branches.length - 1];
    return lastB.endLineNum;
  }
  if (last.kind === 'match') {
    const lastC = last.cases[last.cases.length - 1];
    return lastC ? lastC.endLineNum : last.headerLine.lineNum;
  }
  if (last.kind === 'def') {
    const lastL = last.bodyLines[last.bodyLines.length - 1];
    return lastL ? lastL.lineNum : last.headerLine.lineNum;
  }
  if (last.kind === 'try_except') {
    return getLastLineNum(last.exceptBody, last.exceptLine.lineNum);
  }
  return fallback;
}

function parseBlock(
  lines: SourceLine[],
  startIdx: number,
  minIndent: number,
  isNested = false
): { nodes: StmtNode[]; nextIdx: number } {
  const nodes: StmtNode[] = [];
  let i = startIdx;

  while (i < lines.length) {
    const cur = lines[i];
    if (cur.indent < minIndent) break;

    // 1. if / elif / else chain
    if (cur.trimmed.startsWith('if ') && cur.trimmed.endsWith(':')) {
      const branches: {
        branchType: 'if' | 'elif' | 'else';
        headerLine: SourceLine;
        condExpr?: string;
        body: StmtNode[];
        endLineNum: number;
      }[] = [];

      const baseIndent = cur.indent;
      while (i < lines.length && lines[i].indent === baseIndent) {
        const hdr = lines[i];
        if (hdr.trimmed.startsWith('if ') && hdr.trimmed.endsWith(':')) {
          if (branches.length > 0) break; // A new independent `if` statement at the same indent!
          const condExpr = hdr.trimmed.slice(3, -1).trim();
          const bodyRes = parseBlock(lines, i + 1, baseIndent + 1, true);
          branches.push({
            branchType: 'if',
            headerLine: hdr,
            condExpr,
            body: bodyRes.nodes,
            endLineNum: getLastLineNum(bodyRes.nodes, hdr.lineNum),
          });
          i = bodyRes.nextIdx;
        } else if (hdr.trimmed.startsWith('elif ') && hdr.trimmed.endsWith(':')) {
          const condExpr = hdr.trimmed.slice(5, -1).trim();
          const bodyRes = parseBlock(lines, i + 1, baseIndent + 1, true);
          branches.push({
            branchType: 'elif',
            headerLine: hdr,
            condExpr,
            body: bodyRes.nodes,
            endLineNum: getLastLineNum(bodyRes.nodes, hdr.lineNum),
          });
          i = bodyRes.nextIdx;
        } else if (hdr.trimmed === 'else:') {
          const bodyRes = parseBlock(lines, i + 1, baseIndent + 1, true);
          branches.push({
            branchType: 'else',
            headerLine: hdr,
            body: bodyRes.nodes,
            endLineNum: getLastLineNum(bodyRes.nodes, hdr.lineNum),
          });
          i = bodyRes.nextIdx;
          break;
        } else {
          break;
        }
      }

      nodes.push({ kind: 'if_chain', branches, isNested });
      continue;
    }

    // 2. match / case block
    if (cur.trimmed.startsWith('match ') && cur.trimmed.endsWith(':')) {
      const subjectExpr = cur.trimmed.slice(6, -1).trim();
      const baseIndent = cur.indent;
      i++;
      const cases: {
        headerLine: SourceLine;
        patternExpr: string;
        body: StmtNode[];
        endLineNum: number;
      }[] = [];

      while (i < lines.length && lines[i].indent > baseIndent) {
        const caseHdr = lines[i];
        if (caseHdr.trimmed.startsWith('case ') && caseHdr.trimmed.endsWith(':')) {
          const patternExpr = caseHdr.trimmed.slice(5, -1).trim();
          const bodyRes = parseBlock(lines, i + 1, caseHdr.indent + 1, true);
          cases.push({
            headerLine: caseHdr,
            patternExpr,
            body: bodyRes.nodes,
            endLineNum: getLastLineNum(bodyRes.nodes, caseHdr.lineNum),
          });
          i = bodyRes.nextIdx;
        } else {
          i++;
        }
      }

      nodes.push({
        kind: 'match',
        headerLine: cur,
        subjectExpr,
        cases,
      });
      continue;
    }

    // 3. Function definition: def check():
    if (cur.trimmed.startsWith('def ') && cur.trimmed.endsWith(':')) {
      const m = cur.trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(/);
      const fnName = m ? m[1] : 'func';
      const baseIndent = cur.indent;
      i++;
      const bodyLines: SourceLine[] = [];
      while (i < lines.length && lines[i].indent > baseIndent) {
        bodyLines.push(lines[i]);
        i++;
      }
      nodes.push({
        kind: 'def',
        headerLine: cur,
        fnName,
        bodyLines,
      });
      continue;
    }

    // 4. try / except block (used in CD-08-06)
    if (cur.trimmed === 'try:') {
      const baseIndent = cur.indent;
      const tryRes = parseBlock(lines, i + 1, baseIndent + 1, isNested);
      i = tryRes.nextIdx;
      let exceptLine = cur;
      let exceptBody: StmtNode[] = [];
      if (i < lines.length && lines[i].indent === baseIndent && lines[i].trimmed.startsWith('except')) {
        exceptLine = lines[i];
        const excRes = parseBlock(lines, i + 1, baseIndent + 1, isNested);
        exceptBody = excRes.nodes;
        i = excRes.nextIdx;
      }
      nodes.push({
        kind: 'try_except',
        tryLine: cur,
        tryBody: tryRes.nodes,
        exceptLine,
        exceptBody,
      });
      continue;
    }

    // 5. Simple statement (assignment or print)
    nodes.push({ kind: 'simple', line: cur });
    i++;
  }

  return { nodes, nextIdx: i };
}

function matchPattern(subjectVal: RuntimeVal, patternExpr: string): boolean {
  const p = patternExpr.trim();
  if (p === '_') return true;

  // OR pattern: case 1 | 2 | 3 | 4 | 5:
  if (p.includes('|')) {
    const subPatterns = p.split('|').map((sp) => sp.trim());
    return subPatterns.some((sp) => matchPattern(subjectVal, sp));
  }

  // Tuple pattern: case (0, 0): or case (0, _):
  if (p.startsWith('(') && p.endsWith(')') && subjectVal.type === 'Tuple') {
    const subParts = splitTopLevelArgs(p.slice(1, -1));
    const tupleArr = subjectVal.val as any[];
    if (subParts.length !== tupleArr.length) return false;
    for (let i = 0; i < subParts.length; i++) {
      if (!matchPattern(inferRuntimeVal(tupleArr[i]), subParts[i])) {
        return false;
      }
    }
    return true;
  }

  // Literal pattern
  if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) {
    return subjectVal.val === p.slice(1, -1);
  }
  if (/^[-+]?\d+(\.\d+)?$/.test(p)) {
    return Number(subjectVal.val) === Number(p);
  }
  return String(subjectVal.val) === p;
}

// ─── STEP GENERATOR & SANDBOX RUNNER ───

interface RawStepDraft {
  title: string;
  conceptKey: string;
  speechHinglish: string;
  speechEnglish: string;
  cardExplanationHinglish: string;
  cardExplanationEnglish: string;
  visualTarget: string;
  visualLabel: string;
  visualSublabel: string;
  consoleOutput: string;
  isConsoleVisible: boolean;
  highlightLine: number;
  highlightToken: string;
  conceptBoxes: ConceptBox[];
  operatorDetails: OperatorVisualDetails;
}

function takeEnvSnapshots(
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

export function generateConditionalsTeachingSteps(question: TopicQuestion): TeachingStep[] {
  const rawLines = question.referenceCode.split('\n');
  const sourceLines: SourceLine[] = [];

  for (let idx = 0; idx < rawLines.length; idx++) {
    const raw = rawLines[idx];
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const indentMatch = raw.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1].length : 0;
    sourceLines.push({
      lineNum: idx + 1,
      raw,
      indent,
      trimmed,
    });
  }

  const ast = parseBlock(sourceLines, 0, 0, false).nodes;
  const env: Record<string, RuntimeVal> = {};
  const funcs: Record<string, { bodyLines: string[]; returnVal: RuntimeVal }> = {};
  const inputs = question.sampleInput ? question.sampleInput.split('\n') : [];
  let inputCursor = 0;
  const stdoutLines: string[] = [];
  const drafts: RawStepDraft[] = [];

  function executeNodes(nodes: StmtNode[]) {
    for (const node of nodes) {
      if (node.kind === 'def') {
        let retVal = inferRuntimeVal(null);
        const bodyStrs: string[] = [];
        for (const bl of node.bodyLines) {
          if (bl.trimmed.startsWith('return ')) {
            const rExpr = bl.trimmed.slice(7).trim();
            retVal = rExpr === 'True' ? inferRuntimeVal(true) : inferRuntimeVal(false);
          } else {
            bodyStrs.push(bl.trimmed);
          }
        }
        funcs[node.fnName] = { bodyLines: bodyStrs, returnVal: retVal };

        drafts.push({
          title: `Function Definition (${node.fnName})`,
          conceptKey: 'function_def',
          speechHinglish: `Line ${node.headerLine.lineNum} पर हम \`${node.fnName}()\` Function Define कर रहे हैं। यह Function तभी चलेगा जब इसे Call किया जाएगा। Short-Circuit Evaluation में अगर पहली Condition से ही फैसला हो जाए, तो Python इस Function को Call करने से Skip कर देता है।`,
          speechEnglish: `On Line ${node.headerLine.lineNum}, we define \`${node.fnName}()\`. Under short-circuit evaluation, Python skips calling this function if the first operand already determines the result.`,
          cardExplanationHinglish: `Line ${node.headerLine.lineNum}: \`${node.headerLine.trimmed}\` Function Define करता है जो Call होने पर Output Print करके \`${formatVal(retVal)}\` Return करेगा।`,
          cardExplanationEnglish: `Defines helper function \`${node.fnName}()\` returning \`${formatVal(retVal)}\`.`,
          visualTarget: node.fnName,
          visualLabel: `def ${node.fnName}()`,
          visualSublabel: 'Helper Function Definition',
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: node.headerLine.lineNum,
          highlightToken: node.fnName,
          conceptBoxes: [
            { label: `def ${node.fnName}()`, sublabel: 'Function Defined', isActive: true },
            { label: `Returns ${formatVal(retVal)}`, sublabel: 'Return Value', isActive: false },
            { label: 'Indentation: 4 spaces', sublabel: 'Function Body', isActive: false },
          ],
          operatorDetails: {
            visualType: 'indentation_block',
            technicalConcept: 'Function Block & Short-Circuit Helper',
            activeSourceRange: {
              line: node.headerLine.lineNum,
              startCol: node.headerLine.indent + 1,
              endCol: node.headerLine.raw.length,
              codeText: node.headerLine.trimmed,
            },
            indentationInfo: 'Function body indented by 4 spaces',
          },
        });
        continue;
      }

      if (node.kind === 'try_except') {
        executeNodes(node.tryBody);
        continue;
      }

      if (node.kind === 'simple') {
        const line = node.line;
        const ctx: EvalTraceContext = {
          env,
          funcs,
          inputs,
          inputCursor,
          stdoutLines,
          intermediateSteps: [],
          evaluatedOperands: [],
        };

        // 1. print(...) statement
        const printMatch = line.trimmed.match(/^print\((.*)\)$/);
        if (printMatch) {
          const innerStr = printMatch[1].trim();
          const argNodes = innerStr ? splitTopLevelArgs(innerStr).map(parseExpr) : [];
          const printedVals = argNodes.map((an) => evalExpr(an, ctx));
          inputCursor = ctx.inputCursor;

          const printedLine = printedVals.map(formatPrintVal).join(' ');
          stdoutLines.push(printedLine);
          const cumConsole = stdoutLines.join('\n');

          const hasConditionInsidePrint =
            ctx.primaryOperator !== undefined ||
            innerStr.startsWith('bool(') ||
            innerStr.includes(' if ');
          const indentNote =
            line.indent > 0
              ? `यह Statement ${line.indent} Spaces के Indentation के साथ Selected Branch के अंदर है, इसलिए यह Execute हो रहा है।`
              : '';

          let speechHi = `Line ${line.lineNum} पर \`${line.trimmed}\` Execute होता है। ${indentNote} यह Console पर \`${printedLine}\` Print करता है।`;
          let cardHi = `Line ${line.lineNum}: \`${line.trimmed}\` के कारण Console Screen पर \`${printedLine}\` Output आता है। ${indentNote}`;

          if (innerStr.startsWith('bool(')) {
            const opnd = ctx.evaluatedOperands[0];
            speechHi = `Line ${line.lineNum} पर \`${innerStr}\` Check करता है कि Value \`${opnd?.value || ''}\` Truthy है या Falsy। Python में 0 और Empty String \`""\` Falsy (False) होते हैं, जबकि Non-Zero Numbers और Non-Empty Strings Truthy (True) होते हैं। इसलिए Console पर \`${printedLine}\` Print होता है।`;
            cardHi = `Truthy/Falsy Evaluation: \`${innerStr}\` ➔ \`${printedLine}\`। Python में 0 और \`""\` False होते हैं, बाक़ी Non-Empty Values True होती हैं।`;
          } else if (ctx.primaryOperator && CONDITIONAL_OPERATOR_META[ctx.primaryOperator]) {
            const meta = CONDITIONAL_OPERATOR_META[ctx.primaryOperator];
            speechHi = `Line ${line.lineNum} पर पहले Condition \`${innerStr}\` Evaluate होती है। ${meta.meaningHi} यहाँ Result \`${printedLine}\` आता है, जो Console पर Print हो जाता है।`;
            cardHi = `${meta.meaningHi} Evaluation: \`${innerStr}\` ➔ \`${printedLine}\``;
          }

          drafts.push({
            title: hasConditionInsidePrint
              ? `Evaluate & Print (${printedLine})`
              : line.indent > 0
              ? `Execute Selected Block Output (Line ${line.lineNum})`
              : `Console Output (Line ${line.lineNum})`,
            conceptKey: hasConditionInsidePrint ? 'condition_eval' : 'output',
            speechHinglish: speechHi,
            speechEnglish: `Line ${line.lineNum} executes \`${line.trimmed}\` and outputs \`${printedLine}\` to the Console.`,
            cardExplanationHinglish: cardHi,
            cardExplanationEnglish: `Line ${line.lineNum} runs \`${line.trimmed}\` and prints \`${printedLine}\` to the Console.`,
            visualTarget: line.trimmed,
            visualLabel: `Output: ${printedLine}`,
            visualSublabel: line.indent > 0 ? `Indented Block (${line.indent} spaces)` : 'Console Output',
            consoleOutput: cumConsole,
            isConsoleVisible: true,
            highlightLine: line.lineNum,
            highlightToken: 'print',
            conceptBoxes: [
              {
                label: line.indent > 0 ? `Indent: ${line.indent} spaces` : 'print()',
                sublabel: line.indent > 0 ? 'Inside Active Block' : 'Output Function',
                isActive: false,
              },
              {
                label: innerStr,
                sublabel: `Evaluates to ${printedLine}`,
                isActive: true,
              },
              {
                label: `Console: ${printedLine}`,
                sublabel: 'Displayed on Screen',
                isActive: true,
              },
            ],
            operatorDetails: {
              visualType: hasConditionInsidePrint ? 'condition_eval' : 'console',
              technicalConcept: hasConditionInsidePrint
                ? 'Boolean Condition Evaluation & Output'
                : line.indent > 0
                ? 'Indented Block Execution & Console Output'
                : 'Verified Console Output',
              activeSourceRange: {
                line: line.lineNum,
                startCol: line.indent + 1,
                endCol: line.raw.length,
                codeText: line.trimmed,
              },
              operatorSymbol: ctx.primaryOperator || 'print()',
              evaluatedOperands: ctx.evaluatedOperands,
              intermediateSteps:
                ctx.intermediateSteps.length > 0
                  ? ctx.intermediateSteps
                  : [{ expr: line.trimmed, result: printedLine, rule: 'Prints to Console' }],
              intermediateResult: printedLine,
              variableSnapshots: takeEnvSnapshots(env),
              indentationInfo:
                line.indent > 0
                  ? `${line.indent} spaces indentation (Executed inside selected branch)`
                  : undefined,
            },
          });
          continue;
        }

        // 2. Variable assignment: varName = rhs
        const assignMatch = line.trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          const rhsStr = assignMatch[2].trim();
          const prevVal = env[varName];
          const rhsNode = parseExpr(rhsStr);
          const newVal = evalExpr(rhsNode, ctx);
          inputCursor = ctx.inputCursor;
          env[varName] = newVal;

          const isTernary = rhsNode.kind === 'ternary';
          const isShortCircuit = Boolean(ctx.shortCircuitNote);
          const isInputStmt = rhsStr.includes('input(');
          const isBoolExpr = newVal.type === 'Boolean' && !isInputStmt;

          let vType: OperatorVisualType = 'variable_state';
          let techConcept = 'Variable State & Input Assignment';
          if (isTernary) {
            vType = 'if_else_branch';
            techConcept = 'Conditional Expression (One-Line Ternary if-else)';
          } else if (isShortCircuit) {
            vType = 'logical_condition';
            techConcept = 'Short-Circuit Logical Evaluation';
          } else if (isBoolExpr) {
            vType = 'condition_eval';
            techConcept = 'Boolean Condition Evaluation';
          }

          let speechHi = `Line ${line.lineNum} पर पहले Right Side की Expression \`${rhsStr}\` Evaluate होकर \`${formatVal(newVal)}\` (${newVal.type}) बनती है, और फिर Variable \`${varName}\` में Store होती है।`;
          let cardHi = `Variable \`${varName}\` में Value \`${formatVal(newVal)}\` (${newVal.type}) Store हुई।`;

          if (isTernary && rhsNode.kind === 'ternary') {
            const cVal = evalExpr(rhsNode.cond, {
              ...ctx,
              intermediateSteps: [],
              evaluatedOperands: [],
            });
            const cBool = isTruthy(cVal);
            speechHi = `Line ${line.lineNum} पर Conditional Expression (Ternary Operator) का उपयोग हुआ है। पहले बीच की Condition \`${rhsNode.cond.raw}\` Check होती है, जो \`${cBool ? 'True' : 'False'}\` है। Condition \`${cBool ? 'True' : 'False'}\` होने के कारण \`${cBool ? rhsNode.body.raw : rhsNode.orelse.raw}\` Select होता है और Variable \`${varName}\` में \`${formatVal(newVal)}\` Store हो जाता है।`;
            cardHi = `Ternary Decision: Condition \`${rhsNode.cond.raw}\` ➔ \`${cBool ? 'True' : 'False'}\`। इसलिए \`${varName} = ${formatVal(newVal)}\` Select हुआ और दूसरी Branch Skip हो गई।`;
          } else if (isShortCircuit && ctx.shortCircuitNote) {
            speechHi = `Line ${line.lineNum} पर ${ctx.shortCircuitNote} इसलिए \`${varName}\` में सीधे \`${formatVal(newVal)}\` Store हो जाता है।`;
            cardHi = `${ctx.shortCircuitNote} Result: \`${varName} = ${formatVal(newVal)}\``;
          } else if (isInputStmt) {
            speechHi = `Line ${line.lineNum} पर \`${rhsStr}\` User Input से Value पढ़कर उसे Evaluate करता है, और Variable \`${varName}\` में \`${formatVal(newVal)}\` (${newVal.type}) Store करता है।`;
            cardHi = `Input & Variable State: \`${rhsStr}\` से \`${varName} = ${formatVal(newVal)}\` (${newVal.type}) Store हुआ।`;
          }

          drafts.push({
            title: isTernary
              ? `Ternary Decision (${varName} = ${formatVal(newVal)})`
              : isShortCircuit
              ? `Short-Circuit Evaluation (${varName} = ${formatVal(newVal)})`
              : `Variable State (${varName} = ${formatVal(newVal)})`,
            conceptKey: isTernary ? 'if_else_branch' : 'variable_state',
            speechHinglish: speechHi,
            speechEnglish: `Line ${line.lineNum} evaluates \`${rhsStr}\` to \`${formatVal(newVal)}\` (${newVal.type}) and stores it in variable \`${varName}\`.`,
            cardExplanationHinglish: cardHi,
            cardExplanationEnglish: `Evaluates \`${rhsStr}\` ➔ \`${formatVal(newVal)}\` and updates variable \`${varName}\`.`,
            visualTarget: varName,
            visualLabel: `${varName} = ${formatVal(newVal)}`,
            visualSublabel: `${newVal.type} Variable`,
            consoleOutput: stdoutLines.join('\n'),
            isConsoleVisible: stdoutLines.length > 0,
            highlightLine: line.lineNum,
            highlightToken: varName,
            conceptBoxes: [
              { label: varName, sublabel: 'Target Variable', isActive: true },
              { label: rhsStr, sublabel: 'Evaluated Expression', isActive: false },
              { label: formatVal(newVal), sublabel: `Stored (${newVal.type})`, isActive: true },
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
              operatorSymbol: isTernary ? 'if ... else' : ctx.primaryOperator || '=',
              evaluatedOperands: ctx.evaluatedOperands,
              intermediateSteps:
                ctx.intermediateSteps.length > 0
                  ? ctx.intermediateSteps
                  : [{ expr: `${varName} = ${rhsStr}`, result: formatVal(newVal), rule: 'Assignment' }],
              intermediateResult: formatVal(newVal),
              variableSnapshots: takeEnvSnapshots(env, varName, prevVal),
              shortCircuitNote: ctx.shortCircuitNote,
              indentationInfo:
                line.indent > 0 ? `${line.indent} spaces indentation (Inside active branch)` : undefined,
            },
          });
        }
        continue;
      }

      // 3. IF / ELIF / ELSE DECISION CHAIN
      if (node.kind === 'if_chain') {
        const hasElif = node.branches.some((b) => b.branchType === 'elif');
        const hasElse = node.branches.some((b) => b.branchType === 'else');
        let branchMatched = false;

        for (let bIdx = 0; bIdx < node.branches.length; bIdx++) {
          const br = node.branches[bIdx];
          const hdr = br.headerLine;
          const blockRangeStr =
            br.body.length > 0
              ? `Line ${ hdr.lineNum + 1 }${br.endLineNum > hdr.lineNum + 1 ? `–${br.endLineNum}` : ''}`
              : `Line ${hdr.lineNum}`;

          if (br.branchType === 'else') {
            // If we reached `else:`, all prior `if` / `elif` conditions were False!
            const priorSkipped = node.branches
              .slice(0, bIdx)
              .map((pb) => `${pb.branchType} (${pb.condExpr}) ➔ False (Skipped Line ${pb.headerLine.lineNum + 1})`);

            drafts.push({
              title: node.isNested ? `Nested else Branch Selected` : `else Block Selected (Line ${hdr.lineNum})`,
              conceptKey: 'else_branch',
              speechHinglish: `Line ${hdr.lineNum} पर क्योंकि ऊपर की Condition \`False\` हो चुकी है, इसलिए Python अब \`else:\` Block (${blockRangeStr}) को Select करता है और इसके अंदर के Indented Statements को Execute करेगा।`,
              speechEnglish: `On Line ${hdr.lineNum}, since all previous conditions evaluated to \`False\`, Python selects the \`else:\` block (${blockRangeStr}) and executes its indented statements.`,
              cardExplanationHinglish: `ऊपर की Condition \`False\` होने के कारण \`else:\` Branch (${blockRangeStr}) Select हुई। अब इसके अंदर का Block Execute होगा।`,
              cardExplanationEnglish: `Because the preceding condition was \`False\`, the \`else:\` branch (${blockRangeStr}) is selected for execution.`,
              visualTarget: 'else:',
              visualLabel: 'else: ➔ Selected',
              visualSublabel: `Executes ${blockRangeStr}`,
              consoleOutput: stdoutLines.join('\n'),
              isConsoleVisible: stdoutLines.length > 0,
              highlightLine: hdr.lineNum,
              highlightToken: 'else',
              conceptBoxes: [
                { label: 'Previous Condition', sublabel: 'Evaluated to False', isActive: false },
                { label: 'else: Block', sublabel: 'Selected Branch ✅', isActive: true },
                { label: blockRangeStr, sublabel: 'Will Execute Next', isActive: true },
              ],
              operatorDetails: {
                visualType: node.isNested
                  ? 'nested_condition'
                  : hasElif
                  ? 'elif_ladder'
                  : 'if_else_branch',
                technicalConcept: node.isNested
                  ? 'Nested else Branch Execution'
                  : 'else Fallback Branch Execution',
                activeSourceRange: {
                  line: hdr.lineNum,
                  startCol: hdr.indent + 1,
                  endCol: hdr.raw.length,
                  codeText: hdr.trimmed,
                },
                operatorSymbol: 'else',
                intermediateSteps: [
                  {
                    expr: 'All preceding if/elif conditions == False',
                    result: `Execute else Block (${blockRangeStr})`,
                    rule: 'else Fallback Rule',
                  },
                ],
                selectedBranch: `else Block (${blockRangeStr})`,
                skippedBranches: priorSkipped,
                variableSnapshots: takeEnvSnapshots(env),
                indentationInfo: `Block body at ${hdr.indent + 4} spaces indentation`,
              },
            });

            branchMatched = true;
            executeNodes(br.body);
            break;
          }

          // Evaluate `if` or `elif` condition
          const condStr = br.condExpr || 'True';
          const ctx: EvalTraceContext = {
            env,
            funcs,
            inputs,
            inputCursor,
            stdoutLines,
            intermediateSteps: [],
            evaluatedOperands: [],
          };
          const condNode = parseExpr(condStr);
          const condVal = evalExpr(condNode, ctx);
          inputCursor = ctx.inputCursor;
          const condBool = isTruthy(condVal);

          const hasLogical =
            condStr.includes(' and ') || condStr.includes(' or ') || condStr.startsWith('not ');
          let vType: OperatorVisualType = 'condition_eval';
          let techConcept = 'if Condition Evaluation & Decision Flow';
          if (node.isNested) {
            vType = 'nested_condition';
            techConcept = 'Nested if-else Decision Node';
          } else if (hasElif) {
            vType = 'elif_ladder';
            techConcept = 'elif Decision Ladder Evaluation';
          } else if (hasLogical) {
            vType = 'logical_condition';
            techConcept = 'Logical Condition & Short-Circuit Decision';
          } else if (hasElse) {
            vType = 'if_else_branch';
            techConcept = 'if-else Two-Way Branch Decision';
          } else {
            vType = 'decision_flow';
            techConcept = 'True/False Decision Flow';
          }

          const opMeta = ctx.primaryOperator ? CONDITIONAL_OPERATOR_META[ctx.primaryOperator] : undefined;
          const operandSummary =
            ctx.evaluatedOperands.length > 0
              ? ctx.evaluatedOperands
                  .map((o) => (o.expr === o.value ? `${o.value}` : `${o.expr} = ${o.value}`))
                  .join(', ')
              : `${condStr} = ${formatVal(condVal)}`;

          if (condBool) {
            // Condition is TRUE!
            // Identify all remaining branches in this chain that will be SKIPPED
            const skippedLater = node.branches.slice(bIdx + 1).map((lb) => {
              const lRange = `Line ${lb.headerLine.lineNum}–${lb.endLineNum}`;
              return `${lb.branchType}${lb.condExpr ? ` (${lb.condExpr})` : ''} [${lRange} Skipped]`;
            });

            const skipExplanationHi =
              skippedLater.length > 0
                ? ` और बाक़ी Branches (${skippedLater.join(', ')}) को Python पूरी तरह Skip कर देता है।`
                : '।';

            const speechHi = `Line ${hdr.lineNum} पर \`${br.branchType}\` Condition \`${condStr}\` Check होती है (${operandSummary})। ${
              opMeta ? opMeta.meaningHi + ' ' : ''
            }${ctx.shortCircuitNote ? ctx.shortCircuitNote + ' ' : ''}यहाँ Condition \`True\` है! इसलिए \`${br.branchType}\` Block (${blockRangeStr}) Select होकर Execute होगा${skipExplanationHi}`;

            const cardHi = `Condition \`${condStr}\` (${operandSummary}) ➔ \`True\` ✅। इसलिए ${br.branchType} Block (${blockRangeStr}) Execute होगा${
              skippedLater.length > 0 ? ` और बाक़ी Branch Skip हो जाएगी।` : '।'
            }`;

            drafts.push({
              title: `${br.branchType} Condition (${condStr}) ➔ True ✅`,
              conceptKey: vType,
              speechHinglish: speechHi,
              speechEnglish: `On Line ${hdr.lineNum}, \`${condStr}\` (${operandSummary}) evaluates to \`True\`. Python selects the \`${br.branchType}\` block (${blockRangeStr})${
                skippedLater.length > 0 ? ` and skips the remaining branches.` : '.'
              }`,
              cardExplanationHinglish: cardHi,
              cardExplanationEnglish: `Condition \`${condStr}\` (${operandSummary}) is \`True\`. Selected branch: ${blockRangeStr}.`,
              visualTarget: condStr,
              visualLabel: `${condStr} ➔ True`,
              visualSublabel: `Selected: ${blockRangeStr}`,
              consoleOutput: stdoutLines.join('\n'),
              isConsoleVisible: stdoutLines.length > 0,
              highlightLine: hdr.lineNum,
              highlightToken: br.branchType,
              conceptBoxes: [
                { label: condStr, sublabel: operandSummary, isActive: true },
                { label: 'Decision: True ✅', sublabel: `${br.branchType} Condition Met`, isActive: true },
                {
                  label: `Run ${blockRangeStr}`,
                  sublabel: skippedLater.length > 0 ? 'Other Branches Skipped' : 'Indented Block Runs',
                  isActive: false,
                },
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
                operatorSymbol: ctx.primaryOperator || br.branchType,
                operatorMeaning: opMeta?.meaningHi,
                evaluatedOperands: ctx.evaluatedOperands,
                intermediateSteps:
                  ctx.intermediateSteps.length > 0
                    ? ctx.intermediateSteps
                    : [{ expr: condStr, result: 'True', rule: 'Truthy Condition' }],
                intermediateResult: 'True',
                conditionExpression: condStr,
                conditionResult: true,
                selectedBranch: `${br.branchType} Block (${blockRangeStr})`,
                skippedBranches: skippedLater,
                shortCircuitNote: ctx.shortCircuitNote,
                variableSnapshots: takeEnvSnapshots(env),
                indentationInfo: `Selected block indented at ${hdr.indent + 4} spaces`,
              },
            });

            branchMatched = true;
            executeNodes(br.body);
            break;
          } else {
            // Condition is FALSE!
            // Its body is SKIPPED! Never animate skipped statements as executed!
            const nextBranch = node.branches[bIdx + 1];
            const nextActionHi = nextBranch
              ? `इसलिए Python इस \`${br.branchType}\` Block (${blockRangeStr}) को Skip कर देता है और अगली Branch (\`Line ${nextBranch.headerLine.lineNum}: ${nextBranch.headerLine.trimmed}\`) पर जाता है।`
              : `क्योंकि कोई \`else\` Block नहीं है, इसलिए \`${br.branchType}\` Block (${blockRangeStr}) पूरी तरह Skip हो जाता है और कुछ भी Print नहीं होता।`;

            const speechHi = `Line ${hdr.lineNum} पर \`${br.branchType}\` Condition \`${condStr}\` Check होती है (${operandSummary})। ${
              opMeta ? opMeta.meaningHi + ' ' : ''
            }${ctx.shortCircuitNote ? ctx.shortCircuitNote + ' ' : ''}यहाँ Condition \`False\` है! ${nextActionHi}`;

            const cardHi = `Condition \`${condStr}\` (${operandSummary}) ➔ \`False\` ❌। ${nextActionHi}`;

            drafts.push({
              title: `${br.branchType} Condition (${condStr}) ➔ False (Skipped)`,
              conceptKey: vType,
              speechHinglish: speechHi,
              speechEnglish: `On Line ${hdr.lineNum}, \`${condStr}\` (${operandSummary}) evaluates to \`False\`. Python skips ${blockRangeStr}${
                nextBranch ? ` and moves to Line ${nextBranch.headerLine.lineNum}.` : '.'
              }`,
              cardExplanationHinglish: cardHi,
              cardExplanationEnglish: `Condition \`${condStr}\` is \`False\`. ${blockRangeStr} is skipped.`,
              visualTarget: condStr,
              visualLabel: `${condStr} ➔ False`,
              visualSublabel: `Skipped: ${blockRangeStr}`,
              consoleOutput: stdoutLines.join('\n'),
              isConsoleVisible: stdoutLines.length > 0,
              highlightLine: hdr.lineNum,
              highlightToken: br.branchType,
              conceptBoxes: [
                { label: condStr, sublabel: operandSummary, isActive: true },
                { label: 'Decision: False ❌', sublabel: 'Condition Not Met', isActive: true },
                {
                  label: `Skip ${blockRangeStr}`,
                  sublabel: nextBranch ? `Check ${nextBranch.branchType} Next` : 'No Output Executed',
                  isActive: false,
                },
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
                operatorSymbol: ctx.primaryOperator || br.branchType,
                operatorMeaning: opMeta?.meaningHi,
                evaluatedOperands: ctx.evaluatedOperands,
                intermediateSteps:
                  ctx.intermediateSteps.length > 0
                    ? ctx.intermediateSteps
                    : [{ expr: condStr, result: 'False', rule: 'Falsy Condition' }],
                intermediateResult: 'False',
                conditionExpression: condStr,
                conditionResult: false,
                selectedBranch: nextBranch
                  ? `Moves to Line ${nextBranch.headerLine.lineNum} (${nextBranch.branchType})`
                  : 'None (if Block Skipped)',
                skippedBranches: [`${br.branchType} Block (${blockRangeStr}) Skipped`],
                shortCircuitNote: ctx.shortCircuitNote,
                variableSnapshots: takeEnvSnapshots(env),
                indentationInfo: `Skipped block at ${hdr.indent + 4} spaces indentation`,
              },
            });
          }
        }

        // If no branch matched at all and the whole program produces empty output (like CD-01-03),
        // we still have a crystal-clear explanation of why the branch was skipped.
        void branchMatched;
        continue;
      }

      // 4. STRUCTURAL PATTERN MATCHING: match / case
      if (node.kind === 'match') {
        const ctx: EvalTraceContext = {
          env,
          funcs,
          inputs,
          inputCursor,
          stdoutLines,
          intermediateSteps: [],
          evaluatedOperands: [],
        };
        const subjVal = evalExpr(parseExpr(node.subjectExpr), ctx);
        inputCursor = ctx.inputCursor;

        // Find which case matches
        let matchedIdx = -1;
        for (let cIdx = 0; cIdx < node.cases.length; cIdx++) {
          if (matchPattern(subjVal, node.cases[cIdx].patternExpr)) {
            matchedIdx = cIdx;
            break;
          }
        }

        const matchedCase = matchedIdx >= 0 ? node.cases[matchedIdx] : undefined;
        const skippedCases = node.cases
          .filter((_, idx) => idx !== matchedIdx)
          .map((c) => `case ${c.patternExpr}: (Line ${c.headerLine.lineNum})`);

        drafts.push({
          title: `match ${node.subjectExpr} (${formatVal(subjVal)})`,
          conceptKey: 'elif_ladder',
          speechHinglish: `Line ${node.headerLine.lineNum} पर \`match ${node.subjectExpr}:\` Statement में \`${node.subjectExpr}\` की Value \`${formatVal(
            subjVal
          )}\` है। Python क्रम से हर \`case\` Pattern को Check करता है और \`case ${
            matchedCase?.patternExpr || '_'
          }:\` (Line ${matchedCase?.headerLine.lineNum || node.headerLine.lineNum}) से Match होने पर उसी Block को Execute करता है, जबकि बाक़ी सभी Cases को Skip कर देता है।`,
          speechEnglish: `On Line ${node.headerLine.lineNum}, \`match ${node.subjectExpr}:\` compares \`${formatVal(
            subjVal
          )}\` against each \`case\` pattern, selecting \`case ${matchedCase?.patternExpr || '_'}:\` on Line ${
            matchedCase?.headerLine.lineNum || node.headerLine.lineNum
          } and skipping all other cases.`,
          cardExplanationHinglish: `Pattern Matching: \`${node.subjectExpr} = ${formatVal(
            subjVal
          )}\` का मिलान \`case ${matchedCase?.patternExpr || '_'}:\` (Line ${
            matchedCase?.headerLine.lineNum || ''
          }) से हुआ ✅। बाक़ी सभी Cases Skip हो गए।`,
          cardExplanationEnglish: `\`match ${node.subjectExpr}\` (${formatVal(subjVal)}) matches \`case ${
            matchedCase?.patternExpr || '_'
          }:\` on Line ${matchedCase?.headerLine.lineNum || ''}.`,
          visualTarget: matchedCase ? `case ${matchedCase.patternExpr}:` : `match ${node.subjectExpr}:`,
          visualLabel: `case ${matchedCase?.patternExpr || '_'}: Matched`,
          visualSublabel: `${node.subjectExpr} == ${formatVal(subjVal)}`,
          consoleOutput: stdoutLines.join('\n'),
          isConsoleVisible: stdoutLines.length > 0,
          highlightLine: matchedCase ? matchedCase.headerLine.lineNum : node.headerLine.lineNum,
          highlightToken: 'case',
          conceptBoxes: [
            { label: `match ${node.subjectExpr}`, sublabel: `Value: ${formatVal(subjVal)}`, isActive: true },
            {
              label: `case ${matchedCase?.patternExpr || '_'}:`,
              sublabel: 'Pattern Matched ✅',
              isActive: true,
            },
            { label: 'Other Cases', sublabel: 'Skipped ⏭️', isActive: false },
          ],
          operatorDetails: {
            visualType: 'elif_ladder',
            technicalConcept: 'match-case Structural Pattern Matching',
            activeSourceRange: {
              line: matchedCase ? matchedCase.headerLine.lineNum : node.headerLine.lineNum,
              startCol: 1,
              endCol: matchedCase ? matchedCase.headerLine.raw.length : node.headerLine.raw.length,
              codeText: matchedCase ? matchedCase.headerLine.trimmed : node.headerLine.trimmed,
            },
            operatorSymbol: 'match / case',
            evaluatedOperands: [
              {
                label: 'Subject',
                expr: node.subjectExpr,
                value: formatVal(subjVal),
                dataType: subjVal.type,
              },
            ],
            intermediateSteps: [
              {
                expr: `match ${node.subjectExpr} (${formatVal(subjVal)})`,
                result: `Matches case ${matchedCase?.patternExpr || '_'}: (Line ${
                  matchedCase?.headerLine.lineNum || ''
                })`,
                rule: 'Pattern Matching Decision',
              },
            ],
            conditionExpression: `${node.subjectExpr} == ${matchedCase?.patternExpr || '_'}`,
            conditionResult: true,
            selectedBranch: matchedCase
              ? `case ${matchedCase.patternExpr}: (Line ${matchedCase.headerLine.lineNum}–${matchedCase.endLineNum})`
              : 'None',
            skippedBranches: skippedCases,
            variableSnapshots: takeEnvSnapshots(env),
            indentationInfo: 'Matched case body indented at 8 spaces',
          },
        });

        if (matchedCase) {
          executeNodes(matchedCase.body);
        }
        continue;
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

export function runConditionalsPythonSandbox(
  code: string,
  sampleInput = ''
): { stdout: string; error: string | null } {
  try {
    // Check basic Python syntax errors first so Explain My Error works accurately
    const rawLines = code.split('\n');
    for (let i = 0; i < rawLines.length; i++) {
      const t = rawLines[i].trim();
      if (!t || t.startsWith('#')) continue;
      // Check unclosed quotes
      const dq = (t.match(/"/g) || []).length;
      const sq = (t.match(/'/g) || []).length;
      if (dq % 2 !== 0 || sq % 2 !== 0) {
        return {
          stdout: '',
          error: `SyntaxError: EOL while scanning string literal on line ${i + 1}`,
        };
      }
      // Check unbalanced parentheses
      let depth = 0;
      for (const ch of t) {
        if (ch === '(') depth++;
        else if (ch === ')') depth--;
      }
      if (depth !== 0) {
        return {
          stdout: '',
          error: `SyntaxError: unmatched parentheses on line ${i + 1}`,
        };
      }
      // Check missing colon on block headers
      if (/^(if\s+.+|elif\s+.+|else|match\s+.+|case\s+.+|def\s+.+|try|except.*)$/.test(t) && !t.endsWith(':')) {
        return {
          stdout: '',
          error: `SyntaxError: expected ':' at the end of conditional header on line ${i + 1}`,
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
    const steps = generateConditionalsTeachingSteps(dummyQ);
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

export function generateConditionalsHints(question: TopicQuestion): ProgressiveHint[] {
  const codeLines = question.referenceCode
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const condLine =
    codeLines.find((l) => l.startsWith('if ') || l.startsWith('elif ') || l.startsWith('match ')) ||
    codeLines[0] ||
    '';

  return [
    {
      level: 1,
      name: 'Level 1: Decision Logic Hint',
      badge: '💡 Concept & Condition Hint',
      hintHinglish: `इस सवाल में हमें Condition Check करके सही Branch Execute करनी है। ध्यान दें कि मुख्य शर्त \`${condLine}\` के आसपास आधारित है।`,
      hintEnglish: `In this problem, check the condition carefully using \`${condLine}\` and ensure your blocks are properly indented by 4 spaces.`,
    },
    {
      level: 2,
      name: 'Level 2: Structure & Indentation',
      badge: '📐 Syntax & Block Structure',
      hintHinglish: `याद रखें कि \`if\`, \`elif\` और \`else\` के अंत में Colon (\`:\`) लगाना ज़रूरी है, और उसके अंदर के Statements में 4 Spaces का Indentation होना चाहिए। अपेक्षित Output: \`${
        question.sampleOutput || '(Empty Output)'
      }\``,
      hintEnglish: `Remember to end \`if\`, \`elif\`, and \`else\` headers with a colon (\`:\`) and indent the block body by 4 spaces. Expected output: \`${
        question.sampleOutput || '(Empty Output)'
      }\``,
    },
    {
      level: 3,
      name: 'Level 3: Complete Verified Reference Structure',
      badge: '🎯 Full Solution Structure',
      hintHinglish: `यहाँ पूरा Verified Python Solution दिया गया है:\n\`\`\`python\n${question.referenceCode}\n\`\`\``,
      hintEnglish: `Here is the complete verified Python solution:\n\`\`\`python\n${question.referenceCode}\n\`\`\``,
    },
  ];
}

export function buildConditionalsQuestionConfig(
  topicId: string,
  q: TopicQuestion
): QuestionV5Config {
  const teachingSteps = generateConditionalsTeachingSteps(q);
  const hints = generateConditionalsHints(q);
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
      const actualOut = stdout.trim();
      const expectedOut = q.sampleOutput.trim();

      if (actualOut === expectedOut) {
        // If expected output is empty (like CD-01-03 where condition is False), ensure an `if` statement was actually written
        if (expectedOut === '' && !/\bif\b/.test(trimmedCode)) {
          return {
            passed: false,
            message: 'Please write the required if condition statement as instructed.',
          };
        }
        return {
          passed: true,
          message: '🎉 Excellent! Your conditional logic and output match 100%!',
        };
      }

      return {
        passed: false,
        message: `Expected output "${expectedOut}", but your code produced "${actualOut}". Check your condition and branch outputs!`,
      };
    },
    diagnose: diagnoseHelloWorldError,
  };
}
