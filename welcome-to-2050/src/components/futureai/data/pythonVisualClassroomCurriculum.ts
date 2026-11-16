/**
 * FUTURE IT INDUSTRY — MASTER PYTHON + DSA CURRICULUM
 * 
 * Complete 20-Module, Zero-to-Advanced Syllabus (196 Lessons)
 * 01. Python Basics & First Program to 20. Dynamic Programming & Interview Mastery
 * 
 * Strict Learning Order: Starts with Hello, World! — Your First Python Program
 * Each lesson has:
 * - Visualization (Learn) with interactive AST step breakdown, memory table, pipeline flowchart, Hinglish narration
 * - Coding Practice (Implement) with sandboxed test runner, test cases, and sequential unlock progression
 */

import { MODULE_03_TOPIC_QUESTIONS, MODULE_02_TOPIC_QUESTIONS, MODULE_01_TOPIC_QUESTIONS } from './pythonBasics140QuestionsData';

export interface ConceptPill {
  token: string;
  explanation: string;
}

export interface MemoryVariable {
  name: string;
  value: string;
  type: string;
  isActive?: boolean;
}

export interface FlowNode {
  title: string;
  detail: string;
  type: 'input' | 'process' | 'memory' | 'output' | 'branch';
}

export interface TeachingStep {
  stepNumber: number;
  totalSteps: number;
  activeLineIndex: number;
  title: string;
  description: string;
  codeSnippet: string;
  concepts: ConceptPill[];
  memoryVariables: MemoryVariable[];
  consoleOutput: string;
  pipelineFlow: FlowNode[];
  teacherNarration: string;
}

export interface PracticeTestCase {
  id: number;
  input: string;
  expectedOutput: string;
  description?: string;
  isHidden?: boolean;
}

export interface PracticeProblem {
  title: string;
  description: string;
  inputFormat?: string;
  outputFormat?: string;
  sampleInput: string;
  sampleOutput: string;
  starterCode: string;
  solutionCode: string;
  hints: string[];
  testCases: PracticeTestCase[];
  conceptHints?: string[];
}

export interface TopicQuestion {
  id: string;
  number: number;
  level: 'Learn' | 'Guided' | 'Practice' | 'Apply' | 'Debug' | 'Challenge' | 'Mastery';
  question: string;
  hindiDescription: string;
  referenceCode: string;
  starterCode: string;
  sampleInput: string;
  sampleOutput: string;
  testCases: PracticeTestCase[];
}

export interface CurriculumTopic {
  id: string;
  sectionId: string;
  topicNumber: number;
  globalIndex: number;
  qBadge: string;
  title: string;
  subtitle?: string;
  hindiDescription: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  referenceCode: string;
  steps: TeachingStep[];
  practice: PracticeProblem;
  questions?: TopicQuestion[];
}

export interface CurriculumSection {
  id: string;
  sectionNumber: string;
  title: string;
  topics: CurriculumTopic[];
}

export const TOTAL_CURRICULUM_LESSONS = 233;

