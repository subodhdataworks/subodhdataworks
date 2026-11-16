/**
 * FUTURE IT INDUSTRY — MASTER UNIVERSAL PYTHON VISUAL TEACHING ENGINE
 *
 * Production-quality, code-aware Python pedagogical compiler for ALL 27 topics and 270 challenges.
 * Follows the strict teaching sequence:
 * Question → Actual Solution → Code Concepts → Line-by-Line Explanation → Dynamic Visualization → Execution → Output → Recap
 */

import { getVerifiedSolutionForTask } from '../data/challengeSolutionsBank';
import { getCuratedTopic1Lesson } from '../data/curatedTopic1PrintingCurriculum';
import { getCuratedTopic2Lesson } from '../data/curatedTopic2VariablesCurriculum';
import { getCuratedTopic3Lesson } from '../data/curatedTopic3InputOutputCurriculum';
import { getCuratedTopic4Lesson } from '../data/curatedTopic4OperatorsCurriculum';
import {
  VisualHintAnimationPlan,
  QuestionInputRecord,
  FlowDiagramCard,
  LearningSceneSpec,
  TimelineExecutionEvent,
  ExecutionVariableSnapshot,
  ExecutionStackFrame,
  ExecutionListSnapshot,
} from './visualHintsEngineService';

// ─── 1. PROGRAM SEMANTICS DATA STRUCTURES ───

export interface ParsedStatement {
  lineNumber: number;
  raw: string;
  trimmed: string;
  kind:
    | 'import'
    | 'assignment'
    | 'condition_if'
    | 'condition_elif'
    | 'condition_else'
    | 'loop_for'
    | 'loop_while'
    | 'def_function'
    | 'return_statement'
    | 'print_call'
    | 'input_call'
    | 'try_block'
    | 'except_block'
    | 'with_file'
    | 'expression'
    | 'other';
  primaryToken: string;
  secondaryToken?: string;
  expressionText?: string;
  evaluatedValue?: string;
}

export type UniversalTopicConceptType =
  | 'hello_world'
  | 'variables_datatypes'
  | 'input_output'
  | 'arithmetic_operator'
  | 'division'
  | 'comparison_operators'
  | 'conditional_branch'
  | 'loop_iteration'
  | 'while_loop'
  | 'function_def'
  | 'string_index_slice'
  | 'lists'
  | 'tuples_and_sets'
  | 'dictionaries'
  | 'list_operations'
  | 'dictionary_operations'
  | 'string_manipulation'
  | 'list_comprehension'
  | 'lambda_map'
  | 'exception_handling'
  | 'file_handling'
  | 'sorting_searching'
  | 'recursion'
  | 'sorting_algorithms'
  | 'search_algorithms'
  | 'problem_solving_functions'
  | 'advanced_data_structures'
  | 'data_structure'
  | 'variable_store'
  | 'console_stream';

export interface ProgramSemanticsAnalysis {
  cleanCode: string;
  codeLines: string[];
  expectedOutput: string;
  statements: ParsedStatement[];
  detectedConcepts: string[];
  primaryConceptType: UniversalTopicConceptType;
  variables: ExecutionVariableSnapshot[];
  callStack: ExecutionStackFrame[];
  lists: ExecutionListSnapshot[];
  conditionInfo?: { expression: string; result: boolean; branchTaken: string };
  loopInfo?: { iterator: string; values: string[] };
  outputLines: string[];
}

// ─── 2. CODE NORMALIZER & ROBUST AST-LIKE PARSER ───

