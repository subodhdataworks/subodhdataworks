// Complete Python Coding Practice Question Bank (Topics 1 - 25, Intermediate, Advanced & Popular)
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../services/firebase';
import { awardLearnerTelemetry } from '../../../services/realAuthService';
import { getVerifiedSolutionForTask } from './challengeSolutionsBank';

export interface ChallengeTask {
  id: number;
  taskNumber: number;
  title: string;
  points: number;
  successRate: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  problemStatement: string;
  highlightedKeyword: string;
  inputFormat: string;
  outputFormat: string;
  outputFormatSample: string;
  constraints: string[];
  sampleInput: string;
  sampleOutput: string;
  starterCode: string;
  hint: string;
  solution: string;
  published?: boolean;
  deleted?: boolean;
  validate: (code: string, output: string) => { passed: boolean; message: string };
}

export interface PythonTopicDefinition {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  maxScore: number;
  skill: string;
  description: string;
  tabs: ('all' | 'basic' | 'intermediate' | 'advanced' | 'popular')[];
  solved?: boolean;
  bookmarked?: boolean;
  published?: boolean;
  deleted?: boolean;
  questions: ChallengeTask[];
}

function makeTask(
  topicId: number,
  taskNumber: number,
  title: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  skill: string,
  points: number,
  successRate: string,
  problemStatement: string,
  highlightedKeyword: string,
  sampleOutput: string,
  hint: string,
  solution: string,
  validateFn?: (code: string, output: string) => { passed: boolean; message: string }
): ChallengeTask {
  return {
    id: topicId * 100 + taskNumber,
    taskNumber,
    title,
    points,
    successRate,
    skill,
    difficulty,
    problemStatement,
    highlightedKeyword,
    inputFormat: 'No input is required / standard inputs.',
    outputFormat: 'Print the evaluated answer to console:',
    outputFormatSample: sampleOutput,
    constraints: ['Write clean, valid Python 3 code matching the problem statement.'],
    sampleInput: '(Standard input)',
    sampleOutput,
    starterCode: '# Write your code here\n',
    hint,
    solution,
    validate:
      validateFn ||
      ((code, output) => {
        const cleanCode = code.replace('# Write your code here', '').trim();
        if (!cleanCode) {
          return { passed: false, message: 'Please write your Python code in the editor.' };
        }
        const cleanOutput = output.trim();
        const expected = sampleOutput.trim();
        if (cleanOutput === expected || cleanOutput.includes(expected)) {
          return { passed: true, message: `Excellent! Output matches "${expected}".` };
        }
        if (cleanOutput.length > 0) {
          return { passed: true, message: `Great effort! Program executed and printed: "${cleanOutput}".` };
        }
        return { passed: false, message: `Expected output "${expected}" but got empty output.` };
      })
  };
}

// ─────────────────────────────────────────────────────────────
// TOPIC 1: Say Hello, World! With Python
// ─────────────────────────────────────────────────────────────
const TOPIC_1_QUESTIONS: ChallengeTask[] = [
  makeTask(1, 1, 'Print Hello, World!', 'Easy', 'Python Basics', 5, '96.1%', 'Write a Python program to print the message "Hello, World!".', 'print', 'Hello, World!', 'Use print("Hello, World!")', 'print("Hello, World!")'),
  makeTask(1, 2, 'Print Your Name', 'Easy', 'Python Basics', 5, '95.4%', 'Write a Python program to print your name to the output.', 'print', 'Rahul', 'print("Rahul")', 'print("Rahul")'),
  makeTask(1, 3, 'Print Multiple Lines', 'Easy', 'Python Basics', 5, '94.2%', 'Print two different messages on separate lines using multiple print() statements.', 'print', 'Good Morning\nWelcome to Python', 'print("Good Morning")\nprint("Welcome to Python")', 'print("Good Morning")\nprint("Welcome to Python")'),
  makeTask(1, 4, 'Print Text and Numbers', 'Easy', 'Python Basics', 5, '92.8%', 'Print text and a number together separated by a comma.', 'print', 'Age: 20', 'print("Age:", 20)', 'print("Age:", 20)'),
  makeTask(1, 5, 'Print Using \\n', 'Easy', 'Python Basics', 5, '94.6%', 'Print two lines of text using a single print statement and the \\n escape character.', '\\n', 'Hello\nPython', 'print("Hello\\nPython")', 'print("Hello\\nPython")'),
  makeTask(1, 6, 'Print a Mini Introduction', 'Easy', 'Python Basics', 5, '94.0%', 'Write a Python program to display your name, age and city on separate lines.', 'print', 'Name: Rahul\nAge: 20\nCity: Patna', 'print("Name:", "Rahul")\nprint("Age:", 20)\nprint("City:", "Patna")', 'print("Name:", "Rahul")\nprint("Age:", 20)\nprint("City:", "Patna")')
];

// ─────────────────────────────────────────────────────────────
// ARCHIVED TOPIC 1 QUESTIONS (SAFELY PRESERVED FOR HISTORICAL RECORDS)
// ─────────────────────────────────────────────────────────────
export const ARCHIVED_TOPIC_1_QUESTIONS: ChallengeTask[] = [
  makeTask(1, 7, 'Single vs Double Quotes', 'Easy', 'Python Basics', 5, '93.0%', 'Demonstrate printing strings with double and single quotes.', 'print', 'Python\nCoding', 'print("Python")\nprint(\'Coding\')', 'print("Python")\nprint(\'Coding\')'),
  makeTask(1, 8, 'Print Without a Newline', 'Easy', 'Python Basics', 5, '89.7%', 'Print two messages on the same line using the end parameter.', 'end=" "', 'Hello Python', 'print("Hello", end=" ")\nprint("Python")', 'print("Hello", end=" ")\nprint("Python")'),
  makeTask(1, 9, 'Print a Simple Pattern', 'Easy', 'Python Basics', 5, '95.0%', 'Print a star pyramid pattern using sequential print statements.', 'pattern', '*\n**\n***', 'print("*")\nprint("**")\nprint("***")', 'print("*")\nprint("**")\nprint("***")'),
  makeTask(1, 10, 'Print a Mini Student Profile', 'Easy', 'Python Basics', 5, '88.3%', 'Print a formatted student profile containing title, name, age, and learning track.', 'profile', 'MY PROFILE\nName: Rahul\nAge: 20\nLearning: Python', 'print("MY PROFILE")\nprint("Name:", "Rahul")\nprint("Age:", 20)\nprint("Learning:", "Python")', 'print("MY PROFILE")\nprint("Name:", "Rahul")\nprint("Age:", 20)\nprint("Learning:", "Python")')
];

// ─────────────────────────────────────────────────────────────
// TOPIC 2: Python If-Else
// ─────────────────────────────────────────────────────────────
const TOPIC_2_QUESTIONS: ChallengeTask[] = [
  makeTask(2, 1, 'Check whether a number is positive or negative.', 'Easy', 'Python Basics', 5, '94.0%', 'Check if a number is positive, negative, or zero using if-elif-else.', 'positive or negative', 'Positive', 'Use num = 10; if num > 0: print("Positive")', 'num = 10\nif num > 0:\n    print("Positive")\nelif num < 0:\n    print("Negative")\nelse:\n    print("Zero")'),
  makeTask(2, 2, 'Check whether a number is even or odd.', 'Easy', 'Python Basics', 5, '95.2%', 'Check whether a number is even or odd using the modulo operator % 2.', 'even or odd', 'Even', 'if num % 2 == 0: print("Even")', 'num = 8\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")'),
  makeTask(2, 3, 'Find the greater of two numbers.', 'Easy', 'Python Basics', 5, '93.5%', 'Compare two numbers a and b and print the greater number.', 'greater of two numbers', '25 is greater', 'if a > b: print(f"{a} is greater")', 'a = 25\nb = 14\nif a > b:\n    print(f"{a} is greater")\nelse:\n    print(f"{b} is greater")'),
  makeTask(2, 4, 'Check whether a person is eligible to vote using an age threshold of 18.', 'Easy', 'Python Basics', 5, '96.0%', 'Check if age >= 18 to determine voting eligibility.', 'eligible to vote', 'Eligible to vote', 'if age >= 18: print("Eligible to vote")', 'age = 20\nif age >= 18:\n    print("Eligible to vote")\nelse:\n    print("Not eligible to vote")'),
  makeTask(2, 5, 'Check whether a number is divisible by 5.', 'Easy', 'Python Basics', 5, '92.1%', 'Check if a number is divisible by 5 with no remainder.', 'divisible by 5', 'Divisible by 5', 'if num % 5 == 0: print("Divisible by 5")', 'num = 35\nif num % 5 == 0:\n    print("Divisible by 5")\nelse:\n    print("Not divisible by 5")'),
  makeTask(2, 6, 'Check whether a year is a leap year.', 'Easy', 'Python Basics', 5, '87.4%', 'Determine whether year is a leap year ((year % 4 == 0 and year % 100 != 0) or year % 400 == 0).', 'leap year', '2024 is a leap year', 'Check leap year conditions', 'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f"{year} is a leap year")\nelse:\n    print(f"{year} is not a leap year")'),
  makeTask(2, 7, 'Find the greatest of three numbers.', 'Easy', 'Python Basics', 5, '91.8%', 'Find the maximum among three numbers x, y, and z using if-elif-else.', 'greatest of three numbers', 'Greatest: 45', 'Compare using and logical operator', 'x, y, z = 12, 45, 30\nif x >= y and x >= z:\n    print(f"Greatest: {x}")\nelif y >= x and y >= z:\n    print(f"Greatest: {y}")\nelse:\n    print(f"Greatest: {z}")'),
  makeTask(2, 8, 'Assign a grade based on marks and given grade boundaries.', 'Easy', 'Python Basics', 5, '93.3%', 'Assign Grade A (>=90), B (>=80), C (>=70), or Fail (<70).', 'grade based on marks', 'Grade: A', 'Use if marks >= 90: print("Grade: A")', 'marks = 92\nif marks >= 90:\n    print("Grade: A")\nelif marks >= 80:\n    print("Grade: B")\nelif marks >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: Fail")'),
  makeTask(2, 9, 'Check whether a character is a vowel or consonant.', 'Easy', 'Python Basics', 5, '90.5%', 'Check if a character is one of "aeiouAEIOU".', 'vowel or consonant', 'Vowel', 'if ch.lower() in "aeiou": print("Vowel")', 'ch = "e"\nif ch.lower() in "aeiou":\n    print("Vowel")\nelse:\n    print("Consonant")'),
  makeTask(2, 10, 'Create a calculator that performs addition, subtraction, multiplication or division based on an operator.', 'Easy', 'Python Basics', 5, '89.2%', 'Perform +, -, *, or / based on operator string.', 'calculator with operator', 'Result: 30', 'Use if op == "+": print(f"Result: {a+b}")', 'a, b, op = 10, 20, "+"\nif op == "+":\n    print(f"Result: {a + b}")\nelif op == "-":\n    print(f"Result: {a - b}")\nelif op == "*":\n    print(f"Result: {a * b}")\nelif op == "/":\n    print(f"Result: {a / b}")')
];

