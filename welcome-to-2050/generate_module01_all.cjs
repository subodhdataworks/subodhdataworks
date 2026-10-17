// Generator for src/components/futureai/data/module01TopicContent.ts
const fs = require('fs');
const path = require('path');

const topics = [
  // ── TOPIC 1 (Pages 2–3) ──
  {
    topicId: 1,
    topicNumber: 1,
    topicTitle: "1.1 What Is Programming?",
    pdfPages: "Pages 2–3",
    mcqs: [
      {
        id: 1,
        tag: "#Foundations",
        difficulty: "Beginner",
        question: "Programming is…",
        options: [
          { key: "A", text: "Repairing hardware" },
          { key: "B", text: "Browsing the internet" },
          { key: "C", text: "Giving a computer instructions" },
          { key: "D", text: "Designing only graphics" }
        ],
        correct: 2,
        hint: "Think about what code actually tells a computer to execute.",
        explanation: "A program is a set of instructions a computer can execute.",
        realWorldContext: "Software Engineering: Every digital service from banking apps to rocket navigation runs on machine instructions.",
        codeSnippet: "# Programming: Instructions for machines\\nprint('Execute instructions step by step')"
      },
      {
        id: 2,
        tag: "#Algorithms",
        difficulty: "Beginner",
        question: "An algorithm is…",
        options: [
          { key: "A", text: "A file extension" },
          { key: "B", text: "A computer brand" },
          { key: "C", text: "Ordered steps to solve a problem" },
          { key: "D", text: "A monitor" }
        ],
        correct: 2,
        hint: "It represents a finite, ordered recipe to achieve a specific goal.",
        explanation: "An algorithm describes a sequence of solution steps.",
        realWorldContext: "Computer Science: GPS routing, search ranking, and social feeds are driven by algorithms.",
        codeSnippet: "# 1. Input -> 2. Process -> 3. Output"
      },
      {
        id: 3,
        tag: "#Execution",
        difficulty: "Beginner",
        question: "A program is mainly created to…",
        options: [
          { key: "A", text: "Instruct a computer to perform a task" },
          { key: "B", text: "Make hardware heavier" },
          { key: "C", text: "Replace electricity" },
          { key: "D", text: "Store only images" }
        ],
        correct: 0,
        hint: "Why do programmers write code?",
        explanation: "Programs tell computers what actions to perform.",
        realWorldContext: "Automation: Programs automate repetitive calculations millions of times faster than humans.",
        codeSnippet: "def perform_task():\\n    print('Task completed successfully!')"
      },
      {
        id: 4,
        tag: "#Logic",
        difficulty: "Beginner",
        question: "Which resembles programming most?",
        options: [
          { key: "A", text: "Looking at a cover" },
          { key: "B", text: "Buying a keyboard" },
          { key: "C", text: "Turning off a screen" },
          { key: "D", text: "Writing precise steps to sort books" }
        ],
        correct: 3,
        hint: "Look for an activity that requires creating an ordered, rule-based sequence.",
        explanation: "Precise, ordered instructions resemble an algorithm.",
        realWorldContext: "Everyday Logic: Sorting items alphabetically or following a recipe is algorithmic thinking.",
        codeSnippet: "# Pick book -> Compare title -> Insert in sorted order"
      },
      {
        id: 5,
        tag: "#Clarity",
        difficulty: "Beginner",
        question: "Why should instructions be clear?",
        options: [
          { key: "A", text: "Clear instructions hide code" },
          { key: "B", text: "Computers understand all languages" },
          { key: "C", text: "Computers always guess" },
          { key: "D", text: "Ambiguity can cause errors" }
        ],
        correct: 3,
        hint: "Can computers guess human intention if instructions are vague?",
        explanation: "Computers cannot reliably infer missing instructions.",
        realWorldContext: "Bug Prevention: Unambiguous code prevents crashes and financial calculation errors.",
        codeSnippet: "# Clear and unambiguous instruction\\ntotal_price = item_price + shipping_fee"
      }
    ],
    game: {
      l1: {
        title: "Warm Up — Code Puzzle",
        question: "Arrange these steps in the correct order: give instructions, identify the task, check the result.",
        blocks: [
          { id: "b1", text: "1. Identify the task", kind: "step", bg: "#eff6ff", textCol: "#1d4ed8", borderCol: "#bfdbfe" },
          { id: "b2", text: "2. Give instructions", kind: "step", bg: "#f0fdf4", textCol: "#15803d", borderCol: "#bbf7d0" },
          { id: "b3", text: "3. Check the result", kind: "step", bg: "#faf5ff", textCol: "#7e22ce", borderCol: "#e9d5ff" }
        ],
        correctOrder: ["b1", "b2", "b3"],
        explanation: "First understand what needs to be solved, then provide clear instructions, and finally verify the output."
      },
      l2: {
        title: "Think — Predict Output",
        question: "If a computer receives no instruction to display anything, what should you expect on the screen?",
        snippetLines: [
          "a = 10",
          "b = 20",
          "total = a + b",
          "# No print statement here"
        ],
        options: [
          { id: "o1", text: "Nothing / blank output", isCorrect: true, note: "Without print() or display calls, terminal screen produces no visible output." },
          { id: "o2", text: "30", isCorrect: false, note: "Python does not automatically print calculation results in scripts." },
          { id: "o3", text: "Error: No output defined", isCorrect: false, note: "The code executes silently without any errors." },
          { id: "o4", text: "total", isCorrect: false, note: "Variable names are never displayed without explicit commands." }
        ]
      },
      l3: {
        title: "Debug — Bug Hunter",
        question: "A student writes vague instructions: 'Do the task properly.' What is the main problem?",
        lines: [
          { line: 1, text: "# Task: Calculate employee pay", isBug: false },
          { line: 2, text: "do_the_task_properly()", isBug: true, bugMsg: "Vagueness error: Computers require explicit arithmetic and logical steps." },
          { line: 3, text: "print('Done')", isBug: false }
        ],
        bugLine: 2,
        patches: [
          { id: "p1", code: "pay = hours * hourly_rate  # Explicit arithmetic step", label: "Patch A: Replace with explicit steps", isCorrect: true },
          { id: "p2", code: "please_do_task()", label: "Patch B: Rephrase polite instruction", isCorrect: false },
          { id: "p3", code: "pass", label: "Patch C: Skip execution", isCorrect: false }
        ]
      },
      l4: {
        title: "Build — Build & Run",
        question: "Assemble a 4-step algorithm for opening a learning website and reaching a lesson.",
        prefixCode: "# Step 1: Open browser\\n# Step 2: ",
        slot1Target: "Navigate to URL",
        midCode: "\\n# Step 3: Login to account\\n# Step 4: ",
        slot2Target: "Select lesson",
        suffixCode: "\\nprint('Ready to learn!')",
        availableTokens: ["Navigate to URL", "Select lesson", "Delete account", "Turn off screen", "Format disk"],
        correctSlot1: "Navigate to URL",
        correctSlot2: "Select lesson",
        expectedOutput: "Ready to learn!"
      },
      l5: {
        bossName: "Algorithm Sentinel",
        title: "Boss Fight — Real Coding",
        question: "Create a step-by-step algorithm that asks for two item prices (40 and 60), calculates the total, and displays it.",
        scenario: "The Sentinel guards the system logic gate. Supply the complete calculation sequence to bypass.",
        phase1Prompt: "Which logical flow correctly completes the price calculation?",
        phase1Options: [
          { id: "a1", text: "Receive prices -> Add prices together -> Print total", isCorrect: true },
          { id: "a2", text: "Print total -> Add prices -> Receive prices", isCorrect: false },
          { id: "a3", text: "Add prices -> Receive prices -> Display screen", isCorrect: false }
        ],
        phase2Prompt: "Write Python code that stores 40 in price1 and 60 in price2, calculates the sum in total, and prints total:",
        phase2Starter: "price1 = 40\\nprice2 = 60\\n# Calculate total and print:\\n",
        phase2Solution: "price1 = 40\\nprice2 = 60\\ntotal = price1 + price2\\nprint(total)",
        phase2ExpectedOutput: "100"
      }
    },
    codingChallenges: [
      {
        id: 1,
        title: "Challenge 1: Five Steps for Website Login",
        prompt: "Write five steps for logging into a learning website in print statements.",
        expectedApproach: "Expected: open site, enter credentials, submit, validate, show dashboard or error.",
        starterCode: "print('1. Open website')\\n# Add the remaining 4 steps below:\\n",
        solutionCode: "print('1. Open website')\\nprint('2. Enter credentials')\\nprint('3. Submit login form')\\nprint('4. Validate credentials')\\nprint('5. Show dashboard')",
        expectedOutput: "1. Open website\\n2. Enter credentials\\n3. Submit login form\\n4. Validate credentials\\n5. Show dashboard",
        hints: [
          { step: 1, title: "Input credentials", desc: "User types username/email and password.", code: "print('2. Enter credentials')" },
          { step: 2, title: "Dashboard or error", desc: "Show user home upon successful verification.", code: "print('5. Show dashboard')" }
        ]
      },
      {
        id: 2,
        title: "Challenge 2: Total Three Item Prices",
        prompt: "Write an algorithm to total three item prices (25, 45, 30) and print the sum.",
        expectedApproach: "Expected: receive prices, add them, display total.",
        starterCode: "item1 = 25\\nitem2 = 45\\nitem3 = 30\\n# Calculate total and print:\\n",
        solutionCode: "item1 = 25\\nitem2 = 45\\nitem3 = 30\\ntotal = item1 + item2 + item3\\nprint('Total:', total)",
        expectedOutput: "Total: 100",
        hints: [
          { step: 1, title: "Sum formula", desc: "Add all three variables using +.", code: "total = item1 + item2 + item3" }
        ]
      },
      {
        id: 3,
        title: "Challenge 3: Check Passing Score",
        prompt: "Design steps to check whether score 45 is at least 40 and display Pass or Fail.",
        expectedApproach: "Expected: input score, compare with 40, show pass/fail.",
        starterCode: "score = 45\\n# Compare score with 40 and output Pass or Fail:\\n",
        solutionCode: "score = 45\\nif score >= 40:\\n    print('Pass')\\nelse:\\n    print('Fail')",
        expectedOutput: "Pass",
        hints: [
          { step: 1, title: "Condition", desc: "Use if score >= 40: to check pass condition.", code: "if score >= 40:" }
        ]
      },
      {
        id: 4,
        title: "Challenge 4: Complete the Sequence",
        prompt: "Complete: Start -> enter two numbers -> ____ -> display result -> End. (Addition task)",
        expectedApproach: "Expected: add the numbers if the task is addition.",
        starterCode: "num1 = 12\\nnum2 = 18\\n# Complete the missing computation step:\\n",
        solutionCode: "num1 = 12\\nnum2 = 18\\nresult = num1 + num2\\nprint(result)",
        expectedOutput: "30",
        hints: [
          { step: 1, title: "Computation", desc: "Calculate sum into variable result.", code: "result = num1 + num2" }
        ]
      },
      {
        id: 5,
        title: "Challenge 5: Find the Missing Step",
        prompt: "Find the missing step: type code -> expect output.",
        expectedApproach: "Expected: run/execute the code before checking output.",
        starterCode: "print('Missing Step: Run/Execute the code')",
        solutionCode: "print('Missing Step: Run/Execute the code')",
        expectedOutput: "Missing Step: Run/Execute the code",
        hints: [
          { step: 1, title: "Execution", desc: "Code must be executed to produce output.", code: "print('Missing Step: Run/Execute the code')" }
        ]
      }
    ],
    interviewQuestions: [
      {
        id: 1,
        question: "What is programming?",
        modelAnswer: "Writing instructions a computer can execute.",
        tag: "Foundations"
      },
      {
        id: 2,
        question: "What is an algorithm?",
        modelAnswer: "A finite, ordered set of steps for solving a problem.",
        tag: "Computer Science"
      },
      {
        id: 3,
        question: "Algorithm vs program?",
        modelAnswer: "An algorithm describes the solution; a program implements it in a programming language.",
        tag: "Core Concepts"
      },
      {
        id: 4,
        question: "Why plan before coding?",
        modelAnswer: "It clarifies inputs, processing, outputs and edge cases.",
        tag: "Best Practices"
      },
      {
        id: 5,
        question: "Give an everyday algorithm example.",
        modelAnswer: "An ATM withdrawal: authenticate, choose amount, check balance, dispense or show an error.",
        tag: "Practical"
      }
    ]
  },

  // ── TOPIC 2 (Pages 4–5) ──
  {
    topicId: 101,
    topicNumber: 2,
    topicTitle: "1.2 Algorithms and Step-by-Step Problem Solving",
    pdfPages: "Pages 4–5",
    mcqs: [
      {
        id: 1,
        tag: "#ProblemSolving",
        difficulty: "Beginner",
        question: "What should you identify first?",
        options: [
          { key: "A", text: "Comments count" },
          { key: "B", text: "Problem, inputs and expected outputs" },
          { key: "C", text: "Font colour" },
          { key: "D", text: "Laptop brand" }
        ],
        correct: 1,
        hint: "Before writing any code, know what data comes in and what result is expected.",
        explanation: "Understand the task before choosing an implementation.",
        realWorldContext: "System Design: Requirements gathering clarifies inputs, business rules, and outputs before architecture starts.",
        codeSnippet: "# Inputs: (a, b) -> Processing: a + b -> Output: result"
      },
      {
        id: 2,
        tag: "#Conditionals",
        difficulty: "Beginner",
        question: "A decision step…",
        options: [
          { key: "A", text: "Chooses a path based on a condition" },
          { key: "B", text: "Repeats forever" },
          { key: "C", text: "Deletes data" },
          { key: "D", text: "Installs Python" }
        ],
        correct: 0,
        hint: "In a flowchart, a diamond shape branches based on true or false.",
        explanation: "Decisions branch based on conditions.",
        realWorldContext: "Control Flow: If/else statements make intelligent decisions in automated systems.",
        codeSnippet: "if score >= 40:\\n    status = 'Pass'\\nelse:\\n    status = 'Fail'"
      },
      {
        id: 3,
        tag: "#Flowcharts",
        difficulty: "Beginner",
        question: "A flowchart…",
        options: [
          { key: "A", text: "Measures internet speed" },
          { key: "B", text: "Edits photos only" },
          { key: "C", text: "Replaces testing" },
          { key: "D", text: "Shows logic visually" }
        ],
        correct: 3,
        hint: "Diagrams with rectangles, diamonds, and arrows illustrate process flow.",
        explanation: "Flowcharts visually represent steps and branches.",
        realWorldContext: "Architecture: Teams sketch flowcharts to agree on complex checkout and registration funnels.",
        codeSnippet: "# [Start] -> [Input Data] -> <Is Valid?> -> [Process] -> [End]"
      },
      {
        id: 4,
        tag: "#Testing",
        difficulty: "Beginner",
        question: "Why test sample inputs?",
        options: [
          { key: "A", text: "To guarantee no changes ever" },
          { key: "B", text: "To make code longer" },
          { key: "C", text: "To check results against expectations" },
          { key: "D", text: "To avoid defining the problem" }
        ],
        correct: 2,
        hint: "How do you verify whether an algorithm actually works correctly?",
        explanation: "Tracing examples helps expose flawed or missing steps.",
        realWorldContext: "Quality Assurance: Unit testing feeds sample inputs into functions to catch regressions.",
        codeSnippet: "# Test sample: 4 + 6 should equal 10\\nassert 4 + 6 == 10"
      },
      {
        id: 5,
        tag: "#DataFlow",
        difficulty: "Beginner",
        question: "A bill total algorithm should…",
        options: [
          { key: "A", text: "Ignore the data" },
          { key: "B", text: "Input prices, sum them, display total" },
          { key: "C", text: "Guess the total" },
          { key: "D", text: "Display before input" }
        ],
        correct: 1,
        hint: "Notice the logical sequence: receive values first, compute sum, then present result.",
        explanation: "This separates input, processing and output.",
        realWorldContext: "POS Systems: Grocery and retail checkouts follow this exact order on every transaction.",
        codeSnippet: "prices = [10.50, 4.25, 15.00]\\ntotal = sum(prices)\\nprint(f'Total: ${total:.2f}')"
      }
    ],
    game: {
      l1: {
        title: "Warm Up — Code Puzzle",
        question: "Complete the algorithm: Start → receive two numbers → ____ → display the answer → End.",
        blocks: [
          { id: "b1", text: "add the two numbers", kind: "process", bg: "#f0fdf4", textCol: "#15803d", borderCol: "#bbf7d0" },
          { id: "b2", text: "delete the numbers", kind: "wrong", bg: "#fef2f2", textCol: "#b91c1c", borderCol: "#fecaca" },
          { id: "b3", text: "restart computer", kind: "wrong", bg: "#fff1f2", textCol: "#be123c", borderCol: "#fecdd3" }
        ],
        correctOrder: ["b1"],
        explanation: "Between receiving numbers and displaying the answer, the arithmetic processing step (adding) must happen."
      },
      l2: {
        title: "Think — Predict Output",
        question: "An algorithm adds 4 and 6. What result should it produce?",
        snippetLines: [
          "num1 = 4",
          "num2 = 6",
          "sum_val = num1 + num2",
          "print(sum_val)"
        ],
        options: [
          { id: "o1", text: "10", isCorrect: true, note: "4 + 6 evaluates to 10." },
          { id: "o2", text: "46", isCorrect: false, note: "Integers add mathematically; string concatenation would produce '46'." },
          { id: "o3", text: "24", isCorrect: false, note: "24 is multiplication (4 * 6), not addition." },
          { id: "o4", text: "None", isCorrect: false, note: "The sum is computed and printed." }
        ]
      },
      l3: {
        title: "Debug — Bug Hunter",
        question: "An algorithm displays a total before adding the prices. Identify the ordering mistake.",
        lines: [
          { line: 1, text: "price1 = 50", isBug: false },
          { line: 2, text: "price2 = 30", isBug: false },
          { line: 3, text: "print('Total:', total)  # Using total before calculation!", isBug: true, bugMsg: "NameError: name 'total' is referenced before assignment." },
          { line: 4, text: "total = price1 + price2", isBug: false }
        ],
        bugLine: 3,
        patches: [
          { id: "p1", code: "total = price1 + price2\\nprint('Total:', total)", label: "Patch A: Calculate total before printing", isCorrect: true },
          { id: "p2", code: "total = 0\\nprint(total)", label: "Patch B: Print 0 without addition", isCorrect: false },
          { id: "p3", code: "print(price1)", label: "Patch C: Only print price1", isCorrect: false }
        ]
      },
      l4: {
        title: "Build — Build & Run",
        question: "Write ordered steps to calculate the area of a rectangle from length and width.",
        prefixCode: "length = 10\\nwidth = 5\\n# Calculate area:\\n",
        slot1Target: "area = length * width",
        midCode: "\\n",
        slot2Target: "print('Area:', area)",
        suffixCode: "",
        availableTokens: ["area = length * width", "print('Area:', area)", "area = length + width", "print(length)", "clear_screen()"],
        correctSlot1: "area = length * width",
        correctSlot2: "print('Area:', area)",
        expectedOutput: "Area: 50"
      },
      l5: {
        bossName: "Flowchart Master",
        title: "Boss Fight — Real Coding",
        question: "Design a clear algorithm to calculate the average of three marks (80, 90, 70), showing input, processing, and output.",
        scenario: "Flowchart Master challenges you to structure the arithmetic average logic flawlessly.",
        phase1Prompt: "What formula correctly computes the average of three scores?",
        phase1Options: [
          { id: "a1", text: "(m1 + m2 + m3) / 3", isCorrect: true },
          { id: "a2", text: "m1 + m2 + m3 * 3", isCorrect: false },
          { id: "a3", text: "(m1 + m2 + m3) / 2", isCorrect: false }
        ],
        phase2Prompt: "Write Python code that assigns marks 80, 90, 70, computes the average, and prints it:",
        phase2Starter: "m1 = 80\\nm2 = 90\\nm3 = 70\\n# Compute average and print:\\n",
        phase2Solution: "m1 = 80\\nm2 = 90\\nm3 = 70\\navg = (m1 + m2 + m3) / 3\\nprint(int(avg))",
        phase2ExpectedOutput: "80"
      }
    },
    codingChallenges: [
      {
        id: 1,
        title: "Challenge 1: Find the Larger of Two Numbers",
        prompt: "Find the larger of two numbers (a = 25, b = 40); handle equality.",
        expectedApproach: "Expected: compare both; output first, second, or equal.",
        starterCode: "a = 25\\nb = 40\\n# Compare both and print the larger value or 'Equal':\\n",
        solutionCode: "a = 25\\nb = 40\\nif a > b:\\n    print(a)\\nelif b > a:\\n    print(b)\\nelse:\\n    print('Equal')",
        expectedOutput: "40",
        hints: [
          { step: 1, title: "Comparison branches", desc: "Use if a > b, elif b > a, and else: for equal.", code: "if a > b:\\n    print(a)\\nelif b > a:\\n    print(b)" }
        ]
      },
      {
        id: 2,
        title: "Challenge 2: Average of Three Scores",
        prompt: "Write steps to calculate the average of three scores: 75, 85, 95.",
        expectedApproach: "Expected: sum scores, divide by three, display.",
        starterCode: "s1 = 75\\ns2 = 85\\ns3 = 95\\n# Calculate average and print:\\n",
        solutionCode: "s1 = 75\\ns2 = 85\\ns3 = 95\\navg = (s1 + s2 + s3) / 3\\nprint('Average:', int(avg))",
        expectedOutput: "Average: 85",
        hints: [
          { step: 1, title: "Parentheses", desc: "Enclose sum in parentheses before dividing: (s1 + s2 + s3) / 3.", code: "avg = (s1 + s2 + s3) / 3" }
        ]
      },
      {
        id: 3,
        title: "Challenge 3: Describe Flowchart for Even/Odd",
        prompt: "Check whether number n = 14 is even or odd using the remainder modulo operator %.",
        expectedApproach: "Expected: input n; test n % 2 == 0; branch.",
        starterCode: "n = 14\\n# Check if even or odd:\\n",
        solutionCode: "n = 14\\nif n % 2 == 0:\\n    print('Even')\\nelse:\\n    print('Odd')",
        expectedOutput: "Even",
        hints: [
          { step: 1, title: "Modulo operator", desc: "n % 2 == 0 checks if divisible by 2 with no remainder.", code: "if n % 2 == 0:" }
        ]
      },
      {
        id: 4,
        title: "Challenge 4: Fix Rectangle Area Formula",
        prompt: "Fix the bug: area = length + width. Calculate correct area for length 8 and width 6.",
        expectedApproach: "Expected: rectangle area uses length * width.",
        starterCode: "length = 8\\nwidth = 6\\n# Fix the incorrect formula below:\\narea = length + width\\nprint('Area:', area)",
        solutionCode: "length = 8\\nwidth = 6\\narea = length * width\\nprint('Area:', area)",
        expectedOutput: "Area: 48",
        hints: [
          { step: 1, title: "Multiplication", desc: "Area is length multiplied by width (length * width).", code: "area = length * width" }
        ]
      },
      {
        id: 5,
        title: "Challenge 5: Login Algorithm with Three Attempts",
        prompt: "Design a login algorithm simulation that repeats up to three attempts.",
        expectedApproach: "Expected: repeat up to three times; stop on success; otherwise show failure.",
        starterCode: "# Simulate 3 attempts: attempt 2 succeeds\\nfor attempt in range(1, 4):\\n    if attempt == 2:\\n        print('Login Successful on attempt', attempt)\\n        break",
        solutionCode: "for attempt in range(1, 4):\\n    if attempt == 2:\\n        print('Login Successful on attempt', attempt)\\n        break",
        expectedOutput: "Login Successful on attempt 2",
        hints: [
          { step: 1, title: "Loop and Break", desc: "Use for attempt in range(1, 4) and break upon success.", code: "break" }
        ]
      }
    ],
    interviewQuestions: [
      {
        id: 1,
        question: "What are input, processing and output?",
        modelAnswer: "Input is received data, processing transforms it, output is the result.",
        tag: "Fundamentals"
      },
      {
        id: 2,
        question: "What makes an algorithm good?",
        modelAnswer: "Clarity, correctness, finiteness, reasonable efficiency and edge-case handling.",
        tag: "Algorithm Design"
      },
      {
        id: 3,
        question: "What is decomposition?",
        modelAnswer: "Breaking a complex problem into smaller parts.",
        tag: "Problem Solving"
      },
      {
        id: 4,
        question: "Why consider edge cases?",
        modelAnswer: "Zero, empty, equal or unusual values can reveal flaws.",
        tag: "Testing"
      },
      {
        id: 5,
        question: "How do you validate an algorithm?",
        modelAnswer: "Trace normal and edge-case examples and compare expected results.",
        tag: "Validation"
      }
    ]
  },

  // ── TOPIC 3 (Pages 6–7) ──
  {
    topicId: 102,
    topicNumber: 3,
    topicTitle: "1.3 Introduction to Python",
    pdfPages: "Pages 6–7",
    mcqs: [
      {
        id: 1,
        tag: "#PythonIntro",
        difficulty: "Beginner",
        question: "Python is…",
        options: [
          { key: "A", text: "A programming language" },
          { key: "B", text: "A spreadsheet only" },
          { key: "C", text: "A physical component" },
          { key: "D", text: "An operating system only" }
        ],
        correct: 0,
        hint: "Created by Guido van Rossum, it is a high-level general-purpose software language.",
        explanation: "Python is a general-purpose programming language.",
        realWorldContext: "Industry Adoption: Python is ranked #1 worldwide on the TIOBE index for popularity.",
        codeSnippet: "print('Welcome to Python!')"
      },
      {
        id: 2,
        tag: "#Ecosystem",
        difficulty: "Beginner",
        question: "A strength of Python is…",
        options: [
          { key: "A", text: "One-computer-only support" },
          { key: "B", text: "No data processing" },
          { key: "C", text: "No libraries" },
          { key: "D", text: "Readable syntax and a large ecosystem" }
        ],
        correct: 3,
        hint: "Python reads almost like plain English and has over 400,000 open-source packages.",
        explanation: "Readable syntax and libraries make Python useful.",
        realWorldContext: "Productivity: Developers build prototypes and data models in Python faster than in C++ or Java.",
        codeSnippet: "# Simple and readable\\nfor item in ['Data', 'AI', 'Web']:\\n    print(item)"
      },
      {
        id: 3,
        tag: "#UseCases",
        difficulty: "Beginner",
        question: "Python is commonly used for…",
        options: [
          { key: "A", text: "Web development" },
          { key: "B", text: "All of these" },
          { key: "C", text: "Data analysis" },
          { key: "D", text: "Automation" }
        ],
        correct: 1,
        hint: "Python powers backend APIs, machine learning pipelines, and desktop scripts.",
        explanation: "Python supports all these use cases.",
        realWorldContext: "Full-Stack AI: Companies use Django/FastAPI for web, Pandas for analytics, and Celery for automation.",
        codeSnippet: "# Versatile general-purpose programming"
      },
      {
        id: 4,
        tag: "#Interpreter",
        difficulty: "Beginner",
        question: "A Python interpreter typically…",
        options: [
          { key: "A", text: "Creates electricity" },
          { key: "B", text: "Executes Python code" },
          { key: "C", text: "Repairs hardware" },
          { key: "D", text: "Prints documents" }
        ],
        correct: 1,
        hint: "What software reads Python source text line by line and translates it to CPU instructions?",
        explanation: "The interpreter runs Python instructions.",
        realWorldContext: "Architecture: The CPython interpreter translates code to bytecode and executes it inside the Python Virtual Machine.",
        codeSnippet: "# Terminal command to run Python:\\npython script.py"
      },
      {
        id: 5,
        tag: "#FileExtension",
        difficulty: "Beginner",
        question: "A common Python source extension is…",
        options: [
          { key: "A", text: ".jpg" },
          { key: "B", text: ".py" },
          { key: "C", text: ".mp3" },
          { key: "D", text: ".xlsx" }
        ],
        correct: 1,
        hint: "Python source filenames end in two letters: p and y.",
        explanation: "Python source files commonly use .py.",
        realWorldContext: "File Systems: Editors like VS Code associate syntax highlighting when files have the .py extension.",
        codeSnippet: "# Example file: main.py"
      }
    ],
    game: {
      l1: {
        title: "Warm Up — Code Puzzle",
        question: "Which language are you learning in this course?",
        blocks: [
          { id: "b1", text: "Python", kind: "correct", bg: "#f0fdf4", textCol: "#15803d", borderCol: "#bbf7d0" },
          { id: "b2", text: "Cobol", kind: "wrong", bg: "#fef2f2", textCol: "#b91c1c", borderCol: "#fecaca" },
          { id: "b3", text: "Fortran", kind: "wrong", bg: "#fff1f2", textCol: "#be123c", borderCol: "#fecdd3" }
        ],
        correctOrder: ["b1"],
        explanation: "You are mastering Python — the world's #1 programming language for Data and AI!"
      },
      l2: {
        title: "Think — Predict Output",
        question: "What is the purpose of running a simple Python instruction like print('Hello')?",
        snippetLines: [
          "print('Hello')",
          "# Terminal executes this instruction"
        ],
        options: [
          { id: "o1", text: "To tell the interpreter to output 'Hello' to the terminal", isCorrect: true, note: "print() directs the string to standard output." },
          { id: "o2", text: "To shut down the computer", isCorrect: false, note: "print() only outputs text to the screen." },
          { id: "o3", text: "To compile code to hardware circuitry", isCorrect: false, note: "Python is interpreted, not compiled to raw silicon." },
          { id: "o4", text: "To format the disk", isCorrect: false, note: "print() is a safe standard output function." }
        ]
      },
      l3: {
        title: "Debug — Bug Hunter",
        question: "A learner saves Python code but never runs it. How can they check whether it works?",
        lines: [
          { line: 1, text: "# File saved as app.py", isBug: false },
          { line: 2, text: "# Code written, but terminal never invoked", isBug: true, bugMsg: "Unverified Code: Saving is not executing. The interpreter must run it." },
          { line: 3, text: "msg = 'Hello World'", isBug: false },
          { line: 4, text: "print(msg)", isBug: false }
        ],
        bugLine: 2,
        patches: [
          { id: "p1", code: "# Execute in terminal: python app.py", label: "Patch A: Run the file with Python interpreter", isCorrect: true },
          { id: "p2", code: "# Save file again 10 times", label: "Patch B: Save repeatedly", isCorrect: false },
          { id: "p3", code: "# Rename file to app.txt", label: "Patch C: Change extension to txt", isCorrect: false }
        ]
      },
      l4: {
        title: "Build — Build & Run",
        question: "Write a one-line Python statement that displays the word Python.",
        prefixCode: "",
        slot1Target: "print",
        midCode: "('",
        slot2Target: "Python",
        suffixCode: "')",
        availableTokens: ["print", "Python", "echo", "display", "System"],
        correctSlot1: "print",
        correctSlot2: "Python",
        expectedOutput: "Python"
      },
      l5: {
        bossName: "Byte Sentinel",
        title: "Boss Fight — Real Coding",
        question: "Write a tiny Python program that displays two separate messages: 'Welcome' and 'Python'.",
        scenario: "The Byte Sentinel checks your capability to output multiple sequential messages cleanly.",
        phase1Prompt: "Which approach outputs two messages on separate lines in Python?",
        phase1Options: [
          { id: "a1", text: "Two separate print() function calls", isCorrect: true },
          { id: "a2", text: "Combining them with no quotes", isCorrect: false },
          { id: "a3", text: "Writing comments only", isCorrect: false }
        ],
        phase2Prompt: "Write two print statements that output 'Welcome' and 'Python':",
        phase2Starter: "# Output Welcome and Python on separate lines:\\n",
        phase2Solution: "print('Welcome')\\nprint('Python')",
        phase2ExpectedOutput: "Welcome\\nPython"
      }
    },
    codingChallenges: [
      {
        id: 1,
        title: "Challenge 1: Explain Python in One Sentence",
        prompt: "Explain Python in one sentence for a beginner.",
        expectedApproach: "Expected: a language for writing instructions computers can run.",
        starterCode: "# Output one sentence explaining Python:\\nprint('Python is a language for writing instructions computers can run.')",
        solutionCode: "print('Python is a language for writing instructions computers can run.')",
        expectedOutput: "Python is a language for writing instructions computers can run.",
        hints: [
          { step: 1, title: "High-level language", desc: "Python translates human-readable commands into computer actions.", code: "print('Python is a language for writing instructions computers can run.')" }
        ]
      },
      {
        id: 2,
        title: "Challenge 2: List Three Uses of Python",
        prompt: "List three major uses of Python on separate lines.",
        expectedApproach: "Expected: examples such as analytics, automation, web apps.",
        starterCode: "print('1. Data Analytics')\\n# Add two more uses below:\\n",
        solutionCode: "print('1. Data Analytics')\\nprint('2. Automation')\\nprint('3. Web Development')",
        expectedOutput: "1. Data Analytics\\n2. Automation\\n3. Web Development",
        hints: [
          { step: 1, title: "Industry domains", desc: "Include Data, Automation, and Web.", code: "print('2. Automation')\\nprint('3. Web Development')" }
        ]
      },
      {
        id: 3,
        title: "Challenge 3: Match Tasks to Python Domains",
        prompt: "Match: analyze CSV -> Analytics, rename files -> Automation, build web API -> Web Dev.",
        expectedApproach: "Expected: analytics, automation, web development.",
        starterCode: "print('analyze CSV: Analytics')\\nprint('rename files: Automation')\\nprint('build web API: Web Development')",
        solutionCode: "print('analyze CSV: Analytics')\\nprint('rename files: Automation')\\nprint('build web API: Web Development')",
        expectedOutput: "analyze CSV: Analytics\\nrename files: Automation\\nbuild web API: Web Development",
        hints: [
          { step: 1, title: "Domains", desc: "Print each matching pair clearly.", code: "print('analyze CSV: Analytics')" }
        ]
      },
      {
        id: 4,
        title: "Challenge 4: Explain Code vs Output",
        prompt: "Explain the difference between code and output in a short program.",
        expectedApproach: "Expected: code is instructions; output is the execution result.",
        starterCode: "print('Code is instructions; output is the execution result.')",
        solutionCode: "print('Code is instructions; output is the execution result.')",
        expectedOutput: "Code is instructions; output is the execution result.",
        hints: [
          { step: 1, title: "Core distinction", desc: "Code is written instructions; output is what happens when run.", code: "print('Code is instructions; output is the execution result.')" }
        ]
      },
      {
        id: 5,
        title: "Challenge 5: What does 'lesson.py' suggest?",
        prompt: "Display what the file extension .py indicates to developers and operating systems.",
        expectedApproach: "Expected: likely a Python source file.",
        starterCode: "print('lesson.py is a Python source file')",
        solutionCode: "print('lesson.py is a Python source file')",
        expectedOutput: "lesson.py is a Python source file",
        hints: [
          { step: 1, title: "Extension meaning", desc: ".py identifies standard Python source files.", code: "print('lesson.py is a Python source file')" }
        ]
      }
    ],
    interviewQuestions: [
      {
        id: 1,
        question: "What is Python?",
        modelAnswer: "A high-level, general-purpose programming language.",
        tag: "Fundamentals"
      },
      {
        id: 2,
        question: "Name three Python application areas.",
        modelAnswer: "Data analytics, automation, web development, scientific computing, etc.",
        tag: "Industry Ecosystem"
      },
      {
        id: 3,
        question: "Why is Python beginner-friendly?",
        modelAnswer: "Readable syntax, extensive learning resources and libraries.",
        tag: "Language Design"
      },
      {
        id: 4,
        question: "What is a library?",
        modelAnswer: "Reusable code that helps developers perform common tasks.",
        tag: "Software Engineering"
      },
      {
        id: 5,
        question: "Is Python only for data analytics?",
        modelAnswer: "No; it is also used in automation, web, scientific computing and testing.",
        tag: "Careers"
      }
    ]
  }
];

console.log('Writing first batch to check structure...');
