import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M32_T01_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Ask AI to Explain Excel Formulas",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Ask AI to Explain Excel Formulas",
      "subtitle": "READ FORMULAS INSTEAD OF MEMORIZING THEM",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read",
                  "bodyEn": "Identify the function and cell references.",
                  "bodyHi": "Identify the function and cell references.",
                  "tone": "lavender"
                },
                {
                  "title": "Explain",
                  "bodyEn": "Describe what each part does.",
                  "bodyHi": "Describe what each part does.",
                  "tone": "sky"
                },
                {
                  "title": "Test",
                  "bodyEn": "Check the result in Excel.",
                  "bodyHi": "Check the result in Excel.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Function",
                  "A built-in operation such as SUM, IF or COUNTIF."
                ],
                [
                  "Range",
                  "A group of cells, for example B2:B6."
                ],
                [
                  "Argument",
                  "An input passed to a function."
                ],
                [
                  "Reference",
                  "A cell address; $ can make a row or column fixed."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Cell",
                "Value",
                "Meaning"
              ],
              "rows": [
                [
                  "B2",
                  "100",
                  "Order 1"
                ],
                [
                  "B3",
                  "150",
                  "Order 2"
                ],
                [
                  "B4",
                  "50",
                  "Order 3"
                ]
              ],
              "noteEn": "The formula =SUM(B2:B4) returns 300 for this sample.",
              "noteHi": "The formula =SUM(B2:B4) returns 300 for this sample."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Understand the function, references, condition and tested result.",
              "bodyHi": "Remember: Understand the function, references, condition and tested result."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "An AI assistant can explain an Excel formula by breaking it into functions, ranges, conditions and the expected result. This is helpful for beginners, but the explanation must be checked against actual Excel behavior. Use a small safe worksheet example instead of confidential company data.",
        "bodyHi": "An AI assistant can explain an Excel formula by breaking it into functions, ranges, conditions and the expected result. This is helpful for beginners, but the explanation must be checked against actual Excel behavior. Use a small safe worksheet example instead of confidential company data."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Ask AI to Explain Excel Formulas",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Paste only the formula, not a confidential workbook."
                ],
                [
                  "2",
                  "Ask AI to explain IF, the condition and both possible outputs."
                ],
                [
                  "3",
                  "Create sample values for C2 such as 49, 50 and 60."
                ],
                [
                  "4",
                  "Check the displayed result in Excel for each value."
                ],
                [
                  "5",
                  "Write the explanation in your own words after confirming it."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "=IF(C2>=50,\"Pass\",\"Review\") C2=49 -> Review C2=50 -> Pass • IF checks a logical condition. • C2>=50 is TRUE for 50 and higher. • The first text appears when TRUE; the second when FALSE.",
              "bodyHi": "=IF(C2>=50,\"Pass\",\"Review\") C2=49 -> Review C2=50 -> Pass • IF checks a logical condition. • C2>=50 is TRUE for 50 and higher. • The first text appears when TRUE; the second when FALSE."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not accept an explanation without testing boundary values.",
                  "hi": "Do not accept an explanation without testing boundary values."
                },
                {
                  "en": "Excel separators and function availability can vary by settings.",
                  "hi": "Excel separators and function availability can vary by settings."
                },
                {
                  "en": "Avoid exposing workbook data when a formula alone is enough.",
                  "hi": "Avoid exposing workbook data when a formula alone is enough."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Analysts use AI explanations to learn unfamiliar formulas and review inherited spreadsheets.",
              "bodyHi": "Where analysts use this: Analysts use AI explanations to learn unfamiliar formulas and review inherited spreadsheets."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Understand the function, references, condition and tested result.",
              "bodyHi": "Key takeaway: Understand the function, references, condition and tested result."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A student sees =IF(C2>=50,\"Pass\",\"Review\") and wants to understand it.",
        "bodyHi": "Business situation: A student sees =IF(C2>=50,\"Pass\",\"Review\") and wants to understand it."
      }
    }
  ]
};

const M32_T02_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Generate and Validate Excel Formulas",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Generate and Validate Excel Formulas",
      "subtitle": "TURN A BUSINESS RULE INTO A TESTED FORMULA",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Specify",
                  "bodyEn": "Describe columns and the rule.",
                  "bodyHi": "Describe columns and the rule.",
                  "tone": "lavender"
                },
                {
                  "title": "Draft",
                  "bodyEn": "AI suggests an Excel formula.",
                  "bodyHi": "AI suggests an Excel formula.",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Test results on known rows.",
                  "bodyHi": "Test results on known rows.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Cell mapping",
                  "Tell AI which column contains each field."
                ],
                [
                  "Business rule",
                  "Explain the exact calculation or condition."
                ],
                [
                  "Edge case",
                  "A boundary or unusual input, such as a blank or zero."
                ],
                [
                  "Cross-check",
                  "Calculate a few results manually or with another method."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "A: Region",
                "B: Sales",
                "C: Status"
              ],
              "rows": [
                [
                  "East",
                  "1200",
                  "Paid"
                ],
                [
                  "West",
                  "900",
                  "Paid"
                ],
                [
                  "East",
                  "300",
                  "Pending"
                ]
              ],
              "noteEn": "Only the first row should count for paid East sales.",
              "noteHi": "Only the first row should count for paid East sales."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Explain the business rule, then test the proposed formula against known results.",
              "bodyHi": "Remember: Explain the business rule, then test the proposed formula against known results."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "AI can draft Excel formulas when you explain the data layout and business rule. A formula that looks correct may still use the wrong range, handle blanks badly or count the wrong rows. Validation means testing it on known examples and edge cases before using it in a report.",
        "bodyHi": "AI can draft Excel formulas when you explain the data layout and business rule. A formula that looks correct may still use the wrong range, handle blanks badly or count the wrong rows. Validation means testing it on known examples and edge cases before using it in a report."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Generate and Validate Excel Formulas",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Describe the columns and exact filtering rule."
                ],
                [
                  "2",
                  "Ask AI for a formula using SUMIFS."
                ],
                [
                  "3",
                  "Inspect the sum range and both criteria ranges."
                ],
                [
                  "4",
                  "Test on the three-row example where the expected answer is 1200."
                ],
                [
                  "5",
                  "Check blank rows, text numbers and new rows before using it broadly."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "=SUMIFS(B2:B4,A2:A4,\"East\", C2:C4,\"Paid\") Expected result: 1200 • B2:B4 is the numeric range to add. • A2:A4=\"East\" filters the region. • C2:C4=\"Paid\" filters the payment status.",
              "bodyHi": "=SUMIFS(B2:B4,A2:A4,\"East\", C2:C4,\"Paid\") Expected result: 1200 • B2:B4 is the numeric range to add. • A2:A4=\"East\" filters the region. • C2:C4=\"Paid\" filters the payment status."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not mix ranges with different row boundaries.",
                  "hi": "Do not mix ranges with different row boundaries."
                },
                {
                  "en": "Do not assume a blank or text number behaves like a valid number.",
                  "hi": "Do not assume a blank or text number behaves like a valid number."
                },
                {
                  "en": "Test formula changes after inserting new rows.",
                  "hi": "Test formula changes after inserting new rows."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: AI-assisted formula drafting helps with recurring sales and operations reporting.",
              "bodyHi": "Where analysts use this: AI-assisted formula drafting helps with recurring sales and operations reporting."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Explain the business rule, then test the proposed formula against known results.",
              "bodyHi": "Key takeaway: Explain the business rule, then test the proposed formula against known results."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst needs total Sales for East region where Status is Paid.",
        "bodyHi": "Business situation: An analyst needs total Sales for East region where Status is Paid."
      }
    }
  ]
};

