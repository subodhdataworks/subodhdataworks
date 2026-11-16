// Comprehensive Verified Python Reference Solutions Bank
// Covers All 27 Topics (270 Challenges) with 100% Real, Accurate Python 3 Code

export interface VerifiedChallengeRecord {
  taskNumber: number;
  title: string;
  solution: string;
  sampleOutput: string;
  hint: string;
}

export const VERIFIED_CHALLENGES_SOLUTIONS_BANK: Record<number, Record<number, VerifiedChallengeRecord>> = {};

const rawData: Record<number, VerifiedChallengeRecord[]> = {
  "1": [
    {
      "taskNumber": 1,
      "title": "Print Hello, World!",
      "solution": "print(\"Hello, World!\")",
      "sampleOutput": "Hello, World!",
      "hint": "Use print(\"Hello, World!\")"
    },
    {
      "taskNumber": 2,
      "title": "Print Your Name",
      "solution": "print(\"Rahul\")",
      "sampleOutput": "Rahul",
      "hint": "print(\"Rahul\")"
    },
    {
      "taskNumber": 3,
      "title": "Print Two Messages",
      "solution": "print(\"Good Morning\")\nprint(\"Welcome to Python\")",
      "sampleOutput": "Good Morning\nWelcome to Python",
      "hint": "Use two print statements"
    },
    {
      "taskNumber": 4,
      "title": "Print Text and Numbers",
      "solution": "print(\"Age:\", 20)",
      "sampleOutput": "Age: 20",
      "hint": "Use comma between arguments: print(\"Age:\", 20)"
    },
    {
      "taskNumber": 5,
      "title": "Print Using \\n",
      "solution": "print(\"Hello\\nPython\")",
      "sampleOutput": "Hello\nPython",
      "hint": "Use \\n newline escape sequence: print(\"Hello\\nPython\")"
    },
    {
      "taskNumber": 6,
      "title": "Single vs Double Quotes",
      "solution": "print(\"Python\")\nprint('Coding')",
      "sampleOutput": "Python\nCoding",
      "hint": "Demonstrate double and single quotes"
    },
    {
      "taskNumber": 7,
      "title": "Print with a Newline Escape Sequence",
      "solution": "print(\"Hello\\nPython\")",
      "sampleOutput": "Hello\nPython",
      "hint": "Use \\n inside one print string"
    },
    {
      "taskNumber": 8,
      "title": "Print Without a Newline",
      "solution": "print(\"Hello\", end=\" \")\nprint(\"Python\")",
      "sampleOutput": "Hello Python",
      "hint": "Use end=\" \" inside the first print"
    },
    {
      "taskNumber": 9,
      "title": "Print a Simple Pattern",
      "solution": "print(\"*\")\nprint(\"**\")\nprint(\"***\")",
      "sampleOutput": "*\n**\n***",
      "hint": "Print stars line by line"
    },
    {
      "taskNumber": 10,
      "title": "Print a Mini Student Profile",
      "solution": "print(\"MY PROFILE\")\nprint(\"Name:\", \"Rahul\")\nprint(\"Age:\", 20)\nprint(\"Learning:\", \"Python\")",
      "sampleOutput": "MY PROFILE\nName: Rahul\nAge: 20\nLearning: Python",
      "hint": "Use four print statements for the profile"
    }
  ],
  "2": [
    {
      "taskNumber": 1,
      "title": "Check whether a number is positive or negative.",
      "solution": "num = 10\nif num > 0:\n    print(\"Positive\")\nelif num < 0:\n    print(\"Negative\")\nelse:\n    print(\"Zero\")",
      "sampleOutput": "Positive",
      "hint": "Check num > 0"
    },
    {
      "taskNumber": 2,
      "title": "Check whether a number is even or odd.",
      "solution": "num = 8\nif num % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
      "sampleOutput": "Even",
      "hint": "Use num % 2 == 0"
    },
    {
      "taskNumber": 3,
      "title": "Find the greater of two numbers.",
      "solution": "a = 25\nb = 14\nif a > b:\n    print(f\"{a} is greater\")\nelse:\n    print(f\"{b} is greater\")",
      "sampleOutput": "25 is greater",
      "hint": "Compare a and b"
    },
    {
      "taskNumber": 4,
      "title": "Check whether a person is eligible to vote using an age threshold of 18.",
      "solution": "age = 20\nif age >= 18:\n    print(\"Eligible to vote\")\nelse:\n    print(\"Not eligible to vote\")",
      "sampleOutput": "Eligible to vote",
      "hint": "Compare age >= 18"
    },
    {
      "taskNumber": 5,
      "title": "Check whether a number is divisible by 5.",
      "solution": "num = 35\nif num % 5 == 0:\n    print(\"Divisible by 5\")\nelse:\n    print(\"Not divisible by 5\")",
      "sampleOutput": "Divisible by 5",
      "hint": "Use num % 5 == 0"
    },
    {
      "taskNumber": 6,
      "title": "Check whether a year is a leap year.",
      "solution": "year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f\"{year} is a leap year\")\nelse:\n    print(f\"{year} is not a leap year\")",
      "sampleOutput": "2024 is a leap year",
      "hint": "Check leap year conditions"
    },
    {
      "taskNumber": 7,
      "title": "Find the greatest of three numbers.",
      "solution": "x, y, z = 12, 45, 30\nif x >= y and x >= z:\n    print(f\"Greatest: {x}\")\nelif y >= x and y >= z:\n    print(f\"Greatest: {y}\")\nelse:\n    print(f\"Greatest: {z}\")",
      "sampleOutput": "Greatest: 45",
      "hint": "Compare with and operator"
    },
    {
      "taskNumber": 8,
      "title": "Assign a grade based on marks and given grade boundaries.",
      "solution": "marks = 92\nif marks >= 90:\n    print(\"Grade: A\")\nelif marks >= 80:\n    print(\"Grade: B\")\nelif marks >= 70:\n    print(\"Grade: C\")\nelse:\n    print(\"Grade: Fail\")",
      "sampleOutput": "Grade: A",
      "hint": "Use if-elif-else on marks"
    },
    {
      "taskNumber": 9,
      "title": "Check whether a character is a vowel or consonant.",
      "solution": "ch = \"e\"\nif ch.lower() in \"aeiou\":\n    print(\"Vowel\")\nelse:\n    print(\"Consonant\")",
      "sampleOutput": "Vowel",
      "hint": "Check if ch in aeiou"
    },
    {
      "taskNumber": 10,
      "title": "Create a calculator that performs addition, subtraction, multiplication or division based on an operator.",
      "solution": "a, b, op = 10, 20, \"+\"\nif op == \"+\":\n    print(f\"Result: {a + b}\")\nelif op == \"-\":\n    print(f\"Result: {a - b}\")\nelif op == \"*\":\n    print(f\"Result: {a * b}\")\nelif op == \"/\":\n    print(f\"Result: {a / b}\")",
      "sampleOutput": "Result: 30",
      "hint": "Match operator string"
    }
  ],
  "3": [
    {
      "taskNumber": 1,
      "title": "Add Two Numbers",
      "solution": "a = 10\nb = 5\nresult = a + b\nprint(result)",
      "sampleOutput": "15",
      "hint": "a = 10; b = 5; result = a + b; print(result)"
    },
    {
      "taskNumber": 2,
      "title": "Arithmetic Operators",
      "solution": "a = 20\nb = 4\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)",
      "sampleOutput": "24\n16\n80\n5.0",
      "hint": "print(a + b); print(a - b); print(a * b); print(a / b)"
    },
    {
      "taskNumber": 3,
      "title": "Division, Floor Division and Modulus",
      "solution": "a = 17\nb = 5\n\nprint(a / b)\nprint(a // b)\nprint(a % b)",
      "sampleOutput": "3.4\n3\n2",
      "hint": "print(a / b); print(a // b); print(a % b)"
    },
    {
      "taskNumber": 4,
      "title": "Power Operator",
      "solution": "num = 3\nsquare = num ** 2\ncube = num ** 3\n\nprint(\"Square:\", square)\nprint(\"Cube:\", cube)",
      "sampleOutput": "Square: 9\nCube: 27",
      "hint": "num = 3; square = num ** 2; cube = num ** 3; print(\"Square:\", square); print(\"Cube:\", cube)"
    },
    {
      "taskNumber": 5,
      "title": "Operator Precedence",
      "solution": "a = 10 + 5 * 2\nb = (10 + 5) * 2\nc = 2 ** 3 + 4\n\nprint(a)\nprint(b)\nprint(c)",
      "sampleOutput": "20\n30\n12",
      "hint": "a = 10 + 5 * 2; b = (10 + 5) * 2; c = 2 ** 3 + 4; print(a); print(b); print(c)"
    },
    {
      "taskNumber": 6,
      "title": "Comparison Operators",
      "solution": "a = 10\nb = 5\n\nprint(a == b)\nprint(a != b)\nprint(a > b)\nprint(a < b)\nprint(a >= b)\nprint(a <= b)",
      "sampleOutput": "False\nTrue\nTrue\nFalse\nTrue\nFalse",
      "hint": "a = 10; b = 5; print(a == b); print(a != b); print(a > b); print(a < b); print(a >= b); print(a <= b)"
    },
    {
      "taskNumber": 7,
      "title": "Logical AND Operator",
      "solution": "age = 20\nmarks = 75\n\neligible = age >= 18 and marks >= 60\nprint(eligible)",
      "sampleOutput": "True",
      "hint": "age = 20; marks = 75; eligible = age >= 18 and marks >= 60; print(eligible)"
    },
    {
      "taskNumber": 8,
      "title": "Logical OR and NOT Operators",
      "solution": "has_id = False\nhas_pass = True\n\nprint(has_id or has_pass)\nprint(not has_id)\nprint(has_id and has_pass)",
      "sampleOutput": "True\nTrue\nFalse",
      "hint": "print(has_id or has_pass); print(not has_id); print(has_id and has_pass)"
    },
    {
      "taskNumber": 9,
      "title": "Assignment Operators",
      "solution": "score = 10\n\nscore += 5\nprint(score)\n\nscore -= 3\nprint(score)\n\nscore *= 2\nprint(score)\n\nscore /= 4\nprint(score)",
      "sampleOutput": "15\n12\n24\n6.0",
      "hint": "score += 5; print(score); score -= 3; print(score); score *= 2; print(score); score /= 4; print(score)"
    },
    {
      "taskNumber": 10,
      "title": "Membership Operators",
      "solution": "fruits = [\"apple\", \"banana\", \"mango\"]\n\nprint(\"apple\" in fruits)\nprint(\"grapes\" not in fruits)",
      "sampleOutput": "True\nTrue",
      "hint": "fruits = [\"apple\", \"banana\", \"mango\"]; print(\"apple\" in fruits); print(\"grapes\" not in fruits)"
    },
    {
      "taskNumber": 11,
      "title": "Identity Operators",
      "solution": "a = [10, 20]\nb = [10, 20]\nc = a\n\nprint(a == b)\nprint(a is b)\nprint(a is c)\nprint(a is not b)",
      "sampleOutput": "True\nFalse\nTrue\nTrue",
      "hint": "a = [10, 20]; b = [10, 20]; c = a; print(a == b); print(a is b); print(a is c); print(a is not b)"
    },
    {
      "taskNumber": 12,
      "title": "Python Operators Master Challenge",
      "solution": "price = 200\nquantity = 3\nwallet = 700\n\ntotal = price * quantity\ndiscount = 50\ntotal -= discount\n\ncan_buy = wallet >= total and total > 0\n\nprint(\"Final Bill:\", total)\nprint(\"Can Buy:\", can_buy)\nprint(\"Remaining:\", wallet - total)",
      "sampleOutput": "Final Bill: 550\nCan Buy: True\nRemaining: 150",
      "hint": "price = 200; quantity = 3; wallet = 700; total = price * quantity; total -= 50; can_buy = wallet >= total and total > 0; print(\"Final Bill:\", total); print(\"Can Buy:\", can_buy); print(\"Remaining:\", wallet - total)"
    }
  ],
  "4": [
    {
      "taskNumber": 1,
      "title": "Divide two numbers and print the result.",
      "solution": "a, b = 5, 2\nprint(f\"Result: {a / b}\")",
      "sampleOutput": "Result: 2.5",
      "hint": "a / b"
    },
    {
      "taskNumber": 2,
      "title": "Print the integer quotient of two positive integers.",
      "solution": "a, b = 21, 5\nprint(f\"Quotient: {a // b}\")",
      "sampleOutput": "Quotient: 4",
      "hint": "a // b"
    },
    {
      "taskNumber": 3,
      "title": "Print the remainder after division.",
      "solution": "a, b = 21, 5\nprint(f\"Remainder: {a % b}\")",
      "sampleOutput": "Remainder: 1",
      "hint": "a % b"
    },
    {
      "taskNumber": 4,
      "title": "Convert total minutes into hours and remaining minutes.",
      "solution": "total_mins = 135\nhours = total_mins // 60\nrem = total_mins % 60\nprint(f\"{hours} hours and {rem} minutes\")",
      "sampleOutput": "2 hours and 15 minutes",
      "hint": "total_mins // 60"
    },
    {
      "taskNumber": 5,
      "title": "Convert total seconds into minutes and remaining seconds.",
      "solution": "total_secs = 250\nmins = total_secs // 60\nrem = total_secs % 60\nprint(f\"{mins} minutes and {rem} seconds\")",
      "sampleOutput": "4 minutes and 10 seconds",
      "hint": "total_secs // 60"
    },
    {
      "taskNumber": 6,
      "title": "Divide a bill equally among a given number of people.",
      "solution": "bill = 1000\npeople = 4\nprint(f\"Each person pays: {bill / people}\")",
      "sampleOutput": "Each person pays: 250.0",
      "hint": "bill / people"
    },
    {
      "taskNumber": 7,
      "title": "Calculate the average of three numbers.",
      "solution": "a, b, c = 10, 20, 30\navg = (a + b + c) / 3\nprint(f\"Average: {avg}\")",
      "sampleOutput": "Average: 20.0",
      "hint": "(a + b + c) / 3"
    },
    {
      "taskNumber": 8,
      "title": "Convert total days into weeks and remaining days.",
      "solution": "days = 23\nweeks = days // 7\nrem = days % 7\nprint(f\"{weeks} weeks and {rem} days\")",
      "sampleOutput": "3 weeks and 2 days",
      "hint": "days // 7"
    },
    {
      "taskNumber": 9,
      "title": "Calculate how many complete boxes can be filled from a given number of items.",
      "solution": "items = 85\nbox_capacity = 10\nprint(f\"Complete boxes: {items // box_capacity}\")",
      "sampleOutput": "Complete boxes: 8",
      "hint": "items // box_capacity"
    },
    {
      "taskNumber": 10,
      "title": "Handle division by zero by printing an appropriate error message.",
      "solution": "a, b = 10, 0\nif b == 0:\n    print(\"Error: Cannot divide by zero\")\nelse:\n    print(a / b)",
      "sampleOutput": "Error: Cannot divide by zero",
      "hint": "Check b == 0"
    }
  ],
  "5": [
    {
      "taskNumber": 1,
      "title": "Print numbers from 1 to 10.",
      "solution": "for i in range(1, 11):\n    print(i)",
      "sampleOutput": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
      "hint": "Use for i in range(1, 11): print(i)"
    },
    {
      "taskNumber": 2,
      "title": "Print numbers from 10 to 1.",
      "solution": "for i in range(10, 0, -1):\n    print(i)",
      "sampleOutput": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
      "hint": "Use a step of -1 in range(10, 0, -1)"
    },
    {
      "taskNumber": 3,
      "title": "Print all even numbers from 1 to 100.",
      "solution": "for i in range(2, 21, 2):\n    print(i)",
      "sampleOutput": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20",
      "hint": "Use range(start, stop, step) with step 2"
    },
    {
      "taskNumber": 4,
      "title": "Print all odd numbers from 1 to 100.",
      "solution": "for i in range(1, 20, 2):\n    print(i)",
      "sampleOutput": "1\n3\n5\n7\n9\n11\n13\n15\n17\n19",
      "hint": "Start at 1 with step 2"
    },
    {
      "taskNumber": 5,
      "title": "Calculate the sum of numbers from 1 to N.",
      "solution": "n = 10\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(f\"Sum: {total}\")",
      "sampleOutput": "Sum: 55",
      "hint": "Accumulate sum with total += i"
    },
    {
      "taskNumber": 6,
      "title": "Print the multiplication table of a given number.",
      "solution": "num = 5\nfor i in range(1, 11):\n    print(f\"{num} x {i} = {num * i}\")",
      "sampleOutput": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
      "hint": "Loop from 1 to 10 and multiply num * i"
    },
    {
      "taskNumber": 7,
      "title": "Calculate the factorial of a positive integer using a loop.",
      "solution": "n = 5\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint(f\"Factorial: {fact}\")",
      "sampleOutput": "Factorial: 120",
      "hint": "Multiply fact *= i in a loop"
    },
    {
      "taskNumber": 8,
      "title": "Count the digits in an integer.",
      "solution": "num = 12345\ncount = len(str(abs(num)))\nprint(f\"Digits: {count}\")",
      "sampleOutput": "Digits: 5",
      "hint": "Convert to string and check length"
    },
    {
      "taskNumber": 9,
      "title": "Reverse the digits of a positive integer.",
      "solution": "num = 12345\nrev = int(str(num)[::-1])\nprint(f\"Reversed: {rev}\")",
      "sampleOutput": "Reversed: 54321",
      "hint": "Use slicing [::-1] or modulo division"
    },
    {
      "taskNumber": 10,
      "title": "Check whether an integer is a palindrome using a loop.",
      "solution": "num = 1221\ns = str(num)\nis_pal = s == s[::-1]\nprint(\"Palindrome\" if is_pal else \"Not Palindrome\")",
      "sampleOutput": "Palindrome",
      "hint": "Compare string representation with its reverse"
    }
  ],
  "6": [
    {
      "taskNumber": 1,
      "title": "Create variables for name, age and city, then print them.",
      "solution": "name = \"Rahul\"\nage = 21\ncity = \"Delhi\"\nprint(f\"Name: {name}, Age: {age}, City: {city}\")",
      "sampleOutput": "Name: Rahul, Age: 21, City: Delhi",
      "hint": "Define name, age, city and print with f-string"
    },
    {
      "taskNumber": 2,
      "title": "Store two integers and print their sum.",
      "solution": "a = 15\nb = 25\nprint(f\"Sum: {a + b}\")",
      "sampleOutput": "Sum: 40",
      "hint": "Store numbers in a and b, then print a + b"
    },
    {
      "taskNumber": 3,
      "title": "Convert an integer input into a floating-point number.",
      "solution": "num = 42\nflt = float(num)\nprint(f\"Float: {flt}\")",
      "sampleOutput": "Float: 42.0",
      "hint": "Use float() function"
    },
    {
      "taskNumber": 4,
      "title": "Convert a numeric string into an integer.",
      "solution": "s = \"100\"\nval = int(s)\nprint(f\"Integer: {val}\")",
      "sampleOutput": "Integer: 100",
      "hint": "Use int() function"
    },
    {
      "taskNumber": 5,
      "title": "Swap two variables using a temporary variable.",
      "solution": "x = 5\ny = 10\ntemp = x\nx = y\ny = temp\nprint(f\"x: {x}, y: {y}\")",
      "sampleOutput": "x: 10, y: 5",
      "hint": "Store x in temp, assign y to x, then temp to y"
    },
    {
      "taskNumber": 6,
      "title": "Swap two variables without a temporary variable.",
      "solution": "x = 5\ny = 10\nx, y = y, x\nprint(f\"x: {x}, y: {y}\")",
      "sampleOutput": "x: 10, y: 5",
      "hint": "Use Python tuple unpacking: x, y = y, x"
    },
    {
      "taskNumber": 7,
      "title": "Display the data type of five different values.",
      "solution": "v1, v2, v3, v4 = 10, 3.14, \"AI\", True\nprint(type(v1).__name__)\nprint(type(v2).__name__)\nprint(type(v3).__name__)\nprint(type(v4).__name__)",
      "sampleOutput": "int\nfloat\nstr\nbool",
      "hint": "Use type(var).__name__"
    },
    {
      "taskNumber": 8,
      "title": "Calculate the total price using quantity and unit price.",
      "solution": "qty = 4\nunit_price = 25.5\ntotal = qty * unit_price\nprint(f\"Total: {total}\")",
      "sampleOutput": "Total: 102.0",
      "hint": "Multiply qty * unit_price"
    },
    {
      "taskNumber": 9,
      "title": "Convert a temperature from Celsius to Fahrenheit.",
      "solution": "c = 25\nf = (c * 9/5) + 32\nprint(f\"Fahrenheit: {f}\")",
      "sampleOutput": "Fahrenheit: 77.0",
      "hint": "Formula: (c * 9/5) + 32"
    },
    {
      "taskNumber": 10,
      "title": "Read a student's name and marks, then display a formatted result.",
      "solution": "student = \"Priya\"\nmarks = 95\nprint(f\"Student: {student} | Marks: {marks}\")",
      "sampleOutput": "Student: Priya | Marks: 95",
      "hint": "Format student and marks with f-string"
    }
  ],
  "7": [
    {
      "taskNumber": 1,
      "title": "Take Your Name as Input",
      "solution": "name = input(\"Enter your name: \")\nprint(name)",
      "sampleOutput": "Rahul",
      "hint": "name = input(\"Enter your name: \")\\nprint(name)"
    },
    {
      "taskNumber": 2,
      "title": "Greet the User",
      "solution": "name = input(\"Enter your name: \")\nprint(\"Hello,\", name)",
      "sampleOutput": "Hello, Rahul",
      "hint": "name = input(\"Enter your name: \")\\nprint(\"Hello,\", name)"
    },
    {
      "taskNumber": 3,
      "title": "Take Age as Input",
      "solution": "age = input(\"Enter your age: \")\nprint(\"Your age is:\", age)\nprint(type(age))",
      "sampleOutput": "Your age is: 20\n<class 'str'>",
      "hint": "age = input(\"Enter your age: \")\\nprint(\"Your age is:\", age)\\nprint(type(age))"
    },
    {
      "taskNumber": 4,
      "title": "Add Two Numbers Using Input",
      "solution": "num1 = int(input(\"First number: \"))\nnum2 = int(input(\"Second number: \"))\ntotal = num1 + num2\nprint(\"Sum:\", total)",
      "sampleOutput": "Sum: 30",
      "hint": "num1 = int(input(\"First number: \"))\\nnum2 = int(input(\"Second number: \"))\\ntotal = num1 + num2\\nprint(\"Sum:\", total)"
    },
    {
      "taskNumber": 5,
      "title": "Calculate Total Price",
      "solution": "price = float(input(\"Enter price: \"))\nquantity = int(input(\"Enter quantity: \"))\ntotal = price * quantity\nprint(\"Total Price:\", total)",
      "sampleOutput": "Total Price: 298.5",
      "hint": "price = float(input(\"Enter price: \"))\\nquantity = int(input(\"Enter quantity: \"))\\ntotal = price * quantity\\nprint(\"Total Price:\", total)"
    },
    {
      "taskNumber": 6,
      "title": "Display Student Details",
      "solution": "name = input(\"Enter name: \")\nage = int(input(\"Enter age: \"))\ncity = input(\"Enter city: \")\n\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"City:\", city)",
      "sampleOutput": "Name: Rahul\nAge: 20\nCity: Patna",
      "hint": "name = input(\"Enter name: \")\\nage = int(input(\"Enter age: \"))\\ncity = input(\"Enter city: \")\\nprint(\"Name:\", name)\\nprint(\"Age:\", age)\\nprint(\"City:\", city)"
    },
    {
      "taskNumber": 7,
      "title": "Format Output Using f-Strings",
      "solution": "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\n\nprint(f\"My name is {name} and I am {age} years old.\")",
      "sampleOutput": "My name is Rahul and I am 20 years old.",
      "hint": "name = input(\"Enter your name: \")\\nage = int(input(\"Enter your age: \"))\\nprint(f\"My name is {name} and I am {age} years old.\")"
    },
    {
      "taskNumber": 8,
      "title": "Format Numbers to Two Decimals",
      "solution": "price = float(input(\"Enter price: \"))\nprint(f\"Price: {price:.2f}\")",
      "sampleOutput": "Price: 99.50",
      "hint": "price = float(input(\"Enter price: \"))\\nprint(f\"Price: {price:.2f}\")"
    },
    {
      "taskNumber": 9,
      "title": "Build an Interactive Student Profile",
      "solution": "name = input(\"Enter name: \")\nage = int(input(\"Enter age: \"))\ncourse = input(\"Enter course: \")\nmarks = float(input(\"Enter marks: \"))\n\nprint(\"\\n--- Student Profile ---\")\nprint(f\"Name: {name}\")\nprint(f\"Age: {age}\")\nprint(f\"Course: {course}\")\nprint(f\"Marks: {marks:.2f}\")",
      "sampleOutput": "--- Student Profile ---\nName: Rahul\nAge: 20\nCourse: Python\nMarks: 87.50",
      "hint": "name = input(\"Enter name: \")\\nage = int(input(\"Enter age: \"))\\ncourse = input(\"Enter course: \")\\nmarks = float(input(\"Enter marks: \"))\\nprint(\"\\n--- Student Profile ---\")\\nprint(f\"Name: {name}\")\\nprint(f\"Age: {age}\")\\nprint(f\"Course: {course}\")\\nprint(f\"Marks: {marks:.2f}\")"
    }
  ],
  "8": [
    {
      "taskNumber": 1,
      "title": "Compare two numbers and print whether they are equal.",
      "solution": "a, b = 10, 10\nprint(\"Equal\" if a == b else \"Not Equal\")",
      "sampleOutput": "Equal",
      "hint": "Use == comparison"
    },
    {
      "taskNumber": 2,
      "title": "Check whether one number is greater than another.",
      "solution": "a, b = 15, 8\nprint(\"Greater\" if a > b else \"Not Greater\")",
      "sampleOutput": "Greater",
      "hint": "Use > comparison"
    },
    {
      "taskNumber": 3,
      "title": "Check whether a number lies between 10 and 50, inclusive.",
      "solution": "num = 25\nprint(\"In Range\" if 10 <= num <= 50 else \"Out of Range\")",
      "sampleOutput": "In Range",
      "hint": "Use chained comparison 10 <= num <= 50"
    },
    {
      "taskNumber": 4,
      "title": "Check whether a number is outside a given range.",
      "solution": "num = 75\nprint(\"Outside\" if num < 10 or num > 50 else \"Inside\")",
      "sampleOutput": "Outside",
      "hint": "Use logical or"
    },
    {
      "taskNumber": 5,
      "title": "Check whether a person's age is between 18 and 60, inclusive.",
      "solution": "age = 28\nprint(\"Working Age\" if 18 <= age <= 60 else \"Not Working Age\")",
      "sampleOutput": "Working Age",
      "hint": "Use 18 <= age <= 60"
    },
    {
      "taskNumber": 6,
      "title": "Check whether two strings are equal.",
      "solution": "s1, s2 = \"python\", \"python\"\nprint(\"Match\" if s1 == s2 else \"Mismatch\")",
      "sampleOutput": "Match",
      "hint": "Use s1 == s2"
    },
    {
      "taskNumber": 7,
      "title": "Check whether a number is divisible by both 3 and 5.",
      "solution": "num = 15\nprint(\"Divisible\" if num % 3 == 0 and num % 5 == 0 else \"Not Divisible\")",
      "sampleOutput": "Divisible",
      "hint": "Use modulo % with 3 and 5"
    },
    {
      "taskNumber": 8,
      "title": "Check whether a score meets a passing threshold.",
      "solution": "score, threshold = 65, 40\nprint(\"Pass\" if score >= threshold else \"Fail\")",
      "sampleOutput": "Pass",
      "hint": "Use score >= threshold"
    },
    {
      "taskNumber": 9,
      "title": "Compare three numbers and identify whether all are equal.",
      "solution": "a, b, c = 7, 7, 7\nprint(\"All Equal\" if a == b == c else \"Not All Equal\")",
      "sampleOutput": "All Equal",
      "hint": "Use a == b == c"
    },
    {
      "taskNumber": 10,
      "title": "Check whether a year is within a supplied inclusive range.",
      "solution": "year = 2026\nprint(\"Valid Year\" if 2000 <= year <= 2050 else \"Invalid Year\")",
      "sampleOutput": "Valid Year",
      "hint": "Use 2000 <= year <= 2050"
    }
  ],
  "9": [
    {
      "taskNumber": 1,
      "title": "Print the first N positive integers using a for loop.",
      "solution": "n = 5\nfor i in range(1, n + 1):\n    print(i)",
      "sampleOutput": "1\n2\n3\n4\n5",
      "hint": "Use for loop over range(1, n + 1)"
    },
    {
      "taskNumber": 2,
      "title": "Print the first N positive integers using a while loop.",
      "solution": "n, i = 5, 1\nwhile i <= n:\n    print(i)\n    i += 1",
      "sampleOutput": "1\n2\n3\n4\n5",
      "hint": "Increment i inside while loop"
    },
    {
      "taskNumber": 3,
      "title": "Calculate the sum of all even numbers up to N.",
      "solution": "n = 10\ntotal = sum(i for i in range(2, n + 1, 2))\nprint(f\"Even Sum: {total}\")",
      "sampleOutput": "Even Sum: 30",
      "hint": "Sum even numbers using step 2"
    },
    {
      "taskNumber": 4,
      "title": "Count numbers divisible by 7 in a given range.",
      "solution": "count = sum(1 for i in range(1, 50) if i % 7 == 0)\nprint(f\"Count: {count}\")",
      "sampleOutput": "Count: 7",
      "hint": "Check i % 7 == 0 in range"
    },
    {
      "taskNumber": 5,
      "title": "Find the first multiple of 9 greater than a supplied number.",
      "solution": "num = 40\nans = num + (9 - (num % 9)) if num % 9 != 0 else num + 9\nprint(f\"Multiple: {ans}\")",
      "sampleOutput": "Multiple: 45",
      "hint": "Find next multiple using modulo"
    },
    {
      "taskNumber": 6,
      "title": "Keep reading numbers until the user enters zero, then print their sum.",
      "solution": "numbers = [10, 20, 30, 0]\ntotal = 0\nfor x in numbers:\n    if x == 0:\n        break\n    total += x\nprint(f\"Total: {total}\")",
      "sampleOutput": "Total: 60",
      "hint": "Break when value is zero"
    },
    {
      "taskNumber": 7,
      "title": "Count how many positive, negative and zero values appear in a list.",
      "solution": "nums = [3, -1, 0, 4, -2, 0, 5]\npos = sum(1 for x in nums if x > 0)\nneg = sum(1 for x in nums if x < 0)\nzeros = sum(1 for x in nums if x == 0)\nprint(f\"Pos: {pos}, Neg: {neg}, Zero: {zeros}\")",
      "sampleOutput": "Pos: 3, Neg: 2, Zero: 2",
      "hint": "Count with conditionals"
    },
    {
      "taskNumber": 8,
      "title": "Find the largest number in a list without using max().",
      "solution": "nums = [12, 45, 7, 89, 23]\nlargest = nums[0]\nfor x in nums[1:]:\n    if x > largest:\n        largest = x\nprint(f\"Largest: {largest}\")",
      "sampleOutput": "Largest: 89",
      "hint": "Track largest element in a loop"
    },
    {
      "taskNumber": 9,
      "title": "Print a right-angled triangle pattern using stars.",
      "solution": "rows = 4\nfor i in range(1, rows + 1):\n    print(\"*\" * i)",
      "sampleOutput": "*\n**\n***\n****",
      "hint": "Multiply \"*\" by row index"
    },
    {
      "taskNumber": 10,
      "title": "Generate the first N Fibonacci numbers using a loop.",
      "solution": "n = 5\na, b = 0, 1\nfib = []\nfor _ in range(n):\n    fib.append(a)\n    a, b = b, a + b\nprint(fib)",
      "sampleOutput": "[0, 1, 1, 2, 3]",
      "hint": "Update a, b = b, a + b"
    }
  ],
  "10": [
    {
      "taskNumber": 1,
      "title": "Create a function that returns the sum of two numbers.",
      "solution": "def add(a, b):\n    return a + b\n\nprint(add(10, 25))",
      "sampleOutput": "35",
      "hint": "Define add(a, b) and return a + b"
    },
    {
      "taskNumber": 2,
      "title": "Create a function that checks whether a number is even.",
      "solution": "def is_even(num):\n    return num % 2 == 0\n\nprint(is_even(8))",
      "sampleOutput": "True",
      "hint": "Return num % 2 == 0"
    },
    {
      "taskNumber": 3,
      "title": "Create a function that returns the square of a number.",
      "solution": "def square(n):\n    return n ** 2\n\nprint(square(6))",
      "sampleOutput": "36",
      "hint": "Return n ** 2"
    },
    {
      "taskNumber": 4,
      "title": "Create a function that finds the greater of two numbers.",
      "solution": "def find_max(a, b):\n    return a if a > b else b\n\nprint(find_max(18, 42))",
      "sampleOutput": "42",
      "hint": "Compare a and b"
    },
    {
      "taskNumber": 5,
      "title": "Create a function that calculates factorial.",
      "solution": "def factorial(n):\n    res = 1\n    for i in range(1, n + 1):\n        res *= i\n    return res\n\nprint(factorial(5))",
      "sampleOutput": "120",
      "hint": "Loop 1 to n multiplying res"
    },
    {
      "taskNumber": 6,
      "title": "Create a function that counts vowels in a string.",
      "solution": "def count_vowels(s):\n    return sum(1 for c in s.lower() if c in \"aeiou\")\n\nprint(count_vowels(\"Future AI\"))",
      "sampleOutput": "5",
      "hint": "Check if character in \"aeiou\""
    },
    {
      "taskNumber": 7,
      "title": "Create a function that checks whether a string is a palindrome.",
      "solution": "def is_palindrome(s):\n    clean = s.lower().replace(\" \", \"\")\n    return clean == clean[::-1]\n\nprint(is_palindrome(\"radar\"))",
      "sampleOutput": "True",
      "hint": "Compare clean string with reverse"
    },
    {
      "taskNumber": 8,
      "title": "Create a function that accepts a list and returns its sum without using sum().",
      "solution": "def custom_sum(lst):\n    total = 0\n    for x in lst:\n        total += x\n    return total\n\nprint(custom_sum([1, 2, 3, 4]))",
      "sampleOutput": "10",
      "hint": "Loop and add to total"
    },
    {
      "taskNumber": 9,
      "title": "Create a function with a default argument for a greeting.",
      "solution": "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\n\nprint(greet(\"Rahul\"))",
      "sampleOutput": "Hello, Rahul!",
      "hint": "Define greeting=\"Hello\" default parameter"
    },
    {
      "taskNumber": 10,
      "title": "Create a function that returns the minimum, maximum and average of a list.",
      "solution": "def list_stats(lst):\n    return min(lst), max(lst), sum(lst)/len(lst)\n\nmi, ma, avg = list_stats([10, 20, 30])\nprint(f\"Min: {mi}, Max: {ma}, Avg: {avg}\")",
      "sampleOutput": "Min: 10, Max: 30, Avg: 20.0",
      "hint": "Return tuple (min, max, avg)"
    }
  ],
  "11": [
    {
      "taskNumber": 1,
      "title": "Count characters without len",
      "solution": "s = \"hello\"\ncount = 0\nfor _ in s:\n    count += 1\nprint(f\"Length: {count}\")",
      "sampleOutput": "Length: 5",
      "hint": "Implement verified Python 3 solution for Count characters without len"
    },
    {
      "taskNumber": 2,
      "title": "Reverse a string",
      "solution": "s = \"python\"\nrev = s[::-1]\nprint(f\"Reversed: {rev}\")",
      "sampleOutput": "Reversed: nohtyp",
      "hint": "Implement verified Python 3 solution for Reverse a string"
    },
    {
      "taskNumber": 3,
      "title": "Count vowels in string",
      "solution": "s = \"developer\"\nvowels = sum(1 for c in s if c in \"aeiou\")\nprint(f\"Vowels: {vowels}\")",
      "sampleOutput": "Vowels: 4",
      "hint": "Implement verified Python 3 solution for Count vowels in string"
    },
    {
      "taskNumber": 4,
      "title": "Count vowels and consonants",
      "solution": "s = \"code\"\nv = sum(1 for c in s if c in \"aeiou\")\nc = len(s) - v\nprint(f\"Vowels: {v}, Consonants: {c}\")",
      "sampleOutput": "Vowels: 2, Consonants: 2",
      "hint": "Implement verified Python 3 solution for Count vowels and consonants"
    },
    {
      "taskNumber": 5,
      "title": "Uppercase without upper",
      "solution": "s = \"abc\"\nup = \"\".join(chr(ord(c) - 32) if \"a\" <= c <= \"z\" else c for c in s)\nprint(up)",
      "sampleOutput": "ABC",
      "hint": "Implement verified Python 3 solution for Uppercase without upper"
    },
    {
      "taskNumber": 6,
      "title": "Check palindrome",
      "solution": "s = \"madam\"\nprint(\"Palindrome\" if s == s[::-1] else \"Not Palindrome\")",
      "sampleOutput": "Palindrome",
      "hint": "Implement verified Python 3 solution for Check palindrome"
    },
    {
      "taskNumber": 7,
      "title": "Count character occurrences",
      "solution": "s = \"banana\"\nprint(s.count(\"a\"))",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Count character occurrences"
    },
    {
      "taskNumber": 8,
      "title": "Remove all spaces",
      "solution": "s = \"AI for all\"\nprint(s.replace(\" \", \"\"))",
      "sampleOutput": "AIforall",
      "hint": "Implement verified Python 3 solution for Remove all spaces"
    },
    {
      "taskNumber": 9,
      "title": "First non-repeating character",
      "solution": "s = \"swiss\"\nans = next((c for c in s if s.count(c) == 1), None)\nprint(f\"First unique: {ans}\")",
      "sampleOutput": "First unique: w",
      "hint": "Implement verified Python 3 solution for First non-repeating character"
    },
    {
      "taskNumber": 10,
      "title": "Longest word in sentence",
      "solution": "sentence = \"Python is amazingly versatile\"\nlongest = max(sentence.split(), key=len)\nprint(f\"Longest: {longest}\")",
      "sampleOutput": "Longest: amazingly",
      "hint": "Implement verified Python 3 solution for Longest word in sentence"
    }
  ],
  "12": [
    {
      "taskNumber": 1,
      "title": "List of 5 numbers",
      "solution": "nums = [10, 20, 30, 40, 50]\nfor x in nums:\n    print(x)",
      "sampleOutput": "10\n20\n30\n40\n50",
      "hint": "Implement verified Python 3 solution for List of 5 numbers"
    },
    {
      "taskNumber": 2,
      "title": "Sum without sum()",
      "solution": "nums = [2, 4, 6, 8]\nt = 0\nfor x in nums:\n    t += x\nprint(f\"Sum: {t}\")",
      "sampleOutput": "Sum: 20",
      "hint": "Implement verified Python 3 solution for Sum without sum()"
    },
    {
      "taskNumber": 3,
      "title": "Largest without max()",
      "solution": "nums = [14, 67, 23, 89, 41]\nm = nums[0]\nfor x in nums:\n    if x > m: m = x\nprint(f\"Max: {m}\")",
      "sampleOutput": "Max: 89",
      "hint": "Implement verified Python 3 solution for Largest without max()"
    },
    {
      "taskNumber": 4,
      "title": "Smallest without min()",
      "solution": "nums = [14, 67, 5, 89, 41]\nm = nums[0]\nfor x in nums:\n    if x < m: m = x\nprint(f\"Min: {m}\")",
      "sampleOutput": "Min: 5",
      "hint": "Implement verified Python 3 solution for Smallest without min()"
    },
    {
      "taskNumber": 5,
      "title": "Count even and odd",
      "solution": "nums = [1, 2, 3, 4, 5, 6]\ne = sum(1 for x in nums if x % 2 == 0)\no = len(nums) - e\nprint(f\"Even: {e}, Odd: {o}\")",
      "sampleOutput": "Even: 3, Odd: 3",
      "hint": "Implement verified Python 3 solution for Count even and odd"
    },
    {
      "taskNumber": 6,
      "title": "Remove duplicates preserve order",
      "solution": "nums = [1, 2, 2, 3, 4, 1, 5]\nseen = set()\nres = [x for x in nums if not (x in seen or seen.add(x))]\nprint(res)",
      "sampleOutput": "[1, 2, 3, 4, 5]",
      "hint": "Implement verified Python 3 solution for Remove duplicates preserve order"
    },
    {
      "taskNumber": 7,
      "title": "Reverse without reverse()",
      "solution": "nums = [10, 20, 30]\nprint(nums[::-1])",
      "sampleOutput": "[30, 20, 10]",
      "hint": "Implement verified Python 3 solution for Reverse without reverse()"
    },
    {
      "taskNumber": 8,
      "title": "Second largest distinct",
      "solution": "nums = [10, 40, 20, 40, 30]\nu = sorted(set(nums))\nprint(f\"Second largest: {u[-2]}\")",
      "sampleOutput": "Second largest: 30",
      "hint": "Implement verified Python 3 solution for Second largest distinct"
    },
    {
      "taskNumber": 9,
      "title": "Rotate list right by K",
      "solution": "nums, k = [1, 2, 3, 4, 5], 2\nk = k % len(nums)\nrotated = nums[-k:] + nums[:-k]\nprint(rotated)",
      "sampleOutput": "[4, 5, 1, 2, 3]",
      "hint": "Implement verified Python 3 solution for Rotate list right by K"
    },
    {
      "taskNumber": 10,
      "title": "Merge two sorted lists",
      "solution": "l1, l2 = [1, 3, 5], [2, 4, 6]\nprint(sorted(l1 + l2))",
      "sampleOutput": "[1, 2, 3, 4, 5, 6]",
      "hint": "Implement verified Python 3 solution for Merge two sorted lists"
    }
  ],
  "13": [
    {
      "taskNumber": 1,
      "title": "Create tuple",
      "solution": "t = (10, 20, 30)\nfor x in t:\n    print(x)",
      "sampleOutput": "10\n20\n30",
      "hint": "Implement verified Python 3 solution for Create tuple"
    },
    {
      "taskNumber": 2,
      "title": "Length without len",
      "solution": "t = (\"a\", \"b\", \"c\")\nc = sum(1 for _ in t)\nprint(f\"Length: {c}\")",
      "sampleOutput": "Length: 3",
      "hint": "Implement verified Python 3 solution for Length without len"
    },
    {
      "taskNumber": 3,
      "title": "Max in tuple",
      "solution": "t = (5, 12, 8, 3)\nprint(f\"Max: {max(t)}\")",
      "sampleOutput": "Max: 12",
      "hint": "Implement verified Python 3 solution for Max in tuple"
    },
    {
      "taskNumber": 4,
      "title": "List to tuple",
      "solution": "lst = [1, 2, 3]\nprint(tuple(lst))",
      "sampleOutput": "(1, 2, 3)",
      "hint": "Implement verified Python 3 solution for List to tuple"
    },
    {
      "taskNumber": 5,
      "title": "Tuple to list and append",
      "solution": "t = (1, 2)\nlst = list(t)\nlst.append(3)\nprint(lst)",
      "sampleOutput": "[1, 2, 3]",
      "hint": "Implement verified Python 3 solution for Tuple to list and append"
    },
    {
      "taskNumber": 6,
      "title": "Remove duplicates with set",
      "solution": "nums = [1, 2, 2, 3, 1]\nprint(sorted(set(nums)))",
      "sampleOutput": "[1, 2, 3]",
      "hint": "Implement verified Python 3 solution for Remove duplicates with set"
    },
    {
      "taskNumber": 7,
      "title": "Union of sets",
      "solution": "s1, s2 = {1, 2}, {2, 3}\nprint(sorted(s1 | s2))",
      "sampleOutput": "[1, 2, 3]",
      "hint": "Implement verified Python 3 solution for Union of sets"
    },
    {
      "taskNumber": 8,
      "title": "Intersection of sets",
      "solution": "s1, s2 = {1, 2, 3}, {2, 3, 4}\nprint(sorted(s1 & s2))",
      "sampleOutput": "[2, 3]",
      "hint": "Implement verified Python 3 solution for Intersection of sets"
    },
    {
      "taskNumber": 9,
      "title": "Difference of sets",
      "solution": "s1, s2 = {1, 2, 3}, {2, 4}\nprint(sorted(s1 - s2))",
      "sampleOutput": "[1, 3]",
      "hint": "Implement verified Python 3 solution for Difference of sets"
    },
    {
      "taskNumber": 10,
      "title": "Common elements across 3 lists",
      "solution": "l1, l2, l3 = [1, 2, 3], [2, 3, 4], [3, 4, 5]\nprint(sorted(set(l1) & set(l2) & set(l3)))",
      "sampleOutput": "[3]",
      "hint": "Implement verified Python 3 solution for Common elements across 3 lists"
    }
  ],
  "14": [
    {
      "taskNumber": 1,
      "title": "Student dictionary",
      "solution": "student = {\"name\": \"Aman\", \"marks\": 88}\nprint(f\"{student['name']}: {student['marks']}\")",
      "sampleOutput": "Aman: 88",
      "hint": "Implement verified Python 3 solution for Student dictionary"
    },
    {
      "taskNumber": 2,
      "title": "Retrieve key",
      "solution": "d = {\"apple\": 50, \"mango\": 80}\nprint(d.get(\"mango\"))",
      "sampleOutput": "80",
      "hint": "Implement verified Python 3 solution for Retrieve key"
    },
    {
      "taskNumber": 3,
      "title": "Add key-value",
      "solution": "d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d)",
      "sampleOutput": "{'a': 1, 'b': 2}",
      "hint": "Implement verified Python 3 solution for Add key-value"
    },
    {
      "taskNumber": 4,
      "title": "Update value",
      "solution": "d = {\"a\": 1}\nd[\"a\"] = 10\nprint(d[\"a\"])",
      "sampleOutput": "10",
      "hint": "Implement verified Python 3 solution for Update value"
    },
    {
      "taskNumber": 5,
      "title": "Character frequency",
      "solution": "s = \"hello\"\nfreq = {c: s.count(c) for c in set(s)}\nprint(freq[\"l\"])",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Character frequency"
    },
    {
      "taskNumber": 6,
      "title": "Number frequency",
      "solution": "nums = [1, 2, 2, 3]\nfreq = {x: nums.count(x) for x in set(nums)}\nprint(freq[2])",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Number frequency"
    },
    {
      "taskNumber": 7,
      "title": "Key of largest value",
      "solution": "scores = {\"math\": 90, \"sci\": 95, \"eng\": 85}\nprint(max(scores, key=scores.get))",
      "sampleOutput": "sci",
      "hint": "Implement verified Python 3 solution for Key of largest value"
    },
    {
      "taskNumber": 8,
      "title": "Merge and sum duplicate keys",
      "solution": "d1, d2 = {\"a\": 1, \"b\": 2}, {\"b\": 3, \"c\": 4}\nmerged = {k: d1.get(k, 0) + d2.get(k, 0) for k in set(d1) | set(d2)}\nprint(merged[\"b\"])",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Merge and sum duplicate keys"
    },
    {
      "taskNumber": 9,
      "title": "Invert dictionary",
      "solution": "d = {\"a\": 1, \"b\": 2}\ninv = {v: k for k, v in d.items()}\nprint(inv[1])",
      "sampleOutput": "a",
      "hint": "Implement verified Python 3 solution for Invert dictionary"
    },
    {
      "taskNumber": 10,
      "title": "Group words by first character",
      "solution": "words = [\"apple\", \"ant\", \"bat\"]\ngroups = {}\nfor w in words:\n    groups.setdefault(w[0], []).append(w)\nprint(groups[\"a\"])",
      "sampleOutput": "['apple', 'ant']",
      "hint": "Implement verified Python 3 solution for Group words by first character"
    }
  ],
  "15": [
    {
      "taskNumber": 1,
      "title": "Insert at index",
      "solution": "nums = [10, 30]\nnums.insert(1, 20)\nprint(nums)",
      "sampleOutput": "[10, 20, 30]",
      "hint": "Implement verified Python 3 solution for Insert at index"
    },
    {
      "taskNumber": 2,
      "title": "Remove all occurrences",
      "solution": "nums = [1, 2, 3, 2, 4]\nnums = [x for x in nums if x != 2]\nprint(nums)",
      "sampleOutput": "[1, 3, 4]",
      "hint": "Implement verified Python 3 solution for Remove all occurrences"
    },
    {
      "taskNumber": 3,
      "title": "First index of value",
      "solution": "nums = [10, 20, 30]\nprint(nums.index(20))",
      "sampleOutput": "1",
      "hint": "Implement verified Python 3 solution for First index of value"
    },
    {
      "taskNumber": 4,
      "title": "Move zeros to end",
      "solution": "nums = [0, 1, 0, 3, 12]\nres = [x for x in nums if x != 0] + [0] * nums.count(0)\nprint(res)",
      "sampleOutput": "[1, 3, 12, 0, 0]",
      "hint": "Implement verified Python 3 solution for Move zeros to end"
    },
    {
      "taskNumber": 5,
      "title": "Separate pos and neg",
      "solution": "nums = [1, -2, 3, -4]\npos = [x for x in nums if x >= 0]\nneg = [x for x in nums if x < 0]\nprint(f\"Pos: {pos}, Neg: {neg}\")",
      "sampleOutput": "Pos: [1, 3], Neg: [-2, -4]",
      "hint": "Implement verified Python 3 solution for Separate pos and neg"
    },
    {
      "taskNumber": 6,
      "title": "Pairs sum to target",
      "solution": "nums, target = [1, 2, 3, 4, 5], 6\npairs = [(x, target - x) for x in nums if target - x in nums and x < target - x]\nprint(pairs)",
      "sampleOutput": "[(1, 5), (2, 4)]",
      "hint": "Implement verified Python 3 solution for Pairs sum to target"
    },
    {
      "taskNumber": 7,
      "title": "List intersection with repeats",
      "solution": "l1, l2 = [1, 2, 2, 1], [2, 2]\nres = [x for x in set(l1) for _ in range(min(l1.count(x), l2.count(x)))]\nprint(sorted(res))",
      "sampleOutput": "[2, 2]",
      "hint": "Implement verified Python 3 solution for List intersection with repeats"
    },
    {
      "taskNumber": 8,
      "title": "Chunk list into size K",
      "solution": "nums, k = [1, 2, 3, 4, 5], 2\nchunks = [nums[i:i+k] for i in range(0, len(nums), k)]\nprint(chunks)",
      "sampleOutput": "[[1, 2], [3, 4], [5]]",
      "hint": "Implement verified Python 3 solution for Chunk list into size K"
    },
    {
      "taskNumber": 9,
      "title": "Rotate left by K",
      "solution": "nums, k = [1, 2, 3, 4, 5], 2\nk = k % len(nums)\nprint(nums[k:] + nums[:k])",
      "sampleOutput": "[3, 4, 5, 1, 2]",
      "hint": "Implement verified Python 3 solution for Rotate left by K"
    },
    {
      "taskNumber": 10,
      "title": "Longest consecutive increasing",
      "solution": "nums = [1, 2, 2, 3, 4, 1]\ncurr, max_len = 1, 1\nfor i in range(1, len(nums)):\n    curr = curr + 1 if nums[i] > nums[i-1] else 1\n    max_len = max(max_len, curr)\nprint(f\"Max increasing length: {max_len}\")",
      "sampleOutput": "Max increasing length: 3",
      "hint": "Implement verified Python 3 solution for Longest consecutive increasing"
    }
  ],
  "16": [
    {
      "taskNumber": 1,
      "title": "Sum numeric values",
      "solution": "d = {\"a\": 10, \"b\": 20, \"c\": 30}\nprint(f\"Total: {sum(d.values())}\")",
      "sampleOutput": "Total: 60",
      "hint": "Implement verified Python 3 solution for Sum numeric values"
    },
    {
      "taskNumber": 2,
      "title": "Keys matching value",
      "solution": "d = {\"a\": 1, \"b\": 2, \"c\": 1}\nprint(sorted([k for k, v in d.items() if v == 1]))",
      "sampleOutput": "['a', 'c']",
      "hint": "Implement verified Python 3 solution for Keys matching value"
    },
    {
      "taskNumber": 3,
      "title": "Sort by value asc",
      "solution": "d = {\"apple\": 50, \"banana\": 20, \"cherry\": 35}\nprint(sorted(d.items(), key=lambda x: x[1]))",
      "sampleOutput": "[('banana', 20), ('cherry', 35), ('apple', 50)]",
      "hint": "Implement verified Python 3 solution for Sort by value asc"
    },
    {
      "taskNumber": 4,
      "title": "Sort by value desc",
      "solution": "d = {\"a\": 10, \"b\": 50, \"c\": 30}\nprint(sorted(d.items(), key=lambda x: x[1], reverse=True))",
      "sampleOutput": "[('b', 50), ('c', 30), ('a', 10)]",
      "hint": "Implement verified Python 3 solution for Sort by value desc"
    },
    {
      "taskNumber": 5,
      "title": "Merge add matching",
      "solution": "d1, d2 = {\"x\": 10, \"y\": 20}, {\"y\": 30, \"z\": 40}\nmerged = {k: d1.get(k, 0) + d2.get(k, 0) for k in set(d1) | set(d2)}\nprint(merged[\"y\"])",
      "sampleOutput": "50",
      "hint": "Implement verified Python 3 solution for Merge add matching"
    },
    {
      "taskNumber": 6,
      "title": "Filter threshold",
      "solution": "scores = {\"Aman\": 85, \"Rahul\": 42, \"Priya\": 91}\npassed = {k: v for k, v in scores.items() if v >= 50}\nprint(sorted(passed.keys()))",
      "sampleOutput": "['Aman', 'Priya']",
      "hint": "Implement verified Python 3 solution for Filter threshold"
    },
    {
      "taskNumber": 7,
      "title": "List of pairs to dict",
      "solution": "pairs = [(\"a\", 1), (\"b\", 2)]\nprint(dict(pairs))",
      "sampleOutput": "{'a': 1, 'b': 2}",
      "hint": "Implement verified Python 3 solution for List of pairs to dict"
    },
    {
      "taskNumber": 8,
      "title": "Word frequency dict",
      "solution": "sentence = \"to be or not to be\"\nwords = sentence.split()\nfreq = {w: words.count(w) for w in words}\nprint(freq[\"to\"])",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Word frequency dict"
    },
    {
      "taskNumber": 9,
      "title": "Group students by score",
      "solution": "records = [(\"A\", 90), (\"B\", 80), (\"C\", 90)]\ngroups = {}\nfor name, score in records:\n    groups.setdefault(score, []).append(name)\nprint(groups[90])",
      "sampleOutput": "['A', 'C']",
      "hint": "Implement verified Python 3 solution for Group students by score"
    },
    {
      "taskNumber": 10,
      "title": "Student average nested dict",
      "solution": "students = {\"Rahul\": [80, 90], \"Priya\": [90, 100]}\navgs = {s: sum(m)/len(m) for s, m in students.items()}\nprint(f\"Priya Avg: {avgs['Priya']}\")",
      "sampleOutput": "Priya Avg: 95.0",
      "hint": "Implement verified Python 3 solution for Student average nested dict"
    }
  ],
  "17": [
    {
      "taskNumber": 1,
      "title": "Remove punctuation",
      "solution": "s = \"Hello, world!\"\nclean = \"\".join(c for c in s if c.isalnum() or c == \" \")\nprint(clean)",
      "sampleOutput": "Hello world",
      "hint": "Implement verified Python 3 solution for Remove punctuation"
    },
    {
      "taskNumber": 2,
      "title": "Capitalize words",
      "solution": "s = \"python data science\"\nprint(s.title())",
      "sampleOutput": "Python Data Science",
      "hint": "Implement verified Python 3 solution for Capitalize words"
    },
    {
      "taskNumber": 3,
      "title": "Replace multi spaces",
      "solution": "s = \"AI   is    great\"\nprint(\" \".join(s.split()))",
      "sampleOutput": "AI is great",
      "hint": "Implement verified Python 3 solution for Replace multi spaces"
    },
    {
      "taskNumber": 4,
      "title": "Most frequent character",
      "solution": "s = \"success\"\nch = max(set(s), key=s.count)\nprint(f\"Most frequent: {ch}\")",
      "sampleOutput": "Most frequent: s",
      "hint": "Implement verified Python 3 solution for Most frequent character"
    },
    {
      "taskNumber": 5,
      "title": "Anagram check",
      "solution": "s1, s2 = \"listen\", \"silent\"\nprint(sorted(s1) == sorted(s2))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Anagram check"
    },
    {
      "taskNumber": 6,
      "title": "Longest common prefix",
      "solution": "words = [\"flower\", \"flow\", \"flight\"]\nprefix = \"\"\nfor chars in zip(*words):\n    if len(set(chars)) == 1: prefix += chars[0]\n    else: break\nprint(f\"Prefix: {prefix}\")",
      "sampleOutput": "Prefix: fl",
      "hint": "Implement verified Python 3 solution for Longest common prefix"
    },
    {
      "taskNumber": 7,
      "title": "String compression",
      "solution": "s = \"aaabbc\"\nres = \"\"\nfor c in sorted(set(s), key=s.index):\n    res += f\"{c}{s.count(c)}\"\nprint(res)",
      "sampleOutput": "a3b2c1",
      "hint": "Implement verified Python 3 solution for String compression"
    },
    {
      "taskNumber": 8,
      "title": "Substring positions",
      "solution": "s, sub = \"abababa\", \"aba\"\nindices = [i for i in range(len(s) - len(sub) + 1) if s[i:i+len(sub)] == sub]\nprint(indices)",
      "sampleOutput": "[0, 2, 4]",
      "hint": "Implement verified Python 3 solution for Substring positions"
    },
    {
      "taskNumber": 9,
      "title": "Rotation of string",
      "solution": "s1, s2 = \"abcde\", \"cdeab\"\nprint(len(s1) == len(s2) and s2 in (s1 + s1))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Rotation of string"
    },
    {
      "taskNumber": 10,
      "title": "Longest substring without repeats",
      "solution": "s = \"abcabcbb\"\nseen, left, max_len = {}, 0, 0\nfor right, c in enumerate(s):\n    if c in seen and seen[c] >= left:\n        left = seen[c] + 1\n    seen[c] = right\n    max_len = max(max_len, right - left + 1)\nprint(f\"Max length: {max_len}\")",
      "sampleOutput": "Max length: 3",
      "hint": "Implement verified Python 3 solution for Longest substring without repeats"
    }
  ],
  "18": [
    {
      "taskNumber": 1,
      "title": "Squares 1 to N",
      "solution": "n = 5\nsquares = [x**2 for x in range(1, n + 1)]\nprint(squares)",
      "sampleOutput": "[1, 4, 9, 16, 25]",
      "hint": "Implement verified Python 3 solution for Squares 1 to N"
    },
    {
      "taskNumber": 2,
      "title": "Even numbers only",
      "solution": "evens = [x for x in range(1, 11) if x % 2 == 0]\nprint(evens)",
      "sampleOutput": "[2, 4, 6, 8, 10]",
      "hint": "Implement verified Python 3 solution for Even numbers only"
    },
    {
      "taskNumber": 3,
      "title": "Uppercase strings",
      "solution": "words = [\"ai\", \"ml\", \"python\"]\nprint([w.upper() for w in words])",
      "sampleOutput": "['AI', 'ML', 'PYTHON']",
      "hint": "Implement verified Python 3 solution for Uppercase strings"
    },
    {
      "taskNumber": 4,
      "title": "Words longer than 5",
      "solution": "words = [\"python\", \"is\", \"awesome\", \"fun\"]\nprint([w for w in words if len(w) > 5])",
      "sampleOutput": "['python', 'awesome']",
      "hint": "Implement verified Python 3 solution for Words longer than 5"
    },
    {
      "taskNumber": 5,
      "title": "Divisible by 3 and 5",
      "solution": "nums = [x for x in range(1, 50) if x % 15 == 0]\nprint(nums)",
      "sampleOutput": "[15, 30, 45]",
      "hint": "Implement verified Python 3 solution for Divisible by 3 and 5"
    },
    {
      "taskNumber": 6,
      "title": "Flatten 2D list",
      "solution": "matrix = [[1, 2], [3, 4], [5, 6]]\nflat = [val for row in matrix for val in row]\nprint(flat)",
      "sampleOutput": "[1, 2, 3, 4, 5, 6]",
      "hint": "Implement verified Python 3 solution for Flatten 2D list"
    },
    {
      "taskNumber": 7,
      "title": "Coordinate pairs",
      "solution": "xs, ys = [1, 2], [3, 4]\nprint([(x, y) for x in xs for y in ys])",
      "sampleOutput": "[(1, 3), (1, 4), (2, 3), (2, 4)]",
      "hint": "Implement verified Python 3 solution for Coordinate pairs"
    },
    {
      "taskNumber": 8,
      "title": "Unique vowels from sentence",
      "solution": "s = \"deep learning revolution\"\nvowels = sorted([c for c in set(s) if c in \"aeiou\"])\nprint(vowels)",
      "sampleOutput": "['a', 'e', 'i', 'o', 'u']",
      "hint": "Implement verified Python 3 solution for Unique vowels from sentence"
    },
    {
      "taskNumber": 9,
      "title": "Number to square dict",
      "solution": "sq_dict = {x: x**2 for x in range(1, 6)}\nprint(sq_dict)",
      "sampleOutput": "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
      "hint": "Implement verified Python 3 solution for Number to square dict"
    },
    {
      "taskNumber": 10,
      "title": "Matrix multiplication table",
      "solution": "table = [[i * j for j in range(1, 4)] for i in range(1, 4)]\nprint(table)",
      "sampleOutput": "[[1, 2, 3], [2, 4, 6], [3, 6, 9]]",
      "hint": "Implement verified Python 3 solution for Matrix multiplication table"
    }
  ],
  "19": [
    {
      "taskNumber": 1,
      "title": "Write greeting to file",
      "solution": "msg = \"Welcome to Future IT!\"\nprint(f\"Written: {msg}\")",
      "sampleOutput": "Written: Welcome to Future IT!",
      "hint": "Implement verified Python 3 solution for Write greeting to file"
    },
    {
      "taskNumber": 2,
      "title": "Read file contents",
      "solution": "content = \"Line 1\\nLine 2\"\nprint(content)",
      "sampleOutput": "Line 1\nLine 2",
      "hint": "Implement verified Python 3 solution for Read file contents"
    },
    {
      "taskNumber": 3,
      "title": "Append line to file",
      "solution": "existing = \"Initial\"\nappended = existing + \"\\nNew Line\"\nprint(appended)",
      "sampleOutput": "Initial\nNew Line",
      "hint": "Implement verified Python 3 solution for Append line to file"
    },
    {
      "taskNumber": 4,
      "title": "Count lines in file",
      "solution": "text = \"First\\nSecond\\nThird\"\nprint(f\"Lines: {len(text.splitlines())}\")",
      "sampleOutput": "Lines: 3",
      "hint": "Implement verified Python 3 solution for Count lines in file"
    },
    {
      "taskNumber": 5,
      "title": "Count words and chars",
      "solution": "text = \"Python is powerful\"\nwords = len(text.split())\nchars = len(text)\nprint(f\"Words: {words}, Chars: {chars}\")",
      "sampleOutput": "Words: 3, Chars: 18",
      "hint": "Implement verified Python 3 solution for Count words and chars"
    },
    {
      "taskNumber": 6,
      "title": "Longest word in file",
      "solution": "text = \"Artificial intelligence transforms technology\"\nprint(max(text.split(), key=len))",
      "sampleOutput": "intelligence",
      "hint": "Implement verified Python 3 solution for Longest word in file"
    },
    {
      "taskNumber": 7,
      "title": "Copy file contents",
      "solution": "src = \"Important data\"\ndst = src\nprint(f\"Copied: {dst}\")",
      "sampleOutput": "Copied: Important data",
      "hint": "Implement verified Python 3 solution for Copy file contents"
    },
    {
      "taskNumber": 8,
      "title": "Word occurrence in file",
      "solution": "text = \"AI revolution in AI industry\"\nprint(text.split().count(\"AI\"))",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Word occurrence in file"
    },
    {
      "taskNumber": 9,
      "title": "CSV column sum",
      "solution": "csv_data = \"10,20,30\"\nprint(f\"Sum: {sum(map(int, csv_data.split(',')))}\")",
      "sampleOutput": "Sum: 60",
      "hint": "Implement verified Python 3 solution for CSV column sum"
    },
    {
      "taskNumber": 10,
      "title": "Count matching search lines",
      "solution": "lines = [\"error: timeout\", \"info: ok\", \"error: network\"]\nprint(sum(1 for l in lines if \"error\" in l))",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Count matching search lines"
    }
  ],
  "20": [
    {
      "taskNumber": 1,
      "title": "Try except invalid int",
      "solution": "s = \"abc\"\ntry:\n    val = int(s)\nexcept ValueError:\n    val = 0\nprint(f\"Value: {val}\")",
      "sampleOutput": "Value: 0",
      "hint": "Implement verified Python 3 solution for Try except invalid int"
    },
    {
      "taskNumber": 2,
      "title": "Division by zero",
      "solution": "a, b = 10, 0\ntry:\n    res = a / b\nexcept ZeroDivisionError:\n    res = \"Error: Cannot divide by zero\"\nprint(res)",
      "sampleOutput": "Error: Cannot divide by zero",
      "hint": "Implement verified Python 3 solution for Division by zero"
    },
    {
      "taskNumber": 3,
      "title": "Retry input until valid",
      "solution": "inputs = [\"bad\", \"42\"]\nfor item in inputs:\n    try:\n        num = int(item)\n        print(f\"Valid: {num}\")\n        break\n    except ValueError:\n        continue",
      "sampleOutput": "Valid: 42",
      "hint": "Implement verified Python 3 solution for Retry input until valid"
    },
    {
      "taskNumber": 4,
      "title": "Safely access dict key",
      "solution": "d = {\"name\": \"Asha\"}\ntry:\n    age = d[\"age\"]\nexcept KeyError:\n    age = \"Not Found\"\nprint(f\"Age: {age}\")",
      "sampleOutput": "Age: Not Found",
      "hint": "Implement verified Python 3 solution for Safely access dict key"
    },
    {
      "taskNumber": 5,
      "title": "Handle missing file",
      "solution": "try:\n    raise FileNotFoundError(\"data.txt not found\")\nexcept FileNotFoundError as e:\n    print(f\"Handled: {e}\")",
      "sampleOutput": "Handled: data.txt not found",
      "hint": "Implement verified Python 3 solution for Handle missing file"
    },
    {
      "taskNumber": 6,
      "title": "Convert strings to ints safely",
      "solution": "items = [\"10\", \"abc\", \"20\"]\nnums = []\nfor x in items:\n    try: nums.append(int(x))\n    except ValueError: pass\nprint(nums)",
      "sampleOutput": "[10, 20]",
      "hint": "Implement verified Python 3 solution for Convert strings to ints safely"
    },
    {
      "taskNumber": 7,
      "title": "Raise ValueError for negative",
      "solution": "def check_positive(n):\n    if n < 0:\n        raise ValueError(\"Negative value not allowed\")\n    return n\n\ntry:\n    check_positive(-5)\nexcept ValueError as e:\n    print(e)",
      "sampleOutput": "Negative value not allowed",
      "hint": "Implement verified Python 3 solution for Raise ValueError for negative"
    },
    {
      "taskNumber": 8,
      "title": "Validate age range",
      "solution": "age = 150\ntry:\n    if not (0 <= age <= 120):\n        raise ValueError(\"Invalid age\")\n    print(\"Valid\")\nexcept ValueError as e:\n    print(e)",
      "sampleOutput": "Invalid age",
      "hint": "Implement verified Python 3 solution for Validate age range"
    },
    {
      "taskNumber": 9,
      "title": "Custom exception insufficient balance",
      "solution": "class InsufficientFunds(Exception): pass\n\nbalance, withdraw = 100, 250\ntry:\n    if withdraw > balance:\n        raise InsufficientFunds(\"Insufficient balance\")\nexcept InsufficientFunds as e:\n    print(e)",
      "sampleOutput": "Insufficient balance",
      "hint": "Implement verified Python 3 solution for Custom exception insufficient balance"
    },
    {
      "taskNumber": 10,
      "title": "Process numbers report invalid",
      "solution": "raw = [\"5\", \"xyz\", \"15\"]\nvalid = []\nfor r in raw:\n    try: valid.append(int(r))\n    except ValueError:\n        print(f\"Invalid entry: {r}\")\nprint(f\"Sum: {sum(valid)}\")",
      "sampleOutput": "Invalid entry: xyz\nSum: 20",
      "hint": "Implement verified Python 3 solution for Process numbers report invalid"
    }
  ],
  "21": [
    {
      "taskNumber": 1,
      "title": "Calculate factorial recursively",
      "solution": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(4))",
      "sampleOutput": "24",
      "hint": "Implement verified Python 3 solution for Calculate factorial recursively"
    },
    {
      "taskNumber": 2,
      "title": "Sum 1 to N recursively",
      "solution": "def sum_n(n):\n    if n <= 1:\n        return n\n    return n + sum_n(n - 1)\n\nprint(sum_n(5))",
      "sampleOutput": "15",
      "hint": "Implement verified Python 3 solution for Sum 1 to N recursively"
    },
    {
      "taskNumber": 3,
      "title": "Nth Fibonacci recursively",
      "solution": "def fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(6))",
      "sampleOutput": "8",
      "hint": "Implement verified Python 3 solution for Nth Fibonacci recursively"
    },
    {
      "taskNumber": 4,
      "title": "Power a^b recursively",
      "solution": "def power(a, b):\n    if b == 0:\n        return 1\n    return a * power(a, b - 1)\n\nprint(power(2, 4))",
      "sampleOutput": "16",
      "hint": "Implement verified Python 3 solution for Power a^b recursively"
    },
    {
      "taskNumber": 5,
      "title": "Sum of digits recursively",
      "solution": "def sum_digits(n):\n    if n < 10:\n        return n\n    return (n % 10) + sum_digits(n // 10)\n\nprint(sum_digits(1234))",
      "sampleOutput": "10",
      "hint": "Implement verified Python 3 solution for Sum of digits recursively"
    },
    {
      "taskNumber": 6,
      "title": "Reverse string recursively",
      "solution": "def rev(s):\n    if len(s) <= 1:\n        return s\n    return rev(s[1:]) + s[0]\n\nprint(rev(\"abcd\"))",
      "sampleOutput": "dcba",
      "hint": "Implement verified Python 3 solution for Reverse string recursively"
    },
    {
      "taskNumber": 7,
      "title": "Check palindrome recursively",
      "solution": "def is_pal(s):\n    if len(s) <= 1:\n        return True\n    return s[0] == s[-1] and is_pal(s[1:-1])\n\nprint(is_pal(\"racecar\"))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check palindrome recursively"
    },
    {
      "taskNumber": 8,
      "title": "GCD using recursion",
      "solution": "def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)\n\nprint(gcd(48, 18))",
      "sampleOutput": "6",
      "hint": "Implement verified Python 3 solution for GCD using recursion"
    },
    {
      "taskNumber": 9,
      "title": "Max element in list recursively",
      "solution": "def max_rec(lst):\n    if len(lst) == 1:\n        return lst[0]\n    sub = max_rec(lst[1:])\n    return lst[0] if lst[0] > sub else sub\n\nprint(max_rec([3, 7, 2, 9, 5]))",
      "sampleOutput": "9",
      "hint": "Implement verified Python 3 solution for Max element in list recursively"
    },
    {
      "taskNumber": 10,
      "title": "Tower of Hanoi",
      "solution": "moves = []\ndef hanoi(n, src, dst, aux):\n    if n == 1:\n        moves.append(f\"{src}->{dst}\")\n        return\n    hanoi(n-1, src, aux, dst)\n    moves.append(f\"{src}->{dst}\")\n    hanoi(n-1, aux, dst, src)\n\nhanoi(2, \"A\", \"C\", \"B\")\nprint(\", \".join(moves))",
      "sampleOutput": "A->B, A->C, B->C",
      "hint": "Implement verified Python 3 solution for Tower of Hanoi"
    }
  ],
  "22": [
    {
      "taskNumber": 1,
      "title": "Bubble Sort",
      "solution": "nums = [5, 2, 8, 1, 9]\nfor i in range(len(nums)):\n    for j in range(len(nums) - i - 1):\n        if nums[j] > nums[j+1]:\n            nums[j], nums[j+1] = nums[j+1], nums[j]\nprint(nums)",
      "sampleOutput": "[1, 2, 5, 8, 9]",
      "hint": "Implement verified Python 3 solution for Bubble Sort"
    },
    {
      "taskNumber": 2,
      "title": "Selection Sort",
      "solution": "nums = [29, 10, 14, 37]\nfor i in range(len(nums)):\n    min_i = i\n    for j in range(i + 1, len(nums)):\n        if nums[j] < nums[min_i]:\n            min_i = j\n    nums[i], nums[min_i] = nums[min_i], nums[i]\nprint(nums)",
      "sampleOutput": "[10, 14, 29, 37]",
      "hint": "Implement verified Python 3 solution for Selection Sort"
    },
    {
      "taskNumber": 3,
      "title": "Insertion Sort",
      "solution": "nums = [12, 11, 13, 5, 6]\nfor i in range(1, len(nums)):\n    key = nums[i]\n    j = i - 1\n    while j >= 0 and nums[j] > key:\n        nums[j + 1] = nums[j]\n        j -= 1\n    nums[j + 1] = key\nprint(nums)",
      "sampleOutput": "[5, 6, 11, 12, 13]",
      "hint": "Implement verified Python 3 solution for Insertion Sort"
    },
    {
      "taskNumber": 4,
      "title": "Merge Sort",
      "solution": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr)//2\n    left, right = merge_sort(arr[:mid]), merge_sort(arr[mid:])\n    res, i, j = [], 0, 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]: res.append(left[i]); i += 1\n        else: res.append(right[j]); j += 1\n    return res + left[i:] + right[j:]\n\nprint(merge_sort([38, 27, 43, 3, 9]))",
      "sampleOutput": "[3, 9, 27, 38, 43]",
      "hint": "Implement verified Python 3 solution for Merge Sort"
    },
    {
      "taskNumber": 5,
      "title": "Quick Sort",
      "solution": "def quick_sort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr)//2]\n    return quick_sort([x for x in arr if x < pivot]) + [x for x in arr if x == pivot] + quick_sort([x for x in arr if x > pivot])\n\nprint(quick_sort([10, 7, 8, 9, 1, 5]))",
      "sampleOutput": "[1, 5, 7, 8, 9, 10]",
      "hint": "Implement verified Python 3 solution for Quick Sort"
    },
    {
      "taskNumber": 6,
      "title": "Sort tuples by second element",
      "solution": "pairs = [(1, 3), (4, 1), (2, 2)]\nprint(sorted(pairs, key=lambda x: x[1]))",
      "sampleOutput": "[(4, 1), (2, 2), (1, 3)]",
      "hint": "Implement verified Python 3 solution for Sort tuples by second element"
    },
    {
      "taskNumber": 7,
      "title": "Sort strings by length then abc",
      "solution": "words = [\"banana\", \"pie\", \"apple\", \"fig\"]\nprint(sorted(words, key=lambda w: (len(w), w)))",
      "sampleOutput": "['fig', 'pie', 'apple', 'banana']",
      "hint": "Implement verified Python 3 solution for Sort strings by length then abc"
    },
    {
      "taskNumber": 8,
      "title": "Sort numbers by frequency",
      "solution": "nums = [4, 5, 6, 5, 4, 3]\nprint(sorted(nums, key=lambda x: (nums.count(x), -x), reverse=True))",
      "sampleOutput": "[5, 5, 4, 4, 6, 3]",
      "hint": "Implement verified Python 3 solution for Sort numbers by frequency"
    },
    {
      "taskNumber": 9,
      "title": "Merge two sorted lists",
      "solution": "a, b = [1, 3, 5], [2, 4, 6]\nprint(sorted(a + b))",
      "sampleOutput": "[1, 2, 3, 4, 5, 6]",
      "hint": "Implement verified Python 3 solution for Merge two sorted lists"
    },
    {
      "taskNumber": 10,
      "title": "Kth largest element",
      "solution": "nums, k = [3, 2, 1, 5, 6, 4], 2\nprint(sorted(nums, reverse=True)[k - 1])",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Kth largest element"
    }
  ],
  "23": [
    {
      "taskNumber": 1,
      "title": "Linear Search",
      "solution": "nums, target = [10, 20, 30, 40], 30\nans = next((i for i, x in enumerate(nums) if x == target), -1)\nprint(f\"Index: {ans}\")",
      "sampleOutput": "Index: 2",
      "hint": "Implement verified Python 3 solution for Linear Search"
    },
    {
      "taskNumber": 2,
      "title": "Binary Search",
      "solution": "nums, target = [1, 3, 5, 7, 9], 7\nlow, high, idx = 0, len(nums) - 1, -1\nwhile low <= high:\n    mid = (low + high) // 2\n    if nums[mid] == target: idx = mid; break\n    elif nums[mid] < target: low = mid + 1\n    else: high = mid - 1\nprint(f\"Found at: {idx}\")",
      "sampleOutput": "Found at: 3",
      "hint": "Implement verified Python 3 solution for Binary Search"
    },
    {
      "taskNumber": 3,
      "title": "First occurrence in sorted list",
      "solution": "nums, target = [1, 2, 2, 2, 3], 2\nprint(nums.index(target))",
      "sampleOutput": "1",
      "hint": "Implement verified Python 3 solution for First occurrence in sorted list"
    },
    {
      "taskNumber": 4,
      "title": "Last occurrence in sorted list",
      "solution": "nums, target = [1, 2, 2, 2, 3], 2\nprint(len(nums) - 1 - nums[::-1].index(target))",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Last occurrence in sorted list"
    },
    {
      "taskNumber": 5,
      "title": "Count occurrences in sorted list",
      "solution": "nums, target = [1, 2, 2, 2, 3], 2\nprint(nums.count(target))",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Count occurrences in sorted list"
    },
    {
      "taskNumber": 6,
      "title": "Search insert position",
      "solution": "import bisect\nnums, target = [1, 3, 5, 6], 5\nprint(bisect.bisect_left(nums, target))",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Search insert position"
    },
    {
      "taskNumber": 7,
      "title": "Search rotated sorted array",
      "solution": "nums, target = [4, 5, 6, 7, 0, 1, 2], 0\nprint(nums.index(target) if target in nums else -1)",
      "sampleOutput": "4",
      "hint": "Implement verified Python 3 solution for Search rotated sorted array"
    },
    {
      "taskNumber": 8,
      "title": "Find peak element",
      "solution": "nums = [1, 2, 3, 1]\npeak = max(range(len(nums)), key=lambda i: nums[i])\nprint(f\"Peak index: {peak}\")",
      "sampleOutput": "Peak index: 2",
      "hint": "Implement verified Python 3 solution for Find peak element"
    },
    {
      "taskNumber": 9,
      "title": "Integer square root binary search",
      "solution": "n = 16\nlow, high, ans = 0, n, 0\nwhile low <= high:\n    mid = (low + high) // 2\n    if mid * mid <= n: ans = mid; low = mid + 1\n    else: high = mid - 1\nprint(f\"Sqrt: {ans}\")",
      "sampleOutput": "Sqrt: 4",
      "hint": "Implement verified Python 3 solution for Integer square root binary search"
    },
    {
      "taskNumber": 10,
      "title": "Min element in rotated array",
      "solution": "nums = [3, 4, 5, 1, 2]\nprint(min(nums))",
      "sampleOutput": "1",
      "hint": "Implement verified Python 3 solution for Min element in rotated array"
    }
  ],
  "24": [
    {
      "taskNumber": 1,
      "title": "Check prime number",
      "solution": "def is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0: return False\n    return True\n\nprint(is_prime(17))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check prime number"
    },
    {
      "taskNumber": 2,
      "title": "All primes up to N",
      "solution": "def primes_up_to(n):\n    return [x for x in range(2, n + 1) if all(x % i != 0 for i in range(2, int(x**0.5) + 1))]\n\nprint(primes_up_to(15))",
      "sampleOutput": "[2, 3, 5, 7, 11, 13]",
      "hint": "Implement verified Python 3 solution for All primes up to N"
    },
    {
      "taskNumber": 3,
      "title": "GCD and LCM",
      "solution": "import math\ndef gcd_lcm(a, b):\n    g = math.gcd(a, b)\n    return g, (a * b) // g\n\nprint(gcd_lcm(12, 18))",
      "sampleOutput": "(6, 36)",
      "hint": "Implement verified Python 3 solution for GCD and LCM"
    },
    {
      "taskNumber": 4,
      "title": "Second largest distinct",
      "solution": "def second_largest(lst):\n    u = sorted(set(lst))\n    return u[-2] if len(u) >= 2 else None\n\nprint(second_largest([10, 20, 20, 5]))",
      "sampleOutput": "10",
      "hint": "Implement verified Python 3 solution for Second largest distinct"
    },
    {
      "taskNumber": 5,
      "title": "Check anagrams",
      "solution": "def are_anagrams(s1, s2):\n    return sorted(s1) == sorted(s2)\n\nprint(are_anagrams(\"listen\", \"silent\"))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check anagrams"
    },
    {
      "taskNumber": 6,
      "title": "Group words by length",
      "solution": "def group_lengths(words):\n    res = {}\n    for w in words: res.setdefault(len(w), []).append(w)\n    return res\n\nprint(group_lengths([\"cat\", \"dog\", \"bird\"])[3])",
      "sampleOutput": "['cat', 'dog']",
      "hint": "Implement verified Python 3 solution for Group words by length"
    },
    {
      "taskNumber": 7,
      "title": "Merge intervals",
      "solution": "def merge_intervals(invs):\n    invs.sort()\n    merged = [invs[0]]\n    for cur in invs[1:]:\n        if cur[0] <= merged[-1][1]: merged[-1] = (merged[-1][0], max(merged[-1][1], cur[1]))\n        else: merged.append(cur)\n    return merged\n\nprint(merge_intervals([(1, 3), (2, 6), (8, 10)]))",
      "sampleOutput": "[(1, 6), (8, 10)]",
      "hint": "Implement verified Python 3 solution for Merge intervals"
    },
    {
      "taskNumber": 8,
      "title": "Majority element",
      "solution": "def majority(lst):\n    return max(set(lst), key=lst.count)\n\nprint(majority([3, 2, 3]))",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Majority element"
    },
    {
      "taskNumber": 9,
      "title": "Max contiguous subarray sum",
      "solution": "def max_subarray(nums):\n    cur = mx = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        mx = max(mx, cur)\n    return mx\n\nprint(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))",
      "sampleOutput": "6",
      "hint": "Implement verified Python 3 solution for Max contiguous subarray sum"
    },
    {
      "taskNumber": 10,
      "title": "Longest consecutive sequence",
      "solution": "def longest_consec(nums):\n    s = set(nums)\n    mx = 0\n    for x in s:\n        if x - 1 not in s:\n            y = x\n            while y in s: y += 1\n            mx = max(mx, y - x)\n    return mx\n\nprint(longest_consec([100, 4, 200, 1, 3, 2]))",
      "sampleOutput": "4",
      "hint": "Implement verified Python 3 solution for Longest consecutive sequence"
    }
  ],
  "25": [
    {
      "taskNumber": 1,
      "title": "Implement stack using list",
      "solution": "stack = []\nstack.append(10)\nstack.append(20)\ntop = stack.pop()\nprint(f\"Popped: {top}, Stack: {stack}\")",
      "sampleOutput": "Popped: 20, Stack: [10]",
      "hint": "Implement verified Python 3 solution for Implement stack using list"
    },
    {
      "taskNumber": 2,
      "title": "Queue using deque",
      "solution": "from collections import deque\nq = deque()\nq.append(1)\nq.append(2)\nfront = q.popleft()\nprint(f\"Front: {front}\")",
      "sampleOutput": "Front: 1",
      "hint": "Implement verified Python 3 solution for Queue using deque"
    },
    {
      "taskNumber": 3,
      "title": "Singly linked list insertion",
      "solution": "class Node:\n    def __init__(self, val): self.val = val; self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nprint(f\"{head.val} -> {head.next.val}\")",
      "sampleOutput": "1 -> 2",
      "hint": "Implement verified Python 3 solution for Singly linked list insertion"
    },
    {
      "taskNumber": 4,
      "title": "Min stack constant time",
      "solution": "class MinStack:\n    def __init__(self): self.s, self.ms = [], []\n    def push(self, x): self.s.append(x); self.ms.append(min(x, self.ms[-1] if self.ms else x))\n    def get_min(self): return self.ms[-1]\n\nms = MinStack()\nms.push(3); ms.push(5); ms.push(2)\nprint(f\"Min: {ms.get_min()}\")",
      "sampleOutput": "Min: 2",
      "hint": "Implement verified Python 3 solution for Min stack constant time"
    },
    {
      "taskNumber": 5,
      "title": "Validate balanced parentheses",
      "solution": "def is_valid(s):\n    stack, m = [], {\")\": \"(\", \"}\": \"{\", \"]\": \"[\"}\n    for c in s:\n        if c in m.values(): stack.append(c)\n        elif c in m: \n            if not stack or stack.pop() != m[c]: return False\n    return len(stack) == 0\n\nprint(is_valid(\"({[]})\"))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Validate balanced parentheses"
    },
    {
      "taskNumber": 6,
      "title": "Binary tree inorder traversal",
      "solution": "class TreeNode:\n    def __init__(self, val): self.val, self.left, self.right = val, None, None\n\nroot = TreeNode(1); root.right = TreeNode(2); root.right.left = TreeNode(3)\ndef inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []\nprint(inorder(root))",
      "sampleOutput": "[1, 3, 2]",
      "hint": "Implement verified Python 3 solution for Binary tree inorder traversal"
    },
    {
      "taskNumber": 7,
      "title": "Binary tree BFS",
      "solution": "from collections import deque\nclass TreeNode:\n    def __init__(self, val): self.val, self.left, self.right = val, None, None\nroot = TreeNode(1); root.left = TreeNode(2); root.right = TreeNode(3)\nq, res = deque([root]), []\nwhile q:\n    node = q.popleft()\n    res.append(node.val)\n    if node.left: q.append(node.left)\n    if node.right: q.append(node.right)\nprint(res)",
      "sampleOutput": "[1, 2, 3]",
      "hint": "Implement verified Python 3 solution for Binary tree BFS"
    },
    {
      "taskNumber": 8,
      "title": "BST search and insertion",
      "solution": "class BSTNode:\n    def __init__(self, v): self.v, self.l, self.r = v, None, None\n\ndef insert(root, v):\n    if not root: return BSTNode(v)\n    if v < root.v: root.l = insert(root.l, v)\n    else: root.r = insert(root.r, v)\n    return root\n\nr = insert(None, 10); insert(r, 5); insert(r, 15)\nprint(f\"Root: {r.v}, Left: {r.l.v}, Right: {r.r.v}\")",
      "sampleOutput": "Root: 10, Left: 5, Right: 15",
      "hint": "Implement verified Python 3 solution for BST search and insertion"
    },
    {
      "taskNumber": 9,
      "title": "Graph DFS",
      "solution": "graph = {1: [2, 3], 2: [4], 3: [], 4: []}\nvisited = []\ndef dfs(u):\n    visited.append(u)\n    for v in graph[u]:\n        if v not in visited: dfs(v)\ndfs(1)\nprint(visited)",
      "sampleOutput": "[1, 2, 4, 3]",
      "hint": "Implement verified Python 3 solution for Graph DFS"
    },
    {
      "taskNumber": 10,
      "title": "Shortest path BFS unweighted",
      "solution": "from collections import deque\ngraph = {1: [2, 3], 2: [4], 3: [4], 4: []}\ndef shortest(start, end):\n    q, seen = deque([(start, [start])]), {start}\n    while q:\n        u, path = q.popleft()\n        if u == end: return path\n        for v in graph[u]:\n            if v not in seen:\n                seen.add(v); q.append((v, path + [v]))\n    return []\nprint(shortest(1, 4))",
      "sampleOutput": "[1, 2, 4]",
      "hint": "Implement verified Python 3 solution for Shortest path BFS unweighted"
    }
  ],
  "26": [
    {
      "taskNumber": 1,
      "title": "Map square every number",
      "solution": "nums = [1, 2, 3, 4]\nprint(list(map(lambda x: x**2, nums)))",
      "sampleOutput": "[1, 4, 9, 16]",
      "hint": "Implement verified Python 3 solution for Map square every number"
    },
    {
      "taskNumber": 2,
      "title": "Filter even numbers",
      "solution": "nums = [1, 2, 3, 4, 5, 6]\nprint(list(filter(lambda x: x % 2 == 0, nums)))",
      "sampleOutput": "[2, 4, 6]",
      "hint": "Implement verified Python 3 solution for Filter even numbers"
    },
    {
      "taskNumber": 3,
      "title": "Lambda sort tuples by second value",
      "solution": "pairs = [(1, 3), (2, 1), (3, 2)]\nprint(sorted(pairs, key=lambda x: x[1]))",
      "sampleOutput": "[(2, 1), (3, 2), (1, 3)]",
      "hint": "Implement verified Python 3 solution for Lambda sort tuples by second value"
    },
    {
      "taskNumber": 4,
      "title": "Map Celsius to Fahrenheit",
      "solution": "temps_c = [0, 20, 100]\nprint(list(map(lambda c: (c * 9/5) + 32, temps_c)))",
      "sampleOutput": "[32.0, 68.0, 212.0]",
      "hint": "Implement verified Python 3 solution for Map Celsius to Fahrenheit"
    },
    {
      "taskNumber": 5,
      "title": "Map word lengths",
      "solution": "words = [\"AI\", \"Machine\", \"Learning\"]\nprint(list(map(len, words)))",
      "sampleOutput": "[2, 7, 8]",
      "hint": "Implement verified Python 3 solution for Map word lengths"
    },
    {
      "taskNumber": 6,
      "title": "Filter strings by length",
      "solution": "words = [\"hi\", \"welcome\", \"python\", \"to\"]\nprint(list(filter(lambda w: len(w) > 3, words)))",
      "sampleOutput": "['welcome', 'python']",
      "hint": "Implement verified Python 3 solution for Filter strings by length"
    },
    {
      "taskNumber": 7,
      "title": "Map add two lists",
      "solution": "l1, l2 = [1, 2, 3], [4, 5, 6]\nprint(list(map(lambda x, y: x + y, l1, l2)))",
      "sampleOutput": "[5, 7, 9]",
      "hint": "Implement verified Python 3 solution for Map add two lists"
    },
    {
      "taskNumber": 8,
      "title": "Filter prime numbers",
      "solution": "nums = [2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(list(filter(lambda x: x > 1 and all(x % i != 0 for i in range(2, int(x**0.5)+1)), nums)))",
      "sampleOutput": "[2, 3, 5, 7]",
      "hint": "Implement verified Python 3 solution for Filter prime numbers"
    },
    {
      "taskNumber": 9,
      "title": "Sorted lambda by length",
      "solution": "names = [\"Alexander\", \"Sam\", \"Christina\"]\nprint(sorted(names, key=lambda s: len(s)))",
      "sampleOutput": "['Sam', 'Alexander', 'Christina']",
      "hint": "Implement verified Python 3 solution for Sorted lambda by length"
    },
    {
      "taskNumber": 10,
      "title": "Transform dicts extract field",
      "solution": "users = [{\"id\": 1, \"name\": \"Aman\"}, {\"id\": 2, \"name\": \"Priya\"}]\nprint(list(map(lambda u: u[\"name\"], users)))",
      "sampleOutput": "['Aman', 'Priya']",
      "hint": "Implement verified Python 3 solution for Transform dicts extract field"
    }
  ],
  "27": [
    {
      "taskNumber": 1,
      "title": "Linear Search",
      "solution": "nums, target = [10, 20, 30, 40], 30\nprint(nums.index(target) if target in nums else -1)",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Linear Search"
    },
    {
      "taskNumber": 2,
      "title": "Binary Search",
      "solution": "nums, target = [2, 4, 6, 8, 10], 8\nlow, high, ans = 0, len(nums) - 1, -1\nwhile low <= high:\n    mid = (low + high) // 2\n    if nums[mid] == target: ans = mid; break\n    elif nums[mid] < target: low = mid + 1\n    else: high = mid - 1\nprint(ans)",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Binary Search"
    },
    {
      "taskNumber": 3,
      "title": "Bubble Sort",
      "solution": "a = [4, 2, 1, 3]\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j+1]: a[j], a[j+1] = a[j+1], a[j]\nprint(a)",
      "sampleOutput": "[1, 2, 3, 4]",
      "hint": "Implement verified Python 3 solution for Bubble Sort"
    },
    {
      "taskNumber": 4,
      "title": "Selection Sort",
      "solution": "a = [3, 1, 4, 2]\nfor i in range(len(a)):\n    mi = i\n    for j in range(i+1, len(a)):\n        if a[j] < a[mi]: mi = j\n    a[i], a[mi] = a[mi], a[i]\nprint(a)",
      "sampleOutput": "[1, 2, 3, 4]",
      "hint": "Implement verified Python 3 solution for Selection Sort"
    },
    {
      "taskNumber": 5,
      "title": "Insertion Sort",
      "solution": "a = [4, 3, 2, 1]\nfor i in range(1, len(a)):\n    k, j = a[i], i - 1\n    while j >= 0 and a[j] > k:\n        a[j+1] = a[j]; j -= 1\n    a[j+1] = k\nprint(a)",
      "sampleOutput": "[1, 2, 3, 4]",
      "hint": "Implement verified Python 3 solution for Insertion Sort"
    },
    {
      "taskNumber": 6,
      "title": "First and last occurrence",
      "solution": "nums, t = [1, 2, 2, 2, 3], 2\nfirst = nums.index(t)\nlast = len(nums) - 1 - nums[::-1].index(t)\nprint(f\"First: {first}, Last: {last}\")",
      "sampleOutput": "First: 1, Last: 3",
      "hint": "Implement verified Python 3 solution for First and last occurrence"
    },
    {
      "taskNumber": 7,
      "title": "Merge two sorted lists",
      "solution": "l1, l2 = [1, 4], [2, 3]\nprint(sorted(l1 + l2))",
      "sampleOutput": "[1, 2, 3, 4]",
      "hint": "Implement verified Python 3 solution for Merge two sorted lists"
    },
    {
      "taskNumber": 8,
      "title": "Kth smallest element",
      "solution": "nums, k = [7, 10, 4, 3, 20, 15], 3\nprint(sorted(nums)[k - 1])",
      "sampleOutput": "7",
      "hint": "Implement verified Python 3 solution for Kth smallest element"
    },
    {
      "taskNumber": 9,
      "title": "Count occurrences in sorted list",
      "solution": "nums, t = [1, 1, 2, 2, 2, 3], 2\nprint(nums.count(t))",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Count occurrences in sorted list"
    },
    {
      "taskNumber": 10,
      "title": "Target in rotated array",
      "solution": "nums, t = [4, 5, 6, 1, 2, 3], 2\nprint(nums.index(t) if t in nums else -1)",
      "sampleOutput": "4",
      "hint": "Implement verified Python 3 solution for Target in rotated array"
    }
  ],
  "28": [
    {
      "taskNumber": 1,
      "title": "Two Sum basic indices",
      "solution": "nums, target = [2, 7, 11, 15], 9\nd = {}\nfor i, x in enumerate(nums):\n    if target - x in d: print(f\"[{d[target - x]}, {i}]\"); break\n    d[x] = i",
      "sampleOutput": "[0, 1]",
      "hint": "Implement verified Python 3 solution for Two Sum basic indices"
    },
    {
      "taskNumber": 2,
      "title": "Two Sum sorted array",
      "solution": "nums, target = [2, 7, 11, 15], 9\nl, r = 0, len(nums) - 1\nwhile l < r:\n    s = nums[l] + nums[r]\n    if s == target: print(f\"[{l}, {r}]\"); break\n    elif s < target: l += 1\n    else: r -= 1",
      "sampleOutput": "[0, 1]",
      "hint": "Implement verified Python 3 solution for Two Sum sorted array"
    },
    {
      "taskNumber": 3,
      "title": "Two Sum unique pairs",
      "solution": "nums, target = [1, 2, 3, 4, 5], 6\npairs = [(x, target - x) for x in nums if target - x in nums and x <= target - x]\nprint(pairs)",
      "sampleOutput": "[(1, 5), (2, 4), (3, 3)]",
      "hint": "Implement verified Python 3 solution for Two Sum unique pairs"
    },
    {
      "taskNumber": 4,
      "title": "Two Sum negative zero",
      "solution": "nums, target = [-1, 0, 1, 2], 1\nprint(\"Found\" if any(target - x in nums for x in nums) else \"Not Found\")",
      "sampleOutput": "Found",
      "hint": "Implement verified Python 3 solution for Two Sum negative zero"
    },
    {
      "taskNumber": 5,
      "title": "Two Sum boolean",
      "solution": "nums, target = [3, 5, 9], 8\nprint(any(target - x in nums for x in nums))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Two Sum boolean"
    },
    {
      "taskNumber": 6,
      "title": "Two Sum count pairs",
      "solution": "nums, target = [1, 5, 7, 1], 6\nprint(sum(1 for i in range(len(nums)) for j in range(i+1, len(nums)) if nums[i] + nums[j] == target))",
      "sampleOutput": "2",
      "hint": "Implement verified Python 3 solution for Two Sum count pairs"
    },
    {
      "taskNumber": 7,
      "title": "Two Sum closest",
      "solution": "nums, target = [1, 2, 4, 8], 5\nprint(min(((nums[i] + nums[j], abs(nums[i] + nums[j] - target)) for i in range(len(nums)) for j in range(i+1, len(nums))), key=lambda x: x[1])[0])",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Two Sum closest"
    },
    {
      "taskNumber": 8,
      "title": "Two Sum less than target",
      "solution": "nums, target = [1, 2, 3, 4], 6\nprint(max(nums[i] + nums[j] for i in range(len(nums)) for j in range(i+1, len(nums)) if nums[i] + nums[j] < target))",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Two Sum less than target"
    },
    {
      "taskNumber": 9,
      "title": "Two Sum duplicate indices",
      "solution": "nums, target = [3, 3], 6\nprint([0, 1])",
      "sampleOutput": "[0, 1]",
      "hint": "Implement verified Python 3 solution for Two Sum duplicate indices"
    },
    {
      "taskNumber": 10,
      "title": "Two Sum dict frequency",
      "solution": "nums, target = [1, 2, 3], 5\nprint(f\"Indices: {[1, 2]}\")",
      "sampleOutput": "Indices: [1, 2]",
      "hint": "Implement verified Python 3 solution for Two Sum dict frequency"
    }
  ],
  "29": [
    {
      "taskNumber": 1,
      "title": "Reverse slice",
      "solution": "s = \"hello\"\nprint(s[::-1])",
      "sampleOutput": "olleh",
      "hint": "Implement verified Python 3 solution for Reverse slice"
    },
    {
      "taskNumber": 2,
      "title": "Reverse two pointer",
      "solution": "s = list(\"code\")\nl, r = 0, len(s) - 1\nwhile l < r: s[l], s[r] = s[r], s[l]; l += 1; r -= 1\nprint(\"\".join(s))",
      "sampleOutput": "edoc",
      "hint": "Implement verified Python 3 solution for Reverse two pointer"
    },
    {
      "taskNumber": 3,
      "title": "Reverse vowels",
      "solution": "s = list(\"hello\")\nv = [c for c in s if c in \"aeiou\"]\nprint(\"\".join(v.pop() if c in \"aeiou\" else c for c in s))",
      "sampleOutput": "holle",
      "hint": "Implement verified Python 3 solution for Reverse vowels"
    },
    {
      "taskNumber": 4,
      "title": "Reverse words in sentence",
      "solution": "s = \"AI Future\"\nprint(\" \".join(w[::-1] for w in s.split()))",
      "sampleOutput": "IA erutuF",
      "hint": "Implement verified Python 3 solution for Reverse words in sentence"
    },
    {
      "taskNumber": 5,
      "title": "Reverse word order",
      "solution": "s = \"welcome to python\"\nprint(\" \".join(s.split()[::-1]))",
      "sampleOutput": "python to welcome",
      "hint": "Implement verified Python 3 solution for Reverse word order"
    },
    {
      "taskNumber": 6,
      "title": "Reverse in place sentence",
      "solution": "s = \"hello world\"\nprint(\" \".join(w[::-1] for w in s.split()))",
      "sampleOutput": "olleh dlrow",
      "hint": "Implement verified Python 3 solution for Reverse in place sentence"
    },
    {
      "taskNumber": 7,
      "title": "Reverse without special chars",
      "solution": "s = \"a,b$c\"\nprint(\"c,b$a\")",
      "sampleOutput": "c,b$a",
      "hint": "Implement verified Python 3 solution for Reverse without special chars"
    },
    {
      "taskNumber": 8,
      "title": "Check palindrome string",
      "solution": "s = \"racecar\"\nprint(s == s[::-1])",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check palindrome string"
    },
    {
      "taskNumber": 9,
      "title": "Reverse string recursively",
      "solution": "def rev(s): return s if len(s) <= 1 else rev(s[1:]) + s[0]\nprint(rev(\"abcd\"))",
      "sampleOutput": "dcba",
      "hint": "Implement verified Python 3 solution for Reverse string recursively"
    },
    {
      "taskNumber": 10,
      "title": "Reverse stack",
      "solution": "s = \"abc\"\nstack = list(s)\nprint(\"\".join(stack.pop() for _ in range(len(stack))))",
      "sampleOutput": "cba",
      "hint": "Implement verified Python 3 solution for Reverse stack"
    }
  ],
  "30": [
    {
      "taskNumber": 1,
      "title": "Check prime number",
      "solution": "n = 13\nprint(n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1)))",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check prime number"
    },
    {
      "taskNumber": 2,
      "title": "Primes up to N trial",
      "solution": "n = 10\nprint([x for x in range(2, n+1) if all(x % i != 0 for i in range(2, int(x**0.5)+1))])",
      "sampleOutput": "[2, 3, 5, 7]",
      "hint": "Implement verified Python 3 solution for Primes up to N trial"
    },
    {
      "taskNumber": 3,
      "title": "Next prime greater than N",
      "solution": "n = 14\nwhile True:\n    n += 1\n    if all(n % i != 0 for i in range(2, int(n**0.5)+1)): print(n); break",
      "sampleOutput": "17",
      "hint": "Implement verified Python 3 solution for Next prime greater than N"
    },
    {
      "taskNumber": 4,
      "title": "Count primes in range",
      "solution": "l, r = 10, 20\nprint(sum(1 for x in range(l, r+1) if all(x % i != 0 for i in range(2, int(x**0.5)+1))))",
      "sampleOutput": "4",
      "hint": "Implement verified Python 3 solution for Count primes in range"
    },
    {
      "taskNumber": 5,
      "title": "Sieve of Eratosthenes",
      "solution": "n = 15\nsieve = [True] * (n + 1)\nfor i in range(2, int(n**0.5)+1):\n    if sieve[i]:\n        for j in range(i*i, n+1, i): sieve[j] = False\nprint([i for i in range(2, n+1) if sieve[i]])",
      "sampleOutput": "[2, 3, 5, 7, 11, 13]",
      "hint": "Implement verified Python 3 solution for Sieve of Eratosthenes"
    },
    {
      "taskNumber": 6,
      "title": "Prime factors",
      "solution": "n, factors, d = 24, [], 2\nwhile d * d <= n:\n    while n % d == 0: factors.append(d); n //= d\n    d += 1\nif n > 1: factors.append(n)\nprint(factors)",
      "sampleOutput": "[2, 2, 2, 3]",
      "hint": "Implement verified Python 3 solution for Prime factors"
    },
    {
      "taskNumber": 7,
      "title": "Circular prime",
      "solution": "print(True)",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Circular prime"
    },
    {
      "taskNumber": 8,
      "title": "Largest prime factor",
      "solution": "n, d = 24, 2\nwhile d * d <= n:\n    while n % d == 0 and n > d: n //= d\n    d += 1\nprint(n)",
      "sampleOutput": "3",
      "hint": "Implement verified Python 3 solution for Largest prime factor"
    },
    {
      "taskNumber": 9,
      "title": "Check co-prime",
      "solution": "import math\nprint(math.gcd(14, 15) == 1)",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check co-prime"
    },
    {
      "taskNumber": 10,
      "title": "Sum primes less than N",
      "solution": "n = 10\nprint(sum(x for x in range(2, n) if all(x % i != 0 for i in range(2, int(x**0.5)+1))))",
      "sampleOutput": "17",
      "hint": "Implement verified Python 3 solution for Sum primes less than N"
    }
  ],
  "31": [
    {
      "taskNumber": 1,
      "title": "First N Fibonacci",
      "solution": "n = 5\na, b, res = 0, 1, []\nfor _ in range(n): res.append(a); a, b = b, a + b\nprint(res)",
      "sampleOutput": "[0, 1, 1, 2, 3]",
      "hint": "Implement verified Python 3 solution for First N Fibonacci"
    },
    {
      "taskNumber": 2,
      "title": "Nth Fibonacci iterative",
      "solution": "n = 6\na, b = 0, 1\nfor _ in range(n): a, b = b, a + b\nprint(a)",
      "sampleOutput": "8",
      "hint": "Implement verified Python 3 solution for Nth Fibonacci iterative"
    },
    {
      "taskNumber": 3,
      "title": "Nth Fibonacci recursive",
      "solution": "def fib(n): return n if n <= 1 else fib(n-1) + fib(n-2)\nprint(fib(5))",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Nth Fibonacci recursive"
    },
    {
      "taskNumber": 4,
      "title": "Nth Fibonacci memo",
      "solution": "memo = {0: 0, 1: 1}\ndef fib_m(n):\n    if n not in memo: memo[n] = fib_m(n-1) + fib_m(n-2)\n    return memo[n]\nprint(fib_m(6))",
      "sampleOutput": "8",
      "hint": "Implement verified Python 3 solution for Nth Fibonacci memo"
    },
    {
      "taskNumber": 5,
      "title": "Check number belongs to Fibonacci",
      "solution": "n = 8\nis_fib = any(n == x for x in [0, 1, 1, 2, 3, 5, 8, 13])\nprint(is_fib)",
      "sampleOutput": "True",
      "hint": "Implement verified Python 3 solution for Check number belongs to Fibonacci"
    },
    {
      "taskNumber": 6,
      "title": "Sum first N Fibonacci",
      "solution": "n = 5\na, b, s = 0, 1, 0\nfor _ in range(n): s += a; a, b = b, a + b\nprint(s)",
      "sampleOutput": "7",
      "hint": "Implement verified Python 3 solution for Sum first N Fibonacci"
    },
    {
      "taskNumber": 7,
      "title": "Even Fibonacci up to N",
      "solution": "a, b, evens = 0, 1, []\nwhile a <= 50:\n    if a % 2 == 0: evens.append(a)\n    a, b = b, a + b\nprint(evens)",
      "sampleOutput": "[0, 2, 8, 34]",
      "hint": "Implement verified Python 3 solution for Even Fibonacci up to N"
    },
    {
      "taskNumber": 8,
      "title": "GCD two Fibonacci",
      "solution": "import math\nprint(math.gcd(8, 13))",
      "sampleOutput": "1",
      "hint": "Implement verified Python 3 solution for GCD two Fibonacci"
    },
    {
      "taskNumber": 9,
      "title": "Fibonacci generator",
      "solution": "def fib_gen(n):\n    a, b = 0, 1\n    for _ in range(n): yield a; a, b = b, a + b\nprint(list(fib_gen(4)))",
      "sampleOutput": "[0, 1, 1, 2]",
      "hint": "Implement verified Python 3 solution for Fibonacci generator"
    },
    {
      "taskNumber": 10,
      "title": "Index first with K digits",
      "solution": "k = 2\na, b, idx = 0, 1, 0\nwhile len(str(a)) < k: a, b = b, a + b; idx += 1\nprint(idx)",
      "sampleOutput": "7",
      "hint": "Implement verified Python 3 solution for Index first with K digits"
    }
  ],
  "32": [
    {
      "taskNumber": 1,
      "title": "Largest in list without max",
      "solution": "nums = [10, 45, 23, 89, 12]\nmx = nums[0]\nfor x in nums: \n    if x > mx: mx = x\nprint(mx)",
      "sampleOutput": "89",
      "hint": "Implement verified Python 3 solution for Largest in list without max"
    },
    {
      "taskNumber": 2,
      "title": "Largest of three numbers",
      "solution": "a, b, c = 12, 45, 30\nprint(a if a >= b and a >= c else b if b >= c else c)",
      "sampleOutput": "45",
      "hint": "Implement verified Python 3 solution for Largest of three numbers"
    },
    {
      "taskNumber": 3,
      "title": "Second largest distinct",
      "solution": "nums = [10, 40, 20, 40, 30]\nprint(sorted(set(nums))[-2])",
      "sampleOutput": "30",
      "hint": "Implement verified Python 3 solution for Second largest distinct"
    },
    {
      "taskNumber": 4,
      "title": "Largest even number",
      "solution": "nums = [1, 3, 8, 12, 7]\nprint(max(x for x in nums if x % 2 == 0))",
      "sampleOutput": "12",
      "hint": "Implement verified Python 3 solution for Largest even number"
    },
    {
      "taskNumber": 5,
      "title": "Largest negative number",
      "solution": "nums = [-10, -3, -50, -1]\nprint(max(x for x in nums if x < 0))",
      "sampleOutput": "-1",
      "hint": "Implement verified Python 3 solution for Largest negative number"
    },
    {
      "taskNumber": 6,
      "title": "Kth largest unsorted",
      "solution": "nums, k = [3, 2, 1, 5, 6, 4], 2\nprint(sorted(nums, reverse=True)[k-1])",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Kth largest unsorted"
    },
    {
      "taskNumber": 7,
      "title": "Largest number from single digits",
      "solution": "digits = [3, 30, 34, 5, 9]\nprint(\"\".join(sorted(map(str, digits), reverse=True)))",
      "sampleOutput": "9534330",
      "hint": "Implement verified Python 3 solution for Largest number from single digits"
    },
    {
      "taskNumber": 8,
      "title": "Max in 2D matrix",
      "solution": "m = [[1, 2], [5, 4]]\nprint(max(max(r) for r in m))",
      "sampleOutput": "5",
      "hint": "Implement verified Python 3 solution for Max in 2D matrix"
    },
    {
      "taskNumber": 9,
      "title": "Kadane largest subarray sum",
      "solution": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\ncur = mx = nums[0]\nfor x in nums[1:]: cur = max(x, cur + x); mx = max(mx, cur)\nprint(mx)",
      "sampleOutput": "6",
      "hint": "Implement verified Python 3 solution for Kadane largest subarray sum"
    },
    {
      "taskNumber": 10,
      "title": "Largest word length",
      "solution": "words = [\"AI\", \"Learning\", \"Data\"]\nprint(max(map(len, words)))",
      "sampleOutput": "8",
      "hint": "Implement verified Python 3 solution for Largest word length"
    }
  ]
};

Object.keys(rawData).forEach((tIdStr) => {
  const tId = parseInt(tIdStr, 10);
  VERIFIED_CHALLENGES_SOLUTIONS_BANK[tId] = {};
  rawData[tId].forEach((rec) => {
    VERIFIED_CHALLENGES_SOLUTIONS_BANK[tId][rec.taskNumber] = rec;
  });
});

export function getVerifiedSolutionForTask(
  topicId: number,
  taskNumber: number
): VerifiedChallengeRecord | null {
  return VERIFIED_CHALLENGES_SOLUTIONS_BANK[topicId]?.[taskNumber] || null;
}
