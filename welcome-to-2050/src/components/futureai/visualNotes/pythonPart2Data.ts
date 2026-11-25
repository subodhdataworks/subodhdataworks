import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M07_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Introduction to Functions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Introduction to Functions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Define",
                  "bodyEn": "Write def and a name",
                  "bodyHi": "Write def and a name",
                  "tone": "lavender"
                },
                {
                  "title": "Body",
                  "bodyEn": "Indent instructions",
                  "bodyHi": "Indent instructions",
                  "tone": "sky"
                },
                {
                  "title": "Call",
                  "bodyEn": "Run the function",
                  "bodyHi": "Run the function",
                  "tone": "green"
                },
                {
                  "title": "Reuse",
                  "bodyEn": "Call again when needed",
                  "bodyHi": "Call again when needed",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop wants to print the same welcome message for every new customer. A function stores that action in one place.",
              "bodyHi": "A shop wants to print the same welcome message for every new customer. A function stores that action in one place."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Function",
                  "Reusable code block"
                ],
                [
                  "def",
                  "Keyword that defines a function"
                ],
                [
                  "Call",
                  "Running a function"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Defining a function does not call it",
                  "hi": "Defining a function does not call it"
                },
                {
                  "en": "Use parentheses when calling",
                  "hi": "Use parentheses when calling"
                },
                {
                  "en": "Indent the body consistently",
                  "hi": "Indent the body consistently"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A function is a named block of reusable code that performs a specific task. Define it with def and run it by calling its name. Functions help avoid copying the same logic into many places.",
        "bodyHi": "A function is a named block of reusable code that performs a specific task. Define it with def and run it by calling its name. Functions help avoid copying the same logic into many places."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Introduction to Functions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def welcome():\n    print(\"Welcome to our shop\")\nwelcome()\nwelcome()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Welcome to our shop\nWelcome to our shop"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "def creates the function. The indented print() is its body. Nothing prints until welcome() is called. Calling it twice runs the body twice.",
              "bodyHi": "def creates the function. The indented print() is its body. Nothing prints until welcome() is called. Calling it twice runs the body twice."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Introduction to Functions",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def show_total():\n    price = 50\n    print(price * 3)\nshow_total()"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "150"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Functions can use local variables and later accept parameters. Give functions names that describe their action, such as calculate_total or clean_city. A function should ideally do one clear job.",
              "bodyHi": "Functions can use local variables and later accept parameters. Give functions names that describe their action, such as calculate_total or clean_city. A function should ideally do one clear job."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Defining a function does not call it",
                  "hi": "Defining a function does not call it"
                },
                {
                  "en": "Use parentheses when calling",
                  "hi": "Use parentheses when calling"
                },
                {
                  "en": "Indent the body consistently",
                  "hi": "Indent the body consistently"
                },
                {
                  "en": "Choose descriptive function names",
                  "hi": "Choose descriptive function names"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M07_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Function Parameters and Return Values",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Function Parameters and Return Values",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Parameters",
                  "bodyEn": "Name the inputs",
                  "bodyHi": "Name the inputs",
                  "tone": "lavender"
                },
                {
                  "title": "Arguments",
                  "bodyEn": "Pass actual values",
                  "bodyHi": "Pass actual values",
                  "tone": "sky"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Perform the task",
                  "bodyHi": "Perform the task",
                  "tone": "green"
                },
                {
                  "title": "Return",
                  "bodyEn": "Send the result back",
                  "bodyHi": "Send the result back",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A store needs the same total calculation for many products. A function accepts price and quantity and returns the bill amount.",
              "bodyHi": "A store needs the same total calculation for many products. A function accepts price and quantity and returns the bill amount."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Parameter",
                  "Input name"
                ],
                [
                  "Argument",
                  "Passed input value"
                ],
                [
                  "Return value",
                  "Result sent back to caller"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Parameter is the name in the definition",
                  "hi": "Parameter is the name in the definition"
                },
                {
                  "en": "Argument is the value in the call",
                  "hi": "Argument is the value in the call"
                },
                {
                  "en": "return ends that function call",
                  "hi": "return ends that function call"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Parameters let a function receive values from its caller. A return statement sends a result back. Returning a value is different from printing it: returned values can be stored, tested, or used in further calculations.",
        "bodyHi": "Parameters let a function receive values from its caller. A return statement sends a result back. Returning a value is different from printing it: returned values can be stored, tested, or used in further calculations."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Function Parameters and Return Values",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def total(price, quantity):\n    return price * quantity\nbill = total(40, 3)\nprint(bill)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "120"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "price and quantity are parameters. 40 and 3 are arguments supplied during the call. return sends 120 back, and bill stores it. The print() statement is outside the function.",
              "bodyHi": "price and quantity are parameters. 40 and 3 are arguments supplied during the call. return sends 120 back, and bill stores it. The print() statement is outside the function."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Function Parameters and Return Values",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def discount(amount, rate):\n    return amount * (1 - rate)\nprint(discount(200, 0.10))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "180.0"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The discount function returns the amount after a 10% discount. A function without an explicit return normally returns None. Use return for results you want other parts of the program to reuse.",
              "bodyHi": "The discount function returns the amount after a 10% discount. A function without an explicit return normally returns None. Use return for results you want other parts of the program to reuse."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Parameter is the name in the definition",
                  "hi": "Parameter is the name in the definition"
                },
                {
                  "en": "Argument is the value in the call",
                  "hi": "Argument is the value in the call"
                },
                {
                  "en": "return ends that function call",
                  "hi": "return ends that function call"
                },
                {
                  "en": "Printing does not replace returning",
                  "hi": "Printing does not replace returning"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M07_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Default Arguments and Keyword Arguments",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Default Arguments and Keyword Arguments",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Default",
                  "bodyEn": "Choose a common value",
                  "bodyHi": "Choose a common value",
                  "tone": "lavender"
                },
                {
                  "title": "Positional",
                  "bodyEn": "Pass by order",
                  "bodyHi": "Pass by order",
                  "tone": "sky"
                },
                {
                  "title": "Keyword",
                  "bodyEn": "Pass by name",
                  "bodyHi": "Pass by name",
                  "tone": "green"
                },
                {
                  "title": "Override",
                  "bodyEn": "Replace a default when needed",
                  "bodyHi": "Replace a default when needed",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A billing function usually applies no discount but can accept a discount rate for selected orders.",
              "bodyHi": "A billing function usually applies no discount but can accept a discount rate for selected orders."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Default",
                  "Value used when omitted"
                ],
                [
                  "Keyword argument",
                  "Named argument"
                ],
                [
                  "Positional argument",
                  "Value matched by position"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Put required parameters before defaults",
                  "hi": "Put required parameters before defaults"
                },
                {
                  "en": "Keyword arguments improve clarity",
                  "hi": "Keyword arguments improve clarity"
                },
                {
                  "en": "Avoid mutable default lists or dictionaries",
                  "hi": "Avoid mutable default lists or dictionaries"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Default parameters provide values when a caller omits an argument. Keyword arguments name the parameter explicitly at the call site. Together they make function calls more readable and flexible.",
        "bodyHi": "Default parameters provide values when a caller omits an argument. Keyword arguments name the parameter explicitly at the call site. Together they make function calls more readable and flexible."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Default Arguments and Keyword Arguments",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def bill(amount, discount=0):\n    return amount * (1 - discount)\nprint(bill(200))\nprint(bill(200, discount=0.10))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "200\n180.0"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The first call uses discount=0, so the result is 200. The second call supplies 0.10 by keyword, so the result is 180.0. Naming the argument makes its meaning clearer.",
              "bodyHi": "The first call uses discount=0, so the result is 200. The second call supplies 0.10 by keyword, so the result is 180.0. Naming the argument makes its meaning clearer."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Default Arguments and Keyword Arguments",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def greeting(name, city=\"Patna\"):\n    print(name, \"from\", city)\ngreeting(\"Asha\")\ngreeting(name=\"Rahul\", city=\"Delhi\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Asha from Patna\nRahul from Delhi"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Parameters with defaults normally follow required parameters. Avoid mutable default values such as [] for lists; use None and create a new list inside the function when needed.",
              "bodyHi": "Parameters with defaults normally follow required parameters. Avoid mutable default values such as [] for lists; use None and create a new list inside the function when needed."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Put required parameters before defaults",
                  "hi": "Put required parameters before defaults"
                },
                {
                  "en": "Keyword arguments improve clarity",
                  "hi": "Keyword arguments improve clarity"
                },
                {
                  "en": "Avoid mutable default lists or dictionaries",
                  "hi": "Avoid mutable default lists or dictionaries"
                },
                {
                  "en": "Do not pass the same parameter twice",
                  "hi": "Do not pass the same parameter twice"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M07_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Variable Scope and Built-in Functions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Variable Scope and Built-in Functions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Global",
                  "bodyEn": "Name defined outside a function",
                  "bodyHi": "Name defined outside a function",
                  "tone": "lavender"
                },
                {
                  "title": "Local",
                  "bodyEn": "Name inside a function",
                  "bodyHi": "Name inside a function",
                  "tone": "sky"
                },
                {
                  "title": "Lookup",
                  "bodyEn": "Python resolves a name",
                  "bodyHi": "Python resolves a name",
                  "tone": "green"
                },
                {
                  "title": "Built-in",
                  "bodyEn": "Use standard helper functions",
                  "bodyHi": "Use standard helper functions",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An analyst calculates a subtotal inside a function while keeping the sales list outside. The subtotal is local and does not become a global variable automatically.",
              "bodyHi": "An analyst calculates a subtotal inside a function while keeping the sales list outside. The subtotal is local and does not become a global variable automatically."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Scope",
                  "Where a name is visible"
                ],
                [
                  "Local variable",
                  "Name inside a function"
                ],
                [
                  "Built-in",
                  "Function included with Python"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Local variables are not available outside their function",
                  "hi": "Local variables are not available outside their function"
                },
                {
                  "en": "Prefer explicit parameters",
                  "hi": "Prefer explicit parameters"
                },
                {
                  "en": "Avoid shadowing names like sum and list",
                  "hi": "Avoid shadowing names like sum and list"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Scope describes where a variable name can be accessed. Names created inside a function are normally local to that function. Python also provides built-in functions such as len(), sum(), min(), max(), and sorted().",
        "bodyHi": "Scope describes where a variable name can be accessed. Names created inside a function are normally local to that function. Python also provides built-in functions such as len(), sum(), min(), max(), and sorted()."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Variable Scope and Built-in Functions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "sales = [10, 20, 30]\ndef calculate():\n    subtotal = sum(sales)\n    return subtotal\nprint(calculate())\nprint(len(sales))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "60\n3"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "sales is defined outside the function and can be read inside it. subtotal is local to calculate(). sum() and len() are built-in functions, so no import is required.",
              "bodyHi": "sales is defined outside the function and can be read inside it. subtotal is local to calculate(). sum() and len() are built-in functions, so no import is required."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Variable Scope and Built-in Functions",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "values = [4, 1, 9]\nprint(min(values))\nprint(max(values))\nprint(sorted(values))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1\n9\n[1, 4, 9]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "sorted() returns a new sorted list without changing values. Prefer passing inputs to functions explicitly rather than relying on global variables. This makes functions easier to test and reuse.",
              "bodyHi": "sorted() returns a new sorted list without changing values. Prefer passing inputs to functions explicitly rather than relying on global variables. This makes functions easier to test and reuse."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Local variables are not available outside their function",
                  "hi": "Local variables are not available outside their function"
                },
                {
                  "en": "Prefer explicit parameters",
                  "hi": "Prefer explicit parameters"
                },
                {
                  "en": "Avoid shadowing names like sum and list",
                  "hi": "Avoid shadowing names like sum and list"
                },
                {
                  "en": "Use built-in functions when they solve the task clearly",
                  "hi": "Use built-in functions when they solve the task clearly"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M07_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Python Modules and Imports",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Python Modules and Imports",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Module",
                  "bodyEn": "Choose a library",
                  "bodyHi": "Choose a library",
                  "tone": "lavender"
                },
                {
                  "title": "Import",
                  "bodyEn": "Load it into the script",
                  "bodyHi": "Load it into the script",
                  "tone": "sky"
                },
                {
                  "title": "Call",
                  "bodyEn": "Use its functions",
                  "bodyHi": "Use its functions",
                  "tone": "green"
                },
                {
                  "title": "Organize",
                  "bodyEn": "Keep code reusable",
                  "bodyHi": "Keep code reusable",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A data analyst wants to calculate a square root and the average of sales values without writing those algorithms from scratch.",
              "bodyHi": "A data analyst wants to calculate a square root and the average of sales values without writing those algorithms from scratch."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Module",
                  "Python source file"
                ],
                [
                  "Package",
                  "Collection of modules"
                ],
                [
                  "Standard library",
                  "Modules shipped with Python"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Import only what you need",
                  "hi": "Import only what you need"
                },
                {
                  "en": "Use clear module names",
                  "hi": "Use clear module names"
                },
                {
                  "en": "Avoid naming your own file math.py or csv.py",
                  "hi": "Avoid naming your own file math.py or csv.py"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A module is a Python file containing reusable definitions. import makes a module available to your program. The standard library includes useful modules such as math, statistics, csv, datetime, and pathlib.",
        "bodyHi": "A module is a Python file containing reusable definitions. import makes a module available to your program. The standard library includes useful modules such as math, statistics, csv, datetime, and pathlib."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Python Modules and Imports",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import math\nimport statistics\nprint(math.sqrt(81))\nprint(statistics.mean([10, 20, 30]))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "9.0\n20"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "import math makes the math module available. math.sqrt(81) returns 9.0. statistics.mean() computes the average of three numbers. Module prefixes make it clear where functions come from.",
              "bodyHi": "import math makes the math module available. math.sqrt(81) returns 9.0. statistics.mean() computes the average of three numbers. Module prefixes make it clear where functions come from."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Python Modules and Imports",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "from math import ceil\nprint(ceil(3.2))\nimport random\nprint(0 <= random.random() < 1)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "4\nTrue"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "from math import ceil imports one function directly. random.random() returns a value from 0 up to but not including 1; the comparison is always True. Avoid using random results in a lesson unless you explain why the output changes.",
              "bodyHi": "from math import ceil imports one function directly. random.random() returns a value from 0 up to but not including 1; the comparison is always True. Avoid using random results in a lesson unless you explain why the output changes."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Import only what you need",
                  "hi": "Import only what you need"
                },
                {
                  "en": "Use clear module names",
                  "hi": "Use clear module names"
                },
                {
                  "en": "Avoid naming your own file math.py or csv.py",
                  "hi": "Avoid naming your own file math.py or csv.py"
                },
                {
                  "en": "Check library installation and versions for third-party packages",
                  "hi": "Check library installation and versions for third-party packages"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M07_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Working with Dates and Time",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Working with Dates and Time",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Parse",
                  "bodyEn": "Turn text into a date",
                  "bodyHi": "Turn text into a date",
                  "tone": "lavender"
                },
                {
                  "title": "Format",
                  "bodyEn": "Show dates consistently",
                  "bodyHi": "Show dates consistently",
                  "tone": "sky"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Find a time difference",
                  "bodyHi": "Find a time difference",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check the date meaning",
                  "bodyHi": "Check the date meaning",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A delivery team wants to know how many days passed between an order date and a delivery date.",
              "bodyHi": "A delivery team wants to know how many days passed between an order date and a delivery date."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "datetime",
                  "Date and time tools"
                ],
                [
                  "timedelta",
                  "Difference between dates"
                ],
                [
                  "Format string",
                  "Pattern for parsing or display"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use ISO-style YYYY-MM-DD for stored dates when possible",
                  "hi": "Use ISO-style YYYY-MM-DD for stored dates when possible"
                },
                {
                  "en": "Know whether values are dates or timestamps",
                  "hi": "Know whether values are dates or timestamps"
                },
                {
                  "en": "Handle time zones in cross-region systems",
                  "hi": "Handle time zones in cross-region systems"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Dates and times appear in sales, attendance, and event data. Python's datetime module can represent dates, parse text, and calculate time differences. Use consistent formats so records can be compared correctly.",
        "bodyHi": "Dates and times appear in sales, attendance, and event data. Python's datetime module can represent dates, parse text, and calculate time differences. Use consistent formats so records can be compared correctly."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Working with Dates and Time",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "from datetime import date\nordered = date(2026, 5, 1)\ndelivered = date(2026, 5, 4)\nprint((delivered - ordered).days)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "3"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "date(year, month, day) creates a date value. Subtracting two dates gives a timedelta. Its .days attribute is 3, so delivery took three calendar days.",
              "bodyHi": "date(year, month, day) creates a date value. Subtracting two dates gives a timedelta. Its .days attribute is 3, so delivery took three calendar days."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Working with Dates and Time",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "from datetime import datetime\ntext = \"2026-05-04\"\nd = datetime.strptime(text, \"%Y-%m-%d\")\nprint(d.strftime(\"%d/%m/%Y\"))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "04/05/2026"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "strptime() parses a text date using a format pattern. strftime() creates formatted text. For real timestamps, time zones and daylight-saving changes may matter; a date without a time zone is not enough for every use case.",
              "bodyHi": "strptime() parses a text date using a format pattern. strftime() creates formatted text. For real timestamps, time zones and daylight-saving changes may matter; a date without a time zone is not enough for every use case."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use ISO-style YYYY-MM-DD for stored dates when possible",
                  "hi": "Use ISO-style YYYY-MM-DD for stored dates when possible"
                },
                {
                  "en": "Know whether values are dates or timestamps",
                  "hi": "Know whether values are dates or timestamps"
                },
                {
                  "en": "Handle time zones in cross-region systems",
                  "hi": "Handle time zones in cross-region systems"
                },
                {
                  "en": "Validate impossible dates and missing values",
                  "hi": "Validate impossible dates and missing values"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M07_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Reading and Writing Files and CSV",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 7",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Reading and Writing Files and CSV",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Open",
                  "bodyEn": "Choose a file and mode",
                  "bodyHi": "Choose a file and mode",
                  "tone": "lavender"
                },
                {
                  "title": "Read",
                  "bodyEn": "Load rows or text",
                  "bodyHi": "Load rows or text",
                  "tone": "sky"
                },
                {
                  "title": "Process",
                  "bodyEn": "Validate fields",
                  "bodyHi": "Validate fields",
                  "tone": "green"
                },
                {
                  "title": "Write",
                  "bodyEn": "Save the result",
                  "bodyHi": "Save the result",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A small shop exports orders as CSV. An analyst reads the file, calculates totals, and writes a summary. This example first creates a tiny local CSV so the steps are reproducible.",
              "bodyHi": "A small shop exports orders as CSV. An analyst reads the file, calculates totals, and writes a summary. This example first creates a tiny local CSV so the steps are reproducible."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "CSV",
                  "Comma-separated values"
                ],
                [
                  "File mode",
                  "Read or write setting"
                ],
                [
                  "Encoding",
                  "How text is stored in bytes"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use with to close files reliably",
                  "hi": "Use with to close files reliably"
                },
                {
                  "en": "CSV fields are usually read as text",
                  "hi": "CSV fields are usually read as text"
                },
                {
                  "en": "Use newline=\"\" with csv.writer",
                  "hi": "Use newline=\"\" with csv.writer"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Python can read and write text files and CSV datasets. The with statement closes a file automatically after the block finishes. The csv module handles comma-separated values more safely than splitting each line manually.",
        "bodyHi": "Python can read and write text files and CSV datasets. The with statement closes a file automatically after the block finishes. The csv module handles comma-separated values more safely than splitting each line manually."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 7",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Reading and Writing Files and CSV",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import csv\nwith open(\"sales.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"item\", \"amount\"])\n    writer.writerow([\"Pen\", 20])\nprint(\"CSV saved\")"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "CSV saved"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "open(..., \"w\") creates or overwrites the file. csv.writer handles field separators. newline=\"\" avoids unwanted blank lines on some systems. The with block closes the file safely.",
              "bodyHi": "open(..., \"w\") creates or overwrites the file. csv.writer handles field separators. newline=\"\" avoids unwanted blank lines on some systems. The with block closes the file safely."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 7",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Reading and Writing Files and CSV",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import csv\nwith open(\"sales.csv\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\nprint(rows[0][\"item\"])\nprint(rows[0][\"amount\"])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Pen\n20"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Run the previous example first so sales.csv exists. DictReader uses the header row as dictionary keys. Values read from CSV are strings, so the amount printed here is text. Convert it before arithmetic. Check file paths and encodings when moving between computers.",
              "bodyHi": "Run the previous example first so sales.csv exists. DictReader uses the header row as dictionary keys. Values read from CSV are strings, so the amount printed here is text. Convert it before arithmetic. Check file paths and encodings when moving between computers."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use with to close files reliably",
                  "hi": "Use with to close files reliably"
                },
                {
                  "en": "CSV fields are usually read as text",
                  "hi": "CSV fields are usually read as text"
                },
                {
                  "en": "Use newline=\"\" with csv.writer",
                  "hi": "Use newline=\"\" with csv.writer"
                },
                {
                  "en": "Avoid overwriting important files by accident",
                  "hi": "Avoid overwriting important files by accident"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 7",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Reading and Writing Files and CSV",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import csv",
                  "Make a library or function available for the example."
                ],
                [
                  "with open(\"sales.csv\", \"w\", newline=\"\") as f:",
                  "Open a resource safely for reading or writing."
                ],
                [
                  "writer = csv.writer(f)",
                  "Create or update a value used by the calculation."
                ],
                [
                  "writer.writerow([\"item\", \"amount\"])",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "writer.writerow([\"Pen\", 20])",
                  "Perform a step in the data-processing workflow."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A small shop exports orders as CSV. An analyst reads the file, calculates totals, and writes a summary. This example first creates a tiny local CSV so the steps are reproducible. Run the previous example first so sales.csv exists. DictReader uses the header row as dictionary keys. Values read from CSV are strings, so the amount printed here is text. Convert it before arithmetic. Check file paths and encodings when moving between computers.",
              "bodyHi": "A small shop exports orders as CSV. An analyst reads the file, calculates totals, and writes a summary. This example first creates a tiny local CSV so the steps are reproducible. Run the previous example first so sales.csv exists. DictReader uses the header row as dictionary keys. Values read from CSV are strings, so the amount printed here is text. Convert it before arithmetic. Check file paths and encodings when moving between computers."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use with to close files reliably",
                  "hi": "Use with to close files reliably"
                },
                {
                  "en": "CSV fields are usually read as text",
                  "hi": "CSV fields are usually read as text"
                },
                {
                  "en": "Use newline=\"\" with csv.writer",
                  "hi": "Use newline=\"\" with csv.writer"
                },
                {
                  "en": "Avoid overwriting important files by accident",
                  "hi": "Avoid overwriting important files by accident"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M07_T08_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Exception Handling and Debugging",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 8",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Exception Handling and Debugging",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Try",
                  "bodyEn": "Run code that may fail",
                  "bodyHi": "Run code that may fail",
                  "tone": "lavender"
                },
                {
                  "title": "Catch",
                  "bodyEn": "Handle a specific error",
                  "bodyHi": "Handle a specific error",
                  "tone": "sky"
                },
                {
                  "title": "Explain",
                  "bodyEn": "Show a useful message",
                  "bodyHi": "Show a useful message",
                  "tone": "green"
                },
                {
                  "title": "Continue",
                  "bodyEn": "Keep the program safe",
                  "bodyHi": "Keep the program safe",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A billing program receives quantity as text. Some users may enter letters instead of numbers, so the program needs a controlled response.",
              "bodyHi": "A billing program receives quantity as text. Some users may enter letters instead of numbers, so the program needs a controlled response."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Exception",
                  "Runtime error"
                ],
                [
                  "try/except",
                  "Error-handling structure"
                ],
                [
                  "Traceback",
                  "Where an error occurred"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Catch specific exception types",
                  "hi": "Catch specific exception types"
                },
                {
                  "en": "Do not replace bad data silently",
                  "hi": "Do not replace bad data silently"
                },
                {
                  "en": "Log enough context for debugging",
                  "hi": "Log enough context for debugging"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Exception handling lets a program respond to expected runtime problems without crashing unexpectedly. Use try for risky code, except for specific exceptions, and finally for cleanup when needed. Do not hide errors that should be investigated.",
        "bodyHi": "Exception handling lets a program respond to expected runtime problems without crashing unexpectedly. Use try for risky code, except for specific exceptions, and finally for cleanup when needed. Do not hide errors that should be investigated."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 8",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Exception Handling and Debugging",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "quantity_text = \"abc\"\ntry:\n    quantity = int(quantity_text)\nexcept ValueError:\n    print(\"Enter a whole number\")"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Enter a whole number"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "int(\"abc\") raises ValueError. The matching except block runs and displays a clear message. The program does not pretend that the invalid input was a valid quantity.",
              "bodyHi": "int(\"abc\") raises ValueError. The matching except block runs and displays a clear message. The program does not pretend that the invalid input was a valid quantity."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 8",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Exception Handling and Debugging",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "values = [10, 0]\ntry:\n    print(values[0] / values[1])\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Cannot divide by zero"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Catch exceptions that you understand and can handle. For unknown errors, record the traceback during development. Broad except clauses can hide bugs and make analytics results unreliable.",
              "bodyHi": "Catch exceptions that you understand and can handle. For unknown errors, record the traceback during development. Broad except clauses can hide bugs and make analytics results unreliable."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Catch specific exception types",
                  "hi": "Catch specific exception types"
                },
                {
                  "en": "Do not replace bad data silently",
                  "hi": "Do not replace bad data silently"
                },
                {
                  "en": "Log enough context for debugging",
                  "hi": "Log enough context for debugging"
                },
                {
                  "en": "Use finally or context managers for cleanup",
                  "hi": "Use finally or context managers for cleanup"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 8",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Exception Handling and Debugging",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "quantity_text = \"abc\"",
                  "Create or update a value used by the calculation."
                ],
                [
                  "try:",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "quantity = int(quantity_text)",
                  "Create or update a value used by the calculation."
                ],
                [
                  "except ValueError:",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "print(\"Enter a whole number\")",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A billing program receives quantity as text. Some users may enter letters instead of numbers, so the program needs a controlled response. Catch exceptions that you understand and can handle. For unknown errors, record the traceback during development. Broad except clauses can hide bugs and make analytics results unreliable.",
              "bodyHi": "A billing program receives quantity as text. Some users may enter letters instead of numbers, so the program needs a controlled response. Catch exceptions that you understand and can handle. For unknown errors, record the traceback during development. Broad except clauses can hide bugs and make analytics results unreliable."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Catch specific exception types",
                  "hi": "Catch specific exception types"
                },
                {
                  "en": "Do not replace bad data silently",
                  "hi": "Do not replace bad data silently"
                },
                {
                  "en": "Log enough context for debugging",
                  "hi": "Log enough context for debugging"
                },
                {
                  "en": "Use finally or context managers for cleanup",
                  "hi": "Use finally or context managers for cleanup"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M07_T09_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M07",
  "moduleTitle": "Functions, Modules and Files",
  "topic": "Writing Reusable Code and Practical Projects",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 9",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Writing Reusable Code and Practical Projects",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Plan",
                  "bodyEn": "Define the input and output",
                  "bodyHi": "Define the input and output",
                  "tone": "lavender"
                },
                {
                  "title": "Split",
                  "bodyEn": "Create small functions",
                  "bodyHi": "Create small functions",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check assumptions",
                  "bodyHi": "Check assumptions",
                  "tone": "green"
                },
                {
                  "title": "Reuse",
                  "bodyEn": "Run on new records",
                  "bodyHi": "Run on new records",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retail report needs a total revenue calculation. Instead of mixing reading, cleaning, calculation, and printing in one block, create a function for the calculation.",
              "bodyHi": "A retail report needs a total revenue calculation. Instead of mixing reading, cleaning, calculation, and printing in one block, create a function for the calculation."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Reusable",
                  "Works for different valid inputs"
                ],
                [
                  "Unit test",
                  "Checks a small piece of code"
                ],
                [
                  "Documentation",
                  "Explains how code is used"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep functions focused on one job",
                  "hi": "Keep functions focused on one job"
                },
                {
                  "en": "Return values instead of printing everything",
                  "hi": "Return values instead of printing everything"
                },
                {
                  "en": "Handle empty and invalid inputs",
                  "hi": "Handle empty and invalid inputs"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Reusable code separates a task into small functions, accepts clear inputs, and returns clear outputs. A practical analytics script should be readable, testable, and safe to run again on new data.",
        "bodyHi": "Reusable code separates a task into small functions, accepts clear inputs, and returns clear outputs. A practical analytics script should be readable, testable, and safe to run again on new data."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 9",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Writing Reusable Code and Practical Projects",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def revenue(orders):\n    return sum(row[\"qty\"] * row[\"price\"]\n               for row in orders)\norders = [{\"qty\": 2, \"price\": 20},\n          {\"qty\": 1, \"price\": 50}]\nprint(revenue(orders))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "90"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "revenue() receives the records, multiplies quantity by price for each row, and adds the results. The function returns 90. It does not print internally, which makes it easier to test.",
              "bodyHi": "revenue() receives the records, multiplies quantity by price for each row, and adds the results. The function returns 90. It does not print internally, which makes it easier to test."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 9",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Writing Reusable Code and Practical Projects",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "def average(values):\n    if not values:\n        return None\n    return sum(values) / len(values)\nprint(average([10, 20, 30]))\nprint(average([]))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "20.0\nNone"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The second function handles an empty list instead of dividing by zero. A project should also include source details, validation checks, documentation, and an explanation of how to run the script.",
              "bodyHi": "The second function handles an empty list instead of dividing by zero. A project should also include source details, validation checks, documentation, and an explanation of how to run the script."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep functions focused on one job",
                  "hi": "Keep functions focused on one job"
                },
                {
                  "en": "Return values instead of printing everything",
                  "hi": "Return values instead of printing everything"
                },
                {
                  "en": "Handle empty and invalid inputs",
                  "hi": "Handle empty and invalid inputs"
                },
                {
                  "en": "Document assumptions and repeatable steps",
                  "hi": "Document assumptions and repeatable steps"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M07 | TOPIC 9",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Writing Reusable Code and Practical Projects",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "def revenue(orders):",
                  "Define a reusable function and its input parameters."
                ],
                [
                  "return sum(row[\"qty\"] * row[\"price\"]",
                  "Send the calculated result back to the caller."
                ],
                [
                  "for row in orders)",
                  "Start an iteration over the available values."
                ],
                [
                  "orders = [{\"qty\": 2, \"price\": 20},",
                  "Create or update a value used by the calculation."
                ],
                [
                  "{\"qty\": 1, \"price\": 50}]",
                  "Perform a step in the data-processing workflow."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retail report needs a total revenue calculation. Instead of mixing reading, cleaning, calculation, and printing in one block, create a function for the calculation. The second function handles an empty list instead of dividing by zero. A project should also include source details, validation checks, documentation, and an explanation of how to run the script.",
              "bodyHi": "A retail report needs a total revenue calculation. Instead of mixing reading, cleaning, calculation, and printing in one block, create a function for the calculation. The second function handles an empty list instead of dividing by zero. A project should also include source details, validation checks, documentation, and an explanation of how to run the script."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep functions focused on one job",
                  "hi": "Keep functions focused on one job"
                },
                {
                  "en": "Return values instead of printing everything",
                  "hi": "Return values instead of printing everything"
                },
                {
                  "en": "Handle empty and invalid inputs",
                  "hi": "Handle empty and invalid inputs"
                },
                {
                  "en": "Document assumptions and repeatable steps",
                  "hi": "Document assumptions and repeatable steps"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M08_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "What Is NumPy?",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "What Is NumPy?",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Import",
                  "bodyEn": "Load numpy",
                  "bodyHi": "Load numpy",
                  "tone": "lavender"
                },
                {
                  "title": "Array",
                  "bodyEn": "Create numerical values",
                  "bodyHi": "Create numerical values",
                  "tone": "sky"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Use vectorized operations",
                  "bodyHi": "Use vectorized operations",
                  "tone": "green"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Inspect the result",
                  "bodyHi": "Inspect the result",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retail analyst has daily sales numbers. A NumPy array makes it easy to calculate total sales and add a fixed service charge to every day.",
              "bodyHi": "A retail analyst has daily sales numbers. A NumPy array makes it easy to calculate total sales and add a fixed service charge to every day."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "ndarray",
                  "NumPy array object"
                ],
                [
                  "Vectorization",
                  "Array operations without explicit Python loops"
                ],
                [
                  "dtype",
                  "Array data type"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "NumPy arrays are not identical to lists",
                  "hi": "NumPy arrays are not identical to lists"
                },
                {
                  "en": "Operations often act element-wise",
                  "hi": "Operations often act element-wise"
                },
                {
                  "en": "dtype shows stored data type",
                  "hi": "dtype shows stored data type"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "NumPy is a Python library for efficient numerical computing. Its main object is the ndarray, an array that stores values in a regular structure. NumPy supports fast element-wise calculations, multidimensional data, and useful statistical functions.",
        "bodyHi": "NumPy is a Python library for efficient numerical computing. Its main object is the ndarray, an array that stores values in a regular structure. NumPy supports fast element-wise calculations, multidimensional data, and useful statistical functions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "What Is NumPy?",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nsales = np.array([100, 150, 200])\nprint(sales.sum())\nprint(sales + 10)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "450\n[110 160 210]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "np.array creates a NumPy array. sum() adds its elements. sales + 10 adds ten to each element without writing an explicit loop. This element-wise behavior is a major advantage of arrays.",
              "bodyHi": "np.array creates a NumPy array. sum() adds its elements. sales + 10 adds ten to each element without writing an explicit loop. This element-wise behavior is a major advantage of arrays."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "What Is NumPy?",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([2, 4, 6])\nprint(a * 2)\nprint(a.dtype)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[ 4  8 12]\nint64"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The dtype may display int32 on some platforms instead of int64. Arrays usually hold one data type, unlike ordinary Python lists. Use NumPy for numerical work, but always inspect shapes and missing-value behavior.",
              "bodyHi": "The dtype may display int32 on some platforms instead of int64. Arrays usually hold one data type, unlike ordinary Python lists. Use NumPy for numerical work, but always inspect shapes and missing-value behavior."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "NumPy arrays are not identical to lists",
                  "hi": "NumPy arrays are not identical to lists"
                },
                {
                  "en": "Operations often act element-wise",
                  "hi": "Operations often act element-wise"
                },
                {
                  "en": "dtype shows stored data type",
                  "hi": "dtype shows stored data type"
                },
                {
                  "en": "Check the array shape before combining data",
                  "hi": "Check the array shape before combining data"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M08_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "Creating NumPy Arrays",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Creating NumPy Arrays",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "List",
                  "bodyEn": "Convert existing values",
                  "bodyHi": "Convert existing values",
                  "tone": "lavender"
                },
                {
                  "title": "zeros",
                  "bodyEn": "Start with zeros",
                  "bodyHi": "Start with zeros",
                  "tone": "sky"
                },
                {
                  "title": "arange",
                  "bodyEn": "Create a numeric sequence",
                  "bodyHi": "Create a numeric sequence",
                  "tone": "green"
                },
                {
                  "title": "linspace",
                  "bodyEn": "Create evenly spaced values",
                  "bodyHi": "Create evenly spaced values",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A forecasting worksheet needs a set of seven day positions and an empty array for storing seven calculated results.",
              "bodyHi": "A forecasting worksheet needs a set of seven day positions and an empty array for storing seven calculated results."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Constructor",
                  "Function that creates an array"
                ],
                [
                  "Shape",
                  "Size along each dimension"
                ],
                [
                  "dtype",
                  "Stored numeric type"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "arange() usually excludes stop",
                  "hi": "arange() usually excludes stop"
                },
                {
                  "en": "linspace() includes endpoints by default",
                  "hi": "linspace() includes endpoints by default"
                },
                {
                  "en": "Use a shape tuple for 2D arrays",
                  "hi": "Use a shape tuple for 2D arrays"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "You can create arrays from Python lists or with NumPy helper functions. Common constructors include array(), zeros(), ones(), arange(), and linspace(). Choose the constructor that matches the values and dimensions you need.",
        "bodyHi": "You can create arrays from Python lists or with NumPy helper functions. Common constructors include array(), zeros(), ones(), arange(), and linspace(). Choose the constructor that matches the values and dimensions you need."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Creating NumPy Arrays",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\ndays = np.arange(1, 5)\nempty_totals = np.zeros(4)\nprint(days)\nprint(empty_totals)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[1 2 3 4]\n[0. 0. 0. 0.]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "arange(1, 5) produces four integers because the stop value is excluded. zeros(4) creates four floating-point zeros by default. You can choose dtype=int when integer zeros are required.",
              "bodyHi": "arange(1, 5) produces four integers because the stop value is excluded. zeros(4) creates four floating-point zeros by default. You can choose dtype=int when integer zeros are required."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Creating NumPy Arrays",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nprint(np.ones((2, 3), dtype=int))\nprint(np.linspace(0, 1, 3))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[[1 1 1]\n [1 1 1]]\n[0.  0.5 1. ]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "ones((2,3)) creates two rows and three columns. linspace(0,1,3) includes both endpoints and creates three evenly spaced numbers. Always distinguish shape tuples from numeric ranges.",
              "bodyHi": "ones((2,3)) creates two rows and three columns. linspace(0,1,3) includes both endpoints and creates three evenly spaced numbers. Always distinguish shape tuples from numeric ranges."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "arange() usually excludes stop",
                  "hi": "arange() usually excludes stop"
                },
                {
                  "en": "linspace() includes endpoints by default",
                  "hi": "linspace() includes endpoints by default"
                },
                {
                  "en": "Use a shape tuple for 2D arrays",
                  "hi": "Use a shape tuple for 2D arrays"
                },
                {
                  "en": "Specify dtype when it matters",
                  "hi": "Specify dtype when it matters"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M08_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "Array Shapes and Dimensions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Array Shapes and Dimensions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "ndim",
                  "bodyEn": "Count dimensions",
                  "bodyHi": "Count dimensions",
                  "tone": "lavender"
                },
                {
                  "title": "shape",
                  "bodyEn": "Read lengths of axes",
                  "bodyHi": "Read lengths of axes",
                  "tone": "sky"
                },
                {
                  "title": "size",
                  "bodyEn": "Count all elements",
                  "bodyHi": "Count all elements",
                  "tone": "green"
                },
                {
                  "title": "reshape",
                  "bodyEn": "Change arrangement safely",
                  "bodyHi": "Change arrangement safely",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A store tracks sales for two shops across three days. A 2 x 3 array can store two rows of shop values and three day columns.",
              "bodyHi": "A store tracks sales for two shops across three days. A 2 x 3 array can store two rows of shop values and three day columns."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Axis",
                  "One dimension"
                ],
                [
                  "ndim",
                  "Number of dimensions"
                ],
                [
                  "size",
                  "Total element count"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Axis 0 usually refers to rows in a 2D array",
                  "hi": "Axis 0 usually refers to rows in a 2D array"
                },
                {
                  "en": "Axis 1 usually refers to columns",
                  "hi": "Axis 1 usually refers to columns"
                },
                {
                  "en": "reshape must preserve total element count",
                  "hi": "reshape must preserve total element count"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "An array shape tells you how many values exist along each axis. A one-dimensional array has one axis; a two-dimensional array can represent rows and columns. ndim, shape, and size describe an array's structure.",
        "bodyHi": "An array shape tells you how many values exist along each axis. A one-dimensional array has one axis; a two-dimensional array can represent rows and columns. ndim, shape, and size describe an array's structure."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Array Shapes and Dimensions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nsales = np.array([[10, 20, 30],\n                  [40, 50, 60]])\nprint(sales.shape)\nprint(sales.ndim)\nprint(sales.size)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "(2, 3)\n2\n6"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The array has two rows and three columns, so its shape is (2,3). ndim is 2 because there are two axes. size is 6 because 2 x 3 = 6 elements.",
              "bodyHi": "The array has two rows and three columns, so its shape is (2,3). ndim is 2 because there are two axes. size is 6 because 2 x 3 = 6 elements."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Array Shapes and Dimensions",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.arange(6)\nprint(a.reshape(2, 3))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[[0 1 2]\n [3 4 5]]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "reshape(2,3) changes the arrangement without changing the number of values. A reshape fails if the requested shape cannot hold exactly the same number of elements.",
              "bodyHi": "reshape(2,3) changes the arrangement without changing the number of values. A reshape fails if the requested shape cannot hold exactly the same number of elements."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Axis 0 usually refers to rows in a 2D array",
                  "hi": "Axis 0 usually refers to rows in a 2D array"
                },
                {
                  "en": "Axis 1 usually refers to columns",
                  "hi": "Axis 1 usually refers to columns"
                },
                {
                  "en": "reshape must preserve total element count",
                  "hi": "reshape must preserve total element count"
                },
                {
                  "en": "Check shape before arithmetic",
                  "hi": "Check shape before arithmetic"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M08_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "Indexing and Slicing Arrays",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Indexing and Slicing Arrays",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Index",
                  "bodyEn": "Choose a position",
                  "bodyHi": "Choose a position",
                  "tone": "lavender"
                },
                {
                  "title": "Slice",
                  "bodyEn": "Choose a range",
                  "bodyHi": "Choose a range",
                  "tone": "sky"
                },
                {
                  "title": "Axis",
                  "bodyEn": "Select row or column",
                  "bodyHi": "Select row or column",
                  "tone": "green"
                },
                {
                  "title": "Verify",
                  "bodyEn": "Check the extracted shape",
                  "bodyHi": "Check the extracted shape",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A sales matrix has two stores and three days. The analyst wants the second store's first day and the first day of both stores.",
              "bodyHi": "A sales matrix has two stores and three days. The analyst wants the second store's first day and the first day of both stores."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Index",
                  "Numeric position"
                ],
                [
                  "View",
                  "Data shared with original array"
                ],
                [
                  "Copy",
                  "Independent data"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use [row, column] for 2D arrays",
                  "hi": "Use [row, column] for 2D arrays"
                },
                {
                  "en": "Slice stop is excluded",
                  "hi": "Slice stop is excluded"
                },
                {
                  "en": "A colon selects an entire axis",
                  "hi": "A colon selects an entire axis"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "NumPy indexing selects array elements by position. For a two-dimensional array, use [row, column]. Slicing selects ranges along one or more axes. This lets analysts inspect a particular store, day, or section of a numeric table.",
        "bodyHi": "NumPy indexing selects array elements by position. For a two-dimensional array, use [row, column]. Slicing selects ranges along one or more axes. This lets analysts inspect a particular store, day, or section of a numeric table."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Indexing and Slicing Arrays",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([[10, 20, 30],\n              [40, 50, 60]])\nprint(a[1, 0])\nprint(a[:, 0])"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "40\n[10 40]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "a[1,0] means second row, first column because indices start at zero. The colon in a[:,0] means all rows, while column 0 selects the first day.",
              "bodyHi": "a[1,0] means second row, first column because indices start at zero. The colon in a[:,0] means all rows, while column 0 selects the first day."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Indexing and Slicing Arrays",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([[10, 20, 30],\n              [40, 50, 60]])\nprint(a[0, 1:])\nprint(a[:, 1:3])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[20 30]\n[[20 30]\n [50 60]]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "In slicing, the stop index is excluded. Basic NumPy slices often return views, meaning edits to the slice can affect the original array. Use .copy() when you need an independent result.",
              "bodyHi": "In slicing, the stop index is excluded. Basic NumPy slices often return views, meaning edits to the slice can affect the original array. Use .copy() when you need an independent result."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use [row, column] for 2D arrays",
                  "hi": "Use [row, column] for 2D arrays"
                },
                {
                  "en": "Slice stop is excluded",
                  "hi": "Slice stop is excluded"
                },
                {
                  "en": "A colon selects an entire axis",
                  "hi": "A colon selects an entire axis"
                },
                {
                  "en": "Use .copy() to avoid unwanted shared-data changes",
                  "hi": "Use .copy() to avoid unwanted shared-data changes"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M08_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "Vectorized Operations and Broadcasting",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 5",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Vectorized Operations and Broadcasting",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Align",
                  "bodyEn": "Inspect operand shapes",
                  "bodyHi": "Inspect operand shapes",
                  "tone": "lavender"
                },
                {
                  "title": "Broadcast",
                  "bodyEn": "Expand compatible dimensions",
                  "bodyHi": "Expand compatible dimensions",
                  "tone": "sky"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Apply element-wise operation",
                  "bodyHi": "Apply element-wise operation",
                  "tone": "green"
                },
                {
                  "title": "Check",
                  "bodyEn": "Verify a sample result",
                  "bodyHi": "Verify a sample result",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retailer increases every product price by 10%. NumPy can apply the same multiplier to the whole array.",
              "bodyHi": "A retailer increases every product price by 10%. NumPy can apply the same multiplier to the whole array."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Broadcasting",
                  "Aligning compatible shapes"
                ],
                [
                  "Vectorized",
                  "Operating on arrays at once"
                ],
                [
                  "Element-wise",
                  "Applied separately to each element"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Broadcasting follows shape compatibility rules",
                  "hi": "Broadcasting follows shape compatibility rules"
                },
                {
                  "en": "Array multiplication is element-wise by default",
                  "hi": "Array multiplication is element-wise by default"
                },
                {
                  "en": "Check units before combining arrays",
                  "hi": "Check units before combining arrays"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Vectorization applies calculations to arrays without writing a Python loop for every element. Broadcasting allows compatible shapes to work together, such as adding one scalar to an entire array or one row to many rows.",
        "bodyHi": "Vectorization applies calculations to arrays without writing a Python loop for every element. Broadcasting allows compatible shapes to work together, such as adding one scalar to an entire array or one row to many rows."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 5",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Vectorized Operations and Broadcasting",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nprices = np.array([100, 200, 300])\nnew_prices = prices * 1.10\nprint(new_prices)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[110. 220. 330.]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The scalar 1.10 is broadcast across all three prices. Each element is multiplied separately, producing an array of new prices. Vectorization is concise and often faster than a Python-level loop.",
              "bodyHi": "The scalar 1.10 is broadcast across all three prices. Each element is multiplied separately, producing an array of new prices. Vectorization is concise and often faster than a Python-level loop."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 5",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Vectorized Operations and Broadcasting",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([[1, 2, 3], [4, 5, 6]])\nextra = np.array([10, 20, 30])\nprint(a + extra)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[[11 22 33]\n [14 25 36]]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The one-dimensional array has length 3, matching the final axis of the 2 x 3 matrix. NumPy adds the three values to each row. Incompatible shapes raise a broadcasting error rather than silently guessing.",
              "bodyHi": "The one-dimensional array has length 3, matching the final axis of the 2 x 3 matrix. NumPy adds the three values to each row. Incompatible shapes raise a broadcasting error rather than silently guessing."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Broadcasting follows shape compatibility rules",
                  "hi": "Broadcasting follows shape compatibility rules"
                },
                {
                  "en": "Array multiplication is element-wise by default",
                  "hi": "Array multiplication is element-wise by default"
                },
                {
                  "en": "Check units before combining arrays",
                  "hi": "Check units before combining arrays"
                },
                {
                  "en": "Inspect a few values to validate the result",
                  "hi": "Inspect a few values to validate the result"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 5",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Vectorized Operations and Broadcasting",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import numpy as np",
                  "Make a library or function available for the example."
                ],
                [
                  "prices = np.array([100, 200, 300])",
                  "Create or update a value used by the calculation."
                ],
                [
                  "new_prices = prices * 1.10",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(new_prices)",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retailer increases every product price by 10%. NumPy can apply the same multiplier to the whole array. The one-dimensional array has length 3, matching the final axis of the 2 x 3 matrix. NumPy adds the three values to each row. Incompatible shapes raise a broadcasting error rather than silently guessing.",
              "bodyHi": "A retailer increases every product price by 10%. NumPy can apply the same multiplier to the whole array. The one-dimensional array has length 3, matching the final axis of the 2 x 3 matrix. NumPy adds the three values to each row. Incompatible shapes raise a broadcasting error rather than silently guessing."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Broadcasting follows shape compatibility rules",
                  "hi": "Broadcasting follows shape compatibility rules"
                },
                {
                  "en": "Array multiplication is element-wise by default",
                  "hi": "Array multiplication is element-wise by default"
                },
                {
                  "en": "Check units before combining arrays",
                  "hi": "Check units before combining arrays"
                },
                {
                  "en": "Inspect a few values to validate the result",
                  "hi": "Inspect a few values to validate the result"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M08_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "Aggregation and Summary Statistics",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Aggregation and Summary Statistics",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Select",
                  "bodyEn": "Choose values and units",
                  "bodyHi": "Choose values and units",
                  "tone": "lavender"
                },
                {
                  "title": "Aggregate",
                  "bodyEn": "Apply a statistic",
                  "bodyHi": "Apply a statistic",
                  "tone": "sky"
                },
                {
                  "title": "Axis",
                  "bodyEn": "Decide rows or columns",
                  "bodyHi": "Decide rows or columns",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "Interpret the result",
                  "bodyHi": "Interpret the result",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Two stores report three daily sales values each. The analyst wants totals per store and totals per day.",
              "bodyHi": "Two stores report three daily sales values each. The analyst wants totals per store and totals per day."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Aggregation",
                  "Summarizing values"
                ],
                [
                  "Mean",
                  "Arithmetic average"
                ],
                [
                  "Median",
                  "Middle value"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Always name the aggregation and period",
                  "hi": "Always name the aggregation and period"
                },
                {
                  "en": "Use the correct axis",
                  "hi": "Use the correct axis"
                },
                {
                  "en": "Mean can be affected by outliers",
                  "hi": "Mean can be affected by outliers"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Aggregation combines many numbers into a summary. NumPy provides sum(), mean(), min(), max(), median(), and standard deviation functions. For multidimensional arrays, axis controls which direction is summarized.",
        "bodyHi": "Aggregation combines many numbers into a summary. NumPy provides sum(), mean(), min(), max(), median(), and standard deviation functions. For multidimensional arrays, axis controls which direction is summarized."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Aggregation and Summary Statistics",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nsales = np.array([[10, 20, 30],\n                  [40, 50, 60]])\nprint(sales.sum(axis=1))\nprint(sales.sum(axis=0))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[ 60 150]\n[50 70 90]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "axis=1 collapses columns within each row, so store totals are 60 and 150. axis=0 collapses rows, so day totals are 50, 70, and 90.",
              "bodyHi": "axis=1 collapses columns within each row, so store totals are 60 and 150. axis=0 collapses rows, so day totals are 50, 70, and 90."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Aggregation and Summary Statistics",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([10, 20, 30, 100])\nprint(np.mean(a))\nprint(np.median(a))\nprint(np.max(a))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "40.0\n25.0\n100"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The large value 100 pulls the mean above the median. Different summaries answer different questions. Check whether NaN values are present; NumPy also offers nanmean and other functions for missing numeric values.",
              "bodyHi": "The large value 100 pulls the mean above the median. Different summaries answer different questions. Check whether NaN values are present; NumPy also offers nanmean and other functions for missing numeric values."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Always name the aggregation and period",
                  "hi": "Always name the aggregation and period"
                },
                {
                  "en": "Use the correct axis",
                  "hi": "Use the correct axis"
                },
                {
                  "en": "Mean can be affected by outliers",
                  "hi": "Mean can be affected by outliers"
                },
                {
                  "en": "Decide how missing values should be handled",
                  "hi": "Decide how missing values should be handled"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M08_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "Boolean Masks and Filtering",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Boolean Masks and Filtering",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Condition",
                  "bodyEn": "Create a comparison",
                  "bodyHi": "Create a comparison",
                  "tone": "lavender"
                },
                {
                  "title": "Mask",
                  "bodyEn": "Get True/False values",
                  "bodyHi": "Get True/False values",
                  "tone": "sky"
                },
                {
                  "title": "Filter",
                  "bodyEn": "Select matching elements",
                  "bodyHi": "Select matching elements",
                  "tone": "green"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Analyze the subset",
                  "bodyHi": "Analyze the subset",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A store wants to examine daily sales amounts above 100 and calculate their total.",
              "bodyHi": "A store wants to examine daily sales amounts above 100 and calculate their total."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Boolean mask",
                  "True/False selector"
                ],
                [
                  "Element-wise",
                  "Per-value comparison"
                ],
                [
                  "Filter",
                  "Select a subset"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use & and | for NumPy array conditions",
                  "hi": "Use & and | for NumPy array conditions"
                },
                {
                  "en": "Wrap each comparison in parentheses",
                  "hi": "Wrap each comparison in parentheses"
                },
                {
                  "en": "Check mask length and shape",
                  "hi": "Check mask length and shape"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A Boolean mask is an array of True and False values created by a condition. Applying the mask selects only matching elements. This is useful for filtering numeric datasets without writing a loop for each record.",
        "bodyHi": "A Boolean mask is an array of True and False values created by a condition. Applying the mask selects only matching elements. This is useful for filtering numeric datasets without writing a loop for each record."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Boolean Masks and Filtering",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nsales = np.array([80, 150, 90, 200])\nmask = sales > 100\nprint(mask)\nprint(sales[mask])"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[False  True False  True]\n[150 200]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The comparison checks each element and creates four Boolean results. Indexing sales with that mask keeps only 150 and 200. The mask must align with the array being filtered.",
              "bodyHi": "The comparison checks each element and creates four Boolean results. Indexing sales with that mask keeps only 150 and 200. The mask must align with the array being filtered."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Boolean Masks and Filtering",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([5, 12, 18, 25])\nprint(a[(a >= 10) & (a < 20)])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[12 18]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Use & for element-wise AND and | for element-wise OR on NumPy Boolean arrays, with parentheses around each condition. Python's and/or operators are not the correct choice for combining full array conditions.",
              "bodyHi": "Use & for element-wise AND and | for element-wise OR on NumPy Boolean arrays, with parentheses around each condition. Python's and/or operators are not the correct choice for combining full array conditions."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use & and | for NumPy array conditions",
                  "hi": "Use & and | for NumPy array conditions"
                },
                {
                  "en": "Wrap each comparison in parentheses",
                  "hi": "Wrap each comparison in parentheses"
                },
                {
                  "en": "Check mask length and shape",
                  "hi": "Check mask length and shape"
                },
                {
                  "en": "Filtering does not explain why values differ",
                  "hi": "Filtering does not explain why values differ"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M08_T08_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M08",
  "moduleTitle": "NumPy for Numerical Analysis",
  "topic": "",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 8",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Reshape",
                  "bodyEn": "Arrange store-by-day data",
                  "bodyHi": "Arrange store-by-day data",
                  "tone": "lavender"
                },
                {
                  "title": "Combine",
                  "bodyEn": "Add new rows or columns",
                  "bodyHi": "Add new rows or columns",
                  "tone": "sky"
                },
                {
                  "title": "Aggregate",
                  "bodyEn": "Calculate KPIs",
                  "bodyHi": "Calculate KPIs",
                  "tone": "green"
                },
                {
                  "title": "Report",
                  "bodyEn": "Label the results clearly",
                  "bodyHi": "Label the results clearly",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A company has sales for two stores across three days. It wants a matrix, totals per store, and a grand total that can be shown on a dashboard.",
              "bodyHi": "A company has sales for two stores across three days. It wants a matrix, totals per store, and a grand total that can be shown on a dashboard."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Reshape",
                  "Rearrange dimensions"
                ],
                [
                  "Stack",
                  "Combine arrays"
                ],
                [
                  "KPI",
                  "Metric tied to a business goal"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep dimension labels outside the raw array",
                  "hi": "Keep dimension labels outside the raw array"
                },
                {
                  "en": "Check shapes before stacking",
                  "hi": "Check shapes before stacking"
                },
                {
                  "en": "Reconcile totals after reshaping",
                  "hi": "Reconcile totals after reshaping"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Reshaping, Combining Arrays & Sales Analytics Dashboard** Reshaping changes how an array is arranged; combining joins arrays along a chosen axis. Together with aggregations, these operations support the numeric logic behind a simple retail dashboard. A real dashboard still needs labels, validation, and business context.",
        "bodyHi": "**Reshaping, Combining Arrays & Sales Analytics Dashboard** Reshaping changes how an array is arranged; combining joins arrays along a chosen axis. Together with aggregations, these operations support the numeric logic behind a simple retail dashboard. A real dashboard still needs labels, validation, and business context."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 8",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nvalues = np.array([100, 120, 130, 80, 90, 110])\nsales = values.reshape(2, 3)\nprint(sales.sum(axis=1))\nprint(sales.sum())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[350 280]\n630"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "reshape(2,3) places the first three values in store 1 and the next three in store 2. sum(axis=1) calculates store totals. sum() without axis adds all six amounts.",
              "bodyHi": "reshape(2,3) places the first three values in store 1 and the next three in store 2. sum(axis=1) calculates store totals. sum() without axis adds all six amounts."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Reshaping, Combining Arrays & Sales Analytics Dashboard Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Reshaping, Combining Arrays & Sales Analytics Dashboard Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 8",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\na = np.array([[10, 20]])\nb = np.array([[30, 40]])\ncombined = np.vstack([a, b])\nprint(combined)\nprint(combined.mean(axis=0))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[[10 20]\n [30 40]]\n[20. 30.]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "vstack() adds rows vertically when column counts match. mean(axis=0) calculates the average of each column. Validate that rows represent the same type of entity and columns represent the same measures before combining.",
              "bodyHi": "vstack() adds rows vertically when column counts match. mean(axis=0) calculates the average of each column. Validate that rows represent the same type of entity and columns represent the same measures before combining."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep dimension labels outside the raw array",
                  "hi": "Keep dimension labels outside the raw array"
                },
                {
                  "en": "Check shapes before stacking",
                  "hi": "Check shapes before stacking"
                },
                {
                  "en": "Reconcile totals after reshaping",
                  "hi": "Reconcile totals after reshaping"
                },
                {
                  "en": "Explain whether KPIs are sums, means, or rates",
                  "hi": "Explain whether KPIs are sums, means, or rates"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Reshaping, Combining Arrays & Sales Analytics Dashboard**",
        "bodyHi": "**Reshaping, Combining Arrays & Sales Analytics Dashboard**"
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M08 | TOPIC 8",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import numpy as np",
                  "Make a library or function available for the example."
                ],
                [
                  "values = np.array([100, 120, 130, 80, 90, 110])",
                  "Create or update a value used by the calculation."
                ],
                [
                  "sales = values.reshape(2, 3)",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(sales.sum(axis=1))",
                  "Display a value so the result can be checked."
                ],
                [
                  "print(sales.sum())",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A company has sales for two stores across three days. It wants a matrix, totals per store, and a grand total that can be shown on a dashboard. vstack() adds rows vertically when column counts match. mean(axis=0) calculates the average of each column. Validate that rows represent the same type of entity and columns represent the same measures before combining.",
              "bodyHi": "A company has sales for two stores across three days. It wants a matrix, totals per store, and a grand total that can be shown on a dashboard. vstack() adds rows vertically when column counts match. mean(axis=0) calculates the average of each column. Validate that rows represent the same type of entity and columns represent the same measures before combining."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep dimension labels outside the raw array",
                  "hi": "Keep dimension labels outside the raw array"
                },
                {
                  "en": "Check shapes before stacking",
                  "hi": "Check shapes before stacking"
                },
                {
                  "en": "Reconcile totals after reshaping",
                  "hi": "Reconcile totals after reshaping"
                },
                {
                  "en": "Explain whether KPIs are sums, means, or rates",
                  "hi": "Explain whether KPIs are sums, means, or rates"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Reshaping, Combining Arrays & Sales Analytics Dashboard Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Reshaping, Combining Arrays & Sales Analytics Dashboard Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M09_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "What Is Pandas?",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "What Is Pandas?",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Load",
                  "bodyEn": "Bring records into a DataFrame",
                  "bodyHi": "Bring records into a DataFrame",
                  "tone": "lavender"
                },
                {
                  "title": "Inspect",
                  "bodyEn": "Check rows and types",
                  "bodyHi": "Check rows and types",
                  "tone": "sky"
                },
                {
                  "title": "Transform",
                  "bodyEn": "Clean and calculate",
                  "bodyHi": "Clean and calculate",
                  "tone": "green"
                },
                {
                  "title": "Report",
                  "bodyEn": "Summarize results",
                  "bodyHi": "Summarize results",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retail analyst has three order amounts and wants a total. pandas can hold the values in a named column and calculate the result.",
              "bodyHi": "A retail analyst has three order amounts and wants a total. pandas can hold the values in a named column and calculate the result."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Series",
                  "Labeled one-dimensional data"
                ],
                [
                  "DataFrame",
                  "Two-dimensional table"
                ],
                [
                  "Index",
                  "Row labels"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Import pandas as pd by convention",
                  "hi": "Import pandas as pd by convention"
                },
                {
                  "en": "DataFrames have rows and columns",
                  "hi": "DataFrames have rows and columns"
                },
                {
                  "en": "Series are one-dimensional",
                  "hi": "Series are one-dimensional"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "pandas is a Python library for working with structured data. It provides Series for one-dimensional labeled values and DataFrame for two-dimensional tables. Analysts use pandas to load, inspect, clean, join, summarize, and export datasets.",
        "bodyHi": "pandas is a Python library for working with structured data. It provides Series for one-dimensional labeled values and DataFrame for two-dimensional tables. Analysts use pandas to load, inspect, clean, join, summarize, and export datasets."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "What Is Pandas?",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"amount\": [100, 150, 80]})\nprint(df[\"amount\"].sum())\nprint(len(df))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "330\n3"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "pd.DataFrame creates a table with one column named amount. Selecting that column gives a Series. sum() adds the three amounts and len(df) counts three rows.",
              "bodyHi": "pd.DataFrame creates a table with one column named amount. Selecting that column gives a Series. sum() adds the three amounts and len(df) counts three rows."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "What Is Pandas?",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\nsales = pd.Series([10, 20, 30], name=\"sales\")\nprint(sales.mean())\nprint(sales.name)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "20.0\nsales"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The Series has one labeled sequence of values. pandas is especially useful for tabular business data, but its convenience does not remove the need to validate missing values, duplicates, and metric definitions.",
              "bodyHi": "The Series has one labeled sequence of values. pandas is especially useful for tabular business data, but its convenience does not remove the need to validate missing values, duplicates, and metric definitions."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Import pandas as pd by convention",
                  "hi": "Import pandas as pd by convention"
                },
                {
                  "en": "DataFrames have rows and columns",
                  "hi": "DataFrames have rows and columns"
                },
                {
                  "en": "Series are one-dimensional",
                  "hi": "Series are one-dimensional"
                },
                {
                  "en": "Inspect types before calculating",
                  "hi": "Inspect types before calculating"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Series and DataFrames",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Series and DataFrames",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Series",
                  "bodyEn": "One labeled column",
                  "bodyHi": "One labeled column",
                  "tone": "lavender"
                },
                {
                  "title": "DataFrame",
                  "bodyEn": "Several columns",
                  "bodyHi": "Several columns",
                  "tone": "sky"
                },
                {
                  "title": "Index",
                  "bodyEn": "Row identifiers",
                  "bodyHi": "Row identifiers",
                  "tone": "green"
                },
                {
                  "title": "Select",
                  "bodyEn": "Choose needed fields",
                  "bodyHi": "Choose needed fields",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop stores item names and prices. A DataFrame keeps the fields together, while selecting the price column returns a Series.",
              "bodyHi": "A shop stores item names and prices. A DataFrame keeps the fields together, while selecting the price column returns a Series."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Series",
                  "One-dimensional pandas object"
                ],
                [
                  "DataFrame",
                  "Tabular pandas object"
                ],
                [
                  "Index",
                  "Labels for rows"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Series have one value axis",
                  "hi": "Series have one value axis"
                },
                {
                  "en": "DataFrames have two axes",
                  "hi": "DataFrames have two axes"
                },
                {
                  "en": "loc selects labels",
                  "hi": "loc selects labels"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A Series is a one-dimensional object with an index. A DataFrame combines multiple columns into a table with shared row labels. Understanding this difference makes selecting, filtering, and calculating data much easier.",
        "bodyHi": "A Series is a one-dimensional object with an index. A DataFrame combines multiple columns into a table with shared row labels. Understanding this difference makes selecting, filtering, and calculating data much easier."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Series and DataFrames",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"item\": [\"Pen\", \"Book\"],\n                   \"price\": [10, 50]})\nprint(df[\"price\"].sum())\nprint(df.shape)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "60\n(2, 2)"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The table contains two rows and two columns. df[\"price\"] is a Series containing 10 and 50. Its sum is 60. shape reports (row count, column count).",
              "bodyHi": "The table contains two rows and two columns. df[\"price\"] is a Series containing 10 and 50. Its sum is 60. shape reports (row count, column count)."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Series and DataFrames",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ns = pd.Series([5, 8], index=[\"Mon\", \"Tue\"])\nprint(s.loc[\"Tue\"])\nprint(s.iloc[0])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "8\n5"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "loc uses labels, while iloc uses integer positions. A DataFrame can have a custom index, but an index is not automatically a unique business identifier. Keep customer or order IDs in a clear column when appropriate.",
              "bodyHi": "loc uses labels, while iloc uses integer positions. A DataFrame can have a custom index, but an index is not automatically a unique business identifier. Keep customer or order IDs in a clear column when appropriate."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Series have one value axis",
                  "hi": "Series have one value axis"
                },
                {
                  "en": "DataFrames have two axes",
                  "hi": "DataFrames have two axes"
                },
                {
                  "en": "loc selects labels",
                  "hi": "loc selects labels"
                },
                {
                  "en": "iloc selects positions",
                  "hi": "iloc selects positions"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Reading CSV and Excel Files",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 3",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Reading CSV and Excel Files",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Locate",
                  "bodyEn": "Confirm the file path",
                  "bodyHi": "Confirm the file path",
                  "tone": "lavender"
                },
                {
                  "title": "Read",
                  "bodyEn": "Use the right reader",
                  "bodyHi": "Use the right reader",
                  "tone": "sky"
                },
                {
                  "title": "Inspect",
                  "bodyEn": "Check columns and rows",
                  "bodyHi": "Check columns and rows",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Confirm record counts and totals",
                  "bodyHi": "Confirm record counts and totals",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A company exports order data as sales.csv. The analyst reads it, checks the first rows, and totals a numeric amount column.",
              "bodyHi": "A company exports order data as sales.csv. The analyst reads it, checks the first rows, and totals a numeric amount column."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "CSV",
                  "Comma-separated values"
                ],
                [
                  "Workbook",
                  "Excel file with sheets"
                ],
                [
                  "Encoding",
                  "How text is stored"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check the file path and encoding",
                  "hi": "Check the file path and encoding"
                },
                {
                  "en": "Inspect inferred data types",
                  "hi": "Inspect inferred data types"
                },
                {
                  "en": "Confirm expected row count",
                  "hi": "Confirm expected row count"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "pandas can load CSV and Excel files into DataFrames. read_csv() handles text tables and read_excel() handles spreadsheet files. File reading is only the beginning: check column names, data types, missing values, and whether the expected records were loaded.",
        "bodyHi": "pandas can load CSV and Excel files into DataFrames. read_csv() handles text tables and read_excel() handles spreadsheet files. File reading is only the beginning: check column names, data types, missing values, and whether the expected records were loaded."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 3",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Reading CSV and Excel Files",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\nfrom io import StringIO\ncsv_text = \"item,amount\\nPen,20\\nBook,50\"\ndf = pd.read_csv(StringIO(csv_text))\nprint(df.shape)\nprint(df[\"amount\"].sum())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "(2, 2)\n70"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "StringIO makes a small CSV-like text stream so this example runs without a separate file. read_csv() creates a DataFrame. The amount column is inferred as numeric here, but real files may contain mixed or missing values.",
              "bodyHi": "StringIO makes a small CSV-like text stream so this example runs without a separate file. read_csv() creates a DataFrame. The amount column is inferred as numeric here, but real files may contain mixed or missing values."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 3",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Reading CSV and Excel Files",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "# For a real workbook on your computer:\n# df = pd.read_excel(\"sales.xlsx\", sheet_name=\"Orders\")\nprint(\"Use read_excel for .xlsx files\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Use read_excel for .xlsx files"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "read_excel() usually needs an Excel-reading engine such as openpyxl. Always inspect sheet names and headers. Never assume that a successfully loaded file has correct dates, currency, or duplicate handling.",
              "bodyHi": "read_excel() usually needs an Excel-reading engine such as openpyxl. Always inspect sheet names and headers. Never assume that a successfully loaded file has correct dates, currency, or duplicate handling."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check the file path and encoding",
                  "hi": "Check the file path and encoding"
                },
                {
                  "en": "Inspect inferred data types",
                  "hi": "Inspect inferred data types"
                },
                {
                  "en": "Confirm expected row count",
                  "hi": "Confirm expected row count"
                },
                {
                  "en": "Validate source totals after import",
                  "hi": "Validate source totals after import"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 3",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Reading CSV and Excel Files",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "from io import StringIO",
                  "Make a library or function available for the example."
                ],
                [
                  "csv_text = \"item,amount\\nPen,20\\nBook,50\"",
                  "Create or update a value used by the calculation."
                ],
                [
                  "df = pd.read_csv(StringIO(csv_text))",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(df.shape)",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A company exports order data as sales.csv. The analyst reads it, checks the first rows, and totals a numeric amount column. read_excel() usually needs an Excel-reading engine such as openpyxl. Always inspect sheet names and headers. Never assume that a successfully loaded file has correct dates, currency, or duplicate handling.",
              "bodyHi": "A company exports order data as sales.csv. The analyst reads it, checks the first rows, and totals a numeric amount column. read_excel() usually needs an Excel-reading engine such as openpyxl. Always inspect sheet names and headers. Never assume that a successfully loaded file has correct dates, currency, or duplicate handling."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check the file path and encoding",
                  "hi": "Check the file path and encoding"
                },
                {
                  "en": "Inspect inferred data types",
                  "hi": "Inspect inferred data types"
                },
                {
                  "en": "Confirm expected row count",
                  "hi": "Confirm expected row count"
                },
                {
                  "en": "Validate source totals after import",
                  "hi": "Validate source totals after import"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M09_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Inspecting Data with head(), info() and describe()",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Inspecting Data with head(), info() and describe()",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Preview",
                  "bodyEn": "Use head()",
                  "bodyHi": "Use head()",
                  "tone": "lavender"
                },
                {
                  "title": "Structure",
                  "bodyEn": "Use info() and dtypes",
                  "bodyHi": "Use info() and dtypes",
                  "tone": "sky"
                },
                {
                  "title": "Summary",
                  "bodyEn": "Use describe()",
                  "bodyHi": "Use describe()",
                  "tone": "green"
                },
                {
                  "title": "Investigate",
                  "bodyEn": "Check anomalies",
                  "bodyHi": "Check anomalies",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A sales dataset may contain numeric amounts, text cities, and missing values. Quick inspection helps the analyst decide what to clean before calculating KPIs.",
              "bodyHi": "A sales dataset may contain numeric amounts, text cities, and missing values. Quick inspection helps the analyst decide what to clean before calculating KPIs."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Profile",
                  "Inspect data structure"
                ],
                [
                  "Null",
                  "Missing value"
                ],
                [
                  "dtype",
                  "Column data type"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "head() shows only a sample",
                  "hi": "head() shows only a sample"
                },
                {
                  "en": "info() reveals null counts and dtypes",
                  "hi": "info() reveals null counts and dtypes"
                },
                {
                  "en": "describe() summarizes but cannot explain causes",
                  "hi": "describe() summarizes but cannot explain causes"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Before analysis, inspect the structure and quality of a DataFrame. head() previews records, info() reports columns and non-null counts, and describe() summarizes numeric columns. These checks help catch unexpected types and missing data early.",
        "bodyHi": "Before analysis, inspect the structure and quality of a DataFrame. head() previews records, info() reports columns and non-null counts, and describe() summarizes numeric columns. These checks help catch unexpected types and missing data early."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Inspecting Data with head(), info() and describe()",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"amount\": [100, 200, 300],\n                   \"city\": [\"Patna\", \"Delhi\", \"Patna\"]})\nprint(df.head(2).to_string(index=False))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "amount  city\n    100 Patna\n    200 Delhi"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "head(2) returns the first two rows. to_string(index=False) hides the index for cleaner output. A preview shows examples, but it does not prove that every row is valid.",
              "bodyHi": "head(2) returns the first two rows. to_string(index=False) hides the index for cleaner output. A preview shows examples, but it does not prove that every row is valid."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Inspecting Data with head(), info() and describe()",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"amount\": [100, 200, 300]})\nprint(df[\"amount\"].describe()[\"mean\"])\nprint(df.isna().sum()[\"amount\"])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "200.0\n0"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "describe() provides count, mean, standard deviation, and percentiles for numeric columns. isna().sum() counts missing values. For large datasets, also check unique values, duplicates, and ranges.",
              "bodyHi": "describe() provides count, mean, standard deviation, and percentiles for numeric columns. isna().sum() counts missing values. For large datasets, also check unique values, duplicates, and ranges."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "head() shows only a sample",
                  "hi": "head() shows only a sample"
                },
                {
                  "en": "info() reveals null counts and dtypes",
                  "hi": "info() reveals null counts and dtypes"
                },
                {
                  "en": "describe() summarizes but cannot explain causes",
                  "hi": "describe() summarizes but cannot explain causes"
                },
                {
                  "en": "Check missing values explicitly",
                  "hi": "Check missing values explicitly"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Selecting Columns and Rows (loc & iloc)",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Selecting Columns and Rows (loc & iloc)",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Columns",
                  "bodyEn": "Select by column name",
                  "bodyHi": "Select by column name",
                  "tone": "lavender"
                },
                {
                  "title": "loc",
                  "bodyEn": "Select labels",
                  "bodyHi": "Select labels",
                  "tone": "sky"
                },
                {
                  "title": "iloc",
                  "bodyEn": "Select positions",
                  "bodyHi": "Select positions",
                  "tone": "green"
                },
                {
                  "title": "Check",
                  "bodyEn": "Verify the returned shape",
                  "bodyHi": "Verify the returned shape",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A customer table contains names, cities, and spending. An analyst wants the city for one row and the first two customers.",
              "bodyHi": "A customer table contains names, cities, and spending. An analyst wants the city for one row and the first two customers."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Label",
                  "Named row or column"
                ],
                [
                  "Position",
                  "Integer location"
                ],
                [
                  "Selection",
                  "Choosing part of a table"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "loc is label-based",
                  "hi": "loc is label-based"
                },
                {
                  "en": "iloc is position-based",
                  "hi": "iloc is position-based"
                },
                {
                  "en": "iloc stop is excluded",
                  "hi": "iloc stop is excluded"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "pandas supports column selection, row selection by label, and row selection by integer position. loc uses index and column labels, while iloc uses numeric positions. Clear selection avoids accidental analysis of the wrong records.",
        "bodyHi": "pandas supports column selection, row selection by label, and row selection by integer position. loc uses index and column labels, while iloc uses numeric positions. Clear selection avoids accidental analysis of the wrong records."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Selecting Columns and Rows (loc & iloc)",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"Asha\", \"Ravi\"],\n                   \"city\": [\"Patna\", \"Delhi\"]})\nprint(df.loc[0, \"city\"])\nprint(df.iloc[1, 0])"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Patna\nRavi"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "loc[0,\"city\"] uses the row label 0 and the column label city. iloc[1,0] uses the second row and first column by position. Default DataFrame row labels happen to be 0 and 1 in this example.",
              "bodyHi": "loc[0,\"city\"] uses the row label 0 and the column label city. iloc[1,0] uses the second row and first column by position. Default DataFrame row labels happen to be 0 and 1 in this example."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Selecting Columns and Rows (loc & iloc)",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3], \"b\": [4, 5, 6]})\nprint(df.loc[0:1, [\"a\", \"b\"]].shape)\nprint(df.iloc[0:2, 0:1].shape)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "(2, 2)\n(2, 1)"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "loc label slices include the ending label when present, while iloc position slices exclude the stop position. Be careful after filtering, because row labels may no longer match row positions.",
              "bodyHi": "loc label slices include the ending label when present, while iloc position slices exclude the stop position. Be careful after filtering, because row labels may no longer match row positions."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "loc is label-based",
                  "hi": "loc is label-based"
                },
                {
                  "en": "iloc is position-based",
                  "hi": "iloc is position-based"
                },
                {
                  "en": "iloc stop is excluded",
                  "hi": "iloc stop is excluded"
                },
                {
                  "en": "Do not confuse index labels with row numbers",
                  "hi": "Do not confuse index labels with row numbers"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Filtering and Sorting DataFrames",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Filtering and Sorting DataFrames",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Condition",
                  "bodyEn": "Define which rows matter",
                  "bodyHi": "Define which rows matter",
                  "tone": "lavender"
                },
                {
                  "title": "Filter",
                  "bodyEn": "Select matching records",
                  "bodyHi": "Select matching records",
                  "tone": "sky"
                },
                {
                  "title": "Sort",
                  "bodyEn": "Choose order",
                  "bodyHi": "Choose order",
                  "tone": "green"
                },
                {
                  "title": "Check",
                  "bodyEn": "Inspect the subset",
                  "bodyHi": "Inspect the subset",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A store wants to find orders worth at least 200 and show them from highest to lowest amount.",
              "bodyHi": "A store wants to find orders worth at least 200 and show them from highest to lowest amount."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Boolean filter",
                  "True/False row selection"
                ],
                [
                  "sort_values",
                  "Order rows"
                ],
                [
                  "Subset",
                  "Selected part of data"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Wrap each Boolean condition in parentheses",
                  "hi": "Wrap each Boolean condition in parentheses"
                },
                {
                  "en": "Use & and | for Series conditions",
                  "hi": "Use & and | for Series conditions"
                },
                {
                  "en": "Check whether sorting is ascending or descending",
                  "hi": "Check whether sorting is ascending or descending"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Filtering keeps rows that satisfy a condition. Sorting rearranges records by one or more columns. These operations help analysts focus on relevant customers, orders, or time periods before calculating summaries.",
        "bodyHi": "Filtering keeps rows that satisfy a condition. Sorting rearranges records by one or more columns. These operations help analysts focus on relevant customers, orders, or time periods before calculating summaries."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Filtering and Sorting DataFrames",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"item\": [\"Pen\", \"Bag\", \"Book\"],\n                   \"amount\": [50, 300, 200]})\nresult = df[df[\"amount\"] >= 200]\nprint(result.sort_values(\"amount\", ascending=False)[\"item\"].tolist())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['Bag', 'Book']"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The Boolean condition is True for Bag and Book. Filtering keeps those two rows. sort_values() orders them by amount descending, and tolist() shows the item names.",
              "bodyHi": "The Boolean condition is True for Bag and Book. Filtering keeps those two rows. sort_values() orders them by amount descending, and tolist() shows the item names."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Filtering and Sorting DataFrames",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Patna\", \"Delhi\", \"Patna\"],\n                   \"amount\": [50, 70, 90]})\nprint(df[(df[\"city\"] == \"Patna\") &\n         (df[\"amount\"] > 60)][\"amount\"].tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[90]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Use & and | with parentheses for combined pandas conditions. Do not use and/or between Series. Filtering before aggregation changes the denominator, so document the filters used in a report.",
              "bodyHi": "Use & and | with parentheses for combined pandas conditions. Do not use and/or between Series. Filtering before aggregation changes the denominator, so document the filters used in a report."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Wrap each Boolean condition in parentheses",
                  "hi": "Wrap each Boolean condition in parentheses"
                },
                {
                  "en": "Use & and | for Series conditions",
                  "hi": "Use & and | for Series conditions"
                },
                {
                  "en": "Check whether sorting is ascending or descending",
                  "hi": "Check whether sorting is ascending or descending"
                },
                {
                  "en": "Record filters used in KPI calculations",
                  "hi": "Record filters used in KPI calculations"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Creating and Renaming Columns",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Creating and Renaming Columns",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Understand source columns",
                  "bodyHi": "Understand source columns",
                  "tone": "lavender"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Create a derived field",
                  "bodyHi": "Create a derived field",
                  "tone": "sky"
                },
                {
                  "title": "Rename",
                  "bodyEn": "Use a clear label",
                  "bodyHi": "Use a clear label",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check sample calculations",
                  "bodyHi": "Check sample calculations",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An order table has quantity and unit price. The analyst creates a sales amount column and renames it for a report.",
              "bodyHi": "An order table has quantity and unit price. The analyst creates a sales amount column and renames it for a report."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Derived column",
                  "Calculated from other fields"
                ],
                [
                  "Schema",
                  "Column structure"
                ],
                [
                  "Metric",
                  "Business measurement"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use clear column names",
                  "hi": "Use clear column names"
                },
                {
                  "en": "Check units and currency",
                  "hi": "Check units and currency"
                },
                {
                  "en": "Validate derived columns with hand calculations",
                  "hi": "Validate derived columns with hand calculations"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "New columns let analysts calculate metrics from existing fields. Renaming makes confusing source headers easier to understand. Use clear names, correct units, and validation checks to prevent misleading reports.",
        "bodyHi": "New columns let analysts calculate metrics from existing fields. Renaming makes confusing source headers easier to understand. Use clear names, correct units, and validation checks to prevent misleading reports."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Creating and Renaming Columns",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"qty\": [2, 3],\n                   \"price\": [10, 20]})\ndf[\"sales\"] = df[\"qty\"] * df[\"price\"]\nprint(df[\"sales\"].tolist())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[20, 60]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Multiplication is performed row by row. The first order is 2 x 10 = 20; the second is 3 x 20 = 60. The new sales column can now be summed or grouped.",
              "bodyHi": "Multiplication is performed row by row. The first order is 2 x 10 = 20; the second is 3 x 20 = 60. The new sales column can now be summed or grouped."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Creating and Renaming Columns",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"qty\": [2], \"price\": [10]})\ndf = df.rename(columns={\"qty\": \"quantity\"})\nprint(df.columns.tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['quantity', 'price']"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "rename() returns a renamed DataFrame unless inplace=True is used. Keep names stable across scripts. A calculated column should have a clear definition: revenue, profit, and order value are not interchangeable.",
              "bodyHi": "rename() returns a renamed DataFrame unless inplace=True is used. Keep names stable across scripts. A calculated column should have a clear definition: revenue, profit, and order value are not interchangeable."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use clear column names",
                  "hi": "Use clear column names"
                },
                {
                  "en": "Check units and currency",
                  "hi": "Check units and currency"
                },
                {
                  "en": "Validate derived columns with hand calculations",
                  "hi": "Validate derived columns with hand calculations"
                },
                {
                  "en": "Avoid overwriting raw source fields unnecessarily",
                  "hi": "Avoid overwriting raw source fields unnecessarily"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T08_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Handling Missing Values (NaN & None)",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 8",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Handling Missing Values (NaN & None)",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Detect",
                  "bodyEn": "Use isna()",
                  "bodyHi": "Use isna()",
                  "tone": "lavender"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Count missing entries",
                  "bodyHi": "Count missing entries",
                  "tone": "sky"
                },
                {
                  "title": "Decide",
                  "bodyEn": "Fill, flag, or exclude",
                  "bodyHi": "Fill, flag, or exclude",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check impact on metrics",
                  "bodyHi": "Check impact on metrics",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A customer table has three spending amounts, but one is missing. The analyst should count the missing record before deciding how to handle it.",
              "bodyHi": "A customer table has three spending amounts, but one is missing. The analyst should count the missing record before deciding how to handle it."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "NaN",
                  "Missing numeric value"
                ],
                [
                  "Imputation",
                  "Filling missing data"
                ],
                [
                  "dropna",
                  "Removing missing entries"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Missing is not always zero",
                  "hi": "Missing is not always zero"
                },
                {
                  "en": "Check the reason for missing data",
                  "hi": "Check the reason for missing data"
                },
                {
                  "en": "Document imputation rules",
                  "hi": "Document imputation rules"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Missing values mean some information was not recorded or is unavailable. pandas represents missing numeric values with NaN and also recognizes None and pd.NA. Before filling or dropping values, ask why they are missing and whether zero would be meaningful.",
        "bodyHi": "Missing values mean some information was not recorded or is unavailable. pandas represents missing numeric values with NaN and also recognizes None and pd.NA. Before filling or dropping values, ask why they are missing and whether zero would be meaningful."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 8",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Handling Missing Values (NaN & None)",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"amount\": [100, None, 300]})\nprint(df[\"amount\"].isna().sum())\nprint(df[\"amount\"].mean())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1\n200.0"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "isna().sum() finds one missing value. mean() skips missing values by default, so it averages 100 and 300 to get 200.0. This may or may not be appropriate for the business question.",
              "bodyHi": "isna().sum() finds one missing value. mean() skips missing values by default, so it averages 100 and 300 to get 200.0. This may or may not be appropriate for the business question."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 8",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Handling Missing Values (NaN & None)",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"amount\": [100, None, 300]})\nprint(df[\"amount\"].fillna(0).sum())\nprint(df[\"amount\"].dropna().tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "400.0\n[100.0, 300.0]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "fillna(0) replaces the missing value with zero for that calculation; dropna() excludes it. Neither approach is universally correct. Keep track of missing counts and explain the effect on reported averages.",
              "bodyHi": "fillna(0) replaces the missing value with zero for that calculation; dropna() excludes it. Neither approach is universally correct. Keep track of missing counts and explain the effect on reported averages."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Missing is not always zero",
                  "hi": "Missing is not always zero"
                },
                {
                  "en": "Check the reason for missing data",
                  "hi": "Check the reason for missing data"
                },
                {
                  "en": "Document imputation rules",
                  "hi": "Document imputation rules"
                },
                {
                  "en": "Compare metrics before and after treatment",
                  "hi": "Compare metrics before and after treatment"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 8",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Handling Missing Values (NaN & None)",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "df = pd.DataFrame({\"amount\": [100, None, 300]})",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(df[\"amount\"].isna().sum())",
                  "Display a value so the result can be checked."
                ],
                [
                  "print(df[\"amount\"].mean())",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A customer table has three spending amounts, but one is missing. The analyst should count the missing record before deciding how to handle it. fillna(0) replaces the missing value with zero for that calculation; dropna() excludes it. Neither approach is universally correct. Keep track of missing counts and explain the effect on reported averages.",
              "bodyHi": "A customer table has three spending amounts, but one is missing. The analyst should count the missing record before deciding how to handle it. fillna(0) replaces the missing value with zero for that calculation; dropna() excludes it. Neither approach is universally correct. Keep track of missing counts and explain the effect on reported averages."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Missing is not always zero",
                  "hi": "Missing is not always zero"
                },
                {
                  "en": "Check the reason for missing data",
                  "hi": "Check the reason for missing data"
                },
                {
                  "en": "Document imputation rules",
                  "hi": "Document imputation rules"
                },
                {
                  "en": "Compare metrics before and after treatment",
                  "hi": "Compare metrics before and after treatment"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M09_T09_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Removing Duplicates",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 9",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Removing Duplicates",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Define",
                  "bodyEn": "Choose the business key",
                  "bodyHi": "Choose the business key",
                  "tone": "lavender"
                },
                {
                  "title": "Detect",
                  "bodyEn": "Use duplicated()",
                  "bodyHi": "Use duplicated()",
                  "tone": "sky"
                },
                {
                  "title": "Review",
                  "bodyEn": "Check repeated records",
                  "bodyHi": "Check repeated records",
                  "tone": "green"
                },
                {
                  "title": "Remove",
                  "bodyEn": "Deduplicate only when justified",
                  "bodyHi": "Deduplicate only when justified",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A sales export accidentally contains the same order ID twice. Counting both rows would overstate revenue, so the analyst checks IDs before summarizing.",
              "bodyHi": "A sales export accidentally contains the same order ID twice. Counting both rows would overstate revenue, so the analyst checks IDs before summarizing."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Duplicate",
                  "Repeated record"
                ],
                [
                  "Business key",
                  "Identifier that defines uniqueness"
                ],
                [
                  "Deduplication",
                  "Removing true repeats"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Define duplicates by the right keys",
                  "hi": "Define duplicates by the right keys"
                },
                {
                  "en": "Keep audit counts before removal",
                  "hi": "Keep audit counts before removal"
                },
                {
                  "en": "Do not remove valid repeat purchases",
                  "hi": "Do not remove valid repeat purchases"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Duplicate records can inflate counts and totals. pandas provides duplicated() to flag repeated rows and drop_duplicates() to remove them. A duplicate must be defined using the correct business key, not just matching names or amounts.",
        "bodyHi": "Duplicate records can inflate counts and totals. pandas provides duplicated() to flag repeated rows and drop_duplicates() to remove them. A duplicate must be defined using the correct business key, not just matching names or amounts."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 9",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Removing Duplicates",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"order_id\": [1, 2, 2],\n                   \"amount\": [100, 200, 200]})\nprint(df.duplicated(\"order_id\").sum())\nprint(df.drop_duplicates(\"order_id\")[\"amount\"].sum())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1\n300"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The second appearance of order_id 2 is flagged as a duplicate. drop_duplicates keeps the first occurrence by default. The deduplicated total is 100 + 200 = 300.",
              "bodyHi": "The second appearance of order_id 2 is flagged as a duplicate. drop_duplicates keeps the first occurrence by default. The deduplicated total is 100 + 200 = 300."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 9",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Removing Duplicates",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"id\": [1, 1, 2],\n                   \"status\": [\"new\", \"paid\", \"new\"]})\nprint(df.drop_duplicates(\"id\", keep=\"last\")[\"status\"].tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['paid', 'new']"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "keep=\"last\" retains the last record per ID, which might be correct for a latest-status table but wrong for a transaction history. Choose a rule based on timestamps and business meaning.",
              "bodyHi": "keep=\"last\" retains the last record per ID, which might be correct for a latest-status table but wrong for a transaction history. Choose a rule based on timestamps and business meaning."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Define duplicates by the right keys",
                  "hi": "Define duplicates by the right keys"
                },
                {
                  "en": "Keep audit counts before removal",
                  "hi": "Keep audit counts before removal"
                },
                {
                  "en": "Do not remove valid repeat purchases",
                  "hi": "Do not remove valid repeat purchases"
                },
                {
                  "en": "Verify totals after deduplication",
                  "hi": "Verify totals after deduplication"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T10_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "GroupBy and Aggregation",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 10",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "GroupBy and Aggregation",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Group",
                  "bodyEn": "Choose category columns",
                  "bodyHi": "Choose category columns",
                  "tone": "lavender"
                },
                {
                  "title": "Aggregate",
                  "bodyEn": "Choose metric and function",
                  "bodyHi": "Choose metric and function",
                  "tone": "sky"
                },
                {
                  "title": "Reset",
                  "bodyEn": "Return a flat table if needed",
                  "bodyHi": "Return a flat table if needed",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check totals",
                  "bodyHi": "Check totals",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A store wants sales totals for each city. The analyst groups order amounts by city and checks that group totals add up to the overall total.",
              "bodyHi": "A store wants sales totals for each city. The analyst groups order amounts by city and checks that group totals add up to the overall total."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "GroupBy",
                  "Split-apply-combine operation"
                ],
                [
                  "Aggregation",
                  "Summary calculation"
                ],
                [
                  "KPI",
                  "Defined business metric"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Group by business categories",
                  "hi": "Group by business categories"
                },
                {
                  "en": "Choose the correct aggregation",
                  "hi": "Choose the correct aggregation"
                },
                {
                  "en": "Reconcile group totals with the overall total",
                  "hi": "Reconcile group totals with the overall total"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "groupby() splits records into categories and applies calculations to each group. Common aggregations include sum, count, mean, min, and max. It is one of the most important operations for business reporting.",
        "bodyHi": "groupby() splits records into categories and applies calculations to each group. Common aggregations include sum, count, mean, min, and max. It is one of the most important operations for business reporting."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 10",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "GroupBy and Aggregation",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Patna\", \"Delhi\", \"Patna\"],\n                   \"amount\": [100, 200, 50]})\nprint(df.groupby(\"city\")[\"amount\"].sum().to_dict())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "{'Delhi': 200, 'Patna': 150}"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "groupby(\"city\") creates groups. Selecting amount and calling sum() adds amounts within each group. Patna totals 150 and Delhi totals 200; together they equal 350.",
              "bodyHi": "groupby(\"city\") creates groups. Selecting amount and calling sum() adds amounts within each group. Patna totals 150 and Delhi totals 200; together they equal 350."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 10",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "GroupBy and Aggregation",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"A\", \"A\", \"B\"],\n                   \"amount\": [10, 30, 20]})\nprint(df.groupby(\"city\")[\"amount\"].agg([\"count\", \"mean\"]).to_string())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "      count  mean\ncity             \nA         2  20.0\nB         1  20.0"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "agg() can calculate several statistics at once. A group mean is not the same as a total, and averaging group means without considering group sizes can mislead. Document how missing group keys are handled.",
              "bodyHi": "agg() can calculate several statistics at once. A group mean is not the same as a total, and averaging group means without considering group sizes can mislead. Document how missing group keys are handled."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Group by business categories",
                  "hi": "Group by business categories"
                },
                {
                  "en": "Choose the correct aggregation",
                  "hi": "Choose the correct aggregation"
                },
                {
                  "en": "Reconcile group totals with the overall total",
                  "hi": "Reconcile group totals with the overall total"
                },
                {
                  "en": "Be careful when averaging group averages",
                  "hi": "Be careful when averaging group averages"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 10",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "GroupBy and Aggregation",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "df = pd.DataFrame({\"city\": [\"Patna\", \"Delhi\",...",
                  "Create or update a value used by the calculation."
                ],
                [
                  "\"amount\": [100, 200, 50]})",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "print(df.groupby(\"city\")[\"amount\"].sum().to_d...",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A store wants sales totals for each city. The analyst groups order amounts by city and checks that group totals add up to the overall total. agg() can calculate several statistics at once. A group mean is not the same as a total, and averaging group means without considering group sizes can mislead. Document how missing group keys are handled.",
              "bodyHi": "A store wants sales totals for each city. The analyst groups order amounts by city and checks that group totals add up to the overall total. agg() can calculate several statistics at once. A group mean is not the same as a total, and averaging group means without considering group sizes can mislead. Document how missing group keys are handled."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Group by business categories",
                  "hi": "Group by business categories"
                },
                {
                  "en": "Choose the correct aggregation",
                  "hi": "Choose the correct aggregation"
                },
                {
                  "en": "Reconcile group totals with the overall total",
                  "hi": "Reconcile group totals with the overall total"
                },
                {
                  "en": "Be careful when averaging group averages",
                  "hi": "Be careful when averaging group averages"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M09_T11_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Merge, Join and Concatenate",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 11",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Merge, Join and Concatenate",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Keys",
                  "bodyEn": "Identify shared IDs",
                  "bodyHi": "Identify shared IDs",
                  "tone": "lavender"
                },
                {
                  "title": "Join",
                  "bodyEn": "Choose match behavior",
                  "bodyHi": "Choose match behavior",
                  "tone": "sky"
                },
                {
                  "title": "Check",
                  "bodyEn": "Count rows before and after",
                  "bodyHi": "Count rows before and after",
                  "tone": "green"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Inspect unmatched records",
                  "bodyHi": "Inspect unmatched records",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "One table contains customer names and another contains orders. The analyst merges them on customer_id to show the customer for each order.",
              "bodyHi": "One table contains customer names and another contains orders. The analyst merges them on customer_id to show the customer for each order."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Merge",
                  "Match rows using keys"
                ],
                [
                  "Join key",
                  "Shared identifier"
                ],
                [
                  "Concatenate",
                  "Stack tables"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check uniqueness of join keys",
                  "hi": "Check uniqueness of join keys"
                },
                {
                  "en": "Choose inner/left/right/outer intentionally",
                  "hi": "Choose inner/left/right/outer intentionally"
                },
                {
                  "en": "Validate row counts after merge",
                  "hi": "Validate row counts after merge"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Merging connects tables using matching keys. Concatenation stacks rows or columns without necessarily matching records by business ID. These operations are powerful but can multiply rows when join keys are not unique.",
        "bodyHi": "Merging connects tables using matching keys. Concatenation stacks rows or columns without necessarily matching records by business ID. These operations are powerful but can multiply rows when join keys are not unique."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 11",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Merge, Join and Concatenate",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ncustomers = pd.DataFrame({\"id\": [1, 2], \"name\": [\"Asha\", \"Ravi\"]})\norders = pd.DataFrame({\"id\": [1, 1, 2], \"amount\": [50, 80, 40]})\nresult = orders.merge(customers, on=\"id\", how=\"left\")\nprint(result[\"name\"].tolist())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['Asha', 'Asha', 'Ravi']"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The left merge keeps all three order rows. Customer 1 appears twice because that customer has two orders. This is expected, not automatically a duplicate error.",
              "bodyHi": "The left merge keeps all three order rows. Customer 1 appears twice because that customer has two orders. This is expected, not automatically a duplicate error."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 11",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Merge, Join and Concatenate",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\na = pd.DataFrame({\"amount\": [10, 20]})\nb = pd.DataFrame({\"amount\": [30]})\nprint(pd.concat([a, b], ignore_index=True)[\"amount\"].tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[10, 20, 30]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "concat() stacks the rows and resets the index. For joins, use validate=\"many_to_one\" or another appropriate relationship rule when possible. Always check missing matches and unexpected row multiplication.",
              "bodyHi": "concat() stacks the rows and resets the index. For joins, use validate=\"many_to_one\" or another appropriate relationship rule when possible. Always check missing matches and unexpected row multiplication."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check uniqueness of join keys",
                  "hi": "Check uniqueness of join keys"
                },
                {
                  "en": "Choose inner/left/right/outer intentionally",
                  "hi": "Choose inner/left/right/outer intentionally"
                },
                {
                  "en": "Validate row counts after merge",
                  "hi": "Validate row counts after merge"
                },
                {
                  "en": "Concatenation is not a key-based join",
                  "hi": "Concatenation is not a key-based join"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 11",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Merge, Join and Concatenate",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "customers = pd.DataFrame({\"id\": [1, 2], \"name...",
                  "Create or update a value used by the calculation."
                ],
                [
                  "orders = pd.DataFrame({\"id\": [1, 1, 2], \"amou...",
                  "Create or update a value used by the calculation."
                ],
                [
                  "result = orders.merge(customers, on=\"id\", how...",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(result[\"name\"].tolist())",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "One table contains customer names and another contains orders. The analyst merges them on customer_id to show the customer for each order. concat() stacks the rows and resets the index. For joins, use validate=\"many_to_one\" or another appropriate relationship rule when possible. Always check missing matches and unexpected row multiplication.",
              "bodyHi": "One table contains customer names and another contains orders. The analyst merges them on customer_id to show the customer for each order. concat() stacks the rows and resets the index. For joins, use validate=\"many_to_one\" or another appropriate relationship rule when possible. Always check missing matches and unexpected row multiplication."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check uniqueness of join keys",
                  "hi": "Check uniqueness of join keys"
                },
                {
                  "en": "Choose inner/left/right/outer intentionally",
                  "hi": "Choose inner/left/right/outer intentionally"
                },
                {
                  "en": "Validate row counts after merge",
                  "hi": "Validate row counts after merge"
                },
                {
                  "en": "Concatenation is not a key-based join",
                  "hi": "Concatenation is not a key-based join"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M09_T12_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Dates and Text in Pandas",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 12",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Dates and Text in Pandas",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Parse",
                  "bodyEn": "Convert date text",
                  "bodyHi": "Convert date text",
                  "tone": "lavender"
                },
                {
                  "title": "Extract",
                  "bodyEn": "Use .dt attributes",
                  "bodyHi": "Use .dt attributes",
                  "tone": "sky"
                },
                {
                  "title": "Clean",
                  "bodyEn": "Use .str methods",
                  "bodyHi": "Use .str methods",
                  "tone": "green"
                },
                {
                  "title": "Group",
                  "bodyEn": "Summarize by period or category",
                  "bodyHi": "Summarize by period or category",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An analyst receives order dates as text and wants the month number for reporting. A separate city field needs consistent capitalization.",
              "bodyHi": "An analyst receives order dates as text and wants the month number for reporting. A separate city field needs consistent capitalization."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Datetime",
                  "Date/time type"
                ],
                [
                  "Accessor",
                  "Specialized .dt or .str operations"
                ],
                [
                  "Parsing",
                  "Turning text into typed values"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Convert dates before time calculations",
                  "hi": "Convert dates before time calculations"
                },
                {
                  "en": "Check failed parses",
                  "hi": "Check failed parses"
                },
                {
                  "en": "Use .str methods on text columns",
                  "hi": "Use .str methods on text columns"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Dates and text columns often arrive as strings. pandas provides to_datetime(), the .dt accessor for date parts, and .str methods for text processing. Correct types make filtering, grouping, and cleaning more reliable.",
        "bodyHi": "Dates and text columns often arrive as strings. pandas provides to_datetime(), the .dt accessor for date parts, and .str methods for text processing. Correct types make filtering, grouping, and cleaning more reliable."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 12",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Dates and Text in Pandas",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"date\": [\"2026-01-05\", \"2026-02-07\"]})\ndf[\"date\"] = pd.to_datetime(df[\"date\"])\nprint(df[\"date\"].dt.month.tolist())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[1, 2]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "pd.to_datetime parses the ISO-style date strings. .dt.month extracts month numbers. Invalid date strings should be reviewed; errors=\"coerce\" can mark them missing, but must not be used without checking how many failed.",
              "bodyHi": "pd.to_datetime parses the ISO-style date strings. .dt.month extracts month numbers. Invalid date strings should be reviewed; errors=\"coerce\" can mark them missing, but must not be used without checking how many failed."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 12",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Dates and Text in Pandas",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ns = pd.Series([\" patna \", \"DELHI\"])\nprint(s.str.strip().str.title().tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['Patna', 'Delhi']"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": ".str.strip() removes outer whitespace and .str.title() converts words to title case. Text normalization should respect real names and codes. For time-series work, check time zones and whether dates mean event time or reporting time.",
              "bodyHi": ".str.strip() removes outer whitespace and .str.title() converts words to title case. Text normalization should respect real names and codes. For time-series work, check time zones and whether dates mean event time or reporting time."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Convert dates before time calculations",
                  "hi": "Convert dates before time calculations"
                },
                {
                  "en": "Check failed parses",
                  "hi": "Check failed parses"
                },
                {
                  "en": "Use .str methods on text columns",
                  "hi": "Use .str methods on text columns"
                },
                {
                  "en": "Keep time zone and reporting period definitions clear",
                  "hi": "Keep time zone and reporting period definitions clear"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M09_T13_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M09",
  "moduleTitle": "Pandas for Data Analysis",
  "topic": "Exporting Clean Data & Final Project",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 13",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Exporting Clean Data & Final Project",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Review source records",
                  "bodyHi": "Review source records",
                  "tone": "lavender"
                },
                {
                  "title": "Clean",
                  "bodyEn": "Apply documented rules",
                  "bodyHi": "Apply documented rules",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Reconcile counts and totals",
                  "bodyHi": "Reconcile counts and totals",
                  "tone": "green"
                },
                {
                  "title": "Export",
                  "bodyEn": "Save a clear output",
                  "bodyHi": "Save a clear output",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop receives orders with repeated IDs and wants a clean file for reporting. The analyst must choose a justified duplicate rule and verify the resulting sales total.",
              "bodyHi": "A shop receives orders with repeated IDs and wants a clean file for reporting. The analyst must choose a justified duplicate rule and verify the resulting sales total."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Export",
                  "Save results"
                ],
                [
                  "Reconciliation",
                  "Check totals agree"
                ],
                [
                  "Data dictionary",
                  "Column definitions"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep the original source unchanged",
                  "hi": "Keep the original source unchanged"
                },
                {
                  "en": "Record cleaning decisions",
                  "hi": "Record cleaning decisions"
                },
                {
                  "en": "Reconcile source and output totals",
                  "hi": "Reconcile source and output totals"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "After cleaning and analyzing data, export a trustworthy dataset and document how it was produced. A complete workflow includes source inspection, transformations, validation, output creation, and a short explanation of assumptions.",
        "bodyHi": "After cleaning and analyzing data, export a trustworthy dataset and document how it was produced. A complete workflow includes source inspection, transformations, validation, output creation, and a short explanation of assumptions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 13",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Exporting Clean Data & Final Project",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"order_id\": [1, 2, 2],\n                   \"amount\": [100, 200, 200]})\nclean = df.drop_duplicates(\"order_id\")\nprint(clean[\"amount\"].sum())\nclean.to_csv(\"clean_orders.csv\", index=False)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "300"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The script keeps the first row for each order ID, sums the cleaned amounts, and exports a CSV without the pandas index. In real projects, inspect duplicates before deleting them and retain an audit record.",
              "bodyHi": "The script keeps the first row for each order ID, sums the cleaned amounts, and exports a CSV without the pandas index. In real projects, inspect duplicates before deleting them and retain an audit record."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 13",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Exporting Clean Data & Final Project",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"A\", \"A\", \"B\"],\n                   \"sales\": [10, 20, 30]})\nsummary = df.groupby(\"city\", as_index=False)[\"sales\"].sum()\nprint(summary[\"sales\"].sum())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "60"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The summary contains totals by city, and their sum equals the original total. A portfolio project should include a data dictionary, cleaning log, KPI definitions, charts, limitations, and a reproducible script or notebook.",
              "bodyHi": "The summary contains totals by city, and their sum equals the original total. A portfolio project should include a data dictionary, cleaning log, KPI definitions, charts, limitations, and a reproducible script or notebook."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep the original source unchanged",
                  "hi": "Keep the original source unchanged"
                },
                {
                  "en": "Record cleaning decisions",
                  "hi": "Record cleaning decisions"
                },
                {
                  "en": "Reconcile source and output totals",
                  "hi": "Reconcile source and output totals"
                },
                {
                  "en": "Do not export private fields without permission",
                  "hi": "Do not export private fields without permission"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M09 | TOPIC 13",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Exporting Clean Data & Final Project",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "df = pd.DataFrame({\"order_id\": [1, 2, 2],",
                  "Create or update a value used by the calculation."
                ],
                [
                  "\"amount\": [100, 200, 200]})",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "clean = df.drop_duplicates(\"order_id\")",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(clean[\"amount\"].sum())",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop receives orders with repeated IDs and wants a clean file for reporting. The analyst must choose a justified duplicate rule and verify the resulting sales total. The summary contains totals by city, and their sum equals the original total. A portfolio project should include a data dictionary, cleaning log, KPI definitions, charts, limitations, and a reproducible script or notebook.",
              "bodyHi": "A shop receives orders with repeated IDs and wants a clean file for reporting. The analyst must choose a justified duplicate rule and verify the resulting sales total. The summary contains totals by city, and their sum equals the original total. A portfolio project should include a data dictionary, cleaning log, KPI definitions, charts, limitations, and a reproducible script or notebook."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep the original source unchanged",
                  "hi": "Keep the original source unchanged"
                },
                {
                  "en": "Record cleaning decisions",
                  "hi": "Record cleaning decisions"
                },
                {
                  "en": "Reconcile source and output totals",
                  "hi": "Reconcile source and output totals"
                },
                {
                  "en": "Do not export private fields without permission",
                  "hi": "Do not export private fields without permission"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M10_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Why Data Visualization Matters",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Why Data Visualization Matters",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Question",
                  "bodyEn": "Choose what to learn",
                  "bodyHi": "Choose what to learn",
                  "tone": "lavender"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Select a valid metric",
                  "bodyHi": "Select a valid metric",
                  "tone": "sky"
                },
                {
                  "title": "Chart",
                  "bodyEn": "Match the visual to the question",
                  "bodyHi": "Match the visual to the question",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State the business meaning",
                  "bodyHi": "State the business meaning",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop sells different quantities of three products. A bar chart makes it easier to compare their quantities than reading a long list of numbers.",
              "bodyHi": "A shop sells different quantities of three products. A bar chart makes it easier to compare their quantities than reading a long list of numbers."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Visualization",
                  "Graphical display of data"
                ],
                [
                  "Metric",
                  "Measurement"
                ],
                [
                  "Axis",
                  "Chart scale or category direction"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Choose charts based on the question",
                  "hi": "Choose charts based on the question"
                },
                {
                  "en": "Label axes and units",
                  "hi": "Label axes and units"
                },
                {
                  "en": "Avoid misleading scales",
                  "hi": "Avoid misleading scales"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Data visualization turns numbers into charts that help people see comparisons, trends, distributions, and relationships. A good chart answers a clear question. It should show the correct measure, scale, units, and time period without hiding important limitations.",
        "bodyHi": "Data visualization turns numbers into charts that help people see comparisons, trends, distributions, and relationships. A good chart answers a clear question. It should show the correct measure, scale, units, and time period without hiding important limitations."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Why Data Visualization Matters",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "products = [\"Pen\", \"Book\", \"Bag\"]\nunits = [120, 75, 40]\nprint(list(zip(products, units)))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[('Pen', 120), ('Book', 75), ('Bag', 40)]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The values describe three categories and their unit sales. A bar chart would show one bar per product, making Pen the tallest. The chart must label the measure as units, not revenue.",
              "bodyHi": "The values describe three categories and their unit sales. A bar chart would show one bar per product, making Pen the tallest. The chart must label the measure as units, not revenue."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Why Data Visualization Matters",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nplt.bar([\"Pen\", \"Book\", \"Bag\"], [120, 75, 40])\nplt.ylabel(\"Units sold\")\nplt.title(\"Product sales\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A bar chart appears in the plotting window."
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "plt.bar draws bars for categories. ylabel names the vertical measure, title states the subject, and show displays the chart in an interactive environment. In a non-interactive script, you can save it using savefig().",
              "bodyHi": "plt.bar draws bars for categories. ylabel names the vertical measure, title states the subject, and show displays the chart in an interactive environment. In a non-interactive script, you can save it using savefig()."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Choose charts based on the question",
                  "hi": "Choose charts based on the question"
                },
                {
                  "en": "Label axes and units",
                  "hi": "Label axes and units"
                },
                {
                  "en": "Avoid misleading scales",
                  "hi": "Avoid misleading scales"
                },
                {
                  "en": "Explain what the chart cannot prove",
                  "hi": "Explain what the chart cannot prove"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**120 75 40 Pen Book Bag** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "**120 75 40 Pen Book Bag** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    }
  ]
};

const M10_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Matplotlib Basics",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Matplotlib Basics",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Figure",
                  "bodyEn": "Create the canvas",
                  "bodyHi": "Create the canvas",
                  "tone": "lavender"
                },
                {
                  "title": "Axes",
                  "bodyEn": "Choose plotting area",
                  "bodyHi": "Choose plotting area",
                  "tone": "sky"
                },
                {
                  "title": "Plot",
                  "bodyEn": "Draw data",
                  "bodyHi": "Draw data",
                  "tone": "green"
                },
                {
                  "title": "Label",
                  "bodyEn": "Add context and save",
                  "bodyHi": "Add context and save",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An analyst wants a small chart of weekly sales. Matplotlib can draw the trend and save it as a PNG for a report.",
              "bodyHi": "An analyst wants a small chart of weekly sales. Matplotlib can draw the trend and save it as a PNG for a report."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Figure",
                  "Whole chart canvas"
                ],
                [
                  "Axes",
                  "Plotting area"
                ],
                [
                  "DPI",
                  "Image resolution"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Name the chart and both axes",
                  "hi": "Name the chart and both axes"
                },
                {
                  "en": "Save high-resolution images for reports",
                  "hi": "Save high-resolution images for reports"
                },
                {
                  "en": "Close figures in batch scripts",
                  "hi": "Close figures in batch scripts"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Matplotlib is a widely used Python plotting library. The pyplot interface lets you create figures, add charts, label axes, and save images. Understanding figure and axes objects helps you control layout and build reusable charts.",
        "bodyHi": "Matplotlib is a widely used Python plotting library. The pyplot interface lets you create figures, add charts, label axes, and save images. Understanding figure and axes objects helps you control layout and build reusable charts."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Matplotlib Basics",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [100, 120, 110])\nax.set_xlabel(\"Week\")\nax.set_ylabel(\"Sales\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A line chart shows sales of 100, 120, and 110."
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "plt.subplots() creates a figure and axes. ax.plot draws the line. set_xlabel and set_ylabel name the measures. show displays the figure in a supported environment.",
              "bodyHi": "plt.subplots() creates a figure and axes. ax.plot draws the line. set_xlabel and set_ylabel name the measures. show displays the figure in a supported environment."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Matplotlib Basics",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.bar([\"A\", \"B\"], [5, 8])\nfig.savefig(\"chart.png\", dpi=150)\nplt.close(fig)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A file named chart.png is saved."
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "savefig writes an image file. dpi controls output resolution. close releases the figure after saving. In notebooks, figures may display automatically; scripts often call show() explicitly.",
              "bodyHi": "savefig writes an image file. dpi controls output resolution. close releases the figure after saving. In notebooks, figures may display automatically; scripts often call show() explicitly."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Name the chart and both axes",
                  "hi": "Name the chart and both axes"
                },
                {
                  "en": "Save high-resolution images for reports",
                  "hi": "Save high-resolution images for reports"
                },
                {
                  "en": "Close figures in batch scripts",
                  "hi": "Close figures in batch scripts"
                },
                {
                  "en": "Use the object-oriented API for larger projects",
                  "hi": "Use the object-oriented API for larger projects"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**120 110 100** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "**120 110 100** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    }
  ]
};

const M10_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Bar and Column Charts",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Bar and Column Charts",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Category",
                  "bodyEn": "Choose groups",
                  "bodyHi": "Choose groups",
                  "tone": "lavender"
                },
                {
                  "title": "Value",
                  "bodyEn": "Choose a measure",
                  "bodyHi": "Choose a measure",
                  "tone": "sky"
                },
                {
                  "title": "Order",
                  "bodyEn": "Sort when useful",
                  "bodyHi": "Sort when useful",
                  "tone": "green"
                },
                {
                  "title": "Label",
                  "bodyEn": "Explain units and period",
                  "bodyHi": "Explain units and period",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A company compares sales revenue across three branches. A horizontal bar chart makes branch names easy to read.",
              "bodyHi": "A company compares sales revenue across three branches. A horizontal bar chart makes branch names easy to read."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Bar chart",
                  "Category comparison"
                ],
                [
                  "Baseline",
                  "Starting value of numeric axis"
                ],
                [
                  "Ranking",
                  "Ordering categories by value"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Bar lengths encode magnitude",
                  "hi": "Bar lengths encode magnitude"
                },
                {
                  "en": "Use a zero baseline for bar values",
                  "hi": "Use a zero baseline for bar values"
                },
                {
                  "en": "Sort categories when ranking matters",
                  "hi": "Sort categories when ranking matters"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Bar and column charts compare values across categories. Vertical columns are useful for a small number of categories; horizontal bars work well with longer names. For fair comparison, start the numeric axis at zero when using bars.",
        "bodyHi": "Bar and column charts compare values across categories. Vertical columns are useful for a small number of categories; horizontal bars work well with longer names. For fair comparison, start the numeric axis at zero when using bars."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Bar and Column Charts",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nbranches = [\"North\", \"South\", \"East\"]\nsales = [120, 90, 150]\nplt.barh(branches, sales)\nplt.xlabel(\"Sales (units)\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Horizontal bars show East 150, North 120, South 90."
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "barh places categories on the vertical axis and values on the horizontal axis. The longest bar represents East. The label must match the measure: if these values are units, do not call them revenue.",
              "bodyHi": "barh places categories on the vertical axis and values on the horizontal axis. The longest bar represents East. The label must match the measure: if these values are units, do not call them revenue."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Bar and Column Charts",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nplt.bar([\"A\", \"B\", \"C\"], [20, 40, 30])\nplt.ylim(0, 50)\nplt.ylabel(\"Orders\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Columns compare 20, 40, and 30 orders."
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The numeric axis starts at zero and extends to 50. A truncated bar axis can exaggerate differences. Avoid too many categories and avoid using different colors without a reason.",
              "bodyHi": "The numeric axis starts at zero and extends to 50. A truncated bar axis can exaggerate differences. Avoid too many categories and avoid using different colors without a reason."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Bar lengths encode magnitude",
                  "hi": "Bar lengths encode magnitude"
                },
                {
                  "en": "Use a zero baseline for bar values",
                  "hi": "Use a zero baseline for bar values"
                },
                {
                  "en": "Sort categories when ranking matters",
                  "hi": "Sort categories when ranking matters"
                },
                {
                  "en": "Keep category labels readable",
                  "hi": "Keep category labels readable"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**150 120 90 North South East** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "**150 120 90 North South East** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    }
  ]
};

const M10_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Line Charts and Trends",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Line Charts and Trends",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Time",
                  "bodyEn": "Choose a valid date order",
                  "bodyHi": "Choose a valid date order",
                  "tone": "lavender"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Select the KPI",
                  "bodyHi": "Select the KPI",
                  "tone": "sky"
                },
                {
                  "title": "Plot",
                  "bodyEn": "Connect observations",
                  "bodyHi": "Connect observations",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "Describe the trend and exceptions",
                  "bodyHi": "Describe the trend and exceptions",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retail manager compares sales across four weeks to see whether demand is increasing or decreasing.",
              "bodyHi": "A retail manager compares sales across four weeks to see whether demand is increasing or decreasing."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Trend",
                  "General direction over time"
                ],
                [
                  "Seasonality",
                  "Repeating time pattern"
                ],
                [
                  "Time series",
                  "Values indexed by time"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep dates in chronological order",
                  "hi": "Keep dates in chronological order"
                },
                {
                  "en": "Label units and period",
                  "hi": "Label units and period"
                },
                {
                  "en": "Do not claim causation from a trend",
                  "hi": "Do not claim causation from a trend"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Line charts show how a measure changes over an ordered sequence, usually time. They help reveal direction, seasonality, and sudden changes. Use consistent time intervals and avoid connecting unrelated categories as though they form a timeline.",
        "bodyHi": "Line charts show how a measure changes over an ordered sequence, usually time. They help reveal direction, seasonality, and sudden changes. Use consistent time intervals and avoid connecting unrelated categories as though they form a timeline."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Line Charts and Trends",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nweeks = [1, 2, 3, 4]\nsales = [100, 120, 115, 150]\nplt.plot(weeks, sales, marker=\"o\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"Sales\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "The line rises, dips slightly, then reaches 150."
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "plot connects the four weekly values. marker=\"o\" makes observations visible. The line suggests an overall increase, but only four weeks of data are available.",
              "bodyHi": "plot connects the four weekly values. marker=\"o\" makes observations visible. The line suggests an overall increase, but only four weeks of data are available."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Line Charts and Trends",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ns = pd.Series([100, 120, 115, 150])\nprint(s.diff().tolist())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[nan, 20.0, -5.0, 35.0]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "diff() calculates changes from the previous observation. The first value is missing because there is no earlier week. Use change values alongside the chart to explain where a trend accelerates or reverses.",
              "bodyHi": "diff() calculates changes from the previous observation. The first value is missing because there is no earlier week. Use change values alongside the chart to explain where a trend accelerates or reverses."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Keep dates in chronological order",
                  "hi": "Keep dates in chronological order"
                },
                {
                  "en": "Label units and period",
                  "hi": "Label units and period"
                },
                {
                  "en": "Do not claim causation from a trend",
                  "hi": "Do not claim causation from a trend"
                },
                {
                  "en": "Show missing periods clearly",
                  "hi": "Show missing periods clearly"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**150 120 115 100** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "**150 120 115 100** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    }
  ]
};

const M10_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Histograms and Distributions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Histograms and Distributions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Values",
                  "bodyEn": "Collect a numeric measure",
                  "bodyHi": "Collect a numeric measure",
                  "tone": "lavender"
                },
                {
                  "title": "Bins",
                  "bodyEn": "Divide the range",
                  "bodyHi": "Divide the range",
                  "tone": "sky"
                },
                {
                  "title": "Count",
                  "bodyEn": "Measure frequency",
                  "bodyHi": "Measure frequency",
                  "tone": "green"
                },
                {
                  "title": "Interpret",
                  "bodyEn": "Describe shape and spread",
                  "bodyHi": "Describe shape and spread",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A support team records response times. A histogram can show whether most customers wait a short time or whether long delays are common.",
              "bodyHi": "A support team records response times. A histogram can show whether most customers wait a short time or whether long delays are common."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Bin",
                  "Numeric interval"
                ],
                [
                  "Frequency",
                  "Number of observations"
                ],
                [
                  "Skew",
                  "Asymmetry in a distribution"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Histograms are for numeric distributions",
                  "hi": "Histograms are for numeric distributions"
                },
                {
                  "en": "Bin choices affect appearance",
                  "hi": "Bin choices affect appearance"
                },
                {
                  "en": "Check mean and median together",
                  "hi": "Check mean and median together"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A histogram shows how numeric values are distributed across intervals called bins. It helps reveal common ranges, spread, skewness, and unusual values. Unlike a bar chart, the x-axis represents numeric intervals rather than separate categories.",
        "bodyHi": "A histogram shows how numeric values are distributed across intervals called bins. It helps reveal common ranges, spread, skewness, and unusual values. Unlike a bar chart, the x-axis represents numeric intervals rather than separate categories."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Histograms and Distributions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nwaits = [2, 3, 3, 4, 5, 5, 6, 12]\nplt.hist(waits, bins=[0, 4, 8, 12, 16])\nplt.xlabel(\"Wait (minutes)\")\nplt.ylabel(\"Count\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Histogram groups eight wait times into numeric intervals."
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each value falls into a bin. Most values are below eight minutes, while 12 is a longer wait. The number and width of bins affect how the distribution looks.",
              "bodyHi": "Each value falls into a bin. Most values are below eight minutes, while 12 is a longer wait. The number and width of bins affect how the distribution looks."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Histograms and Distributions",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nwaits = np.array([2, 3, 3, 4, 5, 5, 6, 12])\nprint(np.median(waits))\nprint(np.mean(waits))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "4.5\n5.0"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The median is 4.5 and mean is 5.0. These summaries support the histogram. A single long wait can pull the mean upward. Check units and whether extreme values are valid before excluding them.",
              "bodyHi": "The median is 4.5 and mean is 5.0. These summaries support the histogram. A single long wait can pull the mean upward. Check units and whether extreme values are valid before excluding them."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Histograms are for numeric distributions",
                  "hi": "Histograms are for numeric distributions"
                },
                {
                  "en": "Bin choices affect appearance",
                  "hi": "Bin choices affect appearance"
                },
                {
                  "en": "Check mean and median together",
                  "hi": "Check mean and median together"
                },
                {
                  "en": "Do not treat a long tail as an error without evidence",
                  "hi": "Do not treat a long tail as an error without evidence"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**4 3 1 0** 0-4 4-8 8-12 12-16 Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "**4 3 1 0** 0-4 4-8 8-12 12-16 Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    }
  ]
};

const M10_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Scatter Plots and Relationships",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Scatter Plots and Relationships",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Pair",
                  "bodyEn": "Choose two numeric variables",
                  "bodyHi": "Choose two numeric variables",
                  "tone": "lavender"
                },
                {
                  "title": "Plot",
                  "bodyEn": "Draw each observation",
                  "bodyHi": "Draw each observation",
                  "tone": "sky"
                },
                {
                  "title": "Inspect",
                  "bodyEn": "Look for patterns and outliers",
                  "bodyHi": "Look for patterns and outliers",
                  "tone": "green"
                },
                {
                  "title": "Verify",
                  "bodyEn": "Check context and data quality",
                  "bodyHi": "Check context and data quality",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop compares advertising spend with daily sales. A scatter plot may reveal a positive association, but promotions and holidays may also affect sales.",
              "bodyHi": "A shop compares advertising spend with daily sales. A scatter plot may reveal a positive association, but promotions and holidays may also affect sales."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Scatter plot",
                  "Points for paired values"
                ],
                [
                  "Correlation",
                  "Strength of linear association"
                ],
                [
                  "Outlier",
                  "Unusual observation"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use paired observations",
                  "hi": "Use paired observations"
                },
                {
                  "en": "Label both axes and units",
                  "hi": "Label both axes and units"
                },
                {
                  "en": "Look for outliers and clusters",
                  "hi": "Look for outliers and clusters"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Scatter plots show pairs of numeric values as points. They help explore whether two variables move together, form groups, or contain outliers. A visible relationship does not prove that one variable causes the other.",
        "bodyHi": "Scatter plots show pairs of numeric values as points. They help explore whether two variables move together, form groups, or contain outliers. A visible relationship does not prove that one variable causes the other."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Scatter Plots and Relationships",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nspend = [10, 20, 30, 40]\nsales = [100, 120, 150, 160]\nplt.scatter(spend, sales)\nplt.xlabel(\"Ad spend\")\nplt.ylabel(\"Sales\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Four points show a generally upward relationship."
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each point represents one paired observation. Larger spend is associated with higher sales in this tiny example. The chart alone cannot establish cause and effect.",
              "bodyHi": "Each point represents one paired observation. Larger spend is associated with higher sales in this tiny example. The chart alone cannot establish cause and effect."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Scatter Plots and Relationships",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import numpy as np\nx = np.array([1, 2, 3, 4])\ny = np.array([2, 4, 6, 8])\nprint(round(np.corrcoef(x, y)[0, 1], 2))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1.0"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "corrcoef calculates Pearson correlation. Here it is 1.0 because the relationship is perfectly linear. In real data, correlation can be affected by outliers and hidden variables.",
              "bodyHi": "corrcoef calculates Pearson correlation. Here it is 1.0 because the relationship is perfectly linear. In real data, correlation can be affected by outliers and hidden variables."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use paired observations",
                  "hi": "Use paired observations"
                },
                {
                  "en": "Label both axes and units",
                  "hi": "Label both axes and units"
                },
                {
                  "en": "Look for outliers and clusters",
                  "hi": "Look for outliers and clusters"
                },
                {
                  "en": "Correlation is not causation",
                  "hi": "Correlation is not causation"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    }
  ]
};

const M10_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Labels, Legends and Titles",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Labels, Legends and Titles",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Title",
                  "bodyEn": "State the question or subject",
                  "bodyHi": "State the question or subject",
                  "tone": "lavender"
                },
                {
                  "title": "Axes",
                  "bodyEn": "Name units and measures",
                  "bodyHi": "Name units and measures",
                  "tone": "sky"
                },
                {
                  "title": "Legend",
                  "bodyEn": "Identify series",
                  "bodyHi": "Identify series",
                  "tone": "green"
                },
                {
                  "title": "Annotation",
                  "bodyEn": "Highlight an important point",
                  "bodyHi": "Highlight an important point",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An analyst compares two stores across three weeks. Without a legend, viewers cannot tell which line belongs to which store.",
              "bodyHi": "An analyst compares two stores across three weeks. Without a legend, viewers cannot tell which line belongs to which store."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Legend",
                  "Identifies plotted series"
                ],
                [
                  "Annotation",
                  "Explanatory mark"
                ],
                [
                  "Axis label",
                  "Names a plotted dimension"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Write specific titles",
                  "hi": "Write specific titles"
                },
                {
                  "en": "Include units on numeric axes",
                  "hi": "Include units on numeric axes"
                },
                {
                  "en": "Use legends only when needed",
                  "hi": "Use legends only when needed"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Chart labels explain what the viewer is looking at. A title should name the subject and period, axes should include units, and a legend should identify multiple series. Good labels make a chart understandable without a spoken explanation.",
        "bodyHi": "Chart labels explain what the viewer is looking at. A title should name the subject and period, axes should include units, and a legend should identify multiple series. Good labels make a chart understandable without a spoken explanation."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Labels, Legends and Titles",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nweeks = [1, 2, 3]\nplt.plot(weeks, [10, 15, 20], label=\"Store A\")\nplt.plot(weeks, [12, 14, 18], label=\"Store B\")\nplt.title(\"Weekly sales by store\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"Sales units\")\nplt.legend()\nplt.show()"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Two labeled lines compare Store A and Store B."
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each plot call sets a label. legend() displays those labels. The title and axes tell the viewer that the measure is sales units over weeks.",
              "bodyHi": "Each plot call sets a label. legend() displays those labels. The title and axes tell the viewer that the measure is sales units over weeks."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Labels, Legends and Titles",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nplt.bar([\"A\", \"B\"], [20, 30])\nplt.title(\"Orders by branch\")\nplt.ylabel(\"Orders (count)\")\nplt.tight_layout()\nplt.show()"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A labeled column chart compares 20 and 30 orders."
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Labels should use plain language and match the actual metric. tight_layout() helps reduce clipping. If a chart uses a percentage, the axis should say percent; if it uses currency, show the currency.",
              "bodyHi": "Labels should use plain language and match the actual metric. tight_layout() helps reduce clipping. If a chart uses a percentage, the axis should say percent; if it uses currency, show the currency."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Write specific titles",
                  "hi": "Write specific titles"
                },
                {
                  "en": "Include units on numeric axes",
                  "hi": "Include units on numeric axes"
                },
                {
                  "en": "Use legends only when needed",
                  "hi": "Use legends only when needed"
                },
                {
                  "en": "Check labels remain readable on mobile",
                  "hi": "Check labels remain readable on mobile"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M10_T08_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Choosing the Right Chart",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 8",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Choosing the Right Chart",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Compare",
                  "bodyEn": "Bar or column chart",
                  "bodyHi": "Bar or column chart",
                  "tone": "lavender"
                },
                {
                  "title": "Trend",
                  "bodyEn": "Line chart",
                  "bodyHi": "Line chart",
                  "tone": "sky"
                },
                {
                  "title": "Distribution",
                  "bodyEn": "Histogram or box plot",
                  "bodyHi": "Histogram or box plot",
                  "tone": "green"
                },
                {
                  "title": "Relationship",
                  "bodyEn": "Scatter plot",
                  "bodyHi": "Scatter plot",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A manager asks four different questions about sales. Each question requires a different view, even when the same dataset is used.",
              "bodyHi": "A manager asks four different questions about sales. Each question requires a different view, even when the same dataset is used."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "Comparison",
                  "Difference between groups"
                ],
                [
                  "Distribution",
                  "How values are spread"
                ],
                [
                  "Relationship",
                  "How two measures vary together"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Choose the chart after defining the question",
                  "hi": "Choose the chart after defining the question"
                },
                {
                  "en": "Use appropriate baselines",
                  "hi": "Use appropriate baselines"
                },
                {
                  "en": "Avoid unnecessary 3D effects",
                  "hi": "Avoid unnecessary 3D effects"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "No single chart is best for every question. Use bars for categories, lines for trends, histograms for distributions, and scatter plots for relationships. Start with the business question, not the chart style you happen to like.",
        "bodyHi": "No single chart is best for every question. Use bars for categories, lines for trends, histograms for distributions, and scatter plots for relationships. Start with the business question, not the chart style you happen to like."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 8",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Choosing the Right Chart",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "questions = {\n    \"Top branch?\": \"Bar chart\",\n    \"Sales over time?\": \"Line chart\",\n    \"Order size spread?\": \"Histogram\",\n    \"Price vs quantity?\": \"Scatter plot\"\n}\nfor question, chart in questions.items():\n    print(question, chart)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Top branch? Bar chart\nSales over time? Line chart\nOrder size spread? Histogram\nPrice vs quantity? Scatter plot"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The dictionary maps each analytical question to a suitable chart. The mapping is a starting point, not an absolute rule: data size, audience, and available detail also matter.",
              "bodyHi": "The dictionary maps each analytical question to a suitable chart. The mapping is a starting point, not an absolute rule: data size, audience, and available detail also matter."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 8",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Choosing the Right Chart",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nplt.bar([\"A\", \"B\", \"C\"], [10, 20, 15])\nplt.ylabel(\"Orders\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A bar chart compares three categories."
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "If the question changes to monthly movement, a line chart may be better. Avoid pie charts with many small categories, 3D effects that distort proportions, and unnecessary decoration.",
              "bodyHi": "If the question changes to monthly movement, a line chart may be better. Avoid pie charts with many small categories, 3D effects that distort proportions, and unnecessary decoration."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Choose the chart after defining the question",
                  "hi": "Choose the chart after defining the question"
                },
                {
                  "en": "Use appropriate baselines",
                  "hi": "Use appropriate baselines"
                },
                {
                  "en": "Avoid unnecessary 3D effects",
                  "hi": "Avoid unnecessary 3D effects"
                },
                {
                  "en": "Make labels readable and accessible",
                  "hi": "Make labels readable and accessible"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M10_T09_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Exploratory Data Analysis with Pandas",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 9",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Exploratory Data Analysis with Pandas",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Check rows, types, nulls",
                  "bodyHi": "Check rows, types, nulls",
                  "tone": "lavender"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Calculate basic statistics",
                  "bodyHi": "Calculate basic statistics",
                  "tone": "sky"
                },
                {
                  "title": "Segment",
                  "bodyEn": "Compare categories",
                  "bodyHi": "Compare categories",
                  "tone": "green"
                },
                {
                  "title": "Visualize",
                  "bodyEn": "Explore patterns and outliers",
                  "bodyHi": "Explore patterns and outliers",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retailer wants to understand order amounts by city. The analyst checks the records and calculates city totals before building a chart.",
              "bodyHi": "A retailer wants to understand order amounts by city. The analyst checks the records and calculates city totals before building a chart."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "EDA",
                  "Exploratory Data Analysis"
                ],
                [
                  "Segment",
                  "Subset of records"
                ],
                [
                  "Data quality",
                  "Accuracy and completeness checks"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Inspect quality before visualization",
                  "hi": "Inspect quality before visualization"
                },
                {
                  "en": "Check distributions as well as averages",
                  "hi": "Check distributions as well as averages"
                },
                {
                  "en": "Compare like-for-like groups",
                  "hi": "Compare like-for-like groups"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Exploratory Data Analysis (EDA) is the process of inspecting a dataset, checking quality, calculating summaries, and looking for patterns before making strong conclusions. pandas supports the calculations, while charts help reveal structure and unusual values.",
        "bodyHi": "Exploratory Data Analysis (EDA) is the process of inspecting a dataset, checking quality, calculating summaries, and looking for patterns before making strong conclusions. pandas supports the calculations, while charts help reveal structure and unusual values."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 9",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Exploratory Data Analysis with Pandas",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"A\", \"A\", \"B\"],\n                   \"amount\": [100, 200, 150]})\nprint(df.groupby(\"city\")[\"amount\"].sum().to_dict())\nprint(df[\"amount\"].median())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "{'A': 300, 'B': 150}\n150.0"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "City A has 300 total and city B has 150. The median order amount is 150. These results answer different questions: city total versus typical individual order.",
              "bodyHi": "City A has 300 total and city B has 150. The median order amount is 150. These results answer different questions: city total versus typical individual order."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 9",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Exploratory Data Analysis with Pandas",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"amount\": [100, None, 300]})\nprint(df.isna().sum()[\"amount\"])\nprint(df[\"amount\"].mean())"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1\n200.0"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The second example finds one missing amount. The mean ignores it by default. EDA should document missing values, possible duplicates, sample size, and time coverage before findings are presented.",
              "bodyHi": "The second example finds one missing amount. The mean ignores it by default. EDA should document missing values, possible duplicates, sample size, and time coverage before findings are presented."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Inspect quality before visualization",
                  "hi": "Inspect quality before visualization"
                },
                {
                  "en": "Check distributions as well as averages",
                  "hi": "Check distributions as well as averages"
                },
                {
                  "en": "Compare like-for-like groups",
                  "hi": "Compare like-for-like groups"
                },
                {
                  "en": "Treat EDA findings as exploratory until validated",
                  "hi": "Treat EDA findings as exploratory until validated"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 9",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Exploratory Data Analysis with Pandas",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "df = pd.DataFrame({\"city\": [\"A\", \"A\", \"B\"],",
                  "Create or update a value used by the calculation."
                ],
                [
                  "\"amount\": [100, 200, 150]})",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "print(df.groupby(\"city\")[\"amount\"].sum().to_d...",
                  "Display a value so the result can be checked."
                ],
                [
                  "print(df[\"amount\"].median())",
                  "Display a value so the result can be checked."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A retailer wants to understand order amounts by city. The analyst checks the records and calculates city totals before building a chart. The second example finds one missing amount. The mean ignores it by default. EDA should document missing values, possible duplicates, sample size, and time coverage before findings are presented.",
              "bodyHi": "A retailer wants to understand order amounts by city. The analyst checks the records and calculates city totals before building a chart. The second example finds one missing amount. The mean ignores it by default. EDA should document missing values, possible duplicates, sample size, and time coverage before findings are presented."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Inspect quality before visualization",
                  "hi": "Inspect quality before visualization"
                },
                {
                  "en": "Check distributions as well as averages",
                  "hi": "Check distributions as well as averages"
                },
                {
                  "en": "Compare like-for-like groups",
                  "hi": "Compare like-for-like groups"
                },
                {
                  "en": "Treat EDA findings as exploratory until validated",
                  "hi": "Treat EDA findings as exploratory until validated"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M10_T10_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M10",
  "moduleTitle": "Python Data Visualization and Analytics",
  "topic": "Python Data Analysis Mini Project",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 10",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Python Data Analysis Mini Project",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Question",
                  "bodyEn": "Define the business goal",
                  "bodyHi": "Define the business goal",
                  "tone": "lavender"
                },
                {
                  "title": "Prepare",
                  "bodyEn": "Validate records",
                  "bodyHi": "Validate records",
                  "tone": "sky"
                },
                {
                  "title": "Analyze",
                  "bodyEn": "Calculate KPIs",
                  "bodyHi": "Calculate KPIs",
                  "tone": "green"
                },
                {
                  "title": "Present",
                  "bodyEn": "Chart, explain, and document",
                  "bodyHi": "Chart, explain, and document",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "A real-life example",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop manager asks which product generates the most revenue. The analyst uses quantity and unit price to calculate revenue by product.",
              "bodyHi": "A shop manager asks which product generates the most revenue. The analyst uses quantity and unit price to calculate revenue by product."
            }
          ]
        },
        {
          "pill": "Important words explained",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Word",
                "Simple meaning"
              ],
              "rows": [
                [
                  "KPI",
                  "Key Performance Indicator"
                ],
                [
                  "Revenue",
                  "Sales value"
                ],
                [
                  "Reproducible",
                  "Repeatable with the same data"
                ]
              ],
              "noteEn": "Learn these words before moving to the code example.",
              "noteHi": "Learn these words before moving to the code example."
            }
          ]
        },
        {
          "pill": "What to remember",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check revenue formula and source totals",
                  "hi": "Check revenue formula and source totals"
                },
                {
                  "en": "Do not confuse units with revenue",
                  "hi": "Do not confuse units with revenue"
                },
                {
                  "en": "Explain sample size and limitations",
                  "hi": "Explain sample size and limitations"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A small analytics project combines the full workflow: define a question, create or load data, check quality, calculate KPIs, visualize results, and explain what the findings mean. Keep the work reproducible and separate observations from recommendations.",
        "bodyHi": "A small analytics project combines the full workflow: define a question, create or load data, check quality, calculate KPIs, visualize results, and explain what the findings mean. Keep the work reproducible and separate observations from recommendations."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 10",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Python Data Analysis Mini Project",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import pandas as pd\ndf = pd.DataFrame({\"item\": [\"Pen\", \"Book\", \"Pen\"],\n                   \"qty\": [3, 2, 5],\n                   \"price\": [10, 50, 10]})\ndf[\"revenue\"] = df[\"qty\"] * df[\"price\"]\nprint(df.groupby(\"item\")[\"revenue\"].sum().to_dict())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "{'Book': 100, 'Pen': 80}"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Pen revenue is 3 x 10 + 5 x 10 = 80. Book revenue is 2 x 50 = 100. Book has higher revenue in this small dataset, even though fewer Book units were sold.",
              "bodyHi": "Pen revenue is 3 x 10 + 5 x 10 = 80. Book revenue is 2 x 50 = 100. Book has higher revenue in this small dataset, even though fewer Book units were sold."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 10",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Python Data Analysis Mini Project",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "import matplotlib.pyplot as plt\nproducts = [\"Book\", \"Pen\"]\nrevenue = [100, 80]\nplt.bar(products, revenue)\nplt.ylabel(\"Revenue\")\nplt.title(\"Revenue by product\")\nplt.show()"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A bar chart compares Book 100 and Pen 80."
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The chart supports the calculation but does not prove why one product performs better. A complete project should state the sample period, currency, source, assumptions, validation checks, and possible next questions.",
              "bodyHi": "The chart supports the calculation but does not prove why one product performs better. A complete project should state the sample period, currency, source, assumptions, validation checks, and possible next questions."
            }
          ]
        },
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check revenue formula and source totals",
                  "hi": "Check revenue formula and source totals"
                },
                {
                  "en": "Do not confuse units with revenue",
                  "hi": "Do not confuse units with revenue"
                },
                {
                  "en": "Explain sample size and limitations",
                  "hi": "Explain sample size and limitations"
                },
                {
                  "en": "Keep code and results reproducible",
                  "hi": "Keep code and results reproducible"
                }
              ]
            }
          ]
        },
        {
          "pill": "See the visual result",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "**100 80 Book Pen** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data.",
              "bodyHi": "**100 80 Book Pen** Illustrative chart of the small values used in this topic. Real reports need correct units, time periods, and verified source data."
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M10 | TOPIC 10",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Python Data Analysis Mini Project",
      "subtitle": "DETAILED TRACE AND VALIDATION",
      "sections": [
        {
          "pill": "Follow the instructions in order",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Code fragment",
                "Meaning in simple English"
              ],
              "rows": [
                [
                  "import pandas as pd",
                  "Make a library or function available for the example."
                ],
                [
                  "df = pd.DataFrame({\"item\": [\"Pen\", \"Book\", \"P...",
                  "Create or update a value used by the calculation."
                ],
                [
                  "\"qty\": [3, 2, 5],",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "\"price\": [10, 50, 10]})",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "df[\"revenue\"] = df[\"qty\"] * df[\"price\"]",
                  "Create or update a value used by the calculation."
                ]
              ]
            }
          ]
        },
        {
          "pill": "How to verify this result",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Check input",
                  "bodyEn": "Confirm values and data types.",
                  "bodyHi": "Confirm values and data types.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Calculate a small case by hand.",
                  "bodyHi": "Calculate a small case by hand.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Match expected and actual output.",
                  "bodyHi": "Match expected and actual output.",
                  "tone": "green"
                },
                {
                  "title": "Explain",
                  "bodyEn": "State limits and assumptions.",
                  "bodyHi": "State limits and assumptions.",
                  "tone": "amber"
                }
              ]
            }
          ]
        },
        {
          "pill": "Connect the code to the real problem",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A shop manager asks which product generates the most revenue. The analyst uses quantity and unit price to calculate revenue by product. The chart supports the calculation but does not prove why one product performs better. A complete project should state the sample period, currency, source, assumptions, validation checks, and possible next questions.",
              "bodyHi": "A shop manager asks which product generates the most revenue. The analyst uses quantity and unit price to calculate revenue by product. The chart supports the calculation but does not prove why one product performs better. A complete project should state the sample period, currency, source, assumptions, validation checks, and possible next questions."
            }
          ]
        },
        {
          "pill": "Before using this in a report",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Check revenue formula and source totals",
                  "hi": "Check revenue formula and source totals"
                },
                {
                  "en": "Do not confuse units with revenue",
                  "hi": "Do not confuse units with revenue"
                },
                {
                  "en": "Explain sample size and limitations",
                  "hi": "Explain sample size and limitations"
                },
                {
                  "en": "Keep code and results reproducible",
                  "hi": "Keep code and results reproducible"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

export const PYTHON_PART2_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  41: M07_T01_PY_SPEC,
  42: M07_T02_PY_SPEC,
  43: M07_T03_PY_SPEC,
  44: M07_T04_PY_SPEC,
  45: M07_T05_PY_SPEC,
  46: M07_T06_PY_SPEC,
  47: M07_T07_PY_SPEC,
  48: M07_T08_PY_SPEC,
  49: M07_T09_PY_SPEC,
  50: M08_T01_PY_SPEC,
  51: M08_T02_PY_SPEC,
  52: M08_T03_PY_SPEC,
  53: M08_T04_PY_SPEC,
  54: M08_T05_PY_SPEC,
  55: M08_T06_PY_SPEC,
  56: M08_T07_PY_SPEC,
  57: M08_T08_PY_SPEC,
  58: M09_T01_PY_SPEC,
  59: M09_T02_PY_SPEC,
  60: M09_T03_PY_SPEC,
  61: M09_T04_PY_SPEC,
  62: M09_T05_PY_SPEC,
  63: M09_T06_PY_SPEC,
  64: M09_T07_PY_SPEC,
  65: M09_T08_PY_SPEC,
  66: M09_T09_PY_SPEC,
  67: M09_T10_PY_SPEC,
  68: M09_T11_PY_SPEC,
  69: M09_T12_PY_SPEC,
  70: M09_T13_PY_SPEC,
  71: M10_T01_PY_SPEC,
  72: M10_T02_PY_SPEC,
  73: M10_T03_PY_SPEC,
  74: M10_T04_PY_SPEC,
  75: M10_T05_PY_SPEC,
  76: M10_T06_PY_SPEC,
  77: M10_T07_PY_SPEC,
  78: M10_T08_PY_SPEC,
  79: M10_T09_PY_SPEC,
  80: M10_T10_PY_SPEC,
};
