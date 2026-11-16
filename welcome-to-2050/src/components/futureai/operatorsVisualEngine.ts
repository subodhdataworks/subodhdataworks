import { TopicQuestion } from './data/pythonBasics140QuestionsData';
import {
  TeachingStep,
  ProgressiveHint,
  QuestionV5Config,
  ConceptBox,
  diagnoseHelloWorldError,
} from './smartClassroomV5Engine';

export type OperatorVisualType =
  | 'arithmetic'
  | 'assignment'
  | 'comparison'
  | 'logical'
  | 'expression_tree'
  | 'division'
  | 'power'
  | 'type'
  | 'membership'
  | 'identity'
  | 'console'
  | 'condition_eval'
  | 'decision_flow'
  | 'if_else_branch'
  | 'elif_ladder'
  | 'nested_condition'
  | 'logical_condition'
  | 'indentation_block'
  | 'variable_state'
  | 'char_index_map'
  | 'slicing_visual'
  | 'string_transform'
  | 'concatenation'
  | 'repetition'
  | 'string_search'
  | 'string_split'
  | 'string_join'
  | 'escape_sequence'
  | 'fstring_visual'
  | 'string_iteration'
  | 'unicode_visual'
  | 'list_element_map'
  | 'tuple_element_map'
  | 'indexing_visual'
  | 'mutation_visual'
  | 'append_insert_extend'
  | 'remove_pop_clear'
  | 'sorting_visual'
  | 'list_comprehension'
  | 'nested_list_grid'
  | 'tuple_pack_unpack'
  | 'mutability_comparison'
  | 'copy_reference'
  | 'set_element_visual'
  | 'duplicate_removal_visual'
  | 'set_operation_visual'
  | 'set_mutation_visual'
  | 'set_comprehension_visual'
  | 'dict_mapping_visual'
  | 'dict_access_visual'
  | 'dict_mutation_visual'
  | 'dict_views_visual'
  | 'dict_iteration_visual'
  | 'nested_dict_visual'
  | 'dict_comprehension_visual'
  | 'hashability_visual'
  | 'problem_understanding'
  | 'algorithm_blueprint'
  | 'number_algorithm'
  | 'digit_extraction'
  | 'prime_factor_visual'
  | 'palindrome_two_pointer'
  | 'fibonacci_dp'
  | 'binary_search'
  | 'kadane_subarray'
  | 'stack_queue_visual'
  | 'function_call_stack'
  | 'dry_run_trace'
  | 'class_definition_visual'
  | 'object_creation_visual'
  | 'self_reference_visual'
  | 'instance_attribute_visual'
  | 'class_attribute_visual'
  | 'object_mutation_visual'
  | 'method_call_visual'
  | 'inheritance_tree_visual'
  | 'method_overriding_visual'
  | 'super_mro_visual'
  | 'encapsulation_visual'
  | 'polymorphism_visual'
  | 'abstraction_visual'
  | 'composition_visual'
  | 'magic_method_visual';

export interface CharIndexCell {
  char: string;
  posIdx: number;
  negIdx: number;
  isSelected?: boolean;
}

export interface EvaluatedOperandInfo {
  label: string;
  expr: string;
  value: string;
  dataType: string;
}

export interface IntermediateEvalStep {
  expr: string;
  result: string;
  rule: string;
}

export interface VariableSnapshot {
  name: string;
  prevValue?: string;
  value: string;
  dataType: string;
}

export interface OperatorVisualDetails {
  visualType: OperatorVisualType;
  technicalConcept: string;
  activeSourceRange: {
    line: number;
    startCol: number;
    endCol: number;
    codeText: string;
  };
  operatorSymbol?: string;
  operatorMeaning?: string;
  evaluatedOperands?: EvaluatedOperandInfo[];
  intermediateSteps?: IntermediateEvalStep[];
  intermediateResult?: string;
  variableSnapshots?: VariableSnapshot[];
  shortCircuitNote?: string;
  conditionExpression?: string;
  conditionResult?: boolean;
  selectedBranch?: string;
  skippedBranches?: string[];
  indentationInfo?: string;
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
  problemSolvingInfo?: {
    patternName: string;
    inputSummary: string;
    outputSummary: string;
    algorithmSteps: string[];
    whyItWorks: string;
    timeComplexity: string;
    spaceComplexity: string;
    complexityReason: string;
    pointers?: { name: string; index: number; value?: string }[];
    callStack?: string[];
  };
  oopInfo?: {
    conceptCategory: string;
    activeClass?: string;
    activeObject?: string;
    currentMethod?: string;
    selfBinding?: string;
    mroChain?: string[];
    inheritanceEdges?: { child: string; parents: string[] }[];
    classesSnapshot?: {
      className: string;
      bases: string[];
      mro: string[];
      classAttributes: { name: string; value: string }[];
      methods: {
        name: string;
        kind:
          | 'instance'
          | 'classmethod'
          | 'staticmethod'
          | 'property'
          | 'setter'
          | 'abstractmethod'
          | 'magic';
      }[];
      isAbstract?: boolean;
    }[];
    instancesSnapshot?: {
      instanceId: string;
      className: string;
      boundVariables: string[];
      attributes: { name: string; value: string; prevValue?: string; mangledFrom?: string }[];
    }[];
    callStack?: string[];
    lookupPath?: string;
    returnValue?: string;
    oopRuleNote?: string;
  };
}

export function isOperatorsTopic(topicId: string): boolean {
  return topicId.startsWith('py_02_operators');
}

interface RuntimeVal {
  val: any;
  type: 'Integer' | 'Float' | 'Boolean' | 'String' | 'List' | 'Dict' | 'NoneType';
  objId: number;
}

let nextObjId = 1;

