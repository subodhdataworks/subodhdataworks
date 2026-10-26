import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  FolderKanban,
  Wrench,
  Video,
  FileText,
  Gamepad2,
  Code2,
  Mic,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Lock,
  Sparkles,
  Send,
  Play,
  Clock,
  CheckCircle2,
  Check
} from 'lucide-react';
import { WorkspaceStepId } from './PythonTopicWorkspace';
import { soundEffects } from '../../services/soundEffects';
import './PythonCourseDetailView.css';

interface PythonCourseDetailViewProps {
  userName?: string;
  onBack: () => void;
  onOpenTopic: (topicId: number, step?: WorkspaceStepId) => void;
  onOpenUnlockModal: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
}

export const PythonCourseDetailView: React.FC<PythonCourseDetailViewProps> = ({
  userName = 'Subodh Kumar',
  onBack,
  onOpenTopic,
  onOpenUnlockModal,
  onOpenAdvisor,
}) => {
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'not-started' | 'completed'>('all');
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set([1]));
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiReply, setAiReply] = useState<string | null>(null);

  const toggleTopic = (id: number) => {
    soundEffects.playClick();
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const topicsList = [
    {
      id: 1,
      stepNum: 1,
      stepColor: '#00b4d8',
      title: 'Introduction to Programming & Python Thinking',
      desc: 'Real-life programming examples, why Python leads everywhere, how computers understand instructions, VS Code setup, first Python program, step-by-step code execution, beginner mistakes, and programmer mindset.',
      isFree: true,
      progress: '9 / 9 Lessons',
      pct: 100,
      iconType: 'python',
      completed: true,
      chapters: [
        {
          id: '1-1',
          num: '01',
          title: '1.1 What is Programming? – Real-Life Examples',
          desc: 'Core concepts of software programming, everyday real-life examples, and how instructions solve problems.',
          duration: '07:40',
          isFree: true,
          completed: true,
        },
        {
          id: '1-2',
          num: '02',
          title: '1.2 Why Python is Used Everywhere',
          desc: 'Industry use cases: Data Analytics, AI, Web Development, Automation, Finance, and why top companies use Python.',
          duration: '06:15',
          isFree: true,
          completed: true,
        },
        {
          id: '1-3',
          num: '03',
          title: '1.3 Python vs Other Languages – Simple Understanding',
          desc: "Comparing Python's clean, English-like syntax with C++, Java, and JavaScript in simple terms.",
          duration: '05:45',
          isFree: true,
          completed: true,
        },
        {
          id: '1-4',
          num: '04',
          title: '1.4 How Computers Understand Instructions',
          desc: 'Source code, interpreters vs compilers, bytecode, and how computers translate Python into machine actions.',
          duration: '06:10',
          isFree: true,
          completed: true,
        },
        {
          id: '1-5',
          num: '05',
          title: '1.5 Installing Python and IDE – VS Code Setup',
          desc: 'Step-by-step setup of Python 3 and Visual Studio Code (VS Code) with essential extensions.',
          duration: '07:20',
          isFree: true,
          completed: true,
        },
        {
          id: '1-6',
          num: '06',
          title: '1.6 Writing First Python Program',
          desc: 'Creating your first .py script, using print(), and running your first Python program.',
          duration: '06:30',
          isFree: true,
          completed: true,
        },
        {
          id: '1-7',
          num: '07',
          title: '1.7 Understanding How Code Runs Step-by-Step',
          desc: 'Tracing top-to-bottom execution flow, statement evaluation, and how Python processes each line.',
          duration: '05:15',
          isFree: true,
          completed: true,
        },
        {
          id: '1-8',
          num: '08',
          title: '1.8 Common Beginner Mistakes and How to Avoid Them',
          desc: 'SyntaxError, IndentationError, NameError, typos, and a simple checklist to debug mistakes fast.',
          duration: '07:40',
          isFree: true,
          completed: true,
        },
        {
          id: '1-9',
          num: '09',
          title: '1.9 Mindset: How to Think Like a Programmer',
          desc: 'Breaking big problems into small steps (Input → Process → Output), logical thinking, and building confidence.',
          duration: '06:45',
          isFree: true,
          completed: true,
        },
      ],
    },
    {
      id: 2,
      stepNum: 2,
      stepColor: '#3b82f6',
      title: 'Variables & Data – How Python Stores Information',
      desc: 'Understand variables with real-life box analogies, variable naming rules, data types, type checking, type conversion, dynamic typing, memory concepts, and common quote vs number confusions.',
      isFree: true,
      progress: '11 / 11 Lessons',
      pct: 100,
      iconType: 'code',
      completed: true,
      chapters: [
        {
          id: '2-1',
          num: '01',
          title: '2.1 What Are Variables? – Real-Life Analogy: Boxes',
          desc: 'How variables act like labeled storage boxes in computer memory to hold information.',
          duration: '06:15',
          isFree: true,
          completed: true,
        },
        {
          id: '2-2',
          num: '02',
          title: '2.2 Creating Variables',
          desc: 'Assigning values using the = operator and storing text, numbers, and flags.',
          duration: '05:40',
          isFree: true,
          completed: true,
        },
        {
          id: '2-3',
          num: '03',
          title: '2.3 Rules for Naming Variables',
          desc: 'Valid vs invalid variable names, snake_case best practices, and reserved keywords.',
          duration: '07:10',
          isFree: true,
          completed: true,
        },
        {
          id: '2-4',
          num: '04',
          title: '2.4 Understanding Different Data Types',
          desc: 'Exploring integers (int), decimals (float), strings (str), and booleans (bool).',
          duration: '08:20',
          isFree: true,
          completed: true,
        },
        {
          id: '2-5',
          num: '05',
          title: '2.5 Type Checking in Python',
          desc: 'Using type() and isinstance() to inspect what kind of data a variable holds.',
          duration: '05:50',
          isFree: true,
          completed: true,
        },
        {
          id: '2-6',
          num: '06',
          title: '2.6 Type Conversion – Int to String',
          desc: 'Converting integers to strings with str() so numbers can be combined with text.',
          duration: '06:30',
          isFree: true,
          completed: true,
        },
        {
          id: '2-7',
          num: '07',
          title: '2.7 etc...',
          desc: 'Additional type conversions: String to Int (int()), Float conversions (float()), and bool().',
          duration: '05:15',
          isFree: true,
          completed: true,
        },
        {
          id: '2-8',
          num: '08',
          title: '2.8 Dynamic Typing in Python',
          desc: 'How Python automatically determines and updates variable types at runtime.',
          duration: '06:45',
          isFree: true,
          completed: true,
        },
        {
          id: '2-9',
          num: '09',
          title: '2.9 Memory Concept Simplified',
          desc: 'Object references, id(), and how Python points variable names to values in memory.',
          duration: '07:30',
          isFree: true,
          completed: true,
        },
        {
          id: '2-10',
          num: '10',
          title: '2.10 Common Beginner Confusion – Quotes',
          desc: "Why '25' in quotes is text (str) and not a number, plus single vs double quotes.",
          duration: '05:25',
          isFree: true,
          completed: true,
        },
        {
          id: '2-11',
          num: '11',
          title: '2.11 Numbers',
          desc: 'Working with unquoted numeric values (int and float) for math and calculations.',
          duration: '06:10',
          isFree: true,
          completed: true,
        },
      ],
    },
    {
      id: 3,
      stepNum: 3,
      stepColor: '#f97316',
      title: 'Input, Output & User Interaction',
      desc: 'Learn how to take user input, display clean output, format strings with f-strings, handle input data types, and build interactive Python programs.',
      isFree: true,
      progress: '8 / 8 Lessons',
      pct: 100,
      iconType: 'database',
      completed: true,
      chapters: [
        {
          id: '3-1',
          num: '01',
          title: '3.1 Taking Input from User',
          desc: 'Using the input() function to capture interactive user responses from the keyboard.',
          duration: '06:20',
          isFree: true,
          completed: true,
        },
        {
          id: '3-2',
          num: '02',
          title: '3.2 Displaying Output Properly',
          desc: 'Mastering print() with multiple arguments, sep, end, and readable console output.',
          duration: '05:45',
          isFree: true,
          completed: true,
        },
        {
          id: '3-3',
          num: '03',
          title: '3.3 Formatting Output – F-Strings',
          desc: 'Embedding variables and expressions cleanly inside strings using Python f-strings.',
          duration: '07:10',
          isFree: true,
          completed: true,
        },
        {
          id: '3-4',
          num: '04',
          title: '3.4 Handling Input Data Types',
          desc: 'Converting string inputs into int and float values safely for calculations.',
          duration: '06:40',
          isFree: true,
          completed: true,
        },
        {
          id: '3-5',
          num: '05',
          title: '3.5 Real-World Example: Calculator Input',
          desc: 'Building a practical interactive calculator that takes two numbers and prints results.',
          duration: '08:15',
          isFree: true,
          completed: true,
        },
        {
          id: '3-6',
          num: '06',
          title: '3.6 Common Mistakes – String vs Number Input',
          desc: "Why '10' + '20' gives '1020' instead of 30, and how to avoid input type bugs.",
          duration: '06:00',
          isFree: true,
          completed: true,
        },
        {
          id: '3-7',
          num: '07',
          title: '3.7 Making Interactive Programs',
          desc: 'Combining prompts, user inputs, and dynamic responses into engaging CLI apps.',
          duration: '07:30',
          isFree: true,
          completed: true,
        },
        {
          id: '3-8',
          num: '08',
          title: '3.8 Clean Output Practices',
          desc: 'Formatting numbers, aligning labels, and presenting clear, professional program output.',
          duration: '05:50',
          isFree: true,
          completed: true,
        },
      ],
    },
    {
      id: 4,
      stepNum: 4,
      stepColor: '#ec4899',
      title: 'Operators & Logic',
      desc: 'Master arithmetic, comparison, and logical operators, operator precedence, and real-life logic expressions.',
      isFree: false,
      progress: '0 / 10 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '4-1',
          num: '01',
          title: '4.1 Arithmetic Operators',
          desc: 'Addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulus (%), and exponentiation (**).',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '4-2',
          num: '02',
          title: '4.2 Comparison Operators',
          desc: 'Comparing values using ==, !=, >, <, >=, and <= to produce True or False results.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '4-3',
          num: '03',
          title: '4.3 Logical Operators – AND',
          desc: 'Combining multiple conditions where all expressions must be True using the and operator.',
          duration: '05:45',
          isFree: false,
          completed: false,
        },
        {
          id: '4-4',
          num: '04',
          title: '4.4 OR',
          desc: 'Checking if at least one condition is True using Python or logical operator.',
          duration: '05:30',
          isFree: false,
          completed: false,
        },
        {
          id: '4-5',
          num: '05',
          title: '4.5 NOT',
          desc: 'Reversing boolean truth values with the not operator in logical conditions.',
          duration: '05:15',
          isFree: false,
          completed: false,
        },
        {
          id: '4-6',
          num: '06',
          title: '4.6 Operator Precedence',
          desc: 'Understanding the order in which Python evaluates operators (PEMDAS/BODMAS and logical precedence).',
          duration: '07:00',
          isFree: false,
          completed: false,
        },
        {
          id: '4-7',
          num: '07',
          title: '4.7 Real-Life Examples – Shopping Calculations',
          desc: 'Applying arithmetic and comparison operators to discounts, tax, cart totals, and coupon eligibility.',
          duration: '08:10',
          isFree: false,
          completed: false,
        },
        {
          id: '4-8',
          num: '08',
          title: '4.8 Combining Expressions',
          desc: 'Writing clean compound expressions using parentheses, arithmetic, comparisons, and boolean logic.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '4-9',
          num: '09',
          title: '4.9 Common Logic Mistakes',
          desc: 'Avoiding = vs == errors, truthy/falsy traps, and incorrect operator grouping.',
          duration: '06:00',
          isFree: false,
          completed: false,
        },
        {
          id: '4-10',
          num: '10',
          title: '4.10 Practice Mini Problems',
          desc: 'Hands-on mini coding problems to test arithmetic, comparison, and logical operators.',
          duration: '08:30',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 5,
      stepNum: 5,
      stepColor: '#10b981',
      title: 'Conditional Statements – Decision Making',
      desc: 'Learn how programs make decisions using if, if-else, elif, nested conditions, and real-world login logic.',
      isFree: false,
      progress: '0 / 8 Lessons',
      pct: 0,
      iconType: 'fx',
      completed: false,
      chapters: [
        {
          id: '5-1',
          num: '01',
          title: '5.1 Why Decisions Are Important',
          desc: 'Understanding how conditional branching lets programs react dynamically to different situations.',
          duration: '05:40',
          isFree: false,
          completed: false,
        },
        {
          id: '5-2',
          num: '02',
          title: '5.2 if Statement Basics',
          desc: 'Syntax, indentation rules, and executing code blocks only when a condition is True.',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '5-3',
          num: '03',
          title: '5.3 if-else Structure',
          desc: 'Handling two-way decisions with if and else blocks.',
          duration: '07:10',
          isFree: false,
          completed: false,
        },
        {
          id: '5-4',
          num: '04',
          title: '5.4 elif Usage',
          desc: 'Checking multiple mutually exclusive conditions cleanly using elif chains.',
          duration: '07:25',
          isFree: false,
          completed: false,
        },
        {
          id: '5-5',
          num: '05',
          title: '5.5 Nested Conditions',
          desc: 'Placing if-else statements inside other conditions for multi-step decision trees.',
          duration: '07:50',
          isFree: false,
          completed: false,
        },
        {
          id: '5-6',
          num: '06',
          title: '5.6 Real-World Examples – Login System',
          desc: 'Building a practical username, password, and role verification flow using conditionals.',
          duration: '08:40',
          isFree: false,
          completed: false,
        },
        {
          id: '5-7',
          num: '07',
          title: '5.7 Avoiding Logical Mistakes',
          desc: 'Fixing unreachable elif branches, wrong condition order, and indentation pitfalls.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '5-8',
          num: '08',
          title: '5.8 Writing Clean Conditions',
          desc: 'Simplifying boolean checks, guard clauses, and readable conditional expressions.',
          duration: '06:35',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 6,
      stepNum: 6,
      stepColor: '#6366f1',
      title: 'Loops – Repeating Tasks Automatically',
      desc: 'Automate repetitive tasks using for and while loops, break and continue, nested loops, and safe loop control.',
      isFree: false,
      progress: '0 / 8 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '6-1',
          num: '01',
          title: '6.1 Why Loops Are Needed',
          desc: 'Understanding why loops eliminate repetitive code and automate large tasks effortlessly.',
          duration: '05:30',
          isFree: false,
          completed: false,
        },
        {
          id: '6-2',
          num: '02',
          title: '6.2 for Loop Basics',
          desc: 'Iterating over sequences and number ranges using Python for loop and range().',
          duration: '07:15',
          isFree: false,
          completed: false,
        },
        {
          id: '6-3',
          num: '03',
          title: '6.3 while Loop Basics',
          desc: 'Running condition-based loops that repeat as long as a condition remains True.',
          duration: '07:00',
          isFree: false,
          completed: false,
        },
        {
          id: '6-4',
          num: '04',
          title: '6.4 break and continue',
          desc: 'Controlling loop execution by exiting early with break or skipping iterations with continue.',
          duration: '06:20',
          isFree: false,
          completed: false,
        },
        {
          id: '6-5',
          num: '05',
          title: '6.5 Loop with Conditions',
          desc: 'Combining if-else logic inside loops to filter, count, and process specific items.',
          duration: '07:35',
          isFree: false,
          completed: false,
        },
        {
          id: '6-6',
          num: '06',
          title: '6.6 Nested Loops',
          desc: 'Using a loop inside another loop to work with grids, tables, and patterns.',
          duration: '08:00',
          isFree: false,
          completed: false,
        },
        {
          id: '6-7',
          num: '07',
          title: '6.7 Real-World Examples',
          desc: 'Applying loops to real scenarios like shopping carts, retry prompts, and batch reports.',
          duration: '08:25',
          isFree: false,
          completed: false,
        },
        {
          id: '6-8',
          num: '08',
          title: '6.8 Avoiding Infinite Loops',
          desc: 'Recognizing why infinite loops happen in while loops and how to update counters safely.',
          duration: '06:10',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 7,
      stepNum: 7,
      stepColor: '#10b981',
      title: 'Strings – Working with Text Data',
      desc: 'Master string manipulation, indexing, slicing, built-in string methods, formatting, and real-world text processing.',
      isFree: false,
      progress: '0 / 10 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '7-1',
          num: '01',
          title: '7.1 String Basics',
          desc: 'Creating strings with quotes, multi-line strings, string length, and immutability.',
          duration: '05:45',
          isFree: false,
          completed: false,
        },
        {
          id: '7-2',
          num: '02',
          title: '7.2 Indexing and Slicing',
          desc: 'Accessing individual characters using positive/negative indices and extracting substrings with slicing.',
          duration: '07:20',
          isFree: false,
          completed: false,
        },
        {
          id: '7-3',
          num: '03',
          title: '7.3 String Methods – Upper',
          desc: 'Converting text to uppercase using .upper() and capitalizing headings cleanly.',
          duration: '05:30',
          isFree: false,
          completed: false,
        },
        {
          id: '7-4',
          num: '04',
          title: '7.4 Lower',
          desc: 'Normalizing text with .lower() for case-insensitive comparisons and search.',
          duration: '05:15',
          isFree: false,
          completed: false,
        },
        {
          id: '7-5',
          num: '05',
          title: '7.5 Replace',
          desc: 'Replacing characters, words, or unwanted symbols in strings using .replace().',
          duration: '06:00',
          isFree: false,
          completed: false,
        },
        {
          id: '7-6',
          num: '06',
          title: '7.6 String Formatting',
          desc: 'Building dynamic text templates with f-strings, .format(), and alignment specifiers.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '7-7',
          num: '07',
          title: '7.7 Checking Substrings',
          desc: 'Searching inside strings using the in keyword, .find(), .startswith(), and .endswith().',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '7-8',
          num: '08',
          title: '7.8 Real-World Use Cases',
          desc: 'Cleaning emails, phone numbers, CSV text fields, and generating user-friendly messages.',
          duration: '07:45',
          isFree: false,
          completed: false,
        },
        {
          id: '7-9',
          num: '09',
          title: '7.9 Handling User Input Text',
          desc: 'Stripping extra whitespace with .strip() and validating user-typed text input.',
          duration: '06:40',
          isFree: false,
          completed: false,
        },
        {
          id: '7-10',
          num: '10',
          title: '7.10 Common Mistakes',
          desc: 'Avoiding string immutability errors, off-by-one slice bounds, and unescaped quote issues.',
          duration: '06:10',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 8,
      stepNum: 8,
      stepColor: '#f59e0b',
      title: 'Lists – Storing Multiple Values',
      desc: 'Learn how to create lists, access and modify items, iterate over collections, use list methods, and avoid common pitfalls.',
      isFree: false,
      progress: '0 / 7 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '8-1',
          num: '01',
          title: '8.1 Creating Lists',
          desc: 'Defining ordered collections of items with square brackets, mixed data types, and list().',
          duration: '05:50',
          isFree: false,
          completed: false,
        },
        {
          id: '8-2',
          num: '02',
          title: '8.2 Accessing Elements',
          desc: 'Reading and updating list elements using positive indices, negative indices, and slicing.',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '8-3',
          num: '03',
          title: '8.3 Adding/Removing Items',
          desc: 'Modifying lists dynamically using .append(), .insert(), .remove(), .pop(), and del.',
          duration: '07:15',
          isFree: false,
          completed: false,
        },
        {
          id: '8-4',
          num: '04',
          title: '8.4 Looping Through Lists',
          desc: 'Iterating over list items with for loops, enumerate(), and filtering values.',
          duration: '07:00',
          isFree: false,
          completed: false,
        },
        {
          id: '8-5',
          num: '05',
          title: '8.5 List Methods',
          desc: 'Sorting, reversing, counting, and finding items with .sort(), .reverse(), .count(), and .index().',
          duration: '07:45',
          isFree: false,
          completed: false,
        },
        {
          id: '8-6',
          num: '06',
          title: '8.6 Real-World Examples',
          desc: 'Managing shopping carts, student marks, task queues, and dataset rows using Python lists.',
          duration: '08:20',
          isFree: false,
          completed: false,
        },
        {
          id: '8-7',
          num: '07',
          title: '8.7 Common Mistakes',
          desc: 'Avoiding IndexError out-of-range bugs, shallow copy surprises, and modifying lists while iterating.',
          duration: '06:10',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 9,
      stepNum: 9,
      stepColor: '#8b5cf6',
      title: 'Tuples, Sets & Dictionaries',
      desc: 'Understand immutable tuples, unique sets, key-value dictionaries, and when to choose each data structure.',
      isFree: false,
      progress: '0 / 7 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '9-1',
          num: '01',
          title: '9.1 Tuple Basics',
          desc: 'Creating immutable ordered collections with parentheses, tuple packing, and unpacking.',
          duration: '06:00',
          isFree: false,
          completed: false,
        },
        {
          id: '9-2',
          num: '02',
          title: '9.2 Set Basics',
          desc: 'Storing unique unordered items, removing duplicates automatically, and basic set operations.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '9-3',
          num: '03',
          title: '9.3 Dictionary Basics',
          desc: 'Storing structured information as key-value pairs using curly braces.',
          duration: '07:10',
          isFree: false,
          completed: false,
        },
        {
          id: '9-4',
          num: '04',
          title: '9.4 Accessing Dictionary Data',
          desc: 'Retrieving, adding, updating, and safely reading keys with .get(), .keys(), .values(), and .items().',
          duration: '07:25',
          isFree: false,
          completed: false,
        },
        {
          id: '9-5',
          num: '05',
          title: '9.5 When to Use What',
          desc: 'Choosing between List, Tuple, Set, and Dictionary based on mutability, order, and lookup speed.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '9-6',
          num: '06',
          title: '9.6 Real-World Comparisons',
          desc: 'Comparing real-world use cases like product catalogs, GPS coordinates, and unique user IDs.',
          duration: '08:00',
          isFree: false,
          completed: false,
        },
        {
          id: '9-7',
          num: '07',
          title: '9.7 Common Beginner Confusion',
          desc: 'Avoiding single-item tuple comma mistakes, KeyError crashes, and empty set {} vs dict {} confusion.',
          duration: '06:20',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 10,
      stepNum: 10,
      stepColor: '#ec4899',
      title: 'Functions – Reusable Code Blocks',
      desc: 'Write clean, modular code using Python functions, parameters, return values, default arguments, and variable scope.',
      isFree: false,
      progress: '0 / 7 Lessons',
      pct: 0,
      iconType: 'fx',
      completed: false,
      chapters: [
        {
          id: '10-1',
          num: '01',
          title: '10.1 Why Functions Matter',
          desc: 'Understanding the DRY (Don\'t Repeat Yourself) principle and how functions organize complex programs.',
          duration: '05:40',
          isFree: false,
          completed: false,
        },
        {
          id: '10-2',
          num: '02',
          title: '10.2 Creating Functions',
          desc: 'Defining and calling custom functions in Python using the def keyword.',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '10-3',
          num: '03',
          title: '10.3 Parameters and Return Values',
          desc: 'Passing inputs into functions via parameters and sending results back with return.',
          duration: '07:45',
          isFree: false,
          completed: false,
        },
        {
          id: '10-4',
          num: '04',
          title: '10.4 Default Parameters',
          desc: 'Setting fallback argument values and calling functions with flexible keyword arguments.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '10-5',
          num: '05',
          title: '10.5 Scope – Local vs Global',
          desc: 'Understanding variable visibility inside vs outside functions and avoiding global state bugs.',
          duration: '07:20',
          isFree: false,
          completed: false,
        },
        {
          id: '10-6',
          num: '06',
          title: '10.6 Code Reusability',
          desc: 'Breaking large scripts into small, testable, and reusable helper functions.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '10-7',
          num: '07',
          title: '10.7 Real-World Examples',
          desc: 'Building practical functions for invoice billing, tax calculation, and data validation.',
          duration: '08:15',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 11,
      stepNum: 11,
      stepColor: '#06b6d4',
      title: 'Problem Solving & Logic Building',
      desc: 'Learn how to think before coding, break problems into steps, write pseudocode, solve patterns, and debug logic errors.',
      isFree: false,
      progress: '0 / 6 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '11-1',
          num: '01',
          title: '11.1 How to Think Before Coding',
          desc: 'Understanding problem inputs, expected outputs, and edge cases before writing a single line of code.',
          duration: '06:10',
          isFree: false,
          completed: false,
        },
        {
          id: '11-2',
          num: '02',
          title: '11.2 Breaking Problems into Steps',
          desc: 'Decomposing complex challenges into small, manageable logical steps.',
          duration: '06:45',
          isFree: false,
          completed: false,
        },
        {
          id: '11-3',
          num: '03',
          title: '11.3 Writing Pseudocode',
          desc: 'Drafting plain-English algorithms and flowcharts to validate your logic before coding.',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '11-4',
          num: '04',
          title: '11.4 Pattern Problems',
          desc: 'Mastering nested loops and dry-run tables using number, pyramid, and star pattern problems.',
          duration: '08:15',
          isFree: false,
          completed: false,
        },
        {
          id: '11-5',
          num: '05',
          title: '11.5 Debugging Logic Errors',
          desc: 'Tracing variables step-by-step with print statements and IDE debuggers to fix wrong outputs.',
          duration: '07:20',
          isFree: false,
          completed: false,
        },
        {
          id: '11-6',
          num: '06',
          title: '11.6 Practice Problems',
          desc: 'Solving end-to-end logic building problems to strengthen your coding confidence.',
          duration: '09:00',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 12,
      stepNum: 12,
      stepColor: '#14b8a6',
      title: 'File Handling – Working with Files',
      desc: 'Learn how to open, read, and write files safely in Python using file modes, real-world workflows, and error handling.',
      isFree: false,
      progress: '0 / 6 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '12-1',
          num: '01',
          title: '12.1 Opening Files',
          desc: 'Using open() and the with context manager to open and automatically close files safely.',
          duration: '05:50',
          isFree: false,
          completed: false,
        },
        {
          id: '12-2',
          num: '02',
          title: '12.2 Reading Files',
          desc: 'Reading text content using .read(), .readline(), .readlines(), and line-by-line iteration.',
          duration: '06:40',
          isFree: false,
          completed: false,
        },
        {
          id: '12-3',
          num: '03',
          title: '12.3 Writing Files',
          desc: 'Creating new files, writing strings with .write(), and appending new lines without overwriting.',
          duration: '06:55',
          isFree: false,
          completed: false,
        },
        {
          id: '12-4',
          num: '04',
          title: '12.4 File Modes',
          desc: 'Understanding read (r), write (w), append (a), create (x), and binary (rb/wb) file modes.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '12-5',
          num: '05',
          title: '12.5 Real-World Use Cases',
          desc: 'Saving application logs, reading CSV reports, and exporting structured data summaries.',
          duration: '08:10',
          isFree: false,
          completed: false,
        },
        {
          id: '12-6',
          num: '06',
          title: '12.6 Error Handling',
          desc: 'Handling FileNotFoundError and PermissionError gracefully using try-except-finally blocks.',
          duration: '07:30',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 13,
      stepNum: 13,
      stepColor: '#ef4444',
      title: 'Exception Handling – Handling Errors',
      desc: 'Handle runtime crashes gracefully with try-except, finally blocks, custom exceptions, and a strong debugging mindset.',
      isFree: false,
      progress: '0 / 5 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '13-1',
          num: '01',
          title: '13.1 Types of Errors',
          desc: 'Distinguishing between syntax errors, runtime exceptions (ValueError, TypeError, ZeroDivisionError), and logical bugs.',
          duration: '06:00',
          isFree: false,
          completed: false,
        },
        {
          id: '13-2',
          num: '02',
          title: '13.2 try-except Usage',
          desc: 'Catching specific exceptions safely so your Python program never crashes unexpectedly.',
          duration: '07:15',
          isFree: false,
          completed: false,
        },
        {
          id: '13-3',
          num: '03',
          title: '13.3 finally Block',
          desc: 'Running guaranteed cleanup code (closing files, releasing connections) with else and finally blocks.',
          duration: '05:50',
          isFree: false,
          completed: false,
        },
        {
          id: '13-4',
          num: '04',
          title: '13.4 Custom Errors',
          desc: 'Raising meaningful validation errors with the raise keyword and custom exception classes.',
          duration: '06:40',
          isFree: false,
          completed: false,
        },
        {
          id: '13-5',
          num: '05',
          title: '13.5 Debugging Mindset',
          desc: 'Reading Python tracebacks calmly, isolating root causes, and writing defensive code.',
          duration: '06:25',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 14,
      stepNum: 14,
      stepColor: '#3b82f6',
      title: 'Modules & Libraries',
      desc: 'Organize code into reusable Python modules, import standard libraries, install packages with pip, and manage virtual environments.',
      isFree: false,
      progress: '0 / 5 Lessons',
      pct: 0,
      iconType: 'fx',
      completed: false,
      chapters: [
        {
          id: '14-1',
          num: '01',
          title: '14.1 Creating Modules',
          desc: 'Splitting Python code across multiple .py files to create clean, reusable custom modules.',
          duration: '06:10',
          isFree: false,
          completed: false,
        },
        {
          id: '14-2',
          num: '02',
          title: '14.2 Importing Modules',
          desc: 'Using import, from ... import ..., and as aliases to bring functions and variables into your script.',
          duration: '06:35',
          isFree: false,
          completed: false,
        },
        {
          id: '14-3',
          num: '03',
          title: '14.3 Built-In Libraries',
          desc: 'Exploring Python standard library including math, random, datetime, and os.',
          duration: '07:20',
          isFree: false,
          completed: false,
        },
        {
          id: '14-4',
          num: '04',
          title: '14.4 Installing Packages – pip',
          desc: 'Installing third-party packages from PyPI using pip install and tracking dependencies with requirements.txt.',
          duration: '06:45',
          isFree: false,
          completed: false,
        },
        {
          id: '14-5',
          num: '05',
          title: '14.5 Virtual Environment',
          desc: 'Creating and activating isolated Python environments with venv so project packages never conflict.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 15,
      stepNum: 15,
      stepColor: '#9333ea',
      title: 'Object-Oriented Programming (OOP)',
      desc: 'Model real-world entities in Python using classes, objects, __init__ constructors, attributes, and methods.',
      isFree: false,
      progress: '0 / 5 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '15-1',
          num: '01',
          title: '15.1 Classes and Objects',
          desc: 'Understanding blueprints (classes) vs real instances (objects) and creating your first Python class.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '15-2',
          num: '02',
          title: '15.2 Constructor',
          desc: 'Initializing object state automatically when an object is created using the __init__() method and self.',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '15-3',
          num: '03',
          title: '15.3 Attributes',
          desc: 'Storing data inside objects using instance attributes vs shared class attributes.',
          duration: '06:15',
          isFree: false,
          completed: false,
        },
        {
          id: '15-4',
          num: '04',
          title: '15.4 Methods',
          desc: 'Defining behaviors and actions inside classes that read and update object attributes.',
          duration: '07:10',
          isFree: false,
          completed: false,
        },
        {
          id: '15-5',
          num: '05',
          title: '15.5 Real-World Analogy',
          desc: 'Connecting OOP concepts to everyday examples like bank accounts, e-commerce products, and user profiles.',
          duration: '07:35',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 16,
      stepNum: 16,
      stepColor: '#7c3aed',
      title: 'OOP Advanced Concepts',
      desc: 'Master the four pillars of Object-Oriented Programming: Inheritance, Encapsulation, Polymorphism, and Abstraction.',
      isFree: false,
      progress: '0 / 5 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '16-1',
          num: '01',
          title: '16.1 Inheritance',
          desc: 'Creating child classes that inherit attributes and methods from parent classes using super().',
          duration: '07:15',
          isFree: false,
          completed: false,
        },
        {
          id: '16-2',
          num: '02',
          title: '16.2 Encapsulation',
          desc: 'Protecting internal object state with private/protected attributes and getter/setter methods.',
          duration: '06:40',
          isFree: false,
          completed: false,
        },
        {
          id: '16-3',
          num: '03',
          title: '16.3 Polymorphism',
          desc: 'Using a single method interface across different classes via method overriding and duck typing.',
          duration: '06:55',
          isFree: false,
          completed: false,
        },
        {
          id: '16-4',
          num: '04',
          title: '16.4 Abstraction',
          desc: 'Hiding complex implementation details behind clean interfaces and abstract base classes (ABC).',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '16-5',
          num: '05',
          title: '16.5 Real-World Examples',
          desc: 'Designing payment gateways, employee hierarchies, and notification systems using OOP pillars.',
          duration: '08:20',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 17,
      stepNum: 17,
      stepColor: '#0284c7',
      title: 'Working with APIs',
      desc: 'Connect Python applications to live web services using REST APIs, the requests library, JSON parsing, and API error handling.',
      isFree: false,
      progress: '0 / 5 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '17-1',
          num: '01',
          title: '17.1 API Basics',
          desc: 'Understanding REST APIs, HTTP methods (GET, POST), endpoints, headers, and status codes.',
          duration: '06:10',
          isFree: false,
          completed: false,
        },
        {
          id: '17-2',
          num: '02',
          title: '17.2 Using requests Library',
          desc: 'Sending HTTP requests in Python with requests.get(), query parameters, and inspecting response objects.',
          duration: '07:20',
          isFree: false,
          completed: false,
        },
        {
          id: '17-3',
          num: '03',
          title: '17.3 JSON Handling',
          desc: 'Parsing JSON API responses into Python dictionaries and lists using .json() and the json module.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '17-4',
          num: '04',
          title: '17.4 Real-World APIs',
          desc: 'Fetching live weather, currency exchange rates, and public datasets from real-world APIs.',
          duration: '08:15',
          isFree: false,
          completed: false,
        },
        {
          id: '17-5',
          num: '05',
          title: '17.5 Error Handling',
          desc: 'Handling network timeouts, 404/500 HTTP status errors, and invalid JSON responses safely.',
          duration: '06:40',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 18,
      stepNum: 18,
      stepColor: '#f97316',
      title: 'Automation with Python',
      desc: 'Save hours of manual effort by automating files, emails, browser tasks, and recurring schedules with Python.',
      isFree: false,
      progress: '0 / 5 Lessons',
      pct: 0,
      iconType: 'fx',
      completed: false,
      chapters: [
        {
          id: '18-1',
          num: '01',
          title: '18.1 Automating Files',
          desc: 'Organizing folders, batch renaming files, and moving downloads automatically using os and shutil.',
          duration: '07:10',
          isFree: false,
          completed: false,
        },
        {
          id: '18-2',
          num: '02',
          title: '18.2 Email Automation',
          desc: 'Sending automated reports, notifications, and attachments using Python smtplib and email modules.',
          duration: '07:30',
          isFree: false,
          completed: false,
        },
        {
          id: '18-3',
          num: '03',
          title: '18.3 Web Automation Basics',
          desc: 'Extracting web data and automating repetitive browser workflows with BeautifulSoup and Selenium/Playwright basics.',
          duration: '08:00',
          isFree: false,
          completed: false,
        },
        {
          id: '18-4',
          num: '04',
          title: '18.4 Scheduling Tasks',
          desc: 'Running Python scripts automatically at fixed intervals or daily times using the schedule library and OS schedulers.',
          duration: '06:35',
          isFree: false,
          completed: false,
        },
        {
          id: '18-5',
          num: '05',
          title: '18.5 Real-World Automation',
          desc: 'Building an end-to-end daily workflow that processes CSV data and sends an automated summary report.',
          duration: '08:45',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 19,
      stepNum: 19,
      stepColor: '#10b981',
      title: 'Data Handling & Processing',
      desc: 'Read and process tabular datasets with CSV files, clean messy records, and get started with Pandas DataFrames.',
      isFree: false,
      progress: '0 / 4 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '19-1',
          num: '01',
          title: '19.1 Working with CSV',
          desc: 'Reading, filtering, and writing structured CSV datasets using Python built-in csv module.',
          duration: '06:50',
          isFree: false,
          completed: false,
        },
        {
          id: '19-2',
          num: '02',
          title: '19.2 Data Cleaning',
          desc: 'Handling missing values, removing duplicate rows, trimming whitespace, and fixing inconsistent types.',
          duration: '07:45',
          isFree: false,
          completed: false,
        },
        {
          id: '19-3',
          num: '03',
          title: '19.3 Basic Pandas Introduction',
          desc: 'Loading CSVs into Pandas DataFrames, inspecting rows with .head() and .info(), and basic column operations.',
          duration: '08:20',
          isFree: false,
          completed: false,
        },
        {
          id: '19-4',
          num: '04',
          title: '19.4 Real-World Examples',
          desc: 'Cleaning and summarizing an e-commerce sales dataset to find top-performing products and regions.',
          duration: '08:30',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 20,
      stepNum: 20,
      stepColor: '#8b5cf6',
      title: 'Advanced Python Concepts',
      desc: 'Level up your Python mastery with lambda functions, elegant list comprehensions, memory-efficient generators, and function decorators.',
      isFree: false,
      progress: '0 / 4 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '20-1',
          num: '01',
          title: '20.1 Lambda Functions',
          desc: 'Writing concise anonymous functions in a single line with lambda, map(), and filter().',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '20-2',
          num: '02',
          title: '20.2 List Comprehension',
          desc: 'Constructing and filtering lists elegantly in one readable line instead of multi-line for loops.',
          duration: '07:15',
          isFree: false,
          completed: false,
        },
        {
          id: '20-3',
          num: '03',
          title: '20.3 Generators',
          desc: 'Producing infinite and massive data streams on demand using the yield keyword with low memory overhead.',
          duration: '07:45',
          isFree: false,
          completed: false,
        },
        {
          id: '20-4',
          num: '04',
          title: '20.4 Decorators Basics',
          desc: 'Wrapping functions to add execution timers, logging, and access control using Python @decorator syntax.',
          duration: '08:10',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 21,
      stepNum: 21,
      stepColor: '#0ea5e9',
      title: 'Database Integration',
      desc: 'Store and query persistent data with SQLite, connect Python with databases, and implement full CRUD operations.',
      isFree: false,
      progress: '0 / 4 Lessons',
      pct: 0,
      iconType: 'brackets',
      completed: false,
      chapters: [
        {
          id: '21-1',
          num: '01',
          title: '21.1 SQLite Basics',
          desc: 'Understanding relational databases, tables, primary keys, and setting up lightweight SQLite.',
          duration: '06:40',
          isFree: false,
          completed: false,
        },
        {
          id: '21-2',
          num: '02',
          title: '21.2 CRUD Operations',
          desc: 'Executing SQL statements to Create, Read, Update, and Delete table records.',
          duration: '08:10',
          isFree: false,
          completed: false,
        },
        {
          id: '21-3',
          num: '03',
          title: '21.3 Connecting Python with DB',
          desc: 'Using Python sqlite3 module, cursor execution, parameterized queries, and commit/rollback transactions.',
          duration: '07:30',
          isFree: false,
          completed: false,
        },
        {
          id: '21-4',
          num: '04',
          title: '21.4 Real-World Use',
          desc: 'Building a user authentication and store inventory database system completely in Python.',
          duration: '08:15',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 22,
      stepNum: 22,
      stepColor: '#059669',
      title: 'Web Development with Python – Introduction',
      desc: 'Get started with Python web development, build lightweight servers with Flask, design RESTful API endpoints, configure URL routing, and handle client requests.',
      isFree: false,
      progress: '0 / 4 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '22-1',
          num: '01',
          title: '22.1 Flask Basics',
          desc: 'Introduction to WSGI microframeworks, installing Flask, creating your first web app, and running local development servers.',
          duration: '06:30',
          isFree: false,
          completed: false,
        },
        {
          id: '22-2',
          num: '02',
          title: '22.2 Creating APIs',
          desc: 'Building REST endpoints with jsonify, returning JSON payloads, HTTP status codes, and API architecture fundamentals.',
          duration: '07:45',
          isFree: false,
          completed: false,
        },
        {
          id: '22-3',
          num: '03',
          title: '22.3 Routing',
          desc: 'Mapping URLs to view functions with @app.route(), dynamic route parameters (strings, ints), and HTTP method constraints (GET, POST).',
          duration: '07:15',
          isFree: false,
          completed: false,
        },
        {
          id: '22-4',
          num: '04',
          title: '22.4 Handling Requests',
          desc: 'Parsing incoming query parameters, form data, JSON request bodies using flask.request, and responding to client input.',
          duration: '08:20',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 23,
      stepNum: 23,
      stepColor: '#f59e0b',
      title: 'Python for Data Analysis and Visualization – Introduction',
      desc: 'Unlock insights from raw data using Pandas DataFrames, descriptive data analysis techniques, and clear visual charts with Matplotlib.',
      isFree: false,
      progress: '0 / 4 Lessons',
      pct: 0,
      iconType: 'database',
      completed: false,
      chapters: [
        {
          id: '23-1',
          num: '01',
          title: '23.1 Pandas Basics',
          desc: 'Understanding Series and DataFrames, loading tabular data, selecting columns, and inspecting datasets.',
          duration: '07:10',
          isFree: false,
          completed: false,
        },
        {
          id: '23-2',
          num: '02',
          title: '23.2 Data Analysis',
          desc: 'Filtering rows, calculating summary statistics with describe(), and grouping metrics with groupby().',
          duration: '08:00',
          isFree: false,
          completed: false,
        },
        {
          id: '23-3',
          num: '03',
          title: '23.3 Matplotlib Basics',
          desc: 'Plotting line charts, bar graphs, and histograms with custom titles, labels, colors, and legends.',
          duration: '07:30',
          isFree: false,
          completed: false,
        },
        {
          id: '23-4',
          num: '04',
          title: '23.4 Real-World Use',
          desc: 'End-to-end exploratory data analysis on sales and customer performance with actionable visualization.',
          duration: '08:30',
          isFree: false,
          completed: false,
        },
      ],
    },
    {
      id: 24,
      stepNum: 24,
      stepColor: '#f97316',
      title: 'Git, GitHub & Collaboration',
      desc: 'Track code changes with Git, publish repositories to GitHub, manage branches, and collaborate seamlessly on professional development teams.',
      isFree: false,
      progress: '0 / 4 Lessons',
      pct: 0,
      iconType: 'code',
      completed: false,
      chapters: [
        {
          id: '24-1',
          num: '01',
          title: '24.1 Git Basics',
          desc: 'Installing Git, initializing repositories, tracking changes with git add, git commit, and inspecting history with git log.',
          duration: '06:45',
          isFree: false,
          completed: false,
        },
        {
          id: '24-2',
          num: '02',
          title: '24.2 GitHub Usage',
          desc: 'Setting up GitHub, linking remote repositories, pushing code with git push, and pulling team updates with git pull.',
          duration: '07:20',
          isFree: false,
          completed: false,
        },
        {
          id: '24-3',
          num: '03',
          title: '24.3 Collaboration Workflow',
          desc: 'Branching workflows (git branch, git checkout -b), Pull Requests (PRs), conducting code reviews, and resolving merge conflicts.',
          duration: '08:15',
          isFree: false,
          completed: false,
        },
        {
          id: '24-4',
          num: '04',
          title: '24.4 Version Control',
          desc: 'Professional version control practices, .gitignore configuration, semantic tagging, and maintaining clean git history.',
          duration: '07:50',
          isFree: false,
          completed: false,
        },
      ],
    },
  ];

  const filteredTopics = topicsList.filter((t) => {
    if (filter === 'in-progress') return t.pct > 0 && t.pct < 100;
    if (filter === 'completed') return t.pct === 100;
    if (filter === 'not-started') return t.pct === 0;
    return true;
  });

  const handleAskAi = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!aiQuestion.trim()) return;
    soundEffects.playClick();
    const q = aiQuestion.trim();
    setAiQuestion('');
    setAiReply(`Thinking about: "${q}"... In Python, data analysis is powered by NumPy, Pandas, and Matplotlib. Try running real datasets in our Code Practice Lab!`);
  };

  return (
    <div className="pcd-wrapper">
      
      {/* ── Sub-header: Back Button & Breadcrumbs ── */}
      <div className="pcd-subnav-row">
        <button 
          className="pcd-back-btn"
          onClick={() => {
            soundEffects.playClick();
            onBack();
          }}
        >
          <ArrowLeft className="w-4 h-4 text-sky-600" />
          <span>Back</span>
        </button>

        <div className="pcd-breadcrumbs">
          <span 
            className="pcd-bc-item pcd-bc-link" 
            onClick={() => {
              soundEffects.playClick();
              onBack();
            }}
          >
            Home
          </span>
          <span className="pcd-bc-sep">&gt;</span>
          <span className="pcd-bc-item">Python</span>
          <span className="pcd-bc-sep">&gt;</span>
          <strong className="pcd-bc-item pcd-bc-current">Python for Data Analysis</strong>
        </div>
      </div>

      {/* ── Two Column Grid: Left Content (~68%) + Right Sidebar (~32%) ── */}
      <div className="pcd-main-grid">

        {/* ═══════════ LEFT CONTENT COLUMN ═══════════ */}
        <div className="pcd-left-column">

          {/* 1. Hero Banner Card */}
          <div className="pcd-hero-card">
            <video
              className="pcd-hero-video-bg"
              src="/videos/python_hero_banner.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="pcd-hero-video-overlay" />
            {/* 3D Python Logo on glowing pedestal */}
            <div className="pcd-hero-3d-left">
              <div className="pcd-pedestal-ring" />
              <img 
                src="/images/python_logo_3d_hd.png" 
                alt="Python 3D" 
                className="pcd-hero-py-img"
              />
              <div className="pcd-hero-orb-sm orb-1" />
              <div className="pcd-hero-orb-sm orb-2" />
            </div>

            {/* Banner Main Information */}
            <div className="pcd-hero-info">
              <h1 className="pcd-hero-title">Python for Data Analysis</h1>
              <p className="pcd-hero-subtitle">
                From basics to advanced. Learn with AI-powered videos, practice, games, real projects and interview preparation.
              </p>
            </div>

            {/* Banner Right Stats & CTA Button */}
            <div className="pcd-hero-right-action">
              <div className="pcd-hero-stats-row">
                <div className="pcd-stat-pill">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  <span>24 Lessons</span>
                </div>
                <div className="pcd-stat-pill">
                  <FolderKanban className="w-3.5 h-3.5 text-sky-600" />
                  <span>6 Projects</span>
                </div>
                <div className="pcd-stat-pill">
                  <Wrench className="w-3.5 h-3.5 text-sky-600" />
                  <span>5+ Tools</span>
                </div>
              </div>

              <button 
                className="pcd-hero-continue-btn"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenTopic(1, 'learn');
                }}
              >
                Continue Learning →
              </button>
            </div>
          </div>

          {/* 2. Filter Pills Row */}
          <div className="pcd-filters-row">
            <button
              className={`pcd-filter-pill ${filter === 'all' ? 'active-filter' : ''}`}
              onClick={() => {
                soundEffects.playClick();
                setFilter('all');
              }}
            >
              All
            </button>
            <button
              className={`pcd-filter-pill ${filter === 'in-progress' ? 'active-filter' : ''}`}
              onClick={() => {
                soundEffects.playClick();
                setFilter('in-progress');
              }}
            >
              In Progress
            </button>
            <button
              className={`pcd-filter-pill ${filter === 'not-started' ? 'active-filter' : ''}`}
              onClick={() => {
                soundEffects.playClick();
                setFilter('not-started');
              }}
            >
              Not Started
            </button>
            <button
              className={`pcd-filter-pill ${filter === 'completed' ? 'active-filter' : ''}`}
              onClick={() => {
                soundEffects.playClick();
                setFilter('completed');
              }}
            >
              Completed
            </button>
          </div>

          {/* 3. Topic Cards Stack (1 to 5) with Dropdown Chapters */}
          <div className="pcd-topics-stack">
            {filteredTopics.map((topic) => {
              const isExpanded = expandedTopics.has(topic.id);
              return (
                <div 
                  key={topic.id} 
                  className={`pcd-topic-card ${!topic.isFree ? 'is-locked-card' : ''} ${isExpanded ? 'is-expanded-card' : ''}`}
                >
                  {/* Topic Card Top Header Row */}
                  <div 
                    className="pcd-topic-header-row"
                    onClick={() => toggleTopic(topic.id)}
                  >
                    {/* Far Left Step Number Badge */}
                    <div 
                      className="pcd-step-num-badge" 
                      style={{ background: topic.stepColor }}
                    >
                      {topic.stepNum}
                    </div>

                    {/* 3D Graphic Box */}
                    <div className="pcd-topic-3d-box">
                      {topic.iconType === 'python' && (
                        <div className="pcd-3d-pedestal-wrap">
                          <img src="/images/python_logo_3d_hd.png" alt="Python" className="pcd-3d-icon-img" />
                        </div>
                      )}
                      {topic.iconType === 'code' && (
                        <div className="pcd-code-box">
                          <span className="pcd-code-sym">&lt;/&gt;</span>
                        </div>
                      )}
                      {topic.iconType === 'database' && (
                        <div className="pcd-database-box">
                          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                            <defs>
                              <linearGradient id="dbGradPcd" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#c084fc" />
                                <stop offset="50%" stopColor="#9333ea" />
                                <stop offset="100%" stopColor="#6b21a8" />
                              </linearGradient>
                            </defs>
                            <ellipse cx="16" cy="7" rx="10" ry="3.5" fill="#d8b4fe" />
                            <path d="M6 7V13C6 15 10.5 16.5 16 16.5C21.5 16.5 26 15 26 13V7" fill="url(#dbGradPcd)" />
                            <ellipse cx="16" cy="13" rx="10" ry="3.5" fill="#c084fc" opacity="0.6" />
                            <path d="M6 13V19C6 21 10.5 22.5 16 22.5C21.5 22.5 26 21 26 19V13" fill="url(#dbGradPcd)" />
                            <ellipse cx="16" cy="19" rx="10" ry="3.5" fill="#a855f7" opacity="0.6" />
                            <path d="M6 19V25C6 27 10.5 28.5 16 28.5C21.5 28.5 26 27 26 25V19" fill="url(#dbGradPcd)" />
                          </svg>
                        </div>
                      )}
                      {topic.iconType === 'brackets' && (
                        <div className="pcd-brackets-box">
                          <span className="pcd-curly-sym">{'{ }'}</span>
                        </div>
                      )}
                      {topic.iconType === 'fx' && (
                        <div className="pcd-fx-box">
                          <span className="pcd-fx-sym">fx</span>
                        </div>
                      )}
                    </div>

                    {/* Topic Info & Chips */}
                    <div className="pcd-topic-body">
                      <div className="pcd-topic-title-row">
                        <strong className="pcd-topic-title">{topic.title}</strong>
                        {topic.isFree ? (
                          <span className="pcd-free-badge">FREE</span>
                        ) : (
                          <span className="pcd-locked-badge" title="Locked Module">
                            <Lock className="w-3 h-3 text-rose-500 inline mr-0.5" />
                          </span>
                        )}
                        <span className="pcd-chapter-pill-count">
                          {topic.chapters.length} Chapters
                        </span>
                      </div>

                      <p className="pcd-topic-desc">{topic.desc}</p>

                      {/* 5 Integrated Activity Chips */}
                      <div className={`pcd-chips-strip ${!topic.isFree ? 'muted-chips' : ''}`}>
                        <button 
                          className="pcd-chip chip-video"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (topic.isFree) onOpenTopic(topic.id, 'learn');
                            else onOpenUnlockModal(topic.title);
                          }}
                        >
                          <Video className="w-3 h-3" />
                          <span>Video</span>
                        </button>

                        <button 
                          className="pcd-chip chip-mcq"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (topic.isFree) onOpenTopic(topic.id, 'practice');
                            else onOpenUnlockModal(topic.title);
                          }}
                        >
                          <FileText className="w-3 h-3" />
                          <span>MCQ</span>
                        </button>

                        <button 
                          className="pcd-chip chip-game"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (topic.isFree) onOpenTopic(topic.id, 'play');
                            else onOpenUnlockModal(topic.title);
                          }}
                        >
                          <Gamepad2 className="w-3 h-3" />
                          <span>Game</span>
                        </button>

                        <button 
                          className="pcd-chip chip-code"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (topic.isFree) onOpenTopic(topic.id === 1 ? 2 : topic.id, 'code');
                            else onOpenUnlockModal(topic.title);
                          }}
                        >
                          <Code2 className="w-3 h-3" />
                          <span>Hackathon/DSA Practice</span>
                        </button>

                        <button 
                          className="pcd-chip chip-interview"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (topic.isFree) onOpenTopic(topic.id, 'interview');
                            else onOpenUnlockModal(topic.title);
                          }}
                        >
                          <Mic className="w-3 h-3" />
                          <span>Mock Interview</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Progress & Action */}
                    <div className="pcd-topic-right">
                      <div className="pcd-progress-block">
                        <span className="pcd-prog-lessons">{topic.progress}</span>
                        <div className="pcd-prog-bar-row">
                          <div className="pcd-prog-bar">
                            <div className="pcd-prog-fill" style={{ width: `${topic.pct}%` }} />
                          </div>
                          <span className="pcd-prog-pct">{topic.pct}%</span>
                        </div>
                      </div>

                      {topic.isFree ? (
                        <button 
                          className="pcd-action-continue-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            soundEffects.playClick();
                            onOpenTopic(topic.id, 'learn');
                          }}
                        >
                          Continue →
                        </button>
                      ) : (
                        <button 
                          className="pcd-action-unlock-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            soundEffects.playClick();
                            onOpenUnlockModal(topic.title);
                          }}
                        >
                          <Lock className="w-3 h-3 inline mr-1 text-rose-500" />
                          Unlock Module
                        </button>
                      )}

                      {/* Dropdown Chevron Toggle Button */}
                      <button 
                        className={`pcd-arrow-circle ${isExpanded ? 'is-expanded' : ''}`}
                        title={isExpanded ? 'Collapse chapters' : 'Expand chapters'}
                        aria-label={isExpanded ? 'Collapse chapters' : 'Expand chapters'}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTopic(topic.id);
                        }}
                      >
                        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-sky-600' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Dropdown with Chapters List */}
                  {isExpanded && (
                    <div className="pcd-dropdown-chapters-wrapper">
                      <div className="pcd-dropdown-header">
                        <div className="pcd-dh-title">
                          <BookOpen className="w-3.5 h-3.5 text-sky-600 inline mr-1.5" />
                          <span>Chapters in this Topic</span>
                        </div>
                        <span className="pcd-dh-count">{topic.chapters.length} Chapters • Hands-on Lab & Activities</span>
                      </div>

                      <div className="pcd-dropdown-chapters-list">
                        {topic.chapters.map((ch) => (
                          <div 
                            key={ch.id} 
                            className={`pcd-chapter-row ${!ch.isFree ? 'is-locked-ch' : ''} ${ch.completed ? 'is-completed-ch' : ''}`}
                          >
                            {/* Chapter Index Badge */}
                            <div className="pcd-ch-num-badge">
                              {ch.completed ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                              ) : ch.isFree ? (
                                <span>{ch.num}</span>
                              ) : (
                                <Lock className="w-3 h-3 text-rose-500" />
                              )}
                            </div>

                            {/* Chapter Content & Actions */}
                            <div className="pcd-ch-info">
                              <div className="pcd-ch-title-row">
                                <span className="pcd-ch-title">{ch.title}</span>
                                <span className="pcd-ch-duration">
                                  <Clock className="w-3 h-3 inline mr-1 text-sky-500" />
                                  {ch.duration}
                                </span>
                                {ch.isFree ? (
                                  <span className="pcd-ch-free-tag">FREE</span>
                                ) : (
                                  <span className="pcd-ch-lock-tag">
                                    <Lock className="w-2.5 h-2.5 inline mr-0.5 text-rose-500" />
                                    Locked
                                  </span>
                                )}
                              </div>

                              <p className="pcd-ch-desc">{ch.desc}</p>

                              {/* Chapter 5 Activity Action Chips */}
                              <div className="pcd-ch-actions-row">
                                {(() => {
                                  const targetTopicId = parseInt(ch.num, 10) || 1;
                                  return (
                                    <>
                                      <button 
                                        className="pcd-ch-act-chip act-video"
                                        onClick={() => {
                                          if (ch.isFree) onOpenTopic(targetTopicId, 'learn');
                                          else onOpenUnlockModal(topic.title);
                                        }}
                                      >
                                        <Play className="w-2.5 h-2.5 fill-current" />
                                        <span>Video</span>
                                      </button>
                                      <button 
                                        className="pcd-ch-act-chip act-mcq"
                                        onClick={() => {
                                          if (ch.isFree) onOpenTopic(targetTopicId, 'practice');
                                          else onOpenUnlockModal(topic.title);
                                        }}
                                      >
                                        <FileText className="w-2.5 h-2.5" />
                                        <span>MCQ</span>
                                      </button>
                                      <button 
                                        className="pcd-ch-act-chip act-game"
                                        onClick={() => {
                                          if (ch.isFree) onOpenTopic(targetTopicId, 'play');
                                          else onOpenUnlockModal(topic.title);
                                        }}
                                      >
                                        <Gamepad2 className="w-2.5 h-2.5" />
                                        <span>Game</span>
                                      </button>
                                      {ch.id !== '1-1' && (
                                        <button 
                                          className="pcd-ch-act-chip act-code"
                                          onClick={() => {
                                            if (ch.isFree) onOpenTopic(targetTopicId, 'code');
                                            else onOpenUnlockModal(topic.title);
                                          }}
                                        >
                                          <Code2 className="w-2.5 h-2.5" />
                                          <span>Code</span>
                                        </button>
                                      )}
                                      <button 
                                        className="pcd-ch-act-chip act-interview"
                                        onClick={() => {
                                          if (ch.isFree) onOpenTopic(targetTopicId, 'interview');
                                          else onOpenUnlockModal(topic.title);
                                        }}
                                      >
                                        <Mic className="w-2.5 h-2.5" />
                                        <span>Interview</span>
                                      </button>
                                    </>
                                  );
                                })()}
                              </div>
                            </div>

                            {/* Chapter Direct CTA */}
                            <div className="pcd-ch-cta">
                              {ch.isFree ? (
                                <button 
                                  className={`pcd-ch-start-btn ${ch.completed ? 'btn-replay' : 'btn-start'}`}
                                  onClick={() => {
                                    soundEffects.playClick();
                                    const targetTopicId = parseInt(ch.num, 10) || 1;
                                    onOpenTopic(targetTopicId, 'learn');
                                  }}
                                >
                                  {ch.completed ? 'Review' : 'Start'}
                                  <ChevronRight className="w-3.5 h-3.5 inline ml-1" />
                                </button>
                              ) : (
                                <button 
                                  className="pcd-ch-unlock-btn"
                                  onClick={() => {
                                    soundEffects.playClick();
                                    onOpenUnlockModal(topic.title);
                                  }}
                                >
                                  <Lock className="w-3 h-3 inline mr-1 text-rose-500" />
                                  Unlock
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ═══════════ RIGHT SIDEBAR COLUMN ═══════════ */}
        <div className="pcd-right-column">

          {/* 1. Your Progress Card */}
          <div className="pcd-side-card">
            <div className="pcd-side-card-header">
              <strong className="pcd-side-title">Your Progress</strong>
              <button 
                className="pcd-view-details-link"
                onClick={() => onOpenTopic(1, 'score')}
              >
                View Details →
              </button>
            </div>

            <div className="pcd-progress-card-content">
              {/* Donut Gauge (50%) */}
              <div className="pcd-donut-wrapper">
                <svg className="pcd-donut-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" className="pcd-donut-bg" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="38" 
                    className="pcd-donut-fill" 
                    strokeDasharray="238.76"
                    strokeDashoffset="119.38" // 50%
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="pcd-donut-center">
                  <strong className="pcd-donut-number">50%</strong>
                </div>
              </div>

              {/* Checklist items */}
              <div className="pcd-progress-checklist">
                <div className="pcd-check-item">
                  <span className="pcd-check-dot" />
                  <span className="pcd-check-text">12/24 Lessons Completed</span>
                </div>
                <div className="pcd-check-item">
                  <span className="pcd-check-dot" />
                  <span className="pcd-check-text">8 Lessons Done</span>
                </div>
                <div className="pcd-check-item">
                  <span className="pcd-check-dot" />
                  <span className="pcd-check-text">3 Quizzes Attempted</span>
                </div>
                <div className="pcd-check-item">
                  <span className="pcd-check-dot" />
                  <span className="pcd-check-text">1 Project Started</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Next Lesson Card */}
          <div className="pcd-side-card">
            <strong className="pcd-side-title block mb-3">Next Lesson</strong>

            <div className="pcd-next-lesson-row">
              <div className="pcd-nl-thumb-wrap">
                <img 
                  src="/images/python_logo_3d_hd.png" 
                  alt="Python Lesson" 
                  className="pcd-nl-thumb-img" 
                />
                <div className="pcd-nl-play-badge">
                  <div className="pcd-nl-play-circle">
                    <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="pcd-nl-meta-col">
                <strong className="pcd-nl-title">What is Python?</strong>
                <span className="pcd-nl-sub">Python Introduction &amp; Setup</span>
                <div className="pcd-nl-pills-row">
                  <span className="pcd-nl-dur-pill">
                    <Clock className="w-3 h-3 text-sky-500" />
                    <span>18:20</span>
                  </span>
                  <span className="pcd-nl-video-pill">
                    <Video className="w-3 h-3 text-sky-500" />
                    <span>Video</span>
                  </span>
                </div>
              </div>
            </div>

            <button 
              className="pcd-nl-continue-btn"
              onClick={() => {
                soundEffects.playClick();
                onOpenTopic(1, 'learn');
              }}
            >
              Continue Learning →
            </button>
          </div>

          {/* 3. Learning Tools Card */}
          <div className="pcd-side-card">
            <strong className="pcd-side-title block mb-3">Learning Tools</strong>

            <div className="pcd-tools-grid">
              <div 
                className="pcd-tool-btn tool-purple"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenTopic(1, 'practice');
                }}
              >
                <div className="pcd-tool-icon-sq bg-purple-50 text-purple-600 border border-purple-200">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="pcd-tool-name">Practice Questions</span>
              </div>

              <div 
                className="pcd-tool-btn tool-orange"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenTopic(1, 'play');
                }}
              >
                <div className="pcd-tool-icon-sq bg-orange-50 text-orange-600 border border-orange-200">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <span className="pcd-tool-name">Hackathon/DSA Practice</span>
              </div>

              <div 
                className="pcd-tool-btn tool-green"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenTopic(1, 'code');
                }}
              >
                <div className="pcd-tool-icon-sq bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="pcd-tool-name">Code Practice</span>
              </div>

              <div 
                className="pcd-tool-btn tool-pink"
                onClick={() => {
                  soundEffects.playClick();
                  onOpenTopic(1, 'interview');
                }}
              >
                <div className="pcd-tool-icon-sq bg-rose-50 text-rose-600 border border-rose-200">
                  <Mic className="w-4 h-4" />
                </div>
                <span className="pcd-tool-name">Mock Interview</span>
              </div>
            </div>
          </div>

          {/* 4. AI Mentor Card */}
          <div className="pcd-side-card pcd-ai-mentor-card">
            <div className="flex items-center justify-between mb-2">
              <strong className="pcd-side-title">AI Mentor</strong>
            </div>

            <div className="pcd-ai-body-row">
              <div className="pcd-ai-chat-bubble">
                {aiReply ? (
                  <p className="text-xs text-slate-700 font-semibold">{aiReply}</p>
                ) : (
                  <p className="text-xs text-slate-600 font-medium">
                    Ask anything about Python. Get explanations, code examples, practice questions, real-world use cases and more.
                  </p>
                )}
              </div>

              <div className="pcd-ai-robot-wrap">
                <img 
                  src="/images/powergreen_ai_bot.png" 
                  alt="AI Mentor Robot" 
                  className="pcd-ai-robot-img" 
                />
              </div>
            </div>

            <form onSubmit={handleAskAi} className="pcd-ai-input-form mt-3">
              <input
                type="text"
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder="Ask a question..."
                className="pcd-ai-input"
              />
              <button type="submit" className="pcd-ai-send-btn" title="Send question">
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};
