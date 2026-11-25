import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M26_T01_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "What Is DAX?",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "What Is DAX?",
      "subtitle": "THE FORMULA LANGUAGE OF POWER BI",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Model",
                  "bodyEn": "Tables, columns and relationships.",
                  "bodyHi": "Tables, columns and relationships.",
                  "tone": "lavender"
                },
                {
                  "title": "DAX formula",
                  "bodyEn": "Defines a calculation.",
                  "bodyHi": "Defines a calculation.",
                  "tone": "sky"
                },
                {
                  "title": "Report",
                  "bodyEn": "Recalculates measures for selected filters.",
                  "bodyHi": "Recalculates measures for selected filters.",
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
                  "Measure",
                  "Calculated when a visual requests a result, using its filter context."
                ],
                [
                  "Calculated column",
                  "Evaluated row by row and stored in the model after refresh."
                ],
                [
                  "Function",
                  "A named operation such as SUM, COUNTROWS or CALCULATE."
                ],
                [
                  "Context",
                  "The filters or current row that affect how an expression is evaluated."
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
                "Region",
                "Sales"
              ],
              "rows": [
                [
                  "East",
                  "100"
                ],
                [
                  "West",
                  "200"
                ],
                [
                  "East",
                  "150"
                ]
              ],
              "noteEn": "A Total Sales measure gives 450 overall or 250 when East is selected.",
              "noteHi": "A Total Sales measure gives 450 overall or 250 when East is selected."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: DAX calculations become useful when model structure and context are understood.",
              "bodyHi": "Remember: DAX calculations become useful when model structure and context are understood."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "DAX stands for Data Analysis Expressions. It is a formula language used in Power BI models for measures, calculated columns and calculated tables. DAX works with tables, columns and evaluation context rather than only single spreadsheet cells.",
        "bodyHi": "DAX stands for Data Analysis Expressions. It is a formula language used in Power BI models for measures, calculated columns and calculated tables. DAX works with tables, columns and evaluation context rather than only single spreadsheet cells."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "What Is DAX?",
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
                  "Find the Sales table and confirm SalesAmount is numeric."
                ],
                [
                  "2",
                  "Create a new measure and enter a simple SUM expression."
                ],
                [
                  "3",
                  "Place the measure in a Card and check the overall total."
                ],
                [
                  "4",
                  "Add a Region slicer and select East."
                ],
                [
                  "5",
                  "Confirm the Card changes from 450 to 250 in the illustrative data."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Total Sales = SUM(Sales[SalesAmount])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "Total Sales names the measure.",
                  "hi": "Total Sales names the measure."
                },
                {
                  "en": "Sales[SalesAmount] identifies the column.",
                  "hi": "Sales[SalesAmount] identifies the column."
                },
                {
                  "en": "SUM adds visible values after report filters are applied.",
                  "hi": "SUM adds visible values after report filters are applied."
                }
              ]
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
                  "en": "Do not confuse a measure with a stored calculated column.",
                  "hi": "Do not confuse a measure with a stored calculated column."
                },
                {
                  "en": "DAX uses model context, which differs from ordinary Excel cell references.",
                  "hi": "DAX uses model context, which differs from ordinary Excel cell references."
                },
                {
                  "en": "A syntactically valid formula can still represent the wrong business definition.",
                  "hi": "A syntactically valid formula can still represent the wrong business definition."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: DAX is used for revenue, conversion rates, rankings and time comparisons.",
              "bodyHi": "Where analysts use this: DAX is used for revenue, conversion rates, rankings and time comparisons."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: DAX calculations become useful when model structure and context are understood.",
              "bodyHi": "Key takeaway: DAX calculations become useful when model structure and context are understood."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales report needs a KPI that changes when the manager selects a region.",
        "bodyHi": "Business situation: A sales report needs a KPI that changes when the manager selects a region."
      }
    }
  ]
};

const M26_T02_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "Calculated Columns vs Measures",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Calculated Columns vs Measures",
      "subtitle": "CHOOSE WHEN THE CALCULATION SHOULD HAPPEN",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Calculated column",
                  "bodyEn": "One value for each stored row.",
                  "bodyHi": "One value for each stored row.",
                  "tone": "lavender"
                },
                {
                  "title": "Measure",
                  "bodyEn": "One result for the current filter context.",
                  "bodyHi": "One result for the current filter context.",
                  "tone": "sky"
                },
                {
                  "title": "Choose",
                  "bodyEn": "Use row labels or dynamic summaries as needed.",
                  "bodyHi": "Use row labels or dynamic summaries as needed.",
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
                  "Column example",
                  "LineAmount = Quantity * UnitPrice for every sales row."
                ],
                [
                  "Measure example",
                  "Total Revenue = SUM(Sales[LineAmount]) for the selected context."
                ],
                [
                  "Storage",
                  "Calculated columns consume model storage; measures store formulas, not a value per row."
                ],
                [
                  "Use case",
                  "Columns for row-level categorization; measures for aggregations and KPIs."
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
                "Order",
                "Qty",
                "Price",
                "LineAmount"
              ],
              "rows": [
                [
                  "101",
                  "2",
                  "100",
                  "200"
                ],
                [
                  "102",
                  "1",
                  "300",
                  "300"
                ],
                [
                  "103",
                  "3",
                  "50",
                  "150"
                ]
              ],
              "noteEn": "A calculated column gives 200, 300 and 150; a measure can sum to 650.",
              "noteHi": "A calculated column gives 200, 300 and 150; a measure can sum to 650."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Columns describe rows; measures summarize the current selection.",
              "bodyHi": "Remember: Columns describe rows; measures summarize the current selection."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A calculated column creates a value for each row and is stored in the model after refresh. A measure calculates a result when needed and responds to report filters. Choosing the right one affects flexibility, memory and correctness.",
        "bodyHi": "A calculated column creates a value for each row and is stored in the model after refresh. A measure calculates a result when needed and responds to report filters. Choosing the right one affects flexibility, memory and correctness."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Calculated Columns vs Measures",
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
                  "Create a LineAmount calculated column if the row-level value is required."
                ],
                [
                  "2",
                  "Use Quantity multiplied by UnitPrice for each row."
                ],
                [
                  "3",
                  "Create a Total Revenue measure that sums LineAmount."
                ],
                [
                  "4",
                  "Place the measure in a Card and apply an Order or Region filter."
                ],
                [
                  "5",
                  "Check that the column values stay row-level while the measure total changes."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "LineAmount = Sales[Qty] * Sales[Price]\nTotal Revenue = SUM(Sales[LineAmount])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "The column expression is evaluated for each Sales row.",
                  "hi": "The column expression is evaluated for each Sales row."
                },
                {
                  "en": "The measure adds LineAmount for rows visible in the current context.",
                  "hi": "The measure adds LineAmount for rows visible in the current context."
                }
              ]
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
                  "en": "Do not use a calculated column for every dynamic total.",
                  "hi": "Do not use a calculated column for every dynamic total."
                },
                {
                  "en": "Do not assume a measure returns one permanent value.",
                  "hi": "Do not assume a measure returns one permanent value."
                },
                {
                  "en": "Check data grain and row context before writing row-level formulas.",
                  "hi": "Check data grain and row context before writing row-level formulas."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Good measure design keeps executive dashboards flexible and smaller.",
              "bodyHi": "Where analysts use this: Good measure design keeps executive dashboards flexible and smaller."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Columns describe rows; measures summarize the current selection.",
              "bodyHi": "Key takeaway: Columns describe rows; measures summarize the current selection."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A report needs line-level revenue and a total that changes with filters.",
        "bodyHi": "Business situation: A report needs line-level revenue and a total that changes with filters."
      }
    }
  ]
};

const M26_T03_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "SUM, COUNTROWS and DISTINCTCOUNT",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "SUM, COUNTROWS and DISTINCTCOUNT",
      "subtitle": "THREE BASIC BUSINESS MEASURES",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SUM",
                  "bodyEn": "How much money?",
                  "bodyHi": "How much money?",
                  "tone": "lavender"
                },
                {
                  "title": "COUNTROWS",
                  "bodyEn": "How many records?",
                  "bodyHi": "How many records?",
                  "tone": "sky"
                },
                {
                  "title": "DISTINCTCOUNT",
                  "bodyEn": "How many unique IDs?",
                  "bodyHi": "How many unique IDs?",
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
                  "SUM",
                  "Adds values in one numeric column in the current filter context."
                ],
                [
                  "COUNTROWS",
                  "Counts rows in a table expression; each row is counted."
                ],
                [
                  "DISTINCTCOUNT",
                  "Counts distinct values in a column, including blank if present."
                ],
                [
                  "Business grain",
                  "Order lines, orders and customers can have different counts."
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
                "OrderID",
                "CustomerID",
                "Amount"
              ],
              "rows": [
                [
                  "101",
                  "C1",
                  "100"
                ],
                [
                  "101",
                  "C1",
                  "50"
                ],
                [
                  "102",
                  "C2",
                  "200"
                ],
                [
                  "103",
                  "C1",
                  "80"
                ]
              ],
              "noteEn": "Four order lines, three distinct OrderIDs, two distinct CustomerIDs and 430 total amount.",
              "noteHi": "Four order lines, three distinct OrderIDs, two distinct CustomerIDs and 430 total amount."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Choose the function that matches the exact unit being counted.",
              "bodyHi": "Remember: Choose the function that matches the exact unit being counted."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "SUM adds numeric values, COUNTROWS counts table rows and DISTINCTCOUNT counts different nonblank or blank values as distinct values according to the data. These functions answer different questions, so choose based on the business definition.",
        "bodyHi": "SUM adds numeric values, COUNTROWS counts table rows and DISTINCTCOUNT counts different nonblank or blank values as distinct values according to the data. These functions answer different questions, so choose based on the business definition."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "SUM, COUNTROWS and DISTINCTCOUNT",
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
                  "Create Total Sales using SUM over Amount."
                ],
                [
                  "2",
                  "Create Line Count using COUNTROWS over the Sales table."
                ],
                [
                  "3",
                  "Create Customer Count using DISTINCTCOUNT over CustomerID."
                ],
                [
                  "4",
                  "Check the example: 430, 4 and 2 respectively."
                ],
                [
                  "5",
                  "Explain why distinct customers differ from transaction rows."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Total Sales = SUM(Sales[Amount])\nLine Count = COUNTROWS(Sales)\nCustomers = DISTINCTCOUNT(Sales[CustomerID])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "SUM totals numeric amounts.",
                  "hi": "SUM totals numeric amounts."
                },
                {
                  "en": "COUNTROWS counts four rows in the sample.",
                  "hi": "COUNTROWS counts four rows in the sample."
                },
                {
                  "en": "DISTINCTCOUNT returns two customer IDs (C1 and C2).",
                  "hi": "DISTINCTCOUNT returns two customer IDs (C1 and C2)."
                }
              ]
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
                  "en": "COUNTROWS does not automatically count unique orders.",
                  "hi": "COUNTROWS does not automatically count unique orders."
                },
                {
                  "en": "DISTINCTCOUNT can include a blank as a distinct value.",
                  "hi": "DISTINCTCOUNT can include a blank as a distinct value."
                },
                {
                  "en": "Always define whether the KPI counts lines, orders or people.",
                  "hi": "Always define whether the KPI counts lines, orders or people."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: These functions power the most common sales and operations KPIs.",
              "bodyHi": "Where analysts use this: These functions power the most common sales and operations KPIs."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Choose the function that matches the exact unit being counted.",
              "bodyHi": "Key takeaway: Choose the function that matches the exact unit being counted."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales manager asks for total revenue, number of lines and number of customers.",
        "bodyHi": "Business situation: A sales manager asks for total revenue, number of lines and number of customers."
      }
    }
  ]
};