const M32_T03_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Ask AI to Draft SQL Queries",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Ask AI to Draft SQL Queries",
      "subtitle": "WRITE A PRECISE QUESTION BEFORE WRITING SQL",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Schema",
                  "bodyEn": "Give table and column definitions.",
                  "bodyHi": "Give table and column definitions.",
                  "tone": "lavender"
                },
                {
                  "title": "Draft SQL",
                  "bodyEn": "Ask for a clear query.",
                  "bodyHi": "Ask for a clear query.",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Run and compare expected rows.",
                  "bodyHi": "Run and compare expected rows.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Schema",
                  "The tables, fields and data types available."
                ],
                [
                  "SQL dialect",
                  "The database system, such as PostgreSQL, that affects syntax."
                ],
                [
                  "Join key",
                  "The column used to match records between tables."
                ],
                [
                  "Result grain",
                  "What one row in the output represents."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "region",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "East",
                  "500"
                ],
                [
                  "102",
                  "West",
                  "300"
                ],
                [
                  "103",
                  "East",
                  "700"
                ]
              ],
              "noteEn": "East total should be 1200; West total should be 300.",
              "noteHi": "East total should be 1200; West total should be 300."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Give the schema and result grain, then verify the query against sample data.",
              "bodyHi": "Remember: Give the schema and result grain, then verify the query against sample data."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "AI can draft SQL from a description of the tables, columns and business goal. The result is only a starting point. Analysts must check SQL dialect, join keys, filtering rules, row counts and whether the query answers the correct business question.",
        "bodyHi": "AI can draft SQL from a description of the tables, columns and business goal. The result is only a starting point. Analysts must check SQL dialect, join keys, filtering rules, row counts and whether the query answers the correct business question."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Ask AI to Draft SQL Queries",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Tell AI the table name and the exact fields: region and amount."
                ],
                [
                  "2",
                  "Specify PostgreSQL and that one row represents one order."
                ],
                [
                  "3",
                  "Ask for totals grouped by region."
                ],
                [
                  "4",
                  "Review GROUP BY, aggregation and any filtering assumptions."
                ],
                [
                  "5",
                  "Run on sample rows and compare totals with manual arithmetic."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "SELECT region, SUM(amount) AS sales FROM orders GROUP BY region ORDER BY region; • SELECT returns the region and its summed amount. • GROUP BY produces one result row per region. • ORDER BY sorts the displayed regions.",
              "bodyHi": "SELECT region, SUM(amount) AS sales FROM orders GROUP BY region ORDER BY region; • SELECT returns the region and its summed amount. • GROUP BY produces one result row per region. • ORDER BY sorts the displayed regions."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Never let AI invent table or column names.",
                  "hi": "Never let AI invent table or column names."
                },
                {
                  "en": "Do not assume a join is needed when one table is enough.",
                  "hi": "Do not assume a join is needed when one table is enough."
                },
                {
                  "en": "Check NULL amounts and currency definitions in real data.",
                  "hi": "Check NULL amounts and currency definitions in real data."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Analysts use AI to draft common SQL reports, then validate them in the actual database.",
              "bodyHi": "Where analysts use this: Analysts use AI to draft common SQL reports, then validate them in the actual database."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Give the schema and result grain, then verify the query against sample data.",
              "bodyHi": "Key takeaway: Give the schema and result grain, then verify the query against sample data."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager wants sales totals by region from a PostgreSQL orders table.",
        "bodyHi": "Business situation: A manager wants sales totals by region from a PostgreSQL orders table."
      }
    }
  ]
};

const M32_T04_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Debug and Explain SQL",
  "pageCount": 3,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 04",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Debug and Explain SQL",
      "subtitle": "FIND THE CAUSE, NOT JUST A QUICK FIX",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Observe",
                  "bodyEn": "Record the error or wrong result.",
                  "bodyHi": "Record the error or wrong result.",
                  "tone": "lavender"
                },
                {
                  "title": "Diagnose",
                  "bodyEn": "Inspect syntax, keys and filters.",
                  "bodyHi": "Inspect syntax, keys and filters.",
                  "tone": "sky"
                },
                {
                  "title": "Retest",
                  "bodyEn": "Run a corrected query on known data.",
                  "bodyHi": "Run a corrected query on known data.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Syntax error",
                  "The query does not follow the SQL dialect rules."
                ],
                [
                  "Logic error",
                  "The query runs but answers the wrong question."
                ],
                [
                  "Join duplication",
                  "A one-to-many join multiplies rows and may inflate sums."
                ],
                [
                  "Validation",
                  "Compare intermediate row counts and expected totals."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "order_id",
                "item",
                "amount"
              ],
              "rows": [
                [
                  "101",
                  "Pen",
                  "20"
                ],
                [
                  "101",
                  "Book",
                  "80"
                ],
                [
                  "102",
                  "Bag",
                  "200"
                ]
              ],
              "noteEn": "Order 101 has two items; joining to order headers can repeat header-level amounts.",
              "noteHi": "Order 101 has two items; joining to order headers can repeat header-level amounts."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Find the root cause using schema, grain and intermediate results.",
              "bodyHi": "Remember: Find the root cause using schema, grain and intermediate results."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "When SQL fails or produces the wrong result, AI can suggest likely causes and explain the query. Debugging should separate syntax errors from logic errors. A query may execute successfully yet return duplicate or incorrect totals because of joins, filters or grouping.",
        "bodyHi": "When SQL fails or produces the wrong result, AI can suggest likely causes and explain the query. Debugging should separate syntax errors from logic errors. A query may execute successfully yet return duplicate or incorrect totals because of joins, filters or grouping."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 04",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Debug and Explain SQL",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Check the expected grain of orders and order_items."
                ],
                [
                  "2",
                  "Count rows before and after the join."
                ],
                [
                  "3",
                  "Inspect whether each order has multiple item rows."
                ],
                [
                  "4",
                  "Aggregate at the correct grain before or after joining as required."
                ],
                [
                  "5",
                  "Reconcile the final total with the source table."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "SELECT order_id, COUNT(*) AS items FROM order_items GROUP BY order_id; • COUNT(*) shows how many item rows exist per order. • A count above one warns that an order-header join can repeat values. • This diagnostic query does not itself fix the revenue calculation.",
              "bodyHi": "SELECT order_id, COUNT(*) AS items FROM order_items GROUP BY order_id; • COUNT(*) shows how many item rows exist per order. • A count above one warns that an order-header join can repeat values. • This diagnostic query does not itself fix the revenue calculation."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not assume a query is correct because it executes.",
                  "hi": "Do not assume a query is correct because it executes."
                },
                {
                  "en": "Do not use DISTINCT to hide a wrong join without understanding it.",
                  "hi": "Do not use DISTINCT to hide a wrong join without understanding it."
                },
                {
                  "en": "Never share production credentials or private rows when asking for help.",
                  "hi": "Never share production credentials or private rows when asking for help."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: AI-assisted debugging can speed up SQL troubleshooting when paired with row-count checks.",
              "bodyHi": "Where analysts use this: AI-assisted debugging can speed up SQL troubleshooting when paired with row-count checks."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Find the root cause using schema, grain and intermediate results.",
              "bodyHi": "Key takeaway: Find the root cause using schema, grain and intermediate results."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst finds that total revenue doubles after joining orders to order_items.",
        "bodyHi": "Business situation: An analyst finds that total revenue doubles after joining orders to order_items."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 04",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Debug and Explain SQL",
      "subtitle": "DEEPER UNDERSTANDING • REAL-WORLD CLARITY",
      "sections": [
        {
          "pill": "Why duplicates appear",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Imagine Orders has one row per order and Items has several rows per order. Joining them creates one output row per matching item. If order-level revenue is summed after the join, it can be counted repeatedly.",
              "bodyHi": "Imagine Orders has one row per order and Items has several rows per order. Joining them creates one output row per matching item. If order-level revenue is summed after the join, it can be counted repeatedly."
            }
          ]
        },
        {
          "pill": "Compare the key ideas",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Orders Items Joined rows Order 101 2 items 2 rows Order 102 1 item 1 row Total 3 items 3 rows This table is a teaching example. Check real workplace rules and data before applying it.",
              "bodyHi": "Orders Items Joined rows Order 101 2 items 2 rows Order 102 1 item 1 row Total 3 items 3 rows This table is a teaching example. Check real workplace rules and data before applying it."
            }
          ]
        },
        {
          "pill": "How to apply this correctly",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "• Check primary and foreign keys before joining. • Write down the intended output grain. • Aggregate at the correct level instead of masking duplicates.",
              "bodyHi": "• Check primary and foreign keys before joining. • Write down the intended output grain. • Aggregate at the correct level instead of masking duplicates."
            }
          ]
        },
        {
          "pill": "Connect it to a business situation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "An analyst finds that total revenue doubles after joining orders to order_items.",
              "bodyHi": "An analyst finds that total revenue doubles after joining orders to order_items."
            }
          ]
        },
        {
          "pill": "Final concept to remember",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Find the root cause using schema, grain and intermediate results.",
              "bodyHi": "Find the root cause using schema, grain and intermediate results."
            }
          ]
        }
      ]
    }
  ]
};

