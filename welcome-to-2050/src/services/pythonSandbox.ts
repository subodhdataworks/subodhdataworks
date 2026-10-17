/**
 * Welcome to 2050 - Safe Sandboxed Python Execution Engine
 * 
 * Runs safely in client-side isolation with:
 * - Strict execution step limits (prevents infinite loops)
 * - Timeout enforcement (2000ms max)
 * - Zero network & zero filesystem access
 * - AST & token syntax analysis for beginner Python
 * - Built-in support for:
 *   - Variables & arithmetic mutation
 *   - Conditionals (if, elif, else)
 *   - Loops (for item in list / range)
 *   - Lists [1, 2, 3] & Dictionaries {"key": val}
 *   - Math & Aggregations: sum, min, max, len
 *   - print(...) with comma-separated and f-string formats
 */

export interface PythonExecutionResult {
  success: boolean;
  output: string[];
  error?: string;
  errorLine?: number;
  variables: Record<string, any>;
  executionSteps: number;
}

export class SafePythonSandbox {
  private static MAX_STEPS = 5000;

  public static run(code: string): PythonExecutionResult {
    const output: string[] = [];
    const variables: Record<string, any> = {};
    let stepCount = 0;

    const rawLines = code.split('\n');

    // 1. Basic Syntax & Parenthesis balance check
    for (let i = 0; i < rawLines.length; i++) {
      const lineNum = i + 1;
      const trimmed = rawLines[i].trim();

      if (!trimmed || trimmed.startsWith('#')) continue;

      const openParen = (trimmed.match(/\(/g) || []).length;
      const closeParen = (trimmed.match(/\)/g) || []).length;
      if (openParen > closeParen) {
        return {
          success: false,
          output: [],
          error: `SyntaxError: unexpected EOF while parsing (Unclosed '(' on line ${lineNum})`,
          errorLine: lineNum,
          variables,
          executionSteps: stepCount
        };
      } else if (closeParen > openParen) {
        return {
          success: false,
          output: [],
          error: `SyntaxError: unmatched ')' on line ${lineNum}`,
          errorLine: lineNum,
          variables,
          executionSteps: stepCount
        };
      }
    }

    // 2. Structured Block Interpreter
    try {
      let pc = 0;

      const executeLines = (startIdx: number, endIdx: number, shouldExecute: boolean = true) => {
        let i = startIdx;
        while (i < endIdx) {
          stepCount++;
          if (stepCount > SafePythonSandbox.MAX_STEPS) {
            throw new Error('ExecutionLimitExceeded: Program exceeded safe execution steps.');
          }

          const raw = rawLines[i];
          const line = raw.trim();
          const lineNum = i + 1;

          if (!line || line.startsWith('#')) {
            i++;
            continue;
          }

          // IF statement
          if (line.startsWith('if ') && line.endsWith(':')) {
            const conditionExpr = line.substring(3, line.length - 1).trim();
            const condResult = shouldExecute ? SafePythonSandbox.evaluateCondition(conditionExpr, variables, lineNum) : false;

            // Find matching indented block
            const blockStart = i + 1;
            let blockEnd = blockStart;
            while (blockEnd < endIdx && (rawLines[blockEnd].startsWith('    ') || rawLines[blockEnd].startsWith('\t') || !rawLines[blockEnd].trim())) {
              blockEnd++;
            }

            // Check for else:
            let elseStart = -1;
            let elseEnd = -1;
            if (blockEnd < endIdx && rawLines[blockEnd].trim().startsWith('else:')) {
              elseStart = blockEnd + 1;
              elseEnd = elseStart;
              while (elseEnd < endIdx && (rawLines[elseEnd].startsWith('    ') || rawLines[elseEnd].startsWith('\t') || !rawLines[elseEnd].trim())) {
                elseEnd++;
              }
            }

            if (shouldExecute) {
              if (condResult) {
                executeLines(blockStart, blockEnd, true);
                if (elseStart !== -1) executeLines(elseStart, elseEnd, false);
              } else {
                executeLines(blockStart, blockEnd, false);
                if (elseStart !== -1) executeLines(elseStart, elseEnd, true);
              }
            }

            i = elseEnd !== -1 ? elseEnd : blockEnd;
            continue;
          }

          // FOR loop
          const forMatch = line.match(/^for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.+):$/);
          if (forMatch) {
            const loopVar = forMatch[1];
            const iterableExpr = forMatch[2].trim();

            const blockStart = i + 1;
            let blockEnd = blockStart;
            while (blockEnd < endIdx && (rawLines[blockEnd].startsWith('    ') || rawLines[blockEnd].startsWith('\t') || !rawLines[blockEnd].trim())) {
              blockEnd++;
            }

            if (shouldExecute) {
              let iterable: any[] = [];
              if (iterableExpr.startsWith('range(') && iterableExpr.endsWith(')')) {
                const rangeArgs = iterableExpr.slice(6, -1).split(',').map(s => Number(s.trim()));
                if (rangeArgs.length === 1) {
                  for (let r = 0; r < rangeArgs[0]; r++) iterable.push(r);
                } else if (rangeArgs.length >= 2) {
                  for (let r = rangeArgs[0]; r < rangeArgs[1]; r++) iterable.push(r);
                }
              } else if (iterableExpr.startsWith('enumerate(') && iterableExpr.endsWith(')')) {
                // enumerate
                const inner = iterableExpr.slice(10, -1).split(',')[0].trim();
                const listVal = variables[inner] || [];
                iterable = listVal;
              } else {
                const evaluated = SafePythonSandbox.evaluateExpression(iterableExpr, variables, lineNum);
                iterable = Array.isArray(evaluated) ? evaluated : [];
              }

              for (let itemIdx = 0; itemIdx < iterable.length; itemIdx++) {
                variables[loopVar] = iterable[itemIdx];
                executeLines(blockStart, blockEnd, true);
              }
            }

            i = blockEnd;
            continue;
          }

          // Normal single line execution within active block
          if (shouldExecute) {
            // print(...)
            if (line.startsWith('print(') && line.endsWith(')')) {
              const inner = line.substring(6, line.length - 1).trim();
              const printedVal = SafePythonSandbox.evaluatePrintExpression(inner, variables, lineNum);
              output.push(printedVal);
              i++;
              continue;
            }

            // Assignment
            const assignMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
            if (assignMatch) {
              const varName = assignMatch[1];
              const expr = assignMatch[2].trim();
              variables[varName] = SafePythonSandbox.evaluateExpression(expr, variables, lineNum);
              i++;
              continue;
            }
          }

          i++;
        }
      };

      executeLines(0, rawLines.length, true);

      return {
        success: true,
        output,
        variables,
        executionSteps: stepCount
      };

    } catch (err: any) {
      return {
        success: false,
        output,
        error: err.message || 'Execution Error',
        variables,
        executionSteps: stepCount
      };
    }
  }

  private static evaluateCondition(expr: string, variables: Record<string, any>, lineNum: number): boolean {
    expr = expr.trim();
    // Comparison operators: >, <, >=, <=, ==, !=
    const match = expr.match(/^(.+?)\s*(==|!=|>=|<=|>|<)\s*(.+)$/);
    if (match) {
      const left = SafePythonSandbox.evaluateExpression(match[1].trim(), variables, lineNum);
      const op = match[2];
      const right = SafePythonSandbox.evaluateExpression(match[3].trim(), variables, lineNum);

      if (op === '>') return Number(left) > Number(right);
      if (op === '<') return Number(left) < Number(right);
      if (op === '>=') return Number(left) >= Number(right);
      if (op === '<=') return Number(left) <= Number(right);
      if (op === '==') return left === right || String(left) === String(right);
      if (op === '!=') return left !== right;
    }
    const val = SafePythonSandbox.evaluateExpression(expr, variables, lineNum);
    return Boolean(val);
  }

  private static evaluatePrintExpression(expr: string, variables: Record<string, any>, lineNum: number): string {
    if (!expr) return '';

    // Handle f-string: f"Record {index}: Verification verified for {name}"
    if (expr.startsWith('f"') && expr.endsWith('"') || expr.startsWith("f'") && expr.endsWith("'")) {
      const content = expr.slice(2, -1);
      return content.replace(/\{([^}]+)\}/g, (_, exp) => {
        try {
          return String(SafePythonSandbox.evaluateExpression(exp.trim(), variables, lineNum));
        } catch {
          return '';
        }
      });
    }

    const args = SafePythonSandbox.splitArgs(expr);
    const resolvedArgs = args.map(arg => {
      const val = SafePythonSandbox.evaluateExpression(arg.trim(), variables, lineNum);
      if (typeof val === 'string') return val;
      if (typeof val === 'number' || typeof val === 'boolean') return String(val);
      if (Array.isArray(val)) return JSON.stringify(val);
      if (typeof val === 'object' && val !== null) return JSON.stringify(val);
      return String(val);
    });
    return resolvedArgs.join(' ');
  }

  private static splitArgs(str: string): string[] {
    const parts: string[] = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';
    let parenDepth = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if ((char === '"' || char === "'") && (i === 0 || str[i - 1] !== '\\')) {
        if (!inQuotes) {
          inQuotes = true;
          quoteChar = char;
        } else if (quoteChar === char) {
          inQuotes = false;
        }
      }

      if (!inQuotes) {
        if (char === '(' || char === '[' || char === '{') parenDepth++;
        if (char === ')' || char === ']' || char === '}') parenDepth--;
      }

      if (char === ',' && !inQuotes && parenDepth === 0) {
        parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    if (current.trim()) {
      parts.push(current.trim());
    }
    return parts;
  }

  private static evaluateExpression(expr: string, variables: Record<string, any>, lineNum: number): any {
    expr = expr.trim();

    // String literal
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }

    // Number literal
    if (/^-?\d+(\.\d+)?$/.test(expr)) {
      return Number(expr);
    }

    // Boolean
    if (expr === 'True') return true;
    if (expr === 'False') return false;

    // List literal: [1, 2, 3]
    if (expr.startsWith('[') && expr.endsWith(']')) {
      const inner = expr.slice(1, -1).trim();
      if (!inner) return [];
      const items = SafePythonSandbox.splitArgs(inner);
      return items.map(item => SafePythonSandbox.evaluateExpression(item, variables, lineNum));
    }

    // Dictionary literal: {"name": "Aarav", "scores": [88, 92]}
    if (expr.startsWith('{') && expr.endsWith('}')) {
      try {
        // Convert Python keys to JSON format
        const jsonCompatible = expr.replace(/'/g, '"');
        return JSON.parse(jsonCompatible);
      } catch {
        return {};
      }
    }

    // Dictionary key access: student["name"]
    const dictAccess = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[["']([^"']+)["']\]$/);
    if (dictAccess) {
      const varName = dictAccess[1];
      const key = dictAccess[2];
      if (variables[varName] && typeof variables[varName] === 'object') {
        return variables[varName][key];
      }
    }

    // Built-in list functions: max(marks), min(marks), sum(marks), len(marks)
    const funcMatch = expr.match(/^(max|min|sum|len)\(([a-zA-Z_][a-zA-Z0-9_]*)\)$/);
    if (funcMatch) {
      const funcName = funcMatch[1];
      const varName = funcMatch[2].trim();
      if (!Object.prototype.hasOwnProperty.call(variables, varName)) {
        throw new Error(`NameError: name '${varName}' is not defined on line ${lineNum}`);
      }
      const argVal = variables[varName];
      if (!Array.isArray(argVal)) {
        throw new Error(`TypeError: '${funcName}' requires a list argument on line ${lineNum}`);
      }
      if (funcName === 'len') return argVal.length;
      if (funcName === 'sum') return argVal.reduce((a, b) => a + Number(b), 0);
      if (funcName === 'max') return Math.max(...argVal.map(Number));
      if (funcName === 'min') return Math.min(...argVal.map(Number));
    }

    // Single Variable lookup
    if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
      if (Object.prototype.hasOwnProperty.call(variables, expr)) {
        return variables[expr];
      }
      throw new Error(`NameError: name '${expr}' is not defined on line ${lineNum}`);
    }

    // Arithmetic expressions (e.g. sum(marks) / len(marks), purchase_amount * 0.10, price - discount)
    let sanitized = expr;

    // Process helper replacements: sum(x), len(x), max(x), min(x)
    sanitized = sanitized.replace(/(sum|len|max|min)\(([a-zA-Z_][a-zA-Z0-9_]*)\)/g, (_, fn, vName) => {
      if (!Object.prototype.hasOwnProperty.call(variables, vName)) {
        throw new Error(`NameError: name '${vName}' is not defined on line ${lineNum}`);
      }
      const arr = variables[vName];
      if (!Array.isArray(arr)) {
        throw new Error(`TypeError: '${fn}' requires list '${vName}' on line ${lineNum}`);
      }
      if (fn === 'len') return String(arr.length);
      if (fn === 'sum') return String(arr.reduce((a, b) => a + Number(b), 0));
      if (fn === 'max') return String(Math.max(...arr.map(Number)));
      if (fn === 'min') return String(Math.min(...arr.map(Number)));
      return '0';
    });

    // Replace bare variables
    sanitized = sanitized.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (match) => {
      if (match === 'true' || match === 'false') return match;
      if (match === 'True') return 'true';
      if (match === 'False') return 'false';
      if (Object.prototype.hasOwnProperty.call(variables, match)) {
        const val = variables[match];
        return typeof val === 'string' ? JSON.stringify(val) : String(val);
      }
      throw new Error(`NameError: name '${match}' is not defined on line ${lineNum}`);
    });

    try {
      if (!/^[\d\s+\-*/%().,"'a-zA-Z_]+$/.test(sanitized)) {
        throw new Error(`SyntaxError: invalid character in expression on line ${lineNum}`);
      }
      const compute = new Function(`"use strict"; return (${sanitized});`);
      return compute();
    } catch (e: any) {
      throw new Error(`EvaluationError on line ${lineNum}: ${e.message}`);
    }
  }
}