export function parseProgramSemantics(
  code: string,
  expectedOutput: string = '',
  sampleInput: string = '',
  topicId?: number
): ProgramSemanticsAnalysis {
  const cleanCode = (code || 'print("Hello, World!")').trim();
  const rawLines = cleanCode.split('\n');
  const codeLines = rawLines.map((l) => l.replace(/\r$/, ''));
  const cleanOutput = (expectedOutput || 'Hello, World!').trim();
  const outputLines = cleanOutput.split('\n').filter((l) => l.trim().length > 0);

  const statements: ParsedStatement[] = [];
  const detectedConcepts: string[] = [];
  const variables: ExecutionVariableSnapshot[] = [];
  const lists: ExecutionListSnapshot[] = [];
  const callStack: ExecutionStackFrame[] = [];

  let conditionInfo: { expression: string; result: boolean; branchTaken: string } | undefined;
  let loopInfo: { iterator: string; values: string[] } | undefined;

  let hasFunctionDef = false;
  let hasCondition = false;
  let hasLoop = false;
  let hasWhile = false;
  let hasArithmetic = false;
  let hasDivision = false;
  let hasComparison = false;
  let hasDataStructure = false;
  let hasVariable = false;
  let hasInput = false;
  let hasException = false;
  let hasFile = false;
  let hasStringOp = false;
  let hasRecursion = false;
  let hasLambda = false;
  let hasStack = false;

  codeLines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const lineNum = idx + 1;

    // A. Function Definition
    const defMatch = trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:/);
    if (defMatch) {
      hasFunctionDef = true;
      const fnName = defMatch[1];
      const fnArgs = defMatch[2].trim();
      detectedConcepts.push('def_function');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'def_function',
        primaryToken: fnName,
        secondaryToken: fnArgs,
        expressionText: `def ${fnName}(${fnArgs})`,
      });
      callStack.push({
        funcName: fnName,
        args: fnArgs || 'void',
        status: 'active',
        returnValue: cleanOutput,
      });

      // Check if function calls itself (recursion)
      const restCode = cleanCode.slice(cleanCode.indexOf(line) + line.length);
      if (new RegExp(`\\b${fnName}\\s*\\(`).test(restCode)) {
        hasRecursion = true;
        detectedConcepts.push('recursion');
      }
      return;
    }

    // B. Return Statement
    const retMatch = trimmed.match(/^return\b\s*(.*)$/);
    if (retMatch) {
      detectedConcepts.push('return_statement');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'return_statement',
        primaryToken: 'return',
        expressionText: retMatch[1].trim() || cleanOutput,
        evaluatedValue: cleanOutput,
      });
      return;
    }

    // C. Try / Except Exception Handling
    if (trimmed.startsWith('try:')) {
      hasException = true;
      detectedConcepts.push('try_block');
      statements.push({ lineNumber: lineNum, raw: line, trimmed, kind: 'try_block', primaryToken: 'try' });
      return;
    }
    const exceptMatch = trimmed.match(/^except\s*([a-zA-Z_]\w*)?\s*:/);
    if (exceptMatch) {
      hasException = true;
      detectedConcepts.push('except_block');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'except_block',
        primaryToken: 'except',
        secondaryToken: exceptMatch[1] || 'Exception',
      });
      return;
    }

    // D. With File Handling
    const withMatch = trimmed.match(/^with\s+open\s*\(([^)]+)\)\s+as\s+([a-zA-Z_]\w*):/);
    if (withMatch) {
      hasFile = true;
      detectedConcepts.push('file_handling');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'with_file',
        primaryToken: 'with open',
        secondaryToken: withMatch[2],
        expressionText: withMatch[1],
      });
      return;
    }

    // E. Input Call
    const inputMatch = trimmed.match(/input\s*\((.*)\)/);
    if (inputMatch) {
      hasInput = true;
      detectedConcepts.push('input_call');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'input_call',
        primaryToken: 'input',
        expressionText: inputMatch[1].trim(),
        evaluatedValue: sampleInput || 'User Input',
      });
      return;
    }

    // F. Conditionals
    const ifMatch = trimmed.match(/^(if|elif)\s+([^:]+):/);
    if (ifMatch) {
      hasCondition = true;
      const condType = ifMatch[1];
      const expr = ifMatch[2].trim();
      detectedConcepts.push('conditional_if');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: condType === 'if' ? 'condition_if' : 'condition_elif',
        primaryToken: condType,
        expressionText: expr,
        evaluatedValue: 'True',
      });
      if (!conditionInfo) {
        conditionInfo = {
          expression: expr,
          result: true,
          branchTaken: outputLines[0] || 'Executed Branch',
        };
      }
      return;
    }
    if (trimmed.startsWith('else:')) {
      hasCondition = true;
      statements.push({ lineNumber: lineNum, raw: line, trimmed, kind: 'condition_else', primaryToken: 'else' });
      return;
    }

    // G. Loops: For & While
    const forMatch = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([^:]+):/);
    if (forMatch) {
      hasLoop = true;
      const iterator = forMatch[1];
      const iterable = forMatch[2].trim();
      detectedConcepts.push('loop_for');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'loop_for',
        primaryToken: 'for',
        secondaryToken: iterator,
        expressionText: iterable,
      });
      if (!loopInfo) {
        loopInfo = {
          iterator,
          values: outputLines.length > 0 ? outputLines.slice(0, 5) : ['0', '1', '2'],
        };
      }
      return;
    }

    const whileMatch = trimmed.match(/^while\s+([^:]+):/);
    if (whileMatch) {
      hasWhile = true;
      hasLoop = true;
      detectedConcepts.push('loop_while');
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'loop_while',
        primaryToken: 'while',
        expressionText: whileMatch[1].trim(),
      });
      if (!loopInfo) {
        loopInfo = {
          iterator: 'step',
          values: outputLines.length > 0 ? outputLines.slice(0, 4) : ['1', '2', '3'],
        };
      }
      return;
    }

    // H. Print Call
    const printMatch = trimmed.match(/^print\s*\((.*)\)$/);
    if (printMatch) {
      detectedConcepts.push('builtin_print');
      const arg = printMatch[1].trim();
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'print_call',
        primaryToken: 'print',
        expressionText: arg,
        evaluatedValue: outputLines[0] || arg.replace(/^["']|["']$/g, ''),
      });
      return;
    }

    // I. Multi & Single Variable Assignments
    const multiMatch = trimmed.match(/^([a-zA-Z_]\w*(?:\s*,\s*[a-zA-Z_]\w*)+)\s*=\s*(.+)$/);
    if (multiMatch) {
      hasVariable = true;
      detectedConcepts.push('variable_assignment');
      const names = multiMatch[1].split(',').map((s) => s.trim());
      const values = multiMatch[2].split(',').map((s) => s.trim());
      names.forEach((name, i) => {
        const val = values[i] || values[0] || '0';
        let varType = /^\d+$/.test(val) ? 'int' : /^\d+\.\d+$/.test(val) ? 'float' : /^["']/.test(val) ? 'str' : 'val';
        variables.push({ name, value: val, type: varType });
      });
      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'assignment',
        primaryToken: names[0],
        secondaryToken: '=',
        expressionText: multiMatch[2].trim(),
        evaluatedValue: multiMatch[2].trim(),
      });
      return;
    }

    const assignMatch = trimmed.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (assignMatch) {
      hasVariable = true;
      const varName = assignMatch[1];
      const rawVal = assignMatch[2].trim();
      detectedConcepts.push('variable_assignment');

      let varType = 'expr';
      if (/^["']/.test(rawVal)) {
        varType = 'str';
        hasStringOp = true;
      } else if (/^\d+$/.test(rawVal)) {
        varType = 'int';
      } else if (/^\d+\.\d+$/.test(rawVal)) {
        varType = 'float';
      } else if (/^\[/.test(rawVal)) {
        varType = 'list';
        hasDataStructure = true;
        const items = rawVal.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
        lists.push({ name: varName, elements: items });
        if (varName.toLowerCase().includes('stack')) hasStack = true;
      } else if (/^\{/.test(rawVal)) {
        varType = 'dict';
        hasDataStructure = true;
      } else if (/^(True|False)$/.test(rawVal)) {
        varType = 'bool';
      }

      variables.push({ name: varName, value: rawVal, type: varType });

      if (/[+\-*\/%]/.test(rawVal)) {
        hasArithmetic = true;
        if (/\/\/|\//.test(rawVal)) hasDivision = true;
      }
      if (/==|!=|<|>|<=|>=/.test(rawVal)) hasComparison = true;
      if (/lambda\b/.test(rawVal)) hasLambda = true;

      statements.push({
        lineNumber: lineNum,
        raw: line,
        trimmed,
        kind: 'assignment',
        primaryToken: varName,
        secondaryToken: '=',
        expressionText: rawVal,
        evaluatedValue: rawVal,
      });
      return;
    }

    // J. Method calls: .append(), .pop(), .sort(), etc.
    if (/\.pop\s*\(/.test(trimmed)) hasStack = true;
    if (/\.sort\s*\(/.test(trimmed)) detectedConcepts.push('sorting');

    statements.push({
      lineNumber: lineNum,
      raw: line,
      trimmed,
      kind: 'expression',
      primaryToken: trimmed.split(/\s+/)[0],
      expressionText: trimmed,
    });
  });

  // Map Primary Pedagogical Concept precisely across all 27 topics!
  let primaryConceptType: UniversalTopicConceptType = 'console_stream';

  if (topicId) {
    switch (topicId) {
      case 1: primaryConceptType = 'hello_world'; break;
      case 6: primaryConceptType = 'variables_datatypes'; break;
      case 7: primaryConceptType = 'input_output'; break;
      case 3: primaryConceptType = 'arithmetic_operator'; break;
      case 4: primaryConceptType = 'division'; break;
      case 8: primaryConceptType = 'comparison_operators'; break;
      case 2: primaryConceptType = 'conditional_branch'; break;
      case 5: primaryConceptType = 'loop_iteration'; break;
      case 9: primaryConceptType = 'while_loop'; break;
      case 10: primaryConceptType = 'function_def'; break;
      case 11: primaryConceptType = 'string_index_slice'; break;
      case 12: primaryConceptType = 'lists'; break;
      case 13: primaryConceptType = 'tuples_and_sets'; break;
      case 14: primaryConceptType = 'dictionaries'; break;
      case 15: primaryConceptType = 'list_operations'; break;
      case 16: primaryConceptType = 'dictionary_operations'; break;
      case 17: primaryConceptType = 'string_manipulation'; break;
      case 18: primaryConceptType = 'list_comprehension'; break;
      case 26: primaryConceptType = 'lambda_map'; break;
      case 20: primaryConceptType = 'exception_handling'; break;
      case 19: primaryConceptType = 'file_handling'; break;
      case 27: primaryConceptType = 'sorting_searching'; break;
      case 21: primaryConceptType = 'recursion'; break;
      case 22: primaryConceptType = 'sorting_algorithms'; break;
      case 23: primaryConceptType = 'search_algorithms'; break;
      case 24: primaryConceptType = 'problem_solving_functions'; break;
      case 25: primaryConceptType = 'advanced_data_structures'; break;
    }
  }

  // Fallback by code semantics if topicId is not explicit
  if (!topicId || primaryConceptType === 'console_stream') {
    if (hasRecursion) primaryConceptType = 'recursion';
    else if (hasStack) primaryConceptType = 'advanced_data_structures';
    else if (hasException) primaryConceptType = 'exception_handling';
    else if (hasFile) primaryConceptType = 'file_handling';
    else if (hasLambda) primaryConceptType = 'lambda_map';
    else if (hasFunctionDef) primaryConceptType = 'function_def';
    else if (hasWhile) primaryConceptType = 'while_loop';
    else if (hasLoop) primaryConceptType = 'loop_iteration';
    else if (hasCondition) primaryConceptType = 'conditional_branch';
    else if (hasDivision) primaryConceptType = 'division';
    else if (hasComparison) primaryConceptType = 'comparison_operators';
    else if (hasArithmetic) primaryConceptType = 'arithmetic_operator';
    else if (hasInput) primaryConceptType = 'input_output';
    else if (hasDataStructure) primaryConceptType = 'lists';
    else if (variables.length > 1) primaryConceptType = 'variables_datatypes';
    else if (hasVariable) primaryConceptType = 'variable_store';
    else primaryConceptType = 'hello_world';
  }

  return {
    cleanCode,
    codeLines,
    expectedOutput: cleanOutput,
    statements,
    detectedConcepts,
    primaryConceptType,
    variables,
    callStack,
    lists,
    conditionInfo,
    loopInfo,
    outputLines,
  };
}

// ─── 3. UNIVERSAL DYNAMIC VISUAL CARD COMPOSER ───

export function composeUniversalVisualCards(
  analysis: ProgramSemanticsAnalysis
): [FlowDiagramCard, FlowDiagramCard, FlowDiagramCard] {
  if (analysis.primaryConceptType === 'hello_world') {
    for (let t = 1; t <= 10; t++) {
      const cur = getCuratedTopic1Lesson(t);
      if (cur && cur.code.trim() === analysis.cleanCode.trim()) {
        return cur.flowCards;
      }
    }
  }

  const { statements, variables, expectedOutput } = analysis;
  const cleanOutput = (expectedOutput || 'Output').trim();

  // 1. Identify Card 1: Core Initial Statement / Variable Setup / Function Def
  let card1: FlowDiagramCard;
  const funcDef = statements.find((s) => s.kind === 'def_function' || s.kind === 'function_def');
  const assignStmt = statements.find((s) => s.kind === 'assignment');
  const loopStmt = statements.find((s) => s.kind === 'loop_for' || s.kind === 'loop_while');
  const firstStmt = statements[0];

  if (funcDef) {
    const pill = funcDef.raw.trim().replace(/:$/, '');
    card1 = {
      id: 'card-func-def',
      variant: 'blue',
      pillText: pill.length > 28 ? pill.slice(0, 26) + '...' : pill,
      cardType: 'function',
      iconName: 'code',
      tagText: 'Function Definition',
      captionHi: 'Function परिभाषा\n(बिल्ट-इन प्रिंट निर्देश)',
      captionEn: 'Function Definition\n(Defines reusable block)',
      activeInScenes: [0, 1, 2, 3],
    };
  } else if (assignStmt && variables.length > 0) {
    const displayPill = variables
      .map((v) => `${v.name} = ${v.value}`)
      .join(', ');
    const primaryType = variables[0].type || 'val';
    card1 = {
      id: 'card-var-init',
      variant: 'blue',
      pillText: displayPill.length > 28 ? displayPill.slice(0, 26) + '...' : displayPill,
      cardType: 'variable',
      iconName: 'variable',
      tagText: `Variable Setup (${primaryType})`,
      captionHi: 'Variable Setup\n(Memory me value store karta hai)',
      captionEn: 'Variable Setup\n(Allocates labeled RAM)',
      activeInScenes: [0, 1, 2, 3],
    };
  } else if (loopStmt) {
    const pill = loopStmt.raw.trim().replace(/:$/, '');
    card1 = {
      id: 'card-loop-head',
      variant: 'blue',
      pillText: pill.length > 28 ? pill.slice(0, 26) + '...' : pill,
      cardType: 'loop',
      iconName: 'loop',
      tagText: 'Loop Header',
      captionHi: 'Loop Header\n(Iteration cycle shuru karta hai)',
      captionEn: 'Loop Header\n(Initiates loop cycle)',
      activeInScenes: [0, 1, 2, 3],
    };
  } else {
    const printStmt = statements.find((s) => s.kind === 'print_call');
    card1 = {
      id: 'card-func-print',
      variant: 'blue',
      pillText: printStmt ? 'print()' : (firstStmt?.raw.trim() || 'Instruction'),
      cardType: 'function',
      iconName: 'box',
      tagText: 'Built-in Function',
      captionHi: 'Print Statement\n(Console par output print karta hai)',
      captionEn: 'Built-in Instruction\n(Sends output to stdout)',
      activeInScenes: [0, 1, 2, 3],
    };
  }

  // 2. Identify Card 2: Core Transformation / Branch Condition / Computation
  let card2: FlowDiagramCard;
  const condStmt = statements.find(
    (s) => s.kind === 'condition_if' || s.kind === 'condition_elif'
  );
  const mathStmt = statements.find(
    (s) => s.kind === 'assignment' && /[+\-*\/%]/.test(s.expressionText || '')
  );
  const otherAssign = statements.filter((s) => s.kind === 'assignment')[1];

  if (condStmt) {
    const expr = condStmt.expressionText || condStmt.raw.trim().replace(/^(if|elif)\s+|:$/g, '');
    card2 = {
      id: 'card-cond-eval',
      variant: 'yellow',
      pillText: `${expr.length > 20 ? expr.slice(0, 18) + '...' : expr} ──► True`,
      cardType: 'condition',
      iconName: 'branch',
      tagText: 'Branch Condition (if)',
      captionHi: 'Condition Check\n(True hone par block execute hoga)',
      captionEn: 'Branch Decision\n(Evaluates True to proceed)',
      activeInScenes: [1, 2, 3],
    };
  } else if (mathStmt) {
    const rawMath = mathStmt.raw.trim();
    card2 = {
      id: 'card-calc-eval',
      variant: 'yellow',
      pillText: rawMath.length > 28 ? rawMath.slice(0, 26) + '...' : rawMath,
      cardType: 'expression',
      iconName: 'calc',
      tagText: 'Logic & Computation',
      captionHi: 'Calculation & Logic\n(Math calculation compute karta hai)',
      captionEn: 'Logic & Computation\n(Computes runtime value)',
      activeInScenes: [1, 2, 3],
    };
  } else if (otherAssign) {
    const rawAssign = otherAssign.raw.trim();
    card2 = {
      id: 'card-sec-assign',
      variant: 'yellow',
      pillText: rawAssign.length > 28 ? rawAssign.slice(0, 26) + '...' : rawAssign,
      cardType: 'variable',
      iconName: 'layers',
      tagText: 'Data Binding',
      captionHi: 'Data Binding\n(Variable state update karta hai)',
      captionEn: 'Data Binding\n(Secondary variable state)',
      activeInScenes: [1, 2, 3],
    };
  } else if (loopStmt) {
    card2 = {
      id: 'card-loop-iter',
      variant: 'yellow',
      pillText: 'i ──► Iteration 1..N',
      cardType: 'loop',
      iconName: 'loop',
      tagText: 'Loop Iterations',
      captionHi: 'Loop Iterations\n(Har item par loop cycle chalta hai)',
      captionEn: 'Loop Iterations\n(Executes body sequentially)',
      activeInScenes: [1, 2, 3],
    };
  } else {
    const printStmt = statements.find((s) => s.kind === 'print_call');
    const arg = printStmt?.expressionText || cleanOutput;
    card2 = {
      id: 'card-arg-text',
      variant: 'yellow',
      pillText: arg.length > 26 ? arg.slice(0, 24) + '...' : arg,
      cardType: 'argument',
      iconName: 'quote',
      tagText: 'Evaluated Argument',
      captionHi: 'String Argument\n(डबल कोट्स में टेक्स्ट)',
      captionEn: 'Evaluated Argument\n(Data sent to output)',
      activeInScenes: [1, 2, 3],
    };
  }

  // 3. Card 3: Actual Verified Output
  const card3: FlowDiagramCard = {
    id: 'card-console-out',
    variant: 'purple',
    pillText: cleanOutput.length > 26 ? `>_ ${cleanOutput.slice(0, 23)}...` : `>_ ${cleanOutput}`,
    cardType: 'console',
    iconName: 'terminal',
    tagText: 'Output Console',
    captionHi: 'Console Output\n(सत्यापित परिणाम)',
    captionEn: 'Output Console\n(Verified terminal stdout)',
    activeInScenes: [2, 3],
  };

  return [card1, card2, card3];
}


// ─── 3B. SPECIALIZED 8-STEP PRINTING TEACHING ENGINE (TOPIC 1: SAY HELLO WORLD) ───

function generatePrinting8StepScenes(
  analysis: ProgramSemanticsAnalysis,
  flowCards: [FlowDiagramCard, FlowDiagramCard, FlowDiagramCard]
): LearningSceneSpec[] {
  const { expectedOutput, statements } = analysis;
  const printStmt = statements.find((s) => s.kind === 'print_call') || statements[0];
  const lineNum = printStmt?.lineNumber || 1;
  const cleanOutput = (expectedOutput || 'Hello, World!').trim();
  const rawArg = printStmt?.expressionText || cleanOutput;
  const stringLiteral = rawArg.replace(/^["']|["']$/g, '');

  const [card1, card2, card3] = flowCards;

  const scenes: LearningSceneSpec[] = [
    // STEP 1 — INTRODUCTION
    {
      sceneIndex: 0,
      phase: 'intro',
      stepBadgeHi: 'चरण 1: प्रस्तावना व परिचय',
      stepBadgeEn: 'Step 1: Introduction',
      activeLineNumbers: [lineNum],
      highlightPart: 'none',
      robotPose: {
        x: 410,
        y: 185,
        targetElement: 'student',
        tilt: 0,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'upcoming' },
        card2: { status: 'upcoming' },
        card3: { status: 'upcoming' },
        connector1Active: false,
        connector2Active: false,
      },
      spokenNarrationHi: `आज हम Python में अपना पहला Program लिखना सीखेंगे। हमें Computer की स्क्रीन पर ${cleanOutput} दिखाना है।`,
      spokenNarrationEn: `Today we will learn how to write our first program in Python. We need to display ${cleanOutput} on the computer screen.`,
      explanationPartsHi: {
        text1: 'समस्या का उद्देश्य: ',
        codePill1: cleanOutput,
        text2: ' - स्क्रीन पर प्रदर्शित करना है।',
      },
      explanationPartsEn: {
        text1: 'Problem Objective: ',
        codePill1: cleanOutput,
        text2: ' - display on the computer screen.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'code_highlight',
          targetElement: 'code_editor',
          highlightLineIndex: lineNum - 1,
          relatedToken: cleanOutput,
          description: 'Problem objective introduced',
          stateSnapshot: {
            codeFocus: 'none',
            showFunctionCard: false,
            highlightFunctionCard: false,
            showArrow1: false,
            animateArrow1: false,
            showArgumentCard: false,
            highlightArgumentCard: false,
            showArrow2: false,
            animateArrow2: false,
            showConsoleOpCard: false,
            highlightConsoleOpCard: false,
            showRobotMascot: true,
            showCurvedFlowArrow: false,
            animateCurvedFlowArrow: false,
            consoleMode: 'empty',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'उद्देश्य: ',
            codePill1: cleanOutput,
            text2: ' को स्क्रीन पर प्रिंट करना।',
          },
          explanationPartsEn: {
            text1: 'Objective: ',
            codePill1: cleanOutput,
            text2: ' to print on screen.',
          },
        },
      ],
      durationSec: 8.0,
    },

    // STEP 2 — PRINT FUNCTION
    {
      sceneIndex: 1,
      phase: 'concept',
      stepBadgeHi: 'चरण 2: print() Built-in Function',
      stepBadgeEn: 'Step 2: Print Function',
      activeLineNumbers: [lineNum],
      highlightPart: 'function',
      robotPose: {
        x: 210,
        y: 115,
        targetElement: 'code_editor',
        tilt: 4,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'active', glowColor: 'cyan' },
        card2: { status: 'upcoming' },
        card3: { status: 'upcoming' },
        connector1Active: false,
        connector2Active: false,
      },
      spokenNarrationHi: 'Python में print एक Built-in Function है। इसका काम किसी Value या मैसेज को Output में दिखाना होता है।',
      spokenNarrationEn: 'In Python, print is a built-in function. Its purpose is to display a value or message to the output.',
      explanationPartsHi: {
        text1: 'Built-in Function: ',
        codePill1: 'print()',
        text2: ' - स्क्रीन पर Output संदेश भेजता है।',
      },
      explanationPartsEn: {
        text1: 'Built-in Function: ',
        codePill1: 'print()',
        text2: ' - sends value or message to stdout.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'function_reveal',
          targetElement: 'code_editor',
          activeFunctionPillText: 'print()',
          description: 'print() function highlighted in main.py',
          stateSnapshot: {
            codeFocus: 'function',
            showFunctionCard: true,
            highlightFunctionCard: true,
            showArrow1: false,
            animateArrow1: false,
            showArgumentCard: false,
            highlightArgumentCard: false,
            showArrow2: false,
            animateArrow2: false,
            showConsoleOpCard: false,
            highlightConsoleOpCard: false,
            showRobotMascot: true,
            showCurvedFlowArrow: false,
            animateCurvedFlowArrow: false,
            consoleMode: 'empty',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'Function नाम: ',
            codePill1: 'print',
            text2: ' Python का मानक बिल्ट-इन फंक्शन।',
          },
          explanationPartsEn: {
            text1: 'Function Name: ',
            codePill1: 'print',
            text2: ' built-in standard function.',
          },
        },
      ],
      durationSec: 8.5,
    },

    // STEP 3 — PARENTHESES
    {
      sceneIndex: 2,
      phase: 'concept',
      stepBadgeHi: 'चरण 3: कोष्ठक (गोल ब्रैकेट्स)',
      stepBadgeEn: 'Step 3: Parentheses',
      activeLineNumbers: [lineNum],
      highlightPart: 'parentheses',
      robotPose: {
        x: 235,
        y: 115,
        targetElement: 'code_editor',
        tilt: 3,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'active', glowColor: 'cyan' },
        card2: { status: 'upcoming' },
        card3: { status: 'upcoming' },
        connector1Active: false,
        connector2Active: false,
      },
      spokenNarrationHi: 'प्रिंट के बाद ये गोल ब्रैकेट्स लगते हैं। इनके अंदर हम वह Value देते हैं जिसे Output में दिखाना होता है।',
      spokenNarrationEn: 'These parentheses follow the print function. Inside them, we pass the value that we want to display as output.',
      explanationPartsHi: {
        text1: 'Syntax: ',
        codePill1: '( )',
        text2: ' - Argument प्राप्त करने वाले कोष्ठक।',
      },
      explanationPartsEn: {
        text1: 'Parentheses: ',
        codePill1: '( )',
        text2: ' - receive the value to output.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'code_highlight',
          targetElement: 'code_editor',
          highlightLineIndex: lineNum - 1,
          relatedToken: '()',
          description: 'Parentheses syntax',
          stateSnapshot: {
            codeFocus: 'parentheses',
            showFunctionCard: true,
            highlightFunctionCard: true,
            showArrow1: false,
            animateArrow1: false,
            showArgumentCard: false,
            highlightArgumentCard: false,
            showArrow2: false,
            animateArrow2: false,
            showConsoleOpCard: false,
            highlightConsoleOpCard: false,
            showRobotMascot: true,
            showCurvedFlowArrow: false,
            animateCurvedFlowArrow: false,
            consoleMode: 'empty',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'कोष्ठक: ',
            codePill1: '( )',
            text2: ' - Argument कंटेनर।',
          },
          explanationPartsEn: {
            text1: 'Parentheses: ',
            codePill1: '( )',
            text2: ' - Argument container.',
          },
        },
      ],
      durationSec: 8.5,
    },

    // STEP 4 — STRING
    {
      sceneIndex: 3,
      phase: 'concept',
      stepBadgeHi: 'चरण 4: String (डबल कोट्स टेक्स्ट)',
      stepBadgeEn: 'Step 4: String',
      activeLineNumbers: [lineNum],
      highlightPart: 'string',
      robotPose: {
        x: 510,
        y: 215,
        targetElement: 'card_argument',
        tilt: 2,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'active', glowColor: 'amber' },
        card3: { status: 'upcoming' },
        connector1Active: false,
        connector2Active: false,
      },
      spokenNarrationHi: `डबल कोट्स के अंदर लिखा हुआ टेक्स्ट Python में String कहलाता है। यहाँ ${stringLiteral} एक String है।`,
      spokenNarrationEn: `Text written inside double quotes is called a string in Python. Here, ${stringLiteral} is a string.`,
      explanationPartsHi: {
        text1: 'String लिटरल: ',
        codePill1: `"${stringLiteral}"`,
        text2: ' - कोट्स में सुरक्षित टेक्स्ट डेटा।',
      },
      explanationPartsEn: {
        text1: 'String Literal: ',
        codePill1: `"${stringLiteral}"`,
        text2: ' - textual data inside double quotes.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'argument_reveal',
          targetElement: 'card_argument',
          activeArgumentPillText: `"${stringLiteral}"`,
          description: 'String literal highlighted',
          stateSnapshot: {
            codeFocus: 'string',
            showFunctionCard: true,
            highlightFunctionCard: false,
            showArrow1: false,
            animateArrow1: false,
            showArgumentCard: true,
            highlightArgumentCard: true,
            showArrow2: false,
            animateArrow2: false,
            showConsoleOpCard: false,
            highlightConsoleOpCard: false,
            showRobotMascot: true,
            showCurvedFlowArrow: false,
            animateCurvedFlowArrow: false,
            consoleMode: 'empty',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'String: ',
            codePill1: `"${stringLiteral}"`,
            text2: ' टेक्स्ट डेटा।',
          },
          explanationPartsEn: {
            text1: 'String: ',
            codePill1: `"${stringLiteral}"`,
            text2: ' textual data.',
          },
        },
      ],
      durationSec: 9.0,
    },

    // STEP 5 — FUNCTION ARGUMENT
    {
      sceneIndex: 4,
      phase: 'concept',
      stepBadgeHi: 'चरण 5: Function Argument (Data Input)',
      stepBadgeEn: 'Step 5: Function Argument',
      activeLineNumbers: [lineNum],
      highlightPart: 'argument',
      robotPose: {
        x: 510,
        y: 215,
        targetElement: 'card_argument',
        tilt: 2,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'active', glowColor: 'cyan' },
        card2: { status: 'active', glowColor: 'amber' },
        card3: { status: 'upcoming' },
        connector1Active: true,
        connector2Active: false,
      },
      spokenNarrationHi: `अब ${stringLiteral} String को print Function के अंदर Argument के रूप में दिया गया है। Print Function इसी टेक्स्ट को Output में दिखाएगा।`,
      spokenNarrationEn: `Now, the string ${stringLiteral} is passed as an argument inside the print function. The print function will display this text in the output.`,
      explanationPartsHi: {
        text1: 'Argument पासिंग: ',
        codePill1: `print("${stringLiteral}")`,
        text2: ' - Function को Data भेजा गया।',
      },
      explanationPartsEn: {
        text1: 'Argument Passing: ',
        codePill1: `print("${stringLiteral}")`,
        text2: ' - data passed into print function.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'argument_reveal',
          targetElement: 'card_argument',
          activeArgumentPillText: `"${stringLiteral}"`,
          description: 'Argument passed to print()',
          stateSnapshot: {
            codeFocus: 'argument',
            showFunctionCard: true,
            highlightFunctionCard: true,
            showArrow1: true,
            animateArrow1: true,
            showArgumentCard: true,
            highlightArgumentCard: true,
            showArrow2: false,
            animateArrow2: false,
            showConsoleOpCard: false,
            highlightConsoleOpCard: false,
            showRobotMascot: true,
            showCurvedFlowArrow: true,
            animateCurvedFlowArrow: true,
            consoleMode: 'empty',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'Argument: ',
            codePill1: `print("${stringLiteral}")`,
            text2: ' - Function में भेजा गया।',
          },
          explanationPartsEn: {
            text1: 'Argument: ',
            codePill1: `print("${stringLiteral}")`,
            text2: ' - passed into function.',
          },
        },
      ],
      durationSec: 9.0,
    },

    // STEP 6 — EXECUTION
    {
      sceneIndex: 5,
      phase: 'execution',
      stepBadgeHi: 'चरण 6: Code निष्पादन (एक्ज़ीक्यूशन)',
      stepBadgeEn: 'Step 6: Execution',
      activeLineNumbers: [lineNum],
      highlightPart: 'full_line',
      robotPose: {
        x: 600,
        y: 215,
        targetElement: 'card_console_op',
        tilt: 4,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'done' },
        card3: { status: 'active', glowColor: 'cyan' },
        connector1Active: true,
        connector2Active: true,
      },
      spokenNarrationHi: 'जब Python इस लाइन को एक्ज़ीक्यूट करता है, तब print Function दिए गए टेक्स्ट को Console में भेजता है।',
      spokenNarrationEn: 'When Python executes this line, the print function sends the provided text to the console.',
      explanationPartsHi: {
        text1: 'निष्पादन: ',
        codePill1: `print("${stringLiteral}")`,
        text2: ' - Python Console में टेक्स्ट भेज रहा है।',
      },
      explanationPartsEn: {
        text1: 'Execution: ',
        codePill1: `print("${stringLiteral}")`,
        text2: ' - Python sends text to stdout.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'console_typing',
          targetElement: 'card_console_op',
          description: 'Function executing call',
          stateSnapshot: {
            codeFocus: 'full_line',
            showFunctionCard: true,
            highlightFunctionCard: false,
            showArrow1: true,
            animateArrow1: false,
            showArgumentCard: true,
            highlightArgumentCard: false,
            showArrow2: true,
            animateArrow2: true,
            showConsoleOpCard: true,
            highlightConsoleOpCard: true,
            showRobotMascot: true,
            showCurvedFlowArrow: true,
            animateCurvedFlowArrow: false,
            consoleMode: 'typing',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'सक्रिय रन: ',
            codePill1: 'print()',
            text2: ' - Console सक्रिय हुआ।',
          },
          explanationPartsEn: {
            text1: 'Running: ',
            codePill1: 'print()',
            text2: ' - console activating.',
          },
        },
      ],
      durationSec: 8.5,
    },

    // STEP 7 — OUTPUT
    {
      sceneIndex: 6,
      phase: 'execution',
      stepBadgeHi: 'चरण 7: Console Output',
      stepBadgeEn: 'Step 7: Output',
      activeLineNumbers: [lineNum],
      highlightPart: 'console',
      robotPose: {
        x: 450,
        y: 245,
        targetElement: 'console_output',
        tilt: 5,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'done' },
        card3: { status: 'active', glowColor: 'cyan' },
        connector1Active: true,
        connector2Active: true,
      },
      spokenNarrationHi: `देखिए, Console में ${cleanOutput} दिख रहा है। Output में कोटेशन मार्क्स नहीं आते, क्योंकि वे Python Code में String को पहचानने के लिए इस्तेमाल होते हैं।`,
      spokenNarrationEn: `Notice that ${cleanOutput} appears in the console. Quotation marks do not appear in the output because they are only used in Python code to define the string.`,
      explanationPartsHi: {
        text1: 'Console Output: ',
        codePill1: cleanOutput,
        text2: ' - बिना कोट्स के शुद्ध परिणाम।',
      },
      explanationPartsEn: {
        text1: 'Console Output: ',
        codePill1: cleanOutput,
        text2: ' - clean output without quotation marks.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'console_typing',
          targetElement: 'console_output',
          description: `Terminal displays: ${cleanOutput}`,
          stateSnapshot: {
            codeFocus: 'console',
            showFunctionCard: true,
            highlightFunctionCard: false,
            showArrow1: true,
            animateArrow1: false,
            showArgumentCard: true,
            highlightArgumentCard: false,
            showArrow2: true,
            animateArrow2: false,
            showConsoleOpCard: true,
            highlightConsoleOpCard: true,
            showRobotMascot: true,
            showCurvedFlowArrow: false,
            animateCurvedFlowArrow: false,
            consoleMode: 'complete',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'Terminal Output: ',
            codePill1: cleanOutput,
            text2: ' - बिना कोट्स के प्रदर्शित।',
          },
          explanationPartsEn: {
            text1: 'Terminal Output: ',
            codePill1: cleanOutput,
            text2: ' - displayed without quotes.',
          },
        },
      ],
      durationSec: 9.5,
    },

    // STEP 8 — FINAL RECAP
    {
      sceneIndex: 7,
      phase: 'recap',
      stepBadgeHi: 'चरण 8: संपूर्ण सारांश (रिकैप)',
      stepBadgeEn: 'Step 8: Final Recap',
      activeLineNumbers: [lineNum],
      highlightPart: 'all',
      robotPose: {
        x: 410,
        y: 185,
        targetElement: 'student',
        tilt: 0,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'done' },
        card3: { status: 'done' },
        connector1Active: true,
        connector2Active: true,
      },
      spokenNarrationHi: 'आज हमने सीखा कि print Function Output दिखाता है, ब्रैकेट्स के अंदर Argument दिया जाता है, और कोट्स के अंदर टेक्स्ट String होता है। इसी तरह हम Python में मैसेज प्रिंट कर सकते हैं।',
      spokenNarrationEn: 'Today we learned that the print function displays output, arguments are passed inside parentheses, and text inside quotes is a string. This is how we print messages in Python.',
      explanationPartsHi: {
        text1: 'पूर्ण सारांश: ',
        codePill1: `print("${stringLiteral}") ──► ${cleanOutput}`,
        text2: ' - संपूर्ण प्रक्रिया सत्यापित।',
      },
      explanationPartsEn: {
        text1: 'Lesson Recap: ',
        codePill1: `print("${stringLiteral}") ──► ${cleanOutput}`,
        text2: ' - complete lesson verified.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'completion',
          targetElement: 'code_editor',
          description: 'Printing lesson complete',
          stateSnapshot: {
            codeFocus: 'all',
            showFunctionCard: true,
            highlightFunctionCard: false,
            showArrow1: true,
            animateArrow1: false,
            showArgumentCard: true,
            highlightArgumentCard: false,
            showArrow2: true,
            animateArrow2: false,
            showConsoleOpCard: true,
            highlightConsoleOpCard: false,
            showRobotMascot: true,
            showCurvedFlowArrow: false,
            animateCurvedFlowArrow: false,
            consoleMode: 'complete',
            visibleVariableCount: 1,
            showConditionResult: false,
            visibleLoopStepCount: 1,
            visibleStackFrameCount: 1,
          },
          nextEventId: null,
          explanationPartsHi: {
            text1: 'सारांश: ',
            codePill1: 'पाठ संपन्न',
            text2: ' - Python प्रिंटिंग में प्रवीणता प्राप्त।',
          },
          explanationPartsEn: {
            text1: 'Recap: ',
            codePill1: 'Lesson Complete',
            text2: ' - Python printing mastered.',
          },
        },
      ],
      durationSec: 10.0,
    },
  ];

  return scenes;
}

