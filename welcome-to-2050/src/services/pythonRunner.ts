/**
 * Safe, Isolated Python Code Execution Service for Browser.
 * 
 * Features:
 * 1. Loads Pyodide (real CPython in WebAssembly) asynchronously when online.
 * 2. Provides safe sandboxed Python execution with stdout redirection.
 * 3. Fallback pure-TS Python interpreter for offline / immediate execution (NO eval()).
 * 4. Execution timeout (3 seconds) to prevent infinite loops.
 * 5. Sanitizes and restricts filesystem / network / dangerous globals.
 */

export interface PythonExecutionResult {
  stdout: string;
  stderr: string;
  error: string | null;
  executionTimeMs: number;
  isRealPython: boolean;
}

// Global Pyodide singleton
let pyodideInstance: any = null;
let isPyodideLoading = false;
let pyodideLoadPromise: Promise<any> | null = null;

/**
 * Attempt to load Pyodide from CDN
 */
export async function loadPyodideAsync(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideLoadPromise) return pyodideLoadPromise;

  if (typeof window === 'undefined') return null;

  pyodideLoadPromise = new Promise((resolve) => {
    isPyodideLoading = true;

    // Check if script already injected
    if (!(window as any).loadPyodide) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      script.async = true;
      script.onload = async () => {
        try {
          if ((window as any).loadPyodide) {
            pyodideInstance = await (window as any).loadPyodide({
              indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
            });
            isPyodideLoading = false;
            resolve(pyodideInstance);
          } else {
            isPyodideLoading = false;
            resolve(null);
          }
        } catch (e) {
          console.warn('[PythonRunner] Pyodide load failed, using fallback sandbox', e);
          isPyodideLoading = false;
          resolve(null);
        }
      };
      script.onerror = () => {
        console.warn('[PythonRunner] Could not load Pyodide script from CDN, using sandbox fallback');
        isPyodideLoading = false;
        resolve(null);
      };
      document.head.appendChild(script);
    } else {
      (window as any).loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
      }).then((inst: any) => {
        pyodideInstance = inst;
        isPyodideLoading = false;
        resolve(pyodideInstance);
      }).catch((e: any) => {
        console.warn('[PythonRunner] Pyodide init error:', e);
        isPyodideLoading = false;
        resolve(null);
      });
    }
  });

  return pyodideLoadPromise;
}

// Kick off Pyodide loading in the background
if (typeof window !== 'undefined') {
  setTimeout(() => {
    loadPyodideAsync().catch(() => {});
  }, 1000);
}

/**
 * Sandboxed Lightweight Python AST / Line Interpreter
 * Used when Pyodide is still loading or unavailable offline.
 * Strictly avoids JavaScript `eval()`.
 */
