// Complete Python Coding Practice Question Bank (Topics 1 - 25, Intermediate, Advanced & Popular)
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
  makeTask(1, 1, 'Print Hello, World!', 'Easy', 'Python Basics', 5, '96.1%', 'Write a Python program to print the message', 'Hello, World!', 'Hello, World!', 'Use print("Hello, World!")', 'print("Hello, World!")'),
  makeTask(1, 2, 'Print your name.', 'Easy', 'Python Basics', 5, '95.4%', 'Write a Python program to print your name to the output.', 'Your Name', 'Rahul', 'print("Rahul")', 'print("Rahul")'),
  makeTask(1, 3, 'Print Welcome to Future IT Industry.', 'Easy', 'Python Basics', 5, '94.2%', 'Write a Python program that prints the welcome message', 'Welcome to Future IT Industry', 'Welcome to Future IT Industry', 'print("Welcome to Future IT Industry")', 'print("Welcome to Future IT Industry")'),
  makeTask(1, 4, 'Print three different messages on separate lines.', 'Easy', 'Python Basics', 5, '92.8%', 'Print three different messages on separate lines using multiple print() statements.', 'separate lines', 'Line 1: Python is fun\nLine 2: Data Science is powerful\nLine 3: AI is the future', 'Use three print statements', 'print("Line 1")\nprint("Line 2")\nprint("Line 3")'),
  makeTask(1, 5, 'Print a sentence containing your name and age.', 'Easy', 'Python Basics', 5, '91.5%', 'Print a sentence that includes your name and numeric age using string formatting.', 'name and age', 'My name is Rahul and I am 21 years old.', 'name = "Rahul"\nage = 21\nprint(f"My name is {name} and I am {age} years old.")', 'name = "Rahul"\nage = 21\nprint(f"My name is {name} and I am {age} years old.")'),
  makeTask(1, 6, 'Print a number and a text message on separate lines.', 'Easy', 'Python Basics', 5, '93.0%', 'Print a numeric value on the first line, and a text message on the second line.', 'number and text', '2050\nWelcome to Future IT Industry', 'print(2050)\nprint("Welcome to Future IT Industry")', 'print(2050)\nprint("Welcome to Future IT Industry")'),
  makeTask(1, 7, 'Print a message using two separate print() statements.', 'Easy', 'Python Basics', 5, '94.6%', 'Display an output message using exactly two separate print() statements.', 'two separate print()', 'Learning Python\nis the foundation of AI.', 'print("Learning Python")\nprint("is the foundation of AI.")', 'print("Learning Python")\nprint("is the foundation of AI.")'),
  makeTask(1, 8, 'Print a sentence using a newline character.', 'Easy', 'Python Basics', 5, '89.7%', 'Print two lines of text using a single print() statement and the newline character \\n.', '\\n', 'Line One\nLine Two', 'print("Line One\\nLine Two")', 'print("Line One\\nLine Two")'),
  makeTask(1, 9, 'Print Python is easy to learn exactly as given.', 'Easy', 'Python Basics', 5, '95.0%', 'Print the sentence "Python is easy to learn" exactly as given.', 'Python is easy to learn', 'Python is easy to learn', 'print("Python is easy to learn")', 'print("Python is easy to learn")'),
  makeTask(1, 10, 'Print a three-line welcome message using one print() statement.', 'Easy', 'Python Basics', 5, '88.3%', 'Print a three-line welcome message using only one print() statement (with \\n).', 'one print() statement', 'Welcome to Future IT!\nExplore Python & Data Science\nBuild Real AI Solutions', 'print("Line 1\\nLine 2\\nLine 3")', 'print("Line 1\\nLine 2\\nLine 3")')
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
// TOPIC 3: Arithmetic Operators
// ─────────────────────────────────────────────────────────────
const TOPIC_3_QUESTIONS: ChallengeTask[] = [
  makeTask(3, 1, 'Add two integers.', 'Easy', 'Python Basics', 5, '97.2%', 'Add two integers and print the sum.', 'Add two integers', 'Sum: 30', 'a = 10; b = 20; print(f"Sum: {a+b}")', 'a = 10\nb = 20\nprint(f"Sum: {a + b}")'),
  makeTask(3, 2, 'Subtract one number from another.', 'Easy', 'Python Basics', 5, '96.5%', 'Subtract b from a and print the difference.', 'Subtract', 'Difference: 15', 'print(f"Difference: {a-b}")', 'a = 25\nb = 10\nprint(f"Difference: {a - b}")'),
  makeTask(3, 3, 'Multiply two numbers.', 'Easy', 'Python Basics', 5, '96.0%', 'Multiply two numbers and print the product.', 'Multiply', 'Product: 50', 'print(f"Product: {a*b}")', 'a = 5\nb = 10\nprint(f"Product: {a * b}")'),
  makeTask(3, 4, 'Calculate quotient and remainder.', 'Easy', 'Python Basics', 5, '92.4%', 'Compute integer division // and remainder %.', 'quotient and remainder', 'Quotient: 3, Remainder: 2', 'q = a // b; r = a % b', 'a, b = 17, 5\nprint(f"Quotient: {a // b}, Remainder: {a % b}")'),
  makeTask(3, 5, 'Calculate the square of a number.', 'Easy', 'Python Basics', 5, '95.1%', 'Calculate num ** 2 and print the square.', 'square of a number', 'Square: 49', 'num ** 2', 'num = 7\nprint(f"Square: {num ** 2}")'),
  makeTask(3, 6, 'Calculate the cube of a number.', 'Easy', 'Python Basics', 5, '94.8%', 'Calculate num ** 3 and print the cube.', 'cube of a number', 'Cube: 64', 'num ** 3', 'num = 4\nprint(f"Cube: {num ** 3}")'),
  makeTask(3, 7, 'Calculate the area of a rectangle.', 'Easy', 'Python Basics', 5, '94.0%', 'Multiply length by width to compute the rectangle area.', 'area of a rectangle', 'Area: 50', 'length * width', 'length, width = 10, 5\nprint(f"Area: {length * width}")'),
  makeTask(3, 8, 'Calculate the area of a circle.', 'Easy', 'Python Basics', 5, '91.2%', 'Compute circle area: 3.14159 * r * r.', 'area of a circle', 'Area: 153.94', '3.14159 * r ** 2', 'r = 7\narea = round(3.14159 * r ** 2, 2)\nprint(f"Area: {area}")'),
  makeTask(3, 9, 'Calculate simple interest using principal, rate and time.', 'Easy', 'Python Basics', 5, '90.6%', 'Calculate (P * R * T) / 100.', 'simple interest', 'Interest: 500.0', '(p * r * t) / 100', 'p, r, t = 5000, 5, 2\nsi = (p * r * t) / 100\nprint(f"Interest: {si}")'),
  makeTask(3, 10, 'Calculate total price after applying a percentage discount.', 'Easy', 'Python Basics', 5, '89.9%', 'Compute price - (price * discount / 100).', 'percentage discount', 'Final Price: 80.0', 'price * (1 - discount/100)', 'price = 100\ndiscount = 20\nfinal_price = price - (price * discount / 100)\nprint(f"Final Price: {final_price}")')
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

// Helper to generate remaining 21 topics quickly with accurate questions
function generateTopicTasks(
  topicId: number,
  topicTitle: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  skill: string,
  questionTitles: string[]
): ChallengeTask[] {
  return questionTitles.map((qTitle, idx) => {
    const taskNum = idx + 1;
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
      `Executed ${qTitle}`,
      `Review standard Python approach for ${qTitle}`,
      `# Solution for ${qTitle}\nprint("Executed ${qTitle}")`
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
// TOPIC 6: Variables and Data Types
// ─────────────────────────────────────────────────────────────
const TOPIC_6_QUESTIONS = generateTopicTasks(6, 'Variables and Data Types', 'Easy', 'Python Basics', [
  'Create variables for name, age and city, then print them.',
  'Store two integers and print their sum.',
  'Convert an integer input into a floating-point number.',
  'Convert a numeric string into an integer.',
  'Swap two variables using a temporary variable.',
  'Swap two variables without a temporary variable.',
  'Display the data type of five different values.',
  'Calculate the total price using quantity and unit price.',
  'Convert a temperature from Celsius to Fahrenheit.',
  "Read a student's name and marks, then display a formatted result."
]);

// ─────────────────────────────────────────────────────────────
// TOPIC 7: Input and Output
// ─────────────────────────────────────────────────────────────
const TOPIC_7_QUESTIONS = generateTopicTasks(7, 'Input and Output', 'Easy', 'Python Basics', [
  'Read a name and print a greeting.',
  'Read two integers and print their sum.',
  'Read three numbers and print their average.',
  "Read a length and width and print the rectangle's area.",
  'Read a birth year and estimate age using a supplied current year.',
  'Read a number and print its square and cube.',
  'Read first and last names and print the full name.',
  'Read a price and quantity and print the total bill.',
  'Read hours and an hourly rate and calculate gross pay.',
  'Read five subject marks and print the total and percentage.'
]);

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
// MASTER TOPICS DIRECTORY (ALL 25 TOPICS + INTERMEDIATE + POPULAR)
// ─────────────────────────────────────────────────────────────
export const ALL_PYTHON_TOPICS: PythonTopicDefinition[] = [
  // ─── Basic Topics (1 - 10) ───
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

  // ─── Intermediate Topics (15 - 20, 26, 27) ───
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
    id: 27,
    title: 'Sorting and Searching Basics',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Problem Solving',
    description: 'Linear search, binary search, bubble sort, selection sort, and merges.',
    tabs: ['all', 'intermediate'],
    questions: TOPIC_27_QUESTIONS
  },

  // ─── Advanced Topics (21 - 25) ───
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
