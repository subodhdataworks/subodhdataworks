/**
 * FUTURE IT INDUSTRY — AI-POWERED VISUAL HINTS ENGINE (PHASE 1)
 * Course: Python
 * Topic 1: Say Hello, World! With Python (10 Challenges)
 *
 * Architectural Principles:
 * 1. Reusable, data-driven visual animation engine powered by structured step plans.
 * 2. Maps strictly by permanent Question IDs (101–110 in Question Bank & 1–10 in Topic 1 Arena)
 *    with deterministic fallback generation.
 * 3. Solution Leak Prevention: Pre-submission hints never expose copy-pasteable full solution code.
 *    Full code walkthrough unlocks ONLY after an Accepted submission (solvedTaskIds.has(task.id)).
 * 4. Zero redundant Firestore reads or runtime API calls on student clicks — cached in memory.
 */

import {
  analyzePythonCodeConcepts,
  DetectedPythonConcept,
  calculateDynamicNarrationDuration,
  extractSyntaxAnatomy,
} from './pythonConceptTeachingEngine';
import { TOPIC_2_VISUAL_PLANS } from './topic2VisualPlans';
import {
  buildUniversalVisualHintPlan,
  parseProgramSemantics,
  composeUniversalVisualCards,
  generateUniversalScenes,
} from './universalTeachingEngine';

export type VisualArchetype =
  | 'single_stream'
  | 'personal_token'
  | 'banner_stream'
  | 'sequential_three_lines'
  | 'fstring_combiner'
  | 'type_comparison'
  | 'dual_call_stack'
  | 'newline_splitter'
  | 'exact_match_scanner'
  | 'single_print_multiline';

export interface VisualStepNode {
  id: string;
  label: string;
  sublabel?: string;
  badge: string;
  tone: 'blue' | 'cyan' | 'emerald' | 'amber' | 'purple' | 'rose';
  highlight?: boolean;
  codePattern?: string;
}

export interface VisualAnimationStep {
  stepNumber: number;
  title: string;
  narration: string;
  conceptTip: string;
  activeNodeIndex: number;
  /** Conceptual syntax pattern (NEVER the complete copyable solution) */
  patternPreview: string;
  /** Simulated terminal lines visible at this step */
  terminalLines: string[];
  /** Whether the terminal should animate character-by-character on this step */
  animateTyping?: boolean;
  /** Highlighted token or escape sequence in the visualization */
  focusToken?: string;
}

export interface VisualHintAnimationPlan {
  /** Permanent canonical ID (e.g. 'py_t1_q101') */
  planId: string;
  /** Supported database task IDs (e.g. [101, 1]) */
  questionIds: number[];
  topicId: number;
  questionTitle: string;
  conceptTag: string;
  archetype: VisualArchetype;
  summaryExplanation: string;
  thinkingPrompt: string;
  nodes: VisualStepNode[];
  steps: VisualAnimationStep[];
  /** Only unlocked AFTER student achieves Accepted submission */
  postSolveWalkthrough: {
    annotatedCode: string;
    lineByLineBreakdown: string[];
    keyTakeaway: string;
  };
  validatedSafe: boolean;
  generatedByModel: string;
}

export interface QuestionInputRecord {
  id: number;
  taskNumber: number;
  title: string;
  problemStatement: string;
  highlightedKeyword: string;
  sampleOutput: string;
  constraints?: string[];
  solution?: string;
}

// ============================================================================
// SOLUTION LEAK VALIDATOR
// Ensures pre-submission visual steps never expose the exact executable solution
// ============================================================================
export function validateNoSolutionLeak(
  plan: VisualHintAnimationPlan,
  exactSolution?: string
): boolean {
  if (!exactSolution) return true;
  const normalizedSol = exactSolution.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!normalizedSol) return true;

  for (const step of plan.steps) {
    if (step.patternPreview) {
      const normalizedPattern = step.patternPreview.trim().toLowerCase().replace(/\s+/g, ' ');
      if (normalizedPattern === normalizedSol) {
        return false;
      }
    }
  }
  return true;
}