const M32_T05_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Generate Python Code Safely",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Generate Python Code Safely",
      "subtitle": "USE AI DRAFTS WITH CONTROLLED TESTING",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Specify",
                  "bodyEn": "Describe inputs, outputs and limits.",
                  "bodyHi": "Describe inputs, outputs and limits.",
                  "tone": "lavender"
                },
                {
                  "title": "Review",
                  "bodyEn": "Read imports and operations carefully.",
                  "bodyHi": "Read imports and operations carefully.",
                  "tone": "sky"
                },
                {
                  "title": "Test",
                  "bodyEn": "Run on safe sample data first.",
                  "bodyHi": "Run on safe sample data first.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Input contract",
                  "What types and values a function accepts."
                ],
                [
                  "Output contract",
                  "What the function returns for valid and invalid input."
                ],
                [
                  "Side effect",
                  "An action such as changing files, sending data or making requests."
                ],
                [
                  "Sandbox",
                  "A restricted test environment separate from important systems."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Input",
                "Expected output",
                "Why"
              ],
              "rows": [
                [
                  "[2, 4, 6]",
                  "4.0",
                  "Normal average"
                ],
                [
                  "[]",
                  "None",
                  "No values"
                ],
                [
                  "[-2, 2]",
                  "0.0",
                  "Negative numbers"
                ]
              ],
              "noteEn": "Known expected outputs make code easier to test.",
              "noteHi": "Known expected outputs make code easier to test."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: AI-written code is untrusted until a person reads it and tests its behavior.",
              "bodyHi": "Remember: AI-written code is untrusted until a person reads it and tests its behavior."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "AI can draft Python functions and data analysis scripts. Safe use means specifying the expected inputs and outputs, reviewing code before running it, avoiding unknown external commands and testing with synthetic data. A readable explanation does not prove the code is secure or correct.",
        "bodyHi": "AI can draft Python functions and data analysis scripts. Safe use means specifying the expected inputs and outputs, reviewing code before running it, avoiding unknown external commands and testing with synthetic data. A readable explanation does not prove the code is secure or correct."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Generate Python Code Safely",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Specify that empty input should return None rather than crash."
                ],
                [
                  "2",
                  "Request a function without file, network or external system access."
                ],
                [
                  "3",
                  "Read every line, especially imports and any side effects."
                ],
                [
                  "4",
                  "Run the code with ordinary, empty and negative-number examples."
                ],
                [
                  "5",
                  "Use the function in a real workflow only after code review and tests."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "def average(values): if len(values) == 0: return None return sum(values) / len(values) • The function accepts a sequence of numbers. • The first branch handles empty input safely. • The final expression computes the arithmetic mean.",
              "bodyHi": "def average(values): if len(values) == 0: return None return sum(values) / len(values) • The function accepts a sequence of numbers. • The first branch handles empty input safely. • The final expression computes the arithmetic mean."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not run generated shell commands without understanding them.",
                  "hi": "Do not run generated shell commands without understanding them."
                },
                {
                  "en": "Do not paste secrets or production data into prompts.",
                  "hi": "Do not paste secrets or production data into prompts."
                },
                {
                  "en": "Do not assume dependencies or APIs are current.",
                  "hi": "Do not assume dependencies or APIs are current."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Python drafts can accelerate analysis scripts when reviewed and tested.",
              "bodyHi": "Where analysts use this: Python drafts can accelerate analysis scripts when reviewed and tested."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: AI-written code is untrusted until a person reads it and tests its behavior.",
              "bodyHi": "Key takeaway: AI-written code is untrusted until a person reads it and tests its behavior."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst wants a Python helper that computes the mean of a list.",
        "bodyHi": "Business situation: An analyst wants a Python helper that computes the mean of a list."
      }
    }
  ]
};