export const PYTHON_CLASSROOM_SECTIONS: CurriculumSection[] = [
  {
    "id": "01_basics",
    "sectionNumber": "01",
    "title": "Python Basics & First Program",
    "topics": [
      {
        "id": "py_01_basics_01",
        "sectionId": "01_basics",
        "topicNumber": 1,
        "globalIndex": 1,
        "qBadge": "Q.1",
        "title": "Hello, World! — Your First Python Program",
        "hindiDescription": "Apna pehla Python program likho aur screen par Hello World print karo.",
        "difficulty": "Easy",
        "referenceCode": "print(\"Hello, World!\")",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 0,
            "title": "Line 1: print() Function Execution",
            "description": "print() Python ka built-in function hai jo screen par output dikhane ke liye use hota hai. Quotes (\" \") ke andar likha gaya text String kehlata hai.",
            "codeSnippet": "print(\"Hello, World!\")",
            "concepts": [
              {
                "token": "print()",
                "explanation": "Screen par text ya value display karne wala built-in function."
              },
              {
                "token": "\"Hello, World!\"",
                "explanation": "Double quotes ke andar text ek String literal hota hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Hello, World!",
            "pipelineFlow": [
              {
                "title": "Code",
                "detail": "print(...)",
                "type": "input"
              },
              {
                "title": "Python Engine",
                "detail": "sys.stdout",
                "type": "process"
              },
              {
                "title": "Console Output",
                "detail": "Hello, World!",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Welcome to your very first Python program. Yahaan hum print() function ka use karke screen par Hello World print kar rahe hain. Quotes ke andar ka data string hota hai."
          }
        ],
        "practice": {
          "title": "Print Hello, World!",
          "description": "Screen par exact text \"Hello, World!\" print karne ke liye Python program likhiye.",
          "starterCode": "# Write your first print statement below\n",
          "solutionCode": "print(\"Hello, World!\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Hello, World!",
          "hints": [
            "Python me text print karne ke liye print() function ka use karein.",
            "Quotes ke andar Hello, World! likhiye: print(\"Hello, World!\")"
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Hello, World!"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_02",
        "sectionId": "01_basics",
        "topicNumber": 2,
        "globalIndex": 2,
        "qBadge": "Q.2",
        "title": "Understanding print() and Console Output",
        "subtitle": "6 Questions · ID PB-02-01 to PB-02-06",
        "hindiDescription": "print() function ka internal working aur stdout stream samjho.",
        "difficulty": "Easy",
        "referenceCode": "print(\"Python is awesome!\")",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 0,
            "title": "Line 1: Standard Output Stream",
            "description": "Jab bhi print() call hota hai, Python arguments ko string me convert karke console par stream karta hai.",
            "codeSnippet": "print(\"Python is awesome!\")",
            "concepts": [
              {
                "token": "stdout",
                "explanation": "Standard output stream jahan program result dikhata hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Python is awesome!",
            "pipelineFlow": [
              {
                "title": "Function Call",
                "detail": "print(...)",
                "type": "input"
              },
              {
                "title": "Stream",
                "detail": "sys.stdout.write",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Python is awesome!",
                "type": "output"
              }
            ],
            "teacherNarration": "print() function arguments ko evaluate karke console screen par likhta hai. Har print() ke baad by default new line add hoti hai."
          }
        ],
        "practice": {
          "title": "Use print() Function",
          "description": "Screen par exact message \"Python is awesome!\" print kijiye.",
          "starterCode": "# Print \"Python is awesome!\" below\n",
          "solutionCode": "print(\"Python is awesome!\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Python is awesome!",
          "hints": [
            "print(\"Python is awesome!\") likhiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Python is awesome!"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_03",
        "sectionId": "01_basics",
        "topicNumber": 3,
        "globalIndex": 3,
        "qBadge": "Q.3",
        "title": "Printing Text, Numbers and Multiple Lines",
        "subtitle": "6 Questions · ID PB-03-01 to PB-03-06",
        "hindiDescription": "Ek hi print statement me text aur numbers ko ek saath print karna seekho.",
        "difficulty": "Easy",
        "referenceCode": "print(\"My age is\", 21)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 0,
            "title": "Line 1: Comma Separation in print()",
            "description": "print() me comma (,) lagane se multiple items space ke saath print hote hain.",
            "codeSnippet": "print(\"My age is\", 21)",
            "concepts": [
              {
                "token": ",",
                "explanation": "Multiple arguments ko separate karta hai aur default space deta hai."
              },
              {
                "token": "21",
                "explanation": "Integer number literal."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "My age is 21",
            "pipelineFlow": [
              {
                "title": "Arguments",
                "detail": "\"My age is\", 21",
                "type": "input"
              },
              {
                "title": "Separator",
                "detail": "sep=\" \"",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "My age is 21",
                "type": "output"
              }
            ],
            "teacherNarration": "print() me comma ka use karke hum text aur numbers dono ko bina type conversion ke ek saath print kar sakte hain."
          }
        ],
        "practice": {
          "title": "Print Text and Number Together",
          "description": "print() ka use karke \"My age is 21\" print kijiye.",
          "starterCode": "# Print \"My age is\" and 21 together\n",
          "solutionCode": "print(\"My age is\", 21)",
          "sampleInput": "(No input)",
          "sampleOutput": "My age is 21",
          "hints": [
            "print(\"My age is\", 21) use kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "My age is 21"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_05",
        "sectionId": "01_basics",
        "topicNumber": 4,
        "globalIndex": 4,
        "qBadge": "Q.4",
        "title": "Comments in Python",
        "subtitle": "6 Questions · ID PB-05-01 to PB-05-06",
        "hindiDescription": "Code me notes aur explanations likhne ke liye single-line comments.",
        "difficulty": "Easy",
        "referenceCode": "# This is a comment\nprint(\"Code runs!\")",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 1,
            "title": "Line 1 & 2: Hash Symbol (#) Comments",
            "description": "Python interpreter # se shuru hone wali lines ko execute nahi karta, unhe ignore kar deta hai.",
            "codeSnippet": "print(\"Code runs!\")",
            "concepts": [
              {
                "token": "#",
                "explanation": "Single-line comment marker. Code documentation ke liye use hota hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Code runs!",
            "pipelineFlow": [
              {
                "title": "# Comment",
                "detail": "Ignored by Python",
                "type": "process"
              },
              {
                "title": "Code",
                "detail": "Code runs!",
                "type": "output"
              }
            ],
            "teacherNarration": "Comments code ko samajhne ke liye hote hain. Python interpreter # wali line ko skip karke seedha code run karta hai."
          }
        ],
        "practice": {
          "title": "Add a Comment and Print",
          "description": "Ek comment likhiye aur niche \"Code runs!\" print kijiye.",
          "starterCode": "# Add your comment here\n",
          "solutionCode": "# My note\nprint(\"Code runs!\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Code runs!",
          "hints": [
            "# ke baad kuch bhi likhiye aur agle line me print(\"Code runs!\") likhiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Code runs!"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_06",
        "sectionId": "01_basics",
        "topicNumber": 5,
        "globalIndex": 5,
        "qBadge": "Q.5",
        "title": "Variables and Naming Rules",
        "hindiDescription": "Variables create karna aur unke valid naming rules.",
        "difficulty": "Easy",
        "referenceCode": "score = 100\nprint(score)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Line 1: Variable Declaration",
            "description": "score naam ka ek memory box create hua aur usme 100 store ho gaya.",
            "codeSnippet": "score = 100",
            "concepts": [
              {
                "token": "score",
                "explanation": "Variable identifier (container in memory)."
              },
              {
                "token": "=",
                "explanation": "Assignment operator."
              }
            ],
            "memoryVariables": [
              {
                "name": "score",
                "value": "100",
                "type": "int",
                "isActive": true
              }
            ],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Value",
                "detail": "100",
                "type": "input"
              },
              {
                "title": "RAM Memory",
                "detail": "score: 100",
                "type": "memory"
              }
            ],
            "teacherNarration": "Yahaan humne score variable banaya aur usme 100 store kiya. Variable ka naam letters ya underscore se shuru hona chahiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Line 2: Printing Variable Value",
            "description": "print(score) variable ki stored value 100 nikal kar screen par dikhata hai.",
            "codeSnippet": "print(score)",
            "concepts": [
              {
                "token": "score",
                "explanation": "Variable ki value ko access karta hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "score",
                "value": "100",
                "type": "int"
              }
            ],
            "consoleOutput": "100",
            "pipelineFlow": [
              {
                "title": "Memory",
                "detail": "Read score (100)",
                "type": "memory"
              },
              {
                "title": "Screen",
                "detail": "100",
                "type": "output"
              }
            ],
            "teacherNarration": "Ab print function score ki value 100 ko screen par dikha raha hai."
          }
        ],
        "practice": {
          "title": "Store and Print Variable",
          "description": "score naam ka variable banayein jisme value 100 ho, aur use print kijiye.",
          "starterCode": "# Declare variable and print\n",
          "solutionCode": "score = 100\nprint(score)",
          "sampleInput": "(No input)",
          "sampleOutput": "100",
          "hints": [
            "score = 100 likhiye aur agle line me print(score)."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "100"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_07",
        "sectionId": "01_basics",
        "topicNumber": 6,
        "globalIndex": 6,
        "qBadge": "Q.6",
        "title": "Assigning and Updating Variable Values",
        "hindiDescription": "Variable ki purani value ko nayi value se replace karna.",
        "difficulty": "Easy",
        "referenceCode": "x = 5\nx = 10\nprint(x)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 3,
            "activeLineIndex": 0,
            "title": "Line 1: Initial Assignment",
            "description": "x me value 5 store hui.",
            "codeSnippet": "x = 5",
            "concepts": [
              {
                "token": "x = 5",
                "explanation": "Initial value assignment."
              }
            ],
            "memoryVariables": [
              {
                "name": "x",
                "value": "5",
                "type": "int",
                "isActive": true
              }
            ],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Memory",
                "detail": "x = 5",
                "type": "memory"
              }
            ],
            "teacherNarration": "Pehle x me 5 store hua."
          },
          {
            "stepNumber": 2,
            "totalSteps": 3,
            "activeLineIndex": 1,
            "title": "Line 2: Value Overwrite / Update",
            "description": "x me nayi value 10 aayi aur purani value 5 replace ho gayi.",
            "codeSnippet": "x = 10",
            "concepts": [
              {
                "token": "Reassignment",
                "explanation": "Variables mutable hote hain, purani value overwrite hoti hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "x",
                "value": "10",
                "type": "int",
                "isActive": true
              }
            ],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Memory",
                "detail": "x updated to 10",
                "type": "memory"
              }
            ],
            "teacherNarration": "Line 2 me x ki value update hoke 10 ban gayi."
          },
          {
            "stepNumber": 3,
            "totalSteps": 3,
            "activeLineIndex": 2,
            "title": "Line 3: Print Updated Value",
            "description": "Console par updated value 10 print hui.",
            "codeSnippet": "print(x)",
            "concepts": [
              {
                "token": "print(x)",
                "explanation": "Latest value display hoti hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "x",
                "value": "10",
                "type": "int"
              }
            ],
            "consoleOutput": "10",
            "pipelineFlow": [
              {
                "title": "Screen",
                "detail": "10",
                "type": "output"
              }
            ],
            "teacherNarration": "print statement latest value 10 ko print karta hai."
          }
        ],
        "practice": {
          "title": "Update Variable Value",
          "description": "x = 5 banayein, fir uski value 10 update karein aur x ko print kijiye.",
          "starterCode": "# Assign and update x\n",
          "solutionCode": "x = 5\nx = 10\nprint(x)",
          "sampleInput": "(No input)",
          "sampleOutput": "10",
          "hints": [
            "x = 5, fir x = 10, fir print(x)."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "10"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_08",
        "sectionId": "01_basics",
        "topicNumber": 7,
        "globalIndex": 7,
        "qBadge": "Q.7",
        "title": "Python Data Types and type()",
        "hindiDescription": "int, float, str aur bool data types ko pehchano.",
        "difficulty": "Easy",
        "referenceCode": "a = 10\nb = 3.14\nc = \"AI\"\nd = True\nprint(a, b, c, d)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Line 1-4: 4 Core Data Types",
            "description": "Python dynamically types variables: a is integer, b is float, c is string, d is boolean.",
            "codeSnippet": "a = 10; b = 3.14; c = \"AI\"; d = True",
            "concepts": [
              {
                "token": "int",
                "explanation": "Whole numbers (10, -5, 0)."
              },
              {
                "token": "float",
                "explanation": "Decimal numbers (3.14)."
              },
              {
                "token": "str",
                "explanation": "Text enclosed in quotes (\"AI\")."
              },
              {
                "token": "bool",
                "explanation": "True ya False boolean logic."
              }
            ],
            "memoryVariables": [
              {
                "name": "a",
                "value": "10",
                "type": "int"
              },
              {
                "name": "b",
                "value": "3.14",
                "type": "float"
              },
              {
                "name": "c",
                "value": "\"AI\"",
                "type": "str"
              },
              {
                "name": "d",
                "value": "True",
                "type": "bool"
              }
            ],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Memory",
                "detail": "Allocated 4 variables",
                "type": "memory"
              }
            ],
            "teacherNarration": "Python me chaar core basic data types hote hain: int, float, string aur boolean."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 4,
            "title": "Line 5: Print All Data Types",
            "description": "print statement sabhi variables ki values ko space se separate karke print karta hai.",
            "codeSnippet": "print(a, b, c, d)",
            "concepts": [
              {
                "token": "print()",
                "explanation": "Alag-alag data types ko bina error print karta hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "a",
                "value": "10",
                "type": "int"
              },
              {
                "name": "b",
                "value": "3.14",
                "type": "float"
              },
              {
                "name": "c",
                "value": "\"AI\"",
                "type": "str"
              },
              {
                "name": "d",
                "value": "True",
                "type": "bool"
              }
            ],
            "consoleOutput": "10 3.14 AI True",
            "pipelineFlow": [
              {
                "title": "Output",
                "detail": "10 3.14 AI True",
                "type": "output"
              }
            ],
            "teacherNarration": "print function sabhi variables ko format karke console par print kar deta hai."
          }
        ],
        "practice": {
          "title": "Store and Print 4 Data Types",
          "description": "a=10, b=3.14, c=\"AI\", d=True banakar print(a, b, c, d) kijiye.",
          "starterCode": "# Create 4 variables and print them\n",
          "solutionCode": "a = 10\nb = 3.14\nc = \"AI\"\nd = True\nprint(a, b, c, d)",
          "sampleInput": "(No input)",
          "sampleOutput": "10 3.14 AI True",
          "hints": [
            "Variables assign karke print(a, b, c, d) call karein."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "10 3.14 AI True"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_10",
        "sectionId": "01_basics",
        "topicNumber": 8,
        "globalIndex": 8,
        "qBadge": "Q.8",
        "title": "Type Conversion — int(), float(), str(), bool()",
        "hindiDescription": "String ko Integer me convert karne ke liye int() ka use.",
        "difficulty": "Easy",
        "referenceCode": "num_str = \"42\"\nnum = int(num_str)\nprint(num + 8)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Line 1 & 2: Explicit Type Casting with int()",
            "description": "String \"42\" ko int() function ne integer number 42 me convert kiya.",
            "codeSnippet": "num = int(num_str)",
            "concepts": [
              {
                "token": "int()",
                "explanation": "String ya float ko integer number me convert karta hai."
              },
              {
                "token": "Type Casting",
                "explanation": "Ek data type ko doosre data type me convert karna."
              }
            ],
            "memoryVariables": [
              {
                "name": "num_str",
                "value": "\"42\"",
                "type": "str"
              },
              {
                "name": "num",
                "value": "42",
                "type": "int",
                "isActive": true
              }
            ],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "String",
                "detail": "\"42\"",
                "type": "input"
              },
              {
                "title": "int()",
                "detail": "Type Casting",
                "type": "process"
              },
              {
                "title": "Integer",
                "detail": "num = 42",
                "type": "memory"
              }
            ],
            "teacherNarration": "Type casting se hum string 42 ko number 42 me convert kar rahe hain taaki arithmetic addition kar sakein."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 2,
            "title": "Line 3: Arithmetic Addition",
            "description": "Ab 42 + 8 mathematical addition hoke 50 print hoga.",
            "codeSnippet": "print(num + 8)",
            "concepts": [
              {
                "token": "+",
                "explanation": "Mathematical addition operator."
              }
            ],
            "memoryVariables": [
              {
                "name": "num_str",
                "value": "\"42\"",
                "type": "str"
              },
              {
                "name": "num",
                "value": "42",
                "type": "int"
              }
            ],
            "consoleOutput": "50",
            "pipelineFlow": [
              {
                "title": "Output",
                "detail": "50",
                "type": "output"
              }
            ],
            "teacherNarration": "42 plus 8 ka sum 50 screen par print ho gaya."
          }
        ],
        "practice": {
          "title": "Convert String to Int and Add",
          "description": "num_str = \"42\" ko int me convert karke usme 8 add karke print kijiye.",
          "starterCode": "# Convert string to int and add 8\n",
          "solutionCode": "num_str = \"42\"\nnum = int(num_str)\nprint(num + 8)",
          "sampleInput": "(No input)",
          "sampleOutput": "50",
          "hints": [
            "int(num_str) use kijiye aur + 8 karke print kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "50"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_11",
        "sectionId": "01_basics",
        "topicNumber": 9,
        "globalIndex": 9,
        "qBadge": "Q.9",
        "title": "Taking and Printing User Input — input()",
        "hindiDescription": "Keyboard se user se input lena aur variable me store karna.",
        "difficulty": "Easy",
        "referenceCode": "name = input()\nprint(\"Hello\", name)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Line 1: input() Function",
            "description": "input() user ke keyboard typing ka wait karta hai aur hamesha string return karta hai.",
            "codeSnippet": "name = input()",
            "concepts": [
              {
                "token": "input()",
                "explanation": "User se string input lene ke liye use hota hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "name",
                "value": "\"Aman\"",
                "type": "str",
                "isActive": true
              }
            ],
            "consoleOutput": "Aman",
            "pipelineFlow": [
              {
                "title": "Keyboard Input",
                "detail": "\"Aman\"",
                "type": "input"
              },
              {
                "title": "Memory",
                "detail": "name = \"Aman\"",
                "type": "memory"
              }
            ],
            "teacherNarration": "input() function user se data leta hai. Yeh hamesha string format me return karta hai."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Line 2: Greeting Print",
            "description": "print(\"Hello\", name) user ke naam ke saath Hello print karta hai.",
            "codeSnippet": "print(\"Hello\", name)",
            "concepts": [
              {
                "token": "print()",
                "explanation": "Text aur user input ko jodkar display karta hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "name",
                "value": "\"Aman\"",
                "type": "str"
              }
            ],
            "consoleOutput": "Hello Aman",
            "pipelineFlow": [
              {
                "title": "Screen",
                "detail": "Hello Aman",
                "type": "output"
              }
            ],
            "teacherNarration": "print statement Hello aur user ke name ko display karta hai."
          }
        ],
        "practice": {
          "title": "Read User Name and Greet",
          "description": "User se input lekar \"Hello <name>\" print kijiye.",
          "starterCode": "# Read name and print greeting\n",
          "solutionCode": "name = input()\nprint(\"Hello\", name)",
          "sampleInput": "Aman",
          "sampleOutput": "Hello Aman",
          "hints": [
            "name = input() likhiye aur print(\"Hello\", name) karein."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "Aman",
              "expectedOutput": "Hello Aman"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_20",
        "sectionId": "01_basics",
        "topicNumber": 10,
        "globalIndex": 10,
        "qBadge": "Q.10",
        "title": "Python Basics Practice and Common Errors",
        "subtitle": "5 Questions · ID PB-20-01 to PB-20-05",
        "hindiDescription": "SyntaxError, NameError, TypeError pehchano aur debug karna seekho.",
        "difficulty": "Medium",
        "referenceCode": "message = \"Debugging in Python\"\nprint(message)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 1,
            "title": "Understanding Python Error Messages",
            "description": "Jab code me galti hoti hai, Python exact line number aur error type trace karta hai.",
            "codeSnippet": "print(message)",
            "concepts": [
              {
                "token": "Debug",
                "explanation": "Code ki galtiyo ko dhoondh kar theek karne ka process."
              }
            ],
            "memoryVariables": [
              {
                "name": "message",
                "value": "Debugging in Python",
                "type": "str"
              }
            ],
            "consoleOutput": "Debugging in Python",
            "pipelineFlow": [
              {
                "title": "Check",
                "detail": "Valid syntax and defined variables",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Debugging in Python",
                "type": "output"
              }
            ],
            "teacherNarration": "Python error messages aapke dost hain. Error trace ko padhkar hum pata laga sakte hain ki konsi line par galti hai."
          }
        ],
        "practice": {
          "title": "Fix a SyntaxError",
          "description": "Print statement me missing closing parenthesis theek karke \"Hello World\" print kijiye.",
          "starterCode": "# Fix the missing closing parenthesis:\nprint(\"Hello World\")\n",
          "solutionCode": "print(\"Hello World\")",
          "sampleInput": "",
          "sampleOutput": "Hello World",
          "hints": [
            "print(\"Hello World\") me dono quotes aur brackets band karein."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Hello World"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "02_operators",
    "sectionNumber": "02",
    "title": "Operators & Expressions",
    "topics": [
      {
        "id": "py_02_operators_01",
        "sectionId": "02_operators",
        "topicNumber": 1,
        "globalIndex": 11,
        "qBadge": "Q.11",
        "title": "Introduction to Operators and Expressions",
        "subtitle": "6 Questions · ID OP-01-01 to OP-01-06",
        "hindiDescription": "Addition, subtraction, multiplication, division, modulo aur powers.",
        "difficulty": "Easy",
        "referenceCode": "# Arithmetic Operators\\ndef solve():\\n    # Example implementation for Arithmetic Operators\\n    print(\"Mastering Arithmetic Operators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Arithmetic Operators",
            "description": "Addition, subtraction, multiplication, division, modulo aur powers. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Arithmetic Operators\\ndef solve():\\n    # Example implementation for Arithmetic Operators\\n    print(\"Mastering Arithmetic Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Arithmetic",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Arithmetic Operators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Arithmetic Operators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Arithmetic Operators. Addition, subtraction, multiplication, division, modulo aur powers. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Arithmetic Operators\\ndef solve():\\n    # Example implementation for Arithmetic Operators\\n    print(\"Mastering Arithmetic Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Arithmetic Operators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Arithmetic Operators",
          "description": "Arithmetic Operators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Arithmetic Operators\n",
          "solutionCode": "print(\"Mastering Arithmetic Operators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Arithmetic Operators",
          "hints": [
            "print(\"Mastering Arithmetic Operators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Arithmetic Operators"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_02_add_sub",
        "sectionId": "02_operators",
        "topicNumber": 2,
        "globalIndex": 12,
        "qBadge": "Q.12",
        "title": "Addition and Subtraction Operators",
        "subtitle": "9 Questions · ID OP-02-01 to OP-02-09",
        "subtitle": "Module 02 · Topic 2",
        "hindiDescription": "Addition and Subtraction Operators ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "a = 25\nb = 10\nprint('Sum:', a + b)\nprint('Diff:', a - b)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Addition and Subtraction Operators",
            "description": "Is lesson me hum Addition and Subtraction Operators ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "a = 25",
            "concepts": [
              {
                "token": "Addition",
                "explanation": "Core concept for Addition and Subtraction Operators."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Addition and Subtraction Operators",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Addition and Subtraction Operators seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "a = 25\nb = 10\nprint('Sum:', a + b)\nprint('Diff:', a - b)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Addition and Subtraction Operators ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Addition and Subtraction Operators",
          "description": "Addition and Subtraction Operators ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Addition and Subtraction Operators below\n",
          "solutionCode": "a = 25\nb = 10\nprint('Sum:', a + b)\nprint('Diff:', a - b)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Addition and Subtraction Operators ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_02_operators_03_mul_div",
        "sectionId": "02_operators",
        "topicNumber": 3,
        "globalIndex": 13,
        "qBadge": "Q.13",
        "title": "Multiplication and Division Operators",
        "subtitle": "9 Questions · ID OP-03-01 to OP-03-09",
        "subtitle": "Module 02 · Topic 3",
        "hindiDescription": "Multiplication and Division Operators ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "x = 8\ny = 4\nprint('Mul:', x * y)\nprint('Div:', x / y)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Multiplication and Division Operators",
            "description": "Is lesson me hum Multiplication and Division Operators ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "x = 8",
            "concepts": [
              {
                "token": "Multiplication",
                "explanation": "Core concept for Multiplication and Division Operators."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Multiplication and Division Operators",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Multiplication and Division Operators seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "x = 8\ny = 4\nprint('Mul:', x * y)\nprint('Div:', x / y)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Multiplication and Division Operators ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Multiplication and Division Operators",
          "description": "Multiplication and Division Operators ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Multiplication and Division Operators below\n",
          "solutionCode": "x = 8\ny = 4\nprint('Mul:', x * y)\nprint('Div:', x / y)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Multiplication and Division Operators ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_02_operators_04_floor_mod",
        "sectionId": "02_operators",
        "topicNumber": 4,
        "globalIndex": 14,
        "qBadge": "Q.14",
        "title": "Floor Division and Modulus Operators",
        "subtitle": "9 Questions · ID OP-04-01 to OP-04-09",
        "subtitle": "Module 02 · Topic 4",
        "hindiDescription": "Floor Division and Modulus Operators ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "num = 17\ndiv = 5\nprint('Floor:', num // div)\nprint('Mod:', num % div)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Floor Division and Modulus Operators",
            "description": "Is lesson me hum Floor Division and Modulus Operators ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "num = 17",
            "concepts": [
              {
                "token": "Floor",
                "explanation": "Core concept for Floor Division and Modulus Operators."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Floor Division and Modulus Operators",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Floor Division and Modulus Operators seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "num = 17\ndiv = 5\nprint('Floor:', num // div)\nprint('Mod:', num % div)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Floor Division and Modulus Operators ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Floor Division and Modulus Operators",
          "description": "Floor Division and Modulus Operators ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Floor Division and Modulus Operators below\n",
          "solutionCode": "num = 17\ndiv = 5\nprint('Floor:', num // div)\nprint('Mod:', num % div)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Floor Division and Modulus Operators ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_02_operators_05_exp",
        "sectionId": "02_operators",
        "topicNumber": 5,
        "globalIndex": 15,
        "qBadge": "Q.15",
        "title": "Exponentiation Operator",
        "subtitle": "8 Questions · ID OP-05-01 to OP-05-08",
        "subtitle": "Module 02 · Topic 5",
        "hindiDescription": "Exponentiation Operator ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "base = 3\nexp = 4\nprint(base ** exp)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Exponentiation Operator",
            "description": "Is lesson me hum Exponentiation Operator ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "base = 3",
            "concepts": [
              {
                "token": "Exponentiation",
                "explanation": "Core concept for Exponentiation Operator."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Exponentiation Operator",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Exponentiation Operator seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "base = 3\nexp = 4\nprint(base ** exp)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Exponentiation Operator ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Exponentiation Operator",
          "description": "Exponentiation Operator ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Exponentiation Operator below\n",
          "solutionCode": "base = 3\nexp = 4\nprint(base ** exp)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Exponentiation Operator ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_02_operators_03",
        "sectionId": "02_operators",
        "topicNumber": 6,
        "globalIndex": 16,
        "qBadge": "Q.16",
        "title": "Comparison Operators",
        "subtitle": "10 Questions · ID OP-06-01 to OP-06-10",
        "hindiDescription": "==, !=, >, <, >=, <= ke sath values compare karna.",
        "difficulty": "Easy",
        "referenceCode": "# Comparison Operators\\ndef solve():\\n    # Example implementation for Comparison Operators\\n    print(\"Mastering Comparison Operators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Comparison Operators",
            "description": "==, !=, >, <, >=, <= ke sath values compare karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Comparison Operators\\ndef solve():\\n    # Example implementation for Comparison Operators\\n    print(\"Mastering Comparison Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Comparison",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Comparison Operators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Comparison Operators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Comparison Operators. ==, !=, >, <, >=, <= ke sath values compare karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Comparison Operators\\ndef solve():\\n    # Example implementation for Comparison Operators\\n    print(\"Mastering Comparison Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Comparison Operators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Comparison Operators",
          "description": "Comparison Operators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Comparison Operators\n",
          "solutionCode": "print(\"Mastering Comparison Operators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Comparison Operators",
          "hints": [
            "print(\"Mastering Comparison Operators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Comparison Operators"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_04",
        "sectionId": "02_operators",
        "topicNumber": 7,
        "globalIndex": 17,
        "qBadge": "Q.17",
        "title": "Logical Operators — and, or, not",
        "subtitle": "10 Questions · ID OP-07-01 to OP-07-10",
        "hindiDescription": "and, or, not operators se conditions combine karna.",
        "difficulty": "Medium",
        "referenceCode": "# Logical Operators\\ndef solve():\\n    # Example implementation for Logical Operators\\n    print(\"Mastering Logical Operators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Logical Operators",
            "description": "and, or, not operators se conditions combine karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Logical Operators\\ndef solve():\\n    # Example implementation for Logical Operators\\n    print(\"Mastering Logical Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Logical",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Logical Operators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Logical Operators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Logical Operators. and, or, not operators se conditions combine karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Logical Operators\\ndef solve():\\n    # Example implementation for Logical Operators\\n    print(\"Mastering Logical Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Logical Operators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Logical Operators",
          "description": "Logical Operators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Logical Operators\n",
          "solutionCode": "print(\"Mastering Logical Operators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Logical Operators",
          "hints": [
            "print(\"Mastering Logical Operators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Logical Operators"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_02",
        "sectionId": "02_operators",
        "topicNumber": 8,
        "globalIndex": 18,
        "qBadge": "Q.18",
        "title": "Assignment and Augmented Assignment Operators",
        "subtitle": "9 Questions · ID OP-08-01 to OP-08-09",
        "hindiDescription": "=, +=, -=, *=, /= operators ka working.",
        "difficulty": "Easy",
        "referenceCode": "# Assignment Operators\\ndef solve():\\n    # Example implementation for Assignment Operators\\n    print(\"Mastering Assignment Operators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Assignment Operators",
            "description": "=, +=, -=, *=, /= operators ka working. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Assignment Operators\\ndef solve():\\n    # Example implementation for Assignment Operators\\n    print(\"Mastering Assignment Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Assignment",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Assignment Operators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Assignment Operators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Assignment Operators. =, +=, -=, *=, /= operators ka working. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Assignment Operators\\ndef solve():\\n    # Example implementation for Assignment Operators\\n    print(\"Mastering Assignment Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Assignment Operators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Assignment Operators",
          "description": "Assignment Operators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Assignment Operators\n",
          "solutionCode": "print(\"Mastering Assignment Operators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Assignment Operators",
          "hints": [
            "print(\"Mastering Assignment Operators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Assignment Operators"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_05",
        "sectionId": "02_operators",
        "topicNumber": 9,
        "globalIndex": 19,
        "qBadge": "Q.19",
        "title": "Membership Operators — in, not in",
        "subtitle": "9 Questions · ID OP-09-01 to OP-09-09",
        "hindiDescription": "in aur not in operators se collection me check karna.",
        "difficulty": "Easy",
        "referenceCode": "# Membership Operators\\ndef solve():\\n    # Example implementation for Membership Operators\\n    print(\"Mastering Membership Operators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Membership Operators",
            "description": "in aur not in operators se collection me check karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Membership Operators\\ndef solve():\\n    # Example implementation for Membership Operators\\n    print(\"Mastering Membership Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Membership",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Membership Operators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Membership Operators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Membership Operators. in aur not in operators se collection me check karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Membership Operators\\ndef solve():\\n    # Example implementation for Membership Operators\\n    print(\"Mastering Membership Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Membership Operators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Membership Operators",
          "description": "Membership Operators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Membership Operators\n",
          "solutionCode": "print(\"Mastering Membership Operators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Membership Operators",
          "hints": [
            "print(\"Mastering Membership Operators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Membership Operators"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_06",
        "sectionId": "02_operators",
        "topicNumber": 10,
        "globalIndex": 20,
        "qBadge": "Q.20",
        "title": "Identity Operators — is, is not",
        "subtitle": "8 Questions · ID OP-10-01 to OP-10-08",
        "hindiDescription": "is aur is not se memory identity check karna.",
        "difficulty": "Easy",
        "referenceCode": "# Identity Operators\\ndef solve():\\n    # Example implementation for Identity Operators\\n    print(\"Mastering Identity Operators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Identity Operators",
            "description": "is aur is not se memory identity check karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Identity Operators\\ndef solve():\\n    # Example implementation for Identity Operators\\n    print(\"Mastering Identity Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Identity",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Identity Operators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Identity Operators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Identity Operators. is aur is not se memory identity check karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Identity Operators\\ndef solve():\\n    # Example implementation for Identity Operators\\n    print(\"Mastering Identity Operators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Identity Operators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Identity Operators",
          "description": "Identity Operators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Identity Operators\n",
          "solutionCode": "print(\"Mastering Identity Operators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Identity Operators",
          "hints": [
            "print(\"Mastering Identity Operators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Identity Operators"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_08",
        "sectionId": "02_operators",
        "topicNumber": 11,
        "globalIndex": 21,
        "qBadge": "Q.21",
        "title": "Operator Precedence and Parentheses",
        "subtitle": "10 Questions · ID OP-11-01 to OP-11-10",
        "hindiDescription": "BODMAS / PEMDAS ke according expressions evaluate hona.",
        "difficulty": "Medium",
        "referenceCode": "# Operator Precedence\\ndef solve():\\n    # Example implementation for Operator Precedence\\n    print(\"Mastering Operator Precedence\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Operator Precedence",
            "description": "BODMAS / PEMDAS ke according expressions evaluate hona. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Operator Precedence\\ndef solve():\\n    # Example implementation for Operator Precedence\\n    print(\"Mastering Operator Precedence\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Operator",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Operator Precedence",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Operator Precedence",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Operator Precedence. BODMAS / PEMDAS ke according expressions evaluate hona. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Operator Precedence\\ndef solve():\\n    # Example implementation for Operator Precedence\\n    print(\"Mastering Operator Precedence\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Operator Precedence",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Operator Precedence",
          "description": "Operator Precedence par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Operator Precedence\n",
          "solutionCode": "print(\"Mastering Operator Precedence\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Operator Precedence",
          "hints": [
            "print(\"Mastering Operator Precedence\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Operator Precedence"
            }
          ]
        }
      },
      {
        "id": "py_02_operators_09",
        "sectionId": "02_operators",
        "topicNumber": 12,
        "globalIndex": 22,
        "qBadge": "Q.22",
        "title": "Arithmetic Calculator and Operators Practice",
        "subtitle": "11 Questions · ID OP-12-01 to OP-12-11",
        "hindiDescription": "Complex expressions me implicit aur explicit casting.",
        "difficulty": "Medium",
        "referenceCode": "# Expressions and Type Conversion\\ndef solve():\\n    # Example implementation for Expressions and Type Conversion\\n    print(\"Mastering Expressions and Type Conversion\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Expressions and Type Conversion",
            "description": "Complex expressions me implicit aur explicit casting. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Expressions and Type Conversion\\ndef solve():\\n    # Example implementation for Expressions and Type Conversion\\n    print(\"Mastering Expressions and Type Conversion\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Expressions",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Expressions and Type Conversion",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Expressions and Type Conversion",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Expressions and Type Conversion. Complex expressions me implicit aur explicit casting. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Expressions and Type Conversion\\ndef solve():\\n    # Example implementation for Expressions and Type Conversion\\n    print(\"Mastering Expressions and Type Conversion\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Expressions and Type Conversion",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Expressions and Type Conversion",
          "description": "Expressions and Type Conversion par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Expressions and Type Conversion\n",
          "solutionCode": "print(\"Mastering Expressions and Type Conversion\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Expressions and Type Conversion",
          "hints": [
            "print(\"Mastering Expressions and Type Conversion\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Expressions and Type Conversion"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "03_conditionals",
    "sectionNumber": "03",
    "title": "Conditional Statements",
    "topics": [
      {
        "id": "py_03_conditionals_01_intro",
        "sectionId": "03_conditionals",
        "topicNumber": 1,
        "globalIndex": 23,
        "qBadge": "Q.23",
        "title": "Introduction to Decision Making",
        "subtitle": "Module 03 · Topic 1",
        "hindiDescription": "Introduction to Decision Making ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "is_raining = True\nif is_raining:\n    print('Take an umbrella')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Decision Making",
            "description": "Is lesson me hum Introduction to Decision Making ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "is_raining = True",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Decision Making."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Decision Making",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Decision Making seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "is_raining = True\nif is_raining:\n    print('Take an umbrella')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Decision Making ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Decision Making",
          "description": "Introduction to Decision Making ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Decision Making below\n",
          "solutionCode": "is_raining = True\nif is_raining:\n    print('Take an umbrella')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Decision Making ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_01",
        "sectionId": "03_conditionals",
        "topicNumber": 2,
        "globalIndex": 24,
        "qBadge": "Q.24",
        "title": "Boolean Values and Conditions",
        "hindiDescription": "True aur False values ka logic.",
        "difficulty": "Easy",
        "referenceCode": "# Boolean Values\\ndef solve():\\n    # Example implementation for Boolean Values\\n    print(\"Mastering Boolean Values\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Boolean Values",
            "description": "True aur False values ka logic. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Boolean Values\\ndef solve():\\n    # Example implementation for Boolean Values\\n    print(\"Mastering Boolean Values\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Boolean",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Boolean Values",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Boolean Values",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Boolean Values. True aur False values ka logic. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Boolean Values\\ndef solve():\\n    # Example implementation for Boolean Values\\n    print(\"Mastering Boolean Values\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Boolean Values",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Boolean Values",
          "description": "Boolean Values par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Boolean Values\n",
          "solutionCode": "print(\"Mastering Boolean Values\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Boolean Values",
          "hints": [
            "print(\"Mastering Boolean Values\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Boolean Values"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_02",
        "sectionId": "03_conditionals",
        "topicNumber": 3,
        "globalIndex": 25,
        "qBadge": "Q.25",
        "title": "if Statement",
        "hindiDescription": "Basic condition evaluate karke block execute karna.",
        "difficulty": "Easy",
        "referenceCode": "# if Statement\\ndef solve():\\n    # Example implementation for if Statement\\n    print(\"Mastering if Statement\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: if Statement",
            "description": "Basic condition evaluate karke block execute karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# if Statement\\ndef solve():\\n    # Example implementation for if Statement\\n    print(\"Mastering if Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "if",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering if Statement",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "if Statement",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge if Statement. Basic condition evaluate karke block execute karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# if Statement\\ndef solve():\\n    # Example implementation for if Statement\\n    print(\"Mastering if Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering if Statement",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: if Statement",
          "description": "if Statement par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: if Statement\n",
          "solutionCode": "print(\"Mastering if Statement\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering if Statement",
          "hints": [
            "print(\"Mastering if Statement\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering if Statement"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_03",
        "sectionId": "03_conditionals",
        "topicNumber": 4,
        "globalIndex": 26,
        "qBadge": "Q.26",
        "title": "if-else Statement",
        "hindiDescription": "Condition true ya false hone par decision lena.",
        "difficulty": "Easy",
        "referenceCode": "# if-else Statement\\ndef solve():\\n    # Example implementation for if-else Statement\\n    print(\"Mastering if-else Statement\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: if-else Statement",
            "description": "Condition true ya false hone par decision lena. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# if-else Statement\\ndef solve():\\n    # Example implementation for if-else Statement\\n    print(\"Mastering if-else Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "if-else",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering if-else Statement",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "if-else Statement",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge if-else Statement. Condition true ya false hone par decision lena. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# if-else Statement\\ndef solve():\\n    # Example implementation for if-else Statement\\n    print(\"Mastering if-else Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering if-else Statement",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: if-else Statement",
          "description": "if-else Statement par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: if-else Statement\n",
          "solutionCode": "print(\"Mastering if-else Statement\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering if-else Statement",
          "hints": [
            "print(\"Mastering if-else Statement\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering if-else Statement"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_04",
        "sectionId": "03_conditionals",
        "topicNumber": 5,
        "globalIndex": 27,
        "qBadge": "Q.27",
        "title": "if-elif-else Statement",
        "hindiDescription": "Multiple alternatives check karna.",
        "difficulty": "Medium",
        "referenceCode": "# if-elif-else\\ndef solve():\\n    # Example implementation for if-elif-else\\n    print(\"Mastering if-elif-else\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: if-elif-else",
            "description": "Multiple alternatives check karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# if-elif-else\\ndef solve():\\n    # Example implementation for if-elif-else\\n    print(\"Mastering if-elif-else\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "if-elif-else",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering if-elif-else",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "if-elif-else",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge if-elif-else. Multiple alternatives check karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# if-elif-else\\ndef solve():\\n    # Example implementation for if-elif-else\\n    print(\"Mastering if-elif-else\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering if-elif-else",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: if-elif-else",
          "description": "if-elif-else par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: if-elif-else\n",
          "solutionCode": "print(\"Mastering if-elif-else\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering if-elif-else",
          "hints": [
            "print(\"Mastering if-elif-else\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering if-elif-else"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_06_cond",
        "sectionId": "03_conditionals",
        "topicNumber": 6,
        "globalIndex": 28,
        "qBadge": "Q.28",
        "title": "Comparison and Logical Conditions",
        "subtitle": "Module 03 · Topic 6",
        "hindiDescription": "Comparison and Logical Conditions ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "age = 22\nhas_voter_card = True\nif age >= 18 and has_voter_card:\n    print('Eligible to vote')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Comparison and Logical Conditions",
            "description": "Is lesson me hum Comparison and Logical Conditions ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "age = 22",
            "concepts": [
              {
                "token": "Comparison",
                "explanation": "Core concept for Comparison and Logical Conditions."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Comparison and Logical Conditions",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Comparison and Logical Conditions seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "age = 22\nhas_voter_card = True\nif age >= 18 and has_voter_card:\n    print('Eligible to vote')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Comparison and Logical Conditions ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Comparison and Logical Conditions",
          "description": "Comparison and Logical Conditions ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Comparison and Logical Conditions below\n",
          "solutionCode": "age = 22\nhas_voter_card = True\nif age >= 18 and has_voter_card:\n    print('Eligible to vote')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Comparison and Logical Conditions ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_05",
        "sectionId": "03_conditionals",
        "topicNumber": 7,
        "globalIndex": 29,
        "qBadge": "Q.29",
        "title": "Nested if Statements",
        "hindiDescription": "Ek condition ke andar doosri condition check karna.",
        "difficulty": "Medium",
        "referenceCode": "# Nested if\\ndef solve():\\n    # Example implementation for Nested if\\n    print(\"Mastering Nested if\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Nested if",
            "description": "Ek condition ke andar doosri condition check karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Nested if\\ndef solve():\\n    # Example implementation for Nested if\\n    print(\"Mastering Nested if\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Nested",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested if",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Nested if",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Nested if. Ek condition ke andar doosri condition check karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Nested if\\ndef solve():\\n    # Example implementation for Nested if\\n    print(\"Mastering Nested if\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested if",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Nested if",
          "description": "Nested if par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Nested if\n",
          "solutionCode": "print(\"Mastering Nested if\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Nested if",
          "hints": [
            "print(\"Mastering Nested if\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Nested if"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_06",
        "sectionId": "03_conditionals",
        "topicNumber": 8,
        "globalIndex": 30,
        "qBadge": "Q.30",
        "title": "Multiple Conditions and Short-Circuit Evaluation",
        "hindiDescription": "and aur or ka use karke compound conditions.",
        "difficulty": "Medium",
        "referenceCode": "# Multiple Conditions\\ndef solve():\\n    # Example implementation for Multiple Conditions\\n    print(\"Mastering Multiple Conditions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Multiple Conditions",
            "description": "and aur or ka use karke compound conditions. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Multiple Conditions\\ndef solve():\\n    # Example implementation for Multiple Conditions\\n    print(\"Mastering Multiple Conditions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Multiple",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Multiple Conditions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Multiple Conditions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Multiple Conditions. and aur or ka use karke compound conditions. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Multiple Conditions\\ndef solve():\\n    # Example implementation for Multiple Conditions\\n    print(\"Mastering Multiple Conditions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Multiple Conditions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Multiple Conditions",
          "description": "Multiple Conditions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Multiple Conditions\n",
          "solutionCode": "print(\"Mastering Multiple Conditions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Multiple Conditions",
          "hints": [
            "print(\"Mastering Multiple Conditions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Multiple Conditions"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_07",
        "sectionId": "03_conditionals",
        "topicNumber": 9,
        "globalIndex": 31,
        "qBadge": "Q.31",
        "title": "Conditional Expressions — Ternary Operator",
        "hindiDescription": "One-line ternary operator in Python.",
        "difficulty": "Medium",
        "referenceCode": "# Conditional Expressions\\ndef solve():\\n    # Example implementation for Conditional Expressions\\n    print(\"Mastering Conditional Expressions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Conditional Expressions",
            "description": "One-line ternary operator in Python. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Conditional Expressions\\ndef solve():\\n    # Example implementation for Conditional Expressions\\n    print(\"Mastering Conditional Expressions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Conditional",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Conditional Expressions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Conditional Expressions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Conditional Expressions. One-line ternary operator in Python. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Conditional Expressions\\ndef solve():\\n    # Example implementation for Conditional Expressions\\n    print(\"Mastering Conditional Expressions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Conditional Expressions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Conditional Expressions",
          "description": "Conditional Expressions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Conditional Expressions\n",
          "solutionCode": "print(\"Mastering Conditional Expressions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Conditional Expressions",
          "hints": [
            "print(\"Mastering Conditional Expressions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Conditional Expressions"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_08",
        "sectionId": "03_conditionals",
        "topicNumber": 10,
        "globalIndex": 32,
        "qBadge": "Q.32",
        "title": "match-case Statement",
        "hindiDescription": "Python 3.10+ modern structural pattern matching.",
        "difficulty": "Medium",
        "referenceCode": "# match-case\\ndef solve():\\n    # Example implementation for match-case\\n    print(\"Mastering match-case\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: match-case",
            "description": "Python 3.10+ modern structural pattern matching. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# match-case\\ndef solve():\\n    # Example implementation for match-case\\n    print(\"Mastering match-case\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "match-case",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering match-case",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "match-case",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge match-case. Python 3.10+ modern structural pattern matching. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# match-case\\ndef solve():\\n    # Example implementation for match-case\\n    print(\"Mastering match-case\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering match-case",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: match-case",
          "description": "match-case par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: match-case\n",
          "solutionCode": "print(\"Mastering match-case\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering match-case",
          "hints": [
            "print(\"Mastering match-case\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering match-case"
            }
          ]
        }
      },
      {
        "id": "py_03_conditionals_09",
        "sectionId": "03_conditionals",
        "topicNumber": 11,
        "globalIndex": 33,
        "qBadge": "Q.33",
        "title": "Conditional Statements Mini Projects",
        "hindiDescription": "Ticket pricing, grading system aur discount logic.",
        "difficulty": "Hard",
        "referenceCode": "# Real-World Decision Problems\\ndef solve():\\n    # Example implementation for Real-World Decision Problems\\n    print(\"Mastering Real-World Decision Problems\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Real-World Decision Problems",
            "description": "Ticket pricing, grading system aur discount logic. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Real-World Decision Problems\\ndef solve():\\n    # Example implementation for Real-World Decision Problems\\n    print(\"Mastering Real-World Decision Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Real-World",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Real-World Decision Problems",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Real-World Decision Problems",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Real-World Decision Problems. Ticket pricing, grading system aur discount logic. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Real-World Decision Problems\\ndef solve():\\n    # Example implementation for Real-World Decision Problems\\n    print(\"Mastering Real-World Decision Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Real-World Decision Problems",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Real-World Decision Problems",
          "description": "Real-World Decision Problems par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Real-World Decision Problems\n",
          "solutionCode": "print(\"Mastering Real-World Decision Problems\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Real-World Decision Problems",
          "hints": [
            "print(\"Mastering Real-World Decision Problems\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Real-World Decision Problems"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "04_loops",
    "sectionNumber": "04",
    "title": "Loops & Iteration",
    "topics": [
      {
        "id": "py_04_loops_00_intro",
        "sectionId": "04_loops",
        "topicNumber": 1,
        "globalIndex": 34,
        "qBadge": "Q.34",
        "title": "Introduction to Loops",
        "subtitle": "Module 04 · Topic 1",
        "hindiDescription": "Introduction to Loops ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "for i in [1, 2, 3]:\n    print('Count:', i)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Loops",
            "description": "Is lesson me hum Introduction to Loops ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "for i in [1, 2, 3]:",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Loops."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Loops",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Loops seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "for i in [1, 2, 3]:\n    print('Count:', i)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Loops ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Loops",
          "description": "Introduction to Loops ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Loops below\n",
          "solutionCode": "for i in [1, 2, 3]:\n    print('Count:', i)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Loops ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_04_loops_02",
        "sectionId": "04_loops",
        "topicNumber": 2,
        "globalIndex": 35,
        "qBadge": "Q.35",
        "title": "for Loop",
        "hindiDescription": "Sequence ya range par element-by-element iterate karna.",
        "difficulty": "Easy",
        "referenceCode": "# for Loop\\ndef solve():\\n    # Example implementation for for Loop\\n    print(\"Mastering for Loop\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: for Loop",
            "description": "Sequence ya range par element-by-element iterate karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# for Loop\\ndef solve():\\n    # Example implementation for for Loop\\n    print(\"Mastering for Loop\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "for",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering for Loop",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "for Loop",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge for Loop. Sequence ya range par element-by-element iterate karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# for Loop\\ndef solve():\\n    # Example implementation for for Loop\\n    print(\"Mastering for Loop\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering for Loop",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: for Loop",
          "description": "for Loop par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: for Loop\n",
          "solutionCode": "print(\"Mastering for Loop\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering for Loop",
          "hints": [
            "print(\"Mastering for Loop\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering for Loop"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_03",
        "sectionId": "04_loops",
        "topicNumber": 3,
        "globalIndex": 36,
        "qBadge": "Q.36",
        "title": "range() Function",
        "hindiDescription": "start, stop aur step ke sath numbers generate karna.",
        "difficulty": "Easy",
        "referenceCode": "# range() Function\\ndef solve():\\n    # Example implementation for range() Function\\n    print(\"Mastering range() Function\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: range() Function",
            "description": "start, stop aur step ke sath numbers generate karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# range() Function\\ndef solve():\\n    # Example implementation for range() Function\\n    print(\"Mastering range() Function\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "range()",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering range() Function",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "range() Function",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge range() Function. start, stop aur step ke sath numbers generate karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# range() Function\\ndef solve():\\n    # Example implementation for range() Function\\n    print(\"Mastering range() Function\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering range() Function",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: range() Function",
          "description": "range() Function par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: range() Function\n",
          "solutionCode": "print(\"Mastering range() Function\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering range() Function",
          "hints": [
            "print(\"Mastering range() Function\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering range() Function"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_01",
        "sectionId": "04_loops",
        "topicNumber": 4,
        "globalIndex": 37,
        "qBadge": "Q.37",
        "title": "while Loop",
        "hindiDescription": "Condition true hone tak code repeat karna.",
        "difficulty": "Easy",
        "referenceCode": "# while Loop\\ndef solve():\\n    # Example implementation for while Loop\\n    print(\"Mastering while Loop\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: while Loop",
            "description": "Condition true hone tak code repeat karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# while Loop\\ndef solve():\\n    # Example implementation for while Loop\\n    print(\"Mastering while Loop\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "while",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering while Loop",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "while Loop",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge while Loop. Condition true hone tak code repeat karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# while Loop\\ndef solve():\\n    # Example implementation for while Loop\\n    print(\"Mastering while Loop\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering while Loop",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: while Loop",
          "description": "while Loop par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: while Loop\n",
          "solutionCode": "print(\"Mastering while Loop\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering while Loop",
          "hints": [
            "print(\"Mastering while Loop\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering while Loop"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_04",
        "sectionId": "04_loops",
        "topicNumber": 5,
        "globalIndex": 38,
        "qBadge": "Q.38",
        "title": "Loop Counters and Accumulators",
        "hindiDescription": "Running sum aur counts maintain karna.",
        "difficulty": "Medium",
        "referenceCode": "# Loop Counters and Accumulators\\ndef solve():\\n    # Example implementation for Loop Counters and Accumulators\\n    print(\"Mastering Loop Counters and Accumulators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Loop Counters and Accumulators",
            "description": "Running sum aur counts maintain karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Loop Counters and Accumulators\\ndef solve():\\n    # Example implementation for Loop Counters and Accumulators\\n    print(\"Mastering Loop Counters and Accumulators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Loop",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Loop Counters and Accumulators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Loop Counters and Accumulators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Loop Counters and Accumulators. Running sum aur counts maintain karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Loop Counters and Accumulators\\ndef solve():\\n    # Example implementation for Loop Counters and Accumulators\\n    print(\"Mastering Loop Counters and Accumulators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Loop Counters and Accumulators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Loop Counters and Accumulators",
          "description": "Loop Counters and Accumulators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Loop Counters and Accumulators\n",
          "solutionCode": "print(\"Mastering Loop Counters and Accumulators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Loop Counters and Accumulators",
          "hints": [
            "print(\"Mastering Loop Counters and Accumulators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Loop Counters and Accumulators"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_05_break",
        "sectionId": "04_loops",
        "topicNumber": 6,
        "globalIndex": 39,
        "qBadge": "Q.39",
        "title": "break Statement",
        "subtitle": "Module 04 · Topic 6",
        "hindiDescription": "break Statement ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "for i in range(1, 10):\n    if i == 5:\n        break\n    print(i)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to break Statement",
            "description": "Is lesson me hum break Statement ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "for i in range(1, 10):",
            "concepts": [
              {
                "token": "break",
                "explanation": "Core concept for break Statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "break Statement",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum break Statement seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "for i in range(1, 10):\n    if i == 5:\n        break\n    print(i)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne break Statement ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: break Statement",
          "description": "break Statement ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for break Statement below\n",
          "solutionCode": "for i in range(1, 10):\n    if i == 5:\n        break\n    print(i)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "break Statement ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_04_loops_05_continue",
        "sectionId": "04_loops",
        "topicNumber": 7,
        "globalIndex": 40,
        "qBadge": "Q.40",
        "title": "continue Statement",
        "subtitle": "Module 04 · Topic 7",
        "hindiDescription": "continue Statement ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to continue Statement",
            "description": "Is lesson me hum continue Statement ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "for i in range(1, 6):",
            "concepts": [
              {
                "token": "continue",
                "explanation": "Core concept for continue Statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "continue Statement",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum continue Statement seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne continue Statement ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: continue Statement",
          "description": "continue Statement ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for continue Statement below\n",
          "solutionCode": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "continue Statement ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_04_loops_05_pass",
        "sectionId": "04_loops",
        "topicNumber": 8,
        "globalIndex": 41,
        "qBadge": "Q.41",
        "title": "pass Statement",
        "subtitle": "Module 04 · Topic 8",
        "hindiDescription": "pass Statement ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "for i in range(3):\n    pass\nprint('Done')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to pass Statement",
            "description": "Is lesson me hum pass Statement ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "for i in range(3):",
            "concepts": [
              {
                "token": "pass",
                "explanation": "Core concept for pass Statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "pass Statement",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum pass Statement seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "for i in range(3):\n    pass\nprint('Done')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne pass Statement ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: pass Statement",
          "description": "pass Statement ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for pass Statement below\n",
          "solutionCode": "for i in range(3):\n    pass\nprint('Done')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "pass Statement ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_04_loops_06",
        "sectionId": "04_loops",
        "topicNumber": 9,
        "globalIndex": 42,
        "qBadge": "Q.42",
        "title": "Nested Loops",
        "hindiDescription": "Loop ke andar loop chala kar 2D patterns banana.",
        "difficulty": "Medium",
        "referenceCode": "# Nested Loops\\ndef solve():\\n    # Example implementation for Nested Loops\\n    print(\"Mastering Nested Loops\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Nested Loops",
            "description": "Loop ke andar loop chala kar 2D patterns banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Nested Loops\\ndef solve():\\n    # Example implementation for Nested Loops\\n    print(\"Mastering Nested Loops\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Nested",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested Loops",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Nested Loops",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Nested Loops. Loop ke andar loop chala kar 2D patterns banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Nested Loops\\ndef solve():\\n    # Example implementation for Nested Loops\\n    print(\"Mastering Nested Loops\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested Loops",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Nested Loops",
          "description": "Nested Loops par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Nested Loops\n",
          "solutionCode": "print(\"Mastering Nested Loops\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Nested Loops",
          "hints": [
            "print(\"Mastering Nested Loops\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Nested Loops"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_08",
        "sectionId": "04_loops",
        "topicNumber": 10,
        "globalIndex": 43,
        "qBadge": "Q.43",
        "title": "Loop else Clause",
        "hindiDescription": "Bina break ke loop complete hone par code run karna.",
        "difficulty": "Medium",
        "referenceCode": "# Loop else Clause\\ndef solve():\\n    # Example implementation for Loop else Clause\\n    print(\"Mastering Loop else Clause\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Loop else Clause",
            "description": "Bina break ke loop complete hone par code run karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Loop else Clause\\ndef solve():\\n    # Example implementation for Loop else Clause\\n    print(\"Mastering Loop else Clause\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Loop",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Loop else Clause",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Loop else Clause",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Loop else Clause. Bina break ke loop complete hone par code run karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Loop else Clause\\ndef solve():\\n    # Example implementation for Loop else Clause\\n    print(\"Mastering Loop else Clause\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Loop else Clause",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Loop else Clause",
          "description": "Loop else Clause par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Loop else Clause\n",
          "solutionCode": "print(\"Mastering Loop else Clause\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Loop else Clause",
          "hints": [
            "print(\"Mastering Loop else Clause\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Loop else Clause"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_07",
        "sectionId": "04_loops",
        "topicNumber": 11,
        "globalIndex": 44,
        "qBadge": "Q.44",
        "title": "Patterns and Number Series",
        "hindiDescription": "Star patterns aur number matrices print karna.",
        "difficulty": "Medium",
        "referenceCode": "# Patterns and Number Series\\ndef solve():\\n    # Example implementation for Patterns and Number Series\\n    print(\"Mastering Patterns and Number Series\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Patterns and Number Series",
            "description": "Star patterns aur number matrices print karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Patterns and Number Series\\ndef solve():\\n    # Example implementation for Patterns and Number Series\\n    print(\"Mastering Patterns and Number Series\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Patterns",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Patterns and Number Series",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Patterns and Number Series",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Patterns and Number Series. Star patterns aur number matrices print karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Patterns and Number Series\\ndef solve():\\n    # Example implementation for Patterns and Number Series\\n    print(\"Mastering Patterns and Number Series\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Patterns and Number Series",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Patterns and Number Series",
          "description": "Patterns and Number Series par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Patterns and Number Series\n",
          "solutionCode": "print(\"Mastering Patterns and Number Series\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Patterns and Number Series",
          "hints": [
            "print(\"Mastering Patterns and Number Series\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Patterns and Number Series"
            }
          ]
        }
      },
      {
        "id": "py_04_loops_09",
        "sectionId": "04_loops",
        "topicNumber": 12,
        "globalIndex": 45,
        "qBadge": "Q.45",
        "title": "Loops Practice and Mini Projects",
        "hindiDescription": "Characters aur lists par loop chalana.",
        "difficulty": "Hard",
        "referenceCode": "# Iterating Strings and Collections\\ndef solve():\\n    # Example implementation for Iterating Strings and Collections\\n    print(\"Mastering Iterating Strings and Collections\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Iterating Strings and Collections",
            "description": "Characters aur lists par loop chalana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Iterating Strings and Collections\\ndef solve():\\n    # Example implementation for Iterating Strings and Collections\\n    print(\"Mastering Iterating Strings and Collections\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Iterating",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Iterating Strings and Collections",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Iterating Strings and Collections",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Iterating Strings and Collections. Characters aur lists par loop chalana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Iterating Strings and Collections\\ndef solve():\\n    # Example implementation for Iterating Strings and Collections\\n    print(\"Mastering Iterating Strings and Collections\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Iterating Strings and Collections",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Iterating Strings and Collections",
          "description": "Iterating Strings and Collections par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Iterating Strings and Collections\n",
          "solutionCode": "print(\"Mastering Iterating Strings and Collections\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Iterating Strings and Collections",
          "hints": [
            "print(\"Mastering Iterating Strings and Collections\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Iterating Strings and Collections"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "05_strings",
    "sectionNumber": "05",
    "title": "Strings in Depth",
    "topics": [
      {
        "id": "py_05_strings_00_intro",
        "sectionId": "05_strings",
        "topicNumber": 1,
        "globalIndex": 46,
        "qBadge": "Q.46",
        "title": "Introduction to Strings",
        "subtitle": "Module 05 · Topic 1",
        "hindiDescription": "Introduction to Strings ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "msg = 'Hello Python'\nprint(msg)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Strings",
            "description": "Is lesson me hum Introduction to Strings ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "msg = 'Hello Python'",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Strings."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Strings",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Strings seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "msg = 'Hello Python'\nprint(msg)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Strings ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Strings",
          "description": "Introduction to Strings ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Strings below\n",
          "solutionCode": "msg = 'Hello Python'\nprint(msg)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Strings ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_05_strings_01",
        "sectionId": "05_strings",
        "topicNumber": 2,
        "globalIndex": 47,
        "qBadge": "Q.47",
        "title": "String Creation and Character Access",
        "hindiDescription": "Positive aur negative index se characters access karna.",
        "difficulty": "Easy",
        "referenceCode": "# String Indexing\\ndef solve():\\n    # Example implementation for String Indexing\\n    print(\"Mastering String Indexing\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: String Indexing",
            "description": "Positive aur negative index se characters access karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# String Indexing\\ndef solve():\\n    # Example implementation for String Indexing\\n    print(\"Mastering String Indexing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Indexing",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "String Indexing",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge String Indexing. Positive aur negative index se characters access karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# String Indexing\\ndef solve():\\n    # Example implementation for String Indexing\\n    print(\"Mastering String Indexing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Indexing",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: String Indexing",
          "description": "String Indexing par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: String Indexing\n",
          "solutionCode": "print(\"Mastering String Indexing\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering String Indexing",
          "hints": [
            "print(\"Mastering String Indexing\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering String Indexing"
            }
          ]
        }
      },
      {
        "id": "py_05_strings_03_concat",
        "sectionId": "05_strings",
        "topicNumber": 3,
        "globalIndex": 48,
        "qBadge": "Q.48",
        "title": "String Concatenation and Repetition",
        "subtitle": "Module 05 · Topic 3",
        "hindiDescription": "String Concatenation and Repetition ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "greeting = 'Hello ' + 'World'\nprint(greeting * 2)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to String Concatenation and Repetition",
            "description": "Is lesson me hum String Concatenation and Repetition ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "greeting = 'Hello ' + 'World'",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core concept for String Concatenation and Repetition."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "String Concatenation and Repetition",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum String Concatenation and Repetition seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "greeting = 'Hello ' + 'World'\nprint(greeting * 2)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne String Concatenation and Repetition ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: String Concatenation and Repetition",
          "description": "String Concatenation and Repetition ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for String Concatenation and Repetition below\n",
          "solutionCode": "greeting = 'Hello ' + 'World'\nprint(greeting * 2)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "String Concatenation and Repetition ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_05_strings_04_index",
        "sectionId": "05_strings",
        "topicNumber": 4,
        "globalIndex": 49,
        "qBadge": "Q.49",
        "title": "String Indexing and Negative Indexing",
        "subtitle": "Module 05 · Topic 4",
        "hindiDescription": "String Indexing and Negative Indexing ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "lang = 'PYTHON'\nprint('First:', lang[0])\nprint('Last:', lang[-1])",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to String Indexing and Negative Indexing",
            "description": "Is lesson me hum String Indexing and Negative Indexing ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "lang = 'PYTHON'",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core concept for String Indexing and Negative Indexing."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "String Indexing and Negative Indexing",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum String Indexing and Negative Indexing seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "lang = 'PYTHON'\nprint('First:', lang[0])\nprint('Last:', lang[-1])",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne String Indexing and Negative Indexing ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: String Indexing and Negative Indexing",
          "description": "String Indexing and Negative Indexing ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for String Indexing and Negative Indexing below\n",
          "solutionCode": "lang = 'PYTHON'\nprint('First:', lang[0])\nprint('Last:', lang[-1])",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "String Indexing and Negative Indexing ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_05_strings_02",
        "sectionId": "05_strings",
        "topicNumber": 5,
        "globalIndex": 50,
        "qBadge": "Q.50",
        "title": "String Slicing and Step",
        "hindiDescription": "string[start:stop:step] syntax se substrings nikalna.",
        "difficulty": "Medium",
        "referenceCode": "# Slicing\\ndef solve():\\n    # Example implementation for Slicing\\n    print(\"Mastering Slicing\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Slicing",
            "description": "string[start:stop:step] syntax se substrings nikalna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Slicing\\ndef solve():\\n    # Example implementation for Slicing\\n    print(\"Mastering Slicing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Slicing",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Slicing",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Slicing",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Slicing. string[start:stop:step] syntax se substrings nikalna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Slicing\\ndef solve():\\n    # Example implementation for Slicing\\n    print(\"Mastering Slicing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Slicing",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Slicing",
          "description": "Slicing par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Slicing\n",
          "solutionCode": "print(\"Mastering Slicing\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Slicing",
          "hints": [
            "print(\"Mastering Slicing\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Slicing"
            }
          ]
        }
      },
      {
        "id": "py_05_strings_06_len",
        "sectionId": "05_strings",
        "topicNumber": 6,
        "globalIndex": 51,
        "qBadge": "Q.51",
        "title": "String Length and Membership",
        "subtitle": "Module 05 · Topic 6",
        "hindiDescription": "String Length and Membership ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "quote = 'Python is powerful'\nprint(len(quote))\nprint('powerful' in quote)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to String Length and Membership",
            "description": "Is lesson me hum String Length and Membership ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "quote = 'Python is powerful'",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core concept for String Length and Membership."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "String Length and Membership",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum String Length and Membership seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "quote = 'Python is powerful'\nprint(len(quote))\nprint('powerful' in quote)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne String Length and Membership ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: String Length and Membership",
          "description": "String Length and Membership ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for String Length and Membership below\n",
          "solutionCode": "quote = 'Python is powerful'\nprint(len(quote))\nprint('powerful' in quote)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "String Length and Membership ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_05_strings_03",
        "sectionId": "05_strings",
        "topicNumber": 7,
        "globalIndex": 52,
        "qBadge": "Q.52",
        "title": "String Comparison and Immutability",
        "hindiDescription": "Strings immutable kyun hoti hain aur naya string banana.",
        "difficulty": "Medium",
        "referenceCode": "# String Immutability\\ndef solve():\\n    # Example implementation for String Immutability\\n    print(\"Mastering String Immutability\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: String Immutability",
            "description": "Strings immutable kyun hoti hain aur naya string banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# String Immutability\\ndef solve():\\n    # Example implementation for String Immutability\\n    print(\"Mastering String Immutability\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Immutability",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "String Immutability",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge String Immutability. Strings immutable kyun hoti hain aur naya string banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# String Immutability\\ndef solve():\\n    # Example implementation for String Immutability\\n    print(\"Mastering String Immutability\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Immutability",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: String Immutability",
          "description": "String Immutability par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: String Immutability\n",
          "solutionCode": "print(\"Mastering String Immutability\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering String Immutability",
          "hints": [
            "print(\"Mastering String Immutability\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering String Immutability"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_15",
        "sectionId": "05_strings",
        "topicNumber": 8,
        "globalIndex": 53,
        "qBadge": "Q.53",
        "title": "Escape Sequences and Raw Strings",
        "subtitle": "10 Questions · ID PB-15-01 to PB-15-10",
        "hindiDescription": "Newline, tab aur quotes jaisi escape sequences se text formatting.",
        "difficulty": "Medium",
        "referenceCode": "print(\"Hello\\\\nWorld\\\\tPython\")",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 0,
            "title": "Escape Sequences \\n and \\t",
            "description": "\\n se new line aur \\t se tab space generate hota hai.",
            "codeSnippet": "print(\"Hello\\\\nWorld\\\\tPython\")",
            "concepts": [
              {
                "token": "\\n",
                "explanation": "Newline character jo text ko agli line me shift karta hai."
              },
              {
                "token": "\\t",
                "explanation": "Horizontal tab space jo fixed gap deta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Hello\nWorld\tPython",
            "pipelineFlow": [
              {
                "title": "Parse",
                "detail": "Escape characters interpret hote hain",
                "type": "process"
              },
              {
                "title": "Render",
                "detail": "Hello on line 1, World and Python on line 2",
                "type": "output"
              }
            ],
            "teacherNarration": "Escape sequences special characters hain jo backslash se shuru hote hain jaise newline ke liye slash n aur tab ke liye slash t."
          }
        ],
        "practice": {
          "title": "Use \\n Escape Sequence",
          "description": "Ek hi print() statement me \\n ka use karke Hello aur World do alag lines me print karein.",
          "starterCode": "# Print Hello and World on separate lines using \\n\n",
          "solutionCode": "print(\"Hello\\nWorld\")",
          "sampleInput": "",
          "sampleOutput": "Hello\nWorld",
          "hints": [
            "print(\"Hello\\nWorld\") likhiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Hello\nWorld"
            }
          ]
        }
      },
      {
        "id": "py_01_basics_14",
        "sectionId": "05_strings",
        "topicNumber": 9,
        "globalIndex": 54,
        "qBadge": "Q.54",
        "title": "f-Strings and String Formatting",
        "hindiDescription": "Modern Python f-strings se clean string formatting seekho.",
        "difficulty": "Medium",
        "referenceCode": "name = \"Rahul\"\nscore = 95\nprint(f\"Student {name} scored {score}\")",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 1,
            "activeLineIndex": 2,
            "title": "Line 1-3: Modern f-String Interpolation",
            "description": "f\"...\" ke andar curly braces {variable} likhne se variable ki value direct string me embed ho jati hai.",
            "codeSnippet": "print(f\"Student {name} scored {score}\")",
            "concepts": [
              {
                "token": "f\"...\"",
                "explanation": "f-string (formatted string literal)."
              },
              {
                "token": "{name}",
                "explanation": "Expression interpolation jo variable value insert karta hai."
              }
            ],
            "memoryVariables": [
              {
                "name": "name",
                "value": "\"Rahul\"",
                "type": "str"
              },
              {
                "name": "score",
                "value": "95",
                "type": "int"
              }
            ],
            "consoleOutput": "Student Rahul scored 95",
            "pipelineFlow": [
              {
                "title": "Variables",
                "detail": "name, score",
                "type": "input"
              },
              {
                "title": "f-string",
                "detail": "Interpolation",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Student Rahul scored 95",
                "type": "output"
              }
            ],
            "teacherNarration": "f-strings Python ka sabse fast aur clean tarika hai strings me variables ko embed karne ka."
          }
        ],
        "practice": {
          "title": "Format Output with f-String",
          "description": "name=\"Rahul\" aur score=95 banakar f-string se print kijiye: \"Student Rahul scored 95\".",
          "starterCode": "# Use f-string to format output\n",
          "solutionCode": "name = \"Rahul\"\nscore = 95\nprint(f\"Student {name} scored {score}\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Student Rahul scored 95",
          "hints": [
            "print(f\"Student {name} scored {score}\") likhiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Student Rahul scored 95"
            }
          ]
        }
      },
      {
        "id": "py_05_strings_04",
        "sectionId": "05_strings",
        "topicNumber": 10,
        "globalIndex": 55,
        "qBadge": "Q.55",
        "title": "String Methods — upper(), lower(), title(), capitalize()",
        "hindiDescription": "lower(), upper(), strip(), count() methods.",
        "difficulty": "Easy",
        "referenceCode": "# String Methods\\ndef solve():\\n    # Example implementation for String Methods\\n    print(\"Mastering String Methods\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: String Methods",
            "description": "lower(), upper(), strip(), count() methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# String Methods\\ndef solve():\\n    # Example implementation for String Methods\\n    print(\"Mastering String Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Methods",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "String Methods",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge String Methods. lower(), upper(), strip(), count() methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# String Methods\\ndef solve():\\n    # Example implementation for String Methods\\n    print(\"Mastering String Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Methods",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: String Methods",
          "description": "String Methods par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: String Methods\n",
          "solutionCode": "print(\"Mastering String Methods\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering String Methods",
          "hints": [
            "print(\"Mastering String Methods\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering String Methods"
            }
          ]
        }
      },
      {
        "id": "py_05_strings_05",
        "sectionId": "05_strings",
        "topicNumber": 11,
        "globalIndex": 56,
        "qBadge": "Q.56",
        "title": "String Methods — strip(), replace(), find(), count()",
        "hindiDescription": "find(), index(), replace() functions.",
        "difficulty": "Medium",
        "referenceCode": "# Searching and Replacing\\ndef solve():\\n    # Example implementation for Searching and Replacing\\n    print(\"Mastering Searching and Replacing\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Searching and Replacing",
            "description": "find(), index(), replace() functions. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Searching and Replacing\\ndef solve():\\n    # Example implementation for Searching and Replacing\\n    print(\"Mastering Searching and Replacing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Searching",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Searching and Replacing",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Searching and Replacing",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Searching and Replacing. find(), index(), replace() functions. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Searching and Replacing\\ndef solve():\\n    # Example implementation for Searching and Replacing\\n    print(\"Mastering Searching and Replacing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Searching and Replacing",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Searching and Replacing",
          "description": "Searching and Replacing par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Searching and Replacing\n",
          "solutionCode": "print(\"Mastering Searching and Replacing\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Searching and Replacing",
          "hints": [
            "print(\"Mastering Searching and Replacing\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Searching and Replacing"
            }
          ]
        }
      },
      {
        "id": "py_05_strings_06",
        "sectionId": "05_strings",
        "topicNumber": 12,
        "globalIndex": 57,
        "qBadge": "Q.57",
        "title": "split(), join(), startswith() and endswith()",
        "hindiDescription": "Strings ko words me todna aur wapas jodna.",
        "difficulty": "Medium",
        "referenceCode": "# split() and join()\\ndef solve():\\n    # Example implementation for split() and join()\\n    print(\"Mastering split() and join()\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: split() and join()",
            "description": "Strings ko words me todna aur wapas jodna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# split() and join()\\ndef solve():\\n    # Example implementation for split() and join()\\n    print(\"Mastering split() and join()\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "split()",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering split() and join()",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "split() and join()",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge split() and join(). Strings ko words me todna aur wapas jodna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# split() and join()\\ndef solve():\\n    # Example implementation for split() and join()\\n    print(\"Mastering split() and join()\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering split() and join()",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: split() and join()",
          "description": "split() and join() par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: split() and join()\n",
          "solutionCode": "print(\"Mastering split() and join()\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering split() and join()",
          "hints": [
            "print(\"Mastering split() and join()\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering split() and join()"
            }
          ]
        }
      },
      {
        "id": "py_05_strings_08",
        "sectionId": "05_strings",
        "topicNumber": 13,
        "globalIndex": 58,
        "qBadge": "Q.58",
        "title": "String Processing Challenges and Projects",
        "hindiDescription": "Classic string interview challenges.",
        "difficulty": "Hard",
        "referenceCode": "# Palindrome and Anagram Problems\\ndef solve():\\n    # Example implementation for Palindrome and Anagram Problems\\n    print(\"Mastering Palindrome and Anagram Problems\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Palindrome and Anagram Problems",
            "description": "Classic string interview challenges. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Palindrome and Anagram Problems\\ndef solve():\\n    # Example implementation for Palindrome and Anagram Problems\\n    print(\"Mastering Palindrome and Anagram Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Palindrome",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Palindrome and Anagram Problems",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Palindrome and Anagram Problems",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Palindrome and Anagram Problems. Classic string interview challenges. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Palindrome and Anagram Problems\\ndef solve():\\n    # Example implementation for Palindrome and Anagram Problems\\n    print(\"Mastering Palindrome and Anagram Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Palindrome and Anagram Problems",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Palindrome and Anagram Problems",
          "description": "Palindrome and Anagram Problems par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Palindrome and Anagram Problems\n",
          "solutionCode": "print(\"Mastering Palindrome and Anagram Problems\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Palindrome and Anagram Problems",
          "hints": [
            "print(\"Mastering Palindrome and Anagram Problems\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Palindrome and Anagram Problems"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "06_lists_tuples",
    "sectionNumber": "06",
    "title": "Lists & Tuples",
    "topics": [
      {
        "id": "py_06_lists_tuples_00_intro",
        "sectionId": "06_lists_tuples",
        "topicNumber": 1,
        "globalIndex": 59,
        "qBadge": "Q.59",
        "title": "Introduction to Lists",
        "subtitle": "Module 06 · Topic 1",
        "hindiDescription": "Introduction to Lists ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "nums = [10, 20, 30]\nprint(nums)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Lists",
            "description": "Is lesson me hum Introduction to Lists ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "nums = [10, 20, 30]",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Lists."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Lists",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Lists seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "nums = [10, 20, 30]\nprint(nums)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Lists ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Lists",
          "description": "Introduction to Lists ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Lists below\n",
          "solutionCode": "nums = [10, 20, 30]\nprint(nums)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Lists ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_01",
        "sectionId": "06_lists_tuples",
        "topicNumber": 2,
        "globalIndex": 60,
        "qBadge": "Q.60",
        "title": "Creating and Accessing Lists",
        "hindiDescription": "Square brackets [] se ordered mutable collection banana.",
        "difficulty": "Easy",
        "referenceCode": "# Creating Lists\\ndef solve():\\n    # Example implementation for Creating Lists\\n    print(\"Mastering Creating Lists\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Creating Lists",
            "description": "Square brackets [] se ordered mutable collection banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Creating Lists\\ndef solve():\\n    # Example implementation for Creating Lists\\n    print(\"Mastering Creating Lists\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Creating",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Creating Lists",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Creating Lists",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Creating Lists. Square brackets [] se ordered mutable collection banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Creating Lists\\ndef solve():\\n    # Example implementation for Creating Lists\\n    print(\"Mastering Creating Lists\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Creating Lists",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Creating Lists",
          "description": "Creating Lists par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Creating Lists\n",
          "solutionCode": "print(\"Mastering Creating Lists\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Creating Lists",
          "hints": [
            "print(\"Mastering Creating Lists\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Creating Lists"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_02",
        "sectionId": "06_lists_tuples",
        "topicNumber": 3,
        "globalIndex": 61,
        "qBadge": "Q.61",
        "title": "List Indexing and Slicing",
        "hindiDescription": "List elements access aur slice karna.",
        "difficulty": "Easy",
        "referenceCode": "# Indexing and Slicing\\ndef solve():\\n    # Example implementation for Indexing and Slicing\\n    print(\"Mastering Indexing and Slicing\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Indexing and Slicing",
            "description": "List elements access aur slice karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Indexing and Slicing\\ndef solve():\\n    # Example implementation for Indexing and Slicing\\n    print(\"Mastering Indexing and Slicing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Indexing",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Indexing and Slicing",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Indexing and Slicing",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Indexing and Slicing. List elements access aur slice karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Indexing and Slicing\\ndef solve():\\n    # Example implementation for Indexing and Slicing\\n    print(\"Mastering Indexing and Slicing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Indexing and Slicing",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Indexing and Slicing",
          "description": "Indexing and Slicing par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Indexing and Slicing\n",
          "solutionCode": "print(\"Mastering Indexing and Slicing\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Indexing and Slicing",
          "hints": [
            "print(\"Mastering Indexing and Slicing\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Indexing and Slicing"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_03",
        "sectionId": "06_lists_tuples",
        "topicNumber": 4,
        "globalIndex": 62,
        "qBadge": "Q.62",
        "title": "Adding Elements — append(), insert(), extend()",
        "hindiDescription": "append(), insert(), pop(), remove() methods.",
        "difficulty": "Easy",
        "referenceCode": "# Adding and Removing Elements\\ndef solve():\\n    # Example implementation for Adding and Removing Elements\\n    print(\"Mastering Adding and Removing Elements\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Adding and Removing Elements",
            "description": "append(), insert(), pop(), remove() methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Adding and Removing Elements\\ndef solve():\\n    # Example implementation for Adding and Removing Elements\\n    print(\"Mastering Adding and Removing Elements\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Adding",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Adding and Removing Elements",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Adding and Removing Elements",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Adding and Removing Elements. append(), insert(), pop(), remove() methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Adding and Removing Elements\\ndef solve():\\n    # Example implementation for Adding and Removing Elements\\n    print(\"Mastering Adding and Removing Elements\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Adding and Removing Elements",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Adding and Removing Elements",
          "description": "Adding and Removing Elements par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Adding and Removing Elements\n",
          "solutionCode": "print(\"Mastering Adding and Removing Elements\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Adding and Removing Elements",
          "hints": [
            "print(\"Mastering Adding and Removing Elements\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Adding and Removing Elements"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_05_remove",
        "sectionId": "06_lists_tuples",
        "topicNumber": 5,
        "globalIndex": 63,
        "qBadge": "Q.63",
        "title": "Removing Elements — remove(), pop(), clear()",
        "subtitle": "Module 06 · Topic 5",
        "hindiDescription": "Removing Elements — remove(), pop(), clear() ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "nums = [10, 20, 30, 40]\nnums.remove(20)\npopped = nums.pop()\nprint(nums)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Removing Elements — remove(), pop(), clear()",
            "description": "Is lesson me hum Removing Elements — remove(), pop(), clear() ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "nums = [10, 20, 30, 40]",
            "concepts": [
              {
                "token": "Removing",
                "explanation": "Core concept for Removing Elements — remove(), pop(), clear()."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Removing Elements — remove(), pop(), clear()",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Removing Elements — remove(), pop(), clear() seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "nums = [10, 20, 30, 40]\nnums.remove(20)\npopped = nums.pop()\nprint(nums)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Removing Elements — remove(), pop(), clear() ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Removing Elements — remove(), pop(), clear()",
          "description": "Removing Elements — remove(), pop(), clear() ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Removing Elements — remove(), pop(), clear() below\n",
          "solutionCode": "nums = [10, 20, 30, 40]\nnums.remove(20)\npopped = nums.pop()\nprint(nums)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Removing Elements — remove(), pop(), clear() ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_04",
        "sectionId": "06_lists_tuples",
        "topicNumber": 6,
        "globalIndex": 64,
        "qBadge": "Q.64",
        "title": "Updating and Searching List Elements",
        "hindiDescription": "sort(), reverse(), extend(), clear() methods.",
        "difficulty": "Medium",
        "referenceCode": "# List Methods\\ndef solve():\\n    # Example implementation for List Methods\\n    print(\"Mastering List Methods\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: List Methods",
            "description": "sort(), reverse(), extend(), clear() methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# List Methods\\ndef solve():\\n    # Example implementation for List Methods\\n    print(\"Mastering List Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "List",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering List Methods",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "List Methods",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge List Methods. sort(), reverse(), extend(), clear() methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# List Methods\\ndef solve():\\n    # Example implementation for List Methods\\n    print(\"Mastering List Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering List Methods",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: List Methods",
          "description": "List Methods par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: List Methods\n",
          "solutionCode": "print(\"Mastering List Methods\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering List Methods",
          "hints": [
            "print(\"Mastering List Methods\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering List Methods"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_09",
        "sectionId": "06_lists_tuples",
        "topicNumber": 7,
        "globalIndex": 65,
        "qBadge": "Q.65",
        "title": "Sorting and Reversing Lists",
        "hindiDescription": "sorted() function aur custom key sorting.",
        "difficulty": "Medium",
        "referenceCode": "# Sorting and Searching Lists\\ndef solve():\\n    # Example implementation for Sorting and Searching Lists\\n    print(\"Mastering Sorting and Searching Lists\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Sorting and Searching Lists",
            "description": "sorted() function aur custom key sorting. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Sorting and Searching Lists\\ndef solve():\\n    # Example implementation for Sorting and Searching Lists\\n    print(\"Mastering Sorting and Searching Lists\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Sorting",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Sorting and Searching Lists",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Sorting and Searching Lists",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Sorting and Searching Lists. sorted() function aur custom key sorting. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Sorting and Searching Lists\\ndef solve():\\n    # Example implementation for Sorting and Searching Lists\\n    print(\"Mastering Sorting and Searching Lists\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Sorting and Searching Lists",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Sorting and Searching Lists",
          "description": "Sorting and Searching Lists par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Sorting and Searching Lists\n",
          "solutionCode": "print(\"Mastering Sorting and Searching Lists\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Sorting and Searching Lists",
          "hints": [
            "print(\"Mastering Sorting and Searching Lists\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Sorting and Searching Lists"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_05",
        "sectionId": "06_lists_tuples",
        "topicNumber": 8,
        "globalIndex": 66,
        "qBadge": "Q.66",
        "title": "Iterating Through Lists",
        "hindiDescription": "for loop aur enumerate() se iterate karna.",
        "difficulty": "Easy",
        "referenceCode": "# Traversing Lists\\ndef solve():\\n    # Example implementation for Traversing Lists\\n    print(\"Mastering Traversing Lists\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Traversing Lists",
            "description": "for loop aur enumerate() se iterate karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Traversing Lists\\ndef solve():\\n    # Example implementation for Traversing Lists\\n    print(\"Mastering Traversing Lists\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Traversing",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Traversing Lists",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Traversing Lists",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Traversing Lists. for loop aur enumerate() se iterate karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Traversing Lists\\ndef solve():\\n    # Example implementation for Traversing Lists\\n    print(\"Mastering Traversing Lists\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Traversing Lists",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Traversing Lists",
          "description": "Traversing Lists par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Traversing Lists\n",
          "solutionCode": "print(\"Mastering Traversing Lists\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Traversing Lists",
          "hints": [
            "print(\"Mastering Traversing Lists\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Traversing Lists"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_07",
        "sectionId": "06_lists_tuples",
        "topicNumber": 9,
        "globalIndex": 67,
        "qBadge": "Q.67",
        "title": "List Comprehensions",
        "hindiDescription": "Concise syntax se nayi list transform karna.",
        "difficulty": "Medium",
        "referenceCode": "# List Comprehensions\\ndef solve():\\n    # Example implementation for List Comprehensions\\n    print(\"Mastering List Comprehensions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: List Comprehensions",
            "description": "Concise syntax se nayi list transform karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# List Comprehensions\\ndef solve():\\n    # Example implementation for List Comprehensions\\n    print(\"Mastering List Comprehensions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "List",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering List Comprehensions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "List Comprehensions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge List Comprehensions. Concise syntax se nayi list transform karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# List Comprehensions\\ndef solve():\\n    # Example implementation for List Comprehensions\\n    print(\"Mastering List Comprehensions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering List Comprehensions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: List Comprehensions",
          "description": "List Comprehensions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: List Comprehensions\n",
          "solutionCode": "print(\"Mastering List Comprehensions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering List Comprehensions",
          "hints": [
            "print(\"Mastering List Comprehensions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering List Comprehensions"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_06",
        "sectionId": "06_lists_tuples",
        "topicNumber": 10,
        "globalIndex": 68,
        "qBadge": "Q.68",
        "title": "Nested Lists and 2D Lists",
        "hindiDescription": "2D grid aur matrix representation.",
        "difficulty": "Medium",
        "referenceCode": "# Nested Lists and Matrices\\ndef solve():\\n    # Example implementation for Nested Lists and Matrices\\n    print(\"Mastering Nested Lists and Matrices\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Nested Lists and Matrices",
            "description": "2D grid aur matrix representation. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Nested Lists and Matrices\\ndef solve():\\n    # Example implementation for Nested Lists and Matrices\\n    print(\"Mastering Nested Lists and Matrices\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Nested",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested Lists and Matrices",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Nested Lists and Matrices",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Nested Lists and Matrices. 2D grid aur matrix representation. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Nested Lists and Matrices\\ndef solve():\\n    # Example implementation for Nested Lists and Matrices\\n    print(\"Mastering Nested Lists and Matrices\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested Lists and Matrices",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Nested Lists and Matrices",
          "description": "Nested Lists and Matrices par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Nested Lists and Matrices\n",
          "solutionCode": "print(\"Mastering Nested Lists and Matrices\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Nested Lists and Matrices",
          "hints": [
            "print(\"Mastering Nested Lists and Matrices\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Nested Lists and Matrices"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_08",
        "sectionId": "06_lists_tuples",
        "topicNumber": 11,
        "globalIndex": 69,
        "qBadge": "Q.69",
        "title": "Tuples, Packing and Unpacking",
        "hindiDescription": "Immutable tuples () aur tuple unpacking.",
        "difficulty": "Easy",
        "referenceCode": "# Tuples and Unpacking\\ndef solve():\\n    # Example implementation for Tuples and Unpacking\\n    print(\"Mastering Tuples and Unpacking\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Tuples and Unpacking",
            "description": "Immutable tuples () aur tuple unpacking. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Tuples and Unpacking\\ndef solve():\\n    # Example implementation for Tuples and Unpacking\\n    print(\"Mastering Tuples and Unpacking\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Tuples",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Tuples and Unpacking",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Tuples and Unpacking",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Tuples and Unpacking. Immutable tuples () aur tuple unpacking. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Tuples and Unpacking\\ndef solve():\\n    # Example implementation for Tuples and Unpacking\\n    print(\"Mastering Tuples and Unpacking\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Tuples and Unpacking",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Tuples and Unpacking",
          "description": "Tuples and Unpacking par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Tuples and Unpacking\n",
          "solutionCode": "print(\"Mastering Tuples and Unpacking\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Tuples and Unpacking",
          "hints": [
            "print(\"Mastering Tuples and Unpacking\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Tuples and Unpacking"
            }
          ]
        }
      },
      {
        "id": "py_06_lists_tuples_12_proj",
        "sectionId": "06_lists_tuples",
        "topicNumber": 12,
        "globalIndex": 70,
        "qBadge": "Q.70",
        "title": "Lists and Tuples Mini Projects",
        "subtitle": "Module 06 · Topic 12",
        "hindiDescription": "Lists and Tuples Mini Projects ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "grades = [88, 92, 79, 95]\navg = sum(grades) / len(grades)\nprint('Average:', avg)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Lists and Tuples Mini Projects",
            "description": "Is lesson me hum Lists and Tuples Mini Projects ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "grades = [88, 92, 79, 95]",
            "concepts": [
              {
                "token": "Lists",
                "explanation": "Core concept for Lists and Tuples Mini Projects."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Lists and Tuples Mini Projects",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Lists and Tuples Mini Projects seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "grades = [88, 92, 79, 95]\navg = sum(grades) / len(grades)\nprint('Average:', avg)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Lists and Tuples Mini Projects ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Lists and Tuples Mini Projects",
          "description": "Lists and Tuples Mini Projects ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Lists and Tuples Mini Projects below\n",
          "solutionCode": "grades = [88, 92, 79, 95]\navg = sum(grades) / len(grades)\nprint('Average:', avg)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Lists and Tuples Mini Projects ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "07_sets_dicts",
    "sectionNumber": "07",
    "title": "Sets & Dictionaries",
    "topics": [
      {
        "id": "py_07_sets_dicts_00_intro",
        "sectionId": "07_sets_dicts",
        "topicNumber": 1,
        "globalIndex": 71,
        "qBadge": "Q.71",
        "title": "Introduction to Sets",
        "subtitle": "Module 07 · Topic 1",
        "hindiDescription": "Introduction to Sets ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "unique_nums = {1, 2, 2, 3}\nprint(unique_nums)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Sets",
            "description": "Is lesson me hum Introduction to Sets ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "unique_nums = {1, 2, 2, 3}",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Sets."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Sets",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Sets seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "unique_nums = {1, 2, 2, 3}\nprint(unique_nums)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Sets ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Sets",
          "description": "Introduction to Sets ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Sets below\n",
          "solutionCode": "unique_nums = {1, 2, 2, 3}\nprint(unique_nums)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Sets ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_01",
        "sectionId": "07_sets_dicts",
        "topicNumber": 2,
        "globalIndex": 72,
        "qBadge": "Q.72",
        "title": "Creating Sets and Understanding Unique Values",
        "hindiDescription": "Curly braces {} se unique items ka unordered collection.",
        "difficulty": "Easy",
        "referenceCode": "# Creating Sets\\ndef solve():\\n    # Example implementation for Creating Sets\\n    print(\"Mastering Creating Sets\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Creating Sets",
            "description": "Curly braces {} se unique items ka unordered collection. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Creating Sets\\ndef solve():\\n    # Example implementation for Creating Sets\\n    print(\"Mastering Creating Sets\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Creating",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Creating Sets",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Creating Sets",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Creating Sets. Curly braces {} se unique items ka unordered collection. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Creating Sets\\ndef solve():\\n    # Example implementation for Creating Sets\\n    print(\"Mastering Creating Sets\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Creating Sets",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Creating Sets",
          "description": "Creating Sets par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Creating Sets\n",
          "solutionCode": "print(\"Mastering Creating Sets\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Creating Sets",
          "hints": [
            "print(\"Mastering Creating Sets\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Creating Sets"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_03",
        "sectionId": "07_sets_dicts",
        "topicNumber": 3,
        "globalIndex": 73,
        "qBadge": "Q.73",
        "title": "Adding and Removing Set Elements",
        "hindiDescription": "add(), discard(), update() methods.",
        "difficulty": "Easy",
        "referenceCode": "# Set Methods\\ndef solve():\\n    # Example implementation for Set Methods\\n    print(\"Mastering Set Methods\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Set Methods",
            "description": "add(), discard(), update() methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Set Methods\\ndef solve():\\n    # Example implementation for Set Methods\\n    print(\"Mastering Set Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Set",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Set Methods",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Set Methods",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Set Methods. add(), discard(), update() methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Set Methods\\ndef solve():\\n    # Example implementation for Set Methods\\n    print(\"Mastering Set Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Set Methods",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Set Methods",
          "description": "Set Methods par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Set Methods\n",
          "solutionCode": "print(\"Mastering Set Methods\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Set Methods",
          "hints": [
            "print(\"Mastering Set Methods\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Set Methods"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_02",
        "sectionId": "07_sets_dicts",
        "topicNumber": 4,
        "globalIndex": 74,
        "qBadge": "Q.74",
        "title": "Set Union, Intersection and Difference",
        "hindiDescription": "Union, intersection, difference, symmetric difference.",
        "difficulty": "Medium",
        "referenceCode": "# Set Operations\\ndef solve():\\n    # Example implementation for Set Operations\\n    print(\"Mastering Set Operations\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Set Operations",
            "description": "Union, intersection, difference, symmetric difference. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Set Operations\\ndef solve():\\n    # Example implementation for Set Operations\\n    print(\"Mastering Set Operations\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Set",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Set Operations",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Set Operations",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Set Operations. Union, intersection, difference, symmetric difference. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Set Operations\\ndef solve():\\n    # Example implementation for Set Operations\\n    print(\"Mastering Set Operations\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Set Operations",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Set Operations",
          "description": "Set Operations par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Set Operations\n",
          "solutionCode": "print(\"Mastering Set Operations\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Set Operations",
          "hints": [
            "print(\"Mastering Set Operations\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Set Operations"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_05_ops",
        "sectionId": "07_sets_dicts",
        "topicNumber": 5,
        "globalIndex": 75,
        "qBadge": "Q.75",
        "title": "Set Membership and Operations",
        "subtitle": "Module 07 · Topic 5",
        "hindiDescription": "Set Membership and Operations ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "tags = {'python', 'ai', 'data'}\nprint('python' in tags)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Set Membership and Operations",
            "description": "Is lesson me hum Set Membership and Operations ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "tags = {'python', 'ai', 'data'}",
            "concepts": [
              {
                "token": "Set",
                "explanation": "Core concept for Set Membership and Operations."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Set Membership and Operations",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Set Membership and Operations seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "tags = {'python', 'ai', 'data'}\nprint('python' in tags)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Set Membership and Operations ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Set Membership and Operations",
          "description": "Set Membership and Operations ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Set Membership and Operations below\n",
          "solutionCode": "tags = {'python', 'ai', 'data'}\nprint('python' in tags)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Set Membership and Operations ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_04_intro",
        "sectionId": "07_sets_dicts",
        "topicNumber": 6,
        "globalIndex": 76,
        "qBadge": "Q.76",
        "title": "Introduction to Dictionaries",
        "subtitle": "Module 07 · Topic 6",
        "hindiDescription": "Introduction to Dictionaries ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "user = {'name': 'Rohan', 'age': 21}\nprint(user['name'])",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Dictionaries",
            "description": "Is lesson me hum Introduction to Dictionaries ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "user = {'name': 'Rohan', 'age': 21}",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Dictionaries."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Dictionaries",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Dictionaries seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "user = {'name': 'Rohan', 'age': 21}\nprint(user['name'])",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Dictionaries ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Dictionaries",
          "description": "Introduction to Dictionaries ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Dictionaries below\n",
          "solutionCode": "user = {'name': 'Rohan', 'age': 21}\nprint(user['name'])",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Dictionaries ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_04",
        "sectionId": "07_sets_dicts",
        "topicNumber": 7,
        "globalIndex": 77,
        "qBadge": "Q.77",
        "title": "Dictionary Keys and Values",
        "hindiDescription": "Key-value mapping data structure.",
        "difficulty": "Easy",
        "referenceCode": "# Dictionary Keys and Values\\ndef solve():\\n    # Example implementation for Dictionary Keys and Values\\n    print(\"Mastering Dictionary Keys and Values\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Dictionary Keys and Values",
            "description": "Key-value mapping data structure. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Dictionary Keys and Values\\ndef solve():\\n    # Example implementation for Dictionary Keys and Values\\n    print(\"Mastering Dictionary Keys and Values\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Dictionary",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dictionary Keys and Values",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Dictionary Keys and Values",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Dictionary Keys and Values. Key-value mapping data structure. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Dictionary Keys and Values\\ndef solve():\\n    # Example implementation for Dictionary Keys and Values\\n    print(\"Mastering Dictionary Keys and Values\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dictionary Keys and Values",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Dictionary Keys and Values",
          "description": "Dictionary Keys and Values par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Dictionary Keys and Values\n",
          "solutionCode": "print(\"Mastering Dictionary Keys and Values\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Dictionary Keys and Values",
          "hints": [
            "print(\"Mastering Dictionary Keys and Values\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Dictionary Keys and Values"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_05",
        "sectionId": "07_sets_dicts",
        "topicNumber": 8,
        "globalIndex": 78,
        "qBadge": "Q.78",
        "title": "Adding, Updating and Removing Dictionary Items",
        "hindiDescription": "Keys insert karna aur existing values update karna.",
        "difficulty": "Easy",
        "referenceCode": "# Adding and Updating Items\\ndef solve():\\n    # Example implementation for Adding and Updating Items\\n    print(\"Mastering Adding and Updating Items\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Adding and Updating Items",
            "description": "Keys insert karna aur existing values update karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Adding and Updating Items\\ndef solve():\\n    # Example implementation for Adding and Updating Items\\n    print(\"Mastering Adding and Updating Items\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Adding",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Adding and Updating Items",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Adding and Updating Items",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Adding and Updating Items. Keys insert karna aur existing values update karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Adding and Updating Items\\ndef solve():\\n    # Example implementation for Adding and Updating Items\\n    print(\"Mastering Adding and Updating Items\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Adding and Updating Items",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Adding and Updating Items",
          "description": "Adding and Updating Items par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Adding and Updating Items\n",
          "solutionCode": "print(\"Mastering Adding and Updating Items\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Adding and Updating Items",
          "hints": [
            "print(\"Mastering Adding and Updating Items\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Adding and Updating Items"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_06",
        "sectionId": "07_sets_dicts",
        "topicNumber": 9,
        "globalIndex": 79,
        "qBadge": "Q.79",
        "title": "Dictionary Methods — get(), keys(), values(), items()",
        "hindiDescription": "keys(), values(), items(), get() methods.",
        "difficulty": "Medium",
        "referenceCode": "# Dictionary Methods\\ndef solve():\\n    # Example implementation for Dictionary Methods\\n    print(\"Mastering Dictionary Methods\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Dictionary Methods",
            "description": "keys(), values(), items(), get() methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Dictionary Methods\\ndef solve():\\n    # Example implementation for Dictionary Methods\\n    print(\"Mastering Dictionary Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Dictionary",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dictionary Methods",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Dictionary Methods",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Dictionary Methods. keys(), values(), items(), get() methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Dictionary Methods\\ndef solve():\\n    # Example implementation for Dictionary Methods\\n    print(\"Mastering Dictionary Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dictionary Methods",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Dictionary Methods",
          "description": "Dictionary Methods par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Dictionary Methods\n",
          "solutionCode": "print(\"Mastering Dictionary Methods\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Dictionary Methods",
          "hints": [
            "print(\"Mastering Dictionary Methods\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Dictionary Methods"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_08",
        "sectionId": "07_sets_dicts",
        "topicNumber": 10,
        "globalIndex": 80,
        "qBadge": "Q.80",
        "title": "Nested Dictionaries and Dictionary Comprehensions",
        "hindiDescription": "One-line dictionary generation.",
        "difficulty": "Medium",
        "referenceCode": "# Dictionary Comprehensions\\ndef solve():\\n    # Example implementation for Dictionary Comprehensions\\n    print(\"Mastering Dictionary Comprehensions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Dictionary Comprehensions",
            "description": "One-line dictionary generation. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Dictionary Comprehensions\\ndef solve():\\n    # Example implementation for Dictionary Comprehensions\\n    print(\"Mastering Dictionary Comprehensions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Dictionary",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dictionary Comprehensions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Dictionary Comprehensions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Dictionary Comprehensions. One-line dictionary generation. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Dictionary Comprehensions\\ndef solve():\\n    # Example implementation for Dictionary Comprehensions\\n    print(\"Mastering Dictionary Comprehensions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dictionary Comprehensions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Dictionary Comprehensions",
          "description": "Dictionary Comprehensions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Dictionary Comprehensions\n",
          "solutionCode": "print(\"Mastering Dictionary Comprehensions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Dictionary Comprehensions",
          "hints": [
            "print(\"Mastering Dictionary Comprehensions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Dictionary Comprehensions"
            }
          ]
        }
      },
      {
        "id": "py_07_sets_dicts_09",
        "sectionId": "07_sets_dicts",
        "topicNumber": 11,
        "globalIndex": 81,
        "qBadge": "Q.81",
        "title": "Sets and Dictionaries Mini Projects",
        "hindiDescription": "Array elements ka frequency count nikalna.",
        "difficulty": "Hard",
        "referenceCode": "# Frequency Counting\\ndef solve():\\n    # Example implementation for Frequency Counting\\n    print(\"Mastering Frequency Counting\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Frequency Counting",
            "description": "Array elements ka frequency count nikalna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Frequency Counting\\ndef solve():\\n    # Example implementation for Frequency Counting\\n    print(\"Mastering Frequency Counting\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Frequency",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Frequency Counting",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Frequency Counting",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Frequency Counting. Array elements ka frequency count nikalna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Frequency Counting\\ndef solve():\\n    # Example implementation for Frequency Counting\\n    print(\"Mastering Frequency Counting\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Frequency Counting",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Frequency Counting",
          "description": "Frequency Counting par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Frequency Counting\n",
          "solutionCode": "print(\"Mastering Frequency Counting\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Frequency Counting",
          "hints": [
            "print(\"Mastering Frequency Counting\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Frequency Counting"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "08_functions",
    "sectionNumber": "08",
    "title": "Functions & Scope",
    "topics": [
      {
        "id": "py_08_functions_00_intro",
        "sectionId": "08_functions",
        "topicNumber": 1,
        "globalIndex": 82,
        "qBadge": "Q.82",
        "title": "Introduction to Functions",
        "subtitle": "Module 08 · Topic 1",
        "hindiDescription": "Introduction to Functions ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "def greet():\n    print('Hello World')\ngreet()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Functions",
            "description": "Is lesson me hum Introduction to Functions ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "def greet():",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Functions."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Functions",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Functions seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "def greet():\n    print('Hello World')\ngreet()",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Functions ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Functions",
          "description": "Introduction to Functions ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Functions below\n",
          "solutionCode": "def greet():\n    print('Hello World')\ngreet()",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Functions ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_08_functions_01",
        "sectionId": "08_functions",
        "topicNumber": 2,
        "globalIndex": 83,
        "qBadge": "Q.83",
        "title": "Creating Functions Using def",
        "hindiDescription": "def keyword se reusable code blocks banana.",
        "difficulty": "Easy",
        "referenceCode": "# Defining and Calling Functions\\ndef solve():\\n    # Example implementation for Defining and Calling Functions\\n    print(\"Mastering Defining and Calling Functions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Defining and Calling Functions",
            "description": "def keyword se reusable code blocks banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Defining and Calling Functions\\ndef solve():\\n    # Example implementation for Defining and Calling Functions\\n    print(\"Mastering Defining and Calling Functions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Defining",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Defining and Calling Functions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Defining and Calling Functions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Defining and Calling Functions. def keyword se reusable code blocks banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Defining and Calling Functions\\ndef solve():\\n    # Example implementation for Defining and Calling Functions\\n    print(\"Mastering Defining and Calling Functions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Defining and Calling Functions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Defining and Calling Functions",
          "description": "Defining and Calling Functions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Defining and Calling Functions\n",
          "solutionCode": "print(\"Mastering Defining and Calling Functions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Defining and Calling Functions",
          "hints": [
            "print(\"Mastering Defining and Calling Functions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Defining and Calling Functions"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_03_call",
        "sectionId": "08_functions",
        "topicNumber": 3,
        "globalIndex": 84,
        "qBadge": "Q.84",
        "title": "Calling Functions",
        "subtitle": "Module 08 · Topic 3",
        "hindiDescription": "Calling Functions ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "def square(n):\n    return n * n\nprint(square(5))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Calling Functions",
            "description": "Is lesson me hum Calling Functions ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "def square(n):",
            "concepts": [
              {
                "token": "Calling",
                "explanation": "Core concept for Calling Functions."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Calling Functions",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Calling Functions seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "def square(n):\n    return n * n\nprint(square(5))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Calling Functions ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Calling Functions",
          "description": "Calling Functions ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Calling Functions below\n",
          "solutionCode": "def square(n):\n    return n * n\nprint(square(5))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Calling Functions ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_08_functions_02",
        "sectionId": "08_functions",
        "topicNumber": 4,
        "globalIndex": 85,
        "qBadge": "Q.85",
        "title": "Parameters and Arguments",
        "hindiDescription": "Functions me data pass karna.",
        "difficulty": "Easy",
        "referenceCode": "# Parameters and Arguments\\ndef solve():\\n    # Example implementation for Parameters and Arguments\\n    print(\"Mastering Parameters and Arguments\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Parameters and Arguments",
            "description": "Functions me data pass karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Parameters and Arguments\\ndef solve():\\n    # Example implementation for Parameters and Arguments\\n    print(\"Mastering Parameters and Arguments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Parameters",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Parameters and Arguments",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Parameters and Arguments",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Parameters and Arguments. Functions me data pass karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Parameters and Arguments\\ndef solve():\\n    # Example implementation for Parameters and Arguments\\n    print(\"Mastering Parameters and Arguments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Parameters and Arguments",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Parameters and Arguments",
          "description": "Parameters and Arguments par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Parameters and Arguments\n",
          "solutionCode": "print(\"Mastering Parameters and Arguments\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Parameters and Arguments",
          "hints": [
            "print(\"Mastering Parameters and Arguments\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Parameters and Arguments"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_03",
        "sectionId": "08_functions",
        "topicNumber": 5,
        "globalIndex": 86,
        "qBadge": "Q.86",
        "title": "return Statement",
        "hindiDescription": "return statement se computation result wapas bhejna.",
        "difficulty": "Medium",
        "referenceCode": "# Return Values\\ndef solve():\\n    # Example implementation for Return Values\\n    print(\"Mastering Return Values\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Return Values",
            "description": "return statement se computation result wapas bhejna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Return Values\\ndef solve():\\n    # Example implementation for Return Values\\n    print(\"Mastering Return Values\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Return",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Return Values",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Return Values",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Return Values. return statement se computation result wapas bhejna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Return Values\\ndef solve():\\n    # Example implementation for Return Values\\n    print(\"Mastering Return Values\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Return Values",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Return Values",
          "description": "Return Values par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Return Values\n",
          "solutionCode": "print(\"Mastering Return Values\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Return Values",
          "hints": [
            "print(\"Mastering Return Values\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Return Values"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_04",
        "sectionId": "08_functions",
        "topicNumber": 6,
        "globalIndex": 87,
        "qBadge": "Q.87",
        "title": "Default and Keyword Arguments",
        "hindiDescription": "Default parameters aur named arguments.",
        "difficulty": "Medium",
        "referenceCode": "# Default and Keyword Arguments\\ndef solve():\\n    # Example implementation for Default and Keyword Arguments\\n    print(\"Mastering Default and Keyword Arguments\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Default and Keyword Arguments",
            "description": "Default parameters aur named arguments. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Default and Keyword Arguments\\ndef solve():\\n    # Example implementation for Default and Keyword Arguments\\n    print(\"Mastering Default and Keyword Arguments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Default",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Default and Keyword Arguments",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Default and Keyword Arguments",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Default and Keyword Arguments. Default parameters aur named arguments. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Default and Keyword Arguments\\ndef solve():\\n    # Example implementation for Default and Keyword Arguments\\n    print(\"Mastering Default and Keyword Arguments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Default and Keyword Arguments",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Default and Keyword Arguments",
          "description": "Default and Keyword Arguments par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Default and Keyword Arguments\n",
          "solutionCode": "print(\"Mastering Default and Keyword Arguments\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Default and Keyword Arguments",
          "hints": [
            "print(\"Mastering Default and Keyword Arguments\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Default and Keyword Arguments"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_05",
        "sectionId": "08_functions",
        "topicNumber": 7,
        "globalIndex": 88,
        "qBadge": "Q.88",
        "title": "*args and **kwargs",
        "hindiDescription": "Variable-length positional aur keyword arguments.",
        "difficulty": "Medium",
        "referenceCode": "# *args and **kwargs\\ndef solve():\\n    # Example implementation for *args and **kwargs\\n    print(\"Mastering *args and **kwargs\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: *args and **kwargs",
            "description": "Variable-length positional aur keyword arguments. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# *args and **kwargs\\ndef solve():\\n    # Example implementation for *args and **kwargs\\n    print(\"Mastering *args and **kwargs\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "*args",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering *args and **kwargs",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "*args and **kwargs",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge *args and **kwargs. Variable-length positional aur keyword arguments. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# *args and **kwargs\\ndef solve():\\n    # Example implementation for *args and **kwargs\\n    print(\"Mastering *args and **kwargs\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering *args and **kwargs",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: *args and **kwargs",
          "description": "*args and **kwargs par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: *args and **kwargs\n",
          "solutionCode": "print(\"Mastering *args and **kwargs\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering *args and **kwargs",
          "hints": [
            "print(\"Mastering *args and **kwargs\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering *args and **kwargs"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_06",
        "sectionId": "08_functions",
        "topicNumber": 8,
        "globalIndex": 89,
        "qBadge": "Q.89",
        "title": "Local and Global Scope",
        "hindiDescription": "LEGB rule aur global keyword.",
        "difficulty": "Medium",
        "referenceCode": "# Local and Global Scope\\ndef solve():\\n    # Example implementation for Local and Global Scope\\n    print(\"Mastering Local and Global Scope\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Local and Global Scope",
            "description": "LEGB rule aur global keyword. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Local and Global Scope\\ndef solve():\\n    # Example implementation for Local and Global Scope\\n    print(\"Mastering Local and Global Scope\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Local",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Local and Global Scope",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Local and Global Scope",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Local and Global Scope. LEGB rule aur global keyword. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Local and Global Scope\\ndef solve():\\n    # Example implementation for Local and Global Scope\\n    print(\"Mastering Local and Global Scope\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Local and Global Scope",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Local and Global Scope",
          "description": "Local and Global Scope par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Local and Global Scope\n",
          "solutionCode": "print(\"Mastering Local and Global Scope\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Local and Global Scope",
          "hints": [
            "print(\"Mastering Local and Global Scope\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Local and Global Scope"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_07",
        "sectionId": "08_functions",
        "topicNumber": 9,
        "globalIndex": 90,
        "qBadge": "Q.90",
        "title": "Lambda Functions",
        "hindiDescription": "Anonymous one-line functions.",
        "difficulty": "Medium",
        "referenceCode": "# Lambda Functions\\ndef solve():\\n    # Example implementation for Lambda Functions\\n    print(\"Mastering Lambda Functions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Lambda Functions",
            "description": "Anonymous one-line functions. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Lambda Functions\\ndef solve():\\n    # Example implementation for Lambda Functions\\n    print(\"Mastering Lambda Functions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Lambda",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Lambda Functions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Lambda Functions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Lambda Functions. Anonymous one-line functions. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Lambda Functions\\ndef solve():\\n    # Example implementation for Lambda Functions\\n    print(\"Mastering Lambda Functions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Lambda Functions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Lambda Functions",
          "description": "Lambda Functions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Lambda Functions\n",
          "solutionCode": "print(\"Mastering Lambda Functions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Lambda Functions",
          "hints": [
            "print(\"Mastering Lambda Functions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Lambda Functions"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_08",
        "sectionId": "08_functions",
        "topicNumber": 10,
        "globalIndex": 91,
        "qBadge": "Q.91",
        "title": "Recursion Basics",
        "hindiDescription": "Functional programming built-in utilities.",
        "difficulty": "Hard",
        "referenceCode": "# map(), filter(), zip()\\ndef solve():\\n    # Example implementation for map(), filter(), zip()\\n    print(\"Mastering map(), filter(), zip()\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: map(), filter(), zip()",
            "description": "Functional programming built-in utilities. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# map(), filter(), zip()\\ndef solve():\\n    # Example implementation for map(), filter(), zip()\\n    print(\"Mastering map(), filter(), zip()\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "map(),",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering map(), filter(), zip()",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "map(), filter(), zip()",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge map(), filter(), zip(). Functional programming built-in utilities. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# map(), filter(), zip()\\ndef solve():\\n    # Example implementation for map(), filter(), zip()\\n    print(\"Mastering map(), filter(), zip()\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering map(), filter(), zip()",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: map(), filter(), zip()",
          "description": "map(), filter(), zip() par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: map(), filter(), zip()\n",
          "solutionCode": "print(\"Mastering map(), filter(), zip()\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering map(), filter(), zip()",
          "hints": [
            "print(\"Mastering map(), filter(), zip()\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering map(), filter(), zip()"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_09",
        "sectionId": "08_functions",
        "topicNumber": 11,
        "globalIndex": 92,
        "qBadge": "Q.92",
        "title": "Type Hints and Docstrings",
        "hindiDescription": "Function ka apne aap ko call karna aur base case.",
        "difficulty": "Easy",
        "referenceCode": "# Recursion Basics\\ndef solve():\\n    # Example implementation for Recursion Basics\\n    print(\"Mastering Recursion Basics\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Recursion Basics",
            "description": "Function ka apne aap ko call karna aur base case. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Recursion Basics\\ndef solve():\\n    # Example implementation for Recursion Basics\\n    print(\"Mastering Recursion Basics\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Recursion",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Recursion Basics",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Recursion Basics",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Recursion Basics. Function ka apne aap ko call karna aur base case. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Recursion Basics\\ndef solve():\\n    # Example implementation for Recursion Basics\\n    print(\"Mastering Recursion Basics\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Recursion Basics",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Recursion Basics",
          "description": "Recursion Basics par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Recursion Basics\n",
          "solutionCode": "print(\"Mastering Recursion Basics\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Recursion Basics",
          "hints": [
            "print(\"Mastering Recursion Basics\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Recursion Basics"
            }
          ]
        }
      },
      {
        "id": "py_08_functions_10",
        "sectionId": "08_functions",
        "topicNumber": 12,
        "globalIndex": 93,
        "qBadge": "Q.93",
        "title": "Functions Practice and Mini Projects",
        "hindiDescription": "Professional code documentation aur type annotations.",
        "difficulty": "Hard",
        "referenceCode": "# Docstrings and Type Hints\\ndef solve():\\n    # Example implementation for Docstrings and Type Hints\\n    print(\"Mastering Docstrings and Type Hints\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Docstrings and Type Hints",
            "description": "Professional code documentation aur type annotations. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Docstrings and Type Hints\\ndef solve():\\n    # Example implementation for Docstrings and Type Hints\\n    print(\"Mastering Docstrings and Type Hints\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Docstrings",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Docstrings and Type Hints",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Docstrings and Type Hints",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Docstrings and Type Hints. Professional code documentation aur type annotations. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Docstrings and Type Hints\\ndef solve():\\n    # Example implementation for Docstrings and Type Hints\\n    print(\"Mastering Docstrings and Type Hints\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Docstrings and Type Hints",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Docstrings and Type Hints",
          "description": "Docstrings and Type Hints par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Docstrings and Type Hints\n",
          "solutionCode": "print(\"Mastering Docstrings and Type Hints\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Docstrings and Type Hints",
          "hints": [
            "print(\"Mastering Docstrings and Type Hints\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Docstrings and Type Hints"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "09_problem_solving",
    "sectionNumber": "09",
    "title": "Python Problem Solving",
    "topics": [
      {
        "id": "py_09_problem_solving_01",
        "sectionId": "09_problem_solving",
        "topicNumber": 1,
        "globalIndex": 94,
        "qBadge": "Q.94",
        "title": "Understanding Problem Statements",
        "hindiDescription": "Code ko step-by-step paper par trace karna.",
        "difficulty": "Easy",
        "referenceCode": "# Dry Run and Tracing\\ndef solve():\\n    # Example implementation for Dry Run and Tracing\\n    print(\"Mastering Dry Run and Tracing\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Dry Run and Tracing",
            "description": "Code ko step-by-step paper par trace karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Dry Run and Tracing\\ndef solve():\\n    # Example implementation for Dry Run and Tracing\\n    print(\"Mastering Dry Run and Tracing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Dry",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dry Run and Tracing",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Dry Run and Tracing",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Dry Run and Tracing. Code ko step-by-step paper par trace karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Dry Run and Tracing\\ndef solve():\\n    # Example implementation for Dry Run and Tracing\\n    print(\"Mastering Dry Run and Tracing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Dry Run and Tracing",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Dry Run and Tracing",
          "description": "Dry Run and Tracing par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Dry Run and Tracing\n",
          "solutionCode": "print(\"Mastering Dry Run and Tracing\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Dry Run and Tracing",
          "hints": [
            "print(\"Mastering Dry Run and Tracing\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Dry Run and Tracing"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_02",
        "sectionId": "09_problem_solving",
        "topicNumber": 2,
        "globalIndex": 95,
        "qBadge": "Q.95",
        "title": "Input, Process and Output Logic",
        "hindiDescription": "Even/odd, reverse number, palindrome number.",
        "difficulty": "Easy",
        "referenceCode": "# Number Problems\\ndef solve():\\n    # Example implementation for Number Problems\\n    print(\"Mastering Number Problems\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Number Problems",
            "description": "Even/odd, reverse number, palindrome number. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Number Problems\\ndef solve():\\n    # Example implementation for Number Problems\\n    print(\"Mastering Number Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Number",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Number Problems",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Number Problems",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Number Problems. Even/odd, reverse number, palindrome number. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Number Problems\\ndef solve():\\n    # Example implementation for Number Problems\\n    print(\"Mastering Number Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Number Problems",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Number Problems",
          "description": "Number Problems par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Number Problems\n",
          "solutionCode": "print(\"Mastering Number Problems\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Number Problems",
          "hints": [
            "print(\"Mastering Number Problems\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Number Problems"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_03",
        "sectionId": "09_problem_solving",
        "topicNumber": 3,
        "globalIndex": 96,
        "qBadge": "Q.96",
        "title": "Building Algorithms Step by Step",
        "hindiDescription": "Sum of digits, count digits, Armstrong numbers.",
        "difficulty": "Medium",
        "referenceCode": "# Digit Manipulation\\ndef solve():\\n    # Example implementation for Digit Manipulation\\n    print(\"Mastering Digit Manipulation\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Digit Manipulation",
            "description": "Sum of digits, count digits, Armstrong numbers. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Digit Manipulation\\ndef solve():\\n    # Example implementation for Digit Manipulation\\n    print(\"Mastering Digit Manipulation\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Digit",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Digit Manipulation",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Digit Manipulation",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Digit Manipulation. Sum of digits, count digits, Armstrong numbers. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Digit Manipulation\\ndef solve():\\n    # Example implementation for Digit Manipulation\\n    print(\"Mastering Digit Manipulation\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Digit Manipulation",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Digit Manipulation",
          "description": "Digit Manipulation par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Digit Manipulation\n",
          "solutionCode": "print(\"Mastering Digit Manipulation\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Digit Manipulation",
          "hints": [
            "print(\"Mastering Digit Manipulation\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Digit Manipulation"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_04",
        "sectionId": "09_problem_solving",
        "topicNumber": 4,
        "globalIndex": 97,
        "qBadge": "Q.97",
        "title": "Dry Run and Trace Tables",
        "hindiDescription": "Prime check optimization aur factorial calculation.",
        "difficulty": "Medium",
        "referenceCode": "# Prime and Factorial Problems\\ndef solve():\\n    # Example implementation for Prime and Factorial Problems\\n    print(\"Mastering Prime and Factorial Problems\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Prime and Factorial Problems",
            "description": "Prime check optimization aur factorial calculation. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Prime and Factorial Problems\\ndef solve():\\n    # Example implementation for Prime and Factorial Problems\\n    print(\"Mastering Prime and Factorial Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Prime",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Prime and Factorial Problems",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Prime and Factorial Problems",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Prime and Factorial Problems. Prime check optimization aur factorial calculation. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Prime and Factorial Problems\\ndef solve():\\n    # Example implementation for Prime and Factorial Problems\\n    print(\"Mastering Prime and Factorial Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Prime and Factorial Problems",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Prime and Factorial Problems",
          "description": "Prime and Factorial Problems par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Prime and Factorial Problems\n",
          "solutionCode": "print(\"Mastering Prime and Factorial Problems\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Prime and Factorial Problems",
          "hints": [
            "print(\"Mastering Prime and Factorial Problems\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Prime and Factorial Problems"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_05",
        "sectionId": "09_problem_solving",
        "topicNumber": 5,
        "globalIndex": 98,
        "qBadge": "Q.98",
        "title": "Number-Based Problems",
        "hindiDescription": "Iterative aur recursive Fibonacci sequence.",
        "difficulty": "Medium",
        "referenceCode": "# Fibonacci Series\\ndef solve():\\n    # Example implementation for Fibonacci Series\\n    print(\"Mastering Fibonacci Series\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Fibonacci Series",
            "description": "Iterative aur recursive Fibonacci sequence. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Fibonacci Series\\ndef solve():\\n    # Example implementation for Fibonacci Series\\n    print(\"Mastering Fibonacci Series\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Fibonacci",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Fibonacci Series",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Fibonacci Series",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Fibonacci Series. Iterative aur recursive Fibonacci sequence. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Fibonacci Series\\ndef solve():\\n    # Example implementation for Fibonacci Series\\n    print(\"Mastering Fibonacci Series\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Fibonacci Series",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Fibonacci Series",
          "description": "Fibonacci Series par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Fibonacci Series\n",
          "solutionCode": "print(\"Mastering Fibonacci Series\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Fibonacci Series",
          "hints": [
            "print(\"Mastering Fibonacci Series\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Fibonacci Series"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_06",
        "sectionId": "09_problem_solving",
        "topicNumber": 6,
        "globalIndex": 99,
        "qBadge": "Q.99",
        "title": "Digit Extraction and Number Reversal",
        "hindiDescription": "Pyramids, diamonds aur inverted triangles.",
        "difficulty": "Medium",
        "referenceCode": "# Pattern Printing\\ndef solve():\\n    # Example implementation for Pattern Printing\\n    print(\"Mastering Pattern Printing\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Pattern Printing",
            "description": "Pyramids, diamonds aur inverted triangles. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Pattern Printing\\ndef solve():\\n    # Example implementation for Pattern Printing\\n    print(\"Mastering Pattern Printing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Pattern",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Pattern Printing",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Pattern Printing",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Pattern Printing. Pyramids, diamonds aur inverted triangles. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Pattern Printing\\ndef solve():\\n    # Example implementation for Pattern Printing\\n    print(\"Mastering Pattern Printing\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Pattern Printing",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Pattern Printing",
          "description": "Pattern Printing par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Pattern Printing\n",
          "solutionCode": "print(\"Mastering Pattern Printing\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Pattern Printing",
          "hints": [
            "print(\"Mastering Pattern Printing\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Pattern Printing"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_07",
        "sectionId": "09_problem_solving",
        "topicNumber": 7,
        "globalIndex": 100,
        "qBadge": "Q.100",
        "title": "Prime Numbers and Factors",
        "hindiDescription": "Reverse words, character count, anagram check.",
        "difficulty": "Medium",
        "referenceCode": "# String Challenges\\ndef solve():\\n    # Example implementation for String Challenges\\n    print(\"Mastering String Challenges\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: String Challenges",
            "description": "Reverse words, character count, anagram check. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# String Challenges\\ndef solve():\\n    # Example implementation for String Challenges\\n    print(\"Mastering String Challenges\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Challenges",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "String Challenges",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge String Challenges. Reverse words, character count, anagram check. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# String Challenges\\ndef solve():\\n    # Example implementation for String Challenges\\n    print(\"Mastering String Challenges\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering String Challenges",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: String Challenges",
          "description": "String Challenges par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: String Challenges\n",
          "solutionCode": "print(\"Mastering String Challenges\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering String Challenges",
          "hints": [
            "print(\"Mastering String Challenges\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering String Challenges"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_08",
        "sectionId": "09_problem_solving",
        "topicNumber": 8,
        "globalIndex": 101,
        "qBadge": "Q.101",
        "title": "Palindrome and Armstrong Number Problems",
        "hindiDescription": "Two sum, duplicates find karna, frequency count.",
        "difficulty": "Medium",
        "referenceCode": "# List and Dictionary Challenges\\ndef solve():\\n    # Example implementation for List and Dictionary Challenges\\n    print(\"Mastering List and Dictionary Challenges\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: List and Dictionary Challenges",
            "description": "Two sum, duplicates find karna, frequency count. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# List and Dictionary Challenges\\ndef solve():\\n    # Example implementation for List and Dictionary Challenges\\n    print(\"Mastering List and Dictionary Challenges\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "List",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering List and Dictionary Challenges",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "List and Dictionary Challenges",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge List and Dictionary Challenges. Two sum, duplicates find karna, frequency count. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# List and Dictionary Challenges\\ndef solve():\\n    # Example implementation for List and Dictionary Challenges\\n    print(\"Mastering List and Dictionary Challenges\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering List and Dictionary Challenges",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: List and Dictionary Challenges",
          "description": "List and Dictionary Challenges par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: List and Dictionary Challenges\n",
          "solutionCode": "print(\"Mastering List and Dictionary Challenges\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering List and Dictionary Challenges",
          "hints": [
            "print(\"Mastering List and Dictionary Challenges\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering List and Dictionary Challenges"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_09",
        "sectionId": "09_problem_solving",
        "topicNumber": 9,
        "globalIndex": 102,
        "qBadge": "Q.102",
        "title": "Fibonacci Series",
        "hindiDescription": "Pairs finding aur matrix traversal.",
        "difficulty": "Medium",
        "referenceCode": "# Nested Loop Problems\\ndef solve():\\n    # Example implementation for Nested Loop Problems\\n    print(\"Mastering Nested Loop Problems\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Nested Loop Problems",
            "description": "Pairs finding aur matrix traversal. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Nested Loop Problems\\ndef solve():\\n    # Example implementation for Nested Loop Problems\\n    print(\"Mastering Nested Loop Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Nested",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested Loop Problems",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Nested Loop Problems",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Nested Loop Problems. Pairs finding aur matrix traversal. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Nested Loop Problems\\ndef solve():\\n    # Example implementation for Nested Loop Problems\\n    print(\"Mastering Nested Loop Problems\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Nested Loop Problems",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Nested Loop Problems",
          "description": "Nested Loop Problems par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Nested Loop Problems\n",
          "solutionCode": "print(\"Mastering Nested Loop Problems\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Nested Loop Problems",
          "hints": [
            "print(\"Mastering Nested Loop Problems\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Nested Loop Problems"
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_10",
        "sectionId": "09_problem_solving",
        "topicNumber": 10,
        "globalIndex": 103,
        "qBadge": "Q.103",
        "title": "String Logic Problems",
        "subtitle": "Module 09 · Topic 10",
        "hindiDescription": "String Logic Problems ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "s = 'future'\nprint('Vowels:', sum(1 for c in s if c in 'aeiou'))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to String Logic Problems",
            "description": "Is lesson me hum String Logic Problems ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "s = 'future'",
            "concepts": [
              {
                "token": "String",
                "explanation": "Core concept for String Logic Problems."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "String Logic Problems",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum String Logic Problems seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "s = 'future'\nprint('Vowels:', sum(1 for c in s if c in 'aeiou'))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne String Logic Problems ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: String Logic Problems",
          "description": "String Logic Problems ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for String Logic Problems below\n",
          "solutionCode": "s = 'future'\nprint('Vowels:', sum(1 for c in s if c in 'aeiou'))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "String Logic Problems ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_11",
        "sectionId": "09_problem_solving",
        "topicNumber": 11,
        "globalIndex": 104,
        "qBadge": "Q.104",
        "title": "List and Dictionary Logic Problems",
        "subtitle": "Module 09 · Topic 11",
        "hindiDescription": "List and Dictionary Logic Problems ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "arr = [1, 2, 2, 3, 1]\nfreq = {}\nfor x in arr:\n    freq[x] = freq.get(x, 0) + 1\nprint(freq)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to List and Dictionary Logic Problems",
            "description": "Is lesson me hum List and Dictionary Logic Problems ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "arr = [1, 2, 2, 3, 1]",
            "concepts": [
              {
                "token": "List",
                "explanation": "Core concept for List and Dictionary Logic Problems."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "List and Dictionary Logic Problems",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum List and Dictionary Logic Problems seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "arr = [1, 2, 2, 3, 1]\nfreq = {}\nfor x in arr:\n    freq[x] = freq.get(x, 0) + 1\nprint(freq)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne List and Dictionary Logic Problems ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: List and Dictionary Logic Problems",
          "description": "List and Dictionary Logic Problems ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for List and Dictionary Logic Problems below\n",
          "solutionCode": "arr = [1, 2, 2, 3, 1]\nfreq = {}\nfor x in arr:\n    freq[x] = freq.get(x, 0) + 1\nprint(freq)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "List and Dictionary Logic Problems ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_09_problem_solving_12",
        "sectionId": "09_problem_solving",
        "topicNumber": 12,
        "globalIndex": 105,
        "qBadge": "Q.105",
        "title": "Mixed Problem-Solving Challenges",
        "subtitle": "Module 09 · Topic 12",
        "hindiDescription": "Mixed Problem-Solving Challenges ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "scores = [90, 85, 95]\nprint('Max:', max(scores))\nprint('Min:', min(scores))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Mixed Problem-Solving Challenges",
            "description": "Is lesson me hum Mixed Problem-Solving Challenges ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "scores = [90, 85, 95]",
            "concepts": [
              {
                "token": "Mixed",
                "explanation": "Core concept for Mixed Problem-Solving Challenges."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Mixed Problem-Solving Challenges",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Mixed Problem-Solving Challenges seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "scores = [90, 85, 95]\nprint('Max:', max(scores))\nprint('Min:', min(scores))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Mixed Problem-Solving Challenges ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Mixed Problem-Solving Challenges",
          "description": "Mixed Problem-Solving Challenges ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Mixed Problem-Solving Challenges below\n",
          "solutionCode": "scores = [90, 85, 95]\nprint('Max:', max(scores))\nprint('Min:', min(scores))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Mixed Problem-Solving Challenges ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "10_oops",
    "sectionNumber": "10",
    "title": "Object-Oriented Programming",
    "topics": [
      {
        "id": "py_10_oops_00_intro",
        "sectionId": "10_oops",
        "topicNumber": 1,
        "globalIndex": 106,
        "qBadge": "Q.106",
        "title": "Introduction to OOP",
        "subtitle": "Module 10 · Topic 1",
        "hindiDescription": "Introduction to OOP ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "class Person:\n    pass\np = Person()\nprint(type(p))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to OOP",
            "description": "Is lesson me hum Introduction to OOP ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "class Person:",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to OOP."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to OOP",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to OOP seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "class Person:\n    pass\np = Person()\nprint(type(p))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to OOP ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to OOP",
          "description": "Introduction to OOP ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to OOP below\n",
          "solutionCode": "class Person:\n    pass\np = Person()\nprint(type(p))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to OOP ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_10_oops_01",
        "sectionId": "10_oops",
        "topicNumber": 2,
        "globalIndex": 107,
        "qBadge": "Q.107",
        "title": "Classes and Objects",
        "hindiDescription": "Blueprint (Class) aur Real instance (Object).",
        "difficulty": "Easy",
        "referenceCode": "# Classes and Objects\\ndef solve():\\n    # Example implementation for Classes and Objects\\n    print(\"Mastering Classes and Objects\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Classes and Objects",
            "description": "Blueprint (Class) aur Real instance (Object). Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Classes and Objects\\ndef solve():\\n    # Example implementation for Classes and Objects\\n    print(\"Mastering Classes and Objects\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Classes",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Classes and Objects",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Classes and Objects",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Classes and Objects. Blueprint (Class) aur Real instance (Object). Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Classes and Objects\\ndef solve():\\n    # Example implementation for Classes and Objects\\n    print(\"Mastering Classes and Objects\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Classes and Objects",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Classes and Objects",
          "description": "Classes and Objects par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Classes and Objects\n",
          "solutionCode": "print(\"Mastering Classes and Objects\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Classes and Objects",
          "hints": [
            "print(\"Mastering Classes and Objects\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Classes and Objects"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_02",
        "sectionId": "10_oops",
        "topicNumber": 3,
        "globalIndex": 108,
        "qBadge": "Q.108",
        "title": "Attributes and Methods",
        "hindiDescription": "Object initialization aur self parameter.",
        "difficulty": "Medium",
        "referenceCode": "# __init__ Constructor\\ndef solve():\\n    # Example implementation for __init__ Constructor\\n    print(\"Mastering __init__ Constructor\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: __init__ Constructor",
            "description": "Object initialization aur self parameter. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# __init__ Constructor\\ndef solve():\\n    # Example implementation for __init__ Constructor\\n    print(\"Mastering __init__ Constructor\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "__init__",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering __init__ Constructor",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "__init__ Constructor",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge __init__ Constructor. Object initialization aur self parameter. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# __init__ Constructor\\ndef solve():\\n    # Example implementation for __init__ Constructor\\n    print(\"Mastering __init__ Constructor\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering __init__ Constructor",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: __init__ Constructor",
          "description": "__init__ Constructor par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: __init__ Constructor\n",
          "solutionCode": "print(\"Mastering __init__ Constructor\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering __init__ Constructor",
          "hints": [
            "print(\"Mastering __init__ Constructor\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering __init__ Constructor"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_04_init",
        "sectionId": "10_oops",
        "topicNumber": 4,
        "globalIndex": 109,
        "qBadge": "Q.109",
        "title": "Constructor — __init__()",
        "subtitle": "Module 10 · Topic 4",
        "hindiDescription": "Constructor — __init__() ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\npt = Point(3, 4)\nprint(pt.x, pt.y)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Constructor — __init__()",
            "description": "Is lesson me hum Constructor — __init__() ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "class Point:",
            "concepts": [
              {
                "token": "Constructor",
                "explanation": "Core concept for Constructor — __init__()."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Constructor — __init__()",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Constructor — __init__() seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\npt = Point(3, 4)\nprint(pt.x, pt.y)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Constructor — __init__() ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Constructor — __init__()",
          "description": "Constructor — __init__() ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Constructor — __init__() below\n",
          "solutionCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\npt = Point(3, 4)\nprint(pt.x, pt.y)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Constructor — __init__() ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_10_oops_03",
        "sectionId": "10_oops",
        "topicNumber": 5,
        "globalIndex": 110,
        "qBadge": "Q.110",
        "title": "Instance Variables and Class Variables",
        "hindiDescription": "Individual vs shared class-level variables.",
        "difficulty": "Medium",
        "referenceCode": "# Instance and Class Attributes\\ndef solve():\\n    # Example implementation for Instance and Class Attributes\\n    print(\"Mastering Instance and Class Attributes\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Instance and Class Attributes",
            "description": "Individual vs shared class-level variables. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Instance and Class Attributes\\ndef solve():\\n    # Example implementation for Instance and Class Attributes\\n    print(\"Mastering Instance and Class Attributes\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Instance",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Instance and Class Attributes",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Instance and Class Attributes",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Instance and Class Attributes. Individual vs shared class-level variables. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Instance and Class Attributes\\ndef solve():\\n    # Example implementation for Instance and Class Attributes\\n    print(\"Mastering Instance and Class Attributes\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Instance and Class Attributes",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Instance and Class Attributes",
          "description": "Instance and Class Attributes par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Instance and Class Attributes\n",
          "solutionCode": "print(\"Mastering Instance and Class Attributes\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Instance and Class Attributes",
          "hints": [
            "print(\"Mastering Instance and Class Attributes\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Instance and Class Attributes"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_04",
        "sectionId": "10_oops",
        "topicNumber": 6,
        "globalIndex": 111,
        "qBadge": "Q.111",
        "title": "Instance, Class and Static Methods",
        "hindiDescription": "@classmethod aur @staticmethod decorators.",
        "difficulty": "Medium",
        "referenceCode": "# Instance, Class and Static Methods\\ndef solve():\\n    # Example implementation for Instance, Class and Static Methods\\n    print(\"Mastering Instance, Class and Static Methods\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Instance, Class and Static Methods",
            "description": "@classmethod aur @staticmethod decorators. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Instance, Class and Static Methods\\ndef solve():\\n    # Example implementation for Instance, Class and Static Methods\\n    print(\"Mastering Instance, Class and Static Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Instance,",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Instance, Class and Static Methods",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Instance, Class and Static Methods",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Instance, Class and Static Methods. @classmethod aur @staticmethod decorators. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Instance, Class and Static Methods\\ndef solve():\\n    # Example implementation for Instance, Class and Static Methods\\n    print(\"Mastering Instance, Class and Static Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Instance, Class and Static Methods",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Instance, Class and Static Methods",
          "description": "Instance, Class and Static Methods par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Instance, Class and Static Methods\n",
          "solutionCode": "print(\"Mastering Instance, Class and Static Methods\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Instance, Class and Static Methods",
          "hints": [
            "print(\"Mastering Instance, Class and Static Methods\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Instance, Class and Static Methods"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_05",
        "sectionId": "10_oops",
        "topicNumber": 7,
        "globalIndex": 112,
        "qBadge": "Q.112",
        "title": "Encapsulation and Properties",
        "hindiDescription": "Private variables (_) aur getters/setters.",
        "difficulty": "Medium",
        "referenceCode": "# Encapsulation\\ndef solve():\\n    # Example implementation for Encapsulation\\n    print(\"Mastering Encapsulation\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Encapsulation",
            "description": "Private variables (_) aur getters/setters. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Encapsulation\\ndef solve():\\n    # Example implementation for Encapsulation\\n    print(\"Mastering Encapsulation\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Encapsulation",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Encapsulation",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Encapsulation",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Encapsulation. Private variables (_) aur getters/setters. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Encapsulation\\ndef solve():\\n    # Example implementation for Encapsulation\\n    print(\"Mastering Encapsulation\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Encapsulation",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Encapsulation",
          "description": "Encapsulation par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Encapsulation\n",
          "solutionCode": "print(\"Mastering Encapsulation\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Encapsulation",
          "hints": [
            "print(\"Mastering Encapsulation\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Encapsulation"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_06",
        "sectionId": "10_oops",
        "topicNumber": 8,
        "globalIndex": 113,
        "qBadge": "Q.113",
        "title": "Inheritance",
        "hindiDescription": "Parent class ki properties child class me inherit karna.",
        "difficulty": "Medium",
        "referenceCode": "# Inheritance\\ndef solve():\\n    # Example implementation for Inheritance\\n    print(\"Mastering Inheritance\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Inheritance",
            "description": "Parent class ki properties child class me inherit karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Inheritance\\ndef solve():\\n    # Example implementation for Inheritance\\n    print(\"Mastering Inheritance\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Inheritance",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Inheritance",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Inheritance",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Inheritance. Parent class ki properties child class me inherit karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Inheritance\\ndef solve():\\n    # Example implementation for Inheritance\\n    print(\"Mastering Inheritance\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Inheritance",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Inheritance",
          "description": "Inheritance par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Inheritance\n",
          "solutionCode": "print(\"Mastering Inheritance\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Inheritance",
          "hints": [
            "print(\"Mastering Inheritance\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Inheritance"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_07",
        "sectionId": "10_oops",
        "topicNumber": 9,
        "globalIndex": 114,
        "qBadge": "Q.114",
        "title": "Method Overriding and super()",
        "hindiDescription": "Parent class ke method ko child class me redefine karna.",
        "difficulty": "Medium",
        "referenceCode": "# Method Overriding\\ndef solve():\\n    # Example implementation for Method Overriding\\n    print(\"Mastering Method Overriding\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Method Overriding",
            "description": "Parent class ke method ko child class me redefine karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Method Overriding\\ndef solve():\\n    # Example implementation for Method Overriding\\n    print(\"Mastering Method Overriding\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Method",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Method Overriding",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Method Overriding",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Method Overriding. Parent class ke method ko child class me redefine karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Method Overriding\\ndef solve():\\n    # Example implementation for Method Overriding\\n    print(\"Mastering Method Overriding\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Method Overriding",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Method Overriding",
          "description": "Method Overriding par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Method Overriding\n",
          "solutionCode": "print(\"Mastering Method Overriding\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Method Overriding",
          "hints": [
            "print(\"Mastering Method Overriding\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Method Overriding"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_08",
        "sectionId": "10_oops",
        "topicNumber": 10,
        "globalIndex": 115,
        "qBadge": "Q.115",
        "title": "Polymorphism",
        "hindiDescription": "Same method name ka alag-alag classes me behavior.",
        "difficulty": "Hard",
        "referenceCode": "# Polymorphism\\ndef solve():\\n    # Example implementation for Polymorphism\\n    print(\"Mastering Polymorphism\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Polymorphism",
            "description": "Same method name ka alag-alag classes me behavior. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Polymorphism\\ndef solve():\\n    # Example implementation for Polymorphism\\n    print(\"Mastering Polymorphism\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Polymorphism",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Polymorphism",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Polymorphism",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Polymorphism. Same method name ka alag-alag classes me behavior. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Polymorphism\\ndef solve():\\n    # Example implementation for Polymorphism\\n    print(\"Mastering Polymorphism\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Polymorphism",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Polymorphism",
          "description": "Polymorphism par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Polymorphism\n",
          "solutionCode": "print(\"Mastering Polymorphism\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Polymorphism",
          "hints": [
            "print(\"Mastering Polymorphism\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Polymorphism"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_09",
        "sectionId": "10_oops",
        "topicNumber": 11,
        "globalIndex": 116,
        "qBadge": "Q.116",
        "title": "Abstraction and Abstract Classes",
        "hindiDescription": "abc module aur abstract base classes.",
        "difficulty": "Hard",
        "referenceCode": "# Abstraction\\ndef solve():\\n    # Example implementation for Abstraction\\n    print(\"Mastering Abstraction\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Abstraction",
            "description": "abc module aur abstract base classes. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Abstraction\\ndef solve():\\n    # Example implementation for Abstraction\\n    print(\"Mastering Abstraction\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Abstraction",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Abstraction",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Abstraction",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Abstraction. abc module aur abstract base classes. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Abstraction\\ndef solve():\\n    # Example implementation for Abstraction\\n    print(\"Mastering Abstraction\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Abstraction",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Abstraction",
          "description": "Abstraction par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Abstraction\n",
          "solutionCode": "print(\"Mastering Abstraction\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Abstraction",
          "hints": [
            "print(\"Mastering Abstraction\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Abstraction"
            }
          ]
        }
      },
      {
        "id": "py_10_oops_10",
        "sectionId": "10_oops",
        "topicNumber": 12,
        "globalIndex": 117,
        "qBadge": "Q.117",
        "title": "OOP Mini Projects",
        "hindiDescription": "__str__, __repr__, __len__, __add__ dunder methods.",
        "difficulty": "Hard",
        "referenceCode": "# Magic Methods\\ndef solve():\\n    # Example implementation for Magic Methods\\n    print(\"Mastering Magic Methods\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Magic Methods",
            "description": "__str__, __repr__, __len__, __add__ dunder methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Magic Methods\\ndef solve():\\n    # Example implementation for Magic Methods\\n    print(\"Mastering Magic Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Magic",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Magic Methods",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Magic Methods",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Magic Methods. __str__, __repr__, __len__, __add__ dunder methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Magic Methods\\ndef solve():\\n    # Example implementation for Magic Methods\\n    print(\"Mastering Magic Methods\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Magic Methods",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Magic Methods",
          "description": "Magic Methods par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Magic Methods\n",
          "solutionCode": "print(\"Mastering Magic Methods\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Magic Methods",
          "hints": [
            "print(\"Mastering Magic Methods\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Magic Methods"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "11_modules",
    "sectionNumber": "11",
    "title": "Modules & Packages",
    "topics": [
      {
        "id": "py_11_modules_00_intro",
        "sectionId": "11_modules",
        "topicNumber": 1,
        "globalIndex": 118,
        "qBadge": "Q.118",
        "title": "Introduction to Python Modules",
        "subtitle": "Module 11 · Topic 1",
        "hindiDescription": "Introduction to Python Modules ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "import math\nprint(math.sqrt(16))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Python Modules",
            "description": "Is lesson me hum Introduction to Python Modules ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import math",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Python Modules."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Python Modules",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Python Modules seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import math\nprint(math.sqrt(16))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Python Modules ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Python Modules",
          "description": "Introduction to Python Modules ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Python Modules below\n",
          "solutionCode": "import math\nprint(math.sqrt(16))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Python Modules ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_11_modules_01",
        "sectionId": "11_modules",
        "topicNumber": 2,
        "globalIndex": 119,
        "qBadge": "Q.119",
        "title": "import Statement",
        "hindiDescription": "External python files ko include karna.",
        "difficulty": "Easy",
        "referenceCode": "# import and from-import\\ndef solve():\\n    # Example implementation for import and from-import\\n    print(\"Mastering import and from-import\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: import and from-import",
            "description": "External python files ko include karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# import and from-import\\ndef solve():\\n    # Example implementation for import and from-import\\n    print(\"Mastering import and from-import\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "import",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering import and from-import",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "import and from-import",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge import and from-import. External python files ko include karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# import and from-import\\ndef solve():\\n    # Example implementation for import and from-import\\n    print(\"Mastering import and from-import\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering import and from-import",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: import and from-import",
          "description": "import and from-import par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: import and from-import\n",
          "solutionCode": "print(\"Mastering import and from-import\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering import and from-import",
          "hints": [
            "print(\"Mastering import and from-import\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering import and from-import"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_02",
        "sectionId": "11_modules",
        "topicNumber": 3,
        "globalIndex": 120,
        "qBadge": "Q.120",
        "title": "from and as Imports",
        "hindiDescription": "Python standard library ka power.",
        "difficulty": "Easy",
        "referenceCode": "# Built-in Modules\\ndef solve():\\n    # Example implementation for Built-in Modules\\n    print(\"Mastering Built-in Modules\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Built-in Modules",
            "description": "Python standard library ka power. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Built-in Modules\\ndef solve():\\n    # Example implementation for Built-in Modules\\n    print(\"Mastering Built-in Modules\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Built-in",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Built-in Modules",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Built-in Modules",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Built-in Modules. Python standard library ka power. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Built-in Modules\\ndef solve():\\n    # Example implementation for Built-in Modules\\n    print(\"Mastering Built-in Modules\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Built-in Modules",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Built-in Modules",
          "description": "Built-in Modules par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Built-in Modules\n",
          "solutionCode": "print(\"Mastering Built-in Modules\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Built-in Modules",
          "hints": [
            "print(\"Mastering Built-in Modules\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Built-in Modules"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_03",
        "sectionId": "11_modules",
        "topicNumber": 4,
        "globalIndex": 121,
        "qBadge": "Q.121",
        "title": "Built-in Python Modules",
        "hindiDescription": "Mathematical calculations aur random number generation.",
        "difficulty": "Easy",
        "referenceCode": "# math and random\\ndef solve():\\n    # Example implementation for math and random\\n    print(\"Mastering math and random\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: math and random",
            "description": "Mathematical calculations aur random number generation. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# math and random\\ndef solve():\\n    # Example implementation for math and random\\n    print(\"Mastering math and random\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "math",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering math and random",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "math and random",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge math and random. Mathematical calculations aur random number generation. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# math and random\\ndef solve():\\n    # Example implementation for math and random\\n    print(\"Mastering math and random\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering math and random",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: math and random",
          "description": "math and random par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: math and random\n",
          "solutionCode": "print(\"Mastering math and random\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering math and random",
          "hints": [
            "print(\"Mastering math and random\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering math and random"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_04",
        "sectionId": "11_modules",
        "topicNumber": 5,
        "globalIndex": 122,
        "qBadge": "Q.122",
        "title": "Creating Custom Modules",
        "hindiDescription": "Dates, timestamps aur duration calculations.",
        "difficulty": "Medium",
        "referenceCode": "# datetime\\ndef solve():\\n    # Example implementation for datetime\\n    print(\"Mastering datetime\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: datetime",
            "description": "Dates, timestamps aur duration calculations. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# datetime\\ndef solve():\\n    # Example implementation for datetime\\n    print(\"Mastering datetime\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "datetime",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering datetime",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "datetime",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge datetime. Dates, timestamps aur duration calculations. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# datetime\\ndef solve():\\n    # Example implementation for datetime\\n    print(\"Mastering datetime\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering datetime",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: datetime",
          "description": "datetime par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: datetime\n",
          "solutionCode": "print(\"Mastering datetime\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering datetime",
          "hints": [
            "print(\"Mastering datetime\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering datetime"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_05",
        "sectionId": "11_modules",
        "topicNumber": 6,
        "globalIndex": 123,
        "qBadge": "Q.123",
        "title": "Python Packages and __init__.py",
        "hindiDescription": "File system interaction aur path manipulation.",
        "difficulty": "Medium",
        "referenceCode": "# os and pathlib\\ndef solve():\\n    # Example implementation for os and pathlib\\n    print(\"Mastering os and pathlib\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: os and pathlib",
            "description": "File system interaction aur path manipulation. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# os and pathlib\\ndef solve():\\n    # Example implementation for os and pathlib\\n    print(\"Mastering os and pathlib\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "os",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering os and pathlib",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "os and pathlib",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge os and pathlib. File system interaction aur path manipulation. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# os and pathlib\\ndef solve():\\n    # Example implementation for os and pathlib\\n    print(\"Mastering os and pathlib\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering os and pathlib",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: os and pathlib",
          "description": "os and pathlib par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: os and pathlib\n",
          "solutionCode": "print(\"Mastering os and pathlib\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering os and pathlib",
          "hints": [
            "print(\"Mastering os and pathlib\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering os and pathlib"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_06",
        "sectionId": "11_modules",
        "topicNumber": 7,
        "globalIndex": 124,
        "qBadge": "Q.124",
        "title": "pip and Package Installation",
        "hindiDescription": "Apni python utility library banana.",
        "difficulty": "Easy",
        "referenceCode": "# Creating Custom Modules\\ndef solve():\\n    # Example implementation for Creating Custom Modules\\n    print(\"Mastering Creating Custom Modules\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Creating Custom Modules",
            "description": "Apni python utility library banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Creating Custom Modules\\ndef solve():\\n    # Example implementation for Creating Custom Modules\\n    print(\"Mastering Creating Custom Modules\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Creating",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Creating Custom Modules",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Creating Custom Modules",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Creating Custom Modules. Apni python utility library banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Creating Custom Modules\\ndef solve():\\n    # Example implementation for Creating Custom Modules\\n    print(\"Mastering Creating Custom Modules\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Creating Custom Modules",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Creating Custom Modules",
          "description": "Creating Custom Modules par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Creating Custom Modules\n",
          "solutionCode": "print(\"Mastering Creating Custom Modules\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Creating Custom Modules",
          "hints": [
            "print(\"Mastering Creating Custom Modules\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Creating Custom Modules"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_07",
        "sectionId": "11_modules",
        "topicNumber": 8,
        "globalIndex": 125,
        "qBadge": "Q.125",
        "title": "Virtual Environments — venv",
        "hindiDescription": "Folder ko python package banana.",
        "difficulty": "Medium",
        "referenceCode": "# Packages and __init__.py\\ndef solve():\\n    # Example implementation for Packages and __init__.py\\n    print(\"Mastering Packages and __init__.py\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Packages and __init__.py",
            "description": "Folder ko python package banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Packages and __init__.py\\ndef solve():\\n    # Example implementation for Packages and __init__.py\\n    print(\"Mastering Packages and __init__.py\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Packages",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Packages and __init__.py",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Packages and __init__.py",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Packages and __init__.py. Folder ko python package banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Packages and __init__.py\\ndef solve():\\n    # Example implementation for Packages and __init__.py\\n    print(\"Mastering Packages and __init__.py\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Packages and __init__.py",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Packages and __init__.py",
          "description": "Packages and __init__.py par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Packages and __init__.py\n",
          "solutionCode": "print(\"Mastering Packages and __init__.py\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Packages and __init__.py",
          "hints": [
            "print(\"Mastering Packages and __init__.py\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Packages and __init__.py"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_08",
        "sectionId": "11_modules",
        "topicNumber": 9,
        "globalIndex": 126,
        "qBadge": "Q.126",
        "title": "Requirements and Dependency Management",
        "hindiDescription": "venv create karna aur dependencies manage karna.",
        "difficulty": "Medium",
        "referenceCode": "# pip and Virtual Environments\\ndef solve():\\n    # Example implementation for pip and Virtual Environments\\n    print(\"Mastering pip and Virtual Environments\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: pip and Virtual Environments",
            "description": "venv create karna aur dependencies manage karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# pip and Virtual Environments\\ndef solve():\\n    # Example implementation for pip and Virtual Environments\\n    print(\"Mastering pip and Virtual Environments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "pip",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering pip and Virtual Environments",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "pip and Virtual Environments",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge pip and Virtual Environments. venv create karna aur dependencies manage karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# pip and Virtual Environments\\ndef solve():\\n    # Example implementation for pip and Virtual Environments\\n    print(\"Mastering pip and Virtual Environments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering pip and Virtual Environments",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: pip and Virtual Environments",
          "description": "pip and Virtual Environments par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: pip and Virtual Environments\n",
          "solutionCode": "print(\"Mastering pip and Virtual Environments\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering pip and Virtual Environments",
          "hints": [
            "print(\"Mastering pip and Virtual Environments\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering pip and Virtual Environments"
            }
          ]
        }
      },
      {
        "id": "py_11_modules_10",
        "sectionId": "11_modules",
        "topicNumber": 10,
        "globalIndex": 127,
        "qBadge": "Q.127",
        "title": "Modules and Packages Mini Project",
        "subtitle": "Module 11 · Topic 10",
        "hindiDescription": "Modules and Packages Mini Project ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "import json\ndata = {'project': 'Module Mastery'}\nprint(json.dumps(data))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Modules and Packages Mini Project",
            "description": "Is lesson me hum Modules and Packages Mini Project ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import json",
            "concepts": [
              {
                "token": "Modules",
                "explanation": "Core concept for Modules and Packages Mini Project."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Modules and Packages Mini Project",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Modules and Packages Mini Project seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import json\ndata = {'project': 'Module Mastery'}\nprint(json.dumps(data))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Modules and Packages Mini Project ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Modules and Packages Mini Project",
          "description": "Modules and Packages Mini Project ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Modules and Packages Mini Project below\n",
          "solutionCode": "import json\ndata = {'project': 'Module Mastery'}\nprint(json.dumps(data))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Modules and Packages Mini Project ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "12_files",
    "sectionNumber": "12",
    "title": "File Handling & Data Formats",
    "topics": [
      {
        "id": "py_12_files_00_intro",
        "sectionId": "12_files",
        "topicNumber": 1,
        "globalIndex": 128,
        "qBadge": "Q.128",
        "title": "Introduction to File Handling",
        "subtitle": "Module 12 · Topic 1",
        "hindiDescription": "Introduction to File Handling ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Files allow persistent data storage",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to File Handling",
            "description": "Is lesson me hum Introduction to File Handling ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Files allow persistent data storage",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to File Handling."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to File Handling",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to File Handling seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Files allow persistent data storage",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to File Handling ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to File Handling",
          "description": "Introduction to File Handling ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to File Handling below\n",
          "solutionCode": "# Files allow persistent data storage",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to File Handling ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_12_files_01",
        "sectionId": "12_files",
        "topicNumber": 2,
        "globalIndex": 129,
        "qBadge": "Q.129",
        "title": "Opening and Closing Files",
        "hindiDescription": "open() function aur file modes (r, w, a).",
        "difficulty": "Easy",
        "referenceCode": "# Opening and Closing Files\\ndef solve():\\n    # Example implementation for Opening and Closing Files\\n    print(\"Mastering Opening and Closing Files\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Opening and Closing Files",
            "description": "open() function aur file modes (r, w, a). Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Opening and Closing Files\\ndef solve():\\n    # Example implementation for Opening and Closing Files\\n    print(\"Mastering Opening and Closing Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Opening",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Opening and Closing Files",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Opening and Closing Files",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Opening and Closing Files. open() function aur file modes (r, w, a). Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Opening and Closing Files\\ndef solve():\\n    # Example implementation for Opening and Closing Files\\n    print(\"Mastering Opening and Closing Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Opening and Closing Files",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Opening and Closing Files",
          "description": "Opening and Closing Files par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Opening and Closing Files\n",
          "solutionCode": "print(\"Mastering Opening and Closing Files\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Opening and Closing Files",
          "hints": [
            "print(\"Mastering Opening and Closing Files\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Opening and Closing Files"
            }
          ]
        }
      },
      {
        "id": "py_12_files_02",
        "sectionId": "12_files",
        "topicNumber": 3,
        "globalIndex": 130,
        "qBadge": "Q.130",
        "title": "Reading Text Files",
        "hindiDescription": "read(), readline(), readlines() methods.",
        "difficulty": "Easy",
        "referenceCode": "# Reading Text Files\\ndef solve():\\n    # Example implementation for Reading Text Files\\n    print(\"Mastering Reading Text Files\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Reading Text Files",
            "description": "read(), readline(), readlines() methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Reading Text Files\\ndef solve():\\n    # Example implementation for Reading Text Files\\n    print(\"Mastering Reading Text Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Reading",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Reading Text Files",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Reading Text Files",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Reading Text Files. read(), readline(), readlines() methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Reading Text Files\\ndef solve():\\n    # Example implementation for Reading Text Files\\n    print(\"Mastering Reading Text Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Reading Text Files",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Reading Text Files",
          "description": "Reading Text Files par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Reading Text Files\n",
          "solutionCode": "print(\"Mastering Reading Text Files\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Reading Text Files",
          "hints": [
            "print(\"Mastering Reading Text Files\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Reading Text Files"
            }
          ]
        }
      },
      {
        "id": "py_12_files_03",
        "sectionId": "12_files",
        "topicNumber": 4,
        "globalIndex": 131,
        "qBadge": "Q.131",
        "title": "Writing and Appending Files",
        "hindiDescription": "write() aur writelines() se data save karna.",
        "difficulty": "Medium",
        "referenceCode": "# Writing and Appending Files\\ndef solve():\\n    # Example implementation for Writing and Appending Files\\n    print(\"Mastering Writing and Appending Files\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Writing and Appending Files",
            "description": "write() aur writelines() se data save karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Writing and Appending Files\\ndef solve():\\n    # Example implementation for Writing and Appending Files\\n    print(\"Mastering Writing and Appending Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Writing",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Writing and Appending Files",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Writing and Appending Files",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Writing and Appending Files. write() aur writelines() se data save karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Writing and Appending Files\\ndef solve():\\n    # Example implementation for Writing and Appending Files\\n    print(\"Mastering Writing and Appending Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Writing and Appending Files",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Writing and Appending Files",
          "description": "Writing and Appending Files par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Writing and Appending Files\n",
          "solutionCode": "print(\"Mastering Writing and Appending Files\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Writing and Appending Files",
          "hints": [
            "print(\"Mastering Writing and Appending Files\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Writing and Appending Files"
            }
          ]
        }
      },
      {
        "id": "py_12_files_04",
        "sectionId": "12_files",
        "topicNumber": 5,
        "globalIndex": 132,
        "qBadge": "Q.132",
        "title": "with Statement and Context Managers",
        "hindiDescription": "Context managers se automatic file closing.",
        "difficulty": "Medium",
        "referenceCode": "# with Statement\\ndef solve():\\n    # Example implementation for with Statement\\n    print(\"Mastering with Statement\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: with Statement",
            "description": "Context managers se automatic file closing. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# with Statement\\ndef solve():\\n    # Example implementation for with Statement\\n    print(\"Mastering with Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "with",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering with Statement",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "with Statement",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge with Statement. Context managers se automatic file closing. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# with Statement\\ndef solve():\\n    # Example implementation for with Statement\\n    print(\"Mastering with Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering with Statement",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: with Statement",
          "description": "with Statement par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: with Statement\n",
          "solutionCode": "print(\"Mastering with Statement\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering with Statement",
          "hints": [
            "print(\"Mastering with Statement\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering with Statement"
            }
          ]
        }
      },
      {
        "id": "py_12_files_05",
        "sectionId": "12_files",
        "topicNumber": 6,
        "globalIndex": 133,
        "qBadge": "Q.133",
        "title": "File Paths Using pathlib",
        "hindiDescription": "Relative vs absolute paths.",
        "difficulty": "Medium",
        "referenceCode": "# File Paths\\ndef solve():\\n    # Example implementation for File Paths\\n    print(\"Mastering File Paths\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: File Paths",
            "description": "Relative vs absolute paths. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# File Paths\\ndef solve():\\n    # Example implementation for File Paths\\n    print(\"Mastering File Paths\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "File",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering File Paths",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "File Paths",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge File Paths. Relative vs absolute paths. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# File Paths\\ndef solve():\\n    # Example implementation for File Paths\\n    print(\"Mastering File Paths\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering File Paths",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: File Paths",
          "description": "File Paths par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: File Paths\n",
          "solutionCode": "print(\"Mastering File Paths\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering File Paths",
          "hints": [
            "print(\"Mastering File Paths\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering File Paths"
            }
          ]
        }
      },
      {
        "id": "py_12_files_06",
        "sectionId": "12_files",
        "topicNumber": 7,
        "globalIndex": 134,
        "qBadge": "Q.134",
        "title": "Working with CSV Files",
        "hindiDescription": "csv.reader aur csv.writer se tabular data read/write.",
        "difficulty": "Medium",
        "referenceCode": "# CSV Files\\ndef solve():\\n    # Example implementation for CSV Files\\n    print(\"Mastering CSV Files\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: CSV Files",
            "description": "csv.reader aur csv.writer se tabular data read/write. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# CSV Files\\ndef solve():\\n    # Example implementation for CSV Files\\n    print(\"Mastering CSV Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "CSV",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering CSV Files",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "CSV Files",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge CSV Files. csv.reader aur csv.writer se tabular data read/write. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# CSV Files\\ndef solve():\\n    # Example implementation for CSV Files\\n    print(\"Mastering CSV Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering CSV Files",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: CSV Files",
          "description": "CSV Files par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: CSV Files\n",
          "solutionCode": "print(\"Mastering CSV Files\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering CSV Files",
          "hints": [
            "print(\"Mastering CSV Files\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering CSV Files"
            }
          ]
        }
      },
      {
        "id": "py_12_files_07",
        "sectionId": "12_files",
        "topicNumber": 8,
        "globalIndex": 135,
        "qBadge": "Q.135",
        "title": "Working with JSON Files",
        "hindiDescription": "json.loads() aur json.dumps() se API data parse karna.",
        "difficulty": "Medium",
        "referenceCode": "# JSON Files\\ndef solve():\\n    # Example implementation for JSON Files\\n    print(\"Mastering JSON Files\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: JSON Files",
            "description": "json.loads() aur json.dumps() se API data parse karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# JSON Files\\ndef solve():\\n    # Example implementation for JSON Files\\n    print(\"Mastering JSON Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "JSON",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering JSON Files",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "JSON Files",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge JSON Files. json.loads() aur json.dumps() se API data parse karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# JSON Files\\ndef solve():\\n    # Example implementation for JSON Files\\n    print(\"Mastering JSON Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering JSON Files",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: JSON Files",
          "description": "JSON Files par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: JSON Files\n",
          "solutionCode": "print(\"Mastering JSON Files\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering JSON Files",
          "hints": [
            "print(\"Mastering JSON Files\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering JSON Files"
            }
          ]
        }
      },
      {
        "id": "py_12_files_08",
        "sectionId": "12_files",
        "topicNumber": 9,
        "globalIndex": 136,
        "qBadge": "Q.136",
        "title": "Reading and Writing Structured Data",
        "hindiDescription": "Images aur bytes handling with rb/wb modes.",
        "difficulty": "Hard",
        "referenceCode": "# Binary Files\\ndef solve():\\n    # Example implementation for Binary Files\\n    print(\"Mastering Binary Files\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Binary Files",
            "description": "Images aur bytes handling with rb/wb modes. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Binary Files\\ndef solve():\\n    # Example implementation for Binary Files\\n    print(\"Mastering Binary Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Binary",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Binary Files",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Binary Files",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Binary Files. Images aur bytes handling with rb/wb modes. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Binary Files\\ndef solve():\\n    # Example implementation for Binary Files\\n    print(\"Mastering Binary Files\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Binary Files",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Binary Files",
          "description": "Binary Files par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Binary Files\n",
          "solutionCode": "print(\"Mastering Binary Files\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Binary Files",
          "hints": [
            "print(\"Mastering Binary Files\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Binary Files"
            }
          ]
        }
      },
      {
        "id": "py_12_files_09",
        "sectionId": "12_files",
        "topicNumber": 10,
        "globalIndex": 137,
        "qBadge": "Q.137",
        "title": "File and Directory Operations",
        "hindiDescription": "Folders create karna, scan karna aur listdir.",
        "difficulty": "Medium",
        "referenceCode": "# Working with Directories\\ndef solve():\\n    # Example implementation for Working with Directories\\n    print(\"Mastering Working with Directories\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Working with Directories",
            "description": "Folders create karna, scan karna aur listdir. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Working with Directories\\ndef solve():\\n    # Example implementation for Working with Directories\\n    print(\"Mastering Working with Directories\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Working",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Working with Directories",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Working with Directories",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Working with Directories. Folders create karna, scan karna aur listdir. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Working with Directories\\ndef solve():\\n    # Example implementation for Working with Directories\\n    print(\"Mastering Working with Directories\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Working with Directories",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Working with Directories",
          "description": "Working with Directories par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Working with Directories\n",
          "solutionCode": "print(\"Mastering Working with Directories\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Working with Directories",
          "hints": [
            "print(\"Mastering Working with Directories\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Working with Directories"
            }
          ]
        }
      },
      {
        "id": "py_12_files_10",
        "sectionId": "12_files",
        "topicNumber": 11,
        "globalIndex": 138,
        "qBadge": "Q.138",
        "title": "File Handling Errors",
        "subtitle": "Module 12 · Topic 11",
        "hindiDescription": "File Handling Errors ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "try:\n    with open('ghost.txt') as f: pass\nexcept FileNotFoundError:\n    print('File does not exist')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to File Handling Errors",
            "description": "Is lesson me hum File Handling Errors ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "try:",
            "concepts": [
              {
                "token": "File",
                "explanation": "Core concept for File Handling Errors."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "File Handling Errors",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum File Handling Errors seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "try:\n    with open('ghost.txt') as f: pass\nexcept FileNotFoundError:\n    print('File does not exist')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne File Handling Errors ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: File Handling Errors",
          "description": "File Handling Errors ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for File Handling Errors below\n",
          "solutionCode": "try:\n    with open('ghost.txt') as f: pass\nexcept FileNotFoundError:\n    print('File does not exist')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "File Handling Errors ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_12_files_12_proj",
        "sectionId": "12_files",
        "topicNumber": 12,
        "globalIndex": 139,
        "qBadge": "Q.139",
        "title": "File Processing Mini Projects",
        "subtitle": "Module 12 · Topic 12",
        "hindiDescription": "File Processing Mini Projects ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Automated student log analyzer",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to File Processing Mini Projects",
            "description": "Is lesson me hum File Processing Mini Projects ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Automated student log analyzer",
            "concepts": [
              {
                "token": "File",
                "explanation": "Core concept for File Processing Mini Projects."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "File Processing Mini Projects",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum File Processing Mini Projects seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Automated student log analyzer",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne File Processing Mini Projects ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: File Processing Mini Projects",
          "description": "File Processing Mini Projects ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for File Processing Mini Projects below\n",
          "solutionCode": "# Automated student log analyzer",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "File Processing Mini Projects ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "13_exceptions",
    "sectionNumber": "13",
    "title": "Exception Handling & Debugging",
    "topics": [
      {
        "id": "py_13_exceptions_00_intro",
        "sectionId": "13_exceptions",
        "topicNumber": 1,
        "globalIndex": 140,
        "qBadge": "Q.140",
        "title": "Introduction to Python Errors",
        "subtitle": "Module 13 · Topic 1",
        "hindiDescription": "Introduction to Python Errors ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Errors stop program execution if unhandled",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Python Errors",
            "description": "Is lesson me hum Introduction to Python Errors ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Errors stop program execution if unhandled",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Python Errors."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Python Errors",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Python Errors seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Errors stop program execution if unhandled",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Python Errors ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Python Errors",
          "description": "Introduction to Python Errors ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Python Errors below\n",
          "solutionCode": "# Errors stop program execution if unhandled",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Python Errors ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_01",
        "sectionId": "13_exceptions",
        "topicNumber": 2,
        "globalIndex": 141,
        "qBadge": "Q.141",
        "title": "Syntax Errors vs Runtime Errors",
        "hindiDescription": "Compilation syntax error aur runtime crash me farq.",
        "difficulty": "Easy",
        "referenceCode": "# Syntax vs Runtime Errors\\ndef solve():\\n    # Example implementation for Syntax vs Runtime Errors\\n    print(\"Mastering Syntax vs Runtime Errors\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Syntax vs Runtime Errors",
            "description": "Compilation syntax error aur runtime crash me farq. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Syntax vs Runtime Errors\\ndef solve():\\n    # Example implementation for Syntax vs Runtime Errors\\n    print(\"Mastering Syntax vs Runtime Errors\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Syntax",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Syntax vs Runtime Errors",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Syntax vs Runtime Errors",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Syntax vs Runtime Errors. Compilation syntax error aur runtime crash me farq. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Syntax vs Runtime Errors\\ndef solve():\\n    # Example implementation for Syntax vs Runtime Errors\\n    print(\"Mastering Syntax vs Runtime Errors\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Syntax vs Runtime Errors",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Syntax vs Runtime Errors",
          "description": "Syntax vs Runtime Errors par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Syntax vs Runtime Errors\n",
          "solutionCode": "print(\"Mastering Syntax vs Runtime Errors\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Syntax vs Runtime Errors",
          "hints": [
            "print(\"Mastering Syntax vs Runtime Errors\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Syntax vs Runtime Errors"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_02",
        "sectionId": "13_exceptions",
        "topicNumber": 3,
        "globalIndex": 142,
        "qBadge": "Q.142",
        "title": "Common Python Exceptions",
        "hindiDescription": "Runtime crashes ko safely catch karna.",
        "difficulty": "Easy",
        "referenceCode": "# try and except\\ndef solve():\\n    # Example implementation for try and except\\n    print(\"Mastering try and except\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: try and except",
            "description": "Runtime crashes ko safely catch karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# try and except\\ndef solve():\\n    # Example implementation for try and except\\n    print(\"Mastering try and except\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "try",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering try and except",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "try and except",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge try and except. Runtime crashes ko safely catch karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# try and except\\ndef solve():\\n    # Example implementation for try and except\\n    print(\"Mastering try and except\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering try and except",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: try and except",
          "description": "try and except par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: try and except\n",
          "solutionCode": "print(\"Mastering try and except\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering try and except",
          "hints": [
            "print(\"Mastering try and except\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering try and except"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_04_try",
        "sectionId": "13_exceptions",
        "topicNumber": 4,
        "globalIndex": 143,
        "qBadge": "Q.143",
        "title": "try and except",
        "hindiDescription": "Runtime crashes ko safely catch karna.",
        "difficulty": "Medium",
        "referenceCode": "# try and except\\ndef solve():\\n    # Example implementation for try and except\\n    print(\"Mastering try and except\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: try and except",
            "description": "Runtime crashes ko safely catch karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# try and except\\ndef solve():\\n    # Example implementation for try and except\\n    print(\"Mastering try and except\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "try",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering try and except",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "try and except",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge try and except. Runtime crashes ko safely catch karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# try and except\\ndef solve():\\n    # Example implementation for try and except\\n    print(\"Mastering try and except\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering try and except",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: try and except",
          "description": "try and except par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: try and except\n",
          "solutionCode": "print(\"Mastering try and except\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering try and except",
          "hints": [
            "print(\"Mastering try and except\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering try and except"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_03",
        "sectionId": "13_exceptions",
        "topicNumber": 5,
        "globalIndex": 144,
        "qBadge": "Q.144",
        "title": "Multiple except Blocks",
        "hindiDescription": "ValueError, TypeError, ZeroDivisionError handle karna.",
        "difficulty": "Medium",
        "referenceCode": "# Multiple except Blocks\\ndef solve():\\n    # Example implementation for Multiple except Blocks\\n    print(\"Mastering Multiple except Blocks\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Multiple except Blocks",
            "description": "ValueError, TypeError, ZeroDivisionError handle karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Multiple except Blocks\\ndef solve():\\n    # Example implementation for Multiple except Blocks\\n    print(\"Mastering Multiple except Blocks\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Multiple",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Multiple except Blocks",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Multiple except Blocks",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Multiple except Blocks. ValueError, TypeError, ZeroDivisionError handle karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Multiple except Blocks\\ndef solve():\\n    # Example implementation for Multiple except Blocks\\n    print(\"Mastering Multiple except Blocks\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Multiple except Blocks",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Multiple except Blocks",
          "description": "Multiple except Blocks par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Multiple except Blocks\n",
          "solutionCode": "print(\"Mastering Multiple except Blocks\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Multiple except Blocks",
          "hints": [
            "print(\"Mastering Multiple except Blocks\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Multiple except Blocks"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_04",
        "sectionId": "13_exceptions",
        "topicNumber": 6,
        "globalIndex": 145,
        "qBadge": "Q.145",
        "title": "else and finally",
        "hindiDescription": "No-error execution aur cleanup blocks.",
        "difficulty": "Medium",
        "referenceCode": "# else and finally\\ndef solve():\\n    # Example implementation for else and finally\\n    print(\"Mastering else and finally\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: else and finally",
            "description": "No-error execution aur cleanup blocks. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# else and finally\\ndef solve():\\n    # Example implementation for else and finally\\n    print(\"Mastering else and finally\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "else",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering else and finally",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "else and finally",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge else and finally. No-error execution aur cleanup blocks. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# else and finally\\ndef solve():\\n    # Example implementation for else and finally\\n    print(\"Mastering else and finally\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering else and finally",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: else and finally",
          "description": "else and finally par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: else and finally\n",
          "solutionCode": "print(\"Mastering else and finally\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering else and finally",
          "hints": [
            "print(\"Mastering else and finally\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering else and finally"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_05",
        "sectionId": "13_exceptions",
        "topicNumber": 7,
        "globalIndex": 146,
        "qBadge": "Q.146",
        "title": "raise Statement",
        "hindiDescription": "Custom conditions par manual exception trigger karna.",
        "difficulty": "Medium",
        "referenceCode": "# raise Statement\\ndef solve():\\n    # Example implementation for raise Statement\\n    print(\"Mastering raise Statement\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: raise Statement",
            "description": "Custom conditions par manual exception trigger karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# raise Statement\\ndef solve():\\n    # Example implementation for raise Statement\\n    print(\"Mastering raise Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "raise",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering raise Statement",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "raise Statement",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge raise Statement. Custom conditions par manual exception trigger karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# raise Statement\\ndef solve():\\n    # Example implementation for raise Statement\\n    print(\"Mastering raise Statement\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering raise Statement",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: raise Statement",
          "description": "raise Statement par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: raise Statement\n",
          "solutionCode": "print(\"Mastering raise Statement\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering raise Statement",
          "hints": [
            "print(\"Mastering raise Statement\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering raise Statement"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_06",
        "sectionId": "13_exceptions",
        "topicNumber": 8,
        "globalIndex": 147,
        "qBadge": "Q.147",
        "title": "Custom Exceptions",
        "hindiDescription": "Exception class inherit karke domain errors banana.",
        "difficulty": "Hard",
        "referenceCode": "# Custom Exceptions\\ndef solve():\\n    # Example implementation for Custom Exceptions\\n    print(\"Mastering Custom Exceptions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Custom Exceptions",
            "description": "Exception class inherit karke domain errors banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Custom Exceptions\\ndef solve():\\n    # Example implementation for Custom Exceptions\\n    print(\"Mastering Custom Exceptions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Custom",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Custom Exceptions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Custom Exceptions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Custom Exceptions. Exception class inherit karke domain errors banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Custom Exceptions\\ndef solve():\\n    # Example implementation for Custom Exceptions\\n    print(\"Mastering Custom Exceptions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Custom Exceptions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Custom Exceptions",
          "description": "Custom Exceptions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Custom Exceptions\n",
          "solutionCode": "print(\"Mastering Custom Exceptions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Custom Exceptions",
          "hints": [
            "print(\"Mastering Custom Exceptions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Custom Exceptions"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_07",
        "sectionId": "13_exceptions",
        "topicNumber": 9,
        "globalIndex": 148,
        "qBadge": "Q.148",
        "title": "Debugging Using Tracebacks and Breakpoints",
        "hindiDescription": "Stack trace read karna aur print debugging.",
        "difficulty": "Medium",
        "referenceCode": "# Debugging Techniques\\ndef solve():\\n    # Example implementation for Debugging Techniques\\n    print(\"Mastering Debugging Techniques\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Debugging Techniques",
            "description": "Stack trace read karna aur print debugging. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Debugging Techniques\\ndef solve():\\n    # Example implementation for Debugging Techniques\\n    print(\"Mastering Debugging Techniques\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Debugging",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Debugging Techniques",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Debugging Techniques",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Debugging Techniques. Stack trace read karna aur print debugging. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Debugging Techniques\\ndef solve():\\n    # Example implementation for Debugging Techniques\\n    print(\"Mastering Debugging Techniques\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Debugging Techniques",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Debugging Techniques",
          "description": "Debugging Techniques par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Debugging Techniques\n",
          "solutionCode": "print(\"Mastering Debugging Techniques\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Debugging Techniques",
          "hints": [
            "print(\"Mastering Debugging Techniques\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Debugging Techniques"
            }
          ]
        }
      },
      {
        "id": "py_13_exceptions_09_proj",
        "sectionId": "13_exceptions",
        "topicNumber": 10,
        "globalIndex": 149,
        "qBadge": "Q.149",
        "title": "Error Handling Mini Projects",
        "subtitle": "Module 13 · Topic 10",
        "hindiDescription": "Error Handling Mini Projects ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Robust command-line input validator",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Error Handling Mini Projects",
            "description": "Is lesson me hum Error Handling Mini Projects ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Robust command-line input validator",
            "concepts": [
              {
                "token": "Error",
                "explanation": "Core concept for Error Handling Mini Projects."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Error Handling Mini Projects",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Error Handling Mini Projects seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Robust command-line input validator",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Error Handling Mini Projects ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Error Handling Mini Projects",
          "description": "Error Handling Mini Projects ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Error Handling Mini Projects below\n",
          "solutionCode": "# Robust command-line input validator",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Error Handling Mini Projects ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "14_advanced",
    "sectionNumber": "14",
    "title": "Advanced Python Concepts",
    "topics": [
      {
        "id": "py_14_advanced_01",
        "sectionId": "14_advanced",
        "topicNumber": 1,
        "globalIndex": 150,
        "qBadge": "Q.150",
        "title": "Iterables and Iterators",
        "hindiDescription": "__iter__ aur __next__ protocol.",
        "difficulty": "Medium",
        "referenceCode": "# Iterators and Iterables\\ndef solve():\\n    # Example implementation for Iterators and Iterables\\n    print(\"Mastering Iterators and Iterables\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Iterators and Iterables",
            "description": "__iter__ aur __next__ protocol. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Iterators and Iterables\\ndef solve():\\n    # Example implementation for Iterators and Iterables\\n    print(\"Mastering Iterators and Iterables\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Iterators",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Iterators and Iterables",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Iterators and Iterables",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Iterators and Iterables. __iter__ aur __next__ protocol. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Iterators and Iterables\\ndef solve():\\n    # Example implementation for Iterators and Iterables\\n    print(\"Mastering Iterators and Iterables\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Iterators and Iterables",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Iterators and Iterables",
          "description": "Iterators and Iterables par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Iterators and Iterables\n",
          "solutionCode": "print(\"Mastering Iterators and Iterables\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Iterators and Iterables",
          "hints": [
            "print(\"Mastering Iterators and Iterables\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Iterators and Iterables"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_02",
        "sectionId": "14_advanced",
        "topicNumber": 2,
        "globalIndex": 151,
        "qBadge": "Q.151",
        "title": "Generators and yield",
        "hindiDescription": "Memory-efficient lazy stream generation.",
        "difficulty": "Medium",
        "referenceCode": "# Generators and yield\\ndef solve():\\n    # Example implementation for Generators and yield\\n    print(\"Mastering Generators and yield\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Generators and yield",
            "description": "Memory-efficient lazy stream generation. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Generators and yield\\ndef solve():\\n    # Example implementation for Generators and yield\\n    print(\"Mastering Generators and yield\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Generators",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Generators and yield",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Generators and yield",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Generators and yield. Memory-efficient lazy stream generation. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Generators and yield\\ndef solve():\\n    # Example implementation for Generators and yield\\n    print(\"Mastering Generators and yield\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Generators and yield",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Generators and yield",
          "description": "Generators and yield par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Generators and yield\n",
          "solutionCode": "print(\"Mastering Generators and yield\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Generators and yield",
          "hints": [
            "print(\"Mastering Generators and yield\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Generators and yield"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_03",
        "sectionId": "14_advanced",
        "topicNumber": 3,
        "globalIndex": 152,
        "qBadge": "Q.152",
        "title": "Decorators",
        "hindiDescription": "Functions ko wrap karke behavior extend karna.",
        "difficulty": "Hard",
        "referenceCode": "# Decorators\\ndef solve():\\n    # Example implementation for Decorators\\n    print(\"Mastering Decorators\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Decorators",
            "description": "Functions ko wrap karke behavior extend karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Decorators\\ndef solve():\\n    # Example implementation for Decorators\\n    print(\"Mastering Decorators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Decorators",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Decorators",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Decorators",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Decorators. Functions ko wrap karke behavior extend karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Decorators\\ndef solve():\\n    # Example implementation for Decorators\\n    print(\"Mastering Decorators\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Decorators",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Decorators",
          "description": "Decorators par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Decorators\n",
          "solutionCode": "print(\"Mastering Decorators\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Decorators",
          "hints": [
            "print(\"Mastering Decorators\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Decorators"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_04",
        "sectionId": "14_advanced",
        "topicNumber": 4,
        "globalIndex": 153,
        "qBadge": "Q.153",
        "title": "Closures",
        "hindiDescription": "Inner function ka enclosing scope variables capture karna.",
        "difficulty": "Hard",
        "referenceCode": "# Closures\\ndef solve():\\n    # Example implementation for Closures\\n    print(\"Mastering Closures\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Closures",
            "description": "Inner function ka enclosing scope variables capture karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Closures\\ndef solve():\\n    # Example implementation for Closures\\n    print(\"Mastering Closures\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Closures",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Closures",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Closures",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Closures. Inner function ka enclosing scope variables capture karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Closures\\ndef solve():\\n    # Example implementation for Closures\\n    print(\"Mastering Closures\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Closures",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Closures",
          "description": "Closures par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Closures\n",
          "solutionCode": "print(\"Mastering Closures\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Closures",
          "hints": [
            "print(\"Mastering Closures\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Closures"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_05",
        "sectionId": "14_advanced",
        "topicNumber": 5,
        "globalIndex": 154,
        "qBadge": "Q.154",
        "title": "Comprehensions — Advanced",
        "hindiDescription": "Nested comprehensions aur conditional filtering.",
        "difficulty": "Medium",
        "referenceCode": "# Advanced Comprehensions\\ndef solve():\\n    # Example implementation for Advanced Comprehensions\\n    print(\"Mastering Advanced Comprehensions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Advanced Comprehensions",
            "description": "Nested comprehensions aur conditional filtering. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Advanced Comprehensions\\ndef solve():\\n    # Example implementation for Advanced Comprehensions\\n    print(\"Mastering Advanced Comprehensions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Advanced",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Advanced Comprehensions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Advanced Comprehensions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Advanced Comprehensions. Nested comprehensions aur conditional filtering. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Advanced Comprehensions\\ndef solve():\\n    # Example implementation for Advanced Comprehensions\\n    print(\"Mastering Advanced Comprehensions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Advanced Comprehensions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Advanced Comprehensions",
          "description": "Advanced Comprehensions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Advanced Comprehensions\n",
          "solutionCode": "print(\"Mastering Advanced Comprehensions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Advanced Comprehensions",
          "hints": [
            "print(\"Mastering Advanced Comprehensions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Advanced Comprehensions"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_06_functional",
        "sectionId": "14_advanced",
        "topicNumber": 6,
        "globalIndex": 155,
        "qBadge": "Q.155",
        "title": "map(), filter() and zip()",
        "subtitle": "Module 14 · Topic 6",
        "hindiDescription": "map(), filter() and zip() ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "nums = [1, 2, 3, 4]\nev = list(filter(lambda x: x%2==0, nums))\nprint(ev)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to map(), filter() and zip()",
            "description": "Is lesson me hum map(), filter() and zip() ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "nums = [1, 2, 3, 4]",
            "concepts": [
              {
                "token": "map(),",
                "explanation": "Core concept for map(), filter() and zip()."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "map(), filter() and zip()",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum map(), filter() and zip() seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "nums = [1, 2, 3, 4]\nev = list(filter(lambda x: x%2==0, nums))\nprint(ev)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne map(), filter() and zip() ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: map(), filter() and zip()",
          "description": "map(), filter() and zip() ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for map(), filter() and zip() below\n",
          "solutionCode": "nums = [1, 2, 3, 4]\nev = list(filter(lambda x: x%2==0, nums))\nprint(ev)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "map(), filter() and zip() ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_07_enum",
        "sectionId": "14_advanced",
        "topicNumber": 7,
        "globalIndex": 156,
        "qBadge": "Q.156",
        "title": "enumerate() and sorted()",
        "subtitle": "Module 14 · Topic 7",
        "hindiDescription": "enumerate() and sorted() ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "for idx, val in enumerate(['Python', 'SQL']):\n    print(idx, val)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to enumerate() and sorted()",
            "description": "Is lesson me hum enumerate() and sorted() ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "for idx, val in enumerate(['Python', 'SQL']):",
            "concepts": [
              {
                "token": "enumerate()",
                "explanation": "Core concept for enumerate() and sorted()."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "enumerate() and sorted()",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum enumerate() and sorted() seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "for idx, val in enumerate(['Python', 'SQL']):\n    print(idx, val)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne enumerate() and sorted() ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: enumerate() and sorted()",
          "description": "enumerate() and sorted() ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for enumerate() and sorted() below\n",
          "solutionCode": "for idx, val in enumerate(['Python', 'SQL']):\n    print(idx, val)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "enumerate() and sorted() ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_08",
        "sectionId": "14_advanced",
        "topicNumber": 8,
        "globalIndex": 157,
        "qBadge": "Q.157",
        "title": "Shallow Copy vs Deep Copy",
        "hindiDescription": "copy module: reference vs independent clone.",
        "difficulty": "Hard",
        "referenceCode": "# Shallow vs Deep Copy\\ndef solve():\\n    # Example implementation for Shallow vs Deep Copy\\n    print(\"Mastering Shallow vs Deep Copy\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Shallow vs Deep Copy",
            "description": "copy module: reference vs independent clone. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Shallow vs Deep Copy\\ndef solve():\\n    # Example implementation for Shallow vs Deep Copy\\n    print(\"Mastering Shallow vs Deep Copy\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Shallow",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Shallow vs Deep Copy",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Shallow vs Deep Copy",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Shallow vs Deep Copy. copy module: reference vs independent clone. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Shallow vs Deep Copy\\ndef solve():\\n    # Example implementation for Shallow vs Deep Copy\\n    print(\"Mastering Shallow vs Deep Copy\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Shallow vs Deep Copy",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Shallow vs Deep Copy",
          "description": "Shallow vs Deep Copy par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Shallow vs Deep Copy\n",
          "solutionCode": "print(\"Mastering Shallow vs Deep Copy\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Shallow vs Deep Copy",
          "hints": [
            "print(\"Mastering Shallow vs Deep Copy\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Shallow vs Deep Copy"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_09",
        "sectionId": "14_advanced",
        "topicNumber": 9,
        "globalIndex": 158,
        "qBadge": "Q.158",
        "title": "Mutable vs Immutable Objects",
        "hindiDescription": "Function definition me list/dict defaults ka pitfall.",
        "difficulty": "Medium",
        "referenceCode": "# Mutable Default Arguments\\ndef solve():\\n    # Example implementation for Mutable Default Arguments\\n    print(\"Mastering Mutable Default Arguments\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Mutable Default Arguments",
            "description": "Function definition me list/dict defaults ka pitfall. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Mutable Default Arguments\\ndef solve():\\n    # Example implementation for Mutable Default Arguments\\n    print(\"Mastering Mutable Default Arguments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Mutable",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Mutable Default Arguments",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Mutable Default Arguments",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Mutable Default Arguments. Function definition me list/dict defaults ka pitfall. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Mutable Default Arguments\\ndef solve():\\n    # Example implementation for Mutable Default Arguments\\n    print(\"Mastering Mutable Default Arguments\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Mutable Default Arguments",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Mutable Default Arguments",
          "description": "Mutable Default Arguments par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Mutable Default Arguments\n",
          "solutionCode": "print(\"Mastering Mutable Default Arguments\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Mutable Default Arguments",
          "hints": [
            "print(\"Mastering Mutable Default Arguments\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Mutable Default Arguments"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_07",
        "sectionId": "14_advanced",
        "topicNumber": 10,
        "globalIndex": 159,
        "qBadge": "Q.159",
        "title": "Regular Expressions — re",
        "hindiDescription": "re module se text patterns search aur extract karna.",
        "difficulty": "Hard",
        "referenceCode": "# Regular Expressions\\ndef solve():\\n    # Example implementation for Regular Expressions\\n    print(\"Mastering Regular Expressions\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Regular Expressions",
            "description": "re module se text patterns search aur extract karna. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Regular Expressions\\ndef solve():\\n    # Example implementation for Regular Expressions\\n    print(\"Mastering Regular Expressions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Regular",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Regular Expressions",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Regular Expressions",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Regular Expressions. re module se text patterns search aur extract karna. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Regular Expressions\\ndef solve():\\n    # Example implementation for Regular Expressions\\n    print(\"Mastering Regular Expressions\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Regular Expressions",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Regular Expressions",
          "description": "Regular Expressions par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Regular Expressions\n",
          "solutionCode": "print(\"Mastering Regular Expressions\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Regular Expressions",
          "hints": [
            "print(\"Mastering Regular Expressions\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Regular Expressions"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_06",
        "sectionId": "14_advanced",
        "topicNumber": 11,
        "globalIndex": 160,
        "qBadge": "Q.160",
        "title": "Context Managers — Advanced",
        "hindiDescription": "__enter__ aur __exit__ dunder methods.",
        "difficulty": "Hard",
        "referenceCode": "# Context Managers\\ndef solve():\\n    # Example implementation for Context Managers\\n    print(\"Mastering Context Managers\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Context Managers",
            "description": "__enter__ aur __exit__ dunder methods. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Context Managers\\ndef solve():\\n    # Example implementation for Context Managers\\n    print(\"Mastering Context Managers\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Context",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Context Managers",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Context Managers",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Context Managers. __enter__ aur __exit__ dunder methods. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Context Managers\\ndef solve():\\n    # Example implementation for Context Managers\\n    print(\"Mastering Context Managers\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Context Managers",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Context Managers",
          "description": "Context Managers par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Context Managers\n",
          "solutionCode": "print(\"Mastering Context Managers\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Context Managers",
          "hints": [
            "print(\"Mastering Context Managers\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Context Managers"
            }
          ]
        }
      },
      {
        "id": "py_14_advanced_12",
        "sectionId": "14_advanced",
        "topicNumber": 12,
        "globalIndex": 161,
        "qBadge": "Q.161",
        "title": "Advanced Python Practice",
        "hindiDescription": "asyncio module se asynchronous non-blocking code.",
        "difficulty": "Hard",
        "referenceCode": "# Async and Await Basics\\ndef solve():\\n    # Example implementation for Async and Await Basics\\n    print(\"Mastering Async and Await Basics\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Async and Await Basics",
            "description": "asyncio module se asynchronous non-blocking code. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Async and Await Basics\\ndef solve():\\n    # Example implementation for Async and Await Basics\\n    print(\"Mastering Async and Await Basics\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Async",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Async and Await Basics",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Async and Await Basics",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Async and Await Basics. asyncio module se asynchronous non-blocking code. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Async and Await Basics\\ndef solve():\\n    # Example implementation for Async and Await Basics\\n    print(\"Mastering Async and Await Basics\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Async and Await Basics",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Async and Await Basics",
          "description": "Async and Await Basics par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Async and Await Basics\n",
          "solutionCode": "print(\"Mastering Async and Await Basics\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Async and Await Basics",
          "hints": [
            "print(\"Mastering Async and Await Basics\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Async and Await Basics"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "15_dsa",
    "sectionNumber": "15",
    "title": "Data Structures & Algorithms",
    "topics": [
      {
        "id": "py_15_dsa_01_intro",
        "sectionId": "15_dsa",
        "topicNumber": 1,
        "globalIndex": 162,
        "qBadge": "Q.162",
        "title": "Introduction to Data Structures and Algorithms",
        "subtitle": "Module 15 · Topic 1",
        "hindiDescription": "Introduction to Data Structures and Algorithms ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Organizing data for optimal computation",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Data Structures and Algorithms",
            "description": "Is lesson me hum Introduction to Data Structures and Algorithms ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Organizing data for optimal computation",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Data Structures and Algorithms."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Data Structures and Algorithms",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Data Structures and Algorithms seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Organizing data for optimal computation",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Data Structures and Algorithms ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Data Structures and Algorithms",
          "description": "Introduction to Data Structures and Algorithms ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Data Structures and Algorithms below\n",
          "solutionCode": "# Organizing data for optimal computation",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Data Structures and Algorithms ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_02_complexity",
        "sectionId": "15_dsa",
        "topicNumber": 2,
        "globalIndex": 163,
        "qBadge": "Q.163",
        "title": "Time and Space Complexity",
        "hindiDescription": "Algorithm execution time aur RAM usage analysis.",
        "difficulty": "Medium",
        "referenceCode": "# Time and Space Complexity\\ndef solve():\\n    # Example implementation for Time and Space Complexity\\n    print(\"Mastering Time and Space Complexity\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Time and Space Complexity",
            "description": "Algorithm execution time aur RAM usage analysis. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Time and Space Complexity\\ndef solve():\\n    # Example implementation for Time and Space Complexity\\n    print(\"Mastering Time and Space Complexity\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Time",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Time and Space Complexity",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Time and Space Complexity",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Time and Space Complexity. Algorithm execution time aur RAM usage analysis. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Time and Space Complexity\\ndef solve():\\n    # Example implementation for Time and Space Complexity\\n    print(\"Mastering Time and Space Complexity\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Time and Space Complexity",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Time and Space Complexity",
          "description": "Time and Space Complexity par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Time and Space Complexity\n",
          "solutionCode": "print(\"Mastering Time and Space Complexity\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Time and Space Complexity",
          "hints": [
            "print(\"Mastering Time and Space Complexity\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Time and Space Complexity"
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_03_big_o",
        "sectionId": "15_dsa",
        "topicNumber": 3,
        "globalIndex": 164,
        "qBadge": "Q.164",
        "title": "Big O Notation",
        "hindiDescription": "O(1), O(log N), O(N), O(N log N), O(N^2) complexity.",
        "difficulty": "Medium",
        "referenceCode": "# Big O Notation\\ndef solve():\\n    # Example implementation for Big O Notation\\n    print(\"Mastering Big O Notation\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Big O Notation",
            "description": "O(1), O(log N), O(N), O(N log N), O(N^2) complexity. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Big O Notation\\ndef solve():\\n    # Example implementation for Big O Notation\\n    print(\"Mastering Big O Notation\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Big",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Big O Notation",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Big O Notation",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Big O Notation. O(1), O(log N), O(N), O(N log N), O(N^2) complexity. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Big O Notation\\ndef solve():\\n    # Example implementation for Big O Notation\\n    print(\"Mastering Big O Notation\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Big O Notation",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Big O Notation",
          "description": "Big O Notation par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Big O Notation\n",
          "solutionCode": "print(\"Mastering Big O Notation\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Big O Notation",
          "hints": [
            "print(\"Mastering Big O Notation\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Big O Notation"
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_04_arrays",
        "sectionId": "15_dsa",
        "topicNumber": 4,
        "globalIndex": 165,
        "qBadge": "Q.165",
        "title": "Arrays and Lists",
        "subtitle": "Module 15 · Topic 4",
        "hindiDescription": "Arrays and Lists ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "arr = [10, 20, 30]\nprint('Access O(1):', arr[1])",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Arrays and Lists",
            "description": "Is lesson me hum Arrays and Lists ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "arr = [10, 20, 30]",
            "concepts": [
              {
                "token": "Arrays",
                "explanation": "Core concept for Arrays and Lists."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Arrays and Lists",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Arrays and Lists seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "arr = [10, 20, 30]\nprint('Access O(1):', arr[1])",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Arrays and Lists ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Arrays and Lists",
          "description": "Arrays and Lists ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Arrays and Lists below\n",
          "solutionCode": "arr = [10, 20, 30]\nprint('Access O(1):', arr[1])",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Arrays and Lists ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_05_linear_search",
        "sectionId": "15_dsa",
        "topicNumber": 5,
        "globalIndex": 166,
        "qBadge": "Q.166",
        "title": "Linear Search",
        "hindiDescription": "O(N) sequential element scanning.",
        "difficulty": "Easy",
        "referenceCode": "# Linear Search\\ndef solve():\\n    # Example implementation for Linear Search\\n    print(\"Mastering Linear Search\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Linear Search",
            "description": "O(N) sequential element scanning. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Linear Search\\ndef solve():\\n    # Example implementation for Linear Search\\n    print(\"Mastering Linear Search\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Linear",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Linear Search",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Linear Search",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Linear Search. O(N) sequential element scanning. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Linear Search\\ndef solve():\\n    # Example implementation for Linear Search\\n    print(\"Mastering Linear Search\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Linear Search",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Linear Search",
          "description": "Linear Search par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Linear Search\n",
          "solutionCode": "print(\"Mastering Linear Search\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Linear Search",
          "hints": [
            "print(\"Mastering Linear Search\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Linear Search"
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_06_binary_search",
        "sectionId": "15_dsa",
        "topicNumber": 6,
        "globalIndex": 167,
        "qBadge": "Q.167",
        "title": "Binary Search",
        "hindiDescription": "Sorted arrays me O(log N) divide-and-conquer search.",
        "difficulty": "Medium",
        "referenceCode": "# Binary Search\\ndef solve():\\n    # Example implementation for Binary Search\\n    print(\"Mastering Binary Search\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Binary Search",
            "description": "Sorted arrays me O(log N) divide-and-conquer search. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Binary Search\\ndef solve():\\n    # Example implementation for Binary Search\\n    print(\"Mastering Binary Search\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Binary",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Binary Search",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Binary Search",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Binary Search. Sorted arrays me O(log N) divide-and-conquer search. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Binary Search\\ndef solve():\\n    # Example implementation for Binary Search\\n    print(\"Mastering Binary Search\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Binary Search",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Binary Search",
          "description": "Binary Search par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Binary Search\n",
          "solutionCode": "print(\"Mastering Binary Search\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Binary Search",
          "hints": [
            "print(\"Mastering Binary Search\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Binary Search"
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_07_bubble_selection",
        "sectionId": "15_dsa",
        "topicNumber": 7,
        "globalIndex": 168,
        "qBadge": "Q.168",
        "title": "Bubble Sort and Selection Sort",
        "subtitle": "Module 15 · Topic 7",
        "hindiDescription": "Bubble Sort and Selection Sort ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "def bubble_sort(a):\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if a[j] > a[j+1]: a[j], a[j+1] = a[j+1], a[j]\n    return a\nprint(bubble_sort([5, 1, 4, 2]))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Bubble Sort and Selection Sort",
            "description": "Is lesson me hum Bubble Sort and Selection Sort ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "def bubble_sort(a):",
            "concepts": [
              {
                "token": "Bubble",
                "explanation": "Core concept for Bubble Sort and Selection Sort."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Bubble Sort and Selection Sort",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Bubble Sort and Selection Sort seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "def bubble_sort(a):\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if a[j] > a[j+1]: a[j], a[j+1] = a[j+1], a[j]\n    return a\nprint(bubble_sort([5, 1, 4, 2]))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Bubble Sort and Selection Sort ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Bubble Sort and Selection Sort",
          "description": "Bubble Sort and Selection Sort ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Bubble Sort and Selection Sort below\n",
          "solutionCode": "def bubble_sort(a):\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if a[j] > a[j+1]: a[j], a[j+1] = a[j+1], a[j]\n    return a\nprint(bubble_sort([5, 1, 4, 2]))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Bubble Sort and Selection Sort ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_08_insertion_merge",
        "sectionId": "15_dsa",
        "topicNumber": 8,
        "globalIndex": 169,
        "qBadge": "Q.169",
        "title": "Insertion Sort and Merge Sort",
        "subtitle": "Module 15 · Topic 8",
        "hindiDescription": "Insertion Sort and Merge Sort ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Divide and conquer sorting algorithm",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Insertion Sort and Merge Sort",
            "description": "Is lesson me hum Insertion Sort and Merge Sort ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Divide and conquer sorting algorithm",
            "concepts": [
              {
                "token": "Insertion",
                "explanation": "Core concept for Insertion Sort and Merge Sort."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Insertion Sort and Merge Sort",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Insertion Sort and Merge Sort seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Divide and conquer sorting algorithm",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Insertion Sort and Merge Sort ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Insertion Sort and Merge Sort",
          "description": "Insertion Sort and Merge Sort ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Insertion Sort and Merge Sort below\n",
          "solutionCode": "# Divide and conquer sorting algorithm",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Insertion Sort and Merge Sort ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_09_stack",
        "sectionId": "15_dsa",
        "topicNumber": 9,
        "globalIndex": 170,
        "qBadge": "Q.170",
        "title": "Stack",
        "subtitle": "Module 15 · Topic 9",
        "hindiDescription": "Stack ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "stack = []\nstack.append(10)\nstack.append(20)\nprint('LIFO Pop:', stack.pop())",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Stack",
            "description": "Is lesson me hum Stack ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "stack = []",
            "concepts": [
              {
                "token": "Stack",
                "explanation": "Core concept for Stack."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Stack",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Stack seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "stack = []\nstack.append(10)\nstack.append(20)\nprint('LIFO Pop:', stack.pop())",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Stack ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Stack",
          "description": "Stack ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Stack below\n",
          "solutionCode": "stack = []\nstack.append(10)\nstack.append(20)\nprint('LIFO Pop:', stack.pop())",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Stack ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_10_queue",
        "sectionId": "15_dsa",
        "topicNumber": 10,
        "globalIndex": 171,
        "qBadge": "Q.171",
        "title": "Queue and Deque",
        "subtitle": "Module 15 · Topic 10",
        "hindiDescription": "Queue and Deque ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "from collections import deque\nq = deque([1, 2, 3])\nq.append(4)\nprint('FIFO Popleft:', q.popleft())",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Queue and Deque",
            "description": "Is lesson me hum Queue and Deque ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "from collections import deque",
            "concepts": [
              {
                "token": "Queue",
                "explanation": "Core concept for Queue and Deque."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Queue and Deque",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Queue and Deque seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "from collections import deque\nq = deque([1, 2, 3])\nq.append(4)\nprint('FIFO Popleft:', q.popleft())",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Queue and Deque ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Queue and Deque",
          "description": "Queue and Deque ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Queue and Deque below\n",
          "solutionCode": "from collections import deque\nq = deque([1, 2, 3])\nq.append(4)\nprint('FIFO Popleft:', q.popleft())",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Queue and Deque ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_11_linked_list",
        "sectionId": "15_dsa",
        "topicNumber": 11,
        "globalIndex": 172,
        "qBadge": "Q.172",
        "title": "Linked Lists",
        "subtitle": "Module 15 · Topic 11",
        "hindiDescription": "Linked Lists ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\nhead = Node(1)\nhead.next = Node(2)\nprint(head.val, '->', head.next.val)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Linked Lists",
            "description": "Is lesson me hum Linked Lists ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "class Node:",
            "concepts": [
              {
                "token": "Linked",
                "explanation": "Core concept for Linked Lists."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Linked Lists",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Linked Lists seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\nhead = Node(1)\nhead.next = Node(2)\nprint(head.val, '->', head.next.val)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Linked Lists ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Linked Lists",
          "description": "Linked Lists ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Linked Lists below\n",
          "solutionCode": "class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\nhead = Node(1)\nhead.next = Node(2)\nprint(head.val, '->', head.next.val)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Linked Lists ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_12_hashing",
        "sectionId": "15_dsa",
        "topicNumber": 12,
        "globalIndex": 173,
        "qBadge": "Q.173",
        "title": "Hashing and Hash Maps",
        "subtitle": "Module 15 · Topic 12",
        "hindiDescription": "Hashing and Hash Maps ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "hash_map = {'key': 'val'}\nprint('O(1) lookup:', hash_map.get('key'))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Hashing and Hash Maps",
            "description": "Is lesson me hum Hashing and Hash Maps ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "hash_map = {'key': 'val'}",
            "concepts": [
              {
                "token": "Hashing",
                "explanation": "Core concept for Hashing and Hash Maps."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Hashing and Hash Maps",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Hashing and Hash Maps seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "hash_map = {'key': 'val'}\nprint('O(1) lookup:', hash_map.get('key'))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Hashing and Hash Maps ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Hashing and Hash Maps",
          "description": "Hashing and Hash Maps ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Hashing and Hash Maps below\n",
          "solutionCode": "hash_map = {'key': 'val'}\nprint('O(1) lookup:', hash_map.get('key'))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Hashing and Hash Maps ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_13_recursion",
        "sectionId": "15_dsa",
        "topicNumber": 13,
        "globalIndex": 174,
        "qBadge": "Q.174",
        "title": "Recursion and Backtracking",
        "subtitle": "Module 15 · Topic 13",
        "hindiDescription": "Recursion and Backtracking ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "def sum_n(n):\n    return n if n <= 1 else n + sum_n(n - 1)\nprint(sum_n(5))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Recursion and Backtracking",
            "description": "Is lesson me hum Recursion and Backtracking ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "def sum_n(n):",
            "concepts": [
              {
                "token": "Recursion",
                "explanation": "Core concept for Recursion and Backtracking."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Recursion and Backtracking",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Recursion and Backtracking seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "def sum_n(n):\n    return n if n <= 1 else n + sum_n(n - 1)\nprint(sum_n(5))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Recursion and Backtracking ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Recursion and Backtracking",
          "description": "Recursion and Backtracking ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Recursion and Backtracking below\n",
          "solutionCode": "def sum_n(n):\n    return n if n <= 1 else n + sum_n(n - 1)\nprint(sum_n(5))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Recursion and Backtracking ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_15_dsa_14_practice",
        "sectionId": "15_dsa",
        "topicNumber": 14,
        "globalIndex": 175,
        "qBadge": "Q.175",
        "title": "DSA Practice Challenges",
        "subtitle": "Module 15 · Topic 14",
        "hindiDescription": "DSA Practice Challenges ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# LeetCode and HackerRank style practice",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to DSA Practice Challenges",
            "description": "Is lesson me hum DSA Practice Challenges ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# LeetCode and HackerRank style practice",
            "concepts": [
              {
                "token": "DSA",
                "explanation": "Core concept for DSA Practice Challenges."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "DSA Practice Challenges",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum DSA Practice Challenges seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# LeetCode and HackerRank style practice",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne DSA Practice Challenges ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: DSA Practice Challenges",
          "description": "DSA Practice Challenges ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for DSA Practice Challenges below\n",
          "solutionCode": "# LeetCode and HackerRank style practice",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "DSA Practice Challenges ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "16_advanced_dsa",
    "sectionNumber": "16",
    "title": "Advanced DSA & Problem Solving",
    "topics": [
      {
        "id": "py_16_adv_dsa_01_trees",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 1,
        "globalIndex": 176,
        "qBadge": "Q.176",
        "title": "Trees and Binary Trees",
        "subtitle": "Module 16 · Topic 1",
        "hindiDescription": "Trees and Binary Trees ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = TreeNode(10)\nprint(root.val)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Trees and Binary Trees",
            "description": "Is lesson me hum Trees and Binary Trees ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "class TreeNode:",
            "concepts": [
              {
                "token": "Trees",
                "explanation": "Core concept for Trees and Binary Trees."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Trees and Binary Trees",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Trees and Binary Trees seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = TreeNode(10)\nprint(root.val)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Trees and Binary Trees ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Trees and Binary Trees",
          "description": "Trees and Binary Trees ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Trees and Binary Trees below\n",
          "solutionCode": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = TreeNode(10)\nprint(root.val)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Trees and Binary Trees ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_02_bst",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 2,
        "globalIndex": 177,
        "qBadge": "Q.177",
        "title": "Binary Search Trees",
        "hindiDescription": "Left < Root < Right BST property aur search.",
        "difficulty": "Hard",
        "referenceCode": "# Binary Search Trees\\ndef solve():\\n    # Example implementation for Binary Search Trees\\n    print(\"Mastering Binary Search Trees\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Binary Search Trees",
            "description": "Left < Root < Right BST property aur search. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Binary Search Trees\\ndef solve():\\n    # Example implementation for Binary Search Trees\\n    print(\"Mastering Binary Search Trees\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Binary",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Binary Search Trees",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Binary Search Trees",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Binary Search Trees. Left < Root < Right BST property aur search. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Binary Search Trees\\ndef solve():\\n    # Example implementation for Binary Search Trees\\n    print(\"Mastering Binary Search Trees\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Binary Search Trees",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Binary Search Trees",
          "description": "Binary Search Trees par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Binary Search Trees\n",
          "solutionCode": "print(\"Mastering Binary Search Trees\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Binary Search Trees",
          "hints": [
            "print(\"Mastering Binary Search Trees\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Binary Search Trees"
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_03_traversal",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 3,
        "globalIndex": 178,
        "qBadge": "Q.178",
        "title": "Tree Traversal — DFS and BFS",
        "subtitle": "Module 16 · Topic 3",
        "hindiDescription": "Tree Traversal — DFS and BFS ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Preorder, Inorder, Postorder, Level-order",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Tree Traversal — DFS and BFS",
            "description": "Is lesson me hum Tree Traversal — DFS and BFS ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Preorder, Inorder, Postorder, Level-order",
            "concepts": [
              {
                "token": "Tree",
                "explanation": "Core concept for Tree Traversal — DFS and BFS."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Tree Traversal — DFS and BFS",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Tree Traversal — DFS and BFS seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Preorder, Inorder, Postorder, Level-order",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Tree Traversal — DFS and BFS ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Tree Traversal — DFS and BFS",
          "description": "Tree Traversal — DFS and BFS ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Tree Traversal — DFS and BFS below\n",
          "solutionCode": "# Preorder, Inorder, Postorder, Level-order",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Tree Traversal — DFS and BFS ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_04_heaps",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 4,
        "globalIndex": 179,
        "qBadge": "Q.179",
        "title": "Heaps and Priority Queues",
        "hindiDescription": "Min-Heap aur Max-Heap structure.",
        "difficulty": "Hard",
        "referenceCode": "# Heaps and Priority Queues\\ndef solve():\\n    # Example implementation for Heaps and Priority Queues\\n    print(\"Mastering Heaps and Priority Queues\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Heaps and Priority Queues",
            "description": "Min-Heap aur Max-Heap structure. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Heaps and Priority Queues\\ndef solve():\\n    # Example implementation for Heaps and Priority Queues\\n    print(\"Mastering Heaps and Priority Queues\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Heaps",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Heaps and Priority Queues",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Heaps and Priority Queues",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Heaps and Priority Queues. Min-Heap aur Max-Heap structure. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Heaps and Priority Queues\\ndef solve():\\n    # Example implementation for Heaps and Priority Queues\\n    print(\"Mastering Heaps and Priority Queues\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Heaps and Priority Queues",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Heaps and Priority Queues",
          "description": "Heaps and Priority Queues par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Heaps and Priority Queues\n",
          "solutionCode": "print(\"Mastering Heaps and Priority Queues\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Heaps and Priority Queues",
          "hints": [
            "print(\"Mastering Heaps and Priority Queues\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Heaps and Priority Queues"
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_05_graphs",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 5,
        "globalIndex": 180,
        "qBadge": "Q.180",
        "title": "Graphs and Graph Representation",
        "subtitle": "Module 16 · Topic 5",
        "hindiDescription": "Graphs and Graph Representation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "graph = {'A': ['B', 'C'], 'B': ['A'], 'C': ['A']}\nprint('Neighbors of A:', graph['A'])",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Graphs and Graph Representation",
            "description": "Is lesson me hum Graphs and Graph Representation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "graph = {'A': ['B', 'C'], 'B': ['A'], 'C': ['A']}",
            "concepts": [
              {
                "token": "Graphs",
                "explanation": "Core concept for Graphs and Graph Representation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Graphs and Graph Representation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Graphs and Graph Representation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "graph = {'A': ['B', 'C'], 'B': ['A'], 'C': ['A']}\nprint('Neighbors of A:', graph['A'])",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Graphs and Graph Representation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Graphs and Graph Representation",
          "description": "Graphs and Graph Representation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Graphs and Graph Representation below\n",
          "solutionCode": "graph = {'A': ['B', 'C'], 'B': ['A'], 'C': ['A']}\nprint('Neighbors of A:', graph['A'])",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Graphs and Graph Representation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_06_graph_traversal",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 6,
        "globalIndex": 181,
        "qBadge": "Q.181",
        "title": "Graph Traversal — BFS and DFS",
        "subtitle": "Module 16 · Topic 6",
        "hindiDescription": "Graph Traversal — BFS and DFS ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Visiting all reachable vertices",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Graph Traversal — BFS and DFS",
            "description": "Is lesson me hum Graph Traversal — BFS and DFS ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Visiting all reachable vertices",
            "concepts": [
              {
                "token": "Graph",
                "explanation": "Core concept for Graph Traversal — BFS and DFS."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Graph Traversal — BFS and DFS",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Graph Traversal — BFS and DFS seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Visiting all reachable vertices",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Graph Traversal — BFS and DFS ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Graph Traversal — BFS and DFS",
          "description": "Graph Traversal — BFS and DFS ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Graph Traversal — BFS and DFS below\n",
          "solutionCode": "# Visiting all reachable vertices",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Graph Traversal — BFS and DFS ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_07_greedy",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 7,
        "globalIndex": 182,
        "qBadge": "Q.182",
        "title": "Greedy Algorithms",
        "hindiDescription": "Local optimum decision se global solution banana.",
        "difficulty": "Hard",
        "referenceCode": "# Greedy Algorithms\\ndef solve():\\n    # Example implementation for Greedy Algorithms\\n    print(\"Mastering Greedy Algorithms\")\\n\\nsolve()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Concept & Logic: Greedy Algorithms",
            "description": "Local optimum decision se global solution banana. Yahaan hum iska step-by-step logic aur computational flow samjhenge.",
            "codeSnippet": "# Greedy Algorithms\\ndef solve():\\n    # Example implementation for Greedy Algorithms\\n    print(\"Mastering Greedy Algorithms\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Greedy",
                "explanation": "Core computational structure."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Greedy Algorithms",
            "pipelineFlow": [
              {
                "title": "Input",
                "detail": "Greedy Algorithms",
                "type": "input"
              },
              {
                "title": "Engine",
                "detail": "Evaluate",
                "type": "process"
              },
              {
                "title": "Output",
                "detail": "Console",
                "type": "output"
              }
            ],
            "teacherNarration": "Is lesson me hum seekhenge Greedy Algorithms. Local optimum decision se global solution banana. Har step ko dhyan se dekhiye aur samajhiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Output Execution & Verification",
            "description": "Interpreter line-by-line execute karke standard output produce karta hai.",
            "codeSnippet": "# Greedy Algorithms\\ndef solve():\\n    # Example implementation for Greedy Algorithms\\n    print(\"Mastering Greedy Algorithms\")\\n\\nsolve()",
            "concepts": [
              {
                "token": "Execution",
                "explanation": "Statement run ho kar standard console stream par result likhta hai."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Mastering Greedy Algorithms",
            "pipelineFlow": [
              {
                "title": "Process",
                "detail": "Running",
                "type": "process"
              },
              {
                "title": "Screen",
                "detail": "Success",
                "type": "output"
              }
            ],
            "teacherNarration": "Bahut badhiya! Ab aap Coding Practice tab par switch karke is problem ko khud implement kijiye."
          }
        ],
        "practice": {
          "title": "Practice: Greedy Algorithms",
          "description": "Greedy Algorithms par based problem solve kijiye aur exact expected output print kijiye.",
          "starterCode": "# Write your code for: Greedy Algorithms\n",
          "solutionCode": "print(\"Mastering Greedy Algorithms\")",
          "sampleInput": "(No input)",
          "sampleOutput": "Mastering Greedy Algorithms",
          "hints": [
            "print(\"Mastering Greedy Algorithms\") likhkar verify kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": "Mastering Greedy Algorithms"
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_08_dp",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 8,
        "globalIndex": 183,
        "qBadge": "Q.183",
        "title": "Dynamic Programming",
        "subtitle": "Module 16 · Topic 8",
        "hindiDescription": "Dynamic Programming ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "def fib(n, memo={}):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\nprint(fib(10))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Dynamic Programming",
            "description": "Is lesson me hum Dynamic Programming ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "def fib(n, memo={}):",
            "concepts": [
              {
                "token": "Dynamic",
                "explanation": "Core concept for Dynamic Programming."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Dynamic Programming",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Dynamic Programming seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "def fib(n, memo={}):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\nprint(fib(10))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Dynamic Programming ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Dynamic Programming",
          "description": "Dynamic Programming ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Dynamic Programming below\n",
          "solutionCode": "def fib(n, memo={}):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\nprint(fib(10))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Dynamic Programming ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_09_two_pointers",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 9,
        "globalIndex": 184,
        "qBadge": "Q.184",
        "title": "Two Pointers and Sliding Window",
        "subtitle": "Module 16 · Topic 9",
        "hindiDescription": "Two Pointers and Sliding Window ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "def max_sum_subarray(arr, k):\n    w_sum = sum(arr[:k])\n    m_sum = w_sum\n    for i in range(len(arr) - k):\n        w_sum = w_sum - arr[i] + arr[i+k]\n        m_sum = max(m_sum, w_sum)\n    return m_sum\nprint(max_sum_subarray([2, 1, 5, 1, 3, 2], 3))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Two Pointers and Sliding Window",
            "description": "Is lesson me hum Two Pointers and Sliding Window ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "def max_sum_subarray(arr, k):",
            "concepts": [
              {
                "token": "Two",
                "explanation": "Core concept for Two Pointers and Sliding Window."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Two Pointers and Sliding Window",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Two Pointers and Sliding Window seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "def max_sum_subarray(arr, k):\n    w_sum = sum(arr[:k])\n    m_sum = w_sum\n    for i in range(len(arr) - k):\n        w_sum = w_sum - arr[i] + arr[i+k]\n        m_sum = max(m_sum, w_sum)\n    return m_sum\nprint(max_sum_subarray([2, 1, 5, 1, 3, 2], 3))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Two Pointers and Sliding Window ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Two Pointers and Sliding Window",
          "description": "Two Pointers and Sliding Window ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Two Pointers and Sliding Window below\n",
          "solutionCode": "def max_sum_subarray(arr, k):\n    w_sum = sum(arr[:k])\n    m_sum = w_sum\n    for i in range(len(arr) - k):\n        w_sum = w_sum - arr[i] + arr[i+k]\n        m_sum = max(m_sum, w_sum)\n    return m_sum\nprint(max_sum_subarray([2, 1, 5, 1, 3, 2], 3))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Two Pointers and Sliding Window ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_16_adv_dsa_10_challenges",
        "sectionId": "16_advanced_dsa",
        "topicNumber": 10,
        "globalIndex": 185,
        "qBadge": "Q.185",
        "title": "Advanced DSA Challenges",
        "subtitle": "Module 16 · Topic 10",
        "hindiDescription": "Advanced DSA Challenges ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# FAANG-level problem challenges",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Advanced DSA Challenges",
            "description": "Is lesson me hum Advanced DSA Challenges ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# FAANG-level problem challenges",
            "concepts": [
              {
                "token": "Advanced",
                "explanation": "Core concept for Advanced DSA Challenges."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Advanced DSA Challenges",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Advanced DSA Challenges seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# FAANG-level problem challenges",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Advanced DSA Challenges ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Advanced DSA Challenges",
          "description": "Advanced DSA Challenges ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Advanced DSA Challenges below\n",
          "solutionCode": "# FAANG-level problem challenges",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Advanced DSA Challenges ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "17_automation",
    "sectionNumber": "17",
    "title": "Python Automation & APIs",
    "topics": [
      {
        "id": "py_17_automation_01_intro",
        "sectionId": "17_automation",
        "topicNumber": 1,
        "globalIndex": 186,
        "qBadge": "Q.186",
        "title": "Introduction to Python Automation",
        "subtitle": "Module 17 · Topic 1",
        "hindiDescription": "Introduction to Python Automation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Scripting workflows to eliminate manual work\nprint('Automating task...')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Python Automation",
            "description": "Is lesson me hum Introduction to Python Automation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Scripting workflows to eliminate manual work",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Python Automation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Python Automation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Python Automation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Scripting workflows to eliminate manual work\nprint('Automating task...')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Python Automation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Python Automation",
          "description": "Introduction to Python Automation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Python Automation below\n",
          "solutionCode": "# Scripting workflows to eliminate manual work\nprint('Automating task...')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Python Automation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_02_os_pathlib",
        "sectionId": "17_automation",
        "topicNumber": 2,
        "globalIndex": 187,
        "qBadge": "Q.187",
        "title": "Working with os and pathlib",
        "subtitle": "Module 17 · Topic 2",
        "hindiDescription": "Working with os and pathlib ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "import os\nfrom pathlib import Path\nprint('Platform:', os.name)\nprint('CWD:', Path.cwd().name)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Working with os and pathlib",
            "description": "Is lesson me hum Working with os and pathlib ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import os",
            "concepts": [
              {
                "token": "Working",
                "explanation": "Core concept for Working with os and pathlib."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Working with os and pathlib",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Working with os and pathlib seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import os\nfrom pathlib import Path\nprint('Platform:', os.name)\nprint('CWD:', Path.cwd().name)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Working with os and pathlib ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Working with os and pathlib",
          "description": "Working with os and pathlib ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Working with os and pathlib below\n",
          "solutionCode": "import os\nfrom pathlib import Path\nprint('Platform:', os.name)\nprint('CWD:', Path.cwd().name)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Working with os and pathlib ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_03_file_folder",
        "sectionId": "17_automation",
        "topicNumber": 3,
        "globalIndex": 188,
        "qBadge": "Q.188",
        "title": "File and Folder Automation",
        "subtitle": "Module 17 · Topic 3",
        "hindiDescription": "File and Folder Automation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "import shutil\n# Batch rename and move files into organized directories",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to File and Folder Automation",
            "description": "Is lesson me hum File and Folder Automation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import shutil",
            "concepts": [
              {
                "token": "File",
                "explanation": "Core concept for File and Folder Automation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "File and Folder Automation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum File and Folder Automation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import shutil\n# Batch rename and move files into organized directories",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne File and Folder Automation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: File and Folder Automation",
          "description": "File and Folder Automation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for File and Folder Automation below\n",
          "solutionCode": "import shutil\n# Batch rename and move files into organized directories",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "File and Folder Automation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_04_datetime",
        "sectionId": "17_automation",
        "topicNumber": 4,
        "globalIndex": 189,
        "qBadge": "Q.189",
        "title": "Date and Time Automation",
        "subtitle": "Module 17 · Topic 4",
        "hindiDescription": "Date and Time Automation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "from datetime import datetime, timedelta\ntomorrow = datetime.now() + timedelta(days=1)\nprint('Tomorrow:', tomorrow.strftime('%Y-%m-%d'))",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Date and Time Automation",
            "description": "Is lesson me hum Date and Time Automation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "from datetime import datetime, timedelta",
            "concepts": [
              {
                "token": "Date",
                "explanation": "Core concept for Date and Time Automation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Date and Time Automation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Date and Time Automation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "from datetime import datetime, timedelta\ntomorrow = datetime.now() + timedelta(days=1)\nprint('Tomorrow:', tomorrow.strftime('%Y-%m-%d'))",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Date and Time Automation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Date and Time Automation",
          "description": "Date and Time Automation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Date and Time Automation below\n",
          "solutionCode": "from datetime import datetime, timedelta\ntomorrow = datetime.now() + timedelta(days=1)\nprint('Tomorrow:', tomorrow.strftime('%Y-%m-%d'))",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Date and Time Automation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_05_http",
        "sectionId": "17_automation",
        "topicNumber": 5,
        "globalIndex": 190,
        "qBadge": "Q.190",
        "title": "Working with HTTP Requests",
        "subtitle": "Module 17 · Topic 5",
        "hindiDescription": "Working with HTTP Requests ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "import urllib.request\nprint('HTTP requests enable web interaction')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Working with HTTP Requests",
            "description": "Is lesson me hum Working with HTTP Requests ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import urllib.request",
            "concepts": [
              {
                "token": "Working",
                "explanation": "Core concept for Working with HTTP Requests."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Working with HTTP Requests",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Working with HTTP Requests seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import urllib.request\nprint('HTTP requests enable web interaction')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Working with HTTP Requests ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Working with HTTP Requests",
          "description": "Working with HTTP Requests ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Working with HTTP Requests below\n",
          "solutionCode": "import urllib.request\nprint('HTTP requests enable web interaction')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Working with HTTP Requests ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_06_rest_json",
        "sectionId": "17_automation",
        "topicNumber": 6,
        "globalIndex": 191,
        "qBadge": "Q.191",
        "title": "REST APIs and JSON Responses",
        "subtitle": "Module 17 · Topic 6",
        "hindiDescription": "REST APIs and JSON Responses ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "import json\nresp = json.loads('{\"status\": \"ok\", \"code\": 200}')\nprint('API status:', resp['status'])",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to REST APIs and JSON Responses",
            "description": "Is lesson me hum REST APIs and JSON Responses ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import json",
            "concepts": [
              {
                "token": "REST",
                "explanation": "Core concept for REST APIs and JSON Responses."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "REST APIs and JSON Responses",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum REST APIs and JSON Responses seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import json\nresp = json.loads('{\"status\": \"ok\", \"code\": 200}')\nprint('API status:', resp['status'])",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne REST APIs and JSON Responses ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: REST APIs and JSON Responses",
          "description": "REST APIs and JSON Responses ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for REST APIs and JSON Responses below\n",
          "solutionCode": "import json\nresp = json.loads('{\"status\": \"ok\", \"code\": 200}')\nprint('API status:', resp['status'])",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "REST APIs and JSON Responses ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_07_api_auth",
        "sectionId": "17_automation",
        "topicNumber": 7,
        "globalIndex": 192,
        "qBadge": "Q.192",
        "title": "API Authentication Basics",
        "subtitle": "Module 17 · Topic 7",
        "hindiDescription": "API Authentication Basics ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "headers = {'Authorization': 'Bearer YOUR_TOKEN'}\nprint('Authenticated Request Header Prepared')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to API Authentication Basics",
            "description": "Is lesson me hum API Authentication Basics ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "headers = {'Authorization': 'Bearer YOUR_TOKEN'}",
            "concepts": [
              {
                "token": "API",
                "explanation": "Core concept for API Authentication Basics."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "API Authentication Basics",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum API Authentication Basics seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "headers = {'Authorization': 'Bearer YOUR_TOKEN'}\nprint('Authenticated Request Header Prepared')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne API Authentication Basics ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: API Authentication Basics",
          "description": "API Authentication Basics ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for API Authentication Basics below\n",
          "solutionCode": "headers = {'Authorization': 'Bearer YOUR_TOKEN'}\nprint('Authenticated Request Header Prepared')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "API Authentication Basics ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_08_bs4",
        "sectionId": "17_automation",
        "topicNumber": 8,
        "globalIndex": 193,
        "qBadge": "Q.193",
        "title": "Web Scraping with BeautifulSoup",
        "subtitle": "Module 17 · Topic 8",
        "hindiDescription": "Web Scraping with BeautifulSoup ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "html = '<div class=\"price\">$99</div>'\n# Extract prices and text from HTML tags",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Web Scraping with BeautifulSoup",
            "description": "Is lesson me hum Web Scraping with BeautifulSoup ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "html = '<div class=\"price\">$99</div>'",
            "concepts": [
              {
                "token": "Web",
                "explanation": "Core concept for Web Scraping with BeautifulSoup."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Web Scraping with BeautifulSoup",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Web Scraping with BeautifulSoup seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "html = '<div class=\"price\">$99</div>'\n# Extract prices and text from HTML tags",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Web Scraping with BeautifulSoup ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Web Scraping with BeautifulSoup",
          "description": "Web Scraping with BeautifulSoup ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Web Scraping with BeautifulSoup below\n",
          "solutionCode": "html = '<div class=\"price\">$99</div>'\n# Extract prices and text from HTML tags",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Web Scraping with BeautifulSoup ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_09_browser",
        "sectionId": "17_automation",
        "topicNumber": 9,
        "globalIndex": 194,
        "qBadge": "Q.194",
        "title": "Browser Automation Basics",
        "subtitle": "Module 17 · Topic 9",
        "hindiDescription": "Browser Automation Basics ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Headless automation concepts and test runners",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Browser Automation Basics",
            "description": "Is lesson me hum Browser Automation Basics ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Headless automation concepts and test runners",
            "concepts": [
              {
                "token": "Browser",
                "explanation": "Core concept for Browser Automation Basics."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Browser Automation Basics",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Browser Automation Basics seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Headless automation concepts and test runners",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Browser Automation Basics ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Browser Automation Basics",
          "description": "Browser Automation Basics ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Browser Automation Basics below\n",
          "solutionCode": "# Headless automation concepts and test runners",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Browser Automation Basics ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_10_email",
        "sectionId": "17_automation",
        "topicNumber": 10,
        "globalIndex": 195,
        "qBadge": "Q.195",
        "title": "Email and Notification Automation",
        "subtitle": "Module 17 · Topic 10",
        "hindiDescription": "Email and Notification Automation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Triggering automated alert emails via SMTP",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Email and Notification Automation",
            "description": "Is lesson me hum Email and Notification Automation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Triggering automated alert emails via SMTP",
            "concepts": [
              {
                "token": "Email",
                "explanation": "Core concept for Email and Notification Automation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Email and Notification Automation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Email and Notification Automation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Triggering automated alert emails via SMTP",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Email and Notification Automation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Email and Notification Automation",
          "description": "Email and Notification Automation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Email and Notification Automation below\n",
          "solutionCode": "# Triggering automated alert emails via SMTP",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Email and Notification Automation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_11_schedule",
        "sectionId": "17_automation",
        "topicNumber": 11,
        "globalIndex": 196,
        "qBadge": "Q.196",
        "title": "Scheduling Python Scripts",
        "subtitle": "Module 17 · Topic 11",
        "hindiDescription": "Scheduling Python Scripts ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Running recurring background scripts on timers",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Scheduling Python Scripts",
            "description": "Is lesson me hum Scheduling Python Scripts ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Running recurring background scripts on timers",
            "concepts": [
              {
                "token": "Scheduling",
                "explanation": "Core concept for Scheduling Python Scripts."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Scheduling Python Scripts",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Scheduling Python Scripts seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Running recurring background scripts on timers",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Scheduling Python Scripts ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Scheduling Python Scripts",
          "description": "Scheduling Python Scripts ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Scheduling Python Scripts below\n",
          "solutionCode": "# Running recurring background scripts on timers",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Scheduling Python Scripts ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_17_automation_12_projects",
        "sectionId": "17_automation",
        "topicNumber": 12,
        "globalIndex": 197,
        "qBadge": "Q.197",
        "title": "Automation Mini Projects",
        "subtitle": "Module 17 · Topic 12",
        "hindiDescription": "Automation Mini Projects ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Building a folder cleaner and price drop notifier",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Automation Mini Projects",
            "description": "Is lesson me hum Automation Mini Projects ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Building a folder cleaner and price drop notifier",
            "concepts": [
              {
                "token": "Automation",
                "explanation": "Core concept for Automation Mini Projects."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Automation Mini Projects",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Automation Mini Projects seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Building a folder cleaner and price drop notifier",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Automation Mini Projects ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Automation Mini Projects",
          "description": "Automation Mini Projects ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Automation Mini Projects below\n",
          "solutionCode": "# Building a folder cleaner and price drop notifier",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Automation Mini Projects ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "18_data_analysis",
    "sectionNumber": "18",
    "title": "Python for Data Analysis",
    "topics": [
      {
        "id": "py_18_data_01_intro",
        "sectionId": "18_data_analysis",
        "topicNumber": 1,
        "globalIndex": 198,
        "qBadge": "Q.198",
        "title": "Introduction to Data Analysis with Python",
        "subtitle": "Module 18 · Topic 1",
        "hindiDescription": "Introduction to Data Analysis with Python ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# The modern data science stack\nprint('Data Analysis Pipeline')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Data Analysis with Python",
            "description": "Is lesson me hum Introduction to Data Analysis with Python ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# The modern data science stack",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Data Analysis with Python."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Data Analysis with Python",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Data Analysis with Python seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# The modern data science stack\nprint('Data Analysis Pipeline')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Data Analysis with Python ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Data Analysis with Python",
          "description": "Introduction to Data Analysis with Python ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Data Analysis with Python below\n",
          "solutionCode": "# The modern data science stack\nprint('Data Analysis Pipeline')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Data Analysis with Python ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_02_numpy_arrays",
        "sectionId": "18_data_analysis",
        "topicNumber": 2,
        "globalIndex": 199,
        "qBadge": "Q.199",
        "title": "NumPy Arrays",
        "subtitle": "Module 18 · Topic 2",
        "hindiDescription": "NumPy Arrays ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Vectorized arrays offer 50x faster execution than lists",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to NumPy Arrays",
            "description": "Is lesson me hum NumPy Arrays ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Vectorized arrays offer 50x faster execution than lists",
            "concepts": [
              {
                "token": "NumPy",
                "explanation": "Core concept for NumPy Arrays."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "NumPy Arrays",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum NumPy Arrays seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Vectorized arrays offer 50x faster execution than lists",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne NumPy Arrays ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: NumPy Arrays",
          "description": "NumPy Arrays ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for NumPy Arrays below\n",
          "solutionCode": "# Vectorized arrays offer 50x faster execution than lists",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "NumPy Arrays ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_03_numpy_ops",
        "sectionId": "18_data_analysis",
        "topicNumber": 3,
        "globalIndex": 200,
        "qBadge": "Q.200",
        "title": "NumPy Operations and Broadcasting",
        "subtitle": "Module 18 · Topic 3",
        "hindiDescription": "NumPy Operations and Broadcasting ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Math operations broadcast across dimensions",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to NumPy Operations and Broadcasting",
            "description": "Is lesson me hum NumPy Operations and Broadcasting ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Math operations broadcast across dimensions",
            "concepts": [
              {
                "token": "NumPy",
                "explanation": "Core concept for NumPy Operations and Broadcasting."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "NumPy Operations and Broadcasting",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum NumPy Operations and Broadcasting seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Math operations broadcast across dimensions",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne NumPy Operations and Broadcasting ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: NumPy Operations and Broadcasting",
          "description": "NumPy Operations and Broadcasting ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for NumPy Operations and Broadcasting below\n",
          "solutionCode": "# Math operations broadcast across dimensions",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "NumPy Operations and Broadcasting ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_04_pandas_intro",
        "sectionId": "18_data_analysis",
        "topicNumber": 4,
        "globalIndex": 201,
        "qBadge": "Q.201",
        "title": "Introduction to Pandas",
        "subtitle": "Module 18 · Topic 4",
        "hindiDescription": "Introduction to Pandas ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Tabular data structures: Series and DataFrame",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Pandas",
            "description": "Is lesson me hum Introduction to Pandas ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Tabular data structures: Series and DataFrame",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Pandas."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Pandas",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Pandas seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Tabular data structures: Series and DataFrame",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Pandas ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Pandas",
          "description": "Introduction to Pandas ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Pandas below\n",
          "solutionCode": "# Tabular data structures: Series and DataFrame",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Pandas ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_05_series_df",
        "sectionId": "18_data_analysis",
        "topicNumber": 5,
        "globalIndex": 202,
        "qBadge": "Q.202",
        "title": "Series and DataFrames",
        "subtitle": "Module 18 · Topic 5",
        "hindiDescription": "Series and DataFrames ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "data = {'Product': ['Laptop', 'Mouse'], 'Price': [800, 25]}\nprint(data)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Series and DataFrames",
            "description": "Is lesson me hum Series and DataFrames ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "data = {'Product': ['Laptop', 'Mouse'], 'Price': [800, 25]}",
            "concepts": [
              {
                "token": "Series",
                "explanation": "Core concept for Series and DataFrames."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Series and DataFrames",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Series and DataFrames seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "data = {'Product': ['Laptop', 'Mouse'], 'Price': [800, 25]}\nprint(data)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Series and DataFrames ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Series and DataFrames",
          "description": "Series and DataFrames ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Series and DataFrames below\n",
          "solutionCode": "data = {'Product': ['Laptop', 'Mouse'], 'Price': [800, 25]}\nprint(data)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Series and DataFrames ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_06_read_csv_excel",
        "sectionId": "18_data_analysis",
        "topicNumber": 6,
        "globalIndex": 203,
        "qBadge": "Q.203",
        "title": "Reading CSV and Excel Data",
        "subtitle": "Module 18 · Topic 6",
        "hindiDescription": "Reading CSV and Excel Data ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Loading datasets into memory with pd.read_csv()",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Reading CSV and Excel Data",
            "description": "Is lesson me hum Reading CSV and Excel Data ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Loading datasets into memory with pd.read_csv()",
            "concepts": [
              {
                "token": "Reading",
                "explanation": "Core concept for Reading CSV and Excel Data."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Reading CSV and Excel Data",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Reading CSV and Excel Data seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Loading datasets into memory with pd.read_csv()",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Reading CSV and Excel Data ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Reading CSV and Excel Data",
          "description": "Reading CSV and Excel Data ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Reading CSV and Excel Data below\n",
          "solutionCode": "# Loading datasets into memory with pd.read_csv()",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Reading CSV and Excel Data ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_07_selection_filter",
        "sectionId": "18_data_analysis",
        "topicNumber": 7,
        "globalIndex": 204,
        "qBadge": "Q.204",
        "title": "Data Selection and Filtering",
        "subtitle": "Module 18 · Topic 7",
        "hindiDescription": "Data Selection and Filtering ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Boolean masking and loc/iloc selection",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Data Selection and Filtering",
            "description": "Is lesson me hum Data Selection and Filtering ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Boolean masking and loc/iloc selection",
            "concepts": [
              {
                "token": "Data",
                "explanation": "Core concept for Data Selection and Filtering."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Data Selection and Filtering",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Data Selection and Filtering seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Boolean masking and loc/iloc selection",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Data Selection and Filtering ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Data Selection and Filtering",
          "description": "Data Selection and Filtering ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Data Selection and Filtering below\n",
          "solutionCode": "# Boolean masking and loc/iloc selection",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Data Selection and Filtering ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_08_cleaning",
        "sectionId": "18_data_analysis",
        "topicNumber": 8,
        "globalIndex": 205,
        "qBadge": "Q.205",
        "title": "Missing Values and Data Cleaning",
        "subtitle": "Module 18 · Topic 8",
        "hindiDescription": "Missing Values and Data Cleaning ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Handling NaNs, duplicates, and invalid types",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Missing Values and Data Cleaning",
            "description": "Is lesson me hum Missing Values and Data Cleaning ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Handling NaNs, duplicates, and invalid types",
            "concepts": [
              {
                "token": "Missing",
                "explanation": "Core concept for Missing Values and Data Cleaning."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Missing Values and Data Cleaning",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Missing Values and Data Cleaning seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Handling NaNs, duplicates, and invalid types",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Missing Values and Data Cleaning ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Missing Values and Data Cleaning",
          "description": "Missing Values and Data Cleaning ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Missing Values and Data Cleaning below\n",
          "solutionCode": "# Handling NaNs, duplicates, and invalid types",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Missing Values and Data Cleaning ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_09_groupby",
        "sectionId": "18_data_analysis",
        "topicNumber": 9,
        "globalIndex": 206,
        "qBadge": "Q.206",
        "title": "GroupBy and Aggregation",
        "subtitle": "Module 18 · Topic 9",
        "hindiDescription": "GroupBy and Aggregation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# GroupBy calculations for sales and categories",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to GroupBy and Aggregation",
            "description": "Is lesson me hum GroupBy and Aggregation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# GroupBy calculations for sales and categories",
            "concepts": [
              {
                "token": "GroupBy",
                "explanation": "Core concept for GroupBy and Aggregation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "GroupBy and Aggregation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum GroupBy and Aggregation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# GroupBy calculations for sales and categories",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne GroupBy and Aggregation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: GroupBy and Aggregation",
          "description": "GroupBy and Aggregation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for GroupBy and Aggregation below\n",
          "solutionCode": "# GroupBy calculations for sales and categories",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "GroupBy and Aggregation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_10_merge_join",
        "sectionId": "18_data_analysis",
        "topicNumber": 10,
        "globalIndex": 207,
        "qBadge": "Q.207",
        "title": "Merge, Join and Concatenation",
        "subtitle": "Module 18 · Topic 10",
        "hindiDescription": "Merge, Join and Concatenation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Relational joins on shared keys in Python",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Merge, Join and Concatenation",
            "description": "Is lesson me hum Merge, Join and Concatenation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Relational joins on shared keys in Python",
            "concepts": [
              {
                "token": "Merge,",
                "explanation": "Core concept for Merge, Join and Concatenation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Merge, Join and Concatenation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Merge, Join and Concatenation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Relational joins on shared keys in Python",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Merge, Join and Concatenation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Merge, Join and Concatenation",
          "description": "Merge, Join and Concatenation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Merge, Join and Concatenation below\n",
          "solutionCode": "# Relational joins on shared keys in Python",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Merge, Join and Concatenation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_11_matplotlib",
        "sectionId": "18_data_analysis",
        "topicNumber": 11,
        "globalIndex": 208,
        "qBadge": "Q.208",
        "title": "Data Visualization with Matplotlib",
        "subtitle": "Module 18 · Topic 11",
        "hindiDescription": "Data Visualization with Matplotlib ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Plotting line charts, histograms and bar graphs",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Data Visualization with Matplotlib",
            "description": "Is lesson me hum Data Visualization with Matplotlib ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Plotting line charts, histograms and bar graphs",
            "concepts": [
              {
                "token": "Data",
                "explanation": "Core concept for Data Visualization with Matplotlib."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Data Visualization with Matplotlib",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Data Visualization with Matplotlib seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Plotting line charts, histograms and bar graphs",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Data Visualization with Matplotlib ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Data Visualization with Matplotlib",
          "description": "Data Visualization with Matplotlib ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Data Visualization with Matplotlib below\n",
          "solutionCode": "# Plotting line charts, histograms and bar graphs",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Data Visualization with Matplotlib ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_18_data_12_eda_project",
        "sectionId": "18_data_analysis",
        "topicNumber": 12,
        "globalIndex": 209,
        "qBadge": "Q.209",
        "title": "Exploratory Data Analysis Mini Project",
        "subtitle": "Module 18 · Topic 12",
        "hindiDescription": "Exploratory Data Analysis Mini Project ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Full end-to-end sales dataset analysis and findings",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Exploratory Data Analysis Mini Project",
            "description": "Is lesson me hum Exploratory Data Analysis Mini Project ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Full end-to-end sales dataset analysis and findings",
            "concepts": [
              {
                "token": "Exploratory",
                "explanation": "Core concept for Exploratory Data Analysis Mini Project."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Exploratory Data Analysis Mini Project",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Exploratory Data Analysis Mini Project seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Full end-to-end sales dataset analysis and findings",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Exploratory Data Analysis Mini Project ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Exploratory Data Analysis Mini Project",
          "description": "Exploratory Data Analysis Mini Project ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Exploratory Data Analysis Mini Project below\n",
          "solutionCode": "# Full end-to-end sales dataset analysis and findings",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Exploratory Data Analysis Mini Project ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "19_databases_testing",
    "sectionNumber": "19",
    "title": "Databases, Testing & Professional Python",
    "topics": [
      {
        "id": "py_19_db_01_intro",
        "sectionId": "19_databases_testing",
        "topicNumber": 1,
        "globalIndex": 210,
        "qBadge": "Q.210",
        "title": "Introduction to Databases",
        "subtitle": "Module 19 · Topic 1",
        "hindiDescription": "Introduction to Databases ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Relational storage vs flat files",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Databases",
            "description": "Is lesson me hum Introduction to Databases ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Relational storage vs flat files",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Databases."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Databases",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Databases seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Relational storage vs flat files",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Databases ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Databases",
          "description": "Introduction to Databases ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Databases below\n",
          "solutionCode": "# Relational storage vs flat files",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Databases ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_02_sqlite",
        "sectionId": "19_databases_testing",
        "topicNumber": 2,
        "globalIndex": 211,
        "qBadge": "Q.211",
        "title": "SQLite with Python",
        "subtitle": "Module 19 · Topic 2",
        "hindiDescription": "SQLite with Python ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "import sqlite3\nconn = sqlite3.connect(':memory:')\nprint('SQLite connected')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to SQLite with Python",
            "description": "Is lesson me hum SQLite with Python ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import sqlite3",
            "concepts": [
              {
                "token": "SQLite",
                "explanation": "Core concept for SQLite with Python."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "SQLite with Python",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum SQLite with Python seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import sqlite3\nconn = sqlite3.connect(':memory:')\nprint('SQLite connected')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne SQLite with Python ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: SQLite with Python",
          "description": "SQLite with Python ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for SQLite with Python below\n",
          "solutionCode": "import sqlite3\nconn = sqlite3.connect(':memory:')\nprint('SQLite connected')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "SQLite with Python ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_03_connecting",
        "sectionId": "19_databases_testing",
        "topicNumber": 3,
        "globalIndex": 212,
        "qBadge": "Q.212",
        "title": "Connecting Python to SQL Databases",
        "subtitle": "Module 19 · Topic 3",
        "hindiDescription": "Connecting Python to SQL Databases ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Connection lifecycle, commit, and closing cursors",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Connecting Python to SQL Databases",
            "description": "Is lesson me hum Connecting Python to SQL Databases ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Connection lifecycle, commit, and closing cursors",
            "concepts": [
              {
                "token": "Connecting",
                "explanation": "Core concept for Connecting Python to SQL Databases."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Connecting Python to SQL Databases",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Connecting Python to SQL Databases seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Connection lifecycle, commit, and closing cursors",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Connecting Python to SQL Databases ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Connecting Python to SQL Databases",
          "description": "Connecting Python to SQL Databases ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Connecting Python to SQL Databases below\n",
          "solutionCode": "# Connection lifecycle, commit, and closing cursors",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Connecting Python to SQL Databases ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_04_queries",
        "sectionId": "19_databases_testing",
        "topicNumber": 4,
        "globalIndex": 213,
        "qBadge": "Q.213",
        "title": "Executing SQL Queries",
        "subtitle": "Module 19 · Topic 4",
        "hindiDescription": "Executing SQL Queries ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# SELECT, WHERE, and ORDER BY queries in Python",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Executing SQL Queries",
            "description": "Is lesson me hum Executing SQL Queries ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# SELECT, WHERE, and ORDER BY queries in Python",
            "concepts": [
              {
                "token": "Executing",
                "explanation": "Core concept for Executing SQL Queries."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Executing SQL Queries",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Executing SQL Queries seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# SELECT, WHERE, and ORDER BY queries in Python",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Executing SQL Queries ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Executing SQL Queries",
          "description": "Executing SQL Queries ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Executing SQL Queries below\n",
          "solutionCode": "# SELECT, WHERE, and ORDER BY queries in Python",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Executing SQL Queries ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_05_crud",
        "sectionId": "19_databases_testing",
        "topicNumber": 5,
        "globalIndex": 214,
        "qBadge": "Q.214",
        "title": "CRUD Operations",
        "subtitle": "Module 19 · Topic 5",
        "hindiDescription": "CRUD Operations ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Create, Read, Update, Delete queries",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to CRUD Operations",
            "description": "Is lesson me hum CRUD Operations ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Create, Read, Update, Delete queries",
            "concepts": [
              {
                "token": "CRUD",
                "explanation": "Core concept for CRUD Operations."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "CRUD Operations",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum CRUD Operations seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Create, Read, Update, Delete queries",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne CRUD Operations ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: CRUD Operations",
          "description": "CRUD Operations ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for CRUD Operations below\n",
          "solutionCode": "# Create, Read, Update, Delete queries",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "CRUD Operations ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_06_params_sqli",
        "sectionId": "19_databases_testing",
        "topicNumber": 6,
        "globalIndex": 215,
        "qBadge": "Q.215",
        "title": "Parameterized Queries and SQL Injection Prevention",
        "subtitle": "Module 19 · Topic 6",
        "hindiDescription": "Parameterized Queries and SQL Injection Prevention ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Preventing SQL injection using parameterized tuples",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Parameterized Queries and SQL Injection Prevention",
            "description": "Is lesson me hum Parameterized Queries and SQL Injection Prevention ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Preventing SQL injection using parameterized tuples",
            "concepts": [
              {
                "token": "Parameterized",
                "explanation": "Core concept for Parameterized Queries and SQL Injection Prevention."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Parameterized Queries and SQL Injection Prevention",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Parameterized Queries and SQL Injection Prevention seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Preventing SQL injection using parameterized tuples",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Parameterized Queries and SQL Injection Prevention ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Parameterized Queries and SQL Injection Prevention",
          "description": "Parameterized Queries and SQL Injection Prevention ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Parameterized Queries and SQL Injection Prevention below\n",
          "solutionCode": "# Preventing SQL injection using parameterized tuples",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Parameterized Queries and SQL Injection Prevention ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_07_testing_intro",
        "sectionId": "19_databases_testing",
        "topicNumber": 7,
        "globalIndex": 216,
        "qBadge": "Q.216",
        "title": "Introduction to Unit Testing",
        "subtitle": "Module 19 · Topic 7",
        "hindiDescription": "Introduction to Unit Testing ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Verification of code behavior before deployment",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Introduction to Unit Testing",
            "description": "Is lesson me hum Introduction to Unit Testing ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Verification of code behavior before deployment",
            "concepts": [
              {
                "token": "Introduction",
                "explanation": "Core concept for Introduction to Unit Testing."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Introduction to Unit Testing",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Introduction to Unit Testing seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Verification of code behavior before deployment",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Introduction to Unit Testing ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Introduction to Unit Testing",
          "description": "Introduction to Unit Testing ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Introduction to Unit Testing below\n",
          "solutionCode": "# Verification of code behavior before deployment",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Introduction to Unit Testing ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_08_pytest",
        "sectionId": "19_databases_testing",
        "topicNumber": 8,
        "globalIndex": 217,
        "qBadge": "Q.217",
        "title": "unittest and pytest Basics",
        "subtitle": "Module 19 · Topic 8",
        "hindiDescription": "unittest and pytest Basics ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "import unittest\nclass TestApp(unittest.TestCase):\n    def test_add(self): self.assertEqual(1+1, 2)",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to unittest and pytest Basics",
            "description": "Is lesson me hum unittest and pytest Basics ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import unittest",
            "concepts": [
              {
                "token": "unittest",
                "explanation": "Core concept for unittest and pytest Basics."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "unittest and pytest Basics",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum unittest and pytest Basics seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import unittest\nclass TestApp(unittest.TestCase):\n    def test_add(self): self.assertEqual(1+1, 2)",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne unittest and pytest Basics ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: unittest and pytest Basics",
          "description": "unittest and pytest Basics ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for unittest and pytest Basics below\n",
          "solutionCode": "import unittest\nclass TestApp(unittest.TestCase):\n    def test_add(self): self.assertEqual(1+1, 2)",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "unittest and pytest Basics ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_09_assertions",
        "sectionId": "19_databases_testing",
        "topicNumber": 9,
        "globalIndex": 218,
        "qBadge": "Q.218",
        "title": "Assertions and Test Cases",
        "subtitle": "Module 19 · Topic 9",
        "hindiDescription": "Assertions and Test Cases ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# assert statements and edge-case testing",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Assertions and Test Cases",
            "description": "Is lesson me hum Assertions and Test Cases ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# assert statements and edge-case testing",
            "concepts": [
              {
                "token": "Assertions",
                "explanation": "Core concept for Assertions and Test Cases."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Assertions and Test Cases",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Assertions and Test Cases seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# assert statements and edge-case testing",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Assertions and Test Cases ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Assertions and Test Cases",
          "description": "Assertions and Test Cases ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Assertions and Test Cases below\n",
          "solutionCode": "# assert statements and edge-case testing",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Assertions and Test Cases ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_10_logging",
        "sectionId": "19_databases_testing",
        "topicNumber": 10,
        "globalIndex": 219,
        "qBadge": "Q.219",
        "title": "Logging and Debugging",
        "subtitle": "Module 19 · Topic 10",
        "hindiDescription": "Logging and Debugging ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info('System online')",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Logging and Debugging",
            "description": "Is lesson me hum Logging and Debugging ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "import logging",
            "concepts": [
              {
                "token": "Logging",
                "explanation": "Core concept for Logging and Debugging."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Logging and Debugging",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Logging and Debugging seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 1,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info('System online')",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Logging and Debugging ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Logging and Debugging",
          "description": "Logging and Debugging ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Logging and Debugging below\n",
          "solutionCode": "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info('System online')",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Logging and Debugging ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_11_git_github",
        "sectionId": "19_databases_testing",
        "topicNumber": 11,
        "globalIndex": 220,
        "qBadge": "Q.220",
        "title": "Git and GitHub for Python Projects",
        "subtitle": "Module 19 · Topic 11",
        "hindiDescription": "Git and GitHub for Python Projects ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# Commits, branches, and remote repositories",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Git and GitHub for Python Projects",
            "description": "Is lesson me hum Git and GitHub for Python Projects ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Commits, branches, and remote repositories",
            "concepts": [
              {
                "token": "Git",
                "explanation": "Core concept for Git and GitHub for Python Projects."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Git and GitHub for Python Projects",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Git and GitHub for Python Projects seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Commits, branches, and remote repositories",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Git and GitHub for Python Projects ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Git and GitHub for Python Projects",
          "description": "Git and GitHub for Python Projects ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Git and GitHub for Python Projects below\n",
          "solutionCode": "# Commits, branches, and remote repositories",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Git and GitHub for Python Projects ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_19_db_12_code_quality",
        "sectionId": "19_databases_testing",
        "topicNumber": 12,
        "globalIndex": 221,
        "qBadge": "Q.221",
        "title": "Code Quality, Formatting and Documentation",
        "subtitle": "Module 19 · Topic 12",
        "hindiDescription": "Code Quality, Formatting and Documentation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Easy",
        "referenceCode": "# PEP 8 standards, flake8, black, docstrings",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Code Quality, Formatting and Documentation",
            "description": "Is lesson me hum Code Quality, Formatting and Documentation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# PEP 8 standards, flake8, black, docstrings",
            "concepts": [
              {
                "token": "Code",
                "explanation": "Core concept for Code Quality, Formatting and Documentation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Code Quality, Formatting and Documentation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Code Quality, Formatting and Documentation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# PEP 8 standards, flake8, black, docstrings",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Code Quality, Formatting and Documentation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Code Quality, Formatting and Documentation",
          "description": "Code Quality, Formatting and Documentation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Code Quality, Formatting and Documentation below\n",
          "solutionCode": "# PEP 8 standards, flake8, black, docstrings",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Code Quality, Formatting and Documentation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  },
  {
    "id": "20_capstone_projects",
    "sectionNumber": "20",
    "title": "Real-World Python Projects & Career Preparation",
    "topics": [
      {
        "id": "py_20_proj_01_planning",
        "sectionId": "20_capstone_projects",
        "topicNumber": 1,
        "globalIndex": 222,
        "qBadge": "Q.222",
        "title": "Python Project Planning and Requirements",
        "subtitle": "Module 20 · Topic 1",
        "hindiDescription": "Python Project Planning and Requirements ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Architecture, scoping, and milestone delivery",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Python Project Planning and Requirements",
            "description": "Is lesson me hum Python Project Planning and Requirements ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Architecture, scoping, and milestone delivery",
            "concepts": [
              {
                "token": "Python",
                "explanation": "Core concept for Python Project Planning and Requirements."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Python Project Planning and Requirements",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Python Project Planning and Requirements seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Architecture, scoping, and milestone delivery",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Python Project Planning and Requirements ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Python Project Planning and Requirements",
          "description": "Python Project Planning and Requirements ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Python Project Planning and Requirements below\n",
          "solutionCode": "# Architecture, scoping, and milestone delivery",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Python Project Planning and Requirements ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_02_cli_calculator",
        "sectionId": "20_capstone_projects",
        "topicNumber": 2,
        "globalIndex": 223,
        "qBadge": "Q.223",
        "title": "Command-Line Calculator Project",
        "subtitle": "Module 20 · Topic 2",
        "hindiDescription": "Command-Line Calculator Project ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Modular multi-function CLI application",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Command-Line Calculator Project",
            "description": "Is lesson me hum Command-Line Calculator Project ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Modular multi-function CLI application",
            "concepts": [
              {
                "token": "Command-Line",
                "explanation": "Core concept for Command-Line Calculator Project."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Command-Line Calculator Project",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Command-Line Calculator Project seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Modular multi-function CLI application",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Command-Line Calculator Project ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Command-Line Calculator Project",
          "description": "Command-Line Calculator Project ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Command-Line Calculator Project below\n",
          "solutionCode": "# Modular multi-function CLI application",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Command-Line Calculator Project ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_03_student_mgmt",
        "sectionId": "20_capstone_projects",
        "topicNumber": 3,
        "globalIndex": 224,
        "qBadge": "Q.224",
        "title": "Student Management System",
        "subtitle": "Module 20 · Topic 3",
        "hindiDescription": "Student Management System ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Persistent SQLite student record CRUD app",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Student Management System",
            "description": "Is lesson me hum Student Management System ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Persistent SQLite student record CRUD app",
            "concepts": [
              {
                "token": "Student",
                "explanation": "Core concept for Student Management System."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Student Management System",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Student Management System seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Persistent SQLite student record CRUD app",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Student Management System ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Student Management System",
          "description": "Student Management System ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Student Management System below\n",
          "solutionCode": "# Persistent SQLite student record CRUD app",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Student Management System ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_04_contact_book",
        "sectionId": "20_capstone_projects",
        "topicNumber": 4,
        "globalIndex": 225,
        "qBadge": "Q.225",
        "title": "Contact Book Application",
        "subtitle": "Module 20 · Topic 4",
        "hindiDescription": "Contact Book Application ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Searchable contact manager with phone & email",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Contact Book Application",
            "description": "Is lesson me hum Contact Book Application ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Searchable contact manager with phone & email",
            "concepts": [
              {
                "token": "Contact",
                "explanation": "Core concept for Contact Book Application."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Contact Book Application",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Contact Book Application seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Searchable contact manager with phone & email",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Contact Book Application ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Contact Book Application",
          "description": "Contact Book Application ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Contact Book Application below\n",
          "solutionCode": "# Searchable contact manager with phone & email",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Contact Book Application ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_05_expense_tracker",
        "sectionId": "20_capstone_projects",
        "topicNumber": 5,
        "globalIndex": 226,
        "qBadge": "Q.226",
        "title": "Expense Tracker",
        "subtitle": "Module 20 · Topic 5",
        "hindiDescription": "Expense Tracker ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Monthly budgeting tool with summary analytics",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Expense Tracker",
            "description": "Is lesson me hum Expense Tracker ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Monthly budgeting tool with summary analytics",
            "concepts": [
              {
                "token": "Expense",
                "explanation": "Core concept for Expense Tracker."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Expense Tracker",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Expense Tracker seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Monthly budgeting tool with summary analytics",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Expense Tracker ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Expense Tracker",
          "description": "Expense Tracker ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Expense Tracker below\n",
          "solutionCode": "# Monthly budgeting tool with summary analytics",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Expense Tracker ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_06_file_organizer",
        "sectionId": "20_capstone_projects",
        "topicNumber": 6,
        "globalIndex": 227,
        "qBadge": "Q.227",
        "title": "File Organizer Automation",
        "subtitle": "Module 20 · Topic 6",
        "hindiDescription": "File Organizer Automation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Auto-categorize downloads directory into folders",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to File Organizer Automation",
            "description": "Is lesson me hum File Organizer Automation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Auto-categorize downloads directory into folders",
            "concepts": [
              {
                "token": "File",
                "explanation": "Core concept for File Organizer Automation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "File Organizer Automation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum File Organizer Automation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Auto-categorize downloads directory into folders",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne File Organizer Automation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: File Organizer Automation",
          "description": "File Organizer Automation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for File Organizer Automation below\n",
          "solutionCode": "# Auto-categorize downloads directory into folders",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "File Organizer Automation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_07_weather_app",
        "sectionId": "20_capstone_projects",
        "topicNumber": 7,
        "globalIndex": 228,
        "qBadge": "Q.228",
        "title": "Weather API Application",
        "subtitle": "Module 20 · Topic 7",
        "hindiDescription": "Weather API Application ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# REST API client fetching live temperature and forecast",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Weather API Application",
            "description": "Is lesson me hum Weather API Application ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# REST API client fetching live temperature and forecast",
            "concepts": [
              {
                "token": "Weather",
                "explanation": "Core concept for Weather API Application."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Weather API Application",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Weather API Application seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# REST API client fetching live temperature and forecast",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Weather API Application ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Weather API Application",
          "description": "Weather API Application ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Weather API Application below\n",
          "solutionCode": "# REST API client fetching live temperature and forecast",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Weather API Application ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_08_scraper_collector",
        "sectionId": "20_capstone_projects",
        "topicNumber": 8,
        "globalIndex": 229,
        "qBadge": "Q.229",
        "title": "Web Scraping Data Collector",
        "subtitle": "Module 20 · Topic 8",
        "hindiDescription": "Web Scraping Data Collector ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Web scraper storing parsed articles into CSV",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Web Scraping Data Collector",
            "description": "Is lesson me hum Web Scraping Data Collector ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Web scraper storing parsed articles into CSV",
            "concepts": [
              {
                "token": "Web",
                "explanation": "Core concept for Web Scraping Data Collector."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Web Scraping Data Collector",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Web Scraping Data Collector seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Web scraper storing parsed articles into CSV",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Web Scraping Data Collector ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Web Scraping Data Collector",
          "description": "Web Scraping Data Collector ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Web Scraping Data Collector below\n",
          "solutionCode": "# Web scraper storing parsed articles into CSV",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Web Scraping Data Collector ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_09_csv_cleaning",
        "sectionId": "20_capstone_projects",
        "topicNumber": 9,
        "globalIndex": 230,
        "qBadge": "Q.230",
        "title": "CSV Data Cleaning Project",
        "subtitle": "Module 20 · Topic 9",
        "hindiDescription": "CSV Data Cleaning Project ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Production dataset sanitization pipeline",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to CSV Data Cleaning Project",
            "description": "Is lesson me hum CSV Data Cleaning Project ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Production dataset sanitization pipeline",
            "concepts": [
              {
                "token": "CSV",
                "explanation": "Core concept for CSV Data Cleaning Project."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "CSV Data Cleaning Project",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum CSV Data Cleaning Project seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Production dataset sanitization pipeline",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne CSV Data Cleaning Project ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: CSV Data Cleaning Project",
          "description": "CSV Data Cleaning Project ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for CSV Data Cleaning Project below\n",
          "solutionCode": "# Production dataset sanitization pipeline",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "CSV Data Cleaning Project ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_10_data_dashboard",
        "sectionId": "20_capstone_projects",
        "topicNumber": 10,
        "globalIndex": 231,
        "qBadge": "Q.231",
        "title": "Data Analysis Dashboard Project",
        "subtitle": "Module 20 · Topic 10",
        "hindiDescription": "Data Analysis Dashboard Project ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Visual metrics dashboard summarizing KPI metrics",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Data Analysis Dashboard Project",
            "description": "Is lesson me hum Data Analysis Dashboard Project ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Visual metrics dashboard summarizing KPI metrics",
            "concepts": [
              {
                "token": "Data",
                "explanation": "Core concept for Data Analysis Dashboard Project."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Data Analysis Dashboard Project",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Data Analysis Dashboard Project seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Visual metrics dashboard summarizing KPI metrics",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Data Analysis Dashboard Project ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Data Analysis Dashboard Project",
          "description": "Data Analysis Dashboard Project ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Data Analysis Dashboard Project below\n",
          "solutionCode": "# Visual metrics dashboard summarizing KPI metrics",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Data Analysis Dashboard Project ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_11_final_capstone",
        "sectionId": "20_capstone_projects",
        "topicNumber": 11,
        "globalIndex": 232,
        "qBadge": "Q.232",
        "title": "Final Python Capstone Project",
        "subtitle": "Module 20 · Topic 11",
        "hindiDescription": "Final Python Capstone Project ke core concepts aur real-world applications seekhein.",
        "difficulty": "Hard",
        "referenceCode": "# Complete production-grade Python portfolio piece",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to Final Python Capstone Project",
            "description": "Is lesson me hum Final Python Capstone Project ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Complete production-grade Python portfolio piece",
            "concepts": [
              {
                "token": "Final",
                "explanation": "Core concept for Final Python Capstone Project."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "Final Python Capstone Project",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum Final Python Capstone Project seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Complete production-grade Python portfolio piece",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne Final Python Capstone Project ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: Final Python Capstone Project",
          "description": "Final Python Capstone Project ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for Final Python Capstone Project below\n",
          "solutionCode": "# Complete production-grade Python portfolio piece",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "Final Python Capstone Project ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      },
      {
        "id": "py_20_proj_12_career_prep",
        "sectionId": "20_capstone_projects",
        "topicNumber": 12,
        "globalIndex": 233,
        "qBadge": "Q.233",
        "title": "GitHub Portfolio and Python Interview Preparation",
        "subtitle": "Module 20 · Topic 12",
        "hindiDescription": "GitHub Portfolio and Python Interview Preparation ke core concepts aur real-world applications seekhein.",
        "difficulty": "Medium",
        "referenceCode": "# Resume, interview coding rounds, and live portfolio",
        "steps": [
          {
            "stepNumber": 1,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Introduction to GitHub Portfolio and Python Interview Preparation",
            "description": "Is lesson me hum GitHub Portfolio and Python Interview Preparation ko step-by-step samjhenge aur execute karenge.",
            "codeSnippet": "# Resume, interview coding rounds, and live portfolio",
            "concepts": [
              {
                "token": "GitHub",
                "explanation": "Core concept for GitHub Portfolio and Python Interview Preparation."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "",
            "pipelineFlow": [
              {
                "title": "Source Code",
                "detail": "GitHub Portfolio and Python Interview Preparation",
                "type": "input"
              },
              {
                "title": "Python Interpreter",
                "detail": "Evaluation & Bytecode Execution",
                "type": "process"
              },
              {
                "title": "Program Output",
                "detail": "Console Stream",
                "type": "output"
              }
            ],
            "teacherNarration": "Namaste! Is lesson me hum GitHub Portfolio and Python Interview Preparation seekhenge. Code ko dhyan se dekhiye aur step by step execute kijiye."
          },
          {
            "stepNumber": 2,
            "totalSteps": 2,
            "activeLineIndex": 0,
            "title": "Program Execution & Result",
            "description": "Python statements execute hokar memory me states update karte hain aur output display karte hain.",
            "codeSnippet": "# Resume, interview coding rounds, and live portfolio",
            "concepts": [
              {
                "token": "Result",
                "explanation": "Successful execution of statement."
              }
            ],
            "memoryVariables": [],
            "consoleOutput": "Execution Successful",
            "pipelineFlow": [
              {
                "title": "Execution",
                "detail": "State Updated",
                "type": "process"
              },
              {
                "title": "Console",
                "detail": "Result Rendered",
                "type": "output"
              }
            ],
            "teacherNarration": "Zabardast! Aapne GitHub Portfolio and Python Interview Preparation ka code run kar liya hai."
          }
        ],
        "practice": {
          "title": "Practice: GitHub Portfolio and Python Interview Preparation",
          "description": "GitHub Portfolio and Python Interview Preparation ka standard Python program likhiye aur run kijiye.",
          "starterCode": "# Write your Python code for GitHub Portfolio and Python Interview Preparation below\n",
          "solutionCode": "# Resume, interview coding rounds, and live portfolio",
          "sampleInput": "",
          "sampleOutput": "Output",
          "hints": [
            "GitHub Portfolio and Python Interview Preparation ke reference code ko follow karein.",
            "Sahi syntax aur variables use karke execute kijiye."
          ],
          "testCases": [
            {
              "id": 1,
              "input": "",
              "expectedOutput": ""
            }
          ]
        }
      }
    ]
  }
];

export function getAllCurriculumTopics(): CurriculumTopic[] {
  const all: CurriculumTopic[] = [];
  for (const s of PYTHON_CLASSROOM_SECTIONS) {
    for (const t of s.topics) {
      if (!t.questions) {
        t.questions = MODULE_03_TOPIC_QUESTIONS[t.id] || MODULE_02_TOPIC_QUESTIONS[t.id] || MODULE_01_TOPIC_QUESTIONS[t.id];
      }
      all.push(t);
    }
  }
  return all;
}

const LEGACY_TOPIC_ALIASES: Record<string, string> = {
  'py_01_basics_04': 'py_01_basics_03',
  'py_01_basics_09': 'py_01_basics_08',
  'py_01_basics_12': 'py_01_basics_11',
  'py_01_basics_13': 'py_02_operators_02_add_sub',
  'py_01_basics_16': 'py_05_strings_03_concat',
  'py_01_basics_17': 'py_02_operators_02_add_sub',
  'py_01_basics_18': 'py_02_operators_03',
  'py_01_basics_19': 'py_03_conditionals_01',
  'py_01_basics_21': 'py_01_basics_20',
  'py_10_oop_01': 'py_10_oops_00_intro',
  'py_10_01': 'py_10_oops_00_intro',
  'py_10_oop_02': 'py_10_oops_01',
  'py_10_02': 'py_10_oops_01',
  'py_10_oop_03': 'py_10_oops_02',
  'py_10_03': 'py_10_oops_02',
  'py_10_oop_04': 'py_10_oops_04_init',
  'py_10_04': 'py_10_oops_04_init',
  'py_10_oop_05': 'py_10_oops_03',
  'py_10_05': 'py_10_oops_03',
  'py_10_oop_06': 'py_10_oops_04',
  'py_10_06': 'py_10_oops_04',
  'py_10_oop_07': 'py_10_oops_05',
  'py_10_07': 'py_10_oops_05',
  'py_10_oop_08': 'py_10_oops_06',
  'py_10_08': 'py_10_oops_06',
  'py_10_oop_09': 'py_10_oops_07',
  'py_10_09': 'py_10_oops_07',
  'py_10_oop_10': 'py_10_oops_08',
  'py_10_10': 'py_10_oops_08',
  'py_10_oop_11': 'py_10_oops_09',
  'py_10_11': 'py_10_oops_09',
  'py_10_oop_12': 'py_10_oops_10',
  'py_10_12': 'py_10_oops_10',
};

export function getTopicById(id: string): CurriculumTopic | undefined {
  const resolvedId = LEGACY_TOPIC_ALIASES[id] || id;
  for (const sec of PYTHON_CLASSROOM_SECTIONS) {
    const t = sec.topics.find((x) => x.id === resolvedId || x.id === id);
    if (t) {
      if (!t.questions) {
        t.questions = MODULE_03_TOPIC_QUESTIONS[t.id] || MODULE_02_TOPIC_QUESTIONS[t.id] || MODULE_01_TOPIC_QUESTIONS[t.id];
      }
      return t;
    }
  }
  return undefined;
}

export function getDefaultTopic(): CurriculumTopic {
  // First lesson: Hello, World! — Your First Python Program
  const t = PYTHON_CLASSROOM_SECTIONS[0].topics[0];
  if (!t.questions && MODULE_01_TOPIC_QUESTIONS[t.id]) {
    t.questions = MODULE_01_TOPIC_QUESTIONS[t.id];
  }
  return t;
}

export function getNextTopic(currentId: string): CurriculumTopic | undefined {
  const all = getAllCurriculumTopics();
  const idx = all.findIndex((t) => t.id === currentId);
  if (idx >= 0 && idx < all.length - 1) {
    return all[idx + 1];
  }
  return undefined;
}