function formatVal(v: RuntimeVal | undefined): string {
  if (!v) return 'None';
  if (v.type === 'NoneType') return 'None';
  if (v.type === 'Boolean') return v.val ? 'True' : 'False';
  if (v.type === 'String') return `"${v.val}"`;
  if (v.type === 'List') return `[${(v.val as any[]).map((x) => (typeof x === 'string' ? `'${x}'` : String(x))).join(', ')}]`;
  if (v.type === 'Dict') {
    const entries = Object.entries(v.val || {}).map(([k, val]) => `'${k}': ${typeof val === 'string' ? `'${val}'` : String(val)}`);
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
  if (!v) return 'None';
  if (v.type === 'String') return String(v.val);
  return formatVal(v);
}

function inferRuntimeVal(raw: any, forceFloat = false): RuntimeVal {
  if (raw === null || raw === undefined) {
    return { val: null, type: 'NoneType', objId: 0 };
  }
  if (typeof raw === 'boolean') {
    return { val: raw, type: 'Boolean', objId: raw ? 1 : 2 };
  }
  if (typeof raw === 'number') {
    const isF = forceFloat || !Number.isInteger(raw);
    return { val: raw, type: isF ? 'Float' : 'Integer', objId: nextObjId++ };
  }
  if (typeof raw === 'string') {
    return { val: raw, type: 'String', objId: nextObjId++ };
  }
  if (Array.isArray(raw)) {
    return { val: raw, type: 'List', objId: nextObjId++ };
  }
  if (typeof raw === 'object') {
    return { val: raw, type: 'Dict', objId: nextObjId++ };
  }
  return { val: String(raw), type: 'String', objId: nextObjId++ };
}

const OPERATOR_META: Record<
  string,
  {
    name: string;
    visualType: OperatorVisualType;
    meaningHinglish: string;
    meaningEnglish: string;
    whyHinglish: string;
  }
> = {
  '+': {
    name: 'Addition Operator (+)',
    visualType: 'arithmetic',
    meaningHinglish: 'Do numeric Operands ko jodkar Sum nikalta hai (ya Strings ko concatenate karta hai).',
    meaningEnglish: 'Adds two numeric Operands to produce their Sum (or concatenates Strings).',
    whyHinglish: '`+` Addition Operator hai. Yeh Left Operand aur Right Operand ki values ko add karke total Result return karta hai.',
  },
  '-': {
    name: 'Subtraction Operator (-)',
    visualType: 'arithmetic',
    meaningHinglish: 'Left Operand mein se Right Operand ko subtract karke Difference nikalta hai.',
    meaningEnglish: 'Subtracts the Right Operand from the Left Operand to find the Difference.',
    whyHinglish: '`-` Subtraction Operator hai. Yeh pehli Value mein se doosri Value ghata kar Difference calculate karta hai.',
  },
  '*': {
    name: 'Multiplication Operator (*)',
    visualType: 'arithmetic',
    meaningHinglish: 'Do Operands ko multiply karke Product calculate karta hai.',
    meaningEnglish: 'Multiplies two Operands to compute their Product.',
    whyHinglish: '`*` Multiplication Operator hai. Yeh dono Operands ko guna karke Product return karta hai.',
  },
  '/': {
    name: 'True Division Operator (/)',
    visualType: 'division',
    meaningHinglish: 'True Division karta hai aur hamesha exact Float (decimal) Result return karta hai.',
    meaningEnglish: 'Performs True Division and always returns a Float (decimal) Result.',
    whyHinglish: '`/` True Division Operator hai. Python mein `/` hamesha exact decimal (`Float`) Quotient return karta hai, chahe numbers poore divide ho jayein.',
  },
  '//': {
    name: 'Floor Division Operator (//)',
    visualType: 'division',
    meaningHinglish: 'Division ke baad decimal part hata kar floor whole Quotient deta hai.',
    meaningEnglish: 'Divides and rounds down to the nearest whole floor Quotient.',
    whyHinglish: '`//` Floor Division Operator hai. Yeh division ke baad decimal point ke baad ka hissa hata kar whole Integer Quotient deta hai (negative numbers mein neeche ki taraf round karta hai).',
  },
  '%': {
    name: 'Modulo / Remainder Operator (%)',
    visualType: 'division',
    meaningHinglish: 'Division ke baad bachne wala Remainder (shesh) return karta hai.',
    meaningEnglish: 'Returns the Remainder left over after division.',
    whyHinglish: '`%` Modulo Operator hai. Yeh division karne ke baad jo Remainder (shesh) bachta hai wo return karta hai, jaise last digit nikalna ya divisibility check karna.',
  },
  '**': {
    name: 'Exponentiation / Power Operator (**)',
    visualType: 'power',
    meaningHinglish: 'Base Operand ko Exponent power tak raise karta hai (Base ^ Exponent).',
    meaningEnglish: 'Raises the Base Operand to the power of the Exponent.',
    whyHinglish: '`**` Power (Exponentiation) Operator hai. Yeh ordinary multiplication (`*`) nahi hai — yeh Base ko Exponent times khud se multiply karta hai.',
  },
  '==': {
    name: 'Equality Comparison Operator (==)',
    visualType: 'comparison',
    meaningHinglish: 'Check karta hai ki dono Operands ki Values barabar hain ya nahi (True/False).',
    meaningEnglish: 'Compares whether both Operands have equal Values, returning Boolean True or False.',
    whyHinglish: '`==` Comparison Operator hai. Yeh dono Values ko Compare karke Boolean `True` ya `False` Return karta hai. Yeh `=` Assignment Operator se bilkul alag hai.',
  },
  '!=': {
    name: 'Not Equal Comparison Operator (!=)',
    visualType: 'comparison',
    meaningHinglish: 'Check karta hai ki dono Operands ki Values alag-alag hain ya nahi (True/False).',
    meaningEnglish: 'Checks whether two Operands have different Values, returning True or False.',
    whyHinglish: '`!=` Not Equal Comparison Operator hai. Agar dono Operands ki Values barabar nahi hain toh yeh `True` return karta hai, warna `False`.',
  },
  '>': {
    name: 'Greater Than Operator (>)',
    visualType: 'comparison',
    meaningHinglish: 'Check karta hai ki Left Operand Right Operand se bada hai ya nahi.',
    meaningEnglish: 'Checks if the Left Operand is strictly greater than the Right Operand.',
    whyHinglish: '`>` Greater Than Comparison Operator hai. Agar Left Value Right Value se badi hai toh Boolean `True` milta hai, warna `False`.',
  },
  '<': {
    name: 'Less Than Operator (<)',
    visualType: 'comparison',
    meaningHinglish: 'Check karta hai ki Left Operand Right Operand se chhota hai ya nahi.',
    meaningEnglish: 'Checks if the Left Operand is strictly less than the Right Operand.',
    whyHinglish: '`<` Less Than Comparison Operator hai. Agar Left Value Right Value se chhoti hai toh Boolean `True` return hota hai, warna `False`.',
  },
  '>=': {
    name: 'Greater Than or Equal Operator (>=)',
    visualType: 'comparison',
    meaningHinglish: 'Check karta hai ki Left Value Right Value ke barabar ya usse badi hai.',
    meaningEnglish: 'Checks if Left Operand is greater than or equal to Right Operand.',
    whyHinglish: '`>=` Greater Than or Equal Operator hai. Minimum threshold (jaise passing marks) check karne ke liye iska use hota hai.',
  },
  '<=': {
    name: 'Less Than or Equal Operator (<=)',
    visualType: 'comparison',
    meaningHinglish: 'Check karta hai ki Left Value Right Value ke barabar ya usse chhoti hai.',
    meaningEnglish: 'Checks if Left Operand is less than or equal to Right Operand.',
    whyHinglish: '`<=` Less Than or Equal Operator hai. Maximum limit (jaise budget cap) check karne ke liye yeh Boolean `True` ya `False` deta hai.',
  },
  'and': {
    name: 'Logical AND Operator (and)',
    visualType: 'logical',
    meaningHinglish: 'Dono conditions True hone par hi True deta hai (Short-circuit agar pehla False ho).',
    meaningEnglish: 'Returns True only if both conditions are True (Short-circuits if left is False).',
    whyHinglish: '`and` Logical Operator hai. Jab humein ek saath dono conditions True chahiye hoti hain tab `and` use hota hai. Agar pehla Operand `False` ho toh Python Short-Circuit karke turant `False` de deta hai.',
  },
  'or': {
    name: 'Logical OR Operator (or)',
    visualType: 'logical',
    meaningHinglish: 'Koi bhi ek condition True hone par True deta hai (Short-circuit agar pehla True ho).',
    meaningEnglish: 'Returns True if at least one condition is True (Short-circuits if left is True).',
    whyHinglish: '`or` Logical Operator hai. Dono mein se koi ek condition bhi `True` ho toh Result `True` aata hai. Agar pehla Operand `True` mil jaye toh Python Short-Circuit karke turant `True` return karta hai.',
  },
  'not': {
    name: 'Logical NOT Operator (not)',
    visualType: 'logical',
    meaningHinglish: 'Boolean truth value ko invert (True ko False, False ko True) karta hai.',
    meaningEnglish: 'Inverts the Boolean value (True becomes False, False becomes True).',
    whyHinglish: '`not` Unary Logical Operator hai. Yeh apne Operand ki Boolean Value ko ulta (invert) kar deta hai — `True` ko `False` aur `False` ko `True`.',
  },
  'in': {
    name: 'Membership Operator (in)',
    visualType: 'membership',
    meaningHinglish: 'Check karta hai ki element kisi String, List, ya Dict keys mein maujood hai ya nahi.',
    meaningEnglish: 'Checks whether an item exists inside a sequence or collection.',
    whyHinglish: '`in` Membership Operator hai. Yeh sequence (String, List, ya Dictionary keys) ke andar target value search karke Boolean `True` ya `False` return karta hai.',
  },
  'not in': {
    name: 'Negative Membership Operator (not in)',
    visualType: 'membership',
    meaningHinglish: 'Check karta hai ki element collection mein maujood NAHI hai.',
    meaningEnglish: 'Checks that an item is NOT present in a collection.',
    whyHinglish: '`not in` Membership Operator hai. Agar target value sequence ke andar maujood nahi hai toh yeh Boolean `True` return karta hai.',
  },
  'is': {
    name: 'Identity Operator (is)',
    visualType: 'identity',
    meaningHinglish: 'Check karta hai ki dono variables memory mein exact same Object ko point kar rahe hain ya nahi.',
    meaningEnglish: 'Checks whether both variables point to the exact same Object in memory.',
    whyHinglish: '`is` Identity Operator hai. `==` sirf values compare karta hai, jabki `is` check karta hai ki dono variables memory mein ek hi Object reference share karte hain ya nahi (aur `None` check karne ke liye).',
  },
  'is not': {
    name: 'Negative Identity Operator (is not)',
    visualType: 'identity',
    meaningHinglish: 'Check karta hai ki dono variables memory mein alag-alag Objects hain.',
    meaningEnglish: 'Checks whether two variables refer to distinct Objects in memory.',
    whyHinglish: '`is not` Identity Operator hai. Yeh verify karta hai ki dono references memory mein alag-alag Objects ko point kar rahe hain (ya value `None` nahi hai).',
  },
  '=': {
    name: 'Assignment Operator (=)',
    visualType: 'assignment',
    meaningHinglish: 'Right-hand side ki evaluated value ko Left-hand side ke Variable mein store karta hai.',
    meaningEnglish: 'Stores the evaluated right-hand side value into the left-hand side Variable.',
    whyHinglish: '`=` Assignment Operator hai. Pehle Right Side ki Expression evaluate hoti hai, uske baad Result Left Side ke Variable mein store hota hai.',
  },
  '+=': {
    name: 'Add & Assign Operator (+=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ki purani value mein right-hand value add karke usi Variable ko update karta hai.',
    meaningEnglish: 'Adds the right-hand value to the variable’s current value and updates it in place.',
    whyHinglish: '`+=` Augmented Assignment Operator hai. Yeh Variable ki purani Value mein naya Operand jodkar updated Result wapas usi Variable mein store kar deta hai (`x = x + val`).',
  },
  '-=': {
    name: 'Subtract & Assign Operator (-=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ki purani value mein se right-hand value ghata kar usi Variable ko update karta hai.',
    meaningEnglish: 'Subtracts the right-hand value from the variable and updates it in place.',
    whyHinglish: '`-=` Augmented Assignment Operator hai. Yeh Variable ki current Value mein se Right Operand subtract karke nayi Value wapas usi Variable mein save karta hai (`x = x - val`).',
  },
  '*=': {
    name: 'Multiply & Assign Operator (*=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ki purani value ko right-hand value se multiply karke update karta hai.',
    meaningEnglish: 'Multiplies the variable by the right-hand value and updates it in place.',
    whyHinglish: '`*=` Augmented Assignment Operator hai. Yeh Variable ki purani Value ko Right Operand se multiply karke updated Result usi Variable mein store karta hai (`x = x * val`).',
  },
  '/=': {
    name: 'Divide & Assign Operator (/=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ki purani value ko divide karke Float result usi Variable mein store karta hai.',
    meaningEnglish: 'Divides the variable and updates it with the Float quotient.',
    whyHinglish: '`/=` Augmented Assignment Operator hai. Yeh Variable ko Right Operand se True Divide karke resulting Float value wapas usi Variable mein store karta hai.',
  },
  '//=': {
    name: 'Floor Divide & Assign Operator (//=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ko floor divide karke whole quotient usi Variable mein update karta hai.',
    meaningEnglish: 'Floor-divides the variable and updates it in place.',
    whyHinglish: '`//=` Augmented Assignment Operator hai. Yeh Variable ki value par Floor Division karke whole Integer quotient wapas usi Variable mein save karta hai.',
  },
  '%=': {
    name: 'Modulo & Assign Operator (%=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ko divide karke bachne wala Remainder usi Variable mein store karta hai.',
    meaningEnglish: 'Computes the remainder and updates the variable in place.',
    whyHinglish: '`%=` Augmented Assignment Operator hai. Yeh division ka Remainder nikal kar wapas usi Variable mein update kar deta hai.',
  },
  '**=': {
    name: 'Power & Assign Operator (**=)',
    visualType: 'assignment',
    meaningHinglish: 'Variable ki value ko power par raise karke usi Variable mein update karta hai.',
    meaningEnglish: 'Raises the variable to the given power and updates it in place.',
    whyHinglish: '`**=` Augmented Assignment Operator hai. Yeh Variable ki Base value ko Exponent power tak raise karke updated Result wapas usi Variable mein store karta hai.',
  },
};

function evalPyExpr(
  rawExpr: string,
  env: Record<string, RuntimeVal>,
  inputs: string[]
): {
  result: RuntimeVal;
  primaryOp?: string;
  operands?: EvaluatedOperandInfo[];
  intermediateSteps?: IntermediateEvalStep[];
  shortCircuitNote?: string;
  consumedInputPrompt?: string;
  isTypeConversion?: string;
} {
  const expr = rawExpr.trim();

  // 1. Check int(input(...)) or float(input(...)) or input(...)
  const intInMatch = expr.match(/^int\s*\(\s*input\s*\((.*)\)\s*\)$/);
  if (intInMatch) {
    const promptRaw = intInMatch[1].trim().replace(/^["']|["']$/g, '');
    const nextIn = inputs.length > 0 ? inputs.shift()! : '10';
    const parsed = parseInt(nextIn.trim(), 10);
    const numVal = isNaN(parsed) ? 0 : parsed;
    const rv = inferRuntimeVal(numVal, false);
    return {
      result: rv,
      isTypeConversion: 'int(input())',
      consumedInputPrompt: promptRaw ? `${promptRaw}${nextIn}` : nextIn,
      operands: [
        { label: 'Raw Input', expr: 'input()', value: `"${nextIn}"`, dataType: 'String' },
        { label: 'Converted', expr: 'int(...)', value: String(numVal), dataType: 'Integer' },
      ],
      intermediateSteps: [
        { expr: `input(${intInMatch[1]})`, result: `"${nextIn}" (String)`, rule: 'Read keyboard text input' },
        { expr: `int("${nextIn}")`, result: `${numVal} (Integer)`, rule: 'Type conversion String -> Integer' },
      ],
    };
  }

  const floatInMatch = expr.match(/^float\s*\(\s*input\s*\((.*)\)\s*\)$/);
  if (floatInMatch) {
    const promptRaw = floatInMatch[1].trim().replace(/^["']|["']$/g, '');
    const nextIn = inputs.length > 0 ? inputs.shift()! : '10.0';
    const parsed = parseFloat(nextIn.trim());
    const numVal = isNaN(parsed) ? 0.0 : parsed;
    const rv = inferRuntimeVal(numVal, true);
    return {
      result: rv,
      isTypeConversion: 'float(input())',
      consumedInputPrompt: promptRaw ? `${promptRaw}${nextIn}` : nextIn,
      operands: [
        { label: 'Raw Input', expr: 'input()', value: `"${nextIn}"`, dataType: 'String' },
        { label: 'Converted', expr: 'float(...)', value: formatVal(rv), dataType: 'Float' },
      ],
      intermediateSteps: [
        { expr: `input(${floatInMatch[1]})`, result: `"${nextIn}" (String)`, rule: 'Read keyboard text input' },
        { expr: `float("${nextIn}")`, result: `${formatVal(rv)} (Float)`, rule: 'Type conversion String -> Float' },
      ],
    };
  }

  const plainInMatch = expr.match(/^input\s*\((.*)\)$/);
  if (plainInMatch) {
    const promptRaw = plainInMatch[1].trim().replace(/^["']|["']$/g, '');
    const nextIn = inputs.length > 0 ? inputs.shift()! : '';
    const rv = inferRuntimeVal(nextIn, false);
    return {
      result: rv,
      isTypeConversion: 'input()',
      consumedInputPrompt: promptRaw ? `${promptRaw}${nextIn}` : nextIn,
      operands: [{ label: 'Input String', expr: 'input()', value: `"${nextIn}"`, dataType: 'String' }],
    };
  }

  // 2. Check .copy() on a variable: a.copy()
  const copyMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\.copy\(\)$/);
  if (copyMatch) {
    const baseVar = env[copyMatch[1]];
    const cloned = Array.isArray(baseVar?.val) ? [...baseVar.val] : [];
    const rv: RuntimeVal = { val: cloned, type: 'List', objId: nextObjId++ };
    return {
      result: rv,
      operands: [
        { label: 'Source List', expr: copyMatch[1], value: formatVal(baseVar), dataType: 'List' },
        { label: 'New Clone', expr: `${copyMatch[1]}.copy()`, value: formatVal(rv), dataType: 'List (New Memory Object)' },
      ],
    };
  }

  // 3. Check List literal [...] or Dict literal {...} or None / True / False
  if (expr === 'None') return { result: { val: null, type: 'NoneType', objId: 0 } };
  if (expr === 'True') return { result: { val: true, type: 'Boolean', objId: 1 } };
  if (expr === 'False') return { result: { val: false, type: 'Boolean', objId: 2 } };

  if (expr.startsWith('[') && expr.endsWith(']')) {
    const inner = expr.slice(1, -1).trim();
    const items = inner
      ? inner.split(',').map((s) => {
          const t = s.trim();
          if ((t.startsWith("'") && t.endsWith("'")) || (t.startsWith('"') && t.endsWith('"'))) {
            return t.slice(1, -1);
          }
          return Number(t);
        })
      : [];
    return { result: { val: items, type: 'List', objId: nextObjId++ } };
  }

  if (expr.startsWith('{') && expr.endsWith('}')) {
    const inner = expr.slice(1, -1).trim();
    const obj: Record<string, any> = {};
    if (inner) {
      inner.split(',').forEach((pair) => {
        const [kRaw, vRaw] = pair.split(':').map((s) => s.trim());
        if (kRaw && vRaw !== undefined) {
          const k = kRaw.replace(/^['"]|['"]$/g, '');
          const v =
            (vRaw.startsWith("'") && vRaw.endsWith("'")) || (vRaw.startsWith('"') && vRaw.endsWith('"'))
              ? vRaw.slice(1, -1)
              : Number(vRaw);
          obj[k] = v;
        }
      });
    }
    return { result: { val: obj, type: 'Dict', objId: nextObjId++ } };
  }

  // Direct variable lookup (preserves exact objId for `b = a` identity checks!)
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr) && env[expr]) {
    const v = env[expr];
    return {
      result: v,
      operands: [{ label: `Variable ${expr}`, expr, value: formatVal(v), dataType: v.type }],
    };
  }

  // String literal
  if ((expr.startsWith('"') && expr.endsWith('"') && !expr.slice(1, -1).includes('"')) ||
      (expr.startsWith("'") && expr.endsWith("'") && !expr.slice(1, -1).includes("'"))) {
    return { result: inferRuntimeVal(expr.slice(1, -1)) };
  }

  // Numeric literal
  if (/^-?\d+(\.\d+)?$/.test(expr)) {
    const isF = expr.includes('.');
    return { result: inferRuntimeVal(Number(expr), isF) };
  }

  // 4. Identity operators: `is not`, `is`
  const isNotMatch = expr.match(/^(.+?)\s+is\s+not\s+(.+)$/);
  if (isNotMatch) {
    const leftEv = evalPyExpr(isNotMatch[1], env, inputs);
    const rightEv = evalPyExpr(isNotMatch[2], env, inputs);
    const sameObj =
      leftEv.result.type === 'NoneType' && rightEv.result.type === 'NoneType'
        ? true
        : leftEv.result.objId === rightEv.result.objId;
    const resBool = !sameObj;
    return {
      result: inferRuntimeVal(resBool),
      primaryOp: 'is not',
      operands: [
        { label: 'Left Object', expr: isNotMatch[1].trim(), value: formatVal(leftEv.result), dataType: `${leftEv.result.type} (id #${leftEv.result.objId})` },
        { label: 'Right Object', expr: isNotMatch[2].trim(), value: formatVal(rightEv.result), dataType: `${rightEv.result.type} (id #${rightEv.result.objId})` },
      ],
      intermediateSteps: [
        {
          expr: `${isNotMatch[1].trim()} is not ${isNotMatch[2].trim()}`,
          result: resBool ? 'True' : 'False',
          rule: sameObj ? 'Both refer to the same memory object' : 'Distinct objects in memory -> True',
        },
      ],
    };
  }

  const isMatch = expr.match(/^(.+?)\s+is\s+(.+)$/);
  if (isMatch) {
    const leftEv = evalPyExpr(isMatch[1], env, inputs);
    const rightEv = evalPyExpr(isMatch[2], env, inputs);
    const sameObj =
      leftEv.result.type === 'NoneType' && rightEv.result.type === 'NoneType'
        ? true
        : leftEv.result.objId === rightEv.result.objId;
    return {
      result: inferRuntimeVal(sameObj),
      primaryOp: 'is',
      operands: [
        { label: 'Left Object', expr: isMatch[1].trim(), value: formatVal(leftEv.result), dataType: `${leftEv.result.type} (id #${leftEv.result.objId})` },
        { label: 'Right Object', expr: isMatch[2].trim(), value: formatVal(rightEv.result), dataType: `${rightEv.result.type} (id #${rightEv.result.objId})` },
      ],
      intermediateSteps: [
        {
          expr: `${isMatch[1].trim()} is ${isMatch[2].trim()}`,
          result: sameObj ? 'True' : 'False',
          rule: sameObj ? 'Same memory reference (id matches) -> True' : 'Different memory objects (id differs) -> False',
        },
      ],
    };
  }

  // 5. Membership operators: `not in`, `in`
  const notInMatch = expr.match(/^(.+?)\s+not\s+in\s+(.+)$/);
  if (notInMatch) {
    const leftEv = evalPyExpr(notInMatch[1], env, inputs);
    const rightEv = evalPyExpr(notInMatch[2], env, inputs);
    let found = false;
    if (rightEv.result.type === 'String') {
      found = String(rightEv.result.val).includes(String(leftEv.result.val));
    } else if (rightEv.result.type === 'List') {
      found = (rightEv.result.val as any[]).includes(leftEv.result.val);
    } else if (rightEv.result.type === 'Dict') {
      found = Object.prototype.hasOwnProperty.call(rightEv.result.val, String(leftEv.result.val));
    }
    const resBool = !found;
    return {
      result: inferRuntimeVal(resBool),
      primaryOp: 'not in',
      operands: [
        { label: 'Search Item', expr: notInMatch[1].trim(), value: formatVal(leftEv.result), dataType: leftEv.result.type },
        { label: 'Collection', expr: notInMatch[2].trim(), value: formatVal(rightEv.result), dataType: rightEv.result.type },
      ],
      intermediateSteps: [
        {
          expr: `${formatVal(leftEv.result)} not in ${formatVal(rightEv.result)}`,
          result: resBool ? 'True' : 'False',
          rule: resBool ? 'Item absent from collection -> True' : 'Item found in collection -> False',
        },
      ],
    };
  }

  const inMatch = expr.match(/^(.+?)\s+in\s+(.+)$/);
  if (inMatch) {
    const leftEv = evalPyExpr(inMatch[1], env, inputs);
    const rightEv = evalPyExpr(inMatch[2], env, inputs);
    let found = false;
    if (rightEv.result.type === 'String') {
      found = String(rightEv.result.val).includes(String(leftEv.result.val));
    } else if (rightEv.result.type === 'List') {
      found = (rightEv.result.val as any[]).includes(leftEv.result.val);
    } else if (rightEv.result.type === 'Dict') {
      found = Object.prototype.hasOwnProperty.call(rightEv.result.val, String(leftEv.result.val));
    }
    return {
      result: inferRuntimeVal(found),
      primaryOp: 'in',
      operands: [
        { label: 'Search Item', expr: inMatch[1].trim(), value: formatVal(leftEv.result), dataType: leftEv.result.type },
        { label: 'Collection', expr: inMatch[2].trim(), value: formatVal(rightEv.result), dataType: rightEv.result.type },
      ],
      intermediateSteps: [
        {
          expr: `${formatVal(leftEv.result)} in ${formatVal(rightEv.result)}`,
          result: found ? 'True' : 'False',
          rule: found ? 'Target item found in collection -> True' : 'Target item not found -> False',
        },
      ],
    };
  }

  // 6. General Expression Evaluator with Exact Python Operator Precedence & Short-Circuit Tracking
  return evaluatePrecedenceExpr(expr, env, inputs);
}

function splitTopLevelByKeyword(expr: string, keyword: 'or' | 'and'): string[] {
  const parts: string[] = [];
  let depth = 0;
  let inQuote = false;
  let quoteCh = '';
  let lastIdx = 0;
  const kwLen = keyword.length;

  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if ((ch === '"' || ch === "'") && (i === 0 || expr[i - 1] !== '\\')) {
      if (!inQuote) {
        inQuote = true;
        quoteCh = ch;
      } else if (quoteCh === ch) {
        inQuote = false;
      }
      continue;
    }
    if (inQuote) continue;
    if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth = Math.max(0, depth - 1);
    else if (depth === 0) {
      const beforeOk = i === 0 || /\s|\)/.test(expr[i - 1]);
      const afterOk = i + kwLen < expr.length && /\s|\(/.test(expr[i + kwLen]);
      if (beforeOk && afterOk && expr.slice(i, i + kwLen) === keyword) {
        parts.push(expr.slice(lastIdx, i).trim());
        lastIdx = i + kwLen;
        i += kwLen - 1;
      }
    }
  }
  if (parts.length > 0) {
    parts.push(expr.slice(lastIdx).trim());
  }
  return parts;
}

function stripOuterParens(s: string): string {
  let str = s.trim();
  while (str.startsWith('(') && str.endsWith(')')) {
    let depth = 0;
    let matchesOuter = true;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === '(') depth++;
      else if (str[i] === ')') depth--;
      if (depth === 0) {
        matchesOuter = false;
        break;
      }
    }
    if (matchesOuter) {
      str = str.slice(1, -1).trim();
    } else {
      break;
    }
  }
  return str;
}

function evaluatePrecedenceExpr(
  rawExpr: string,
  env: Record<string, RuntimeVal>,
  inputs: string[]
): {
  result: RuntimeVal;
  primaryOp?: string;
  operands?: EvaluatedOperandInfo[];
  intermediateSteps?: IntermediateEvalStep[];
  shortCircuitNote?: string;
} {
  const expr = stripOuterParens(rawExpr);
  const steps: IntermediateEvalStep[] = [];

  // A. Logical `or` (lowest precedence, left-to-right, short-circuit on True)
  const orParts = splitTopLevelByKeyword(expr, 'or');
  if (orParts.length > 1) {
    const ops: EvaluatedOperandInfo[] = [];
    let finalBool = false;
    let shortCircuitNote: string | undefined;

    for (let i = 0; i < orParts.length; i++) {
      const sub = evalPyExpr(orParts[i], env, inputs);
      if (sub.intermediateSteps) steps.push(...sub.intermediateSteps);
      const bVal = Boolean(sub.result.val);
      ops.push({
        label: `Condition ${i + 1}`,
        expr: orParts[i],
        value: bVal ? 'True' : 'False',
        dataType: 'Boolean',
      });
      if (bVal) {
        finalBool = true;
        if (i < orParts.length - 1) {
          shortCircuitNote = `Short-Circuit Evaluation: Left condition (${orParts[i]}) True hai, isliye Python baaki condition evaluate kiye bina turant True return karta hai.`;
          steps.push({
            expr: expr,
            result: 'True (Short-Circuited)',
            rule: 'Logical OR short-circuits when left operand is True',
          });
        }
        break;
      }
    }
    if (!shortCircuitNote) {
      steps.push({
        expr,
        result: finalBool ? 'True' : 'False',
        rule: 'Logical OR evaluates to True if any operand is True',
      });
    }
    return {
      result: inferRuntimeVal(finalBool),
      primaryOp: 'or',
      operands: ops,
      intermediateSteps: steps,
      shortCircuitNote,
    };
  }

  // B. Logical `and` (left-to-right, short-circuit on False)
  const andParts = splitTopLevelByKeyword(expr, 'and');
  if (andParts.length > 1) {
    const ops: EvaluatedOperandInfo[] = [];
    let finalBool = true;
    let shortCircuitNote: string | undefined;

    for (let i = 0; i < andParts.length; i++) {
      const sub = evalPyExpr(andParts[i], env, inputs);
      if (sub.intermediateSteps) steps.push(...sub.intermediateSteps);
      const bVal = Boolean(sub.result.val);
      ops.push({
        label: `Condition ${i + 1}`,
        expr: andParts[i],
        value: bVal ? 'True' : 'False',
        dataType: 'Boolean',
      });
      if (!bVal) {
        finalBool = false;
        if (i < andParts.length - 1) {
          shortCircuitNote = `Short-Circuit Evaluation: Left condition (${andParts[i]}) False hai, isliye Python right-hand condition check kiye bina turant False return karta hai.`;
          steps.push({
            expr,
            result: 'False (Short-Circuited)',
            rule: 'Logical AND short-circuits when left operand is False',
          });
        }
        break;
      }
    }
    if (!shortCircuitNote) {
      steps.push({
        expr,
        result: finalBool ? 'True' : 'False',
        rule: 'Logical AND evaluates to True only when all operands are True',
      });
    }
    return {
      result: inferRuntimeVal(finalBool),
      primaryOp: 'and',
      operands: ops,
      intermediateSteps: steps,
      shortCircuitNote,
    };
  }

  // C. Unary `not `
  if (/^not\s+/.test(expr)) {
    const innerStr = expr.replace(/^not\s+/, '').trim();
    const sub = evalPyExpr(innerStr, env, inputs);
    if (sub.intermediateSteps) steps.push(...sub.intermediateSteps);
    const inverted = !Boolean(sub.result.val);
    steps.push({
      expr: `not ${formatVal(sub.result)}`,
      result: inverted ? 'True' : 'False',
      rule: 'Unary NOT inverts Boolean truth value',
    });
    return {
      result: inferRuntimeVal(inverted),
      primaryOp: 'not',
      operands: [
        {
          label: 'Operand',
          expr: innerStr,
          value: formatVal(sub.result),
          dataType: sub.result.type,
        },
      ],
      intermediateSteps: steps,
    };
  }

  // D. Comparison operators at top level: ==, !=, >=, <=, >, <
  const compOps = ['==', '!=', '>=', '<=', '>', '<'];
  let depth = 0;
  let inQ = false;
  let qCh = '';
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if ((ch === '"' || ch === "'") && (i === 0 || expr[i - 1] !== '\\')) {
      if (!inQ) {
        inQ = true;
        qCh = ch;
      } else if (qCh === ch) {
        inQ = false;
      }
      continue;
    }
    if (inQ) continue;
    if (ch === '(') depth++;
    else if (ch === ')') depth = Math.max(0, depth - 1);
    else if (depth === 0) {
      for (const cop of compOps) {
        if (expr.slice(i, i + cop.length) === cop) {
          // Avoid matching single > or < when part of >= or <=
          if ((cop === '>' || cop === '<') && expr[i + 1] === '=') continue;
          const leftStr = expr.slice(0, i).trim();
          const rightStr = expr.slice(i + cop.length).trim();
          const leftEv = evalPyExpr(leftStr, env, inputs);
          const rightEv = evalPyExpr(rightStr, env, inputs);
          if (leftEv.intermediateSteps) steps.push(...leftEv.intermediateSteps);
          if (rightEv.intermediateSteps) steps.push(...rightEv.intermediateSteps);

          const lv = leftEv.result.val;
          const rv = rightEv.result.val;
          let cmpRes = false;
          if (cop === '==') {
            cmpRes = JSON.stringify(lv) === JSON.stringify(rv);
          } else if (cop === '!=') {
            cmpRes = JSON.stringify(lv) !== JSON.stringify(rv);
          } else if (cop === '>=') {
            cmpRes = lv >= rv;
          } else if (cop === '<=') {
            cmpRes = lv <= rv;
          } else if (cop === '>') {
            cmpRes = lv > rv;
          } else if (cop === '<') {
            cmpRes = lv < rv;
          }
          steps.push({
            expr: `${formatVal(leftEv.result)} ${cop} ${formatVal(rightEv.result)}`,
            result: cmpRes ? 'True' : 'False',
            rule: `Comparison (${cop}) returns Boolean`,
          });
          return {
            result: inferRuntimeVal(cmpRes),
            primaryOp: cop,
            operands: [
              { label: 'Left Operand', expr: leftStr, value: formatVal(leftEv.result), dataType: leftEv.result.type },
              { label: 'Right Operand', expr: rightStr, value: formatVal(rightEv.result), dataType: rightEv.result.type },
            ],
            intermediateSteps: steps,
          };
        }
      }
    }
  }

  // E. Arithmetic / String Expression Evaluation with Exact Python Precedence & Step-by-Step Tree Trace
  return evalArithmeticTree(expr, env);
}

interface ArithToken {
  kind: 'num' | 'str' | 'var' | 'op' | 'lparen' | 'rparen';
  text: string;
  val?: RuntimeVal;
}

function tokenizeArith(expr: string, env: Record<string, RuntimeVal>): ArithToken[] {
  const tokens: ArithToken[] = [];
  let i = 0;
  while (i < expr.length) {
    if (/\s/.test(expr[i])) {
      i++;
      continue;
    }
    if (expr[i] === '(') {
      tokens.push({ kind: 'lparen', text: '(' });
      i++;
      continue;
    }
    if (expr[i] === ')') {
      tokens.push({ kind: 'rparen', text: ')' });
      i++;
      continue;
    }
    if (expr[i] === '"' || expr[i] === "'") {
      const q = expr[i];
      let j = i + 1;
      while (j < expr.length && expr[j] !== q) j++;
      const strVal = expr.slice(i + 1, j);
      tokens.push({ kind: 'str', text: expr.slice(i, j + 1), val: inferRuntimeVal(strVal) });
      i = j + 1;
      continue;
    }
    if (expr.slice(i, i + 2) === '**' || expr.slice(i, i + 2) === '//') {
      tokens.push({ kind: 'op', text: expr.slice(i, i + 2) });
      i += 2;
      continue;
    }
    if ('+-*/%'.includes(expr[i])) {
      // Check unary minus
      const prev = tokens[tokens.length - 1];
      if (expr[i] === '-' && (!prev || prev.kind === 'op' || prev.kind === 'lparen') && /\d/.test(expr[i + 1] || '')) {
        let j = i + 1;
        while (j < expr.length && /[\d.]/.test(expr[j])) j++;
        const numStr = expr.slice(i, j);
        tokens.push({
          kind: 'num',
          text: numStr,
          val: inferRuntimeVal(Number(numStr), numStr.includes('.')),
        });
        i = j;
        continue;
      }
      tokens.push({ kind: 'op', text: expr[i] });
      i++;
      continue;
    }
    if (/\d/.test(expr[i])) {
      let j = i;
      while (j < expr.length && /[\d.]/.test(expr[j])) j++;
      const numStr = expr.slice(i, j);
      tokens.push({
        kind: 'num',
        text: numStr,
        val: inferRuntimeVal(Number(numStr), numStr.includes('.')),
      });
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(expr[i])) {
      let j = i;
      while (j < expr.length && /[a-zA-Z0-9_]/.test(expr[j])) j++;
      const varName = expr.slice(i, j);
      const rv = env[varName] || inferRuntimeVal(0);
      tokens.push({ kind: 'var', text: varName, val: rv });
      i = j;
      continue;
    }
    i++;
  }
  return tokens;
}

function applyBinaryArith(left: RuntimeVal, op: string, right: RuntimeVal): RuntimeVal {
  if (op === '+' && (left.type === 'String' || right.type === 'String')) {
    return inferRuntimeVal(String(left.val) + String(right.val));
  }
  if (op === '*' && left.type === 'String' && right.type === 'Integer') {
    return inferRuntimeVal(String(left.val).repeat(Math.max(0, Number(right.val))));
  }
  const lv = Number(left.val);
  const rv = Number(right.val);
  const anyFloat = left.type === 'Float' || right.type === 'Float';

  if (op === '+') return inferRuntimeVal(lv + rv, anyFloat);
  if (op === '-') return inferRuntimeVal(lv - rv, anyFloat);
  if (op === '*') return inferRuntimeVal(lv * rv, anyFloat);
  if (op === '/') return inferRuntimeVal(rv === 0 ? 0 : lv / rv, true); // Python `/` ALWAYS returns Float!
  if (op === '//') return inferRuntimeVal(rv === 0 ? 0 : Math.floor(lv / rv), anyFloat);
  if (op === '%') {
    if (rv === 0) return inferRuntimeVal(0, anyFloat);
    const mod = ((lv % rv) + rv) % rv;
    return inferRuntimeVal(mod, anyFloat);
  }
  if (op === '**') return inferRuntimeVal(Math.pow(lv, rv), anyFloat);
  return inferRuntimeVal(0);
}

function evalArithmeticTree(
  expr: string,
  env: Record<string, RuntimeVal>
): {
  result: RuntimeVal;
  primaryOp?: string;
  operands?: EvaluatedOperandInfo[];
  intermediateSteps?: IntermediateEvalStep[];
} {
  const tokens = tokenizeArith(expr, env);
  const intermediateSteps: IntermediateEvalStep[] = [];
  const initialOperands: EvaluatedOperandInfo[] = [];

  for (const t of tokens) {
    if (t.kind === 'var' && t.val) {
      if (!initialOperands.some((o) => o.expr === t.text)) {
        initialOperands.push({
          label: `Variable ${t.text}`,
          expr: t.text,
          value: formatVal(t.val),
          dataType: t.val.type,
        });
      }
    } else if ((t.kind === 'num' || t.kind === 'str') && t.val && initialOperands.length < 3) {
      initialOperands.push({
        label: `Operand ${initialOperands.length + 1}`,
        expr: t.text,
        value: formatVal(t.val),
        dataType: t.val.type,
      });
    }
  }

  const allOps = tokens.filter((t) => t.kind === 'op').map((t) => t.text);
  const primaryOp = allOps[0];

  function evalFlatTokens(flat: Array<{ text: string; val?: RuntimeVal; isOp?: boolean }>): RuntimeVal {
    const arr = [...flat];

    // 1. Power `**` (Right-to-Left Associativity in Python!)
    for (let i = arr.length - 2; i >= 1; i--) {
      if (arr[i].isOp && arr[i].text === '**') {
        const l = arr[i - 1];
        const r = arr[i + 1];
        const res = applyBinaryArith(l.val!, '**', r.val!);
        intermediateSteps.push({
          expr: `${formatVal(l.val)} ** ${formatVal(r.val)}`,
          result: `${formatVal(res)} (${res.type})`,
          rule: 'Exponentiation (**) has highest operator precedence',
        });
        arr.splice(i - 1, 3, { text: formatVal(res), val: res });
        i = arr.length - 1;
      }
    }

    // 2. Multiplication, Division, Floor Division, Modulo: `*`, `/`, `//`, `%` (Left-to-Right Associativity)
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i].isOp && ['*', '/', '//', '%'].includes(arr[i].text)) {
        const op = arr[i].text;
        const l = arr[i - 1];
        const r = arr[i + 1];
        const res = applyBinaryArith(l.val!, op, r.val!);
        const ruleName =
          op === '*'
            ? 'Multiplication (*)'
            : op === '/'
            ? 'True Division (/) -> Float'
            : op === '//'
            ? 'Floor Division (//) -> Quotient'
            : 'Modulo (%) -> Remainder';
        intermediateSteps.push({
          expr: `${formatVal(l.val)} ${op} ${formatVal(r.val)}`,
          result: `${formatVal(res)} (${res.type})`,
          rule: `${ruleName} evaluated left-to-right`,
        });
        arr.splice(i - 1, 3, { text: formatVal(res), val: res });
        i--;
      }
    }

    // 3. Addition and Subtraction: `+`, `-` (Left-to-Right Associativity)
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i].isOp && ['+', '-'].includes(arr[i].text)) {
        const op = arr[i].text;
        const l = arr[i - 1];
        const r = arr[i + 1];
        const res = applyBinaryArith(l.val!, op, r.val!);
        const ruleName = op === '+' ? 'Addition (+)' : 'Subtraction (-)';
        intermediateSteps.push({
          expr: `${formatVal(l.val)} ${op} ${formatVal(r.val)}`,
          result: `${formatVal(res)} (${res.type})`,
          rule: `${ruleName} evaluated left-to-right`,
        });
        arr.splice(i - 1, 3, { text: formatVal(res), val: res });
        i--;
      }
    }

    return arr[0]?.val || inferRuntimeVal(0);
  }

  // Resolve parentheses from innermost to outermost
  const work: Array<{ text: string; val?: RuntimeVal; isOp?: boolean; isLP?: boolean; isRP?: boolean }> = tokens.map(
    (t) => {
      if (t.kind === 'lparen') return { text: '(', isLP: true };
      if (t.kind === 'rparen') return { text: ')', isRP: true };
      if (t.kind === 'op') return { text: t.text, isOp: true };
      return { text: t.text, val: t.val };
    }
  );

  while (work.some((w) => w.isLP)) {
    let openIdx = -1;
    let closeIdx = -1;
    for (let i = 0; i < work.length; i++) {
      if (work[i].isLP) openIdx = i;
      else if (work[i].isRP && openIdx !== -1) {
        closeIdx = i;
        break;
      }
    }
    if (openIdx === -1 || closeIdx === -1) break;
    const subSlice = work.slice(openIdx + 1, closeIdx);
    const subRes = evalFlatTokens(subSlice);
    work.splice(openIdx, closeIdx - openIdx + 1, { text: formatVal(subRes), val: subRes });
  }

  const finalVal = evalFlatTokens(work);

  return {
    result: finalVal,
    primaryOp,
    operands: initialOperands,
    intermediateSteps,
  };
}

