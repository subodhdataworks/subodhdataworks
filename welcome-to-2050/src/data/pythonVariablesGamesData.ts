/**
 * Complete Data for Python Variables & Data Types Module (Level 2 / Chapter 2).
 * 8 Interactive Games × 10 Questions per Game = 80 Total Challenges.
 * Shuffled option positions, rich explanations, and practical business data examples.
 */

import { PythonGame } from './pythonIntroGamesData';

export const PYTHON_VARIABLES_GAMES: PythonGame[] = [
  {
    "id": 1,
    "gameType": "code_puzzle",
    "title": "Game 1 — Puzzle Quest: Variable Vault",
    "shortTitle": "Variable Vault",
    "subtitle": "10 Questions • Master variables, naming rules, reassignment, and types.",
    "badge": "1",
    "description": "Unlock the fundamentals of variables, assignments, naming conventions, and data types.",
    "icon": "📦",
    "themeColor": "from-amber-500 to-orange-600",
    "activeColor": "#f59e0b",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g1_q1",
        "gameId": 1,
        "challengeNum": 1,
        "title": "Variable Vault #1",
        "task": "A shop stores its daily sales amount under a name so it can use it later. What is this named reference called?",
        "expectedOutput": "Variable",
        "starterCode": "# Variable Vault Challenge #1\n# A shop stores its daily sales amount under a name so it can use it later. What is this named reference called?",
        "hint": "Think about: A variable name refers to a value....",
        "solution": "Variable",
        "explanation": "A variable name refers to a value.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Function",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Comment",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Variable",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Loop",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "Function",
          "Comment",
          "Variable",
          "Loop"
        ],
        "expectedPuzzleTokens": [
          "Variable"
        ]
      },
      {
        "id": "v2_g1_q2",
        "gameId": 1,
        "challengeNum": 2,
        "title": "Variable Vault #2",
        "task": "Which name follows Python's variable naming rules?",
        "expectedOutput": "sales_total",
        "starterCode": "# Variable Vault Challenge #2\n# Which name follows Python's variable naming rules?",
        "hint": "Think about: Underscores are allowed; names cannot start with digits or u...",
        "solution": "sales_total",
        "explanation": "Underscores are allowed; names cannot start with digits or use reserved keywords.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "2sales",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "sales_total",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "sales-total",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "class",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "2sales",
          "sales_total",
          "sales-total",
          "class"
        ],
        "expectedPuzzleTokens": [
          "sales_total"
        ]
      },
      {
        "id": "v2_g1_q3",
        "gameId": 1,
        "challengeNum": 3,
        "title": "Variable Vault #3",
        "task": "A variable named revenue is assigned 500, then 800. What value does it hold afterward?",
        "expectedOutput": "800",
        "starterCode": "# Variable Vault Challenge #3\n# A variable named revenue is assigned 500, then 800. What value does it hold afterward?",
        "hint": "Think about: Reassignment replaces the previous value....",
        "solution": "800",
        "explanation": "Reassignment replaces the previous value.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "800",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "None",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "500",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "1300",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "800",
          "None",
          "500",
          "1300"
        ],
        "expectedPuzzleTokens": [
          "800"
        ]
      },
      {
        "id": "v2_g1_q4",
        "gameId": 1,
        "challengeNum": 4,
        "title": "Variable Vault #4",
        "task": "Which value is an integer?",
        "expectedOutput": "19",
        "starterCode": "# Variable Vault Challenge #4\n# Which value is an integer?",
        "hint": "Think about: 19 is an integer....",
        "solution": "19",
        "explanation": "19 is an integer.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "19.5",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "\"19\"",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "True",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "19",
            "isCorrect": true
          }
        ],
        "puzzleTokens": [
          "19.5",
          "\"19\"",
          "True",
          "19"
        ],
        "expectedPuzzleTokens": [
          "19"
        ]
      },
      {
        "id": "v2_g1_q5",
        "gameId": 1,
        "challengeNum": 5,
        "title": "Variable Vault #5",
        "task": "A customer's name is stored as \"Asha\". Which type is appropriate?",
        "expectedOutput": "str",
        "starterCode": "# Variable Vault Challenge #5\n# A customer's name is stored as \"Asha\". Which type is appropriate?",
        "hint": "Think about: Names are text, represented by strings....",
        "solution": "str",
        "explanation": "Names are text, represented by strings.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "str",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "int",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "float",
          "bool",
          "str",
          "int"
        ],
        "expectedPuzzleTokens": [
          "str"
        ]
      },
      {
        "id": "v2_g1_q6",
        "gameId": 1,
        "challengeNum": 6,
        "title": "Variable Vault #6",
        "task": "A business records whether an order is paid. Which type fits best?",
        "expectedOutput": "bool",
        "starterCode": "# Variable Vault Challenge #6\n# A business records whether an order is paid. Which type fits best?",
        "hint": "Think about: Boolean values represent True or False....",
        "solution": "bool",
        "explanation": "Boolean values represent True or False.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "str only",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "int only",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "float",
          "bool",
          "str only",
          "int only"
        ],
        "expectedPuzzleTokens": [
          "bool"
        ]
      },
      {
        "id": "v2_g1_q7",
        "gameId": 1,
        "challengeNum": 7,
        "title": "Variable Vault #7",
        "task": "Which function checks the type of a Python value?",
        "expectedOutput": "type()",
        "starterCode": "# Variable Vault Challenge #7\n# Which function checks the type of a Python value?",
        "hint": "Think about: type(value) reports the object's type....",
        "solution": "type()",
        "explanation": "type(value) reports the object's type.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "type()",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "range()",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "print()",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "input()",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "type()",
          "range()",
          "print()",
          "input()"
        ],
        "expectedPuzzleTokens": [
          "type()"
        ]
      },
      {
        "id": "v2_g1_q8",
        "gameId": 1,
        "challengeNum": 8,
        "title": "Variable Vault #8",
        "task": "A text value \"250\" needs to be used as a number. Which operation is appropriate?",
        "expectedOutput": "int(\"250\")",
        "starterCode": "# Variable Vault Challenge #8\n# A text value \"250\" needs to be used as a number. Which operation is appropriate?",
        "hint": "Think about: int(\"250\") converts compatible numeric text into an integer....",
        "solution": "int(\"250\")",
        "explanation": "int(\"250\") converts compatible numeric text into an integer.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "str(250)",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool(\"250\")",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "type(\"250\")",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "int(\"250\")",
            "isCorrect": true
          }
        ],
        "puzzleTokens": [
          "str(250)",
          "bool(\"250\")",
          "type(\"250\")",
          "int(\"250\")"
        ],
        "expectedPuzzleTokens": [
          "int(\"250\")"
        ]
      },
      {
        "id": "v2_g1_q9",
        "gameId": 1,
        "challengeNum": 9,
        "title": "Variable Vault #9",
        "task": "Which statement assigns 10 to both variables?",
        "expectedOutput": "a = b = 10",
        "starterCode": "# Variable Vault Challenge #9\n# Which statement assigns 10 to both variables?",
        "hint": "Think about: Chained assignment gives both variables the same value....",
        "solution": "a = b = 10",
        "explanation": "Chained assignment gives both variables the same value.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "a, b == 10",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "10 = a = b",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "a = b = 10",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "a == b == 10",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "a, b == 10",
          "10 = a = b",
          "a = b = 10",
          "a == b == 10"
        ],
        "expectedPuzzleTokens": [
          "a = b = 10"
        ]
      },
      {
        "id": "v2_g1_q10",
        "gameId": 1,
        "challengeNum": 10,
        "title": "Variable Vault #10",
        "task": "A business uses TAX_RATE as a constant by convention. What does uppercase naming communicate?",
        "expectedOutput": "It is intended to be treated as a constant.",
        "starterCode": "# Variable Vault Challenge #10\n# A business uses TAX_RATE as a constant by convention. What does uppercase naming communicate?",
        "hint": "Think about: Uppercase naming is a convention, not an enforced restrictio...",
        "solution": "It is intended to be treated as a constant.",
        "explanation": "Uppercase naming is a convention, not an enforced restriction.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "It is automatically unchangeable.",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "It is intended to be treated as a constant.",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "It is a string.",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "It is a Python keyword.",
            "isCorrect": false
          }
        ],
        "puzzleTokens": [
          "It is automatically unchangeable.",
          "It is intended to be treated as a constant.",
          "It is a string.",
          "It is a Python keyword."
        ],
        "expectedPuzzleTokens": [
          "It is intended to be treated as a constant."
        ]
      }
    ]
  },
  {
    "id": 2,
    "gameType": "fill_blank",
    "title": "Game 2 — Fill in the Blank",
    "shortTitle": "Blank Solver",
    "subtitle": "10 Questions • Complete core definitions of Python data types & syntax.",
    "badge": "2",
    "description": "Fill the blanks: variables, case sensitivity, int, float, str, bool, and type().",
    "icon": "✍️",
    "themeColor": "from-blue-500 to-indigo-600",
    "activeColor": "#3b82f6",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g2_q1",
        "gameId": 2,
        "challengeNum": 1,
        "title": "Blank Solver #1",
        "task": "A named reference to a value is a ______.",
        "expectedOutput": "Variable",
        "starterCode": "# Level 2 - Blank Solver Q1\n",
        "hint": "Think about: Variables let programs refer to values by name....",
        "solution": "Variable",
        "explanation": "Variables let programs refer to values by name.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Loop",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Package",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Comment",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Variable",
            "isCorrect": true
          }
        ],
        "blankSnippet": "A named reference to a value is a ______.",
        "blankAnswer": "Variable"
      },
      {
        "id": "v2_g2_q2",
        "gameId": 2,
        "challengeNum": 2,
        "title": "Blank Solver #2",
        "task": "Python variable names are case-______.",
        "expectedOutput": "Sensitive",
        "starterCode": "# Level 2 - Blank Solver Q2\n",
        "hint": "Think about: sales and Sales are different identifiers....",
        "solution": "Sensitive",
        "explanation": "sales and Sales are different identifiers.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Converted",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Free",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Sensitive",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Locked",
            "isCorrect": false
          }
        ],
        "blankSnippet": "Python variable names are case-______.",
        "blankAnswer": "Sensitive"
      },
      {
        "id": "v2_g2_q3",
        "gameId": 2,
        "challengeNum": 3,
        "title": "Blank Solver #3",
        "task": "A valid variable name can contain letters, digits and ______.",
        "expectedOutput": "Underscores",
        "starterCode": "# Level 2 - Blank Solver Q3\n",
        "hint": "Think about: Underscores are permitted in variable names....",
        "solution": "Underscores",
        "explanation": "Underscores are permitted in variable names.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Hyphens",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Underscores",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "Quotation marks",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Spaces",
            "isCorrect": false
          }
        ],
        "blankSnippet": "A valid variable name can contain letters, digits and ______.",
        "blankAnswer": "Underscores"
      },
      {
        "id": "v2_g2_q4",
        "gameId": 2,
        "challengeNum": 4,
        "title": "Blank Solver #4",
        "task": "The value 42 belongs to the ______ type.",
        "expectedOutput": "int",
        "starterCode": "# Level 2 - Blank Solver Q4\n",
        "hint": "Think about: Whole numbers such as 42 are integers....",
        "solution": "int",
        "explanation": "Whole numbers such as 42 are integers.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "int",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "str",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "float",
            "isCorrect": false
          }
        ],
        "blankSnippet": "The value 42 belongs to the ______ type.",
        "blankAnswer": "int"
      },
      {
        "id": "v2_g2_q5",
        "gameId": 2,
        "challengeNum": 5,
        "title": "Blank Solver #5",
        "task": "The value 42.5 belongs to the ______ type.",
        "expectedOutput": "float",
        "starterCode": "# Level 2 - Blank Solver Q5\n",
        "hint": "Think about: Decimal numeric values are represented by floats....",
        "solution": "float",
        "explanation": "Decimal numeric values are represented by floats.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "int",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "str",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "float",
            "isCorrect": true
          }
        ],
        "blankSnippet": "The value 42.5 belongs to the ______ type.",
        "blankAnswer": "float"
      },
      {
        "id": "v2_g2_q6",
        "gameId": 2,
        "challengeNum": 6,
        "title": "Blank Solver #6",
        "task": "The value \"Future IT\" is a ______.",
        "expectedOutput": "String",
        "starterCode": "# Level 2 - Blank Solver Q6\n",
        "hint": "Think about: Quoted text is a string....",
        "solution": "String",
        "explanation": "Quoted text is a string.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Boolean",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "String",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Integer",
            "isCorrect": false
          }
        ],
        "blankSnippet": "The value \"Future IT\" is a ______.",
        "blankAnswer": "String"
      },
      {
        "id": "v2_g2_q7",
        "gameId": 2,
        "challengeNum": 7,
        "title": "Blank Solver #7",
        "task": "The values True and False belong to the ______ type.",
        "expectedOutput": "bool",
        "starterCode": "# Level 2 - Blank Solver Q7\n",
        "hint": "Think about: Booleans represent logical truth values....",
        "solution": "bool",
        "explanation": "Booleans represent logical truth values.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "str",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "int",
            "isCorrect": false
          }
        ],
        "blankSnippet": "The values True and False belong to the ______ type.",
        "blankAnswer": "bool"
      },
      {
        "id": "v2_g2_q8",
        "gameId": 2,
        "challengeNum": 8,
        "title": "Blank Solver #8",
        "task": "The function ______ can inspect the type of a value.",
        "expectedOutput": "type()",
        "starterCode": "# Level 2 - Blank Solver Q8\n",
        "hint": "Think about: Use type(value) to inspect its type....",
        "solution": "type()",
        "explanation": "Use type(value) to inspect its type.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "type()",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "input()",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "range()",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "print()",
            "isCorrect": false
          }
        ],
        "blankSnippet": "The function ______ can inspect the type of a value.",
        "blankAnswer": "type()"
      },
      {
        "id": "v2_g2_q9",
        "gameId": 2,
        "challengeNum": 9,
        "title": "Blank Solver #9",
        "task": "Converting compatible numeric text to an integer can use ______.",
        "expectedOutput": "int()",
        "starterCode": "# Level 2 - Blank Solver Q9\n",
        "hint": "Think about: int(\"25\") produces the integer 25....",
        "solution": "int()",
        "explanation": "int(\"25\") produces the integer 25.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "type()",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "print()",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "None",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "int()",
            "isCorrect": true
          }
        ],
        "blankSnippet": "Converting compatible numeric text to an integer can use ______.",
        "blankAnswer": "int()"
      },
      {
        "id": "v2_g2_q10",
        "gameId": 2,
        "challengeNum": 10,
        "title": "Blank Solver #10",
        "task": "A name such as MAX_RETRIES can signal a ______ by convention.",
        "expectedOutput": "Constant",
        "starterCode": "# Level 2 - Blank Solver Q10\n",
        "hint": "Think about: Uppercase names commonly indicate constants....",
        "solution": "Constant",
        "explanation": "Uppercase names commonly indicate constants.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Data type",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Loop",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Constant",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "String only",
            "isCorrect": false
          }
        ],
        "blankSnippet": "A name such as MAX_RETRIES can signal a ______ by convention.",
        "blankAnswer": "Constant"
      }
    ]
  },
  {
    "id": 3,
    "gameType": "match_code",
    "title": "Game 3 — Match the Code",
    "shortTitle": "Milan Matcher",
    "subtitle": "10 Questions • Connect code snippets with their accurate data types and operations.",
    "badge": "3",
    "description": "Match code lines with their operations and data representations.",
    "icon": "⚡",
    "themeColor": "from-emerald-500 to-teal-600",
    "activeColor": "#10b981",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g3_q1",
        "gameId": 3,
        "challengeNum": 1,
        "title": "Milan Matcher #1",
        "task": "price = 99",
        "expectedOutput": "Assigns an integer value to price",
        "starterCode": "# Level 2 - Milan Matcher Q1\n",
        "hint": "Think about: In Python, whole numbers without decimals like 99 are intege...",
        "solution": "Assigns an integer value to price",
        "explanation": "In Python, whole numbers without decimals like 99 are integers (int). Writing 'price = 99' assigns this int to the variable.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Assigns an integer value to price",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "Creates a Boolean",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Checks a type",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Defines a class",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "price = 99",
            "right": "Assigns an integer value to price"
          }
        ],
        "matchDistractors": [
          "Creates a Boolean",
          "Checks a type",
          "Defines a class"
        ],
        "blankSnippet": "price = 99  # Match the purpose"
      },
      {
        "id": "v2_g3_q2",
        "gameId": 3,
        "challengeNum": 2,
        "title": "Milan Matcher #2",
        "task": "customer = \"Ravi\"",
        "expectedOutput": "String assignment",
        "starterCode": "# Level 2 - Milan Matcher Q2\n",
        "hint": "Think about: Any text enclosed in single or double quotes such as 'Ravi' ...",
        "solution": "String assignment",
        "explanation": "Any text enclosed in single or double quotes such as 'Ravi' is a string (str) literal in Python.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Boolean assignment",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Type inspection",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Float assignment",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "String assignment",
            "isCorrect": true
          }
        ],
        "matchPairs": [
          {
            "left": "customer = \"Ravi\"",
            "right": "String assignment"
          }
        ],
        "matchDistractors": [
          "Boolean assignment",
          "Type inspection",
          "Float assignment"
        ],
        "blankSnippet": "customer = \"Ravi\"  # Match the purpose"
      },
      {
        "id": "v2_g3_q3",
        "gameId": 3,
        "challengeNum": 3,
        "title": "Milan Matcher #3",
        "task": "is_paid = True",
        "expectedOutput": "Boolean",
        "starterCode": "# Level 2 - Milan Matcher Q3\n",
        "hint": "Think about: True and False are Python's Boolean (bool) literals, represe...",
        "solution": "Boolean",
        "explanation": "True and False are Python's Boolean (bool) literals, representing binary logic and truth values.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "String",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Integer",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Boolean",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Float",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "is_paid = True",
            "right": "Boolean"
          }
        ],
        "matchDistractors": [
          "String",
          "Integer",
          "Float"
        ],
        "blankSnippet": "is_paid = True  # Match the purpose"
      },
      {
        "id": "v2_g3_q4",
        "gameId": 3,
        "challengeNum": 4,
        "title": "Milan Matcher #4",
        "task": "type(8.5)",
        "expectedOutput": "Checks the value's type",
        "starterCode": "# Level 2 - Milan Matcher Q4\n",
        "hint": "Think about: The built-in function type(obj) checks and returns the runti...",
        "solution": "Checks the value's type",
        "explanation": "The built-in function type(obj) checks and returns the runtime data type of any object (here float).",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Adds numbers",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Checks the value's type",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "Converts to string",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Assigns a value",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "type(8.5)",
            "right": "Checks the value's type"
          }
        ],
        "matchDistractors": [
          "Adds numbers",
          "Converts to string",
          "Assigns a value"
        ],
        "blankSnippet": "type(8.5)  # Match the purpose"
      },
      {
        "id": "v2_g3_q5",
        "gameId": 3,
        "challengeNum": 5,
        "title": "Milan Matcher #5",
        "task": "int(\"45\")",
        "expectedOutput": "Converts compatible numeric text to an integer",
        "starterCode": "# Level 2 - Milan Matcher Q5\n",
        "hint": "Think about: int('45') performs type casting: it converts the numeric str...",
        "solution": "Converts compatible numeric text to an integer",
        "explanation": "int('45') performs type casting: it converts the numeric string '45' into an integer value 45.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Converts compatible numeric text to an integer",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "Converts to a list",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Checks a variable name",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Makes a constant",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "int(\"45\")",
            "right": "Converts compatible numeric text to an integer"
          }
        ],
        "matchDistractors": [
          "Converts to a list",
          "Checks a variable name",
          "Makes a constant"
        ],
        "blankSnippet": "int(\"45\")  # Match the purpose"
      },
      {
        "id": "v2_g3_q6",
        "gameId": 3,
        "challengeNum": 6,
        "title": "Milan Matcher #6",
        "task": "a, b = 3, 7",
        "expectedOutput": "Assigns 3 to a and 7 to b",
        "starterCode": "# Level 2 - Milan Matcher Q6\n",
        "hint": "Think about: Tuple unpacking allows multiple assignments in a single stat...",
        "solution": "Assigns 3 to a and 7 to b",
        "explanation": "Tuple unpacking allows multiple assignments in a single statement: a gets 3 and b gets 7 simultaneously.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Compares a and b",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Creates two strings",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Both variables become 3",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Assigns 3 to a and 7 to b",
            "isCorrect": true
          }
        ],
        "matchPairs": [
          {
            "left": "a, b = 3, 7",
            "right": "Assigns 3 to a and 7 to b"
          }
        ],
        "matchDistractors": [
          "Compares a and b",
          "Creates two strings",
          "Both variables become 3"
        ],
        "blankSnippet": "a, b = 3, 7  # Match the purpose"
      },
      {
        "id": "v2_g3_q7",
        "gameId": 3,
        "challengeNum": 7,
        "title": "Milan Matcher #7",
        "task": "rate = 0.18",
        "expectedOutput": "Float",
        "starterCode": "# Level 2 - Milan Matcher Q7\n",
        "hint": "Think about: Numbers containing a decimal point like 0.18 belong to Pytho...",
        "solution": "Float",
        "explanation": "Numbers containing a decimal point like 0.18 belong to Python's float (floating-point) type.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Integer",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "String",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Float",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Boolean",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "rate = 0.18",
            "right": "Float"
          }
        ],
        "matchDistractors": [
          "Integer",
          "String",
          "Boolean"
        ],
        "blankSnippet": "rate = 0.18  # Match the purpose"
      },
      {
        "id": "v2_g3_q8",
        "gameId": 3,
        "challengeNum": 8,
        "title": "Milan Matcher #8",
        "task": "MAX_USERS = 100",
        "expectedOutput": "A constant-style naming convention",
        "starterCode": "# Level 2 - Milan Matcher Q8\n",
        "hint": "Think about: By PEP 8 convention, identifiers written in ALL_CAPS communi...",
        "solution": "A constant-style naming convention",
        "explanation": "By PEP 8 convention, identifiers written in ALL_CAPS communicate that the value should be treated as a constant.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "A Boolean value",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "A constant-style naming convention",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "A protected keyword",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "A function call",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "MAX_USERS = 100",
            "right": "A constant-style naming convention"
          }
        ],
        "matchDistractors": [
          "A Boolean value",
          "A protected keyword",
          "A function call"
        ],
        "blankSnippet": "MAX_USERS = 100  # Match the purpose"
      },
      {
        "id": "v2_g3_q9",
        "gameId": 3,
        "challengeNum": 9,
        "title": "Milan Matcher #9",
        "task": "total = total + 5",
        "expectedOutput": "Updates total using its previous value",
        "starterCode": "# Level 2 - Milan Matcher Q9\n",
        "hint": "Think about: Python evaluates the right side 'total + 5' first using the ...",
        "solution": "Updates total using its previous value",
        "explanation": "Python evaluates the right side 'total + 5' first using the existing value, then assigns the result back to total.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Updates total using its previous value",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "Always sets total to 5",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Checks total's type",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Creates a new type",
            "isCorrect": false
          }
        ],
        "matchPairs": [
          {
            "left": "total = total + 5",
            "right": "Updates total using its previous value"
          }
        ],
        "matchDistractors": [
          "Always sets total to 5",
          "Checks total's type",
          "Creates a new type"
        ],
        "blankSnippet": "total = total + 5  # Match the purpose"
      },
      {
        "id": "v2_g3_q10",
        "gameId": 3,
        "challengeNum": 10,
        "title": "Milan Matcher #10",
        "task": "name = None",
        "expectedOutput": "A value representing the absence of a value",
        "starterCode": "# Level 2 - Milan Matcher Q10\n",
        "hint": "Think about: None is a special singleton in Python representing the absen...",
        "solution": "A value representing the absence of a value",
        "explanation": "None is a special singleton in Python representing the absence of a value or an unassigned state (NoneType).",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "The text \"None\"",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "The Boolean False",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "An empty string",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "A value representing the absence of a value",
            "isCorrect": true
          }
        ],
        "matchPairs": [
          {
            "left": "name = None",
            "right": "A value representing the absence of a value"
          }
        ],
        "matchDistractors": [
          "The text \"None\"",
          "The Boolean False",
          "An empty string"
        ],
        "blankSnippet": "name = None  # Match the purpose"
      }
    ]
  },
  {
    "id": 4,
    "gameType": "output_predictor",
    "title": "Game 4 — Think: Quantum Output Predictor",
    "shortTitle": "Quantum Predictor",
    "subtitle": "10 Questions • Predict the exact runtime values and types of Python statements.",
    "badge": "4",
    "description": "Predict outputs for reassignments, type casting, chained assignment, and None.",
    "icon": "🔮",
    "themeColor": "from-purple-500 to-pink-600",
    "activeColor": "#8b5cf6",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g4_q1",
        "gameId": 4,
        "challengeNum": 1,
        "title": "Quantum Predictor #1",
        "task": "After x = 10 followed by x = 20, what is x?",
        "expectedOutput": "20",
        "starterCode": "# Predict output for:\nAfter x = 10 followed by x = 20, what is x?",
        "hint": "Think about: The second assignment replaces the first value....",
        "solution": "20",
        "explanation": "The second assignment replaces the first value.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "None",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "10",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "30",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "20",
            "isCorrect": true
          }
        ],
        "predictorChoices": [
          "None",
          "10",
          "30",
          "20"
        ]
      },
      {
        "id": "v2_g4_q2",
        "gameId": 4,
        "challengeNum": 2,
        "title": "Quantum Predictor #2",
        "task": "What type does type(7) report?",
        "expectedOutput": "int",
        "starterCode": "# Predict output for:\nWhat type does type(7) report?",
        "hint": "Think about: 7 is a whole number without a decimal point, so type(7) repo...",
        "solution": "int",
        "explanation": "7 is a whole number without a decimal point, so type(7) reports <class 'int'>.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "int",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "str",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "float",
          "bool",
          "int",
          "str"
        ]
      },
      {
        "id": "v2_g4_q3",
        "gameId": 4,
        "challengeNum": 3,
        "title": "Quantum Predictor #3",
        "task": "What type does type(7.0) report?",
        "expectedOutput": "float",
        "starterCode": "# Predict output for:\nWhat type does type(7.0) report?",
        "hint": "Think about: 7.0 contains a decimal point, which makes Python classify it...",
        "solution": "float",
        "explanation": "7.0 contains a decimal point, which makes Python classify it as a floating-point number (float).",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "float",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "int",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "str",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "bool",
          "float",
          "int",
          "str"
        ]
      },
      {
        "id": "v2_g4_q4",
        "gameId": 4,
        "challengeNum": 4,
        "title": "Quantum Predictor #4",
        "task": "What is the result of int(\"25\")?",
        "expectedOutput": "25",
        "starterCode": "# Predict output for:\nWhat is the result of int(\"25\")?",
        "hint": "Think about: The int() function parses the string '25' and converts it in...",
        "solution": "25",
        "explanation": "The int() function parses the string '25' and converts it into the numeric integer 25.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "25",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "25.0",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "True",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "\"25\"",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "25",
          "25.0",
          "True",
          "\"25\""
        ]
      },
      {
        "id": "v2_g4_q5",
        "gameId": 4,
        "challengeNum": 5,
        "title": "Quantum Predictor #5",
        "task": "What is the type of \"25\" before conversion?",
        "expectedOutput": "str",
        "starterCode": "# Predict output for:\nWhat is the type of \"25\" before conversion?",
        "hint": "Think about: Because '25' is enclosed in quotes, its data type is str (st...",
        "solution": "str",
        "explanation": "Because '25' is enclosed in quotes, its data type is str (string) before any conversion occurs.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "int",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "str",
            "isCorrect": true
          }
        ],
        "predictorChoices": [
          "bool",
          "int",
          "float",
          "str"
        ]
      },
      {
        "id": "v2_g4_q6",
        "gameId": 4,
        "challengeNum": 6,
        "title": "Quantum Predictor #6",
        "task": "What value is assigned by a = b = 6?",
        "expectedOutput": "Both a and b are 6",
        "starterCode": "# Predict output for:\nWhat value is assigned by a = b = 6?",
        "hint": "Think about: Chained assignment a = b = 6 binds both variable identifiers...",
        "solution": "Both a and b are 6",
        "explanation": "Chained assignment a = b = 6 binds both variable identifiers to the integer value 6.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "a is 0, b is 6",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "a is 6, b is 0",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Both a and b are 6",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "a is 6, b is None",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "a is 0, b is 6",
          "a is 6, b is 0",
          "Both a and b are 6",
          "a is 6, b is None"
        ]
      },
      {
        "id": "v2_g4_q7",
        "gameId": 4,
        "challengeNum": 7,
        "title": "Quantum Predictor #7",
        "task": "What is the type of False?",
        "expectedOutput": "bool",
        "starterCode": "# Predict output for:\nWhat is the type of False?",
        "hint": "Think about: False is a Boolean literal in Python representing falsehood,...",
        "solution": "bool",
        "explanation": "False is a Boolean literal in Python representing falsehood, belonging to type bool.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "str",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "int",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "float",
          "bool",
          "str",
          "int"
        ]
      },
      {
        "id": "v2_g4_q8",
        "gameId": 4,
        "challengeNum": 8,
        "title": "Quantum Predictor #8",
        "task": "What does str(100) produce?",
        "expectedOutput": "The string \"100\"",
        "starterCode": "# Predict output for:\nWhat does str(100) produce?",
        "hint": "Think about: The str(100) function converts the integer 100 into its stri...",
        "solution": "The string \"100\"",
        "explanation": "The str(100) function converts the integer 100 into its string representation '100'.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "The string \"100\"",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "The float 100.0",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "The Boolean True",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "The integer 100",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "The string \"100\"",
          "The float 100.0",
          "The Boolean True",
          "The integer 100"
        ]
      },
      {
        "id": "v2_g4_q9",
        "gameId": 4,
        "challengeNum": 9,
        "title": "Quantum Predictor #9",
        "task": "After sales = 1000 and sales = sales + 250, what is sales?",
        "expectedOutput": "1250",
        "starterCode": "# Predict output for:\nAfter sales = 1000 and sales = sales + 250, what is sales?",
        "hint": "Think about: The arithmetic expression 1000 + 250 computes to 1250, which...",
        "solution": "1250",
        "explanation": "The arithmetic expression 1000 + 250 computes to 1250, which is then reassigned back to sales.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "None",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "1000",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "250",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "1250",
            "isCorrect": true
          }
        ],
        "predictorChoices": [
          "None",
          "1000",
          "250",
          "1250"
        ]
      },
      {
        "id": "v2_g4_q10",
        "gameId": 4,
        "challengeNum": 10,
        "title": "Quantum Predictor #10",
        "task": "What is the type of None?",
        "expectedOutput": "NoneType",
        "starterCode": "# Predict output for:\nWhat is the type of None?",
        "hint": "Think about: None belongs to its own dedicated built-in type called NoneT...",
        "solution": "NoneType",
        "explanation": "None belongs to its own dedicated built-in type called NoneType.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "str",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "int",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "NoneType",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "bool",
            "isCorrect": false
          }
        ],
        "predictorChoices": [
          "str",
          "int",
          "NoneType",
          "bool"
        ]
      }
    ]
  },
  {
    "id": 5,
    "gameType": "bug_hunter",
    "title": "Game 5 — Debug: Cyber Bug Hunter",
    "shortTitle": "Bug Hunter",
    "subtitle": "10 Questions • Hunt down variable naming violations and type mismatches.",
    "badge": "5",
    "description": "Fix illegal identifier names, ValueError on int('nine'), and string/bool confusion.",
    "icon": "🐞",
    "themeColor": "from-rose-500 to-red-600",
    "activeColor": "#f43f5e",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(244, 63, 94, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g5_q1",
        "gameId": 5,
        "challengeNum": 1,
        "title": "Bug Hunter #1",
        "task": "A learner writes 2total = 50. What is wrong?",
        "expectedOutput": "A variable name cannot begin with a digit",
        "starterCode": "# Level 2 - Bug Hunter Q1\n",
        "hint": "Think about: Python identifier rules strictly forbid variable names from ...",
        "solution": "A variable name cannot begin with a digit",
        "explanation": "Python identifier rules strictly forbid variable names from starting with digits (0-9).",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "50 is invalid",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Assignment is never allowed",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "A variable name cannot begin with a digit",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Variables cannot contain letters",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner writes 2total = 50. What is wrong?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q2",
        "gameId": 5,
        "challengeNum": 2,
        "title": "Bug Hunter #2",
        "task": "A learner uses sales-total as a variable name. What is the issue?",
        "expectedOutput": "The hyphen is interpreted as subtraction, not part of a normal identifier",
        "starterCode": "# Level 2 - Bug Hunter Q2\n",
        "hint": "Think about: In Python, the hyphen '-' is treated as the subtraction oper...",
        "solution": "The hyphen is interpreted as subtraction, not part of a normal identifier",
        "explanation": "In Python, the hyphen '-' is treated as the subtraction operator, not a valid character in variable names. Use sales_total instead.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Hyphens always mean multiplication",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "The hyphen is interpreted as subtraction, not part of a normal identifier",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "All variable names must be uppercase",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Numbers cannot be assigned",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner uses sales-total as a variable name. What is the issue?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q3",
        "gameId": 5,
        "challengeNum": 3,
        "title": "Bug Hunter #3",
        "task": "A learner assumes price = \"99\" stores a number. What is the issue?",
        "expectedOutput": "The value is text, not a numeric value",
        "starterCode": "# Level 2 - Bug Hunter Q3\n",
        "hint": "Think about: Surrounding 99 with quotes makes it a string (str). Performi...",
        "solution": "The value is text, not a numeric value",
        "explanation": "Surrounding 99 with quotes makes it a string (str). Performing arithmetic like price + 10 will raise a TypeError.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "The value is text, not a numeric value",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "The assignment is impossible",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Quotes make it a float",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "All strings become integers",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner assumes price = \"99\" stores a number. What is the issue?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q4",
        "gameId": 5,
        "challengeNum": 4,
        "title": "Bug Hunter #4",
        "task": "A learner uses int(\"nine\"). What should they expect?",
        "expectedOutput": "A ValueError",
        "starterCode": "# Level 2 - Bug Hunter Q4\n",
        "hint": "Think about: int() cannot convert English words like 'nine' into numbers;...",
        "solution": "A ValueError",
        "explanation": "int() cannot convert English words like 'nine' into numbers; it raises a ValueError at runtime.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "The integer 9 automatically",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "The float 9.0",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "The string nine as an integer",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "A ValueError",
            "isCorrect": true
          }
        ],
        "bugCode": "A learner uses int(\"nine\"). What should they expect?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q5",
        "gameId": 5,
        "challengeNum": 5,
        "title": "Bug Hunter #5",
        "task": "A learner writes is_valid = \"False\" when a Boolean is intended. What is the problem?",
        "expectedOutput": "The value is a string, not False",
        "starterCode": "# Level 2 - Bug Hunter Q5\n",
        "hint": "Think about: 'False' in quotes is a string literal (which is truthy!). Th...",
        "solution": "The value is a string, not False",
        "explanation": "'False' in quotes is a string literal (which is truthy!). The actual Boolean literal is unquoted False.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "It is an integer",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "It is None",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "The value is a string, not False",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "It is already a Boolean",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner writes is_valid = \"False\" when a Boolean is intended. What is the problem?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q6",
        "gameId": 5,
        "challengeNum": 6,
        "title": "Bug Hunter #6",
        "task": "A learner says MAX_LIMIT = 50 can never change. What is incorrect?",
        "expectedOutput": "Uppercase naming is a convention, not enforced immutability",
        "starterCode": "# Level 2 - Bug Hunter Q6\n",
        "hint": "Think about: Python does not have built-in constants. Uppercase naming is...",
        "solution": "Uppercase naming is a convention, not enforced immutability",
        "explanation": "Python does not have built-in constants. Uppercase naming is a convention for developers, not enforced by the interpreter.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Uppercase names are invalid",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Uppercase naming is a convention, not enforced immutability",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "50 cannot be assigned",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Constants must be strings",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner says MAX_LIMIT = 50 can never change. What is incorrect?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q7",
        "gameId": 5,
        "challengeNum": 7,
        "title": "Bug Hunter #7",
        "task": "A learner expects type(\"3.5\") to return float. Why is that wrong?",
        "expectedOutput": "The value is a string",
        "starterCode": "# Level 2 - Bug Hunter Q7\n",
        "hint": "Think about: Quotation marks define string literals in Python. '3.5' is o...",
        "solution": "The value is a string",
        "explanation": "Quotation marks define string literals in Python. '3.5' is of type str until converted with float('3.5').",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "The value is a string",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "type() always returns int",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Quotes are ignored",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "All numbers are floats",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner expects type(\"3.5\") to return float. Why is that wrong?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q8",
        "gameId": 5,
        "challengeNum": 8,
        "title": "Bug Hunter #8",
        "task": "A learner writes x = 5, then x = 8, and expects 13. What is the error?",
        "expectedOutput": "They confused reassignment with addition",
        "starterCode": "# Level 2 - Bug Hunter Q8\n",
        "hint": "Think about: Writing x = 8 reassigns x; it does not add to the previous v...",
        "solution": "They confused reassignment with addition",
        "explanation": "Writing x = 8 reassigns x; it does not add to the previous value of 5. To accumulate, use x = x + 8 or x += 8.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Python cannot reassign variables",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "All variables are constants",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "The second assignment is ignored",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "They confused reassignment with addition",
            "isCorrect": true
          }
        ],
        "bugCode": "A learner writes x = 5, then x = 8, and expects 13. What is the error?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q9",
        "gameId": 5,
        "challengeNum": 9,
        "title": "Bug Hunter #9",
        "task": "A learner converts int(\"12.5\") and expects 12.5. What is the issue?",
        "expectedOutput": "The string contains a decimal point; float(\"12.5\") is appropriate",
        "starterCode": "# Level 2 - Bug Hunter Q9\n",
        "hint": "Think about: int() cannot directly parse strings with a decimal point lik...",
        "solution": "The string contains a decimal point; float(\"12.5\") is appropriate",
        "explanation": "int() cannot directly parse strings with a decimal point like '12.5'. Use float('12.5') instead.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "12.5 is a Boolean",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Variables cannot contain decimals",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "The string contains a decimal point; float(\"12.5\") is appropriate",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "int() always returns text",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner converts int(\"12.5\") and expects 12.5. What is the issue?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      },
      {
        "id": "v2_g5_q10",
        "gameId": 5,
        "challengeNum": 10,
        "title": "Bug Hunter #10",
        "task": "A learner names a variable class. What is wrong?",
        "expectedOutput": "class is a reserved keyword",
        "starterCode": "# Level 2 - Bug Hunter Q10\n",
        "hint": "Think about: 'class' is a reserved Python keyword used to define classes ...",
        "solution": "class is a reserved keyword",
        "explanation": "'class' is a reserved Python keyword used to define classes and cannot be used as a variable name.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Names must all start uppercase",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "class is a reserved keyword",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "class is a float",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Keywords are always allowed as identifiers",
            "isCorrect": false
          }
        ],
        "bugCode": "A learner names a variable class. What is wrong?",
        "bugLine": 1,
        "bugType": "Variable / Type Syntax Bug"
      }
    ]
  },
  {
    "id": 6,
    "gameType": "blueprint_builder",
    "title": "Game 6 — Build: Component Blueprint Machine",
    "shortTitle": "Blueprint Architect",
    "subtitle": "10 Questions • Design optimal data architectures for real business applications.",
    "badge": "6",
    "description": "Select the optimal types (str, int, float, bool) for sales, revenue, and customer entities.",
    "icon": "🏗️",
    "themeColor": "from-cyan-500 to-blue-600",
    "activeColor": "#06b6d4",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g6_q1",
        "gameId": 6,
        "challengeNum": 1,
        "title": "Blueprint Architect #1",
        "task": "Store a customer's name. Choose the best data type.",
        "expectedOutput": "str",
        "starterCode": "# Level 2 - Blueprint Architect Q1\n",
        "hint": "Think about: Customer names contain text characters, so the string (str) ...",
        "solution": "str",
        "explanation": "Customer names contain text characters, so the string (str) data type is the appropriate choice.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "str",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "int",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "bool",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Store a customer's name. Choose the best data type."
        ],
        "blueprintComponents": [
          "float",
          "str",
          "int",
          "bool"
        ],
        "blueprintExpectedSlots": [
          "str"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q2",
        "gameId": 6,
        "challengeNum": 2,
        "title": "Blueprint Architect #2",
        "task": "Store the number of orders, such as 12. Choose the best type.",
        "expectedOutput": "int",
        "starterCode": "# Level 2 - Blueprint Architect Q2\n",
        "hint": "Think about: Order quantities are discrete whole numbers, making int the ...",
        "solution": "int",
        "explanation": "Order quantities are discrete whole numbers, making int the natural and optimal data type.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "int",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "str only",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "float only",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Store the number of orders, such as 12. Choose the best type."
        ],
        "blueprintComponents": [
          "int",
          "str only",
          "bool",
          "float only"
        ],
        "blueprintExpectedSlots": [
          "int"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q3",
        "gameId": 6,
        "challengeNum": 3,
        "title": "Blueprint Architect #3",
        "task": "Store a discount rate such as 0.15. Choose the best type.",
        "expectedOutput": "float",
        "starterCode": "# Level 2 - Blueprint Architect Q3\n",
        "hint": "Think about: Discount percentages like 0.15 contain fractional decimal pa...",
        "solution": "float",
        "explanation": "Discount percentages like 0.15 contain fractional decimal parts, requiring the float data type.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "str",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "NoneType",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "float",
            "isCorrect": true
          }
        ],
        "blueprintSpec": [
          "Store a discount rate such as 0.15. Choose the best type."
        ],
        "blueprintComponents": [
          "str",
          "bool",
          "NoneType",
          "float"
        ],
        "blueprintExpectedSlots": [
          "float"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q4",
        "gameId": 6,
        "challengeNum": 4,
        "title": "Blueprint Architect #4",
        "task": "Store whether an invoice is paid. Choose the best type.",
        "expectedOutput": "bool",
        "starterCode": "# Level 2 - Blueprint Architect Q4\n",
        "hint": "Think about: Whether an invoice is paid has two logical states (yes/no), ...",
        "solution": "bool",
        "explanation": "Whether an invoice is paid has two logical states (yes/no), making bool (True/False) the ideal type.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "int only",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "str only",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "bool",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "float",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Store whether an invoice is paid. Choose the best type."
        ],
        "blueprintComponents": [
          "int only",
          "str only",
          "bool",
          "float"
        ],
        "blueprintExpectedSlots": [
          "bool"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q5",
        "gameId": 6,
        "challengeNum": 5,
        "title": "Blueprint Architect #5",
        "task": "Receive numeric text \"120\" and use it in arithmetic. What is the key step?",
        "expectedOutput": "Convert it to a numeric type",
        "starterCode": "# Level 2 - Blueprint Architect Q5\n",
        "hint": "Think about: Raw text '120' must be converted with int('120') before it c...",
        "solution": "Convert it to a numeric type",
        "explanation": "Raw text '120' must be converted with int('120') before it can be used in arithmetic operations.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Rename it",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Convert it to a numeric type",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "Turn it into None",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Use it without checking",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Receive numeric text \"120\" and use it in arithmetic. What is the key step?"
        ],
        "blueprintComponents": [
          "Rename it",
          "Convert it to a numeric type",
          "Turn it into None",
          "Use it without checking"
        ],
        "blueprintExpectedSlots": [
          "Convert it to a numeric type"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q6",
        "gameId": 6,
        "challengeNum": 6,
        "title": "Blueprint Architect #6",
        "task": "Name a variable for monthly revenue using a conventional style.",
        "expectedOutput": "monthly_revenue",
        "starterCode": "# Level 2 - Blueprint Architect Q6\n",
        "hint": "Think about: PEP 8 convention recommends lowercase words separated by und...",
        "solution": "monthly_revenue",
        "explanation": "PEP 8 convention recommends lowercase words separated by underscores (snake_case), such as monthly_revenue.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "monthly_revenue",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "monthly-revenue",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "2monthly",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "monthly revenue",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Name a variable for monthly revenue using a conventional style."
        ],
        "blueprintComponents": [
          "monthly_revenue",
          "monthly-revenue",
          "2monthly",
          "monthly revenue"
        ],
        "blueprintExpectedSlots": [
          "monthly_revenue"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q7",
        "gameId": 6,
        "challengeNum": 7,
        "title": "Blueprint Architect #7",
        "task": "Represent a setting intended as a constant by convention.",
        "expectedOutput": "MAX_RETRIES",
        "starterCode": "# Level 2 - Blueprint Architect Q7\n",
        "hint": "Think about: Configuration values intended as constants should use SCREAM...",
        "solution": "MAX_RETRIES",
        "explanation": "Configuration values intended as constants should use SCREAMING_SNAKE_CASE like MAX_RETRIES by convention.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "max retries",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "2RETRIES",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "class",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "MAX_RETRIES",
            "isCorrect": true
          }
        ],
        "blueprintSpec": [
          "Represent a setting intended as a constant by convention."
        ],
        "blueprintComponents": [
          "max retries",
          "2RETRIES",
          "class",
          "MAX_RETRIES"
        ],
        "blueprintExpectedSlots": [
          "MAX_RETRIES"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q8",
        "gameId": 6,
        "challengeNum": 8,
        "title": "Blueprint Architect #8",
        "task": "Assign 10 to both x and y in one statement.",
        "expectedOutput": "x = y = 10",
        "starterCode": "# Level 2 - Blueprint Architect Q8\n",
        "hint": "Think about: Chained assignment x = y = 10 cleanly assigns the value 10 t...",
        "solution": "x = y = 10",
        "explanation": "Chained assignment x = y = 10 cleanly assigns the value 10 to both variables in a single readable line.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "x, y == 10",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "x == y == 10",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "x = y = 10",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "10 = x = y",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Assign 10 to both x and y in one statement."
        ],
        "blueprintComponents": [
          "x, y == 10",
          "x == y == 10",
          "x = y = 10",
          "10 = x = y"
        ],
        "blueprintExpectedSlots": [
          "x = y = 10"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q9",
        "gameId": 6,
        "challengeNum": 9,
        "title": "Blueprint Architect #9",
        "task": "Inspect the type of a variable called amount. Which tool is appropriate?",
        "expectedOutput": "type(amount)",
        "starterCode": "# Level 2 - Blueprint Architect Q9\n",
        "hint": "Think about: The built-in type(amount) function returns the exact data ty...",
        "solution": "type(amount)",
        "explanation": "The built-in type(amount) function returns the exact data type of any variable or value.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "int(amount) only",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "type(amount)",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "None(amount)",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "input(amount)",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "Inspect the type of a variable called amount. Which tool is appropriate?"
        ],
        "blueprintComponents": [
          "int(amount) only",
          "type(amount)",
          "None(amount)",
          "input(amount)"
        ],
        "blueprintExpectedSlots": [
          "type(amount)"
        ],
        "blueprintSlotsCount": 1
      },
      {
        "id": "v2_g6_q10",
        "gameId": 6,
        "challengeNum": 10,
        "title": "Blueprint Architect #10",
        "task": "A sales record includes customer name, order count and paid status. Which combination is sensible?",
        "expectedOutput": "str, int and bool, respectively",
        "starterCode": "# Level 2 - Blueprint Architect Q10\n",
        "hint": "Think about: A name is text (str), an order count is an integer (int), an...",
        "solution": "str, int and bool, respectively",
        "explanation": "A name is text (str), an order count is an integer (int), and paid status is a Boolean (bool).",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "str, int and bool, respectively",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "All values must be strings",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "All values must be floats",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "All values must be Booleans",
            "isCorrect": false
          }
        ],
        "blueprintSpec": [
          "A sales record includes customer name, order count and paid status. Which combination is sensible?"
        ],
        "blueprintComponents": [
          "str, int and bool, respectively",
          "All values must be strings",
          "All values must be floats",
          "All values must be Booleans"
        ],
        "blueprintExpectedSlots": [
          "str, int and bool, respectively"
        ],
        "blueprintSlotsCount": 1
      }
    ]
  },
  {
    "id": 7,
    "gameType": "logic_builder",
    "title": "Game 7 — Logic Builder",
    "shortTitle": "Logic Builder",
    "subtitle": "10 Questions • Formulate real-world data handling and type safety logic.",
    "badge": "7",
    "description": "Reason about variable lifetimes, case sensitivity, type casting, and state representation.",
    "icon": "🧩",
    "themeColor": "from-violet-500 to-indigo-600",
    "activeColor": "#6366f1",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g7_q1",
        "gameId": 7,
        "challengeNum": 1,
        "title": "Logic Builder #1",
        "task": "A sales analyst adds a numeric amount stored as text. What should they consider first?",
        "expectedOutput": "Whether conversion to a numeric type is needed",
        "starterCode": "# Level 2 - Logic Builder Q1\n",
        "hint": "Think about: Before doing calculations, text representations of numbers m...",
        "solution": "Whether conversion to a numeric type is needed",
        "explanation": "Before doing calculations, text representations of numbers must be inspected and converted with int() or float().",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Whether conversion to a numeric type is needed",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "Whether the screen is large enough",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Whether the variable is uppercase",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Whether Python supports names",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "Whether conversion to a numeric type is needed",
            "correctIndex": 0
          },
          {
            "id": "line-1",
            "text": "Whether the screen is large enough",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "Whether the variable is uppercase",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "Whether Python supports names",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q2",
        "gameId": 7,
        "challengeNum": 2,
        "title": "Logic Builder #2",
        "task": "Two values must be assigned together. Which feature can help?",
        "expectedOutput": "Multiple assignment",
        "starterCode": "# Level 2 - Logic Builder Q2\n",
        "hint": "Think about: Multiple assignment (e.g. x, y = 10, 20) lets developers ass...",
        "solution": "Multiple assignment",
        "explanation": "Multiple assignment (e.g. x, y = 10, 20) lets developers assign several variables in one clean statement.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "A Boolean only",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "A type error",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "A comment only",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Multiple assignment",
            "isCorrect": true
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "A Boolean only",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "A type error",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "A comment only",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "Multiple assignment",
            "correctIndex": 0
          }
        ]
      },
      {
        "id": "v2_g7_q3",
        "gameId": 7,
        "challengeNum": 3,
        "title": "Logic Builder #3",
        "task": "A program must represent the absence of a customer's age. Which value may represent this?",
        "expectedOutput": "None",
        "starterCode": "# Level 2 - Logic Builder Q3\n",
        "hint": "Think about: None is Python's standard way to signify missing, absent, or...",
        "solution": "None",
        "explanation": "None is Python's standard way to signify missing, absent, or uninitialized values without using arbitrary dummy numbers.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "0 always",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "\"None\"",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "None",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "False always",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "0 always",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "\"None\"",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "None",
            "correctIndex": 0
          },
          {
            "id": "line-3",
            "text": "False always",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q4",
        "gameId": 7,
        "challengeNum": 4,
        "title": "Logic Builder #4",
        "task": "A price is 149.99. Which type usually fits it in a basic Python example?",
        "expectedOutput": "float",
        "starterCode": "# Level 2 - Logic Builder Q4\n",
        "hint": "Think about: Prices with decimal cents (like 149.99) are stored as floati...",
        "solution": "float",
        "explanation": "Prices with decimal cents (like 149.99) are stored as floating-point numbers (float) in basic Python.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "NoneType",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "float",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "bool",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "str only",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "NoneType",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "float",
            "correctIndex": 0
          },
          {
            "id": "line-2",
            "text": "bool",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "str only",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q5",
        "gameId": 7,
        "challengeNum": 5,
        "title": "Logic Builder #5",
        "task": "A variable named OrderCount is valid. Which statement is true?",
        "expectedOutput": "Python is case-sensitive, and this differs from ordercount",
        "starterCode": "# Level 2 - Logic Builder Q5\n",
        "hint": "Think about: Python is strictly case-sensitive: OrderCount, orderCount, a...",
        "solution": "Python is case-sensitive, and this differs from ordercount",
        "explanation": "Python is strictly case-sensitive: OrderCount, orderCount, and ordercount are completely different variables.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Python is case-sensitive, and this differs from ordercount",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "It is always the same as ordercount",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "All names must use snake_case to run",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Capital letters are forbidden",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "Python is case-sensitive, and this differs from ordercount",
            "correctIndex": 0
          },
          {
            "id": "line-1",
            "text": "It is always the same as ordercount",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "All names must use snake_case to run",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "Capital letters are forbidden",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q6",
        "gameId": 7,
        "challengeNum": 6,
        "title": "Logic Builder #6",
        "task": "A business needs a clear name for total sales. Which is most readable?",
        "expectedOutput": "total_sales",
        "starterCode": "# Level 2 - Logic Builder Q6\n",
        "hint": "Think about: Clear snake_case naming like total_sales communicates busine...",
        "solution": "total_sales",
        "explanation": "Clear snake_case naming like total_sales communicates business intent directly and conforms to PEP 8 standards.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "t",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "q",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "x1",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "total_sales",
            "isCorrect": true
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "t",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "q",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "x1",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "total_sales",
            "correctIndex": 0
          }
        ]
      },
      {
        "id": "v2_g7_q7",
        "gameId": 7,
        "challengeNum": 7,
        "title": "Logic Builder #7",
        "task": "A program needs to determine whether a supplied value is text or numeric. What should it do?",
        "expectedOutput": "Inspect and validate the value and its type",
        "starterCode": "# Level 2 - Logic Builder Q7\n",
        "hint": "Think about: Defensive code inspects variable types using type() or isins...",
        "solution": "Inspect and validate the value and its type",
        "explanation": "Defensive code inspects variable types using type() or isinstance() before performing operations on user data.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Guess based on the variable name",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Assume all inputs are integers",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Inspect and validate the value and its type",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Convert every value to True",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "Guess based on the variable name",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "Assume all inputs are integers",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "Inspect and validate the value and its type",
            "correctIndex": 0
          },
          {
            "id": "line-3",
            "text": "Convert every value to True",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q8",
        "gameId": 7,
        "challengeNum": 8,
        "title": "Logic Builder #8",
        "task": "A setting is written as TAX_RATE = 0.18. What does that communicate?",
        "expectedOutput": "It is intended to be a constant",
        "starterCode": "# Level 2 - Logic Builder Q8\n",
        "hint": "Think about: UPPERCASE identifiers like TAX_RATE signal to developers tha...",
        "solution": "It is intended to be a constant",
        "explanation": "UPPERCASE identifiers like TAX_RATE signal to developers that this value represents an application constant.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "It is a reserved keyword",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "It is intended to be a constant",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "Python prevents all reassignment",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "It is always a string",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "It is a reserved keyword",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "It is intended to be a constant",
            "correctIndex": 0
          },
          {
            "id": "line-2",
            "text": "Python prevents all reassignment",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "It is always a string",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q9",
        "gameId": 7,
        "challengeNum": 9,
        "title": "Logic Builder #9",
        "task": "An analyst writes revenue = revenue + new_sale. What must be true first?",
        "expectedOutput": "revenue must already have an appropriate initial value",
        "starterCode": "# Level 2 - Logic Builder Q9\n",
        "hint": "Think about: Python evaluates the right side first; if revenue is not def...",
        "solution": "revenue must already have an appropriate initial value",
        "explanation": "Python evaluates the right side first; if revenue is not defined beforehand, a NameError will be raised.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "revenue must already have an appropriate initial value",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "revenue must be a keyword",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "new_sale must be text",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Both names must be uppercase",
            "isCorrect": false
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "revenue must already have an appropriate initial value",
            "correctIndex": 0
          },
          {
            "id": "line-1",
            "text": "revenue must be a keyword",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "new_sale must be text",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "Both names must be uppercase",
            "correctIndex": 4
          }
        ]
      },
      {
        "id": "v2_g7_q10",
        "gameId": 7,
        "challengeNum": 10,
        "title": "Logic Builder #10",
        "task": "A report stores a status as True or False. Why is bool useful?",
        "expectedOutput": "It represents a truth value clearly",
        "starterCode": "# Level 2 - Logic Builder Q10\n",
        "hint": "Think about: Boolean values (True and False) represent binary conditional...",
        "solution": "It represents a truth value clearly",
        "explanation": "Boolean values (True and False) represent binary conditional states without ambiguity.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "It stores decimal precision",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "It automatically creates reports",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "It stores any sentence",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "It represents a truth value clearly",
            "isCorrect": true
          }
        ],
        "logicLines": [
          {
            "id": "line-0",
            "text": "It stores decimal precision",
            "correctIndex": 1
          },
          {
            "id": "line-1",
            "text": "It automatically creates reports",
            "correctIndex": 2
          },
          {
            "id": "line-2",
            "text": "It stores any sentence",
            "correctIndex": 3
          },
          {
            "id": "line-3",
            "text": "It represents a truth value clearly",
            "correctIndex": 0
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "gameType": "boss_fight",
    "title": "Game 8 — BOSS FIGHT: Data Type Guardian",
    "shortTitle": "Boss: Data Guardian",
    "subtitle": "10 Boss Challenges • Defeat the Cyber Guardian with mastery of variables and types!",
    "badge": "8",
    "description": "Face the ultimate 10-phase boss battle testing all core Chapter 2 concepts.",
    "icon": "⚔️",
    "themeColor": "from-red-600 to-orange-600",
    "activeColor": "#dc2626",
    "mascotImg": "/images/python_mascot_3d.png",
    "bgGradient": "radial-gradient(circle at 50% 20%, rgba(220, 38, 38, 0.18) 0%, transparent 70%)",
    "challenges": [
      {
        "id": "v2_g8_q1",
        "gameId": 8,
        "challengeNum": 1,
        "title": "Boss: Data Guardian #1",
        "task": "A sales file provides quantity as the text \"8\" and unit price as 12.5. What is a sensible preparation step before multiplying?",
        "expectedOutput": "Convert quantity to a numeric type and validate both values",
        "starterCode": "# Level 2 - Boss: Data Guardian Q1\n",
        "hint": "Think about: Strings cannot be multiplied by floats; converting quantity ...",
        "solution": "Convert quantity to a numeric type and validate both values",
        "explanation": "Strings cannot be multiplied by floats; converting quantity with int('8') ensures correct math: 8 * 12.5 = 100.0.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Set both values to None",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Convert the unit price to text",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Ignore the quantity",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Convert quantity to a numeric type and validate both values",
            "isCorrect": true
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: Convert quantity to a nu"
      },
      {
        "id": "v2_g8_q2",
        "gameId": 8,
        "challengeNum": 2,
        "title": "Boss: Data Guardian #2",
        "task": "Which statement about Python variables is correct?",
        "expectedOutput": "A variable name refers to a value and can be reassigned",
        "starterCode": "# Level 2 - Boss: Data Guardian Q2\n",
        "hint": "Think about: In Python, variables are labels referring to values in memor...",
        "solution": "A variable name refers to a value and can be reassigned",
        "explanation": "In Python, variables are labels referring to values in memory and can be dynamically reassigned to new values.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "A variable name must always be uppercase",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Every variable is a constant",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "A variable name refers to a value and can be reassigned",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "A variable can never be reassigned",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: A variable name refers t"
      },
      {
        "id": "v2_g8_q3",
        "gameId": 8,
        "challengeNum": 3,
        "title": "Boss: Data Guardian #3",
        "task": "Which is the most suitable identifier for a customer's total purchase amount?",
        "expectedOutput": "customer_total",
        "starterCode": "# Level 2 - Boss: Data Guardian Q3\n",
        "hint": "Think about: customer_total follows PEP 8 snake_case, does not start with...",
        "solution": "customer_total",
        "explanation": "customer_total follows PEP 8 snake_case, does not start with digits, and contains no invalid hyphens or spaces.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "customer total",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "customer_total",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "2total",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "customer-total",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: customer_total"
      },
      {
        "id": "v2_g8_q4",
        "gameId": 8,
        "challengeNum": 4,
        "title": "Boss: Data Guardian #4",
        "task": "A dataset has values True, 45, 6.75 and \"Mira\". Which type mapping is correct?",
        "expectedOutput": "bool, int, float, str",
        "starterCode": "# Level 2 - Boss: Data Guardian Q4\n",
        "hint": "Think about: True is bool, 45 is int, 6.75 is float, and 'Mira' is str, m...",
        "solution": "bool, int, float, str",
        "explanation": "True is bool, 45 is int, 6.75 is float, and 'Mira' is str, matching the sequence bool, int, float, str.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "bool, int, float, str",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "int, bool, str, float",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "float, str, bool, int",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "str, float, int, bool",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: bool, int, float, str"
      },
      {
        "id": "v2_g8_q5",
        "gameId": 8,
        "challengeNum": 5,
        "title": "Boss: Data Guardian #5",
        "task": "What is the result of converting \"45\" with int()?",
        "expectedOutput": "The integer 45",
        "starterCode": "# Level 2 - Boss: Data Guardian Q5\n",
        "hint": "Think about: int('45') parses the numeric digits and returns the integer ...",
        "solution": "The integer 45",
        "explanation": "int('45') parses the numeric digits and returns the integer 45.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "True",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "\"45\"",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "45.0",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "The integer 45",
            "isCorrect": true
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: The integer 45"
      },
      {
        "id": "v2_g8_q6",
        "gameId": 8,
        "challengeNum": 6,
        "title": "Boss: Data Guardian #6",
        "task": "Why might int(\"45.2\") fail?",
        "expectedOutput": "The string is not a valid integer literal",
        "starterCode": "# Level 2 - Boss: Data Guardian Q6\n",
        "hint": "Think about: int() expects integer digit strings; encountering a decimal ...",
        "solution": "The string is not a valid integer literal",
        "explanation": "int() expects integer digit strings; encountering a decimal point '.' throws a ValueError.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "All strings are already integers",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Variable names cannot contain digits",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "The string is not a valid integer literal",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Python does not support integers",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: The string is not a vali"
      },
      {
        "id": "v2_g8_q7",
        "gameId": 8,
        "challengeNum": 7,
        "title": "Boss: Data Guardian #7",
        "task": "Which statement about constants in Python is correct?",
        "expectedOutput": "Uppercase naming signals intent but does not make a value immutable",
        "starterCode": "# Level 2 - Boss: Data Guardian Q7\n",
        "hint": "Think about: Python's design philosophy relies on conventions; uppercase ...",
        "solution": "Uppercase naming signals intent but does not make a value immutable",
        "explanation": "Python's design philosophy relies on conventions; uppercase variable names signal constant intent without enforcing immutability.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "A constant is the same as None",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Uppercase naming signals intent but does not make a value immutable",
            "isCorrect": true
          },
          {
            "key": "C",
            "label": "Python rejects every reassignment to uppercase names",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Constants must always be Booleans",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: Uppercase naming signals"
      },
      {
        "id": "v2_g8_q8",
        "gameId": 8,
        "challengeNum": 8,
        "title": "Boss: Data Guardian #8",
        "task": "A program receives an empty value where a number is required. What should a robust program do?",
        "expectedOutput": "Validate the input and handle conversion errors",
        "starterCode": "# Level 2 - Boss: Data Guardian Q8\n",
        "hint": "Think about: Robust software handles missing or invalid inputs gracefully...",
        "solution": "Validate the input and handle conversion errors",
        "explanation": "Robust software handles missing or invalid inputs gracefully using validation and conversion error handling.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Validate the input and handle conversion errors",
            "isCorrect": true
          },
          {
            "key": "B",
            "label": "Always convert it to True",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Ignore all checks",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "Assume the value is 1",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: Validate the input and h"
      },
      {
        "id": "v2_g8_q9",
        "gameId": 8,
        "challengeNum": 9,
        "title": "Boss: Data Guardian #9",
        "task": "A business record has customer_name, order_count and is_returned. Which type choices are most appropriate?",
        "expectedOutput": "str, int, bool",
        "starterCode": "# Level 2 - Boss: Data Guardian Q9\n",
        "hint": "Think about: customer_name is str, order_count is int, and is_returned is...",
        "solution": "str, int, bool",
        "explanation": "customer_name is str, order_count is int, and is_returned is bool.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "int, bool, float",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "float, str, int",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "bool, float, str",
            "isCorrect": false
          },
          {
            "key": "D",
            "label": "str, int, bool",
            "isCorrect": true
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: str, int, bool"
      },
      {
        "id": "v2_g8_q10",
        "gameId": 8,
        "challengeNum": 10,
        "title": "Boss: Data Guardian #10",
        "task": "A student can choose types correctly but cannot explain why. What is the best next learning step?",
        "expectedOutput": "Explain the data meaning, predict behavior and retry with a new example",
        "starterCode": "# Level 2 - Boss: Data Guardian Q10\n",
        "hint": "Think about: True mastery comes from explaining why data types behave as ...",
        "solution": "Explain the data meaning, predict behavior and retry with a new example",
        "explanation": "True mastery comes from explaining why data types behave as they do and testing against real-world edge cases.",
        "xp": 10,
        "choiceOptions": [
          {
            "key": "A",
            "label": "Skip all business examples",
            "isCorrect": false
          },
          {
            "key": "B",
            "label": "Move directly to a harder chapter",
            "isCorrect": false
          },
          {
            "key": "C",
            "label": "Explain the data meaning, predict behavior and retry with a new example",
            "isCorrect": true
          },
          {
            "key": "D",
            "label": "Memorize the option positions",
            "isCorrect": false
          }
        ],
        "bossHpDamage": 10,
        "bossStrikeName": "Type Strike: Explain the data meaning"
      }
    ]
  }
];
