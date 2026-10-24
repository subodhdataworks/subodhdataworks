import { getTopicHierarchyInfo } from '../PythonChapterView';
// ============================================================================
// MODULE 01: INTRODUCTION TO PYTHON PROGRAMMING — TOPIC ASSESSMENT CONTENT
// 100% Faithful to Future IT Industry Assessment Workbook (Pages 2–27)
// 13 Topics | 65 MCQs | 65 Game Levels | 65 Coding Challenges | 65 Interview Q&As
// ============================================================================

export interface TopicMcqOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface TopicMcq {
  id: number;
  tag: string;
  difficulty: 'Beginner' | 'Fundamental' | 'Core';
  question: string;
  options: TopicMcqOption[];
  correct: number; // 0: A, 1: B, 2: C, 3: D
  hint: string;
  explanation: string;
  realWorldContext: string;
  codeSnippet?: string;
}

export interface GameL1Block {
  id: string;
  text: string;
  kind?: string;
  bg?: string;
  textCol?: string;
  borderCol?: string;
}

export interface GameL2Option {
  id: string;
  text: string;
  isCorrect: boolean;
  note: string;
}

export interface GameL3Line {
  line: number;
  text: string;
  isBug: boolean;
  bugMsg?: string;
}

export interface GameL3Patch {
  id: string;
  code: string;
  label: string;
  isCorrect: boolean;
}

export interface TopicGameData {
  l1: {
    title: string;
    question: string;
    blocks: GameL1Block[];
    correctOrder: string[];
    explanation: string;
  };
  l2: {
    title: string;
    question: string;
    snippetLines: string[];
    options: GameL2Option[];
  };
  l3: {
    title: string;
    question: string;
    lines: GameL3Line[];
    bugLine: number;
    patches: GameL3Patch[];
  };
  l4: {
    title: string;
    question: string;
    prefixCode: string;
    slot1Target: string;
    midCode: string;
    slot2Target: string;
    suffixCode: string;
    availableTokens: string[];
    correctSlot1: string;
    correctSlot2: string;
    expectedOutput: string;
  };
  l5: {
    bossName: string;
    title: string;
    question: string;
    scenario: string;
    phase1Prompt: string;
    phase1Options: Array<{ id: string; text: string; isCorrect: boolean }>;
    phase2Prompt: string;
    phase2Starter: string;
    phase2Solution: string;
    phase2ExpectedOutput: string;
  };
}

export interface TopicCodingChallenge {
  id: number;
  title: string;
  prompt: string;
  expectedApproach: string;
  starterCode: string;
  solutionCode: string;
  expectedOutput: string;
  hints: Array<{
    step: number;
    penalty?: string;
    title: string;
    desc: string;
    code: string;
  }>;
}

export interface TopicInterviewQuestion {
  id: number;
  question: string;
  modelAnswer: string;
  tag: string;
}

export interface TopicAssessmentData {
  topicId: number;
  topicNumber: number;
  topicTitle: string;
  pdfPages: string;
  mcqs: TopicMcq[];
  game: TopicGameData;
  codingChallenges: TopicCodingChallenge[];
  interviewQuestions: TopicInterviewQuestion[];
}