const M26_T04_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "CALCULATE Basics",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "CALCULATE Basics",
      "subtitle": "CHANGE FILTER CONTEXT ON PURPOSE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Base measure",
                  "bodyEn": "Start with Total Sales.",
                  "bodyHi": "Start with Total Sales.",
                  "tone": "lavender"
                },
                {
                  "title": "Filter",
                  "bodyEn": "Specify which rows should be included.",
                  "bodyHi": "Specify which rows should be included.",
                  "tone": "sky"
                },
                {
                  "title": "CALCULATE",
                  "bodyEn": "Evaluate the measure under that filter.",
                  "bodyHi": "Evaluate the measure under that filter.",
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
                  "Expression",
                  "The measure or calculation to evaluate."
                ],
                [
                  "Filter argument",
                  "A condition or table expression that changes filter context."
                ],
                [
                  "Replacement behavior",
                  "A filter on the same column can replace an existing filter unless KEEPFILTERS is used."
                ],
                [
                  "Context transition",
                  "CALCULATE can convert an existing row context into filter context in relevant expressions."
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
                "Region",
                "Status",
                "Sales"
              ],
              "rows": [
                [
                  "East",
                  "Completed",
                  "100"
                ],
                [
                  "East",
                  "Pending",
                  "50"
                ],
                [
                  "West",
                  "Completed",
                  "200"
                ]
              ],
              "noteEn": "Completed Sales is 300; East Completed Sales is 100.",
              "noteHi": "Completed Sales is 300; East Completed Sales is 100."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: CALCULATE means: evaluate this expression with these filter rules.",
              "bodyHi": "Remember: CALCULATE means: evaluate this expression with these filter rules."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "CALCULATE evaluates an expression in a modified filter context. It is one of the most important DAX functions because it lets a measure answer questions such as total sales for a specific region or only completed orders.",
        "bodyHi": "CALCULATE evaluates an expression in a modified filter context. It is one of the most important DAX functions because it lets a measure answer questions such as total sales for a specific region or only completed orders."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "CALCULATE Basics",
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
                  "First create Total Sales = SUM(Sales[Sales])."
                ],
                [
                  "2",
                  "Create Completed Sales with CALCULATE and a Status filter."
                ],
                [
                  "3",
                  "Place Total Sales and Completed Sales in separate Cards."
                ],
                [
                  "4",
                  "Use the sample to check 350 total versus 300 completed."
                ],
                [
                  "5",
                  "Add a Region slicer and confirm Completed Sales becomes 100 for East."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Completed Sales =\nCALCULATE(\n    [Total Sales],\n    Sales[Status] = \"Completed\"\n)"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "[Total Sales] is the expression being evaluated.",
                  "hi": "[Total Sales] is the expression being evaluated."
                },
                {
                  "en": "Sales[Status] = \"Completed\" restricts the status.",
                  "hi": "Sales[Status] = \"Completed\" restricts the status."
                },
                {
                  "en": "Other compatible filters, such as Region, still affect the result.",
                  "hi": "Other compatible filters, such as Region, still affect the result."
                }
              ]
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
                  "en": "CALCULATE changes context; it does not edit source data.",
                  "hi": "CALCULATE changes context; it does not edit source data."
                },
                {
                  "en": "A filter on the same column can override an existing selection.",
                  "hi": "A filter on the same column can override an existing selection."
                },
                {
                  "en": "Check the measure under multiple slicer combinations.",
                  "hi": "Check the measure under multiple slicer combinations."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: CALCULATE is used for category-specific KPIs, comparisons and time intelligence. How filters combine: A Region slicer set to East and a CALCULATE filter on Status = Completed produce the intersection: East AND Completed. If CALCULATE filters Region itself, the default behavior may replace the slicer’s Region filter unless KEEPFILTERS is applied.",
              "bodyHi": "Where analysts use this: CALCULATE is used for category-specific KPIs, comparisons and time intelligence. How filters combine: A Region slicer set to East and a CALCULATE filter on Status = Completed produce the intersection: East AND Completed. If CALCULATE filters Region itself, the default behavior may replace the slicer’s Region filter unless KEEPFILTERS is applied."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: CALCULATE means: evaluate this expression with these filter rules.",
              "bodyHi": "Key takeaway: CALCULATE means: evaluate this expression with these filter rules."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A report must show only revenue from Completed orders.",
        "bodyHi": "Business situation: A report must show only revenue from Completed orders."
      }
    }
  ]
};

const M26_T05_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "Filter Context",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Filter Context",
      "subtitle": "WHY THE SAME MEASURE SHOWS DIFFERENT NUMBERS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Slicer",
                  "bodyEn": "Select East region.",
                  "bodyHi": "Select East region.",
                  "tone": "lavender"
                },
                {
                  "title": "Relationships",
                  "bodyEn": "Filter matching Sales rows.",
                  "bodyHi": "Filter matching Sales rows.",
                  "tone": "sky"
                },
                {
                  "title": "Measure",
                  "bodyEn": "Recalculate Total Sales for East.",
                  "bodyHi": "Recalculate Total Sales for East.",
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
                  "Visual context",
                  "A bar chart by Region evaluates the measure separately for each region."
                ],
                [
                  "Slicer context",
                  "A selection can narrow the rows considered across connected visuals."
                ],
                [
                  "Relationship context",
                  "Dimension filters reach related fact rows when model paths allow."
                ],
                [
                  "CALCULATE",
                  "Can add, remove or replace filters for a specific measure."
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
                "Region",
                "Sales row 1",
                "Sales row 2",
                "Total"
              ],
              "rows": [
                [
                  "East",
                  "100",
                  "150",
                  "250"
                ],
                [
                  "West",
                  "200",
                  "50",
                  "250"
                ]
              ],
              "noteEn": "Overall Total Sales is 500; each region bar shows 250.",
              "noteHi": "Overall Total Sales is 500; each region bar shows 250."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: A measure answers the question for the rows currently allowed by filters.",
              "bodyHi": "Remember: A measure answers the question for the rows currently allowed by filters."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Filter context is the set of filters applied when DAX evaluates a measure. Filters can come from slicers, visual rows, page filters, report filters and relationships. The same measure can show different results without changing its formula.",
        "bodyHi": "Filter context is the set of filters applied when DAX evaluates a measure. Filters can come from slicers, visual rows, page filters, report filters and relationships. The same measure can show different results without changing its formula."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Filter Context",
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
                  "Write Total Sales = SUM(Sales[Amount])."
                ],
                [
                  "2",
                  "Place the measure in a Card with no Region filter; observe 500."
                ],
                [
                  "3",
                  "Place Region on a chart axis and the same measure in Values."
                ],
                [
                  "4",
                  "Observe 250 for East and 250 for West."
                ],
                [
                  "5",
                  "Select East in a slicer and check that compatible visuals update."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Total Sales = SUM(Sales[Amount])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "The formula stays unchanged.",
                  "hi": "The formula stays unchanged."
                },
                {
                  "en": "The rows available to SUM change based on filter context.",
                  "hi": "The rows available to SUM change based on filter context."
                },
                {
                  "en": "Model relationships determine whether a dimension selection reaches Sales.",
                  "hi": "Model relationships determine whether a dimension selection reaches Sales."
                }
              ]
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
                  "en": "Do not expect a measure to have one fixed answer everywhere.",
                  "hi": "Do not expect a measure to have one fixed answer everywhere."
                },
                {
                  "en": "An inactive or incorrect relationship can block expected filtering.",
                  "hi": "An inactive or incorrect relationship can block expected filtering."
                },
                {
                  "en": "Check hidden page and visual filters when results seem inconsistent.",
                  "hi": "Check hidden page and visual filters when results seem inconsistent."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Filter context explains most surprises in DAX-based dashboards. Reading context step by step: Ask: Which visual is evaluating the measure? Which axis row or slicer value is selected? Which page/report filters apply? Which relationships transmit those filters? Only then interpret the displayed number.",
              "bodyHi": "Where analysts use this: Filter context explains most surprises in DAX-based dashboards. Reading context step by step: Ask: Which visual is evaluating the measure? Which axis row or slicer value is selected? Which page/report filters apply? Which relationships transmit those filters? Only then interpret the displayed number."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: A measure answers the question for the rows currently allowed by filters.",
              "bodyHi": "Key takeaway: A measure answers the question for the rows currently allowed by filters."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A report Card shows 500, but the East bar shows 250 using the same measure.",
        "bodyHi": "Business situation: A report Card shows 500, but the East bar shows 250 using the same measure."
      }
    }
  ]
};

const M26_T06_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "Row Context Overview",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Row Context Overview",
      "subtitle": "UNDERSTAND THE CURRENT ROW IN A FORMULA",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Current row",
                  "bodyEn": "Qty = 2, Price = 100.",
                  "bodyHi": "Qty = 2, Price = 100.",
                  "tone": "lavender"
                },
                {
                  "title": "Expression",
                  "bodyEn": "Qty * Price.",
                  "bodyHi": "Qty * Price.",
                  "tone": "sky"
                },
                {
                  "title": "Next row",
                  "bodyEn": "Repeat for every sales line.",
                  "bodyHi": "Repeat for every sales line.",
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
                  "Calculated column",
                  "Sales[Qty] * Sales[Price] is evaluated separately for each row."
                ],
                [
                  "Iterator",
                  "SUMX evaluates an expression over each row, then adds the results."
                ],
                [
                  "Filter vs row context",
                  "Row context identifies a row; filter context limits the set of rows."
                ],
                [
                  "Context transition",
                  "CALCULATE can transform row context into filter context in some calculations."
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
                "Line",
                "Qty",
                "Price",
                "LineTotal"
              ],
              "rows": [
                [
                  "1",
                  "2",
                  "100",
                  "200"
                ],
                [
                  "2",
                  "3",
                  "50",
                  "150"
                ],
                [
                  "3",
                  "1",
                  "80",
                  "80"
                ]
              ],
              "noteEn": "Each line has its own Qty and Price. Total revenue is 430.",
              "noteHi": "Each line has its own Qty and Price. Total revenue is 430."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Row context = which row am I calculating right now?",
              "bodyHi": "Remember: Row context = which row am I calculating right now?"
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Row context means an expression is evaluated for a current row. Calculated columns naturally have row context. Iterator functions such as SUMX also create row context while they visit rows in a table.",
        "bodyHi": "Row context means an expression is evaluated for a current row. Calculated columns naturally have row context. Iterator functions such as SUMX also create row context while they visit rows in a table."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Row Context Overview",
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
                  "Inspect the grain: one row represents one order line."
                ],
                [
                  "2",
                  "Create a calculated column for Qty multiplied by Price if needed."
                ],
                [
                  "3",
                  "Alternatively create a SUMX measure to multiply and add rows dynamically."
                ],
                [
                  "4",
                  "Check the row products: 200, 150 and 80."
                ],
                [
                  "5",
                  "Verify the total is 430 and compare behavior under filters."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Total Revenue =\nSUMX(Sales, Sales[Qty] * Sales[Price])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "SUMX visits each row of Sales in the current filter context.",
                  "hi": "SUMX visits each row of Sales in the current filter context."
                },
                {
                  "en": "Inside each row, Qty and Price refer to that row.",
                  "hi": "Inside each row, Qty and Price refer to that row."
                },
                {
                  "en": "The row results are added to produce Total Revenue.",
                  "hi": "The row results are added to produce Total Revenue."
                }
              ]
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
                  "en": "Do not assume row context automatically filters related tables.",
                  "hi": "Do not assume row context automatically filters related tables."
                },
                {
                  "en": "SUMX and SUM are not interchangeable for every expression.",
                  "hi": "SUMX and SUM are not interchangeable for every expression."
                },
                {
                  "en": "Use measures when the final result must respond to report filters.",
                  "hi": "Use measures when the final result must respond to report filters."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Row context is important for line totals, weighted calculations and iterator patterns.",
              "bodyHi": "Where analysts use this: Row context is important for line totals, weighted calculations and iterator patterns."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Row context = which row am I calculating right now?",
              "bodyHi": "Key takeaway: Row context = which row am I calculating right now?"
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A table stores quantity and price but has no precomputed revenue column.",
        "bodyHi": "Business situation: A table stores quantity and price but has no precomputed revenue column."
      }
    }
  ]
};