function classifyStepVisualType(
  primaryOp: string | undefined,
  intermediateSteps: IntermediateEvalStep[] | undefined,
  isTypeConversion?: string,
  isAssignment = false
): OperatorVisualType {
  if (isTypeConversion) return 'type';
  if (intermediateSteps && intermediateSteps.length > 1 && !isAssignment) {
    return 'expression_tree';
  }
  if (primaryOp && OPERATOR_META[primaryOp]) {
    return OPERATOR_META[primaryOp].visualType;
  }
  if (isAssignment) return 'assignment';
  return 'arithmetic';
}

export function buildOperatorsVisualStepsForQuestion(
  topicId: string,
  q: TopicQuestion
): TeachingStep[] {
  const steps: TeachingStep[] = [];
  const rawLines = q.referenceCode.split('\n');
  const inputsQueue = q.sampleInput ? q.sampleInput.split('\n') : [];
  const env: Record<string, RuntimeVal> = {};
  const cumulativeConsole: string[] = [];

  for (let idx = 0; idx < rawLines.length; idx++) {
    const lineNum = idx + 1;
    const rawLine = rawLines[idx];
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // 1. Check list.append(...) mutation (e.g. OP-10-06: b.append(2))
    const appendMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\.append\((.+)\)$/);
    if (appendMatch) {
      const varName = appendMatch[1];
      const argEv = evalPyExpr(appendMatch[2], env, inputsQueue);
      const targetObj = env[varName];
      const prevStr = formatVal(targetObj);
      if (targetObj && Array.isArray(targetObj.val)) {
        targetObj.val.push(argEv.result.val);
      }
      const newStr = formatVal(targetObj);
      steps.push({
        step: steps.length + 1,
        totalSteps: 0,
        title: `In-Place Object Mutation: ${trimmed}`,
        conceptKey: 'identity',
        highlightLine: lineNum,
        highlightToken: trimmed,
        visualTarget: 'identity',
        visualLabel: `${varName}.append(${appendMatch[2]})`,
        visualSublabel: `${prevStr} -> ${newStr}`,
        consoleOutput: cumulativeConsole.join('\n'),
        isConsoleVisible: cumulativeConsole.length > 0,
        speechHinglish: `Line ${lineNum} par ${trimmed} execute hota hai. Kyunki a aur b memory mein same List Object ko reference kar rahe hain, isliye ${varName} mein ${appendMatch[2]} append karne se dono variables ki value ${newStr} ho jati hai.`,
        speechEnglish: `On Line ${lineNum}, ${trimmed} mutates the shared List object in memory to ${newStr}, which is visible through both references.`,
        cardExplanationHinglish: `${trimmed} shared List Object ko in-place update karke ${newStr} bana deta hai.`,
        cardExplanationEnglish: `${trimmed} mutates the shared List in memory to ${newStr}.`,
        conceptBoxes: [
          { label: `${varName} (Before)`, sublabel: prevStr, isActive: false },
          { label: '.append()', sublabel: 'Shared Reference', isActive: true },
          { label: 'Updated List', sublabel: newStr, isActive: true },
        ],
        operatorDetails: {
          visualType: 'identity',
          technicalConcept: 'Shared Object Reference & Mutation',
          activeSourceRange: { line: lineNum, startCol: 1, endCol: rawLine.length, codeText: trimmed },
          operatorSymbol: 'is / reference',
          operatorMeaning: 'Variables pointing to the same object ID reflect in-place mutations together.',
          intermediateResult: newStr,
        },
      });
      continue;
    }

    // 2. Check if/elif conditional calculator lines (OP-12-11)
    const condPrintMatch = trimmed.match(/^(if|elif)\s+op\s*==\s*['"]([^'"]+)['"]\s*:\s*print\((.+)\)$/);
    if (condPrintMatch) {
      const opCheck = condPrintMatch[2];
      const printExpr = condPrintMatch[3];
      const currentOpVal = env['op'] ? String(env['op'].val) : '+';
      if (currentOpVal === opCheck) {
        const ev = evalPyExpr(printExpr, env, inputsQueue);
        const outLine = formatPrintVal(ev.result);
        cumulativeConsole.push(outLine);
        const meta = OPERATOR_META[opCheck] || OPERATOR_META['+'];
        steps.push({
          step: steps.length + 1,
          totalSteps: 0,
          title: `Matched Operator '${opCheck}': ${printExpr}`,
          conceptKey: meta.visualType,
          highlightLine: lineNum,
          highlightToken: `${printExpr}`,
          visualTarget: meta.visualType,
          visualLabel: `${printExpr} -> ${outLine}`,
          visualSublabel: meta.name,
          consoleOutput: cumulativeConsole.join('\n'),
          isConsoleVisible: true,
          speechHinglish: `Line ${lineNum} par condition op == '${opCheck}' True hoti hai. ${meta.whyHinglish} Calculation ke baad Console par ${outLine} print hota hai.`,
          speechEnglish: `On Line ${lineNum}, condition op == '${opCheck}' is True. ${meta.meaningEnglish} Result ${outLine} is printed to the Console.`,
          cardExplanationHinglish: `op == '${opCheck}' match hone par ${printExpr} evaluate hokar Console par ${outLine} print karta hai.`,
          cardExplanationEnglish: `Condition op == '${opCheck}' matched; ${printExpr} evaluates to ${outLine}.`,
          conceptBoxes: [
            { label: `op == '${opCheck}'`, sublabel: 'Condition True', isActive: true },
            { label: printExpr, sublabel: meta.name, isActive: true },
            { label: `Result: ${outLine}`, sublabel: `Type: ${ev.result.type}`, isActive: true },
          ],
          operatorDetails: {
            visualType: meta.visualType,
            technicalConcept: meta.name,
            activeSourceRange: { line: lineNum, startCol: 1, endCol: rawLine.length, codeText: trimmed },
            operatorSymbol: opCheck,
            operatorMeaning: meta.meaningHinglish,
            evaluatedOperands: ev.operands,
            intermediateSteps: ev.intermediateSteps,
            intermediateResult: outLine,
          },
        });
      }
      continue;
    }

    // 3. Check Augmented Assignment: +=, -=, *=, /=, //=, %=, **=
    const augMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(\*\*=|\/\/=|\+=|-=|\*=|\/=|%=)\s*(.+)$/);
    if (augMatch) {
      const varName = augMatch[1];
      const augOp = augMatch[2];
      const rhsExpr = augMatch[3].trim();
      const baseOp = augOp.slice(0, -1);

      const prevRuntime = env[varName] || inferRuntimeVal(0);
      const prevStr = formatVal(prevRuntime);
      const rhsEv = evalPyExpr(rhsExpr, env, inputsQueue);
      const newRuntime = applyBinaryArith(prevRuntime, baseOp, rhsEv.result);
      env[varName] = newRuntime;
      const newStr = formatVal(newRuntime);
      const meta = OPERATOR_META[augOp];

      steps.push({
        step: steps.length + 1,
        totalSteps: 0,
        title: `${meta.name}: ${trimmed}`,
        conceptKey: 'assignment',
        highlightLine: lineNum,
        highlightToken: `${varName} ${augOp} ${rhsExpr}`,
        visualTarget: 'assignment',
        visualLabel: `${varName}: ${prevStr} -> ${newStr}`,
        visualSublabel: `${augOp} Augmented Assignment`,
        consoleOutput: cumulativeConsole.join('\n'),
        isConsoleVisible: cumulativeConsole.length > 0,
        speechHinglish: `Line ${lineNum} par ${meta.whyHinglish} Variable ${varName} ki purani Value ${prevStr} thi. Right side Operand ${formatVal(rhsEv.result)} ke saath ${baseOp} calculation hokar ${varName} ki nayi Value ${newStr} memory mein store ho gayi.`,
        speechEnglish: `On Line ${lineNum}, ${meta.meaningEnglish} Variable ${varName} updates from ${prevStr} to ${newStr} (${prevStr} ${baseOp} ${formatVal(rhsEv.result)} = ${newStr}).`,
        cardExplanationHinglish: `${meta.whyHinglish} ${varName} ki Value ${prevStr} se update hokar ${newStr} (${newRuntime.type}) ban gayi.`,
        cardExplanationEnglish: `${varName} updated from ${prevStr} to ${newStr} using ${augOp}.`,
        conceptBoxes: [
          { label: `Old ${varName}`, sublabel: `${prevStr} (${prevRuntime.type})`, isActive: false },
          { label: `${augOp} ${formatVal(rhsEv.result)}`, sublabel: `${prevStr} ${baseOp} ${formatVal(rhsEv.result)}`, isActive: true },
          { label: `New ${varName}`, sublabel: `${newStr} (${newRuntime.type})`, isActive: true },
        ],
        operatorDetails: {
          visualType: 'assignment',
          technicalConcept: meta.name,
          activeSourceRange: { line: lineNum, startCol: 1, endCol: rawLine.length, codeText: trimmed },
          operatorSymbol: augOp,
          operatorMeaning: meta.meaningHinglish,
          evaluatedOperands: [
            { label: `Previous ${varName}`, expr: varName, value: prevStr, dataType: prevRuntime.type },
            { label: 'Right Operand', expr: rhsExpr, value: formatVal(rhsEv.result), dataType: rhsEv.result.type },
          ],
          intermediateSteps: [
            {
              expr: `${prevStr} ${baseOp} ${formatVal(rhsEv.result)}`,
              result: `${newStr} (${newRuntime.type})`,
              rule: `Evaluate ${varName} ${baseOp} ${rhsExpr}`,
            },
            {
              expr: `${varName} = ${newStr}`,
              result: `${varName} -> ${newStr}`,
              rule: `Store updated value back in variable ${varName}`,
            },
          ],
          intermediateResult: newStr,
          variableSnapshots: [{ name: varName, prevValue: prevStr, value: newStr, dataType: newRuntime.type }],
        },
      });
      continue;
    }

    // 4. Check Standard Assignment: var = expr (not ==, !=, >=, <=)
    const assignMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(?!=)(.+)$/);
    if (assignMatch) {
      const varName = assignMatch[1];
      const rhsExpr = assignMatch[2].trim();
      const prevRuntime = env[varName];
      const prevStr = prevRuntime ? formatVal(prevRuntime) : undefined;

      const ev = evalPyExpr(rhsExpr, env, inputsQueue);
      env[varName] = ev.result;
      const valStr = formatVal(ev.result);

      if (ev.consumedInputPrompt && q.sampleOutput.includes('Enter ')) {
        cumulativeConsole.push(ev.consumedInputPrompt);
      }

      const vType = classifyStepVisualType(ev.primaryOp, ev.intermediateSteps, ev.isTypeConversion, true);
      const opMeta = ev.primaryOp ? OPERATOR_META[ev.primaryOp] : OPERATOR_META['='];

      // If the right-hand side is an operator expression (not just input() or a literal),
      // emit a dedicated Expression Evaluation step BEFORE the Assignment step!
      if (!ev.isTypeConversion && (ev.primaryOp || (ev.intermediateSteps && ev.intermediateSteps.length > 0))) {
        const exprVisualType = classifyStepVisualType(ev.primaryOp, ev.intermediateSteps, undefined, false);
        const stepChain =
          ev.intermediateSteps && ev.intermediateSteps.length > 1
            ? ev.intermediateSteps.map((s) => `${s.expr} = ${s.result}`).join(' -> ')
            : `${rhsExpr} = ${valStr}`;

        const exprSpeechHi =
          ev.intermediateSteps && ev.intermediateSteps.length > 1
            ? `Line ${lineNum} par sabse pehle Right Side ki Expression \`${rhsExpr}\` Operator Precedence ke mutabiq evaluate hoti hai: ${stepChain}. Calculation ka Result ${valStr} (${ev.result.type}) aata hai.`
            : `Line ${lineNum} par pehle Right Side ki Expression \`${rhsExpr}\` evaluate hoti hai. ${opMeta.whyHinglish} Calculation ka Result ${valStr} (${ev.result.type}) milta hai.`;

        const exprCardHi =
          ev.intermediateSteps && ev.intermediateSteps.length > 1
            ? `Operator Precedence ke mutabiq \`${rhsExpr}\` step-by-step evaluate hota hai: ${stepChain}. Evaluated Result = ${valStr}.`
            : `${opMeta.whyHinglish} Expression \`${rhsExpr}\` evaluate hokar ${valStr} (${ev.result.type}) deta hai.`;

        steps.push({
          step: steps.length + 1,
          totalSteps: 0,
          title:
            ev.intermediateSteps && ev.intermediateSteps.length > 1
              ? `Evaluate Expression (Precedence): ${rhsExpr}`
              : `Evaluate ${opMeta.name}: ${rhsExpr}`,
          conceptKey: exprVisualType,
          highlightLine: lineNum,
          highlightToken: rhsExpr,
          visualTarget: exprVisualType,
          visualLabel: `${rhsExpr} -> ${valStr}`,
          visualSublabel: opMeta.name,
          consoleOutput: cumulativeConsole.join('\n'),
          isConsoleVisible: cumulativeConsole.length > 0,
          speechHinglish: exprSpeechHi,
          speechEnglish: `On Line ${lineNum}, Python first evaluates the right-hand expression ${rhsExpr} using ${opMeta.name}, producing ${valStr} (${ev.result.type}).`,
          cardExplanationHinglish: exprCardHi,
          cardExplanationEnglish: `Right-hand expression ${rhsExpr} evaluates to ${valStr} (${ev.result.type}).`,
          conceptBoxes: [
            {
              label: ev.operands?.[0] ? `${ev.operands[0].expr} (${ev.operands[0].value})` : 'Left Operand',
              sublabel: ev.operands?.[0]?.dataType || 'Operand 1',
              isActive: true,
            },
            {
              label: `Operator: ${ev.primaryOp || 'Expr'}`,
              sublabel: opMeta.name,
              isActive: true,
            },
            {
              label: `Result: ${valStr}`,
              sublabel: `Type: ${ev.result.type}`,
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: exprVisualType,
            technicalConcept:
              ev.intermediateSteps && ev.intermediateSteps.length > 1
                ? `Operator Precedence (${opMeta.name})`
                : opMeta.name,
            activeSourceRange: {
              line: lineNum,
              startCol: rawLine.indexOf(rhsExpr) + 1,
              endCol: rawLine.indexOf(rhsExpr) + 1 + rhsExpr.length,
              codeText: rhsExpr,
            },
            operatorSymbol: ev.primaryOp,
            operatorMeaning: opMeta.meaningHinglish,
            evaluatedOperands: ev.operands,
            intermediateSteps: ev.intermediateSteps,
            intermediateResult: valStr,
          },
        });
      }

      let speechHi = '';
      let cardHi = '';
      let title = '';
      const assignVisualType: OperatorVisualType = ev.isTypeConversion ? 'type' : 'assignment';

      if (ev.isTypeConversion) {
        title = `Input & Type Conversion: ${varName} = ${rhsExpr}`;
        speechHi = `Line ${lineNum} par input() function user se text String read karta hai aur ${ev.isTypeConversion.startsWith('int') ? 'int()' : ev.isTypeConversion.startsWith('float') ? 'float()' : 'input()'} use ${ev.result.type} Value ${valStr} mein convert karke = Assignment Operator se Variable ${varName} mein store karta hai.`;
        cardHi = `input() se value read hokar ${ev.result.type} ${valStr} mein convert hui aur Variable \`${varName}\` mein store ho gayi.`;
      } else if (prevStr !== undefined) {
        title = `Variable Reassignment: ${varName} = ${valStr}`;
        speechHi = `Line ${lineNum} par \`=\` Assignment Operator Variable \`${varName}\` ki purani Value ${prevStr} ko overwrite karke nayi Value ${valStr} store kar deta hai.`;
        cardHi = `Variable \`${varName}\` ki purani Value ${prevStr} replace hokar ab nayi Value ${valStr} (${ev.result.type}) store ho gayi.`;
      } else {
        title = `Store in Variable (=): ${varName} = ${valStr}`;
        speechHi = `Line ${lineNum} par \`=\` Assignment Operator hai. Pehle Right Side ki Expression evaluate hoti hai, uske baad evaluated Result ${valStr} (${ev.result.type}) Left Side ke Variable \`${varName}\` mein store hota hai.`;
        cardHi = `\`=\` Assignment Operator evaluated Result ${valStr} (${ev.result.type}) ko Left Side ke Variable \`${varName}\` mein store kar deta hai.`;
      }

      const boxes: ConceptBox[] = prevStr
        ? [
            { label: `Old ${varName}`, sublabel: prevStr, isActive: false },
            { label: `= (${rhsExpr})`, sublabel: 'Reassignment', isActive: true },
            { label: `New ${varName}`, sublabel: `${valStr} (${ev.result.type})`, isActive: true },
          ]
        : [
            { label: `Variable: ${varName}`, sublabel: 'Left Target', isActive: true },
            { label: 'Operator: =', sublabel: 'Assignment Operator', isActive: true },
            { label: `Stored: ${valStr}`, sublabel: `Type: ${ev.result.type}`, isActive: true },
          ];

      steps.push({
        step: steps.length + 1,
        totalSteps: 0,
        title,
        conceptKey: assignVisualType,
        highlightLine: lineNum,
        highlightToken: trimmed,
        visualTarget: assignVisualType,
        visualLabel: `${varName} = ${valStr}`,
        visualSublabel: `${ev.result.type} Stored in Memory`,
        consoleOutput: cumulativeConsole.join('\n'),
        isConsoleVisible: cumulativeConsole.length > 0,
        speechHinglish: speechHi,
        speechEnglish: `On Line ${lineNum}, the = Assignment Operator stores the evaluated value ${valStr} (${ev.result.type}) in variable ${varName}.`,
        cardExplanationHinglish: cardHi,
        cardExplanationEnglish: `Assigned value ${valStr} (${ev.result.type}) to variable ${varName}.`,
        conceptBoxes: boxes,
        operatorDetails: {
          visualType: assignVisualType,
          technicalConcept: ev.isTypeConversion ? `Type Conversion (${ev.isTypeConversion})` : OPERATOR_META['='].name,
          activeSourceRange: { line: lineNum, startCol: 1, endCol: rawLine.length, codeText: trimmed },
          operatorSymbol: '=',
          operatorMeaning: OPERATOR_META['='].meaningHinglish,
          evaluatedOperands: ev.isTypeConversion ? ev.operands : [{ label: 'Evaluated RHS', expr: rhsExpr, value: valStr, dataType: ev.result.type }],
          intermediateSteps: ev.isTypeConversion ? ev.intermediateSteps : [{ expr: `${varName} = ${valStr}`, result: `${varName} ➔ ${valStr}`, rule: 'Store RHS value into LHS variable' }],
          intermediateResult: valStr,
          variableSnapshots: [{ name: varName, prevValue: prevStr, value: valStr, dataType: ev.result.type }],
        },
      });
      continue;
    }

    // 5. Check print(...) statement
    const printMatch = trimmed.match(/^print\s*\((.*)\)$/);
    if (printMatch) {
      const innerRaw = printMatch[1].trim();
      // Split top-level comma arguments if print("Label:", expr)
      const args: string[] = [];
      let d = 0;
      let inQ = false;
      let qC = '';
      let cur = '';
      for (let i = 0; i < innerRaw.length; i++) {
        const c = innerRaw[i];
        if ((c === '"' || c === "'") && (i === 0 || innerRaw[i - 1] !== '\\')) {
          if (!inQ) {
            inQ = true;
            qC = c;
          } else if (qC === c) {
            inQ = false;
          }
        }
        if (!inQ) {
          if (c === '(' || c === '[') d++;
          else if (c === ')' || c === ']') d = Math.max(0, d - 1);
        }
        if (c === ',' && !inQ && d === 0) {
          args.push(cur.trim());
          cur = '';
        } else {
          cur += c;
        }
      }
      if (cur.trim()) args.push(cur.trim());

      const targetExpr = args.length > 1 ? args[args.length - 1] : args[0] || '';
      const labelPrefix =
        args.length > 1 ? args.slice(0, -1).map((a) => formatPrintVal(evalPyExpr(a, env, inputsQueue).result)).join(' ') + ' ' : '';

      const ev = evalPyExpr(targetExpr, env, inputsQueue);
      const outLine = `${labelPrefix}${formatPrintVal(ev.result)}`;
      cumulativeConsole.push(outLine);

      const hasOpInPrint = Boolean(ev.primaryOp || (ev.intermediateSteps && ev.intermediateSteps.length > 0));

      // If print(...) contains an inline operator expression (e.g., print(10 + 5), print(a - b), print(score == 50), print(2 + 3 * 4)),
      // create a dedicated Step for the Expression Evaluation FIRST, then a Step for the Console Output!
      if (hasOpInPrint) {
        const vType = classifyStepVisualType(ev.primaryOp, ev.intermediateSteps, ev.isTypeConversion, false);
        const opMeta = (ev.primaryOp && OPERATOR_META[ev.primaryOp]) || OPERATOR_META['+'];
        const evalResultStr = formatVal(ev.result);

        let evalSpeechHi = '';
        let evalCardHi = '';
        if (ev.shortCircuitNote) {
          evalSpeechHi = `Line ${lineNum} par Expression \`${targetExpr}\` evaluate hoti hai. ${opMeta.whyHinglish} ${ev.shortCircuitNote} Final Result ${evalResultStr} milta hai.`;
          evalCardHi = `${opMeta.whyHinglish} ${ev.shortCircuitNote} Result: ${evalResultStr}.`;
        } else if (ev.intermediateSteps && ev.intermediateSteps.length > 1) {
          const stepChain = ev.intermediateSteps.map((s) => `${s.expr} = ${s.result}`).join(' -> ');
          evalSpeechHi = `Line ${lineNum} par Expression \`${targetExpr}\` Python Operator Precedence ke mutabiq step-by-step evaluate hoti hai: ${stepChain}. Final Result ${evalResultStr} (${ev.result.type}) aata hai.`;
          evalCardHi = `Operator Precedence Order: ${stepChain}. Evaluated Result = ${evalResultStr} (${ev.result.type}).`;
        } else {
          evalSpeechHi = `Line ${lineNum} par Expression \`${targetExpr}\` evaluate hoti hai. ${opMeta.whyHinglish} Yahan calculation ka Result ${evalResultStr} (${ev.result.type}) aata hai.`;
          evalCardHi = `${opMeta.whyHinglish} Expression \`${targetExpr}\` evaluate hokar ${evalResultStr} (${ev.result.type}) deta hai.`;
        }

        const startCol = rawLine.indexOf(targetExpr) + 1;
        steps.push({
          step: steps.length + 1,
          totalSteps: 0,
          title: `Evaluate ${opMeta.name}: ${targetExpr}`,
          conceptKey: vType,
          highlightLine: lineNum,
          highlightToken: targetExpr,
          visualTarget: vType,
          visualLabel: `${targetExpr} -> ${evalResultStr}`,
          visualSublabel: opMeta.name,
          consoleOutput: cumulativeConsole.slice(0, -1).join('\n'),
          isConsoleVisible: cumulativeConsole.length > 1,
          speechHinglish: evalSpeechHi,
          speechEnglish: `On Line ${lineNum}, Python evaluates the expression ${targetExpr} using ${opMeta.name}, producing ${evalResultStr} (${ev.result.type}).`,
          cardExplanationHinglish: evalCardHi,
          cardExplanationEnglish: `${opMeta.meaningEnglish} ${targetExpr} evaluates to ${evalResultStr} (${ev.result.type}).`,
          conceptBoxes: [
            {
              label: ev.operands?.[0] ? `${ev.operands[0].expr} (${ev.operands[0].value})` : 'Left Operand',
              sublabel: ev.operands?.[0]?.dataType || 'Operand 1',
              isActive: true,
            },
            {
              label: `Operator: ${ev.primaryOp || 'Expr'}`,
              sublabel: opMeta.name,
              isActive: true,
            },
            {
              label: `Result: ${evalResultStr}`,
              sublabel: `Type: ${ev.result.type}`,
              isActive: true,
            },
          ],
          operatorDetails: {
            visualType: vType,
            technicalConcept:
              ev.intermediateSteps && ev.intermediateSteps.length > 1
                ? `Operator Precedence (${opMeta.name})`
                : opMeta.name,
            activeSourceRange: {
              line: lineNum,
              startCol: startCol > 0 ? startCol : 1,
              endCol: startCol > 0 ? startCol + targetExpr.length : rawLine.length,
              codeText: targetExpr,
            },
            operatorSymbol: ev.primaryOp,
            operatorMeaning: opMeta.meaningHinglish,
            evaluatedOperands: ev.operands,
            intermediateSteps: ev.intermediateSteps,
            intermediateResult: evalResultStr,
            shortCircuitNote: ev.shortCircuitNote,
          },
        });
      }

      // Console Output Step for this print(...) statement
      steps.push({
        step: steps.length + 1,
        totalSteps: 0,
        title: `Console Output: ${trimmed}`,
        conceptKey: 'console',
        highlightLine: lineNum,
        highlightToken: trimmed,
        visualTarget: 'output',
        visualLabel: `Console: ${outLine}`,
        visualSublabel: 'Standard Output',
        consoleOutput: cumulativeConsole.join('\n'),
        isConsoleVisible: true,
        speechHinglish: `Ab \`print()\` function evaluated Value \`${outLine}\` ko Console Output screen par display kar deta hai.`,
        speechEnglish: `Now the print() function sends the evaluated result "${outLine}" to the Console Output.`,
        cardExplanationHinglish: `\`${trimmed}\` execute hone par Console Output screen par \`${outLine}\` print ho jata hai.`,
        cardExplanationEnglish: `Executing ${trimmed} displays "${outLine}" on the Console.`,
        conceptBoxes: [
          { label: 'print()', sublabel: 'Output Function', isActive: true },
          { label: targetExpr, sublabel: `Value: ${formatVal(ev.result)}`, isActive: true },
          { label: `Console: ${outLine}`, sublabel: 'Verified Output', isActive: true },
        ],
        operatorDetails: {
          visualType: 'console',
          technicalConcept: 'Console Output (print)',
          activeSourceRange: { line: lineNum, startCol: 1, endCol: rawLine.length, codeText: trimmed },
          operatorSymbol: 'print()',
          operatorMeaning: 'Evaluated expression result ko standard output terminal par display karta hai.',
          evaluatedOperands: [{ label: 'Printed Value', expr: targetExpr, value: outLine, dataType: ev.result.type }],
          intermediateResult: outLine,
        },
      });
    }
  }

  // Ensure totalSteps is set accurately on every step
  steps.forEach((s, i) => {
    s.step = i + 1;
    s.totalSteps = steps.length;
  });

  return steps;
}

