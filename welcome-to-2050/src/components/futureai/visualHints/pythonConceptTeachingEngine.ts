/**
 * FUTURE IT INDUSTRY — COMPLETE PYTHON CODE EXPLANATION ENGINE
 *
 * Comprehensive, beginner-friendly programming teacher for Python challenges.
 * Analyzes entire code line-by-line, breaks down fine syntax details (functions,
 * parentheses, quotes, escape sequences, literals, operators, variables),
 * and dynamically calculates lesson durations without arbitrary time limits.
 */

export type PythonConceptType =
  | 'escape_newline'
  | 'escape_tab'
  | 'escape_backslash'
  | 'syntax_parentheses'
  | 'syntax_quotes'
  | 'f_string'
  | 'string_concatenation'
  | 'variable_assignment'
  | 'integer_literal'
  | 'float_literal'
  | 'string_literal'
  | 'boolean_literal'
  | 'list_collection'
  | 'dict_collection'
  | 'arithmetic_operator'
  | 'comparison_operator'
  | 'logical_operator'
  | 'builtin_print'
  | 'builtin_input'
  | 'builtin_len'
  | 'builtin_type'
  | 'builtin_range'
  | 'conditional_if'
  | 'loop_for'
  | 'loop_while'
  | 'def_function'
  | 'sequential_execution';

export interface DetectedPythonConcept {
  type: PythonConceptType;
  priority: number; // lower means taught earlier
  tokenText: string;
  lineNumber: number;
  titleHi: string;
  titleEn: string;
  whyUsedHi: string;
  whyUsedEn: string;
  howItWorksHi: string;
  howItWorksEn: string;
  executionEffectHi: string;
  executionEffectEn: string;
  cardPillText: string;
  cardVariant: 'blue' | 'yellow' | 'purple';
  cardCaptionHi: string;
  cardCaptionEn: string;
}

export interface SyntaxAnatomyItem {
  token: string;
  roleHi: string;
  roleEn: string;
  whyHi: string;
  whyEn: string;
}

/**
 * Calculates dynamic narration duration from actual text length and event steps.
 * Removes all artificial time limits so lessons have complete time to teach.
 */
export function calculateDynamicNarrationDuration(
  spokenText: string,
  lang: 'hi' | 'en',
  eventCount: number = 2
): number {
  if (!spokenText || spokenText.trim().length === 0) {
    return Math.max(8000, eventCount * 3800);
  }
  // Realistic beginner teaching pace: ~125 words/minute (approx 480ms per word)
  // Syllabic character weighting in Hindi/English (~65ms per character)
  const words = spokenText.trim().split(/\s+/).length;
  const wordPaced = words * (lang === 'hi' ? 440 : 400);
  const charPaced = spokenText.length * (lang === 'hi' ? 64 : 58);
  const speechBase = Math.max(wordPaced, charPaced);

  // Guarantee minimum time per visual micro-step so animations never rush ahead of explanation
  const minEventsDuration = Math.max(eventCount * 4200, 7500);

  return Math.max(minEventsDuration, speechBase + 1600);
}

/**
 * Breaks down any Python statement into its anatomical syntax details:
 * e.g., print, (, ", text, \n, text, ", )
 */
