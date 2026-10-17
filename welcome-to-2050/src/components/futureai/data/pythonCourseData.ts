export interface CourseTopic {
  id: number;
  moduleId: number;
  topicNumber: number;
  title: string;
  description: string;
  isFree: boolean;
  videoDuration: string;
  iconType: 'python' | 'code' | 'terminal' | 'data' | 'loop' | 'structure' | 'function' | 'oop' | 'file' | 'project';
}

export interface CourseModule {
  id: number;
  moduleNumber: number;
  name: string;
  topicCount: number;
  isFree: boolean;
  color: string;
  bgGradient: string;
  borderColor: string;
  iconType: 'python' | 'database' | 'tree' | 'cubes' | 'gears' | 'cube' | 'file' | 'rocket' | 'structure' | 'project' | 'data';
  description: string;
  topics: CourseTopic[];
}

export const PYTHON_MODULES: CourseModule[] = [
  {
    id: 1,
    moduleNumber: 1,
    name: "Introduction to Programming & Python Thinking",
    topicCount: 9,
    isFree: true,
    color: "#10b981",
    bgGradient: "linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)",
    borderColor: "#a7f3d0",
    iconType: "python",
    description: "Real-life programming examples, why Python leads everywhere, how computers understand instructions, VS Code setup, first Python program, step-by-step code execution, beginner mistakes, and programmer mindset.",
    topics: [
      {
        id: 1,
        moduleId: 1,
        topicNumber: 1,
        title: "1.1 What is Programming? – Real-Life Examples",
        description: "Core concepts of software programming, everyday real-life examples, and how instructions solve problems.",
        isFree: true,
        videoDuration: "07:40",
        iconType: "python"
      },
      {
        id: 2,
        moduleId: 1,
        topicNumber: 2,
        title: "1.2 Why Python is Used Everywhere",
        description: "Industry use cases: Data Analytics, AI, Web Development, Automation, Finance, and why top companies use Python.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "project"
      },
      {
        id: 3,
        moduleId: 1,
        topicNumber: 3,
        title: "1.3 Python vs Other Languages – Simple Understanding",
        description: "Comparing Python's clean, English-like syntax with C++, Java, and JavaScript in simple terms.",
        isFree: true,
        videoDuration: "05:45",
        iconType: "code"
      },
      {
        id: 4,
        moduleId: 1,
        topicNumber: 4,
        title: "1.4 How Computers Understand Instructions",
        description: "Source code, interpreters vs compilers, bytecode, and how computers translate Python into machine actions.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "terminal"
      },
      {
        id: 5,
        moduleId: 1,
        topicNumber: 5,
        title: "1.5 Installing Python and IDE – VS Code Setup",
        description: "Step-by-step setup of Python 3 and Visual Studio Code (VS Code) with essential extensions.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "terminal"
      },
      {
        id: 6,
        moduleId: 1,
        topicNumber: 6,
        title: "1.6 Writing First Python Program",
        description: "Creating your first .py script, using print(), and running your first Python program.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "code"
      },
      {
        id: 7,
        moduleId: 1,
        topicNumber: 7,
        title: "1.7 Understanding How Code Runs Step-by-Step",
        description: "Tracing top-to-bottom execution flow, statement evaluation, and how Python processes each line.",
        isFree: true,
        videoDuration: "05:15",
        iconType: "code"
      },
      {
        id: 8,
        moduleId: 1,
        topicNumber: 8,
        title: "1.8 Common Beginner Mistakes and How to Avoid Them",
        description: "SyntaxError, IndentationError, NameError, typos, and a simple checklist to debug mistakes fast.",
        isFree: true,
        videoDuration: "07:40",
        iconType: "terminal"
      },
      {
        id: 9,
        moduleId: 1,
        topicNumber: 9,
        title: "1.9 Mindset: How to Think Like a Programmer",
        description: "Breaking big problems into small steps (Input → Process → Output), logical thinking, and building confidence.",
        isFree: true,
        videoDuration: "06:45",
        iconType: "python"
      }
    ]
  },
  {
    id: 2,
    moduleNumber: 2,
    name: "Variables & Data – How Python Stores Information",
    topicCount: 11,
    isFree: true,
    color: "#2563eb",
    bgGradient: "linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)",
    borderColor: "#bfdbfe",
    iconType: "database",
    description: "Understand variables with real-life box analogies, variable naming rules, data types, type checking, type conversion, dynamic typing, memory concepts, and common quote vs number confusions.",
    topics: [
      {
        id: 201,
        moduleId: 2,
        topicNumber: 1,
        title: "2.1 What Are Variables? – Real-Life Analogy: Boxes",
        description: "How variables act like labeled storage boxes in computer memory to hold information.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "data"
      },
      {
        id: 202,
        moduleId: 2,
        topicNumber: 2,
        title: "2.2 Creating Variables",
        description: "Assigning values using the = operator and storing text, numbers, and flags.",
        isFree: true,
        videoDuration: "05:40",
        iconType: "code"
      },
      {
        id: 203,
        moduleId: 2,
        topicNumber: 3,
        title: "2.3 Rules for Naming Variables",
        description: "Valid vs invalid variable names, snake_case best practices, and reserved keywords.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "code"
      },
      {
        id: 204,
        moduleId: 2,
        topicNumber: 4,
        title: "2.4 Understanding Different Data Types",
        description: "Exploring integers (int), decimals (float), strings (str), and booleans (bool).",
        isFree: true,
        videoDuration: "08:20",
        iconType: "data"
      },
      {
        id: 205,
        moduleId: 2,
        topicNumber: 5,
        title: "2.5 Type Checking in Python",
        description: "Using type() and isinstance() to inspect what kind of data a variable holds.",
        isFree: true,
        videoDuration: "05:50",
        iconType: "terminal"
      },
      {
        id: 206,
        moduleId: 2,
        topicNumber: 6,
        title: "2.6 Type Conversion – Int to String",
        description: "Converting integers to strings with str() so numbers can be combined with text.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "code"
      },
      {
        id: 207,
        moduleId: 2,
        topicNumber: 7,
        title: "2.7 etc...",
        description: "Additional type conversions: String to Int (int()), Float conversions (float()), and bool().",
        isFree: true,
        videoDuration: "05:15",
        iconType: "terminal"
      },
      {
        id: 208,
        moduleId: 2,
        topicNumber: 8,
        title: "2.8 Dynamic Typing in Python",
        description: "How Python automatically determines and updates variable types at runtime.",
        isFree: true,
        videoDuration: "06:45",
        iconType: "python"
      },
      {
        id: 209,
        moduleId: 2,
        topicNumber: 9,
        title: "2.9 Memory Concept Simplified",
        description: "Object references, id(), and how Python points variable names to values in memory.",
        isFree: true,
        videoDuration: "07:30",
        iconType: "data"
      },
      {
        id: 210,
        moduleId: 2,
        topicNumber: 10,
        title: "2.10 Common Beginner Confusion – Quotes",
        description: "Why '25' in quotes is text (str) and not a number, plus single vs double quotes.",
        isFree: true,
        videoDuration: "05:25",
        iconType: "code"
      },
      {
        id: 211,
        moduleId: 2,
        topicNumber: 11,
        title: "2.11 Numbers",
        description: "Working with unquoted numeric values (int and float) for math and calculations.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "data"
      }
    ]
  },
  {
    id: 3,
    moduleNumber: 3,
    name: "Input, Output & User Interaction",
    topicCount: 8,
    isFree: true,
    color: "#f97316",
    bgGradient: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
    borderColor: "#fed7aa",
    iconType: "tree",
    description: "Learn how to take user input, display clean output, format strings with f-strings, handle input data types, and build interactive Python programs.",
    topics: [
      {
        id: 301,
        moduleId: 3,
        topicNumber: 1,
        title: "3.1 Taking Input from User",
        description: "Using the input() function to capture interactive user responses from the keyboard.",
        isFree: true,
        videoDuration: "06:20",
        iconType: "terminal"
      },
      {
        id: 302,
        moduleId: 3,
        topicNumber: 2,
        title: "3.2 Displaying Output Properly",
        description: "Mastering print() with multiple arguments, sep, end, and readable console output.",
        isFree: true,
        videoDuration: "05:45",
        iconType: "terminal"
      },
      {
        id: 303,
        moduleId: 3,
        topicNumber: 3,
        title: "3.3 Formatting Output – F-Strings",
        description: "Embedding variables and expressions cleanly inside strings using Python f-strings.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "code"
      },
      {
        id: 304,
        moduleId: 3,
        topicNumber: 4,
        title: "3.4 Handling Input Data Types",
        description: "Converting string inputs into int and float values safely for calculations.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "data"
      },
      {
        id: 305,
        moduleId: 3,
        topicNumber: 5,
        title: "3.5 Real-World Example: Calculator Input",
        description: "Building a practical interactive calculator that takes two numbers and prints results.",
        isFree: true,
        videoDuration: "08:15",
        iconType: "project"
      },
      {
        id: 306,
        moduleId: 3,
        topicNumber: 6,
        title: "3.6 Common Mistakes – String vs Number Input",
        description: "Why '10' + '20' gives '1020' instead of 30, and how to avoid input type bugs.",
        isFree: true,
        videoDuration: "06:00",
        iconType: "code"
      },
      {
        id: 307,
        moduleId: 3,
        topicNumber: 7,
        title: "3.7 Making Interactive Programs",
        description: "Combining prompts, user inputs, and dynamic responses into engaging CLI apps.",
        isFree: true,
        videoDuration: "07:30",
        iconType: "python"
      },
      {
        id: 308,
        moduleId: 3,
        topicNumber: 8,
        title: "3.8 Clean Output Practices",
        description: "Formatting numbers, aligning labels, and presenting clear, professional program output.",
        isFree: true,
        videoDuration: "05:50",
        iconType: "terminal"
      }
    ]
  },
  {
    id: 4,
    moduleNumber: 4,
    name: "Operators & Logic",
    topicCount: 10,
    isFree: true,
    color: "#8b5cf6",
    bgGradient: "linear-gradient(180deg, #faf5ff 0%, #ffffff 100%)",
    borderColor: "#e9d5ff",
    iconType: "cubes",
    description: "Master arithmetic, comparison, and logical operators, operator precedence, and real-life logic expressions.",
    topics: [
      {
        id: 401,
        moduleId: 4,
        topicNumber: 1,
        title: "4.1 Arithmetic Operators",
        description: "Addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulus (%), and exponentiation (**).",
        isFree: true,
        videoDuration: "06:30",
        iconType: "structure"
      },
      {
        id: 402,
        moduleId: 4,
        topicNumber: 2,
        title: "4.2 Comparison Operators",
        description: "Comparing values using ==, !=, >, <, >=, and <= to produce True or False results.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "structure"
      },
      {
        id: 403,
        moduleId: 4,
        topicNumber: 3,
        title: "4.3 Logical Operators – AND",
        description: "Combining multiple conditions where all expressions must be True using the 'and' operator.",
        isFree: true,
        videoDuration: "05:45",
        iconType: "structure"
      },
      {
        id: 404,
        moduleId: 4,
        topicNumber: 4,
        title: "4.4 OR",
        description: "Checking if at least one condition is True using Python's 'or' logical operator.",
        isFree: true,
        videoDuration: "05:30",
        iconType: "structure"
      },
      {
        id: 405,
        moduleId: 4,
        topicNumber: 5,
        title: "4.5 NOT",
        description: "Reversing boolean truth values with the 'not' operator in logical conditions.",
        isFree: true,
        videoDuration: "05:15",
        iconType: "structure"
      },
      {
        id: 406,
        moduleId: 4,
        topicNumber: 6,
        title: "4.6 Operator Precedence",
        description: "Understanding the order in which Python evaluates operators (PEMDAS/BODMAS and logical precedence).",
        isFree: true,
        videoDuration: "07:00",
        iconType: "structure"
      },
      {
        id: 407,
        moduleId: 4,
        topicNumber: 7,
        title: "4.7 Real-Life Examples – Shopping Calculations",
        description: "Applying arithmetic and comparison operators to discounts, tax, cart totals, and coupon eligibility.",
        isFree: true,
        videoDuration: "08:10",
        iconType: "structure"
      },
      {
        id: 408,
        moduleId: 4,
        topicNumber: 8,
        title: "4.8 Combining Expressions",
        description: "Writing clean compound expressions using parentheses, arithmetic, comparisons, and boolean logic.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "structure"
      },
      {
        id: 409,
        moduleId: 4,
        topicNumber: 9,
        title: "4.9 Common Logic Mistakes",
        description: "Avoiding = vs == errors, truthy/falsy traps, and incorrect operator grouping.",
        isFree: true,
        videoDuration: "06:00",
        iconType: "structure"
      },
      {
        id: 410,
        moduleId: 4,
        topicNumber: 10,
        title: "4.10 Practice Mini Problems",
        description: "Hands-on mini coding problems to test arithmetic, comparison, and logical operators.",
        isFree: true,
        videoDuration: "08:30",
        iconType: "structure"
      }
    ]
  },
  {
    id: 5,
    moduleNumber: 5,
    name: "Conditional Statements – Decision Making",
    topicCount: 8,
    isFree: true,
    color: "#ec4899",
    bgGradient: "linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%)",
    borderColor: "#fbcfe8",
    iconType: "gears",
    description: "Learn how programs make decisions using if, if-else, elif, nested conditions, and real-world login logic.",
    topics: [
      {
        id: 501,
        moduleId: 5,
        topicNumber: 1,
        title: "5.1 Why Decisions Are Important",
        description: "Understanding how conditional branching lets programs react dynamically to different situations.",
        isFree: true,
        videoDuration: "05:40",
        iconType: "function"
      },
      {
        id: 502,
        moduleId: 5,
        topicNumber: 2,
        title: "5.2 if Statement Basics",
        description: "Syntax, indentation rules, and executing code blocks only when a condition is True.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "function"
      },
      {
        id: 503,
        moduleId: 5,
        topicNumber: 3,
        title: "5.3 if-else Structure",
        description: "Handling two-way decisions with if and else blocks.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "function"
      },
      {
        id: 504,
        moduleId: 5,
        topicNumber: 4,
        title: "5.4 elif Usage",
        description: "Checking multiple mutually exclusive conditions cleanly using elif chains.",
        isFree: true,
        videoDuration: "07:25",
        iconType: "function"
      },
      {
        id: 505,
        moduleId: 5,
        topicNumber: 5,
        title: "5.5 Nested Conditions",
        description: "Placing if-else statements inside other conditions for multi-step decision trees.",
        isFree: true,
        videoDuration: "07:50",
        iconType: "function"
      },
      {
        id: 506,
        moduleId: 5,
        topicNumber: 6,
        title: "5.6 Real-World Examples – Login System",
        description: "Building a practical username, password, and role verification flow using conditionals.",
        isFree: true,
        videoDuration: "08:40",
        iconType: "function"
      },
      {
        id: 507,
        moduleId: 5,
        topicNumber: 7,
        title: "5.7 Avoiding Logical Mistakes",
        description: "Fixing unreachable elif branches, wrong condition order, and indentation pitfalls.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "function"
      },
      {
        id: 508,
        moduleId: 5,
        topicNumber: 8,
        title: "5.8 Writing Clean Conditions",
        description: "Simplifying boolean checks, guard clauses, and readable conditional expressions.",
        isFree: true,
        videoDuration: "06:35",
        iconType: "function"
      }
    ]
  },
  {
    id: 6,
    moduleNumber: 6,
    name: "Loops – Repeating Tasks Automatically",
    topicCount: 8,
    isFree: true,
    color: "#6366f1",
    bgGradient: "linear-gradient(180deg, #eef2ff 0%, #ffffff 100%)",
    borderColor: "#c7d2fe",
    iconType: "cube",
    description: "Automate repetitive tasks using for and while loops, break and continue, nested loops, and safe loop control.",
    topics: [
      {
        id: 601,
        moduleId: 6,
        topicNumber: 1,
        title: "6.1 Why Loops Are Needed",
        description: "Understanding why loops eliminate repetitive code and automate large tasks effortlessly.",
        isFree: true,
        videoDuration: "05:30",
        iconType: "oop"
      },
      {
        id: 602,
        moduleId: 6,
        topicNumber: 2,
        title: "6.2 for Loop Basics",
        description: "Iterating over sequences and number ranges using Python's for loop and range().",
        isFree: true,
        videoDuration: "07:15",
        iconType: "oop"
      },
      {
        id: 603,
        moduleId: 6,
        topicNumber: 3,
        title: "6.3 while Loop Basics",
        description: "Running condition-based loops that repeat as long as a condition remains True.",
        isFree: true,
        videoDuration: "07:00",
        iconType: "oop"
      },
      {
        id: 604,
        moduleId: 6,
        topicNumber: 4,
        title: "6.4 break and continue",
        description: "Controlling loop execution by exiting early with break or skipping iterations with continue.",
        isFree: true,
        videoDuration: "06:20",
        iconType: "oop"
      },
      {
        id: 605,
        moduleId: 6,
        topicNumber: 5,
        title: "6.5 Loop with Conditions",
        description: "Combining if-else logic inside loops to filter, count, and process specific items.",
        isFree: true,
        videoDuration: "07:35",
        iconType: "oop"
      },
      {
        id: 606,
        moduleId: 6,
        topicNumber: 6,
        title: "6.6 Nested Loops",
        description: "Using a loop inside another loop to work with grids, tables, and patterns.",
        isFree: true,
        videoDuration: "08:00",
        iconType: "oop"
      },
      {
        id: 607,
        moduleId: 6,
        topicNumber: 7,
        title: "6.7 Real-World Examples",
        description: "Applying loops to real scenarios like shopping carts, retry prompts, and batch reports.",
        isFree: true,
        videoDuration: "08:25",
        iconType: "oop"
      },
      {
        id: 608,
        moduleId: 6,
        topicNumber: 8,
        title: "6.8 Avoiding Infinite Loops",
        description: "Recognizing why infinite loops happen in while loops and how to update counters safely.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "oop"
      }
    ]
  },
  {
    id: 7,
    moduleNumber: 7,
    name: "Strings – Working with Text Data",
    topicCount: 10,
    isFree: true,
    color: "#06b6d4",
    bgGradient: "linear-gradient(180deg, #ecfeff 0%, #ffffff 100%)",
    borderColor: "#a5f3fc",
    iconType: "file",
    description: "Master string manipulation, indexing, slicing, built-in string methods, formatting, and real-world text processing.",
    topics: [
      {
        id: 701,
        moduleId: 7,
        topicNumber: 1,
        title: "7.1 String Basics",
        description: "Creating strings with quotes, multi-line strings, string length, and immutability.",
        isFree: true,
        videoDuration: "05:45",
        iconType: "file"
      },
      {
        id: 702,
        moduleId: 7,
        topicNumber: 2,
        title: "7.2 Indexing and Slicing",
        description: "Accessing individual characters using positive/negative indices and extracting substrings with slicing.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "file"
      },
      {
        id: 703,
        moduleId: 7,
        topicNumber: 3,
        title: "7.3 String Methods – Upper",
        description: "Converting text to uppercase using .upper() and capitalizing headings cleanly.",
        isFree: true,
        videoDuration: "05:30",
        iconType: "file"
      },
      {
        id: 704,
        moduleId: 7,
        topicNumber: 4,
        title: "7.4 Lower",
        description: "Normalizing text with .lower() for case-insensitive comparisons and search.",
        isFree: true,
        videoDuration: "05:15",
        iconType: "file"
      },
      {
        id: 705,
        moduleId: 7,
        topicNumber: 5,
        title: "7.5 Replace",
        description: "Replacing characters, words, or unwanted symbols in strings using .replace().",
        isFree: true,
        videoDuration: "06:00",
        iconType: "file"
      },
      {
        id: 706,
        moduleId: 7,
        topicNumber: 6,
        title: "7.6 String Formatting",
        description: "Building dynamic text templates with f-strings, .format(), and alignment specifiers.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "file"
      },
      {
        id: 707,
        moduleId: 7,
        topicNumber: 7,
        title: "7.7 Checking Substrings",
        description: "Searching inside strings using the 'in' keyword, .find(), .startswith(), and .endswith().",
        isFree: true,
        videoDuration: "06:15",
        iconType: "file"
      },
      {
        id: 708,
        moduleId: 7,
        topicNumber: 8,
        title: "7.8 Real-World Use Cases",
        description: "Cleaning emails, phone numbers, CSV text fields, and generating user-friendly messages.",
        isFree: true,
        videoDuration: "07:45",
        iconType: "file"
      },
      {
        id: 709,
        moduleId: 7,
        topicNumber: 9,
        title: "7.9 Handling User Input Text",
        description: "Stripping extra whitespace with .strip() and validating user-typed text input.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "file"
      },
      {
        id: 710,
        moduleId: 7,
        topicNumber: 10,
        title: "7.10 Common Mistakes",
        description: "Avoiding string immutability errors, off-by-one slice bounds, and unescaped quote issues.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "terminal"
      }
    ]
  },
  {
    id: 8,
    moduleNumber: 8,
    name: "Lists – Storing Multiple Values",
    topicCount: 7,
    isFree: true,
    color: "#f59e0b",
    bgGradient: "linear-gradient(180deg, #fefce8 0%, #ffffff 100%)",
    borderColor: "#fde047",
    iconType: "rocket",
    description: "Learn how to create lists, access and modify items, iterate over collections, use list methods, and avoid common pitfalls.",
    topics: [
      {
        id: 801,
        moduleId: 8,
        topicNumber: 1,
        title: "8.1 Creating Lists",
        description: "Defining ordered collections of items with square brackets, mixed data types, and list().",
        isFree: true,
        videoDuration: "05:50",
        iconType: "structure"
      },
      {
        id: 802,
        moduleId: 8,
        topicNumber: 2,
        title: "8.2 Accessing Elements",
        description: "Reading and updating list elements using positive indices, negative indices, and slicing.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "structure"
      },
      {
        id: 803,
        moduleId: 8,
        topicNumber: 3,
        title: "8.3 Adding/Removing Items",
        description: "Modifying lists dynamically using .append(), .insert(), .remove(), .pop(), and del.",
        isFree: true,
        videoDuration: "07:15",
        iconType: "structure"
      },
      {
        id: 804,
        moduleId: 8,
        topicNumber: 4,
        title: "8.4 Looping Through Lists",
        description: "Iterating over list items with for loops, enumerate(), and filtering values.",
        isFree: true,
        videoDuration: "07:00",
        iconType: "structure"
      },
      {
        id: 805,
        moduleId: 8,
        topicNumber: 5,
        title: "8.5 List Methods",
        description: "Sorting, reversing, counting, and finding items with .sort(), .reverse(), .count(), and .index().",
        isFree: true,
        videoDuration: "07:45",
        iconType: "structure"
      },
      {
        id: 806,
        moduleId: 8,
        topicNumber: 6,
        title: "8.6 Real-World Examples",
        description: "Managing shopping carts, student marks, task queues, and dataset rows using Python lists.",
        isFree: true,
        videoDuration: "08:20",
        iconType: "structure"
      },
      {
        id: 807,
        moduleId: 8,
        topicNumber: 7,
        title: "8.7 Common Mistakes",
        description: "Avoiding IndexError out-of-range bugs, shallow copy surprises, and modifying lists while iterating.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "structure"
      }
    ]
  },
  {
    id: 9,
    moduleNumber: 9,
    name: "Tuples, Sets & Dictionaries",
    topicCount: 7,
    isFree: true,
    color: "#8b5cf6",
    bgGradient: "linear-gradient(180deg, #faf5ff 0%, #ffffff 100%)",
    borderColor: "#e9d5ff",
    iconType: "cubes",
    description: "Understand immutable tuples, unique sets, key-value dictionaries, and when to choose each data structure.",
    topics: [
      {
        id: 901,
        moduleId: 9,
        topicNumber: 1,
        title: "9.1 Tuple Basics",
        description: "Creating immutable ordered collections with parentheses, tuple packing, and unpacking.",
        isFree: true,
        videoDuration: "06:00",
        iconType: "structure"
      },
      {
        id: 902,
        moduleId: 9,
        topicNumber: 2,
        title: "9.2 Set Basics",
        description: "Storing unique unordered items, removing duplicates automatically, and basic set operations.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "structure"
      },
      {
        id: 903,
        moduleId: 9,
        topicNumber: 3,
        title: "9.3 Dictionary Basics",
        description: "Storing structured information as key-value pairs using curly braces.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "structure"
      },
      {
        id: 904,
        moduleId: 9,
        topicNumber: 4,
        title: "9.4 Accessing Dictionary Data",
        description: "Retrieving, adding, updating, and safely reading keys with .get(), .keys(), .values(), and .items().",
        isFree: true,
        videoDuration: "07:25",
        iconType: "structure"
      },
      {
        id: 905,
        moduleId: 9,
        topicNumber: 5,
        title: "9.5 When to Use What",
        description: "Choosing between List, Tuple, Set, and Dictionary based on mutability, order, and lookup speed.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "structure"
      },
      {
        id: 906,
        moduleId: 9,
        topicNumber: 6,
        title: "9.6 Real-World Comparisons",
        description: "Comparing real-world use cases like product catalogs, GPS coordinates, and unique user IDs.",
        isFree: true,
        videoDuration: "08:00",
        iconType: "structure"
      },
      {
        id: 907,
        moduleId: 9,
        topicNumber: 7,
        title: "9.7 Common Beginner Confusion",
        description: "Avoiding single-item tuple comma mistakes, KeyError crashes, and empty set {} vs dict {} confusion.",
        isFree: true,
        videoDuration: "06:20",
        iconType: "structure"
      }
    ]
  },
  {
    id: 10,
    moduleNumber: 10,
    name: "Functions – Reusable Code Blocks",
    topicCount: 7,
    isFree: true,
    color: "#ec4899",
    bgGradient: "linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%)",
    borderColor: "#fbcfe8",
    iconType: "gears",
    description: "Write clean, modular code using Python functions, parameters, return values, default arguments, and variable scope.",
    topics: [
      {
        id: 1001,
        moduleId: 10,
        topicNumber: 1,
        title: "10.1 Why Functions Matter",
        description: "Understanding the DRY (Don't Repeat Yourself) principle and how functions organize complex programs.",
        isFree: true,
        videoDuration: "05:40",
        iconType: "function"
      },
      {
        id: 1002,
        moduleId: 10,
        topicNumber: 2,
        title: "10.2 Creating Functions",
        description: "Defining and calling custom functions in Python using the def keyword.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "function"
      },
      {
        id: 1003,
        moduleId: 10,
        topicNumber: 3,
        title: "10.3 Parameters and Return Values",
        description: "Passing inputs into functions via parameters and sending results back with return.",
        isFree: true,
        videoDuration: "07:45",
        iconType: "function"
      },
      {
        id: 1004,
        moduleId: 10,
        topicNumber: 4,
        title: "10.4 Default Parameters",
        description: "Setting fallback argument values and calling functions with flexible keyword arguments.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "function"
      },
      {
        id: 1005,
        moduleId: 10,
        topicNumber: 5,
        title: "10.5 Scope – Local vs Global",
        description: "Understanding variable visibility inside vs outside functions and avoiding global state bugs.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "function"
      },
      {
        id: 1006,
        moduleId: 10,
        topicNumber: 6,
        title: "10.6 Code Reusability",
        description: "Breaking large scripts into small, testable, and reusable helper functions.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "function"
      },
      {
        id: 1007,
        moduleId: 10,
        topicNumber: 7,
        title: "10.7 Real-World Examples",
        description: "Building practical functions for invoice billing, tax calculation, and data validation.",
        isFree: true,
        videoDuration: "08:15",
        iconType: "function"
      }
    ]
  },
  {
    id: 11,
    moduleNumber: 11,
    name: "Problem Solving & Logic Building",
    topicCount: 6,
    isFree: true,
    color: "#06b6d4",
    bgGradient: "linear-gradient(180deg, #ecfeff 0%, #ffffff 100%)",
    borderColor: "#a5f3fc",
    iconType: "rocket",
    description: "Learn how to think before coding, break problems into steps, write pseudocode, solve patterns, and debug logic errors.",
    topics: [
      {
        id: 1101,
        moduleId: 11,
        topicNumber: 1,
        title: "11.1 How to Think Before Coding",
        description: "Understanding problem inputs, expected outputs, and edge cases before writing a single line of code.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "project"
      },
      {
        id: 1102,
        moduleId: 11,
        topicNumber: 2,
        title: "11.2 Breaking Problems into Steps",
        description: "Decomposing complex challenges into small, manageable logical steps.",
        isFree: true,
        videoDuration: "06:45",
        iconType: "project"
      },
      {
        id: 1103,
        moduleId: 11,
        topicNumber: 3,
        title: "11.3 Writing Pseudocode",
        description: "Drafting plain-English algorithms and flowcharts to validate your logic before coding.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "project"
      },
      {
        id: 1104,
        moduleId: 11,
        topicNumber: 4,
        title: "11.4 Pattern Problems",
        description: "Mastering nested loops and dry-run tables using number, pyramid, and star pattern problems.",
        isFree: true,
        videoDuration: "08:15",
        iconType: "project"
      },
      {
        id: 1105,
        moduleId: 11,
        topicNumber: 5,
        title: "11.5 Debugging Logic Errors",
        description: "Tracing variables step-by-step with print statements and IDE debuggers to fix wrong outputs.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "project"
      },
      {
        id: 1106,
        moduleId: 11,
        topicNumber: 6,
        title: "11.6 Practice Problems",
        description: "Solving end-to-end logic building problems to strengthen your coding confidence.",
        isFree: true,
        videoDuration: "09:00",
        iconType: "project"
      }
    ]
  },
  {
    id: 12,
    moduleNumber: 12,
    name: "File Handling – Working with Files",
    topicCount: 6,
    isFree: true,
    color: "#14b8a6",
    bgGradient: "linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%)",
    borderColor: "#99f6e4",
    iconType: "file",
    description: "Learn how to open, read, and write files safely in Python using file modes, real-world workflows, and error handling.",
    topics: [
      {
        id: 1201,
        moduleId: 12,
        topicNumber: 1,
        title: "12.1 Opening Files",
        description: "Using open() and the 'with' context manager to open and automatically close files safely.",
        isFree: true,
        videoDuration: "05:50",
        iconType: "file"
      },
      {
        id: 1202,
        moduleId: 12,
        topicNumber: 2,
        title: "12.2 Reading Files",
        description: "Reading text content using .read(), .readline(), .readlines(), and line-by-line iteration.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "file"
      },
      {
        id: 1203,
        moduleId: 12,
        topicNumber: 3,
        title: "12.3 Writing Files",
        description: "Creating new files, writing strings with .write(), and appending new lines without overwriting.",
        isFree: true,
        videoDuration: "06:55",
        iconType: "file"
      },
      {
        id: 1204,
        moduleId: 12,
        topicNumber: 4,
        title: "12.4 File Modes",
        description: "Understanding read ('r'), write ('w'), append ('a'), create ('x'), and binary ('rb'/'wb') file modes.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "file"
      },
      {
        id: 1205,
        moduleId: 12,
        topicNumber: 5,
        title: "12.5 Real-World Use Cases",
        description: "Saving application logs, reading CSV reports, and exporting structured data summaries.",
        isFree: true,
        videoDuration: "08:10",
        iconType: "file"
      },
      {
        id: 1206,
        moduleId: 12,
        topicNumber: 6,
        title: "12.6 Error Handling",
        description: "Handling FileNotFoundError and PermissionError gracefully using try-except-finally blocks.",
        isFree: true,
        videoDuration: "07:30",
        iconType: "terminal"
      }
    ]
  },
  {
    id: 13,
    moduleNumber: 13,
    name: "Exception Handling – Handling Errors",
    topicCount: 5,
    isFree: true,
    color: "#ef4444",
    bgGradient: "linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)",
    borderColor: "#fecaca",
    iconType: "gears",
    description: "Handle runtime crashes gracefully with try-except, finally blocks, custom exceptions, and a strong debugging mindset.",
    topics: [
      {
        id: 1301,
        moduleId: 13,
        topicNumber: 1,
        title: "13.1 Types of Errors",
        description: "Distinguishing between syntax errors, runtime exceptions (ValueError, TypeError, ZeroDivisionError), and logical bugs.",
        isFree: true,
        videoDuration: "06:00",
        iconType: "terminal"
      },
      {
        id: 1302,
        moduleId: 13,
        topicNumber: 2,
        title: "13.2 try-except Usage",
        description: "Catching specific exceptions safely so your Python program never crashes unexpectedly.",
        isFree: true,
        videoDuration: "07:15",
        iconType: "terminal"
      },
      {
        id: 1303,
        moduleId: 13,
        topicNumber: 3,
        title: "13.3 finally Block",
        description: "Running guaranteed cleanup code (closing files, releasing connections) with else and finally blocks.",
        isFree: true,
        videoDuration: "05:50",
        iconType: "terminal"
      },
      {
        id: 1304,
        moduleId: 13,
        topicNumber: 4,
        title: "13.4 Custom Errors",
        description: "Raising meaningful validation errors with the raise keyword and custom exception classes.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "terminal"
      },
      {
        id: 1305,
        moduleId: 13,
        topicNumber: 5,
        title: "13.5 Debugging Mindset",
        description: "Reading Python tracebacks calmly, isolating root causes, and writing defensive code.",
        isFree: true,
        videoDuration: "06:25",
        iconType: "terminal"
      }
    ]
  },
  {
    id: 14,
    moduleNumber: 14,
    name: "Modules & Libraries",
    topicCount: 5,
    isFree: true,
    color: "#3b82f6",
    bgGradient: "linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)",
    borderColor: "#bfdbfe",
    iconType: "cube",
    description: "Organize code into reusable Python modules, import standard libraries, install packages with pip, and manage virtual environments.",
    topics: [
      {
        id: 1401,
        moduleId: 14,
        topicNumber: 1,
        title: "14.1 Creating Modules",
        description: "Splitting Python code across multiple .py files to create clean, reusable custom modules.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "oop"
      },
      {
        id: 1402,
        moduleId: 14,
        topicNumber: 2,
        title: "14.2 Importing Modules",
        description: "Using import, from ... import ..., and as aliases to bring functions and variables into your script.",
        isFree: true,
        videoDuration: "06:35",
        iconType: "oop"
      },
      {
        id: 1403,
        moduleId: 14,
        topicNumber: 3,
        title: "14.3 Built-In Libraries",
        description: "Exploring Python's powerful standard library including math, random, datetime, and os.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "oop"
      },
      {
        id: 1404,
        moduleId: 14,
        topicNumber: 4,
        title: "14.4 Installing Packages – pip",
        description: "Installing third-party packages from PyPI using pip install and tracking dependencies with requirements.txt.",
        isFree: true,
        videoDuration: "06:45",
        iconType: "oop"
      },
      {
        id: 1405,
        moduleId: 14,
        topicNumber: 5,
        title: "14.5 Virtual Environment",
        description: "Creating and activating isolated Python environments with venv so project packages never conflict.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "oop"
      }
    ]
  },
  {
    id: 15,
    moduleNumber: 15,
    name: "Object-Oriented Programming (OOP)",
    topicCount: 5,
    isFree: true,
    color: "#9333ea",
    bgGradient: "linear-gradient(180deg, #faf5ff 0%, #ffffff 100%)",
    borderColor: "#e9d5ff",
    iconType: "cube",
    description: "Model real-world entities in Python using classes, objects, __init__ constructors, attributes, and methods.",
    topics: [
      {
        id: 1501,
        moduleId: 15,
        topicNumber: 1,
        title: "15.1 Classes and Objects",
        description: "Understanding blueprints (classes) vs real instances (objects) and creating your first Python class.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "oop"
      },
      {
        id: 1502,
        moduleId: 15,
        topicNumber: 2,
        title: "15.2 Constructor",
        description: "Initializing object state automatically when an object is created using the __init__() method and self.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "oop"
      },
      {
        id: 1503,
        moduleId: 15,
        topicNumber: 3,
        title: "15.3 Attributes",
        description: "Storing data inside objects using instance attributes vs shared class attributes.",
        isFree: true,
        videoDuration: "06:15",
        iconType: "oop"
      },
      {
        id: 1504,
        moduleId: 15,
        topicNumber: 4,
        title: "15.4 Methods",
        description: "Defining behaviors and actions inside classes that read and update object attributes.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "oop"
      },
      {
        id: 1505,
        moduleId: 15,
        topicNumber: 5,
        title: "15.5 Real-World Analogy",
        description: "Connecting OOP concepts to everyday examples like bank accounts, e-commerce products, and user profiles.",
        isFree: true,
        videoDuration: "07:35",
        iconType: "oop"
      }
    ]
  },
  {
    id: 16,
    moduleNumber: 16,
    name: "OOP Advanced Concepts",
    topicCount: 5,
    isFree: true,
    color: "#7c3aed",
    bgGradient: "linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%)",
    borderColor: "#ddd6fe",
    iconType: "cube",
    description: "Master the four pillars of Object-Oriented Programming: Inheritance, Encapsulation, Polymorphism, and Abstraction.",
    topics: [
      {
        id: 1601,
        moduleId: 16,
        topicNumber: 1,
        title: "16.1 Inheritance",
        description: "Creating child classes that inherit attributes and methods from parent classes using super().",
        isFree: true,
        videoDuration: "07:15",
        iconType: "oop"
      },
      {
        id: 1602,
        moduleId: 16,
        topicNumber: 2,
        title: "16.2 Encapsulation",
        description: "Protecting internal object state with private/protected attributes and getter/setter methods.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "oop"
      },
      {
        id: 1603,
        moduleId: 16,
        topicNumber: 3,
        title: "16.3 Polymorphism",
        description: "Using a single method interface across different classes via method overriding and duck typing.",
        isFree: true,
        videoDuration: "06:55",
        iconType: "oop"
      },
      {
        id: 1604,
        moduleId: 16,
        topicNumber: 4,
        title: "16.4 Abstraction",
        description: "Hiding complex implementation details behind clean interfaces and abstract base classes (ABC).",
        isFree: true,
        videoDuration: "06:30",
        iconType: "oop"
      },
      {
        id: 1605,
        moduleId: 16,
        topicNumber: 5,
        title: "16.5 Real-World Examples",
        description: "Designing payment gateways, employee hierarchies, and notification systems using OOP pillars.",
        isFree: true,
        videoDuration: "08:20",
        iconType: "oop"
      }
    ]
  },
  {
    id: 17,
    moduleNumber: 17,
    name: "Working with APIs",
    topicCount: 5,
    isFree: true,
    color: "#0284c7",
    bgGradient: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
    borderColor: "#bae6fd",
    iconType: "rocket",
    description: "Connect Python applications to live web services using REST APIs, the requests library, JSON parsing, and API error handling.",
    topics: [
      {
        id: 1701,
        moduleId: 17,
        topicNumber: 1,
        title: "17.1 API Basics",
        description: "Understanding REST APIs, HTTP methods (GET, POST), endpoints, headers, and status codes.",
        isFree: true,
        videoDuration: "06:10",
        iconType: "project"
      },
      {
        id: 1702,
        moduleId: 17,
        topicNumber: 2,
        title: "17.2 Using requests Library",
        description: "Sending HTTP requests in Python with requests.get(), query parameters, and inspecting response objects.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "project"
      },
      {
        id: 1703,
        moduleId: 17,
        topicNumber: 3,
        title: "17.3 JSON Handling",
        description: "Parsing JSON API responses into Python dictionaries and lists using .json() and the json module.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "project"
      },
      {
        id: 1704,
        moduleId: 17,
        topicNumber: 4,
        title: "17.4 Real-World APIs",
        description: "Fetching live weather, currency exchange rates, and public datasets from real-world APIs.",
        isFree: true,
        videoDuration: "08:15",
        iconType: "project"
      },
      {
        id: 1705,
        moduleId: 17,
        topicNumber: 5,
        title: "17.5 Error Handling",
        description: "Handling network timeouts, 404/500 HTTP status errors, and invalid JSON responses safely.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "terminal"
      }
    ]
  },
  {
    id: 18,
    moduleNumber: 18,
    name: "Automation with Python",
    topicCount: 5,
    isFree: true,
    color: "#f97316",
    bgGradient: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
    borderColor: "#fed7aa",
    iconType: "gears",
    description: "Save hours of manual effort by automating files, emails, browser tasks, and recurring schedules with Python.",
    topics: [
      {
        id: 1801,
        moduleId: 18,
        topicNumber: 1,
        title: "18.1 Automating Files",
        description: "Organizing folders, batch renaming files, and moving downloads automatically using os and shutil.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "project"
      },
      {
        id: 1802,
        moduleId: 18,
        topicNumber: 2,
        title: "18.2 Email Automation",
        description: "Sending automated reports, notifications, and attachments using Python's smtplib and email modules.",
        isFree: true,
        videoDuration: "07:30",
        iconType: "project"
      },
      {
        id: 1803,
        moduleId: 18,
        topicNumber: 3,
        title: "18.3 Web Automation Basics",
        description: "Extracting web data and automating repetitive browser workflows with BeautifulSoup and Selenium/Playwright basics.",
        isFree: true,
        videoDuration: "08:00",
        iconType: "project"
      },
      {
        id: 1804,
        moduleId: 18,
        topicNumber: 4,
        title: "18.4 Scheduling Tasks",
        description: "Running Python scripts automatically at fixed intervals or daily times using the schedule library and OS schedulers.",
        isFree: true,
        videoDuration: "06:35",
        iconType: "project"
      },
      {
        id: 1805,
        moduleId: 18,
        topicNumber: 5,
        title: "18.5 Real-World Automation",
        description: "Building an end-to-end daily workflow that processes CSV data and sends an automated summary report.",
        isFree: true,
        videoDuration: "08:45",
        iconType: "project"
      }
    ]
  },
  {
    id: 19,
    moduleNumber: 19,
    name: "Data Handling & Processing",
    topicCount: 4,
    isFree: true,
    color: "#10b981",
    bgGradient: "linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)",
    borderColor: "#a7f3d0",
    iconType: "file",
    description: "Read and process tabular datasets with CSV files, clean messy records, and get started with Pandas DataFrames.",
    topics: [
      {
        id: 1901,
        moduleId: 19,
        topicNumber: 1,
        title: "19.1 Working with CSV",
        description: "Reading, filtering, and writing structured CSV datasets using Python's built-in csv module.",
        isFree: true,
        videoDuration: "06:50",
        iconType: "file"
      },
      {
        id: 1902,
        moduleId: 19,
        topicNumber: 2,
        title: "19.2 Data Cleaning",
        description: "Handling missing values, removing duplicate rows, trimming whitespace, and fixing inconsistent types.",
        isFree: true,
        videoDuration: "07:45",
        iconType: "file"
      },
      {
        id: 1903,
        moduleId: 19,
        topicNumber: 3,
        title: "19.3 Basic Pandas Introduction",
        description: "Loading CSVs into Pandas DataFrames, inspecting rows with .head() and .info(), and basic column operations.",
        isFree: true,
        videoDuration: "08:20",
        iconType: "project"
      },
      {
        id: 1904,
        moduleId: 19,
        topicNumber: 4,
        title: "19.4 Real-World Examples",
        description: "Cleaning and summarizing an e-commerce sales dataset to find top-performing products and regions.",
        isFree: true,
        videoDuration: "08:30",
        iconType: "project"
      }
    ]
  },
  {
    id: 20,
    moduleNumber: 20,
    name: "Advanced Python Concepts",
    topicCount: 4,
    isFree: true,
    color: "#8b5cf6",
    bgGradient: "linear-gradient(180deg, #faf5ff 0%, #ffffff 100%)",
    borderColor: "#e9d5ff",
    iconType: "rocket",
    description: "Level up your Python mastery with lambda functions, elegant list comprehensions, memory-efficient generators, and function decorators.",
    topics: [
      {
        id: 2001,
        moduleId: 20,
        topicNumber: 1,
        title: "20.1 Lambda Functions",
        description: "Writing concise anonymous functions in a single line with lambda, map(), and filter().",
        isFree: true,
        videoDuration: "06:30",
        iconType: "function"
      },
      {
        id: 2002,
        moduleId: 20,
        topicNumber: 2,
        title: "20.2 List Comprehension",
        description: "Constructing and filtering lists elegantly in one readable line instead of multi-line for loops.",
        isFree: true,
        videoDuration: "07:15",
        iconType: "structure"
      },
      {
        id: 2003,
        moduleId: 20,
        topicNumber: 3,
        title: "20.3 Generators",
        description: "Producing infinite and massive data streams on demand using the yield keyword with low memory overhead.",
        isFree: true,
        videoDuration: "07:45",
        iconType: "function"
      },
      {
        id: 2004,
        moduleId: 20,
        topicNumber: 4,
        title: "20.4 Decorators Basics",
        description: "Wrapping functions to add execution timers, logging, and access control using Python @decorator syntax.",
        isFree: true,
        videoDuration: "08:10",
        iconType: "oop"
      }
    ]
  },
  {
    id: 21,
    moduleNumber: 21,
    name: "Database Integration",
    topicCount: 4,
    isFree: true,
    color: "#0ea5e9",
    bgGradient: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
    borderColor: "#bae6fd",
    iconType: "structure",
    description: "Store and query persistent data with SQLite, connect Python with databases, and implement full CRUD operations.",
    topics: [
      {
        id: 2101,
        moduleId: 21,
        topicNumber: 1,
        title: "21.1 SQLite Basics",
        description: "Understanding relational databases, tables, primary keys, and setting up lightweight SQLite.",
        isFree: true,
        videoDuration: "06:40",
        iconType: "structure"
      },
      {
        id: 2102,
        moduleId: 21,
        topicNumber: 2,
        title: "21.2 CRUD Operations",
        description: "Executing SQL statements to Create, Read, Update, and Delete table records.",
        isFree: true,
        videoDuration: "08:10",
        iconType: "structure"
      },
      {
        id: 2103,
        moduleId: 21,
        topicNumber: 3,
        title: "21.3 Connecting Python with DB",
        description: "Using Python's sqlite3 module, cursor execution, parameterized queries, and commit/rollback transactions.",
        isFree: true,
        videoDuration: "07:30",
        iconType: "project"
      },
      {
        id: 2104,
        moduleId: 21,
        topicNumber: 4,
        title: "21.4 Real-World Use",
        description: "Building a user authentication and store inventory database system completely in Python.",
        isFree: true,
        videoDuration: "08:15",
        iconType: "project"
      }
    ]
  },
  {
    id: 22,
    moduleNumber: 22,
    name: "Web Development with Python – Introduction",
    topicCount: 4,
    isFree: true,
    color: "#059669",
    bgGradient: "linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)",
    borderColor: "#a7f3d0",
    iconType: "project",
    description: "Get started with Python web development, build lightweight servers with Flask, design RESTful API endpoints, configure URL routing, and handle client requests.",
    topics: [
      {
        id: 2201,
        moduleId: 22,
        topicNumber: 1,
        title: "22.1 Flask Basics",
        description: "Introduction to WSGI microframeworks, installing Flask, creating your first web app, and running local development servers.",
        isFree: true,
        videoDuration: "06:30",
        iconType: "project"
      },
      {
        id: 2202,
        moduleId: 22,
        topicNumber: 2,
        title: "22.2 Creating APIs",
        description: "Building REST endpoints with jsonify, returning JSON payloads, HTTP status codes, and API architecture fundamentals.",
        isFree: true,
        videoDuration: "07:45",
        iconType: "project"
      },
      {
        id: 2203,
        moduleId: 22,
        topicNumber: 3,
        title: "22.3 Routing",
        description: "Mapping URLs to view functions with @app.route(), dynamic route parameters (strings, ints), and HTTP method constraints (GET, POST).",
        isFree: true,
        videoDuration: "07:15",
        iconType: "structure"
      },
      {
        id: 2204,
        moduleId: 22,
        topicNumber: 4,
        title: "22.4 Handling Requests",
        description: "Parsing incoming query parameters, form data, JSON request bodies using flask.request, and responding to client input.",
        isFree: true,
        videoDuration: "08:20",
        iconType: "function"
      }
    ]
  },
  {
    id: 23,
    moduleNumber: 23,
    name: "Python for Data Analysis and Visualization – Introduction",
    topicCount: 4,
    isFree: true,
    color: "#f59e0b",
    bgGradient: "linear-gradient(180deg, #fffbeb 0%, #ffffff 100%)",
    borderColor: "#fde68a",
    iconType: "data",
    description: "Unlock insights from raw data using Pandas DataFrames, descriptive data analysis techniques, and clear visual charts with Matplotlib.",
    topics: [
      {
        id: 2301,
        moduleId: 23,
        topicNumber: 1,
        title: "23.1 Pandas Basics",
        description: "Understanding Series and DataFrames, loading tabular data, selecting columns, and inspecting datasets.",
        isFree: true,
        videoDuration: "07:10",
        iconType: "data"
      },
      {
        id: 2302,
        moduleId: 23,
        topicNumber: 2,
        title: "23.2 Data Analysis",
        description: "Filtering rows, calculating summary statistics with describe(), and grouping metrics with groupby().",
        isFree: true,
        videoDuration: "08:00",
        iconType: "data"
      },
      {
        id: 2303,
        moduleId: 23,
        topicNumber: 3,
        title: "23.3 Matplotlib Basics",
        description: "Plotting line charts, bar graphs, and histograms with custom titles, labels, colors, and legends.",
        isFree: true,
        videoDuration: "07:30",
        iconType: "structure"
      },
      {
        id: 2304,
        moduleId: 23,
        topicNumber: 4,
        title: "23.4 Real-World Use",
        description: "End-to-end exploratory data analysis on sales and customer performance with actionable visualization.",
        isFree: true,
        videoDuration: "08:30",
        iconType: "project"
      }
    ]
  },
  {
    id: 24,
    moduleNumber: 24,
    name: "Git, GitHub & Collaboration",
    topicCount: 4,
    isFree: true,
    color: "#f97316",
    bgGradient: "linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)",
    borderColor: "#fed7aa",
    iconType: "project",
    description: "Track code changes with Git, publish repositories to GitHub, manage branches, and collaborate seamlessly on professional development teams.",
    topics: [
      {
        id: 2401,
        moduleId: 24,
        topicNumber: 1,
        title: "24.1 Git Basics",
        description: "Installing Git, initializing repositories, tracking changes with git add, git commit, and inspecting history with git log.",
        isFree: true,
        videoDuration: "06:45",
        iconType: "terminal"
      },
      {
        id: 2402,
        moduleId: 24,
        topicNumber: 2,
        title: "24.2 GitHub Usage",
        description: "Setting up GitHub, linking remote repositories, pushing code with git push, and pulling team updates with git pull.",
        isFree: true,
        videoDuration: "07:20",
        iconType: "project"
      },
      {
        id: 2403,
        moduleId: 24,
        topicNumber: 3,
        title: "24.3 Collaboration Workflow",
        description: "Branching workflows (git branch, git checkout -b), Pull Requests (PRs), conducting code reviews, and resolving merge conflicts.",
        isFree: true,
        videoDuration: "08:15",
        iconType: "structure"
      },
      {
        id: 2404,
        moduleId: 24,
        topicNumber: 4,
        title: "24.4 Version Control",
        description: "Professional version control practices, .gitignore configuration, semantic tagging, and maintaining clean git history.",
        isFree: true,
        videoDuration: "07:50",
        iconType: "oop"
      }
    ]
  }
];



