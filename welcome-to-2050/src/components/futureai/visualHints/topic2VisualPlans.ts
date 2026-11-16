/**
 * FUTURE IT INDUSTRY — AI-POWERED VISUAL HINTS ENGINE (PHASE 2)
 * Course: Python
 * Topic 2: Python If-Else (10 Challenges)
 *
 * Visual hint animation plans for all 10 challenges of Topic 2.
 * Tailored accurately to each question's conditional logic, branching,
 * condition evaluations, and terminal output.
 */

import { VisualHintAnimationPlan } from './visualHintsEngineService';

export const TOPIC_2_VISUAL_PLANS: VisualHintAnimationPlan[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 1 (ID: 201 / 1): Positive or Negative
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q201_positive_negative',
    questionIds: [201, 1],
    topicId: 2,
    questionTitle: 'Check whether a number is positive or negative.',
    conceptTag: 'Conditional Branching (if-elif-else)',
    archetype: 'dual_call_stack',
    summaryExplanation:
      'In Python, if-elif-else evaluates conditions sequentially. If num > 0 is True, the first branch executes and all remaining branches are skipped.',
    thinkingPrompt:
      'How do you check whether a number is strictly greater than 0, strictly less than 0, or zero?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Initialize Variable',
        sublabel: 'num = 10',
        tone: 'blue',
        codePattern: 'num = 10',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Evaluate Condition',
        sublabel: 'num > 0 ──► True',
        tone: 'cyan',
        codePattern: 'if num > 0:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Execute True Branch',
        sublabel: 'print("Positive")',
        tone: 'purple',
        codePattern: 'print("Positive")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Positive',
        tone: 'emerald',
        codePattern: 'Positive',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Initialize Number Variable',
        narration:
          'First, we define our variable num and assign it the test value 10.',
        conceptTip: 'Variables in Python hold values in memory ready to be checked in expressions.',
        activeNodeIndex: 0,
        patternPreview: 'num = 10',
        terminalLines: [],
        focusToken: 'num = 10',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Evaluate First Condition (num > 0)',
        narration:
          'Python checks the if condition: 10 > 0. Because 10 is greater than 0, this evaluates to True!',
        conceptTip: 'When an if condition is True, Python immediately enters its indented block.',
        activeNodeIndex: 1,
        patternPreview: 'if 10 > 0:  # Evaluates to True',
        terminalLines: [],
        focusToken: 'num > 0',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute the Positive Branch',
        narration:
          'Since the condition was True, Python runs print("Positive"). The elif and else branches are completely skipped!',
        conceptTip: 'Python stops checking further elif/else branches once a condition is satisfied.',
        activeNodeIndex: 2,
        patternPreview: '    print("Positive")  ──► stdout',
        terminalLines: ['Positive'],
        animateTyping: true,
        focusToken: 'print("Positive")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'Execution completes! The terminal displays Positive cleanly matching the expected answer.',
        conceptTip: 'If num was negative (e.g. -5), the elif num < 0 branch would have run instead.',
        activeNodeIndex: 3,
        patternPreview: 'Positive',
        terminalLines: ['Positive'],
        animateTyping: false,
        focusToken: 'Positive',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'num = 10\nif num > 0:\n    print("Positive")\nelif num < 0:\n    print("Negative")\nelse:\n    print("Zero")',
      lineByLineBreakdown: [
        'num = 10 stores the integer 10.',
        'if num > 0: tests if the number is strictly positive.',
        'print("Positive") prints when the condition is True.',
        'elif num < 0: checks for negative numbers if the first condition was False.',
        'else: handles 0 if neither condition held.',
      ],
      keyTakeaway: 'In an if-elif-else chain, exactly one branch executes—the first one whose condition evaluates to True.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 2 (ID: 202 / 2): Even or Odd
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q202_even_odd',
    questionIds: [202, 2],
    topicId: 2,
    questionTitle: 'Check whether a number is even or odd.',
    conceptTag: 'Modulo Operator (%) & Parity Check',
    archetype: 'type_comparison',
    summaryExplanation:
      'The modulo operator % calculates the remainder of division. A number is even if num % 2 equals 0, otherwise it is odd.',
    thinkingPrompt:
      'What remainder does an even number leave when divided by 2? Use % to test it.',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Input Number',
        sublabel: 'num = 8',
        tone: 'blue',
        codePattern: 'num = 8',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Modulo Check',
        sublabel: '8 % 2 == 0 ──► True',
        tone: 'cyan',
        codePattern: 'if num % 2 == 0:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Even Branch',
        sublabel: 'print("Even")',
        tone: 'purple',
        codePattern: 'print("Even")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Console Output',
        sublabel: 'Even',
        tone: 'emerald',
        codePattern: 'Even',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Input Number Variable',
        narration:
          'We assign num = 8 to test parity.',
        conceptTip: 'Any integer can be classified as even or odd using division by 2.',
        activeNodeIndex: 0,
        patternPreview: 'num = 8',
        terminalLines: [],
        focusToken: 'num = 8',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Compute Remainder (8 % 2)',
        narration:
          '8 divided by 2 is 4 with remainder 0. So 8 % 2 produces 0, and 0 == 0 evaluates to True!',
        conceptTip: '% returns remainder: 8 % 2 is 0 (even), while 7 % 2 is 1 (odd).',
        activeNodeIndex: 1,
        patternPreview: '8 % 2 == 0  # 0 == 0 evaluates to True',
        terminalLines: [],
        focusToken: 'num % 2 == 0',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute Even Branch',
        narration:
          'Since the condition evaluated to True, Python executes print("Even") and skips the else block.',
        conceptTip: 'The else block only executes if the remainder was not zero.',
        activeNodeIndex: 2,
        patternPreview: '    print("Even")  ──► stdout',
        terminalLines: ['Even'],
        animateTyping: true,
        focusToken: 'print("Even")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console displays Even cleanly without errors.',
        conceptTip: 'Double equals == checks equality; single = is for variable assignment.',
        activeNodeIndex: 3,
        patternPreview: 'Even',
        terminalLines: ['Even'],
        animateTyping: false,
        focusToken: 'Even',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'num = 8\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
      lineByLineBreakdown: [
        'num = 8 assigns 8 to the variable num.',
        'num % 2 computes remainder when divided by 2 (0).',
        '== 0 checks if remainder is zero.',
        'print("Even") runs when remainder is 0.',
        'else: handles any odd numbers where remainder is non-zero.',
      ],
      keyTakeaway: 'The expression num % 2 == 0 is the universal programming pattern for detecting even numbers.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 3 (ID: 203 / 3): Greater of Two Numbers
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q203_greater_of_two',
    questionIds: [203, 3],
    topicId: 2,
    questionTitle: 'Find the greater of two numbers.',
    conceptTag: 'Relational Comparison (>) & f-strings',
    archetype: 'fstring_combiner',
    summaryExplanation:
      'Compare variables a and b with the greater-than operator (>). An f-string formatted like f"{a} is greater" dynamically prints the winning value.',
    thinkingPrompt:
      'How do you compare two variables a and b, and format the output with the larger number?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Variables in Memory',
        sublabel: 'a = 25, b = 14',
        tone: 'blue',
        codePattern: 'a = 25; b = 14',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Comparison Check',
        sublabel: '25 > 14 ──► True',
        tone: 'cyan',
        codePattern: 'if a > b:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'f-string Interpolation',
        sublabel: 'f"{a} is greater"',
        tone: 'purple',
        codePattern: 'print(f"{a} is greater")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: '25 is greater',
        tone: 'emerald',
        codePattern: '25 is greater',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Initialize Two Numbers',
        narration:
          'We store two values in memory: variable a equals 25, and variable b equals 14.',
        conceptTip: 'Both numbers can now be compared using relational operators like > or <.',
        activeNodeIndex: 0,
        patternPreview: 'a = 25\nb = 14',
        terminalLines: [],
        focusToken: 'a = 25, b = 14',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Compare Values (25 > 14)',
        narration:
          'Python tests if a > b: substituting values gives 25 > 14, which evaluates to True!',
        conceptTip: 'Relational operator > returns True when left operand exceeds right operand.',
        activeNodeIndex: 1,
        patternPreview: 'if 25 > 14:  # Evaluates to True',
        terminalLines: [],
        focusToken: 'a > b',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Format Output with f-string',
        narration:
          'In the print statement, the f-string replaces {a} with 25, forming "25 is greater".',
        conceptTip: 'Prefixing quotes with f allows embedding variables directly inside curly braces { }.',
        activeNodeIndex: 2,
        patternPreview: '    print(f"{a} is greater")  ──► "25 is greater"',
        terminalLines: ['25 is greater'],
        animateTyping: true,
        focusToken: 'f"{a} is greater"',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console prints: 25 is greater cleanly matching the challenge requirements.',
        conceptTip: 'If b was larger (e.g. 50), the else branch would have printed "50 is greater".',
        activeNodeIndex: 3,
        patternPreview: '25 is greater',
        terminalLines: ['25 is greater'],
        animateTyping: false,
        focusToken: '25 is greater',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'a = 25\nb = 14\nif a > b:\n    print(f"{a} is greater")\nelse:\n    print(f"{b} is greater")',
      lineByLineBreakdown: [
        'a = 25 and b = 14 initialize test values.',
        'if a > b: evaluates whether a is greater than b.',
        'print(f"{a} is greater") prints the formatted string with a value.',
        'else: executes if b is greater than or equal to a.',
      ],
      keyTakeaway: 'Using an f-string allows dynamic values to be smoothly injected into decision messages.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 4 (ID: 204 / 4): Voting Eligibility
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q204_voting_eligibility',
    questionIds: [204, 4],
    topicId: 2,
    questionTitle: 'Check whether a person is eligible to vote using an age threshold of 18.',
    conceptTag: 'Boundary Evaluation (age >= 18)',
    archetype: 'dual_call_stack',
    summaryExplanation:
      'Check if the age variable is greater than or equal to 18 using the >= operator to grant or deny voting eligibility.',
    thinkingPrompt:
      'What operator checks both greater than AND equal to 18?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Citizen Age',
        sublabel: 'age = 20',
        tone: 'blue',
        codePattern: 'age = 20',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Threshold Test',
        sublabel: '20 >= 18 ──► True',
        tone: 'cyan',
        codePattern: 'if age >= 18:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Eligible Branch',
        sublabel: 'print("Eligible to vote")',
        tone: 'purple',
        codePattern: 'print("Eligible to vote")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Eligible to vote',
        tone: 'emerald',
        codePattern: 'Eligible to vote',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Input Age Value',
        narration:
          'We store the person’s age in a variable: age = 20.',
        conceptTip: 'Numeric thresholds are common in real-world access control logic.',
        activeNodeIndex: 0,
        patternPreview: 'age = 20',
        terminalLines: [],
        focusToken: 'age = 20',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Check Threshold (20 >= 18)',
        narration:
          'Python checks age >= 18: since 20 is greater than or equal to 18, this evaluates to True!',
        conceptTip: '>= checks if the value is 18, 19, 20 or higher. At exactly 18 it is also True.',
        activeNodeIndex: 1,
        patternPreview: 'if 20 >= 18:  # Evaluates to True',
        terminalLines: [],
        focusToken: 'age >= 18',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute Eligible Branch',
        narration:
          'Since condition is True, Python runs print("Eligible to vote") and skips the else block.',
        conceptTip: 'Any age below 18 would instead trigger the else block: "Not eligible to vote".',
        activeNodeIndex: 2,
        patternPreview: '    print("Eligible to vote")  ──► stdout',
        terminalLines: ['Eligible to vote'],
        animateTyping: true,
        focusToken: 'print("Eligible to vote")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console displays Eligible to vote cleanly without quotes.',
        conceptTip: 'Always test boundary cases like age = 18 to make sure your comparison includes equality.',
        activeNodeIndex: 3,
        patternPreview: 'Eligible to vote',
        terminalLines: ['Eligible to vote'],
        animateTyping: false,
        focusToken: 'Eligible to vote',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'age = 20\nif age >= 18:\n    print("Eligible to vote")\nelse:\n    print("Not eligible to vote")',
      lineByLineBreakdown: [
        'age = 20 assigns the citizen age.',
        'if age >= 18: verifies if age meets or exceeds legal threshold of 18.',
        'print("Eligible to vote") executes when condition is True.',
        'else: catches underage cases where age < 18.',
      ],
      keyTakeaway: 'Using >= ensures inclusive threshold checking so that 18 is recognized as eligible.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 5 (ID: 205 / 5): Divisible by 5
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q205_divisible_by_5',
    questionIds: [205, 5],
    topicId: 2,
    questionTitle: 'Check whether a number is divisible by 5.',
    conceptTag: 'Divisibility Test (% 5 == 0)',
    archetype: 'type_comparison',
    summaryExplanation:
      'A number is divisible by 5 if dividing it by 5 leaves zero remainder. In Python, test this with num % 5 == 0.',
    thinkingPrompt:
      'If num % 5 equals 0, what does that tell you about divisibility?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Input Dividend',
        sublabel: 'num = 35',
        tone: 'blue',
        codePattern: 'num = 35',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Modulo Division',
        sublabel: '35 % 5 == 0 ──► True',
        tone: 'cyan',
        codePattern: 'if num % 5 == 0:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Divisible Branch',
        sublabel: 'print("Divisible by 5")',
        tone: 'purple',
        codePattern: 'print("Divisible by 5")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Divisible by 5',
        tone: 'emerald',
        codePattern: 'Divisible by 5',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Input Dividend',
        narration:
          'We store num = 35 to test whether it is divisible by 5.',
        conceptTip: 'Any integer ending in 0 or 5 will yield a remainder of 0 when divided by 5.',
        activeNodeIndex: 0,
        patternPreview: 'num = 35',
        terminalLines: [],
        focusToken: 'num = 35',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Compute Modulo (35 % 5)',
        narration:
          '35 divided by 5 equals 7 remainder 0. Because the remainder is 0, 0 == 0 evaluates to True!',
        conceptTip: 'The % operator produces 0 whenever a number divides evenly.',
        activeNodeIndex: 1,
        patternPreview: '35 % 5 == 0  # 0 == 0 evaluates to True',
        terminalLines: [],
        focusToken: 'num % 5 == 0',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute Divisible Branch',
        narration:
          'Since condition is True, print("Divisible by 5") runs and the else block is bypassed.',
        conceptTip: 'Numbers like 37 would produce a remainder of 2, triggering the else block.',
        activeNodeIndex: 2,
        patternPreview: '    print("Divisible by 5")  ──► stdout',
        terminalLines: ['Divisible by 5'],
        animateTyping: true,
        focusToken: 'print("Divisible by 5")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console displays Divisible by 5 cleanly.',
        conceptTip: 'Modulo arithmetic is fundamental in algorithms, pagination, and game loops.',
        activeNodeIndex: 3,
        patternPreview: 'Divisible by 5',
        terminalLines: ['Divisible by 5'],
        animateTyping: false,
        focusToken: 'Divisible by 5',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'num = 35\nif num % 5 == 0:\n    print("Divisible by 5")\nelse:\n    print("Not divisible by 5")',
      lineByLineBreakdown: [
        'num = 35 initializes test number.',
        'num % 5 calculates remainder after division by 5.',
        '== 0 checks if division was exact with no remainder.',
        'print("Divisible by 5") runs for multiples of 5.',
        'else: catches all non-multiples.',
      ],
      keyTakeaway: 'Testing remainder against 0 is the universal test for integer divisibility.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 6 (ID: 206 / 6): Leap Year
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q206_leap_year',
    questionIds: [206, 6],
    topicId: 2,
    questionTitle: 'Check whether a year is a leap year.',
    conceptTag: 'Compound Boolean Logic (and / or)',
    archetype: 'dual_call_stack',
    summaryExplanation:
      'A year is a leap year if it is divisible by 4 and not divisible by 100, OR if it is divisible by 400. In Python: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0).',
    thinkingPrompt:
      'How do you group logical expressions with parentheses to combine and / or conditions?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Calendar Year',
        sublabel: 'year = 2024',
        tone: 'blue',
        codePattern: 'year = 2024',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Compound Test',
        sublabel: 'True and True ──► True',
        tone: 'cyan',
        codePattern: 'if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Leap Year Branch',
        sublabel: 'print(f"{year} is a leap year")',
        tone: 'purple',
        codePattern: 'print(f"{year} is a leap year")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: '2024 is a leap year',
        tone: 'emerald',
        codePattern: '2024 is a leap year',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Input Year Variable',
        narration:
          'We store the calendar year in memory: year = 2024.',
        conceptTip: 'Leap years contain 366 days, occurring roughly every 4 years with century exceptions.',
        activeNodeIndex: 0,
        patternPreview: 'year = 2024',
        terminalLines: [],
        focusToken: 'year = 2024',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Evaluate Compound Boolean Expression',
        narration:
          'First part: 2024 % 4 == 0 is True, and 2024 % 100 != 0 is True! True and True evaluates to True, satisfying the condition.',
        conceptTip: 'Parentheses clarify operator precedence when combining and and or.',
        activeNodeIndex: 1,
        patternPreview: '(2024 % 4 == 0 and 2024 % 100 != 0)  # True and True ──► True',
        terminalLines: [],
        focusToken: 'year % 4 == 0 and year % 100 != 0',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute Leap Year Branch',
        narration:
          'Because the condition holds, Python executes print(f"{year} is a leap year").',
        conceptTip: 'The f-string dynamically embeds 2024 into the output message.',
        activeNodeIndex: 2,
        patternPreview: '    print(f"{year} is a leap year")  ──► stdout',
        terminalLines: ['2024 is a leap year'],
        animateTyping: true,
        focusToken: 'print(f"{year} is a leap year")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console displays 2024 is a leap year accurately.',
        conceptTip: 'Century years like 1900 fail (divisible by 100 but not 400), while 2000 was a leap year (divisible by 400).',
        activeNodeIndex: 3,
        patternPreview: '2024 is a leap year',
        terminalLines: ['2024 is a leap year'],
        animateTyping: false,
        focusToken: '2024 is a leap year',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f"{year} is a leap year")\nelse:\n    print(f"{year} is not a leap year")',
      lineByLineBreakdown: [
        'year = 2024 assigns target year.',
        'year % 4 == 0 checks standard 4-year cycle.',
        'year % 100 != 0 excludes non-leap century years.',
        'or (year % 400 == 0) re-includes special 400-year centuries.',
        'print(...) outputs the resulting decision via f-string.',
      ],
      keyTakeaway: 'Compound conditions let you model complex real-world logic using and and or.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 7 (ID: 207 / 7): Greatest of Three
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q207_greatest_of_three',
    questionIds: [207, 7],
    topicId: 2,
    questionTitle: 'Find the greatest of three numbers.',
    conceptTag: 'Multi-way Branching with and',
    archetype: 'fstring_combiner',
    summaryExplanation:
      'Compare three numbers x, y, and z using chained comparisons. The number that is greater than or equal to both other numbers is the maximum.',
    thinkingPrompt:
      'How do you check if y is greater than both x and z at the same time?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Three Values',
        sublabel: 'x=12, y=45, z=30',
        tone: 'blue',
        codePattern: 'x, y, z = 12, 45, 30',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Chain Comparison',
        sublabel: 'y >= x and y >= z ──► True',
        tone: 'cyan',
        codePattern: 'elif y >= x and y >= z:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Greatest Branch',
        sublabel: 'print(f"Greatest: {y}")',
        tone: 'purple',
        codePattern: 'print(f"Greatest: {y}")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Greatest: 45',
        tone: 'emerald',
        codePattern: 'Greatest: 45',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Initialize Three Numbers',
        narration:
          'We store three numbers: x = 12, y = 45, and z = 30.',
        conceptTip: 'To find the maximum, a number must beat or tie all other competitors.',
        activeNodeIndex: 0,
        patternPreview: 'x, y, z = 12, 45, 30',
        terminalLines: [],
        focusToken: 'x, y, z = 12, 45, 30',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Evaluate Branch Conditions',
        narration:
          '1) if x >= y and x >= z: (12 >= 45 is False). 2) elif y >= x and y >= z: (45 >= 12 is True AND 45 >= 30 is True) ──► True!',
        conceptTip: 'and requires BOTH sides to be True for the entire condition to pass.',
        activeNodeIndex: 1,
        patternPreview: 'elif 45 >= 12 and 45 >= 30:  # True and True ──► True',
        terminalLines: [],
        focusToken: 'y >= x and y >= z',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute the Winning Branch',
        narration:
          'Since y was greatest, the elif body runs: print(f"Greatest: {y}"), interpolating 45.',
        conceptTip: 'The final else branch is never reached because the elif was satisfied.',
        activeNodeIndex: 2,
        patternPreview: '    print(f"Greatest: {y}")  ──► "Greatest: 45"',
        terminalLines: ['Greatest: 45'],
        animateTyping: true,
        focusToken: 'print(f"Greatest: {y}")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console prints Greatest: 45 cleanly.',
        conceptTip: 'Using >= instead of > prevents bugs when two or three numbers are tied.',
        activeNodeIndex: 3,
        patternPreview: 'Greatest: 45',
        terminalLines: ['Greatest: 45'],
        animateTyping: false,
        focusToken: 'Greatest: 45',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'x, y, z = 12, 45, 30\nif x >= y and x >= z:\n    print(f"Greatest: {x}")\nelif y >= x and y >= z:\n    print(f"Greatest: {y}")\nelse:\n    print(f"Greatest: {z}")',
      lineByLineBreakdown: [
        'x, y, z = 12, 45, 30 unpacks 3 variables simultaneously.',
        'if x >= y and x >= z: checks if x is greatest.',
        'elif y >= x and y >= z: checks if y is greatest.',
        'else: handles cases where z is greatest.',
      ],
      keyTakeaway: 'The logical and operator guarantees that all pairwise conditions are verified before a winner is selected.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 8 (ID: 208 / 8): Grade Assignment
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q208_grade_assignment',
    questionIds: [208, 8],
    topicId: 2,
    questionTitle: 'Assign a grade based on marks and given grade boundaries.',
    conceptTag: 'Cascading if-elif-else Ladder',
    archetype: 'single_stream',
    summaryExplanation:
      'Check marks sequentially from highest to lowest bracket: >=90 gives A, >=80 gives B, >=70 gives C, and everything below gives Fail.',
    thinkingPrompt:
      'Why should you check the highest mark bracket (>= 90) before checking lower brackets?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Student Marks',
        sublabel: 'marks = 92',
        tone: 'blue',
        codePattern: 'marks = 92',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Top Tier Test',
        sublabel: '92 >= 90 ──► True',
        tone: 'cyan',
        codePattern: 'if marks >= 90:',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Grade A Branch',
        sublabel: 'print("Grade: A")',
        tone: 'purple',
        codePattern: 'print("Grade: A")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Grade: A',
        tone: 'emerald',
        codePattern: 'Grade: A',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Input Student Marks',
        narration:
          'We store the score: marks = 92.',
        conceptTip: 'Grading systems are classic examples of ordered decision ladders.',
        activeNodeIndex: 0,
        patternPreview: 'marks = 92',
        terminalLines: [],
        focusToken: 'marks = 92',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Check Top Grade Boundary (>= 90)',
        narration:
          'Python checks if marks >= 90: since 92 >= 90 is True, the very first condition passes!',
        conceptTip: 'Checking top-down prevents lower conditions (like >= 70) from accidentally snatching higher scores.',
        activeNodeIndex: 1,
        patternPreview: 'if 92 >= 90:  # Evaluates to True',
        terminalLines: [],
        focusToken: 'marks >= 90',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute Grade A Output',
        narration:
          'The body executes print("Grade: A"). All remaining elif brackets and the else block are skipped.',
        conceptTip: 'Once a branch runs, Python jumps directly to the end of the ladder.',
        activeNodeIndex: 2,
        patternPreview: '    print("Grade: A")  ──► stdout',
        terminalLines: ['Grade: A'],
        animateTyping: true,
        focusToken: 'print("Grade: A")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The terminal displays Grade: A cleanly matching sample output.',
        conceptTip: 'A score like 85 would fail the first check, but pass elif marks >= 80 to print Grade: B.',
        activeNodeIndex: 3,
        patternPreview: 'Grade: A',
        terminalLines: ['Grade: A'],
        animateTyping: false,
        focusToken: 'Grade: A',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'marks = 92\nif marks >= 90:\n    print("Grade: A")\nelif marks >= 80:\n    print("Grade: B")\nelif marks >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: Fail")',
      lineByLineBreakdown: [
        'marks = 92 holds the test score.',
        'if marks >= 90: checks for top honors Grade A.',
        'elif marks >= 80: checks for Grade B (only reached if marks < 90).',
        'elif marks >= 70: checks for Grade C (only reached if marks < 80).',
        'else: catches all marks under 70 as Fail.',
      ],
      keyTakeaway: 'Always order numerical range checks monotonically (highest to lowest or lowest to highest).',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 9 (ID: 209 / 9): Vowel or Consonant
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q209_vowel_or_consonant',
    questionIds: [209, 9],
    topicId: 2,
    questionTitle: 'Check whether a character is a vowel or consonant.',
    conceptTag: 'Membership Operator (in) & str.lower()',
    archetype: 'type_comparison',
    summaryExplanation:
      'In Python, the in operator checks if an element exists inside a collection. Test whether ch.lower() is inside the string "aeiou".',
    thinkingPrompt:
      'How does ch.lower() in "aeiou" work to match both lowercase and uppercase vowels?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Character Input',
        sublabel: 'ch = "e"',
        tone: 'blue',
        codePattern: 'ch = "e"',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Membership Test',
        sublabel: '"e" in "aeiou" ──► True',
        tone: 'cyan',
        codePattern: 'if ch.lower() in "aeiou":',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Vowel Branch',
        sublabel: 'print("Vowel")',
        tone: 'purple',
        codePattern: 'print("Vowel")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Vowel',
        tone: 'emerald',
        codePattern: 'Vowel',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Input Character Variable',
        narration:
          'We assign our test character: ch = "e".',
        conceptTip: 'Single-character strings in Python have standard string methods like .lower().',
        activeNodeIndex: 0,
        patternPreview: 'ch = "e"',
        terminalLines: [],
        focusToken: 'ch = "e"',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Membership Check with in',
        narration:
          '"e".lower() is "e". Python searches: is "e" inside "aeiou"? Yes, at index 1! The expression evaluates to True.',
        conceptTip: 'The in operator provides readable and expressive membership testing in Python.',
        activeNodeIndex: 1,
        patternPreview: '"e" in "aeiou"  # Found! Evaluates to True',
        terminalLines: [],
        focusToken: 'ch.lower() in "aeiou"',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Execute Vowel Branch',
        narration:
          'Because the letter is in the vowel collection, Python executes print("Vowel") and skips the else block.',
        conceptTip: 'Characters like "b" or "z" are not in "aeiou", so they would trigger else: print("Consonant").',
        activeNodeIndex: 2,
        patternPreview: '    print("Vowel")  ──► stdout',
        terminalLines: ['Vowel'],
        animateTyping: true,
        focusToken: 'print("Vowel")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console displays Vowel cleanly.',
        conceptTip: '.lower() ensures capital vowels like "A" or "E" also match without duplicating code.',
        activeNodeIndex: 3,
        patternPreview: 'Vowel',
        terminalLines: ['Vowel'],
        animateTyping: false,
        focusToken: 'Vowel',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'ch = "e"\nif ch.lower() in "aeiou":\n    print("Vowel")\nelse:\n    print("Consonant")',
      lineByLineBreakdown: [
        'ch = "e" stores target character.',
        'ch.lower() normalizes uppercase letters to lowercase.',
        'in "aeiou" tests membership against English vowels.',
        'print("Vowel") runs when character matches.',
        'else: catches consonants.',
      ],
      keyTakeaway: 'Python’s in operator turns multiple equality checks (== "a" or == "e"...) into a single readable line.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // QUESTION 10 (ID: 210 / 10): Simple Operator Calculator
  // ──────────────────────────────────────────────────────────────────────────
  {
    planId: 'py_t2_q210_simple_calculator',
    questionIds: [210, 10],
    topicId: 2,
    questionTitle: 'Create a calculator that performs addition, subtraction, multiplication or division based on an operator.',
    conceptTag: 'Operator Matching & Arithmetic Dispatch',
    archetype: 'fstring_combiner',
    summaryExplanation:
      'Compare the operator string with "+", "-", "*", and "/". When a match is found, compute the math operation and print the formatted result.',
    thinkingPrompt:
      'How do you check which operator string was passed, and compute the appropriate calculation?',
    nodes: [
      {
        id: 'n1',
        badge: 'SCENE 1',
        label: 'Inputs in Memory',
        sublabel: 'a=10, b=20, op="+"',
        tone: 'blue',
        codePattern: 'a, b, op = 10, 20, "+"',
      },
      {
        id: 'n2',
        badge: 'SCENE 2',
        label: 'Operator Match',
        sublabel: 'op == "+" ──► True',
        tone: 'cyan',
        codePattern: 'if op == "+":',
      },
      {
        id: 'n3',
        badge: 'SCENE 3',
        label: 'Compute & Format',
        sublabel: 'f"Result: {a + b}"',
        tone: 'purple',
        codePattern: 'print(f"Result: {a + b}")',
      },
      {
        id: 'n4',
        badge: 'SCENE 4',
        label: 'Terminal Output',
        sublabel: 'Result: 30',
        tone: 'emerald',
        codePattern: 'Result: 30',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scene 1 — Initialize Operands & Operator',
        narration:
          'We assign three inputs: operand a = 10, operand b = 20, and operator symbol op = "+".',
        conceptTip: 'Dispatching logic maps user input commands to specific functions or operations.',
        activeNodeIndex: 0,
        patternPreview: 'a, b, op = 10, 20, "+"',
        terminalLines: [],
        focusToken: 'a, b, op = 10, 20, "+"',
      },
      {
        stepNumber: 2,
        title: 'Scene 2 — Match Operator Symbol',
        narration:
          'Python checks if op == "+": because "+" equals "+", this evaluates to True!',
        conceptTip: 'String equality in Python uses double equals == to compare character sequences.',
        activeNodeIndex: 1,
        patternPreview: 'if "+" == "+":  # Evaluates to True',
        terminalLines: [],
        focusToken: 'op == "+"',
      },
      {
        stepNumber: 3,
        title: 'Scene 3 — Compute and Format Addition',
        narration:
          'Python evaluates a + b (10 + 20 = 30) and injects it into f"Result: {30}".',
        conceptTip: 'Calculations inside f-string expressions {a + b} evaluate before string rendering.',
        activeNodeIndex: 2,
        patternPreview: '    print(f"Result: {10 + 20}")  ──► "Result: 30"',
        terminalLines: ['Result: 30'],
        animateTyping: true,
        focusToken: 'print(f"Result: {a + b}")',
      },
      {
        stepNumber: 4,
        title: 'Scene 4 — Final Terminal Output',
        narration:
          'The console displays Result: 30 cleanly. The subtraction, multiplication, and division branches are skipped.',
        conceptTip: 'If op was "*", Python would skip addition and execute the multiplication branch: Result: 200.',
        activeNodeIndex: 3,
        patternPreview: 'Result: 30',
        terminalLines: ['Result: 30'],
        animateTyping: false,
        focusToken: 'Result: 30',
      },
    ],
    postSolveWalkthrough: {
      annotatedCode: 'a, b, op = 10, 20, "+"\nif op == "+":\n    print(f"Result: {a + b}")\nelif op == "-":\n    print(f"Result: {a - b}")\nelif op == "*":\n    print(f"Result: {a * b}")\nelif op == "/":\n    print(f"Result: {a / b}")',
      lineByLineBreakdown: [
        'a, b, op = 10, 20, "+" defines numbers and operator.',
        'if op == "+": adds a and b.',
        'elif op == "-": subtracts b from a.',
        'elif op == "*": multiplies a and b.',
        'elif op == "/": divides a by b.',
      ],
      keyTakeaway: 'if-elif-else acts as an effective command dispatcher to select different calculations based on input.',
    },
    validatedSafe: true,
    generatedByModel: 'Gemini-4-Argon-VisualPlanner',
  },
];

export default TOPIC_2_VISUAL_PLANS;