const M32_T06_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Debug Python with AI",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Debug Python with AI",
      "subtitle": "EXPLAIN THE ERROR AND REPRODUCE THE FIX",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Reproduce",
                  "bodyEn": "Run a small example that fails.",
                  "bodyHi": "Run a small example that fails.",
                  "tone": "lavender"
                },
                {
                  "title": "Explain",
                  "bodyEn": "Find the failing line and cause.",
                  "bodyHi": "Find the failing line and cause.",
                  "tone": "sky"
                },
                {
                  "title": "Fix and test",
                  "bodyEn": "Correct it and rerun edge cases.",
                  "bodyHi": "Correct it and rerun edge cases.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Traceback",
                  "A record showing where a Python error occurred."
                ],
                [
                  "Exception type",
                  "A category such as TypeError or ZeroDivisionError."
                ],
                [
                  "Minimal example",
                  "The smallest code that still reproduces the problem."
                ],
                [
                  "Regression test",
                  "A test that confirms the old failure stays fixed."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Expression",
                "Problem",
                "Safer approach"
              ],
              "rows": [
                [
                  "10 / 0",
                  "Division by zero",
                  "Check denominator"
                ],
                [
                  "\"5\" + 2",
                  "Type mismatch",
                  "Convert carefully"
                ],
                [
                  "items[4]",
                  "Index may not exist",
                  "Check length"
                ]
              ],
              "noteEn": "Error messages guide investigation; they are not the complete diagnosis.",
              "noteHi": "Error messages guide investigation; they are not the complete diagnosis."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Reproduce the failure, identify the cause, fix it and keep a regression test.",
              "bodyHi": "Remember: Reproduce the failure, identify the cause, fix it and keep a regression test."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "AI can help interpret Python tracebacks and suggest fixes. Effective debugging starts with the exact error, the smallest reproducible example and the expected behavior. A good fix solves the cause and passes tests; it should not merely hide the error message.",
        "bodyHi": "AI can help interpret Python tracebacks and suggest fixes. Effective debugging starts with the exact error, the smallest reproducible example and the expected behavior. A good fix solves the cause and passes tests; it should not merely hide the error message."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Debug Python with AI",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Read the exception type and identify the failing line."
                ],
                [
                  "2",
                  "Create a minimal example with baseline = 0."
                ],
                [
                  "3",
                  "Ask AI to explain the cause and suggest a clear rule for zero baselines."
                ],
                [
                  "4",
                  "Implement the agreed rule and test both zero and nonzero cases."
                ],
                [
                  "5",
                  "Check that the corrected function still produces expected normal results."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "def pct_change(old, new): if old == 0: return None return (new - old) / old * 100 • The function checks the denominator before dividing. • None means percentage change is undefined under this rule. • The calculation uses old as the baseline for valid cases.",
              "bodyHi": "def pct_change(old, new): if old == 0: return None return (new - old) / old * 100 • The function checks the denominator before dividing. • None means percentage change is undefined under this rule. • The calculation uses old as the baseline for valid cases."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not suppress every exception with a broad except.",
                  "hi": "Do not suppress every exception with a broad except."
                },
                {
                  "en": "Do not change business definitions just to avoid an error.",
                  "hi": "Do not change business definitions just to avoid an error."
                },
                {
                  "en": "Never expose real credentials in shared tracebacks.",
                  "hi": "Never expose real credentials in shared tracebacks."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: AI-assisted debugging helps analysts understand errors and prevent repeat failures.",
              "bodyHi": "Where analysts use this: AI-assisted debugging helps analysts understand errors and prevent repeat failures."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Reproduce the failure, identify the cause, fix it and keep a regression test.",
              "bodyHi": "Key takeaway: Reproduce the failure, identify the cause, fix it and keep a regression test."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A function fails when a percentage calculation receives a zero baseline.",
        "bodyHi": "Business situation: A function fails when a percentage calculation receives a zero baseline."
      }
    }
  ]
};

const M32_T07_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M32",
  "moduleTitle": "AI-Assisted Excel, SQL and Python",
  "topic": "Test AI-Generated Code with Sample Data",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 07",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Test AI-Generated Code with Sample Data",
      "subtitle": "PROVE THE RESULT WITH KNOWN EXAMPLES",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Prepare",
                  "bodyEn": "Create safe sample inputs.",
                  "bodyHi": "Create safe sample inputs.",
                  "tone": "lavender"
                },
                {
                  "title": "Expect",
                  "bodyEn": "Calculate the correct outputs first.",
                  "bodyHi": "Calculate the correct outputs first.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Run code and investigate differences.",
                  "bodyHi": "Run code and investigate differences.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Test case",
                  "A specific input paired with an expected outcome."
                ],
                [
                  "Edge case",
                  "An unusual but valid or possible input."
                ],
                [
                  "Assertion",
                  "A check that the actual output matches the expected result."
                ],
                [
                  "Regression",
                  "A repeated test that protects a previously fixed behavior."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Input values",
                "Expected sum",
                "Reason"
              ],
              "rows": [
                [
                  "[10, 20]",
                  "30",
                  "Normal case"
                ],
                [
                  "[]",
                  "0",
                  "Empty list"
                ],
                [
                  "[-5, 5]",
                  "0",
                  "Negative values"
                ]
              ],
              "noteEn": "Expected results should be defined independently of AI-generated code.",
              "noteHi": "Expected results should be defined independently of AI-generated code."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Known expected outputs turn an AI code draft into something you can check.",
              "bodyHi": "Remember: Known expected outputs turn an AI code draft into something you can check."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Testing checks whether generated code meets a defined specification. Use small sample datasets with known expected answers, then include edge cases such as blanks, duplicates, zeros and unexpected types. Tests reduce risk but do not guarantee that every possible case is correct.",
        "bodyHi": "Testing checks whether generated code meets a defined specification. Use small sample datasets with known expected answers, then include edge cases such as blanks, duplicates, zeros and unexpected types. Tests reduce risk but do not guarantee that every possible case is correct."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M32 | TOPIC 07",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Test AI-Generated Code with Sample Data",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Define expected behavior for normal, empty and negative-value inputs."
                ],
                [
                  "2",
                  "Create synthetic test cases with answers calculated manually."
                ],
                [
                  "3",
                  "Run the generated function in a controlled environment."
                ],
                [
                  "4",
                  "Compare actual outputs to expected outputs with assertions."
                ],
                [
                  "5",
                  "Investigate any failed test and add it to future regression checks."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "def total(values): return sum(values) assert total([10, 20]) == 30 assert total([]) == 0 • The function uses Python sum on the input list. • The first assertion checks a normal case. • The second assertion checks the empty-list rule.",
              "bodyHi": "def total(values): return sum(values) assert total([10, 20]) == 30 assert total([]) == 0 • The function uses Python sum on the input list. • The first assertion checks a normal case. • The second assertion checks the empty-list rule."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "A passing normal test does not cover all edge cases.",
                  "hi": "A passing normal test does not cover all edge cases."
                },
                {
                  "en": "Do not generate expected answers from the same unverified code.",
                  "hi": "Do not generate expected answers from the same unverified code."
                },
                {
                  "en": "Use synthetic data before testing with approved real data.",
                  "hi": "Use synthetic data before testing with approved real data."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Test cases make AI-assisted Excel, SQL and Python work safer and easier to maintain.",
              "bodyHi": "Where analysts use this: Test cases make AI-assisted Excel, SQL and Python work safer and easier to maintain."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Known expected outputs turn an AI code draft into something you can check.",
              "bodyHi": "Key takeaway: Known expected outputs turn an AI code draft into something you can check."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An AI assistant writes a function to sum numeric values in a list.",
        "bodyHi": "Business situation: An AI assistant writes a function to sum numeric values in a list."
      }
    }
  ]
};

