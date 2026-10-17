import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/pythonIntroGamesData.ts');

const newContent = `/**
 * Complete Data for Python Introduction & Setup Module.
 * 8 Interactive Games • 5 Questions per Game = 40 Total Challenges.
 * Matches 1:1 with reference design screens.
 */

export type GameType =
  | 'code_puzzle'
  | 'fill_blank'
  | 'match_code'
  | 'output_predictor'
  | 'bug_hunter'
  | 'blueprint_builder'
  | 'logic_builder'
  | 'boss_fight';

export interface GameChoiceOption {
  key: 'A' | 'B' | 'C' | 'D';
  label: string;
  isCorrect: boolean;
}

export interface LogicLine {
  id: string;
  text: string;
  correctIndex: number;
}

export interface PythonChallenge {
  id: string;
  gameId: number;
  challengeNum: number; // 1 to 5
  title: string;
  task: string;
  expectedOutput: string;
  starterCode: string;
  hint: string;
  solution: string;
  explanation: string;
  xp: number;
  // Specialized game-specific data
  puzzleTokens?: string[];
  expectedPuzzleTokens?: string[];
  blankSnippet?: string;
  blankAnswer?: string;
  matchPairs?: { left: string; right: string }[];
  predictorChoices?: string[];
  choiceOptions?: GameChoiceOption[];
  bugCode?: string;
  bugLine?: number;
  bugType?: string;
  blueprintSpec?: string[];
  blueprintComponents?: string[];
  blueprintExpectedSlots?: string[];
  blueprintSlotsCount?: number;
  logicLines?: LogicLine[];
  bossHpDamage?: number;
  bossStrikeName?: string;
  validate: (output: string, code: string) => { passed: boolean; message: string; diff?: string };
}

export interface PythonGame {
  id: number;
  gameType: GameType;
  title: string;
  shortTitle: string;
  subtitle: string;
  badge: string;
  description: string;
  icon: string;
  themeColor: string;
  activeColor: string;
  mascotImg: string;
  bgGradient: string;
  challenges: PythonChallenge[];
}

export const PYTHON_INTRO_GAMES: PythonGame[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // GAME 1: CODE PUZZLE (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    gameType: 'code_puzzle',
    title: 'Code Puzzle',
    shortTitle: 'Code Puzzle',
    subtitle: 'Arrange the blocks to complete the code and print the message.',
    badge: '1',
    description: 'Arrange magnetic syntax blocks to form valid Python commands.',
    icon: '🧩',
    themeColor: '#0284c7',
    activeColor: '#0284c7',
    mascotImg: '/images/python_intro_games/mascot_g1_boy.png',
    bgGradient: 'from-sky-500 to-blue-600',
    challenges: [
      {
        id: 'g1-q1',
        gameId: 1,
        challengeNum: 1,
        title: 'Hello Python Assembler',
        task: 'Arrange the blocks to complete the code and print the message.',
        expectedOutput: 'Hello, Python!',
        starterCode: 'print("Hello, Python!")',
        hint: 'Combine print(, "Hello, Python!", and ) to form print("Hello, Python!")',
        solution: 'print("Hello, Python!")',
        explanation: 'print() is Python’s standard output function. Strings must be placed inside quotes.',
        xp: 10,
        puzzleTokens: ['print(', '"Hello, Python!"', ')'],
        expectedPuzzleTokens: ['print(', '"Hello, Python!"', ')'],
        validate: (output) => {
          if (output.trim() === 'Hello, Python!') return { passed: true, message: 'Puzzle Solved! "Hello, Python!" assembled perfectly.' };
          return { passed: false, message: 'Expected output: "Hello, Python!"' };
        },
      },
      {
        id: 'g1-q2',
        gameId: 1,
        challengeNum: 2,
        title: 'Math Expression Assembler',
        task: 'Arrange the blocks to calculate and print the sum of 10 and 20.',
        expectedOutput: '30',
        starterCode: 'print(10 + 20)',
        hint: 'Assemble print( followed by 10 + 20 and )',
        solution: 'print(10 + 20)',
        explanation: 'Python can evaluate arithmetic expressions inside print() directly.',
        xp: 10,
        puzzleTokens: ['print(', '10 + 20', ')'],
        expectedPuzzleTokens: ['print(', '10 + 20', ')'],
        validate: (output) => {
          if (output.trim() === '30') return { passed: true, message: 'Correct! 10 + 20 = 30.' };
          return { passed: false, message: 'Expected output: 30' };
        },
      },
      {
        id: 'g1-q3',
        gameId: 1,
        challengeNum: 3,
        title: 'Variable Multiplier Puzzle',
        task: 'Assign x = 5 and print x * 2 to produce 10.',
        expectedOutput: '10',
        starterCode: 'x = 5\\nprint(x * 2)',
        hint: 'Arrange x = 5, print(, x * 2, and )',
        solution: 'x = 5\\nprint(x * 2)',
        explanation: 'Variables hold values in memory that can be multiplied and printed.',
        xp: 10,
        puzzleTokens: ['x = 5', 'print(', 'x * 2', ')'],
        expectedPuzzleTokens: ['x = 5', 'print(', 'x * 2', ')'],
        validate: (output) => {
          if (output.trim() === '10') return { passed: true, message: 'Variables multiplied successfully!' };
          return { passed: false, message: 'Expected output: 10' };
        },
      },
      {
        id: 'g1-q4',
        gameId: 1,
        challengeNum: 4,
        title: 'Two-Line Welcome Banner',
        task: 'Arrange the blocks to print FUTURE IT and Ready to Code on two lines.',
        expectedOutput: 'FUTURE IT\\nReady to Code',
        starterCode: 'print("FUTURE IT")\\nprint("Ready to Code")',
        hint: 'Place print("FUTURE IT") first, then print("Ready to Code")',
        solution: 'print("FUTURE IT")\\nprint("Ready to Code")',
        explanation: 'Each print() statement outputs on a new line by default in Python.',
        xp: 10,
        puzzleTokens: ['print("FUTURE IT")', 'print("Ready to Code")'],
        expectedPuzzleTokens: ['print("FUTURE IT")', 'print("Ready to Code")'],
        validate: (output) => {
          const lines = output.trim().split(/\\r?\\n/).map((l) => l.trim());
          if (lines.length >= 2 && lines[0] === 'FUTURE IT' && lines[1] === 'Ready to Code') {
            return { passed: true, message: 'Two-line banner printed successfully!' };
          }
          return { passed: false, message: 'Expected two lines: FUTURE IT and Ready to Code' };
        },
      },
      {
        id: 'g1-q5',
        gameId: 1,
        challengeNum: 5,
        title: 'F-String Greeting Puzzle',
        task: 'Assemble the variable and f-string greeting to print: Welcome, Subodh!',
        expectedOutput: 'Welcome, Subodh!',
        starterCode: 'name = "Subodh"\\nprint(f"Welcome, {name}!")',
        hint: 'Set name = "Subodh" then print(f"Welcome, {name}!")',
        solution: 'name = "Subodh"\\nprint(f"Welcome, {name}!")',
        explanation: 'F-strings allow embedding variables directly inside curly braces.',
        xp: 10,
        puzzleTokens: ['name = "Subodh"', 'print(f"Welcome, {name}!")'],
        expectedPuzzleTokens: ['name = "Subodh"', 'print(f"Welcome, {name}!")'],
        validate: (output) => {
          if (output.trim() === 'Welcome, Subodh!') return { passed: true, message: 'Code Puzzle Mastered! All 5 solved.' };
          return { passed: false, message: 'Expected output: Welcome, Subodh!' };
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 2: FILL IN THE BLANK (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 2,
    gameType: 'fill_blank',
    title: 'Fill in the Blank',
    shortTitle: 'Fill in the Blank',
    subtitle: 'Choose the correct option to complete the code.',
    badge: '2',
    description: 'Choose the correct syntax token to complete the Python statement.',
    icon: '✍️',
    themeColor: '#ec4899',
    activeColor: '#ec4899',
    mascotImg: '/images/python_intro_games/mascot_g2_girl.png',
    bgGradient: 'from-pink-500 to-rose-600',
    challenges: [
      {
        id: 'g2-q1',
        gameId: 2,
        challengeNum: 1,
        title: 'Complete the Print Statement',
        task: 'Choose the correct option to complete the code: print( [____] )',
        expectedOutput: 'Hello',
        starterCode: 'print("Hello")',
        hint: 'Strings must be wrapped in quotation marks.',
        solution: 'print("Hello")',
        explanation: '"Hello" is a valid string literal with matching quotation marks.',
        xp: 10,
        blankSnippet: 'print( [____] )',
        blankAnswer: '"Hello"',
        choiceOptions: [
          { key: 'A', label: '"Hello"', isCorrect: true },
          { key: 'B', label: 'Hello', isCorrect: false },
          { key: 'C', label: 'print', isCorrect: false },
          { key: 'D', label: 'input', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Hello') return { passed: true, message: 'Correct! "Hello" completes the print.' };
          return { passed: false, message: 'Expected output: Hello' };
        },
      },
      {
        id: 'g2-q2',
        gameId: 2,
        challengeNum: 2,
        title: 'Type Inspection Function',
        task: 'Choose the function to inspect the type of 42: print( [____](42) )',
        expectedOutput: "<class 'int'>",
        starterCode: 'print(type(42))',
        hint: 'The built-in function to check data type is type().',
        solution: 'print(type(42))',
        explanation: 'type() returns the class and type of any value in Python.',
        xp: 10,
        blankSnippet: 'print( [____](42) )',
        blankAnswer: 'type',
        choiceOptions: [
          { key: 'A', label: 'type', isCorrect: true },
          { key: 'B', label: 'int', isCorrect: false },
          { key: 'C', label: 'str', isCorrect: false },
          { key: 'D', label: 'class', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === "<class 'int'>") return { passed: true, message: 'Correct! type(42) = <class int>.' };
          return { passed: false, message: 'Expected: <class int>' };
        },
      },
      {
        id: 'g2-q3',
        gameId: 2,
        challengeNum: 3,
        title: 'Integer Conversion Blank',
        task: 'Convert "50" into an integer: num = [____]("50")',
        expectedOutput: '100',
        starterCode: 'num = int("50")\\nprint(num + 50)',
        hint: 'Use the int() function to convert string to integer.',
        solution: 'num = int("50")\\nprint(num + 50)',
        explanation: 'int() converts numeric strings into integers for calculation.',
        xp: 10,
        blankSnippet: 'num = [____]("50")',
        blankAnswer: 'int',
        choiceOptions: [
          { key: 'A', label: 'int', isCorrect: true },
          { key: 'B', label: 'str', isCorrect: false },
          { key: 'C', label: 'float', isCorrect: false },
          { key: 'D', label: 'number', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === '100') return { passed: true, message: 'Correct! int("50") + 50 = 100.' };
          return { passed: false, message: 'Expected output: 100' };
        },
      },
      {
        id: 'g2-q4',
        gameId: 2,
        challengeNum: 4,
        title: 'String Length Function',
        task: 'Find the length of string "Python": print( [____]("Python") )',
        expectedOutput: '6',
        starterCode: 'print(len("Python"))',
        hint: 'The length function is len().',
        solution: 'print(len("Python"))',
        explanation: 'len() returns the total number of characters in a string.',
        xp: 10,
        blankSnippet: 'print( [____]("Python") )',
        blankAnswer: 'len',
        choiceOptions: [
          { key: 'A', label: 'len', isCorrect: true },
          { key: 'B', label: 'length', isCorrect: false },
          { key: 'C', label: 'count', isCorrect: false },
          { key: 'D', label: 'size', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === '6') return { passed: true, message: 'Correct! len("Python") = 6.' };
          return { passed: false, message: 'Expected output: 6' };
        },
      },
      {
        id: 'g2-q5',
        gameId: 2,
        challengeNum: 5,
        title: 'Boolean Value Assignment',
        task: 'Set is_setup_ready to boolean affirmative: is_setup_ready = [____]',
        expectedOutput: 'True',
        starterCode: 'is_setup_ready = True\\nprint(is_setup_ready)',
        hint: 'In Python, booleans start with a capital letter: True.',
        solution: 'is_setup_ready = True\\nprint(is_setup_ready)',
        explanation: 'Python boolean values are True and False (capitalized).',
        xp: 10,
        blankSnippet: 'is_setup_ready = [____]',
        blankAnswer: 'True',
        choiceOptions: [
          { key: 'A', label: 'True', isCorrect: true },
          { key: 'B', label: 'true', isCorrect: false },
          { key: 'C', label: '"True"', isCorrect: false },
          { key: 'D', label: 'TRUE', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'True') return { passed: true, message: 'Fill in the Blank Mastered!' };
          return { passed: false, message: 'Expected output: True' };
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 3: MATCH THE CODE (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    gameType: 'match_code',
    title: 'Match the Code',
    shortTitle: 'Match the Code',
    subtitle: 'Match each code with its correct output.',
    badge: '3',
    description: 'Connect code snippets on the left to their resulting outputs on the right.',
    icon: '🔗',
    themeColor: '#10b981',
    activeColor: '#10b981',
    mascotImg: '/images/python_intro_games/mascot_g3_boy.png',
    bgGradient: 'from-emerald-500 to-teal-600',
    challenges: [
      {
        id: 'g3-q1',
        gameId: 3,
        challengeNum: 1,
        title: 'Basic Print Output Match',
        task: 'Match each code snippet on the left with its exact output on the right.',
        expectedOutput: 'Matched 4 pairs',
        starterCode: 'print("Python")',
        hint: 'print("Python") outputs Python, print("5 + 2") outputs 5 + 2 (string).',
        solution: 'print("Python")',
        explanation: 'String literals inside quotes print exactly as written.',
        xp: 10,
        matchPairs: [
          { left: 'print("Python")', right: 'Python' },
          { left: 'print("5 + 2")', right: '5 + 2' },
          { left: 'print("Hello")\\nprint("World")', right: 'Hello\\nWorld' },
          { left: 'print("===")', right: '===' },
        ],
        validate: () => ({ passed: true, message: 'All pairs matched successfully!' }),
      },
      {
        id: 'g3-q2',
        gameId: 3,
        challengeNum: 2,
        title: 'Data Type Matching',
        task: 'Match each value with its Python type name.',
        expectedOutput: 'Matched 4 pairs',
        starterCode: 'type("Future")',
        hint: '"Future" is str, 2050 is int, 99.9 is float, True is bool.',
        solution: 'type("Future")',
        explanation: 'Python data types classify values into strings, ints, floats, and booleans.',
        xp: 10,
        matchPairs: [
          { left: '"Future IT"', right: 'str' },
          { left: '2050', right: 'int' },
          { left: '99.9', right: 'float' },
          { left: 'True', right: 'bool' },
        ],
        validate: () => ({ passed: true, message: 'All types matched!' }),
      },
      {
        id: 'g3-q3',
        gameId: 3,
        challengeNum: 3,
        title: 'Arithmetic Results Match',
        task: 'Match mathematical operations to their calculated values.',
        expectedOutput: 'Matched 4 pairs',
        starterCode: '10 + 5',
        hint: '10 + 5 = 15, 10 * 5 = 50, 10 - 5 = 5, 10 // 3 = 3.',
        solution: '10 + 5',
        explanation: 'Arithmetic operators calculate mathematical expressions.',
        xp: 10,
        matchPairs: [
          { left: '10 + 5', right: '15' },
          { left: '10 * 5', right: '50' },
          { left: '10 - 5', right: '5' },
          { left: '10 // 3', right: '3' },
        ],
        validate: () => ({ passed: true, message: 'Arithmetic matched!' }),
      },
      {
        id: 'g3-q4',
        gameId: 3,
        challengeNum: 4,
        title: 'String Methods Match',
        task: 'Match string transformation methods with their return value.',
        expectedOutput: 'Matched 4 pairs',
        starterCode: '"python".upper()',
        hint: '.upper() capitalizes all letters, .capitalize() capitalizes the first.',
        solution: '"python".upper()',
        explanation: 'String methods return transformed copies of strings.',
        xp: 10,
        matchPairs: [
          { left: '"python".upper()', right: 'PYTHON' },
          { left: '"python".capitalize()', right: 'Python' },
          { left: 'len("python")', right: '6' },
          { left: '"py" * 2', right: 'pypy' },
        ],
        validate: () => ({ passed: true, message: 'String methods matched!' }),
      },
      {
        id: 'g3-q5',
        gameId: 3,
        challengeNum: 5,
        title: 'Syntax Features Match',
        task: 'Match Python syntax tokens to their definitions.',
        expectedOutput: 'Matched 4 pairs',
        starterCode: '# comment',
        hint: '# starts a comment, """ creates multi-line text.',
        solution: '# comment',
        explanation: 'Syntax rules define valid Python programs.',
        xp: 10,
        matchPairs: [
          { left: '# comment', right: 'Single-line comment' },
          { left: '""" doc """', right: 'Multi-line / Docstring' },
          { left: 'f"Hi {name}"', right: 'Formatted string' },
          { left: 'bool(1)', right: 'True' },
        ],
        validate: () => ({ passed: true, message: 'Match the Code Mastered!' }),
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 4: QUANTUM OUTPUT PREDICTOR (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 4,
    gameType: 'output_predictor',
    title: 'Think: Quantum Output Predictor',
    shortTitle: 'Output Predictor',
    subtitle: 'What will be the output of this code?',
    badge: '4',
    description: 'Predict the exact console output of tricky Python code snippets.',
    icon: '🔮',
    themeColor: '#f59e0b',
    activeColor: '#f59e0b',
    mascotImg: '/images/python_intro_games/mascot_g4_robot.png',
    bgGradient: 'from-amber-500 to-orange-600',
    challenges: [
      {
        id: 'g4-q1',
        gameId: 4,
        challengeNum: 1,
        title: 'Two Print Statements',
        task: 'What will be the output of this code?\\nprint("Welcome")\\nprint("to Python")',
        expectedOutput: 'Welcome\\nto Python',
        starterCode: 'print("Welcome")\\nprint("to Python")',
        hint: 'Two print statements will print on two separate lines.',
        solution: 'print("Welcome")\\nprint("to Python")',
        explanation: 'Each print() statement ends with a newline by default.',
        xp: 10,
        choiceOptions: [
          { key: 'A', label: 'Welcome to Python', isCorrect: false },
          { key: 'B', label: 'Welcome\\nto Python', isCorrect: true },
          { key: 'C', label: 'Welcome, to Python', isCorrect: false },
          { key: 'D', label: 'Error', isCorrect: false },
        ],
        validate: (output) => {
          const clean = output.trim();
          if (clean === 'Welcome\\nto Python' || clean === 'Welcome to Python') return { passed: true, message: 'Prediction Confirmed!' };
          return { passed: false, message: 'Prediction incorrect' };
        },
      },
      {
        id: 'g4-q2',
        gameId: 4,
        challengeNum: 2,
        title: 'String Multiplier Predictor',
        task: 'What will be the output of: print("Py!" * 3)',
        expectedOutput: 'Py!Py!Py!',
        starterCode: 'print("Py!" * 3)',
        hint: 'Multiplying a string repeats it that many times.',
        solution: 'print("Py!" * 3)',
        explanation: 'The * operator repeats strings in Python when multiplied by an int.',
        xp: 10,
        choiceOptions: [
          { key: 'A', label: 'Py!Py!Py!', isCorrect: true },
          { key: 'B', label: 'Py! * 3', isCorrect: false },
          { key: 'C', label: 'Py!3', isCorrect: false },
          { key: 'D', label: 'Error', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Py!Py!Py!') return { passed: true, message: 'Correct prediction!' };
          return { passed: false, message: 'Expected: Py!Py!Py!' };
        },
      },
      {
        id: 'g4-q3',
        gameId: 4,
        challengeNum: 3,
        title: 'String Concatenation Predictor',
        task: 'What will be the output of: print("10" + "20")',
        expectedOutput: '1020',
        starterCode: 'print("10" + "20")',
        hint: 'Both are strings in quotes, so + glues them together.',
        solution: 'print("10" + "20")',
        explanation: 'Strings concatenate end-to-end: "10" + "20" = "1020".',
        xp: 10,
        choiceOptions: [
          { key: 'A', label: '1020', isCorrect: true },
          { key: 'B', label: '30', isCorrect: false },
          { key: 'C', label: '"1020"', isCorrect: false },
          { key: 'D', label: 'Error', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === '1020') return { passed: true, message: 'Correct prediction!' };
          return { passed: false, message: 'Expected: 1020' };
        },
      },
      {
        id: 'g4-q4',
        gameId: 4,
        challengeNum: 4,
        title: 'Order of Operations',
        task: 'What will be the output of: print(2 + 3 * 4)',
        expectedOutput: '14',
        starterCode: 'print(2 + 3 * 4)',
        hint: 'Multiplication (3 * 4 = 12) runs before addition (2 + 12 = 14).',
        solution: 'print(2 + 3 * 4)',
        explanation: 'Python follows standard PEMDAS order of operations.',
        xp: 10,
        choiceOptions: [
          { key: 'A', label: '14', isCorrect: true },
          { key: 'B', label: '20', isCorrect: false },
          { key: 'C', label: '24', isCorrect: false },
          { key: 'D', label: 'Error', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === '14') return { passed: true, message: 'Correct prediction!' };
          return { passed: false, message: 'Expected: 14' };
        },
      },
      {
        id: 'g4-q5',
        gameId: 4,
        challengeNum: 5,
        title: 'Compound Boolean Predictor',
        task: 'What will be the output of: print(10 > 5 and 3 < 1)',
        expectedOutput: 'False',
        starterCode: 'print(10 > 5 and 3 < 1)',
        hint: '10 > 5 is True, but 3 < 1 is False. True and False = False.',
        solution: 'print(10 > 5 and 3 < 1)',
        explanation: 'and requires BOTH sides to be True to result in True.',
        xp: 10,
        choiceOptions: [
          { key: 'A', label: 'False', isCorrect: true },
          { key: 'B', label: 'True', isCorrect: false },
          { key: 'C', label: 'None', isCorrect: false },
          { key: 'D', label: 'Error', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'False') return { passed: true, message: 'Quantum Predictor Mastered!' };
          return { passed: false, message: 'Expected: False' };
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 5: CYBER BUG HUNTER (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    gameType: 'bug_hunter',
    title: 'Debug: Cyber Bug Hunter',
    shortTitle: 'Cyber Bug Hunter',
    subtitle: 'Find and fix the error in the code.',
    badge: '5',
    description: 'Diagnose and fix syntax bugs, broken quotes, and case errors.',
    icon: '🐞',
    themeColor: '#ef4444',
    activeColor: '#ef4444',
    mascotImg: '/images/python_intro_games/mascot_g5_bug_boy.png',
    bgGradient: 'from-rose-500 to-red-600',
    challenges: [
      {
        id: 'g5-q1',
        gameId: 5,
        challengeNum: 1,
        title: 'Missing Closing Parenthesis',
        task: 'Find and fix the error in the code: print("Hello Python!" ❌',
        expectedOutput: 'Hello Python!',
        starterCode: 'print("Hello Python!")',
        hint: 'The print statement forgot the closing parenthesis ).',
        solution: 'print("Hello Python!")',
        explanation: 'Every opening bracket or parenthesis must have a closing pair.',
        xp: 10,
        bugCode: 'print("Hello Python!" ❌',
        choiceOptions: [
          { key: 'A', label: 'print("Hello Python!")', isCorrect: true },
          { key: 'B', label: 'print("Hello Python!") )', isCorrect: false },
          { key: 'C', label: 'print(Hello Python!)', isCorrect: false },
          { key: 'D', label: 'Print("Hello Python!")', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Hello Python!') return { passed: true, message: 'Bug Squashed!' };
          return { passed: false, message: 'Expected: Hello Python!' };
        },
      },
      {
        id: 'g5-q2',
        gameId: 5,
        challengeNum: 2,
        title: 'Mismatched String Quotes',
        task: 'Find and fix the quote mismatch error in: message = "Hello Python World\' ❌',
        expectedOutput: 'Hello Python World',
        starterCode: 'message = "Hello Python World"\\nprint(message)',
        hint: 'A string starting with double quote " must also end with double quote ".',
        solution: 'message = "Hello Python World"\\nprint(message)',
        explanation: 'Quotes must be symmetrical in Python.',
        xp: 10,
        bugCode: 'message = "Hello Python World\' ❌',
        choiceOptions: [
          { key: 'A', label: 'message = "Hello Python World"', isCorrect: true },
          { key: 'B', label: 'message = Hello Python World', isCorrect: false },
          { key: 'C', label: "message = 'Hello Python World\\"", isCorrect: false },
          { key: 'D', label: 'message == "Hello Python World"', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Hello Python World') return { passed: true, message: 'Bug Squashed!' };
          return { passed: false, message: 'Expected: Hello Python World' };
        },
      },
      {
        id: 'g5-q3',
        gameId: 5,
        challengeNum: 3,
        title: 'Capitalized Function Name',
        task: 'Python is strictly case-sensitive! Fix: Print("Case matters in Python") ❌',
        expectedOutput: 'Case matters in Python',
        starterCode: 'print("Case matters in Python")',
        hint: 'Python built-in functions are all lowercase: change Print to print.',
        solution: 'print("Case matters in Python")',
        explanation: 'Built-in functions like print() must be lowercase.',
        xp: 10,
        bugCode: 'Print("Case matters in Python") ❌',
        choiceOptions: [
          { key: 'A', label: 'print("Case matters in Python")', isCorrect: true },
          { key: 'B', label: 'PRINT("Case matters in Python")', isCorrect: false },
          { key: 'C', label: 'Print("Case matters in Python");', isCorrect: false },
          { key: 'D', label: 'print[ "Case matters in Python" ]', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Case matters in Python') return { passed: true, message: 'Bug Squashed!' };
          return { passed: false, message: 'Expected: Case matters in Python' };
        },
      },
      {
        id: 'g5-q4',
        gameId: 5,
        challengeNum: 4,
        title: 'Unquoted String Literal',
        task: 'Fix the NameError: print(Hello) ❌',
        expectedOutput: 'Hello',
        starterCode: 'print("Hello")',
        hint: 'Strings must be wrapped in quotation marks.',
        solution: 'print("Hello")',
        explanation: 'Raw words without quotes are treated by Python as variable names.',
        xp: 10,
        bugCode: 'print(Hello) ❌',
        choiceOptions: [
          { key: 'A', label: 'print("Hello")', isCorrect: true },
          { key: 'B', label: 'print(Hello)', isCorrect: false },
          { key: 'C', label: "print('Hello)", isCorrect: false },
          { key: 'D', label: 'print(var: Hello)', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Hello') return { passed: true, message: 'Bug Squashed!' };
          return { passed: false, message: 'Expected: Hello' };
        },
      },
      {
        id: 'g5-q5',
        gameId: 5,
        challengeNum: 5,
        title: 'Reserved Keyword as Variable',
        task: 'Keywords cannot be variable names! Fix: class = "Python 101" ❌',
        expectedOutput: 'Python 101',
        starterCode: 'course_name = "Python 101"\\nprint(course_name)',
        hint: 'Rename variable "class" to "course_name".',
        solution: 'course_name = "Python 101"\\nprint(course_name)',
        explanation: 'Reserved keywords (class, def, for) cannot be variable names.',
        xp: 10,
        bugCode: 'class = "Python 101" ❌',
        choiceOptions: [
          { key: 'A', label: 'course_name = "Python 101"', isCorrect: true },
          { key: 'B', label: 'class = "Python 101"', isCorrect: false },
          { key: 'C', label: 'Class = "Python 101"', isCorrect: false },
          { key: 'D', label: 'def = "Python 101"', isCorrect: false },
        ],
        validate: (output) => {
          if (output.trim() === 'Python 101') return { passed: true, message: 'Bug Hunter Mastered!' };
          return { passed: false, message: 'Expected: Python 101' };
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 6: COMPONENT BLUEPRINT BUILDER (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 6,
    gameType: 'blueprint_builder',
    title: 'Build: Component Blueprint Machine',
    shortTitle: 'Blueprint Machine',
    subtitle: 'Drag the components to build the code.',
    badge: '6',
    description: 'Assemble modular Python code components according to the target blueprint.',
    icon: '📐',
    themeColor: '#8b5cf6',
    activeColor: '#8b5cf6',
    mascotImg: '/images/python_intro_games/mascot_g6_puzzle_girl.png',
    bgGradient: 'from-purple-500 to-indigo-600',
    challenges: [
      {
        id: 'g6-q1',
        gameId: 6,
        challengeNum: 1,
        title: 'Brand Banner Blueprint',
        task: 'Drag the components to build the code to print "FUTURE IT INDUSTRY".',
        expectedOutput: 'FUTURE IT INDUSTRY',
        starterCode: 'print("FUTURE IT INDUSTRY")',
        hint: 'Slot 1: print(, Slot 2: "FUTURE IT INDUSTRY", Slot 3: )',
        solution: 'print("FUTURE IT INDUSTRY")',
        explanation: 'Valid Python function call composed of identifier, argument, and closing paren.',
        xp: 10,
        blueprintComponents: ['print(', '"FUTURE IT INDUSTRY"', ')', '"\\\\n"'],
        blueprintExpectedSlots: ['print(', '"FUTURE IT INDUSTRY"', ')'],
        blueprintSlotsCount: 3,
        validate: (output) => {
          if (output.trim() === 'FUTURE IT INDUSTRY') return { passed: true, message: 'Blueprint Built!' };
          return { passed: false, message: 'Expected: FUTURE IT INDUSTRY' };
        },
      },
      {
        id: 'g6-q2',
        gameId: 6,
        challengeNum: 2,
        title: 'Greeting Function Blueprint',
        task: 'Build the function definition and execution for greet("Aman").',
        expectedOutput: 'Hello, Aman!',
        starterCode: 'def greet(name):\\n    print(f"Hello, {name}!")\\ngreet("Aman")',
        hint: 'Define greet(name), print greeting, and invoke greet("Aman").',
        solution: 'def greet(name):\\n    print(f"Hello, {name}!")\\ngreet("Aman")',
        explanation: 'Functions accept parameters and are called using function_name(arg).',
        xp: 10,
        blueprintComponents: ['def greet(name):', 'print(f"Hello, {name}!")', 'greet("Aman")', 'return True'],
        blueprintExpectedSlots: ['def greet(name):', 'print(f"Hello, {name}!")', 'greet("Aman")'],
        blueprintSlotsCount: 3,
        validate: (output) => {
          if (output.trim() === 'Hello, Aman!') return { passed: true, message: 'Blueprint Built!' };
          return { passed: false, message: 'Expected: Hello, Aman!' };
        },
      },
      {
        id: 'g6-q3',
        gameId: 6,
        challengeNum: 3,
        title: 'Multiplier Return Blueprint',
        task: 'Construct the double_val function with a return statement.',
        expectedOutput: '50',
        starterCode: 'def double_val(n):\\n    return n * 2\\nprint(double_val(25))',
        hint: 'def double_val(n): -> return n * 2 -> print(double_val(25)).',
        solution: 'def double_val(n):\\n    return n * 2\\nprint(double_val(25))',
        explanation: 'The return statement passes values back to the function caller.',
        xp: 10,
        blueprintComponents: ['def double_val(n):', 'return n * 2', 'print(double_val(25))', 'pass'],
        blueprintExpectedSlots: ['def double_val(n):', 'return n * 2', 'print(double_val(25))'],
        blueprintSlotsCount: 3,
        validate: (output) => {
          if (output.trim() === '50') return { passed: true, message: 'Blueprint Built!' };
          return { passed: false, message: 'Expected: 50' };
        },
      },
      {
        id: 'g6-q4',
        gameId: 6,
        challengeNum: 4,
        title: 'Status Badge Blueprint',
        task: 'Construct badge formatter function for [Python] Active.',
        expectedOutput: '[Python] Active',
        starterCode: 'def format_badge(m, s):\\n    print(f"[{m}] {s}")\\nformat_badge("Python", "Active")',
        hint: 'Assemble function definition, body, and call.',
        solution: 'def format_badge(m, s):\\n    print(f"[{m}] {s}")\\nformat_badge("Python", "Active")',
        explanation: 'Multiple parameters are separated by commas.',
        xp: 10,
        blueprintComponents: ['def format_badge(m, s):', 'print(f"[{m}] {s}")', 'format_badge("Python", "Active")', 'exit()'],
        blueprintExpectedSlots: ['def format_badge(m, s):', 'print(f"[{m}] {s}")', 'format_badge("Python", "Active")'],
        blueprintSlotsCount: 3,
        validate: (output) => {
          if (output.trim() === '[Python] Active') return { passed: true, message: 'Blueprint Built!' };
          return { passed: false, message: 'Expected: [Python] Active' };
        },
      },
      {
        id: 'g6-q5',
        gameId: 6,
        challengeNum: 5,
        title: 'Setup Checklist Blueprint',
        task: 'Assemble the setup verification suite outputting 2 status items.',
        expectedOutput: '1. Python Core: OK\\n2. VS Code: OK',
        starterCode: 'def init_suite():\\n    print("1. Python Core: OK")\\n    print("2. VS Code: OK")\\ninit_suite()',
        hint: 'Place def init_suite(): then prints, then call.',
        solution: 'def init_suite():\\n    print("1. Python Core: OK")\\n    print("2. VS Code: OK")\\ninit_suite()',
        explanation: 'Functions structure multi-step initialization routines.',
        xp: 10,
        blueprintComponents: ['def init_suite():', 'print("1. Python Core: OK")', 'print("2. VS Code: OK")', 'init_suite()'],
        blueprintExpectedSlots: ['def init_suite():', 'print("1. Python Core: OK")', 'print("2. VS Code: OK")', 'init_suite()'],
        blueprintSlotsCount: 4,
        validate: (output) => {
          if (output.includes('Python Core: OK')) return { passed: true, message: 'Blueprint Machine Mastered!' };
          return { passed: false, message: 'Blueprint failed' };
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 7: LOGIC BUILDER (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    gameType: 'logic_builder',
    title: 'Logic Builder',
    shortTitle: 'Logic Builder',
    subtitle: 'Look at the output and arrange the code in the correct order.',
    badge: '7',
    description: 'Arrange code lines in the proper order to match the target terminal output.',
    icon: '⚡',
    themeColor: '#06b6d4',
    activeColor: '#06b6d4',
    mascotImg: '/images/python_intro_games/mascot_g7_logic_boy.png',
    bgGradient: 'from-cyan-500 to-sky-600',
    challenges: [
      {
        id: 'g7-q1',
        gameId: 7,
        challengeNum: 1,
        title: 'Welcome Cascade Logic',
        task: 'Look at the output and arrange the code in the correct order to produce:\\nWelcome\\nto\\nPython',
        expectedOutput: 'Welcome\\nto\\nPython',
        starterCode: 'print("Welcome")\\nprint("to")\\nprint("Python")',
        hint: 'First print("Welcome"), then print("to"), then print("Python").',
        solution: 'print("Welcome")\\nprint("to")\\nprint("Python")',
        explanation: 'Python executes code sequentially line-by-line from top to bottom.',
        xp: 10,
        logicLines: [
          { id: 'l1', text: 'print("Welcome")', correctIndex: 0 },
          { id: 'l2', text: 'print("to")', correctIndex: 1 },
          { id: 'l3', text: 'print("Python")', correctIndex: 2 },
        ],
        validate: (output) => {
          const lines = output.trim().split(/\\r?\\n/).map((l) => l.trim());
          if (lines[0] === 'Welcome' && lines[1] === 'to' && lines[2] === 'Python') {
            return { passed: true, message: 'Logic Arranged Correctly!' };
          }
          return { passed: false, message: 'Order mismatch' };
        },
      },
      {
        id: 'g7-q2',
        gameId: 7,
        challengeNum: 2,
        title: 'Conditional Gate Logic',
        task: 'Arrange lines to initialize variable, check if true, and print "Ready to Build".',
        expectedOutput: 'Ready to Build',
        starterCode: 'is_installed = True\\nif is_installed:\\n    print("Ready to Build")',
        hint: '1. is_installed = True -> 2. if is_installed: -> 3. print("Ready to Build").',
        solution: 'is_installed = True\\nif is_installed:\\n    print("Ready to Build")',
        explanation: 'Variables must be defined before being tested in conditional gates.',
        xp: 10,
        logicLines: [
          { id: 'l1', text: 'is_installed = True', correctIndex: 0 },
          { id: 'l2', text: 'if is_installed:', correctIndex: 1 },
          { id: 'l3', text: '    print("Ready to Build")', correctIndex: 2 },
        ],
        validate: (output) => {
          if (output.trim() === 'Ready to Build') return { passed: true, message: 'Logic Arranged Correctly!' };
          return { passed: false, message: 'Expected: Ready to Build' };
        },
      },
      {
        id: 'g7-q3',
        gameId: 7,
        challengeNum: 3,
        title: 'Grade Threshold Branching',
        task: 'Arrange code to test marks = 85 and output "Grade B".',
        expectedOutput: 'Grade B',
        starterCode: 'marks = 85\\nif marks >= 80:\\n    print("Grade B")',
        hint: '1. marks = 85 -> 2. if marks >= 80: -> 3. print("Grade B").',
        solution: 'marks = 85\\nif marks >= 80:\\n    print("Grade B")',
        explanation: 'Conditions evaluate numerical comparisons.',
        xp: 10,
        logicLines: [
          { id: 'l1', text: 'marks = 85', correctIndex: 0 },
          { id: 'l2', text: 'if marks >= 80:', correctIndex: 1 },
          { id: 'l3', text: '    print("Grade B")', correctIndex: 2 },
        ],
        validate: (output) => {
          if (output.trim() === 'Grade B') return { passed: true, message: 'Logic Arranged Correctly!' };
          return { passed: false, message: 'Expected: Grade B' };
        },
      },
      {
        id: 'g7-q4',
        gameId: 7,
        challengeNum: 4,
        title: 'Environment Verification Logic',
        task: 'Arrange logic to test has_python and print "IDE Workspace Configured".',
        expectedOutput: 'IDE Workspace Configured',
        starterCode: 'has_python = True\\nif has_python:\\n    print("IDE Workspace Configured")',
        hint: '1. has_python = True -> 2. if has_python: -> 3. print.',
        solution: 'has_python = True\\nif has_python:\\n    print("IDE Workspace Configured")',
        explanation: 'Booleans control execution flow.',
        xp: 10,
        logicLines: [
          { id: 'l1', text: 'has_python = True', correctIndex: 0 },
          { id: 'l2', text: 'if has_python:', correctIndex: 1 },
          { id: 'l3', text: '    print("IDE Workspace Configured")', correctIndex: 2 },
        ],
        validate: (output) => {
          if (output.trim() === 'IDE Workspace Configured') return { passed: true, message: 'Logic Arranged Correctly!' };
          return { passed: false, message: 'Expected: IDE Workspace Configured' };
        },
      },
      {
        id: 'g7-q5',
        gameId: 7,
        challengeNum: 5,
        title: 'Sequential Loop Logic',
        task: 'Arrange code to iterate through range(1, 4) and print numbers 1, 2, 3.',
        expectedOutput: '1\\n2\\n3',
        starterCode: 'for i in range(1, 4):\\n    print(i)',
        hint: '1. for i in range(1, 4): -> 2. print(i).',
        solution: 'for i in range(1, 4):\\n    print(i)',
        explanation: 'for loops repeat execution for each item in a sequence.',
        xp: 10,
        logicLines: [
          { id: 'l1', text: 'for i in range(1, 4):', correctIndex: 0 },
          { id: 'l2', text: '    print(i)', correctIndex: 1 },
          { id: 'l3', text: '# End of loop', correctIndex: 2 },
        ],
        validate: (output) => {
          if (output.includes('1') && output.includes('2') && output.includes('3')) return { passed: true, message: 'Logic Builder Mastered!' };
          return { passed: false, message: 'Expected 1, 2, 3' };
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GAME 8: CYBER SENTINEL BOSS FIGHT (5 Questions)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 8,
    gameType: 'boss_fight',
    title: 'BOSS FIGHT: The Cyber Sentinel',
    shortTitle: 'Cyber Sentinel',
    subtitle: 'Complete the code to defeat the boss!',
    badge: '8',
    description: 'Complete the mission code to unleash combat strikes and defeat the Cyber Sentinel!',
    icon: '⚔️',
    themeColor: '#f97316',
    activeColor: '#f97316',
    mascotImg: '/images/python_intro_games/mascot_g8_sentinel_boss.png',
    bgGradient: 'from-orange-500 to-red-600',
    challenges: [
      {
        id: 'g8-q1',
        gameId: 8,
        challengeNum: 1,
        title: 'Final Mission Victory Quote',
        task: 'Complete line 3 with the correct strike code to blast the boss!',
        expectedOutput: 'You are a Python Hero!',
        starterCode: 'print("=== FINAL MISSION ===")\\nprint("Defeat the Cyber Sentinel!")\\nprint("You are a Python Hero!")\\nprint("Good Luck!")',
        hint: 'Wrap "You are a Python Hero!" in exact double quotation marks.',
        solution: 'print("You are a Python Hero!")',
        explanation: 'String literals require matching quotation marks.',
        xp: 10,
        bossHpDamage: 20,
        bossStrikeName: 'Plasma EMP Burst',
        choiceOptions: [
          { key: 'A', label: '"You are a Python Hero!"', isCorrect: true },
          { key: 'B', label: 'You are a Python Hero!', isCorrect: false },
          { key: 'C', label: '"You are a Python Hero!', isCorrect: false },
          { key: 'D', label: '"You are a Python Hero!""', isCorrect: false },
        ],
        validate: () => ({ passed: true, message: 'CRITICAL HIT! -20 Boss HP!' }),
      },
      {
        id: 'g8-q2',
        gameId: 8,
        challengeNum: 2,
        title: 'Triple Laser Barrage Strike',
        task: 'Select the loop command to fire 3 laser pulses at the Cyber Sentinel.',
        expectedOutput: 'Laser Strike Delivered',
        starterCode: 'for pulse in range(1, 4): print(f"LASER PULSE {pulse}")',
        hint: 'range(1, 4) produces 1, 2, 3.',
        solution: 'for pulse in range(1, 4): print(f"LASER PULSE {pulse}")',
        explanation: 'Loops automate repeated attack patterns in code.',
        xp: 10,
        bossHpDamage: 20,
        bossStrikeName: 'Triple Laser Barrage',
        choiceOptions: [
          { key: 'A', label: 'for pulse in range(1, 4): print(f"LASER PULSE {pulse}")', isCorrect: true },
          { key: 'B', label: 'for pulse in range(3): print(pulse)', isCorrect: false },
          { key: 'C', label: 'print("LASER PULSE 1 to 3")', isCorrect: false },
          { key: 'D', label: 'laser_pulse = 3', isCorrect: false },
        ],
        validate: () => ({ passed: true, message: 'DIRECT HIT! -20 Boss HP!' }),
      },
      {
        id: 'g8-q3',
        gameId: 8,
        challengeNum: 3,
        title: 'Overdrive Power Surge Strike',
        task: 'Calculate the overload energy surge (25 * 4 = 100%).',
        expectedOutput: 'Energy Surge Delivered',
        starterCode: 'energy = 25 * 4\\nprint(f"ENERGY SURGE: {energy}%")',
        hint: 'energy = 25 * 4 computes 100.',
        solution: 'energy = 25 * 4\\nprint(f"ENERGY SURGE: {energy}%")',
        explanation: 'Math operations calculate power surges dynamically.',
        xp: 10,
        bossHpDamage: 20,
        bossStrikeName: 'Overdrive Power Surge',
        choiceOptions: [
          { key: 'A', label: 'energy = 25 * 4; print(f"ENERGY SURGE: {energy}%")', isCorrect: true },
          { key: 'B', label: 'energy = 25 + 4; print("ENERGY SURGE: 100%")', isCorrect: false },
          { key: 'C', label: 'energy = 100', isCorrect: false },
          { key: 'D', label: 'print("ENERGY SURGE")', isCorrect: false },
        ],
        validate: () => ({ passed: true, message: 'MASSIVE IMPACT! -20 Boss HP!' }),
      },
      {
        id: 'g8-q4',
        gameId: 8,
        challengeNum: 4,
        title: 'Memory Purge Strike',
        task: 'Define and execute function purge_glitch() to strip boss firewalls.',
        expectedOutput: 'Corruption Purged',
        starterCode: 'def purge_glitch():\\n    print("GLITCH CORRUPTION PURGED")\\npurge_glitch()',
        hint: 'Define purge_glitch(): then call it.',
        solution: 'def purge_glitch(): print("GLITCH CORRUPTION PURGED"); purge_glitch()',
        explanation: 'Custom functions execute targeted security purges.',
        xp: 10,
        bossHpDamage: 20,
        bossStrikeName: 'Glitch Memory Purge',
        choiceOptions: [
          { key: 'A', label: 'def purge_glitch(): print("GLITCH CORRUPTION PURGED"); purge_glitch()', isCorrect: true },
          { key: 'B', label: 'purge_glitch = print("GLITCH")', isCorrect: false },
          { key: 'C', label: 'function purge_glitch()', isCorrect: false },
          { key: 'D', label: 'purge_glitch()', isCorrect: false },
        ],
        validate: () => ({ passed: true, message: 'DEVASTATING STRIKE! -20 Boss HP!' }),
      },
      {
        id: 'g8-q5',
        gameId: 8,
        challengeNum: 5,
        title: 'Core Reboot Final Strike',
        task: 'Deliver the finishing command to reboot the AI core!',
        expectedOutput: 'AI Core Restored',
        starterCode: 'print("CYBER SENTINEL DEFEATED: AI CORE 100% RESTORED!")',
        hint: 'Execute the final print command.',
        solution: 'print("CYBER SENTINEL DEFEATED: AI CORE 100% RESTORED!")',
        explanation: 'Congratulations! You have completed all 8 games in Python Introduction & Setup!',
        xp: 20,
        bossHpDamage: 20,
        bossStrikeName: 'Core Reboot Master Override',
        choiceOptions: [
          { key: 'A', label: 'print("CYBER SENTINEL DEFEATED: AI CORE 100% RESTORED!")', isCorrect: true },
          { key: 'B', label: 'print(CYBER SENTINEL DEFEATED)', isCorrect: false },
          { key: 'C', label: 'Print("CYBER SENTINEL DEFEATED")', isCorrect: false },
          { key: 'D', label: 'print("DEFEATED"', isCorrect: false },
        ],
        validate: () => ({ passed: true, message: 'VICTORY! CYBER SENTINEL DEFEATED!' }),
      },
    ],
  },
];
`;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated pythonIntroGamesData.ts with clean 8-game dataset!');