// ─── 4. UNIVERSAL SCENE GENERATOR (100% CODE-DRIVEN NARRATION & TIMELINE) ───

export function generateUniversalScenes(
  analysis: ProgramSemanticsAnalysis,
  flowCards: [FlowDiagramCard, FlowDiagramCard, FlowDiagramCard]
): LearningSceneSpec[] {
  if (analysis.primaryConceptType === 'hello_world') {
    for (let t = 1; t <= 10; t++) {
      const cur = getCuratedTopic1Lesson(t);
      if (cur && cur.code.trim() === analysis.cleanCode.trim()) {
        return cur.scenes;
      }
    }
    return generatePrinting8StepScenes(analysis, flowCards);
  }
  const { cleanCode, codeLines, expectedOutput, statements, variables } = analysis;
  const cleanOutput = (expectedOutput || 'Output').trim();

  const [card1, card2, card3] = flowCards;

  const line1Num = statements[0]?.lineNumber || 1;
  const line2Num = statements[1]?.lineNumber || line1Num;
  const printStmt = statements.find((s) => s.kind === 'print_call');
  const line3Num = printStmt?.lineNumber || statements[statements.length - 1]?.lineNumber || 1;
  const allLineNums = statements.map((s) => s.lineNumber);

  const makeSnapshot = (
    focus: 'none' | 'function' | 'argument' | 'full_line' | 'completed',
    mode: 'empty' | 'receiving' | 'typing' | 'complete',
    c1: boolean,
    c2: boolean,
    c3: boolean
  ) => ({
    codeFocus: focus,
    showFunctionCard: true,
    highlightFunctionCard: c1,
    showArrow1: c2 || c3,
    animateArrow1: c2,
    showArgumentCard: c2 || c3,
    highlightArgumentCard: c2,
    showArrow2: c3,
    animateArrow2: c3,
    showConsoleOpCard: c3,
    highlightConsoleOpCard: c3,
    showRobotMascot: true,
    showCurvedFlowArrow: true,
    animateCurvedFlowArrow: false,
    consoleMode: mode,
    visibleVariableCount: variables.length || 1,
    showConditionResult: true,
    visibleLoopStepCount: 1,
    visibleStackFrameCount: 1,
  });

  const scenes: LearningSceneSpec[] = [
    // Scene 1: Introduction & Initial Setup
    {
      sceneIndex: 0,
      phase: 'intro',
      stepBadgeHi: 'Step 1: Code Setup aur Concept',
      stepBadgeEn: 'Step 1: Program Entry & Setup',
      activeLineNumbers: [line1Num],
      highlightPart: 'function',
      robotPose: {
        x: 350,
        y: 65,
        targetElement: 'code_editor',
        tilt: 4,
        wandAngle: 15,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'active', glowColor: 'cyan' },
        card2: { status: 'upcoming' },
        card3: { status: 'upcoming' },
        connector1Active: false,
        connector2Active: false,
      },
      spokenNarrationHi: `Dhyan se dekhiye, program line ${line1Num} se shuru hota hai: "${card1.pillText}". Python memory me data store karta hai aur execution environment ready karta hai.`,
      spokenNarrationEn: `The program initiates at line ${line1Num}: "${card1.pillText}". Python sets up memory allocation and prepares execution.`,
      explanationPartsHi: {
        text1: `Line ${line1Num}: `,
        codePill1: card1.pillText,
        text2: ' - ' + card1.tagText + ' ko memory me process karta hai.',
      },
      explanationPartsEn: {
        text1: `Line ${line1Num}: `,
        codePill1: card1.pillText,
        text2: ' - executes ' + card1.tagText + ' in RAM.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'code_highlight',
          targetElement: 'code_editor',
          highlightLineIndex: line1Num - 1,
          relatedToken: card1.pillText,
          description: `Focusing on ${card1.pillText}`,
          stateSnapshot: makeSnapshot('function', 'empty', true, false, false),
          nextEventId: null,
          explanationPartsHi: {
            text1: `Line ${line1Num}: `,
            codePill1: card1.pillText,
            text2: ' - Memory me data load karta hai.',
          },
          explanationPartsEn: {
            text1: `Line ${line1Num}: `,
            codePill1: card1.pillText,
            text2: ' - allocates labeled RAM.',
          },
        },
        {
          timestampSec: 2.2,
          type: 'function_reveal',
          targetElement: 'card_function',
          activeFunctionPillText: card1.pillText,
          description: `Card 1 active: ${card1.tagText}`,
          stateSnapshot: makeSnapshot('function', 'empty', true, false, false),
          nextEventId: null,
          explanationPartsHi: {
            text1: `Active Card: `,
            codePill1: card1.pillText,
            text2: ' - ' + card1.tagText,
          },
          explanationPartsEn: {
            text1: `Active card: `,
            codePill1: card1.pillText,
            text2: ' - ' + card1.tagText,
          },
        },
      ],
      interactiveCheckpoint: {
        promptHi: 'Kya aapko samajh aaya ki pehli line memory me kya setup karti hai?',
        promptEn: 'Do you see how line 1 allocates memory for the program?',
        optionsHi: ['Haan, ye memory initialize karta hai', 'Ek baar phir samjhaiye'],
        optionsEn: ['Yes, it initializes memory', 'Explain again'],
        correctIndex: 0,
        explanationHi: 'Variable aur statement declaration aage ke program logic ke liye memory establish karta hai.',
        explanationEn: 'Setup instructions establish storage for the rest of the program.',
      },
      durationSec: 8.5,
    },

    // Scene 2: Logic Evaluation & Runtime Transformation
    {
      sceneIndex: 1,
      phase: 'concept',
      stepBadgeHi: 'Step 2: Logic aur Execution',
      stepBadgeEn: 'Step 2: Logic & Transformation',
      activeLineNumbers: [line2Num],
      highlightPart: 'argument',
      robotPose: {
        x: 430,
        y: 165,
        targetElement: 'card_argument',
        tilt: -3,
        wandAngle: -10,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'active', glowColor: 'cyan' },
        card3: { status: 'upcoming' },
        connector1Active: true,
        connector2Active: false,
      },
      spokenNarrationHi: `Agla step dekhiye, Python "${card2.pillText}" ko evaluate kar raha hai. Program logic ke hisaab se value calculate hoti hai aur runtime state update ho jata hai.`,
      spokenNarrationEn: `Next, Python evaluates "${card2.pillText}". The runtime state updates according to program logic, producing intermediate values.`,
      explanationPartsHi: {
        text1: 'Runtime Logic: ',
        codePill1: card2.pillText,
        text2: ' - ' + card2.tagText,
      },
      explanationPartsEn: {
        text1: 'Runtime Logic: ',
        codePill1: card2.pillText,
        text2: ' - ' + card2.tagText,
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'argument_reveal',
          targetElement: 'card_argument',
          activeArgumentPillText: card2.pillText,
          description: `Card 2 active: ${card2.tagText}`,
          stateSnapshot: makeSnapshot('argument', 'empty', false, true, false),
          nextEventId: null,
          explanationPartsHi: {
            text1: 'Runtime Logic: ',
        codePill1: card2.pillText,
        text2: ' - ' + card2.tagText,
          },
          explanationPartsEn: {
            text1: 'Runtime Logic: ',
        codePill1: card2.pillText,
        text2: ' - ' + card2.tagText,
          },
        },
      ],
      interactiveCheckpoint: {
        promptHi: 'Kya aapko runtime evaluation ka logic samajh aaya?',
        promptEn: 'Do you see how the expression evaluates?',
        optionsHi: ['Haan, bilkul clear hai', 'Ek baar aur dikhaiye'],
        optionsEn: ['Yes, completely clear', 'Show once more'],
        correctIndex: 0,
        explanationHi: 'Python operators aur conditions ko strict sequential order me correctly evaluate karta hai.',
        explanationEn: 'Python rigorously evaluates operators and conditions in order.',
      },
      durationSec: 9.0,
    },

    // Scene 3: Execution & Verified Output
    {
      sceneIndex: 2,
      phase: 'execution',
      stepBadgeHi: 'Step 3: Console Output Verification',
      stepBadgeEn: 'Step 3: Console Output Stream',
      activeLineNumbers: [line3Num],
      highlightPart: 'console',
      robotPose: {
        x: 480,
        y: 195,
        targetElement: 'card_console',
        tilt: 5,
        wandAngle: 12,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'done' },
        card3: { status: 'active', glowColor: 'cyan' },
        connector1Active: true,
        connector2Active: true,
      },
      spokenNarrationHi: `Print statement execute hote hi, verified output directly console terminal par display ho gaya: "${cleanOutput}".`,
      spokenNarrationEn: `The print statement executes, outputting the verified result directly to stdout: "${cleanOutput}".`,
      explanationPartsHi: {
        text1: 'Console Output: ',
        codePill1: card3.pillText,
        text2: ' - terminal par output show ho gaya.',
      },
      explanationPartsEn: {
        text1: 'Terminal Output: ',
        codePill1: card3.pillText,
        text2: ' - verified stdout stream.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'console_typing',
          targetElement: 'card_console',
          description: `Terminal receives: ${cleanOutput}`,
          stateSnapshot: makeSnapshot('full_line', 'typing', false, false, true),
          nextEventId: null,
          explanationPartsHi: {
            text1: 'Terminal Output: ',
            codePill1: card3.pillText,
            text2: ' - Screen par display hua.',
          },
          explanationPartsEn: {
            text1: 'Terminal Output: ',
            codePill1: card3.pillText,
            text2: ' - displayed on screen.',
          },
        },
      ],
      durationSec: 8.5,
    },

    // Scene 4: Summary Recap & Verification
    {
      sceneIndex: 3,
      phase: 'recap',
      stepBadgeHi: 'Step 4: Final Summary aur Recap',
      stepBadgeEn: 'Step 4: Solution Recap & Verification',
      activeLineNumbers: allLineNums,
      highlightPart: 'all',
      robotPose: {
        x: 410,
        y: 80,
        targetElement: 'card_function',
        tilt: 0,
        wandAngle: 0,
        isSpeaking: true,
      },
      visualCardsState: {
        card1: { status: 'done' },
        card2: { status: 'done' },
        card3: { status: 'done' },
        connector1Active: true,
        connector2Active: true,
      },
      spokenNarrationHi: `Program execution successfully complete ho gaya! Code ne start se end tak correctly run karke verified result "${cleanOutput}" diya.`,
      spokenNarrationEn: `Execution successfully finished. The code executed in order from start to finish, yielding the verified output "${cleanOutput}".`,
      explanationPartsHi: {
        text1: 'Verified Solution: ',
        codePill1: card3.pillText,
        text2: ' - sabhi test cases pass karta hai.',
      },
      explanationPartsEn: {
        text1: 'Verified Solution: ',
        codePill1: card3.pillText,
        text2: ' - passes all test criteria.',
      },
      timelineEvents: [
        {
          timestampSec: 0.1,
          type: 'completion',
          targetElement: 'code_editor',
          description: 'Full program verified',
          stateSnapshot: makeSnapshot('completed', 'complete', true, true, true),
          nextEventId: null,
          explanationPartsHi: {
            text1: 'Complete Program: ',
            codePill1: card3.pillText,
            text2: ' - Successfully verified.',
          },
          explanationPartsEn: {
            text1: 'Entire Program: ',
            codePill1: card3.pillText,
            text2: ' - verified.',
          },
        },
      ],
      durationSec: 8.0,
    },
  ];

  return scenes as [LearningSceneSpec, LearningSceneSpec, LearningSceneSpec, LearningSceneSpec];
}