export function buildOperatorsQuestionConfig(
  topicId: string,
  q: TopicQuestion,
  existingValidator?: (code: string, stdout: string) => { passed: boolean; message: string }
): QuestionV5Config {
  // Curated human-grade titles for operator challenges
  const OPERATOR_CURATED_TITLES: Record<string, string> = {
    'OP-01-01': 'Addition Operator (+)',
    'OP-01-02': 'Subtraction Operator (-)',
    'OP-01-03': 'Multiplication & Precedence (*, +)',
    'OP-01-04': 'Float Division (/)',
    'OP-01-05': 'Integer Floor Division (//)',
    'OP-01-06': 'Modulus Operator (%)',
    'OP-01-07': 'Exponentiation Operator (**)',
  };

  let cleanTitle = OPERATOR_CURATED_TITLES[q.id];
  if (!cleanTitle) {
    if (q.number === 1 && topicId.includes('operators')) cleanTitle = 'Addition Operator (+)';
    else if (q.number === 2 && topicId.includes('operators')) cleanTitle = 'Subtraction Operator (-)';
    else if (q.number === 3 && topicId.includes('operators')) cleanTitle = 'Multiplication & Precedence (*, +)';
    else {
      const rawTitle = q.question
        .split('.')[0]
        .replace(/^Write a (Python )?program (that )?/i, '')
        .replace(/^Create (a )?/i, '')
        .trim();
      cleanTitle = rawTitle.length > 0 ? (rawTitle.length > 40 ? `${rawTitle.slice(0, 38)}...` : rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1)) : `Challenge ${q.number}`;
    }
  }

  const steps = buildOperatorsVisualStepsForQuestion(topicId, q);

  const hints: ProgressiveHint[] = [
    {
      level: 1,
      name: 'Concept & Operator Hint',
      badge: 'Hint 1',
      hintHinglish: q.hindiDescription,
      hintEnglish: q.question,
    },
    {
      level: 2,
      name: 'Expression Syntax Hint',
      badge: 'Hint 2',
      hintHinglish: `Sahi Operator aur Operands ka use karein: ${q.referenceCode.split('\n').filter(Boolean)[0]}`,
      hintEnglish: `Start with: ${q.referenceCode.split('\n').filter(Boolean)[0]}`,
    },
    {
      level: 3,
      name: 'Verified Solution Structure',
      badge: 'Hint 3',
      hintHinglish: `Reference structure: ${q.referenceCode.replace(/\n+/g, ' | ')}`,
      hintEnglish: `Reference solution: ${q.referenceCode.replace(/\n+/g, ' | ')}`,
    },
  ];

  const defaultValidate = (code: string, stdout: string) => {
    const trimmedOut = stdout.trim();
    const expected = q.sampleOutput.trim();
    let passed = false;
    if (expected.length === 0) {
      passed = true;
    } else if (trimmedOut === expected) {
      passed = true;
    } else {
      const outLines = trimmedOut.split('\n').map((l) => l.trim()).filter(Boolean);
      const expLines = expected.split('\n').map((l) => l.trim()).filter(Boolean);
      if (
        outLines.length === expLines.length &&
        expLines.every((el, idx) => outLines[idx] === el || outLines[idx].includes(el))
      ) {
        passed = true;
      }
    }
    return {
      passed,
      message: passed
        ? '🎉 Excellent! Challenge passed successfully!'
        : `Expected output:\n${expected}\nYour output:\n${trimmedOut}`,
    };
  };

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
    validate: existingValidator || defaultValidate,
    diagnose: diagnoseHelloWorldError,
  };
}

export function runOperatorsPythonSandbox(code: string, sampleInput = ''): { stdout: string; error: string | null } {
  try {
    const steps = buildOperatorsVisualStepsForQuestion('py_02_operators', {
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
    });
    const lastConsole = steps.length > 0 ? steps[steps.length - 1].consoleOutput : '';
    return { stdout: lastConsole, error: null };
  } catch (e: any) {
    return { stdout: '', error: e?.message || 'Execution error' };
  }
}