const M33_T01_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Use AI to Draft an Analysis Plan",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Use AI to Draft an Analysis Plan",
      "subtitle": "START WITH THE QUESTION, NOT THE CHART",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Question",
                  "bodyEn": "Define the decision the business needs.",
                  "bodyHi": "Define the decision the business needs.",
                  "tone": "lavender"
                },
                {
                  "title": "Plan",
                  "bodyEn": "Choose data, metrics and checks.",
                  "bodyHi": "Choose data, metrics and checks.",
                  "tone": "sky"
                },
                {
                  "title": "Execute",
                  "bodyEn": "Analyze and validate findings.",
                  "bodyHi": "Analyze and validate findings.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Business objective",
                  "The decision or problem the analysis should support."
                ],
                [
                  "Metric definition",
                  "A precise rule for calculating a KPI."
                ],
                [
                  "Data requirement",
                  "The tables, fields and date range needed."
                ],
                [
                  "Validation plan",
                  "Checks that detect missing data or incorrect totals."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Plan element",
                "Example",
                "Why it matters"
              ],
              "rows": [
                [
                  "Question",
                  "Why are returns rising?",
                  "Focus"
                ],
                [
                  "Metric",
                  "Returns / orders",
                  "Definition"
                ],
                [
                  "Check",
                  "Match source totals",
                  "Trust"
                ]
              ],
              "noteEn": "A plan is a starting outline, not evidence that a conclusion is true.",
              "noteHi": "A plan is a starting outline, not evidence that a conclusion is true."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: AI can draft the plan; the analyst validates the question, data and method.",
              "bodyHi": "Remember: AI can draft the plan; the analyst validates the question, data and method."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "An analysis plan connects a business problem to the data, metrics, checks and deliverables needed to answer it. AI can draft a useful outline, but the analyst must confirm data availability, metric definitions and business constraints before starting.",
        "bodyHi": "An analysis plan connects a business problem to the data, metrics, checks and deliverables needed to answer it. AI can draft a useful outline, but the analyst must confirm data availability, metric definitions and business constraints before starting."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Use AI to Draft an Analysis Plan",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Define the outcome: explain the change and identify possible actions."
                ],
                [
                  "2",
                  "Ask AI to list relevant fields such as orders, returns, product and date."
                ],
                [
                  "3",
                  "Confirm the exact return-rate definition with the business owner."
                ],
                [
                  "4",
                  "Plan comparisons by month and product category."
                ],
                [
                  "5",
                  "Add data quality checks and a review of possible confounding factors."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Goal: Understand return-rate changes. Data: Orders, returns, product, date. Metric: Returns / eligible orders. Output: Verified trend + limitations. • The goal defines the business question. • The data list identifies required fields. • The metric and output rules make the plan testable.",
              "bodyHi": "Goal: Understand return-rate changes. Data: Orders, returns, product, date. Metric: Returns / eligible orders. Output: Verified trend + limitations. • The goal defines the business question. • The data list identifies required fields. • The metric and output rules make the plan testable."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not assume all proposed data fields exist.",
                  "hi": "Do not assume all proposed data fields exist."
                },
                {
                  "en": "Do not confuse correlation with proven cause.",
                  "hi": "Do not confuse correlation with proven cause."
                },
                {
                  "en": "Do not skip metric approval because the plan sounds complete.",
                  "hi": "Do not skip metric approval because the plan sounds complete."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Planning helps analysts avoid wasted queries and misleading dashboards.",
              "bodyHi": "Where analysts use this: Planning helps analysts avoid wasted queries and misleading dashboards."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: AI can draft the plan; the analyst validates the question, data and method.",
              "bodyHi": "Key takeaway: AI can draft the plan; the analyst validates the question, data and method."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A retail manager asks why the return rate increased in the last two months.",
        "bodyHi": "Business situation: A retail manager asks why the return rate increased in the last two months."
      }
    }
  ]
};

const M33_T02_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Summarize Verified Tables and Trends",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Summarize Verified Tables and Trends",
      "subtitle": "TURN CHECKED NUMBERS INTO CLEAR LANGUAGE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Verify",
                  "bodyEn": "Check the table and metric definitions.",
                  "bodyHi": "Check the table and metric definitions.",
                  "tone": "lavender"
                },
                {
                  "title": "Summarize",
                  "bodyEn": "Describe the most important changes.",
                  "bodyHi": "Describe the most important changes.",
                  "tone": "sky"
                },
                {
                  "title": "Review",
                  "bodyEn": "Match every claim to the data.",
                  "bodyHi": "Match every claim to the data.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Absolute change",
                  "New value minus old value."
                ],
                [
                  "Percentage change",
                  "Absolute change divided by the old value, when nonzero."
                ],
                [
                  "Trend",
                  "A pattern across time, not a guaranteed future direction."
                ],
                [
                  "Qualification",
                  "A note about incomplete or uncertain evidence."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Month",
                "Sales",
                "Change"
              ],
              "rows": [
                [
                  "Jan",
                  "100",
                  "Baseline"
                ],
                [
                  "Feb",
                  "120",
                  "+20%"
                ],
                [
                  "Mar",
                  "108",
                  "-10% vs Feb"
                ]
              ],
              "noteEn": "The month-to-month direction changes; do not claim uninterrupted growth.",
              "noteHi": "The month-to-month direction changes; do not claim uninterrupted growth."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Only summarize numbers that have been checked, and separate observations from explanations.",
              "bodyHi": "Remember: Only summarize numbers that have been checked, and separate observations from explanations."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "AI can turn a verified table into a readable summary. The table must already have correct totals, dates, filters and units. A good summary states what changed and by how much without inventing a cause that the data does not establish.",
        "bodyHi": "AI can turn a verified table into a readable summary. The table must already have correct totals, dates, filters and units. A good summary states what changed and by how much without inventing a cause that the data does not establish."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Summarize Verified Tables and Trends",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Confirm that all months use the same currency, unit and filters."
                ],
                [
                  "2",
                  "Calculate changes independently: Feb vs Jan and Mar vs Feb."
                ],
                [
                  "3",
                  "Ask AI for two simple sentences using only the supplied table."
                ],
                [
                  "4",
                  "Check each number and the direction of every comparison."
                ],
                [
                  "5",
                  "Add a limitation if the table does not explain why sales changed."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Jan: 100, Feb: 120, Mar: 108 Feb change: +20% Mar change vs Feb: -10% • February rises by 20 compared with January. • March falls by 12 from February, which is 10% of 120. • The figures describe what happened, not the cause.",
              "bodyHi": "Jan: 100, Feb: 120, Mar: 108 Feb change: +20% Mar change vs Feb: -10% • February rises by 20 compared with January. • March falls by 12 from February, which is 10% of 120. • The figures describe what happened, not the cause."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not compare months with different units or filters.",
                  "hi": "Do not compare months with different units or filters."
                },
                {
                  "en": "Do not describe a single increase as a long-term trend.",
                  "hi": "Do not describe a single increase as a long-term trend."
                },
                {
                  "en": "Do not accept invented causes or forecast figures.",
                  "hi": "Do not accept invented causes or forecast figures."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: AI summaries help managers read validated KPIs quickly.",
              "bodyHi": "Where analysts use this: AI summaries help managers read validated KPIs quickly."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Only summarize numbers that have been checked, and separate observations from explanations.",
              "bodyHi": "Key takeaway: Only summarize numbers that have been checked, and separate observations from explanations."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst needs a short summary for three months of verified sales data.",
        "bodyHi": "Business situation: An analyst needs a short summary for three months of verified sales data."
      }
    }
  ]
};