const M26_T07_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "DIVIDE and Safe Calculations",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 07",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "DIVIDE and Safe Calculations",
      "subtitle": "PREVENT ERRORS IN BUSINESS RATIOS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Numerator",
                  "bodyEn": "Profit or completed orders.",
                  "bodyHi": "Profit or completed orders.",
                  "tone": "lavender"
                },
                {
                  "title": "Denominator",
                  "bodyEn": "Revenue or all orders.",
                  "bodyHi": "Revenue or all orders.",
                  "tone": "sky"
                },
                {
                  "title": "DIVIDE",
                  "bodyEn": "Calculate a safe ratio.",
                  "bodyHi": "Calculate a safe ratio.",
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
                  "Numerator",
                  "The quantity being compared, such as Profit."
                ],
                [
                  "Denominator",
                  "The base quantity, such as Revenue."
                ],
                [
                  "Alternate result",
                  "Optional constant returned when denominator is zero or blank."
                ],
                [
                  "Percentage format",
                  "Format a ratio measure as a percentage in the model or visual."
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
                "Region",
                "Profit",
                "Revenue",
                "Margin"
              ],
              "rows": [
                [
                  "East",
                  "200",
                  "1000",
                  "20%"
                ],
                [
                  "West",
                  "0",
                  "0",
                  "blank"
                ],
                [
                  "North",
                  "150",
                  "750",
                  "20%"
                ]
              ],
              "noteEn": "West has no revenue; its margin is undefined rather than 0% by default.",
              "noteHi": "West has no revenue; its margin is undefined rather than 0% by default."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: DIVIDE protects the calculation; the business still defines what blank should mean.",
              "bodyHi": "Remember: DIVIDE protects the calculation; the business still defines what blank should mean."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Ratios such as profit margin and conversion rate need division. DAX DIVIDE handles a zero or blank denominator more safely than the / operator by returning BLANK or a specified alternate result.",
        "bodyHi": "Ratios such as profit margin and conversion rate need division. DAX DIVIDE handles a zero or blank denominator more safely than the / operator by returning BLANK or a specified alternate result."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 07",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "DIVIDE and Safe Calculations",
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
                  "Create Profit and Revenue measures with correct definitions."
                ],
                [
                  "2",
                  "Create Profit Margin using DIVIDE([Profit], [Revenue])."
                ],
                [
                  "3",
                  "Format the result as Percentage."
                ],
                [
                  "4",
                  "Check East: 200 / 1000 = 20%."
                ],
                [
                  "5",
                  "Check West: denominator 0, so the result is BLANK unless an alternate result is specified."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Profit Margin = DIVIDE([Profit], [Revenue])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "[Profit] is the numerator.",
                  "hi": "[Profit] is the numerator."
                },
                {
                  "en": "[Revenue] is the denominator.",
                  "hi": "[Revenue] is the denominator."
                },
                {
                  "en": "DIVIDE avoids an invalid division result when the denominator is zero or blank.",
                  "hi": "DIVIDE avoids an invalid division result when the denominator is zero or blank."
                }
              ]
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
                  "en": "Do not replace undefined ratios with 0% unless the business agrees.",
                  "hi": "Do not replace undefined ratios with 0% unless the business agrees."
                },
                {
                  "en": "Avoid multiplying by 100 if Percentage formatting already handles display.",
                  "hi": "Avoid multiplying by 100 if Percentage formatting already handles display."
                },
                {
                  "en": "Check whether missing denominator data is a quality issue.",
                  "hi": "Check whether missing denominator data is a quality issue."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Conversion rates, margins and average values use safe division.",
              "bodyHi": "Where analysts use this: Conversion rates, margins and average values use safe division."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: DIVIDE protects the calculation; the business still defines what blank should mean.",
              "bodyHi": "Key takeaway: DIVIDE protects the calculation; the business still defines what blank should mean."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager wants Profit Margin by region, including regions with no revenue.",
        "bodyHi": "Business situation: A manager wants Profit Margin by region, including regions with no revenue."
      }
    }
  ]
};

const M26_T08_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "IF and SWITCH in DAX",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 08",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "IF and SWITCH in DAX",
      "subtitle": "TURN RULES INTO CLEAR CATEGORIES",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Condition",
                  "bodyEn": "Check a business rule.",
                  "bodyHi": "Check a business rule.",
                  "tone": "lavender"
                },
                {
                  "title": "Branch",
                  "bodyEn": "Choose the matching outcome.",
                  "bodyHi": "Choose the matching outcome.",
                  "tone": "sky"
                },
                {
                  "title": "Result",
                  "bodyEn": "Return a label or number.",
                  "bodyHi": "Return a label or number.",
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
                  "IF",
                  "Best for a simple true/false decision."
                ],
                [
                  "SWITCH",
                  "Useful for several explicit values or ordered conditions."
                ],
                [
                  "SWITCH(TRUE())",
                  "A common pattern for testing multiple logical conditions."
                ],
                [
                  "Rule order",
                  "In ordered conditions, place more specific or higher thresholds first."
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
                "Sales",
                "Expected category"
              ],
              "rows": [
                [
                  "15,000",
                  "High"
                ],
                [
                  "8,000",
                  "Medium"
                ],
                [
                  "2,000",
                  "Low"
                ]
              ],
              "noteEn": "Illustrative thresholds: High >= 10,000; Medium >= 5,000; otherwise Low.",
              "noteHi": "Illustrative thresholds: High >= 10,000; Medium >= 5,000; otherwise Low."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Clear business rules must come before DAX syntax.",
              "bodyHi": "Remember: Clear business rules must come before DAX syntax."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "IF returns one result when a condition is true and another when it is false. SWITCH can choose among multiple cases. These functions are useful for business labels, thresholds and status classifications.",
        "bodyHi": "IF returns one result when a condition is true and another when it is false. SWITCH can choose among multiple cases. These functions are useful for business labels, thresholds and status classifications."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 08",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "IF and SWITCH in DAX",
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
                  "Write down agreed thresholds before creating DAX."
                ],
                [
                  "2",
                  "For two outcomes, use IF with a clear condition."
                ],
                [
                  "3",
                  "For three outcomes, use SWITCH(TRUE()) with ordered rules."
                ],
                [
                  "4",
                  "Test boundary values such as 5,000 and 10,000."
                ],
                [
                  "5",
                  "Confirm the labels match the business definition after filtering."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Performance =\nSWITCH(\n    TRUE(),\n    [Total Sales] >= 10000, \"High\",\n    [Total Sales] >= 5000, \"Medium\",\n    \"Low\"\n)"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "TRUE() allows each following condition to be tested in order.",
                  "hi": "TRUE() allows each following condition to be tested in order."
                },
                {
                  "en": "The first matching condition determines the result.",
                  "hi": "The first matching condition determines the result."
                },
                {
                  "en": "The final \"Low\" is the default when no earlier rule matches.",
                  "hi": "The final \"Low\" is the default when no earlier rule matches."
                }
              ]
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
                  "en": "Put higher thresholds first or lower ones may capture all high values.",
                  "hi": "Put higher thresholds first or lower ones may capture all high values."
                },
                {
                  "en": "Do not hide missing data under an incorrect default category.",
                  "hi": "Do not hide missing data under an incorrect default category."
                },
                {
                  "en": "Use a measure or column according to whether the category should change with filters.",
                  "hi": "Use a measure or column according to whether the category should change with filters."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Performance bands, risk flags and service statuses often use IF or SWITCH.",
              "bodyHi": "Where analysts use this: Performance bands, risk flags and service statuses often use IF or SWITCH."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Clear business rules must come before DAX syntax.",
              "bodyHi": "Key takeaway: Clear business rules must come before DAX syntax."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales team wants a High, Medium or Low performance label for each store.",
        "bodyHi": "Business situation: A sales team wants a High, Medium or Low performance label for each store."
      }
    }
  ]
};

const M26_T09_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "Time Intelligence Fundamentals",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 09",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Time Intelligence Fundamentals",
      "subtitle": "COMPARE PERIODS WITH A PROPER DATE MODEL",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Date table",
                  "bodyEn": "Continuous calendar with unique dates.",
                  "bodyHi": "Continuous calendar with unique dates.",
                  "tone": "lavender"
                },
                {
                  "title": "Base measure",
                  "bodyEn": "Total Sales for current filters.",
                  "bodyHi": "Total Sales for current filters.",
                  "tone": "sky"
                },
                {
                  "title": "Time shift",
                  "bodyEn": "Evaluate a previous period.",
                  "bodyHi": "Evaluate a previous period.",
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
                  "Base measure",
                  "Start with a trusted measure such as Total Sales."
                ],
                [
                  "Date table",
                  "Use a consistent calendar and mark it appropriately when required."
                ],
                [
                  "Prior-year measure",
                  "Evaluate the same measure for dates in the previous year."
                ],
                [
                  "Growth rate",
                  "Compare current and prior period using safe division."
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
                "Year",
                "Sales",
                "Prior year",
                "Growth"
              ],
              "rows": [
                [
                  "2025",
                  "1000",
                  "-",
                  "-"
                ],
                [
                  "2026",
                  "1200",
                  "1000",
                  "20%"
                ]
              ],
              "noteEn": "Illustrative example: (1200 - 1000) / 1000 = 20%.",
              "noteHi": "Illustrative example: (1200 - 1000) / 1000 = 20%."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Trustworthy time comparisons require a trustworthy calendar and matching periods.",
              "bodyHi": "Remember: Trustworthy time comparisons require a trustworthy calendar and matching periods."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Time-intelligence calculations compare values across dates, months, quarters or years. Many classic DAX time-intelligence functions work best with a proper date table and a valid relationship to the fact table.",
        "bodyHi": "Time-intelligence calculations compare values across dates, months, quarters or years. Many classic DAX time-intelligence functions work best with a proper date table and a valid relationship to the fact table."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 09",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Time Intelligence Fundamentals",
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
                  "Create or verify a date table covering both years."
                ],
                [
                  "2",
                  "Relate the date table to the Sales date column."
                ],
                [
                  "3",
                  "Create a base Total Sales measure and verify its total."
                ],
                [
                  "4",
                  "Create a Sales PY measure using SAMEPERIODLASTYEAR."
                ],
                [
                  "5",
                  "Calculate YoY Growth using DIVIDE and test at month and year levels."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Sales PY =\nCALCULATE(\n    [Total Sales],\n    SAMEPERIODLASTYEAR('Date'[Date])\n)\nYoY Growth = DIVIDE([Total Sales]-[Sales PY],[Sales PY])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "SAMEPERIODLASTYEAR supplies the prior-year date set.",
                  "hi": "SAMEPERIODLASTYEAR supplies the prior-year date set."
                },
                {
                  "en": "CALCULATE reevaluates Total Sales for that set.",
                  "hi": "CALCULATE reevaluates Total Sales for that set."
                },
                {
                  "en": "DIVIDE returns a safe year-over-year growth ratio.",
                  "hi": "DIVIDE returns a safe year-over-year growth ratio."
                }
              ]
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
                  "en": "Missing dates or incorrect relationships can distort time comparisons.",
                  "hi": "Missing dates or incorrect relationships can distort time comparisons."
                },
                {
                  "en": "Compare matching periods, not incomplete current months to full prior months.",
                  "hi": "Compare matching periods, not incomplete current months to full prior months."
                },
                {
                  "en": "Document calendar vs fiscal year assumptions.",
                  "hi": "Document calendar vs fiscal year assumptions."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Time intelligence supports monthly performance and year-over-year planning. Calendar versus fiscal time: A fiscal year may start in a month other than January. Define the organization’s calendar, handle incomplete periods, and verify the comparison using known totals before sharing the result.",
              "bodyHi": "Where analysts use this: Time intelligence supports monthly performance and year-over-year planning. Calendar versus fiscal time: A fiscal year may start in a month other than January. Define the organization’s calendar, handle incomplete periods, and verify the comparison using known totals before sharing the result."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Trustworthy time comparisons require a trustworthy calendar and matching periods.",
              "bodyHi": "Key takeaway: Trustworthy time comparisons require a trustworthy calendar and matching periods."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A business leader wants to compare current sales with the same period last year.",
        "bodyHi": "Business situation: A business leader wants to compare current sales with the same period last year."
      }
    }
  ]
};

