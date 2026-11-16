// Client-side Python Simulation Interpreter
export function executePythonSimulation(code: string, stdin?: string): { output: string; error?: string } {
  try {
    const rawLines = code.split('\n');
    const outputs: string[] = [];
    const variables: Record<string, any> = {};
    const inputLines = (stdin && stdin !== '(Standard input)') ? stdin.split('\n') : [];
    let inputIdx = 0;

    for (const rawLine of rawLines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;

      // Augmented assignment: score += 5, score -= 3, score *= 2, score /= 4
      const augMatch = line.match(/^([a-zA-Z_]\w*)\s*(\+=|-=|\*=|\/=|%=|\/\/=|\*\*=)\s*(.+)$/);
      if (augMatch) {
        const varName = augMatch[1];
        const op = augMatch[2];
        const rhs = augMatch[3].trim();
        const rhsVal = rhs in variables ? Number(variables[rhs]) : Number(rhs);
        let curVal = varName in variables ? Number(variables[varName]) : 0;
        if (!isNaN(curVal) && !isNaN(rhsVal)) {
          if (op === '+=') variables[varName] = curVal + rhsVal;
          else if (op === '-=') variables[varName] = curVal - rhsVal;
          else if (op === '*=') variables[varName] = curVal * rhsVal;
          else if (op === '/=') {
            const div = curVal / rhsVal;
            variables[varName] = div;
            (variables as any)[`${varName}__is_float`] = true;
          }
          else if (op === '//=') variables[varName] = Math.floor(curVal / rhsVal);
          else if (op === '%=') variables[varName] = ((curVal % rhsVal) + rhsVal) % rhsVal;
          else if (op === '**=') variables[varName] = Math.pow(curVal, rhsVal);
          continue;
        }
      }

      // Variable assignment: name = "Rahul", age = 21, is_student = True, converted = int(number), result = converted + 5
      const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
      if (assignMatch && !line.startsWith('print')) {
        const varName = assignMatch[1];
        let valExpr = assignMatch[2].trim();

        // int(input(...)) compound call
        const intInputMatch = valExpr.match(/^int\s*\(\s*input\s*\(([\s\S]*)\)\s*\)$/);
        if (intInputMatch) {
          let userVal: string = '';
          if (inputIdx < inputLines.length && inputLines[inputIdx].trim().length > 0) {
            userVal = inputLines[inputIdx++].trim();
          } else if (varName.toLowerCase().includes('quantity')) {
            userVal = '3';
          } else if (varName.toLowerCase().includes('age')) {
            userVal = '20';
          } else if (varName.toLowerCase().includes('num1')) {
            userVal = '10';
          } else if (varName.toLowerCase().includes('num2')) {
            userVal = '20';
          } else {
            userVal = '10';
          }
          const parsed = parseInt(userVal, 10);
          if (isNaN(parsed) || !/^-?\d+$/.test(userVal.trim())) {
            return { output: '', error: `ValueError: invalid literal for int() with base 10: '${userVal}'` };
          }
          variables[varName] = parsed;
          continue;
        }

        // float(input(...)) compound call
        const floatInputMatch = valExpr.match(/^float\s*\(\s*input\s*\(([\s\S]*)\)\s*\)$/);
        if (floatInputMatch) {
          let userVal: string = '';
          if (inputIdx < inputLines.length && inputLines[inputIdx].trim().length > 0) {
            userVal = inputLines[inputIdx++].trim();
          } else if (varName.toLowerCase().includes('marks')) {
            userVal = '87.5';
          } else if (varName.toLowerCase().includes('price')) {
            userVal = '99.5';
          } else {
            userVal = '99.5';
          }
          const parsed = parseFloat(userVal);
          if (isNaN(parsed) || !/^-?\d+(?:\.\d+)?$/.test(userVal.trim())) {
            return { output: '', error: `ValueError: could not convert string to float: '${userVal}'` };
          }
          variables[varName] = parsed;
          continue;
        }

        // input(...) function: name = input("Enter your name: "), age = input("Enter your age: "), etc.
        const inputMatch = valExpr.match(/^input\s*\(([\s\S]*)\)$/);
        if (inputMatch) {
          let userVal: string;
          if (inputIdx < inputLines.length && inputLines[inputIdx].trim().length > 0) {
            userVal = inputLines[inputIdx++].trim();
          } else if (varName.toLowerCase().includes('course')) {
            userVal = 'Python';
          } else if (varName.toLowerCase().includes('city')) {
            userVal = 'Patna';
          } else if (varName.toLowerCase().includes('age')) {
            userVal = '20';
          } else {
            userVal = 'Rahul';
          }
          variables[varName] = userVal;
          continue;
        }

        // int(...) casting function: int(number), int("20"), int(age_text)
        const intMatch = valExpr.match(/^int\s*\((.+)\)$/);
        if (intMatch) {
          let inner = intMatch[1].trim();
          if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
            inner = inner.slice(1, -1);
          } else if (inner in variables) {
            inner = String(variables[inner]);
          }
          const parsed = parseInt(inner, 10);
          if (isNaN(parsed) || !/^-?\d+$/.test(inner.trim())) {
            return { output: '', error: `ValueError: invalid literal for int() with base 10: '${inner}'` };
          }
          variables[varName] = parsed;
          continue;
        }

        // str(...) casting function: str(age), str(20)
        const strMatch = valExpr.match(/^str\s*\((.+)\)$/);
        if (strMatch) {
          let inner = strMatch[1].trim();
          if (inner in variables) {
            variables[varName] = String(variables[inner] === null ? 'None' : variables[inner]);
          } else {
            variables[varName] = inner.replace(/^["']|["']$/g, '');
          }
          continue;
        }

        // float(...) casting function: float(price_text), float("99.5")
        const floatMatch = valExpr.match(/^float\s*\((.+)\)$/);
        if (floatMatch) {
          let inner = floatMatch[1].trim();
          if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
            inner = inner.slice(1, -1);
          } else if (inner in variables) {
            inner = String(variables[inner]);
          }
          const parsed = parseFloat(inner);
          if (isNaN(parsed) || !/^-?\d+(?:\.\d+)?$/.test(inner.trim())) {
            return { output: '', error: `ValueError: could not convert string to float: '${inner}'` };
          }
          variables[varName] = parsed;
          continue;
        }

        // None literal
        if (valExpr === 'None') {
          variables[varName] = null;
          continue;
        }

        // Arithmetic / precedence expressions in assignment: result = a + b, square = num ** 2, a = 10 + 5 * 2, b = (10 + 5) * 2, c = 2 ** 3 + 4
        if (/[\+\-\*\/%]|^\s*\(/.test(valExpr)) {
          let expr = valExpr.replace(/\b([a-zA-Z_]\w*)\b/g, (match) => {
            if (match in variables && typeof variables[match] === 'number') {
              return String(variables[match]);
            }
            return match;
          });

          if (/^[\d\s\+\-\*\/\(\)\.%]+$/.test(expr)) {
            try {
              while (expr.includes('//')) {
                expr = expr.replace(/(-?\d+(?:\.\d+)?)\s*\/\/\s*(-?\d+(?:\.\d+)?)/g, (_, a, b) => {
                  return String(Math.floor(Number(a) / Number(b)));
                });
              }
              const evalResult = new Function(`return (${expr});`)();
              if (typeof evalResult === 'number' && !isNaN(evalResult)) {
                variables[varName] = evalResult;
                continue;
              }
            } catch {
              // fallback
            }
          }
        }

        const mathMatch = valExpr.match(/^([a-zA-Z_]\w*|-?\d+(?:\.\d+)?)\s*(\/\/|\*\*|[\+\-\*\/%])\s*([a-zA-Z_]\w*|-?\d+(?:\.\d+)?)$/);
        if (mathMatch) {
          const leftTok = mathMatch[1];
          const op = mathMatch[2];
          const rightTok = mathMatch[3];
          const leftVal = leftTok in variables ? Number(variables[leftTok]) : Number(leftTok);
          const rightVal = rightTok in variables ? Number(variables[rightTok]) : Number(rightTok);
          if (!isNaN(leftVal) && !isNaN(rightVal)) {
            if (op === '+') variables[varName] = leftVal + rightVal;
            else if (op === '-') variables[varName] = leftVal - rightVal;
            else if (op === '*') variables[varName] = leftVal * rightVal;
            else if (op === '**') variables[varName] = Math.pow(leftVal, rightVal);
            else if (op === '/') variables[varName] = leftVal / rightVal;
            else if (op === '//') variables[varName] = Math.floor(leftVal / rightVal);
            else if (op === '%') variables[varName] = ((leftVal % rightVal) + rightVal) % rightVal;
            continue;
          }
        }

        // Membership in assignment: res = "apple" in fruits, res = "grapes" not in fruits
        const memAssignMatch = valExpr.match(/^(.+?)\s+(not\s+in|in)\s+([a-zA-Z_]\w*)$/);
        if (memAssignMatch) {
          const leftRaw = memAssignMatch[1].trim();
          const op = memAssignMatch[2].trim();
          const rightColName = memAssignMatch[3].trim();
          let leftItem: any = leftRaw;
          if ((leftRaw.startsWith('"') && leftRaw.endsWith('"')) || (leftRaw.startsWith("'") && leftRaw.endsWith("'"))) {
            leftItem = leftRaw.slice(1, -1);
          } else if (leftRaw in variables) {
            leftItem = variables[leftRaw];
          } else if (!isNaN(Number(leftRaw))) {
            leftItem = Number(leftRaw);
          }
          const col = variables[rightColName];
          if (Array.isArray(col)) {
            const exists = col.includes(leftItem);
            variables[varName] = op === 'in' ? exists : !exists;
            continue;
          }
        }

        // Identity in assignment: res = a is b, res = a is not b
        const idAssignMatch = valExpr.match(/^([a-zA-Z_]\w*)\s+(is\s+not|is)\s+([a-zA-Z_]\w*)$/);
        if (idAssignMatch) {
          const leftVar = idAssignMatch[1].trim();
          const op = idAssignMatch[2].trim();
          const rightVar = idAssignMatch[3].trim();
          const leftRef = (variables as any)[`${leftVar}__obj_ref`] !== undefined ? (variables as any)[`${leftVar}__obj_ref`] : variables[leftVar];
          const rightRef = (variables as any)[`${rightVar}__obj_ref`] !== undefined ? (variables as any)[`${rightVar}__obj_ref`] : variables[rightVar];
          const isSame = leftRef !== undefined && rightRef !== undefined && leftRef === rightRef;
          variables[varName] = op === 'is' ? isSame : !isSame;
          continue;
        }

        // Boolean / logical expressions in assignment: eligible = age >= 18 and marks >= 60
        if (/\b(and|or|not)\b/.test(valExpr) || /==|!=|>=|<=|>|</.test(valExpr)) {
          let bExpr = valExpr.replace(/\b([a-zA-Z_]\w*)\b/g, (match) => {
            if (match in variables) {
              const val = variables[match];
              return typeof val === 'string' ? JSON.stringify(val) : String(val);
            }
            if (match === 'True') return 'true';
            if (match === 'False') return 'false';
            if (match === 'and') return '&&';
            if (match === 'or') return '||';
            if (match === 'not') return '!';
            return match;
          });
          try {
            const bRes = new Function(`return Boolean(${bExpr});`)();
            variables[varName] = bRes;
            continue;
          } catch {
            // fallback
          }
        }

        // List literal assignment: fruits = ["apple", "banana", "mango"] or a = [10, 20]
        if (valExpr.startsWith('[') && valExpr.endsWith(']')) {
          try {
            const parsedList = JSON.parse(valExpr.replace(/'/g, '"'));
            variables[varName] = parsedList;
            (variables as any)[`${varName}__obj_ref`] = Symbol(varName);
            continue;
          } catch {
            // fallback
          }
        }

        if ((valExpr.startsWith('"') && valExpr.endsWith('"')) || (valExpr.startsWith("'") && valExpr.endsWith("'"))) {
          variables[varName] = valExpr.slice(1, -1);
        } else if (valExpr === 'True' || valExpr === 'False') {
          variables[varName] = valExpr === 'True';
        } else if (!isNaN(Number(valExpr))) {
          variables[varName] = Number(valExpr);
        } else if (valExpr in variables) {
          variables[varName] = variables[valExpr];
          if ((variables as any)[`${valExpr}__obj_ref`]) {
            (variables as any)[`${varName}__obj_ref`] = (variables as any)[`${valExpr}__obj_ref`];
          }
        }
        continue;
      }

      // Print statement: print(...)
      const printMatch = line.match(/^print\s*\(([\s\S]*)\)$/);
      if (printMatch) {
        const contentInside = printMatch[1].trim();

        // Helper to evaluate an argument token
        const evalArg = (token: string): string => {
          token = token.trim();

          // Membership operators inside print: print("apple" in fruits), print("grapes" not in fruits)
          const memMatch = token.match(/^(.+?)\s+(not\s+in|in)\s+([a-zA-Z_]\w*)$/);
          if (memMatch) {
            const leftRaw = memMatch[1].trim();
            const op = memMatch[2].trim();
            const rightColName = memMatch[3].trim();
            let leftItem: any = leftRaw;
            if ((leftRaw.startsWith('"') && leftRaw.endsWith('"')) || (leftRaw.startsWith("'") && leftRaw.endsWith("'"))) {
              leftItem = leftRaw.slice(1, -1);
            } else if (leftRaw in variables) {
              leftItem = variables[leftRaw];
            } else if (!isNaN(Number(leftRaw))) {
              leftItem = Number(leftRaw);
            }
            const col = variables[rightColName];
            if (Array.isArray(col)) {
              const exists = col.includes(leftItem);
              if (op === 'in') return exists ? 'True' : 'False';
              if (op === 'not in') return !exists ? 'True' : 'False';
            }
          }

          // Identity operators inside print: print(a is b), print(a is c), print(a is not b)
          const idMatch = token.match(/^([a-zA-Z_]\w*)\s+(is\s+not|is)\s+([a-zA-Z_]\w*)$/);
          if (idMatch) {
            const leftVar = idMatch[1].trim();
            const op = idMatch[2].trim();
            const rightVar = idMatch[3].trim();
            const leftRef = (variables as any)[`${leftVar}__obj_ref`] !== undefined ? (variables as any)[`${leftVar}__obj_ref`] : variables[leftVar];
            const rightRef = (variables as any)[`${rightVar}__obj_ref`] !== undefined ? (variables as any)[`${rightVar}__obj_ref`] : variables[rightVar];
            const isSame = leftRef !== undefined && rightRef !== undefined && leftRef === rightRef;
            if (op === 'is') return isSame ? 'True' : 'False';
            if (op === 'is not') return !isSame ? 'True' : 'False';
          }

          // Logical expressions inside print: print(has_id or has_pass), print(not has_id), print(has_id and has_pass)
          if (/\b(and|or|not)\b/.test(token)) {
            let lExpr = token.replace(/\b([a-zA-Z_]\w*)\b/g, (match) => {
              if (match in variables) {
                const val = variables[match];
                return typeof val === 'string' ? JSON.stringify(val) : String(val);
              }
              if (match === 'True') return 'true';
              if (match === 'False') return 'false';
              if (match === 'and') return '&&';
              if (match === 'or') return '||';
              if (match === 'not') return '!';
              return match;
            });
            try {
              const lRes = new Function(`return Boolean(${lExpr});`)();
              return lRes ? 'True' : 'False';
            } catch {
              // fallback
            }
          }

          // type(...) inspection support: type(name), type(age), type(None), etc.
          const typeMatch = token.match(/^type\s*\((.+)\)$/);
          if (typeMatch) {
            const inner = typeMatch[1].trim();
            let targetVal: any = undefined;
            if (inner in variables) {
              targetVal = variables[inner];
            } else if (inner === 'None') {
              targetVal = null;
            } else if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
              targetVal = inner.slice(1, -1);
            } else if (inner === 'True' || inner === 'False') {
              targetVal = inner === 'True';
            } else if (!isNaN(Number(inner))) {
              targetVal = Number(inner);
            }

            if (targetVal === null) {
              return "<class 'NoneType'>";
            } else if (typeof targetVal === 'boolean') {
              return "<class 'bool'>";
            } else if (typeof targetVal === 'number') {
              return Number.isInteger(targetVal) ? "<class 'int'>" : "<class 'float'>";
            } else if (typeof targetVal === 'string') {
              return "<class 'str'>";
            }
            return "<class 'str'>";
          }

          if (token === 'None') {
            return 'None';
          }

          // Comparison operators inside print: print(a == b), print(a != b), print(a > b), print(a < b), print(a >= b), print(a <= b)
          const compInside = token.match(/^([a-zA-Z_]\w*|-?\d+(?:\.\d+)?)\s*(==|!=|>=|<=|>|<)\s*([a-zA-Z_]\w*|-?\d+(?:\.\d+)?)$/);
          if (compInside) {
            const leftTok = compInside[1];
            const op = compInside[2];
            const rightTok = compInside[3];
            const leftVal = leftTok in variables ? variables[leftTok] : (isNaN(Number(leftTok)) ? leftTok : Number(leftTok));
            const rightVal = rightTok in variables ? variables[rightTok] : (isNaN(Number(rightTok)) ? rightTok : Number(rightTok));
            if (Array.isArray(leftVal) && Array.isArray(rightVal)) {
              const eq = JSON.stringify(leftVal) === JSON.stringify(rightVal);
              if (op === '==') return eq ? 'True' : 'False';
              if (op === '!=') return !eq ? 'True' : 'False';
            }
            if (op === '==') return leftVal === rightVal ? 'True' : 'False';
            if (op === '!=') return leftVal !== rightVal ? 'True' : 'False';
            if (op === '>') return leftVal > rightVal ? 'True' : 'False';
            if (op === '<') return leftVal < rightVal ? 'True' : 'False';
            if (op === '>=') return leftVal >= rightVal ? 'True' : 'False';
            if (op === '<=') return leftVal <= rightVal ? 'True' : 'False';
          }

          // Arithmetic inside print: print(a + b), print(a / b), print(a // b), print(a % b), print(a ** b)
          const mathInside = token.match(/^([a-zA-Z_]\w*|-?\d+(?:\.\d+)?)\s*(\/\/|\*\*|[\+\-\*\/%])\s*([a-zA-Z_]\w*|-?\d+(?:\.\d+)?)$/);
          if (mathInside) {
            const leftTok = mathInside[1];
            const op = mathInside[2];
            const rightTok = mathInside[3];
            const leftVal = leftTok in variables ? Number(variables[leftTok]) : Number(leftTok);
            const rightVal = rightTok in variables ? Number(variables[rightTok]) : Number(rightTok);
            if (!isNaN(leftVal) && !isNaN(rightVal)) {
              if (op === '+') return String(leftVal + rightVal);
              if (op === '-') return String(leftVal - rightVal);
              if (op === '*') return String(leftVal * rightVal);
              if (op === '**') return String(Math.pow(leftVal, rightVal));
              if (op === '/') {
                const div = leftVal / rightVal;
                return Number.isInteger(div) ? div.toFixed(1) : String(div);
              }
              if (op === '//') return String(Math.floor(leftVal / rightVal));
              if (op === '%') return String(((leftVal % rightVal) + rightVal) % rightVal);
            }
          }

          if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'"))) {
            return token.slice(1, -1).replace(/\\n/g, '\n');
          }
          if (token.startsWith('"""') && token.endsWith('"""')) {
            return token.slice(3, -3).replace(/\\n/g, '\n');
          }
          if (token.startsWith('f"') || token.startsWith("f'")) {
            let str = token.slice(2, -1);
            str = str.replace(/\{([a-zA-Z_]\w*)(?::(\.\d+f))?\}/g, (_, key, fmt) => {
              if (key in variables) {
                const val = variables[key];
                if (fmt && typeof val === 'number') {
                  const decimals = parseInt(fmt.replace(/[^\d]/g, ''), 10) || 2;
                  return val.toFixed(decimals);
                }
                return String(val);
              }
              return `{${key}}`;
            });
            return str.replace(/\\n/g, '\n');
          }
          if (token in variables) {
            const v = variables[token];
            if (v === null || v === undefined) return 'None';
            if (v === true) return 'True';
            if (v === false) return 'False';
            if (typeof v === 'number' && (variables as any)[`${token}__is_float`] && Number.isInteger(v)) {
              return v.toFixed(1);
            }
            return String(v);
          }
          if (!isNaN(Number(token))) {
            return token;
          }
          return token.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n');
        };

        // Split args by comma when outside quotes
        const splitArgs = (str: string): string[] => {
          const parts: string[] = [];
          let cur = '';
          let inD = false;
          let inS = false;
          for (let i = 0; i < str.length; i++) {
            const ch = str[i];
            if (ch === '"' && !inS) inD = !inD;
            else if (ch === "'" && !inD) inS = !inS;
            else if (ch === ',' && !inD && !inS) {
              parts.push(cur);
              cur = '';
              continue;
            }
            cur += ch;
          }
          if (cur.trim()) parts.push(cur);
          return parts;
        };

        const rawArgs = splitArgs(contentInside);
        const resolvedArgs = rawArgs.map(evalArg);
        outputs.push(resolvedArgs.join(' '));
      }
    }

    return { output: outputs.join('\n') };
  } catch (err: any) {
    return { output: '', error: err?.message || 'SyntaxError: Invalid Python syntax' };
  }
}