// ─────────────────────────────────────────────────────────────
// TOPIC 3: Arithmetic Operators / Python Operators (Topic 4 in syllabus)
// ─────────────────────────────────────────────────────────────
const TOPIC_3_CURATED_TASKS: ChallengeTask[] = [
  makeTask(
    3,
    1,
    'Add Two Numbers',
    'Easy',
    'Python Basics',
    5,
    '97.2%',
    'Add two numbers using the + operator.',
    '+',
    '15',
    'Create variables a = 10, b = 5, calculate result = a + b, and print(result).',
    'a = 10\nb = 5\nresult = a + b\nprint(result)'
  ),
  makeTask(
    3,
    2,
    'Arithmetic Operators',
    'Easy',
    'Python Basics',
    5,
    '96.5%',
    'Perform addition, subtraction, multiplication and division.',
    '+, -, *, /',
    '24\n16\n80\n5.0',
    'Create a = 20, b = 4, then print a + b, a - b, a * b, and a / b on separate lines.',
    'a = 20\nb = 4\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)'
  ),
  makeTask(
    3,
    3,
    'Division, Floor Division and Modulus',
    'Easy',
    'Python Basics',
    5,
    '96.0%',
    'Understand /, // and % operators.',
    '/, //, %',
    '3.4\n3\n2',
    'Create a = 17, b = 5, then print(a / b), print(a // b), and print(a % b).',
    'a = 17\nb = 5\n\nprint(a / b)\nprint(a // b)\nprint(a % b)'
  ),
  makeTask(
    3,
    4,
    'Power Operator',
    'Easy',
    'Python Basics',
    5,
    '95.5%',
    'Calculate the square and cube of a number using **.',
    '**',
    'Square: 9\nCube: 27',
    'num = 3\nsquare = num ** 2\ncube = num ** 3\n\nprint("Square:", square)\nprint("Cube:", cube)',
    'num = 3\nsquare = num ** 2\ncube = num ** 3\n\nprint("Square:", square)\nprint("Cube:", cube)'
  ),
  makeTask(
    3,
    5,
    'Operator Precedence',
    'Easy',
    'Python Basics',
    5,
    '94.8%',
    'Understand how Python evaluates mathematical expressions.',
    'Precedence',
    '20\n30\n12',
    'a = 10 + 5 * 2\nb = (10 + 5) * 2\nc = 2 ** 3 + 4\n\nprint(a)\nprint(b)\nprint(c)',
    'a = 10 + 5 * 2\nb = (10 + 5) * 2\nc = 2 ** 3 + 4\n\nprint(a)\nprint(b)\nprint(c)'
  ),
  makeTask(
    3,
    6,
    'Comparison Operators',
    'Easy',
    'Python Basics',
    5,
    '95.2%',
    'Compare two numbers using Python Comparison Operators.',
    '==, !=, >, <, >=, <=',
    'False\nTrue\nTrue\nFalse\nTrue\nFalse',
    'a = 10\nb = 5\n\nprint(a == b)\nprint(a != b)\nprint(a > b)\nprint(a < b)\nprint(a >= b)\nprint(a <= b)',
    'a = 10\nb = 5\n\nprint(a == b)\nprint(a != b)\nprint(a > b)\nprint(a < b)\nprint(a >= b)\nprint(a <= b)'
  ),
  makeTask(
    3,
    7,
    'Logical AND Operator',
    'Easy',
    'Python Basics',
    5,
    '94.5%',
    'Check whether a student meets both eligibility conditions using and.',
    'and',
    'True',
    'age = 20\nmarks = 75\n\neligible = age >= 18 and marks >= 60\nprint(eligible)',
    'age = 20\nmarks = 75\n\neligible = age >= 18 and marks >= 60\nprint(eligible)'
  ),
  makeTask(
    3,
    8,
    'Logical OR and NOT Operators',
    'Easy',
    'Python Basics',
    5,
    '93.8%',
    'Understand or and not using Boolean conditions.',
    'or, not',
    'True\nTrue\nFalse',
    'has_id = False\nhas_pass = True\n\nprint(has_id or has_pass)\nprint(not has_id)\nprint(has_id and has_pass)',
    'has_id = False\nhas_pass = True\n\nprint(has_id or has_pass)\nprint(not has_id)\nprint(has_id and has_pass)'
  ),
  makeTask(
    3,
    9,
    'Assignment Operators',
    'Easy',
    'Python Basics',
    5,
    '94.2%',
    'Update a variable using Assignment Operators.',
    '+=, -=, *=, /=',
    '15\n12\n24\n6.0',
    'score = 10\n\nscore += 5\nprint(score)\n\nscore -= 3\nprint(score)\n\nscore *= 2\nprint(score)\n\nscore /= 4\nprint(score)',
    'score = 10\n\nscore += 5\nprint(score)\n\nscore -= 3\nprint(score)\n\nscore *= 2\nprint(score)\n\nscore /= 4\nprint(score)'
  ),
  makeTask(
    3,
    10,
    'Membership Operators',
    'Easy',
    'Python Basics',
    5,
    '95.4%',
    'Check whether an item exists in a list using in and not in.',
    'in, not in',
    'True\nTrue',
    'fruits = ["apple", "banana", "mango"]\n\nprint("apple" in fruits)\nprint("grapes" not in fruits)',
    'fruits = ["apple", "banana", "mango"]\n\nprint("apple" in fruits)\nprint("grapes" not in fruits)'
  ),
  makeTask(
    3,
    11,
    'Identity Operators',
    'Easy',
    'Python Basics',
    5,
    '94.8%',
    'Compare variables using identity operators is and is not.',
    'is, is not',
    'True\nFalse\nTrue\nTrue',
    'a = [10, 20]\nb = [10, 20]\nc = a\n\nprint(a == b)\nprint(a is b)\nprint(a is c)\nprint(a is not b)',
    'a = [10, 20]\nb = [10, 20]\nc = a\n\nprint(a == b)\nprint(a is b)\nprint(a is c)\nprint(a is not b)'
  ),
  makeTask(
    3,
    12,
    'Python Operators Master Challenge',
    'Medium',
    'Python Basics',
    10,
    '92.5%',
    'Build a complete shopping bill and wallet balance checker using arithmetic, assignment, comparison and logical operators.',
    'arithmetic, assignment, comparison, logical',
    'Final Bill: 550\nCan Buy: True\nRemaining: 150',
    'price = 200\nquantity = 3\nwallet = 700\n\ntotal = price * quantity\ndiscount = 50\ntotal -= discount\n\ncan_buy = wallet >= total and total > 0\n\nprint("Final Bill:", total)\nprint("Can Buy:", can_buy)\nprint("Remaining:", wallet - total)',
    'price = 200\nquantity = 3\nwallet = 700\n\ntotal = price * quantity\ndiscount = 50\ntotal -= discount\n\ncan_buy = wallet >= total and total > 0\n\nprint("Final Bill:", total)\nprint("Can Buy:", can_buy)\nprint("Remaining:", wallet - total)'
  ),
];

const TOPIC_3_REMAINING_TASKS: ChallengeTask[] = [];

const TOPIC_3_QUESTIONS: ChallengeTask[] = [
  ...TOPIC_3_CURATED_TASKS,
  ...TOPIC_3_REMAINING_TASKS,
];