const M26_T10_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M26",
  "moduleTitle": "DAX and Measures",
  "topic": "Validate DAX Results",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 10",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Validate DAX Results",
      "subtitle": "PROVE THAT A MEASURE ANSWERS THE RIGHT QUESTION",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Expected value",
                  "bodyEn": "Calculate a small trusted example.",
                  "bodyHi": "Calculate a small trusted example.",
                  "tone": "lavender"
                },
                {
                  "title": "DAX result",
                  "bodyEn": "Run the measure in a visual.",
                  "bodyHi": "Run the measure in a visual.",
                  "tone": "sky"
                },
                {
                  "title": "Compare",
                  "bodyEn": "Investigate differences and edge cases.",
                  "bodyHi": "Investigate differences and edge cases.",
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
                  "Base total",
                  "Check SUM against a known source total."
                ],
                [
                  "Filter test",
                  "Select one customer or region and compare manually."
                ],
                [
                  "Blank/zero test",
                  "Check how DIVIDE and missing data behave."
                ],
                [
                  "Grand total",
                  "A measure total may be recalculated at total context, not simply add visible rows."
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
                "Check",
                "Expected",
                "Observed"
              ],
              "rows": [
                [
                  "East sales",
                  "250",
                  "250"
                ],
                [
                  "West sales",
                  "200",
                  "200"
                ],
                [
                  "All sales",
                  "450",
                  "450"
                ]
              ],
              "noteEn": "Small manual examples make DAX easier to validate.",
              "noteHi": "Small manual examples make DAX easier to validate."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Test the business meaning, not only the formula syntax.",
              "bodyHi": "Remember: Test the business meaning, not only the formula syntax."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A DAX formula can run without errors and still be wrong for the business. Validation compares results with known totals, simple calculations and carefully chosen filter combinations. Test both the calculation and the model relationships it depends on.",
        "bodyHi": "A DAX formula can run without errors and still be wrong for the business. Validation compares results with known totals, simple calculations and carefully chosen filter combinations. Test both the calculation and the model relationships it depends on."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M26 | TOPIC 10",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Validate DAX Results",
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
                  "Write down the exact business definition of margin."
                ],
                [
                  "2",
                  "Check Profit and Revenue measures separately."
                ],
                [
                  "3",
                  "Calculate overall margin as total profit divided by total revenue."
                ],
                [
                  "4",
                  "Compare that with an unweighted average of regional percentages."
                ],
                [
                  "5",
                  "Test filters, blanks and unusual rows before approving the measure."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Margin = DIVIDE([Total Profit], [Total Revenue])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "The grand total recomputes the numerator and denominator in total context.",
                  "hi": "The grand total recomputes the numerator and denominator in total context."
                },
                {
                  "en": "It does not have to equal the simple average of region percentages.",
                  "hi": "It does not have to equal the simple average of region percentages."
                }
              ]
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
                  "en": "Do not judge correctness by whether a number looks plausible.",
                  "hi": "Do not judge correctness by whether a number looks plausible."
                },
                {
                  "en": "Do not average ratios without checking the intended weighting.",
                  "hi": "Do not average ratios without checking the intended weighting."
                },
                {
                  "en": "Check data types, relationships and filters when results differ.",
                  "hi": "Check data types, relationships and filters when results differ."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Validated measures make management reports safer to use for decisions.",
              "bodyHi": "Where analysts use this: Validated measures make management reports safer to use for decisions."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Test the business meaning, not only the formula syntax.",
              "bodyHi": "Key takeaway: Test the business meaning, not only the formula syntax."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A new profit margin measure looks reasonable but the grand total differs from the average of regional margins.",
        "bodyHi": "Business situation: A new profit margin measure looks reasonable but the grand total differs from the average of regional margins."
      }
    }
  ]
};

const M27_T01_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Choosing KPIs and Visuals",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Choosing KPIs and Visuals",
      "subtitle": "START WITH THE DECISION, NOT THE CHART",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Business question",
                  "bodyEn": "What decision is needed?",
                  "bodyHi": "What decision is needed?",
                  "tone": "lavender"
                },
                {
                  "title": "KPI definition",
                  "bodyEn": "Which metric answers it?",
                  "bodyHi": "Which metric answers it?",
                  "tone": "sky"
                },
                {
                  "title": "Visual",
                  "bodyEn": "Which display makes it clear?",
                  "bodyHi": "Which display makes it clear?",
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
                  "KPI",
                  "A clearly defined metric with units, time period and owner."
                ],
                [
                  "Card",
                  "Shows one important value such as Total Revenue."
                ],
                [
                  "Bar chart",
                  "Compares categories such as regions or products."
                ],
                [
                  "Line chart",
                  "Shows change across ordered time periods."
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
                "Business question",
                "KPI",
                "Visual"
              ],
              "rows": [
                [
                  "How much sold?",
                  "Total Sales",
                  "Card"
                ],
                [
                  "Which region leads?",
                  "Sales by Region",
                  "Bar"
                ],
                [
                  "Are sales rising?",
                  "Monthly Sales",
                  "Line"
                ]
              ],
              "noteEn": "Match each question to the most useful visual rather than using every chart type.",
              "noteHi": "Match each question to the most useful visual rather than using every chart type."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Every visual should answer a specific business question.",
              "bodyHi": "Remember: Every visual should answer a specific business question."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A KPI is a measurable value linked to a business goal. A visual is a way to communicate a KPI, comparison, trend, distribution or relationship. Good reports choose metrics and charts based on the question the audience needs answered.",
        "bodyHi": "A KPI is a measurable value linked to a business goal. A visual is a way to communicate a KPI, comparison, trend, distribution or relationship. Good reports choose metrics and charts based on the question the audience needs answered."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Choosing KPIs and Visuals",
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
                  "Write the decision question before building a report."
                ],
                [
                  "2",
                  "Define Total Sales, Sales Growth and Target Attainment precisely."
                ],
                [
                  "3",
                  "Use a Card for a headline total and a Bar chart for region comparison."
                ],
                [
                  "4",
                  "Use a Line chart for trends and a slicer only when it adds value."
                ],
                [
                  "5",
                  "Check titles, units, date range and source totals with stakeholders."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Match each question to the most useful visual rather than using every chart type. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Match each question to the most useful visual rather than using every chart type. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not call every available metric a KPI.",
                  "hi": "Do not call every available metric a KPI."
                },
                {
                  "en": "Avoid using pie charts for long rankings.",
                  "hi": "Avoid using pie charts for long rankings."
                },
                {
                  "en": "Do not show a percentage without explaining its numerator and denominator.",
                  "hi": "Do not show a percentage without explaining its numerator and denominator."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Clear KPI selection makes executive dashboards easier to act on.",
              "bodyHi": "Where analysts use this: Clear KPI selection makes executive dashboards easier to act on."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Every visual should answer a specific business question.",
              "bodyHi": "Key takeaway: Every visual should answer a specific business question."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A regional manager wants a quick answer about sales performance this month.",
        "bodyHi": "Business situation: A regional manager wants a quick answer about sales performance this month."
      }
    }
  ]
};

const M27_T02_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Cards, Tables and Matrices",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Cards, Tables and Matrices",
      "subtitle": "CHOOSE BETWEEN SUMMARY AND DETAIL",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Card",
                  "bodyEn": "One number: Total Sales.",
                  "bodyHi": "One number: Total Sales.",
                  "tone": "lavender"
                },
                {
                  "title": "Table",
                  "bodyEn": "Rows with Store, Region and Sales.",
                  "bodyHi": "Rows with Store, Region and Sales.",
                  "tone": "sky"
                },
                {
                  "title": "Matrix",
                  "bodyEn": "Region by Month with totals.",
                  "bodyHi": "Region by Month with totals.",
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
                  "Card",
                  "Useful for KPIs such as Revenue, Orders and Conversion Rate."
                ],
                [
                  "Table",
                  "Best for detailed rows and multiple fields."
                ],
                [
                  "Matrix",
                  "Useful for hierarchical categories, cross-tab layouts and subtotals."
                ],
                [
                  "Formatting",
                  "Use meaningful number formats, labels and conditional formatting sparingly."
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
                "Region",
                "Jan",
                "Feb",
                "Total"
              ],
              "rows": [
                [
                  "East",
                  "100",
                  "150",
                  "250"
                ],
                [
                  "West",
                  "80",
                  "120",
                  "200"
                ],
                [
                  "Total",
                  "180",
                  "270",
                  "450"
                ]
              ],
              "noteEn": "A matrix can display Region by Month with subtotals and grand totals.",
              "noteHi": "A matrix can display Region by Month with subtotals and grand totals."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Use Cards for headline values, Tables for detail and Matrices for grouped summaries.",
              "bodyHi": "Remember: Use Cards for headline values, Tables for detail and Matrices for grouped summaries."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Cards highlight a single metric. Tables show detailed records or flat summaries. Matrices group data into rows and columns and can show subtotals. Each visual serves a different level of detail.",
        "bodyHi": "Cards highlight a single metric. Tables show detailed records or flat summaries. Matrices group data into rows and columns and can show subtotals. Each visual serves a different level of detail."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Cards, Tables and Matrices",
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
                  "Create a Total Sales measure and place it in a Card."
                ],
                [
                  "2",
                  "Create a Table with Region and Total Sales for detailed comparison."
                ],
                [
                  "3",
                  "Create a Matrix with Region as Rows and Month as Columns."
                ],
                [
                  "4",
                  "Add the same Total Sales measure to Values and review totals."
                ],
                [
                  "5",
                  "Format currency and check that matrix subtotals are meaningful."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A matrix can display Region by Month with subtotals and grand totals. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "A matrix can display Region by Month with subtotals and grand totals. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not put too many fields in one Card.",
                  "hi": "Do not put too many fields in one Card."
                },
                {
                  "en": "A Matrix subtotal is calculated in its own filter context.",
                  "hi": "A Matrix subtotal is calculated in its own filter context."
                },
                {
                  "en": "Avoid tiny fonts and excessive conditional formatting.",
                  "hi": "Avoid tiny fonts and excessive conditional formatting."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Cards help scanning; tables and matrices support deeper inspection.",
              "bodyHi": "Where analysts use this: Cards help scanning; tables and matrices support deeper inspection."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Use Cards for headline values, Tables for detail and Matrices for grouped summaries.",
              "bodyHi": "Key takeaway: Use Cards for headline values, Tables for detail and Matrices for grouped summaries."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager wants a total sales KPI plus a breakdown by region and month.",
        "bodyHi": "Business situation: A manager wants a total sales KPI plus a breakdown by region and month."
      }
    }
  ]
};

