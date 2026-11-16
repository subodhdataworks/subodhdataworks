import { buildOperatorsQuestionConfig, OperatorVisualDetails } from "./operatorsVisualEngine";
import { buildConditionalsQuestionConfig } from "./conditionalsVisualEngine";
import { buildStringsQuestionConfig } from "./stringsVisualEngine";
import { buildListsTuplesQuestionConfig } from "./listsTuplesVisualEngine";
import { buildSetsDictsQuestionConfig } from "./setsDictsVisualEngine";
import { buildProblemSolvingQuestionConfig } from "./problemSolvingVisualEngine";
import { buildOOPQuestionConfig } from "./oopVisualEngine";
import { MODULE_10_TOPIC_QUESTIONS, MODULE_09_TOPIC_QUESTIONS, MODULE_08_TOPIC_QUESTIONS, MODULE_07_TOPIC_QUESTIONS, MODULE_06_TOPIC_QUESTIONS, MODULE_05_TOPIC_QUESTIONS, MODULE_04_TOPIC_QUESTIONS, MODULE_03_TOPIC_QUESTIONS, MODULE_02_TOPIC_QUESTIONS, TopicQuestion } from "./data/pythonBasics140QuestionsData";
/**
 * Smart Python Classroom V5 - Multi-Question (Questions 1 to 10) Diagnostic & Help Engine
 * 
 * Deterministic, zero-paid-API helper providing:
 * 1. Interactive Visual Teaching Sequences for Questions 1-10
 * 2. Progressive 3-tier Hints for Questions 1-10
 * 3. Intelligent "Explain My Error" diagnostics in natural Hinglish
 * 4. Contextual "Teacher Help" FAQs in natural Hinglish
 * 5. Accurate validation rules honoring personalized names & exact messages
 */

export interface ConceptBox {
  label: string;
  sublabel: string;
  isActive: boolean;
}

export interface TeachingStep {
  step: number;
  totalSteps: number;
  title: string;
  conceptKey: 'print' | 'brackets' | 'string' | 'output' | 'numbers' | 'multiple_lines' | 'arguments' | 'banner' | string;
  speechHinglish: string;
  speechEnglish: string;
  cardExplanationHinglish: string;
  cardExplanationEnglish: string;
  visualTarget: string;
  visualLabel: string;
  visualSublabel: string;
  consoleOutput: string;
  isConsoleVisible: boolean;
  highlightLine?: number;
  highlightToken?: string;
  conceptBoxes?: ConceptBox[];
  operatorDetails?: OperatorVisualDetails;
}

export interface ProgressiveHint {
  level: number;
  name: string;
  badge: string;
  hintHinglish: string;
  hintEnglish: string;
}

export interface ErrorDiagnostic {
  type: string;
  title: string;
  lineNumber?: number;
  lineSnippet?: string;
  exactIssue?: string;
  explanationHinglish: string;
  explanationEnglish: string;
  fixSuggestionHinglish: string;
  fixSuggestionEnglish: string;
}

export interface DiagnosePythonOptions {
  studentCode: string;
  stdout?: string;
  rawError?: string | null;
  expectedOutput?: string;
  referenceCode?: string;
  problemStatement?: string;
  questionTitle?: string;
}

export interface TeacherHelpTopic {
  id: string;
  questionHinglish: string;
  questionEnglish: string;
  answerHinglish: string;
  answerEnglish: string;
}

export interface QuestionV5Config {
  number: number;
  title: string;
  problemStatement: string;
  instructions: string;
  referenceCode: string;
  starterCode: string;
  sampleInput: string;
  expectedOutput: string;
  isPersonalized?: boolean;
  teachingSteps: TeachingStep[];
  hints: ProgressiveHint[];
  validate: (code: string, stdout: string) => { passed: boolean; message: string };
  diagnose: (code: string, stdout: string, rawError: string | null) => ErrorDiagnostic;
}

// ─── QUESTION 1: Print Hello, World! (Preserved Exactly) ───
export const HELLO_WORLD_TEACHING_STEPS: TeachingStep[] = [
  {
    step: 1,
    totalSteps: 4,
    title: 'print Function',
    conceptKey: 'print',
    speechHinglish:
      'Achha, aaj hum apna pehla Python program banayenge. Humein screen par Hello, World! dikhana hai. Iske liye hum print() function use karte hain.',
    speechEnglish:
      "Today we'll write our first Python program. To display Hello, World! on the screen, we use the print() function.",
    cardExplanationHinglish:
      'Achha, aaj hum apna pehla Python program banayenge. Humein screen par Hello, World! dikhana hai. Iske liye hum print() function use karte hain.',
    cardExplanationEnglish:
      "To display any message or text on the console in Python, we always use the built-in print() function.",
    visualTarget: 'print',
    visualLabel: 'print()',
    visualSublabel: 'Yeh ek function hai, jo screen par output dikhata hai.',
    consoleOutput: '',
    isConsoleVisible: false,
  },
  {
    step: 2,
    totalSteps: 4,
    title: 'Round Brackets',
    conceptKey: 'brackets',
    speechHinglish:
      'Ab print ke baad jo round brackets hain, unhe dekho. Python mein kisi bhi function ko call karte waqt brackets lagana zaroori hota hai. Inhi brackets ke andar hum apna message pass karte hain.',
    speechEnglish:
      'Notice the round brackets after print. In Python, whenever you call a function, parentheses are required. Inside them, we pass our data or message.',
    cardExplanationHinglish:
      'Round brackets function ka gatekeeper hain. Jo bhi data screen par bhejna ho, hum inhi do brackets ke beech mein likhte hain.',
    cardExplanationEnglish:
      'Parentheses allow you to pass arguments into the function. Whatever you want printed must go inside these brackets.',
    visualTarget: 'brackets',
    visualLabel: '()',
    visualSublabel: 'Function ke brackets, jinme arguments pass hote hain.',
    consoleOutput: '',
    isConsoleVisible: false,
  },
  {
    step: 3,
    totalSteps: 4,
    title: 'String and Double Quotes',
    conceptKey: 'string',
    speechHinglish:
      'Aur ye double quotes? Inke andar likha text ek String kehlata hai. Python quotes dekhkar samajh jata hai ki ye exact text hai, koi variable ya command nahi.',
    speechEnglish:
      'The text inside double quotes is called a String. Python uses quotes to identify raw text instead of code keywords.',
    cardExplanationHinglish:
      'Quotes ke andar jo bhi likha hoga, Python use bina kisi change ke exact screen par print kar dega. Ise String kehte hain.',
    cardExplanationEnglish:
      'Text enclosed in quotation marks is recognized as string literals. Python outputs the characters exactly as typed.',
    visualTarget: 'string',
    visualLabel: '"Hello, World!"',
    visualSublabel: 'Yeh ek String hai (text), jo humein dikhana hai.',
    consoleOutput: '',
    isConsoleVisible: false,
  },
  {
    step: 4,
    totalSteps: 4,
    title: 'Console Output',
    conceptKey: 'output',
    speechHinglish:
      'Ab jaise hi ye program run hoga, print function is message ko Console Output screen par bhej dega. Aur dekho, screen par aa gaya Hello, World! Ab neeche jakar Coding Practice karein. Koi bhi dikkat aane par Explain My Error par click karein!',
    speechEnglish:
      'When this code runs, the print statement sends the string to the Console Output. Now scroll down to practice your code, and click Explain My Error if you get stuck!',
    cardExplanationHinglish:
      'Program run hone par Console par message display ho gaya. Ab neeche jakar Coding Practice karein, aur koi dikkat aane par Explain My Error par click karein.',
    cardExplanationEnglish:
      'The message is rendered in the Console. Now scroll down to start Coding Practice, and use Explain My Error if needed.',
    visualTarget: 'output',
    visualLabel: 'Hello, World!',
    visualSublabel: 'Terminal console par safal output generate ho gaya.',
    consoleOutput: 'Hello, World!',
    isConsoleVisible: true,
  },
];

export const HELLO_WORLD_HINTS: ProgressiveHint[] = [
  {
    level: 1,
    name: 'Concept Clue',
    badge: 'Hint 1 of 3',
    hintHinglish:
      'Screen par message display karne ke liye Python ka built-in `print()` function use hota hai.',
    hintEnglish:
      'Use Python\'s built-in `print()` function to display text on the terminal screen.',
  },
  {
    level: 2,
    name: 'Guided Explanation',
    badge: 'Hint 2 of 3',
    hintHinglish:
      'Function ke naam ke baad round brackets lagao: `print(...)`. Jo bhi text print karna ho, use brackets ke andar rakho.',
    hintEnglish:
      'Place round parentheses right after the function name: `print(...)`. Place what you want to print inside.',
  },
  {
    level: 3,
    name: 'Syntax Guidance',
    badge: 'Hint 3 of 3',
    hintHinglish:
      'Text ko double quotes mein likho: `"Hello, World!"`. Dono brackets aur quotes match hone chahiye.',
    hintEnglish:
      'Enclose the greeting in double quotes: `"Hello, World!"`. Ensure both opening and closing quotes match.',
  },
];

export function diagnosePythonError(options: DiagnosePythonOptions): ErrorDiagnostic {
  const {
    studentCode,
    stdout = '',
    rawError = null,
    expectedOutput = '',
    referenceCode = '',
  } = options;

  const lines = studentCode.split('\n');
  const cleanCode = studentCode.trim();

  // 1. Empty Code Check
  if (!cleanCode) {
    const refSnippet = referenceCode.split('\n')[0] || 'print("Hello, World!")';
    return {
      type: 'empty',
      title: 'Khaali Code (Editor is Empty)',
      lineNumber: 1,
      lineSnippet: '',
      exactIssue: 'Editor mein koi code nahi likha gaya hai.',
      explanationHinglish: 'Aapka code editor abhi poori tarah khaali hai. Question solve karne ke liye solution code likhein.',
      explanationEnglish: 'Your code editor is empty. Please write code to solve this challenge.',
      fixSuggestionHinglish: 'Editor mein code likhein, jaise: ' + refSnippet,
      fixSuggestionEnglish: 'Type code in the editor, e.g.: ' + refSnippet
    };
  }

  // 2. Line-by-line check: Unclosed String Quotes (" or ')
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    let inSingle = false;
    let inDouble = false;
    for (let c = 0; c < rawLine.length; c++) {
      const ch = rawLine[c];
      const prev = c > 0 ? rawLine[c - 1] : '';
      if (ch === '#' && !inSingle && !inDouble) {
        break;
      }
      if (ch === '"' && prev !== '\\') {
        if (!inSingle) inDouble = !inDouble;
      } else if (ch === "'" && prev !== '\\') {
        if (!inDouble) inSingle = !inSingle;
      }
    }
    if (inDouble) {
      return {
        type: 'unclosed_quote',
        title: 'SyntaxError: Unclosed Double Quote (") on Line ' + lineNum,
        lineNumber: lineNum,
        lineSnippet: rawLine,
        exactIssue: 'Line ' + lineNum + ' par double quote (") open hua hai lekin close nahi kiya gaya.',
        explanationHinglish: 'Line ' + lineNum + ' par string quote (") shuru kiya gaya hai, lekin line ke end tak use close nahi kiya gaya. Python mein har string ko match hone wale quote se band karna padta hai.',
        explanationEnglish: 'Line ' + lineNum + ' has an unclosed string literal. String started with double quote (") was never terminated.',
        fixSuggestionHinglish: 'Line ' + lineNum + ' par text ke baad closing quote (") lagayein.',
        fixSuggestionEnglish: 'Add a closing quote (") to close the string on Line ' + lineNum + '.'
      };
    }
    if (inSingle) {
      return {
        type: 'unclosed_quote',
        title: "SyntaxError: Unclosed Single Quote (') on Line " + lineNum,
        lineNumber: lineNum,
        lineSnippet: rawLine,
        exactIssue: "Line " + lineNum + " par single quote (') open hua hai lekin close nahi kiya gaya.",
        explanationHinglish: "Line " + lineNum + " par single quote (') shuru kiya gaya hai lekin line khatam hone tak close nahi hua.",
        explanationEnglish: "Line " + lineNum + " has an unclosed single quote string.",
        fixSuggestionHinglish: "Line " + lineNum + " par text ke baad closing quote (') lagayein.",
        fixSuggestionEnglish: "Add a closing quote (') on Line " + lineNum + "."
      };
    }
  }

  // 3. Bracket matching (Parentheses (), Square brackets [], Curly braces {})
  const bracketStack: Array<{ char: string; line: number; col: number; snippet: string }> = [];
  const matchMap: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    let inStr = false;
    let strChar = '';

    for (let c = 0; c < rawLine.length; c++) {
      const ch = rawLine[c];
      const prev = c > 0 ? rawLine[c - 1] : '';

      if (ch === '#' && !inStr) break;

      if ((ch === '"' || ch === "'") && prev !== '\\') {
        if (!inStr) {
          inStr = true;
          strChar = ch;
        } else if (strChar === ch) {
          inStr = false;
        }
        continue;
      }

      if (inStr) continue;

      if (ch === '(' || ch === '[' || ch === '{') {
        bracketStack.push({ char: ch, line: lineNum, col: c + 1, snippet: rawLine });
      } else if (ch === ')' || ch === ']' || ch === '}') {
        if (bracketStack.length === 0) {
          return {
            type: 'extra_closing_bracket',
            title: "SyntaxError: Unmatched Closing '" + ch + "' on Line " + lineNum,
            lineNumber: lineNum,
            lineSnippet: rawLine,
            exactIssue: "Line " + lineNum + " par bina kisi opening bracket ke extra '" + ch + "' likha gaya hai.",
            explanationHinglish: "Line " + lineNum + " par extra closing bracket '" + ch + "' mila jiska koi matching opening bracket nahi tha.",
            explanationEnglish: "Unmatched closing bracket '" + ch + "' on Line " + lineNum + ".",
            fixSuggestionHinglish: "Line " + lineNum + " se extra '" + ch + "' ko delete karein.",
            fixSuggestionEnglish: "Remove the extra '" + ch + "' from Line " + lineNum + "."
          };
        }
        const top = bracketStack.pop()!;
        if (top.char !== matchMap[ch]) {
          return {
            type: 'mismatched_bracket',
            title: "SyntaxError: Mismatched Bracket on Line " + lineNum,
            lineNumber: lineNum,
            lineSnippet: rawLine,
            exactIssue: "Line " + top.line + " par '" + top.char + "' open hua tha lekin Line " + lineNum + " par '" + ch + "' se close karne ki koshish ki.",
            explanationHinglish: "Brackets match nahi ho rahe: '" + top.char + "' ke sath matching pair hona chahiye, '" + ch + "' nahi.",
            explanationEnglish: "Mismatched bracket on Line " + lineNum + ": closed with '" + ch + "' instead of matching pair for '" + top.char + "'.",
            fixSuggestionHinglish: "Line " + lineNum + " par sahi matching bracket lagayein.",
            fixSuggestionEnglish: "Correct the closing bracket to match '" + top.char + "'."
          };
        }
      }
    }
  }

  if (bracketStack.length > 0) {
    const unclosed = bracketStack[bracketStack.length - 1];
    const missingClosing = unclosed.char === '(' ? ')' : unclosed.char === '[' ? ']' : '}';
    return {
      type: 'missing_closing_bracket',
      title: "SyntaxError: Missing Closing '" + missingClosing + "' on Line " + unclosed.line,
      lineNumber: unclosed.line,
      lineSnippet: unclosed.snippet,
      exactIssue: "Line " + unclosed.line + " par opening bracket '" + unclosed.char + "' shuru hua tha lekin closing '" + missingClosing + "' missing hai.",
      explanationHinglish: "Line " + unclosed.line + " par bracket '" + unclosed.char + "' open hua hai lekin statement ke end mein closing '" + missingClosing + "' lagana bhool gaye hain.",
      explanationEnglish: "Missing closing '" + missingClosing + "' for bracket opened on Line " + unclosed.line + ".",
      fixSuggestionHinglish: "Line " + unclosed.line + " ke aakhiri mein closing bracket '" + missingClosing + "' lagayein.",
      fixSuggestionEnglish: "Add a closing '" + missingClosing + "' at the end of Line " + unclosed.line + "."
    };
  }

  // 4. Missing Colon ':' on Compound Statements (def, if, elif, else, for, while, class, try, except)
  const blockKeywords = [
    { regex: /^\s*def\s+[a-zA-Z_][a-zA-Z0-9_]*\s*\(.*\)\s*$/, kw: 'def' },
    { regex: /^\s*if\s+.+$/, kw: 'if' },
    { regex: /^\s*elif\s+.+$/, kw: 'elif' },
    { regex: /^\s*else\s*$/, kw: 'else' },
    { regex: /^\s*for\s+.+\s+in\s+.+$/, kw: 'for' },
    { regex: /^\s*while\s+.+$/, kw: 'while' },
    { regex: /^\s*class\s+[a-zA-Z_][a-zA-Z0-9_]*(\s*\(.*\))?\s*$/, kw: 'class' },
    { regex: /^\s*try\s*$/, kw: 'try' },
    { regex: /^\s*except(\s+.+)?$/, kw: 'except' },
    { regex: /^\s*finally\s*$/, kw: 'finally' }
  ];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    const codePart = rawLine.split('#')[0].trimEnd();
    if (!codePart.trim()) continue;

    for (const bk of blockKeywords) {
      if (bk.regex.test(codePart)) {
        if (!codePart.endsWith(':')) {
          return {
            type: 'missing_colon',
            title: "SyntaxError: Missing Colon ':' on Line " + lineNum,
            lineNumber: lineNum,
            lineSnippet: rawLine,
            exactIssue: "Line " + lineNum + " par '" + bk.kw + "' statement ke aakhiri mein colon ':' missing hai.",
            explanationHinglish: "Python mein har '" + bk.kw + "' statement header ke baad colon ':' lagana mandatory hota hai.",
            explanationEnglish: "Missing colon ':' at the end of the '" + bk.kw + "' header on Line " + lineNum + ".",
            fixSuggestionHinglish: "Line " + lineNum + " ke end mein ':' lagayein: " + codePart.trim() + ":",
            fixSuggestionEnglish: "Append ':' to Line " + lineNum + ": " + codePart.trim() + ":"
          };
        }
      }
    }
  }

  // 5. Common Typos in Python Builtins / Keywords
  const typoDict: Record<string, string> = {
    pritn: 'print', prnt: 'print', primt: 'print', pirnt: 'print',
    imput: 'input', inpt: 'input',
    whlie: 'while', wile: 'while',
    fro: 'for',
    calss: 'class', clas: 'class',
    defination: 'def', defa: 'def',
    retun: 'return', retrun: 'return', reutrn: 'return',
    ture: 'True', flase: 'False',
    elsif: 'elif', elseif: 'elif',
    lenght: 'len',
    integar: 'int', interger: 'int',
    stirng: 'str'
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    const words = rawLine.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
    for (const w of words) {
      const lower = w.toLowerCase();
      if (typoDict[lower]) {
        const correct = typoDict[lower];
        return {
          type: 'typo',
          title: 'NameError / Typo: "' + w + '" on Line ' + lineNum,
          lineNumber: lineNum,
          lineSnippet: rawLine,
          exactIssue: 'Line ' + lineNum + ' par spelling mistake hai: "' + w + '" ki jagah sahi keyword "' + correct + '" hona chahiye.',
          explanationHinglish: 'Line ' + lineNum + ' par typo mila: "' + w + '". Python case-sensitive hai aur is naam ka koi function nahi janta. Sahi naam "' + correct + '" hai.',
          explanationEnglish: 'Typo detected on Line ' + lineNum + ': "' + w + '" should be "' + correct + '".',
          fixSuggestionHinglish: 'Line ' + lineNum + ' par "' + w + '" ko "' + correct + '" se replace karein.',
          fixSuggestionEnglish: 'Replace "' + w + '" with "' + correct + '" on Line ' + lineNum + '.'
        };
      }
    }
  }

  // 6. Assignment in Condition: if x = 5:
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    const condMatch = rawLine.match(/^\s*(if|elif|while)\s+([^#:]+)/);
    if (condMatch) {
      const expr = condMatch[2];
      if (/(?<![<>=!])=(?![=])/.test(expr)) {
        return {
          type: 'assignment_in_condition',
          title: "SyntaxError: Assignment '=' in Condition on Line " + lineNum,
          lineNumber: lineNum,
          lineSnippet: rawLine,
          exactIssue: "Line " + lineNum + " par condition check ke liye single '=' use hua hai jo assignment karta hai.",
          explanationHinglish: "Line " + lineNum + " par '" + condMatch[1] + "' ke andar single '=' likha hai. Python mein values compare karne ke liye double equals '==' use karte hain.",
          explanationEnglish: "Single '=' assignment used in condition on Line " + lineNum + ". Use '==' for equality comparison.",
          fixSuggestionHinglish: "'=' ki jagah '==' likhein: " + condMatch[1] + " ... == ...:",
          fixSuggestionEnglish: "Change '=' to '==' in condition."
        };
      }
    }
  }

  // 7. Indentation Check
  for (let i = 0; i < lines.length - 1; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    const trimmed = rawLine.split('#')[0].trimEnd();

    if (trimmed.endsWith(':')) {
      let targetIdx = i + 1;
      while (targetIdx < lines.length && !lines[targetIdx].trim()) {
        targetIdx++;
      }
      if (targetIdx < lines.length) {
        const targetLine = lines[targetIdx];
        const prevIndent = rawLine.search(/\S|$/);
        const nextIndent = targetLine.search(/\S|$/);
        if (nextIndent <= prevIndent && targetLine.trim() && !targetLine.trim().startsWith('#')) {
          return {
            type: 'indentation',
            title: "IndentationError: Expected Indented Block on Line " + (targetIdx + 1),
            lineNumber: targetIdx + 1,
            lineSnippet: targetLine,
            exactIssue: "Line " + (targetIdx + 1) + " par indented code expected tha kyunki Line " + lineNum + " par ':' statement open hua hai.",
            explanationHinglish: "Line " + (targetIdx + 1) + " par IndentationError mila. Python mein ':' ke baad aane wali lines ko 4 spaces (Tab) se aage indent karna zaroori hota hai.",
            explanationEnglish: "Expected an indented block after statement on Line " + lineNum + ".",
            fixSuggestionHinglish: "Line " + (targetIdx + 1) + " ke shuru mein 4 spaces (Tab) lagayein.",
            fixSuggestionEnglish: "Add 4 spaces of indentation to Line " + (targetIdx + 1) + "."
          };
        }
      }
    }
  }

  // 8. Missing Quotes around String inside print()
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const lineNum = i + 1;
    const printMatch = rawLine.match(/print\s*\(([^)]*)\)/);
    if (printMatch) {
      const arg = printMatch[1].trim();
      if (arg && !arg.startsWith('"') && !arg.startsWith("'") && !arg.startsWith('f"') && !arg.startsWith("f'")) {
        if (/^[a-zA-Z\s,]+$/.test(arg) && arg !== 'True' && arg !== 'False' && arg !== 'None') {
          if (arg.includes(' ') || arg.includes(',')) {
            return {
              type: 'missing_string_quotes',
              title: "NameError: Missing Quotes around Text on Line " + lineNum,
              lineNumber: lineNum,
              lineSnippet: rawLine,
              exactIssue: 'Line ' + lineNum + ' par print ke andar text "' + arg + '" bina quotation marks ke likha gaya hai.',
              explanationHinglish: 'Line ' + lineNum + ' par text ko quotes ("...") mein nahi likha gaya. Python bina quotes wale text ko variable name samjhta hai jo define nahi hai.',
              explanationEnglish: "Missing quotation marks around string argument on Line " + lineNum + ".",
              fixSuggestionHinglish: 'Text ke aage-peeche double quotes lagayein: print("' + arg + '")',
              fixSuggestionEnglish: 'Wrap text in quotes: print("' + arg + '")'
            };
          }
        }
      }
    }
  }

  // 9. Real Python Runtime Error from stderr / rawError
  if (rawError) {
    const lineMatch = rawError.match(/line (\d+)/i);
    let parsedLine = lineMatch ? parseInt(lineMatch[1], 10) : undefined;
    if (parsedLine && parsedLine > lines.length) {
      parsedLine = parsedLine - 15;
      if (parsedLine < 1) parsedLine = 1;
    }
    const snippet = parsedLine && lines[parsedLine - 1] ? lines[parsedLine - 1] : (lines[0] || '');

    if (rawError.includes('ZeroDivisionError')) {
      return {
        type: 'zero_division',
        title: "ZeroDivisionError: Division by Zero on Line " + (parsedLine || 1),
        lineNumber: parsedLine || 1,
        lineSnippet: snippet,
        exactIssue: "Line " + (parsedLine || 1) + " par number ko 0 se divide kiya gaya hai.",
        explanationHinglish: "Line " + (parsedLine || 1) + " par ZeroDivisionError aaya. Mathematics aur Python mein kisi number ko zero se divide karna mathematically impossible hai.",
        explanationEnglish: "Division by zero attempted on Line " + (parsedLine || 1) + ".",
        fixSuggestionHinglish: "Denominator ko non-zero value se replace karein ya zero check lagayein.",
        fixSuggestionEnglish: "Ensure divisor is not zero on Line " + (parsedLine || 1) + "."
      };
    }

    if (rawError.includes('TypeError')) {
      return {
        type: 'type_error',
        title: "TypeError on Line " + (parsedLine || 1),
        lineNumber: parsedLine || 1,
        lineSnippet: snippet,
        exactIssue: rawError.split('\n').filter(l => l.includes('TypeError'))[0] || 'Incompatible data types operation',
        explanationHinglish: "Line " + (parsedLine || 1) + " par TypeError aaya. Do alag types (jaise string aur int) ke beech incompatible operation kiya gaya hai.",
        explanationEnglish: "TypeError occurred on Line " + (parsedLine || 1) + ".",
        fixSuggestionHinglish: "Types ko convert karein: int(), str(), ya float() use karein.",
        fixSuggestionEnglish: "Convert variables using int() or str() before operating."
      };
    }

    if (rawError.includes('NameError')) {
      const nameMatch = rawError.match(/name '([^']+)' is not defined/);
      const varName = nameMatch ? nameMatch[1] : '';
      return {
        type: 'name_error',
        title: "NameError: '" + varName + "' is not defined on Line " + (parsedLine || 1),
        lineNumber: parsedLine || 1,
        lineSnippet: snippet,
        exactIssue: "Line " + (parsedLine || 1) + " par variable ya function '" + varName + "' use kiya gaya hai jo define nahi hai.",
        explanationHinglish: "Line " + (parsedLine || 1) + " par Python ko '" + varName + "' nahi mila. Ya to spelling galat hai, ya use pehle assign nahi kiya gaya.",
        explanationEnglish: "Name '" + varName + "' is not defined on Line " + (parsedLine || 1) + ".",
        fixSuggestionHinglish: "'" + varName + "' ki spelling check karein ya use pehle assign karein.",
        fixSuggestionEnglish: "Define '" + varName + "' before using it or verify spelling."
      };
    }
  }

  // 10. Output Mismatch against expectedOutput
  if (expectedOutput) {
    const cleanActual = stdout.trim();
    const cleanExpected = expectedOutput.trim();

    if (cleanActual !== cleanExpected) {
      if (cleanActual.toLowerCase() === cleanExpected.toLowerCase()) {
        return {
          type: 'output_casing',
          title: 'Output Mismatch: Capital/Small Letter Casing',
          lineNumber: lines.length,
          lineSnippet: lines[lines.length - 1],
          exactIssue: 'Aapka output "' + cleanActual + '" aaya jabki expected "' + cleanExpected + '" hai (Capital letters ka farq hai).',
          explanationHinglish: 'Aapka program chal raha hai lekin Python exact matching karta hai. Upper-case aur lower-case letters test case se exact match hone chahiye.',
          explanationEnglish: 'Letter casing mismatch: Expected "' + cleanExpected + '", received "' + cleanActual + '".',
          fixSuggestionHinglish: 'Capital letters check karein: expected text "' + cleanExpected + '" hai.',
          fixSuggestionEnglish: 'Match exact letter case: "' + cleanExpected + '".'
        };
      }

      const punctList = ['!', '.', ',', '?', ':', ';'];
      for (const p of punctList) {
        if (cleanExpected.endsWith(p) && !cleanActual.endsWith(p)) {
          return {
            type: 'output_punctuation',
            title: "Output Mismatch: Missing '" + p + "' at the End",
            lineNumber: lines.length,
            lineSnippet: lines[lines.length - 1],
            exactIssue: "Expected output ke end mein '" + p + "' hai jo aapke output mein missing hai.",
            explanationHinglish: "Output ke aakhiri mein punctuation mark '" + p + "' lagana bhool gaye hain. Expected: \"" + cleanExpected + "\", Mila: \"" + cleanActual + "\".",
            explanationEnglish: "Missing '" + p + "' punctuation mark at the end of output.",
            fixSuggestionHinglish: "Text ke aakhiri mein '" + p + "' add karein: \"" + cleanExpected + "\"",
            fixSuggestionEnglish: "Add '" + p + "' to the end of your string: \"" + cleanExpected + "\""
          };
        }
      }

      return {
        type: 'output_mismatch',
        title: 'Output Mismatch: Result Differed from Expected',
        lineNumber: lines.length,
        lineSnippet: lines[lines.length - 1],
        exactIssue: 'Expected: "' + cleanExpected + '", mila: "' + cleanActual + '".',
        explanationHinglish: 'Aapka code execute ho gaya lekin console output test case se match nahi kiya. Expected output: "' + cleanExpected + '", mila: "' + cleanActual + '".',
        explanationEnglish: 'Execution completed but output differed. Expected: "' + cleanExpected + '", received: "' + cleanActual + '".',
        fixSuggestionHinglish: 'Output ko test case ke mutabiq print karein: "' + cleanExpected + '"',
        fixSuggestionEnglish: 'Produce the exact expected output: "' + cleanExpected + '"'
      };
    }
  }

  // 11. Fallback Notice
  return {
    type: 'unknown',
    title: 'Code Review Notice',
    lineNumber: 1,
    lineSnippet: lines[0] || '',
    exactIssue: 'Code syntax correct hai, test case verification check karein.',
    explanationHinglish: 'Code mein koi obvious syntax error nahi mila. Problem statement aur input-output requirements ko dobara check karein.',
    explanationEnglish: 'No syntax error detected. Review question requirements and expected output.',
    fixSuggestionHinglish: 'Question ki requirements aur logic ko step-by-step match karein.',
    fixSuggestionEnglish: 'Follow the instructions step by step to solve the challenge.'
  };
}

export function diagnoseHelloWorldError(studentCode: string, stdout: string, rawError: string | null): ErrorDiagnostic {
  return diagnosePythonError({
    studentCode,
    stdout,
    rawError,
    expectedOutput: 'Hello, World!',
    referenceCode: 'print("Hello, World!")'
  });
}

// ─── 10 QUESTIONS COMPLETE CONFIGURATION FOR TOPIC 01 ───
export const TOPIC_01_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Print Hello, World! ──
  {
    number: 1,
    title: 'Print Hello, World!',
    problemStatement: 'Write a Python program to print Hello, World!',
    instructions: 'Python me screen par text display karne ke liye print() function ka use karein.',
    referenceCode: 'print("Hello, World!")',
    starterCode: '# Write your code below to print Hello, World!\n',
    sampleInput: '',
    expectedOutput: 'Hello, World!',
    isPersonalized: false,
    teachingSteps: HELLO_WORLD_TEACHING_STEPS,
    hints: HELLO_WORLD_HINTS,
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Hello, World!';
      return {
        passed: match,
        message: match ? '🎉 Perfect! Hello, World! output verified.' : 'Expected "Hello, World!" as output.',
      };
    },
    diagnose: diagnoseHelloWorldError,
  },

  // ── Q2: Print Your Name ──
  {
    number: 2,
    title: 'Print Your Name',
    problemStatement: 'Write a Python program that displays your name using the print() function.',
    instructions: 'The name is illustrative. Students may use their own names or any valid name.',
    referenceCode: 'print("Alex")',
    starterCode: '# Write a Python program that displays your name using print()\n',
    sampleInput: '',
    expectedOutput: 'Alex',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'print Function',
        conceptKey: 'print',
        speechHinglish:
          'Ab hum apna naam Python se display karenge. print() ek function hai jo Console mein Output dikhata hai.',
        speechEnglish:
          'Now we will display your name using Python. print() is a function that displays output in the Console.',
        cardExplanationHinglish:
          'print() Python ka built-in function hai jo screen par data display karta hai.',
        cardExplanationEnglish:
          'print() is a built-in Python function that renders data on the console.',
        visualTarget: 'print',
        visualLabel: 'print()',
        visualSublabel: 'Yeh output display karne wala function hai.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'String Values and Quotes',
        conceptKey: 'string',
        speechHinglish:
          'Double quotes ke andar jo text likhte hain, use String kehte hain. Yahan apna naam likhenge.',
        speechEnglish:
          'Text placed inside double quotes is called a String. Here we write a name inside quotes.',
        cardExplanationHinglish:
          'Quotes text values ko represent karte hain taaki Python use String ke roop mein pehchane.',
        cardExplanationEnglish:
          'Quotes represent text values so Python recognizes them as String literals.',
        visualTarget: 'string',
        visualLabel: '"Alex"',
        visualSublabel: 'String value jo aapke naam ko represent karti hai.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish:
          'Jab Code execute hoga, wahi text screen par dikhai dega. Ab practice editor mein apna naam likhein!',
        speechEnglish:
          'When this code executes, the name will be displayed in the console.',
        cardExplanationHinglish:
          'Console par aapka naam display ho chuka hai. Validation kisi bhi valid naam ko accept karta hai.',
        cardExplanationEnglish:
          'Your name is output to the console. The validator accepts any non-empty name.',
        visualTarget: 'output',
        visualLabel: 'Alex',
        visualSublabel: 'Console screen par safal output generate hua.',
        consoleOutput: 'Alex',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Use print()',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Screen par display karne ke liye `print()` function ka use karein.',
        hintEnglish: 'Use the `print()` function to display text.',
      },
      {
        level: 2,
        name: 'Enclose in Quotes',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Apna naam double quotes ke andar likhein, jaise: `"Alex"` ya `"Rahul"`.',
        hintEnglish: 'Write your name inside double quotes, e.g. `"Alex"`.',
      },
      {
        level: 3,
        name: 'Complete Statement',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Poora statement likhein: `print("ApnaNaam")` aur Run karein.',
        hintEnglish: 'Place the quoted string inside `print(...)`: `print("YourName")`.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const out = stdout.trim();
      const hasPrint = /print\s*\(/i.test(code);
      const passed = hasPrint && out.length > 0;
      return {
        passed,
        message: passed
          ? `🎉 Great job! Displayed name: "${out}".`
          : 'Please write a print() statement displaying your name.',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      if (!code.trim()) {
        return {
          type: 'empty',
          title: 'Editor Khaali Hai',
          explanationHinglish: 'Aapne abhi koi code nahi likha. Apna naam print karne ke liye `print("YourName")` likhein.',
          explanationEnglish: 'Your editor is empty. Write `print("YourName")` to print your name.',
          fixSuggestionHinglish: 'Editor mein `print("Alex")` type karein aur Run Code dabayein.',
          fixSuggestionEnglish: 'Type `print("Alex")` in the editor and click Run Code.',
        };
      }
      if (rawError && rawError.includes('SyntaxError')) {
        return {
          type: 'syntax',
          title: 'SyntaxError: Quotes Balance Karein',
          explanationHinglish: 'Naam ke dono taraf matching double quotes (" ") lagana zaroori hai.',
          explanationEnglish: 'Ensure your name is enclosed in matching double quotes.',
          fixSuggestionHinglish: 'Format check karein: print("ApnaNaam")',
          fixSuggestionEnglish: 'Check format: print("YourName")',
        };
      }
      return {
        type: 'output',
        title: 'Name Not Output',
        explanationHinglish: 'Code execute hua par screen par koi naam print nahi hua.',
        explanationEnglish: 'Code executed but no name was printed.',
        fixSuggestionHinglish: 'print("ApnaNaam") likhein.',
        fixSuggestionEnglish: 'Write print("YourName").',
      };
    },
  },

  // ── Q3: Print Welcome to Python ──
  {
    number: 3,
    title: 'Print Welcome to Python',
    problemStatement: 'Write a Python program that displays the following message:\nWelcome to Python',
    instructions: 'Preserve the exact spelling and spaces: Welcome to Python',
    referenceCode: 'print("Welcome to Python")',
    starterCode: '# Write a Python program that displays: Welcome to Python\n',
    sampleInput: '',
    expectedOutput: 'Welcome to Python',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'print() Statement',
        conceptKey: 'print',
        speechHinglish:
          'Is Question mein hum ek welcome message display karenge.',
        speechEnglish:
          'In this question we will display a welcome message.',
        cardExplanationHinglish:
          'Single print() statement se hum complete greeting sentence display kar sakte hain.',
        cardExplanationEnglish:
          'A single print() statement can render an entire welcome greeting sentence.',
        visualTarget: 'print',
        visualLabel: 'print()',
        visualSublabel: 'Greeting message display karne wala function.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'String with Spaces',
        conceptKey: 'string',
        speechHinglish:
          'String ke andar jo words aur spaces likhe hain, Python unhe waise hi Output mein dikhayega.',
        speechEnglish:
          'The words and spaces placed inside the quotes will be preserved exactly by Python.',
        cardExplanationHinglish:
          'Quotes ke andar spaces bhi character hote hain, isliye exact formatting maintain rehti hai.',
        cardExplanationEnglish:
          'Spaces inside quotes are preserved as literal characters.',
        visualTarget: 'string',
        visualLabel: '"Welcome to Python"',
        visualSublabel: 'Words aur spaces ke saath greeting String.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish:
          'Execution ke baad screen par exact "Welcome to Python" render ho chuka hai.',
        speechEnglish:
          'Upon execution, the exact text "Welcome to Python" is printed to the console.',
        cardExplanationHinglish:
          'Output verify karein: "Welcome to Python" bilkul sahi show ho raha hai.',
        cardExplanationEnglish:
          'Output verified: "Welcome to Python" is rendered correctly.',
        visualTarget: 'output',
        visualLabel: 'Welcome to Python',
        visualSublabel: 'Console output verified.',
        consoleOutput: 'Welcome to Python',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Single Statement',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Ek single `print()` statement ka use karein.',
        hintEnglish: 'Use a single `print()` statement.',
      },
      {
        level: 2,
        name: 'Quotes Enclosure',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Message ko double quotes ke andar rakhein: `"Welcome to Python"`.',
        hintEnglish: 'Put the message inside quotes: `"Welcome to Python"`.',
      },
      {
        level: 3,
        name: 'Exact Spelling',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Spelling aur spaces exact match karein: `print("Welcome to Python")`.',
        hintEnglish: 'Preserve exact spelling: `print("Welcome to Python")`.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === 'Welcome to Python';
      return {
        passed,
        message: passed
          ? '🎉 Correct! Welcome to Python printed successfully.'
          : 'Output must be exactly "Welcome to Python".',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      const clean = stdout.trim();
      if (clean && clean.toLowerCase() === 'welcome to python') {
        return {
          type: 'capitalization',
          title: 'Letter Case Mismatch',
          explanationHinglish: 'Aapke output mein capital/small letters ka farq hai. Exact "Welcome to Python" likhein.',
          explanationEnglish: 'Check letter casing. Expected "Welcome to Python".',
          fixSuggestionHinglish: 'print("Welcome to Python") likhein.',
          fixSuggestionEnglish: 'Write print("Welcome to Python").',
        };
      }
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q4: Print Two Different Messages ──
  {
    number: 4,
    title: 'Print Two Different Messages',
    problemStatement: 'Write a Python program that displays two messages on separate lines.',
    instructions: 'Line 1: Hello!\nLine 2: I am learning Python.',
    referenceCode: 'print("Hello!")\nprint("I am learning Python.")',
    starterCode: '# Write a Python program that displays two messages on separate lines\n',
    sampleInput: '',
    expectedOutput: 'Hello!\nI am learning Python.',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Line 1 Execution',
        conceptKey: 'multiple_lines',
        speechHinglish:
          'Python Code ko normally top se bottom execute karta hai. Pehla print() pehli line par Output dikhayega.',
        speechEnglish:
          'Python executes code top-to-bottom. The first print() outputs the first greeting on line 1.',
        cardExplanationHinglish:
          'Line 1 execute hoti hai aur cursor agli line par move ho jata hai.',
        cardExplanationEnglish:
          'Line 1 executes and advances the cursor to the next line.',
        visualTarget: 'line1',
        visualLabel: 'print("Hello!")',
        visualSublabel: 'Pehla print statement execute hua.',
        consoleOutput: 'Hello!',
        isConsoleVisible: true,
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Line 2 Execution',
        conceptKey: 'multiple_lines',
        speechHinglish:
          'Doosra print() next line par Output dikhayega.',
        speechEnglish:
          'The second print() outputs on the next line.',
        cardExplanationHinglish:
          'Doosri line ka text pehle message ke theek neeche display hota hai.',
        cardExplanationEnglish:
          'The second message appears on its own independent line.',
        visualTarget: 'line2',
        visualLabel: 'print("I am learning Python.")',
        visualSublabel: 'Doosra print statement execute hua.',
        consoleOutput: 'Hello!\nI am learning Python.',
        isConsoleVisible: true,
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Multi-line Output',
        conceptKey: 'output',
        speechHinglish:
          'Dono messages alag alag lines par safaltapoorvak display ho gaye hain.',
        speechEnglish:
          'Both messages are now displayed on separate lines in the console.',
        cardExplanationHinglish:
          'Har print() statement ke baad automatic newline add hoti hai.',
        cardExplanationEnglish:
          'Each print() statement appends a newline by default.',
        visualTarget: 'output',
        visualLabel: 'Hello!\nI am learning Python.',
        visualSublabel: 'Console output complete.',
        consoleOutput: 'Hello!\nI am learning Python.',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Two Statements',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Do alag `print()` statements ka use karein.',
        hintEnglish: 'Use two `print()` statements.',
      },
      {
        level: 2,
        name: 'Separate Lines',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Har statement ko ek alag line par likhein.',
        hintEnglish: 'Put each print statement on a separate line.',
      },
      {
        level: 3,
        name: 'Exact Code',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Pehli line: `print("Hello!")` aur doosri line: `print("I am learning Python.")`',
        hintEnglish: 'Line 1: `print("Hello!")`, Line 2: `print("I am learning Python.")`.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const passed = lines.length === 2 && lines[0] === 'Hello!' && lines[1] === 'I am learning Python.';
      return {
        passed,
        message: passed
          ? '🎉 Excellent! Two separate lines printed in order.'
          : 'Output must have Line 1: "Hello!" and Line 2: "I am learning Python.".',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      if (lines.length === 1) {
        return {
          type: 'single_line',
          title: 'Dono Messages Ek Hi Line Par Hain',
          explanationHinglish: 'Aapne dono messages ek hi line par print kar diye. Do alag print() statements likhein.',
          explanationEnglish: 'Both messages are on one line. Use two separate print() calls.',
          fixSuggestionHinglish: 'Line 1: print("Hello!")\nLine 2: print("I am learning Python.")',
          fixSuggestionEnglish: 'Line 1: print("Hello!")\nLine 2: print("I am learning Python.")',
        };
      }
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q5: Print Your School Name ──
  {
    number: 5,
    title: 'Print Your School Name',
    problemStatement: 'Write a Python program that displays your school name using print().',
    instructions: 'The example is illustrative. Accept any valid school name chosen by the student.',
    referenceCode: 'print("My School")',
    starterCode: '# Write a Python program that displays your school name using print()\n',
    sampleInput: '',
    expectedOutput: 'My School',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'print() Function',
        conceptKey: 'print',
        speechHinglish:
          'Ab hum apne school ka naam print karenge.',
        speechEnglish:
          'Now we will print the name of your school.',
        cardExplanationHinglish:
          'print() function kisi bhi organisation ya school ka naam screen par display karta hai.',
        cardExplanationEnglish:
          'The print() function renders your school name onto the terminal screen.',
        visualTarget: 'print',
        visualLabel: 'print()',
        visualSublabel: 'Display function.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Quoted School Name',
        conceptKey: 'string',
        speechHinglish:
          'School ka naam ek String hai, isliye use quotes ke andar likhenge. print() use Console mein display karega.',
        speechEnglish:
          'The school name is a String, so we place it inside quotes. print() will show it in the console.',
        cardExplanationHinglish:
          'Quotes ke andar aap apna real school naam ya "My School" likh sakte hain.',
        cardExplanationEnglish:
          'You may write your real school name or "My School" inside quotation marks.',
        visualTarget: 'string',
        visualLabel: '"My School"',
        visualSublabel: 'School name string literal.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Display',
        conceptKey: 'output',
        speechHinglish:
          'Program execute hone par Console mein aapke school ka naam display ho jayega.',
        speechEnglish:
          'Upon execution, your school name is printed in the console.',
        cardExplanationHinglish:
          'Console output verified. Validation kisi bhi non-empty school name ko accept karta hai.',
        cardExplanationEnglish:
          'Output verified. Any valid non-empty school name satisfies the test.',
        visualTarget: 'output',
        visualLabel: 'My School',
        visualSublabel: 'School name rendered.',
        consoleOutput: 'My School',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Start with print()',
        badge: 'Hint 1 of 3',
        hintHinglish: '`print()` function se shuru karein.',
        hintEnglish: 'Start with `print()`.',
      },
      {
        level: 2,
        name: 'Quotes Enclosure',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Apne school ka naam quotes ke andar likhein, jaise: `"Delhi Public School"` ya `"My School"`.',
        hintEnglish: 'Put your school name inside quotes.',
      },
      {
        level: 3,
        name: 'Check Output',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Code ko Run karke Console Output check karein.',
        hintEnglish: 'Run the code to verify your school name is printed.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const out = stdout.trim();
      const hasPrint = /print\s*\(/i.test(code);
      const passed = hasPrint && out.length > 0;
      return {
        passed,
        message: passed
          ? `🎉 Great! Printed school name: "${out}".`
          : 'Please write a print() statement displaying your school name.',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q6: Create a Three-Line Introduction ──
  {
    number: 6,
    title: 'Create a Three-Line Introduction',
    problemStatement: 'Write a Python program that displays a three-line introduction.',
    instructions: 'Line 1: Hello!\nLine 2: I am a student.\nLine 3: I love Python.',
    referenceCode: 'print("Hello!")\nprint("I am a student.")\nprint("I love Python.")',
    starterCode: '# Write a Python program that displays a three-line introduction\n',
    sampleInput: '',
    expectedOutput: 'Hello!\nI am a student.\nI love Python.',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Line 1: Greeting',
        conceptKey: 'multiple_lines',
        speechHinglish:
          'Yahan teen print() statements hain. Har statement execute hone ke baad Console mein ek nayi line add hogi.',
        speechEnglish:
          'Here we have three print statements. Each statement adds a new line in the console.',
        cardExplanationHinglish:
          'Pehla statement greeting "Hello!" print karta hai.',
        cardExplanationEnglish:
          'First statement prints the greeting "Hello!".',
        visualTarget: 'line1',
        visualLabel: 'print("Hello!")',
        visualSublabel: 'Greeting line.',
        consoleOutput: 'Hello!',
        isConsoleVisible: true,
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Line 2: Identity',
        conceptKey: 'multiple_lines',
        speechHinglish:
          'Doosra statement nayi line par student identity print karta hai: "I am a student."',
        speechEnglish:
          'Second statement prints your role on a fresh line: "I am a student."',
        cardExplanationHinglish:
          'Line 2 pehli line ke theek neeche display hoti hai.',
        cardExplanationEnglish:
          'Line 2 renders directly beneath the first message.',
        visualTarget: 'line2',
        visualLabel: 'print("I am a student.")',
        visualSublabel: 'Role line.',
        consoleOutput: 'Hello!\nI am a student.',
        isConsoleVisible: true,
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Line 3: Interest',
        conceptKey: 'multiple_lines',
        speechHinglish:
          'Teesra statement learning passion print karta hai: "I love Python."',
        speechEnglish:
          'Third statement prints your coding interest: "I love Python."',
        cardExplanationHinglish:
          'Line 3 complete introduction ka conclusion hai.',
        cardExplanationEnglish:
          'Line 3 completes the 3-line introduction.',
        visualTarget: 'line3',
        visualLabel: 'print("I love Python.")',
        visualSublabel: 'Interest line.',
        consoleOutput: 'Hello!\nI am a student.\nI love Python.',
        isConsoleVisible: true,
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Three-Line Output Complete',
        conceptKey: 'output',
        speechHinglish:
          'Is tarah hum multiple lines ka introduction bana sakte hain. Teeno lines order mein render ho chuki hain.',
        speechEnglish:
          'This is how you build a clean multi-line self-introduction.',
        cardExplanationHinglish:
          'Teeno statements sequentially execute hokar complete introduction display karte hain.',
        cardExplanationEnglish:
          'All three statements executed in sequence.',
        visualTarget: 'output',
        visualLabel: 'Hello!\nI am a student.\nI love Python.',
        visualSublabel: 'Completed introduction output.',
        consoleOutput: 'Hello!\nI am a student.\nI love Python.',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Three Lines Needed',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Aapko teen lines ka output chahiye.',
        hintEnglish: 'You need three output lines.',
      },
      {
        level: 2,
        name: 'Three Statements',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Teen alag `print()` statements likhein.',
        hintEnglish: 'Use three `print()` statements.',
      },
      {
        level: 3,
        name: 'Separate Lines',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Har message ko alag line par likhein:\nLine 1: "Hello!"\nLine 2: "I am a student."\nLine 3: "I love Python."',
        hintEnglish: 'Put each message on a separate code line.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const passed =
        lines.length === 3 &&
        lines[0] === 'Hello!' &&
        lines[1] === 'I am a student.' &&
        lines[2] === 'I love Python.';
      return {
        passed,
        message: passed
          ? '🎉 Well done! 3-line introduction matches exactly.'
          : 'Output must contain: Line 1 "Hello!", Line 2 "I am a student.", Line 3 "I love Python.".',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      if (lines.length < 3) {
        return {
          type: 'line_count',
          title: '3 Lines Expected, Par Kam Mili',
          explanationHinglish: `Aapne ${lines.length} line(s) print ki hain. 3 alag print() statements likhein.`,
          explanationEnglish: `Found ${lines.length} line(s). 3 print statements are required.`,
          fixSuggestionHinglish: 'print("Hello!")\nprint("I am a student.")\nprint("I love Python.")',
          fixSuggestionEnglish: 'print("Hello!")\nprint("I am a student.")\nprint("I love Python.")',
        };
      }
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q7: Print Three Numbers ──
  {
    number: 7,
    title: 'Print Three Numbers',
    problemStatement: 'Write a Python program that displays three numbers on separate lines: 10, 20, 30.',
    instructions: 'Numeric values do not require quotes. Use separate statements to display separate lines.',
    referenceCode: 'print(10)\nprint(20)\nprint(30)',
    starterCode: '# Write a Python program that displays three numbers on separate lines\n',
    sampleInput: '',
    expectedOutput: '10\n20\n30',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Numbers Need No Quotes',
        conceptKey: 'numbers',
        speechHinglish:
          'Ab hum Numbers ko print karenge. Dhyan do ki Numbers ke around quotes nahi hain.',
        speechEnglish:
          'Now we print numbers. Notice that numeric values do not need quotation marks.',
        cardExplanationHinglish:
          'Python numbers ko numeric value maanta hai. Bina quotes ke direct 10, 20 likha jata hai.',
        cardExplanationEnglish:
          'Python understands numeric literals natively without wrapping them in quotes.',
        visualTarget: 'num1',
        visualLabel: 'print(10)',
        visualSublabel: 'Pehla number 10 print hua.',
        consoleOutput: '10',
        isConsoleVisible: true,
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Second Number',
        conceptKey: 'numbers',
        speechHinglish:
          'Doosri line par agla number 20 print hoga.',
        speechEnglish:
          'Line 2 prints the second number 20 on a new line.',
        cardExplanationHinglish:
          'Second statement agle number 20 ko next line par render karta hai.',
        cardExplanationEnglish:
          'Second statement renders the number 20 on the next line.',
        visualTarget: 'num2',
        visualLabel: 'print(20)',
        visualSublabel: 'Doosra number 20.',
        consoleOutput: '10\n20',
        isConsoleVisible: true,
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Third Number',
        conceptKey: 'numbers',
        speechHinglish:
          'Teesri line par 30 print hoga.',
        speechEnglish:
          'Line 3 prints 30.',
        cardExplanationHinglish:
          'Third print statement executes 30.',
        cardExplanationEnglish:
          'Third print statement executes 30.',
        visualTarget: 'num3',
        visualLabel: 'print(30)',
        visualSublabel: 'Teesra number 30.',
        consoleOutput: '10\n20\n30',
        isConsoleVisible: true,
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Numeric Output Verified',
        conceptKey: 'output',
        speechHinglish:
          'Python inhe numeric values ke roop mein samajhta hai. Teeno numbers separate lines par print ho gaye hain.',
        speechEnglish:
          'All three numbers are output sequentially on separate lines.',
        cardExplanationHinglish:
          'String aur Number mein farq: String mein quotes hote hain, Number mein nahi.',
        cardExplanationEnglish:
          'Difference: Strings require quotes, numeric literals do not.',
        visualTarget: 'output',
        visualLabel: '10\n20\n30',
        visualSublabel: 'Numeric console output.',
        consoleOutput: '10\n20\n30',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Use print() for Each',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Har number ke liye `print()` function use karein.',
        hintEnglish: 'Use `print()` for each number.',
      },
      {
        level: 2,
        name: 'No Quotes for Numbers',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Numbers ke around quotes mat lagayein: seedha `print(10)` likhein.',
        hintEnglish: 'Numeric values do not require quotes: write `print(10)`.',
      },
      {
        level: 3,
        name: 'Separate Statements',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Line 1: `print(10)`, Line 2: `print(20)`, Line 3: `print(30)`',
        hintEnglish: 'Separate statements: `print(10)`, `print(20)`, `print(30)`.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const passed = lines.length === 3 && lines[0] === '10' && lines[1] === '20' && lines[2] === '30';
      return {
        passed,
        message: passed
          ? '🎉 Superb! Numbers 10, 20, 30 printed correctly without quotes.'
          : 'Output must be Line 1: 10, Line 2: 20, Line 3: 30.',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q8: Print Text and Number Together ──
  {
    number: 8,
    title: 'Print Text and Number Together',
    problemStatement: 'Write a Python program that displays the label Age: followed by the Number 12.',
    instructions: 'Expected output: Age: 12. Separate the string and number with a comma inside print().',
    referenceCode: 'print("Age:", 12)',
    starterCode: '# Write a Python program that displays: Age: 12\n',
    sampleInput: '',
    expectedOutput: 'Age: 12',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'String and Comma Separator',
        conceptKey: 'arguments',
        speechHinglish:
          'Yahan print() ke andar ek String aur ek Number diya gaya hai. Comma dono arguments ko separate karta hai.',
        speechEnglish:
          'Here inside print() we pass a String and a Number. The comma separates the arguments.',
        cardExplanationHinglish:
          'print() multiple arguments accept karta hai jinhe hum comma se alag karte hain.',
        cardExplanationEnglish:
          'print() accepts multiple arguments separated by commas.',
        visualTarget: 'comma',
        visualLabel: '"Age:", 12',
        visualSublabel: 'Comma arguments ko alag karta hai.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Default Space Behavior',
        conceptKey: 'arguments',
        speechHinglish:
          'Default behavior mein Python unke beech ek space add karta hai.',
        speechEnglish:
          'By default, Python automatically inserts a space between comma-separated values.',
        cardExplanationHinglish:
          'Comma ki wajah se "Age:" aur 12 ke beech ek single space automatically lag jata hai.',
        cardExplanationEnglish:
          'The comma tells Python to output each value with a default separating space.',
        visualTarget: 'space',
        visualLabel: 'Space between arguments',
        visualSublabel: 'Automatic space addition.',
        consoleOutput: '',
        isConsoleVisible: false,
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Combined Output',
        conceptKey: 'output',
        speechHinglish:
          'Screen par Age: 12 print ho gaya. String aur Number dono ek saath display ho gaye!',
        speechEnglish:
          'The combined text "Age: 12" is printed to the console.',
        cardExplanationHinglish:
          'Console output verified: "Age: 12".',
        cardExplanationEnglish:
          'Console output verified: "Age: 12".',
        visualTarget: 'output',
        visualLabel: 'Age: 12',
        visualSublabel: 'Combined output.',
        consoleOutput: 'Age: 12',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Single Statement',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Ek hi `print()` statement ka use karein.',
        hintEnglish: 'Use one `print()` statement.',
      },
      {
        level: 2,
        name: 'Include Both Values',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Label `"Age:"` aur number `12` dono include karein.',
        hintEnglish: 'Include the label `"Age:"` and number `12`.',
      },
      {
        level: 3,
        name: 'Separate with Comma',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Dono ke beech comma lagayein: `print("Age:", 12)`.',
        hintEnglish: 'Separate arguments with a comma: `print("Age:", 12)`.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === 'Age: 12';
      return {
        passed,
        message: passed
          ? '🎉 Great! String and Number printed together as "Age: 12".'
          : 'Output must be exactly "Age: 12".',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q9: Create a Welcome Screen ──
  {
    number: 9,
    title: 'Create a Welcome Screen',
    problemStatement: 'Write a Python program that displays a simple welcome screen using multiple print() statements.',
    instructions: 'Line 1: ****************\nLine 2: WELCOME TO PYTHON\nLine 3: ****************',
    referenceCode: 'print("****************")\nprint("WELCOME TO PYTHON")\nprint("****************")',
    starterCode: '# Write a Python program that displays a welcome screen\n',
    sampleInput: '',
    expectedOutput: '****************\nWELCOME TO PYTHON\n****************',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Top Star Border',
        conceptKey: 'banner',
        speechHinglish:
          'Hum print() se words ke saath symbols bhi display kar sakte hain. Yahan stars ka use karke ek simple welcome screen banayi gayi hai.',
        speechEnglish:
          'We can display symbols as well as text using print(). Here we use stars to build a decorative banner.',
        cardExplanationHinglish:
          'Line 1 decorative star border print karta hai.',
        cardExplanationEnglish:
          'Line 1 prints a decorative star border.',
        visualTarget: 'banner1',
        visualLabel: 'print("****************")',
        visualSublabel: 'Top border.',
        consoleOutput: '****************',
        isConsoleVisible: true,
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Welcome Heading',
        conceptKey: 'banner',
        speechHinglish:
          'Beech mein main title WELCOME TO PYTHON print hota hai.',
        speechEnglish:
          'In the center we print the title WELCOME TO PYTHON.',
        cardExplanationHinglish:
          'Line 2 title message display karta hai.',
        cardExplanationEnglish:
          'Line 2 renders the title text.',
        visualTarget: 'banner2',
        visualLabel: 'print("WELCOME TO PYTHON")',
        visualSublabel: 'Title line.',
        consoleOutput: '****************\nWELCOME TO PYTHON',
        isConsoleVisible: true,
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Bottom Star Border',
        conceptKey: 'banner',
        speechHinglish:
          'Neeche dobara matching stars print honge.',
        speechEnglish:
          'Below, we print matching stars again.',
        cardExplanationHinglish:
          'Line 3 bottom border print karti hai.',
        cardExplanationEnglish:
          'Line 3 prints the bottom border.',
        visualTarget: 'banner3',
        visualLabel: 'print("****************")',
        visualSublabel: 'Bottom border.',
        consoleOutput: '****************\nWELCOME TO PYTHON\n****************',
        isConsoleVisible: true,
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Welcome Banner Ready',
        conceptKey: 'output',
        speechHinglish:
          'Decorative symbols aur text milkar ek professional welcome screen banate hain!',
        speechEnglish:
          'Decorative symbols combined with text form a neat welcome screen.',
        cardExplanationHinglish:
          'Console output verified: complete welcome banner.',
        cardExplanationEnglish:
          'Console output verified: complete welcome banner.',
        visualTarget: 'output',
        visualLabel: '****************\nWELCOME TO PYTHON\n****************',
        visualSublabel: 'Screen ready.',
        consoleOutput: '****************\nWELCOME TO PYTHON\n****************',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Three Statements',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Teen `print()` statements ka use karein.',
        hintEnglish: 'Use three `print()` statements.',
      },
      {
        level: 2,
        name: 'Message in Middle',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Welcome message `"WELCOME TO PYTHON"` ko beech mein rakhein.',
        hintEnglish: 'Put `"WELCOME TO PYTHON"` in the middle.',
      },
      {
        level: 3,
        name: 'Matching Borders',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Upar aur neeche matching star lines print karein: `print("****************")`.',
        hintEnglish: 'Print matching star lines above and below.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const passed =
        lines.length === 3 &&
        lines[0].includes('***') &&
        lines[1].toUpperCase() === 'WELCOME TO PYTHON' &&
        lines[2].includes('***');
      return {
        passed,
        message: passed
          ? '🎉 Fantastic! Welcome screen banner rendered accurately.'
          : 'Output must have 3 lines: top stars, "WELCOME TO PYTHON", bottom stars.',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },

  // ── Q10: Your First Python Mini Project ──
  {
    number: 10,
    title: 'Your First Python Mini Project',
    problemStatement: 'Create a Student Profile screen using Python.\nDisplay:\n- Profile heading\n- Student name\n- Course name\n- Welcome message',
    instructions: 'Display 4 lines:\nSTUDENT PROFILE\nName: Alex (or your name)\nCourse: Python\nWelcome to coding!',
    referenceCode: 'print("STUDENT PROFILE")\nprint("Name: Alex")\nprint("Course: Python")\nprint("Welcome to coding!")',
    starterCode: '# Create a Student Profile screen with heading, name, course, and welcome message\n',
    sampleInput: '',
    expectedOutput: 'STUDENT PROFILE\nName: Alex\nCourse: Python\nWelcome to coding!',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 5,
        title: 'Profile Heading',
        conceptKey: 'banner',
        speechHinglish:
          'Ab hum apna pehla Python Mini Project banayenge. Ismein hum multiple print() statements ka use karke Student Profile display karenge.',
        speechEnglish:
          'Now we will build our first Python Mini Project by combining multiple print statements to display a Student Profile.',
        cardExplanationHinglish:
          'Line 1 heading print karti hai: STUDENT PROFILE.',
        cardExplanationEnglish:
          'Line 1 prints the header: STUDENT PROFILE.',
        visualTarget: 'head',
        visualLabel: 'print("STUDENT PROFILE")',
        visualSublabel: 'Profile header.',
        consoleOutput: 'STUDENT PROFILE',
        isConsoleVisible: true,
      },
      {
        step: 2,
        totalSteps: 5,
        title: 'Student Name',
        conceptKey: 'string',
        speechHinglish:
          'Line 2 par student ka naam display hoga. Aap apna naam bhi likh sakte hain.',
        speechEnglish:
          'Line 2 displays the student name. You may personalize it with your own name.',
        cardExplanationHinglish:
          'Line 2 student name print karti hai.',
        cardExplanationEnglish:
          'Line 2 prints the student name.',
        visualTarget: 'name',
        visualLabel: 'print("Name: Alex")',
        visualSublabel: 'Student name.',
        consoleOutput: 'STUDENT PROFILE\nName: Alex',
        isConsoleVisible: true,
      },
      {
        step: 3,
        totalSteps: 5,
        title: 'Course Name',
        conceptKey: 'string',
        speechHinglish:
          'Teesri line par course ka naam "Course: Python" print hoga.',
        speechEnglish:
          'Third line prints the enrolled course "Course: Python".',
        cardExplanationHinglish:
          'Line 3 course title print karti hai.',
        cardExplanationEnglish:
          'Line 3 prints the course title.',
        visualTarget: 'course',
        visualLabel: 'print("Course: Python")',
        visualSublabel: 'Course title.',
        consoleOutput: 'STUDENT PROFILE\nName: Alex\nCourse: Python',
        isConsoleVisible: true,
      },
      {
        step: 4,
        totalSteps: 5,
        title: 'Welcome Message',
        conceptKey: 'string',
        speechHinglish:
          'Chauthi line par welcoming message "Welcome to coding!" print hoga.',
        speechEnglish:
          'Fourth line displays the inspiring welcome message "Welcome to coding!".',
        cardExplanationHinglish:
          'Line 4 welcoming message render karti hai.',
        cardExplanationEnglish:
          'Line 4 renders the welcoming message.',
        visualTarget: 'welcome',
        visualLabel: 'print("Welcome to coding!")',
        visualSublabel: 'Welcome greeting.',
        consoleOutput: 'STUDENT PROFILE\nName: Alex\nCourse: Python\nWelcome to coding!',
        isConsoleVisible: true,
      },
      {
        step: 5,
        totalSteps: 5,
        title: 'Mini Project Complete',
        conceptKey: 'output',
        speechHinglish:
          'Python har statement ko order mein execute karega aur Console mein complete Profile dikhayega. Congratulations aapka pehla mini project ready hai!',
        speechEnglish:
          'Python executes every statement in order to display the full Profile in the console. Congratulations on your first mini project!',
        cardExplanationHinglish:
          'Poora mini project successfully run ho gaya.',
        cardExplanationEnglish:
          'The entire mini project has executed successfully.',
        visualTarget: 'output',
        visualLabel: 'STUDENT PROFILE\nName: Alex\nCourse: Python\nWelcome to coding!',
        visualSublabel: 'Completed profile card.',
        consoleOutput: 'STUDENT PROFILE\nName: Alex\nCourse: Python\nWelcome to coding!',
        isConsoleVisible: true,
      },
    ],
    hints: [
      {
        level: 1,
        name: 'Four Output Lines',
        badge: 'Hint 1 of 3',
        hintHinglish: 'Profile ko four output lines mein baantein.',
        hintEnglish: 'Break the Profile into four output lines.',
      },
      {
        level: 2,
        name: 'Four Statements',
        badge: 'Hint 2 of 3',
        hintHinglish: 'Har line ke liye ek alag `print()` statement use karein.',
        hintEnglish: 'Use one `print()` statement for each line.',
      },
      {
        level: 3,
        name: 'Correct Order',
        badge: 'Hint 3 of 3',
        hintHinglish: 'Line 1: STUDENT PROFILE\nLine 2: Name: ApnaNaam\nLine 3: Course: Python\nLine 4: Welcome to coding!',
        hintEnglish: 'Display heading, name, course and welcome message in order.',
      },
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const passed =
        lines.length >= 4 &&
        lines[0].toUpperCase() === 'STUDENT PROFILE' &&
        lines[1].toLowerCase().startsWith('name:') &&
        lines[1].length > 5 &&
        lines[2].toLowerCase() === 'course: python' &&
        lines[3].toLowerCase() === 'welcome to coding!';
      return {
        passed,
        message: passed
          ? '🎉 Outstanding! Your first Python Mini Project is verified and complete!'
          : 'Output must include 4 lines: "STUDENT PROFILE", "Name: ...", "Course: Python", "Welcome to coding!".',
      };
    },
    diagnose: (code: string, stdout: string, rawError: string | null) => {
      const lines = stdout.trim().split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      if (lines.length < 4) {
        return {
          type: 'lines',
          title: '4 Lines Expected',
          explanationHinglish: `Aapne ${lines.length} lines print ki hain. Profile mein 4 lines honi chahiye: Heading, Name, Course aur Welcome message.`,
          explanationEnglish: `Found ${lines.length} lines. 4 lines expected.`,
          fixSuggestionHinglish: 'Har line ke liye print() statement likhein.',
          fixSuggestionEnglish: 'Write a print() statement for each of the 4 lines.',
        };
      }
      return diagnoseHelloWorldError(code, stdout, rawError);
    },
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 02: Understanding print() — 10 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_02_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Display a Single Word ──
  {
    number: 1,
    title: 'Display a Single Word',
    problemStatement: 'Write a Python program that displays the word Python using the print() function.',
    instructions: 'Understand how a String is passed into print() and displayed in the Console.',
    referenceCode: 'print("Python")',
    starterCode: '# Write your code below to display the word Python\nprint("Python")',
    sampleInput: '',
    expectedOutput: 'Python',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Call the print() Function',
        highlightToken: 'print',
        explanation: 'print() ek built-in function hai jo screen par text ya information display karta hai.',
        speechHinglish: 'Sabse pehle print function computer ko command deta hai screen par kuch show karne ke liye.',
        speechEnglish: 'First, the print function instructs the computer to display output on the screen.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'print() function output screen par messages ya values display karta hai.',
        cardExplanationEnglish: 'The print() function sends data to be displayed on the screen or console.'
      },
      {
        stepNumber: 2,
        title: 'Pass String Argument in Parentheses',
        highlightToken: '"Python"',
        explanation: 'Quotes ke andar likha gaya text String kehlata hai. Humne "Python" ko print ke parentheses mein pass kiya.',
        speechHinglish: 'Parentheses ke andar humne Python string argument pass kiya hai.',
        speechEnglish: 'Inside parentheses, we pass the String argument "Python".',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: '"Python" ek String literal hai jo quotes ke andar enclosed hai.',
        cardExplanationEnglish: '"Python" is a string literal passed as an argument inside parentheses.'
      },
      {
        stepNumber: 3,
        title: 'Execute & Display on Console',
        highlightToken: 'print("Python")',
        explanation: 'Python is statement ko execute karta hai aur Console par Python print karta hai.',
        speechHinglish: 'Jab Python is statement ko execute karta hai, Console mein Python display ho jata hai.',
        speechEnglish: 'When Python executes this statement, the word Python appears on the Console.',
        visualAction: 'display_output',
        outputLine: 'Python',
        highlightLine: 1,
        cardExplanationHinglish: 'Statement execute hote hi Console par Python print ho gaya.',
        cardExplanationEnglish: 'Executing the statement renders Python directly to the output console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use the print() function.' },
      { level: 2, textHinglish: 'Word ko quotes ke andar rakhein jaise "Python".', textEnglish: 'Put the word inside quotes like "Python".' },
      { level: 3, textHinglish: 'print("Python") likhein aur Run Code par click karein.', textEnglish: 'Write print("Python") and click Run Code.' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Python';
      return {
        passed: match,
        message: match ? '🎉 Perfect! Word Python display ho gaya.' : 'Expected "Python" as output.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Display a Number ──
  {
    number: 2,
    title: 'Display a Number',
    problemStatement: 'Write a Python program that displays the Number 100 using print().',
    instructions: 'Understand that numeric literals can be printed directly without quotes.',
    referenceCode: 'print(100)',
    starterCode: '# Write your code below to display the number 100\nprint(100)',
    sampleInput: '',
    expectedOutput: '100',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Number vs String Literal',
        highlightToken: '100',
        explanation: '100 ek numeric integer hai. Python me numbers ko quotes ke bina likha jata hai.',
        speechHinglish: 'Ab hum Number print karenge. Yahan 100 ke around quotes nahi hain, kyunki ye ek Integer value hai.',
        speechEnglish: 'Now we print a Number. Here 100 has no quotes because it is an Integer literal.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Integer literals bina quotes ke direct numeric values hoti hain.',
        cardExplanationEnglish: 'Integer literals are pure numeric values written without quotation marks.'
      },
      {
        stepNumber: 2,
        title: 'Pass Numeric Argument into print()',
        highlightToken: 'print(100)',
        explanation: 'print() function kisi bhi number ko direct screen par display kar deta hai.',
        speechHinglish: 'Python ise Number samajhta hai aur print function iska output display karta hai.',
        speechEnglish: 'Python recognizes it as a numeric value and the print function outputs it.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: '100 argument ke roop mein print function mein chala gaya.',
        cardExplanationEnglish: '100 is passed directly as a numeric argument to print().'
      },
      {
        stepNumber: 3,
        title: 'Console Output: 100',
        highlightToken: 'print(100)',
        explanation: 'Console mein exact numeric value 100 print ho gayi.',
        speechHinglish: 'Execution ke baad Console mein 100 print ho jata hai.',
        speechEnglish: 'After execution, 100 is printed directly in the Console.',
        visualAction: 'display_output',
        outputLine: '100',
        highlightLine: 1,
        cardExplanationHinglish: 'Output screen par 100 display ho gaya bina kisi extra quotes ke.',
        cardExplanationEnglish: 'The integer 100 is cleanly printed to the console output.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use print().' },
      { level: 2, textHinglish: '100 ko bina quotes ke print ke andar pass karein.', textEnglish: 'Pass 100 as the argument without quotes.' },
      { level: 3, textHinglish: 'print(100) likhein.', textEnglish: 'Write print(100).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '100';
      const noQuotes = !code.includes('"100"') && !code.includes("'100'");
      return {
        passed: match && noQuotes,
        message: match && noQuotes ? '🎉 Excellent! Integer 100 bina quotes ke print kiya gaya.' : (match ? 'Notice: Print 100 as a numeric literal without quotes!' : 'Expected "100" as output.')
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Print a Decimal Number ──
  {
    number: 3,
    title: 'Print a Decimal Number',
    problemStatement: 'Write a Python program that displays the decimal Number 3.14.',
    instructions: 'Understand that print() can display Float (decimal) values directly.',
    referenceCode: 'print(3.14)',
    starterCode: '# Write your code below to display the decimal number 3.14\nprint(3.14)',
    sampleInput: '',
    expectedOutput: '3.14',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Understanding Float Numbers',
        highlightToken: '3.14',
        explanation: 'Python mein decimal point wale numbers ko Float kehte hain.',
        speechHinglish: 'Python mein decimal Number ko Float kehte hain. Yahan 3.14 ek Float value hai.',
        speechEnglish: 'In Python, numbers with decimal points are called Floats. Here 3.14 is a Float.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: '3.14 ek Float type numeric value hai.',
        cardExplanationEnglish: '3.14 is a floating-point numeric literal.'
      },
      {
        stepNumber: 2,
        title: 'Passing Float to print()',
        highlightToken: 'print(3.14)',
        explanation: 'print() function Integer aur Float dono ko seamlessly output karta hai.',
        speechHinglish: 'print function Integer aur Float dono ko screen par display kar sakta hai.',
        speechEnglish: 'The print function can display both Integers and Floats seamlessly.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'print() decimal numbers ko exact precision ke sath handle karta hai.',
        cardExplanationEnglish: 'print() accurately handles decimal numbers.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: 3.14',
        highlightToken: 'print(3.14)',
        explanation: 'Console mein 3.14 print ho jata hai.',
        speechHinglish: 'Execution complete hone par Console mein 3.14 output aa jata hai.',
        speechEnglish: 'Upon execution, 3.14 is displayed in the Console.',
        visualAction: 'display_output',
        outputLine: '3.14',
        highlightLine: 1,
        cardExplanationHinglish: 'Terminal par 3.14 display ho chuka hai.',
        cardExplanationEnglish: '3.14 is successfully printed to the terminal console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use print().' },
      { level: 2, textHinglish: 'Decimal number 3.14 ko bina quotes ke pass karein.', textEnglish: 'Pass 3.14 as a numeric argument without quotes.' },
      { level: 3, textHinglish: 'print(3.14) likhein.', textEnglish: 'Write print(3.14).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '3.14';
      const isNumeric = !code.includes('"3.14"') && !code.includes("'3.14'");
      return {
        passed: match && isNumeric,
        message: match && isNumeric ? '🎉 Superb! Float value 3.14 successfully print ho gayi.' : 'Expected decimal number 3.14 without quotes.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Print Multiple Values ──
  {
    number: 4,
    title: 'Print Multiple Values',
    problemStatement: 'Write a Python program that displays Python, is, and fun on the same line using a single print() statement with multiple arguments.',
    instructions: 'Understand how print() accepts multiple arguments separated by commas and separates them with spaces by default.',
    referenceCode: 'print("Python", "is", "fun")',
    starterCode: '# Write a single print() with multiple arguments\nprint("Python", "is", "fun")',
    sampleInput: '',
    expectedOutput: 'Python is fun',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Multiple Arguments with Commas',
        highlightToken: '"Python", "is", "fun"',
        explanation: 'print() mein hum ek se zyada values comma (,) se separate karke de sakte hain.',
        speechHinglish: 'Ab print mein ek se zyada arguments use karenge. Har argument comma se separate hota hai.',
        speechEnglish: 'Here we pass multiple arguments into print(), separated by commas.',
        visualAction: 'highlight_arguments',
        highlightLine: 1,
        cardExplanationHinglish: 'Har comma agle argument ko define karta hai.',
        cardExplanationEnglish: 'Each comma separates distinct arguments inside print().'
      },
      {
        stepNumber: 2,
        title: 'Default Space Separator',
        highlightToken: ',',
        explanation: 'By default, Python multiple arguments ke beech automatic ek single space insert karta hai.',
        speechHinglish: 'Jab Python inhe display karta hai, default separator ek space hota hai.',
        speechEnglish: 'When Python prints multiple arguments, it inserts a single space by default.',
        visualAction: 'animate_separator',
        highlightLine: 1,
        cardExplanationHinglish: 'Default separator space (" ") hota hai.',
        cardExplanationEnglish: 'The default argument separator is a single whitespace character.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Python is fun',
        highlightToken: 'print("Python", "is", "fun")',
        explanation: 'Console par teeno words ek hi line par space ke sath display hote hain.',
        speechHinglish: 'Isliye Output mein Python is fun ek saath display ho jata hai.',
        speechEnglish: 'As a result, Python is fun is displayed together on a single line.',
        visualAction: 'display_output',
        outputLine: 'Python is fun',
        highlightLine: 1,
        cardExplanationHinglish: 'Output: Python is fun ek hi line par render ho gaya.',
        cardExplanationEnglish: 'Output: Python is fun joined on a single line.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Ek hi print() statement use karein.', textEnglish: 'Use one print() statement.' },
      { level: 2, textHinglish: 'Teeno strings ko comma se alag karein: "Python", "is", "fun"', textEnglish: 'Separate the three strings with commas: "Python", "is", "fun"' },
      { level: 3, textHinglish: 'print("Python", "is", "fun") likhein.', textEnglish: 'Write print("Python", "is", "fun").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Python is fun';
      const hasCommas = code.includes(',') && (code.match(/print\s*\(/g) || []).length === 1;
      return {
        passed: match && hasCommas,
        message: match && hasCommas ? '🎉 Shabaash! Single print() statement se multiple arguments print ho gaye.' : 'Use a single print() call with multiple arguments separated by commas.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Use the sep Parameter ──
  {
    number: 5,
    title: 'Use the sep Parameter',
    problemStatement: 'Write a Python program that displays three words separated by hyphens using the sep parameter.',
    instructions: 'Understand how sep controls the separator between multiple printed arguments.',
    referenceCode: 'print("Learn", "Python", "Today", sep="-")',
    starterCode: '# Use the sep parameter to separate words with hyphens\nprint("Learn", "Python", "Today", sep="-")',
    sampleInput: '',
    expectedOutput: 'Learn-Python-Today',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Understanding Default vs Custom Separator',
        highlightToken: '"Learn", "Python", "Today"',
        explanation: 'Normal case mein words ke beech space lagta hai.',
        speechHinglish: 'Normally print function multiple arguments ke beech space lagata hai.',
        speechEnglish: 'Normally the print function puts spaces between multiple arguments.',
        visualAction: 'highlight_arguments',
        highlightLine: 1,
        cardExplanationHinglish: 'Teeno words "Learn", "Python", "Today" print arguments hain.',
        cardExplanationEnglish: 'Three string arguments are supplied to the print call.'
      },
      {
        stepNumber: 2,
        title: 'Customizing with sep="-"',
        highlightToken: 'sep="-"',
        explanation: 'sep parameter se hum space ki jagah koi bhi custom character jaise hyphen (-) laga sakte hain.',
        speechHinglish: 'Lekin sep parameter se hum separator change kar sakte hain. Yahan humne sep mein hyphen diya hai.',
        speechEnglish: 'Using the sep parameter, we can customize the separator to a hyphen.',
        visualAction: 'apply_sep',
        highlightLine: 1,
        cardExplanationHinglish: 'sep="-" har argument ke beech hyphen lagane ka nirdesh deta hai.',
        cardExplanationEnglish: 'sep="-" sets the glue between arguments to a hyphen.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Learn-Python-Today',
        highlightToken: 'print("Learn", "Python", "Today", sep="-")',
        explanation: 'Console mein words hyphen se jud kar display ho jate hain.',
        speechHinglish: 'Execution ke baad words ke beech hyphen judkar Learn hyphen Python hyphen Today ban jata hai.',
        speechEnglish: 'When executed, the words are joined by hyphens producing Learn-Python-Today.',
        visualAction: 'display_output',
        outputLine: 'Learn-Python-Today',
        highlightLine: 1,
        cardExplanationHinglish: 'Learn-Python-Today Console par print ho chuka hai.',
        cardExplanationEnglish: 'Console renders Learn-Python-Today separated by hyphens.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Teeno string arguments pass karein: "Learn", "Python", "Today".', textEnglish: 'Pass three string arguments: "Learn", "Python", "Today".' },
      { level: 2, textHinglish: 'Aakhir mein sep="-" parameter add karein.', textEnglish: 'Add the sep="-" parameter at the end.' },
      { level: 3, textHinglish: 'print("Learn", "Python", "Today", sep="-") likhein.', textEnglish: 'Write print("Learn", "Python", "Today", sep="-").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Learn-Python-Today';
      const usesSep = code.includes('sep=');
      return {
        passed: match && usesSep,
        message: match && usesSep ? '🎉 Bahut badiya! sep parameter successfully custom separator bana chuka hai.' : 'Make sure to use sep="-" to format the output.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Use the end Parameter ──
  {
    number: 6,
    title: 'Use the end Parameter',
    problemStatement: 'Write a Python program that displays two messages on the same line using the end parameter.',
    instructions: 'Understand how end controls what is printed after each print() call.',
    referenceCode: 'print("Hello", end=" ")\nprint("Python")',
    starterCode: '# Use end=" " to keep the next print on the same line\nprint("Hello", end=" ")\nprint("Python")',
    sampleInput: '',
    expectedOutput: 'Hello Python',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Default Newline Behavior',
        highlightToken: 'print("Hello")',
        explanation: 'print() by default message ke baad new line character (\\\\n) jodta hai.',
        speechHinglish: 'Normally print ke baad Cursor next line par chala jata hai.',
        speechEnglish: 'By default, print moves the cursor to a new line after executing.',
        visualAction: 'explain_newline',
        highlightLine: 1,
        cardExplanationHinglish: 'Default case mein cursor hamesha nayi line par drop hota hai.',
        cardExplanationEnglish: 'Normally, print() appends a newline at the end.'
      },
      {
        stepNumber: 2,
        title: 'Overriding with end=" "',
        highlightToken: 'end=" "',
        explanation: 'end=" " specify karne par cursor next line jane ke bajaye usi line par ek space par rukta hai.',
        speechHinglish: 'Lekin end parameter se hum ise control kar sakte hain. Yahan end mein space diya hai.',
        speechEnglish: 'With the end parameter set to a space, the cursor stays on the same line.',
        visualAction: 'apply_end',
        highlightLine: 1,
        cardExplanationHinglish: 'end=" " cursor ko nayi line par jane se rokta hai.',
        cardExplanationEnglish: 'end=" " instructs print to end with a space instead of a newline.'
      },
      {
        stepNumber: 3,
        title: 'Second print() Appends on Same Line',
        highlightToken: 'print("Python")',
        explanation: 'Doosra print statement usi continuous line par display karta hai: Hello Python.',
        speechHinglish: 'Isliye agla print statement bhi usi same line par aakar Hello Python display karta hai.',
        speechEnglish: 'Hence the second print statement prints right next to it, outputting Hello Python.',
        visualAction: 'display_output',
        outputLine: 'Hello Python',
        highlightLine: 2,
        cardExplanationHinglish: 'Dono statements ek hi line par jud kar Hello Python banate hain.',
        cardExplanationEnglish: 'Both print calls join smoothly into Hello Python.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Do print() statements likhein.', textEnglish: 'Write two print() statements.' },
      { level: 2, textHinglish: 'Pehle print() mein end=" " add karein.', textEnglish: 'Add end=" " to the first print() call.' },
      { level: 3, textHinglish: 'print("Hello", end=" ")\nprint("Python") likhein.', textEnglish: 'Write print("Hello", end=" ")\nprint("Python").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Hello Python';
      const usesEnd = code.includes('end=');
      return {
        passed: match && usesEnd,
        message: match && usesEnd ? '🎉 Great job! end parameter ne do print statements ko successfully join kiya.' : 'Ensure you use end=" " across two print statements.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Print an Empty Line ──
  {
    number: 7,
    title: 'Print an Empty Line',
    problemStatement: 'Write a Python program that displays Hello, leaves one empty line, and then displays World.',
    instructions: 'Understand that print() without arguments outputs a newline by default.',
    referenceCode: 'print("Hello")\nprint()\nprint("World")',
    starterCode: '# Write your code below to print Hello, an empty line, and World\nprint("Hello")\nprint()\nprint("World")',
    sampleInput: '',
    expectedOutput: 'Hello\\n\\nWorld',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Print the First Word',
        highlightToken: 'print("Hello")',
        explanation: 'Pehla statement Hello print karke cursor ko agli line par bhejta hai.',
        speechHinglish: 'Pehla statement Hello print karega.',
        speechEnglish: 'The first statement outputs Hello.',
        visualAction: 'display_line',
        outputLine: 'Hello',
        highlightLine: 1,
        cardExplanationHinglish: 'Hello print hone ke baad cursor next line par jump karta hai.',
        cardExplanationEnglish: 'Hello is printed and cursor drops to line 2.'
      },
      {
        stepNumber: 2,
        title: 'Empty print() Statement',
        highlightToken: 'print()',
        explanation: 'Jab print() ke andar koi argument na ho, tab bhi default newline execute hoti hai jisse ek khali line ban jati hai.',
        speechHinglish: 'Yahan beech mein print ke andar koi argument nahi hai, lekin newline ki wajah se empty line banti hai.',
        speechEnglish: 'The middle print() has no arguments, so it simply outputs a blank empty line.',
        visualAction: 'empty_line',
        highlightLine: 2,
        cardExplanationHinglish: 'print() bina arguments ke ek blank line create karta hai.',
        cardExplanationEnglish: 'Calling print() with no arguments outputs a pure blank line.'
      },
      {
        stepNumber: 3,
        title: 'Print Final Word: World',
        highlightToken: 'print("World")',
        explanation: 'Khali line ke baad World display hota hai.',
        speechHinglish: 'Aur aakhiri statement World print karke complete output deta hai.',
        speechEnglish: 'The final statement outputs World, completing the formatted layout.',
        visualAction: 'display_output',
        outputLine: 'World',
        highlightLine: 3,
        cardExplanationHinglish: 'Console Output: Hello, phir khali line, phir World.',
        cardExplanationEnglish: 'Output contains Hello, one blank line, and World.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Teen print() statements use karein.', textEnglish: 'Use three print() statements.' },
      { level: 2, textHinglish: 'Beech wala print() bilkul khali rakhein: print().', textEnglish: 'Keep the middle print() completely empty: print().' },
      { level: 3, textHinglish: 'print("Hello")\nprint()\nprint("World") likhein.', textEnglish: 'Write print("Hello")\nprint()\nprint("World").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\\r\\n/g, '\\n').trim();
      const match = normalized === 'Hello\\n\\nWorld';
      const hasEmptyPrint = /print\s*\(\s*\)/.test(code);
      return {
        passed: match && hasEmptyPrint,
        message: match && hasEmptyPrint ? '🎉 Zabardast! Empty print() statement ne blank line create kar di.' : 'Make sure to have an empty print() between Hello and World.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Understand the Newline Character ──
  {
    number: 8,
    title: 'Understand the Newline Character',
    problemStatement: 'Write a Python program that displays three words on separate lines using the newline escape sequence inside one String.',
    instructions: 'Understand that \\\\n represents a newline escape sequence inside a String.',
    referenceCode: 'print("Red\\\\nGreen\\\\nBlue")',
    starterCode: '# Use \\\\n inside one string to print on 3 lines\nprint("Red\\\\nGreen\\\\nBlue")',
    sampleInput: '',
    expectedOutput: 'Red\\nGreen\\nBlue',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'The \\\\n Escape Sequence',
        highlightToken: '\\\\n',
        explanation: 'String ke andar backslash n (\\\\n) ek special escape sequence hai jo output ko new line par push karta hai.',
        speechHinglish: 'Python String mein backslash n ek special escape sequence hai jo output ko next line par le jata hai.',
        speechEnglish: 'Inside Python strings, backslash n is a special newline escape sequence.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: '\\\\n invisible newline character represent karta hai.',
        cardExplanationEnglish: '\\\\n represents the newline control character.'
      },
      {
        stepNumber: 2,
        title: 'Single print(), Multiple Lines',
        highlightToken: '"Red\\\\nGreen\\\\nBlue"',
        explanation: 'Ek hi string me do baar \\\\n lagane se teen alag lines ban jati hain.',
        speechHinglish: 'Jab Python backslash n ko padhta hai, cursor nayi line par switch ho jata hai.',
        speechEnglish: 'Whenever encountered, it advances output to the next line in the Console.',
        visualAction: 'split_lines',
        highlightLine: 1,
        cardExplanationHinglish: 'Cursor har \\\\n par line change karta hai.',
        cardExplanationEnglish: 'The cursor wraps to a fresh line for each \\\\n sequence.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Red, Green, Blue',
        highlightToken: 'print("Red\\\\nGreen\\\\nBlue")',
        explanation: 'Console par Red, Green aur Blue alag alag lines par print ho gaye.',
        speechHinglish: 'Is tarah ek hi print statement se Red, Green aur Blue alag alag lines par print hote hain.',
        speechEnglish: 'This allows a single print statement to output Red, Green, and Blue on three lines.',
        visualAction: 'display_output',
        outputLine: 'Red\\nGreen\\nBlue',
        highlightLine: 1,
        cardExplanationHinglish: 'Three lines successfully printed from one string.',
        cardExplanationEnglish: 'Three distinct lines printed using one statement.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Ek hi print() statement ka use karein.', textEnglish: 'Use one print() statement.' },
      { level: 2, textHinglish: 'Words ke beech mein bina space ke \\\\n lagayein.', textEnglish: 'Insert \\\\n between words without extra spaces.' },
      { level: 3, textHinglish: 'print("Red\\\\nGreen\\\\nBlue") likhein.', textEnglish: 'Write print("Red\\\\nGreen\\\\nBlue").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\\r\\n/g, '\\n').trim();
      const match = normalized === 'Red\\nGreen\\nBlue';
      const usesEscape = code.includes('\\\\n');
      return {
        passed: match && usesEscape,
        message: match && usesEscape ? '🎉 Perfect! Newline escape sequence (\\\\n) se multi-line output ban gaya.' : 'Use \\\\n inside a single string to display the three words.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Print Special Symbols ──
  {
    number: 9,
    title: 'Print Special Symbols',
    problemStatement: 'Write a Python program that displays the following message: Python @ 100%',
    instructions: 'Understand that Strings can contain letters, numbers, spaces, and special symbols.',
    referenceCode: 'print("Python @ 100%")',
    starterCode: '# Write a Python program to display: Python @ 100%\nprint("Python @ 100%")',
    sampleInput: '',
    expectedOutput: 'Python @ 100%',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Symbols Inside Strings',
        highlightToken: '"Python @ 100%"',
        explanation: 'Quotes ke andar letters, numbers aur special symbols (@, %, &, $) sab literal text hote hain.',
        speechHinglish: 'String ke andar hum letters, numbers aur special symbols ek saath likh sakte hain.',
        speechEnglish: 'Inside a string, you can mix alphabets, numbers, and special symbols.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Quotes ke andar har character text ki tarah preserved rehta hai.',
        cardExplanationEnglish: 'Every character within quotes is preserved as literal text.'
      },
      {
        stepNumber: 2,
        title: 'Preserving Spacing & Symbols',
        highlightToken: '@ 100%',
        explanation: 'Python exactly waisa hi print karega jaisa quotes ke andar likha hai.',
        speechHinglish: 'Quotes ke andar hone ki wajah se Python in sabhi symbols ko normal text ki tarah treat karta hai.',
        speechEnglish: 'Enclosed in quotes, Python treats every symbol as literal character data.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'Spaces aur symbols bina badlaav ke output hote hain.',
        cardExplanationEnglish: 'Spaces and symbols are preserved without alteration.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Python @ 100%',
        highlightToken: 'print("Python @ 100%")',
        explanation: 'Console mein exact message Python @ 100% display ho gaya.',
        speechHinglish: 'Execute karne par pura message Python at the rate 100 percent Console par display hota hai.',
        speechEnglish: 'Executing this prints Python @ 100% exactly as expected.',
        visualAction: 'display_output',
        outputLine: 'Python @ 100%',
        highlightLine: 1,
        cardExplanationHinglish: 'Exact match: Python @ 100% screen par render ho gaya.',
        cardExplanationEnglish: 'The string Python @ 100% is displayed exactly on the console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use one print() statement.' },
      { level: 2, textHinglish: 'Pura message quotes ke andar rakhein.', textEnglish: 'Enclose the complete message inside quotes.' },
      { level: 3, textHinglish: 'print("Python @ 100%") likhein.', textEnglish: 'Write print("Python @ 100%").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Python @ 100%';
      return {
        passed: match,
        message: match ? '🎉 Shandaar! Special symbols ke sath message perfectly print hua.' : 'Expected "Python @ 100%" as output.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: print() Master Challenge ──
  {
    number: 10,
    title: 'print() Master Challenge',
    problemStatement: 'Create a small Python program that displays a formatted learning message using multiple arguments, sep, and end.',
    instructions: 'Combine multiple arguments, default separators, custom sep, and end parameters into a clean two-line output.',
    referenceCode: 'print("PYTHON", "LEARNING", sep="-")\nprint("Level:", 1, end=" ")\nprint("Complete!")',
    starterCode: '# Master Challenge: Combine sep and end\nprint("PYTHON", "LEARNING", sep="-")\nprint("Level:", 1, end=" ")\nprint("Complete!")',
    sampleInput: '',
    expectedOutput: 'PYTHON-LEARNING\\nLevel: 1 Complete!',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Custom Separator with sep="-"',
        highlightToken: 'sep="-"',
        explanation: 'Pehla line PYTHON aur LEARNING ko hyphen se jodta hai.',
        speechHinglish: 'Ab hum print ke saare important concepts ko combine karenge. Pehle sep se custom hyphen separator banega.',
        speechEnglish: 'We now combine all print() features together: custom sep creates hyphenated words.',
        visualAction: 'apply_sep',
        outputLine: 'PYTHON-LEARNING',
        highlightLine: 1,
        cardExplanationHinglish: 'Line 1: PYTHON-LEARNING print karta hai.',
        cardExplanationEnglish: 'Line 1: Prints PYTHON-LEARNING with hyphen.'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Connecting with end=" "',
        highlightToken: 'end=" "',
        explanation: 'Doosra line Level: 1 print karke cursor ko same line par space par hold karta hai.',
        speechHinglish: 'Phir end ki help se next message same line par jud jayega.',
        speechEnglish: 'Then the end parameter connects the next statement onto the same line.',
        visualAction: 'apply_end',
        highlightLine: 2,
        cardExplanationHinglish: 'Line 2 cursor ko next line par drop nahi hone deta.',
        cardExplanationEnglish: 'Line 2 prevents newline wrap using end=" ".'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Complete Multi-line Output',
        highlightToken: 'print("Complete!")',
        explanation: 'Aakhiri statement Complete! ko same line par finish karta hai.',
        speechHinglish: 'Aakhiri statement Complete print karega, aur hamara do line ka formatted output ready ho jata hai.',
        speechEnglish: 'The final print statement adds Complete!, producing professional multi-line output.',
        visualAction: 'display_output',
        outputLine: 'Level: 1 Complete!',
        highlightLine: 3,
        cardExplanationHinglish: 'Dono lines beautifully format hokar complete output deti hain.',
        cardExplanationEnglish: 'Master Challenge output successfully generated.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Line 1 par sep="-" use karein, aur Line 2 par end=" " use karein.', textEnglish: 'Use sep="-" on line 1, and end=" " on line 2.' },
      { level: 2, textHinglish: 'Teen print statements likhein: pehla sep ke sath, doosra end ke sath, teesra aakhiri word.', textEnglish: 'Use three print statements with sep, end, and the final word.' },
      { level: 3, textHinglish: 'print("PYTHON", "LEARNING", sep="-")\nprint("Level:", 1, end=" ")\nprint("Complete!") likhein.', textEnglish: 'Write print("PYTHON", "LEARNING", sep="-")\nprint("Level:", 1, end=" ")\nprint("Complete!").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\\r\\n/g, '\\n').trim();
      const match = normalized === 'PYTHON-LEARNING\\nLevel: 1 Complete!';
      const hasSep = code.includes('sep=');
      const hasEnd = code.includes('end=');
      return {
        passed: match && hasSep && hasEnd,
        message: match && hasSep && hasEnd ? '🏆 MASTER LEVEL ACHIEVED! print() function ke sabhi parameters mastering ho chuki hai!' : 'Make sure output matches exactly and uses both sep and end parameters.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 03: Printing Text and Numbers — 10 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_03_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Print Your Age ──
  {
    number: 1,
    title: 'Print Your Age',
    problemStatement: 'Write a Python program that displays your age as a Number using print().',
    instructions: 'Understand that an Integer can be printed directly without quotes.',
    referenceCode: 'print(12)',
    starterCode: '# Write your code below to display your age as a Number\nprint(12)',
    sampleInput: '',
    expectedOutput: '12',
    isPersonalized: true,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Call the print() Function',
        highlightToken: 'print',
        explanation: 'print() ek built-in Python function hai jo Output display karta hai.',
        speechHinglish: 'Ab hum apni age ko Number ke form mein print karenge.',
        speechEnglish: 'Now we display an age in numeric format.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'print() function screen par numeric output display karta hai.',
        cardExplanationEnglish: 'The print() function sends numeric data to the output screen.'
      },
      {
        stepNumber: 2,
        title: 'Integer Literal (No Quotes)',
        highlightToken: '12',
        explanation: '12 ek Integer hai kyunki ismein decimal point nahi hai. Integer ko quotes ki zaroorat nahi hoti.',
        speechHinglish: 'Yahan 12 ek Integer hai, kyunki ismein decimal point nahi hai.',
        speechEnglish: 'Here 12 is an Integer because it has no decimal point.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'Integer literals bina quotes ke direct numeric values hoti hain.',
        cardExplanationEnglish: 'Integers are pure numeric literals written without quotes.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: 12',
        highlightToken: 'print(12)',
        explanation: 'Execute karne par Console mein exact integer age print hoti hai.',
        speechHinglish: 'Integer ko print karne ke liye quotes ki zaroorat nahi hoti, execute karne par 12 print ho jata hai.',
        speechEnglish: 'Integers require no quotes, and executing displays 12 in the console.',
        visualAction: 'display_output',
        outputLine: '12',
        highlightLine: 1,
        cardExplanationHinglish: 'Age number Console par display ho chuka hai.',
        cardExplanationEnglish: 'Age is successfully rendered to the console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use print().' },
      { level: 2, textHinglish: 'Apni age ko bina quotes ke likhein jaise 12 ya 14.', textEnglish: 'Write your age as an unquoted number like 12.' },
      { level: 3, textHinglish: 'print(12) pass karein aur Run Code karein.', textEnglish: 'Pass print(12) and run your code.' }
    ],
    validate: (code: string, stdout: string) => {
      const trimmed = stdout.trim();
      const isNum = /^[0-9]+$/.test(trimmed);
      const noQuotes = !code.includes('"') && !code.includes("'");
      return {
        passed: isNum && noQuotes,
        message: isNum && noQuotes ? '🎉 Shabaash! Integer age successfully print hui.' : 'Please print a valid nonnegative integer age without quotes.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Print a Negative Number ──
  {
    number: 2,
    title: 'Print a Negative Number',
    problemStatement: 'Write a Python program that displays the Number -25.',
    instructions: 'Understand negative Integer values in Python.',
    referenceCode: 'print(-25)',
    starterCode: '# Write your code below to display -25\nprint(-25)',
    sampleInput: '',
    expectedOutput: '-25',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Minus Sign Representation',
        highlightToken: '-25',
        explanation: 'Minus sign (-) batata hai ki number zero se chhota hai.',
        speechHinglish: 'Python positive aur negative dono numbers ko seamlessly handle karta hai.',
        speechEnglish: 'Python handles positive and negative numbers seamlessly.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Minus sign negative value represent karta hai.',
        cardExplanationEnglish: 'The minus sign denotes a negative numeric value.'
      },
      {
        stepNumber: 2,
        title: 'Negative Number on Number Line',
        highlightToken: '-25',
        explanation: 'Number line par -25 zero ke left side par position hota hai.',
        speechHinglish: 'Minus sign batata hai ki number zero se chhota hai.',
        speechEnglish: 'The minus sign indicates a value smaller than zero.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'Python bina kisi extra type ke direct negative integer accept karta hai.',
        cardExplanationEnglish: 'Python accepts signed negative numbers directly.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: -25',
        highlightToken: 'print(-25)',
        explanation: 'Execute karne par exact negative number -25 output hota hai.',
        speechHinglish: 'Jab hum print minus 25 execute karte hain, console mein negative number display hota hai.',
        speechEnglish: 'Executing print(-25) outputs the negative integer to the console.',
        visualAction: 'display_output',
        outputLine: '-25',
        highlightLine: 1,
        cardExplanationHinglish: '-25 Console par print ho gaya.',
        cardExplanationEnglish: '-25 is rendered to the console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use print().' },
      { level: 2, textHinglish: 'Number ke aage minus sign lagayein: -25.', textEnglish: 'Put a minus sign in front of the number: -25.' },
      { level: 3, textHinglish: 'print(-25) likhein.', textEnglish: 'Write print(-25).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '-25';
      const noQuotes = !code.includes('"-25"') && !code.includes("'-25'");
      return {
        passed: match && noQuotes,
        message: match && noQuotes ? '🎉 Bahut khoob! Negative integer -25 print ho gaya.' : 'Expected -25 as a negative numeric literal.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Print a Decimal Price ──
  {
    number: 3,
    title: 'Print a Decimal Price',
    problemStatement: 'Write a Python program that displays the decimal price 49.99.',
    instructions: 'Understand Float values (numbers with decimal points).',
    referenceCode: 'print(49.99)',
    starterCode: '# Write your code below to display decimal price 49.99\nprint(49.99)',
    sampleInput: '',
    expectedOutput: '49.99',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Floating-Point Numbers (Float)',
        highlightToken: '49.99',
        explanation: 'Decimal point wale numbers ko Python me Float kehte hain.',
        speechHinglish: 'Jab kisi number mein decimal point hota hai, Python use Float kehta hai.',
        speechEnglish: 'When a number has a decimal point, Python treats it as a Float.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: '49.99 ek Float data type hai.',
        cardExplanationEnglish: '49.99 belongs to the Float numeric data type.'
      },
      {
        stepNumber: 2,
        title: 'Pass Float Directly',
        highlightToken: 'print(49.99)',
        explanation: 'Integers ki tarah Float values ko bhi bina quotes ke pass kiya jata hai.',
        speechHinglish: 'Yahan 49.99 ek Float numeric value hai.',
        speechEnglish: 'Here 49.99 is a floating-point numeric literal.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'Float value bina quotes ke argument ban kar execute hoti hai.',
        cardExplanationEnglish: 'The float literal is passed directly without quotes.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: 49.99',
        highlightToken: 'print(49.99)',
        explanation: 'Terminal par decimal price 49.99 cleanly render hota hai.',
        speechHinglish: 'print function ise bina quotes ke directly output karta hai.',
        speechEnglish: 'The print function outputs it directly to the console.',
        visualAction: 'display_output',
        outputLine: '49.99',
        highlightLine: 1,
        cardExplanationHinglish: '49.99 display ho gaya.',
        cardExplanationEnglish: '49.99 is displayed on the console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use print().' },
      { level: 2, textHinglish: 'Decimal value 49.99 ko bina quotes ke likhein.', textEnglish: 'Write the decimal value 49.99 without quotes.' },
      { level: 3, textHinglish: 'print(49.99) likhein.', textEnglish: 'Write print(49.99).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '49.99';
      const noQuotes = !code.includes('"49.99"') && !code.includes("'49.99'");
      return {
        passed: match && noQuotes,
        message: match && noQuotes ? '🎉 Zabardast! Decimal Float price 49.99 successfully print hua.' : 'Expected 49.99 as an unquoted float literal.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Print a Boolean Value ──
  {
    number: 4,
    title: 'Print a Boolean Value',
    problemStatement: 'Write a Python program that displays the Boolean value True.',
    instructions: 'Understand Boolean literals True and False.',
    referenceCode: 'print(True)',
    starterCode: '# Write your code below to display Boolean value True\nprint(True)',
    sampleInput: '',
    expectedOutput: 'True',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Boolean Data Type',
        highlightToken: 'True',
        explanation: 'Boolean type mein sirf do possible states hoti hain: True ya False.',
        speechHinglish: 'Python mein Boolean ke do values hote hain: True aur False.',
        speechEnglish: 'In Python, Boolean values represent True and False conditions.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Boolean data type logical condition status batata hai.',
        cardExplanationEnglish: 'Boolean data types convey truth values (True or False).'
      },
      {
        stepNumber: 2,
        title: 'Capital T & Not a String',
        highlightToken: 'True',
        explanation: 'True Python ka keyword hai jiska first letter capital hota hai. Iske charo taraf quotes nahi lagate.',
        speechHinglish: 'Dhyan dein ki True ka pehla letter capital hota hai aur ye String nahi hai.',
        speechEnglish: 'Note that True starts with a capital T and is not a string.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'True keyword hai, quotes ke bina likha jata hai.',
        cardExplanationEnglish: 'True is a built-in literal constant, not enclosed in quotes.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: True',
        highlightToken: 'print(True)',
        explanation: 'Terminal par Boolean status True print ho jata hai.',
        speechHinglish: 'Execute karne par console mein Boolean status True print hota hai.',
        speechEnglish: 'Executing outputs True as a true Boolean literal.',
        visualAction: 'display_output',
        outputLine: 'True',
        highlightLine: 1,
        cardExplanationHinglish: 'True screen par print ho gaya.',
        cardExplanationEnglish: 'True successfully outputted to the console.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'print() function ka use karein.', textEnglish: 'Use print().' },
      { level: 2, textHinglish: 'Boolean literal True likhein bina quotes ke.', textEnglish: 'Use Boolean literal True without quotation marks.' },
      { level: 3, textHinglish: 'Capital T ke sath print(True) likhein.', textEnglish: 'Write print(True) with capital T.' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'True';
      const noQuotes = !code.includes('"True"') && !code.includes("'True'");
      return {
        passed: match && noQuotes,
        message: match && noQuotes ? '🎉 Brilliant! Boolean literal True bina quotes ke print kiya gaya.' : 'Use the Boolean literal True (capital T, no quotes).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Print Text and Number Together ──
  {
    number: 5,
    title: 'Print Text and Number Together',
    problemStatement: 'Write a Python program that displays: Age: 12 using a String and an Integer as separate arguments inside one print() function.',
    instructions: 'Understand printing mixed String and Integer arguments.',
    referenceCode: 'print("Age:", 12)',
    starterCode: '# Print text and number together\nprint("Age:", 12)',
    sampleInput: '',
    expectedOutput: 'Age: 12',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'String and Integer Arguments',
        highlightToken: '"Age:", 12',
        explanation: 'Pehla argument String ("Age:") hai aur doosra argument Integer (12) hai.',
        speechHinglish: 'Yahan print ke andar do alag arguments hain: pehla String aur doosra Integer.',
        speechEnglish: 'Here print accepts two arguments: a String label and an Integer.',
        visualAction: 'highlight_arguments',
        highlightLine: 1,
        cardExplanationHinglish: '"Age:" String hai aur 12 Integer hai.',
        cardExplanationEnglish: '"Age:" is a String literal and 12 is an Integer.'
      },
      {
        stepNumber: 2,
        title: 'Comma Separator & Auto Space',
        highlightToken: ',',
        explanation: 'Comma do arguments ko separate karta hai aur Python automatically ek space insert karta hai.',
        speechHinglish: 'Comma in dono arguments ko cleanly separate karta hai.',
        speechEnglish: 'The comma neatly separates both arguments.',
        visualAction: 'animate_separator',
        highlightLine: 1,
        cardExplanationHinglish: 'Comma arguments ko alag karke automatic space lagata hai.',
        cardExplanationEnglish: 'Comma separates arguments and adds automatic spacing.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Age: 12',
        highlightToken: 'print("Age:", 12)',
        explanation: 'Terminal par Age: 12 perfectly display ho jata hai.',
        speechHinglish: 'Python default space ke sath dono ko jodkar Age: 12 display karta hai.',
        speechEnglish: 'Python automatically inserts a space, outputting Age: 12.',
        visualAction: 'display_output',
        outputLine: 'Age: 12',
        highlightLine: 1,
        cardExplanationHinglish: 'Output: Age: 12 print ho gaya.',
        cardExplanationEnglish: 'Output: Age: 12 cleanly printed.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Ek hi print() statement use karein.', textEnglish: 'Use one print() statement.' },
      { level: 2, textHinglish: 'String aur Integer ko comma se alag karein: "Age:", 12.', textEnglish: 'Separate string and integer with a comma: "Age:", 12.' },
      { level: 3, textHinglish: 'print("Age:", 12) likhein.', textEnglish: 'Write print("Age:", 12).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Age: 12';
      const hasComma = code.includes(',');
      const singlePrint = (code.match(/print\s*\(/g) || []).length === 1;
      return {
        passed: match && hasComma && singlePrint,
        message: match && hasComma && singlePrint ? '🎉 Shandaar! Mixed String aur Integer arguments seamlessly print hue.' : 'Use a single print() statement with a String and Integer separated by comma.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Create a Simple Scoreboard ──
  {
    number: 6,
    title: 'Create a Simple Scoreboard',
    problemStatement: 'Create a simple scoreboard that displays: SCOREBOARD, Player: Alex, Score: 100, Level: 5.',
    instructions: 'Combine Strings and Integers across multiple print() statements.',
    referenceCode: 'print("SCOREBOARD")\nprint("Player:", "Alex")\nprint("Score:", 100)\nprint("Level:", 5)',
    starterCode: '# Create a simple scoreboard\nprint("SCOREBOARD")\nprint("Player:", "Alex")\nprint("Score:", 100)\nprint("Level:", 5)',
    sampleInput: '',
    expectedOutput: 'SCOREBOARD\nPlayer: Alex\nScore: 100\nLevel: 5',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Four print() Statements',
        highlightToken: 'print("SCOREBOARD")',
        explanation: 'Chaar statements sequential order mein line-by-line execute honge.',
        speechHinglish: 'Ab hum chaar print statements se structured Scoreboard banayenge.',
        speechEnglish: 'We build a structured Scoreboard using four print statements.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Heading line 1 par display hogi.',
        cardExplanationEnglish: 'Heading executes on line 1.'
      },
      {
        stepNumber: 2,
        title: 'Mixed Data Types',
        highlightToken: 'print("Score:", 100)',
        explanation: 'Player text hai, jabki Score (100) aur Level (5) numeric integers hain.',
        speechHinglish: 'Heading aur player name Text hain, jabki Score aur Level Numbers hain.',
        speechEnglish: 'Heading and player name are Text, while Score and Level are Numbers.',
        visualAction: 'highlight_arguments',
        highlightLine: 3,
        cardExplanationHinglish: 'Text labels ke sath numeric literals jude hain.',
        cardExplanationEnglish: 'Labels are coupled with numeric literals.'
      },
      {
        stepNumber: 3,
        title: 'Complete Scoreboard Output',
        highlightToken: 'print("Level:", 5)',
        explanation: 'Structured Scoreboard terminal par ready ho gaya.',
        speechHinglish: 'Sequential execution se sundar formatted Scoreboard Console par taiyar hota hai.',
        speechEnglish: 'Sequential execution renders the complete scoreboard cleanly.',
        visualAction: 'display_output',
        outputLine: 'SCOREBOARD\nPlayer: Alex\nScore: 100\nLevel: 5',
        highlightLine: 4,
        cardExplanationHinglish: 'Scoreboard complete ho chuka hai.',
        cardExplanationEnglish: 'Complete scoreboard rendered.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Chaar separate print statements likhein.', textEnglish: 'Use four separate print statements.' },
      { level: 2, textHinglish: 'Score aur Level ke numbers ko bina quotes ke rakhein.', textEnglish: 'Pass numbers for Score and Level without quotes.' },
      { level: 3, textHinglish: 'print("SCOREBOARD") se shuru karke charo lines likhein.', textEnglish: 'Write all 4 lines starting with print("SCOREBOARD").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'SCOREBOARD\nPlayer: Alex\nScore: 100\nLevel: 5';
      const hasPrintCalls = (code.match(/print\s*\(/g) || []).length >= 4;
      return {
        passed: match && hasPrintCalls,
        message: match && hasPrintCalls ? '🎉 Perfect! 4-line Scoreboard accurately format aur execute hua.' : 'Scoreboard format must match expected 4 lines with integers for Score and Level.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Print Two Numbers on One Line ──
  {
    number: 7,
    title: 'Print Two Numbers on One Line',
    problemStatement: 'Write a Python program that displays two Numbers on the same line, separated by a space (10 20).',
    instructions: 'Understand printing multiple numeric arguments.',
    referenceCode: 'print(10, 20)',
    starterCode: '# Display two numbers separated by a space\nprint(10, 20)',
    sampleInput: '',
    expectedOutput: '10 20',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Multiple Numeric Arguments',
        highlightToken: '10, 20',
        explanation: '10 aur 20 dono Integer arguments hain jo comma se separated hain.',
        speechHinglish: 'Ek hi print function mein multiple numbers pass kar sakte hain.',
        speechEnglish: 'You can pass multiple numbers into a single print function.',
        visualAction: 'highlight_arguments',
        highlightLine: 1,
        cardExplanationHinglish: '10 aur 20 dono numeric arguments hain.',
        cardExplanationEnglish: '10 and 20 are pure numeric arguments.'
      },
      {
        stepNumber: 2,
        title: 'Default Space Separation',
        highlightToken: ',',
        explanation: 'Python arguments ke beech automatic single space banata hai.',
        speechHinglish: 'Comma arguments ko separate karta hai aur Python space insert karta hai.',
        speechEnglish: 'The comma separates them and Python inserts a default space.',
        visualAction: 'animate_separator',
        highlightLine: 1,
        cardExplanationHinglish: 'Comma ke karan dono numbers ke beech space aata hai.',
        cardExplanationEnglish: 'Comma creates natural spacing between numbers.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: 10 20',
        highlightToken: 'print(10, 20)',
        explanation: 'Console par 10 20 single line par print ho jata hai.',
        speechHinglish: 'Output mein 10 aur 20 ek hi line par display ho jate hain.',
        speechEnglish: '10 and 20 are printed together on a single line.',
        visualAction: 'display_output',
        outputLine: '10 20',
        highlightLine: 1,
        cardExplanationHinglish: '10 20 display ho gaya.',
        cardExplanationEnglish: '10 20 successfully printed.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Ek hi print statement use karein.', textEnglish: 'Use a single print statement.' },
      { level: 2, textHinglish: '10 aur 20 ko comma se separate karein: print(10, 20).', textEnglish: 'Separate 10 and 20 with a comma: print(10, 20).' },
      { level: 3, textHinglish: 'print(10, 20) likhein.', textEnglish: 'Write print(10, 20).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '10 20';
      const noQuotes = !code.includes('"') && !code.includes("'");
      return {
        passed: match && noQuotes,
        message: match && noQuotes ? '🎉 Badiya! Do numbers ek hi line par space ke sath print ho gaye.' : 'Expected "10 20" using numeric arguments without quotes.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Print a Number as Text ──
  {
    number: 8,
    title: 'Print a Number as Text',
    problemStatement: 'Write a Python program that displays the text 2026 using a String literal rather than an Integer literal.',
    instructions: 'Understand that "2026" is a String while 2026 is an Integer.',
    referenceCode: 'print("2026")',
    starterCode: '# Print 2026 as a String literal\nprint("2026")',
    sampleInput: '',
    expectedOutput: '2026',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'String vs Integer Distinction',
        highlightToken: '"2026"',
        explanation: 'Quotes ke andar 2026 text (String) hai, jabki bina quotes ke number hota.',
        speechHinglish: 'Quotes ke andar 2026 ek String hai, jabki bina quotes ke ye ek Integer hota.',
        speechEnglish: 'Inside quotes, 2026 is a String literal, whereas without quotes it is an Integer.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: '"2026" String literal hai.',
        cardExplanationEnglish: '"2026" is a string literal.'
      },
      {
        stepNumber: 2,
        title: 'Underlying Data Types',
        highlightToken: '"2026"',
        explanation: 'Console par output same dikhta hai lekin Python ke internal representation mein type difference hota hai.',
        speechHinglish: 'Console Output dekhne mein same hota hai, lekin data type alag hota hai.',
        speechEnglish: 'Both look identical in output, but their underlying data types differ.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'Data type difference concept ko samjhein.',
        cardExplanationEnglish: 'Understand the underlying data type difference.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: 2026',
        highlightToken: 'print("2026")',
        explanation: 'Console par 2026 text ke roop mein print ho gaya.',
        speechHinglish: 'Executing displays 2026 as pure text data.',
        speechEnglish: 'Executing displays 2026 formatted as literal text.',
        visualAction: 'display_output',
        outputLine: '2026',
        highlightLine: 1,
        cardExplanationHinglish: '2026 print ho gaya.',
        cardExplanationEnglish: '2026 successfully printed as string.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Quotes ka use karein.', textEnglish: 'Use quotes.' },
      { level: 2, textHinglish: 'Digits ko quotes ke andar pass karein: "2026".', textEnglish: 'Enclose digits inside quotes: "2026".' },
      { level: 3, textHinglish: 'print("2026") likhein.', textEnglish: 'Write print("2026").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '2026';
      const usesQuotes = code.includes('"2026"') || code.includes("'2026'");
      return {
        passed: match && usesQuotes,
        message: match && usesQuotes ? '🎉 Superb! 2026 ko String literal ke form mein print kiya gaya.' : 'You must use quotes around 2026 to make it a String literal!'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Print Text, Integer and Float Together ──
  {
    number: 9,
    title: 'Print Text, Integer and Float Together',
    problemStatement: 'Write a Python program that displays: Product: Notebook Quantity: 2 Price: 49.5 using mixed data types.',
    instructions: 'Understand that a single print() function can display multiple data types simultaneously.',
    referenceCode: 'print("Product:", "Notebook", "Quantity:", 2, "Price:", 49.5)',
    starterCode: '# Display Text, Integer, and Float together\nprint("Product:", "Notebook", "Quantity:", 2, "Price:", 49.5)',
    sampleInput: '',
    expectedOutput: 'Product: Notebook Quantity: 2 Price: 49.5',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Mixed Data Types Arguments',
        highlightToken: '"Product:", "Notebook", "Quantity:", 2, "Price:", 49.5',
        explanation: 'Is statement mein Strings, Integer (2) aur Float (49.5) ek saath pass kiye gaye hain.',
        speechHinglish: 'Ek single print statement mein hum multiple Data Types ek sath de sakte hain.',
        speechEnglish: 'A single print statement can accept multiple data types together.',
        visualAction: 'highlight_arguments',
        highlightLine: 1,
        cardExplanationHinglish: 'Strings, Integer aur Float milkar arguments banate hain.',
        cardExplanationEnglish: 'Strings, Integer, and Float combine as arguments.'
      },
      {
        stepNumber: 2,
        title: 'Auto Formatting with Spaces',
        highlightToken: ',',
        explanation: 'Python sabhi alag alag data types ko auto-convert karke space ke sath join karta hai.',
        speechHinglish: 'Product name String hai, Quantity Integer hai aur Price Float hai.',
        speechEnglish: 'Product is a String, Quantity is an Integer, and Price is a Float.',
        visualAction: 'animate_separator',
        highlightLine: 1,
        cardExplanationHinglish: 'Comma se sabhi types neatly align hote hain.',
        cardExplanationEnglish: 'Comma aligns all data types neatly.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Complete Product Row',
        highlightToken: 'print(...)',
        explanation: 'Terminal par clean continuous formatted line display hoti hai.',
        speechHinglish: 'Sabhi values perfectly space se judkar ek continuous line par display hoti hain.',
        speechEnglish: 'All values combine with spaces across a single clean line.',
        visualAction: 'display_output',
        outputLine: 'Product: Notebook Quantity: 2 Price: 49.5',
        highlightLine: 1,
        cardExplanationHinglish: 'Product row cleanly render ho gayi.',
        cardExplanationEnglish: 'Product line cleanly rendered.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Ek hi print() statement use karein.', textEnglish: 'Use one print() statement.' },
      { level: 2, textHinglish: 'Text, Integer aur Float ko comma se separate karein.', textEnglish: 'Separate Text, Integer, and Float with commas.' },
      { level: 3, textHinglish: 'print("Product:", "Notebook", "Quantity:", 2, "Price:", 49.5) likhein.', textEnglish: 'Write print("Product:", "Notebook", "Quantity:", 2, "Price:", 49.5).' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Product: Notebook Quantity: 2 Price: 49.5';
      const hasInt = code.includes('2');
      const hasFloat = code.includes('49.5');
      return {
        passed: match && hasInt && hasFloat,
        message: match && hasInt && hasFloat ? '🎉 Perfect! Mixed String, Integer aur Float data types successfully display hue.' : 'Expected mixed data types: String labels, Integer 2, and Float 49.5.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Student Report Mini Project ──
  {
    number: 10,
    title: 'Student Report Mini Project',
    problemStatement: 'Create a simple Student Report that displays: STUDENT REPORT, Name: Alex, Age: 12, Marks: 450, Percentage: 90.0, Passed: True.',
    instructions: 'Combine String, Integer, Float, and Boolean across multiple structured print statements.',
    referenceCode: 'print("STUDENT REPORT")\nprint("Name:", "Alex")\nprint("Age:", 12)\nprint("Marks:", 450)\nprint("Percentage:", 90.0)\nprint("Passed:", True)',
    starterCode: '# Student Report Mini Project\nprint("STUDENT REPORT")\nprint("Name:", "Alex")\nprint("Age:", 12)\nprint("Marks:", 450)\nprint("Percentage:", 90.0)\nprint("Passed:", True)',
    sampleInput: '',
    expectedOutput: 'STUDENT REPORT\nName: Alex\nAge: 12\nMarks: 450\nPercentage: 90.0\nPassed: True',
    isPersonalized: true,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Project Overview & Heading',
        highlightToken: 'print("STUDENT REPORT")',
        explanation: 'Pehle statement se Report ka heading display hoga.',
        speechHinglish: 'Ab hum Topic 03 ke saare data types ek mini project mein combine karenge.',
        speechEnglish: 'We combine all Topic 03 data types into a comprehensive mini project.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Line 1: STUDENT REPORT header.',
        cardExplanationEnglish: 'Line 1: STUDENT REPORT header.'
      },
      {
        stepNumber: 2,
        title: 'All Four Fundamental Data Types',
        highlightToken: 'print("Age:", 12)',
        explanation: 'Name (String), Age & Marks (Integers), Percentage (Float 90.0), aur Passed (Boolean True).',
        speechHinglish: 'Name String hai, Age aur Marks Integer hain, Percentage Float hai aur Passed Boolean hai.',
        speechEnglish: 'Name is String, Age and Marks are Integers, Percentage is Float, and Passed is Boolean.',
        visualAction: 'highlight_arguments',
        highlightLine: 3,
        cardExplanationHinglish: 'String, Integer, Float, Boolean charo shamil hain.',
        cardExplanationEnglish: 'Includes String, Integer, Float, and Boolean.'
      },
      {
        stepNumber: 3,
        title: 'Complete Formatted Report Output',
        highlightToken: 'print("Passed:", True)',
        explanation: '6 lines ka structured Student Report Console par beautifully generate hota hai.',
        speechHinglish: 'Shandar professional Student Report Console par display ho chuka hai!',
        speechEnglish: 'A structured professional student report is rendered to the console!',
        visualAction: 'display_output',
        outputLine: 'STUDENT REPORT\nName: Alex\nAge: 12\nMarks: 450\nPercentage: 90.0\nPassed: True',
        highlightLine: 6,
        cardExplanationHinglish: 'Complete Student Report display ho gaya.',
        cardExplanationEnglish: 'Complete Student Report displayed.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Chhe alag print statements use karein.', textEnglish: 'Use six separate print statements.' },
      { level: 2, textHinglish: 'Percentage me float 90.0 aur Passed me Boolean True bina quotes ke pass karein.', textEnglish: 'Pass float 90.0 and Boolean True without quotes.' },
      { level: 3, textHinglish: 'Student Report ke 6 lines sequential order mein likhein.', textEnglish: 'Write all 6 lines of the Student Report in order.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const lines = normalized.split('\n');
      const hasHeader = lines.some(l => l.includes('STUDENT REPORT'));
      const hasName = lines.some(l => l.includes('Name:'));
      const hasAge = lines.some(l => /Age:\s*\d+/.test(l));
      const hasMarks = lines.some(l => /Marks:\s*\d+/.test(l));
      const hasPct = lines.some(l => /Percentage:\s*\d+\.\d+/.test(l));
      const hasPassed = lines.some(l => /Passed:\s*True/.test(l));
      const isPassed = hasHeader && hasName && hasAge && hasMarks && hasPct && hasPassed;
      return {
        passed: isPassed,
        message: isPassed ? '🏆 MINI PROJECT COMPLETE! Sabhi Fundamental Data Types (String, Integer, Float, Boolean) master ho chuke hain!' : 'Ensure your report has Name, Age (int), Marks (int), Percentage (float), and Passed (True).'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 04: Multiple print() Statements — 10 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_04_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Print Two Messages ──
  {
    number: 1,
    title: 'Print Two Messages',
    problemStatement: 'Write a Python program that displays two messages on separate lines: Hello and Python.',
    instructions: 'Understand how two print() statements execute sequentially from top to bottom.',
    referenceCode: 'print("Hello")\nprint("Python")',
    starterCode: '# Write your code below to display Hello and Python\nprint("Hello")\nprint("Python")',
    sampleInput: '',
    expectedOutput: 'Hello\nPython',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'First Statement Execution',
        highlightToken: 'print("Hello")',
        explanation: 'Python sabse pehle pehla statement execute karega aur Console mein Hello print hoga.',
        speechHinglish: 'Yahan humne do print statements likhe hain.',
        speechEnglish: 'Here we have written two print statements.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Pehle Line 1 execute hoti hai.',
        cardExplanationEnglish: 'Line 1 executes first.'
      },
      {
        stepNumber: 2,
        title: 'Automatic Newline Transition',
        highlightToken: 'print("Hello")',
        explanation: 'Default newline cursor ko nayi line par bhejti hai.',
        speechHinglish: 'Python sabse pehle first statement execute karega aur Console mein Hello display hoga.',
        speechEnglish: 'Python executes the first statement first, displaying Hello on line 1.',
        visualAction: 'display_line',
        outputLine: 'Hello',
        highlightLine: 1,
        cardExplanationHinglish: 'Cursor automatic Line 2 par wrap karta hai.',
        cardExplanationEnglish: 'Cursor automatically drops to line 2.'
      },
      {
        stepNumber: 3,
        title: 'Second Statement Execution',
        highlightToken: 'print("Python")',
        explanation: 'Doosra statement agli line par Python output karta hai.',
        speechHinglish: 'Uske baad second statement execute hoga aur Python next line par display hoga.',
        speechEnglish: 'Next, the second statement executes, displaying Python on the following line.',
        visualAction: 'display_output',
        outputLine: 'Hello\nPython',
        highlightLine: 2,
        cardExplanationHinglish: 'Sequential execution complete.',
        cardExplanationEnglish: 'Sequential execution finished.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Do print() statements use karein.', textEnglish: 'Use two print() statements.' },
      { level: 2, textHinglish: 'Har message ko quotes ke andar alag line par likhein.', textEnglish: 'Put each message inside quotes on its own line.' },
      { level: 3, textHinglish: 'print("Hello")\nprint("Python") likhein.', textEnglish: 'Write print("Hello")\nprint("Python").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Hello\nPython';
      const hasTwoPrints = (code.match(/print\s*\(/g) || []).length >= 2;
      return {
        passed: match && hasTwoPrints,
        message: match && hasTwoPrints ? '🎉 Shabaash! Dono messages do alag alag lines par print ho gaye.' : 'Expected two separate print lines: "Hello" then "Python".'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Print Three Lines ──
  {
    number: 2,
    title: 'Print Three Lines',
    problemStatement: 'Write a Python program that displays three words on separate lines: Apple, Banana, and Mango.',
    instructions: 'Understand sequential top-to-bottom execution across three statements.',
    referenceCode: 'print("Apple")\nprint("Banana")\nprint("Mango")',
    starterCode: '# Print three words on separate lines\nprint("Apple")\nprint("Banana")\nprint("Mango")',
    sampleInput: '',
    expectedOutput: 'Apple\nBanana\nMango',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Top-to-Bottom Execution',
        highlightToken: 'print("Apple")',
        explanation: 'Python execution sequence strictly upar se neeche chalta hai.',
        speechHinglish: 'Python Code ko top se bottom execute karta hai.',
        speechEnglish: 'Python executes code from top to bottom in sequential order.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Step 1: Apple display hota hai.',
        cardExplanationEnglish: 'Step 1: Apple is printed.'
      },
      {
        stepNumber: 2,
        title: 'Sequential Steps: Banana & Mango',
        highlightToken: 'print("Banana")',
        explanation: 'Apple ke baad Banana aur aakhir mein Mango execute hoga.',
        speechHinglish: 'Pehle Apple print hoga, phir Banana aur finally Mango.',
        speechEnglish: 'First Apple is printed, then Banana, and finally Mango.',
        visualAction: 'pass_argument',
        highlightLine: 2,
        cardExplanationHinglish: 'Har statement apni बारी par execute hota hai.',
        cardExplanationEnglish: 'Each statement executes in turn.'
      },
      {
        stepNumber: 3,
        title: 'Three Separate Output Lines',
        highlightToken: 'print("Mango")',
        explanation: 'Console par teeno fruits sequential lines par display ho jate hain.',
        speechHinglish: 'Har print ke baad default newline ki wajah se next output alag line par aata hai.',
        speechEnglish: 'The default newline after each print call places each word on its own line.',
        visualAction: 'display_output',
        outputLine: 'Apple\nBanana\nMango',
        highlightLine: 3,
        cardExplanationHinglish: 'Teeno lines successfully print ho gayi.',
        cardExplanationEnglish: 'All three lines cleanly rendered.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Teen print() statements use karein.', textEnglish: 'Use three print() statements.' },
      { level: 2, textHinglish: 'Har statement mein ek fruit ka naam likhein.', textEnglish: 'Put one fruit in each statement.' },
      { level: 3, textHinglish: 'Apple, Banana, Mango order maintain karein.', textEnglish: 'Maintain order: Apple, Banana, Mango.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Apple\nBanana\nMango';
      return {
        passed: match,
        message: match ? '🎉 Bahut badiya! Teeno fruits teen distinct lines par print ho gaye.' : 'Expected Apple, Banana, and Mango on separate lines.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Understand Execution Order ──
  {
    number: 3,
    title: 'Understand Execution Order',
    problemStatement: 'Write a Python program that displays the following steps in the correct order: Start, Processing, Finished.',
    instructions: 'Understand that statement order directly dictates console output sequence.',
    referenceCode: 'print("Start")\nprint("Processing")\nprint("Finished")',
    starterCode: '# Understand execution order\nprint("Start")\nprint("Processing")\nprint("Finished")',
    sampleInput: '',
    expectedOutput: 'Start\nProcessing\nFinished',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Chronological Program Flow',
        highlightToken: 'print("Start")',
        explanation: 'Execution pointer line 1 se program start karta hai.',
        speechHinglish: 'Python normally code ko upar se neeche execute karta hai.',
        speechEnglish: 'Python executes code from top to bottom step by step.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Start sabse pehle print hota hai.',
        cardExplanationEnglish: 'Start prints first.'
      },
      {
        stepNumber: 2,
        title: 'Processing Step',
        highlightToken: 'print("Processing")',
        explanation: 'Pointer line 2 par move karke Processing execute karta hai.',
        speechHinglish: 'Pehle Start, phir Processing aur last mein Finished display hoga.',
        speechEnglish: 'Start executes first, followed by Processing, and lastly Finished.',
        visualAction: 'display_line',
        outputLine: 'Start\nProcessing',
        highlightLine: 2,
        cardExplanationHinglish: 'Line 2: Processing execute ho chuka.',
        cardExplanationEnglish: 'Line 2: Processing executed.'
      },
      {
        stepNumber: 3,
        title: 'Finished Step',
        highlightToken: 'print("Finished")',
        explanation: 'Aakhir mein Finished print karke execution complete hoti hai.',
        speechHinglish: 'Statements ka order change karne se output ka order bhi badal jata hai.',
        speechEnglish: 'Rearranging statements directly alters the output order in the console.',
        visualAction: 'display_output',
        outputLine: 'Start\nProcessing\nFinished',
        highlightLine: 3,
        cardExplanationHinglish: 'Order execution verified.',
        cardExplanationEnglish: 'Chronological output verified.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Teen print statements likhein.', textEnglish: 'Use three print statements.' },
      { level: 2, textHinglish: 'Start, Processing aur Finished ka order dhyan mein rakhein.', textEnglish: 'Arrange from Start to Processing to Finished.' },
      { level: 3, textHinglish: 'print("Start")\nprint("Processing")\nprint("Finished") likhein.', textEnglish: 'Write print("Start")\nprint("Processing")\nprint("Finished").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Start\nProcessing\nFinished';
      return {
        passed: match,
        message: match ? '🎉 Zabardast! Execution order perfectly maintain hua.' : 'Expected exact sequence: Start, Processing, Finished.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Print Text and Numbers on Different Lines ──
  {
    number: 4,
    title: 'Print Text and Numbers on Different Lines',
    problemStatement: 'Write a Python program that displays a student name, age, and marks on separate lines.',
    instructions: 'Understand sequential printing of Strings and Numbers across separate statements.',
    referenceCode: 'print("Name: Alex")\nprint("Age:", 12)\nprint("Marks:", 95)',
    starterCode: '# Print student info on separate lines\nprint("Name: Alex")\nprint("Age:", 12)\nprint("Marks:", 95)',
    sampleInput: '',
    expectedOutput: 'Name: Alex\nAge: 12\nMarks: 95',
    isPersonalized: true,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Mixing Text & Numbers Across Lines',
        highlightToken: 'print("Name: Alex")',
        explanation: 'Har statement alag data type aur label contain kar sakti hai.',
        speechHinglish: 'Ab hum multiple print statements mein Text aur Numbers dono use karenge.',
        speechEnglish: 'Here we combine Text and Numbers across multiple print statements.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Line 1 par Name label display hota hai.',
        cardExplanationEnglish: 'Line 1 displays Name label.'
      },
      {
        stepNumber: 2,
        title: 'Integer Literals on Subsequent Lines',
        highlightToken: 'print("Age:", 12)',
        explanation: 'Line 2 aur 3 numeric arguments ko seamlessly accept karti hain.',
        speechHinglish: 'Pehle Name Alex print hoga, phir Age 12 aur Marks 95.',
        speechEnglish: 'First Name Alex is printed, then Age 12, and then Marks 95.',
        visualAction: 'highlight_arguments',
        highlightLine: 2,
        cardExplanationHinglish: '12 aur 95 Integers hain.',
        cardExplanationEnglish: '12 and 95 are Integer literals.'
      },
      {
        stepNumber: 3,
        title: 'Complete Student Card Output',
        highlightToken: 'print("Marks:", 95)',
        explanation: 'Console mein multi-line student details cleanly format ho jati hain.',
        speechHinglish: 'Har statement execute hone ke baad console mein ek nayi line add hoti hai.',
        speechEnglish: 'Each statement executes in sequence, creating structured multi-line output.',
        visualAction: 'display_output',
        outputLine: 'Name: Alex\nAge: 12\nMarks: 95',
        highlightLine: 3,
        cardExplanationHinglish: 'Student card ready.',
        cardExplanationEnglish: 'Student card rendered.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Teen separate print statements banayein.', textEnglish: 'Use three separate print statements.' },
      { level: 2, textHinglish: 'Text labels ko quotes mein aur numbers ko bina quotes ke rakhein.', textEnglish: 'Put labels in quotes and numbers without quotes.' },
      { level: 3, textHinglish: 'Name, Age aur Marks ki teen lines likhein.', textEnglish: 'Write 3 lines for Name, Age, and Marks.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const hasName = /Name:/.test(normalized);
      const hasAge = /Age:\s*\d+/.test(normalized);
      const hasMarks = /Marks:\s*\d+/.test(normalized);
      const isPassed = hasName && hasAge && hasMarks;
      return {
        passed: isPassed,
        message: isPassed ? '🎉 Perfect! Student details across three distinct lines display ho gayi.' : 'Ensure you have separate lines for Name, Age (int), and Marks (int).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Create a Blank Line ──
  {
    number: 5,
    title: 'Create a Blank Line',
    problemStatement: 'Write a Python program that displays Hello and World with one empty line between them.',
    instructions: 'Understand how an empty print() creates a blank output line.',
    referenceCode: 'print("Hello")\nprint()\nprint("World")',
    starterCode: '# Print Hello and World with a blank line between them\nprint("Hello")\nprint()\nprint("World")',
    sampleInput: '',
    expectedOutput: 'Hello\n\nWorld',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'First Word: Hello',
        highlightToken: 'print("Hello")',
        explanation: 'Pehla statement Hello print karke cursor new line par jump karta hai.',
        speechHinglish: 'Pehla statement Hello print karke cursor nayi line par le jata hai.',
        speechEnglish: 'The first statement outputs Hello and advances the cursor.',
        visualAction: 'display_line',
        outputLine: 'Hello',
        highlightLine: 1,
        cardExplanationHinglish: 'Hello print ho gaya.',
        cardExplanationEnglish: 'Hello is printed.'
      },
      {
        stepNumber: 2,
        title: 'Empty print() Statement',
        highlightToken: 'print()',
        explanation: 'print() bina arguments ke empty line create karta hai.',
        speechHinglish: 'Beech mein print ke andar koi argument nahi hai, lekin newline ki wajah se empty line banti hai.',
        speechEnglish: 'The middle print() has no arguments, but emits a newline to produce an empty line.',
        visualAction: 'empty_line',
        highlightLine: 2,
        cardExplanationHinglish: 'print() creates a blank line.',
        cardExplanationEnglish: 'print() generates a blank line.'
      },
      {
        stepNumber: 3,
        title: 'Second Word: World',
        highlightToken: 'print("World")',
        explanation: 'Khali line ke baad World display hota hai.',
        speechHinglish: 'Aakhiri statement World print karta hai, beech mein sundar space ban jata hai.',
        speechEnglish: 'The final statement outputs World, leaving a clean blank space between them.',
        visualAction: 'display_output',
        outputLine: 'Hello\n\nWorld',
        highlightLine: 3,
        cardExplanationHinglish: 'Hello, blank line, World complete.',
        cardExplanationEnglish: 'Output with blank line verified.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Teen print statements likhein.', textEnglish: 'Use three print statements.' },
      { level: 2, textHinglish: 'Beech wala print() bilkul khali rakhein.', textEnglish: 'Leave the middle print() completely empty.' },
      { level: 3, textHinglish: 'print("Hello")\nprint()\nprint("World") likhein.', textEnglish: 'Write print("Hello")\nprint()\nprint("World").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Hello\n\nWorld';
      const hasEmpty = /print\s*\(\s*\)/.test(code);
      return {
        passed: match && hasEmpty,
        message: match && hasEmpty ? '🎉 Shandaar! Empty print() statement ne blank line create kar di.' : 'Use an empty print() between Hello and World.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Print on the Same Line Using end ──
  {
    number: 6,
    title: 'Print on the Same Line Using end',
    problemStatement: 'Write a Python program that displays Hello World on the same line using two print() statements and end.',
    instructions: 'Understand how the end parameter prevents newline wrap across multiple statements.',
    referenceCode: 'print("Hello", end=" ")\nprint("World")',
    starterCode: '# Print on same line using end\nprint("Hello", end=" ")\nprint("World")',
    sampleInput: '',
    expectedOutput: 'Hello World',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Default Newline Behavior',
        highlightToken: 'print("Hello")',
        explanation: 'Normal case mein har print ke baad cursor agli line par jata hai.',
        speechHinglish: 'Normally har print ke baad cursor next line par chala jata hai.',
        speechEnglish: 'Normally print automatically advances the cursor to the next line.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Default case newline push karta hai.',
        cardExplanationEnglish: 'Default behavior wraps to newline.'
      },
      {
        stepNumber: 2,
        title: 'Overriding with end=" "',
        highlightToken: 'end=" "',
        explanation: 'end=" " newline ko space se replace karta hai aur cursor same line par hold karta hai.',
        speechHinglish: 'Lekin end parameter se hum ise control kar sakte hain. Yahan end mein space diya hai.',
        speechEnglish: 'Using end=" " replaces the newline with a single space.',
        visualAction: 'apply_end',
        highlightLine: 1,
        cardExplanationHinglish: 'end=" " cursor ko hold karta hai.',
        cardExplanationEnglish: 'end=" " preserves cursor line.'
      },
      {
        stepNumber: 3,
        title: 'Joined Output: Hello World',
        highlightToken: 'print("World")',
        explanation: 'Doosra statement continuous line par jud kar Hello World print karta hai.',
        speechHinglish: 'Isliye World agli line par jane ke bajaye usi same line par jud kar Hello World print karta hai.',
        speechEnglish: 'As a result, World prints immediately on the same line, producing Hello World.',
        visualAction: 'display_output',
        outputLine: 'Hello World',
        highlightLine: 2,
        cardExplanationHinglish: 'Hello World single line output.',
        cardExplanationEnglish: 'Output joined on single line.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Do print statements use karein.', textEnglish: 'Use two print statements.' },
      { level: 2, textHinglish: 'Pehle print() mein end=" " parameter pass karein.', textEnglish: 'Add end=" " to the first print() call.' },
      { level: 3, textHinglish: 'print("Hello", end=" ")\nprint("World") likhein.', textEnglish: 'Write print("Hello", end=" ")\nprint("World").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Hello World';
      const hasEnd = code.includes('end=');
      const hasTwoPrints = (code.match(/print\s*\(/g) || []).length >= 2;
      return {
        passed: match && hasEnd && hasTwoPrints,
        message: match && hasEnd && hasTwoPrints ? '🎉 Bahut badiya! end parameter ne do print statements ko successfully connect kiya.' : 'Use two print statements with end=" " on the first.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Print a Number Sequence ──
  {
    number: 7,
    title: 'Print a Number Sequence',
    problemStatement: 'Write a Python program that displays the Numbers 1 to 5 on separate lines using multiple print() statements.',
    instructions: 'Understand sequential execution of multiple numeric statements in ascending order.',
    referenceCode: 'print(1)\nprint(2)\nprint(3)\nprint(4)\nprint(5)',
    starterCode: '# Print numbers 1 to 5\nprint(1)\nprint(2)\nprint(3)\nprint(4)\nprint(5)',
    sampleInput: '',
    expectedOutput: '1\n2\n3\n4\n5',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Sequential Numeric Flow',
        highlightToken: 'print(1)',
        explanation: 'Pehla statement 1 output karke line 2 par cursor push karta hai.',
        speechHinglish: 'Ab hum paanch numbers ko alag alag print statements se display karenge.',
        speechEnglish: 'We print five numbers sequentially using separate print statements.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Line 1: 1 print hota hai.',
        cardExplanationEnglish: 'Line 1: 1 is printed.'
      },
      {
        stepNumber: 2,
        title: 'Step by Step Execution',
        highlightToken: 'print(3)',
        explanation: 'Python har line ko line-by-line sequence me execute karta hai.',
        speechHinglish: 'Python har line ko sequence mein top to bottom execute karega.',
        speechEnglish: 'Python executes each line in top-to-bottom order.',
        visualAction: 'display_line',
        outputLine: '1\n2\n3',
        highlightLine: 3,
        cardExplanationHinglish: 'Sequential counter increment.',
        cardExplanationEnglish: 'Sequential counter increment.'
      },
      {
        stepNumber: 3,
        title: 'Complete 1 to 5 Stack',
        highlightToken: 'print(5)',
        explanation: 'Aakhir me paanchon numbers vertical stack me ready ho jate hain.',
        speechHinglish: 'Har number Console ki next line par sequentially display ho jata hai.',
        speechEnglish: 'Each number appears on its own line in the terminal.',
        visualAction: 'display_output',
        outputLine: '1\n2\n3\n4\n5',
        highlightLine: 5,
        cardExplanationHinglish: '1 to 5 numbers complete.',
        cardExplanationEnglish: 'Numbers 1 to 5 verified.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Paanch separate print statements use karein.', textEnglish: 'Use five separate print statements.' },
      { level: 2, textHinglish: 'Numbers ko bina quotes ke pass karein: 1, 2, 3, 4, 5.', textEnglish: 'Pass numbers without quotes in ascending order.' },
      { level: 3, textHinglish: 'print(1) se print(5) tak lines likhein.', textEnglish: 'Write lines from print(1) to print(5).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '1\n2\n3\n4\n5';
      return {
        passed: match,
        message: match ? '🎉 Shabaash! Numbers 1 to 5 sequentially display ho gaye.' : 'Expected numbers 1 through 5 on separate lines.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Print a Simple Receipt ──
  {
    number: 8,
    title: 'Print a Simple Receipt',
    problemStatement: 'Create a simple shopping receipt using multiple print() statements with Heading, Separator, Item, Quantity, Price, and Total.',
    instructions: 'Understand how multiple statements construct structured receipt formatting.',
    referenceCode: 'print("SHOPPING RECEIPT")\nprint("----------------")\nprint("Item: Notebook")\nprint("Quantity:", 2)\nprint("Price:", 50)\nprint("Total:", 100)',
    starterCode: '# Shopping Receipt\nprint("SHOPPING RECEIPT")\nprint("----------------")\nprint("Item: Notebook")\nprint("Quantity:", 2)\nprint("Price:", 50)\nprint("Total:", 100)',
    sampleInput: '',
    expectedOutput: 'SHOPPING RECEIPT\n----------------\nItem: Notebook\nQuantity: 2\nPrice: 50\nTotal: 100',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Receipt Header & Separator',
        highlightToken: 'print("SHOPPING RECEIPT")',
        explanation: 'Header aur divider line structured look create karte hain.',
        speechHinglish: 'Ab hum multiple print statements use karke ek Shopping Receipt banayenge.',
        speechEnglish: 'We construct a clean Shopping Receipt using multiple print statements.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Header and separator line.',
        cardExplanationEnglish: 'Header and separator line.'
      },
      {
        stepNumber: 2,
        title: 'Item, Quantity & Pricing Lines',
        highlightToken: 'print("Quantity:", 2)',
        explanation: 'Labels Strings hain, aur values (2, 50, 100) numeric literals hain.',
        speechHinglish: 'Har statement ek specific line aur data type display karta hai.',
        speechEnglish: 'Each statement formats an individual field and data item.',
        visualAction: 'highlight_arguments',
        highlightLine: 4,
        cardExplanationHinglish: 'Mixed text and numbers.',
        cardExplanationEnglish: 'Mixed text and numbers.'
      },
      {
        stepNumber: 3,
        title: 'Complete Formatted Receipt',
        highlightToken: 'print("Total:", 100)',
        explanation: 'Terminal par clean structured shopping receipt render ho jati hai.',
        speechHinglish: 'Jab saare statements sequentially execute hote hain, Console mein complete receipt ready ho jati hai.',
        speechEnglish: 'Executing sequentially produces a complete, professional receipt.',
        visualAction: 'display_output',
        outputLine: 'SHOPPING RECEIPT\n----------------\nItem: Notebook\nQuantity: 2\nPrice: 50\nTotal: 100',
        highlightLine: 6,
        cardExplanationHinglish: 'Receipt generation complete.',
        cardExplanationEnglish: 'Shopping receipt verified.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Chhe print statements use karein.', textEnglish: 'Use six print statements.' },
      { level: 2, textHinglish: 'Heading, line, Item, Quantity, Price aur Total order mein rakhein.', textEnglish: 'Arrange heading, divider, item, quantity, price, and total in order.' },
      { level: 3, textHinglish: 'Receipt ke 6 statements reference code ke according likhein.', textEnglish: 'Write all 6 statements according to reference code.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'SHOPPING RECEIPT\n----------------\nItem: Notebook\nQuantity: 2\nPrice: 50\nTotal: 100';
      return {
        passed: match,
        message: match ? '🎉 Zabardast! Shopping receipt successfully format aur display ho gayi.' : 'Receipt layout and fields must match expected format.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Fix the Wrong Output Order ──
  {
    number: 9,
    title: 'Fix the Wrong Output Order',
    problemStatement: 'A Python program displays the steps in the wrong order. Correct the Code so the Output appears as: Wake Up, Brush Teeth, Go to School.',
    instructions: 'Understand how statement order directly dictates the chronological console output.',
    referenceCode: 'print("Wake Up")\nprint("Brush Teeth")\nprint("Go to School")',
    starterCode: '# Fix the order of statements below\nprint("Go to School")\nprint("Wake Up")\nprint("Brush Teeth")',
    sampleInput: '',
    expectedOutput: 'Wake Up\nBrush Teeth\nGo to School',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Original Incorrect Sequence',
        highlightToken: 'print("Go to School")',
        explanation: 'Pehle Go to School chalne se daily sequence ulta ho raha tha.',
        speechHinglish: 'Is question mein code execute ho raha tha, lekin output ka order galat tha.',
        speechEnglish: 'In this challenge, the original code executed in an incorrect chronological order.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Order galat tha, pehle Wake Up aana chahiye.',
        cardExplanationEnglish: 'Incorrect order: Wake Up must come first.'
      },
      {
        stepNumber: 2,
        title: 'Execution Order Dependency',
        highlightToken: 'print("Wake Up")',
        explanation: 'Statements ko rearrange karke natural daily order mein set karte hain.',
        speechHinglish: 'Python statements ko upar se neeche jis order mein likhte hain, usi order mein execute karta hai.',
        speechEnglish: 'Python executes top-to-bottom strictly based on statement placement.',
        visualAction: 'pass_argument',
        highlightLine: 2,
        cardExplanationHinglish: 'Wake Up ko sabse pehle shift karein.',
        cardExplanationEnglish: 'Shift Wake Up to line 1.'
      },
      {
        stepNumber: 3,
        title: 'Corrected Chronological Output',
        highlightToken: 'print("Go to School")',
        explanation: 'Pehle Wake Up, phir Brush Teeth, phir Go to School print hoga.',
        speechHinglish: 'Statements ko rearrange karne par Wake Up, Brush Teeth, aur Go to School sahi sequence mein print hote hain.',
        speechEnglish: 'Rearranging the lines displays Wake Up, Brush Teeth, and Go to School in exact order.',
        visualAction: 'display_output',
        outputLine: 'Wake Up\nBrush Teeth\nGo to School',
        highlightLine: 3,
        cardExplanationHinglish: 'Bug successfully resolved.',
        cardExplanationEnglish: 'Order bug resolved.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Daily routine ka natural sequence sochein.', textEnglish: 'Think about real-world daily order.' },
      { level: 2, textHinglish: 'Wake Up ko Line 1 par aur Brush Teeth ko Line 2 par layein.', textEnglish: 'Move Wake Up to line 1 and Brush Teeth to line 2.' },
      { level: 3, textHinglish: 'print("Wake Up")\nprint("Brush Teeth")\nprint("Go to School") likhein.', textEnglish: 'Write print("Wake Up")\nprint("Brush Teeth")\nprint("Go to School").' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Wake Up\nBrush Teeth\nGo to School';
      return {
        passed: match,
        message: match ? '🎉 Shabaash! Statement order ko perfectly rearrange aur fix kar diya!' : 'Order must be Wake Up, then Brush Teeth, then Go to School.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Build a Daily Routine Mini Project ──
  {
    number: 10,
    title: 'Build a Daily Routine Mini Project',
    problemStatement: 'Create a Daily Routine program using multiple print() statements displaying heading and five activities in order.',
    instructions: 'Combine sequential execution, numbered formatting, and multi-line structured output.',
    referenceCode: 'print("MY DAILY ROUTINE")\nprint("1. Wake Up")\nprint("2. Brush Teeth")\nprint("3. Go to School")\nprint("4. Study Python")\nprint("5. Go to Sleep")',
    starterCode: '# Daily Routine Mini Project\nprint("MY DAILY ROUTINE")\nprint("1. Wake Up")\nprint("2. Brush Teeth")\nprint("3. Go to School")\nprint("4. Study Python")\nprint("5. Go to Sleep")',
    sampleInput: '',
    expectedOutput: 'MY DAILY ROUTINE\n1. Wake Up\n2. Brush Teeth\n3. Go to School\n4. Study Python\n5. Go to Sleep',
    isPersonalized: true,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Project Title & Scope',
        highlightToken: 'print("MY DAILY ROUTINE")',
        explanation: 'Pehli line program ka title display karti hai.',
        speechHinglish: 'Ab hum Topic 04 ka Daily Routine Mini Project banayenge.',
        speechEnglish: 'We conclude Topic 04 with a comprehensive Daily Routine Mini Project.',
        visualAction: 'highlight_function',
        highlightLine: 1,
        cardExplanationHinglish: 'Heading line 1.',
        cardExplanationEnglish: 'Heading line 1.'
      },
      {
        stepNumber: 2,
        title: 'Five Sequential Activities',
        highlightToken: 'print("1. Wake Up")',
        explanation: '1 se 5 tak ki activities step by step sequential order mein likhi hain.',
        speechHinglish: 'Pehla line heading hai, aur agle paanch lines daily activities hain.',
        speechEnglish: 'The first line is the heading, followed by five sequential routine activities.',
        visualAction: 'highlight_arguments',
        highlightLine: 2,
        cardExplanationHinglish: 'Sequential numbered routine.',
        cardExplanationEnglish: 'Numbered activities.'
      },
      {
        stepNumber: 3,
        title: 'Full Daily Routine Display',
        highlightToken: 'print("5. Go to Sleep")',
        explanation: '6 lines ka complete structured daily routine Console par render hota hai.',
        speechHinglish: 'Top to bottom sequential execution se complete Daily Routine beautifully Console par render ho jati hai!',
        speechEnglish: 'Strict top-to-bottom execution renders the structured schedule on the console!',
        visualAction: 'display_output',
        outputLine: 'MY DAILY ROUTINE\n1. Wake Up\n2. Brush Teeth\n3. Go to School\n4. Study Python\n5. Go to Sleep',
        highlightLine: 6,
        cardExplanationHinglish: 'Daily Routine complete.',
        cardExplanationEnglish: 'Daily Routine complete.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Heading ke sath kul chhe print statements use karein.', textEnglish: 'Use six print statements including heading.' },
      { level: 2, textHinglish: '1 se 5 activities ko numbered format mein sequential order mein rakhein.', textEnglish: 'Keep activities numbered 1 to 5 in chronological order.' },
      { level: 3, textHinglish: 'MY DAILY ROUTINE se start karke paanchon activities likhein.', textEnglish: 'Start with MY DAILY ROUTINE and list all 5 activities.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const lines = normalized.split('\n');
      const hasHeading = lines.some(l => l.includes('DAILY ROUTINE'));
      const hasWake = lines.some(l => l.includes('Wake Up'));
      const hasBrush = lines.some(l => l.includes('Brush Teeth'));
      const hasSchool = lines.some(l => l.includes('School'));
      const hasStudy = lines.some(l => l.includes('Python') || l.includes('Study'));
      const hasSleep = lines.some(l => l.includes('Sleep'));
      const isPassed = hasHeading && hasWake && hasBrush && hasSchool && hasStudy && hasSleep;
      return {
        passed: isPassed,
        message: isPassed ? '🏆 TOPIC 04 MASTER ACHIEVED! Multiple print() statements aur sequential execution master ho gaya!' : 'Ensure all 5 daily activities and heading are present in correct order.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 05: Comments in Python — 8 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_05_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Your First Python Comment ──
  {
    number: 1,
    title: 'Your First Python Comment',
    problemStatement: 'Write a Python program that contains a Comment explaining what the program does, followed by a statement that prints Hello Python.',
    instructions: 'Understand that a line beginning with # is a Comment and is ignored during execution.',
    referenceCode: '# This program prints a welcome message\nprint("Hello Python")',
    starterCode: '# Write a comment explaining the program, then print Hello Python\n# This program prints a welcome message\nprint("Hello Python")',
    sampleInput: '',
    expectedOutput: 'Hello Python',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'The # Symbol (Comment Marker)',
        highlightToken: '#',
        explanation: 'Python mein Comment likhne ke liye hum hash (#) symbol use karte hain.',
        speechHinglish: 'Python mein Comment likhne ke liye hum hash symbol use karte hain.',
        speechEnglish: 'In Python, we write comments using the hash symbol.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: '# symbol comment start karta hai.',
        cardExplanationEnglish: 'The # symbol initiates a comment.'
      },
      {
        stepNumber: 2,
        title: 'Comments are Ignored by Python',
        highlightToken: '# This program prints a welcome message',
        explanation: 'Comment sirf insaano ke padhne ke liye hota hai. Python isse execute nahi karta.',
        speechHinglish: 'Comment ka kaam code ko explain karna hota hai, Python isse instruction ki tarah execute nahi karta.',
        speechEnglish: 'Comments explain the code to humans and are ignored by the Python interpreter.',
        visualAction: 'pass_argument',
        highlightLine: 1,
        cardExplanationHinglish: 'Comments non-executable text hote hain.',
        cardExplanationEnglish: 'Comments are non-executable text.'
      },
      {
        stepNumber: 3,
        title: 'Executable print() Output',
        highlightToken: 'print("Hello Python")',
        explanation: 'Sirf print() function run hokar Hello Python display karta hai.',
        speechHinglish: 'Isliye Console mein sirf print function ka output Hello Python dikhega.',
        speechEnglish: 'Therefore, the Console displays only the output of the print statement.',
        visualAction: 'display_output',
        outputLine: 'Hello Python',
        highlightLine: 2,
        cardExplanationHinglish: 'Output: Hello Python.',
        cardExplanationEnglish: 'Output: Hello Python.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Python Comment ke liye # use hota hai.', textEnglish: 'Use the hash symbol for Python comments.' },
      { level: 2, textHinglish: 'Comment ko print() statement ke upar likho.', textEnglish: 'Place the comment above the print statement.' },
      { level: 3, textHinglish: '# se shuru hone wali line ke baad print("Hello Python") likho.', textEnglish: 'Write the comment line followed by print("Hello Python").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Hello Python';
      const hasComment = /#.*[a-zA-Z]/.test(code);
      return {
        passed: match && hasComment,
        message: match && hasComment ? '🎉 Shabaash! Python Comment add ho gaya aur message successfully print hua.' : 'Ensure your program contains a # comment and outputs Hello Python.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Comment Before Every Statement ──
  {
    number: 2,
    title: 'Comment Before Every Statement',
    problemStatement: "Write a Python program that displays a student's name and age. Add a separate Comment explaining each print() statement.",
    instructions: 'Understand how comments help document and clarify multiple statements.',
    referenceCode: '# Display the student name\nprint("Name: Alex")\n\n# Display the student age\nprint("Age:", 12)',
    starterCode: '# Comment before each statement\n# Display the student name\nprint("Name: Alex")\n\n# Display the student age\nprint("Age:", 12)',
    sampleInput: '',
    expectedOutput: 'Name: Alex\nAge: 12',
    isPersonalized: true,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Documenting Multiple Statements',
        highlightToken: '# Display the student name',
        explanation: 'Comments hume batate hain ki program ka kaunsa block kya kaam karta hai.',
        speechHinglish: 'Jab program mein multiple statements hote hain, tab Comments batate hain kaunsa code kya kaam karta hai.',
        speechEnglish: 'When a program has multiple statements, comments clarify the purpose of each line.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Comment 1: Name explain karta hai.',
        cardExplanationEnglish: 'Comment 1 explains name.'
      },
      {
        stepNumber: 2,
        title: 'Explaining the Second Statement',
        highlightToken: '# Display the student age',
        explanation: 'Doosra comment Age line ko clearly document karta hai.',
        speechHinglish: 'Pehla Comment Name display karne wale code ko explain karta hai.',
        speechEnglish: 'The first comment explains displaying the student\'s name.',
        visualAction: 'pass_argument',
        highlightLine: 4,
        cardExplanationHinglish: 'Comment 2: Age explain karta hai.',
        cardExplanationEnglish: 'Comment 2 explains age.'
      },
      {
        stepNumber: 3,
        title: 'Clean Console Output',
        highlightToken: 'print("Age:", 12)',
        explanation: 'Comments output par koi asar nahi daalte, sirf clean information display hoti hai.',
        speechHinglish: 'Doosra Comment Age display karne wale code ko explain karta hai aur output clean aata hai.',
        speechEnglish: 'The second comment explains displaying the age, keeping the codebase professional.',
        visualAction: 'display_output',
        outputLine: 'Name: Alex\nAge: 12',
        highlightLine: 5,
        cardExplanationHinglish: 'Documented code output ready.',
        cardExplanationEnglish: 'Documented code output ready.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Har statement ke upar explanatory Comment likho.', textEnglish: 'Add an explanatory comment above each statement.' },
      { level: 2, textHinglish: 'Comment ki shuruaat # se karo.', textEnglish: 'Start each comment with a hash symbol.' },
      { level: 3, textHinglish: 'Name aur Age dono ke liye separate print aur comment statements banayein.', textEnglish: 'Use separate comments and prints for Name and Age.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const hasName = /Name:/.test(normalized);
      const hasAge = /Age:\s*\d+/.test(normalized);
      const commentCount = (code.match(/#[^\r\n]*/g) || []).length;
      const isPassed = hasName && hasAge && commentCount >= 2;
      return {
        passed: isPassed,
        message: isPassed ? '🎉 Zabardast! Dono statements ke upar meaningful comments successfully verify hue.' : 'Add at least 2 comments explaining Name and Age statements.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Inline Comments ──
  {
    number: 3,
    title: 'Inline Comments',
    problemStatement: 'Write two print() statements and add an Inline Comment on the same line after each statement.',
    instructions: 'Understand that a Comment can appear after executable code on the same line.',
    referenceCode: 'print("Python")  # Display language name\nprint(100)       # Display a number',
    starterCode: '# Add inline comments on the same line after each statement\nprint("Python")  # Display language name\nprint(100)       # Display a number',
    sampleInput: '',
    expectedOutput: 'Python\n100',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Inline Comment Placement',
        highlightToken: '# Display language name',
        explanation: 'Code ke baad usi line par # lagakar likha gaya comment Inline Comment kehlata hai.',
        speechHinglish: 'Comment ko hamesha alag line par likhna zaroori nahi hai, hum code ke baad bhi likh sakte hain.',
        speechEnglish: 'Comments do not always have to be on their own line; they can follow code on the same line.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Code ke baad # lagakar inline comment banta hai.',
        cardExplanationEnglish: 'Inline comments follow code on the same line.'
      },
      {
        stepNumber: 2,
        title: 'Execution Ignores the Inline Comment',
        highlightToken: 'print(100)       # Display a number',
        explanation: 'Python # ke baad ka hissa ignore kar deta hai aur sirf aage ka code run karta hai.',
        speechHinglish: 'Ise Inline Comment kehte hain.',
        speechEnglish: 'These are known as Inline Comments.',
        visualAction: 'pass_argument',
        highlightLine: 2,
        cardExplanationHinglish: 'Python # ke baad ka text skip karta hai.',
        cardExplanationEnglish: 'Python skips everything after the #.'
      },
      {
        stepNumber: 3,
        title: 'Output Unaltered by Inline Comments',
        highlightToken: 'print(100)',
        explanation: 'Console mein Python aur 100 as usual display hote hain.',
        speechHinglish: 'Python hash symbol ke baad wale comment text ko execute nahi karta, sirf code run hota hai.',
        speechEnglish: 'Python ignores everything after the hash symbol on that line during execution.',
        visualAction: 'display_output',
        outputLine: 'Python\n100',
        highlightLine: 2,
        cardExplanationHinglish: 'Output: Python then 100.',
        cardExplanationEnglish: 'Output: Python then 100.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Pehle executable code likho.', textEnglish: 'First write your executable statement.' },
      { level: 2, textHinglish: 'Uske baad usi line par # lagao.', textEnglish: 'Follow it with a hash symbol on the same line.' },
      { level: 3, textHinglish: '# ke baad code ka purpose explain karo.', textEnglish: 'Write the inline comment after the hash.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Python\n100';
      const lines = code.split('\n');
      const hasInline = lines.some(l => l.includes('#') && l.includes('print'));
      return {
        passed: match && hasInline,
        message: match && hasInline ? '🎉 Bahut badiya! Inline comments successfully add aur verify ho gaye.' : 'Make sure to write inline comments on the same line after print statements.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Disable a Statement Using a Comment ──
  {
    number: 4,
    title: 'Disable a Statement Using a Comment',
    problemStatement: 'A program contains three messages. Temporarily disable the middle message using a Comment so only Start and End appear.',
    instructions: 'Understand how commenting out code temporarily disables its execution.',
    referenceCode: 'print("Start")\n# print("Temporary Message")\nprint("End")',
    starterCode: '# Comment out the middle statement\nprint("Start")\nprint("Temporary Message")\nprint("End")',
    sampleInput: '',
    expectedOutput: 'Start\nEnd',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Commenting Out Code',
        highlightToken: '# print("Temporary Message")',
        explanation: 'Kisi code line ke aage # lagane se Python use code nahi balki comment samajhta hai.',
        speechHinglish: 'Kabhi-kabhi developer kisi code ko delete kiye bina temporarily disable karna chahta hai.',
        speechEnglish: 'Developers often temporarily disable code without deleting it by commenting it out.',
        visualAction: 'highlight_token',
        highlightLine: 2,
        cardExplanationHinglish: '# lagane se line disable ho jati hai.',
        cardExplanationEnglish: 'Adding # disables the line from executing.'
      },
      {
        stepNumber: 2,
        title: 'Code is Skipped at Runtime',
        highlightToken: '# print("Temporary Message")',
        explanation: 'Disabled statement execute nahi hoti aur skip ho jati hai.',
        speechHinglish: 'Aise mein hum us line ke aage hash symbol laga dete hain jisse wo comment ban jata hai.',
        speechEnglish: 'Adding a hash symbol at the start turns the executable line into a comment.',
        visualAction: 'pass_argument',
        highlightLine: 2,
        cardExplanationHinglish: 'Temporary Message skip ho gaya.',
        cardExplanationEnglish: 'Temporary Message is skipped.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Start and End',
        highlightToken: 'print("End")',
        explanation: 'Terminal par sirf Start aur End print hota hai.',
        speechHinglish: 'Ab middle statement execute nahi hoga aur output mein sirf Start aur End dikhega.',
        speechEnglish: 'Python skips the commented-out statement, outputting only Start and End.',
        visualAction: 'display_output',
        outputLine: 'Start\nEnd',
        highlightLine: 3,
        cardExplanationHinglish: 'Output: Start aur End.',
        cardExplanationEnglish: 'Output: Start and End.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Middle message ko execute nahi karna hai.', textEnglish: 'The middle message should not be executed.' },
      { level: 2, textHinglish: 'Us statement ke aage # lagao: # print("Temporary Message").', textEnglish: 'Put a hash before that statement: # print("Temporary Message").' },
      { level: 3, textHinglish: 'First aur last statements ko unchanged rakho.', textEnglish: 'Leave first and last prints unchanged.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Start\nEnd';
      const hasCommentedPrint = /#\s*print\s*\(\s*["']Temporary Message["']\s*\)/.test(code);
      return {
        passed: match && hasCommentedPrint,
        message: match && hasCommentedPrint ? '🎉 Perfect! Middle statement successfully comment out ho gaya bina delete kiye.' : 'Comment out the middle statement with # rather than deleting it.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Multiple Comment Lines ──
  {
    number: 5,
    title: 'Multiple Comment Lines',
    problemStatement: 'Create a program containing three separate Comment lines describing the program, followed by a print statement that displays Learning Python.',
    instructions: 'Understand how several consecutive # comments can document a program cleanly.',
    referenceCode: '# Program: Python Basics\n# Purpose: Learn Comments\n# Topic: Code Documentation\n\nprint("Learning Python")',
    starterCode: '# Write 3 comment lines, then print Learning Python\n# Program: Python Basics\n# Purpose: Learn Comments\n# Topic: Code Documentation\n\nprint("Learning Python")',
    sampleInput: '',
    expectedOutput: 'Learning Python',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Multi-line Documentation Block',
        highlightToken: '# Program: Python Basics',
        explanation: 'Consecutive comment lines se hum detailed program header bana sakte hain.',
        speechHinglish: 'Jab hume program ke baare mein multiple lines mein information likhni hoti hai, hum consecutive comments use karte hain.',
        speechEnglish: 'For multi-line documentation, we can use consecutive single-line comments.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Consecutive # lines header banati hain.',
        cardExplanationEnglish: 'Consecutive # lines form header.'
      },
      {
        stepNumber: 2,
        title: 'Each Line Begins with #',
        highlightToken: '# Topic: Code Documentation',
        explanation: 'Python mein multi-line explanation ke liye har line par # lagana standard practice hai.',
        speechHinglish: 'Har comment line ke shuru mein hash symbol lagaya jata hai.',
        speechEnglish: 'Each documentation line begins with its own hash symbol.',
        visualAction: 'pass_argument',
        highlightLine: 3,
        cardExplanationHinglish: 'Har comment line independent hoti hai.',
        cardExplanationEnglish: 'Each comment line is independent.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: Learning Python',
        highlightToken: 'print("Learning Python")',
        explanation: 'Comments terminal output par zero effect daalte hain, sirf actual code chalta hai.',
        speechHinglish: 'Ye comments documentation ka kaam karte hain lekin Console mein koi extra output nahi bhejte.',
        speechEnglish: 'These comments document the code cleanly without affecting console output.',
        visualAction: 'display_output',
        outputLine: 'Learning Python',
        highlightLine: 5,
        cardExplanationHinglish: 'Clean output: Learning Python.',
        cardExplanationEnglish: 'Clean output: Learning Python.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Three separate comment lines likho.', textEnglish: 'Write three separate comment lines.' },
      { level: 2, textHinglish: 'Har line # se shuru karo.', textEnglish: 'Begin each line with a hash symbol.' },
      { level: 3, textHinglish: 'Comments ke baad print("Learning Python") likho.', textEnglish: 'Follow the comments with print("Learning Python").' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === 'Learning Python';
      const commentCount = (code.match(/#[^\r\n]*/g) || []).length;
      return {
        passed: match && commentLines >= 3,
        message: match && commentLines >= 3 ? '🎉 Shandaar! 3 documentation comment lines successfully verified.' : 'Include at least 3 comment lines and print Learning Python.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Comments vs Strings ──
  {
    number: 6,
    title: 'Comments vs Strings',
    problemStatement: 'Write a Python program that displays the text #Python and includes a separate Comment explaining the statement.',
    instructions: 'Understand the difference between # as a comment marker versus # inside quotes.',
    referenceCode: '# The hash symbol is part of the String\nprint("#Python")',
    starterCode: '# Print #Python with an explanatory comment\n# The hash symbol is part of the String\nprint("#Python")',
    sampleInput: '',
    expectedOutput: '#Python',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: '# Outside vs Inside Quotes',
        highlightToken: '# The hash symbol is part of the String',
        explanation: 'Quotes ke bahar # comment shuru karta hai.',
        speechHinglish: 'Ye bahut important difference hai: jab hash quotes ke bahar hota hai, to comment start karta hai.',
        speechEnglish: 'This is a fundamental concept: outside quotes, a hash starts a comment.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Quotes ke bahar # comment hota hai.',
        cardExplanationEnglish: '# outside quotes is a comment.'
      },
      {
        stepNumber: 2,
        title: '# as a Normal Character in String',
        highlightToken: '"#Python"',
        explanation: 'Quotes ke andar # text ka hissa hota hai, comment nahi banta.',
        speechHinglish: 'Lekin jab hash quotes ke andar hota hai, to wo String ka normal character ban jata hai.',
        speechEnglish: 'Inside quotes, however, the hash is treated as a literal text character.',
        visualAction: 'pass_argument',
        highlightLine: 2,
        cardExplanationHinglish: 'Quotes ke andar # text character hai.',
        cardExplanationEnglish: '# inside quotes is text.'
      },
      {
        stepNumber: 3,
        title: 'Console Output: #Python',
        highlightToken: 'print("#Python")',
        explanation: 'Output screen par hash symbol print hota hai.',
        speechHinglish: 'Isliye Console output mein hash Python print hota hai.',
        speechEnglish: 'Thus, the console cleanly outputs #Python.',
        visualAction: 'display_output',
        outputLine: '#Python',
        highlightLine: 2,
        cardExplanationHinglish: '#Python outputted.',
        cardExplanationEnglish: '#Python outputted.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Comment marker aur String character ka difference samjho.', textEnglish: 'Understand comment marker vs string character.' },
      { level: 2, textHinglish: '#Python ko quotes ke andar pass karein.', textEnglish: 'Pass #Python inside quotes: "#Python".' },
      { level: 3, textHinglish: 'Explanatory comment ke sath print("#Python") likhein.', textEnglish: 'Write print("#Python") with an explanatory comment.' }
    ],
    validate: (code: string, stdout: string) => {
      const match = stdout.trim() === '#Python';
      const hasComment = /#[^\r\n]*[a-zA-Z]/.test(code);
      return {
        passed: match && hasComment,
        message: match && hasComment ? '🎉 Brilliant! # symbol quotes ke andar character ke roop mein print ho gaya.' : 'Ensure #Python is inside quotes and there is a comment in your code.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Fix a Comment Mistake ──
  {
    number: 7,
    title: 'Fix a Comment Mistake',
    problemStatement: 'A student accidentally commented out a required print() statement. Fix the Code so that both messages are displayed, while keeping the explanatory Comment.',
    instructions: 'Understand how to identify and restore accidentally commented-out code.',
    referenceCode: '# Display both messages\nprint("Hello")\nprint("World")',
    starterCode: '# Fix the commented-out statement\n# Display both messages\nprint("Hello")\n# print("World")',
    sampleInput: '',
    expectedOutput: 'Hello\nWorld',
    isPersonalized: false,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Accidental Commenting Bug',
        highlightToken: '# print("World")',
        explanation: 'Line ke aage galti se # lagne ki wajah se World print nahi ho raha tha.',
        speechHinglish: 'Yahan World print karne wala statement galti se comment ban gaya tha.',
        speechEnglish: 'Here the statement printing World was accidentally commented out.',
        visualAction: 'highlight_token',
        highlightLine: 3,
        cardExplanationHinglish: 'World statement galti se disabled tha.',
        cardExplanationEnglish: 'World statement was disabled.'
      },
      {
        stepNumber: 2,
        title: 'Remove the Unwanted #',
        highlightToken: 'print("World")',
        explanation: '# hatate hi Python ise wapas executable statement maan leta hai.',
        speechHinglish: 'Isliye Python use execute nahi kar raha tha.',
        speechEnglish: 'Python was skipping it entirely during execution.',
        visualAction: 'pass_argument',
        highlightLine: 3,
        cardExplanationHinglish: '# remove karte hi statement active ho gayi.',
        cardExplanationEnglish: 'Removing # reactivates statement.'
      },
      {
        stepNumber: 3,
        title: 'Both Lines Executed',
        highlightToken: 'print("World")',
        explanation: 'Dono messages Hello aur World terminal par restore ho gaye.',
        speechHinglish: 'Jab hum us line se hash symbol remove karenge, tab statement dobara executable code ban jayega.',
        speechEnglish: 'Removing the leading hash restores it as active executable code.',
        visualAction: 'display_output',
        outputLine: 'Hello\nWorld',
        highlightLine: 3,
        cardExplanationHinglish: 'Bug resolved: Hello and World display.',
        cardExplanationEnglish: 'Bug resolved: Hello and World.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Check karo kaun sa required statement disabled hai.', textEnglish: 'Identify which statement is disabled.' },
      { level: 2, textHinglish: 'print("World") ke aage se # remove karo.', textEnglish: 'Remove the hash before print("World").' },
      { level: 3, textHinglish: 'Top explanatory comment ko delete mat karo.', textEnglish: 'Keep the explanatory comment.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Hello\nWorld';
      const hasActiveWorld = /^print\s*\(\s*["']World["']\s*\)/m.test(code);
      const hasComment = /#/.test(code);
      return {
        passed: match && hasActiveWorld && hasComment,
        message: match && hasActiveWorld && hasComment ? '🎉 Shabaash! Comment mistake successfully fix ho gayi aur dono messages execute hue.' : 'Remove the # in front of print("World") while keeping the comment.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Document a Student Profile Mini Project ──
  {
    number: 8,
    title: 'Document a Student Profile Mini Project',
    problemStatement: 'Create a simple Student Profile program. Add meaningful Comments explaining each part of the Code.',
    instructions: 'Combine comments, documentation, and structured print statements professionally.',
    referenceCode: '# Student Profile Program\n\n# Display profile heading\nprint("STUDENT PROFILE")\n\n# Display student name\nprint("Name: Alex")\n\n# Display course name\nprint("Course: Python")\n\n# Display welcome message\nprint("Welcome to coding!")',
    starterCode: '# Document a Student Profile Mini Project\n# Student Profile Program\n\n# Display profile heading\nprint("STUDENT PROFILE")\n\n# Display student name\nprint("Name: Alex")\n\n# Display course name\nprint("Course: Python")\n\n# Display welcome message\nprint("Welcome to coding!")',
    sampleInput: '',
    expectedOutput: 'STUDENT PROFILE\nName: Alex\nCourse: Python\nWelcome to coding!',
    isPersonalized: true,
    teachingSteps: [
      {
        stepNumber: 1,
        title: 'Professional Documentation Practice',
        highlightToken: '# Student Profile Program',
        explanation: 'Har section ke upar explanatory comment code ko clean aur maintainable banata hai.',
        speechHinglish: 'Ab hum Topic 05 ka Student Profile Mini Project banayenge.',
        speechEnglish: 'We conclude Topic 05 with a complete Student Profile Mini Project.',
        visualAction: 'highlight_token',
        highlightLine: 1,
        cardExplanationHinglish: 'Professional documentation practice.',
        cardExplanationEnglish: 'Professional documentation practice.'
      },
      {
        stepNumber: 2,
        title: 'Section-by-Section Comments',
        highlightToken: '# Display course name',
        explanation: 'Heading, Name, Course aur Welcome message sabhi documented hain.',
        speechHinglish: 'Har important code section ke upar ek meaningful comment likhenge.',
        speechEnglish: 'Each distinct section is documented with a meaningful comment.',
        visualAction: 'pass_argument',
        highlightLine: 7,
        cardExplanationHinglish: 'Section comments enhance readability.',
        cardExplanationEnglish: 'Section comments enhance readability.'
      },
      {
        stepNumber: 3,
        title: 'Complete Documented Profile Output',
        highlightToken: 'print("Welcome to coding!")',
        explanation: 'Terminal par clean Student Profile print hoti hai aur source code completely professional rehta hai.',
        speechHinglish: 'Professional developers hamesha clean comments aur structured code likhte hain jisse readability badhti hai!',
        speechEnglish: 'Professional developers use comments to explain code intent and maximize maintainability!',
        visualAction: 'display_output',
        outputLine: 'STUDENT PROFILE\nName: Alex\nCourse: Python\nWelcome to coding!',
        highlightLine: 10,
        cardExplanationHinglish: 'Complete Student Profile ready.',
        cardExplanationEnglish: 'Complete Student Profile verified.'
      }
    ],
    hints: [
      { level: 1, textHinglish: 'Program ko heading aur info sections mein divide karo.', textEnglish: 'Divide program into heading and info sections.' },
      { level: 2, textHinglish: 'Har section ke upar meaningful comment likho.', textEnglish: 'Write a meaningful comment above each section.' },
      { level: 3, textHinglish: 'STUDENT PROFILE, Name, Course aur Welcome message print karo.', textEnglish: 'Print STUDENT PROFILE, Name, Course, and Welcome message.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const hasHeading = /STUDENT PROFILE/.test(normalized);
      const hasName = /Name:/.test(normalized);
      const hasCourse = /Course:/.test(normalized);
      const hasWelcome = /Welcome/.test(normalized);
      const commentCount = (code.match(/#[^\r\n]*/g) || []).length;
      const isPassed = hasHeading && hasName && hasCourse && hasWelcome && commentCount >= 3;
      return {
        passed: isPassed,
        message: isPassed ? '🏆 TOPIC 05 MASTER ACHIEVED! Comments in Python concept seamlessly master ho chuka hai!' : 'Ensure the profile output contains Heading, Name, Course, Welcome, and has at least 3 comments.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 06: Variables and Naming Rules — 15 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_06_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Create Your First Variable ──
  {
    number: 1,
    title: 'Create Your First Variable',
    problemStatement: 'Create a Variable named age, assign it the value 12, and print its value.',
    instructions: 'Understand variable creation, the assignment operator =, and reading a variable.',
    referenceCode: 'age = 12\nprint(age)',
    starterCode: '# Create a variable named age, assign 12, and print it\n',
    sampleInput: '',
    expectedOutput: '12',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Variable Declaration & Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'Yahan age ek Variable Name hai aur = Assignment Operator hai jo right side ki value 12 ko age mein store karta hai.',
        speechEnglish: 'Here age is a variable name and = is the assignment operator storing 12 in age.',
        cardExplanationHinglish: 'age = 12 memory mein age naam ka box banata hai aur usme 12 store karta hai.',
        cardExplanationEnglish: 'age = 12 creates a memory box named age and stores 12 in it.',
        visualTarget: 'age = 12',
        visualLabel: 'age = 12',
        visualSublabel: 'Memory box created with value 12',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'age = 12'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Read Variable Value',
        conceptKey: 'print',
        speechHinglish: 'Jab hum print(age) likhte hain bina quotes ke, Python age ki current value 12 fetch karta hai.',
        speechEnglish: 'When we write print(age) without quotes, Python fetches the current value 12 from age.',
        cardExplanationHinglish: 'print(age) variable ki current stored value read karta hai.',
        cardExplanationEnglish: 'print(age) reads the stored value from the variable.',
        visualTarget: 'print(age)',
        visualLabel: 'print(age)',
        visualSublabel: 'Lookup value of age',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(age)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console mein variable ki stored value 12 print ho jati hai.',
        speechEnglish: 'The console displays the stored number 12.',
        cardExplanationHinglish: 'Output: 12 display hota hai.',
        cardExplanationEnglish: 'Output: 12 is printed.',
        visualTarget: '12',
        visualLabel: '12',
        visualSublabel: 'Console output',
        consoleOutput: '12',
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: '12',
        outputLine: '12'
      }
    ],
    hints: [
      { level: 1, name: 'Variable Name', badge: 'Step 1', hintHinglish: 'Variable ka naam age likho.', hintEnglish: 'Write the variable name age.' },
      { level: 2, name: 'Assignment', badge: 'Step 2', hintHinglish: '= operator lagakar 12 assign karo: age = 12.', hintEnglish: 'Use = operator: age = 12.' },
      { level: 3, name: 'Print Without Quotes', badge: 'Step 3', hintHinglish: 'Bina quotes ke print(age) likho.', hintEnglish: 'Print the variable without quotes: print(age).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '12';
      const hasVar = /\bage\s*=\s*12/.test(code) && /print\s*\(\s*age\s*\)/.test(code);
      return {
        passed: match && hasVar,
        message: match && hasVar ? '🎉 Bahut badiya! Variable create aur print successfully verify ho gaya.' : 'Ensure you assign 12 to age and print(age).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Store Your Name in a Variable ──
  {
    number: 2,
    title: 'Store Your Name in a Variable',
    problemStatement: 'Create a Variable named student_name, store a name in it, and print the stored value.',
    instructions: 'Variables can store text strings using quotes.',
    referenceCode: 'student_name = "Alex"\nprint(student_name)',
    starterCode: '# Create a variable named student_name and print it\n',
    sampleInput: '',
    expectedOutput: 'Alex',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'String Variable Assignment',
        conceptKey: 'string',
        speechHinglish: 'Variable mein text store karne ke liye quotes use karte hain. student_name = "Alex" string store karta hai.',
        speechEnglish: 'To store text in a variable, use quotes. student_name = "Alex" stores a string.',
        cardExplanationHinglish: 'student_name ek variable hai jo "Alex" string hold karta hai.',
        cardExplanationEnglish: 'student_name is a variable holding the string "Alex".',
        visualTarget: 'student_name = "Alex"',
        visualLabel: 'student_name',
        visualSublabel: 'String stored in memory',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Print String Variable',
        conceptKey: 'print',
        speechHinglish: 'print(student_name) variable ki value fetch karke screen par display karta hai.',
        speechEnglish: 'print(student_name) retrieves the value and displays it on screen.',
        cardExplanationHinglish: 'print(student_name) se stored name print hota hai.',
        cardExplanationEnglish: 'print(student_name) prints the stored name.',
        visualTarget: 'print(student_name)',
        visualLabel: 'print(student_name)',
        visualSublabel: 'Lookup name value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(student_name)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Output screen par student ka name display hota hai.',
        speechEnglish: 'The student name is displayed on screen.',
        cardExplanationHinglish: 'Output: Alex display hota hai.',
        cardExplanationEnglish: 'Output: Alex is printed.',
        visualTarget: 'Alex',
        visualLabel: 'Alex',
        visualSublabel: 'Console output',
        consoleOutput: 'Alex',
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: 'Alex',
        outputLine: 'Alex'
      }
    ],
    hints: [
      { level: 1, name: 'Variable Name', badge: 'Step 1', hintHinglish: 'Variable ka naam student_name likho.', hintEnglish: 'Write variable name student_name.' },
      { level: 2, name: 'String Value', badge: 'Step 2', hintHinglish: 'Quotes ke andar apna naam assign karo: student_name = "Alex".', hintEnglish: 'Assign a string in quotes: student_name = "Alex".' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(student_name) likhkar value print karo.', hintEnglish: 'Call print(student_name) without quotes around the variable.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const hasVar = /\bstudent_name\s*=\s*["'][^"']+["']/.test(code) && /print\s*\(\s*student_name\s*\)/.test(code);
      const passed = normalized.length > 0 && hasVar;
      return {
        passed,
        message: passed ? '🎉 Superb! String variable correctly stored and printed.' : 'Make sure to assign a string to student_name and print(student_name).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Create Multiple Variables ──
  {
    number: 3,
    title: 'Create Multiple Variables',
    problemStatement: 'Create three Variables named name, age, and city, then display their values.',
    instructions: 'A program can have multiple variables storing different pieces of information.',
    referenceCode: 'name = "Alex"\nage = 12\ncity = "Delhi"\n\nprint(name)\nprint(age)\nprint(city)',
    starterCode: '# Create name, age, and city variables, then print them\n',
    sampleInput: '',
    expectedOutput: 'Alex\n12\nDelhi',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Multiple Variable Declarations',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Ek program mein hum multiple variables create kar sakte hain jaise name, age aur city.',
        speechEnglish: 'In a program we can create multiple variables such as name, age, and city.',
        cardExplanationHinglish: 'name, age, aur city teeno ke liye alag alag memory boxes create hote hain.',
        cardExplanationEnglish: 'Separate memory boxes are created for name, age, and city.',
        visualTarget: 'name, age, city',
        visualLabel: '3 Variables',
        visualSublabel: 'Independent memory slots',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Sequential Prints',
        conceptKey: 'print',
        speechHinglish: 'Har print statement line by line apne variable ki value read karta hai.',
        speechEnglish: 'Each print statement reads its variable line by line.',
        cardExplanationHinglish: 'Sequential execution: print(name), print(age), print(city).',
        cardExplanationEnglish: 'Sequential execution: print(name), print(age), print(city).',
        visualTarget: 'print calls',
        visualLabel: 'print()',
        visualSublabel: '3 print statements',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 5,
        highlightToken: 'print(name)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Multi-Line Output',
        conceptKey: 'output',
        speechHinglish: 'Teeno values alag alag lines par display hoti hain.',
        speechEnglish: 'All three values are printed on separate lines.',
        cardExplanationHinglish: 'Output: Alex, 12, Delhi separate lines par aate hain.',
        cardExplanationEnglish: 'Output: Alex, 12, Delhi on separate lines.',
        visualTarget: 'Alex\n12\nDelhi',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Alex\n12\nDelhi',
        isConsoleVisible: true,
        highlightLine: 7,
        highlightToken: 'Delhi',
        outputLine: 'Alex\n12\nDelhi'
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'name, age, aur city teen variables banayein.', hintEnglish: 'Create three variables: name, age, and city.' },
      { level: 2, name: 'Values', badge: 'Step 2', hintHinglish: 'name ko string, age ko number, aur city ko string assign karo.', hintEnglish: 'Assign string to name, number to age, and string to city.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(name), print(age), print(city) alag alag lines par likho.', hintEnglish: 'Print each variable on a separate line.' }
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.replace(/\r\n/g, '\n').trim().split('\n').filter(Boolean);
      const hasVars = /\bname\s*=/.test(code) && /\bage\s*=/.test(code) && /\bcity\s*=/.test(code);
      const hasPrints = /print\s*\(\s*name\s*\)/.test(code) && /print\s*\(\s*age\s*\)/.test(code) && /print\s*\(\s*city\s*\)/.test(code);
      const passed = lines.length >= 3 && hasVars && hasPrints;
      return {
        passed,
        message: passed ? '🎉 Brilliant! Multiple variables created and displayed.' : 'Make sure to create name, age, city and print all three on separate lines.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Understand the Assignment Operator ──
  {
    number: 4,
    title: 'Understand the Assignment Operator',
    problemStatement: 'Create a Variable named score, assign it the value 50, and print it.',
    instructions: 'Understand that = in programming means assignment, not mathematical equality.',
    referenceCode: 'score = 50\nprint(score)',
    starterCode: '# Assign 50 to score using = and print it\n',
    sampleInput: '',
    expectedOutput: '50',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'The = Assignment Operator',
        conceptKey: 'numbers',
        speechHinglish: 'Programming mein = ka matlab Assignment hota hai, right side ki value left side ke variable ko milti hai.',
        speechEnglish: 'In programming = means assignment; the right-hand value is stored in the left-hand variable.',
        cardExplanationHinglish: '= operator right side ki value 50 ko variable score mein bind karta hai.',
        cardExplanationEnglish: 'The = operator assigns 50 to the variable score.',
        visualTarget: 'score = 50',
        visualLabel: '=',
        visualSublabel: 'Assignment operator',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: '='
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Lookup Variable',
        conceptKey: 'print',
        speechHinglish: 'print(score) score ki current bound value fetch karta hai.',
        speechEnglish: 'print(score) fetches the current bound value of score.',
        cardExplanationHinglish: 'Python score variable ke memory slot ko check karta hai.',
        cardExplanationEnglish: 'Python looks up the memory slot for score.',
        visualTarget: 'print(score)',
        visualLabel: 'print(score)',
        visualSublabel: 'Fetch score value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(score)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console par 50 display ho jata hai.',
        speechEnglish: '50 is printed in the console.',
        cardExplanationHinglish: 'Output: 50.',
        cardExplanationEnglish: 'Output: 50.',
        visualTarget: '50',
        visualLabel: '50',
        visualSublabel: 'Console output',
        consoleOutput: '50',
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: '50',
        outputLine: '50'
      }
    ],
    hints: [
      { level: 1, name: 'Variable', badge: 'Step 1', hintHinglish: 'score naam ka variable likho.', hintEnglish: 'Write score variable name.' },
      { level: 2, name: 'Assignment', badge: 'Step 2', hintHinglish: 'score = 50 likhkar value assign karo.', hintEnglish: 'Write score = 50.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(score) likho.', hintEnglish: 'Call print(score).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '50';
      const hasAssign = /\bscore\s*=\s*50/.test(code) && /print\s*\(\s*score\s*\)/.test(code);
      return {
        passed: match && hasAssign,
        message: match && hasAssign ? '🎉 Excellent! Assignment operator concept verified.' : 'Assign 50 to score and print(score).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Change a Variable Value ──
  {
    number: 5,
    title: 'Change a Variable Value',
    problemStatement: 'Create a Variable points with the value 10. Reassign it to 20 and print the final value.',
    instructions: 'Variables can change their value during execution through reassignment.',
    referenceCode: 'points = 10\npoints = 20\nprint(points)',
    starterCode: '# Assign 10 to points, reassign to 20, then print points\n',
    sampleInput: '',
    expectedOutput: '20',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle points variable mein value 10 assign hoti hai.',
        speechEnglish: 'First the value 10 is assigned to points.',
        cardExplanationHinglish: 'points = 10 se variable mein 10 store hota hai.',
        cardExplanationEnglish: 'points = 10 stores 10 initially.',
        visualTarget: 'points = 10',
        visualLabel: 'points = 10',
        visualSublabel: 'Initial value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'points = 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Reassignment (Overwriting Value)',
        conceptKey: 'numbers',
        speechHinglish: 'Dusri line par points = 20 likhne se purani value 10 replace hokar nayi value 20 ho jati hai.',
        speechEnglish: 'On the second line, points = 20 overwrites the previous value 10 with 20.',
        cardExplanationHinglish: 'Reassignment: points ka binding ab nayi value 20 par point karta hai.',
        cardExplanationEnglish: 'Reassignment: points now points to 20.',
        visualTarget: 'points = 20',
        visualLabel: 'points = 20',
        visualSublabel: 'Value updated to 20',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'points = 20'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Final Output',
        conceptKey: 'output',
        speechHinglish: 'print(points) current value 20 print karta hai.',
        speechEnglish: 'print(points) displays the updated value 20.',
        cardExplanationHinglish: 'Output: 20.',
        cardExplanationEnglish: 'Output: 20.',
        visualTarget: '20',
        visualLabel: '20',
        visualSublabel: 'Console output',
        consoleOutput: '20',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '20',
        outputLine: '20'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Assignment', badge: 'Step 1', hintHinglish: 'points = 10 likho.', hintEnglish: 'Write points = 10.' },
      { level: 2, name: 'Reassignment', badge: 'Step 2', hintHinglish: 'Agli line par points = 20 likho.', hintEnglish: 'On the next line write points = 20.' },
      { level: 3, name: 'Print Final', badge: 'Step 3', hintHinglish: 'Aakhri me print(points) likho.', hintEnglish: 'Finally call print(points).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '20';
      const hasTwoAssigns = (code.match(/\bpoints\s*=/g) || []).length >= 2;
      return {
        passed: match && hasTwoAssigns,
        message: match && hasTwoAssigns ? '🎉 Shabaash! Reassignment concept correctly verified.' : 'Assign 10 to points, reassign to 20, then print(points).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Print a Variable Before and After Reassignment ──
  {
    number: 6,
    title: 'Print a Variable Before and After Reassignment',
    problemStatement: 'Create a Variable level with value 1. Print it, change it to 2, and print it again.',
    instructions: 'Compare output before and after reassigning a variable.',
    referenceCode: 'level = 1\nprint(level)\n\nlevel = 2\nprint(level)',
    starterCode: '# Create level = 1, print it, reassign level = 2, and print again\n',
    sampleInput: '',
    expectedOutput: '1\n2',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Value & First Print',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle level ki value 1 hai aur print(level) se 1 screen par aata hai.',
        speechEnglish: 'Initially level is 1 and print(level) displays 1 on screen.',
        cardExplanationHinglish: 'level = 1 then print(level) displays 1.',
        cardExplanationEnglish: 'level = 1 then print(level) displays 1.',
        visualTarget: 'level = 1',
        visualLabel: 'level = 1',
        visualSublabel: 'First print: 1',
        consoleOutput: '1',
        isConsoleVisible: true,
        highlightLine: 1,
        highlightToken: 'level = 1'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Reassignment to 2',
        conceptKey: 'numbers',
        speechHinglish: 'Ab level = 2 karke hum value update karte hain aur dobara print(level) call karte hain.',
        speechEnglish: 'Now level = 2 updates the value and we call print(level) again.',
        cardExplanationHinglish: 'level = 2 update karta hai aur dusra print 2 display karega.',
        cardExplanationEnglish: 'level = 2 updates the variable and second print displays 2.',
        visualTarget: 'level = 2',
        visualLabel: 'level = 2',
        visualSublabel: 'Reassigned value',
        consoleOutput: '1\n2',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'level = 2'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Sequential Output: 1 and 2',
        conceptKey: 'output',
        speechHinglish: 'Console mein pehle 1 aur fir 2 display hota hai.',
        speechEnglish: 'Console displays 1 followed by 2.',
        cardExplanationHinglish: 'Output: 1 then 2.',
        cardExplanationEnglish: 'Output: 1 then 2.',
        visualTarget: '1\n2',
        visualLabel: 'Console',
        visualSublabel: 'Output lines',
        consoleOutput: '1\n2',
        isConsoleVisible: true,
        highlightLine: 5,
        highlightToken: 'print(level)',
        outputLine: '1\n2'
      }
    ],
    hints: [
      { level: 1, name: 'First Value', badge: 'Step 1', hintHinglish: 'level = 1 likhkar print(level) karo.', hintEnglish: 'Write level = 1 and print(level).' },
      { level: 2, name: 'Update', badge: 'Step 2', hintHinglish: 'Agli line par level = 2 likho.', hintEnglish: 'Write level = 2.' },
      { level: 3, name: 'Second Print', badge: 'Step 3', hintHinglish: 'Dobara print(level) likho.', hintEnglish: 'Print level again.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '1\n2';
      const hasBothAssigns = (code.match(/\blevel\s*=/g) || []).length >= 2;
      return {
        passed: match && hasBothAssigns,
        message: match && hasBothAssigns ? '🎉 Great job! Before and after reassignment verified.' : 'Print level=1, then update level=2 and print again.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Understand Case-Sensitive Variable Names ──
  {
    number: 7,
    title: 'Understand Case-Sensitive Variable Names',
    problemStatement: 'Create two Variables named name and Name, store different Strings, and print both values.',
    instructions: 'Python treats uppercase and lowercase letters as completely different identifiers.',
    referenceCode: 'name = "Alex"\nName = "Sam"\n\nprint(name)\nprint(Name)',
    starterCode: '# Create name and Name with different strings and print both\n',
    sampleInput: '',
    expectedOutput: 'Alex\nSam',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Case Sensitivity in Python',
        conceptKey: 'string',
        speechHinglish: 'Python case-sensitive language hai. Iska matlab small name aur capital Name do alag variables hain.',
        speechEnglish: 'Python is case-sensitive. This means lowercase name and capitalized Name are two separate variables.',
        cardExplanationHinglish: 'name aur Name do alag memory boxes create karte hain.',
        cardExplanationEnglish: 'name and Name create two completely distinct memory boxes.',
        visualTarget: 'name vs Name',
        visualLabel: 'Case Sensitivity',
        visualSublabel: 'name != Name',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Different Values Assigned',
        conceptKey: 'string',
        speechHinglish: 'name mein Alex store hota hai aur Name mein Sam store hota hai.',
        speechEnglish: 'Alex is stored in name and Sam is stored in Name.',
        cardExplanationHinglish: 'Dono variables apni alag alag values retain karte hain.',
        cardExplanationEnglish: 'Both variables retain their distinct values.',
        visualTarget: 'Name = "Sam"',
        visualLabel: 'Name = "Sam"',
        visualSublabel: 'Capital N variable',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'Name = "Sam"'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Both Identifiers',
        conceptKey: 'output',
        speechHinglish: 'print(name) Alex print karta hai aur print(Name) Sam print karta hai.',
        speechEnglish: 'print(name) outputs Alex and print(Name) outputs Sam.',
        cardExplanationHinglish: 'Output: Alex then Sam.',
        cardExplanationEnglish: 'Output: Alex then Sam.',
        visualTarget: 'Alex\nSam',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Alex\nSam',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'print(name)',
        outputLine: 'Alex\nSam'
      }
    ],
    hints: [
      { level: 1, name: 'Lowercase name', badge: 'Step 1', hintHinglish: 'name = "Alex" likho.', hintEnglish: 'Write name = "Alex".' },
      { level: 2, name: 'Uppercase Name', badge: 'Step 2', hintHinglish: 'Name = "Sam" likho (capital N).', hintEnglish: 'Write Name = "Sam" with capital N.' },
      { level: 3, name: 'Print Both', badge: 'Step 3', hintHinglish: 'print(name) aur print(Name) likho.', hintEnglish: 'Print both: print(name) and print(Name).' }
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.replace(/\r\n/g, '\n').trim().split('\n').filter(Boolean);
      const hasLower = /\bname\s*=\s*["'][^"']+["']/.test(code) && /print\s*\(\s*name\s*\)/.test(code);
      const hasUpper = /\bName\s*=\s*["'][^"']+["']/.test(code) && /print\s*\(\s*Name\s*\)/.test(code);
      const passed = lines.length >= 2 && hasLower && hasUpper && lines[0] !== lines[1];
      return {
        passed,
        message: passed ? '🎉 Brilliant! Case sensitivity successfully mastered.' : 'Create name and Name with different strings and print both.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Use Numbers in Variable Names ──
  {
    number: 8,
    title: 'Use Numbers in Variable Names',
    problemStatement: 'Create Variables named student1 and student2, then print their values.',
    instructions: 'Digits are allowed in variable names, but cannot be the first character.',
    referenceCode: 'student1 = "Alex"\nstudent2 = "Sam"\n\nprint(student1)\nprint(student2)',
    starterCode: '# Create student1 and student2 and print both\n',
    sampleInput: '',
    expectedOutput: 'Alex\nSam',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Digits in Identifiers',
        conceptKey: 'string',
        speechHinglish: 'Python variable names mein numbers aa sakte hain, lekin pehla character digit nahi hona chahiye. student1 valid hai.',
        speechEnglish: 'Python variable names can contain numbers, but cannot start with a digit. student1 is valid.',
        cardExplanationHinglish: 'student1 aur student2 valid identifier names hain.',
        cardExplanationEnglish: 'student1 and student2 are valid identifier names.',
        visualTarget: 'student1 & student2',
        visualLabel: 'Digits Allowed',
        visualSublabel: 'Cannot start with a number',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student1 = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Assign Values',
        conceptKey: 'string',
        speechHinglish: 'student1 mein Alex aur student2 mein Sam assign karke alag alag boxes banate hain.',
        speechEnglish: 'Alex is assigned to student1 and Sam to student2.',
        cardExplanationHinglish: 'student1 aur student2 do alag variables hain.',
        cardExplanationEnglish: 'student1 and student2 are distinct variables.',
        visualTarget: 'student2 = "Sam"',
        visualLabel: 'student2',
        visualSublabel: 'Second variable',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'student2 = "Sam"'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console mein student1 aur student2 ke names display ho jate hain.',
        speechEnglish: 'The console displays both student names.',
        cardExplanationHinglish: 'Output: Alex then Sam.',
        cardExplanationEnglish: 'Output: Alex then Sam.',
        visualTarget: 'Alex\nSam',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Alex\nSam',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'print(student1)',
        outputLine: 'Alex\nSam'
      }
    ],
    hints: [
      { level: 1, name: 'First Variable', badge: 'Step 1', hintHinglish: 'student1 = "Alex" likho.', hintEnglish: 'Write student1 = "Alex".' },
      { level: 2, name: 'Second Variable', badge: 'Step 2', hintHinglish: 'student2 = "Sam" likho.', hintEnglish: 'Write student2 = "Sam".' },
      { level: 3, name: 'Print Both', badge: 'Step 3', hintHinglish: 'print(student1) aur print(student2) likho.', hintEnglish: 'Print both student1 and student2.' }
    ],
    validate: (code: string, stdout: string) => {
      const lines = stdout.replace(/\r\n/g, '\n').trim().split('\n').filter(Boolean);
      const hasVars = /\bstudent1\s*=/.test(code) && /\bstudent2\s*=/.test(code);
      const hasPrints = /print\s*\(\s*student1\s*\)/.test(code) && /print\s*\(\s*student2\s*\)/.test(code);
      const passed = lines.length >= 2 && hasVars && hasPrints;
      return {
        passed,
        message: passed ? '🎉 Awesome! Using numbers in identifiers verified.' : 'Define student1 and student2 and print both.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Use Underscores in Variable Names ──
  {
    number: 9,
    title: 'Use Underscores in Variable Names',
    problemStatement: 'Create a Variable named student_age, assign it the value 15, and print it.',
    instructions: 'Spaces are not allowed in identifiers; use underscores for snake_case.',
    referenceCode: 'student_age = 15\nprint(student_age)',
    starterCode: '# Create variable student_age with value 15 and print it\n',
    sampleInput: '',
    expectedOutput: '15',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'snake_case with Underscore',
        conceptKey: 'numbers',
        speechHinglish: 'Variable names mein space allowed nahi hoti. Words ko join karne ke liye underscore lagate hain, jise snake_case kehte hain.',
        speechEnglish: 'Spaces are not allowed in variable names. We use underscores to join words, known as snake_case.',
        cardExplanationHinglish: 'student_age ek clean, standard snake_case variable name hai.',
        cardExplanationEnglish: 'student_age is a clean, standard snake_case variable name.',
        visualTarget: 'student_age',
        visualLabel: 'snake_case',
        visualSublabel: 'Underscore separates words',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_age = 15'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Print snake_case Variable',
        conceptKey: 'print',
        speechHinglish: 'print(student_age) bina quotes ke variable ki value fetch karta hai.',
        speechEnglish: 'print(student_age) fetches the value without quotes.',
        cardExplanationHinglish: 'print(student_age) calls print on the identifier.',
        cardExplanationEnglish: 'print(student_age) calls print on the identifier.',
        visualTarget: 'print(student_age)',
        visualLabel: 'print(student_age)',
        visualSublabel: 'Lookup student_age',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(student_age)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console par 15 display hota hai.',
        speechEnglish: '15 is displayed on the console.',
        cardExplanationHinglish: 'Output: 15.',
        cardExplanationEnglish: 'Output: 15.',
        visualTarget: '15',
        visualLabel: '15',
        visualSublabel: 'Console output',
        consoleOutput: '15',
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: '15',
        outputLine: '15'
      }
    ],
    hints: [
      { level: 1, name: 'Underscore', badge: 'Step 1', hintHinglish: 'student aur age ke beech underscore lagao: student_age.', hintEnglish: 'Use an underscore: student_age.' },
      { level: 2, name: 'Assign 15', badge: 'Step 2', hintHinglish: 'student_age = 15 likho.', hintEnglish: 'Write student_age = 15.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(student_age) call karo.', hintEnglish: 'Print with print(student_age).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '15';
      const hasVar = /\bstudent_age\s*=\s*15/.test(code) && /print\s*\(\s*student_age\s*\)/.test(code);
      return {
        passed: match && hasVar,
        message: match && hasVar ? '🎉 Perfect! snake_case variable name verified.' : 'Assign 15 to student_age and print(student_age).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Fix Invalid Variable Names ──
  {
    number: 10,
    title: 'Fix Invalid Variable Names',
    problemStatement: 'The following Code contains invalid Variable Names. Fix the names and print the correct values.',
    instructions: 'Identifiers cannot start with digits (2name) or contain spaces (student age). Fix them using snake_case.',
    referenceCode: 'student_name = "Alex"\nstudent_age = 12\n\nprint(student_name)\nprint(student_age)',
    starterCode: '2name = "Alex"\nstudent age = 12\nprint(2name)\nprint(student age)',
    sampleInput: '',
    expectedOutput: 'Alex\n12',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Identify Syntax Errors',
        conceptKey: 'string',
        speechHinglish: '2name number se start hota hai aur student age mein space hai. Ye dono Python mein SyntaxError dete hain.',
        speechEnglish: '2name starts with a digit and student age contains a space. Both trigger a SyntaxError in Python.',
        cardExplanationHinglish: '2name aur student age invalid names hain.',
        cardExplanationEnglish: '2name and student age are invalid identifier names.',
        visualTarget: 'Invalid Identifiers',
        visualLabel: 'SyntaxError',
        visualSublabel: 'No leading digits, no spaces',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: '2name'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Fix with Valid Identifiers',
        conceptKey: 'string',
        speechHinglish: 'Inhe valid names jaise student_name aur student_age mein badal do aur print mein bhi wahi use karo.',
        speechEnglish: 'Change them to valid names like student_name and student_age, and update the print statements.',
        cardExplanationHinglish: 'Corrected to student_name = "Alex" and student_age = 12.',
        cardExplanationEnglish: 'Corrected to student_name = "Alex" and student_age = 12.',
        visualTarget: 'student_name & student_age',
        visualLabel: 'Valid Identifiers',
        visualSublabel: 'Clean snake_case names',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Successful Output',
        conceptKey: 'output',
        speechHinglish: 'Code bina error ke run hota hai aur Alex aur 12 display karta hai.',
        speechEnglish: 'The code runs cleanly and displays Alex and 12.',
        cardExplanationHinglish: 'Output: Alex then 12.',
        cardExplanationEnglish: 'Output: Alex then 12.',
        visualTarget: 'Alex\n12',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Alex\n12',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'print(student_name)',
        outputLine: 'Alex\n12'
      }
    ],
    hints: [
      { level: 1, name: 'Leading Digit', badge: 'Step 1', hintHinglish: '2name ko student_name ya name1 mein badlein.', hintEnglish: 'Fix 2name to student_name or name.' },
      { level: 2, name: 'Remove Space', badge: 'Step 2', hintHinglish: 'student age ke beech space hata kar underscore lagayein: student_age.', hintEnglish: 'Replace space with underscore: student_age.' },
      { level: 3, name: 'Update Prints', badge: 'Step 3', hintHinglish: 'print statements mein bhi naye names pass karein.', hintEnglish: 'Update print() statements with the new variable names.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Alex\n12';
      const noBad = !code.includes('2name') && !/student\s+age\s*=/.test(code);
      return {
        passed: match && noBad,
        message: match && noBad ? '🎉 Fantastic! Invalid identifier debugging mastered.' : 'Fix 2name and student age to valid identifiers and print Alex and 12.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Python Reserved Keywords ──
  {
    number: 11,
    title: 'Python Reserved Keywords',
    problemStatement: 'The Starter Code incorrectly uses a Python Keyword as a Variable Name. Fix it and display 100.',
    instructions: 'Reserved keywords like class, def, if, for cannot be used as variable names.',
    referenceCode: 'class_score = 100\nprint(class_score)',
    starterCode: 'class = 100\nprint(class)',
    sampleInput: '',
    expectedOutput: '100',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Reserved Keywords Rule',
        conceptKey: 'numbers',
        speechHinglish: 'Python mein class ek reserved keyword hai. Ise variable name nahi bana sakte, varna SyntaxError aayega.',
        speechEnglish: 'class is a reserved Python keyword and cannot be used as a variable name.',
        cardExplanationHinglish: 'class keyword Python ki language ka reserved word hai.',
        cardExplanationEnglish: 'class is a reserved keyword in Python syntax.',
        visualTarget: 'class keyword',
        visualLabel: 'Reserved Keyword',
        visualSublabel: 'Cannot be used as variable name',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'class'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Replace with Descriptive Name',
        conceptKey: 'numbers',
        speechHinglish: 'Hum ise valid name jaise class_score se replace kar sakte hain.',
        speechEnglish: 'We can replace it with a valid name like class_score.',
        cardExplanationHinglish: 'class_score = 100 ek valid identifier assignment hai.',
        cardExplanationEnglish: 'class_score = 100 is a valid identifier assignment.',
        visualTarget: 'class_score = 100',
        visualLabel: 'Valid Name',
        visualSublabel: 'Replaced keyword',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'class_score = 100'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'print(class_score) se 100 cleanly output hota hai.',
        speechEnglish: 'print(class_score) displays 100 on the console.',
        cardExplanationHinglish: 'Output: 100.',
        cardExplanationEnglish: 'Output: 100.',
        visualTarget: '100',
        visualLabel: '100',
        visualSublabel: 'Console output',
        consoleOutput: '100',
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: '100',
        outputLine: '100'
      }
    ],
    hints: [
      { level: 1, name: 'Keyword Conflict', badge: 'Step 1', hintHinglish: 'class ek reserved keyword hai, ise change karo.', hintEnglish: 'class is a reserved keyword, change the variable name.' },
      { level: 2, name: 'New Name', badge: 'Step 2', hintHinglish: 'class ki jagah class_score ya score likho.', hintEnglish: 'Use class_score or score instead of class.' },
      { level: 3, name: 'Update Print', badge: 'Step 3', hintHinglish: 'print statement mein bhi wahi naya name likho.', hintEnglish: 'Pass the new variable name to print().' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '100';
      const noKeyword = !/\bclass\s*=/.test(code);
      return {
        passed: match && noKeyword,
        message: match && noKeyword ? '🎉 Excellent! Keyword naming conflict resolved.' : 'Replace reserved keyword class with a valid variable name and print 100.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Assign Multiple Variables in One Line ──
  {
    number: 12,
    title: 'Assign Multiple Variables in One Line',
    problemStatement: 'Assign values to x, y, and z in a single statement, then print them on separate lines.',
    instructions: 'Python allows multiple assignment in a single line using unpacking: x, y, z = 10, 20, 30.',
    referenceCode: 'x, y, z = 10, 20, 30\n\nprint(x)\nprint(y)\nprint(z)',
    starterCode: '# Assign x, y, z in a single statement, then print each on separate lines\n',
    sampleInput: '',
    expectedOutput: '10\n20\n30',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Multiple Unpacking Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'x, y, z = 10, 20, 30 mein pehli value x ko, dusri y ko aur teesri z ko assign hoti hai.',
        speechEnglish: 'In x, y, z = 10, 20, 30, the first value goes to x, the second to y, and the third to z.',
        cardExplanationHinglish: 'Unpacking assignment ek hi line mein multiple variables ko values deta hai.',
        cardExplanationEnglish: 'Unpacking assignment assigns multiple variables in one line.',
        visualTarget: 'x, y, z = 10, 20, 30',
        visualLabel: 'Unpacking Assignment',
        visualSublabel: 'x=10, y=20, z=30',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'x, y, z = 10, 20, 30'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Print Each Variable',
        conceptKey: 'print',
        speechHinglish: 'print(x), print(y), aur print(z) teeno variables ko sequentially read karte hain.',
        speechEnglish: 'print(x), print(y), and print(z) sequentially read each variable.',
        cardExplanationHinglish: 'Teeno variables ko alag alag print statements se call karte hain.',
        cardExplanationEnglish: 'All three variables are printed with separate print statements.',
        visualTarget: 'Sequential prints',
        visualLabel: 'print()',
        visualSublabel: 'Separate lines',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 3,
        highlightToken: 'print(x)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console par 10, 20 aur 30 teeno alag lines par print ho jate hain.',
        speechEnglish: '10, 20, and 30 are printed on separate lines.',
        cardExplanationHinglish: 'Output: 10\n20\n30.',
        cardExplanationEnglish: 'Output: 10\n20\n30.',
        visualTarget: '10\n20\n30',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: '10\n20\n30',
        isConsoleVisible: true,
        highlightLine: 5,
        highlightToken: 'print(z)',
        outputLine: '10\n20\n30'
      }
    ],
    hints: [
      { level: 1, name: 'Single Line Assignment', badge: 'Step 1', hintHinglish: 'x, y, z = 10, 20, 30 likho.', hintEnglish: 'Write x, y, z = 10, 20, 30.' },
      { level: 2, name: 'Comma Separated', badge: 'Step 2', hintHinglish: 'Variables aur values dono comma separated hone chahiye.', hintEnglish: 'Variables and values should both be comma-separated.' },
      { level: 3, name: 'Print Calls', badge: 'Step 3', hintHinglish: 'print(x), print(y), print(z) likho.', hintEnglish: 'Write print(x), print(y), print(z).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '10\n20\n30';
      const hasUnpack = /x\s*,\s*y\s*,\s*z\s*=/.test(code);
      return {
        passed: match && hasUnpack,
        message: match && hasUnpack ? '🎉 Superb! Multiple assignment in one line verified.' : 'Assign x, y, z in one line: x, y, z = 10, 20, 30 and print them.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q13: Assign One Value to Multiple Variables ──
  {
    number: 13,
    title: 'Assign One Value to Multiple Variables',
    problemStatement: 'Assign the value 50 to three Variables a, b, and c using chained assignment, then print them.',
    instructions: 'Chained assignment a = b = c = 50 assigns the same value to multiple variables.',
    referenceCode: 'a = b = c = 50\n\nprint(a)\nprint(b)\nprint(c)',
    starterCode: '# Assign 50 to a, b, and c using chained assignment and print them\n',
    sampleInput: '',
    expectedOutput: '50\n50\n50',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Chained Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'a = b = c = 50 chained assignment hai, jisme ek hi value 50 teeno variables ko milti hai.',
        speechEnglish: 'a = b = c = 50 is chained assignment where the same value 50 is assigned to all three variables.',
        cardExplanationHinglish: 'Chained assignment: a, b, aur c teeno 50 hold karte hain.',
        cardExplanationEnglish: 'Chained assignment: a, b, and c all hold 50.',
        visualTarget: 'a = b = c = 50',
        visualLabel: 'Chained Assignment',
        visualSublabel: 'a=50, b=50, c=50',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'a = b = c = 50'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Print Variables',
        conceptKey: 'print',
        speechHinglish: 'print(a), print(b), aur print(c) teeno se 50 output hota hai.',
        speechEnglish: 'print(a), print(b), and print(c) all output 50.',
        cardExplanationHinglish: 'Har variable independently apni value 50 display karta hai.',
        cardExplanationEnglish: 'Each variable independently outputs its value 50.',
        visualTarget: 'print calls',
        visualLabel: 'print()',
        visualSublabel: 'Print each variable',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 3,
        highlightToken: 'print(a)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console par 50 teen baar display hota hai.',
        speechEnglish: '50 is displayed three times on the console.',
        cardExplanationHinglish: 'Output: 50\n50\n50.',
        cardExplanationEnglish: 'Output: 50\n50\n50.',
        visualTarget: '50\n50\n50',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: '50\n50\n50',
        isConsoleVisible: true,
        highlightLine: 5,
        highlightToken: 'print(c)',
        outputLine: '50\n50\n50'
      }
    ],
    hints: [
      { level: 1, name: 'Chained Assignment', badge: 'Step 1', hintHinglish: 'a = b = c = 50 likho.', hintEnglish: 'Write a = b = c = 50.' },
      { level: 2, name: 'Equal Signs', badge: 'Step 2', hintHinglish: 'Teeno variables ke beech = lagao: a = b = c = 50.', hintEnglish: 'Use chained equal signs: a = b = c = 50.' },
      { level: 3, name: 'Print Each', badge: 'Step 3', hintHinglish: 'print(a), print(b), print(c) likho.', hintEnglish: 'Call print(a), print(b), and print(c).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '50\n50\n50';
      const hasChain = /a\s*=\s*b\s*=\s*c\s*=\s*50/.test(code);
      return {
        passed: match && hasChain,
        message: match && hasChain ? '🎉 Brilliant! Chained assignment verified.' : 'Assign using chained assignment: a = b = c = 50 and print each.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q14: Choose Meaningful Variable Names ──
  {
    number: 14,
    title: 'Choose Meaningful Variable Names',
    problemStatement: 'Improve the following Code by replacing unclear Variable Names with meaningful names.',
    instructions: 'In professional coding, use meaningful names like student_name and course_name instead of a, b, c.',
    referenceCode: 'student_name = "Alex"\nstudent_age = 12\ncourse_name = "Python"\n\nprint(student_name)\nprint(student_age)\nprint(course_name)',
    starterCode: 'a = "Alex"\nb = 12\nc = "Python"\n\nprint(a)\nprint(b)\nprint(c)',
    sampleInput: '',
    expectedOutput: 'Alex\n12\nPython',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Unclear vs Descriptive Names',
        conceptKey: 'string',
        speechHinglish: 'a, b, c se code ka purpose clear nahi hota. Professional coding mein hum meaningful names use karte hain.',
        speechEnglish: 'a, b, c do not explain the intent. In professional coding, we choose descriptive names.',
        cardExplanationHinglish: 'Meaningful names code ko readable aur maintainable banate hain.',
        cardExplanationEnglish: 'Meaningful names make code readable and maintainable.',
        visualTarget: 'Meaningful Names',
        visualLabel: 'Code Quality',
        visualSublabel: 'student_name, student_age',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Replace Identifiers',
        conceptKey: 'string',
        speechHinglish: 'a ki jagah student_name, b ki jagah student_age, aur c ki jagah course_name use karo.',
        speechEnglish: 'Replace a with student_name, b with student_age, and c with course_name.',
        cardExplanationHinglish: 'Code descriptive aur self-explanatory ho jata hai.',
        cardExplanationEnglish: 'Code becomes self-documenting and clear.',
        visualTarget: 'Descriptive identifiers',
        visualLabel: 'Refactored',
        visualSublabel: 'Clean identifiers',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 3,
        highlightToken: 'course_name = "Python"'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Output wahi Alex, 12, Python clean lines par aayega.',
        speechEnglish: 'Output correctly displays Alex, 12, Python on separate lines.',
        cardExplanationHinglish: 'Output: Alex\n12\nPython.',
        cardExplanationEnglish: 'Output: Alex\n12\nPython.',
        visualTarget: 'Alex\n12\nPython',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Alex\n12\nPython',
        isConsoleVisible: true,
        highlightLine: 5,
        highlightToken: 'print(student_name)',
        outputLine: 'Alex\n12\nPython'
      }
    ],
    hints: [
      { level: 1, name: 'Student Name', badge: 'Step 1', hintHinglish: 'a ko badal kar student_name ya name karo.', hintEnglish: 'Replace a with student_name or name.' },
      { level: 2, name: 'Student Age', badge: 'Step 2', hintHinglish: 'b ko badal kar student_age ya age karo.', hintEnglish: 'Replace b with student_age or age.' },
      { level: 3, name: 'Course Name', badge: 'Step 3', hintHinglish: 'c ko badal kar course_name ya course karo aur print updates karo.', hintEnglish: 'Replace c with course_name and update print calls.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Alex\n12\nPython';
      // Verify student did not just leave a=, b=, c=
      const hasMeaningful = !/\ba\s*=/.test(code) && !/\bb\s*=/.test(code) && !/\bc\s*=/.test(code);
      return {
        passed: match && hasMeaningful,
        message: match && hasMeaningful ? '🎉 Outstanding! Professional descriptive naming mastered.' : 'Replace single-letter names a, b, c with descriptive variable names and print Alex, 12, Python.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q15: Student Information Mini Project ──
  {
    number: 15,
    title: 'Student Information Mini Project',
    problemStatement: 'Create a Student Information program using Variables. Store Student Name, Age, Course, Marks, and City. Display the information using print().',
    instructions: 'Use meaningful snake_case variables and print a structured student information report.',
    referenceCode: 'student_name = "Alex"\nstudent_age = 12\ncourse_name = "Python"\nstudent_marks = 95\nstudent_city = "Delhi"\n\nprint("STUDENT INFORMATION")\nprint("Name:", student_name)\nprint("Age:", student_age)\nprint("Course:", course_name)\nprint("Marks:", student_marks)\nprint("City:", student_city)',
    starterCode: '# Create Student Information Mini Project with meaningful variables\n',
    sampleInput: '',
    expectedOutput: 'STUDENT INFORMATION\nName: Alex\nAge: 12\nCourse: Python\nMarks: 95\nCity: Delhi',
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Project Data Modeling',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Student data ke liye hum 5 meaningful variables create karte hain: student_name, student_age, course_name, student_marks aur student_city.',
        speechEnglish: 'For student data, we create 5 descriptive variables: student_name, student_age, course_name, student_marks, and student_city.',
        cardExplanationHinglish: 'Har piece of information ke liye dedicated variable memory box banaya gaya hai.',
        cardExplanationEnglish: 'A dedicated variable memory box is created for each data field.',
        visualTarget: '5 Project Variables',
        visualLabel: 'Data Model',
        visualSublabel: 'Name, Age, Course, Marks, City',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Formatted Print Statements',
        conceptKey: 'arguments',
        speechHinglish: 'Heading ke baad har line par field label aur variable ki value print karte hain.',
        speechEnglish: 'After the heading, we print each field label alongside its variable value.',
        cardExplanationHinglish: 'print("Name:", student_name) label aur variable dono display karta hai.',
        cardExplanationEnglish: 'print("Name:", student_name) prints both the label and variable.',
        visualTarget: 'Formatted prints',
        visualLabel: 'print() with arguments',
        visualSublabel: 'Label + variable',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 7,
        highlightToken: 'print("STUDENT INFORMATION")'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Complete Report Output',
        conceptKey: 'output',
        speechHinglish: 'Console par complete Student Information report cleanly format hokar display hoti hai.',
        speechEnglish: 'The complete structured student information report is displayed.',
        cardExplanationHinglish: 'Output: Complete Student Information report.',
        cardExplanationEnglish: 'Output: Complete Student Information report.',
        visualTarget: 'Full Report',
        visualLabel: 'Mini Project Output',
        visualSublabel: 'Console output',
        consoleOutput: 'STUDENT INFORMATION\nName: Alex\nAge: 12\nCourse: Python\nMarks: 95\nCity: Delhi',
        isConsoleVisible: true,
        highlightLine: 12,
        highlightToken: 'print("City:", student_city)',
        outputLine: 'STUDENT INFORMATION\nName: Alex\nAge: 12\nCourse: Python\nMarks: 95\nCity: Delhi'
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'student_name, student_age, course_name, student_marks, student_city variables banayein.', hintEnglish: 'Create 5 variables for name, age, course, marks, and city.' },
      { level: 2, name: 'Heading', badge: 'Step 2', hintHinglish: 'print("STUDENT INFORMATION") heading print karein.', hintEnglish: 'Print heading: print("STUDENT INFORMATION").' },
      { level: 3, name: 'Fields', badge: 'Step 3', hintHinglish: 'print("Name:", student_name) ki tarah baaki fields print karein.', hintEnglish: 'Print each field: print("Name:", student_name), etc.' }
    ],
    validate: (code: string, stdout: string) => {
      const lower = stdout.toLowerCase();
      const hasHeading = lower.includes('student information');
      const hasName = lower.includes('name:');
      const hasAge = lower.includes('age:');
      const hasCourse = lower.includes('course:');
      const hasMarks = lower.includes('marks:');
      const hasCity = lower.includes('city:');
      const passed = hasHeading && hasName && hasAge && hasCourse && hasMarks && hasCity;
      return {
        passed,
        message: passed ? '🎉 Congratulations! Student Information Mini Project successfully completed!' : 'Ensure your program prints STUDENT INFORMATION and all 5 labeled fields (Name, Age, Course, Marks, City).'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 07: Assigning and Updating Values — 12 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_07_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Assign and Print a Value ──
  {
    number: 1,
    title: 'Assign and Print a Value',
    problemStatement: 'Create a variable named score, assign the value 10, and print it.',
    instructions: 'Understand variable creation, assignment of numeric values, and printing.',
    referenceCode: 'score = 10\nprint(score)',
    starterCode: '# Create a variable named score, assign 10, and print it\n',
    sampleInput: '',
    expectedOutput: '10',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'score variable mein = operator se 10 assign hota hai.',
        speechEnglish: 'The = operator assigns 10 to the variable score.',
        cardExplanationHinglish: 'score = 10 memory mein score variable ko 10 value deta hai.',
        cardExplanationEnglish: 'score = 10 binds the variable score to the value 10.',
        visualTarget: 'score = 10',
        visualLabel: 'score = 10',
        visualSublabel: 'Initial value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'score = 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Variable Read',
        conceptKey: 'print',
        speechHinglish: 'print(score) score ki stored value fetch karke print karta hai.',
        speechEnglish: 'print(score) fetches and prints the stored value of score.',
        cardExplanationHinglish: 'print(score) variable ki current value display karta hai.',
        cardExplanationEnglish: 'print(score) reads the variable from memory.',
        visualTarget: 'print(score)',
        visualLabel: 'print(score)',
        visualSublabel: 'Lookup score',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(score)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par 10 display ho jata hai.',
        speechEnglish: '10 is displayed on the console screen.',
        cardExplanationHinglish: 'Output: 10.',
        cardExplanationEnglish: 'Output: 10.',
        visualTarget: '10',
        visualLabel: '10',
        visualSublabel: 'Console output',
        consoleOutput: '10',
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: '10',
        outputLine: '10'
      }
    ],
    hints: [
      { level: 1, name: 'Variable Name', badge: 'Step 1', hintHinglish: 'Variable ka naam score likho.', hintEnglish: 'Write variable name score.' },
      { level: 2, name: 'Assignment', badge: 'Step 2', hintHinglish: 'score = 10 likhkar value assign karo.', hintEnglish: 'Assign value with score = 10.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(score) call karo bina quotes ke.', hintEnglish: 'Call print(score) without quotes.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '10';
      const hasVar = /\bscore\s*=\s*10/.test(code) && /print\s*\(\s*score\s*\)/.test(code);
      return {
        passed: match && hasVar,
        message: match && hasVar ? '🎉 Bahut badiya! Initial assignment and print verified.' : 'Assign 10 to score and print(score).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Update a Variable with a New Value ──
  {
    number: 2,
    title: 'Update a Variable with a New Value',
    problemStatement: 'Create a variable age with value 12. Update it to 13 and print the final value.',
    instructions: 'Reassignment overwrites the previous value in the variable.',
    referenceCode: 'age = 12\nage = 13\nprint(age)',
    starterCode: '# Assign 12 to age, reassign to 13, and print age\n',
    sampleInput: '',
    expectedOutput: '13',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Value: 12',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle age mein 12 assign hota hai.',
        speechEnglish: 'First 12 is assigned to age.',
        cardExplanationHinglish: 'age = 12 initial memory binding create karta hai.',
        cardExplanationEnglish: 'age = 12 sets the initial value.',
        visualTarget: 'age = 12',
        visualLabel: 'age = 12',
        visualSublabel: 'Initial value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'age = 12'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Reassignment: 13',
        conceptKey: 'numbers',
        speechHinglish: 'age = 13 likhne se purani value 12 replace hokar nayi value 13 ho jati hai.',
        speechEnglish: 'Writing age = 13 replaces 12 with the new value 13.',
        cardExplanationHinglish: 'Reassignment: age ab 13 ko point karta hai.',
        cardExplanationEnglish: 'Reassignment: age now points to 13.',
        visualTarget: 'age = 13',
        visualLabel: 'age = 13',
        visualSublabel: 'Updated value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'age = 13'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'print(age) current value 13 display karta hai.',
        speechEnglish: 'print(age) displays the updated value 13.',
        cardExplanationHinglish: 'Output: 13.',
        cardExplanationEnglish: 'Output: 13.',
        visualTarget: '13',
        visualLabel: '13',
        visualSublabel: 'Console output',
        consoleOutput: '13',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '13',
        outputLine: '13'
      }
    ],
    hints: [
      { level: 1, name: 'First Value', badge: 'Step 1', hintHinglish: 'Pehle age = 12 likho.', hintEnglish: 'Start with age = 12.' },
      { level: 2, name: 'Reassign', badge: 'Step 2', hintHinglish: 'Agli line par age = 13 likhkar reassign karo.', hintEnglish: 'Reassign on next line: age = 13.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(age) likho.', hintEnglish: 'Print with print(age).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '13';
      const hasTwoAssigns = (code.match(/\bage\s*=/g) || []).length >= 2;
      return {
        passed: match && hasTwoAssigns,
        message: match && hasTwoAssigns ? '🎉 Excellent! Reassigning variable value verified.' : 'Assign 12 to age, reassign to 13, and print(age).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Increase a Value Using Addition ──
  {
    number: 3,
    title: 'Increase a Value Using Addition',
    problemStatement: 'Create a variable points with value 10. Increase it by 5 using its previous value and print the result.',
    instructions: 'Python evaluates the right side first: points = points + 5 reads points (10), calculates 10 + 5 = 15, and saves it back.',
    referenceCode: 'points = 10\npoints = points + 5\nprint(points)',
    starterCode: '# Create points = 10, update points = points + 5, then print points\n',
    sampleInput: '',
    expectedOutput: '15',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Points: 10',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle points variable mein 10 assign karte hain.',
        speechEnglish: 'First we assign 10 to points.',
        cardExplanationHinglish: 'points = 10 initial value set karta hai.',
        cardExplanationEnglish: 'points = 10 sets initial value.',
        visualTarget: 'points = 10',
        visualLabel: 'points = 10',
        visualSublabel: 'Initial value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'points = 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Evaluate points + 5',
        conceptKey: 'numbers',
        speechHinglish: 'Python pehle right side calculate karta hai: points ki current value 10 mein 5 add karke 15 banata hai.',
        speechEnglish: 'Python evaluates the right side first: adds 5 to the current value 10, resulting in 15.',
        cardExplanationHinglish: 'points = points + 5 se points ki value 15 ho jati hai.',
        cardExplanationEnglish: 'points = points + 5 updates points to 15.',
        visualTarget: 'points = points + 5',
        visualLabel: 'points + 5',
        visualSublabel: '10 + 5 = 15',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'points = points + 5'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par updated value 15 print hoti hai.',
        speechEnglish: 'The updated value 15 is printed on the console.',
        cardExplanationHinglish: 'Output: 15.',
        cardExplanationEnglish: 'Output: 15.',
        visualTarget: '15',
        visualLabel: '15',
        visualSublabel: 'Console output',
        consoleOutput: '15',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '15',
        outputLine: '15'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Value', badge: 'Step 1', hintHinglish: 'points = 10 likho.', hintEnglish: 'Write points = 10.' },
      { level: 2, name: 'Addition Update', badge: 'Step 2', hintHinglish: 'points = points + 5 likho.', hintEnglish: 'Write points = points + 5.' },
      { level: 3, name: 'Print Result', badge: 'Step 3', hintHinglish: 'print(points) call karo.', hintEnglish: 'Print with print(points).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '15';
      const hasSelfAdd = /points\s*=\s*points\s*\+\s*5/.test(code) || /points\s*\+=\s*5/.test(code);
      return {
        passed: match && hasSelfAdd,
        message: match && hasSelfAdd ? '🎉 Shabaash! Self-update addition verified.' : 'Increase points using points = points + 5 and print(points).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Decrease a Value Using Subtraction ──
  {
    number: 4,
    title: 'Decrease a Value Using Subtraction',
    problemStatement: 'Create a variable balance with value 100. Subtract 30, update the variable, and print the remaining balance.',
    instructions: 'balance = balance - 30 subtracts 30 from the current balance.',
    referenceCode: 'balance = 100\nbalance = balance - 30\nprint(balance)',
    starterCode: '# Create balance = 100, subtract 30 using balance = balance - 30, and print balance\n',
    sampleInput: '',
    expectedOutput: '70',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Balance: 100',
        conceptKey: 'numbers',
        speechHinglish: 'balance variable mein initial amount 100 assign hota hai.',
        speechEnglish: 'Initial balance 100 is assigned to the variable.',
        cardExplanationHinglish: 'balance = 100 initial account balance set karta hai.',
        cardExplanationEnglish: 'balance = 100 sets initial balance.',
        visualTarget: 'balance = 100',
        visualLabel: 'balance = 100',
        visualSublabel: 'Initial amount',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'balance = 100'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Subtract 30',
        conceptKey: 'numbers',
        speechHinglish: 'balance = balance - 30 mein 100 mein se 30 subtract hota hai aur bacha hua 70 store hota hai.',
        speechEnglish: 'balance = balance - 30 calculates 100 - 30 and stores 70.',
        cardExplanationHinglish: 'Subtraction: 100 - 30 = 70 wapas balance mein save hota hai.',
        cardExplanationEnglish: 'Subtraction: 100 - 30 = 70 is stored back into balance.',
        visualTarget: 'balance = balance - 30',
        visualLabel: 'balance - 30',
        visualSublabel: '100 - 30 = 70',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'balance = balance - 30'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par remaining balance 70 print hota hai.',
        speechEnglish: 'The remaining balance 70 is printed on the console.',
        cardExplanationHinglish: 'Output: 70.',
        cardExplanationEnglish: 'Output: 70.',
        visualTarget: '70',
        visualLabel: '70',
        visualSublabel: 'Console output',
        consoleOutput: '70',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '70',
        outputLine: '70'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Balance', badge: 'Step 1', hintHinglish: 'balance = 100 likho.', hintEnglish: 'Write balance = 100.' },
      { level: 2, name: 'Subtraction', badge: 'Step 2', hintHinglish: 'balance = balance - 30 likho.', hintEnglish: 'Write balance = balance - 30.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(balance) call karo.', hintEnglish: 'Print with print(balance).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '70';
      const hasSelfSub = /balance\s*=\s*balance\s*-\s*30/.test(code) || /balance\s*-=\s*30/.test(code);
      return {
        passed: match && hasSelfSub,
        message: match && hasSelfSub ? '🎉 Great job! Subtraction update verified.' : 'Subtract 30 using balance = balance - 30 and print(balance).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Use the += Operator ──
  {
    number: 5,
    title: 'Use the += Operator',
    problemStatement: 'Create a variable score with value 20. Increase it by 10 using the += operator.',
    instructions: '+= is an Augmented Assignment Operator: score += 10 is shorthand for score = score + 10.',
    referenceCode: 'score = 20\nscore += 10\nprint(score)',
    starterCode: '# Use += operator to add 10 to score and print score\n',
    sampleInput: '',
    expectedOutput: '30',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Score: 20',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle score variable mein 20 assign hota hai.',
        speechEnglish: 'Initial value 20 is assigned to score.',
        cardExplanationHinglish: 'score = 20 initial value set karta hai.',
        cardExplanationEnglish: 'score = 20 sets initial value.',
        visualTarget: 'score = 20',
        visualLabel: 'score = 20',
        visualSublabel: 'Initial value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'score = 20'
      },
      {
        step: 2,
        totalSteps: 3,
        title: '+= Augmented Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'score += 10 current value 20 mein 10 add karke result 30 score ko assign karta hai.',
        speechEnglish: 'score += 10 adds 10 to current value 20 and assigns 30 to score.',
        cardExplanationHinglish: '+= operator shorthand assignment hai: score 30 ho jata hai.',
        cardExplanationEnglish: '+= operator is augmented assignment: score becomes 30.',
        visualTarget: 'score += 10',
        visualLabel: '+= 10',
        visualSublabel: '20 + 10 = 30',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'score += 10'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par 30 display hota hai.',
        speechEnglish: '30 is displayed on the console screen.',
        cardExplanationHinglish: 'Output: 30.',
        cardExplanationEnglish: 'Output: 30.',
        visualTarget: '30',
        visualLabel: '30',
        visualSublabel: 'Console output',
        consoleOutput: '30',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '30',
        outputLine: '30'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Assignment', badge: 'Step 1', hintHinglish: 'score = 20 likho.', hintEnglish: 'Write score = 20.' },
      { level: 2, name: '+= Operator', badge: 'Step 2', hintHinglish: 'score += 10 likhkar update karo.', hintEnglish: 'Write score += 10.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(score) call karo.', hintEnglish: 'Print with print(score).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '30';
      const hasPlusEqual = /score\s*\+=\s*10/.test(code);
      return {
        passed: match && hasPlusEqual,
        message: match && hasPlusEqual ? '🎉 Fantastic! += Augmented assignment verified.' : 'Use score += 10 to update score and print(score).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Use the -= Operator ──
  {
    number: 6,
    title: 'Use the -= Operator',
    problemStatement: 'Create a variable lives with value 5. Reduce it by 2 using -= and print the result.',
    instructions: '-= subtracts a value and reassigns the result in place: lives -= 2.',
    referenceCode: 'lives = 5\nlives -= 2\nprint(lives)',
    starterCode: '# Use -= operator to reduce lives by 2 and print lives\n',
    sampleInput: '',
    expectedOutput: '3',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Lives: 5',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle lives variable mein 5 assign karte hain.',
        speechEnglish: 'Initial value 5 is assigned to lives.',
        cardExplanationHinglish: 'lives = 5 initial value set karta hai.',
        cardExplanationEnglish: 'lives = 5 sets initial value.',
        visualTarget: 'lives = 5',
        visualLabel: 'lives = 5',
        visualSublabel: 'Initial lives',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'lives = 5'
      },
      {
        step: 2,
        totalSteps: 3,
        title: '-= Augmented Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'lives -= 2 current value 5 mein se 2 subtract karke 3 assign karta hai.',
        speechEnglish: 'lives -= 2 subtracts 2 from current value 5 and assigns 3 to lives.',
        cardExplanationHinglish: '-= operator subtract karke updated value 3 save karta hai.',
        cardExplanationEnglish: '-= operator subtracts and stores updated value 3.',
        visualTarget: 'lives -= 2',
        visualLabel: '-= 2',
        visualSublabel: '5 - 2 = 3',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'lives -= 2'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par 3 display hota hai.',
        speechEnglish: '3 is displayed on the console screen.',
        cardExplanationHinglish: 'Output: 3.',
        cardExplanationEnglish: 'Output: 3.',
        visualTarget: '3',
        visualLabel: '3',
        visualSublabel: 'Console output',
        consoleOutput: '3',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '3',
        outputLine: '3'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Lives', badge: 'Step 1', hintHinglish: 'lives = 5 likho.', hintEnglish: 'Write lives = 5.' },
      { level: 2, name: '-= Operator', badge: 'Step 2', hintHinglish: 'lives -= 2 likho.', hintEnglish: 'Write lives -= 2.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(lives) call karo.', hintEnglish: 'Print with print(lives).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '3';
      const hasMinusEqual = /lives\s*-=\s*2/.test(code);
      return {
        passed: match && hasMinusEqual,
        message: match && hasMinusEqual ? '🎉 Superb! -= Augmented assignment verified.' : 'Use lives -= 2 to reduce lives and print(lives).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Use the *= Operator ──
  {
    number: 7,
    title: 'Use the *= Operator',
    problemStatement: 'Create a variable coins with value 10. Multiply it by 3 using *= and print the result.',
    instructions: '*= multiplies current value and stores the result: coins *= 3.',
    referenceCode: 'coins = 10\ncoins *= 3\nprint(coins)',
    starterCode: '# Use *= operator to multiply coins by 3 and print coins\n',
    sampleInput: '',
    expectedOutput: '30',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Coins: 10',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle coins variable mein 10 assign karte hain.',
        speechEnglish: 'Initial value 10 is assigned to coins.',
        cardExplanationHinglish: 'coins = 10 initial value set karta hai.',
        cardExplanationEnglish: 'coins = 10 sets initial value.',
        visualTarget: 'coins = 10',
        visualLabel: 'coins = 10',
        visualSublabel: 'Initial coins',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'coins = 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: '*= Augmented Assignment',
        conceptKey: 'numbers',
        speechHinglish: 'coins *= 3 current value 10 ko 3 se multiply karke 30 store karta hai.',
        speechEnglish: 'coins *= 3 multiplies current value 10 by 3, storing 30.',
        cardExplanationHinglish: '*= operator multiplication update karta hai: 10 * 3 = 30.',
        cardExplanationEnglish: '*= operator performs multiplication update: 10 * 3 = 30.',
        visualTarget: 'coins *= 3',
        visualLabel: '*= 3',
        visualSublabel: '10 * 3 = 30',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'coins *= 3'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par 30 display hota hai.',
        speechEnglish: '30 is displayed on the console screen.',
        cardExplanationHinglish: 'Output: 30.',
        cardExplanationEnglish: 'Output: 30.',
        visualTarget: '30',
        visualLabel: '30',
        visualSublabel: 'Console output',
        consoleOutput: '30',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '30',
        outputLine: '30'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Coins', badge: 'Step 1', hintHinglish: 'coins = 10 likho.', hintEnglish: 'Write coins = 10.' },
      { level: 2, name: '*= Operator', badge: 'Step 2', hintHinglish: 'coins *= 3 likho.', hintEnglish: 'Write coins *= 3.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(coins) call karo.', hintEnglish: 'Print with print(coins).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '30';
      const hasMulEqual = /coins\s*\*=\s*3/.test(code);
      return {
        passed: match && hasMulEqual,
        message: match && hasMulEqual ? '🎉 Awesome! *= Multiplication assignment verified.' : 'Use coins *= 3 to multiply coins and print(coins).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Use the /= Operator ──
  {
    number: 8,
    title: 'Use the /= Operator',
    problemStatement: 'Create a variable total with value 100. Divide it by 4 using /= and print the result.',
    instructions: 'Python division / always produces a float result, so 100 / 4 becomes 25.0.',
    referenceCode: 'total = 100\ntotal /= 4\nprint(total)',
    starterCode: '# Use /= operator to divide total by 4 and print total\n',
    sampleInput: '',
    expectedOutput: '25.0',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Total: 100',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle total variable mein 100 assign karte hain.',
        speechEnglish: 'Initial value 100 is assigned to total.',
        cardExplanationHinglish: 'total = 100 initial value set karta hai.',
        cardExplanationEnglish: 'total = 100 sets initial value.',
        visualTarget: 'total = 100',
        visualLabel: 'total = 100',
        visualSublabel: 'Initial value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'total = 100'
      },
      {
        step: 2,
        totalSteps: 3,
        title: '/= Division & Float Result',
        conceptKey: 'numbers',
        speechHinglish: 'total /= 4 divide karta hai. Python mein regular division se float result 25.0 milta hai.',
        speechEnglish: 'total /= 4 divides the value. In Python, division results in a float 25.0.',
        cardExplanationHinglish: '/= operator divide karta hai aur float 25.0 store karta hai.',
        cardExplanationEnglish: '/= operator divides and stores float 25.0.',
        visualTarget: 'total /= 4',
        visualLabel: '/= 4',
        visualSublabel: '100 / 4 = 25.0',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'total /= 4'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par float number 25.0 print hota hai.',
        speechEnglish: 'The float number 25.0 is printed on the console.',
        cardExplanationHinglish: 'Output: 25.0.',
        cardExplanationEnglish: 'Output: 25.0.',
        visualTarget: '25.0',
        visualLabel: '25.0',
        visualSublabel: 'Console output',
        consoleOutput: '25.0',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: '25.0',
        outputLine: '25.0'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Total', badge: 'Step 1', hintHinglish: 'total = 100 likho.', hintEnglish: 'Write total = 100.' },
      { level: 2, name: '/= Operator', badge: 'Step 2', hintHinglish: 'total /= 4 likho.', hintEnglish: 'Write total /= 4.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(total) call karo.', hintEnglish: 'Print with print(total).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '25.0';
      const hasDivEqual = /total\s*\/=\s*4/.test(code);
      return {
        passed: match && hasDivEqual,
        message: match && hasDivEqual ? '🎉 Perfect! /= Division assignment and float result verified.' : 'Use total /= 4 to divide total and print(total).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Update a Variable Multiple Times ──
  {
    number: 9,
    title: 'Update a Variable Multiple Times',
    problemStatement: 'Create a variable score with value 10. Increase it by 5, then decrease it by 3, and print the final score.',
    instructions: 'Follow sequential updates: 10 + 5 = 15, then 15 - 3 = 12.',
    referenceCode: 'score = 10\nscore += 5\nscore -= 3\nprint(score)',
    starterCode: '# Update score multiple times using += 5 and -= 3, then print score\n',
    sampleInput: '',
    expectedOutput: '12',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Score & First Increase',
        conceptKey: 'numbers',
        speechHinglish: 'score 10 se start hota hai, aur score += 5 se 15 ho jata hai.',
        speechEnglish: 'score starts at 10, and score += 5 increases it to 15.',
        cardExplanationHinglish: 'score = 10 then score += 5 makes it 15.',
        cardExplanationEnglish: 'score = 10 then score += 5 makes it 15.',
        visualTarget: 'score += 5',
        visualLabel: 'Step 1: Increase',
        visualSublabel: '10 + 5 = 15',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'score += 5'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Second Decrease',
        conceptKey: 'numbers',
        speechHinglish: 'score -= 3 updated value 15 mein se 3 subtract karke 12 banata hai.',
        speechEnglish: 'score -= 3 subtracts 3 from the updated 15, making it 12.',
        cardExplanationHinglish: 'score -= 3 se value 15 - 3 = 12 ho jati hai.',
        cardExplanationEnglish: 'score -= 3 reduces 15 to 12.',
        visualTarget: 'score -= 3',
        visualLabel: 'Step 2: Decrease',
        visualSublabel: '15 - 3 = 12',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 3,
        highlightToken: 'score -= 3'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par final score 12 display hota hai.',
        speechEnglish: 'The final score 12 is displayed on the console.',
        cardExplanationHinglish: 'Output: 12.',
        cardExplanationEnglish: 'Output: 12.',
        visualTarget: '12',
        visualLabel: '12',
        visualSublabel: 'Console output',
        consoleOutput: '12',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: '12',
        outputLine: '12'
      }
    ],
    hints: [
      { level: 1, name: 'Start at 10', badge: 'Step 1', hintHinglish: 'score = 10 likho.', hintEnglish: 'Write score = 10.' },
      { level: 2, name: 'Updates', badge: 'Step 2', hintHinglish: 'score += 5 aur score -= 3 likho.', hintEnglish: 'Write score += 5 then score -= 3.' },
      { level: 3, name: 'Print Final', badge: 'Step 3', hintHinglish: 'print(score) call karo.', hintEnglish: 'Print with print(score).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '12';
      const hasBothOps = /score\s*\+=\s*5/.test(code) && /score\s*-=\s*3/.test(code);
      return {
        passed: match && hasBothOps,
        message: match && hasBothOps ? '🎉 Brilliant! Sequential multiple updates verified.' : 'Update score with score += 5 then score -= 3 and print(score).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Update a String Value ──
  {
    number: 10,
    title: 'Update a String Value',
    problemStatement: 'Create a variable message containing "Hello". Append " Python" using += and print the updated message.',
    instructions: '+= also works on strings by concatenating the new text to the end.',
    referenceCode: 'message = "Hello"\nmessage += " Python"\nprint(message)',
    starterCode: '# Append string using += operator and print message\n',
    sampleInput: '',
    expectedOutput: 'Hello Python',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial String: "Hello"',
        conceptKey: 'string',
        speechHinglish: 'message variable mein initial string Hello store hoti hai.',
        speechEnglish: 'Initial string "Hello" is assigned to message.',
        cardExplanationHinglish: 'message = "Hello" initial text set karta hai.',
        cardExplanationEnglish: 'message = "Hello" sets the initial string.',
        visualTarget: 'message = "Hello"',
        visualLabel: 'message',
        visualSublabel: '"Hello"',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'message = "Hello"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'String Concatenation with +=',
        conceptKey: 'string',
        speechHinglish: 'message += " Python" dono strings ko jod kar naya string "Hello Python" banata hai.',
        speechEnglish: 'message += " Python" concatenates the strings to form "Hello Python".',
        cardExplanationHinglish: '+= operator string concatenation karta hai.',
        cardExplanationEnglish: '+= operator performs string concatenation.',
        visualTarget: 'message += " Python"',
        visualLabel: '+= " Python"',
        visualSublabel: 'Concatenated string',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'message += " Python"'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par Hello Python display hota hai.',
        speechEnglish: 'Hello Python is displayed on the console screen.',
        cardExplanationHinglish: 'Output: Hello Python.',
        cardExplanationEnglish: 'Output: Hello Python.',
        visualTarget: 'Hello Python',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Hello Python',
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: 'Hello Python',
        outputLine: 'Hello Python'
      }
    ],
    hints: [
      { level: 1, name: 'Initial String', badge: 'Step 1', hintHinglish: 'message = "Hello" likho.', hintEnglish: 'Write message = "Hello".' },
      { level: 2, name: 'Concatenate', badge: 'Step 2', hintHinglish: 'message += " Python" likho (space ka dhyan rakhein).', hintEnglish: 'Write message += " Python" including the space.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(message) call karo.', hintEnglish: 'Print with print(message).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Hello Python';
      const hasStrConcat = /message\s*\+=\s*["']\s*Python["']/.test(code);
      return {
        passed: match && hasStrConcat,
        message: match && hasStrConcat ? '🎉 Outstanding! String update using += verified.' : 'Use message += " Python" and print(message).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Swap Two Variable Values ──
  {
    number: 11,
    title: 'Swap Two Variable Values',
    problemStatement: 'Create two variables: a = 10 and b = 20. Swap their values using Python assignment, then print both variables.',
    instructions: 'Python evaluates right side values first before assigning: a, b = b, a cleanly swaps two values.',
    referenceCode: 'a = 10\nb = 20\n\na, b = b, a\n\nprint(a)\nprint(b)',
    starterCode: '# Swap a and b values using a, b = b, a then print both\n',
    sampleInput: '',
    expectedOutput: '20\n10',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Values: a=10, b=20',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle a mein 10 aur b mein 20 assign karte hain.',
        speechEnglish: 'Initially a is 10 and b is 20.',
        cardExplanationHinglish: 'a = 10 aur b = 20 initial memory boxes set karte hain.',
        cardExplanationEnglish: 'a = 10 and b = 20 initialize the variables.',
        visualTarget: 'a=10, b=20',
        visualLabel: 'Initial Values',
        visualSublabel: 'a=10, b=20',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'a = 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'a, b = b, a Tuple Unpack Swapping',
        conceptKey: 'numbers',
        speechHinglish: 'Python right side b aur a ki values (20, 10) pehle read karta hai, fir unhe a aur b mein assign karke swap kar deta hai.',
        speechEnglish: 'Python evaluates the tuple (b, a) as (20, 10) first, then assigns to a and b, swapping them.',
        cardExplanationHinglish: 'a, b = b, a dono variables ki values ko safely swap karta hai.',
        cardExplanationEnglish: 'a, b = b, a cleanly swaps the variables without a temporary variable.',
        visualTarget: 'a, b = b, a',
        visualLabel: 'Swapping',
        visualSublabel: 'a becomes 20, b becomes 10',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 4,
        highlightToken: 'a, b = b, a'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par swapped values 20 aur 10 print hoti hain.',
        speechEnglish: 'The swapped values 20 and 10 are displayed on the console.',
        cardExplanationHinglish: 'Output: 20 then 10.',
        cardExplanationEnglish: 'Output: 20 then 10.',
        visualTarget: '20\n10',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: '20\n10',
        isConsoleVisible: true,
        highlightLine: 6,
        highlightToken: 'print(a)',
        outputLine: '20\n10'
      }
    ],
    hints: [
      { level: 1, name: 'Initial Variables', badge: 'Step 1', hintHinglish: 'a = 10 aur b = 20 likho.', hintEnglish: 'Write a = 10 and b = 20.' },
      { level: 2, name: 'Swap Syntax', badge: 'Step 2', hintHinglish: 'a, b = b, a likhkar values swap karo.', hintEnglish: 'Write a, b = b, a.' },
      { level: 3, name: 'Print Both', badge: 'Step 3', hintHinglish: 'print(a) aur print(b) likho.', hintEnglish: 'Print both: print(a) and print(b).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '20\n10';
      const hasSwap = /a\s*,\s*b\s*=\s*b\s*,\s*a/.test(code) || /b\s*,\s*a\s*=\s*a\s*,\s*b/.test(code);
      return {
        passed: match && hasSwap,
        message: match && hasSwap ? '🎉 Brilliant! Variable swapping verified.' : 'Swap a and b using a, b = b, a and print both.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Game Score Tracker Mini Project ──
  {
    number: 12,
    title: 'Game Score Tracker Mini Project',
    problemStatement: 'Build a Game Score Tracker. Start with score = 0, earn 10 points, earn 20 points, lose 5 points, double remaining points, and display final score.',
    instructions: 'Follow the game score flow: score = 0, += 10, += 20, -= 5, *= 2, then print("Final Score:", score).',
    referenceCode: 'score = 0\n\nscore += 10\nscore += 20\nscore -= 5\nscore *= 2\n\nprint("Final Score:", score)',
    starterCode: '# Game Score Tracker Mini Project\nscore = 0\n',
    sampleInput: '',
    expectedOutput: 'Final Score: 50',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Score Flow: Earn Points',
        conceptKey: 'numbers',
        speechHinglish: 'score 0 se start hota hai. score += 10 se 10 aur score += 20 se 30 points ho jate hain.',
        speechEnglish: 'score starts at 0. score += 10 adds 10, and score += 20 brings it to 30 points.',
        cardExplanationHinglish: 'score = 0, score += 10 (10), score += 20 (30).',
        cardExplanationEnglish: 'score = 0, score += 10 (10), score += 20 (30).',
        visualTarget: 'Earn points',
        visualLabel: 'Additions',
        visualSublabel: '0 -> 10 -> 30',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 3,
        highlightToken: 'score += 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Lose & Double Points',
        conceptKey: 'numbers',
        speechHinglish: 'score -= 5 se 25 bachta hai, aur score *= 2 se score double hokar 50 ho jata hai.',
        speechEnglish: 'score -= 5 leaves 25, and score *= 2 doubles it to 50 points.',
        cardExplanationHinglish: 'score -= 5 (25), score *= 2 (50).',
        cardExplanationEnglish: 'score -= 5 (25), score *= 2 (50).',
        visualTarget: 'Lose & Double',
        visualLabel: 'Updates',
        visualSublabel: '30 - 5 = 25, 25 * 2 = 50',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 5,
        highlightToken: 'score -= 5'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Final Score 50 formatted string mein print ho jata hai.',
        speechEnglish: 'Final Score 50 is displayed on the console.',
        cardExplanationHinglish: 'Output: Final Score: 50.',
        cardExplanationEnglish: 'Output: Final Score: 50.',
        visualTarget: 'Final Score: 50',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: 'Final Score: 50',
        isConsoleVisible: true,
        highlightLine: 8,
        highlightToken: 'print("Final Score:", score)',
        outputLine: 'Final Score: 50'
      }
    ],
    hints: [
      { level: 1, name: 'Starting Score', badge: 'Step 1', hintHinglish: 'score = 0 likho.', hintEnglish: 'Start with score = 0.' },
      { level: 2, name: 'Score Updates', badge: 'Step 2', hintHinglish: 'score += 10, score += 20, score -= 5, score *= 2 likho.', hintEnglish: 'Apply: score += 10, score += 20, score -= 5, score *= 2.' },
      { level: 3, name: 'Print Output', badge: 'Step 3', hintHinglish: 'print("Final Score:", score) call karo.', hintEnglish: 'Print with print("Final Score:", score).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'Final Score: 50';
      const hasOps = code.includes('+= 10') && code.includes('+= 20') && code.includes('-= 5') && code.includes('*= 2');
      return {
        passed: match && hasOps,
        message: match && hasOps ? '🎉 Congratulations! Game Score Tracker Mini Project complete!' : 'Apply all operations in order (+= 10, += 20, -= 5, *= 2) and print Final Score: 50.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 08: Python Data Types — 15 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_08_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Understand Integer Data Type ──
  {
    number: 1,
    title: 'Understand Integer Data Type',
    problemStatement: 'Create a Variable named age, assign it the Integer value 12, and display its Data Type using type().',
    instructions: 'Integer is a data type representing whole numbers without decimals. type() reveals the class of an object.',
    referenceCode: 'age = 12\nprint(type(age))',
    starterCode: '# Create age = 12 and print its data type using type(age)\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Integer Variable: age = 12',
        conceptKey: 'numbers',
        speechHinglish: 'Integer ek Data Type hai jo bina decimal wale whole numbers represent karta hai. Yahan 12 ek Integer hai.',
        speechEnglish: 'Integer is a data type representing whole numbers. Here 12 is an Integer.',
        cardExplanationHinglish: 'age = 12 ek Integer variable memory mein create karta hai.',
        cardExplanationEnglish: 'age = 12 binds the variable to an Integer value.',
        visualTarget: 'age = 12',
        visualLabel: 'int',
        visualSublabel: 'Whole number',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'age = 12'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'The type() Function',
        conceptKey: 'print',
        speechHinglish: 'type(age) function variable ka runtime data type check karke <class \'int\'> return karta hai.',
        speechEnglish: 'type(age) checks the data type and returns <class \'int\'>.',
        cardExplanationHinglish: 'type(age) object ka data type int identify karta hai.',
        cardExplanationEnglish: 'type(age) inspects the runtime class.',
        visualTarget: 'type(age)',
        visualLabel: 'type()',
        visualSublabel: 'Inspects data type',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(age)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'int'> print hota hai.",
        speechEnglish: "Console prints <class 'int'>.",
        cardExplanationHinglish: "Output: <class 'int'>.",
        cardExplanationEnglish: "Output: <class 'int'>.",
        visualTarget: "<class 'int'>",
        visualLabel: "<class 'int'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'int'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'int'>",
        outputLine: "<class 'int'>"
      }
    ],
    hints: [
      { level: 1, name: 'Integer Value', badge: 'Step 1', hintHinglish: 'age = 12 likho.', hintEnglish: 'Write age = 12.' },
      { level: 2, name: 'type() Function', badge: 'Step 2', hintHinglish: 'type(age) likhkar Data Type check karo.', hintEnglish: 'Use type(age) to inspect the data type.' },
      { level: 3, name: 'Print Type', badge: 'Step 3', hintHinglish: 'print(type(age)) call karo.', hintEnglish: 'Call print(type(age)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>";
      const hasType = /type\s*\(\s*age\s*\)/.test(code);
      return {
        passed: match && hasType,
        message: match && hasType ? '🎉 Excellent! Integer data type and type() verified.' : 'Assign 12 to age and print(type(age)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Understand Float Data Type ──
  {
    number: 2,
    title: 'Understand Float Data Type',
    problemStatement: 'Create a Variable named price, assign it the Float value 49.99, and display its Data Type.',
    instructions: 'Float represents decimal numbers in Python.',
    referenceCode: 'price = 49.99\nprint(type(price))',
    starterCode: '# Create price = 49.99 and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'float'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Float Variable: price = 49.99',
        conceptKey: 'numbers',
        speechHinglish: 'Float Data Type decimal numbers ko represent karta hai. 49.99 ek Float value hai.',
        speechEnglish: 'Float data type represents decimal numbers. 49.99 is a float value.',
        cardExplanationHinglish: 'price = 49.99 decimal number store karta hai.',
        cardExplanationEnglish: 'price = 49.99 stores a floating point decimal number.',
        visualTarget: 'price = 49.99',
        visualLabel: 'float',
        visualSublabel: 'Decimal number',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'price = 49.99'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Check Float with type()',
        conceptKey: 'print',
        speechHinglish: 'type(price) se Python batata hai ki iska Data Type float hai.',
        speechEnglish: 'type(price) tells Python that the data type is float.',
        cardExplanationHinglish: 'type(price) class float return karta hai.',
        cardExplanationEnglish: 'type(price) returns class float.',
        visualTarget: 'type(price)',
        visualLabel: 'type()',
        visualSublabel: 'Detects float',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(price)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'float'> print hota hai.",
        speechEnglish: "Console prints <class 'float'>.",
        cardExplanationHinglish: "Output: <class 'float'>.",
        cardExplanationEnglish: "Output: <class 'float'>.",
        visualTarget: "<class 'float'>",
        visualLabel: "<class 'float'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'float'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'float'>",
        outputLine: "<class 'float'>"
      }
    ],
    hints: [
      { level: 1, name: 'Float Value', badge: 'Step 1', hintHinglish: 'price = 49.99 likho.', hintEnglish: 'Write price = 49.99.' },
      { level: 2, name: 'Check Type', badge: 'Step 2', hintHinglish: 'type(price) use karo.', hintEnglish: 'Use type(price).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(price)) call karo.', hintEnglish: 'Call print(type(price)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'float'>";
      const hasType = /type\s*\(\s*price\s*\)/.test(code);
      return {
        passed: match && hasType,
        message: match && hasType ? '🎉 Great job! Float data type verified.' : 'Assign 49.99 to price and print(type(price)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Understand String Data Type ──
  {
    number: 3,
    title: 'Understand String Data Type',
    problemStatement: 'Create a Variable named student_name, store "Alex", and print its Data Type.',
    instructions: 'String represents textual data enclosed inside quotation marks.',
    referenceCode: 'student_name = "Alex"\nprint(type(student_name))',
    starterCode: '# Create student_name = "Alex" and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'str'>",
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'String Variable: "Alex"',
        conceptKey: 'string',
        speechHinglish: 'String ka use Text store karne ke liye hota hai. Quotes ke andar Text likha jata hai.',
        speechEnglish: 'String is used to store text inside quotation marks.',
        cardExplanationHinglish: 'student_name = "Alex" text string store karta hai.',
        cardExplanationEnglish: 'student_name = "Alex" stores a string literal.',
        visualTarget: 'student_name = "Alex"',
        visualLabel: 'str',
        visualSublabel: 'Text in quotes',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(student_name)',
        conceptKey: 'print',
        speechHinglish: 'type() function batata hai ki ye value str Data Type ki hai.',
        speechEnglish: 'type() identifies the value as str data type.',
        cardExplanationHinglish: 'type(student_name) class str return karta hai.',
        cardExplanationEnglish: 'type(student_name) returns class str.',
        visualTarget: 'type(student_name)',
        visualLabel: 'type()',
        visualSublabel: 'Identifies str',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(student_name)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'str'> display hota hai.",
        speechEnglish: "Console prints <class 'str'>.",
        cardExplanationHinglish: "Output: <class 'str'>.",
        cardExplanationEnglish: "Output: <class 'str'>.",
        visualTarget: "<class 'str'>",
        visualLabel: "<class 'str'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'str'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'str'>",
        outputLine: "<class 'str'>"
      }
    ],
    hints: [
      { level: 1, name: 'String Quotes', badge: 'Step 1', hintHinglish: 'student_name = "Alex" likho quotes ke sath.', hintEnglish: 'Write student_name = "Alex" inside quotes.' },
      { level: 2, name: 'Type Function', badge: 'Step 2', hintHinglish: 'type(student_name) use karo.', hintEnglish: 'Use type(student_name).' },
      { level: 3, name: 'Print Output', badge: 'Step 3', hintHinglish: 'print(type(student_name)) call karo.', hintEnglish: 'Call print(type(student_name)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'str'>";
      const hasType = /type\s*\(\s*student_name\s*\)/.test(code);
      return {
        passed: match && hasType,
        message: match && hasType ? '🎉 Superb! String data type verified.' : 'Assign a string to student_name and print(type(student_name)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Understand Boolean Data Type ──
  {
    number: 4,
    title: 'Understand Boolean Data Type',
    problemStatement: 'Create a Variable named is_student, assign it True, and print its Data Type.',
    instructions: 'Boolean data type has two literal states: True and False (without quotes).',
    referenceCode: 'is_student = True\nprint(type(is_student))',
    starterCode: '# Create is_student = True and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'bool'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Boolean Literal: True',
        conceptKey: 'numbers',
        speechHinglish: 'Boolean Data Type mein do values hoti hain: True aur False. Ye logical information represent karte hain.',
        speechEnglish: 'Boolean data type has two values: True and False, representing logical states.',
        cardExplanationHinglish: 'is_student = True bina quotes ke Boolean literal store karta hai.',
        cardExplanationEnglish: 'is_student = True stores a boolean literal without quotes.',
        visualTarget: 'is_student = True',
        visualLabel: 'bool',
        visualSublabel: 'True / False',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'is_student = True'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Check bool with type()',
        conceptKey: 'print',
        speechHinglish: 'type(is_student) class bool return karta hai.',
        speechEnglish: 'type(is_student) returns class bool.',
        cardExplanationHinglish: 'type(is_student) boolean data type identify karta hai.',
        cardExplanationEnglish: 'type(is_student) inspects boolean class.',
        visualTarget: 'type(is_student)',
        visualLabel: 'type()',
        visualSublabel: 'Detects bool',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(is_student)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console screen par <class 'bool'> print hota hai.",
        speechEnglish: "Console displays <class 'bool'>.",
        cardExplanationHinglish: "Output: <class 'bool'>.",
        cardExplanationEnglish: "Output: <class 'bool'>.",
        visualTarget: "<class 'bool'>",
        visualLabel: "<class 'bool'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'bool'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'bool'>",
        outputLine: "<class 'bool'>"
      }
    ],
    hints: [
      { level: 1, name: 'Boolean Literal', badge: 'Step 1', hintHinglish: 'is_student = True likho bina quotes ke.', hintEnglish: 'Write is_student = True without quotes.' },
      { level: 2, name: 'Check Type', badge: 'Step 2', hintHinglish: 'type(is_student) likho.', hintEnglish: 'Use type(is_student).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(is_student)) call karo.', hintEnglish: 'Call print(type(is_student)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'bool'>";
      const hasType = /type\s*\(\s*is_student\s*\)/.test(code);
      const noQuotes = !/is_student\s*=\s*["']True["']/.test(code);
      return {
        passed: match && hasType && noQuotes,
        message: match && hasType && noQuotes ? '🎉 Shabaash! Boolean data type verified.' : 'Assign True (without quotes) to is_student and print(type(is_student)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Number vs String ──
  {
    number: 5,
    title: 'Number vs String',
    problemStatement: 'Create two Variables: number_value with Integer 100, and text_value with String "100". Display their Data Types.',
    instructions: 'Understand that 100 without quotes is an int, but "100" in quotes is a str.',
    referenceCode: 'number_value = 100\ntext_value = "100"\n\nprint(type(number_value))\nprint(type(text_value))',
    starterCode: '# Compare int 100 vs str "100" types\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>\n<class 'str'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Number vs String Distinction',
        conceptKey: 'numbers',
        speechHinglish: 'Dono values dekhne mein 100 jaisi lag sakti hain, lekin bina quotes wala 100 Integer hai, aur quotes wala "100" String hai.',
        speechEnglish: '100 without quotes is an Integer, while "100" in quotes is a String.',
        cardExplanationHinglish: 'number_value int hai, text_value str hai.',
        cardExplanationEnglish: 'number_value is int, text_value is str.',
        visualTarget: '100 vs "100"',
        visualLabel: 'int vs str',
        visualSublabel: 'Number vs Text',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'number_value = 100'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Check Types Sequentially',
        conceptKey: 'print',
        speechHinglish: 'print(type(number_value)) int deta hai, aur print(type(text_value)) str deta hai.',
        speechEnglish: 'Checking both sequentially prints class int followed by class str.',
        cardExplanationHinglish: 'type() call alag alag class types dikhata hai.',
        cardExplanationEnglish: 'type() calls reveal distinct classes.',
        visualTarget: 'Sequential type()',
        visualLabel: 'type() calls',
        visualSublabel: 'Inspect both',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 4,
        highlightToken: 'print(type(number_value))'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'int'> aur <class 'str'> separate lines par print hote hain.",
        speechEnglish: "Console prints <class 'int'> followed by <class 'str'>.",
        cardExplanationHinglish: "Output: <class 'int'> then <class 'str'>.",
        cardExplanationEnglish: "Output: <class 'int'> then <class 'str'>.",
        visualTarget: "Output lines",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'int'>\n<class 'str'>",
        isConsoleVisible: true,
        highlightLine: 5,
        highlightToken: 'print(type(text_value))',
        outputLine: "<class 'int'>\n<class 'str'>"
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'number_value = 100 aur text_value = "100" likho.', hintEnglish: 'Create number_value = 100 and text_value = "100".' },
      { level: 2, name: 'First Print', badge: 'Step 2', hintHinglish: 'print(type(number_value)) likho.', hintEnglish: 'Call print(type(number_value)).' },
      { level: 3, name: 'Second Print', badge: 'Step 3', hintHinglish: 'print(type(text_value)) likho.', hintEnglish: 'Call print(type(text_value)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>\n<class 'str'>";
      return {
        passed: match,
        message: match ? '🎉 Awesome! Number vs String difference mastered.' : 'Create int 100 and str "100", then print their types.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Identify Multiple Data Types ──
  {
    number: 6,
    title: 'Identify Multiple Data Types',
    problemStatement: 'Create four Variables containing an Integer, Float, String and Boolean. Print the Data Type of each Variable.',
    instructions: 'Create age=12, height=4.8, name="Alex", is_active=True and print their types.',
    referenceCode: 'age = 12\nheight = 4.8\nname = "Alex"\nis_active = True\n\nprint(type(age))\nprint(type(height))\nprint(type(name))\nprint(type(is_active))',
    starterCode: '# Create four variables and print their types\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Four Core Data Types',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Python ke four primary primitive types hain: int, float, str aur bool.',
        speechEnglish: 'Python features four primary primitive types: int, float, str, and bool.',
        cardExplanationHinglish: 'Integer, Float, String aur Boolean char alag memory boxes create karte hain.',
        cardExplanationEnglish: 'Four distinct variables with different primitive types.',
        visualTarget: '4 Variables',
        visualLabel: 'Core Types',
        visualSublabel: 'int, float, str, bool',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'age = 12'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Inspect Each Type',
        conceptKey: 'print',
        speechHinglish: 'Har variable ka data type type() function se check karke print karte hain.',
        speechEnglish: 'We inspect and print each variable type using type().',
        cardExplanationHinglish: 'Sequential type() calls print each class in order.',
        cardExplanationEnglish: 'Sequential type() calls display each class in order.',
        visualTarget: 'type calls',
        visualLabel: 'type()',
        visualSublabel: '4 calls',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 6,
        highlightToken: 'print(type(age))'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par int, float, str aur bool charo classes display ho jati hain.",
        speechEnglish: "Console displays all 4 classes: int, float, str, bool.",
        cardExplanationHinglish: "Output: int, float, str, bool.",
        cardExplanationEnglish: "Output: int, float, str, bool.",
        visualTarget: "4 Classes",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
        isConsoleVisible: true,
        highlightLine: 9,
        highlightToken: 'print(type(is_active))',
        outputLine: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>"
      }
    ],
    hints: [
      { level: 1, name: 'Four Variables', badge: 'Step 1', hintHinglish: 'age=12, height=4.8, name="Alex", is_active=True banayein.', hintEnglish: 'Create age=12, height=4.8, name="Alex", is_active=True.' },
      { level: 2, name: 'Call type()', badge: 'Step 2', hintHinglish: 'Har variable par type() lagao.', hintEnglish: 'Call type() on each variable.' },
      { level: 3, name: 'Print All', badge: 'Step 3', hintHinglish: 'Chaar alag print statements se display karo.', hintEnglish: 'Print all four types on separate lines.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>";
      return {
        passed: match,
        message: match ? '🎉 Fantastic! Four basic data types identified.' : 'Create an int, float, str, bool and print the type of each.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Understand List Data Type ──
  {
    number: 7,
    title: 'Understand List Data Type',
    problemStatement: 'Create a List containing three fruits and display its Data Type.',
    instructions: 'List is an ordered collection created with square brackets: fruits = ["Apple", "Banana", "Mango"].',
    referenceCode: 'fruits = ["Apple", "Banana", "Mango"]\nprint(type(fruits))',
    starterCode: '# Create a fruits list and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'list'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'List Collection: []',
        conceptKey: 'multiple_lines',
        speechHinglish: 'List ek Collection Data Type hai. Ismein hum multiple values ko ordered sequence mein square brackets ke andar store karte hain.',
        speechEnglish: 'List is an ordered collection stored inside square brackets.',
        cardExplanationHinglish: 'fruits = ["Apple", "Banana", "Mango"] ek List create karta hai.',
        cardExplanationEnglish: 'fruits list holds 3 ordered elements.',
        visualTarget: 'fruits = [...]',
        visualLabel: 'list',
        visualSublabel: 'Ordered collection',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'fruits = ["Apple", "Banana", "Mango"]'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(fruits)',
        conceptKey: 'print',
        speechHinglish: 'type(fruits) class list identify karta hai.',
        speechEnglish: 'type(fruits) identifies the object as class list.',
        cardExplanationHinglish: 'type(fruits) list data type return karta hai.',
        cardExplanationEnglish: 'type(fruits) returns class list.',
        visualTarget: 'type(fruits)',
        visualLabel: 'type()',
        visualSublabel: 'Detects list',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(fruits)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console screen par <class 'list'> print hota hai.",
        speechEnglish: "Console displays <class 'list'>.",
        cardExplanationHinglish: "Output: <class 'list'>.",
        cardExplanationEnglish: "Output: <class 'list'>.",
        visualTarget: "<class 'list'>",
        visualLabel: "<class 'list'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'list'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'list'>",
        outputLine: "<class 'list'>"
      }
    ],
    hints: [
      { level: 1, name: 'Square Brackets', badge: 'Step 1', hintHinglish: 'fruits = ["Apple", "Banana", "Mango"] likho.', hintEnglish: 'Create a list with square brackets: ["Apple", "Banana", "Mango"].' },
      { level: 2, name: 'Check Type', badge: 'Step 2', hintHinglish: 'type(fruits) use karo.', hintEnglish: 'Use type(fruits).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(fruits)) call karo.', hintEnglish: 'Call print(type(fruits)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'list'>";
      const hasListSyntax = /\[.*\]/.test(code);
      return {
        passed: match && hasListSyntax,
        message: match && hasListSyntax ? '🎉 Brilliant! List collection data type verified.' : 'Create a list of 3 fruits and print(type(fruits)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Understand Tuple Data Type ──
  {
    number: 8,
    title: 'Understand Tuple Data Type',
    problemStatement: 'Create a Tuple containing three Numbers and display its Data Type.',
    instructions: 'Tuple is an ordered immutable collection created with parentheses: numbers = (10, 20, 30).',
    referenceCode: 'numbers = (10, 20, 30)\nprint(type(numbers))',
    starterCode: '# Create a tuple of numbers and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'tuple'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Tuple Collection: ()',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Tuple bhi ordered collection hai, lekin ye Immutable hoti hai jiske elements change nahi kiye ja sakte.',
        speechEnglish: 'Tuple is an ordered collection that is immutable, created with parentheses.',
        cardExplanationHinglish: 'numbers = (10, 20, 30) ek Tuple create karta hai.',
        cardExplanationEnglish: 'numbers = (10, 20, 30) creates an immutable tuple.',
        visualTarget: 'numbers = (...)',
        visualLabel: 'tuple',
        visualSublabel: 'Immutable sequence',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'numbers = (10, 20, 30)'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(numbers)',
        conceptKey: 'print',
        speechHinglish: 'type(numbers) class tuple return karta hai.',
        speechEnglish: 'type(numbers) returns class tuple.',
        cardExplanationHinglish: 'type(numbers) tuple data type identify karta hai.',
        cardExplanationEnglish: 'type(numbers) inspects tuple class.',
        visualTarget: 'type(numbers)',
        visualLabel: 'type()',
        visualSublabel: 'Detects tuple',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(numbers)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'tuple'> print hota hai.",
        speechEnglish: "Console displays <class 'tuple'>.",
        cardExplanationHinglish: "Output: <class 'tuple'>.",
        cardExplanationEnglish: "Output: <class 'tuple'>.",
        visualTarget: "<class 'tuple'>",
        visualLabel: "<class 'tuple'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'tuple'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'tuple'>",
        outputLine: "<class 'tuple'>"
      }
    ],
    hints: [
      { level: 1, name: 'Parentheses', badge: 'Step 1', hintHinglish: 'numbers = (10, 20, 30) likho.', hintEnglish: 'Create a tuple with parentheses: (10, 20, 30).' },
      { level: 2, name: 'Check Type', badge: 'Step 2', hintHinglish: 'type(numbers) use karo.', hintEnglish: 'Use type(numbers).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(numbers)) call karo.', hintEnglish: 'Call print(type(numbers)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'tuple'>";
      const hasTupleSyntax = /\(.*\)/.test(code);
      return {
        passed: match && hasTupleSyntax,
        message: match && hasTupleSyntax ? '🎉 Excellent! Tuple immutable collection verified.' : 'Create a tuple of numbers and print(type(numbers)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Understand Set Data Type ──
  {
    number: 9,
    title: 'Understand Set Data Type',
    problemStatement: 'Create a Set containing three unique Numbers and display its Data Type.',
    instructions: 'Set is an unordered collection of unique elements enclosed in curly braces: numbers = {10, 20, 30}.',
    referenceCode: 'numbers = {10, 20, 30}\nprint(type(numbers))',
    starterCode: '# Create a set of numbers and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'set'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Set Collection: {}',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Set unique elements ka collection hota hai jo curly braces se banta hai aur duplicates allow nahi karta.',
        speechEnglish: 'Set is an unordered collection of unique elements enclosed in curly braces.',
        cardExplanationHinglish: 'numbers = {10, 20, 30} ek Set create karta hai.',
        cardExplanationEnglish: 'numbers = {10, 20, 30} creates a set of unique elements.',
        visualTarget: 'numbers = {10, 20, 30}',
        visualLabel: 'set',
        visualSublabel: 'Unique elements',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'numbers = {10, 20, 30}'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(numbers)',
        conceptKey: 'print',
        speechHinglish: 'type(numbers) class set identify karta hai.',
        speechEnglish: 'type(numbers) detects class set.',
        cardExplanationHinglish: 'type(numbers) set class return karta hai.',
        cardExplanationEnglish: 'type(numbers) inspects set class.',
        visualTarget: 'type(numbers)',
        visualLabel: 'type()',
        visualSublabel: 'Detects set',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(numbers)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'set'> display hota hai.",
        speechEnglish: "Console prints <class 'set'>.",
        cardExplanationHinglish: "Output: <class 'set'>.",
        cardExplanationEnglish: "Output: <class 'set'>.",
        visualTarget: "<class 'set'>",
        visualLabel: "<class 'set'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'set'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'set'>",
        outputLine: "<class 'set'>"
      }
    ],
    hints: [
      { level: 1, name: 'Curly Braces', badge: 'Step 1', hintHinglish: 'numbers = {10, 20, 30} likho curly braces ke sath.', hintEnglish: 'Create a set with curly braces: {10, 20, 30}.' },
      { level: 2, name: 'Check Type', badge: 'Step 2', hintHinglish: 'type(numbers) use karo.', hintEnglish: 'Use type(numbers).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(numbers)) call karo.', hintEnglish: 'Call print(type(numbers)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'set'>";
      const hasSetSyntax = /\{[^:]+\}/.test(code);
      return {
        passed: match && hasSetSyntax,
        message: match && hasSetSyntax ? '🎉 Perfect! Set unique collection verified.' : 'Create a set of numbers {10, 20, 30} and print(type(numbers)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Understand Dictionary Data Type ──
  {
    number: 10,
    title: 'Understand Dictionary Data Type',
    problemStatement: "Create a Dictionary containing a student's name and age. Print its Data Type.",
    instructions: 'Dictionary stores data in Key: Value pairs enclosed in curly braces.',
    referenceCode: 'student = {\n    "name": "Alex",\n    "age": 12\n}\n\nprint(type(student))',
    starterCode: '# Create student dictionary and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'dict'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Dictionary: Key-Value Pairs',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Dictionary mein data Key-Value pairs ke form mein store hota hai. Yahan "name" Key hai aur "Alex" Value hai.',
        speechEnglish: 'Dictionary stores data in key-value pairs inside curly braces.',
        cardExplanationHinglish: 'student = {"name": "Alex", "age": 12} Dictionary create karta hai.',
        cardExplanationEnglish: 'student dictionary maps keys to values.',
        visualTarget: 'Key-Value mapping',
        visualLabel: 'dict',
        visualSublabel: 'Key: Value pairs',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student = {'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(student)',
        conceptKey: 'print',
        speechHinglish: 'type(student) class dict identify karta hai.',
        speechEnglish: 'type(student) identifies the object as class dict.',
        cardExplanationHinglish: 'type(student) dictionary class return karta hai.',
        cardExplanationEnglish: 'type(student) inspects dict class.',
        visualTarget: 'type(student)',
        visualLabel: 'type()',
        visualSublabel: 'Detects dict',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 6,
        highlightToken: 'type(student)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'dict'> display ho jata hai.",
        speechEnglish: "Console prints <class 'dict'>.",
        cardExplanationHinglish: "Output: <class 'dict'>.",
        cardExplanationEnglish: "Output: <class 'dict'>.",
        visualTarget: "<class 'dict'>",
        visualLabel: "<class 'dict'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'dict'>",
        isConsoleVisible: true,
        highlightLine: 6,
        highlightToken: "<class 'dict'>",
        outputLine: "<class 'dict'>"
      }
    ],
    hints: [
      { level: 1, name: 'Key-Value Pairs', badge: 'Step 1', hintHinglish: 'student = {"name": "Alex", "age": 12} likho.', hintEnglish: 'Create student = {"name": "Alex", "age": 12}.' },
      { level: 2, name: 'Colons', badge: 'Step 2', hintHinglish: 'Key aur Value ke beech colon (:) lagayein.', hintEnglish: 'Use a colon between each key and value.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(student)) call karo.', hintEnglish: 'Call print(type(student)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'dict'>";
      const hasDictSyntax = /\{[^}]*:[^}]*\}/.test(code);
      return {
        passed: match && hasDictSyntax,
        message: match && hasDictSyntax ? '🎉 Outstanding! Dictionary key-value data type verified.' : 'Create a student dictionary with name and age, then print(type(student)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Understand NoneType ──
  {
    number: 11,
    title: 'Understand NoneType',
    problemStatement: 'Create a Variable named result, assign it None, and print its Data Type.',
    instructions: 'None is a special Python constant representing the absence of a value; its type is NoneType.',
    referenceCode: 'result = None\nprint(type(result))',
    starterCode: '# Assign None to result and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'NoneType'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'None Constant',
        conceptKey: 'numbers',
        speechHinglish: 'Python mein None absence of value ko represent karta hai. Ye zero ya False se alag hota hai.',
        speechEnglish: 'None in Python represents the absence of a value, distinct from 0 or False.',
        cardExplanationHinglish: 'result = None value na hone ko represent karta hai.',
        cardExplanationEnglish: 'result = None binds result to NoneType.',
        visualTarget: 'result = None',
        visualLabel: 'NoneType',
        visualSublabel: 'Absence of value',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'result = None'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(result)',
        conceptKey: 'print',
        speechHinglish: 'type(result) se iska Data Type NoneType milta hai.',
        speechEnglish: 'type(result) detects class NoneType.',
        cardExplanationHinglish: 'type(result) NoneType class return karta hai.',
        cardExplanationEnglish: 'type(result) inspects NoneType class.',
        visualTarget: 'type(result)',
        visualLabel: 'type()',
        visualSublabel: 'Detects NoneType',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(result)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'NoneType'> print hota hai.",
        speechEnglish: "Console displays <class 'NoneType'>.",
        cardExplanationHinglish: "Output: <class 'NoneType'>.",
        cardExplanationEnglish: "Output: <class 'NoneType'>.",
        visualTarget: "<class 'NoneType'>",
        visualLabel: "<class 'NoneType'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'NoneType'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'NoneType'>",
        outputLine: "<class 'NoneType'>"
      }
    ],
    hints: [
      { level: 1, name: 'None Keyword', badge: 'Step 1', hintHinglish: 'result = None likho bina quotes ke.', hintEnglish: 'Write result = None without quotes.' },
      { level: 2, name: 'Check Type', badge: 'Step 2', hintHinglish: 'type(result) use karo.', hintEnglish: 'Use type(result).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(result)) call karo.', hintEnglish: 'Call print(type(result)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'NoneType'>";
      const hasNone = /result\s*=\s*None/.test(code);
      return {
        passed: match && hasNone,
        message: match && hasNone ? '🎉 Great! NoneType data type verified.' : 'Assign None to result and print(type(result)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Understand Mutable vs Immutable ──
  {
    number: 12,
    title: 'Understand Mutable vs Immutable',
    problemStatement: 'Create a List and update its first element. Print the updated List.',
    instructions: 'List is mutable, so its elements can be changed in-place: numbers[0] = 99.',
    referenceCode: 'numbers = [10, 20, 30]\nnumbers[0] = 99\n\nprint(numbers)',
    starterCode: '# Mutate the first element of numbers list and print it\n',
    sampleInput: '',
    expectedOutput: '[99, 20, 30]',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial List: [10, 20, 30]',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Mutable ka matlab hai ki object ke andar values change ki ja sakti hain. List Mutable hoti hai.',
        speechEnglish: 'Mutable objects can be modified in-place after creation. Lists are mutable.',
        cardExplanationHinglish: 'numbers = [10, 20, 30] 3 elements ki list banata hai.',
        cardExplanationEnglish: 'numbers list initialized with 3 elements.',
        visualTarget: 'numbers = [10, 20, 30]',
        visualLabel: 'List',
        visualSublabel: '[10, 20, 30]',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'numbers = [10, 20, 30]'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'In-Place Mutation: numbers[0] = 99',
        conceptKey: 'numbers',
        speechHinglish: 'numbers[0] index zero wale first element 10 ko 99 mein change kar deta hai.',
        speechEnglish: 'numbers[0] = 99 updates the first element at index 0 from 10 to 99 in-place.',
        cardExplanationHinglish: 'Index 0 update hokar 99 ho jata hai.',
        cardExplanationEnglish: 'Element at index 0 becomes 99.',
        visualTarget: 'numbers[0] = 99',
        visualLabel: 'Mutation',
        visualSublabel: 'Index 0 -> 99',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'numbers[0] = 99'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par updated list [99, 20, 30] print hoti hai.',
        speechEnglish: 'Console displays the updated list [99, 20, 30].',
        cardExplanationHinglish: 'Output: [99, 20, 30].',
        cardExplanationEnglish: 'Output: [99, 20, 30].',
        visualTarget: '[99, 20, 30]',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: '[99, 20, 30]',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'print(numbers)',
        outputLine: '[99, 20, 30]'
      }
    ],
    hints: [
      { level: 1, name: 'List', badge: 'Step 1', hintHinglish: 'numbers = [10, 20, 30] likho.', hintEnglish: 'Create numbers = [10, 20, 30].' },
      { level: 2, name: 'Index 0', badge: 'Step 2', hintHinglish: 'numbers[0] = 99 likhkar first element update karo.', hintEnglish: 'Update first element: numbers[0] = 99.' },
      { level: 3, name: 'Print List', badge: 'Step 3', hintHinglish: 'print(numbers) call karo.', hintEnglish: 'Print the updated list with print(numbers).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === '[99, 20, 30]';
      const hasMutation = /numbers\s*\[\s*0\s*\]\s*=\s*99/.test(code);
      return {
        passed: match && hasMutation,
        message: match && hasMutation ? '🎉 Superb! List mutability verified.' : 'Update the first element using numbers[0] = 99 and print(numbers).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q13: Convert String to Integer ──
  {
    number: 13,
    title: 'Convert String to Integer',
    problemStatement: 'Create a String containing "25", convert it to an Integer using int(), and print the converted value\'s Data Type.',
    instructions: 'int("25") converts the text string into numeric integer 25.',
    referenceCode: 'age_text = "25"\nage_number = int(age_text)\n\nprint(type(age_number))',
    starterCode: '# Convert "25" string to int and print type\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial String: "25"',
        conceptKey: 'string',
        speechHinglish: 'Pehle age_text mein "25" string store karte hain.',
        speechEnglish: 'First "25" is stored as a string in age_text.',
        cardExplanationHinglish: 'age_text = "25" string value hai.',
        cardExplanationEnglish: 'age_text = "25" is a string value.',
        visualTarget: 'age_text = "25"',
        visualLabel: 'str',
        visualSublabel: '"25"',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'age_text = "25"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'int(age_text) Conversion',
        conceptKey: 'numbers',
        speechHinglish: 'int(age_text) string "25" ko numeric Integer 25 mein convert karke age_number ko assign karta hai.',
        speechEnglish: 'int(age_text) converts string "25" into Integer 25 and stores it.',
        cardExplanationHinglish: 'int() function string se integer type conversion karta hai.',
        cardExplanationEnglish: 'int() converts string to integer.',
        visualTarget: 'int(age_text)',
        visualLabel: 'Conversion',
        visualSublabel: '"25" -> 25',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'int(age_text)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par converted value ka type <class 'int'> print hota hai.",
        speechEnglish: "Console displays the converted type <class 'int'>.",
        cardExplanationHinglish: "Output: <class 'int'>.",
        cardExplanationEnglish: "Output: <class 'int'>.",
        visualTarget: "<class 'int'>",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'int'>",
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'print(type(age_number))',
        outputLine: "<class 'int'>"
      }
    ],
    hints: [
      { level: 1, name: 'String Value', badge: 'Step 1', hintHinglish: 'age_text = "25" likho.', hintEnglish: 'Write age_text = "25".' },
      { level: 2, name: 'int() Conversion', badge: 'Step 2', hintHinglish: 'age_number = int(age_text) likho.', hintEnglish: 'Convert using age_number = int(age_text).' },
      { level: 3, name: 'Print Type', badge: 'Step 3', hintHinglish: 'print(type(age_number)) call karo.', hintEnglish: 'Call print(type(age_number)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>";
      const hasIntConversion = /int\s*\(\s*age_text\s*\)/.test(code) || /int\s*\(\s*["']25["']\s*\)/.test(code);
      return {
        passed: match && hasIntConversion,
        message: match && hasIntConversion ? '🎉 Fantastic! String to Integer conversion verified.' : 'Convert "25" to int using int() and print(type(age_number)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q14: Convert Integer to String ──
  {
    number: 14,
    title: 'Convert Integer to String',
    problemStatement: 'Create an Integer 100, convert it to a String using str(), and print the converted value\'s Data Type.',
    instructions: 'str(100) converts numeric 100 into text string "100".',
    referenceCode: 'number = 100\ntext_number = str(number)\n\nprint(type(text_number))',
    starterCode: '# Convert 100 int to str and print type\n',
    sampleInput: '',
    expectedOutput: "<class 'str'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Integer: 100',
        conceptKey: 'numbers',
        speechHinglish: 'number variable mein 100 integer assign karte hain.',
        speechEnglish: 'Initial integer 100 is assigned to number.',
        cardExplanationHinglish: 'number = 100 integer value hai.',
        cardExplanationEnglish: 'number = 100 is an integer value.',
        visualTarget: 'number = 100',
        visualLabel: 'int',
        visualSublabel: '100',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'number = 100'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'str(number) Conversion',
        conceptKey: 'string',
        speechHinglish: 'str(number) integer 100 ko string "100" mein convert kar deta hai.',
        speechEnglish: 'str(number) converts integer 100 into string "100".',
        cardExplanationHinglish: 'str() function string representation banata hai.',
        cardExplanationEnglish: 'str() converts value to string format.',
        visualTarget: 'str(number)',
        visualLabel: 'Conversion',
        visualSublabel: '100 -> "100"',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'str(number)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par converted type <class 'str'> print hota hai.",
        speechEnglish: "Console displays <class 'str'>.",
        cardExplanationHinglish: "Output: <class 'str'>.",
        cardExplanationEnglish: "Output: <class 'str'>.",
        visualTarget: "<class 'str'>",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'str'>",
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'print(type(text_number))',
        outputLine: "<class 'str'>"
      }
    ],
    hints: [
      { level: 1, name: 'Integer Value', badge: 'Step 1', hintHinglish: 'number = 100 likho.', hintEnglish: 'Write number = 100.' },
      { level: 2, name: 'str() Conversion', badge: 'Step 2', hintHinglish: 'text_number = str(number) likho.', hintEnglish: 'Convert using text_number = str(number).' },
      { level: 3, name: 'Print Type', badge: 'Step 3', hintHinglish: 'print(type(text_number)) call karo.', hintEnglish: 'Call print(type(text_number)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'str'>";
      const hasStrConversion = /str\s*\(\s*number\s*\)/.test(code) || /str\s*\(\s*100\s*\)/.test(code);
      return {
        passed: match && hasStrConversion,
        message: match && hasStrConversion ? '🎉 Excellent! Integer to String conversion verified.' : 'Convert 100 to str using str() and print(type(text_number)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q15: Student Data Types Mini Project ──
  {
    number: 15,
    title: 'Student Data Types Mini Project',
    problemStatement: 'Create a Student Profile with Name (String), Age (Integer), Percentage (Float), Enrollment (Boolean), and Skills (List). Print the Data Type of each Variable.',
    instructions: 'Combine all learned data types in a real-world Student Profile and display each type.',
    referenceCode: 'student_name = "Alex"\nstudent_age = 12\npercentage = 92.5\nis_enrolled = True\nskills = ["Python", "SQL", "Excel"]\n\nprint(type(student_name))\nprint(type(student_age))\nprint(type(percentage))\nprint(type(is_enrolled))\nprint(type(skills))',
    starterCode: '# Student Profile Mini Project with 5 data types\n',
    sampleInput: '',
    expectedOutput: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n<class 'list'>",
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: '5 Core Student Data Types',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Student Profile mein Name String hai, Age Integer hai, Percentage Float hai, Enrollment Boolean hai aur Skills List hai.',
        speechEnglish: 'Student Profile utilizes String, Integer, Float, Boolean, and List for real-world modeling.',
        cardExplanationHinglish: 'Har field ke liye suitable data type select kiya gaya hai.',
        cardExplanationEnglish: 'Appropriate data types chosen for each attribute.',
        visualTarget: '5 Student Fields',
        visualLabel: 'Data Types Mini Project',
        visualSublabel: 'str, int, float, bool, list',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Check Types in Sequence',
        conceptKey: 'print',
        speechHinglish: 'type() call karke hum saare 5 variables ke classes inspect karte hain.',
        speechEnglish: 'We inspect the data types of all 5 variables in order.',
        cardExplanationHinglish: 'Sequential type() calls print each class type.',
        cardExplanationEnglish: 'Sequential type() calls print each class type.',
        visualTarget: '5 type() calls',
        visualLabel: 'Inspection',
        visualSublabel: '5 calls',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 7,
        highlightToken: 'print(type(student_name))'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par str, int, float, bool aur list paanchon classes clean order mein display hoti hain.",
        speechEnglish: "Console displays all 5 classes in clean order: str, int, float, bool, list.",
        cardExplanationHinglish: "Output: str, int, float, bool, list.",
        cardExplanationEnglish: "Output: str, int, float, bool, list.",
        visualTarget: "5 Classes",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n<class 'list'>",
        isConsoleVisible: true,
        highlightLine: 11,
        highlightToken: 'print(type(skills))',
        outputLine: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n<class 'list'>"
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'student_name, student_age, percentage, is_enrolled, skills variables banayein.', hintEnglish: 'Create variables for name (str), age (int), percentage (float), is_enrolled (bool), skills (list).' },
      { level: 2, name: 'type() Calls', badge: 'Step 2', hintHinglish: 'Har variable par type() lagayein.', hintEnglish: 'Wrap each in type().' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: '5 alag lines par print(type(...)) call karein.', hintEnglish: 'Print all five on separate lines.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n<class 'list'>";
      return {
        passed: match,
        message: match ? '🎉 Congratulations! Student Data Types Mini Project completed successfully!' : 'Create 5 variables (str, int, float, bool, list) and print the type of each.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 09: type() Function — 9 COMPLETE QUESTION CONFIGS
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_09_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Check the Type of a Number ──
  {
    number: 1,
    title: 'Check the Type of a Number',
    problemStatement: 'Create a Variable named number, store the Integer 50, and display its Data Type using type().',
    instructions: 'type() is a built-in Python function that inspects and returns the runtime class of any value or variable.',
    referenceCode: 'number = 50\nprint(type(number))',
    starterCode: '# Create number = 50 and print its type using type(number)\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Variable & Value: number = 50',
        conceptKey: 'numbers',
        speechHinglish: 'number ek Variable hai aur 50 uski Integer Value hai.',
        speechEnglish: 'number is a variable and 50 is its integer value.',
        cardExplanationHinglish: 'number = 50 memory mein 50 store karta hai.',
        cardExplanationEnglish: 'number = 50 stores 50 in memory.',
        visualTarget: 'number = 50',
        visualLabel: 'number = 50',
        visualSublabel: 'Integer variable',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'number = 50'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Built-in type() Function',
        conceptKey: 'print',
        speechHinglish: 'type() built-in function number variable ko argument ke roop mein leta hai aur int class return karta hai.',
        speechEnglish: 'The type() function takes number as an argument and returns class int.',
        cardExplanationHinglish: 'type(number) argument ki class object return karta hai.',
        cardExplanationEnglish: 'type(number) returns the class object of the argument.',
        visualTarget: 'type(number)',
        visualLabel: 'type()',
        visualSublabel: 'Function & Argument',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(number)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'int'> display hota hai.",
        speechEnglish: "Console displays <class 'int'>.",
        cardExplanationHinglish: "Output: <class 'int'>.",
        cardExplanationEnglish: "Output: <class 'int'>.",
        visualTarget: "<class 'int'>",
        visualLabel: "<class 'int'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'int'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'int'>",
        outputLine: "<class 'int'>"
      }
    ],
    hints: [
      { level: 1, name: 'Variable', badge: 'Step 1', hintHinglish: 'number = 50 likho.', hintEnglish: 'Write number = 50.' },
      { level: 2, name: 'type() Argument', badge: 'Step 2', hintHinglish: 'type() ke andar number pass karo: type(number).', hintEnglish: 'Pass number into type(): type(number).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(number)) call karo.', hintEnglish: 'Call print(type(number)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>";
      const hasType = /type\s*\(\s*number\s*\)/.test(code);
      return {
        passed: match && hasType,
        message: match && hasType ? '🎉 Excellent! type() function and integer class verified.' : 'Assign 50 to number and print(type(number)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Check the Type of a Decimal Number ──
  {
    number: 2,
    title: 'Check the Type of a Decimal Number',
    problemStatement: 'Create a Variable price containing 99.50. Display its Data Type.',
    instructions: 'Floats represent decimal numbers. type(price) detects the float class.',
    referenceCode: 'price = 99.50\nprint(type(price))',
    starterCode: '# Create price = 99.50 and print its type\n',
    sampleInput: '',
    expectedOutput: "<class 'float'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Decimal Value: price = 99.50',
        conceptKey: 'numbers',
        speechHinglish: '99.50 ek Float value hai jise Python numeric float ke roop mein store karta hai.',
        speechEnglish: '99.50 is a float value stored as floating-point numeric.',
        cardExplanationHinglish: 'price = 99.50 decimal value store karta hai.',
        cardExplanationEnglish: 'price = 99.50 holds a float value.',
        visualTarget: 'price = 99.50',
        visualLabel: 'price = 99.50',
        visualSublabel: 'Decimal number',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'price = 99.50'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Detect float with type()',
        conceptKey: 'print',
        speechHinglish: 'Jab hum type(price) call karte hain, hume float type milta hai.',
        speechEnglish: 'When we call type(price), Python identifies the float type.',
        cardExplanationHinglish: 'type(price) float class detect karta hai.',
        cardExplanationEnglish: 'type(price) detects class float.',
        visualTarget: 'type(price)',
        visualLabel: 'type()',
        visualSublabel: 'Detects float',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type(price)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par <class 'float'> display hota hai.",
        speechEnglish: "Console prints <class 'float'>.",
        cardExplanationHinglish: "Output: <class 'float'>.",
        cardExplanationEnglish: "Output: <class 'float'>.",
        visualTarget: "<class 'float'>",
        visualLabel: "<class 'float'>",
        visualSublabel: 'Console output',
        consoleOutput: "<class 'float'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'float'>",
        outputLine: "<class 'float'>"
      }
    ],
    hints: [
      { level: 1, name: 'Float Variable', badge: 'Step 1', hintHinglish: 'price = 99.50 likho.', hintEnglish: 'Write price = 99.50.' },
      { level: 2, name: 'type() Call', badge: 'Step 2', hintHinglish: 'type(price) likho.', hintEnglish: 'Use type(price).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(price)) call karo.', hintEnglish: 'Call print(type(price)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'float'>";
      const hasType = /type\s*\(\s*price\s*\)/.test(code);
      return {
        passed: match && hasType,
        message: match && hasType ? '🎉 Superb! Float type inspection verified.' : 'Assign 99.50 to price and print(type(price)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Check Types Without Variables ──
  {
    number: 3,
    title: 'Check Types Without Variables',
    problemStatement: 'Use type() directly on an Integer, String and Boolean without creating Variables.',
    instructions: 'You can pass raw literals directly to type(): type(100), type("Python"), type(True).',
    referenceCode: 'print(type(100))\nprint(type("Python"))\nprint(type(True))',
    starterCode: '# Call type() directly on literals 100, "Python", True\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>\n<class 'str'>\n<class 'bool'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Direct Literal Arguments',
        conceptKey: 'numbers',
        speechHinglish: 'type() use karne ke liye Variable banana zaroori nahi hai. Hum direct literals bhi pass kar sakte hain.',
        speechEnglish: 'You do not need variables to use type(); raw literals can be passed directly.',
        cardExplanationHinglish: 'type(100), type("Python"), type(True) direct values inspect karte hain.',
        cardExplanationEnglish: 'Direct literals evaluated by type().',
        visualTarget: 'Direct Literals',
        visualLabel: 'No Variables',
        visualSublabel: 'Direct arguments',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'type(100)'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Evaluate 3 Calls',
        conceptKey: 'print',
        speechHinglish: 'Python har literal ka exact runtime type sequentially return karta hai.',
        speechEnglish: 'Python returns the exact class for each literal sequentially.',
        cardExplanationHinglish: 'int, str, aur bool teeno return hote hain.',
        cardExplanationEnglish: 'int, str, and bool are returned in order.',
        visualTarget: 'Sequential evaluation',
        visualLabel: 'type() calls',
        visualSublabel: '3 evaluations',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'type("Python")'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par teeno types separate lines par display hote hain.",
        speechEnglish: "Console displays all three classes on separate lines.",
        cardExplanationHinglish: "Output: int, str, bool.",
        cardExplanationEnglish: "Output: int, str, bool.",
        visualTarget: "3 Types",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'int'>\n<class 'str'>\n<class 'bool'>",
        isConsoleVisible: true,
        highlightLine: 3,
        highlightToken: 'type(True)',
        outputLine: "<class 'int'>\n<class 'str'>\n<class 'bool'>"
      }
    ],
    hints: [
      { level: 1, name: 'Direct Calls', badge: 'Step 1', hintHinglish: 'print(type(100)) likho bina variable ke.', hintEnglish: 'Write print(type(100)) directly.' },
      { level: 2, name: 'String & Bool', badge: 'Step 2', hintHinglish: 'print(type("Python")) aur print(type(True)) likho.', hintEnglish: 'Add print(type("Python")) and print(type(True)).' },
      { level: 3, name: 'Run', badge: 'Step 3', hintHinglish: 'Code execute karke teeno types verify karo.', hintEnglish: 'Execute and verify all 3 output lines.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>\n<class 'str'>\n<class 'bool'>";
      return {
        passed: match,
        message: match ? '🎉 Fantastic! Checking types without variables verified.' : 'Call type() directly on 100, "Python", True and print each.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Check Collection Data Types ──
  {
    number: 4,
    title: 'Check Collection Data Types',
    problemStatement: 'Create a List, Tuple, Set and Dictionary. Display the Data Type of each Collection.',
    instructions: 'Collections store multiple items in different structures: [], (), {}, {key: value}.',
    referenceCode: 'fruits = ["Apple", "Mango"]\nnumbers = (10, 20)\nunique_numbers = {1, 2, 3}\nstudent = {"name": "Alex"}\n\nprint(type(fruits))\nprint(type(numbers))\nprint(type(unique_numbers))\nprint(type(student))',
    starterCode: '# Create 4 collections and print their types\n',
    sampleInput: '',
    expectedOutput: "<class 'list'>\n<class 'tuple'>\n<class 'set'>\n<class 'dict'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Four Collection Types',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Python mein collections alag-alag structures hoti hain: List, Tuple, Set aur Dictionary.',
        speechEnglish: 'Python features distinct collection structures: List, Tuple, Set, and Dictionary.',
        cardExplanationHinglish: 'Char collections: [], (), {}, {k: v}.',
        cardExplanationEnglish: 'Four collections: [], (), {}, {k: v}.',
        visualTarget: '4 Collections',
        visualLabel: 'Collections',
        visualSublabel: 'list, tuple, set, dict',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'fruits = ["Apple", "Mango"]'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Inspect Collection Classes',
        conceptKey: 'print',
        speechHinglish: 'type() har collection variable ka exact class identify karta hai.',
        speechEnglish: 'type() identifies the exact class for each collection.',
        cardExplanationHinglish: 'list, tuple, set, dict classes sequentially inspect hoti hain.',
        cardExplanationEnglish: 'list, tuple, set, dict classes inspected sequentially.',
        visualTarget: 'type calls',
        visualLabel: 'type()',
        visualSublabel: '4 collection calls',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 6,
        highlightToken: 'print(type(fruits))'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par chaaron collection types list, tuple, set aur dict display hote hain.",
        speechEnglish: "Console displays all 4 collection types: list, tuple, set, dict.",
        cardExplanationHinglish: "Output: list, tuple, set, dict.",
        cardExplanationEnglish: "Output: list, tuple, set, dict.",
        visualTarget: "4 Classes",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'list'>\n<class 'tuple'>\n<class 'set'>\n<class 'dict'>",
        isConsoleVisible: true,
        highlightLine: 9,
        highlightToken: 'print(type(student))',
        outputLine: "<class 'list'>\n<class 'tuple'>\n<class 'set'>\n<class 'dict'>"
      }
    ],
    hints: [
      { level: 1, name: 'Collections', badge: 'Step 1', hintHinglish: 'List [], Tuple (), Set {}, Dict {"k": v} banayein.', hintEnglish: 'Create list [], tuple (), set {}, dict {"k": v}.' },
      { level: 2, name: 'type() Calls', badge: 'Step 2', hintHinglish: 'Har variable par type() lagao.', hintEnglish: 'Call type() on each collection variable.' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'Chaar alag lines par print karein.', hintEnglish: 'Print all four types on separate lines.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'list'>\n<class 'tuple'>\n<class 'set'>\n<class 'dict'>";
      return {
        passed: match,
        message: match ? '🎉 Great job! Collection types identified accurately.' : 'Create a list, tuple, set, dict and print the type of each.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Detect Type After Reassignment ──
  {
    number: 5,
    title: 'Detect Type After Reassignment',
    problemStatement: 'Create a Variable data containing Integer 100. Print its Type. Then assign the String "Python" to the same Variable and print its Type again.',
    instructions: 'Python variables are dynamically typed; their type changes when reassigned to a different data type.',
    referenceCode: 'data = 100\nprint(type(data))\n\ndata = "Python"\nprint(type(data))',
    starterCode: '# Check type before and after reassignment\n',
    sampleInput: '',
    expectedOutput: "<class 'int'>\n<class 'str'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Initial Type: int',
        conceptKey: 'numbers',
        speechHinglish: 'Pehle data variable mein 100 integer hai, isliye pehla type int aata hai.',
        speechEnglish: 'Initially data holds integer 100, so first type is int.',
        cardExplanationHinglish: 'data = 100 se type int detect hota hai.',
        cardExplanationEnglish: 'data = 100 produces class int.',
        visualTarget: 'data = 100',
        visualLabel: 'int',
        visualSublabel: 'Initial type',
        consoleOutput: "<class 'int'>",
        isConsoleVisible: true,
        highlightLine: 1,
        highlightToken: 'data = 100'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Reassignment to str',
        conceptKey: 'string',
        speechHinglish: 'Reassignment ke baad data "Python" string ko point karta hai, isliye type str ho jata hai.',
        speechEnglish: 'After reassignment, data references string "Python", so its type becomes str.',
        cardExplanationHinglish: 'Dynamic Typing: variable ka type reassignment se change ho gaya.',
        cardExplanationEnglish: 'Dynamic typing: variable type changes upon reassignment.',
        visualTarget: 'data = "Python"',
        visualLabel: 'str',
        visualSublabel: 'Reassigned type',
        consoleOutput: "<class 'int'>\n<class 'str'>",
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'data = "Python"'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par pehle <class 'int'> aur fir <class 'str'> display hota hai.",
        speechEnglish: "Console displays <class 'int'> followed by <class 'str'>.",
        cardExplanationHinglish: "Output: int then str.",
        cardExplanationEnglish: "Output: int then str.",
        visualTarget: "int then str",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'int'>\n<class 'str'>",
        isConsoleVisible: true,
        highlightLine: 5,
        highlightToken: 'print(type(data))',
        outputLine: "<class 'int'>\n<class 'str'>"
      }
    ],
    hints: [
      { level: 1, name: 'First Assignment', badge: 'Step 1', hintHinglish: 'data = 100 likhkar print(type(data)) karo.', hintEnglish: 'Write data = 100 and print(type(data)).' },
      { level: 2, name: 'Reassign', badge: 'Step 2', hintHinglish: 'data = "Python" likho.', hintEnglish: 'Reassign data = "Python".' },
      { level: 3, name: 'Second Type', badge: 'Step 3', hintHinglish: 'Dobara print(type(data)) karo.', hintEnglish: 'Call print(type(data)) again.' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>\n<class 'str'>";
      const hasTwoAssigns = (code.match(/\bdata\s*=/g) || []).length >= 2;
      return {
        passed: match && hasTwoAssigns,
        message: match && hasTwoAssigns ? '🎉 Awesome! Type change after reassignment verified.' : 'Assign 100 to data, print type, reassign "Python" and print type again.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Compare Two Data Types ──
  {
    number: 6,
    title: 'Compare Two Data Types',
    problemStatement: 'Create two Variables containing Integer values. Use type() to check whether both have the same Data Type.',
    instructions: 'Use the equality operator == to compare two type() return values: type(a) == type(b).',
    referenceCode: 'a = 10\nb = 20\n\nprint(type(a) == type(b))',
    starterCode: '# Compare types of a = 10 and b = 20\n',
    sampleInput: '',
    expectedOutput: 'True',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Two Integer Variables',
        conceptKey: 'numbers',
        speechHinglish: 'a aur b dono Integer values 10 aur 20 hold karte hain.',
        speechEnglish: 'Both a and b hold integer values 10 and 20.',
        cardExplanationHinglish: 'a = 10 aur b = 20 dono int hain.',
        cardExplanationEnglish: 'Both a = 10 and b = 20 are integers.',
        visualTarget: 'a=10, b=20',
        visualLabel: 'Both int',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'a = 10'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'type(a) == type(b) Comparison',
        conceptKey: 'numbers',
        speechHinglish: '== operator dono ke returned type objects (int aur int) compare karta hai jo equal hain, isliye True aata hai.',
        speechEnglish: '== compares both type objects; since both are int, it evaluates to True.',
        cardExplanationHinglish: 'type(a) == type(b) evaluates to True.',
        cardExplanationEnglish: 'type(a) == type(b) evaluates to True.',
        visualTarget: 'type(a) == type(b)',
        visualLabel: '== Comparison',
        visualSublabel: 'int == int -> True',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 4,
        highlightToken: 'type(a) == type(b)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par Boolean True print hota hai.',
        speechEnglish: 'Console displays Boolean True.',
        cardExplanationHinglish: 'Output: True.',
        cardExplanationEnglish: 'Output: True.',
        visualTarget: 'True',
        visualLabel: 'True',
        visualSublabel: 'Boolean output',
        consoleOutput: 'True',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'True',
        outputLine: 'True'
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'a = 10 aur b = 20 likho.', hintEnglish: 'Create a = 10 and b = 20.' },
      { level: 2, name: 'Comparison', badge: 'Step 2', hintHinglish: 'type(a) == type(b) likho.', hintEnglish: 'Compare with type(a) == type(b).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(a) == type(b)) call karo.', hintEnglish: 'Print with print(type(a) == type(b)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'True';
      const hasComparison = /type\s*\(\s*a\s*\)\s*==\s*type\s*\(\s*b\s*\)/.test(code) || /type\s*\(\s*b\s*\)\s*==\s*type\s*\(\s*a\s*\)/.test(code);
      return {
        passed: match && hasComparison,
        message: match && hasComparison ? '🎉 Brilliant! Type equality comparison verified.' : 'Compare types with print(type(a) == type(b)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Find Different Data Types ──
  {
    number: 7,
    title: 'Find Different Data Types',
    problemStatement: 'Create one Integer and one String containing the same digits. Check whether their Types are equal.',
    instructions: 'Even though digits look the same, int 100 and str "100" have different types, so comparison yields False.',
    referenceCode: 'number = 100\ntext = "100"\n\nprint(type(number) == type(text))',
    starterCode: '# Compare types of number = 100 vs text = "100"\n',
    sampleInput: '',
    expectedOutput: 'False',
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'int vs str',
        conceptKey: 'numbers',
        speechHinglish: 'number Integer 100 hai aur text String "100" hai.',
        speechEnglish: 'number is integer 100 and text is string "100".',
        cardExplanationHinglish: 'Dono ke types different hain: int vs str.',
        cardExplanationEnglish: 'Different types: int vs str.',
        visualTarget: '100 vs "100"',
        visualLabel: 'int vs str',
        visualSublabel: 'Different classes',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'number = 100'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Compare: int == str',
        conceptKey: 'numbers',
        speechHinglish: 'type(number) int hai aur type(text) str hai. int == str False return karta hai.',
        speechEnglish: 'int == str evaluates to False.',
        cardExplanationHinglish: 'type(number) == type(text) returns False.',
        cardExplanationEnglish: 'type(number) == type(text) returns False.',
        visualTarget: 'type(number) == type(text)',
        visualLabel: '== Comparison',
        visualSublabel: 'int == str -> False',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 4,
        highlightToken: 'type(number) == type(text)'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par Boolean False print hota hai.',
        speechEnglish: 'Console displays Boolean False.',
        cardExplanationHinglish: 'Output: False.',
        cardExplanationEnglish: 'Output: False.',
        visualTarget: 'False',
        visualLabel: 'False',
        visualSublabel: 'Boolean output',
        consoleOutput: 'False',
        isConsoleVisible: true,
        highlightLine: 4,
        highlightToken: 'False',
        outputLine: 'False'
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'number = 100 aur text = "100" likho.', hintEnglish: 'Create number = 100 and text = "100".' },
      { level: 2, name: 'Compare', badge: 'Step 2', hintHinglish: 'type(number) == type(text) compare karo.', hintEnglish: 'Compare with type(number) == type(text).' },
      { level: 3, name: 'Print', badge: 'Step 3', hintHinglish: 'print(type(number) == type(text)) call karo.', hintEnglish: 'Call print(type(number) == type(text)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === 'False';
      const hasComparison = /type\s*\(\s*number\s*\)\s*==\s*type\s*\(\s*text\s*\)/.test(code) || /type\s*\(\s*text\s*\)\s*==\s*type\s*\(\s*number\s*\)/.test(code);
      return {
        passed: match && hasComparison,
        message: match && hasComparison ? '🎉 Perfect! Different types comparison verified.' : 'Compare types with print(type(number) == type(text)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Fix a Type Checking Mistake ──
  {
    number: 8,
    title: 'Fix a Type Checking Mistake',
    problemStatement: 'A student wants to display the Data Type of a Variable, but the Code prints its Value instead. Correct the Code using type().',
    instructions: 'print(age) displays the value 15. Fix it to print(type(age)) to display its Data Type.',
    referenceCode: 'age = 15\nprint(type(age))',
    starterCode: 'age = 15\nprint(age)',
    sampleInput: '',
    expectedOutput: "<class 'int'>",
    isPersonalized: false,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Value vs Type Mistake',
        conceptKey: 'numbers',
        speechHinglish: 'Student ne print(age) likha jo value 15 display karta hai, data type nahi.',
        speechEnglish: 'The student wrote print(age), which displays the value 15 rather than its data type.',
        cardExplanationHinglish: 'print(age) value print karta hai, type nahi.',
        cardExplanationEnglish: 'print(age) prints value, not type.',
        visualTarget: 'print(age)',
        visualLabel: 'Value vs Type',
        visualSublabel: 'Prints 15, not type',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(age)'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Wrap with type()',
        conceptKey: 'print',
        speechHinglish: 'print(type(age)) likhne se age ka exact data type class int return hota hai.',
        speechEnglish: 'Wrapping age in type() correctly inspects the data type.',
        cardExplanationHinglish: 'print(type(age)) type inspect karta hai.',
        cardExplanationEnglish: 'print(type(age)) inspects the data type.',
        visualTarget: 'print(type(age))',
        visualLabel: 'Fixed Code',
        visualSublabel: 'type() added',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 2,
        highlightToken: 'print(type(age))'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: "Console par ab <class 'int'> print hota hai.",
        speechEnglish: "Console now displays <class 'int'>.",
        cardExplanationHinglish: "Output: <class 'int'>.",
        cardExplanationEnglish: "Output: <class 'int'>.",
        visualTarget: "<class 'int'>",
        visualLabel: "Output",
        visualSublabel: "Console output",
        consoleOutput: "<class 'int'>",
        isConsoleVisible: true,
        highlightLine: 2,
        highlightToken: "<class 'int'>",
        outputLine: "<class 'int'>"
      }
    ],
    hints: [
      { level: 1, name: 'Identify Bug', badge: 'Step 1', hintHinglish: 'print(age) sirf 15 print karega.', hintEnglish: 'print(age) only displays 15.' },
      { level: 2, name: 'Add type()', badge: 'Step 2', hintHinglish: 'age ko type() ke andar pass karo: type(age).', hintEnglish: 'Pass age into type(): type(age).' },
      { level: 3, name: 'Fix', badge: 'Step 3', hintHinglish: 'print(type(age)) likho.', hintEnglish: 'Write print(type(age)).' }
    ],
    validate: (code: string, stdout: string) => {
      const normalized = stdout.replace(/\r\n/g, '\n').trim();
      const match = normalized === "<class 'int'>";
      const hasType = /print\s*\(\s*type\s*\(\s*age\s*\)\s*\)/.test(code);
      return {
        passed: match && hasType,
        message: match && hasType ? '🎉 Excellent! Debugging type checking mistake mastered.' : 'Fix print(age) to print(type(age)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Student Data Type Inspector Mini Project ──
  {
    number: 9,
    title: 'Student Data Type Inspector Mini Project',
    problemStatement: 'Build a simple Student Data Type Inspector. Store Name, Age, Percentage, Enrollment, Skills. Display the Data Type of each Variable with a suitable label.',
    instructions: 'Display each type with a label: Name Type: <class \'str\'>, Age Type: <class \'int\'>, etc.',
    referenceCode: 'student_name = "Alex"\nstudent_age = 12\npercentage = 92.5\nis_enrolled = True\nskills = ["Python", "SQL"]\n\nprint("Name Type:", type(student_name))\nprint("Age Type:", type(student_age))\nprint("Percentage Type:", type(percentage))\nprint("Enrollment Type:", type(is_enrolled))\nprint("Skills Type:", type(skills))',
    starterCode: '# Student Data Type Inspector Mini Project\n',
    sampleInput: '',
    expectedOutput: "Name Type: <class 'str'>\nAge Type: <class 'int'>\nPercentage Type: <class 'float'>\nEnrollment Type: <class 'bool'>\nSkills Type: <class 'list'>",
    isPersonalized: true,
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Project Data Model',
        conceptKey: 'multiple_lines',
        speechHinglish: 'Inspector mini project mein Name, Age, Percentage, Enrollment aur Skills variables banate hain.',
        speechEnglish: 'We define five attributes in the Student Data Type Inspector.',
        cardExplanationHinglish: '5 variables: str, int, float, bool, list.',
        cardExplanationEnglish: '5 variables: str, int, float, bool, list.',
        visualTarget: '5 Student Variables',
        visualLabel: 'Data Model',
        visualSublabel: '5 attributes',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        highlightToken: 'student_name = "Alex"'
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Labeled print(type()) Calls',
        conceptKey: 'print',
        speechHinglish: 'Har field label ke saath type() function call karke clean report generate karte hain.',
        speechEnglish: 'Each field label is printed alongside its inspected type.',
        cardExplanationHinglish: 'print("Name Type:", type(student_name)) label + type print karta hai.',
        cardExplanationEnglish: 'Prints label alongside type() inspection.',
        visualTarget: 'Labeled prints',
        visualLabel: 'Inspection Report',
        visualSublabel: 'Label + type()',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 7,
        highlightToken: 'print("Name Type:", type(student_name))'
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'Console screen par 5 labeled data types clean report format mein print ho jate hain.',
        speechEnglish: 'The complete structured Student Data Type Inspector report is printed on the console.',
        cardExplanationHinglish: 'Output: Full labeled Data Type Inspector report.',
        cardExplanationEnglish: 'Output: Full labeled Data Type Inspector report.',
        visualTarget: 'Inspector Report',
        visualLabel: 'Output',
        visualSublabel: 'Console output',
        consoleOutput: "Name Type: <class 'str'>\nAge Type: <class 'int'>\nPercentage Type: <class 'float'>\nEnrollment Type: <class 'bool'>\nSkills Type: <class 'list'>",
        isConsoleVisible: true,
        highlightLine: 11,
        highlightToken: 'print("Skills Type:", type(skills))',
        outputLine: "Name Type: <class 'str'>\nAge Type: <class 'int'>\nPercentage Type: <class 'float'>\nEnrollment Type: <class 'bool'>\nSkills Type: <class 'list'>"
      }
    ],
    hints: [
      { level: 1, name: 'Variables', badge: 'Step 1', hintHinglish: 'student_name, student_age, percentage, is_enrolled, skills variables banayein.', hintEnglish: 'Create 5 variables for name, age, percentage, is_enrolled, skills.' },
      { level: 2, name: 'Labels', badge: 'Step 2', hintHinglish: 'print("Name Type:", type(student_name)) ki tarah labels lagayein.', hintEnglish: 'Print with labels: print("Name Type:", type(student_name)), etc.' },
      { level: 3, name: 'Run', badge: 'Step 3', hintHinglish: 'Paanchon lines verify karein.', hintEnglish: 'Verify all 5 output lines.' }
    ],
    validate: (code: string, stdout: string) => {
      const lower = stdout.toLowerCase();
      const hasName = lower.includes('name type:') && stdout.includes("<class 'str'>");
      const hasAge = lower.includes('age type:') && stdout.includes("<class 'int'>");
      const hasPerc = lower.includes('percentage type:') && stdout.includes("<class 'float'>");
      const hasEnr = lower.includes('enrollment type:') && stdout.includes("<class 'bool'>");
      const hasSkills = lower.includes('skills type:') && stdout.includes("<class 'list'>");
      const passed = hasName && hasAge && hasPerc && hasEnr && hasSkills;
      return {
        passed,
        message: passed ? '🎉 Congratulations! Student Data Type Inspector Mini Project completed successfully!' : 'Print all 5 labeled types: Name, Age, Percentage, Enrollment, Skills.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 11: Taking User Input — input() (12 Questions)
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_11_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Your First User Input ──
  {
    number: 1,
    title: 'Your First User Input',
    problemStatement: 'Write a Python program that asks the user to enter their name and then displays the entered name.',
    instructions: 'Use input("Enter your name: ") to take user input into a variable name, and print(name) to display it.',
    referenceCode: 'name = input("Enter your name: ")\nprint(name)',
    starterCode: '# Write a Python program that asks the user to enter their name and displays it\n',
    sampleInput: 'Alex',
    expectedOutput: 'Enter your name: Alex\nAlex',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'input() Function',
        conceptKey: 'print',
        speechHinglish: 'input() Python ka built-in function hai jo user se keyboard typing input lene ke liye use hota hai.',
        speechEnglish: 'input() is a built-in Python function used to capture user keyboard input.',
        cardExplanationHinglish: 'input("Enter your name: ") user se information leta hai.',
        cardExplanationEnglish: 'input("Enter your name: ") captures information from the user.',
        visualTarget: 'input',
        visualLabel: 'input() Function',
        visualSublabel: 'User se input lene wala function',
        consoleOutput: 'Enter your name: ',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Input Prompt',
        conceptKey: 'string',
        speechHinglish: 'Quotes ke andar likha text prompt hota hai jo user ko batata hai ki kya type karna hai.',
        speechEnglish: 'The text inside quotes is the prompt message instructing the user what to enter.',
        cardExplanationHinglish: '"Enter your name: " screen par prompt ki tarah display hota hai.',
        cardExplanationEnglish: '"Enter your name: " is displayed on screen as a guide for the user.',
        visualTarget: 'prompt',
        visualLabel: 'Prompt String',
        visualSublabel: 'Guidance text for user',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Variable Assignment',
        conceptKey: 'arguments',
        speechHinglish: 'User jab Alex enter karke Enter press karta hai, to string "Alex" name variable me store hoti hai.',
        speechEnglish: 'When the user types Alex and presses Enter, the string "Alex" is assigned to the variable name.',
        cardExplanationHinglish: 'name = input(...) se typed value name me save ho jati hai.',
        cardExplanationEnglish: 'name = input(...) saves the typed string into the variable name.',
        visualTarget: 'name',
        visualLabel: 'name = "Alex"',
        visualSublabel: 'String saved in variable',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Input',
        conceptKey: 'output',
        speechHinglish: 'print(name) se variable me stored user ka name console screen par print ho jata hai.',
        speechEnglish: 'print(name) prints the stored user name onto the console screen.',
        cardExplanationHinglish: 'print(name) execution complete karke Alex print karta hai.',
        cardExplanationEnglish: 'print(name) completes execution and prints Alex.',
        visualTarget: 'print',
        visualLabel: 'Output',
        visualSublabel: 'Alex displayed',
        consoleOutput: 'Enter your name: Alex\nAlex',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'User se input lene ke liye input() function use kijiye.',
        hintEnglish: 'Use the input() function to take input from the user.'
      },
      {
        level: 2,
        name: 'Assignment Hint',
        badge: 'Hint 2',
        hintHinglish: 'input("Enter your name: ") ko name variable me assign karein: name = input(...)',
        hintEnglish: 'Assign input("Enter your name: ") to the variable name.'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'Agle line par print(name) likhiye.',
        hintEnglish: 'On the next line write print(name).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = /input\s*\(/.test(code);
      const hasPrint = /print\s*\(/.test(code);
      const passed = hasInput && hasPrint && (stdout.includes('Alex') || stdout.trim().length > 0);
      return {
        passed,
        message: passed ? '🎉 Excellent! You took user input and displayed it successfully!' : 'Make sure to use input("Enter your name: ") and print(name).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Understand the Input Prompt ──
  {
    number: 2,
    title: 'Understand the Input Prompt',
    problemStatement: 'Ask the user to enter their favorite color. Display a message containing the entered color.',
    instructions: 'Use color = input("Enter your favorite color: ") and print("Favorite Color:", color).',
    referenceCode: 'color = input("Enter your favorite color: ")\nprint("Favorite Color:", color)',
    starterCode: '# Ask the user to enter their favorite color and display it\n',
    sampleInput: 'Blue',
    expectedOutput: 'Enter your favorite color: Blue\nFavorite Color: Blue',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Prompt Message',
        conceptKey: 'string',
        speechHinglish: 'Prompt message user ko batata hai ki kya enter karna hai. Yahan favorite color poocha ja raha hai.',
        speechEnglish: 'A prompt message instructs the user what to enter. Here it asks for favorite color.',
        cardExplanationHinglish: 'Prompt user ko clear instructions deta hai.',
        cardExplanationEnglish: 'The prompt gives clear instructions to the user.',
        visualTarget: 'prompt',
        visualLabel: 'Prompt',
        visualSublabel: 'Enter your favorite color: ',
        consoleOutput: 'Enter your favorite color: ',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Capture Input',
        conceptKey: 'print',
        speechHinglish: 'User ne Blue enter kiya. input() is text ko string ke roop me return karta hai.',
        speechEnglish: 'User enters Blue. input() returns this text as a string.',
        cardExplanationHinglish: 'input() returns the string "Blue".',
        cardExplanationEnglish: 'input() returns the string "Blue".',
        visualTarget: 'input',
        visualLabel: 'Input Value',
        visualSublabel: '"Blue"',
        consoleOutput: 'Enter your favorite color: Blue',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Save to color',
        conceptKey: 'arguments',
        speechHinglish: 'color variable me string "Blue" store ho jati hai.',
        speechEnglish: 'The variable color now stores the string "Blue".',
        cardExplanationHinglish: 'color = "Blue" memory me create hota hai.',
        cardExplanationEnglish: 'color = "Blue" is stored in memory.',
        visualTarget: 'color',
        visualLabel: 'color = "Blue"',
        visualSublabel: 'Variable updated',
        consoleOutput: 'Enter your favorite color: Blue',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Formatted Output',
        conceptKey: 'output',
        speechHinglish: 'print("Favorite Color:", color) message ke saath color display karta hai.',
        speechEnglish: 'print("Favorite Color:", color) displays the message alongside the color.',
        cardExplanationHinglish: 'Favorite Color: Blue screen par display hota hai.',
        cardExplanationEnglish: 'Favorite Color: Blue is displayed on the screen.',
        visualTarget: 'print',
        visualLabel: 'Output',
        visualSublabel: 'Favorite Color: Blue',
        consoleOutput: 'Enter your favorite color: Blue\nFavorite Color: Blue',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'color = input("Enter your favorite color: ") likhiye.',
        hintEnglish: 'Write color = input("Enter your favorite color: ").'
      },
      {
        level: 2,
        name: 'Display Hint',
        badge: 'Hint 2',
        hintHinglish: 'print("Favorite Color:", color) use karke display karein.',
        hintEnglish: 'Use print("Favorite Color:", color) to display the message.'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'Comma se separated text aur variable ko print() me pass karein.',
        hintEnglish: 'Pass the comma-separated text and variable into print().'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = /input\s*\(/.test(code);
      const hasColor = /color/i.test(code);
      const passed = hasInput && hasColor && /Favorite Color:/i.test(stdout);
      return {
        passed,
        message: passed ? '🎉 Great job! You successfully used an input prompt and displayed the result!' : 'Ensure you ask for favorite color and print with "Favorite Color:".'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Input Always Returns a String ──
  {
    number: 3,
    title: 'Input Always Returns a String',
    problemStatement: 'Ask the user to enter their age. Display the Data Type of the received Input.',
    instructions: 'Take age = input("Enter your age: ") and print(type(age)). Notice that even numbers return str.',
    referenceCode: 'age = input("Enter your age: ")\nprint(type(age))',
    starterCode: '# Ask user for age and display its data type using type()\n',
    sampleInput: '12',
    expectedOutput: 'Enter your age: 12\n<class \'str\'>',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Numeric Input',
        conceptKey: 'string',
        speechHinglish: 'User ne 12 type kiya. Dekhte hain Python ise kis data type me receive karta hai.',
        speechEnglish: 'The user typed 12. Let us see how Python receives this value.',
        cardExplanationHinglish: 'User enters 12 in the console.',
        cardExplanationEnglish: 'User enters 12 in the console.',
        visualTarget: 'input',
        visualLabel: 'Input Value',
        visualSublabel: '12',
        consoleOutput: 'Enter your age: 12',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'String Data Type',
        conceptKey: 'print',
        speechHinglish: 'Python ka input() function hamesha String return karta hai, number nahi!',
        speechEnglish: 'Python input() always returns a String, never a number directly!',
        cardExplanationHinglish: 'Returned value is string "12", not integer 12.',
        cardExplanationEnglish: 'Returned value is string "12", not integer 12.',
        visualTarget: 'str',
        visualLabel: '"12" (str)',
        visualSublabel: 'Always string',
        consoleOutput: 'Enter your age: 12',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'type(age)',
        conceptKey: 'arguments',
        speechHinglish: 'type(age) function se hum check karte hain ki age variable ka actual data type kya hai.',
        speechEnglish: 'We use type(age) to inspect the runtime data type of the age variable.',
        cardExplanationHinglish: 'type(age) detects the data type.',
        cardExplanationEnglish: 'type(age) detects the data type.',
        visualTarget: 'type',
        visualLabel: 'type(age)',
        visualSublabel: 'Detects str',
        consoleOutput: 'Enter your age: 12',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: '<class \'str\'>',
        conceptKey: 'output',
        speechHinglish: 'Terminal par <class "str"> print hota hai, jo prove karta hai ki input hamesha string deta hai.',
        speechEnglish: '<class "str"> prints on the terminal, confirming that input() returns string.',
        cardExplanationHinglish: '<class \'str\'> is printed to the console.',
        cardExplanationEnglish: '<class \'str\'> is printed to the console.',
        visualTarget: 'output',
        visualLabel: 'Result',
        visualSublabel: '<class \'str\'>',
        consoleOutput: 'Enter your age: 12\n<class \'str\'>',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'age = input("Enter your age: ") likhkar input lein.',
        hintEnglish: 'Write age = input("Enter your age: ") to get input.'
      },
      {
        level: 2,
        name: 'Type Check Hint',
        badge: 'Hint 2',
        hintHinglish: 'type(age) ko print() ke andar pass kijiye.',
        hintEnglish: 'Pass type(age) inside print().'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(type(age)) likhiye.',
        hintEnglish: 'Write print(type(age)).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = /input\s*\(/.test(code);
      const hasType = /type\s*\(/.test(code);
      const passed = hasInput && hasType && stdout.includes('str');
      return {
        passed,
        message: passed ? '🎉 Wonderful! You verified that input() always returns a String!' : 'Check input() and print(type(age)). Output must show <class \'str\'>.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Take Two Inputs ──
  {
    number: 4,
    title: 'Take Two Inputs',
    problemStatement: 'Ask the user to enter their first name and last name. Display both together.',
    instructions: 'Use two input statements sequentially: first_name = input(...) and last_name = input(...), then print(first_name, last_name).',
    referenceCode: 'first_name = input("Enter first name: ")\nlast_name = input("Enter last name: ")\n\nprint(first_name, last_name)',
    starterCode: '# Take first name and last name from user, then print both\n',
    sampleInput: 'Alex\nKumar',
    expectedOutput: 'Enter first name: Alex\nEnter last name: Kumar\nAlex Kumar',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'First Input',
        conceptKey: 'string',
        speechHinglish: 'Pehle input() se user se first name manga aur first_name variable me store kiya.',
        speechEnglish: 'The first input() asks for first name and stores it in first_name.',
        cardExplanationHinglish: 'first_name = input("Enter first name: ") executes first.',
        cardExplanationEnglish: 'first_name = input("Enter first name: ") executes first.',
        visualTarget: 'input1',
        visualLabel: 'first_name',
        visualSublabel: '"Alex"',
        consoleOutput: 'Enter first name: Alex',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Second Input',
        conceptKey: 'string',
        speechHinglish: 'Pehla input complete hone ke baad Python second input mangta hai: last_name.',
        speechEnglish: 'After the first input completes, Python asks for the second input: last_name.',
        cardExplanationHinglish: 'last_name = input("Enter last name: ") executes second.',
        cardExplanationEnglish: 'last_name = input("Enter last name: ") executes second.',
        visualTarget: 'input2',
        visualLabel: 'last_name',
        visualSublabel: '"Kumar"',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Two Variables in Memory',
        conceptKey: 'arguments',
        speechHinglish: 'Ab memory me dono variables first_name aur last_name separately saved hain.',
        speechEnglish: 'Now both variables first_name and last_name are saved separately in memory.',
        cardExplanationHinglish: 'Both names are held in distinct variables.',
        cardExplanationEnglish: 'Both names are held in distinct variables.',
        visualTarget: 'vars',
        visualLabel: 'Memory State',
        visualSublabel: 'Alex & Kumar',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Combined Output',
        conceptKey: 'output',
        speechHinglish: 'print(first_name, last_name) dono values ko space ke saath ek hi line par display karta hai.',
        speechEnglish: 'print(first_name, last_name) prints both values on one line separated by space.',
        cardExplanationHinglish: 'Alex Kumar is printed.',
        cardExplanationEnglish: 'Alex Kumar is printed.',
        visualTarget: 'print',
        visualLabel: 'Output',
        visualSublabel: 'Alex Kumar',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar\nAlex Kumar',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Do alag input() statements likhiye alag lines par.',
        hintEnglish: 'Write two separate input() statements on separate lines.'
      },
      {
        level: 2,
        name: 'Variables Hint',
        badge: 'Hint 2',
        hintHinglish: 'Pehla first_name me aur doosra last_name me store karein.',
        hintEnglish: 'Store the first in first_name and the second in last_name.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(first_name, last_name) se dono ko print karein.',
        hintEnglish: 'Print both using print(first_name, last_name).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const inputs = (code.match(/input\s*\(/g) || []).length;
      const passed = inputs >= 2 && stdout.includes('Alex') && stdout.includes('Kumar');
      return {
        passed,
        message: passed ? '🎉 Superb! You handled multiple sequential inputs like a pro!' : 'Ensure you call input() twice and print both names together.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Create a Personalized Welcome Message ──
  {
    number: 5,
    title: 'Create a Personalized Welcome Message',
    problemStatement: 'Ask the user to enter their name and display a personalized welcome message using String concatenation.',
    instructions: 'Take name = input("Enter your name: ") and print("Welcome, " + name + "!").',
    referenceCode: 'name = input("Enter your name: ")\nprint("Welcome, " + name + "!")',
    starterCode: '# Ask for name and print \'Welcome, <name>!\' using concatenation\n',
    sampleInput: 'Alex',
    expectedOutput: 'Enter your name: Alex\nWelcome, Alex!',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Input Name',
        conceptKey: 'string',
        speechHinglish: 'User se name input liya gaya aur name variable me store ho gaya.',
        speechEnglish: 'User enters their name, stored in the variable name.',
        cardExplanationHinglish: 'name = input("Enter your name: ") captures user name.',
        cardExplanationEnglish: 'name = input("Enter your name: ") captures user name.',
        visualTarget: 'name',
        visualLabel: 'name = "Alex"',
        visualSublabel: 'Captured string',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'String Concatenation',
        conceptKey: 'print',
        speechHinglish: '+ operator do strings ko aapas me jodta hai. Isse String Concatenation kehte hain.',
        speechEnglish: '+ operator joins two or more strings together, called String Concatenation.',
        cardExplanationHinglish: '"Welcome, " + name + "!" joins the pieces into one sentence.',
        cardExplanationEnglish: '"Welcome, " + name + "!" joins the pieces into one sentence.',
        visualTarget: 'concat',
        visualLabel: '+ Operator',
        visualSublabel: 'Concatenation',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Dynamic Message',
        conceptKey: 'arguments',
        speechHinglish: 'User chahe koi bhi name enter kare, welcome message automatically personalize ho jata hai.',
        speechEnglish: 'No matter what name the user enters, the welcome message personalizes automatically.',
        cardExplanationHinglish: 'Result becomes "Welcome, Alex!".',
        cardExplanationEnglish: 'Result becomes "Welcome, Alex!".',
        visualTarget: 'msg',
        visualLabel: 'Personalized String',
        visualSublabel: '"Welcome, Alex!"',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Message',
        conceptKey: 'output',
        speechHinglish: 'print() se customized welcome message console par display ho jata hai.',
        speechEnglish: 'print() displays the customized welcome message on the console.',
        cardExplanationHinglish: 'Welcome, Alex! is displayed.',
        cardExplanationEnglish: 'Welcome, Alex! is displayed.',
        visualTarget: 'print',
        visualLabel: 'Output',
        visualSublabel: 'Welcome, Alex!',
        consoleOutput: 'Enter your name: Alex\nWelcome, Alex!',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = input("Enter your name: ") likhiye.',
        hintEnglish: 'Write name = input("Enter your name: ").'
      },
      {
        level: 2,
        name: 'Concatenation Hint',
        badge: 'Hint 2',
        hintHinglish: 'Strings ko jodne ke liye + operator use karein: "Welcome, " + name + "!"',
        hintEnglish: 'Use + to concatenate: "Welcome, " + name + "!"'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Welcome, " + name + "!") likhkar run karein.',
        hintEnglish: 'Write print("Welcome, " + name + "!") and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = /input\s*\(/.test(code);
      const hasConcat = /\+/.test(code);
      const passed = hasInput && (hasConcat || /f["']/.test(code)) && stdout.includes('Welcome,');
      return {
        passed,
        message: passed ? '🎉 Awesome! You created an interactive personalized welcome message!' : 'Make sure to concatenate "Welcome, " + name + "!".'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Understand Empty Input ──
  {
    number: 6,
    title: 'Understand Empty Input',
    problemStatement: 'Ask the user to enter a nickname. If the user presses Enter without typing anything, display the received Input and its Data Type.',
    instructions: 'Use nickname = input("Enter nickname: "), print("Nickname:", nickname), and print(type(nickname)).',
    referenceCode: 'nickname = input("Enter nickname: ")\n\nprint("Nickname:", nickname)\nprint(type(nickname))',
    starterCode: '# Ask for nickname and display the value and its type\n',
    sampleInput: '',
    expectedOutput: 'Enter nickname: \nNickname: \n<class \'str\'>',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Empty Input',
        conceptKey: 'string',
        speechHinglish: 'Agar user bina kuch type kiye direct Enter dabaye, to input() khali string "" return karta hai.',
        speechEnglish: 'If the user presses Enter without typing anything, input() returns an empty string "".',
        cardExplanationHinglish: 'Empty string "" has length zero.',
        cardExplanationEnglish: 'Empty string "" has length zero.',
        visualTarget: 'empty',
        visualLabel: 'Empty String',
        visualSublabel: '""',
        consoleOutput: 'Enter nickname: ',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'nickname Variable',
        conceptKey: 'arguments',
        speechHinglish: 'nickname variable me empty string store hoti hai. Ye None nahi hai, balki valid string hai.',
        speechEnglish: 'nickname stores an empty string. It is not None; it is a valid string of length zero.',
        cardExplanationHinglish: 'nickname = "" in memory.',
        cardExplanationEnglish: 'nickname = "" in memory.',
        visualTarget: 'var',
        visualLabel: 'nickname = ""',
        visualSublabel: 'Valid empty string',
        consoleOutput: 'Enter nickname: \nNickname: ',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Check Data Type',
        conceptKey: 'print',
        speechHinglish: 'type(nickname) check karne par pata chalta hai ki iska data type ab bhi str hi hai.',
        speechEnglish: 'Checking type(nickname) reveals that its data type is still str.',
        cardExplanationHinglish: 'Empty strings are also instances of str.',
        cardExplanationEnglish: 'Empty strings are also instances of str.',
        visualTarget: 'type',
        visualLabel: 'type(nickname)',
        visualSublabel: 'Returns str',
        consoleOutput: 'Enter nickname: \nNickname: ',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Output Result',
        conceptKey: 'output',
        speechHinglish: 'Console par Nickname: ke aage kuch nahi aur agle line par <class "str"> display hota hai.',
        speechEnglish: 'The console displays Nickname: with nothing after it, followed by <class "str">.',
        cardExplanationHinglish: '<class \'str\'> is displayed.',
        cardExplanationEnglish: '<class \'str\'> is displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'str',
        consoleOutput: 'Enter nickname: \nNickname: \n<class \'str\'>',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'nickname = input("Enter nickname: ") likhiye.',
        hintEnglish: 'Write nickname = input("Enter nickname: ").'
      },
      {
        level: 2,
        name: 'Print Value Hint',
        badge: 'Hint 2',
        hintHinglish: 'print("Nickname:", nickname) se value display karein.',
        hintEnglish: 'Display the value using print("Nickname:", nickname).'
      },
      {
        level: 3,
        name: 'Print Type Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(type(nickname)) se type display karein.',
        hintEnglish: 'Display the data type using print(type(nickname)).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = /input\s*\(/.test(code);
      const hasType = /type\s*\(/.test(code);
      const passed = hasInput && hasType && stdout.includes('str');
      return {
        passed,
        message: passed ? '🎉 Brilliant! You correctly handled empty user input and its string type!' : 'Ensure you print the nickname and its type using print(type(nickname)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Convert User Input to Integer ──
  {
    number: 7,
    title: 'Convert User Input to Integer',
    problemStatement: 'Ask the user to enter their age. Convert the received Input to an Integer and display its Data Type.',
    instructions: 'Use age = int(input("Enter your age: ")) and print(type(age)).',
    referenceCode: 'age = int(input("Enter your age: "))\nprint(type(age))',
    starterCode: '# Take age input, convert to int, and print its type\n',
    sampleInput: '12',
    expectedOutput: 'Enter your age: 12\n<class \'int\'>',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Nested Calls',
        conceptKey: 'string',
        speechHinglish: 'Yahan int() ke andar input() hai. Pehle inner input() execute hoga aur "12" string lega.',
        speechEnglish: 'Here input() is inside int(). First the inner input() runs and gets string "12".',
        cardExplanationHinglish: 'Inner input() executes first.',
        cardExplanationEnglish: 'Inner input() executes first.',
        visualTarget: 'nested',
        visualLabel: 'int(input(...))',
        visualSublabel: 'Nested function call',
        consoleOutput: 'Enter your age: 12',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Type Conversion with int()',
        conceptKey: 'print',
        speechHinglish: 'int() function string "12" ko mathematical integer 12 me convert kar deta hai.',
        speechEnglish: 'int() function converts the string "12" into mathematical integer 12.',
        cardExplanationHinglish: '"12" becomes integer 12.',
        cardExplanationEnglish: '"12" becomes integer 12.',
        visualTarget: 'int',
        visualLabel: 'int("12")',
        visualSublabel: 'Converts to 12',
        consoleOutput: 'Enter your age: 12',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Stored as int',
        conceptKey: 'arguments',
        speechHinglish: 'age variable me ab converted integer 12 store hota hai.',
        speechEnglish: 'The age variable now stores the converted integer 12.',
        cardExplanationHinglish: 'age = 12 (int) in memory.',
        cardExplanationEnglish: 'age = 12 (int) in memory.',
        visualTarget: 'age',
        visualLabel: 'age = 12',
        visualSublabel: 'Integer stored',
        consoleOutput: 'Enter your age: 12',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: '<class \'int\'>',
        conceptKey: 'output',
        speechHinglish: 'type(age) ab <class "int"> print karta hai! Ab hum age par calculation kar sakte hain.',
        speechEnglish: 'type(age) now outputs <class "int">! Now we can perform math on age.',
        cardExplanationHinglish: '<class \'int\'> is printed.',
        cardExplanationEnglish: '<class \'int\'> is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '<class \'int\'>',
        consoleOutput: 'Enter your age: 12\n<class \'int\'>',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'input() ko int() ke brackets ke andar wrap kijiye.',
        hintEnglish: 'Wrap input() inside the parentheses of int().'
      },
      {
        level: 2,
        name: 'Conversion Hint',
        badge: 'Hint 2',
        hintHinglish: 'age = int(input("Enter your age: ")) likhiye.',
        hintEnglish: 'Write age = int(input("Enter your age: ")).'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(type(age)) se data type display karein.',
        hintEnglish: 'Display the data type with print(type(age)).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInt = /int\s*\(\s*input/.test(code) || (/int\s*\(/.test(code) && /input\s*\(/.test(code));
      const hasType = /type\s*\(/.test(code);
      const passed = hasInt && hasType && stdout.includes('int');
      return {
        passed,
        message: passed ? '🎉 Outstanding! You converted user input to an Integer successfully!' : 'Convert input to int using int(input(...)) and print its type.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Convert User Input to Float ──
  {
    number: 8,
    title: 'Convert User Input to Float',
    problemStatement: 'Ask the user to enter a product price. Convert the Input to Float and display its Data Type.',
    instructions: 'Use price = float(input("Enter price: ")) and print(type(price)).',
    referenceCode: 'price = float(input("Enter price: "))\nprint(type(price))',
    starterCode: '# Take price input, convert to float, and print its type\n',
    sampleInput: '49.99',
    expectedOutput: 'Enter price: 49.99\n<class \'float\'>',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Decimal Input',
        conceptKey: 'string',
        speechHinglish: 'User ne 49.99 decimal price enter kiya, jo input() se string ke roop me mila.',
        speechEnglish: 'User entered decimal price 49.99, received as a string by input().',
        cardExplanationHinglish: '"49.99" is received as a string.',
        cardExplanationEnglish: '"49.99" is received as a string.',
        visualTarget: 'input',
        visualLabel: 'Input Value',
        visualSublabel: '"49.99"',
        consoleOutput: 'Enter price: 49.99',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'float() Function',
        conceptKey: 'print',
        speechHinglish: 'Decimal numbers ke liye hum float() function se type conversion karte hain.',
        speechEnglish: 'For decimal numbers, we use float() for type conversion.',
        cardExplanationHinglish: 'float("49.99") converts string to decimal number.',
        cardExplanationEnglish: 'float("49.99") converts string to decimal number.',
        visualTarget: 'float',
        visualLabel: 'float("49.99")',
        visualSublabel: 'Converts to 49.99',
        consoleOutput: 'Enter price: 49.99',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'price as Float',
        conceptKey: 'arguments',
        speechHinglish: 'price variable me numeric float value 49.99 assign ho jati hai.',
        speechEnglish: 'The price variable now holds the numeric float 49.99.',
        cardExplanationHinglish: 'price = 49.99 (float).',
        cardExplanationEnglish: 'price = 49.99 (float).',
        visualTarget: 'price',
        visualLabel: 'price = 49.99',
        visualSublabel: 'Float stored',
        consoleOutput: 'Enter price: 49.99',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: '<class \'float\'>',
        conceptKey: 'output',
        speechHinglish: 'type(price) console par <class "float"> print karta hai.',
        speechEnglish: 'type(price) prints <class "float"> onto the console.',
        cardExplanationHinglish: '<class \'float\'> is displayed.',
        cardExplanationEnglish: '<class \'float\'> is displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '<class \'float\'>',
        consoleOutput: 'Enter price: 49.99\n<class \'float\'>',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Decimal number ke liye float() function use kijiye.',
        hintEnglish: 'Use float() for decimal numbers.'
      },
      {
        level: 2,
        name: 'Conversion Hint',
        badge: 'Hint 2',
        hintHinglish: 'price = float(input("Enter price: ")) likhiye.',
        hintEnglish: 'Write price = float(input("Enter price: ")).'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(type(price)) se type display kijiye.',
        hintEnglish: 'Display the type with print(type(price)).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFloat = /float\s*\(\s*input/.test(code) || (/float\s*\(/.test(code) && /input\s*\(/.test(code));
      const hasType = /type\s*\(/.test(code);
      const passed = hasFloat && hasType && stdout.includes('float');
      return {
        passed,
        message: passed ? '🎉 Fantastic! You converted decimal user input to Float successfully!' : 'Convert input using float(input(...)) and print its type.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Add Two Numbers from User Input ──
  {
    number: 9,
    title: 'Add Two Numbers from User Input',
    problemStatement: 'Ask the user to enter two whole Numbers. Add them and display their Sum.',
    instructions: 'Convert both inputs to int, calculate total = a + b, and print("Sum:", total).',
    referenceCode: 'a = int(input("Enter first number: "))\nb = int(input("Enter second number: "))\n\ntotal = a + b\nprint("Sum:", total)',
    starterCode: '# Take two integer inputs and print their sum\\n',
    sampleInput: '10\n20',
    expectedOutput: 'Enter first number: 10\nEnter second number: 20\nSum: 30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two Integer Inputs',
        conceptKey: 'string',
        speechHinglish: 'Dono inputs ko int() se convert karke a me 10 aur b me 20 assign kiya gaya.',
        speechEnglish: 'Both inputs are converted to int: a gets 10 and b gets 20.',
        cardExplanationHinglish: 'a = 10, b = 20 are both integers.',
        cardExplanationEnglish: 'a = 10, b = 20 are both integers.',
        visualTarget: 'inputs',
        visualLabel: 'a = 10, b = 20',
        visualSublabel: 'Integers ready',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Numeric Addition',
        conceptKey: 'print',
        speechHinglish: 'Ab + operator numeric addition karega: 10 + 20 hokar 30 banta hai.',
        speechEnglish: 'Now + performs numeric addition: 10 + 20 produces 30.',
        cardExplanationHinglish: '10 + 20 = 30 mathematically.',
        cardExplanationEnglish: '10 + 20 = 30 mathematically.',
        visualTarget: 'calc',
        visualLabel: 'a + b',
        visualSublabel: '10 + 20 = 30',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'total Variable',
        conceptKey: 'arguments',
        speechHinglish: 'total variable me result 30 store ho jata hai.',
        speechEnglish: 'The total variable stores the computed result 30.',
        cardExplanationHinglish: 'total = 30 in memory.',
        cardExplanationEnglish: 'total = 30 in memory.',
        visualTarget: 'total',
        visualLabel: 'total = 30',
        visualSublabel: 'Stored sum',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Sum',
        conceptKey: 'output',
        speechHinglish: 'print("Sum:", total) se screen par Sum: 30 print ho jata hai.',
        speechEnglish: 'print("Sum:", total) prints Sum: 30 on the console.',
        cardExplanationHinglish: 'Sum: 30 is printed.',
        cardExplanationEnglish: 'Sum: 30 is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Sum: 30',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20\nSum: 30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Dono inputs ko int(input(...)) se integer banayein.',
        hintEnglish: 'Convert both inputs to integers using int(input(...)).'
      },
      {
        level: 2,
        name: 'Sum Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = a + b likhkar dono ko add kijiye.',
        hintEnglish: 'Write total = a + b to add them.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Sum:", total) se result display karein.',
        hintEnglish: 'Display result with print("Sum:", total).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInt = (code.match(/int\s*\(/g) || []).length >= 2;
      const hasSum = /\+/.test(code);
      const passed = hasInt && hasSum && (stdout.includes('30') || stdout.includes('Sum:'));
      return {
        passed,
        message: passed ? '🎉 Great job! You added two user-entered numbers successfully!' : 'Ensure both inputs are converted with int() and print their sum.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Fix the Input Addition Mistake ──
  {
    number: 10,
    title: 'Fix the Input Addition Mistake',
    problemStatement: 'A student wants to add two Numbers, but the program joins the entered Strings instead. Fix the Code so that actual numeric Addition happens.',
    instructions: 'Convert both a and b to int using int(input(...)) so that 10 + 20 gives 30 instead of 1020.',
    referenceCode: 'a = int(input("Enter first number: "))\nb = int(input("Enter second number: "))\n\nprint(a + b)',
    starterCode: 'a = input("Enter first number: ")\nb = input("Enter second number: ")\n\nprint(a + b)',
    sampleInput: '10\n20',
    expectedOutput: 'Enter first number: 10\nEnter second number: 20\n30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'The Bug: String Join',
        conceptKey: 'string',
        speechHinglish: 'Kyunki input() string return karta hai, "10" + "20" concatenate hokar "1020" ban gaya tha!',
        speechEnglish: 'Because input() returns strings, "10" + "20" concatenated to produce "1020"!',
        cardExplanationHinglish: '"10" + "20" = "1020" string concatenation.',
        cardExplanationEnglish: '"10" + "20" = "1020" string concatenation.',
        visualTarget: 'bug',
        visualLabel: '"10" + "20"',
        visualSublabel: 'String concatenation',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20\n1020',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Fix with int()',
        conceptKey: 'print',
        speechHinglish: 'Ise fix karne ke liye humne dono input statements ke bahar int() laga diya.',
        speechEnglish: 'To fix this, we wrap both input calls inside int().',
        cardExplanationHinglish: 'a = int(input(...)) converts input to int.',
        cardExplanationEnglish: 'a = int(input(...)) converts input to int.',
        visualTarget: 'fix',
        visualLabel: 'int(input(...))',
        visualSublabel: 'Converts to integers',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Actual Math Addition',
        conceptKey: 'arguments',
        speechHinglish: 'Ab 10 aur 20 numbers hain, to 10 + 20 = 30 actual addition hota hai.',
        speechEnglish: 'Now 10 and 20 are numbers, so 10 + 20 = 30 is actual math.',
        cardExplanationHinglish: '10 + 20 = 30.',
        cardExplanationEnglish: '10 + 20 = 30.',
        visualTarget: 'math',
        visualLabel: '10 + 20',
        visualSublabel: '= 30',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Correct Output',
        conceptKey: 'output',
        speechHinglish: 'print(a + b) ab screen par 30 display karta hai. Bug successfully resolved!',
        speechEnglish: 'print(a + b) now prints 30 on screen. Bug solved!',
        cardExplanationHinglish: '30 is printed.',
        cardExplanationEnglish: '30 is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '30',
        consoleOutput: 'Enter first number: 10\nEnter second number: 20\n30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'input() ke bahar int() function lagaiye.',
        hintEnglish: 'Wrap input() inside int().'
      },
      {
        level: 2,
        name: 'Fix Hint',
        badge: 'Hint 2',
        hintHinglish: 'a = int(input("Enter first number: ")) aur b = int(input("Enter second number: ")) likhiye.',
        hintEnglish: 'Write a = int(input(...)) and b = int(input(...)).'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'Dono variables ko int banakar print(a + b) karein.',
        hintEnglish: 'Make both variables integers and print(a + b).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInt = /int\s*\(/.test(code);
      const passed = hasInt && stdout.includes('30') && !stdout.includes('1020');
      return {
        passed,
        message: passed ? '🎉 Excellent debugging! You converted strings to integers and fixed the bug!' : 'Wrap both inputs with int() so 10 + 20 gives 30.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Build a Student Registration Form ──
  {
    number: 11,
    title: 'Build a Student Registration Form',
    problemStatement: 'Create a Student Registration program that asks for: Student Name, Age, City, Course. Display a formatted registration summary.',
    instructions: 'Take 4 inputs (convert age to int), print "STUDENT REGISTRATION", and print each field formatted.',
    referenceCode: 'name = input("Enter name: ")\nage = int(input("Enter age: "))\ncity = input("Enter city: ")\ncourse = input("Enter course: ")\n\nprint("STUDENT REGISTRATION")\nprint("Name:", name)\nprint("Age:", age)\nprint("City:", city)\nprint("Course:", course)',
    starterCode: '# Build a Student Registration program\n',
    sampleInput: 'Alex\n12\nDelhi\nPython',
    expectedOutput: 'Enter name: Alex\nEnter age: 12\nEnter city: Delhi\nEnter course: Python\nSTUDENT REGISTRATION\nName: Alex\nAge: 12\nCity: Delhi\nCourse: Python',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Four Input Prompts',
        conceptKey: 'string',
        speechHinglish: 'User se name, age, city aur course sequentially input liye gaye.',
        speechEnglish: 'Four inputs are collected in sequence: name, age, city, and course.',
        cardExplanationHinglish: 'Sequentially collect all 4 student details.',
        cardExplanationEnglish: 'Sequentially collect all 4 student details.',
        visualTarget: 'inputs',
        visualLabel: '4 Inputs',
        visualSublabel: 'Name, Age, City, Course',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter city: Delhi\nEnter course: Python',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Proper Data Types',
        conceptKey: 'print',
        speechHinglish: 'Age ko int() se convert kiya, baaki fields strings ke form me store huin.',
        speechEnglish: 'Age is converted to int, while others remain strings.',
        cardExplanationHinglish: 'age is int, others are str.',
        cardExplanationEnglish: 'age is int, others are str.',
        visualTarget: 'types',
        visualLabel: 'age = int(...)',
        visualSublabel: 'Proper types',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter city: Delhi\nEnter course: Python',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Registration Header',
        conceptKey: 'arguments',
        speechHinglish: 'print("STUDENT REGISTRATION") se heading screen par display hoti hai.',
        speechEnglish: 'print("STUDENT REGISTRATION") prints the header on screen.',
        cardExplanationHinglish: 'STUDENT REGISTRATION header printed.',
        cardExplanationEnglish: 'STUDENT REGISTRATION header printed.',
        visualTarget: 'header',
        visualLabel: 'Header',
        visualSublabel: 'STUDENT REGISTRATION',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter city: Delhi\nEnter course: Python\nSTUDENT REGISTRATION',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Registration Summary',
        conceptKey: 'output',
        speechHinglish: 'Line by line Name, Age, City aur Course clean summary format me display ho gaya.',
        speechEnglish: 'Line by line Name, Age, City, and Course are displayed in a clean summary.',
        cardExplanationHinglish: 'Completed student registration summary is printed.',
        cardExplanationEnglish: 'Completed student registration summary is printed.',
        visualTarget: 'output',
        visualLabel: 'Summary',
        visualSublabel: 'All 4 fields',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter city: Delhi\nEnter course: Python\nSTUDENT REGISTRATION\nName: Alex\nAge: 12\nCity: Delhi\nCourse: Python',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Chaar input statements likhiye: name, age, city, course.',
        hintEnglish: 'Write four input statements: name, age, city, course.'
      },
      {
        level: 2,
        name: 'Age Conversion Hint',
        badge: 'Hint 2',
        hintHinglish: 'Age ko int(input("Enter age: ")) se convert kijiye.',
        hintEnglish: 'Convert age using int(input("Enter age: ")).'
      },
      {
        level: 3,
        name: 'Print Format Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("STUDENT REGISTRATION") ke baad Name:, Age:, City:, Course: print karein.',
        hintEnglish: 'Print STUDENT REGISTRATION followed by Name:, Age:, City:, Course:.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const inputs = (code.match(/input\s*\(/g) || []).length;
      const passed = inputs >= 4 && stdout.includes('STUDENT REGISTRATION') && stdout.includes('Name:') && stdout.includes('Age:');
      return {
        passed,
        message: passed ? '🎉 Bravo! You built a complete Student Registration form program!' : 'Collect 4 inputs (age as int) and print STUDENT REGISTRATION summary.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Interactive Shopping Bill Mini Project ──
  {
    number: 12,
    title: 'Interactive Shopping Bill Mini Project',
    problemStatement: 'Build a simple Shopping Bill program. Ask the user to enter Product Name, Product Price, Quantity. Calculate the Total Price and display the Bill.',
    instructions: 'Take product (str), price (float), quantity (int). Compute total = price * quantity and print the formatted bill.',
    referenceCode: 'product = input("Enter product: ")\nprice = float(input("Enter price: "))\nquantity = int(input("Enter quantity: "))\n\ntotal = price * quantity\n\nprint("SHOPPING BILL")\nprint("Product:", product)\nprint("Price:", price)\nprint("Quantity:", quantity)\nprint("Total:", total)',
    starterCode: '# Build an Interactive Shopping Bill program\n',
    sampleInput: 'Notebook\n50\n2',
    expectedOutput: 'Enter product: Notebook\nEnter price: 50\nEnter quantity: 2\nSHOPPING BILL\nProduct: Notebook\nPrice: 50.0\nQuantity: 2\nTotal: 100.0',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Product & Numeric Inputs',
        conceptKey: 'string',
        speechHinglish: 'User se product name, float price aur integer quantity input li gayi.',
        speechEnglish: 'Product name, float price, and integer quantity are collected from user.',
        cardExplanationHinglish: 'price is float, quantity is int.',
        cardExplanationEnglish: 'price is float, quantity is int.',
        visualTarget: 'inputs',
        visualLabel: '3 Inputs',
        visualSublabel: 'Notebook, 50.0, 2',
        consoleOutput: 'Enter product: Notebook\nEnter price: 50\nEnter quantity: 2',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Total Calculation',
        conceptKey: 'print',
        speechHinglish: 'total = price * quantity se multiplication calculate hua: 50.0 * 2 = 100.0.',
        speechEnglish: 'total = price * quantity multiplies 50.0 * 2 = 100.0.',
        cardExplanationHinglish: '50.0 * 2 = 100.0 total amount.',
        cardExplanationEnglish: '50.0 * 2 = 100.0 total amount.',
        visualTarget: 'calc',
        visualLabel: 'price * quantity',
        visualSublabel: '100.0',
        consoleOutput: 'Enter product: Notebook\nEnter price: 50\nEnter quantity: 2',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Bill Header',
        conceptKey: 'arguments',
        speechHinglish: 'print("SHOPPING BILL") se bill heading screen par print hui.',
        speechEnglish: 'print("SHOPPING BILL") prints the bill heading on screen.',
        cardExplanationHinglish: 'SHOPPING BILL header printed.',
        cardExplanationEnglish: 'SHOPPING BILL header printed.',
        visualTarget: 'header',
        visualLabel: 'Header',
        visualSublabel: 'SHOPPING BILL',
        consoleOutput: 'Enter product: Notebook\nEnter price: 50\nEnter quantity: 2\nSHOPPING BILL',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Complete Bill Receipt',
        conceptKey: 'output',
        speechHinglish: 'Product, Price, Quantity aur Total calculate hokar professional bill ban gaya!',
        speechEnglish: 'Product, Price, Quantity, and Total are printed as a professional bill!',
        cardExplanationHinglish: 'Complete Shopping Bill printed.',
        cardExplanationEnglish: 'Complete Shopping Bill printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Total: 100.0',
        consoleOutput: 'Enter product: Notebook\nEnter price: 50\nEnter quantity: 2\nSHOPPING BILL\nProduct: Notebook\nPrice: 50.0\nQuantity: 2\nTotal: 100.0',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Product ke liye input(), Price ke liye float(input()), aur Quantity ke liye int(input()) use karein.',
        hintEnglish: 'Use input() for product, float(input()) for price, int(input()) for quantity.'
      },
      {
        level: 2,
        name: 'Calculation Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = price * quantity likhkar multiply kijiye.',
        hintEnglish: 'Multiply using total = price * quantity.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("SHOPPING BILL"), print("Product:", product), print("Price:", price), print("Quantity:", quantity), print("Total:", total) print karein.',
        hintEnglish: 'Print SHOPPING BILL, Product, Price, Quantity, and Total.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFloat = /float\s*\(/.test(code);
      const hasInt = /int\s*\(/.test(code);
      const hasMult = /\*/.test(code);
      const passed = hasFloat && hasInt && hasMult && stdout.includes('SHOPPING BILL') && stdout.includes('Total:');
      return {
        passed,
        message: passed ? '🎉 Congratulations! You built an Interactive Shopping Bill Mini Project!' : 'Collect product, price (float), quantity (int), calculate total and print SHOPPING BILL.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 12: Printing User Input (8 Questions)
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_12_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Print Input Directly ──
  {
    number: 1,
    title: 'Print Input Directly',
    problemStatement: 'Write a program that asks the user to enter a word and immediately prints the entered word without storing it in a named Variable.',
    instructions: 'Use print(input("Enter a word: ")) directly without creating a named variable.',
    referenceCode: 'print(input("Enter a word: "))',
    starterCode: '# Ask the user to enter a word and print it directly without storing in a variable\n',
    sampleInput: 'Python',
    expectedOutput: 'Enter a word: Python\nPython',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Nested Calls',
        conceptKey: 'print',
        speechHinglish: 'Yahan print() ke andar direct input() likha hai. Isse Nested Function Call kehte hain.',
        speechEnglish: 'Here input() is placed directly inside print(). This is a Nested Function Call.',
        cardExplanationHinglish: 'print(input(...)) evaluates inner function first.',
        cardExplanationEnglish: 'print(input(...)) evaluates inner function first.',
        visualTarget: 'nested',
        visualLabel: 'print(input(...))',
        visualSublabel: 'Nested Call',
        consoleOutput: 'Enter a word: ',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Execute input()',
        conceptKey: 'string',
        speechHinglish: 'Python pehle inner input() ko execute karke user se word mangta hai.',
        speechEnglish: 'Python executes inner input() first, requesting a word from the user.',
        cardExplanationHinglish: 'User types "Python" into the console.',
        cardExplanationEnglish: 'User types "Python" into the console.',
        visualTarget: 'input',
        visualLabel: 'Input Value',
        visualSublabel: '"Python"',
        consoleOutput: 'Enter a word: Python',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Pass to print()',
        conceptKey: 'arguments',
        speechHinglish: 'input() ka return kiya hua word direct print() function ko argument ke roop me milta hai.',
        speechEnglish: 'The returned word from input() is passed directly to print() as an argument.',
        cardExplanationHinglish: 'No named variable is needed in memory.',
        cardExplanationEnglish: 'No named variable is needed in memory.',
        visualTarget: 'arg',
        visualLabel: 'Direct Argument',
        visualSublabel: '"Python" passed to print',
        consoleOutput: 'Enter a word: Python',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Immediate Output',
        conceptKey: 'output',
        speechHinglish: 'print() turant word ko screen par display kar deta hai.',
        speechEnglish: 'print() immediately displays the word on screen.',
        cardExplanationHinglish: 'Python is printed on the console.',
        cardExplanationEnglish: 'Python is printed on the console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Python',
        consoleOutput: 'Enter a word: Python\nPython',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'input() function ko print() ke brackets ke andar pass kijiye.',
        hintEnglish: 'Pass the input() function inside print() parentheses.'
      },
      {
        level: 2,
        name: 'Syntax Hint',
        badge: 'Hint 2',
        hintHinglish: 'print(input("Enter a word: ")) likhiye.',
        hintEnglish: 'Write print(input("Enter a word: ")).'
      },
      {
        level: 3,
        name: 'No Variable Hint',
        badge: 'Hint 3',
        hintHinglish: 'Koi variable banane ki zaroorat nahi hai, direct nest karein.',
        hintEnglish: 'No variable needed, just nest input inside print.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const isNested = /print\s*\(\s*input\s*\(/.test(code);
      const passed = isNested && (stdout.includes('Python') || stdout.trim().length > 0);
      return {
        passed,
        message: passed ? '🎉 Excellent! You printed input directly without saving to a variable!' : 'Use print(input("Enter a word: ")) directly.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Print Input with a Label ──
  {
    number: 2,
    title: 'Print Input with a Label',
    problemStatement: 'Ask the user to enter their name. Print it with the label Student Name:.',
    instructions: 'Store input in name, then print("Student Name:", name). Notice the default space separator.',
    referenceCode: 'name = input("Enter your name: ")\nprint("Student Name:", name)',
    starterCode: '# Ask for name and print with \'Student Name:\' label\n',
    sampleInput: 'Alex',
    expectedOutput: 'Enter your name: Alex\nStudent Name: Alex',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Input Name',
        conceptKey: 'string',
        speechHinglish: 'User se name input lekar name variable me assign kiya gaya.',
        speechEnglish: 'Name is captured from user and stored in the variable name.',
        cardExplanationHinglish: 'name = input("Enter your name: ") captures name.',
        cardExplanationEnglish: 'name = input("Enter your name: ") captures name.',
        visualTarget: 'input',
        visualLabel: 'name = "Alex"',
        visualSublabel: 'Stored in variable',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Label Argument',
        conceptKey: 'print',
        speechHinglish: 'print() me pehla argument label text "Student Name:" hai.',
        speechEnglish: 'The first argument in print() is the label text "Student Name:".',
        cardExplanationHinglish: '"Student Name:" is the text label.',
        cardExplanationEnglish: '"Student Name:" is the text label.',
        visualTarget: 'label',
        visualLabel: 'Label',
        visualSublabel: '"Student Name:"',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Comma Separator',
        conceptKey: 'arguments',
        speechHinglish: 'Comma lagane se Python dono values ke beech automatically ek space add karta hai.',
        speechEnglish: 'Using a comma automatically places a space between arguments in Python.',
        cardExplanationHinglish: 'Default space is inserted.',
        cardExplanationEnglish: 'Default space is inserted.',
        visualTarget: 'comma',
        visualLabel: 'Comma ,',
        visualSublabel: 'Adds default space',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Labeled Output',
        conceptKey: 'output',
        speechHinglish: 'Student Name: Alex screen par display ho jata hai.',
        speechEnglish: 'Student Name: Alex is displayed on screen.',
        cardExplanationHinglish: 'Output with label is printed.',
        cardExplanationEnglish: 'Output with label is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Student Name: Alex',
        consoleOutput: 'Enter your name: Alex\nStudent Name: Alex',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = input("Enter your name: ") likhiye.',
        hintEnglish: 'Write name = input("Enter your name: ").'
      },
      {
        level: 2,
        name: 'Print Hint',
        badge: 'Hint 2',
        hintHinglish: 'print("Student Name:", name) use karke label aur variable print karein.',
        hintEnglish: 'Use print("Student Name:", name) to print label and variable.'
      },
      {
        level: 3,
        name: 'Comma Hint',
        badge: 'Hint 3',
        hintHinglish: 'Label aur variable ke beech comma lagaiye.',
        hintEnglish: 'Put a comma between the label and variable.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = /input\s*\(/.test(code);
      const hasLabel = /Student Name:/i.test(code) || /Student Name:/i.test(stdout);
      const passed = hasInput && hasLabel && stdout.includes('Alex');
      return {
        passed,
        message: passed ? '🎉 Great job! You printed user input with a descriptive label!' : 'Print "Student Name:" followed by the name variable.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Print Two User Inputs ──
  {
    number: 3,
    title: 'Print Two User Inputs',
    problemStatement: 'Ask the user for their first name and last name. Display both on one line.',
    instructions: 'Take first_name and last_name with input(), then print(first_name, last_name).',
    referenceCode: 'first_name = input("Enter first name: ")\nlast_name = input("Enter last name: ")\n\nprint(first_name, last_name)',
    starterCode: '# Take first name and last name, print both together\n',
    sampleInput: 'Alex\nKumar',
    expectedOutput: 'Enter first name: Alex\nEnter last name: Kumar\nAlex Kumar',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Sequential Inputs',
        conceptKey: 'string',
        speechHinglish: 'Python pehle first name aur phir last name sequentially input leta hai.',
        speechEnglish: 'Python collects first name and then last name sequentially.',
        cardExplanationHinglish: 'Both names are captured one after another.',
        cardExplanationEnglish: 'Both names are captured one after another.',
        visualTarget: 'inputs',
        visualLabel: '2 Inputs',
        visualSublabel: 'Alex & Kumar',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Two Variables',
        conceptKey: 'arguments',
        speechHinglish: 'Dono values alag variables first_name aur last_name me store hoti hain.',
        speechEnglish: 'Both values are held in distinct variables: first_name and last_name.',
        cardExplanationHinglish: 'first_name = "Alex", last_name = "Kumar".',
        cardExplanationEnglish: 'first_name = "Alex", last_name = "Kumar".',
        visualTarget: 'vars',
        visualLabel: 'Variables',
        visualSublabel: 'first_name, last_name',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Single print Statement',
        conceptKey: 'print',
        speechHinglish: 'print(first_name, last_name) dono variables ko comma se pass karta hai.',
        speechEnglish: 'print(first_name, last_name) passes both variables separated by comma.',
        cardExplanationHinglish: 'Comma separates arguments in print().',
        cardExplanationEnglish: 'Comma separates arguments in print().',
        visualTarget: 'print',
        visualLabel: 'print(...)',
        visualSublabel: 'Multiple arguments',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Single Line Output',
        conceptKey: 'output',
        speechHinglish: 'Alex Kumar ek hi line par space ke saath display ho jata hai.',
        speechEnglish: 'Alex Kumar is printed on one single line separated by space.',
        cardExplanationHinglish: 'Alex Kumar is printed.',
        cardExplanationEnglish: 'Alex Kumar is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Alex Kumar',
        consoleOutput: 'Enter first name: Alex\nEnter last name: Kumar\nAlex Kumar',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'first_name aur last_name do variables banakar input lein.',
        hintEnglish: 'Create first_name and last_name variables with input().'
      },
      {
        level: 2,
        name: 'Print Hint',
        badge: 'Hint 2',
        hintHinglish: 'print(first_name, last_name) likhkar dono print karein.',
        hintEnglish: 'Write print(first_name, last_name) to print both.'
      },
      {
        level: 3,
        name: 'Spacing Hint',
        badge: 'Hint 3',
        hintHinglish: 'Comma apne aap space add kar dega.',
        hintEnglish: 'The comma will automatically add a space between them.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const inputs = (code.match(/input\s*\(/g) || []).length;
      const passed = inputs >= 2 && stdout.includes('Alex Kumar');
      return {
        passed,
        message: passed ? '🎉 Wonderful! You displayed multiple user inputs on a single line!' : 'Take first name and last name, then print(first_name, last_name).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Print Input Using sep ──
  {
    number: 4,
    title: 'Print Input Using sep',
    problemStatement: 'Ask the user to enter three words. Print them separated by hyphens using the sep Parameter.',
    instructions: 'Take word1, word2, word3, and print(word1, word2, word3, sep="-").',
    referenceCode: 'word1 = input("Enter first word: ")\nword2 = input("Enter second word: ")\nword3 = input("Enter third word: ")\n\nprint(word1, word2, word3, sep="-")',
    starterCode: '# Take three words and print separated by hyphens using sep=\'-\'\n',
    sampleInput: 'Learn\nPython\nToday',
    expectedOutput: 'Enter first word: Learn\nEnter second word: Python\nEnter third word: Today\nLearn-Python-Today',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Three Inputs',
        conceptKey: 'string',
        speechHinglish: 'User se teen words input liye gaye: Learn, Python aur Today.',
        speechEnglish: 'Three words are collected from user: Learn, Python, and Today.',
        cardExplanationHinglish: 'word1, word2, word3 store the three words.',
        cardExplanationEnglish: 'word1, word2, word3 store the three words.',
        visualTarget: 'inputs',
        visualLabel: '3 Words',
        visualSublabel: 'Learn, Python, Today',
        consoleOutput: 'Enter first word: Learn\nEnter second word: Python\nEnter third word: Today',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'sep Parameter',
        conceptKey: 'arguments',
        speechHinglish: 'sep parameter decide karta hai ki arguments ke beech kya separator aayega.',
        speechEnglish: 'The sep parameter specifies what separator character goes between arguments.',
        cardExplanationHinglish: 'Default separator is space " ".',
        cardExplanationEnglish: 'Default separator is space " ".',
        visualTarget: 'sep',
        visualLabel: 'sep="-"',
        visualSublabel: 'Hyphen separator',
        consoleOutput: 'Enter first word: Learn\nEnter second word: Python\nEnter third word: Today',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Hyphen Insertion',
        conceptKey: 'print',
        speechHinglish: 'Yahan sep="-" dene se space ki jagah hyphens insert hote hain.',
        speechEnglish: 'Passing sep="-" replaces default spaces with hyphens.',
        cardExplanationHinglish: 'Hyphens placed between words.',
        cardExplanationEnglish: 'Hyphens placed between words.',
        visualTarget: 'hyphens',
        visualLabel: 'Join with -',
        visualSublabel: 'Learn-Python-Today',
        consoleOutput: 'Enter first word: Learn\nEnter second word: Python\nEnter third word: Today',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Formatted Output',
        conceptKey: 'output',
        speechHinglish: 'Learn-Python-Today screen par display hota hai.',
        speechEnglish: 'Learn-Python-Today is printed on screen.',
        cardExplanationHinglish: 'Learn-Python-Today is printed.',
        cardExplanationEnglish: 'Learn-Python-Today is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Learn-Python-Today',
        consoleOutput: 'Enter first word: Learn\nEnter second word: Python\nEnter third word: Today\nLearn-Python-Today',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Teen alag variables me input() lijiye.',
        hintEnglish: 'Take input into three separate variables.'
      },
      {
        level: 2,
        name: 'sep Hint',
        badge: 'Hint 2',
        hintHinglish: 'print() ke aakhri me sep="-" parameter add kijiye.',
        hintEnglish: 'Add sep="-" at the end of print().'
      },
      {
        level: 3,
        name: 'Syntax Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(word1, word2, word3, sep="-") likhiye.',
        hintEnglish: 'Write print(word1, word2, word3, sep="-").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasSep = /sep\s*=\s*["']-["']/.test(code);
      const passed = hasSep && stdout.includes('Learn-Python-Today');
      return {
        passed,
        message: passed ? '🎉 Brilliant! You formatted output with the sep parameter!' : 'Use print(word1, word2, word3, sep="-") to separate with hyphens.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Print Input Using end ──
  {
    number: 5,
    title: 'Print Input Using end',
    problemStatement: 'Ask the user to enter their name. Print Hello, followed by the name on the same line using the end Parameter.',
    instructions: 'Use print("Hello,", end=" ") followed by print(name) on the next line.',
    referenceCode: 'name = input("Enter your name: ")\n\nprint("Hello,", end=" ")\nprint(name)',
    starterCode: '# Take name, print \'Hello,\' with end=\' \', then print name\n',
    sampleInput: 'Alex',
    expectedOutput: 'Enter your name: Alex\nHello, Alex',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Input Name',
        conceptKey: 'string',
        speechHinglish: 'User se name input liya gaya aur name variable me save hua.',
        speechEnglish: 'Name is captured from user and saved in the name variable.',
        cardExplanationHinglish: 'name = input(...) captures name.',
        cardExplanationEnglish: 'name = input(...) captures name.',
        visualTarget: 'input',
        visualLabel: 'name = "Alex"',
        visualSublabel: 'Name captured',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'end Parameter',
        conceptKey: 'arguments',
        speechHinglish: 'Normally print() ke baad newline aati hai. end=" " use karne se newline ki jagah space aata hai.',
        speechEnglish: 'Normally print() adds a newline. Setting end=" " replaces the newline with a space.',
        cardExplanationHinglish: 'Cursor stays on same line.',
        cardExplanationEnglish: 'Cursor stays on same line.',
        visualTarget: 'end',
        visualLabel: 'end=" "',
        visualSublabel: 'Replaces newline with space',
        consoleOutput: 'Enter your name: Alex\nHello, ',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Second print() Call',
        conceptKey: 'print',
        speechHinglish: 'Next line par likha print(name) usi same line par continue karta hai.',
        speechEnglish: 'The next print(name) call continues right on that same line.',
        cardExplanationHinglish: 'Second print outputs on same line.',
        cardExplanationEnglish: 'Second print outputs on same line.',
        visualTarget: 'second',
        visualLabel: 'print(name)',
        visualSublabel: 'Continues on same line',
        consoleOutput: 'Enter your name: Alex\nHello, Alex',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Complete Greeting',
        conceptKey: 'output',
        speechHinglish: 'Screen par Hello, Alex ek hi line par display ho gaya!',
        speechEnglish: 'Hello, Alex is printed on one line!',
        cardExplanationHinglish: 'Hello, Alex is printed.',
        cardExplanationEnglish: 'Hello, Alex is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Hello, Alex',
        consoleOutput: 'Enter your name: Alex\nHello, Alex',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Pehle print() me end=" " pass kijiye.',
        hintEnglish: 'Pass end=" " in the first print() call.'
      },
      {
        level: 2,
        name: 'Second Print Hint',
        badge: 'Hint 2',
        hintHinglish: 'Agle line par normal print(name) likhiye.',
        hintEnglish: 'On the next line write normal print(name).'
      },
      {
        level: 3,
        name: 'Syntax Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Hello,", end=" ")\nprint(name)',
        hintEnglish: 'Write print("Hello,", end=" ") followed by print(name).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasEnd = /end\s*=\s*["']\s*["']/.test(code);
      const passed = hasEnd && stdout.includes('Hello, Alex');
      return {
        passed,
        message: passed ? '🎉 Superb! You controlled newline behavior using the end parameter!' : 'Use print("Hello,", end=" ") followed by print(name).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Print Input Using an f-string ──
  {
    number: 6,
    title: 'Print Input Using an f-string',
    problemStatement: 'Ask the user to enter their name and city. Display a complete sentence using an f-string.',
    instructions: 'Take name and city inputs, then print(f"My name is {name} and I live in {city}.").',
    referenceCode: 'name = input("Enter your name: ")\ncity = input("Enter your city: ")\n\nprint(f"My name is {name} and I live in {city}.")',
    starterCode: '# Take name and city, print sentence using f-string\n',
    sampleInput: 'Alex\nDelhi',
    expectedOutput: 'Enter your name: Alex\nEnter your city: Delhi\nMy name is Alex and I live in Delhi.',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two Inputs',
        conceptKey: 'string',
        speechHinglish: 'User se name aur city input liye gaye.',
        speechEnglish: 'Name and city are collected from the user.',
        cardExplanationHinglish: 'name = "Alex", city = "Delhi".',
        cardExplanationEnglish: 'name = "Alex", city = "Delhi".',
        visualTarget: 'inputs',
        visualLabel: 'Inputs',
        visualSublabel: 'Alex, Delhi',
        consoleOutput: 'Enter your name: Alex\nEnter your city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'f-string Prefix',
        conceptKey: 'print',
        speechHinglish: 'Quotes se pehle f lagane se Python ise f-string samajhta hai.',
        speechEnglish: 'Prefixing quotes with f tells Python this is a formatted f-string.',
        cardExplanationHinglish: 'f"..." enables variable interpolation.',
        cardExplanationEnglish: 'f"..." enables variable interpolation.',
        visualTarget: 'fprefix',
        visualLabel: 'f"..."',
        visualSublabel: 'f-string prefix',
        consoleOutput: 'Enter your name: Alex\nEnter your city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Curly Braces {}',
        conceptKey: 'arguments',
        speechHinglish: 'Curly braces {name} aur {city} ke andar variables ki current values insert ho jati hain.',
        speechEnglish: 'Inside {name} and {city}, Python inserts the current values of the variables.',
        cardExplanationHinglish: '{name} -> Alex, {city} -> Delhi.',
        cardExplanationEnglish: '{name} -> Alex, {city} -> Delhi.',
        visualTarget: 'braces',
        visualLabel: '{name}, {city}',
        visualSublabel: 'Values inserted',
        consoleOutput: 'Enter your name: Alex\nEnter your city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Formatted Sentence',
        conceptKey: 'output',
        speechHinglish: 'My name is Alex and I live in Delhi. screen par clean sentence me print ho jata hai.',
        speechEnglish: 'My name is Alex and I live in Delhi. is printed as a clean sentence.',
        cardExplanationHinglish: 'Formatted sentence printed.',
        cardExplanationEnglish: 'Formatted sentence printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Complete sentence',
        consoleOutput: 'Enter your name: Alex\nEnter your city: Delhi\nMy name is Alex and I live in Delhi.',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Quotes ke aage f lagaiye: f"..."',
        hintEnglish: 'Put f in front of quotes: f"..."'
      },
      {
        level: 2,
        name: 'Variables Hint',
        badge: 'Hint 2',
        hintHinglish: 'Variables ko curly braces me likhiye: {name} aur {city}.',
        hintEnglish: 'Write variables inside curly braces: {name} and {city}.'
      },
      {
        level: 3,
        name: 'Syntax Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"My name is {name} and I live in {city}.") likhiye.',
        hintEnglish: 'Write print(f"My name is {name} and I live in {city}.").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFString = /f["']/.test(code);
      const passed = hasFString && stdout.includes('My name is Alex and I live in Delhi.');
      return {
        passed,
        message: passed ? '🎉 Outstanding! You mastered f-strings with user input!' : 'Use an f-string: f"My name is {name} and I live in {city}.".'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Fix a Printing Mistake ──
  {
    number: 7,
    title: 'Fix a Printing Mistake',
    problemStatement: 'A student wants to display the entered name, but the program prints the word name instead. Fix the Code.',
    instructions: 'Change print("name") to print(name) without quotes so that the variable value is printed.',
    referenceCode: 'name = input("Enter your name: ")\nprint(name)',
    starterCode: 'name = input("Enter your name: ")\nprint("name")',
    sampleInput: 'Alex',
    expectedOutput: 'Enter your name: Alex\nAlex',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'The Bug: String Literal',
        conceptKey: 'string',
        speechHinglish: '"name" quotes me likha hai, isliye Python ise variable nahi balki exact word "name" samajhta hai.',
        speechEnglish: '"name" is in quotes, so Python treats it as a literal string word, not a variable.',
        cardExplanationHinglish: '"name" is a string literal.',
        cardExplanationEnglish: '"name" is a string literal.',
        visualTarget: 'bug',
        visualLabel: '"name"',
        visualSublabel: 'Literal text',
        consoleOutput: 'Enter your name: Alex\nname',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Remove Quotes',
        conceptKey: 'print',
        speechHinglish: 'Variable ki stored value print karne ke liye quotes hatakar print(name) likhte hain.',
        speechEnglish: 'To print the stored variable value, remove quotes and write print(name).',
        cardExplanationHinglish: 'name without quotes refers to variable.',
        cardExplanationEnglish: 'name without quotes refers to variable.',
        visualTarget: 'fix',
        visualLabel: 'print(name)',
        visualSublabel: 'Variable reference',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Variable Lookup',
        conceptKey: 'arguments',
        speechHinglish: 'Python memory me jakar name variable ki value "Alex" fetch karta hai.',
        speechEnglish: 'Python looks up memory and fetches the value "Alex" stored in name.',
        cardExplanationHinglish: 'name evaluates to "Alex".',
        cardExplanationEnglish: 'name evaluates to "Alex".',
        visualTarget: 'lookup',
        visualLabel: 'name -> "Alex"',
        visualSublabel: 'Value retrieved',
        consoleOutput: 'Enter your name: Alex',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Correct Output',
        conceptKey: 'output',
        speechHinglish: 'Alex screen par print ho jata hai. Mistake fix ho gayi!',
        speechEnglish: 'Alex is printed on screen. Mistake fixed!',
        cardExplanationHinglish: 'Alex is printed.',
        cardExplanationEnglish: 'Alex is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Alex',
        consoleOutput: 'Enter your name: Alex\nAlex',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'print() ke andar quotes ko dhyaan se dekhiye.',
        hintEnglish: 'Look closely at the quotes inside print().'
      },
      {
        level: 2,
        name: 'Fix Hint',
        badge: 'Hint 2',
        hintHinglish: '"name" ke quotes hata kar sirf name likhiye.',
        hintEnglish: 'Remove the quotes from "name" and write just name.'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(name) likhkar run karein.',
        hintEnglish: 'Write print(name) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasQuotes = /print\s*\(\s*["']name["']\s*\)/.test(code);
      const passed = !hasQuotes && stdout.includes('Alex');
      return {
        passed,
        message: passed ? '🎉 Excellent debugging! You distinguished string literal from variable reference!' : 'Remove quotes from print("name") so it becomes print(name).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Student ID Card Mini Project ──
  {
    number: 8,
    title: 'Student ID Card Mini Project',
    problemStatement: 'Create an interactive Student ID Card. Ask user to enter: Student Name, Age, School, Class, City. Display neatly formatted ID Card using f-strings.',
    instructions: 'Take 5 inputs and print formatted ID card with border lines and f-string fields.',
    referenceCode: 'name = input("Enter name: ")\nage = input("Enter age: ")\nschool = input("Enter school: ")\nstudent_class = input("Enter class: ")\ncity = input("Enter city: ")\n\nprint("===== STUDENT ID CARD =====")\nprint(f"Name   : {name}")\nprint(f"Age    : {age}")\nprint(f"School : {school}")\nprint(f"Class  : {student_class}")\nprint(f"City   : {city}")\nprint("===========================")',
    starterCode: '# Build an interactive Student ID Card using f-strings\n',
    sampleInput: 'Alex\n12\nGreen Valley School\n7\nDelhi',
    expectedOutput: 'Enter name: Alex\nEnter age: 12\nEnter school: Green Valley School\nEnter class: 7\nEnter city: Delhi\n===== STUDENT ID CARD =====\nName   : Alex\nAge    : 12\nSchool : Green Valley School\nClass  : 7\nCity   : Delhi\n===========================',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Five User Inputs',
        conceptKey: 'string',
        speechHinglish: 'User se name, age, school, class aur city paanch inputs liye gaye.',
        speechEnglish: 'Five inputs are collected: name, age, school, class, and city.',
        cardExplanationHinglish: 'Collect all 5 student details.',
        cardExplanationEnglish: 'Collect all 5 student details.',
        visualTarget: 'inputs',
        visualLabel: '5 Inputs',
        visualSublabel: 'Captured successfully',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter school: Green Valley School\nEnter class: 7\nEnter city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'ID Card Header',
        conceptKey: 'print',
        speechHinglish: 'print("===== STUDENT ID CARD =====") se stylish card header banta hai.',
        speechEnglish: 'print("===== STUDENT ID CARD =====") creates the card header border.',
        cardExplanationHinglish: 'Top border printed.',
        cardExplanationEnglish: 'Top border printed.',
        visualTarget: 'header',
        visualLabel: 'Header',
        visualSublabel: '===== STUDENT ID CARD =====',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter school: Green Valley School\nEnter class: 7\nEnter city: Delhi\n===== STUDENT ID CARD =====',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'f-string Formatted Fields',
        conceptKey: 'arguments',
        speechHinglish: 'f-strings ki help se Name, Age, School, Class aur City aligned format me print hoti hain.',
        speechEnglish: 'f-strings format each student field into an aligned layout.',
        cardExplanationHinglish: 'Each field formatted with f-strings.',
        cardExplanationEnglish: 'Each field formatted with f-strings.',
        visualTarget: 'fields',
        visualLabel: 'f-string Lines',
        visualSublabel: 'Aligned labels & values',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter school: Green Valley School\nEnter class: 7\nEnter city: Delhi\n===== STUDENT ID CARD =====\nName   : Alex\nAge    : 12\nSchool : Green Valley School\nClass  : 7\nCity   : Delhi',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Complete ID Card',
        conceptKey: 'output',
        speechHinglish: 'Closing border ke saath pura professional Student ID Card display ho jata hai!',
        speechEnglish: 'With the closing border, the complete professional Student ID Card is displayed!',
        cardExplanationHinglish: 'Completed Student ID Card printed.',
        cardExplanationEnglish: 'Completed Student ID Card printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Student ID Card complete',
        consoleOutput: 'Enter name: Alex\nEnter age: 12\nEnter school: Green Valley School\nEnter class: 7\nEnter city: Delhi\n===== STUDENT ID CARD =====\nName   : Alex\nAge    : 12\nSchool : Green Valley School\nClass  : 7\nCity   : Delhi\n===========================',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Paanch input() statements likhkar details collect karein.',
        hintEnglish: 'Write five input() statements to collect details.'
      },
      {
        level: 2,
        name: 'Header & Footer Hint',
        badge: 'Hint 2',
        hintHinglish: 'Card ke upar aur neeche border print karein: ===== STUDENT ID CARD =====',
        hintEnglish: 'Print borders above and below the card.'
      },
      {
        level: 3,
        name: 'f-string Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Name   : {name}") aur baaki fields f-string se print karein.',
        hintEnglish: 'Print fields using print(f"Name   : {name}") and so on.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const inputs = (code.match(/input\s*\(/g) || []).length;
      const hasFString = /f["']/.test(code);
      const passed = inputs >= 5 && hasFString && stdout.includes('STUDENT ID CARD') && stdout.includes('Name');
      return {
        passed,
        message: passed ? '🎉 Congratulations! You built a complete interactive Student ID Card Mini Project!' : 'Collect 5 inputs and print formatted ID card with f-strings.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// TOPIC 13: Sum of Two Numbers (9 Questions)
// ══════════════════════════════════════════════════════════════════════════════

export const TOPIC_13_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Add Two Numbers Directly ──
  {
    number: 1,
    title: 'Add Two Numbers Directly',
    problemStatement: 'Write a Python program that adds 10 and 20 and prints their Sum.',
    instructions: 'Use print(10 + 20) to add two numbers directly inside print().',
    referenceCode: 'print(10 + 20)',
    starterCode: '# Add 10 and 20 directly inside print()\\n',
    sampleInput: '',
    expectedOutput: '30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two Numbers',
        conceptKey: 'numbers',
        speechHinglish: 'Yahan 10 pehla number hai aur 20 doosra number hai.',
        speechEnglish: 'Here 10 is the first number and 20 is the second number.',
        cardExplanationHinglish: '10 and 20 are integer literals.',
        cardExplanationEnglish: '10 and 20 are integer literals.',
        visualTarget: 'numbers',
        visualLabel: '10, 20',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: '+ Operator',
        conceptKey: 'arguments',
        speechHinglish: '+ symbol Python ka Addition Operator hai jo do numbers ko aapas me jodta hai.',
        speechEnglish: '+ is Python Addition Operator that adds two numbers together.',
        cardExplanationHinglish: '+ performs arithmetic addition.',
        cardExplanationEnglish: '+ performs arithmetic addition.',
        visualTarget: 'operator',
        visualLabel: '+ Operator',
        visualSublabel: 'Addition',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Evaluation',
        conceptKey: 'print',
        speechHinglish: 'Python pehle 10 + 20 evaluate karta hai, jisse 30 result milta hai.',
        speechEnglish: 'Python evaluates 10 + 20 first, resulting in 30.',
        cardExplanationHinglish: '10 + 20 evaluates to 30.',
        cardExplanationEnglish: '10 + 20 evaluates to 30.',
        visualTarget: 'eval',
        visualLabel: '10 + 20',
        visualSublabel: '= 30',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Console Output',
        conceptKey: 'output',
        speechHinglish: 'print() function calculated result 30 ko console par display kar deta hai.',
        speechEnglish: 'print() displays the calculated result 30 on the console.',
        cardExplanationHinglish: '30 is displayed on screen.',
        cardExplanationEnglish: '30 is displayed on screen.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '30',
        consoleOutput: '30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: '+ operator use kijiye addition ke liye.',
        hintEnglish: 'Use the + operator for addition.'
      },
      {
        level: 2,
        name: 'Operation Hint',
        badge: 'Hint 2',
        hintHinglish: '10 + 20 ko print() ke andar likhiye.',
        hintEnglish: 'Put 10 + 20 inside print().'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(10 + 20) likhkar run karein.',
        hintEnglish: 'Write print(10 + 20) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasPlus = /\+/.test(code);
      const passed = hasPlus && stdout.trim() === '30';
      return {
        passed,
        message: passed ? '🎉 Excellent! You added two numbers directly and printed their sum!' : 'Write print(10 + 20) to print 30.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Add Numbers Stored in Variables ──
  {
    number: 2,
    title: 'Add Numbers Stored in Variables',
    problemStatement: 'Create two Variables a and b, store 15 and 25, and print their Sum.',
    instructions: 'Create a = 15, b = 25, then print(a + b).',
    referenceCode: 'a = 15\\nb = 25\\n\\nprint(a + b)',
    starterCode: '# Create a and b with 15 and 25, then print their sum\\n',
    sampleInput: '',
    expectedOutput: '40',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Variables a and b',
        conceptKey: 'string',
        speechHinglish: 'a = 15 aur b = 25 likhkar do variables banaye aur unhe values assign ki.',
        speechEnglish: 'a = 15 and b = 25 creates two variables with their initial integer values.',
        cardExplanationHinglish: 'a = 15, b = 25 in memory.',
        cardExplanationEnglish: 'a = 15, b = 25 in memory.',
        visualTarget: 'vars',
        visualLabel: 'Variables',
        visualSublabel: 'a = 15, b = 25',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Value Lookup',
        conceptKey: 'arguments',
        speechHinglish: 'Jab Python a + b dekhta hai, to a ki jagah 15 aur b ki jagah 25 read karta hai.',
        speechEnglish: 'When Python encounters a + b, it fetches 15 for a and 25 for b.',
        cardExplanationHinglish: 'a reads 15, b reads 25.',
        cardExplanationEnglish: 'a reads 15, b reads 25.',
        visualTarget: 'lookup',
        visualLabel: 'Read Values',
        visualSublabel: '15 and 25',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Sum Calculation',
        conceptKey: 'print',
        speechHinglish: '+ operator 15 aur 25 ko add karke 40 calculate karta hai.',
        speechEnglish: '+ operator adds 15 and 25 to produce 40.',
        cardExplanationHinglish: '15 + 25 = 40.',
        cardExplanationEnglish: '15 + 25 = 40.',
        visualTarget: 'calc',
        visualLabel: '15 + 25',
        visualSublabel: '= 40',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display 40',
        conceptKey: 'output',
        speechHinglish: 'print() function 40 screen par display karta hai.',
        speechEnglish: 'print() outputs 40 onto the screen.',
        cardExplanationHinglish: '40 is printed on console.',
        cardExplanationEnglish: '40 is printed on console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '40',
        consoleOutput: '40',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 15 aur b = 25 assign kijiye.',
        hintEnglish: 'Assign a = 15 and b = 25.'
      },
      {
        level: 2,
        name: 'Sum Hint',
        badge: 'Hint 2',
        hintHinglish: 'print() ke andar a + b pass kijiye.',
        hintEnglish: 'Pass a + b inside print().'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(a + b) likhkar run karein.',
        hintEnglish: 'Write print(a + b) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasA = /\ba\s*=\s*15\b/.test(code);
      const hasB = /\bb\s*=\s*25\b/.test(code);
      const passed = hasA && hasB && stdout.trim() === '40';
      return {
        passed,
        message: passed ? '🎉 Great job! You added numbers using variables!' : 'Create a = 15, b = 25 and print(a + b).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Store the Sum in a Variable ──
  {
    number: 3,
    title: 'Store the Sum in a Variable',
    problemStatement: 'Create two Variables containing 12 and 8. Store their Sum in a Variable named total and print it.',
    instructions: 'Create a = 12, b = 8, total = a + b, then print(total).',
    referenceCode: 'a = 12\\nb = 8\\n\\ntotal = a + b\\n\\nprint(total)',
    starterCode: '# Create a = 12, b = 8, store sum in total, and print total\\n',
    sampleInput: '',
    expectedOutput: '20',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Input Variables',
        conceptKey: 'string',
        speechHinglish: 'Pehle do variables a = 12 aur b = 8 create kiye.',
        speechEnglish: 'First two variables a = 12 and b = 8 are created.',
        cardExplanationHinglish: 'a = 12, b = 8.',
        cardExplanationEnglish: 'a = 12, b = 8.',
        visualTarget: 'vars',
        visualLabel: 'Variables',
        visualSublabel: 'a = 12, b = 8',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'total = a + b',
        conceptKey: 'arguments',
        speechHinglish: 'total = a + b me Python pehle right side 12 + 8 = 20 calculate karta hai.',
        speechEnglish: 'In total = a + b, Python first calculates right side: 12 + 8 = 20.',
        cardExplanationHinglish: '12 + 8 = 20 evaluated.',
        cardExplanationEnglish: '12 + 8 = 20 evaluated.',
        visualTarget: 'calc',
        visualLabel: 'a + b',
        visualSublabel: '12 + 8 = 20',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Store in total',
        conceptKey: 'print',
        speechHinglish: 'Calculated 20 value total variable me assign ho jati hai.',
        speechEnglish: 'The calculated 20 value is assigned to the total variable.',
        cardExplanationHinglish: 'total = 20 in memory.',
        cardExplanationEnglish: 'total = 20 in memory.',
        visualTarget: 'total',
        visualLabel: 'total = 20',
        visualSublabel: 'Sum stored',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'print(total)',
        conceptKey: 'output',
        speechHinglish: 'print(total) console par 20 display kar deta hai.',
        speechEnglish: 'print(total) prints 20 onto the console.',
        cardExplanationHinglish: '20 is displayed.',
        cardExplanationEnglish: '20 is displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '20',
        consoleOutput: '20',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 12 aur b = 8 banayein.',
        hintEnglish: 'Create a = 12 and b = 8.'
      },
      {
        level: 2,
        name: 'Total Variable Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = a + b likhkar sum ko total me save karein.',
        hintEnglish: 'Write total = a + b to save sum in total.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(total) likhiye.',
        hintEnglish: 'Write print(total).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasTotal = /\btotal\s*=\s*/.test(code);
      const passed = hasTotal && stdout.trim() === '20';
      return {
        passed,
        message: passed ? '🎉 Wonderful! You stored the sum in a variable before printing!' : 'Save sum in total: total = a + b, then print(total).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Add Two Numbers from User Input ──
  {
    number: 4,
    title: 'Add Two Numbers from User Input',
    problemStatement: 'Ask the user to enter two whole Numbers. Convert both Inputs to Integers, add them, and print the Sum.',
    instructions: 'Take a and b with int(input(...)), calculate total = a + b, and print("Sum:", total).',
    referenceCode: 'a = int(input("Enter first number: "))\\nb = int(input("Enter second number: "))\\n\\ntotal = a + b\\n\\nprint("Sum:", total)',
    starterCode: '# Take two integer inputs, add them, and print \'Sum: <total>\'\\n',
    sampleInput: '10\\n20',
    expectedOutput: 'Enter first number: 10\\nEnter second number: 20\\nSum: 30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two int() Inputs',
        conceptKey: 'string',
        speechHinglish: 'int(input(...)) se dono inputs ko integers me convert karke a aur b me store kiya.',
        speechEnglish: 'Both inputs are converted to integers using int() and stored in a and b.',
        cardExplanationHinglish: 'a = 10, b = 20 integers.',
        cardExplanationEnglish: 'a = 10, b = 20 integers.',
        visualTarget: 'inputs',
        visualLabel: 'Integer Inputs',
        visualSublabel: '10 & 20',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Arithmetic Addition',
        conceptKey: 'arguments',
        speechHinglish: 'Numbers hone ki wajah se + actual mathematical addition karta hai: 10 + 20 = 30.',
        speechEnglish: 'Being numbers, + performs arithmetic addition: 10 + 20 = 30.',
        cardExplanationHinglish: '10 + 20 = 30.',
        cardExplanationEnglish: '10 + 20 = 30.',
        visualTarget: 'calc',
        visualLabel: 'a + b',
        visualSublabel: '10 + 20 = 30',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'total Variable',
        conceptKey: 'print',
        speechHinglish: 'total variable me calculated sum 30 store ho jata hai.',
        speechEnglish: 'The total variable stores the computed sum 30.',
        cardExplanationHinglish: 'total = 30.',
        cardExplanationEnglish: 'total = 30.',
        visualTarget: 'total',
        visualLabel: 'total = 30',
        visualSublabel: 'Stored sum',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Sum',
        conceptKey: 'output',
        speechHinglish: 'print("Sum:", total) se screen par Sum: 30 display ho jata hai.',
        speechEnglish: 'print("Sum:", total) displays Sum: 30 on the screen.',
        cardExplanationHinglish: 'Sum: 30 is printed.',
        cardExplanationEnglish: 'Sum: 30 is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Sum: 30',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20\\nSum: 30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Dono inputs ko int(input(...)) se integer me convert karein.',
        hintEnglish: 'Convert both inputs to integers using int(input(...)).'
      },
      {
        level: 2,
        name: 'Sum Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = a + b likhkar sum calculate karein.',
        hintEnglish: 'Write total = a + b to calculate sum.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Sum:", total) likhkar display karein.',
        hintEnglish: 'Write print("Sum:", total) to display.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInt = (code.match(/int\s*\(/g) || []).length >= 2;
      const passed = hasInt && (stdout.includes('30') || stdout.includes('Sum:'));
      return {
        passed,
        message: passed ? '🎉 Brilliant! You added two user-entered numbers successfully!' : 'Convert inputs to int, add them and print "Sum:", total.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Add Two Decimal Numbers ──
  {
    number: 5,
    title: 'Add Two Decimal Numbers',
    problemStatement: 'Ask the user to enter two decimal Numbers. Add them and display the result.',
    instructions: 'Convert inputs to float: a = float(input(...)), b = float(input(...)), total = a + b, and print("Sum:", total).',
    referenceCode: 'a = float(input("Enter first number: "))\\nb = float(input("Enter second number: "))\\n\\ntotal = a + b\\n\\nprint("Sum:", total)',
    starterCode: '# Take two float inputs, add them, and print \'Sum: <total>\'\\n',
    sampleInput: '12.5\\n7.5',
    expectedOutput: 'Enter first number: 12.5\\nEnter second number: 7.5\\nSum: 20.0',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Decimal Float Inputs',
        conceptKey: 'string',
        speechHinglish: 'Decimal numbers ke liye float(input(...)) use karke 12.5 aur 7.5 store kiye.',
        speechEnglish: 'For decimal numbers, we use float(input(...)) to store 12.5 and 7.5.',
        cardExplanationHinglish: 'float() converts input strings to decimals.',
        cardExplanationEnglish: 'float() converts input strings to decimals.',
        visualTarget: 'inputs',
        visualLabel: 'Float Inputs',
        visualSublabel: '12.5 & 7.5',
        consoleOutput: 'Enter first number: 12.5\\nEnter second number: 7.5',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Float Addition',
        conceptKey: 'arguments',
        speechHinglish: '12.5 + 7.5 add hokar 20.0 result banta hai.',
        speechEnglish: '12.5 + 7.5 adds up to 20.0.',
        cardExplanationHinglish: '12.5 + 7.5 = 20.0.',
        cardExplanationEnglish: '12.5 + 7.5 = 20.0.',
        visualTarget: 'calc',
        visualLabel: '12.5 + 7.5',
        visualSublabel: '= 20.0',
        consoleOutput: 'Enter first number: 12.5\\nEnter second number: 7.5',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Decimal Representation',
        conceptKey: 'print',
        speechHinglish: 'Python Float result ko hamesha decimal point ke saath represent karta hai.',
        speechEnglish: 'Python always represents Float results with a decimal point.',
        cardExplanationHinglish: 'total is float 20.0.',
        cardExplanationEnglish: 'total is float 20.0.',
        visualTarget: 'total',
        visualLabel: 'total = 20.0',
        visualSublabel: 'Float value',
        consoleOutput: 'Enter first number: 12.5\\nEnter second number: 7.5',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Sum: 20.0',
        conceptKey: 'output',
        speechHinglish: 'print("Sum:", total) se Sum: 20.0 display ho jata hai.',
        speechEnglish: 'print("Sum:", total) outputs Sum: 20.0.',
        cardExplanationHinglish: 'Sum: 20.0 printed.',
        cardExplanationEnglish: 'Sum: 20.0 printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Sum: 20.0',
        consoleOutput: 'Enter first number: 12.5\\nEnter second number: 7.5\\nSum: 20.0',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'int() ki jagah float(input(...)) use kijiye.',
        hintEnglish: 'Use float(input(...)) instead of int().'
      },
      {
        level: 2,
        name: 'Sum Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = a + b likhkar float values add karein.',
        hintEnglish: 'Add float values with total = a + b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Sum:", total) se print karein.',
        hintEnglish: 'Print using print("Sum:", total).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFloat = (code.match(/float\s*\(/g) || []).length >= 2;
      const passed = hasFloat && (stdout.includes('20.0') || stdout.includes('Sum:'));
      return {
        passed,
        message: passed ? '🎉 Superb! You added two decimal numbers using float() successfully!' : 'Convert inputs using float(input(...)) and print "Sum:", total.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Add a Positive and Negative Number ──
  {
    number: 6,
    title: 'Add a Positive and Negative Number',
    problemStatement: 'Create two Variables containing 20 and -8. Add them and print the result.',
    instructions: 'Create a = 20, b = -8, total = a + b, and print(total). Notice that adding a negative decreases the sum.',
    referenceCode: 'a = 20\\nb = -8\\n\\ntotal = a + b\\n\\nprint(total)',
    starterCode: '# Create a = 20, b = -8, add them and print result\\n',
    sampleInput: '',
    expectedOutput: '12',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Signed Numbers',
        conceptKey: 'numbers',
        speechHinglish: 'a = 20 positive integer hai aur b = -8 negative integer hai.',
        speechEnglish: 'a = 20 is positive integer and b = -8 is negative integer.',
        cardExplanationHinglish: 'a = 20, b = -8.',
        cardExplanationEnglish: 'a = 20, b = -8.',
        visualTarget: 'vars',
        visualLabel: 'Signed Numbers',
        visualSublabel: '20 and -8',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Negative Addition Math',
        conceptKey: 'arguments',
        speechHinglish: 'Jab positive me negative number add karte hain: 20 + (-8) = 12 hota hai.',
        speechEnglish: 'Adding a negative number to positive: 20 + (-8) = 12.',
        cardExplanationHinglish: '20 + (-8) = 12.',
        cardExplanationEnglish: '20 + (-8) = 12.',
        visualTarget: 'calc',
        visualLabel: '20 + (-8)',
        visualSublabel: '= 12',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'total Assignment',
        conceptKey: 'print',
        speechHinglish: 'Calculated result 12 total variable me assign ho jata hai.',
        speechEnglish: 'The calculated result 12 is stored in total.',
        cardExplanationHinglish: 'total = 12 in memory.',
        cardExplanationEnglish: 'total = 12 in memory.',
        visualTarget: 'total',
        visualLabel: 'total = 12',
        visualSublabel: 'Result',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display 12',
        conceptKey: 'output',
        speechHinglish: 'print(total) screen par 12 print karta hai.',
        speechEnglish: 'print(total) outputs 12 onto the screen.',
        cardExplanationHinglish: '12 is displayed.',
        cardExplanationEnglish: '12 is displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '12',
        consoleOutput: '12',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'b = -8 likhkar negative number store kijiye.',
        hintEnglish: 'Write b = -8 to store a negative number.'
      },
      {
        level: 2,
        name: 'Sum Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = a + b likhkar add karein.',
        hintEnglish: 'Write total = a + b to add them.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(total) se result display karein.',
        hintEnglish: 'Display result with print(total).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasNegative = /-\s*8/.test(code);
      const passed = hasNegative && stdout.trim() === '12';
      return {
        passed,
        message: passed ? '🎉 Outstanding! You handled positive and negative number addition correctly!' : 'Create a = 20, b = -8, add them and print total.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Add Integer and Float ──
  {
    number: 7,
    title: 'Add Integer and Float',
    problemStatement: 'Create an Integer 10 and a Float 5.5. Add them and display both the Sum and its Data Type.',
    instructions: 'Create a = 10, b = 5.5, total = a + b, print(total), and print(type(total)). Notice it automatically becomes float.',
    referenceCode: 'a = 10\\nb = 5.5\\n\\ntotal = a + b\\n\\nprint(total)\\nprint(type(total))',
    starterCode: '# Create a = 10, b = 5.5, add them, print total and its type\\n',
    sampleInput: '',
    expectedOutput: '15.5\\n<class \'float\'>',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Mixed Data Types',
        conceptKey: 'numbers',
        speechHinglish: 'a integer 10 hai aur b float 5.5 hai.',
        speechEnglish: 'a is integer 10 and b is float 5.5.',
        cardExplanationHinglish: 'a = 10 (int), b = 5.5 (float).',
        cardExplanationEnglish: 'a = 10 (int), b = 5.5 (float).',
        visualTarget: 'types',
        visualLabel: 'int & float',
        visualSublabel: '10 and 5.5',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Implicit Type Conversion',
        conceptKey: 'arguments',
        speechHinglish: 'Integer aur Float add karne par Python automatically float result 15.5 banata hai.',
        speechEnglish: 'Adding integer and float causes Python to implicitly promote the result to float: 15.5.',
        cardExplanationHinglish: '10 + 5.5 = 15.5 (float).',
        cardExplanationEnglish: '10 + 5.5 = 15.5 (float).',
        visualTarget: 'calc',
        visualLabel: 'Implicit Float',
        visualSublabel: '15.5',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'total and type(total)',
        conceptKey: 'print',
        speechHinglish: 'total me 15.5 store hota hai aur type(total) float return karta hai.',
        speechEnglish: 'total stores 15.5 and type(total) returns class float.',
        cardExplanationHinglish: 'type(total) is <class \'float\'>.',
        cardExplanationEnglish: 'type(total) is <class \'float\'>.',
        visualTarget: 'total',
        visualLabel: 'total & type',
        visualSublabel: '15.5 & float',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Both',
        conceptKey: 'output',
        speechHinglish: 'Console par 15.5 aur agle line par <class "float"> display hota hai.',
        speechEnglish: 'Console displays 15.5 and <class "float"> on next line.',
        cardExplanationHinglish: '15.5 and <class \'float\'> printed.',
        cardExplanationEnglish: '15.5 and <class \'float\'> printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '15.5 & float',
        consoleOutput: '15.5\\n<class \'float\'>',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 10 aur b = 5.5 assign karke total = a + b karein.',
        hintEnglish: 'Assign a = 10, b = 5.5 and total = a + b.'
      },
      {
        level: 2,
        name: 'Print Hint',
        badge: 'Hint 2',
        hintHinglish: 'Pehle print(total) likhiye.',
        hintEnglish: 'First write print(total).'
      },
      {
        level: 3,
        name: 'Type Hint',
        badge: 'Hint 3',
        hintHinglish: 'Doosre line par print(type(total)) likhiye.',
        hintEnglish: 'On second line write print(type(total)).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasType = /type\s*\(/.test(code);
      const passed = hasType && stdout.includes('15.5') && stdout.includes('float');
      return {
        passed,
        message: passed ? '🎉 Brilliant! You verified that adding int and float produces a float!' : 'Print total and print(type(total)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Fix the Addition Mistake ──
  {
    number: 8,
    title: 'Fix the Addition Mistake',
    problemStatement: 'A student wants to add two Numbers entered by the user, but the program joins them as Strings. Fix the Code so that numeric Addition happens.',
    instructions: 'Wrap both input() calls with int() so that entering 10 and 20 gives 30 instead of 1020.',
    referenceCode: 'a = int(input("Enter first number: "))\\nb = int(input("Enter second number: "))\\n\\nprint(a + b)',
    starterCode: 'a = input("Enter first number: ")\\nb = input("Enter second number: ")\\n\\nprint(a + b)',
    sampleInput: '10\\n20',
    expectedOutput: 'Enter first number: 10\\nEnter second number: 20\\n30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'The Bug: String Join',
        conceptKey: 'string',
        speechHinglish: 'input() se string milti hai, isliye "10" + "20" concatenate hokar "1020" ban gaya tha.',
        speechEnglish: 'input() returns strings, so "10" + "20" concatenated to "1020".',
        cardExplanationHinglish: '"10" + "20" = "1020" concatenation bug.',
        cardExplanationEnglish: '"10" + "20" = "1020" concatenation bug.',
        visualTarget: 'bug',
        visualLabel: '"10" + "20"',
        visualSublabel: 'String concatenation',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20\\n1020',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Wrap with int()',
        conceptKey: 'arguments',
        speechHinglish: 'Dono input() statements ko int() ke andar wrap karke integers banaya.',
        speechEnglish: 'Wrapped both input() statements inside int() to convert them to integers.',
        cardExplanationHinglish: 'int(input(...)) converts input to int.',
        cardExplanationEnglish: 'int(input(...)) converts input to int.',
        visualTarget: 'fix',
        visualLabel: 'int(input(...))',
        visualSublabel: 'Conversion',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Math Addition',
        conceptKey: 'print',
        speechHinglish: 'Ab integers 10 aur 20 add hokar 30 calculate hota hai.',
        speechEnglish: 'Now integers 10 and 20 add up to 30.',
        cardExplanationHinglish: '10 + 20 = 30.',
        cardExplanationEnglish: '10 + 20 = 30.',
        visualTarget: 'calc',
        visualLabel: '10 + 20',
        visualSublabel: '= 30',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Correct Result 30',
        conceptKey: 'output',
        speechHinglish: 'print(a + b) screen par 30 display karta hai. Bug fix ho gaya!',
        speechEnglish: 'print(a + b) outputs 30 on screen. Bug resolved!',
        cardExplanationHinglish: '30 is printed.',
        cardExplanationEnglish: '30 is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '30',
        consoleOutput: 'Enter first number: 10\\nEnter second number: 20\\n30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'input() ke bahar int() function lagaiye.',
        hintEnglish: 'Wrap input() calls with int().'
      },
      {
        level: 2,
        name: 'Fix Hint',
        badge: 'Hint 2',
        hintHinglish: 'a = int(input(...)) aur b = int(input(...)) likhiye.',
        hintEnglish: 'Write a = int(input(...)) and b = int(input(...)).'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'Dono ko int banakar print(a + b) karein.',
        hintEnglish: 'Convert both to int and print(a + b).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInt = /int\s*\(/.test(code);
      const passed = hasInt && stdout.includes('30') && !stdout.includes('1020');
      return {
        passed,
        message: passed ? '🎉 Excellent debugging! You converted input to int and fixed the concatenation bug!' : 'Wrap inputs with int() so 10 + 20 results in 30.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Shopping Total Mini Project ──
  {
    number: 9,
    title: 'Shopping Total Mini Project',
    problemStatement: 'Create a Shopping Total Calculator. Ask the user to enter the prices of two products. Calculate the combined price and display a simple Bill.',
    instructions: 'Take price1 and price2 as float, compute total = price1 + price2, and print the shopping bill.',
    referenceCode: 'price1 = float(input("Enter first product price: "))\\nprice2 = float(input("Enter second product price: "))\\n\\ntotal = price1 + price2\\n\\nprint("SHOPPING BILL")\\nprint("Product 1:", price1)\\nprint("Product 2:", price2)\\nprint("Total:", total)',
    starterCode: '# Build a Shopping Total Calculator using float inputs\\n',
    sampleInput: '49.5\\n30.5',
    expectedOutput: 'Enter first product price: 49.5\\nEnter second product price: 30.5\\nSHOPPING BILL\\nProduct 1: 49.5\\nProduct 2: 30.5\\nTotal: 80.0',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two Float Prices',
        conceptKey: 'string',
        speechHinglish: 'User se do products ki float prices 49.5 aur 30.5 input li gayin.',
        speechEnglish: 'Two product float prices 49.5 and 30.5 are collected from user.',
        cardExplanationHinglish: 'price1 = 49.5, price2 = 30.5.',
        cardExplanationEnglish: 'price1 = 49.5, price2 = 30.5.',
        visualTarget: 'inputs',
        visualLabel: 'Prices',
        visualSublabel: '49.5 & 30.5',
        consoleOutput: 'Enter first product price: 49.5\\nEnter second product price: 30.5',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'total Calculation',
        conceptKey: 'arguments',
        speechHinglish: 'total = price1 + price2 se addition calculate hua: 49.5 + 30.5 = 80.0.',
        speechEnglish: 'total = price1 + price2 adds 49.5 + 30.5 = 80.0.',
        cardExplanationHinglish: '49.5 + 30.5 = 80.0.',
        cardExplanationEnglish: '49.5 + 30.5 = 80.0.',
        visualTarget: 'calc',
        visualLabel: 'price1 + price2',
        visualSublabel: '= 80.0',
        consoleOutput: 'Enter first product price: 49.5\\nEnter second product price: 30.5',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Bill Header',
        conceptKey: 'print',
        speechHinglish: 'print("SHOPPING BILL") se bill heading screen par print hui.',
        speechEnglish: 'print("SHOPPING BILL") displays the header.',
        cardExplanationHinglish: 'SHOPPING BILL header.',
        cardExplanationEnglish: 'SHOPPING BILL header.',
        visualTarget: 'header',
        visualLabel: 'Header',
        visualSublabel: 'SHOPPING BILL',
        consoleOutput: 'Enter first product price: 49.5\\nEnter second product price: 30.5\\nSHOPPING BILL',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Formatted Bill',
        conceptKey: 'output',
        speechHinglish: 'Product 1, Product 2 aur Total Bill screen par neatly display ho gaya!',
        speechEnglish: 'Product 1, Product 2, and Total are displayed neatly as a bill!',
        cardExplanationHinglish: 'Complete bill printed.',
        cardExplanationEnglish: 'Complete bill printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Total: 80.0',
        consoleOutput: 'Enter first product price: 49.5\\nEnter second product price: 30.5\\nSHOPPING BILL\\nProduct 1: 49.5\\nProduct 2: 30.5\\nTotal: 80.0',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'Do product prices float(input(...)) se input lijiye.',
        hintEnglish: 'Take two product prices using float(input(...)).'
      },
      {
        level: 2,
        name: 'Sum Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = price1 + price2 likhkar add kijiye.',
        hintEnglish: 'Add them with total = price1 + price2.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'SHOPPING BILL header ke saath Product 1, Product 2, Total print karein.',
        hintEnglish: 'Print SHOPPING BILL header with Product 1, Product 2, and Total.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFloat = (code.match(/float\s*\(/g) || []).length >= 2;
      const passed = hasFloat && stdout.includes('SHOPPING BILL') && (stdout.includes('80.0') || stdout.includes('Total:'));
      return {
        passed,
        message: passed ? '🎉 Congratulations! You built a complete Shopping Total Calculator!' : 'Take two float prices, calculate total, and print SHOPPING BILL.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ═══════════════════════════════════════════════════════════════════════════
// TOPIC 14: f-Strings and String Formatting (12 Questions)
// ═══════════════════════════════════════════════════════════════════════════

export const TOPIC_14_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Your First f-String ──
  {
    number: 1,
    title: 'Your First f-String',
    problemStatement: 'Create a Variable name containing "Alex" and display a welcome message using an f-string.',
    instructions: 'Create name = "Alex", then print(f"Welcome, {name}!") to insert the variable into the string.',
    referenceCode: 'name = "Alex"\nprint(f"Welcome, {name}!")',
    starterCode: '# Create name = "Alex" and print welcome using f-string\n',
    sampleInput: '',
    expectedOutput: 'Welcome, Alex!',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Variable Declaration',
        conceptKey: 'variable',
        speechHinglish: 'name = "Alex" ek string variable create karta hai.',
        speechEnglish: 'name = "Alex" creates a variable holding the string Alex.',
        cardExplanationHinglish: 'name = "Alex" memory me store hua.',
        cardExplanationEnglish: 'name = "Alex" is stored in memory.',
        visualTarget: 'vars',
        visualLabel: 'name = "Alex"',
        visualSublabel: 'String Variable',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'f Prefix Detection',
        conceptKey: 'string',
        speechHinglish: 'Quotes ke start me f prefix Python ko batata hai ki ye dynamic formatted string hai.',
        speechEnglish: 'The f prefix before the string enables expression interpolation.',
        cardExplanationHinglish: 'f"..." enables formatted string.',
        cardExplanationEnglish: 'f"..." enables formatted string.',
        visualTarget: 'fprefix',
        visualLabel: 'f Prefix',
        visualSublabel: 'Formatted String',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Placeholder Evaluation',
        conceptKey: 'arguments',
        speechHinglish: 'Curly braces {name} variable ki current value "Alex" se replace ho jata hai.',
        speechEnglish: 'Curly braces {name} are evaluated and replaced with "Alex".',
        cardExplanationHinglish: '{name} -> "Alex".',
        cardExplanationEnglish: '{name} -> "Alex".',
        visualTarget: 'placeholder',
        visualLabel: '{name}',
        visualSublabel: '-> Alex',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Result',
        conceptKey: 'output',
        speechHinglish: 'print() screen par Welcome, Alex! display kar deta hai.',
        speechEnglish: 'print() outputs Welcome, Alex! to the console.',
        cardExplanationHinglish: 'Welcome, Alex! is printed.',
        cardExplanationEnglish: 'Welcome, Alex! is printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Welcome, Alex!',
        consoleOutput: 'Welcome, Alex!',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Basic Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = "Alex" likhkar variable banaiye.',
        hintEnglish: 'Write name = "Alex" to create the variable.'
      },
      {
        level: 2,
        name: 'Prefix Hint',
        badge: 'Hint 2',
        hintHinglish: 'String quotes ke pehle f lagaiye: f"..."',
        hintEnglish: 'Put f before string quotes: f"..."'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Welcome, {name}!") likhiye.',
        hintEnglish: 'Write print(f"Welcome, {name}!").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFString = /f['"]/.test(code);
      const passed = hasFString && stdout.trim() === 'Welcome, Alex!';
      return {
        passed,
        message: passed ? '🎉 Brilliant! You created your first dynamic f-string!' : 'Create name = "Alex" and print(f"Welcome, {name}!").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Insert Two Variables ──
  {
    number: 2,
    title: 'Insert Two Variables',
    problemStatement: "Create Variables for a student's name and age. Display both in one sentence using an f-string.",
    instructions: 'Create name = "Alex" and age = 12. Then print(f"My name is {name} and I am {age} years old.").',
    referenceCode: 'name = "Alex"\nage = 12\n\nprint(f"My name is {name} and I am {age} years old.")',
    starterCode: '# Create name = "Alex", age = 12 and print sentence using f-string\n',
    sampleInput: '',
    expectedOutput: 'My name is Alex and I am 12 years old.',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two Variables',
        conceptKey: 'variable',
        speechHinglish: 'name me "Alex" (string) aur age me 12 (int) store hota hai.',
        speechEnglish: 'name stores "Alex" and age stores integer 12.',
        cardExplanationHinglish: 'name = "Alex", age = 12.',
        cardExplanationEnglish: 'name = "Alex", age = 12.',
        visualTarget: 'vars',
        visualLabel: 'name & age',
        visualSublabel: '"Alex", 12',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Multi-Placeholder f-String',
        conceptKey: 'string',
        speechHinglish: 'Ek hi f-string me do alag placeholders {name} aur {age} use kar sakte hain.',
        speechEnglish: 'A single f-string can interpolate multiple variables seamlessly.',
        cardExplanationHinglish: 'Multiple {name} and {age} placeholders.',
        cardExplanationEnglish: 'Multiple {name} and {age} placeholders.',
        visualTarget: 'placeholders',
        visualLabel: '{name} & {age}',
        visualSublabel: 'Interpolation',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Automatic Conversion',
        conceptKey: 'arguments',
        speechHinglish: 'Integer 12 automatically string me format ho jata hai bina str() lagaye.',
        speechEnglish: 'Integer 12 is automatically formatted without manual str() conversion.',
        cardExplanationHinglish: 'age 12 converted automatically.',
        cardExplanationEnglish: 'age 12 converted automatically.',
        visualTarget: 'conv',
        visualLabel: 'Auto Format',
        visualSublabel: '12 -> text',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Sentence',
        conceptKey: 'output',
        speechHinglish: 'Complete sentence My name is Alex and I am 12 years old. print ho jata hai.',
        speechEnglish: 'Displays the complete sentence on the screen.',
        cardExplanationHinglish: 'Sentence displayed on console.',
        cardExplanationEnglish: 'Sentence displayed on console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'My name is Alex...',
        consoleOutput: 'My name is Alex and I am 12 years old.',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = "Alex" aur age = 12 assign kijiye.',
        hintEnglish: 'Assign name = "Alex" and age = 12.'
      },
      {
        level: 2,
        name: 'f-String Hint',
        badge: 'Hint 2',
        hintHinglish: 'f"My name is {name} and I am {age} years old." likhiye.',
        hintEnglish: 'Write f"My name is {name} and I am {age} years old."'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print() ke andar pura f-string daalkar run karein.',
        hintEnglish: 'Wrap the f-string inside print().'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasFString = /f['"]/.test(code);
      const passed = hasFString && stdout.trim() === 'My name is Alex and I am 12 years old.';
      return {
        passed,
        message: passed ? '🎉 Great job! You successfully embedded multiple variables into an f-string!' : 'Create name = "Alex", age = 12 and print the sentence.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Use an Expression Inside an f-String ──
  {
    number: 3,
    title: 'Use an Expression Inside an f-String',
    problemStatement: 'Create two Number Variables and display their Sum directly inside an f-string.',
    instructions: 'Create a = 10 and b = 20. Then print(f"Sum: {a + b}") to evaluate the expression inside {}.',
    referenceCode: 'a = 10\nb = 20\n\nprint(f"Sum: {a + b}")',
    starterCode: '# Create a = 10, b = 20 and print Sum using expression inside f-string\n',
    sampleInput: '',
    expectedOutput: 'Sum: 30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Numbers Assigned',
        conceptKey: 'numbers',
        speechHinglish: 'a = 10 aur b = 20 numbers assign hote hain.',
        speechEnglish: 'a = 10 and b = 20 store numbers in variables.',
        cardExplanationHinglish: 'a = 10, b = 20.',
        cardExplanationEnglish: 'a = 10, b = 20.',
        visualTarget: 'vars',
        visualLabel: 'a & b',
        visualSublabel: '10, 20',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Expression in Braces',
        conceptKey: 'arguments',
        speechHinglish: 'Curly braces me Python expressions jaise {a + b} likh sakte hain.',
        speechEnglish: 'Expressions like {a + b} can be evaluated directly inside braces.',
        cardExplanationHinglish: '{a + b} expression in braces.',
        cardExplanationEnglish: '{a + b} expression in braces.',
        visualTarget: 'expr',
        visualLabel: '{a + b}',
        visualSublabel: 'Math Expression',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Evaluation to 30',
        conceptKey: 'print',
        speechHinglish: 'Python pehle 10 + 20 calculate karke 30 banata hai.',
        speechEnglish: 'Python computes 10 + 20 = 30 before string creation.',
        cardExplanationHinglish: '10 + 20 = 30 calculated.',
        cardExplanationEnglish: '10 + 20 = 30 calculated.',
        visualTarget: 'calc',
        visualLabel: '30',
        visualSublabel: 'Evaluated Sum',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Output Sum: 30',
        conceptKey: 'output',
        speechHinglish: 'print() screen par Sum: 30 display karta hai.',
        speechEnglish: 'print() outputs Sum: 30 onto the screen.',
        cardExplanationHinglish: 'Sum: 30 printed.',
        cardExplanationEnglish: 'Sum: 30 printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Sum: 30',
        consoleOutput: 'Sum: 30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Numbers Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 10 aur b = 20 assign kijiye.',
        hintEnglish: 'Assign a = 10 and b = 20.'
      },
      {
        level: 2,
        name: 'Expression Hint',
        badge: 'Hint 2',
        hintHinglish: 'Braces ke andar a + b likhiye: {a + b}.',
        hintEnglish: 'Write a + b inside curly braces: {a + b}.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Sum: {a + b}") likhkar run karein.',
        hintEnglish: 'Write print(f"Sum: {a + b}").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasExpr = /\{.*?\+.*?\}/.test(code);
      const passed = hasExpr && stdout.trim() === 'Sum: 30';
      return {
        passed,
        message: passed ? '🎉 Excellent! You evaluated an arithmetic expression directly inside an f-string!' : 'Write a = 10, b = 20, and print(f"Sum: {a + b}").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Format User Input ──
  {
    number: 4,
    title: 'Format User Input',
    problemStatement: 'Ask the user for their name and city. Display a personalized introduction using an f-string.',
    instructions: 'Use input() for name and city, then print(f"Hello {name}, welcome from {city}!").',
    referenceCode: 'name = input("Enter name: ")\ncity = input("Enter city: ")\n\nprint(f"Hello {name}, welcome from {city}!")',
    starterCode: '# Ask for name and city, then print personalized greeting using f-string\n',
    sampleInput: 'Alex\nDelhi',
    expectedOutput: 'Enter name: Alex\nEnter city: Delhi\nHello Alex, welcome from Delhi!',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Receive Inputs',
        conceptKey: 'input',
        speechHinglish: 'input() user se name aur city prompt ke saath receive karta hai.',
        speechEnglish: 'input() takes name and city values from the user.',
        cardExplanationHinglish: 'name = Alex, city = Delhi.',
        cardExplanationEnglish: 'name = Alex, city = Delhi.',
        visualTarget: 'inputs',
        visualLabel: 'User Inputs',
        visualSublabel: 'Alex, Delhi',
        consoleOutput: 'Enter name: Alex\nEnter city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Dynamic f-String',
        conceptKey: 'string',
        speechHinglish: 'f-string runtime par user values ko message me replace karti hai.',
        speechEnglish: 'The f-string dynamically substitutes runtime inputs into text.',
        cardExplanationHinglish: '{name} -> Alex, {city} -> Delhi.',
        cardExplanationEnglish: '{name} -> Alex, {city} -> Delhi.',
        visualTarget: 'sub',
        visualLabel: 'Dynamic Substitution',
        visualSublabel: 'Alex & Delhi',
        consoleOutput: 'Enter name: Alex\nEnter city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Greeting Construction',
        conceptKey: 'arguments',
        speechHinglish: 'Complete greeting sentence memory me assemble hota hai.',
        speechEnglish: 'The complete greeting sentence is assembled in memory.',
        cardExplanationHinglish: 'Sentence constructed.',
        cardExplanationEnglish: 'Sentence constructed.',
        visualTarget: 'msg',
        visualLabel: 'Message',
        visualSublabel: 'Personalized greeting',
        consoleOutput: 'Enter name: Alex\nEnter city: Delhi',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Greeting',
        conceptKey: 'output',
        speechHinglish: 'Console par Hello Alex, welcome from Delhi! display ho jata hai.',
        speechEnglish: 'Console displays the personalized welcome message.',
        cardExplanationHinglish: 'Personalized greeting printed.',
        cardExplanationEnglish: 'Personalized greeting printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Hello Alex...',
        consoleOutput: 'Enter name: Alex\nEnter city: Delhi\nHello Alex, welcome from Delhi!',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Input Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = input("Enter name: ") aur city = input("Enter city: ") likhiye.',
        hintEnglish: 'Write name = input("Enter name: ") and city = input("Enter city: ").'
      },
      {
        level: 2,
        name: 'f-String Hint',
        badge: 'Hint 2',
        hintHinglish: 'f"Hello {name}, welcome from {city}!" sentence banaiye.',
        hintEnglish: 'Construct f"Hello {name}, welcome from {city}!".'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Hello {name}, welcome from {city}!") execute kijiye.',
        hintEnglish: 'Execute print(f"Hello {name}, welcome from {city}!").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = (code.match(/input\s*\(/g) || []).length >= 2;
      const hasFString = /f['"]/.test(code);
      const passed = hasInput && hasFString && stdout.includes('Hello') && stdout.includes('welcome from');
      return {
        passed,
        message: passed ? '🎉 Awesome! You dynamically formatted user input with an f-string!' : 'Take two inputs and print the personalized greeting.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Format Decimal Numbers ──
  {
    number: 5,
    title: 'Format Decimal Numbers',
    problemStatement: 'Create a Float Variable containing 49.9876. Display it with exactly two digits after the decimal point.',
    instructions: 'Create price = 49.9876. Use format specifier :.2f inside print(f"Price: {price:.2f}").',
    referenceCode: 'price = 49.9876\n\nprint(f"Price: {price:.2f}")',
    starterCode: '# Create price = 49.9876 and display with :.2f format specifier\n',
    sampleInput: '',
    expectedOutput: 'Price: 49.99',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Float Variable',
        conceptKey: 'numbers',
        speechHinglish: 'price variable me 49.9876 four decimal places ke saath store hai.',
        speechEnglish: 'price stores 49.9876 with four decimal digits.',
        cardExplanationHinglish: 'price = 49.9876.',
        cardExplanationEnglish: 'price = 49.9876.',
        visualTarget: 'vars',
        visualLabel: 'price',
        visualSublabel: '49.9876',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Format Specifier :.2f',
        conceptKey: 'arguments',
        speechHinglish: 'Colon ke baad .2f ka matlab hai float number ko two decimal places me round karna.',
        speechEnglish: ':.2f specifies rounding and formatting to two decimal places.',
        cardExplanationHinglish: ':.2f format specifier.',
        cardExplanationEnglish: ':.2f format specifier.',
        visualTarget: 'spec',
        visualLabel: ':.2f',
        visualSublabel: '2 Decimal Places',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Rounding to 49.99',
        conceptKey: 'print',
        speechHinglish: '49.9876 round hokar 49.99 ban jata hai bina original variable badle.',
        speechEnglish: '49.9876 is rounded to 49.99 without altering original variable.',
        cardExplanationHinglish: '49.9876 -> 49.99.',
        cardExplanationEnglish: '49.9876 -> 49.99.',
        visualTarget: 'round',
        visualLabel: '49.99',
        visualSublabel: 'Formatted Float',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Price: 49.99',
        conceptKey: 'output',
        speechHinglish: 'print() screen par Price: 49.99 display kar deta hai.',
        speechEnglish: 'print() outputs Price: 49.99 onto the console.',
        cardExplanationHinglish: 'Price: 49.99 printed.',
        cardExplanationEnglish: 'Price: 49.99 printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Price: 49.99',
        consoleOutput: 'Price: 49.99',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variable Hint',
        badge: 'Hint 1',
        hintHinglish: 'price = 49.9876 assign kijiye.',
        hintEnglish: 'Assign price = 49.9876.'
      },
      {
        level: 2,
        name: 'Specifier Hint',
        badge: 'Hint 2',
        hintHinglish: 'Curly braces me {price:.2f} likhiye.',
        hintEnglish: 'Write {price:.2f} inside curly braces.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Price: {price:.2f}") likhkar run karein.',
        hintEnglish: 'Run print(f"Price: {price:.2f}").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasSpecifier = /:\.2f/.test(code);
      const passed = hasSpecifier && stdout.trim() === 'Price: 49.99';
      return {
        passed,
        message: passed ? '🎉 Perfect! You mastered the :.2f float format specifier!' : 'Create price = 49.9876 and print(f"Price: {price:.2f}").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Display a Percentage ──
  {
    number: 6,
    title: 'Display a Percentage',
    problemStatement: 'Create a Variable containing the decimal ratio 0.856. Display it as a Percentage with one decimal place.',
    instructions: 'Create score_ratio = 0.856. Use format specifier :.1% inside print(f"Score: {score_ratio:.1%}").',
    referenceCode: 'score_ratio = 0.856\n\nprint(f"Score: {score_ratio:.1%}")',
    starterCode: '# Create score_ratio = 0.856 and display using :.1% percentage formatting\n',
    sampleInput: '',
    expectedOutput: 'Score: 85.6%',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Ratio Variable',
        conceptKey: 'numbers',
        speechHinglish: 'score_ratio me decimal ratio 0.856 store hota hai.',
        speechEnglish: 'score_ratio holds the fractional value 0.856.',
        cardExplanationHinglish: 'score_ratio = 0.856.',
        cardExplanationEnglish: 'score_ratio = 0.856.',
        visualTarget: 'vars',
        visualLabel: 'score_ratio',
        visualSublabel: '0.856',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Percentage Specifier :.1%',
        conceptKey: 'arguments',
        speechHinglish: 'Format type % number ko 100 se multiply karta hai aur percent symbol add karta hai.',
        speechEnglish: 'Specifier :.1% multiplies by 100, rounds to 1 decimal place, and appends %.',
        cardExplanationHinglish: ':.1% percentage formatting.',
        cardExplanationEnglish: ':.1% percentage formatting.',
        visualTarget: 'spec',
        visualLabel: ':.1%',
        visualSublabel: 'Percent Specifier',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Calculation to 85.6%',
        conceptKey: 'print',
        speechHinglish: '0.856 * 100 = 85.6% me format hota hai.',
        speechEnglish: '0.856 is formatted to 85.6%.',
        cardExplanationHinglish: '0.856 -> 85.6%.',
        cardExplanationEnglish: '0.856 -> 85.6%.',
        visualTarget: 'calc',
        visualLabel: '85.6%',
        visualSublabel: 'Formatted Ratio',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Score: 85.6%',
        conceptKey: 'output',
        speechHinglish: 'print() screen par Score: 85.6% display karta hai.',
        speechEnglish: 'print() outputs Score: 85.6% to the console.',
        cardExplanationHinglish: 'Score: 85.6% printed.',
        cardExplanationEnglish: 'Score: 85.6% printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Score: 85.6%',
        consoleOutput: 'Score: 85.6%',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variable Hint',
        badge: 'Hint 1',
        hintHinglish: 'score_ratio = 0.856 assign kijiye.',
        hintEnglish: 'Assign score_ratio = 0.856.'
      },
      {
        level: 2,
        name: 'Specifier Hint',
        badge: 'Hint 2',
        hintHinglish: 'Braces ke andar {score_ratio:.1%} likhiye.',
        hintEnglish: 'Write {score_ratio:.1%} inside curly braces.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Score: {score_ratio:.1%}") run karein.',
        hintEnglish: 'Run print(f"Score: {score_ratio:.1%}").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasPercent = /:\.1%/.test(code);
      const passed = hasPercent && stdout.trim() === 'Score: 85.6%';
      return {
        passed,
        message: passed ? '🎉 Fantastic! You formatted a decimal ratio to a percentage using :.1%!' : 'Create score_ratio = 0.856 and print(f"Score: {score_ratio:.1%}").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Format Large Numbers with Commas ──
  {
    number: 7,
    title: 'Format Large Numbers with Commas',
    problemStatement: 'Create a Variable containing 1250000. Display it with comma separators.',
    instructions: 'Create population = 1250000. Use format specifier :, inside print(f"Population: {population:,}").',
    referenceCode: 'population = 1250000\n\nprint(f"Population: {population:,}")',
    starterCode: '# Create population = 1250000 and print with comma separator :\n',
    sampleInput: '',
    expectedOutput: 'Population: 1,250,000',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Large Integer',
        conceptKey: 'numbers',
        speechHinglish: 'population variable me large integer 1250000 store hai.',
        speechEnglish: 'population holds the large integer 1250000.',
        cardExplanationHinglish: 'population = 1250000.',
        cardExplanationEnglish: 'population = 1250000.',
        visualTarget: 'vars',
        visualLabel: 'population',
        visualSublabel: '1250000',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Comma Specifier :,',
        conceptKey: 'arguments',
        speechHinglish: 'Format specifier :, digits ko thousands grouping me commas ke saath divide karta hai.',
        speechEnglish: ':, automatically inserts commas at thousand boundaries.',
        cardExplanationHinglish: ':, comma grouping specifier.',
        cardExplanationEnglish: ':, comma grouping specifier.',
        visualTarget: 'spec',
        visualLabel: ':,',
        visualSublabel: 'Thousands Grouping',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Formatted Result',
        conceptKey: 'print',
        speechHinglish: '1250000 convert hokar readable "1,250,000" ban jata hai.',
        speechEnglish: '1250000 is formatted as "1,250,000".',
        cardExplanationHinglish: '1250000 -> 1,250,000.',
        cardExplanationEnglish: '1250000 -> 1,250,000.',
        visualTarget: 'calc',
        visualLabel: '1,250,000',
        visualSublabel: 'Grouped Number',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Population: 1,250,000',
        conceptKey: 'output',
        speechHinglish: 'print() screen par Population: 1,250,000 display kar deta hai.',
        speechEnglish: 'print() displays Population: 1,250,000.',
        cardExplanationHinglish: 'Population: 1,250,000 printed.',
        cardExplanationEnglish: 'Population: 1,250,000 printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Population: 1,250,000',
        consoleOutput: 'Population: 1,250,000',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variable Hint',
        badge: 'Hint 1',
        hintHinglish: 'population = 1250000 likhkar number store kijiye.',
        hintEnglish: 'Write population = 1250000.'
      },
      {
        level: 2,
        name: 'Comma Hint',
        badge: 'Hint 2',
        hintHinglish: 'Placeholder me {population:,} comma specifier lagaiye.',
        hintEnglish: 'Add the comma specifier: {population:,}.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Population: {population:,}") execute karein.',
        hintEnglish: 'Execute print(f"Population: {population:,}").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasComma = /:,/.test(code);
      const passed = hasComma && stdout.trim() === 'Population: 1,250,000';
      return {
        passed,
        message: passed ? '🎉 Superb! You formatted a large number with comma separators!' : 'Create population = 1250000 and print(f"Population: {population:,}").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Align Text in Columns ──
  {
    number: 8,
    title: 'Align Text in Columns',
    problemStatement: "Display a student's name and marks in aligned columns using f-string width and alignment.",
    instructions: 'Create name = "Alex", marks = 95. Print header with <12 and >6, then student row.',
    referenceCode: 'name = "Alex"\nmarks = 95\n\nprint(f"{\'Name\':<12}{\'Marks\':>6}")\nprint(f"{name:<12}{marks:>6}")',
    starterCode: '# Display aligned columns using <12 and >6 width formatting\n',
    sampleInput: '',
    expectedOutput: 'Name         Marks\nAlex            95',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Width & Alignment',
        conceptKey: 'arguments',
        speechHinglish: '<12 left-align karta hai 12 character width me aur >6 right-align karta hai 6 width me.',
        speechEnglish: '<12 left-aligns in 12 spaces, and >6 right-aligns in 6 spaces.',
        cardExplanationHinglish: '<12 and >6 alignment rules.',
        cardExplanationEnglish: '<12 and >6 alignment rules.',
        visualTarget: 'align',
        visualLabel: '<12 & >6',
        visualSublabel: 'Left & Right Align',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Header Row',
        conceptKey: 'string',
        speechHinglish: 'Pehli line par "Name" aur "Marks" headers perfectly aligned print hote hain.',
        speechEnglish: 'Header row aligns "Name" and "Marks" cleanly into tabular columns.',
        cardExplanationHinglish: 'Header columns defined.',
        cardExplanationEnglish: 'Header columns defined.',
        visualTarget: 'header',
        visualLabel: 'Header Row',
        visualSublabel: 'Name & Marks',
        consoleOutput: 'Name         Marks',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Data Row',
        conceptKey: 'variable',
        speechHinglish: 'Doosri line par {name:<12} aur {marks:>6} exact columns ke neeche match hote hain.',
        speechEnglish: 'Data row prints "Alex" and 95 aligned precisely beneath headers.',
        cardExplanationHinglish: 'Alex and 95 aligned.',
        cardExplanationEnglish: 'Alex and 95 aligned.',
        visualTarget: 'data',
        visualLabel: 'Data Row',
        visualSublabel: 'Alex & 95',
        consoleOutput: 'Name         Marks',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Tabular Output',
        conceptKey: 'output',
        speechHinglish: 'Console par aligned tabular columns display ho jate hain.',
        speechEnglish: 'Both aligned rows are displayed on the console.',
        cardExplanationHinglish: 'Aligned columns displayed.',
        cardExplanationEnglish: 'Aligned columns displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Tabular Report',
        consoleOutput: 'Name         Marks\nAlex            95',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = "Alex" aur marks = 95 define kijiye.',
        hintEnglish: 'Define name = "Alex" and marks = 95.'
      },
      {
        level: 2,
        name: 'Header Hint',
        badge: 'Hint 2',
        hintHinglish: 'print(f"{\'Name\':<12}{\'Marks\':>6}") se header banaiye.',
        hintEnglish: 'Write print(f"{\'Name\':<12}{\'Marks\':>6}") for the header.'
      },
      {
        level: 3,
        name: 'Data Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"{name:<12}{marks:>6}") se data row print karein.',
        hintEnglish: 'Write print(f"{name:<12}{marks:>6}") for data row.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasAlign = /<12/.test(code) && />6/.test(code);
      const passed = hasAlign && stdout.includes('Name') && stdout.includes('Marks') && stdout.includes('Alex') && stdout.includes('95');
      return {
        passed,
        message: passed ? '🎉 Impressive! You built a perfectly aligned tabular column layout!' : 'Use <12 and >6 to print aligned header and data rows.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Print Literal Curly Braces ──
  {
    number: 9,
    title: 'Print Literal Curly Braces',
    problemStatement: "Use an f-string to display a Variable's Value inside literal curly braces.",
    instructions: 'Create score = 90. Use double braces {{ and }} inside print(f"Score = {{ {score} }}").',
    referenceCode: 'score = 90\n\nprint(f"Score = {{ {score} }}")',
    starterCode: '# Print Score = { 90 } using literal curly braces {{ and }}\n',
    sampleInput: '',
    expectedOutput: 'Score = { 90 }',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Score Assigned',
        conceptKey: 'numbers',
        speechHinglish: 'score = 90 integer variable create hota hai.',
        speechEnglish: 'score = 90 stores the numeric score.',
        cardExplanationHinglish: 'score = 90 in memory.',
        cardExplanationEnglish: 'score = 90 in memory.',
        visualTarget: 'vars',
        visualLabel: 'score = 90',
        visualSublabel: 'Integer',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Escaped Double Braces',
        conceptKey: 'string',
        speechHinglish: 'f-string me {{ se literal { aur }} se literal } banta hai.',
        speechEnglish: 'Doubled braces {{ and }} escape to literal { and } characters.',
        cardExplanationHinglish: '{{ -> { and }} -> }.',
        cardExplanationEnglish: '{{ -> { and }} -> }.',
        visualTarget: 'braces',
        visualLabel: '{{ and }}',
        visualSublabel: 'Literal Braces',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Inner Variable Interpolation',
        conceptKey: 'arguments',
        speechHinglish: 'Beech ka single brace {score} variable value 90 insert karta hai.',
        speechEnglish: 'The single brace {score} inside inserts the value 90.',
        cardExplanationHinglish: '{score} -> 90.',
        cardExplanationEnglish: '{score} -> 90.',
        visualTarget: 'inner',
        visualLabel: '{score}',
        visualSublabel: '-> 90',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Score = { 90 }',
        conceptKey: 'output',
        speechHinglish: 'print() screen par Score = { 90 } display karta hai.',
        speechEnglish: 'print() outputs Score = { 90 } onto the screen.',
        cardExplanationHinglish: 'Score = { 90 } printed.',
        cardExplanationEnglish: 'Score = { 90 } printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Score = { 90 }',
        consoleOutput: 'Score = { 90 }',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variable Hint',
        badge: 'Hint 1',
        hintHinglish: 'score = 90 assign kijiye.',
        hintEnglish: 'Assign score = 90.'
      },
      {
        level: 2,
        name: 'Double Braces Hint',
        badge: 'Hint 2',
        hintHinglish: 'Literal braces ke liye double curly brackets {{ aur }} use kijiye.',
        hintEnglish: 'Use doubled braces {{ and }} for literal braces.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Score = {{ {score} }}") likhkar run karein.',
        hintEnglish: 'Write print(f"Score = {{ {score} }}").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasLiteral = /\{\{.*?\}\}/.test(code);
      const passed = hasLiteral && stdout.trim() === 'Score = { 90 }';
      return {
        passed,
        message: passed ? '🎉 Brilliant! You printed literal curly braces using {{ and }}!' : 'Print Score = { 90 } using double curly braces.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Fix an f-String Mistake ──
  {
    number: 10,
    title: 'Fix an f-String Mistake',
    problemStatement: 'A student wants to display the Value of name, but the program prints {name} literally. Fix the Code.',
    instructions: 'Add the missing f prefix before the string quotes in print("Hello {name}").',
    referenceCode: 'name = "Alex"\nprint(f"Hello {name}")',
    starterCode: 'name = "Alex"\nprint("Hello {name}")',
    sampleInput: '',
    expectedOutput: 'Hello Alex',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'The Bug: Missing f',
        conceptKey: 'string',
        speechHinglish: 'String ke aage f nahi hai, isliye Python ne {name} ko normal text samajhkar print kar diya.',
        speechEnglish: 'Without an f prefix, Python treats {name} as plain literal text.',
        cardExplanationHinglish: 'Missing f prefix bug.',
        cardExplanationEnglish: 'Missing f prefix bug.',
        visualTarget: 'bug',
        visualLabel: '"Hello {name}"',
        visualSublabel: 'Missing f',
        consoleOutput: 'Hello {name}',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Add f Prefix',
        conceptKey: 'arguments',
        speechHinglish: 'Opening quote se theek pehle lowercase f lagane se dynamic formatting enable hoti hai.',
        speechEnglish: 'Adding f before the quote enables expression interpolation.',
        cardExplanationHinglish: 'f prefix added.',
        cardExplanationEnglish: 'f prefix added.',
        visualTarget: 'fix',
        visualLabel: 'f"Hello {name}"',
        visualSublabel: 'f-String Enabled',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Dynamic Evaluation',
        conceptKey: 'print',
        speechHinglish: 'Ab {name} evaluate hokar Alex me badal jata hai.',
        speechEnglish: '{name} now evaluates dynamically to Alex.',
        cardExplanationHinglish: '{name} -> Alex.',
        cardExplanationEnglish: '{name} -> Alex.',
        visualTarget: 'eval',
        visualLabel: 'Alex',
        visualSublabel: 'Evaluated Name',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Hello Alex',
        conceptKey: 'output',
        speechHinglish: 'Console par correctly Hello Alex display ho jata hai.',
        speechEnglish: 'Console outputs Hello Alex correctly.',
        cardExplanationHinglish: 'Hello Alex printed.',
        cardExplanationEnglish: 'Hello Alex printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Hello Alex',
        consoleOutput: 'Hello Alex',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Inspection Hint',
        badge: 'Hint 1',
        hintHinglish: 'Check kijiye quotes se pehle kya missing hai.',
        hintEnglish: 'Check what is missing right before quotes.'
      },
      {
        level: 2,
        name: 'Prefix Hint',
        badge: 'Hint 2',
        hintHinglish: 'print("...") ko print(f"...") me badaliye.',
        hintEnglish: 'Change print("...") to print(f"...").'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(f"Hello {name}") likhiye.',
        hintEnglish: 'Write print(f"Hello {name}").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasF = /f['"]Hello/.test(code);
      const passed = hasF && stdout.trim() === 'Hello Alex';
      return {
        passed,
        message: passed ? '🎉 Bug Fixed! Adding the f prefix activated dynamic interpolation!' : 'Add the f prefix: print(f"Hello {name}").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Format a Shopping Receipt ──
  {
    number: 11,
    title: 'Format a Shopping Receipt',
    problemStatement: 'Create a formatted Shopping Receipt using Product Name, Price, Quantity and Total. Use f-strings to display the monetary values with exactly two decimal places.',
    instructions: 'Create product = "Notebook", price = 49.5, quantity = 3, calculate total, and print receipt using :.2f.',
    referenceCode: 'product = "Notebook"\nprice = 49.5\nquantity = 3\n\ntotal = price * quantity\n\nprint("===== SHOPPING RECEIPT =====")\nprint(f"Product  : {product}")\nprint(f"Price    : {price:.2f}")\nprint(f"Quantity : {quantity}")\nprint(f"Total    : {total:.2f}")\nprint("============================")',
    starterCode: '# Build shopping receipt with product, price, quantity, total and :.2f\n',
    sampleInput: '',
    expectedOutput: '===== SHOPPING RECEIPT =====\nProduct  : Notebook\nPrice    : 49.50\nQuantity : 3\nTotal    : 148.50\n============================',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Variables & Multiplication',
        conceptKey: 'numbers',
        speechHinglish: 'product, price, quantity assign karke total = price * quantity calculate kiya.',
        speechEnglish: 'Assigned product, price, quantity and computed total = price * quantity.',
        cardExplanationHinglish: 'total = 49.5 * 3 = 148.5.',
        cardExplanationEnglish: 'total = 49.5 * 3 = 148.5.',
        visualTarget: 'calc',
        visualLabel: 'total = 148.5',
        visualSublabel: 'Multiplication',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Monetary Formatting :.2f',
        conceptKey: 'arguments',
        speechHinglish: 'Price 49.50 aur Total 148.50 ko :.2f do decimal places ke format me convert karta hai.',
        speechEnglish: ':.2f ensures amounts display cleanly as 49.50 and 148.50.',
        cardExplanationHinglish: '49.5 -> 49.50, 148.5 -> 148.50.',
        cardExplanationEnglish: '49.5 -> 49.50, 148.5 -> 148.50.',
        visualTarget: 'fmt',
        visualLabel: ':.2f Currency',
        visualSublabel: 'Standard Decimals',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Receipt Structure',
        conceptKey: 'string',
        speechHinglish: 'Header, product, price, quantity aur total boundary lines ke saath format hote hain.',
        speechEnglish: 'Receipt lines are organized between boundary lines.',
        cardExplanationHinglish: 'Receipt lines arranged.',
        cardExplanationEnglish: 'Receipt lines arranged.',
        visualTarget: 'struct',
        visualLabel: 'Receipt Layout',
        visualSublabel: 'Clean Table',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Full Receipt',
        conceptKey: 'output',
        speechHinglish: 'Screen par professional Shopping Receipt display ho jata hai.',
        speechEnglish: 'Full commercial shopping receipt displays on the console.',
        cardExplanationHinglish: 'Shopping Receipt displayed.',
        cardExplanationEnglish: 'Shopping Receipt displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Receipt Output',
        consoleOutput: '===== SHOPPING RECEIPT =====\nProduct  : Notebook\nPrice    : 49.50\nQuantity : 3\nTotal    : 148.50\n============================',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'product = "Notebook", price = 49.5, quantity = 3 banaiye.',
        hintEnglish: 'Set product = "Notebook", price = 49.5, quantity = 3.'
      },
      {
        level: 2,
        name: 'Total Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = price * quantity se total calculate karein.',
        hintEnglish: 'Calculate total = price * quantity.'
      },
      {
        level: 3,
        name: 'Receipt Hint',
        badge: 'Hint 3',
        hintHinglish: 'f-string me {price:.2f} aur {total:.2f} use karke receipt print kijiye.',
        hintEnglish: 'Use {price:.2f} and {total:.2f} in the print statements.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasCalc = /\*|price\s*\*\s*quantity/.test(code);
      const hasFmt = /:\.2f/.test(code);
      const passed = hasCalc && hasFmt && stdout.includes('148.50') && stdout.includes('49.50');
      return {
        passed,
        message: passed ? '🎉 Outstanding! You formatted a complete commercial shopping receipt with f-strings!' : 'Calculate total and format price and total using :.2f.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Student Performance Report Mini Project ──
  {
    number: 12,
    title: 'Student Performance Report Mini Project',
    problemStatement: 'Build a formatted Student Performance Report. Ask the user for Name, Python Marks, SQL Marks, and Excel Marks. Calculate Total and Percentage, then display using f-strings.',
    instructions: 'Take input() for name and float(input()) for 3 marks. Calculate total and percentage = total / 300 * 100, then display report with :.2f.',
    referenceCode: 'name = input("Enter student name: ")\n\npython_marks = float(input("Enter Python marks: "))\nsql_marks = float(input("Enter SQL marks: "))\nexcel_marks = float(input("Enter Excel marks: "))\n\ntotal = python_marks + sql_marks + excel_marks\npercentage = total / 300 * 100\n\nprint("===== STUDENT REPORT =====")\nprint(f"Name       : {name}")\nprint(f"Python     : {python_marks:.2f}")\nprint(f"SQL        : {sql_marks:.2f}")\nprint(f"Excel      : {excel_marks:.2f}")\nprint(f"Total      : {total:.2f}")\nprint(f"Percentage : {percentage:.2f}%")\nprint("==========================")',
    starterCode: '# Build student performance report from user inputs with total, percentage and :.2f\n',
    sampleInput: 'Alex\n85\n90\n95',
    expectedOutput: 'Enter student name: Alex\nEnter Python marks: 85\nEnter SQL marks: 90\nEnter Excel marks: 95\n===== STUDENT REPORT =====\nName       : Alex\nPython     : 85.00\nSQL        : 90.00\nExcel      : 95.00\nTotal      : 270.00\nPercentage : 90.00%\n==========================',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Input & Float Conversion',
        conceptKey: 'input',
        speechHinglish: 'float(input()) user ke entered marks 85, 90, 95 ko numbers me badalta hai.',
        speechEnglish: 'float(input()) converts user input marks into numbers.',
        cardExplanationHinglish: 'Alex, 85.0, 90.0, 95.0.',
        cardExplanationEnglish: 'Alex, 85.0, 90.0, 95.0.',
        visualTarget: 'inputs',
        visualLabel: 'Inputs',
        visualSublabel: 'Name & Marks',
        consoleOutput: 'Enter student name: Alex\nEnter Python marks: 85\nEnter SQL marks: 90\nEnter Excel marks: 95',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Total & Percentage Math',
        conceptKey: 'numbers',
        speechHinglish: 'total 270.0 calculate hota hai aur percentage total / 300 * 100 se 90.0% nikalta hai.',
        speechEnglish: 'total = 270.0 and percentage = total / 300 * 100 = 90.0%.',
        cardExplanationHinglish: 'total = 270.0, percentage = 90.0%.',
        cardExplanationEnglish: 'total = 270.0, percentage = 90.0%.',
        visualTarget: 'calc',
        visualLabel: 'Total & %',
        visualSublabel: '270.0 & 90.0%',
        consoleOutput: 'Enter student name: Alex\nEnter Python marks: 85\nEnter SQL marks: 90\nEnter Excel marks: 95',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'f-String Precision :.2f',
        conceptKey: 'arguments',
        speechHinglish: 'Har subject, total aur percentage ko :.2f se clean two-decimal precision me format kiya.',
        speechEnglish: 'Each line is formatted to two decimal places with :.2f.',
        cardExplanationHinglish: ':.2f formatting on all numeric rows.',
        cardExplanationEnglish: ':.2f formatting on all numeric rows.',
        visualTarget: 'fmt',
        visualLabel: ':.2f Precision',
        visualSublabel: 'Two Decimals',
        consoleOutput: 'Enter student name: Alex\nEnter Python marks: 85\nEnter SQL marks: 90\nEnter Excel marks: 95',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Student Report',
        conceptKey: 'output',
        speechHinglish: 'Full Student Report cleanly screen par display ho jata hai.',
        speechEnglish: 'Full student performance report is displayed on the console.',
        cardExplanationHinglish: 'Report printed successfully.',
        cardExplanationEnglish: 'Report printed successfully.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Report Card',
        consoleOutput: 'Enter student name: Alex\nEnter Python marks: 85\nEnter SQL marks: 90\nEnter Excel marks: 95\n===== STUDENT REPORT =====\nName       : Alex\nPython     : 85.00\nSQL        : 90.00\nExcel      : 95.00\nTotal      : 270.00\nPercentage : 90.00%\n==========================',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Inputs Hint',
        badge: 'Hint 1',
        hintHinglish: 'name input lijiye aur teen subjects ke marks float(input()) se store karein.',
        hintEnglish: 'Take name with input() and 3 subject marks with float(input()).'
      },
      {
        level: 2,
        name: 'Math Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = python_marks + sql_marks + excel_marks aur percentage = total / 300 * 100 calculate karein.',
        hintEnglish: 'Calculate total marks and percentage = total / 300 * 100.'
      },
      {
        level: 3,
        name: 'Report Hint',
        badge: 'Hint 3',
        hintHinglish: 'f-string me :.2f format specifier use karke formatted report print kijiye.',
        hintEnglish: 'Use f-strings with :.2f for each numeric line in the report.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInputs = (code.match(/input\s*\(/g) || []).length >= 4;
      const hasTotal = /\+/.test(code);
      const hasPerc = /\/|percentage/i.test(code);
      const passed = hasInputs && hasTotal && (stdout.includes('270.00') || stdout.includes('Total')) && (stdout.includes('90.00%') || stdout.includes('Percentage'));
      return {
        passed,
        message: passed ? '🎉 Masterful! You built an interactive real-world Student Performance Report with dynamic f-string formatting!' : 'Take 4 inputs, calculate total and percentage, and print the formatted report.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ═══════════════════════════════════════════════════════════════════════════
// TOPIC 15: Escape Sequences (10 Questions)
// ═══════════════════════════════════════════════════════════════════════════

export const TOPIC_15_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Print Text on Two Lines ──
  {
    number: 1,
    title: 'Print Text on Two Lines',
    problemStatement: 'Write a Python program that displays Hello and Python on separate lines using a single print() statement and the \\n Escape Sequence.',
    instructions: 'Use a single print("Hello\\nPython") to output on two separate lines.',
    referenceCode: 'print("Hello\\nPython")',
    starterCode: '# Display Hello and Python on separate lines using \\n\n',
    sampleInput: '',
    expectedOutput: 'Hello\nPython',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Source Text & Escape',
        conceptKey: 'string',
        speechHinglish: 'print("Hello\\nPython") me Hello ke baad backslash n ek Escape Sequence hai.',
        speechEnglish: 'In print("Hello\\nPython"), backslash n after Hello is an Escape Sequence.',
        cardExplanationHinglish: 'Hello followed by \\n escape sequence.',
        cardExplanationEnglish: 'Hello followed by \\n escape sequence.',
        visualTarget: 'escape',
        visualLabel: '\\n Sequence',
        visualSublabel: 'Newline Character',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Interpreted Newline',
        conceptKey: 'arguments',
        speechHinglish: 'Python backslash n ko Newline character me convert karta hai.',
        speechEnglish: 'Python interprets \\n as a single newline character (line break).',
        cardExplanationHinglish: '\\n -> line break.',
        cardExplanationEnglish: '\\n -> line break.',
        visualTarget: 'nl',
        visualLabel: 'Line Break',
        visualSublabel: 'Next Line Trigger',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Cursor Moves Down',
        conceptKey: 'print',
        speechHinglish: 'Hello print hone ke baad cursor next line par jump karta hai.',
        speechEnglish: 'After Hello is printed, cursor shifts down to line 2.',
        cardExplanationHinglish: 'Cursor shifted to row 2.',
        cardExplanationEnglish: 'Cursor shifted to row 2.',
        visualTarget: 'cursor',
        visualLabel: 'Row 2',
        visualSublabel: 'Cursor Shift',
        consoleOutput: 'Hello',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Two Lines',
        conceptKey: 'output',
        speechHinglish: 'Python second line par print hota hai aur two lines output complete hoti hai.',
        speechEnglish: 'Python prints on line 2, completing the two-line output.',
        cardExplanationHinglish: 'Hello\\nPython displayed.',
        cardExplanationEnglish: 'Hello\\nPython displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '2 Lines',
        consoleOutput: 'Hello\nPython',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Single Statement Hint',
        badge: 'Hint 1',
        hintHinglish: 'Ek hi print() statement use kijiye.',
        hintEnglish: 'Use a single print() statement.'
      },
      {
        level: 2,
        name: 'Sequence Hint',
        badge: 'Hint 2',
        hintHinglish: 'Hello aur Python ke beech me \\n lagaiye.',
        hintEnglish: 'Put \\n between Hello and Python.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Hello\\nPython") likhkar execute karein.',
        hintEnglish: 'Write print("Hello\\nPython").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasNewline = code.includes('\\n') || stdout.includes('\n');
      const passed = hasNewline && stdout.includes('Hello') && stdout.includes('Python');
      return {
        passed,
        message: passed ? '🎉 Brilliant! You printed two lines using the \\n escape sequence!' : 'Use print("Hello\\nPython") to output on two separate lines.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Print Three Lines ──
  {
    number: 2,
    title: 'Print Three Lines',
    problemStatement: 'Display three programming languages on separate lines using one String and \\n.',
    instructions: 'Use print("Python\\nSQL\\nJava") to display three languages on separate lines.',
    referenceCode: 'print("Python\\nSQL\\nJava")',
    starterCode: '# Display Python, SQL, Java on separate lines using \\n\n',
    sampleInput: '',
    expectedOutput: 'Python\nSQL\nJava',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Multiple Newlines',
        conceptKey: 'string',
        speechHinglish: 'Ek single string ke andar multiple \\n escape sequences use kar sakte hain.',
        speechEnglish: 'A single string can hold multiple \\n escape sequences.',
        cardExplanationHinglish: 'Multiple \\n sequences in one string.',
        cardExplanationEnglish: 'Multiple \\n sequences in one string.',
        visualTarget: 'multi',
        visualLabel: 'Multiple \\n',
        visualSublabel: 'Repeated Escapes',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'First Break to SQL',
        conceptKey: 'arguments',
        speechHinglish: 'Pehla \\n Python ke baad cursor ko second line par shift karta hai jahan SQL print hota hai.',
        speechEnglish: 'First \\n breaks after Python, placing SQL on line 2.',
        cardExplanationHinglish: 'Python -> line 1, SQL -> line 2.',
        cardExplanationEnglish: 'Python -> line 1, SQL -> line 2.',
        visualTarget: 'line2',
        visualLabel: 'Line 2',
        visualSublabel: 'SQL',
        consoleOutput: 'Python\nSQL',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Second Break to Java',
        conceptKey: 'print',
        speechHinglish: 'Doosra \\n SQL ke baad cursor ko third line par bhejta hai jahan Java print hota hai.',
        speechEnglish: 'Second \\n breaks after SQL, placing Java on line 3.',
        cardExplanationHinglish: 'Java -> line 3.',
        cardExplanationEnglish: 'Java -> line 3.',
        visualTarget: 'line3',
        visualLabel: 'Line 3',
        visualSublabel: 'Java',
        consoleOutput: 'Python\nSQL\nJava',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display 3 Lines',
        conceptKey: 'output',
        speechHinglish: 'Terminal par teeno languages clean 3 separate lines me display ho jati hain.',
        speechEnglish: 'All three languages display across 3 separate terminal lines.',
        cardExplanationHinglish: 'Three lines output complete.',
        cardExplanationEnglish: 'Three lines output complete.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '3 Lines',
        consoleOutput: 'Python\nSQL\nJava',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Single String Hint',
        badge: 'Hint 1',
        hintHinglish: 'Ek hi string me Python, SQL aur Java likhiye.',
        hintEnglish: 'Write Python, SQL, and Java in one string.'
      },
      {
        level: 2,
        name: 'Separators Hint',
        badge: 'Hint 2',
        hintHinglish: 'Har word ke beech me \\n lagaiye.',
        hintEnglish: 'Put \\n between words.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Python\\nSQL\\nJava") likhkar run karein.',
        hintEnglish: 'Execute print("Python\\nSQL\\nJava").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasNewlines = code.includes('\\n') || stdout.includes('\n');
      const passed = hasNewlines && stdout.includes('Python') && stdout.includes('SQL') && stdout.includes('Java');
      return {
        passed,
        message: passed ? '🎉 Great job! You created a clean three-line output using \\n!' : 'Use print("Python\\nSQL\\nJava") to print 3 lines.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Create Space Using Tab ──
  {
    number: 3,
    title: 'Create Space Using Tab',
    problemStatement: 'Print Name and Age separated by a Tab using \\t.',
    instructions: 'Use \\t between words: print("Name\\tAge") and print("Alex\\t12").',
    referenceCode: 'print("Name\\tAge")\nprint("Alex\\t12")',
    starterCode: '# Print Name and Age with \\t, then Alex and 12 with \\t\n',
    sampleInput: '',
    expectedOutput: 'Name\tAge\nAlex\t12',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Horizontal Tab \\t',
        conceptKey: 'string',
        speechHinglish: '\\t Horizontal Tab escape sequence hai jo cursor ko next tab stop tak le jata hai.',
        speechEnglish: '\\t is the Horizontal Tab escape sequence advancing the cursor to the next tab stop.',
        cardExplanationHinglish: '\\t horizontal tab spacing.',
        cardExplanationEnglish: '\\t horizontal tab spacing.',
        visualTarget: 'tab',
        visualLabel: '\\t Tab',
        visualSublabel: 'Tab Stop Spacing',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Header Tab Row',
        conceptKey: 'arguments',
        speechHinglish: 'Pehli line me Name aur Age ke beech tab space create hota hai.',
        speechEnglish: 'Line 1 prints Name and Age separated by a tab interval.',
        cardExplanationHinglish: 'Name\\tAge printed.',
        cardExplanationEnglish: 'Name\\tAge printed.',
        visualTarget: 'hdr',
        visualLabel: 'Header',
        visualSublabel: 'Name\\tAge',
        consoleOutput: 'Name\tAge',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Data Tab Row',
        conceptKey: 'print',
        speechHinglish: 'Doosri line me Alex aur 12 ke beech tab lagane se exact alignment milti hai.',
        speechEnglish: 'Line 2 aligns Alex and 12 under the respective header columns.',
        cardExplanationHinglish: 'Alex\\t12 aligned.',
        cardExplanationEnglish: 'Alex\\t12 aligned.',
        visualTarget: 'data',
        visualLabel: 'Data',
        visualSublabel: 'Alex\\t12',
        consoleOutput: 'Name\tAge\nAlex\t12',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Tab Columns',
        conceptKey: 'output',
        speechHinglish: 'Console par aligned tabular table display ho jata hai.',
        speechEnglish: 'The console displays clean tab-separated columns.',
        cardExplanationHinglish: 'Tabular columns output.',
        cardExplanationEnglish: 'Tabular columns output.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Tab Spacing',
        consoleOutput: 'Name\tAge\nAlex\t12',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Tab Sequence Hint',
        badge: 'Hint 1',
        hintHinglish: 'Tab ke liye \\t escape sequence use kijiye.',
        hintEnglish: 'Use \\t for tab spacing.'
      },
      {
        level: 2,
        name: 'Header Hint',
        badge: 'Hint 2',
        hintHinglish: 'print("Name\\tAge") likhkar header print karein.',
        hintEnglish: 'Write print("Name\\tAge") for header.'
      },
      {
        level: 3,
        name: 'Data Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Alex\\t12") likhkar data row print karein.',
        hintEnglish: 'Write print("Alex\\t12") for data row.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasTab = code.includes('\\t') || stdout.includes('\t');
      const passed = hasTab && stdout.includes('Name') && stdout.includes('Age') && stdout.includes('Alex') && stdout.includes('12');
      return {
        passed,
        message: passed ? '🎉 Excellent! You formatted tabular columns using \\t!' : 'Print Name\\tAge and Alex\\t12.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Print a Backslash ──
  {
    number: 4,
    title: 'Print a Backslash',
    problemStatement: 'Display the Windows-style path C:\\Users\\Alex using a normal Python String.',
    instructions: 'Use double backslashes \\\\ to escape each backslash: print("C:\\\\Users\\\\Alex").',
    referenceCode: 'print("C:\\\\Users\\\\Alex")',
    starterCode: '# Display C:\\Users\\Alex by escaping each backslash\n',
    sampleInput: '',
    expectedOutput: 'C:\\Users\\Alex',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Backslash is an Escape Char',
        conceptKey: 'string',
        speechHinglish: 'Python me backslash special escape character hota hai jo agle letter ko special meaning deta hai.',
        speechEnglish: 'In Python strings, the backslash escapes following characters.',
        cardExplanationHinglish: 'Backslash is an escape character.',
        cardExplanationEnglish: 'Backslash is an escape character.',
        visualTarget: 'bs',
        visualLabel: '\\',
        visualSublabel: 'Escape Character',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Escaped Backslash \\\\',
        conceptKey: 'arguments',
        speechHinglish: 'Actual backslash print karne ke liye source code me double backslash \\\\ likhte hain.',
        speechEnglish: 'To output a literal backslash, write double backslashes \\\\.',
        cardExplanationHinglish: '\\\\ -> single literal \\.',
        cardExplanationEnglish: '\\\\ -> single literal \\.',
        visualTarget: 'dbl',
        visualLabel: '\\\\',
        visualSublabel: 'Escaped Backslash',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Path Translation',
        conceptKey: 'print',
        speechHinglish: 'C:\\\\Users\\\\Alex evaluate hokar clean Windows path C:\\Users\\Alex ban jata hai.',
        speechEnglish: 'C:\\\\Users\\\\Alex evaluates to the valid path C:\\Users\\Alex.',
        cardExplanationHinglish: 'Path evaluated.',
        cardExplanationEnglish: 'Path evaluated.',
        visualTarget: 'eval',
        visualLabel: 'C:\\Users\\Alex',
        visualSublabel: 'Path Output',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Windows Path',
        conceptKey: 'output',
        speechHinglish: 'Console par exactly C:\\Users\\Alex display ho jata hai.',
        speechEnglish: 'The console displays the Windows-style path with single backslashes.',
        cardExplanationHinglish: 'C:\\Users\\Alex printed.',
        cardExplanationEnglish: 'C:\\Users\\Alex printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'C:\\Users\\Alex',
        consoleOutput: 'C:\\Users\\Alex',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Escape Hint',
        badge: 'Hint 1',
        hintHinglish: 'Literal backslash ke liye double backslash use kijiye.',
        hintEnglish: 'Use double backslash for a literal backslash.'
      },
      {
        level: 2,
        name: 'Path Hint',
        badge: 'Hint 2',
        hintHinglish: 'C: ke baad \\\\ aur Users ke baad \\\\ likhiye.',
        hintEnglish: 'Put \\\\ after C: and after Users.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("C:\\\\Users\\\\Alex") run karein.',
        hintEnglish: 'Run print("C:\\\\Users\\\\Alex").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasDouble = /\\\\/.test(code);
      const passed = hasDouble && stdout.trim() === 'C:\\Users\\Alex';
      return {
        passed,
        message: passed ? '🎉 Perfect! You mastered escaping literal backslashes with \\\\!' : 'Use double backslashes: print("C:\\\\Users\\\\Alex").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Print Double Quotes Inside a String ──
  {
    number: 5,
    title: 'Print Double Quotes Inside a String',
    problemStatement: 'Display the following sentence using escaped Double Quotes: She said, "Hello Python!"',
    instructions: 'Use \\\" to escape double quotes: print("She said, \\\"Hello Python!\\\"").',
    referenceCode: 'print("She said, \\\"Hello Python!\\\"")',
    starterCode: '# Display sentence with escaped double quotes \\\"\n',
    sampleInput: '',
    expectedOutput: 'She said, "Hello Python!"',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Outer Quote Boundary',
        conceptKey: 'string',
        speechHinglish: 'Outer double quotes string ki boundary banate hain.',
        speechEnglish: 'Outer double quotes define the string boundary.',
        cardExplanationHinglish: 'String delimited by double quotes.',
        cardExplanationEnglish: 'String delimited by double quotes.',
        visualTarget: 'outer',
        visualLabel: 'Outer Quotes',
        visualSublabel: '"..."',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Escaped Quote \\"',
        conceptKey: 'arguments',
        speechHinglish: 'Quotes ke pehle backslash lagane se Python use string boundary nahi, literal quote samajhta hai.',
        speechEnglish: '\\\" escapes the double quote so Python treats it as text rather than a delimiter.',
        cardExplanationHinglish: '\\\" -> literal quote.',
        cardExplanationEnglish: '\\\" -> literal quote.',
        visualTarget: 'quote',
        visualLabel: '\\"',
        visualSublabel: 'Escaped Quote',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Quoted Greeting',
        conceptKey: 'print',
        speechHinglish: 'Hello Python! ke aage aur peeche quotes text ka part ban jate hain.',
        speechEnglish: 'The quotes around Hello Python! are embedded into the output text.',
        cardExplanationHinglish: '"Hello Python!" embedded.',
        cardExplanationEnglish: '"Hello Python!" embedded.',
        visualTarget: 'embedded',
        visualLabel: '"Hello Python!"',
        visualSublabel: 'Quoted Text',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Quoted Sentence',
        conceptKey: 'output',
        speechHinglish: 'Screen par She said, "Hello Python!" double quotes ke saath display hota hai.',
        speechEnglish: 'Displays the complete sentence with embedded double quotes.',
        cardExplanationHinglish: 'She said, "Hello Python!" printed.',
        cardExplanationEnglish: 'She said, "Hello Python!" printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Quoted Sentence',
        consoleOutput: 'She said, "Hello Python!"',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Quotes Hint',
        badge: 'Hint 1',
        hintHinglish: 'Double-quoted string ke andar quotes ko escape kijiye.',
        hintEnglish: 'Escape double quotes inside a double-quoted string.'
      },
      {
        level: 2,
        name: 'Escape Sequence Hint',
        badge: 'Hint 2',
        hintHinglish: 'Quotes se pehle backslash lagaiye: \\\".',
        hintEnglish: 'Precede quotes with backslash: \\\".'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("She said, \\\"Hello Python!\\\"") likhiye.',
        hintEnglish: 'Write print("She said, \\\"Hello Python!\\\"").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasEscaped = /\\"/.test(code);
      const passed = hasEscaped && stdout.trim() === 'She said, "Hello Python!"';
      return {
        passed,
        message: passed ? '🎉 Awesome! You escaped inner double quotes successfully!' : 'Use escaped quotes: print("She said, \\\"Hello Python!\\\"").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Print an Apostrophe Using Escape ──
  {
    number: 6,
    title: 'Print an Apostrophe Using Escape',
    problemStatement: "Use a Single-Quoted String and the \\' Escape Sequence to display: It's Python time!",
    instructions: "Use a single-quoted string with \\': print('It\\\'s Python time!').",
    referenceCode: "print('It\\\'s Python time!')",
    starterCode: "# Use single-quoted string and \\\' to print: It's Python time!\n",
    sampleInput: '',
    expectedOutput: "It's Python time!",
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Single-Quoted String',
        conceptKey: 'string',
        speechHinglish: "String single quotes '...' se open aur close hoti hai.",
        speechEnglish: "The string is delimited by single quotes '...'.",
        cardExplanationHinglish: "Single-quoted string delimiters.",
        cardExplanationEnglish: "Single-quoted string delimiters.",
        visualTarget: 'single',
        visualLabel: "'...'",
        visualSublabel: 'Single Quotes',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: "Escaped Apostrophe \\'",
        conceptKey: 'arguments',
        speechHinglish: "It's me apostrophe string ko premature close kar sakta tha, isliye \\\' lagaya.",
        speechEnglish: "To avoid prematurely closing the single-quoted string, escape the apostrophe with \\\'.",
        cardExplanationHinglish: "\\\' -> literal apostrophe.",
        cardExplanationEnglish: "\\\' -> literal apostrophe.",
        visualTarget: 'apos',
        visualLabel: "\\'",
        visualSublabel: 'Escaped Apostrophe',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'String Continuity',
        conceptKey: 'print',
        speechHinglish: "Python string ko smoothly read karta hai aur apostrophe text me retain hota hai.",
        speechEnglish: "Python continues reading without error, retaining the apostrophe as literal text.",
        cardExplanationHinglish: "Text preserved.",
        cardExplanationEnglish: "Text preserved.",
        visualTarget: 'cont',
        visualLabel: "It's",
        visualSublabel: 'Safe Apostrophe',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: "Display It's Python time!",
        conceptKey: 'output',
        speechHinglish: "Console par It's Python time! cleanly display hota hai.",
        speechEnglish: "Console prints It's Python time! with the apostrophe.",
        cardExplanationHinglish: "It's Python time! printed.",
        cardExplanationEnglish: "It's Python time! printed.",
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: "It's Python time!",
        consoleOutput: "It's Python time!",
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Single Quotes Hint',
        badge: 'Hint 1',
        hintHinglish: "String ko single quotes '...' ke andar rakhiye.",
        hintEnglish: "Keep the string inside single quotes '...'."
      },
      {
        level: 2,
        name: 'Apostrophe Hint',
        badge: 'Hint 2',
        hintHinglish: "It aur s ke beech me \\\' likhiye.",
        hintEnglish: "Write \\\' between It and s."
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: "print('It\\\'s Python time!') run karein.",
        hintEnglish: "Run print('It\\\'s Python time!')."
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasEscaped = /\\'/.test(code);
      const passed = hasEscaped && stdout.trim() === "It's Python time!";
      return {
        passed,
        message: passed ? "🎉 Fantastic! You safely escaped an apostrophe inside a single-quoted string!" : "Use \\': print('It\\\'s Python time!')."
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Understand Carriage Return ──
  {
    number: 7,
    title: 'Understand Carriage Return',
    problemStatement: 'Use \\r to return the cursor to the beginning of the current line.',
    instructions: 'Use \\r between Hello and Bye: print("Hello\\rBye").',
    referenceCode: 'print("Hello\\rBye")',
    starterCode: '# Use \\r between Hello and Bye\n',
    sampleInput: '',
    expectedOutput: 'Hello\rBye',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Write Hello',
        conceptKey: 'string',
        speechHinglish: 'Pehle Hello output buffer me write hota hai.',
        speechEnglish: 'Initially Hello is written into the terminal stream.',
        cardExplanationHinglish: 'Hello written.',
        cardExplanationEnglish: 'Hello written.',
        visualTarget: 'hello',
        visualLabel: 'Hello',
        visualSublabel: 'Initial Text',
        consoleOutput: 'Hello',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Carriage Return \\r',
        conceptKey: 'arguments',
        speechHinglish: '\\r Carriage Return terminal cursor ko current line ke start me wapas bhej deta hai.',
        speechEnglish: '\\r resets the terminal cursor to the beginning of the current line.',
        cardExplanationHinglish: '\\r resets cursor to column 0.',
        cardExplanationEnglish: '\\r resets cursor to column 0.',
        visualTarget: 'cr',
        visualLabel: '\\r Return',
        visualSublabel: 'Cursor to Column 0',
        consoleOutput: 'Hello',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Overwrite with Bye',
        conceptKey: 'print',
        speechHinglish: 'Line ke start se Bye likhne par Hel overwrite hokar Bye ban sakta hai.',
        speechEnglish: 'Writing Bye from column 0 overwrites characters in compatible terminals.',
        cardExplanationHinglish: 'Bye overwrites Hel.',
        cardExplanationEnglish: 'Bye overwrites Hel.',
        visualTarget: 'bye',
        visualLabel: 'Bye',
        visualSublabel: 'Overwritten Prefix',
        consoleOutput: 'Hello\rBye',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Raw Output Stream',
        conceptKey: 'output',
        speechHinglish: 'Raw stdout me Hello\\rBye stream me accurately preserve hota hai.',
        speechEnglish: 'Raw stdout preserves the exact Hello\\rBye character sequence.',
        cardExplanationHinglish: 'Raw stdout verified.',
        cardExplanationEnglish: 'Raw stdout verified.',
        visualTarget: 'output',
        visualLabel: 'Raw Output',
        visualSublabel: 'Hello\\rBye',
        consoleOutput: 'Hello\rBye',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'CR Sequence Hint',
        badge: 'Hint 1',
        hintHinglish: 'Carriage Return ke liye \\r use kijiye.',
        hintEnglish: 'Use \\r for Carriage Return.'
      },
      {
        level: 2,
        name: 'Position Hint',
        badge: 'Hint 2',
        hintHinglish: 'Hello ke baad \\r aur fir Bye likhiye.',
        hintEnglish: 'Put \\r between Hello and Bye.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Hello\\rBye") likhkar run karein.',
        hintEnglish: 'Write print("Hello\\rBye").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasCR = code.includes('\\r') || stdout.includes('\r');
      const passed = hasCR && (stdout.includes('Bye') || stdout.includes('Hello'));
      return {
        passed,
        message: passed ? '🎉 Superb! You explored Carriage Return \\r behavior!' : 'Write print("Hello\\rBye").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Understand Backspace ──
  {
    number: 8,
    title: 'Understand Backspace',
    problemStatement: 'Use \\b inside a String and observe how Backspace affects terminal display.',
    instructions: 'Use \\b between ABC and D: print("ABC\\bD").',
    referenceCode: 'print("ABC\\bD")',
    starterCode: '# Use \\b between ABC and D\n',
    sampleInput: '',
    expectedOutput: 'ABC\bD',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Characters ABC',
        conceptKey: 'string',
        speechHinglish: 'Pehle characters ABC output stream me place hote hain.',
        speechEnglish: 'Characters ABC enter the output stream.',
        cardExplanationHinglish: 'ABC placed in stream.',
        cardExplanationEnglish: 'ABC placed in stream.',
        visualTarget: 'abc',
        visualLabel: 'ABC',
        visualSublabel: 'Stream Data',
        consoleOutput: 'ABC',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Backspace \\b',
        conceptKey: 'arguments',
        speechHinglish: '\\b Backspace control character cursor ko ek space backward shift karta hai.',
        speechEnglish: '\\b moves the cursor one column backward.',
        cardExplanationHinglish: '\\b moves cursor backward.',
        cardExplanationEnglish: '\\b moves cursor backward.',
        visualTarget: 'bs',
        visualLabel: '\\b Backspace',
        visualSublabel: 'Cursor Backward',
        consoleOutput: 'ABC',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Next Character D',
        conceptKey: 'print',
        speechHinglish: 'Agla character D cursor position par write hota hai.',
        speechEnglish: 'The next character D writes at the shifted cursor position.',
        cardExplanationHinglish: 'D written at cursor.',
        cardExplanationEnglish: 'D written at cursor.',
        visualTarget: 'd',
        visualLabel: 'D',
        visualSublabel: 'Overwrites C in terminal',
        consoleOutput: 'ABC\bD',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Raw Control Stream',
        conceptKey: 'output',
        speechHinglish: 'Raw stdout stream me ABC\\bD control sequence faithfully preserve hota hai.',
        speechEnglish: 'Raw stdout faithfully preserves ABC\\bD sequence.',
        cardExplanationHinglish: 'Raw output ABC\\bD verified.',
        cardExplanationEnglish: 'Raw output ABC\\bD verified.',
        visualTarget: 'output',
        visualLabel: 'Raw Output',
        visualSublabel: 'ABC\\bD',
        consoleOutput: 'ABC\bD',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'BS Sequence Hint',
        badge: 'Hint 1',
        hintHinglish: 'Backspace ke liye \\b use kijiye.',
        hintEnglish: 'Use \\b for backspace.'
      },
      {
        level: 2,
        name: 'Position Hint',
        badge: 'Hint 2',
        hintHinglish: 'ABC ke baad \\b aur fir D likhiye.',
        hintEnglish: 'Write \\b between ABC and D.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("ABC\\bD") execute kijiye.',
        hintEnglish: 'Execute print("ABC\\bD").'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasBS = code.includes('\\b') || stdout.includes('\b');
      const passed = hasBS && (stdout.includes('ABC') || stdout.includes('D') || stdout.includes('AB'));
      return {
        passed,
        message: passed ? '🎉 Brilliant! You verified the Backspace \\b control character!' : 'Write print("ABC\\bD").'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Understand Raw Strings ──
  {
    number: 9,
    title: 'Understand Raw Strings',
    problemStatement: 'Use a Raw String to display a Windows-style file path without doubling each Backslash.',
    instructions: 'Prefix string with r: path = r"C:\\Users\\Alex\\Documents" and print(path).',
    referenceCode: 'path = r"C:\\Users\\Alex\\Documents"\nprint(path)',
    starterCode: '# Create raw string path = r"C:\\Users\\Alex\\Documents" and print it\n',
    sampleInput: '',
    expectedOutput: 'C:\\Users\\Alex\\Documents',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Raw String Prefix r',
        conceptKey: 'string',
        speechHinglish: 'Quotes se pehle lowercase r lagane se Python ise Raw String banata hai.',
        speechEnglish: 'The lowercase r prefix instructs Python to treat the literal as a Raw String.',
        cardExplanationHinglish: 'r"..." prefix creates a raw string.',
        cardExplanationEnglish: 'r"..." prefix creates a raw string.',
        visualTarget: 'raw',
        visualLabel: 'r Prefix',
        visualSublabel: 'Raw String',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Literal Backslashes',
        conceptKey: 'arguments',
        speechHinglish: 'Raw string me backslashes naturally literal character ban kar preserve hote hain.',
        speechEnglish: 'In a raw string, backslashes are preserved as literal characters without escape evaluation.',
        cardExplanationHinglish: 'Backslashes preserved literally.',
        cardExplanationEnglish: 'Backslashes preserved literally.',
        visualTarget: 'bs',
        visualLabel: 'Literal \\',
        visualSublabel: 'No Escaping Needed',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Variable Assignment',
        conceptKey: 'variable',
        speechHinglish: 'path variable me pura Windows path naturally store ho jata hai.',
        speechEnglish: 'path stores the full Windows path naturally.',
        cardExplanationHinglish: 'path = r"C:\\Users\\Alex\\Documents".',
        cardExplanationEnglish: 'path = r"C:\\Users\\Alex\\Documents".',
        visualTarget: 'vars',
        visualLabel: 'path',
        visualSublabel: 'Clean Windows Path',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Raw Path',
        conceptKey: 'output',
        speechHinglish: 'print(path) screen par clean path display karta hai.',
        speechEnglish: 'print(path) outputs the path with single backslashes.',
        cardExplanationHinglish: 'C:\\Users\\Alex\\Documents printed.',
        cardExplanationEnglish: 'C:\\Users\\Alex\\Documents printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Raw Path',
        consoleOutput: 'C:\\Users\\Alex\\Documents',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Prefix Hint',
        badge: 'Hint 1',
        hintHinglish: 'Quotes se pehle r lagaiye: r"C:\\...".',
        hintEnglish: 'Put r before quotes: r"C:\\...".'
      },
      {
        level: 2,
        name: 'Variable Hint',
        badge: 'Hint 2',
        hintHinglish: 'path = r"C:\\Users\\Alex\\Documents" assign kijiye.',
        hintEnglish: 'Assign path = r"C:\\Users\\Alex\\Documents".'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(path) likhkar run karein.',
        hintEnglish: 'Write print(path).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasRaw = /r['"]/.test(code);
      const passed = hasRaw && stdout.trim() === 'C:\\Users\\Alex\\Documents';
      return {
        passed,
        message: passed ? '🎉 Impressive! You used a Raw String to preserve backslashes cleanly!' : 'Create path = r"C:\\Users\\Alex\\Documents" and print(path).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Student Information Card Mini Project ──
  {
    number: 10,
    title: 'Student Information Card Mini Project',
    problemStatement: 'Create a formatted Student Information Card using Newline \\n, Tab \\t, and Escaped Double Quotes \\\". Display Name, Class, and Course.',
    instructions: 'Create name = "Alex", student_class = 7, course = "Python". Combine \\t, \\n, and \\\" in f-string.',
    referenceCode: 'name = "Alex"\nstudent_class = 7\ncourse = "Python"\n\nprint("===== STUDENT CARD =====")\nprint(f"Name:\\t{name}\\nClass:\\t{student_class}\\nCourse:\\t\\\"{course}\\\"")\nprint("========================")',
    starterCode: '# Create student card using \\n, \\t, and \\\" with f-strings\n',
    sampleInput: '',
    expectedOutput: '===== STUDENT CARD =====\nName:\tAlex\nClass:\t7\nCourse:\t"Python"\n========================',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Variables Stored',
        conceptKey: 'variable',
        speechHinglish: 'name, student_class aur course variables memory me store hote hain.',
        speechEnglish: 'name, student_class, and course store student details.',
        cardExplanationHinglish: 'Alex, 7, Python.',
        cardExplanationEnglish: 'Alex, 7, Python.',
        visualTarget: 'vars',
        visualLabel: 'Student Data',
        visualSublabel: 'Name, Class, Course',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Combine Escape Sequences',
        conceptKey: 'string',
        speechHinglish: '\\t se columns align hote hain, \\n se newlines banti hain aur \\\" se Course Name quote hota hai.',
        speechEnglish: '\\t aligns columns, \\n breaks lines, and \\\" quotes the course name.',
        cardExplanationHinglish: '\\t, \\n, \\\" combined in f-string.',
        cardExplanationEnglish: '\\t, \\n, \\\" combined in f-string.',
        visualTarget: 'combo',
        visualLabel: '\\t + \\n + \\"',
        visualSublabel: 'Combined Formatting',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Card Layout',
        conceptKey: 'arguments',
        speechHinglish: 'Upper aur lower boundary lines ke saath clean card structure assemble hota hai.',
        speechEnglish: 'Upper and lower boundary lines frame the formatted card.',
        cardExplanationHinglish: 'Card layout structure assembled.',
        cardExplanationEnglish: 'Card layout structure assembled.',
        visualTarget: 'layout',
        visualLabel: 'Card Frame',
        visualSublabel: '===== Frame =====',
        consoleOutput: '===== STUDENT CARD =====',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Student Card',
        conceptKey: 'output',
        speechHinglish: 'Full Student Information Card beautifully screen par display ho jata hai.',
        speechEnglish: 'Full formatted Student Card is displayed on the console.',
        cardExplanationHinglish: 'Student Card printed successfully.',
        cardExplanationEnglish: 'Student Card printed successfully.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Student Card',
        consoleOutput: '===== STUDENT CARD =====\nName:\tAlex\nClass:\t7\nCourse:\t"Python"\n========================',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'name = "Alex", student_class = 7, course = "Python" define kijiye.',
        hintEnglish: 'Define name = "Alex", student_class = 7, course = "Python".'
      },
      {
        level: 2,
        name: 'Escapes Hint',
        badge: 'Hint 2',
        hintHinglish: 'Name:\\t{name}\\nClass:\\t{student_class}\\nCourse:\\t\\\"{course}\\\" banaiye.',
        hintEnglish: 'Format with \\t, \\n, and \\\" around course.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'Boundary lines ke saath pura card print karein.',
        hintEnglish: 'Print the card with header and footer boundaries.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasTab = code.includes('\\t') || stdout.includes('\t');
      const hasNl = code.includes('\\n') || stdout.includes('\n');
      const hasF = /f['"]/.test(code);
      const passed = hasTab && hasNl && hasF && stdout.includes('STUDENT CARD') && stdout.includes('Alex') && stdout.includes('Python');
      return {
        passed,
        message: passed ? '🎉 Masterful! You built a complete Student Card combining multiple escape sequences with f-strings!' : 'Combine \\n, \\t, and \\\" to build the Student Card.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ═══════════════════════════════════════════════════════════════════════════
// TOPIC 16: Strings and Basic String Operations (15 Questions)
// ═══════════════════════════════════════════════════════════════════════════

export const TOPIC_16_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Create Your First String ──
  {
    number: 1,
    title: 'Create Your First String',
    problemStatement: 'Create a String Variable named message containing "Hello Python" and print it.',
    instructions: 'Create message = "Hello Python", then print(message).',
    referenceCode: 'message = "Hello Python"\nprint(message)',
    starterCode: '# Create message = "Hello Python" and print it\n',
    sampleInput: '',
    expectedOutput: 'Hello Python',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Variable & Assignment',
        conceptKey: 'variable',
        speechHinglish: 'message ek variable hai jisme assignment operator = se value assign ho rahi hai.',
        speechEnglish: 'message is a variable assigned a value via the = operator.',
        cardExplanationHinglish: 'message variable declared.',
        cardExplanationEnglish: 'message variable declared.',
        visualTarget: 'vars',
        visualLabel: 'message',
        visualSublabel: 'Variable Identifier',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'String Literal in Quotes',
        conceptKey: 'string',
        speechHinglish: 'Double quotes ke andar likha text "Hello Python" ek textual String Literal hai.',
        speechEnglish: 'Text within double quotes is a String Literal in Python source code.',
        cardExplanationHinglish: '"Hello Python" string literal.',
        cardExplanationEnglish: '"Hello Python" string literal.',
        visualTarget: 'str',
        visualLabel: '"Hello Python"',
        visualSublabel: 'str Data Type',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Stored in Memory',
        conceptKey: 'arguments',
        speechHinglish: 'Python memory me message variable ko text value ke saath map kar deta hai.',
        speechEnglish: 'Python maps the variable message to the text in memory.',
        cardExplanationHinglish: 'Memory reference set.',
        cardExplanationEnglish: 'Memory reference set.',
        visualTarget: 'mem',
        visualLabel: 'Memory',
        visualSublabel: 'message -> "Hello Python"',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Message',
        conceptKey: 'output',
        speechHinglish: 'print(message) console screen par Hello Python print karta hai.',
        speechEnglish: 'print(message) outputs Hello Python to the console.',
        cardExplanationHinglish: 'Hello Python printed.',
        cardExplanationEnglish: 'Hello Python printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Hello Python',
        consoleOutput: 'Hello Python',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variable Hint',
        badge: 'Hint 1',
        hintHinglish: 'message naam ka variable banaiye.',
        hintEnglish: 'Create a variable named message.'
      },
      {
        level: 2,
        name: 'Quotes Hint',
        badge: 'Hint 2',
        hintHinglish: 'message = "Hello Python" likhkar text assign kijiye.',
        hintEnglish: 'Assign message = "Hello Python".'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(message) run karein.',
        hintEnglish: 'Write print(message).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasVar = code.includes('message');
      const passed = hasVar && stdout.trim() === 'Hello Python';
      return {
        passed,
        message: passed ? '🎉 Brilliant! You created and printed your first string variable!' : 'Create message = "Hello Python" and print(message).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Single Quotes vs Double Quotes ──
  {
    number: 2,
    title: 'Single Quotes vs Double Quotes',
    problemStatement: 'Create two Strings, one using Single Quotes and another using Double Quotes. Print both.',
    instructions: 'Create first = \'Python\' and second = "SQL", then print both on separate lines.',
    referenceCode: 'first = \'Python\'\\nsecond = "SQL"\\n\\nprint(first)\\nprint(second)',
    starterCode: '# Create first = \'Python\' and second = "SQL", then print both\\n',
    sampleInput: '',
    expectedOutput: 'Python\nSQL',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Single-Quoted String',
        conceptKey: 'string',
        speechHinglish: "first = 'Python' single quotes me string banata hai.",
        speechEnglish: "first = 'Python' uses single quotes for literal text.",
        cardExplanationHinglish: "'Python' single quotes.",
        cardExplanationEnglish: "'Python' single quotes.",
        visualTarget: 'single',
        visualLabel: "'Python'",
        visualSublabel: 'Single Quotes',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Double-Quoted String',
        conceptKey: 'string',
        speechHinglish: 'second = "SQL" double quotes me string define karta hai.',
        speechEnglish: 'second = "SQL" uses double quotes for literal text.',
        cardExplanationHinglish: '"SQL" double quotes.',
        cardExplanationEnglish: '"SQL" double quotes.',
        visualTarget: 'double',
        visualLabel: '"SQL"',
        visualSublabel: 'Double Quotes',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Identical Data Types',
        conceptKey: 'arguments',
        speechHinglish: 'Python me single quotes aur double quotes dono ka type str hota hai.',
        speechEnglish: 'Both quotation styles yield identical str objects in Python.',
        cardExplanationHinglish: 'Both type: str.',
        cardExplanationEnglish: 'Both type: str.',
        visualTarget: 'types',
        visualLabel: 'type: str',
        visualSublabel: 'Equivalent Delimiters',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Both',
        conceptKey: 'output',
        speechHinglish: 'Console par Python aur SQL do lines me display ho jate hain.',
        speechEnglish: 'Console displays Python and SQL on separate lines.',
        cardExplanationHinglish: 'Python and SQL printed.',
        cardExplanationEnglish: 'Python and SQL printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Both Strings',
        consoleOutput: 'Python\nSQL',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Single Quotes Hint',
        badge: 'Hint 1',
        hintHinglish: "first = 'Python' likhiye.",
        hintEnglish: "Write first = 'Python'."
      },
      {
        level: 2,
        name: 'Double Quotes Hint',
        badge: 'Hint 2',
        hintHinglish: 'second = "SQL" likhiye.',
        hintEnglish: 'Write second = "SQL".'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(first) aur print(second) execute karein.',
        hintEnglish: 'Run print(first) and print(second).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasBothQuotes = (code.includes("'Python'") || code.includes('"Python"')) && (code.includes('"SQL"') || code.includes("'SQL'"));
      const passed = hasBothQuotes && stdout.includes('Python') && stdout.includes('SQL');
      return {
        passed,
        message: passed ? '🎉 Great job! You created strings using both single and double quotes!' : 'Create first with single quotes and second with double quotes.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Understand Characters and Spaces ──
  {
    number: 3,
    title: 'Understand Characters and Spaces',
    problemStatement: 'Create a String containing Hi Python and print it. Understand that Spaces are also characters inside a String.',
    instructions: 'Create text = "Hi Python" with a space between words and print(text).',
    referenceCode: 'text = "Hi Python"\nprint(text)',
    starterCode: '# Create text = "Hi Python" and print it\n',
    sampleInput: '',
    expectedOutput: 'Hi Python',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Character Cells',
        conceptKey: 'string',
        speechHinglish: 'String me letters aur spaces har ek separate character position occupy karte hain.',
        speechEnglish: 'Every letter and space occupies a distinct character cell.',
        cardExplanationHinglish: 'String is a sequence of characters.',
        cardExplanationEnglish: 'String is a sequence of characters.',
        visualTarget: 'cells',
        visualLabel: 'H, i, [ ], P...',
        visualSublabel: 'Sequence of Chars',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'The Space Character',
        conceptKey: 'arguments',
        speechHinglish: 'Hi aur Python ke beech ka space bhi ek character hai jiska index 2 hota hai.',
        speechEnglish: 'The space between words is an active character at index 2.',
        cardExplanationHinglish: 'Space character at index 2.',
        cardExplanationEnglish: 'Space character at index 2.',
        visualTarget: 'space',
        visualLabel: '[Space]',
        visualSublabel: 'Index 2 Character',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Stored in text',
        conceptKey: 'variable',
        speechHinglish: 'text variable me pura 9 characters ka string store hota hai.',
        speechEnglish: 'text stores the complete 9-character string.',
        cardExplanationHinglish: 'text holds 9 characters.',
        cardExplanationEnglish: 'text holds 9 characters.',
        visualTarget: 'vars',
        visualLabel: 'text',
        visualSublabel: 'Length = 9',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Hi Python',
        conceptKey: 'output',
        speechHinglish: 'print(text) space ke saath Hi Python console par display karta hai.',
        speechEnglish: 'print(text) displays Hi Python preserving whitespace.',
        cardExplanationHinglish: 'Hi Python printed.',
        cardExplanationEnglish: 'Hi Python printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Hi Python',
        consoleOutput: 'Hi Python',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'text = "Hi Python" assign kijiye.',
        hintEnglish: 'Assign text = "Hi Python".'
      },
      {
        level: 2,
        name: 'Space Hint',
        badge: 'Hint 2',
        hintHinglish: 'Hi aur Python ke beech ek space zaroor lagaiye.',
        hintEnglish: 'Ensure a space is present between Hi and Python.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(text) likhkar run karein.',
        hintEnglish: 'Run print(text).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === 'Hi Python';
      return {
        passed,
        message: passed ? '🎉 Excellent! You recognized spaces as characters in Python strings!' : 'Create text = "Hi Python" and print it.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Join Two Strings Using + ──
  {
    number: 4,
    title: 'Join Two Strings Using +',
    problemStatement: 'Create two String Variables and join them using the + Operator with a space in between.',
    instructions: 'Create first = "Hello", second = "Python", and result = first + " " + second, then print(result).',
    referenceCode: 'first = "Hello"\nsecond = "Python"\n\nresult = first + " " + second\n\nprint(result)',
    starterCode: '# Join first and second with space using + operator\n',
    sampleInput: '',
    expectedOutput: 'Hello Python',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two String Operands',
        conceptKey: 'string',
        speechHinglish: 'first me "Hello" aur second me "Python" alag-alag strings hain.',
        speechEnglish: 'first holds "Hello" and second holds "Python".',
        cardExplanationHinglish: 'first and second string variables.',
        cardExplanationEnglish: 'first and second string variables.',
        visualTarget: 'operands',
        visualLabel: 'first & second',
        visualSublabel: 'Two Operands',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: '+ Concatenation',
        conceptKey: 'arguments',
        speechHinglish: 'Strings me plus operator numbers ki tarah jodta nahi, text ko aapas me Concatenate karta hai.',
        speechEnglish: 'With strings, + concatenates text instead of performing arithmetic addition.',
        cardExplanationHinglish: '+ concatenates strings.',
        cardExplanationEnglish: '+ concatenates strings.',
        visualTarget: 'plus',
        visualLabel: '+ Operator',
        visualSublabel: 'Concatenation',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Explicit Space " "',
        conceptKey: 'print',
        speechHinglish: 'Python automatically space nahi lagata, isliye humne " " beech me explicit jod diya.',
        speechEnglish: 'Concatenation does not add automatic spaces, so we explicitly join " ".',
        cardExplanationHinglish: 'Space string " " inserted.',
        cardExplanationEnglish: 'Space string " " inserted.',
        visualTarget: 'join',
        visualLabel: 'first + " " + second',
        visualSublabel: 'Joined Expression',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Concatenated Result',
        conceptKey: 'output',
        speechHinglish: 'print(result) screen par joined string Hello Python print karta hai.',
        speechEnglish: 'print(result) outputs the combined string Hello Python.',
        cardExplanationHinglish: 'Hello Python displayed.',
        cardExplanationEnglish: 'Hello Python displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Hello Python',
        consoleOutput: 'Hello Python',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'first = "Hello" aur second = "Python" banaiye.',
        hintEnglish: 'Set first = "Hello" and second = "Python".'
      },
      {
        level: 2,
        name: 'Concatenation Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = first + " " + second se join karein.',
        hintEnglish: 'Join with result = first + " " + second.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) likhkar run karein.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasPlus = code.includes('+');
      const passed = hasPlus && stdout.trim() === 'Hello Python';
      return {
        passed,
        message: passed ? '🎉 Awesome! You joined two strings with a space using the + operator!' : 'Use + to concatenate first + " " + second.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Repeat a String Using * ──
  {
    number: 5,
    title: 'Repeat a String Using *',
    problemStatement: 'Create a String containing "Hi " and repeat it three times using * 3.',
    instructions: 'Create word = "Hi " with trailing space, result = word * 3, and print(result).',
    referenceCode: 'word = "Hi "\nresult = word * 3\n\nprint(result)',
    starterCode: '# Repeat word = "Hi " three times using * 3\n',
    sampleInput: '',
    expectedOutput: 'Hi Hi Hi ',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'String Operand with Space',
        conceptKey: 'string',
        speechHinglish: 'word variable me "Hi " store hai jisme trailing space shamil hai.',
        speechEnglish: 'word stores "Hi " including its trailing space.',
        cardExplanationHinglish: 'word = "Hi " initialized.',
        cardExplanationEnglish: 'word = "Hi " initialized.',
        visualTarget: 'str',
        visualLabel: '"Hi "',
        visualSublabel: 'Pattern with Space',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: '* Repetition Operator',
        conceptKey: 'arguments',
        speechHinglish: 'String ke saath asterisk * Repetition karta hai, yani pattern ko 3 baar repeat karta hai.',
        speechEnglish: 'The * operator repeats string patterns by an integer multiplier.',
        cardExplanationHinglish: '* 3 duplicates pattern 3 times.',
        cardExplanationEnglish: '* 3 duplicates pattern 3 times.',
        visualTarget: 'star',
        visualLabel: '* 3',
        visualSublabel: 'Repetition Operator',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: '3 Copies Combined',
        conceptKey: 'print',
        speechHinglish: '"Hi " + "Hi " + "Hi " milkar "Hi Hi Hi " ban jata hai.',
        speechEnglish: 'Three copies join into "Hi Hi Hi ".',
        cardExplanationHinglish: 'result = "Hi Hi Hi ".',
        cardExplanationEnglish: 'result = "Hi Hi Hi ".',
        visualTarget: 'copies',
        visualLabel: '3 Copies',
        visualSublabel: 'Hi Hi Hi ',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Repeated String',
        conceptKey: 'output',
        speechHinglish: 'Console par repeated string Hi Hi Hi display ho jati hai.',
        speechEnglish: 'Console outputs the repeated pattern.',
        cardExplanationHinglish: 'Hi Hi Hi printed.',
        cardExplanationEnglish: 'Hi Hi Hi printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Repeated Pattern',
        consoleOutput: 'Hi Hi Hi ',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'word = "Hi " assign kijiye space ke saath.',
        hintEnglish: 'Assign word = "Hi " with trailing space.'
      },
      {
        level: 2,
        name: 'Multiply Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = word * 3 se repeat karein.',
        hintEnglish: 'Write result = word * 3.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) execute kijiye.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasStar = code.includes('*');
      const passed = hasStar && stdout.trim() === 'Hi Hi Hi';
      return {
        passed,
        message: passed ? '🎉 Superb! You repeated a string 3 times using the * operator!' : 'Use word * 3 to repeat "Hi ".'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Find String Length Using len() ──
  {
    number: 6,
    title: 'Find String Length Using len()',
    problemStatement: 'Find the Length of the String "Python" using len().',
    instructions: 'Create language = "Python", then print(len(language)).',
    referenceCode: 'language = "Python"\n\nprint(len(language))',
    starterCode: '# Find length of language = "Python" using len()\n',
    sampleInput: '',
    expectedOutput: '6',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'String In Memory',
        conceptKey: 'string',
        speechHinglish: 'language variable me "Python" string store hai.',
        speechEnglish: 'language holds the string "Python".',
        cardExplanationHinglish: 'language = "Python".',
        cardExplanationEnglish: 'language = "Python".',
        visualTarget: 'vars',
        visualLabel: 'language',
        visualSublabel: '"Python"',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'len() Built-In Function',
        conceptKey: 'arguments',
        speechHinglish: 'len() Python ka built-in function hai jo string ke characters count karta hai.',
        speechEnglish: 'len() is a built-in function counting characters in a sequence.',
        cardExplanationHinglish: 'len() function counts elements.',
        cardExplanationEnglish: 'len() function counts elements.',
        visualTarget: 'len',
        visualLabel: 'len()',
        visualSublabel: 'Length Function',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Count Characters 1 to 6',
        conceptKey: 'print',
        speechHinglish: 'P, y, t, h, o, n count hokar integer 6 return hota hai.',
        speechEnglish: 'Python has 6 characters, so len() returns integer 6.',
        cardExplanationHinglish: 'Count: 6 characters.',
        cardExplanationEnglish: 'Count: 6 characters.',
        visualTarget: 'count',
        visualLabel: '6',
        visualSublabel: 'Total Length',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Length 6',
        conceptKey: 'output',
        speechHinglish: 'print() screen par 6 display karta hai.',
        speechEnglish: 'print() displays 6 on the console.',
        cardExplanationHinglish: '6 printed.',
        cardExplanationEnglish: '6 printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '6',
        consoleOutput: '6',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'language = "Python" define kijiye.',
        hintEnglish: 'Define language = "Python".'
      },
      {
        level: 2,
        name: 'len Hint',
        badge: 'Hint 2',
        hintHinglish: 'len(language) se length calculate karein.',
        hintEnglish: 'Calculate length with len(language).'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(len(language)) likhkar execute karein.',
        hintEnglish: 'Write print(len(language)).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasLen = code.includes('len');
      const passed = hasLen && stdout.trim() === '6';
      return {
        passed,
        message: passed ? '🎉 Brilliant! You calculated string length using len()!' : 'Use print(len(language)).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Access the First Character ──
  {
    number: 7,
    title: 'Access the First Character',
    problemStatement: 'Access and print the first Character of "Python" using Indexing.',
    instructions: 'Create word = "Python", then print(word[0]) to access index 0.',
    referenceCode: 'word = "Python"\n\nprint(word[0])',
    starterCode: '# Access the first character of word using [0]\n',
    sampleInput: '',
    expectedOutput: 'P',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Zero-Based Indexing',
        conceptKey: 'string',
        speechHinglish: 'Python me index hamesha zero 0 se shuru hota hai.',
        speechEnglish: 'Python sequence indices are zero-based, starting at 0.',
        cardExplanationHinglish: 'Index starts at 0.',
        cardExplanationEnglish: 'Index starts at 0.',
        visualTarget: 'zero',
        visualLabel: 'Index 0',
        visualSublabel: 'First Element',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Index Positions 0 to 5',
        conceptKey: 'arguments',
        speechHinglish: 'P(0), y(1), t(2), h(3), o(4), n(5) positions par hain.',
        speechEnglish: 'Characters occupy positions 0 through 5.',
        cardExplanationHinglish: 'P=0, y=1, t=2, h=3, o=4, n=5.',
        cardExplanationEnglish: 'P=0, y=1, t=2, h=3, o=4, n=5.',
        visualTarget: 'indices',
        visualLabel: '[0]...[5]',
        visualSublabel: 'Index Map',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Access word[0]',
        conceptKey: 'print',
        speechHinglish: 'Square brackets me 0 likhne par pehla character P select hota hai.',
        speechEnglish: 'Bracket notation [0] extracts the initial character P.',
        cardExplanationHinglish: 'word[0] selects P.',
        cardExplanationEnglish: 'word[0] selects P.',
        visualTarget: 'p',
        visualLabel: 'P',
        visualSublabel: 'Extracted Char',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Character P',
        conceptKey: 'output',
        speechHinglish: 'print(word[0]) screen par P display karta hai.',
        speechEnglish: 'print(word[0]) prints P onto the console.',
        cardExplanationHinglish: 'P printed.',
        cardExplanationEnglish: 'P printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'P',
        consoleOutput: 'P',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'word = "Python" define karein.',
        hintEnglish: 'Define word = "Python".'
      },
      {
        level: 2,
        name: 'Index Hint',
        badge: 'Hint 2',
        hintHinglish: 'Square brackets me index 0 likhiye: word[0].',
        hintEnglish: 'Write word[0] with index 0.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(word[0]) run karein.',
        hintEnglish: 'Run print(word[0]).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasIndex = code.includes('[0]');
      const passed = hasIndex && stdout.trim() === 'P';
      return {
        passed,
        message: passed ? '🎉 Perfect! You accessed the first character using zero-based indexing [0]!' : 'Use print(word[0]).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Access Characters Using Negative Indexing ──
  {
    number: 8,
    title: 'Access Characters Using Negative Indexing',
    problemStatement: 'Print the last Character of "Python" using Negative Indexing.',
    instructions: 'Create word = "Python", then print(word[-1]) to access the last character.',
    referenceCode: 'word = "Python"\n\nprint(word[-1])',
    starterCode: '# Access the last character using [-1]\n',
    sampleInput: '',
    expectedOutput: 'n',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Negative Indexing Principle',
        conceptKey: 'string',
        speechHinglish: 'Negative Indexing string ke end se characters count karti hai.',
        speechEnglish: 'Negative indexing traverses characters from the right end.',
        cardExplanationHinglish: 'Negative indices count backwards.',
        cardExplanationEnglish: 'Negative indices count backwards.',
        visualTarget: 'neg',
        visualLabel: 'Negative Indexing',
        visualSublabel: 'From the End',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Index -1 Targets Last',
        conceptKey: 'arguments',
        speechHinglish: 'Index -1 hamesha last character ko point karta hai bina length jane.',
        speechEnglish: 'Index -1 targets the final character without knowing total length.',
        cardExplanationHinglish: '[-1] = last character.',
        cardExplanationEnglish: '[-1] = last character.',
        visualTarget: 'target',
        visualLabel: '[-1]',
        visualSublabel: 'Last Character',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Select n',
        conceptKey: 'print',
        speechHinglish: 'Python me last character n hai jo word[-1] se select hota hai.',
        speechEnglish: 'word[-1] extracts the final letter n.',
        cardExplanationHinglish: 'n selected.',
        cardExplanationEnglish: 'n selected.',
        visualTarget: 'char',
        visualLabel: 'n',
        visualSublabel: 'Extracted Value',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Character n',
        conceptKey: 'output',
        speechHinglish: 'print(word[-1]) console par n print karta hai.',
        speechEnglish: 'print(word[-1]) outputs n to the console.',
        cardExplanationHinglish: 'n printed.',
        cardExplanationEnglish: 'n printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'n',
        consoleOutput: 'n',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'word = "Python" define karein.',
        hintEnglish: 'Define word = "Python".'
      },
      {
        level: 2,
        name: 'Negative Hint',
        badge: 'Hint 2',
        hintHinglish: 'Last character ke liye [-1] use kijiye.',
        hintEnglish: 'Use [-1] for the last character.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(word[-1]) execute karein.',
        hintEnglish: 'Run print(word[-1]).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasNeg = code.includes('[-1]');
      const passed = hasNeg && stdout.trim() === 'n';
      return {
        passed,
        message: passed ? '🎉 Great job! You accessed the last character using negative indexing [-1]!' : 'Use print(word[-1]).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Extract Part of a String Using Slicing ──
  {
    number: 9,
    title: 'Extract Part of a String Using Slicing',
    problemStatement: 'Extract the first four Characters from "Programming" using Slicing [0:4].',
    instructions: 'Create word = "Programming", then print(word[0:4]).',
    referenceCode: 'word = "Programming"\n\nprint(word[0:4])',
    starterCode: '# Extract first 4 characters from word using slicing [0:4]\n',
    sampleInput: '',
    expectedOutput: 'Prog',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Slice Syntax [start:stop]',
        conceptKey: 'string',
        speechHinglish: 'Slicing [start:stop] string ke ek hisse ko cut karke new substring banati hai.',
        speechEnglish: 'Slice notation [start:stop] cuts a contiguous slice from the string.',
        cardExplanationHinglish: '[start:stop] slice syntax.',
        cardExplanationEnglish: '[start:stop] slice syntax.',
        visualTarget: 'syntax',
        visualLabel: '[0:4]',
        visualSublabel: 'Slice Range',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Stop is Excluded',
        conceptKey: 'arguments',
        speechHinglish: 'Start index 0 shamil hota hai, lekin stop index 4 exclude hota hai.',
        speechEnglish: 'Index 0 is included, but stop index 4 is strictly excluded.',
        cardExplanationHinglish: 'Stop index is exclusive.',
        cardExplanationEnglish: 'Stop index is exclusive.',
        visualTarget: 'excl',
        visualLabel: '0, 1, 2, 3',
        visualSublabel: 'Indices Included',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'P, r, o, g Extracted',
        conceptKey: 'print',
        speechHinglish: 'Indices 0 se 3 tak ke characters Prog bante hain.',
        speechEnglish: 'Characters at indices 0, 1, 2, and 3 produce Prog.',
        cardExplanationHinglish: 'Prog extracted.',
        cardExplanationEnglish: 'Prog extracted.',
        visualTarget: 'prog',
        visualLabel: 'Prog',
        visualSublabel: 'Substring',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Substring Prog',
        conceptKey: 'output',
        speechHinglish: 'print(word[0:4]) console par Prog print karta hai.',
        speechEnglish: 'print(word[0:4]) displays Prog on the screen.',
        cardExplanationHinglish: 'Prog printed.',
        cardExplanationEnglish: 'Prog printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Prog',
        consoleOutput: 'Prog',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'word = "Programming" assign kijiye.',
        hintEnglish: 'Assign word = "Programming".'
      },
      {
        level: 2,
        name: 'Slice Hint',
        badge: 'Hint 2',
        hintHinglish: 'word[0:4] se 0 se 4 tak slice karein.',
        hintEnglish: 'Use word[0:4] to slice indices 0 through 3.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(word[0:4]) execute karein.',
        hintEnglish: 'Run print(word[0:4]).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasSlice = code.includes('[0:4]') || code.includes('[:4]');
      const passed = hasSlice && stdout.trim() === 'Prog';
      return {
        passed,
        message: passed ? '🎉 Fantastic! You extracted a substring using slicing [0:4]!' : 'Use print(word[0:4]).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Slice with a Step ──
  {
    number: 10,
    title: 'Slice with a Step',
    problemStatement: 'Extract every second Character from "Python" using Slicing with a Step [::2].',
    instructions: 'Create word = "Python", then print(word[::2]).',
    referenceCode: 'word = "Python"\n\nprint(word[::2])',
    starterCode: '# Extract every second character using slicing with step [::2]\n',
    sampleInput: '',
    expectedOutput: 'Pto',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Stride Step Syntax [::step]',
        conceptKey: 'string',
        speechHinglish: 'Slicing me third parameter Step hota hai jo character jump size decide karta hai.',
        speechEnglish: 'The third parameter in [start:stop:step] sets the character traversal stride.',
        cardExplanationHinglish: '[::2] step syntax.',
        cardExplanationEnglish: '[::2] step syntax.',
        visualTarget: 'step',
        visualLabel: '[::2]',
        visualSublabel: 'Step of 2',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Omitted Start & Stop',
        conceptKey: 'arguments',
        speechHinglish: 'Start aur stop blank chhodne se Python poori string shuru se end tak consider karta hai.',
        speechEnglish: 'Omitting start and stop defaults to the entire sequence boundary.',
        cardExplanationHinglish: 'Entire string traversed.',
        cardExplanationEnglish: 'Entire string traversed.',
        visualTarget: 'full',
        visualLabel: 'Full String',
        visualSublabel: 'Index 0 to End',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Indices 0, 2, 4 Selected',
        conceptKey: 'print',
        speechHinglish: 'Index 0 par P, index 2 par t, aur index 4 par o select hota hai.',
        speechEnglish: 'Indices 0, 2, and 4 yield characters P, t, and o.',
        cardExplanationHinglish: 'P, t, o selected.',
        cardExplanationEnglish: 'P, t, o selected.',
        visualTarget: 'pto',
        visualLabel: 'Pto',
        visualSublabel: 'Selected Substring',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Pto',
        conceptKey: 'output',
        speechHinglish: 'print(word[::2]) screen par Pto display kar deta hai.',
        speechEnglish: 'print(word[::2]) displays Pto on the console.',
        cardExplanationHinglish: 'Pto printed.',
        cardExplanationEnglish: 'Pto printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Pto',
        consoleOutput: 'Pto',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'word = "Python" define karein.',
        hintEnglish: 'Define word = "Python".'
      },
      {
        level: 2,
        name: 'Step Hint',
        badge: 'Hint 2',
        hintHinglish: 'Double colon aur 2 lagaiye: [::2].',
        hintEnglish: 'Use double colons with step 2: [::2].'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(word[::2]) execute kijiye.',
        hintEnglish: 'Run print(word[::2]).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasStep = code.includes('[::2]');
      const passed = hasStep && stdout.trim() === 'Pto';
      return {
        passed,
        message: passed ? '🎉 Brilliant! You sliced with a step of 2 using [::2]!' : 'Use print(word[::2]).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Check Whether Text Exists in a String ──
  {
    number: 11,
    title: 'Check Whether Text Exists in a String',
    problemStatement: 'Check whether "Py" exists inside "Python Programming" using the in Operator.',
    instructions: 'Create text = "Python Programming", then print("Py" in text).',
    referenceCode: 'text = "Python Programming"\n\nprint("Py" in text)',
    starterCode: '# Check if "Py" in text\n',
    sampleInput: '',
    expectedOutput: 'True',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'in Membership Operator',
        conceptKey: 'string',
        speechHinglish: 'in Operator check karta hai ki koi substring string me present hai ya nahi.',
        speechEnglish: 'The in operator tests substring membership inside target text.',
        cardExplanationHinglish: 'in tests substring membership.',
        cardExplanationEnglish: 'in tests substring membership.',
        visualTarget: 'in',
        visualLabel: 'in Operator',
        visualSublabel: 'Membership Test',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Substring Search',
        conceptKey: 'arguments',
        speechHinglish: 'Python text me "Py" dhoondhta hai.',
        speechEnglish: 'Python scans the string for the sequence "Py".',
        cardExplanationHinglish: 'Searching for "Py".',
        cardExplanationEnglish: 'Searching for "Py".',
        visualTarget: 'search',
        visualLabel: '"Py"',
        visualSublabel: 'Search Token',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Match Found -> True',
        conceptKey: 'print',
        speechHinglish: '"Python Programming" ke start me "Py" mil jata hai, isliye result True hota hai.',
        speechEnglish: 'A match is found, evaluating the expression to boolean True.',
        cardExplanationHinglish: 'Match found -> True.',
        cardExplanationEnglish: 'Match found -> True.',
        visualTarget: 'bool',
        visualLabel: 'True',
        visualSublabel: 'Boolean Result',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display True',
        conceptKey: 'output',
        speechHinglish: 'print("Py" in text) screen par True print karta hai.',
        speechEnglish: 'print("Py" in text) prints True onto the console.',
        cardExplanationHinglish: 'True printed.',
        cardExplanationEnglish: 'True printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'True',
        consoleOutput: 'True',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'String Hint',
        badge: 'Hint 1',
        hintHinglish: 'text = "Python Programming" assign karein.',
        hintEnglish: 'Assign text = "Python Programming".'
      },
      {
        level: 2,
        name: 'in Hint',
        badge: 'Hint 2',
        hintHinglish: '"Py" in text likhkar check kijiye.',
        hintEnglish: 'Write "Py" in text.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Py" in text) execute karein.',
        hintEnglish: 'Run print("Py" in text).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasIn = code.includes(' in ');
      const passed = hasIn && stdout.trim() === 'True';
      return {
        passed,
        message: passed ? '🎉 Outstanding! You checked string membership using the in operator!' : 'Use print("Py" in text).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Compare Two Strings ──
  {
    number: 12,
    title: 'Compare Two Strings',
    problemStatement: 'Compare two Strings using the Equality Operator == to verify case sensitivity.',
    instructions: 'Create first = "Python" and second = "python", then print(first == second).',
    referenceCode: 'first = "Python"\nsecond = "python"\n\nprint(first == second)',
    starterCode: '# Compare first == second\n',
    sampleInput: '',
    expectedOutput: 'False',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Two Strings with Case Difference',
        conceptKey: 'string',
        speechHinglish: 'first me capital P se "Python" aur second me small p se "python" hai.',
        speechEnglish: 'first has capital P, second has lowercase p.',
        cardExplanationHinglish: '"Python" vs "python".',
        cardExplanationEnglish: '"Python" vs "python".',
        visualTarget: 'strings',
        visualLabel: 'P vs p',
        visualSublabel: 'Case Difference',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Case Sensitivity Rule',
        conceptKey: 'arguments',
        speechHinglish: 'Python me strings strictly case-sensitive hoti hain.',
        speechEnglish: 'Python strings are strictly case-sensitive in comparison.',
        cardExplanationHinglish: 'Strings are case-sensitive.',
        cardExplanationEnglish: 'Strings are case-sensitive.',
        visualTarget: 'rule',
        visualLabel: 'Case Sensitive',
        visualSublabel: "'P' != 'p'",
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: '== Evaluates to False',
        conceptKey: 'print',
        speechHinglish: 'Kyunki characters ka case match nahi karta, == False return karta hai.',
        speechEnglish: 'Because character codes differ, == evaluates to False.',
        cardExplanationHinglish: 'Evaluation: False.',
        cardExplanationEnglish: 'Evaluation: False.',
        visualTarget: 'false',
        visualLabel: 'False',
        visualSublabel: 'Comparison Result',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display False',
        conceptKey: 'output',
        speechHinglish: 'print(first == second) console par False display karta hai.',
        speechEnglish: 'print(first == second) prints False to the console.',
        cardExplanationHinglish: 'False printed.',
        cardExplanationEnglish: 'False printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'False',
        consoleOutput: 'False',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'first = "Python" aur second = "python" assign karein.',
        hintEnglish: 'Assign first = "Python" and second = "python".'
      },
      {
        level: 2,
        name: 'Comparison Hint',
        badge: 'Hint 2',
        hintHinglish: 'first == second se compare kijiye.',
        hintEnglish: 'Compare with first == second.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(first == second) execute karein.',
        hintEnglish: 'Run print(first == second).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasEq = code.includes('==');
      const passed = hasEq && stdout.trim() === 'False';
      return {
        passed,
        message: passed ? '🎉 Excellent! You verified that Python string equality is case-sensitive!' : 'Use print(first == second).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q13: Understand String Immutability ──
  {
    number: 13,
    title: 'Understand String Immutability',
    problemStatement: 'Strings are immutable. Fix the item assignment error by slicing word[1:] and prepending "J".',
    instructions: 'Change word = "Python" to "Jython" using word = "J" + word[1:] and print(word).',
    referenceCode: 'word = "Python"\n\nword = "J" + word[1:]\n\nprint(word)',
    starterCode: 'word = "Python"\nword[0] = "J"\n\nprint(word)',
    sampleInput: '',
    expectedOutput: 'Jython',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'The Bug: TypeError',
        conceptKey: 'string',
        speechHinglish: 'word[0] = "J" TypeError deta hai kyunki Python strings Immutable hoti hain.',
        speechEnglish: 'word[0] = "J" raises a TypeError because Python strings are immutable.',
        cardExplanationHinglish: 'TypeError: cannot assign item.',
        cardExplanationEnglish: 'TypeError: cannot assign item.',
        visualTarget: 'err',
        visualLabel: 'TypeError',
        visualSublabel: 'String Immutability',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Slice Substring word[1:]',
        conceptKey: 'arguments',
        speechHinglish: 'word[1:] index 1 se aage ke characters "ython" extract karta hai.',
        speechEnglish: 'word[1:] slices out the substring "ython".',
        cardExplanationHinglish: 'word[1:] = "ython".',
        cardExplanationEnglish: 'word[1:] = "ython".',
        visualTarget: 'slice',
        visualLabel: '"ython"',
        visualSublabel: 'Remaining Slice',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Concatenate New String',
        conceptKey: 'print',
        speechHinglish: '"J" + word[1:] nayi string "Jython" banata hai aur word me reassign karta hai.',
        speechEnglish: '"J" + word[1:] creates a new string "Jython" and reassigns word.',
        cardExplanationHinglish: 'word = "J" + "ython".',
        cardExplanationEnglish: 'word = "J" + "ython".',
        visualTarget: 'reassign',
        visualLabel: '"Jython"',
        visualSublabel: 'New String Reassigned',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        title: 'Display Jython',
        conceptKey: 'output',
        speechHinglish: 'print(word) screen par Jython print karta hai.',
        speechEnglish: 'print(word) outputs Jython to the console.',
        cardExplanationHinglish: 'Jython printed.',
        cardExplanationEnglish: 'Jython printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Jython',
        consoleOutput: 'Jython',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Immutability Hint',
        badge: 'Hint 1',
        hintHinglish: 'word[0] = "J" ko hata dijiye.',
        hintEnglish: 'Remove word[0] = "J".'
      },
      {
        level: 2,
        name: 'Slice Hint',
        badge: 'Hint 2',
        hintHinglish: 'word[1:] se "ython" slice kijiye aur aage "J" jodiye.',
        hintEnglish: 'Slice word[1:] and prepend "J".'
      },
      {
        level: 3,
        name: 'Solution Hint',
        badge: 'Hint 3',
        hintHinglish: 'word = "J" + word[1:] likhkar print(word) karein.',
        hintEnglish: 'Write word = "J" + word[1:] and print(word).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const noItemAssign = !code.includes('[0] =') && !code.includes('[0]=');
      const hasSlice = code.includes('word[1:]') || code.includes('[1:]');
      const passed = noItemAssign && hasSlice && stdout.trim() === 'Jython';
      return {
        passed,
        message: passed ? '🎉 Brilliant! You properly handled string immutability by creating a new string!' : 'Use word = "J" + word[1:] and print(word).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q14: Combine String Operations ──
  {
    number: 14,
    title: 'Combine String Operations',
    problemStatement: 'Create a program that joins a first name and last name, displays the full name, counts its Characters, and prints its first Character.',
    instructions: 'Create first_name = "Alex", last_name = "Kumar", join them, and print full name, len, and [0].',
    referenceCode: 'first_name = "Alex"\nlast_name = "Kumar"\n\nfull_name = first_name + " " + last_name\n\nprint("Full Name:", full_name)\nprint("Length:", len(full_name))\nprint("First Character:", full_name[0])',
    starterCode: '# Join names, print Full Name, Length, and First Character\n',
    sampleInput: '',
    expectedOutput: 'Full Name: Alex Kumar\nLength: 10\nFirst Character: A',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Full Name Concatenation',
        conceptKey: 'string',
        speechHinglish: 'first_name + " " + last_name se Full Name "Alex Kumar" create hota hai.',
        speechEnglish: 'Concatenation joins first and last names with a space.',
        cardExplanationHinglish: 'full_name = "Alex Kumar".',
        cardExplanationEnglish: 'full_name = "Alex Kumar".',
        visualTarget: 'name',
        visualLabel: 'Full Name',
        visualSublabel: '"Alex Kumar"',
        consoleOutput: 'Full Name: Alex Kumar',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Length with len()',
        conceptKey: 'arguments',
        speechHinglish: 'len(full_name) space samet total 10 characters count karta hai.',
        speechEnglish: 'len(full_name) counts all 10 characters including the space.',
        cardExplanationHinglish: 'Length = 10.',
        cardExplanationEnglish: 'Length = 10.',
        visualTarget: 'len',
        visualLabel: 'Length: 10',
        visualSublabel: 'Total Characters',
        consoleOutput: 'Full Name: Alex Kumar\nLength: 10',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'First Character [0]',
        conceptKey: 'print',
        speechHinglish: 'full_name[0] se pehla character A access hota hai.',
        speechEnglish: 'full_name[0] indexes the initial letter A.',
        cardExplanationHinglish: 'First Character = A.',
        cardExplanationEnglish: 'First Character = A.',
        visualTarget: 'first',
        visualLabel: 'A',
        visualSublabel: 'Index [0]',
        consoleOutput: 'Full Name: Alex Kumar\nLength: 10\nFirst Character: A',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Full Summary',
        conceptKey: 'output',
        speechHinglish: 'Console par teeno operations ka complete result display ho jata hai.',
        speechEnglish: 'All three operations display cleanly on the console.',
        cardExplanationHinglish: 'Summary displayed.',
        cardExplanationEnglish: 'Summary displayed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Summary',
        consoleOutput: 'Full Name: Alex Kumar\nLength: 10\nFirst Character: A',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Join Hint',
        badge: 'Hint 1',
        hintHinglish: 'full_name = first_name + " " + last_name banaiye.',
        hintEnglish: 'Set full_name = first_name + " " + last_name.'
      },
      {
        level: 2,
        name: 'Length & Index Hint',
        badge: 'Hint 2',
        hintHinglish: 'len(full_name) aur full_name[0] use kijiye.',
        hintEnglish: 'Use len(full_name) and full_name[0].'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'Full Name, Length, aur First Character print karein.',
        hintEnglish: 'Print Full Name, Length, and First Character.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasPlus = code.includes('+');
      const hasLen = code.includes('len');
      const hasIdx = code.includes('[0]');
      const passed = hasPlus && hasLen && hasIdx && stdout.includes('Alex Kumar') && stdout.includes('10') && stdout.includes('A');
      return {
        passed,
        message: passed ? '🎉 Impressive! You combined concatenation, len(), and indexing flawlessly!' : 'Print Full Name, Length, and First Character.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q15: Username Generator Mini Project ──
  {
    number: 15,
    title: 'Username Generator Mini Project',
    problemStatement: 'Build a Username Generator using input() for first and last name, slicing [:3] from both, concatenating, and printing Username and Length.',
    instructions: 'Take input() for first_name and last_name, slice [:3] from each, concatenate, and print Username and Length.',
    referenceCode: 'first_name = input("Enter first name: ")\nlast_name = input("Enter last name: ")\n\nusername = first_name[:3] + last_name[:3]\n\nprint("Username:", username)\nprint("Length:", len(username))',
    starterCode: '# Build username generator from inputs with slicing [:3] and len()\n',
    sampleInput: 'Alexander\nKumar',
    expectedOutput: 'Enter first name: Alexander\nEnter last name: Kumar\nUsername: AleKum\nLength: 6',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 4,
        title: 'Receive User Names',
        conceptKey: 'input',
        speechHinglish: 'input() user se first name "Alexander" aur last name "Kumar" receive karta hai.',
        speechEnglish: 'input() receives user first and last names.',
        cardExplanationHinglish: 'Inputs: Alexander, Kumar.',
        cardExplanationEnglish: 'Inputs: Alexander, Kumar.',
        visualTarget: 'inputs',
        visualLabel: 'User Inputs',
        visualSublabel: 'Alexander & Kumar',
        consoleOutput: 'Enter first name: Alexander\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 4,
        title: 'Slice [:3] from Each',
        conceptKey: 'arguments',
        speechHinglish: '[:3] Alexander se "Ale" aur Kumar se "Kum" slice karke extract karta hai.',
        speechEnglish: '[:3] slices "Ale" from Alexander and "Kum" from Kumar.',
        cardExplanationHinglish: 'Ale + Kum extracted.',
        cardExplanationEnglish: 'Ale + Kum extracted.',
        visualTarget: 'slice',
        visualLabel: 'Ale & Kum',
        visualSublabel: '[:3] Slices',
        consoleOutput: 'Enter first name: Alexander\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 3,
        totalSteps: 4,
        title: 'Concatenate & Measure',
        conceptKey: 'print',
        speechHinglish: 'username "AleKum" ban jata hai aur len(username) integer 6 nikalta hai.',
        speechEnglish: 'username becomes "AleKum" and len() returns 6.',
        cardExplanationHinglish: 'username = "AleKum", len = 6.',
        cardExplanationEnglish: 'username = "AleKum", len = 6.',
        visualTarget: 'user',
        visualLabel: 'AleKum (len 6)',
        visualSublabel: 'Generated Username',
        consoleOutput: 'Enter first name: Alexander\nEnter last name: Kumar',
        isConsoleVisible: true
      },
      {
        step: 4,
        totalSteps: 4,
        title: 'Display Generated Username',
        conceptKey: 'output',
        speechHinglish: 'Full result Username: AleKum aur Length: 6 cleanly screen par print ho jata hai.',
        speechEnglish: 'The generated username and its character length display cleanly.',
        cardExplanationHinglish: 'Username and Length printed.',
        cardExplanationEnglish: 'Username and Length printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Username Report',
        consoleOutput: 'Enter first name: Alexander\nEnter last name: Kumar\nUsername: AleKum\nLength: 6',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Input Hint',
        badge: 'Hint 1',
        hintHinglish: 'first_name = input("Enter first name: ") aur last_name lijiye.',
        hintEnglish: 'Read first_name and last_name using input().'
      },
      {
        level: 2,
        name: 'Slice & Join Hint',
        badge: 'Hint 2',
        hintHinglish: 'username = first_name[:3] + last_name[:3] banaiye.',
        hintEnglish: 'Set username = first_name[:3] + last_name[:3].'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'Username aur len(username) print karein.',
        hintEnglish: 'Print Username and len(username).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasInput = (code.match(/input\s*\(/g) || []).length >= 2;
      const hasSlice = code.includes('[:3]') || code.includes('[0:3]');
      const passed = hasInput && hasSlice && stdout.includes('AleKum') && stdout.includes('6');
      return {
        passed,
        message: passed ? '🎉 Masterful! You built an interactive Username Generator with slicing, concatenation, and length!' : 'Read inputs, slice [:3] from both, and print Username and Length.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ═══════════════════════════════════════════════════════════════════════════
// TOPIC 17: Basic Arithmetic Operators (15 Questions)
// ═══════════════════════════════════════════════════════════════════════════

export const TOPIC_17_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Understand Addition Operator ──
  {
    number: 1,
    title: 'Understand Addition Operator',
    problemStatement: 'Create Variable a with value 10 and b with value 5. Calculate their sum using the + operator, store it in Variable result, and print result.',
    instructions: 'Create a = 10, b = 5, result = a + b, then print(result).',
    referenceCode: 'a = 10\nb = 5\nresult = a + b\nprint(result)',
    starterCode: '# Add two numbers and print result\n',
    sampleInput: '',
    expectedOutput: '15',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Variables Declaration',
        conceptKey: 'variable',
        speechHinglish: 'Variables a aur b memory me 10 aur 5 numbers store karte hain.',
        speechEnglish: 'Variables a and b store 10 and 5 in memory.',
        cardExplanationHinglish: 'a = 10 aur b = 5 declare hue.',
        cardExplanationEnglish: 'Variables a = 10 and b = 5 declared.',
        visualTarget: 'vars',
        visualLabel: 'a, b',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Addition Operation',
        conceptKey: 'expression',
        speechHinglish: '+ operator dono values ko jodkar 15 calculate karta hai aur result variable me assign karta hai.',
        speechEnglish: 'The plus operator calculates the sum 15 and assigns it to result.',
        cardExplanationHinglish: 'result = a + b calculated.',
        cardExplanationEnglish: 'result = a + b calculated.',
        visualTarget: 'process',
        visualLabel: '10 + 5',
        visualSublabel: 'Sum -> 15',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Sum',
        conceptKey: 'output',
        speechHinglish: 'print(result) console par 15 print kar deta hai.',
        speechEnglish: 'print(result) outputs 15 to the console.',
        cardExplanationHinglish: '15 printed to console.',
        cardExplanationEnglish: '15 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '15',
        consoleOutput: '15',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 10 aur b = 5 assign kijiye.',
        hintEnglish: 'Assign a = 10 and b = 5.'
      },
      {
        level: 2,
        name: 'Addition Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = a + b se dono numbers ko add karein.',
        hintEnglish: 'Add both numbers with result = a + b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) likhkar run karein.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '15' && (code.includes('+') || code.includes('result'));
      return {
        passed,
        message: passed ? '🎉 Excellent! You mastered the addition (+) operator!' : 'Create a = 10, b = 5, calculate result = a + b, and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Understand Subtraction Operator ──
  {
    number: 2,
    title: 'Understand Subtraction Operator',
    problemStatement: 'Create Variable a with 20 and b with 8. Calculate their difference using the - operator, store it in result, and print result.',
    instructions: 'Create a = 20, b = 8, result = a - b, then print(result).',
    referenceCode: 'a = 20\nb = 8\nresult = a - b\nprint(result)',
    starterCode: '# Subtract b from a and print result\n',
    sampleInput: '',
    expectedOutput: '12',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Variables Setup',
        conceptKey: 'variable',
        speechHinglish: 'a aur b variables me 20 aur 8 values store hoti hain.',
        speechEnglish: 'Variables a and b hold values 20 and 8.',
        cardExplanationHinglish: 'a = 20, b = 8 initialized.',
        cardExplanationEnglish: 'a = 20, b = 8 initialized.',
        visualTarget: 'vars',
        visualLabel: 'a, b',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Subtraction Operation',
        conceptKey: 'expression',
        speechHinglish: '- operator a me se b ko subtract karke 12 return karta hai.',
        speechEnglish: 'The minus operator subtracts b from a to yield 12.',
        cardExplanationHinglish: 'result = a - b evaluated.',
        cardExplanationEnglish: 'result = a - b evaluated.',
        visualTarget: 'process',
        visualLabel: '20 - 8',
        visualSublabel: 'Difference -> 12',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Difference',
        conceptKey: 'output',
        speechHinglish: 'print(result) screen par 12 output karta hai.',
        speechEnglish: 'print(result) displays 12 on the screen.',
        cardExplanationHinglish: '12 printed to console.',
        cardExplanationEnglish: '12 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '12',
        consoleOutput: '12',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 20 aur b = 8 assign kijiye.',
        hintEnglish: 'Assign a = 20 and b = 8.'
      },
      {
        level: 2,
        name: 'Minus Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = a - b se difference calculate karein.',
        hintEnglish: 'Calculate the difference using result = a - b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) run karein.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '12' && (code.includes('-') || code.includes('result'));
      return {
        passed,
        message: passed ? '🎉 Great job! You successfully used the subtraction (-) operator!' : 'Create a = 20, b = 8, calculate result = a - b, and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: Understand Multiplication Operator ──
  {
    number: 3,
    title: 'Understand Multiplication Operator',
    problemStatement: 'Create Variable a with 6 and b with 4. Multiply them using the asterisk (*) operator, store the answer in result, and print result.',
    instructions: 'Create a = 6, b = 4, result = a * b, then print(result).',
    referenceCode: 'a = 6\nb = 4\nresult = a * b\nprint(result)',
    starterCode: '# Multiply a and b and print result\n',
    sampleInput: '',
    expectedOutput: '24',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Multiplication Symbol',
        conceptKey: 'expression',
        speechHinglish: 'Python me multiplication ke liye asterisk * symbol ka use hota hai.',
        speechEnglish: 'Python uses the asterisk * symbol for multiplication.',
        cardExplanationHinglish: '* is Python multiplication.',
        cardExplanationEnglish: '* is Python multiplication.',
        visualTarget: 'vars',
        visualLabel: 'a = 6, b = 4',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Evaluate Product',
        conceptKey: 'expression',
        speechHinglish: 'result = a * b expression 6 aur 4 ko multiply karke 24 store karta hai.',
        speechEnglish: 'The expression a * b multiplies 6 and 4 to yield 24.',
        cardExplanationHinglish: 'result = 24 stored.',
        cardExplanationEnglish: 'result = 24 stored.',
        visualTarget: 'process',
        visualLabel: '6 * 4',
        visualSublabel: 'Product -> 24',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Product',
        conceptKey: 'output',
        speechHinglish: 'print(result) console par 24 display karta hai.',
        speechEnglish: 'print(result) displays 24 in the console.',
        cardExplanationHinglish: '24 printed to console.',
        cardExplanationEnglish: '24 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '24',
        consoleOutput: '24',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 6 aur b = 4 assign kijiye.',
        hintEnglish: 'Assign a = 6 and b = 4.'
      },
      {
        level: 2,
        name: 'Multiply Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = a * b se multiplication calculate karein.',
        hintEnglish: 'Multiply using result = a * b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) likhkar run karein.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '24' && (code.includes('*') || code.includes('result'));
      return {
        passed,
        message: passed ? '🎉 Superb! You mastered the multiplication (*) operator!' : 'Create a = 6, b = 4, result = a * b, and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Understand True Division Operator ──
  {
    number: 4,
    title: 'Understand True Division Operator',
    problemStatement: 'Create Variable a with 20 and b with 4. Divide a by b using the slash (/) operator, store in result, and print result.',
    instructions: 'Create a = 20, b = 4, result = a / b, then print(result).',
    referenceCode: 'a = 20\nb = 4\nresult = a / b\nprint(result)',
    starterCode: '# Divide a by b and print float result\n',
    sampleInput: '',
    expectedOutput: '5.0',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'True Division Symbol',
        conceptKey: 'expression',
        speechHinglish: 'Python me single slash / true division operator hota hai.',
        speechEnglish: 'In Python, the single slash / performs true division.',
        cardExplanationHinglish: '/ is True Division.',
        cardExplanationEnglish: '/ is True Division.',
        visualTarget: 'vars',
        visualLabel: 'a = 20, b = 4',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Float Result Guarantee',
        conceptKey: 'expression',
        speechHinglish: 'True division hamesha ek floating point number return karta hai, even if division exact ho.',
        speechEnglish: 'True division always returns a float even when dividing evenly.',
        cardExplanationHinglish: 'Result is float 5.0.',
        cardExplanationEnglish: 'Result is float 5.0.',
        visualTarget: 'process',
        visualLabel: '20 / 4',
        visualSublabel: 'Float -> 5.0',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Float Quotient',
        conceptKey: 'output',
        speechHinglish: '20 / 4 evaluate hokar 5.0 banata hai aur console par 5.0 print hota hai.',
        speechEnglish: '20 / 4 evaluates to 5.0 and displays on the screen.',
        cardExplanationHinglish: '5.0 printed to console.',
        cardExplanationEnglish: '5.0 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '5.0',
        consoleOutput: '5.0',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 20 aur b = 4 assign kijiye.',
        hintEnglish: 'Assign a = 20 and b = 4.'
      },
      {
        level: 2,
        name: 'Division Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = a / b likhiye.',
        hintEnglish: 'Write result = a / b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) run karein, notice karein ki result float 5.0 aayega.',
        hintEnglish: 'Run print(result); note that the output is float 5.0.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = (stdout.trim() === '5.0' || stdout.trim() === '5') && (code.includes('/') || code.includes('result'));
      return {
        passed,
        message: passed ? '🎉 Awesome! Notice how true division (/) always yields a float 5.0!' : 'Create a = 20, b = 4, result = a / b, and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Understand Floor Division Operator ──
  {
    number: 5,
    title: 'Understand Floor Division Operator',
    problemStatement: 'Create Variable a with 17 and b with 5. Calculate floor division using double slash (//), store in result, and print result.',
    instructions: 'Create a = 17, b = 5, result = a // b, then print(result).',
    referenceCode: 'a = 17\nb = 5\nresult = a // b\nprint(result)',
    starterCode: '# Calculate floor division using // and print result\n',
    sampleInput: '',
    expectedOutput: '3',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Floor Division Operator',
        conceptKey: 'expression',
        speechHinglish: 'Double slash // floor division operator kehlata hai.',
        speechEnglish: 'The double slash // represents floor division in Python.',
        cardExplanationHinglish: '// is Floor Division.',
        cardExplanationEnglish: '// is Floor Division.',
        visualTarget: 'vars',
        visualLabel: 'a = 17, b = 5',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Discard Decimals',
        conceptKey: 'expression',
        speechHinglish: 'Ye decimal point ke baad ki sabhi values ko discard karke integer quotient deta hai.',
        speechEnglish: 'It discards fractional digits and keeps only the integer quotient.',
        cardExplanationHinglish: '3.4 becomes integer 3.',
        cardExplanationEnglish: '3.4 becomes integer 3.',
        visualTarget: 'process',
        visualLabel: '17 // 5',
        visualSublabel: 'Quotient -> 3',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Integer Quotient',
        conceptKey: 'output',
        speechHinglish: '17 // 5 ka result integer 3 hota hai jo console par print hota hai.',
        speechEnglish: '17 // 5 evaluates to integer 3, which is printed to the console.',
        cardExplanationHinglish: '3 printed to console.',
        cardExplanationEnglish: '3 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '3',
        consoleOutput: '3',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 17 aur b = 5 assign kijiye.',
        hintEnglish: 'Assign a = 17 and b = 5.'
      },
      {
        level: 2,
        name: 'Floor Division Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = a // b likhiye double slash ke saath.',
        hintEnglish: 'Use double slash with result = a // b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) run karein.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '3' && (code.includes('//') || code.includes('result'));
      return {
        passed,
        message: passed ? '🎉 Fantastic! Floor division (//) chops off decimals and keeps the integer 3!' : 'Create a = 17, b = 5, result = a // b, and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Understand Modulus Operator ──
  {
    number: 6,
    title: 'Understand Modulus Operator',
    problemStatement: 'Create Variable a with 17 and b with 5. Find the remainder using the percent (%) modulus operator, store in remainder, and print remainder.',
    instructions: 'Create a = 17, b = 5, remainder = a % b, then print(remainder).',
    referenceCode: 'a = 17\nb = 5\nremainder = a % b\nprint(remainder)',
    starterCode: '# Find remainder using % and print it\n',
    sampleInput: '',
    expectedOutput: '2',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Modulus Operator',
        conceptKey: 'expression',
        speechHinglish: 'Percent % symbol ko Python me Modulus operator kaha jata hai.',
        speechEnglish: 'The percent % symbol serves as the modulus operator in Python.',
        cardExplanationHinglish: '% finds remainder.',
        cardExplanationEnglish: '% finds remainder.',
        visualTarget: 'vars',
        visualLabel: 'a = 17, b = 5',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Calculate Remainder',
        conceptKey: 'expression',
        speechHinglish: 'Modulus division ke baad bacha hua remainder yaani sheshfal calculate karta hai.',
        speechEnglish: 'Modulus calculates the remainder left over after integer division.',
        cardExplanationHinglish: '17 % 5 leaves 2.',
        cardExplanationEnglish: '17 % 5 leaves 2.',
        visualTarget: 'process',
        visualLabel: '17 % 5',
        visualSublabel: 'Remainder -> 2',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Remainder',
        conceptKey: 'output',
        speechHinglish: '17 ko 5 se divide karne par remainder 2 bachta hai, jo screen par print hota hai.',
        speechEnglish: 'Dividing 17 by 5 leaves a remainder of 2, which prints to the screen.',
        cardExplanationHinglish: '2 printed to console.',
        cardExplanationEnglish: '2 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '2',
        consoleOutput: '2',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 17 aur b = 5 likhiye.',
        hintEnglish: 'Write a = 17 and b = 5.'
      },
      {
        level: 2,
        name: 'Modulus Hint',
        badge: 'Hint 2',
        hintHinglish: 'remainder = a % b modulus operator se calculate karein.',
        hintEnglish: 'Calculate remainder = a % b using modulus.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(remainder) likhkar run karein.',
        hintEnglish: 'Run print(remainder).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '2' && (code.includes('%') || code.includes('remainder'));
      return {
        passed,
        message: passed ? '🎉 Brilliant! The modulus (%) operator gave you the remainder 2!' : 'Create a = 17, b = 5, remainder = a % b, and print(remainder).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q7: Understand Exponentiation Operator ──
  {
    number: 7,
    title: 'Understand Exponentiation Operator',
    problemStatement: 'Create Variable base with 2 and power with 4. Calculate 2 to the power 4 using double asterisk (**), store in result, and print result.',
    instructions: 'Create base = 2, power = 4, result = base ** power, then print(result).',
    referenceCode: 'base = 2\npower = 4\nresult = base ** power\nprint(result)',
    starterCode: '# Calculate 2 to the power 4 using ** and print result\n',
    sampleInput: '',
    expectedOutput: '16',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Exponentiation Operator',
        conceptKey: 'expression',
        speechHinglish: 'Python me double asterisk ** power ya exponentiation operator hota hai.',
        speechEnglish: 'Double asterisk ** is Pythons exponentiation operator.',
        cardExplanationHinglish: '** calculates power.',
        cardExplanationEnglish: '** calculates power.',
        visualTarget: 'vars',
        visualLabel: 'base=2, power=4',
        visualSublabel: 'Integers',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Calculate 2 ** 4',
        conceptKey: 'expression',
        speechHinglish: 'base ** power ka matlab hai base ko power times multiply karna, yaani 2 * 2 * 2 * 2.',
        speechEnglish: 'base ** power multiplies the base power times: 2 * 2 * 2 * 2.',
        cardExplanationHinglish: '2 * 2 * 2 * 2 = 16.',
        cardExplanationEnglish: '2 * 2 * 2 * 2 = 16.',
        visualTarget: 'process',
        visualLabel: '2 ** 4',
        visualSublabel: 'Power -> 16',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Power Result',
        conceptKey: 'output',
        speechHinglish: 'Result 16 calculate hota hai aur screen par print ho jata hai.',
        speechEnglish: 'The calculated value 16 is displayed on the screen.',
        cardExplanationHinglish: '16 printed to console.',
        cardExplanationEnglish: '16 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '16',
        consoleOutput: '16',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'base = 2 aur power = 4 assign kijiye.',
        hintEnglish: 'Assign base = 2 and power = 4.'
      },
      {
        level: 2,
        name: 'Power Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = base ** power se exponentiation karein.',
        hintEnglish: 'Compute exponentiation with result = base ** power.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) run karein.',
        hintEnglish: 'Run print(result).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '16' && (code.includes('**') || code.includes('result'));
      return {
        passed,
        message: passed ? '🎉 Exceptional! You calculated powers using the exponentiation (**) operator!' : 'Create base = 2, power = 4, result = base ** power, and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q8: Use All Seven Arithmetic Operators ──
  {
    number: 8,
    title: 'Use All Seven Arithmetic Operators',
    problemStatement: 'Create Variable a with 12 and b with 5. Print all seven arithmetic calculations formatted with labels.',
    instructions: 'Create a = 12, b = 5, and print labeled results for +, -, *, /, //, %, and **.',
    referenceCode: 'a = 12\nb = 5\nprint(f"Addition: {a + b}")\nprint(f"Subtraction: {a - b}")\nprint(f"Multiplication: {a * b}")\nprint(f"Division: {a / b}")\nprint(f"Floor Division: {a // b}")\nprint(f"Modulus: {a % b}")\nprint(f"Exponentiation: {a ** b}")',
    starterCode: '# Print all 7 arithmetic operations for a = 12, b = 5\na = 12\nb = 5\n',
    sampleInput: '',
    expectedOutput: 'Addition: 17\nSubtraction: 7\nMultiplication: 60\nDivision: 2.4\nFloor Division: 2\nModulus: 2\nExponentiation: 248832',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'All Seven Operators',
        conceptKey: 'expression',
        speechHinglish: 'Python me saat basic arithmetic operators hote hain: +, -, *, /, //, %, aur **.',
        speechEnglish: 'Python provides seven core arithmetic operators: +, -, *, /, //, %, and **.',
        cardExplanationHinglish: '7 arithmetic operators available.',
        cardExplanationEnglish: '7 arithmetic operators available.',
        visualTarget: 'vars',
        visualLabel: 'a = 12, b = 5',
        visualSublabel: 'Operands',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Inline Expressions in f-strings',
        conceptKey: 'expression',
        speechHinglish: 'F-strings ke andar curly braces me expressions directly evaluate kiye ja sakte hain.',
        speechEnglish: 'Expressions inside f-string braces are evaluated inline during execution.',
        cardExplanationHinglish: '{a + b}, {a - b}, etc.',
        cardExplanationEnglish: '{a + b}, {a - b}, etc.',
        visualTarget: 'process',
        visualLabel: 'f-string expressions',
        visualSublabel: 'Evaluates each operator',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Complete Operations Report',
        conceptKey: 'output',
        speechHinglish: 'Har operation calculated value ke sath console par clean format me display ho jati hai.',
        speechEnglish: 'Each operation prints clearly with its corresponding label.',
        cardExplanationHinglish: 'All 7 calculations printed.',
        cardExplanationEnglish: 'All 7 calculations printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '7 operations',
        consoleOutput: 'Addition: 17\nSubtraction: 7\nMultiplication: 60\nDivision: 2.4\nFloor Division: 2\nModulus: 2\nExponentiation: 248832',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 12 aur b = 5 assign kijiye.',
        hintEnglish: 'Assign a = 12 and b = 5.'
      },
      {
        level: 2,
        name: 'Operations Hint',
        badge: 'Hint 2',
        hintHinglish: 'Har operator ke liye f-string print statement likhiye: Addition, Subtraction, Multiplication, Division, Floor Division, Modulus, aur Exponentiation.',
        hintEnglish: 'Write f-string print statements for all 7 operators with matching labels.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'Code run karke check karein ki saare 7 results sahi format me print ho rahe hain.',
        hintEnglish: 'Run the code and verify all 7 labeled lines.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasAll = stdout.includes('Addition: 17') && stdout.includes('Subtraction: 7') && stdout.includes('Multiplication: 60') && stdout.includes('Division: 2.4') && stdout.includes('Floor Division: 2') && stdout.includes('Modulus: 2') && stdout.includes('Exponentiation: 248832');
      return {
        passed: hasAll,
        message: hasAll ? '🎉 Incredible! You successfully implemented all seven arithmetic operators!' : 'Print all seven arithmetic calculations with labels for a = 12 and b = 5.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q9: Understand Operator Precedence ──
  {
    number: 9,
    title: 'Understand Operator Precedence',
    problemStatement: 'In Python, multiplication (*) has higher precedence than addition (+). Calculate result = 10 + 5 * 2 and print result.',
    instructions: 'Assign result = 10 + 5 * 2, then print(result).',
    referenceCode: 'result = 10 + 5 * 2\nprint(result)',
    starterCode: '# Calculate 10 + 5 * 2 and print result\n',
    sampleInput: '',
    expectedOutput: '20',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Precedence Rule',
        conceptKey: 'expression',
        speechHinglish: 'BODMAS ya PEMDAS rule ke according, multiplication * ki precedence addition + se zyada hoti hai.',
        speechEnglish: 'By operator precedence rules, multiplication takes priority over addition.',
        cardExplanationHinglish: '* precedes + in evaluation.',
        cardExplanationEnglish: '* precedes + in evaluation.',
        visualTarget: 'process',
        visualLabel: '10 + 5 * 2',
        visualSublabel: 'Precedence Check',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Evaluate Multiplication First',
        conceptKey: 'expression',
        speechHinglish: 'Python pehle 5 * 2 ko multiply karke 10 banata hai, fir 10 + 10 jodkar 20 deta hai.',
        speechEnglish: 'Python evaluates 5 * 2 first to get 10, then adds 10 to produce 20.',
        cardExplanationHinglish: '5 * 2 = 10; 10 + 10 = 20.',
        cardExplanationEnglish: '5 * 2 = 10; 10 + 10 = 20.',
        visualTarget: 'process',
        visualLabel: '10 + 10',
        visualSublabel: 'Final Addition -> 20',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Display Precedence Result',
        conceptKey: 'output',
        speechHinglish: 'Screen par 20 print hota hai, 30 nahi.',
        speechEnglish: 'The console displays 20 rather than 30.',
        cardExplanationHinglish: '20 printed to console.',
        cardExplanationEnglish: '20 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '20',
        consoleOutput: '20',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Expression Hint',
        badge: 'Hint 1',
        hintHinglish: 'result = 10 + 5 * 2 assign kijiye.',
        hintEnglish: 'Assign result = 10 + 5 * 2.'
      },
      {
        level: 2,
        name: 'Print Hint',
        badge: 'Hint 2',
        hintHinglish: 'print(result) run karein.',
        hintEnglish: 'Run print(result).'
      },
      {
        level: 3,
        name: 'Precedence Hint',
        badge: 'Hint 3',
        hintHinglish: 'Notice karein ki pehle multiplication 5 * 2 hota hai fir 10 add hota hai.',
        hintEnglish: 'Observe that multiplication 5 * 2 executes before addition.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '20' && code.includes('*') && code.includes('+');
      return {
        passed,
        message: passed ? '🎉 Outstanding! You understand operator precedence: multiplication executes before addition!' : 'Assign result = 10 + 5 * 2 and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q10: Change Calculation Order Using Parentheses ──
  {
    number: 10,
    title: 'Change Calculation Order Using Parentheses',
    problemStatement: 'Use parentheses () to force Python to add first: result = (10 + 5) * 2. Print result.',
    instructions: 'Assign result = (10 + 5) * 2, then print(result).',
    referenceCode: 'result = (10 + 5) * 2\nprint(result)',
    starterCode: '# Use parentheses to add before multiplying\n',
    sampleInput: '',
    expectedOutput: '30',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Parentheses Priority',
        conceptKey: 'expression',
        speechHinglish: 'Parentheses () Python me highest priority rakhte hain.',
        speechEnglish: 'Parentheses have the highest precedence in Python expressions.',
        cardExplanationHinglish: 'Parentheses () evaluated first.',
        cardExplanationEnglish: 'Parentheses () evaluated first.',
        visualTarget: 'process',
        visualLabel: '(10 + 5) * 2',
        visualSublabel: 'Grouped Expression',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Addition Forced First',
        conceptKey: 'expression',
        speechHinglish: 'Parentheses ke andar ka addition (10 + 5) pehle hokar 15 ban jata hai.',
        speechEnglish: 'The addition (10 + 5) executes first inside the parentheses to produce 15.',
        cardExplanationHinglish: '10 + 5 = 15; 15 * 2 = 30.',
        cardExplanationEnglish: '10 + 5 = 15; 15 * 2 = 30.',
        visualTarget: 'process',
        visualLabel: '15 * 2',
        visualSublabel: 'Multiplication -> 30',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Parenthesized Result',
        conceptKey: 'output',
        speechHinglish: 'Fir 15 * 2 multiply hokar 30 result deta hai jo print hota hai.',
        speechEnglish: 'Multiplying 15 by 2 produces 30, which is printed to the console.',
        cardExplanationHinglish: '30 printed to console.',
        cardExplanationEnglish: '30 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '30',
        consoleOutput: '30',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Parentheses Hint',
        badge: 'Hint 1',
        hintHinglish: '(10 + 5) ko parentheses me band kijiye.',
        hintEnglish: 'Enclose (10 + 5) inside parentheses.'
      },
      {
        level: 2,
        name: 'Expression Hint',
        badge: 'Hint 2',
        hintHinglish: 'result = (10 + 5) * 2 likhiye.',
        hintEnglish: 'Write result = (10 + 5) * 2.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) run karke dekhiye answer 30 aayega.',
        hintEnglish: 'Run print(result) to verify the result 30.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '30' && code.includes('(') && code.includes(')');
      return {
        passed,
        message: passed ? '🎉 Brilliant! Parentheses allow you to take full control of calculation order!' : 'Assign result = (10 + 5) * 2 and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q11: Calculate with Negative Numbers ──
  {
    number: 11,
    title: 'Calculate with Negative Numbers',
    problemStatement: 'Create Variable a with -17 and b with 5. Calculate floor division and modulus, then print both with labels.',
    instructions: 'Create a = -17, b = 5, and print Floor Division and Modulus using f-strings.',
    referenceCode: 'a = -17\nb = 5\nprint(f"Floor Division: {a // b}")\nprint(f"Modulus: {a % b}")',
    starterCode: '# Calculate floor division and modulus with negative numbers\na = -17\nb = 5\n',
    sampleInput: '',
    expectedOutput: 'Floor Division: -4\nModulus: 3',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Floor Division Rounds Down',
        conceptKey: 'expression',
        speechHinglish: 'Python me floor division hamesha round towards negative infinity karta hai, isliye -17 // 5 ka answer -4 hota hai.',
        speechEnglish: 'Python floor division rounds down toward negative infinity, making -17 // 5 equal to -4.',
        cardExplanationHinglish: '-17 // 5 rounds to -4.',
        cardExplanationEnglish: '-17 // 5 rounds to -4.',
        visualTarget: 'process',
        visualLabel: '-17 // 5',
        visualSublabel: 'Rounds toward -Inf -> -4',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Modulus Formula Consistency',
        conceptKey: 'expression',
        speechHinglish: 'Python ka modulus formula b * (a // b) + (a % b) = a follow karta hai, isliye 5 * (-4) + 3 = -17, yaani modulus 3 aata hai.',
        speechEnglish: 'Python modulus ensures b * (a // b) + (a % b) == a, yielding 3 for -17 % 5.',
        cardExplanationHinglish: '5 * (-4) + 3 = -17.',
        cardExplanationEnglish: '5 * (-4) + 3 = -17.',
        visualTarget: 'process',
        visualLabel: '-17 % 5',
        visualSublabel: 'Modulus -> 3',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Negative Results',
        conceptKey: 'output',
        speechHinglish: 'Floor Division: -4 aur Modulus: 3 clean lines par print ho jate hain.',
        speechEnglish: 'Both Floor Division: -4 and Modulus: 3 are printed cleanly.',
        cardExplanationHinglish: 'Outputs printed cleanly.',
        cardExplanationEnglish: 'Outputs printed cleanly.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '-4 and 3',
        consoleOutput: 'Floor Division: -4\nModulus: 3',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = -17 aur b = 5 assign kijiye.',
        hintEnglish: 'Assign a = -17 and b = 5.'
      },
      {
        level: 2,
        name: 'Expressions Hint',
        badge: 'Hint 2',
        hintHinglish: 'print(f"Floor Division: {a // b}") aur print(f"Modulus: {a % b}") likhiye.',
        hintEnglish: 'Print Floor Division and Modulus using f-strings.'
      },
      {
        level: 3,
        name: 'Observe Hint',
        badge: 'Hint 3',
        hintHinglish: 'Negative number ke floor division aur modulus behavior ko observe karein.',
        hintEnglish: 'Observe how Python handles floor division and modulus with negative numbers.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.includes('-4') && stdout.includes('3') && (code.includes('//') || code.includes('%'));
      return {
        passed,
        message: passed ? '🎉 Wonderful! You understood negative number division and modulus math in Python!' : 'Print Floor Division: -4 and Modulus: 3 for a = -17, b = 5.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q12: Fix a Division Error ──
  {
    number: 12,
    title: 'Fix a Division Error',
    problemStatement: 'In the starter code, dividing by zero causes ZeroDivisionError. Fix the code by changing divisor b from 0 to 2, so that 10 is divided by 2, and print result.',
    instructions: 'Change b = 0 to b = 2, then run the code to print 5.0.',
    referenceCode: 'a = 10\nb = 2\nresult = a / b\nprint(result)',
    starterCode: '# Fix the ZeroDivisionError below\na = 10\nb = 0\nresult = a / b\nprint(result)',
    sampleInput: '',
    expectedOutput: '5.0',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'ZeroDivisionError Cause',
        conceptKey: 'expression',
        speechHinglish: 'Mathematics aur Python dono me kisi bhi number ko 0 se divide karna impossible hai.',
        speechEnglish: 'Dividing by zero is mathematically undefined and raises ZeroDivisionError in Python.',
        cardExplanationHinglish: '10 / 0 raises error.',
        cardExplanationEnglish: '10 / 0 raises error.',
        visualTarget: 'process',
        visualLabel: '10 / 0',
        visualSublabel: 'ZeroDivisionError',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Fix Divisor to 2',
        conceptKey: 'variable',
        speechHinglish: 'Divisor b ko 2 karne par expression 10 / 2 safely evaluate hota hai.',
        speechEnglish: 'Changing divisor b to 2 allows 10 / 2 to evaluate cleanly.',
        cardExplanationHinglish: 'b = 2 fixes the issue.',
        cardExplanationEnglish: 'b = 2 fixes the issue.',
        visualTarget: 'vars',
        visualLabel: 'b = 2',
        visualSublabel: 'Valid Divisor',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Successful Execution',
        conceptKey: 'output',
        speechHinglish: 'Result 5.0 screen par bina kisi error ke successfully print hota hai.',
        speechEnglish: 'The output 5.0 prints to the console without exceptions.',
        cardExplanationHinglish: '5.0 printed cleanly.',
        cardExplanationEnglish: '5.0 printed cleanly.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: '5.0',
        consoleOutput: '5.0',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Identify Bug Hint',
        badge: 'Hint 1',
        hintHinglish: 'Starter code me b = 0 ko badal kar b = 2 kijiye.',
        hintEnglish: 'Change b = 0 to b = 2 in the starter code.'
      },
      {
        level: 2,
        name: 'Error Concept Hint',
        badge: 'Hint 2',
        hintHinglish: 'Python me zero se divide karne par ZeroDivisionError aata hai.',
        hintEnglish: 'Dividing by zero in Python raises a ZeroDivisionError.'
      },
      {
        level: 3,
        name: 'Run Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) run karke 5.0 output verify karein.',
        hintEnglish: 'Run print(result) and verify 5.0.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = (stdout.trim() === '5.0' || stdout.trim() === '5') && !code.includes('b = 0') && !code.includes('/ 0');
      return {
        passed,
        message: passed ? '🎉 Problem solved! You fixed the ZeroDivisionError by providing a valid non-zero divisor!' : 'Change b = 0 to b = 2 and print result.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q13: Calculate Total and Average Marks ──
  {
    number: 13,
    title: 'Calculate Total and Average Marks',
    problemStatement: 'Create python_marks = 80, sql_marks = 90, and excel_marks = 85. Calculate total by adding them together. Calculate average by dividing total by 3. Print Total and Average.',
    instructions: 'Sum the three marks, divide by 3 for average, and print both using f-strings.',
    referenceCode: 'python_marks = 80\nsql_marks = 90\nexcel_marks = 85\ntotal = python_marks + sql_marks + excel_marks\naverage = total / 3\nprint(f"Total: {total}")\nprint(f"Average: {average}")',
    starterCode: '# Calculate total and average marks\npython_marks = 80\nsql_marks = 90\nexcel_marks = 85\n',
    sampleInput: '',
    expectedOutput: 'Total: 255\nAverage: 85.0',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Calculate Total Sum',
        conceptKey: 'expression',
        speechHinglish: 'Addition operator + teeno subjects ke marks ko jodkar total 255 calculate karta hai.',
        speechEnglish: 'The addition operator + sums the three subject scores to get total 255.',
        cardExplanationHinglish: '80 + 90 + 85 = 255.',
        cardExplanationEnglish: '80 + 90 + 85 = 255.',
        visualTarget: 'process',
        visualLabel: 'total = 255',
        visualSublabel: 'Sum of Marks',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Calculate Average',
        conceptKey: 'expression',
        speechHinglish: 'Division operator / total ko 3 subjects se divide karke average 85.0 nikalta hai.',
        speechEnglish: 'The division operator / divides the total by 3 to calculate average 85.0.',
        cardExplanationHinglish: '255 / 3 = 85.0.',
        cardExplanationEnglish: '255 / 3 = 85.0.',
        visualTarget: 'process',
        visualLabel: 'average = 85.0',
        visualSublabel: 'Average Score',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Results Report',
        conceptKey: 'output',
        speechHinglish: 'Total: 255 aur Average: 85.0 console par cleanly print ho jate hain.',
        speechEnglish: 'Total: 255 and Average: 85.0 are formatted and printed.',
        cardExplanationHinglish: 'Both metrics printed.',
        cardExplanationEnglish: 'Both metrics printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Total and Average',
        consoleOutput: 'Total: 255\nAverage: 85.0',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'python_marks = 80, sql_marks = 90, excel_marks = 85 banaiye.',
        hintEnglish: 'Assign marks 80, 90, and 85 to the respective variables.'
      },
      {
        level: 2,
        name: 'Formulas Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = python_marks + sql_marks + excel_marks calculate karein.',
        hintEnglish: 'Calculate total = python_marks + sql_marks + excel_marks.'
      },
      {
        level: 3,
        name: 'Average Hint',
        badge: 'Hint 3',
        hintHinglish: 'average = total / 3 nikal kar Total aur Average print karein.',
        hintEnglish: 'Calculate average = total / 3 and print Total and Average.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.includes('255') && stdout.includes('85') && code.includes('+') && code.includes('/');
      return {
        passed,
        message: passed ? '🎉 Excellent! You applied addition and division to build a real-world grade report!' : 'Calculate total and average, and print Total: 255 and Average: 85.0.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q14: Even or Odd Using Modulus ──
  {
    number: 14,
    title: 'Even or Odd Using Modulus',
    problemStatement: 'Take integer user input, calculate the remainder when divided by 2 using modulus (%), check if even using == 0, and print both.',
    instructions: 'Use number = int(input("Enter a number: ")), remainder = number % 2, is_even = remainder == 0, and print both.',
    referenceCode: 'number = int(input("Enter a number: "))\nremainder = number % 2\nis_even = remainder == 0\nprint(f"Remainder: {remainder}")\nprint(f"Is Even: {is_even}")',
    starterCode: '# Check if number is even using modulus operator %\n',
    sampleInput: '8',
    expectedOutput: 'Enter a number: 8\nRemainder: 0\nIs Even: True',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Numeric User Input',
        conceptKey: 'input',
        speechHinglish: 'input() function user se input leta hai aur int() use integer me convert karta hai.',
        speechEnglish: 'input() receives text from user and int() casts it to an integer.',
        cardExplanationHinglish: 'int(input()) reads number.',
        cardExplanationEnglish: 'int(input()) reads number.',
        visualTarget: 'input',
        visualLabel: 'input',
        visualSublabel: 'User supplies 8',
        consoleOutput: 'Enter a number: 8',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Modulus 2 Check',
        conceptKey: 'expression',
        speechHinglish: 'Modulus 2 remainder deta hai: even number ke liye 0 aur odd number ke liye 1.',
        speechEnglish: 'Modulus 2 returns 0 for even numbers and 1 for odd numbers.',
        cardExplanationHinglish: '8 % 2 = 0.',
        cardExplanationEnglish: '8 % 2 = 0.',
        visualTarget: 'process',
        visualLabel: '8 % 2',
        visualSublabel: 'remainder = 0, is_even = True',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Print Parity Information',
        conceptKey: 'output',
        speechHinglish: 'is_even boolean True ya False batata hai aur dono values screen par display hoti hain.',
        speechEnglish: 'is_even evaluates to True or False and both lines print to the console.',
        cardExplanationHinglish: 'Remainder: 0 and Is Even: True.',
        cardExplanationEnglish: 'Remainder: 0 and Is Even: True.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Parity Results',
        consoleOutput: 'Enter a number: 8\nRemainder: 0\nIs Even: True',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Input Hint',
        badge: 'Hint 1',
        hintHinglish: 'number = int(input("Enter a number: ")) se user se number lijiye.',
        hintEnglish: 'Receive an integer using number = int(input("Enter a number: ")).'
      },
      {
        level: 2,
        name: 'Modulus Hint',
        badge: 'Hint 2',
        hintHinglish: 'remainder = number % 2 calculate karein aur is_even = remainder == 0 check karein.',
        hintEnglish: 'Calculate remainder = number % 2 and is_even = remainder == 0.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'Remainder aur Is Even ko f-string se print karein.',
        hintEnglish: 'Print Remainder and Is Even with f-strings.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.includes('Remainder: 0') && stdout.includes('Is Even: True') && code.includes('%');
      return {
        passed,
        message: passed ? '🎉 Superb! You used modulus (%) and equality (==) to detect even numbers!' : 'Take number as int input, compute number % 2, and print Remainder and Is Even.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q15: Interactive Arithmetic Calculator Mini Project ──
  {
    number: 15,
    title: 'Interactive Arithmetic Calculator Mini Project',
    problemStatement: 'Build an interactive arithmetic calculator mini project. Take two integers from user, print header ===== ARITHMETIC CALCULATOR =====, and output all seven arithmetic operations.',
    instructions: 'Input a and b, print header, and calculate Sum, Difference, Product, Quotient, Floor Quotient, Remainder, and Power.',
    referenceCode: 'a = int(input("Enter first number: "))\nb = int(input("Enter second number: "))\nprint("===== ARITHMETIC CALCULATOR =====")\nprint(f"Sum: {a + b}")\nprint(f"Difference: {a - b}")\nprint(f"Product: {a * b}")\nprint(f"Quotient: {a / b}")\nprint(f"Floor Quotient: {a // b}")\nprint(f"Remainder: {a % b}")\nprint(f"Power: {a ** b}")',
    starterCode: '# Build an interactive 7-operator arithmetic calculator\n',
    sampleInput: '10\n3',
    expectedOutput: 'Enter first number: 10\nEnter second number: 3\n===== ARITHMETIC CALCULATOR =====\nSum: 13\nDifference: 7\nProduct: 30\nQuotient: 3.3333333333333335\nFloor Quotient: 3\nRemainder: 1\nPower: 1000',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Two User Inputs',
        conceptKey: 'input',
        speechHinglish: 'Interactive input do numbers dynamically user se collect karta hai.',
        speechEnglish: 'Interactive inputs capture two numeric values from the user dynamically.',
        cardExplanationHinglish: 'Takes a and b as int inputs.',
        cardExplanationEnglish: 'Takes a and b as int inputs.',
        visualTarget: 'input',
        visualLabel: 'input',
        visualSublabel: 'Reads 10 and 3',
        consoleOutput: 'Enter first number: 10\nEnter second number: 3',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Execute All 7 Operators',
        conceptKey: 'expression',
        speechHinglish: 'All seven Python arithmetic operators execute hokar respective calculations perform karte hain.',
        speechEnglish: 'All seven Python arithmetic operators compute their corresponding mathematical results.',
        cardExplanationHinglish: '+, -, *, /, //, %, ** calculated.',
        cardExplanationEnglish: '+, -, *, /, //, %, ** calculated.',
        visualTarget: 'process',
        visualLabel: 'Calculator Suite',
        visualSublabel: '7 operations computed',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Full Calculator Display',
        conceptKey: 'output',
        speechHinglish: 'Complete calculator output professionally formatted lines me screen par render hota hai.',
        speechEnglish: 'The entire calculator suite prints formatted results to the console.',
        cardExplanationHinglish: 'Complete suite printed.',
        cardExplanationEnglish: 'Complete suite printed.',
        visualTarget: 'output',
        visualLabel: 'Output',
        visualSublabel: 'Full Calculator',
        consoleOutput: '===== ARITHMETIC CALCULATOR =====\nSum: 13\nDifference: 7\nProduct: 30\nQuotient: 3.3333333333333335\nFloor Quotient: 3\nRemainder: 1\nPower: 1000',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Inputs Hint',
        badge: 'Hint 1',
        hintHinglish: 'a aur b ko int(input()) se user se input lijiye.',
        hintEnglish: 'Take numbers a and b with int(input()).'
      },
      {
        level: 2,
        name: 'Header Hint',
        badge: 'Hint 2',
        hintHinglish: 'Header print("===== ARITHMETIC CALCULATOR =====") print karein.',
        hintEnglish: 'Print the header ===== ARITHMETIC CALCULATOR =====.'
      },
      {
        level: 3,
        name: 'Operations Hint',
        badge: 'Hint 3',
        hintHinglish: 'Sum, Difference, Product, Quotient, Floor Quotient, Remainder, aur Power calculate karke print karein.',
        hintEnglish: 'Compute and print Sum, Difference, Product, Quotient, Floor Quotient, Remainder, and Power.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasHeader = stdout.includes('===== ARITHMETIC CALCULATOR =====');
      const hasSum = stdout.includes('Sum: 13') || stdout.includes('13');
      const hasPower = stdout.includes('Power: 1000') || stdout.includes('1000');
      const passed = hasHeader && hasSum && hasPower;
      return {
        passed,
        message: passed ? '🎉 Congratulations! You created a full-featured Interactive Arithmetic Calculator Mini Project!' : 'Input two numbers, print header, and output all 7 arithmetic operations.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];


// ═══════════════════════════════════════════════════════════════════════════
// TOPIC 01 (Module 01 Topic 01): Introduction to Python and Programming (6 Questions)
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// TOPIC OP 01 — Introduction to Operators and Expressions (6 Questions)
// ═══════════════════════════════════════════════════════════════════════════

export const TOPIC_OP_01_QUESTION_CONFIGS: QuestionV5Config[] = [
  // ── Q1: Meet Python Operators ──
  {
    number: 1,
    title: 'Meet Python Operators',
    problemStatement: 'Write a Python program that uses the + Operator to calculate and display the result of 10 + 5.',
    instructions: 'Write print(10 + 5) to calculate and display the result.',
    referenceCode: 'print(10 + 5)',
    starterCode: '# Use + operator to print 10 + 5\n',
    sampleInput: '',
    expectedOutput: '15',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'The print() Function',
        conceptKey: 'output',
        speechHinglish: 'Python mein print() ek built-in function hai jo screen ya console par values display karta hai.',
        speechEnglish: 'In Python, print() is a built-in function that displays values on the console.',
        cardExplanationHinglish: 'print() function output display karne ke liye ready hai.',
        cardExplanationEnglish: 'print() function is ready to display output.',
        visualTarget: 'output',
        visualLabel: 'print(...)',
        visualSublabel: 'Output Function',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Evaluate Expression 10 + 5',
        conceptKey: 'expression',
        speechHinglish: 'Yahan + Addition Operator hai jo do Operands 10 aur 5 ko add karke 15 calculate karta hai.',
        speechEnglish: 'Here + is the Addition Operator adding operands 10 and 5 to produce 15.',
        cardExplanationHinglish: 'Expression 10 + 5 evaluate hokar 15 ban gaya.',
        cardExplanationEnglish: 'Expression 10 + 5 evaluates to 15.',
        visualTarget: 'process',
        visualLabel: '10 + 5',
        visualSublabel: 'Addition -> 15',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Display Result in Console',
        conceptKey: 'output',
        speechHinglish: 'print() function calculated result 15 ko console par display kar deta hai.',
        speechEnglish: 'The print() function outputs the evaluated result 15 to the console.',
        cardExplanationHinglish: 'Console par 15 display ho gaya.',
        cardExplanationEnglish: '15 is displayed in console.',
        visualTarget: 'output',
        visualLabel: 'Console Output',
        visualSublabel: '15',
        consoleOutput: '15',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Operator Hint',
        badge: 'Hint 1',
        hintHinglish: 'Addition ke liye + Operator ka use karein.',
        hintEnglish: 'Use the Addition (+) Operator.'
      },
      {
        level: 2,
        name: 'Expression Hint',
        badge: 'Hint 2',
        hintHinglish: 'Expression ko print() ke andar likhiye: 10 + 5.',
        hintEnglish: 'Write the expression inside print(): 10 + 5.'
      },
      {
        level: 3,
        name: 'Code Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(10 + 5) likhkar Run Code dabayein.',
        hintEnglish: 'Write print(10 + 5) and click Run Code.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '15' && code.includes('+');
      return {
        passed,
        message: passed ? '🎉 Great! You learned the + Operator!' : 'Write print(10 + 5) to calculate and display the sum.'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q2: Understand Operators and Operands ──
  {
    number: 2,
    title: 'Understand Operators and Operands',
    problemStatement: 'Create two Variables containing 20 and 8. Subtract the second Number from the first and display the result.',
    instructions: 'Assign a = 20 and b = 8, then calculate and display print(a - b).',
    referenceCode: 'a = 20\nb = 8\n\nprint(a - b)',
    starterCode: '# Create a and b, then print a - b\n',
    sampleInput: '',
    expectedOutput: '12',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Variables as Operands',
        conceptKey: 'variable',
        speechHinglish: 'Variables a aur b memory me 20 aur 8 values store karte hain. Ye hamare Operands hain.',
        speechEnglish: 'Variables a and b store 20 and 8 in memory. These are our Operands.',
        cardExplanationHinglish: 'a = 20 aur b = 8 memory me allocate hue.',
        cardExplanationEnglish: 'Variables a = 20 and b = 8 allocated in memory.',
        visualTarget: 'vars',
        visualLabel: 'a=20, b=8',
        visualSublabel: 'Operands in Memory',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Subtraction Operation',
        conceptKey: 'expression',
        speechHinglish: '- Subtraction Operator hai. Python a ki value 20 me se b ki value 8 subtract karke 12 deta hai.',
        speechEnglish: '- is the Subtraction Operator. Python subtracts b (8) from a (20) to get 12.',
        cardExplanationHinglish: '20 - 8 subtract hokar 12 calculate hua.',
        cardExplanationEnglish: '20 - 8 evaluated to 12.',
        visualTarget: 'process',
        visualLabel: 'a - b',
        visualSublabel: '20 - 8 -> 12',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Display Result',
        conceptKey: 'output',
        speechHinglish: 'print(a - b) console par final difference 12 display karta hai.',
        speechEnglish: 'print(a - b) displays the final difference 12 on the console.',
        cardExplanationHinglish: 'Console par 12 print ho gaya.',
        cardExplanationEnglish: '12 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Console Output',
        visualSublabel: '12',
        consoleOutput: '12',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'Do variables banayein: a = 20 aur b = 8.',
        hintEnglish: 'Create two variables: a = 20 and b = 8.'
      },
      {
        level: 2,
        name: 'Operator Hint',
        badge: 'Hint 2',
        hintHinglish: 'Subtraction ke liye - Operator use karke a - b likhiye.',
        hintEnglish: 'Use the - Operator to write a - b.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(a - b) likhkar run karein.',
        hintEnglish: 'Write print(a - b) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '12' && code.includes('-') && (code.includes('a') || code.includes('b'));
      return {
        passed,
        message: passed ? '🎉 Excellent! You understood Operators and Operands!' : 'Create a = 20, b = 8, and print(a - b).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q3: What Is an Expression? ──
  {
    number: 3,
    title: 'What Is an Expression?',
    problemStatement: 'Create an Expression using Multiplication and Addition. Store the result in a Variable and print it.',
    instructions: 'Create result = 4 * 3 + 2, then display it with print(result).',
    referenceCode: 'result = 4 * 3 + 2\n\nprint(result)',
    starterCode: '# Create expression 4 * 3 + 2, store in result, and print\n',
    sampleInput: '',
    expectedOutput: '14',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Multiplication Precedence',
        conceptKey: 'expression',
        speechHinglish: 'Operator Precedence ke mutabiq Python pehle * calculate karta hai: 4 * 3 = 12.',
        speechEnglish: 'According to Operator Precedence, Python evaluates * first: 4 * 3 = 12.',
        cardExplanationHinglish: '4 * 3 evaluate hokar 12 bana.',
        cardExplanationEnglish: '4 * 3 evaluates to 12.',
        visualTarget: 'process',
        visualLabel: '4 * 3',
        visualSublabel: 'Multiplication -> 12',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Addition & Assignment',
        conceptKey: 'variable',
        speechHinglish: 'Phir Addition execute hota hai: 12 + 2 = 14. = Operator se 14 result variable me assign ho jata hai.',
        speechEnglish: 'Then Addition executes: 12 + 2 = 14. The = Operator assigns 14 into variable result.',
        cardExplanationHinglish: 'result = 14 memory me assign ho gaya.',
        cardExplanationEnglish: 'result = 14 assigned in memory.',
        visualTarget: 'vars',
        visualLabel: 'result = 14',
        visualSublabel: 'Final Evaluation',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Output Result',
        conceptKey: 'output',
        speechHinglish: 'print(result) evaluate hui value 14 ko console par print karta hai.',
        speechEnglish: 'print(result) outputs the evaluated value 14 to the console.',
        cardExplanationHinglish: 'Console par 14 print ho gaya.',
        cardExplanationEnglish: '14 printed to console.',
        visualTarget: 'output',
        visualLabel: 'Console Output',
        visualSublabel: '14',
        consoleOutput: '14',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Expression Hint',
        badge: 'Hint 1',
        hintHinglish: 'Multiplication (*) aur Addition (+) ka use karke 4 * 3 + 2 likhiye.',
        hintEnglish: 'Write 4 * 3 + 2 using * and +.'
      },
      {
        level: 2,
        name: 'Assignment Hint',
        badge: 'Hint 2',
        hintHinglish: 'Result ko variable me store karein: result = 4 * 3 + 2.',
        hintEnglish: 'Store in variable: result = 4 * 3 + 2.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(result) likhkar run karein.',
        hintEnglish: 'Write print(result) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '14' && code.includes('*') && code.includes('+');
      return {
        passed,
        message: passed ? '🎉 Wonderful! You mastered Python Expressions!' : 'Create result = 4 * 3 + 2 and print(result).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q4: Expressions with Variables ──
  {
    number: 4,
    title: 'Expressions with Variables',
    problemStatement: 'Create two Variables containing 6 and 4. Multiply them, add 5 and print the result.',
    instructions: 'Assign a = 6, b = 4, then calculate total = a * b + 5 and print(total).',
    referenceCode: 'a = 6\nb = 4\n\ntotal = a * b + 5\n\nprint(total)',
    starterCode: '# Multiply a and b, add 5, assign to total, and print\n',
    sampleInput: '',
    expectedOutput: '29',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Variables Initialization',
        conceptKey: 'variable',
        speechHinglish: 'a = 6 aur b = 4 variables memory me create hote hain.',
        speechEnglish: 'Variables a = 6 and b = 4 are stored in memory.',
        cardExplanationHinglish: 'a = 6 aur b = 4 memory me store hue.',
        cardExplanationEnglish: 'Variables a = 6 and b = 4 stored.',
        visualTarget: 'vars',
        visualLabel: 'a=6, b=4',
        visualSublabel: 'Operands in Memory',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Expression with Variables',
        conceptKey: 'expression',
        speechHinglish: 'Python a aur b ki values read karke 6 * 4 = 24 calculate karta hai, phir 5 add karke 29 banata hai.',
        speechEnglish: 'Python reads variables a and b, calculates 6 * 4 = 24, then adds 5 to get 29.',
        cardExplanationHinglish: 'total = 29 calculate hokar assign hua.',
        cardExplanationEnglish: 'total = 29 evaluated and assigned.',
        visualTarget: 'process',
        visualLabel: 'a * b + 5',
        visualSublabel: '6 * 4 + 5 -> 29',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Display Total',
        conceptKey: 'output',
        speechHinglish: 'print(total) calculated total 29 ko console par print karta hai.',
        speechEnglish: 'print(total) prints the calculated value 29 to the console.',
        cardExplanationHinglish: 'Console par 29 display ho gaya.',
        cardExplanationEnglish: '29 displayed in console.',
        visualTarget: 'output',
        visualLabel: 'Console Output',
        visualSublabel: '29',
        consoleOutput: '29',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Variables Hint',
        badge: 'Hint 1',
        hintHinglish: 'a = 6 aur b = 4 assign kijiye.',
        hintEnglish: 'Assign a = 6 and b = 4.'
      },
      {
        level: 2,
        name: 'Calculation Hint',
        badge: 'Hint 2',
        hintHinglish: 'total = a * b + 5 likhiye.',
        hintEnglish: 'Write total = a * b + 5.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(total) likhkar run karein.',
        hintEnglish: 'Write print(total) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const passed = stdout.trim() === '29' && code.includes('*') && code.includes('+');
      return {
        passed,
        message: passed ? '🎉 Great job! You combined variables with operators in an expression!' : 'Create a = 6, b = 4, total = a * b + 5, and print(total).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q5: Assignment vs Comparison ──
  {
    number: 5,
    title: 'Assignment vs Comparison',
    problemStatement: 'Create a Variable score containing 50. Use the Equality Operator to check whether its Value is equal to 50.',
    instructions: 'Assign score = 50, then display the comparison print(score == 50).',
    referenceCode: 'score = 50\n\nprint(score == 50)',
    starterCode: '# Assign 50 to score, then print(score == 50)\n',
    sampleInput: '',
    expectedOutput: 'True',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 3,
        title: 'Assignment Operator (=)',
        conceptKey: 'variable',
        speechHinglish: 'Single = Assignment Operator hai jo 50 ko variable score me assign karta hai.',
        speechEnglish: 'A single = is the Assignment Operator that assigns 50 into variable score.',
        cardExplanationHinglish: 'score = 50 memory me store hua.',
        cardExplanationEnglish: 'score = 50 assigned in memory.',
        visualTarget: 'vars',
        visualLabel: 'score = 50',
        visualSublabel: 'Assignment (=)',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 2,
        totalSteps: 3,
        title: 'Equality Comparison (==)',
        conceptKey: 'expression',
        speechHinglish: 'Double == Equality Operator hai jo compare karta hai ki score 50 ke barabar hai ya nahi. Result True milta hai.',
        speechEnglish: 'Double == is the Equality Operator checking if score equals 50, which evaluates to Boolean True.',
        cardExplanationHinglish: 'score == 50 compare hokar True mila.',
        cardExplanationEnglish: 'score == 50 evaluated to Boolean True.',
        visualTarget: 'process',
        visualLabel: 'score == 50',
        visualSublabel: 'Comparison -> True',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 3,
        title: 'Display Boolean Result',
        conceptKey: 'output',
        speechHinglish: 'print(score == 50) console par True print karta hai.',
        speechEnglish: 'print(score == 50) displays True on the console.',
        cardExplanationHinglish: 'Console par True print ho gaya.',
        cardExplanationEnglish: 'True printed to console.',
        visualTarget: 'output',
        visualLabel: 'Console Output',
        visualSublabel: 'True',
        consoleOutput: 'True',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Assignment Hint',
        badge: 'Hint 1',
        hintHinglish: 'score = 50 assign kijiye.',
        hintEnglish: 'Assign score = 50.'
      },
      {
        level: 2,
        name: 'Comparison Hint',
        badge: 'Hint 2',
        hintHinglish: 'Equality check ke liye double equals == use karein: score == 50.',
        hintEnglish: 'Use double equals == for equality check: score == 50.'
      },
      {
        level: 3,
        name: 'Print Hint',
        badge: 'Hint 3',
        hintHinglish: 'print(score == 50) likhkar run karein.',
        hintEnglish: 'Write print(score == 50) and run.'
      }
    ],
    validate: (code: string, stdout: string) => {
      const cleaned = code.replace(/\s+/g, '');
      const passed = stdout.trim() === 'True' && code.includes('==') && !cleaned.includes('print(True)');
      return {
        passed,
        message: passed ? '🎉 Perfect! You understand Assignment (=) vs Equality Comparison (==)!' : 'Create score = 50, then check equality using print(score == 50).'
      };
    },
    diagnose: diagnoseHelloWorldError
  },

  // ── Q6: Build Your First Expression Calculator ──
  {
    number: 6,
    title: 'Build Your First Expression Calculator',
    problemStatement: 'Create a small Expression Calculator. Ask the user to enter two whole Numbers. Calculate and display: Sum, Difference, Product.',
    instructions: 'Use int(input(...)) for a and b, calculate sum_result, difference, and product, then print all three.',
    referenceCode: 'a = int(input("Enter first number: "))\nb = int(input("Enter second number: "))\n\nsum_result = a + b\ndifference = a - b\nproduct = a * b\n\nprint("Sum:", sum_result)\nprint("Difference:", difference)\nprint("Product:", product)',
    starterCode: '# Build an Expression Calculator taking 2 integer inputs\n',
    sampleInput: '10\n4',
    expectedOutput: 'Enter first number: 10\nEnter second number: 4\nSum: 14\nDifference: 6\nProduct: 40',
    teachingSteps: [
      {
        step: 1,
        totalSteps: 5,
        title: 'Input & Type Conversion',
        conceptKey: 'input',
        speechHinglish: 'input() user se numbers string format me leta hai aur int() unhe integer me convert karta hai.',
        speechEnglish: 'input() receives user input as strings and int() converts them to integers.',
        cardExplanationHinglish: 'a = 10 aur b = 4 integers me convert hue.',
        cardExplanationEnglish: 'a = 10 and b = 4 converted to integers.',
        visualTarget: 'input',
        visualLabel: 'int(input())',
        visualSublabel: 'a=10, b=4',
        consoleOutput: 'Enter first number: 10\nEnter second number: 4',
        isConsoleVisible: true
      },
      {
        step: 2,
        totalSteps: 5,
        title: 'Calculate Sum (+)',
        conceptKey: 'expression',
        speechHinglish: 'a + b expression 10 aur 4 ko add karke 14 calculate karta hai.',
        speechEnglish: 'Expression a + b adds 10 and 4 to calculate 14.',
        cardExplanationHinglish: 'sum_result = a + b -> 14 calculated.',
        cardExplanationEnglish: 'sum_result = a + b -> 14 calculated.',
        visualTarget: 'process',
        visualLabel: 'a + b',
        visualSublabel: '10 + 4 = 14',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 3,
        totalSteps: 5,
        title: 'Calculate Difference (-)',
        conceptKey: 'expression',
        speechHinglish: 'a - b expression 10 me se 4 subtract karke difference 6 nikalta hai.',
        speechEnglish: 'Expression a - b subtracts 4 from 10 to yield difference 6.',
        cardExplanationHinglish: 'difference = a - b -> 6 calculated.',
        cardExplanationEnglish: 'difference = a - b -> 6 calculated.',
        visualTarget: 'process',
        visualLabel: 'a - b',
        visualSublabel: '10 - 4 = 6',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 4,
        totalSteps: 5,
        title: 'Calculate Product (*)',
        conceptKey: 'expression',
        speechHinglish: 'a * b expression 10 aur 4 ko multiply karke product 40 calculate karta hai.',
        speechEnglish: 'Expression a * b multiplies 10 and 4 to yield product 40.',
        cardExplanationHinglish: 'product = a * b -> 40 calculated.',
        cardExplanationEnglish: 'product = a * b -> 40 calculated.',
        visualTarget: 'process',
        visualLabel: 'a * b',
        visualSublabel: '10 * 4 = 40',
        consoleOutput: '',
        isConsoleVisible: false
      },
      {
        step: 5,
        totalSteps: 5,
        title: 'Display Calculator Results',
        conceptKey: 'output',
        speechHinglish: 'print() statements teeno calculated results Sum, Difference aur Product ko console par print karte hain.',
        speechEnglish: 'print() statements output Sum, Difference, and Product to the console.',
        cardExplanationHinglish: 'Sum: 14, Difference: 6, Product: 40 printed.',
        cardExplanationEnglish: 'Sum: 14, Difference: 6, Product: 40 printed.',
        visualTarget: 'output',
        visualLabel: 'Console Output',
        visualSublabel: 'Sum, Difference, Product',
        consoleOutput: 'Enter first number: 10\nEnter second number: 4\nSum: 14\nDifference: 6\nProduct: 40',
        isConsoleVisible: true
      }
    ],
    hints: [
      {
        level: 1,
        name: 'Input Hint',
        badge: 'Hint 1',
        hintHinglish: 'Do integer inputs lein: a = int(input(...)) aur b = int(input(...)).',
        hintEnglish: 'Take two integer inputs: a = int(input(...)) and b = int(input(...)).'
      },
      {
        level: 2,
        name: 'Formulas Hint',
        badge: 'Hint 2',
        hintHinglish: 'sum_result = a + b, difference = a - b, product = a * b calculate karein.',
        hintEnglish: 'Calculate sum_result = a + b, difference = a - b, product = a * b.'
      },
      {
        level: 3,
        name: 'Output Hint',
        badge: 'Hint 3',
        hintHinglish: 'print("Sum:", sum_result), print("Difference:", difference), print("Product:", product) likhkar run karein.',
        hintEnglish: 'Print results: print("Sum:", sum_result), print("Difference:", difference), print("Product:", product).'
      }
    ],
    validate: (code: string, stdout: string) => {
      const hasSum = stdout.includes('14') || stdout.includes('Sum');
      const hasDiff = stdout.includes('6') || stdout.includes('Difference');
      const hasProd = stdout.includes('40') || stdout.includes('Product');
      const hasOps = code.includes('+') && code.includes('-') && code.includes('*');
      const passed = hasSum && hasDiff && hasProd && hasOps;
      return {
        passed,
        message: passed ? '🎉 Fantastic! You built a complete Expression Calculator!' : 'Take two inputs with int(input()), compute sum (+), difference (-), and product (*), and print all three.'
      };
    },
    diagnose: diagnoseHelloWorldError
  }
];

export function convertTopicQuestionsToV5Configs(topicId: string, questions: TopicQuestion[]): QuestionV5Config[] {
  return questions.map((q) => {
    const rawTitle = q.question.split('.')[0].replace(/^Write a (Python )?program (that )?/i, '').replace(/^Create (a )?/i, '').trim();
    const cleanTitle = rawTitle.length > 0 ? (rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1)) : `Challenge ${q.number}`;
    const codeLines = q.referenceCode.split('\n').filter(l => l.trim().length > 0);
    const cleanOutput = q.sampleOutput.split('\n')[0] || 'Result';

    // Concept detection from topicId, question, and referenceCode
    const ref = q.referenceCode;
    const isLoop = ref.includes('for ') || ref.includes('while ') || topicId.includes('loops');
    const isConditional = ref.includes('if ') || ref.includes('elif ') || ref.includes('else:') || topicId.includes('conditionals');
    const isOOP = ref.includes('class ') || topicId.includes('oops') || topicId.includes('oop');
    const isFunction = ref.includes('def ') || topicId.includes('functions') || topicId.includes('func');
    const isList = topicId.includes('list') || ref.includes(' = [') || ref.includes('.append(') || ref.includes('.pop(');
    const isDict = topicId.includes('dict') || (ref.includes(' = {') && ref.includes(':'));
    const isSet = topicId.includes('set') || (ref.includes(' = {') && !ref.includes(':'));
    const isException = ref.includes('try:') || ref.includes('except') || topicId.includes('exception');
    const isSlice = ref.includes('[') && ref.includes(':');
    const isIndex = ref.includes('[') && !isSlice;
    const isStringMethod = ['.upper()', '.lower()', '.title()', '.capitalize()', '.strip()', '.replace(', '.find(', '.count(', '.split(', '.join('].some(m => ref.includes(m));
    const isOperator = [' + ', ' - ', ' * ', ' / ', ' // ', ' % ', ' ** ', ' > ', ' < ', ' == ', ' != ', ' >= ', ' <= '].some(op => ref.includes(op)) || topicId.includes('operators');
    const hasInput = ref.includes('input(');

    const steps: TeachingStep[] = [];

    if (isLoop) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Loop Setup & Sequence',
        conceptKey: 'loop_init',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Yahan Python sequence ke upar repeat karne ke liye loop initialize karta hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python initializes the loop sequence for repeated execution.`,
        cardExplanationHinglish: `Loop repeated operations perform karne ke liye use hota hai. Yahan iteration sequence prepare ho rahi hai.`,
        cardExplanationEnglish: `Loops perform repeated actions. Python sets up the iteration sequence.`,
        visualTarget: 'loop_header',
        visualLabel: 'Loop Setup',
        visualSublabel: 'for / while',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Loop Header', sublabel: 'Sequence / Range', isActive: true },
          { label: 'Loop Var', sublabel: 'Current Item', isActive: false },
          { label: 'Body', sublabel: 'Repeated Code', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Iteration & Loop Body',
        conceptKey: 'loop_iter',
        speechHinglish: `Har iteration mein loop variable update hota hai aur body ka code block repeatedly execute hota hai.`,
        speechEnglish: `In each iteration, the loop variable updates and executes the indented loop body.`,
        cardExplanationHinglish: `Sequence ke har item ke liye block execute hota hai jab tak loop condition satisfy hoti hai.`,
        cardExplanationEnglish: `The code block runs repeatedly for each element in the sequence.`,
        visualTarget: 'loop_body',
        visualLabel: 'Iteration Flow',
        visualSublabel: 'Updating State',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Sequence', sublabel: 'Iterables', isActive: false },
          { label: 'Loop Body', sublabel: 'Indented Code', isActive: true },
          { label: 'Next Step', sublabel: 'Auto Increment', isActive: true }
        ]
      });
    } else if (isConditional) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Decision Making Setup',
        conceptKey: 'condition_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python decision lene ke liye values aur condition prepare karta hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python prepares values and sets up the decision condition.`,
        cardExplanationHinglish: `Condition check karne se pehle variables memory mein allocate ya input se receive hote hain.`,
        cardExplanationEnglish: `Variables are initialized before conditional evaluation takes place.`,
        visualTarget: 'cond_setup',
        visualLabel: 'if Setup',
        visualSublabel: 'Decision Prep',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Variable', sublabel: 'Input Data', isActive: true },
          { label: 'if Condition', sublabel: 'Comparison Test', isActive: false },
          { label: 'Branch', sublabel: 'Target Block', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Condition Evaluation',
        conceptKey: 'condition_eval',
        speechHinglish: `Python condition evaluate karta hai. Agar condition True aati hai, to indented code block run hota hai.`,
        speechEnglish: `Python evaluates the condition. If True, the indented code block executes.`,
        cardExplanationHinglish: `Comparison operator Boolean (True/False) result deta hai, jisse program ka flow decide hota hai.`,
        cardExplanationEnglish: `The comparison operator yields a boolean decision that routes execution.`,
        visualTarget: 'cond_eval',
        visualLabel: 'Boolean Test',
        visualSublabel: 'True / False',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Condition', sublabel: 'Boolean Test', isActive: true },
          { label: 'True Branch', sublabel: 'Execute Code', isActive: true },
          { label: 'Decision', sublabel: 'Flow Control', isActive: true }
        ]
      });
    } else if (isSlice) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'String Slicing Setup',
        conceptKey: 'string_slice',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python string slicing syntax [start:stop:step] ke mutabiq characters extract karega.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python slices characters using [start:stop:step] rules.`,
        cardExplanationHinglish: `Slicing se hum kisi bhi string ka specific portion extract kar sakte hain bina original string ko mutate kiye.`,
        cardExplanationEnglish: `Slicing allows extracting sub-strings without modifying original memory.`,
        visualTarget: 'slice_setup',
        visualLabel: 'String Slicing',
        visualSublabel: '[start:stop:step]',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Original String', sublabel: 'Base Text', isActive: true },
          { label: 'Slice [ : ]', sublabel: 'Index Boundaries', isActive: false },
          { label: 'Sub-string', sublabel: 'Extracted Text', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Character Extraction',
        conceptKey: 'string_extract',
        speechHinglish: `Python start index se lekar stop index se ek pehle tak ke characters ko step size ke mutabiq extract karta hai.`,
        speechEnglish: `Python extracts characters from start index up to stop index minus one using the step value.`,
        cardExplanationHinglish: `Extracted characters naya string banate hain, jabki base string safe aur unchanged rehti hai.`,
        cardExplanationEnglish: `A new sliced string is returned while the original remains immutable.`,
        visualTarget: 'slice_extract',
        visualLabel: 'Slice Extraction',
        visualSublabel: 'Characters Selected',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Start & Stop', sublabel: 'Index Range', isActive: true },
          { label: 'Extracted Part', sublabel: 'New Substring', isActive: true },
          { label: 'Immutable', sublabel: 'Original Safe', isActive: true }
        ]
      });
    } else if (isIndex) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Character Indexing Setup',
        conceptKey: 'string_index',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python 0-based index ke zariye individual character access karega.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python accesses individual characters using zero-based indexing.`,
        cardExplanationHinglish: `Python strings indexed hoti hain. Pehla character index 0 par aur aakhri character index -1 par hota hai.`,
        cardExplanationEnglish: `Python strings are indexed starting at 0 for the first and -1 for the last character.`,
        visualTarget: 'index_setup',
        visualLabel: 'Index Setup',
        visualSublabel: 'string[i]',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'String', sublabel: 'Indexed Array', isActive: true },
          { label: 'Index [ i ]', sublabel: 'Position Target', isActive: false },
          { label: 'Character', sublabel: 'Single Char', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Direct Character Access',
        conceptKey: 'char_access',
        speechHinglish: `Python exact index position se single character fetch karta hai. Negative index string ke end se count karta hai.`,
        speechEnglish: `Python accesses the target character directly from memory using the index offset.`,
        cardExplanationHinglish: `Index position se character retrieve ho gaya. Negative indices right-to-left access karte hain.`,
        cardExplanationEnglish: `Target character fetched from string sequence. Negative indices count from right.`,
        visualTarget: 'index_access',
        visualLabel: 'Character Fetch',
        visualSublabel: 'Index Evaluated',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Index Num', sublabel: 'Memory Offset', isActive: true },
          { label: 'Target Char', sublabel: 'Selected Character', isActive: true },
          { label: 'Access Done', sublabel: 'Fetched Result', isActive: true }
        ]
      });
    } else if (isStringMethod) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'String Method Setup',
        conceptKey: 'method_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python string method call karke text data ko process karega.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python applies a built-in string method to process text.`,
        cardExplanationHinglish: `Python string methods text manipulation ke liye use hote hain, jaise case conversion, trimming, ya searching.`,
        cardExplanationEnglish: `String methods perform text manipulation like case conversion, stripping, or searching.`,
        visualTarget: 'method_setup',
        visualLabel: 'String Method',
        visualSublabel: '.method()',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Original Text', sublabel: 'Input String', isActive: true },
          { label: 'Method Call', sublabel: 'Builtin Function', isActive: false },
          { label: 'Processed', sublabel: 'Transformed Text', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Method Transformation',
        conceptKey: 'method_exec',
        speechHinglish: `Method execute hokar transformed string return karta hai, jabki original string memory mein safe aur unchanged rehti hai.`,
        speechEnglish: `The method executes and returns a transformed string without mutating the original string in place.`,
        cardExplanationHinglish: `Method ne operation successfully execute kiya aur updated result return kiya.`,
        cardExplanationEnglish: `Method processed text and returned transformed output.`,
        visualTarget: 'method_exec',
        visualLabel: 'Transformation',
        visualSublabel: 'Method Returned',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Method Exec', sublabel: 'Processing Logic', isActive: true },
          { label: 'Transformed', sublabel: 'Resulting String', isActive: true },
          { label: 'Immutable', sublabel: 'Safe Original', isActive: true }
        ]
      });
    } else if (isOperator) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Operands & Expression Setup',
        conceptKey: 'operator_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python operands aur operator ko evaluate karne ke liye tayar karta hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python prepares operands and operator for evaluation.`,
        cardExplanationHinglish: `Operator do ya zyada values (operands) ke beech arithmetic ya logical calculation perform karta hai.`,
        cardExplanationEnglish: `Operators perform arithmetic or logical computation between operand values.`,
        visualTarget: 'op_setup',
        visualLabel: 'Operands',
        visualSublabel: 'Input Values',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Operands', sublabel: 'Input Values', isActive: true },
          { label: 'Operator', sublabel: 'Calculation Symbol', isActive: false },
          { label: 'Expression', sublabel: 'Full Formula', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Expression Evaluation',
        conceptKey: 'operator_eval',
        speechHinglish: `CPU operator rules aur precedence ke mutabiq expression calculate karta hai aur result nikalta hai.`,
        speechEnglish: `The CPU computes the mathematical expression according to operator precedence.`,
        cardExplanationHinglish: `Operators evaluate hokar final calculated result tayar hua.`,
        cardExplanationEnglish: `Calculation completed yielding evaluated result.`,
        visualTarget: 'op_eval',
        visualLabel: 'Calculation',
        visualSublabel: 'Evaluated Result',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Evaluation', sublabel: 'CPU Execution', isActive: true },
          { label: 'Result', sublabel: 'Calculated Value', isActive: true },
          { label: 'Type', sublabel: 'Numeric / Boolean', isActive: true }
        ]
      });
    } else if (hasInput) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'User Input & Variable Setup',
        conceptKey: 'input_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Program user se input value receive karke variable mein save karta hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". The program receives input values from the user and stores them in memory.`,
        cardExplanationHinglish: `input() function keyboard se text read karta hai aur variable allocate hota hai.`,
        cardExplanationEnglish: `input() reads user text into memory variables.`,
        visualTarget: 'input_setup',
        visualLabel: 'input()',
        visualSublabel: q.sampleInput.replace(/\n/g, ', ') || 'User Input',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'User Input', sublabel: 'Keyboard Entry', isActive: true },
          { label: 'input()', sublabel: 'Capture Function', isActive: false },
          { label: 'Variable', sublabel: 'Stored Memory', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Data Processing',
        conceptKey: 'input_process',
        speechHinglish: `Input value ko memory mein process karke program aage ki instructions execute karta hai.`,
        speechEnglish: `The captured input is processed in memory for further program operations.`,
        cardExplanationHinglish: `Variable memory mein update hua aur next instruction ke liye ready hai.`,
        cardExplanationEnglish: `Variable state ready for output or computation.`,
        visualTarget: 'input_process',
        visualLabel: 'Memory State',
        visualSublabel: 'Ready for Output',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Memory Slot', sublabel: 'Allocated Value', isActive: true },
          { label: 'Type Cast', sublabel: 'Data Conversion', isActive: true },
          { label: 'Ready', sublabel: 'State Validated', isActive: true }
        ]
      });
    } else if (isOOP) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Class Blueprint & Setup',
        conceptKey: 'class_blueprint',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Yahan hum Class define kar rahe hain, jo objects create karne ka blueprint hoti hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". We define a Class which serves as a blueprint for creating objects.`,
        cardExplanationHinglish: `Class real-world entities ko represent karne ke liye data attributes aur methods ko encapsulate karti hai.`,
        cardExplanationEnglish: `Classes bundle data attributes and methods representing real-world entities.`,
        visualTarget: 'class_blueprint',
        visualLabel: 'Class Blueprint',
        visualSublabel: 'Template & Methods',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Class', sublabel: 'Blueprint Template', isActive: true },
          { label: '__init__', sublabel: 'Constructor', isActive: false },
          { label: 'Attributes', sublabel: 'Object State', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Object Instantiation & State',
        conceptKey: 'object_instance',
        speechHinglish: `Class se naya Object create hota hai aur memory mein uske unique attributes assign hote hain.`,
        speechEnglish: `An Object instance is created from the Class blueprint with allocated memory for its attributes.`,
        cardExplanationHinglish: `Object instance create hokar constructor ke through uski initial values set hoti hain.`,
        cardExplanationEnglish: `Object initialized in heap memory with state variables accessible via dot notation.`,
        visualTarget: 'object_instance',
        visualLabel: 'Object Instance',
        visualSublabel: 'Heap Memory Allocation',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(3, codeLines.length),
        conceptBoxes: [
          { label: 'Object', sublabel: 'Instance in Memory', isActive: true },
          { label: 'self.attr', sublabel: 'Bound Attribute', isActive: true },
          { label: 'Methods', sublabel: 'Executable Logic', isActive: true }
        ]
      });
    } else if (isFunction) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Function Definition & Scope',
        conceptKey: 'func_def',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. def keyword se reusable function create hota hai jo specific task perform karta hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". The def keyword defines a reusable function for a specific task.`,
        cardExplanationHinglish: `Function define karne se code modular banta hai aur hum use multiple times call kar sakte hain.`,
        cardExplanationEnglish: `Functions create modular, reusable blocks of logic with their own local scope.`,
        visualTarget: 'func_header',
        visualLabel: 'def Function',
        visualSublabel: 'Parameters & Scope',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'def Name', sublabel: 'Function Header', isActive: true },
          { label: 'Parameters', sublabel: 'Input Variables', isActive: false },
          { label: 'Local Scope', sublabel: 'Body Block', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Function Call & Return',
        conceptKey: 'func_exec',
        speechHinglish: `Function ko arguments ke sath call karne par CPU body execute karta hai aur calculated result return karta hai.`,
        speechEnglish: `Calling the function passes arguments, executes the body on the call stack, and returns the result.`,
        cardExplanationHinglish: `Call stack par function frame allocate hua, instructions run hui aur return value produce hui.`,
        cardExplanationEnglish: `Call stack frame executed instruction and resolved the return expression.`,
        visualTarget: 'func_call',
        visualLabel: 'Call Stack',
        visualSublabel: 'Active Execution',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(3, codeLines.length),
        conceptBoxes: [
          { label: 'Call Stack', sublabel: 'Active Frame', isActive: true },
          { label: 'Arguments', sublabel: 'Passed Values', isActive: true },
          { label: 'return', sublabel: 'Output Value', isActive: true }
        ]
      });
    } else if (isList) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'List Collection Setup',
        conceptKey: 'list_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python mein square brackets [] ka use karke multiple items ko ordered List mein store karte hain.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Square brackets [] create an ordered, mutable sequence of items.`,
        cardExplanationHinglish: `List ek mutable collection hai jisme items sequential order mein store hote hain.`,
        cardExplanationEnglish: `A List is a mutable ordered collection allowing indexed access and modifications.`,
        visualTarget: 'list_init',
        visualLabel: 'List [ ... ]',
        visualSublabel: 'Ordered Elements',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'List []', sublabel: 'Array Collection', isActive: true },
          { label: 'Elements', sublabel: 'Ordered Items', isActive: false },
          { label: 'Mutable', sublabel: 'Dynamic Sizing', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'List Operations & Mutation',
        conceptKey: 'list_ops',
        speechHinglish: `List ke elements index se access hote hain ya built-in methods se dynamically modify hote hain.`,
        speechEnglish: `List items are accessed via index offsets or updated dynamically using methods.`,
        cardExplanationHinglish: `Memory array update hua aur new elements ya modified states preserve ho gayi.`,
        cardExplanationEnglish: `Underlying list array updated with modified element values.`,
        visualTarget: 'list_ops',
        visualLabel: 'List Operation',
        visualSublabel: 'Element Modification',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Index Access', sublabel: 'Offset Lookup', isActive: true },
          { label: 'Operation', sublabel: 'Method / Assign', isActive: true },
          { label: 'Updated State', sublabel: 'Preserved Array', isActive: true }
        ]
      });
    } else if (isDict) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Dictionary Key-Value Mapping',
        conceptKey: 'dict_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python Dictionary curly braces {} mein key-value pairs ke form mein data store karti hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Dictionaries store data as key-value pairs inside curly braces {}.`,
        cardExplanationHinglish: `Dictionary hash map structure use karti hai jisse fast key-based lookups possible hote hain.`,
        cardExplanationEnglish: `Dictionaries use a hash table for fast associative key-value lookups.`,
        visualTarget: 'dict_init',
        visualLabel: 'dict { key: val }',
        visualSublabel: 'Key-Value Mapping',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'dict {}', sublabel: 'Hash Map', isActive: true },
          { label: 'Key (Unique)', sublabel: 'Lookup Hash', isActive: false },
          { label: 'Value', sublabel: 'Stored Record', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Key Lookup & Storage',
        conceptKey: 'dict_lookup',
        speechHinglish: `Key ke zariye direct O(1) time mein value access ya update hoti hai.`,
        speechEnglish: `Keys provide O(1) constant-time direct access to retrieve or modify stored values.`,
        cardExplanationHinglish: `Hash key evaluate hokar associated value retrieve ya update ho gayi.`,
        cardExplanationEnglish: `Evaluated key hash directly fetches the target value.`,
        visualTarget: 'dict_lookup',
        visualLabel: 'Key Access',
        visualSublabel: 'Direct Lookup',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Target Key', sublabel: 'Indexed Hash', isActive: true },
          { label: 'Matched Value', sublabel: 'Retrieved Record', isActive: true },
          { label: 'Fast Access', sublabel: 'O(1) Efficiency', isActive: true }
        ]
      });
    } else if (isSet) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Set Unique Collection',
        conceptKey: 'set_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python Set curly braces {} ka use karke unique, unordered elements ka collection banata hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Sets store an unordered collection of unique elements in {}.`,
        cardExplanationHinglish: `Set collection automatic duplicate values ko eliminate kar deta hai.`,
        cardExplanationEnglish: `Sets automatically deduplicate entries and allow fast membership checks.`,
        visualTarget: 'set_init',
        visualLabel: 'set { ... }',
        visualSublabel: 'Unique Elements',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'set {}', sublabel: 'Hash Collection', isActive: true },
          { label: 'Unique Items', sublabel: 'No Duplicates', isActive: false },
          { label: 'Unordered', sublabel: 'Fast Lookup', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Set Deduplication & Operations',
        conceptKey: 'set_ops',
        speechHinglish: `Set duplicate items remove karke mathematical operations jaise union aur intersection perform karta hai.`,
        speechEnglish: `Sets eliminate duplicates and support mathematical set operations like union and intersection.`,
        cardExplanationHinglish: `Set operations hash table ke through ultra-fast membership test provide karte hain.`,
        cardExplanationEnglish: `Set operations complete with constant-time membership validation.`,
        visualTarget: 'set_ops',
        visualLabel: 'Set Deduplication',
        visualSublabel: 'Filtered Items',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Deduplicated', sublabel: 'Unique Elements', isActive: true },
          { label: 'Membership in', sublabel: 'Fast Check', isActive: true },
          { label: 'Set Math', sublabel: 'Union / Intersect', isActive: true }
        ]
      });
    } else if (isException) {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Try Block & Crash Guard',
        conceptKey: 'try_block',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. try block un statements ko wrap karta hai jahan runtime error aane ka chance hota hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". The try block guards code statements against unexpected runtime errors.`,
        cardExplanationHinglish: `try block risky code ko safe execution boundary ke andar run karta hai.`,
        cardExplanationEnglish: `The try block isolates operations that could raise runtime exceptions.`,
        visualTarget: 'try_block',
        visualLabel: 'try Block',
        visualSublabel: 'Guarded Code',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'try Block', sublabel: 'Guarded Execution', isActive: true },
          { label: 'Runtime Test', sublabel: 'Active Instruction', isActive: false },
          { label: 'Error Intercept', sublabel: 'Safety Net', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Except Block & Error Recovery',
        conceptKey: 'except_block',
        speechHinglish: `Error aane par program crash hone ki bajay except block execute hota hai aur recovery code chalta hai.`,
        speechEnglish: `When an error occurs, the except block intercepts it gracefully, preventing program crashes.`,
        cardExplanationHinglish: `Program ne exception catch kiya aur graceful recovery message display kiya.`,
        cardExplanationEnglish: `Exception intercepted cleanly; application flow continues without crashing.`,
        visualTarget: 'except_block',
        visualLabel: 'except Handler',
        visualSublabel: 'Error Caught Cleanly',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'except Block', sublabel: 'Recovery Logic', isActive: true },
          { label: 'Crash Prevented', sublabel: 'Safe Handling', isActive: true },
          { label: 'User Feedback', sublabel: 'Clean Message', isActive: true }
        ]
      });
    } else {
      steps.push({
        step: 1,
        totalSteps: 3,
        title: 'Program Setup & Instruction',
        conceptKey: 'program_setup',
        speechHinglish: `Is Question mein hum "${cleanTitle}" seekhenge. Python program values aur instructions ko memory mein load karta hai.`,
        speechEnglish: `In this question we learn "${cleanTitle}". Python initializes the code statements in memory.`,
        cardExplanationHinglish: `Program statements memory mein load hokar sequential execution ke liye ready hoti hain.`,
        cardExplanationEnglish: `Program instructions loaded for sequential execution.`,
        visualTarget: 'prog_setup',
        visualLabel: 'Program Init',
        visualSublabel: 'Ready to Run',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: 1,
        conceptBoxes: [
          { label: 'Source Code', sublabel: 'Instruction', isActive: true },
          { label: 'Memory', sublabel: 'Execution State', isActive: false },
          { label: 'Console', sublabel: 'Output Screen', isActive: false }
        ]
      });
      steps.push({
        step: 2,
        totalSteps: 3,
        title: 'Execution & Processing',
        conceptKey: 'program_exec',
        speechHinglish: `Python interpreter step-by-step statements ko parse aur execute karta hai.`,
        speechEnglish: `Python interpreter parses and executes the statement step-by-step.`,
        cardExplanationHinglish: `Statement execute hokar terminal output generate karne ke liye tayar hoti hai.`,
        cardExplanationEnglish: `Instruction executed successfully, ready for console output.`,
        visualTarget: 'prog_exec',
        visualLabel: 'Execution',
        visualSublabel: 'Interpreting Code',
        consoleOutput: '',
        isConsoleVisible: false,
        highlightLine: Math.min(2, codeLines.length),
        conceptBoxes: [
          { label: 'Interpreter', sublabel: 'Active Run', isActive: true },
          { label: 'State', sublabel: 'Evaluated', isActive: true },
          { label: 'Next Action', sublabel: 'Console Write', isActive: true }
        ]
      });
    }

    // Final Step: Console Output
    steps.push({
      step: steps.length + 1,
      totalSteps: steps.length + 1,
      title: 'Console Output',
      conceptKey: 'output',
      speechHinglish: `Aakhir mein calculated result console terminal par display ho jata hai: ${cleanOutput}. Ab aap khud coding practice mein code likhkar try karein.`,
      speechEnglish: `Finally, the evaluated result is displayed on the console terminal: ${cleanOutput}. Now practice writing the code yourself.`,
      cardExplanationHinglish: `Console terminal par result successfully print ho gaya. Code complete hua.`,
      cardExplanationEnglish: `Output successfully printed to the console. Execution complete.`,
      visualTarget: 'output',
      visualLabel: 'Console Output',
      visualSublabel: cleanOutput,
      consoleOutput: q.sampleOutput,
      isConsoleVisible: true,
      highlightLine: codeLines.length,
      conceptBoxes: [
        { label: 'print()', sublabel: 'Output Function', isActive: true },
        { label: cleanOutput.slice(0, 12), sublabel: 'Console Display', isActive: true },
        { label: 'Completed', sublabel: 'Execution Done', isActive: true }
      ]
    });

    // Sync totalSteps across all generated steps
    steps.forEach(s => s.totalSteps = steps.length);

    const hints: ProgressiveHint[] = [
      {
        level: 1,
        name: 'Concept Hint',
        badge: 'Hint 1',
        hintHinglish: q.hindiDescription,
        hintEnglish: q.question
      },
      {
        level: 2,
        name: 'Syntax Hint',
        badge: 'Hint 2',
        hintHinglish: `Sahi Python syntax use karke calculation karein: ${q.starterCode.replace(/#.*\n?/, '').trim() || 'core concepts ka use karein.'}`,
        hintEnglish: `Apply the proper syntax: ${q.referenceCode.split('\n')[0]}`
      },
      {
        level: 3,
        name: 'Execution Hint',
        badge: 'Hint 3',
        hintHinglish: `Reference code: ${q.referenceCode.replace(/\n/g, '; ')}`,
        hintEnglish: `Reference solution: ${q.referenceCode.replace(/\n/g, '; ')}`
      }
    ];

    return {
      number: q.number,
      title: cleanTitle,
      problemStatement: q.question,
      instructions: q.hindiDescription,
      referenceCode: q.referenceCode,
      starterCode: q.starterCode,
      sampleInput: q.sampleInput,
      expectedOutput: q.sampleOutput,
      teachingSteps: steps,
      hints,
      validate: (code: string, stdout: string) => {
        const trimmedOut = stdout.trim();
        const expected = q.sampleOutput.trim();
        let passed = false;
        if (expected.length === 0) {
          passed = true;
        } else if (trimmedOut === expected) {
          passed = true;
        } else {
          const outLines = trimmedOut.split('\n').map(l => l.trim()).filter(Boolean);
          const expLines = expected.split('\n').map(l => l.trim()).filter(Boolean);
          if (outLines.length === expLines.length && expLines.every((el, idx) => outLines[idx] === el || outLines[idx].includes(el))) {
            passed = true;
          }
        }
        return {
          passed,
          message: passed ? '🎉 Excellent! Challenge passed successfully!' : `Expected output:\n${expected}\nYour output:\n${trimmedOut}`
        };
      },
      diagnose: diagnoseHelloWorldError
    };
  });
}

export function getTopicQuestionConfigs(topicId: string): QuestionV5Config[] {
  if (MODULE_10_TOPIC_QUESTIONS[topicId]) {
    return MODULE_10_TOPIC_QUESTIONS[topicId].map((q) => buildOOPQuestionConfig(topicId, q));
  }
  if (MODULE_09_TOPIC_QUESTIONS[topicId]) {
    return MODULE_09_TOPIC_QUESTIONS[topicId].map((q) => buildProblemSolvingQuestionConfig(topicId, q));
  }
  if (MODULE_08_TOPIC_QUESTIONS[topicId]) {
    return convertTopicQuestionsToV5Configs(topicId, MODULE_08_TOPIC_QUESTIONS[topicId]);
  }
  if (MODULE_07_TOPIC_QUESTIONS[topicId]) {
    return MODULE_07_TOPIC_QUESTIONS[topicId].map((q) => buildSetsDictsQuestionConfig(topicId, q));
  }
  if (MODULE_06_TOPIC_QUESTIONS[topicId]) {
    return MODULE_06_TOPIC_QUESTIONS[topicId].map((q) => buildListsTuplesQuestionConfig(topicId, q));
  }
  if (MODULE_05_TOPIC_QUESTIONS[topicId]) {
    return MODULE_05_TOPIC_QUESTIONS[topicId].map((q) => buildStringsQuestionConfig(topicId, q));
  }
  if (MODULE_04_TOPIC_QUESTIONS[topicId]) {
    return convertTopicQuestionsToV5Configs(topicId, MODULE_04_TOPIC_QUESTIONS[topicId]);
  }
  if (MODULE_03_TOPIC_QUESTIONS[topicId]) {
    return MODULE_03_TOPIC_QUESTIONS[topicId].map((q) => buildConditionalsQuestionConfig(topicId, q));
  }
  if (MODULE_02_TOPIC_QUESTIONS[topicId]) {
    return MODULE_02_TOPIC_QUESTIONS[topicId].map((q, idx) =>
      buildOperatorsQuestionConfig(
        topicId,
        q,
        topicId === 'py_02_operators_01' && TOPIC_OP_01_QUESTION_CONFIGS[idx]
          ? (code: string, stdout: string) => {
              const stdCheck = TOPIC_OP_01_QUESTION_CONFIGS[idx].validate(code, stdout);
              if (stdCheck.passed) return stdCheck;
              const trimmedOut = stdout.trim();
              const expected = q.sampleOutput.trim();
              if (trimmedOut === expected && expected.length > 0) {
                return { passed: true, message: '🎉 Excellent! Challenge passed successfully!' };
              }
              return stdCheck;
            }
          : undefined
      )
    );
  }
  if (topicId === 'py_01_basics_17') {
    return TOPIC_17_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_16') {
    return TOPIC_16_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_15') {
    return TOPIC_15_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_14') {
    return TOPIC_14_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_13') {
    return TOPIC_13_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_12') {
    return TOPIC_12_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_11') {
    return TOPIC_11_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_09') {
    return TOPIC_09_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_08') {
    return TOPIC_08_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_07') {
    return TOPIC_07_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_06') {
    return TOPIC_06_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_05') {
    return TOPIC_05_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_04') {
    return TOPIC_04_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_03') {
    return TOPIC_03_QUESTION_CONFIGS;
  }
  if (topicId === 'py_01_basics_02') {
    return TOPIC_02_QUESTION_CONFIGS;
  }
  return TOPIC_01_QUESTION_CONFIGS;
}

export function getQuestionConfig(qIndex: number, topicId: string = 'py_01_basics_01'): QuestionV5Config {
  const configs = getTopicQuestionConfigs(topicId);
  if (qIndex >= 0 && qIndex < configs.length) {
    return configs[qIndex];
  }
  return configs[0];
}


export const TEACHER_HELP_TOPICS: TeacherHelpTopic[] = [
  {
    id: 'what_is_print',
    questionHinglish: 'print kya hai?',
    questionEnglish: 'What is print?',
    answerHinglish:
      'print() Python ka built-in function hai. Iska kaam hota hai jo bhi message ya value aap brackets mein doge, use computer screen (terminal) par display kar dena.',
    answerEnglish:
      'print() is a built-in Python function. Its job is to display whatever data or message you supply inside its parentheses onto the computer screen.',
  },
  {
    id: 'what_are_brackets',
    questionHinglish: 'Brackets () kyun lagate hain?',
    questionEnglish: 'Why do we use brackets ()?',
    answerHinglish:
      'Python mein kisi bhi function ko call karne ke liye round brackets () lagana zaroori hai. Brackets ke bina function execute nahi hota. Jo data function ko dena ho, wo brackets ke andar rakha jata hai.',
    answerEnglish:
      'Parentheses () are required to invoke or call a function in Python. Any data (arguments) passed into the function must be placed between them.',
  },
  {
    id: 'what_is_string',
    questionHinglish: 'String kya hoti hai?',
    questionEnglish: 'What is a String?',
    answerHinglish:
      'String ka matlab hai textual data, yani aksharon aur shabdon ka sequence. Jaise "Hello", "Rahul" ya "Python 2050". Python mein string ko hamesha quotes ke andar rakha jata hai.',
    answerEnglish:
      'A String is a sequence of textual characters such as letters, numbers, or symbols. In Python, string literals are always wrapped in quotation marks.',
  },
  {
    id: 'why_double_quotes',
    questionHinglish: 'Double quotes kyun use karte hain?',
    questionEnglish: 'Why do we use double quotes?',
    answerHinglish:
      'Quotes Python ko batate hain ki andar likha text ek raw message hai, koi Python keyword ya variable nahi. Quotes nahi lagayenge toh Python unhe code ka hissa samajh kar error de dega.',
    answerEnglish:
      'Quotes instruct the Python interpreter to treat the content as literal text rather than variable names or syntax keywords.',
  },
  {
    id: 'what_is_console',
    questionHinglish: 'Console Output kya hota hai?',
    questionEnglish: 'What is Console Output?',
    answerHinglish:
      'Console ek text terminal window hoti hai jahan computer program apna result print karta hai. Jab aap print() chalate ho, toh result wahi Console window par dikhta hai.',
    answerEnglish:
      'The Console is a text terminal screen where running programs output their text stream and results for users and developers to read.',
  },
  {
    id: 'why_code_not_running',
    questionHinglish: 'Mera code kyun nahi chal raha?',
    questionEnglish: 'Why is my code not running?',
    answerHinglish:
      'Teen common galtiyan check karein: 1. print small letters mein ho. 2. Quotes open aur close dono hon. 3. Last mein closing bracket ) laga ho.',
    answerEnglish:
      'Check 3 common mistakes: 1. `print` must be in lowercase. 2. Opening and closing quotes must match. 3. Ensure the closing bracket `)` is present.',
  },
];