export function extractSyntaxAnatomy(codeLine: string): SyntaxAnatomyItem[] {
  const items: SyntaxAnatomyItem[] = [];
  const line = codeLine.trim();

  // 1. Function name
  const fnMatch = line.match(/^([a-zA-Z_]\w*)\s*\(/);
  if (fnMatch) {
    const fn = fnMatch[1];
    items.push({
      token: `${fn}()`,
      roleHi: `बिल्ट-इन Function (${fn})`,
      roleEn: `Built-in function (${fn})`,
      whyHi: `Python का बिल्ट-इन कमांड जो Output या क्रिया निष्पादित करने के लिए उपयोग किया जाता है।`,
      whyEn: `Python's built-in command used to execute actions or output data to the console.`,
    });

    items.push({
      token: '(',
      roleHi: 'कॉल पैरेंथेसिस (Parentheses)',
      roleEn: 'Invocation Parentheses',
      whyHi: `Function को कॉल करने और उसके अंदर Arguments (Data) पास करने के लिए उपयोग किया जाता है।`,
      whyEn: `Used to invoke the function and pass arguments to it for execution.`,
    });
  }

  // 2. Quotation marks (string delimiters)
  if (line.includes('"') || line.includes("'")) {
    items.push({
      token: '""',
      roleHi: 'कोटेशन मार्क्स (Quotes)',
      roleEn: 'String Quotes',
      whyHi: `Python को बताते हैं कि अंदर का Data टेक्स्ट (string) है, न कि कोई Code कमांड।`,
      whyEn: `Tells Python that the enclosed characters are text data (a string) rather than a code command.`,
    });
  }

  // 3. Escape sequences inside line
  if (line.includes('\\n')) {
    items.push({
      token: '\\n',
      roleHi: 'न्यूलाइन एस्केप (\\n)',
      roleEn: 'Newline Escape (\\n)',
      whyHi: `टेक्स्ट को ठीक इस बिंदु से अगली Row पर ब्रेक करने का अदृश्य Enter कमांड है।`,
      whyEn: `Invisible newline command that breaks the string and continues text on the next line.`,
    });
  }

  if (line.includes('\\t')) {
    items.push({
      token: '\\t',
      roleHi: 'टैब एस्केप (\\t)',
      roleEn: 'Tab Escape (\\t)',
      whyHi: `Column अलाइनमेंट के लिए हॉरिजॉन्टल टैब स्पेस जोड़ता है।`,
      whyEn: `Inserts horizontal tab spacing for neat column formatting.`,
    });
  }

  if (line.endsWith(')')) {
    items.push({
      token: ')',
      roleHi: 'क्लोजिंग पैरेंथेसिस',
      roleEn: 'Closing Parenthesis',
      whyHi: `Function कॉल को पूरा करता है और Python को Statement चलाने का निर्देश देता है।`,
      whyEn: `Completes the function call and signals Python to execute the expression.`,
    });
  }

  return items;
}

/**
 * Intelligent analyzer that inspects Python code and extracts all concepts.
 */
export function analyzePythonCodeConcepts(
  code: string,
  expectedOutput: string = ''
): DetectedPythonConcept[] {
  const cleanCode = code.trim();
  const lines = cleanCode.split('\n');
  const concepts: DetectedPythonConcept[] = [];
  const seenTypes = new Set<PythonConceptType>();

  const addConcept = (c: DetectedPythonConcept) => {
    if (!seenTypes.has(c.type)) {
      seenTypes.add(c.type);
      concepts.push(c);
    }
  };

  // 1. ESCAPE SEQUENCES (Highest priority teaching moments in string formatting)
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    // Newline \n
    if (line.includes('\\n') || /["'].*?\\n.*?["']/.test(line)) {
      addConcept({
        type: 'escape_newline',
        priority: 1,
        tokenText: '\\n',
        lineNumber: lineNum,
        titleHi: 'न्यूलाइन एस्केप सीक्वेंस (\\n)',
        titleEn: 'Newline Escape Sequence (\\n)',
        whyUsedHi:
          'यहाँ backslash n (\\n) का उपयोग किया गया है। Python में इसे newline escape sequence कहते हैं। इसका काम text को अगली line में दिखाना है।',
        whyUsedEn:
          'Backslash n (\\n) is a newline escape sequence. It tells Python to break the line and continue the text on the next line.',
        howItWorksHi:
          'जब Python String में \\n को पढ़ता है, तो वह दोनों अक्षरों को प्रिंट करने के बजाय एक अदृश्य Enter (लाइन-फ़ीड) कमांड चलाता है।',
        howItWorksEn:
          'When Python encounters \\n inside quotes, it executes an invisible Enter (↵) command rather than printing the characters.',
        executionEffectHi:
          'Console में टेक्स्ट ठीक उसी जगह से टूटकर दूसरी लाइन पर छपता है।',
        executionEffectEn:
          'In the output console, the string splits exactly at \\n onto a new line.',
        cardPillText: '\\n (Newline)',
        cardVariant: 'yellow',
        cardCaptionHi: 'Newline Escape\nटेक्स्ट को अगली Row पर भेजता है',
        cardCaptionEn: 'Newline Escape\nBreaks text onto next row',
      });
    }

    // Tab \t
    if (line.includes('\\t') || /["'].*?\\t.*?["']/.test(line)) {
      addConcept({
        type: 'escape_tab',
        priority: 2,
        tokenText: '\\t',
        lineNumber: lineNum,
        titleHi: 'टैब एस्केप सीक्वेंस (\\t)',
        titleEn: 'Tab Escape Sequence (\\t)',
        whyUsedHi:
          'यहाँ backslash t (\\t) का उपयोग किया गया है। इसे tab escape sequence कहते हैं, जो टेक्स्ट के बीच Column जितना स्पेस जोड़ता है।',
        whyUsedEn:
          'Backslash t (\\t) is a tab escape sequence used to insert consistent horizontal tab spacing.',
        howItWorksHi:
          'Python कर्सर को अगले टैब-स्टॉप (आमतौर पर 4 या 8 स्पेस) पर ले जाता है।',
        howItWorksEn:
          'Python advances the cursor to the next tab-stop position to format columns.',
        executionEffectHi: 'Console में शब्दों के बीच बराबर दूरी वाला गैप आ जाता है।',
        executionEffectEn: 'Neat column spacing appears on the output console.',
        cardPillText: '\\t (Tab)',
        cardVariant: 'yellow',
        cardCaptionHi: 'Tab Escape\nकॉलम स्पेस जोड़ता है',
        cardCaptionEn: 'Tab Escape\nInserts horizontal tab space',
      });
    }

    // Backslash \\
    if (line.includes('\\\\')) {
      addConcept({
        type: 'escape_backslash',
        priority: 3,
        tokenText: '\\\\',
        lineNumber: lineNum,
        titleHi: 'बैकस्लैश एस्केप (\\\\)',
        titleEn: 'Backslash Escape (\\\\)',
        whyUsedHi:
          'क्योंकि बैकस्लैश एक विशेष एस्केप कैरेक्टर है, इसलिए वास्तविक बैकस्लैश प्रिंट करने के लिए दो बैकस्लैश (\\\\) लिखे जाते हैं।',
        whyUsedEn:
          'Since backslash is a reserved escape character, writing double backslash (\\\\) prints a literal backslash.',
        howItWorksHi: 'Python पहले बैकस्लैश को एस्केप मानकर केवल एक \\ प्रिंट करता है।',
        howItWorksEn: 'Python escapes the slash and outputs a single literal backslash.',
        executionEffectHi: 'Console में केवल एक \\ दिखाई देता है।',
        executionEffectEn: 'A single backslash character is output.',
        cardPillText: '\\\\ (Literal Slash)',
        cardVariant: 'yellow',
        cardCaptionHi: 'Literal Slash\nएक बैकस्लैश दिखाता है',
        cardCaptionEn: 'Literal Slash\nOutputs one backslash',
      });
    }
  });

  // 2. F-STRINGS (Formatted Strings)
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    if (/f["'].*?\{.+?\}.*?["']/.test(line)) {
      addConcept({
        type: 'f_string',
        priority: 4,
        tokenText: 'f"..."',
        lineNumber: lineNum,
        titleHi: 'f-String फ़ॉर्मेटिंग',
        titleEn: 'f-String Formatting',
        whyUsedHi:
          'यहाँ f-string (formatted string) का इस्तेमाल हुआ है। यह String के अंदर Variables को आसानी से शामिल करने का आधुनिक तरीका है।',
        whyUsedEn:
          'This is an f-string (formatted string). It allows embedding Python variables directly inside strings using curly brackets {}.',
        howItWorksHi:
          'Python कर्ली ब्रैकेट्स {} के अंदर लिखे Variable का Value निकालता है और उसे String में बदल देता है।',
        howItWorksEn:
          'Python evaluates whatever expression is inside {} and dynamically replaces it with its string value.',
        executionEffectHi: 'Variable का वास्तविक Value String के बीच में छप जाता है।',
        executionEffectEn: 'The variable value seamlessly appears inside the printed text.',
        cardPillText: 'f"{var}"',
        cardVariant: 'yellow',
        cardCaptionHi: 'f-String\nवेरिएबल Value जोड़ता है',
        cardCaptionEn: 'f-String\nEmbeds variable value',
      });
    }
  });

  // 3. VARIABLE ASSIGNMENTS
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const varMatch = line.trim().match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (varMatch && !line.trim().startsWith('def ') && !line.trim().startsWith('if ')) {
      addConcept({
        type: 'variable_assignment',
        priority: 5,
        tokenText: '=',
        lineNumber: lineNum,
        titleHi: 'Variable Assignment (=)',
        titleEn: 'Variable Assignment (=)',
        whyUsedHi: `यहाँ Variable ${varMatch[1]} बनाया गया है। Variable मेमोरी में Data को सुरक्षित रखने का एक लेबल वाला डिब्बा होता है।`,
        whyUsedEn: `This assigns a value to variable ${varMatch[1]} using the assignment operator (=). Variables store data in memory.`,
        howItWorksHi: `Python दाईं तरफ़ के Value (${varMatch[2].trim()}) को Computer की मेमोरी में सेव करके Variable ${varMatch[1]} से जोड़ देता है।`,
        howItWorksEn: `Python computes the right-hand value and binds it to ${varMatch[1]} in system memory.`,
        executionEffectHi: 'मेमोरी में नया Variable रजिस्टर हो जाता है।',
        executionEffectEn: 'The variable is stored and ready for subsequent statements.',
        cardPillText: `${varMatch[1]} = val`,
        cardVariant: 'blue',
        cardCaptionHi: 'Variable Store\nमेमोरी में Value सुरक्षित',
        cardCaptionEn: 'Variable Store\nSaves value in memory',
      });
    }
  });

  // 4. DATA TYPES: NUMBERS VS STRINGS
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const numPrintMatch = line.trim().match(/^print\s*\(\s*(\d+)\s*\)$/);
    if (numPrintMatch) {
      addConcept({
        type: 'integer_literal',
        priority: 6,
        tokenText: numPrintMatch[1],
        lineNumber: lineNum,
        titleHi: 'Integer (संख्या) Data Type',
        titleEn: 'Integer (Number) Data Type',
        whyUsedHi: `यहाँ संख्या ${numPrintMatch[1]} को बिना कोट्स के लिखा गया है। Python में नंबर्स को गणितीय Calculations के लिए बिना कोट्स के लिखा जाता है।`,
        whyUsedEn: `The number ${numPrintMatch[1]} is an integer written without quotation marks. Numbers in Python represent numeric data.`,
        howItWorksHi: 'बिना कोट्स के लिखने पर Python इसे int (integer) समझता है।',
        howItWorksEn: 'Without quotation marks, Python recognizes this token as a pure integer literal.',
        executionEffectHi: 'Console में संख्या का सटीक Value प्रिंट होता है।',
        executionEffectEn: 'The numeric value prints cleanly to the console.',
        cardPillText: `${numPrintMatch[1]} (int)`,
        cardVariant: 'yellow',
        cardCaptionHi: 'Integer (Number)\nबिना कोट्स वाली संख्या',
        cardCaptionEn: 'Integer (Number)\nUnquoted numeric literal',
      });
    }
  });

  // 5. OPERATORS (+, -, *, /)
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    if (/[+\-*/%]/.test(line) && !line.trim().startsWith('#')) {
      const opMatch = line.match(/([+\-*/%])/);
      const op = opMatch ? opMatch[1] : '+';
      addConcept({
        type: 'arithmetic_operator',
        priority: 7,
        tokenText: op,
        lineNumber: lineNum,
        titleHi: `Operator (${op})`,
        titleEn: `Operator (${op})`,
        whyUsedHi: `यहाँ Operator (${op}) का इस्तेमाल हुआ है, जो दो Values के बीच Calculation या क्रिया करने के लिए उपयोग किया जाता है।`,
        whyUsedEn: `The (${op}) operator performs an operation or calculation between two values.`,
        howItWorksHi: `Python Operator के दोनों तरफ़ के ऑपरेंड्स को पढ़कर तुरंत परिणाम निकालता है।`,
        howItWorksEn: `Python computes the expression based on standard precedence rules.`,
        executionEffectHi: 'Calculation का परिणाम अगली क्रिया के लिए तैयार हो जाता है।',
        executionEffectEn: 'The computed result is fed into the execution flow.',
        cardPillText: `expr (${op})`,
        cardVariant: 'blue',
        cardCaptionHi: `Calculation (${op})\nगणना प्रक्रिया`,
        cardCaptionEn: `Calculation (${op})\nComputes result`,
      });
    }
  });

  // 6. CONDITIONALS & LOOPS
  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    if (/\bif\s+/.test(line)) {
      addConcept({
        type: 'conditional_if',
        priority: 8,
        tokenText: 'if',
        lineNumber: lineNum,
        titleHi: 'if Conditional Statement',
        titleEn: 'if Conditional Statement',
        whyUsedHi: 'यहाँ if Condition का इस्तेमाल हुआ है। यह Python को निर्णय लेने की शक्ति देता है।',
        whyUsedEn: 'An if condition allows Python to decide whether to execute a block of code.',
        howItWorksHi: 'शर्त True होने पर अंदर का Code चलता है, False होने पर Python उसे छोड़ देता है।',
        howItWorksEn: 'When the expression evaluates to True, Python enters and runs the indented block.',
        executionEffectHi: 'Condition के आधार पर सही ब्रांच निष्पादित होती है।',
        executionEffectEn: 'The matching code branch executes based on the condition test.',
        cardPillText: 'if (condition)',
        cardVariant: 'blue',
        cardCaptionHi: 'Decision Check\nशर्त की जाँच',
        cardCaptionEn: 'Decision Check\nEvaluates boolean test',
      });
    }
    if (/\bfor\s+/.test(line)) {
      addConcept({
        type: 'loop_for',
        priority: 9,
        tokenText: 'for',
        lineNumber: lineNum,
        titleHi: 'for Loop (Iteration)',
        titleEn: 'for Loop (Iteration)',
        whyUsedHi: 'for Loop का उपयोग किसी क्रम के प्रत्येक एलिमेंट पर बारी-बारी से Code दोहराने के लिए होता है।',
        whyUsedEn: 'A for loop iterates sequentially over a sequence of items, repeating the body for each item.',
        howItWorksHi: 'Python Loop Variable में एक-एक Value डालकर Code ब्लॉक को चलाता है।',
        howItWorksEn: 'Python assigns each element to the iterator variable and executes the loop body.',
        executionEffectHi: 'Loop के हर चक्र में Output या Calculation दोहराई जाती है।',
        executionEffectEn: 'Execution repeats cleanly for each item in the collection.',
        cardPillText: 'for item in seq',
        cardVariant: 'blue',
        cardCaptionHi: 'Loop Repeat\nप्रत्येक एलिमेंट पर दोहराव',
        cardCaptionEn: 'Loop Repeat\nIterates through sequence',
      });
    }
  });

  // 7. MULTILINE SEQUENTIAL STATEMENTS
  const statementCount = lines.filter((l) => l.trim().length > 0 && !l.trim().startsWith('#')).length;
  if (statementCount > 1) {
    addConcept({
      type: 'sequential_execution',
      priority: 10,
      tokenText: 'Sequential',
      lineNumber: 1,
      titleHi: 'क्रमवार निष्पादन (Sequential Execution)',
      titleEn: 'Sequential Execution',
      whyUsedHi: `यहाँ Code में ${statementCount} अलग-अलग Statements हैं। Python हमेशा Code को ऊपर से नीचे एक-एक करके चलाता है।`,
      whyUsedEn: `The script contains ${statementCount} sequential statements. Python always runs code in top-to-bottom order.`,
      howItWorksHi: 'पहली लाइन पूरी होने के बाद ही Python दूसरी लाइन पर बढ़ता है।',
      howItWorksEn: 'Python finishes executing line 1 before advancing to line 2.',
      executionEffectHi: 'Console में हर Statement का परिणाम उसके सही क्रम में दिखाई देता है।',
      executionEffectEn: 'The console receives outputs in exact sequential execution order.',
      cardPillText: `${statementCount} Lines`,
      cardVariant: 'blue',
      cardCaptionHi: 'Top to Bottom\nऊपर से नीचे क्रमानुसार',
      cardCaptionEn: 'Top to Bottom\nSequential execution',
    });
  }

  // Sort concepts by priority (learning order)
  return concepts.sort((a, b) => a.priority - b.priority);
}