const M27_T03_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Bar, Line and Combo Charts",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Bar, Line and Combo Charts",
      "subtitle": "SHOW COMPARISONS AND TRENDS CLEARLY",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Bar",
                  "bodyEn": "Compare sales across stores.",
                  "bodyHi": "Compare sales across stores.",
                  "tone": "lavender"
                },
                {
                  "title": "Line",
                  "bodyEn": "Follow sales month by month.",
                  "bodyHi": "Follow sales month by month.",
                  "tone": "sky"
                },
                {
                  "title": "Combo",
                  "bodyEn": "Show sales and margin together.",
                  "bodyHi": "Show sales and margin together.",
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
                  "Bar / column",
                  "Use for category comparison and ranking."
                ],
                [
                  "Line",
                  "Use an ordered date axis to show a trend."
                ],
                [
                  "Combo",
                  "Useful for related measures with different scales."
                ],
                [
                  "Axes",
                  "Label units and avoid distorted comparisons."
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
                "Margin"
              ],
              "rows": [
                [
                  "Jan",
                  "1000",
                  "12%"
                ],
                [
                  "Feb",
                  "1200",
                  "15%"
                ],
                [
                  "Mar",
                  "900",
                  "11%"
                ]
              ],
              "noteEn": "A line can show monthly Sales; a combo may add Margin on a separate axis.",
              "noteHi": "A line can show monthly Sales; a combo may add Margin on a separate axis."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Bar = categories, Line = time, Combo = carefully chosen related measures.",
              "bodyHi": "Remember: Bar = categories, Line = time, Combo = carefully chosen related measures."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Bar and column charts compare category values. Line charts show changes over time. Combo charts can display two related measures using columns and a line, but their axes and scales must be explained carefully.",
        "bodyHi": "Bar and column charts compare category values. Line charts show changes over time. Combo charts can display two related measures using columns and a line, but their axes and scales must be explained carefully."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Bar, Line and Combo Charts",
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
                  "Place Month from a proper date table on the horizontal axis."
                ],
                [
                  "2",
                  "Use a Line chart for the sales trend across months."
                ],
                [
                  "3",
                  "If margin is needed, consider a Combo chart with clearly labeled axes."
                ],
                [
                  "4",
                  "Check whether secondary axes could mislead the audience."
                ],
                [
                  "5",
                  "Use a Bar chart separately to rank regions or products."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "A line can show monthly Sales; a combo may add Margin on a separate axis. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "A line can show monthly Sales; a combo may add Margin on a separate axis. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not use alphabetical month names without proper sorting.",
                  "hi": "Do not use alphabetical month names without proper sorting."
                },
                {
                  "en": "Avoid 3D effects that distort values.",
                  "hi": "Avoid 3D effects that distort values."
                },
                {
                  "en": "Dual axes can make unrelated series appear strongly connected.",
                  "hi": "Dual axes can make unrelated series appear strongly connected."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Clear chart selection reduces the time needed to understand performance.",
              "bodyHi": "Where analysts use this: Clear chart selection reduces the time needed to understand performance."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Bar = categories, Line = time, Combo = carefully chosen related measures.",
              "bodyHi": "Key takeaway: Bar = categories, Line = time, Combo = carefully chosen related measures."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales manager wants to know which month performed best and whether margin followed sales.",
        "bodyHi": "Business situation: A sales manager wants to know which month performed best and whether margin followed sales."
      }
    }
  ]
};

const M27_T04_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Slicers and Filters",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Slicers and Filters",
      "subtitle": "LET USERS EXPLORE WITHOUT CHANGING THE DATA",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Select",
                  "bodyEn": "Choose Region = East.",
                  "bodyHi": "Choose Region = East.",
                  "tone": "lavender"
                },
                {
                  "title": "Filter context",
                  "bodyEn": "Limit matching rows.",
                  "bodyHi": "Limit matching rows.",
                  "tone": "sky"
                },
                {
                  "title": "Recalculate",
                  "bodyEn": "Update KPIs and charts.",
                  "bodyHi": "Update KPIs and charts.",
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
                  "Slicer",
                  "Visible control for selecting values such as Region or Year."
                ],
                [
                  "Visual-level filter",
                  "Affects only one selected visual."
                ],
                [
                  "Page-level filter",
                  "Affects visuals on the current page."
                ],
                [
                  "Report-level filter",
                  "Affects visuals across the report where applicable."
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
                "Region",
                "Sales"
              ],
              "rows": [
                [
                  "East",
                  "250"
                ],
                [
                  "West",
                  "200"
                ],
                [
                  "All",
                  "450"
                ]
              ],
              "noteEn": "Selecting East should show 250 in visuals that respond to the slicer.",
              "noteHi": "Selecting East should show 250 in visuals that respond to the slicer."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Slicers change the view of data, not the underlying records.",
              "bodyHi": "Remember: Slicers change the view of data, not the underlying records."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Slicers are on-page controls that filter report visuals. Power BI also has visual, page and report-level filters. These features change which data is displayed; they do not delete source records.",
        "bodyHi": "Slicers are on-page controls that filter report visuals. Power BI also has visual, page and report-level filters. These features change which data is displayed; they do not delete source records."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Slicers and Filters",
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
                  "Add a Region slicer to the report page."
                ],
                [
                  "2",
                  "Select East and check the Total Sales Card and trend chart."
                ],
                [
                  "3",
                  "Inspect Edit interactions if a visual does not respond as expected."
                ],
                [
                  "4",
                  "Check visual, page and report filters for hidden restrictions."
                ],
                [
                  "5",
                  "Add a clear Reset or default-state approach when needed."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Selecting East should show 250 in visuals that respond to the slicer. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Selecting East should show 250 in visuals that respond to the slicer. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not add so many slicers that the report becomes hard to use.",
                  "hi": "Do not add so many slicers that the report becomes hard to use."
                },
                {
                  "en": "Hidden filters can make totals appear incorrect.",
                  "hi": "Hidden filters can make totals appear incorrect."
                },
                {
                  "en": "Relationships affect whether a slicer can filter a table.",
                  "hi": "Relationships affect whether a slicer can filter a table."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Interactive filtering lets different teams use the same trusted report.",
              "bodyHi": "Where analysts use this: Interactive filtering lets different teams use the same trusted report."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Slicers change the view of data, not the underlying records.",
              "bodyHi": "Key takeaway: Slicers change the view of data, not the underlying records."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager wants to compare sales by region without opening separate reports.",
        "bodyHi": "Business situation: A manager wants to compare sales by region without opening separate reports."
      }
    }
  ]
};

const M27_T05_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Drill-Down and Drill-Through",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Drill-Down and Drill-Through",
      "subtitle": "MOVE FROM SUMMARY TO EXPLANATION",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Summary",
                  "bodyEn": "See yearly sales.",
                  "bodyHi": "See yearly sales.",
                  "tone": "lavender"
                },
                {
                  "title": "Explore",
                  "bodyEn": "Drill to quarters and months.",
                  "bodyHi": "Drill to quarters and months.",
                  "tone": "sky"
                },
                {
                  "title": "Details",
                  "bodyEn": "Drill through to a focused page.",
                  "bodyHi": "Drill through to a focused page.",
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
                  "Hierarchy",
                  "An ordered set of levels such as Year, Quarter and Month."
                ],
                [
                  "Drill-down",
                  "Moves to a lower level of the visual hierarchy."
                ],
                [
                  "Drill-through",
                  "Opens a target page using the selected context."
                ],
                [
                  "Back navigation",
                  "Lets users return from a drill-through detail page."
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
                "Level",
                "Example value",
                "Question"
              ],
              "rows": [
                [
                  "Year",
                  "2026",
                  "Overall performance?"
                ],
                [
                  "Quarter",
                  "Q2",
                  "Which quarter changed?"
                ],
                [
                  "Month",
                  "May",
                  "What happened in May?"
                ]
              ],
              "noteEn": "Drill-down keeps the analysis in one hierarchy; drill-through opens focused detail.",
              "noteHi": "Drill-down keeps the analysis in one hierarchy; drill-through opens focused detail."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Drill-down explores levels; drill-through opens contextual detail.",
              "bodyHi": "Remember: Drill-down explores levels; drill-through opens contextual detail."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Drill-down explores levels within a hierarchy in the same visual, such as Year to Quarter to Month. Drill-through navigates to a detail page filtered by a selected value, such as a particular customer or region.",
        "bodyHi": "Drill-down explores levels within a hierarchy in the same visual, such as Year to Quarter to Month. Drill-through navigates to a detail page filtered by a selected value, such as a particular customer or region."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Drill-Down and Drill-Through",
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
                  "Build a chart with a Year > Quarter > Month hierarchy."
                ],
                [
                  "2",
                  "Use drill controls to move from the year level to Q2 months."
                ],
                [
                  "3",
                  "Create a Store Details page and add Store as a drill-through field."
                ],
                [
                  "4",
                  "Open the detail page from a selected store and verify the filter context."
                ],
                [
                  "5",
                  "Provide a clear Back button to return to the original analysis."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Drill-down keeps the analysis in one hierarchy; drill-through opens focused detail. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Drill-down keeps the analysis in one hierarchy; drill-through opens focused detail. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Drill-down and drill-through are not the same action.",
                  "hi": "Drill-down and drill-through are not the same action."
                },
                {
                  "en": "A drill-through page needs the correct target field configuration.",
                  "hi": "A drill-through page needs the correct target field configuration."
                },
                {
                  "en": "Test what happens when the selected context contains multiple values.",
                  "hi": "Test what happens when the selected context contains multiple values."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: These features support investigation without overcrowding the main page.",
              "bodyHi": "Where analysts use this: These features support investigation without overcrowding the main page."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Drill-down explores levels; drill-through opens contextual detail.",
              "bodyHi": "Key takeaway: Drill-down explores levels; drill-through opens contextual detail."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A director sees a decline in Q2 and wants to identify which month and store caused it.",
        "bodyHi": "Business situation: A director sees a decline in Q2 and wants to identify which month and store caused it."
      }
    }
  ]
};