const M33_T03_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Draft Insight Narratives",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Draft Insight Narratives",
      "subtitle": "EXPLAIN WHAT CHANGED AND WHY IT MATTERS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Observation",
                  "bodyEn": "State the measured change.",
                  "bodyHi": "State the measured change.",
                  "tone": "lavender"
                },
                {
                  "title": "Meaning",
                  "bodyEn": "Explain the business relevance.",
                  "bodyHi": "Explain the business relevance.",
                  "tone": "sky"
                },
                {
                  "title": "Action",
                  "bodyEn": "Suggest a justified next check or decision.",
                  "bodyHi": "Suggest a justified next check or decision.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Observation",
                  "A measured fact from the data."
                ],
                [
                  "Interpretation",
                  "What the fact may mean in context."
                ],
                [
                  "Hypothesis",
                  "A possible explanation that still needs testing."
                ],
                [
                  "Recommendation",
                  "A practical action linked to evidence and uncertainty."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Part",
                "Example",
                "Evidence level"
              ],
              "rows": [
                [
                  "Fact",
                  "Returns rose to 8%",
                  "Verified KPI"
                ],
                [
                  "Hypothesis",
                  "Packaging issue",
                  "Needs test"
                ],
                [
                  "Action",
                  "Review damaged orders",
                  "Practical next step"
                ]
              ],
              "noteEn": "The narrative should clearly label a hypothesis instead of presenting it as fact.",
              "noteHi": "The narrative should clearly label a hypothesis instead of presenting it as fact."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Insight writing should move from fact to meaning to evidence-based next action.",
              "bodyHi": "Remember: Insight writing should move from fact to meaning to evidence-based next action."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "An insight narrative connects a verified observation to business meaning and a sensible next step. AI can help with wording, but the analyst must separate observed facts, possible explanations and recommendations. Strong narratives avoid claiming cause without supporting evidence.",
        "bodyHi": "An insight narrative connects a verified observation to business meaning and a sensible next step. AI can help with wording, but the analyst must separate observed facts, possible explanations and recommendations. Strong narratives avoid claiming cause without supporting evidence."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Draft Insight Narratives",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Confirm the return rate and compare the same product groups and periods."
                ],
                [
                  "2",
                  "Describe the increase in plain English without exaggeration."
                ],
                [
                  "3",
                  "List packaging as a hypothesis, not a proven cause."
                ],
                [
                  "4",
                  "Suggest checking return reasons and shipment damage records."
                ],
                [
                  "5",
                  "Review the final wording with the product owner."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Fact: Return rate rose from 5% to 8%. Hypothesis: Packaging may be a factor. Next step: Review damage reasons. • The fact is the measured change. • The hypothesis suggests a possible explanation. • The next step gathers evidence before a decision.",
              "bodyHi": "Fact: Return rate rose from 5% to 8%. Hypothesis: Packaging may be a factor. Next step: Review damage reasons. • The fact is the measured change. • The hypothesis suggests a possible explanation. • The next step gathers evidence before a decision."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not use \"because\" when the cause was not tested.",
                  "hi": "Do not use \"because\" when the cause was not tested."
                },
                {
                  "en": "Avoid hiding uncertainty behind confident language.",
                  "hi": "Avoid hiding uncertainty behind confident language."
                },
                {
                  "en": "Do not recommend costly action without evaluating impact.",
                  "hi": "Do not recommend costly action without evaluating impact."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Analysts use narratives in dashboards, business reviews and executive updates.",
              "bodyHi": "Where analysts use this: Analysts use narratives in dashboards, business reviews and executive updates."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Insight writing should move from fact to meaning to evidence-based next action.",
              "bodyHi": "Key takeaway: Insight writing should move from fact to meaning to evidence-based next action."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A product team sees a higher return rate after changing packaging.",
        "bodyHi": "Business situation: A product team sees a higher return rate after changing packaging."
      }
    }
  ]
};

const M33_T04_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Generate Documentation and Data Dictionaries",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Generate Documentation and Data Dictionaries",
      "subtitle": "MAKE ANALYSIS EASY TO UNDERSTAND AND REPEAT",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Collect",
                  "bodyEn": "Gather approved schema and metric definitions.",
                  "bodyHi": "Gather approved schema and metric definitions.",
                  "tone": "lavender"
                },
                {
                  "title": "Draft",
                  "bodyEn": "Write field descriptions and steps.",
                  "bodyHi": "Write field descriptions and steps.",
                  "tone": "sky"
                },
                {
                  "title": "Confirm",
                  "bodyEn": "Ask owners to verify meanings.",
                  "bodyHi": "Ask owners to verify meanings.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Data dictionary",
                  "A list of fields with definitions, types and allowed values."
                ],
                [
                  "Lineage",
                  "Where data comes from and how it changes."
                ],
                [
                  "Transformation log",
                  "The steps used to clean or reshape source data."
                ],
                [
                  "Owner",
                  "The person or team responsible for a field or metric."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Field",
                "Type",
                "Meaning"
              ],
              "rows": [
                [
                  "order_id",
                  "Text",
                  "Unique order reference"
                ],
                [
                  "order_date",
                  "Date",
                  "Date order was placed"
                ],
                [
                  "amount",
                  "Decimal",
                  "Paid amount in INR"
                ]
              ],
              "noteEn": "Definitions are illustrative and must be confirmed for each real dataset.",
              "noteHi": "Definitions are illustrative and must be confirmed for each real dataset."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: AI drafts documentation; data owners confirm definitions and lineage.",
              "bodyHi": "Remember: AI drafts documentation; data owners confirm definitions and lineage."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Documentation explains where data came from, what each field means, how it was cleaned and how calculations were produced. AI can draft a data dictionary from verified schema information, but it must not invent field meanings or business rules.",
        "bodyHi": "Documentation explains where data came from, what each field means, how it was cleaned and how calculations were produced. AI can draft a data dictionary from verified schema information, but it must not invent field meanings or business rules."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Generate Documentation and Data Dictionaries",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Extract the real column names and data types from the approved source."
                ],
                [
                  "2",
                  "Ask the data owner to confirm the meaning and allowed values."
                ],
                [
                  "3",
                  "Use AI to draft concise descriptions using only confirmed information."
                ],
                [
                  "4",
                  "Document cleaning steps and the source refresh schedule."
                ],
                [
                  "5",
                  "Review the dictionary and keep it updated with schema changes."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Field: order_id Type: Text Meaning: Unique order reference Owner: Sales Data Team • The field name identifies the column. • The type says how values are stored. • The meaning and owner should come from confirmed source documentation.",
              "bodyHi": "Field: order_id Type: Text Meaning: Unique order reference Owner: Sales Data Team • The field name identifies the column. • The type says how values are stored. • The meaning and owner should come from confirmed source documentation."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not guess what an ambiguous abbreviation means.",
                  "hi": "Do not guess what an ambiguous abbreviation means."
                },
                {
                  "en": "Do not invent business owners or update schedules.",
                  "hi": "Do not invent business owners or update schedules."
                },
                {
                  "en": "Do not include private sample rows in public documentation.",
                  "hi": "Do not include private sample rows in public documentation."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Data dictionaries help teams reuse datasets and explain KPIs consistently.",
              "bodyHi": "Where analysts use this: Data dictionaries help teams reuse datasets and explain KPIs consistently."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: AI drafts documentation; data owners confirm definitions and lineage.",
              "bodyHi": "Key takeaway: AI drafts documentation; data owners confirm definitions and lineage."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst inherits a sales dataset with unclear columns and no documentation.",
        "bodyHi": "Business situation: An analyst inherits a sales dataset with unclear columns and no documentation."
      }
    }
  ]
};