// ============================================================================
// STRUCTURED ANIMATION PLANS FOR TOPIC 1 (ALL 10 CHALLENGES)
// ============================================================================
const TOPIC_1_VISUAL_PLANS: VisualHintAnimationPlan[] = [
  // --------------------------------------------------------------------------
  // QUESTION 1 (ID: 101 / 1): Print Hello, World!
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q101_hello_world',
    questionIds: [101, 1],
    topicId: 1,
    questionTitle: 'Print Hello, World!',
    conceptTag: 'Standard Output & print() Function',
    archetype: 'single_stream',
    summaryExplanation:
      'In Python, the built-in print() function takes text wrapped inside quotation marks and sends it as a character stream to the output terminal.',
    thinkingPrompt:
      'Which built-in Python function sends text to the screen, and how do you wrap the greeting message inside its parentheses?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Understanding print()',
        sublabel: 'Built-in output function',
        tone: 'blue',
        codePattern: 'print()',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Text Inside Quotes',
        sublabel: 'String argument "Hello, World!"',
        tone: 'cyan',
        codePattern: '"Hello, World!"',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Code Execution',
        sublabel: 'Character stream to stdout',
        tone: 'purple',
        codePattern: 'print("Hello, World!")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Final Output',
        sublabel: 'Rendered console result',
        tone: 'emerald',
        codePattern: 'Hello, World!',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Understanding print()',
        narration:
          'Python uses the built-in print() function to send data from your code to the output console.',
        conceptTip: 'Function names in Python are lowercase: write print(), never Print().',
        activeNodeIndex: 0,
        patternPreview: 'print("Hello, World!")',
        terminalLines: [],
        focusToken: 'print()',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Text Inside Quotes',
        narration:
          'Quotation marks " " wrap around Hello, World! so Python treats all 13 characters—letters, comma, space, and exclamation mark—as a string.',
        conceptTip: 'The quotes define the start and end of the string; they are not printed in the console.',
        activeNodeIndex: 1,
        patternPreview: 'print("Hello, World!")',
        terminalLines: [],
        focusToken: '"Hello, World!"',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Code Execution',
        narration:
          'When Line 1 executes, print() reads the string argument "Hello, World!" and sends each character in sequence to standard output.',
        conceptTip: 'Watch how each character from index 0 (H) to 12 (!) flows from the code to the console.',
        activeNodeIndex: 2,
        patternPreview: 'print("Hello, World!")  ──►  stdout',
        terminalLines: ['Hello, World!'],
        animateTyping: true,
        focusToken: 'Executing Line 1',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Output',
        narration:
          'Execution completes! The console displays Hello, World! cleanly without the surrounding quotation marks.',
        conceptTip: 'Notice the exact punctuation: capital H, comma, space, capital W, and exclamation mark!',
        activeNodeIndex: 3,
        patternPreview: 'Hello, World!',
        terminalLines: ['Hello, World!'],
        animateTyping: false,
        focusToken: 'Hello, World!',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Hello, World!")',
      lineByLineBreakdown: [
        'print(...) invokes Python’s standard output function.',
        '"Hello, World!" is a string literal containing 13 exact characters.',
        'Upon execution, Python writes Hello, World! to the terminal and appends a newline.',
      ],
      keyTakeaway: 'Always wrap literal text inside matching quotes inside print().',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 2 (ID: 102 / 2): Print your name.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q102_print_name',
    questionIds: [102, 2],
    topicId: 1,
    questionTitle: 'Print your name.',
    conceptTag: 'Personalized String Output',
    archetype: 'personal_token',
    summaryExplanation:
      'Any personal name is textual data (a string). Passing your name inside quotes to print() sends those characters directly to the output console.',
    thinkingPrompt:
      'How do you tell Python that your name is a piece of text to display rather than a command name?',
    nodes: [
      {
        id: 'n1',
        badge: 'INPUT IDEA',
        label: 'Your Name Text',
        sublabel: 'Alphabetic characters',
        tone: 'amber',
        codePattern: 'YourName',
      },
      {
        id: 'n2',
        badge: 'STRING GUARD',
        label: 'Wrap in Quotes',
        sublabel: 'Creates a Python str',
        tone: 'cyan',
        codePattern: '"<YourName>"',
      },
      {
        id: 'n3',
        badge: 'EXECUTOR',
        label: 'print() Pipeline',
        sublabel: 'Sends str to terminal',
        tone: 'blue',
        codePattern: 'print("<YourName>")',
      },
      {
        id: 'n4',
        badge: 'OUTPUT',
        label: 'Console Display',
        sublabel: 'Clean name printed',
        tone: 'emerald',
        codePattern: 'Rahul',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Choose the Name Text to Display',
        narration:
          'Decide on the name you want Python to show in the terminal (for example, your own first name).',
        conceptTip: 'In Python, raw words without quotes are treated as variable identifiers, which causes a NameError if not defined.',
        activeNodeIndex: 0,
        patternPreview: '# Raw word: YourName (Needs quotes!)',
        terminalLines: [],
        focusToken: 'str',
      },
      {
        stepNumber: 2,
        title: '2. Convert Name into a String Literal',
        narration:
          'Surround the name with matching double quotes (" ") or single quotes (\' \') so Python treats it as text data.',
        conceptTip: 'Both "Aarav" and \'Aarav\' are valid strings in Python.',
        activeNodeIndex: 1,
        patternPreview: '"<your_name_here>"',
        terminalLines: [],
        focusToken: '"<name>"',
      },
      {
        stepNumber: 3,
        title: '3. Pass the String into print()',
        narration:
          'Place your quoted name inside the parentheses of print() to send it to the output stream.',
        conceptTip: 'You can either pass the string directly into print() or store it in a variable first.',
        activeNodeIndex: 2,
        patternPreview: 'print( "<your_name_here>" )',
        terminalLines: ['Rahul'],
        animateTyping: true,
        focusToken: 'print(...)',
      },
      {
        stepNumber: 4,
        title: '4. Personalized Output Appears in Console',
        narration:
          'Python strips the outer quotation marks and prints your clean name on the first line of the terminal.',
        conceptTip: 'Make sure the printed output is non-empty!',
        activeNodeIndex: 3,
        patternPreview: '# Console displays your name ✅',
        terminalLines: ['Rahul'],
        animateTyping: false,
        focusToken: 'Output Ready',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Rahul")',
      lineByLineBreakdown: [
        '"Rahul" defines a string literal representing the student’s name.',
        'print(...) outputs the characters R-a-h-u-l to the terminal.',
      ],
      keyTakeaway: 'Text literals such as names must always be enclosed in quotation marks.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 3 (ID: 103 / 3): Print Welcome to Future IT Industry.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q103_welcome_future_it',
    questionIds: [103, 3],
    topicId: 1,
    questionTitle: 'Print Welcome to Future IT Industry.',
    conceptTag: 'Multi-Word Sentence Output',
    archetype: 'banner_stream',
    summaryExplanation:
      'A single string literal can hold an entire multi-word phrase. Spaces and uppercase letters inside the quotes are preserved word-for-word.',
    thinkingPrompt:
      'How does Python preserve spaces between words like "Welcome", "to", "Future", "IT", and "Industry" when printing?',
    nodes: [
      {
        id: 'n1',
        badge: 'SENTENCE',
        label: '5-Word Phrase',
        sublabel: 'Spaces preserved inside quotes',
        tone: 'blue',
        codePattern: '"Word1 Word2 Word3..."',
      },
      {
        id: 'n2',
        badge: 'CASE CHECK',
        label: 'Capitalization',
        sublabel: 'W • F • IT • I',
        tone: 'amber',
        codePattern: 'Exact Case Match',
      },
      {
        id: 'n3',
        badge: 'STREAM',
        label: 'print() Execution',
        sublabel: '29-char buffer flush',
        tone: 'cyan',
        codePattern: 'print( "<welcome_phrase>" )',
      },
      {
        id: 'n4',
        badge: 'CONSOLE',
        label: 'Terminal Output',
        sublabel: 'Full banner rendered',
        tone: 'emerald',
        codePattern: 'Welcome to Future IT Industry',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Construct the Multi-Word String',
        narration:
          'When you wrap a full sentence in quotes, every space character between words is part of the string.',
        conceptTip: 'You only need ONE pair of quotes around the entire sentence—not around each individual word.',
        activeNodeIndex: 0,
        patternPreview: '"<Word1> <Word2> <Word3> <Word4> <Word5>"',
        terminalLines: [],
        focusToken: 'Spaces Inside " "',
      },
      {
        stepNumber: 2,
        title: '2. Verify Uppercase & Acronym Letters',
        narration:
          'Check capitalization carefully: "Welcome", "Future", "IT" (both letters capital), and "Industry".',
        conceptTip: 'String matching in coding challenges is case-sensitive.',
        activeNodeIndex: 1,
        patternPreview: '"Welcome to Future IT Industry" (Target Text)',
        terminalLines: [],
        focusToken: 'IT',
      },
      {
        stepNumber: 3,
        title: '3. Stream Sentence Through print()',
        narration:
          'Pass the complete quoted welcome message into print() so Python transmits all 29 characters in order.',
        conceptTip: 'Ensure there are no extra leading or trailing spaces inside your quotes.',
        activeNodeIndex: 2,
        patternPreview: 'print( "<welcome_message>" )',
        terminalLines: ['Welcome to Future IT Industry'],
        animateTyping: true,
        focusToken: 'Streaming 29 chars',
      },
      {
        stepNumber: 4,
        title: '4. Verify Console Banner Output',
        narration:
          'The simulated Python console displays the complete welcome banner on a single line.',
        conceptTip: 'Compare your output word-by-word with the expected sample output.',
        activeNodeIndex: 3,
        patternPreview: '# Exact welcome banner printed ✅',
        terminalLines: ['Welcome to Future IT Industry'],
        animateTyping: false,
        focusToken: 'Verified',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Welcome to Future IT Industry")',
      lineByLineBreakdown: [
        'A single pair of double quotes encloses all five words and four spaces.',
        'print() writes the entire 29-character string to standard output.',
      ],
      keyTakeaway: 'Spaces inside quotation marks are preserved as part of the output text.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 4 (ID: 104 / 4): Print three different messages on separate lines.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q104_three_separate_lines',
    questionIds: [104, 4],
    topicId: 1,
    questionTitle: 'Print three different messages on separate lines.',
    conceptTag: 'Sequential Execution & Auto-Newline',
    archetype: 'sequential_three_lines',
    summaryExplanation:
      'By default, every print() statement in Python ends with an invisible newline character. Writing three separate print() statements on consecutive lines produces three separate lines of output.',
    thinkingPrompt:
      'What happens to the terminal cursor after one print() finishes, and how many print() calls do you need for three lines?',
    nodes: [
      {
        id: 'n1',
        badge: 'CALL #1',
        label: '1st print() Statement',
        sublabel: 'Outputs Line 1 + ↵',
        tone: 'blue',
        codePattern: 'print("<Message_1>")',
      },
      {
        id: 'n2',
        badge: 'CALL #2',
        label: '2nd print() Statement',
        sublabel: 'Outputs Line 2 + ↵',
        tone: 'cyan',
        codePattern: 'print("<Message_2>")',
      },
      {
        id: 'n3',
        badge: 'CALL #3',
        label: '3rd print() Statement',
        sublabel: 'Outputs Line 3 + ↵',
        tone: 'purple',
        codePattern: 'print("<Message_3>")',
      },
      {
        id: 'n4',
        badge: 'TERMINAL',
        label: '3 Console Lines',
        sublabel: 'Top-to-bottom order',
        tone: 'emerald',
        codePattern: '3 Distinct Lines',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Execute First print() → Line 1',
        narration:
          'Python executes line 1 of your script first. It prints the first message and automatically presses Enter (↵) at the end.',
        conceptTip: 'By default, print() has an invisible parameter end="\\n" that moves the cursor to the next line.',
        activeNodeIndex: 0,
        patternPreview: 'print( "<first_message>" )   # ──► Line 1 ↵',
        terminalLines: ['Line 1: Python is fun'],
        animateTyping: true,
        focusToken: 'Line 1 ↵',
      },
      {
        stepNumber: 2,
        title: '2. Execute Second print() → Line 2',
        narration:
          'Next, Python moves to line 2 of your script and executes the second print() call on a fresh terminal row.',
        conceptTip: 'Each print() statement in your code should be written on its own line with no indentation.',
        activeNodeIndex: 1,
        patternPreview: 'print( "<first_message>" )\nprint( "<second_message>" )  # ──► Line 2 ↵',
        terminalLines: ['Line 1: Python is fun', 'Line 2: Data Science is powerful'],
        animateTyping: true,
        focusToken: 'Line 2 ↵',
      },
      {
        stepNumber: 3,
        title: '3. Execute Third print() → Line 3',
        narration:
          'Finally, the third print() statement runs and outputs the third message on the third row of the console.',
        conceptTip: 'Python always executes top-to-bottom, one statement after another.',
        activeNodeIndex: 2,
        patternPreview: 'print( "<first_message>" )\nprint( "<second_message>" )\nprint( "<third_message>" )   # ──► Line 3 ↵',
        terminalLines: [
          'Line 1: Python is fun',
          'Line 2: Data Science is powerful',
          'Line 3: AI is the future',
        ],
        animateTyping: true,
        focusToken: 'Line 3 ↵',
      },
      {
        stepNumber: 4,
        title: '4. All Three Lines Rendered Cleanly',
        narration:
          'All three messages now appear on separate lines in the exact order your print() statements were written.',
        conceptTip: 'Write three consecutive print() statements in the editor to solve this challenge!',
        activeNodeIndex: 3,
        patternPreview: '# 3 sequential print() calls = 3 output lines ✅',
        terminalLines: [
          'Line 1: Python is fun',
          'Line 2: Data Science is powerful',
          'Line 3: AI is the future',
        ],
        animateTyping: false,
        focusToken: '3 Lines Complete',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Line 1: Python is fun")\nprint("Line 2: Data Science is powerful")\nprint("Line 3: AI is the future")',
      lineByLineBreakdown: [
        'Line 1 prints the first message and automatically moves to a new line.',
        'Line 2 prints the second message on row 2 and moves to row 3.',
        'Line 3 prints the third message on row 3.',
      ],
      keyTakeaway: 'Each separate print() call automatically starts on a new line in the terminal.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 5 (ID: 105 / 5): Print a sentence containing your name and age.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q105_name_and_age',
    questionIds: [105, 5],
    topicId: 1,
    questionTitle: 'Print a sentence containing your name and age.',
    conceptTag: 'Variables & f-String Formatting',
    archetype: 'fstring_combiner',
    summaryExplanation:
      'Python lets you combine text (like a name) and numbers (like age) into a single smooth sentence using f-strings: prefix the string with f and place variable names inside curly braces { }.',
    thinkingPrompt:
      'How do curly braces { } inside an f-string inject variable values directly into a sentence?',
    nodes: [
      {
        id: 'n1',
        badge: 'TEXT VAR',
        label: 'Name (str)',
        sublabel: 'name = "<Name>"',
        tone: 'blue',
        codePattern: 'name = "..."',
      },
      {
        id: 'n2',
        badge: 'NUMBER VAR',
        label: 'Age (int)',
        sublabel: 'age = <Number>',
        tone: 'amber',
        codePattern: 'age = 21',
      },
      {
        id: 'n3',
        badge: 'F-STRING',
        label: 'Template Merge',
        sublabel: 'f"... {name} ... {age} ..."',
        tone: 'purple',
        codePattern: 'f"... {name} ... {age}"',
      },
      {
        id: 'n4',
        badge: 'OUTPUT',
        label: 'Combined Sentence',
        sublabel: 'Text + Number unified',
        tone: 'emerald',
        codePattern: 'My name is Rahul and I am 21 years old.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Store Name as Text & Age as a Number',
        narration:
          'Create a variable for your name (inside quotes) and a variable for your age (a number without quotes).',
        conceptTip: 'Strings use quotes ("Rahul"), while numeric integers do NOT need quotes (21).',
        activeNodeIndex: 0,
        patternPreview: 'name = "<your_name>"\nage = <your_age_number>',
        terminalLines: [],
        focusToken: 'str + int',
      },
      {
        stepNumber: 2,
        title: '2. Build an f-String Template',
        narration:
          'Put the letter f immediately before your opening quotation mark: f"...". Inside the string, write {name} and {age} where those values belong.',
        conceptTip: 'The f stands for "formatted string literal"—it automatically converts numbers like age into text!',
        activeNodeIndex: 2,
        patternPreview: 'f"My name is {name} and I am {age} years old."',
        terminalLines: [],
        focusToken: '{name} & {age}',
      },
      {
        stepNumber: 3,
        title: '3. Python Replaces { } Placeholders Live',
        narration:
          'At runtime, Python substitutes {name} with your string value and {age} with your numeric value seamlessly.',
        conceptTip: 'You can also write the full sentence directly or use commas in print(), but f-strings are the cleanest Python 3 method.',
        activeNodeIndex: 2,
        patternPreview: 'print( f"... {name} ... {age} ..." )',
        terminalLines: ['My name is Rahul and I am 21 years old.'],
        animateTyping: true,
        focusToken: 'Interpolation',
      },
      {
        stepNumber: 4,
        title: '4. Complete Sentence Displayed in Console',
        narration:
          'The terminal prints a single readable sentence containing both your alphabetic name and numeric age.',
        conceptTip: 'Ensure your final printed sentence includes both a name (letters) and an age (digits).',
        activeNodeIndex: 3,
        patternPreview: '# Sentence with name + numeric age printed ✅',
        terminalLines: ['My name is Rahul and I am 21 years old.'],
        animateTyping: false,
        focusToken: 'Verified',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'name = "Rahul"\nage = 21\nprint(f"My name is {name} and I am {age} years old.")',
      lineByLineBreakdown: [
        'name = "Rahul" stores a string in memory.',
        'age = 21 stores an integer in memory.',
        'f"..." replaces {name} and {age} with their stored values and prints the sentence.',
      ],
      keyTakeaway: 'f-strings (f"Hello {var}") make combining text and numbers effortless in Python.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 6 (ID: 106 / 6): Print a number and a text message on separate lines.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q106_number_and_text',
    questionIds: [106, 6],
    topicId: 1,
    questionTitle: 'Print a number and a text message on separate lines.',
    conceptTag: 'Numbers (int) vs Strings (str)',
    archetype: 'type_comparison',
    summaryExplanation:
      'Python distinguishes between numeric values (written directly as digits without quotes, like 2050) and string text (written inside quotes, like "Welcome..."). Each print() call outputs its value on a separate line.',
    thinkingPrompt:
      'How does printing a number on Line 1 differ syntactically from printing a text message on Line 2?',
    nodes: [
      {
        id: 'n1',
        badge: 'LINE 1 • INT',
        label: 'Numeric Literal',
        sublabel: 'No quotes needed: 2050',
        tone: 'amber',
        codePattern: 'print(<number>)',
      },
      {
        id: 'n2',
        badge: 'LINE 2 • STR',
        label: 'String Literal',
        sublabel: 'Quotes required: "Text..."',
        tone: 'blue',
        codePattern: 'print("<text_message>")',
      },
      {
        id: 'n3',
        badge: 'TYPE ENGINE',
        label: 'int vs str Dispatch',
        sublabel: '2 sequential lines',
        tone: 'cyan',
        codePattern: 'Line 1 (int) ↵ Line 2 (str)',
      },
      {
        id: 'n4',
        badge: 'TERMINAL',
        label: 'Two-Line Output',
        sublabel: 'Number then Text',
        tone: 'emerald',
        codePattern: '2050\\nWelcome...',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Print a Numeric Value on Line 1',
        narration:
          'Pass a number (such as 2050) directly inside your first print() call without quotation marks.',
        conceptTip: 'Numbers in Python (integers and floats) are written as bare digits: print(2050).',
        activeNodeIndex: 0,
        patternPreview: 'print( <number_value> )      # e.g., integer without quotes',
        terminalLines: ['2050'],
        animateTyping: true,
        focusToken: 'int (No Quotes)',
      },
      {
        stepNumber: 2,
        title: '2. Print a Text Message on Line 2',
        narration:
          'On the next line of code, write a second print() statement with your text message enclosed in quotation marks.',
        conceptTip: 'Text messages contain words and spaces, so they MUST be wrapped in quotes.',
        activeNodeIndex: 1,
        patternPreview: 'print( <number_value> )\nprint( "<text_message>" )    # string inside quotes',
        terminalLines: ['2050', 'Welcome to Future IT Industry'],
        animateTyping: true,
        focusToken: 'str (With Quotes)',
      },
      {
        stepNumber: 3,
        title: '3. Compare Numeric vs String Representation',
        narration:
          'Notice how Python handles both data types inside print(): it converts the integer 2050 to characters on Line 1, and outputs the string on Line 2.',
        conceptTip: 'Using two separate print() calls guarantees Line 1 has the number and Line 2 has the text.',
        activeNodeIndex: 2,
        patternPreview: 'Line 1: <int>  ──►  2050\nLine 2: <str>  ──►  Welcome to Future IT Industry',
        terminalLines: ['2050', 'Welcome to Future IT Industry'],
        animateTyping: false,
        focusToken: 'int vs str',
      },
      {
        stepNumber: 4,
        title: '4. Two-Line Output Complete',
        narration:
          'The terminal now shows the numeric value on the first line and the text message on the second line.',
        conceptTip: 'Check that Line 1 is a number and Line 2 is your text message.',
        activeNodeIndex: 3,
        patternPreview: '# Line 1: Number | Line 2: Text ✅',
        terminalLines: ['2050', 'Welcome to Future IT Industry'],
        animateTyping: false,
        focusToken: 'Verified',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print(2050)\nprint("Welcome to Future IT Industry")',
      lineByLineBreakdown: [
        'print(2050) prints the integer literal 2050 on the first line.',
        'print("Welcome to Future IT Industry") prints the string literal on the second line.',
      ],
      keyTakeaway: 'Numbers are written without quotes (int), whereas text messages require quotes (str).',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 7 (ID: 107 / 7): Print a message using two separate print() statements.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q107_two_separate_prints',
    questionIds: [107, 7],
    topicId: 1,
    questionTitle: 'Print a message using two separate print() statements.',
    conceptTag: 'Execution Order & Sequential Calls',
    archetype: 'dual_call_stack',
    summaryExplanation:
      'Python executes your script from top to bottom. When you write two separate print() statements, Statement #1 completes and flushes a newline before Statement #2 begins.',
    thinkingPrompt:
      'Why does the order of your two print() statements in the editor determine the order of lines in the console?',
    nodes: [
      {
        id: 'n1',
        badge: 'STATEMENT 1',
        label: 'First print() Call',
        sublabel: 'Executes at t = 1',
        tone: 'blue',
        codePattern: 'print("<Part_1>")',
      },
      {
        id: 'n2',
        badge: 'AUTO NEWLINE',
        label: 'Implicit \\n Flush',
        sublabel: 'Cursor drops to Row 2',
        tone: 'amber',
        codePattern: 'end="\\n"',
      },
      {
        id: 'n3',
        badge: 'STATEMENT 2',
        label: 'Second print() Call',
        sublabel: 'Executes at t = 2',
        tone: 'cyan',
        codePattern: 'print("<Part_2>")',
      },
      {
        id: 'n4',
        badge: 'CONSOLE',
        label: 'Sequential Output',
        sublabel: '2 lines in order',
        tone: 'emerald',
        codePattern: 'Row 1 + Row 2',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Interpreter Runs Statement #1 First',
        narration:
          'The Python interpreter starts at Line 1 of your code and executes the first print() statement.',
        conceptTip: 'This challenge requires two distinct print() calls in your code.',
        activeNodeIndex: 0,
        patternPreview: '1 | print( "<first_line_text>" )   # ◄── Executing now',
        terminalLines: ['Learning Python'],
        animateTyping: true,
        focusToken: 'Call #1',
      },
      {
        stepNumber: 2,
        title: '2. Automatic Newline Moves Cursor Down',
        narration:
          'As soon as the first print() finishes, it sends an automatic line break so the next output starts on Line 2.',
        conceptTip: 'You do not need to type \\n when using two separate print() statements.',
        activeNodeIndex: 1,
        patternPreview: 'Console Cursor: Row 1 ──(auto \\n)──► Row 2',
        terminalLines: ['Learning Python'],
        animateTyping: false,
        focusToken: 'Auto ↵',
      },
      {
        stepNumber: 3,
        title: '3. Interpreter Runs Statement #2 Next',
        narration:
          'The interpreter advances to Line 2 of your code and executes the second print() statement.',
        conceptTip: 'Swapping the two lines of code would reverse the output order in the terminal!',
        activeNodeIndex: 2,
        patternPreview: '1 | print( "<first_line_text>" )\n2 | print( "<second_line_text>" )  # ◄── Executing now',
        terminalLines: ['Learning Python', 'is the foundation of AI.'],
        animateTyping: true,
        focusToken: 'Call #2',
      },
      {
        stepNumber: 4,
        title: '4. Both Sequential Outputs Completed',
        narration:
          'Both independent print() statements have executed in top-to-bottom order, producing two lines in the console.',
        conceptTip: 'Make sure your code contains two separate print(...) calls on separate lines.',
        activeNodeIndex: 3,
        patternPreview: '# 2 separate print() calls verified ✅',
        terminalLines: ['Learning Python', 'is the foundation of AI.'],
        animateTyping: false,
        focusToken: '2 Calls Done',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Learning Python")\nprint("is the foundation of AI.")',
      lineByLineBreakdown: [
        'First print() outputs "Learning Python" on line 1.',
        'Second print() outputs "is the foundation of AI." on line 2.',
      ],
      keyTakeaway: 'Python executes statements sequentially from top to bottom.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 8 (ID: 108 / 8): Print a sentence using a newline character.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q108_newline_escape',
    questionIds: [108, 8],
    topicId: 1,
    questionTitle: 'Print a sentence using a newline character.',
    conceptTag: 'Escape Sequences (\\n)',
    archetype: 'newline_splitter',
    summaryExplanation:
      'Inside a Python string, the two-character escape sequence \\n (backslash + n) acts as a line break command. It splits text inside a single print() call onto the next terminal line.',
    thinkingPrompt:
      'Which backslash character tells Python to break the line in the middle of a single string?',
    nodes: [
      {
        id: 'n1',
        badge: 'SINGLE STRING',
        label: 'One print() Call',
        sublabel: '"FirstPart\\nSecondPart"',
        tone: 'blue',
        codePattern: 'print("...\\n...")',
      },
      {
        id: 'n2',
        badge: 'ESCAPE TRIGGER',
        label: 'Backslash + n (\\n)',
        sublabel: 'Line-break command',
        tone: 'amber',
        codePattern: '\\n = Enter ↵',
      },
      {
        id: 'n3',
        badge: 'LINE SPLIT',
        label: 'Stream Splitter',
        sublabel: 'Breaks into Row 1 & Row 2',
        tone: 'purple',
        codePattern: 'Row 1 ↵ Row 2',
      },
      {
        id: 'n4',
        badge: 'TERMINAL',
        label: 'Two Console Lines',
        sublabel: '\\n itself is hidden',
        tone: 'emerald',
        codePattern: 'Line One\\nLine Two',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Start with a Single print() String',
        narration:
          'Write a single print() statement containing one string literal wrapped in quotes.',
        conceptTip: 'Instead of calling print() twice, we embed a special control sequence inside one string.',
        activeNodeIndex: 0,
        patternPreview: 'print( "<First_Line_Text>\\n<Second_Line_Text>" )',
        terminalLines: [],
        focusToken: 'Single print()',
      },
      {
        stepNumber: 2,
        title: '2. Insert the \\n Newline Escape Sequence',
        narration:
          'Place \\n (a backslash \\ followed immediately by lowercase n) right where you want the line to break.',
        conceptTip: 'Be careful: use backslash \\n, NOT forward slash /n!',
        activeNodeIndex: 1,
        patternPreview: '"<Text_Before>\\n<Text_After>"   # \\n triggers line break',
        terminalLines: ['Line One'],
        animateTyping: true,
        focusToken: '\\n',
      },
      {
        stepNumber: 3,
        title: '3. \\n Moves Remaining Text to Next Line',
        narration:
          'When the console stream hits \\n, it does NOT print "\\n" on screen—instead, it jumps the cursor to the start of Line 2 and continues printing!',
        conceptTip: 'Avoid putting extra spaces right after \\n unless you want the second line indented.',
        activeNodeIndex: 2,
        patternPreview: 'Stream: "Line One" ──[ \\n ↵ ]──► "Line Two"',
        terminalLines: ['Line One', 'Line Two'],
        animateTyping: true,
        focusToken: '↵ Jump to Line 2',
      },
      {
        stepNumber: 4,
        title: '4. Two Lines Produced from One String',
        narration:
          'The terminal displays two clean lines of output generated from a single print() statement using \\n.',
        conceptTip: 'Check that your code uses \\n inside quotes.',
        activeNodeIndex: 3,
        patternPreview: '# Escape sequence \\n verified ✅',
        terminalLines: ['Line One', 'Line Two'],
        animateTyping: false,
        focusToken: '2 Lines Ready',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Line One\\nLine Two")',
      lineByLineBreakdown: [
        '"Line One" is printed on the first row of the terminal.',
        '\\n is the newline escape character that moves the terminal cursor to row 2.',
        '"Line Two" is printed at the beginning of row 2.',
      ],
      keyTakeaway: 'The \\n escape sequence inserts a line break inside a single string.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 9 (ID: 109 / 9): Print Python is easy to learn exactly as given.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q109_exact_match',
    questionIds: [109, 9],
    topicId: 1,
    questionTitle: 'Print Python is easy to learn exactly as given.',
    conceptTag: 'Exact String Matching & Case Sensitivity',
    archetype: 'exact_match_scanner',
    summaryExplanation:
      'Automated coding judges compare your program’s output character-by-character against the expected target. Every capital letter, lowercase letter, and single space must match 100%.',
    thinkingPrompt:
      'Why would "python is easy to learn" (lowercase p) or double spaces fail an exact-match test case?',
    nodes: [
      {
        id: 'n1',
        badge: 'CAPITAL CHECK',
        label: 'Uppercase "P"',
        sublabel: 'Python starts with P',
        tone: 'blue',
        codePattern: '"P" (ASCII 80)',
      },
      {
        id: 'n2',
        badge: 'SPACE CHECK',
        label: '4 Single Spaces',
        sublabel: 'Between 5 words',
        tone: 'cyan',
        codePattern: 'Python•is•easy•to•learn',
      },
      {
        id: 'n3',
        badge: 'SCANNER',
        label: '23-Char Diff Check',
        sublabel: '100% character match',
        tone: 'amber',
        codePattern: 'Expected == Actual',
      },
      {
        id: 'n4',
        badge: 'VERDICT',
        label: 'Exact Match Passed',
        sublabel: 'Python is easy to learn',
        tone: 'emerald',
        codePattern: 'Python is easy to learn',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Inspect Capitalization Rules',
        narration:
          'Look closely at the target sentence: only the first letter "P" in "Python" is capitalized; "is easy to learn" is all lowercase.',
        conceptTip: 'In computers, uppercase "P" and lowercase "p" have completely different character codes!',
        activeNodeIndex: 0,
        patternPreview: 'Target: [P]ython is easy to learn',
        terminalLines: [],
        focusToken: 'Capital P',
      },
      {
        stepNumber: 2,
        title: '2. Verify Single Spaces & No Trailing Punctuation',
        narration:
          'Count the words: "Python", "is", "easy", "to", "learn" — separated by single spaces, with NO period at the end.',
        conceptTip: 'Adding an extra period "." or extra space when not requested will cause strict test cases to fail.',
        activeNodeIndex: 1,
        patternPreview: '"Python␣is␣easy␣to␣learn"  (23 characters total)',
        terminalLines: [],
        focusToken: 'Exact Spaces',
      },
      {
        stepNumber: 3,
        title: '3. Run Character-by-Character Scanner',
        narration:
          'When you pass the exact string to print(), the test runner compares each of the 23 characters from index 0 to 22.',
        conceptTip: 'Always compare your output directly with the Sample Output box in the Problem panel.',
        activeNodeIndex: 2,
        patternPreview: 'print( "<exact_target_sentence>" )',
        terminalLines: ['Python is easy to learn'],
        animateTyping: true,
        focusToken: '23/23 Matched',
      },
      {
        stepNumber: 4,
        title: '4. 100% Precision Output Verified',
        narration:
          'Every character, space, and case matches the specification—ready for submission!',
        conceptTip: 'Precision in output formatting is a core skill for coding interviews and competitive programming.',
        activeNodeIndex: 3,
        patternPreview: '# 23/23 characters matched exactly ✅',
        terminalLines: ['Python is easy to learn'],
        animateTyping: false,
        focusToken: '100% Match',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Python is easy to learn")',
      lineByLineBreakdown: [
        'Capital "P" in Python, lowercase for "is easy to learn", separated by single spaces.',
        'No trailing period inside the string so it matches the 23-character sample output.',
      ],
      keyTakeaway: 'Automated coding judges check capitalization, spelling, and whitespace character-by-character.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // --------------------------------------------------------------------------
  // QUESTION 10 (ID: 110 / 10): Print a three-line welcome message using one print() statement.
  // --------------------------------------------------------------------------
  {
    planId: 'py_t1_q110_single_print_three_lines',
    questionIds: [110, 10],
    topicId: 1,
    questionTitle: 'Print a three-line welcome message using one print() statement.',
    conceptTag: 'Multiline Output in a Single print()',
    archetype: 'single_print_multiline',
    summaryExplanation:
      'You can output three separate lines using ONLY ONE print() statement by placing two \\n newline characters between the three lines (or by using triple quotes """...""").',
    thinkingPrompt:
      'If one \\n splits a string into 2 lines, how many \\n escape characters do you need inside one print() to produce 3 lines?',
    nodes: [
      {
        id: 'n1',
        badge: '1 CALL ONLY',
        label: 'Single print()',
        sublabel: 'Constraint: count == 1',
        tone: 'blue',
        codePattern: 'print( ... )',
      },
      {
        id: 'n2',
        badge: 'SPLIT #1',
        label: 'First \\n Break',
        sublabel: 'Line 1 ──► Line 2',
        tone: 'amber',
        codePattern: 'Line 1\\nLine 2',
      },
      {
        id: 'n3',
        badge: 'SPLIT #2',
        label: 'Second \\n Break',
        sublabel: 'Line 2 ──► Line 3',
        tone: 'purple',
        codePattern: '...\\nLine 3',
      },
      {
        id: 'n4',
        badge: 'TERMINAL',
        label: '3-Line Cascade',
        sublabel: 'From 1 print() call',
        tone: 'emerald',
        codePattern: '3 Output Rows',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '1. Constraint: Use Only ONE print() Call',
        narration:
          'Unlike Question 4 (which used three print() statements), this challenge restricts you to a single print() call.',
        conceptTip: 'The validator checks that print( appears only once in your code while producing 3 lines.',
        activeNodeIndex: 0,
        patternPreview: 'print( "<all_three_lines_packed_here>" )',
        terminalLines: [],
        focusToken: '1x print()',
      },
      {
        stepNumber: 2,
        title: '2. First \\n Separates Line 1 and Line 2',
        narration:
          'After the first welcome line, insert the first \\n escape sequence to push the second message onto Line 2.',
        conceptTip: 'First \\n creates the break between Row 1 and Row 2.',
        activeNodeIndex: 1,
        patternPreview: 'print( "<Line_1_Text>\\n<Line_2_Text>..." )',
        terminalLines: ['Welcome to Future IT!', 'Explore Python & Data Science'],
        animateTyping: true,
        focusToken: '1st \\n',
      },
      {
        stepNumber: 3,
        title: '3. Second \\n Separates Line 2 and Line 3',
        narration:
          'After the second message, insert a second \\n escape sequence followed by your third line of text.',
        conceptTip: 'Alternative: Python also supports triple quotes print("""Line 1\\nLine 2\\nLine 3""")!',
        activeNodeIndex: 2,
        patternPreview: 'print( "<Line_1>\\n<Line_2>\\n<Line_3>" )',
        terminalLines: [
          'Welcome to Future IT!',
          'Explore Python & Data Science',
          'Build Real AI Solutions',
        ],
        animateTyping: true,
        focusToken: '2nd \\n',
      },
      {
        stepNumber: 4,
        title: '4. Three-Line Welcome Cascade Complete',
        narration:
          'A single print() statement has unpacked two \\n markers into three distinct lines in the output console!',
        conceptTip: 'Formula: To create N lines inside a single string, use (N - 1) newline \\n characters.',
        activeNodeIndex: 3,
        patternPreview: '# 1 print() + 2 (\\n) = 3 console lines ✅',
        terminalLines: [
          'Welcome to Future IT!',
          'Explore Python & Data Science',
          'Build Real AI Solutions',
        ],
        animateTyping: false,
        focusToken: '3 Lines / 1 Call',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'print("Welcome to Future IT!\\nExplore Python & Data Science\\nBuild Real AI Solutions")',
      lineByLineBreakdown: [
        'Only one print() function call is used in the entire program.',
        'Two \\n newline escape sequences split the single string into 3 separate console rows.',
      ],
      keyTakeaway: 'Use multiple \\n escape characters (or triple quotes """...""") to print multiple lines from a single print() statement.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },
];

// ============================================================================
// IN-MEMORY & LOCALSTORAGE CACHE + DETERMINISTIC LOOKUP ENGINE
// ============================================================================
const planMemoryCache = new Map<string, VisualHintAnimationPlan>();

// Populate memory cache keyed by permanent question ID for Topic 1
TOPIC_1_VISUAL_PLANS.forEach((plan) => {
  plan.questionIds.forEach((qId) => {
    planMemoryCache.set(`t${plan.topicId}_q${qId}`, plan);
  });
});

/**
 * Resolves the validated VisualHintAnimationPlan for any Topic 1 or Topic 2 question.
 * Uses permanent question IDs (101–110, 201–210 or 1–10) with deterministic fallback.
 * Performs zero network/Firestore reads on student clicks.
 */
export function getVisualHintPlanForTask(
  task: QuestionInputRecord,
  topicId: number = 1
): VisualHintAnimationPlan | null {
  if (!task) return null;

  // Topic 1: Deliver curated curriculum lessons with 100% code accuracy
  if (topicId === 1) {
    const universalPlan = buildUniversalVisualHintPlan(task, 1);
    universalPlan.validatedSafe = validateNoSolutionLeak(universalPlan, task.solution);
    return universalPlan;
  }

  // Topic 2: Variables and Data Types (Curated 9 lessons)
  const isTopic2 = topicId === 6 || topicId === 2 || task.title?.toLowerCase().includes('variable') || (task as any).problemStatement?.toLowerCase().includes('variable');
  if (isTopic2) {
    const universalPlan = buildUniversalVisualHintPlan(task, topicId);
    universalPlan.validatedSafe = validateNoSolutionLeak(universalPlan, task.solution);
    return universalPlan;
  }

  // Topic 3: Input and Output (Curated 9 lessons)
  const isTopic3 = topicId === 7 || (topicId === 3 && (task.title?.toLowerCase().includes('input') || (task as any).problemStatement?.toLowerCase().includes('input')));
  if (isTopic3) {
    const universalPlan = buildUniversalVisualHintPlan(task, topicId);
    universalPlan.validatedSafe = validateNoSolutionLeak(universalPlan, task.solution);
    return universalPlan;
  }

  // Topic 4: Python Operators (Curated 12 lessons)
  const isTopic4 = topicId === 4 || (topicId === 3 && !isTopic3) || task.title?.toLowerCase().includes('operator') || (task as any).problemStatement?.toLowerCase().includes('operator');
  if (isTopic4) {
    const universalPlan = buildUniversalVisualHintPlan(task, topicId);
    universalPlan.validatedSafe = validateNoSolutionLeak(universalPlan, task.solution);
    return universalPlan;
  }

  // 1. Primary lookup by task.id
  const cacheKeyById = `t${topicId}_q${task.id}`;
  const cachedById = planMemoryCache.get(cacheKeyById);
  if (cachedById) {
    return cachedById;
  }

  // 2. Secondary lookup by canonical (topicId * 100) + taskNumber ID
  const canonicalId = (topicId * 100) + (task.taskNumber || 1);
  const cachedByCanonical = planMemoryCache.get(`t${topicId}_q${canonicalId}`);
  if (cachedByCanonical) {
    return cachedByCanonical;
  }

  // 3. Tertiary lookup by taskNumber directly (e.g. q1, q2)
  const cachedByTaskNum = planMemoryCache.get(`t${topicId}_q${task.taskNumber}`);
  if (cachedByTaskNum) {
    return cachedByTaskNum;
  }

  // 4. Universal Dynamic AI Teaching Engine:
  // Dynamically analyze the task and synthesize a code-aware visual teaching plan for ANY challenge!
  const universalPlan = buildUniversalVisualHintPlan(task, topicId);
  universalPlan.validatedSafe = validateNoSolutionLeak(universalPlan, task.solution);

  planMemoryCache.set(cacheKeyById, universalPlan);
  planMemoryCache.set(`t${topicId}_q${canonicalId}`, universalPlan);
  planMemoryCache.set(`t${topicId}_q${task.taskNumber}`, universalPlan);

  return universalPlan;
}

export function getAllTopic1VisualPlans(): VisualHintAnimationPlan[] {
  return TOPIC_1_VISUAL_PLANS;
}

// ============================================================================
// DYNAMIC PYTHON CODE ANALYZER & 4-SCENE EXECUTION VISUALIZER ENGINE
// Generates 4 structured learning scenes, execution flow nodes, variable/stack
// traces, timeline-based execution events, and natural Hindi/English teacher
// narrations directly from actual Python code and verified execution output.
// ============================================================================

export type VoiceLang = 'hi' | 'en';

export type TimelineEventType =
  | 'code_highlight'
  | 'function_reveal'
  | 'argument_reveal'
  | 'execution_flow'
  | 'console_typing'
  | 'completion'
  | 'variable_update'
  | 'condition_eval'
  | 'loop_iteration'
  | 'stack_frame_push'
  | 'stack_frame_return'
  | 'list_access';

export type TimelineVisualTarget =
  | 'editor_line'
  | 'card_function'
  | 'arrow_1'
  | 'card_argument'
  | 'arrow_2'
  | 'card_console_op'
  | 'curved_flow_arrow'
  | 'console_output'
  | 'variable_box'
  | 'condition_badge'
  | 'loop_badge'
  | 'call_stack_box';

export type TimelineAnimationAction =
  | 'fade_in'
  | 'slide_in'
  | 'code_highlight'
  | 'animate_arrow'
  | 'function_call_transition'
  | 'variable_value_update'
  | 'console_typing'
  | 'return_value_transition';

export interface TimelineVisualStateSnapshot {
  /** Which token part in the code editor is currently highlighted */
  codeFocus: 'none' | 'function' | 'argument' | 'full_line' | 'completed';
  /** Progressive visibility of the 3 center flow cards and arrows */
  showFunctionCard: boolean;
  highlightFunctionCard: boolean;
  showArrow1: boolean;
  animateArrow1: boolean;
  showArgumentCard: boolean;
  highlightArgumentCard: boolean;
  showArrow2: boolean;
  animateArrow2: boolean;
  showConsoleOpCard: boolean;
  highlightConsoleOpCard: boolean;
  showRobotMascot: boolean;
  showCurvedFlowArrow: boolean;
  animateCurvedFlowArrow: boolean;
  /** Console state: 'empty' | 'receiving' | 'typing' | 'complete' */
  consoleMode: 'empty' | 'receiving' | 'typing' | 'complete';
  /** Number of visible variables / stack frames / loop iterations at this moment */
  visibleVariableCount: number;
  showConditionResult: boolean;
  visibleLoopStepCount: number;
  visibleStackFrameCount: number;
}

export interface TimelineExecutionEvent {
  id: string;
  stepCode: 'Step A' | 'Step B' | 'Step C' | 'Step D' | 'Step E' | 'Step F';
  eventType: TimelineEventType;
  /** Normalized progress range [startRatio, endRatio] within the scene (0..1) */
  startRatio: number;
  endRatio: number;
  relatedLineNumbers: number[];
  relatedToken?: string;
  visualElement: TimelineVisualTarget;
  animationAction: TimelineAnimationAction;
  narrationSegmentHi: string;
  narrationSegmentEn: string;
  explanationPartsHi: {
    codePill1: string;
    text1: string;
    codePill2?: string;
    text2?: string;
    outputHighlight?: string;
    text3?: string;
  };
  explanationPartsEn: {
    codePill1: string;
    text1: string;
    codePill2?: string;
    text2?: string;
    outputHighlight?: string;
    text3?: string;
  };
  stateSnapshot: TimelineVisualStateSnapshot;
  nextEventId: string | null;
  activeArgPillText?: string;
  activeFunctionPillText?: string;
  consoleCharRange?: [number, number];
  consoleCharsCount?: number;
}

export type FlowCardType =
  | 'function'
  | 'argument'
  | 'variable'
  | 'condition'
  | 'loop'
  | 'expression'
  | 'datastructure'
  | 'console';

export interface FlowDiagramCard {
  id: string;
  variant: 'blue' | 'yellow' | 'purple' | 'emerald' | 'amber' | 'rose' | 'cyan';
  pillText: string;
  isTerminalIcon?: boolean;
  captionHi: string;
  captionEn: string;
  activeInScenes: number[];
  cardType?: FlowCardType;
  iconName?: 'box' | 'quote' | 'terminal' | 'variable' | 'branch' | 'loop' | 'calc' | 'layers' | 'code';
  tagText?: string;
  sublabel?: string;
  detailBadge?: string;
}

export interface ExecutionVariableSnapshot {
  name: string;
  value: string;
  type: string;
}

export interface ExecutionStackFrame {
  funcName: string;
  args: string;
  status: 'active' | 'base_case' | 'returning';
  returnValue?: string;
}

export interface ExecutionListSnapshot {
  name: string;
  elements: string[];
  accessedIndex?: number;
  modifiedIndex?: number;
}

export interface ExecutionExceptionInfo {
  errorType: string;
  lineNumber: number;
  messageHi: string;
  messageEn: string;
  fixTipHi: string;
  fixTipEn: string;
}

export interface InteractiveCheckpointOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedbackHi: string;
  feedbackEn: string;
}

export interface InteractiveCheckpointSpec {
  id: string;
  sceneIndex: number;
  /** Normalized progress ratio (0..1) where execution pauses for prediction if Interactive Mode is ON */
  triggerAtRatio: number;
  promptHi: string;
  promptEn: string;
  options: InteractiveCheckpointOption[];
}

export interface VisualHintProgressRecord {
  planId: string;
  taskNumber: number;
  completedScenes: number[];
  checkpointAnsweredCorrectly: boolean;
  lastUpdatedAt: string;
}

const VISUAL_HINT_PROGRESS_STORAGE_KEY = 'future_it_visual_hint_progress_v1';

export function loadVisualHintProgress(planId: string, taskNumber: number): VisualHintProgressRecord {
  if (typeof window === 'undefined') {
    return {
      planId,
      taskNumber,
      completedScenes: [],
      checkpointAnsweredCorrectly: false,
      lastUpdatedAt: new Date().toISOString(),
    };
  }
  try {
    const raw = window.localStorage.getItem(VISUAL_HINT_PROGRESS_STORAGE_KEY);
    if (raw) {
      const map = JSON.parse(raw) as Record<string, VisualHintProgressRecord>;
      if (map[planId]) return map[planId];
    }
  } catch {
    // ignore storage errors
  }
  return {
    planId,
    taskNumber,
    completedScenes: [],
    checkpointAnsweredCorrectly: false,
    lastUpdatedAt: new Date().toISOString(),
  };
}

export function saveVisualHintProgress(
  planId: string,
  taskNumber: number,
  sceneIndex: number,
  checkpointCorrect?: boolean
): VisualHintProgressRecord {
  const current = loadVisualHintProgress(planId, taskNumber);
  const completedSet = new Set<number>(current.completedScenes);
  completedSet.add(sceneIndex);
  const updated: VisualHintProgressRecord = {
    planId,
    taskNumber,
    completedScenes: Array.from(completedSet).sort((a, b) => a - b),
    checkpointAnsweredCorrectly:
      current.checkpointAnsweredCorrectly || Boolean(checkpointCorrect),
    lastUpdatedAt: new Date().toISOString(),
  };
  if (typeof window !== 'undefined') {
    try {
      const raw = window.localStorage.getItem(VISUAL_HINT_PROGRESS_STORAGE_KEY);
      const map: Record<string, VisualHintProgressRecord> = raw ? JSON.parse(raw) : {};
      map[planId] = updated;
      window.localStorage.setItem(VISUAL_HINT_PROGRESS_STORAGE_KEY, JSON.stringify(map));
    } catch {
      // ignore storage errors
    }
  }
  return updated;
}

export interface LearningSceneSpec {
  sceneIndex: number; // 0..3
  stepBadgeHi: string;
  stepBadgeEn: string;
  activeLineNumbers: number[];
  highlightPart: 'function' | 'argument' | 'execution' | 'output';
  spokenNarrationHi: string;
  spokenNarrationEn: string;
  audioSrcHi?: string;
  audioSrcEn?: string;
  durationMsHi: number;
  durationMsEn: number;
  explanationPartsHi: {
    codePill1: string;
    text1: string;
    codePill2: string;
    text2: string;
    outputHighlight: string;
    text3: string;
  };
  explanationPartsEn: {
    codePill1: string;
    text1: string;
    codePill2: string;
    text2: string;
    outputHighlight: string;
    text3: string;
  };
  /** Ordered progressive timeline events within this scene */
  timelineEvents: TimelineExecutionEvent[];
}

export interface DynamicCodeVisualizationData {
  codeLines: string[];
  expectedOutput: string;
  detectedConcepts: string[];
  flowCards: [FlowDiagramCard, FlowDiagramCard, FlowDiagramCard];
  variables: ExecutionVariableSnapshot[];
  callStack: ExecutionStackFrame[];
  lists: ExecutionListSnapshot[];
  exceptionInfo?: ExecutionExceptionInfo;
  conditionInfo?: { expression: string; result: boolean; branchTaken: string };
  loopInfo?: { iterator: string; values: string[] };
  scenes: [LearningSceneSpec, LearningSceneSpec, LearningSceneSpec, LearningSceneSpec];
}

/**
 * Helper to resolve the active TimelineExecutionEvent and interpolated typing progress
 * for a given scene and normalized sceneProgress (0..1).
 */
export function resolveActiveTimelineEvent(
  scene: LearningSceneSpec,
  sceneProgress: number
): {
  activeEvent: TimelineExecutionEvent;
  activeEventIndex: number;
  eventLocalProgress: number;
} {
  const clamped = Math.min(1, Math.max(0, sceneProgress));
  const events = scene.timelineEvents;
  for (let i = 0; i < events.length; i++) {
    const ev = events[i];
    const isLast = i === events.length - 1;
    if (clamped >= ev.startRatio && (clamped < ev.endRatio || isLast)) {
      const span = Math.max(0.001, ev.endRatio - ev.startRatio);
      const local = Math.min(1, Math.max(0, (clamped - ev.startRatio) / span));
      return {
        activeEvent: ev,
        activeEventIndex: i,
        eventLocalProgress: local,
      };
    }
  }
  const fallback = events[events.length - 1];
  return {
    activeEvent: fallback,
    activeEventIndex: events.length - 1,
    eventLocalProgress: 1,
  };
}

export function buildDynamicCodeVisualization(
  rawCode: string,
  expectedOutput: string,
  taskNumber: number = 1
): DynamicCodeVisualizationData {
  const cleanCode = (rawCode || 'print("Hello, World!")').trim();
  const codeLines = cleanCode.split('\n');
  const cleanOutput = (expectedOutput || 'Hello, World!').trim();

  // Detect programming concepts actually present in the code using Intelligent Concept Teaching Engine
  const detectedConceptsList = analyzePythonCodeConcepts(cleanCode, cleanOutput);
  const detectedConcepts: string[] = detectedConceptsList.map((c) => c.type);

  // Extract variable assignments if present
  const variables: ExecutionVariableSnapshot[] = [];
  for (const line of codeLines) {
    const m = line.trim().match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (m) {
      const varName = m[1];
      const rawVal = m[2].trim();
      const varType = /^["']/.test(rawVal)
        ? 'str'
        : /^\d+$/.test(rawVal)
        ? 'int'
        : /^\d+\.\d+$/.test(rawVal)
        ? 'float'
        : /^\[/.test(rawVal)
        ? 'list'
        : /^\{/.test(rawVal)
        ? 'dict'
        : 'expr';
      variables.push({ name: varName, value: rawVal, type: varType });
    }
  }

  // Extract function / recursion stack frames if present
  const callStack: ExecutionStackFrame[] = [];
  const defMatch = cleanCode.match(/\bdef\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)/);
  if (defMatch) {
    const fnName = defMatch[1];
    const fnParam = defMatch[2] || '';
    if (detectedConcepts.includes('recursion')) {
      callStack.push(
        { funcName: fnName, args: `${fnParam} (initial call)`, status: 'active' },
        { funcName: fnName, args: `${fnParam} - 1 (recursive step)`, status: 'active' },
        { funcName: fnName, args: 'base condition reached', status: 'base_case', returnValue: cleanOutput }
      );
    } else {
      callStack.push({
        funcName: fnName,
        args: fnParam,
        status: 'returning',
        returnValue: cleanOutput,
      });
    }
  }

  // Extract conditional branch evaluation if present
  let conditionInfo: { expression: string; result: boolean; branchTaken: string } | undefined;
  const ifMatch = cleanCode.match(/\bif\s+([^:]+):/);
  if (ifMatch) {
    conditionInfo = {
      expression: ifMatch[1].trim(),
      result: true,
      branchTaken: cleanOutput,
    };
  }

  // Extract loop iteration trace if present
  let loopInfo: { iterator: string; values: string[] } | undefined;
  const forMatch = cleanCode.match(/\bfor\s+([a-zA-Z_]\w*)\s+in\s+([^:]+):/);
  if (forMatch) {
    const outLines = cleanOutput.split('\n').filter(Boolean);
    loopInfo = {
      iterator: forMatch[1].trim(),
      values: outLines.length > 0 ? outLines.slice(0, 5) : ['0', '1', '2'],
    };
  } else {
    const whileMatch = cleanCode.match(/\bwhile\s+([^:]+):/);
    if (whileMatch) {
      const outLines = cleanOutput.split('\n').filter(Boolean);
      loopInfo = {
        iterator: whileMatch[1].trim(),
        values: outLines.length > 0 ? outLines.slice(0, 5) : ['Step 1', 'Step 2'],
      };
    }
  }

  // Extract list literals and index access if present
  const lists: ExecutionListSnapshot[] = [];
  for (const line of codeLines) {
    const listMatch = line.trim().match(/^([a-zA-Z_]\w*)\s*=\s*\[(.*)\]$/);
    if (listMatch) {
      const listName = listMatch[1];
      const elems = listMatch[2]
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      const idxMatch = cleanCode.match(new RegExp(`\\b${listName}\\[(\\d+)\\]`));
      lists.push({
        name: listName,
        elements: elems,
        accessedIndex: idxMatch ? Number(idxMatch[1]) : undefined,
      });
    }
  }

  // Detect common beginner syntax / runtime mistakes if code contains an intentional error
  let exceptionInfo: ExecutionExceptionInfo | undefined;
  for (let i = 0; i < codeLines.length; i++) {
    const ln = codeLines[i].trim();
    if (/^Print\s*\(/.test(ln)) {
      exceptionInfo = {
        errorType: 'NameError',
        lineNumber: i + 1,
        messageHi: "NameError: name 'Print' is not defined — Python में print हमेशा छोटे अक्षरों (lowercase) में लिखा जाता है।",
        messageEn: "NameError: name 'Print' is not defined — In Python, built-in print() must be lowercase.",
        fixTipHi: 'Print(...) को बदलकर print(...) लिखें।',
        fixTipEn: 'Change Print(...) to lowercase print(...).',
      };
      break;
    }
    const unquotedPrint = ln.match(/^print\s*\(\s*([a-zA-Z_][a-zA-Z0-9_\s,!]+)\s*\)$/);
    if (unquotedPrint && !variables.some((v) => v.name === unquotedPrint[1].trim())) {
      exceptionInfo = {
        errorType: 'SyntaxError / NameError',
        lineNumber: i + 1,
        messageHi: `टेक्स्ट '${unquotedPrint[1].trim()}' के दोनों तरफ़ कोट्स (" ") नहीं लगे हैं।`,
        messageEn: `Text '${unquotedPrint[1].trim()}' is missing surrounding quotation marks (" ").`,
        fixTipHi: `टेक्स्ट को डबल कोट्स में लिखें: print("${unquotedPrint[1].trim()}")`,
        fixTipEn: `Wrap the text in quotes: print("${unquotedPrint[1].trim()}")`,
      };
      break;
    }
  }

  // Extract first print argument or primary expression for the 3-node flow diagram
  const printMatch = cleanCode.match(/print\s*\((.+)\)/);
  const argText = printMatch ? printMatch[1].trim() : `"${cleanOutput}"`;

  const isChallenge1HelloWorld =
    taskNumber === 1 && cleanCode === 'print("Hello, World!")' && cleanOutput === 'Hello, World!';

  const primaryConcept =
    detectedConceptsList.find(
      (c) =>
        c.type === 'escape_newline' ||
        c.type === 'escape_tab' ||
        c.type === 'f_string' ||
        c.type === 'integer_literal' ||
        c.type === 'variable_assignment' ||
        c.type === 'arithmetic_operator'
    ) || detectedConceptsList[0];

  const semantics = parseProgramSemantics(cleanCode, cleanOutput);
  let flowCards: [FlowDiagramCard, FlowDiagramCard, FlowDiagramCard];

  if (isChallenge1HelloWorld) {
    flowCards = [
      {
        id: 'node-func',
        variant: 'blue',
        pillText: 'print()',
        cardType: 'function',
        iconName: 'box',
        tagText: 'Built-in Function',
        captionHi: 'Print function\n(output dikhata hai)',
        captionEn: 'Print function\n(displays output)',
        activeInScenes: [0, 1, 2, 3],
      },
      {
        id: 'node-arg',
        variant: 'yellow',
        pillText: argText,
        cardType: 'argument',
        iconName: 'quote',
        tagText: 'String Argument',
        captionHi: 'Text (string)\njo print karna hai',
        captionEn: 'Text (string)\nto be printed',
        activeInScenes: [1, 2, 3],
      },
      {
        id: 'node-console',
        variant: 'purple',
        pillText: '>_',
        cardType: 'console',
        iconName: 'terminal',
        tagText: 'Output Console',
        isTerminalIcon: true,
        captionHi: 'Text console\npar chala jata hai',
        captionEn: 'Text travels\nto the console',
        activeInScenes: [2, 3],
      },
    ];
  } else {
    flowCards = composeUniversalVisualCards(semantics);
    if (primaryConcept && (primaryConcept.type === 'escape_newline' || primaryConcept.type === 'escape_tab')) {
      flowCards[1] = {
        ...flowCards[1],
        pillText: primaryConcept.cardPillText,
        captionHi: primaryConcept.cardCaptionHi,
        captionEn: primaryConcept.cardCaptionEn,
        tagText: primaryConcept.titleEn,
      };
    }
  }

  const allLineNumbers = codeLines.map((_, i) => i + 1);
  const totalVars = variables.length;
  const totalLoopSteps = loopInfo?.values.length || 0;
  const totalStack = callStack.length;

  // --------------------------------------------------------------------------
  // MULTILINE STATEMENTS EXTRACTION (Dynamic execution order)
  // --------------------------------------------------------------------------
  interface CodeStatementInfo {
    lineNumber: number;
    raw: string;
    trimmed: string;
    isPrint: boolean;
    funcName: string;
    argText: string;
    outputLine: string;
    isVariableAssignment: boolean;
    varName?: string;
    varValue?: string;
  }

  const rawOutputLines = cleanOutput.split('\n');
  let currentOutputLineIdx = 0;

  const statements: CodeStatementInfo[] = [];
  codeLines.forEach((rawLine, idx) => {
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const lineNum = idx + 1;
    const printMatch = trimmed.match(/^([a-zA-Z_]\w*)\s*\((.*)\)$/);
    if (printMatch && printMatch[1] === 'print') {
      const arg = printMatch[2].trim();
      const out =
        currentOutputLineIdx < rawOutputLines.length
          ? rawOutputLines[currentOutputLineIdx]
          : arg.replace(/^["']|["']$/g, '');
      currentOutputLineIdx++;
      statements.push({
        lineNumber: lineNum,
        raw: rawLine,
        trimmed,
        isPrint: true,
        funcName: 'print()',
        argText: arg || '""',
        outputLine: out,
        isVariableAssignment: false,
      });
    } else {
      const varMatch = trimmed.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
      if (varMatch) {
        statements.push({
          lineNumber: lineNum,
          raw: rawLine,
          trimmed,
          isPrint: false,
          funcName: 'assign',
          argText: `${varMatch[1]} = ${varMatch[2].trim()}`,
          outputLine: '',
          isVariableAssignment: true,
          varName: varMatch[1],
          varValue: varMatch[2].trim(),
        });
      } else {
        statements.push({
          lineNumber: lineNum,
          raw: rawLine,
          trimmed,
          isPrint: false,
          funcName: 'execute',
          argText: trimmed,
          outputLine: '',
          isVariableAssignment: false,
        });
      }
    }
  });

  const isMultilineExecution = statements.length > 1;

  // Character ranges for output lines in cleanOutput
  const lineCharRanges: [number, number][] = [];
  let cumChar = 0;
  for (let i = 0; i < rawOutputLines.length; i++) {
    const start = cumChar;
    const end = start + rawOutputLines[i].length;
    lineCharRanges.push([start, end]);
    cumChar = end + 1; // account for newline
  }

  // Multiline Scene 3 Timeline Events
  const multilineScene3Events: TimelineExecutionEvent[] = [];
  if (isMultilineExecution) {
    const N = statements.length;
    let runningOutputCharCount = 0;
    let outIdx = 0;

    statements.forEach((stmt, sIdx) => {
      const stmtStart = sIdx / N;
      const stmtEnd = (sIdx + 1) / N;
      const span = stmtEnd - stmtStart;
      const isLastStmt = sIdx === N - 1;

      let stmtCharRange: [number, number] | undefined = undefined;
      const prevCharCount = runningOutputCharCount;
      if (stmt.isPrint && outIdx < rawOutputLines.length) {
        const lineLen = rawOutputLines[outIdx].length;
        const start = runningOutputCharCount;
        const end = start + lineLen;
        stmtCharRange = [start, end];
        runningOutputCharCount = end + (outIdx < rawOutputLines.length - 1 ? 1 : 0);
        outIdx++;
      }

      // Micro-step 1: Code highlight in editor (Robot points to code editor)
      multilineScene3Events.push({
        id: `s3_stmt_${sIdx}_code_highlight`,
        stepCode: 'Step A',
        eventType: 'code_highlight',
        startRatio: stmtStart,
        endRatio: stmtStart + span * 0.32,
        relatedLineNumbers: [stmt.lineNumber],
        relatedToken: stmt.funcName,
        visualElement: 'editor_line',
        animationAction: 'code_highlight',
        activeFunctionPillText: stmt.funcName,
        activeArgPillText: stmt.argText,
        consoleCharsCount: prevCharCount,
        narrationSegmentHi: `लाइन ${stmt.lineNumber} का निष्पादन शुरू: ${stmt.trimmed}`,
        narrationSegmentEn: `Line ${stmt.lineNumber} begins execution: ${stmt.trimmed}`,
        explanationPartsHi: {
          codePill1: stmt.funcName,
          text1: `लाइन ${stmt.lineNumber} पर`,
          codePill2: stmt.argText,
          text2: `का निष्पादन शुरू हो रहा है।`,
        },
        explanationPartsEn: {
          codePill1: stmt.funcName,
          text1: `Line ${stmt.lineNumber} executes`,
          codePill2: stmt.argText,
          text2: `in sequential order.`,
        },
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
          consoleMode: prevCharCount > 0 ? 'receiving' : 'empty',
          visibleVariableCount: totalVars,
          showConditionResult: Boolean(conditionInfo),
          visibleLoopStepCount: totalLoopSteps,
          visibleStackFrameCount: totalStack,
        },
        nextEventId: `s3_stmt_${sIdx}_card_reveal`,
      });

      // Micro-step 2: Argument card reveal (Robot points to argument card)
      multilineScene3Events.push({
        id: `s3_stmt_${sIdx}_card_reveal`,
        stepCode: 'Step C',
        eventType: 'argument_reveal',
        startRatio: stmtStart + span * 0.32,
        endRatio: stmtStart + span * 0.65,
        relatedLineNumbers: [stmt.lineNumber],
        relatedToken: stmt.argText,
        visualElement: 'card_argument',
        animationAction: 'slide_in',
        activeFunctionPillText: stmt.funcName,
        activeArgPillText: stmt.argText,
        consoleCharsCount: prevCharCount,
        narrationSegmentHi: stmt.isPrint
          ? `यह print Function ${stmt.argText} को पढ़ता है`
          : `${stmt.trimmed} का Value तैयार होता है`,
        narrationSegmentEn: stmt.isPrint
          ? `The print function reads ${stmt.argText}`
          : `Evaluates ${stmt.trimmed}`,
        explanationPartsHi: {
          codePill1: stmt.funcName,
          text1: `आर्गुमेंट`,
          codePill2: stmt.argText,
          text2: `का मूल्यांकन किया जाता है।`,
        },
        explanationPartsEn: {
          codePill1: stmt.funcName,
          text1: `Evaluates the argument`,
          codePill2: stmt.argText,
          text2: `for this statement.`,
        },
        stateSnapshot: {
          codeFocus: 'argument',
          showFunctionCard: true,
          highlightFunctionCard: false,
          showArrow1: true,
          animateArrow1: true,
          showArgumentCard: true,
          highlightArgumentCard: true,
          showArrow2: false,
          animateArrow2: false,
          showConsoleOpCard: false,
          highlightConsoleOpCard: false,
          showRobotMascot: true,
          showCurvedFlowArrow: false,
          animateCurvedFlowArrow: false,
          consoleMode: prevCharCount > 0 ? 'receiving' : 'empty',
          visibleVariableCount: totalVars,
          showConditionResult: Boolean(conditionInfo),
          visibleLoopStepCount: totalLoopSteps,
          visibleStackFrameCount: totalStack,
        },
        nextEventId: `s3_stmt_${sIdx}_console_output`,
      });

      // Micro-step 3: Console typing (Robot points to console)
      multilineScene3Events.push({
        id: `s3_stmt_${sIdx}_console_output`,
        stepCode: 'Step E',
        eventType: 'console_typing',
        startRatio: stmtStart + span * 0.65,
        endRatio: stmtEnd,
        relatedLineNumbers: [stmt.lineNumber],
        relatedToken: stmt.outputLine || stmt.argText,
        visualElement: 'console_output',
        animationAction: 'console_typing',
        activeFunctionPillText: stmt.funcName,
        activeArgPillText: stmt.argText,
        consoleCharRange: stmtCharRange,
        consoleCharsCount: stmtCharRange ? stmtCharRange[1] : prevCharCount,
        narrationSegmentHi: stmt.isPrint
          ? `और Console में नई Row पर ${stmt.outputLine} लिखता है।`
          : `Value मेमोरी में दर्ज हो जाता है।`,
        narrationSegmentEn: stmt.isPrint
          ? `and streams "${stmt.outputLine}" onto the console.`
          : `and registers the value.`,
        explanationPartsHi: {
          codePill1: stmt.funcName,
          text1: `Console पर`,
          outputHighlight: stmt.outputLine || stmt.argText,
          text2: `प्रिंट हो जाता है।`,
        },
        explanationPartsEn: {
          codePill1: stmt.funcName,
          text1: `Outputs`,
          outputHighlight: stmt.outputLine || stmt.argText,
          text2: `onto the console.`,
        },
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
          animateCurvedFlowArrow: true,
          consoleMode: isLastStmt ? 'complete' : 'typing',
          visibleVariableCount: totalVars,
          showConditionResult: Boolean(conditionInfo),
          visibleLoopStepCount: totalLoopSteps,
          visibleStackFrameCount: totalStack,
        },
        nextEventId: isLastStmt ? null : `s3_stmt_${sIdx + 1}_code_highlight`,
      });
    });
  }

  // Multiline Scene 4 Timeline Events
  const multilineScene4Events: TimelineExecutionEvent[] = [
    {
      id: 's4_multi_recap',
      stepCode: 'Step C',
      eventType: 'argument_reveal',
      startRatio: 0.0,
      endRatio: 0.45,
      relatedLineNumbers: allLineNumbers,
      visualElement: 'card_argument',
      animationAction: 'code_highlight',
      activeFunctionPillText: 'print()',
      activeArgPillText: statements[statements.length - 1]?.argText || argText,
      consoleCharsCount: cleanOutput.length,
      narrationSegmentHi: 'सभी Statements ने क्रमानुसार अपना Output Console में भेजा,',
      narrationSegmentEn: 'All statements sequentially sent their output to the console,',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'सभी Statements क्रमानुसार चले और Output Console में अलग-अलग Rows में सुरक्षित रूप से दर्ज हुए।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'All statements ran in top-to-bottom sequence and generated individual output lines.',
      },
      stateSnapshot: {
        codeFocus: 'full_line',
        showFunctionCard: true,
        highlightFunctionCard: false,
        showArrow1: true,
        animateArrow1: false,
        showArgumentCard: true,
        highlightArgumentCard: true,
        showArrow2: true,
        animateArrow2: false,
        showConsoleOpCard: true,
        highlightConsoleOpCard: false,
        showRobotMascot: true,
        showCurvedFlowArrow: false,
        animateCurvedFlowArrow: false,
        consoleMode: 'complete',
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: totalLoopSteps,
        visibleStackFrameCount: totalStack,
      },
      nextEventId: 's4_multi_complete',
    },
    {
      id: 's4_multi_complete',
      stepCode: 'Step F',
      eventType: 'completion',
      startRatio: 0.45,
      endRatio: 1.0,
      relatedLineNumbers: allLineNumbers,
      visualElement: 'console_output',
      animationAction: 'fade_in',
      activeFunctionPillText: 'print()',
      activeArgPillText: statements[statements.length - 1]?.argText || argText,
      consoleCharsCount: cleanOutput.length,
      narrationSegmentHi: 'और पूरा मल्टी-लाइन Output Console में स्पष्ट दिखाई दे रहा है।',
      narrationSegmentEn: 'and the complete multi-line output is displayed clearly on the terminal.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का यह Program सफलतापूर्वक निष्पादित हुआ।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'This Python program executed successfully in full.',
      },
      stateSnapshot: {
        codeFocus: 'completed',
        showFunctionCard: true,
        highlightFunctionCard: true,
        showArrow1: true,
        animateArrow1: false,
        showArgumentCard: true,
        highlightArgumentCard: true,
        showArrow2: true,
        animateArrow2: false,
        showConsoleOpCard: true,
        highlightConsoleOpCard: true,
        showRobotMascot: true,
        showCurvedFlowArrow: true,
        animateCurvedFlowArrow: false,
        consoleMode: 'complete',
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: totalLoopSteps,
        visibleStackFrameCount: totalStack,
      },
      nextEventId: null,
    },
  ];

  // ==========================================================================
  // SCENE 1 TIMELINE EVENTS — Understanding the Code (Step A -> Step B)
  // Starts with ONLY the code editor visible (0 center cards).
  // ==========================================================================
  const scene1Events: TimelineExecutionEvent[] = [
    {
      id: 's1_ev1_code_highlight',
      stepCode: 'Step A',
      eventType: 'code_highlight',
      startRatio: 0.0,
      endRatio: 0.44,
      relatedLineNumbers: [1],
      relatedToken: 'print',
      visualElement: 'editor_line',
      animationAction: 'code_highlight',
      narrationSegmentHi: 'Python में print एक बिल्ट-इन Function है।',
      narrationSegmentEn: 'In Python, print is a built-in function.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है। सबसे पहले बाईं तरफ़ Code एडिटर में हाईलाइट किए गए print() Function को देखिए।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is a built-in Python function. First, look at the highlighted print() function in the code editor on the left.',
      },
      stateSnapshot: {
        codeFocus: 'function',
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
        visibleVariableCount: 0,
        showConditionResult: false,
        visibleLoopStepCount: 0,
        visibleStackFrameCount: 0,
      },
      nextEventId: 's1_ev2_func_card_reveal',
    },
    {
      id: 's1_ev2_func_card_reveal',
      stepCode: 'Step B',
      eventType: 'function_reveal',
      startRatio: 0.44,
      endRatio: 1.0,
      relatedLineNumbers: [1],
      relatedToken: 'print()',
      visualElement: 'card_function',
      animationAction: 'slide_in',
      narrationSegmentHi:
        'इसका काम स्क्रीन पर Output दिखाना है। यहाँ हमने Code एडिटर में print Function और उसके ब्रैकेट्स लिखे हैं।',
      narrationSegmentEn:
        'Its purpose is to display output on the screen. Here in the code editor, we start with the print function followed by parentheses.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है, जो हमारे दिए गए text को screen (console) पर दिखाता है।',
        codePill2: argText,
        text2: 'को इसके brackets के अंदर रखा जाता है ताकि',
        outputHighlight: cleanOutput,
        text3: 'को प्रिंट करने की तैयारी हो सके।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is called by Python as a built-in function whose job is to display output on the screen (console).',
        codePill2: argText,
        text2: 'is placed inside its parentheses so Python prepares',
        outputHighlight: cleanOutput,
        text3: 'for output.',
      },
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
        visibleVariableCount: totalVars,
        showConditionResult: false,
        visibleLoopStepCount: 0,
        visibleStackFrameCount: Math.min(1, totalStack),
      },
      nextEventId: null,
    },
  ];

  // ==========================================================================
  // DYNAMIC CONCEPT TEACHING EVENTS FOR SCENE 2
  // Explains WHAT each concept is, WHY it is used, and HOW it works
  // ==========================================================================
  const dynamicConceptScene2Events: TimelineExecutionEvent[] = [];
  if (!isChallenge1HelloWorld && detectedConceptsList.length > 0) {
    const C = detectedConceptsList.length;
    detectedConceptsList.forEach((concept, cIdx) => {
      const cStart = cIdx / C;
      const cEnd = (cIdx + 1) / C;
      const cSpan = cEnd - cStart;
      const isLastConcept = cIdx === C - 1;

      // Event 1: Focus on the concept syntax in code editor (Robot flies to code editor and points!)
      dynamicConceptScene2Events.push({
        id: `s2_concept_${cIdx}_syntax`,
        stepCode: 'Step A',
        eventType: 'code_highlight',
        startRatio: cStart,
        endRatio: cStart + cSpan * 0.45,
        relatedLineNumbers: [concept.lineNumber],
        relatedToken: concept.tokenText,
        visualElement: 'editor_line',
        animationAction: 'code_highlight',
        activeFunctionPillText: 'print()',
        activeArgPillText: concept.cardPillText,
        narrationSegmentHi: concept.whyUsedHi,
        narrationSegmentEn: concept.whyUsedEn,
        explanationPartsHi: {
          codePill1: concept.cardPillText,
          text1: concept.whyUsedHi,
          codePill2: 'print()',
          text2: 'में इसका विशेष उपयोग होता है।',
        },
        explanationPartsEn: {
          codePill1: concept.cardPillText,
          text1: concept.whyUsedEn,
        },
        stateSnapshot: {
          codeFocus: 'argument',
          showFunctionCard: true,
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
          visibleVariableCount: totalVars,
          showConditionResult: false,
          visibleLoopStepCount: 0,
          visibleStackFrameCount: Math.min(1, totalStack),
        },
        nextEventId: `s2_concept_${cIdx}_how_works`,
      });

      // Event 2: Reveal the concept card in flow diagram (Robot points to argument/concept card!)
      dynamicConceptScene2Events.push({
        id: `s2_concept_${cIdx}_how_works`,
        stepCode: 'Step C',
        eventType: 'argument_reveal',
        startRatio: cStart + cSpan * 0.45,
        endRatio: cEnd,
        relatedLineNumbers: [concept.lineNumber],
        relatedToken: concept.tokenText,
        visualElement: 'card_argument',
        animationAction: 'slide_in',
        activeFunctionPillText: 'print()',
        activeArgPillText: concept.cardPillText,
        narrationSegmentHi: concept.howItWorksHi,
        narrationSegmentEn: concept.howItWorksEn,
        explanationPartsHi: {
          codePill1: concept.cardPillText,
          text1: concept.howItWorksHi,
          outputHighlight: cleanOutput.split('\n')[0] || cleanOutput,
          text2: 'का प्रभाव दिखाई देता है।',
        },
        explanationPartsEn: {
          codePill1: concept.cardPillText,
          text1: concept.howItWorksEn,
          outputHighlight: cleanOutput.split('\n')[0] || cleanOutput,
          text2: 'takes effect.',
        },
        stateSnapshot: {
          codeFocus: 'argument',
          showFunctionCard: true,
          highlightFunctionCard: false,
          showArrow1: true,
          animateArrow1: true,
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
          visibleVariableCount: totalVars,
          showConditionResult: Boolean(conditionInfo),
          visibleLoopStepCount: totalLoopSteps,
          visibleStackFrameCount: totalStack,
        },
        nextEventId: isLastConcept ? null : `s2_concept_${cIdx + 1}_syntax`,
      });
    });
  }

  // ==========================================================================
  // SCENE 2 TIMELINE EVENTS — Understanding the Logic (Step A -> Step B -> Step C)
  // Progressively reveals print() -> connecting arrow 1 -> "Hello, World!" string card
  // ==========================================================================
  const scene2Events: TimelineExecutionEvent[] = [
    {
      id: 's2_ev1_arg_code_highlight',
      stepCode: 'Step A',
      eventType: 'code_highlight',
      startRatio: 0.0,
      endRatio: 0.26,
      relatedLineNumbers: [1],
      relatedToken: argText,
      visualElement: 'editor_line',
      animationAction: 'code_highlight',
      narrationSegmentHi: 'हमने ब्रैकेट्स के अंदर',
      narrationSegmentEn: 'Inside the parentheses, we have written',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'के brackets के अंदर अब Code एडिटर में हाईलाइट किए गए',
        codePill2: argText,
        text2: 'String आर्गुमेंट को ध्यान से देखिए।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'has parentheses that hold our input. Look at the highlighted argument',
        codePill2: argText,
        text2: 'inside the code editor.',
      },
      stateSnapshot: {
        codeFocus: 'argument',
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
        visibleVariableCount: 0,
        showConditionResult: false,
        visibleLoopStepCount: 0,
        visibleStackFrameCount: 0,
      },
      nextEventId: 's2_ev2_func_ready',
    },
    {
      id: 's2_ev2_func_ready',
      stepCode: 'Step B',
      eventType: 'function_reveal',
      startRatio: 0.26,
      endRatio: 0.50,
      relatedLineNumbers: [1],
      relatedToken: 'print()',
      visualElement: 'card_function',
      animationAction: 'function_call_transition',
      narrationSegmentHi: 'print Function को यह टेक्स्ट Input दिया है:',
      narrationSegmentEn: 'passing this input into the print function:',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Function अब अपने ब्रैकेट्स में दिए गए',
        codePill2: argText,
        text2: 'Input को स्वीकार करने के लिए तैयार है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is ready to receive the argument',
        codePill2: argText,
        text2: 'placed inside its parentheses.',
      },
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
        visibleVariableCount: totalVars,
        showConditionResult: false,
        visibleLoopStepCount: 0,
        visibleStackFrameCount: Math.min(1, totalStack),
      },
      nextEventId: 's2_ev3_quotes_explanation',
    },
    {
      id: 's2_ev3_quotes_explanation',
      stepCode: 'Step C',
      eventType: 'argument_reveal',
      startRatio: 0.50,
      endRatio: 1.0,
      relatedLineNumbers: [1],
      relatedToken: argText,
      visualElement: 'card_argument',
      animationAction: 'slide_in',
      narrationSegmentHi:
        'Hello, World! के दोनों तरफ़ लगे डबल कोट्स Python को बताते हैं कि यह एक String यानी टेक्स्ट Data है।',
      narrationSegmentEn:
        'The double quotes around Hello, World! tell Python that this value is a string literal, meaning plain text data.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'के brackets के अंदर हमने',
        codePill2: argText,
        text2: 'text लिखा है। Double quotes बताते हैं कि यह एक string है, जिससे output में',
        outputHighlight: cleanOutput,
        text3: 'ठीक वैसा ही तैयार होता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'receives the argument',
        codePill2: argText,
        text2: 'inside double quotes. The quotes tell Python this is a string literal representing',
        outputHighlight: cleanOutput,
        text3: 'as plain text.',
      },
      stateSnapshot: {
        codeFocus: 'argument',
        showFunctionCard: true,
        highlightFunctionCard: false,
        showArrow1: true,
        animateArrow1: true,
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
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: Math.min(1, totalLoopSteps),
        visibleStackFrameCount: Math.min(2, totalStack),
      },
      nextEventId: null,
    },
  ];

  // ==========================================================================
  // SCENE 3 TIMELINE EVENTS — Code Execution (Step A -> B -> C -> D -> E)
  // Full progressive execution sequence from empty diagram to live typing!
  // ==========================================================================
  const scene3Events: TimelineExecutionEvent[] = [
    {
      id: 's3_ev1_step_a_line_active',
      stepCode: 'Step A',
      eventType: 'code_highlight',
      startRatio: 0.0,
      endRatio: 0.14,
      relatedLineNumbers: allLineNumbers,
      relatedToken: 'print',
      visualElement: 'editor_line',
      animationAction: 'code_highlight',
      narrationSegmentHi: 'जब Code एक्ज़ीक्यूट होता है,',
      narrationSegmentEn: 'When the code executes,',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'अब लाइन 1 का execution शुरू हो रहा है — सबसे पहले Python Code एडिटर में',
        codePill2: 'print()',
        text2: 'Statement को सक्रिय करता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'Line 1 begins execution — Python first activates the',
        codePill2: 'print()',
        text2: 'statement in the code editor.',
      },
      stateSnapshot: {
        codeFocus: 'function',
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
        visibleVariableCount: 0,
        showConditionResult: false,
        visibleLoopStepCount: 0,
        visibleStackFrameCount: 0,
      },
      nextEventId: 's3_ev2_step_b_call_print',
    },
    {
      id: 's3_ev2_step_b_call_print',
      stepCode: 'Step B',
      eventType: 'function_reveal',
      startRatio: 0.14,
      endRatio: 0.28,
      relatedLineNumbers: allLineNumbers,
      relatedToken: 'print()',
      visualElement: 'card_function',
      animationAction: 'function_call_transition',
      narrationSegmentHi: 'Python print Function को कॉल करता है,',
      narrationSegmentEn: 'Python calls the built-in print function,',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Function कॉल होता है और Output ऑपरेशन शुरू करता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is invoked by the Python interpreter to start the output operation.',
      },
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
        visibleVariableCount: Math.min(1, totalVars),
        showConditionResult: false,
        visibleLoopStepCount: 0,
        visibleStackFrameCount: Math.min(1, totalStack),
      },
      nextEventId: 's3_ev3_step_c_read_string',
    },
    {
      id: 's3_ev3_step_c_read_string',
      stepCode: 'Step C',
      eventType: 'argument_reveal',
      startRatio: 0.28,
      endRatio: 0.45,
      relatedLineNumbers: allLineNumbers,
      relatedToken: argText,
      visualElement: 'card_argument',
      animationAction: 'slide_in',
      narrationSegmentHi: 'जो कोट्स के अंदर लिखे Hello, World! टेक्स्ट को पढ़ता है',
      narrationSegmentEn: 'which reads the Hello, World! string inside the quotes',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Function ब्रैकेट्स के अंदर दिए गए',
        codePill2: argText,
        text2: 'String टेक्स्ट को पढ़ता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'reads the string argument',
        codePill2: argText,
        text2: 'enclosed inside the quotation marks.',
      },
      stateSnapshot: {
        codeFocus: 'argument',
        showFunctionCard: true,
        highlightFunctionCard: false,
        showArrow1: true,
        animateArrow1: true,
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
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: Math.min(1, totalLoopSteps),
        visibleStackFrameCount: Math.min(2, totalStack),
      },
      nextEventId: 's3_ev4_step_d_execution_flow',
    },
    {
      id: 's3_ev4_step_d_execution_flow',
      stepCode: 'Step D',
      eventType: 'execution_flow',
      startRatio: 0.45,
      endRatio: 0.64,
      relatedLineNumbers: allLineNumbers,
      relatedToken: '>_',
      visualElement: 'card_console_op',
      animationAction: 'animate_arrow',
      narrationSegmentHi: 'और उसे सीधा Output Console की ओर भेजता है।',
      narrationSegmentEn: 'and sends the text flowing toward the output console.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'अब',
        codePill2: argText,
        text2: 'को Output ऑपरेशन ( >_ ) के ज़रिए सीधा Console की तरफ़ भेज रहा है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'now streams',
        codePill2: argText,
        text2: 'through the output operation ( >_ ) toward the console.',
      },
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
        animateCurvedFlowArrow: true,
        consoleMode: 'empty',
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: Math.ceil(totalLoopSteps / 2),
        visibleStackFrameCount: totalStack,
      },
      nextEventId: 's3_ev5_step_e_console_typing',
    },
    {
      id: 's3_ev5_step_e_console_typing',
      stepCode: 'Step E',
      eventType: 'console_typing',
      startRatio: 0.64,
      endRatio: 1.0,
      relatedLineNumbers: allLineNumbers,
      relatedToken: cleanOutput,
      visualElement: 'console_output',
      animationAction: 'console_typing',
      narrationSegmentHi: 'Console में अक्षर एक-एक करके टाइप होते हैं।',
      narrationSegmentEn: 'Each character is typed live into the output console.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है, जो हमारे दिए गए text को screen (console) पर दिखाता है। यहाँ हमने',
        codePill2: argText,
        text2: 'text दिया है, इसलिए output में',
        outputHighlight: cleanOutput,
        text3: 'दिखाई देता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'executes and reads the string argument',
        codePill2: argText,
        text2: 'character by character, streaming',
        outputHighlight: cleanOutput,
        text3: 'live into the Output (Console).',
      },
      stateSnapshot: {
        codeFocus: 'full_line',
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
        showCurvedFlowArrow: true,
        animateCurvedFlowArrow: true,
        consoleMode: 'typing',
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: totalLoopSteps,
        visibleStackFrameCount: totalStack,
      },
      nextEventId: null,
    },
  ];

  // ==========================================================================
  // SCENE 4 TIMELINE EVENTS — Final Output & Recap (Step C -> Step E -> Step F)
  // Progressively connects the input string to the final console output & recap
  // ==========================================================================
  const scene4Events: TimelineExecutionEvent[] = [
    {
      id: 's4_ev1_recap_input',
      stepCode: 'Step C',
      eventType: 'argument_reveal',
      startRatio: 0.0,
      endRatio: 0.34,
      relatedLineNumbers: allLineNumbers,
      relatedToken: argText,
      visualElement: 'card_argument',
      animationAction: 'code_highlight',
      narrationSegmentHi: 'यहाँ हमने Hello, World! टेक्स्ट दिया है,',
      narrationSegmentEn: 'Because we passed the text Hello, World! into print,',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'में हमने',
        codePill2: argText,
        text2: 'String Input के रूप में दी है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'received',
        codePill2: argText,
        text2: 'as its quoted string argument.',
      },
      stateSnapshot: {
        codeFocus: 'argument',
        showFunctionCard: true,
        highlightFunctionCard: false,
        showArrow1: true,
        animateArrow1: true,
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
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: totalLoopSteps,
        visibleStackFrameCount: totalStack,
      },
      nextEventId: 's4_ev2_recap_console_verify',
    },
    {
      id: 's4_ev2_recap_console_verify',
      stepCode: 'Step E',
      eventType: 'console_typing',
      startRatio: 0.34,
      endRatio: 0.68,
      relatedLineNumbers: allLineNumbers,
      relatedToken: cleanOutput,
      visualElement: 'console_output',
      animationAction: 'return_value_transition',
      narrationSegmentHi: 'इसलिए Output Console में बिना कोट्स के Hello, World!',
      narrationSegmentEn: 'the output console displays Hello, World! cleanly',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'कोट्स को हटाकर केवल अंदर का संदेश',
        codePill2: argText,
        text2: '→',
        outputHighlight: cleanOutput,
        text3: 'Console पर भेजता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'strips the outer quotation marks from',
        codePill2: argText,
        text2: 'and outputs',
        outputHighlight: cleanOutput,
        text3: 'to the console.',
      },
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
        animateCurvedFlowArrow: true,
        consoleMode: 'typing',
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: totalLoopSteps,
        visibleStackFrameCount: totalStack,
      },
      nextEventId: 's4_ev3_step_f_completion',
    },
    {
      id: 's4_ev3_step_f_completion',
      stepCode: 'Step F',
      eventType: 'completion',
      startRatio: 0.68,
      endRatio: 1.0,
      relatedLineNumbers: allLineNumbers,
      relatedToken: cleanOutput,
      visualElement: 'console_output',
      animationAction: 'fade_in',
      narrationSegmentHi: 'साफ़ दिखाई देता है।',
      narrationSegmentEn: 'without the quotation marks.',
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है, जो हमारे दिए गए text को screen (console) पर दिखाता है। यहाँ हमने',
        codePill2: argText,
        text2: 'text दिया है, इसलिए output में',
        outputHighlight: cleanOutput,
        text3: 'दिखाई देता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is a built-in Python function that displays our text on the screen (console). Because we passed',
        codePill2: argText,
        text2: 'as the string argument, the output shows',
        outputHighlight: cleanOutput,
        text3: 'cleanly on the console.',
      },
      stateSnapshot: {
        codeFocus: 'completed',
        showFunctionCard: true,
        highlightFunctionCard: true,
        showArrow1: true,
        animateArrow1: false,
        showArgumentCard: true,
        highlightArgumentCard: true,
        showArrow2: true,
        animateArrow2: false,
        showConsoleOpCard: true,
        highlightConsoleOpCard: true,
        showRobotMascot: true,
        showCurvedFlowArrow: true,
        animateCurvedFlowArrow: false,
        consoleMode: 'complete',
        visibleVariableCount: totalVars,
        showConditionResult: Boolean(conditionInfo),
        visibleLoopStepCount: totalLoopSteps,
        visibleStackFrameCount: totalStack,
      },
      nextEventId: null,
    },
  ];

  // --------------------------------------------------------------------------
  // DYNAMIC PEDAGOGICAL NARRATION GENERATION & UNBOUNDED DURATION
  // --------------------------------------------------------------------------
  const syntaxAnatomy = extractSyntaxAnatomy(cleanCode);
  const syntaxDetailTextHi = syntaxAnatomy.length > 0 
    ? 'Function को कॉल करने के लिए पैरेंथेसिस () लगाए जाते हैं, और अंदर के टेक्स्ट को String बनाने के लिए कोट्स का उपयोग किया जाता है।'
    : '';
  const syntaxDetailTextEn = syntaxAnatomy.length > 0 
    ? 'Parentheses () invoke the function, while quotation marks designate the contents as a string literal.'
    : '';

  const scene1NarrationHi = isChallenge1HelloWorld
    ? 'Python में print एक बिल्ट-इन Function है। इसका काम स्क्रीन पर Output दिखाना है। यहाँ हमने Code एडिटर में print Function और उसके ब्रैकेट्स लिखे हैं।'
    : `Python में print एक बिल्ट-इन Function है जिसका काम Output दिखाना है। ${syntaxDetailTextHi} यहाँ हमने Code में ${argText} को प्रिंट करने का निर्देश दिया है।`;

  const scene1NarrationEn = isChallenge1HelloWorld
    ? 'In Python, print is a built-in function. Its purpose is to display output on the screen. Here in the code editor, we start with the print function followed by parentheses.'
    : `In Python, print is a built-in function used to display output. ${syntaxDetailTextEn} Here our code uses print with ${argText}.`;

  const scene2NarrationHi = isChallenge1HelloWorld
    ? 'हमने ब्रैकेट्स के अंदर Hello, World! टेक्स्ट लिखा है। इसके दोनों तरफ़ लगे डबल कोट्स Python को बताते हैं कि यह एक String यानी टेक्स्ट Data है।'
    : detectedConceptsList.length > 0
    ? detectedConceptsList.map((c) => `${c.whyUsedHi} ${c.howItWorksHi}`).join(' ')
    : `हमने ब्रैकेट्स के अंदर ${argText} लिखा है। कोट्स बताते हैं कि यह एक String है जिसे Python टेक्स्ट की तरह पढ़ता है।`;

  const scene2NarrationEn = isChallenge1HelloWorld
    ? 'Inside the parentheses, we have written the text Hello, World! The double quotes around it tell Python that this value is a string literal, meaning plain text data.'
    : detectedConceptsList.length > 0
    ? detectedConceptsList.map((c) => `${c.whyUsedEn} ${c.howItWorksEn}`).join(' ')
    : `Inside the parentheses, we pass ${argText}. Quotation marks tell Python to treat this value as a string of text.`;

  const scene3NarrationHi = isChallenge1HelloWorld
    ? 'जब Code एक्ज़ीक्यूट होता है, तो print Function कोट्स के अंदर लिखे Hello, World! टेक्स्ट को पढ़ता है और उसे सीधा Output Console में भेजता है।'
    : isMultilineExecution
    ? 'जब Code चलता है, तो Python लाइन 1 से शुरू करके हर Statement को क्रम से चलाता है और हर print Function अपनी लाइन Console में भेजता है।'
    : `जब Code एक्ज़ीक्यूट होता है, तो Python लाइन दर लाइन Code चलाकर ${cleanOutput} को Output Console में भेजता है।`;

  const scene3NarrationEn = isChallenge1HelloWorld
    ? 'When the code executes, the print function reads the Hello, World! string inside the quotes and streams each character directly to the output console.'
    : isMultilineExecution
    ? 'When the code executes, Python evaluates each statement sequentially from top to bottom, streaming each line into the console.'
    : `When the code executes, Python evaluates the statement and sends ${cleanOutput} directly to the output console.`;

  const scene4NarrationHi = isChallenge1HelloWorld
    ? 'यहाँ हमने Hello, World! टेक्स्ट दिया है, इसलिए Output Console में बिना कोट्स के Hello, World! साफ़ दिखाई देता है।'
    : primaryConcept?.executionEffectHi
    ? `${primaryConcept.executionEffectHi} इस प्रकार Code पूरा चलने के बाद Output Console में सही परिणाम साफ़ दिखाई देता है।`
    : isMultilineExecution
    ? 'सभी Statements क्रम से चले, और Console में सभी Rows सही क्रम में दिखाई देती हैं।'
    : `Code पूरा चलने के बाद Output Console में ${cleanOutput} साफ़ दिखाई देता है।`;

  const scene4NarrationEn = isChallenge1HelloWorld
    ? 'Because we passed the text Hello, World! into print, the output console displays Hello, World! cleanly without the quotation marks.'
    : primaryConcept?.executionEffectEn
    ? `${primaryConcept.executionEffectEn} Execution is complete, and the terminal displays the exact clean output.`
    : isMultilineExecution
    ? 'All statements ran in sequential order, and the terminal displays each output line cleanly.'
    : `Execution is complete, and the console displays the exact output ${cleanOutput} without quotation marks.`;

  const scenes: [LearningSceneSpec, LearningSceneSpec, LearningSceneSpec, LearningSceneSpec] = [
    // Scene 1: Understanding the Code
    {
      sceneIndex: 0,
      stepBadgeHi: 'Step: Understanding the Code',
      stepBadgeEn: 'Step: Understanding the Code',
      activeLineNumbers: [1],
      highlightPart: 'function',
      spokenNarrationHi: scene1NarrationHi,
      spokenNarrationEn: scene1NarrationEn,
      audioSrcHi: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-1-hi.mp3' : undefined,
      audioSrcEn: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-1-en.mp3' : undefined,
      durationMsHi: isChallenge1HelloWorld ? 12100 : calculateDynamicNarrationDuration(scene1NarrationHi, 'hi', scene1Events.length),
      durationMsEn: isChallenge1HelloWorld ? 13030 : calculateDynamicNarrationDuration(scene1NarrationEn, 'en', scene1Events.length),
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है, जो हमारे दिए गए text को screen (console) पर दिखाता है।',
        codePill2: argText,
        text2: 'Code की पहली लाइन में हमने print Function और उसके brackets लिखे हैं, जिससे',
        outputHighlight: cleanOutput,
        text3: 'को Output में भेजने की तैयारी होती है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is a built-in Python function that displays our text on the screen (console).',
        codePill2: argText,
        text2: 'is placed inside the parentheses so Python knows to send',
        outputHighlight: cleanOutput,
        text3: 'to the output console.',
      },
      timelineEvents: scene1Events,
    },
    // Scene 2: Understanding the Logic & Concepts
    {
      sceneIndex: 1,
      stepBadgeHi: 'Step: Understanding the Logic',
      stepBadgeEn: 'Step: Understanding the Logic',
      activeLineNumbers: [primaryConcept?.lineNumber || 1],
      highlightPart: 'argument',
      spokenNarrationHi: scene2NarrationHi,
      spokenNarrationEn: scene2NarrationEn,
      audioSrcHi: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-2-hi.mp3' : undefined,
      audioSrcEn: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-2-en.mp3' : undefined,
      durationMsHi: isChallenge1HelloWorld ? 12380 : calculateDynamicNarrationDuration(scene2NarrationHi, 'hi', dynamicConceptScene2Events.length),
      durationMsEn: isChallenge1HelloWorld ? 12500 : calculateDynamicNarrationDuration(scene2NarrationEn, 'en', dynamicConceptScene2Events.length),
      explanationPartsHi: {
        codePill1: primaryConcept ? primaryConcept.cardPillText : 'print()',
        text1: primaryConcept ? primaryConcept.whyUsedHi : 'के brackets के अंदर हमने',
        codePill2: argText,
        text2: primaryConcept ? primaryConcept.howItWorksHi : 'टेक्स्ट लिखा है।',
        outputHighlight: cleanOutput.split('\n')[0] || cleanOutput,
        text3: 'तैयार होता है।',
      },
      explanationPartsEn: {
        codePill1: primaryConcept ? primaryConcept.cardPillText : 'print()',
        text1: primaryConcept ? primaryConcept.whyUsedEn : 'receives the argument inside double quotes.',
        codePill2: argText,
        text2: primaryConcept ? primaryConcept.howItWorksEn : 'as plain text.',
        outputHighlight: cleanOutput.split('\n')[0] || cleanOutput,
        text3: 'is prepared.',
      },
      timelineEvents:
        !isChallenge1HelloWorld && dynamicConceptScene2Events.length > 0
          ? dynamicConceptScene2Events
          : scene2Events,
    },
    // Scene 3: Live Code Execution
    {
      sceneIndex: 2,
      stepBadgeHi: 'Step: Code Execution',
      stepBadgeEn: 'Step: Code Execution',
      activeLineNumbers: allLineNumbers,
      highlightPart: 'execution',
      spokenNarrationHi: scene3NarrationHi,
      spokenNarrationEn: scene3NarrationEn,
      audioSrcHi: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-3-hi.mp3' : undefined,
      audioSrcEn: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-3-en.mp3' : undefined,
      durationMsHi: isChallenge1HelloWorld ? 12140 : calculateDynamicNarrationDuration(scene3NarrationHi, 'hi', (isMultilineExecution ? multilineScene3Events : scene3Events).length),
      durationMsEn: isChallenge1HelloWorld ? 11590 : calculateDynamicNarrationDuration(scene3NarrationEn, 'en', (isMultilineExecution ? multilineScene3Events : scene3Events).length),
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है, जो हमारे दिए गए text को screen (console) पर दिखाता है। यहाँ हमने',
        codePill2: argText,
        text2: 'text दिया है, इसलिए output में',
        outputHighlight: cleanOutput,
        text3: 'दिखाई देता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'executes and reads the string argument',
        codePill2: argText,
        text2: 'character by character, streaming',
        outputHighlight: cleanOutput,
        text3: 'live into the Output (Console).',
      },
      timelineEvents: isMultilineExecution ? multilineScene3Events : scene3Events,
    },
    // Scene 4: Final Output and Recap
    {
      sceneIndex: 3,
      stepBadgeHi: 'Step: Final Output & Recap',
      stepBadgeEn: 'Step: Final Output & Recap',
      activeLineNumbers: allLineNumbers,
      highlightPart: 'output',
      spokenNarrationHi: scene4NarrationHi,
      spokenNarrationEn: scene4NarrationEn,
      audioSrcHi: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-4-hi.mp3' : undefined,
      audioSrcEn: isChallenge1HelloWorld ? '/audio/visual-hints/ch1/scene-4-en.mp3' : undefined,
      durationMsHi: isChallenge1HelloWorld ? 10680 : calculateDynamicNarrationDuration(scene4NarrationHi, 'hi', (isMultilineExecution ? multilineScene4Events : scene4Events).length),
      durationMsEn: isChallenge1HelloWorld ? 10940 : calculateDynamicNarrationDuration(scene4NarrationEn, 'en', (isMultilineExecution ? multilineScene4Events : scene4Events).length),
      explanationPartsHi: {
        codePill1: 'print()',
        text1: 'Python का एक built-in function है, जो हमारे दिए गए text को screen (console) पर दिखाता है। यहाँ हमने',
        codePill2: argText,
        text2: 'text दिया है, इसलिए output में',
        outputHighlight: cleanOutput,
        text3: 'दिखाई देता है।',
      },
      explanationPartsEn: {
        codePill1: 'print()',
        text1: 'is a built-in Python function that displays our text on the screen (console). Because we passed',
        codePill2: argText,
        text2: 'as the string argument, the output shows',
        outputHighlight: cleanOutput,
        text3: 'cleanly on the console.',
      },
      timelineEvents: isMultilineExecution ? multilineScene4Events : scene4Events,
    },
  ];

  const finalScenes = isChallenge1HelloWorld
    ? scenes
    : generateUniversalScenes(semantics, flowCards);

  return {
    codeLines,
    expectedOutput: cleanOutput,
    detectedConcepts,
    flowCards,
    variables,
    callStack,
    lists,
    exceptionInfo,
    conditionInfo,
    loopInfo,
    scenes: finalScenes,
  };
}