// ─────────────────────────────────────────────────────────────
// TOPIC 4: Python: Division
// ─────────────────────────────────────────────────────────────
const TOPIC_4_QUESTIONS: ChallengeTask[] = [
  makeTask(4, 1, 'Divide two numbers and print the result.', 'Easy', 'Python Basics', 5, '96.0%', 'Divide a by b using / operator.', 'Divide two numbers', 'Result: 2.5', 'a / b', 'a, b = 5, 2\nprint(f"Result: {a / b}")'),
  makeTask(4, 2, 'Print the integer quotient of two positive integers.', 'Easy', 'Python Basics', 5, '94.5%', 'Use floor division // to print the integer quotient.', 'integer quotient', 'Quotient: 4', 'a // b', 'a, b = 21, 5\nprint(f"Quotient: {a // b}")'),
  makeTask(4, 3, 'Print the remainder after division.', 'Easy', 'Python Basics', 5, '95.0%', 'Use the modulo operator % to find the remainder.', 'remainder after division', 'Remainder: 1', 'a % b', 'a, b = 21, 5\nprint(f"Remainder: {a % b}")'),
  makeTask(4, 4, 'Convert total minutes into hours and remaining minutes.', 'Easy', 'Python Basics', 5, '91.8%', 'Convert 135 minutes to hours and minutes.', 'minutes into hours', '2 hours and 15 minutes', 'hours = mins // 60; remaining = mins % 60', 'total_mins = 135\nhours = total_mins // 60\nrem = total_mins % 60\nprint(f"{hours} hours and {rem} minutes")'),
  makeTask(4, 5, 'Convert total seconds into minutes and remaining seconds.', 'Easy', 'Python Basics', 5, '92.3%', 'Convert 250 seconds into minutes and seconds.', 'seconds into minutes', '4 minutes and 10 seconds', 'mins = secs // 60; rem = secs % 60', 'total_secs = 250\nmins = total_secs // 60\nrem = total_secs % 60\nprint(f"{mins} minutes and {rem} seconds")'),
  makeTask(4, 6, 'Divide a bill equally among a given number of people.', 'Easy', 'Python Basics', 5, '93.7%', 'Divide bill amount among n friends.', 'Divide a bill equally', 'Each person pays: 250.0', 'bill / people', 'bill = 1000\npeople = 4\nprint(f"Each person pays: {bill / people}")'),
  makeTask(4, 7, 'Calculate the average of three numbers.', 'Easy', 'Python Basics', 5, '95.4%', 'Compute (a + b + c) / 3.', 'average of three numbers', 'Average: 20.0', '(a + b + c) / 3', 'a, b, c = 10, 20, 30\navg = (a + b + c) / 3\nprint(f"Average: {avg}")'),
  makeTask(4, 8, 'Convert total days into weeks and remaining days.', 'Easy', 'Python Basics', 5, '91.0%', 'Convert 23 days to weeks and days.', 'days into weeks', '3 weeks and 2 days', 'weeks = days // 7; rem = days % 7', 'days = 23\nweeks = days // 7\nrem = days % 7\nprint(f"{weeks} weeks and {rem} days")'),
  makeTask(4, 9, 'Calculate how many complete boxes can be filled from a given number of items.', 'Easy', 'Python Basics', 5, '90.2%', 'Use integer division to find full boxes.', 'complete boxes', 'Complete boxes: 8', 'items // box_size', 'items = 85\nbox_capacity = 10\nprint(f"Complete boxes: {items // box_capacity}")'),
  makeTask(4, 10, 'Handle division by zero by printing an appropriate error message.', 'Easy', 'Python Basics', 5, '88.5%', 'Check if divisor == 0 before dividing or use try-except.', 'division by zero', 'Error: Cannot divide by zero', 'if b == 0: print("Error: Cannot divide by zero")', 'a, b = 10, 0\nif b == 0:\n    print("Error: Cannot divide by zero")\nelse:\n    print(a / b)')
];

// Helper to generate topics with accurate questions and verified solutions
function generateTopicTasks(
  topicId: number,
  topicTitle: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  skill: string,
  questionTitles: string[]
): ChallengeTask[] {
  return questionTitles.map((qTitle, idx) => {
    const taskNum = idx + 1;
    const verified = getVerifiedSolutionForTask(topicId, taskNum);
    const solutionCode = verified?.solution || '';
    const sampleOutput = verified?.sampleOutput || '';
    const hint = verified?.hint || `Write clean Python 3 code to solve: ${qTitle}`;

    if (!solutionCode) {
      console.error(`[Data Integrity Error] Missing verified solution for Topic ${topicId} Task ${taskNum}: "${qTitle}"`);
    }

    return makeTask(
      topicId,
      taskNum,
      qTitle,
      difficulty,
      skill,
      difficulty === 'Easy' ? 5 : difficulty === 'Medium' ? 10 : 15,
      `${Math.floor(88 + ((taskNum * 7) % 10))}.${taskNum % 9}%`,
      `Implement Python solution for: ${qTitle}`,
      qTitle.split(' ').slice(0, 3).join(' '),
      sampleOutput,
      hint,
      solutionCode
    );
  });
}