const M27_T06_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Tooltips and Bookmarks",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Tooltips and Bookmarks",
      "subtitle": "ADD CONTEXT AND GUIDED NAVIGATION",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Hover",
                  "bodyEn": "Point to a bar or line value.",
                  "bodyHi": "Point to a bar or line value.",
                  "tone": "lavender"
                },
                {
                  "title": "Tooltip",
                  "bodyEn": "Show extra context and metrics.",
                  "bodyHi": "Show extra context and metrics.",
                  "tone": "sky"
                },
                {
                  "title": "Bookmark",
                  "bodyEn": "Return to a saved report view.",
                  "bodyHi": "Return to a saved report view.",
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
                  "Default tooltip",
                  "Shows basic category and measure information."
                ],
                [
                  "Report page tooltip",
                  "A dedicated tooltip page with additional visuals."
                ],
                [
                  "Bookmark",
                  "Can capture data state, display state and page settings."
                ],
                [
                  "Buttons",
                  "Can trigger bookmarks or navigate to report pages."
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
                "Feature",
                "Example",
                "Benefit"
              ],
              "rows": [
                [
                  "Tooltip",
                  "Sales + Margin",
                  "More context"
                ],
                [
                  "Bookmark",
                  "Show Filters panel",
                  "Cleaner layout"
                ],
                [
                  "Button",
                  "Open Summary",
                  "Guided path"
                ]
              ],
              "noteEn": "Each feature should support understanding, not create hidden surprises.",
              "noteHi": "Each feature should support understanding, not create hidden surprises."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Use tooltips for context and bookmarks for intentional views.",
              "bodyHi": "Remember: Use tooltips for context and bookmarks for intentional views."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Tooltips explain a data point when a user hovers over a visual. Bookmarks capture a report state and can support navigation, show/hide panels and guided views. Used well, they add detail without filling the canvas with text.",
        "bodyHi": "Tooltips explain a data point when a user hovers over a visual. Bookmarks capture a report state and can support navigation, show/hide panels and guided views. Used well, they add detail without filling the canvas with text."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Tooltips and Bookmarks",
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
                  "Create a tooltip that adds Product Margin to a Sales chart."
                ],
                [
                  "2",
                  "Test that tooltip values reflect the hovered product and current filters."
                ],
                [
                  "3",
                  "Build a collapsible help panel or alternate view."
                ],
                [
                  "4",
                  "Create a bookmark with the intended display state."
                ],
                [
                  "5",
                  "Connect a button to the bookmark and test it after changing slicers."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Each feature should support understanding, not create hidden surprises. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Each feature should support understanding, not create hidden surprises. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Bookmarks can unintentionally reset slicers if data state is captured.",
                  "hi": "Bookmarks can unintentionally reset slicers if data state is captured."
                },
                {
                  "en": "Do not hide essential KPI definitions only in tooltips.",
                  "hi": "Do not hide essential KPI definitions only in tooltips."
                },
                {
                  "en": "Keep navigation labels obvious for first-time users.",
                  "hi": "Keep navigation labels obvious for first-time users."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Tooltips and bookmarks can make dense dashboards easier to explore.",
              "bodyHi": "Where analysts use this: Tooltips and bookmarks can make dense dashboards easier to explore."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Use tooltips for context and bookmarks for intentional views.",
              "bodyHi": "Key takeaway: Use tooltips for context and bookmarks for intentional views."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An executive wants extra product details on hover and a button to open a clean summary view.",
        "bodyHi": "Business situation: An executive wants extra product details on hover and a button to open a clean summary view."
      }
    }
  ]
};

const M27_T07_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Layout, Color and Accessibility",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 07",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Layout, Color and Accessibility",
      "subtitle": "DESIGN FOR FAST READING BY EVERYONE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Hierarchy",
                  "bodyEn": "Important KPIs appear first.",
                  "bodyHi": "Important KPIs appear first.",
                  "tone": "lavender"
                },
                {
                  "title": "Consistency",
                  "bodyEn": "Use aligned cards and stable colors.",
                  "bodyHi": "Use aligned cards and stable colors.",
                  "tone": "sky"
                },
                {
                  "title": "Accessibility",
                  "bodyEn": "Add contrast, labels and alt text.",
                  "bodyHi": "Add contrast, labels and alt text.",
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
                  "Visual hierarchy",
                  "Place the most important question and KPI where the eye lands first."
                ],
                [
                  "Color meaning",
                  "Use colors consistently; avoid red/green as the only status signal."
                ],
                [
                  "Contrast",
                  "Ensure text and data labels remain readable on backgrounds."
                ],
                [
                  "Accessibility tools",
                  "Use descriptive titles, alt text, keyboard navigation and logical tab order."
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
                "Element",
                "Good choice",
                "Risk"
              ],
              "rows": [
                [
                  "KPI card",
                  "Large value + unit",
                  "Unlabeled number"
                ],
                [
                  "Chart",
                  "Clear title + axis",
                  "Tiny labels"
                ],
                [
                  "Status",
                  "Text + color",
                  "Color alone"
                ]
              ],
              "noteEn": "Accessible design improves clarity for all users.",
              "noteHi": "Accessible design improves clarity for all users."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: A clean report is readable, predictable and inclusive.",
              "bodyHi": "Remember: A clean report is readable, predictable and inclusive."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A dashboard should be readable, consistent and accessible. Layout determines reading order, color communicates meaning and accessibility features help people with different visual or interaction needs.",
        "bodyHi": "A dashboard should be readable, consistent and accessible. Layout determines reading order, color communicates meaning and accessibility features help people with different visual or interaction needs."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 07",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Layout, Color and Accessibility",
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
                  "Define a clear grid and align cards to consistent edges."
                ],
                [
                  "2",
                  "Place headline KPIs above supporting charts."
                ],
                [
                  "3",
                  "Use a limited color palette with clear semantic meaning."
                ],
                [
                  "4",
                  "Check contrast, text size, alt text and tab order."
                ],
                [
                  "5",
                  "Test the page at realistic screen sizes and with keyboard navigation."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Accessible design improves clarity for all users. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Accessible design improves clarity for all users. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Avoid decorative elements that compete with important numbers.",
                  "hi": "Avoid decorative elements that compete with important numbers."
                },
                {
                  "en": "Do not rely on color alone to explain good or bad performance.",
                  "hi": "Do not rely on color alone to explain good or bad performance."
                },
                {
                  "en": "Check accessibility after adding custom visuals or interactions.",
                  "hi": "Check accessibility after adding custom visuals or interactions."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Accessible reports help executives, analysts and new employees use the same information.",
              "bodyHi": "Where analysts use this: Accessible reports help executives, analysts and new employees use the same information."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: A clean report is readable, predictable and inclusive.",
              "bodyHi": "Key takeaway: A clean report is readable, predictable and inclusive."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A report looks attractive on the designer’s screen but is hard to read on a small laptop.",
        "bodyHi": "Business situation: A report looks attractive on the designer’s screen but is hard to read on a small laptop."
      }
    }
  ]
};

const M27_T08_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M27",
  "moduleTitle": "Visuals and Dashboard Design",
  "topic": "Designing an Executive Dashboard",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 08",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Designing an Executive Dashboard",
      "subtitle": "TURN MANY CHARTS INTO ONE DECISION STORY",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Headline",
                  "bodyEn": "Are we on target?",
                  "bodyHi": "Are we on target?",
                  "tone": "lavender"
                },
                {
                  "title": "Explanation",
                  "bodyEn": "What changed and where?",
                  "bodyHi": "What changed and where?",
                  "tone": "sky"
                },
                {
                  "title": "Action",
                  "bodyEn": "What should leaders investigate?",
                  "bodyHi": "What should leaders investigate?",
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
                  "Top row",
                  "Three to five trusted KPIs with clear time periods and units."
                ],
                [
                  "Middle section",
                  "Trends and category comparisons that explain movement."
                ],
                [
                  "Bottom section",
                  "Risks, exceptions and supporting detail."
                ],
                [
                  "Navigation",
                  "Keep filters and drill-through clear and minimal."
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
                "KPI",
                "Current",
                "Target",
                "Status"
              ],
              "rows": [
                [
                  "Sales",
                  "1.2M",
                  "1.1M",
                  "Above"
                ],
                [
                  "Margin",
                  "18%",
                  "20%",
                  "Below"
                ],
                [
                  "Returns",
                  "3%",
                  "2%",
                  "Above"
                ]
              ],
              "noteEn": "Illustrative executive summary; the desired direction differs by KPI.",
              "noteHi": "Illustrative executive summary; the desired direction differs by KPI."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: An executive should see what happened, why it matters and where to act.",
              "bodyHi": "Remember: An executive should see what happened, why it matters and where to act."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "An executive dashboard summarizes business performance at a glance. It should show the most important KPIs, explain major changes and make the next decision obvious. It is not a place to display every available metric.",
        "bodyHi": "An executive dashboard summarizes business performance at a glance. It should show the most important KPIs, explain major changes and make the next decision obvious. It is not a place to display every available metric."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M27 | TOPIC 08",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Designing an Executive Dashboard",
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
                  "Agree on the three business decisions the dashboard should support."
                ],
                [
                  "2",
                  "Define KPI calculations and validate them against trusted totals."
                ],
                [
                  "3",
                  "Place Sales, Margin and Returns in a clear first row."
                ],
                [
                  "4",
                  "Use a monthly trend and a region comparison to explain the numbers."
                ],
                [
                  "5",
                  "Add a short action note, then test with an executive who did not build the report."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Illustrative executive summary; the desired direction differs by KPI. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Illustrative executive summary; the desired direction differs by KPI. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not use the same green/red rule for KPIs with opposite desired directions.",
                  "hi": "Do not use the same green/red rule for KPIs with opposite desired directions."
                },
                {
                  "en": "Avoid charts that repeat the same information without adding insight.",
                  "hi": "Avoid charts that repeat the same information without adding insight."
                },
                {
                  "en": "Show dates and refresh status so readers know how current data is.",
                  "hi": "Show dates and refresh status so readers know how current data is."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: An executive dashboard connects performance measurement to action.",
              "bodyHi": "Where analysts use this: An executive dashboard connects performance measurement to action."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: An executive should see what happened, why it matters and where to act.",
              "bodyHi": "Key takeaway: An executive should see what happened, why it matters and where to act."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A CEO needs to understand monthly sales, profitability and returns in less than one minute.",
        "bodyHi": "Business situation: A CEO needs to understand monthly sales, profitability and returns in less than one minute."
      }
    }
  ]
};