export function buildUniversalVisualHintPlan(
  task: QuestionInputRecord,
  topicId: number = 1,
  studentCode?: string
): VisualHintAnimationPlan {
  // If Topic 1, deliver curated curriculum lesson directly
  if (topicId === 1) {
    const taskNum = task.taskNumber || (task.id >= 101 && task.id <= 110 ? task.id - 100 : (task.id % 100)) || 1;
    const curated = getCuratedTopic1Lesson(taskNum);
    if (curated) {
      const targetCode = curated.code;
      const expectedOutput = curated.expectedOutput;
      const semantics = parseProgramSemantics(targetCode, expectedOutput, task.sampleInput || '', topicId);
      const flowCards = curated.flowCards;
      const scenes = curated.scenes;

      const steps = scenes.map((sc, idx) => ({
        stepNumber: idx + 1,
        title: sc.stepBadgeEn,
        narration: sc.spokenNarrationEn,
        conceptTip: (sc.explanationPartsEn?.text1 || '') + (sc.explanationPartsEn?.codePill1 || ''),
        patternPreview: sc.explanationPartsEn?.codePill1 || 'concept',
        terminalLines: idx >= scenes.length - 2 ? [expectedOutput] : [],
        visualState: {
          activeLineIndex: sc.activeLineNumbers[0] ? sc.activeLineNumbers[0] - 1 : 0,
          glowTarget: sc.highlightPart === 'function' ? 'func' : sc.highlightPart === 'argument' ? 'arg' : 'console',
          wandPosition: { x: 50, y: 50 },
          beamConnected: true,
          card1Active: sc.visualCardsState?.card1?.status === 'active',
          card2Active: sc.visualCardsState?.card2?.status === 'active',
          card3Active: sc.visualCardsState?.card3?.status === 'active',
        },
      }));

      return {
        planId: `py_t${topicId}_q${task.id}`,
        questionIds: [task.id, task.taskNumber || taskNum],
        topicId,
        questionTitle: curated.title,
        conceptTag: 'hello_world',
        archetype: 'stream',
        summaryExplanation: scenes[0]?.spokenNarrationEn || '',
        thinkingPrompt: 'Observe how Python executes printing step by step.',
        nodes: flowCards.map((c, i) => ({
          nodeId: `node_${i}`,
          label: c.pillText,
          status: 'pending',
          explanationEn: c.captionEn,
          explanationHi: c.captionHi,
        })),
        steps,
        totalSteps: steps.length,
        estimatedDurationSec: 35,
        learningObjectives: [
          'Master syntax and structural execution of Python printing',
          'Track arguments, newline behavior, and quotation rules accurately',
          'Understand how code directly streams into console output',
        ],
        postSolveWalkthrough: {
          annotatedCode: targetCode,
          explanationPoints: [
            scenes[0]?.spokenNarrationEn || '',
            scenes[1]?.spokenNarrationEn || '',
            scenes[2]?.spokenNarrationEn || '',
          ],
          conceptSummary: `Deep-dive execution model for ${curated.title}`,
          keyTakeaway: 'Always verify how strings and arguments are formatted in print().',
        },
        referenceCode: targetCode,
        scenes,
        flowCards,
        semantics,
      } as unknown as VisualHintAnimationPlan;
    }
  }

  // If Topic 4 (id 3 / id 4 / Operators), deliver curated curriculum lesson for Q1-Q3
  const isTopic2 = topicId === 6 || topicId === 2 || task.title?.toLowerCase().includes('variable') || (task as any).problemStatement?.toLowerCase().includes('variable');
  if (isTopic2) {
    const taskNum = task.taskNumber || (task.id >= 601 && task.id <= 610 ? task.id - 600 : (task.id % 100)) || 1;
    const curated = getCuratedTopic2Lesson(taskNum);
    if (curated) {
      const targetCode = curated.code;
      const expectedOutput = curated.expectedOutput;
      const semantics = parseProgramSemantics(targetCode, expectedOutput, task.sampleInput || '', topicId);
      const flowCards = curated.flowCards;
      const scenes = curated.scenes;

      const steps = scenes.map((sc, idx) => ({
        stepNumber: idx + 1,
        title: sc.stepBadgeEn,
        narration: sc.spokenNarrationEn,
        conceptTip: (sc.explanationPartsEn?.text1 || '') + (sc.explanationPartsEn?.codePill1 || ''),
        patternPreview: sc.explanationPartsEn?.codePill1 || 'concept',
        terminalLines: idx >= scenes.length - 2 ? [expectedOutput] : [],
        visualState: {
          activeLineIndex: sc.activeLineNumbers[0] ? sc.activeLineNumbers[0] - 1 : 0,
          glowTarget: sc.highlightPart === 'function' ? 'func' : sc.highlightPart === 'argument' ? 'arg' : 'console',
          wandPosition: { x: 50, y: 50 },
          beamConnected: true,
          card1Active: sc.visualCardsState?.card1?.status === 'active',
          card2Active: sc.visualCardsState?.card2?.status === 'active',
          card3Active: sc.visualCardsState?.card3?.status === 'active',
        },
      }));

      return {
        planId: `py_t${topicId}_q${task.id}`,
        questionIds: [task.id, task.taskNumber || taskNum],
        topicId,
        questionTitle: curated.title,
        conceptTag: 'variables_and_types',
        archetype: 'stream',
        summaryExplanation: scenes[0]?.spokenNarrationEn || '',
        thinkingPrompt: 'Observe how Python stores, reassigns, and prints variable data.',
        nodes: flowCards.map((c, i) => ({
          nodeId: `node_${i}`,
          label: c.pillText,
          status: 'pending',
          explanationEn: c.captionEn,
          explanationHi: c.captionHi,
        })),
        steps,
        totalSteps: steps.length,
        estimatedDurationSec: 35,
        learningObjectives: [
          'Understand variable containers and assignment in Python',
          'Track variable mutation, reassignment, and value overwriting',
          'Master fundamental data types: string, integer, float, boolean',
        ],
        postSolveWalkthrough: {
          annotatedCode: targetCode,
          explanationPoints: [
            scenes[0]?.spokenNarrationEn || '',
            scenes[1]?.spokenNarrationEn || '',
            scenes[2]?.spokenNarrationEn || '',
          ],
          conceptSummary: `Deep-dive execution model for ${curated.title}`,
          keyTakeaway: 'Variables hold values that can be referenced and updated dynamically.',
        },
        referenceCode: targetCode,
        scenes,
        flowCards,
        semantics,
      } as unknown as VisualHintAnimationPlan;
    }
  }

  // If Topic 4 (id 3 / id 4 / Operators), deliver curated curriculum lesson for Q1-Q3
  const isTopic3 = topicId === 7 || (topicId === 3 && (task.title?.toLowerCase().includes('input') || (task as any).problemStatement?.toLowerCase().includes('input')));
  if (isTopic3) {
    const taskNum = task.taskNumber || (task.id >= 701 && task.id <= 710 ? task.id - 700 : (task.id % 100)) || 1;
    const curated = getCuratedTopic3Lesson(taskNum);
    if (curated) {
      const targetCode = curated.code;
      const expectedOutput = curated.expectedOutput;
      const semantics = parseProgramSemantics(targetCode, expectedOutput, task.sampleInput || '', topicId);
      const flowCards = curated.flowCards;
      const scenes = curated.scenes;

      const steps = scenes.map((sc, idx) => ({
        stepNumber: idx + 1,
        title: sc.stepBadgeEn,
        narration: sc.spokenNarrationEn,
        conceptTip: (sc.explanationPartsEn?.text1 || '') + (sc.explanationPartsEn?.codePill1 || ''),
        patternPreview: sc.explanationPartsEn?.codePill1 || 'concept',
        terminalLines: idx >= scenes.length - 2 ? [expectedOutput] : [],
        visualState: {
          activeLineIndex: sc.activeLineNumbers[0] ? sc.activeLineNumbers[0] - 1 : 0,
          glowTarget: sc.highlightPart === 'function' ? 'func' : sc.highlightPart === 'argument' ? 'arg' : 'console',
          wandPosition: { x: 50, y: 50 },
          beamConnected: true,
          card1Active: sc.visualCardsState?.card1?.status === 'active',
          card2Active: sc.visualCardsState?.card2?.status === 'active',
          card3Active: sc.visualCardsState?.card3?.status === 'active',
        },
      }));

      return {
        planId: `py_t${topicId}_q${task.id}`,
        questionIds: [task.id, task.taskNumber || taskNum],
        topicId,
        questionTitle: curated.title,
        conceptTag: 'input_output',
        archetype: 'stream',
        summaryExplanation: scenes[0]?.spokenNarrationEn || '',
        thinkingPrompt: 'Observe how Python reads user input, binds it to variables, and formats outputs.',
        nodes: flowCards.map((c, i) => ({
          nodeId: `node_${i}`,
          label: c.pillText,
          status: 'pending',
          explanationEn: c.captionEn,
          explanationHi: c.captionHi,
        })),
        steps,
        totalSteps: steps.length,
        estimatedDurationSec: 35,
        learningObjectives: [
          'Master input() function for receiving user input',
          'Understand that input() always returns string data',
          'Combine inputs with print() for clean, interactive console outputs',
        ],
        recapDetails: {
          bulletPoints: [
            scenes[0]?.spokenNarrationEn || '',
            scenes[1]?.spokenNarrationEn || '',
            scenes[2]?.spokenNarrationEn || '',
          ],
          conceptSummary: `Interactive Input and Output model for ${curated.title}`,
          keyTakeaway: 'The input() function pauses execution and captures user strings dynamically.',
        },
        referenceCode: targetCode,
        scenes,
        flowCards,
        semantics,
      } as unknown as VisualHintAnimationPlan;
    }
  }

  // If Topic 4 (id 3 / id 4 / Operators), deliver curated curriculum lesson for Q1-Q12
  const isTopic4 = (topicId === 3 && !task.title?.toLowerCase().includes('input')) || topicId === 4 || task.title?.toLowerCase().includes('operator') || (task as any).problemStatement?.toLowerCase().includes('operator') || (task.solution && (task.solution.includes('result = a + b') || task.solution.includes('a // b') || task.solution.includes('num ** 2') || task.solution.includes('10 + 5 * 2') || task.solution.includes('a == b') || task.solution.includes('eligible =') || task.solution.includes('has_id or') || task.solution.includes('score +=') || task.solution.includes('fruits =') || task.solution.includes('price = 200')));
  if (isTopic4) {
    const taskNum = task.taskNumber || (task.id >= 301 && task.id <= 312 ? task.id - 300 : (task.id % 100)) || 1;
    const curated = getCuratedTopic4Lesson(taskNum);
    if (curated) {
      const targetCode = curated.code;
      const expectedOutput = curated.expectedOutput;
      const semantics = parseProgramSemantics(targetCode, expectedOutput, task.sampleInput || '', topicId);
      const flowCards = curated.flowCards;
      const scenes = curated.scenes;

      const steps = scenes.map((sc, idx) => ({
        stepNumber: idx + 1,
        title: sc.stepBadgeEn,
        narration: sc.spokenNarrationEn,
        conceptTip: (sc.explanationPartsEn?.text1 || '') + (sc.explanationPartsEn?.codePill1 || ''),
        patternPreview: sc.explanationPartsEn?.codePill1 || 'operator',
        terminalLines: idx >= scenes.length - 2 ? [expectedOutput] : [],
        visualState: {
          activeLineIndex: sc.activeLineNumbers[0] ? sc.activeLineNumbers[0] - 1 : 0,
          glowTarget: sc.highlightPart === 'function' ? 'func' : sc.highlightPart === 'argument' ? 'arg' : 'console',
          wandPosition: { x: 50, y: 50 },
          beamConnected: true,
          card1Active: sc.visualCardsState?.card1?.status === 'active',
          card2Active: sc.visualCardsState?.card2?.status === 'active',
          card3Active: sc.visualCardsState?.card3?.status === 'active',
        },
      }));

      return {
        planId: `py_t${topicId}_q${task.id}`,
        questionIds: [task.id, task.taskNumber || taskNum],
        topicId,
        questionTitle: curated.title,
        conceptTag: 'operators',
        difficulty: 'Easy',
        flowDiagramNodes: flowCards.map((c, i) => ({
          nodeId: `node_${i}`,
          label: c.pillText,
          status: 'pending',
          explanationEn: c.captionEn,
          explanationHi: c.captionHi,
        })),
        steps,
        totalSteps: steps.length,
        estimatedDurationSec: 35,
        learningObjectives: [
          'Understand arithmetic operators in Python',
          'Learn how expressions evaluate with +, -, *, /, //, and %',
          'Observe execution output in the terminal',
        ],
        recapDetails: {
          bulletPoints: [
            scenes[0]?.spokenNarrationEn || '',
            scenes[1]?.spokenNarrationEn || '',
            scenes[2]?.spokenNarrationEn || '',
          ],
          conceptSummary: `Python Operators execution model for ${curated.title}`,
          keyTakeaway: 'Operators perform mathematical and logical calculations on variables and values.',
        },
        referenceCode: targetCode,
        scenes,
        flowCards,
        semantics,
      } as unknown as VisualHintAnimationPlan;
    }
  }

  let targetCode = (task.solution && task.solution.trim().length > 0) ? task.solution.trim() : '';
  if (!targetCode) {
    const taskNum = task.taskNumber || (task.id % 100) || 1;
    const verified = getVerifiedSolutionForTask(topicId, taskNum);
    if (verified?.solution) {
      targetCode = verified.solution.trim();
    }
  }

  if (!targetCode) {
    console.error(`[Data Integrity Error] No validated reference solution exists for challenge "${task.title}" (Topic ${topicId})`);
    throw new Error(`Unable to load Visual Hint: No validated Python solution exists for challenge "${task.title}".`);
  }

  const expectedOutput = task.sampleOutput || 'Hello, World!';

  // Deep Program Semantics Analysis with Topic-Aware Pedagogical Concept
  const semantics = parseProgramSemantics(targetCode, expectedOutput, task.sampleInput || '', topicId);
  const flowCards = composeUniversalVisualCards(semantics);
  const scenes = generateUniversalScenes(semantics, flowCards);

  const steps = scenes.map((sc, idx) => ({
    stepNumber: idx + 1,
    title: sc.stepBadgeEn,
    narration: sc.spokenNarrationEn,
    conceptTip: sc.explanationPartsEn.text1 + sc.explanationPartsEn.codePill1,
    patternPreview: sc.explanationPartsEn.codePill1 || 'concept',
    terminalLines: idx >= 2 ? [expectedOutput] : [],
    visualState: {
      activeLineIndex: sc.activeLineNumbers[0] ? sc.activeLineNumbers[0] - 1 : 0,
      glowTarget: sc.highlightPart === 'function' ? 'func' : sc.highlightPart === 'argument' ? 'arg' : 'console',
      wandPosition: { x: 50, y: 50 },
      beamConnected: true,
      card1Active: idx === 0,
      card2Active: idx === 1,
      card3Active: idx >= 2,
    },
  }));

  return {
    planId: `py_t${topicId}_q${task.id}`,
    questionIds: [task.id, task.taskNumber || 1],
    topicId,
    questionTitle: task.title,
    conceptTag: semantics.primaryConceptType,
    archetype: 'stream',
    summaryExplanation: scenes[0]?.spokenNarrationEn || '',
    thinkingPrompt: `Observe how Python executes ${semantics.primaryConceptType} step by step.`,
    nodes: flowCards.map((c, i) => ({
      nodeId: `node_${i}`,
      label: c.pillText,
      status: 'pending',
      explanationEn: c.captionEn,
      explanationHi: c.captionHi,
    })),
    steps,
    totalSteps: steps.length,
    estimatedDurationSec: 42,
    learningObjectives: [
      'Master syntax and structural execution of Python programs',
      'Track memory, variables, control flow and data structures accurately',
      'Understand the relationship between code logic and console output',
    ],
    postSolveWalkthrough: {
      annotatedCode: targetCode,
      explanationPoints: [
        scenes[0]?.spokenNarrationEn || '',
        scenes[1]?.spokenNarrationEn || '',
        scenes[2]?.spokenNarrationEn || '',
      ],
      conceptSummary: `Deep-dive execution model for ${semantics.primaryConceptType}`,
      keyTakeaway: 'Always verify how state transitions occur before outputting results.',
    },
    referenceCode: targetCode,
    scenes,
    flowCards,
    semantics,
  } as unknown as VisualHintAnimationPlan;
}