const M33_T05_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Create Executive Report Summaries",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Create Executive Report Summaries",
      "subtitle": "WRITE FOR DECISIONS, NOT FOR TECHNICAL DETAIL",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Headline",
                  "bodyEn": "Lead with the most important verified result.",
                  "bodyHi": "Lead with the most important verified result.",
                  "tone": "lavender"
                },
                {
                  "title": "Evidence",
                  "bodyEn": "Show the key supporting figures.",
                  "bodyHi": "Show the key supporting figures.",
                  "tone": "sky"
                },
                {
                  "title": "Decision",
                  "bodyEn": "State the action and limitation.",
                  "bodyHi": "State the action and limitation.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Audience",
                  "Executives need decisions and implications, not every query step."
                ],
                [
                  "Key finding",
                  "A short, measurable observation with a period and unit."
                ],
                [
                  "Business impact",
                  "Why the result matters for cost, risk or growth."
                ],
                [
                  "Caveat",
                  "A limitation that could change the interpretation."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Section",
                "Example",
                "Purpose"
              ],
              "rows": [
                [
                  "Finding",
                  "Sales up 12%",
                  "What happened"
                ],
                [
                  "Impact",
                  "Revenue increase",
                  "Why it matters"
                ],
                [
                  "Next step",
                  "Check stock",
                  "What to do"
                ]
              ],
              "noteEn": "A good summary is brief without hiding important uncertainty.",
              "noteHi": "A good summary is brief without hiding important uncertainty."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Lead with a verified finding, explain impact and suggest a justified next step.",
              "bodyHi": "Remember: Lead with a verified finding, explain impact and suggest a justified next step."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "An executive summary is a short, evidence-based explanation of the most important business results, their significance and the next recommended action. AI can improve clarity and structure, but the analyst must confirm figures and avoid overstating certainty.",
        "bodyHi": "An executive summary is a short, evidence-based explanation of the most important business results, their significance and the next recommended action. AI can improve clarity and structure, but the analyst must confirm figures and avoid overstating certainty."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Create Executive Report Summaries",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Choose the two most decision-relevant findings."
                ],
                [
                  "2",
                  "Confirm the figures, periods and comparison baselines."
                ],
                [
                  "3",
                  "Ask AI for a plain-English paragraph under a set word limit."
                ],
                [
                  "4",
                  "Include one realistic next step and any material data limitation."
                ],
                [
                  "5",
                  "Review the final summary for accuracy, tone and actionability."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Write 70 words for a store manager. Use only verified weekly KPIs. Include: finding, impact, next step. State one material limitation. • The audience controls the level of technical detail. • The source restriction protects against invented numbers. • The limitation prevents an overconfident recommendation.",
              "bodyHi": "Write 70 words for a store manager. Use only verified weekly KPIs. Include: finding, impact, next step. State one material limitation. • The audience controls the level of technical detail. • The source restriction protects against invented numbers. • The limitation prevents an overconfident recommendation."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not fill a summary with unexplained abbreviations.",
                  "hi": "Do not fill a summary with unexplained abbreviations."
                },
                {
                  "en": "Do not bury the main finding after a long introduction.",
                  "hi": "Do not bury the main finding after a long introduction."
                },
                {
                  "en": "Do not present untested explanations as proven causes.",
                  "hi": "Do not present untested explanations as proven causes."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Executive summaries help leaders make timely, informed decisions.",
              "bodyHi": "Where analysts use this: Executive summaries help leaders make timely, informed decisions."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Lead with a verified finding, explain impact and suggest a justified next step.",
              "bodyHi": "Key takeaway: Lead with a verified finding, explain impact and suggest a justified next step."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager needs a one-paragraph update on verified weekly store performance.",
        "bodyHi": "Business situation: A manager needs a one-paragraph update on verified weekly store performance."
      }
    }
  ]
};

const M33_T06_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Verify Claims Against Data",
  "pageCount": 2,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Verify Claims Against Data",
      "subtitle": "TRACE EACH SENTENCE TO THE SOURCE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Extract",
                  "bodyEn": "List numbers and factual claims.",
                  "bodyHi": "List numbers and factual claims.",
                  "tone": "lavender"
                },
                {
                  "title": "Trace",
                  "bodyEn": "Match claims to source records.",
                  "bodyHi": "Match claims to source records.",
                  "tone": "sky"
                },
                {
                  "title": "Approve",
                  "bodyEn": "Correct or remove unsupported content.",
                  "bodyHi": "Correct or remove unsupported content.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Claim inventory",
                  "A list of statements that require evidence."
                ],
                [
                  "Source trace",
                  "The table, query or document supporting a claim."
                ],
                [
                  "Reconciliation",
                  "Comparing reported totals with trusted source totals."
                ],
                [
                  "Unsupported claim",
                  "A statement without enough reliable evidence."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Draft statement",
                "Data evidence",
                "Status"
              ],
              "rows": [
                [
                  "\"240 orders\"",
                  "Count = 240",
                  "Verified"
                ],
                [
                  "\"Growth = 25%\"",
                  "200 -> 240",
                  "Incorrect"
                ],
                [
                  "\"Cause is ads\"",
                  "No causal test",
                  "Unverified"
                ]
              ],
              "noteEn": "The actual growth from 200 to 240 is 20%, not 25%.",
              "noteHi": "The actual growth from 200 to 240 is 20%, not 25%."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Every important statement needs traceable evidence and a reproducible calculation.",
              "bodyHi": "Remember: Every important statement needs traceable evidence and a reproducible calculation."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "An AI-assisted report can contain correct-looking but unsupported claims. Claim verification means identifying every factual statement, finding its source and reproducing any calculation. This is especially important when reports combine different tables, dates or metric definitions.",
        "bodyHi": "An AI-assisted report can contain correct-looking but unsupported claims. Claim verification means identifying every factual statement, finding its source and reproducing any calculation. This is especially important when reports combine different tables, dates or metric definitions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Verify Claims Against Data",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Find the source orders for both periods and confirm the filters."
                ],
                [
                  "2",
                  "Calculate growth using the old period as the baseline."
                ],
                [
                  "3",
                  "Correct 25% to 20% if the verified totals are 200 and 240."
                ],
                [
                  "4",
                  "Check whether an experiment or causal analysis supports the advertising claim."
                ],
                [
                  "5",
                  "Remove or qualify unsupported causal wording before publishing."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Previous orders = 200 Current orders = 240 Growth = (240-200)/200 = 20% • The difference is 40 orders. • Dividing 40 by the old 200 gives 0.20 or 20%. • Two totals alone cannot prove advertising caused the change.",
              "bodyHi": "Previous orders = 200 Current orders = 240 Growth = (240-200)/200 = 20% • The difference is 40 orders. • Dividing 40 by the old 200 gives 0.20 or 20%. • Two totals alone cannot prove advertising caused the change."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not accept figures simply because they have decimals.",
                  "hi": "Do not accept figures simply because they have decimals."
                },
                {
                  "en": "Do not mix dates or populations across sources.",
                  "hi": "Do not mix dates or populations across sources."
                },
                {
                  "en": "Do not let unsupported causes remain in final reports.",
                  "hi": "Do not let unsupported causes remain in final reports."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Claim verification is essential for management reporting and regulatory or financial communication.",
              "bodyHi": "Where analysts use this: Claim verification is essential for management reporting and regulatory or financial communication."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Every important statement needs traceable evidence and a reproducible calculation.",
              "bodyHi": "Key takeaway: Every important statement needs traceable evidence and a reproducible calculation."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An AI-generated weekly report says order growth was 25% and was caused by advertising.",
        "bodyHi": "Business situation: An AI-generated weekly report says order growth was 25% and was caused by advertising."
      }
    }
  ]
};