export const MODULE_01_TOPICS_CONTENT: Record<number, TopicAssessmentData> = {
  "1": {
    "topicId": 1,
    "topicNumber": 1,
    "topicTitle": "1.1 What is Programming? – Real-Life Examples",
    "pdfPages": "Pages 2\u20133",
    "mcqs": [
      {
        "id": 1,
        "tag": "#Foundations",
        "difficulty": "Beginner",
        "question": "Programming is\u2026",
        "options": [
          {
            "key": "A",
            "text": "Repairing hardware"
          },
          {
            "key": "B",
            "text": "Browsing the internet"
          },
          {
            "key": "C",
            "text": "Giving a computer instructions"
          },
          {
            "key": "D",
            "text": "Designing only graphics"
          }
        ],
        "correct": 2,
        "hint": "Think about what code actually tells a computer to execute.",
        "explanation": "A program is a set of instructions a computer can execute.",
        "realWorldContext": "Software Engineering: Every app from operating systems to mobile apps consists of computer instructions.",
        "codeSnippet": "# Programming = Giving precise instructions\nprint('Execute instructions step by step')"
      },
      {
        "id": 2,
        "tag": "#Algorithms",
        "difficulty": "Beginner",
        "question": "An algorithm is\u2026",
        "options": [
          {
            "key": "A",
            "text": "A file extension"
          },
          {
            "key": "B",
            "text": "A computer brand"
          },
          {
            "key": "C",
            "text": "Ordered steps to solve a problem"
          },
          {
            "key": "D",
            "text": "A monitor"
          }
        ],
        "correct": 2,
        "hint": "It describes a sequence of solution steps.",
        "explanation": "An algorithm describes a sequence of solution steps.",
        "realWorldContext": "Computer Science: Search engines, route navigators, and sorting algorithms power modern tech.",
        "codeSnippet": "# Step 1: Input -> Step 2: Process -> Step 3: Output"
      },
      {
        "id": 3,
        "tag": "#Execution",
        "difficulty": "Beginner",
        "question": "A program is mainly created to\u2026",
        "options": [
          {
            "key": "A",
            "text": "Instruct a computer to perform a task"
          },
          {
            "key": "B",
            "text": "Make hardware heavier"
          },
          {
            "key": "C",
            "text": "Replace electricity"
          },
          {
            "key": "D",
            "text": "Store only images"
          }
        ],
        "correct": 0,
        "hint": "Programs tell computers what actions to perform.",
        "explanation": "Programs tell computers what actions to perform.",
        "realWorldContext": "Automation: Programs automate repetitive calculations millions of times faster than humans.",
        "codeSnippet": "def perform_task():\n    print('Task completed successfully!')"
      },
      {
        "id": 4,
        "tag": "#Logic",
        "difficulty": "Beginner",
        "question": "Which resembles programming most?",
        "options": [
          {
            "key": "A",
            "text": "Looking at a cover"
          },
          {
            "key": "B",
            "text": "Buying a keyboard"
          },
          {
            "key": "C",
            "text": "Turning off a screen"
          },
          {
            "key": "D",
            "text": "Writing precise steps to sort books"
          }
        ],
        "correct": 3,
        "hint": "Precise, ordered instructions resemble an algorithm.",
        "explanation": "Precise, ordered instructions resemble an algorithm.",
        "realWorldContext": "Everyday Logic: Sorting, cooking recipes, and assembly guides are everyday algorithms.",
        "codeSnippet": "# 1. Pick book -> 2. Compare title -> 3. Place on shelf"
      },
      {
        "id": 5,
        "tag": "#Clarity",
        "difficulty": "Beginner",
        "question": "Why should instructions be clear?",
        "options": [
          {
            "key": "A",
            "text": "Clear instructions hide code"
          },
          {
            "key": "B",
            "text": "Computers understand all languages"
          },
          {
            "key": "C",
            "text": "Computers always guess"
          },
          {
            "key": "D",
            "text": "Ambiguity can cause errors"
          }
        ],
        "correct": 3,
        "hint": "Computers cannot reliably infer missing instructions.",
        "explanation": "Computers cannot reliably infer missing instructions.",
        "realWorldContext": "Bug Prevention: Unambiguous code prevents crashes and security vulnerabilities in production.",
        "codeSnippet": "# Good: Clear, unambiguous syntax\ntotal = price + tax"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Arrange these steps in the correct order: give instructions, identify the task, check the result.",
        "blocks": [
          {
            "id": "b1",
            "text": "1. Identify the task",
            "kind": "step",
            "bg": "#eff6ff",
            "textCol": "#1d4ed8",
            "borderCol": "#bfdbfe"
          },
          {
            "id": "b2",
            "text": "2. Give instructions",
            "kind": "step",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b3",
            "text": "3. Check the result",
            "kind": "step",
            "bg": "#faf5ff",
            "textCol": "#7e22ce",
            "borderCol": "#e9d5ff"
          }
        ],
        "correctOrder": [
          "b1",
          "b2",
          "b3"
        ],
        "explanation": "Before instructing, first understand the task. Then provide the instructions, and finally verify the output!"
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "If a computer receives no instruction to display anything, what should you expect on the screen?",
        "snippetLines": [
          "x = 10",
          "y = 20",
          "total = x + y",
          "# Notice: No print statement is present"
        ],
        "options": [
          {
            "id": "o1",
            "text": "Nothing appears on the screen (blank output)",
            "isCorrect": true,
            "note": "Computers only output what they are explicitly instructed to display."
          },
          {
            "id": "o2",
            "text": "It will print total automatically",
            "isCorrect": false,
            "note": "Python does not automatically output computed variables without print()."
          },
          {
            "id": "o3",
            "text": "It displays a system error",
            "isCorrect": false,
            "note": "The code runs silently and successfully without errors."
          },
          {
            "id": "o4",
            "text": "It prints 30",
            "isCorrect": false,
            "note": "Without print(), nothing reaches the standard output terminal."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A student writes vague instructions: 'Do the task properly.' What is the main problem?",
        "lines": [
          {
            "line": 1,
            "text": "# Task: Process student grade",
            "isBug": false
          },
          {
            "line": 2,
            "text": "do_the_task_properly()",
            "isBug": true,
            "bugMsg": "Vague instruction: Computers cannot infer undefined, ambiguous commands."
          },
          {
            "line": 3,
            "text": "print('Grade calculated')",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "calculate_percentage(marks)  # Explicit, concrete instruction",
            "label": "Patch A: Specify explicit concrete steps",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "please_do_it_now()",
            "label": "Patch B: Add polite text",
            "isCorrect": false
          },
          {
            "id": "p3",
            "code": "pass",
            "label": "Patch C: Skip execution",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Assemble a 4-step algorithm for opening a learning website and reaching a lesson.",
        "prefixCode": "# Step 1: Open browser\n# Step 2: ",
        "slot1Target": "Navigate to learning URL",
        "midCode": "\n# Step 3: Enter credentials & login\n# Step 4: ",
        "slot2Target": "Click open lesson",
        "suffixCode": "\nprint('Ready to learn!')",
        "availableTokens": [
          "Navigate to learning URL",
          "Click open lesson",
          "Turn off screen",
          "Delete files",
          "Format disk"
        ],
        "correctSlot1": "Navigate to learning URL",
        "correctSlot2": "Click open lesson",
        "expectedOutput": "Ready to learn!"
      },
      "l5": {
        "bossName": "Sentinel Algor",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Create a step-by-step algorithm that asks for two item prices (40 and 60), calculates the total, and displays it.",
        "scenario": "Sentinel Algor guards the programming core. Submit the exact calculation sequence to breach.",
        "phase1Prompt": "What is the correct logical flow for totaling two item prices?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "Receive prices -> Add prices together -> Print total",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "Print total -> Add prices -> Receive prices",
            "isCorrect": false
          },
          {
            "id": "a3",
            "text": "Add prices -> Print total -> Receive prices",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write Python code that stores 40 in price1 and 60 in price2, calculates total, and prints it:",
        "phase2Starter": "price1 = 40\nprice2 = 60\n# Calculate total and print:\n",
        "phase2Solution": "price1 = 40\nprice2 = 60\ntotal = price1 + price2\nprint(total)",
        "phase2ExpectedOutput": "100"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Five Steps for Website Login",
        "prompt": "Write five steps for logging into a learning website.",
        "expectedApproach": "Expected: open site, enter credentials, submit, validate, show dashboard or error.",
        "starterCode": "print('1. Open site')\n# Add the remaining 4 steps below:\n",
        "solutionCode": "print('1. Open site')\nprint('2. Enter credentials')\nprint('3. Submit')\nprint('4. Validate')\nprint('5. Show dashboard or error')",
        "expectedOutput": "1. Open site\n2. Enter credentials\n3. Submit\n4. Validate\n5. Show dashboard or error",
        "hints": [
          {
            "step": 1,
            "title": "Sequential flow",
            "desc": "Step 2 is credentials, Step 3 submit, Step 4 validate, Step 5 dashboard.",
            "code": "print('2. Enter credentials')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Total Three Item Prices",
        "prompt": "Write an algorithm to total three item prices: 25, 45, and 30.",
        "expectedApproach": "Expected: receive prices, add them, display total.",
        "starterCode": "p1 = 25\np2 = 45\np3 = 30\n# Add prices and print total:\n",
        "solutionCode": "p1 = 25\np2 = 45\np3 = 30\ntotal = p1 + p2 + p3\nprint('Total:', total)",
        "expectedOutput": "Total: 100",
        "hints": [
          {
            "step": 1,
            "title": "Sum arithmetic",
            "desc": "Add variables using the + operator.",
            "code": "total = p1 + p2 + p3"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Check Score at Least 40",
        "prompt": "Design steps to check whether a score of 45 is at least 40.",
        "expectedApproach": "Expected: input score, compare with 40, show pass/fail.",
        "starterCode": "score = 45\n# Check if score >= 40 and display pass/fail:\n",
        "solutionCode": "score = 45\nif score >= 40:\n    print('Pass')\nelse:\n    print('Fail')",
        "expectedOutput": "Pass",
        "hints": [
          {
            "step": 1,
            "title": "Comparison operator",
            "desc": "Use if score >= 40: to branch.",
            "code": "if score >= 40:"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Complete the Sequence",
        "prompt": "Complete: Start -> enter two numbers -> ____ -> display result -> End.",
        "expectedApproach": "Expected: add the numbers if the task is addition.",
        "starterCode": "a = 15\nb = 25\n# Complete the middle operation step:\n",
        "solutionCode": "a = 15\nb = 25\nresult = a + b\nprint(result)",
        "expectedOutput": "40",
        "hints": [
          {
            "step": 1,
            "title": "Processing step",
            "desc": "Compute result = a + b between input and display.",
            "code": "result = a + b"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Find the Missing Step",
        "prompt": "Find the missing step: type code -> expect output.",
        "expectedApproach": "Expected: run/execute the code before checking output.",
        "starterCode": "print('Missing step: run/execute the code')",
        "solutionCode": "print('Missing step: run/execute the code')",
        "expectedOutput": "Missing step: run/execute the code",
        "hints": [
          {
            "step": 1,
            "title": "Execution",
            "desc": "The interpreter must run code before output appears.",
            "code": "print('Missing step: run/execute the code')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "What is programming?",
        "modelAnswer": "Writing instructions a computer can execute.",
        "tag": "Foundations"
      },
      {
        "id": 2,
        "question": "What is an algorithm?",
        "modelAnswer": "A finite, ordered set of steps for solving a problem.",
        "tag": "Computer Science"
      },
      {
        "id": 3,
        "question": "Algorithm vs program?",
        "modelAnswer": "An algorithm describes the solution; a program implements it in a programming language.",
        "tag": "Core Concepts"
      },
      {
        "id": 4,
        "question": "Why plan before coding?",
        "modelAnswer": "It clarifies inputs, processing, outputs and edge cases.",
        "tag": "Best Practices"
      },
      {
        "id": 5,
        "question": "Give an everyday algorithm example.",
        "modelAnswer": "An ATM withdrawal: authenticate, choose amount, check balance, dispense or show an error.",
        "tag": "Practical"
      }
    ]
  },
  "101": {
    "topicId": 101,
    "topicNumber": 9,
    "topicTitle": "1.9 Mindset: How to Think Like a Programmer",
    "pdfPages": "Pages 4\u20135",
    "mcqs": [
      {
        "id": 1,
        "tag": "#ProblemSolving",
        "difficulty": "Beginner",
        "question": "What should you identify first?",
        "options": [
          {
            "key": "A",
            "text": "Comments count"
          },
          {
            "key": "B",
            "text": "Problem, inputs and expected outputs"
          },
          {
            "key": "C",
            "text": "Font colour"
          },
          {
            "key": "D",
            "text": "Laptop brand"
          }
        ],
        "correct": 1,
        "hint": "Understand the task before choosing an implementation.",
        "explanation": "Understand the task before choosing an implementation.",
        "realWorldContext": "Software Architecture: Requirements discovery always precedes code implementation.",
        "codeSnippet": "# 1. Identify Inputs & Outputs -> 2. Design Logic"
      },
      {
        "id": 2,
        "tag": "#Decision",
        "difficulty": "Beginner",
        "question": "A decision step\u2026",
        "options": [
          {
            "key": "A",
            "text": "Chooses a path based on a condition"
          },
          {
            "key": "B",
            "text": "Repeats forever"
          },
          {
            "key": "C",
            "text": "Deletes data"
          },
          {
            "key": "D",
            "text": "Installs Python"
          }
        ],
        "correct": 0,
        "hint": "Decisions branch based on conditions.",
        "explanation": "Decisions branch based on conditions.",
        "realWorldContext": "Business Logic: If payment is verified, fulfill order; else request retry.",
        "codeSnippet": "if score >= 40:\n    print('Passed')\nelse:\n    print('Try Again')"
      },
      {
        "id": 3,
        "tag": "#Flowchart",
        "difficulty": "Beginner",
        "question": "A flowchart\u2026",
        "options": [
          {
            "key": "A",
            "text": "Measures internet speed"
          },
          {
            "key": "B",
            "text": "Edits photos only"
          },
          {
            "key": "C",
            "text": "Replaces testing"
          },
          {
            "key": "D",
            "text": "Shows logic visually"
          }
        ],
        "correct": 3,
        "hint": "Flowcharts visually represent steps and branches.",
        "explanation": "Flowcharts visually represent steps and branches.",
        "realWorldContext": "Workflow Diagrams: Teams use flowcharts to align product owners and developers on system flow.",
        "codeSnippet": "# [Start] -> [Input] -> <Condition> -> [Output]"
      },
      {
        "id": 4,
        "tag": "#TraceInput",
        "difficulty": "Beginner",
        "question": "Why test sample inputs?",
        "options": [
          {
            "key": "A",
            "text": "To guarantee no changes ever"
          },
          {
            "key": "B",
            "text": "To make code longer"
          },
          {
            "key": "C",
            "text": "To check results against expectations"
          },
          {
            "key": "D",
            "text": "To avoid defining the problem"
          }
        ],
        "correct": 2,
        "hint": "Tracing examples helps expose flawed or missing steps.",
        "explanation": "Tracing examples helps expose flawed or missing steps.",
        "realWorldContext": "Unit Testing: Developers test boundary cases like zero, negative numbers, or empty lists.",
        "codeSnippet": "# Test: 4 + 6 == 10\nassert (4 + 6) == 10"
      },
      {
        "id": 5,
        "tag": "#OrderOfSteps",
        "difficulty": "Beginner",
        "question": "A bill total algorithm should\u2026",
        "options": [
          {
            "key": "A",
            "text": "Ignore the data"
          },
          {
            "key": "B",
            "text": "Input prices, sum them, display total"
          },
          {
            "key": "C",
            "text": "Guess the total"
          },
          {
            "key": "D",
            "text": "Display before input"
          }
        ],
        "correct": 1,
        "hint": "This separates input, processing and output.",
        "explanation": "This separates input, processing and output.",
        "realWorldContext": "POS Software: Always captures cart prices first, calculates tax and subtotal, then shows the bill.",
        "codeSnippet": "prices = [25, 45, 30]\ntotal = sum(prices)\nprint(total)"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Complete the algorithm: Start \u2192 receive two numbers \u2192 ____ \u2192 display the answer \u2192 End.",
        "blocks": [
          {
            "id": "b1",
            "text": "add the two numbers",
            "kind": "process",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "turn off display",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "The processing phase (adding the numbers) happens between input and output."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "An algorithm adds 4 and 6. What result should it produce?",
        "snippetLines": [
          "a = 4",
          "b = 6",
          "result = a + b",
          "print(result)"
        ],
        "options": [
          {
            "id": "o1",
            "text": "10",
            "isCorrect": true,
            "note": "4 + 6 evaluates directly to 10."
          },
          {
            "id": "o2",
            "text": "46",
            "isCorrect": false,
            "note": "46 is string concatenation ('4' + '6'), not integer addition."
          },
          {
            "id": "o3",
            "text": "24",
            "isCorrect": false,
            "note": "24 is multiplication (4 * 6)."
          },
          {
            "id": "o4",
            "text": "Error",
            "isCorrect": false,
            "note": "Valid Python arithmetic does not raise an error."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "An algorithm displays a total before adding the prices. Identify the ordering mistake.",
        "lines": [
          {
            "line": 1,
            "text": "item1 = 50",
            "isBug": false
          },
          {
            "line": 2,
            "text": "item2 = 30",
            "isBug": false
          },
          {
            "line": 3,
            "text": "print('Total:', total)  # Trying to display total before calculating it!",
            "isBug": true,
            "bugMsg": "Ordering Error: Output attempted before computation."
          },
          {
            "line": 4,
            "text": "total = item1 + item2",
            "isBug": false
          }
        ],
        "bugLine": 3,
        "patches": [
          {
            "id": "p1",
            "code": "total = item1 + item2\nprint('Total:', total)",
            "label": "Patch A: Compute total before displaying",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "print(item1)",
            "label": "Patch B: Print only item1",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write ordered steps to calculate the area of a rectangle from length and width.",
        "prefixCode": "length = 10\nwidth = 5\n# Compute and output area:\n",
        "slot1Target": "area = length * width",
        "midCode": "\n",
        "slot2Target": "print('Area:', area)",
        "suffixCode": "",
        "availableTokens": [
          "area = length * width",
          "print('Area:', area)",
          "area = length + width",
          "print(0)",
          "clear()"
        ],
        "correctSlot1": "area = length * width",
        "correctSlot2": "print('Area:', area)",
        "expectedOutput": "Area: 50"
      },
      "l5": {
        "bossName": "Logic Overlord",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Design a clear algorithm to calculate the average of three marks (80, 90, 70), showing input, processing, and output steps.",
        "scenario": "Logic Overlord challenges you to structure the arithmetic average logic without precision errors.",
        "phase1Prompt": "What formula calculates the average of three marks?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "(m1 + m2 + m3) / 3",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "m1 + m2 + m3 / 3",
            "isCorrect": false
          },
          {
            "id": "a3",
            "text": "(m1 + m2 + m3) * 3",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write Python code with marks 80, 90, 70 that calculates the integer average and prints it:",
        "phase2Starter": "m1 = 80\nm2 = 90\nm3 = 70\n# Calculate average and print:\n",
        "phase2Solution": "m1 = 80\nm2 = 90\nm3 = 70\navg = (m1 + m2 + m3) / 3\nprint(int(avg))",
        "phase2ExpectedOutput": "80"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Find the Larger of Two Numbers",
        "prompt": "Find the larger of two numbers (a = 40, b = 25); handle equality.",
        "expectedApproach": "Expected: compare both; output first, second, or equal.",
        "starterCode": "a = 40\nb = 25\n# Compare and print result:\n",
        "solutionCode": "a = 40\nb = 25\nif a > b:\n    print(a)\nelif b > a:\n    print(b)\nelse:\n    print('Equal')",
        "expectedOutput": "40",
        "hints": [
          {
            "step": 1,
            "title": "Branches",
            "desc": "Check a > b, b > a, and equality.",
            "code": "if a > b:\n    print(a)"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Average of Three Scores",
        "prompt": "Write steps to calculate the average of three scores: 75, 85, 95.",
        "expectedApproach": "Expected: sum scores, divide by three, display.",
        "starterCode": "s1 = 75\ns2 = 85\ns3 = 95\n# Calculate average and display:\n",
        "solutionCode": "s1 = 75\ns2 = 85\ns3 = 95\navg = (s1 + s2 + s3) / 3\nprint(int(avg))",
        "expectedOutput": "85",
        "hints": [
          {
            "step": 1,
            "title": "Sum & Divide",
            "desc": "Sum three numbers inside parentheses then divide by 3.",
            "code": "avg = (s1 + s2 + s3) / 3"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Describe Flowchart for Even/Odd",
        "prompt": "Describe and implement a flowchart step for checking if n = 18 is even or odd.",
        "expectedApproach": "Expected: input n; test n % 2 == 0; branch.",
        "starterCode": "n = 18\n# Check if even or odd:\n",
        "solutionCode": "n = 18\nif n % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
        "expectedOutput": "Even",
        "hints": [
          {
            "step": 1,
            "title": "Modulo",
            "desc": "Test remainder with n % 2 == 0.",
            "code": "if n % 2 == 0:"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Fix Rectangle Area Formula",
        "prompt": "Fix: area = length + width. Calculate correct area for length = 12 and width = 4.",
        "expectedApproach": "Expected: rectangle area uses length * width.",
        "starterCode": "length = 12\nwidth = 4\n# Fix the addition mistake:\narea = length * width\nprint('Area:', area)",
        "solutionCode": "length = 12\nwidth = 4\narea = length * width\nprint('Area:', area)",
        "expectedOutput": "Area: 48",
        "hints": [
          {
            "step": 1,
            "title": "Multiplication",
            "desc": "Area of rectangle is length multiplied by width.",
            "code": "area = length * width"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Login Algorithm with Three Attempts",
        "prompt": "Design a login algorithm loop that allows up to three attempts.",
        "expectedApproach": "Expected: repeat up to three times; stop on success; otherwise show failure.",
        "starterCode": "# Repeat up to 3 attempts (attempt 2 succeeds):\nfor attempt in range(1, 4):\n    if attempt == 2:\n        print('Access Granted')\n        break",
        "solutionCode": "for attempt in range(1, 4):\n    if attempt == 2:\n        print('Access Granted')\n        break",
        "expectedOutput": "Access Granted",
        "hints": [
          {
            "step": 1,
            "title": "Break loop",
            "desc": "Use break to stop after successful authentication.",
            "code": "break"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "What are input, processing and output?",
        "modelAnswer": "Input is received data, processing transforms it, output is the result.",
        "tag": "Fundamentals"
      },
      {
        "id": 2,
        "question": "What makes an algorithm good?",
        "modelAnswer": "Clarity, correctness, finiteness, reasonable efficiency and edge-case handling.",
        "tag": "Algorithm Quality"
      },
      {
        "id": 3,
        "question": "What is decomposition?",
        "modelAnswer": "Breaking a complex problem into smaller parts.",
        "tag": "System Design"
      },
      {
        "id": 4,
        "question": "Why consider edge cases?",
        "modelAnswer": "Zero, empty, equal or unusual values can reveal flaws.",
        "tag": "Quality Assurance"
      },
      {
        "id": 5,
        "question": "How do you validate an algorithm?",
        "modelAnswer": "Trace normal and edge-case examples and compare expected results.",
        "tag": "Verification"
      }
    ]
  },
  "102": {
    "topicId": 102,
    "topicNumber": 3,
    "topicTitle": "1.3 Python vs Other Languages – Simple Understanding",
    "pdfPages": "Pages 6\u20137",
    "mcqs": [
      {
        "id": 1,
        "tag": "#PythonIntro",
        "difficulty": "Beginner",
        "question": "Python is\u2026",
        "options": [
          {
            "key": "A",
            "text": "A programming language"
          },
          {
            "key": "B",
            "text": "A spreadsheet only"
          },
          {
            "key": "C",
            "text": "A physical component"
          },
          {
            "key": "D",
            "text": "An operating system only"
          }
        ],
        "correct": 0,
        "hint": "Python is a general-purpose programming language.",
        "explanation": "Python is a general-purpose programming language.",
        "realWorldContext": "Global Standard: Created by Guido van Rossum in 1991, Python is now the world's most widely used language.",
        "codeSnippet": "print('Hello, Python!')"
      },
      {
        "id": 2,
        "tag": "#Readability",
        "difficulty": "Beginner",
        "question": "A strength of Python is\u2026",
        "options": [
          {
            "key": "A",
            "text": "One-computer-only support"
          },
          {
            "key": "B",
            "text": "No data processing"
          },
          {
            "key": "C",
            "text": "No libraries"
          },
          {
            "key": "D",
            "text": "Readable syntax and a large ecosystem"
          }
        ],
        "correct": 3,
        "hint": "Readable syntax and libraries make Python useful.",
        "explanation": "Readable syntax and libraries make Python useful.",
        "realWorldContext": "Developer Velocity: Teams write fewer lines of code in Python compared to Java or C++.",
        "codeSnippet": "# Clean English-like code\nif user_is_logged_in:\n    show_dashboard()"
      },
      {
        "id": 3,
        "tag": "#Versatility",
        "difficulty": "Beginner",
        "question": "Python is commonly used for\u2026",
        "options": [
          {
            "key": "A",
            "text": "Web development"
          },
          {
            "key": "B",
            "text": "All of these"
          },
          {
            "key": "C",
            "text": "Data analysis"
          },
          {
            "key": "D",
            "text": "Automation"
          }
        ],
        "correct": 1,
        "hint": "Python supports all these use cases.",
        "explanation": "Python supports all these use cases.",
        "realWorldContext": "Multi-Paradigm: Web APIs, machine learning, robotics, and cloud DevOps all share Python.",
        "codeSnippet": "# Versatile general-purpose programming"
      },
      {
        "id": 4,
        "tag": "#Interpreter",
        "difficulty": "Beginner",
        "question": "A Python interpreter typically\u2026",
        "options": [
          {
            "key": "A",
            "text": "Creates electricity"
          },
          {
            "key": "B",
            "text": "Executes Python code"
          },
          {
            "key": "C",
            "text": "Repairs hardware"
          },
          {
            "key": "D",
            "text": "Prints documents"
          }
        ],
        "correct": 1,
        "hint": "The interpreter runs Python instructions.",
        "explanation": "The interpreter runs Python instructions.",
        "realWorldContext": "Runtime: The Python interpreter compiles code into bytecode (.pyc) and executes it on the Python Virtual Machine.",
        "codeSnippet": "# Command to run in terminal:\npython app.py"
      },
      {
        "id": 5,
        "tag": "#FileExtension",
        "difficulty": "Beginner",
        "question": "A common Python source extension is\u2026",
        "options": [
          {
            "key": "A",
            "text": ".jpg"
          },
          {
            "key": "B",
            "text": ".py"
          },
          {
            "key": "C",
            "text": ".mp3"
          },
          {
            "key": "D",
            "text": ".xlsx"
          }
        ],
        "correct": 1,
        "hint": "Python source files commonly use .py.",
        "explanation": "Python source files commonly use .py.",
        "realWorldContext": "Tooling: Editors automatically enable syntax highlighting when a file ends in .py.",
        "codeSnippet": "# Example source file: script.py"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Which language are you learning in this course?",
        "blocks": [
          {
            "id": "b1",
            "text": "Python",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "Cobol",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "You are learning Python!"
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "What is the purpose of running a simple Python instruction?",
        "snippetLines": [
          "print('Hello Future AI')",
          "# Running this in terminal"
        ],
        "options": [
          {
            "id": "o1",
            "text": "To verify execution and see the instruction results",
            "isCorrect": true,
            "note": "Executing instructions verifies syntax and produces output."
          },
          {
            "id": "o2",
            "text": "To compile hardware circuits",
            "isCorrect": false,
            "note": "Python is software interpreted, not hardware synthesis."
          },
          {
            "id": "o3",
            "text": "To delete old files",
            "isCorrect": false,
            "note": "Running a simple instruction does not delete files."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A learner saves Python code but never runs it. How can they check whether it works?",
        "lines": [
          {
            "line": 1,
            "text": "# Code written in editor",
            "isBug": false
          },
          {
            "line": 2,
            "text": "# Code saved as app.py but never executed",
            "isBug": true,
            "bugMsg": "Unexecuted Code: Must run the file to verify syntax and logic."
          },
          {
            "line": 3,
            "text": "print('Test')",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "# Run command in terminal: python app.py",
            "label": "Patch A: Run file using Python interpreter",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "# Keep saving file over and over",
            "label": "Patch B: Save repeatedly",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write a one-line Python statement that displays the word Python.",
        "prefixCode": "",
        "slot1Target": "print",
        "midCode": "('",
        "slot2Target": "Python",
        "suffixCode": "')",
        "availableTokens": [
          "print",
          "Python",
          "display",
          "echo",
          "System"
        ],
        "correctSlot1": "print",
        "correctSlot2": "Python",
        "expectedOutput": "Python"
      },
      "l5": {
        "bossName": "Python Guardian",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Write a tiny Python program that displays two separate messages: 'Welcome' and 'Python'.",
        "scenario": "Python Guardian verifies your grasp of multi-line execution.",
        "phase1Prompt": "How do you display messages on two distinct lines in standard Python?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "Two separate print() statements",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "One comment line",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write two print calls to output 'Welcome' and 'Python':",
        "phase2Starter": "# Output Welcome and Python on separate lines:\n",
        "phase2Solution": "print('Welcome')\nprint('Python')",
        "phase2ExpectedOutput": "Welcome\nPython"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Explain Python in One Sentence",
        "prompt": "Explain Python in one sentence for a beginner.",
        "expectedApproach": "Expected: a language for writing instructions computers can run.",
        "starterCode": "print('A language for writing instructions computers can run.')",
        "solutionCode": "print('A language for writing instructions computers can run.')",
        "expectedOutput": "A language for writing instructions computers can run.",
        "hints": [
          {
            "step": 1,
            "title": "Definition",
            "desc": "Output the concise one-sentence description.",
            "code": "print('A language for writing instructions computers can run.')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: List Three Uses of Python",
        "prompt": "List three uses of Python.",
        "expectedApproach": "Expected: examples such as analytics, automation, web apps.",
        "starterCode": "print('1. Analytics')\nprint('2. Automation')\nprint('3. Web Apps')",
        "solutionCode": "print('1. Analytics')\nprint('2. Automation')\nprint('3. Web Apps')",
        "expectedOutput": "1. Analytics\n2. Automation\n3. Web Apps",
        "hints": [
          {
            "step": 1,
            "title": "Application areas",
            "desc": "Show analytics, automation, and web apps.",
            "code": "print('1. Analytics')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Match Tasks to Fields",
        "prompt": "Match: analyze CSV, rename files, build web API.",
        "expectedApproach": "Expected: analytics, automation, web development.",
        "starterCode": "print('analyze CSV: Analytics')\nprint('rename files: Automation')\nprint('build web API: Web Development')",
        "solutionCode": "print('analyze CSV: Analytics')\nprint('rename files: Automation')\nprint('build web API: Web Development')",
        "expectedOutput": "analyze CSV: Analytics\nrename files: Automation\nbuild web API: Web Development",
        "hints": [
          {
            "step": 1,
            "title": "Field mapping",
            "desc": "Map CSV to analytics, renaming to automation, API to web dev.",
            "code": "print('analyze CSV: Analytics')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Explain Code vs Output",
        "prompt": "Explain code vs output.",
        "expectedApproach": "Expected: code is instructions; output is the execution result.",
        "starterCode": "print('Code is instructions; output is the execution result.')",
        "solutionCode": "print('Code is instructions; output is the execution result.')",
        "expectedOutput": "Code is instructions; output is the execution result.",
        "hints": [
          {
            "step": 1,
            "title": "Concept",
            "desc": "Instructions written vs result produced.",
            "code": "print('Code is instructions; output is the execution result.')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: What Does lesson.py Suggest?",
        "prompt": "What does `lesson.py` suggest?",
        "expectedApproach": "Expected: likely a Python source file.",
        "starterCode": "print('Likely a Python source file')",
        "solutionCode": "print('Likely a Python source file')",
        "expectedOutput": "Likely a Python source file",
        "hints": [
          {
            "step": 1,
            "title": "Extension",
            "desc": "The .py suffix denotes a Python source file.",
            "code": "print('Likely a Python source file')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "What is Python?",
        "modelAnswer": "A high-level, general-purpose programming language.",
        "tag": "Foundations"
      },
      {
        "id": 2,
        "question": "Name three Python application areas.",
        "modelAnswer": "Data analytics, automation, web development, scientific computing, etc.",
        "tag": "Ecosystem"
      },
      {
        "id": 3,
        "question": "Why is Python beginner-friendly?",
        "modelAnswer": "Readable syntax, extensive learning resources and libraries.",
        "tag": "Language Design"
      },
      {
        "id": 4,
        "question": "What is a library?",
        "modelAnswer": "Reusable code that helps developers perform common tasks.",
        "tag": "Engineering"
      },
      {
        "id": 5,
        "question": "Is Python only for data analytics?",
        "modelAnswer": "No; it is also used in automation, web, scientific computing and testing.",
        "tag": "Industry Roles"
      }
    ]
  },
  "103": {
    "topicId": 103,
    "topicNumber": 2,
    "topicTitle": "1.2 Why Python is Used Everywhere",
    "pdfPages": "Pages 8\u20139",
    "mcqs": [
      {
        "id": 1,
        "tag": "#Automation",
        "difficulty": "Beginner",
        "question": "A good automation task is\u2026",
        "options": [
          {
            "key": "A",
            "text": "Cleaning a desk by hand"
          },
          {
            "key": "B",
            "text": "Replacing a screen manually"
          },
          {
            "key": "C",
            "text": "Charging a battery without hardware"
          },
          {
            "key": "D",
            "text": "Renaming hundreds of files by rule"
          }
        ],
        "correct": 3,
        "hint": "Scripts can automate repetitive file operations.",
        "explanation": "Scripts can automate repetitive file operations.",
        "realWorldContext": "File Automation: A 10-line Python script can batch organize 50,000 files in seconds.",
        "codeSnippet": "import os\n# Renaming files automatically in seconds"
      },
      {
        "id": 2,
        "tag": "#DataLibraries",
        "difficulty": "Beginner",
        "question": "A common tabular-data library is\u2026",
        "options": [
          {
            "key": "A",
            "text": "BIOS"
          },
          {
            "key": "B",
            "text": "Media player"
          },
          {
            "key": "C",
            "text": "Pandas"
          },
          {
            "key": "D",
            "text": "Paint"
          }
        ],
        "correct": 2,
        "hint": "Pandas is designed for data manipulation.",
        "explanation": "Pandas is designed for data manipulation.",
        "realWorldContext": "Data Science: Pandas DataFrames are the global industry standard for tabular data wrangling.",
        "codeSnippet": "import pandas as pd\ndf = pd.read_csv('sales.csv')"
      },
      {
        "id": 3,
        "tag": "#WebApps",
        "difficulty": "Beginner",
        "question": "Python web development can include\u2026",
        "options": [
          {
            "key": "A",
            "text": "Changing screen brightness only"
          },
          {
            "key": "B",
            "text": "Server-side web apps"
          },
          {
            "key": "C",
            "text": "Manufacturing keyboards"
          },
          {
            "key": "D",
            "text": "Replacing cables"
          }
        ],
        "correct": 1,
        "hint": "Python frameworks can power web services.",
        "explanation": "Python frameworks can power web services.",
        "realWorldContext": "Web Services: FastAPI, Django, and Flask power backend APIs serving billions of requests.",
        "codeSnippet": "# Flask/FastAPI backend server\n@app.get('/api/users')\ndef get_users(): return []"
      },
      {
        "id": 4,
        "tag": "#MachineLearning",
        "difficulty": "Beginner",
        "question": "Python can be used for machine learning\u2026",
        "options": [
          {
            "key": "A",
            "text": "Yes, with suitable libraries"
          },
          {
            "key": "B",
            "text": "Never"
          },
          {
            "key": "C",
            "text": "Only without data"
          },
          {
            "key": "D",
            "text": "Only for printing"
          }
        ],
        "correct": 0,
        "hint": "Libraries support machine learning and numerical work.",
        "explanation": "Libraries support machine learning and numerical work.",
        "realWorldContext": "AI Ecosystem: PyTorch, TensorFlow, and Scikit-learn make Python the dominant language for ML.",
        "codeSnippet": "# Machine Learning model training\nmodel.fit(X_train, y_train)"
      },
      {
        "id": 5,
        "tag": "#LibrarySelection",
        "difficulty": "Beginner",
        "question": "Choose a library based on\u2026",
        "options": [
          {
            "key": "A",
            "text": "Longest name"
          },
          {
            "key": "B",
            "text": "Random choice"
          },
          {
            "key": "C",
            "text": "Logo colours"
          },
          {
            "key": "D",
            "text": "Requirements and compatibility"
          }
        ],
        "correct": 3,
        "hint": "Tool selection should follow project needs.",
        "explanation": "Tool selection should follow project needs.",
        "realWorldContext": "Architecture: Choosing active, maintained libraries with good docs ensures long-term stability.",
        "codeSnippet": "# Select dependencies based on requirements.txt"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Name one kind of task Python can help automate.",
        "blocks": [
          {
            "id": "b1",
            "text": "Renaming files in bulk",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "Cooking food physically",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "Python excels at file management, batch renaming, web scraping, and scheduled tasks."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "Would Python be suitable for analysing a spreadsheet of sales? Answer yes or no and why.",
        "snippetLines": [
          "import pandas as pd",
          "df = pd.read_excel('sales.xlsx')",
          "print(df['revenue'].sum())"
        ],
        "options": [
          {
            "id": "o1",
            "text": "Yes, because libraries like Pandas easily read, filter and aggregate spreadsheet data.",
            "isCorrect": true,
            "note": "Pandas provides native read_excel() and calculation functions."
          },
          {
            "id": "o2",
            "text": "No, Python cannot open spreadsheet files.",
            "isCorrect": false,
            "note": "Python has exceptional spreadsheet support with Pandas and openpyxl."
          },
          {
            "id": "o3",
            "text": "No, Python only runs games.",
            "isCorrect": false,
            "note": "Data analytics is one of Python's primary industry uses."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A learner claims Python is used only for websites. What is missing from this claim?",
        "lines": [
          {
            "line": 1,
            "text": "# Claim: 'Python is solely for making web pages'",
            "isBug": true,
            "bugMsg": "Incomplete claim: Omits Data Analytics, Machine Learning, Automation, and DevOps."
          },
          {
            "line": 2,
            "text": "use_case_web = True",
            "isBug": false
          },
          {
            "line": 3,
            "text": "print('Broad multi-domain ecosystem')",
            "isBug": false
          }
        ],
        "bugLine": 1,
        "patches": [
          {
            "id": "p1",
            "code": "# Correct: Python is used across Web, Data, AI, and Automation",
            "label": "Patch A: Acknowledge multi-domain versatility",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "# Claim: Python is only for games",
            "label": "Patch B: Switch to games only",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "List two different fields where Python can be used.",
        "prefixCode": "fields = ['",
        "slot1Target": "Data Analytics",
        "midCode": "', '",
        "slot2Target": "Machine Learning",
        "suffixCode": "']\nfor f in fields:\n    print(f)",
        "availableTokens": [
          "Data Analytics",
          "Machine Learning",
          "Replacing screens",
          "Plumbing",
          "Welding"
        ],
        "correctSlot1": "Data Analytics",
        "correctSlot2": "Machine Learning",
        "expectedOutput": "Data Analytics\nMachine Learning"
      },
      "l5": {
        "bossName": "Automation Titan",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Choose a real-world task (for example, organising files or analysing sales) and describe how a Python program could help.",
        "scenario": "Automation Titan requires a structured automation pipeline.",
        "phase1Prompt": "Which script pattern best automates organizing invoices?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "Read folder -> Filter by extension -> Move to archive folder",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "Delete entire hard drive",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write Python code that creates a list of 2 tasks ('Organise files', 'Analyse sales') and prints both:",
        "phase2Starter": "# Create list of 2 tasks and print:\n",
        "phase2Solution": "tasks = ['Organise files', 'Analyse sales']\nfor t in tasks:\n    print(t)",
        "phase2ExpectedOutput": "Organise files\nAnalyse sales"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Match Applications to Fields",
        "prompt": "Match file renaming, sales analysis, web API, simulation to use cases.",
        "expectedApproach": "Expected: automation, analytics, web development, scientific computing.",
        "starterCode": "print('file renaming: automation')\nprint('sales analysis: analytics')\nprint('web API: web development')\nprint('simulation: scientific computing')",
        "solutionCode": "print('file renaming: automation')\nprint('sales analysis: analytics')\nprint('web API: web development')\nprint('simulation: scientific computing')",
        "expectedOutput": "file renaming: automation\nsales analysis: analytics\nweb API: web development\nsimulation: scientific computing",
        "hints": [
          {
            "step": 1,
            "title": "Matching",
            "desc": "Show all 4 domain connections.",
            "code": "print('file renaming: automation')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Plan a Safe Bulk-Renaming Script",
        "prompt": "Plan a safe bulk-renaming script.",
        "expectedApproach": "Expected: path input, naming rule, preview, collision checks, backup.",
        "starterCode": "print('Plan: path input, naming rule, preview, collision checks, backup.')",
        "solutionCode": "print('Plan: path input, naming rule, preview, collision checks, backup.')",
        "expectedOutput": "Plan: path input, naming rule, preview, collision checks, backup.",
        "hints": [
          {
            "step": 1,
            "title": "Safety first",
            "desc": "Always preview and check for collisions before modifying files.",
            "code": "print('Plan: path input, naming rule, preview, collision checks, backup.')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Outline CSV-to-Sales-Report Steps",
        "prompt": "Outline CSV-to-sales-report steps.",
        "expectedApproach": "Expected: load, inspect, validate, aggregate, report.",
        "starterCode": "print('Steps: load, inspect, validate, aggregate, report.')",
        "solutionCode": "print('Steps: load, inspect, validate, aggregate, report.')",
        "expectedOutput": "Steps: load, inspect, validate, aggregate, report.",
        "hints": [
          {
            "step": 1,
            "title": "Pipeline",
            "desc": "Load -> Inspect -> Validate -> Aggregate -> Report.",
            "code": "print('Steps: load, inspect, validate, aggregate, report.')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Name Automation Risks and Safeguards",
        "prompt": "Name two automation risks and safeguards.",
        "expectedApproach": "Expected: wrong files/overwrites; use dry run, backups and path checks.",
        "starterCode": "print('Risks: wrong files/overwrites. Safeguards: dry run, backups, path checks.')",
        "solutionCode": "print('Risks: wrong files/overwrites. Safeguards: dry run, backups, path checks.')",
        "expectedOutput": "Risks: wrong files/overwrites. Safeguards: dry run, backups, path checks.",
        "hints": [
          {
            "step": 1,
            "title": "Safeguards",
            "desc": "Dry-run and backups prevent irreversible file loss.",
            "code": "print('Risks: wrong files/overwrites. Safeguards: dry run, backups, path checks.')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Choose a Python Use Case and Justify",
        "prompt": "Choose a Python use case and justify it.",
        "expectedApproach": "Expected: rationale based on task requirements.",
        "starterCode": "print('Use case: Data analytics with Pandas due to large ecosystem and rapid prototyping.')",
        "solutionCode": "print('Use case: Data analytics with Pandas due to large ecosystem and rapid prototyping.')",
        "expectedOutput": "Use case: Data analytics with Pandas due to large ecosystem and rapid prototyping.",
        "hints": [
          {
            "step": 1,
            "title": "Rationale",
            "desc": "State use case and justification.",
            "code": "print('Use case: Data analytics with Pandas due to large ecosystem and rapid prototyping.')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "Give four Python applications.",
        "modelAnswer": "Analytics, automation, web development and scientific computing.",
        "tag": "Ecosystem"
      },
      {
        "id": 2,
        "question": "What is automation?",
        "modelAnswer": "Using software to perform repetitive tasks with less manual work.",
        "tag": "Productivity"
      },
      {
        "id": 3,
        "question": "Why use libraries?",
        "modelAnswer": "They provide reusable functionality and reduce duplicated work.",
        "tag": "Architecture"
      },
      {
        "id": 4,
        "question": "Is Python always the best tool?",
        "modelAnswer": "No; consider performance, deployment, ecosystem and team skills.",
        "tag": "System Evaluation"
      },
      {
        "id": 5,
        "question": "How choose a library?",
        "modelAnswer": "Check fit, documentation, maintenance, compatibility, security and licensing.",
        "tag": "Best Practices"
      }
    ]
  },
  "104": {
    "topicId": 104,
    "topicNumber": 5,
    "topicTitle": "1.5 Python in Data Analytics",
    "pdfPages": "Pages 10\u201311",
    "mcqs": [
      {
        "id": 1,
        "tag": "#EDA",
        "difficulty": "Beginner",
        "question": "First step with a new dataset?",
        "options": [
          {
            "key": "A",
            "text": "Assume all values are correct"
          },
          {
            "key": "B",
            "text": "Chart without checking"
          },
          {
            "key": "C",
            "text": "Inspect structure and quality"
          },
          {
            "key": "D",
            "text": "Delete half the rows"
          }
        ],
        "correct": 2,
        "hint": "Inspection reveals columns, types and data-quality concerns.",
        "explanation": "Inspection reveals columns, types and data-quality concerns.",
        "realWorldContext": "Data Science: df.info() and df.describe() provide crucial preliminary insights into data cleanliness.",
        "codeSnippet": "df.info()\ndf.head()"
      },
      {
        "id": 2,
        "tag": "#Pandas",
        "difficulty": "Beginner",
        "question": "A common tabular cleaning library is\u2026",
        "options": [
          {
            "key": "A",
            "text": "BIOS"
          },
          {
            "key": "B",
            "text": "Pandas"
          },
          {
            "key": "C",
            "text": "A media player"
          },
          {
            "key": "D",
            "text": "A word processor"
          }
        ],
        "correct": 1,
        "hint": "Pandas provides DataFrame operations.",
        "explanation": "Pandas provides DataFrame operations.",
        "realWorldContext": "Tabular Wrangling: Over 80% of data analysts worldwide use Pandas for data preparation.",
        "codeSnippet": "import pandas as pd\nclean_df = df.dropna()"
      },
      {
        "id": 3,
        "tag": "#Terminology",
        "difficulty": "Beginner",
        "question": "EDA stands for\u2026",
        "options": [
          {
            "key": "A",
            "text": "Exploratory Data Analysis"
          },
          {
            "key": "B",
            "text": "Electronic Design Assembly"
          },
          {
            "key": "C",
            "text": "Extra Data Archive"
          },
          {
            "key": "D",
            "text": "Estimated Daily Average"
          }
        ],
        "correct": 0,
        "hint": "EDA explores structure, patterns and quality.",
        "explanation": "EDA explores structure, patterns and quality.",
        "realWorldContext": "Data Analytics: EDA uncovers outliers, distribution shapes, and correlations before modeling.",
        "codeSnippet": "# EDA = Exploratory Data Analysis"
      },
      {
        "id": 4,
        "tag": "#DataQuality",
        "difficulty": "Beginner",
        "question": "Missing values should be examined because\u2026",
        "options": [
          {
            "key": "A",
            "text": "They always mean delete row"
          },
          {
            "key": "B",
            "text": "They always equal zero"
          },
          {
            "key": "C",
            "text": "They never matter"
          },
          {
            "key": "D",
            "text": "They can affect calculations"
          }
        ],
        "correct": 3,
        "hint": "Handling depends on context and missingness.",
        "explanation": "Handling depends on context and missingness.",
        "realWorldContext": "Analytics Integrity: Blindly deleting or imputing nulls can severely skew statistical averages.",
        "codeSnippet": "print(df.isnull().sum())"
      },
      {
        "id": 5,
        "tag": "#AnalyticalQuestion",
        "difficulty": "Beginner",
        "question": "Which is an analytical question?",
        "options": [
          {
            "key": "A",
            "text": "How heavy is the monitor?"
          },
          {
            "key": "B",
            "text": "Which wallpaper is best?"
          },
          {
            "key": "C",
            "text": "Which product generated most revenue?"
          },
          {
            "key": "D",
            "text": "What colour is the keyboard?"
          }
        ],
        "correct": 2,
        "hint": "Business data can answer product revenue questions.",
        "explanation": "Business data can answer product revenue questions.",
        "realWorldContext": "BI Strategy: Revenue by product informs inventory stocking and marketing budget allocation.",
        "codeSnippet": "top_product = df.groupby('product')['revenue'].sum().idxmax()"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "In data analytics, which comes first: understanding data or presenting conclusions?",
        "blocks": [
          {
            "id": "b1",
            "text": "1. Understanding data",
            "kind": "first",
            "bg": "#eff6ff",
            "textCol": "#1d4ed8",
            "borderCol": "#bfdbfe"
          },
          {
            "id": "b2",
            "text": "2. Presenting conclusions",
            "kind": "second",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          }
        ],
        "correctOrder": [
          "b1",
          "b2"
        ],
        "explanation": "You must inspect, clean, and understand the data before presenting conclusions!"
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "A table contains daily sales. What useful result could a Python analysis produce?",
        "snippetLines": [
          "sales = [120, 250, 310, 180]",
          "avg_sales = sum(sales) / len(sales)",
          "print('Average Daily Sales:', avg_sales)"
        ],
        "options": [
          {
            "id": "o1",
            "text": "Key business metrics like average daily sales, total revenue, and peak days",
            "isCorrect": true,
            "note": "Python aggregates raw transactions into actionable metrics."
          },
          {
            "id": "o2",
            "text": "It recharges battery levels",
            "isCorrect": false,
            "note": "Software analysis does not affect battery hardware."
          },
          {
            "id": "o3",
            "text": "It deletes customer records",
            "isCorrect": false,
            "note": "Aggregation functions calculate summaries without deleting rows."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A learner draws a chart before checking whether the sales data is complete. Identify the risk.",
        "lines": [
          {
            "line": 1,
            "text": "raw_sales = [100, None, 250, -50]  # Contains dirty missing/negative data",
            "isBug": false
          },
          {
            "line": 2,
            "text": "plot_chart_immediately(raw_sales)",
            "isBug": true,
            "bugMsg": "Data Risk: Charting uncleaned data leads to misleading or incorrect business insights."
          },
          {
            "line": 3,
            "text": "# Should clean data first",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "clean_sales = clean_and_validate(raw_sales)\nplot_chart(clean_sales)",
            "label": "Patch A: Clean and validate before charting",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "ignore_errors()",
            "label": "Patch B: Ignore issues",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Describe a simple workflow: sales data \u2192 inspect \u2192 analyse \u2192 ____.",
        "prefixCode": "# Workflow:\n# Step 1: sales data\n# Step 2: inspect\n# Step 3: analyse\n# Step 4: ",
        "slot1Target": "interpret and report",
        "midCode": "\nprint('",
        "slot2Target": "Insight delivered",
        "suffixCode": "')",
        "availableTokens": [
          "interpret and report",
          "Insight delivered",
          "shut down",
          "delete database",
          "guess"
        ],
        "correctSlot1": "interpret and report",
        "correctSlot2": "Insight delivered",
        "expectedOutput": "Insight delivered"
      },
      "l5": {
        "bossName": "Data Behemoth",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Plan a Python-based analysis for a small sales table: state one question, the data needed, and the result to report.",
        "scenario": "Data Behemoth requires an accurate total sales computation.",
        "phase1Prompt": "What is the primary calculation for total sales revenue?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "Sum of (Quantity * UnitPrice) across all transactions",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "Total row count only",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Given units = 5 and unit_price = 20, calculate and display revenue:",
        "phase2Starter": "units = 5\nunit_price = 20\n# Calculate revenue and print:\n",
        "phase2Solution": "units = 5\nunit_price = 20\nrevenue = units * unit_price\nprint('Revenue:', revenue)",
        "phase2ExpectedOutput": "Revenue: 100"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Define Revenue from Order",
        "prompt": "Given OrderID, Quantity (4), UnitPrice (25), define revenue.",
        "expectedApproach": "Expected: Quantity * UnitPrice; check invalid values and currency.",
        "starterCode": "quantity = 4\nunit_price = 25\n# Calculate revenue:\n",
        "solutionCode": "quantity = 4\nunit_price = 25\nrevenue = quantity * unit_price\nprint('Revenue:', revenue)",
        "expectedOutput": "Revenue: 100",
        "hints": [
          {
            "step": 1,
            "title": "Formula",
            "desc": "revenue = quantity * unit_price.",
            "code": "revenue = quantity * unit_price"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: List Three Checks Before Analysis",
        "prompt": "List three checks before sales analysis.",
        "expectedApproach": "Expected: missingness, duplicates, types, invalid dates/quantities.",
        "starterCode": "print('Checks: missingness, duplicates, types.')",
        "solutionCode": "print('Checks: missingness, duplicates, types.')",
        "expectedOutput": "Checks: missingness, duplicates, types.",
        "hints": [
          {
            "step": 1,
            "title": "Data Hygiene",
            "desc": "Check missing values, duplicates, and correct column types.",
            "code": "print('Checks: missingness, duplicates, types.')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Choose Chart for Revenue Trend",
        "prompt": "Choose a chart for monthly revenue trend.",
        "expectedApproach": "Expected: line chart is often suitable for time trends.",
        "starterCode": "print('A line chart is suitable for showing trends over time.')",
        "solutionCode": "print('A line chart is suitable for showing trends over time.')",
        "expectedOutput": "A line chart is suitable for showing trends over time.",
        "hints": [
          {
            "step": 1,
            "title": "Visualization",
            "desc": "Line charts display time-series trajectories clearly.",
            "code": "print('A line chart is suitable for showing trends over time.')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Five Questions for an Orders Dataset",
        "prompt": "Write key analytical questions for an orders dataset.",
        "expectedApproach": "Expected: revenue by month/product/region, top products, average order value.",
        "starterCode": "print('1. Revenue by month\\n2. Top products\\n3. Average order value')",
        "solutionCode": "print('1. Revenue by month\\n2. Top products\\n3. Average order value')",
        "expectedOutput": "1. Revenue by month\n2. Top products\n3. Average order value",
        "hints": [
          {
            "step": 1,
            "title": "Business metrics",
            "desc": "Top products, monthly revenue, and average order value.",
            "code": "print('1. Revenue by month\\n2. Top products\\n3. Average order value')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Outline Raw CSV to Recommendation",
        "prompt": "Outline raw CSV to recommendation pipeline.",
        "expectedApproach": "Expected: load, inspect, clean, analyze, visualize, interpret, caveat.",
        "starterCode": "print('Pipeline: load, inspect, clean, analyze, visualize, interpret, caveat.')",
        "solutionCode": "print('Pipeline: load, inspect, clean, analyze, visualize, interpret, caveat.')",
        "expectedOutput": "Pipeline: load, inspect, clean, analyze, visualize, interpret, caveat.",
        "hints": [
          {
            "step": 1,
            "title": "Full Lifecycle",
            "desc": "Load -> inspect -> clean -> analyze -> visualize -> interpret.",
            "code": "print('Pipeline: load, inspect, clean, analyze, visualize, interpret, caveat.')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "How does Python help analysts?",
        "modelAnswer": "Automates cleaning, analysis, metrics, visualizations and reproducible workflows.",
        "tag": "Analytics"
      },
      {
        "id": 2,
        "question": "What is EDA?",
        "modelAnswer": "Inspecting and summarizing data to understand quality, patterns and relationships.",
        "tag": "Data Exploration"
      },
      {
        "id": 3,
        "question": "Why clean data?",
        "modelAnswer": "Errors, duplicates and inconsistent values can distort results.",
        "tag": "Data Quality"
      },
      {
        "id": 4,
        "question": "Metric vs insight?",
        "modelAnswer": "A metric is measured; an insight interprets its meaning in context.",
        "tag": "BI Concepts"
      },
      {
        "id": 5,
        "question": "How handle an unexpected result?",
        "modelAnswer": "Validate data and calculations, investigate, show evidence and state limitations.",
        "tag": "Analysis Integrity"
      }
    ]
  },
  "105": {
    "topicId": 105,
    "topicNumber": 6,
    "topicTitle": "1.6 Installing Python 3",
    "pdfPages": "Pages 12\u201313",
    "mcqs": [
      {
        "id": 1,
        "tag": "#Versions",
        "difficulty": "Beginner",
        "question": "Install which version for a new course?",
        "options": [
          {
            "key": "A",
            "text": "Only an editor"
          },
          {
            "key": "B",
            "text": "A currently supported Python 3 release"
          },
          {
            "key": "C",
            "text": "Unknown random executable"
          },
          {
            "key": "D",
            "text": "Python 1 only"
          }
        ],
        "correct": 1,
        "hint": "Use a supported Python 3 release.",
        "explanation": "Use a supported Python 3 release.",
        "realWorldContext": "Python Lifecycle: Python 2 reached End of Life in 2020. Modern data science runs on supported Python 3.10+.",
        "codeSnippet": "# Recommended: Python 3.11 or 3.12+"
      },
      {
        "id": 2,
        "tag": "#DownloadSource",
        "difficulty": "Beginner",
        "question": "Where should Python be downloaded?",
        "options": [
          {
            "key": "A",
            "text": "Official Python website"
          },
          {
            "key": "B",
            "text": "Random pop-up"
          },
          {
            "key": "C",
            "text": "Unknown file-share"
          },
          {
            "key": "D",
            "text": "Social comment"
          }
        ],
        "correct": 0,
        "hint": "Official sources reduce tampering risk.",
        "explanation": "Official sources reduce tampering risk.",
        "realWorldContext": "Cybersecurity: Always download binaries directly from python.org to avoid malware and trojans.",
        "codeSnippet": "# Official Source: https://www.python.org/downloads/"
      },
      {
        "id": 3,
        "tag": "#VersionCheck",
        "difficulty": "Beginner",
        "question": "python --version checks\u2026",
        "options": [
          {
            "key": "A",
            "text": "Monitor resolution"
          },
          {
            "key": "B",
            "text": "Password"
          },
          {
            "key": "C",
            "text": "Folder size"
          },
          {
            "key": "D",
            "text": "The version launched by that command"
          }
        ],
        "correct": 3,
        "hint": "It reports the version associated with that command.",
        "explanation": "It reports the version associated with that command.",
        "realWorldContext": "CLI Commands: Running python --version confirms which interpreter binary is active in PATH.",
        "codeSnippet": "$ python --version\nPython 3.12.0"
      },
      {
        "id": 4,
        "tag": "#EnvironmentPATH",
        "difficulty": "Beginner",
        "question": "PATH helps the shell find\u2026",
        "options": [
          {
            "key": "A",
            "text": "Theme colours"
          },
          {
            "key": "B",
            "text": "Only images"
          },
          {
            "key": "C",
            "text": "Executables such as Python"
          },
          {
            "key": "D",
            "text": "Physical location"
          }
        ],
        "correct": 2,
        "hint": "PATH lists directories searched for commands.",
        "explanation": "PATH lists directories searched for commands.",
        "realWorldContext": "Operating Systems: Checking 'Add Python to PATH' enables typing `python` in any terminal folder.",
        "codeSnippet": "# Windows/Mac Environment Variable: PATH"
      },
      {
        "id": 5,
        "tag": "#Troubleshooting",
        "difficulty": "Beginner",
        "question": "If python is not recognized\u2026",
        "options": [
          {
            "key": "A",
            "text": "Install random software"
          },
          {
            "key": "B",
            "text": "Check install, PATH and platform command"
          },
          {
            "key": "C",
            "text": "Delete projects"
          },
          {
            "key": "D",
            "text": "Assume hardware failure"
          }
        ],
        "correct": 1,
        "hint": "Command names and PATH vary by setup.",
        "explanation": "Command names and PATH vary by setup.",
        "realWorldContext": "Troubleshooting: On macOS/Linux, try `python3`; on Windows, check PATH or reinstall with PATH checked.",
        "codeSnippet": "# Try: python3 --version OR py --version"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Which do you need to install to run Python 3 code: Python 3 or only a text document?",
        "blocks": [
          {
            "id": "b1",
            "text": "Python 3 Interpreter",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "Only a blank text document",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "You need the Python 3 interpreter to parse and execute Python code!"
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "If Python is installed correctly, what should a version-check command help you confirm?",
        "snippetLines": [
          "$ python --version",
          "# Checking terminal output..."
        ],
        "options": [
          {
            "id": "o1",
            "text": "Outputs the installed Python version string (e.g., Python 3.12.x)",
            "isCorrect": true,
            "note": "Confirms both that the executable is present and its exact version."
          },
          {
            "id": "o2",
            "text": "Prints system passwords",
            "isCorrect": false,
            "note": "--version does not touch passwords."
          },
          {
            "id": "o3",
            "text": "Launches a game",
            "isCorrect": false,
            "note": "--version is a fast diagnostic flag."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "The terminal says 'python not found.' Name one installation or PATH check to try.",
        "lines": [
          {
            "line": 1,
            "text": "$ python main.py",
            "isBug": false
          },
          {
            "line": 2,
            "text": "bash: python: command not found",
            "isBug": true,
            "bugMsg": "PATH / Command error: The shell cannot find the 'python' executable."
          },
          {
            "line": 3,
            "text": "# Try checking python3 or adding Python directory to PATH",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "$ python3 main.py  # Test platform alias or update PATH",
            "label": "Patch A: Test python3 alias or verify PATH",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "$ shutdown -r now",
            "label": "Patch B: Reboot immediately",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write a short checklist for installing Python 3 and verifying the installation.",
        "prefixCode": "# Setup steps:\n# 1. Download official installer\n# 2. ",
        "slot1Target": "Check Add to PATH",
        "midCode": "\n# 3. Complete installation\n# 4. Run ",
        "slot2Target": "python --version",
        "suffixCode": " in terminal\nprint('Python installed and verified!')",
        "availableTokens": [
          "Check Add to PATH",
          "python --version",
          "Delete OS",
          "Format C:",
          "Disable internet"
        ],
        "correctSlot1": "Check Add to PATH",
        "correctSlot2": "python --version",
        "expectedOutput": "Python installed and verified!"
      },
      "l5": {
        "bossName": "SysAdmin Dreadnought",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Create a troubleshooting checklist for a computer where the Python command is not recognised.",
        "scenario": "Dreadnought blocks environment setup until all diagnostic steps are validated.",
        "phase1Prompt": "What is the primary fix when Windows terminal reports 'python is not recognized'?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "Re-run installer and ensure 'Add python.exe to PATH' is checked",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "Delete user documents",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write a script that outputs the 3 key verification checks ('Check install', 'Check PATH', 'Check alias'):",
        "phase2Starter": "# Output 3 checks on separate lines:\n",
        "phase2Solution": "print('1. Check install')\nprint('2. Check PATH')\nprint('3. Check alias')",
        "phase2ExpectedOutput": "1. Check install\n2. Check PATH\n3. Check alias"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Windows Installation Checklist",
        "prompt": "Write a Windows installation checklist.",
        "expectedApproach": "Expected: official download, installer options, install, terminal version check, editor.",
        "starterCode": "print('Windows: official download, installer options, install, terminal version check, editor.')",
        "solutionCode": "print('Windows: official download, installer options, install, terminal version check, editor.')",
        "expectedOutput": "Windows: official download, installer options, install, terminal version check, editor.",
        "hints": [
          {
            "step": 1,
            "title": "Checklist",
            "desc": "Official site, check PATH, run installer, verify in cmd.",
            "code": "print('Windows: official download, installer options, install, terminal version check, editor.')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: macOS / Linux Setup Checklist",
        "prompt": "Write a macOS/Linux setup checklist.",
        "expectedApproach": "Expected: trusted installation, version check, editor; avoid damaging system Python.",
        "starterCode": "print('macOS/Linux: trusted install, version check, editor; avoid damaging system Python.')",
        "solutionCode": "print('macOS/Linux: trusted install, version check, editor; avoid damaging system Python.')",
        "expectedOutput": "macOS/Linux: trusted install, version check, editor; avoid damaging system Python.",
        "hints": [
          {
            "step": 1,
            "title": "System Python",
            "desc": "Do not delete macOS/Linux built-in Python.",
            "code": "print('macOS/Linux: trusted install, version check, editor; avoid damaging system Python.')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Three Checks for Command-Not-Found",
        "prompt": "List three checks for command-not-found.",
        "expectedApproach": "Expected: installation, command name/launcher, PATH or terminal restart.",
        "starterCode": "print('Checks: 1. installation 2. command name/launcher 3. PATH or terminal restart')",
        "solutionCode": "print('Checks: 1. installation 2. command name/launcher 3. PATH or terminal restart')",
        "expectedOutput": "Checks: 1. installation 2. command name/launcher 3. PATH or terminal restart",
        "hints": [
          {
            "step": 1,
            "title": "Diagnostics",
            "desc": "Check installation directory, PATH variable, and restart terminal window.",
            "code": "print('Checks: 1. installation 2. command name/launcher 3. PATH or terminal restart')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Why Avoid Unknown Installers?",
        "prompt": "Why avoid unknown installers?",
        "expectedApproach": "Expected: tampering and malware risk.",
        "starterCode": "print('Unknown installers carry tampering and malware risks.')",
        "solutionCode": "print('Unknown installers carry tampering and malware risks.')",
        "expectedOutput": "Unknown installers carry tampering and malware risks.",
        "hints": [
          {
            "step": 1,
            "title": "Security",
            "desc": "Unverified binaries can contain keyloggers or malware.",
            "code": "print('Unknown installers carry tampering and malware risks.')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Troubleshooting Decision Tree",
        "prompt": "Create a troubleshooting decision tree for Python setup.",
        "expectedApproach": "Expected: confirm install, check command, inspect PATH, reopen terminal, consult official guidance.",
        "starterCode": "print('Steps: confirm install -> check command -> inspect PATH -> reopen terminal.')",
        "solutionCode": "print('Steps: confirm install -> check command -> inspect PATH -> reopen terminal.')",
        "expectedOutput": "Steps: confirm install -> check command -> inspect PATH -> reopen terminal.",
        "hints": [
          {
            "step": 1,
            "title": "Tree",
            "desc": "Systematic order of diagnostic checks.",
            "code": "print('Steps: confirm install -> check command -> inspect PATH -> reopen terminal.')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "How verify Python is installed?",
        "modelAnswer": "Run `python --version` or `python3 --version`, depending on platform.",
        "tag": "Environment"
      },
      {
        "id": 2,
        "question": "What is PATH?",
        "modelAnswer": "An environment variable listing directories searched for executables.",
        "tag": "Operating Systems"
      },
      {
        "id": 3,
        "question": "Why use trusted installers?",
        "modelAnswer": "To reduce tampering and security risks.",
        "tag": "Security"
      },
      {
        "id": 4,
        "question": "Why can command names differ?",
        "modelAnswer": "Operating systems, installation methods and PATH configuration differ.",
        "tag": "Cross-Platform"
      },
      {
        "id": 5,
        "question": "Should system Python be deleted to fix a problem?",
        "modelAnswer": "Usually not; diagnose first and use an isolated environment where appropriate.",
        "tag": "Best Practices"
      }
    ]
  },
  "106": {
    "topicId": 106,
    "topicNumber": 5,
    "topicTitle": "1.5 Installing Python and IDE – VS Code Setup",
    "pdfPages": "Pages 14\u201315",
    "mcqs": [
      {
        "id": 1,
        "tag": "#CodeEditor",
        "difficulty": "Beginner",
        "question": "A code editor is for\u2026",
        "options": [
          {
            "key": "A",
            "text": "Writing and editing source code"
          },
          {
            "key": "B",
            "text": "Replacing OS"
          },
          {
            "key": "C",
            "text": "Cooling laptop"
          },
          {
            "key": "D",
            "text": "Creating electricity"
          }
        ],
        "correct": 0,
        "hint": "Editors help author and manage source files.",
        "explanation": "Editors help author and manage source files.",
        "realWorldContext": "IDE Tools: VS Code, PyCharm, and Cursor provide code completion, linting, and Git integration.",
        "codeSnippet": "# Editor manages .py scripts and projects"
      },
      {
        "id": 2,
        "tag": "#ExtensionPy",
        "difficulty": "Beginner",
        "question": "Why save as .py?",
        "options": [
          {
            "key": "A",
            "text": "It guarantees correctness"
          },
          {
            "key": "B",
            "text": "It converts code to video"
          },
          {
            "key": "C",
            "text": "It removes execution"
          },
          {
            "key": "D",
            "text": "It conventionally identifies Python source"
          }
        ],
        "correct": 3,
        "hint": "The extension helps tools identify source files.",
        "explanation": "The extension helps tools identify source files.",
        "realWorldContext": "Tooling: The .py extension triggers Python language servers, syntax highlighting, and debuggers.",
        "codeSnippet": "# hello.py -> recognized as Python code"
      },
      {
        "id": 3,
        "tag": "#IntegratedTerminal",
        "difficulty": "Beginner",
        "question": "An integrated terminal helps\u2026",
        "options": [
          {
            "key": "A",
            "text": "Repair hardware"
          },
          {
            "key": "B",
            "text": "Guarantee no bugs"
          },
          {
            "key": "C",
            "text": "Run commands within the editor"
          },
          {
            "key": "D",
            "text": "Increase RAM automatically"
          }
        ],
        "correct": 2,
        "hint": "It provides command-line access in the workspace.",
        "explanation": "It provides command-line access in the workspace.",
        "realWorldContext": "Productivity: Running scripts inside VS Code terminal avoids constantly alt-tabbing between apps.",
        "codeSnippet": "# Ctrl + ` opens VS Code integrated terminal"
      },
      {
        "id": 4,
        "tag": "#WorkspaceOrganization",
        "difficulty": "Beginner",
        "question": "Organized folders help\u2026",
        "options": [
          {
            "key": "A",
            "text": "Hide errors"
          },
          {
            "key": "B",
            "text": "Keep files easy to find"
          },
          {
            "key": "C",
            "text": "Run without Python"
          },
          {
            "key": "D",
            "text": "Guarantee faster internet"
          }
        ],
        "correct": 1,
        "hint": "Organization improves navigation and maintenance.",
        "explanation": "Organization improves navigation and maintenance.",
        "realWorldContext": "Project Layout: Separating `src/`, `tests/`, and `data/` prevents import confusion as code grows.",
        "codeSnippet": "# my_project/\n#   \u251c\u2500\u2500 src/\n#   \u2514\u2500\u2500 tests/"
      },
      {
        "id": 5,
        "tag": "#WorkflowValidation",
        "difficulty": "Beginner",
        "question": "After editor setup, first\u2026",
        "options": [
          {
            "key": "A",
            "text": "Create and run a small test program"
          },
          {
            "key": "B",
            "text": "Install every extension"
          },
          {
            "key": "C",
            "text": "Disable warnings"
          },
          {
            "key": "D",
            "text": "Start a huge project"
          }
        ],
        "correct": 0,
        "hint": "A small test validates the workflow.",
        "explanation": "A small test validates the workflow.",
        "realWorldContext": "Smoke Testing: Writing `print('Hello')` proves the editor, interpreter, and terminal work together.",
        "codeSnippet": "# test.py\nprint('Editor and interpreter connected!')"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "What does a code editor help you do?",
        "blocks": [
          {
            "id": "b1",
            "text": "Write and edit code efficiently",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "Cook dinner",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "Code editors provide syntax highlighting, auto-complete, and integrated terminals."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "Will choosing a code editor alone execute a Python program? Explain briefly.",
        "snippetLines": [
          "# Opened VS Code with code written",
          "# Interpreter is not selected yet"
        ],
        "options": [
          {
            "id": "o1",
            "text": "No, an editor only edits text; a Python interpreter must be installed to run it.",
            "isCorrect": true,
            "note": "The editor relies on the underlying Python interpreter executable."
          },
          {
            "id": "o2",
            "text": "Yes, all editors execute Python without any runtime installed.",
            "isCorrect": false,
            "note": "Editors are not compilers or interpreters by themselves."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A learner types code in a plain notes app and cannot easily run it. What should they configure next?",
        "lines": [
          {
            "line": 1,
            "text": "# Typed in basic Windows Notepad",
            "isBug": true,
            "bugMsg": "Inefficient tooling: Plain notes apps lack syntax highlighting and terminal execution."
          },
          {
            "line": 2,
            "text": "print('Hard to run')",
            "isBug": false
          }
        ],
        "bugLine": 1,
        "patches": [
          {
            "id": "p1",
            "code": "# Switch to VS Code or dedicated IDE with Python extension",
            "label": "Patch A: Use VS Code with Python extension",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "# Change Notepad font to Comic Sans",
            "label": "Patch B: Change font",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write three setup steps for opening a Python file in a code editor.",
        "prefixCode": "# Step 1: Open code editor\n# Step 2: ",
        "slot1Target": "Open project folder",
        "midCode": "\n# Step 3: ",
        "slot2Target": "Create main.py",
        "suffixCode": "\nprint('Workspace ready')",
        "availableTokens": [
          "Open project folder",
          "Create main.py",
          "Delete documents",
          "Uninstall OS"
        ],
        "correctSlot1": "Open project folder",
        "correctSlot2": "Create main.py",
        "expectedOutput": "Workspace ready"
      },
      "l5": {
        "bossName": "IDE Architect",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Describe how you would create, save, and open a file named hello.py in a code editor.",
        "scenario": "IDE Architect tests your complete environment workflow.",
        "phase1Prompt": "What is the proper filename extension for a Python source script?",
        "phase1Options": [
          {
            "id": "a1",
            "text": ".py",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": ".py.txt",
            "isCorrect": false
          },
          {
            "id": "a3",
            "text": ".doc",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write the exact code to save inside hello.py that displays 'Hello World':",
        "phase2Starter": "# hello.py content:\n",
        "phase2Solution": "print('Hello World')",
        "phase2ExpectedOutput": "Hello World"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Beginner Folder Structure",
        "prompt": "Suggest a beginner folder structure in Python comments or prints.",
        "expectedApproach": "Expected: course/module folders with lesson, practice and data folders.",
        "starterCode": "print('Structure: python_course/ -> module_01/ -> lesson.py, practice.py, data/')",
        "solutionCode": "print('Structure: python_course/ -> module_01/ -> lesson.py, practice.py, data/')",
        "expectedOutput": "Structure: python_course/ -> module_01/ -> lesson.py, practice.py, data/",
        "hints": [
          {
            "step": 1,
            "title": "Hierarchy",
            "desc": "Keep course, module, code, and data separated.",
            "code": "print('Structure: python_course/ -> module_01/ -> lesson.py, practice.py, data/')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Creating and Running hello.py",
        "prompt": "Describe creating and running hello.py.",
        "expectedApproach": "Expected: create file, write code, save, run, inspect output.",
        "starterCode": "print('Steps: create file -> write code -> save -> run -> inspect output.')",
        "solutionCode": "print('Steps: create file -> write code -> save -> run -> inspect output.')",
        "expectedOutput": "Steps: create file -> write code -> save -> run -> inspect output.",
        "hints": [
          {
            "step": 1,
            "title": "Workflow",
            "desc": "Create -> write -> save -> run -> inspect.",
            "code": "print('Steps: create file -> write code -> save -> run -> inspect output.')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Diagnose hello.py.txt",
        "prompt": "Diagnose `hello.py.txt` file naming issue.",
        "expectedApproach": "Expected: show extensions and correct the full filename.",
        "starterCode": "print('Issue: hidden .txt extension prevents running as Python; rename to hello.py.')",
        "solutionCode": "print('Issue: hidden .txt extension prevents running as Python; rename to hello.py.')",
        "expectedOutput": "Issue: hidden .txt extension prevents running as Python; rename to hello.py.",
        "hints": [
          {
            "step": 1,
            "title": "Hidden extensions",
            "desc": "Enable 'File name extensions' in Windows Explorer and remove .txt.",
            "code": "print('Issue: hidden .txt extension prevents running as Python; rename to hello.py.')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Three Helpful Editor Features",
        "prompt": "Name three helpful editor features.",
        "expectedApproach": "Expected: syntax highlighting, autocomplete, terminal, debugger or formatter.",
        "starterCode": "print('Features: syntax highlighting, autocomplete, integrated terminal.')",
        "solutionCode": "print('Features: syntax highlighting, autocomplete, integrated terminal.')",
        "expectedOutput": "Features: syntax highlighting, autocomplete, integrated terminal.",
        "hints": [
          {
            "step": 1,
            "title": "IDE Features",
            "desc": "Syntax highlighting, autocomplete, and integrated terminal.",
            "code": "print('Features: syntax highlighting, autocomplete, integrated terminal.')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Reproducible Setup Checklist",
        "prompt": "Make a reproducible setup checklist.",
        "expectedApproach": "Expected: Python version, folders, environment, dependencies and run instructions.",
        "starterCode": "print('Checklist: Python version, folders, environment, dependencies, run instructions.')",
        "solutionCode": "print('Checklist: Python version, folders, environment, dependencies, run instructions.')",
        "expectedOutput": "Checklist: Python version, folders, environment, dependencies, run instructions.",
        "hints": [
          {
            "step": 1,
            "title": "Checklist items",
            "desc": "State Python version, virtualenv, dependencies, and run script.",
            "code": "print('Checklist: Python version, folders, environment, dependencies, run instructions.')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "Editor vs interpreter?",
        "modelAnswer": "Editor writes code; interpreter executes it.",
        "tag": "Core Distinction"
      },
      {
        "id": 2,
        "question": "What is an IDE?",
        "modelAnswer": "An environment combining editing, execution, debugging and project tools.",
        "tag": "Tooling"
      },
      {
        "id": 3,
        "question": "Why use an integrated terminal?",
        "modelAnswer": "Run commands and inspect output within the same workspace.",
        "tag": "Productivity"
      },
      {
        "id": 4,
        "question": "What is syntax highlighting?",
        "modelAnswer": "Visual distinction of keywords, strings and other code elements.",
        "tag": "User Interface"
      },
      {
        "id": 5,
        "question": "How troubleshoot editor execution failure?",
        "modelAnswer": "Check interpreter selection, installation, file extension, save status, command and traceback.",
        "tag": "Troubleshooting"
      }
    ]
  },
  "107": {
    "topicId": 107,
    "topicNumber": 4,
    "topicTitle": "1.4 How Computers Understand Instructions",
    "pdfPages": "Pages 16\u201317",
    "mcqs": [
      {
        "id": 1,
        "tag": "#Scripts",
        "difficulty": "Beginner",
        "question": "A Python script is\u2026",
        "options": [
          {
            "key": "A",
            "text": "Hardware"
          },
          {
            "key": "B",
            "text": "A chart"
          },
          {
            "key": "C",
            "text": "A browser tab"
          },
          {
            "key": "D",
            "text": "A file containing Python statements"
          }
        ],
        "correct": 3,
        "hint": "A script stores instructions for execution.",
        "explanation": "A script stores instructions for execution.",
        "realWorldContext": "Scripting: Scripts automate repetitive data extract and build steps across cloud pipelines.",
        "codeSnippet": "# myscript.py\nprint('Script running')"
      },
      {
        "id": 2,
        "tag": "#REPL",
        "difficulty": "Beginner",
        "question": "Interactive shell is useful for\u2026",
        "options": [
          {
            "key": "A",
            "text": "Replacing project files"
          },
          {
            "key": "B",
            "text": "Making charts without code"
          },
          {
            "key": "C",
            "text": "Trying short expressions immediately"
          },
          {
            "key": "D",
            "text": "Editing hardware"
          }
        ],
        "correct": 2,
        "hint": "The REPL supports quick experiments.",
        "explanation": "The REPL supports quick experiments.",
        "realWorldContext": "Prototyping: Developers jump into python shell to test regex patterns or string slicing instantly.",
        "codeSnippet": ">>> 2 ** 8\n256"
      },
      {
        "id": 3,
        "tag": "#SaveBeforeRun",
        "difficulty": "Beginner",
        "question": "Why save before running?",
        "options": [
          {
            "key": "A",
            "text": "To skip syntax checks"
          },
          {
            "key": "B",
            "text": "The executed file needs the latest changes"
          },
          {
            "key": "C",
            "text": "To increase screen size"
          },
          {
            "key": "D",
            "text": "To install packages"
          }
        ],
        "correct": 1,
        "hint": "Unsaved changes may not be in the executed file.",
        "explanation": "Unsaved changes may not be in the executed file.",
        "realWorldContext": "Common Beginner Pitfall: Editing code without pressing Ctrl+S leaves disk files unchanged.",
        "codeSnippet": "# Tip: Enable 'Auto Save' in VS Code"
      },
      {
        "id": 4,
        "tag": "#Traceback",
        "difficulty": "Beginner",
        "question": "A traceback provides\u2026",
        "options": [
          {
            "key": "A",
            "text": "Error information and call locations"
          },
          {
            "key": "B",
            "text": "Guaranteed correctness"
          },
          {
            "key": "C",
            "text": "Password"
          },
          {
            "key": "D",
            "text": "CPU chart only"
          }
        ],
        "correct": 0,
        "hint": "Tracebacks guide debugging.",
        "explanation": "Tracebacks guide debugging.",
        "realWorldContext": "Debugging: The traceback displays the exact file, line number, and error type (e.g. ValueError).",
        "codeSnippet": "Traceback (most recent call last):\n  File 'app.py', line 4, in <module>"
      },
      {
        "id": 5,
        "tag": "#Debugging",
        "difficulty": "Beginner",
        "question": "Unexpected output: first\u2026",
        "options": [
          {
            "key": "A",
            "text": "Delete Python"
          },
          {
            "key": "B",
            "text": "Assume randomness"
          },
          {
            "key": "C",
            "text": "Ignore it"
          },
          {
            "key": "D",
            "text": "Inspect code, input, output and errors"
          }
        ],
        "correct": 3,
        "hint": "Systematic comparison is the best starting point.",
        "explanation": "Systematic comparison is the best starting point.",
        "realWorldContext": "Engineering Mindset: Compare actual output with expected output methodically before changing code.",
        "codeSnippet": "# Compare: expected vs actual result"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "After writing code, what action makes the computer execute it?",
        "blocks": [
          {
            "id": "b1",
            "text": "Running the script via Python",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "Staring at the screen",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "You must trigger execution via terminal (`python script.py`) or the editor's Run button."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "If a program prints 'Hi', what appears in the output area?",
        "snippetLines": [
          "print('Hi')",
          "# Program executes..."
        ],
        "options": [
          {
            "id": "o1",
            "text": "Hi",
            "isCorrect": true,
            "note": "print('Hi') sends Hi to standard output."
          },
          {
            "id": "o2",
            "text": "print('Hi')",
            "isCorrect": false,
            "note": "Only the contents inside quotes are displayed, not the print function syntax."
          },
          {
            "id": "o3",
            "text": "Blank line",
            "isCorrect": false,
            "note": "The string 'Hi' is printed."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A learner edits a file but runs an older file from another folder. What should they check?",
        "lines": [
          {
            "line": 1,
            "text": "# Edited file: C:/Users/Projects/new/main.py",
            "isBug": false
          },
          {
            "line": 2,
            "text": "$ python C:/Users/old/main.py  # Wrong working directory!",
            "isBug": true,
            "bugMsg": "Directory mismatch: Executing old file path instead of active project."
          },
          {
            "line": 3,
            "text": "# Expected: cd to active directory before running",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "$ cd C:/Users/Projects/new && python main.py",
            "label": "Patch A: Run from active directory",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "$ python --help",
            "label": "Patch B: View help",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write the steps to save a Python file and run it from the terminal or editor.",
        "prefixCode": "# Step 1: Write code in editor\n# Step 2: ",
        "slot1Target": "Save file (Ctrl + S)",
        "midCode": "\n# Step 3: Open terminal\n# Step 4: ",
        "slot2Target": "python filename.py",
        "suffixCode": "\nprint('Execution complete')",
        "availableTokens": [
          "Save file (Ctrl + S)",
          "python filename.py",
          "Delete code",
          "Format computer"
        ],
        "correctSlot1": "Save file (Ctrl + S)",
        "correctSlot2": "python filename.py",
        "expectedOutput": "Execution complete"
      },
      "l5": {
        "bossName": "Terminal Executor",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Give a short run-and-check procedure for a file that should display 'Ready'. Include what to inspect if nothing appears.",
        "scenario": "Terminal Executor demands a self-testing script that proves successful execution.",
        "phase1Prompt": "If running a file produces no output, what is the most likely cause?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "The file had unsaved changes or omitted a print() statement",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "The computer monitor needs replacement",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write the Python script that prints 'Ready':",
        "phase2Starter": "# Output 'Ready':\n",
        "phase2Solution": "print('Ready')",
        "phase2ExpectedOutput": "Ready"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Predict Three Print Statements",
        "prompt": "Predict and print three statements in sequence: First, Second, Third.",
        "expectedApproach": "Expected: output follows execution order.",
        "starterCode": "print('First')\nprint('Second')\nprint('Third')",
        "solutionCode": "print('First')\nprint('Second')\nprint('Third')",
        "expectedOutput": "First\nSecond\nThird",
        "hints": [
          {
            "step": 1,
            "title": "Sequential execution",
            "desc": "Statements execute line by line from top to bottom.",
            "code": "print('First')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Describe Running a File from Terminal",
        "prompt": "Describe running a file from terminal.",
        "expectedApproach": "Expected: navigate to folder and run `python filename.py` or `python3 filename.py`.",
        "starterCode": "print('Run: navigate to folder and type python filename.py')",
        "solutionCode": "print('Run: navigate to folder and type python filename.py')",
        "expectedOutput": "Run: navigate to folder and type python filename.py",
        "hints": [
          {
            "step": 1,
            "title": "CLI command",
            "desc": "cd to folder then invoke python script.py.",
            "code": "print('Run: navigate to folder and type python filename.py')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Why Might an Old Result Appear?",
        "prompt": "Why might an old result appear?",
        "expectedApproach": "Expected: unsaved edits, wrong path/file or run configuration.",
        "starterCode": "print('Cause: unsaved edits, wrong path/file, or run configuration.')",
        "solutionCode": "print('Cause: unsaved edits, wrong path/file, or run configuration.')",
        "expectedOutput": "Cause: unsaved edits, wrong path/file, or run configuration.",
        "hints": [
          {
            "step": 1,
            "title": "Unsaved edits",
            "desc": "Files must be saved to disk before execution.",
            "code": "print('Cause: unsaved edits, wrong path/file, or run configuration.')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Compare 2 + 3 in Shell and Script",
        "prompt": "Compare `2 + 3` in shell and script.",
        "expectedApproach": "Expected: shell displays expression result; script needs print to show it.",
        "starterCode": "print('Shell displays expression result automatically; script requires print().')",
        "solutionCode": "print('Shell displays expression result automatically; script requires print().')",
        "expectedOutput": "Shell displays expression result automatically; script requires print().",
        "hints": [
          {
            "step": 1,
            "title": "REPL vs Script",
            "desc": "Interactive shell echoes results; scripts require print().",
            "code": "print('Shell displays expression result automatically; script requires print().')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Identify Traceback Components",
        "prompt": "Identify file, line and error type in a supplied traceback.",
        "expectedApproach": "Expected: correctly point out all three.",
        "starterCode": "print('Traceback components: 1. File path 2. Line number 3. Error type/message')",
        "solutionCode": "print('Traceback components: 1. File path 2. Line number 3. Error type/message')",
        "expectedOutput": "Traceback components: 1. File path 2. Line number 3. Error type/message",
        "hints": [
          {
            "step": 1,
            "title": "Traceback triage",
            "desc": "Read the file, line, and specific exception at the bottom.",
            "code": "print('Traceback components: 1. File path 2. Line number 3. Error type/message')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "Script vs interactive shell?",
        "modelAnswer": "A script runs saved file instructions; the shell evaluates statements interactively.",
        "tag": "Execution Modes"
      },
      {
        "id": 2,
        "question": "How run a file?",
        "modelAnswer": "Navigate to its folder and use a platform-appropriate Python command.",
        "tag": "CLI"
      },
      {
        "id": 3,
        "question": "Why no visible output?",
        "modelAnswer": "No print/output, code path not executed, or output redirected.",
        "tag": "Debugging"
      },
      {
        "id": 4,
        "question": "What in traceback is useful?",
        "modelAnswer": "Exception type/message, file, line and call sequence.",
        "tag": "Error Analysis"
      },
      {
        "id": 5,
        "question": "How debug unexpected output?",
        "modelAnswer": "Reproduce, inspect inputs, isolate code, compare expected and actual results, test a fix.",
        "tag": "Methodology"
      }
    ]
  },
  "108": {
    "topicId": 108,
    "topicNumber": 6,
    "topicTitle": "1.6 Writing First Python Program",
    "pdfPages": "Pages 18\u201319",
    "mcqs": [
      {
        "id": 1,
        "tag": "#HelloWorld",
        "difficulty": "Beginner",
        "question": "Which displays Hello, World!?",
        "options": [
          {
            "key": "A",
            "text": "display = Hello"
          },
          {
            "key": "B",
            "text": "show['Hello']"
          },
          {
            "key": "C",
            "text": "print('Hello, World!')"
          },
          {
            "key": "D",
            "text": "echo('Hello')"
          }
        ],
        "correct": 2,
        "hint": "print() displays the string.",
        "explanation": "print() displays the string.",
        "realWorldContext": "Tradition: The 'Hello, World!' program was introduced in the 1970s and remains every developer's first test.",
        "codeSnippet": "print('Hello, World!')"
      },
      {
        "id": 2,
        "tag": "#Strings",
        "difficulty": "Beginner",
        "question": "Text literals normally need\u2026",
        "options": [
          {
            "key": "A",
            "text": "Always square brackets"
          },
          {
            "key": "B",
            "text": "Quotation marks"
          },
          {
            "key": "C",
            "text": "A percent sign"
          },
          {
            "key": "D",
            "text": "File extension"
          }
        ],
        "correct": 1,
        "hint": "Quotes mark string literals.",
        "explanation": "Quotes mark string literals.",
        "realWorldContext": "Syntax: In Python, string literals are enclosed in single quotes ('...') or double quotes (\"...\").",
        "codeSnippet": "msg = \"Quoted text literal\""
      },
      {
        "id": 3,
        "tag": "#ProgramExecution",
        "difficulty": "Beginner",
        "question": "Running a program means\u2026",
        "options": [
          {
            "key": "A",
            "text": "Executing instructions"
          },
          {
            "key": "B",
            "text": "Renaming file"
          },
          {
            "key": "C",
            "text": "Reading without execution"
          },
          {
            "key": "D",
            "text": "Changing wallpaper"
          }
        ],
        "correct": 0,
        "hint": "Execution processes instructions.",
        "explanation": "Execution processes instructions.",
        "realWorldContext": "Process Lifecycle: The OS allocates memory, spins up the Python interpreter, and executes bytecodes.",
        "codeSnippet": "# Run: instructions processed line by line"
      },
      {
        "id": 4,
        "tag": "#FirstError",
        "difficulty": "Beginner",
        "question": "When first program fails\u2026",
        "options": [
          {
            "key": "A",
            "text": "Rewrite OS"
          },
          {
            "key": "B",
            "text": "Install random packages"
          },
          {
            "key": "C",
            "text": "Ignore error"
          },
          {
            "key": "D",
            "text": "Read error and inspect nearby code"
          }
        ],
        "correct": 3,
        "hint": "Error details usually provide clues.",
        "explanation": "Error details usually provide clues.",
        "realWorldContext": "Learning Curve: Every experienced developer encounters syntax errors daily; reading the message solves it quickly.",
        "codeSnippet": "# SyntaxError: EOL while scanning string literal -> check quotes!"
      },
      {
        "id": 5,
        "tag": "#ScriptStatements",
        "difficulty": "Beginner",
        "question": "A Python script can contain\u2026",
        "options": [
          {
            "key": "A",
            "text": "No output"
          },
          {
            "key": "B",
            "text": "No saved files"
          },
          {
            "key": "C",
            "text": "Many statements"
          },
          {
            "key": "D",
            "text": "Exactly one statement"
          }
        ],
        "correct": 2,
        "hint": "Scripts can contain multiple statements.",
        "explanation": "Scripts can contain multiple statements.",
        "realWorldContext": "Scalability: A Python script can range from a 1-line script to thousands of modular statements.",
        "codeSnippet": "print('Line 1')\nprint('Line 2')\nprint('Line 3')"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Complete the starter line: print(____).",
        "blocks": [
          {
            "id": "b1",
            "text": "\"Hello, World!\"",
            "kind": "string",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "def class import",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "Passing a quoted string literal inside print() displays it cleanly to the console."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "What does print(\"Hello\") display?",
        "snippetLines": [
          "print(\"Hello\")"
        ],
        "options": [
          {
            "id": "o1",
            "text": "Hello",
            "isCorrect": true,
            "note": "Quotation marks define the string boundaries; the text itself is printed."
          },
          {
            "id": "o2",
            "text": "\"Hello\"",
            "isCorrect": false,
            "note": "Quotes are string syntax and are omitted from terminal display."
          },
          {
            "id": "o3",
            "text": "print(\"Hello\")",
            "isCorrect": false,
            "note": "The function executes rather than printing its own name."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "Fix this line so it runs: print(\"Welcome\"",
        "lines": [
          {
            "line": 1,
            "text": "print(\"Welcome\"",
            "isBug": true,
            "bugMsg": "SyntaxError: '(' was never closed. Missing closing parenthesis ')'."
          },
          {
            "line": 2,
            "text": "# Next statement",
            "isBug": false
          }
        ],
        "bugLine": 1,
        "patches": [
          {
            "id": "p1",
            "code": "print(\"Welcome\")",
            "label": "Patch A: Add closing parenthesis )",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "print \"Welcome\"",
            "label": "Patch B: Remove opening parenthesis",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write a program that displays \u201cMy first program\u201d.",
        "prefixCode": "",
        "slot1Target": "print",
        "midCode": "('",
        "slot2Target": "My first program",
        "suffixCode": "')",
        "availableTokens": [
          "print",
          "My first program",
          "display",
          "console.log",
          "echo"
        ],
        "correctSlot1": "print",
        "correctSlot2": "My first program",
        "expectedOutput": "My first program"
      },
      "l5": {
        "bossName": "First Code Goliath",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Write a program that displays two lines: \u201cFuture IT Industry\u201d and \u201cLearn Today. Earn Tomorrow.\u201d",
        "scenario": "Goliath demands the two-line institution banner to unlock the foundations gate.",
        "phase1Prompt": "Which program structure produces the exact two-line output?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "print('Future IT Industry') followed by print('Learn Today. Earn Tomorrow.')",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "Only one print without quotes",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write the Python code to print both lines:",
        "phase2Starter": "# Print the two lines:\n",
        "phase2Solution": "print('Future IT Industry')\nprint('Learn Today. Earn Tomorrow.')",
        "phase2ExpectedOutput": "Future IT Industry\nLearn Today. Earn Tomorrow."
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Print Welcome to Future IT Industry!",
        "prompt": "Print `Welcome to Future IT Industry!`.",
        "expectedApproach": "Solution: `print('Welcome to Future IT Industry!')`",
        "starterCode": "# Print the welcome message:\n",
        "solutionCode": "print('Welcome to Future IT Industry!')",
        "expectedOutput": "Welcome to Future IT Industry!",
        "hints": [
          {
            "step": 1,
            "title": "Exact string",
            "desc": "Enclose the sentence in quotes inside print().",
            "code": "print('Welcome to Future IT Industry!')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Print Name, Goal, and Subject",
        "prompt": "Print your name, goal and subject on separate lines.",
        "expectedApproach": "Expected: three print calls with quoted strings.",
        "starterCode": "print('Name: Student')\nprint('Goal: Data Analyst')\nprint('Subject: Python')",
        "solutionCode": "print('Name: Student')\nprint('Goal: Data Analyst')\nprint('Subject: Python')",
        "expectedOutput": "Name: Student\nGoal: Data Analyst\nSubject: Python",
        "hints": [
          {
            "step": 1,
            "title": "Three calls",
            "desc": "Use 3 print statements for 3 separate lines.",
            "code": "print('Name: Student')\nprint('Goal: Data Analyst')\nprint('Subject: Python')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Fix Unquoted Print",
        "prompt": "Fix `print(Welcome to Python!)`.",
        "expectedApproach": "Solution: `print('Welcome to Python!')`",
        "starterCode": "# Fix the missing quotation marks:\nprint('Welcome to Python!')",
        "solutionCode": "print('Welcome to Python!')",
        "expectedOutput": "Welcome to Python!",
        "hints": [
          {
            "step": 1,
            "title": "String quotes",
            "desc": "Text literals must be wrapped in quotation marks.",
            "code": "print('Welcome to Python!')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Two-Line Welcome in One Call",
        "prompt": "Print a two-line welcome using one call with newline `\\n`.",
        "expectedApproach": "Solution: `print('Welcome!\\nStart learning Python.')`",
        "starterCode": "# Print two lines using a single print() with \\n:\nprint('Welcome!\\nStart learning Python.')",
        "solutionCode": "print('Welcome!\\nStart learning Python.')",
        "expectedOutput": "Welcome!\nStart learning Python.",
        "hints": [
          {
            "step": 1,
            "title": "Newline character",
            "desc": "Use \\n to insert a line break inside a string.",
            "code": "print('Welcome!\\nStart learning Python.')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Print Title, Separator and Three Topics",
        "prompt": "Print a title, separator and three topics.",
        "expectedApproach": "Expected: correctly quoted strings and readable output.",
        "starterCode": "print('--- PYTHON MODULE 01 ---\\n========================\\n1. Setup\\n2. First Program\\n3. Syntax')",
        "solutionCode": "print('--- PYTHON MODULE 01 ---\\n========================\\n1. Setup\\n2. First Program\\n3. Syntax')",
        "expectedOutput": "--- PYTHON MODULE 01 ---\n========================\n1. Setup\n2. First Program\n3. Syntax",
        "hints": [
          {
            "step": 1,
            "title": "Formatted output",
            "desc": "Combine banner header, divider, and topic lines.",
            "code": "print('--- PYTHON MODULE 01 ---\\n========================\\n1. Setup\\n2. First Program\\n3. Syntax')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "Why write Hello World first?",
        "modelAnswer": "It verifies the edit-save-run workflow and introduces output.",
        "tag": "Learning Process"
      },
      {
        "id": 2,
        "question": "Why quote text in print()?",
        "modelAnswer": "Quotes mark a string literal rather than a variable or expression.",
        "tag": "Syntax"
      },
      {
        "id": 3,
        "question": "print('5') vs print(5)?",
        "modelAnswer": "First is a string, second an integer; displayed text looks similar but types differ.",
        "tag": "Data Types"
      },
      {
        "id": 4,
        "question": "Can a program have multiple statements?",
        "modelAnswer": "Yes, statements generally execute in order subject to control flow.",
        "tag": "Execution"
      },
      {
        "id": 5,
        "question": "How troubleshoot a first program?",
        "modelAnswer": "Check spelling, quotes, parentheses, file extension, save status, run command and traceback.",
        "tag": "Troubleshooting"
      }
    ]
  },
  "109": {
    "topicId": 109,
    "topicNumber": 7,
    "topicTitle": "1.7 Understanding How Code Runs Step-by-Step",
    "pdfPages": "Pages 20\u201321",
    "mcqs": [
      {
        "id": 1,
        "tag": "#BuiltinPrint",
        "difficulty": "Beginner",
        "question": "print() is used for\u2026",
        "options": [
          {
            "key": "A",
            "text": "Creating variables automatically"
          },
          {
            "key": "B",
            "text": "Displaying information"
          },
          {
            "key": "C",
            "text": "Reading files only"
          },
          {
            "key": "D",
            "text": "Installing Python"
          }
        ],
        "correct": 1,
        "hint": "print writes printable representations to output.",
        "explanation": "print writes printable representations to output.",
        "realWorldContext": "Standard Output: In production servers and containers, print() outputs to stdout for logging systems.",
        "codeSnippet": "print('Status: Server online')"
      },
      {
        "id": 2,
        "tag": "#SepParam",
        "difficulty": "Beginner",
        "question": "Default separator between multiple values?",
        "options": [
          {
            "key": "A",
            "text": "Comma without spaces"
          },
          {
            "key": "B",
            "text": "Single space"
          },
          {
            "key": "C",
            "text": "Always a tab"
          },
          {
            "key": "D",
            "text": "No separator"
          }
        ],
        "correct": 1,
        "hint": "Default sep is a single space.",
        "explanation": "Default sep is a single space.",
        "realWorldContext": "Formatting: print('A', 'B') produces 'A B' separated by a single space character by default.",
        "codeSnippet": "print('Apple', 'Banana')  # Output: Apple Banana"
      },
      {
        "id": 3,
        "tag": "#EndParam",
        "difficulty": "Beginner",
        "question": "The `end` parameter controls\u2026",
        "options": [
          {
            "key": "A",
            "text": "Variable type"
          },
          {
            "key": "B",
            "text": "Python installs"
          },
          {
            "key": "C",
            "text": "Filename"
          },
          {
            "key": "D",
            "text": "What follows printed values"
          }
        ],
        "correct": 3,
        "hint": "Default end is a newline.",
        "explanation": "Default end is a newline.",
        "realWorldContext": "Progress Displays: Setting end='' or end='\\r' is widely used to print live download progress bars.",
        "codeSnippet": "print('Loading...', end=' ')  # Doesn't jump to new line"
      },
      {
        "id": 4,
        "tag": "#SepCustom",
        "difficulty": "Beginner",
        "question": "print('A','B',sep='-') displays\u2026",
        "options": [
          {
            "key": "A",
            "text": "AB"
          },
          {
            "key": "B",
            "text": "A,B"
          },
          {
            "key": "C",
            "text": "A B"
          },
          {
            "key": "D",
            "text": "A-B"
          }
        ],
        "correct": 3,
        "hint": "sep sets the separator to a hyphen.",
        "explanation": "sep sets the separator to a hyphen.",
        "realWorldContext": "Data Formatting: Using sep=',' allows fast printing of comma-separated CSV rows directly.",
        "codeSnippet": "print('2026', '10', '10', sep='-')  # 2026-10-10"
      },
      {
        "id": 5,
        "tag": "#MultiplePrints",
        "difficulty": "Beginner",
        "question": "Two separate print calls normally\u2026",
        "options": [
          {
            "key": "A",
            "text": "Raise an error"
          },
          {
            "key": "B",
            "text": "Appear on separate lines"
          },
          {
            "key": "C",
            "text": "Merge into one word"
          },
          {
            "key": "D",
            "text": "Ignore second call"
          }
        ],
        "correct": 1,
        "hint": "Each call ends with a newline by default.",
        "explanation": "Each call ends with a newline by default.",
        "realWorldContext": "Line Breaks: Because end defaults to '\\n', each successive print begins on a fresh line.",
        "codeSnippet": "print('Line 1')\nprint('Line 2')"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Complete: ____(\"Hello\")",
        "blocks": [
          {
            "id": "b1",
            "text": "print",
            "kind": "func",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "input",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "print(\"Hello\") is the built-in function to display text."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "What does print(\"Python\", \"Rocks\") display by default?",
        "snippetLines": [
          "print(\"Python\", \"Rocks\")"
        ],
        "options": [
          {
            "id": "o1",
            "text": "Python Rocks",
            "isCorrect": true,
            "note": "Values separated by commas in print() are joined with a space by default."
          },
          {
            "id": "o2",
            "text": "PythonRocks",
            "isCorrect": false,
            "note": "Without sep='', a single space is automatically placed between arguments."
          },
          {
            "id": "o3",
            "text": "Python, Rocks",
            "isCorrect": false,
            "note": "Commas in the argument list do not appear in the printed text."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "Fix the missing closing parenthesis: print(\"Hello\"",
        "lines": [
          {
            "line": 1,
            "text": "print(\"Hello\"",
            "isBug": true,
            "bugMsg": "SyntaxError: unexpected EOF while parsing / '(' was never closed."
          },
          {
            "line": 2,
            "text": "print(\"Done\")",
            "isBug": false
          }
        ],
        "bugLine": 1,
        "patches": [
          {
            "id": "p1",
            "code": "print(\"Hello\")",
            "label": "Patch A: Add closing parenthesis )",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "print[\"Hello\"]",
            "label": "Patch B: Use square brackets",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write two print() statements that display A and then B on separate lines.",
        "prefixCode": "print('",
        "slot1Target": "A",
        "midCode": "')\nprint('",
        "slot2Target": "B",
        "suffixCode": "')",
        "availableTokens": [
          "A",
          "B",
          "C",
          "D",
          "Z"
        ],
        "correctSlot1": "A",
        "correctSlot2": "B",
        "expectedOutput": "A\nB"
      },
      "l5": {
        "bossName": "Output Colossus",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Use print() to display \u201cFuture IT\u201d and \u201cLearn Today\u201d separated by a hyphen, using sep.",
        "scenario": "Output Colossus tests your mastery of Python's sep parameter.",
        "phase1Prompt": "Which print syntax formats two arguments separated by a hyphen?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "print('Future IT', 'Learn Today', sep='-')",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "print('Future IT' + 'Learn Today' - '-')",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write the exact print statement using sep='-':",
        "phase2Starter": "# Output with sep='-':\n",
        "phase2Solution": "print('Future IT', 'Learn Today', sep='-')",
        "phase2ExpectedOutput": "Future IT-Learn Today"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Print Python-is-fun Separated by Hyphens",
        "prompt": "Print Python-is-fun separated by hyphens using sep.",
        "expectedApproach": "Solution: `print('Python', 'is', 'fun', sep='-')`",
        "starterCode": "# Print with hyphen separator:\nprint('Python', 'is', 'fun', sep='-')",
        "solutionCode": "print('Python', 'is', 'fun', sep='-')",
        "expectedOutput": "Python-is-fun",
        "hints": [
          {
            "step": 1,
            "title": "sep parameter",
            "desc": "Provide sep='-' to join arguments with hyphens.",
            "code": "print('Python', 'is', 'fun', sep='-')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Print Label and Number on Same Line Using end",
        "prompt": "Print a label and number on same line using end.",
        "expectedApproach": "Expected: set `end` so the next print does not start a new line.",
        "starterCode": "print('Score: ', end='')\nprint(95)",
        "solutionCode": "print('Score: ', end='')\nprint(95)",
        "expectedOutput": "Score: 95",
        "hints": [
          {
            "step": 1,
            "title": "end parameter",
            "desc": "Set end='' to prevent the first call from emitting a newline.",
            "code": "print('Score: ', end='')\nprint(95)"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Create a Receipt Line",
        "prompt": "Create a receipt with item ('Book'), quantity (2) and price ($30).",
        "expectedApproach": "Expected: multiple arguments and readable separator.",
        "starterCode": "print('Book', 'Qty: 2', '$30', sep=' | ')",
        "solutionCode": "print('Book', 'Qty: 2', '$30', sep=' | ')",
        "expectedOutput": "Book | Qty: 2 | $30",
        "hints": [
          {
            "step": 1,
            "title": "Custom separator",
            "desc": "Use sep=' | ' to make a clean receipt column divider.",
            "code": "print('Book', 'Qty: 2', '$30', sep=' | ')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Predict Complex Print Parameters",
        "prompt": "Predict output of `print('A','B',sep=':',end='!')`.",
        "expectedApproach": "Expected: `A:B!`",
        "starterCode": "print('A', 'B', sep=':', end='!')",
        "solutionCode": "print('A', 'B', sep=':', end='!')",
        "expectedOutput": "A:B!",
        "hints": [
          {
            "step": 1,
            "title": "Combine sep & end",
            "desc": "sep joins arguments with ':', end appends '!' at the finish.",
            "code": "print('A', 'B', sep=':', end='!')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Formatted Three-Line Course Summary",
        "prompt": "Print a formatted three-line course summary.",
        "expectedApproach": "Expected: correct line breaks and readable output.",
        "starterCode": "print('Course: Python 3\\nModule: 01 Introduction\\nStatus: In Progress')",
        "solutionCode": "print('Course: Python 3\\nModule: 01 Introduction\\nStatus: In Progress')",
        "expectedOutput": "Course: Python 3\nModule: 01 Introduction\nStatus: In Progress",
        "hints": [
          {
            "step": 1,
            "title": "Line breaks",
            "desc": "Use newline character \\n to format readable multi-line summaries.",
            "code": "print('Course: Python 3\\nModule: 01 Introduction\\nStatus: In Progress')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "What does print() do?",
        "modelAnswer": "Writes printable representations of values to the output stream.",
        "tag": "Standard I/O"
      },
      {
        "id": 2,
        "question": "What are sep and end?",
        "modelAnswer": "sep separates multiple values; end is appended after output.",
        "tag": "Function Parameters"
      },
      {
        "id": 3,
        "question": "What does print(1,2,3) display by default?",
        "modelAnswer": "`1 2 3` followed by a newline.",
        "tag": "Defaults"
      },
      {
        "id": 4,
        "question": "How print without newline?",
        "modelAnswer": "Use `end=''` or another chosen ending.",
        "tag": "Control Flow"
      },
      {
        "id": 5,
        "question": "Why use f-strings?",
        "modelAnswer": "They make variable interpolation and formatted output readable.",
        "tag": "Modern Python"
      }
    ]
  },
  "110": {
    "topicId": 110,
    "topicNumber": 11,
    "topicTitle": "1.11 Python Syntax and Indentation",
    "pdfPages": "Pages 22\u201323",
    "mcqs": [
      {
        "id": 1,
        "tag": "#Syntax",
        "difficulty": "Beginner",
        "question": "Syntax is\u2026",
        "options": [
          {
            "key": "A",
            "text": "Rules for valid statements"
          },
          {
            "key": "B",
            "text": "Physical shape"
          },
          {
            "key": "C",
            "text": "Chart style"
          },
          {
            "key": "D",
            "text": "Backup"
          }
        ],
        "correct": 0,
        "hint": "Syntax determines valid code structure.",
        "explanation": "Syntax determines valid code structure.",
        "realWorldContext": "Grammar: Just like grammar in human languages, programming syntax defines how instructions must be constructed.",
        "codeSnippet": "# Valid syntax structure\ndef greet(name):\n    return f'Hello {name}'"
      },
      {
        "id": 2,
        "tag": "#FunctionCall",
        "difficulty": "Beginner",
        "question": "A function call commonly ends with\u2026",
        "options": [
          {
            "key": "A",
            "text": "Colon after every line"
          },
          {
            "key": "B",
            "text": "Dollar sign"
          },
          {
            "key": "C",
            "text": "Question mark"
          },
          {
            "key": "D",
            "text": "Closing parenthesis )"
          }
        ],
        "correct": 3,
        "hint": "Calls use matching parentheses.",
        "explanation": "Calls use matching parentheses.",
        "realWorldContext": "Delimiters: Every opening parenthesis `(` must have a matching closing parenthesis `)`.",
        "codeSnippet": "result = calculate_tax(100)"
      },
      {
        "id": 3,
        "tag": "#Indentation",
        "difficulty": "Beginner",
        "question": "Indentation in Python\u2026",
        "options": [
          {
            "key": "A",
            "text": "Renames variables"
          },
          {
            "key": "B",
            "text": "Installs modules"
          },
          {
            "key": "C",
            "text": "Defines code blocks"
          },
          {
            "key": "D",
            "text": "Changes language automatically"
          }
        ],
        "correct": 2,
        "hint": "Indentation is significant for blocks.",
        "explanation": "Indentation is significant for blocks.",
        "realWorldContext": "Python Philosophy: Unlike C/Java which use curly braces `{ }`, Python enforces 4-space whitespace indentation.",
        "codeSnippet": "if is_active:\n    # 4 spaces indentation\n    process_user()"
      },
      {
        "id": 4,
        "tag": "#ConditionalHeader",
        "difficulty": "Beginner",
        "question": "Correct conditional start?",
        "options": [
          {
            "key": "A",
            "text": "when score >= 40"
          },
          {
            "key": "B",
            "text": "if score >= 40:"
          },
          {
            "key": "C",
            "text": "if score >= 40 then"
          },
          {
            "key": "D",
            "text": "if score do"
          }
        ],
        "correct": 1,
        "hint": "Python uses a colon before the indented suite.",
        "explanation": "Python uses a colon before the indented suite.",
        "realWorldContext": "Keywords: Python uses `if <condition>:` with a required colon to introduce an indented block.",
        "codeSnippet": "if score >= 40:\n    print('Pass')"
      },
      {
        "id": 5,
        "tag": "#Delimiters",
        "difficulty": "Beginner",
        "question": "Unmatched quotes may cause\u2026",
        "options": [
          {
            "key": "A",
            "text": "SyntaxError"
          },
          {
            "key": "B",
            "text": "Automatic correction always"
          },
          {
            "key": "C",
            "text": "Shutdown"
          },
          {
            "key": "D",
            "text": "Always correct output"
          }
        ],
        "correct": 0,
        "hint": "Unclosed delimiters commonly break parsing.",
        "explanation": "Unclosed delimiters commonly break parsing.",
        "realWorldContext": "Parser Errors: Opening a single quote `'` and closing with double `\"` or omitting it triggers SyntaxError.",
        "codeSnippet": "# SyntaxError: unterminated string literal\n# text = 'Hello"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Which character begins a single-line Python comment: # or @?",
        "blocks": [
          {
            "id": "b1",
            "text": "# (Hash symbol)",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "@ (At symbol)",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "Python comments begin with the hash `#` symbol. (@ is used for decorators)."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "Does Python execute a line that begins with # as a normal instruction?",
        "snippetLines": [
          "# print('This is a comment line')",
          "print('Only this runs')"
        ],
        "options": [
          {
            "id": "o1",
            "text": "No, comments are completely ignored by the Python interpreter",
            "isCorrect": true,
            "note": "Lines starting with # are stripped during tokenization."
          },
          {
            "id": "o2",
            "text": "Yes, it executes both lines",
            "isCorrect": false,
            "note": "Comments are never executed as statements."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "Fix the indentation of this snippet so the print statement belongs inside the if block: if True: / print(\"Hi\")",
        "lines": [
          {
            "line": 1,
            "text": "if True:",
            "isBug": false
          },
          {
            "line": 2,
            "text": "print(\"Hi\")  # IndentationError: expected an indented block",
            "isBug": true,
            "bugMsg": "IndentationError: expected an indented block after 'if' statement on line 1"
          },
          {
            "line": 3,
            "text": "print('Done')",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "    print(\"Hi\")  # Indented with 4 spaces",
            "label": "Patch A: Indent with 4 spaces inside block",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "print(\"Hi\");",
            "label": "Patch B: Add semicolon",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write a two-line program with correct syntax and indentation that displays \u201cStart\u201d then \u201cDone\u201d.",
        "prefixCode": "print('",
        "slot1Target": "Start",
        "midCode": "')\nprint('",
        "slot2Target": "Done",
        "suffixCode": "')",
        "availableTokens": [
          "Start",
          "Done",
          "Pause",
          "Crash",
          "Stop"
        ],
        "correctSlot1": "Start",
        "correctSlot2": "Done",
        "expectedOutput": "Start\nDone"
      },
      "l5": {
        "bossName": "Syntax Sovereign",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Write a small, correctly indented Python script with a comment explaining its purpose and one print() statement.",
        "scenario": "Syntax Sovereign checks whether your code follows strict indentation and comment conventions.",
        "phase1Prompt": "Which line correctly starts an indented block in Python?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "if valid == True:",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "if valid == True then",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write a script with comment `# Print greeting` and `print('Hello')`:",
        "phase2Starter": "# Write script below:\n",
        "phase2Solution": "# Print greeting\nprint('Hello')",
        "phase2ExpectedOutput": "Hello"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Fix Unclosed Parenthesis",
        "prompt": "Fix `print('Hello'`.",
        "expectedApproach": "Solution: `print('Hello')`",
        "starterCode": "# Add missing closing parenthesis:\nprint('Hello')",
        "solutionCode": "print('Hello')",
        "expectedOutput": "Hello",
        "hints": [
          {
            "step": 1,
            "title": "Matching delimiters",
            "desc": "Every opening parenthesis requires a closing parenthesis.",
            "code": "print('Hello')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Fix Missing Colon in Conditional",
        "prompt": "Fix `if score >= 40 print('Pass')`.",
        "expectedApproach": "Expected: colon after condition and indented body.",
        "starterCode": "score = 50\n# Fix missing colon and indentation:\nif score >= 40:\n    print('Pass')",
        "solutionCode": "score = 50\nif score >= 40:\n    print('Pass')",
        "expectedOutput": "Pass",
        "hints": [
          {
            "step": 1,
            "title": "Colon and newline",
            "desc": "Place a colon after the condition and indent the next line.",
            "code": "if score >= 40:\n    print('Pass')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Format Two-Line If Block",
        "prompt": "Format a two-line if block correctly.",
        "expectedApproach": "Expected: colon, newline, consistently indented body.",
        "starterCode": "active = True\nif active:\n    print('Active session')\n    print('User authorized')",
        "solutionCode": "active = True\nif active:\n    print('Active session')\n    print('User authorized')",
        "expectedOutput": "Active session\nUser authorized",
        "hints": [
          {
            "step": 1,
            "title": "Consistent indentation",
            "desc": "Both statements inside the if block must share the exact same indentation.",
            "code": "if active:\n    print('Active session')\n    print('User authorized')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Fix Unexpected Top-Level Indentation",
        "prompt": "Fix unexpected top-level indentation.",
        "expectedApproach": "Expected: remove indentation unless inside a block.",
        "starterCode": "# Remove spaces before print:\nprint('Valid top-level code')",
        "solutionCode": "print('Valid top-level code')",
        "expectedOutput": "Valid top-level code",
        "hints": [
          {
            "step": 1,
            "title": "Top-level zero indent",
            "desc": "Statements outside functions and loops must start at column 0 without leading spaces.",
            "code": "print('Valid top-level code')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Find Missing Delimiters / Colon",
        "prompt": "Find missing delimiters/colon in a code snippet.",
        "expectedApproach": "Expected: identify and correct each syntax issue.",
        "starterCode": "x = 10\nif x > 5:\n    print('x is greater than 5')",
        "solutionCode": "x = 10\nif x > 5:\n    print('x is greater than 5')",
        "expectedOutput": "x is greater than 5",
        "hints": [
          {
            "step": 1,
            "title": "Syntax check",
            "desc": "Ensure colon after condition and closed quotes in print.",
            "code": "if x > 5:\n    print('x is greater than 5')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "What is Python syntax?",
        "modelAnswer": "Rules governing how statements and expressions are written.",
        "tag": "Syntax"
      },
      {
        "id": 2,
        "question": "Why is indentation important?",
        "modelAnswer": "It defines suites such as conditional and loop bodies.",
        "tag": "Language Design"
      },
      {
        "id": 3,
        "question": "What is SyntaxError?",
        "modelAnswer": "Python cannot parse code according to its grammar.",
        "tag": "Error Types"
      },
      {
        "id": 4,
        "question": "Why keep indentation consistent?",
        "modelAnswer": "Inconsistent indentation can cause errors or alter block structure.",
        "tag": "Best Practices"
      },
      {
        "id": 5,
        "question": "How prevent syntax errors?",
        "modelAnswer": "Use highlighting, consistent formatting, read errors and run small tests.",
        "tag": "Methodology"
      }
    ]
  },
  "111": {
    "topicId": 111,
    "topicNumber": 12,
    "topicTitle": "1.12 Comments in Python",
    "pdfPages": "Pages 24\u201325",
    "mcqs": [
      {
        "id": 1,
        "tag": "#SingleLineComment",
        "difficulty": "Beginner",
        "question": "Single-line comment starts with\u2026",
        "options": [
          {
            "key": "A",
            "text": "//"
          },
          {
            "key": "B",
            "text": "<!--"
          },
          {
            "key": "C",
            "text": "**"
          },
          {
            "key": "D",
            "text": "#"
          }
        ],
        "correct": 3,
        "hint": "Python comments begin with #.",
        "explanation": "Python comments begin with #.",
        "realWorldContext": "Cross-Language: While JS/Java use //, Python uses # for single-line comments.",
        "codeSnippet": "# This is a comment in Python"
      },
      {
        "id": 2,
        "tag": "#CommentExecution",
        "difficulty": "Beginner",
        "question": "Do comments execute as statements?",
        "options": [
          {
            "key": "A",
            "text": "Only capitals"
          },
          {
            "key": "B",
            "text": "Only after numbers"
          },
          {
            "key": "C",
            "text": "No"
          },
          {
            "key": "D",
            "text": "Yes, always"
          }
        ],
        "correct": 2,
        "hint": "Comments are for human readers.",
        "explanation": "Comments are for human readers.",
        "realWorldContext": "Interpreter behavior: The interpreter ignores comments completely; they have zero runtime performance cost.",
        "codeSnippet": "# Ignored completely at runtime\nx = 100"
      },
      {
        "id": 3,
        "tag": "#UsefulComment",
        "difficulty": "Beginner",
        "question": "A useful comment\u2026",
        "options": [
          {
            "key": "A",
            "text": "Contains a password"
          },
          {
            "key": "B",
            "text": "Explains non-obvious intent"
          },
          {
            "key": "C",
            "text": "Repeats every line"
          },
          {
            "key": "D",
            "text": "Is unrelated"
          }
        ],
        "correct": 1,
        "hint": "Good comments explain reasoning or assumptions.",
        "explanation": "Good comments explain reasoning or assumptions.",
        "realWorldContext": "Clean Code: Comment 'why', not 'what'. E.g., explain the business discount policy rather than 'x = x - 5'.",
        "codeSnippet": "# Apply 15% discount per Q4 promotional policy\nprice *= 0.85"
      },
      {
        "id": 4,
        "tag": "#BusinessRules",
        "difficulty": "Beginner",
        "question": "A comment is useful for\u2026",
        "options": [
          {
            "key": "A",
            "text": "Documenting a non-obvious business rule"
          },
          {
            "key": "B",
            "text": "Replacing variable names"
          },
          {
            "key": "C",
            "text": "Hiding bugs permanently"
          },
          {
            "key": "D",
            "text": "Guaranteeing speed"
          }
        ],
        "correct": 0,
        "hint": "Comments can clarify intent.",
        "explanation": "Comments can clarify intent.",
        "realWorldContext": "Knowledge Transfer: Teammates reviewing code 6 months later rely on comments to understand non-obvious edge cases.",
        "codeSnippet": "# Special edge case: Free shipping applies only if weight < 5kg"
      },
      {
        "id": 5,
        "tag": "#Docstrings",
        "difficulty": "Beginner",
        "question": "A docstring documents\u2026",
        "options": [
          {
            "key": "A",
            "text": "Every variable type automatically"
          },
          {
            "key": "B",
            "text": "Every output"
          },
          {
            "key": "C",
            "text": "File endings"
          },
          {
            "key": "D",
            "text": "Modules, classes or functions"
          }
        ],
        "correct": 3,
        "hint": "Docstrings document code objects and may be accessed at runtime.",
        "explanation": "Docstrings document code objects and may be accessed at runtime.",
        "realWorldContext": "Documentation: Multi-line triple quotes (\"\"\"...\"\"\") right below a function define its official __doc__ attribute.",
        "codeSnippet": "def calc(x):\n    \"\"\"Calculate total with tax.\"\"\"\n    return x * 1.1"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Add the comment symbol to this note: This program welcomes the learner.",
        "blocks": [
          {
            "id": "b1",
            "text": "# This program welcomes the learner",
            "kind": "comment",
            "bg": "#fefce8",
            "textCol": "#a16207",
            "borderCol": "#fef08a"
          },
          {
            "id": "b2",
            "text": "// This program welcomes the learner",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "Python uses the # character to declare single-line comments."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "Does # print(\"Hello\") display Hello?",
        "snippetLines": [
          "# print(\"Hello\")",
          "print(\"World\")"
        ],
        "options": [
          {
            "id": "o1",
            "text": "No, because the # symbol comments out the line so it does not execute.",
            "isCorrect": true,
            "note": "Only 'World' will be printed; 'Hello' is commented out."
          },
          {
            "id": "o2",
            "text": "Yes, it still displays Hello",
            "isCorrect": false,
            "note": "Commented statements are bypassed by the interpreter."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "A comment accidentally hides a needed instruction. Explain how to make the instruction executable again.",
        "lines": [
          {
            "line": 1,
            "text": "user_name = 'Alex'",
            "isBug": false
          },
          {
            "line": 2,
            "text": "# print(f'Welcome, {user_name}!')  # Accidentally commented out!",
            "isBug": true,
            "bugMsg": "Commented-out Code: The output statement is disabled by leading #."
          },
          {
            "line": 3,
            "text": "# Program exits silently",
            "isBug": false
          }
        ],
        "bugLine": 2,
        "patches": [
          {
            "id": "p1",
            "code": "print(f'Welcome, {user_name}!')  # Remove the leading #",
            "label": "Patch A: Remove leading # to uncomment",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "## print(f'Welcome, {user_name}!')",
            "label": "Patch B: Add another #",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Write one comment followed by a print() statement.",
        "prefixCode": "# ",
        "slot1Target": "Greeting message",
        "midCode": "\nprint('",
        "slot2Target": "Hello Learner",
        "suffixCode": "')",
        "availableTokens": [
          "Greeting message",
          "Hello Learner",
          "Delete file",
          "Shut down"
        ],
        "correctSlot1": "Greeting message",
        "correctSlot2": "Hello Learner",
        "expectedOutput": "Hello Learner"
      },
      "l5": {
        "bossName": "Docstring Master",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Write a two-line welcome script: first add a useful comment, then display \u201cWelcome to Python\u201d.",
        "scenario": "Docstring Master challenges you to document code cleanly before executing.",
        "phase1Prompt": "What is the proper syntax for a useful header comment?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "# Display welcome message to user",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "<!-- Display welcome message -->",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Write the two-line script (comment + print):",
        "phase2Starter": "# Write your comment and print below:\n",
        "phase2Solution": "# Welcome script\nprint('Welcome to Python')",
        "phase2ExpectedOutput": "Welcome to Python"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Comment Revenue Formula Purpose",
        "prompt": "Comment why revenue is quantity times unit price.",
        "expectedApproach": "Expected: explain business meaning, not just restate syntax.",
        "starterCode": "# Revenue is total earnings: quantity sold multiplied by unit price\nquantity = 10\nprice = 20\ntotal = quantity * price\nprint('Total:', total)",
        "solutionCode": "# Revenue is total earnings: quantity sold multiplied by unit price\nquantity = 10\nprice = 20\ntotal = quantity * price\nprint('Total:', total)",
        "expectedOutput": "Total: 200",
        "hints": [
          {
            "step": 1,
            "title": "Explain 'Why'",
            "desc": "Explain the business meaning: total earnings before deductions.",
            "code": "# Revenue is total earnings: quantity sold multiplied by unit price"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Script with Two Helpful Comments",
        "prompt": "Write a script with two helpful comments.",
        "expectedApproach": "Expected: comments begin with # and do not alter execution.",
        "starterCode": "# Step 1: Set discount threshold\nlimit = 50\n# Step 2: Display status\nprint('Limit:', limit)",
        "solutionCode": "# Step 1: Set discount threshold\nlimit = 50\n# Step 2: Display status\nprint('Limit:', limit)",
        "expectedOutput": "Limit: 50",
        "hints": [
          {
            "step": 1,
            "title": "Helpful notes",
            "desc": "Add two comments clarifying the steps.",
            "code": "# Step 1: Set discount threshold\nlimit = 50\n# Step 2: Display status\nprint('Limit:', limit)"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Improve # add Comment",
        "prompt": "Improve `# add` above `total=price*quantity`.",
        "expectedApproach": "Expected: e.g. `# Calculate total revenue for this item.`",
        "starterCode": "# Calculate total revenue for this item\nprice = 15\nquantity = 4\ntotal = price * quantity\nprint(total)",
        "solutionCode": "# Calculate total revenue for this item\nprice = 15\nquantity = 4\ntotal = price * quantity\nprint(total)",
        "expectedOutput": "60",
        "hints": [
          {
            "step": 1,
            "title": "Meaningful comments",
            "desc": "Replace vague '# add' with '# Calculate total revenue for this item'.",
            "code": "# Calculate total revenue for this item"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Docstring for Celsius-to-Fahrenheit",
        "prompt": "Write a docstring for Celsius-to-Fahrenheit conversion.",
        "expectedApproach": "Expected: describe purpose, inputs and returned value.",
        "starterCode": "def to_fahrenheit(c):\n    \"\"\"Convert temperature from Celsius to Fahrenheit.\"\"\"\n    return (c * 9/5) + 32\n\nprint(to_fahrenheit(0))",
        "solutionCode": "def to_fahrenheit(c):\n    \"\"\"Convert temperature from Celsius to Fahrenheit.\"\"\"\n    return (c * 9/5) + 32\n\nprint(to_fahrenheit(0))",
        "expectedOutput": "32.0",
        "hints": [
          {
            "step": 1,
            "title": "Triple quotes",
            "desc": "Use \"\"\"Convert temperature from Celsius to Fahrenheit.\"\"\" right after def.",
            "code": "\"\"\"Convert temperature from Celsius to Fahrenheit.\"\"\""
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Why Does # print('Hello') Not Display Text?",
        "prompt": "Why does `# print('Hello')` not display text?",
        "expectedApproach": "Expected: the statement is commented out.",
        "starterCode": "print('The statement is commented out and ignored by the interpreter.')",
        "solutionCode": "print('The statement is commented out and ignored by the interpreter.')",
        "expectedOutput": "The statement is commented out and ignored by the interpreter.",
        "hints": [
          {
            "step": 1,
            "title": "Comment behavior",
            "desc": "The leading # prevents execution.",
            "code": "print('The statement is commented out and ignored by the interpreter.')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "What is a comment?",
        "modelAnswer": "A note for humans ignored as a normal executable statement.",
        "tag": "Documentation"
      },
      {
        "id": 2,
        "question": "How write a single-line comment?",
        "modelAnswer": "Begin it with #.",
        "tag": "Syntax"
      },
      {
        "id": 3,
        "question": "What makes a comment useful?",
        "modelAnswer": "It explains intent, assumptions or non-obvious decisions.",
        "tag": "Code Quality"
      },
      {
        "id": 4,
        "question": "Docstring vs comment?",
        "modelAnswer": "A docstring is a string literal documenting a module/class/function; a comment is ignored by normal execution.",
        "tag": "Advanced Python"
      },
      {
        "id": 5,
        "question": "Can too many comments be harmful?",
        "modelAnswer": "Yes, repetitive or outdated comments add noise; keep useful context.",
        "tag": "Best Practices"
      }
    ]
  },
  "112": {
    "topicId": 112,
    "topicNumber": 8,
    "topicTitle": "1.8 Common Beginner Mistakes and How to Avoid Them",
    "pdfPages": "Pages 26\u201327",
    "mcqs": [
      {
        "id": 1,
        "tag": "#SyntaxError",
        "difficulty": "Beginner",
        "question": "A SyntaxError can be caused by\u2026",
        "options": [
          {
            "key": "A",
            "text": "Comment alone"
          },
          {
            "key": "B",
            "text": "Successful print"
          },
          {
            "key": "C",
            "text": "Missing quote or parenthesis"
          },
          {
            "key": "D",
            "text": "Valid integer"
          }
        ],
        "correct": 2,
        "hint": "Unclosed delimiters commonly prevent parsing.",
        "explanation": "Unclosed delimiters commonly prevent parsing.",
        "realWorldContext": "Compiler / Parser: SyntaxError happens before runtime code execution starts because grammar parsing failed.",
        "codeSnippet": "# SyntaxError: '(' was never closed\n# print('Missing paren'"
      },
      {
        "id": 2,
        "tag": "#NameError",
        "difficulty": "Beginner",
        "question": "NameError usually means\u2026",
        "options": [
          {
            "key": "A",
            "text": "Colour issue"
          },
          {
            "key": "B",
            "text": "A name is not defined/available"
          },
          {
            "key": "C",
            "text": "The result is guaranteed correct"
          },
          {
            "key": "D",
            "text": "Printer offline"
          }
        ],
        "correct": 1,
        "hint": "A name may be misspelled or unavailable in scope.",
        "explanation": "A name may be misspelled or unavailable in scope.",
        "realWorldContext": "Variable Scope: Typos like `prinnt()` or referencing `user_id` before assigning it trigger NameError.",
        "codeSnippet": "# NameError: name 'totla' is not defined (typo for 'total')"
      },
      {
        "id": 3,
        "tag": "#IndentationError",
        "difficulty": "Beginner",
        "question": "IndentationError may result from\u2026",
        "options": [
          {
            "key": "A",
            "text": "Invalid block indentation"
          },
          {
            "key": "B",
            "text": "Correct string"
          },
          {
            "key": "C",
            "text": "Comment"
          },
          {
            "key": "D",
            "text": "Valid integer"
          }
        ],
        "correct": 0,
        "hint": "Python requires valid indentation.",
        "explanation": "Python requires valid indentation.",
        "realWorldContext": "Code Blocks: Mixing tabs and spaces or leaving an if statement body unindented causes IndentationError.",
        "codeSnippet": "# IndentationError: unexpected indent"
      },
      {
        "id": 4,
        "tag": "#TracebackInspection",
        "difficulty": "Beginner",
        "question": "Why read full error text?",
        "options": [
          {
            "key": "A",
            "text": "It fixes everything automatically"
          },
          {
            "key": "B",
            "text": "It hides faulty line"
          },
          {
            "key": "C",
            "text": "It changes program goal"
          },
          {
            "key": "D",
            "text": "It gives clues about type and location"
          }
        ],
        "correct": 3,
        "hint": "Tracebacks guide troubleshooting.",
        "explanation": "Tracebacks guide troubleshooting.",
        "realWorldContext": "Developer Skills: Reading the bottom line of the traceback immediately tells you the exact exception and line number.",
        "codeSnippet": "File \"main.py\", line 12\n  print(\"Hi\"\n            ^\nSyntaxError: '(' was never closed"
      },
      {
        "id": 5,
        "tag": "#DebugStrategy",
        "difficulty": "Beginner",
        "question": "Best approach to a small syntax issue?",
        "options": [
          {
            "key": "A",
            "text": "Ignore message"
          },
          {
            "key": "B",
            "text": "Reinstall OS immediately"
          },
          {
            "key": "C",
            "text": "Targeted fix and rerun"
          },
          {
            "key": "D",
            "text": "Change unrelated lines"
          }
        ],
        "correct": 2,
        "hint": "One targeted change makes debugging easier.",
        "explanation": "One targeted change makes debugging easier.",
        "realWorldContext": "Scientific Debugging: Make one precise fix, save, rerun, and verify the effect.",
        "codeSnippet": "# Fix targeted line -> Save -> Rerun"
      }
    ],
    "game": {
      "l1": {
        "title": "Warm Up \u2014 Code Puzzle",
        "question": "Which symbol is missing at the end of print(\"Hi\"?",
        "blocks": [
          {
            "id": "b1",
            "text": ") (Closing parenthesis)",
            "kind": "correct",
            "bg": "#f0fdf4",
            "textCol": "#15803d",
            "borderCol": "#bbf7d0"
          },
          {
            "id": "b2",
            "text": "} (Closing curly brace)",
            "kind": "wrong",
            "bg": "#fef2f2",
            "textCol": "#b91c1c",
            "borderCol": "#fecaca"
          }
        ],
        "correctOrder": [
          "b1"
        ],
        "explanation": "The function call opened with `(` so it must close with `)`."
      },
      "l2": {
        "title": "Think \u2014 Predict Output",
        "question": "Will print(\"Hi\" without a closing parenthesis run successfully?",
        "snippetLines": [
          "print(\"Hi\""
        ],
        "options": [
          {
            "id": "o1",
            "text": "No, it raises a SyntaxError before execution",
            "isCorrect": true,
            "note": "Python's parser detects unclosed parentheses and refuses to execute."
          },
          {
            "id": "o2",
            "text": "Yes, Python automatically closes it",
            "isCorrect": false,
            "note": "Python does not guess missing syntax delimiters."
          }
        ]
      },
      "l3": {
        "title": "Debug \u2014 Bug Hunter",
        "question": "Fix this statement: print(\"Hello\"",
        "lines": [
          {
            "line": 1,
            "text": "print(\"Hello\"",
            "isBug": true,
            "bugMsg": "SyntaxError: unexpected EOF while parsing"
          },
          {
            "line": 2,
            "text": "print(\"Done\")",
            "isBug": false
          }
        ],
        "bugLine": 1,
        "patches": [
          {
            "id": "p1",
            "code": "print(\"Hello\")",
            "label": "Patch A: Add closing parenthesis )",
            "isCorrect": true
          },
          {
            "id": "p2",
            "code": "echo(\"Hello\")",
            "label": "Patch B: Use echo",
            "isCorrect": false
          }
        ]
      },
      "l4": {
        "title": "Build \u2014 Build & Run",
        "question": "Correct this code so it prints Done: print(\"Done\"",
        "prefixCode": "print('",
        "slot1Target": "Done",
        "midCode": "')",
        "slot2Target": "# Successfully closed",
        "suffixCode": "",
        "availableTokens": [
          "Done",
          "# Successfully closed",
          "Fail",
          "Delete"
        ],
        "correctSlot1": "Done",
        "correctSlot2": "# Successfully closed",
        "expectedOutput": "Done"
      },
      "l5": {
        "bossName": "Syntax Overlord",
        "title": "Boss Fight \u2014 Real Coding",
        "question": "Inspect this code and rewrite it correctly: print(\"Future IT)",
        "scenario": "Syntax Overlord tests your error isolation ability.",
        "phase1Prompt": "What error does print(\"Future IT) produce?",
        "phase1Options": [
          {
            "id": "a1",
            "text": "SyntaxError: unterminated string literal (missing closing quote)",
            "isCorrect": true
          },
          {
            "id": "a2",
            "text": "ZeroDivisionError",
            "isCorrect": false
          }
        ],
        "phase2Prompt": "Rewrite print(\"Future IT) correctly with matching quotation mark and parenthesis:",
        "phase2Starter": "# Rewrite code below:\n",
        "phase2Solution": "print('Future IT')",
        "phase2ExpectedOutput": "Future IT"
      }
    },
    "codingChallenges": [
      {
        "id": 1,
        "title": "Challenge 1: Fix Unterminated String",
        "prompt": "Fix `print('Hello)`.",
        "expectedApproach": "Solution: `print('Hello')`",
        "starterCode": "# Add missing closing quote:\nprint('Hello')",
        "solutionCode": "print('Hello')",
        "expectedOutput": "Hello",
        "hints": [
          {
            "step": 1,
            "title": "Matching quotes",
            "desc": "Single quote must be closed with a matching single quote.",
            "code": "print('Hello')"
          }
        ]
      },
      {
        "id": 2,
        "title": "Challenge 2: Fix Typo NameError in pritn",
        "prompt": "Fix `pritn('Welcome')` and explain.",
        "expectedApproach": "Solution: `print('Welcome')`; typo would typically raise NameError.",
        "starterCode": "# Fix the misspelled function name:\nprint('Welcome')",
        "solutionCode": "print('Welcome')",
        "expectedOutput": "Welcome",
        "hints": [
          {
            "step": 1,
            "title": "Function typo",
            "desc": "Replace 'pritn' with 'print'.",
            "code": "print('Welcome')"
          }
        ]
      },
      {
        "id": 3,
        "title": "Challenge 3: Fix Missing Colon and Indentation",
        "prompt": "Fix missing colon and bad indentation in an if block.",
        "expectedApproach": "Expected: colon and consistently indented body.",
        "starterCode": "score = 80\nif score >= 50:\n    print('Pass')",
        "solutionCode": "score = 80\nif score >= 50:\n    print('Pass')",
        "expectedOutput": "Pass",
        "hints": [
          {
            "step": 1,
            "title": "Colon & Indent",
            "desc": "Put colon at line end, indent next line.",
            "code": "if score >= 50:\n    print('Pass')"
          }
        ]
      },
      {
        "id": 4,
        "title": "Challenge 4: Explain Syntax Error vs Logic Error",
        "prompt": "Explain syntax error vs logic error.",
        "expectedApproach": "Expected: syntax prevents parsing; logic error runs but gives wrong result.",
        "starterCode": "print('Syntax error prevents parsing; logic error runs but gives wrong result.')",
        "solutionCode": "print('Syntax error prevents parsing; logic error runs but gives wrong result.')",
        "expectedOutput": "Syntax error prevents parsing; logic error runs but gives wrong result.",
        "hints": [
          {
            "step": 1,
            "title": "Core distinction",
            "desc": "Syntax stops code from starting; logic runs but calculates wrong values.",
            "code": "print('Syntax error prevents parsing; logic error runs but gives wrong result.')"
          }
        ]
      },
      {
        "id": 5,
        "title": "Challenge 5: Create a Debugging Checklist",
        "prompt": "Create a debugging checklist.",
        "expectedApproach": "Expected: read error, locate line, inspect names/delimiters/indentation, fix one issue, rerun.",
        "starterCode": "print('Checklist: 1. Read error 2. Locate line 3. Inspect syntax 4. Fix one issue 5. Rerun')",
        "solutionCode": "print('Checklist: 1. Read error 2. Locate line 3. Inspect syntax 4. Fix one issue 5. Rerun')",
        "expectedOutput": "Checklist: 1. Read error 2. Locate line 3. Inspect syntax 4. Fix one issue 5. Rerun",
        "hints": [
          {
            "step": 1,
            "title": "Five-step debug checklist",
            "desc": "Read -> locate -> inspect -> fix one issue -> rerun.",
            "code": "print('Checklist: 1. Read error 2. Locate line 3. Inspect syntax 4. Fix one issue 5. Rerun')"
          }
        ]
      }
    ],
    "interviewQuestions": [
      {
        "id": 1,
        "question": "Syntax vs logic error?",
        "modelAnswer": "Syntax prevents parsing; logic error allows execution but produces an incorrect result.",
        "tag": "Error Classification"
      },
      {
        "id": 2,
        "question": "What does NameError mean?",
        "modelAnswer": "A name was used that is not defined or available in the current scope.",
        "tag": "Runtime Exceptions"
      },
      {
        "id": 3,
        "question": "What is IndentationError?",
        "modelAnswer": "Invalid or inconsistent indentation in a code block.",
        "tag": "Whitespace Rules"
      },
      {
        "id": 4,
        "question": "How approach traceback?",
        "modelAnswer": "Read exception/message, inspect line and call stack, reproduce and isolate.",
        "tag": "Debugging Workflow"
      },
      {
        "id": 5,
        "question": "Why change one thing at a time?",
        "modelAnswer": "It helps identify which change affected the behavior.",
        "tag": "Best Practices"
      }
    ]
  }
};

// Map sequential index 1..9 to matching Module 01 topic:
const TOPIC_INDEX_MAP: Record<number, number> = {
  1: 1,
  2: 103,
  3: 102,
  4: 107,
  5: 106,
  6: 108,
  7: 109,
  8: 112,
  9: 101,
  10: 109,
  11: 110,
  12: 111,
  13: 112,
};

const MODULE_02_TOPIC_TITLES: Record<number, { num: number; title: string; baseKey: number }> = {
  201: { num: 1, title: "2.1 What Are Variables? – Real-Life Analogy: Boxes", baseKey: 1 },
  202: { num: 2, title: "2.2 Creating Variables", baseKey: 108 },
  203: { num: 3, title: "2.3 Rules for Naming Variables", baseKey: 110 },
  204: { num: 4, title: "2.4 Understanding Different Data Types", baseKey: 104 },
  205: { num: 5, title: "2.5 Type Checking in Python", baseKey: 109 },
  206: { num: 6, title: "2.6 Type Conversion – Int to String", baseKey: 109 },
  207: { num: 7, title: "2.7 etc...", baseKey: 109 },
  208: { num: 8, title: "2.8 Dynamic Typing in Python", baseKey: 102 },
  209: { num: 9, title: "2.9 Memory Concept Simplified", baseKey: 107 },
  210: { num: 10, title: "2.10 Common Beginner Confusion – Quotes", baseKey: 112 },
  211: { num: 11, title: "2.11 Numbers", baseKey: 104 },
  301: { num: 1, title: "3.1 Taking Input from User", baseKey: 108 },
  302: { num: 2, title: "3.2 Displaying Output Properly", baseKey: 106 },
  303: { num: 3, title: "3.3 Formatting Output – F-Strings", baseKey: 106 },
  304: { num: 4, title: "3.4 Handling Input Data Types", baseKey: 109 },
  305: { num: 5, title: "3.5 Real-World Example: Calculator Input", baseKey: 108 },
  306: { num: 6, title: "3.6 Common Mistakes – String vs Number Input", baseKey: 112 },
  307: { num: 7, title: "3.7 Making Interactive Programs", baseKey: 107 },
  308: { num: 8, title: "3.8 Clean Output Practices", baseKey: 101 },
  401: { num: 1, title: "4.1 Arithmetic Operators", baseKey: 104 },
  402: { num: 2, title: "4.2 Comparison Operators", baseKey: 105 },
  403: { num: 3, title: "4.3 Logical Operators – AND", baseKey: 105 },
  404: { num: 4, title: "4.4 OR", baseKey: 105 },
  405: { num: 5, title: "4.5 NOT", baseKey: 105 },
  406: { num: 6, title: "4.6 Operator Precedence", baseKey: 107 },
  407: { num: 7, title: "4.7 Real-Life Examples – Shopping Calculations", baseKey: 108 },
  408: { num: 8, title: "4.8 Combining Expressions", baseKey: 107 },
  409: { num: 9, title: "4.9 Common Logic Mistakes", baseKey: 112 },
  410: { num: 10, title: "4.10 Practice Mini Problems", baseKey: 106 },
  501: { num: 1, title: "5.1 Why Decisions Are Important", baseKey: 1 },
  502: { num: 2, title: "5.2 if Statement Basics", baseKey: 105 },
  503: { num: 3, title: "5.3 if-else Structure", baseKey: 105 },
  504: { num: 4, title: "5.4 elif Usage", baseKey: 105 },
  505: { num: 5, title: "5.5 Nested Conditions", baseKey: 107 },
  506: { num: 6, title: "5.6 Real-World Examples – Login System", baseKey: 108 },
  507: { num: 7, title: "5.7 Avoiding Logical Mistakes", baseKey: 112 },
  508: { num: 8, title: "5.8 Writing Clean Conditions", baseKey: 101 },
  601: { num: 1, title: "6.1 Why Loops Are Needed", baseKey: 1 },
  602: { num: 2, title: "6.2 for Loop Basics", baseKey: 107 },
  603: { num: 3, title: "6.3 while Loop Basics", baseKey: 107 },
  604: { num: 4, title: "6.4 break and continue", baseKey: 105 },
  605: { num: 5, title: "6.5 Loop with Conditions", baseKey: 105 },
  606: { num: 6, title: "6.6 Nested Loops", baseKey: 107 },
  607: { num: 7, title: "6.7 Real-World Examples", baseKey: 108 },
  608: { num: 8, title: "6.8 Avoiding Infinite Loops", baseKey: 112 },
  701: { num: 1, title: "7.1 String Basics", baseKey: 104 },
  702: { num: 2, title: "7.2 Indexing and Slicing", baseKey: 107 },
  703: { num: 3, title: "7.3 String Methods – Upper", baseKey: 106 },
  704: { num: 4, title: "7.4 Lower", baseKey: 106 },
  705: { num: 5, title: "7.5 Replace", baseKey: 106 },
  706: { num: 6, title: "7.6 String Formatting", baseKey: 106 },
  707: { num: 7, title: "7.7 Checking Substrings", baseKey: 105 },
  708: { num: 8, title: "7.8 Real-World Use Cases", baseKey: 108 },
  709: { num: 9, title: "7.9 Handling User Input Text", baseKey: 109 },
  710: { num: 10, title: "7.10 Common Mistakes", baseKey: 112 },
  801: { num: 1, title: "8.1 Creating Lists", baseKey: 104 },
  802: { num: 2, title: "8.2 Accessing Elements", baseKey: 107 },
  803: { num: 3, title: "8.3 Adding/Removing Items", baseKey: 108 },
  804: { num: 4, title: "8.4 Looping Through Lists", baseKey: 107 },
  805: { num: 5, title: "8.5 List Methods", baseKey: 106 },
  806: { num: 6, title: "8.6 Real-World Examples", baseKey: 108 },
  807: { num: 7, title: "8.7 Common Mistakes", baseKey: 112 },
  901: { num: 1, title: "9.1 Tuple Basics", baseKey: 104 },
  902: { num: 2, title: "9.2 Set Basics", baseKey: 104 },
  903: { num: 3, title: "9.3 Dictionary Basics", baseKey: 104 },
  904: { num: 4, title: "9.4 Accessing Dictionary Data", baseKey: 107 },
  905: { num: 5, title: "9.5 When to Use What", baseKey: 103 },
  906: { num: 6, title: "9.6 Real-World Comparisons", baseKey: 108 },
  907: { num: 7, title: "9.7 Common Beginner Confusion", baseKey: 112 },
  1001: { num: 1, title: "10.1 Why Functions Matter", baseKey: 1 },
  1002: { num: 2, title: "10.2 Creating Functions", baseKey: 106 },
  1003: { num: 3, title: "10.3 Parameters and Return Values", baseKey: 108 },
  1004: { num: 4, title: "10.4 Default Parameters", baseKey: 108 },
  1005: { num: 5, title: "10.5 Scope – Local vs Global", baseKey: 107 },
  1006: { num: 6, title: "10.6 Code Reusability", baseKey: 101 },
  1007: { num: 7, title: "10.7 Real-World Examples", baseKey: 108 },
  1101: { num: 1, title: "11.1 How to Think Before Coding", baseKey: 101 },
  1102: { num: 2, title: "11.2 Breaking Problems into Steps", baseKey: 107 },
  1103: { num: 3, title: "11.3 Writing Pseudocode", baseKey: 105 },
  1104: { num: 4, title: "11.4 Pattern Problems", baseKey: 107 },
  1105: { num: 5, title: "11.5 Debugging Logic Errors", baseKey: 112 },
  1106: { num: 6, title: "11.6 Practice Problems", baseKey: 108 },
  1201: { num: 1, title: "12.1 Opening Files", baseKey: 106 },
  1202: { num: 2, title: "12.2 Reading Files", baseKey: 106 },
  1203: { num: 3, title: "12.3 Writing Files", baseKey: 106 },
  1204: { num: 4, title: "12.4 File Modes", baseKey: 104 },
  1205: { num: 5, title: "12.5 Real-World Use Cases", baseKey: 108 },
  1206: { num: 6, title: "12.6 Error Handling", baseKey: 112 },
  1301: { num: 1, title: "13.1 Types of Errors", baseKey: 112 },
  1302: { num: 2, title: "13.2 try-except Usage", baseKey: 112 },
  1303: { num: 3, title: "13.3 finally Block", baseKey: 107 },
  1304: { num: 4, title: "13.4 Custom Errors", baseKey: 108 },
  1305: { num: 5, title: "13.5 Debugging Mindset", baseKey: 101 },
  1401: { num: 1, title: "14.1 Creating Modules", baseKey: 106 },
  1402: { num: 2, title: "14.2 Importing Modules", baseKey: 106 },
  1403: { num: 3, title: "14.3 Built-In Libraries", baseKey: 102 },
  1404: { num: 4, title: "14.4 Installing Packages – pip", baseKey: 105 },
  1405: { num: 5, title: "14.5 Virtual Environment", baseKey: 105 },
  1501: { num: 1, title: "15.1 Classes and Objects", baseKey: 101 },
  1502: { num: 2, title: "15.2 Constructor", baseKey: 106 },
  1503: { num: 3, title: "15.3 Attributes", baseKey: 104 },
  1504: { num: 4, title: "15.4 Methods", baseKey: 106 },
  1505: { num: 5, title: "15.5 Real-World Analogy", baseKey: 1 },
  1601: { num: 1, title: "16.1 Inheritance", baseKey: 107 },
  1602: { num: 2, title: "16.2 Encapsulation", baseKey: 105 },
  1603: { num: 3, title: "16.3 Polymorphism", baseKey: 103 },
  1604: { num: 4, title: "16.4 Abstraction", baseKey: 101 },
  1605: { num: 5, title: "16.5 Real-World Examples", baseKey: 108 },
  1701: { num: 1, title: "17.1 API Basics", baseKey: 1 },
  1702: { num: 2, title: "17.2 Using requests Library", baseKey: 106 },
  1703: { num: 3, title: "17.3 JSON Handling", baseKey: 104 },
  1704: { num: 4, title: "17.4 Real-World APIs", baseKey: 108 },
  1705: { num: 5, title: "17.5 Error Handling", baseKey: 112 },
  1801: { num: 1, title: "18.1 Automating Files", baseKey: 106 },
  1802: { num: 2, title: "18.2 Email Automation", baseKey: 108 },
  1803: { num: 3, title: "18.3 Web Automation Basics", baseKey: 102 },
  1804: { num: 4, title: "18.4 Scheduling Tasks", baseKey: 107 },
  1805: { num: 5, title: "18.5 Real-World Automation", baseKey: 108 },
  1901: { num: 1, title: "19.1 Working with CSV", baseKey: 104 },
  1902: { num: 2, title: "19.2 Data Cleaning", baseKey: 109 },
  1903: { num: 3, title: "19.3 Basic Pandas Introduction", baseKey: 102 },
  1904: { num: 4, title: "19.4 Real-World Examples", baseKey: 108 },
  2001: { num: 1, title: "20.1 Lambda Functions", baseKey: 106 },
  2002: { num: 2, title: "20.2 List Comprehension", baseKey: 107 },
  2003: { num: 3, title: "20.3 Generators", baseKey: 107 },
  2004: { num: 4, title: "20.4 Decorators Basics", baseKey: 106 },
  2101: { num: 1, title: "21.1 SQLite Basics", baseKey: 104 },
  2102: { num: 2, title: "21.2 CRUD Operations", baseKey: 108 },
  2103: { num: 3, title: "21.3 Connecting Python with DB", baseKey: 107 },
  2104: { num: 4, title: "21.4 Real-World Use", baseKey: 108 },
  2201: { num: 1, title: "22.1 Flask Basics", baseKey: 106 },
  2202: { num: 2, title: "22.2 Creating APIs", baseKey: 108 },
  2203: { num: 3, title: "22.3 Routing", baseKey: 107 },
  2204: { num: 4, title: "22.4 Handling Requests", baseKey: 104 },
  2301: { num: 1, title: "23.1 Pandas Basics", baseKey: 104 },
  2302: { num: 2, title: "23.2 Data Analysis", baseKey: 109 },
  2303: { num: 3, title: "23.3 Matplotlib Basics", baseKey: 102 },
  2304: { num: 4, title: "23.4 Real-World Use", baseKey: 108 },
  2401: { num: 1, title: "24.1 Git Basics", baseKey: 106 },
  2402: { num: 2, title: "24.2 GitHub Usage", baseKey: 108 },
  2403: { num: 3, title: "24.3 Collaboration Workflow", baseKey: 107 },
  2404: { num: 4, title: "24.4 Version Control", baseKey: 105 },
};

/**
 * Returns complete assessment data (5 MCQs, 5 Game Levels, 5 Code Practice, 5 Interview Questions)
 * for any Module 01 or Module 02 topic.
 */
export function getModule01TopicData(topicIdOrIndex: number): TopicAssessmentData {
  const info = getTopicHierarchyInfo(topicIdOrIndex);
  let base: TopicAssessmentData;

  if (MODULE_02_TOPIC_TITLES[topicIdOrIndex]) {
    const m2 = MODULE_02_TOPIC_TITLES[topicIdOrIndex];
    base = MODULE_01_TOPICS_CONTENT[m2.baseKey] || MODULE_01_TOPICS_CONTENT[1];
  } else if (TOPIC_INDEX_MAP[topicIdOrIndex] && MODULE_01_TOPICS_CONTENT[TOPIC_INDEX_MAP[topicIdOrIndex]]) {
    base = MODULE_01_TOPICS_CONTENT[TOPIC_INDEX_MAP[topicIdOrIndex]];
  } else if (MODULE_01_TOPICS_CONTENT[topicIdOrIndex]) {
    base = MODULE_01_TOPICS_CONTENT[topicIdOrIndex];
  } else {
    base = MODULE_01_TOPICS_CONTENT[1];
  }

  return {
    ...base,
    topicId: topicIdOrIndex,
    topicTitle: info.topicTitle,
  };
}