const M28_T01_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M28",
  "moduleTitle": "Publishing, Security and Projects",
  "topic": "Publish Reports to Power BI Service",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Publish Reports to Power BI Service",
      "subtitle": "MOVE A LOCAL REPORT INTO A MANAGED WORKSPACE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Desktop",
                  "bodyEn": "Build and validate PBIX.",
                  "bodyHi": "Build and validate PBIX.",
                  "tone": "lavender"
                },
                {
                  "title": "Publish",
                  "bodyEn": "Choose an appropriate workspace.",
                  "bodyHi": "Choose an appropriate workspace.",
                  "tone": "sky"
                },
                {
                  "title": "Service",
                  "bodyEn": "Review model, report and access.",
                  "bodyHi": "Review model, report and access.",
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
                  "Workspace",
                  "A shared container for related Power BI content."
                ],
                [
                  "Semantic model",
                  "The published model that powers the report."
                ],
                [
                  "Report",
                  "The interactive report pages users open."
                ],
                [
                  "Refresh settings",
                  "May need credentials or a gateway for source access."
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
                "Check",
                "Reason"
              ],
              "rows": [
                [
                  "Before publish",
                  "Totals and filters",
                  "Correctness"
                ],
                [
                  "During publish",
                  "Workspace",
                  "Ownership"
                ],
                [
                  "After publish",
                  "Access and refresh",
                  "Usability"
                ]
              ],
              "noteEn": "Publishing is a delivery step, not the end of validation.",
              "noteHi": "Publishing is a delivery step, not the end of validation."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Publish, validate, secure and maintain the report.",
              "bodyHi": "Remember: Publish, validate, secure and maintain the report."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Publishing sends a Power BI Desktop report and its model to the Power BI Service. Once published, report owners can manage refresh, permissions and distribution. Publishing does not automatically make the report available to everyone.",
        "bodyHi": "Publishing sends a Power BI Desktop report and its model to the Power BI Service. Once published, report owners can manage refresh, permissions and distribution. Publishing does not automatically make the report available to everyone."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Publish Reports to Power BI Service",
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
                  "Save the report and verify important totals in Desktop."
                ],
                [
                  "2",
                  "Sign in with an authorized organizational account."
                ],
                [
                  "3",
                  "Choose Publish and select the intended workspace."
                ],
                [
                  "4",
                  "Open the report in the Service and check visuals and filters."
                ],
                [
                  "5",
                  "Configure source credentials, refresh and appropriate sharing permissions."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Publishing is a delivery step, not the end of validation. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Publishing is a delivery step, not the end of validation. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not publish confidential reports to the wrong workspace.",
                  "hi": "Do not publish confidential reports to the wrong workspace."
                },
                {
                  "en": "Published data may remain stale without a working refresh configuration.",
                  "hi": "Published data may remain stale without a working refresh configuration."
                },
                {
                  "en": "Licensing and capacity can affect who can view shared content.",
                  "hi": "Licensing and capacity can affect who can view shared content."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Publishing is the bridge from analyst development to team reporting.",
              "bodyHi": "Where analysts use this: Publishing is the bridge from analyst development to team reporting."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Publish, validate, secure and maintain the report.",
              "bodyHi": "Key takeaway: Publish, validate, secure and maintain the report."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst has finished a monthly sales report and needs managers to access it online.",
        "bodyHi": "Business situation: An analyst has finished a monthly sales report and needs managers to access it online."
      }
    }
  ]
};

const M28_T02_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M28",
  "moduleTitle": "Publishing, Security and Projects",
  "topic": "Workspaces and Sharing Permissions",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Workspaces and Sharing Permissions",
      "subtitle": "GIVE THE RIGHT PEOPLE THE RIGHT ACCESS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Workspace",
                  "bodyEn": "Store reports and semantic models.",
                  "bodyHi": "Store reports and semantic models.",
                  "tone": "lavender"
                },
                {
                  "title": "Roles",
                  "bodyEn": "Assign appropriate editing rights.",
                  "bodyHi": "Assign appropriate editing rights.",
                  "tone": "sky"
                },
                {
                  "title": "Distribution",
                  "bodyEn": "Share reports or publish an app.",
                  "bodyHi": "Share reports or publish an app.",
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
                  "Workspace roles",
                  "Admin, Member, Contributor and Viewer have different capabilities."
                ],
                [
                  "Least privilege",
                  "Give only the access a person needs."
                ],
                [
                  "App",
                  "A curated package of content distributed to an audience."
                ],
                [
                  "License rules",
                  "Viewer access and sharing depend on licenses and capacity configuration."
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
                "Person",
                "Need",
                "Typical approach"
              ],
              "rows": [
                [
                  "Report builder",
                  "Edit model/report",
                  "Appropriate editor role"
                ],
                [
                  "Manager",
                  "Read dashboards",
                  "Viewer/app access"
                ],
                [
                  "Owner",
                  "Manage access",
                  "Admin/owner rights"
                ]
              ],
              "noteEn": "Choose permissions from responsibilities, not convenience.",
              "noteHi": "Choose permissions from responsibilities, not convenience."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Give the minimum access required, then test what the user can actually see.",
              "bodyHi": "Remember: Give the minimum access required, then test what the user can actually see."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power BI workspaces organize content and allow teams to collaborate. Workspace roles and item permissions determine who can view, edit or manage content. A Power BI app can distribute curated reports to a wider audience.",
        "bodyHi": "Power BI workspaces organize content and allow teams to collaborate. Workspace roles and item permissions determine who can view, edit or manage content. A Power BI app can distribute curated reports to a wider audience."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Workspaces and Sharing Permissions",
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
                  "Create or select a workspace owned by the right team."
                ],
                [
                  "2",
                  "Identify who needs to edit, review or only view."
                ],
                [
                  "3",
                  "Assign workspace roles using least-privilege principles."
                ],
                [
                  "4",
                  "Distribute approved reports through a suitable sharing or app mechanism."
                ],
                [
                  "5",
                  "Test access using an account with the intended viewer permissions."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Choose permissions from responsibilities, not convenience. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Choose permissions from responsibilities, not convenience. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Workspace access and report sharing are not identical.",
                  "hi": "Workspace access and report sharing are not identical."
                },
                {
                  "en": "Do not give edit permissions just to solve a viewing problem.",
                  "hi": "Do not give edit permissions just to solve a viewing problem."
                },
                {
                  "en": "Row-level security and workspace roles interact; test real viewer access.",
                  "hi": "Row-level security and workspace roles interact; test real viewer access."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Good permissions protect sensitive data and reduce accidental report changes.",
              "bodyHi": "Where analysts use this: Good permissions protect sensitive data and reduce accidental report changes."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Give the minimum access required, then test what the user can actually see.",
              "bodyHi": "Key takeaway: Give the minimum access required, then test what the user can actually see."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A finance team needs editors, reviewers and managers to use one report safely.",
        "bodyHi": "Business situation: A finance team needs editors, reviewers and managers to use one report safely."
      }
    }
  ]
};

const M28_T03_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M28",
  "moduleTitle": "Publishing, Security and Projects",
  "topic": "Scheduled Refresh and Credentials",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Scheduled Refresh and Credentials",
      "subtitle": "KEEP REPORT DATA CURRENT AND RELIABLE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Source",
                  "bodyEn": "File, cloud system or database.",
                  "bodyHi": "File, cloud system or database.",
                  "tone": "lavender"
                },
                {
                  "title": "Connection",
                  "bodyEn": "Credentials and possibly gateway.",
                  "bodyHi": "Credentials and possibly gateway.",
                  "tone": "sky"
                },
                {
                  "title": "Refresh",
                  "bodyEn": "Update model, then check results.",
                  "bodyHi": "Update model, then check results.",
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
                  "Scheduled refresh",
                  "Runs a refresh according to a configured schedule, subject to service limits."
                ],
                [
                  "Credentials",
                  "Authentication details that allow the Service to read the source."
                ],
                [
                  "Gateway",
                  "Connects supported on-premises sources to the cloud Service."
                ],
                [
                  "Refresh history",
                  "Shows successes, failures and useful diagnostic information."
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
                "Issue",
                "Likely cause",
                "First check"
              ],
              "rows": [
                [
                  "Login error",
                  "Expired credentials",
                  "Authentication"
                ],
                [
                  "Source not found",
                  "Moved file/path",
                  "Connection path"
                ],
                [
                  "Gateway offline",
                  "Gateway unavailable",
                  "Gateway status"
                ]
              ],
              "noteEn": "Refresh failure is often a connection or source-change problem.",
              "noteHi": "Refresh failure is often a connection or source-change problem."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Fresh reports require reachable sources, valid credentials and validation.",
              "bodyHi": "Remember: Fresh reports require reachable sources, valid credentials and validation."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Scheduled refresh updates imported data in the Power BI Service according to a configured schedule. The Service must be able to reach the source with valid credentials. Some on-premises sources require an on-premises data gateway.",
        "bodyHi": "Scheduled refresh updates imported data in the Power BI Service according to a configured schedule. The Service must be able to reach the source with valid credentials. Some on-premises sources require an on-premises data gateway."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Scheduled Refresh and Credentials",
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
                  "Open the semantic model refresh settings in the Service."
                ],
                [
                  "2",
                  "Check source credentials and whether a gateway is needed."
                ],
                [
                  "3",
                  "Review the schedule, time zone and refresh history."
                ],
                [
                  "4",
                  "Open the failure details and correct the source or connection issue."
                ],
                [
                  "5",
                  "Run a manual refresh and compare totals with the current source."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Refresh failure is often a connection or source-change problem. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Refresh failure is often a connection or source-change problem. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "A refresh success does not guarantee that the source contains all expected records.",
                  "hi": "A refresh success does not guarantee that the source contains all expected records."
                },
                {
                  "en": "Import data does not update continuously without refresh.",
                  "hi": "Import data does not update continuously without refresh."
                },
                {
                  "en": "DirectQuery follows different query behavior and should not be treated as Import refresh.",
                  "hi": "DirectQuery follows different query behavior and should not be treated as Import refresh."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Refresh monitoring is essential for daily operations and leadership dashboards.",
              "bodyHi": "Where analysts use this: Refresh monitoring is essential for daily operations and leadership dashboards."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Fresh reports require reachable sources, valid credentials and validation.",
              "bodyHi": "Key takeaway: Fresh reports require reachable sources, valid credentials and validation."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A daily sales dashboard shows yesterday’s numbers because its overnight refresh failed.",
        "bodyHi": "Business situation: A daily sales dashboard shows yesterday’s numbers because its overnight refresh failed."
      }
    }
  ]
};

const M28_T04_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M28",
  "moduleTitle": "Publishing, Security and Projects",
  "topic": "Row-Level Security Overview",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Row-Level Security Overview",
      "subtitle": "SHOW EACH USER ONLY AUTHORIZED ROWS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Role",
                  "bodyEn": "Define a row filter.",
                  "bodyHi": "Define a row filter.",
                  "tone": "lavender"
                },
                {
                  "title": "Assign",
                  "bodyEn": "Map permitted users to the role.",
                  "bodyHi": "Map permitted users to the role.",
                  "tone": "sky"
                },
                {
                  "title": "Test",
                  "bodyEn": "Verify each viewer sees only allowed data.",
                  "bodyHi": "Verify each viewer sees only allowed data.",
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
                  "Static RLS",
                  "A role contains a fixed filter such as Region = \"East\"."
                ],
                [
                  "Dynamic RLS",
                  "Uses user identity and a security mapping table for scalable access."
                ],
                [
                  "Test as role",
                  "Checks how a role filters data; real Service testing is still needed."
                ],
                [
                  "Workspace permissions",
                  "RLS typically restricts Viewer-level consumers, not Admin, Member or Contributor editors."
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
                "Viewer",
                "Allowed region",
                "Expected sales"
              ],
              "rows": [
                [
                  "East manager",
                  "East",
                  "250"
                ],
                [
                  "West manager",
                  "West",
                  "200"
                ],
                [
                  "Report owner",
                  "Role dependent",
                  "Test separately"
                ]
              ],
              "noteEn": "Illustrative example: role membership determines the allowed region.",
              "noteHi": "Illustrative example: role membership determines the allowed region."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: RLS controls data visibility; test permissions and relationships together.",
              "bodyHi": "Remember: RLS controls data visibility; test permissions and relationships together."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Row-level security (RLS) restricts which data rows a viewer can see. For example, a regional manager may be allowed to view only their region. RLS is defined in the model and must be tested in the Service under the intended user permissions.",
        "bodyHi": "Row-level security (RLS) restricts which data rows a viewer can see. For example, a regional manager may be allowed to view only their region. RLS is defined in the model and must be tested in the Service under the intended user permissions."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Row-Level Security Overview",
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
                  "Create a role with an appropriate Region filter in the model."
                ],
                [
                  "2",
                  "Confirm the Region dimension filters the Sales fact table correctly."
                ],
                [
                  "3",
                  "Use View as role to inspect the visible rows in Desktop."
                ],
                [
                  "4",
                  "Publish and assign the intended users to roles in the Service."
                ],
                [
                  "5",
                  "Test using a real viewer account and verify that unauthorized regions are hidden."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "-- Illustrative role filter on DimRegion:\nDimRegion[Region] = \"East\""
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "This is a role filter expression, not a normal report measure.",
                  "hi": "This is a role filter expression, not a normal report measure."
                },
                {
                  "en": "The relationship must propagate the Region filter to Sales.",
                  "hi": "The relationship must propagate the Region filter to Sales."
                }
              ]
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
                  "en": "Hiding a slicer is not data security.",
                  "hi": "Hiding a slicer is not data security."
                },
                {
                  "en": "Do not assume RLS limits workspace editors in the same way as viewers.",
                  "hi": "Do not assume RLS limits workspace editors in the same way as viewers."
                },
                {
                  "en": "Test both permitted and forbidden rows, including detail and export behavior.",
                  "hi": "Test both permitted and forbidden rows, including detail and export behavior."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: RLS helps teams share one model with region-specific access. Security validation checklist: Test at least two different viewer identities, verify allowed and forbidden rows, inspect exports or detail access under policy, and confirm that workspace editor roles are not being mistaken for restricted viewers.",
              "bodyHi": "Where analysts use this: RLS helps teams share one model with region-specific access. Security validation checklist: Test at least two different viewer identities, verify allowed and forbidden rows, inspect exports or detail access under policy, and confirm that workspace editor roles are not being mistaken for restricted viewers."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: RLS controls data visibility; test permissions and relationships together.",
              "bodyHi": "Key takeaway: RLS controls data visibility; test permissions and relationships together."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A national report must be shared with regional managers without exposing other regions.",
        "bodyHi": "Business situation: A national report must be shared with regional managers without exposing other regions."
      }
    }
  ]
};