const M33_T07_GENAI_SPEC: StructuredVisualNoteTopic = {
  "module": "M33",
  "moduleTitle": "AI-Assisted Analysis, Documentation and Reporting",
  "topic": "Build a Repeatable Human-in-the-Loop Workflow",
  "pageCount": 3,
  "sampleDataNotice": "All example prompts, AI outputs and business records are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 07",
      "pageTag": "PAGE 1 OF 3",
      "footerPage": "1 / 3",
      "title": "Build a Repeatable Human-in-the-Loop Workflow",
      "subtitle": "DESIGN A PROCESS THAT STAYS TRUSTWORTHY",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Prepare",
                  "bodyEn": "Load approved, validated data.",
                  "bodyHi": "Load approved, validated data.",
                  "tone": "lavender"
                },
                {
                  "title": "Draft",
                  "bodyEn": "Use AI for a controlled first version.",
                  "bodyHi": "Use AI for a controlled first version.",
                  "tone": "sky"
                },
                {
                  "title": "Approve",
                  "bodyEn": "Review facts, risks and final output.",
                  "bodyHi": "Review facts, risks and final output.",
                  "tone": "green"
                }
              ]
            }
          ]
        },
        {
          "pill": "Understand the key concepts",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Concept",
                "Explanation"
              ],
              "rows": [
                [
                  "Input control",
                  "Use approved sources and permitted data fields."
                ],
                [
                  "Automated checks",
                  "Validate row counts, totals, schema and missing values."
                ],
                [
                  "Human checkpoint",
                  "A named reviewer approves important claims and decisions."
                ],
                [
                  "Audit record",
                  "Save source versions, checks, edits and approvals."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read this simple example",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Owner",
                "Required evidence"
              ],
              "rows": [
                [
                  "Data validation",
                  "Analyst",
                  "Reconciled totals"
                ],
                [
                  "AI draft",
                  "Approved tool",
                  "Draft with sources"
                ],
                [
                  "Final review",
                  "Manager",
                  "Approval record"
                ]
              ],
              "noteEn": "A repeatable process makes errors visible and responsibility clear.",
              "noteHi": "A repeatable process makes errors visible and responsibility clear."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Automate repeatable steps; keep humans responsible for evidence and decisions.",
              "bodyHi": "Remember: Automate repeatable steps; keep humans responsible for evidence and decisions."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A repeatable human-in-the-loop workflow combines automated drafting with clear validation and approval steps. AI can save time, but people must own metric definitions, privacy checks, corrections and final decisions. A good workflow records what was done so the next reporting cycle is consistent.",
        "bodyHi": "A repeatable human-in-the-loop workflow combines automated drafting with clear validation and approval steps. AI can save time, but people must own metric definitions, privacy checks, corrections and final decisions. A good workflow records what was done so the next reporting cycle is consistent."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 07",
      "pageTag": "PAGE 2 OF 3",
      "footerPage": "2 / 3",
      "title": "Build a Repeatable Human-in-the-Loop Workflow",
      "subtitle": "WORKED EXAMPLE • STEP-BY-STEP",
      "sections": [
        {
          "pill": "Follow the complete workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Workflow Action"
              ],
              "rows": [
                [
                  "1",
                  "Connect to approved source tables and record the reporting period."
                ],
                [
                  "2",
                  "Run automated checks for missing dates, duplicates and KPI totals."
                ],
                [
                  "3",
                  "Send only verified, permitted summary data to the approved AI tool."
                ],
                [
                  "4",
                  "Generate a draft and compare each claim with the checked metrics."
                ],
                [
                  "5",
                  "Have a responsible reviewer approve the report and log any corrections."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Read the example prompt or code",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Source data -> Data checks -> KPI table -> AI draft -> Human review -> Approved weekly report • The first checks make the input reliable. • The AI draft is a writing step, not the source of truth. • Human approval is the final gate before distribution.",
              "bodyHi": "Source data -> Data checks -> KPI table -> AI draft -> Human review -> Approved weekly report • The first checks make the input reliable. • The AI draft is a writing step, not the source of truth. • Human approval is the final gate before distribution."
            }
          ]
        },
        {
          "pill": "Common mistakes to avoid",
          "blocks": [
            {
              "type": "bullets",
              "tone": "amber",
              "items": [
                {
                  "en": "Do not skip review because the process ran automatically.",
                  "hi": "Do not skip review because the process ran automatically."
                },
                {
                  "en": "Do not allow failed data checks to pass silently.",
                  "hi": "Do not allow failed data checks to pass silently."
                },
                {
                  "en": "Do not keep only the final PDF and lose the source version.",
                  "hi": "Do not keep only the final PDF and lose the source version."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Repeatable workflows help analytics teams produce reliable weekly and monthly reports.",
              "bodyHi": "Where analysts use this: Repeatable workflows help analytics teams produce reliable weekly and monthly reports."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Automate repeatable steps; keep humans responsible for evidence and decisions.",
              "bodyHi": "Key takeaway: Automate repeatable steps; keep humans responsible for evidence and decisions."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A team creates the same weekly sales report every Monday and wants AI to help draft it.",
        "bodyHi": "Business situation: A team creates the same weekly sales report every Monday and wants AI to help draft it."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M33 | TOPIC 07",
      "pageTag": "PAGE 3 OF 3",
      "footerPage": "3 / 3",
      "title": "Build a Repeatable Human-in-the-Loop Workflow",
      "subtitle": "DEEPER UNDERSTANDING • REAL-WORLD CLARITY",
      "sections": [
        {
          "pill": "Design the quality gates",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each stage should have a clear pass/fail rule. If source validation fails, stop the workflow. If a draft claim cannot be traced, return it for correction. Only approved reports reach stakeholders.",
              "bodyHi": "Each stage should have a clear pass/fail rule. If source validation fails, stop the workflow. If a draft claim cannot be traced, return it for correction. Only approved reports reach stakeholders."
            }
          ]
        },
        {
          "pill": "Compare the key ideas",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Gate Pass condition Failure action Data quality Counts match source Investigate Claim review Evidence found Revise draft Approval Owner signs off Hold report This table is a teaching example. Check real workplace rules and data before applying it.",
              "bodyHi": "Gate Pass condition Failure action Data quality Counts match source Investigate Claim review Evidence found Revise draft Approval Owner signs off Hold report This table is a teaching example. Check real workplace rules and data before applying it."
            }
          ]
        },
        {
          "pill": "How to apply this correctly",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "• Keep a version of the source and the final approved summary. • Track recurring errors so the workflow improves. • Make the escalation path clear when the reviewer is unsure.",
              "bodyHi": "• Keep a version of the source and the final approved summary. • Track recurring errors so the workflow improves. • Make the escalation path clear when the reviewer is unsure."
            }
          ]
        },
        {
          "pill": "Connect it to a business situation",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A team creates the same weekly sales report every Monday and wants AI to help draft it.",
              "bodyHi": "A team creates the same weekly sales report every Monday and wants AI to help draft it."
            }
          ]
        },
        {
          "pill": "Final concept to remember",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Automate repeatable steps; keep humans responsible for evidence and decisions.",
              "bodyHi": "Automate repeatable steps; keep humans responsible for evidence and decisions."
            }
          ]
        }
      ]
    }
  ]
};

export const GENAI_PART2_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  272: M32_T01_GENAI_SPEC,
  273: M32_T02_GENAI_SPEC,
  274: M32_T03_GENAI_SPEC,
  275: M32_T04_GENAI_SPEC,
  276: M32_T05_GENAI_SPEC,
  277: M32_T06_GENAI_SPEC,
  278: M32_T07_GENAI_SPEC,
  279: M33_T01_GENAI_SPEC,
  280: M33_T02_GENAI_SPEC,
  281: M33_T03_GENAI_SPEC,
  282: M33_T04_GENAI_SPEC,
  283: M33_T05_GENAI_SPEC,
  284: M33_T06_GENAI_SPEC,
  285: M33_T07_GENAI_SPEC,
};
