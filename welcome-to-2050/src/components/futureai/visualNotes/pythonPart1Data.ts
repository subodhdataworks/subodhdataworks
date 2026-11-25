import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M03_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M03",
  "moduleTitle": "Introduction to Programming and Python",
  "topic": "What Is Programming?",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "What Is Programming?",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Problem",
                  "bodyEn": "Decide what you want to solve",
                  "bodyHi": "Decide what you want to solve",
                  "tone": "lavender"
                },
                {
                  "title": "Instructions",
                  "bodyEn": "Write small steps in order",
                  "bodyHi": "Write small steps in order",
                  "tone": "sky"
                },
                {
                  "title": "Execution",
                  "bodyEn": "Computer follows the steps",
                  "bodyHi": "Computer follows the steps",
                  "tone": "green"
                },
                {
                  "title": "Result",
                  "bodyEn": "Check the output",
                  "bodyHi": "Check the output",
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
              "bodyEn": "A shopkeeper wants to know the cost of three notebooks. Instead of adding the price repeatedly, a small program can calculate the total every time the quantity changes.",
              "bodyHi": "A shopkeeper wants to know the cost of three notebooks. Instead of adding the price repeatedly, a small program can calculate the total every time the quantity changes."
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
                  "Program",
                  "A set of instructions"
                ],
                [
                  "Algorithm",
                  "A step-by-step plan"
                ],
                [
                  "Output",
                  "The result shown by a program"
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
                  "en": "Write instructions in a logical order",
                  "hi": "Write instructions in a logical order"
                },
                {
                  "en": "Use meaningful names for values",
                  "hi": "Use meaningful names for values"
                },
                {
                  "en": "Check the output instead of assuming it is correct",
                  "hi": "Check the output instead of assuming it is correct"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Programming is the process of writing clear instructions that a computer can follow. A program can take information, perform steps in a defined order, and produce a result. The computer does not guess what you mean; your instructions must be precise.",
        "bodyHi": "Programming is the process of writing clear instructions that a computer can follow. A program can take information, perform steps in a defined order, and produce a result. The computer does not guess what you mean; your instructions must be precise."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "What Is Programming?",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "price = 40\nquantity = 3\ntotal = price * quantity\nprint(total)"
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
              "bodyEn": "Line 1 stores the price of one notebook. Line 2 stores the number of notebooks. The star symbol multiplies the two numbers. print() shows the calculated total. Changing quantity changes the result without rewriting the calculation.",
              "bodyHi": "Line 1 stores the price of one notebook. Line 2 stores the number of notebooks. The star symbol multiplies the two numbers. print() shows the calculated total. Changing quantity changes the result without rewriting the calculation."
            }
          ]
        },
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "items = 5\nprice = 12\nprint(\"Bill:\", items * price)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Bill: 60"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Programming is useful because the same correct steps can be repeated quickly. An algorithm is the plan; code is the plan written in a programming language. Always test a program with a small example whose answer you already know.",
              "bodyHi": "Programming is useful because the same correct steps can be repeated quickly. An algorithm is the plan; code is the plan written in a programming language. Always test a program with a small example whose answer you already know."
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
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "What Is Programming?",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Write instructions in a logical order",
                  "hi": "Write instructions in a logical order"
                },
                {
                  "en": "Use meaningful names for values",
                  "hi": "Use meaningful names for values"
                },
                {
                  "en": "Check the output instead of assuming it is correct",
                  "hi": "Check the output instead of assuming it is correct"
                },
                {
                  "en": "A program follows rules, not human intuition",
                  "hi": "A program follows rules, not human intuition"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M03_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M03",
  "moduleTitle": "Introduction to Programming and Python",
  "topic": "How Computers Follow Instructions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "How Computers Follow Instructions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Input",
                  "bodyEn": "Get a value",
                  "bodyHi": "Get a value",
                  "tone": "lavender"
                },
                {
                  "title": "Process",
                  "bodyEn": "Apply a rule or calculation",
                  "bodyHi": "Apply a rule or calculation",
                  "tone": "sky"
                },
                {
                  "title": "Store",
                  "bodyEn": "Keep a result in memory",
                  "bodyHi": "Keep a result in memory",
                  "tone": "green"
                },
                {
                  "title": "Output",
                  "bodyEn": "Show the result",
                  "bodyHi": "Show the result",
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
              "bodyEn": "Imagine a billing counter. The cashier enters quantity and unit price, the computer calculates the bill, and the screen displays the amount. The computer needs each operation in the correct sequence.",
              "bodyHi": "Imagine a billing counter. The cashier enters quantity and unit price, the computer calculates the bill, and the screen displays the amount. The computer needs each operation in the correct sequence."
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
                  "Execution",
                  "Running instructions"
                ],
                [
                  "Memory",
                  "Where active values are held"
                ],
                [
                  "Assignment",
                  "Giving a name a value"
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
                  "en": "Execution order matters",
                  "hi": "Execution order matters"
                },
                {
                  "en": "Variables can change as instructions run",
                  "hi": "Variables can change as instructions run"
                },
                {
                  "en": "Use print() to inspect intermediate values",
                  "hi": "Use print() to inspect intermediate values"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Computers execute instructions according to the rules of the programming language. In a simple Python script, statements normally run from top to bottom. A later statement can use values calculated by earlier statements.",
        "bodyHi": "Computers execute instructions according to the rules of the programming language. In a simple Python script, statements normally run from top to bottom. A later statement can use values calculated by earlier statements."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "How Computers Follow Instructions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "quantity = 4\nunit_price = 25\nbill = quantity * unit_price\nprint(\"Total:\", bill)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Total: 100"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Python reads quantity = 4 and stores 4 in memory. It stores 25 under unit_price. It then multiplies 4 by 25, saves 100 as bill, and prints that result. Each line depends on the previous values being available.",
              "bodyHi": "Python reads quantity = 4 and stores 4 in memory. It stores 25 under unit_price. It then multiplies 4 by 25, saves 100 as bill, and prints that result. Each line depends on the previous values being available."
            }
          ]
        },
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "number = 10\nnumber = number + 5\nprint(number)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "15"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The name number first refers to 10. On the next line, Python reads the old value, adds 5, and stores the new value 15. Assignment is not a mathematical equality test; it updates what the variable refers to.",
              "bodyHi": "The name number first refers to 10. On the next line, Python reads the old value, adds 5, and stores the new value 15. Assignment is not a mathematical equality test; it updates what the variable refers to."
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
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "How Computers Follow Instructions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Execution order matters",
                  "hi": "Execution order matters"
                },
                {
                  "en": "Variables can change as instructions run",
                  "hi": "Variables can change as instructions run"
                },
                {
                  "en": "Use print() to inspect intermediate values",
                  "hi": "Use print() to inspect intermediate values"
                },
                {
                  "en": "A syntax error can stop execution before a result appears",
                  "hi": "A syntax error can stop execution before a result appears"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M03_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M03",
  "moduleTitle": "Introduction to Programming and Python",
  "topic": "What Is Python and Why Use It?",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "What Is Python and Why Use It?",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Write",
                  "bodyEn": "Create a .py file",
                  "bodyHi": "Create a .py file",
                  "tone": "lavender"
                },
                {
                  "title": "Run",
                  "bodyEn": "Use a Python interpreter",
                  "bodyHi": "Use a Python interpreter",
                  "tone": "sky"
                },
                {
                  "title": "Import",
                  "bodyEn": "Use available libraries",
                  "bodyHi": "Use available libraries",
                  "tone": "green"
                },
                {
                  "title": "Solve",
                  "bodyEn": "Automate a real task",
                  "bodyHi": "Automate a real task",
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
              "bodyEn": "An analyst receives a daily list of sales amounts. Python can total the list in a few lines and repeat the calculation for a new file tomorrow.",
              "bodyHi": "An analyst receives a daily list of sales amounts. Python can total the list in a few lines and repeat the calculation for a new file tomorrow."
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
                  "Interpreter",
                  "Software that runs Python code"
                ],
                [
                  "Library",
                  "Reusable code for a task"
                ],
                [
                  "Syntax",
                  "Rules for writing valid code"
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
                  "en": "Python is a language, not a spreadsheet",
                  "hi": "Python is a language, not a spreadsheet"
                },
                {
                  "en": "The interpreter runs your code",
                  "hi": "The interpreter runs your code"
                },
                {
                  "en": "Libraries add extra capabilities",
                  "hi": "Libraries add extra capabilities"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Python is a general-purpose programming language known for readable syntax and a large collection of libraries. People use it for automation, web services, data analysis, scientific work, and machine learning. Its simple-looking code makes it a friendly first language.",
        "bodyHi": "Python is a general-purpose programming language known for readable syntax and a large collection of libraries. People use it for automation, web services, data analysis, scientific work, and machine learning. Its simple-looking code makes it a friendly first language."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "What Is Python and Why Use It?",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "sales = [120, 80, 150]\ntotal = sum(sales)\nprint(\"Sales:\", total)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Sales: 350"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "sales is a list holding three amounts. sum(sales) adds them: 120 + 80 + 150 = 350. The print() function displays a label and the result. The code is readable and can work with a longer list too.",
              "bodyHi": "sales is a list holding three amounts. sum(sales) adds them: 120 + 80 + 150 = 350. The print() function displays a label and the result. The code is readable and can work with a longer list too."
            }
          ]
        },
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "print(\"Hello, Python!\")\nprint(2 + 3)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Hello, Python!\n5"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Python is interpreted: you normally run source code using a Python interpreter. It is used across many operating systems. Libraries such as pandas and NumPy add specialized data tools; Python itself is the foundation they build on.",
              "bodyHi": "Python is interpreted: you normally run source code using a Python interpreter. It is used across many operating systems. Libraries such as pandas and NumPy add specialized data tools; Python itself is the foundation they build on."
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
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "What Is Python and Why Use It?",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Python is a language, not a spreadsheet",
                  "hi": "Python is a language, not a spreadsheet"
                },
                {
                  "en": "The interpreter runs your code",
                  "hi": "The interpreter runs your code"
                },
                {
                  "en": "Libraries add extra capabilities",
                  "hi": "Libraries add extra capabilities"
                },
                {
                  "en": "Readable code still needs testing",
                  "hi": "Readable code still needs testing"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M03_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M03",
  "moduleTitle": "Introduction to Programming and Python",
  "topic": "Python in Data Analytics and Real Life",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Python in Data Analytics and Real Life",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Collect",
                  "bodyEn": "Read approved data",
                  "bodyHi": "Read approved data",
                  "tone": "lavender"
                },
                {
                  "title": "Clean",
                  "bodyEn": "Fix or flag errors",
                  "bodyHi": "Fix or flag errors",
                  "tone": "sky"
                },
                {
                  "title": "Analyze",
                  "bodyEn": "Calculate patterns",
                  "bodyHi": "Calculate patterns",
                  "tone": "green"
                },
                {
                  "title": "Report",
                  "bodyEn": "Explain results clearly",
                  "bodyHi": "Explain results clearly",
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
              "bodyEn": "A retail manager wants the average value of several orders. Python can calculate it, while the analyst checks that the records and business definitions are correct.",
              "bodyHi": "A retail manager wants the average value of several orders. Python can calculate it, while the analyst checks that the records and business definitions are correct."
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
                  "Automation",
                  "Repeating a task with code"
                ],
                [
                  "Dataset",
                  "A collection of records"
                ],
                [
                  "Validation",
                  "Checking whether data is trustworthy"
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
                  "en": "Ask the business question first",
                  "hi": "Ask the business question first"
                },
                {
                  "en": "Check missing and invalid values",
                  "hi": "Check missing and invalid values"
                },
                {
                  "en": "Keep a record of cleaning rules",
                  "hi": "Keep a record of cleaning rules"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Python helps analysts collect, clean, summarize, and visualize data. It can automate repetitive tasks that are slow to perform manually. Analysts often combine Python with Excel, SQL, and Power BI instead of treating these tools as competitors.",
        "bodyHi": "Python helps analysts collect, clean, summarize, and visualize data. It can automate repetitive tasks that are slow to perform manually. Analysts often combine Python with Excel, SQL, and Power BI instead of treating these tools as competitors."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Python in Data Analytics and Real Life",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "orders = [200, 350, 150, 300]\naverage = sum(orders) / len(orders)\nprint(\"Average order:\", average)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Average order: 250.0"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The list contains four order values. sum() gives 1000 and len() gives 4. Dividing 1000 by 4 produces an average of 250.0. This example assumes every value is a valid order amount and there are no missing records.",
              "bodyHi": "The list contains four order values. sum() gives 1000 and len() gives 4. Dividing 1000 by 4 produces an average of 250.0. This example assumes every value is a valid order amount and there are no missing records."
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
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Python in Data Analytics and Real Life",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "amounts = [120, 0, 80]\npositive = [x for x in amounts if x > 0]\nprint(positive)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[120, 80]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The second example filters out zero amounts. In real analytics, do not remove zeros automatically: a zero might be a valid refund or free order. Cleaning decisions must follow the business meaning of the data.",
              "bodyHi": "The second example filters out zero amounts. In real analytics, do not remove zeros automatically: a zero might be a valid refund or free order. Cleaning decisions must follow the business meaning of the data."
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
                  "en": "Ask the business question first",
                  "hi": "Ask the business question first"
                },
                {
                  "en": "Check missing and invalid values",
                  "hi": "Check missing and invalid values"
                },
                {
                  "en": "Keep a record of cleaning rules",
                  "hi": "Keep a record of cleaning rules"
                },
                {
                  "en": "Explain insights in business language",
                  "hi": "Explain insights in business language"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M03_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M03",
  "moduleTitle": "Introduction to Programming and Python",
  "topic": "Setting Up Python and Your Coding Environment",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Setting Up Python and Your Coding Environment",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Install",
                  "bodyEn": "Get Python from its official source",
                  "bodyHi": "Get Python from its official source",
                  "tone": "lavender"
                },
                {
                  "title": "Verify",
                  "bodyEn": "Check the interpreter version",
                  "bodyHi": "Check the interpreter version",
                  "tone": "sky"
                },
                {
                  "title": "Edit",
                  "bodyEn": "Write a .py file in an editor",
                  "bodyHi": "Write a .py file in an editor",
                  "tone": "green"
                },
                {
                  "title": "Run",
                  "bodyEn": "Execute and read the output",
                  "bodyHi": "Execute and read the output",
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
              "bodyEn": "A beginner can create a folder called python_lessons, save hello.py inside it, and run the file from a terminal. A notebook is useful for experimenting, but a normal .py file teaches the same Python language.",
              "bodyHi": "A beginner can create a folder called python_lessons, save hello.py inside it, and run the file from a terminal. A notebook is useful for experimenting, but a normal .py file teaches the same Python language."
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
                  "Editor",
                  "Where you type code"
                ],
                [
                  "Terminal",
                  "Where you run commands"
                ],
                [
                  "Interpreter",
                  "Program that executes Python"
                ],
                [
                  "PATH",
                  "System setting used to find commands"
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
                  "en": "Install from the official Python website",
                  "hi": "Install from the official Python website"
                },
                {
                  "en": "Know the difference between terminal and Python code",
                  "hi": "Know the difference between terminal and Python code"
                },
                {
                  "en": "Save scripts with the .py extension",
                  "hi": "Save scripts with the .py extension"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A coding environment is where you write, run, and debug programs. You need a working Python installation and an editor or notebook. A terminal lets you run commands and check which Python interpreter is active.",
        "bodyHi": "A coding environment is where you write, run, and debug programs. You need a working Python installation and an editor or notebook. A terminal lets you run commands and check which Python interpreter is active."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Setting Up Python and Your Coding Environment",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "# Save as hello.py\nprint(\"Environment ready\")\nprint(3 * 7)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Environment ready\n21"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The hash symbol starts a comment, so Python ignores that line. Save the other two lines in a file. Run the file using the Python interpreter. If the program prints both results, your editor and interpreter are working together.",
              "bodyHi": "The hash symbol starts a comment, so Python ignores that line. Save the other two lines in a file. Run the file using the Python interpreter. If the program prints both results, your editor and interpreter are working together."
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
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Setting Up Python and Your Coding Environment",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "TERMINAL COMMANDS",
              "code": "# Run in a terminal, not inside a .py file\npython --version\npython hello.py"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Python 3.x.x\nEnvironment ready\n21"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The first command displays the installed version; the exact number depends on your machine. The second runs your file. Some systems use python3 instead of python. If the command is not found, check installation and PATH settings rather than changing the lesson code.",
              "bodyHi": "The first command displays the installed version; the exact number depends on your machine. The second runs your file. Some systems use python3 instead of python. If the command is not found, check installation and PATH settings rather than changing the lesson code."
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
                  "en": "Install from the official Python website",
                  "hi": "Install from the official Python website"
                },
                {
                  "en": "Know the difference between terminal and Python code",
                  "hi": "Know the difference between terminal and Python code"
                },
                {
                  "en": "Save scripts with the .py extension",
                  "hi": "Save scripts with the .py extension"
                },
                {
                  "en": "Use a project folder and descriptive file names",
                  "hi": "Use a project folder and descriptive file names"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M03_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M03",
  "moduleTitle": "Introduction to Programming and Python",
  "topic": "Writing and Running Your First Python Program",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Writing and Running Your First Python Program",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Write",
                  "bodyEn": "Type Python statements",
                  "bodyHi": "Type Python statements",
                  "tone": "lavender"
                },
                {
                  "title": "Save",
                  "bodyEn": "Create a .py file",
                  "bodyHi": "Create a .py file",
                  "tone": "sky"
                },
                {
                  "title": "Run",
                  "bodyEn": "Ask Python to execute it",
                  "bodyHi": "Ask Python to execute it",
                  "tone": "green"
                },
                {
                  "title": "Check",
                  "bodyEn": "Compare output with expectation",
                  "bodyHi": "Compare output with expectation",
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
              "bodyEn": "Imagine welcoming a new student to a course. A program can display a message and calculate how many lessons remain after one lesson is finished.",
              "bodyHi": "Imagine welcoming a new student to a course. A program can display a message and calculate how many lessons remain after one lesson is finished."
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
                  "Script",
                  "A Python source file"
                ],
                [
                  "Statement",
                  "One instruction"
                ],
                [
                  "String",
                  "A text value"
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
                  "en": "Text values need matching quotation marks",
                  "hi": "Text values need matching quotation marks"
                },
                {
                  "en": "Use print() to inspect results",
                  "hi": "Use print() to inspect results"
                },
                {
                  "en": "Save changes before running a script",
                  "hi": "Save changes before running a script"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Your first Python program can be very small. The goal is to understand the complete cycle: write a statement, save the file, run it, read the output, and make a small change. You do not need advanced syntax to begin.",
        "bodyHi": "Your first Python program can be very small. The goal is to understand the complete cycle: write a statement, save the file, run it, read the output, and make a small change. You do not need advanced syntax to begin."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Writing and Running Your First Python Program",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "print(\"Welcome to Python!\")\ntotal_lessons = 6\ncompleted = 1\nprint(\"Remaining:\", total_lessons - completed)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Welcome to Python!\nRemaining: 5"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The first print() displays text inside quotation marks. The next two lines store numbers. The final line subtracts completed from total_lessons and displays the result. Python uses the exact spelling of variable names.",
              "bodyHi": "The first print() displays text inside quotation marks. The next two lines store numbers. The final line subtracts completed from total_lessons and displays the result. Python uses the exact spelling of variable names."
            }
          ]
        },
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "name = \"Asha\"\nprint(\"Hello,\", name)\nprint(\"Next step: keep practicing\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Hello, Asha\nNext step: keep practicing"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Change the name and run the file again. You should see the updated greeting. This edit-run-check cycle is how developers learn and debug. If you see an error, read its message and identify the line instead of deleting code at random.",
              "bodyHi": "Change the name and run the file again. You should see the updated greeting. This edit-run-check cycle is how developers learn and debug. If you see an error, read its message and identify the line instead of deleting code at random."
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
      "moduleTag": "FUTURE IT INDUSTRY | M03 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Writing and Running Your First Python Program",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Text values need matching quotation marks",
                  "hi": "Text values need matching quotation marks"
                },
                {
                  "en": "Use print() to inspect results",
                  "hi": "Use print() to inspect results"
                },
                {
                  "en": "Save changes before running a script",
                  "hi": "Save changes before running a script"
                },
                {
                  "en": "Read error messages carefully",
                  "hi": "Read error messages carefully"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "Python Syntax, Indentation and Comments",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Python Syntax, Indentation and Comments",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Syntax",
                  "bodyEn": "Write valid statements",
                  "bodyHi": "Write valid statements",
                  "tone": "lavender"
                },
                {
                  "title": "Colon",
                  "bodyEn": "Start a code block",
                  "bodyHi": "Start a code block",
                  "tone": "sky"
                },
                {
                  "title": "Indent",
                  "bodyEn": "Group related lines",
                  "bodyHi": "Group related lines",
                  "tone": "green"
                },
                {
                  "title": "Comment",
                  "bodyEn": "Explain why code exists",
                  "bodyHi": "Explain why code exists",
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
              "bodyEn": "When a shop offers a discount only to members, the discount statement must be inside the if block. Its indentation tells Python which instruction belongs to the condition.",
              "bodyHi": "When a shop offers a discount only to members, the discount statement must be inside the if block. Its indentation tells Python which instruction belongs to the condition."
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
                  "Indentation",
                  "Spaces that define a block"
                ],
                [
                  "Comment",
                  "Non-executed explanation"
                ],
                [
                  "SyntaxError",
                  "Invalid code structure"
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
                  "en": "Use four spaces for each block level",
                  "hi": "Use four spaces for each block level"
                },
                {
                  "en": "Put a colon after if, for, while, and def headers",
                  "hi": "Put a colon after if, for, while, and def headers"
                },
                {
                  "en": "Comments explain purpose, not obvious facts",
                  "hi": "Comments explain purpose, not obvious facts"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Syntax is the set of rules for writing valid Python. Indentation means spaces at the start of a line; Python uses it to group statements into blocks. Comments explain code to human readers and do not run as instructions.",
        "bodyHi": "Syntax is the set of rules for writing valid Python. Indentation means spaces at the start of a line; Python uses it to group statements into blocks. Comments explain code to human readers and do not run as instructions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Python Syntax, Indentation and Comments",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "member = True\nif member:\n    print(\"Discount available\")\nprint(\"Thank you\")"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Discount available\nThank you"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The condition ends with a colon. The indented print() runs only if member is True. The final print() is not indented, so it runs after the condition. Standard Python style uses four spaces for one indentation level.",
              "bodyHi": "The condition ends with a colon. The indented print() runs only if member is True. The final print() is not indented, so it runs after the condition. Standard Python style uses four spaces for one indentation level."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Python Syntax, Indentation and Comments",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "# Store the price in rupees\nprice = 250\nif price > 100:\n    print(\"High-value item\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "High-value item"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The comment begins with # and is ignored by Python. Indentation errors can change behavior or prevent a program from running. Use an editor that shows indentation clearly; avoid mixing tabs and spaces.",
              "bodyHi": "The comment begins with # and is ignored by Python. Indentation errors can change behavior or prevent a program from running. Use an editor that shows indentation clearly; avoid mixing tabs and spaces."
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
                  "en": "Use four spaces for each block level",
                  "hi": "Use four spaces for each block level"
                },
                {
                  "en": "Put a colon after if, for, while, and def headers",
                  "hi": "Put a colon after if, for, while, and def headers"
                },
                {
                  "en": "Comments explain purpose, not obvious facts",
                  "hi": "Comments explain purpose, not obvious facts"
                },
                {
                  "en": "Indentation is part of Python syntax",
                  "hi": "Indentation is part of Python syntax"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "print() and Displaying Output",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "print() and Displaying Output",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Value",
                  "bodyEn": "Choose what to display",
                  "bodyHi": "Choose what to display",
                  "tone": "lavender"
                },
                {
                  "title": "print()",
                  "bodyEn": "Send it to the console",
                  "bodyHi": "Send it to the console",
                  "tone": "sky"
                },
                {
                  "title": "Separator",
                  "bodyEn": "Control spacing",
                  "bodyHi": "Control spacing",
                  "tone": "green"
                },
                {
                  "title": "Newline",
                  "bodyEn": "Move to the next line",
                  "bodyHi": "Move to the next line",
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
              "bodyEn": "A billing script may show a product name, quantity, and total on separate lines so a cashier can check the result.",
              "bodyHi": "A billing script may show a product name, quantity, and total on separate lines so a cashier can check the result."
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
                  "Console",
                  "Where text output appears"
                ],
                [
                  "Argument",
                  "A value passed to a function"
                ],
                [
                  "String",
                  "Text enclosed in quotes"
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
                  "en": "Use quotes for literal text",
                  "hi": "Use quotes for literal text"
                },
                {
                  "en": "Do not put quotes around a variable you want to evaluate",
                  "hi": "Do not put quotes around a variable you want to evaluate"
                },
                {
                  "en": "sep controls separators",
                  "hi": "sep controls separators"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "The print() function displays values in the console. It is useful for showing results, checking intermediate calculations, and understanding what a program is doing. You can print text, numbers, variables, or multiple values.",
        "bodyHi": "The print() function displays values in the console. It is useful for showing results, checking intermediate calculations, and understanding what a program is doing. You can print text, numbers, variables, or multiple values."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "print() and Displaying Output",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "product = \"Notebook\"\nquantity = 3\nprint(\"Product:\", product)\nprint(\"Quantity:\", quantity)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Product: Notebook\nQuantity: 3"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The text inside quotes is printed exactly. product and quantity are variable names, so Python prints their stored values. Commas separate arguments and add a space between them by default.",
              "bodyHi": "The text inside quotes is printed exactly. product and quantity are variable names, so Python prints their stored values. Commas separate arguments and add a space between them by default."
            }
          ]
        },
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "print(\"A\", \"B\", sep=\"-\")\nprint(\"Total\", end=\": \")\nprint(150)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "A-B\nTotal: 150"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "sep changes the separator between arguments. end changes what print() adds at the end; the default is a newline. Here the second print stays on the same line as the third. These options help format readable console output.",
              "bodyHi": "sep changes the separator between arguments. end changes what print() adds at the end; the default is a newline. Here the second print stays on the same line as the third. These options help format readable console output."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "print() and Displaying Output",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use quotes for literal text",
                  "hi": "Use quotes for literal text"
                },
                {
                  "en": "Do not put quotes around a variable you want to evaluate",
                  "hi": "Do not put quotes around a variable you want to evaluate"
                },
                {
                  "en": "sep controls separators",
                  "hi": "sep controls separators"
                },
                {
                  "en": "end controls line endings",
                  "hi": "end controls line endings"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "Variables and Storing Information",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Variables and Storing Information",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Name",
                  "bodyEn": "Choose a meaningful identifier",
                  "bodyHi": "Choose a meaningful identifier",
                  "tone": "lavender"
                },
                {
                  "title": "Assign",
                  "bodyEn": "Use = to store a value",
                  "bodyHi": "Use = to store a value",
                  "tone": "sky"
                },
                {
                  "title": "Read",
                  "bodyEn": "Use the name in an expression",
                  "bodyHi": "Use the name in an expression",
                  "tone": "green"
                },
                {
                  "title": "Update",
                  "bodyEn": "Assign a new value",
                  "bodyHi": "Assign a new value",
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
              "bodyEn": "A shop stores the price and quantity of an item. The total is calculated from these variables, so changing one input changes the bill.",
              "bodyHi": "A shop stores the price and quantity of an item. The total is calculated from these variables, so changing one input changes the bill."
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
                  "Variable",
                  "A name for a value"
                ],
                [
                  "Assignment",
                  "Storing a value with ="
                ],
                [
                  "Expression",
                  "Code that produces a value"
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
                  "en": "Use lowercase_names_with_underscores",
                  "hi": "Use lowercase_names_with_underscores"
                },
                {
                  "en": "Names cannot start with a digit",
                  "hi": "Names cannot start with a digit"
                },
                {
                  "en": "Names are case-sensitive",
                  "hi": "Names are case-sensitive"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A variable is a name that refers to a value. Python creates or updates a variable when you assign with =. Good variable names help readers understand what a program stores and why the value matters.",
        "bodyHi": "A variable is a name that refers to a value. Python creates or updates a variable when you assign with =. Good variable names help readers understand what a program stores and why the value matters."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Variables and Storing Information",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "price = 80\nquantity = 2\ntotal = price * quantity\nprint(total)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "160"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "price refers to 80 and quantity refers to 2. The star operator multiplies them. total is a new variable holding 160. In Python, = assigns a value; it does not mean that both sides must stay equal forever.",
              "bodyHi": "price refers to 80 and quantity refers to 2. The star operator multiplies them. total is a new variable holding 160. In Python, = assigns a value; it does not mean that both sides must stay equal forever."
            }
          ]
        },
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "count = 4\ncount = count + 1\nprint(\"Updated count:\", count)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Updated count: 5"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Python first reads the old count (4), adds 1, then assigns the new result (5). Variable names are case-sensitive: count and Count are different. Avoid names such as list or sum that shadow built-in functions.",
              "bodyHi": "Python first reads the old count (4), adds 1, then assigns the new result (5). Variable names are case-sensitive: count and Count are different. Avoid names such as list or sum that shadow built-in functions."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Variables and Storing Information",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Common mistakes and good habits",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Use lowercase_names_with_underscores",
                  "hi": "Use lowercase_names_with_underscores"
                },
                {
                  "en": "Names cannot start with a digit",
                  "hi": "Names cannot start with a digit"
                },
                {
                  "en": "Names are case-sensitive",
                  "hi": "Names are case-sensitive"
                },
                {
                  "en": "Do not use Python keywords as variable names",
                  "hi": "Do not use Python keywords as variable names"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "Python Data Types and type()",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Python Data Types and type()",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "int",
                  "bodyEn": "Whole number",
                  "bodyHi": "Whole number",
                  "tone": "lavender"
                },
                {
                  "title": "float",
                  "bodyEn": "Decimal number",
                  "bodyHi": "Decimal number",
                  "tone": "sky"
                },
                {
                  "title": "str",
                  "bodyEn": "Text value",
                  "bodyHi": "Text value",
                  "tone": "green"
                },
                {
                  "title": "bool",
                  "bodyEn": "True or False",
                  "bodyHi": "True or False",
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
              "bodyEn": "A customer record may contain an integer age, a decimal order amount, a text city, and a Boolean flag indicating whether a subscription is active.",
              "bodyHi": "A customer record may contain an integer age, a decimal order amount, a text city, and a Boolean flag indicating whether a subscription is active."
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
                  "int",
                  "Integer"
                ],
                [
                  "float",
                  "Decimal number"
                ],
                [
                  "str",
                  "String or text"
                ],
                [
                  "bool",
                  "Boolean"
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
                  "en": "Check types before arithmetic",
                  "hi": "Check types before arithmetic"
                },
                {
                  "en": "\"100\" is text, not the number 100",
                  "hi": "\"100\" is text, not the number 100"
                },
                {
                  "en": "True and False are Boolean values",
                  "hi": "True and False are Boolean values"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Data types describe what kind of value a program is working with. Common built-in types are int for whole numbers, float for decimal numbers, str for text, and bool for True or False. The type() function tells you a value's type.",
        "bodyHi": "Data types describe what kind of value a program is working with. Common built-in types are int for whole numbers, float for decimal numbers, str for text, and bool for True or False. The type() function tells you a value's type."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Python Data Types and type()",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "age = 24\nprice = 99.5\ncity = \"Patna\"\nactive = True\nprint(type(age).__name__)\nprint(type(city).__name__)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "int\nstr"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each assignment stores a different kind of value. type(age) returns the int class, and .__name__ shows its short name. Strings use quotes; Boolean values use True or False without quotes.",
              "bodyHi": "Each assignment stores a different kind of value. type(age) returns the int class, and .__name__ shows its short name. Strings use quotes; Boolean values use True or False without quotes."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Python Data Types and type()",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "print(type(12.5).__name__)\nprint(type(False).__name__)\nprint(\"12\" + \"3\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "float\nbool\n123"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The final expression joins two strings instead of adding numbers. This is a key reason to inspect data types before calculations. A value that looks numeric in a CSV file may still be stored as text.",
              "bodyHi": "The final expression joins two strings instead of adding numbers. This is a key reason to inspect data types before calculations. A value that looks numeric in a CSV file may still be stored as text."
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
                  "en": "Check types before arithmetic",
                  "hi": "Check types before arithmetic"
                },
                {
                  "en": "\"100\" is text, not the number 100",
                  "hi": "\"100\" is text, not the number 100"
                },
                {
                  "en": "True and False are Boolean values",
                  "hi": "True and False are Boolean values"
                },
                {
                  "en": "Data types influence which operations are valid",
                  "hi": "Data types influence which operations are valid"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "Type Conversion",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Type Conversion",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Source",
                  "bodyEn": "Identify the current type",
                  "bodyHi": "Identify the current type",
                  "tone": "lavender"
                },
                {
                  "title": "Convert",
                  "bodyEn": "Apply a conversion function",
                  "bodyHi": "Apply a conversion function",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check the result",
                  "bodyHi": "Check the result",
                  "tone": "green"
                },
                {
                  "title": "Use",
                  "bodyEn": "Calculate or display safely",
                  "bodyHi": "Calculate or display safely",
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
              "bodyEn": "An order system receives the quantity \"3\" as text. The program must convert it into a number before multiplying by the unit price.",
              "bodyHi": "An order system receives the quantity \"3\" as text. The program must convert it into a number before multiplying by the unit price."
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
                  "int()",
                  "Convert to integer"
                ],
                [
                  "float()",
                  "Convert to decimal"
                ],
                [
                  "str()",
                  "Convert to text"
                ],
                [
                  "ValueError",
                  "Invalid conversion value"
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
                  "en": "Convert only when the format is valid",
                  "hi": "Convert only when the format is valid"
                },
                {
                  "en": "int(3.9) truncates to 3, not rounds",
                  "hi": "int(3.9) truncates to 3, not rounds"
                },
                {
                  "en": "Use float() for decimal strings",
                  "hi": "Use float() for decimal strings"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Type conversion changes a value from one data type to another when the conversion is valid. Common functions are int(), float(), and str(). This is important because input from a keyboard or a CSV file may arrive as text.",
        "bodyHi": "Type conversion changes a value from one data type to another when the conversion is valid. Common functions are int(), float(), and str(). This is important because input from a keyboard or a CSV file may arrive as text."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Type Conversion",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "quantity_text = \"3\"\nquantity = int(quantity_text)\nprice = 40\nprint(quantity * price)"
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
              "bodyEn": "int(\"3\") produces the integer 3. Python then multiplies 3 by 40. Without conversion, multiplying the text \"3\" by 40 would repeat the character rather than calculate a bill.",
              "bodyHi": "int(\"3\") produces the integer 3. Python then multiplies 3 by 40. Without conversion, multiplying the text \"3\" by 40 would repeat the character rather than calculate a bill."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Type Conversion",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "price_text = \"49.50\"\nprice = float(price_text)\nprint(price + 0.50)\nprint(str(25) + \" items\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "50.0\n25 items"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "float() accepts a valid decimal string. str() converts a number to text for joining with other text. Invalid strings such as \"forty\" cannot be converted with int() and raise ValueError; real programs should validate input.",
              "bodyHi": "float() accepts a valid decimal string. str() converts a number to text for joining with other text. Invalid strings such as \"forty\" cannot be converted with int() and raise ValueError; real programs should validate input."
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
                  "en": "Convert only when the format is valid",
                  "hi": "Convert only when the format is valid"
                },
                {
                  "en": "int(3.9) truncates to 3, not rounds",
                  "hi": "int(3.9) truncates to 3, not rounds"
                },
                {
                  "en": "Use float() for decimal strings",
                  "hi": "Use float() for decimal strings"
                },
                {
                  "en": "Handle conversion errors in user-facing programs",
                  "hi": "Handle conversion errors in user-facing programs"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "input() and User Input",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "input() and User Input",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Prompt",
                  "bodyEn": "Ask a clear question",
                  "bodyHi": "Ask a clear question",
                  "tone": "lavender"
                },
                {
                  "title": "Read",
                  "bodyEn": "input() receives text",
                  "bodyHi": "input() receives text",
                  "tone": "sky"
                },
                {
                  "title": "Convert",
                  "bodyEn": "Change type if needed",
                  "bodyHi": "Change type if needed",
                  "tone": "green"
                },
                {
                  "title": "Respond",
                  "bodyEn": "Use the entered value",
                  "bodyHi": "Use the entered value",
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
              "bodyEn": "A shop assistant enters the number of items sold. The program converts the typed quantity to an integer and calculates the bill.",
              "bodyHi": "A shop assistant enters the number of items sold. The program converts the typed quantity to an integer and calculates the bill."
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
                  "Prompt",
                  "Message asking for input"
                ],
                [
                  "Return value",
                  "Value a function produces"
                ],
                [
                  "Validation",
                  "Checking whether input is acceptable"
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
                  "en": "input() always returns text",
                  "hi": "input() always returns text"
                },
                {
                  "en": "Convert numeric input before calculations",
                  "hi": "Convert numeric input before calculations"
                },
                {
                  "en": "Show clear prompts",
                  "hi": "Show clear prompts"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "input() pauses a Python program and waits for a user to type a response. It returns the response as a string, even if the user types digits. Convert numeric responses before doing arithmetic.",
        "bodyHi": "input() pauses a Python program and waits for a user to type a response. It returns the response as a string, even if the user types digits. Convert numeric responses before doing arithmetic."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "input() and User Input",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "name = input(\"Your name: \")\nprint(\"Welcome,\", name)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Your name: Asha\nWelcome, Asha"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The prompt appears first. The example assumes the user types Asha and presses Enter. input() stores the entered text in name. The next line prints a greeting using that value.",
              "bodyHi": "The prompt appears first. The example assumes the user types Asha and presses Enter. input() stores the entered text in name. The next line prints a greeting using that value."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "input() and User Input",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "quantity = int(input(\"Quantity: \"))\nprice = 25\nprint(\"Total:\", quantity * price)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Quantity: 4\nTotal: 100"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The inner input() returns the typed string \"4\". int() converts it to 4. Multiplying by 25 gives 100. If the user types letters instead of a valid integer, conversion fails; later lessons explain error handling.",
              "bodyHi": "The inner input() returns the typed string \"4\". int() converts it to 4. Multiplying by 25 gives 100. If the user types letters instead of a valid integer, conversion fails; later lessons explain error handling."
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
                  "en": "input() always returns text",
                  "hi": "input() always returns text"
                },
                {
                  "en": "Convert numeric input before calculations",
                  "hi": "Convert numeric input before calculations"
                },
                {
                  "en": "Show clear prompts",
                  "hi": "Show clear prompts"
                },
                {
                  "en": "Validate input before using it in real applications",
                  "hi": "Validate input before using it in real applications"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M04_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M04",
  "moduleTitle": "Python Syntax and Core Basics",
  "topic": "Operators and Expressions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Operators and Expressions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Arithmetic",
                  "bodyEn": "Calculate values",
                  "bodyHi": "Calculate values",
                  "tone": "lavender"
                },
                {
                  "title": "Comparison",
                  "bodyEn": "Check a relationship",
                  "bodyHi": "Check a relationship",
                  "tone": "sky"
                },
                {
                  "title": "Logic",
                  "bodyEn": "Combine conditions",
                  "bodyHi": "Combine conditions",
                  "tone": "green"
                },
                {
                  "title": "Result",
                  "bodyEn": "Use the expression value",
                  "bodyHi": "Use the expression value",
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
              "bodyEn": "A retail analyst wants to calculate the bill after a discount and also check whether the total meets a free-delivery threshold.",
              "bodyHi": "A retail analyst wants to calculate the bill after a discount and also check whether the total meets a free-delivery threshold."
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
                  "Operator",
                  "Symbol that performs an action"
                ],
                [
                  "Operand",
                  "Value an operator acts on"
                ],
                [
                  "Boolean",
                  "True or False result"
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
                  "en": "Use parentheses for clarity",
                  "hi": "Use parentheses for clarity"
                },
                {
                  "en": "== compares values while = assigns",
                  "hi": "== compares values while = assigns"
                },
                {
                  "en": "Avoid dividing by zero",
                  "hi": "Avoid dividing by zero"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Operators tell Python what calculation or comparison to perform. Arithmetic operators include +, -, *, /, //, %, and **. Comparison operators produce Boolean results. An expression combines values and operators to produce a new value.",
        "bodyHi": "Operators tell Python what calculation or comparison to perform. Arithmetic operators include +, -, *, /, //, %, and **. Comparison operators produce Boolean results. An expression combines values and operators to produce a new value."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Operators and Expressions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "price = 100\nquantity = 3\nsubtotal = price * quantity\ndiscount = subtotal * 0.10\nprint(subtotal - discount)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "270.0"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The subtotal is 300. Multiplying by 0.10 gives a discount of 30.0. Subtracting it gives 270.0. Python follows operator precedence, so parentheses are useful when you want to make the order explicit.",
              "bodyHi": "The subtotal is 300. Multiplying by 0.10 gives a discount of 30.0. Subtracting it gives 270.0. Python follows operator precedence, so parentheses are useful when you want to make the order explicit."
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
      "moduleTag": "FUTURE IT INDUSTRY | M04 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Operators and Expressions",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "print(7 / 2)\nprint(7 // 2)\nprint(7 % 2)\nprint(2 ** 3)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "3.5\n3\n1\n8"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "/ gives true division; // gives floor division; % gives the remainder; ** means exponentiation. For positive numbers, 7 // 2 is 3. Comparison expressions such as 7 > 2 return True or False.",
              "bodyHi": "/ gives true division; // gives floor division; % gives the remainder; ** means exponentiation. For positive numbers, 7 // 2 is 3. Comparison expressions such as 7 > 2 return True or False."
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
                  "en": "Use parentheses for clarity",
                  "hi": "Use parentheses for clarity"
                },
                {
                  "en": "== compares values while = assigns",
                  "hi": "== compares values while = assigns"
                },
                {
                  "en": "Avoid dividing by zero",
                  "hi": "Avoid dividing by zero"
                },
                {
                  "en": "Check whether you need decimal or floor division",
                  "hi": "Check whether you need decimal or floor division"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "Comparison and Logical Operators",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Comparison and Logical Operators",
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
                  "bodyEn": "Use ==, !=, >, <, >=, <=",
                  "bodyHi": "Use ==, !=, >, <, >=, <=",
                  "tone": "lavender"
                },
                {
                  "title": "Combine",
                  "bodyEn": "Use and or or",
                  "bodyHi": "Use and or or",
                  "tone": "sky"
                },
                {
                  "title": "Reverse",
                  "bodyEn": "Use not",
                  "bodyHi": "Use not",
                  "tone": "green"
                },
                {
                  "title": "Decide",
                  "bodyEn": "Read the Boolean result",
                  "bodyHi": "Read the Boolean result",
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
              "bodyEn": "A store gives priority delivery to orders above 500 from members. Both conditions must be true, so and is the correct operator.",
              "bodyHi": "A store gives priority delivery to orders above 500 from members. Both conditions must be true, so and is the correct operator."
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
                  "Boolean",
                  "True or False"
                ],
                [
                  "Comparison",
                  "Testing values"
                ],
                [
                  "Short circuit",
                  "Skipping unnecessary evaluation"
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
                  "en": "Use == for equality tests, not =",
                  "hi": "Use == for equality tests, not ="
                },
                {
                  "en": "and requires both conditions",
                  "hi": "and requires both conditions"
                },
                {
                  "en": "or requires at least one condition",
                  "hi": "or requires at least one condition"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Comparison operators check relationships between values and return True or False. Logical operators and, or, and not combine or reverse conditions. They help a program make decisions based on several rules.",
        "bodyHi": "Comparison operators check relationships between values and return True or False. Logical operators and, or, and not combine or reverse conditions. They help a program make decisions based on several rules."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Comparison and Logical Operators",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "amount = 650\nmember = True\nprint(amount > 500 and member)\nprint(amount < 100 or member)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "True\nTrue"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "650 > 500 is True and member is True, so the first and expression is True. In the second expression, amount < 100 is False but member is True; or needs only one True condition.",
              "bodyHi": "650 > 500 is True and member is True, so the first and expression is True. In the second expression, amount < 100 is False but member is True; or needs only one True condition."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Comparison and Logical Operators",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "age = 19\nprint(age >= 18)\nprint(age != 20)\nprint(not (age < 18))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "True\nTrue\nTrue"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": ">= includes equality, != means not equal, and not reverses a Boolean. Python may stop evaluating a logical expression early when the result is already known; this is called short-circuit evaluation.",
              "bodyHi": ">= includes equality, != means not equal, and not reverses a Boolean. Python may stop evaluating a logical expression early when the result is already known; this is called short-circuit evaluation."
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
                  "en": "Use == for equality tests, not =",
                  "hi": "Use == for equality tests, not ="
                },
                {
                  "en": "and requires both conditions",
                  "hi": "and requires both conditions"
                },
                {
                  "en": "or requires at least one condition",
                  "hi": "or requires at least one condition"
                },
                {
                  "en": "Use parentheses to clarify mixed conditions",
                  "hi": "Use parentheses to clarify mixed conditions"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "if Statements and Decision-Making",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "if Statements and Decision-Making",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Value",
                  "bodyEn": "Read a variable",
                  "bodyHi": "Read a variable",
                  "tone": "lavender"
                },
                {
                  "title": "Condition",
                  "bodyEn": "Evaluate True or False",
                  "bodyHi": "Evaluate True or False",
                  "tone": "sky"
                },
                {
                  "title": "Branch",
                  "bodyEn": "Run the indented code if True",
                  "bodyHi": "Run the indented code if True",
                  "tone": "green"
                },
                {
                  "title": "Continue",
                  "bodyEn": "Run code after the block",
                  "bodyHi": "Run code after the block",
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
              "bodyEn": "A shop flags a large order for review when the order amount exceeds 1000. Small orders continue without the special message.",
              "bodyHi": "A shop flags a large order for review when the order amount exceeds 1000. Small orders continue without the special message."
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
                  "Condition",
                  "True/False expression"
                ],
                [
                  "Branch",
                  "Path chosen by a condition"
                ],
                [
                  "Threshold",
                  "Value where a rule changes"
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
                  "en": "Put a colon after if",
                  "hi": "Put a colon after if"
                },
                {
                  "en": "Indent the conditional block",
                  "hi": "Indent the conditional block"
                },
                {
                  "en": "Use == to compare",
                  "hi": "Use == to compare"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "An if statement runs an indented block only when its condition is True. This is the foundation of decision-making in Python. Conditions should describe the rule clearly and be tested at their boundaries.",
        "bodyHi": "An if statement runs an indented block only when its condition is True. This is the foundation of decision-making in Python. Conditions should describe the rule clearly and be tested at their boundaries."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "if Statements and Decision-Making",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "amount = 1250\nif amount > 1000:\n    print(\"Review large order\")\nprint(\"Order recorded\")"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Review large order\nOrder recorded"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The condition amount > 1000 is True, so Python enters the indented block. The final print() is outside the if and runs regardless of the amount.",
              "bodyHi": "The condition amount > 1000 is True, so Python enters the indented block. The final print() is outside the if and runs regardless of the amount."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "if Statements and Decision-Making",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "stock = 0\nif stock == 0:\n    print(\"Out of stock\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Out of stock"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "== compares stock with zero. If the stock were 5, the indented print would not run. A condition is not a complete business policy by itself; check invalid or missing values before applying it.",
              "bodyHi": "== compares stock with zero. If the stock were 5, the indented print would not run. A condition is not a complete business policy by itself; check invalid or missing values before applying it."
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
                  "en": "Put a colon after if",
                  "hi": "Put a colon after if"
                },
                {
                  "en": "Indent the conditional block",
                  "hi": "Indent the conditional block"
                },
                {
                  "en": "Use == to compare",
                  "hi": "Use == to compare"
                },
                {
                  "en": "Test values just above, below, and at the threshold",
                  "hi": "Test values just above, below, and at the threshold"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "if-else and elif Statements",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "if-else and elif Statements",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "if",
                  "bodyEn": "Test the first condition",
                  "bodyHi": "Test the first condition",
                  "tone": "lavender"
                },
                {
                  "title": "elif",
                  "bodyEn": "Test another condition",
                  "bodyHi": "Test another condition",
                  "tone": "sky"
                },
                {
                  "title": "else",
                  "bodyEn": "Handle the remaining cases",
                  "bodyHi": "Handle the remaining cases",
                  "tone": "green"
                },
                {
                  "title": "Continue",
                  "bodyEn": "Run after the decision",
                  "bodyHi": "Run after the decision",
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
              "bodyEn": "A delivery company classifies orders as priority, standard, or small based on their value. The order of conditions matters because the first matching branch wins.",
              "bodyHi": "A delivery company classifies orders as priority, standard, or small based on their value. The order of conditions matters because the first matching branch wins."
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
                  "elif",
                  "Else if"
                ],
                [
                  "Fallback",
                  "Default action"
                ],
                [
                  "Mutually exclusive",
                  "Only one option applies"
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
                  "en": "Order elif conditions carefully",
                  "hi": "Order elif conditions carefully"
                },
                {
                  "en": "Use else for a clear fallback",
                  "hi": "Use else for a clear fallback"
                },
                {
                  "en": "Only one branch runs in an if/elif/else chain",
                  "hi": "Only one branch runs in an if/elif/else chain"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "if-else chooses between two paths. elif adds more conditions, which Python checks from top to bottom until one matches. The optional else block handles cases that did not match earlier conditions.",
        "bodyHi": "if-else chooses between two paths. elif adds more conditions, which Python checks from top to bottom until one matches. The optional else block handles cases that did not match earlier conditions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "if-else and elif Statements",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "amount = 750\nif amount >= 1000:\n    print(\"Priority\")\nelif amount >= 500:\n    print(\"Standard\")\nelse:\n    print(\"Small\")"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Standard"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "750 does not meet the first threshold of 1000, so Python checks the elif. It is at least 500, so Standard prints. Python skips the remaining else branch.",
              "bodyHi": "750 does not meet the first threshold of 1000, so Python checks the elif. It is at least 500, so Standard prints. Python skips the remaining else branch."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "if-else and elif Statements",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "marks = 42\nif marks >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Review needed\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Review needed"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Use if-else when the outcomes are mutually exclusive. If you use separate if statements instead, more than one block may run. Always think about boundary values and what should happen to invalid input.",
              "bodyHi": "Use if-else when the outcomes are mutually exclusive. If you use separate if statements instead, more than one block may run. Always think about boundary values and what should happen to invalid input."
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
                  "en": "Order elif conditions carefully",
                  "hi": "Order elif conditions carefully"
                },
                {
                  "en": "Use else for a clear fallback",
                  "hi": "Use else for a clear fallback"
                },
                {
                  "en": "Only one branch runs in an if/elif/else chain",
                  "hi": "Only one branch runs in an if/elif/else chain"
                },
                {
                  "en": "Test exact boundary values",
                  "hi": "Test exact boundary values"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "Nested Conditions",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Nested Conditions",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Outer test",
                  "bodyEn": "Check main eligibility",
                  "bodyHi": "Check main eligibility",
                  "tone": "lavender"
                },
                {
                  "title": "Inner test",
                  "bodyEn": "Check a second rule",
                  "bodyHi": "Check a second rule",
                  "tone": "sky"
                },
                {
                  "title": "Action",
                  "bodyEn": "Run the matching block",
                  "bodyHi": "Run the matching block",
                  "tone": "green"
                },
                {
                  "title": "Review",
                  "bodyEn": "Consider a simpler combined condition",
                  "bodyHi": "Consider a simpler combined condition",
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
              "bodyEn": "A discount is available only to members, and a larger discount applies to members with high-value orders.",
              "bodyHi": "A discount is available only to members, and a larger discount applies to members with high-value orders."
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
                  "Nested if",
                  "Condition inside a condition"
                ],
                [
                  "Outer block",
                  "First decision level"
                ],
                [
                  "Inner block",
                  "Second decision level"
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
                  "en": "Indent each nesting level consistently",
                  "hi": "Indent each nesting level consistently"
                },
                {
                  "en": "Avoid unnecessary deep nesting",
                  "hi": "Avoid unnecessary deep nesting"
                },
                {
                  "en": "Check which outer branch allows the inner test",
                  "hi": "Check which outer branch allows the inner test"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A nested condition is an if statement inside another if statement. It is useful when a second decision should be checked only after the first requirement is met. Too much nesting can make code difficult to read.",
        "bodyHi": "A nested condition is an if statement inside another if statement. It is useful when a second decision should be checked only after the first requirement is met. Too much nesting can make code difficult to read."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Nested Conditions",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "member = True\namount = 800\nif member:\n    if amount >= 500:\n        print(\"Extra discount\")\n    else:\n        print(\"Member discount\")"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Extra discount"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The outer condition is True, so Python enters its block. It then checks whether amount is at least 500. That inner condition is also True, so Extra discount is printed.",
              "bodyHi": "The outer condition is True, so Python enters its block. It then checks whether amount is at least 500. That inner condition is also True, so Extra discount is printed."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Nested Conditions",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "member = True\namount = 800\nif member and amount >= 500:\n    print(\"Extra discount\")"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Extra discount"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The same rule can be written as one condition using and. Nested blocks are helpful for different messages or actions at each level, but combining simple checks can improve readability.",
              "bodyHi": "The same rule can be written as one condition using and. Nested blocks are helpful for different messages or actions at each level, but combining simple checks can improve readability."
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
                  "en": "Indent each nesting level consistently",
                  "hi": "Indent each nesting level consistently"
                },
                {
                  "en": "Avoid unnecessary deep nesting",
                  "hi": "Avoid unnecessary deep nesting"
                },
                {
                  "en": "Check which outer branch allows the inner test",
                  "hi": "Check which outer branch allows the inner test"
                },
                {
                  "en": "Use and when the logic is simpler",
                  "hi": "Use and when the logic is simpler"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "for Loops and range()",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 5",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "for Loops and range()",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Sequence",
                  "bodyEn": "Choose items to visit",
                  "bodyHi": "Choose items to visit",
                  "tone": "lavender"
                },
                {
                  "title": "Iteration",
                  "bodyEn": "Take one item",
                  "bodyHi": "Take one item",
                  "tone": "sky"
                },
                {
                  "title": "Body",
                  "bodyEn": "Run the repeated code",
                  "bodyHi": "Run the repeated code",
                  "tone": "green"
                },
                {
                  "title": "Finish",
                  "bodyEn": "Stop after the final item",
                  "bodyHi": "Stop after the final item",
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
              "bodyEn": "A shop records sales over four days. A loop can print each day and accumulate a running total without writing the same statement four times.",
              "bodyHi": "A shop records sales over four days. A loop can print each day and accumulate a running total without writing the same statement four times."
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
                  "Iteration",
                  "One pass through a loop"
                ],
                [
                  "Iterable",
                  "Sequence you can loop over"
                ],
                [
                  "Accumulator",
                  "Variable that builds a result"
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
                  "en": "range() excludes its stop value",
                  "hi": "range() excludes its stop value"
                },
                {
                  "en": "Initialize accumulators before the loop",
                  "hi": "Initialize accumulators before the loop"
                },
                {
                  "en": "Avoid changing a list while iterating over it",
                  "hi": "Avoid changing a list while iterating over it"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A for loop repeats a block for each item in a sequence. range() creates a sequence of integer values commonly used for counting. A loop is useful when you must apply the same rule to many records.",
        "bodyHi": "A for loop repeats a block for each item in a sequence. range() creates a sequence of integer values commonly used for counting. A loop is useful when you must apply the same rule to many records."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 5",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "for Loops and range()",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "sales = [100, 150, 80]\ntotal = 0\nfor amount in sales:\n    total = total + amount\nprint(\"Total:\", total)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Total: 330"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The loop visits 100, then 150, then 80. The total changes from 0 to 100, 250, and 330. The final print() is outside the loop, so it displays the total only once.",
              "bodyHi": "The loop visits 100, then 150, then 80. The total changes from 0 to 100, 250, and 330. The final print() is outside the loop, so it displays the total only once."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 5",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "for Loops and range()",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "for day in range(1, 4):\n    print(\"Day\", day)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Day 1\nDay 2\nDay 3"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "range(1, 4) produces 1, 2, and 3; the stop value 4 is excluded. range(5) produces 0 through 4. Indentation decides what repeats, so check whether print() belongs inside or outside the loop.",
              "bodyHi": "range(1, 4) produces 1, 2, and 3; the stop value 4 is excluded. range(5) produces 0 through 4. Indentation decides what repeats, so check whether print() belongs inside or outside the loop."
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
                  "en": "range() excludes its stop value",
                  "hi": "range() excludes its stop value"
                },
                {
                  "en": "Initialize accumulators before the loop",
                  "hi": "Initialize accumulators before the loop"
                },
                {
                  "en": "Avoid changing a list while iterating over it",
                  "hi": "Avoid changing a list while iterating over it"
                },
                {
                  "en": "Check loop indentation",
                  "hi": "Check loop indentation"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 5",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "for Loops and range()",
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
                  "sales = [100, 150, 80]",
                  "Create or update a value used by the calculation."
                ],
                [
                  "total = 0",
                  "Create or update a value used by the calculation."
                ],
                [
                  "for amount in sales:",
                  "Start an iteration over the available values."
                ],
                [
                  "total = total + amount",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(\"Total:\", total)",
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
              "bodyEn": "A shop records sales over four days. A loop can print each day and accumulate a running total without writing the same statement four times. range(1, 4) produces 1, 2, and 3; the stop value 4 is excluded. range(5) produces 0 through 4. Indentation decides what repeats, so check whether print() belongs inside or outside the loop.",
              "bodyHi": "A shop records sales over four days. A loop can print each day and accumulate a running total without writing the same statement four times. range(1, 4) produces 1, 2, and 3; the stop value 4 is excluded. range(5) produces 0 through 4. Indentation decides what repeats, so check whether print() belongs inside or outside the loop."
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
                  "en": "range() excludes its stop value",
                  "hi": "range() excludes its stop value"
                },
                {
                  "en": "Initialize accumulators before the loop",
                  "hi": "Initialize accumulators before the loop"
                },
                {
                  "en": "Avoid changing a list while iterating over it",
                  "hi": "Avoid changing a list while iterating over it"
                },
                {
                  "en": "Check loop indentation",
                  "hi": "Check loop indentation"
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

const M05_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "while Loops",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "while Loops",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Initialize",
                  "bodyEn": "Set the starting value",
                  "bodyHi": "Set the starting value",
                  "tone": "lavender"
                },
                {
                  "title": "Check",
                  "bodyEn": "Evaluate the condition",
                  "bodyHi": "Evaluate the condition",
                  "tone": "sky"
                },
                {
                  "title": "Update",
                  "bodyEn": "Change the controlling value",
                  "bodyHi": "Change the controlling value",
                  "tone": "green"
                },
                {
                  "title": "Stop",
                  "bodyEn": "Exit when condition becomes False",
                  "bodyHi": "Exit when condition becomes False",
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
              "bodyEn": "A warehouse counts down three boxes that must be packed. Each pass handles one box until the remaining count reaches zero.",
              "bodyHi": "A warehouse counts down three boxes that must be packed. Each pass handles one box until the remaining count reaches zero."
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
                  "Loop condition",
                  "Rule checked before each pass"
                ],
                [
                  "Infinite loop",
                  "Loop that never stops"
                ],
                [
                  "Update",
                  "Change that moves toward stopping"
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
                  "en": "Always plan a stopping condition",
                  "hi": "Always plan a stopping condition"
                },
                {
                  "en": "Update the loop variable correctly",
                  "hi": "Update the loop variable correctly"
                },
                {
                  "en": "Beware of infinite loops",
                  "hi": "Beware of infinite loops"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A while loop repeats its body while a condition remains True. It is useful when you do not know in advance how many repetitions are needed. The loop must change something that eventually makes the condition False.",
        "bodyHi": "A while loop repeats its body while a condition remains True. It is useful when you do not know in advance how many repetitions are needed. The loop must change something that eventually makes the condition False."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "while Loops",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "remaining = 3\nwhile remaining > 0:\n    print(\"Pack box\", remaining)\n    remaining -= 1"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Pack box 3\nPack box 2\nPack box 1"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "At first remaining is 3, so the loop runs. The -= operator subtracts one each time. When remaining becomes 0, the condition is False and execution continues after the loop.",
              "bodyHi": "At first remaining is 3, so the loop runs. The -= operator subtracts one each time. When remaining becomes 0, the condition is False and execution continues after the loop."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "while Loops",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "number = 1\nwhile number <= 5:\n    print(number)\n    number += 2"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1\n3\n5"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The second loop increases by two each time. If the update were missing, the condition could stay True forever. Use a for loop when you already know the items; use while when repetition depends on a changing condition.",
              "bodyHi": "The second loop increases by two each time. If the update were missing, the condition could stay True forever. Use a for loop when you already know the items; use while when repetition depends on a changing condition."
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
                  "en": "Always plan a stopping condition",
                  "hi": "Always plan a stopping condition"
                },
                {
                  "en": "Update the loop variable correctly",
                  "hi": "Update the loop variable correctly"
                },
                {
                  "en": "Beware of infinite loops",
                  "hi": "Beware of infinite loops"
                },
                {
                  "en": "Use while for condition-controlled repetition",
                  "hi": "Use while for condition-controlled repetition"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "break, continue and pass",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "break, continue and pass",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "break",
                  "bodyEn": "Leave the loop",
                  "bodyHi": "Leave the loop",
                  "tone": "lavender"
                },
                {
                  "title": "continue",
                  "bodyEn": "Skip one pass",
                  "bodyHi": "Skip one pass",
                  "tone": "sky"
                },
                {
                  "title": "pass",
                  "bodyEn": "Keep an empty block valid",
                  "bodyHi": "Keep an empty block valid",
                  "tone": "green"
                },
                {
                  "title": "Choose",
                  "bodyEn": "Use the correct control flow",
                  "bodyHi": "Use the correct control flow",
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
              "bodyEn": "A shop checks order amounts. It wants to skip zero-value entries but stop if a negative amount appears, because that value requires investigation.",
              "bodyHi": "A shop checks order amounts. It wants to skip zero-value entries but stop if a negative amount appears, because that value requires investigation."
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
                  "Control flow",
                  "Order instructions execute"
                ],
                [
                  "No-op",
                  "Statement that does nothing"
                ],
                [
                  "Iteration",
                  "One loop pass"
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
                  "en": "break exits the nearest loop only",
                  "hi": "break exits the nearest loop only"
                },
                {
                  "en": "continue skips one iteration",
                  "hi": "continue skips one iteration"
                },
                {
                  "en": "pass is a no-op placeholder",
                  "hi": "pass is a no-op placeholder"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "break stops the nearest loop immediately. continue skips the rest of the current iteration and moves to the next one. pass does nothing and is used as a placeholder when Python requires a statement.",
        "bodyHi": "break stops the nearest loop immediately. continue skips the rest of the current iteration and moves to the next one. pass does nothing and is used as a placeholder when Python requires a statement."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "break, continue and pass",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "amounts = [100, 0, 80, -5, 50]\nfor amount in amounts:\n    if amount == 0:\n        continue\n    if amount < 0:\n        break\n    print(amount)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "100\n80"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Zero causes continue, so nothing is printed for it. When -5 is reached, break ends the loop entirely; 50 is never processed. These statements change loop flow and must be used carefully.",
              "bodyHi": "Zero causes continue, so nothing is printed for it. When -5 is reached, break ends the loop entirely; 50 is never processed. These statements change loop flow and must be used carefully."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "break, continue and pass",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "for item in [1, 2]:\n    if item == 1:\n        pass\n    print(item)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1\n2"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "pass is not the same as continue: it performs no action, then execution moves to the next statement. Use it for an unfinished block during development, not as a permanent replacement for needed logic.",
              "bodyHi": "pass is not the same as continue: it performs no action, then execution moves to the next statement. Use it for an unfinished block during development, not as a permanent replacement for needed logic."
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
                  "en": "break exits the nearest loop only",
                  "hi": "break exits the nearest loop only"
                },
                {
                  "en": "continue skips one iteration",
                  "hi": "continue skips one iteration"
                },
                {
                  "en": "pass is a no-op placeholder",
                  "hi": "pass is a no-op placeholder"
                },
                {
                  "en": "Use clear conditions to avoid silently losing data",
                  "hi": "Use clear conditions to avoid silently losing data"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M05_T08_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "Common Python Errors and Debugging",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 8",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Common Python Errors and Debugging",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read",
                  "bodyEn": "Look at the error message",
                  "bodyHi": "Look at the error message",
                  "tone": "lavender"
                },
                {
                  "title": "Locate",
                  "bodyEn": "Find the line mentioned",
                  "bodyHi": "Find the line mentioned",
                  "tone": "sky"
                },
                {
                  "title": "Inspect",
                  "bodyEn": "Check values and types",
                  "bodyHi": "Check values and types",
                  "tone": "green"
                },
                {
                  "title": "Retest",
                  "bodyEn": "Run a small corrected example",
                  "bodyHi": "Run a small corrected example",
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
              "bodyEn": "An analyst expects a total of 300 but sees 30. The program runs, yet the logic may be wrong. Checking intermediate values is often more useful than guessing at the final line.",
              "bodyHi": "An analyst expects a total of 300 but sees 30. The program runs, yet the logic may be wrong. Checking intermediate values is often more useful than guessing at the final line."
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
                  "Traceback",
                  "Error location and call history"
                ],
                [
                  "Exception",
                  "Runtime error object"
                ],
                [
                  "Debugging",
                  "Finding and fixing a problem"
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
                  "en": "SyntaxError means invalid code structure",
                  "hi": "SyntaxError means invalid code structure"
                },
                {
                  "en": "TypeError means an operation uses incompatible types",
                  "hi": "TypeError means an operation uses incompatible types"
                },
                {
                  "en": "NameError means a name is not defined",
                  "hi": "NameError means a name is not defined"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Errors are a normal part of programming. Syntax errors prevent code from being understood, while runtime errors happen during execution. A logic error can produce a wrong result without displaying any error message.",
        "bodyHi": "Errors are a normal part of programming. Syntax errors prevent code from being understood, while runtime errors happen during execution. A logic error can produce a wrong result without displaying any error message."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 8",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Common Python Errors and Debugging",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "price = 100\nquantity = 3\nprint(\"Price:\", price)\nprint(\"Quantity:\", quantity)\nprint(\"Total:\", price * quantity)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Price: 100\nQuantity: 3\nTotal: 300"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The print() statements expose intermediate values. If quantity were stored as text, multiplication could behave differently. Tracebacks often identify the exception type and the line that needs attention.",
              "bodyHi": "The print() statements expose intermediate values. If quantity were stored as text, multiplication could behave differently. Tracebacks often identify the exception type and the line that needs attention."
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
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 8",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Common Python Errors and Debugging",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "text = \"25\"\nnumber = int(text)\nprint(number + 5)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "30"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Converting the text before addition avoids a type mismatch. Do not fix errors by hiding them with a broad except clause. Understand the cause, make a focused change, and test again with normal and unusual inputs.",
              "bodyHi": "Converting the text before addition avoids a type mismatch. Do not fix errors by hiding them with a broad except clause. Understand the cause, make a focused change, and test again with normal and unusual inputs."
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
                  "en": "SyntaxError means invalid code structure",
                  "hi": "SyntaxError means invalid code structure"
                },
                {
                  "en": "TypeError means an operation uses incompatible types",
                  "hi": "TypeError means an operation uses incompatible types"
                },
                {
                  "en": "NameError means a name is not defined",
                  "hi": "NameError means a name is not defined"
                },
                {
                  "en": "Logic errors need expected-versus-actual checks",
                  "hi": "Logic errors need expected-versus-actual checks"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 8",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Common Python Errors and Debugging",
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
                  "price = 100",
                  "Create or update a value used by the calculation."
                ],
                [
                  "quantity = 3",
                  "Create or update a value used by the calculation."
                ],
                [
                  "print(\"Price:\", price)",
                  "Display a value so the result can be checked."
                ],
                [
                  "print(\"Quantity:\", quantity)",
                  "Display a value so the result can be checked."
                ],
                [
                  "print(\"Total:\", price * quantity)",
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
              "bodyEn": "An analyst expects a total of 300 but sees 30. The program runs, yet the logic may be wrong. Checking intermediate values is often more useful than guessing at the final line. Converting the text before addition avoids a type mismatch. Do not fix errors by hiding them with a broad except clause. Understand the cause, make a focused change, and test again with normal and unusual inputs.",
              "bodyHi": "An analyst expects a total of 300 but sees 30. The program runs, yet the logic may be wrong. Checking intermediate values is often more useful than guessing at the final line. Converting the text before addition avoids a type mismatch. Do not fix errors by hiding them with a broad except clause. Understand the cause, make a focused change, and test again with normal and unusual inputs."
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
                  "en": "SyntaxError means invalid code structure",
                  "hi": "SyntaxError means invalid code structure"
                },
                {
                  "en": "TypeError means an operation uses incompatible types",
                  "hi": "TypeError means an operation uses incompatible types"
                },
                {
                  "en": "NameError means a name is not defined",
                  "hi": "NameError means a name is not defined"
                },
                {
                  "en": "Logic errors need expected-versus-actual checks",
                  "hi": "Logic errors need expected-versus-actual checks"
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

const M05_T09_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M05",
  "moduleTitle": "Conditions, Loops and Problem-Solving",
  "topic": "",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 9",
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
                  "title": "Define",
                  "bodyEn": "State the rule clearly",
                  "bodyHi": "State the rule clearly",
                  "tone": "lavender"
                },
                {
                  "title": "Loop",
                  "bodyEn": "Visit each record",
                  "bodyHi": "Visit each record",
                  "tone": "sky"
                },
                {
                  "title": "Decide",
                  "bodyEn": "Apply conditions",
                  "bodyHi": "Apply conditions",
                  "tone": "green"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Check totals and counts",
                  "bodyHi": "Check totals and counts",
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
              "bodyEn": "A retail team wants to count orders worth at least 200 and calculate their combined value. The data is small enough to verify manually.",
              "bodyHi": "A retail team wants to count orders worth at least 200 and calculate their combined value. The data is small enough to verify manually."
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
                  "Business rule",
                  "Condition based on a goal"
                ],
                [
                  "Filter",
                  "Keep matching records"
                ],
                [
                  "Sanity check",
                  "Quick test of a result"
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
                  "en": "Write the expected result before coding",
                  "hi": "Write the expected result before coding"
                },
                {
                  "en": "Separate filtering from calculation when possible",
                  "hi": "Separate filtering from calculation when possible"
                },
                {
                  "en": "Check empty datasets",
                  "hi": "Check empty datasets"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Practical Problem-Solving with Conditions and Loops** Real tasks often combine variables, conditions, and loops. First write the business rule in simple words, then turn it into small code steps. Validate the result against a hand-calculated example before using larger datasets.",
        "bodyHi": "**Practical Problem-Solving with Conditions and Loops** Real tasks often combine variables, conditions, and loops. First write the business rule in simple words, then turn it into small code steps. Validate the result against a hand-calculated example before using larger datasets."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 9",
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
              "code": "orders = [120, 250, 300, 90]\ncount = 0\ntotal = 0\nfor amount in orders:\n    if amount >= 200:\n        count += 1\n        total += amount\nprint(count, total)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "2 550"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The loop visits all four orders. Only 250 and 300 meet the threshold, so count becomes 2 and total becomes 550. Both variables are initialized before the loop. The result can be checked by hand.",
              "bodyHi": "The loop visits all four orders. Only 250 and 300 meet the threshold, so count becomes 2 and total becomes 550. Both variables are initialized before the loop. The result can be checked by hand."
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Practical Problem-Solving with Conditions and Loops Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays).",
        "bodyHi": "**Practical Problem-Solving with Conditions and Loops Read the code from top to bottom.** The example uses small, illustrative values so you can check each step without a video. The result shown below is what the code produces (or what the chart displays)."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 9",
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
              "code": "orders = [120, 250, 300, 90]\nselected = [x for x in orders if x >= 200]\nprint(selected)\nprint(sum(selected))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[250, 300]\n550"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The list comprehension is a shorter way to select values, but the original loop makes the reasoning clearer for beginners. In workplace data, also check missing amounts, returns, currency, and duplicate orders.",
              "bodyHi": "The list comprehension is a shorter way to select values, but the original loop makes the reasoning clearer for beginners. In workplace data, also check missing amounts, returns, currency, and duplicate orders."
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
                  "en": "Write the expected result before coding",
                  "hi": "Write the expected result before coding"
                },
                {
                  "en": "Separate filtering from calculation when possible",
                  "hi": "Separate filtering from calculation when possible"
                },
                {
                  "en": "Check empty datasets",
                  "hi": "Check empty datasets"
                },
                {
                  "en": "Document assumptions and thresholds",
                  "hi": "Document assumptions and thresholds"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Practical Problem-Solving with Conditions and Loops**",
        "bodyHi": "**Practical Problem-Solving with Conditions and Loops**"
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M05 | TOPIC 9",
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
                  "orders = [120, 250, 300, 90]",
                  "Create or update a value used by the calculation."
                ],
                [
                  "count = 0",
                  "Create or update a value used by the calculation."
                ],
                [
                  "total = 0",
                  "Create or update a value used by the calculation."
                ],
                [
                  "for amount in orders:",
                  "Start an iteration over the available values."
                ],
                [
                  "if amount >= 200:",
                  "Check a condition before running the indented block."
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
              "bodyEn": "A retail team wants to count orders worth at least 200 and calculate their combined value. The data is small enough to verify manually. The list comprehension is a shorter way to select values, but the original loop makes the reasoning clearer for beginners. In workplace data, also check missing amounts, returns, currency, and duplicate orders.",
              "bodyHi": "A retail team wants to count orders worth at least 200 and calculate their combined value. The data is small enough to verify manually. The list comprehension is a shorter way to select values, but the original loop makes the reasoning clearer for beginners. In workplace data, also check missing amounts, returns, currency, and duplicate orders."
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
                  "en": "Write the expected result before coding",
                  "hi": "Write the expected result before coding"
                },
                {
                  "en": "Separate filtering from calculation when possible",
                  "hi": "Separate filtering from calculation when possible"
                },
                {
                  "en": "Check empty datasets",
                  "hi": "Check empty datasets"
                },
                {
                  "en": "Document assumptions and thresholds",
                  "hi": "Document assumptions and thresholds"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "**Practical Problem-Solving with Conditions and Loops Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter.",
        "bodyHi": "**Practical Problem-Solving with Conditions and Loops Read the full example again.** This page connects the code to a reliable workplace workflow. Focus on what each operation does, how to verify the result, and which assumptions matter."
      }
    }
  ]
};

const M06_T01_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "Strings, Indexing and Slicing",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 1",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Strings, Indexing and Slicing",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "String",
                  "bodyEn": "Store text",
                  "bodyHi": "Store text",
                  "tone": "lavender"
                },
                {
                  "title": "Index",
                  "bodyEn": "Read one position",
                  "bodyHi": "Read one position",
                  "tone": "sky"
                },
                {
                  "title": "Slice",
                  "bodyEn": "Read a range",
                  "bodyHi": "Read a range",
                  "tone": "green"
                },
                {
                  "title": "Inspect",
                  "bodyEn": "Check the extracted result",
                  "bodyHi": "Check the extracted result",
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
              "bodyEn": "A shop uses product codes like PRD-2026. The first three characters may identify a product category, while the last four identify a year.",
              "bodyHi": "A shop uses product codes like PRD-2026. The first three characters may identify a product category, while the last four identify a year."
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
                  "Position of a character"
                ],
                [
                  "Slice",
                  "Part of a sequence"
                ],
                [
                  "Immutable",
                  "Cannot be changed in place"
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
                  "en": "Indexing starts at zero",
                  "hi": "Indexing starts at zero"
                },
                {
                  "en": "Slice stop is excluded",
                  "hi": "Slice stop is excluded"
                },
                {
                  "en": "Negative indices count from the end",
                  "hi": "Negative indices count from the end"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A string is a sequence of characters such as a name or product code. Python numbers character positions from zero. Indexing gets one character; slicing gets a range of characters without changing the original string.",
        "bodyHi": "A string is a sequence of characters such as a name or product code. Python numbers character positions from zero. Indexing gets one character; slicing gets a range of characters without changing the original string."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 1",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Strings, Indexing and Slicing",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "code = \"PRD-2026\"\nprint(code[0])\nprint(code[:3])\nprint(code[-4:])"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "P\nPRD\n2026"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "code[0] reads the first character. code[:3] reads positions 0, 1, and 2, excluding position 3. code[-4:] reads the last four characters. Negative indices count backward from the end.",
              "bodyHi": "code[0] reads the first character. code[:3] reads positions 0, 1, and 2, excluding position 3. code[-4:] reads the last four characters. Negative indices count backward from the end."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 1",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Strings, Indexing and Slicing",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "name = \"Python\"\nprint(name[1:4])\nprint(name[::-1])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "yth\nnohtyP"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A slice uses [start:stop:step]. The stop position is excluded. A step of -1 reverses the string. Strings are immutable: you cannot change one character in place; create a new string instead.",
              "bodyHi": "A slice uses [start:stop:step]. The stop position is excluded. A step of -1 reverses the string. Strings are immutable: you cannot change one character in place; create a new string instead."
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
                  "en": "Indexing starts at zero",
                  "hi": "Indexing starts at zero"
                },
                {
                  "en": "Slice stop is excluded",
                  "hi": "Slice stop is excluded"
                },
                {
                  "en": "Negative indices count from the end",
                  "hi": "Negative indices count from the end"
                },
                {
                  "en": "Slicing does not modify the original string",
                  "hi": "Slicing does not modify the original string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T02_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "String Methods and Text Processing",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 2",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "String Methods and Text Processing",
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
                  "bodyEn": "Look for spaces or inconsistent case",
                  "bodyHi": "Look for spaces or inconsistent case",
                  "tone": "lavender"
                },
                {
                  "title": "Clean",
                  "bodyEn": "Normalize text",
                  "bodyHi": "Normalize text",
                  "tone": "sky"
                },
                {
                  "title": "Split",
                  "bodyEn": "Separate useful parts",
                  "bodyHi": "Separate useful parts",
                  "tone": "green"
                },
                {
                  "title": "Combine",
                  "bodyEn": "Build readable output",
                  "bodyHi": "Build readable output",
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
              "bodyEn": "Customer cities may be entered as \" patna \", \"Patna\", or \"PATNA\". Normalizing spaces and case helps analysts count the same city consistently.",
              "bodyHi": "Customer cities may be entered as \" patna \", \"Patna\", or \"PATNA\". Normalizing spaces and case helps analysts count the same city consistently."
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
                  "Normalize",
                  "Make formatting consistent"
                ],
                [
                  "Delimiter",
                  "Character separating fields"
                ],
                [
                  "Method",
                  "Function called on an object"
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
                  "en": "String methods usually return new strings",
                  "hi": "String methods usually return new strings"
                },
                {
                  "en": "strip() removes surrounding whitespace only",
                  "hi": "strip() removes surrounding whitespace only"
                },
                {
                  "en": "replace() is literal text replacement",
                  "hi": "replace() is literal text replacement"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "String methods help clean and analyze text. Common methods include strip(), lower(), upper(), replace(), split(), and join(). They return new values because strings are immutable.",
        "bodyHi": "String methods help clean and analyze text. Common methods include strip(), lower(), upper(), replace(), split(), and join(). They return new values because strings are immutable."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 2",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "String Methods and Text Processing",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "city = \"  Patna  \"\nclean = city.strip().lower()\nprint(clean)\nprint(clean.upper())"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "patna\nPATNA"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "strip() removes surrounding whitespace. lower() changes letters to lowercase, and upper() changes them to uppercase. The original city variable is unchanged unless you assign the cleaned value back.",
              "bodyHi": "strip() removes surrounding whitespace. lower() changes letters to lowercase, and upper() changes them to uppercase. The original city variable is unchanged unless you assign the cleaned value back."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 2",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "String Methods and Text Processing",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "item = \"pen,book,bag\"\nparts = item.split(\",\")\nprint(parts)\nprint(\" | \".join(parts))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['pen', 'book', 'bag']\npen | book | bag"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "split() creates a list using the comma separator. join() combines list elements with a chosen separator. Real-world cleaning also needs rules for missing text, spelling differences, and non-English characters.",
              "bodyHi": "split() creates a list using the comma separator. join() combines list elements with a chosen separator. Real-world cleaning also needs rules for missing text, spelling differences, and non-English characters."
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
                  "en": "String methods usually return new strings",
                  "hi": "String methods usually return new strings"
                },
                {
                  "en": "strip() removes surrounding whitespace only",
                  "hi": "strip() removes surrounding whitespace only"
                },
                {
                  "en": "replace() is literal text replacement",
                  "hi": "replace() is literal text replacement"
                },
                {
                  "en": "Normalize carefully to avoid changing meaningful codes",
                  "hi": "Normalize carefully to avoid changing meaningful codes"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T03_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "Lists, Indexing and Slicing",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 3",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Lists, Indexing and Slicing",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Create",
                  "bodyEn": "Store values in []",
                  "bodyHi": "Store values in []",
                  "tone": "lavender"
                },
                {
                  "title": "Index",
                  "bodyEn": "Read one item",
                  "bodyHi": "Read one item",
                  "tone": "sky"
                },
                {
                  "title": "Slice",
                  "bodyEn": "Read a section",
                  "bodyHi": "Read a section",
                  "tone": "green"
                },
                {
                  "title": "Update",
                  "bodyEn": "Change an element",
                  "bodyHi": "Change an element",
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
              "bodyEn": "A manager records daily sales amounts in a list and wants to inspect the first two days and the most recent day.",
              "bodyHi": "A manager records daily sales amounts in a list and wants to inspect the first two days and the most recent day."
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
                  "List",
                  "Ordered collection"
                ],
                [
                  "Mutable",
                  "Can be changed"
                ],
                [
                  "IndexError",
                  "Invalid sequence position"
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
                  "en": "Lists are ordered and mutable",
                  "hi": "Lists are ordered and mutable"
                },
                {
                  "en": "Indices start at zero",
                  "hi": "Indices start at zero"
                },
                {
                  "en": "Slices create a new list",
                  "hi": "Slices create a new list"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A list stores multiple values in a defined order. Lists can grow or shrink and can contain different data types. Use square brackets to create a list, indexing to read one element, and slicing to read part of it.",
        "bodyHi": "A list stores multiple values in a defined order. Lists can grow or shrink and can contain different data types. Use square brackets to create a list, indexing to read one element, and slicing to read part of it."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 3",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Lists, Indexing and Slicing",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "sales = [100, 150, 90, 200]\nprint(sales[0])\nprint(sales[:2])\nprint(sales[-1])"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "100\n[100, 150]\n200"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "sales[0] is the first amount. sales[:2] returns a new list containing the first two amounts. sales[-1] reads the final amount. Lists preserve order and allow repeated values.",
              "bodyHi": "sales[0] is the first amount. sales[:2] returns a new list containing the first two amounts. sales[-1] reads the final amount. Lists preserve order and allow repeated values."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 3",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Lists, Indexing and Slicing",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "items = [\"pen\", \"book\"]\nitems[1] = \"notebook\"\nprint(items)\nprint(len(items))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "['pen', 'notebook']\n2"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The second example changes one element because lists are mutable. len() returns the number of elements. Trying to access an index outside the list raises IndexError.",
              "bodyHi": "The second example changes one element because lists are mutable. len() returns the number of elements. Trying to access an index outside the list raises IndexError."
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
                  "en": "Lists are ordered and mutable",
                  "hi": "Lists are ordered and mutable"
                },
                {
                  "en": "Indices start at zero",
                  "hi": "Indices start at zero"
                },
                {
                  "en": "Slices create a new list",
                  "hi": "Slices create a new list"
                },
                {
                  "en": "Check list length before using an uncertain index",
                  "hi": "Check list length before using an uncertain index"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T04_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "List Methods and Operations",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 4",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "List Methods and Operations",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Add",
                  "bodyEn": "append or extend",
                  "bodyHi": "append or extend",
                  "tone": "lavender"
                },
                {
                  "title": "Remove",
                  "bodyEn": "pop or remove",
                  "bodyHi": "pop or remove",
                  "tone": "sky"
                },
                {
                  "title": "Sort",
                  "bodyEn": "Arrange values",
                  "bodyHi": "Arrange values",
                  "tone": "green"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Use len, sum, min, max",
                  "bodyHi": "Use len, sum, min, max",
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
              "bodyEn": "A warehouse keeps a list of incoming quantities. New deliveries are added, then the amounts are sorted to inspect small and large deliveries.",
              "bodyHi": "A warehouse keeps a list of incoming quantities. New deliveries are added, then the amounts are sorted to inspect small and large deliveries."
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
                  "In-place",
                  "Changes the original object"
                ],
                [
                  "Method",
                  "Operation called on a list"
                ],
                [
                  "Iterable",
                  "Collection of values"
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
                  "en": "append() adds one object",
                  "hi": "append() adds one object"
                },
                {
                  "en": "extend() adds each element from an iterable",
                  "hi": "extend() adds each element from an iterable"
                },
                {
                  "en": "sort() changes the original list",
                  "hi": "sort() changes the original list"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Lists provide methods for adding, removing, and organizing elements. append() adds one item, extend() adds several, pop() removes and returns an item, and sort() changes the order of the list in place.",
        "bodyHi": "Lists provide methods for adding, removing, and organizing elements. append() adds one item, extend() adds several, pop() removes and returns an item, and sort() changes the order of the list in place."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 4",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "List Methods and Operations",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "quantities = [8, 3, 12]\nquantities.append(5)\nquantities.sort()\nprint(quantities)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[3, 5, 8, 12]"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "append(5) adds one value at the end. sort() rearranges the same list in ascending order. This changes quantities; use sorted(quantities) if you want a new sorted list while keeping the original order.",
              "bodyHi": "append(5) adds one value at the end. sort() rearranges the same list in ascending order. This changes quantities; use sorted(quantities) if you want a new sorted list while keeping the original order."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 4",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "List Methods and Operations",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "items = [\"pen\", \"book\", \"bag\"]\nremoved = items.pop()\nprint(removed)\nprint(items)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "bag\n['pen', 'book']"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "pop() removes and returns the last item by default. remove(\"pen\") would remove the first matching value instead. Think about whether order matters before sorting data.",
              "bodyHi": "pop() removes and returns the last item by default. remove(\"pen\") would remove the first matching value instead. Think about whether order matters before sorting data."
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
                  "en": "append() adds one object",
                  "hi": "append() adds one object"
                },
                {
                  "en": "extend() adds each element from an iterable",
                  "hi": "extend() adds each element from an iterable"
                },
                {
                  "en": "sort() changes the original list",
                  "hi": "sort() changes the original list"
                },
                {
                  "en": "pop() returns the removed value",
                  "hi": "pop() returns the removed value"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T05_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "Tuples and Sets",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 5",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Tuples and Sets",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Tuple",
                  "bodyEn": "Fixed ordered values",
                  "bodyHi": "Fixed ordered values",
                  "tone": "lavender"
                },
                {
                  "title": "Set",
                  "bodyEn": "Unique values",
                  "bodyHi": "Unique values",
                  "tone": "sky"
                },
                {
                  "title": "Membership",
                  "bodyEn": "Check if a value exists",
                  "bodyHi": "Check if a value exists",
                  "tone": "green"
                },
                {
                  "title": "Choose",
                  "bodyEn": "Match the data rule",
                  "bodyHi": "Match the data rule",
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
              "bodyEn": "A shop stores a fixed latitude-longitude pair as a tuple and uses a set to find the distinct cities present in customer records.",
              "bodyHi": "A shop stores a fixed latitude-longitude pair as a tuple and uses a set to find the distinct cities present in customer records."
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
                  "Tuple",
                  "Immutable ordered sequence"
                ],
                [
                  "Set",
                  "Unique-element collection"
                ],
                [
                  "Intersection",
                  "Common values"
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
                  "en": "Use tuples for fixed ordered records",
                  "hi": "Use tuples for fixed ordered records"
                },
                {
                  "en": "Use sets for uniqueness and membership",
                  "hi": "Use sets for uniqueness and membership"
                },
                {
                  "en": "Sets do not support numeric indexing",
                  "hi": "Sets do not support numeric indexing"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Tuples and sets are two useful collection types. A tuple is ordered and cannot be changed after creation. A set stores unique elements and does not promise a stable positional order. Choose the type based on your data needs.",
        "bodyHi": "Tuples and sets are two useful collection types. A tuple is ordered and cannot be changed after creation. A set stores unique elements and does not promise a stable positional order. Choose the type based on your data needs."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 5",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Tuples and Sets",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "location = (26.12, 85.39)\ncities = {\"Patna\", \"Delhi\", \"Patna\"}\nprint(location[0])\nprint(len(cities))"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "26.12\n2"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The tuple keeps the two coordinates in order. The set removes the duplicate \"Patna\", so it contains two unique cities. Do not rely on the order in which a set prints its values.",
              "bodyHi": "The tuple keeps the two coordinates in order. The set removes the duplicate \"Patna\", so it contains two unique cities. Do not rely on the order in which a set prints its values."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 5",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Tuples and Sets",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "a = {1, 2, 3}\nb = {3, 4}\nprint(sorted(a & b))\nprint(sorted(a | b))"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[3]\n[1, 2, 3, 4]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "& finds common elements (intersection) and | combines unique elements (union). sorted() is used here to show deterministic output. Tuples can hold mutable objects, but their element references cannot be reassigned.",
              "bodyHi": "& finds common elements (intersection) and | combines unique elements (union). sorted() is used here to show deterministic output. Tuples can hold mutable objects, but their element references cannot be reassigned."
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
                  "en": "Use tuples for fixed ordered records",
                  "hi": "Use tuples for fixed ordered records"
                },
                {
                  "en": "Use sets for uniqueness and membership",
                  "hi": "Use sets for uniqueness and membership"
                },
                {
                  "en": "Sets do not support numeric indexing",
                  "hi": "Sets do not support numeric indexing"
                },
                {
                  "en": "Use sorted() when output order matters",
                  "hi": "Use sorted() when output order matters"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T06_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "Dictionaries and Key-Value Pairs",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 6",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Dictionaries and Key-Value Pairs",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Key",
                  "bodyEn": "Choose an identifier",
                  "bodyHi": "Choose an identifier",
                  "tone": "lavender"
                },
                {
                  "title": "Value",
                  "bodyEn": "Store related information",
                  "bodyHi": "Store related information",
                  "tone": "sky"
                },
                {
                  "title": "Lookup",
                  "bodyEn": "Read by key",
                  "bodyHi": "Read by key",
                  "tone": "green"
                },
                {
                  "title": "Update",
                  "bodyEn": "Change or add a pair",
                  "bodyHi": "Change or add a pair",
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
              "bodyEn": "A product record can store a name, price, and quantity in one dictionary. The analyst can calculate inventory value using its named fields.",
              "bodyHi": "A product record can store a name, price, and quantity in one dictionary. The analyst can calculate inventory value using its named fields."
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
                  "Key",
                  "Name used to find a value"
                ],
                [
                  "Value",
                  "Information stored under a key"
                ],
                [
                  "KeyError",
                  "Missing dictionary key"
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
                  "en": "Keys are unique",
                  "hi": "Keys are unique"
                },
                {
                  "en": "Use get() when a key may be missing",
                  "hi": "Use get() when a key may be missing"
                },
                {
                  "en": "Dictionary values can have different types",
                  "hi": "Dictionary values can have different types"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "A dictionary stores values under keys rather than numeric positions. Keys must be hashable and unique within the dictionary. Dictionaries are useful for records, settings, counts, and fast lookups by identifier.",
        "bodyHi": "A dictionary stores values under keys rather than numeric positions. Keys must be hashable and unique within the dictionary. Dictionaries are useful for records, settings, counts, and fast lookups by identifier."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 6",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Dictionaries and Key-Value Pairs",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "product = {\"name\": \"Pen\", \"price\": 10, \"qty\": 5}\nprint(product[\"name\"])\nprint(product[\"price\"] * product[\"qty\"])"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Pen\n50"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Keys such as \"price\" identify fields. product[\"price\"] returns 10 and product[\"qty\"] returns 5, so inventory value is 50. A missing key accessed with square brackets raises KeyError.",
              "bodyHi": "Keys such as \"price\" identify fields. product[\"price\"] returns 10 and product[\"qty\"] returns 5, so inventory value is 50. A missing key accessed with square brackets raises KeyError."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 6",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Dictionaries and Key-Value Pairs",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "counts = {\"Patna\": 3}\ncounts[\"Delhi\"] = 2\nprint(counts.get(\"Mumbai\", 0))\nprint(counts[\"Delhi\"])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "0\n2"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "get() safely returns a default when a key is absent. Assigning to a new key adds it. Modern Python dictionaries preserve insertion order, but their main purpose is key-based lookup.",
              "bodyHi": "get() safely returns a default when a key is absent. Assigning to a new key adds it. Modern Python dictionaries preserve insertion order, but their main purpose is key-based lookup."
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
                  "en": "Keys are unique",
                  "hi": "Keys are unique"
                },
                {
                  "en": "Use get() when a key may be missing",
                  "hi": "Use get() when a key may be missing"
                },
                {
                  "en": "Dictionary values can have different types",
                  "hi": "Dictionary values can have different types"
                },
                {
                  "en": "Avoid using a mutable list as a dictionary key",
                  "hi": "Avoid using a mutable list as a dictionary key"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T07_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "Looping Through Collections",
  "pageCount": 3,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 7",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Looping Through Collections",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Choose",
                  "bodyEn": "Select the collection",
                  "bodyHi": "Select the collection",
                  "tone": "lavender"
                },
                {
                  "title": "Iterate",
                  "bodyEn": "Visit each item",
                  "bodyHi": "Visit each item",
                  "tone": "sky"
                },
                {
                  "title": "Calculate",
                  "bodyEn": "Apply a rule",
                  "bodyHi": "Apply a rule",
                  "tone": "green"
                },
                {
                  "title": "Collect",
                  "bodyEn": "Store or print the result",
                  "bodyHi": "Store or print the result",
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
              "bodyEn": "A manager wants to print each product and its price from a dictionary, then calculate the sum of a separate list of sales.",
              "bodyHi": "A manager wants to print each product and its price from a dictionary, then calculate the sum of a separate list of sales."
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
                  "Iteration",
                  "Visiting collection elements"
                ],
                [
                  "Unpacking",
                  "Assigning parts to variables"
                ],
                [
                  "enumerate()",
                  "Values with a counter"
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
                  "en": "Use .items() for dictionary pairs",
                  "hi": "Use .items() for dictionary pairs"
                },
                {
                  "en": "Use enumerate() for positions and values",
                  "hi": "Use enumerate() for positions and values"
                },
                {
                  "en": "Use .values() when only dictionary values matter",
                  "hi": "Use .values() when only dictionary values matter"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Loops let you process every item in a list, tuple, set, or dictionary. The form of the loop depends on what you need: values, positions, keys, or key-value pairs. Avoid repeating manual work for each record.",
        "bodyHi": "Loops let you process every item in a list, tuple, set, or dictionary. The form of the loop depends on what you need: values, positions, keys, or key-value pairs. Avoid repeating manual work for each record."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 7",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Looping Through Collections",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "prices = {\"Pen\": 10, \"Book\": 40}\nfor name, price in prices.items():\n    print(name, price)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "Pen 10\nBook 40"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "items() returns key-value pairs. The loop unpacks each pair into name and price. Because the dictionary was created with Pen first, this example prints Pen first.",
              "bodyHi": "items() returns key-value pairs. The loop unpacks each pair into name and price. Because the dictionary was created with Pen first, this example prints Pen first."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 7",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Looping Through Collections",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "sales = [100, 80, 120]\nfor index, amount in enumerate(sales, start=1):\n    print(index, amount)"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "1 100\n2 80\n3 120"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "enumerate() provides a counter alongside each value. This is clearer than manually increasing a separate index variable. For sets, remember that iteration order is not guaranteed.",
              "bodyHi": "enumerate() provides a counter alongside each value. This is clearer than manually increasing a separate index variable. For sets, remember that iteration order is not guaranteed."
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
                  "en": "Use .items() for dictionary pairs",
                  "hi": "Use .items() for dictionary pairs"
                },
                {
                  "en": "Use enumerate() for positions and values",
                  "hi": "Use enumerate() for positions and values"
                },
                {
                  "en": "Use .values() when only dictionary values matter",
                  "hi": "Use .values() when only dictionary values matter"
                },
                {
                  "en": "Do not assume sets have a stable order",
                  "hi": "Do not assume sets have a stable order"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const M06_T08_PY_SPEC: StructuredVisualNoteTopic = {
  "module": "M06",
  "moduleTitle": "Python Collections and Strings",
  "topic": "Nested Collections and Real-Life Data",
  "pageCount": 4,
  "sampleDataNotice": "All example Python snippets, datasets and outputs are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 8",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Nested Collections and Real-Life Data",
      "subtitle": "BUILD THE CORE UNDERSTANDING",
      "sections": [
        {
          "pill": "How this concept works",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Record",
                  "bodyEn": "Represent one item as a dictionary",
                  "bodyHi": "Represent one item as a dictionary",
                  "tone": "lavender"
                },
                {
                  "title": "Dataset",
                  "bodyEn": "Collect records in a list",
                  "bodyHi": "Collect records in a list",
                  "tone": "sky"
                },
                {
                  "title": "Loop",
                  "bodyEn": "Read each record",
                  "bodyHi": "Read each record",
                  "tone": "green"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Calculate a business metric",
                  "bodyHi": "Calculate a business metric",
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
              "bodyEn": "A shop receives several order records. Each record has a product name, quantity, and price. The analyst calculates total revenue by visiting every order.",
              "bodyHi": "A shop receives several order records. Each record has a product name, quantity, and price. The analyst calculates total revenue by visiting every order."
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
                  "Record",
                  "One structured item"
                ],
                [
                  "Nested data",
                  "Collection inside a collection"
                ],
                [
                  "JSON",
                  "Common format for structured data"
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
                  "en": "Know the shape of nested data",
                  "hi": "Know the shape of nested data"
                },
                {
                  "en": "Use meaningful dictionary keys",
                  "hi": "Use meaningful dictionary keys"
                },
                {
                  "en": "Handle missing keys carefully",
                  "hi": "Handle missing keys carefully"
                }
              ]
            }
          ]
        }
      ],
      "intro": {
        "bodyEn": "Real datasets often contain nested collections, such as a list of dictionaries. Each dictionary represents a record, while the list represents many records. Nested structures are a bridge from basic Python to pandas DataFrames and JSON data.",
        "bodyHi": "Real datasets often contain nested collections, such as a list of dictionaries. Each dictionary represents a record, while the list represents many records. Nested structures are a bridge from basic Python to pandas DataFrames and JSON data."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 8",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Nested Collections and Real-Life Data",
      "subtitle": "FIRST WORKED EXAMPLE",
      "sections": [
        {
          "pill": "Worked Python example",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "orders = [{\"item\": \"Pen\", \"qty\": 2, \"price\": 10},\n          {\"item\": \"Book\", \"qty\": 1, \"price\": 50}]\ntotal = 0\nfor order in orders:\n    total += order[\"qty\"] * order[\"price\"]\nprint(total)"
            }
          ]
        },
        {
          "pill": "What you should see",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "70"
            }
          ]
        },
        {
          "pill": "Step-by-step code explanation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each dictionary contains one order line. The first contributes 2 x 10 = 20 and the second contributes 1 x 50 = 50. The loop adds both amounts to total, giving 70.",
              "bodyHi": "Each dictionary contains one order line. The first contributes 2 x 10 = 20 and the second contributes 1 x 50 = 50. The loop adds both amounts to total, giving 70."
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
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 8",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Nested Collections and Real-Life Data",
      "subtitle": "SECOND EXAMPLE AND PRACTICAL RULES",
      "sections": [
        {
          "pill": "A second example to understand",
          "blocks": [
            {
              "type": "sql",
              "label": "PYTHON EDITOR",
              "code": "orders = [{\"city\": \"Patna\", \"amount\": 100},\n          {\"city\": \"Delhi\", \"amount\": 200}]\nprint([row[\"amount\"] for row in orders])"
            }
          ]
        },
        {
          "pill": "Result of the second example",
          "blocks": [
            {
              "type": "sql",
              "label": "OUTPUT / RESULT",
              "code": "[100, 200]"
            }
          ]
        },
        {
          "pill": "Why this example matters",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "The list comprehension extracts one field from every record. Nested data can also contain missing keys or lists inside dictionaries. In real analytics, validate structure before calculating totals and avoid assuming every record has the same fields.",
              "bodyHi": "The list comprehension extracts one field from every record. Nested data can also contain missing keys or lists inside dictionaries. In real analytics, validate structure before calculating totals and avoid assuming every record has the same fields."
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
                  "en": "Know the shape of nested data",
                  "hi": "Know the shape of nested data"
                },
                {
                  "en": "Use meaningful dictionary keys",
                  "hi": "Use meaningful dictionary keys"
                },
                {
                  "en": "Handle missing keys carefully",
                  "hi": "Handle missing keys carefully"
                },
                {
                  "en": "Validate amounts before adding them",
                  "hi": "Validate amounts before adding them"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M06 | TOPIC 8",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Nested Collections and Real-Life Data",
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
                  "orders = [{\"item\": \"Pen\", \"qty\": 2, \"price\": ...",
                  "Create or update a value used by the calculation."
                ],
                [
                  "{\"item\": \"Book\", \"qty\": 1, \"price\": 50}]",
                  "Perform a step in the data-processing workflow."
                ],
                [
                  "total = 0",
                  "Create or update a value used by the calculation."
                ],
                [
                  "for order in orders:",
                  "Start an iteration over the available values."
                ],
                [
                  "total += order[\"qty\"] * order[\"price\"]",
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
              "bodyEn": "A shop receives several order records. Each record has a product name, quantity, and price. The analyst calculates total revenue by visiting every order. The list comprehension extracts one field from every record. Nested data can also contain missing keys or lists inside dictionaries. In real analytics, validate structure before calculating totals and avoid assuming every record has the same fields.",
              "bodyHi": "A shop receives several order records. Each record has a product name, quantity, and price. The analyst calculates total revenue by visiting every order. The list comprehension extracts one field from every record. Nested data can also contain missing keys or lists inside dictionaries. In real analytics, validate structure before calculating totals and avoid assuming every record has the same fields."
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
                  "en": "Know the shape of nested data",
                  "hi": "Know the shape of nested data"
                },
                {
                  "en": "Use meaningful dictionary keys",
                  "hi": "Use meaningful dictionary keys"
                },
                {
                  "en": "Handle missing keys carefully",
                  "hi": "Handle missing keys carefully"
                },
                {
                  "en": "Validate amounts before adding them",
                  "hi": "Validate amounts before adding them"
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

export const PYTHON_PART1_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  11: M03_T01_PY_SPEC,
  12: M03_T02_PY_SPEC,
  13: M03_T03_PY_SPEC,
  14: M03_T04_PY_SPEC,
  15: M03_T05_PY_SPEC,
  16: M03_T06_PY_SPEC,
  17: M04_T01_PY_SPEC,
  18: M04_T02_PY_SPEC,
  19: M04_T03_PY_SPEC,
  20: M04_T04_PY_SPEC,
  21: M04_T05_PY_SPEC,
  22: M04_T06_PY_SPEC,
  23: M04_T07_PY_SPEC,
  24: M05_T01_PY_SPEC,
  25: M05_T02_PY_SPEC,
  26: M05_T03_PY_SPEC,
  27: M05_T04_PY_SPEC,
  28: M05_T05_PY_SPEC,
  29: M05_T06_PY_SPEC,
  30: M05_T07_PY_SPEC,
  31: M05_T08_PY_SPEC,
  32: M05_T09_PY_SPEC,
  33: M06_T01_PY_SPEC,
  34: M06_T02_PY_SPEC,
  35: M06_T03_PY_SPEC,
  36: M06_T04_PY_SPEC,
  37: M06_T05_PY_SPEC,
  38: M06_T06_PY_SPEC,
  39: M06_T07_PY_SPEC,
  40: M06_T08_PY_SPEC,
};