const M28_T05_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M28",
  "moduleTitle": "Publishing, Security and Projects",
  "topic": "Performance and Usability Checks",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Performance and Usability Checks",
      "subtitle": "MAKE REPORTS FAST, CLEAR AND TRUSTWORTHY",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Measure",
                  "bodyEn": "Find slow pages and visuals.",
                  "bodyHi": "Find slow pages and visuals.",
                  "tone": "lavender"
                },
                {
                  "title": "Improve",
                  "bodyEn": "Simplify model, DAX and layout.",
                  "bodyHi": "Simplify model, DAX and layout.",
                  "tone": "sky"
                },
                {
                  "title": "Test",
                  "bodyEn": "Validate speed and clarity with users.",
                  "bodyHi": "Validate speed and clarity with users.",
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
                  "Performance Analyzer",
                  "Helps inspect visual query and rendering times in Desktop."
                ],
                [
                  "Model design",
                  "A clean star schema and suitable storage mode often improve performance."
                ],
                [
                  "Visual count",
                  "Too many visuals can increase query and rendering work."
                ],
                [
                  "Usability",
                  "Readable labels, clear slicers, accessible navigation and correct totals."
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
                "Symptom",
                "Possible cause",
                "Action"
              ],
              "rows": [
                [
                  "Slow page",
                  "Too many visuals",
                  "Reduce clutter"
                ],
                [
                  "Slow measure",
                  "Expensive DAX",
                  "Review formula"
                ],
                [
                  "Confusing filters",
                  "Hidden state",
                  "Improve labels"
                ]
              ],
              "noteEn": "Performance work should be guided by actual measurements.",
              "noteHi": "Performance work should be guided by actual measurements."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Improve measured bottlenecks without sacrificing correctness or accessibility.",
              "bodyHi": "Remember: Improve measured bottlenecks without sacrificing correctness or accessibility."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Performance checks find slow visuals and heavy queries. Usability checks confirm that users can read, filter and navigate the report. Both are needed: a fast report with confusing numbers is still a poor report.",
        "bodyHi": "Performance checks find slow visuals and heavy queries. Usability checks confirm that users can read, filter and navigate the report. Both are needed: a fast report with confusing numbers is still a poor report."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Performance and Usability Checks",
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
                  "Record the slow pages and user actions before changing anything."
                ],
                [
                  "2",
                  "Use Performance Analyzer to identify expensive visuals."
                ],
                [
                  "3",
                  "Review unnecessary columns, relationships and DAX complexity."
                ],
                [
                  "4",
                  "Simplify layouts and make active filters visible."
                ],
                [
                  "5",
                  "Retest response times, totals and keyboard/mobile usability."
                ]
              ]
            }
          ]
        },
        {
          "pill": "What the result should mean",
          "blocks": [
            {
              "type": "note",
              "tone": "lavender",
              "bodyEn": "Performance work should be guided by actual measurements. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Performance work should be guided by actual measurements. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not optimize only for the designer’s computer or one sample filter.",
                  "hi": "Do not optimize only for the designer’s computer or one sample filter."
                },
                {
                  "en": "Removing data or changing calculations can alter business results.",
                  "hi": "Removing data or changing calculations can alter business results."
                },
                {
                  "en": "A faster report is not better if it becomes misleading or inaccessible.",
                  "hi": "A faster report is not better if it becomes misleading or inaccessible."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Performance and usability reviews help reports succeed after publication.",
              "bodyHi": "Where analysts use this: Performance and usability reviews help reports succeed after publication."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Improve measured bottlenecks without sacrificing correctness or accessibility.",
              "bodyHi": "Key takeaway: Improve measured bottlenecks without sacrificing correctness or accessibility."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A report takes a long time to open and managers cannot tell which filters are active.",
        "bodyHi": "Business situation: A report takes a long time to open and managers cannot tell which filters are active."
      }
    }
  ]
};

const M28_T06_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M28",
  "moduleTitle": "Publishing, Security and Projects",
  "topic": "Power BI Sales Dashboard Project",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Power BI Sales Dashboard Project",
      "subtitle": "FOLLOW A COMPLETE ANALYST REPORTING WORKFLOW",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Prepare",
                  "bodyEn": "Clean sales, product and date data.",
                  "bodyHi": "Clean sales, product and date data.",
                  "tone": "lavender"
                },
                {
                  "title": "Model",
                  "bodyEn": "Relate tables and define KPIs.",
                  "bodyHi": "Relate tables and define KPIs.",
                  "tone": "sky"
                },
                {
                  "title": "Deliver",
                  "bodyEn": "Build, test and publish a report.",
                  "bodyHi": "Build, test and publish a report.",
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
                  "Business questions",
                  "How much sold? Which region grew? Which products lagged?"
                ],
                [
                  "Model",
                  "Use FactSales with Product, Region and Date dimensions."
                ],
                [
                  "Measures",
                  "Total Sales, Order Count, Average Order Value and Growth."
                ],
                [
                  "Report layout",
                  "KPI Cards, monthly trend, region ranking and detail table."
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
                "Metric",
                "Definition",
                "Example"
              ],
              "rows": [
                [
                  "Total Sales",
                  "Sum of sales amount",
                  "45,000"
                ],
                [
                  "Orders",
                  "Distinct order count",
                  "120"
                ],
                [
                  "Avg Order Value",
                  "Sales / Orders",
                  "375"
                ]
              ],
              "noteEn": "Illustrative figures: 45,000 / 120 = 375.",
              "noteHi": "Illustrative figures: 45,000 / 120 = 375."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: A complete reporting workflow ends with validated decisions and clear ownership.",
              "bodyHi": "Remember: A complete reporting workflow ends with validated decisions and clear ownership."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A sales dashboard combines data preparation, modeling, DAX, visualization, validation and sharing. The goal is not just to create charts: it is to answer business questions using trustworthy numbers and a report others can understand.",
        "bodyHi": "A sales dashboard combines data preparation, modeling, DAX, visualization, validation and sharing. The goal is not just to create charts: it is to answer business questions using trustworthy numbers and a report others can understand."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M28 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Power BI Sales Dashboard Project",
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
                  "Agree on the business questions, definitions and reporting period."
                ],
                [
                  "2",
                  "Import and clean sales records; check missing dates and duplicate orders."
                ],
                [
                  "3",
                  "Create a star schema with unique dimension keys."
                ],
                [
                  "4",
                  "Build and validate measures, including safe Average Order Value."
                ],
                [
                  "5",
                  "Design KPI Cards, trend and region charts; test slicers and publish securely."
                ]
              ]
            }
          ]
        },
        {
          "pill": "See the formula or expression",
          "blocks": [
            {
              "type": "sql",
              "label": "DAX / EXPRESSION",
              "code": "Total Sales = SUM(FactSales[SalesAmount])\nOrders = DISTINCTCOUNT(FactSales[OrderID])\nAvg Order Value = DIVIDE([Total Sales], [Orders])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "Total Sales sums the transaction amounts.",
                  "hi": "Total Sales sums the transaction amounts."
                },
                {
                  "en": "Orders counts unique order IDs, not order lines.",
                  "hi": "Orders counts unique order IDs, not order lines."
                },
                {
                  "en": "Avg Order Value safely divides revenue by unique orders.",
                  "hi": "Avg Order Value safely divides revenue by unique orders."
                }
              ]
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
                  "en": "Do not present example numbers as actual company results.",
                  "hi": "Do not present example numbers as actual company results."
                },
                {
                  "en": "Avoid publishing before checking totals and user permissions.",
                  "hi": "Avoid publishing before checking totals and user permissions."
                },
                {
                  "en": "Document assumptions, refresh schedule and known limitations.",
                  "hi": "Document assumptions, refresh schedule and known limitations."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: A well-designed dashboard supports recurring decisions, not only a one-time presentation. Final handover checklist: Explain data sources, refresh frequency, KPI definitions, filters, intended audience, permission settings and limitations. Confirm that a new team member can maintain the report without guessing.",
              "bodyHi": "Where analysts use this: A well-designed dashboard supports recurring decisions, not only a one-time presentation. Final handover checklist: Explain data sources, refresh frequency, KPI definitions, filters, intended audience, permission settings and limitations. Confirm that a new team member can maintain the report without guessing."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: A complete reporting workflow ends with validated decisions and clear ownership.",
              "bodyHi": "Key takeaway: A complete reporting workflow ends with validated decisions and clear ownership."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A retail team wants one monthly dashboard for leadership meetings.",
        "bodyHi": "Business situation: A retail team wants one monthly dashboard for leadership meetings."
      }
    }
  ]
};

export const POWER_BI_PART2_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  229: M26_T01_PBI_SPEC,
  230: M26_T02_PBI_SPEC,
  231: M26_T03_PBI_SPEC,
  232: M26_T04_PBI_SPEC,
  233: M26_T05_PBI_SPEC,
  234: M26_T06_PBI_SPEC,
  235: M26_T07_PBI_SPEC,
  236: M26_T08_PBI_SPEC,
  237: M26_T09_PBI_SPEC,
  238: M26_T10_PBI_SPEC,
  239: M27_T01_PBI_SPEC,
  240: M27_T02_PBI_SPEC,
  241: M27_T03_PBI_SPEC,
  242: M27_T04_PBI_SPEC,
  243: M27_T05_PBI_SPEC,
  244: M27_T06_PBI_SPEC,
  245: M27_T07_PBI_SPEC,
  246: M27_T08_PBI_SPEC,
  247: M28_T01_PBI_SPEC,
  248: M28_T02_PBI_SPEC,
  249: M28_T03_PBI_SPEC,
  250: M28_T04_PBI_SPEC,
  251: M28_T05_PBI_SPEC,
  252: M28_T06_PBI_SPEC,
};
