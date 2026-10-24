import React, { useState, useEffect } from 'react';
import {
  ChevronRight, ChevronDown, ChevronUp, Play, Clock, FileText, Gamepad2, Code2, Mic,
  BarChart3, CheckCircle2, BookOpen, FolderKanban, Wrench, ArrowRight, Zap, Award,
  Timer, Calculator, Braces, Box, Sparkles, Bot, Circle, Database, Globe, GitBranch,
  Terminal, Layers, Cpu, Sliders, TrendingUp, LineChart, ShieldCheck, Binary,
} from 'lucide-react';
import type { WorkspaceStepId } from './PythonTopicWorkspace';
import { getLearnerTelemetry } from '../../services/realAuthService';
import { MobilePythonChapterView } from './mobile/MobilePythonChapterView';
import './PythonChapterView.css';

interface Props {
  userName: string;
  onBack: () => void;
  onOpenTopic: (topicId: number, step?: WorkspaceStepId) => void;
  onOpenUnlockModal: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
}

export type LessonStatus = 'completed' | 'progress' | 'todo';
export interface Lesson { title: string; time: string; status: LessonStatus }
export interface Topic {
  id: number;
  title: string;
  desc: string;
  free?: boolean;
  color: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

export const TOPICS: Topic[] = [
  {
    id: 1,
    title: 'Introduction to Programming & Python Thinking',
    free: true,
    color: '#0284c7',
    desc: 'Foundations of coding: What is programming, Python overview, Real-world applications in analytics & AI, Python interpreter, VS Code & Jupyter setup, and your first Python program.',
    icon: <img src="/images/python_logo_3d_hd.png" alt="" className="w-full h-full object-contain" />,
    lessons: [
      { title: '1.1 What is Programming? – Real-Life Examples', time: '07:40', status: 'todo' },
      { title: '1.2 What Is Python?', time: '06:15', status: 'todo' },
      { title: '1.3 Why Learn Python?', time: '05:45', status: 'todo' },
      { title: '1.4 Real-World Applications of Python', time: '06:10', status: 'todo' },
      { title: '1.5 Python for Data Analytics and AI', time: '07:20', status: 'todo' },
      { title: '1.6 How Python Code Works', time: '06:30', status: 'todo' },
      { title: '1.7 Python Interpreter and Execution', time: '05:15', status: 'todo' },
      { title: '1.8 Installing Python', time: '07:40', status: 'todo' },
      { title: '1.9 Setting Up VS Code and Jupyter Notebook', time: '08:00', status: 'todo' },
      { title: '1.10 Writing Your First Python Program', time: '06:45', status: 'todo' },
    ],
  },
  {
    id: 2,
    title: 'Variables & Data Types',
    color: '#7c3aed',
    desc: 'Memory and storage in Python: Variables, naming rules, integers, floats, strings, booleans, None type, type conversion with type() and casting, dynamic typing, and practical use cases.',
    icon: <FileText />,
    lessons: [
      { title: '2.1 What Are Variables?', time: '06:15', status: 'todo' },
      { title: '2.2 Variable Naming Rules', time: '05:40', status: 'todo' },
      { title: '2.3 Assigning Values to Variables', time: '06:30', status: 'todo' },
      { title: '2.4 Integers and Floats', time: '07:10', status: 'todo' },
      { title: '2.5 Strings and Booleans', time: '08:20', status: 'todo' },
      { title: '2.6 Introduction to None', time: '05:50', status: 'todo' },
      { title: '2.7 Checking Data Types Using type()', time: '06:00', status: 'todo' },
      { title: '2.8 Type Conversion and Casting', time: '07:25', status: 'todo' },
      { title: '2.9 Dynamic Typing', time: '06:40', status: 'todo' },
      { title: '2.10 Practical Examples of Variables', time: '08:00', status: 'todo' },
    ],
  },
  {
    id: 3,
    title: 'Input, Output & User Interaction',
    color: '#059669',
    desc: 'Interactive programs: print() functions, input(), separators & end parameters, string formatting with f-strings, numeric casting, interactive user workflows, and building a calculator.',
    icon: <Terminal />,
    lessons: [
      { title: '3.1 Using print()', time: '05:40', status: 'todo' },
      { title: '3.2 Using input()', time: '06:10', status: 'todo' },
      { title: '3.3 Displaying Multiple Values', time: '06:30', status: 'todo' },
      { title: '3.4 Separators and End Parameters', time: '07:00', status: 'todo' },
      { title: '3.5 Formatting Output', time: '07:15', status: 'todo' },
      { title: '3.6 Formatted Strings (f-strings)', time: '08:00', status: 'todo' },
      { title: '3.7 Taking Numeric Input', time: '06:45', status: 'todo' },
      { title: '3.8 Converting User Input', time: '07:20', status: 'todo' },
      { title: '3.9 Building Simple Interactive Programs', time: '08:30', status: 'todo' },
      { title: '3.10 Creating a Basic Calculator', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 4,
    title: 'Operators & Logic',
    color: '#d97706',
    desc: 'Python calculations & logic: Arithmetic, comparison, assignment, logical operators (and, or, not), membership (in), identity (is), operator precedence, and compound calculations.',
    icon: <Calculator />,
    lessons: [
      { title: '4.1 Arithmetic Operators', time: '06:00', status: 'todo' },
      { title: '4.2 Comparison Operators', time: '06:40', status: 'todo' },
      { title: '4.3 Assignment Operators', time: '05:50', status: 'todo' },
      { title: '4.4 Logical Operators', time: '07:15', status: 'todo' },
      { title: '4.5 Membership Operators', time: '06:30', status: 'todo' },
      { title: '4.6 Identity Operators', time: '06:10', status: 'todo' },
      { title: '4.7 Operator Precedence', time: '07:00', status: 'todo' },
      { title: '4.8 Working with Boolean Values', time: '06:20', status: 'todo' },
      { title: '4.9 Combining Multiple Conditions', time: '08:00', status: 'todo' },
      { title: '4.10 Practical Calculation Problems', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 5,
    title: 'Conditional Statements',
    color: '#dc2626',
    desc: 'Decision-making: if, if-else, if-elif-else ladders, nested conditions, boolean logic, truthy and falsy values, ternary operators, grade calculators, and business decision logic.',
    icon: <Sliders />,
    lessons: [
      { title: '5.1 Understanding Decision-Making', time: '06:00', status: 'todo' },
      { title: '5.2 if Statements', time: '06:30', status: 'todo' },
      { title: '5.3 if-else Statements', time: '07:00', status: 'todo' },
      { title: '5.4 if-elif-else', time: '07:45', status: 'todo' },
      { title: '5.5 Nested Conditions', time: '08:15', status: 'todo' },
      { title: '5.6 Combining Conditions with and, or and not', time: '07:30', status: 'todo' },
      { title: '5.7 Truthy and Falsy Values', time: '06:50', status: 'todo' },
      { title: '5.8 Conditional Expressions', time: '07:10', status: 'todo' },
      { title: '5.9 Grade Calculator', time: '08:40', status: 'todo' },
      { title: '5.10 Business Rules Using Conditional Logic', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 6,
    title: 'Loops — Repeating Tasks Automatically',
    color: '#0891b2',
    desc: 'Automating repetition: for loops, while loops, range(), loop control with break, continue, and pass, nested loops, iterating data structures, and automation problems.',
    icon: <Zap />,
    lessons: [
      { title: '6.1 Introduction to Loops', time: '06:10', status: 'todo' },
      { title: '6.2 for Loops', time: '07:00', status: 'todo' },
      { title: '6.3 while Loops', time: '07:30', status: 'todo' },
      { title: '6.4 Using range()', time: '06:45', status: 'todo' },
      { title: '6.5 break Statement', time: '06:20', status: 'todo' },
      { title: '6.6 continue Statement', time: '06:15', status: 'todo' },
      { title: '6.7 pass Statement', time: '05:30', status: 'todo' },
      { title: '6.8 Nested Loops', time: '08:00', status: 'todo' },
      { title: '6.9 Iterating Through Collections', time: '07:40', status: 'todo' },
      { title: '6.10 Practical Loop-Based Problems', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 7,
    title: 'Strings — Working with Text Data',
    color: '#4f46e5',
    desc: 'Text processing: Indexing, slicing, immutability, upper(), lower(), title(), capitalize(), strip(), replace(), split(), join(), find(), count(), and clean f-string formatting.',
    icon: <FileText />,
    lessons: [
      { title: '7.1 Creating Strings', time: '05:40', status: 'todo' },
      { title: '7.2 String Indexing', time: '06:30', status: 'todo' },
      { title: '7.3 String Slicing', time: '07:15', status: 'todo' },
      { title: '7.4 String Immutability', time: '06:00', status: 'todo' },
      { title: '7.5 upper() and lower()', time: '06:20', status: 'todo' },
      { title: '7.6 title() and capitalize()', time: '06:10', status: 'todo' },
      { title: '7.7 strip() and replace()', time: '07:00', status: 'todo' },
      { title: '7.8 split() and join()', time: '07:45', status: 'todo' },
      { title: '7.9 find() and count()', time: '06:50', status: 'todo' },
      { title: '7.10 f-Strings and Text Formatting', time: '08:15', status: 'todo' },
    ],
  },
  {
    id: 8,
    title: 'Lists — Storing Multiple Values',
    color: '#16a34a',
    desc: 'Ordered collections: List creation, indexing & slicing, updating items, append(), extend(), insert(), remove(), pop(), clear(), sorting, nested lists, and list comprehensions.',
    icon: <Layers />,
    lessons: [
      { title: '8.1 Introduction to Lists', time: '06:15', status: 'todo' },
      { title: '8.2 Creating and Accessing Lists', time: '06:50', status: 'todo' },
      { title: '8.3 Indexing and Slicing', time: '07:10', status: 'todo' },
      { title: '8.4 Updating List Elements', time: '06:30', status: 'todo' },
      { title: '8.5 append() and extend()', time: '07:20', status: 'todo' },
      { title: '8.6 insert() and remove()', time: '07:00', status: 'todo' },
      { title: '8.7 pop() and clear()', time: '06:40', status: 'todo' },
      { title: '8.8 Sorting and Reversing Lists', time: '07:30', status: 'todo' },
      { title: '8.9 Nested Lists', time: '08:15', status: 'todo' },
      { title: '8.10 List Comprehensions', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 9,
    title: 'Tuples, Sets & Dictionaries',
    color: '#9333ea',
    desc: 'Key-value & set data structures: Tuples and immutability, Sets and mathematical set operations (union, intersection, difference), Dictionaries, keys, values, and nested lookups.',
    icon: <Braces />,
    lessons: [
      { title: '9.1 Introduction to Tuples', time: '06:10', status: 'todo' },
      { title: '9.2 Tuple Indexing and Slicing', time: '06:40', status: 'todo' },
      { title: '9.3 Tuple Immutability', time: '06:00', status: 'todo' },
      { title: '9.4 Creating Sets', time: '06:30', status: 'todo' },
      { title: '9.5 Adding and Removing Set Elements', time: '06:50', status: 'todo' },
      { title: '9.6 Set Union, Intersection and Difference', time: '07:45', status: 'todo' },
      { title: '9.7 Creating Dictionaries', time: '07:20', status: 'todo' },
      { title: '9.8 Dictionary Keys and Values', time: '07:50', status: 'todo' },
      { title: '9.9 Dictionary Methods', time: '08:15', status: 'todo' },
      { title: '9.10 Nested Dictionaries and Practical Examples', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 10,
    title: 'Functions — Reusable Code Blocks',
    color: '#ea580c',
    desc: 'Modular software design: def keyword, parameters vs arguments, return values, positional and keyword arguments, default values, *args and **kwargs, local & global scope.',
    icon: <Code2 />,
    lessons: [
      { title: '10.1 What Are Functions?', time: '06:20', status: 'todo' },
      { title: '10.2 Built-in vs User-Defined Functions', time: '06:50', status: 'todo' },
      { title: '10.3 Defining Functions with def', time: '07:30', status: 'todo' },
      { title: '10.4 Parameters and Arguments', time: '07:45', status: 'todo' },
      { title: '10.5 Return Values', time: '07:15', status: 'todo' },
      { title: '10.6 Positional and Keyword Arguments', time: '07:35', status: 'todo' },
      { title: '10.7 Default Arguments', time: '06:40', status: 'todo' },
      { title: '10.8 *args and **kwargs', time: '08:50', status: 'todo' },
      { title: '10.9 Local and Global Scope', time: '07:20', status: 'todo' },
      { title: '10.10 Writing Reusable Functions', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 11,
    title: 'Problem Solving & Logic Building',
    color: '#0d9488',
    desc: 'Algorithmic thinking: Problem decomposition, pseudocode, flowcharts, code tracing, debugging logic bugs, number challenges, string parsing, and real-world logic building exercises.',
    icon: <Cpu />,
    lessons: [
      { title: '11.1 Understanding a Problem Statement', time: '06:45', status: 'todo' },
      { title: '11.2 Breaking Problems into Smaller Steps', time: '07:15', status: 'todo' },
      { title: '11.3 Algorithms and Pseudocode', time: '08:00', status: 'todo' },
      { title: '11.4 Flowcharts and Logical Thinking', time: '07:30', status: 'todo' },
      { title: '11.5 Tracing Code Step by Step', time: '08:20', status: 'todo' },
      { title: '11.6 Finding and Fixing Logical Errors', time: '08:45', status: 'todo' },
      { title: '11.7 Number-Based Coding Problems', time: '09:15', status: 'todo' },
      { title: '11.8 String-Based Coding Problems', time: '09:00', status: 'todo' },
      { title: '11.9 List and Dictionary Challenges', time: '09:30', status: 'todo' },
      { title: '11.10 Real-World Logic-Building Exercises', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 12,
    title: 'File Handling — Working with Files',
    color: '#2563eb',
    desc: 'Disk I/O operations: Opening and closing files, reading text, writing & appending, context managers with `with`, file paths, reading CSVs, reading/writing JSON, encoding, and batch files.',
    icon: <FileText />,
    lessons: [
      { title: '12.1 Understanding File Handling', time: '06:15', status: 'todo' },
      { title: '12.2 Opening and Closing Files', time: '06:45', status: 'todo' },
      { title: '12.3 Reading Text Files', time: '07:20', status: 'todo' },
      { title: '12.4 Writing and Appending Files', time: '07:50', status: 'todo' },
      { title: '12.5 Using with to Manage Files', time: '07:30', status: 'todo' },
      { title: '12.6 Working with File Paths', time: '06:50', status: 'todo' },
      { title: '12.7 Reading CSV Files', time: '08:15', status: 'todo' },
      { title: '12.8 Reading and Writing JSON', time: '08:40', status: 'todo' },
      { title: '12.9 Handling File Encoding', time: '07:10', status: 'todo' },
      { title: '12.10 Processing Multiple Files', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 13,
    title: 'Exception Handling — Handling Errors',
    color: '#b91c1c',
    desc: 'Fault-tolerant coding: Syntax vs runtime exceptions, try-except blocks, handling specific errors, multiple handlers, else and finally clauses, raising exceptions, and custom error classes.',
    icon: <ShieldCheck />,
    lessons: [
      { title: '13.1 Syntax Errors vs Runtime Errors', time: '06:20', status: 'todo' },
      { title: '13.2 Understanding Exceptions', time: '06:50', status: 'todo' },
      { title: '13.3 try and except', time: '07:30', status: 'todo' },
      { title: '13.4 Handling Specific Exceptions', time: '08:00', status: 'todo' },
      { title: '13.5 Multiple Exception Handlers', time: '07:45', status: 'todo' },
      { title: '13.6 else and finally', time: '07:15', status: 'todo' },
      { title: '13.7 Raising Exceptions with raise', time: '07:30', status: 'todo' },
      { title: '13.8 Creating Custom Exceptions', time: '08:20', status: 'todo' },
      { title: '13.9 Debugging Python Programs', time: '08:50', status: 'todo' },
      { title: '13.10 Writing Reliable Code', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 14,
    title: 'Modules, Packages & Libraries',
    color: '#0284c7',
    desc: 'Code organization & dependencies: Modules, importing syntax, math, random and statistics modules, custom module creation, packages, pip package manager, virtual environments, requirements.txt.',
    icon: <Box />,
    lessons: [
      { title: '14.1 What Are Modules?', time: '06:10', status: 'todo' },
      { title: '14.2 Importing Modules', time: '06:40', status: 'todo' },
      { title: '14.3 Using import and from', time: '07:00', status: 'todo' },
      { title: '14.4 Built-in Modules', time: '07:30', status: 'todo' },
      { title: '14.5 math, random and statistics', time: '08:15', status: 'todo' },
      { title: '14.6 Creating Custom Modules', time: '08:00', status: 'todo' },
      { title: '14.7 Understanding Packages', time: '07:20', status: 'todo' },
      { title: '14.8 Installing Libraries Using pip', time: '07:45', status: 'todo' },
      { title: '14.9 Virtual Environments', time: '08:30', status: 'todo' },
      { title: '14.10 Managing Dependencies with requirements.txt', time: '08:50', status: 'todo' },
    ],
  },
  {
    id: 15,
    title: 'Object-Oriented Programming (OOP)',
    color: '#6366f1',
    desc: 'Object modeling: Classes, objects, attributes, methods, the __init__() constructor, instance vs class variables, encapsulation, inheritance patterns, and polymorphism in Python.',
    icon: <Binary />,
    lessons: [
      { title: '15.1 What Is OOP?', time: '06:50', status: 'todo' },
      { title: '15.2 Classes and Objects', time: '07:25', status: 'todo' },
      { title: '15.3 Attributes and Methods', time: '08:00', status: 'todo' },
      { title: '15.4 The __init__() Constructor', time: '08:30', status: 'todo' },
      { title: '15.5 Instance Attributes', time: '07:40', status: 'todo' },
      { title: '15.6 Class Attributes', time: '07:15', status: 'todo' },
      { title: '15.7 Instance Methods', time: '07:50', status: 'todo' },
      { title: '15.8 Encapsulation', time: '08:15', status: 'todo' },
      { title: '15.9 Inheritance', time: '08:45', status: 'todo' },
      { title: '15.10 Polymorphism', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 16,
    title: 'Advanced OOP & Advanced Python Concepts',
    color: '#8b5cf6',
    desc: 'Advanced language features: Multiple inheritance, method overriding, composition, abstraction, class & static methods, __str__ & magic methods, iterators, generators & yield, lambdas, and decorators.',
    icon: <Cpu />,
    lessons: [
      { title: '16.1 Multiple Inheritance', time: '07:40', status: 'todo' },
      { title: '16.2 Method Overriding', time: '07:30', status: 'todo' },
      { title: '16.3 Composition', time: '08:00', status: 'todo' },
      { title: '16.4 Abstraction', time: '08:20', status: 'todo' },
      { title: '16.5 Class Methods and Static Methods', time: '08:15', status: 'todo' },
      { title: '16.6 Special Methods and __str__()', time: '08:45', status: 'todo' },
      { title: '16.7 Iterators and Iterables', time: '08:10', status: 'todo' },
      { title: '16.8 Generators and yield', time: '09:00', status: 'todo' },
      { title: '16.9 Lambda Functions', time: '07:50', status: 'todo' },
      { title: '16.10 Decorators: Introduction', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 17,
    title: 'Working with APIs',
    color: '#0284c7',
    desc: 'Web data retrieval: REST APIs, HTTP methods (GET, POST), status codes, requests library, sending calls, parsing JSON payloads, query params & headers, API keys, pagination, and rate limits.',
    icon: <Globe />,
    lessons: [
      { title: '17.1 What Is an API?', time: '06:40', status: 'todo' },
      { title: '17.2 Understanding REST APIs', time: '07:15', status: 'todo' },
      { title: '17.3 HTTP Methods: GET and POST', time: '07:45', status: 'todo' },
      { title: '17.4 Introduction to HTTP Status Codes', time: '06:50', status: 'todo' },
      { title: '17.5 Installing and Using requests', time: '08:00', status: 'todo' },
      { title: '17.6 Sending API Requests', time: '08:30', status: 'todo' },
      { title: '17.7 Working with JSON Responses', time: '08:15', status: 'todo' },
      { title: '17.8 Query Parameters and Headers', time: '07:50', status: 'todo' },
      { title: '17.9 API Authentication Basics', time: '08:20', status: 'todo' },
      { title: '17.10 Handling Errors, Pagination and Rate Limits', time: '09:40', status: 'todo' },
    ],
  },
  {
    id: 18,
    title: 'Automation with Python',
    color: '#10b981',
    desc: 'Scripted automation: File system tasks, renaming files in batch, processing multiple Excel files, merging CSVs, automated KPI calculations, PDF report generation, script scheduling, and logging.',
    icon: <Zap />,
    lessons: [
      { title: '18.1 Introduction to Task Automation', time: '06:50', status: 'todo' },
      { title: '18.2 Working with Files and Folders', time: '07:30', status: 'todo' },
      { title: '18.3 Renaming Multiple Files', time: '08:00', status: 'todo' },
      { title: '18.4 Reading Multiple Excel Files', time: '08:45', status: 'todo' },
      { title: '18.5 Combining CSV Files', time: '08:30', status: 'todo' },
      { title: '18.6 Automating Repetitive Calculations', time: '08:15', status: 'todo' },
      { title: '18.7 Generating Automated Reports', time: '09:20', status: 'todo' },
      { title: '18.8 Scheduling Python Scripts', time: '08:50', status: 'todo' },
      { title: '18.9 Logging Automation Results', time: '08:10', status: 'todo' },
      { title: '18.10 Building a Practical Automation Project', time: '10:30', status: 'todo' },
    ],
  },
  {
    id: 19,
    title: 'Data Handling & Processing',
    color: '#059669',
    desc: 'NumPy & Pandas essentials: NumPy arrays, indexing & slicing, vectorized maths, Pandas Series & DataFrames, reading CSV & Excel, inspecting with head()/info()/describe(), filtering and new columns.',
    icon: <Layers />,
    lessons: [
      { title: '19.1 Introduction to NumPy', time: '07:00', status: 'todo' },
      { title: '19.2 NumPy Arrays', time: '07:35', status: 'todo' },
      { title: '19.3 Array Indexing and Slicing', time: '08:00', status: 'todo' },
      { title: '19.4 Vectorized Operations', time: '07:45', status: 'todo' },
      { title: '19.5 Introduction to Pandas', time: '08:15', status: 'todo' },
      { title: '19.6 Series and DataFrames', time: '08:40', status: 'todo' },
      { title: '19.7 Reading CSV and Excel Files', time: '07:50', status: 'todo' },
      { title: '19.8 Inspecting Data with head(), info() and describe()', time: '08:30', status: 'todo' },
      { title: '19.9 Selecting and Filtering Data', time: '08:50', status: 'todo' },
      { title: '19.10 Sorting and Creating New Columns', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 20,
    title: 'Data Cleaning & Transformation with Pandas',
    color: '#f59e0b',
    desc: 'Data wrangling mastery: Missing values detection & filling, deduplication, type casting, string cleaning, date parsing, apply() functions, groupby aggregations, and merge & concat joins.',
    icon: <Wrench />,
    lessons: [
      { title: '20.1 Identifying Missing Values', time: '07:20', status: 'todo' },
      { title: '20.2 Handling Missing Data', time: '08:15', status: 'todo' },
      { title: '20.3 Removing Duplicate Records', time: '07:40', status: 'todo' },
      { title: '20.4 Correcting Data Types', time: '08:00', status: 'todo' },
      { title: '20.5 Cleaning Text Columns', time: '08:30', status: 'todo' },
      { title: '20.6 Working with Dates', time: '08:45', status: 'todo' },
      { title: '20.7 Renaming and Replacing Values', time: '07:50', status: 'todo' },
      { title: '20.8 Using apply() and Vectorized Operations', time: '09:00', status: 'todo' },
      { title: '20.9 groupby() and Aggregation', time: '09:30', status: 'todo' },
      { title: '20.10 Combining DataFrames with merge() and concat()', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 21,
    title: 'Data Analysis & Visualization',
    color: '#06b6d4',
    desc: 'EDA & visual communication: Exploratory data analysis, descriptive metrics, distributions, univariate/bivariate analysis, Matplotlib charts, histograms, box plots, Seaborn, and correlation heatmaps.',
    icon: <BarChart3 />,
    lessons: [
      { title: '21.1 Introduction to Exploratory Data Analysis (EDA)', time: '07:30', status: 'todo' },
      { title: '21.2 Understanding Descriptive Statistics', time: '08:00', status: 'todo' },
      { title: '21.3 Mean, Median and Mode', time: '07:15', status: 'todo' },
      { title: '21.4 Variance and Standard Deviation', time: '08:20', status: 'todo' },
      { title: '21.5 Frequency Distributions', time: '08:00', status: 'todo' },
      { title: '21.6 Univariate and Bivariate Analysis', time: '08:45', status: 'todo' },
      { title: '21.7 Introduction to Matplotlib', time: '08:30', status: 'todo' },
      { title: '21.8 Line, Bar and Scatter Charts', time: '09:15', status: 'todo' },
      { title: '21.9 Histograms and Box Plots', time: '08:50', status: 'todo' },
      { title: '21.10 Seaborn Charts and Correlation Heatmaps', time: '09:40', status: 'todo' },
    ],
  },
  {
    id: 22,
    title: 'Database Integration with Python',
    color: '#7c3aed',
    desc: 'Python & SQL workflows: Connecting Python to PostgreSQL, drivers, executing SQL queries, reading results directly into Pandas, parameterized queries, insert/update operations, and transactions.',
    icon: <Database />,
    lessons: [
      { title: '22.1 Understanding Python and Databases', time: '07:15', status: 'todo' },
      { title: '22.2 Connecting Python to PostgreSQL', time: '08:30', status: 'todo' },
      { title: '22.3 Database Drivers and Connections', time: '07:50', status: 'todo' },
      { title: '22.4 Executing SQL Queries from Python', time: '08:45', status: 'todo' },
      { title: '22.5 Reading Query Results into Pandas', time: '08:20', status: 'todo' },
      { title: '22.6 Parameterized Queries', time: '08:00', status: 'todo' },
      { title: '22.7 Inserting and Updating Records', time: '08:35', status: 'todo' },
      { title: '22.8 Transactions and Connection Management', time: '08:15', status: 'todo' },
      { title: '22.9 Handling Database Errors', time: '08:00', status: 'todo' },
      { title: '22.10 Building a SQL-to-Python Analytics Workflow', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 23,
    title: 'Python for Statistics & Business Analytics',
    color: '#ec4899',
    desc: 'Analytical reasoning: Percentiles, quartiles, probability distributions, sampling & Central Limit Theorem, hypothesis testing, correlation analysis, linear regression, and business KPI modeling.',
    icon: <LineChart />,
    lessons: [
      { title: '23.1 Descriptive Statistics with Python', time: '07:45', status: 'todo' },
      { title: '23.2 Percentiles and Quartiles', time: '07:30', status: 'todo' },
      { title: '23.3 Probability Fundamentals', time: '08:15', status: 'todo' },
      { title: '23.4 Understanding Common Distributions', time: '08:40', status: 'todo' },
      { title: '23.5 Sampling and Confidence Intervals', time: '08:50', status: 'todo' },
      { title: '23.6 Hypothesis Testing Fundamentals', time: '09:20', status: 'todo' },
      { title: '23.7 Correlation Analysis', time: '08:30', status: 'todo' },
      { title: '23.8 Linear Regression Introduction', time: '09:45', status: 'todo' },
      { title: '23.9 Business KPI Calculations', time: '09:10', status: 'todo' },
      { title: '23.10 Interpreting Analytical Results', time: '08:50', status: 'todo' },
    ],
  },
  {
    id: 24,
    title: 'Python with GenAI',
    color: '#ef4444',
    desc: 'AI-accelerated coding: LLMs & GenAI, prompt-based Python generation, AI code debugging, AI Pandas analytics, synthetic data generation, LLM APIs, structured JSON responses, and verification.',
    icon: <Bot />,
    lessons: [
      { title: '24.1 Introduction to Generative AI and LLMs', time: '07:15', status: 'todo' },
      { title: '24.2 Using AI to Understand Python Code', time: '07:50', status: 'todo' },
      { title: '24.3 Generating Code from Instructions', time: '08:20', status: 'todo' },
      { title: '24.4 AI-Assisted Debugging', time: '08:10', status: 'todo' },
      { title: '24.5 Using AI for Pandas Analysis', time: '08:45', status: 'todo' },
      { title: '24.6 AI-Assisted Data Cleaning', time: '08:30', status: 'todo' },
      { title: '24.7 Generating Charts and Summaries', time: '08:50', status: 'todo' },
      { title: '24.8 Connecting to an LLM API', time: '09:15', status: 'todo' },
      { title: '24.9 Working with Structured JSON Responses', time: '09:00', status: 'todo' },
      { title: '24.10 Validating AI-Generated Code and Results', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 25,
    title: 'Git, GitHub & Professional Python Projects',
    color: '#334155',
    desc: 'Professional version control: Git fundamentals, installation & configuration, repositories, git add/commit/status, branches, remote GitHub repos, git push/pull, README markdown, and portfolio building.',
    icon: <GitBranch />,
    lessons: [
      { title: '25.1 What Is Version Control?', time: '06:30', status: 'todo' },
      { title: '25.2 Introduction to Git', time: '07:00', status: 'todo' },
      { title: '25.3 Installing and Configuring Git', time: '07:45', status: 'todo' },
      { title: '25.4 Creating a Git Repository', time: '07:15', status: 'todo' },
      { title: '25.5 git add, git commit and git status', time: '08:20', status: 'todo' },
      { title: '25.6 Understanding Branches', time: '08:00', status: 'todo' },
      { title: '25.7 Introduction to GitHub', time: '07:50', status: 'todo' },
      { title: '25.8 Pushing Code to GitHub', time: '08:40', status: 'todo' },
      { title: '25.9 Writing a README File', time: '08:15', status: 'todo' },
      { title: '25.10 Organizing and Publishing a Python Portfolio', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 26,
    title: 'Real-World Projects & Interview Preparation',
    color: '#f59e0b',
    desc: 'Capstone portfolio & career readiness: 8 Full projects (Sales Analytics, Customer Cleaning, Employee HR, E-commerce, Excel Automation, SQL Pipeline, API Analytics, AI Assistant), Interview Q&A, and documentation.',
    icon: <Award />,
    lessons: [
      { title: '26.1 Project 1: Sales Data Analysis', time: '15:00', status: 'todo' },
      { title: '26.2 Project 2: Customer Data Cleaning', time: '14:30', status: 'todo' },
      { title: '26.3 Project 3: Employee Analytics', time: '15:00', status: 'todo' },
      { title: '26.4 Project 4: E-commerce Performance Analysis', time: '16:00', status: 'todo' },
      { title: '26.5 Project 5: Automated Excel Reporting', time: '15:30', status: 'todo' },
      { title: '26.6 Project 6: SQL-to-Pandas Analytics Pipeline', time: '16:00', status: 'todo' },
      { title: '26.7 Project 7: API-Based Data Analysis', time: '15:00', status: 'todo' },
      { title: '26.8 Project 8: AI-Powered Data Analysis Assistant', time: '18:00', status: 'todo' },
      { title: '26.9 Python Interview Questions and Coding Challenges', time: '14:00', status: 'todo' },
      { title: '26.10 Project Documentation and Portfolio Presentation', time: '13:00', status: 'todo' },
    ],
  },
];


export interface TopicHierarchyInfo {
  moduleId: number;
  moduleTitle: string;
  topicNumStr: string;
  topicTitle: string;
  fullBreadcrumb: string[];
}

export function getTopicHierarchyInfo(topicId: number = 1): TopicHierarchyInfo {
  const tId = Number(topicId) || 1;

  // 1. Module 1: topicId 1..10
  if (tId >= 1 && tId <= 10) {
    const mod = TOPICS[0];
    const lesson = mod?.lessons[tId - 1];
    let title = lesson ? lesson.title : `1.${tId} Lesson`;
    if (tId === 1 && !title.includes('Real-Life Examples')) {
      title = '1.1 What is Programming? – Real-Life Examples';
    }
    return {
      moduleId: 1,
      moduleTitle: mod?.title || 'Introduction to Programming & Python Thinking',
      topicNumStr: `1.${tId}`,
      topicTitle: title,
      fullBreadcrumb: ['Home', 'Python', mod?.title || 'Introduction to Programming & Python Thinking', title],
    };
  }

  // 2. Module 1 alternate: topicId 101..110
  if (tId >= 101 && tId <= 110) {
    const li = tId - 100;
    const mod = TOPICS[0];
    const lesson = mod?.lessons[li - 1];
    let title = lesson ? lesson.title : `1.${li} Lesson`;
    if (li === 1 && !title.includes('Real-Life Examples')) {
      title = '1.1 What is Programming? – Real-Life Examples';
    }
    return {
      moduleId: 1,
      moduleTitle: mod?.title || 'Introduction to Programming & Python Thinking',
      topicNumStr: `1.${li}`,
      topicTitle: title,
      fullBreadcrumb: ['Home', 'Python', mod?.title || 'Introduction to Programming & Python Thinking', title],
    };
  }

  // 3. Module 2 to 26: topicId 201..2610
  if (tId >= 200) {
    const modId = Math.floor(tId / 100);
    const lessonNum = tId % 100;
    const mod = TOPICS.find((t) => t.id === modId);
    if (mod) {
      const lesson = mod.lessons[lessonNum - 1];
      const title = lesson ? lesson.title : `${modId}.${lessonNum} Lesson`;
      return {
        moduleId: modId,
        moduleTitle: mod.title,
        topicNumStr: `${modId}.${lessonNum}`,
        topicTitle: title,
        fullBreadcrumb: ['Home', 'Python', mod.title, title],
      };
    }
  }

  // Default Fallback
  return {
    moduleId: 1,
    moduleTitle: 'Introduction to Programming & Python Thinking',
    topicNumStr: '1.1',
    topicTitle: '1.1 What is Programming? – Real-Life Examples',
    fullBreadcrumb: [
      'Home',
      'Python',
      'Introduction to Programming & Python Thinking',
      '1.1 What is Programming? – Real-Life Examples',
    ],
  };
}

const ACTIONS = [
  { step: 'learn' as WorkspaceStepId, label: 'Video', icon: <Play className="w-3 h-3" />, cls: 'act-video' },
  { step: 'play' as WorkspaceStepId, label: 'Practice Code', icon: <Code2 className="w-3 h-3" />, cls: 'act-code' },
  { step: 'interview' as WorkspaceStepId, label: 'Mock Interview', icon: <Mic className="w-3 h-3" />, cls: 'act-interview' },
];

export const PythonChapterView: React.FC<Props> = ({
  userName = 'Learner',
  onBack,
  onOpenTopic,
  onOpenUnlockModal = () => {},
  onOpenAdvisor,
}) => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [telemetry, setTelemetry] = useState(getLearnerTelemetry);

  useEffect(() => {
    const handleUpdate = () => setTelemetry(getLearnerTelemetry());
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('focus', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('focus', handleUpdate);
    };
  }, []);

  const totalLessons = TOPICS.reduce((acc, t) => acc + t.lessons.length, 0);
  const doneLessons = TOPICS.reduce((acc, t) => {
    const isTopicDone = telemetry.completedTopics.includes(t.id);
    return acc + (isTopicDone ? t.lessons.length : t.lessons.filter(l => l.status === 'completed').length);
  }, 0);
  const pct = Math.round((doneLessons / totalLessons) * 100);

  return (
    <>
      {/* ── Native Android Mobile App View (< 768px) ── */}
      <div className="md:hidden">
        <MobilePythonChapterView
          userName={userName}
          onBack={onBack}
          onOpenTopic={onOpenTopic}
          onOpenUnlockModal={onOpenUnlockModal}
          onOpenAdvisor={onOpenAdvisor}
        />
      </div>

      {/* ── Desktop Experience (>= 768px) ── */}
      <div className="hidden md:block">
        <div className="pcv-root">
          {/* ================= FULL-WIDTH TOP BANNER ================= */}
      <div className="pcv-top-full">
        {/* Breadcrumbs Navigation */}
        <nav className="pcv-crumbs pcv-crumbs-standalone">
          <button onClick={onBack}>Home</button>
          <ChevronRight />
          <button onClick={onBack}>Data Analytics with GenAI</button>
          <ChevronRight />
          <strong>Python</strong>
        </nav>

        {/* Hero Banner Image: Full Horizontal Width (Crystal Clear HD) */}
        <section className="pcv-hero pcv-cinema-hero pcv-hero-full-width">
          <img
            className="pcv-hero-bg pcv-hero-video-full"
            src="/images/python_mastery_banner_hd.jpg"
            alt="Python Mastery - From Basics to Real-World Projects"
          />
        </section>
      </div>

      {/* ================= LEFT ================= */}
      <div className="pcv-left">
        {/* 26 Course Chapters list */}
        <section className="pcv-topics">
          {TOPICS.map((t, idx) => {
            const isOpen = openId === t.id;
            const isTopicDone = telemetry.completedTopics.includes(t.id);
            const done = isTopicDone ? t.lessons.length : t.lessons.filter(l => l.status === 'completed').length;
            const tp = Math.round((done / t.lessons.length) * 100);
            return (
              <div key={t.id} id={`pcv-module-${t.id}`} className={`pcv-topic ${isOpen ? 'open' : ''}`}>
                <div className="pcv-topic-head" onClick={() => setOpenId(isOpen ? null : t.id)}>
                  <span className="pcv-num" style={{ background: t.color }}>{idx + 1}</span>
                  <span className="pcv-ticon" style={{ color: t.color, background: `${t.color}14` }}>{t.icon}</span>
                  <div className="pcv-ttext">
                    <h3>{t.title} {t.free && <em className="pcv-free-tag">FREE</em>}</h3>
                  </div>
                  <div className="pcv-tprog">
                    <span className="pcv-tprog-label">{t.lessons.length} Lessons</span>
                    <div className="pcv-tprog-row">
                      <div className="pcv-bar"><i style={{ width: `${tp}%` }} /></div>
                      <span className="pcv-tprog-count">{done} / {t.lessons.length} completed</span>
                      <b>{tp}%</b>
                    </div>
                  </div>
                  <button className="pcv-chev" aria-label="toggle">
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {isOpen && (
                  <div className="pcv-lessons">
                    {t.lessons.map((l, li) => {
                      const displayTitle = l.title.replace(/^\d+\.\d+\s*/, '');
                      const targetTopicId = t.id === 1 ? (li + 1) : (t.id * 100 + li + 1);
                      return (
                        <div
                          key={l.title}
                          className="pcv-lesson"
                          onClick={() => onOpenTopic(targetTopicId, 'learn')}
                          title={`Open ${l.title}`}
                        >
                          <span className="pcv-lnum" style={{ color: t.color, fontWeight: 700 }}>{t.id}.{li + 1}</span>
                          <button
                            className="pcv-lplay"
                            style={{ background: t.color }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenTopic(targetTopicId, 'learn');
                            }}
                            title={`Play ${l.title}`}
                          >
                            <Play />
                          </button>
                          <span
                            className="pcv-ltitle"
                            style={{ color: t.color }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenTopic(targetTopicId, 'learn');
                            }}
                            title={`Click to start ${l.title}`}
                          >
                            {displayTitle}
                          </span>
                          <span className="pcv-ltime"><Clock /> {l.time}</span>
                          <div className="pcv-actions">
                            {ACTIONS.map(a => (
                              <button
                                key={a.step}
                                className={`pcv-act ${a.cls}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenTopic(targetTopicId, a.step);
                                }}
                                title={`Open ${a.label} for ${l.title}`}
                              >
                                {a.icon}{a.label}
                              </button>
                            ))}
                          </div>
                          <div className="pcv-lstatus">
                            {(isTopicDone || l.status === 'completed') && <span className="st-done" title="Completed"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></span>}
                            {!isTopicDone && l.status === 'progress' && <span className="st-prog"><Circle /> In Progress</span>}
                            {!isTopicDone && l.status === 'todo' && <span className="st-todo">Not Started</span>}
                          </div>
                          {l.status === 'progress' ? (
                            <button
                              className="pcv-continue"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenTopic(targetTopicId, 'learn');
                              }}
                            >
                              Continue <ArrowRight />
                            </button>
                          ) : (
                            <button
                              className="pcv-lgo"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenTopic(targetTopicId, 'learn');
                              }}
                            >
                              <ChevronRight />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>

      {/* ================= RIGHT ================= */}
      <aside className="pcv-right">
        <div className="pcv-card">
          <div className="pcv-card-head">
            <h4>Your Progress</h4>
            <button className="pcv-link">View Details <ArrowRight /></button>
          </div>
          <div className="pcv-prog-top">
            <div className="pcv-ring" style={{ background: `conic-gradient(#3b82f6 0 ${pct * 0.5}%, #22d3ee ${pct * 0.5}% ${pct}%, #e2e8f0 ${pct}% 100%)` }}>
              <span>{pct}%</span>
            </div>
            <div className="pcv-prog-info">
              <strong>{doneLessons} / {totalLessons} Lessons Completed</strong>
              <div className="pcv-bar big"><i style={{ width: `${pct}%` }} /></div>
            </div>
          </div>
          <div className="pcv-mini-stats">
            <div><FolderKanban className="c-purple" /><b>8</b><span>Projects</span></div>
            <div><Zap className="c-amber" /><b>26</b><span>Quizzes</span></div>
            <div><Award className="c-pink" /><b>1</b><span>Certificate</span></div>
            <div><Timer className="c-teal" /><b>1 hr</b><span>Time Spent</span></div>
          </div>
        </div>

        <div className="pcv-card">
          <div className="pcv-card-head">
            <h4>Learning Path</h4>
            <button className="pcv-link">View All <ArrowRight /></button>
          </div>
          <ul className="pcv-path">
            {TOPICS.map((t, i) => {
              const done = t.lessons.filter(l => l.status === 'completed').length;
              const active = i === 0;
              return (
                <li key={t.id} className={active ? 'active' : ''} onClick={() => setOpenId(t.id)}>
                  <span className="pcv-path-num">{i + 1}</span>
                  <span className="pcv-path-check">{active ? <CheckCircle2 /> : <Circle />}</span>
                  <div>
                    <strong>{t.title}</strong>
                    <span>{done} / {t.lessons.length} lessons</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pcv-card pcv-mentor">
          <div className="pcv-mentor-text">
            <h4>AI Mentor</h4>
            <p>Ask anything about Python. Get explanations, code examples, practice questions and real-world use cases.</p>
            <button className="pcv-mentor-btn" onClick={() => onOpenAdvisor?.()}>
              <Bot /> Ask AI Mentor <ArrowRight />
            </button>
          </div>
          <img src="/images/pcv_ai_robot.jpg" alt="AI Mentor" />
          <Sparkles className="pcv-spark" />
        </div>
      </aside>
        </div>
      </div>
    </>
  );
};

export default PythonChapterView;