// ─────────────────────────────────────────────────────────────
// TOPIC 5: Loops
// ─────────────────────────────────────────────────────────────
const TOPIC_5_QUESTIONS = generateTopicTasks(5, 'Loops', 'Easy', 'Python Basics', [
  'Print numbers from 1 to 10.',
  'Print numbers from 10 to 1.',
  'Print all even numbers from 1 to 100.',
  'Print all odd numbers from 1 to 100.',
  'Calculate the sum of numbers from 1 to N.',
  'Print the multiplication table of a given number.',
  'Calculate the factorial of a positive integer using a loop.',
  'Count the digits in an integer.',
  'Reverse the digits of a positive integer.',
  'Check whether an integer is a palindrome using a loop.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 6: Variables and Data Types (EXACTLY 9 ACTIVE CHALLENGES)
// ─────────────────────────────────────────────────────────────
const TOPIC_6_QUESTIONS: ChallengeTask[] = [
  makeTask(6, 1, 'Create and Print a Variable', 'Easy', 'Python Basics', 5, '96.5%', 'Create a variable named name, assign a string to it and print its value.', 'name', 'Rahul', 'name = "Rahul"\nprint(name)', 'name = "Rahul"\nprint(name)'),
  makeTask(6, 2, "Update a Variable's Value", 'Easy', 'Python Basics', 5, '95.1%', 'Create a variable, print its value, change the value and print it again.', 'score', '10\n25', 'score = 10\nprint(score)\nscore = 25\nprint(score)', 'score = 10\nprint(score)\nscore = 25\nprint(score)'),
  makeTask(6, 3, 'Explore Basic Data Types', 'Easy', 'Python Basics', 5, '93.8%', 'Create variables containing a string, integer, float and boolean, then print their values.', 'types', 'Rahul\n20\n5.8\nTrue', 'name = "Rahul"\nage = 20\nheight = 5.8\nis_student = True\n\nprint(name)\nprint(age)\nprint(height)\nprint(is_student)', 'name = "Rahul"\nage = 20\nheight = 5.8\nis_student = True\n\nprint(name)\nprint(age)\nprint(height)\nprint(is_student)'),
  makeTask(6, 4, 'Identify Data Types Using type()', 'Easy', 'Python Basics', 5, '94.2%', 'Create variables and identify their data types using type().', 'type()', "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>", 'name = "Rahul"\nage = 20\nheight = 5.8\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(height))\nprint(type(is_student))', 'name = "Rahul"\nage = 20\nheight = 5.8\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(height))\nprint(type(is_student))'),
  makeTask(6, 5, 'Convert String to Integer', 'Easy', 'Python Basics', 5, '92.8%', 'Convert a numeric string into an integer and add 5.', 'int()', '25', 'number = "20"\nconverted = int(number)\nresult = converted + 5\nprint(result)', 'number = "20"\nconverted = int(number)\nresult = converted + 5\nprint(result)'),
  makeTask(6, 6, 'Build a Student Profile', 'Easy', 'Python Basics', 5, '91.5%', 'Create a student profile using variables, different data types and type conversion.', 'Student Profile', 'Name: Rahul\nAge: 20\nHeight: 5.8\nStudent: True', 'name = "Rahul"\nage_text = "20"\nheight = 5.8\nis_student = True\n\nage = int(age_text)\n\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Student:", is_student)', 'name = "Rahul"\nage_text = "20"\nheight = 5.8\nis_student = True\n\nage = int(age_text)\n\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Student:", is_student)'),
  makeTask(6, 7, 'Python Variable Naming Rules', 'Easy', 'Python Basics', 5, '95.0%', 'Create valid Python variables and print their values.', 'naming rules', 'Rahul\n20\n500', 'student_name = "Rahul"\nage2 = 20\n_total = 500\n\nprint(student_name)\nprint(age2)\nprint(_total)', 'student_name = "Rahul"\nage2 = 20\n_total = 500\n\nprint(student_name)\nprint(age2)\nprint(_total)'),
  makeTask(6, 8, 'Convert Between Data Types', 'Easy', 'Python Basics', 5, '93.4%', 'Convert an integer into a string and a numeric string into a float.', 'str() & float()', "20\n99.5\n<class 'str'>\n<class 'float'>", 'age = 20\nage_text = str(age)\n\nprice_text = "99.5"\nprice = float(price_text)\n\nprint(age_text)\nprint(price)\nprint(type(age_text))\nprint(type(price))', 'age = 20\nage_text = str(age)\n\nprice_text = "99.5"\nprice = float(price_text)\n\nprint(age_text)\nprint(price)\nprint(type(age_text))\nprint(type(price))'),
  makeTask(6, 9, 'Understanding None Data Type', 'Easy', 'Python Basics', 5, '92.1%', 'Create a variable with None, check its type and then assign a value.', 'None', "None\n<class 'NoneType'>\n100", 'result = None\nprint(result)\nprint(type(result))\n\nresult = 100\nprint(result)', 'result = None\nprint(result)\nprint(type(result))\n\nresult = 100\nprint(result)')
];

// ARCHIVED TOPIC 6 QUESTIONS (SAFELY PRESERVED FOR HISTORICAL RECORDS)
export const ARCHIVED_TOPIC_6_QUESTIONS: ChallengeTask[] = generateTopicTasks(6, 'Variables and Data Types', 'Easy', 'Python Basics', [
  'Swap two variables using a temporary variable.'
]).map((t, idx) => ({ ...t, taskNumber: idx + 10, id: 610 + idx }));

// ─────────────────────────────────────────────────────────────
// TOPIC 7: Input and Output (Batch 1: Q1-Q3 Curated)
// ─────────────────────────────────────────────────────────────
const TOPIC_7_CURATED_TASKS: ChallengeTask[] = [
  {
    ...makeTask(
      7,
      1,
      'Take Your Name as Input',
      'Easy',
      'Python Basics',
      5,
      '97.2%',
      'Ask the user to enter their name and display it.',
      'input()',
      'Rahul',
      'Use input("Enter your name: ") to read user input, then print(name).',
      'name = input("Enter your name: ")\nprint(name)'
    ),
    sampleInput: 'Rahul',
  },
  {
    ...makeTask(
      7,
      2,
      'Greet the User',
      'Easy',
      'Python Basics',
      5,
      '96.4%',
      'Ask the user to enter their name and print a personalized greeting.',
      'print() with input',
      'Hello, Rahul',
      'Use input() to take name, then print("Hello,", name).',
      'name = input("Enter your name: ")\nprint("Hello,", name)'
    ),
    sampleInput: 'Rahul',
  },
  {
    ...makeTask(
      7,
      3,
      'Take Age as Input',
      'Easy',
      'Python Basics',
      5,
      '95.0%',
      'Ask the user for their age, display it and print its data type using type().',
      'type() with input',
      "Your age is: 20\n<class 'str'>",
      'Read age with input(), print it with label, and print type(age).',
      'age = input("Enter your age: ")\nprint("Your age is:", age)\nprint(type(age))'
    ),
    sampleInput: '20',
  },
  {
    ...makeTask(
      7,
      4,
      'Add Two Numbers Using Input',
      'Easy',
      'Python Basics',
      5,
      '94.5%',
      'Take two integer inputs and print their sum.',
      'int(input())',
      'Sum: 30',
      'Use int(input()) for both numbers and calculate total = num1 + num2.',
      'num1 = int(input("First number: "))\nnum2 = int(input("Second number: "))\ntotal = num1 + num2\nprint("Sum:", total)'
    ),
    sampleInput: '10\n20',
  },
  {
    ...makeTask(
      7,
      5,
      'Calculate Total Price',
      'Easy',
      'Python Basics',
      5,
      '93.8%',
      'Take product price and quantity as input, then calculate total price.',
      'float() & int()',
      'Total Price: 298.5',
      'Use float(input()) for price and int(input()) for quantity, then total = price * quantity.',
      'price = float(input("Enter price: "))\nquantity = int(input("Enter quantity: "))\ntotal = price * quantity\nprint("Total Price:", total)'
    ),
    sampleInput: '99.5\n3',
  },
  {
    ...makeTask(
      7,
      6,
      'Display Student Details',
      'Easy',
      'Python Basics',
      5,
      '95.2%',
      "Take a student's name, age and city as input and display their details.",
      'input() & print()',
      'Name: Rahul\nAge: 20\nCity: Patna',
      'Take inputs for name, age and city, then print each on a separate line.',
      'name = input("Enter name: ")\nage = int(input("Enter age: "))\ncity = input("Enter city: ")\n\nprint("Name:", name)\nprint("Age:", age)\nprint("City:", city)'
    ),
    sampleInput: 'Rahul\n20\nPatna',
  },
  {
    ...makeTask(
      7,
      7,
      'Format Output Using f-Strings',
      'Easy',
      'Python Basics',
      5,
      '95.8%',
      'Take a name and age as input, then display a personalized introduction using an f-string.',
      'f-string',
      'My name is Rahul and I am 20 years old.',
      'Take name with input(), age with int(input()), then print(f"My name is {name} and I am {age} years old.").',
      'name = input("Enter your name: ")\nage = int(input("Enter your age: "))\n\nprint(f"My name is {name} and I am {age} years old.")'
    ),
    sampleInput: 'Rahul\n20',
  },
  {
    ...makeTask(
      7,
      8,
      'Format Numbers to Two Decimals',
      'Easy',
      'Python Basics',
      5,
      '94.6%',
      'Take a product price as input and display it with exactly two decimal places.',
      '{price:.2f}',
      'Price: 99.50',
      'Take price with float(input("Enter price: ")), then print(f"Price: {price:.2f}").',
      'price = float(input("Enter price: "))\nprint(f"Price: {price:.2f}")'
    ),
    sampleInput: '99.5',
  },
  {
    ...makeTask(
      7,
      9,
      'Build an Interactive Student Profile',
      'Easy',
      'Python Basics',
      5,
      '96.2%',
      'Create a student profile using name, age, course and marks. Display a formatted introduction and marks with two decimal places.',
      'Student Profile',
      '--- Student Profile ---\nName: Rahul\nAge: 20\nCourse: Python\nMarks: 87.50',
      'Collect name, int age, course, float marks, then print header and f-string formatted lines.',
      'name = input("Enter name: ")\nage = int(input("Enter age: "))\ncourse = input("Enter course: ")\nmarks = float(input("Enter marks: "))\n\nprint("\\n--- Student Profile ---")\nprint(f"Name: {name}")\nprint(f"Age: {age}")\nprint(f"Course: {course}")\nprint(f"Marks: {marks:.2f}")'
    ),
    sampleInput: 'Rahul\n20\nPython\n87.5',
  },
];

const TOPIC_7_QUESTIONS: ChallengeTask[] = [
  ...TOPIC_7_CURATED_TASKS,
];

// ─────────────────────────────────────────────────────────────
// TOPIC 8: Comparison Operators
// ─────────────────────────────────────────────────────────────
const TOPIC_8_QUESTIONS = generateTopicTasks(8, 'Comparison Operators', 'Easy', 'Python Basics', [
  'Compare two numbers and print whether they are equal.',
  'Check whether one number is greater than another.',
  'Check whether a number lies between 10 and 50, inclusive.',
  'Check whether a number is outside a given range.',
  'Check whether a person\'s age is between 18 and 60, inclusive.',
  'Check whether two strings are equal.',
  'Check whether a number is divisible by both 3 and 5.',
  'Check whether a score meets a passing threshold.',
  'Compare three numbers and identify whether all are equal.',
  'Check whether a year is within a supplied inclusive range.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 9: For and While Loops
// ─────────────────────────────────────────────────────────────
const TOPIC_9_QUESTIONS = generateTopicTasks(9, 'For and While Loops', 'Easy', 'Python Basics', [
  'Print the first N positive integers using a for loop.',
  'Print the first N positive integers using a while loop.',
  'Calculate the sum of all even numbers up to N.',
  'Count numbers divisible by 7 in a given range.',
  'Find the first multiple of 9 greater than a supplied number.',
  'Keep reading numbers until the user enters zero, then print their sum.',
  'Count how many positive, negative and zero values appear in a list.',
  'Find the largest number in a list without using max().',
  'Print a right-angled triangle pattern using stars.',
  'Generate the first N Fibonacci numbers using a loop.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 10: Functions
// ─────────────────────────────────────────────────────────────
const TOPIC_10_QUESTIONS = generateTopicTasks(10, 'Functions', 'Easy', 'Python Basics', [
  'Create a function that returns the sum of two numbers.',
  'Create a function that checks whether a number is even.',
  'Create a function that returns the square of a number.',
  'Create a function that finds the greater of two numbers.',
  'Create a function that calculates factorial.',
  'Create a function that counts vowels in a string.',
  'Create a function that checks whether a string is a palindrome.',
  'Create a function that accepts a list and returns its sum without using sum().',
  'Create a function with a default argument for a greeting.',
  'Create a function that returns the minimum, maximum and average of a list.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 11: Strings
// ─────────────────────────────────────────────────────────────
const TOPIC_11_QUESTIONS = generateTopicTasks(11, 'Strings', 'Easy', 'Python Basics', [
  'Count the characters in a string without using len().',
  'Reverse a string.',
  'Count the vowels in a string.',
  'Count vowels and consonants separately.',
  'Convert a string to uppercase without using .upper().',
  'Check whether a string is a palindrome.',
  'Count the occurrences of a given character.',
  'Remove all spaces from a string.',
  'Find the first non-repeating character in a string.',
  'Find the longest word in a sentence.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 12: Lists
// ─────────────────────────────────────────────────────────────
const TOPIC_12_QUESTIONS = generateTopicTasks(12, 'Lists', 'Easy', 'Python Basics', [
  'Create a list of five numbers and print each element.',
  'Calculate the sum of list elements without using sum().',
  'Find the largest element without using max().',
  'Find the smallest element without using min().',
  'Count even and odd elements in a list.',
  'Remove duplicate elements while preserving their order.',
  'Reverse a list without using .reverse().',
  'Find the second-largest distinct element.',
  'Rotate a list to the right by K positions.',
  'Merge two sorted lists into one sorted list.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 13: Tuples and Sets
// ─────────────────────────────────────────────────────────────
const TOPIC_13_QUESTIONS = generateTopicTasks(13, 'Tuples and Sets', 'Easy', 'Python Basics', [
  'Create a tuple and print its elements.',
  'Find the number of elements in a tuple without using len().',
  'Find the maximum element in a tuple.',
  'Convert a list into a tuple.',
  'Convert a tuple into a list and append a new element.',
  'Remove duplicate values from a list using a set.',
  'Find the union of two sets.',
  'Find the intersection of two sets.',
  'Find elements present in the first set but not the second.',
  'Find common elements across three lists using sets.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 14: Dictionaries
// ─────────────────────────────────────────────────────────────
const TOPIC_14_QUESTIONS = generateTopicTasks(14, 'Dictionaries', 'Easy', 'Python Basics', [
  "Create a dictionary containing a student's name and marks.",
  'Retrieve a value using a given key.',
  'Add a new key-value pair to a dictionary.',
  'Update the value associated with a given key.',
  'Count the frequency of each character in a string.',
  'Count the frequency of each number in a list.',
  'Find the key associated with the largest value.',
  'Merge two dictionaries and sum values for duplicate keys.',
  'Invert a dictionary when its values are unique.',
  'Group a list of words by their first character.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 15: List Operations
// ─────────────────────────────────────────────────────────────
const TOPIC_15_QUESTIONS = generateTopicTasks(15, 'List Operations', 'Medium', 'Problem Solving', [
  'Insert an element at a specified index.',
  'Remove all occurrences of a given value.',
  'Find the index of the first occurrence of a value.',
  'Move all zeros to the end while preserving other elements\' order.',
  'Separate positive and negative numbers into two lists.',
  'Find all pairs whose sum equals a target.',
  'Find the intersection of two lists, including repeated occurrences.',
  'Split a list into chunks of size K.',
  'Rotate a list to the left by K positions.',
  'Find the longest consecutive increasing sequence in a list.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 16: Dictionary Operations
// ─────────────────────────────────────────────────────────────
const TOPIC_16_QUESTIONS = generateTopicTasks(16, 'Dictionary Operations', 'Medium', 'Problem Solving', [
  'Calculate the total of all numeric dictionary values.',
  'Find all keys associated with a specified value.',
  'Sort dictionary entries by value in ascending order.',
  'Sort dictionary entries by value in descending order.',
  'Merge dictionaries by adding values for matching keys.',
  'Remove dictionary entries whose values fall below a threshold.',
  'Convert a list of key-value pairs into a dictionary.',
  'Create a word-frequency dictionary from a sentence.',
  'Group student names by their scores.',
  'Build a nested dictionary of students and calculate each student\'s average marks.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 17: String Manipulation
// ─────────────────────────────────────────────────────────────
const TOPIC_17_QUESTIONS = generateTopicTasks(17, 'String Manipulation', 'Medium', 'Problem Solving', [
  'Remove punctuation from a sentence.',
  'Capitalise the first letter of every word.',
  'Replace multiple consecutive spaces with a single space.',
  'Find the most frequent character in a string.',
  'Check whether two strings are anagrams.',
  'Find the longest common prefix in a list of strings.',
  'Compress repeated characters, such as aaabbc into a3b2c1.',
  'Find all starting positions of a substring.',
  'Check whether one string is a rotation of another.',
  'Find the longest substring without repeating characters.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 18: List Comprehension
// ─────────────────────────────────────────────────────────────
const TOPIC_18_QUESTIONS = generateTopicTasks(18, 'List Comprehension', 'Medium', 'Python Intermediate', [
  'Create a list of squares from 1 to N.',
  'Create a list containing only even numbers.',
  'Convert all strings in a list to uppercase.',
  'Extract words longer than five characters.',
  'Create a list of numbers divisible by both 3 and 5.',
  'Flatten a two-dimensional list by one level.',
  'Create all coordinate pairs from two lists.',
  'Extract unique vowels from a sentence.',
  'Build a dictionary mapping numbers to their squares using a comprehension.',
  'Generate a matrix multiplication table using nested comprehensions.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 19: File Handling
// ─────────────────────────────────────────────────────────────
const TOPIC_19_QUESTIONS = generateTopicTasks(19, 'File Handling', 'Medium', 'Python Intermediate', [
  'Create a text file and write a greeting into it.',
  'Read and print the contents of a text file.',
  'Append a new line to an existing file.',
  'Count the number of lines in a file.',
  'Count words and characters in a text file.',
  'Find the longest word in a file.',
  'Copy the contents of one text file into another.',
  'Read a file and count how often a specified word occurs.',
  'Read a CSV file and calculate the sum of a numeric column.',
  'Read a large text file line by line and count lines containing a search term.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 20: Exception Handling
// ─────────────────────────────────────────────────────────────
const TOPIC_20_QUESTIONS = generateTopicTasks(20, 'Exception Handling', 'Medium', 'Python Intermediate', [
  'Handle invalid integer input using try and except.',
  'Handle division by zero.',
  'Ask for input again until the user enters a valid integer.',
  'Safely access a dictionary key that may not exist.',
  'Handle a missing file when reading a text file.',
  'Convert a list of strings into integers while handling invalid values.',
  'Create a function that raises ValueError for negative input.',
  'Validate age input and reject values outside an allowed range.',
  'Create a custom exception for insufficient account balance.',
  'Read several numbers and report invalid entries without stopping the entire process.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 21: Recursion Basics
// ─────────────────────────────────────────────────────────────
const TOPIC_21_QUESTIONS = generateTopicTasks(21, 'Recursion Basics', 'Hard', 'Problem Solving', [
  'Calculate factorial recursively.',
  'Calculate the sum of integers from 1 to N recursively.',
  'Find the Nth Fibonacci number recursively.',
  'Calculate the power a^b recursively.',
  'Find the sum of digits recursively.',
  'Reverse a string recursively.',
  'Check whether a string is a palindrome recursively.',
  'Find the greatest common divisor using recursion.',
  'Find the maximum element in a list recursively.',
  'Solve the Tower of Hanoi for N disks.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 22: Sorting Algorithms
// ─────────────────────────────────────────────────────────────
const TOPIC_22_QUESTIONS = generateTopicTasks(22, 'Sorting Algorithms', 'Hard', 'Problem Solving', [
  'Sort a list using Bubble Sort.',
  'Implement Selection Sort.',
  'Implement Insertion Sort.',
  'Implement Merge Sort.',
  'Implement Quick Sort.',
  'Sort a list of tuples by their second element.',
  'Sort strings by length, then alphabetically.',
  'Sort numbers by frequency, with a defined tie-breaking rule.',
  'Merge two sorted lists without using .sort() or sorted().',
  'Find the Kth-largest element using an appropriate sorting algorithm.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 23: Search Algorithms
// ─────────────────────────────────────────────────────────────
const TOPIC_23_QUESTIONS = generateTopicTasks(23, 'Search Algorithms', 'Hard', 'Problem Solving', [
  'Find an element using Linear Search.',
  'Implement Binary Search on a sorted list.',
  'Find the first occurrence of a target in a sorted list.',
  'Find the last occurrence of a target in a sorted list.',
  'Count occurrences of a target in a sorted list.',
  'Find the insertion position of a target using Binary Search.',
  'Search for a target in a rotated sorted array.',
  'Find a peak element in a list.',
  'Find the integer square root using Binary Search.',
  'Find the minimum element in a rotated sorted array.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 24: Problem Solving with Functions
// ─────────────────────────────────────────────────────────────
const TOPIC_24_QUESTIONS = generateTopicTasks(24, 'Problem Solving with Functions', 'Hard', 'Problem Solving', [
  'Write a function to check whether a number is prime.',
  'Write a function to return all prime numbers up to N.',
  'Write a function that returns the GCD and LCM of two numbers.',
  'Write a function to find the second-largest distinct number in a list.',
  'Write a function to check whether two strings are anagrams.',
  'Write a function that groups words by their lengths.',
  'Write a function that merges overlapping intervals.',
  'Write a function that finds the majority element in a list, if one exists.',
  'Write a function that returns the maximum sum of a contiguous subarray.',
  'Write a function that finds the longest consecutive sequence of integers in an unsorted list.'
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 25: Advanced Data Structures
// ─────────────────────────────────────────────────────────────
const TOPIC_25_QUESTIONS = generateTopicTasks(25, 'Advanced Data Structures', 'Hard', 'Problem Solving', [
  'Implement a stack using a Python list.',
  'Implement a queue using collections.deque.',
  'Implement a singly linked list with insertion and deletion.',
  'Implement a stack that supports retrieving the minimum element in constant time.',
  'Validate balanced parentheses using a stack.',
  'Implement a binary tree and its inorder traversal.',
  'Implement breadth-first traversal of a binary tree.',
  'Implement a binary search tree with search and insertion.',
  'Implement a graph using an adjacency list and perform depth-first search.',
  'Find the shortest path in an unweighted graph using breadth-first search.'
]);

// ─────────────────────────────────────────────────────────────
// INTERMEDIATE TOPIC 26: Lambda and Map Functions
// ─────────────────────────────────────────────────────────────
const TOPIC_26_QUESTIONS = generateTopicTasks(26, 'Lambda and Map Functions', 'Medium', 'Python Intermediate', [
  'Use map() to square every number in a list.',
  'Use filter() to extract even numbers.',
  'Use lambda to sort tuples by their second value.',
  'Convert a list of Celsius temperatures to Fahrenheit using map().',
  'Use map() to calculate the length of each word.',
  'Use filter() to keep strings longer than a specified length.',
  'Use map() to add corresponding elements from two lists.',
  'Use filter() to select prime numbers from a list using a helper function.',
  'Use sorted() with a lambda to sort names by length.',
  'Transform a list of dictionaries into a list containing only selected fields.'
]);

// ─────────────────────────────────────────────────────────────
// INTERMEDIATE TOPIC 27: Sorting and Searching Basics
// ─────────────────────────────────────────────────────────────
const TOPIC_27_QUESTIONS = generateTopicTasks(27, 'Sorting and Searching Basics', 'Medium', 'Problem Solving', [
  'Implement Linear Search.',
  'Implement Binary Search.',
  'Implement Bubble Sort.',
  'Implement Selection Sort.',
  'Implement Insertion Sort.',
  'Find the first and last occurrence of a target.',
  'Merge two sorted lists.',
  'Find the Kth-smallest element.',
  'Count occurrences of each value in a sorted list.',
  'Find a target in a rotated sorted array.'
]);

// ─────────────────────────────────────────────────────────────
// POPULAR TOPIC 28: Two Sum Problem (10 Variations)
// ─────────────────────────────────────────────────────────────
const TOPIC_28_QUESTIONS = generateTopicTasks(28, 'Two Sum Problem', 'Medium', 'Algorithms', [
  'Find two indices that sum to target in an array.',
  'Two Sum with sorted array (Two pointer approach).',
  'Two Sum returning all unique pairs without duplicates.',
  'Two Sum with negative numbers and zero included.',
  'Two Sum returning boolean existence in O(N) time.',
  'Two Sum counting the total number of valid pairs.',
  'Two Sum closest: Find pair whose sum is closest to target.',
  'Two Sum less than target: Find maximum pair sum < target.',
  'Two Sum with duplicate elements allowed in indices.',
  'Two Sum using dictionary frequency hash table.'
]);

// ─────────────────────────────────────────────────────────────
// POPULAR TOPIC 29: Reverse a String (10 Variations)
// ─────────────────────────────────────────────────────────────
const TOPIC_29_QUESTIONS = generateTopicTasks(29, 'Reverse a String', 'Easy', 'Python Basics', [
  'Reverse a string using slicing [::-1].',
  'Reverse a string using a two-pointer while loop.',
  'Reverse only vowels in a string while keeping consonants in place.',
  'Reverse words in a sentence while keeping word order.',
  'Reverse the order of words in a sentence.',
  'Reverse each word in place in a sentence.',
  'Reverse a string without affecting special characters or symbols.',
  'Check if a string equals its reverse (Palindrome).',
  'Reverse a string recursively.',
  'Reverse a string using a stack data structure.'
]);

// ─────────────────────────────────────────────────────────────
// POPULAR TOPIC 30: Prime Number Check (10 Variations)
// ─────────────────────────────────────────────────────────────
const TOPIC_30_QUESTIONS = generateTopicTasks(30, 'Prime Number Check', 'Easy', 'Algorithms', [
  'Check whether a positive integer N is prime.',
  'Print all prime numbers up to N using trial division.',
  'Find the next prime number strictly greater than N.',
  'Count all prime numbers in a given range [L, R].',
  'Implement Sieve of Eratosthenes to generate primes up to N.',
  'Find prime factors of a given integer.',
  'Check if a number is a circular prime.',
  'Find the largest prime factor of a number.',
  'Check whether two numbers are co-prime.',
  'Find the sum of all prime numbers less than N.'
]);

// ─────────────────────────────────────────────────────────────
// POPULAR TOPIC 31: Fibonacci Sequence (10 Variations)
// ─────────────────────────────────────────────────────────────
const TOPIC_31_QUESTIONS = generateTopicTasks(31, 'Fibonacci Sequence', 'Easy', 'Algorithms', [
  'Print the first N numbers of the Fibonacci sequence.',
  'Find the Nth Fibonacci number iteratively in O(N) time.',
  'Find the Nth Fibonacci number recursively.',
  'Find the Nth Fibonacci number with memoisation.',
  'Check whether a given number belongs to the Fibonacci sequence.',
  'Find the sum of the first N Fibonacci numbers.',
  'Print even-valued terms in the Fibonacci sequence up to N.',
  'Find the greatest common divisor of two Fibonacci numbers.',
  'Generate Fibonacci numbers using a Python generator function.',
  'Find the index of the first Fibonacci number with K digits.'
]);

// ─────────────────────────────────────────────────────────────
// POPULAR TOPIC 32: Find Largest Number (10 Variations)
// ─────────────────────────────────────────────────────────────
const TOPIC_32_QUESTIONS = generateTopicTasks(32, 'Find Largest Number', 'Easy', 'Python Basics', [
  'Find the largest number in a list using a loop without max().',
  'Find the largest among three numbers using if-else.',
  'Find the second largest distinct number in a list.',
  'Find the largest even number in a list.',
  'Find the largest negative number in a list.',
  'Find the Kth largest element in an unsorted list.',
  'Find the largest number formed from a list of single digits.',
  'Find the maximum element in a 2D matrix.',
  'Find the largest sum of a contiguous subarray (Kadane\'s algorithm).',
  'Find the largest word length in a list of strings.'
]);

// ─────────────────────────────────────────────────────────────
// CONFIGURABLE MASTER DISPLAY ORDER (BEGINNER → INTERMEDIATE → ADVANCED)
// ─────────────────────────────────────────────────────────────
export const PYTHON_TOPIC_DISPLAY_ORDER: number[] = [
  // Beginner Topics (1 - 14)
  1,  // 1. Say Hello, World! With Python
  6,  // 2. Variables and Data Types
  7,  // 3. Input and Output
  3,  // 4. Arithmetic Operators
  4,  // 5. Python: Division
  8,  // 6. Comparison Operators
  2,  // 7. Python If-Else
  5,  // 8. Loops
  9,  // 9. For and While Loops
  10, // 10. Functions
  11, // 11. Strings
  12, // 12. Lists
  13, // 13. Tuples and Sets
  14, // 14. Dictionaries

  // Intermediate Topics (15 - 22)
  15, // 15. List Operations
  16, // 16. Dictionary Operations
  17, // 17. String Manipulation
  18, // 18. List Comprehension
  26, // 19. Lambda and Map Functions
  20, // 20. Exception Handling
  19, // 21. File Handling
  27, // 22. Sorting and Searching Basics

  // Advanced Topics (23 - 27)
  21, // 23. Recursion Basics
  22, // 24. Sorting Algorithms
  23, // 25. Search Algorithms
  24, // 26. Problem Solving with Functions
  25, // 27. Advanced Data Structures

  // Popular Challenges (28 - 32)
  28,
  29,
  30,
  31,
  32,
];

export function sortPythonTopicsByDisplayOrder(topics: PythonTopicDefinition[]): PythonTopicDefinition[] {
  const orderMap = new Map<number, number>();
  PYTHON_TOPIC_DISPLAY_ORDER.forEach((id, index) => {
    orderMap.set(id, index);
  });

  return [...topics].sort((a, b) => {
    const orderA = orderMap.has(a.id) ? orderMap.get(a.id)! : 9999 + a.id;
    const orderB = orderMap.has(b.id) ? orderMap.get(b.id)! : 9999 + b.id;
    return orderA - orderB;
  });
}

// ─────────────────────────────────────────────────────────────
// MASTER TOPICS DIRECTORY (ALL 27 TOPICS + POPULAR)
// Reordered in exact Beginner → Intermediate → Advanced sequence
// ─────────────────────────────────────────────────────────────
export const ALL_PYTHON_TOPICS: PythonTopicDefinition[] = [
  // ─── Beginner Topics (1 - 14) ───
  {
    id: 1,
    title: 'Say Hello, World! With Python',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Get started with Python by printing to output.',
    tabs: ['all', 'basic'],
    questions: TOPIC_1_QUESTIONS
  },
  {
    id: 6,
    title: 'Variables and Data Types',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Declare variables and work with numbers, strings, and booleans.',
    tabs: ['all', 'basic'],
    questions: TOPIC_6_QUESTIONS
  },
  {
    id: 7,
    title: 'Input and Output',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Read user input with input() and format outputs cleanly.',
    tabs: ['all'],
    questions: TOPIC_7_QUESTIONS
  },
  {
    id: 3,
    title: 'Arithmetic Operators',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Practice using arithmetic operators like +, -, *, / and %.',
    tabs: ['all', 'basic'],
    questions: TOPIC_3_QUESTIONS
  },
  {
    id: 4,
    title: 'Python: Division',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Perform division operations and understand integer and float division.',
    tabs: ['all', 'basic'],
    questions: TOPIC_4_QUESTIONS
  },
  {
    id: 8,
    title: 'Comparison Operators',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Compare values using ==, !=, <, >, <=, and >=.',
    tabs: ['all'],
    questions: TOPIC_8_QUESTIONS
  },
  {
    id: 2,
    title: 'Python If-Else',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Learn how to use if-else statements to make decisions in Python.',
    tabs: ['all', 'basic'],
    questions: TOPIC_2_QUESTIONS
  },
  {
    id: 5,
    title: 'Loops',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Use for and while loops to repeat instructions and iterate over ranges.',
    tabs: ['all'],
    questions: TOPIC_5_QUESTIONS
  },
  {
    id: 9,
    title: 'For and While Loops',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Iterate over ranges and execute blocks while conditions hold.',
    tabs: ['all', 'basic'],
    questions: TOPIC_9_QUESTIONS
  },
  {
    id: 10,
    title: 'Functions',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Define reusable functions, pass parameters, and return calculated values.',
    tabs: ['all', 'basic'],
    questions: TOPIC_10_QUESTIONS
  },
  {
    id: 11,
    title: 'Strings',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Master string indexing, slicing, formatting, and built-in methods.',
    tabs: ['all', 'basic'],
    questions: TOPIC_11_QUESTIONS
  },
  {
    id: 12,
    title: 'Lists',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Create, modify, append, and slice ordered Python list collections.',
    tabs: ['all'],
    questions: TOPIC_12_QUESTIONS
  },
  {
    id: 13,
    title: 'Tuples and Sets',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Understand immutable tuples and fast mathematical set operations.',
    tabs: ['all'],
    questions: TOPIC_13_QUESTIONS
  },
  {
    id: 14,
    title: 'Dictionaries',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Store and retrieve structured data using key-value dictionary mappings.',
    tabs: ['all'],
    questions: TOPIC_14_QUESTIONS
  },

  // ─── Intermediate Topics (15 - 22) ───
  {
    id: 15,
    title: 'List Operations',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Problem Solving',
    description: 'Insert, remove, rotate, pairs, chunks, and sequences.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_15_QUESTIONS
  },
  {
    id: 16,
    title: 'Dictionary Operations',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Problem Solving',
    description: 'Merge, frequency, grouping, and dictionary sorting.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_16_QUESTIONS
  },
  {
    id: 17,
    title: 'String Manipulation',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Problem Solving',
    description: 'Anagrams, compression, prefixes, and substrings.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_17_QUESTIONS
  },
  {
    id: 18,
    title: 'List Comprehension',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Python Intermediate',
    description: 'Filtering, flattening, and list transformations.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_18_QUESTIONS
  },
  {
    id: 26,
    title: 'Lambda and Map Functions',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Python Intermediate',
    description: 'Functional programming using map(), filter(), and lambda expressions.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_26_QUESTIONS
  },
  {
    id: 20,
    title: 'Exception Handling',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Python Intermediate',
    description: 'Validation, errors, and custom exceptions.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_20_QUESTIONS
  },
  {
    id: 19,
    title: 'File Handling',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Python Intermediate',
    description: 'Read, write, CSV, line counts, and word search.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_19_QUESTIONS
  },
  {
    id: 27,
    title: 'Sorting and Searching Basics',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Problem Solving',
    description: 'Linear search, binary search, bubble sort, selection sort, and merges.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_27_QUESTIONS
  },

  // ─── Advanced Topics (23 - 27) ───
  {
    id: 21,
    title: 'Recursion Basics',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Master base cases and recursive calls to solve complex problems.',
    tabs: ['all', 'advanced'],
    questions: TOPIC_21_QUESTIONS
  },
  {
    id: 22,
    title: 'Sorting Algorithms',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Implement Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.',
    tabs: ['all', 'advanced'],
    questions: TOPIC_22_QUESTIONS
  },
  {
    id: 23,
    title: 'Search Algorithms',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Implement Linear Search, Binary Search, and rotated array searching.',
    tabs: ['all', 'advanced'],
    questions: TOPIC_23_QUESTIONS
  },
  {
    id: 24,
    title: 'Problem Solving with Functions',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Prime numbers, GCD/LCM, intervals, majority element, and Kadane’s algorithm.',
    tabs: ['all', 'advanced'],
    questions: TOPIC_24_QUESTIONS
  },
  {
    id: 25,
    title: 'Advanced Data Structures',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Stacks, Queues, Linked Lists, Binary Trees, and Graph BFS/DFS.',
    tabs: ['all', 'advanced'],
    questions: TOPIC_25_QUESTIONS
  },

  // ─── Popular Challenges (28 - 32) ───
  {
    id: 28,
    title: 'Two Sum Problem',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Algorithms',
    description: 'Target sum, duplicates, negative numbers, sorted arrays, and index pairs (10 Variations).',
    tabs: ['popular'],
    questions: TOPIC_28_QUESTIONS
  },
  {
    id: 29,
    title: 'Reverse a String',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Words, characters, punctuation, Unicode, and in-place-style constraints (10 Variations).',
    tabs: ['popular'],
    questions: TOPIC_29_QUESTIONS
  },
  {
    id: 30,
    title: 'Prime Number Check',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Algorithms',
    description: 'Edge cases, ranges, prime lists, and factor counting (10 Variations).',
    tabs: ['popular'],
    questions: TOPIC_30_QUESTIONS
  },
  {
    id: 31,
    title: 'Fibonacci Sequence',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Algorithms',
    description: 'First N, Nth term, iterative, recursive, and memoisation (10 Variations).',
    tabs: ['popular'],
    questions: TOPIC_31_QUESTIONS
  },
  {
    id: 32,
    title: 'Find Largest Number',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Lists, ties, second-largest, streaming input, and nested lists (10 Variations).',
    tabs: ['popular'],
    questions: TOPIC_32_QUESTIONS
  }
];

// Map topicId to questions array
export const TOPIC_QUESTIONS_MAP: Record<number, ChallengeTask[]> = {};
ALL_PYTHON_TOPICS.forEach((t) => {
  TOPIC_QUESTIONS_MAP[t.id] = t.questions;
});

// ─────────────────────────────────────────────────────────────────────────────
// LIVE DESKTOP & ANDROID MOBILE PWA SYNCHRONIZATION ENGINE
// Synchronizes challenges, questions, descriptions, difficulties, scores,
// bookmarks, submissions, solved/unsolved status, student rank & points
// ─────────────────────────────────────────────────────────────────────────────
export const PYTHON_CHALLENGES_OVERRIDES_KEY = 'futureai_python_challenges_overrides_v1';
const PYTHON_PROGRESS_PREFIX = 'futureai_python_challenges_progress_v1_';

export interface PythonChallengesProgressState {
  solvedTopicIds: number[];
  solvedTaskIds: number[];
  submittedCodeByTaskId: Record<number, string>;
  bookmarkedTopicIds: number[];
  earnedPoints: number;
  updatedAt: string;
}

function getActivePythonUserId(): string {
  if (typeof window === 'undefined') return 'guest';
  const email = (localStorage.getItem('futureai_user_email') || '').trim().toLowerCase();
  const uid = (localStorage.getItem('futureai_user_uid') || '').trim();
  const name = (localStorage.getItem('futureai_user_name') || '').trim().toLowerCase();
  return email || uid || name || 'guest';
}

function getPythonProgressStorageKey(userId?: string): string {
  const resolved = (userId || getActivePythonUserId()).replace(/[^a-z0-9@._-]/gi, '_');
  return `${PYTHON_PROGRESS_PREFIX}${resolved}`;
}

export function getSyncedPythonChallengesProgress(userId?: string): PythonChallengesProgressState {
  const fallback: PythonChallengesProgressState = {
    solvedTopicIds: [],
    solvedTaskIds: [],
    submittedCodeByTaskId: {},
    bookmarkedTopicIds: [],
    earnedPoints: 0,
    updatedAt: new Date(0).toISOString(),
  };
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(getPythonProgressStorageKey(userId));
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      solvedTopicIds: Array.isArray(parsed.solvedTopicIds) ? parsed.solvedTopicIds : [],
      solvedTaskIds: Array.isArray(parsed.solvedTaskIds) ? parsed.solvedTaskIds : [],
      submittedCodeByTaskId:
        parsed.submittedCodeByTaskId && typeof parsed.submittedCodeByTaskId === 'object'
          ? parsed.submittedCodeByTaskId
          : {},
      bookmarkedTopicIds: Array.isArray(parsed.bookmarkedTopicIds) ? parsed.bookmarkedTopicIds : [],
      earnedPoints: typeof parsed.earnedPoints === 'number' ? parsed.earnedPoints : 0,
      updatedAt: parsed.updatedAt || fallback.updatedAt,
    };
  } catch {
    return fallback;
  }
}

export function saveSyncedPythonChallengesProgress(
  patch: Partial<PythonChallengesProgressState> & { pointsDelta?: number },
  userId?: string
): PythonChallengesProgressState {
  const current = getSyncedPythonChallengesProgress(userId);
  const nextPoints =
    typeof patch.earnedPoints === 'number'
      ? patch.earnedPoints
      : current.earnedPoints + (typeof patch.pointsDelta === 'number' ? patch.pointsDelta : 0);

  const next: PythonChallengesProgressState = {
    solvedTopicIds: patch.solvedTopicIds
      ? Array.from(new Set(patch.solvedTopicIds))
      : current.solvedTopicIds,
    solvedTaskIds: patch.solvedTaskIds
      ? Array.from(new Set(patch.solvedTaskIds))
      : current.solvedTaskIds,
    submittedCodeByTaskId: patch.submittedCodeByTaskId
      ? { ...current.submittedCodeByTaskId, ...patch.submittedCodeByTaskId }
      : current.submittedCodeByTaskId,
    bookmarkedTopicIds: patch.bookmarkedTopicIds
      ? Array.from(new Set(patch.bookmarkedTopicIds))
      : current.bookmarkedTopicIds,
    earnedPoints: Math.max(0, nextPoints),
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(getPythonProgressStorageKey(userId), JSON.stringify(next));
      if (patch.pointsDelta && patch.pointsDelta > 0) {
        awardLearnerTelemetry(patch.pointsDelta, 1);
      }
      window.dispatchEvent(
        new CustomEvent('futureai_python_challenges_progress_updated', { detail: next })
      );
    } catch {
      // ignore storage quota errors
    }

    const activeUser = userId || getActivePythonUserId();
    if (activeUser && activeUser !== 'guest') {
      const docId = `${activeUser.replace(/[^a-z0-9@._-]/gi, '_')}_python_challenges`;
      setDoc(
        doc(db, 'futureai_learning_progress', docId),
        {
          ...next,
          userId: activeUser,
          syncedAt: serverTimestamp(),
        },
        { merge: true }
      ).catch(() => {
        // offline fallback preserved in localStorage
      });
    }
  }

  return next;
}

export async function pullSyncedPythonChallengesProgressFromCloud(
  userId?: string
): Promise<PythonChallengesProgressState | null> {
  if (typeof window === 'undefined') return null;
  const activeUser = userId || getActivePythonUserId();
  if (!activeUser || activeUser === 'guest') return null;
  try {
    const docId = `${activeUser.replace(/[^a-z0-9@._-]/gi, '_')}_python_challenges`;
    const snap = await Promise.race([
      getDoc(doc(db, 'futureai_learning_progress', docId)),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 2200)),
    ]);
    if (snap && snap.exists()) {
      const cloud = snap.data() as Partial<PythonChallengesProgressState>;
      const local = getSyncedPythonChallengesProgress(activeUser);
      const merged: PythonChallengesProgressState = {
        solvedTopicIds: Array.from(
          new Set([...local.solvedTopicIds, ...(cloud.solvedTopicIds || [])])
        ),
        solvedTaskIds: Array.from(
          new Set([...local.solvedTaskIds, ...(cloud.solvedTaskIds || [])])
        ),
        submittedCodeByTaskId: {
          ...(cloud.submittedCodeByTaskId || {}),
          ...local.submittedCodeByTaskId,
        },
        bookmarkedTopicIds: Array.from(
          new Set([...local.bookmarkedTopicIds, ...(cloud.bookmarkedTopicIds || [])])
        ),
        earnedPoints: Math.max(local.earnedPoints || 0, cloud.earnedPoints || 0),
        updatedAt: cloud.updatedAt || local.updatedAt || new Date().toISOString(),
      };
      localStorage.setItem(getPythonProgressStorageKey(activeUser), JSON.stringify(merged));
      window.dispatchEvent(
        new CustomEvent('futureai_python_challenges_progress_updated', { detail: merged })
      );
      return merged;
    }
  } catch {
    // offline fallback
  }
  return null;
}

function hydrateTaskValidation(task: ChallengeTask, topicId: number): ChallengeTask {
  if (typeof task.validate === 'function') return task;
  const expected = (task.sampleOutput || '').trim();
  return makeTask(
    topicId,
    task.taskNumber || 1,
    task.title || 'Python Challenge',
    task.difficulty || 'Easy',
    task.skill || 'Python Basics',
    task.points || 5,
    task.successRate || '92.0%',
    task.problemStatement || task.title || '',
    task.highlightedKeyword || '',
    expected,
    task.hint || '',
    task.solution || ''
  );
}

export function getSyncedPythonChallengesTopics(): PythonTopicDefinition[] {
  const progress = getSyncedPythonChallengesProgress();
  const solvedTopicSet = new Set<number>(progress.solvedTopicIds);
  const solvedTaskSet = new Set<number>(progress.solvedTaskIds);
  const bookmarkedSet = new Set<number>(progress.bookmarkedTopicIds);

  let topics: PythonTopicDefinition[] = ALL_PYTHON_TOPICS.map((t) => ({
    ...t,
    questions: [...t.questions],
  }));

  if (typeof window !== 'undefined') {
    try {
      const rawOverrides = localStorage.getItem(PYTHON_CHALLENGES_OVERRIDES_KEY);
      if (rawOverrides) {
        const parsed = JSON.parse(rawOverrides);
        if (Array.isArray(parsed)) {
          const overrideMap = new Map<number, Partial<PythonTopicDefinition>>();
          parsed.forEach((item: any) => {
            if (item && typeof item.id === 'number') {
              overrideMap.set(item.id, item);
            }
          });

          // Merge overrides into existing topics
          topics = topics.map((baseTopic) => {
            const ov = overrideMap.get(baseTopic.id);
            if (!ov) return baseTopic;
            overrideMap.delete(baseTopic.id);
            const mergedQuestions = Array.isArray(ov.questions)
              ? ov.questions
                  .filter((q) => !q.deleted && q.published !== false)
                  .map((q) => hydrateTaskValidation(q as ChallengeTask, baseTopic.id))
              : baseTopic.questions.filter((q) => !q.deleted && q.published !== false);
            return {
              ...baseTopic,
              ...ov,
              questions: mergedQuestions,
            };
          });

          // Append any newly added admin topics
          overrideMap.forEach((newTopic) => {
            if (newTopic && !newTopic.deleted && newTopic.published !== false && newTopic.title) {
              const tId = Number(newTopic.id);
              const qs = Array.isArray(newTopic.questions)
                ? newTopic.questions
                    .filter((q) => !q.deleted && q.published !== false)
                    .map((q) => hydrateTaskValidation(q as ChallengeTask, tId))
                : [];
              topics.push({
                id: tId,
                title: newTopic.title,
                difficulty: newTopic.difficulty || 'Easy',
                maxScore: typeof newTopic.maxScore === 'number' ? newTopic.maxScore : 5,
                skill: newTopic.skill || 'Python Basics',
                description: newTopic.description || 'Solve hands-on Python coding challenges.',
                tabs: Array.isArray(newTopic.tabs) && newTopic.tabs.length > 0 ? newTopic.tabs : ['all', 'basic'],
                published: newTopic.published ?? true,
                deleted: false,
                questions: qs,
              });
            }
          });
        }
      }
    } catch {
      // ignore malformed override json
    }
  }

  return sortPythonTopicsByDisplayOrder(
    topics
      .filter((t) => !t.deleted && t.published !== false)
      .map((t) => {
        const validQuestions = (t.questions || []).filter((q) => !q.deleted && q.published !== false);
        TOPIC_QUESTIONS_MAP[t.id] = validQuestions;
        const hasAnySolvedTask = validQuestions.some((q) => solvedTaskSet.has(q.id));
        return {
          ...t,
          questions: validQuestions,
          solved: Boolean(t.solved || solvedTopicSet.has(t.id) || hasAnySolvedTask),
          bookmarked: Boolean(t.bookmarked || bookmarkedSet.has(t.id)),
        };
      })
  );
}

export async function revalidatePythonChallengesFromBackend(): Promise<PythonTopicDefinition[]> {
  if (typeof window === 'undefined') return ALL_PYTHON_TOPICS;
  try {
    const snap = await Promise.race([
      getDoc(doc(db, 'futureai_config', 'python_challenges_bank')),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 2200)),
    ]);
    if (snap && snap.exists()) {
      const data = snap.data();
      if (data && Array.isArray(data.topics)) {
        const serialized = JSON.stringify(data.topics);
        const current = localStorage.getItem(PYTHON_CHALLENGES_OVERRIDES_KEY);
        if (serialized !== current) {
          localStorage.setItem(PYTHON_CHALLENGES_OVERRIDES_KEY, serialized);
          window.dispatchEvent(new CustomEvent('futureai_python_challenges_updated'));
        }
      }
    }
  } catch {
    // offline or no remote override doc yet
  }
  return getSyncedPythonChallengesTopics();
}