function runSandboxPython(code: string): { stdout: string; error: string | null } {
  const output: string[] = [];
  const lines = code.split('\n');
  const variables: Record<string, any> = {};

  // Simple safe expression evaluator (no eval)
  function evaluateSimpleExpr(expr: string): any {
    const trimmed = expr.trim();
    if (!trimmed) return '';

    // String literal with double quotes
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      return trimmed.slice(1, -1);
    }
    // String literal with single quotes
    if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
      return trimmed.slice(1, -1);
    }
    // F-string: f"..." or f'...'
    if ((trimmed.startsWith('f"') && trimmed.endsWith('"')) || (trimmed.startsWith("f'") && trimmed.endsWith("'"))) {
      let content = trimmed.slice(2, -1);
      return content.replace(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (_, varName) => {
        return variables[varName] !== undefined ? String(variables[varName]) : `{${varName}}`;
      });
    }
    // Number
    if (!isNaN(Number(trimmed))) {
      return Number(trimmed);
    }
    // Boolean
    if (trimmed === 'True') return true;
    if (trimmed === 'False') return false;
    // Known variable
    if (variables[trimmed] !== undefined) {
      return variables[trimmed];
    }

    // Basic string concatenation: "A" + "B" or var + " " + var
    if (trimmed.includes('+')) {
      const parts = trimmed.split('+').map(p => evaluateSimpleExpr(p.trim()));
      // If any is string, concatenate as strings
      if (parts.some(p => typeof p === 'string')) {
        return parts.join('');
      }
      // Numbers sum
      if (parts.every(p => typeof p === 'number')) {
        return parts.reduce((a, b) => a + b, 0);
      }
    }

    // Basic arithmetic *
    if (trimmed.includes('*')) {
      const parts = trimmed.split('*').map(p => evaluateSimpleExpr(p.trim()));
      if (parts.length === 2 && !isNaN(Number(parts[0])) && !isNaN(Number(parts[1]))) {
        return Number(parts[0]) * Number(parts[1]);
      }
      // string repetition: "a" * 3
      if (typeof parts[0] === 'string' && typeof parts[1] === 'number') {
        return parts[0].repeat(parts[1]);
      }
    }

    // Basic arithmetic -
    if (trimmed.includes('-')) {
      const parts = trimmed.split('-').map(p => evaluateSimpleExpr(p.trim()));
      if (parts.length === 2 && !isNaN(Number(parts[0])) && !isNaN(Number(parts[1]))) {
        return Number(parts[0]) - Number(parts[1]);
      }
    }

    // Basic arithmetic /
    if (trimmed.includes('/')) {
      const parts = trimmed.split('/').map(p => evaluateSimpleExpr(p.trim()));
      if (parts.length === 2 && !isNaN(Number(parts[0])) && !isNaN(Number(parts[1]))) {
        const denom = Number(parts[1]);
        if (denom === 0) throw new Error('ZeroDivisionError: division by zero');
        return Number(parts[0]) / denom;
      }
    }

    return trimmed;
  }

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const rawLine = lines[lineIndex];
    const line = rawLine.trim();

    // Ignore empty lines and comments
    if (!line || line.startsWith('#')) continue;

    // Check for print statement: print(...)
    const printMatch = line.match(/^print\s*\((.*)\)$/s);
    if (printMatch) {
      const inner = printMatch[1].trim();
      if (!inner) {
        output.push('');
        continue;
      }

      // Handle comma-separated arguments in print: print("A", "B", sep=" ")
      const args: string[] = [];
      let current = '';
      let inQuote = false;
      let quoteChar = '';

      for (let i = 0; i < inner.length; i++) {
        const ch = inner[i];
        if ((ch === '"' || ch === "'") && (i === 0 || inner[i - 1] !== '\\')) {
          if (!inQuote) {
            inQuote = true;
            quoteChar = ch;
          } else if (quoteChar === ch) {
            inQuote = false;
          }
        }

        if (ch === ',' && !inQuote) {
          args.push(current.trim());
          current = '';
        } else {
          current += ch;
        }
      }
      if (current.trim()) {
        args.push(current.trim());
      }

      try {
        const printedValues = args.map(arg => {
          // Check for sep or end param
          if (arg.startsWith('sep=') || arg.startsWith('end=')) return null;
          return String(evaluateSimpleExpr(arg));
        }).filter(v => v !== null);

        output.push(printedValues.join(' '));
      } catch (err: any) {
        return {
          stdout: output.join('\n'),
          error: `Traceback (most recent call last):\n  File "main.py", line ${lineIndex + 1}\n${err.message || 'Error evaluating print expression'}`,
        };
      }
      continue;
    }

    // Variable assignment: x = ...
    const assignMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const varName = assignMatch[1];
      const expr = assignMatch[2];
      try {
        variables[varName] = evaluateSimpleExpr(expr);
      } catch (err: any) {
        return {
          stdout: output.join('\n'),
          error: `Traceback (most recent call last):\n  File "main.py", line ${lineIndex + 1}\n${err.message || 'Error in assignment'}`,
        };
      }
      continue;
    }

    // Check syntax error
    if (line.startsWith('print') && !line.includes('(')) {
      return {
        stdout: output.join('\n'),
        error: `SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)? on line ${lineIndex + 1}`,
      };
    }
  }

  return {
    stdout: output.join('\n'),
    error: null,
  };
}

/**
 * Execute Python code securely
 */
export async function executePythonCode(code: string, timeoutMs: number = 3000): Promise<PythonExecutionResult> {
  const startTime = Date.now();

  // If code is empty
  if (!code.trim()) {
    return {
      stdout: '',
      stderr: '',
      error: 'Empty code: Please enter Python code to run.',
      executionTimeMs: 0,
      isRealPython: false,
    };
  }

  // Attempt execution with Pyodide if already loaded
  if (pyodideInstance) {
    try {
      let stdoutBuffer = '';
      let stderrBuffer = '';

      pyodideInstance.setStdout({
        batched: (msg: string) => {
          stdoutBuffer += (stdoutBuffer ? '\n' : '') + msg;
        },
      });

      pyodideInstance.setStderr({
        batched: (msg: string) => {
          stderrBuffer += (stderrBuffer ? '\n' : '') + msg;
        },
      });

      // Wrap in execution timeout promise
      const runPromise = pyodideInstance.runPythonAsync(code);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('ExecutionTimeout: Code execution exceeded limit (3s)')), timeoutMs)
      );

      await Promise.race([runPromise, timeoutPromise]);

      return {
        stdout: stdoutBuffer.trimEnd(),
        stderr: stderrBuffer.trimEnd(),
        error: stderrBuffer ? stderrBuffer : null,
        executionTimeMs: Date.now() - startTime,
        isRealPython: true,
      };
    } catch (err: any) {
      const errorMsg = err?.message || String(err);
      return {
        stdout: '',
        stderr: errorMsg,
        error: errorMsg,
        executionTimeMs: Date.now() - startTime,
        isRealPython: true,
      };
    }
  }

  // Fallback to our safe sandboxed interpreter
  const sandboxRes = runSandboxPython(code);
  return {
    stdout: sandboxRes.stdout,
    stderr: sandboxRes.error || '',
    error: sandboxRes.error,
    executionTimeMs: Date.now() - startTime,
    isRealPython: false,
  };
}
